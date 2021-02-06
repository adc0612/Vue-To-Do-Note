<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isUserLogin">by {{ $store.state.username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="isUserLogin">
        <!-- hyperlink이동기능 방지 -->
        <a href="javascript:;" @click="logoutUser" class="logout-button"
          >Logout</a
        >
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';
export default {
  computed: {
    isUserLogin() {
      return this.$store.getters.isLogin;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      // vuex mutations에 있는 clearUsername 함수 호출 store username값 초기화
      this.$store.commit('clearUsername');
      // vuex mutations에 있는 clearToken 함수 호출해서 store token값 초기화
      this.$store.commit('clearToken');
      //쿠키에서 username, token삭제
      deleteCookie('til_auth');
      deleteCookie('til_name');
      // loginPage로 전환
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #3e65c1;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}
a {
  color: #fff;
  font-size: 18px;
}
a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}
.logo > span {
  font-size: 14px;
  font-weight: normal;
}
.navigations a {
  margin-left: 10px;
}
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}
a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
.username {
  color: white;
}
</style>
