<template>
  <div class="main" v-if="info.size">
    <div class="mainDiv">
      <img
        src="https://cdn.notefolio.net/img/4a/68/4a68c7b7158baee7602cedc5aef9c2fe42a5f680689f55b250107789f7c531b6_v1.jpg"
        alt="logo"
      />
      <button class="mainLogin" style="float: right" @click="login">
        로그인
      </button>
      <div class="mainLoginDiv">
        <div>
          <span>ID</span>
          <input type="text" v-model="info.userId" />
        </div>
        <div>
          <span>PW</span>
          <input type="password" v-model="info.userPw" />
          <br />
          <span class="mainFind">아이디/비밀번호 찾기</span>
        </div>
      </div>
      <div class="mainSocialLeft">
        <img src="@/assets/naver.png" alt="" />
        <span>네이버 로그인</span>
      </div>
      <div class="mainSocialRight">
        <img src="@/assets/google.png" alt="" />
        <span>구글 로그인</span>
      </div>
      <router-link to="/selectsignup"
        ><button class="mainSign">회원가입</button></router-link
      >
    </div>
  </div>
  <div v-else>
    <div class="mainMobile">
      <img
        style="width: 47%; border-radius:4px;"
        src="https://cdn.notefolio.net/img/4a/68/4a68c7b7158baee7602cedc5aef9c2fe42a5f680689f55b250107789f7c531b6_v1.jpg"
        alt="logo"
      />
      <div class="mainMobLogin">
        <input type="text" placeholder="ID" v-model="info.userId" />
        <br />
        <input type="password" placeholder="PW" v-model="info.userPw" />
        <br />
        <div class="mainMobFind">
          <p>아이디/비밀번호 찾기</p>
        </div>
        <br />
        <button @click="login">로그인</button>
      </div>
      <div class="mainMobSocialLogin">
        <div>
          <img src="@/assets/naver.png" alt="" /><span>네이버 로그인</span>
        </div>
        <br />
        <div>
          <img src="@/assets/google.png" alt="" /><span>구글 로그인</span>
        </div>
      </div>
      <div class="mainMobSign">
        <h3>아직 회원이 아니신가요?</h3>
        <router-link to="/selectsignup">회원가입</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onBeforeMount } from '@vue/runtime-core'
export default {
  name: 'main',
  setup() {
    const info = reactive({
      size: true,
      userId: '',
      userPw: '',
    })
    onBeforeMount(() => {
      if (window.innerWidth < 730) {
        info.size = false
      }
    })
    window.addEventListener(
      'resize',
      function() {
        if (window.innerWidth < 730) {
          info.size = false
        } else {
          info.size = true
        }
      },
      true
    )

    const login = function() {
      alert('login')
    }

    return { info, login }
  },
}
</script>

<style>
.main {
  display: flex;
  height: 85vh;
  align-items: center;
}

.mainDiv,
.mainMobile {
  width: 100%;
  min-width: 270px;
  max-width: 700px;
  margin: 0 auto;
}

.mainDiv > img {
  width: 200px;
  float: left;
  border-radius: 4px;
}

.mainDiv > button,
.mainSign,
.mainMobLogin > button {
  color: white;
  background-color: #a9c9de;
  border: none;
  border-radius: 4px;
  font-family: 'Gowun Batang', serif !important;
  font-size: 17px;
}

.mainLogin {
  height: 100px;
  width: 120px;
}

.mainSign {
  width: 700px;
  height: 45px;
  margin-top: 20px;
}

.mainDiv > button:hover,
.mainSign:hover,
.mainSocialLeft:hover,
.mainSocialRight:hover,
.mainMobLogin > button:hover,
.mainMobSocialLogin > div:hover {
  box-shadow: 0 0 10px #719ece;
}

.mainLoginDiv > div {
  margin-bottom: 10px;
}

.mainLoginDiv > div > input,
.mainMobLogin > input {
  height: 40px;
  width: 230px;
  padding-left: 10px;
  border: 2px solid #a9c9de;
  border-radius: 4px;
}

.mainLoginDiv > div > input:focus,
.mainMobLogin > input:focus {
  outline: none;
  border: 2px solid #a9c9de;
  box-shadow: 0 0 5px #a9c9de;
  margin-bottom: 0;
}

.mainLoginDiv > div > span {
  font-size: 20px;
}

.mainLoginDiv > div:nth-child(1) > span {
  margin-right: 20px;
}

.mainLoginDiv > div:nth-child(2) > span:nth-child(1) {
  margin-right: 10px;
}

.mainFind {
  font-size: 13px !important;
  color: #a9c9de;
  padding-left: 50px;
  cursor: pointer;
}

.mainSocialLeft,
.mainSocialRight {
  display: inline-block;
  width: 210px;
  height: 35px;
  text-align: left;
  margin-top: 17px;
  padding: 5px;
  text-align: center;
  background-color: white;
  border: 1px solid #a9c9de;
  border-radius: 2px;
  cursor: pointer;
}

.mainSocialLeft {
  margin-left: 40px;
  margin-right: 13px;
}

.mainSocialLeft > img,
.mainSocialRight > img {
  float: left;
  width: 35px;
  height: 35px;
}

.mainSocialLeft > span,
.mainSocialRight > span {
  line-height: 2;
}

.mainSocialRight > span {
  margin-left: 7px;
}

.mainMobLogin > input {
  width: 45%;
}

.mainMobLogin > input:nth-child(1) {
  margin-top: 20px;
  margin-bottom: 10px;
}

.mainMobFind {
  display: inline-block;
  width: 47%;
  text-align: end;
}

.mainMobFind > p {
  font-size: 14px;
  color: #a9c9de;
  cursor: pointer;
  margin: 0;
}

.mainMobLogin > button {
  width: 48%;
  height: 35px;
  margin: 10px 0 20px 0;
}

.mainMobSocialLogin > div {
  display: inline-block;
  width: 45%;
  height: 25px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 1px;
  background-color: white;
  border: 1px solid #a9c9de;
}

.mainMobSocialLogin > div > img {
  float: left;
  width: 25px;
}

.mainMobSign {
  padding-top: 30px;
}

.mainMobSign > h3,
.mainMobSign > a {
  font-size: 15px;
  color: #a9c9de;
}
</style>
