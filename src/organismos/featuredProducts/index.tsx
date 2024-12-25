import React from 'react';
import { Card } from '../../moleculas/card';
import { FeaturedProductsProps } from '../../@types';
import './style.css';



const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ books, title }) => {
    return (
        <div className="featured-products">
            {title ? <h2>{title}</h2> : ''}           
            <div className="featured-products__list">
            {books.map(book => (
                <Card key={book.id} book={book} />                
            ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;