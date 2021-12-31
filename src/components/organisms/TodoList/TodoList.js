import React from 'react';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper } from './TodoList.styles';
import TodoNav from 'components/molecules/TodoNav/TodoNav';
import { useTodo } from 'provider/TodoStore';

const filterMap = {
  all: () => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed,
};

const TodoList = () => {
  const {
    tasksState: { tasks, activeFilter },
  } = useTodo();
  return (
    <Wrapper>
      {tasks.filter(filterMap[activeFilter]).map((data) => (
        <TodoListItem titleData={data.name} key={data.name} />
      ))}
      <TodoNav />
    </Wrapper>
  );
};

export default TodoList;
