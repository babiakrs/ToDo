let newTaskId = 0;
export const newTask = (title) => ({
  type: 'TODO_ADD',
  id: newTaskId++,
  title
});

export const taskSearch = (query, filter) => ({
  type: 'TODO_SEARCH',
  query,
  filter
});

export const taskDone = (id) => ({
  type: 'TODO_DONE',
  id
});

export const taskRemove = (id) => ({
  type: 'TODO_REMOVE',
  id
});