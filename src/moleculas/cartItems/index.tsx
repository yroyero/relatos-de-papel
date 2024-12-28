import { useEffect, useState } from "react";
import CartItemCard from "../../atomos/item";
import { useShop } from "../../context/ShopContext";
import "./style.css";

const CartItems: React.FC = () => {
  const { cart } = useShop();
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const auxIva = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 0.12;
    setIva(auxIva);
    const auxTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(auxTotal);
    const auxTotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(auxTotalItems);
  }, [cart]);

  return (
    <div className="cart">
      <h2 className="cart-title">Carrito de Compra</h2>
      <div className="cart-content">
        <div className="cart-content-items">
          {cart.length > 0 && (
            <ul>
              {cart.map((item) => (
                <CartItemCard
                  key={`item-shop-${item.id}`}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  image={item.imageUrl}
                />
              ))}
            </ul>
          )}
          {cart.length === 0 && <p>No hay productos en el carrito</p>}
        </div>
        <div className="cart-content-resume">
          <h4>Resumen de Compra</h4>
          <hr />
          <div>
            <div className="cart-content-resume-concept">
              <span>Productos </span>
              <span>{totalItems}</span>
            </div>
            <div className="cart-content-resume-concept">
              <span>Subtotal </span>
              <span>${total.toFixed(2)} </span>
            </div>
            <div className="cart-content-resume-concept">
              <span>Iva: </span>
              <span>${iva.toFixed(2)} </span>
            </div>
          </div>
            <hr />
            <div className="cart-content-resume-concept total">
              <span>Total </span>
              <span>${(total + iva).toFixed(2)} </span>
              </div>
         
        </div>
      </div>
    </div>
  );
};

export default CartItems;
