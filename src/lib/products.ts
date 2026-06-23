export type Review = {
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
};

export type ProductData = {
  slug: string;
  images: string[];
  imageAlt: string;
  fit: string;
  tagline: string;
  details: string[];
  reviews: Review[];
};

export const productData: ProductData[] = [
  {
    slug: "lift-bar",
    images: ["/images/liftbar.png", "/images/liftbar-catalog.jpg"],
    imageAlt: "Lift Bar Ouidesign — bar motorisé laque noir pour villa Marrakech",
    fit: "object-cover",
    tagline: "Le silence est le nouveau luxe.",
    details: [
      "Laque Piano Noir Intense — 7 couches polissage main",
      "Intérieur Miroir Fumé & éclairage LED 3000K",
      "Vérin électrique silencieux — ouverture < 30 dB",
      "Accueil bouteilles, verrerie & espace de réception",
      "Dimensions sur mesure — s'adapte à votre espace",
      "Livraison & installation incluses à Marrakech",
    ],
    reviews: [
      {
        author: "Karim B.",
        location: "Palmeraie, Marrakech",
        rating: 5,
        text: "Impressionnant. Nos invités sont stupéfaits à chaque soirée. Le mécanisme est d'une silenciosité parfaite et la laque noire est d'une profondeur rare.",
        date: "Mars 2026",
      },
      {
        author: "Sophie M.",
        location: "Hivernage, Marrakech",
        rating: 5,
        text: "Exactement ce que je cherchais pour ma villa : un objet qui disparaît et se révèle. Qualité irréprochable, livraison soignée et équipe très professionnelle.",
        date: "Janvier 2026",
      },
      {
        author: "Youssef A.",
        location: "Guéliz, Marrakech",
        rating: 5,
        text: "Le Lift Bar est devenu la pièce signature de mon salon. Investissement justifié, service client au top, et le résultat dépasse les attentes.",
        date: "Novembre 2025",
      },
    ],
  },
  {
    slug: "mini-lift-bar",
    images: ["/images/mini-liftbar.png", "/images/mini-liftbar-catalog.jpg"],
    imageAlt: "Mini Lift Bar Vert Sarcelle — version compacte pour suite ou riad",
    fit: "object-cover",
    tagline: "Le silence devient une signature.",
    details: [
      "Laque Vert Sarcelle intense — finition haute brillance",
      "Plateaux en verre et miroir — LED ambiance 3000K",
      "Vérin électrique ultra-silencieux — ouverture < 30 dB",
      "Format compact — idéal suites, riads & Airbnb",
      "Coloris personnalisables sur commande",
      "Livraison & installation incluses à Marrakech",
    ],
    reviews: [
      {
        author: "Nadia R.",
        location: "Riad, Médina de Marrakech",
        rating: 5,
        text: "Parfait pour ma suite VIP. Le vert sarcelle s'harmonise parfaitement avec mes murs en tadelakt. Mes clients Airbnb en parlent dans tous leurs avis.",
        date: "Avril 2026",
      },
      {
        author: "Thomas L.",
        location: "Route de l'Ourika",
        rating: 5,
        text: "Format idéal pour notre villa de location. Le rapport qualité-prix est excellent et l'effet sur les clients est immédiat.",
        date: "Février 2026",
      },
    ],
  },
  {
    slug: "bar-vintage",
    images: ["/images/bar-vintage-side.jpg", "/images/bar-vintage.png", "/images/bar-vintage-closed.jpg"],
    imageAlt: "Bar Vintage Ouidesign — fût de chêne avec mécanisme lift pour villa",
    fit: "object-cover",
    tagline: "L'effet de surprise.",
    details: [
      "Fût de chêne authentique — finition naturelle",
      "Mécanisme lift électrique — élévation fluide",
      "Éclairage LED rouge intégré — ambiance speakeasy",
      "Sur commande — personnalisable",
      "Délai de fabrication : 4 à 6 semaines",
      "Installation et mise en service incluses",
    ],
    reviews: [
      {
        author: "Hassan O.",
        location: "Targa, Marrakech",
        rating: 5,
        text: "Un objet unique qui fait l'unanimité. En apparence un vieux fût, mais quand le mécanisme s'active... les regards sont stupéfaits. C'est de la magie pure.",
        date: "Mars 2026",
      },
      {
        author: "Isabelle D.",
        location: "Agdal, Marrakech",
        rating: 5,
        text: "J'avais cherché quelque chose d'original pendant des mois. Le Bar Vintage d'Ouidesign a surpassé toutes mes attentes. Artisanat et technologie parfaitement mariés.",
        date: "Décembre 2025",
      },
    ],
  },
  {
    slug: "bureau-assis-debout",
    images: ["/images/bureau-marrakech.png"],
    imageAlt: "Bureau assis-debout Ouidesign — motorisé pour villa Marrakech",
    fit: "object-cover",
    tagline: "L'invitation à la performance.",
    details: [
      "Plateau anthracite mat & bois naturel",
      "Hauteur réglable électrique — mémorisation 4 positions",
      "Silencieux & connectiques discrètes intégrées",
      "Sur mesure — plateau personnalisable",
      "Structure acier revêtu noir mat",
      "Livraison & montage inclus à Marrakech",
    ],
    reviews: [
      {
        author: "Omar K.",
        location: "Palmeraie, Marrakech",
        rating: 5,
        text: "Travaille depuis chez moi et ce bureau a transformé mon espace de travail. Le mécanisme est fluide, silencieux et la qualité des matériaux est au rendez-vous.",
        date: "Janvier 2026",
      },
      {
        author: "Marianne T.",
        location: "Guéliz, Marrakech",
        rating: 4,
        text: "Très beau bureau, livraison parfaite et service impeccable. Légèrement plus de délai que prévu mais le résultat vaut l'attente.",
        date: "Octobre 2025",
      },
    ],
  },
  {
    slug: "cuisines-premium",
    images: ["/images/cuisine-premium.png"],
    imageAlt: "Cuisine premium Ouidesign — sur mesure pour villas à Marrakech",
    fit: "object-cover",
    tagline: "Une continuité parfaite.",
    details: [
      "Dessin sur mesure — volumes clairs & rangements invisibles",
      "Matériaux nobles : travertin, laque mate, bois",
      "Électroménager intégré & éclairage LED 3000K",
      "Finitions minérales texturées — quincaillerie premium",
      "Coordination complète avec l'architecture intérieure",
      "Délai : 8 à 12 semaines selon complexité",
    ],
    reviews: [
      {
        author: "Rachida A.",
        location: "Hivernage, Marrakech",
        rating: 5,
        text: "Notre cuisine est devenue la pièce maîtresse de la maison. Chaque détail est pensé, chaque matériau est choisi avec soin. Ouidesign a su lire notre espace mieux que nous.",
        date: "Février 2026",
      },
      {
        author: "Pierre-Antoine G.",
        location: "Route de l'Ourika",
        rating: 5,
        text: "Projet clé-en-main parfaitement exécuté. Un seul interlocuteur pour tout, une coordination irréprochable et une cuisine qui dépasse largement nos attentes.",
        date: "Novembre 2025",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductData | undefined {
  return productData.find((p) => p.slug === slug);
}
