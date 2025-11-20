// Series list page redesigned with Material UI components
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NavBar from '../components/navBar/navBar.jsx';
import SeriesList from '../components/seriesList/seriesList.jsx';
import SeriesEditDialog from '../components/seriesEditDialog/seriesEditDialog.jsx';

const SeriesListPage = ({ series = [], onEditSeries, onDeleteSeries, isLoading = false, errorMessage = '' }) => {
  const navigate = useNavigate();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedSerie, setSelectedSerie] = useState(null);
  const [dialogError, setDialogError] = useState('');

  const openEditDialog = (serie) => {
    if (!serie) return;
    setSelectedSerie(serie);
    setDialogError('');
    setIsEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedSerie(null);
  };

  const handleEditSubmit = async (updatedSerie) => {
    if (!onEditSeries || !selectedSerie) return;

    try {
      await onEditSeries(updatedSerie);
      closeEditDialog();
    } catch (error) {
      console.error('Erro ao editar série', error);
      setDialogError('Não foi possível salvar as alterações. Tente novamente.');
      throw error;
    }
  };

  const handleDelete = async (serie) => {
    if (!onDeleteSeries || !serie) return;
    const confirmed = window.confirm('Tem certeza que deseja excluir esta série?');
    if (confirmed) {
      try {
        await onDeleteSeries(serie);
      } catch (error) {
        console.error('Erro ao excluir série', error);
      }
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
        {errorMessage && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {errorMessage}
          </Alert>
        )}
        {isLoading ? (
          <Paper
            elevation={0}
            sx={{
              py: 6,
              textAlign: 'center',
              border: '1px solid',
              borderColor: 'divider',
              backgroundColor: 'rgba(255,255,255,0.85)'
            }}
          >
            <Stack spacing={2} alignItems="center">
              <CircularProgress />
              <Typography color="text.secondary">Carregando séries...</Typography>
            </Stack>
          </Paper>
        ) : (
          <SeriesList series={series} onEditSeries={openEditDialog} onDeleteSeries={handleDelete} />
        )}
        <SeriesEditDialog
          open={isEditDialogOpen}
          serie={selectedSerie}
          onClose={closeEditDialog}
          onSubmit={handleEditSubmit}
          errorMessage={dialogError}
        />
      </Container>
    </Box>
  );
};

export default SeriesListPage;
