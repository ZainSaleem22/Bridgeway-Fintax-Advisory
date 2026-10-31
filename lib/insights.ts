export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: { heading?: string; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "do-you-need-to-register-for-uae-corporate-tax",
    title: "Do you need to register for UAE Corporate Tax?",
    date: "2026-10-12",
    excerpt:
      "Most UAE businesses do, including free zone companies that expect to pay nothing. Here is how it works in plain terms.",
    body: [
      {
        text: "Corporate Tax applies to UAE companies and many other businesses for financial years starting on or after 1 June 2023. If you run a company, the safe starting assumption is that you need to register with the Federal Tax Authority (FTA).",
      },
      {
        heading: "Free zone companies still register",
        text: "A free zone licence does not remove the duty to register. A company that qualifies as a Qualifying Free Zone Person can benefit from a 0% rate on qualifying income, but it still has to register and file a return.",
      },
      {
        heading: "How much tax is it?",
        text: "For most businesses the rate is 0% on taxable income up to AED 375,000 and 9% on the part above that. Taxable income is your accounting profit adjusted for certain rules, so it is not simply your bank balance or your revenue.",
      },
      {
        heading: "Deadlines that catch people out",
        text: "Registering late can lead to penalties. Your return is generally due within nine months of the end of your tax period, so a company with a 31 December year end should plan to file by 30 September of the following year.",
      },
      {
        heading: "What to do now",
        text: "Check whether you are registered, confirm your tax period, and make sure your books are in good shape before the return is due. If you are unsure, a short review will tell you where you stand.",
      },
    ],
  },
  {
    slug: "vat-in-the-uae-when-to-register-and-when-to-file",
    title: "VAT in the UAE: when to register and when returns are due",
    date: "2026-09-24",
    excerpt:
      "The thresholds, the standard rate and the filing rhythm every UAE business owner should know.",
    body: [
      {
        text: "The standard VAT rate in the UAE is 5%. Whether you must charge it depends on how much you sell and what you sell.",
      },
      {
        heading: "Registration thresholds",
        text: "Registration is mandatory if your taxable supplies and imports exceeded AED 375,000 in the previous 12 months, or you expect them to in the next 30 days. You may register voluntarily once you pass AED 187,500.",
      },
      {
        heading: "Filing rhythm",
        text: "Most businesses file VAT returns quarterly, and some are assigned monthly returns. A return and any payment are generally due by the 28th day after the end of the tax period.",
      },
      {
        heading: "Common mistakes",
        text: "The usual problems are missing tax invoices, claiming VAT on expenses that do not qualify, and late filing. A VAT health check before your next return can find these while they are still easy to fix.",
      },
    ],
  },
  {
    slug: "what-a-free-zone-company-should-expect-from-its-annual-audit",
    title: "What a free zone company should expect from its annual audit",
    date: "2026-09-05",
    excerpt:
      "Why free zones ask for audited accounts, what the process looks like, and how to make it quicker.",
    body: [
      {
        text: "Many UAE free zones require companies to submit audited financial statements every year, and Qualifying Free Zone Person status for Corporate Tax also depends on audited accounts.",
      },
      {
        heading: "How an audit usually runs",
        text: "The auditor agrees the scope with you, reviews your records and trial balance, tests a sample of transactions, confirms balances with banks, and then issues a report. Questions come up along the way, and answering them quickly is what keeps the timeline short.",
      },
      {
        heading: "What makes it faster",
        text: "Up-to-date bookkeeping, reconciled bank accounts, and copies of key contracts and fixed asset records ready on day one. Companies that only start gathering documents after the auditor asks usually lose weeks.",
      },
      {
        heading: "When to start",
        text: "Start planning two to three months before your free zone deadline. An audit readiness review before the auditors arrive is a cheap way to avoid last-minute surprises.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
