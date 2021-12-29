import styled from 'styled-components';

export const SwitchTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  outline: none;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 475px) {
    width: 26px;
    height: 26px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
