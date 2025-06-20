import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ProductType } from '@/types/product';

interface WishlistState {
  items: ProductType[];
  addItem: (product: ProductType) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const { items } = get();
        const isAlreadyInWishlist = items.some(item => item.id === product.id);
        
        if (!isAlreadyInWishlist) {
          set({ items: [...items, product] });
        }
      },
      
      removeItem: (productId) => {
        const { items } = get();
        set({ items: items.filter(item => item.id !== productId) });
      },
      
      isInWishlist: (productId) => {
        const { items } = get();
        return items.some(item => item.id === productId);
      },
      
      clearWishlist: () => {
        set({ items: [] });
      },
    }),
    {
      name: 'wishlist-storage',
    }
  )
);
