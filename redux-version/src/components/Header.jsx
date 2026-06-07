import React from 'react';
import { ShoppingCart, Moon, Sun, User } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../store/cartSlice';
import { setTheme } from '../store/uiSlice';
import RenderCounter from './RenderCounter';

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.name);
  const theme = useSelector(state => state.ui.theme);
  const cartItemCount = useSelector(state => state.cart.items.reduce((acc, item) => acc + item.quantity, 0));

  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h2>E-Shop (Redux)</h2>
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
          onClick={() => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          <RenderCounter name="ThemeSwitcher" />
        </button>

        <button 
          className="btn" 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          onClick={() => dispatch(toggleCart())}
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
