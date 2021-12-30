import React from 'react';
import { Wrapper } from './TodoNav.styles';
import { Status } from 'components/atoms/Status/Status';
import TodoFilter from 'components/molecules/TodoFilter/TodoFilter';
import { ClearButton } from 'components/atoms/ClearButton/ClearButton';

const TodoNav = () => (
  <Wrapper>
    <Status>5 items left</Status>
    <TodoFilter />
    <ClearButton>Clear Completed</ClearButton>
  </Wrapper>
);

export default TodoNav;
