// Register page for the series application
import {React}   from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesForm from '../components/seriesForm/seriesForm.jsx';

const Register = () => {
    return (
        <div className="register-page">
            <NavBar />
            <h2>Registrar Nova Série</h2>
            <SeriesForm />
        </div>
    );
};

export default Register;