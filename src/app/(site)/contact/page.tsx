import type { Metadata } from "next";
import { Mail, MapPin, MessageCircleQuestion, Phone } from "lucide-react";
import { faqs } from "@/content/about";
import { site } from "@/content/site";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ContactForm } from "@/components/contact/contact-form";
import { socialIconFor } from "@/components/site/social-icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have questions or want to collaborate with ELSOC? We'd love to hear from you.",
};

const infoCards = [
  {
    icon: Mail,
    title: "Email",
    content: site.contact.email,
    href: `mailto:${site.contact.email}`,
    external: false,
  },
  {
    icon: Phone,
    title: "Phone",
    content: site.contact.phoneLabel,
    href: `tel:${site.contact.phone.replaceAll(" ", "")}`,
    external: false,
  },
  {
    icon: MapPin,
    title: "Address",
    content: site.contact.address,
    href: site.contact.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's build something together"
        lede="Have questions or want to collaborate? We'd love to hear from you and help you explore the world of electrical engineering."
      />

      {/* Info cards */}
      <section className="container-site -mt-8 pb-8">
        <div data-animate="stagger" className="grid gap-5 md:grid-cols-3">
          {infoCards.map((card) => (
            <div data-animate-child key={card.title}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
              >
                <SpotlightCard className="h-full p-6 text-center">
                  <span className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl border border-line bg-surface">
                    <card.icon className="size-5 text-volt" aria-hidden />
                  </span>
                  <h2 className="font-display font-semibold">{card.title}</h2>
                  <p className="mt-1.5 text-sm text-fg-muted">{card.content}</p>
                </SpotlightCard>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Form + map */}
      <section className="container-site py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div data-animate="rise" className="card-raised rounded-2xl p-6 sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Send Us a Message
            </h2>
            <p className="mb-7 mt-2 text-sm text-fg-muted">
              Whether you have a question about events, membership, or anything else, our
              team is ready to answer all your questions.
            </p>
            <ContactForm />
          </div>

          <div data-animate="rise" className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={site.contact.mapsEmbed}
                width="100%"
                height="330"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NIT Hamirpur Location"
                className="grayscale-[0.4] contrast-[1.05]"
              />
            </div>

            <div className="card-raised flex-1 rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">Connect With Us</h2>
              <p className="mt-2 text-sm text-fg-muted">
                Follow us on social media for updates on events, workshops, and exciting
                projects!
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {site.socials.map((social) => {
                  const Icon = socialIconFor(social.platform);
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 rounded-xl border border-line bg-surface py-5 transition-all hover:-translate-y-1 hover:border-volt/40"
                    >
                      <Icon className="size-6 text-fg-muted transition-colors group-hover:text-volt" />
                      <span className="text-xs text-fg-subtle">{social.platform}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-line bg-bg-raised/50 py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            lede="Quick answers to common questions about ELSOC membership, events, and activities."
          />
          <div data-animate="stagger" className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <div data-animate-child key={faq.question}>
                <SpotlightCard className="h-full p-6">
                  <h3 className="flex items-start gap-3 font-display font-semibold">
                    <MessageCircleQuestion
                      className="mt-0.5 size-5 shrink-0 text-volt"
                      aria-hidden
                    />
                    {faq.question}
                  </h3>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-fg-muted">
                    {faq.answer}
                  </p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
