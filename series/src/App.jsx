// series application main App component
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Register from './pages/register.jsx';
import SeriesListPage from './pages/seriesList.jsx';

const App = () => {
    const sampleSeries = [
        {
            title: "Stranger Things",
            numberSeasons: 4,
            seasonReleaseDate: "2022-05-27",
            director: "The Duffer Brothers",
            producer: "Shawn Levy",
            genre: "Sci-Fi, Horror",
            viewingDate: "2022-06-01"
        },
        {
            title: "Breaking Bad",
            numberSeasons: 5,
            seasonReleaseDate: "2013-09-29",
            director: "Vince Gilligan",
            producer: "Mark Johnson",
            genre: "Crime, Drama",
            viewingDate: "2020-11-15"
        }
    ];
    const [series, setSeries] = useState(sampleSeries);

    const handleAddSeries = (newSeries) => {
        setSeries((prevSeries) => [...prevSeries, newSeries]);
    };

    const handleEditSeries = (index, updatedSeries) => {
        setSeries((prevSeries) =>
            prevSeries.map((serie, idx) => (idx === index ? { ...serie, ...updatedSeries } : serie))
        );
    };

    const handleDeleteSeries = (index) => {
        setSeries((prevSeries) => prevSeries.filter((_, idx) => idx !== index));
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
