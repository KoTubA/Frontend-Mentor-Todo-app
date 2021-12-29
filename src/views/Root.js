import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import TodoWrapper from 'components/templates/TodoWrapper/TodoWrapper';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TodoWrapper />
    </ThemeProvider>
  );
}

export default Root;
