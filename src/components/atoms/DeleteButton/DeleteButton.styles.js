import styled from 'styled-components';

export const DeleteStyledButton = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  margin-left: auto;
  cursor: pointer;
  padding: 0;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
