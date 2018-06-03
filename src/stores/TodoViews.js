const TodoViews = (self => (
  {
    geSelectedItem() {
      return self.selectedItem;
    },
    getNrItems() {
      return self.nrItems;
    },
    getItem(nr) {
      return self.items[nr];
    },
    isSelected(nr) {
      return self.selectedItem === nr;
    }
  })
);

export default TodoViews;
