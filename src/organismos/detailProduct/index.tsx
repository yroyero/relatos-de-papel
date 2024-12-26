import React from 'react';
import './style.css';
import { Product } from '../../@types';
import { useShop } from '../../context/ShopContext';
import Rating from '../../moleculas/rating';
import { FaShoppingCart } from 'react-icons/fa';

interface BookDetailProps {
    book: Product;
}

const DetailProduct: React.FC<BookDetailProps> = ({
   book
}) => {
    const { title, author, genre, price, rating, releaseDate, summary, imageUrl } = book;
    const { addToCart} = useShop();
     return (
        <div className="detail-product">
            <div className="image-container">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="info-container">
                <h1>{title}</h1>
                <p><strong>Autor:</strong> {author}</p>
                <p><strong>Género:</strong> {genre}</p>
                <p><strong>Precio:</strong> ${price.toFixed(2)}</p>
                <p><strong></strong> <Rating max={5} value={rating}/></p>
                <p><strong>Fecha de lanzamiento:</strong> {releaseDate.toLocaleString()}</p>
                <p><strong>Resumen:</strong> {summary}</p>
                <button onClick={() =>  addToCart(book)} className="info-container-action"> <FaShoppingCart />Añadir al carrito</button>
            </div>
        </div>
    );
};

export default DetailProduct;