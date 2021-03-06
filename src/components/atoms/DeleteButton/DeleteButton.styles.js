import styled from 'styled-components';

export const DeleteStyledButton = styled.div`
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
    display: none;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
