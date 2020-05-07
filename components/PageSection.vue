<template lang="pug">
.flex.flex-col.mt-4.mb-8.print_mb-4
  .font-bold.mb-4.uppercase.py-2.border-b-4.border-gray-800 {{ title }}
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
