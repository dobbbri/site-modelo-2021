<template>
  <nav class="bg-gray-100 z-10 shadow md:shadow-none">
    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16 md:h-25">
        <div class="flex items-stretch w-full">
          <!-- logo -->
          <div class="flex-shrink-0 flex items-center justify-start">
            <Icon name="logo" class="h-8 w-36" />
          </div>

          <!-- menu -->
          <div class="hidden md:flex-1 md:flex md:justify-end md:ml-3">
            <ul
              class="px-2 pt-2 pb-3 space-y-1 md:flex md:items-center md:p-0 xl:space-x-7"
            >
              <li v-for="(item, index) in menu" :key="index" class="py-2">
                <router-link
                  :to="{ path: item.path, hash: item.anchor }"
                  class="font-bold text-gray-500 mb-3 md:mx-3 md:mb-0 py-4 hover:text-gray-900 tracking-tighter uppercase text-sm"
                  aria-current="page"
                >
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <MenuButton :icon-name="'menu'" @click="store.methods.toggleMenu()" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject } from 'vue'

export default {
  props: {
    menu: {
      type: Array,
      required: true
    }
  },

  setup() {
    const store = inject('store')

    return { store }
  }
}
</script>
