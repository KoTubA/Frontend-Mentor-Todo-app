import React from 'react';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper } from './TodoList.styles';
import TodoNav from 'components/molecules/TodoNav/TodoNav';
import { title } from 'data/data';

const TodoList = () => (
  <Wrapper>
    {title.map((data) => (
      <TodoListItem titleData={data} key={data} />
    ))}
    <TodoNav />
  </Wrapper>
);

export default TodoList;
