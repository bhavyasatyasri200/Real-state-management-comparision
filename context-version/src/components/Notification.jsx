import React from 'react';
import { useUI } from '../context/UIContext';

const Notification = () => {
  const { state: uiState } = useUI();
  
  if (!uiState.notification) return null;

  return (
    <div 
      className="notification" 
      style={{ 
        background: uiState.notification.type === 'success' ? '#10b981' : '#f43f5e' 
      }}
    >
      {uiState.notification.message}
    </div>
  );
};

export default Notification;
