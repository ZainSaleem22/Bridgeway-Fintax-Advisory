# Chartered accountant firm website

A fast, static, multi-page website built with Next.js and Tailwind. It has a Corporate Tax estimator on the home page, service pages, an insights section, and a contact form that sends enquiries to email or WhatsApp.

## 1. Make it yours (do this first)

Open `lib/site.ts` and replace everything marked PLACEHOLDER:
firm name, website address, phone, WhatsApp number, email, address, licence line, and the founder bio.

Other content lives in:
- `lib/services.ts` for the four service pages
- `lib/insights.ts` for the articles (add a new entry to publish a new article)
- `app/page.tsx` for the home page copy, promises, FAQ and deadline list
- `app/about/page.tsx` for the About page. Replace the photo placeholder with a real photo in `/public`

Check every promise on the site (fixed quote, reply within one working day, 20-minute free call) is something the firm will actually deliver, or edit it.

## 2. Receive enquiries by email

By default the contact form opens WhatsApp with the message pre-filled. To get enquiries by email instead:
1. Create a free form at formspree.io and copy the endpoint URL.
2. Paste it into `formEndpoint` in `lib/site.ts`.

## 3. Run it

```
npm install
npm run dev      # preview at http://localhost:3000
npm run build    # creates the finished site in the /out folder
```

## 4. Put it online

The `out` folder is a plain static site. Upload it to Netlify, Vercel, Cloudflare Pages, or any web host. Then point the firm's domain at it and update `url` in `lib/site.ts` so the sitemap is correct.

## 5. Get found on Google

- Create a Google Business Profile for the firm and use the same name, address and phone as the site.
- Submit `/sitemap.xml` in Google Search Console.
- Publish a new article in `lib/insights.ts` every few weeks on questions clients actually ask.
