import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styleLanding.css';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <div className="spinner">              
            </div>
            <h1>Welcome to the Landing Page</h1>
            <p>You will be redirected to the home page in 5 seconds...</p>
        </div>
    );
};

export default Landing;