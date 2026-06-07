import React, { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
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
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.items.find(item => item.productId === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: {
            ...state.cart,
            items: state.cart.items.map(item =>
              item.productId === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          }
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          items: [...state.cart.items, {
            productId: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1
          }]
        }
      };
    }
    case 'TOGGLE_CART':
      return { ...state, cart: { ...state.cart, isOpen: !state.cart.isOpen } };
    case 'SET_THEME':
      return { ...state, ui: { ...state.ui, theme: action.payload } };
    case 'SET_NOTIFICATION':
      return { ...state, ui: { ...state.ui, notification: action.payload } };
    case 'CLEAR_NOTIFICATION':
      return { ...state, ui: { ...state.ui, notification: null } };
    default:
      return state;
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
