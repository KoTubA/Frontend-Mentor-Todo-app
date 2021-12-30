import styled from 'styled-components';

export const TitleTask = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colorText1};
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
