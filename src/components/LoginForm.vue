<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input type="text" id="username" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw: </label>
          <input type="text" id="password" v-model="password" />
        </div>
        <!-- email validation 통과, password가 있어야 submit버튼 활성화 -->
        <button
          :disabled="!isUsernameValid || !password"
          type="submit"
          class="btn"
          :class="!isUsernameValid || !password ? 'disabled' : null"
        >
          Login
        </button>
        <p class="log">{{ logmsg }}</p>
      </form>
    </div>
  </div>
</template>

<script>
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
        // LOGIN하는 store의 Action 호출
        // LOGIN에는 서버에서 데이터 받아오는 비동기 호출이 있으므로 await 처리를 한다.
        await this.$store.dispatch('LOGIN', userData);
        //main창으로 이동
        this.$router.push('/main');
        this.resetForm();
      } catch (error) {
        // 에러 생겼을때 로직
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

<style>
.btn {
  color: white;
}
</style>
