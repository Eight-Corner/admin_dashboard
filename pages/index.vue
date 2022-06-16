<template>
    <div class="app-wrap">
        <!--    로딩 -->
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    mounted() {
        this.checkAuth();
    },
    methods: {
        checkAuth() {
            sessionStorage.getItem('token') ? this.$router.push('/') : this.$router.push('/auth')
        },
    },
}
</script>
