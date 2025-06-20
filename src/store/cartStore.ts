import { create } from 'zustand';
import { ProductType } from '@/types/product';

export type CartItemType = {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
};

type CartStore = {
  items: CartItemType[];
  totalItems: number;
  totalPrice: number;
  
  // Actions
  addItem: (product: ProductType, color: string, size: string, quantity: number) => void;
  removeItem: (itemId: string) => void;
  updateItemQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
};

// Generate a unique ID for cart items
const generateCartItemId = (productId: string, color: string, size: string) => {
  return `${productId}-${color}-${size}`;
};

// Create a simple cart store without persistence
export const useCartStore = create<CartStore>()((set, get) => {
  // Initialize from localStorage if available (client-side only)
  let initialState = {
    items: [],
    totalItems: 0,
    totalPrice: 0
  };
  
  if (typeof window !== 'undefined') {
    try {
      const savedCart = localStorage.getItem('simple-cart');
      if (savedCart) {
        initialState = JSON.parse(savedCart);
        console.log('Loaded cart from localStorage:', initialState);
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }
  
  return {
    ...initialState,
    
    // Add an item to the cart
    addItem: (product, color, size, quantity) => {
      console.log('Adding item to cart:', product.name, color, size, quantity);
      const cartItemId = generateCartItemId(product.id, color, size);
      const currentItems = get().items;
      const existingItemIndex = currentItems.findIndex(item => item.id === cartItemId);
      
      let newState;
      
      if (existingItemIndex !== -1) {
        // If item already exists, update quantity
        const updatedItems = [...currentItems];
        updatedItems[existingItemIndex].quantity += quantity;
        
        newState = {
          items: updatedItems,
          totalItems: get().totalItems + quantity,
          totalPrice: get().totalPrice + (product.price * quantity)
        };
      } else {
        // Add new item
        const newItem: CartItemType = {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0] || '',
          color,
          size,
          quantity
        };
        
        newState = {
          items: [...currentItems, newItem],
          totalItems: get().totalItems + quantity,
          totalPrice: get().totalPrice + (product.price * quantity)
        };
      }
      
      // Update state
      set(newState);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('simple-cart', JSON.stringify(newState));
        console.log('Saved cart to localStorage:', newState);
      }
    },
    
    // Remove an item from the cart
    removeItem: (itemId) => {
      const currentItems = get().items;
      const itemToRemove = currentItems.find(item => item.id === itemId);
      
      if (itemToRemove) {
        const newState = {
          items: currentItems.filter(item => item.id !== itemId),
          totalItems: get().totalItems - itemToRemove.quantity,
          totalPrice: get().totalPrice - (itemToRemove.price * itemToRemove.quantity)
        };
        
        // Update state
        set(newState);
        
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('simple-cart', JSON.stringify(newState));
        }
      }
    },
    
    // Update item quantity
    updateItemQuantity: (itemId, quantity) => {
      if (quantity <= 0) {
        // If quantity is 0 or negative, remove the item
        get().removeItem(itemId);
        return;
      }
      
      const currentItems = get().items;
      const itemIndex = currentItems.findIndex(item => item.id === itemId);
      
      if (itemIndex !== -1) {
        const item = currentItems[itemIndex];
        const quantityDiff = quantity - item.quantity;
        
        const updatedItems = [...currentItems];
        updatedItems[itemIndex] = {
          ...item,
          quantity
        };
        
        const newState = {
          items: updatedItems,
          totalItems: get().totalItems + quantityDiff,
          totalPrice: get().totalPrice + (item.price * quantityDiff)
        };
        
        // Update state
        set(newState);
        
        // Save to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('simple-cart', JSON.stringify(newState));
        }
      }
    },
    
    // Clear the cart
    clearCart: () => {
      const newState = {
        items: [],
        totalItems: 0,
        totalPrice: 0
      };
      
      // Update state
      set(newState);
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('simple-cart', JSON.stringify(newState));
      }
    }
  };
});

// Function to manually load cart from localStorage (not needed with our new implementation)
export const hydrateCartFromStorage = () => {
  // This function is kept for backward compatibility but is no longer needed
  console.log('Cart hydration is now handled automatically');
  return;
};
