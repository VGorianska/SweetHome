import { createTheme } from '@mui/material/styles';

const themeOptions = {
    // components: {
    //     MuiCssBaseline: {
    //       styleOverrides: {
    //         body: {
    //             background: '#333' 
    //         }
    //       },
    //     },
    //   },
    palette: {
        type: 'light',
        primary: {
            main: '#E66F20',
        },
        secondary: {
            main: '#47DB16',
        },
        info: {
            main: '#5f1994',
        },
        type: 'dark',
    },
};

const theme = createTheme(themeOptions)

export default theme;