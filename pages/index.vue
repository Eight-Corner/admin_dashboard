<template>
    <div class="app-wrap">
        <div class="pos_center">
            <div class="loader10"></div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',
    async asyncData({store, redirect}) {
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


