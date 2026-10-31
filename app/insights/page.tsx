import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { formatDate, posts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Plain-English guides to UAE Corporate Tax, VAT, audit and company compliance.",
};

export default function InsightsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 pt-14 sm:px-8 lg:pt-20">
        <h1 className="text-4xl sm:text-5xl">Insights</h1>
        <p className="mt-5 text-lg text-ink-soft">
          Straight answers on UAE tax, accounting and audit, written for business owners.
        </p>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {posts.map((p) => (
            <article key={p.slug} className="py-8">
              <p className="text-sm text-ink-soft">{formatDate(p.date)}</p>
              <h2 className="mt-2 text-2xl">
                <Link href={`/insights/${p.slug}/`} className="hover:text-teal">
                  {p.title}
                </Link>
              </h2>
              <p className="mt-3 text-ink-soft">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
