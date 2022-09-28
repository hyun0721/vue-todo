<template>
    <div>
        <ul>
            <li v-for="todoItem in todoItems" v-bind:key="todoItem">
                {{ todoItem }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            todoItems: []
        }
    },
    created: function(){
        console.log('created');
        if(localStorage.length > 0){
            for(let locStKey of Object.keys(localStorage)){
                if(locStKey != "loglevel:webpack-dev-server"){
                    this.todoItems.push(localStorage[locStKey]);
                }
            }
        }
    }
}
</script>

<style>

</style>