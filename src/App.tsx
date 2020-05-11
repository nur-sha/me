import React, { useState, useEffect } from 'react';
import './App.css';
import {
  CssBaseline,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import Routes from './routes';
import { getThemeMode, themeKey } from './config/theme';
import { ThemeProvider } from '@material-ui/styles';
import { HashRouter } from 'react-router-dom';
import { ThemeContext, ThemeMode } from './context/themeContext';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [mode, setMode] = useLocalStorage(themeKey, 'light');
  const [theme, setTheme] = useState<ThemeMode>(mode);
  const [open, setOpen] = useState(false);

  const toggleDarkTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !window.localStorage.getItem('modeWarning')
    ) {
      setOpen(true);
      window.localStorage.setItem('modeWarning', 'shown');
    }
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode: toggleDarkTheme }}>
      <ThemeProvider theme={getThemeMode(theme)}>
        <div className='App'>
          <CssBaseline />
          <HashRouter basename='/'>
            <Routes />
          </HashRouter>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              {
                'Please switch off dark mode or use Google Chrome for better viewing! Sorry for the inconvenience caused. Cheers! :)'
              }
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
