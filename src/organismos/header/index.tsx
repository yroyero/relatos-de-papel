import React from 'react';
import './style.css';
import ShopCart from '../shopCart';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
    const location = useLocation();    
    const isActive = (path: string) => {
        return location.pathname === path ? 'active' : '';
    }
    return (
        <div className="header">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
                <span className="header-logo-title">Relatos de Papel</span>
            </div>
           {/*  <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button type="submit">Search</button>
            </div> */}
            <nav className="menu">
                <ul>
                    <li className={isActive('/home')}>
                    <Link to="/home">Inicio</Link>
                    </li>
                    <li className={isActive('/books')}>
                    <Link to="/books">Libros</Link>
                    </li>
                    <li className={isActive('/shop')}>
                        <Link to="/shop">Carrito</Link>
                        </li>                    
                    <li className={isActive('/contact')}>
                        <Link to="/contact">Contacto</Link>
                        </li>
                </ul>
            </nav>           
            <div className="user-section">               
                {/* <div className="shopping-cart">
                    <FaShoppingCart/>
                    <span>3</span>
                </div> */}
                <ShopCart />
            </div>
        </div>
    );
};

