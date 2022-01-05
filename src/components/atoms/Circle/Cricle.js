import styled from 'styled-components';

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 12px;
  background-image: none;
  background-color: ${({ theme }) => theme.colorCircle};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.bgComponent};
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-right: 24px;

    &::before {
      width: 22px;
      height: 22px;
    }
  }
`;
