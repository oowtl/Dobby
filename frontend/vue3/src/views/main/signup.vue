<template>
  <div class="signup">
    <h2 style="text-align: left;">회원가입</h2>
    <el-form
      class="signupForm"
      :model="state.form"
      :rules="state.rules"
      ref="signupForm"
      :label-position="state.form.align"
      label-width="103px"
    >
      <el-form-item label="이름" prop="userName">
        <el-input v-model="state.form.userName" maxlength="8"></el-input>
      </el-form-item>
      <el-form-item label="전화번호" prop="phone">
        <el-input v-model="state.form.phone"></el-input>
      </el-form-item>
      <el-form-item label="닉네임" prop="nick">
        <el-input v-model="state.form.nick" placeholder="최대 8글자"></el-input>
      </el-form-item>
      <el-form-item label="비밀번호" prop="password">
        <el-input
          v-model="state.form.password"
          type="password"
          placeholder="8~16, 영문+숫자+특수문자"
        ></el-input>
      </el-form-item>
      <el-form-item label="비밀번호 확인" prop="checkPw">
        <el-input v-model="state.form.checkPw" type="password"></el-input>
      </el-form-item>
      <el-form-item label="이메일" prop="email">
        <el-input v-model="state.form.email" type="email"></el-input>
      </el-form-item>
      <el-form-item label="주소" prop="address">
        <el-input v-model="state.form.address" type="email"></el-input>
      </el-form-item>
    </el-form>

    <router-link to="/main"
      ><button class="signupCancle">취소</button></router-link
    >

    <button class="signupBtn" @click="signup">회원가입</button>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'signup',
  setup() {
    const signupForm = ref(null)

    const state = reactive({
      form: {
        userName: '',
        phone: '',
        nick: '',
        password: '',
        checkPw: '',
        email: '',
        address: '',
        align: 'left',
      },
      rules: {
        userName: [{ required: true, message: '필수 입력 항목입니다' }],
        phone: [
          { required: true, message: '필수 입력 항목입니다' },
          {
            pattern: /^01[0-1]{1}[0-9]{3,4}[0-9]{4}/,
            message: '유효하지 않은 전화번호입니다',
          },
        ],
        nick: [
          { required: true, message: '필수 입력 항목입니다' },
          { max: 8, message: '최대 8자 글자까지 입력 가능합니다' },
        ],
        password: [
          { required: true, message: '필수 입력 항목입니다' },
          {
            min: 8,
            max: 16,
            message: '비밀번호는 8~16자입니다',
          },
          {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,16}$/,
            message: '영문, 숫자, 특수문자 조합 필요',
          },
        ],
        checkPw: [
          { required: true, message: '필수 입력 항목입니다' },
          {
            validator(rule, value, callback) {
              if (value != state.form.password) {
                callback(new Error('비밀번호가 일치하지 않습니다'))
              }
            },
          },
        ],
        email: [
          { required: true, message: '필수 입력 항목입니다' },
          {
            pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-z]{2,3}$/,
            message: '올바른 이메일 형식이 아닙니다',
          },
        ],
      },
    })

    const signup = function() {
      signupForm.value.validate((valid) => {
        if (valid) {
          console.log(valid)
          console.log('valid')
        } else {
          console.log('fail')
        }
      })
    }

    return { signupForm, state, signup }
  },
}
</script>

<style>
.signup {
  position: absolute;
  width: 40%;
  min-width: 260px;
  max-width: 700px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.signup h2 {
  margin: 10% 0 5% 0;
}

.signupForm > div > div > div > input {
  border: 2px solid #a9c9de;
}

.signupForm > div > div > div > input:hover,
.signupForm > div > div > div > input:focus {
  outline: none;
  border: 2px solid #a9c9de;
  box-shadow: 0 0 5px #a9c9de;
}

.el-form-item.is-error .el-input__inner {
  border-color: rgb(255, 155, 155) !important;
}

.signupCancle,
.signupBtn {
  width: 45%;
  height: 35px;
  margin-top: 5%;
  font-family: 'Gowun Batang', serif !important;
  color: white;
  border: none;
  border-radius: 4px;
}

.signupCancle {
  background-color: rgb(255, 155, 155);
  margin-right: 5%;
}

.signupCancle:hover {
  box-shadow: 0 0 10px rgb(255, 155, 155);
}

.signupBtn {
  background-color: #a9c9de;
  margin-left: 5%;
}

.signupBtn:hover {
  box-shadow: 0 0 10px #a9c9de;
}
</style>
