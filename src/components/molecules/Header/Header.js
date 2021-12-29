import React from 'react';
import { ReactComponent as ThemeIcon } from 'assets/icons/icon-sun.svg';
import { Logo } from 'components/atoms/Logo/Logo';
import { SwitchTheme } from 'components/atoms/SwitchTheme/SwitchTheme';
import { Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Logo href="/">TODO</Logo>
    <SwitchTheme>
      <ThemeIcon />
    </SwitchTheme>
  </Wrapper>
);

export default Header;
