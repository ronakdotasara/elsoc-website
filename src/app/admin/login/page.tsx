"use client";

import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { KeyRound, Loader2, ShieldAlert } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (result?.error) {
        setError(
          "Sign-in failed. Check your credentials — after several failed attempts the account is temporarily locked for 15 minutes.",
        );
        return;
      }
      router.replace(params.get("callbackUrl") ?? "/admin");
      router.refresh();
    } catch {
      setError("Could not reach the server. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="card-raised w-full max-w-sm rounded-2xl p-8">
      <div className="mb-7 flex flex-col items-center text-center">
        <Image
          src={site.logo}
          alt="ELSOC"
          width={56}
          height={56}
          className="rounded-full ring-1 ring-line"
        />
        <h1 className="mt-4 font-display text-xl font-semibold">ELSOC Admin</h1>
        <p className="mt-1 text-xs text-fg-subtle">
          Content dashboard — authorized members only
        </p>
      </div>

      {error && (
        <p
          role="alert"
          className="mb-5 flex items-start gap-2.5 rounded-lg border border-danger/40 bg-danger/10 p-3 text-xs leading-relaxed text-danger"
        >
          <ShieldAlert className="mt-0.5 size-4 shrink-0" aria-hidden />
          {error}
        </p>
      )}

      <div className="space-y-4">
        <div>
          <Label htmlFor="admin-username">Username</Label>
          <Input
            id="admin-username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div>
          <Label htmlFor="admin-password">Password</Label>
          <Input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={busy || !username || !password}>
          {busy ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden /> Signing in…
            </>
          ) : (
            <>
              <KeyRound className="size-4" aria-hidden /> Sign in
            </>
          )}
        </Button>
      </div>

      <p className="mt-6 text-center text-[0.7rem] text-fg-subtle">
        <Link href="/" className="hover:text-volt">
          ← Back to elsoc.nith.ac.in
        </Link>
      </p>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-blueprint p-4">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
