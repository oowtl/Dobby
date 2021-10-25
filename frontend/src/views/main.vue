<template>
  <div v-if="now.size">
    <div class="mainDiv">
      <img
        src="https://cdn.notefolio.net/img/4a/68/4a68c7b7158baee7602cedc5aef9c2fe42a5f680689f55b250107789f7c531b6_v1.jpg"
        alt="logo"
      />
      <button style="float: right">로그인</button>
      <div class="mainLoginDiv">
        <div>
          <span>ID</span>
          <input type="text" />
        </div>
        <div>
          <span>PW</span>
          <input type="text" />
          <br />
          <span class="mainFind">아이디/비밀번호 찾기</span>
        </div>
      </div>
      <div class="mainSocialLeft">
        <img
          src="https://i.pinimg.com/originals/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.png"
          alt=""
        />
        <span>네이버 로그인</span>
      </div>
      <div class="mainSocialRight">
        <img
          src="https://blog.kakaocdn.net/dn/kNLCY/btq33aFCwIZ/GG5w46bI4JhIP00XdDrun0/img.jpg"
          alt=""
        />
        <span>구글 로그인</span>
      </div>
    </div>
  </div>
  <div v-else>
    <p>작다</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { onBeforeMount } from '@vue/runtime-core'
export default {
  name: 'main',
  setup() {
    const now = reactive({
      size: true,
    })
    onBeforeMount(() => {
      if (window.innerWidth < 530) {
        now.size = false
      }
    })
    window.addEventListener(
      'resize',
      function() {
        if (window.innerWidth < 530) {
          now.size = false
        } else {
          now.size = true
        }
      },
      true
    )
    return { now }
  },
}
</script>

<style>
.mainDiv {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 500px;
}

.mainDiv > img {
  width: 150px;
  float: left;
  border-radius: 4px;
}

.mainDiv > button {
  height: 50px;
  color: white;
  background-color: #a9c9de;
  border: none;
  height: 80px;
  width: 90px;
  border-radius: 4px;
}

.mainDiv > button:hover,
.mainSocialLeft:hover,
.mainSocialRight:hover {
  box-shadow: 0 0 10px #719ece;
}

.mainLoginDiv > div {
  margin-bottom: 10px;
}

.mainLoginDiv > div > input {
  height: 30px;
  padding-left: 10px;
  border: 2px solid #a9c9de;
  border-radius: 4px;
}

.mainLoginDiv > div > input:focus {
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

.mainLoginDiv > div:nth-child(2) > span {
  margin-right: 8px;
}

.mainFind {
  font-size: 10px !important;
  color: #a9c9de;
  padding-left: 50px;
  cursor: pointer;
}

.mainSocialLeft,
.mainSocialRight {
  display: inline-block;
  width: 158px;
  height: 32px;
  text-align: left;
  margin-top: 4px;
  background-color: white;
  border: 1px solid #a9c9de;
  border-radius: 2px;
  cursor: pointer;
}

.mainSocialLeft {
  margin-left: 17px;
  margin-right: 13px;
}

.mainSocialLeft > img,
.mainSocialRight > img {
  width: 30px;
  height: 32px;
  margin-right: 12px;
  float: left;
}

.mainSocialLeft > span,
.mainSocialRight > span {
  line-height: 2;
}

.mainSocialRight > span {
  margin-left: 7px;
}
</style>
