//Series form component for the series application
import React, { useState } from 'react';

const SeriesForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [numberSeasons, setNumberSeasons] = useState(1);
    const [seasonReleaseDate, setSeasonReleaseDate] = useState('');
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [genre, setGenre] = useState('');
    const [viewingDate, setViewingDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newSeries = {
            title,
            numberSeasons,
            seasonReleaseDate,
            director,
            producer,
            genre,
            viewingDate
        };
        onSubmit(newSeries);
    };
    return (
        <form className="series-form" onSubmit={handleSubmit}>
            <h2>Adicione uma nova série</h2>
            <label>
                Título:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            <label>
                Número de Temporadas:
                <input type="number" value={numberSeasons} onChange={(e) => setNumberSeasons(e.target.value)} min="1" required />
            </label>
            <label>
                Data de Lançamento da Temporada:
                <input type="date" value={seasonReleaseDate} onChange={(e) => setSeasonReleaseDate(e.target.value)} required />
            </label>
            <label>
                Diretor:
                <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} required />
            </label>
            <label>
                Produtor:
                <input type="text" value={producer} onChange={(e) => setProducer(e.target.value)} required />
            </label>
            <label>
                Gênero:
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />
            </label>
            <label>
                Data de Visualização:
                <input type="date" value={viewingDate} onChange={(e) => setViewingDate(e.target.value)} required />
            </label>
            <button type="submit">Adicionar Série</button>
        </form>
    );
};

export default SeriesForm;