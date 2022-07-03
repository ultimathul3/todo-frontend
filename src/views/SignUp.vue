<template>
    <div class="container mt-5">
        <div class="row text-center mb-1">
            <h4>Регистрация аккаунта</h4>
        </div>
        <div class="row justify-content-md-center">
            <div class="col-6 border rounded p-5">
                <form>
                    <div class="mb-3">
                        <label v-focus for="usernameInput" class="form-label">Имя пользователя</label>
                        <input type="text" class="form-control" id="usernameInput">
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput" class="form-label">Пароль</label>
                        <input type="password" class="form-control" id="passwordInput">
                    </div>
                    <div class="mb-3">
                        <label for="passwordInput2" class="form-label">Пароль повторно</label>
                        <input type="password" class="form-control" id="passwordInput2">
                    </div>
                    <button class="btn btn-primary">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        mounted() {
            document.title = 'Регистрация'
        }
    }
</script>