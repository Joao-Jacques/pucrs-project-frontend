// Home page redesigned with Material UI layout and color palette
import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import LibraryAddRoundedIcon from '@mui/icons-material/LibraryAddRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import NavBar from '../components/navBar/navBar.jsx';

const highlights = [
  {
    title: 'Organize sua biblioteca pessoal',
    description: 'Crie registros completos das séries que você ama acompanhar.',
    icon: <LibraryAddRoundedIcon color="primary" />,
    color: 'primary.light'
  },
  {
    title: 'Memorize seus momentos favoritos',
    description: 'Guarde as datas em que você assistiu cada temporada.',
    icon: <FavoriteRoundedIcon color="secondary" />,
    color: 'secondary.light'
  }
];

const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', background: 'transparent' }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={3}>
              <Box>
                <Typography variant="overline" color="primary" fontWeight={700}>
                  Sua central de séries
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Gerencie suas séries com um visual moderno e acolhedor
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Cadastre novas séries, acompanhe temporadas e mantenha seu histórico sempre organizado.
                </Typography>
              </Box>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  size="large"
                  startIcon={<LibraryAddRoundedIcon />}
                >
                  Registrar série
                </Button>
                <Button component={Link} to="/series-list" size="large" startIcon={<PlayCircleRoundedIcon />}>
                  Ver lista
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 6,
                border: '1px solid',
                borderColor: 'divider',
                background: 'linear-gradient(135deg, rgba(94,96,206,0.15), rgba(78,168,222,0.15))'
              }}
            >
              <Stack spacing={3}>
                {highlights.map((item, index) => (
                  <React.Fragment key={item.title}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      {item.icon}
                      <Box>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                      </Box>
                    </Stack>
                    {index < highlights.length - 1 && <Divider flexItem />}
                  </React.Fragment>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
