# Threadsmith

Premium oversized streetwear from Chennai, India. Heavy combed cotton tees
with wash-fast prints and real embroidery.

**Status: pre-launch.** This repo is mid-rebuild from an old demo storefront
into the real Threadsmith brand site. The site is currently a browse-only
brand shell with honest placeholder products. No cart, no checkout, no
waitlist form, no payments. The drop is not open yet.

## What the site does today

- Presents the first drop: black oversized heavy tees (print, embroidery,
  and a print + embroidery concept), with target GSM and decoration called
  out per product.
- Prices in INR, targets kept under the ₹2,500 lane.
- Every product card states "Drop not open yet. No orders."
- Placeholder imagery is labelled as such. No fake reviews, no fake stock,
  no shipping promises.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS + shadcn-style UI components

## Develop

```bash
npm install
npm run dev
npm run build
```

## Roadmap notes

- Real artwork and product photography replace the placeholder SVGs when ready.
- A waitlist or contact capture (e.g. a form endpoint) and payments
  (Razorpay or similar) get wired only when the first drop is actually
  ready, with real keys and real terms.
