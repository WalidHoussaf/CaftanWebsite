import { ProductType } from '../types/product';

export const productsData: ProductType[] = [
  // Caftans
  {
    id: "caftan-01",
    name: "Caftan Marocain Royal Rouge",
    description: "Laissez-vous envoûter par le charme majestueux du Caftan Marocain Royal Rouge, une pièce emblématique qui incarne la noblesse et le raffinement de l'artisanat marocain. Confectionné avec un tissu luxueux aux reflets éclatants, ce caftan se distingue par sa teinte rouge profonde, symbole de passion, de force et de royauté.",
    price: 299.99,
    oldPrice: 359.99,
    category: "caftan",
    images: [
      "/images/caftans/caftan1.jpg",
      "/images/caftans/caftan1_detail1.jpg",
      "/images/caftans/caftan1_detail2.jpg",
      "/images/caftans/caftan1_detail3.jpg",
      "/images/caftans/caftan1_detail4.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Soie et broderies",
    occasions: ["mariage", "cérémonie", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 12,
    averageRating: 4.8,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "100% soie avec broderies dorées à la main",
      designFeatures: ["Col rond", "Manches longues", "Ceinture assortie", "Broderies dorées"],
      careInstructions: "Nettoyage à sec uniquement"
    }
  },
  {
    id: "caftan-02",
    name: "Caftan Émeraude de Luxe",
    description: "Succombez à l'élégance intemporelle du Caftan Émeraude de Luxe, une création somptueuse qui évoque la noblesse orientale et l'élégance contemporaine. Sa teinte émeraude, à la fois profonde et envoûtante, incarne le luxe discret et la féminité affirmée.",
    price: 389.99,
    oldPrice: undefined,
    category: "caftan",
    images: [
      "/images/caftans/caftan2.jpg",
      "/images/caftans/caftan2_detail1.jpg",
      "/images/caftans/caftan2_detail2.jpg",
      "/images/caftans/caftan2_detail3.jpg",
      "/images/caftans/caftan2_detail4.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Velours et broderies perlées",
    occasions: ["mariage", "fête", "cérémonie"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 8,
    averageRating: 5.0,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Velours premium avec broderies de perles et fils d'argent",
      designFeatures: ["Col V", "Manches trois-quarts", "Doublure en satin", "Ceinture incrustée de pierres"],
      careInstructions: "Nettoyage à sec uniquement, manipuler avec précaution"
    }
  },
  {
    id: "caftan-03",
    name: "Caftan Noir Deux Pièces avec Ceinture",
    description: "Découvrez le charme sophistiqué du Caftan Noir Deux Pièces avec Ceinture, une tenue raffinée qui allie modernité et tradition. Composé d'une sous-robe fluide et d'un manteau brodé aux détails subtils, ce caftan incarne l'élégance sobre et la prestance naturelle.",
    price: 279.99,
    oldPrice: 329.99,
    category: "caftan",
    images: [
      "/images/caftans/caftan3.jpg",
      "/images/caftans/caftan3_detail1.jpg",
      "/images/caftans/caftan3_detail2.jpg",
    ],
    sizes: ["xs", "s", "m", "l"],
    material: "Coton et soie mélangés",
    occasions: ["mariage", "fête", "quotidien"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 5,
    averageRating: 4.6,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Mélange de coton et soie avec broderies artisanales berbères",
      designFeatures: ["Col bateau", "Manches larges", "Motifs berbères authentiques"],
      careInstructions: "Lavage à la main à l'eau froide ou nettoyage à sec"
    }
  },
  {
    id: "caftan-04",
    name: "Caftan Deux Pièces à Manches Imprimées",
    description: "Affirmez votre style avec le Caftan Deux Pièces à Manches Imprimées, une pièce moderne et audacieuse qui revisite le caftan traditionnel avec une touche artistique. Ce modèle se compose d'une robe intérieure fluide et d'un manteau ouvert sublimé par des manches aux imprimés uniques, apportant une touche contemporaine et expressive.",
    price: 249.99,
    oldPrice: undefined,
    category: "caftan",
    images: [
      "/images/caftans/caftan4.jpg",
      "/images/caftans/caftan4_detail1.jpg",
      "/images/caftans/caftan4_detail2.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Mousseline de soie",
    occasions: ["mariage", "cérémonie", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 15,
    averageRating: 4.7,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Mousseline de soie avec broderies florales délicates",
      designFeatures: ["Col en V", "Manches évasées", "Ceinture fine", "Doublure en satin"],
      careInstructions: "Nettoyage à sec recommandé"
    }
  },
  {
    id: "caftan-05",
    name: "Caftan deux pièces avec gandoura",
    description: "Plongez dans l'univers du raffinement marocain avec ce somptueux Caftan Deux Pièces avec Gandoura, une alliance parfaite entre confort et prestige. Ce modèle se compose d'une gandoura fluide, légère et agréable à porter, surmontée d'un caftan ouvert richement brodé, pour une silhouette élégante et gracieuse.",
    price: 399.99,
    oldPrice: 459.99,
    category: "caftan",
    images: [
      "/images/caftans/caftan5.jpg",
      "/images/caftans/caftan5_detail1.jpg",
      "/images/caftans/caftan5_detail2.jpg",
      "/images/caftans/caftan5_detail3.jpg",
      "/images/caftans/caftan5_detail4.jpg"
    ],
    sizes: ["m", "l", "xl"],
    material: "Velours et broderies dorées",
    occasions: ["mariage", "cérémonie"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 7,
    averageRating: 4.9,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Velours premium avec broderies dorées et cristaux",
      designFeatures: ["Col montant", "Manches longues", "Ceinture ornée de strass", "Finitions dorées"],
      careInstructions: "Nettoyage à sec uniquement, éviter l'exposition prolongée à la lumière"
    }
  },

  // Jellabas
  {
    id: "jellaba-01",
    name: "Jellaba Contemporaine Rouge",
    description: "Laissez-vous séduire par la simplicité raffinée de la Jellaba Rouge, une pièce incontournable du dressing marocain. Avec sa teinte rouge vibrante, symbole de force et de féminité, cette jellaba attire le regard tout en restant élégante et sobre.",
    price: 159.99,
    oldPrice: 189.99,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba1.jpg",
      "/images/jellabas/jellaba1_detail1.jpg",
      "/images/jellabas/jellaba1_detail2.jpg",
      "/images/jellabas/jellaba1_detail3.jpg",
      "/images/jellabas/jellaba1_detail4.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Coton premium",
    occasions: ["quotidien", "ramadan", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 20,
    averageRating: 4.5,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Coton 100% avec finitions artisanales",
      designFeatures: ["Capuche doublée", "Poches latérales discrètes", "Coupe décontractée"],
      careInstructions: "Lavable en machine à 30°C, repassage à basse température"
    }
  },
  {
    id: "jellaba-02",
    name: "Jellaba Grise Traditionnelle",
    description: "Découvrez la Jellaba Grise, une pièce à l'allure épurée qui incarne la discrétion chic et le confort absolu. Sa couleur grise, douce et intemporelle, en fait un choix polyvalent adapté aussi bien aux journées décontractées qu'aux sorties élégantes.",
    price: 179.99,
    oldPrice: undefined,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba2.jpg",
      "/images/jellabas/jellaba2_detail1.jpg",
      "/images/jellabas/jellaba2_detail2.jpg",
      "/images/jellabas/jellaba2_detail3.jpg",
      "/images/jellabas/jellaba2_detail4.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Laine fine mélangée",
    occasions: ["ramadan", "fête", "quotidien"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 15,
    averageRating: 4.7,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Laine fine mélangée avec broderies traditionnelles",
      designFeatures: ["Capuche ample", "Manchettes brodées", "Finitions à la main"],
      careInstructions: "Nettoyage à sec recommandé"
    }
  },
  {
    id: "jellaba-03",
    name: "Jellaba Bleue Marine",
    description: "Adoptez un style à la fois sobre et sophistiqué avec la Jellaba Bleu Marine, une pièce qui reflète l'élégance discrète et le raffinement marocain. Sa teinte bleu marine, profonde et apaisante, évoque à la fois la noblesse, la sérénité, et le bon goût.",
    price: 149.99,
    oldPrice: 179.99,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba3.jpg",
      "/images/jellabas/jellaba3_detail1.jpg",
      "/images/jellabas/jellaba3_detail2.jpg",
      "/images/jellabas/jellaba3_detail3.jpg",
      "/images/jellabas/jellaba3_detail4.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Coton léger",
    occasions: ["quotidien", "ramadan", "fête"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 18,
    averageRating: 4.6,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Coton léger de haute qualité avec broderies contrastées",
      designFeatures: ["Capuche classique", "Poches dissimulées", "Broderies géométriques"],
      careInstructions: "Lavable en machine, programme délicat"
    }
  },
  {
    id: "jellaba-04",
    name: "Jellaba Verte Olive",
    description: "Laissez-vous séduire par la douceur et l'originalité de la Jellaba Verte Olive, une pièce qui mêle inspiration naturelle et raffinement traditionnel. Sa teinte vert olive, à la fois apaisante et tendance, apporte une touche de fraîcheur et de modernité à un vêtement emblématique du style marocain.",
    price: 169.99,
    oldPrice: undefined,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba4.jpg",
      "/images/jellabas/jellaba4_detail1.jpg",
      "/images/jellabas/jellaba4_detail2.jpg",
      "/images/jellabas/jellaba4_detail3.jpg",
      "/images/jellabas/jellaba4_detail4.jpg",
      "/images/jellabas/jellaba4_detail5.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Lin et coton",
    occasions: ["quotidien", "ramadan"],
    isAvailable: true,
    isFeatured: true,
    isNew: true,
    stock: 25,
    averageRating: 4.4,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Mélange de lin et coton respirant",
      designFeatures: ["Capuche ajustable", "Manches raglan", "Poches latérales"],
      careInstructions: "Lavable en machine à 30°C"
    }
  },
  {
    id: "jellaba-05",
    name: "Jellaba à manches imprimées",
    description: "Osez la différence avec cette Jellaba à manches imprimées, qui allie la douceur de la coupe traditionnelle à une touche contemporaine et artistique. Les manches, ornées d'imprimés raffinés aux motifs uniques, apportent une note de fraîcheur et de modernité à cette pièce emblématique.",
    price: 189.99,
    oldPrice: 219.99,
    category: "jellaba",
    images: [
      "/images/jellabas/jellaba5.jpg",
      "/images/jellabas/jellaba5_detail1.jpg",
      "/images/jellabas/jellaba5_detail2.jpg",
      "/images/jellabas/jellaba5_detail3.jpg"
    ],
    sizes: ["s", "m", "l", "xl"],
    material: "Coton égyptien",
    occasions: ["ramadan", "fête", "cérémonie"],
    isAvailable: true,
    isFeatured: true,
    isNew: false,
    stock: 10,
    averageRating: 4.8,
    createdAt: "2024-01-15",
    details: {
      fabricDetails: "Coton égyptien de haute qualité avec broderies multicolores",
      designFeatures: ["Capuche brodée", "Manches évasées", "Passepoils colorés"],
      careInstructions: "Lavage délicat à la main, repassage à basse température"
    }
  }
]; 