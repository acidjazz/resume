<template lang="pug">
.BlockExperience.mb-8
  .flex.flex-row.justify-start
    .title
      a(:href="link", target="_new").pl-0 {{ company }}
      span.px-1 -
      span.text-sm {{ title }}
      .text-sm.text-gray-600.pb-2 {{ location }}
    .flex.flex-row.ml-6.text-sm
      i.mdi.mdi-calendar.mr-2
      p  {{ range }}
  slot
</template>

<script>
export default {
  props: {
    company: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    range: {
      type: String,
      required: true,
    },
  }
}
</script>
