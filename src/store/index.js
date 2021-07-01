import { reactive, readonly } from 'vue'

const state = reactive({
  menu: false
})

const methods = {
  toggleMenu() {
    state.menu = !state.menu
  },
  closeMenu() {
    state.menu = false
  }
}

const getters = {
  menuState() {
    return state.menu
  }
}

export default {
  state: readonly(state),
  methods,
  getters
}
