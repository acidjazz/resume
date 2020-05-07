<template lang="pug">
.mb-2.print_mb-0
  .flex.flex-col.lg_flex-row.print_flex-row.justify-start.cursor-pointer(@click="details = !details")
    .flex.items-center
      span {{ company }}
      .px-2 -
      .text-sm {{ title }}
    .flex.items-center
      .px-2.hidden.lg_block -
      .text-gray-500.text-sm {{ location }}
      i.mdi.mdi-calendar.px-2
      .text-gray-500.text-sm  {{ range }}
      a(:href="link", target="_blank")
        i.mdi.pl-2.mdi-link
      i.mdi.pl-2(:class="chevron")
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
  computed: {
    chevron () {
      return this.details ? 'mdi-chevron-up' : 'mdi-chevron-down'
    },
  },
}
</script>
