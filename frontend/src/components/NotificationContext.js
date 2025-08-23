import React, { createContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  
  // Connect WebSocket once
  useEffect(() => {
    const socket = io(`${process.env.REACT_APP_NOTIFICATION_SERVICE_URL}`);

    socket.on("notification", (data) => {
      setNotifications((prev) => [...prev, data]);
      console.log("New notification:", data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const addNotification = (notification) => {
    setNotifications((prev) => [...prev, notification]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
