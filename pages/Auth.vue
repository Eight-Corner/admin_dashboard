<template>
    <div id="auth_page" class="app-page">
        <div class="b-t">
            <div class="content-wrap center-block p-y-md text-center">
                <div class="pt25 pb25 pl10 pr10">
                    <div class="social_btn_wrap mb25">
                        <div class="text-white mb15">SNS 계정으로 간편 로그인하기</div>
                        <el-button href="#" class="btn btn-block red text-white google">
                            <i class="fa fa-google-plus pull-left"></i>Sign in with Google+
                        </el-button>
                    </div>
                    <div class="mb20 text-sm b-b b-t pt25">
                        <span class="text-white">또는</span>
                        <div class="mt25">
                            <AuthLoginComponent/>
                        </div>
                    </div>
                    <NuxtLink to="/auth/forgot">
                        <div class="sm-text bold grey">비밀번호를 잊으셨습니까?</div>
                    </NuxtLink>
                    <div class="sm-text text-white mt20">계정을 소유하고 있지 않습니까?
                        <NuxtLink to="/auth/register" class="a_link">회원가입</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Auth",
    layouts: ['FooterLayout'],
    data() {
        return {
        };
    },
    methods: {
    },

}

</script>

<style scoped>


</style>
