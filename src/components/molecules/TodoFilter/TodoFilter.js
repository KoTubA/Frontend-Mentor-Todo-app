import { FilterButton } from 'components/atoms/FilterButton/FilterButton';
import { useTodo } from 'provider/TodoStore';
import React from 'react';
import { PositionWrapper, Wrapper } from './TodoFilter.styles';

const TodoFilter = () => {
  const {
    tasksState: { activeFilter },
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
  } = useTodo();
  return (
    <PositionWrapper>
      <Wrapper>
        <FilterButton onClick={showAllTasks} activeFilter={activeFilter} filterName={'all'}>
          All
        </FilterButton>
        <FilterButton onClick={showActiveTasks} activeFilter={activeFilter} filterName={'active'}>
          Active
        </FilterButton>
        <FilterButton onClick={showCompletedTasks} activeFilter={activeFilter} filterName={'completed'}>
          Completed
        </FilterButton>
      </Wrapper>
    </PositionWrapper>
  );
};

export default TodoFilter;
