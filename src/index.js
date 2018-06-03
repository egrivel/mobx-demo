import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import RootStore from './RootStore';
import App from './App';

const rootStore = RootStore.create({}, {});
rootStore.todoStore.loadTodoData();

ReactDOM.render(
  <Provider store={rootStore}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
