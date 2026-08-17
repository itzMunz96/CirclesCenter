/* Central SVG library. Illustrations scale via viewBox — no fixed pixel sizes. */

/* ════════════════════════════════════════════════════════════
   LOGO
   Both marks use the badge: the concentric circles on a dark
   rounded tile. Geometry on a 100x100 viewBox, centre 50,50:
     outer ring r=43  (orbit dots sit on this ring)
     mid ring   r=32
     inner ring r=21
     core disc  r=11
     centre dot r=5
     orbit dots r=3.5 at N / E / S / W
════════════════════════════════════════════════════════════ */

const ORBITS = [
  { cx: 50, cy: 7 },
  { cx: 93, cy: 50 },
  { cx: 50, cy: 93 },
  { cx: 7,  cy: 50 },
]

/* Nav mark — the badge: mark on a dark rounded tile.
   Strokes are thicker than the plain mark because hairlines vanish at ~34px.
   `gold` swaps the core to gold with a dark centre. */
export function LogoMark({ size = 34, gold = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect width="100" height="100" rx="22" fill="#08303f" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="#8db7c0" strokeOpacity="0.38" strokeWidth="1.6" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#4b8697" strokeWidth="2.4" />
      <circle cx="50" cy="50" r="21" fill="none" stroke="#2c7488" strokeWidth="3.2" />
      <circle cx="50" cy="50" r="11" fill={gold ? '#c8a44a' : '#2c7488'} />
      <circle cx="50" cy="50" r="5"  fill={gold ? '#08303f' : '#8db7c0'} />
      {ORBITS.map((o, i) => (
        <circle key={i} cx={o.cx} cy={o.cy} r="4" fill="#4b8697" />
      ))}
    </svg>
  )
}

/* Hero mark — the badge, matching logo-badge-1024.png exactly.
   Full 0-100 viewBox so the rounded tile's corners aren't cropped.
   Sized by CSS. */
export function LogoMarkLarge() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <rect width="100" height="100" rx="22" fill="#08303f" />
      <circle cx="50" cy="50" r="43" fill="none" stroke="#8db7c0" strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="50" cy="50" r="32" fill="none" stroke="#4b8697" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="21" fill="none" stroke="#2c7488" strokeWidth="2" />
      <circle cx="50" cy="50" r="11" fill="#2c7488" />
      <circle cx="50" cy="50" r="5"  fill="#8db7c0" />
      {ORBITS.map((o, i) => (
        <circle key={i} cx={o.cx} cy={o.cy} r="3.5" fill="#4b8697" opacity="0.85" />
      ))}
    </svg>
  )
}

export function ArrowRight({ size = 16 }) {
  return (
    <svg className="icon-arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PhoneIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 2h5l2 5-3 2a14 14 0 006 6l2-3 5 2v5a2 2 0 01-2 2A18 18 0 012 4a2 2 0 012-2z"
        stroke="#2c7488" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function EmailIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="#2c7488" strokeWidth="1.6" />
      <path d="M2 7l10 7 10-7" stroke="#2c7488" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function PhoneIconSmall() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M2 1h3l1 3-1.5 1.5a8 8 0 003 3L9 7l3 1v3a1 1 0 01-1 1A10 10 0 011 2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function EmailIconSmall() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <rect x="1" y="2.5" width="11" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1 3.5l5.5 4 5.5-4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

/* ── Home card icons ── */
export function MiningIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <circle cx="24" cy="24" r="23" stroke="#4b8697" strokeWidth="1.2" />
      <polygon points="24,8 38,30 10,30" fill="none" stroke="#c8a44a" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="4" fill="#c8a44a" />
      <line x1="16" y1="36" x2="32" y2="36" stroke="#4b8697" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="30" x2="24" y2="36" stroke="#4b8697" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function TradeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <circle cx="24" cy="24" r="23" stroke="#4b8697" strokeWidth="1.2" />
      <ellipse cx="24" cy="24" rx="14" ry="20" stroke="#8db7c0" strokeWidth="1.4" transform="rotate(90 24 24)" />
      <circle cx="24" cy="24" r="14" stroke="#c8a44a" strokeWidth="1.4" />
      <line x1="4"  y1="24" x2="44" y2="24" stroke="#4b8697" strokeWidth="1.2" />
      <line x1="24" y1="4"  x2="24" y2="44" stroke="#4b8697" strokeWidth="1.2" />
    </svg>
  )
}

export function ServicesIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <circle cx="24" cy="24" r="23" stroke="#4b8697" strokeWidth="1.2" />
      <circle cx="24" cy="24" r="8"  stroke="#c8a44a" strokeWidth="1.6" />
      <line x1="24" y1="10" x2="24" y2="16" stroke="#8db7c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="32" x2="24" y2="38" stroke="#8db7c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="10" y1="24" x2="16" y2="24" stroke="#8db7c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="32" y1="24" x2="38" y2="24" stroke="#8db7c0" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="14" x2="18" y2="18" stroke="#8db7c0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="30" y1="30" x2="34" y2="34" stroke="#8db7c0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="34" y1="14" x2="30" y2="18" stroke="#8db7c0" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="18" y1="30" x2="14" y2="34" stroke="#8db7c0" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ── Page illustrations ── */
export function MiningIllustration() {
  return (
    <svg viewBox="0 0 380 340" fill="none" aria-hidden="true">
      <rect x="0" y="240" width="380" height="100" fill="#0f3d50" opacity=".08" rx="2" />
      <rect x="0" y="270" width="380" height="70"  fill="#0f3d50" opacity=".06" rx="2" />
      <path d="M60 260 Q110 230 160 255 Q210 280 260 250 Q310 225 360 248" stroke="#c8a44a" strokeWidth="1" fill="none" opacity=".5" />
      <path d="M40 285 Q100 260 155 278 Q205 295 270 268 Q320 248 375 265" stroke="#c8a44a" strokeWidth=".8" fill="none" opacity=".3" />
      <polygon points="190,60 230,110 210,170 170,170 150,110" fill="rgba(200,164,74,0.12)" stroke="#c8a44a" strokeWidth="1.8" strokeLinejoin="round" />
      <polygon points="190,60 210,110 190,100 170,110" fill="rgba(200,164,74,0.2)" stroke="#c8a44a" strokeWidth="1" />
      <polygon points="190,100 210,110 210,170 190,160" fill="rgba(200,164,74,0.08)" stroke="#c8a44a" strokeWidth=".8" />
      <line x1="190" y1="40" x2="190" y2="55" stroke="#c8a44a" strokeWidth="1.5" strokeLinecap="round" opacity=".7" />
      <line x1="222" y1="52" x2="210" y2="63" stroke="#c8a44a" strokeWidth="1.2" strokeLinecap="round" opacity=".5" />
      <line x1="158" y1="52" x2="170" y2="63" stroke="#c8a44a" strokeWidth="1.2" strokeLinecap="round" opacity=".5" />
      <circle cx="190" cy="115" r="80"  stroke="#2c7488" strokeWidth="1"  fill="none" opacity=".3" strokeDasharray="3 6" />
      <circle cx="190" cy="115" r="120" stroke="#2c7488" strokeWidth=".8" fill="none" opacity=".2" strokeDasharray="2 8" />
      <line x1="80" y1="200" x2="130" y2="150" stroke="#4b8697" strokeWidth="2" strokeLinecap="round" />
      <path d="M130,150 L148,136 L152,152 L136,156 Z" fill="#4b8697" />
      <line x1="290" y1="240" x2="290" y2="155" stroke="#4b8697" strokeWidth="2" strokeLinecap="round" />
      <line x1="275" y1="240" x2="305" y2="240" stroke="#4b8697" strokeWidth="2" strokeLinecap="round" />
      <polygon points="280,200 290,155 300,200" stroke="#4b8697" strokeWidth="1.2" fill="none" />
      <circle cx="110" cy="175" r="3"   fill="#c8a44a" opacity=".6" />
      <circle cx="265" cy="190" r="2.5" fill="#c8a44a" opacity=".5" />
      <circle cx="155" cy="210" r="2"   fill="#c8a44a" opacity=".4" />
      <circle cx="320" cy="185" r="2"   fill="#8db7c0" opacity=".4" />
    </svg>
  )
}

export function TradeIllustration() {
  return (
    <svg viewBox="0 0 380 360" fill="none" aria-hidden="true">
      <circle cx="190" cy="170" r="130" stroke="#2c7488" strokeWidth="1.5" fill="rgba(44,116,136,0.04)" />
      <ellipse cx="190" cy="170" rx="130" ry="48" stroke="#4b8697" strokeWidth="1" fill="none" />
      <ellipse cx="190" cy="170" rx="60" ry="130" stroke="#4b8697" strokeWidth="1" fill="none" />
      <line x1="60"  y1="170" x2="320" y2="170" stroke="#4b8697" strokeWidth=".8" />
      <line x1="190" y1="40"  x2="190" y2="300" stroke="#4b8697" strokeWidth=".8" />
      <ellipse cx="190" cy="130" rx="130" ry="28" stroke="#2c7488" strokeWidth=".7" fill="none" opacity=".5" />
      <ellipse cx="190" cy="210" rx="130" ry="28" stroke="#2c7488" strokeWidth=".7" fill="none" opacity=".5" />
      <path d="M100 115 Q190 70 280 118" stroke="#c8a44a" strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
      <path d="M82 195 Q190 240 298 192" stroke="#c8a44a" strokeWidth="1.2" fill="none" strokeDasharray="4 4" opacity=".6" />
      <circle cx="100" cy="115" r="5" fill="#c8a44a" />
      <circle cx="280" cy="118" r="5" fill="#c8a44a" />
      <circle cx="82"  cy="195" r="4" fill="#8db7c0" />
      <circle cx="298" cy="192" r="4" fill="#8db7c0" />
      <rect x="148" y="310" width="84" height="18" rx="4" fill="#0f3d50" opacity=".6" />
      <path d="M148 310 Q190 295 232 310" fill="#0f3d50" opacity=".3" />
      <rect x="172" y="296" width="12" height="14" rx="1" fill="#4b8697" opacity=".5" />
      <rect x="196" y="299" width="10" height="11" rx="1" fill="#4b8697" opacity=".4" />
      <polygon points="280,118 272,108 286,106" fill="#c8a44a" opacity=".8" />
    </svg>
  )
}

export function ServicesIllustration() {
  return (
    <svg viewBox="0 0 380 340" fill="none" aria-hidden="true">
      <rect x="110" y="240" width="160" height="20" rx="3" fill="#0f3d50" opacity=".15" />
      <rect x="130" y="200" width="120" height="40" rx="2" fill="#0f3d50" opacity=".1" stroke="#2c7488" strokeWidth="1" />
      <rect x="90"  y="80"  width="200" height="110" rx="3" stroke="#2c7488" strokeWidth="1.5" fill="rgba(44,116,136,0.05)" />
      <circle cx="190" cy="120" r="22" stroke="#c8a44a" strokeWidth="1.5" fill="rgba(200,164,74,0.08)" />
      <circle cx="190" cy="120" r="14" stroke="#c8a44a" strokeWidth="1"   fill="rgba(200,164,74,0.12)" />
      <circle cx="190" cy="120" r="6"  fill="#c8a44a" />
      <line x1="108" y1="165" x2="272" y2="165" stroke="#4b8697" strokeWidth=".8" />
      <circle cx="145" cy="195" r="5" fill="#4b8697" opacity=".5" />
      <circle cx="165" cy="193" r="5" fill="#4b8697" opacity=".5" />
      <circle cx="185" cy="195" r="5" fill="#4b8697" opacity=".5" />
      <circle cx="205" cy="193" r="5" fill="#4b8697" stroke="#2c7488" strokeWidth="1" />
      <circle cx="225" cy="195" r="5" fill="#4b8697" opacity=".5" />
      <line x1="90"  y1="80" x2="90"  y2="65" stroke="#4b8697" strokeWidth="1.5" />
      <line x1="290" y1="80" x2="290" y2="65" stroke="#4b8697" strokeWidth="1.5" />
      <line x1="72"  y1="65" x2="308" y2="65" stroke="#4b8697" strokeWidth="1.2" />
      <path d="M85 65 L55 260"   stroke="#c8a44a" strokeWidth=".7" opacity=".25" fill="none" />
      <path d="M295 65 L325 260" stroke="#c8a44a" strokeWidth=".7" opacity=".25" fill="none" />
      <path d="M310 130 L345 115 L345 155 L310 145 Z" stroke="#8db7c0" strokeWidth="1.2" fill="none" />
      <rect x="296" y="134" width="14" height="12" rx="1" stroke="#8db7c0" strokeWidth="1" fill="none" />
      <circle cx="58"  cy="100" r="3"   fill="#c8a44a" opacity=".5" />
      <circle cx="322" cy="108" r="2.5" fill="#c8a44a" opacity=".4" />
      <circle cx="50"  cy="150" r="2"   fill="#8db7c0" opacity=".4" />
      <circle cx="190" cy="290" r="80" stroke="#2c7488" strokeWidth=".7" fill="none" opacity=".25" strokeDasharray="3 6" />
      <circle cx="190" cy="290" r="55" stroke="#2c7488" strokeWidth=".7" fill="none" opacity=".2"  strokeDasharray="2 7" />
    </svg>
  )
}

export function ContactRings() {
  return (
    <svg viewBox="0 0 340 340" fill="none" aria-hidden="true" style={{ width: '100%', height: '100%' }}>
      <circle cx="170" cy="170" r="165" stroke="#8db7c0" strokeWidth="1" />
      <circle cx="170" cy="170" r="120" stroke="#4b8697" strokeWidth="1" />
      <circle cx="170" cy="170" r="78"  stroke="#2c7488" strokeWidth="1.2" />
      <circle cx="170" cy="170" r="38"  fill="#2c7488" />
      <circle cx="170" cy="5"   r="5" fill="#c8a44a" />
      <circle cx="335" cy="170" r="5" fill="#4b8697" />
      <circle cx="170" cy="335" r="5" fill="#c8a44a" />
      <circle cx="5"   cy="170" r="5" fill="#4b8697" />
    </svg>
  )
}

/* ── Hero background decorations ── */
export function MiningHeroDeco() {
  return (
    <svg className="page-hero__deco" viewBox="0 0 500 400" fill="none" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <polygon points="250,40 420,320 80,320" stroke="#c8a44a" strokeWidth="1.5" fill="rgba(200,164,74,0.04)" />
      <polygon points="250,40 350,200 150,200" stroke="#8db7c0" strokeWidth="1" fill="rgba(141,183,192,0.06)" />
      <circle cx="250" cy="40" r="30" stroke="#c8a44a" strokeWidth="1" fill="none" />
      <circle cx="250" cy="40" r="18" stroke="#c8a44a" strokeWidth=".8" fill="none" opacity=".5" />
      <line x1="80" y1="320" x2="420" y2="320" stroke="#4b8697" strokeWidth="1.5" />
      <circle cx="250" cy="40"  r="4" fill="#c8a44a" />
      <circle cx="330" cy="180" r="3" fill="#8db7c0" opacity=".6" />
      <circle cx="170" cy="220" r="3" fill="#8db7c0" opacity=".6" />
      <circle cx="250" cy="320" r="160" stroke="#2c7488" strokeWidth=".8" fill="none" opacity=".4" />
      <circle cx="250" cy="320" r="110" stroke="#2c7488" strokeWidth=".8" fill="none" opacity=".3" />
    </svg>
  )
}

export function TradeHeroDeco() {
  return (
    <svg className="page-hero__deco" viewBox="0 0 500 400" fill="none" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <circle cx="250" cy="200" r="160" stroke="#8db7c0" strokeWidth="1.5" />
      <ellipse cx="250" cy="200" rx="160" ry="60" stroke="#c8a44a" strokeWidth="1" />
      <ellipse cx="250" cy="200" rx="80" ry="160" stroke="#4b8697" strokeWidth="1" />
      <line x1="90"  y1="200" x2="410" y2="200" stroke="#4b8697" strokeWidth="1" />
      <line x1="250" y1="40"  x2="250" y2="360" stroke="#4b8697" strokeWidth="1" />
      <circle cx="250" cy="200" r="8" fill="#c8a44a" />
      <path d="M130 120 Q250 80 370 130"  stroke="#8db7c0" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      <path d="M100 260 Q250 310 400 255" stroke="#8db7c0" strokeWidth="1" strokeDasharray="4 4" fill="none" />
      <circle cx="130" cy="120" r="5" fill="#c8a44a" opacity=".8" />
      <circle cx="370" cy="130" r="5" fill="#c8a44a" opacity=".8" />
      <circle cx="100" cy="260" r="4" fill="#8db7c0" opacity=".7" />
      <circle cx="400" cy="255" r="4" fill="#8db7c0" opacity=".7" />
    </svg>
  )
}

export function ServicesHeroDeco() {
  return (
    <svg className="page-hero__deco" viewBox="0 0 500 400" fill="none" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
      <rect x="60"  y="180" width="80"  height="100" stroke="#c8a44a" strokeWidth="1.2" fill="rgba(200,164,74,0.05)" />
      <rect x="200" y="160" width="100" height="120" stroke="#8db7c0" strokeWidth="1.2" fill="rgba(141,183,192,0.05)" />
      <rect x="360" y="185" width="80"  height="95"  stroke="#c8a44a" strokeWidth="1.2" fill="rgba(200,164,74,0.05)" />
      <line x1="100" y1="180" x2="100" y2="130" stroke="#4b8697" strokeWidth="1" />
      <line x1="250" y1="160" x2="250" y2="110" stroke="#4b8697" strokeWidth="1" />
      <line x1="400" y1="185" x2="400" y2="135" stroke="#4b8697" strokeWidth="1" />
      <rect x="80"  y="120" width="40" height="20" stroke="#c8a44a" strokeWidth="1" fill="rgba(200,164,74,0.1)" />
      <rect x="230" y="100" width="40" height="20" stroke="#8db7c0" strokeWidth="1" fill="rgba(141,183,192,0.1)" />
      <rect x="380" y="125" width="40" height="20" stroke="#c8a44a" strokeWidth="1" fill="rgba(200,164,74,0.1)" />
      <line x1="30" y1="280" x2="470" y2="280" stroke="#4b8697" strokeWidth="1" />
      <circle cx="190" cy="80" r="4" fill="#c8a44a" opacity=".6" />
      <circle cx="320" cy="70" r="3" fill="#8db7c0" opacity=".5" />
    </svg>
  )
}
