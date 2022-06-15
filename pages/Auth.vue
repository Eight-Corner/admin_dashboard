<template>
    <div id="auth_page">

        <div id="logo">ADMIN</div>

        <div class="b-t">
            <div class="content-wrap center-block p-y-md text-center">
                <div class="p-a-md">
                    <div class="social_btn_wrap">
                        <el-button href="#" class="btn btn-block indigo text-white m-b-sm">
                            <i class="ph-facebook-logo"></i>Sign in with Email
                        </el-button>
                        <el-button href="#" class="btn btn-block red text-white">
                            <i class="fa fa-google-plus pull-left"></i>Sign in with Google+
                        </el-button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Auth"
}
</script>

<style scoped>

#auth_page {
    width: 100%;
    height: 100%;
    text-align: center;
    margin: 0 auto;
}

#logo {
    width: 200px;
    height: 200px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;

    margin: 0 auto;
}

.content-wrap {
    width: 344px;
}

</style>
