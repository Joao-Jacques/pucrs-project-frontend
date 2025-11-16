// Series list rendered with Material UI table components
import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

const formatDate = (dateValue) => {
  if (!dateValue) return '-';
  const [year, month, day] = dateValue.split('-');
  if (!year || !month || !day) return dateValue;
  return `${day}/${month}/${year}`;
};

const tableHeadings = ['Título', 'Temporadas', 'Lançamento', 'Diretor', 'Produtor', 'Gênero', 'Visualização'];

const SeriesList = ({ series = [], onEditSeries, onDeleteSeries }) => {
  if (!series.length) {
    return (
      <Paper
        elevation={0}
        sx={{
          py: 6,
          px: 3,
          textAlign: 'center',
          border: '1px dashed',
          borderColor: 'divider',
          background: 'rgba(255,255,255,0.8)'
        }}
      >
        <Stack spacing={1} alignItems="center">
          <MovieFilterRoundedIcon color="primary" sx={{ fontSize: 40 }} />
          <Typography variant="h6">Nenhuma série cadastrada</Typography>
          <Typography color="text.secondary">Adicione novas séries para acompanhá-las aqui.</Typography>
        </Stack>
      </Paper>
    );
  }

  const hasActions = Boolean(onEditSeries || onDeleteSeries);
  const headings = hasActions ? [...tableHeadings, 'Ações'] : tableHeadings;

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(255,255,255,0.85)'
      }}
    >
      <Table size="medium">
        <TableHead>
          <TableRow>
            {headings.map((heading) => (
              <TableCell
                key={heading}
                sx={{ fontWeight: 600, color: 'text.secondary', textTransform: 'uppercase', fontSize: '0.8rem' }}
              >
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {series.map((serie, index) => (
            <TableRow hover key={`${serie.title}-${index}`}>
              <TableCell>{serie.title}</TableCell>
              <TableCell>{serie.numberSeasons}</TableCell>
              <TableCell>{formatDate(serie.seasonReleaseDate)}</TableCell>
              <TableCell>{serie.director}</TableCell>
              <TableCell>{serie.producer}</TableCell>
              <TableCell>{serie.genre}</TableCell>
              <TableCell>{formatDate(serie.viewingDate)}</TableCell>
              {hasActions && (
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    {onEditSeries && (
                      <Tooltip title="Editar série">
                        <IconButton color="primary" onClick={() => onEditSeries(index)} size="small">
                          <EditRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                    {onDeleteSeries && (
                      <Tooltip title="Excluir série">
                        <IconButton color="error" onClick={() => onDeleteSeries(index)} size="small">
                          <DeleteRoundedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    )}
                  </Stack>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SeriesList;
