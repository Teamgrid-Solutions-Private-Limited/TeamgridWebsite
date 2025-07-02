import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#05408E',
      light: '#2D65AE',
      dark: '#03306A',
    },
    secondary: {
      main: '#0070FF',
      light: '#1976F8',
      dark: '#125BB5',
    },
    error: {
      main: '#FF5A2D',
    },
    success: {
      main: '#25BE5F',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#140E13',
      secondary: '#333333',
    },
  },
  typography: {
    fontFamily: '"PayPal Open", Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '64px',
      lineHeight: 1,
      '@media (max-width:900px)': {
        fontSize: '48px',
      },
      '@media (max-width:600px)': {
        fontSize: '36px',
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: '56px',
      lineHeight: 1,
      '@media (max-width:900px)': {
        fontSize: '42px',
      },
      '@media (max-width:600px)': {
        fontSize: '32px',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '18px',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '16px',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 300,
    },
    button: {
      textTransform: 'none',
      fontWeight: 400,
      fontSize: '18px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '40px',
          padding: '16px 32px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
          '@media (min-width:1200px)': {
            paddingLeft: '120px',
            paddingRight: '120px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2000,
    },
  },
});

export default theme; 