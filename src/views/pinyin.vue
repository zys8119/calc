<template>
  <div class="pingyin">
    <div class="flex-center flex-col">
      <div class="text-12px text-#999 b-b-solid b-#eee b-1x w-full text-center">
        部编版一年级语文一天一过关拼音练习题
      </div>
      <h1 class="m-y-15px">{{ data.title }}</h1>
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
    <div class="flex-center">
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
          </h2>
          <div class="flex flex-col gap-5px flex-wrap text-50px">
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
          <div class="text-18px flex-center-start gap-10px" v-if="item.des">
            {{ item.des }}
          </div>
        </div>
      </div>
    </div>
    <audio :src="audioSrc" ref="audio" autoplay></audio>
  </div>
</template>
<script setup lang="ts">
import bioazhu from "pinyin.js";
const route = useRoute();
const active = ref<any>(Number(route.query.active) || 7);
const data = computed<any>(() => {
  const map: any = {
    7: {
      title: "拼音练习7（声母）",
      data: [
        {
          title: "熟读下列, 带调音节。(尽量直呼，不行就拼读)",
          pinyin: [
            "zu2 ci4 ca1 su2 zi3 za2",
            "se4 si3 ze2 ji1 ci3 sa4",
            "ce4 za1 si4 su4 zi4 cu4",
            "qi3 zu3 zu1 ci1 su1 ze1",
          ],
        },
        {
          title: "熟读下列, 带调音节。",
          pinyin: [
            "zu2 ji4 fu4 ze2 zi3 se4 zi4 mu3",
            "zu3 fu4 la1 sa4 su4 du4 ci2 qi4",
            "tu3 si1 zi4 ji3 zi4 si1 zi3 nü3",
          ],
        },
        {
          title: "读准句子。",
          pinyin: [
            "zu3 fu4 he2 zu3 mu3 ca1 bo1 li",
            "li4 li he2 na4 na du2 zi4 mu3",
          ],
        },
      ],
    },
    8: {
      title: "拼音练习8（声母）",
      data: [
        {
          title: "熟读下列音节,（尽量直呼，不行就拼读）",
          pinyin: [
            "cè   zā   sì   sù   zì   cù",
            "qǐ   zǔ   zū   cī   sū   zē",
            "zhǎ  shú  chè  shǎ  zhù  zhě  chà",
            "chī  zhì  shǐ  zhí  shī  chǐ  shí",
          ],
        },
        {
          title: "熟读下列音节词",
          pinyin: [
            "tǔ sī    zì jǐ     zì sī     zǐ nǚ  ",
            "rè chá   zhí shù   shā chē   zhī shi",
            "rì chū   zhí rì    zhé zhǐ   zhú zi",
            "chū zū chē    shě bù dé    ná pí chǐ",
          ],
        },
      ],
    },
    9: {
      title: "拼音练习9（三拼音）",
      data: [
        {
          title: "熟读下列三拼音节",
          pinyin: [
            "duǒ  guó  nuó  luò  tuō  guǎ",
            "kuò  huā  luó  kuā  nuò  jiǎ ",
            "tuó  duō  luō  kuà  huó  huà",
            "qiā  jià  huǒ  huá  guō  guā",
          ],
        },
        {
          title: "熟读下列音节词",
          pinyin: [
            "zǔ guó   luó bo   luò tuo   xī guā",
            "kǔ guā   jú huā   xǔ duō    tuō lā",
            "guó jiā  bō luó   guò qù    guā pí",
            "fā huǒ   nuò mǐ   luò xià   rú guǒ",
            "shū jià    zhuā zhù   shuō huà",
            "kè zhuō    chuō pò    cā zhuō zi",
          ],
        },
      ],
    },
    10: {
      title: "拼音练习10（复习1）",
      data: [
        {
          title: "熟练背诵单韵母,声母和整体认读音节。",
          pinyin: [
            "单韵母： a o e i u ü",
            "声  母： b p m f d t n l g k h j q x zh ch sh r z c s y w",
            "整体认读音节： zhi chi shi ri zi ci si yi wu yu",
          ],
        },
        {
          title: "熟读下列音节,前两行是整体认读音节，最后一行是三拼音。",
          pinyin: [
            "zǐ   zhì   sí   shí  cì  chí  rì",
            "yí   yù    wǔ   yǔ   yì  yú   wù",
            "jiǎ  guó  zhuā  xiá  shuō  kuā  nuò",
          ],
        },
        {
          title: "熟读下列音节词",
          pinyin: [
            "jú huā   shuā yá    wū yā   hé huā",
            "dà huǒ   shuō huà   wà zi   xià yǔ",
            "sī guā   huā duǒ    yā zi   zhú zi",
            "ná pí chǐ           cā zhuō zi  ",
            "zhuō dà xiā         dǎ huǒ jī",
            "zuò huǒ chē         chī xī guā  ",
          ],
        },
      ],
    },
  };
  return map[active.value] || map[7];
});
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
      if (toneYinDiaoMapKeysReg.test(e)) {
        return e;
      }
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
let speechsynthesisutterance = $ref() as SpeechSynthesisUtterance;
let speechsynthesisutteranceEnded = $ref(true) as boolean;
const isPlayTextPinyin = ref(false);
const playPinyin = async (pinyin: string, bool: boolean = false) => {
  isPlayTextPinyin.value = bool;
  // if (pinyin) {
  //   speechSynthesis.cancel();
  //   speechsynthesisutteranceEnded = false;
  //   speechsynthesisutterance = new SpeechSynthesisUtterance(pinyin)
  //   speechsynthesisutterance.onend = function () {
  //     speechsynthesisutteranceEnded = true;
  //   };
  //   speechSynthesis.speak(speechsynthesisutterance)
  // }
  if (pinyin) {
    audio.pause();
    const { index, name } = getPinyinYindiaoToNumber(pinyin);
    const deleteYindiao = pinyin.replace(
      new RegExp(toneYinDiaoMapKeysReg, "img"),
      name,
    );
    const pinyinYindiao = deleteYindiao + (index || "");
    const url = `https://data.hanyuguoxue.com/voice/${pinyinYindiao}.mp3`;
    const status = await fetch(url).then((res) => res.status);
    audioSrc.value =
      status === 200
        ? url
        : `https://data.hanyuguoxue.com/pinyin_voice/${pinyinYindiao}.mp3`;
    audio.play();
  }
};
const playTextPinyin = async (data: any, isPy: boolean = false) => {
  isPlayTextPinyin.value = false;
  let k = 0;
  while (k < data.length) {
    const { pinyin } = isPy ? { pinyin: data[k] } : data[k] || {};
    if (pinyin) {
      playPinyin(pinyin, true);
      // await new Promise((resolve) => {
      //   (function isAudioEnded() {
      //     if (!isPlayTextPinyin.value) {
      //       throw new Error("取消播放");
      //     }
      //     if (speechsynthesisutteranceEnded) {
      //       resolve(true);
      //     } else {
      //       setTimeout(isAudioEnded);
      //     }
      //   })();
      // });
      await new Promise((resolve) => {
        (function isAudioEnded() {
          if (audio.ended) {
            setTimeout(() => resolve(true));
          } else {
            setTimeout(isAudioEnded);
          }
        })();
      });
    }
    k += 1;
  }
};

const list = computed(() =>
  data.value.data.map((e: any) => {
    return {
      ...e,
      title: getPinyin(e.title),
      pinyin: getPinyinYindaio(
        e.pinyin.map((e: any) => (typeof e === "string" ? e.split(" ") : e)),
      ),
    };
  }),
);
</script>
<style scoped lang="less">
.pingyin {
}
</style>
