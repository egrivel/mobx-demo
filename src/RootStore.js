import {types} from 'mobx-state-tree';

import {TodoStore} from './stores/';

const RootStore = types.model('rootStore',
  {
    todoStore: types.optional(TodoStore, {})
  }
);

export default RootStore;

