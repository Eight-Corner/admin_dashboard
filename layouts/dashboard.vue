<template>
    <div id="app">
        <el-container class="pr25">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <UiLnb />
            </el-aside>
            <el-container>
                <el-header>
                    <UiGnb />
                </el-header>
                <el-main>
                    <Nuxt />
                </el-main>
                <el-footer>
                    <UiFooter />
                </el-footer>
            </el-container>
        </el-container>
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
