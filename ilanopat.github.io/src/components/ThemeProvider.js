import React, { useEffect }  from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Layout from './layout';

const ThemeContext = React.createContext();

const Provider = ({children})=>{
    const [themeMode, setThemeMode] =React.useState('light');
    const [componentMounted, setComponentMounted] = React.useState(false);

    const setMode = mode => {
        localStorage.setItem('theme', mode)
        setThemeMode(mode)
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setMode(localTheme);
        } else {
            setMode('light')
        }
        setComponentMounted(true);
    }, []);
    
    const handleThemeChange =()=>{
        if (themeMode === 'light') {
            setMode('dark')
        } else {
            setMode('light')
        }
    }
    
    const theme = 
        createMuiTheme({
        palette:{
            type: themeMode,
        }
    });
        
    return (
        <ThemeContext.Provider value={{themeMode, componentMounted,handleThemeChange}}>
            <ThemeProvider theme={theme}>
                <Layout>{children}</Layout>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default Provider;

export const useTheme = () => React.useContext(ThemeContext);