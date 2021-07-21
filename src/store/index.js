import { reactive, readonly } from 'vue'

const state = reactive({
  open: false,
  items: [
    { title: 'Início', path: '/#init' },
    { title: 'Áreas de Atuação', path: '/#expertise' },
    { title: 'Equipe', path: '/#team' },
    { title: 'Blog e Notícias', path: '/#blog' },
    { title: 'Contato', path: '/#contact' }
  ]
})

const methods = {
  toggleMenu() {
    state.open = !state.open
  },
  closeMenu() {
    state.open = false
  }
}

const getters = {
  menuState() {
    return state.open
  },
  itemsState() {
    return state.items
  }
}

export default {
  state: readonly(state),
  methods,
  getters
}
