import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/LoginView.vue'
import RegistrierView from '../views/RegistrierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },   
    {
      path: "/:catchAll(.*)",
      component: NotFoundView,
    },
    {
      path:"/login",
      component: LoginView,
    }, 
    {
        path:"/register",
        component: RegistrierView,
    }
  ]
})


export default router


