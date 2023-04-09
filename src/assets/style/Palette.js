import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        dk: {
            main: "#5e3575"
        },
        lt: {
            main: "#c676f5"
        },
        bg: {
            main: "#bfaed4"
        },
        contrastThreshold: 4.5,
        tonalOffset: 0.2
    }
});