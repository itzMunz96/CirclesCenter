export const translations = {
  en: {
    company: {
      name: 'Circles Services Center Limited',
      nameShort: 'CSC',
      tagline: 'Solutions Around You',
      founded: 1995,
      phone:   '+39 351 570 8557',       // ← replace with real number
      email:   'info@circlescenter.com',
    },

    nav: {
      home: 'Home',
      mining: 'Mining',
      trade: 'Import & Export',
      services: 'Services',
      contact: 'Contact',
      langSwitch: 'العربية',
    },

    offices: [
      {
        flag: '🇸🇩',
        country: 'Sudan',
        city: 'Khartoum',
        role: 'Mineral exploration & mining operations. Our founding headquarters since 1996.',
      },
      {
        flag: '🇴🇲',
        country: 'Oman',
        city: 'Muscat',
        role: 'Import, export & public relations. Our regional gateway to international markets.',
      },
    ],

    home: {
      eyebrowSuffix: 'Est.',
      title1: 'Three Circles.',
      title2: 'One Vision.',
      cards: [
        { to: '/mining',   title: 'Mining',          sub: "Earth's Wealth" },
        { to: '/trade',    title: 'Import & Export', sub: 'Connecting the World' },
        { to: '/services', title: 'Services',        sub: 'Integrated & Professional' },
      ],
      footerSuffix: 'Est.',
    },

    mining: {
      circle: 'Circle One',
      title: 'Mining',
      slogan: "Earth's Wealth at Your Hands",
      introLabel: 'Our Core Activity',
      introTitle: "Exploring Sudan's Mineral Potential",
      intro: [
        'Our Mining Circle is the strategic heart of Circles Services Center. Operating from Khartoum, we focus on gold exploration and extraction, combining on-the-ground expertise with modern processing technology.',
        'We hold research certificates and operate milling equipment across active sites in Sudan, while also financing gold production and trade projects for qualified partners.',
      ],
      servicesLabel: 'What We Do',
      servicesTitle: 'Mining Services',
      services: [
        { title: 'Gold Exploration', desc: 'Active prospecting and surveying of gold-bearing zones across Sudan using modern techniques.' },
        { title: 'Research Certificates', desc: 'Obtaining and managing general and exclusive mineral research certificates from Sudanese authorities.' },
        { title: 'Milling & Primary Processing', desc: 'Operating milling equipment and primary ore processing facilities at active mining sites.' },
        { title: 'Gold Trade Financing', desc: 'Financing production and trade projects for qualified partners in the gold sector.' },
      ],
      nextLabel: 'Next Circle',
      next: { title: 'Import & Export', path: '/trade' },
    },

    trade: {
      circle: 'Circle Two',
      title: 'Import & Export',
      slogan: 'Connecting the World Efficiently',
      introLabel: 'Global Trade Operations',
      introTitle: 'Sudan to the World, and Back',
      intro: [
        'Our Import & Export Circle, headquartered in Muscat, Oman, serves as our gateway to regional and international markets. We manage the full trade cycle — sourcing, logistics, customs, and delivery.',
        'From importing heavy machinery and industrial goods to exporting minerals and commercial products, we coordinate seamlessly with international suppliers and trade partners across the globe.',
      ],
      servicesLabel: 'What We Do',
      servicesTitle: 'Trade Services',
      services: [
        { title: 'Equipment & Goods Import', desc: 'Sourcing and importing machinery, industrial equipment, and commercial goods to Sudan.' },
        { title: 'Mineral & Product Export', desc: 'Exporting mineral products and commercial goods to regional and global markets.' },
        { title: 'Logistics & Supply Chain', desc: 'End-to-end management of logistics operations, customs coordination, and supply chains.' },
        { title: 'International Partner Coordination', desc: 'Building and managing relationships with international suppliers, buyers, and trade partners.' },
      ],
      officesLabel: 'Our Offices',
      officesTitle: 'Where We Operate',
      nextLabel: 'Next Circle',
      next: { title: 'Services', path: '/services' },
    },

    services: {
      circle: 'Circle Three',
      title: 'Services',
      slogan: 'Integrated Services, Professionally',
      introLabel: 'Business Support',
      introTitle: 'Promoting Brands, Connecting Markets',
      intro: [
        'Our Services Circle covers everything from advertising campaigns and product launches to full-scale international exhibition management. We help businesses make their mark — locally and globally.',
        'With decades of experience in Sudan and across the region, we deliver end-to-end event and marketing support with a professional, results-driven approach.',
      ],
      servicesLabel: 'What We Do',
      servicesTitle: 'Services Offered',
      services: [
        { title: 'Advertising & Promotion', desc: 'Designing and executing promotional campaigns for companies and institutions.' },
        { title: 'Event & Product Launch', desc: 'Organising product launches, brand events, and corporate presentations.' },
        { title: 'Exhibition Management', desc: 'Planning and running trade and commercial exhibitions inside Sudan and internationally.' },
        { title: 'Stand & Pavilion Setup', desc: 'Designing, building, and fitting out exhibition stands and promotional booths.' },
        { title: 'Public Relations', desc: 'Providing PR support, media coordination, and stakeholder communication services.' },
        { title: 'Construction & Infrastructure', desc: 'Building and rehabilitating private and government facilities and infrastructure projects.' },
      ],
      nextLabel: 'Get in Touch',
      next: { title: 'Contact', path: '/contact' },
    },

    contact: {
      label: 'Reach Out',
      title: 'Contact Us',
      sub: "We'd love to hear from you. Reach us through any of the channels below.",
      phoneLabel: 'Phone',
      phoneAction: 'Call now',
      emailLabel: 'Email',
      emailAction: 'Send email',
      officesLabel: 'Our Offices',
      officesTitle: 'Where to Find Us',
      backLabel: 'Back to Start',
      backTitle: 'Home',
      goHome: 'Go Home',
    },

    common: {
      explore: 'Explore',
    },
  },

  ar: {
    company: {
      name: 'مركز الدوائر للخدمات المحدودة',
      nameShort: 'CSC',
      tagline: 'حلول تدور حولك',
      founded: 1995,
      phone:   '+249 183 888 888',       // ← replace with real number
      email:   'info@circlescenter.com',
    },

    nav: {
      home: 'الرئيسية',
      mining: 'التعدين',
      trade: 'الاستيراد والتصدير',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      langSwitch: 'English',
    },

    offices: [
      {
        flag: '🇸🇩',
        country: 'السودان',
        city: 'الخرطوم',
        role: 'أعمال البحث والتنقيب عن المعادن. مقرنا الرئيسي منذ التأسيس عام 1996.',
      },
      {
        flag: '🇴🇲',
        country: 'سلطنة عُمان',
        city: 'مسقط',
        role: 'الاستيراد والتصدير والعلاقات العامة. بوابتنا الإقليمية إلى الأسواق الدولية.',
      },
    ],

    home: {
      eyebrowSuffix: 'تأسست عام',
      title1: 'ثلاث دوائر.',
      title2: 'رؤية واحدة.',
      cards: [
        { to: '/mining',   title: 'التعدين',               sub: 'ثروة الأرض' },
        { to: '/trade',    title: 'الاستيراد والتصدير',     sub: 'نصل العالم' },
        { to: '/services', title: 'الخدمات',                sub: 'خدمات متكاملة واحترافية' },
      ],
      footerSuffix: 'تأسست عام',
    },

    mining: {
      circle: 'الدائرة الأولى',
      title: 'التعدين',
      slogan: 'ثروة الأرض بين يديك',
      introLabel: 'نشاطنا الأساسي',
      introTitle: 'استكشاف الثروة المعدنية في السودان',
      intro: [
        'دائرة التعدين هي القلب الاستراتيجي لمركز الدوائر للخدمات. ننطلق من الخرطوم، ونركّز على التنقيب عن الذهب واستخراجه، جامعين بين الخبرة الميدانية وتقنيات المعالجة الحديثة.',
        'نمتلك شهادات بحث ونشغّل معدات الطحن في مواقع نشطة داخل السودان، إلى جانب تمويل مشاريع إنتاج وتجارة الذهب للشركاء المؤهلين.',
      ],
      servicesLabel: 'ماذا نقدم',
      servicesTitle: 'خدمات التعدين',
      services: [
        { title: 'التنقيب عن الذهب', desc: 'بحث ومسح ميداني نشط لمناطق احتواء الذهب في أنحاء السودان باستخدام تقنيات حديثة.' },
        { title: 'شهادات البحث', desc: 'الحصول على شهادات البحث العام والمطلق عن المعادن وإدارتها لدى الجهات السودانية المختصة.' },
        { title: 'الطحن والمعالجة الأولية', desc: 'تشغيل معدات الطحن ومرافق المعالجة الأولية للخام في مواقع التعدين النشطة.' },
        { title: 'تمويل تجارة الذهب', desc: 'تمويل مشاريع الإنتاج والتجارة للشركاء المؤهلين في قطاع الذهب.' },
      ],
      nextLabel: 'الدائرة التالية',
      next: { title: 'الاستيراد والتصدير', path: '/trade' },
    },

    trade: {
      circle: 'الدائرة الثانية',
      title: 'الاستيراد والتصدير',
      slogan: 'نصل العالم بكفاءة',
      introLabel: 'عمليات التجارة الدولية',
      introTitle: 'من السودان إلى العالم، وبالعكس',
      intro: [
        'دائرة الاستيراد والتصدير، ومقرها مسقط بسلطنة عُمان، هي بوابتنا إلى الأسواق الإقليمية والدولية. ندير دورة التجارة كاملة من التوريد إلى اللوجستيات والجمارك والتسليم.',
        'من استيراد الآليات الثقيلة والسلع الصناعية إلى تصدير المعادن والمنتجات التجارية، ننسّق بسلاسة مع الموردين والشركاء الدوليين حول العالم.',
      ],
      servicesLabel: 'ماذا نقدم',
      servicesTitle: 'خدمات التجارة',
      services: [
        { title: 'استيراد المعدات والسلع', desc: 'توريد واستيراد الآليات والمعدات الصناعية والسلع التجارية إلى السودان.' },
        { title: 'تصدير المعادن والمنتجات', desc: 'تصدير المنتجات المعدنية والسلع التجارية إلى الأسواق الإقليمية والعالمية.' },
        { title: 'اللوجستيات وسلاسل الإمداد', desc: 'إدارة شاملة لعمليات اللوجستيات والتنسيق الجمركي وسلاسل الإمداد.' },
        { title: 'تنسيق الشركاء الدوليين', desc: 'بناء وإدارة العلاقات مع الموردين والمشترين والشركاء التجاريين الدوليين.' },
      ],
      officesLabel: 'مكاتبنا',
      officesTitle: 'أين نعمل',
      nextLabel: 'الدائرة التالية',
      next: { title: 'الخدمات', path: '/services' },
    },

    services: {
      circle: 'الدائرة الثالثة',
      title: 'الخدمات',
      slogan: 'خدمات متكاملة. باحترافية',
      introLabel: 'دعم الأعمال',
      introTitle: 'الترويج للعلامات، وربط الأسواق',
      intro: [
        'تغطي دائرة الخدمات كل شيء بدءاً من الحملات الإعلانية وإطلاق المنتجات وصولاً إلى إدارة المعارض الدولية على نطاق واسع. نساعد الشركات على ترك بصمتها محلياً وعالمياً.',
        'بفضل عقود من الخبرة في السودان والمنطقة، نقدّم دعماً متكاملاً للفعاليات والتسويق بأسلوب احترافي يركّز على النتائج.',
      ],
      servicesLabel: 'ماذا نقدم',
      servicesTitle: 'الخدمات المقدمة',
      services: [
        { title: 'الدعاية والترويج', desc: 'تصميم وتنفيذ الحملات الترويجية للشركات والمؤسسات.' },
        { title: 'الفعاليات وإطلاق المنتجات', desc: 'تنظيم إطلاق المنتجات وفعاليات العلامات التجارية والعروض المؤسسية.' },
        { title: 'إدارة المعارض', desc: 'تخطيط وتنفيذ المعارض التجارية داخل السودان ودولياً.' },
        { title: 'تجهيز الأجنحة والمنصات', desc: 'تصميم وبناء وتجهيز أجنحة المعارض والمنصات الترويجية.' },
        { title: 'العلاقات العامة', desc: 'تقديم دعم العلاقات العامة والتنسيق الإعلامي وخدمات التواصل مع أصحاب المصلحة.' },
        { title: 'الإنشاءات والبنية التحتية', desc: 'بناء وإعادة تأهيل المنشآت الخاصة والحكومية ومشاريع البنية التحتية.' },
      ],
      nextLabel: 'تواصل معنا',
      next: { title: 'تواصل معنا', path: '/contact' },
    },

    contact: {
      label: 'تواصل معنا',
      title: 'تواصل معنا',
      sub: 'يسعدنا تواصلك معنا. يمكنك التواصل عبر أي من القنوات التالية.',
      phoneLabel: 'الهاتف',
      phoneAction: 'اتصل الآن',
      emailLabel: 'البريد الإلكتروني',
      emailAction: 'أرسل بريداً',
      officesLabel: 'مكاتبنا',
      officesTitle: 'أين تجدنا',
      backLabel: 'العودة للبداية',
      backTitle: 'الرئيسية',
      goHome: 'الصفحة الرئيسية',
    },

    common: {
      explore: 'استكشف',
    },
  },
}
