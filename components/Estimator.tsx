"use client";

import { useMemo, useState } from "react";
import { site, whatsappLink } from "@/lib/site";

const THRESHOLD = 375000;
const RATE = 0.09;

const fmt = (n: number) =>
  new Intl.NumberFormat("en-AE", { maximumFractionDigits: 0 }).format(Math.round(n));

export default function Estimator() {
  const [income, setIncome] = useState(1200000);

  const { tax, effective } = useMemo(() => {
    const t = Math.max(0, income - THRESHOLD) * RATE;
    return { tax: t, effective: income > 0 ? (t / income) * 100 : 0 };
  }, [income]);

  const message = `Hi ${site.name}, I tried the Corporate Tax estimator. Taxable income AED ${fmt(
    income
  )}, estimate AED ${fmt(tax)}. Could we talk through my actual position?`;

  return (
    <div className="relative rounded-[10px] border border-line bg-white p-6 shadow-[0_1px_0_rgba(12,31,36,0.04)] sm:p-8">
      <div
        aria-hidden
        className="absolute inset-x-6 -bottom-px h-px border-b border-dashed border-ink/25"
      />
      <h2 className="text-2xl">What might your Corporate Tax be?</h2>
      <p className="mt-2 text-[0.97rem] text-ink-soft">
        A quick estimate for a standard UAE business. Move the slider or type your yearly taxable profit.
      </p>

      <label htmlFor="income" className="mt-6 block text-sm font-medium text-ink-soft">
        Yearly taxable income (AED)
      </label>
      <input
        id="income"
        inputMode="numeric"
        value={fmt(income)}
        onChange={(e) => {
          const digits = e.target.value.replace(/[^0-9]/g, "");
          setIncome(Math.min(Number(digits || 0), 100000000));
        }}
        className="tabular mt-1.5 w-full rounded-[6px] border border-line bg-paper px-4 py-3 font-display text-2xl font-semibold outline-none focus:border-teal"
      />
      <input
        type="range"
        min={0}
        max={10000000}
        step={25000}
        value={Math.min(income, 10000000)}
        onChange={(e) => setIncome(Number(e.target.value))}
        aria-label="Yearly taxable income slider"
        className="mt-4 w-full accent-teal"
      />

      <dl className="mt-6 space-y-3 border-t border-dashed border-ink/25 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-ink-soft">First AED 375,000</dt>
          <dd className="tabular font-medium">0%</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-ink-soft">Everything above that</dt>
          <dd className="tabular font-medium">9%</dd>
        </div>
        <div className="flex flex-col gap-1 pt-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4" aria-live="polite">
          <dt className="font-medium">Estimated tax for the year</dt>
          <dd className="tabular font-display text-3xl font-bold">
            <span className="swipe px-1">AED {fmt(tax)}</span>
          </dd>
        </div>
        <p className="tabular text-sm text-ink-soft sm:text-right">
          That is {effective.toFixed(1)}% of your taxable income.
        </p>
      </dl>

      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block rounded-[6px] bg-teal px-5 py-3.5 text-center font-semibold text-white transition-colors hover:bg-teal-deep"
      >
        Check my real figure with a chartered accountant
      </a>
      <p className="mt-3 text-xs text-ink-soft">
        Estimate only. Taxable income is your profit after tax adjustments, and free zone, group and
        other rules can change the result.
      </p>
    </div>
  );
}
