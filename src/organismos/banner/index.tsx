// /e:/Repos-Unir/relatos-de-papel/src/organismos/banner/index.tsx
import React, { useEffect, useState } from 'react';
import './style.css';

const images = [
    'https://cdn.pixabay.com/photo/2019/06/29/05/42/books-4305459_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327_1280.jpg',
    'https://cdn.pixabay.com/photo/2016/11/20/08/58/books-1842261_1280.jpg',
    'https://cdn.pixabay.com/photo/2024/02/24/20/54/books-8594725_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/10/22/17/28/stack-of-books-1001655_1280.jpg'
    
];

const Banner: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timer, setTimer] = useState<number>(5000);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, timer);

        return () => clearInterval(interval);
    }, [timer]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button className="carousel-button prev" onClick={prevSlide}>❮</button>
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={index === currentIndex ? 'active' : ''}
                    />
                ))}
            </div>
            <button className="carousel-button next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Banner;