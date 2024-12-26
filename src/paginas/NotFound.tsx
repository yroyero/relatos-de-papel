import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound: React.FC = () => {
    return (
        <div className="notfound-container">
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" >Volver al inicio</Link>
        </div>
    );
};

export default NotFound;