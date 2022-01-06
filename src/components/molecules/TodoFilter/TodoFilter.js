import { FilterButton } from 'components/atoms/FilterButton/FilterButton';
import { useTodo } from 'provider/TodoStore';
import React from 'react';
import { SecondWrapper, Wrapper } from './TodoFilter.styles';

const TodoFilter = ({ isSecond = false }) => {
  const {
    tasksState: { activeFilter },
    showAllTasks,
    showActiveTasks,
    showCompletedTasks,
  } = useTodo();

  const Child = () => (
    <>
      <FilterButton onClick={showAllTasks} activeFilter={activeFilter} filterName={'all'}>
        All
      </FilterButton>
      <FilterButton onClick={showActiveTasks} activeFilter={activeFilter} filterName={'active'}>
        Active
      </FilterButton>
      <FilterButton onClick={showCompletedTasks} activeFilter={activeFilter} filterName={'completed'}>
        Completed
      </FilterButton>
    </>
  );

  return (
    <>
      {isSecond ? (
        <SecondWrapper>
          <Child />
        </SecondWrapper>
      ) : (
        <Wrapper>
          <Child />
        </Wrapper>
      )}
    </>
  );
};

export default TodoFilter;
