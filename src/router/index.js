import { createRouter, createWebHashHistory } from 'vue-router'
import Overall from '../pages/Overall.vue'
import Ranks from '../pages/Ranks.vue'

const routes = [
  {
    path: '/',
    name: 'overall',
    component: Overall
  },
  {
    path: '/ranks',
    name: 'ranks',
    component: Ranks
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
