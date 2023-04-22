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
      light: 'EEF5D8',
      dark: `${vgRed}`,
    },
    terciary: {
      main: `${vgRed}`,
      light: 'EEF5D8',
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
    MuiSwipeableDrawer: {
      styleOverrides: {
        paper: {
          background: 'secondary',
        },
      },
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
      fontFamily: ['Cardo', 'Montserrat'],
    },
    h4: {
      fontWeight: 100,
      fontFamily: ['Cardo', 'Montserrat'],
    },
    h6: {
      fontWeight: 50,
      fontFamily: ['Cardo', 'Montserrat'],
    },
  },
})