"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * "Electric field" — the signature hero scene.
 *
 * A single draw call: ~13k GL_POINTS displaced in a custom vertex shader by
 * two travelling sine carriers + value noise (an abstract oscilloscope
 * surface), with a pointer-following ripple and a radial dissolve-in.
 * Scroll progress (uScroll) morphs the surface: amplitude collapses and the
 * grid tightens as the next section approaches — the scroll-linked mesh
 * distortion requested in the brief.
 */

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uReveal;
  uniform float uScroll;
  uniform vec2  uPointer;
  uniform float uPixelRatio;

  attribute float aRand;

  varying float vIntensity;
  varying float vRand;
  varying float vAlpha;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  void main() {
    vec3 pos = position;
    float t = uTime * 0.55;

    // travelling waveform: crossing carriers + low-frequency noise breathing
    float carrier = sin(pos.x * 0.55 + t * 2.0) * 0.45
                  + sin(pos.x * 0.22 - t * 1.15 + pos.y * 0.35) * 0.35;
    float field = vnoise(pos.xy * 0.35 + t * 0.15) - 0.5;

    // scroll morph: surface calms and flattens as the user scrolls away
    float amp = mix(1.0, 0.22, smoothstep(0.0, 1.0, uScroll));
    pos.z += (carrier + field * 1.7) * amp;

    // pointer ripple (interactive lighting of the surface)
    float d = distance(pos.xy, uPointer);
    pos.z += exp(-d * 0.5) * sin(d * 3.0 - uTime * 4.0) * 0.55 * amp;

    // radial dissolve-in
    float radius = length(position.xy);
    float reveal = smoothstep(radius * 0.055, radius * 0.055 + 0.4, uReveal * 1.7);

    vIntensity = pos.z;
    vRand = aRand;
    vAlpha = reveal;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = (1.35 + aRand * 1.9) * uPixelRatio * reveal;
    gl_PointSize = size * (13.0 / max(0.001, -mv.z));
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorHot;

  varying float vIntensity;
  varying float vRand;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float disc = smoothstep(0.5, 0.1, length(uv));

    vec3 color = mix(uColorA, uColorB, smoothstep(-1.3, 1.4, vIntensity));
    color = mix(color, uColorHot, smoothstep(0.85, 1.6, vIntensity) * 0.85);

    float alpha = disc * vAlpha * (0.5 + vRand * 0.5);
    if (alpha < 0.012) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

const FIELD_W = 38;
const FIELD_H = 22;
const COLS = 150;
const ROWS = 88;

export function ElectricField({
  scrollRef,
  animated = true,
}: {
  /** 0→1 scroll progress written by the hero's ScrollTrigger. */
  scrollRef: React.RefObject<number>;
  animated?: boolean;
}) {
  const material = useRef<THREE.ShaderMaterial>(null);
  const points = useRef<THREE.Points>(null);
  const gl = useThree((s) => s.gl);

  const { geometry, uniforms } = useMemo(() => {
    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const rand = new Float32Array(count);
    let i = 0;
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        positions[i * 3] = (x / (COLS - 1) - 0.5) * FIELD_W;
        positions[i * 3 + 1] = (y / (ROWS - 1) - 0.5) * FIELD_H;
        positions[i * 3 + 2] = 0;
        rand[i] = Math.random();
        i++;
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("aRand", new THREE.BufferAttribute(rand, 1));

    const uniforms = {
      uTime: { value: 0 },
      uReveal: { value: 0 },
      uScroll: { value: 0 },
      uPointer: { value: new THREE.Vector2(999, 999) },
      uPixelRatio: { value: 1 },
      uColorA: { value: new THREE.Color("#123a52") },
      uColorB: { value: new THREE.Color("#22d3ee") },
      uColorHot: { value: new THREE.Color("#a78bfa") },
    };
    return { geometry, uniforms };
  }, []);

  useFrame((state, delta) => {
    const mat = material.current;
    if (!mat) return;

    mat.uniforms.uPixelRatio!.value = gl.getPixelRatio();

    if (animated) {
      mat.uniforms.uTime!.value += delta;
      // intro dissolve
      mat.uniforms.uReveal!.value = THREE.MathUtils.damp(
        mat.uniforms.uReveal!.value,
        1,
        1.6,
        delta,
      );
    } else {
      // static but fully revealed for reduced-motion users
      mat.uniforms.uReveal!.value = 1;
      mat.uniforms.uTime!.value = 12; // a pleasant frozen phase
    }

    mat.uniforms.uScroll!.value = scrollRef.current ?? 0;

    // pointer (NDC → field coordinates, approximating the tilted plane)
    const px = state.pointer.x * (FIELD_W * 0.5);
    const py = state.pointer.y * (FIELD_H * 0.6);
    const target = mat.uniforms.uPointer!.value as THREE.Vector2;
    target.x = THREE.MathUtils.damp(target.x, px, 4, delta);
    target.y = THREE.MathUtils.damp(target.y, py, 4, delta);

    // slow drift + camera parallax
    if (points.current && animated) {
      points.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
    }
    state.camera.position.x = THREE.MathUtils.damp(
      state.camera.position.x,
      state.pointer.x * 0.7,
      2,
      delta,
    );
    state.camera.position.y = THREE.MathUtils.damp(
      state.camera.position.y,
      2.4 + state.pointer.y * 0.4,
      2,
      delta,
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={points} geometry={geometry} rotation={[-1.12, 0, 0]} position={[0, -1.4, 0]} frustumCulled={false}>
      <shaderMaterial
        ref={material}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
