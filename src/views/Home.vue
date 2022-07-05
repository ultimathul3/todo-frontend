<template>
    <div>
        <div class="container mt-4">
            <div class="row justify-content-center mb-4">
                <div class="col-2">
                    <button type="button" class="btn btn-success w-100">Добавить</button>
                </div>
            </div>

            <todo-list
                @delete="deleteTodo"
                :todos="todos" />

            <pagination
                v-model:currentPage="currentPage"
                :pages="pages"
                :next="next"
                :previous="previous" />
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import storageMixin from '@/mixins/storageMixin'
import Pagination from '@/components/Pagination'
import TodoList from '@/components/TodoList'

export default {
    mixins: [
        storageMixin
    ],

    components: {
        Pagination,
        TodoList
    },

    data() {
        return {
            todos: [],
            count: 0,
            next: null,
            previous: null,
            pages: 0,
            currentPage: 1
        }
    },

    methods: {
        async getTodos() {
            let response
            try {
                response = await axios.get(this.$store.state.serverUrl + `todos/?page=${this.currentPage}`, {
                    headers: {
                        'Authorization': 'Token ' + this.getToken()
                    }
                })
            } catch (error) {
                if (error.response.status === 401) {
                    this.removeToken()
                    this.removeUsername()
                    this.$router.push({ name: 'signin' })
                }
                return
            }

            this.todos = response.data.results
            this.count = response.data.count
            this.next = response.data.next
            this.previous = response.data.previous

            this.pages = Math.ceil(this.count / 5)
        },

        async deleteTodo(id) {
            try {
                await axios.delete(this.$store.state.serverUrl + `todos/${id}/`, {
                    headers: {
                        'Authorization': 'Token ' + this.getToken()
                    }
                })
            } catch (error) {
                console.log(error)
                return
            }

            this.todos = this.todos.filter(t => t.id !== id)
            if (this.todos.length === 0 && this.currentPage !== 0) {
                this.currentPage--
            }
            this.getTodos()
        }
    },

    mounted() {
        document.title = 'Главная страница'
        
        let token = this.getToken()

        if (token === null) {
            this.$router.push({ name: 'signin' })
            retun
        }

        this.getTodos()
    },

    watch: {
        currentPage() {
            this.getTodos()
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }
}
</script>