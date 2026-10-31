import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Tax filing and advisory, accounting and bookkeeping, audit and assurance, and company setup for UAE businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 lg:pt-20">
        <h1 className="max-w-3xl text-4xl sm:text-5xl">Four services, done properly</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          We focus on the work UAE businesses need most, so you get depth rather than a long menu.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}/`}
              className="group flex flex-col rounded-[10px] border border-line bg-white p-7 transition-colors hover:border-teal"
            >
              <h2 className="text-2xl group-hover:text-teal">{s.title}</h2>
              <p className="mt-3 text-ink-soft">{s.intro}</p>
              <span className="mt-6 font-semibold text-teal">See what is included</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
