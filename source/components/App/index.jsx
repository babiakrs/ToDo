import React from 'react';

import NewTaskForm from 'Components/NewTaskForm';
import SearchTask from 'Components/SearchTask';
import TodoList from 'Components/TodoList';

import './styles.sass';

export default function App() {
  return (
    <React.Fragment>
      <div className='corner-ribbon__wrapper'>
        <a href='https://github.com/Almost-Infinity/ToDo' target='_blank' rel='noopener noreferrer' className='corner-ribbon__link'>source</a>
      </div>
      <div className='container mt-4'>
        <div className='row sticky-top bg-light border rounded-lg py-3 mb-3'>
          <div className='col-sm'>
              <NewTaskForm />
            </div>
            <div className='col-sm'>
              <SearchTask />
            </div>
        </div>
        <TodoList />
      </div>
    </React.Fragment>
  );
}