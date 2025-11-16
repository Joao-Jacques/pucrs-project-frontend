// Series form redesigned with Material UI components
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';

const initialValues = {
  title: '',
  numberSeasons: '1',
  seasonReleaseDate: '',
  director: '',
  producer: '',
  genre: '',
  viewingDate: ''
};

const SeriesForm = ({ onSubmit = () => {} }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numberSeasons = Math.max(1, Number(values.numberSeasons) || 1);

    const newSeries = {
      title: values.title.trim(),
      numberSeasons,
      seasonReleaseDate: values.seasonReleaseDate,
      director: values.director.trim(),
      producer: values.producer.trim(),
      genre: values.genre.trim(),
      viewingDate: values.viewingDate
    };

    onSubmit(newSeries);
    setValues(initialValues);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%'
      }}
    >
      <Stack spacing={2.5}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <MovieCreationRoundedIcon color="primary" />
          <Typography variant="h5" fontWeight={700}>
            Adicione uma nova série
          </Typography>
        </Stack>
        <TextField
          label="Título"
          value={values.title}
          onChange={handleChange('title')}
          required
          fullWidth
        />
        <TextField
          label="Número de Temporadas"
          type="number"
          value={values.numberSeasons}
          onChange={handleChange('numberSeasons')}
          InputProps={{ inputProps: { min: 1 } }}
          required
          fullWidth
        />
        <TextField
          label="Data de Lançamento da Temporada"
          type="date"
          value={values.seasonReleaseDate}
          onChange={handleChange('seasonReleaseDate')}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
        <TextField
          label="Diretor"
          value={values.director}
          onChange={handleChange('director')}
          required
          fullWidth
        />
        <TextField
          label="Produtor"
          value={values.producer}
          onChange={handleChange('producer')}
          required
          fullWidth
        />
        <TextField
          label="Gênero"
          value={values.genre}
          onChange={handleChange('genre')}
          required
          fullWidth
        />
        <TextField
          label="Data de Visualização"
          type="date"
          value={values.viewingDate}
          onChange={handleChange('viewingDate')}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
        />
        <Button type="submit" variant="contained" size="large">
          Adicionar Série
        </Button>
      </Stack>
    </Box>
  );
};

export default SeriesForm;
