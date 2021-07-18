import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/pages/index.vue')
const NotFound = () => import('@/pages/not-found.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/:path(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { x: 0, y: 0 }
  }
})

export default router
