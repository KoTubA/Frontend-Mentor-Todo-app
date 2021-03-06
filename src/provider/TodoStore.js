import React, { useReducer, useContext, useEffect } from 'react';
import { data } from 'data/data';
const TodoContext = React.createContext({});

const isData = localStorage.getItem('data');
const dataTasks = isData ? JSON.parse(isData) : data;

let maxId = 1;
if (dataTasks.length) {
  maxId = dataTasks[0].id;
  for (let i = 1; i < dataTasks.length; i++) {
    if (maxId < dataTasks[i].id) maxId = dataTasks[i].id;
  }
}

const actionTypes = {
  addTask: 'ADD TASK',
  removeTask: 'REMOVE TASK',
  toggleTaskState: 'TOGGLE TASK STATE',
  showAllTasks: 'SHOW ALL TASKS',
  showActiveTasks: 'SHOW ACTIVE TASKS',
  showCompletedTasks: 'SHOW COMPLETED TASKS',
  clearCompletedTasks: 'CLEAR COMPLETED TASKS',
  reorderTasks: 'REORDER TASKS',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.addTask:
      return {
        ...state,
        tasks: [{ id: ++maxId, name: action.newValue, completed: false }, ...state.tasks],
      };
    case actionTypes.removeTask:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          if (task.id === action.id) {
            return false;
          }
          return true;
        }),
      };
    case actionTypes.toggleTaskState:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return { id: task.id, name: task.name, completed: action.state };
          } else {
            return { id: task.id, name: task.name, completed: task.completed };
          }
        }),
      };
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
    case actionTypes.clearCompletedTasks:
      return {
        ...state,
        tasks: state.tasks.filter((task) => !task.completed),
      };
    case actionTypes.reorderTasks:
      const items = [...state.tasks];
      const [reorderedItem] = items.splice(action.result.source.index, 1);
      items.splice(action.result.destination.index, 0, reorderedItem);

      return {
        ...state,
        tasks: items,
      };
    default:
      return state;
  }
};

export const TodoStore = ({ children }) => {
  const initialState = {
    tasks: dataTasks.map((data) => data),
    activeFilter: 'all',
  };

  const [tasksState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(tasksState.tasks));
  }, [tasksState.tasks]);

  const showAllTasks = () => {
    dispatch({ type: actionTypes.showAllTasks });
  };

  const showActiveTasks = () => {
    dispatch({ type: actionTypes.showActiveTasks });
  };

  const showCompletedTasks = () => {
    dispatch({ type: actionTypes.showCompletedTasks });
  };

  const clearCompletedTasks = () => {
    dispatch({ type: actionTypes.clearCompletedTasks });
  };

  const addTask = (newValue) => {
    dispatch({ type: actionTypes.addTask, newValue });
  };

  const removeTask = (id) => {
    dispatch({ type: actionTypes.removeTask, id });
  };

  const toggleTaskState = (id, state) => {
    dispatch({ type: actionTypes.toggleTaskState, id, state });
  };

  const reorderTasks = (result) => {
    dispatch({ type: actionTypes.reorderTasks, result });
  };

  return <TodoContext.Provider value={{ tasksState, showAllTasks, showActiveTasks, showCompletedTasks, clearCompletedTasks, addTask, removeTask, toggleTaskState, reorderTasks }}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) {
    throw Error('useTodo needs to be used inside TodoStore');
  }

  return todoContext;
};
