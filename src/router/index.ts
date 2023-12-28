import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IndexView from '../views/IndexView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/left',
      name: 'home',
      component: HomeView
    },
    {
      path: '/index',
      name: 'index',
      component: IndexView
    }
  ]
})

export default router 
