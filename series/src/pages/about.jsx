//about page for the series application
import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';

const About = () => {
    return (
        <div className="about-page">
            <NavBar />
            <h2>Sobre a Aplicação de Séries</h2>
            <p>Esta aplicação foi desenvolvida para gerenciar e acompanhar suas séries favoritas. Você pode adicionar novas séries, visualizar a lista de séries cadastradas e obter informações detalhadas sobre cada uma delas.</p>
            <p>Desenvolvido por: João Jacques </p>
        </div>
    );
};

export default About;