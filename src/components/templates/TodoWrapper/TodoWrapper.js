import Header from 'components/molecules/Header/Header';
import TodoList from 'components/organisms/TodoList/TodoList';
import React, { useState } from 'react';
import { Wrapper, AppContainer } from './TodoWrapper.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Notification } from 'components/atoms/Notification/Notidication';
import { useTodo } from 'provider/TodoStore';

const TodoWrapper = () => {
  const {
    tasksState: { tasks },
    addTask,
  } = useTodo();
  const [taskValue, setTaskValue] = useState('');

  const handleChangeTask = (e) => {
    setTaskValue(e.target.value);
  };

  const handleAddTask = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addTask(taskValue);
      setTaskValue('');
    }
  };

  return (
    <Wrapper>
      <AppContainer>
        <Header />
        <FormField label="Add new todo" name="title" id="title" placeholder="Create a new todo…" value={taskValue} onChange={handleChangeTask} onKeyUp={handleAddTask} />
        <TodoList />
        {tasks.length ? <Notification>Drag and drop to reorder list</Notification> : null}
      </AppContainer>
    </Wrapper>
  );
};

export default TodoWrapper;
