import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import CartItemCard from "../../atomos/item";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShopCart: React.FC = () => {
  const { cart } = useShop();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const navigate = useNavigate();
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

  useEffect(() => {
    const auxTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(auxTotal);
    const auxTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(auxTotalItems);
  }, [cart]);

  const goToPayment = () => {
    navigate("/payment");
    setIsCartVisible(false);
  };

  return (
    <div className="shop-cart">
      <button onClick={handleMenuClick}>
        <FaShoppingCart size={30} color="666" />
        <span className="shop-cart-button-quantity">{totalItems}</span>
      </button>
      {isCartVisible && (
        <div className="shop-cart-dropdown">
          <h4>Mi compra ({totalItems})</h4>
          <ul>
            {cart.map((item) => (
              <CartItemCard
                key={`item-${item.id}`}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                image={item.imageUrl}
              />
            ))}
          </ul>
          {cart.length > 0 && (
            <div className="shop-cart-dropdown-footer">
              <span>Total: $ {total.toFixed(2)}</span>
              <button onClick={goToPayment}>Pagar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopCart;
