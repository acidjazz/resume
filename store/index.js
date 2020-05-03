export const state = () => ({
  mode: 'dark',
})

export const mutations = {
  mode(state, mode) {
    state.mode = mode
  }
}
