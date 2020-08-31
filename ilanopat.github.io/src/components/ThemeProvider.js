import React, { useEffect }  from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';

const ThemeContext = React.createContext();

const Provider = ({children})=>{
    const [themeMode, setThemeMode] = React.useState('light');
    
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
        <ThemeContext.Provider value={{themeMode, handleThemeChange}}>
            <ThemeProvider theme={theme}>
            <CssBaseline/>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default Provider;

export const useTheme = () => React.useContext(ThemeContext);