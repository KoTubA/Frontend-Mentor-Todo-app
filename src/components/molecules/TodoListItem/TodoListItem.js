import React from 'react';
import { CompleteButton } from 'components/atoms/CompleteButton/CompleteButton';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { TitleTask } from 'components/atoms/TitleTask/TitleTask';
import { Wrapper } from './TodoListItem.styles';

const TodoListItem = ({ titleData }) => (
  <Wrapper>
    <CompleteButton as="button" />
    <TitleTask>{titleData}</TitleTask>
    <DeleteButton />
  </Wrapper>
);

export default TodoListItem;
