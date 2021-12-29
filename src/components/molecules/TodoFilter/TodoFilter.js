import { FilterButton } from 'components/atoms/FilterButton/FilterButton';
import React from 'react';
import { PositionWrapper, Wrapper } from './TodoFilter.styles';

const TodoFilter = () => (
  <PositionWrapper>
    <Wrapper>
      <FilterButton>All</FilterButton>
      <FilterButton>Active</FilterButton>
      <FilterButton>Completed</FilterButton>
    </Wrapper>
  </PositionWrapper>
);

export default TodoFilter;
