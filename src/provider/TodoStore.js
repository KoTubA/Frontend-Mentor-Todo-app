import React, { useReducer, useContext } from 'react';
import { data } from 'data/data';
const TodoContext = React.createContext({});

const actionTypes = {
  addTask: 'ADD TASK',
  removeTask: 'REMOVE TASK',
  toggleTasksState: 'TOGGLE TASK STATE',
  showAllTasks: 'SHOW ALL TASKS',
  showActiveTasks: 'SHOW ACTIVE TASKS',
  showCompletedTasks: 'SHOW COMPLETED TASKS',
  clearCompletedTasks: 'CLEAR COMPLETED TASKS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.showAllTasks:
      return {
        ...state,
        activeFilter: 'all',
      };
    case actionTypes.showActiveTasks:
      return {
        ...state,
        activeFilter: 'active',
      };
    case actionTypes.showCompletedTasks:
      return {
        ...state,
        activeFilter: 'completed',
      };
    default:
      return state;
  }
};

export const TodoStore = ({ children }) => {
  const initialState = {
    tasks: data.map((data) => data),
    activeFilter: 'all',
  };
  const [tasksState, dispatch] = useReducer(reducer, initialState);

  const showAllTasks = () => {
    dispatch({ type: actionTypes.showAllTasks });
  };

  const showActiveTasks = () => {
    dispatch({ type: actionTypes.showActiveTasks });
  };

  const showCompletedTasks = () => {
    dispatch({ type: actionTypes.showCompletedTasks });
  };

  return <TodoContext.Provider value={{ tasksState, showAllTasks, showActiveTasks, showCompletedTasks }}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw Error('useTodo needs to be used inside TodoStore');
  }

  return todoContext;
};
