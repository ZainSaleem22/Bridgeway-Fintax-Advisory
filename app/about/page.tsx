import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet the chartered accountant behind ${site.legalName}.`,
};

const principles = [
  {
    title: "Plain language",
    text: "We explain tax and accounting in words you can repeat to your business partner.",
  },
  {
    title: "Early warnings",
    text: "We would rather tell you about a problem in March than explain a penalty in October.",
  },
  {
    title: "Fixed fees",
    text: "You agree the price before the work starts, and it does not change without your say.",
  },
];

export default function AboutPage() {
  const f = site.founder;
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-14 sm:px-8 lg:pt-20">
        <h1 className="max-w-3xl text-4xl sm:text-5xl">A chartered accountant you can call directly</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          {site.legalName} was started so UAE business owners can get senior, qualified advice without
          the layers of a large firm.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            {/* Replace this block with a real photo: put the file in /public and use <img src="/founder.jpg" ... /> */}
            <div
              role="img"
              aria-label="Photo of the founder goes here"
              className="grid aspect-[4/5] place-items-center rounded-[10px] bg-mist text-center text-ink-soft"
            >
              <span className="px-6">Add a professional photo of {f.name} here</span>
            </div>
          </div>
          <div>
            <h2 className="text-3xl">{f.name}</h2>
            <p className="mt-1 text-ink-soft">{f.title}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {f.credentials.map((c) => (
                <li key={c} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4 text-ink-soft">
              {f.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <h2 className="text-3xl sm:text-4xl">How we work</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="border-t-2 border-teal pt-4">
              <h3 className="text-xl">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
