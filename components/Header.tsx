"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-[6px] bg-teal font-display text-lg font-bold text-white"
      >
        {site.name.charAt(0)}
      </span>
      <span className={`font-display text-xl font-semibold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        {site.name}
      </span>
    </span>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.97rem] font-medium transition-colors hover:text-teal ${
                  active ? "text-teal" : "text-ink-soft"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.phoneHref} className="text-[0.97rem] font-medium text-ink hover:text-teal">
            {site.phone}
          </a>
          <Link
            href="/contact/#book"
            className="rounded-[6px] bg-teal px-4 py-2.5 text-[0.97rem] font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            Book a free call
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[6px] border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper md:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="py-3.5 text-lg font-medium">
              Call {site.phone}
            </a>
            <Link
              href="/contact/#book"
              onClick={() => setOpen(false)}
              className="my-3 rounded-[6px] bg-teal px-4 py-3 text-center font-semibold text-white"
            >
              Book a free call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
