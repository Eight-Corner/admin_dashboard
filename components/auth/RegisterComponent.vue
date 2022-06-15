<template>
    <div>
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="120px" class="">
            <el-form-item label="이름" prop="username" class="flex-center">
                <el-input type="text" v-model="loginForm.username" placeholder="Steve Jobs" autocomplete="off" />
            </el-form-item>
            <el-form-item label="이메일" prop="email" class="flex-center">
                <el-input type="email" v-model="loginForm.email" placeholder="admin@admin.com" autocomplete="off" />
            </el-form-item>
            <el-form-item label="비밀번호" prop="pass" class="flex-center">
                <el-input type="password" v-model="loginForm.pass" placeholder="숫자/영문/특수문자 포함 6 ~ 20자리" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <div class="flex-center space-between">
                    <!--                <el-button class="w45p" @click="resetForm('loginForm')">다시 입력 할게요</el-button>-->
                    <el-button class="w45p" @click="resetForm('loginForm')">다시 입력 할게요</el-button>
                    <el-button type="primary" class="w45p" @click="submitForm('loginForm')">회원가입</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "RegisterComponent",
    data() {
        let validateUsername = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('이름을 적어주세요.'));
            } else {
                if (value.length < 2) {
                    callback(new Error('이름은 2자 이상이어야 합니다.'));
                }
                if (value.length > 20) {
                    callback(new Error('이름은 20자 이하로 적어주세요.'));
                }
                let reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/`]/gim;
                value = value.trimStart();
                value = value.trimEnd();
                this.loginForm.username = value;
                if (reg.test(value)) {
                    callback(new Error('이름에는 특수문자를 사용할 수 없습니다.'));
                }
                /*if (value.search(/[^a-zA-Z0-9가-힣]/) != -1) {
                    callback(new Error('이름에는 영문자와 한글과 숫자 혼용으로 사용할 수 있습니다.'));
                }*/
                callback();
            }
        };
        let validateEmail = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('이메일을 입력해주세요.'));
            } else {
                if (!/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(value)) {
                    callback(new Error('올바른 이메일 형식이 아닙니다.'));
                } else {
                    callback();
                }
            }
        };
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('비밀번호를 입력해주세요.'));
            } else {
                if (value.length < 6) {
                    callback(new Error('비밀번호는 6자 이상이어야 합니다.'));
                }
                if (value.length > 20) {
                    callback(new Error('비밀번호는 20자 이하이어야 합니다.'));
                }
                if (value.search(/[0-9]/) < 0) {
                    callback(new Error('비밀번호는 숫자, 영어, 특수문자를 포함해야 합니다.'));
                }
                if (value.search(/[a-z]/) < 0) {
                    callback(new Error('비밀번호는 숫자, 영어, 특수문자를 포함해야 합니다.'));
                }
                if (value.search(/[~!@#$%^&*()_+|<>?:{}]/) < 0) {
                    callback(new Error('비밀번호는 숫자, 영어, 특수문자를 포함해야 합니다.'));
                }
                callback();
            }
        };

        return {
            loginForm: {
                username: '',
                email: '',
                pass: '',
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: 'blur' },
                ],
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>

<style scoped>

</style>
