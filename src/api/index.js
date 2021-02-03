import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// axios 초기화 함수
function createInstance() {
  // axios.crate를 이용해 기본 옵션들을 설정할 수 있다.
  // 거의 백앤드 서버에 접속하는 URL은 하나로 지정해서 하기 떄문에 baseURL값으로 집어 넣는다.
  // 그럼 post할 떄 axios.post(URL,data)대신 instance.post(data)로 post요청을 할 수 있다.
  // axios post나 get 호출을 할 때 instance에 정의한것을 가지고 수행을한다.
  return axios.create({
    // baseURL: 'http://localhost:3000/',
    // 위에 주소를 .env파일에서 공통으로 지정
    baseURL: process.env.VUE_APP_API_URL,
  });
}

// interceptor 인증값 포함 함수
function createInstanceWithAuth(url) {
  const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance();
// 게시물 조회, 추가, 삭제는 posts url이 필요하므로 넣어준다.
export const post = createInstanceWithAuth('posts');
