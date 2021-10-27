<template>
  <div class="signupDiv">
    <el-dialog v-model="info.dialogVisible">
      <span>{{ info.message }}</span>
    </el-dialog>
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
        <el-form-item label="아이디" prop="userId">
          <el-input
            class="duplInput"
            v-model="state.form.userId"
            placeholder="5~8글자, 영문/숫자"
          ></el-input>
          <button type="button" class="checkDuplBtn" @click="checkNickDupl">
            중복 확인
          </button>
        </el-form-item>
        <el-form-item label="닉네임" prop="nick">
          <el-input
            class="duplInput"
            v-model="state.form.nick"
            placeholder="최대 8글자"
          ></el-input>
          <button type="button" class="checkDuplBtn" @click="checkNickDupl">
            중복 확인
          </button>
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
          <el-input
            class="duplInput"
            v-model="state.form.email"
            type="email"
          ></el-input
          ><button class="checkDuplBtn" @click="checkMailDupl" type="button">
            중복 확인
          </button>
        </el-form-item>
        <el-form-item label="주소" prop="address">
          <el-input v-model="state.form.address" type="email"></el-input>
        </el-form-item>
      </el-form>
      <router-link to="/main"
        ><button class="signupCancle">취소</button></router-link
      >
      <button class="signupBtn" @click="signup" type="button">회원가입</button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'

export default {
  name: 'signup',
  setup() {
    const signupForm = ref(null)

    const info = reactive({
      message: '',
      dialogVisible: false,
      checkId: false,
      checkNick: false,
      checkEmail: false,
    })

    const state = reactive({
      form: {
        userName: '',
        userId: '',
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
        userId: [
          { required: true, message: '필수 입력 항목입니다' },
          { min: 5, max: 8, message: '아이디는 5~8자입니다' },
          {
            pattern: /^[A-Za-z]{1,8}[0-9]{0,7}/,
            message: '아이디는 영문/숫자 조합',
          },
        ],
        nick: [
          { required: true, message: '필수 입력 항목입니다' },
          { max: 8, message: '8글자까지 입력 가능합니다' },
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
              } else {
                callback()
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

    const checkNickDupl = function() {
      info.dialogVisible = true
      info.message = '사용 가능한 아이디입니다'
    }

    const checkMailDupl = function() {
      info.dialogVisible = true
      info.message = '사용 가능한 이메일입니다'
    }

    const signup = function() {
      console.log(986)
      signupForm.value.validate((valid) => {
        console.log(valid)
        if (valid) {
          console.log(valid)
          console.log('valid')
        } else {
          console.log('fail')
        }
      })
    }

    return { signupForm, info, state, checkNickDupl, checkMailDupl, signup }
  },
}
</script>

<style>
.signupDiv {
  display: flex;
  height: 85vh;
  align-items: center;
}

.signupDiv > div > div > .el-dialog {
  width: 20%;
  top: 20%;
}

.signup {
  width: 90%;
  min-width: 260px;
  max-width: 500px;
  margin: 0 auto;
}

.signup h2 {
  margin: 10% 0 5% 0;
}

.signupForm > div > div > div > input {
  border: 2px solid #a9c9de;
}

.signupForm > div > div > div > input:hover,
.signupForm > div > div > div > input:focus,
.checkDuplBtn:hover {
  outline: none;
  border: 2px solid #a9c9de;
  box-shadow: 0 0 5px #a9c9de;
}

.el-form-item.is-error .el-input__inner {
  border-color: rgb(255, 155, 155) !important;
}

.duplInput {
  width: 76% !important;
}

.checkDuplBtn {
  margin-left: 3%;
  width: 21%;
  height: 40px;
  border: none;
  border-radius: 2px;
  background-color: #a9c9de;
  font-family: 'Gowun Batang', serif !important;
  color: white;
}

.signupCancle,
.signupBtn {
  width: 45%;
  height: 35px;
  margin: 5% 0;
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

@media screen and (max-width: 950px) {
  .signupDiv > div > div > .el-dialog {
    width: 40%;
    top: 20%;
  }
}

@media screen and (max-width: 480px) {
  .signupDiv {
    display: flex;
    height: 100%;
    align-items: center;
  }

  .signupDiv > div > div > .el-dialog {
    width: 70%;
    top: 20%;
  }

  .signup > h2 {
    margin-top: 0;
  }

  .duplInput {
    width: 100% !important;
  }

  .checkDuplBtn {
    width: 100%;
    margin: 5px 0 0;
  }
}
</style>
