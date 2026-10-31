import Link from "next/link";
import Estimator from "@/components/Estimator";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import { posts, formatDate } from "@/lib/insights";
import { site, whatsappLink } from "@/lib/site";

const promises = [
  {
    title: "You deal with a chartered accountant, not a call centre",
    text: "The person who understands your business answers your questions and signs your work.",
  },
  {
    title: "A fixed quote before we start",
    text: "You will know the fee up front. No hourly billing surprises at the end of the year.",
  },
  {
    title: "Deadlines tracked for you",
    text: "We keep your Corporate Tax, VAT and licence dates in one calendar and remind you in good time.",
  },
  {
    title: "A reply within one working day",
    text: "Send a message or call. If it is urgent, say so and we will move it up.",
  },
];

const steps = [
  { title: "Free 20-minute call", text: "You tell us about the business. We tell you what applies to you." },
  { title: "Fixed quote", text: "A written scope and price within two working days." },
  { title: "Handover and setup", text: "We collect your records, take over from your current accountant if you have one, and set up your calendar." },
  { title: "Ongoing, on time", text: "Books, filings and reminders run to schedule. You hear from us when something needs a decision." },
];

const clients = [
  {
    title: "Owners of small businesses and startups",
    text: "You need your books clean, your VAT right and your Corporate Tax registered, without it eating your week.",
  },
  {
    title: "Growing and larger companies",
    text: "You need audited accounts, tax planning across entities, and a partner who can answer to your bank or board.",
  },
  {
    title: "Individuals, freelancers and founders",
    text: "You need advice on structure, a company set up properly, or your own affairs in order before you scale.",
  },
];

const deadlines = [
  { what: "Corporate Tax return", when: "Within nine months of the end of your tax period" },
  { what: "VAT return and payment", when: "By the 28th day after the end of the tax period" },
  { what: "Free zone audited accounts", when: "Per your free zone, often within months of year end" },
  { what: "Trade licence renewal", when: "Before the expiry date on your licence" },
];

const faqs = [
  {
    q: "Does my free zone company need to register for Corporate Tax?",
    a: "In most cases yes. A free zone licence does not remove the duty to register, even if you expect to pay 0%. We can confirm your position in a short review.",
  },
  {
    q: "How much do your services cost?",
    a: "It depends on your transaction volume and what you need. After a free call we send a fixed written quote, so you know the cost before you commit.",
  },
  {
    q: "Can you take over from my current accountant?",
    a: "Yes. We request the handover records, review the books for gaps, and tell you what needs fixing before the next filing.",
  },
  {
    q: "Do you work with individuals as well as companies?",
    a: "Yes. We help founders and individuals with business structure, company setup and tax questions, as well as companies of all sizes.",
  },
  {
    q: "How quickly will you reply?",
    a: "Within one working day. Urgent matters, such as a looming FTA deadline, are handled the same day where we can.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-8 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20">
        <div className="flex flex-col justify-center">
          <h1 className="text-[2.6rem] sm:text-6xl">
            UAE tax, accounts and audit, <span className="swipe">sorted before the deadline.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            {site.legalName} helps UAE businesses and their owners register, file and stay compliant for Corporate Tax and VAT,
            keep clean books, and pass audits without last-minute scrambles.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact/#book"
              className="rounded-[6px] bg-teal px-6 py-3.5 font-semibold text-white transition-colors hover:bg-teal-deep"
            >
              Book a free 20-minute call
            </Link>
            <a
              href={whatsappLink(`Hi ${site.name}, I'd like to ask about your services.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[6px] border border-ink/25 px-6 py-3.5 font-semibold text-ink transition-colors hover:border-teal hover:text-teal"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
        <Estimator />
      </section>

      {/* Why us */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-2xl text-3xl sm:text-4xl">Why owners choose a smaller firm</h2>
        <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {promises.map((p) => (
            <div key={p.title} className="border-t-2 border-teal pt-4">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl sm:text-4xl">What we do for you</h2>
          <Link href="/services/" className="font-semibold text-teal hover:underline">
            See all services
          </Link>
        </div>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}/`}
                className="group grid gap-2 py-7 transition-colors hover:bg-mist/60 md:grid-cols-[1fr_1.4fr] md:gap-10 md:px-3"
              >
                <h3 className="text-2xl group-hover:text-teal">{s.title}</h3>
                <p className="text-ink-soft">{s.short}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Who we work with */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-2xl text-3xl sm:text-4xl">Built for the people who run UAE businesses</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {clients.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-[10px] p-7 ${i === 1 ? "bg-teal text-white" : "bg-mist"}`}
            >
              <h3 className="text-xl">{c.title}</h3>
              <p className={`mt-3 ${i === 1 ? "text-white/80" : "text-ink-soft"}`}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <h2 className="max-w-2xl text-3xl sm:text-4xl">How working with us starts</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="tabular font-display text-4xl font-bold text-teal/35">{i + 1}</span>
              <h3 className="mt-2 text-xl">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Deadlines */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 rounded-[12px] border border-line bg-white p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl">The dates we keep track of so you do not have to</h2>
            <p className="mt-4 text-ink-soft">
              Missing a filing date can mean penalties. We put yours in a calendar and remind you before each one.
            </p>
          </div>
          <dl className="divide-y divide-line">
            {deadlines.map((d) => (
              <div key={d.what} className="grid gap-1 py-4 sm:grid-cols-[1fr_1.3fr] sm:gap-6">
                <dt className="font-display text-lg font-semibold">{d.what}</dt>
                <dd className="text-ink-soft">{d.when}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Insights */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl text-3xl sm:text-4xl">Straight answers on UAE tax</h2>
          <Link href="/insights/" className="font-semibold text-teal hover:underline">
            Read all insights
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug}>
              <p className="text-sm text-ink-soft">{formatDate(p.date)}</p>
              <h3 className="mt-2 text-xl">
                <Link href={`/insights/${p.slug}/`} className="hover:text-teal">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-3 text-ink-soft">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-24 max-w-3xl px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl">Questions we hear a lot</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-semibold">
                {f.q}
                <span aria-hidden className="mt-1 text-teal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
