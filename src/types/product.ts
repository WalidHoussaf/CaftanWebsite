// Types d'occasions pour les vêtements
export type OccasionType = 
  | 'mariage' 
  | 'fête' 
  | 'cérémonie' 
  | 'quotidien' 
  | 'ramadan' 
  | 'soirée';

// Types de tailles disponibles
export type SizeType = 'xs' | 's' | 'm' | 'l' | 'xl' | 'custom';

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
  oldPrice?: number;
  category: CategoryType;
  images: string[];
  colors?: string[];
  sizes: SizeType[];
  stock: number;
  isAvailable: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  material?: string;
  occasions?: string[];
  averageRating?: number;
  reviews?: ReviewType[];
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