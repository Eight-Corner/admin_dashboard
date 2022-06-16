<template>
    <div id="auth_page" class="app-page">

        <div id="logo" class="logo-text">
            ADMIN
        </div>

        <div class="b-t">
            <div class="content-wrap center-block p-y-md text-center">
                <div class="p-a-md">
                    <div class="large-text text-white">
                        비밀번호를 잊으셨습니까?
                        <div class="sm-text grey mt15 mb30 lh-1rem">
                            아래 란에 이메일을 입력해주세요.<br/>
                            고객님의 비밀번호를 찾을 수 있도록 이메일을 발송해드립니다.
                        </div>
                        <AuthForgotComponent />
                    </div>
                    <div class="sm-text text-white mt20">
                        <NuxtLink to="/auth" class="a_link">로그인</NuxtLink>으로 돌아가기
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Forgot",
}
</script>

<style scoped>

</style>
