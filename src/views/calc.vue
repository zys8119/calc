<template>
  <div class="calc abs-content">
    <div class="container abs-r" v-if="question.question">
      <div v-if="isComplete">
        <h1>恭喜你，完成所有题目！</h1>
        <div class="text-100px bold">🏆🥇</div>
        <button @click="reset">重新开始</button>
      </div>
      <template v-else>
        <h1>可爱的数学题</h1>
        <div class="flex-center text-40px flex-wrap gap-5px">
          <div
            class="abs-r flex-center of-hidden"
            v-for="(item, i) in question.expressionLengthArr || 0"
            :key="i"
            :class="{
              'diagonal-stripe': item.type === 'delete',
              'op-30': item.type === 'delete',
            }"
          >
            {{ item.icon }}
            <!-- <span class="abs-end-bottom text-12px">{{ item.index }}</span> -->
          </div>
        </div>
        <div class="question">{{ question.question }} = ?</div>

        <div class="input-container">
          <input
            @keyup.enter="checkAnswer"
            v-model="answer"
            type="number"
            placeholder="你的答案"
          />
        </div>
        <button @click="checkAnswer">提交</button>
        <div class="feedback" id="feedback"></div>
        <div class="abs-end top-15px right-15px text-#999">
          {{ active + 1 }}/{{ list.length }}
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts" title="计算小能手">
const active = ref(0);
type QuestionType = {
  question: string;
  answer: number;
  expressionLengthArr: Array<{
    value: number;
    type: string;
  }>;
};
const list = ref<Array<QuestionType>>([]);
const question = computed<QuestionType>(() => {
  const item = JSON.parse(
    JSON.stringify(
      (list.value[active.value] || {
        answer: 0,
        expressionLengthArr: [],
        question: null,
      }) as any,
    ),
  );
  let icons: any = [];
  let indexs: any = [];
  for (let i = 0; i < item.expressionLengthArr.length; i++) {
    const element = item.expressionLengthArr[i];
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    const arr: any = Array.from(segmenter.segment(element.icon)).map(
      (e) => e.segment,
    );
    if (element.type === "+") {
      icons = arr.map((e: any) => ({ icon: e, type: "init" })).concat(icons);
      indexs.forEach((newIcon: any, k: number) => {
        const obj = icons.findLast((e: any) => e.type !== "delete");
        if (obj) {
          obj.type = "delete";
          obj.icon = newIcon;
          indexs.splice(k, 1);
        }
      });
    } else if (element.type === "-") {
      arr.forEach((newIcon: any) => {
        const obj = icons.findLast((e: any) => e.type !== "delete");
        if (obj) {
          obj.type = "delete";
        } else {
          indexs.push(newIcon);
        }
      });
    } else {
      icons = icons.concat(arr.map((e: any) => ({ icon: e, type: "init66" })));
    }
  }
  icons = icons.reverse();
  indexs.forEach(() => {
    icons.push({
      icon: "🚗",
      type: "negative",
    });
  });
  item.expressionLengthArr = icons.map((e: any, k: any, arr: any) => {
    arr[e.type] = arr[e.type] || 0;
    arr[e.type] += 1;
    return {
      ...e,
      index: arr[e.type],
    };
  });
  return item;
});
// 示例使用：生成 3 个算式，确保所有结果是整数
const { query } = useRoute();
const operators = ref(String(query.op).match(/\+|-|\*|\//g) || ["+", "-"]);
const range = ref({
  min: Number(query.minr) || 1,
  max: Number(query.maxr) || 10,
});
const numOfQuestions = ref(Number(query.num) || 10); // 生成的题目数量
const minLength = ref(Number(query.min) || 2); // 最短长度
const maxLength = ref(Number(query.max) || 3); // 最长长度
const ensureIntegers = ref(true); // 确保所有结果都是整数
const iconStr = "💣🧨🪓🧲🔧🔫🩸🎈❤️⚙️🚀🚁🎠🎱🏀⚽️🏈🥎🥄🍷🥃🍸🍺🍭🥑🍓🫐🍈🍑";
const icons = ref(
  Array.from(
    new Intl.Segmenter("en", { granularity: "grapheme" }).segment(iconStr),
  ).map((e) => e.segment),
); // 确保所有结果都是整数
const answer = ref<number>();
const isComplete = ref<boolean>(false);
const speak = (text: string) => {
  speechSynthesis.cancel();
  setTimeout(() => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.7;
    speechSynthesis.speak(msg);
  });
};
function checkAnswer() {
  const feedback = document.getElementById("feedback");

  if (answer.value == question.value.answer) {
    feedback.innerHTML = '<span class="happy-face">😊</span> 太棒了！答对啦！';
    if (active.value == list.value.length - 1) {
      feedback.innerHTML =
        '<span class="happy-face">😊</span> 恭喜你，完成所有题目！';
      isComplete.value = true;
      return speak("恭喜你，完成所有题目！");
    }
    speak("太棒了！答对啦！");
    active.value++;
    answer.value = null as any;
  } else {
    feedback.innerHTML = '<span class="sad-face">😢</span> 再试试哦，加油！';
    speak("再试试哦，加油！");
  }
}
function generateRandomQuestionsWithAnswers(
  numOfQuestions,
  operators,
  range,
  minLength,
  maxLength,
  ensureIntegers = true,
) {
  const questionsWithAnswers = [];

  // 随机生成数字的函数
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // 随机生成运算符的函数
  const randomOperator = () => operators[randomInt(0, operators.length - 1)];
  let expressionLengthArr = [];
  // 循环生成多个题目
  for (let i = 0; i < numOfQuestions; i++) {
    expressionLengthArr = [];
    let expression = "";
    let currentResult = randomInt(range.min, range.max); // 先生成第一个数字作为初始值
    expression += currentResult; // 加入到等式里

    expressionLengthArr.push({
      value: currentResult,
      type: "init",
      icon:
        icons.value[randomInt(0, icons.value.length - 1)]?.repeat?.(
          currentResult,
        ) || "",
    });
    // 决定等式的长度
    const expressionLength = randomInt(minLength, maxLength); // 确定等式的长度

    // 生成等式（包括运算符和接下来的数字）
    for (let j = 1; j < expressionLength; j++) {
      const operator = randomOperator();
      let nextNum = randomInt(range.min, range.max);
      // 如果需要确保整数，并且运算符是除法
      if (ensureIntegers && operator === "/") {
        // 找到一个可以被 currentResult 整除的 nextNum
        if (currentResult !== 0) {
          nextNum = randomInt(1, Math.min(range.max, currentResult)); // 除数不能超过被除数
          while (currentResult % nextNum !== 0) {
            nextNum = randomInt(1, Math.min(range.max, currentResult));
          }
        }
      }

      // 将运算符和数字加入等式
      expression += ` ${operator} ${nextNum}`;
      // 计算正确答案
      if (operator === "+") {
        currentResult += nextNum;
      }
      if (operator === "-") {
        currentResult -= nextNum;
      }
      if (operator === "*") {
        currentResult *= nextNum;
      }
      if (operator === "/") {
        if (nextNum !== 0) {
          currentResult /= nextNum;
        } else {
          currentResult = "undefined"; // 防止除以 0
        }
      }
      expressionLengthArr.push({
        value: nextNum,
        type: operator,
        icon:
          icons.value[randomInt(0, icons.value.length - 1)]?.repeat?.(
            nextNum,
          ) || "",
      });
    }
    // 存储算式及其答案
    questionsWithAnswers.push({
      question: expression,
      answer: currentResult,
      expressionLengthArr,
    });
  }

  return questionsWithAnswers;
}
const reset = () => {
  location.reload();
};
onMounted(() => {
  list.value = generateRandomQuestionsWithAnswers(
    numOfQuestions.value,
    operators.value,
    range.value,
    minLength.value,
    maxLength.value,
    ensureIntegers.value,
  );
}) as any;
</script>
<style scoped lang="less">
.calc {
  display: flex;
  justify-content: center;
  align-items: center;
}

.diagonal-stripe {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @gpp: 3%;
    background: linear-gradient(
      -45deg,
      transparent 50% - @gpp,
      #f00 50%,
      transparent 50% + @gpp
    );
    transform-origin: 0 0;
  }
}

.container {
  text-align: center;
  background-color: #fff9e6;
  border: 2px solid #ffcc00;
  border-radius: 20px;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  margin: auto;
}

.text-ellipsis {
  white-space: nowrap;
  /* 不换行 */
  overflow: hidden;
  /* 超出部分隐藏 */
  text-overflow: ellipsis;
  /* 使用省略符号 */
}

h1 {
  font-size: 28px;
  color: #ff9900;
}

.question {
  font-size: 24px;
  margin: 20px 0;
  color: #333;
}

.input-container {
  margin: 20px 0;
}

input {
  font-size: 22px;
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  border: 2px solid #ffcc00;
  text-align: center;
}

button {
  font-size: 20px;
  background-color: #ffcc00;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ffa500;
}

.feedback {
  font-size: 20px;
  margin-top: 20px;
}

.happy-face {
  font-size: 50px;
  color: #32cd32;
}

.sad-face {
  font-size: 50px;
  color: #ff4500;
}
</style>
