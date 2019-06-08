import { connect } from 'react-redux';
import { taskDone, taskRemove } from '../actions';
import TodoList from '../components/todo-list';

const visibleTasks = (tasks, query, filter) => {
  return tasks
    .filter((t) => filter || !t.done)
    .filter((t) => t.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
}

const mapStateToProps = (state) => ({
  items: visibleTasks(state.tasks, state.search.query, state.search.filter)
});

const mapDispatchToProps = dispatch => ({
  fnDone: (id) => dispatch(taskDone(id)),
  fnRemove: (id) => dispatch(taskRemove(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);