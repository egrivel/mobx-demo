import React from 'react';

import TodoPage from './TodoPage';

// The whole application just renders a to-do page component.
class App extends React.Component {
  render() {
    return (
      <TodoPage title="MobX State Tree Demo"/>
    );
  }
};

export default App;
