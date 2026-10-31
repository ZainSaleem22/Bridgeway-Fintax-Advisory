import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CtaBand from "@/components/CtaBand";
import { formatDate, getPost, posts } from "@/lib/insights";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 pt-14 sm:px-8 lg:pt-20">
        <Link href="/insights/" className="text-sm font-medium text-teal hover:underline">
          All insights
        </Link>
        <h1 className="mt-4 text-4xl sm:text-5xl">{p.title}</h1>
        <p className="mt-4 text-sm text-ink-soft">{formatDate(p.date)}</p>

        <div className="mt-10 space-y-6 leading-[1.75]">
          {p.body.map((b, i) => (
            <section key={i}>
              {b.heading && <h2 className="mb-2 text-2xl">{b.heading}</h2>}
              <p className="text-ink/90">{b.text}</p>
            </section>
          ))}
        </div>

        <p className="mt-12 rounded-[8px] bg-mist p-5 text-sm text-ink-soft">
          This article is general information, not tax or legal advice, and UAE rules change. Speak to us
          about your specific situation before you act.
        </p>
      </article>
      <CtaBand />
    </>
  );
}
