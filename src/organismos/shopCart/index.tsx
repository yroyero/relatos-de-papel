import React, { useEffect, useState } from "react";
import { useShop } from "../../context/ShopContext";
import CartItemCard from "../../atomos/item";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";

const ShopCart: React.FC = () => {
  const { cart } = useShop();
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

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

  return (
    <div className="shop-cart">
      <button onClick={handleMenuClick}>
        <FaShoppingCart size={30} color="666" />
        <span className="shop-cart-button-quantity">{totalItems}</span>
      </button>
      {isCartVisible && (
        <div className="shop-cart-dropdown">
          <h2>Mi compra ({totalItems})</h2>
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
          <div className="shop-cart-dropdown-footer">
            <span>Total: $ {total}</span>
            <button>Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
