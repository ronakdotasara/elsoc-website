import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { site } from "@/content/site";
import { AdminNav, SignOutButton } from "@/components/admin/admin-nav";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Middleware already guards this subtree; this is defense-in-depth and also
  // provides the username to the shell.
  const session = await auth();
  if (!session?.user?.name) redirect("/admin/login");

  return (
    <div className="flex min-h-dvh flex-col lg:flex-row">
      <aside className="flex w-full shrink-0 flex-col border-b border-line bg-bg-raised lg:min-h-dvh lg:w-60 lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3 border-b border-line p-4">
          <Image
            src={site.logo}
            alt=""
            width={34}
            height={34}
            className="rounded-full ring-1 ring-line"
          />
          <div className="leading-tight">
            <p className="font-display text-sm font-bold">ELSOC Admin</p>
            <p className="font-mono text-[0.6rem] text-fg-subtle">
              signed in as {session.user.name}
            </p>
          </div>
        </div>
        <AdminNav />
        <div className="mt-auto space-y-2 border-t border-line p-4 max-lg:hidden">
          <Link
            href="/"
            className="block text-xs text-fg-subtle transition-colors hover:text-volt"
          >
            ← View live site
          </Link>
          <SignOutButton />
        </div>
      </aside>

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
