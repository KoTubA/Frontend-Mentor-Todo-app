import styled from 'styled-components';

export const TitleTask = styled.p`
  margin: 0;
  color: ${(props) => (props.isCompleted ? ({ theme }) => theme.colorText3 : ({ theme }) => theme.colorText1)};
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
  ${(props) => {
    if (props.isCompleted) {
      return `
        text-decoration: line-through;
      `;
    }
  }}
`;
