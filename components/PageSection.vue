<template lang="pug">
.flex.flex-col.mt-4.mb-8.print_mb-4
  .flex.flex-row.justify-between.mb-4
    .page-section-bg.print_hidden.w-4
    .font-bold.uppercase.mx-4.print_mx-0.print_border-b-2.print_pb-2.print_flex-grow {{ title }}
    .page-section-bg.flex-grow.print_hidden
  .ml-0
    slot
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    }
  },
}
</script>
