import React from 'react';
import { CompleteButton } from 'components/atoms/CompleteButton/CompleteButton';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { TitleTask } from 'components/atoms/TitleTask/TitleTask';
import { Wrapper } from './TodoListItem.styles';
import { useTodo } from 'provider/TodoStore';
import { ReactComponent as CheckIcon } from 'assets/icons/icon-check.svg';

const TodoListItem = React.forwardRef(({ titleData, dataId, taskState, ...props }, ref) => {
  const { removeTask, toggleTaskState } = useTodo();

  const handleDeleteTask = (id) => {
    removeTask(id);
  };

  const handleToggleTask = (id, state) => {
    toggleTaskState(id, !state);
  };

  return (
    <Wrapper ref={ref} {...props}>
      <CompleteButton
        isCompleted={taskState}
        onClick={() => {
          handleToggleTask(dataId, taskState);
        }}
      >
        <CheckIcon />
      </CompleteButton>
      <TitleTask isCompleted={taskState}>{titleData}</TitleTask>
      <DeleteButton
        onClick={() => {
          handleDeleteTask(dataId);
        }}
      />
    </Wrapper>
  );
});

export default TodoListItem;
