import React from 'react';
import useAppStore from '../store/useAppStore';

const Notification = () => {
  const notification = useAppStore(state => state.ui.notification);
  
  if (!notification) return null;

  return (
    <div 
      className="notification" 
      style={{ 
        background: notification.type === 'success' ? '#10b981' : '#f43f5e' 
      }}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
