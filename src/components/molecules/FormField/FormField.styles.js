import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.componentShadow};
  padding: 14px 20px;
  background-color: ${({ theme }) => theme.bgComponent};

  @media (min-width: 768px) {
    margin-top: 43px;
    padding: 20px 24px;
  }
`;
