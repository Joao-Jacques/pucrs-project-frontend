// Home page for the series application
import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';

const Home = () => {
    return (
        <div className="home-page">
            <NavBar />
            <h2>Bem-vindo à Aplicação de Séries</h2>
            <p>Gerencie suas séries favoritas de forma fácil e prática!</p>
        </div>
    );
};

export default Home;