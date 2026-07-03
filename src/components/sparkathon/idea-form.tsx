"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { sparkathonSubmissionSchema } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";

/**
 * Community idea submission. Replaces the old localStorage-only version:
 * ideas now persist through /api/sparkathon/ideas and appear publicly once
 * approved from the admin panel.
 */
export function IdeaForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = sparkathonSubmissionSchema.safeParse({
      title,
      description,
      submitterName: name || undefined,
      website: "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Check the form and try again");
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/sparkathon/ideas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (res.status === 429) {
        toast.error("Too many submissions — please wait a few minutes.");
        return;
      }
      if (res.status === 503) {
        toast.error("Idea inbox is offline right now. Please try again later.");
        return;
      }
      if (!res.ok) throw new Error(await res.text());
      setSubmitted(true);
      setTitle("");
      setDescription("");
      setName("");
    } catch {
      toast.error("Could not submit your idea. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-xl border border-success/40 bg-success/10 p-8 text-center"
      >
        <CheckCircle2 className="size-8 text-success" aria-hidden />
        <p className="font-display font-semibold text-success">
          Your idea has been submitted for review!
        </p>
        <p className="text-sm text-fg-muted">
          The organizing committee moderates every submission — approved ideas appear in
          the community list below.
        </p>
        <Button variant="outline" size="sm" onClick={() => setSubmitted(false)}>
          Submit another idea
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-[1fr_240px]">
        <div>
          <Label htmlFor="idea-title">Idea title *</Label>
          <Input
            id="idea-title"
            placeholder="Idea title..."
            maxLength={120}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="idea-name">Your name (optional)</Label>
          <Input
            id="idea-name"
            placeholder="So we can credit you"
            maxLength={120}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="idea-description">Describe your idea *</Label>
        <Textarea
          id="idea-description"
          rows={4}
          maxLength={2000}
          placeholder="Describe your idea briefly..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <Button type="submit" disabled={busy || !title.trim() || !description.trim()}>
        {busy ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Submitting…
          </>
        ) : (
          <>
            Submit Idea <Sparkles className="size-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
