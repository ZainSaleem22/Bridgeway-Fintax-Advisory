import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export default function CtaBand({
  title = "Not sure where you stand? Start with a free 20-minute call.",
  text = "Tell us about your business. We will tell you what you need to do, by when, and what it should cost.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <div className="rounded-[12px] bg-teal px-7 py-12 text-white sm:px-12 sm:py-14">
        <h2 className="max-w-2xl text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-xl text-white/80">{text}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact/#book"
            className="rounded-[6px] bg-mark px-5 py-3 font-semibold text-ink transition-colors hover:bg-white"
          >
            Book a free call
          </Link>
          <a
            href={whatsappLink(`Hi ${site.name}, I'd like to ask about your services.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[6px] border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Message us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
