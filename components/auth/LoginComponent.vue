<template>
<div>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="120px" class="">
        <el-form-item label="이메일" prop="email" class="flex-center">
            <el-input type="email" v-model="loginForm.email" @keyup.enter.native="submitForm('loginForm')"
                      placeholder="admin@admin.com" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="비밀번호" prop="pass" class="flex-center">
            <el-input type="password" v-model="loginForm.pass" @keyup.enter.native="submitForm('loginForm')"
                      placeholder="숫자/영문/특수문자 포함 6 ~ 20자리" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="keepAlive">
            <el-checkbox-group v-model="loginForm.keepAlive">
                <el-checkbox label="현재 정보 기억하기" class="text-white" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item>
            <div class="flex-center space-between">
<!--                <el-button class="w45p" @click="resetForm('loginForm')">다시 입력 할게요</el-button>-->
                <el-button class="w45p" @click="resetForm('loginForm')">다시 입력 할게요</el-button>
                <el-button type="primary" class="w45p" @click="submitForm('loginForm')">로그인</el-button>
            </div>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    name: "LoginComponent",
    props: {
        groupId: {
            type: Number,
            default: 0,
        },
    },
    data() {
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
                email: '',
                pass: '',
                keepAlive: false,
            },
            rules: {
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
                    alert('로그인 되었습니다.');
                    if (this.groupId === this.$group.admin) {
                        localStorage.setItem('groupId', this.groupId);
                        localStorage.setItem('token', JSON.stringify(this.loginForm.email));
                    } else {
                        localStorage.setItem('groupId', this.groupId);
                        localStorage.setItem('token', JSON.stringify(this.loginForm.email));
                    }
                    this.$router.push('/dashboard');
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
