// src/App.js

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import './App.css';
import { darkTheme, lightTheme } from './theme';
import Navbar from './Navbar/Navbar';
import ColorPallete from './ColorPallete/ColorPallete';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <div className="App">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <ColorPallete />
      </div>
    </ThemeProvider>
  );
};

export default App;
