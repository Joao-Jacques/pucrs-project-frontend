// About page refreshed with Material UI cards
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import NavBar from '../components/navBar/navBar.jsx';

const milestones = [
  { title: 'Cadastro inteligente', description: 'Campos completos para registrar temporadas, datas e detalhes.' },
  { title: 'Lista interativa', description: 'Edite ou exclua séries com apenas alguns cliques.' },
  { title: 'Interface acolhedora', description: 'Paleta suave e componentes responsivos para qualquer tela.' }
];

const About = () => {
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
              <Chip label="Sobre o projeto" color="primary" sx={{ mb: 1 }} />
              <Typography variant="h4" gutterBottom>
                Aplicação de Séries
              </Typography>
              <Typography color="text.secondary">
                Uma experiência caprichada para organizar e acompanhar as séries que fazem parte da sua rotina. Aqui
                você registra informações completas, acompanha lançamentos e mantém seu histórico sempre perto de você.
              </Typography>
            </Box>
            <Divider />
            <Stack spacing={2}>
              {milestones.map((item) => (
                <Box key={item.title}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography color="text.secondary">{item.description}</Typography>
                </Box>
              ))}
            </Stack>
            <Divider />
            <Typography variant="body2" color="text.secondary">
              Desenvolvido por: João Jacques
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default About;
