<template>
  <button
    type="button"
    class="inline-flex items-center justify-center py-1.5 px-2 rounded-md border-2 text-gray-500 border-gray-500 hover:text-white hover:bg-orange-600"
    aria-controls="mobile-menu"
  >
    <Icon :name="iconName" class="h-6 w-6" />
  </button>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
      default: 'menu'
    }
  }
}
</script>
