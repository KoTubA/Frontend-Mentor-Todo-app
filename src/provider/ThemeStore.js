import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const value = localStorage.getItem('theme') || 'dark';
  const [themeState, setThemeState] = useState(value);

  const switchTheme = () => {
    themeState === 'light' ? setThemeState('dark') : setThemeState('light');
  };

  useEffect(() => {
    localStorage.setItem('theme', themeState);
  }, [themeState]);

  return <ThemeContext.Provider value={{ switchTheme, themeState }}>{children}</ThemeContext.Provider>;
};

export default ThemeStore;
