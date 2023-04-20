import { createTheme } from '@mui/material'

const vgBlue = '#B8D8D8'
const vgRed = '#FE5F55'

export default createTheme({
  palette: {
    common: {
      blue: `${vgBlue}`,
      beige: `${vgRed}`,
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
  },
})
