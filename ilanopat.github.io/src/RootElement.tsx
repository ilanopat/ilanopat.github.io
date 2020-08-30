import React from 'react';
import Provider from './components/ThemeProvider';

const RootElement = ({element})=>{
    return (
    <Provider>
        {element}
    </Provider>
    );
};

export default RootElement;