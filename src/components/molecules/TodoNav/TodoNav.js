import React from 'react';
import { Wrapper } from './TodoNav.styles';
import { Status } from 'components/atoms/Status/Status';
import TodoFilter from 'components/molecules/TodoFilter/TodoFilter';

const TodoNav = () => (
  <Wrapper>
    <Status>5 items left</Status>
    <TodoFilter />
    <Status as="button">Clear Completed</Status>
  </Wrapper>
);

export default TodoNav;
