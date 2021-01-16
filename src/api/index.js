import axios from 'axios';

// axios.crate를 이용해 기본 옵션들을 설정할 수 있다.
// 거의 백앤드 서버에 접속하는 URL은 하나로 지정해서 하기 떄문에 baseURL값으로 집어 넣는다.
// 그럼 post할 떄 axios.post(URL,data)대신 instance.post(data)로 post요청을 할 수 있다.
const instance = axios.create({
  //   baseURL: 'http://localhost:3000/'
  // 위에 주소를 .env파일에서 공통으로 지정
  baseURL: process.env.VUE_APP_API_URL,
});

// 회원가입 data post
function registerUser(userData) {
  //   const url = 'http://localhost:3000/signup';
  // 첫번재 인자 보낼 URL
  // 두번재 인자 보낼 data
  //   return axios.post(url, userData);
  return instance.post(userData);
}

export { registerUser };
