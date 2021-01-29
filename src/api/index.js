import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  // axios.crate를 이용해 기본 옵션들을 설정할 수 있다.
  // 거의 백앤드 서버에 접속하는 URL은 하나로 지정해서 하기 떄문에 baseURL값으로 집어 넣는다.
  // 그럼 post할 떄 axios.post(URL,data)대신 instance.post(data)로 post요청을 할 수 있다.
  // axios post나 get 호출을 할 때 instance에 정의한것을 가지고 수행을한다.
  const instance = axios.create({
    // baseURL: 'http://localhost:3000/',
    // 위에 주소를 .env파일에서 공통으로 지정
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

// 회원가입 data post
function registerUser(userData) {
  //   const url = 'http://localhost:3000/signup';
  // 첫번재 인자 보낼 URL
  // 두번재 인자 보낼 data
  //   return axios.post(url, userData);
  // http://localhost:300/는 위에 선언해놓은 instance에서 바로 연결해주고 옆에 붙여줄 signup만 URL에 인자로 넣어주면 된다.
  return instance.post('signup', userData);
}

// 로그인 기능 data post
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
