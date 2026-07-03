# ELSOC — elsoc.nith.ac.in

Production website for **ELSOC, the Electrical Engineering Society of NIT Hamirpur**:
public site + admin CMS + AI assistant, built to be maintained by a student team.

Maintained by **Ronak Dotasara (24BEE083)** and Team ELSOC.

---

## Stack

| Layer     | Choice                                                                  |
| --------- | ----------------------------------------------------------------------- |
| Framework | Next.js 15 (App Router, RSC, Route Handlers), React 19, TypeScript strict |
| Styling   | Tailwind CSS v4 (custom `@theme` tokens), CVA variants, radix primitives |
| Motion    | GSAP + ScrollTrigger + SplitText, Lenis (synced to GSAP ticker), Framer Motion |
| 3D        | Three.js via React Three Fiber + drei + postprocessing, custom GLSL      |
| Data      | Postgres (+pgvector) via Prisma; Zod schemas shared client/server        |
| State     | Zustand (UI), TanStack Query (admin data)                                |
| AI        | Vercel AI SDK + Anthropic (streaming), retrieval-grounded; offline fallback |
| Auth      | Auth.js v5 credentials, bcrypt hash, middleware-fenced `/admin/**`       |
| Quality   | Vitest + Testing Library, Playwright, Lighthouse CI, GitHub Actions      |

## Quick start

```bash
cp .env.example .env          # fill in AUTH_SECRET (openssl rand -base64 32)
npm ci
docker compose up db -d       # Postgres 16 + pgvector on :5432
npx prisma db push            # create tables
npx prisma db seed            # all site content + admin account
npm run dev                   # http://localhost:3000
```

**No database? No problem.** Every public page falls back to the bundled seed
content (`src/content/*`) when `DATABASE_URL` is unset/unreachable — the site
builds and runs with zero services. The admin panel and form persistence need
Postgres.

**Full parity boot** (app + db in containers): `docker compose up`
(first run: `docker compose exec app ./node_modules/.bin/prisma db seed`).

## Environment

Everything is optional in development — features degrade gracefully:

| Variable | Purpose | Without it |
| --- | --- | --- |
| `DATABASE_URL` | Postgres | seed-content fallback, admin disabled |
| `AUTH_SECRET` | JWT signing | admin login won't work |
| `ADMIN_USERNAME` / `ADMIN_SEED_PASSWORD` | used **once** at seed time; stored as bcrypt hash | admin user not created |
| `ANTHROPIC_API_KEY` | AI chat | assistant runs in retrieval-only offline mode |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob uploads | uploads go to `public/uploads/` |
| `REVALIDATE_SECRET` | external ISR webhook | endpoint disabled |

## Admin (`/admin`)

- Credentials: `elsocadmin` / value of `ADMIN_SEED_PASSWORD` at seed time
  (default dev password `elsoc@123` — **change it before deploying**: set a new
  `ADMIN_SEED_PASSWORD`, delete the `AdminUser` row, re-seed).
- Middleware protects `/admin/**` and `/api/admin/**`; every mutation
  re-validates the session server-side and re-parses input with the shared Zod
  schemas.
- Login is rate-limited (5 attempts / 15 min / IP, in-memory — switch to
  Redis if the app is ever scaled beyond one instance).
- Manage: projects (each row = live page at `/projects/[slug]` via ISR),
  events (incl. weekly recurrence), team (drag-to-reorder), Sparkathon
  (settings/prizes/problem statements/idea moderation), inbox, activity log.
- Content flagged **draft** contains placeholder copy awaiting final wording —
  filter for it in each collection.
- Every change is recorded in the **Activity Log** (single shared account →
  the log is the accountability trail). Recommended upgrade once the team
  grows: per-member accounts via Auth.js (e.g. Google OAuth restricted to
  `@nith.ac.in`), then retire the shared password.

## Commands

```bash
npm run dev          # Turbopack dev server
npm run build        # production build (works without DB)
npm run typecheck    # tsc --noEmit (strict)
npm run lint         # eslint 9 flat config
npm test             # vitest unit suite
npm run test:e2e     # playwright (builds + starts the app itself)
npm run db:studio    # Prisma Studio
```

## Architecture notes

- **Content flow**: `src/content/*` (typed seed modules) → `prisma/seed.ts` →
  Postgres → `src/lib/data` (with automatic fallback to the same seed modules).
  Components never hardcode copy; they consume the data layer.
- **ISR**: public pages use `revalidate = 300`; every admin mutation calls
  `revalidatePath(...)` so edits appear immediately without redeploy.
- **3D hero** (`src/components/three/`): one draw call of ~13k GL points with
  a custom vertex/fragment shader (travelling carriers + value noise + pointer
  ripple + radial dissolve), bloom + subtle chromatic aberration, adaptive DPR
  and a `PerformanceMonitor` that sheds post-processing on weak GPUs. Feature
  detection + `prefers-reduced-motion` swap in an animated/static SVG fallback
  (`hero-visual.tsx`). Loaded with `next/dynamic` so Three.js stays out of the
  initial bundle.
- **Motion**: Lenis drives smooth scroll from GSAP's ticker (single RAF).
  Server components opt into scroll choreography with `data-animate`
  attributes (see `scroll-animations.tsx`). Everything no-ops under
  `prefers-reduced-motion`.
- **Chat** (`/api/chat`): retrieval corpus is built live from the data layer;
  with `ANTHROPIC_API_KEY` answers stream from Claude grounded in that
  context, otherwise the same retrieval answers directly (labelled "offline
  mode" in the UI). The `ChatChunk` table (pgvector, 1536-dim) is the wired-in
  upgrade path to embedding search.
- **Error monitoring**: opt-in Sentry hook point in `src/instrumentation.ts`.

## Deploying

**Vercel**: set the env vars, add Neon/Supabase `DATABASE_URL`, done — CI
covers type/lint/test/build/E2E/Lighthouse on every PR.

**NITH server (current production path)**: same Docker Hub → SSH → Apache
reverse-proxy flow as the old site
(`ronakdotasara/elsoc-nith:latest`, Apache proxies `:443 → 127.0.0.1:8080`,
no Apache changes needed), pointed at a managed Postgres (Neon/Supabase) so
the server itself stays stateless. Key differences from the old static-site
SOP: the container listens on `3000` internally (map `-p 8080:3000`, not
`8080:80`), needs `--env-file .env` on every `docker run` for
`DATABASE_URL`/`AUTH_SECRET`/etc., and `prisma db seed` must be run once
from a dev machine against the production `DATABASE_URL` — the deployed
image doesn't carry the seed script. Self-hosting Postgres alongside the app
via `docker compose up -d` (this repo's `docker-compose.yml`) remains fully
supported if you'd rather keep everything on one box.

## Legacy redirects

| Old (Vite site) | New |
| --- | --- |
| `/sparkathon/problemstatements` | `/sparkathon#problem-statements` |
| `/sparkthon` (alt spelling) | `/sparkathon` |
