import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",  
    component: resolve => require(['@/views/login/index.vue'], resolve)
  },
  {
    path: "/",
    name: "index",
    component: resolve => require(['@/views/index.vue'], resolve),
    redirect: '/home',
    meta: { requiresAuth: true },
    children:[
      {
        path:'/home',
        name:'home',
        component: resolve => require(['@/views/home/index.vue'], resolve),
        meta: { requiresAuth: true }
      }
    ]
  },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
