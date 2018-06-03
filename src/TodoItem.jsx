/**
 * Simple todo item. This item expects to be part of an unordered list. It will
 * render itself as a list item. The parent passes in the item number through
 * the props. The item interacts with the store to get the item information.
 * It also interacts with the action to mark the item as selected or not,
 * and gets the item selection state from the store.
 *
 * This component can be enhanced by also having the item title maitained
 * in the state, and having it updated when the store changes. This
 * enhancement allows for dynamic titles. The current implementation is
 * simple and works as long as item titles do not change.
 *
 * In a real application, some item ID would be used instead of the item
 * number. Using an ID instead of a nunber will make it possible to also
 * delete items.
 */

import React from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

@inject('store')
@observer
class TodoItem extends React.Component {
  // Provide a default value for this.state.selected
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  // On click handler kicks off the action
  _onClick() {
    const {nr, store} = this.props;
    const {todoStore} = store;
    todoStore.selectItem(nr);
  }

  // React render function
  render() {
    const {nr} = this.props;
    const {store} = this.props;
    const {todoStore} = store;
    const title = todoStore.getItem(nr).title;

    const selected = todoStore.isSelected(nr) ? ' ***' : '';

    return (
      <li onClick={this._onClick.bind(this)}>{title + selected}</li>
    );
  }
};

export default TodoItem;
