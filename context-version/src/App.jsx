import React from 'react';
import { UserProvider } from './context/UserContext';
import { UIProvider, useUI } from './context/UIContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';
import CartSidebar from './components/CartSidebar';
import Notification from './components/Notification';
import './index.css';

const AppContent = () => {
  const { state: uiState } = useUI();
  
  return (
    <div className={`app ${uiState.theme}`}>
      <Header />
      <main>
        <ProductListPage />
      </main>
      <CartSidebar />
      <Notification />
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <UIProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </UIProvider>
    </UserProvider>
  );
}

export default App;
