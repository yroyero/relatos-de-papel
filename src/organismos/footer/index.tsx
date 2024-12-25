import React from 'react';
import './style.css';

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <p>&copy; {new Date().getFullYear()} Relatos de Papel. Todos los derechos reservados.</p>
        </div>
    );
};

