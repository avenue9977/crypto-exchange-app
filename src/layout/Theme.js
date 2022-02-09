import {createTheme} from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: '#01B378',
            contrastText: '#F8F8F8'
        },
        secondary: {
            main: '#576CD3',
            contrastText: '#F8F8F8'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 8
            }
        },
        MuiIconButton: {
            defaultProps: {
                size: 'large',
                color: 'secondary',
                sx: {
                    px: 2
                }
            }
        }
    }
});
