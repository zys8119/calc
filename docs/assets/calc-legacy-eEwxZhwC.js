System.register(["./index-legacy-BBDZ8Jv1.js"], function (e, t) {
  "use strict";
  var n, a, o, r, s, i, c, l, p, d, u, b, x, f, v, h, g, m, y, k;
  return {
    setters: [
      (e) => {
        (n = e.d),
          (a = e.r),
          (o = e.f),
          (r = e.g),
          (s = e.h),
          (i = e.i),
          (c = e.e),
          (l = e.F),
          (p = e.j),
          (d = e.t),
          (u = e.k),
          (b = e.v),
          (x = e.l),
          (f = e.m),
          (v = e.n),
          (h = e.p),
          (g = e.o),
          (m = e.q),
          (y = e.b),
          (k = e._);
      },
    ],
    execute: function () {
      var t = document.createElement("style");
      (t.textContent =
        '.calc[data-v-73bb653c]{display:flex;justify-content:center;align-items:center}.diagonal-stripe[data-v-73bb653c]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(-45deg,transparent 47%,#f00 50%,transparent 53%);transform-origin:0 0}.container[data-v-73bb653c]{text-align:center;background-color:#fff9e6;border:2px solid #ffcc00;border-radius:20px;padding:20px;width:calc(100% - 40px);box-shadow:0 4px 15px rgba(0,0,0,.1);margin:auto}.text-ellipsis[data-v-73bb653c]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}h1[data-v-73bb653c]{font-size:28px;color:#f90}.question[data-v-73bb653c]{font-size:24px;margin:20px 0;color:#333}.input-container[data-v-73bb653c]{margin:20px 0}input[data-v-73bb653c]{font-size:22px;padding:10px;width:100px;border-radius:10px;border:2px solid #ffcc00;text-align:center}button[data-v-73bb653c]{font-size:20px;background-color:#fc0;border:none;padding:10px 20px;border-radius:10px;cursor:pointer;transition:background-color .3s}button[data-v-73bb653c]:hover{background-color:orange}.feedback[data-v-73bb653c]{font-size:20px;margin-top:20px}.happy-face[data-v-73bb653c]{font-size:50px;color:#32cd32}.sad-face[data-v-73bb653c]{font-size:50px;color:#ff4500}.questionIconBox:has(.questionIcon:hover) .questionIndex[data-v-73bb653c]{display:block}\n'),
        document.head.appendChild(t);
      const w = { class: "calc abs-content" },
        q = { key: 0, class: "container abs-r" },
        L = { key: 0 },
        I = {
          class: "flex-center text-40px flex-wrap gap-5px questionIconBox",
        },
        S = { class: "abs-end-bottom text-12px hidden questionIndex" },
        A = { class: "question" },
        z = { class: "input-container" },
        M = { class: "abs-end top-15px right-15px text-#999" };
      e(
        "default",
        k(
          n({
            __name: "calc",
            setup(e) {
              const t = a(0),
                n = a([]),
                k = o(() => {
                  const e = JSON.parse(
                    JSON.stringify(
                      n.value[t.value] || {
                        answer: 0,
                        expressionLengthArr: [],
                        question: null,
                      },
                    ),
                  );
                  let a = [],
                    o = [];
                  for (let t = 0; t < e.expressionLengthArr.length; t++) {
                    const n = e.expressionLengthArr[t],
                      r = new Intl.Segmenter("en", { granularity: "grapheme" }),
                      s = Array.from(r.segment(n.icon)).map((e) => e.segment);
                    "+" === n.type
                      ? ((a = s
                          .map((e) => ({ icon: e, type: "init" }))
                          .concat(a)),
                        o.forEach((e, t) => {
                          const n = a.findLast((e) => "delete" !== e.type);
                          n &&
                            ((n.type = "delete"), (n.icon = e), o.splice(t, 1));
                        }))
                      : "-" === n.type
                        ? s.forEach((e) => {
                            const t = a.findLast((e) => "delete" !== e.type);
                            t ? (t.type = "delete") : o.push(e);
                          })
                        : (a = a.concat(
                            s.map((e) => ({ icon: e, type: "init" })),
                          ));
                  }
                  return (
                    (a = a.reverse()),
                    o.forEach(() => {
                      a.push({ icon: "🚗", type: "negative" });
                    }),
                    (e.expressionLengthArr = a.map(
                      (e, t, n) => (
                        (n[e.type] = n[e.type] || 0),
                        (n[e.type] += 1),
                        {
                          ...e,
                          index: ("negative" == e.type ? "-" : "") + n[e.type],
                        }
                      ),
                    )),
                    e
                  );
                }),
                { query: N } = h(),
                E = a(String(N.op).match(/\+|-|\*|\//g) || ["+", "-"]),
                _ = a({ min: Number(N.minr) || 1, max: Number(N.maxr) || 10 }),
                C = a(Number(N.num) || 10),
                T = a(Number(N.min) || 2),
                j = a(Number(N.max) || 3),
                B = a(!0),
                H = a(
                  Array.from(
                    new Intl.Segmenter("en", {
                      granularity: "grapheme",
                    }).segment(
                      "💣🧨🪓🧲🔧🔫🩸🎈❤️⚙️🚀🚁🎠🎱🏀⚽️🏈🥎🥄🍷🥃🍸🍺🍭🥑🍓🫐🍈🍑",
                    ),
                  ).map((e) => e.segment),
                ),
                J = a(),
                O = a(!1),
                U = (e) => {
                  speechSynthesis.cancel(),
                    setTimeout(() => {
                      const t = new SpeechSynthesisUtterance(e);
                      (t.rate = 0.7), speechSynthesis.speak(t);
                    });
                };
              function $() {
                const e = document.getElementById("feedback");
                if (J.value == k.value.answer) {
                  if (
                    ((e.innerHTML =
                      '<span class="happy-face">😊</span> 太棒了！答对啦！'),
                    t.value == n.value.length - 1)
                  )
                    return (
                      (e.innerHTML =
                        '<span class="happy-face">😊</span> 恭喜你，完成所有题目！'),
                      (O.value = !0),
                      U("恭喜你，完成所有题目！")
                    );
                  U("太棒了！答对啦！"), t.value++, (J.value = null);
                } else
                  (e.innerHTML =
                    '<span class="sad-face">😢</span> 再试试哦，加油！'),
                    U("再试试哦，加油！");
              }
              const F = () => {
                location.reload();
              };
              return (
                r(() => {
                  n.value = (function (e, t, n, a, o, r = !0) {
                    const s = [],
                      i = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e;
                    let c = [];
                    for (let l = 0; l < e; l++) {
                      c = [];
                      let e = "",
                        l = i(n.min, n.max);
                      (e += l),
                        c.push({
                          value: l,
                          type: "init",
                          icon:
                            H.value[i(0, H.value.length - 1)]?.repeat?.(l) ||
                            "",
                        });
                      const p = i(a, o);
                      for (let a = 1; a < p; a++) {
                        const a = t[i(0, t.length - 1)];
                        let o = i(n.min, n.max);
                        if (r && "/" === a && 0 !== l)
                          for (o = i(1, Math.min(n.max, l)); l % o != 0; )
                            o = i(1, Math.min(n.max, l));
                        (e += ` ${a} ${o}`),
                          "+" === a && (l += o),
                          "-" === a && (l -= o),
                          "*" === a && (l *= o),
                          "/" === a && (0 !== o ? (l /= o) : (l = "undefined")),
                          c.push({
                            value: o,
                            type: a,
                            icon:
                              H.value[i(0, H.value.length - 1)]?.repeat?.(o) ||
                              "",
                          });
                      }
                      s.push({
                        question: e,
                        answer: l,
                        expressionLengthArr: c,
                      });
                    }
                    return s;
                  })(C.value, E.value, _.value, T.value, j.value, B.value);
                }),
                (e, a) => (
                  g(),
                  s("div", w, [
                    i(k).question
                      ? (g(),
                        s("div", q, [
                          i(O)
                            ? (g(),
                              s("div", L, [
                                a[1] ||
                                  (a[1] = c(
                                    "h1",
                                    null,
                                    "恭喜你，完成所有题目！",
                                    -1,
                                  )),
                                a[2] ||
                                  (a[2] = c(
                                    "div",
                                    { class: "text-100px bold" },
                                    "🏆🥇",
                                    -1,
                                  )),
                                c("button", { onClick: F }, "重新开始"),
                              ]))
                            : (g(),
                              s(
                                l,
                                { key: 1 },
                                [
                                  a[3] ||
                                    (a[3] = c("h1", null, "可爱的数学题", -1)),
                                  c("div", I, [
                                    (g(!0),
                                    s(
                                      l,
                                      null,
                                      p(
                                        i(k).expressionLengthArr || 0,
                                        (e, t) => (
                                          g(),
                                          s(
                                            "div",
                                            {
                                              class: m([
                                                "abs-r flex-center of-hidden questionIcon cursor-pointer",
                                                {
                                                  "diagonal-stripe":
                                                    "delete" === e.type,
                                                  "op-30": "delete" === e.type,
                                                },
                                              ]),
                                              key: t,
                                            },
                                            [
                                              y(d(e.icon) + " ", 1),
                                              c("span", S, d(e.index), 1),
                                            ],
                                            2,
                                          )
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  c("div", A, d(i(k).question) + " = ?", 1),
                                  c("div", z, [
                                    u(
                                      c(
                                        "input",
                                        {
                                          onKeyup: x($, ["enter"]),
                                          "onUpdate:modelValue":
                                            a[0] ||
                                            (a[0] = (e) =>
                                              f(J) ? (J.value = e) : null),
                                          type: "number",
                                          placeholder: "你的答案",
                                        },
                                        null,
                                        544,
                                      ),
                                      [[b, i(J)]],
                                    ),
                                  ]),
                                  c("button", { onClick: $ }, "提交"),
                                  a[4] ||
                                    (a[4] = c(
                                      "div",
                                      { class: "feedback", id: "feedback" },
                                      null,
                                      -1,
                                    )),
                                  c(
                                    "div",
                                    M,
                                    d(i(t) + 1) + "/" + d(i(n).length),
                                    1,
                                  ),
                                ],
                                64,
                              )),
                        ]))
                      : v("", !0),
                  ])
                )
              );
            },
          }),
          [["__scopeId", "data-v-73bb653c"]],
        ),
      );
    },
  };
});
