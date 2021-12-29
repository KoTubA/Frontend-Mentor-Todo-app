import styled from 'styled-components';

export const Status = styled.p`
  margin: 0;
  background: transparent;
  outline: none;
  border: 0;
  color: ${({ theme }) => theme.colors.dark.grayishBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
