import { ProductType } from '../types/product';

export const productsData: ProductType[] = [
  // Caftans
  {
    id: "caftan-01",
    name: "Caftan Marocain Royal Bleu",
    description: "Caftan marocain traditionnel en soie avec broderies dorées. Élégant et raffiné, parfait pour les mariages et cérémonies.",
    price: 299.99,
    oldPrice: 359.99,
    category: "caftan",
    images: [
      "/images/caftans/caftan1.jpg",
      "/images/caftans/caftan1-detail.jpg"
    ],
    colors: ["#1e3a8a", "#c8a951", "#64748b"],
    sizes: ["S", "M", "L", "XL"],
    material: "Soie et broderies",
    occasions: ["mariage", "cérémonie", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 12,
    averageRating: 4.8,
    details: {
      fabricDetails: "100% soie avec broderies dorées à la main",
      designFeatures: ["Col rond", "Manches longues", "Ceinture assortie", "Broderies dorées"],
      careInstructions: "Nettoyage à sec uniquement"
    }
  },
  {
    id: "caftan-02",
    name: "Caftan Émeraude de Luxe",
    description: "Somptueux caftan vert émeraude avec détails argentés et perles. Une création haute couture pour briller lors des occasions spéciales.",
    price: 389.99,
    oldPrice: null,
    category: "caftan",
    images: [
      "/images/caftans/caftan2.jpg",
      "/images/caftans/caftan2-detail.jpg"
    ],
    colors: ["#047857", "#e5e7eb", "#0f172a"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Velours et broderies perlées",
    occasions: ["mariage", "fête", "cérémonie"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 8,
    averageRating: 5.0,
    details: {
      fabricDetails: "Velours premium avec broderies de perles et fils d'argent",
      designFeatures: ["Col V", "Manches trois-quarts", "Doublure en satin", "Ceinture incrustée de pierres"],
      careInstructions: "Nettoyage à sec uniquement, manipuler avec précaution"
    }
  },
  {
    id: "caftan-03",
    name: "Caftan Terre Cuite",
    description: "Un caftan aux teintes chaudes de terre cuite, orné de motifs berbères authentiques et de broderies traditionnelles.",
    price: 279.99,
    oldPrice: 329.99,
    category: "caftan",
    images: [
      "/images/caftans/caftan3.jpg",
      "/images/caftans/caftan3-detail.jpg"
    ],
    colors: ["#c2410c", "#92400e", "#78350f"],
    sizes: ["XS", "S", "M", "L"],
    material: "Coton et soie mélangés",
    occasions: ["mariage", "fête", "quotidien"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 5,
    averageRating: 4.6,
    details: {
      fabricDetails: "Mélange de coton et soie avec broderies artisanales berbères",
      designFeatures: ["Col bateau", "Manches larges", "Motifs berbères authentiques"],
      careInstructions: "Lavage à la main à l'eau froide ou nettoyage à sec"
    }
  },
  {
    id: "caftan-04",
    name: "Caftan Rose Poudré",
    description: "Caftan élégant en rose poudré avec des détails floraux délicats, idéal pour les cérémonies de printemps et d'été.",
    price: 249.99,
    oldPrice: null,
    category: "caftan",
    images: [
      "/images/caftans/caftan4.jpg",
      "/images/caftans/caftan4-detail.jpg"
    ],
    colors: ["#fda4af", "#f8fafc", "#ffe4e6"],
    sizes: ["S", "M", "L", "XL"],
    material: "Mousseline de soie",
    occasions: ["mariage", "cérémonie", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 15,
    averageRating: 4.7,
    details: {
      fabricDetails: "Mousseline de soie avec broderies florales délicates",
      designFeatures: ["Col en V", "Manches évasées", "Ceinture fine", "Doublure en satin"],
      careInstructions: "Nettoyage à sec recommandé"
    }
  },
  {
    id: "caftan-05",
    name: "Caftan Royal Bordeaux",
    description: "Un caftan somptueux d'un rouge bordeaux profond avec des détails dorés élaborés, parfait pour les grandes occasions.",
    price: 399.99,
    oldPrice: 459.99,
    category: "caftan",
    images: [
      "/images/caftans/caftan5.jpg",
      "/images/caftans/caftan5-detail.jpg"
    ],
    colors: ["#7f1d1d", "#b91c1c", "#c8a951"],
    sizes: ["M", "L", "XL", "XXL"],
    material: "Velours et broderies dorées",
    occasions: ["mariage", "cérémonie"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 7,
    averageRating: 4.9,
    details: {
      fabricDetails: "Velours premium avec broderies dorées et cristaux",
      designFeatures: ["Col montant", "Manches longues", "Ceinture ornée de strass", "Finitions dorées"],
      careInstructions: "Nettoyage à sec uniquement, éviter l'exposition prolongée à la lumière"
    }
  },

  // Jellabas
  {
    id: "jellaba-01",
    name: "Jellaba Contemporaine Grise",
    description: "Jellaba moderne en gris clair avec des touches contemporaines, idéale pour un usage quotidien élégant.",
    price: 159.99,
    oldPrice: 189.99,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba1.jpg",
      "/images/jellabas/jellaba1-detail.jpg"
    ],
    colors: ["#64748b", "#e2e8f0", "#334155"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton premium",
    occasions: ["quotidien", "ramadan", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 20,
    averageRating: 4.5,
    details: {
      fabricDetails: "Coton 100% avec finitions artisanales",
      designFeatures: ["Capuche doublée", "Poches latérales discrètes", "Coupe décontractée"],
      careInstructions: "Lavable en machine à 30°C, repassage à basse température"
    }
  },
  {
    id: "jellaba-02",
    name: "Jellaba Safran Traditionnelle",
    description: "Jellaba traditionnelle dans une riche couleur safran avec des broderies classiques, parfaite pour le Ramadan et les occasions spéciales.",
    price: 179.99,
    oldPrice: null,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba2.jpg",
      "/images/jellabas/jellaba2-detail.jpg"
    ],
    colors: ["#f59e0b", "#d97706", "#b45309"],
    sizes: ["S", "M", "L", "XL"],
    material: "Laine fine mélangée",
    occasions: ["ramadan", "fête", "quotidien"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 15,
    averageRating: 4.7,
    details: {
      fabricDetails: "Laine fine mélangée avec broderies traditionnelles",
      designFeatures: ["Capuche ample", "Manchettes brodées", "Finitions à la main"],
      careInstructions: "Nettoyage à sec recommandé"
    }
  },
  {
    id: "jellaba-03",
    name: "Jellaba Bleue Marine",
    description: "Élégante jellaba bleu marine avec des détails blancs raffinés, polyvalente pour diverses occasions.",
    price: 149.99,
    oldPrice: 179.99,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba3.jpg",
      "/images/jellabas/jellaba3-detail.jpg"
    ],
    colors: ["#1e3a8a", "#f8fafc", "#334155"],
    sizes: ["S", "M", "L", "XL"],
    material: "Coton léger",
    occasions: ["quotidien", "ramadan", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 18,
    averageRating: 4.6,
    details: {
      fabricDetails: "Coton léger de haute qualité avec broderies contrastées",
      designFeatures: ["Capuche classique", "Poches dissimulées", "Broderies géométriques"],
      careInstructions: "Lavable en machine, programme délicat"
    }
  },
  {
    id: "jellaba-04",
    name: "Jellaba Verte Olive",
    description: "Jellaba confortable en vert olive avec des finitions élégantes, parfaite pour un style décontracté chic.",
    price: 169.99,
    oldPrice: null,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba4.jpg",
      "/images/jellabas/jellaba4-detail.jpg"
    ],
    colors: ["#4d7c0f", "#65a30d", "#84cc16"],
    sizes: ["S", "M", "L", "XL"],
    material: "Lin et coton",
    occasions: ["quotidien", "ramadan"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 25,
    averageRating: 4.4,
    details: {
      fabricDetails: "Mélange de lin et coton respirant",
      designFeatures: ["Capuche ajustable", "Manches raglan", "Poches latérales"],
      careInstructions: "Lavable en machine à 30°C"
    }
  },
  {
    id: "jellaba-05",
    name: "Jellaba Blanche Brodée",
    description: "Jellaba blanche immaculée avec de délicates broderies colorées, parfaite pour les cérémonies et le Ramadan.",
    price: 189.99,
    oldPrice: 219.99,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba5.jpg",
      "/images/jellabas/jellaba5-detail.jpg"
    ],
    colors: ["#f8fafc", "#cbd5e1", "#bae6fd"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    material: "Coton égyptien",
    occasions: ["ramadan", "fête", "cérémonie"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 10,
    averageRating: 4.8,
    details: {
      fabricDetails: "Coton égyptien de haute qualité avec broderies multicolores",
      designFeatures: ["Capuche brodée", "Manches évasées", "Passepoils colorés"],
      careInstructions: "Lavage délicat à la main, repassage à basse température"
    }
  }
]; 