import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="text-4xl">That page does not exist</h1>
      <p className="mt-4 text-ink-soft">The link may be old or mistyped. Try one of these instead.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="rounded-[6px] bg-teal px-5 py-3 font-semibold text-white">
          Go to the home page
        </Link>
        <Link href="/contact/" className="rounded-[6px] border border-ink/25 px-5 py-3 font-semibold">
          Contact us
        </Link>
      </div>
    </section>
  );
}
