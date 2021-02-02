<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <!-- v-on directive를 이용해 폼의 submit 이벤트를 바인딩
      submit시 페이지 갱신을 막는 prevent
      v-on:submit == @submit -->
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <!-- email validation 통과, password와 nickname이 있어야 submit버튼 활성화 -->
        <button
          :disabled="!isUsernameValid || !password || nickname"
          type="submit"
          class="btn"
        >
          Submit
        </button>
        <p class="log">{{ logmsg }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { registerUser } from '@/api/auth';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      nickname: '',
      // log msg
      logmsg: '',
    };
  },
  computed: {
    // username이 eamil형식인지 validation
    // email textfield에 글자 하나 칠 때마다 validation검사가 됨
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      try {
        // 에러 없이 통과했을때 로직
        const userData = {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        };
        // promise 기법
        // const { data } = registerUser(userData)
        //   .then()
        //   .catch(error => console.log(error));
        const { data } = await registerUser(userData);
        this.logmsg = `${data.username} signup completed`;
        this.resetForm();
        console.log('Form submit');
        console.log(data.username);
      } catch (error) {
        console.log(error.response.data);
      }
    },
    resetForm() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
};
</script>

<style></style>
