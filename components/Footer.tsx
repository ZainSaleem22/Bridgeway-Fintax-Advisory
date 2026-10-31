import Link from "next/link";
import { Logo } from "./Header";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="mt-24 bg-teal-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`}>
            <Logo light />
          </Link>
          <p className="mt-5 max-w-xs text-[0.97rem] text-white/75">
            Chartered accountants for UAE businesses and the people who run them.
          </p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Services</h2>
          <ul className="mt-4 space-y-2.5 text-[0.97rem] text-white/75">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Firm</h2>
          <ul className="mt-4 space-y-2.5 text-[0.97rem] text-white/75">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold">Talk to us</h2>
          <ul className="mt-4 space-y-2.5 text-[0.97rem] text-white/75">
            <li>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-white/60 sm:px-8 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {site.licence}.
          </p>
          <p>Information on this site is general and is not tax or legal advice.</p>
        </div>
      </div>
    </footer>
  );
}
