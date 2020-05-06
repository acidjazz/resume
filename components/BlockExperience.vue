<template lang="pug">
.BlockExperience
  .flex.flex-row.justify-start(@click="details = !details")
    a(:href="link", target="_new").pl-0 {{ company }}
    .flex.cursor-pointer
      span.px-2 -
      span.text-sm {{ title }}
      span.px-2 -
      span.text-gray-500.text-sm {{ location }}
      span.px-2 -
      i.mdi.mdi-calendar.pr-2
      span.text-sm  {{ range }}
      i.mdi.mdi-chevron-down.pl-2
  slot(v-if="details")
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
  },
  data () {
    return {
      details: false,
    }
  },
}
</script>
