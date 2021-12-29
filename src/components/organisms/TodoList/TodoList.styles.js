import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 35px 50px -15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.dark.veryDarkDesaturatedBlue};
  margin-top: 18px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;
