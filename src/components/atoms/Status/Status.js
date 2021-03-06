import styled from 'styled-components';

export const Status = styled.p`
  margin: 0;
  background: transparent;
  outline: none;
  border: 0;
  color: ${({ theme }) => theme.colorText2};
  font-size: 12px;
  padding: 0;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
