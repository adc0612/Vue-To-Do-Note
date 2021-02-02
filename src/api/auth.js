// 로그인, 회원가입, 회원탈퇴 API
import { instance } from './index';
// 회원가입 data post API
function registerUser(userData) {
  //   const url = 'http://localhost:3000/signup';
  // 첫번재 인자 보낼 URL
  // 두번재 인자 보낼 data
  //   return axios.post(url, userData);
  // http://localhost:300/는 위에 선언해놓은 instance에서 바로 연결해주고 옆에 붙여줄 signup만 URL에 인자로 넣어주면 된다.
  return instance.post('signup', userData);
}

// 로그인 기능 data post API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
