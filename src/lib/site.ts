export const siteConfig = {
  name: "Ouidesign",
  url: "https://ouidesign.ma",
  phone: "+212 649 055 897",
  whatsappNumber: "212649055897",
  email: "contact@ouidesign.ma",
  location: "Maroc",
  description:
    "Ouidesign conçoit, rénove et intègre des villas, riads et espaces de vie intelligents haut de gamme au Maroc.",
};

export const defaultWhatsappMessage =
  "Bonjour Ouidesign, je souhaite parler de mon projet de villa au Maroc.";

export function whatsappHref(message = defaultWhatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/expertises", label: "Expertises" },
  { href: "/collection", label: "Collection" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/devis", label: "Devis" },
];

export type ServiceSummary = {
  title: string;
  href: string;
  kicker: string;
  description: string;
};

export const mainServices: ServiceSummary[] = [
  {
    title: "Rénovation Villas & Riads",
    href: "/renovation-villa-marrakech",
    kicker: "Patrimoine privé",
    description:
      "Transformation complète de villas, riads et maisons d’hôtes avec une lecture architecturale, technique et esthétique du lieu.",
  },
  {
    title: "Architecture Intérieure",
    href: "/expertises#architecture-interieure",
    kicker: "Volumes et matières",
    description:
      "Plans, ambiances, finitions et circulation pensés pour une villa fluide, contemporaine et profondément confortable.",
  },
  {
    title: "Menuiserie Sur Mesure",
    href: "/menuiserie-sur-mesure-marrakech",
    kicker: "Atelier précis",
    description:
      "Dressings, portes, bibliothèques, panneaux muraux et solutions intégrées dessinés pour l’espace et fabriqués avec exigence.",
  },
  {
    title: "Cuisines Premium",
    href: "/collection#cuisines-premium",
    kicker: "Cuisine signature",
    description:
      "Cuisines élégantes, ergonomiques et robustes, avec quincaillerie premium, rangements intelligents et finitions nobles.",
  },
  {
    title: "Mobilier Intelligent",
    href: "/collection",
    kicker: "Fonction invisible",
    description:
      "Lift Bar, Mini Lift Bar, bureaux assis-debout et mobilier motorisé pour des intérieurs qui gagnent en liberté.",
  },
  {
    title: "Piscines & Locaux Techniques",
    href: "/piscine-local-technique-marrakech",
    kicker: "Eau maîtrisée",
    description:
      "Création, rénovation, filtration, locaux techniques, éclairage et maintenance pensée dès la conception.",
  },
  {
    title: "Smart Home & Domotique",
    href: "/smart-home-marrakech",
    kicker: "Maison intelligente",
    description:
      "Scénarios lumière, climatisation, stores, audio, accès et énergie réunis dans une expérience simple et fiable.",
  },
  {
    title: "Sécurité & Caméras",
    href: "/camera-surveillance-marrakech",
    kicker: "Protection discrète",
    description:
      "Caméras, contrôle d’accès, alarmes et supervision réseau intégrés sans perturber l’architecture de la propriété.",
  },
  {
    title: "Climatisation",
    href: "/climatisation-marrakech",
    kicker: "Confort thermique",
    description:
      "Dimensionnement, pose et intégration de systèmes de climatisation adaptés au climat de Marrakech et aux villas haut de gamme.",
  },
  {
    title: "Solaire & Infrastructure",
    href: "/solaire-villa-marrakech",
    kicker: "Autonomie raisonnée",
    description:
      "Préparation électrique, solaire, réseau, baies techniques et infrastructure durable pour une villa prête pour demain.",
  },
];

export const authorityPillars = [
  {
    title: "Architecture",
    description:
      "Une lecture claire des volumes, des matières et des usages pour créer une maison belle, apaisée et cohérente.",
  },
  {
    title: "Intelligence",
    description:
      "Des systèmes connectés qui servent le confort quotidien sans complexifier la vie des occupants.",
  },
  {
    title: "Infrastructure",
    description:
      "Des réseaux, locaux techniques, protections et équipements pensés pour durer dans le climat de Marrakech.",
  },
];

export const collectionItems = [
  {
    title: "Lift Bar",
    description:
      "Un bar escamotable et motorisé qui révèle la réception au bon moment et préserve la pureté de l’espace.",
  },
  {
    title: "Mini Lift Bar",
    description:
      "Une version compacte pour suites, salons privés, riads et villas Airbnb où chaque détail compte.",
  },
  {
    title: "Bureau assis-debout",
    description:
      "Un poste de travail premium, silencieux et réglable, pensé pour les villas qui accueillent aussi le travail nomade.",
  },
  {
    title: "Cuisines premium",
    description:
      "Des cuisines sur mesure où rangements, ergonomie, matériaux et appareils s’alignent dans une vraie pièce de vie.",
  },
];

export const processSteps = [
  {
    title: "Diagnostic",
    description:
      "Visite, contraintes, usage, état technique, potentiel architectural et priorités d’investissement.",
  },
  {
    title: "Conception",
    description:
      "Direction esthétique, plans, matériaux, systèmes intégrés, scénarios techniques et arbitrages budgétaires.",
  },
  {
    title: "Réalisation",
    description:
      "Coordination des corps de métier, fabrication, installation, suivi de chantier et respect des détails validés.",
  },
  {
    title: "Finition",
    description:
      "Réglages, alignements, éclairage, domotique, essais techniques et finitions visibles ou invisibles.",
  },
  {
    title: "Suivi",
    description:
      "Accompagnement après livraison, ajustements, maintenance et conseils pour préserver la valeur de la propriété.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  highlights: string[];
  deliverables: string[];
  faq: FaqItem[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "renovation-villa-marrakech",
    title: "Rénovation villa Marrakech",
    metaTitle: "Rénovation villa à Marrakech",
    metaDescription:
      "Rénovation haut de gamme de villas, riads et maisons d’hôtes à Marrakech, avec architecture intérieure, technique et finitions premium.",
    h1: "Rénovation de villas et riads haut de gamme à Marrakech",
    eyebrow: "Villas, riads, maisons d’hôtes",
    intro:
      "Ouidesign accompagne les propriétaires qui veulent transformer une villa existante en lieu de vie premium, confortable, techniquement fiable et adapté aux usages contemporains.",
    highlights: [
      "Lecture architecturale et technique avant travaux",
      "Coordination des lots intérieurs, extérieurs et techniques",
      "Finitions, menuiserie, cuisine, piscine et domotique intégrées",
    ],
    deliverables: [
      "Diagnostic complet de la propriété",
      "Direction esthétique et choix matériaux",
      "Organisation du chantier et suivi des finitions",
      "Préparation des systèmes smart home et infrastructure",
    ],
    faq: [
      {
        question: "Ouidesign rénove-t-il des villas déjà habitées ?",
        answer:
          "Oui. Le phasage dépend de l’ampleur des travaux, des zones à isoler et des contraintes de confort pendant le chantier.",
      },
      {
        question: "Pouvez-vous intervenir sur un riad ancien ?",
        answer:
          "Oui, avec une attention particulière aux structures, circulations, patios, humidité, réseaux et finitions adaptées au bâti existant.",
      },
      {
        question: "La domotique peut-elle être prévue dès la rénovation ?",
        answer:
          "Oui. C’est même le meilleur moment pour anticiper câblage, réseau, sécurité, climatisation, éclairage et scénarios d’usage.",
      },
    ],
  },
  {
    slug: "menuiserie-sur-mesure-marrakech",
    title: "Menuiserie sur mesure Marrakech",
    metaTitle: "Menuiserie sur mesure à Marrakech",
    metaDescription:
      "Menuiserie premium pour villas et riads à Marrakech : dressings, portes, panneaux muraux, bibliothèques et rangements intégrés.",
    h1: "Menuiserie sur mesure pour villas premium à Marrakech",
    eyebrow: "Bois, détails, intégration",
    intro:
      "La menuiserie Ouidesign donne à l’intérieur sa précision : portes alignées, dressings élégants, rangements discrets et éléments intégrés au dessin global.",
    highlights: [
      "Conception adaptée aux volumes et aux usages",
      "Matériaux, quincaillerie et finitions sélectionnés",
      "Intégration avec éclairage, domotique et mobilier intelligent",
    ],
    deliverables: [
      "Dressings et rangements sur mesure",
      "Portes, habillages muraux et bibliothèques",
      "Meubles TV, têtes de lit et solutions intégrées",
      "Plans techniques et suivi de fabrication",
    ],
    faq: [
      {
        question: "La menuiserie est-elle dessinée pour chaque projet ?",
        answer:
          "Oui. Les dimensions, usages, finitions et détails sont adaptés à la villa ou au riad concerné.",
      },
      {
        question: "Pouvez-vous intégrer de l’éclairage dans les meubles ?",
        answer:
          "Oui. Les rubans LED, capteurs, prises et scénarios d’éclairage peuvent être anticipés dans le dessin.",
      },
      {
        question: "Intervenez-vous uniquement sur de grandes rénovations ?",
        answer:
          "Non. Ouidesign peut accompagner un projet ciblé de dressing, cuisine, bibliothèque ou mobilier intégré.",
      },
    ],
  },
  {
    slug: "smart-home-marrakech",
    title: "Smart home Marrakech",
    metaTitle: "Smart Home et domotique à Marrakech",
    metaDescription:
      "Domotique premium pour villas à Marrakech : lumière, climat, stores, accès, sécurité, audio, réseau et scénarios intelligents.",
    h1: "Smart home et domotique pour villas à Marrakech",
    eyebrow: "Confort invisible",
    intro:
      "Ouidesign conçoit des maisons intelligentes où la technologie disparaît derrière des gestes simples, des scénarios fiables et une infrastructure correctement préparée.",
    highlights: [
      "Scénarios lumière, climatisation, stores et accès",
      "Réseau, Wi-Fi, baie technique et sécurité",
      "Interface claire pour propriétaires, invités et équipes",
    ],
    deliverables: [
      "Audit des besoins et des équipements existants",
      "Plan réseau et câblage basse tension",
      "Programmation des scénarios de confort",
      "Tests, formation et accompagnement après installation",
    ],
    faq: [
      {
        question: "La domotique est-elle adaptée aux locations Airbnb ?",
        answer:
          "Oui. Les accès, climatisation, caméras autorisées, éclairage et scénarios peuvent simplifier l’accueil et l’exploitation.",
      },
      {
        question: "Faut-il rénover toute la villa pour installer la domotique ?",
        answer:
          "Non, mais une rénovation permet une intégration plus propre, plus fiable et plus évolutive.",
      },
      {
        question: "Pouvez-vous reprendre une installation existante ?",
        answer:
          "Oui. Ouidesign peut auditer le réseau, les modules, l’interface et proposer une remise en ordre progressive.",
      },
    ],
  },
  {
    slug: "camera-surveillance-marrakech",
    title: "Caméra surveillance Marrakech",
    metaTitle: "Caméras de surveillance à Marrakech",
    metaDescription:
      "Installation de caméras, alarmes et contrôle d’accès pour villas, riads et maisons d’hôtes à Marrakech.",
    h1: "Sécurité et caméras pour villas à Marrakech",
    eyebrow: "Protection discrète",
    intro:
      "La sécurité d’une villa premium doit être efficace sans alourdir l’architecture. Ouidesign intègre caméras, réseau, accès et supervision avec sobriété.",
    highlights: [
      "Caméras extérieures et intérieures positionnées avec soin",
      "Contrôle d’accès, alarmes et réseau sécurisé",
      "Supervision adaptée aux propriétaires, managers et équipes",
    ],
    deliverables: [
      "Étude des accès, angles morts et zones sensibles",
      "Choix des caméras, enregistreurs et stockage",
      "Installation propre et intégration au réseau",
      "Configuration mobile et accompagnement utilisateur",
    ],
    faq: [
      {
        question: "Peut-on consulter les caméras à distance ?",
        answer:
          "Oui, sous réserve d’une configuration réseau correcte et d’un accès sécurisé pour les personnes autorisées.",
      },
      {
        question: "Les caméras peuvent-elles rester discrètes ?",
        answer:
          "Oui. Le positionnement, la couleur, le câblage et les supports sont pensés pour limiter l’impact visuel.",
      },
      {
        question: "Travaillez-vous aussi sur les alarmes ?",
        answer:
          "Oui. Les alarmes, détecteurs et contrôles d’accès peuvent être intégrés au dispositif global.",
      },
    ],
  },
  {
    slug: "climatisation-marrakech",
    title: "Climatisation Marrakech",
    metaTitle: "Climatisation pour villa à Marrakech",
    metaDescription:
      "Climatisation premium pour villas à Marrakech : dimensionnement, intégration, confort thermique et coordination technique.",
    h1: "Climatisation premium pour villas à Marrakech",
    eyebrow: "Confort thermique",
    intro:
      "Dans le climat de Marrakech, la climatisation doit être puissante, silencieuse, bien dimensionnée et intégrée à l’architecture intérieure.",
    highlights: [
      "Dimensionnement selon volumes, orientation et usage",
      "Intégration esthétique des unités et passages techniques",
      "Compatibilité avec domotique, énergie et maintenance",
    ],
    deliverables: [
      "Audit thermique des espaces",
      "Sélection des systèmes adaptés",
      "Coordination des réservations et passages",
      "Tests, réglages et conseils d’entretien",
    ],
    faq: [
      {
        question: "Quelle climatisation choisir pour une grande villa ?",
        answer:
          "Le choix dépend des volumes, de l’isolation, de l’exposition, du niveau sonore attendu et de la stratégie de maintenance.",
      },
      {
        question: "La climatisation peut-elle être pilotée par domotique ?",
        answer:
          "Oui. Elle peut être intégrée à des scénarios de confort, d’économie d’énergie et de gestion à distance.",
      },
      {
        question: "Intervenez-vous sur des installations existantes ?",
        answer:
          "Oui. Ouidesign peut auditer, remplacer, déplacer ou améliorer une installation selon son état et ses limites.",
      },
    ],
  },
  {
    slug: "piscine-local-technique-marrakech",
    title: "Piscine local technique Marrakech",
    metaTitle: "Piscine et local technique à Marrakech",
    metaDescription:
      "Conception et rénovation de piscines, locaux techniques, filtration, éclairage et intégration pour villas à Marrakech.",
    h1: "Piscines et locaux techniques pour villas à Marrakech",
    eyebrow: "Eau, filtration, précision",
    intro:
      "Une belle piscine commence souvent dans un local technique bien pensé. Ouidesign coordonne esthétique, hydraulique, filtration, éclairage et maintenance.",
    highlights: [
      "Création ou rénovation de bassins",
      "Organisation claire du local technique",
      "Filtration, éclairage, traitement et accès maintenance",
    ],
    deliverables: [
      "Diagnostic bassin et équipements",
      "Conception du local technique",
      "Coordination hydraulique et électrique",
      "Essais, réglages et passation d’usage",
    ],
    faq: [
      {
        question: "Pouvez-vous rénover une piscine existante ?",
        answer:
          "Oui. Le projet peut inclure revêtement, éclairage, filtration, local technique, margelles et remise à niveau des équipements.",
      },
      {
        question: "Pourquoi le local technique est-il important ?",
        answer:
          "Il conditionne la qualité de filtration, l’accès maintenance, la sécurité électrique et la longévité des équipements.",
      },
      {
        question: "La piscine peut-elle être intégrée à la domotique ?",
        answer:
          "Oui. Certains équipements peuvent être pilotés ou supervisés selon les besoins et les solutions retenues.",
      },
    ],
  },
  {
    slug: "solaire-villa-marrakech",
    title: "Solaire villa Marrakech",
    metaTitle: "Solaire et infrastructure pour villa à Marrakech",
    metaDescription:
      "Solutions solaires et infrastructure technique pour villas à Marrakech : énergie, réseau, baie technique et préparation durable.",
    h1: "Solaire et infrastructure technique pour villas à Marrakech",
    eyebrow: "Autonomie et préparation",
    intro:
      "Ouidesign prépare les villas haut de gamme à une gestion plus intelligente de l’énergie, du réseau et des équipements critiques.",
    highlights: [
      "Préparation électrique et solaire",
      "Baie technique, réseau, Wi-Fi et protections",
      "Coordination avec climatisation, piscine, sécurité et domotique",
    ],
    deliverables: [
      "Audit des besoins énergétiques",
      "Préconisation solaire et infrastructure",
      "Organisation des tableaux, protections et réseaux",
      "Intégration dans une vision technique globale",
    ],
    faq: [
      {
        question: "Le solaire convient-il aux villas de Marrakech ?",
        answer:
          "Oui, mais il doit être étudié selon les usages, la toiture, l’orientation, la puissance nécessaire et la stratégie de stockage.",
      },
      {
        question: "Ouidesign installe-t-il aussi le réseau informatique ?",
        answer:
          "Oui. Réseau, Wi-Fi, baie technique et câblage peuvent être pensés avec l’énergie et la domotique.",
      },
      {
        question: "Peut-on préparer une villa maintenant pour évoluer plus tard ?",
        answer:
          "Oui. Les réservations, gaines, tableaux et réseaux peuvent être anticipés pour faciliter les extensions futures.",
      },
    ],
  },
];

export const serviceRoutes = servicePages.map((service) => `/${service.slug}`);

export const staticRoutes = [
  "/",
  "/expertises",
  "/collection",
  "/realisations",
  "/devis",
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
