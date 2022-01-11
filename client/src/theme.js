import { createTheme } from '@mui/material/styles';

const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#cdcdce',
        },
        secondary: {
            main: '#e6642b',
        },
        info: {
            main: '#5f1994',
        },
        type: 'dark',
        primary: {
            main: '#cdcdce',
        },
        secondary: {
            main: '#e6642b',
        },
        info: {
            main: '#5f1994',
        },
    },
};

const theme = createTheme(themeOptions)

export default theme;