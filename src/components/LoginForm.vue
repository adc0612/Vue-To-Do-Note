<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input type="text" id="username" />
    </div>
    <div>
      <label for="password">pw: </label>
      <input type="text" id="password" />
    </div>
    <button>Login</button>
    <p>{{ logmsg }}</p>
  </form>
</template>

<script>
import { loginUser } from '@/api/index';
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
  methods: {
    async submitForm() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      const { data } = await loginUser(userData);
      console.log(data.user.username);
      this.logmsg = `${data.user.username} login completed`;
      this.resetForm();
    },
    resetForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style></style>
