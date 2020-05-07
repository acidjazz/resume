<template lang="pug">
.menu-item.flex.items-center
  a.w-10.h-10.flex.items-center.justify-center.pl-0(v-if="is_link", :href="to")
    i.mdi.mdi-18px(:class="`mdi-${icon}`")
  .w-10.h-10.flex.items-center.justify-center(v-else, @click="to")
    i.mdi.mdi-18px(:class="`mdi-${icon}`")
  .mr-4.hidden.lg_block(v-if="label") {{ label }}
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
