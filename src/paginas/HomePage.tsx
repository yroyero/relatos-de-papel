import React, { useEffect, useState } from 'react';
import Banner from '../moleculas/banner';
import FeaturedProducts from '../organismos/featuredProducts';
import { useFetchBooks } from '../hooks/useProducts';
import { Product } from '../@types';
import { getBooks } from '../utils/urls';

export const Home: React.FC = () => {
    const [books, setBooks] = useState<Product[]>([]);
    const {data, loading, error} = useFetchBooks(getBooks);

      useEffect(() => {    
        console.log("Books data:", data);
        setBooks(data.data);
      },[data]);

    return (
        <>
            <Banner />
            <FeaturedProducts books={books} title='Libros destacados'/>
        </>
    );
};

