// Series list page with edit/delete actions
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesList from '../components/seriesList/seriesList.jsx';

const SeriesListPage = ({ series = [], onEditSeries, onDeleteSeries }) => {
    const navigate = useNavigate();

    const promptField = (label, currentValue) => {
        const response = window.prompt(label, currentValue ?? '');
        if (response === null) return currentValue;
        return response.trim() === '' ? currentValue : response.trim();
    };

    const handleEdit = (index) => {
        if (!onEditSeries) return;
        const currentSerie = series[index];
        if (!currentSerie) return;

        const seasonsInput = promptField('Número de Temporadas', currentSerie.numberSeasons);
        const parsedSeasons = Number(seasonsInput);
        const updatedSerie = {
            ...currentSerie,
            title: promptField('Título', currentSerie.title),
            numberSeasons: Number.isNaN(parsedSeasons) ? currentSerie.numberSeasons : parsedSeasons,
            seasonReleaseDate: promptField('Data de Lançamento (yyyy-mm-dd)', currentSerie.seasonReleaseDate),
            director: promptField('Diretor', currentSerie.director),
            producer: promptField('Produtor', currentSerie.producer),
            genre: promptField('Gênero', currentSerie.genre),
            viewingDate: promptField('Data de Visualização (yyyy-mm-dd)', currentSerie.viewingDate)
        };

        onEditSeries(index, updatedSerie);
    };

    const handleDelete = (index) => {
        if (!onDeleteSeries) return;
        const confirmed = window.confirm('Tem certeza que deseja excluir esta série?');
        if (confirmed) {
            onDeleteSeries(index);
        }
    };

    return (
        <div className="series-list-page">
            <NavBar />
            <div className="series-list-header">
                <h2>Lista de Séries</h2>
                <button type="button" onClick={() => navigate('/register')}>
                    Registrar nova série
                </button>
            </div>
            <SeriesList series={series} onEditSeries={handleEdit} onDeleteSeries={handleDelete} />
        </div>
    );
};

export default SeriesListPage;
