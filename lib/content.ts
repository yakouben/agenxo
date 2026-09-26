import { catalogServices, solutions } from "./catalog";

// All site copy and imagery lives here — edit this file to rebrand.

export const brand = {
  name: "Agenxo",
  logo: "/agenxo/logo.svg",
  email: "salah@agenxo.com",
  whatsapp: "+213549613663",
  whatsappUrl: "https://wa.me/213549613663",
  maltUrl: "https://www.malt.fr/profile/salaheddinebengharez",
  founder: "Salah Eddine B.",
  founderRole: "Fondateur · Développeur expert Shopify & Shopify Plus",
  city: "Lyon, France",
  founderPhoto: "/salah-agenxo.png",
  badge: "/agenxo/super-malter.png",
};

// Public Malt profile figures (update when they change).
export const malt = {
  rating: "5.0",
  reviews: 52,
  projects: 100,
  responseTime: "12h",
  experience: "6+ ans",
  scores: [
    { label: "Qualité", value: "5.0" },
    { label: "Délai", value: "5.0" },
    { label: "Communication", value: "5.0" },
  ],
};

// The home page is one continuous scroll: every nav entry is a section anchor.
export const nav = [
  { label: "Projets", href: "/#projets" },
  { label: "Avis", href: "/#avis" },
  { label: "Services", href: "/#services", dropdown: "services" as const },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
];

// Canonical site origin, used for SEO metadata, the sitemap and structured data.
export const siteUrl = "https://agenxo.com";

// Home sections in scroll order — drives the progress rail and scroll-spy.
export const homeSections = [
  { id: "accueil", label: "Accueil" },
  { id: "projets", label: "Projets" },
  { id: "avis", label: "Avis" },
  { id: "pourquoi", label: "Pourquoi nous" },
  { id: "services", label: "Services" },
  { id: "secteurs", label: "Secteurs" },
  { id: "blog", label: "Blog" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Par Salah Eddine B. — Supermalter · 5.0 sur 52+ avis Malt",
  // Words wrapped in {braces} render as italic serif pills.
  lines: ["Agence Shopify experte", "du {concept} au {succès},", "de la boutique basique"],
  lastLine: { before: "au store", italic: "sur-mesure" },
  notes: [
    "Agence Shopify qui accompagne e-commerçants et marques, de la startup au groupe international",
    "100+ projets livrés depuis Lyon, pour des marques en France et à l'international",
  ],
  tags: ["Shopify", "E-commerce", "Apps"],
  cta: "Obtenir mon devis",
};

export const reasons = {
  title: { italic: "Agenxo", rest: "est votre partenaire Shopify de confiance" },
  items: [
    "Super Malter 3 — expertise reconnue et certifiée",
    "Agence 100% Shopify — création, refonte, migration et Shopify Plus",
    "ROI visé — chaque projet vise l'augmentation des ventes",
    "Support 7j/7 — accompagnement post-lancement inclus",
  ],
};

export const stats = [
  { value: 100, suffix: "+", label: "Projets réalisés", note: "Des boutiques livrées, du lancement à la refonte" },
  { value: 52, suffix: "+", label: "Avis clients 5 étoiles", note: "Une note de 5.0 sur Malt, sans exception" },
  { value: 12, suffix: "h", label: "Délai de réponse moyen", note: "Un interlocuteur disponible, 7j/7" },
];

export type Project = {
  slug: string;
  name: string;
  tags: string[];
  image: string;
  summary: string;
  // Live website, shown as a "Voir le site" button on the cards.
  url?: string;
  industry: string;
  location: string;
  platform: string;
  challenge: string[];
  results: { value: string; label: string }[];
  // Featured case studies (home showcase) carry richer mockup-driven content.
  featured?: {
    headline: string;
    story: string;
    deliverables: string[];
    // 1 to 3 mockups, shown uncropped at their real proportions.
    gallery: Shot[];
    tint: string;
  };
};

// A mockup screenshot with its pixel size, so it renders without cropping.
export type Shot = { src: string; width: number; height: number };
const shot = (src: string, width: number, height: number): Shot => ({ src, width, height });

// Replace names, tags, summaries and results with your real case studies.
const caseDefaults = {
  location: "France",
  platform: "Shopify",
  challenge: [
    "Présenter l'offre de façon claire et désirable sur mobile comme sur desktop.",
    "Simplifier le parcours d'achat pour réduire les abandons de panier.",
    "Permettre à l'équipe de gérer la boutique en autonomie.",
  ],
  results: [
    { value: "—", label: "Taux de conversion" },
    { value: "—", label: "Vitesse de chargement" },
    { value: "—", label: "Panier moyen" },
  ],
};

export const projects: Project[] = [
  {
    ...caseDefaults,
    slug: "chery-france",
    name: "CHERY France",
    tags: ["Site de marque", "UX/UI"],
    industry: "Automobile",
    platform: "Web sur-mesure",
    image: "/projects-pics/cherry-mock-2.png",
    url: "https://chery-auto.fr",
    summary: "Le site de lancement de CHERY en France : une gamme de SUV hybrides présentée comme une vitrine premium, pensée pour générer des essais.",
    challenge: [
      "Installer une marque encore peu connue en France avec une image premium et rassurante.",
      "Rendre lisible une gamme hybride et hybride rechargeable (Tiggo 4 & Tiggo 7 CSH) sans jargon.",
      "Transformer la visite en demande d'essai ou en contact concession, sur mobile d'abord.",
    ],
    featured: {
      headline: "Lancer une marque auto en France, sans perdre un visiteur en route.",
      story:
        "Hero cinématique, prix et mensualités visibles dès l'arrivée, fiches modèles avec autonomie, consommation et puissance en chiffres clairs. Chaque écran pousse vers une seule action : réserver un essai.",
      deliverables: ["Direction artistique & UI", "Pages modèles Tiggo 4 & 7 CSH", "Parcours essai & concession", "Version mobile-first"],
      gallery: [shot("/projects-pics/cherry-mock-2.png", 1581, 995), shot("/projects-pics/cherry-mockups-2.png", 1448, 1086)],
      tint: "#b9a6e8",
    },
  },
  {
    ...caseDefaults,
    slug: "omoda-jaecoo",
    name: "OMODA | JAECOO",
    tags: ["Site de marque", "Conversion"],
    industry: "Automobile",
    platform: "Web sur-mesure",
    image: "/projects-pics/jaeco2-2.png",
    url: "https://www.omodajaecoo.com",
    summary: "Un site double marque qui met en scène les offres du moment et la technologie hybride, avec l'essai et la concession toujours à portée de clic.",
    challenge: [
      "Faire cohabiter deux marques dans une seule expérience sans diluer leur identité.",
      "Mettre en avant les offres commerciales (loyers offerts) sans sacrifier l'image premium.",
      "Expliquer trois motorisations (SHS-H, SHS-P, 100% électrique) de façon simple et visuelle.",
    ],
    featured: {
      headline: "Deux marques, une seule expérience qui convertit.",
      story:
        "Un slider d'offres plein écran, une barre d'actions flottante Essai · Configurer · Concession présente sur chaque page, et des sections technologie en cartes qui vulgarisent l'hybride et l'électrique.",
      deliverables: ["Slider d'offres commerciales", "Barre d'actions flottante", "Pages technologie SHS-H / SHS-P / EV", "Design system double marque"],
      gallery: [shot("/projects-pics/jaeco2-2.png", 1448, 1086), shot("/projects-pics/jaeco-sec-2.png", 1584, 993)],
      tint: "#a99ae0",
    },
  },
  {
    ...caseDefaults,
    slug: "imphair",
    name: "IMP'hair Professionnel",
    tags: ["Création", "Shopify"],
    industry: "Beauté & cosmétique",
    image: "/projects-pics/imphair-pro-1.png",
    url: "https://www.imphair.pro",
    summary: "Une boutique Shopify de soins capillaires construite autour des routines : on choisit son besoin, on repart avec le trio complet.",
    challenge: [
      "Aider la cliente à trouver le bon soin parmi plusieurs gammes aux packagings proches.",
      "Augmenter le panier moyen en vendant des routines complètes plutôt que des produits isolés.",
      "Offrir une fiche produit rassurante sur mobile : avis, bénéfices, galerie.",
    ],
    featured: {
      headline: "Vendre une routine, pas un flacon.",
      story:
        "Navigation par besoin (Pousse & Croissance, Force & Brillance, Anti-frizz, Nutrition), offre Trio -20 % mise en avant, bandeau cadeau dès 50 € et fiches produit avec avis et bénéfices clés : tout est pensé pour le panier moyen.",
      deliverables: ["Boutique Shopify sur-mesure", "Parcours « Choisissez votre routine »", "Offres bundles Trio -20 %", "Fiches produit mobile-first"],
      gallery: [shot("/projects-pics/imphair-pro-1.png", 1585, 992), shot("/projects-pics/imphair-pro.png", 1661, 947), shot("/projects-pics/imphair-mockphone-2.png", 1448, 1086)],
      tint: "#e5b8e6",
    },
  },
  {
    ...caseDefaults,
    slug: "uniikon",
    name: "UNIIKON",
    tags: ["Création", "Shopify"],
    industry: "Beauté & cosmétique",
    image: "/projects-pics/uniikon1.png",
    url: "https://uniikon.com",
    summary: "Une boutique Shopify haircare pop et girly, pensée pour les temps forts commerciaux et la vente de routines en combo.",
    challenge: [
      "Traduire un univers de marque très coloré sans nuire à la lisibilité de l'offre.",
      "Mettre en avant les opérations saisonnières (codes promo, cadeaux) dès la première seconde.",
      "Pousser les combos de soins pour augmenter le panier moyen.",
    ],
    featured: {
      headline: "Une marque pop, une boutique qui vend.",
      story:
        "Hero événementiel modulable pour chaque campagne, bandeau d'offres défilant, paiement en 3 fois mis en avant et une section « Les combos » qui présente chaque routine avec avis et prix barré : l'identité de marque au service de la conversion.",
      deliverables: ["Boutique Shopify sur-mesure", "Heros de campagne modulables", "Section combos & routines", "Version bilingue FR / EN"],
      gallery: [shot("/projects-pics/uniikon1.png", 1585, 992), shot("/projects-pics/uniikon2.png", 1585, 992)],
      tint: "#f3b4d2",
    },
  },
  {
    ...caseDefaults,
    slug: "ophtalmic-sante",
    name: "Ophtalmic Santé",
    tags: ["Site de marque", "Shopify"],
    industry: "Santé & parapharmacie",
    image: "/projects-pics/ophtalmic-mock.png",
    url: "https://ophtalmic-sante.fr",
    summary: "La boutique d'un laboratoire français expert de la vision depuis 1986 : des soins oculaires présentés avec la rigueur d'une marque santé.",
    challenge: [
      "Inspirer confiance sur un produit de santé, avec un discours scientifique accessible.",
      "Organiser un large catalogue par besoin : sécheresse oculaire, vieillissement visuel, lentilles.",
      "Valoriser l'expertise et les engagements du laboratoire (made in France, RSE).",
    ],
    featured: {
      headline: "La science au service de vos yeux, en quelques clics.",
      story:
        "Une navigation par besoin plutôt que par référence, un hero qui pose l'expertise du laboratoire, et une section « La science au service de vos yeux » qui résume formules, dosages et certifications en six preuves claires.",
      deliverables: ["Boutique Shopify sur-mesure", "Navigation par besoin", "Section preuves & certifications", "Design sobre et médical"],
      gallery: [shot("/projects-pics/ophtalmic-mock.png", 1586, 992), shot("/projects-pics/ophtalmic-mock2.png", 1585, 992)],
      tint: "#8fd8c8",
    },
  },
  {
    ...caseDefaults,
    slug: "rosebaie",
    name: "RoseBaie Paris",
    tags: ["Refonte", "Shopify"],
    industry: "Beauté & cosmétique",
    image: "/projects-pics/rosebaie-mock1.png",
    url: "https://rosebaie.com",
    summary: "Une boutique Shopify de soins capillaires qui guide chaque cliente vers sa cure, du diagnostic à la routine complète.",
    challenge: [
      "Orienter la cliente parmi de nombreuses problématiques capillaires sans la perdre.",
      "Mettre en avant le diagnostic comme point d'entrée du parcours d'achat.",
      "Vendre des routines et coffrets plutôt que des produits isolés.",
    ],
    featured: {
      headline: "Du diagnostic à la cure, un parcours sans friction.",
      story:
        "Des bulles de navigation par problématique (pousse, purification, boucles…) dès le haut de page, un diagnostic toujours accessible, et des onglets « Projet pousse / Anti-casse » qui présentent routines, coffrets et badges de réassurance.",
      deliverables: ["Refonte Shopify", "Navigation par problématique", "Parcours diagnostic", "Routines & coffrets"],
      gallery: [shot("/projects-pics/rosebaie-mock1.png", 1448, 1086), shot("/projects-pics/rosebaie2.png", 1448, 1086)],
      tint: "#9fe3e3",
    },
  },
  { ...caseDefaults, slug: "maison-terre", name: "Maison Terre", tags: ["Création"], industry: "Maison & déco", image: "/agenxo/projects/p1.jpg", summary: "Boutique Shopify réalisée par Agenxo." },
  { ...caseDefaults, slug: "sweet-nabody", name: "Sweet Nabody", tags: ["Création"], industry: "Beauté & cosmétique", image: "/agenxo/projects/p2.png", summary: "Boutique Shopify réalisée par Agenxo." },
  { ...caseDefaults, slug: "miss-musc", name: "Miss Musc", tags: ["Refonte"], industry: "Parfumerie", image: "/agenxo/projects/p3.png", summary: "Boutique Shopify réalisée par Agenxo." },
  { ...caseDefaults, slug: "projet-4", name: "Projet 4", tags: ["Refonte"], industry: "Mode & prêt-à-porter", image: "/agenxo/projects/p4.png", summary: "Boutique Shopify réalisée par Agenxo." },
  { ...caseDefaults, slug: "projet-5", name: "Projet 5", tags: ["App custom"], industry: "Services & réservation", image: "/agenxo/projects/p5.png", summary: "Boutique Shopify réalisée par Agenxo." },
  { ...caseDefaults, slug: "projet-6", name: "Projet 6", tags: ["Création"], industry: "Alimentation", image: "/agenxo/projects/p6.png", summary: "Boutique Shopify réalisée par Agenxo." },
  { ...caseDefaults, slug: "projet-7", name: "Projet 7", tags: ["App custom"], industry: "B2B & grossistes", image: "/agenxo/projects/p7.jpg", summary: "Boutique Shopify réalisée par Agenxo." },
];

// Client reviews from the public Malt profile.
export type Testimonial = { quote: string; highlight: string; name: string; company: string; date: string };

export const testimonials: Testimonial[] = [
  { name: "Julien", company: "AAAEP — CEO", date: "05/2026", highlight: "Je recommande sans réserve pour tout projet Shopify exigeant.", quote: "Le rendu final correspond exactement au cahier des charges, avec une exécution technique propre et un respect du delivery. La maîtrise de Shopify est réelle." },
  { name: "Lamine", company: "LSR Agence", date: "03/2026", highlight: "le développeur le plus investi que nous ayons jamais eu la chance de rencontrer.", quote: "Nous travaillons avec Salah depuis un moment maintenant, et nous pouvons dire sans hésitation qu'il est" },
  { name: "Hiba", company: "Darna Hair", date: "01/2026", highlight: "Je recommande à 100 % les yeux fermés.", quote: "Il est très à l'écoute et sait parfaitement nous guider. Le site est top, moderne et très professionnel." },
  { name: "Quentin", company: "Exquado", date: "11/2025", highlight: "le rendu est génial", quote: "Salah nous a aidé à refondre notre Shopify rapidement et avec beaucoup de professionnalisme," },
  { name: "Louis", company: "Happy Heroes", date: "08/2025", highlight: "Je recommande son travail les yeux fermés.", quote: "Après avoir échangé sur mes attentes, il a immédiatement compris mes besoins et su les retranscrire parfaitement." },
  { name: "Sofiane", company: "The Medina", date: "07/2025", highlight: "le rendu est de niveau Champions League", quote: "J'ai travaillé avec Salah pour le développement de ma boutique Shopify et autant vous dire que" },
  { name: "Zhora", company: "Miss Musc", date: "04/2025", highlight: "Je le recommande à 2000 % !", quote: "La communication a été très fluide, c'est une personne à la fois gentille et à l'écoute." },
  { name: "Nathan", company: "GeoRide", date: "03/2025", highlight: "avec un souci du détail incroyable.", quote: "Salah est super réactif et toujours à l'écoute de nos besoins. Il a su transformer notre page « Acheter » sur Shopify" },
  { name: "Sheherazade", company: "Goïa Professional", date: "03/2025", highlight: "j'ai enfin trouvé la bonne personne : perfectionniste, professionnelle et avec beaucoup de talent.", quote: "Après de multiples échecs avec d'autres personnes," },
  { name: "Gilles Vasken", company: "IKL Company", date: "08/2024", highlight: "le résultat a toujours dépassé nos espérances.", quote: "Salah est un champion. Avec lui, tout se passe avec tranquillité, tout est fait en temps et en heure et" },
  { name: "Saber", company: "Medicaly", date: "01/2024", highlight: "un résultat qui va au-delà de mes attentes.", quote: "Sa créativité et sa rapidité d'exécution ont abouti à" },
  { name: "Sébastien", company: "Time2Go", date: "11/2023", highlight: "Cette mission a largement dépassé mes attentes,", quote: "Je tiens à exprimer ma plus grande satisfaction." },
];

export const clients = [
  "/agenxo/clients/c1.avif",
  "/agenxo/clients/c2.png",
  "/agenxo/clients/c3.png",
  "/agenxo/clients/c4.svg",
  "/agenxo/clients/c5.png",
  "/agenxo/clients/c6.svg",
  "/agenxo/clients/c7.png",
  "/agenxo/clients/c8.svg",
  "/agenxo/clients/c9.svg",
  "/agenxo/clients/c10.svg",
  "/agenxo/clients/c11.svg",
];

export const about = {
  title: { before: "Je ne crée pas des boutiques, je bâtis des", italic: "machines", after: "à vendre" },
  paragraphs: [
    "Je suis Salah Eddine Bengharez, expert Shopify et Shopify Plus, fondateur de l'agence Shopify Agenxo. Reconnu Super Malter 3 — une distinction accordée à moins de 5 % des freelances sur Malt — je transforme les boutiques Shopify sous-performantes en machines à vendre.",
    "Mon atout : une double expertise technique et marketing. Développeur full-stack, je maîtrise Shopify de bout en bout — thèmes, applications, intégrations — et je garde toujours un œil sur ce qui fait vendre.",
    "J'ai accompagné plus de 60 e-commerçants, de la startup au groupe international, dans la création et l'optimisation de leur boutique Shopify. Ce que mes clients apprécient le plus : ma réactivité et ma capacité à transformer un problème technique en opportunité business.",
  ],
  // Offer grouped as on the Malt profile; each group points to its service pages.
  offer: [
    {
      title: "Création & refonte Shopify",
      items: ["Développement de votre boutique Shopify", "Intégration de modules et applications Shopify", "Landing pages Shopify", "Refonte visuelle de votre boutique"],
      href: "/services/creation-boutique-shopify",
    },
    {
      title: "Migration vers Shopify",
      items: ["WordPress vers Shopify", "WooCommerce vers Shopify", "PrestaShop vers Shopify", "Redirections SEO et données préservées"],
      href: "/services/migration-shopify",
    },
    {
      title: "Webmastering Shopify",
      items: ["Optimisation de boutique Shopify", "Intégration de maquettes Figma", "Maintenance, performance et sécurité", "Contenu SEO-friendly et résolution rapide des bugs"],
      href: "/services/maintenance",
    },
    {
      title: "Développement sur-mesure",
      items: ["Applications Shopify custom", "Applications web full-stack", "Développement JavaScript", "Intégrations ERP / CRM"],
      href: "/services/applications-shopify",
    },
  ],
};

// Domains of expertise, as listed on the Malt profile.
export const expertise = ["E-commerce", "Produits de luxe", "Produits de soins et d'entretien", "Commerce de détail", "Commerce de gros"];

export const faq = [
  { q: "Quels services propose Agenxo ?", a: "Création de boutiques Shopify sur mesure, refonte et optimisation de boutiques existantes, et développement d'applications Shopify custom." },
  { q: "Comment Agenxo aborde-t-elle la transformation des entreprises ?", a: "Nous commençons par comprendre votre business et votre marché, puis nous concevons une solution Shopify orientée conversion et croissance." },
  { q: "Quel accompagnement après le lancement ?", a: "Un support 7j/7 est inclus : suivi, corrections, évolutions et formation de votre équipe." },
  { q: "Comment Agenxo assure-t-elle la sécurité des données ?", a: "Migrations de données sécurisées, bonnes pratiques Shopify et accès limités au strict nécessaire." },
];



export const cta = {
  title: "Partenaires de réussite ! Collaborez avec nous",
  text: "Demandez votre devis gratuit et obtenez un plan clair pour votre projet Shopify.",
  button: "Demander un devis",
};

export const footerLinks = [
  { title: "Agence", links: [{ label: "À propos", href: "/a-propos" }, { label: "Projets", href: "/#projets" }, { label: "Tarifs", href: "/tarifs" }, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/#contact" }] },
  { title: "Services", links: catalogServices.filter((x) => x.column === "Shopify").map((x) => ({ label: x.name, href: `/services/${x.slug}` })) },
  { title: "Solutions", links: solutions.map((x) => ({ label: x.name, href: `/solutions/${x.slug}` })) },
];

export const socials = [
  { label: "Malt", href: brand.maltUrl },
  { label: "WhatsApp", href: brand.whatsappUrl },
  { label: "Email", href: `mailto:${brand.email}` },
];
