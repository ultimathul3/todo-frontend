<template>
    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li 
                        @click="$router.push({ name: 'home' })"
                        class="pointer">
                        <a class="nav-link text-white">TODO</a>
                    </li>
                </ul>

                <div v-if="getToken() !== null" class="px-3">
                    {{ getUsername() }}
                </div>
                <div class="text-end">
                    <button
                        v-if="getToken() !== null"
                        @click="logout"
                        type="button"
                        class="btn btn-outline-light me-2">
                        Выйти
                    </button>
                    <button
                        v-if="$route.name === 'signin'"
                        @click="$router.push({ name: 'signup' })"
                        type="button"
                        class="btn btn-warning">
                        Зарегистрироваться
                    </button>
                    <button
                        v-if="$route.name === 'signup'"
                        @click="$router.push({ name: 'signin' })"
                        type="button"
                        class="btn btn-warning">
                        Войти
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>


<script>
import axios from 'axios'

export default {
    methods: {
        getToken() {
            return localStorage.getItem('token')
        },
        getUsername() {
            return localStorage.getItem('username')
        },
        async logout() {
            await axios.post(this.$store.state.serverUrl + 'logout/', {}, {
                headers: {
                    'Authorization': 'Token ' + this.getToken()
                }
            })
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            this.$router.push({ name: 'signin' })
        }
    }
}
</script>


<style scoped>
.pointer {
    cursor: pointer;
}
</style>