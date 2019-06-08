import React from 'react';

import NewTask from '../../containers/NewTask';
import SearchTask from '../../containers/SearchTask';
import VisibleTasks from '../../containers/TodoList';
import './styles.sass';

export default function App() {
  return (
    <div className='container mt-4'>
      <div className="row sticky-top bg-light border rounded-lg py-3 mb-3">
        <div className="col-sm">
            <NewTask />
          </div>
          <div className="col-sm">
            <SearchTask />
          </div>
      </div>
      <VisibleTasks />
    </div>
  );
}