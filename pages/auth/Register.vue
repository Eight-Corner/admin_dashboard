<template>
    <div id="auth_page" class="app-page">

        <div id="logo" class="logo-text">
            ADMIN
        </div>

        <div class="b-t">
            <div class="content-wrap center-block p-y-md text-center">
                <div class="pt25 pb25 pl10 pr10">
                    <div class="social_btn_wrap mb25">
                        <div class="text-white mb15">SNS 계정으로 간편 가입하기 </div>
                        <el-button href="#" class="btn btn-block red text-white google">
                            <i class="fa fa-google-plus pull-left"></i>Sign in with Google+
                        </el-button>
                    </div>
                    <div class="mb20 text-sm b-b b-t pt25">
                        <span class="text-white">또는</span>
                        <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
                            <el-tab-pane label="일반 사용자" name="normal">
                                <AuthRegisterComponent :groupId="1" />
                            </el-tab-pane>
                            <el-tab-pane label="관리자" name="admin">
                                <AuthRegisterComponent :groupId="1338" />
                            </el-tab-pane>

                        </el-tabs>
                    </div>
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
    data() {
        return {
            activeName: 'normal', // default Normal, type : normal || admin
            groupId: 1,
        };
    },
    methods: {
        handleClick(tab, event) {

        },
    },

}
</script>

