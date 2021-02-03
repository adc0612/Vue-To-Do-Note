<template>
  <li>
    <div class="post-title">
      {{ postItem.title }}
    </div>
    <div class="post-contents">
      {{ postItem.contents }}
    </div>
    <div class="post-time">
      {{ postItem.createdAt }}
      <i class="icon ion-md-create"></i>
      <i class="icon ion-md-trash" @click="deleteItem"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  // MainPage.vue에서 props값을 내린 것을 받아준다.
  props: {
    postItem: {
      // 받는 형식은 Object이고
      type: Object,
      // 이 값은 필수값이라 지정
      required: true,
    },
  },
  methods: {
    async deleteItem() {
      try {
        if (confirm('You want to delete it?')) {
          await deletePost(this.postItem._id);
          // MainPage.vue에 refresh이벤트 전달
          this.$emit('refresh');
        }
        // console.log('deleted');
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
