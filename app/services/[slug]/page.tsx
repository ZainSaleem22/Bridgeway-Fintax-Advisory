import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { getService, services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.short };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <article className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 lg:pt-20">
        <Link href="/services/" className="text-sm font-medium text-teal hover:underline">
          All services
        </Link>
        <h1 className="mt-4 max-w-3xl text-4xl sm:text-5xl">{s.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{s.intro}</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl">What is included</h2>
              <ul className="mt-5 space-y-3">
                {s.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-mark ring-1 ring-ink/20" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl">Who it suits</h2>
              <p className="mt-4 text-ink-soft">{s.bestFor}</p>
            </section>

            <section>
              <h2 className="text-2xl">What we will ask you for</h2>
              <ul className="mt-5 space-y-3">
                {s.needFromYou.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl">What you get</h2>
              <p className="mt-4 text-ink-soft">{s.outcome}</p>
            </section>
          </div>

          <aside className="h-fit rounded-[10px] border border-line bg-white p-7 lg:sticky lg:top-24">
            <h2 className="text-xl">Talk to us about {s.title.toLowerCase()}</h2>
            <p className="mt-3 text-ink-soft">
              Free 20-minute call. We will tell you what applies and send a fixed quote.
            </p>
            <Link
              href="/contact/#book"
              className="mt-6 block rounded-[6px] bg-teal px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              Book a free call
            </Link>
            <a
              href={whatsappLink(`Hi ${site.name}, I'd like to ask about ${s.title.toLowerCase()}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-[6px] border border-ink/25 px-5 py-3 text-center font-semibold transition-colors hover:border-teal hover:text-teal"
            >
              WhatsApp us
            </a>
          </aside>
        </div>

        <section className="mt-16 border-t border-line pt-10">
          <h2 className="text-2xl">Other services</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}/`} className="font-semibold text-teal hover:underline">
                  {o.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
      <CtaBand />
    </>
  );
}
