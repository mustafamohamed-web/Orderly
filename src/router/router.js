import { createRouter, createWebHistory } from 'vue-router'
import { HomeScreen, ServiceSelection} from '@/views'


const routes = [
  {
    path: '/',
    component: HomeScreen
  },
  {
    path: '/serviceSelection',
    name: 'serviceSelection',
    component: ServiceSelection
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
