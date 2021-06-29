<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
    aria-controls="mobile-menu"
    aria-expanded="false"
  >
    <!-- <span :class="{ hidden: opened }"> MENU </span> -->
    <svg
      :class="{ hidden: opened }"
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>

    <!-- <span :class="{ hidden: !opened }"> FECHAR </span> -->
    <svg
      :class="{ hidden: !opened }"
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    opened: false,
  },
}
</script>
