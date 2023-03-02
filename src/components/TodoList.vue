<template>
    <div>
        <!-- ul 태그로 트랜지션 효과를 부여. name(list)은 css 클래스와 연관됨. -->
        <TransitionGroup name="list" tag="ul">
            <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem" class="shadow">
                <i class="checkBtn fa-solid fa-check" v-bind:class="{ checkBtnCompleted: todoItem.completed }" v-on:click="toggleComplete(todoItem, index)"></i>
                <!-- Object 타입으로 바인딩된 값들의 요소에 접근한다. -->
                <span v-bind:class="{ textCompleted: todoItem.completed }"> {{ todoItem.item }}</span>
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </li>
        </TransitionGroup>
        <button v-on:click="makeTestData()">test</button>
    </div>
</template>

<script>
export default {
    
    props: ['propsdata'],

    methods: {
        removeTodo: function(todoItem, index){
            this.$store.commit('removeOneItem', { todoItem, index });
        },
        toggleComplete: function(todoItem, index){
            this.$store.commit('toggleOneComplete', { todoItem, index });
        },
        makeTestData: function(){
            localStorage.setItem('A', 'A');
            localStorage.setItem('B', 'B');
            localStorage.setItem('C', 'C');

            this.todoItems.push('A');
            this.todoItems.push('B');
            this.todoItems.push('C');
        }
    }
}
</script>

<style scoped>

li { 
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}

.removeBtn {
    margin-left: auto;
    color: #de4343;
}

.checkBtn {
    line-height: 45px;
    color:#64acde;
    margin-right: 5px;
}

.checkBtnCompleted {
    color: #b3adad !important; 
}

.textCompleted {
    text-decoration: line-through;
    color: #b3adad;
}


.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>