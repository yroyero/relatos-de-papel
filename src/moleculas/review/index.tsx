import React from 'react';
import './style.css';
import { ReviewProps } from '../../@types';
import Rating from '../rating';

const Review: React.FC<ReviewProps> = ({ author, content, date, rating }) => {
    return (
        <div className="review">
            <div className="review-header">
                <h3 className="review-author">{author}</h3>
                <Rating max={5} value={rating}/>
                <span className="review-date">{date}</span>
            </div>
            <p className="review-content">{content}</p>
        </div>
    );
};



export default Review;


