import styled from 'styled-components';

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid ${({ theme }) => theme.colorCircle};

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 24px;
  }
`;
