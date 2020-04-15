import React, { useRef } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from 'Actions/todo.js';

const NewTaskForm = ({ addTask }) => {
  let inputEl = useRef(null);

  const onNewTaskAddClick = () => {
    if (inputEl.current.value.trim()) {
      addTask(inputEl.current.value);
      inputEl.current.value = '';
    }
  }

  return (
    <form className='input-group' onSubmit={(e) => e.preventDefault()}>
      <input ref={inputEl} type='text' className='form-control' placeholder='New task' aria-label='New task' />
      <div className='input-group-append'>
        <button type='submit' className='btn btn-primary' onClick={() => onNewTaskAddClick()}>Add</button>
      </div>
    </form>
  );
}

NewTaskForm.propTypes = {
  addTask: func.isRequired
};

export default connect(
  null,
  { addTask }
)(NewTaskForm);