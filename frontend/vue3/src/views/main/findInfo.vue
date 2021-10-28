<template>
  <div class="findInfo">
    <div class="findId">
      <h2 v-if="info.find">아이디 찾기</h2>
      <h2 v-else>비밀번호 찾기</h2>
      <p v-if="info.find">가입 시 등록한 이메일을 입력해 주세요</p>
      <p v-else>가입 시 등록한 정보를 입력해 주세요</p>
      <div v-if="info.find">
        <el-input v-model="info.userEmail" placeholder="이메일"></el-input>
      </div>
      <div v-else>
        <el-input v-model="info.userId" placeholder="아이디"></el-input>
        <el-input v-model="info.userEmail" placeholder="이메일"></el-input>
      </div>
      <button
        class="findIdBtn"
        v-if="info.find"
        type="button"
        @click="clickFindIdBtn"
      >
        아이디 찾기
      </button>
      <button class="findIdBtn" v-else type="button" @click="clickFindPwBtn">
        비밀번호 찾기
      </button>
      <router-link to="/main"
        ><button class="findCancelBtn">취소</button></router-link
      >
      <button
        class="findPwBtn"
        v-if="info.find"
        type="button"
        @click="info.find = false"
      >
        비밀번호 찾기
      </button>
      <button class="findPwBtn" v-else type="button" @click="info.find = true">
        아이디 찾기
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'findInfo',
  setup() {
    const info = reactive({
      find: true,
      userId: '',
      userEmail: '',
    })

    const clickFindIdBtn = function() {
      alert('findId')
    }

    const clickFindPwBtn = function() {
      alert('findPw')
    }
    return { info, clickFindIdBtn, clickFindPwBtn }
  },
}
</script>

<style>
.findInfo {
  display: flex;
  height: 85vh;
  align-items: center;
}

.findId {
  width: 90%;
  min-width: 270px;
  max-width: 700px;
  margin: 0 auto;
}

.findId h2,
.findId p {
  margin-top: 0;
  text-align: left;
}

.findId input,
.findIdBtn {
  margin-top: 3%;
  width: 70%;
}

.findId input {
  border: 2px solid #a9c9de;
}

.findId input:hover,
.findId input:focus {
  outline: none;
  border: 2px solid #a9c9de;
  box-shadow: 0 0 5px #a9c9de;
}

.findIdBtn,
.findPwBtn,
.findCancelBtn {
  height: 40px;
  border: none;
  border-radius: 2px;
  background-color: #a9c9de;
  font-family: 'Gowun Batang', serif !important;
  color: white;
}

.findPwBtn {
  margin: 10% 0 0 3%;
}

.findIdBtn:hover,
.findPwBtn:hover {
  box-shadow: 0 0 10px #a9c9de;
}

.findPwBtn,
.findCancelBtn {
  width: 48%;
}

.findCancelBtn {
  background-color: rgb(255, 155, 155);
}

.findCancelBtn:hover {
  box-shadow: 0 0 10px rgb(255, 155, 155);
}
</style>
