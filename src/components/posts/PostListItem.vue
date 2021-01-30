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
    </div>
  </li>
</template>

<script>
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
};
</script>

<style></style>
