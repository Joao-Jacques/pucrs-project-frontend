// Series list component for the series application
import React from 'react';

const SeriesList = ({ series }) => {
    return (
        <div className="series-list">
            <h2>Lista de Séries</h2>
            <ul>
                {series.map((serie, index) => (
                    <li key={index}>
                        <h3>{serie.title}</h3>
                        <p>Número de Temporadas: {serie.numberSeasons}</p>
                        <p>Data de Lançamento da Temporada: {serie.seasonReleaseDate}</p>
                        <p>Diretor: {serie.director}</p>
                        <p>Produtor: {serie.producer}</p>
                        <p>Gênero: {serie.genre}</p>
                        <p>Data de Visualização: {serie.viewingDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SeriesList;
