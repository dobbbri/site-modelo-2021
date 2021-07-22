<template>
  <div
    class="w-[300px] block px-4 h-full bg-gradient-to-r from-gray-900 to-gray-800 fixed inset-y-0 right-0 left-auto"
  >
    <div class="h-16 mb-5 flex items-center">
      <MenuToggler :icon-name="'close'" @click="store.methods.toggleMenu()" />
    </div>
    <ul class="text-sm text-gray-200 uppercase leading-5">
      <li
        v-for="(item, index) in store.getters.itemsState()"
        :key="index"
        class="border-t border-gray-600 first:border-none"
      >
        <router-link
          :to="item.path"
          class="block py-6 hover:font-bold hover:text-white tracking-tighter"
          aria-current="page"
          @click="store.methods.closeMenu()"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <div class="absolute inset-x-4 bottom-2 text-gray-100">
      <div class="inline-flex justify-center w-full">
        <a class="text-gray-500">
          <Icon name="facebook" class="h-6 w-6" />
        </a>
        <a class="ml-3 text-gray-500">
          <Icon name="twitter" class="h-6 w-6" />
        </a>
        <a class="ml-3 text-gray-500">
          <Icon name="instagram" class="h-6 w-6" />
        </a>
        <a class="ml-3 text-gray-500">
          <Icon name="whatsapp" class="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  setup() {
    const store = inject('store')
    return { store }
  }
}
</script>
