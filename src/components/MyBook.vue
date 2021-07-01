<template>
  <div>{{ readersNumber }} {{ book.title }}</div>
  <input type="text" v-model="search" />
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onUpdated,
  onUnmounted
} from 'vue'

export default {
  props: {
    name: String
  },

  setup(name) {
    console.log(name)
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    const search = ref('')
    const names = ref(
      'Mario',
      'Luigi',
      'Yoshi',
      'Toad',
      'Peach',
      'Koopa',
      'Browser'
    )
    const opened = ref(false)

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    watch(search, () => {
      console.log('search is updated')
    })

    const toggle = () => {
      opened.value = !opened.value
    }

    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })

    // expose to template
    return {
      readersNumber,
      book,
      matchingNames,
      toggle
    }
  }
}
</script>
