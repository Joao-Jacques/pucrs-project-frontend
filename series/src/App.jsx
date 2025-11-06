// series application main App component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Register from './pages/register.jsx';
import SeriesList from './components/seriesList/seriesList.jsx';

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

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/series-list" element={<SeriesList series={sampleSeries} />} />
            </Routes>
        </Router>
    );
};

export default App;