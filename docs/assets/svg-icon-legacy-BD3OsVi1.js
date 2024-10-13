System.register(["./index-legacy-D2JH51JW.js"], function (e, s) {
  "use strict";
  var t, i, n, o, r, a, c, l, d, m, u, p, g, v, y;
  return {
    setters: [
      (e) => {
        (t = e.x),
          (i = e.a4),
          (n = e.a1),
          (o = e.A),
          (r = e.d),
          (a = e.z),
          (c = e.aG),
          (l = e.f),
          (d = e.C),
          (m = e.an),
          (u = e.aH),
          (p = e.s),
          (g = e.U),
          (v = e.aI),
          (y = e.aJ);
      },
    ],
    execute: function () {
      const h = t(
          "icon",
          "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",
          [
            i("color-transition", { transition: "color .3s var(--n-bezier)" }),
            i("depth", { color: "var(--n-color)" }, [
              n("svg", {
                opacity: "var(--n-opacity)",
                transition: "opacity .3s var(--n-bezier)",
              }),
            ]),
            n("svg", { height: "1em", width: "1em" }),
          ],
        ),
        f = Object.assign(Object.assign({}, o.props), {
          depth: [String, Number],
          size: [Number, String],
          color: String,
          component: [Object, Function],
        }),
        j = r({
          _n_icon__: !0,
          name: "Icon",
          inheritAttrs: !1,
          props: f,
          setup(e) {
            const { mergedClsPrefixRef: s, inlineThemeDisabled: t } = a(e),
              i = o("Icon", "-icon", h, c, e, s),
              n = l(() => {
                const { depth: s } = e,
                  {
                    common: { cubicBezierEaseInOut: t },
                    self: n,
                  } = i.value;
                if (void 0 !== s) {
                  const { color: e, [`opacity${s}Depth`]: i } = n;
                  return { "--n-bezier": t, "--n-color": e, "--n-opacity": i };
                }
                return { "--n-bezier": t, "--n-color": "", "--n-opacity": "" };
              }),
              r = t
                ? d(
                    "icon",
                    l(() => `${e.depth || "d"}`),
                    n,
                    e,
                  )
                : void 0;
            return {
              mergedClsPrefix: s,
              mergedStyle: l(() => {
                const { size: s, color: t } = e;
                return { fontSize: m(s), color: t };
              }),
              cssVars: t ? void 0 : n,
              themeClass: null == r ? void 0 : r.themeClass,
              onRender: null == r ? void 0 : r.onRender,
            };
          },
          render() {
            var e;
            const {
              $parent: s,
              depth: t,
              mergedClsPrefix: i,
              component: n,
              onRender: o,
              themeClass: r,
            } = this;
            return (
              (null === (e = null == s ? void 0 : s.$options) || void 0 === e
                ? void 0
                : e._n_icon__) &&
                u("icon", "don't wrap `n-icon` inside `n-icon`"),
              null == o || o(),
              p(
                "i",
                g(this.$attrs, {
                  role: "img",
                  class: [
                    `${i}-icon`,
                    r,
                    {
                      [`${i}-icon--depth`]: t,
                      [`${i}-icon--color-transition`]: void 0 !== t,
                    },
                  ],
                  style: [this.cssVars, this.mergedStyle],
                }),
                n ? p(n) : this.$slots,
              )
            );
          },
        });
      e(
        "_",
        r({
          inheritAttrs: !1,
          props: {
            name: { type: String },
            iconProps: { type: Object, default: () => ({}) },
            notFill: { type: Boolean, default: !1 },
          },
          setup:
            ({ name: e, iconProps: t, notFill: i }, { attrs: n }) =>
            () =>
              p(
                y,
                p(
                  r({
                    async setup() {
                      try {
                        const o = (
                          await ((e, s, t) => {
                            const i = e[s];
                            return i
                              ? "function" == typeof i
                                ? i()
                                : Promise.resolve(i)
                              : new Promise((e, i) => {
                                  ("function" == typeof queueMicrotask
                                    ? queueMicrotask
                                    : setTimeout)(
                                    i.bind(
                                      null,
                                      new Error(
                                        "Unknown variable dynamic import: " +
                                          s +
                                          (s.split("/").length !== t
                                            ? ". Note that variables only represent file names one level deep."
                                            : ""),
                                      ),
                                    ),
                                  );
                                });
                          })(
                            Object.assign({
                              "../assets/icons/add.svg": () =>
                                v(
                                  () => s.import("./add-legacy-Cg4xKlbs.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/aixin.svg": () =>
                                v(
                                  () => s.import("./aixin-legacy-BF4Necki.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/dc.svg": () =>
                                v(
                                  () => s.import("./dc-legacy-D68UafQH.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/diannao.svg": () =>
                                v(
                                  () =>
                                    s.import("./diannao-legacy-CI3jYhs8.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/gwb.svg": () =>
                                v(
                                  () => s.import("./gwb-legacy-CceLxjFQ.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/home.svg": () =>
                                v(
                                  () => s.import("./home-legacy-gde-StgM.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/kehu.svg": () =>
                                v(
                                  () => s.import("./kehu-legacy-DsKcC30Z.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/khgl.svg": () =>
                                v(
                                  () => s.import("./khgl-legacy-CUPQFTOm.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/pinyin1.svg": () =>
                                v(
                                  () =>
                                    s.import("./pinyin1-legacy-CSsrmfgb.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/qianyue.svg": () =>
                                v(
                                  () =>
                                    s.import("./qianyue-legacy-CTGwDFUD.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/search.svg": () =>
                                v(
                                  () => s.import("./search-legacy-xkFnR0Ke.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/upload.svg": () =>
                                v(
                                  () => s.import("./upload-legacy-D6cNyb3T.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                              "../assets/icons/xiala.svg": () =>
                                v(
                                  () => s.import("./xiala-legacy-UycM1wV6.js"),
                                  void 0,
                                  s.meta.url,
                                ),
                            }),
                            `../assets/icons/${e}.svg`,
                            4,
                          )
                        ).default;
                        return () =>
                          p(j, {
                            innerHTML: o,
                            ...n,
                            ...t,
                            class: {
                              flex: !0,
                              "justify-center": !0,
                              "items-center": !0,
                              "svg-icon-fill": !i,
                              ...("string" == typeof n.class
                                ? { [n.class]: !0 }
                                : n.class),
                            },
                          });
                      } catch (o) {
                        return () => {};
                      }
                    },
                  }),
                ),
              ),
        }),
      );
    },
  };
});
