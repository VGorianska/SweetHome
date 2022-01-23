import { createTheme } from '@mui/material/styles';

const themeOptions = {

    palette: {
        background: {
            default: "#dde0e7"
        },
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
    },
};

const theme = createTheme(themeOptions)

export default theme;