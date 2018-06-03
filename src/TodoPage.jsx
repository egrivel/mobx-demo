/**
* Sample page for a very basic to-do list.
*
* This sample page uses the Flux architecture to maintain the number of
* to-do items on the page, and renders an unordered list of all the items.
* The page gets the number of items from the to-do store, and registers
* itself to listen to that store when it changes. In the very basic sample,
* the only possible change is a change in the number of items by adding
* an item.
*
* Item addition works by clicking on a button, which will trigger an
* action which dispatches the addition to the to-do store. The store will
* add the new item and update itself, emiting a change event to which this
* component listens.
*/

import React from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

import TodoItem from './TodoItem';

@inject('store')
@observer
class TodoPage extends React.Component {
  // Provide a default value for this.state.nr_items
  constructor(props) {
    super(props);
  }

  // On click handler kicks off the action
  _onButtonClick() {
    const {store} = this.props;
    const {todoStore} = store;
    todoStore.addItem();
  }

  // React render function
  render() {
    // The root store is injected into the props
    const {store} = this.props;
    // From the root store, get the store we're interested in
    const {todoStore} = store;
    const nrItems = todoStore.getNrItems();

    // Build the array of items, including the necessary key attribute
    const items = [];
    for (let i = 0; i < nrItems; i++) {
      items.push(<TodoItem key={'item-' + i} nr={i}/>);
    }

    // Render the entire page
    return (
      <div className='page'>
        <h1>{this.props.title}</h1>
        <p>
          This page renders a list of to-do items and provides for the
          ability to add a to-do item.
        </p>
        <ul>
          {items}
        </ul>
        <p>
          <input
            type="button"
            value="Add Item"
            onClick={this._onButtonClick.bind(this)}
          />
        </p>
      </div>
    );
  }
};

export default TodoPage;
