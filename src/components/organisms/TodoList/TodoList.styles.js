import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.componentShadow};
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgComponent};
  margin-top: 18px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;
