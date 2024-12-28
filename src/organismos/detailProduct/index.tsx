import React from 'react';
import './style.css';
import { Product } from '../../@types';
import { useShop } from '../../context/ShopContext';
import Rating from '../../atomos/rating';
import { FaShoppingCart } from 'react-icons/fa';

interface BookDetailProps {
    book: Product;
}

const DetailProduct: React.FC<BookDetailProps> = ({
   book
}) => {
    const { title, author, genre, price, rating, releaseDate, summary, imageUrl } = book;
    const { addToCart, addNotification} = useShop();

    const handleAddToCart = () => {
        addToCart(book);
        addNotification(`Se ha agregado ${title} al carrito`);
      }
     return (
        <div className="detail-product">
            <div className="detail-product-image">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="detail-product-info">
                <h1>{title}</h1>
                <p><strong>Autor:</strong> {author}</p>
                <p><strong>Género:</strong> {genre}</p>
                <p><strong>Precio:</strong> ${price.toFixed(2)}</p>
                <div><Rating max={5} value={rating}/></div>
                <p><strong>Fecha de lanzamiento:</strong> {releaseDate.toLocaleString()}</p>
                <p><strong>Resumen:</strong> {summary}</p>
                <button onClick={handleAddToCart} className="detail-product-info-action"> <FaShoppingCart />Añadir al carrito</button>
            </div>
        </div>
    );
};

export default DetailProduct;