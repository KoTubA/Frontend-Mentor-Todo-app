import Header from 'components/molecules/Header/Header';
import TodoList from 'components/organisms/TodoList/TodoList';
import React from 'react';
import { Wrapper, AppContainer } from './TodoWrapper.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Notification } from 'components/atoms/Notification/Notidication';

const TodoWrapper = () => (
  <Wrapper>
    <AppContainer>
      <Header />
      <FormField label="Add new todo" name="title" id="title" placeholder="Create a new todo…" />
      <TodoList />
      <Notification>Drag and drop to reorder list</Notification>
    </AppContainer>
  </Wrapper>
);

export default TodoWrapper;
