import styled from 'styled-components';

export const FilterButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  outline: 0;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => (props.activeFilter === props.filterName ? ({ theme }) => theme.brightBlue : ({ theme }) => theme.colorText2)};

  &:hover {
    color: ${({ theme }) => theme.colorText1};
  }
`;
