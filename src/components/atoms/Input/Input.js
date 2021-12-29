import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.colors.dark.veryDarkDesaturatedBlue};
  color: ${({ theme }) => theme.colors.primary.white};
  border: none;
  outline: none;
  flex: 1 1;
  padding: 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: ${({ theme }) => theme.fontSize.m};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.dark.grayishBlue};
  }
`;
