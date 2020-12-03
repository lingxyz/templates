import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const home = () => import('../pages/home.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes
})
