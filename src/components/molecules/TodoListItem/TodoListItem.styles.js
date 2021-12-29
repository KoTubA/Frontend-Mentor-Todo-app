import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark.veryDarkDesaturatedBlue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark.veryDarkGrayishBlueHover};
  padding: 14px 20px;

  @media (min-width: 768px) {
    padding: 20px 24px;
  }
`;
