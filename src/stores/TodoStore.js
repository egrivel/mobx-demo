import TodoActions from './TodoActions';
import TodoModel from './TodoModel';
import TodoViews from './TodoViews';

const TodoStore = TodoModel.views(TodoViews).actions(TodoActions);

export default TodoStore;
