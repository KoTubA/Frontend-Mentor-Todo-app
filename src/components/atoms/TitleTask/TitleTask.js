import styled from 'styled-components';

export const TitleTask = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark.lightGrayishBlue};
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
