// Services, solutions, industries and pricing. Placeholder copy — customise freely.

export type CatalogService = {
  slug: string;
  name: string;
  column: "Shopify" | "Design" | "Développement";
  short: string;
  heroTitle: string;
  heroText: string;
  features: { title: string; text: string }[];
};

const f = (title: string, text: string) => ({ title, text });

export const serviceColumns = ["Shopify", "Design", "Développement"] as const;

export const catalogServices: CatalogService[] = [
  // Shopify
  { slug: "creation-boutique-shopify", column: "Shopify", name: "Création de boutique", short: "Votre store Shopify, de zéro au lancement",
    heroTitle: "Création de boutique Shopify", heroText: "Nous concevons et développons votre boutique Shopify sur-mesure : design, catalogue, paiements, expéditions et SEO, prêts à vendre dès le premier jour.",
    features: [f("Design sur-mesure", "Une interface unique, pensée pour votre marque et vos clients."), f("Catalogue prêt", "Import produits, variantes et collections structurées."), f("Paiements & livraisons", "Configuration complète des moyens de paiement et transporteurs."), f("SEO technique", "Structure, balises et vitesse optimisées dès le lancement.")] },
  { slug: "refonte-optimisation", column: "Shopify", name: "Refonte de boutique", short: "Transformez un store qui stagne",
    heroTitle: "Refonte de boutique Shopify", heroText: "Votre boutique ne convertit plus ? Nous auditons, repensons et reconstruisons votre store pour qu'il redevienne une machine à vendre.",
    features: [f("Audit complet", "UX, performances, tunnel d'achat : tout est passé au crible."), f("Design orienté conversion", "Chaque page est repensée pour guider vers l'achat."), f("Vitesse", "Temps de chargement réduits, Core Web Vitals au vert."), f("Migration sécurisée", "Aucune perte de données, de SEO ni de commandes.")] },
  { slug: "migration-shopify", column: "Shopify", name: "Migration vers Shopify", short: "Quittez WordPress, WooCommerce ou PrestaShop sereinement",
    heroTitle: "Migration vers Shopify", heroText: "WordPress, WooCommerce ou PrestaShop : nous migrons vos produits, clients, commandes et redirections SEO vers Shopify, sans interruption de vos ventes.",
    features: [f("Données complètes", "Produits, clients, historiques de commandes."), f("Redirections 301", "Votre référencement est préservé."), f("Zéro interruption", "Bascule planifiée, boutique toujours en ligne."), f("Recette", "Tests complets avant mise en production.")] },
  { slug: "theme-sur-mesure", column: "Shopify", name: "Thème sur-mesure", short: "Un thème Online Store 2.0 unique",
    heroTitle: "Développement de thème Shopify sur-mesure", heroText: "Un thème Shopify 2.0 développé pour vous : sections modulables, performances maximales et autonomie totale pour votre équipe.",
    features: [f("Sections modulables", "Éditez vos pages sans toucher au code."), f("Performances", "Un code léger, sans dépendances inutiles."), f("Accessibilité", "Un store utilisable par tous."), f("Formation", "Votre équipe devient autonome.")] },
  { slug: "shopify-plus", column: "Shopify", name: "Shopify Plus", short: "Pour les marques à fort volume",
    heroTitle: "Accompagnement Shopify Plus", heroText: "Checkout personnalisé, automatisations Flow, multi-boutiques et B2B : nous exploitons tout le potentiel de Shopify Plus.",
    features: [f("Checkout extensibility", "Un tunnel d'achat adapté à vos règles."), f("Shopify Flow", "Vos opérations automatisées."), f("Multi-marchés", "Langues, devises et boutiques d'expansion."), f("B2B", "Catalogues et prix dédiés aux professionnels.")] },
  // Design
  { slug: "ui-ux-ecommerce", column: "Design", name: "UI/UX e-commerce", short: "Des parcours d'achat sans friction",
    heroTitle: "Design UI/UX e-commerce", heroText: "Nous concevons des parcours d'achat clairs et désirables, testés sur mobile comme sur desktop.",
    features: [f("Recherche utilisateur", "Comprendre vos clients avant de dessiner."), f("Wireframes", "Structure validée avant le design final."), f("Maquettes Figma", "Des écrans pixel-perfect, intégrés fidèlement sur Shopify."), f("Prototype", "Testez le parcours avant le développement.")] },
  { slug: "identite-de-marque", column: "Design", name: "Identité de marque", short: "Une marque cohérente et mémorable",
    heroTitle: "Création d'identité de marque", heroText: "Logo, couleurs, typographies et univers visuel : nous construisons une marque cohérente sur votre boutique et vos réseaux.",
    features: [f("Logo", "Un symbole simple et reconnaissable."), f("Charte graphique", "Couleurs, typographies, règles d'usage."), f("Packaging", "Une expérience de marque jusqu'à la livraison."), f("Kit réseaux sociaux", "Des templates prêts à publier.")] },
  { slug: "landing-page", column: "Design", name: "Landing page", short: "Des pages qui convertissent vos campagnes",
    heroTitle: "Landing pages Shopify", heroText: "Des pages de vente dédiées à vos lancements et campagnes publicitaires, conçues pour maximiser la conversion.",
    features: [f("Message clair", "Une promesse, une action."), f("Preuve sociale", "Avis, chiffres et garanties mis en avant."), f("A/B testing", "Chaque variante mesurée."), f("Vitesse", "Chargement instantané, même sur mobile.")] },
  { slug: "audit-ux", column: "Design", name: "Audit UX", short: "Identifiez ce qui bloque vos ventes",
    heroTitle: "Audit UX de boutique Shopify", heroText: "Un diagnostic complet de votre boutique avec une liste d'actions priorisées par impact sur vos ventes.",
    features: [f("Analyse heuristique", "Les frictions identifiées page par page."), f("Données analytics", "Où vos visiteurs abandonnent-ils ?"), f("Benchmark", "Ce que font les meilleurs de votre secteur."), f("Plan d'action", "Des recommandations priorisées.")] },
  { slug: "fiches-produits", column: "Design", name: "Fiches produits", short: "Des pages produit qui donnent envie",
    heroTitle: "Design de fiches produits", heroText: "Visuels, contenus, variantes et réassurance : nous transformons vos fiches produits en vendeurs silencieux.",
    features: [f("Galeries", "Photos, vidéos et zoom soignés."), f("Contenu", "Des descriptions qui répondent aux objections."), f("Upsell", "Produits complémentaires et bundles."), f("Réassurance", "Livraison, retours, avis visibles.")] },
  // Développement
  { slug: "applications-shopify", column: "Développement", name: "Applications custom", short: "Une fonctionnalité unique ? On la développe",
    heroTitle: "Développement d'applications Shopify", heroText: "Réservation, configurateurs 3D, personnalisation produit, fidélité : nous développons les applications qui font la différence.",
    features: [f("Réservation", "Créneaux, stocks et rappels automatiques."), f("Configurateurs 3D", "Vos clients visualisent avant d'acheter."), f("Personnalisation", "Gravure, textes, options sur-mesure."), f("Fidélité & parrainage", "Faites revenir vos clients.")] },
  { slug: "integrations-erp-crm", column: "Développement", name: "Intégrations ERP/CRM", short: "Connectez Shopify à vos outils",
    heroTitle: "Intégrations ERP et CRM", heroText: "Nous connectons Shopify à votre ERP, CRM, logistique et comptabilité pour des opérations fluides et sans ressaisie.",
    features: [f("ERP", "Stocks et commandes synchronisés."), f("CRM", "Vos données clients centralisées."), f("Logistique", "Expéditions automatisées."), f("Comptabilité", "Factures et exports automatiques.")] },
  { slug: "optimisation-vitesse", column: "Développement", name: "Optimisation vitesse", short: "Une boutique plus rapide vend plus",
    heroTitle: "Optimisation de la vitesse Shopify", heroText: "Nous réduisons le temps de chargement de votre boutique pour améliorer votre conversion et votre référencement.",
    features: [f("Audit Core Web Vitals", "LCP, CLS et INP mesurés."), f("Nettoyage des apps", "Scripts inutiles supprimés."), f("Images", "Formats modernes et chargement différé."), f("Code du thème", "Liquid et JavaScript allégés.")] },
  { slug: "seo-technique", column: "Développement", name: "SEO technique", short: "Soyez trouvé sur Google",
    heroTitle: "SEO technique Shopify", heroText: "Structure, données structurées, maillage et performances : nous posons les fondations d'un référencement durable.",
    features: [f("Structure", "Collections et URLs optimisées."), f("Données structurées", "Rich snippets produits et avis."), f("Maillage interne", "Vos pages clés renforcées."), f("Suivi", "Search Console et reporting mensuel.")] },
  { slug: "maintenance", column: "Développement", name: "Maintenance & support", short: "Un accompagnement 7j/7",
    heroTitle: "Maintenance et support Shopify", heroText: "Maintenance régulière, sécurité, résolution rapide des bugs et évolutions : un expert Shopify disponible 7j/7 pour que votre boutique ne s'arrête jamais.",
    features: [f("Support 7j/7", "Une réponse rapide, même le week-end."), f("Évolutions", "Nouvelles fonctionnalités au fil de l'eau."), f("Monitoring", "Problèmes détectés avant vos clients."), f("Conseil", "Un regard expert sur vos décisions.")] },
];

export type Solution = { slug: string; name: string; audience: string; short: string; heroTitle: string; heroText: string };

export const solutions: Solution[] = [
  { slug: "lancement", name: "Lancement de boutique", audience: "Pour les nouvelles marques", short: "Lancez un store prêt à vendre et à convaincre",
    heroTitle: "Lancez votre boutique Shopify", heroText: "De l'idée au premier client : stratégie, design, développement et mise en ligne, avec un expert Shopify à chaque étape." },
  { slug: "refonte", name: "Refonte e-commerce", audience: "Pour les boutiques établies", short: "Un nouveau design, une meilleure conversion",
    heroTitle: "Refondez votre boutique e-commerce", heroText: "Nous repensons votre store existant pour améliorer l'expérience client, la vitesse et le taux de conversion." },
  { slug: "expert-dedie", name: "Expert dédié", audience: "Pour les équipes e-commerce", short: "Un développeur Shopify intégré à votre équipe",
    heroTitle: "Un expert Shopify dédié", heroText: "Renforcez votre équipe avec un développeur Shopify expérimenté, disponible au mois, sans recrutement." },
];

// Domains of expertise, as listed on the Malt profile.
export type Industry = {
  slug: string;
  name: string;
  // Used in sentences: "Boutiques Shopify pour {audience}".
  audience: string;
  short: string;
  tags: string[];
  features: { title: string; text: string }[];
  // Project slugs (lib/content.ts) shown as references on the sector page.
  projects: string[];
};

export const industries: Industry[] = [
  {
    slug: "e-commerce", name: "E-commerce", audience: "les e-commerçants",
    short: "Des boutiques en ligne pensées pour convertir, du lancement à la croissance",
    tags: ["Tunnel d'achat", "Conversion", "Fidélisation"],
    features: [f("Tunnel d'achat optimisé", "Un parcours court et rassurant, de la fiche produit au paiement."), f("Upsell & bundles", "Routines, packs et produits complémentaires pour augmenter le panier moyen."), f("Fidélisation", "Programmes de points, parrainage et relances automatisées."), f("Pilotage", "Analytics et tableaux de bord pour suivre ce qui fait vendre.")],
    projects: ["uniikon", "rosebaie", "imphair"],
  },
  {
    slug: "produits-de-luxe", name: "Produits de luxe", audience: "les produits de luxe",
    short: "Une expérience d'achat à la hauteur de l'image de votre marque",
    tags: ["Image premium", "Storytelling", "Coffrets"],
    features: [f("Direction artistique premium", "Typographies, photos et animations au niveau de votre marque."), f("Storytelling", "Savoir-faire, origine et matières mis en scène."), f("Coffrets & personnalisation", "Gravure, emballage cadeau et éditions limitées."), f("Service client haut de gamme", "Prise de rendez-vous, conseil et suivi personnalisé.")],
    projects: ["miss-musc", "maison-terre"],
  },
  {
    slug: "produits-de-soins", name: "Produits de soins et d'entretien", audience: "les produits de soins et d'entretien",
    short: "Des routines claires et des fiches produits qui rassurent",
    tags: ["Routines", "Diagnostic", "Abonnements"],
    features: [f("Navigation par besoin", "Vos clients trouvent le bon soin selon leur problématique."), f("Diagnostic & quiz", "Une recommandation personnalisée qui mène à la routine complète."), f("Abonnements", "Réassort automatique pour les produits du quotidien."), f("Réassurance", "Composition, avis et bénéfices visibles dès la fiche produit.")],
    projects: ["imphair", "uniikon", "rosebaie", "ophtalmic-sante"],
  },
  {
    slug: "commerce-de-detail", name: "Commerce de détail", audience: "le commerce de détail",
    short: "Un catalogue riche, des stocks synchronisés et des points de vente connectés",
    tags: ["Catalogue", "Click & collect", "Omnicanal"],
    features: [f("Catalogue structuré", "Collections, filtres et recherche pour un grand nombre de références."), f("Click & collect", "Retrait en magasin et stocks par point de vente."), f("Omnicanal", "Boutique en ligne et magasins physiques synchronisés."), f("Promotions", "Offres, codes et temps forts commerciaux faciles à piloter.")],
    projects: ["chery-france", "omoda-jaecoo", "ophtalmic-sante"],
  },
  {
    slug: "commerce-de-gros", name: "Commerce de gros", audience: "le commerce de gros",
    short: "Catalogues pros, prix dédiés et commandes en volume",
    tags: ["Espace pro", "Prix dédiés", "ERP"],
    features: [f("Espace professionnel", "Accès réservé, catalogues et conditions par client."), f("Prix & paliers", "Tarifs dédiés, remises par quantité et minimums de commande."), f("Commande rapide", "Réassort en quelques clics, devis et paiement différé."), f("Intégration ERP", "Stocks, commandes et factures synchronisés.")],
    projects: ["imphair", "projet-7"],
  },
];

export const processSteps = [
  { title: "Découverte", text: "Un appel pour comprendre votre business, vos clients et vos objectifs." },
  { title: "Stratégie", text: "Arborescence, parcours d'achat et priorités définis ensemble." },
  { title: "Design", text: "Maquettes Figma validées écran par écran." },
  { title: "Développement", text: "Intégration Shopify, apps et tests sur tous les appareils." },
  { title: "Lancement", text: "Mise en ligne, formation de votre équipe et suivi des premiers résultats." },
  { title: "Croissance", text: "Optimisations continues et support 7j/7." },
];

export const pricing = {
  design: [
    { name: "Essentiel", people: 1, text: "Idéal pour un premier lancement ou une page clé", price: "Sur devis", items: ["Design de pages clés", "1 aller-retour de révision", "Livraison Figma"] },
    { name: "Croissance", people: 2, text: "Pour les marques qui veulent un design complet", price: "Sur devis", items: ["Boutique complète", "Design system", "Révisions illimitées"] },
    { name: "Premium", people: 3, text: "Pour un accompagnement design continu", price: "Sur devis", items: ["Designer dédié", "Tests utilisateurs", "Support prioritaire"] },
  ],
  dev: [
    { name: "Essentiel", people: 1, text: "Mise en place rapide d'une boutique Shopify", price: "Sur devis", items: ["Thème personnalisé", "Configuration complète", "Formation"] },
    { name: "Croissance", people: 2, text: "Boutique sur-mesure et intégrations", price: "Sur devis", items: ["Thème sur-mesure", "Apps & intégrations", "SEO technique"] },
    { name: "Premium", people: 3, text: "Développeur Shopify dédié au mois", price: "Sur devis", items: ["Développeur dédié", "Évolutions continues", "Support 7j/7"] },
  ],
};

export const principles = [
  { title: "Comprendre avant de construire", text: "Chaque projet commence par votre business, pas par un template." },
  { title: "Responsabilité totale", text: "Nous nous engageons sur les résultats, pas seulement sur les livrables." },
  { title: "Décisions guidées par les données", text: "Analytics, tests et retours clients orientent chaque choix." },
];
