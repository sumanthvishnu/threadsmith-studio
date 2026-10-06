# Threadsmith

Premium oversized streetwear from Chennai, India. Heavy combed cotton tees
with wash-fast prints and real embroidery.

**Status: pre-launch.** The site is a browse-only brand shell showing Drop 01,
the first drop's three designs (Smoke, Panther, David), as labelled concept
images while the samples are being made. No prices, no cart, no checkout, no
waitlist form, no payments. The drop is not open yet.

## What the site does today

- Presents Drop 01: three black oversized heavy tees built around frayed
  canvas patches, line art, and red thread, with target GSM and decoration
  called out per design.
- Each design has a product page with a main image and a patch close-up.
- Every product carries a "Drop not open yet" badge, and each image is
  captioned "Concept images. Real photos coming with the samples."
- No fake reviews, no fake stock, no shipping promises, no prices.

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

- Real product photography replaces the concept images when samples land.
- A waitlist or contact capture (e.g. a form endpoint), pricing, and
  payments (Razorpay or similar) get wired only when the first drop is
  actually ready, with real keys and real terms.
