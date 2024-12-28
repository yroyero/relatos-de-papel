import React from 'react';
import './style.css';

interface RatingProps {
    value: number;
    max: number;
}

const Rating: React.FC<RatingProps> = ({ value, max }) => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
        stars.push(
            <span key={i} className={i <= value ? 'star filled' : 'star'}>
                &#9733;
            </span>
        );
    }

    return <div className="rating">{stars}</div>;
};

export default Rating;