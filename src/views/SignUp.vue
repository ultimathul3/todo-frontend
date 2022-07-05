<template>
    <div class="container mt-5">
        <div class="row text-center mb-1">
            <h4>Регистрация аккаунта</h4>
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
                    <div class="mb-3">
                        <label for="passwordInput2" class="form-label">Пароль повторно</label>
                        <input
                            v-model="password2"
                            @input="password2Invalid = false"
                            :class="{'is-invalid': password2Invalid}" 
                            type="password" 
                            class="form-control" 
                            id="passwordInput2">
                        <div class="invalid-feedback">
                            Введите пароль повторно
                        </div>
                    </div>
                    <button @click.prevent="signup" class="btn btn-primary">Зарегистрироваться</button>
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
            password2: '',
            usernameInvalid: false,
            passwordInvalid: false,
            password2Invalid: false,
            errors: []
        }
    },

    methods: {
        async signup() {
            let isValid = true

            if (this.username == '') {
                this.usernameInvalid = true
                isValid = false
            }
            if (this.password == '') {
                this.passwordInvalid = true
                isValid = false
            }
            if (this.password2 == '') {
                this.password2Invalid = true
                isValid = false
            }
            if (this.password !== this.password2) {
                this.errors = ['Пароли не совпадают']
                this.password2Invalid = true
                isValid = false
            }
            if (!isValid) {
                return
            }
            
            try {
                await axios.post(this.$store.state.serverUrl + 'signup/', {
                    username: this.username,
                    password: this.password
                })
            } catch (error) {
                this.errors = error.response.data.username
                return
            }

            this.$router.push({ name: 'signin' })
        }
    },

    mounted() {
        document.title = 'Регистрация'
    }
}
</script>