<template>
    <div id="app">
        <div>
            <UiGnb/>
        </div>
        <div>
            <UiLnb/>
        </div>
        <div>
            <Nuxt/>
        </div>
        <div>
            <UiFooter/>
        </div>
    </div>
</template>

<script>
export default {
    name: "DashboardLayout",
    data() {
        return {}
    },
    mounted() {
        this.checkAuth();
    },
    methods: {
        checkAuth() {
            localStorage.getItem('token') ? this.$router.push('/dashboard') : this.$router.push('/auth')
        },
    }
}
</script>

<style scoped>

</style>
