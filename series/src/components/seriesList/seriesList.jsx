// Series list component for the series application
import React from 'react';

const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const parts = isoDate.split('-');
    if (parts.length !== 3) return isoDate;
    const [year, month, day] = parts;
    return `${day}-${month}-${year}`;
}

const SeriesList = ({ series, onEditSeries, onDeleteSeries }) => {
    return (
        <div className="series-list">
            {series.length === 0 ? (
                <p>Nenhuma série cadastrada.</p>
            ) : (
                <ul>
                    {series.map((serie, index) => (
                        <li key={index}>
                            <h3>{serie.title}</h3>
                            <p>Número de Temporadas: {serie.numberSeasons}</p>
                            <p>Data de Lançamento da Temporada: {formatDate(serie.seasonReleaseDate)}</p>
                            <p>Diretor: {serie.director}</p>
                            <p>Produtor: {serie.producer}</p>
                            <p>Gênero: {serie.genre}</p>
                            <p>Data de Visualização: {formatDate(serie.viewingDate)}</p>
                            {(onEditSeries || onDeleteSeries) && (
                                <div className="series-actions">
                                    {onEditSeries && (
                                        <button type="button" onClick={() => onEditSeries(index)}>
                                            Editar
                                        </button>
                                    )}
                                    {onDeleteSeries && (
                                        <button type="button" onClick={() => onDeleteSeries(index)}>
                                            Excluir
                                        </button>
                                    )}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SeriesList;
