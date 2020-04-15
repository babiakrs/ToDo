import {
  TODO_ADD,
  TODO_SEARCH,
  TODO_DONE,
  TODO_REMOVE,
  TODO_FROM_STORAGE
} from './types.js';
import JSONStorage from '../storage.js';

const newTask = (title) => ({
  type: TODO_ADD,
  title
});

const putTasksFromStorage = (tasks) => ({
  type: TODO_FROM_STORAGE,
  tasks
});

const taskDone = (id) => ({
  type: TODO_DONE,
  id
});

const taskRemove = (id) => ({
  type: TODO_REMOVE,
  id
});

export const taskSearch = (query, filter) => ({
  type: TODO_SEARCH,
  query,
  filter
});

export const getTasksFromStorage = () => {
  return (dispatch) => {
    JSONStorage
      .select('todoList')
      .pull()
      .apply((tasks) => {
        dispatch(putTasksFromStorage(tasks))
      });
  };
};

export const removeTask = (id) => {
  return (dispatch) => {
    dispatch(taskRemove(id));

    JSONStorage
      .select('todoList')
      .pull()
      .apply((tasks) => { tasks.splice(id, 1); })
      .push();
  };
};

export const updateTask = (id) => {
  return (dispatch) => {
    dispatch(taskDone(id));

    JSONStorage
      .select('todoList')
      .pull()
      .apply((tasks) => tasks.map((t, idx) => (idx === id) ? { ...t, done: !t.done } : t))
      .push();
  };
};

export const addTask = (title) => {
  return (dispatch) => {
    let addedTask = dispatch(newTask(title));

    JSONStorage
      .select('todoList')
      .pull()
      .apply((tasks) => tasks.push({
        title: addedTask.title,
        done: false
      }))
      .push();
  };
};