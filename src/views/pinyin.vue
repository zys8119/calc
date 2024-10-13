<template>
  <div class="pingyin">
    <div class="flex-center flex-col">
      <div class="text-12px text-#999 b-b-solid b-#eee b-1x w-full text-center">
        部编版一年级语文一天一过关拼音练习题
      </div>
      <h1 class="m-y-15px">拼音练习6（声母）</h1>
      <div class="text-14px text-#333 flex-center">
        <span>班级</span>
        <span class="b-1px b-#000 b-b-solid flex-center p-x-15px bold"
          >101</span
        >
        <span>姓名</span>
        <span class="b-1px b-#000 b-b-solid flex-center p-x-15px bold"
          >张景旗</span
        >
      </div>
    </div>
    <div class="p-15px">
      <div v-for="(item, index) in list" :key="index" class="m-t-15px">
        <h2 class="m-b-15px flex items-end gap-5px">
          <span>{{ numToChinese(index + 1) }}、</span>
          <span
            class="text-14px text-#333 flex-center flex-col"
            v-for="(it, k) in item.title"
            :key="k"
          >
            <span>{{ it.pinyin }}</span>
            <span>{{ it.text }}</span>
          </span>
        </h2>
        <div class="flex flex-col gap-5px flex-wrap">
          <div
            class="flex-center-start gap-30px flex-wrap"
            v-for="(it, k) in item.pinyin"
            :key="k"
          >
            <div
              class="flex-center-start gap-5px flex-wrap"
              v-for="(it1, kk) in it"
              :key="kk"
            >
              <div
                class="flex-center flex-col"
                v-for="(it2, kkk) in it1
                  .split(' ')
                  .map((e) => e.trim())
                  .filter((e) => e)"
                :key="kkk"
                @mouseenter="mouseenter(it2)"
              >
                <div>{{ it2 }}</div>
                <SvgIcon name="pinyin1"></SvgIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import bioazhu from "pinyin.js";
// import pinyin3 from "pinyin";

const getPinyin = (title: string) =>
  ((pys: any[]) =>
    title.split("").map((e: any) => ({
      text: e,
      pinyin: /^[\u2E80-\u9FFF]+$/.test(e) ? pys.pop() : null,
    })))(bioazhu(title as any).reverse() as any);
const getPinyinYindaio = (data: Array<any[]>) =>
  data.map((e) => e.map((s) => s));
const list = ref([
  {
    title: getPinyin("熟读下列, 带调音节。"),
    pinyin: getPinyinYindaio([
      ["qi2", "ji3", "xi1", "qu3", "xu2", "ju4", "ji2"],
      ["qi2", "ji3", "xi1", "qu3", "xu2", "ju4", "ji2"],
      ["zhang1 yun2 shan1 ni3 si4 shui2"],
    ]),
  },
]);
watchEffect(() => {
  console.log(list.value);
});
const mouseenter = (pinyin: any) => {
  console.log(pinyin);
};
function numToChinese(num: number) {
  let str = num.toString();
  let arr: any = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let arr1 = [
    "",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
    "十",
    "百",
    "千",
    "万",
    "十",
    "百",
    "千",
    "亿",
  ];
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += arr[str[i]] + arr1[str.length - i - 1];
  }
  return res;
}
onMounted(async () => {
  const html = await fetch("https://hanyuguoxue.com/zidian/pinyin-a").then(
    (res) => res.text(),
  );
  const doc = new DOMParser().parseFromString(html as string, "text/html");
  doc.querySelectorAll("#pinyinNav a").forEach((e) => {
    console.log(e.innerText);
  });
});
</script>
<style scoped lang="less">
.pingyin {
}
</style>
