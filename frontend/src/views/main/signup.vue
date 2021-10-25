<template>
  <div class="signup">
    <h2 style="text-align: left;">회원가입</h2>
    <table class="signupTable">
      <tr>
        <td>이름</td>
        <td><input type="text" maxlength="7" /></td>
      </tr>
      <tr>
        <td>아이디</td>
        <td>
          <input
            type="text"
            minlength="5"
            maxlength="12"
            placeholder="5~12 영문/숫자"
          /><br />
        </td>
      </tr>
      <tr>
        <td>닉네임</td>
        <td>
          <input type="text" minlength="4" maxlength="8" />
        </td>
      </tr>
      <tr>
        <td>비밀번호</td>
        <td>
          <input
            type="password"
            minlength="8"
            maxlength="16"
            placeholder="8~16 영문+숫자"
          />
        </td>
      </tr>

      <tr>
        <td>비밀번호 확인</td>
        <td>
          <input type="password" minlength="8" maxlength="16" />
        </td>
      </tr>
      <tr>
        <td>이메일</td>
        <td><input type="email" /></td>
      </tr>
      <tr>
        <td>전화번호</td>
        <td><input type="number" /></td>
      </tr>
      <tr>
        <td>주소</td>
        <td><input type="text" /></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'signup',
}
</script>

<style>
.signup {
  position: absolute;
  min-width: 200px;
  max-width: 1500px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.signupTable {
  width: 100%;
}

.signupTable > tbody > tr > td {
  text-align: left;
  height: 68px;
}

.signupTable > tbody > tr > td:nth-child(1) {
  width: 200px;
}

.signupTable > tbody > tr > td > input {
  height: 40px;
  width: 230px;
  padding-left: 10px;
  border: 2px solid #a9c9de;
  border-radius: 4px;
}

.signupTable > tbody > tr > td > input:focus {
  outline: none;
  border: 2px solid #a9c9de;
  box-shadow: 0 0 5px #a9c9de;
  margin-bottom: 0;
}

.signupTable > tbody > tr > td > p {
  margin: 2px;
  font-size: 12px;
}

@media screen and (max-width: 720px) {
  .signupTable > tbody > tr > td {
    display: block;
    height: 30px;
  }

  .signupTable > tbody > tr > td:nth-child(2) {
    height: 39px;
  }

  .signupTable > tbody > tr > td > input {
    height: 25px;
    padding-left: 10px;
    border: 2px solid #a9c9de;
    border-radius: 4px;
  }
}
</style>
