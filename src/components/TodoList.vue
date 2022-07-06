<template>
    <transition-group name="todo-list">
        <div v-for="todo in todos" :key="todo.id" class="row justify-content-md-center mb-4">
            <div class="shadow col-6 card py-2">
                <div class="row">
                    <div class="col-1 card-body">{{ todo.name }}</div>
                    <button 
                        @click="$emit('delete', todo.id)"
                        type="button"
                        class="col-1 btn-close my-auto pe-4 no-focus">
                    </button>
                </div>
            </div>
        </div>
    </transition-group>
</template>


<script>
export default {
    props: {
        todos: Array
    },

    emits: [
        'delete'
    ]
}
</script>


<style scoped>
.no-focus {
    outline: none;
    box-shadow: none;
}

.todo-list-item {
    display: inline-block;
    margin-right: 10px;
}
.todo-list-enter-active,
.todo-list-leave-active {
  transition: all 0.4s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.todo-list-move {
  transition: transform 0.4s;
}
</style>