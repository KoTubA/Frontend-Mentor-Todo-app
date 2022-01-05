import styled from 'styled-components';
import { DeleteStyledButton } from 'components/atoms/DeleteButton/DeleteButton.styles';

export const Wrapper = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.bgComponent};
  border-bottom: 1px solid ${({ theme }) => theme.colorTodoBorder};
  padding: 14px 20px;
  user-select: none;

  @media (min-width: 768px) {
    padding: 20px 24px;

    &:hover ${DeleteStyledButton} {
      display: block;
    }
  }
`;
