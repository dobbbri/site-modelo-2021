<template>
  <ul
    class="px-2 pt-2 pb-3 space-y-1 md:flex md:items-center md:p-0 xl:space-x-7"
  >
    <li v-for="(item, indice) in menu" :key="indice" class="py-2">
      <router-link
        :to="{ path: item.path, hash: item.anchor }"
        class="text-gray-900 mx-3 py-2 mb-3 border-b-2 border-transparent hover:border-gray-900 uppercase text-sm font-bold"
        aria-current="page"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  menu: {
    type: Array,
    required: true,
  },
})
</script>
