# Circles Services Center — Website

Bilingual (English / Arabic) React site, responsive across phones, tablets and laptops.

## Quick start

```bash
npm install
npm run dev
```

Opens on http://localhost:5173

`npm run dev` runs with `--host`, so you can also open the site on your **phone** using the
Network URL it prints (e.g. `http://192.168.1.20:5173`) as long as both devices are on the
same Wi-Fi. Handy for checking the mobile layout on a real device.

## Build & deploy

```bash
npm run build
```

Upload **everything inside `dist/`** to `public_html` on your hosting.
`.htaccess` and `favicon.svg` are copied into `dist/` automatically by the build.

## Responsive behaviour

| Width | Layout |
|---|---|
| **> 960px** — laptop | Full nav tabs, two-column splits, 3-across cards |
| **700–960px** — tablet | Hamburger menu, stacked splits, tighter spacing |
| **< 700px** — phone | Single-column everything, stacked footers |
| **< 560px** — small phone | Home cards become horizontal rows (icon beside text) |
| **< 400px** | Wordmark hides, logo circle only |

Other responsive details:
- Font sizes use `clamp()` throughout, so type scales smoothly rather than jumping at breakpoints
- Arabic gets its own larger size ramp — Arabic script reads smaller than Latin at equal px
- Tap targets are at least 44px tall
- `100dvh` used for full-height sections so mobile browser URL bars don't cause clipping
- `prefers-reduced-motion` is respected — animations disable for users who ask for that
- Hero decorations fade back on narrow screens instead of being awkwardly cropped

## Project structure

```
csc/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg           # Browser tab icon (badge logo)
│   ├── .htaccess             # SPA routing for Apache/LiteSpeed
│   └── logo/
│       ├── logo-light-bg.svg    # Mark for light backgrounds
│       ├── logo-dark-bg.svg     # Mark for dark backgrounds
│       ├── logo-badge.svg       # Mark on a dark rounded square
│       ├── apple-touch-icon.png # 180x180, iOS home screen
│       └── og-image.png         # 1200x630, social share preview
└── src/
    ├── main.jsx
    ├── App.jsx               # Routes
    │
    ├── i18n/
    │   ├── translations.js   # ★ ALL text content, EN + AR
    │   └── LanguageContext.jsx
    │
    ├── styles/
    │   ├── global.css        # Tokens, reset, shared layout, breakpoints
    │   ├── nav.css           # Nav + hamburger drawer
    │   └── footer.css        # Both footers
    │
    ├── components/
    │   ├── Nav.jsx           # Tabs on desktop, drawer on mobile
    │   ├── SiteFooter.jsx
    │   ├── PageNavFooter.jsx
    │   ├── ServicesList.jsx
    │   └── icons/Icons.jsx   # All SVGs
    │
    └── pages/
        ├── Home.jsx + Home.css
        ├── Mining.jsx
        ├── Trade.jsx
        ├── Services.jsx
        ├── Contact.jsx + Contact.css
        └── InnerPage.css
```

## Editing content

Everything lives in **`src/i18n/translations.js`** — one `en` block and one `ar` block with
identical structure. Change the phone, email, or any copy there and it updates everywhere.

Note the two blocks currently carry **different phone numbers** (Italy for EN, Sudan for AR).
If that isn't intentional, set them to the same value.

## Routes

`/` · `/mining` · `/trade` · `/services` · `/contact`

## Logo

The mark is drawn as inline SVG in `src/components/icons/Icons.jsx` — no image
files needed for on-page use, so it stays sharp at any size and costs no extra
requests.

Two components share one geometry (100x100 viewBox, centre 50,50):

- `LogoMark` — the nav mark. Strokes are scaled up ~1.9x because hairlines
  disappear at small sizes.
- `LogoMarkLarge` — the home hero mark, sized by CSS.

Both take a `variant` prop:

- `variant="dark"` — faint outer ring, for dark teal backgrounds
- `variant="light"` — solid outer ring, for cream/white backgrounds

The nav switches automatically: dark on the home page, light everywhere else.

Standalone files in `public/logo/` are for things that need a real image —
social previews, iOS icons, or anything outside the site (letterheads, decks).
