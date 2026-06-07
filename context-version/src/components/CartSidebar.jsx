import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import RenderCounter from './RenderCounter';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div style={{ flex: 1 }}>
        <h4>{item.name}</h4>
        <p>${item.price} x {item.quantity}</p>
      </div>
      <RenderCounter name="CartItem" />
    </div>
  );
};

const CartSidebar = () => {
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const total = cartState.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <aside className={`cart-sidebar ${cartState.isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h3>Your Cart</h3>
        <button onClick={() => cartDispatch({ type: 'TOGGLE_CART' })} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <X size={24} />
        </button>
        <RenderCounter name="CartSidebar" />
      </div>

      <div className="cart-items">
        {cartState.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartState.items.map(item => (
            <CartItem key={item.productId} item={item} />
          ))
        )}
      </div>

      <div className="cart-summary">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <strong>Total:</strong>
          <strong>${total}</strong>
        </div>
        <button className="btn" style={{ width: '100%' }}>Checkout</button>
        <RenderCounter name="CartSummary" />
      </div>
    </aside>
  );
};

export default CartSidebar;
