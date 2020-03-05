import React, { useState } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Routes from './routes';
import { getThemeMode } from './config/theme';
import { ThemeProvider } from '@material-ui/styles';
import { HashRouter } from 'react-router-dom';

export type ThemeMode = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');

  const toggleDarkTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={getThemeMode(theme)}>
      <div className='App'>
        <CssBaseline />
        <HashRouter basename='/'>
          <Routes onChange={toggleDarkTheme} />
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
