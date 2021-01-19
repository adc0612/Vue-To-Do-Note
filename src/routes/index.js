import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// router instance를 쓸 수 있게 export한다
export default new VueRouter({
  // URL의 #을 없애기 위해
  mode: 'history',
  routes: [
    // 주소 default로 접속 할 때 바로 login 페이지로 연경
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // component에 function으로 import로 들고오면 해당 페이지에 들어갈 때 해당파일을 자원을 들고 올수 있다.
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      // 위에 지정해놓은 페이지가 아닌 URL로 연결 되었을 때 보여줄 페이지
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
