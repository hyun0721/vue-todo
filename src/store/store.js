import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


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
}

export const store = new Vuex.Store({

    state: {
        todoItems: storage.fetch()
    },

    mutations: {
        addOneItem: function(state, todoItem) {
            let obj = { completed: false, item: todoItem } ;

            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
        },

        removeOneItem: function(state, playload){
            localStorage.removeItem(playload.todoItem.item);
            state.todoItems.splice(playload.index, 1);
        },

        toggleOneComplete: function(state, playload){
            state.todoItems[playload.index].completed = !state.todoItems[playload.index].completed;

            /** Update Local Storage Item */
            localStorage.removeItem(playload.todoItem.item);
            localStorage.setItem(playload.todoItem.item, JSON.stringify(playload.todoItem));

        },

        clearAllItems: function(state){
            localStorage.clear();
            state.todoItems = [];
        }
    }

});