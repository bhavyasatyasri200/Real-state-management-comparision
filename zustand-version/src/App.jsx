import React from 'react';
import useAppStore from './store/useAppStore';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';
import CartSidebar from './components/CartSidebar';
import Notification from './components/Notification';
import './index.css';

const AppContent = () => {
  const theme = useAppStore(state => state.ui.theme);
  
  return (
    <div className={`app ${theme}`}>
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
    <AppContent />
  );
}

export default App;
