import { GlobalStyle } from 'assets/styles/globalStyles';
import { ThemeContext } from 'provider/ThemeStore';
import { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Theme = ({ children }) => {
  const { themeState } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themeState === 'light' ? theme.light : theme.dark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
