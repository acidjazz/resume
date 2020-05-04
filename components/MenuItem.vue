<template lang="pug">
.bg-blue-600.hover_bg-blue-400.tran-background.rounded-full.text-white.cursor-pointer
  a.w-10.h-10.flex.items-center.justify-center(v-if="is_link", :href="to")
    i.mdi.mdi-18px(:class="`mdi-${icon}`")
  .w-10.h-10.flex.items-center.justify-center(v-else, @click="to")
    i.mdi.mdi-18px(:class="`mdi-${icon}`")
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'link',
    },
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: [Boolean, String, Function],
      required: false,
      default: false,
    }
  },

  computed: {
    is_link () {
      return this.type === 'link'
    }
  }
}
</script>
