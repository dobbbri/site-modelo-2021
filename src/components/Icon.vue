<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const symbolId = computed(() => `#svg-${props.name}`)
    return { symbolId }
  }
}
</script>
