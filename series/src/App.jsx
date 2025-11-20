// series application main App component
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Register from './pages/register.jsx';
import SeriesListPage from './pages/seriesList.jsx';
import { getAllSeries, createSeries, updateSeries, deleteSeries } from './api/seriesApi.js';

const getSerieId = (serie) => serie?.id ?? serie?._id ?? null;

const App = () => {
    const [series, setSeries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchSeries = useCallback(async () => {
        setIsLoading(true);
        setErrorMessage('');
        try {
            const response = await getAllSeries();
            setSeries(Array.isArray(response) ? response : []);
        } catch (error) {
            console.error('Erro ao carregar séries', error);
            setErrorMessage('Não foi possível carregar as séries. Tente novamente.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSeries();
    }, [fetchSeries]);

    const handleAddSeries = async (newSeries) => {
        setErrorMessage('');
        try {
            const createdSeries = await createSeries(newSeries);
            setSeries((prevSeries) => [...prevSeries, createdSeries]);
            return createdSeries;
        } catch (error) {
            console.error('Erro ao criar série', error);
            setErrorMessage('Não foi possível adicionar a série.');
            throw error;
        }
    };

    const handleEditSeries = async (updatedSeries) => {
        const serieId = getSerieId(updatedSeries);
        if (!serieId) {
            setErrorMessage('Registro inválido para atualização.');
            return;
        }

        setErrorMessage('');
        try {
            const savedSeries = await updateSeries(updatedSeries);
            const savedId = getSerieId(savedSeries) ?? serieId;

            setSeries((prevSeries) =>
                prevSeries.map((serie) => (getSerieId(serie) === savedId ? savedSeries : serie))
            );

            return savedSeries;
        } catch (error) {
            console.error('Erro ao atualizar série', error);
            setErrorMessage('Não foi possível atualizar a série.');
            throw error;
        }
    };

    const handleDeleteSeries = async (serie) => {
        const serieId = getSerieId(serie);
        if (!serieId) {
            setErrorMessage('Registro inválido para exclusão.');
            return;
        }

        setErrorMessage('');
        try {
            await deleteSeries(serieId);
            setSeries((prevSeries) => prevSeries.filter((item) => getSerieId(item) !== serieId));
        } catch (error) {
            console.error('Erro ao remover série', error);
            setErrorMessage('Não foi possível remover a série.');
            throw error;
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register onRegisterSeries={handleAddSeries} />} />
                <Route
                    path="/series-list"
                    element={
                        <SeriesListPage
                            series={series}
                            isLoading={isLoading}
                            errorMessage={errorMessage}
                            onEditSeries={handleEditSeries}
                            onDeleteSeries={handleDeleteSeries}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
