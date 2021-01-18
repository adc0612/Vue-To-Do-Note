<template>
  <form @submit.prevent="submitForm">
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
    <button :disabled="!isUsernameValid || !password || nickname" type="submit">
      Submit
    </button>
    <p>{{ logmsg }}</p>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
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
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      // const response = await registerUser(userData)
      const { data } = await registerUser(userData);
      this.logmsg = `${data.username} signup completed`;
      this.resetForm();
      console.log('Form submit');
      console.log(data.username);
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
