const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0){
            for(let locStKey of Object.keys(localStorage)){
                if(locStKey != "loglevel:webpack-dev-server"){
                    arr.push(JSON.parse(localStorage.getItem(locStKey)));
                }
            }
        }

        return arr;
    }
};


const state =  {
    todoItems: storage.fetch()
};


const getters = {
    storedTodoItems(state) {
        return  state.todoItems;
    }
};


const mutations = {
    addOneItem(state, todoItem)   {
        let obj = { completed: false, item: todoItem } ;
    
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    
    removeOneItem(state, playload)  {
        localStorage.removeItem(playload.todoItem.item);
        state.todoItems.splice(playload.index, 1);
    },
    
    toggleOneComplete(state, playload)  {
        state.todoItems[playload.index].completed = !state.todoItems[playload.index].completed;
    
        /** Update Local Storage Item */
        localStorage.removeItem(playload.todoItem.item);
        localStorage.setItem(playload.todoItem.item, JSON.stringify(playload.todoItem));
    
    },
    
    clearAllItems(state)  {
        localStorage.clear();
        state.todoItems = [];
    }

};


export default {
    state,
    getters,
    mutations
}