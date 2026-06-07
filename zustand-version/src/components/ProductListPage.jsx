import React from 'react';
import products from '../data/products.json';
import useAppStore from '../store/useAppStore';
import RenderCounter from './RenderCounter';

const ProductCard = ({ product }) => {
  const addToCart = useAppStore(state => state.addToCart);
  const setNotification = useAppStore(state => state.setNotification);
  const clearNotification = useAppStore(state => state.clearNotification);

  const handleAddToCart = () => {
    addToCart(product);
    setNotification({ message: `Added ${product.name} to cart!`, type: 'success' });
    setTimeout(() => {
      clearNotification();
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
