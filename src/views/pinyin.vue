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
            class="text-14px text-#333 flex-center flex-col cursor-pointer underline-blue hover:underline"
            v-for="(it, k) in item.title"
            :key="k"
            @click="playPinyin(it.pinyin)"
          >
            <span>{{ it.pinyin }}</span>
            <span>{{ it.text }}</span>
          </span>
          <SvgIcon
            name="pinyin1"
            class="cursor-pointer"
            @click="playTextPinyin(item.title)"
          />
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
                class="flex-center flex-col cursor-pointer underline-blue hover:underline"
                v-for="(it2, kkk) in it1
                  .split(' ')
                  .map((e) => e.trim())
                  .filter((e) => e)"
                :key="kkk"
                @click="playPinyin(it2)"
              >
                <div>{{ it2 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio :src="audioSrc" ref="audio" autoplay></audio>
  </div>
</template>
<script setup lang="ts">
import bioazhu from "pinyin.js";
const toneMap: any = {
  a: ["ā", "á", "ǎ", "à"],
  e: ["ē", "é", "ě", "è"],
  i: ["ī", "í", "ǐ", "ì"],
  o: ["ō", "ó", "ǒ", "ò"],
  u: ["ū", "ú", "ǔ", "ù"],
  ü: ["ǖ", "ǘ", "ǚ", "ǜ"],
};
const toneMapKeys = Object.keys(toneMap);
const toneMapKeysReg = new RegExp(toneMapKeys.join("|"));
const toneYinDiaoMap = Object.entries(toneMap).reduce<any>(
  (acc, [key, value]: any) => {
    value.forEach((e: any, k: number) => {
      acc[e] = {
        name: key,
        index: k + 1,
      };
    });
    return acc;
  },
  {},
);
const toneYinDiaoMapKeys = Object.keys(toneYinDiaoMap);
const toneYinDiaoMapKeysReg = new RegExp(toneYinDiaoMapKeys.join("|"));
const getPinyinYindiaoToNumber: any = (str: string) => {
  let k = str.length;
  let result = {};
  while (k--) {
    if (toneYinDiaoMap[str[k]]) {
      result = toneYinDiaoMap[str[k]];
      break;
    }
  }
  return result;
};
function replaceAt(str: string, index: number, replacement: any) {
  // 如果索引超出字符串范围，返回原字符串
  if (index < 0 || index >= str.length) {
    return str;
  }

  // 使用 substring 拼接字符串
  return str.substring(0, index) + replacement + str.substring(index + 1);
}
const getYidiao = (s: any) => {
  return s
    .split(/\s+/)
    .filter((e: any) => e)
    .map((e: any) => {
      const n = Number(e.match(/[0-9]$/i) || 1);
      let newe = e.replace(n, "");
      let k = newe.length;
      while (k--) {
        if (toneMapKeysReg.test(newe[k])) {
          newe = replaceAt(newe, k, toneMap[newe[k] as unknown as any][n - 1]);
          break;
        }
      }
      return newe;
    })
    .join(" ");
};
const getPinyin = (title: string) =>
  ((pys: any[]) =>
    title.split("").map((e: any) => ({
      text: e,
      pinyin: /^[\u2E80-\u9FFF]+$/.test(e) ? pys.pop() : null,
    })))(bioazhu(title as any).reverse() as any);
const getPinyinYindaio = (data: Array<any[]>) =>
  data.map((e) => e.map((s) => getYidiao(s)));
const list = ref([
  {
    title: getPinyin("熟读下列, 带调音节。"),
    pinyin: getPinyinYindaio([
      ["qi2", "ji3", "xi1", "qu3", "xu2", "ju4", "ji2"],
      ["qi2", "ji3", "xi1", "qu3", "xu2", "ju4", "ji2"],
      ["zhang1    yun2 shan1 ni3 si4 shui2 , sds ai4"],
    ]),
  },
]);

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
const audioSrc = ref("");
const audio = $ref() as HTMLAudioElement;
const playPinyin = (pinyin: string) => {
  if (pinyin) {
    audio.pause();
    const { index, name } = getPinyinYindiaoToNumber(pinyin);
    const deleteYindiao = pinyin.replace(
      new RegExp(toneYinDiaoMapKeysReg, "img"),
      name,
    );
    const pinyinYindiao = deleteYindiao + index;
    audioSrc.value = `https://data.hanyuguoxue.com/voice/${pinyinYindiao}.mp3`;
    audio.play();
  }
};
const playTextPinyin = async (data: any) => {
  let k = 0;
  while (k < data.length) {
    const { pinyin } = data[k] || {};
    if (pinyin) {
      playPinyin(pinyin);
      await new Promise((resolve) => {
        (function isAudioEnded() {
          if (audio.ended) {
            resolve(true);
          } else {
            setTimeout(isAudioEnded);
          }
        })();
      });
    }
    k += 1;
  }
};
</script>
<style scoped lang="less">
.pingyin {
}
</style>
