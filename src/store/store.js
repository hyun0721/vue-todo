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
    }

});