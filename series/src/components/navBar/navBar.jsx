// Enhanced nav bar using Material UI components
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

const navLinks = [
  { label: 'Página Inicial', path: '/' },
  { label: 'Sobre', path: '/about' },
  { label: 'Adicionar Séries', path: '/register' },
  { label: 'Lista de Séries', path: '/series-list' }
];

const NavBar = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: 'blur(18px)',
        backgroundColor: 'rgba(255,255,255,0.9)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        mb: 4
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            Aplicação de Séries
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant={isActive ? 'contained' : 'text'}
                  color={isActive ? 'primary' : 'inherit'}
                  sx={{
                    color: isActive ? 'primary.contrastText' : 'text.primary',
                    px: 2.5
                  }}
                >
                  {link.label}
                </Button>
              );
            })}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
