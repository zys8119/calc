<template>
  <div class="calc abs-content">
    <div class="container abs-r" v-if="question.question">
      <h1>可爱的数学题</h1>
      <div class="flex text-50px flex-wrap">
        <div
          class="b-1px b-dashed b-#999 b-rd-4px"
          v-for="(item, i) in question.expressionLengthArr || 0"
          :key="i"
        >
          {{ item.icon }}-{{ item.type }}
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
  const item = (list.value[active.value] || {
    answer: 0,
    expressionLengthArr: [],
    question: null,
  }) as any;
  let icons: any = [];
  let index = 0;
  for (let i = 0; i < item.expressionLengthArr.length; i++) {
    const element = item.expressionLengthArr[i];
    const arr: any = Array.from(element.icon);
    if (element.type === "+") {
      icons = arr.map((e) => ({ icon: e, type: "init" })).concat(icons);
      new Array(index).fill(0).forEach(() => {
        const obj = icons.findLast((e: any) => e.type !== "delete");
        if (obj) {
          obj.type = "delete";
          index -= 1;
        }
      });
    } else if (element.type === "-") {
      arr.forEach(() => {
        const obj = icons.findLast((e: any) => e.type !== "delete");
        if (obj) {
          obj.type = "delete";
        } else {
          index += 1;
        }
      });
    } else {
      icons = icons.concat(arr.map((e) => ({ icon: e, type: "init66" })));
    }
  }
  item.expressionLengthArr = icons;
  return item;
});
// 示例使用：生成 3 个算式，确保所有结果是整数
const operators = ref(["+", "-"]);
const range = ref({ min: 1, max: 10 });
const numOfQuestions = ref(10); // 生成的题目数量
const minLength = ref(2); // 最短长度
const maxLength = ref(2); // 最长长度
const ensureIntegers = ref(true); // 确保所有结果都是整数
const icons = ref(["💣", "🧨", "🪓", "🧲", "🔧", "🔫", "🩸", "🎈", "❤️", "⚙️"]); // 确保所有结果都是整数
const answer = ref<number>();
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
      return speak("恭喜你，完成所有题目！");
    }
    speak("太棒了！答对啦！");
    active.value++;
    answer.value = null;
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

.container {
  text-align: center;
  background-color: #fff9e6;
  border: 2px solid #ffcc00;
  border-radius: 20px;
  padding: 20px;
  width: 350px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  margin: auto;
}
.text-ellipsis {
  white-space: nowrap; /* 不换行 */
  overflow: hidden; /* 超出部分隐藏 */
  text-overflow: ellipsis; /* 使用省略符号 */
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
