import React from "react";
import "./style.css";
import { FaCartPlus } from "react-icons/fa";
import { useShop } from "../../context/ShopContext";
import { useNavigate } from "react-router-dom";
import Rating from "../rating";


export const Card: React.FC<any> = ({book}) => {    
    const {addToCart, addNotification} = useShop();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail/${book.id}`);
    }

    const handleAddToCart = () => {
      addToCart(book);
      addNotification(`Se ha agregado ${book.title} al carrito`);
    }

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{book.title}</h2>
        <button className="card-add-to-cart" title="Agregar al carrito" onClick={handleAddToCart}>
            <FaCartPlus size={24} /> 
        </button>
      </div>
      <div className="card-body" onClick={handleClick}>
        <img src={book.imageUrl} alt={book.title} className="card-image" />
        <div className="card-content">
          <p className="card-title">{book.title}</p>
          <p className="card-author">Autor: {book.author}</p>
          <p className="card-genre">Género: {book.genre}</p>
          <div className="card-rating"><Rating max={5} value={book.rating}/></div>
          <p className="card-price">Precio: ${book.price?.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};
