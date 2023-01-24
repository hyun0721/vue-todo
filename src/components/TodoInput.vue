<template>
    <!-- Vue 템플릿은 기본적으로 div태그를 하위에 '1개' 두고 그 하위에 디자인한다. -->
    <!-- 컴포넌트 규칙..! -->
    <div class="inputBox shadow">
        <!-- v-model : 양방향 바인딩, 뷰 인스턴스에 반영됨. -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo">
            <i class="fa-solid fa-plus"></i>
        </span>

        <Modal :show="showModal" @close="showModal = false">
            <h3 slot="header">
                경고!
            </h3>

            <div slot="body">
                무엇인가를 입력하세요.
            </div>

            <div slot="footer">
                copy right
            </div>

        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    components: {
        Modal
    },
    data: function(){
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();  // 컴포넌트 비움.
            }else{
                this.showModal = !this.showModal;
            }
        },
        clearInput: function(){
            this.newTodoItem = null;
        }
    }
}
</script>

<style scoped>

input:focus{
    outline: none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}

.addContainer{
    float:right;
    background: linear-gradient(to right, #5478fb, #8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}

.addBtn{
    color:white;
    vertical-align: middle;
}

</style>