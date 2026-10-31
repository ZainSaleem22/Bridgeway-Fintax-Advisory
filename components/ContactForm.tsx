"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        setStatus(res.ok ? "sent" : "error");
      } catch {
        setStatus("error");
      }
      return;
    }

    // No form service configured yet: hand the enquiry to WhatsApp, pre-filled.
    const text = `Hi ${site.name}, I'm ${data.name}. I'd like help with: ${data.service}. ${
      data.message ? data.message + " " : ""
    }Best number to reach me: ${data.phone}.`;
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-[10px] border border-line bg-white p-8">
        <h3 className="text-2xl">Thank you, we have your details.</h3>
        <p className="mt-3 text-ink-soft">
          We reply within one working day, usually sooner. If it is urgent, call {site.phone}.
        </p>
      </div>
    );
  }

  const field =
    "mt-1.5 w-full rounded-[6px] border border-line bg-paper px-4 py-3 outline-none focus:border-teal";

  return (
    <form onSubmit={onSubmit} className="rounded-[10px] border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink-soft">
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink-soft">
            Phone or WhatsApp
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className="text-sm font-medium text-ink-soft">
          Email (optional)
        </label>
        <input id="email" name="email" type="email" autoComplete="email" className={field} />
      </div>

      <div className="mt-5">
        <label htmlFor="service" className="text-sm font-medium text-ink-soft">
          What do you need help with?
        </label>
        <select id="service" name="service" className={field} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.slug}>{s.title}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-ink-soft">
          Anything we should know? (optional)
        </label>
        <textarea id="message" name="message" rows={4} className={field} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-[6px] bg-teal px-5 py-3.5 font-semibold text-white transition-colors hover:bg-teal-deep disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my free call"}
      </button>

      {status === "error" && (
        <p role="alert" className="mt-3 text-sm text-red-700">
          Something went wrong sending that. Please call {site.phone} or email {site.email}.
        </p>
      )}
      <p className="mt-3 text-xs text-ink-soft">
        We only use your details to reply to this enquiry.
      </p>
    </form>
  );
}
