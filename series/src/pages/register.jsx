// Register page using Material UI layout
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesForm from '../components/seriesForm/seriesForm.jsx';

const Register = ({ onRegisterSeries = () => Promise.resolve() }) => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');

  const handleSeriesSubmit = async (seriesData) => {
    try {
      setSubmitError('');
      await onRegisterSeries(seriesData);
      navigate('/series-list');
    } catch (error) {
      console.error('Erro ao registrar série', error);
      setSubmitError('Não foi possível registrar a série. Tente novamente.');
      throw error;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <NavBar />
      <Container maxWidth="md" sx={{ pb: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            border: '1px solid',
            borderColor: 'divider',
            backdropFilter: 'blur(6px)'
          }}
        >
          <Stack spacing={3}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Registrar nova série
              </Typography>
              <Typography color="text.secondary">
                Preencha os campos abaixo para adicionar uma nova série à sua lista pessoal.
              </Typography>
            </Box>
            <Alert severity="info">
              Utilize datas reais ou futuras para lembrar quando pretende assistir as próximas temporadas.
            </Alert>
            {submitError && (
              <Alert severity="error">
                {submitError}
              </Alert>
            )}
            <SeriesForm onSubmit={handleSeriesSubmit} savingLabel="Adicionando..." />
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
