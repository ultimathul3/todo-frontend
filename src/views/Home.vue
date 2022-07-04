<template>
    <div>
        
    </div>
</template>


<script>
export default {
    mounted() {
        document.title = 'Главная страница'
        
        let token = localStorage.getItem('token')

        if (token === null) {
            this.$router.push({ name: 'signin' })
        }
    }
}
</script>