<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md text-white bg-gray-700 hover:bg-gray-900"
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <icon name="menu" :class="{ hidden: opened }" class="h-6 w-6" />
    <icon name="close" :class="{ hidden: !opened }" class="h-6 w-6" />
  </button>
</template>

<script>
export default {
  props: {
    opened: false,
  },
}
</script>
