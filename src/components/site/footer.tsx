import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/content/site";
import { NewsletterForm } from "./newsletter-form";
import { socialIconFor } from "./social-icons";

function CircuitDivider() {
  return (
    <svg
      aria-hidden
      className="mx-auto mb-14 h-8 w-full max-w-3xl text-line-strong"
      viewBox="0 0 720 32"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M0 16h250l10-10 10 20 10-20 10 20 10-10h60l10-10 10 20 10-20 10 20 10-10h250"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="480"
        className="motion-safe:animate-trace"
      />
      <circle cx="250" cy="16" r="3" fill="var(--volt)" />
      <circle cx="470" cy="16" r="3" fill="var(--pulse)" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-28 border-t border-line bg-bg-raised/60">
      <div className="container-site pt-14 pb-8">
        <CircuitDivider />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src={site.logo}
                alt="ELSOC logo"
                width={44}
                height={44}
                className="rounded-full ring-1 ring-line"
              />
              <div>
                <p className="font-display text-xl font-bold tracking-tight">ELSOC</p>
                <p className="mono-label !text-[0.55rem]">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              Empowering innovation and excellence at NIT Hamirpur through
              cutting-edge projects and collaborative learning.
            </p>
            <dl className="mt-6 grid max-w-xs grid-cols-3 gap-3">
              {site.stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="rounded-lg border border-line bg-surface p-3 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-lg font-bold text-volt">{stat.value}</dd>
                  <dd className="text-[0.65rem] uppercase tracking-wider text-fg-subtle">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h2 className="mono-label mb-4 text-fg">Quick Links</h2>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-volt"
                  >
                    <span
                      aria-hidden
                      className="h-px w-3 bg-line-strong transition-all group-hover:w-5 group-hover:bg-volt"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mono-label mb-4 text-fg">Contact Us</h2>
            <ul className="space-y-3 text-sm text-fg-muted">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-volt"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-volt" aria-hidden />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.contact.phone.replaceAll(" ", "")}`}
                  className="inline-flex items-start gap-2.5 transition-colors hover:text-volt"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-volt" aria-hidden />
                  {site.contact.phoneLabel}
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-volt" aria-hidden />
                {site.contact.addressShort}
              </li>
            </ul>
            <div className="mt-5 flex gap-2">
              {site.socials.map((social) => {
                const Icon = socialIconFor(social.platform);
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`ELSOC on ${social.platform}`}
                    className="flex size-9 items-center justify-center rounded-lg border border-line bg-surface text-fg-muted transition-all hover:-translate-y-0.5 hover:border-volt/50 hover:text-volt"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="mono-label mb-4 text-fg">Stay Connected</h2>
            <p className="mb-3 text-sm text-fg-muted">
              Get updates on events and projects
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-center text-xs text-fg-subtle sm:flex-row sm:text-left">
          <p>
            © {year} ELSOC, {site.institute}. All rights reserved.
          </p>
          <p className="font-mono text-[0.7rem]">
            Maintained by{" "}
            <span className="text-volt">Ronak Dotasara · 24BEE083</span> and Team
            ELSOC
          </p>
        </div>
      </div>
    </footer>
  );
}
