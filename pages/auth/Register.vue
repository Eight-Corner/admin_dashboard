<template>
    <div id="auth_page" class="app-page">

        <div id="logo" class="logo-text">
            ADMIN
        </div>

        <div class="b-t">
            <div class="content-wrap center-block p-y-md text-center">
                <div class="p-a-md">
                    <div class="social_btn_wrap">
                        <el-button href="#" class="btn btn-block red text-white google">
                            <i class="fa fa-google-plus pull-left"></i>Sign in with Google+
                        </el-button>
                    </div>
                    <div class="mt20 mb20 text-sm">
                        <span class="text-white">또는</span>
                    </div>
                    <AuthRegisterComponent />
                    <div class="sm-text text-white mt20">계정을 소유하고 계십니까?
                        <NuxtLink to="/auth" class="a_link">로그인</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Register",

}
</script>

<style scoped>

.logo-text {
    text-transform: uppercase;
    background-image: linear-gradient(
        -225deg,
        #231557 0%,
        #44107a 29%,
        #ff1361 67%,
        #fff800 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 56px;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
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
    /* 로그인 폼 validate 때문에 최저너비 수정*/
    min-width: 355px;
    max-width: 400px;
}

.google {
    border-color: #ff4336;
}

</style>
