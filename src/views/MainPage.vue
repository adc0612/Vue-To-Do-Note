<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <li v-for="postItem in postItems" :key="postItem._id">
          <div class="post-title">
            {{ postItem.title }}
          </div>
          <div class="post-contents">
            {{ postItem.contents }}
          </div>
          <div class="post-time">
            {{ postItem.createdAt }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPost } from '@/api/index';
export default {
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchData() {
      const { data } = await fetchPost();
      console.log(data.posts);
      this.postItems = data.posts;
    },
  },
  // 페이지가 생성되자마자 호출할 함수
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
