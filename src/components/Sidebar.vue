<template>
  <div
    class="w-[250px] md:w-[350px] px-4 h-full bg-gray-800 fixed inset-y-0 right-0 left-auto"
  >
    <div class="h-16 mb-5 flex items-center">
      <MenuButton :icon-name="'close'" @click="store.methods.toggleMenu()" />
    </div>
    <ul class="text-sm text-gray-200 uppercase leading-5">
      <li
        v-for="(item, index) in menu"
        :key="index"
        class="border-t border-gray-600 first:border-none"
      >
        <router-link
          :to="{ path: item.path, hash: item.anchor }"
          class="block py-6 hover:font-bold hover:text-white tracking-tighter"
          aria-current="page"
          @click="store.methods.closeMenu()"
        >
          {{ item.title }}
        </router-link>
      </li>
    </ul>
    <div class="absolute inset-x-4 bottom-4 text-gray-100 text-center">
      Social
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const store = inject("store");

    return { store };
  },
};
</script>
