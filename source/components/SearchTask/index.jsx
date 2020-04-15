import React, { useRef } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { taskSearch } from 'Actions/todo.js';

const SearchTask = ({ taskSearch }) => {
  let inputEl = useRef(null);
  let checkEl = useRef(null);

  const searchInputHandler = () => {
    taskSearch(inputEl.current.value, checkEl.current.checked);
  }

  return (
    <div className='input-group'>
      <input ref={inputEl} onChange={() => searchInputHandler()} type='text' className='form-control' placeholder='Search...'/>
      <div className='input-group-append input-group-text'>
        <div className='custom-control custom-checkbox'>
          <input ref={checkEl} onChange={() => searchInputHandler()} defaultChecked type='checkbox' className='custom-control-input' id='checkbox-finished-tasks' />
          <label className='custom-control-label' htmlFor='checkbox-finished-tasks'>Completed</label>
        </div>
      </div>
    </div>
  );
}

SearchTask.propTypes = {
  taskSearch: func.isRequired
};

export default connect(
  null,
  { taskSearch }
)(SearchTask);

