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
    if (!series || series.length === 0) {
        return (
            <div className="series-list empty">
                <p>Nenhuma série cadastrada.</p>
            </div>
        );
    }

    return (
        <div className="series-list">
            <table className="series-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Número de Temporadas</th>
                        <th>Data de Lançamento</th>
                        <th>Diretor</th>
                        <th>Produtor</th>
                        <th>Gênero</th>
                        <th>Data de Visualização</th>
                        {(onEditSeries || onDeleteSeries) && <th>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {series.map((serie, index) => (
                        <tr key={index}>
                            <td data-label="Título">{serie.title}</td>
                            <td data-label="Número de Temporadas">{serie.numberSeasons}</td>
                            <td data-label="Data de Lançamento">{formatDate(serie.seasonReleaseDate)}</td>
                            <td data-label="Diretor">{serie.director}</td>
                            <td data-label="Produtor">{serie.producer}</td>
                            <td data-label="Gênero">{serie.genre}</td>
                            <td data-label="Data de Visualização">{formatDate(serie.viewingDate)}</td>
                            {(onEditSeries || onDeleteSeries) && (
                                <td className="series-actions" data-label="Ações">
                                    {onEditSeries && (
                                        <button type="button" className="edit" onClick={() => onEditSeries(index)}>
                                            Editar
                                        </button>
                                    )}
                                    {onDeleteSeries && (
                                        <button type="button" className="delete" onClick={() => onDeleteSeries(index)}>
                                            Excluir
                                        </button>
                                    )}
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SeriesList;
