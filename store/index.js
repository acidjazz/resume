export const state = () => ({
  mode: 'dark',
})

export const mutations = {
  mode(state, mode) {
    state.mode = mode
    if (process.browser) {
      const link = document.createElement('link')
      const oldLink = document.getElementById('dynamic-favicon')
      link.id = 'dynamic-favicon'
      link.rel = 'shortcut icon'
      link.href = `/${mode}/favicon.ico`
      if (oldLink) {
        document.head.removeChild(oldLink)
      }
      document.head.appendChild(link)
    }
  }
}
