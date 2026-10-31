export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  includes: string[];
  bestFor: string;
  needFromYou: string[];
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "tax",
    title: "Tax filing and advisory",
    short: "Corporate Tax and VAT registration, returns and planning, with deadlines tracked for you.",
    intro:
      "UAE businesses now answer to the Federal Tax Authority for Corporate Tax and VAT. We register you, prepare and submit your returns on time, and tell you early where you can legitimately pay less.",
    includes: [
      "Corporate Tax registration and annual return",
      "VAT registration, quarterly or monthly returns, and VAT health checks",
      "Free zone reviews, including whether you can keep Qualifying Free Zone Person status",
      "Tax planning for owners, directors and groups",
      "Handling FTA queries, penalty reviews and reconsideration requests",
    ],
    bestFor:
      "Owner-run businesses, free zone companies, trading firms and professionals who want filings done correctly without becoming tax experts.",
    needFromYou: [
      "Trade licence and Emirates ID of the owners",
      "Your bookkeeping records, or access to your accounting software",
      "Bank statements for the period",
    ],
    outcome:
      "Every filing submitted before its deadline, and a short note each year on what changed for your business.",
  },
  {
    slug: "accounting",
    title: "Accounting and bookkeeping",
    short: "Monthly books and clear reports, ready for the tax authority and for your own decisions.",
    intro:
      "Good books make tax and audit easy and cheap. We keep your records up to date every month and give you numbers you can actually use to run the business.",
    includes: [
      "Monthly bookkeeping and bank reconciliation",
      "Management reports: profit, cash, receivables and payables",
      "Payroll support, including WPS-ready salary files",
      "VAT-ready records and invoices",
      "Annual financial statements prepared to IFRS",
      "Setting up or cleaning up Zoho Books, QuickBooks or Xero",
    ],
    bestFor:
      "Startups and growing SMEs that have outgrown spreadsheets, and owners who want to stop chasing receipts.",
    needFromYou: [
      "Sales invoices, supplier bills and receipts (we show you the easiest way to send them)",
      "Bank and card statements",
      "Payroll details if you have staff",
    ],
    outcome:
      "Books closed within days of month end, and a one-page summary you can read in five minutes.",
  },
  {
    slug: "audit",
    title: "Audit and assurance",
    short: "Annual audits for mainland and free zone companies, with fewer surprises at year end.",
    intro:
      "Many free zones require audited accounts every year, and Qualifying Free Zone Person status depends on them. We plan the audit early, tell you exactly what we need, and keep the process predictable.",
    includes: [
      "Statutory audits for mainland and free zone companies",
      "Audit readiness reviews before the auditors arrive",
      "Review engagements and agreed-upon procedures",
      "Support with free zone authority submissions",
    ],
    bestFor:
      "Companies that need audited financial statements for a free zone, a bank, an investor or a tender.",
    needFromYou: [
      "Trial balance and general ledger",
      "Bank confirmations and key contracts",
      "Fixed asset and inventory records where relevant",
    ],
    outcome:
      "A signed audit report delivered by the date your regulator or bank expects it.",
  },
  {
    slug: "company-setup",
    title: "Company setup and compliance",
    short: "Choose the right structure, get licensed, and stay compliant after day one.",
    intro:
      "Setting up in the right place saves money for years. We compare mainland and free zone options for your actual business, handle the paperwork, and keep your registers and filings in order afterwards.",
    includes: [
      "Mainland versus free zone advice, with tax and visa impact explained",
      "Licence application and company formation support",
      "Introductions for corporate bank accounts",
      "Ultimate Beneficial Owner register filings",
      "Licence renewals and amendments",
      "Corporate Tax and VAT registration at setup",
    ],
    bestFor:
      "Founders starting a UAE company, and foreign businesses expanding into the UAE.",
    needFromYou: [
      "Passport and visa copies of shareholders and directors",
      "A short description of what the company will do",
      "Your preferred company name options",
    ],
    outcome:
      "A licensed, tax-registered company with its books ready to start on the first day.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
