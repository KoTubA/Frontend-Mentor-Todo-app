import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bgComponent};
  margin-left: 40px;

  @media (min-width: 768px) {
    display: flex;
  }

  button:nth-child(2) {
    margin: 0px 6px;
  }
`;

export const SecondWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.componentShadow};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgComponent};
  padding: 14px 20px;
  margin-top: 15px;

  @media (min-width: 768px) {
    display: none;
  }

  button:nth-child(2) {
    margin: 0px 6px;
  }
`;
