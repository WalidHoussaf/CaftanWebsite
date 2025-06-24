// Types d'occasions pour les vêtements
export type OccasionType = 
  | 'mariage' 
  | 'fête' 
  | 'cérémonie' 
  | 'quotidien' 
  | 'ramadan' 
  | 'soirée';

// Types de tailles disponibles
export type SizeType = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

// Types de catégories
export type CategoryType = 'caftan' | 'jellaba';

// Type pour les avis clients
export interface ReviewType {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

// Type principal de produit
export interface ProductType {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number | null;
  category: CategoryType;
  images: string[];
  colors: string[];
  sizes: SizeType[];
  material: string;
  occasions: OccasionType[];
  isAvailable: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  stock: number;
  reviews?: ReviewType[];
  averageRating?: number;
  createdAt?: string;  // ISO date string for when the product was created
  details?: {
    fabricDetails?: string;
    careInstructions?: string;
    designFeatures?: string[];
    dimensions?: {
      length?: string;
      sleeves?: string;
      bust?: string;
    };
  };
} 