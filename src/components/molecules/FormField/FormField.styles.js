import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);
  padding: 14px 20px;
  background-color: ${({ theme }) => theme.colors.dark.veryDarkDesaturatedBlue};

  @media (min-width: 768px) {
    margin-top: 45px;
    padding: 20px 24px;
  }
`;
