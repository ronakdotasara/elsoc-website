"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { contactMessageSchema, type ContactMessageInput } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";

type FieldErrors = Partial<Record<keyof ContactMessageInput, string>>;

const empty = { name: "", email: "", phone: "", subject: "", message: "", website: "" };

export function ContactForm() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [busy, setBusy] = useState(false);

  const set = (key: keyof typeof empty) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactMessageSchema.safeParse({
      ...form,
      phone: form.phone || undefined,
      website: "", // honeypot must stay empty; bots that filled it fail validation server-side
    });
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactMessageInput;
        fieldErrors[key] ??= issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setBusy(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parsed.data, website: form.website }),
      });
      if (res.status === 429) {
        toast.error("Too many messages — please wait a few minutes and try again.");
        return;
      }
      if (!res.ok) throw new Error(await res.text());
      toast.success(
        "Thank you! Your message has been sent successfully. We will get back to you soon.",
      );
      setForm(empty);
    } catch {
      toast.error("Something went wrong sending your message. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      {/* honeypot — visually hidden, tab-skipped */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={set("website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name">Full Name *</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            required
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-danger">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="contact-email">Email Address *</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="your.email@example.com"
            value={form.email}
            onChange={set("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-danger">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-phone">Phone Number</Label>
          <Input
            id="contact-phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            value={form.phone}
            onChange={set("phone")}
          />
        </div>
        <div>
          <Label htmlFor="contact-subject">Subject *</Label>
          <Input
            id="contact-subject"
            placeholder="What is this about?"
            value={form.subject}
            onChange={set("subject")}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            required
          />
          {errors.subject && (
            <p id="contact-subject-error" className="mt-1.5 text-xs text-danger">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message">Message *</Label>
        <Textarea
          id="contact-message"
          rows={6}
          placeholder="Tell us more about your inquiry..."
          value={form.message}
          onChange={set("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-danger">
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={busy} className="w-full sm:w-auto">
        {busy ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            Send Message <Send className="size-4" aria-hidden />
          </>
        )}
      </Button>
    </form>
  );
}
