<template>
  <nav class="bg-gray-100 shadow">
    <div class="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 md:h-25">
        <div class="flex items-stretch w-full">
          <!-- logo -->
          <div class="flex-shrink-0 flex items-center justify-start">
            <icon name="logo" class="h-8 w-36" />
          </div>

          <!-- menu -->
          <div class="hidden md:flex-1 md:flex md:justify-end md:ml-3">
            <NavbarItems :menu="menu" />
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <NavbarButton :opened="opened" @click="opened = !opened" />
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="opened" id="mobile-menu" class="md:hidden">
      <transition
        enter="duration-300 ease-out"
        enter-from="opacity-0 scale-95"
        enter-to="opacity-100 scale-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100 scale-100"
        leave-to="opacity-0 scale-95"
      >
        <NavbarItems @click="opened = false" :menu="menu" />
      </transition>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const opened = ref(false)

    const menu = ref([
      { title: 'Início', path: '/', anchor: '#init' },
      { title: 'Áreas de Atuação', path: '/', anchor: '#expertise' },
      { title: 'Equipe', path: '/', anchor: '#team' },
      { title: 'Blog e Notícias', path: '/', anchor: '#blog' },
      { title: 'Contato', path: '/', anchor: '#contact' },
    ])

    return { opened, menu }
  },
}
</script>
