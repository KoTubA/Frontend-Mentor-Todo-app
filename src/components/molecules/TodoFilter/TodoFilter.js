import { FilterButton } from 'components/atoms/FilterButton/FilterButton';
import { useTodo } from 'provider/TodoStore';
import React from 'react';
import { PositionWrapper, Wrapper } from './TodoFilter.styles';

const TodoFilter = () => {
  const { showAllTasks, showActiveTasks, showCompletedTasks } = useTodo();
  return (
    <PositionWrapper>
      <Wrapper>
        <FilterButton onClick={showAllTasks}>All</FilterButton>
        <FilterButton onClick={showActiveTasks}>Active</FilterButton>
        <FilterButton onClick={showCompletedTasks}>Completed</FilterButton>
      </Wrapper>
    </PositionWrapper>
  );
};

export default TodoFilter;
