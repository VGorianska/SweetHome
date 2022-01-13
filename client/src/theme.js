import { createTheme } from '@mui/material/styles';

const themeOptions = {
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
        // primary: {
        //     main: '#737485',
        //     light: '#8a7b84',
        //     dark: '#413b41',
        // },
        // secondary: {
        //     main: '#e6642b',
        // },
        // info: {
        //     main: '#5f1994',
        // },
    },
};

const theme = createTheme(themeOptions)

export default theme;