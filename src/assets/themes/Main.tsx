import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FFFFFF',
      main: '#00A335',
      dark: '#87c984',
      contrastText: '#fff',
    },
    secondary: {
      light: '#87c984',
      main: '#00863F',
      dark: '#002630',
      contrastText: '#000',
    },
  },
});

export default theme;