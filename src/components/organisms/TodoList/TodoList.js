import React from 'react';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper } from './TodoList.styles';
import TodoNav from 'components/molecules/TodoNav/TodoNav';
import { useTodo } from 'provider/TodoStore';
import EmptyList from 'components/molecules/EmptyList/EmptyList';

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
      {tasks.length ? tasks.filter(filterMap[activeFilter]).map((data) => <TodoListItem titleData={data.name} key={data.id} dataId={data.id} taskState={data.completed} />) : <EmptyList />}
      {tasks.length ? <TodoNav /> : null}
    </Wrapper>
  );
};

export default TodoList;
