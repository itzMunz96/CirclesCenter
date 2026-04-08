# Circles Services Center — React Website

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
csc/
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite + React plugin config
├── package.json
└── src/
    ├── main.jsx                    # React root, BrowserRouter
    ├── App.jsx                     # Route definitions
    │
    ├── data/
    │   └── content.js              # ★ All text content & config lives here
    │                               #   Update phone, email, copy from here
    │
    ├── styles/
    │   ├── global.css              # Design tokens, reset, shared layout
    │   ├── nav.css                 # Navigation styles
    │   └── footer.css              # SiteFooter + PageNavFooter styles
    │
    ├── components/
    │   ├── Nav.jsx                 # Top navigation bar
    │   ├── SiteFooter.jsx          # Slim footer with phone & email
    │   ├── PageNavFooter.jsx       # Dark "next page" footer band
    │   ├── ServicesList.jsx        # Reusable 2-col services grid
    │   └── icons/
    │       └── Icons.jsx           # All SVG icons & illustrations
    │
    └── pages/
        ├── Home.jsx / Home.css
        ├── Mining.jsx
        ├── Trade.jsx
        ├── Services.jsx
        ├── Contact.jsx / Contact.css
        └── InnerPage.css           # Shared hero & office styles
```

## Updating Contact Details

Open `src/data/content.js` and update the `COMPANY` object:

```js
export const COMPANY = {
  phone: '+249 912 345 678',   // your real phone number
  email: 'info@csc-ltd.com',  // your real email
  ...
}
```

That's it — the number and email automatically appear on the Contact page and in the footer of every page.

## Pages & Routes

| Route       | Page         |
|-------------|--------------|
| `/`         | Home         |
| `/mining`   | Mining       |
| `/trade`    | Import/Export|
| `/services` | Services     |
| `/contact`  | Contact      |

## Tech Stack

- **React 18** with **React Router v6**
- **Vite** for dev server & build
- **Pure CSS** (no Tailwind, no UI library)
- **DM Serif Display + DM Sans** from Google Fonts
- All illustrations are inline SVG — no external image files needed
