import {applySnapshot} from 'mobx-state-tree';

const TodoActions = (self) => (
  {
    loadTodoData() {
      const data = {
        nrItems: 3,
          items: [
          {
            id: 1,
            title: 'To-Do Item #1'
          },
          {
            id: 2,
            title: 'To-Do Item #2'
          },
          {
            id: 3,
            title: 'To-Do Item #3'
          }
        ]
      };
      applySnapshot(self, data);
    },

    // Add an item, automatically deriving the ID and title
    addItem() {
      self.nrItems++;
      const newId = self.nrItems;
      const newTitle = 'To-Do Item #' + newId;
      self.items.push({id: newId, title: newTitle});
      // const data = {nrItems: self.nrItems + 1, items: newItems};
      // applySnapshot(self, data);
    },

    selectItem(nr) {
      if (self.selectedItem === nr) {
        self.selectedItem = -1;
      } else {
        self.selectedItem = nr;
      }
    }
  }
);

export default TodoActions;
