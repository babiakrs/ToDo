import {
  TODO_ADD,
  TODO_SEARCH,
  TODO_DONE,
  TODO_REMOVE,
  TODO_FROM_STORAGE
} from 'Actions/types.js';
import initialState from './initial-state.js';

export const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case TODO_ADD: {
      return Object.assign({}, state, {
        tasks: state.tasks.concat([{
          title: action.title,
          done: false
        }])
      })
    }

    case TODO_SEARCH: {
      return {
        ...state,
        search: {
          query: action.query,
          filter: action.filter
        }
      };
    }

    case TODO_DONE: {
      return {
        ...state,
        tasks: state.tasks.map((t, idx) => (idx === action.id) ? { ...t, done: !t.done } : t)
      };
    }

    case TODO_REMOVE: {
      return {
        ...state,
        tasks: state.tasks.filter((_, idx) => (idx !== action.id))
      };
    }

    case TODO_FROM_STORAGE: {
      return {
        ...state,
        tasks: action.tasks || []
      };
    }

    default: {
      return state;
    }
  }
}