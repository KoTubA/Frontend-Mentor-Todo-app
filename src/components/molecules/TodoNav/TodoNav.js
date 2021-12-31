import React from 'react';
import { Wrapper } from './TodoNav.styles';
import { Status } from 'components/atoms/Status/Status';
import TodoFilter from 'components/molecules/TodoFilter/TodoFilter';
import { ClearButton } from 'components/atoms/ClearButton/ClearButton';
import { useTodo } from 'provider/TodoStore';

const TodoNav = () => {
  const {
    tasksState: { tasks },
    clearCompletedTasks,
  } = useTodo();

  return (
    <Wrapper>
      <Status>{tasks.filter((data) => data.completed === false).length} items left</Status>
      <TodoFilter />
      <ClearButton onClick={clearCompletedTasks}>Clear Completed</ClearButton>
    </Wrapper>
  );
};

export default TodoNav;
