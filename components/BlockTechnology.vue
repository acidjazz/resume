<template lang="pug">
a.tech-block.h-20.grayscale-hover.shadow-hover(:href="to", target="_new",:class="cls")
  img(:src="`/${src}`").h-full
</template>

<script>
export default {
  props: {
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
