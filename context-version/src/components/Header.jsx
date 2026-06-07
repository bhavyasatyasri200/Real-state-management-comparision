import React from 'react';
import { ShoppingCart, Moon, Sun, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { useUI } from '../context/UIContext';
import RenderCounter from './RenderCounter';

const Header = () => {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const { state: userState } = useUser();
  const { state: uiState, dispatch: uiDispatch } = useUI();

  const cartItemCount = cartState.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2>E-Shop</h2>
        <RenderCounter name="Header" />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={20} />
          <span>{userState.name}</span>
          <RenderCounter name="UserInfo" />
        </div>

        <button 
          className="theme-switcher"
          onClick={() => uiDispatch({ type: 'SET_THEME', payload: uiState.theme === 'light' ? 'dark' : 'light' })}
        >
          {uiState.theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <RenderCounter name="ThemeSwitcher" />
        </button>

        <button 
          className="btn" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onClick={() => cartDispatch({ type: 'TOGGLE_CART' })}
        >
          <ShoppingCart size={20} />
          <span>({cartItemCount})</span>
          <RenderCounter name="CartItemCount" />
        </button>
      </div>
    </header>
  );
};

export default Header;
