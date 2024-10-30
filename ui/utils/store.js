import { create } from "zustand";

const INITIAL_STATE = {
  products: [],
};

export const useCartStore = create((set, get) => ({
  products: INITIAL_STATE.products,

  addToCart(item) {
    set((state) => {
      const existingProductIndex = state.products.findIndex((product) => 
        product.productId === item.productId &&
        (!item.size || product.size === item.size) &&
        (!item.color || product.color === item.color)
      );

      // If product exists in cart, update quantity
      if (existingProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[existingProductIndex].quantity += item.quantity;
        return { products: updatedProducts };
      } 
      
      // If product doesn't exist, add to cart
      return {
        products: [...state.products, item],
      };
    });
  },

  removeFromCart(item) {
    set((state) => ({
      products: state.products.filter(
        (product) => product.productId !== item.productId
      ),
    }));
  },
}));