/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskSearch } from '../actions';

const SearchTask = ({ dispatch }) => {
  let inputEl;
  let checkEl;

  const searchInputHandler = (e) => {
    dispatch(taskSearch(inputEl.value, checkEl.checked));
  }

  return (
    <div className="input-group">
      <input ref={n => inputEl = n} onChange={(e) => searchInputHandler(e)} type="text" className="form-control" placeholder="Search..." aria-label="Search" />
      <div className="input-group-append">
        <label className="input-group-text">
          Finished
          <input ref={n => checkEl = n} onChange={(e) => searchInputHandler(e)} defaultChecked id="checkbox__finished-tasks" type="checkbox" aria-label="Checkbox for filter finished tasks" />
        </label>
      </div>
    </div>
  );
}

SearchTask.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SearchTask);

