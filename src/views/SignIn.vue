<template>
    <div class="container mt-5">
        <div class="row text-center mb-1">
            <h4>Вход в аккаунт</h4>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-5 border rounded p-4">
                <ul class="list-group">
                    <li
                        v-for="(error, index) in errors" 
                        :class="{'mb-3': index == errors.length-1}"
                        class="list-group-item list-group-item-danger">
                        {{ error }}
                    </li>
                </ul>
                <form>
                    <div class="mb-3">
                        <label v-focus for="usernameInput" class="form-label">Имя пользователя</label>
                        <input 
                            v-model="username"
                            @input="usernameInvalid = false"
                            :class="{'is-invalid': usernameInvalid}"
                            type="text" 
                            class="form-control" 
                            id="usernameInput">
                        <div class="invalid-feedback">
                            Введите имя пользователя
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Пароль</label>
                        <input 
                            v-model="password"
                            @input="passwordInvalid = false"
                            :class="{'is-invalid': passwordInvalid}"
                            type="password"
                            class="form-control"
                            id="passwordInput">
                        <div class="invalid-feedback">
                            Введите пароль
                        </div>
                    </div>
                    <button @click.prevent="signin" class="btn btn-primary">Войти</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            username: '',
            password: '',
            usernameInvalid: false,
            passwordInvalid: false,
            errors: []
        }
    },

    methods: {
        async signin() {
            let isValid = true

            if (this.username == '') {
                this.usernameInvalid = true
                isValid = false
            }
            if (this.password == '') {
                this.passwordInvalid = true
                isValid = false
            }
            if (!isValid) {
                return
            }
                
            let response
            try {
                response = await axios.post(this.$store.state.serverUrl + 'signin/', {
                    username: this.username,
                    password: this.password
                })
            } catch (error) {
                this.errors = error.response.data.non_field_errors
                return
            }

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
            this.$router.push({ name: 'home' })
        }
    },

    mounted() {
        document.title = 'Вход'
    }
}
</script>