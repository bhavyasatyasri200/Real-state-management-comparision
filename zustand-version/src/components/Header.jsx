import React from 'react';
import { ShoppingCart, Moon, Sun, User } from 'lucide-react';
import useAppStore from '../store/useAppStore';
import RenderCounter from './RenderCounter';

const Header = () => {
  const userName = useAppStore(state => state.user.name);
  const theme = useAppStore(state => state.ui.theme);
  const cartItemCount = useAppStore(state => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));
  
  const toggleCart = useAppStore(state => state.toggleCart);
  const setTheme = useAppStore(state => state.setTheme);

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2>E-Shop (Zustand)</h2>
        <RenderCounter name="Header" />
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={20} />
          <span>{userName}</span>
          <RenderCounter name="UserInfo" />
        </div>

        <button 
          className="theme-switcher"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <RenderCounter name="ThemeSwitcher" />
        </button>

        <button 
          className="btn" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onClick={toggleCart}
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
