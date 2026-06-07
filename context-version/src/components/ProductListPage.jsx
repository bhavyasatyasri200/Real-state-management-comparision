import React from 'react';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';
import { useUI } from '../context/UIContext';
import RenderCounter from './RenderCounter';

const ProductCard = ({ product }) => {
  const { dispatch: cartDispatch } = useCart();
  const { dispatch: uiDispatch } = useUI();

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    uiDispatch({ 
      type: 'SET_NOTIFICATION', 
      payload: { message: `Added ${product.name} to cart!`, type: 'success' } 
    });
    setTimeout(() => {
      uiDispatch({ type: 'CLEAR_NOTIFICATION' });
    }, 3000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{product.name}</h3>
      <p style={{ margin: '0.5rem 0' }}>{product.description}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <span style={{ fontWeight: 'bold' }}>${product.price}</span>
        <button className="btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <RenderCounter name="ProductCard" />
    </div>
  );
};

const ProductListPage = () => {
  return (
    <div className="app-container">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1>Featured Products</h1>
        <RenderCounter name="ProductList" />
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
