import React from 'react';
import { useParams } from 'react-router-dom';
import { useBook } from '../hooks/useProducts';
import DetailProduct from '../organismos/detailProduct';
import Comments from '../organismos/reviews';
import './detail.css';



const BookDetail: React.FC = () => { 
    const { idBook } = useParams<{ idBook: string }>();
    const book = useBook(parseInt(idBook ?? '-1'));

    return (
        <div className="book-detail-page">
           {book && <DetailProduct book= {book} />}
           {!book && <div>Libro no encontrado</div>}
           <Comments />
        </div>
    );
};

export default BookDetail;