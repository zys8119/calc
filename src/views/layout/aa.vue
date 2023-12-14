<template>
  <div class="aa">
    asdasd
    <bb></bb>
    {{ aa }}
    <button @click="aa += 1">aa</button>
  </div>
</template>

<script setup lang="ts">
const aa = $ref(0);
console.log($apis);
const {width} = useWindowSize();
import vine from "@vinejs/vine";

watchEffect(() => {
  console.log(width.value);
});
onMounted(async () => {
  console.log(
      await vine
          .validate({
            schema: vine.object({
              a: vine.string().maxLength(2),
            }),
            data: {
              a: 11,
            },
          })
          .catch((err) => {
            console.log(err.messages);
          }),
  );
});
</script>

<style scoped lang="scss">
.aa {
}
</style>
