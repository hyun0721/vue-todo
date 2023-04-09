export const addOneItem = (state, todoItem)  => {
    let obj = { completed: false, item: todoItem } ;

    localStorage.setItem(todoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
}

export const removeOneItem = (state, playload) => {
    localStorage.removeItem(playload.todoItem.item);
    state.todoItems.splice(playload.index, 1);
}

export const toggleOneComplete = (state, playload) => {
    state.todoItems[playload.index].completed = !state.todoItems[playload.index].completed;

    /** Update Local Storage Item */
    localStorage.removeItem(playload.todoItem.item);
    localStorage.setItem(playload.todoItem.item, JSON.stringify(playload.todoItem));

}

export const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
}
