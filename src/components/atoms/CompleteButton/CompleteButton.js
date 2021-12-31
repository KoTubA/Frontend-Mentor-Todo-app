import styled from 'styled-components';
import { Circle } from 'components/atoms/Circle/Cricle';
import check from 'assets/icons/icon-check.svg';

export const CompleteButton = styled(Circle)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-image: ${(props) => (props.isCompleted ? ({ theme }) => theme.checkBackground : 'none')};

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
