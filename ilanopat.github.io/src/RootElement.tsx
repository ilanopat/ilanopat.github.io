import React from 'react';
import {ThemeProvider} from '@material-ui/core';
import {theme} from './theme';

const RootElement = ({element})=>{
    <ThemeProvider theme={theme}>
        hello
        {element}
    </ThemeProvider>
};

export default RootElement;