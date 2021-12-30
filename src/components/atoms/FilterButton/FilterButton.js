import styled from 'styled-components';

export const FilterButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colorText2};
  background-color: transparent;
  font-size: 14px;
  outline: 0;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorText1};
  }
`;
