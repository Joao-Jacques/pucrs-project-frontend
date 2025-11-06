//navBar component for the series application
import React from 'react';
import { Link } from 'react-router-dom';
//import './navBar.css'; --- IGNORE ---
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <h1>Aplicação de Séries</h1>
            <ul className="nav-links">
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/register">Adicione séries</Link></li>
                <li><Link to="/series-list">Lista de séries</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;