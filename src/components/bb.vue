<template>
  <div class="bb">
      bbb
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
const canvas = $ref()
onMounted(async ()=>{
  console.log(canvas)
})
</script>

<style scoped lang="scss">
.bb {

}
</style>
