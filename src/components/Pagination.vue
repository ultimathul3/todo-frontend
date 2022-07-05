<template>
    <nav v-if="pages > 1" class="row d-flex justify-content-center mt-5">
        <div class="col-auto">
            <ul class="pagination">
                <li 
                    @click="currentPage = 1"
                    v-if="previous !== null"
                    class="page-item pointer">
                    <a class="page-link">&lt;&lt;</a>
                </li>
                <li 
                    v-if="currentPage-1 > 0"
                    class="page-item pointer">
                    <a @click="currentPage--" class="page-link">{{ currentPage-1 }}</a>
                </li>
                <li 
                    class="page-item pointer active">
                    <a class="page-link">{{ currentPage }}</a>
                </li>
                <li 
                    v-if="currentPage+1 <= pages"
                    class="page-item pointer">
                    <a @click="currentPage++" class="page-link">{{ currentPage+1 }}</a>
                </li>
                <li 
                    @click="currentPage = pages" 
                    v-if="next !== null" 
                    class="page-item pointer">
                    <a class="page-link">&gt;&gt;</a>
                </li>
            </ul>
        </div>
    </nav>
</template>


<script>
export default {
    props: {
        pages: Number,
        currentPage: Number,
        next: [String, null],
        previous: [String, null]
    },

    watch: {
        currentPage() {
            this.$emit('update:currentPage', this.currentPage)
        }
    }
}
</script>


<style scoped>
.page-item.active .page-link {
  z-index: 3;
  color: #fff;
  background-color: #ff6781;
  border-color: #ff6781;
}
</style>