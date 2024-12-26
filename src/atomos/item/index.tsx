import React from "react";
import { useShop } from "../../context/ShopContext";
import "./style.css";
import { FaTrashAlt } from "react-icons/fa";

const CartItemCard: React.FC<any> = ({ id, title, price, quantity, image }) => {
  const { removeFromCart, addNotification } = useShop();

  const handleRemove = () => {
    removeFromCart(id);
    addNotification(`Se ha eliminado ${title} del carrito`);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={image} alt={title} />
      </div>
      <div  className="cart-item-info">
        <div className="cart-item-info-tilte">{title}</div>
        <div className="cart-item-info-price">Price: ${price.toFixed(2)}</div>
        <div className="cart-item-info-quantity">Cantidad: {quantity} </div>
      </div>
      <div className="cart-item-remove">
        <button onClick={handleRemove}>
          <FaTrashAlt color="6c6c6c" size={20}/>
        </button>
      </div>
    </div>
  );
};

export default CartItemCard;
