import {types} from 'mobx-state-tree';

// First argument to types.model is an optional name for debugging, and can
// be omitted. The second argument defines the actual model.
const TodoItem = types.model('TodoItemModel', {
  // ID is required and right now is a simple number
  id: types.number,
  // Title is required and is a string.
  title: types.string
});

const TodoModel = types.model('TodoModel', {
  // The selected item is a number, and defaults to -1 (no item selected)
  selectedItem: types.optional(types.number, -1),
  // The number of items should be a computed value but make it an optional
  // number to start out with
  nrItems: types.optional(types.number, 0),
  // The items are an array of TodoItem elements
  items: types.maybe(types.array(TodoItem))
});

export default TodoModel;
