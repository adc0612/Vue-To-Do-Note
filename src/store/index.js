import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';

// vuex 호출
Vue.use(Vuex);

// vuex의 instance들을 export
export default new Vuex.Store({
  // 여러 component들 사이에 공유되는 데이터
  state: {
    // cookie에 username이 있으면 불러오고 아니면 빈문자열
    username: getUserFromCookie() || '',
    // cookie에 token이 있으면 불러오고 아니면 빈문자열
    token: getAuthFromCookie() || '',
  },
  // state에서 상태가 변경되었을때 계산하는 함수들
  getters: {
    // 만약 state.username이 비어있으면 false, 아니면 true반환
    // state.username으로 login된지 체크
    isLogin(state) {
      return state.username !== '';
    },
  },
  //   state를 바꾸는 역할
  mutations: {
    // state의 username를 넣을 함수
    setUsername(state, username) {
      state.username = username;
    },
    clearUsername(state) {
      state.username = '';
    },
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = '';
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await loginUser(userData);
      console.log(data.token);
      // store의 token의 데이터 token값을 저장
      commit('setToken', data.token);
      // username을 store의 username에 저장
      commit('setUsername', data.user.username);
      // cookie에 인증값 저장
      saveAuthToCookie(data.token);
      // cookie에 username 저장
      saveUserToCookie(data.user.username);
    },
  },
});
