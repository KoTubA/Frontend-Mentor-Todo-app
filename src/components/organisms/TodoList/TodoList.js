import React from 'react';
import TodoListItem from 'components/molecules/TodoListItem/TodoListItem';
import { Wrapper, TodoListItemsWrapper } from './TodoList.styles';
import TodoNav from 'components/molecules/TodoNav/TodoNav';
import { useTodo } from 'provider/TodoStore';
import EmptyList from 'components/molecules/EmptyList/EmptyList';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const filterMap = {
  all: () => true,
  active: (task) => !task.completed,
  completed: (task) => task.completed,
};

const TodoList = () => {
  const {
    tasksState: { tasks, activeFilter },
    reorderTasks,
  } = useTodo();

  const handleOnDragEnd = (result) => {
    if (result.destination) reorderTasks(result);
  };

  return (
    <Wrapper>
      {tasks.length ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <TodoListItemsWrapper {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((data, index) =>
                  filterMap[activeFilter](data) ? (
                    <Draggable key={data.id} draggableId={`${data.id}`} index={index}>
                      {(provided) => <TodoListItem titleData={data.name} key={data.id} dataId={data.id} taskState={data.completed} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />}
                    </Draggable>
                  ) : null
                )}
                {provided.placeholder}
              </TodoListItemsWrapper>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <EmptyList />
      )}
      {tasks.length ? <TodoNav /> : null}
    </Wrapper>
  );
};

export default TodoList;
