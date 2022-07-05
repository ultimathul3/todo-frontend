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
    }
}
</script>


<style>
.no-focus {
    outline: none;
    box-shadow: none;
}
.pointer {
    cursor: pointer;
}
</style>