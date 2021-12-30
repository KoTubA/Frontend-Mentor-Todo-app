import styled from 'styled-components';

export const ClearButton = styled.p`
  margin: 0;
  background: transparent;
  outline: none;
  border: 0;
  color: ${({ theme }) => theme.colorText2};
  font-size: 12px;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorText1};
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
