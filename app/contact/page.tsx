import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a free 20-minute call with ${site.legalName} in ${site.city}.`,
};

const next = [
  "We reply within one working day to arrange a time.",
  "On the call, we ask about your business and tell you what applies.",
  "If you want to go ahead, you get a fixed written quote within two working days.",
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 lg:pt-20">
      <h1 className="max-w-3xl text-4xl sm:text-5xl">Book your free 20-minute call</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink-soft">
        No obligation. Tell us a little about your business and we will take it from there.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div id="book" className="scroll-mt-24">
          <ContactForm />
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl">What happens next</h2>
            <ol className="mt-5 space-y-4">
              {next.map((n, i) => (
                <li key={n} className="flex gap-4">
                  <span className="tabular grid h-8 w-8 shrink-0 place-items-center rounded-full bg-mark font-display font-bold">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{n}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl">Prefer to talk now?</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={site.phoneHref} className="font-semibold text-teal hover:underline">
                  Call {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hi ${site.name}, I'd like to ask about your services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="font-semibold text-teal hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">Visit</h2>
            <p className="mt-4 text-ink-soft">
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="mt-2 block">{site.hours}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
