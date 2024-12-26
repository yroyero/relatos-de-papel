import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import "./style.css";
import { FaBell } from "react-icons/fa";
import Notification from "../../atomos/msg";

const Alert: React.FC = () => {
  const { notifications, clearNotifications } = useShop();
  const [isCartVisible, setIsCartVisible] = useState(false);
  let pos: number = 1;
  let timer: NodeJS.Timeout;
    const resetTimer = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setIsCartVisible(false);
      }, 7000);
    };
  
    useEffect(() => {
      if (isCartVisible) {
        resetTimer();
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keydown", resetTimer);
      }
  
      return () => {
        if (timer) clearTimeout(timer);
        window.removeEventListener("mousemove", resetTimer);
        window.removeEventListener("keydown", resetTimer);
      };
    }, [isCartVisible]);

  const handleMenuClick = () => {
    setIsCartVisible(!isCartVisible);
  };

  const handleDeleteAll = () => {
    clearNotifications();
    setIsCartVisible(false);
  }

  return (
    <div className="alert">
      <button onClick={handleMenuClick}>
        <FaBell size={30} color="666" />
        <span className="alert-button-quantity">{notifications.length}</span>
      </button>
      {isCartVisible && (
        <div className="alert-dropdown">
          <h4>Notificaciones ({notifications.length})</h4>
          <ul>
            {notifications.map((item,index) => (
              <Notification
                key={`item-${pos++}`}
                message={item}
                type="info"
               index={index}
              />
            ))}
          </ul>
          {notifications.length > 0 && <div className="alert-footer">          
            <button onClick={handleDeleteAll}>Limpiar </button>
          </div>}
        </div>
      )}
    </div>
  );
};

export default Alert;
