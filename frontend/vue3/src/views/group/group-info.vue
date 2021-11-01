<template>
  <div class="groupInfo">
    <div class="groupInfoDiv">
      <div class="groupInfoTop">
        <img src="@/assets/dobby.png" alt="" />
        <div>
          <h3>그룹 이름</h3>
          <span>비공개 여부</span>
          <el-switch v-model="info.private" disabled></el-switch>
          <el-input v-if="info.private" disabled></el-input>
        </div>
      </div>
      <div class="groupInfoMid">
        <p>상세 설명</p>
        <el-input v-model="info.info" type="textarea" disabled></el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'groupInfo',
  setup() {
    const info = reactive({
      private: false,
      info: 'sssss',
    })
    return { info }
  },
}
</script>

<style>
.groupInfo {
  display: flex;
  height: 80vh;
  align-items: center;
}

.groupInfoDiv {
  width: 90%;
  min-width: 260px;
  max-width: 500px;
  margin: 0 auto;
}

.groupInfoTop img {
  float: left;
  width: 30%;
  margin: 0 5% 5% 0;
}

.groupInfoTop > div {
  float: left;
  width: 65%;
  text-align: left;
}

.groupInfoTop h3 {
  margin-top: 0;
}

.groupInfoTop span {
  display: inline-block;
  margin: 0 5% 5% 0;
}

.groupInfoMid p {
  clear: both;
  margin: 0;
  text-align: left;
}

.groupInfoMid textarea {
  height: 100px;
  max-height: 100px;
}

.groupInfoMid .el-textarea.is-disabled .el-textarea__inner,
.groupInfoTop .el-input.is-disabled .el-input__inner {
  background-color: #fff;
  color: black;
  cursor: auto;
}

.groupInfoTop .el-switch.is-disabled .el-switch__core {
  cursor: auto;
}

@media screen and (max-width: 570px) {
  .groupInfoTop img {
    float: none;
    width: 50%;
    margin: 0;
  }

  .groupInfoTop > div {
    display: inline-block;
    float: none;
    width: 65%;
    text-align: center;
  }

  .groupInfoTop h3 {
    margin-top: 5%;
  }

  .groupInfoMid p {
    clear: both;
    margin: 5% 0 2% 0;
    text-align: left;
  }
}
</style>
