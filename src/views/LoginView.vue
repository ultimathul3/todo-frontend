<template>
    <div class="container mt-5">
        <div class="row text-center mb-1">
            <h4>Вход в аккаунт</h4>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-6 border rounded p-5">
                <form>
                    <div class="mb-3">
                        <label v-focus for="usernameInput" class="form-label">Имя пользователя</label>
                        <input 
                            v-model="username"
                            @input="usernameInvalid = false"
                            v-bind:class="{'is-invalid': usernameInvalid}"
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
                            v-bind:class="{'is-invalid': passwordInvalid}"
                            type="password"
                            class="form-control"
                            id="passwordInput">
                        <div class="invalid-feedback">
                            Введите пароль
                        </div>
                    </div>
                    <button @click.prevent="login" class="btn btn-primary">Войти</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            usernameInvalid: false,
            passwordInvalid: false
        }
    },

    methods: {
        login() {
            if (this.password == '')
                this.passwordInvalid = true
            if (this.username == '')
                this.usernameInvalid = true
        }
    },

    mounted() {
        document.title = 'Вход'
    }
}
</script>