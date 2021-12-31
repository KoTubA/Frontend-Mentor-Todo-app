import styled from 'styled-components';

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 12px;
  background-image: ${(props) => (props.isActive ? ({ theme }) => theme.checkBackground : 'none')};
  background-color: ${(props) => (props.isActive ? 'transparent' : ({ theme }) => theme.colorCircle)};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bgComponent};
  }

  &:hover {
    background-color: transparent;
    background-image: ${({ theme }) => theme.checkBackground};
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 24px;

    &::before {
      width: 23px;
      height: 23px;
    }
  }
`;
