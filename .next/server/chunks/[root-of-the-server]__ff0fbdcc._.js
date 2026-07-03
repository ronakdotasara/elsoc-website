module.exports = [
"[project]/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/lib/validators.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chatRequestSchema",
    ()=>chatRequestSchema,
    "contactMessageSchema",
    ()=>contactMessageSchema,
    "dayOfWeekSchema",
    ()=>dayOfWeekSchema,
    "eventInputSchema",
    ()=>eventInputSchema,
    "eventStatusSchema",
    ()=>eventStatusSchema,
    "loginSchema",
    ()=>loginSchema,
    "newsletterSchema",
    ()=>newsletterSchema,
    "prizeTierInputSchema",
    ()=>prizeTierInputSchema,
    "problemStatementInputSchema",
    ()=>problemStatementInputSchema,
    "projectInputSchema",
    ()=>projectInputSchema,
    "publishStatusSchema",
    ()=>publishStatusSchema,
    "recurrenceSchema",
    ()=>recurrenceSchema,
    "reorderSchema",
    ()=>reorderSchema,
    "sparkathonSettingsSchema",
    ()=>sparkathonSettingsSchema,
    "sparkathonSubmissionSchema",
    ()=>sparkathonSubmissionSchema,
    "submissionModerationSchema",
    ()=>submissionModerationSchema,
    "submissionStatusSchema",
    ()=>submissionStatusSchema,
    "teamGroupSchema",
    ()=>teamGroupSchema,
    "teamMemberInputSchema",
    ()=>teamMemberInputSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
;
const publishStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "DRAFT",
    "PUBLISHED"
]);
const eventStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "UPCOMING",
    "ONGOING",
    "COMPLETED"
]);
const recurrenceSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "NONE",
    "WEEKLY"
]);
const dayOfWeekSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY"
]);
const teamGroupSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "FACULTY",
    "CORE",
    "THIRD_YEAR",
    "EXECUTIVE",
    "VOLUNTEER"
]);
const submissionStatusSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "PENDING",
    "APPROVED",
    "REJECTED"
]);
const slug = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(120).regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase words separated by dashes");
const optionalUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].url(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal(""),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\/[^\s]*$/)
]).optional().nullable().transform((v)=>v === "" ? null : v ?? null);
const projectInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    slug,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3).max(160),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10).max(300),
    abstract: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(40),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(60),
    coverImage: optionalUrl,
    technologies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(80)).max(24).default([]),
    team: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(80)).max(24).default([]),
    facultyCoordinator: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(120).optional().nullable(),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(4).max(20),
    workStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "Completed",
        "In Progress",
        "Proposed"
    ]).default("Completed"),
    status: publishStatusSchema.default("PUBLISHED"),
    featured: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    draft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().default(0)
});
const eventInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    slug,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3).max(160),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(60),
    location: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(160),
    coverImage: optionalUrl,
    startAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date().optional().nullable(),
    endAt: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.date().optional().nullable(),
    dateLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(80).optional().nullable(),
    timeLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(80).optional().nullable(),
    recurrence: recurrenceSchema.default("NONE"),
    dayOfWeek: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].preprocess((v)=>v === "" ? null : v, dayOfWeekSchema.nullable().optional()),
    status: eventStatusSchema.default("UPCOMING"),
    registrationLink: optionalUrl,
    participants: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(120).optional().nullable(),
    highlights: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1).max(120)).max(12).default([]),
    featured: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    draft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().default(0)
}).refine((e)=>e.recurrence === "NONE" || e.dayOfWeek != null, {
    message: "Recurring events need a day of week",
    path: [
        "dayOfWeek"
    ]
});
const teamMemberInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(120),
    position: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(120).optional().nullable(),
    group: teamGroupSchema,
    department: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(160).optional().nullable(),
    yearLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(60).optional().nullable(),
    bio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(600).optional().nullable(),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")
    ]).optional().nullable().transform((v)=>v === "" ? null : v ?? null),
    photo: optionalUrl,
    linkedin: optionalUrl,
    github: optionalUrl,
    committee: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    draft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().default(0)
});
const reorderSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    ids: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1)).min(1).max(500)
});
const prizeTierInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    place: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(1).max(10),
    label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(60),
    amountInr: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0),
    extras: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(160).optional().nullable(),
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().default(0)
});
const problemStatementInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^PS-\d{3}$/, "Format: PS-101"),
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3).max(200),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20),
    category: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(60),
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2).max(80),
    imageUrl: optionalUrl,
    sortOrder: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().default(0)
});
const sparkathonSubmissionSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(4, "Give your idea a title").max(120),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(20, "Describe your idea in a little more detail").max(2000),
    submitterName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(120).optional(),
    submitterEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email(),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")
    ]).optional(),
    // Honeypot — bots fill it, humans never see it.
    website: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("").optional()
});
const submissionModerationSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    status: submissionStatusSchema
});
const contactMessageSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Please enter your full name").max(120),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email("Enter a valid email address"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(20).optional(),
    subject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(3, "What is this about?").max(160),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(10, "Tell us a little more").max(4000),
    website: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("").optional()
});
const newsletterSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email("Enter a valid email address")
});
const loginSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    username: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Username is required").max(64),
    password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Password is required").max(128)
});
const sparkathonSettingsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    eventDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().datetime({
        offset: true
    }).or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    dateIsTentative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    registrationLink: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().url().or(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].literal("")),
    venue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(160)
});
const chatRequestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    messages: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
            "user",
            "assistant"
        ]),
        content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(4000)
    })).min(1).max(40)
});
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasDatabase",
    ()=>hasDatabase,
    "prisma",
    ()=>prisma,
    "requireDb",
    ()=>requireDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
/**
 * Prisma singleton.
 *
 * The client is only instantiated when DATABASE_URL is configured; every data
 * service degrades to the bundled seed content otherwise (see src/lib/data).
 * This keeps `next build`, Vercel previews and fresh clones working with zero
 * external services.
 */ const globalForPrisma = globalThis;
const hasDatabase = Boolean(process.env.DATABASE_URL);
function createClient() {
    if (!hasDatabase) return null;
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]({
        log: ("TURBOPACK compile-time truthy", 1) ? [
            "warn",
            "error"
        ] : "TURBOPACK unreachable"
    });
}
const prisma = globalForPrisma.prisma ?? createClient();
if (("TURBOPACK compile-time value", "development") !== "production" && prisma) {
    globalForPrisma.prisma = prisma;
}
function requireDb() {
    if (!prisma) {
        throw new Error("DATABASE_URL is not configured. The admin panel needs Postgres — run `docker compose up db` and set DATABASE_URL in .env.");
    }
    return prisma;
}
}),
"[project]/src/content/events.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "events",
    ()=>events
]);
const events = [
    // ── Upcoming ────────────────────────────────────────────────────────────
    {
        slug: "sparkathon-2026",
        title: "Sparkathon",
        description: "A hackathon-style technical competition where participants solve real-world engineering problems and build innovative solutions.",
        category: "Competition",
        location: "Mini Auditorium",
        coverImage: "/img/events/sparkathon-banner.jpeg",
        startAt: "2026-09-15T10:00:00+05:30",
        endAt: "2026-09-15T18:00:00+05:30",
        dateLabel: "Sept, 2026 (Tentative)",
        timeLabel: "10:00 AM - 6:00 PM (Tentative)",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "UPCOMING",
        registrationLink: null,
        participants: "Open to All",
        highlights: [
            "₹19,000+ Prize Pool",
            "Networking Opportunities",
            "Skill Development"
        ],
        featured: true,
        draft: false,
        sortOrder: 0
    },
    {
        slug: "uav-workshop-2026",
        title: "UAV Workshop",
        description: "Hands-on workshop on unmanned aerial vehicles: flight dynamics, electronic speed controllers, flight-controller programming and a live assembly-and-fly session guided by the ELSOC technical team.",
        category: "Workshop",
        location: "NIT Hamirpur",
        coverImage: null,
        startAt: null,
        endAt: null,
        dateLabel: "August 2026 (Date TBD)",
        timeLabel: "To be announced",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "UPCOMING",
        registrationLink: "#",
        participants: "Open to All",
        highlights: [
            "Live Drone Assembly",
            "Flight Controller Basics",
            "Hands-on Session"
        ],
        featured: true,
        draft: true,
        sortOrder: 1
    },
    {
        slug: "weekly-group-discussion",
        title: "Weekly Group Discussion",
        description: "ELSOC's recurring open-floor discussion where members dissect a technical topic, a research paper, or an industry trend — sharpening communication skills and technical depth in equal measure. Every Friday, everyone is welcome.",
        category: "Discussion",
        location: "Electrical Engineering Department",
        coverImage: null,
        startAt: null,
        endAt: null,
        dateLabel: "Every Friday",
        timeLabel: "6:00 PM",
        recurrence: "WEEKLY",
        dayOfWeek: "FRIDAY",
        status: "UPCOMING",
        registrationLink: null,
        participants: "All Members",
        highlights: [
            "Recurring",
            "Open Floor",
            "Soft Skills"
        ],
        featured: false,
        draft: true,
        sortOrder: 2
    },
    // ── Past ────────────────────────────────────────────────────────────────
    {
        slug: "ai-emma-robot-workshop",
        title: "Workshop #1 - AI-emma Robot",
        description: "Comprehensive hands-on workshop covering Robotics fundamentals, electrical project simulations, and practical applications for engineering students.",
        category: "Workshop",
        location: "Mini Auditorium",
        coverImage: "/img/events/ai-emma-workshop.jpg",
        startAt: "2025-11-12T16:00:00+05:30",
        endAt: "2025-11-12T19:00:00+05:30",
        dateLabel: "November 12, 2025",
        timeLabel: "4:00 PM - 7:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 10
    },
    {
        slug: "techletics-2024",
        title: "TECHLETICS (OJAS X ELSOC)",
        description: "Thrilling fusion of innovation and competition featuring technical challenges, robotics demonstrations, and collaborative engineering projects.",
        category: "Competition",
        location: "SAC, NIT Hamirpur",
        coverImage: "/img/events/techletics.png",
        startAt: "2024-04-10T17:00:00+05:30",
        endAt: null,
        dateLabel: "April 10, 2024",
        timeLabel: "5:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 11
    },
    {
        slug: "circuits-of-opportunities",
        title: "Circuits of Opportunities Workshop",
        description: "Career guidance workshop exploring diverse opportunities in finance, civil services, IT, core engineering, and defence sectors.",
        category: "Workshop",
        location: "LH G2, NIT Hamirpur",
        coverImage: null,
        startAt: "2023-10-18T17:00:00+05:30",
        endAt: null,
        dateLabel: "October 18, 2023",
        timeLabel: "5:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 12
    },
    {
        slug: "kuizz-i-thon-2023",
        title: "KUIZZ-i-THON",
        description: "Technical quiz competition covering general science, space exploration, history of engineering, and current affairs.",
        category: "Competition",
        location: "LH G2, NIT Hamirpur",
        coverImage: "/img/events/kuizzithon.png",
        startAt: "2023-09-01T17:30:00+05:30",
        endAt: null,
        dateLabel: "September 1, 2023",
        timeLabel: "5:30 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 13
    },
    {
        slug: "lightning-unleashed-2023",
        title: "Lightning Unleashed (ELSOC X OJAS)",
        description: "Collaborative event showcasing high-voltage demonstrations including insulation breakdown, corona discharge, power transformers, earth testing, and transformer limbs.",
        category: "Exhibition",
        location: "Electrical Department, NIT Hamirpur",
        coverImage: "/img/events/lightning-unleashed.jpeg",
        startAt: "2023-02-10T17:00:00+05:30",
        endAt: null,
        dateLabel: "February 10, 2023",
        timeLabel: "5:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 14
    },
    {
        slug: "matlab-workshop-2022",
        title: "MATLAB Workshop",
        description: "Programming platform workshop designed for engineers and scientists to analyze systems, design products, and create solutions using MATLAB simulations.",
        category: "Workshop",
        location: "NEW-LH, NIT Hamirpur",
        coverImage: "/img/events/matlab-workshop.jpeg",
        startAt: "2022-10-21T16:00:00+05:30",
        endAt: "2022-10-21T18:00:00+05:30",
        dateLabel: "October 21, 2022",
        timeLabel: "4:00 PM - 6:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 15
    },
    {
        slug: "intern-talk-research-internships",
        title: "Intern Talk - Research Internships",
        description: "Inspiring session with ELSOC members sharing their research internship experiences at DRDO, RWTH Aachen Germany, NTU Singapore, TU Darmstadt, and IISc Bangalore.",
        category: "Seminar",
        location: "Auditorium, NIT Hamirpur",
        coverImage: "/img/events/guest-lecture.jpg",
        startAt: "2022-08-29T18:00:00+05:30",
        endAt: null,
        dateLabel: "August 29, 2022",
        timeLabel: "6:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 16
    },
    {
        slug: "blockchain-workshop-2022",
        title: "Blockchain Workshop",
        description: "Interactive online workshop on blockchain technology and cryptocurrency fundamentals, featuring a live quiz competition.",
        category: "Workshop",
        location: "YouTube Live",
        coverImage: "/img/events/blockchain-workshop.png",
        startAt: "2022-02-04T15:00:00+05:30",
        endAt: null,
        dateLabel: "February 4, 2022",
        timeLabel: "3:00 PM",
        recurrence: "NONE",
        dayOfWeek: null,
        status: "COMPLETED",
        registrationLink: null,
        participants: null,
        highlights: [],
        featured: false,
        draft: false,
        sortOrder: 17
    }
];
}),
"[project]/src/content/projects.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projectCategories",
    ()=>projectCategories,
    "projects",
    ()=>projects
]);
const projects = [
    // ── Team OJAS — Final Five (2026) ───────────────────────────────────────
    {
        slug: "ert-landslide-alert-system",
        title: "ERT-Based Landslide Alert System",
        summary: "A low-cost, permanently installed Electrical Resistivity Tomography network that builds a real-time health map of hillsides and raises early landslide warnings.",
        abstract: [
            "This project addresses the large-scale problem of landslides in hilly regions, where heavy rainfall quietly weakens slopes from within and can suddenly cause massive damage to roads, villages, and infrastructure. The solution is a low-cost, permanently installed monitoring system that sends small electrical signals into the ground and observes how the soil responds — a response that changes as the slope becomes more water-logged and prone to failure. Using a microcontroller-based, modular design built around ready-made electronic boards, the system avoids complex lab-style circuits and can be easily expanded to cover long stretches of hillside with many electrodes.",
            "Each unit operates automatically and sends its data wirelessly to an online platform, helping create a real-time “health map” of the underground condition of slopes over large areas. Authorities and disaster-management teams receive early warnings when slope conditions become dangerous, enabling timely evacuation, maintenance, and planning — ultimately reducing loss of life and economic damage on a regional scale.",
            "Where current commercial resistivity meters cost upwards of ₹5–10 lakhs, are bulky, and require manual operation, this system takes a fundamentally different approach: an ESP32-based design with high-precision signal-generation, sensing, and multiplexing modules and built-in IoT connectivity. The result is reliable, easy to replicate, and scalable into dense networks of permanent monitoring nodes on vulnerable hillsides."
        ].join("\n\n"),
        category: "IoT",
        coverImage: null,
        technologies: [
            "ESP32-WROOM-32",
            "AD9833 DDS Signal Generator",
            "INA219 Current Monitor",
            "CD74HC4067 Multiplexer",
            "ADS1115 16-bit ADC",
            "AD620 Instrumentation Amplifier",
            "Electrical Resistivity Tomography",
            "IoT Telemetry"
        ],
        team: [
            "Ronak Dotasara"
        ],
        facultyCoordinator: "Dr. Katam Nishanth",
        year: "2026",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: true,
        draft: false,
        sortOrder: 0
    },
    {
        slug: "self-sustaining-electric-crop-harvester",
        title: "Self-Sustaining Electric Crop Harvester with Innovative Stubble Handling",
        summary: "An electric harvester that burns crop stubble in a filtered closed chamber and converts the heat into drive power through thermoelectric generators — no stubble left on the field.",
        abstract: [
            "This project introduces an innovative self-sustaining electrical agriculture vehicle designed to address the critical environmental challenge of stubble burning. Every year, farmers burn crop residue to clear fields for new sowing — a practice that triggers a severe smog crisis in urban centres like Delhi, driven by the logistical cost of transporting bulky waste. The proposed solution integrates harvesting and waste management into a single, mobile platform.",
            "During harvesting, crop residue is fed into an internal combustion chamber where Thermoelectric Generator (TEG) modules convert the generated heat directly into electricity that drives the harvester itself. To ensure environmental safety, a specialized exhaust chamber equipped with HEPA and activated-carbon filters removes smoke and toxic gases before atmospheric release, and the collected soot is repurposed to manufacture ink — adding a secondary value stream. With an average temperature difference of around 152 °C across the TEG cells during operation, each cell contributes roughly 4.2 W; combined with battery storage and solar support, the recovered energy meaningfully offsets the harvester's power requirement.",
            "By transforming a waste product into a primary power source, the technology offers a clean, green, and instantaneous alternative to traditional stubble handling — leaving no stubble on the field while existing approaches (Happy Seeders, bio-decomposers, or collection for power plants) remain slow, logistics-heavy, or partial."
        ].join("\n\n"),
        category: "Power Systems",
        coverImage: null,
        technologies: [
            "SP1848 Thermoelectric Generators",
            "ESP32",
            "L298N Motor Driver",
            "HEPA + Activated Carbon Filtration",
            "Servo Actuation",
            "LiPo Power System"
        ],
        team: [
            "Sojal",
            "Vansh Kumar Gautam"
        ],
        facultyCoordinator: "Dr. Katam Nishanth",
        year: "2026",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: true,
        draft: false,
        sortOrder: 1
    },
    {
        slug: "ultrasonic-parametric-audio-system",
        title: "Ultrasonic Parametric Audio System: Invisible Airborne Speaker",
        summary: "A parametric ultrasonic array that beams audio which becomes audible only at the target location — directional sound with no headphones and no leakage.",
        abstract: [
            "Conventional loudspeakers radiate sound omnidirectionally, leading to noise pollution and a lack of audio privacy in public environments. This project presents an Invisible Air Speaker based on a parametric ultrasonic array, in which audible sound is transmitted through amplitude modulation of a 40 kHz ultrasonic carrier generated and controlled by an ESP32 microcontroller. The modulated signal is amplified through a gate-driver-based MOSFET power stage and radiated by a 4×4 array of Murata MA40S4S ultrasonic transducers.",
            "Due to the nonlinear acoustic properties of air, the ultrasonic beam self-demodulates into audible sound only at the target location, enabling highly directional audio delivery — visitors hear the audio only at a marked position. According to guidelines from the World Health Organization, Health Canada, and IEEE, airborne ultrasonic exposure at the operating frequency and sound pressure levels used in this project (80–95 dB SPL at 40 kHz, well below the 120 dB safety threshold) is considered safe for humans and animals under controlled conditions.",
            "Where typical commercial directional speakers cost ₹50,000–70,000, the complete prototype comes in under ₹10,000, with a modular array design that scales from a single 4×4 unit to larger N×N configurations. The system offers an innovative, compact, and energy-efficient solution for museums and exhibitions, smart advertising kiosks, silent zones such as libraries, and immersive AR/VR audio — demonstrating the feasibility of safe directional sound technology for academic and practical use."
        ].join("\n\n"),
        category: "Embedded",
        coverImage: null,
        technologies: [
            "ESP32-WROOM-32",
            "Murata MA40S4S Transducer Array",
            "IR2110 Gate Drivers",
            "MOSFET H-Bridge",
            "Amplitude Modulation @ 40 kHz",
            "Parametric Acoustics"
        ],
        team: [
            "Skandh Nagar"
        ],
        facultyCoordinator: "Dr. Katam Nishanth",
        year: "2026",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: true,
        draft: false,
        sortOrder: 2
    },
    {
        slug: "switchgear-condition-monitoring",
        title: "Condition-Based Monitoring of Switchgear",
        summary: "An IoT-enabled miniature switchgear prototype that watches temperature, humidity, vibration and acoustic signatures 24/7 to predict and prevent panel fires.",
        abstract: [
            "Switchgear panels are critical components in electrical distribution systems, yet they are prone to catastrophic fires due to overheating, insulation degradation, partial discharges, and condensation from high humidity. Traditional preventive maintenance is periodic and often ineffective at detecting incipient faults, resulting in unplanned downtime and safety risks. This project presents a low-cost, IoT-enabled condition-based monitoring prototype designed to predict and prevent fires in low-voltage switchgear cubicles.",
            "The prototype is constructed as a compact miniature low-voltage switchgear model within a safe enclosure, featuring copper busbars, a DIN-rail-mounted main breaker and feeder MCBs, and high-power resistors to simulate hotspots. An ESP32 microcontroller continuously acquires data from strategically placed sensors — DS18B20 probes at busbars and breaker terminals for temperature, a DHT22 for enclosure humidity, an HC-SR04 ultrasonic sensor for partial-discharge acoustic simulation, and an MPU6050 for vibration. Threshold logic drives escalating alerts: yellow LEDs and a soft buzzer for warnings, and red LEDs, a loud siren, and an automatic relay trip (with fan-based suppression simulation) for critical conditions. All data and alarm states stream over Wi-Fi to an IoT dashboard for remote monitoring, trend viewing, and instant push notifications.",
            "Unlike reactive fire-suppression systems that act only after ignition, arc-resistant designs limited to premium new installations, or labour-intensive time-based inspections, this approach delivers autonomous 24/7 proactive monitoring of key fire precursors, retrofits without downtime, and shifts maintenance to condition-triggered action. The MQTT-based architecture extends naturally to multi-cubicle substation monitoring and adapts to transformers, motors, or cables with minor sensor changes."
        ].join("\n\n"),
        category: "Power Systems",
        coverImage: null,
        technologies: [
            "ESP32",
            "DS18B20 Temperature Sensors",
            "DHT22 Humidity Sensor",
            "HC-SR04 Ultrasonic Sensor",
            "MPU6050 Vibration Sensing",
            "ACS712 Current Sensors",
            "MQTT / IoT Dashboard"
        ],
        team: [
            "Shivansh"
        ],
        facultyCoordinator: "Dr. Katam Nishanth",
        year: "2026",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: true,
        draft: false,
        sortOrder: 3
    },
    {
        slug: "intelligent-pesticide-sprinkling-system",
        title: "Intelligent Pesticide Sprinkling System",
        summary: "An edge-AI precision-agriculture rig: a Raspberry Pi CNN diagnoses plant disease on-site and an ESP32 sprays pesticide only where it is needed — cutting chemical use by up to 90%.",
        abstract: [
            "The core challenge in modern agriculture lies in the inefficiency of traditional “blind” pesticide application, which leads to substantial chemical waste, environmental degradation, and high operational costs. This project introduces an automated, data-driven framework designed to optimize pest management through precision agriculture and real-time diagnostic intelligence. By integrating an edge-computing architecture — a Raspberry Pi Zero W running a Convolutional Neural Network — the system performs on-site plant pathology to detect specific diseases and quantify infection severity.",
            "The innovation lies in the transition from broadcast spraying to a targeted, IoT-driven delivery mechanism. High-resolution foliage images and readings from an NPK + pH sensor suite feed the localized CNN, which determines the required chemical dosage. Diagnostic triggers travel over MQTT to an ESP32, which activates a 12 V diaphragm pump and relay system to deliver a precise pesticide spray only to the identified infected zones, while a cloud-linked React/Flutter dashboard provides real-time telemetry and manual override.",
            "The system is applicable from small home gardens to large-scale industrial farms: the MQTT framework lets a single central controller manage many distributed spray actuators, the diagnostic model can be retrained for diverse crop species, and the low-power hardware supports expansion into remote, solar-powered agricultural zones. Current literature reports CNN disease-detection accuracies above 95% and validates that edge computing eliminates the latency issues of cloud-dependent systems in rural areas — positioning this framework to reduce chemical usage by up to 90% while improving overall crop yield."
        ].join("\n\n"),
        category: "IoT",
        coverImage: null,
        technologies: [
            "Raspberry Pi Zero W",
            "Convolutional Neural Network",
            "Pi Camera (8MP)",
            "NPK + pH Soil Sensor",
            "ESP32",
            "MQTT",
            "12V Diaphragm Pump",
            "React / Flutter Dashboard"
        ],
        team: [
            "Ronak Dotasara"
        ],
        facultyCoordinator: "Dr. Katam Nishanth",
        year: "2026",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: true,
        draft: false,
        sortOrder: 4
    },
    // ── Legacy showcase (carried over from the previous site) ───────────────
    {
        slug: "smart-home-automation-system",
        title: "Smart Home Automation System",
        summary: "Voice-controlled ESP32 home automation with Alexa and mobile-app integration plus real-time energy monitoring.",
        abstract: "Advanced IoT-based home automation using ESP32 microcontroller, enabling voice control through Alexa and mobile app integration for controlling lights, fans, appliances, and monitoring energy consumption in real-time.",
        category: "IoT",
        coverImage: "/img/projects/smart-home-automation.png",
        technologies: [
            "ESP32",
            "Arduino IDE",
            "MQTT Protocol",
            "Node-RED",
            "Alexa Integration"
        ],
        team: [
            "Rohan Verma",
            "Sneha Patel",
            "Amit Kumar"
        ],
        facultyCoordinator: null,
        year: "2025",
        workStatus: "Completed",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 10
    },
    {
        slug: "autonomous-line-following-robot",
        title: "Autonomous Line Following Robot",
        summary: "PID-controlled autonomous robot that follows coloured lines with obstacle avoidance and adaptive speed control.",
        abstract: "Intelligent autonomous robot with advanced PID control algorithm, capable of detecting and following colored lines with high precision. Features include obstacle avoidance using ultrasonic sensors and adaptive speed control.",
        category: "Robotics",
        coverImage: "/img/projects/line-following-robot.avif",
        technologies: [
            "Arduino Uno",
            "IR Sensors Array",
            "L298N Motor Driver",
            "PID Controller"
        ],
        team: [
            "Priya Sharma",
            "Karan Singh"
        ],
        facultyCoordinator: null,
        year: "2024",
        workStatus: "Completed",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 11
    },
    {
        slug: "solar-power-monitoring-system",
        title: "Solar Power Monitoring System",
        summary: "Cloud-logged real-time monitoring of solar panel efficiency with predictive analytics for maintenance.",
        abstract: "Comprehensive real-time monitoring and analysis system for solar panel efficiency with cloud-based data logging. Tracks voltage, current, power output, and environmental conditions with predictive analytics for maintenance.",
        category: "Power Systems",
        coverImage: "/img/projects/solar-power-monitoring.jpg",
        technologies: [
            "Raspberry Pi",
            "ACS712 Current Sensor",
            "Python",
            "ThingSpeak IoT",
            "Data Analytics"
        ],
        team: [
            "Anjali Gupta",
            "Vikram Reddy",
            "Sanjay Mehta"
        ],
        facultyCoordinator: null,
        year: "2025",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 12
    },
    {
        slug: "gesture-controlled-car",
        title: "Gesture Controlled Car",
        summary: "A glove-mounted accelerometer drives this RF-controlled car through intuitive hand movements.",
        abstract: "Innovative gesture-controlled car using accelerometer and gyroscope sensors mounted on a glove. Hand movements control car direction wirelessly through RF communication, enabling intuitive hands-free operation.",
        category: "Embedded",
        coverImage: "/img/projects/gesture-controlled-car.png",
        technologies: [
            "Arduino Nano",
            "MPU6050 Accelerometer",
            "RF Transceiver",
            "DC Motors",
            "Motor Driver"
        ],
        team: [
            "Neha Kapoor",
            "Rahul Joshi"
        ],
        facultyCoordinator: null,
        year: "2024",
        workStatus: "Completed",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 13
    },
    {
        slug: "industrial-automation-plc-system",
        title: "Industrial Automation PLC System",
        summary: "Professional PLC automation with a SCADA interface for real-time industrial monitoring and control.",
        abstract: "Professional-grade Programmable Logic Controller based automation system for industrial manufacturing processes. Features SCADA interface for real-time monitoring, control, and data visualization with alarm management.",
        category: "Automation",
        coverImage: "/img/projects/industrial-plc-automation.webp",
        technologies: [
            "Allen-Bradley PLC",
            "SCADA Software",
            "Ladder Logic Programming",
            "HMI Touch Panel"
        ],
        team: [
            "Arjun Malhotra",
            "Pooja Nair",
            "Deepak Kumar"
        ],
        facultyCoordinator: null,
        year: "2025",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 14
    },
    {
        slug: "weather-monitoring-station",
        title: "Weather Monitoring Station",
        summary: "IoT weather station logging temperature, humidity, pressure and air quality to a cloud dashboard.",
        abstract: "Comprehensive IoT weather station measuring temperature, humidity, atmospheric pressure, and air quality index. Data is logged to cloud platform with web dashboard for visualization and historical analysis.",
        category: "IoT",
        coverImage: "/img/projects/weather-monitoring-station.jpg",
        technologies: [
            "ESP8266",
            "DHT22 Sensor",
            "BMP180 Barometer",
            "MQ135 Air Quality",
            "ThingSpeak"
        ],
        team: [
            "Ritika Sharma",
            "Varun Singh"
        ],
        facultyCoordinator: null,
        year: "2024",
        workStatus: "Completed",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 15
    },
    {
        slug: "smart-energy-meter",
        title: "Smart Energy Meter",
        summary: "GSM-connected digital energy meter with remote monitoring, theft detection and SMS alerts.",
        abstract: "Digital energy meter with GSM/GPRS communication for remote monitoring and automated billing system. Measures real-time power consumption, detects theft, and sends SMS alerts for anomalies.",
        category: "Embedded",
        coverImage: "/img/projects/smart-energy-meter.jpeg",
        technologies: [
            "Arduino Mega",
            "GSM SIM800L Module",
            "ACS712 Current Sensor",
            "16x2 LCD Display"
        ],
        team: [
            "Kavita Rao",
            "Manish Tiwari"
        ],
        facultyCoordinator: null,
        year: "2024",
        workStatus: "Completed",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 16
    },
    {
        slug: "fire-detection-alert-system",
        title: "Fire Detection & Alert System",
        summary: "Multi-sensor fire detection with automatic extinguisher activation and GPS-tagged mobile alerts.",
        abstract: "Intelligent fire detection system using multiple sensors (smoke, temperature, flame) with automatic fire extinguisher activation. Sends real-time alerts via SMS and mobile app with GPS location.",
        category: "IoT",
        coverImage: "/img/projects/fire-detection-system.jpg",
        technologies: [
            "ESP32",
            "MQ-2 Smoke Sensor",
            "Flame Sensor",
            "GSM Module",
            "Servo Motor"
        ],
        team: [
            "Aditya Raj",
            "Meera Iyer"
        ],
        facultyCoordinator: null,
        year: "2025",
        workStatus: "In Progress",
        status: "PUBLISHED",
        featured: false,
        draft: false,
        sortOrder: 17
    }
];
const projectCategories = [
    "All",
    "IoT",
    "Robotics",
    "Power Systems",
    "Embedded",
    "Automation"
];
}),
"[project]/src/content/team.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "teamMembers",
    ()=>teamMembers
]);
const teamMembers = [
    // ── Faculty mentors ─────────────────────────────────────────────────────
    {
        name: "Dr. OP Rahi",
        position: "HOD, EED",
        group: "FACULTY",
        department: "Electrical Engineering Department",
        yearLabel: null,
        bio: "Guiding innovation with decades of expertise, Dr. Rahi inspires students to push boundaries and achieve excellence in electrical engineering research and education.",
        email: "oprahi@nith.ac.in",
        photo: "/img/faculty/op-rahi.png",
        linkedin: null,
        github: null,
        committee: false,
        draft: false,
        sortOrder: 0
    },
    {
        name: "Dr. Bharti Bakshi Koul",
        position: "Coordinator, ELSOC",
        group: "FACULTY",
        department: "Electrical Engineering Department",
        yearLabel: null,
        bio: "Dedicated to nurturing young talent, Dr. Koul mentors ELSOC members with passion, fostering creativity, leadership, and technical excellence in every initiative.",
        email: "bhartibakshi@nith.ac.in",
        photo: "/img/faculty/bharti-bakshi-koul.jpg",
        linkedin: null,
        github: null,
        committee: true,
        draft: false,
        sortOrder: 1
    },
    {
        name: "Dr. Katam Nishanth",
        position: "Coordinator, ELSOC",
        group: "FACULTY",
        department: "Electrical Engineering Department",
        yearLabel: null,
        bio: "With a focus on research and development, Dr. Nishanth guides students in exploring emerging technologies and developing solutions for real-world challenges.",
        email: "katam@nith.ac.in",
        photo: "/img/faculty/katam-nishanth.jpg",
        linkedin: null,
        github: null,
        committee: true,
        draft: false,
        sortOrder: 2
    },
    {
        name: "Dr. Chandrasekaran S",
        position: "Coordinator, ELSOC",
        group: "FACULTY",
        department: "Electrical Engineering Department",
        yearLabel: null,
        bio: "Committed to advancing student learning, Dr. Chandrasekaran encourages innovation and practical application of electrical engineering concepts through hands-on projects.",
        email: "chandru@nith.ac.in",
        photo: "/img/faculty/chandrasekaran-s.jpg",
        linkedin: null,
        github: null,
        committee: true,
        draft: false,
        sortOrder: 3
    },
    // ── Core team (final year) ──────────────────────────────────────────────
    {
        name: "Pratibha Bajia",
        position: "President",
        group: "CORE",
        department: null,
        yearLabel: "Final Year",
        bio: "Leading ELSOC with a vision for innovation and technical excellence.",
        email: null,
        photo: "/img/team/pratibha-bajia.jpg",
        linkedin: "https://www.linkedin.com/in/pratibha-bajia-62b3a12b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/Pratibha100",
        committee: true,
        draft: false,
        sortOrder: 0
    },
    {
        name: "Nitin",
        position: "Vice-President",
        group: "CORE",
        department: null,
        yearLabel: "Final Year",
        bio: "Driving technical initiatives and fostering collaborative learning.",
        email: null,
        photo: "/img/team/nitin.jpg",
        linkedin: "https://www.linkedin.com/in/nitin-21767a2a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 1
    },
    {
        name: "Mohit Kumar",
        position: "Finance Secretary",
        group: "CORE",
        department: null,
        yearLabel: "Final Year",
        bio: "Finance Secretary, managing ELSOC's resources and budgeting for impactful projects and events.",
        email: null,
        photo: "/img/team/mohit-kumar.jpg",
        linkedin: null,
        github: null,
        committee: true,
        draft: false,
        sortOrder: 2
    },
    {
        name: "Kriti Benjwal",
        position: "Media and Marketing Head",
        group: "CORE",
        department: null,
        yearLabel: "Final Year",
        bio: "Media and Marketing Head, promoting ELSOC's initiatives and engaging with the student community.",
        email: null,
        photo: "/img/team/kriti-benjwal.webp",
        linkedin: "https://www.linkedin.com/in/kriti-benjwal-b82864290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 3
    },
    {
        name: "Sahil Jaswal",
        position: "Technical and Event Organisation Head",
        group: "CORE",
        department: null,
        yearLabel: "Final Year",
        bio: "Organizing and managing the society's functions and communications.",
        email: null,
        photo: "/img/team/sahil-jaswal.png",
        linkedin: "https://www.linkedin.com/in/sahil-jaswal-250a51318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/SahilJaswal709",
        committee: true,
        draft: false,
        sortOrder: 4
    },
    // ── Third-year team ─────────────────────────────────────────────────────
    {
        name: "Ronak Dotasara",
        position: "General Secretary",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/ronak-dotasara.webp",
        linkedin: null,
        github: null,
        committee: true,
        draft: false,
        sortOrder: 0
    },
    {
        name: "Vikalp Chaudhary",
        position: "Joint Secretary",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/vikalp-chaudhary.jpg",
        linkedin: "https://www.linkedin.com/in/vikalp-chaudhary-581287345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 1
    },
    {
        name: "Priya",
        position: "Media and Marketing Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/priya.png",
        linkedin: "https://www.linkedin.com/in/priya-ghangas-54a95338a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 2
    },
    {
        name: "Sanyam Vats",
        position: "Project Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/sanyam-vats.jpg",
        linkedin: "https://www.linkedin.com/in/sanyam-vats-5899b4270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/sanyamvats",
        committee: true,
        draft: false,
        sortOrder: 3
    },
    {
        name: "Vikas Kumar",
        position: "Design Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/vikas-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/vikas-kumar-656798335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 4
    },
    {
        name: "Aryan Dhaka",
        position: "Technical Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/aryan-dhaka.jpg",
        linkedin: "https://www.linkedin.com/in/aryan-dhaka-20635b324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 5
    },
    {
        name: "Riya Choudhary",
        position: "Content Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/riya-choudhary.jpg",
        linkedin: "https://www.linkedin.com/in/riya-choudhary-0882a230b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/riyachoudhary06",
        committee: true,
        draft: false,
        sortOrder: 6
    },
    {
        name: "Skand Nagar",
        position: "Event Organisation Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/skandh-nagar.jpg",
        linkedin: "https://www.linkedin.com/in/skandh-nagar-73b18a312/",
        github: null,
        committee: true,
        draft: false,
        sortOrder: 7
    },
    {
        name: "Akshit Vardhan",
        position: "Finance Coordinator",
        group: "THIRD_YEAR",
        department: null,
        yearLabel: "3rd Year",
        bio: null,
        email: null,
        photo: "/img/team/akshit-vardhan.jpg",
        linkedin: "https://www.linkedin.com/in/akshit-vardhan-6b290a324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/akshitvardhan",
        committee: true,
        draft: false,
        sortOrder: 8
    },
    // ── Executive members (first year) ──────────────────────────────────────
    ...[
        {
            name: "Akriti Mall",
            photo: "/img/team/akriti-mall.jpg",
            linkedin: null,
            github: null
        },
        {
            name: "Ansh Bishnoi",
            photo: "/img/team/ansh-bishnoi.webp",
            linkedin: "https://www.linkedin.com/in/ansh-bishnoi-4b5b77386?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            github: null
        },
        {
            name: "Aditya Jhajharia",
            photo: "/img/team/aditya-jhajharia.jpg",
            linkedin: null,
            github: null
        },
        {
            name: "Aryan Singh",
            photo: "/img/team/aryan-singh.jpg",
            linkedin: "https://www.linkedin.com/in/aryan-singh-b7b20a385?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            github: "https://github.com/AryanSSSSSS"
        },
        {
            name: "Aviral Gupta",
            photo: "/img/team/aviral-gupta.jpg",
            linkedin: "https://www.linkedin.com/in/aviral-gupta-b9475a383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: "https://github.com/aviralgupta4562-rgb"
        },
        {
            name: "Ayush Verma",
            photo: "/img/team/ayush-verma.jpg",
            linkedin: null,
            github: null
        },
        {
            name: "Bulesh Thakur",
            photo: "/img/team/bulesh-thakur.jpg",
            linkedin: "https://www.linkedin.com/in/bulesh-thakur-ab48793a6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: null
        },
        {
            name: "Harshita",
            photo: "/img/team/harshita.jpg",
            linkedin: "https://www.linkedin.com/in/ms-harshita-3b41a7387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: null
        },
        {
            name: "Jeet Jeedan Behera",
            photo: "/img/team/jeet-jeedan-behera.jpg",
            linkedin: null,
            github: null
        },
        {
            name: "Ketan",
            photo: "/img/team/ketan.png",
            linkedin: "https://www.linkedin.com/in/ketan-dadarwal-597583382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app#",
            github: null
        },
        {
            name: "Krishna Pratap Singh",
            photo: "/img/team/krishna-pratap-singh.jpg",
            linkedin: "https://www.linkedin.com/in/krishna-pratap-singh-8749983a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            github: null
        },
        {
            name: "Kuldeep Bhakar",
            photo: null,
            linkedin: "https://www.linkedin.com/in/kuldeep-bhakar-976b10382",
            github: "https://github.com/kuldeep804"
        },
        {
            name: "Kush Sharma",
            photo: null,
            linkedin: null,
            github: null
        },
        {
            name: "Kushagra Goel",
            photo: "/img/team/kushagra-goel.jpg",
            linkedin: "https://www.linkedin.com/in/kushagra-goel-6b8ab536a/",
            github: "https://github.com/kgoel17"
        },
        {
            name: "Neel Nalin Pathak",
            photo: "/img/team/neel-nalin-pathak.jpg",
            linkedin: null,
            github: null
        },
        {
            name: "Priyanshu Saini",
            photo: "/img/team/priyanshu-saini.webp",
            linkedin: "https://www.linkedin.com/in/priyanshu-saini-4a13a0383/",
            github: "https://github.com/pr1y4nshusaini06-creator"
        },
        {
            name: "Rahul Sonkhla",
            photo: "/img/team/rahul-sonkhla.jpg",
            linkedin: "https://www.linkedin.com/in/rahul-sonkhla-b7a939379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            github: null
        },
        {
            name: "Tanmay Rana",
            photo: "/img/team/tanmay-rana.jpg",
            linkedin: null,
            github: null
        },
        {
            name: "Taniya Jorwal",
            photo: "/img/team/taniya-jorwal.webp",
            linkedin: "https://www.linkedin.com/in/taniya-jorwal-036004387",
            github: null
        }
    ].map((m, i)=>({
            name: m.name,
            position: null,
            group: "EXECUTIVE",
            department: null,
            yearLabel: "First Year",
            bio: null,
            email: null,
            photo: m.photo,
            linkedin: m.linkedin,
            github: m.github,
            committee: false,
            draft: false,
            sortOrder: i
        }))
];
}),
"[project]/src/content/gallery.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "galleryAlbums",
    ()=>galleryAlbums
]);
const emmaImages = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    14
].map((i, idx)=>({
        url: `/img/gallery/emma-workshop/emma-workshop-${String(i).padStart(2, "0")}.jpeg`,
        alt: `AI-emma Workshop — moment ${idx + 1}`,
        sortOrder: idx
    }));
const galleryAlbums = [
    {
        slug: "ai-emma-workshop",
        title: "AI-emma Workshop",
        year: "2025",
        sortOrder: 0,
        images: emmaImages
    }
];
}),
"[project]/src/content/sparkathon.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prizeTiers",
    ()=>prizeTiers,
    "problemStatements",
    ()=>problemStatements,
    "sparkathonDefaults",
    ()=>sparkathonDefaults
]);
const sparkathonDefaults = {
    eventDate: "2026-09-15T10:00:00+05:30",
    dateIsTentative: true,
    registrationLink: "",
    venue: "Mini Auditorium, NIT Hamirpur"
};
const prizeTiers = [
    {
        place: 1,
        label: "Winner",
        amountInr: 10000,
        extras: "+ additional gifts",
        sortOrder: 0
    },
    {
        place: 2,
        label: "1st Runner-up",
        amountInr: 6000,
        extras: "+ additional gifts",
        sortOrder: 1
    },
    {
        place: 3,
        label: "2nd Runner-up",
        amountInr: 3000,
        extras: "+ additional gifts",
        sortOrder: 2
    }
];
const problemStatements = [
    {
        code: "PS-101",
        title: "Autonomous Self-Evolving Energy Grid",
        description: "Traditional power grids are rigid and struggle to efficiently integrate renewable energy sources. The challenge is to design a distributed energy grid that uses artificial intelligence and multi-agent reinforcement learning to dynamically reconfigure energy flow, storage allocation, and load balancing. The system should automatically adapt to changing demand, renewable energy fluctuations, and grid faults while maximizing efficiency and resilience.",
        category: "Software",
        theme: "Smart Energy / AI",
        imageUrl: "/img/sparkathon/problem-statements/ps-101.png",
        sortOrder: 0
    },
    {
        code: "PS-102",
        title: "Autonomous Blockchain Energy Economy",
        description: "Energy markets are still centralized and inefficient. The goal is to develop a decentralized energy trading platform where households and industries can trade excess renewable energy using blockchain technology. Smart meters and AI-based demand prediction should automatically negotiate prices and execute transactions through secure smart contracts.",
        category: "Software",
        theme: "Blockchain / Smart Energy",
        imageUrl: "/img/sparkathon/problem-statements/ps-102.png",
        sortOrder: 1
    },
    {
        code: "PS-103",
        title: "Swarm Robotics for Renewable Infrastructure Repair",
        description: "Large solar farms and wind turbine installations require continuous inspection and maintenance. The challenge is to design a swarm robotics system capable of autonomously inspecting renewable infrastructure, detecting faults, and performing minor repair tasks. The robots should collaborate using swarm intelligence to improve efficiency and reduce maintenance costs.",
        category: "Hardware & Software",
        theme: "Robotics / Renewable Energy",
        imageUrl: "/img/sparkathon/problem-statements/ps-103.png",
        sortOrder: 2
    },
    {
        code: "PS-104",
        title: "AI-Driven Cybersecurity Shield for Smart Grids",
        description: "Smart grids rely heavily on digital communication and IoT systems, making them vulnerable to cyber attacks. The challenge is to develop an intelligent cybersecurity framework that uses AI to detect abnormal activities, prevent cyber intrusions, and protect energy infrastructure in real time.",
        category: "Software",
        theme: "Cybersecurity / AI",
        imageUrl: "/img/sparkathon/problem-statements/ps-104.png",
        sortOrder: 3
    },
    {
        code: "PS-105",
        title: "Carbon-Negative Blockchain Trading Protocol",
        description: "Many blockchain systems consume significant energy and contribute to carbon emissions. The challenge is to design an environmentally sustainable blockchain protocol that measures and offsets carbon footprints while enabling secure digital transactions. The protocol should incentivize carbon-negative operations and support green energy initiatives.",
        category: "Software",
        theme: "Blockchain / Sustainability",
        imageUrl: "/img/sparkathon/problem-statements/ps-105.png",
        sortOrder: 4
    },
    {
        code: "PS-106",
        title: "AI-Controlled Solid-State Grid Architecture",
        description: "Future energy grids require faster response and higher efficiency. The problem is to design a grid architecture based on solid-state transformers controlled by artificial intelligence. The system should manage power distribution dynamically and maintain stability even under fluctuating renewable energy inputs.",
        category: "Hardware & Software",
        theme: "Smart Grid / AI",
        imageUrl: "/img/sparkathon/problem-statements/ps-106.png",
        sortOrder: 5
    },
    {
        code: "PS-107",
        title: "Self-Adaptive Climate-Resilient Floating Solar Platform",
        description: "Floating solar panels installed on lakes and reservoirs face challenges due to weather variations and water movement. The objective is to design a floating solar platform that automatically adjusts its position and angle based on sunlight and environmental conditions to maximize energy production.",
        category: "Hardware & Software",
        theme: "Renewable Energy",
        imageUrl: "/img/sparkathon/problem-statements/ps-107.png",
        sortOrder: 6
    },
    {
        code: "PS-108",
        title: "Dynamic Disaster Communication Hub",
        description: "During natural disasters, communication networks often collapse, making rescue coordination difficult. The challenge is to design a portable and rapidly deployable communication hub that can create an emergency wireless network to enable communication between rescue teams and affected populations.",
        category: "Hardware & Software",
        theme: "Disaster Management / Communication",
        imageUrl: "/img/sparkathon/problem-statements/ps-108.png",
        sortOrder: 7
    },
    {
        code: "PS-109",
        title: "Development of Non-Electrical Solar Tracker",
        description: "Solar panels generate maximum energy when aligned with the sun, but traditional trackers rely on electrical motors and sensors. The challenge is to develop a low-cost mechanical solar tracking system that uses passive mechanisms such as thermal expansion or gravity to track sunlight without using electricity.",
        category: "Hardware",
        theme: "Renewable Energy",
        imageUrl: "/img/sparkathon/problem-statements/ps-109.png",
        sortOrder: 8
    },
    {
        code: "PS-110",
        title: "AI-Based Electricity Theft Detection",
        description: "Electricity theft is a major problem in many regions and leads to financial losses for utilities. The objective is to develop an AI-based monitoring system that analyzes consumption patterns and identifies abnormal usage that may indicate electricity theft.",
        category: "Software",
        theme: "AI / Smart Grid",
        imageUrl: "/img/sparkathon/problem-statements/ps-110.png",
        sortOrder: 9
    },
    {
        code: "PS-111",
        title: "Low-Cost Decentralized Smart Air Purification System",
        description: "Air pollution is a growing issue in urban areas. The challenge is to design an affordable decentralized air purification system that can be installed in homes or small communities and uses IoT sensors to monitor and improve air quality.",
        category: "Hardware & Software",
        theme: "Environmental Technology",
        imageUrl: "/img/sparkathon/problem-statements/ps-111.png",
        sortOrder: 10
    },
    {
        code: "PS-112",
        title: "Energy Theft Detection System",
        description: "Illegal electricity tapping and meter tampering create huge losses in the power sector. The challenge is to develop a system using smart sensors and data analytics that can detect unauthorized connections and alert authorities in real time.",
        category: "Hardware & Software",
        theme: "Smart Grid",
        imageUrl: "/img/sparkathon/problem-statements/ps-112.png",
        sortOrder: 11
    },
    {
        code: "PS-113",
        title: "Smart Traffic Management System for Urban Congestion",
        description: "Urban traffic congestion causes delays, pollution, and accidents. The goal is to develop a smart traffic management system that uses real-time traffic data and AI algorithms to optimize traffic signals and reduce congestion.",
        category: "Software",
        theme: "Smart Cities / AI",
        imageUrl: "/img/sparkathon/problem-statements/ps-113.png",
        sortOrder: 12
    },
    {
        code: "PS-114",
        title: "Smart Energy Theft Detection System",
        description: "Power utilities require efficient monitoring systems to reduce energy losses. The challenge is to design a smart energy monitoring system that uses IoT sensors and machine learning algorithms to identify irregular consumption patterns and detect power theft.",
        category: "Hardware & Software",
        theme: "Smart Energy",
        imageUrl: "/img/sparkathon/problem-statements/ps-114.png",
        sortOrder: 13
    },
    {
        code: "PS-115",
        title: "Renewable Energy Integration System",
        description: "Renewable energy sources such as solar and wind are intermittent and difficult to integrate into traditional grids. The challenge is to develop a system that efficiently integrates renewable energy with existing power infrastructure while maintaining grid stability.",
        category: "Hardware & Software",
        theme: "Renewable Energy",
        imageUrl: "/img/sparkathon/problem-statements/ps-115.png",
        sortOrder: 14
    },
    {
        code: "PS-116",
        title: "Smart Buildings and Homes",
        description: "Energy consumption in buildings contributes significantly to global energy demand. The objective is to design smart building systems that automatically optimize energy usage through intelligent lighting, climate control, and appliance management.",
        category: "Hardware & Software",
        theme: "Smart Cities / IoT",
        imageUrl: "/img/sparkathon/problem-statements/ps-116.png",
        sortOrder: 15
    },
    {
        code: "PS-117",
        title: "Real-Time Smart Grid Fault Detection",
        description: "Faults in electrical grids can lead to power outages and infrastructure damage. The challenge is to develop a real-time monitoring system that quickly detects faults in transmission and distribution networks and triggers automated corrective actions.",
        category: "Hardware & Software",
        theme: "Smart Grid",
        imageUrl: "/img/sparkathon/problem-statements/ps-117.png",
        sortOrder: 16
    },
    {
        code: "PS-118",
        title: "Smart Street Light System",
        description: "Street lighting consumes a large amount of electricity in cities. The goal is to design an intelligent street lighting system that automatically adjusts brightness based on traffic, time, and environmental conditions to save energy.",
        category: "Hardware & Software",
        theme: "Smart Cities / IoT",
        imageUrl: "/img/sparkathon/problem-statements/ps-118.png",
        sortOrder: 17
    }
];
}),
"[project]/src/lib/data/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getApprovedIdeas",
    ()=>getApprovedIdeas,
    "getEvents",
    ()=>getEvents,
    "getFeaturedProjects",
    ()=>getFeaturedProjects,
    "getGalleryAlbums",
    ()=>getGalleryAlbums,
    "getOrganizingCommittee",
    ()=>getOrganizingCommittee,
    "getPastEvents",
    ()=>getPastEvents,
    "getPrizeTiers",
    ()=>getPrizeTiers,
    "getProblemStatements",
    ()=>getProblemStatements,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "getProjects",
    ()=>getProjects,
    "getSparkathonSettings",
    ()=>getSparkathonSettings,
    "getTeam",
    ()=>getTeam,
    "getTeamByGroup",
    ()=>getTeamByGroup,
    "getUpcomingEvents",
    ()=>getUpcomingEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$events$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/events.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/projects.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$team$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/team.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$gallery$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/gallery.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$sparkathon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/sparkathon.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const iso = (d)=>d ? d.toISOString() : null;
function withIds(rows, prefix) {
    return rows.map((row, i)=>({
            ...row,
            id: `${prefix}-${i}`
        }));
}
async function fromDb(query) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"]) return null;
    try {
        return await query();
    } catch (error) {
        console.error("[data] database unavailable, serving seed content:", error);
        return null;
    }
}
const getProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].project.findMany({
            where: {
                status: "PUBLISHED"
            },
            orderBy: [
                {
                    sortOrder: "asc"
                },
                {
                    createdAt: "asc"
                }
            ]
        }));
    if (!rows) {
        return withIds(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$projects$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.status === "PUBLISHED"), "seed-project");
    }
    return rows.map((r)=>({
            ...r,
            workStatus: r.workStatus,
            status: r.status
        }));
});
const getProjectBySlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async (slug)=>{
    const all = await getProjects();
    return all.find((p)=>p.slug === slug) ?? null;
});
const getFeaturedProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const all = await getProjects();
    const featured = all.filter((p)=>p.featured);
    return featured.length > 0 ? featured : all.slice(0, 5);
});
const getEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].event.findMany({
            orderBy: [
                {
                    sortOrder: "asc"
                },
                {
                    createdAt: "asc"
                }
            ]
        }));
    if (!rows) return withIds([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$events$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["events"]
    ], "seed-event");
    return rows.map((r)=>({
            ...r,
            startAt: iso(r.startAt),
            endAt: iso(r.endAt),
            recurrence: r.recurrence,
            dayOfWeek: r.dayOfWeek,
            status: r.status
        }));
});
const getUpcomingEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const all = await getEvents();
    return all.filter((e)=>e.status === "UPCOMING" || e.status === "ONGOING");
});
const getPastEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const all = await getEvents();
    return all.filter((e)=>e.status === "COMPLETED");
});
const getTeam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].teamMember.findMany({
            orderBy: [
                {
                    group: "asc"
                },
                {
                    sortOrder: "asc"
                }
            ]
        }));
    if (!rows) return withIds([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$team$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["teamMembers"]
    ], "seed-member");
    return rows.map((r)=>({
            ...r,
            group: r.group
        }));
});
const getTeamByGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const all = await getTeam();
    const groups = {
        FACULTY: [],
        CORE: [],
        THIRD_YEAR: [],
        EXECUTIVE: [],
        VOLUNTEER: []
    };
    for (const member of all)groups[member.group].push(member);
    for (const list of Object.values(groups)){
        list.sort((a, b)=>a.sortOrder - b.sortOrder);
    }
    return groups;
});
const getOrganizingCommittee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const all = await getTeam();
    return all.filter((m)=>m.committee);
});
const getPrizeTiers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].prizeTier.findMany({
            orderBy: {
                sortOrder: "asc"
            }
        }));
    if (!rows) return withIds([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$sparkathon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prizeTiers"]
    ], "seed-prize");
    return rows;
});
const getProblemStatements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].problemStatement.findMany({
            orderBy: {
                sortOrder: "asc"
            }
        }));
    if (!rows) return withIds([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$sparkathon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["problemStatements"]
    ], "seed-ps");
    return rows;
});
const getSparkathonSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const row = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].setting.findUnique({
            where: {
                key: "sparkathon"
            }
        }));
    if (row?.value && typeof row.value === "object") {
        return {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$sparkathon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sparkathonDefaults"],
            ...row.value
        };
    }
    return {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$sparkathon$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sparkathonDefaults"]
    };
});
const getApprovedIdeas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].sparkathonSubmission.findMany({
            where: {
                status: "APPROVED"
            },
            orderBy: {
                createdAt: "desc"
            },
            take: 24
        }));
    if (!rows) return [];
    return rows.map((r)=>({
            id: r.id,
            title: r.title,
            description: r.description,
            submitterName: r.submitterName,
            createdAt: r.createdAt.toISOString()
        }));
});
const getGalleryAlbums = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(async ()=>{
    const rows = await fromDb(()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].galleryAlbum.findMany({
            orderBy: {
                sortOrder: "asc"
            },
            include: {
                images: {
                    orderBy: {
                        sortOrder: "asc"
                    }
                }
            }
        }));
    if (!rows) return withIds([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$gallery$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["galleryAlbums"]
    ], "seed-album");
    return rows.map((album)=>({
            id: album.id,
            slug: album.slug,
            title: album.title,
            year: album.year,
            sortOrder: album.sortOrder,
            images: album.images.map((img)=>({
                    url: img.url,
                    alt: img.alt,
                    sortOrder: img.sortOrder
                }))
        }));
});
}),
"[project]/src/content/about.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * About-page copy + FAQs, preserved verbatim from the previous site.
 */ __turbopack_context__.s([
    "aboutDomains",
    ()=>aboutDomains,
    "aboutFeatures",
    ()=>aboutFeatures,
    "aboutIntro",
    ()=>aboutIntro,
    "facultyMessagesTitle",
    ()=>facultyMessagesTitle,
    "faqs",
    ()=>faqs,
    "milestones",
    ()=>milestones,
    "objectives",
    ()=>objectives,
    "whyJoin",
    ()=>whyJoin
]);
const aboutIntro = [
    "ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, stands as a beacon of innovation and excellence, cultivating intellectual curiosity and analytical rigor among aspiring engineers. It provides a platform where theoretical knowledge converges with inventive exploration, inspiring students to excel in the ever-evolving domain of electrical engineering.",
    "Over the course of the year, ELSOC curates an array of workshops, expert lectures, and innovative projects and experiments, enabling members to translate conceptual understanding into tangible solutions. Students engage with advanced simulation frameworks, microcontroller-driven projects, and empirical investigations of intricate electrical phenomena.",
    "By fostering creativity, technical acumen, and a relentless spirit of inquiry, ELSOC molds engineers capable of transcending conventional paradigms, devising pioneering solutions, and effecting transformative contributions to the rapidly advancing technological landscape."
];
const aboutFeatures = [
    {
        icon: "eye",
        title: "Our Vision",
        description: "To be the leading technical society at NIT Hamirpur, fostering innovation, excellence, and leadership in electrical engineering, empowering students to become pioneers in emerging technologies and contribute meaningfully to society."
    },
    {
        icon: "rocket",
        title: "Our Mission",
        description: "Empowering students through hands-on learning, industry collaborations, cutting-edge projects, and expert mentorship that bridges theoretical knowledge with practical application, preparing future-ready electrical engineers."
    },
    {
        icon: "zap",
        title: "Core Values",
        description: "Innovation, integrity, collaboration, excellence, and continuous learning form the foundation of ELSOC. We believe in pushing boundaries, embracing challenges, and creating solutions that make a real-world impact."
    },
    {
        icon: "graduation-cap",
        title: "Our Approach",
        description: "Combining academic rigor with practical experience through workshops, hackathons, guest lectures, and industry visits. We focus on holistic development, technical expertise, and leadership skills for every member."
    }
];
const aboutDomains = [
    {
        icon: "zap",
        title: "Power Systems",
        description: "Exploring smart grids, renewable energy, and advanced power distribution systems"
    },
    {
        icon: "cpu",
        title: "IoT & Embedded Systems",
        description: "Building connected devices, sensor networks, and intelligent automation solutions"
    },
    {
        icon: "settings",
        title: "Control & Automation",
        description: "Designing intelligent control systems, robotics, and industrial automation"
    },
    {
        icon: "activity",
        title: "Signal Processing",
        description: "Working with AI/ML, data analysis, and advanced signal processing techniques"
    }
];
const objectives = [
    "Foster technical excellence and innovation in electrical engineering",
    "Provide hands-on learning through workshops, labs, and real-world projects",
    "Bridge the gap between academic knowledge and industry requirements",
    "Organize technical events, competitions, and expert guest lectures",
    "Build a strong community of passionate engineers and tech enthusiasts",
    "Promote research and development in emerging technologies like IoT, AI/ML, and Renewable Energy",
    "Facilitate networking with industry professionals, alumni, and researchers",
    "Encourage interdisciplinary collaboration across engineering domains"
];
const milestones = [
    {
        year: "2020",
        title: "ELSOC Established",
        description: "Founded as the official Electrical Engineering Society at NIT Hamirpur"
    },
    {
        year: "2022",
        title: "First Major Workshop",
        description: "Successfully conducted Blockchain Workshop with 150+ participants"
    },
    {
        year: "2023",
        title: "Industry Collaboration",
        description: "Partnered with leading companies for internship talks and tech sessions"
    },
    {
        year: "2025",
        title: "5 Years of Excellence",
        description: "Celebrating 5 years with 33 active members, 35+ projects, and 10+ annual events"
    }
];
const whyJoin = [
    {
        icon: "users",
        title: "Community",
        description: "33 passionate members working on cutting-edge projects"
    },
    {
        icon: "calendar",
        title: "Events",
        description: "10+ workshops, hackathons, and tech talks every year"
    },
    {
        icon: "lightbulb",
        title: "Learning",
        description: "Hands-on experience with latest technologies and tools"
    },
    {
        icon: "trophy",
        title: "Recognition",
        description: "Certificates, networking opportunities, and portfolio projects"
    }
];
const faqs = [
    {
        question: "How can I become a member of ELSOC?",
        answer: "ELSOC conducts interviews for first-year and second-year students during the recruitment drive at the beginning of each academic year. Students from all branches are welcome to apply through our official recruitment process."
    },
    {
        question: "Do I need to be from Electrical Engineering to join?",
        answer: "No! ELSOC welcomes students from all branches of engineering who have a genuine interest in electrical engineering, technology, and innovation. We believe in diversity and cross-disciplinary collaboration."
    },
    {
        question: "What kind of events does ELSOC organize?",
        answer: "ELSOC organizes a wide variety of events including technical workshops, hackathons, guest lectures by industry experts, coding competitions, project exhibitions, and hands-on training sessions throughout the year."
    },
    {
        question: "Is there any membership fee?",
        answer: "No, membership in ELSOC is completely free for all NIT Hamirpur students. There are no fees to join or participate in most of our activities, ensuring accessibility for everyone interested."
    }
];
const facultyMessagesTitle = "What's Our Faculty Say?";
}),
"[project]/src/content/site.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Global site configuration + copy that appears in the shell (nav, footer,
 * hero) rather than in a CMS-managed collection.
 */ __turbopack_context__.s([
    "homeDomains",
    ()=>homeDomains,
    "navLinks",
    ()=>navLinks,
    "site",
    ()=>site
]);
const site = {
    name: "ELSOC",
    fullName: "ELSOC — Electrical Engineering Society, NIT Hamirpur",
    tagline: "Electrical Engineering Society",
    department: "Department of Electrical Engineering",
    institute: "National Institute of Technology, Hamirpur",
    url: "https://elsoc.nith.ac.in",
    description: "ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, empowers aspiring engineers through innovation, collaboration, and excellence.",
    heroBadge: "NIT Hamirpur's Premier Tech Society",
    mission: "ELSOC, the Departmental Society of Electrical Engineering at NIT Hamirpur, empowers aspiring engineers through innovation, collaboration, and excellence. We bridge theoretical knowledge with practical application through hands-on workshops, expert lectures, cutting-edge projects, and industry collaborations. Our community fosters creativity, technical expertise, and problem-solving skills, preparing students to lead in the rapidly evolving field of electrical engineering and make meaningful contributions to technology and society.",
    contact: {
        email: "elsoc@nith.ac.in",
        phone: "+91 82331 08540",
        phoneLabel: "General Secretary: +91 82331 08540",
        address: "NIT Hamirpur, Himachal Pradesh, India - 177005",
        addressShort: "NIT Hamirpur, HP - 177005",
        mapsUrl: "https://maps.google.com/?q=NIT+Hamirpur",
        mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.8543814537745!2d76.52677631512648!3d31.469450981397936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a9%3A0x80b2347d4280e84d!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
    },
    socials: [
        {
            platform: "Facebook",
            url: "https://www.facebook.com/elsoc.nith/"
        },
        {
            platform: "Instagram",
            url: "https://www.instagram.com/elsoc_nith/"
        },
        {
            platform: "LinkedIn",
            url: "https://in.linkedin.com/company/elsoc-nit-hamirpur"
        }
    ],
    stats: [
        {
            value: "35+",
            label: "Projects"
        },
        {
            value: "10+",
            label: "Events / Year"
        },
        {
            value: "33",
            label: "Team Members"
        },
        {
            value: "5",
            label: "Years of Excellence"
        }
    ],
    maintainer: "Maintained by Ronak Dotasara (24BEE083) and Team ELSOC",
    logo: "/img/brand/elsoc-logo.png",
    nithLogo: "/img/brand/nith-logo.png"
};
const navLinks = [
    {
        href: "/",
        label: "Home"
    },
    {
        href: "/about",
        label: "About"
    },
    {
        href: "/events",
        label: "Events"
    },
    {
        href: "/sparkathon",
        label: "Sparkathon"
    },
    {
        href: "/projects",
        label: "Projects"
    },
    {
        href: "/gallery",
        label: "Gallery"
    },
    {
        href: "/team",
        label: "Team"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
const homeDomains = [
    {
        image: "/img/domains/circuit-design.jpeg",
        title: "Circuit Design",
        description: "Analog & digital circuits"
    },
    {
        image: "/img/domains/web-development.jpeg",
        title: "Web Development",
        description: "Full-stack development"
    },
    {
        image: "/img/domains/ai-ml.jpeg",
        title: "AI/ML",
        description: "Artificial Intelligence & Machine Learning"
    },
    {
        image: "/img/domains/media-marketing.jpg",
        title: "Media & Marketing",
        description: "Digital content & outreach"
    },
    {
        image: "/img/domains/finance.jpg",
        title: "Finance",
        description: "Budget & fund management"
    },
    {
        image: "/img/domains/content.webp",
        title: "Content",
        description: "Technical writing & documentation"
    },
    {
        image: "/img/domains/design.jpg",
        title: "Design",
        description: "UI/UX & graphic design"
    },
    {
        image: "/img/domains/management.jpg",
        title: "Management",
        description: "Team coordination & planning"
    }
];
}),
"[project]/src/lib/utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatDate",
    ()=>formatDate,
    "formatINR",
    ()=>formatINR,
    "humanize",
    ()=>humanize,
    "initials",
    ()=>initials,
    "slugify",
    ()=>slugify
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-route] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const formatINR = (amount)=>new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
const formatDate = (value, opts)=>new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
        ...opts
    }).format(typeof value === "string" ? new Date(value) : value);
const initials = (name)=>name.split(/\s+/).filter(Boolean).slice(0, 2).map((part)=>part[0]?.toUpperCase() ?? "").join("");
const humanize = (value)=>value.toLowerCase().replaceAll("_", " ").replace(/\b([a-z])/g, (m)=>m.toUpperCase()).replace(/\bAnd\b/g, "and");
const slugify = (value)=>value.toLowerCase().trim().replace(/[^a-z0-9\s_-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}),
"[project]/src/lib/rag.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCorpus",
    ()=>buildCorpus,
    "offlineAnswer",
    ()=>offlineAnswer,
    "rank",
    ()=>rank,
    "retrieve",
    ()=>retrieve
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$about$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/about.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-route] (ecmascript)");
;
;
;
;
;
const STOP = new Set("a an and are as at be by for from has have how i in is it of on or that the this to was we what when where which who will with you your".split(" "));
const tokenize = (text)=>text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter((t)=>t.length > 1 && !STOP.has(t));
async function buildCorpus() {
    const [projects, events, statements, team, sparkathon] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProjects"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEvents"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProblemStatements"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTeam"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSparkathonSettings"])()
    ]);
    const chunks = [];
    chunks.push({
        id: "about",
        title: "About ELSOC",
        url: "/about",
        content: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].mission} ELSOC stands for the Electrical Engineering Society of ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].institute}. Contact: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].contact.email}, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].contact.phoneLabel}. Address: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].contact.address}. Instagram: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].socials[1]?.url}. Membership is free and recruitment happens at the start of each academic year.`
    });
    for (const faq of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$about$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["faqs"]){
        chunks.push({
            id: `faq:${faq.question}`,
            title: faq.question,
            url: "/contact",
            content: faq.answer
        });
    }
    for (const p of projects){
        chunks.push({
            id: `project:${p.slug}`,
            title: `Project — ${p.title}`,
            url: `/projects/${p.slug}`,
            content: `${p.summary} Category: ${p.category}. Status: ${p.workStatus} (${p.year}). Team: ${p.team.join(", ")}${p.facultyCoordinator ? `. Faculty coordinator: ${p.facultyCoordinator}` : ""}. Technologies: ${p.technologies.join(", ")}. ${p.abstract.slice(0, 500)}`
        });
    }
    for (const e of events){
        const when = e.recurrence === "WEEKLY" && e.dayOfWeek ? `every ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["humanize"])(e.dayOfWeek)}` : e.dateLabel ?? "date TBA";
        chunks.push({
            id: `event:${e.slug}`,
            title: `Event — ${e.title}`,
            url: "/events",
            content: `${e.description} Category: ${e.category}. Status: ${e.status.toLowerCase()}. When: ${when}${e.timeLabel ? `, ${e.timeLabel}` : ""}. Where: ${e.location}.`
        });
    }
    chunks.push({
        id: "sparkathon",
        title: "Sparkathon (flagship hackathon)",
        url: "/sparkathon",
        content: `Sparkathon is ELSOC's flagship hackathon-style competition at ${sparkathon.venue}. ${sparkathon.eventDate ? `Scheduled for ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDate"])(sparkathon.eventDate)}${sparkathon.dateIsTentative ? " (tentative)" : ""}.` : "Date to be announced."} Prize pool: ₹10,000 winner, ₹6,000 first runner-up, ₹3,000 second runner-up, plus additional gifts. There are ${statements.length} official problem statements covering smart energy, AI, robotics, blockchain and smart cities. Open to all students.`
    });
    for (const ps of statements){
        chunks.push({
            id: `ps:${ps.code}`,
            title: `${ps.code} — ${ps.title}`,
            url: "/sparkathon#problem-statements",
            content: `${ps.description} Category: ${ps.category}. Theme: ${ps.theme}.`
        });
    }
    const leadership = team.filter((m)=>m.group === "FACULTY" || m.group === "CORE" || m.group === "THIRD_YEAR").map((m)=>`${m.name}${m.position ? ` (${m.position})` : ""}`).join(", ");
    chunks.push({
        id: "team",
        title: "ELSOC team & leadership",
        url: "/team",
        content: `ELSOC has ${team.length} listed members across faculty mentors, the core team, third-year coordinators and first-year executives. Leadership: ${leadership}.`
    });
    return chunks;
}
function rank(query, corpus, k = 5) {
    const terms = tokenize(query);
    if (terms.length === 0) return [];
    const queryLower = query.toLowerCase();
    const scored = corpus.map((chunk)=>{
        const titleTokens = new Set(tokenize(chunk.title));
        const bodyTokens = tokenize(chunk.content);
        const bodySet = new Set(bodyTokens);
        let score = 0;
        for (const term of terms){
            if (titleTokens.has(term)) score += 3;
            if (bodySet.has(term)) score += 1;
        }
        // exact phrase bonus
        if (queryLower.length > 6 && chunk.content.toLowerCase().includes(queryLower)) {
            score += 4;
        }
        return {
            chunk,
            score
        };
    });
    return scored.filter((s)=>s.score >= 2).sort((a, b)=>b.score - a.score).slice(0, k).map((s)=>s.chunk);
}
async function retrieve(query, k = 5) {
    const corpus = await buildCorpus();
    return rank(query, corpus, k);
}
async function offlineAnswer(query) {
    const q = query.toLowerCase();
    if (/^(hi|hello|hey|namaste|yo)\b/.test(q)) {
        return `Hello! I'm the ELSOC assistant. I can tell you about our events, the Sparkathon hackathon, ongoing projects, the team, and how to join. What would you like to know?`;
    }
    const hits = await retrieve(query, 3);
    if (hits.length === 0) {
        return `I couldn't find that in ELSOC's site content. Try asking about our events, Sparkathon, projects, or the team — or reach us directly at ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].contact.email}.`;
    }
    const parts = hits.map((h)=>`**${h.title}**\n${h.content.slice(0, 320).trim()}…\n→ ${h.url}`);
    return `Here's what I found:\n\n${parts.join("\n\n")}`;
}
}),
"[project]/src/lib/rate-limit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fixed-window in-memory rate limiter.
 *
 * Suitable for the single-instance deployments this site targets (one Docker
 * container / one Vercel region for a society site). If the app is ever
 * scaled horizontally, swap the store for Redis/Upstash — the call sites
 * won't change.
 */ __turbopack_context__.s([
    "CHAT_LIMIT",
    ()=>CHAT_LIMIT,
    "FORM_LIMIT",
    ()=>FORM_LIMIT,
    "LOGIN_LIMIT",
    ()=>LOGIN_LIMIT,
    "rateLimit",
    ()=>rateLimit,
    "sweepExpiredBuckets",
    ()=>sweepExpiredBuckets
]);
const buckets = new Map();
function rateLimit(key, { limit, windowMs }) {
    const now = Date.now();
    const bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
        buckets.set(key, {
            count: 1,
            resetAt: now + windowMs
        });
        return {
            ok: true,
            remaining: limit - 1,
            retryAfterSeconds: 0
        };
    }
    bucket.count += 1;
    if (bucket.count > limit) {
        return {
            ok: false,
            remaining: 0,
            retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000)
        };
    }
    return {
        ok: true,
        remaining: limit - bucket.count,
        retryAfterSeconds: 0
    };
}
// Opportunistic cleanup so long-running processes don't accumulate stale keys.
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000;
let lastCleanup = Date.now();
function sweepExpiredBuckets(now = Date.now()) {
    if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
    lastCleanup = now;
    for (const [key, bucket] of buckets){
        if (bucket.resetAt <= now) buckets.delete(key);
    }
}
const LOGIN_LIMIT = {
    limit: 5,
    windowMs: 15 * 60 * 1000
};
const FORM_LIMIT = {
    limit: 10,
    windowMs: 10 * 60 * 1000
};
const CHAT_LIMIT = {
    limit: 20,
    windowMs: 5 * 60 * 1000
};
}),
"[project]/src/app/api/chat/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "maxDuration",
    ()=>maxDuration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@ai-sdk/anthropic/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ai/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validators.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rag.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rate-limit.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
const maxDuration = 30;
async function POST(req) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sweepExpiredBuckets"])();
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rateLimit"])(`chat:${ip}`, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CHAT_LIMIT"]);
    if (!limit.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "rate_limited",
            retryAfter: limit.retryAfterSeconds
        }, {
            status: 429,
            headers: {
                "Retry-After": String(limit.retryAfterSeconds)
            }
        });
    }
    const parsed = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validators$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chatRequestSchema"].safeParse(await req.json().catch(()=>null));
    if (!parsed.success) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "invalid_request"
        }, {
            status: 400
        });
    }
    const messages = parsed.data.messages.slice(-12);
    const lastUser = [
        ...messages
    ].reverse().find((m)=>m.role === "user");
    const query = lastUser?.content ?? "";
    // ── Offline mode ─────────────────────────────────────────────────────────
    if (!process.env.ANTHROPIC_API_KEY) {
        const answer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["offlineAnswer"])(query);
        return new Response(answer, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "x-elsoc-chat-mode": "offline"
            }
        });
    }
    // ── AI mode with retrieval grounding ─────────────────────────────────────
    const chunks = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["retrieve"])(query, 5);
    const context = chunks.length > 0 ? chunks.map((c)=>`### ${c.title} (${c.url})\n${c.content}`).join("\n\n") : "No specific site content matched this question.";
    try {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["streamText"])({
            model: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ai$2d$sdk$2f$anthropic$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["anthropic"])(process.env.ELSOC_CHAT_MODEL ?? "claude-haiku-4-5-20251001"),
            system: [
                `You are the ELSOC Assistant — the friendly guide for the Electrical Engineering Society of ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].institute}.`,
                `Answer ONLY from the context below. If the context doesn't cover the question, say so briefly and point the user to ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["site"].contact.email} or the relevant page. Never invent dates, prices, names, or links.`,
                `Keep answers concise (2–5 sentences), warm, and student-friendly. Use the page paths from the context (like /sparkathon) when pointing somewhere.`,
                ``,
                `## ELSOC site context`,
                context
            ].join("\n"),
            messages: messages.map((m)=>({
                    role: m.role,
                    content: m.content
                })),
            maxOutputTokens: 600,
            temperature: 0.4
        });
        return result.toTextStreamResponse({
            headers: {
                "x-elsoc-chat-mode": "ai"
            }
        });
    } catch (error) {
        console.error("[chat] provider error:", error);
        // Provider failure → degrade to retrieval so the user still gets an answer.
        const answer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rag$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["offlineAnswer"])(query);
        return new Response(answer, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "x-elsoc-chat-mode": "offline"
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ff0fbdcc._.js.map