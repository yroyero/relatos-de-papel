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
        <div className="landing-page">
            <div className="spinner">              
            </div>
            <h1>Bienvenido a Relatos de Papel</h1>
            <p>Serás redirigido a la página de inicio en 5 segundos...</p>
        </div>
    );
};

export default Landing;