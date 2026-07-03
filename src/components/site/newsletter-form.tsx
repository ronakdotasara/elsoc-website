"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { newsletterSchema } from "@/lib/validators";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Enter a valid email");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error(await res.text());
      toast.success("Subscribed! You'll hear from us before every event.");
      setEmail("");
    } catch {
      toast.error("Could not subscribe right now — please try again later.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={subscribe} className="flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <Input
        id="newsletter-email"
        type="email"
        autoComplete="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={busy}
      />
      <Button type="submit" size="icon" aria-label="Subscribe" disabled={busy}>
        <Send className="size-4" />
      </Button>
    </form>
  );
}
