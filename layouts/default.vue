<template>
    <div id="app" class="theme_bg">
        <UiAdminGnb />
            <Nuxt/>
        <UiFooter/>
    </div>
</template>

<script>
export default {
    name: "default",
    data() {
        return {
        }
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
