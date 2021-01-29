import Vue from 'vue';
import Vuex from 'vuex';

// vuex 호출
Vue.use(Vuex);

// vuex의 instance들을 export
export default new Vuex.Store({
  // 여러 component들 사이에 공유되는 데이터
  state: {
    username: '',
    token: '',
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
  },
});
