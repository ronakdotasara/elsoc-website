(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/_6998a599._.js",
"[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Next.js instrumentation hook — runs once per server boot.
 *
 * Error monitoring: this is the single wiring point for Sentry. To enable it:
 *   1. npm i @sentry/nextjs
 *   2. set SENTRY_DSN in the environment
 *   3. uncomment the block below (client config goes in instrumentation-client.ts)
 * Kept as an opt-in so the default install has zero external telemetry.
 */ __turbopack_context__.s([
    "register",
    ()=>register
]);
async function register() {
    if (process.env.SENTRY_DSN) {
        // const Sentry = await import("@sentry/nextjs");
        // Sentry.init({ dsn: process.env.SENTRY_DSN, tracesSampleRate: 0.1 });
        console.warn("[instrumentation] SENTRY_DSN is set but @sentry/nextjs is not installed — see src/instrumentation.ts");
    }
}
}),
"[project]/edge-wrapper.js { MODULE => \"[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)\" } [instrumentation-edge] (ecmascript)", ((__turbopack_context__, module, exports) => {

self._ENTRIES ||= {};
const modProm = Promise.resolve().then(()=>__turbopack_context__.i("[project]/src/instrumentation.ts [instrumentation-edge] (ecmascript)"));
modProm.catch(()=>{});
self._ENTRIES["middleware_instrumentation"] = new Proxy(modProm, {
    get (modProm, name) {
        if (name === "then") {
            return (res, rej)=>modProm.then(res, rej);
        }
        let result = (...args)=>modProm.then((mod)=>(0, mod[name])(...args));
        result.then = (res, rej)=>modProm.then((mod)=>mod[name]).then(res, rej);
        return result;
    }
});
}),
]);

//# sourceMappingURL=_6998a599._.js.map