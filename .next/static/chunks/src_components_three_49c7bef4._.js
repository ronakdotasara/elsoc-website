(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/three/electric-field.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElectricField",
    ()=>ElectricField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * "Electric field" — the signature hero scene.
 *
 * A single draw call: ~13k GL_POINTS displaced in a custom vertex shader by
 * two travelling sine carriers + value noise (an abstract oscilloscope
 * surface), with a pointer-following ripple and a radial dissolve-in.
 * Scroll progress (uScroll) morphs the surface: amplitude collapses and the
 * grid tightens as the next section approaches — the scroll-linked mesh
 * distortion requested in the brief.
 */ const vertexShader = "\n  uniform float uTime;\n  uniform float uReveal;\n  uniform float uScroll;\n  uniform vec2  uPointer;\n  uniform float uPixelRatio;\n\n  attribute float aRand;\n\n  varying float vIntensity;\n  varying float vRand;\n  varying float vAlpha;\n\n  float hash(vec2 p) {\n    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);\n  }\n\n  float vnoise(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    float a = hash(i);\n    float b = hash(i + vec2(1.0, 0.0));\n    float c = hash(i + vec2(0.0, 1.0));\n    float d = hash(i + vec2(1.0, 1.0));\n    vec2 u = f * f * (3.0 - 2.0 * f);\n    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n  }\n\n  void main() {\n    vec3 pos = position;\n    float t = uTime * 0.55;\n\n    // travelling waveform: crossing carriers + low-frequency noise breathing\n    float carrier = sin(pos.x * 0.55 + t * 2.0) * 0.45\n                  + sin(pos.x * 0.22 - t * 1.15 + pos.y * 0.35) * 0.35;\n    float field = vnoise(pos.xy * 0.35 + t * 0.15) - 0.5;\n\n    // scroll morph: surface calms and flattens as the user scrolls away\n    float amp = mix(1.0, 0.22, smoothstep(0.0, 1.0, uScroll));\n    pos.z += (carrier + field * 1.7) * amp;\n\n    // pointer ripple (interactive lighting of the surface)\n    float d = distance(pos.xy, uPointer);\n    pos.z += exp(-d * 0.5) * sin(d * 3.0 - uTime * 4.0) * 0.55 * amp;\n\n    // radial dissolve-in\n    float radius = length(position.xy);\n    float reveal = smoothstep(radius * 0.055, radius * 0.055 + 0.4, uReveal * 1.7);\n\n    vIntensity = pos.z;\n    vRand = aRand;\n    vAlpha = reveal;\n\n    vec4 mv = modelViewMatrix * vec4(pos, 1.0);\n    gl_Position = projectionMatrix * mv;\n\n    float size = (1.35 + aRand * 1.9) * uPixelRatio * reveal;\n    gl_PointSize = size * (13.0 / max(0.001, -mv.z));\n  }\n";
const fragmentShader = "\n  uniform vec3 uColorA;\n  uniform vec3 uColorB;\n  uniform vec3 uColorHot;\n\n  varying float vIntensity;\n  varying float vRand;\n  varying float vAlpha;\n\n  void main() {\n    vec2 uv = gl_PointCoord - 0.5;\n    float disc = smoothstep(0.5, 0.1, length(uv));\n\n    vec3 color = mix(uColorA, uColorB, smoothstep(-1.3, 1.4, vIntensity));\n    color = mix(color, uColorHot, smoothstep(0.85, 1.6, vIntensity) * 0.85);\n\n    float alpha = disc * vAlpha * (0.5 + vRand * 0.5);\n    if (alpha < 0.012) discard;\n    gl_FragColor = vec4(color, alpha);\n  }\n";
const FIELD_W = 38;
const FIELD_H = 22;
const COLS = 150;
const ROWS = 88;
function ElectricField(param) {
    let { scrollRef, animated = true } = param;
    _s();
    const material = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "ElectricField.useThree[gl]": (s)=>s.gl
    }["ElectricField.useThree[gl]"]);
    const { geometry, uniforms } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ElectricField.useMemo": ()=>{
            const count = COLS * ROWS;
            const positions = new Float32Array(count * 3);
            const rand = new Float32Array(count);
            let i = 0;
            for(let y = 0; y < ROWS; y++){
                for(let x = 0; x < COLS; x++){
                    positions[i * 3] = (x / (COLS - 1) - 0.5) * FIELD_W;
                    positions[i * 3 + 1] = (y / (ROWS - 1) - 0.5) * FIELD_H;
                    positions[i * 3 + 2] = 0;
                    rand[i] = Math.random();
                    i++;
                }
            }
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geometry.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            geometry.setAttribute("aRand", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](rand, 1));
            const uniforms = {
                uTime: {
                    value: 0
                },
                uReveal: {
                    value: 0
                },
                uScroll: {
                    value: 0
                },
                uPointer: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](999, 999)
                },
                uPixelRatio: {
                    value: 1
                },
                uColorA: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#123a52")
                },
                uColorB: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#22d3ee")
                },
                uColorHot: {
                    value: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#a78bfa")
                }
            };
            return {
                geometry,
                uniforms
            };
        }
    }["ElectricField.useMemo"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ElectricField.useFrame": (state, delta)=>{
            const mat = material.current;
            if (!mat) return;
            mat.uniforms.uPixelRatio.value = gl.getPixelRatio();
            if (animated) {
                mat.uniforms.uTime.value += delta;
                // intro dissolve
                mat.uniforms.uReveal.value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(mat.uniforms.uReveal.value, 1, 1.6, delta);
            } else {
                // static but fully revealed for reduced-motion users
                mat.uniforms.uReveal.value = 1;
                mat.uniforms.uTime.value = 12; // a pleasant frozen phase
            }
            var _scrollRef_current;
            mat.uniforms.uScroll.value = (_scrollRef_current = scrollRef.current) !== null && _scrollRef_current !== void 0 ? _scrollRef_current : 0;
            // pointer (NDC → field coordinates, approximating the tilted plane)
            const px = state.pointer.x * (FIELD_W * 0.5);
            const py = state.pointer.y * (FIELD_H * 0.6);
            const target = mat.uniforms.uPointer.value;
            target.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(target.x, px, 4, delta);
            target.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(target.y, py, 4, delta);
            // slow drift + camera parallax
            if (points.current && animated) {
                points.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
            }
            state.camera.position.x = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(state.camera.position.x, state.pointer.x * 0.7, 2, delta);
            state.camera.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(state.camera.position.y, 2.4 + state.pointer.y * 0.4, 2, delta);
            state.camera.lookAt(0, 0, 0);
        }
    }["ElectricField.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        ref: points,
        geometry: geometry,
        rotation: [
            -1.12,
            0,
            0
        ],
        position: [
            0,
            -1.4,
            0
        ],
        frustumCulled: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
            ref: material,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: uniforms,
            transparent: true,
            depthWrite: false,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        }, void 0, false, {
            fileName: "[project]/src/components/three/electric-field.tsx",
            lineNumber: 200,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/three/electric-field.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
_s(ElectricField, "XqmtqZJpdIMf14Pbs4uqxM2wUWs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ElectricField;
var _c;
__turbopack_context__.k.register(_c, "ElectricField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/hero-canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$AdaptiveDpr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/AdaptiveDpr.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerformanceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerformanceMonitor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$electric$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/electric-field.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$webgl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/webgl.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function HeroCanvas(param) {
    let { still = false } = param;
    _s();
    const wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [degraded, setDegraded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dpr, setDpr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        1,
        1.75
    ]);
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$webgl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prefersReducedMotion"])() || still;
    // Scroll-linked morph: uScroll follows the hero's exit progress.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCanvas.useEffect": ()=>{
            if (reduceMotion || !wrapper.current) return;
            const trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: wrapper.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: {
                    "HeroCanvas.useEffect.trigger": (self)=>{
                        scrollProgress.current = self.progress;
                    }
                }["HeroCanvas.useEffect.trigger"]
            });
            return ({
                "HeroCanvas.useEffect": ()=>trigger.kill()
            })["HeroCanvas.useEffect"];
        }
    }["HeroCanvas.useEffect"], [
        reduceMotion
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapper,
        className: "absolute inset-0",
        "aria-hidden": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    2.4,
                    9.5
                ],
                fov: 52,
                near: 0.1,
                far: 60
            },
            dpr: dpr,
            gl: {
                antialias: false,
                powerPreference: "high-performance",
                alpha: true
            },
            frameloop: reduceMotion ? "demand" : "always",
            style: {
                background: "transparent"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerformanceMonitor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerformanceMonitor"], {
                    onDecline: ()=>{
                        setDegraded(true);
                        setDpr([
                            0.75,
                            1.25
                        ]);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$electric$2d$field$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElectricField"], {
                            scrollRef: scrollProgress,
                            animated: !reduceMotion
                        }, void 0, false, {
                            fileName: "[project]/src/components/three/hero-canvas.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        !degraded && !reduceMotion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                            multisampling: 0,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                                    intensity: 0.85,
                                    luminanceThreshold: 0.18,
                                    luminanceSmoothing: 0.35,
                                    mipmapBlur: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/three/hero-canvas.tsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChromaticAberration"], {
                                    offset: [
                                        0.0009,
                                        0.0006
                                    ]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/three/hero-canvas.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/three/hero-canvas.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/three/hero-canvas.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$AdaptiveDpr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdaptiveDpr"], {
                    pixelated: true
                }, void 0, false, {
                    fileName: "[project]/src/components/three/hero-canvas.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/three/hero-canvas.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/three/hero-canvas.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(HeroCanvas, "IEXmFZV0+JKqSh6Dp3k+3MxThBc=");
_c = HeroCanvas;
var _c;
__turbopack_context__.k.register(_c, "HeroCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/hero-canvas.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/three/hero-canvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_three_49c7bef4._.js.map