<template lang="pug">
a.menu-item.flex.items-center(v-if="is_link", :href="to", target="_blank")
  .w-10.h-10.flex.items-center.justify-center.pl-0
    i.mdi.mdi-18px(:class="`mdi-${icon}`")
  .mr-4.hidden.lg_block.print_block(v-if="label") {{ label }}
.menu-item.flex.items-center(v-else, @click="to", title="Dark Mode")
  .w-10.h-10.flex.items-center.justify-center.pl-0
    i.mdi.mdi-18px(:class="`mdi-${icon}`")
</template>

<script>
export default {
  props: {
    label: {
      type: [Boolean, String],
      required: false,
      default: false,
    },
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
