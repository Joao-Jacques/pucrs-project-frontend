import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5e60ce'
    },
    secondary: {
      main: '#4ea8de'
    },
    background: {
      default: '#f4f6fb',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    h3: {
      fontWeight: 700
    },
    h4: {
      fontWeight: 600
    },
    subtitle1: {
      color: '#5b6078'
    }
  },
  shape: {
    borderRadius: 18
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 999
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24
        }
      }
    }
  }
});

export default theme;
