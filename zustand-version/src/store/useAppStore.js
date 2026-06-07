import { create } from 'zustand';

const useAppStore = create((set, get) => ({
  cart: {
    items: [],
    isOpen: false
  },
  user: {
    name: "John Doe",
    isLoggedIn: true
  },
  ui: {
    theme: "light",
    notification: null
  },

  // Actions
  addToCart: (product) => set((state) => {
    const existingItem = state.cart.items.find(item => item.productId === product.id);
    if (existingItem) {
      return {
        cart: {
          ...state.cart,
          items: state.cart.items.map(item =>
            item.productId === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      };
    }
    return {
      cart: {
        ...state.cart,
        items: [...state.cart.items, {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }]
      }
    };
  }),

  toggleCart: () => set((state) => ({
    cart: { ...state.cart, isOpen: !state.cart.isOpen }
  })),

  setTheme: (theme) => set((state) => ({
    ui: { ...state.ui, theme }
  })),

  setNotification: (notification) => set((state) => ({
    ui: { ...state.ui, notification }
  })),

  clearNotification: () => set((state) => ({
    ui: { ...state.ui, notification: null }
  }))
}));

export default useAppStore;
