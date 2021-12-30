import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.bgComponent};
  width: 100%;
  padding: 15px 20px 20px 20px;

  @media (min-width: 768px) {
    padding: 15px 24px 20px 24px;
  }
`;
