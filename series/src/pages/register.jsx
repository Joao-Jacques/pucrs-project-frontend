// Register page for the series application
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesForm from '../components/seriesForm/seriesForm.jsx';

const Register = ({ onRegisterSeries = () => {} }) => {
    const navigate = useNavigate();

    const handleSeriesSubmit = (seriesData) => {
        onRegisterSeries(seriesData);
        navigate('/series-list');
    };

    return (
        <div className="register-page">
            <NavBar />
            <h2>Registrar Nova Série</h2>
            <SeriesForm onSubmit={handleSeriesSubmit} />
        </div>
    );
};

export default Register;
