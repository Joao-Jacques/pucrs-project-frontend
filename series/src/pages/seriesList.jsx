// Series List Page
import React, { useState } from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesList from '../components/seriesList/seriesList.jsx';
import SeriesForm from '../components/seriesForm/seriesForm.jsx';
const SeriesListPage = () => {
    const [series, setSeries] = useState([]);
    const addSeries = (newSeries) => {
        setSeries([...series, newSeries]);
    };
    return (
        <div className="series-list-page">
            <NavBar />
            <h2>Lista de Séries</h2>
            <SeriesForm onAddSeries={addSeries} />
            <SeriesList series={series} />
        </div>
    );
};

export default SeriesListPage;