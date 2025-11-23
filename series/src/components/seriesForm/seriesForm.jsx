//Series form component for the series application
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SeriesForm = ({ onSubmit = () => {}, initialData = null, onCancel = null }) => {
    const [title, setTitle] = useState('');
    const [numberSeasons, setNumberSeasons] = useState(1);
    const [seasonReleaseDate, setSeasonReleaseDate] = useState(null);
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [genre, setGenre] = useState('');
    const [viewingDate, setViewingDate] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!initialData) return;
        setTitle(initialData.title || '');
        setNumberSeasons(initialData.numberSeasons || 1);
        setSeasonReleaseDate(initialData.seasonReleaseDate ? new Date(initialData.seasonReleaseDate) : null);
        setDirector(initialData.director || '');
        setProducer(initialData.producer || '');
        setGenre(initialData.genre || '');
        setViewingDate(initialData.viewingDate ? new Date(initialData.viewingDate) : null);
        setError('');
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // convert Date objects (from DatePicker) to ISO yyyy-mm-dd strings for storage/compatibility
        const formattedSeasonReleaseDate = seasonReleaseDate ? seasonReleaseDate.toISOString().split('T')[0] : '';
        const formattedViewingDate = viewingDate ? viewingDate.toISOString().split('T')[0] : '';

        if (title.trim() === '') {
            setError('O título é obrigatório.');
            return;
        }

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
        // clear form only when not editing
        if (!initialData) {
            setTitle('');
            setNumberSeasons(1);
            setSeasonReleaseDate(null);
            setDirector('');
            setProducer('');
            setGenre('');
            setViewingDate(null);
        }
    };
    return (
        <form className="series-form" onSubmit={handleSubmit}>
            <h2>{initialData ? 'Editar série' : 'Adicione uma nova série'}</h2>
            {error && <div className="form-error">{error}</div>}
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
            <div className="form-actions">
                <button type="submit">{initialData ? 'Salvar' : 'Adicionar Série'}</button>
                {initialData && onCancel && (
                    <button type="button" onClick={onCancel} className="cancel">
                        Cancelar
                    </button>
                )}
            </div>
        </form>
    );
};

export default SeriesForm;
