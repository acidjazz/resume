<template lang="pug">
  .container.lg
    .flex.justify-around.p-6
      .font-bold.py-2.px-6.text-lg kevin olson
      .flex
        .mx-2.py-2.px-6.relative.w-24
          MenuItem(name="cover")
        .mx-2.py-2.px-6
          span uses
        .mx-2.py-2.px-6
          span work
</template>

<script>
import MenuItem from '@/components/MenuItem'
export default {
  components: { MenuItem },
}
</script>
