export const COMPANY = {
  name:    'Circles Services Center Limited',
  nameShort: 'CSC',
  tagline: 'Solutions Around You',
  founded: 1995,
  phone:   '+___ ___ ____',       // ← replace with real number
  email:   'info@csc.com',        // ← replace with real email
}

export const OFFICES = [
  {
    flag:    '🇸🇩',
    country: 'Sudan',
    city:    'Khartoum',
    role:    'Mineral exploration & mining operations. Our founding headquarters since 1996.',
  },
  {
    flag:    '🇴🇲',
    country: 'Oman',
    city:    'Muscat',
    role:    'Import, export & public relations. Our regional gateway to international markets.',
  },
]

export const PAGES = [
  { path: '/mining',   label: 'Mining' },
  { path: '/trade',    label: 'Import & Export' },
  { path: '/services', label: 'Services' },
  { path: '/contact',  label: 'Contact' },
]

export const MINING = {
  circle:  'Circle One',
  title:   'Mining',
  slogan:  "Earth's Wealth at Your Hands",
  intro: [
    'Our Mining Circle is the strategic heart of Circles Services Center. Operating from Khartoum, we focus on gold exploration and extraction, combining on-the-ground expertise with modern processing technology.',
    'We hold research certificates and operate milling equipment across active sites in Sudan, while also financing gold production and trade projects for qualified partners.',
  ],
  services: [
    { title: 'Gold Exploration',          desc: 'Active prospecting and surveying of gold-bearing zones across Sudan using modern techniques.' },
    { title: 'Research Certificates',     desc: 'Obtaining and managing general and exclusive mineral research certificates from Sudanese authorities.' },
    { title: 'Milling & Primary Processing', desc: 'Operating milling equipment and primary ore processing facilities at active mining sites.' },
    { title: 'Gold Trade Financing',      desc: 'Financing production and trade projects for qualified partners in the gold sector.' },
  ],
  next: { label: 'Import & Export', path: '/trade' },
}

export const TRADE = {
  circle: 'Circle Two',
  title:  'Import & Export',
  slogan: 'Connecting the World Efficiently',
  intro: [
    'Our Import & Export Circle, headquartered in Muscat, Oman, serves as our gateway to regional and international markets. We manage the full trade cycle — sourcing, logistics, customs, and delivery.',
    'From importing heavy machinery and industrial goods to exporting minerals and commercial products, we coordinate seamlessly with international suppliers and trade partners across the globe.',
  ],
  services: [
    { title: 'Equipment & Goods Import',         desc: 'Sourcing and importing machinery, industrial equipment, and commercial goods to Sudan.' },
    { title: 'Mineral & Product Export',         desc: 'Exporting mineral products and commercial goods to regional and global markets.' },
    { title: 'Logistics & Supply Chain',         desc: 'End-to-end management of logistics operations, customs coordination, and supply chains.' },
    { title: 'International Partner Coordination', desc: 'Building and managing relationships with international suppliers, buyers, and trade partners.' },
  ],
  next: { label: 'Services', path: '/services' },
}

export const SERVICES = {
  circle: 'Circle Three',
  title:  'Services',
  slogan: 'Integrated Services, Professionally',
  intro: [
    'Our Services Circle covers everything from advertising campaigns and product launches to full-scale international exhibition management. We help businesses make their mark — locally and globally.',
    'With decades of experience in Sudan and across the region, we deliver end-to-end event and marketing support with a professional, results-driven approach.',
  ],
  services: [
    { title: 'Advertising & Promotion',    desc: 'Designing and executing promotional campaigns for companies and institutions.' },
    { title: 'Event & Product Launch',     desc: 'Organising product launches, brand events, and corporate presentations.' },
    { title: 'Exhibition Management',      desc: 'Planning and running trade and commercial exhibitions inside Sudan and internationally.' },
    { title: 'Stand & Pavilion Setup',     desc: 'Designing, building, and fitting out exhibition stands and promotional booths.' },
    { title: 'Public Relations',           desc: 'Providing PR support, media coordination, and stakeholder communication services.' },
    { title: 'Construction & Infrastructure', desc: 'Building and rehabilitating private and government facilities and infrastructure projects.' },
  ],
  next: { label: 'Contact', path: '/contact' },
}
