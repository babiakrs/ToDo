import React, { useEffect } from 'react';
import { arrayOf, shape, string, func, bool } from 'prop-types';
import { connect } from 'react-redux';

import { updateTask, removeTask, getTasksFromStorage } from 'Actions/todo.js';
import TodoItem from 'Components/TodoItem';

function TodoList({ items, updateTask, removeTask, getTasksFromStorage }) {
  useEffect(() => {
    getTasksFromStorage();
  }, []);

  return (
    <ul className='list-group mb-5'>
      {
        items.map((t, idx) => <TodoItem key={idx} id={idx} {...t} fnDone={updateTask} fnRemove={removeTask}/>)
      }
    </ul>
  );
}

TodoList.propTypes = {
  items: arrayOf(
    shape({
      title: string.isRequired,
      done: bool.isRequired
    })
  ).isRequired,
  updateTask: func.isRequired,
  removeTask: func.isRequired,
  getTasksFromStorage: func.isRequired
};


const visibleTasks = (tasks, query, filter) => {
  return tasks
    .filter((t) => filter || !t.done)
    .filter((t) => t.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}

const mapStateToProps = (state) => ({
  items: visibleTasks(state.tasks, state.search.query, state.search.filter)
});

export default connect(
  mapStateToProps,
  { updateTask, removeTask, getTasksFromStorage }
)(TodoList);