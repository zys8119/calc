<template>
  <div class="aa">
      asdasd
    <bb></bb>
    {{aa}}
    <button @click="aa+=1">aa</button>
  </div>
</template>

<script setup lang="ts">
const aa = $ref(0)
console.log($apis)
</script>

<style scoped lang="scss">
.aa {

}
</style>
