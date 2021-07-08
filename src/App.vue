<template>
  <div class="font-sans antialiased leading-normal tracking-normal font-normal">
    <div class="relative min-h-screen text-gray-900 bg-white overflow-x-hidden">
      <Sidebar :menu="menu" />
      <div
        class="relative"
        :class="[store.getters.menuState() ? 'openMenu' : 'closeMenu']"
      >
        <Navbar :menu="menu" />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { provide, ref } from 'vue'
import store from '@/store'

export default {
  setup() {
    provide('store', store)

    const menu = ref([
      { title: 'Início', path: '/', anchor: '#init' },
      { title: 'Áreas de Atuação', path: '/', anchor: '#expertise' },
      { title: 'Equipe', path: '/', anchor: '#team' },
      { title: 'Blog e Notícias', path: '/', anchor: '#blog' },
      { title: 'Contato', path: '/', anchor: '#contact' }
    ])

    return {
      store,
      menu
    }
  }
}
</script>

<style scoped>
.openMenu {
  transform: translate3d(-250px, 0, 0);
  transition: transform 0.4s ease;
}
.closeMenu {
  transform: translate3d(0, 0, 0);
  transition: transform 0.4s ease;
}
</style>
