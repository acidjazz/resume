<template lang="pug">
a.tech-block.h-12.lg_h-20.p-2.lg_p-4.grayscale-hover.shadow-hover(
  :href="to",
  target="_new",
  :alt="alt",
  :class="cls")
  img(:src="`/${src}`", :alt="alt").h-full
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    cls: {
      type: String,
      required: false,
      default: '',
    }
  }
}
</script>
