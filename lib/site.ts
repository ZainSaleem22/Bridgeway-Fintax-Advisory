// =====================================================================
//  EDIT THIS FILE FIRST.
//  Everything marked PLACEHOLDER is sample text. Replace it with the
//  firm's real details before the site goes live.
// =====================================================================

export const site = {
  // PLACEHOLDER: firm name, shown in the header, footer and browser tab
  name: "Bridgeway Fintax Advisory",
  legalName: "BFA Chartered Accountants",
  city: "Dubai",

  // PLACEHOLDER: the live website address (used for SEO and the sitemap)
  url: "https://www.example.ae",

  // PLACEHOLDER: contact details
  phone: "+971 50 000 0000",
  phoneHref: "tel:+971500000000",
  whatsapp: "971500000000", // digits only, with country code, no + sign
  email: "hello@example.ae",
  address: ["Office 000, Business Bay", "Dubai, United Arab Emirates"],
  hours: "Monday to Friday, 9am to 6pm",

  // PLACEHOLDER: licence / registration line shown in the footer
  licence: "Trade licence no. 000000, Dubai",

  // Optional: paste a Formspree (or similar) endpoint here to receive form
  // enquiries by email. If left empty, the contact form opens WhatsApp
  // with the message pre-filled instead.
  formEndpoint: "",

  // PLACEHOLDER: founder details used on the About page
  founder: {
    name: "Founder Name",
    title: "Founder and managing partner",
    credentials: ["Chartered Accountant (add your qualification)", "Years of experience (add)"],
    bio: [
      "Add two or three short paragraphs here: where you trained, the kinds of businesses you have worked with, and why you started your own firm.",
      "Clients choose a small firm to deal with the person whose name is on the door. Say so, and say what that means in practice.",
    ],
  },
};

export const nav = [
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
