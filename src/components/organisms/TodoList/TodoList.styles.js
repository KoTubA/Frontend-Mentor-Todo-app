import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.componentShadow};
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.bgComponent};
  margin-top: 18px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 24px;
  }
`;

export const TodoListItemsWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
