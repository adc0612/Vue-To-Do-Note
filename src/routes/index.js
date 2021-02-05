import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';

// vue router 사용
Vue.use(VueRouter);

// router instance를 쓸 수 있게 export한다
const router = new VueRouter({
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
      // component에 function으로 import로 들고오면 해당 페이지에 들어갈 때 해당파일을 자원을 들고올 수 있다.
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      // 위에 지정해놓은 페이지가 아닌 URL로 연결 되었을 때 보여줄 페이지
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// to: 이동하려는 페이지 (link클릭한 주소)
// from: 현재 페이지
// next: 페이지 이동할 때 호출하는 API
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log(`인증이 필요합니다`);
    next('/login');
    // return을 써주는 이유는 if문타고 왔을때 if문 밖에 있는 next가 실행이 안 되게 하기위해서
    return;
  }
  next();
});

export default router;
