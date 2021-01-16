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
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import { registerUser } from '@/api/index';
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
  methods: {
    async submitForm() {
      console.log('Form submit');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      // const response = await registerUser(userData)
      const { data } = await registerUser(userData);
      console.log(data.username);
      this.logmsg = `${data.username} signup completed`;
      this.resetForm();
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
