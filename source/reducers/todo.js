const initialState = {
  search: {
    query: '',
    filter: true
  },
  tasks: []
};

export const todo = (state = initialState, action) => {
  switch(action.type) {
    case 'TODO_ADD': {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.id,
            title: action.title,
            done: false
          }
        ]
      };
    }
    case 'TODO_SEARCH': {
      return {
        ...state,
        search: {
          query: action.query,
          filter: action.filter
        }
      };
    }
    case 'TODO_DONE': {
      return {
        ...state,
        tasks: state.tasks.map((t) => (t.id === action.id) ? { ...t, done: !t.done } : t)
      };
    }
    case 'TODO_REMOVE': {
      return {
        ...state,
        tasks: state.tasks.filter((t) => (t.id !== action.id))
      };
    }
    default:
      return state;
  }
} 