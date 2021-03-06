import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.bgApp};
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 200px;
    background-image: url(${({ theme }) => theme.bgMobile});
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    z-index: -1;
  }

  @media (min-width: 768px) {
    &::before {
      background-image: url(${({ theme }) => theme.bgDesktop});
      height: 300px;
    }
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  margin: 3.5rem 1.5rem;
  max-width: 540px;

  @media (min-width: 768px) {
    margin-top: 4.7rem;
  }
`;
