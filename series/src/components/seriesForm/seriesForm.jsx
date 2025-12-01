// Series form redesigned with Material UI components
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';

const defaultValues = {
  title: '',
  numberSeasons: '1',
  seasonReleaseDate: '',
  director: '',
  producer: '',
  genre: '',
  viewingDate: '',
};

const normalizeDate = (value) => {
  if (!value) return '';
  const stringValue = String(value);
  return stringValue.includes('T') ? stringValue.split('T')[0] : stringValue;
};

const normalizeValues = (values = {}) => ({
  title: values.title ?? '',
  numberSeasons: values.numberSeasons ? String(values.numberSeasons) : '1',
  seasonReleaseDate: normalizeDate(values.seasonReleaseDate),
  director: values.director ?? '',
  producer: values.producer ?? '',
  genre: values.genre ?? '',
  viewingDate: normalizeDate(values.viewingDate),
});

const SeriesForm = ({
  onSubmit = () => Promise.resolve(),
  initialValues = defaultValues,
  submitLabel = 'Adicionar Série',
  savingLabel = 'Salvando...',
  titleText = 'Adicione uma nova série',
}) => {
  const [values, setValues] = useState(normalizeValues(initialValues));
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setValues(normalizeValues(initialValues));
  }, [initialValues]);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const numberSeasons = Math.max(1, Number(values.numberSeasons) || 1);

    const newSeries = {
      title: values.title.trim(),
      numberSeasons,
      seasonReleaseDate: values.seasonReleaseDate,
      director: values.director.trim(),
      producer: values.producer.trim(),
      genre: values.genre.trim(),
      viewingDate: values.viewingDate,
    };

    try {
      await onSubmit(newSeries);
      setValues(normalizeValues(defaultValues));
    } catch (error) {
      console.error('Erro ao enviar série', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: '100%',
      }}
    >
      <Stack spacing={2.5}>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <MovieCreationRoundedIcon color="primary" />
          <Typography variant="h5" fontWeight={700}>
            {titleText}
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
        <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
          {isSubmitting ? savingLabel : submitLabel}
        </Button>
      </Stack>
    </Box>
  );
};

export default SeriesForm;
