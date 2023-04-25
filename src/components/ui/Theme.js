import { createTheme } from '@mui/material'

const vgBlue = '#B8D8D8'
const vgRed = '#FE5F55'

export default createTheme({
  palette: {
    common: {
      blue: `${vgBlue}`,
      red: `${vgRed}`,
    },
    primary: {
      main: `${vgBlue}`,
      light: '#7A9E9F',
      dark: '#4F6367',
    },
    secondary: {
      main: '#7A9E9F',
      light: '#EEF5D8',
      dark: `${vgRed}`,
    },
    terciary: {
      main: `${vgRed}`,
      light: '#EEF5D8',
      dark: `${vgRed}`,
    },
  },
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: '#7A9E9F',
        },
        list: {
          color: 'white',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Cardo',
          fontVariant: 'small-caps',
          opacity: 0.8,
          '&:hover': {
            opacity: 1,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          background: '#B8D8D8',
          opacity: 0.8,
          '&:hover': {
            opacity: 1,
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
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
      fontFamily: 'Cardo',
      fontSize: '2.5rem',
      color: '#4F6367',
    },
    h4: {
      fontWeight: 100,
      fontFamily: 'Cardo',
      color: '#4F6367',
    },
    h6: {
      fontWeight: 50,
      fontFamily: 'Cardo',
      color: '#7A9E9F',
    },
    subtitle1: {
      color: '#868686',
      fontFamily: 'Montserrat',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    subtitle2: {
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      color: '#4F6367',
      fontSize: '1.25rem',
    },
    p: {
      color: '#868686',
      fontFamily: 'Montserrat',
      fontSize: '1.1rem',
      lineHeight: '1.3em',
      fontWeight: 100,
    },
  },
})
