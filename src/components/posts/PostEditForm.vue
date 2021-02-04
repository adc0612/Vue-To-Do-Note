<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" v-model="title" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" v-model="contents" />
          <p v-if="!isContentsValid" class="validation-text warning">
            Contents must be less than 200
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
        <p class="log">
          {{ logmsg }}
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { fetchPost, editPost } from '@/api/posts';
export default {
  data() {
    return {
      title: '',
      contents: '',
      logmsg: '',
    };
  },
  computed: {
    isContentsValid() {
      return this.contents.length <= 200;
    },
  },
  methods: {
    async submitForm() {
      const id = this.$route.params.id;
      try {
        const response = await editPost(id, {
          title: this.title,
          contents: this.contents,
        });
        // 게시글 성공으로 생성 후 MainPage로 전환
        this.$router.push('/main');
        console.log(response);
      } catch (error) {
        console.log(error.response.data.message);
        this.logmsg = error.response.data.message;
      }
    },
  },
  async created() {
    try {
      // id는 router에 parameter로 넘긴 id다.
      const id = this.$route.params.id;
      const { data } = await fetchPost(id);
      console.log(data);
      this.title = data.title;
      this.contents = data.contents;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}
</style>
