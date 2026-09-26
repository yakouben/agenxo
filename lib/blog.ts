// Blog articles. Each one targets a search query (see `keywords`) and carries
// its own SEO title, meta description, FAQ (rendered as FAQPage structured data)
// and internal links to case studies and the contact form.

export type Section = { heading: string; body: string[]; list?: string[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  topic: string;
  image: string;
  imageAlt: string;
  author: string;
  published: string; // ISO date
  updated: string; // ISO date
  readTime: string;
  excerpt: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const topics = ["Shopify", "Conversion", "SEO", "Études de cas", "Design", "Développement"];

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const author = "Salah Eddine B.";

export const blogPosts: Post[] = [
  {
    slug: "augmenter-taux-de-conversion-shopify",
    title: "Taux de conversion Shopify : la méthode qui l'a multiplié jusqu'à ×10 chez certains de nos clients",
    metaTitle: "Augmenter le taux de conversion Shopify : méthode complète (jusqu'à ×10)",
    description:
      "Comment augmenter le taux de conversion d'une boutique Shopify : audit, fiche produit, panier, checkout, vitesse. La méthode d'une agence Shopify experte, étape par étape.",
    keywords: ["taux de conversion shopify", "augmenter conversion shopify", "optimisation boutique shopify", "agence shopify conversion"],
    topic: "Conversion",
    image: "/projects-pics/imphair-mockphone-2.png",
    imageAlt: "Parcours d'achat mobile d'une boutique Shopify beauté optimisée pour la conversion",
    author,
    published: "2026-09-18",
    updated: "2026-09-24",
    readTime: "11 min",
    excerpt:
      "Plus de trafic ne sert à rien si la boutique ne convertit pas. Voici la méthode que nous appliquons sur chaque projet Shopify, et pourquoi elle a parfois multiplié la conversion par dix.",
    sections: [
      {
        heading: "Pourquoi le taux de conversion est le levier n°1",
        body: [
          "Doubler son trafic coûte cher : publicité, contenu, influence. Doubler son taux de conversion, lui, double le chiffre d'affaires avec le même budget d'acquisition. C'est pour cela que chaque projet Agenxo commence par la conversion, pas par le design.",
          "Sur certains projets, partis d'une boutique qui ne convertissait presque plus, nous avons vu le taux de conversion multiplié jusqu'à dix sur des parcours précis. Ce n'est pas de la magie : c'est ce qui arrive quand on supprime, une par une, les frictions qui empêchent un visiteur motivé d'acheter.",
        ],
      },
      {
        heading: "Étape 1 : mesurer avant de toucher quoi que ce soit",
        body: [
          "Une optimisation sans mesure est une opinion. Avant toute modification, nous vérifions que le suivi est fiable : événements d'ajout au panier, de début de checkout et d'achat, séparés entre mobile et desktop.",
          "On construit ensuite l'entonnoir complet pour trouver l'étape où la boutique perd le plus de monde. C'est là, et seulement là, que l'on commence.",
        ],
        list: [
          "Taux d'ajout au panier par page produit",
          "Taux d'abandon entre panier et checkout",
          "Taux de conversion mobile vs desktop",
          "Pages de sortie les plus fréquentes",
        ],
      },
      {
        heading: "Étape 2 : une promesse claire en moins de 5 secondes",
        body: [
          "Un visiteur décide très vite s'il reste. La page d'accueil et les pages de collection doivent répondre immédiatement à trois questions : qu'est-ce que vous vendez, pour qui, et pourquoi chez vous plutôt qu'ailleurs.",
          "Sur la boutique IMP'hair, par exemple, nous avons remplacé une navigation par type de produit par une navigation par besoin (« Pousse & Croissance », « Nutrition & Hydratation »). La cliente ne cherche pas un shampoing : elle cherche une solution à son problème.",
        ],
      },
      {
        heading: "Étape 3 : des fiches produit qui répondent aux objections",
        body: [
          "La fiche produit est votre meilleur vendeur. Elle doit rassurer autant qu'elle donne envie : visuels en situation, bénéfices avant caractéristiques, avis clients visibles, délais et retours affichés près du bouton d'achat.",
          "La règle que nous appliquons : chaque question qu'un client pose au service client doit avoir sa réponse sur la fiche produit.",
        ],
      },
      {
        heading: "Étape 4 : augmenter le panier moyen sans agresser",
        body: [
          "Les bundles et les routines complètes augmentent le panier moyen parce qu'ils simplifient le choix. Un « Trio » à prix réduit convertit souvent mieux que trois produits vendus séparément.",
          "Un seuil de livraison offerte ou de cadeau (« offert dès 50 € d'achat ») affiché en permanence donne aussi une raison concrète d'ajouter un article.",
        ],
      },
      {
        heading: "Étape 5 : un checkout sans friction",
        body: [
          "Chaque champ, chaque surprise sur les frais de port, chaque redirection fait perdre des commandes. Nous activons les paiements express (Shop Pay, Apple Pay, Google Pay), affichons les frais de livraison tôt et supprimons tout ce qui distrait entre le panier et le paiement.",
        ],
      },
      {
        heading: "Étape 6 : la vitesse, surtout sur mobile",
        body: [
          "Une boutique lente perd des ventes avant même d'avoir été vue. Nous visons de bons Core Web Vitals sur mobile : images compressées et dimensionnées, applications inutiles supprimées, scripts tiers chargés au bon moment.",
          "La vitesse améliore aussi le référencement naturel : c'est un double gain.",
        ],
      },
      {
        heading: "Étape 7 : tester, garder ce qui marche, recommencer",
        body: [
          "L'optimisation de la conversion n'est pas un projet, c'est une routine. Une hypothèse, une modification, une mesure. Les gains s'additionnent : c'est leur cumul, bien plus qu'une seule idée brillante, qui produit les résultats spectaculaires.",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est un bon taux de conversion pour une boutique Shopify ?",
        a: "Il dépend fortement du secteur, du panier moyen et de la source de trafic. Plutôt qu'un chiffre universel, comparez-vous à vous-même : l'objectif est de progresser mois après mois sur chaque étape de l'entonnoir.",
      },
      {
        q: "Combien de temps pour voir les effets d'une optimisation de conversion ?",
        a: "Les corrections de friction évidentes (checkout, vitesse, fiches produit) se voient généralement en quelques semaines. Les tests plus fins demandent assez de trafic pour être significatifs.",
      },
      {
        q: "Faut-il une refonte complète pour améliorer la conversion ?",
        a: "Pas toujours. Un audit identifie souvent des gains rapides sur la boutique existante. La refonte devient pertinente quand le thème ou la structure bloquent les améliorations.",
      },
    ],
    related: [
      { label: "Voir le site IMP'hair Professionnel", href: "https://www.imphair.pro" },
      { label: "Anatomie d'une fiche produit Shopify qui vend", href: "/blog/fiche-produit-shopify-qui-vend" },
    ],
  },
  {
    slug: "agence-shopify-comment-choisir",
    title: "Agence Shopify : comment choisir la bonne pour votre marque en 2026",
    metaTitle: "Agence Shopify : comment choisir la meilleure en 2026 (guide complet)",
    description:
      "Comment choisir une agence Shopify en France : critères, questions à poser, signaux d'alerte, budget. Le guide complet pour trouver l'expert Shopify qui fera vraiment vendre votre boutique.",
    keywords: ["agence shopify", "agence shopify france", "expert shopify", "meilleure agence shopify", "freelance shopify"],
    topic: "Shopify",
    image: "/projects-pics/cherry-mock-2.png",
    imageAlt: "Site de marque réalisé par une agence Shopify experte, affiché sur un ordinateur portable",
    author,
    published: "2026-09-10",
    updated: "2026-09-24",
    readTime: "9 min",
    excerpt:
      "Portfolio, méthode, spécialisation, accompagnement : les critères qui séparent une agence Shopify qui livre un joli site d'une agence qui fait vraiment vendre.",
    sections: [
      {
        heading: "Une agence Shopify, pour quoi faire ?",
        body: [
          "Shopify permet d'ouvrir une boutique seul en quelques heures. Mais entre une boutique en ligne et une boutique qui vend, il y a la stratégie, le design orienté conversion, le développement sur-mesure et l'optimisation continue. C'est là qu'une agence Shopify experte fait la différence.",
        ],
      },
      {
        heading: "Critère 1 : une spécialisation réelle sur Shopify",
        body: [
          "Une agence qui fait « aussi » du Shopify n'aura pas la même profondeur qu'un spécialiste. Demandez combien de boutiques Shopify elle a livrées, si elle développe des thèmes et des applications sur-mesure (Liquid, Shopify Functions, API), et si elle connaît Shopify Plus.",
        ],
      },
      {
        heading: "Critère 2 : des résultats, pas seulement des captures d'écran",
        body: [
          "Un beau portfolio ne dit rien des ventes. Demandez des études de cas : quel était le problème, qu'a-t-on changé, qu'est-ce que cela a produit. Une bonne agence parle de conversion, de panier moyen et de vitesse autant que de design.",
        ],
      },
      {
        heading: "Critère 3 : des avis vérifiables",
        body: [
          "Les avis publiés sur une plateforme tierce (Malt, Google, Shopify Partners) valent plus que les témoignages choisis sur le site de l'agence. Chez Agenxo, plus de 52 avis clients 5 étoiles sont publics sur Malt, avec une note de 5.0.",
        ],
      },
      {
        heading: "Critère 4 : un interlocuteur qui connaît votre projet",
        body: [
          "Dans beaucoup d'agences, le commercial qui vous vend le projet n'est pas la personne qui le réalise. Vérifiez qui sera votre interlocuteur au quotidien, et s'il comprend le code autant que votre business.",
        ],
      },
      {
        heading: "Les questions à poser avant de signer",
        body: ["Ces questions révèlent vite le niveau réel d'une agence Shopify :"],
        list: [
          "Comment allez-vous mesurer le succès du projet ?",
          "Qui possède le code et les accès à la fin du projet ?",
          "Comment gérez-vous le SEO lors d'une migration ou d'une refonte ?",
          "Que se passe-t-il après la mise en ligne : support, corrections, évolutions ?",
          "Pouvez-vous me montrer une boutique comparable à la mienne ?",
        ],
      },
      {
        heading: "Les signaux d'alerte",
        body: [
          "Un devis envoyé sans avoir posé de questions, une promesse de résultats chiffrés garantis, une accumulation d'applications payantes pour tout, ou l'absence de méthode de mesure : autant de signes qu'il vaut mieux continuer à chercher.",
        ],
      },
      {
        heading: "Agence, freelance ou studio : que choisir ?",
        body: [
          "Un freelance expert offre souvent la réactivité et un interlocuteur unique ; une grande agence apporte des équipes nombreuses mais plus de coordination. Le bon choix dépend de la taille du projet. Notre modèle combine les deux : un expert Shopify reconnu qui pilote le projet de bout en bout, entouré des bons profils quand c'est nécessaire.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien coûte une agence Shopify ?",
        a: "Selon le périmètre, un projet va de quelques milliers d'euros pour une boutique sur thème personnalisé à plusieurs dizaines de milliers pour un site sur-mesure avec intégrations. Un devis détaillé doit toujours précéder l'engagement.",
      },
      {
        q: "Faut-il être Shopify Partner pour être une bonne agence ?",
        a: "Le statut de partenaire est un bon signe, mais il ne remplace pas les études de cas et les avis clients vérifiables.",
      },
      {
        q: "Une agence Shopify peut-elle reprendre une boutique existante ?",
        a: "Oui. Nous commençons alors par un audit technique et conversion pour décider entre optimisation progressive et refonte.",
      },
    ],
    related: [
      { label: "Nos projets", href: "/#projets" },
      { label: "Création de boutique Shopify : prix et délais", href: "/blog/creation-boutique-shopify-prix-delais" },
    ],
  },
  {
    slug: "creation-boutique-shopify-prix-delais",
    title: "Création de boutique Shopify : prix, délais et étapes en 2026",
    metaTitle: "Création boutique Shopify : prix, délais et étapes (2026)",
    description:
      "Combien coûte la création d'une boutique Shopify en 2026 ? Budgets par type de projet, délais réalistes et étapes clés, expliqués par un expert Shopify.",
    keywords: ["création boutique shopify", "prix site shopify", "création site shopify", "combien coûte une boutique shopify"],
    topic: "Shopify",
    image: "/agenxo/projects/p2.png",
    imageAlt: "Boutique Shopify beauté créée sur-mesure",
    author,
    published: "2026-08-30",
    updated: "2026-09-20",
    readTime: "8 min",
    excerpt: "Thème personnalisé, sur-mesure ou Shopify Plus : ce que coûte vraiment une boutique Shopify, et ce qui fait varier le prix.",
    sections: [
      {
        heading: "Ce qui fait varier le prix d'une boutique Shopify",
        body: ["Deux boutiques peuvent coûter du simple au décuple. Les principaux facteurs :"],
        list: [
          "Thème du marché personnalisé ou design entièrement sur-mesure",
          "Nombre de gabarits de pages (accueil, collection, produit, contenus)",
          "Fonctionnalités spécifiques : configurateur, abonnement, B2B, multi-langue",
          "Intégrations : ERP, CRM, logistique, outils marketing",
          "Migration de données depuis une autre plateforme",
        ],
      },
      {
        heading: "Les fourchettes de budget",
        body: [
          "À titre indicatif, une boutique sur thème personnalisé démarre autour de 2 000 €, un projet avec design sur-mesure se situe généralement entre 5 000 € et 10 000 €, et les projets avec développement spécifique ou Shopify Plus dépassent souvent 10 000 €.",
          "Ajoutez l'abonnement Shopify et les éventuelles applications payantes : un bon prestataire vous aide à les limiter au strict nécessaire.",
        ],
      },
      {
        heading: "Les délais réalistes",
        body: [
          "Comptez généralement quelques semaines pour une boutique sur thème personnalisé, et deux à trois mois pour un projet sur-mesure. Le facteur qui retarde le plus un projet n'est pas le développement : ce sont les contenus (photos, textes, fiches produit) qui arrivent tard.",
        ],
      },
      {
        heading: "Les étapes d'un projet réussi",
        body: ["Chez Agenxo, chaque création suit le même chemin :"],
        list: [
          "Atelier de cadrage : cible, offre, objectifs chiffrés",
          "Architecture et parcours d'achat",
          "Maquettes mobile d'abord, puis desktop",
          "Développement, intégrations et contenus",
          "Recette, SEO technique et mise en ligne",
          "Formation de votre équipe et support 7j/7",
        ],
      },
      {
        heading: "Où ne pas faire d'économies",
        body: [
          "La fiche produit, le checkout et la vitesse mobile. Ce sont les trois zones qui décident de vos ventes : un euro investi ici rapporte plus que partout ailleurs.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on créer une boutique Shopify soi-même ?",
        a: "Oui, pour démarrer. Un expert devient rentable quand vous voulez une image de marque forte, un parcours d'achat optimisé ou des fonctionnalités spécifiques.",
      },
      {
        q: "Le prix inclut-il l'abonnement Shopify ?",
        a: "Non, l'abonnement est payé directement à Shopify. Le devis couvre la conception, le développement, la mise en ligne et l'accompagnement.",
      },
      {
        q: "Peut-on payer en plusieurs fois ?",
        a: "Oui, le paiement est généralement échelonné selon les étapes du projet.",
      },
    ],
    related: [
      { label: "Demander un devis gratuit", href: "/#contact" },
      { label: "Comment choisir son agence Shopify", href: "/blog/agence-shopify-comment-choisir" },
    ],
  },
  {
    slug: "seo-shopify-guide-complet",
    title: "SEO Shopify : le guide complet pour se positionner sur Google",
    metaTitle: "SEO Shopify : guide complet pour se positionner sur Google (2026)",
    description:
      "Le guide SEO Shopify complet : structure des collections, balises, vitesse, données structurées, contenu et netlinking. Les bonnes pratiques d'une agence Shopify experte.",
    keywords: ["seo shopify", "référencement shopify", "shopify google", "optimiser seo shopify"],
    topic: "SEO",
    image: "/agenxo/projects/p1.jpg",
    imageAlt: "Boutique Shopify optimisée pour le référencement naturel",
    author,
    published: "2026-08-14",
    updated: "2026-09-20",
    readTime: "12 min",
    excerpt: "Shopify gère une partie du SEO technique pour vous. Le reste, qui fait la différence, dépend de vous : voici tout ce qu'il faut savoir.",
    sections: [
      {
        heading: "Ce que Shopify fait déjà pour votre SEO",
        body: [
          "Shopify génère automatiquement un sitemap.xml, des balises canoniques et un fichier robots.txt, et fournit un hébergement rapide avec certificat SSL. C'est une bonne base, mais ce n'est pas une stratégie.",
        ],
      },
      {
        heading: "Structurer les collections autour des recherches",
        body: [
          "Vos collections sont vos pages les plus puissantes en SEO. Nommez-les avec les mots que vos clients tapent dans Google, ajoutez un texte d'introduction utile et évitez les collections quasi identiques qui se concurrencent entre elles.",
        ],
      },
      {
        heading: "Titres, méta-descriptions et URL",
        body: ["Pour chaque page importante :"],
        list: [
          "Un titre SEO unique qui contient la requête principale",
          "Une méta-description qui donne envie de cliquer",
          "Une URL courte et lisible",
          "Un seul H1, puis des H2 qui structurent le contenu",
          "Des textes alternatifs descriptifs sur les images",
        ],
      },
      {
        heading: "La vitesse : un critère SEO et de conversion",
        body: [
          "Les Core Web Vitals font partie des signaux de classement de Google. Sur Shopify, les principaux ennemis de la vitesse sont les applications accumulées, les images trop lourdes et les scripts tiers. Un audit régulier s'impose.",
        ],
      },
      {
        heading: "Les données structurées",
        body: [
          "Les données structurées Product (prix, disponibilité, avis) permettent d'afficher des résultats enrichis dans Google, qui attirent davantage de clics. Vérifiez que votre thème les génère correctement, et complétez avec FAQ et Breadcrumb quand c'est pertinent.",
        ],
      },
      {
        heading: "Le contenu : blog et guides d'achat",
        body: [
          "Les fiches produit se positionnent sur des requêtes transactionnelles. Pour capter les recherches en amont (« comment choisir… », « meilleur… pour… »), un blog et des guides d'achat sont indispensables. Chaque article doit renvoyer vers les collections concernées.",
        ],
      },
      {
        heading: "Migration et refonte : ne rien perdre",
        body: [
          "Une refonte mal préparée peut effacer des années de référencement. La règle : lister toutes les URL existantes, créer les redirections 301 dans Shopify, conserver les contenus qui se positionnent, puis surveiller la Search Console pendant les semaines qui suivent.",
        ],
      },
    ],
    faq: [
      {
        q: "Shopify est-il bon pour le SEO ?",
        a: "Oui. La plateforme gère les bases techniques ; la différence se fait sur la structure, le contenu, la vitesse et les liens.",
      },
      {
        q: "Peut-on modifier le robots.txt sur Shopify ?",
        a: "Oui, via le fichier robots.txt.liquid du thème. À manipuler avec précaution.",
      },
      {
        q: "Combien de temps pour voir des résultats SEO ?",
        a: "Le SEO est un investissement de moyen terme : les premiers effets apparaissent souvent en quelques mois, et se renforcent ensuite.",
      },
    ],
    related: [
      { label: "Refonte Shopify sans perdre son SEO", href: "/blog/refonte-shopify-quand-et-comment" },
      { label: "Parler de votre projet", href: "/#contact" },
    ],
  },
  {
    slug: "refonte-shopify-quand-et-comment",
    title: "Refonte Shopify : 7 signes qu'il est temps, et la méthode pour ne rien perdre",
    metaTitle: "Refonte Shopify : 7 signes qu'il est temps et la bonne méthode",
    description:
      "Quand faut-il refondre sa boutique Shopify ? Les 7 signes qui ne trompent pas, et la méthode pour réussir sa refonte sans perdre ni ventes ni référencement.",
    keywords: ["refonte shopify", "refonte boutique shopify", "migration shopify", "nouveau thème shopify"],
    topic: "Shopify",
    image: "/projects-pics/jaeco2-2.png",
    imageAlt: "Nouvelle version d'un site de marque après refonte",
    author,
    published: "2026-07-28",
    updated: "2026-09-18",
    readTime: "8 min",
    excerpt: "Conversion en baisse, boutique lente, marque qui a évolué : comment savoir s'il faut optimiser ou tout repenser, et comment s'y prendre.",
    sections: [
      {
        heading: "Les 7 signes qu'une refonte s'impose",
        body: ["Si vous vous reconnaissez dans trois de ces situations ou plus, il est temps d'en parler :"],
        list: [
          "Le trafic est stable mais les ventes baissent",
          "La boutique est lente, surtout sur mobile",
          "Chaque modification demande un développeur",
          "Les applications se sont accumulées et se contredisent",
          "Le design ne reflète plus votre marque ni vos prix",
          "Le parcours mobile est une version réduite du desktop",
          "Votre thème n'est plus maintenu",
        ],
      },
      {
        heading: "Optimiser ou refondre ?",
        body: [
          "Si la structure est saine, une série d'optimisations ciblées suffit souvent. Si le thème, l'architecture ou la dette technique bloquent chaque amélioration, la refonte coûte moins cher que de continuer à rafistoler.",
        ],
      },
      {
        heading: "La méthode pour une refonte sans risque",
        body: [
          "Nous partons toujours des données : quelles pages vendent, lesquelles se positionnent sur Google, où les visiteurs abandonnent. La nouvelle boutique conserve ce qui fonctionne et corrige le reste.",
          "Côté SEO, chaque ancienne URL reçoit sa redirection 301, les contenus qui se positionnent sont conservés, et la Search Console est surveillée après la mise en ligne.",
        ],
      },
      {
        heading: "Ce que la refonte doit apporter",
        body: [
          "Une refonte réussie se mesure : taux de conversion, panier moyen, vitesse, autonomie de votre équipe. Fixez ces objectifs avant de commencer, et vérifiez-les après.",
        ],
      },
    ],
    faq: [
      {
        q: "Une refonte fait-elle perdre le référencement ?",
        a: "Pas si elle est bien préparée : redirections 301, conservation des contenus performants et suivi post-lancement.",
      },
      {
        q: "Combien de temps dure une refonte Shopify ?",
        a: "Généralement de quelques semaines à trois mois selon l'ampleur du projet.",
      },
    ],
    related: [
      { label: "Voir le site OMODA | JAECOO", href: "https://www.omodajaecoo.com" },
      { label: "Le guide SEO Shopify", href: "/blog/seo-shopify-guide-complet" },
    ],
  },
  {
    slug: "shopify-vs-woocommerce-vs-prestashop",
    title: "Shopify vs WooCommerce vs PrestaShop : quelle plateforme choisir en 2026 ?",
    metaTitle: "Shopify vs WooCommerce vs PrestaShop : le comparatif 2026",
    description:
      "Shopify, WooCommerce ou PrestaShop ? Comparatif honnête : coûts, maintenance, sécurité, évolutivité, SEO. Pour choisir la bonne plateforme e-commerce en 2026.",
    keywords: ["shopify vs woocommerce", "shopify ou prestashop", "meilleure plateforme e-commerce", "migrer vers shopify"],
    topic: "Shopify",
    image: "/agenxo/projects/p5.png",
    imageAlt: "Comparatif des plateformes e-commerce Shopify, WooCommerce et PrestaShop",
    author,
    published: "2026-07-10",
    updated: "2026-09-15",
    readTime: "9 min",
    excerpt: "Trois plateformes, trois philosophies. Le comparatif sans langue de bois pour choisir en fonction de votre business, pas de la mode.",
    sections: [
      {
        heading: "Trois philosophies différentes",
        body: [
          "Shopify est une solution hébergée : la plateforme gère serveurs, sécurité et mises à jour. WooCommerce est une extension de WordPress que vous hébergez vous-même. PrestaShop est une solution open source, historiquement très présente en France, également auto-hébergée.",
        ],
      },
      {
        heading: "Coût total, pas seulement le prix affiché",
        body: [
          "WooCommerce et PrestaShop sont gratuits à installer, mais l'hébergement, les modules, la maintenance et la sécurité ont un coût réel. Shopify fonctionne par abonnement, avec une maintenance technique quasi nulle. Sur deux ou trois ans, l'écart est souvent bien plus faible qu'on ne l'imagine.",
        ],
      },
      {
        heading: "Maintenance et sécurité",
        body: [
          "C'est le point où Shopify se distingue le plus : pas de mises à jour de serveur, pas de failles de plugins à corriger en urgence. Votre équipe se concentre sur la vente plutôt que sur la technique.",
        ],
      },
      {
        heading: "Évolutivité",
        body: [
          "Shopify encaisse les pics de trafic (soldes, lancements, passages médias) sans intervention, et Shopify Plus répond aux besoins des marques à fort volume. Les solutions auto-hébergées demandent de dimensionner et surveiller l'infrastructure.",
        ],
      },
      {
        heading: "Quand choisir autre chose que Shopify",
        body: [
          "Si votre projet repose sur une logique très spécifique que ni les applications ni le développement sur-mesure Shopify ne peuvent couvrir, ou si vous avez une équipe technique interne dédiée, une solution auto-hébergée peut se justifier.",
        ],
      },
      {
        heading: "Notre recommandation",
        body: [
          "Pour la grande majorité des marques qui veulent vendre plus sans gérer de technique, Shopify est le meilleur compromis entre rapidité, fiabilité et potentiel de croissance. C'est pour cela que nous en avons fait notre spécialité.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on migrer de WooCommerce ou PrestaShop vers Shopify ?",
        a: "Oui : produits, clients et commandes peuvent être migrés, avec des redirections 301 pour préserver le référencement.",
      },
      {
        q: "Shopify convient-il aux petites boutiques ?",
        a: "Oui, c'est même l'une des solutions les plus simples pour démarrer, tout en pouvant évoluer avec vous.",
      },
    ],
    related: [
      { label: "Création de boutique Shopify : prix et délais", href: "/blog/creation-boutique-shopify-prix-delais" },
      { label: "Nos services", href: "/#services" },
    ],
  },
  {
    slug: "etude-de-cas-imphair-vendre-des-routines",
    title: "Étude de cas IMP'hair : vendre des routines, pas des produits",
    metaTitle: "Étude de cas Shopify beauté : IMP'hair Professionnel",
    description:
      "Comment nous avons conçu la boutique Shopify d'IMP'hair Professionnel autour des routines capillaires : navigation par besoin, bundles et fiches produit mobile-first.",
    keywords: ["étude de cas shopify", "boutique shopify beauté", "shopify cosmétique", "bundle shopify"],
    topic: "Études de cas",
    image: "/projects-pics/imphair-mockphone-2.png",
    imageAlt: "Boutique Shopify IMP'hair Professionnel sur trois écrans de smartphone",
    author,
    published: "2026-09-05",
    updated: "2026-09-24",
    readTime: "6 min",
    excerpt: "Plusieurs gammes, des packagings proches, une cliente qui hésite : comment nous avons transformé un catalogue en parcours de choix.",
    sections: [
      {
        heading: "Le point de départ",
        body: [
          "IMP'hair Professionnel propose des soins capillaires répartis en plusieurs gammes aux packagings volontairement proches. Pour une cliente qui arrive sur le site, le risque est simple : ne pas savoir quoi choisir, et repartir sans rien acheter.",
        ],
      },
      {
        heading: "Une navigation par besoin",
        body: [
          "Nous avons construit l'expérience autour de la question que se pose vraiment la cliente : « Choisissez votre routine ». Pousse & Croissance, Force & Brillance, Protection & Anti-frizz, Nutrition & Hydratation : chaque besoin mène à une sélection courte et claire.",
        ],
      },
      {
        heading: "Des routines complètes plutôt que des produits isolés",
        body: [
          "L'offre Trio à prix réduit rend l'achat de la routine complète plus simple et plus avantageux que l'achat produit par produit. C'est bon pour la cliente, qui obtient de meilleurs résultats, et pour le panier moyen.",
        ],
      },
      {
        heading: "Des fiches produit pensées pour le mobile",
        body: [
          "Fil d'Ariane, galerie complète, note et nombre d'avis visibles, bénéfices clés en liste : tout ce qui rassure est au-dessus de la ligne de flottaison sur smartphone, là où se fait l'essentiel du trafic beauté.",
        ],
      },
      {
        heading: "Ce qu'il faut retenir",
        body: [
          "En beauté, le client n'achète pas un produit : il achète un résultat. Structurer la boutique autour des besoins et des routines est l'un des leviers de conversion les plus puissants que nous connaissons.",
        ],
      },
    ],
    faq: [
      {
        q: "Comment créer des bundles sur Shopify ?",
        a: "Via les fonctionnalités natives de Shopify ou une application dédiée, selon la logique de prix et de stock souhaitée. Nous choisissons la solution la plus légère pour chaque cas.",
      },
    ],
    related: [
      { label: "Voir le site IMP'hair", href: "https://www.imphair.pro" },
      { label: "Augmenter le taux de conversion Shopify", href: "/blog/augmenter-taux-de-conversion-shopify" },
    ],
  },
  {
    slug: "site-marque-automobile-chery-omoda-jaecoo",
    title: "Sites de marques automobiles : ce que CHERY et OMODA | JAECOO nous ont appris",
    metaTitle: "Site de marque automobile : les leçons des lancements CHERY et OMODA | JAECOO",
    description:
      "Lancer une marque automobile en France sur le web : prix visibles, fiches modèles lisibles, parcours essai et concession. Les enseignements des projets CHERY et OMODA | JAECOO.",
    keywords: ["site marque automobile", "création site automobile", "ux automobile", "génération de leads automobile"],
    topic: "Études de cas",
    image: "/projects-pics/cherry-mockups-2.png",
    imageAlt: "Site CHERY France sur trois écrans de smartphone",
    author,
    published: "2026-08-22",
    updated: "2026-09-24",
    readTime: "7 min",
    excerpt: "Dans l'automobile, le site ne vend pas la voiture : il vend l'essai. Voici comment nous avons conçu deux lancements de marque autour de cette idée.",
    sections: [
      {
        heading: "Le site ne vend pas la voiture, il vend l'essai",
        body: [
          "Personne n'achète un SUV en un clic. L'objectif d'un site de marque automobile est de transformer la curiosité en demande d'essai ou en contact concession. Chaque écran doit y mener.",
        ],
      },
      {
        heading: "CHERY : installer une marque nouvelle en France",
        body: [
          "Pour une marque encore peu connue du public français, la confiance passe par la transparence. Nous avons affiché le prix et la mensualité dès l'arrivée sur la page modèle, et traduit la technique hybride en chiffres simples : autonomie, consommation, puissance, volume de coffre.",
        ],
      },
      {
        heading: "OMODA | JAECOO : deux marques, une expérience",
        body: [
          "Le défi était de faire cohabiter deux identités sans diluer ni l'une ni l'autre. Un slider d'offres plein écran met en avant les opérations commerciales, et une barre d'actions flottante (Essai, Configurer, Concession) reste accessible sur chaque page.",
          "Les motorisations hybride, hybride rechargeable et 100 % électrique sont expliquées en cartes visuelles plutôt qu'en fiches techniques.",
        ],
      },
      {
        heading: "Les principes que nous retenons",
        body: ["Ces principes valent pour tout produit à forte réflexion d'achat :"],
        list: [
          "Afficher le prix tôt plutôt que le cacher",
          "Traduire la technique en bénéfices chiffrés",
          "Garder l'action principale toujours visible",
          "Concevoir pour le mobile en premier",
        ],
      },
    ],
    faq: [
      {
        q: "Ces principes s'appliquent-ils à une boutique Shopify ?",
        a: "Oui. Tout produit à achat réfléchi (mobilier, high-tech, services) bénéficie d'un prix transparent, de bénéfices clairs et d'une action principale toujours accessible.",
      },
    ],
    related: [
      { label: "Voir le site CHERY France", href: "https://chery-auto.fr" },
      { label: "Voir le site OMODA | JAECOO", href: "https://www.omodajaecoo.com" },
    ],
  },
  {
    slug: "fiche-produit-shopify-qui-vend",
    title: "Anatomie d'une fiche produit Shopify qui vend",
    metaTitle: "Fiche produit Shopify : l'anatomie d'une page qui vend",
    description:
      "Les éléments d'une fiche produit Shopify performante : visuels, titre, prix, bénéfices, avis, réassurance et FAQ. La check-list d'un expert Shopify.",
    keywords: ["fiche produit shopify", "page produit shopify", "optimiser fiche produit", "conversion fiche produit"],
    topic: "Design",
    image: "/agenxo/projects/p4.png",
    imageAlt: "Fiche produit Shopify optimisée pour la conversion",
    author,
    published: "2026-06-30",
    updated: "2026-09-12",
    readTime: "6 min",
    excerpt: "La fiche produit est votre meilleur vendeur. Voici, élément par élément, ce qui la fait vendre.",
    sections: [
      {
        heading: "Au-dessus de la ligne de flottaison",
        body: ["Sur mobile, le premier écran doit contenir l'essentiel :"],
        list: [
          "Un visuel produit net, puis des photos en situation",
          "Un titre clair qui dit ce qu'est le produit",
          "Le prix, et l'économie si le produit est en offre",
          "La note et le nombre d'avis",
          "Le bouton d'ajout au panier",
        ],
      },
      {
        heading: "Les bénéfices avant les caractéristiques",
        body: [
          "Le client n'achète pas une composition ou une fiche technique : il achète ce que le produit va changer pour lui. Commencez par trois bénéfices courts, détaillez ensuite.",
        ],
      },
      {
        heading: "La réassurance au bon endroit",
        body: [
          "Délais de livraison, retours, paiement sécurisé : ces informations doivent être visibles près du bouton d'achat, pas cachées en bas de page.",
        ],
      },
      {
        heading: "Une FAQ qui lève les derniers doutes",
        body: [
          "Reprenez les questions réellement posées au service client. Une bonne FAQ produit améliore la conversion et fournit du contenu utile pour le référencement.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de photos mettre sur une fiche produit ?",
        a: "Assez pour que le client se projette : plusieurs angles, un détail de matière ou de texture et au moins une photo en situation.",
      },
    ],
    related: [
      { label: "Augmenter le taux de conversion Shopify", href: "/blog/augmenter-taux-de-conversion-shopify" },
      { label: "Étude de cas IMP'hair", href: "/blog/etude-de-cas-imphair-vendre-des-routines" },
    ],
  },
  {
    slug: "application-shopify-sur-mesure",
    title: "Application Shopify sur-mesure : quand est-ce vraiment rentable ?",
    metaTitle: "Application Shopify sur-mesure : quand est-ce rentable ?",
    description:
      "Application publique ou développement Shopify sur-mesure ? Les cas où une app custom devient un avantage concurrentiel, et comment calculer sa rentabilité.",
    keywords: ["application shopify sur mesure", "développeur shopify", "app shopify custom", "développement shopify"],
    topic: "Développement",
    image: "/agenxo/projects/p7.jpg",
    imageAlt: "Développement d'une application Shopify sur-mesure",
    author,
    published: "2026-06-12",
    updated: "2026-09-10",
    readTime: "7 min",
    excerpt: "Accumuler les abonnements ou investir dans une app qui vous ressemble : comment trancher.",
    sections: [
      {
        heading: "Quand les applications publiques suffisent",
        body: [
          "Pour les besoins courants (avis, emails, fidélité), les applications du Shopify App Store sont rapides à installer et maintenues par leurs éditeurs. C'est souvent le bon choix pour démarrer.",
        ],
      },
      {
        heading: "Quand le sur-mesure s'impose",
        body: ["Une application sur-mesure devient pertinente quand :"],
        list: [
          "Votre processus métier est spécifique (devis, B2B, personnalisation)",
          "Vous devez connecter Shopify à vos outils internes",
          "Plusieurs applications payantes se chevauchent et ralentissent la boutique",
          "L'expérience client que vous visez n'existe pas en application publique",
        ],
      },
      {
        heading: "Calculer la rentabilité",
        body: [
          "Additionnez le coût des abonnements remplacés sur deux ou trois ans, le gain de vitesse et le temps économisé par votre équipe. Une app sur-mesure est souvent rentabilisée plus vite qu'on ne le pense.",
        ],
      },
    ],
    faq: [
      {
        q: "Qui possède le code d'une application sur-mesure ?",
        a: "Cela doit être défini noir sur blanc dans le contrat : exigez d'être propriétaire du code et des accès à la fin du projet.",
      },
    ],
    related: [
      { label: "Nos services Shopify", href: "/#services" },
      { label: "Parler de votre projet", href: "/#contact" },
    ],
  },
];
