import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import NotFound from '/src/components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
      if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        return position
      }
      return false
    }

    return new Promise((resolve) => {
      if (to.matched.some((m) => m.meta.scrollToTop)) {
        position.x = 0
        position.y = 0
      }
      this.app.$root.$once('triggerScroll', () => {
        resolve(position)
      })
    })
  }
}

export default router
