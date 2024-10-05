import {
  d as U,
  r as l,
  f as W,
  g as $,
  h as y,
  i as d,
  e as i,
  F as j,
  j as z,
  t as L,
  k as G,
  v as P,
  l as X,
  m as Y,
  n as Z,
  p as ee,
  o as g,
  q as te,
  b as ne,
  _ as se,
} from "./index-CZqhz6yy.js";
const oe = { class: "calc abs-content" },
  ae = { key: 0, class: "container abs-r" },
  ie = { key: 0 },
  re = { class: "flex-center text-40px flex-wrap gap-5px questionIconBox" },
  le = { class: "abs-end-bottom text-12px hidden questionIndex" },
  ce = { class: "question" },
  ue = { class: "input-container" },
  pe = { class: "abs-end top-15px right-15px text-#999" },
  de = "💣🧨🪓🧲🔧🔫🩸🎈❤️⚙️🚀🚁🎠🎱🏀⚽️🏈🥎🥄🍷🥃🍸🍺🍭🥑🍓🫐🍈🍑",
  me = U({
    __name: "calc",
    setup(fe) {
      const w = l(0),
        q = l([]),
        A = W(() => {
          const s = JSON.parse(
            JSON.stringify(
              q.value[w.value] || {
                answer: 0,
                expressionLengthArr: [],
                question: null,
              },
            ),
          );
          let e = [],
            t = [];
          for (let o = 0; o < s.expressionLengthArr.length; o++) {
            const f = s.expressionLengthArr[o],
              u = new Intl.Segmenter("en", { granularity: "grapheme" }),
              h = Array.from(u.segment(f.icon)).map((n) => n.segment);
            f.type === "+"
              ? ((e = h.map((n) => ({ icon: n, type: "init" })).concat(e)),
                t.forEach((n, v) => {
                  const c = e.findLast((x) => x.type !== "delete");
                  c && ((c.type = "delete"), (c.icon = n), t.splice(v, 1));
                }))
              : f.type === "-"
                ? h.forEach((n) => {
                    const v = e.findLast((c) => c.type !== "delete");
                    v ? (v.type = "delete") : t.push(n);
                  })
                : (e = e.concat(h.map((n) => ({ icon: n, type: "init" }))));
          }
          return (
            (e = e.reverse()),
            t.forEach(() => {
              e.push({ icon: "🚗", type: "negative" });
            }),
            (s.expressionLengthArr = e.map(
              (o, f, u) => (
                (u[o.type] = u[o.type] || 0),
                (u[o.type] += 1),
                { ...o, index: (o.type == "negative" ? "-" : "") + u[o.type] }
              ),
            )),
            s
          );
        }),
        { query: m } = ee(),
        O = l(String(m.op).match(/\+|-|\*|\//g) || ["+", "-"]),
        R = l({ min: Number(m.minr) || 1, max: Number(m.maxr) || 10 }),
        V = l(Number(m.num) || 10),
        H = l(Number(m.min) || 2),
        D = l(Number(m.max) || 3),
        F = l(!0),
        N = l(
          Array.from(
            new Intl.Segmenter("en", { granularity: "grapheme" }).segment(de),
          ).map((s) => s.segment),
        ),
        b = l(),
        M = l(!1),
        I = (s) => {
          speechSynthesis.cancel(),
            setTimeout(() => {
              const e = new SpeechSynthesisUtterance(s);
              (e.rate = 0.7), speechSynthesis.speak(e);
            });
        };
      function C() {
        const s = document.getElementById("feedback");
        if (b.value == A.value.answer) {
          if (
            ((s.innerHTML =
              '<span class="happy-face">😊</span> 太棒了！答对啦！'),
            w.value == q.value.length - 1)
          )
            return (
              (s.innerHTML =
                '<span class="happy-face">😊</span> 恭喜你，完成所有题目！'),
              (M.value = !0),
              I("恭喜你，完成所有题目！")
            );
          I("太棒了！答对啦！"), w.value++, (b.value = null);
        } else
          (s.innerHTML = '<span class="sad-face">😢</span> 再试试哦，加油！'),
            I("再试试哦，加油！");
      }
      function J(s, e, t, o, f, u = !0) {
        var x, T, S, B;
        const h = [],
          n = (_, k) => Math.floor(Math.random() * (k - _ + 1)) + _,
          v = () => e[n(0, e.length - 1)];
        let c = [];
        for (let _ = 0; _ < s; _++) {
          c = [];
          let k = "",
            a = n(t.min, t.max);
          (k += a),
            c.push({
              value: a,
              type: "init",
              icon:
                ((T =
                  (x = N.value[n(0, N.value.length - 1)]) == null
                    ? void 0
                    : x.repeat) == null
                  ? void 0
                  : T.call(x, a)) || "",
            });
          const Q = n(o, f);
          for (let E = 1; E < Q; E++) {
            const p = v();
            let r = n(t.min, t.max);
            if (u && p === "/" && a !== 0)
              for (r = n(1, Math.min(t.max, a)); a % r !== 0; )
                r = n(1, Math.min(t.max, a));
            (k += " ".concat(p, " ").concat(r)),
              p === "+" && (a += r),
              p === "-" && (a -= r),
              p === "*" && (a *= r),
              p === "/" && (r !== 0 ? (a /= r) : (a = "undefined")),
              c.push({
                value: r,
                type: p,
                icon:
                  ((B =
                    (S = N.value[n(0, N.value.length - 1)]) == null
                      ? void 0
                      : S.repeat) == null
                    ? void 0
                    : B.call(S, r)) || "",
              });
          }
          h.push({ question: k, answer: a, expressionLengthArr: c });
        }
        return h;
      }
      const K = () => {
        location.reload();
      };
      return (
        $(() => {
          q.value = J(V.value, O.value, R.value, H.value, D.value, F.value);
        }),
        (s, e) => (
          g(),
          y("div", oe, [
            d(A).question
              ? (g(),
                y("div", ae, [
                  d(M)
                    ? (g(),
                      y("div", ie, [
                        e[1] ||
                          (e[1] = i("h1", null, "恭喜你，完成所有题目！", -1)),
                        e[2] ||
                          (e[2] = i(
                            "div",
                            { class: "text-100px bold" },
                            "🏆🥇",
                            -1,
                          )),
                        i("button", { onClick: K }, "重新开始"),
                      ]))
                    : (g(),
                      y(
                        j,
                        { key: 1 },
                        [
                          e[3] || (e[3] = i("h1", null, "可爱的数学题", -1)),
                          i("div", re, [
                            (g(!0),
                            y(
                              j,
                              null,
                              z(
                                d(A).expressionLengthArr || 0,
                                (t, o) => (
                                  g(),
                                  y(
                                    "div",
                                    {
                                      class: te([
                                        "abs-r flex-center of-hidden questionIcon cursor-pointer",
                                        {
                                          "diagonal-stripe":
                                            t.type === "delete",
                                          "op-30": t.type === "delete",
                                        },
                                      ]),
                                      key: o,
                                    },
                                    [
                                      ne(L(t.icon) + " ", 1),
                                      i("span", le, L(t.index), 1),
                                    ],
                                    2,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          i("div", ce, L(d(A).question) + " = ?", 1),
                          i("div", ue, [
                            G(
                              i(
                                "input",
                                {
                                  onKeyup: X(C, ["enter"]),
                                  "onUpdate:modelValue":
                                    e[0] ||
                                    (e[0] = (t) =>
                                      Y(b) ? (b.value = t) : null),
                                  type: "number",
                                  placeholder: "你的答案",
                                },
                                null,
                                544,
                              ),
                              [[P, d(b)]],
                            ),
                          ]),
                          i("button", { onClick: C }, "提交"),
                          e[4] ||
                            (e[4] = i(
                              "div",
                              { class: "feedback", id: "feedback" },
                              null,
                              -1,
                            )),
                          i("div", pe, L(d(w) + 1) + "/" + L(d(q).length), 1),
                        ],
                        64,
                      )),
                ]))
              : Z("", !0),
          ])
        )
      );
    },
  }),
  ve = se(me, [["__scopeId", "data-v-73bb653c"]]);
export { ve as default };
