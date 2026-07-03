/**
 * Idempotent database seed.
 *
 *   npx prisma db seed
 *
 * Populates every collection from src/content (the same modules the site
 * falls back to without a database) and creates the admin account. The admin
 * password is taken from ADMIN_SEED_PASSWORD, hashed with bcrypt, and never
 * stored anywhere in plaintext.
 */
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { events } from "../src/content/events";
import { projects } from "../src/content/projects";
import { teamMembers } from "../src/content/team";
import { galleryAlbums } from "../src/content/gallery";
import {
  prizeTiers,
  problemStatements,
  sparkathonDefaults,
} from "../src/content/sparkathon";

const prisma = new PrismaClient();

async function main() {
  console.log("→ seeding projects");
  for (const p of projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      create: p,
      update: p,
    });
  }

  console.log("→ seeding events");
  for (const e of events) {
    const data = {
      ...e,
      startAt: e.startAt ? new Date(e.startAt) : null,
      endAt: e.endAt ? new Date(e.endAt) : null,
    };
    await prisma.event.upsert({ where: { slug: e.slug }, create: data, update: data });
  }

  console.log("→ seeding team");
  // Team members have no natural unique key; refresh the collection wholesale.
  await prisma.teamMember.deleteMany();
  await prisma.teamMember.createMany({ data: teamMembers });

  console.log("→ seeding sparkathon");
  await prisma.prizeTier.deleteMany();
  await prisma.prizeTier.createMany({ data: prizeTiers });
  for (const ps of problemStatements) {
    await prisma.problemStatement.upsert({
      where: { code: ps.code },
      create: ps,
      update: ps,
    });
  }
  await prisma.setting.upsert({
    where: { key: "sparkathon" },
    create: { key: "sparkathon", value: { ...sparkathonDefaults } },
    update: {}, // keep admin edits on re-seed
  });

  console.log("→ seeding gallery");
  await prisma.galleryImage.deleteMany();
  await prisma.galleryAlbum.deleteMany();
  for (const album of galleryAlbums) {
    await prisma.galleryAlbum.create({
      data: {
        slug: album.slug,
        title: album.title,
        year: album.year,
        sortOrder: album.sortOrder,
        images: { create: album.images },
      },
    });
  }

  console.log("→ seeding admin user");
  const username = process.env.ADMIN_USERNAME ?? "elsocadmin";
  const seedPassword = process.env.ADMIN_SEED_PASSWORD;
  if (!seedPassword) {
    console.warn(
      "  ADMIN_SEED_PASSWORD not set — skipping admin creation. Set it in .env and re-run the seed.",
    );
  } else {
    const passwordHash = await bcrypt.hash(seedPassword, 12);
    await prisma.adminUser.upsert({
      where: { username },
      create: { username, passwordHash },
      update: {}, // never overwrite a rotated password on re-seed
    });
    console.log(`  admin "${username}" ready (password stored as bcrypt hash)`);
  }

  const counts = {
    projects: await prisma.project.count(),
    events: await prisma.event.count(),
    team: await prisma.teamMember.count(),
    problemStatements: await prisma.problemStatement.count(),
    prizeTiers: await prisma.prizeTier.count(),
  };
  console.log("✓ seed complete", counts);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
