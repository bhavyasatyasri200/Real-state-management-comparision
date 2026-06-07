import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import ProductListPage from './components/ProductListPage';
import CartSidebar from './components/CartSidebar';
import Notification from './components/Notification';
import { useSelector } from 'react-redux';
import './index.css';

const AppContent = () => {
  const theme = useSelector(state => state.ui.theme);
  
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
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
