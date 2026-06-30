# Circles Services Center — React Website (EN/AR)

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## What's New: Language Switching

A toggle button now sits in the top navigation bar (top-right in English, top-left in Arabic).
Clicking it switches the entire site between English and Arabic instantly — including:

- All page text and headings
- Layout direction (LTR ↔ RTL)
- Fonts (DM Serif/DM Sans for English, Markazi Text/Cairo for Arabic)
- Mirrored layouts (image/text split sections, icon arrows, office cards, footers)

The chosen language is saved in the browser (`localStorage`), so it persists on refresh.

## Project Structure

```
csc/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                 # Wraps app in LanguageProvider + BrowserRouter
    ├── App.jsx                  # Routes + applies .rtl / .ltr wrapper class
    │
    ├── i18n/
    │   ├── translations.js      # ★ ALL text content — English & Arabic in one file
    │   └── LanguageContext.jsx  # React context: current lang, toggle fn, t() object
    │
    ├── styles/
    │   ├── global.css           # Design tokens, reset, RTL mirroring rules
    │   ├── nav.css               # Nav bar + language toggle button styles
    │   └── footer.css
    │
    ├── components/
    │   ├── Nav.jsx               # Top nav — reads t.nav.*, has language button
    │   ├── SiteFooter.jsx
    │   ├── PageNavFooter.jsx
    │   ├── ServicesList.jsx
    │   └── icons/Icons.jsx       # All SVG icons & illustrations
    │
    └── pages/
        ├── Home.jsx / Home.css
        ├── Mining.jsx
        ├── Trade.jsx
        ├── Services.jsx
        ├── Contact.jsx / Contact.css
        └── InnerPage.css
```

## Editing Content

**All text lives in one place:** `src/i18n/translations.js`

It's a single object with two top-level keys, `en` and `ar`, each containing
identical structure (company info, nav labels, every page's copy). To change
any text — English or Arabic — edit it there. No other file needs touching.

```js
export const translations = {
  en: { company: { phone: '+___ ___ ____', email: 'info@csc.com', ... }, ... },
  ar: { company: { phone: '+___ ___ ____', email: 'info@csc.com', ... }, ... },
}
```

Update the phone/email in **both** `en.company` and `ar.company` (they're shared
data, just duplicated for simplicity — keep them identical).

## How the Language System Works

1. `LanguageContext.jsx` holds the current language (`'en'` or `'ar'`) in state,
   persisted to `localStorage`.
2. It exposes `t`, an object containing only the active language's translations.
3. Every component calls `const { t } = useLanguage()` and reads `t.section.key`.
4. `App.jsx` wraps everything in a `.rtl` or `.ltr` div, which `global.css` uses
   to mirror layouts, flip arrows, and swap fonts automatically.

To add a third language, duplicate the `en` block in `translations.js`, translate
the values, give it a key (e.g. `fr`), and add a button/cycle option in `Nav.jsx`.

## Tech Stack

- **React 18** + **React Router v6**
- **Vite** for dev/build
- **Pure CSS** — no Tailwind, no UI library
- **DM Serif Display + DM Sans** (English) / **Markazi Text + Cairo** (Arabic)
- All illustrations are inline SVG
