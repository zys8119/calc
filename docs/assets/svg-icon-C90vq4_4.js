import {
  x as f,
  a4 as u,
  a1 as d,
  A as p,
  d as _,
  z as E,
  aG as y,
  f as m,
  C as P,
  an as R,
  aH as b,
  s as c,
  U as I,
  aI as s,
  aJ as O,
} from "./index-B2BSPBrj.js";
const T = f(
    "icon",
    "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",
    [
      u("color-transition", { transition: "color .3s var(--n-bezier)" }),
      u("depth", { color: "var(--n-color)" }, [
        d("svg", {
          opacity: "var(--n-opacity)",
          transition: "opacity .3s var(--n-bezier)",
        }),
      ]),
      d("svg", { height: "1em", width: "1em" }),
    ],
  ),
  A = Object.assign(Object.assign({}, p.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String,
    component: [Object, Function],
  }),
  D = _({
    _n_icon__: !0,
    name: "Icon",
    inheritAttrs: !1,
    props: A,
    setup(t) {
      const { mergedClsPrefixRef: i, inlineThemeDisabled: n } = E(t),
        e = p("Icon", "-icon", T, y, t, i),
        r = m(() => {
          const { depth: a } = t,
            {
              common: { cubicBezierEaseInOut: l },
              self: v,
            } = e.value;
          if (a !== void 0) {
            const { color: g, ["opacity".concat(a, "Depth")]: h } = v;
            return { "--n-bezier": l, "--n-color": g, "--n-opacity": h };
          }
          return { "--n-bezier": l, "--n-color": "", "--n-opacity": "" };
        }),
        o = n
          ? P(
              "icon",
              m(() => "".concat(t.depth || "d")),
              r,
              t,
            )
          : void 0;
      return {
        mergedClsPrefix: i,
        mergedStyle: m(() => {
          const { size: a, color: l } = t;
          return { fontSize: R(a), color: l };
        }),
        cssVars: n ? void 0 : r,
        themeClass: o == null ? void 0 : o.themeClass,
        onRender: o == null ? void 0 : o.onRender,
      };
    },
    render() {
      var t;
      const {
        $parent: i,
        depth: n,
        mergedClsPrefix: e,
        component: r,
        onRender: o,
        themeClass: a,
      } = this;
      return (
        !((t = i == null ? void 0 : i.$options) === null || t === void 0) &&
          t._n_icon__ &&
          b("icon", "don't wrap `n-icon` inside `n-icon`"),
        o == null || o(),
        c(
          "i",
          I(this.$attrs, {
            role: "img",
            class: [
              "".concat(e, "-icon"),
              a,
              {
                ["".concat(e, "-icon--depth")]: n,
                ["".concat(e, "-icon--color-transition")]: n !== void 0,
              },
            ],
            style: [this.cssVars, this.mergedStyle],
          }),
          r ? c(r) : this.$slots,
        )
      );
    },
  }),
  L = (t, i, n) => {
    const e = t[i];
    return e
      ? typeof e == "function"
        ? e()
        : Promise.resolve(e)
      : new Promise((r, o) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            o.bind(
              null,
              new Error(
                "Unknown variable dynamic import: " +
                  i +
                  (i.split("/").length !== n
                    ? ". Note that variables only represent file names one level deep."
                    : ""),
              ),
            ),
          );
        });
  },
  C = _({
    inheritAttrs: !1,
    props: {
      name: { type: String },
      iconProps: { type: Object, default: () => ({}) },
      notFill: { type: Boolean, default: !1 },
    },
    setup({ name: t, iconProps: i, notFill: n }, { attrs: e }) {
      return () =>
        c(
          O,
          c(
            _({
              async setup() {
                try {
                  const r = (
                    await L(
                      Object.assign({
                        "../assets/icons/add.svg": () =>
                          s(
                            () => import("./add-B6A_aQWy.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/aixin.svg": () =>
                          s(
                            () => import("./aixin-CIRM0mDy.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/dc.svg": () =>
                          s(
                            () => import("./dc-BHUMuwm4.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/diannao.svg": () =>
                          s(
                            () => import("./diannao-D7bN_hAq.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/gwb.svg": () =>
                          s(
                            () => import("./gwb-BjHKMc6q.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/home.svg": () =>
                          s(
                            () => import("./home-D8aVp0ec.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/kehu.svg": () =>
                          s(
                            () => import("./kehu-D2RF9Sk5.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/khgl.svg": () =>
                          s(
                            () => import("./khgl-CWkfa5ZQ.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/pinyin1.svg": () =>
                          s(
                            () => import("./pinyin1-2v1Mn6wV.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/qianyue.svg": () =>
                          s(
                            () => import("./qianyue-BXeKGBzr.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/search.svg": () =>
                          s(
                            () => import("./search-8Rbab2D2.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/upload.svg": () =>
                          s(
                            () => import("./upload-Dha4UOif.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/xiala.svg": () =>
                          s(
                            () => import("./xiala-B7H3M3h6.js"),
                            [],
                            import.meta.url,
                          ),
                      }),
                      "../assets/icons/".concat(t, ".svg"),
                      4,
                    )
                  ).default;
                  return () =>
                    c(D, {
                      innerHTML: r,
                      ...e,
                      ...i,
                      class: {
                        flex: !0,
                        "justify-center": !0,
                        "items-center": !0,
                        "svg-icon-fill": !n,
                        ...(typeof e.class == "string"
                          ? { [e.class]: !0 }
                          : e.class),
                      },
                    });
                } catch (r) {
                  return () => {};
                }
              },
            }),
          ),
        );
    },
  });
export { C as _ };
