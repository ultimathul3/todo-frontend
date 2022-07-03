<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    components: {
        Navbar
    },

    beforeCreate() {
        this.$router.push({ name: 'login' })
    }
}
</script>