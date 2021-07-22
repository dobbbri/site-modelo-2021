<template>
  <div
    id="init"
    class="font-sans antialiased leading-normal tracking-normal font-normal"
  >
    <div class="relative min-h-screen text-gray-900 bg-white overflow-x-hidden">
      <Sidebar />
      <Navbar2
        :fixed-menu="fixedMenu"
        :class="[store.getters.menuState() ? 'openedMenu' : 'closedMenu']"
      />
      <div :class="[store.getters.menuState() ? 'openedMenu' : 'closedMenu']">
        <router-view />
      </div>
      <Footer
        :class="[store.getters.menuState() ? 'openedMenu' : 'closedMenu']"
      />
    </div>
  </div>
</template>

<script>
import { provide, ref, watch, onMounted, onUnmounted } from 'vue'
import store from '@/store'

export default {
  setup() {
    provide('store', store)

    const scrollY = ref(0)
    const fixMenuInPosition = ref(100)
    const fixedMenu = ref(false)

    onMounted(() => {
      window.addEventListener(
        'scroll',
        () => (scrollY.value = Math.round(window.scrollY))
      )
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', () => (scrollY.value = 0))
    })

    watch(scrollY, (newValue) => {
      fixedMenu.value = newValue > fixMenuInPosition.value ? true : false
    })

    return {
      store,
      fixedMenu
    }
  }
}
</script>
