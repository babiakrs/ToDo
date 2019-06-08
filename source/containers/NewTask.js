import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newTask } from '../actions';

const NewTask = ({ dispatch }) => {
  let inputEl;

  const addClickHandler = () => {
    if (!inputEl.value.trim()) {
      return;
    }

    dispatch(newTask(inputEl.value));
    inputEl.value = '';
  }

  return (
    <div className="input-group">
      <input ref={n => inputEl = n} type="text" className="form-control" placeholder="New task" aria-label="New task" />
      <div className="input-group-append">
        <button type="button" className="btn btn-primary" onClick={() => addClickHandler()}>Add</button>
      </div>
    </div>
  );
}

NewTask.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(NewTask);