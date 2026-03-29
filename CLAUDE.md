# SimCast Presentation

Static marketing / landing page for simcast.dev.

## Tech Stack

- **Astro 6** — static site generator, zero client-side JS by default
- **@astrojs/sitemap** — auto-generated sitemap
- **Google Fonts** — Geist, Geist Mono, Lora (loaded in Layout.astro)
- **Package manager** — npm

## Project Structure

```
src/
├── layouts/
│   └── Layout.astro     # Base HTML shell — favicon, OG/Twitter meta, Google Fonts, canonical URL
├── pages/
│   ├── index.astro      # Single-page landing — hero, features grid, AI agents section, CTA, footer
│   └── 404.astro        # Custom 404 page
└── styles/
    └── global.css       # CSS variables, font stacks (Geist, Geist Mono, Lora), animations
public/
├── robots.txt
├── screencapturekit-feature.png
└── SimCast.png              # App icon — also used as favicon and OG image
```

## Page Sections

1. **Hero** — headline, subtext, GitHub CTA, stats bar (latency/codec/license/protocol), browser illustration with animated WebRTC badge and macOS app pill
2. **Features grid** — 6 cards: window-level capture, H.264/WebRTC, remote touch, ephemeral sessions, multi-simulator, open source
3. **Built for AI agents** — copy + live code example showing LiveKit room connect, tap injection, screenshot command
4. **CTA banner** — MIT license + self-host pitch, GitHub link
5. **Footer**

## Dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Deployment

Static output (`dist/`) — deploy to any CDN (Vercel, Netlify, Cloudflare Pages, etc.).
Site URL configured as `https://simcast.dev` in `astro.config.mjs`.
