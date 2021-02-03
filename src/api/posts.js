// 학습 노트 조작과 관련된 CRUD API 함수 파일
import { post } from './index';

// 학습노트 데이터 조회 API
function fetchPost() {
  return post.get('/');
}

// 학습노트 데이터 생성 post API
function createPost(postData) {
  return post.post('/', postData);
}

// 학습노트 데이터 삭제 API
function deletePost(postId) {
  return post.delete(postId);
}

export { fetchPost, createPost, deletePost };
