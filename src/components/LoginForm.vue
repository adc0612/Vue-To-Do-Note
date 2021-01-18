<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" id="password" v-model="password" />
    </div>
    <!-- email validation 통과, password가 있어야 submit버튼 활성화 -->
    <button :disabled="!isUsernameValid || !password" type="submit">
      Login
    </button>
    <p>{{ logmsg }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
import { validateEmail } from '@/utils/validation';
export default {
  data() {
    return {
      // form values
      username: '',
      password: '',
      //   log
      logmsg: '',
    };
  },
  computed: {
    // username이 email형식인지 validateEmail function에서 체크후 맞으면 true 틀리면 false 리턴함
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
        };
        const { data } = await loginUser(userData);
        console.log(data.user.username);
        this.logmsg = `${data.user.username} login completed`;
        this.resetForm();
      } catch (error) {
        // 에러 생겼을때 로직
        // console.log(error);
        // console.log(error.response);
        console.log(error.response.data);
        this.logmsg = error.response.data;
      }
    },
    resetForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
