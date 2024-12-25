import React from 'react';
import Banner from '../organismos/banner';
import FeaturedProducts from '../organismos/featuredProducts';
import { useNewestBooks } from '../hooks/useProducts';

export const Home: React.FC = () => {
    const books = useNewestBooks();

    return (
        <>
            <Banner />
            <FeaturedProducts books={books} title='Libros destacados'/>
        </>
    );
};

