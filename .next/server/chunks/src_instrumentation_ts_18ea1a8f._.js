module.exports = [
"[project]/src/instrumentation.ts [instrumentation] (ecmascript)", ((__turbopack_context__) => {
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
];

//# sourceMappingURL=src_instrumentation_ts_18ea1a8f._.js.map