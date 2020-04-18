import React, { useState } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Routes from './routes';
import { getThemeMode, themeKey } from './config/theme';
import { ThemeProvider } from '@material-ui/styles';
import { HashRouter } from 'react-router-dom';
import { ThemeContext, ThemeMode } from './context/themeContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [mode, setMode] = useLocalStorage(themeKey, 'light');
  const [theme, setTheme] = useState<ThemeMode>(mode);

  const toggleDarkTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode: toggleDarkTheme }}>
      <ThemeProvider theme={getThemeMode(theme)}>
        <div className='App'>
          <CssBaseline />
          <HashRouter basename='/'>
            <Routes />
          </HashRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
