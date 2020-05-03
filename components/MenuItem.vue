<template lang="pug">
.cursor-pointer
  .absolute.inset-0.bg-orange-600.hover-expand
  .absolute.inset-0.bg-blue-400.flex.items-center.justify-center
    span {{ name }}
</template>

<style lang="stylus">
  .hover-expand
    width 0
    transition width 0.2s ease-in-out
  .hover-expand:hover
    width 100%
</style>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      required: true,
      description: 'Menu item name',
    }
  }
}
</script>
