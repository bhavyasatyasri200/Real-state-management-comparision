import React from 'react';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notification = useSelector(state => state.ui.notification);
  
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
