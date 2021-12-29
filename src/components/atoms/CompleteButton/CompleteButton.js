import styled from 'styled-components';
import { Circle } from 'components/atoms/Circle/Cricle';

export const CompleteButton = styled(Circle)`
  background-color: transparent;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 24px;
  }
`;
