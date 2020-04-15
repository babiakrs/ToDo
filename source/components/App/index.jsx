import React from 'react';

import NewTaskForm from 'Components/NewTaskForm';
import SearchTask from 'Components/SearchTask';
import TodoList from 'Components/TodoList';

export default function App() {
  return (
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
  );
}