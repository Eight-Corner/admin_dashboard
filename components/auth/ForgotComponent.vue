<template>
    <div>
        <el-form :model="forgotForm" status-icon :rules="rules" ref="forgotForm" label-width="120px" class="">
            <el-form-item label="이메일" prop="email" class="flex-center">
                <el-input type="email" v-model="forgotForm.email" ref="email" placeholder="admin@admin.com" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <div class="flex-center space-between">
                    <!--                <el-button class="w45p" @click="resetForm('forgotForm')">다시 입력 할게요</el-button>-->
                    <el-button class="w45p" @click="resetForm('forgotForm')">다시 입력 할게요</el-button>
                    <el-button type="primary" class="w45p" @click="submitForm('forgotForm')">이메일 발송</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "ForgotComponent",
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

        return {
            forgotForm: {
                email: '',
            },
            rules: {
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('작성하신 이메일로 발송하였습니다.');
                } else {
                    console.log('이메일을 다시 확인해주세요.');
                    alert('이메일을 다시 확인해주세요.');
                    this.$refs.email.focus();
                    // this.$refs[formName].focus();
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
