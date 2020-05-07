<template lang="pug">
.flex.flex-col.mt-4.mb-8.print_mb-4
  .flex.flex-row.justify-between.mb-4
    .page-section-bg.w-4
    .font-bold.uppercase.mx-2 {{ title }}
    .page-section-bg.flex-grow
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
  }
}
</script>
