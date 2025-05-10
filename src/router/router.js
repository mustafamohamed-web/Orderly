import { createRouter, createWebHistory } from 'vue-router'
import { HomeScreen, ServiceSelection, MenuItemList } from '@/views'

const routes = [
  {
    path: '/',
    component: HomeScreen,
    meta: { transition: 'page' }
  },
  {
    path: '/serviceSelection',
    component: ServiceSelection,
    meta: { transition: 'page' }
  },
  {
    path: '/menuItemList',
    component: MenuItemList,
    meta: { transition: 'page' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
