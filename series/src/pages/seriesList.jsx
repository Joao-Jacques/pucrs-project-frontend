// Series list page redesigned with Material UI components
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesList from '../components/seriesList/seriesList.jsx';

const SeriesListPage = ({ series = [], onEditSeries, onDeleteSeries }) => {
  const navigate = useNavigate();

  const promptField = (label, currentValue) => {
    const response = window.prompt(label, currentValue ?? '');
    if (response === null) return currentValue;
    return response.trim() === '' ? currentValue : response.trim();
  };

  const handleEdit = (index) => {
    if (!onEditSeries) return;
    const currentSerie = series[index];

    if (!currentSerie) return;
    const seasonsInput = promptField('Número de Temporadas', currentSerie.numberSeasons);
    const parsedSeasons = Number(seasonsInput);
    const updatedSerie = {
      ...currentSerie,
      title: promptField('Título', currentSerie.title),
      numberSeasons: Number.isNaN(parsedSeasons) ? currentSerie.numberSeasons : parsedSeasons,
      seasonReleaseDate: promptField('Data de Lançamento (yyyy-mm-dd)', currentSerie.seasonReleaseDate),
      director: promptField('Diretor', currentSerie.director),
      producer: promptField('Produtor', currentSerie.producer),
      genre: promptField('Gênero', currentSerie.genre),
      viewingDate: promptField('Data de Visualização (yyyy-mm-dd)', currentSerie.viewingDate)
    };

    onEditSeries(index, updatedSerie);
  };

  const handleDelete = (index) => {
    if (!onDeleteSeries) return;
    const confirmed = window.confirm('Tem certeza que deseja excluir esta série?');
    if (confirmed) {
      onDeleteSeries(index);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            border: '1px solid',
            borderColor: 'divider',
            backgroundColor: 'rgba(255,255,255,0.85)',
            mb: 3
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="h4" gutterBottom>
                Lista de séries
              </Typography>
              <Typography color="text.secondary">
                Visualize e gerencie todas as séries cadastradas pela aplicação.
              </Typography>
            </Box>
            <Button
              variant="contained"
              startIcon={<AddRoundedIcon />}
              onClick={() => navigate('/register')}
              size="large"
            >
              Registrar nova série
            </Button>
          </Stack>
        </Paper>
        <SeriesList series={series} onEditSeries={handleEdit} onDeleteSeries={handleDelete} />
      </Container>
    </Box>
  );
};

export default SeriesListPage;
