import styled from 'styled-components';
import { Circle } from 'components/atoms/Circle/Cricle';

export const CompleteButton = styled(Circle)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-image: ${(props) => (props.isCompleted ? ({ theme }) => theme.checkBackground : 'none')};
  padding: 1px 6px;

  &:hover {
    background-color: transparent;
    background-image: ${({ theme }) => theme.checkBackground};
  }

  ${(props) => {
    if (props.isCompleted) {
      return `
        background-color: transparent;
        &::before {
          background-color: transparent;
        }
      `;
    }
  }}
`;
