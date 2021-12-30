import styled from 'styled-components';

export const PositionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  @media (min-width: 768px) {
    position: relative;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin-top: 15px;
  box-shadow: ${({ theme }) => theme.componentShadow};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgComponent};
  margin-left: auto;
  margin-right: auto;
  padding: 14px 20px;
  max-width: 540px;
  width: calc(100% - 3rem);

  @media (min-width: 768px) {
    position: relative;
    width: auto;
    box-shadow: none;
    padding: 0;
    margin-top: 0;
    margin-left: 40px;
  }

  button:nth-child(2) {
    margin: 0px 6px;
  }
`;
