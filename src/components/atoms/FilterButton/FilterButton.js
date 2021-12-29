import styled from 'styled-components';

export const FilterButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.dark.grayishBlue};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSize.s};
  outline: 0;
  font-weight: 700;
`;
