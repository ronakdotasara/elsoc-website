"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Activity,
  CalendarDays,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  LogOut,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/projects", label: "Projects", icon: FolderKanban },
  { href: "/admin/events", label: "Events", icon: CalendarDays },
  { href: "/admin/team", label: "Team", icon: Users },
  { href: "/admin/sparkathon", label: "Sparkathon", icon: Zap },
  { href: "/admin/inbox", label: "Inbox", icon: Inbox },
  { href: "/admin/activity", label: "Activity Log", icon: Activity },
];

export function AdminNav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Admin" className="no-scrollbar flex gap-1 overflow-x-auto p-3 lg:flex-col">
      {links.map((link) => {
        const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              active
                ? "bg-volt/10 text-volt"
                : "text-fg-muted hover:bg-surface hover:text-fg",
            )}
          >
            <link.icon className="size-4" aria-hidden />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/admin/login" })}
      className="flex items-center gap-2 text-xs text-fg-subtle transition-colors hover:text-danger"
    >
      <LogOut className="size-3.5" aria-hidden /> Sign out
    </button>
  );
}
