import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { posts } from "@/lib/insights";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const pages = ["", "/services", "/about", "/insights", "/contact"].map((p) => `${base}${p}/`);
  const svc = services.map((s) => `${base}/services/${s.slug}/`);
  const blog = posts.map((p) => `${base}/insights/${p.slug}/`);
  return [...pages, ...svc, ...blog].map((url) => ({ url, lastModified: new Date() }));
}
