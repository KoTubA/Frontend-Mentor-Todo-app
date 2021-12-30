import React, { useContext } from 'react';
import { useTheme } from 'styled-components';
import { Logo } from 'components/atoms/Logo/Logo';
import { SwitchTheme } from 'components/atoms/SwitchTheme/SwitchTheme';
import { Wrapper } from './Header.styles';
import { ThemeContext } from 'provider/ThemeStore';

const Header = () => {
  const theme = useTheme();
  const { switchTheme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Logo href="/">TODO</Logo>
      <SwitchTheme onClick={switchTheme}>
        <img src={theme.icon} alt="" />
      </SwitchTheme>
    </Wrapper>
  );
};

export default Header;
