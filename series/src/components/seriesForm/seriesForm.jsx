//Series form component for the series application
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SeriesForm = ({ onSubmit = () => {} }) => {
    const [title, setTitle] = useState('');
    const [numberSeasons, setNumberSeasons] = useState(1);
    const [seasonReleaseDate, setSeasonReleaseDate] = useState(null);
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [genre, setGenre] = useState('');
    const [viewingDate, setViewingDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // convert Date objects (from DatePicker) to ISO yyyy-mm-dd strings for storage/compatibility
        const formattedSeasonReleaseDate = seasonReleaseDate ? seasonReleaseDate.toISOString().split('T')[0] : '';
        const formattedViewingDate = viewingDate ? viewingDate.toISOString().split('T')[0] : '';

        const newSeries = {
            title: title.trim(),
            numberSeasons,
            seasonReleaseDate: formattedSeasonReleaseDate,
            director,
            producer,
            genre,
            viewingDate: formattedViewingDate
        };
        onSubmit(newSeries);
        setTitle('');
        setNumberSeasons(1);
        setSeasonReleaseDate(null);
        setDirector('');
        setProducer('');
        setGenre('');
        setViewingDate(null);
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
                <input
                    type="number"
                    value={numberSeasons}
                    onChange={(e) => setNumberSeasons(Math.max(1, Number(e.target.value)))}
                    min="1"
                    required
                />
            </label>
            <label>
                Data de Lançamento da Temporada:
                <DatePicker
                    selected={seasonReleaseDate}
                    onChange={(date) => setSeasonReleaseDate(date)}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="dd-MM-yyyy"
                    required
                />
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
                <DatePicker
                    selected={viewingDate}
                    onChange={(date) => setViewingDate(date)}
                    dateFormat="dd-MM-yyyy"
                    placeholderText="dd-MM-yyyy"
                    required
                />
            </label>
            <button type="submit">Adicionar Série</button>
        </form>
    );
};

export default SeriesForm;
