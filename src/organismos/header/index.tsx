import React from 'react';
import './style.css';
import ShopCart from '../shopCart';
import { Link, useLocation } from 'react-router-dom';
import Alert from '../alerts';

export const Header: React.FC = () => {
    const location = useLocation();    
    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    }
    return (
        <div className="header">
            <div className="header-logo">
                <img src="/logo.png" alt="Logo" />
                <span className="header-logo-title">Relatos de Papel</span>
            </div>
          
            <nav className="header-menu">
                <ul>
                    <li className={isActive('/home')}>
                    <Link to="/home">Inicio</Link>
                    </li>
                    <li className={isActive('/books')}>
                    <Link to="/books">Libros</Link>
                    </li>
                    <li className={isActive('/payment')}>
                        <Link to="/payment">Carrito</Link>
                        </li>                    
                    <li className={isActive('/contact')}>
                        <Link to="/contact">Contacto</Link>
                        </li>
                </ul>
            </nav>           
            <div className="header-user-section"> 
                <Alert />
                <ShopCart />
            </div>
        </div>
    );
};

