import { createMuiTheme } from "@material-ui/core";

const theme = 
    createMuiTheme({
    pallete:{
        type: 'dark',
        primary: {
          main: '#152B38',
        },
        secondary: {
          main: '#65C5C7',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    }});

export default theme;