import {
  r as M,
  f as D,
  H as re,
  J as ot,
  d as ne,
  K as me,
  L as Fn,
  M as Mn,
  g as wt,
  O as jn,
  P as Vn,
  Q as j,
  R as Re,
  T as _e,
  s as v,
  U as Xt,
  V as Dt,
  X as ft,
  Y as Hn,
  Z as Un,
  $ as Wn,
  a0 as Gn,
  x as _,
  y as $,
  a1 as U,
  z as je,
  A as ge,
  a2 as qn,
  G as tt,
  C as Ve,
  N as St,
  a3 as Ge,
  a4 as O,
  a5 as Zt,
  a6 as Yn,
  a7 as Xn,
  a8 as Me,
  a9 as Zn,
  aa as Qn,
  ab as Qt,
  ac as Jn,
  ad as eo,
  ae as Jt,
  af as to,
  ag as oe,
  ah as no,
  ai as et,
  aj as oo,
  ak as ro,
  al as lo,
  am as io,
  an as At,
  ao as en,
  ap as tn,
  aq as ao,
  ar as ht,
  as as so,
  at as co,
  au as uo,
  av as zt,
  aw as $e,
  ax as fo,
  ay as Fe,
  az as Ze,
  aA as We,
  aB as vt,
  aC as Ot,
  aD as Bt,
  aE as ho,
  o as pe,
  h as Ne,
  e as Ce,
  t as nn,
  i as Se,
  _ as Rt,
  aF as ve,
  aG as vo,
  u as go,
  p as bo,
  aH as $t,
  a as Te,
  F as mo,
  j as yo,
  q as ko,
  c as xo,
  n as po,
  w as gt,
  aI as Co,
} from "./index-CZqhz6yy.js";
function Qe(e, t) {
  let { target: n } = e;
  for (; n; ) {
    if (n.dataset && n.dataset[t] !== void 0) return !0;
    n = n.parentElement;
  }
  return !1;
}
function on(e) {
  return typeof e == "string" ? "s-".concat(e) : "n-".concat(e);
}
function Ft(e) {
  return e & -e;
}
class rn {
  constructor(t, n) {
    (this.l = t), (this.min = n);
    const o = new Array(t + 1);
    for (let r = 0; r < t + 1; ++r) o[r] = 0;
    this.ft = o;
  }
  add(t, n) {
    if (n === 0) return;
    const { l: o, ft: r } = this;
    for (t += 1; t <= o; ) (r[t] += n), (t += Ft(t));
  }
  get(t) {
    return this.sum(t + 1) - this.sum(t);
  }
  sum(t) {
    if ((t === void 0 && (t = this.l), t <= 0)) return 0;
    const { ft: n, min: o, l: r } = this;
    if (t > r) throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let l = t * o;
    for (; t > 0; ) (l += n[t]), (t -= Ft(t));
    return l;
  }
  getBound(t) {
    let n = 0,
      o = this.l;
    for (; o > n; ) {
      const r = Math.floor((n + o) / 2),
        l = this.sum(r);
      if (l > t) {
        o = r;
        continue;
      } else if (l < t) {
        if (n === r) return this.sum(n + 1) <= t ? n + 1 : r;
        n = r;
      } else return r;
    }
    return n;
  }
}
let Je;
function wo() {
  return typeof document > "u"
    ? !1
    : (Je === void 0 &&
        ("matchMedia" in window
          ? (Je = window.matchMedia("(pointer:coarse)").matches)
          : (Je = !1)),
      Je);
}
let bt;
function Mt() {
  return typeof document > "u"
    ? 1
    : (bt === void 0 && (bt = "chrome" in window ? window.devicePixelRatio : 1),
      bt);
}
const ln = "VVirtualListXScroll";
function So({ columnsRef: e, renderColRef: t, renderItemWithColsRef: n }) {
  const o = M(0),
    r = M(0),
    l = D(() => {
      const a = e.value;
      if (a.length === 0) return null;
      const c = new rn(a.length, 0);
      return (
        a.forEach((g, h) => {
          c.add(h, g.width);
        }),
        c
      );
    }),
    s = re(() => {
      const a = l.value;
      return a !== null ? Math.max(a.getBound(r.value) - 1, 0) : 0;
    }),
    f = (a) => {
      const c = l.value;
      return c !== null ? c.sum(a) : 0;
    },
    d = re(() => {
      const a = l.value;
      return a !== null
        ? Math.min(a.getBound(r.value + o.value) + 1, e.value.length - 1)
        : 0;
    });
  return (
    ot(ln, {
      startIndexRef: s,
      endIndexRef: d,
      columnsRef: e,
      renderColRef: t,
      renderItemWithColsRef: n,
      getLeft: f,
    }),
    { listWidthRef: o, scrollLeftRef: r }
  );
}
const jt = ne({
    name: "VirtualListRow",
    props: {
      index: { type: Number, required: !0 },
      item: { type: Object, required: !0 },
    },
    setup() {
      const {
        startIndexRef: e,
        endIndexRef: t,
        columnsRef: n,
        getLeft: o,
        renderColRef: r,
        renderItemWithColsRef: l,
      } = me(ln);
      return {
        startIndex: e,
        endIndex: t,
        columns: n,
        renderCol: r,
        renderItemWithCols: l,
        getLeft: o,
      };
    },
    render() {
      const {
        startIndex: e,
        endIndex: t,
        columns: n,
        renderCol: o,
        renderItemWithCols: r,
        getLeft: l,
        item: s,
      } = this;
      if (r != null)
        return r({
          itemIndex: this.index,
          startColIndex: e,
          endColIndex: t,
          allColumns: n,
          item: s,
          getLeft: l,
        });
      if (o != null) {
        const f = [];
        for (let d = e; d <= t; ++d) {
          const a = n[d];
          f.push(o({ column: a, left: l(d), item: s }));
        }
        return f;
      }
      return null;
    },
  }),
  Ro = ft(
    ".v-vl",
    { maxHeight: "inherit", height: "100%", overflow: "auto", minWidth: "1px" },
    [
      ft("&:not(.v-vl--show-scrollbar)", { scrollbarWidth: "none" }, [
        ft(
          "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
          { width: 0, height: 0, display: "none" },
        ),
      ]),
    ],
  ),
  _o = ne({
    name: "VirtualList",
    inheritAttrs: !1,
    props: {
      showScrollbar: { type: Boolean, default: !0 },
      columns: { type: Array, default: () => [] },
      renderCol: Function,
      renderItemWithCols: Function,
      items: { type: Array, default: () => [] },
      itemSize: { type: Number, required: !0 },
      itemResizable: Boolean,
      itemsStyle: [String, Object],
      visibleItemsTag: { type: [String, Object], default: "div" },
      visibleItemsProps: Object,
      ignoreItemResize: Boolean,
      onScroll: Function,
      onWheel: Function,
      onResize: Function,
      defaultScrollKey: [Number, String],
      defaultScrollIndex: Number,
      keyField: { type: String, default: "key" },
      paddingTop: { type: [Number, String], default: 0 },
      paddingBottom: { type: [Number, String], default: 0 },
    },
    setup(e) {
      const t = Fn();
      Ro.mount({
        id: "vueuc/virtual-list",
        head: !0,
        anchorMetaName: Mn,
        ssr: t,
      }),
        wt(() => {
          const { defaultScrollIndex: R, defaultScrollKey: T } = e;
          R != null ? y({ index: R }) : T != null && y({ key: T });
        });
      let n = !1,
        o = !1;
      jn(() => {
        if (((n = !1), !o)) {
          o = !0;
          return;
        }
        y({ top: N.value, left: s.value });
      }),
        Vn(() => {
          (n = !0), o || (o = !0);
        });
      const r = re(() => {
          if (
            (e.renderCol == null && e.renderItemWithCols == null) ||
            e.columns.length === 0
          )
            return;
          let R = 0;
          return (
            e.columns.forEach((T) => {
              R += T.width;
            }),
            R
          );
        }),
        l = D(() => {
          const R = new Map(),
            { keyField: T } = e;
          return (
            e.items.forEach((B, q) => {
              R.set(B[T], q);
            }),
            R
          );
        }),
        { scrollLeftRef: s, listWidthRef: f } = So({
          columnsRef: j(e, "columns"),
          renderColRef: j(e, "renderCol"),
          renderItemWithColsRef: j(e, "renderItemWithCols"),
        }),
        d = M(null),
        a = M(void 0),
        c = new Map(),
        g = D(() => {
          const { items: R, itemSize: T, keyField: B } = e,
            q = new rn(R.length, T);
          return (
            R.forEach((J, W) => {
              const G = J[B],
                ee = c.get(G);
              ee !== void 0 && q.add(W, ee);
            }),
            q
          );
        }),
        h = M(0),
        N = M(0),
        k = re(() =>
          Math.max(g.value.getBound(N.value - Re(e.paddingTop)) - 1, 0),
        ),
        w = D(() => {
          const { value: R } = a;
          if (R === void 0) return [];
          const { items: T, itemSize: B } = e,
            q = k.value,
            J = Math.min(q + Math.ceil(R / B + 1), T.length - 1),
            W = [];
          for (let G = q; G <= J; ++G) W.push(T[G]);
          return W;
        }),
        y = (R, T) => {
          if (typeof R == "number") {
            p(R, T, "auto");
            return;
          }
          const {
            left: B,
            top: q,
            index: J,
            key: W,
            position: G,
            behavior: ee,
            debounce: se = !0,
          } = R;
          if (B !== void 0 || q !== void 0) p(B, q, ee);
          else if (J !== void 0) P(J, ee, se);
          else if (W !== void 0) {
            const ye = l.value.get(W);
            ye !== void 0 && P(ye, ee, se);
          } else
            G === "bottom"
              ? p(0, Number.MAX_SAFE_INTEGER, ee)
              : G === "top" && p(0, 0, ee);
        };
      let m,
        K = null;
      function P(R, T, B) {
        const { value: q } = g,
          J = q.sum(R) + Re(e.paddingTop);
        if (!B) d.value.scrollTo({ left: 0, top: J, behavior: T });
        else {
          (m = R),
            K !== null && window.clearTimeout(K),
            (K = window.setTimeout(() => {
              (m = void 0), (K = null);
            }, 16));
          const { scrollTop: W, offsetHeight: G } = d.value;
          if (J > W) {
            const ee = q.get(R);
            J + ee <= W + G ||
              d.value.scrollTo({ left: 0, top: J + ee - G, behavior: T });
          } else d.value.scrollTo({ left: 0, top: J, behavior: T });
        }
      }
      function p(R, T, B) {
        d.value.scrollTo({ left: R, top: T, behavior: B });
      }
      function x(R, T) {
        var B, q, J;
        if (n || e.ignoreItemResize || ae(T.target)) return;
        const { value: W } = g,
          G = l.value.get(R),
          ee = W.get(G),
          se =
            (J =
              (q =
                (B = T.borderBoxSize) === null || B === void 0
                  ? void 0
                  : B[0]) === null || q === void 0
                ? void 0
                : q.blockSize) !== null && J !== void 0
              ? J
              : T.contentRect.height;
        if (se === ee) return;
        se - e.itemSize === 0 ? c.delete(R) : c.set(R, se - e.itemSize);
        const S = se - ee;
        if (S === 0) return;
        W.add(G, S);
        const A = d.value;
        if (A != null) {
          if (m === void 0) {
            const H = W.sum(G);
            A.scrollTop > H && A.scrollBy(0, S);
          } else if (G < m) A.scrollBy(0, S);
          else if (G === m) {
            const H = W.sum(G);
            se + H > A.scrollTop + A.offsetHeight && A.scrollBy(0, S);
          }
          X();
        }
        h.value++;
      }
      const b = !wo();
      let E = !1;
      function z(R) {
        var T;
        (T = e.onScroll) === null || T === void 0 || T.call(e, R),
          (!b || !E) && X();
      }
      function V(R) {
        var T;
        if (((T = e.onWheel) === null || T === void 0 || T.call(e, R), b)) {
          const B = d.value;
          if (B != null) {
            if (
              R.deltaX === 0 &&
              ((B.scrollTop === 0 && R.deltaY <= 0) ||
                (B.scrollTop + B.offsetHeight >= B.scrollHeight &&
                  R.deltaY >= 0))
            )
              return;
            R.preventDefault(),
              (B.scrollTop += R.deltaY / Mt()),
              (B.scrollLeft += R.deltaX / Mt()),
              X(),
              (E = !0),
              Hn(() => {
                E = !1;
              });
          }
        }
      }
      function F(R) {
        if (n || ae(R.target)) return;
        if (e.renderCol == null && e.renderItemWithCols == null) {
          if (R.contentRect.height === a.value) return;
        } else if (
          R.contentRect.height === a.value &&
          R.contentRect.width === f.value
        )
          return;
        (a.value = R.contentRect.height), (f.value = R.contentRect.width);
        const { onResize: T } = e;
        T !== void 0 && T(R);
      }
      function X() {
        const { value: R } = d;
        R != null && ((N.value = R.scrollTop), (s.value = R.scrollLeft));
      }
      function ae(R) {
        let T = R;
        for (; T !== null; ) {
          if (T.style.display === "none") return !0;
          T = T.parentElement;
        }
        return !1;
      }
      return {
        listHeight: a,
        listStyle: { overflow: "auto" },
        keyToIndex: l,
        itemsStyle: D(() => {
          const { itemResizable: R } = e,
            T = _e(g.value.sum());
          return (
            h.value,
            [
              e.itemsStyle,
              {
                boxSizing: "content-box",
                width: _e(r.value),
                height: R ? "" : T,
                minHeight: R ? T : "",
                paddingTop: _e(e.paddingTop),
                paddingBottom: _e(e.paddingBottom),
              },
            ]
          );
        }),
        visibleItemsStyle: D(
          () => (
            h.value,
            { transform: "translateY(".concat(_e(g.value.sum(k.value)), ")") }
          ),
        ),
        viewportItems: w,
        listElRef: d,
        itemsElRef: M(null),
        scrollTo: y,
        handleListResize: F,
        handleListScroll: z,
        handleListWheel: V,
        handleItemResize: x,
      };
    },
    render() {
      const {
        itemResizable: e,
        keyField: t,
        keyToIndex: n,
        visibleItemsTag: o,
      } = this;
      return v(
        Dt,
        { onResize: this.handleListResize },
        {
          default: () => {
            var r, l;
            return v(
              "div",
              Xt(this.$attrs, {
                class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
                onScroll: this.handleListScroll,
                onWheel: this.handleListWheel,
                ref: "listElRef",
              }),
              [
                this.items.length !== 0
                  ? v(
                      "div",
                      {
                        ref: "itemsElRef",
                        class: "v-vl-items",
                        style: this.itemsStyle,
                      },
                      [
                        v(
                          o,
                          Object.assign(
                            {
                              class: "v-vl-visible-items",
                              style: this.visibleItemsStyle,
                            },
                            this.visibleItemsProps,
                          ),
                          {
                            default: () => {
                              const { renderCol: s, renderItemWithCols: f } =
                                this;
                              return this.viewportItems.map((d) => {
                                const a = d[t],
                                  c = n.get(a),
                                  g =
                                    s != null
                                      ? v(jt, { index: c, item: d })
                                      : void 0,
                                  h =
                                    f != null
                                      ? v(jt, { index: c, item: d })
                                      : void 0,
                                  N = this.$slots.default({
                                    item: d,
                                    renderedCols: g,
                                    renderedItemWithCols: h,
                                    index: c,
                                  })[0];
                                return e
                                  ? v(
                                      Dt,
                                      {
                                        key: a,
                                        onResize: (k) =>
                                          this.handleItemResize(a, k),
                                      },
                                      { default: () => N },
                                    )
                                  : ((N.key = a), N);
                              });
                            },
                          },
                        ),
                      ],
                    )
                  : (l = (r = this.$slots).empty) === null || l === void 0
                    ? void 0
                    : l.call(r),
              ],
            );
          },
        },
      );
    },
  });
function No(e) {
  const { mergedLocaleRef: t, mergedDateLocaleRef: n } = me(Un, null) || {},
    o = D(() => {
      var l, s;
      return (s =
        (l = t == null ? void 0 : t.value) === null || l === void 0
          ? void 0
          : l[e]) !== null && s !== void 0
        ? s
        : Wn[e];
    });
  return {
    dateLocaleRef: D(() => {
      var l;
      return (l = n == null ? void 0 : n.value) !== null && l !== void 0
        ? l
        : Gn;
    }),
    localeRef: o,
  };
}
const To = ne({
    name: "ChevronRight",
    render() {
      return v(
        "svg",
        {
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        v("path", {
          d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
          fill: "currentColor",
        }),
      );
    },
  }),
  Io = ne({
    name: "Empty",
    render() {
      return v(
        "svg",
        {
          viewBox: "0 0 28 28",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        v("path", {
          d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
          fill: "currentColor",
        }),
        v("path", {
          d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
          fill: "currentColor",
        }),
      );
    },
  }),
  Lo = ne({
    name: "Switcher",
    render() {
      return v(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        v("path", { d: "M12 8l10 8l-10 8z" }),
      );
    },
  });
function Vt(e) {
  return Array.isArray(e) ? e : [e];
}
const pt = { STOP: "STOP" };
function an(e, t) {
  const n = t(e);
  e.children !== void 0 && n !== pt.STOP && e.children.forEach((o) => an(o, t));
}
function Ko(e, t = {}) {
  const { preserveGroup: n = !1 } = t,
    o = [],
    r = n
      ? (s) => {
          s.isLeaf || (o.push(s.key), l(s.children));
        }
      : (s) => {
          s.isLeaf || (s.isGroup || o.push(s.key), l(s.children));
        };
  function l(s) {
    s.forEach(r);
  }
  return l(e), o;
}
function Eo(e, t) {
  const { isLeaf: n } = e;
  return n !== void 0 ? n : !t(e);
}
function Po(e) {
  return e.children;
}
function Do(e) {
  return e.key;
}
function Ao() {
  return !1;
}
function zo(e, t) {
  const { isLeaf: n } = e;
  return !(n === !1 && !Array.isArray(t(e)));
}
function Oo(e) {
  return e.disabled === !0;
}
function Bo(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function mt(e) {
  var t;
  return e == null
    ? []
    : Array.isArray(e)
      ? e
      : (t = e.checkedKeys) !== null && t !== void 0
        ? t
        : [];
}
function yt(e) {
  var t;
  return e == null || Array.isArray(e)
    ? []
    : (t = e.indeterminateKeys) !== null && t !== void 0
      ? t
      : [];
}
function $o(e, t) {
  const n = new Set(e);
  return (
    t.forEach((o) => {
      n.has(o) || n.add(o);
    }),
    Array.from(n)
  );
}
function Fo(e, t) {
  const n = new Set(e);
  return (
    t.forEach((o) => {
      n.has(o) && n.delete(o);
    }),
    Array.from(n)
  );
}
function Mo(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function jo(e) {
  const t = new Map();
  return (
    e.forEach((n, o) => {
      t.set(n.key, o);
    }),
    (n) => {
      var o;
      return (o = t.get(n)) !== null && o !== void 0 ? o : null;
    }
  );
}
class Vo extends Error {
  constructor() {
    super(),
      (this.message =
        "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.");
  }
}
function Ho(e, t, n, o) {
  return nt(t.concat(e), n, o, !1);
}
function Uo(e, t) {
  const n = new Set();
  return (
    e.forEach((o) => {
      const r = t.treeNodeMap.get(o);
      if (r !== void 0) {
        let l = r.parent;
        for (; l !== null && !(l.disabled || n.has(l.key)); )
          n.add(l.key), (l = l.parent);
      }
    }),
    n
  );
}
function Wo(e, t, n, o) {
  const r = nt(t, n, o, !1),
    l = nt(e, n, o, !0),
    s = Uo(e, n),
    f = [];
  return (
    r.forEach((d) => {
      (l.has(d) || s.has(d)) && f.push(d);
    }),
    f.forEach((d) => r.delete(d)),
    r
  );
}
function kt(e, t) {
  const {
    checkedKeys: n,
    keysToCheck: o,
    keysToUncheck: r,
    indeterminateKeys: l,
    cascade: s,
    leafOnly: f,
    checkStrategy: d,
    allowNotLoaded: a,
  } = e;
  if (!s)
    return o !== void 0
      ? { checkedKeys: $o(n, o), indeterminateKeys: Array.from(l) }
      : r !== void 0
        ? { checkedKeys: Fo(n, r), indeterminateKeys: Array.from(l) }
        : { checkedKeys: Array.from(n), indeterminateKeys: Array.from(l) };
  const { levelTreeNodeMap: c } = t;
  let g;
  r !== void 0
    ? (g = Wo(r, n, t, a))
    : o !== void 0
      ? (g = Ho(o, n, t, a))
      : (g = nt(n, t, a, !1));
  const h = d === "parent",
    N = d === "child" || f,
    k = g,
    w = new Set(),
    y = Math.max.apply(null, Array.from(c.keys()));
  for (let m = y; m >= 0; m -= 1) {
    const K = m === 0,
      P = c.get(m);
    for (const p of P) {
      if (p.isLeaf) continue;
      const { key: x, shallowLoaded: b } = p;
      if (
        (N &&
          b &&
          p.children.forEach((F) => {
            !F.disabled &&
              !F.isLeaf &&
              F.shallowLoaded &&
              k.has(F.key) &&
              k.delete(F.key);
          }),
        p.disabled || !b)
      )
        continue;
      let E = !0,
        z = !1,
        V = !0;
      for (const F of p.children) {
        const X = F.key;
        if (!F.disabled) {
          if ((V && (V = !1), k.has(X))) z = !0;
          else if (w.has(X)) {
            (z = !0), (E = !1);
            break;
          } else if (((E = !1), z)) break;
        }
      }
      E && !V
        ? (h &&
            p.children.forEach((F) => {
              !F.disabled && k.has(F.key) && k.delete(F.key);
            }),
          k.add(x))
        : z && w.add(x),
        K && N && k.has(x) && k.delete(x);
    }
  }
  return { checkedKeys: Array.from(k), indeterminateKeys: Array.from(w) };
}
function nt(e, t, n, o) {
  const { treeNodeMap: r, getChildren: l } = t,
    s = new Set(),
    f = new Set(e);
  return (
    e.forEach((d) => {
      const a = r.get(d);
      a !== void 0 &&
        an(a, (c) => {
          if (c.disabled) return pt.STOP;
          const { key: g } = c;
          if (!s.has(g) && (s.add(g), f.add(g), Bo(c.rawNode, l))) {
            if (o) return pt.STOP;
            if (!n) throw new Vo();
          }
        });
    }),
    f
  );
}
function Go(e, { includeGroup: t = !1, includeSelf: n = !0 }, o) {
  var r;
  const l = o.treeNodeMap;
  let s = e == null ? null : (r = l.get(e)) !== null && r !== void 0 ? r : null;
  const f = { keyPath: [], treeNodePath: [], treeNode: s };
  if (s != null && s.ignored) return (f.treeNode = null), f;
  for (; s; )
    !s.ignored && (t || !s.isGroup) && f.treeNodePath.push(s), (s = s.parent);
  return (
    f.treeNodePath.reverse(),
    n || f.treeNodePath.pop(),
    (f.keyPath = f.treeNodePath.map((d) => d.key)),
    f
  );
}
function qo(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Yo(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r + 1) % o] : r === n.length - 1 ? null : n[r + 1];
}
function Ht(e, t, { loop: n = !1, includeDisabled: o = !1 } = {}) {
  const r = t === "prev" ? Xo : Yo,
    l = { reverse: t === "prev" };
  let s = !1,
    f = null;
  function d(a) {
    if (a !== null) {
      if (a === e) {
        if (!s) s = !0;
        else if (!e.disabled && !e.isGroup) {
          f = e;
          return;
        }
      } else if ((!a.disabled || o) && !a.ignored && !a.isGroup) {
        f = a;
        return;
      }
      if (a.isGroup) {
        const c = _t(a, l);
        c !== null ? (f = c) : d(r(a, n));
      } else {
        const c = r(a, !1);
        if (c !== null) d(c);
        else {
          const g = Zo(a);
          g != null && g.isGroup ? d(r(g, n)) : n && d(r(a, !0));
        }
      }
    }
  }
  return d(e), f;
}
function Xo(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r - 1 + o) % o] : r === 0 ? null : n[r - 1];
}
function Zo(e) {
  return e.parent;
}
function _t(e, t = {}) {
  const { reverse: n = !1 } = t,
    { children: o } = e;
  if (o) {
    const { length: r } = o,
      l = n ? r - 1 : 0,
      s = n ? -1 : r,
      f = n ? -1 : 1;
    for (let d = l; d !== s; d += f) {
      const a = o[d];
      if (!a.disabled && !a.ignored)
        if (a.isGroup) {
          const c = _t(a, t);
          if (c !== null) return c;
        } else return a;
    }
  }
  return null;
}
const Qo = {
  getChild() {
    return this.ignored ? null : _t(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Ht(this, "next", e);
  },
  getPrev(e = {}) {
    return Ht(this, "prev", e);
  },
};
function Ct(e, t) {
  const n = t ? new Set(t) : void 0,
    o = [];
  function r(l) {
    l.forEach((s) => {
      o.push(s),
        !(s.isLeaf || !s.children || s.ignored) &&
          (s.isGroup || n === void 0 || n.has(s.key)) &&
          r(s.children);
    });
  }
  return r(e), o;
}
function Jo(e, t) {
  const n = e.key;
  for (; t; ) {
    if (t.key === n) return !0;
    t = t.parent;
  }
  return !1;
}
function sn(e, t, n, o, r, l = null, s = 0) {
  const f = [];
  return (
    e.forEach((d, a) => {
      var c;
      const g = Object.create(o);
      if (
        ((g.rawNode = d),
        (g.siblings = f),
        (g.level = s),
        (g.index = a),
        (g.isFirstChild = a === 0),
        (g.isLastChild = a + 1 === e.length),
        (g.parent = l),
        !g.ignored)
      ) {
        const h = r(d);
        Array.isArray(h) && (g.children = sn(h, t, n, o, r, g, s + 1));
      }
      f.push(g),
        t.set(g.key, g),
        n.has(s) || n.set(s, []),
        (c = n.get(s)) === null || c === void 0 || c.push(g);
    }),
    f
  );
}
function Ut(e, t = {}) {
  var n;
  const o = new Map(),
    r = new Map(),
    {
      getDisabled: l = Oo,
      getIgnored: s = Ao,
      getIsGroup: f = Mo,
      getKey: d = Do,
    } = t,
    a = (n = t.getChildren) !== null && n !== void 0 ? n : Po,
    c = t.ignoreEmptyChildren
      ? (p) => {
          const x = a(p);
          return Array.isArray(x) ? (x.length ? x : null) : x;
        }
      : a,
    g = Object.assign(
      {
        get key() {
          return d(this.rawNode);
        },
        get disabled() {
          return l(this.rawNode);
        },
        get isGroup() {
          return f(this.rawNode);
        },
        get isLeaf() {
          return Eo(this.rawNode, c);
        },
        get shallowLoaded() {
          return zo(this.rawNode, c);
        },
        get ignored() {
          return s(this.rawNode);
        },
        contains(p) {
          return Jo(this, p);
        },
      },
      Qo,
    ),
    h = sn(e, o, r, g, c);
  function N(p) {
    if (p == null) return null;
    const x = o.get(p);
    return x && !x.isGroup && !x.ignored ? x : null;
  }
  function k(p) {
    if (p == null) return null;
    const x = o.get(p);
    return x && !x.ignored ? x : null;
  }
  function w(p, x) {
    const b = k(p);
    return b ? b.getPrev(x) : null;
  }
  function y(p, x) {
    const b = k(p);
    return b ? b.getNext(x) : null;
  }
  function m(p) {
    const x = k(p);
    return x ? x.getParent() : null;
  }
  function K(p) {
    const x = k(p);
    return x ? x.getChild() : null;
  }
  const P = {
    treeNodes: h,
    treeNodeMap: o,
    levelTreeNodeMap: r,
    maxLevel: Math.max(...r.keys()),
    getChildren: c,
    getFlattenedNodes(p) {
      return Ct(h, p);
    },
    getNode: N,
    getPrev: w,
    getNext: y,
    getParent: m,
    getChild: K,
    getFirstAvailableNode() {
      return qo(h);
    },
    getPath(p, x = {}) {
      return Go(p, x, P);
    },
    getCheckedKeys(p, x = {}) {
      const {
        cascade: b = !0,
        leafOnly: E = !1,
        checkStrategy: z = "all",
        allowNotLoaded: V = !1,
      } = x;
      return kt(
        {
          checkedKeys: mt(p),
          indeterminateKeys: yt(p),
          cascade: b,
          leafOnly: E,
          checkStrategy: z,
          allowNotLoaded: V,
        },
        P,
      );
    },
    check(p, x, b = {}) {
      const {
        cascade: E = !0,
        leafOnly: z = !1,
        checkStrategy: V = "all",
        allowNotLoaded: F = !1,
      } = b;
      return kt(
        {
          checkedKeys: mt(x),
          indeterminateKeys: yt(x),
          keysToCheck: p == null ? [] : Vt(p),
          cascade: E,
          leafOnly: z,
          checkStrategy: V,
          allowNotLoaded: F,
        },
        P,
      );
    },
    uncheck(p, x, b = {}) {
      const {
        cascade: E = !0,
        leafOnly: z = !1,
        checkStrategy: V = "all",
        allowNotLoaded: F = !1,
      } = b;
      return kt(
        {
          checkedKeys: mt(x),
          indeterminateKeys: yt(x),
          keysToUncheck: p == null ? [] : Vt(p),
          cascade: E,
          leafOnly: z,
          checkStrategy: V,
          allowNotLoaded: F,
        },
        P,
      );
    },
    getNonLeafKeys(p = {}) {
      return Ko(h, p);
    },
  };
  return P;
}
const er = _(
    "empty",
    "\n display: flex;\n flex-direction: column;\n align-items: center;\n font-size: var(--n-font-size);\n",
    [
      $(
        "icon",
        "\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n line-height: var(--n-icon-size);\n color: var(--n-icon-color);\n transition:\n color .3s var(--n-bezier);\n ",
        [U("+", [$("description", "\n margin-top: 8px;\n ")])],
      ),
      $(
        "description",
        "\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n ",
      ),
      $(
        "extra",
        "\n text-align: center;\n transition: color .3s var(--n-bezier);\n margin-top: 12px;\n color: var(--n-extra-text-color);\n ",
      ),
    ],
  ),
  tr = Object.assign(Object.assign({}, ge.props), {
    description: String,
    showDescription: { type: Boolean, default: !0 },
    showIcon: { type: Boolean, default: !0 },
    size: { type: String, default: "medium" },
    renderIcon: Function,
  }),
  Wt = ne({
    name: "Empty",
    props: tr,
    setup(e) {
      const {
          mergedClsPrefixRef: t,
          inlineThemeDisabled: n,
          mergedComponentPropsRef: o,
        } = je(e),
        r = ge("Empty", "-empty", er, qn, e, t),
        { localeRef: l } = No("Empty"),
        s = D(() => {
          var c, g, h;
          return (c = e.description) !== null && c !== void 0
            ? c
            : (h =
                  (g = o == null ? void 0 : o.value) === null || g === void 0
                    ? void 0
                    : g.Empty) === null || h === void 0
              ? void 0
              : h.description;
        }),
        f = D(() => {
          var c, g;
          return (
            ((g =
              (c = o == null ? void 0 : o.value) === null || c === void 0
                ? void 0
                : c.Empty) === null || g === void 0
              ? void 0
              : g.renderIcon) || (() => v(Io, null))
          );
        }),
        d = D(() => {
          const { size: c } = e,
            {
              common: { cubicBezierEaseInOut: g },
              self: {
                [tt("iconSize", c)]: h,
                [tt("fontSize", c)]: N,
                textColor: k,
                iconColor: w,
                extraTextColor: y,
              },
            } = r.value;
          return {
            "--n-icon-size": h,
            "--n-font-size": N,
            "--n-bezier": g,
            "--n-text-color": k,
            "--n-icon-color": w,
            "--n-extra-text-color": y,
          };
        }),
        a = n
          ? Ve(
              "empty",
              D(() => {
                let c = "";
                const { size: g } = e;
                return (c += g[0]), c;
              }),
              d,
              e,
            )
          : void 0;
      return {
        mergedClsPrefix: t,
        mergedRenderIcon: f,
        localizedDescription: D(() => s.value || l.value.description),
        cssVars: n ? void 0 : d,
        themeClass: a == null ? void 0 : a.themeClass,
        onRender: a == null ? void 0 : a.onRender,
      };
    },
    render() {
      const { $slots: e, mergedClsPrefix: t, onRender: n } = this;
      return (
        n == null || n(),
        v(
          "div",
          {
            class: ["".concat(t, "-empty"), this.themeClass],
            style: this.cssVars,
          },
          this.showIcon
            ? v(
                "div",
                { class: "".concat(t, "-empty__icon") },
                e.icon
                  ? e.icon()
                  : v(St, { clsPrefix: t }, { default: this.mergedRenderIcon }),
              )
            : null,
          this.showDescription
            ? v(
                "div",
                { class: "".concat(t, "-empty__description") },
                e.default ? e.default() : this.localizedDescription,
              )
            : null,
          e.extra
            ? v("div", { class: "".concat(t, "-empty__extra") }, e.extra())
            : null,
        )
      );
    },
  }),
  nr = v(
    "svg",
    { viewBox: "0 0 64 64", class: "check-icon" },
    v("path", {
      d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z",
    }),
  ),
  or = v(
    "svg",
    { viewBox: "0 0 100 100", class: "line-icon" },
    v("path", {
      d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z",
    }),
  ),
  rr = Ge("n-checkbox-group"),
  lr = U([
    _(
      "checkbox",
      "\n font-size: var(--n-font-size);\n outline: none;\n cursor: pointer;\n display: inline-flex;\n flex-wrap: nowrap;\n align-items: flex-start;\n word-break: break-word;\n line-height: var(--n-size);\n --n-merged-color-table: var(--n-color-table);\n ",
      [
        O("show-label", "line-height: var(--n-label-line-height);"),
        U("&:hover", [
          _("checkbox-box", [$("border", "border: var(--n-border-checked);")]),
        ]),
        U("&:focus:not(:active)", [
          _("checkbox-box", [
            $(
              "border",
              "\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n ",
            ),
          ]),
        ]),
        O("inside-table", [
          _(
            "checkbox-box",
            "\n background-color: var(--n-merged-color-table);\n ",
          ),
        ]),
        O("checked", [
          _("checkbox-box", "\n background-color: var(--n-color-checked);\n ", [
            _("checkbox-icon", [
              U(".check-icon", "\n opacity: 1;\n transform: scale(1);\n "),
            ]),
          ]),
        ]),
        O("indeterminate", [
          _("checkbox-box", [
            _("checkbox-icon", [
              U(".check-icon", "\n opacity: 0;\n transform: scale(.5);\n "),
              U(".line-icon", "\n opacity: 1;\n transform: scale(1);\n "),
            ]),
          ]),
        ]),
        O("checked, indeterminate", [
          U("&:focus:not(:active)", [
            _("checkbox-box", [
              $(
                "border",
                "\n border: var(--n-border-checked);\n box-shadow: var(--n-box-shadow-focus);\n ",
              ),
            ]),
          ]),
          _(
            "checkbox-box",
            "\n background-color: var(--n-color-checked);\n border-left: 0;\n border-top: 0;\n ",
            [$("border", { border: "var(--n-border-checked)" })],
          ),
        ]),
        O("disabled", { cursor: "not-allowed" }, [
          O("checked", [
            _(
              "checkbox-box",
              "\n background-color: var(--n-color-disabled-checked);\n ",
              [
                $("border", { border: "var(--n-border-disabled-checked)" }),
                _("checkbox-icon", [
                  U(".check-icon, .line-icon", {
                    fill: "var(--n-check-mark-color-disabled-checked)",
                  }),
                ]),
              ],
            ),
          ]),
          _(
            "checkbox-box",
            "\n background-color: var(--n-color-disabled);\n ",
            [
              $("border", "\n border: var(--n-border-disabled);\n "),
              _("checkbox-icon", [
                U(
                  ".check-icon, .line-icon",
                  "\n fill: var(--n-check-mark-color-disabled);\n ",
                ),
              ]),
            ],
          ),
          $("label", "\n color: var(--n-text-color-disabled);\n "),
        ]),
        _(
          "checkbox-box-wrapper",
          "\n position: relative;\n width: var(--n-size);\n flex-shrink: 0;\n flex-grow: 0;\n user-select: none;\n -webkit-user-select: none;\n ",
        ),
        _(
          "checkbox-box",
          "\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n height: var(--n-size);\n width: var(--n-size);\n display: inline-block;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color 0.3s var(--n-bezier);\n ",
          [
            $(
              "border",
              "\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border: var(--n-border);\n ",
            ),
            _(
              "checkbox-icon",
              "\n display: flex;\n align-items: center;\n justify-content: center;\n position: absolute;\n left: 1px;\n right: 1px;\n top: 1px;\n bottom: 1px;\n ",
              [
                U(
                  ".check-icon, .line-icon",
                  "\n width: 100%;\n fill: var(--n-check-mark-color);\n opacity: 0;\n transform: scale(0.5);\n transform-origin: center;\n transition:\n fill 0.3s var(--n-bezier),\n transform 0.3s var(--n-bezier),\n opacity 0.3s var(--n-bezier),\n border-color 0.3s var(--n-bezier);\n ",
                ),
                Zt({ left: "1px", top: "1px" }),
              ],
            ),
          ],
        ),
        $(
          "label",
          "\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n padding: var(--n-label-padding);\n font-weight: var(--n-label-font-weight);\n ",
          [U("&:empty", { display: "none" })],
        ),
      ],
    ),
    Yn(
      _(
        "checkbox",
        "\n --n-merged-color-table: var(--n-color-table-modal);\n ",
      ),
    ),
    Xn(
      _(
        "checkbox",
        "\n --n-merged-color-table: var(--n-color-table-popover);\n ",
      ),
    ),
  ]),
  ir = Object.assign(Object.assign({}, ge.props), {
    size: String,
    checked: { type: [Boolean, String, Number], default: void 0 },
    defaultChecked: { type: [Boolean, String, Number], default: !1 },
    value: [String, Number],
    disabled: { type: Boolean, default: void 0 },
    indeterminate: Boolean,
    label: String,
    focusable: { type: Boolean, default: !0 },
    checkedValue: { type: [Boolean, String, Number], default: !0 },
    uncheckedValue: { type: [Boolean, String, Number], default: !1 },
    "onUpdate:checked": [Function, Array],
    onUpdateChecked: [Function, Array],
    privateInsideTable: Boolean,
    onChange: [Function, Array],
  }),
  ar = ne({
    name: "Checkbox",
    props: ir,
    setup(e) {
      const t = me(rr, null),
        n = M(null),
        {
          mergedClsPrefixRef: o,
          inlineThemeDisabled: r,
          mergedRtlRef: l,
        } = je(e),
        s = M(e.defaultChecked),
        f = j(e, "checked"),
        d = Me(f, s),
        a = re(() => {
          if (t) {
            const b = t.valueSetRef.value;
            return b && e.value !== void 0 ? b.has(e.value) : !1;
          } else return d.value === e.checkedValue;
        }),
        c = Zn(e, {
          mergedSize(b) {
            const { size: E } = e;
            if (E !== void 0) return E;
            if (t) {
              const { value: z } = t.mergedSizeRef;
              if (z !== void 0) return z;
            }
            if (b) {
              const { mergedSize: z } = b;
              if (z !== void 0) return z.value;
            }
            return "medium";
          },
          mergedDisabled(b) {
            const { disabled: E } = e;
            if (E !== void 0) return E;
            if (t) {
              if (t.disabledRef.value) return !0;
              const {
                maxRef: { value: z },
                checkedCountRef: V,
              } = t;
              if (z !== void 0 && V.value >= z && !a.value) return !0;
              const {
                minRef: { value: F },
              } = t;
              if (F !== void 0 && V.value <= F && a.value) return !0;
            }
            return b ? b.disabled.value : !1;
          },
        }),
        { mergedDisabledRef: g, mergedSizeRef: h } = c,
        N = ge("Checkbox", "-checkbox", lr, Qn, e, o);
      function k(b) {
        if (t && e.value !== void 0) t.toggleCheckbox(!a.value, e.value);
        else {
          const { onChange: E, "onUpdate:checked": z, onUpdateChecked: V } = e,
            { nTriggerFormInput: F, nTriggerFormChange: X } = c,
            ae = a.value ? e.uncheckedValue : e.checkedValue;
          z && oe(z, ae, b),
            V && oe(V, ae, b),
            E && oe(E, ae, b),
            F(),
            X(),
            (s.value = ae);
        }
      }
      function w(b) {
        g.value || k(b);
      }
      function y(b) {
        if (!g.value)
          switch (b.key) {
            case " ":
            case "Enter":
              k(b);
          }
      }
      function m(b) {
        switch (b.key) {
          case " ":
            b.preventDefault();
        }
      }
      const K = {
          focus: () => {
            var b;
            (b = n.value) === null || b === void 0 || b.focus();
          },
          blur: () => {
            var b;
            (b = n.value) === null || b === void 0 || b.blur();
          },
        },
        P = Qt("Checkbox", l, o),
        p = D(() => {
          const { value: b } = h,
            {
              common: { cubicBezierEaseInOut: E },
              self: {
                borderRadius: z,
                color: V,
                colorChecked: F,
                colorDisabled: X,
                colorTableHeader: ae,
                colorTableHeaderModal: R,
                colorTableHeaderPopover: T,
                checkMarkColor: B,
                checkMarkColorDisabled: q,
                border: J,
                borderFocus: W,
                borderDisabled: G,
                borderChecked: ee,
                boxShadowFocus: se,
                textColor: ye,
                textColorDisabled: S,
                checkMarkColorDisabledChecked: A,
                colorDisabledChecked: H,
                borderDisabledChecked: te,
                labelPadding: le,
                labelLineHeight: Ie,
                labelFontWeight: Le,
                [tt("fontSize", b)]: Ke,
                [tt("size", b)]: rt,
              },
            } = N.value;
          return {
            "--n-label-line-height": Ie,
            "--n-label-font-weight": Le,
            "--n-size": rt,
            "--n-bezier": E,
            "--n-border-radius": z,
            "--n-border": J,
            "--n-border-checked": ee,
            "--n-border-focus": W,
            "--n-border-disabled": G,
            "--n-border-disabled-checked": te,
            "--n-box-shadow-focus": se,
            "--n-color": V,
            "--n-color-checked": F,
            "--n-color-table": ae,
            "--n-color-table-modal": R,
            "--n-color-table-popover": T,
            "--n-color-disabled": X,
            "--n-color-disabled-checked": H,
            "--n-text-color": ye,
            "--n-text-color-disabled": S,
            "--n-check-mark-color": B,
            "--n-check-mark-color-disabled": q,
            "--n-check-mark-color-disabled-checked": A,
            "--n-font-size": Ke,
            "--n-label-padding": le,
          };
        }),
        x = r
          ? Ve(
              "checkbox",
              D(() => h.value[0]),
              p,
              e,
            )
          : void 0;
      return Object.assign(c, K, {
        rtlEnabled: P,
        selfRef: n,
        mergedClsPrefix: o,
        mergedDisabled: g,
        renderedChecked: a,
        mergedTheme: N,
        labelId: Jn(),
        handleClick: w,
        handleKeyUp: y,
        handleKeyDown: m,
        cssVars: r ? void 0 : p,
        themeClass: x == null ? void 0 : x.themeClass,
        onRender: x == null ? void 0 : x.onRender,
      });
    },
    render() {
      var e;
      const {
        $slots: t,
        renderedChecked: n,
        mergedDisabled: o,
        indeterminate: r,
        privateInsideTable: l,
        cssVars: s,
        labelId: f,
        label: d,
        mergedClsPrefix: a,
        focusable: c,
        handleKeyUp: g,
        handleKeyDown: h,
        handleClick: N,
      } = this;
      (e = this.onRender) === null || e === void 0 || e.call(this);
      const k = eo(t.default, (w) =>
        d || w
          ? v(
              "span",
              { class: "".concat(a, "-checkbox__label"), id: f },
              d || w,
            )
          : null,
      );
      return v(
        "div",
        {
          ref: "selfRef",
          class: [
            "".concat(a, "-checkbox"),
            this.themeClass,
            this.rtlEnabled && "".concat(a, "-checkbox--rtl"),
            n && "".concat(a, "-checkbox--checked"),
            o && "".concat(a, "-checkbox--disabled"),
            r && "".concat(a, "-checkbox--indeterminate"),
            l && "".concat(a, "-checkbox--inside-table"),
            k && "".concat(a, "-checkbox--show-label"),
          ],
          tabindex: o || !c ? void 0 : 0,
          role: "checkbox",
          "aria-checked": r ? "mixed" : n,
          "aria-labelledby": f,
          style: s,
          onKeyup: g,
          onKeydown: h,
          onClick: N,
          onMousedown: () => {
            to(
              "selectstart",
              window,
              (w) => {
                w.preventDefault();
              },
              { once: !0 },
            );
          },
        },
        v(
          "div",
          { class: "".concat(a, "-checkbox-box-wrapper") },
          " ",
          v(
            "div",
            { class: "".concat(a, "-checkbox-box") },
            v(Jt, null, {
              default: () =>
                this.indeterminate
                  ? v(
                      "div",
                      {
                        key: "indeterminate",
                        class: "".concat(a, "-checkbox-icon"),
                      },
                      or,
                    )
                  : v(
                      "div",
                      { key: "check", class: "".concat(a, "-checkbox-icon") },
                      nr,
                    ),
            }),
            v("div", { class: "".concat(a, "-checkbox-box__border") }),
          ),
        ),
        k,
      );
    },
  }),
  sr = _(
    "icon",
    "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",
    [
      O("color-transition", { transition: "color .3s var(--n-bezier)" }),
      O("depth", { color: "var(--n-color)" }, [
        U("svg", {
          opacity: "var(--n-opacity)",
          transition: "opacity .3s var(--n-bezier)",
        }),
      ]),
      U("svg", { height: "1em", width: "1em" }),
    ],
  ),
  dr = Object.assign(Object.assign({}, ge.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String,
    component: [Object, Function],
  }),
  cr = ne({
    _n_icon__: !0,
    name: "Icon",
    inheritAttrs: !1,
    props: dr,
    setup(e) {
      const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = je(e),
        o = ge("Icon", "-icon", sr, no, e, t),
        r = D(() => {
          const { depth: s } = e,
            {
              common: { cubicBezierEaseInOut: f },
              self: d,
            } = o.value;
          if (s !== void 0) {
            const { color: a, ["opacity".concat(s, "Depth")]: c } = d;
            return { "--n-bezier": f, "--n-color": a, "--n-opacity": c };
          }
          return { "--n-bezier": f, "--n-color": "", "--n-opacity": "" };
        }),
        l = n
          ? Ve(
              "icon",
              D(() => "".concat(e.depth || "d")),
              r,
              e,
            )
          : void 0;
      return {
        mergedClsPrefix: t,
        mergedStyle: D(() => {
          const { size: s, color: f } = e;
          return { fontSize: et(s), color: f };
        }),
        cssVars: n ? void 0 : r,
        themeClass: l == null ? void 0 : l.themeClass,
        onRender: l == null ? void 0 : l.onRender,
      };
    },
    render() {
      var e;
      const {
        $parent: t,
        depth: n,
        mergedClsPrefix: o,
        component: r,
        onRender: l,
        themeClass: s,
      } = this;
      return (
        !((e = t == null ? void 0 : t.$options) === null || e === void 0) &&
          e._n_icon__ &&
          oo("icon", "don't wrap `n-icon` inside `n-icon`"),
        l == null || l(),
        v(
          "i",
          Xt(this.$attrs, {
            role: "img",
            class: [
              "".concat(o, "-icon"),
              s,
              {
                ["".concat(o, "-icon--depth")]: n,
                ["".concat(o, "-icon--color-transition")]: n !== void 0,
              },
            ],
            style: [this.cssVars, this.mergedStyle],
          }),
          r ? v(r) : this.$slots,
        )
      );
    },
  });
function ur(e) {
  const {
    baseColor: t,
    textColor2: n,
    bodyColor: o,
    cardColor: r,
    dividerColor: l,
    actionColor: s,
    scrollbarColor: f,
    scrollbarColorHover: d,
    invertedColor: a,
  } = e;
  return {
    textColor: n,
    textColorInverted: "#FFF",
    color: o,
    colorEmbedded: s,
    headerColor: r,
    headerColorInverted: a,
    footerColor: s,
    footerColorInverted: a,
    headerBorderColor: l,
    headerBorderColorInverted: a,
    footerBorderColor: l,
    footerBorderColorInverted: a,
    siderBorderColor: l,
    siderBorderColorInverted: a,
    siderColor: r,
    siderColorInverted: a,
    siderToggleButtonBorder: "1px solid ".concat(l),
    siderToggleButtonColor: t,
    siderToggleButtonIconColor: n,
    siderToggleButtonIconColorInverted: n,
    siderToggleBarColor: At(o, f),
    siderToggleBarColorHover: At(o, d),
    __invertScrollbar: "true",
  };
}
const dn = ro({
    name: "Layout",
    common: lo,
    peers: { Scrollbar: io },
    self: ur,
  }),
  fr = Ge("n-layout-sider"),
  cn = { type: String, default: "static" },
  hr = _(
    "layout",
    "\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n flex: auto;\n overflow: hidden;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",
    [
      _(
        "layout-scroll-container",
        "\n overflow-x: hidden;\n box-sizing: border-box;\n height: 100%;\n ",
      ),
      O(
        "absolute-positioned",
        "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ",
      ),
    ],
  ),
  vr = {
    embedded: Boolean,
    position: cn,
    nativeScrollbar: { type: Boolean, default: !0 },
    scrollbarProps: Object,
    onScroll: Function,
    contentClass: String,
    contentStyle: { type: [String, Object], default: "" },
    hasSider: Boolean,
    siderPlacement: { type: String, default: "left" },
  },
  un = Ge("n-layout");
function fn(e) {
  return ne({
    name: e ? "LayoutContent" : "Layout",
    props: Object.assign(Object.assign({}, ge.props), vr),
    setup(t) {
      const n = M(null),
        o = M(null),
        { mergedClsPrefixRef: r, inlineThemeDisabled: l } = je(t),
        s = ge("Layout", "-layout", hr, dn, t, r);
      function f(w, y) {
        if (t.nativeScrollbar) {
          const { value: m } = n;
          m && (y === void 0 ? m.scrollTo(w) : m.scrollTo(w, y));
        } else {
          const { value: m } = o;
          m && m.scrollTo(w, y);
        }
      }
      ot(un, t);
      let d = 0,
        a = 0;
      const c = (w) => {
        var y;
        const m = w.target;
        (d = m.scrollLeft),
          (a = m.scrollTop),
          (y = t.onScroll) === null || y === void 0 || y.call(t, w);
      };
      en(() => {
        if (t.nativeScrollbar) {
          const w = n.value;
          w && ((w.scrollTop = a), (w.scrollLeft = d));
        }
      });
      const g = {
          display: "flex",
          flexWrap: "nowrap",
          width: "100%",
          flexDirection: "row",
        },
        h = { scrollTo: f },
        N = D(() => {
          const {
            common: { cubicBezierEaseInOut: w },
            self: y,
          } = s.value;
          return {
            "--n-bezier": w,
            "--n-color": t.embedded ? y.colorEmbedded : y.color,
            "--n-text-color": y.textColor,
          };
        }),
        k = l
          ? Ve(
              "layout",
              D(() => (t.embedded ? "e" : "")),
              N,
              t,
            )
          : void 0;
      return Object.assign(
        {
          mergedClsPrefix: r,
          scrollableElRef: n,
          scrollbarInstRef: o,
          hasSiderStyle: g,
          mergedTheme: s,
          handleNativeElScroll: c,
          cssVars: l ? void 0 : N,
          themeClass: k == null ? void 0 : k.themeClass,
          onRender: k == null ? void 0 : k.onRender,
        },
        h,
      );
    },
    render() {
      var t;
      const { mergedClsPrefix: n, hasSider: o } = this;
      (t = this.onRender) === null || t === void 0 || t.call(this);
      const r = o ? this.hasSiderStyle : void 0,
        l = [
          this.themeClass,
          e && "".concat(n, "-layout-content"),
          "".concat(n, "-layout"),
          "".concat(n, "-layout--").concat(this.position, "-positioned"),
        ];
      return v(
        "div",
        { class: l, style: this.cssVars },
        this.nativeScrollbar
          ? v(
              "div",
              {
                ref: "scrollableElRef",
                class: [
                  "".concat(n, "-layout-scroll-container"),
                  this.contentClass,
                ],
                style: [this.contentStyle, r],
                onScroll: this.handleNativeElScroll,
              },
              this.$slots,
            )
          : v(
              tn,
              Object.assign({}, this.scrollbarProps, {
                onScroll: this.onScroll,
                ref: "scrollbarInstRef",
                theme: this.mergedTheme.peers.Scrollbar,
                themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                contentClass: this.contentClass,
                contentStyle: [this.contentStyle, r],
              }),
              this.$slots,
            ),
      );
    },
  });
}
const gr = fn(!1),
  br = fn(!0),
  mr = _(
    "layout-sider",
    "\n flex-shrink: 0;\n box-sizing: border-box;\n position: relative;\n z-index: 1;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n min-width .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: flex;\n justify-content: flex-end;\n",
    [
      O("bordered", [
        $(
          "border",
          '\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 1px;\n background-color: var(--n-border-color);\n transition: background-color .3s var(--n-bezier);\n ',
        ),
      ]),
      $("left-placement", [O("bordered", [$("border", "\n right: 0;\n ")])]),
      O("right-placement", "\n justify-content: flex-start;\n ", [
        O("bordered", [$("border", "\n left: 0;\n ")]),
        O("collapsed", [
          _("layout-toggle-button", [
            _("base-icon", "\n transform: rotate(180deg);\n "),
          ]),
          _("layout-toggle-bar", [
            U("&:hover", [
              $("top", {
                transform: "rotate(-12deg) scale(1.15) translateY(-2px)",
              }),
              $("bottom", {
                transform: "rotate(12deg) scale(1.15) translateY(2px)",
              }),
            ]),
          ]),
        ]),
        _(
          "layout-toggle-button",
          "\n left: 0;\n transform: translateX(-50%) translateY(-50%);\n ",
          [_("base-icon", "\n transform: rotate(0);\n ")],
        ),
        _(
          "layout-toggle-bar",
          "\n left: -28px;\n transform: rotate(180deg);\n ",
          [
            U("&:hover", [
              $("top", {
                transform: "rotate(12deg) scale(1.15) translateY(-2px)",
              }),
              $("bottom", {
                transform: "rotate(-12deg) scale(1.15) translateY(2px)",
              }),
            ]),
          ],
        ),
      ]),
      O("collapsed", [
        _("layout-toggle-bar", [
          U("&:hover", [
            $("top", {
              transform: "rotate(-12deg) scale(1.15) translateY(-2px)",
            }),
            $("bottom", {
              transform: "rotate(12deg) scale(1.15) translateY(2px)",
            }),
          ]),
        ]),
        _("layout-toggle-button", [
          _("base-icon", "\n transform: rotate(0);\n "),
        ]),
      ]),
      _(
        "layout-toggle-button",
        "\n transition:\n color .3s var(--n-bezier),\n right .3s var(--n-bezier),\n left .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n cursor: pointer;\n width: 24px;\n height: 24px;\n position: absolute;\n top: 50%;\n right: 0;\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n font-size: 18px;\n color: var(--n-toggle-button-icon-color);\n border: var(--n-toggle-button-border);\n background-color: var(--n-toggle-button-color);\n box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);\n transform: translateX(50%) translateY(-50%);\n z-index: 1;\n ",
        [
          _(
            "base-icon",
            "\n transition: transform .3s var(--n-bezier);\n transform: rotate(180deg);\n ",
          ),
        ],
      ),
      _(
        "layout-toggle-bar",
        "\n cursor: pointer;\n height: 72px;\n width: 32px;\n position: absolute;\n top: calc(50% - 36px);\n right: -28px;\n ",
        [
          $(
            "top, bottom",
            "\n position: absolute;\n width: 4px;\n border-radius: 2px;\n height: 38px;\n left: 14px;\n transition: \n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n ",
          ),
          $("bottom", "\n position: absolute;\n top: 34px;\n "),
          U("&:hover", [
            $("top", {
              transform: "rotate(12deg) scale(1.15) translateY(-2px)",
            }),
            $("bottom", {
              transform: "rotate(-12deg) scale(1.15) translateY(2px)",
            }),
          ]),
          $("top, bottom", { backgroundColor: "var(--n-toggle-bar-color)" }),
          U("&:hover", [
            $("top, bottom", {
              backgroundColor: "var(--n-toggle-bar-color-hover)",
            }),
          ]),
        ],
      ),
      $(
        "border",
        "\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n width: 1px;\n transition: background-color .3s var(--n-bezier);\n ",
      ),
      _(
        "layout-sider-scroll-container",
        "\n flex-grow: 1;\n flex-shrink: 0;\n box-sizing: border-box;\n height: 100%;\n opacity: 0;\n transition: opacity .3s var(--n-bezier);\n max-width: 100%;\n ",
      ),
      O("show-content", [_("layout-sider-scroll-container", { opacity: 1 })]),
      O(
        "absolute-positioned",
        "\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n ",
      ),
    ],
  ),
  yr = ne({
    name: "LayoutToggleButton",
    props: { clsPrefix: { type: String, required: !0 }, onClick: Function },
    render() {
      const { clsPrefix: e } = this;
      return v(
        "div",
        { class: "".concat(e, "-layout-toggle-button"), onClick: this.onClick },
        v(St, { clsPrefix: e }, { default: () => v(To, null) }),
      );
    },
  }),
  kr = ne({
    props: { clsPrefix: { type: String, required: !0 }, onClick: Function },
    render() {
      const { clsPrefix: e } = this;
      return v(
        "div",
        { onClick: this.onClick, class: "".concat(e, "-layout-toggle-bar") },
        v("div", { class: "".concat(e, "-layout-toggle-bar__top") }),
        v("div", { class: "".concat(e, "-layout-toggle-bar__bottom") }),
      );
    },
  }),
  xr = {
    position: cn,
    bordered: Boolean,
    collapsedWidth: { type: Number, default: 48 },
    width: { type: [Number, String], default: 272 },
    contentClass: String,
    contentStyle: { type: [String, Object], default: "" },
    collapseMode: { type: String, default: "transform" },
    collapsed: { type: Boolean, default: void 0 },
    defaultCollapsed: Boolean,
    showCollapsedContent: { type: Boolean, default: !0 },
    showTrigger: { type: [Boolean, String], default: !1 },
    nativeScrollbar: { type: Boolean, default: !0 },
    inverted: Boolean,
    scrollbarProps: Object,
    triggerClass: String,
    triggerStyle: [String, Object],
    collapsedTriggerClass: String,
    collapsedTriggerStyle: [String, Object],
    "onUpdate:collapsed": [Function, Array],
    onUpdateCollapsed: [Function, Array],
    onAfterEnter: Function,
    onAfterLeave: Function,
    onExpand: [Function, Array],
    onCollapse: [Function, Array],
    onScroll: Function,
  },
  pr = ne({
    name: "LayoutSider",
    props: Object.assign(Object.assign({}, ge.props), xr),
    setup(e) {
      const t = me(un),
        n = M(null),
        o = M(null),
        r = M(e.defaultCollapsed),
        l = Me(j(e, "collapsed"), r),
        s = D(() => et(l.value ? e.collapsedWidth : e.width)),
        f = D(() =>
          e.collapseMode !== "transform" ? {} : { minWidth: et(e.width) },
        ),
        d = D(() => (t ? t.siderPlacement : "left"));
      function a(x, b) {
        if (e.nativeScrollbar) {
          const { value: E } = n;
          E && (b === void 0 ? E.scrollTo(x) : E.scrollTo(x, b));
        } else {
          const { value: E } = o;
          E && E.scrollTo(x, b);
        }
      }
      function c() {
        const {
            "onUpdate:collapsed": x,
            onUpdateCollapsed: b,
            onExpand: E,
            onCollapse: z,
          } = e,
          { value: V } = l;
        b && oe(b, !V),
          x && oe(x, !V),
          (r.value = !V),
          V ? E && oe(E) : z && oe(z);
      }
      let g = 0,
        h = 0;
      const N = (x) => {
        var b;
        const E = x.target;
        (g = E.scrollLeft),
          (h = E.scrollTop),
          (b = e.onScroll) === null || b === void 0 || b.call(e, x);
      };
      en(() => {
        if (e.nativeScrollbar) {
          const x = n.value;
          x && ((x.scrollTop = h), (x.scrollLeft = g));
        }
      }),
        ot(fr, { collapsedRef: l, collapseModeRef: j(e, "collapseMode") });
      const { mergedClsPrefixRef: k, inlineThemeDisabled: w } = je(e),
        y = ge("Layout", "-layout-sider", mr, dn, e, k);
      function m(x) {
        var b, E;
        x.propertyName === "max-width" &&
          (l.value
            ? (b = e.onAfterLeave) === null || b === void 0 || b.call(e)
            : (E = e.onAfterEnter) === null || E === void 0 || E.call(e));
      }
      const K = { scrollTo: a },
        P = D(() => {
          const {
              common: { cubicBezierEaseInOut: x },
              self: b,
            } = y.value,
            {
              siderToggleButtonColor: E,
              siderToggleButtonBorder: z,
              siderToggleBarColor: V,
              siderToggleBarColorHover: F,
            } = b,
            X = {
              "--n-bezier": x,
              "--n-toggle-button-color": E,
              "--n-toggle-button-border": z,
              "--n-toggle-bar-color": V,
              "--n-toggle-bar-color-hover": F,
            };
          return (
            e.inverted
              ? ((X["--n-color"] = b.siderColorInverted),
                (X["--n-text-color"] = b.textColorInverted),
                (X["--n-border-color"] = b.siderBorderColorInverted),
                (X["--n-toggle-button-icon-color"] =
                  b.siderToggleButtonIconColorInverted),
                (X.__invertScrollbar = b.__invertScrollbar))
              : ((X["--n-color"] = b.siderColor),
                (X["--n-text-color"] = b.textColor),
                (X["--n-border-color"] = b.siderBorderColor),
                (X["--n-toggle-button-icon-color"] =
                  b.siderToggleButtonIconColor)),
            X
          );
        }),
        p = w
          ? Ve(
              "layout-sider",
              D(() => (e.inverted ? "a" : "b")),
              P,
              e,
            )
          : void 0;
      return Object.assign(
        {
          scrollableElRef: n,
          scrollbarInstRef: o,
          mergedClsPrefix: k,
          mergedTheme: y,
          styleMaxWidth: s,
          mergedCollapsed: l,
          scrollContainerStyle: f,
          siderPlacement: d,
          handleNativeElScroll: N,
          handleTransitionend: m,
          handleTriggerClick: c,
          inlineThemeDisabled: w,
          cssVars: P,
          themeClass: p == null ? void 0 : p.themeClass,
          onRender: p == null ? void 0 : p.onRender,
        },
        K,
      );
    },
    render() {
      var e;
      const { mergedClsPrefix: t, mergedCollapsed: n, showTrigger: o } = this;
      return (
        (e = this.onRender) === null || e === void 0 || e.call(this),
        v(
          "aside",
          {
            class: [
              "".concat(t, "-layout-sider"),
              this.themeClass,
              ""
                .concat(t, "-layout-sider--")
                .concat(this.position, "-positioned"),
              ""
                .concat(t, "-layout-sider--")
                .concat(this.siderPlacement, "-placement"),
              this.bordered && "".concat(t, "-layout-sider--bordered"),
              n && "".concat(t, "-layout-sider--collapsed"),
              (!n || this.showCollapsedContent) &&
                "".concat(t, "-layout-sider--show-content"),
            ],
            onTransitionend: this.handleTransitionend,
            style: [
              this.inlineThemeDisabled ? void 0 : this.cssVars,
              { maxWidth: this.styleMaxWidth, width: et(this.width) },
            ],
          },
          this.nativeScrollbar
            ? v(
                "div",
                {
                  class: [
                    "".concat(t, "-layout-sider-scroll-container"),
                    this.contentClass,
                  ],
                  onScroll: this.handleNativeElScroll,
                  style: [
                    this.scrollContainerStyle,
                    { overflow: "auto" },
                    this.contentStyle,
                  ],
                  ref: "scrollableElRef",
                },
                this.$slots,
              )
            : v(
                tn,
                Object.assign({}, this.scrollbarProps, {
                  onScroll: this.onScroll,
                  ref: "scrollbarInstRef",
                  style: this.scrollContainerStyle,
                  contentStyle: this.contentStyle,
                  contentClass: this.contentClass,
                  theme: this.mergedTheme.peers.Scrollbar,
                  themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
                  builtinThemeOverrides:
                    this.inverted && this.cssVars.__invertScrollbar === "true"
                      ? {
                          colorHover: "rgba(255, 255, 255, .4)",
                          color: "rgba(255, 255, 255, .3)",
                        }
                      : void 0,
                }),
                this.$slots,
              ),
          o
            ? o === "bar"
              ? v(kr, {
                  clsPrefix: t,
                  class: n ? this.collapsedTriggerClass : this.triggerClass,
                  style: n ? this.collapsedTriggerStyle : this.triggerStyle,
                  onClick: this.handleTriggerClick,
                })
              : v(yr, {
                  clsPrefix: t,
                  class: n ? this.collapsedTriggerClass : this.triggerClass,
                  style: n ? this.collapsedTriggerStyle : this.triggerStyle,
                  onClick: this.handleTriggerClick,
                })
            : null,
          this.bordered
            ? v("div", { class: "".concat(t, "-layout-sider__border") })
            : null,
        )
      );
    },
  }),
  hn = Ge("n-tree-select"),
  qe = Ge("n-tree"),
  Cr = ne({
    name: "NTreeSwitcher",
    props: {
      clsPrefix: { type: String, required: !0 },
      indent: { type: Number, required: !0 },
      expanded: Boolean,
      selected: Boolean,
      hide: Boolean,
      loading: Boolean,
      onClick: Function,
      tmNode: { type: Object, required: !0 },
    },
    setup(e) {
      const { renderSwitcherIconRef: t } = me(qe, null);
      return () => {
        const { clsPrefix: n, expanded: o, hide: r, indent: l, onClick: s } = e;
        return v(
          "span",
          {
            "data-switcher": !0,
            class: [
              "".concat(n, "-tree-node-switcher"),
              o && "".concat(n, "-tree-node-switcher--expanded"),
              r && "".concat(n, "-tree-node-switcher--hide"),
            ],
            style: { width: "".concat(l, "px") },
            onClick: s,
          },
          v(
            "div",
            { class: "".concat(n, "-tree-node-switcher__icon") },
            v(Jt, null, {
              default: () => {
                if (e.loading)
                  return v(ao, {
                    clsPrefix: n,
                    key: "loading",
                    radius: 85,
                    strokeWidth: 20,
                  });
                const { value: f } = t;
                return f
                  ? f({
                      expanded: e.expanded,
                      selected: e.selected,
                      option: e.tmNode.rawNode,
                    })
                  : v(
                      St,
                      { clsPrefix: n, key: "switcher" },
                      { default: () => v(Lo, null) },
                    );
              },
            }),
          ),
        );
      };
    },
  }),
  wr = ne({
    name: "NTreeNodeCheckbox",
    props: {
      clsPrefix: { type: String, required: !0 },
      indent: { type: Number, required: !0 },
      right: Boolean,
      focusable: Boolean,
      disabled: Boolean,
      checked: Boolean,
      indeterminate: Boolean,
      onCheck: Function,
    },
    setup(e) {
      const t = me(qe);
      function n(r) {
        const { onCheck: l } = e;
        l && l(r);
      }
      function o(r) {
        n(r);
      }
      return { handleUpdateValue: o, mergedTheme: t.mergedThemeRef };
    },
    render() {
      const {
        clsPrefix: e,
        mergedTheme: t,
        checked: n,
        indeterminate: o,
        disabled: r,
        focusable: l,
        indent: s,
        handleUpdateValue: f,
      } = this;
      return v(
        "span",
        {
          class: [
            "".concat(e, "-tree-node-checkbox"),
            this.right && "".concat(e, "-tree-node-checkbox--right"),
          ],
          style: { width: "".concat(s, "px") },
          "data-checkbox": !0,
        },
        v(ar, {
          focusable: l,
          disabled: r,
          theme: t.peers.Checkbox,
          themeOverrides: t.peerOverrides.Checkbox,
          checked: n,
          indeterminate: o,
          onUpdateChecked: f,
        }),
      );
    },
  }),
  Sr = ne({
    name: "TreeNodeContent",
    props: {
      clsPrefix: { type: String, required: !0 },
      disabled: Boolean,
      checked: Boolean,
      selected: Boolean,
      onClick: Function,
      onDragstart: Function,
      tmNode: { type: Object, required: !0 },
      nodeProps: Object,
    },
    setup(e) {
      const {
          renderLabelRef: t,
          renderPrefixRef: n,
          renderSuffixRef: o,
          labelFieldRef: r,
        } = me(qe),
        l = M(null);
      function s(d) {
        const { onClick: a } = e;
        a && a(d);
      }
      function f(d) {
        s(d);
      }
      return {
        selfRef: l,
        renderLabel: t,
        renderPrefix: n,
        renderSuffix: o,
        labelField: r,
        handleClick: f,
      };
    },
    render() {
      const {
        clsPrefix: e,
        labelField: t,
        nodeProps: n,
        checked: o = !1,
        selected: r = !1,
        renderLabel: l,
        renderPrefix: s,
        renderSuffix: f,
        handleClick: d,
        onDragstart: a,
        tmNode: {
          rawNode: c,
          rawNode: { prefix: g, suffix: h, [t]: N },
        },
      } = this;
      return v(
        "span",
        Object.assign({}, n, {
          ref: "selfRef",
          class: [
            "".concat(e, "-tree-node-content"),
            n == null ? void 0 : n.class,
          ],
          onClick: d,
          draggable: a === void 0 ? void 0 : !0,
          onDragstart: a,
        }),
        s || g
          ? v(
              "div",
              { class: "".concat(e, "-tree-node-content__prefix") },
              s ? s({ option: c, selected: r, checked: o }) : ht(g),
            )
          : null,
        v(
          "div",
          { class: "".concat(e, "-tree-node-content__text") },
          l ? l({ option: c, selected: r, checked: o }) : ht(N),
        ),
        f || h
          ? v(
              "div",
              { class: "".concat(e, "-tree-node-content__suffix") },
              f ? f({ option: c, selected: r, checked: o }) : ht(h),
            )
          : null,
      );
    },
  });
function Gt({ position: e, offsetLevel: t, indent: n, el: o }) {
  const r = { position: "absolute", boxSizing: "border-box", right: 0 };
  if (e === "inside")
    (r.left = 0),
      (r.top = 0),
      (r.bottom = 0),
      (r.borderRadius = "inherit"),
      (r.boxShadow = "inset 0 0 0 2px var(--n-drop-mark-color)");
  else {
    const l = e === "before" ? "top" : "bottom";
    (r[l] = 0),
      (r.left = "".concat(o.offsetLeft + 6 - t * n, "px")),
      (r.height = "2px"),
      (r.backgroundColor = "var(--n-drop-mark-color)"),
      (r.transformOrigin = l),
      (r.borderRadius = "1px"),
      (r.transform = e === "before" ? "translateY(-4px)" : "translateY(4px)");
  }
  return v("div", { style: r });
}
function Rr({ dropPosition: e, node: t }) {
  return t.isLeaf === !1 || t.children ? !0 : e !== "inside";
}
function _r(e) {
  return D(() => (e.leafOnly ? "child" : e.checkStrategy));
}
function xe(e, t) {
  return !!e.rawNode[t];
}
function vn(e, t, n, o) {
  e == null ||
    e.forEach((r) => {
      n(r), vn(r[t], t, n, o), o(r);
    });
}
function Nr(e, t, n, o, r) {
  const l = new Set(),
    s = new Set(),
    f = [];
  return (
    vn(
      e,
      o,
      (d) => {
        if ((f.push(d), r(t, d))) {
          s.add(d[n]);
          for (let a = f.length - 2; a >= 0; --a)
            if (!l.has(f[a][n])) l.add(f[a][n]);
            else return;
        }
      },
      () => {
        f.pop();
      },
    ),
    { expandedKeys: Array.from(l), highlightKeySet: s }
  );
}
if (so && Image) {
  const e = new Image();
  e.src =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
}
function Tr(e, t, n, o, r) {
  const l = new Set(),
    s = new Set(),
    f = new Set(),
    d = [],
    a = [],
    c = [];
  function g(N) {
    N.forEach((k) => {
      if ((c.push(k), t(n, k))) {
        l.add(k[o]), f.add(k[o]);
        for (let y = c.length - 2; y >= 0; --y) {
          const m = c[y][o];
          if (!s.has(m)) s.add(m), l.has(m) && l.delete(m);
          else break;
        }
      }
      const w = k[r];
      w && g(w), c.pop();
    });
  }
  g(e);
  function h(N, k) {
    N.forEach((w) => {
      const y = w[o],
        m = l.has(y),
        K = s.has(y);
      if (!m && !K) return;
      const P = w[r];
      if (P)
        if (m) k.push(w);
        else {
          d.push(y);
          const p = Object.assign(Object.assign({}, w), { [r]: [] });
          k.push(p), h(P, p[r]);
        }
      else k.push(w);
    });
  }
  return h(e, a), { filteredTree: a, highlightKeySet: f, expandedKeys: d };
}
const gn = ne({
  name: "TreeNode",
  props: {
    clsPrefix: { type: String, required: !0 },
    tmNode: { type: Object, required: !0 },
  },
  setup(e) {
    const t = me(qe),
      {
        droppingNodeParentRef: n,
        droppingMouseNodeRef: o,
        draggingNodeRef: r,
        droppingPositionRef: l,
        droppingOffsetLevelRef: s,
        nodePropsRef: f,
        indentRef: d,
        blockLineRef: a,
        checkboxPlacementRef: c,
        checkOnClickRef: g,
        disabledFieldRef: h,
        showLineRef: N,
        renderSwitcherIconRef: k,
        overrideDefaultNodeClickBehaviorRef: w,
      } = t,
      y = re(() => !!e.tmNode.rawNode.checkboxDisabled),
      m = re(() => xe(e.tmNode, h.value)),
      K = re(() => t.disabledRef.value || m.value),
      P = D(() => {
        const { value: S } = f;
        if (S) return S({ option: e.tmNode.rawNode });
      }),
      p = M(null),
      x = { value: null };
    wt(() => {
      x.value = p.value.$el;
    });
    function b() {
      const S = () => {
        const { tmNode: A } = e;
        if (!A.isLeaf && !A.shallowLoaded) {
          if (!t.loadingKeysRef.value.has(A.key))
            t.loadingKeysRef.value.add(A.key);
          else return;
          const {
            onLoadRef: { value: H },
          } = t;
          H &&
            H(A.rawNode)
              .then((te) => {
                te !== !1 && t.handleSwitcherClick(A);
              })
              .finally(() => {
                t.loadingKeysRef.value.delete(A.key);
              });
        } else t.handleSwitcherClick(A);
      };
      k.value ? setTimeout(S, 0) : S();
    }
    const E = re(
        () =>
          !m.value &&
          t.selectableRef.value &&
          (t.internalTreeSelect
            ? t.mergedCheckStrategyRef.value !== "child" ||
              (t.multipleRef.value && t.cascadeRef.value) ||
              e.tmNode.isLeaf
            : !0),
      ),
      z = re(
        () =>
          t.checkableRef.value &&
          (t.cascadeRef.value ||
            t.mergedCheckStrategyRef.value !== "child" ||
            e.tmNode.isLeaf),
      ),
      V = re(() => t.displayedCheckedKeysRef.value.includes(e.tmNode.key)),
      F = re(() => {
        const { value: S } = z;
        if (!S) return !1;
        const { value: A } = g,
          { tmNode: H } = e;
        return typeof A == "boolean" ? !H.disabled && A : A(e.tmNode.rawNode);
      });
    function X(S) {
      const { value: A } = t.expandOnClickRef,
        { value: H } = E,
        { value: te } = F;
      if ((!H && !A && !te) || Qe(S, "checkbox") || Qe(S, "switcher")) return;
      const { tmNode: le } = e;
      H && t.handleSelect(le), A && !le.isLeaf && b(), te && B(!V.value);
    }
    function ae(S) {
      var A, H;
      if (!(Qe(S, "checkbox") || Qe(S, "switcher"))) {
        if (!K.value) {
          const te = w.value;
          let le = !1;
          if (te)
            switch (te({ option: e.tmNode.rawNode })) {
              case "toggleCheck":
                (le = !0), B(!V.value);
                break;
              case "toggleSelect":
                (le = !0), t.handleSelect(e.tmNode);
                break;
              case "toggleExpand":
                (le = !0), b(), (le = !0);
                break;
              case "none":
                (le = !0), (le = !0);
                return;
            }
          le || X(S);
        }
        (H = (A = P.value) === null || A === void 0 ? void 0 : A.onClick) ===
          null ||
          H === void 0 ||
          H.call(A, S);
      }
    }
    function R(S) {
      a.value || ae(S);
    }
    function T(S) {
      a.value && ae(S);
    }
    function B(S) {
      t.handleCheck(e.tmNode, S);
    }
    function q(S) {
      t.handleDragStart({ event: S, node: e.tmNode });
    }
    function J(S) {
      S.currentTarget === S.target &&
        t.handleDragEnter({ event: S, node: e.tmNode });
    }
    function W(S) {
      S.preventDefault(), t.handleDragOver({ event: S, node: e.tmNode });
    }
    function G(S) {
      t.handleDragEnd({ event: S, node: e.tmNode });
    }
    function ee(S) {
      S.currentTarget === S.target &&
        t.handleDragLeave({ event: S, node: e.tmNode });
    }
    function se(S) {
      S.preventDefault(),
        l.value !== null &&
          t.handleDrop({ event: S, node: e.tmNode, dropPosition: l.value });
    }
    const ye = D(() => {
      const { clsPrefix: S } = e,
        { value: A } = d;
      if (N.value) {
        const H = [];
        let te = e.tmNode.parent;
        for (; te; )
          te.isLastChild
            ? H.push(
                v(
                  "div",
                  { class: "".concat(S, "-tree-node-indent") },
                  v("div", { style: { width: "".concat(A, "px") } }),
                ),
              )
            : H.push(
                v(
                  "div",
                  {
                    class: [
                      "".concat(S, "-tree-node-indent"),
                      "".concat(S, "-tree-node-indent--show-line"),
                    ],
                  },
                  v("div", { style: { width: "".concat(A, "px") } }),
                ),
              ),
            (te = te.parent);
        return H.reverse();
      } else
        return co(
          e.tmNode.level,
          v(
            "div",
            { class: "".concat(e.clsPrefix, "-tree-node-indent") },
            v("div", { style: { width: "".concat(A, "px") } }),
          ),
        );
    });
    return {
      showDropMark: re(() => {
        const { value: S } = r;
        if (!S) return;
        const { value: A } = l;
        if (!A) return;
        const { value: H } = o;
        if (!H) return;
        const { tmNode: te } = e;
        return te.key === H.key;
      }),
      showDropMarkAsParent: re(() => {
        const { value: S } = n;
        if (!S) return !1;
        const { tmNode: A } = e,
          { value: H } = l;
        return H === "before" || H === "after" ? S.key === A.key : !1;
      }),
      pending: re(() => t.pendingNodeKeyRef.value === e.tmNode.key),
      loading: re(() => t.loadingKeysRef.value.has(e.tmNode.key)),
      highlight: re(() => {
        var S;
        return (S = t.highlightKeySetRef.value) === null || S === void 0
          ? void 0
          : S.has(e.tmNode.key);
      }),
      checked: V,
      indeterminate: re(() =>
        t.displayedIndeterminateKeysRef.value.includes(e.tmNode.key),
      ),
      selected: re(() => t.mergedSelectedKeysRef.value.includes(e.tmNode.key)),
      expanded: re(() => t.mergedExpandedKeysRef.value.includes(e.tmNode.key)),
      disabled: K,
      checkable: z,
      mergedCheckOnClick: F,
      checkboxDisabled: y,
      selectable: E,
      expandOnClick: t.expandOnClickRef,
      internalScrollable: t.internalScrollableRef,
      draggable: t.draggableRef,
      blockLine: a,
      nodeProps: P,
      checkboxFocusable: t.internalCheckboxFocusableRef,
      droppingPosition: l,
      droppingOffsetLevel: s,
      indent: d,
      checkboxPlacement: c,
      showLine: N,
      contentInstRef: p,
      contentElRef: x,
      indentNodes: ye,
      handleCheck: B,
      handleDrop: se,
      handleDragStart: q,
      handleDragEnter: J,
      handleDragOver: W,
      handleDragEnd: G,
      handleDragLeave: ee,
      handleLineClick: T,
      handleContentClick: R,
      handleSwitcherClick: b,
    };
  },
  render() {
    const {
        tmNode: e,
        clsPrefix: t,
        checkable: n,
        expandOnClick: o,
        selectable: r,
        selected: l,
        checked: s,
        highlight: f,
        draggable: d,
        blockLine: a,
        indent: c,
        indentNodes: g,
        disabled: h,
        pending: N,
        internalScrollable: k,
        nodeProps: w,
        checkboxPlacement: y,
      } = this,
      m =
        d && !h
          ? {
              onDragenter: this.handleDragEnter,
              onDragleave: this.handleDragLeave,
              onDragend: this.handleDragEnd,
              onDrop: this.handleDrop,
              onDragover: this.handleDragOver,
            }
          : void 0,
      K = k ? on(e.key) : void 0,
      P = y === "right",
      p = n
        ? v(wr, {
            indent: c,
            right: P,
            focusable: this.checkboxFocusable,
            disabled: h || this.checkboxDisabled,
            clsPrefix: t,
            checked: this.checked,
            indeterminate: this.indeterminate,
            onCheck: this.handleCheck,
          })
        : null;
    return v(
      "div",
      Object.assign({ class: "".concat(t, "-tree-node-wrapper") }, m),
      v(
        "div",
        Object.assign({}, a ? w : void 0, {
          class: [
            "".concat(t, "-tree-node"),
            {
              ["".concat(t, "-tree-node--selected")]: l,
              ["".concat(t, "-tree-node--checkable")]: n,
              ["".concat(t, "-tree-node--highlight")]: f,
              ["".concat(t, "-tree-node--pending")]: N,
              ["".concat(t, "-tree-node--disabled")]: h,
              ["".concat(t, "-tree-node--selectable")]: r,
              ["".concat(t, "-tree-node--clickable")]:
                r || o || this.mergedCheckOnClick,
            },
            w == null ? void 0 : w.class,
          ],
          "data-key": K,
          draggable: d && a,
          onClick: this.handleLineClick,
          onDragstart: d && a && !h ? this.handleDragStart : void 0,
        }),
        g,
        e.isLeaf && this.showLine
          ? v(
              "div",
              {
                class: [
                  "".concat(t, "-tree-node-indent"),
                  "".concat(t, "-tree-node-indent--show-line"),
                  e.isLeaf && "".concat(t, "-tree-node-indent--is-leaf"),
                  e.isLastChild &&
                    "".concat(t, "-tree-node-indent--last-child"),
                ],
              },
              v("div", { style: { width: "".concat(c, "px") } }),
            )
          : v(Cr, {
              clsPrefix: t,
              expanded: this.expanded,
              selected: l,
              loading: this.loading,
              hide: e.isLeaf,
              tmNode: this.tmNode,
              indent: c,
              onClick: this.handleSwitcherClick,
            }),
        P ? null : p,
        v(Sr, {
          ref: "contentInstRef",
          clsPrefix: t,
          checked: s,
          selected: l,
          onClick: this.handleContentClick,
          nodeProps: a ? void 0 : w,
          onDragstart: d && !a && !h ? this.handleDragStart : void 0,
          tmNode: e,
        }),
        d
          ? this.showDropMark
            ? Gt({
                el: this.contentElRef.value,
                position: this.droppingPosition,
                offsetLevel: this.droppingOffsetLevel,
                indent: c,
              })
            : this.showDropMarkAsParent
              ? Gt({
                  el: this.contentElRef.value,
                  position: "inside",
                  offsetLevel: this.droppingOffsetLevel,
                  indent: c,
                })
              : null
          : null,
        P ? p : null,
      ),
    );
  },
});
function Ir({
  props: e,
  fNodesRef: t,
  mergedExpandedKeysRef: n,
  mergedSelectedKeysRef: o,
  mergedCheckedKeysRef: r,
  handleCheck: l,
  handleSelect: s,
  handleSwitcherClick: f,
}) {
  const { value: d } = o,
    a = me(hn, null),
    c = a ? a.pendingNodeKeyRef : M(d.length ? d[d.length - 1] : null);
  function g(h) {
    var N;
    if (!e.keyboard) return { enterBehavior: null };
    const { value: k } = c;
    let w = null;
    if (k === null) {
      if (
        ((h.key === "ArrowDown" || h.key === "ArrowUp") && h.preventDefault(),
        ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(h.key) &&
          k === null)
      ) {
        const { value: y } = t;
        let m = 0;
        for (; m < y.length; ) {
          if (!y[m].disabled) {
            c.value = y[m].key;
            break;
          }
          m += 1;
        }
      }
    } else {
      const { value: y } = t;
      let m = y.findIndex((K) => K.key === k);
      if (!~m) return { enterBehavior: null };
      if (h.key === "Enter") {
        const K = y[m];
        switch (
          ((w =
            ((N = e.overrideDefaultNodeClickBehavior) === null || N === void 0
              ? void 0
              : N.call(e, { option: K.rawNode })) || null),
          w)
        ) {
          case "toggleCheck":
            l(K, !r.value.includes(K.key));
            break;
          case "toggleSelect":
            s(K);
            break;
          case "toggleExpand":
            f(K);
            break;
          case "none":
            break;
          case "default":
          default:
            (w = "default"), s(K);
        }
      } else if (h.key === "ArrowDown")
        for (h.preventDefault(), m += 1; m < y.length; ) {
          if (!y[m].disabled) {
            c.value = y[m].key;
            break;
          }
          m += 1;
        }
      else if (h.key === "ArrowUp")
        for (h.preventDefault(), m -= 1; m >= 0; ) {
          if (!y[m].disabled) {
            c.value = y[m].key;
            break;
          }
          m -= 1;
        }
      else if (h.key === "ArrowLeft") {
        const K = y[m];
        if (K.isLeaf || !n.value.includes(k)) {
          const P = K.getParent();
          P && (c.value = P.key);
        } else f(K);
      } else if (h.key === "ArrowRight") {
        const K = y[m];
        if (K.isLeaf) return { enterBehavior: null };
        if (!n.value.includes(k)) f(K);
        else
          for (m += 1; m < y.length; ) {
            if (!y[m].disabled) {
              c.value = y[m].key;
              break;
            }
            m += 1;
          }
      }
    }
    return { enterBehavior: w };
  }
  return { pendingNodeKeyRef: c, handleKeydown: g };
}
const Lr = ne({
    name: "TreeMotionWrapper",
    props: {
      clsPrefix: { type: String, required: !0 },
      height: Number,
      nodes: { type: Array, required: !0 },
      mode: { type: String, required: !0 },
      onAfterEnter: { type: Function, required: !0 },
    },
    render() {
      const { clsPrefix: e } = this;
      return v(
        uo,
        {
          onAfterEnter: this.onAfterEnter,
          appear: !0,
          reverse: this.mode === "collapse",
        },
        {
          default: () =>
            v(
              "div",
              {
                class: [
                  "".concat(e, "-tree-motion-wrapper"),
                  "".concat(e, "-tree-motion-wrapper--").concat(this.mode),
                ],
                style: { height: _e(this.height) },
              },
              this.nodes.map((t) => v(gn, { clsPrefix: e, tmNode: t })),
            ),
        },
      );
    },
  }),
  xt = Zt(),
  Kr = _("tree", "\n font-size: var(--n-font-size);\n outline: none;\n", [
    U("ul, li", "\n margin: 0;\n padding: 0;\n list-style: none;\n "),
    U(">", [_("tree-node", [U("&:first-child", "margin-top: 0;")])]),
    _("tree-motion-wrapper", [
      O("expand", [zt({ duration: "0.2s" })]),
      O("collapse", [zt({ duration: "0.2s", reverse: !0 })]),
    ]),
    _(
      "tree-node-wrapper",
      "\n box-sizing: border-box;\n padding: var(--n-node-wrapper-padding);\n ",
    ),
    _(
      "tree-node",
      "\n transform: translate3d(0,0,0);\n position: relative;\n display: flex;\n border-radius: var(--n-node-border-radius);\n transition: background-color .3s var(--n-bezier);\n ",
      [
        O("highlight", [
          _("tree-node-content", [
            $(
              "text",
              "border-bottom-color: var(--n-node-text-color-disabled);",
            ),
          ]),
        ]),
        O("disabled", [
          _(
            "tree-node-content",
            "\n color: var(--n-node-text-color-disabled);\n cursor: not-allowed;\n ",
          ),
        ]),
        $e("disabled", [
          O("clickable", [_("tree-node-content", "\n cursor: pointer;\n ")]),
        ]),
      ],
    ),
    O("block-node", [_("tree-node-content", "\n flex: 1;\n min-width: 0;\n ")]),
    $e("block-line", [
      _("tree-node", [
        $e("disabled", [
          _("tree-node-content", [
            U("&:hover", "background: var(--n-node-color-hover);"),
          ]),
          O("selectable", [
            _("tree-node-content", [
              U("&:active", "background: var(--n-node-color-pressed);"),
            ]),
          ]),
          O("pending", [
            _(
              "tree-node-content",
              "\n background: var(--n-node-color-hover);\n ",
            ),
          ]),
          O("selected", [
            _("tree-node-content", "background: var(--n-node-color-active);"),
          ]),
        ]),
        O("selected", [
          _("tree-node-content", "background: var(--n-node-color-active);"),
        ]),
      ]),
    ]),
    O("block-line", [
      _("tree-node", [
        $e("disabled", [
          U("&:hover", "background: var(--n-node-color-hover);"),
          O("pending", "\n background: var(--n-node-color-hover);\n "),
          O("selectable", [
            $e("selected", [
              U("&:active", "background: var(--n-node-color-pressed);"),
            ]),
          ]),
          O("selected", "background: var(--n-node-color-active);"),
        ]),
        O("selected", "background: var(--n-node-color-active);"),
        O("disabled", "\n cursor: not-allowed;\n "),
      ]),
    ]),
    _("tree-node-indent", "\n flex-grow: 0;\n flex-shrink: 0;\n ", [
      O("show-line", "position: relative", [
        U(
          "&::before",
          '\n position: absolute;\n left: 50%;\n border-left: 1px solid var(--n-line-color);\n transition: border-color .3s var(--n-bezier);\n transform: translate(-50%);\n content: "";\n top: var(--n-line-offset-top);\n bottom: var(--n-line-offset-bottom);\n ',
        ),
        O("last-child", [U("&::before", "\n bottom: 50%;\n ")]),
        O("is-leaf", [
          U(
            "&::after",
            '\n position: absolute;\n content: "";\n left: calc(50% + 0.5px);\n right: 0;\n bottom: 50%;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-line-color);\n ',
          ),
        ]),
      ]),
      $e("show-line", "height: 0;"),
    ]),
    _(
      "tree-node-switcher",
      "\n cursor: pointer;\n display: inline-flex;\n flex-shrink: 0;\n height: var(--n-node-content-height);\n align-items: center;\n justify-content: center;\n transition: transform .15s var(--n-bezier);\n vertical-align: bottom;\n ",
      [
        $(
          "icon",
          "\n position: relative;\n height: 14px;\n width: 14px;\n display: flex;\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n font-size: 14px;\n ",
          [
            _("icon", [xt]),
            _(
              "base-loading",
              "\n color: var(--n-loading-color);\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n ",
              [xt],
            ),
            _("base-icon", [xt]),
          ],
        ),
        O("hide", "visibility: hidden;"),
        O("expanded", "transform: rotate(90deg);"),
      ],
    ),
    _(
      "tree-node-checkbox",
      "\n display: inline-flex;\n height: var(--n-node-content-height);\n vertical-align: bottom;\n align-items: center;\n justify-content: center;\n ",
    ),
    _(
      "tree-node-content",
      "\n user-select: none;\n position: relative;\n display: inline-flex;\n align-items: center;\n min-height: var(--n-node-content-height);\n box-sizing: border-box;\n line-height: var(--n-line-height);\n vertical-align: bottom;\n padding: 0 6px 0 4px;\n cursor: default;\n border-radius: var(--n-node-border-radius);\n color: var(--n-node-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",
      [
        U("&:last-child", "margin-bottom: 0;"),
        $("prefix", "\n display: inline-flex;\n margin-right: 8px;\n "),
        $(
          "text",
          "\n border-bottom: 1px solid #0000;\n transition: border-color .3s var(--n-bezier);\n flex-grow: 1;\n max-width: 100%;\n ",
        ),
        $("suffix", "\n display: inline-flex;\n "),
      ],
    ),
    $("empty", "margin: auto;"),
  ]);
var Er = function (e, t, n, o) {
  function r(l) {
    return l instanceof n
      ? l
      : new n(function (s) {
          s(l);
        });
  }
  return new (n || (n = Promise))(function (l, s) {
    function f(c) {
      try {
        a(o.next(c));
      } catch (g) {
        s(g);
      }
    }
    function d(c) {
      try {
        a(o.throw(c));
      } catch (g) {
        s(g);
      }
    }
    function a(c) {
      c.done ? l(c.value) : r(c.value).then(f, d);
    }
    a((o = o.apply(e, [])).next());
  });
};
function qt(e, t, n, o) {
  return {
    getIsGroup() {
      return !1;
    },
    getKey(l) {
      return l[e];
    },
    getChildren: o || ((l) => l[t]),
    getDisabled(l) {
      return !!(l[n] || l.checkboxDisabled);
    },
  };
}
const Pr = {
    allowCheckingNotLoaded: Boolean,
    filter: Function,
    defaultExpandAll: Boolean,
    expandedKeys: Array,
    keyField: { type: String, default: "key" },
    labelField: { type: String, default: "label" },
    childrenField: { type: String, default: "children" },
    disabledField: { type: String, default: "disabled" },
    defaultExpandedKeys: { type: Array, default: () => [] },
    indeterminateKeys: Array,
    renderSwitcherIcon: Function,
    onUpdateIndeterminateKeys: [Function, Array],
    "onUpdate:indeterminateKeys": [Function, Array],
    onUpdateExpandedKeys: [Function, Array],
    "onUpdate:expandedKeys": [Function, Array],
    overrideDefaultNodeClickBehavior: Function,
  },
  Dr = Object.assign(
    Object.assign(
      Object.assign(Object.assign({}, ge.props), {
        accordion: Boolean,
        showIrrelevantNodes: { type: Boolean, default: !0 },
        data: { type: Array, default: () => [] },
        expandOnDragenter: { type: Boolean, default: !0 },
        expandOnClick: Boolean,
        checkOnClick: { type: [Boolean, Function], default: !1 },
        cancelable: { type: Boolean, default: !0 },
        checkable: Boolean,
        draggable: Boolean,
        blockNode: Boolean,
        blockLine: Boolean,
        showLine: Boolean,
        disabled: Boolean,
        checkedKeys: Array,
        defaultCheckedKeys: { type: Array, default: () => [] },
        selectedKeys: Array,
        defaultSelectedKeys: { type: Array, default: () => [] },
        multiple: Boolean,
        pattern: { type: String, default: "" },
        onLoad: Function,
        cascade: Boolean,
        selectable: { type: Boolean, default: !0 },
        scrollbarProps: Object,
        indent: { type: Number, default: 24 },
        allowDrop: { type: Function, default: Rr },
        animated: { type: Boolean, default: !0 },
        checkboxPlacement: { type: String, default: "left" },
        virtualScroll: Boolean,
        watchProps: Array,
        renderLabel: Function,
        renderPrefix: Function,
        renderSuffix: Function,
        nodeProps: Function,
        keyboard: { type: Boolean, default: !0 },
        getChildren: Function,
        onDragenter: [Function, Array],
        onDragleave: [Function, Array],
        onDragend: [Function, Array],
        onDragstart: [Function, Array],
        onDragover: [Function, Array],
        onDrop: [Function, Array],
        onUpdateCheckedKeys: [Function, Array],
        "onUpdate:checkedKeys": [Function, Array],
        onUpdateSelectedKeys: [Function, Array],
        "onUpdate:selectedKeys": [Function, Array],
      }),
      Pr,
    ),
    {
      internalTreeSelect: Boolean,
      internalScrollable: Boolean,
      internalScrollablePadding: String,
      internalRenderEmpty: Function,
      internalHighlightKeySet: Object,
      internalUnifySelectCheck: Boolean,
      internalCheckboxFocusable: { type: Boolean, default: !0 },
      internalFocusable: { type: Boolean, default: !0 },
      checkStrategy: { type: String, default: "all" },
      leafOnly: Boolean,
    },
  ),
  Ar = ne({
    name: "Tree",
    props: Dr,
    setup(e) {
      const {
          mergedClsPrefixRef: t,
          inlineThemeDisabled: n,
          mergedRtlRef: o,
        } = je(e),
        r = Qt("Tree", o, t),
        l = ge("Tree", "-tree", Kr, fo, e, t),
        s = M(null),
        f = M(null),
        d = M(null);
      function a() {
        var i;
        return (i = d.value) === null || i === void 0 ? void 0 : i.listElRef;
      }
      function c() {
        var i;
        return (i = d.value) === null || i === void 0 ? void 0 : i.itemsElRef;
      }
      const g = D(() => {
          const { filter: i } = e;
          if (i) return i;
          const { labelField: u } = e;
          return (C, I) => {
            if (!C.length) return !0;
            const L = I[u];
            return typeof L == "string"
              ? L.toLowerCase().includes(C.toLowerCase())
              : !1;
          };
        }),
        h = D(() => {
          const { pattern: i } = e;
          return i
            ? !i.length || !g.value
              ? {
                  filteredTree: e.data,
                  highlightKeySet: null,
                  expandedKeys: void 0,
                }
              : Tr(e.data, g.value, i, e.keyField, e.childrenField)
            : {
                filteredTree: e.data,
                highlightKeySet: null,
                expandedKeys: void 0,
              };
        }),
        N = D(() =>
          Ut(
            e.showIrrelevantNodes ? e.data : h.value.filteredTree,
            qt(e.keyField, e.childrenField, e.disabledField, e.getChildren),
          ),
        ),
        k = me(hn, null),
        w = e.internalTreeSelect
          ? k.dataTreeMate
          : D(() =>
              e.showIrrelevantNodes
                ? N.value
                : Ut(
                    e.data,
                    qt(
                      e.keyField,
                      e.childrenField,
                      e.disabledField,
                      e.getChildren,
                    ),
                  ),
            ),
        { watchProps: y } = e,
        m = M([]);
      y != null && y.includes("defaultCheckedKeys")
        ? Fe(() => {
            m.value = e.defaultCheckedKeys;
          })
        : (m.value = e.defaultCheckedKeys);
      const K = j(e, "checkedKeys"),
        P = Me(K, m),
        p = D(() =>
          w.value.getCheckedKeys(P.value, {
            cascade: e.cascade,
            allowNotLoaded: e.allowCheckingNotLoaded,
          }),
        ),
        x = _r(e),
        b = D(() => p.value.checkedKeys),
        E = D(() => {
          const { indeterminateKeys: i } = e;
          return i !== void 0 ? i : p.value.indeterminateKeys;
        }),
        z = M([]);
      y != null && y.includes("defaultSelectedKeys")
        ? Fe(() => {
            z.value = e.defaultSelectedKeys;
          })
        : (z.value = e.defaultSelectedKeys);
      const V = j(e, "selectedKeys"),
        F = Me(V, z),
        X = M([]),
        ae = (i) => {
          X.value = e.defaultExpandAll
            ? w.value.getNonLeafKeys()
            : i === void 0
              ? e.defaultExpandedKeys
              : i;
        };
      y != null && y.includes("defaultExpandedKeys")
        ? Fe(() => {
            ae(void 0);
          })
        : Fe(() => {
            ae(e.defaultExpandedKeys);
          });
      const R = j(e, "expandedKeys"),
        T = Me(R, X),
        B = D(() => N.value.getFlattenedNodes(T.value)),
        { pendingNodeKeyRef: q, handleKeydown: J } = Ir({
          props: e,
          mergedCheckedKeysRef: P,
          mergedSelectedKeysRef: F,
          fNodesRef: B,
          mergedExpandedKeysRef: T,
          handleCheck: dt,
          handleSelect: ct,
          handleSwitcherClick: It,
        });
      let W = null,
        G = null;
      const ee = M(new Set()),
        se = D(() => e.internalHighlightKeySet || h.value.highlightKeySet),
        ye = Me(se, ee),
        S = M(new Set()),
        A = D(() => T.value.filter((i) => !S.value.has(i)));
      let H = 0;
      const te = M(null),
        le = M(null),
        Ie = M(null),
        Le = M(null),
        Ke = M(0),
        rt = D(() => {
          const { value: i } = le;
          return i ? i.parent : null;
        });
      let lt = !1;
      Ze(
        j(e, "data"),
        () => {
          (lt = !0),
            We(() => {
              lt = !1;
            }),
            S.value.clear(),
            (q.value = null),
            Ue();
        },
        { deep: !1 },
      );
      let it = !1;
      const at = () => {
        (it = !0),
          We(() => {
            it = !1;
          });
      };
      let He;
      Ze(j(e, "pattern"), (i, u) => {
        if (e.showIrrelevantNodes)
          if (((He = void 0), i)) {
            const { expandedKeys: C, highlightKeySet: I } = Nr(
              e.data,
              e.pattern,
              e.keyField,
              e.childrenField,
              g.value,
            );
            (ee.value = I),
              at(),
              Pe(C, ce(C), { node: null, action: "filter" });
          } else ee.value = new Set();
        else if (!i.length)
          He !== void 0 &&
            (at(), Pe(He, ce(He), { node: null, action: "filter" }));
        else {
          u.length || (He = T.value);
          const { expandedKeys: C } = h.value;
          C !== void 0 &&
            (at(), Pe(C, ce(C), { node: null, action: "filter" }));
        }
      });
      function Nt(i) {
        return Er(this, void 0, void 0, function* () {
          const { onLoad: u } = e;
          if (!u) {
            yield Promise.resolve();
            return;
          }
          const { value: C } = S;
          if (!C.has(i.key)) {
            C.add(i.key);
            try {
              (yield u(i.rawNode)) === !1 && De();
            } catch (I) {
              console.error(I), De();
            }
            C.delete(i.key);
          }
        });
      }
      Fe(() => {
        var i;
        const { value: u } = N;
        if (!u) return;
        const { getNode: C } = u;
        (i = T.value) === null ||
          i === void 0 ||
          i.forEach((I) => {
            const L = C(I);
            L && !L.shallowLoaded && Nt(L);
          });
      });
      const Ee = M(!1),
        ke = M([]);
      Ze(A, (i, u) => {
        if (!e.animated || it) {
          We(Ye);
          return;
        }
        if (lt) return;
        const C = Re(l.value.self.nodeHeight),
          I = new Set(u);
        let L = null,
          Q = null;
        for (const Z of i)
          if (!I.has(Z)) {
            if (L !== null) return;
            L = Z;
          }
        const de = new Set(i);
        for (const Z of u)
          if (!de.has(Z)) {
            if (Q !== null) return;
            Q = Z;
          }
        if (L === null && Q === null) return;
        const { virtualScroll: ue } = e,
          ze = (ue ? d.value.listElRef : s.value).offsetHeight,
          Oe = Math.ceil(ze / C) + 1;
        let fe;
        if (
          (L !== null && (fe = u),
          Q !== null &&
            (fe === void 0 ? (fe = i) : (fe = fe.filter((Z) => Z !== Q))),
          (Ee.value = !0),
          (ke.value = N.value.getFlattenedNodes(fe)),
          L !== null)
        ) {
          const Z = ke.value.findIndex((he) => he.key === L);
          if (~Z) {
            const he = ke.value[Z].children;
            if (he) {
              const be = Ct(he, i);
              ke.value.splice(Z + 1, 0, {
                __motion: !0,
                mode: "expand",
                height: ue ? be.length * C : void 0,
                nodes: ue ? be.slice(0, Oe) : be,
              });
            }
          }
        }
        if (Q !== null) {
          const Z = ke.value.findIndex((he) => he.key === Q);
          if (~Z) {
            const he = ke.value[Z].children;
            if (!he) return;
            Ee.value = !0;
            const be = Ct(he, i);
            ke.value.splice(Z + 1, 0, {
              __motion: !0,
              mode: "collapse",
              height: ue ? be.length * C : void 0,
              nodes: ue ? be.slice(0, Oe) : be,
            });
          }
        }
      });
      const bn = D(() => jo(B.value)),
        mn = D(() => (Ee.value ? ke.value : B.value));
      function Ye() {
        const { value: i } = f;
        i && i.sync();
      }
      function yn() {
        (Ee.value = !1), e.virtualScroll && We(Ye);
      }
      function ce(i) {
        const { getNode: u } = w.value;
        return i.map((C) => {
          var I;
          return (
            ((I = u(C)) === null || I === void 0 ? void 0 : I.rawNode) || null
          );
        });
      }
      function Pe(i, u, C) {
        const { "onUpdate:expandedKeys": I, onUpdateExpandedKeys: L } = e;
        (X.value = i), I && oe(I, i, u, C), L && oe(L, i, u, C);
      }
      function Tt(i, u, C) {
        const { "onUpdate:checkedKeys": I, onUpdateCheckedKeys: L } = e;
        (m.value = i), L && oe(L, i, u, C), I && oe(I, i, u, C);
      }
      function kn(i, u) {
        const {
          "onUpdate:indeterminateKeys": C,
          onUpdateIndeterminateKeys: I,
        } = e;
        C && oe(C, i, u), I && oe(I, i, u);
      }
      function st(i, u, C) {
        const { "onUpdate:selectedKeys": I, onUpdateSelectedKeys: L } = e;
        (z.value = i), L && oe(L, i, u, C), I && oe(I, i, u, C);
      }
      function xn(i) {
        const { onDragenter: u } = e;
        u && oe(u, i);
      }
      function pn(i) {
        const { onDragleave: u } = e;
        u && oe(u, i);
      }
      function Cn(i) {
        const { onDragend: u } = e;
        u && oe(u, i);
      }
      function wn(i) {
        const { onDragstart: u } = e;
        u && oe(u, i);
      }
      function Sn(i) {
        const { onDragover: u } = e;
        u && oe(u, i);
      }
      function Rn(i) {
        const { onDrop: u } = e;
        u && oe(u, i);
      }
      function Ue() {
        _n(), we();
      }
      function _n() {
        te.value = null;
      }
      function we() {
        (Ke.value = 0),
          (le.value = null),
          (Ie.value = null),
          (Le.value = null),
          De();
      }
      function De() {
        W && (window.clearTimeout(W), (W = null)), (G = null);
      }
      function dt(i, u) {
        if (e.disabled || xe(i, e.disabledField)) return;
        if (e.internalUnifySelectCheck && !e.multiple) {
          ct(i);
          return;
        }
        const C = u ? "check" : "uncheck",
          { checkedKeys: I, indeterminateKeys: L } = w.value[C](
            i.key,
            b.value,
            {
              cascade: e.cascade,
              checkStrategy: x.value,
              allowNotLoaded: e.allowCheckingNotLoaded,
            },
          );
        Tt(I, ce(I), { node: i.rawNode, action: C }), kn(L, ce(L));
      }
      function Nn(i) {
        if (e.disabled) return;
        const { key: u } = i,
          { value: C } = T,
          I = C.findIndex((L) => L === u);
        if (~I) {
          const L = Array.from(C);
          L.splice(I, 1), Pe(L, ce(L), { node: i.rawNode, action: "collapse" });
        } else {
          const L = N.value.getNode(u);
          if (!L || L.isLeaf) return;
          let Q;
          if (e.accordion) {
            const de = new Set(i.siblings.map(({ key: ue }) => ue));
            (Q = C.filter((ue) => !de.has(ue))), Q.push(u);
          } else Q = C.concat(u);
          Pe(Q, ce(Q), { node: i.rawNode, action: "expand" });
        }
      }
      function It(i) {
        e.disabled || Ee.value || Nn(i);
      }
      function ct(i) {
        if (!(e.disabled || !e.selectable)) {
          if (((q.value = i.key), e.internalUnifySelectCheck)) {
            const {
              value: { checkedKeys: u, indeterminateKeys: C },
            } = p;
            e.multiple
              ? dt(i, !(u.includes(i.key) || C.includes(i.key)))
              : Tt([i.key], ce([i.key]), { node: i.rawNode, action: "check" });
          }
          if (e.multiple) {
            const u = Array.from(F.value),
              C = u.findIndex((I) => I === i.key);
            ~C ? e.cancelable && u.splice(C, 1) : ~C || u.push(i.key),
              st(u, ce(u), {
                node: i.rawNode,
                action: ~C ? "unselect" : "select",
              });
          } else
            F.value.includes(i.key)
              ? e.cancelable &&
                st([], [], { node: i.rawNode, action: "unselect" })
              : st([i.key], ce([i.key]), { node: i.rawNode, action: "select" });
        }
      }
      function Tn(i) {
        if ((W && (window.clearTimeout(W), (W = null)), i.isLeaf)) return;
        G = i.key;
        const u = () => {
          if (G !== i.key) return;
          const { value: C } = Ie;
          if (C && C.key === i.key && !T.value.includes(i.key)) {
            const I = T.value.concat(i.key);
            Pe(I, ce(I), { node: i.rawNode, action: "expand" });
          }
          (W = null), (G = null);
        };
        i.shallowLoaded
          ? (W = window.setTimeout(() => {
              u();
            }, 1e3))
          : (W = window.setTimeout(() => {
              Nt(i).then(() => {
                u();
              });
            }, 1e3));
      }
      function In({ event: i, node: u }) {
        !e.draggable ||
          e.disabled ||
          xe(u, e.disabledField) ||
          (Lt({ event: i, node: u }, !1), xn({ event: i, node: u.rawNode }));
      }
      function Ln({ event: i, node: u }) {
        !e.draggable ||
          e.disabled ||
          xe(u, e.disabledField) ||
          pn({ event: i, node: u.rawNode });
      }
      function Kn(i) {
        i.target === i.currentTarget && we();
      }
      function En({ event: i, node: u }) {
        Ue(),
          !(!e.draggable || e.disabled || xe(u, e.disabledField)) &&
            Cn({ event: i, node: u.rawNode });
      }
      function Pn({ event: i, node: u }) {
        !e.draggable ||
          e.disabled ||
          xe(u, e.disabledField) ||
          ((H = i.clientX), (te.value = u), wn({ event: i, node: u.rawNode }));
      }
      function Lt({ event: i, node: u }, C = !0) {
        var I;
        if (!e.draggable || e.disabled || xe(u, e.disabledField)) return;
        const { value: L } = te;
        if (!L) return;
        const { allowDrop: Q, indent: de } = e;
        C && Sn({ event: i, node: u.rawNode });
        const ue = i.currentTarget,
          { height: ze, top: Oe } = ue.getBoundingClientRect(),
          fe = i.clientY - Oe;
        let Z;
        Q({ node: u.rawNode, dropPosition: "inside", phase: "drag" })
          ? fe <= 8
            ? (Z = "before")
            : fe >= ze - 8
              ? (Z = "after")
              : (Z = "inside")
          : fe <= ze / 2
            ? (Z = "before")
            : (Z = "after");
        const { value: be } = bn;
        let Y, ie;
        const Be = be(u.key);
        if (Be === null) {
          we();
          return;
        }
        let Xe = !1;
        Z === "inside"
          ? ((Y = u), (ie = "inside"))
          : Z === "before"
            ? u.isFirstChild
              ? ((Y = u), (ie = "before"))
              : ((Y = B.value[Be - 1]), (ie = "after"))
            : ((Y = u), (ie = "after")),
          !Y.isLeaf &&
            T.value.includes(Y.key) &&
            ((Xe = !0),
            ie === "after" &&
              ((Y = B.value[Be + 1]),
              Y ? (ie = "before") : ((Y = u), (ie = "inside"))));
        const Et = Y;
        if (
          ((Ie.value = Et),
          !Xe && L.isLastChild && L.key === Y.key && (ie = "after"),
          ie === "after")
        ) {
          let Pt = H - i.clientX,
            ut = 0;
          for (; Pt >= de / 2 && Y.parent !== null && Y.isLastChild && ut < 1; )
            (Pt -= de), (ut += 1), (Y = Y.parent);
          Ke.value = ut;
        } else Ke.value = 0;
        if (
          (L.contains(Y) ||
            (ie === "inside" &&
              ((I = L.parent) === null || I === void 0 ? void 0 : I.key) ===
                Y.key)) &&
          !(L.key === Et.key && L.key === Y.key)
        ) {
          we();
          return;
        }
        if (!Q({ node: Y.rawNode, dropPosition: ie, phase: "drag" })) {
          we();
          return;
        }
        if (L.key === Y.key) De();
        else if (G !== Y.key)
          if (ie === "inside") {
            if (e.expandOnDragenter) {
              if ((Tn(Y), !Y.shallowLoaded && G !== Y.key)) {
                Ue();
                return;
              }
            } else if (!Y.shallowLoaded) {
              Ue();
              return;
            }
          } else De();
        else ie !== "inside" && De();
        (Le.value = ie), (le.value = Y);
      }
      function Dn({ event: i, node: u, dropPosition: C }) {
        if (!e.draggable || e.disabled || xe(u, e.disabledField)) return;
        const { value: I } = te,
          { value: L } = le,
          { value: Q } = Le;
        if (
          !(!I || !L || !Q) &&
          e.allowDrop({ node: L.rawNode, dropPosition: Q, phase: "drag" }) &&
          I.key !== L.key
        ) {
          if (Q === "before") {
            const de = I.getNext({ includeDisabled: !0 });
            if (de && de.key === L.key) {
              we();
              return;
            }
          }
          if (Q === "after") {
            const de = I.getPrev({ includeDisabled: !0 });
            if (de && de.key === L.key) {
              we();
              return;
            }
          }
          Rn({
            event: i,
            node: L.rawNode,
            dragNode: I.rawNode,
            dropPosition: C,
          }),
            Ue();
        }
      }
      function An() {
        Ye();
      }
      function zn() {
        Ye();
      }
      function On(i) {
        var u;
        if (e.virtualScroll || e.internalScrollable) {
          const { value: C } = f;
          if (
            !(
              (u = C == null ? void 0 : C.containerRef) === null || u === void 0
            ) &&
            u.contains(i.relatedTarget)
          )
            return;
          q.value = null;
        } else {
          const { value: C } = s;
          if (C != null && C.contains(i.relatedTarget)) return;
          q.value = null;
        }
      }
      Ze(q, (i) => {
        var u, C;
        if (i !== null) {
          if (e.virtualScroll)
            (u = d.value) === null || u === void 0 || u.scrollTo({ key: i });
          else if (e.internalScrollable) {
            const { value: I } = f;
            if (I === null) return;
            const L =
              (C = I.contentRef) === null || C === void 0
                ? void 0
                : C.querySelector('[data-key="'.concat(on(i), '"]'));
            if (!L) return;
            I.scrollTo({ el: L });
          }
        }
      }),
        ot(qe, {
          loadingKeysRef: S,
          highlightKeySetRef: ye,
          displayedCheckedKeysRef: b,
          displayedIndeterminateKeysRef: E,
          mergedSelectedKeysRef: F,
          mergedExpandedKeysRef: T,
          mergedThemeRef: l,
          mergedCheckStrategyRef: x,
          nodePropsRef: j(e, "nodeProps"),
          disabledRef: j(e, "disabled"),
          checkableRef: j(e, "checkable"),
          selectableRef: j(e, "selectable"),
          expandOnClickRef: j(e, "expandOnClick"),
          onLoadRef: j(e, "onLoad"),
          draggableRef: j(e, "draggable"),
          blockLineRef: j(e, "blockLine"),
          indentRef: j(e, "indent"),
          cascadeRef: j(e, "cascade"),
          checkOnClickRef: j(e, "checkOnClick"),
          checkboxPlacementRef: e.checkboxPlacement,
          droppingMouseNodeRef: Ie,
          droppingNodeParentRef: rt,
          draggingNodeRef: te,
          droppingPositionRef: Le,
          droppingOffsetLevelRef: Ke,
          fNodesRef: B,
          pendingNodeKeyRef: q,
          showLineRef: j(e, "showLine"),
          disabledFieldRef: j(e, "disabledField"),
          internalScrollableRef: j(e, "internalScrollable"),
          internalCheckboxFocusableRef: j(e, "internalCheckboxFocusable"),
          internalTreeSelect: e.internalTreeSelect,
          renderLabelRef: j(e, "renderLabel"),
          renderPrefixRef: j(e, "renderPrefix"),
          renderSuffixRef: j(e, "renderSuffix"),
          renderSwitcherIconRef: j(e, "renderSwitcherIcon"),
          labelFieldRef: j(e, "labelField"),
          multipleRef: j(e, "multiple"),
          overrideDefaultNodeClickBehaviorRef: j(
            e,
            "overrideDefaultNodeClickBehavior",
          ),
          handleSwitcherClick: It,
          handleDragEnd: En,
          handleDragEnter: In,
          handleDragLeave: Ln,
          handleDragStart: Pn,
          handleDrop: Dn,
          handleDragOver: Lt,
          handleSelect: ct,
          handleCheck: dt,
        });
      function Bn(i, u) {
        var C, I;
        typeof i == "number"
          ? (C = d.value) === null || C === void 0 || C.scrollTo(i, u || 0)
          : (I = d.value) === null || I === void 0 || I.scrollTo(i);
      }
      const $n = {
          handleKeydown: J,
          scrollTo: Bn,
          getCheckedData: () => {
            if (!e.checkable) return { keys: [], options: [] };
            const { checkedKeys: i } = p.value;
            return { keys: i, options: ce(i) };
          },
          getIndeterminateData: () => {
            if (!e.checkable) return { keys: [], options: [] };
            const { indeterminateKeys: i } = p.value;
            return { keys: i, options: ce(i) };
          },
        },
        Kt = D(() => {
          const {
              common: { cubicBezierEaseInOut: i },
              self: {
                fontSize: u,
                nodeBorderRadius: C,
                nodeColorHover: I,
                nodeColorPressed: L,
                nodeColorActive: Q,
                arrowColor: de,
                loadingColor: ue,
                nodeTextColor: ze,
                nodeTextColorDisabled: Oe,
                dropMarkColor: fe,
                nodeWrapperPadding: Z,
                nodeHeight: he,
                lineHeight: be,
                lineColor: Y,
              },
            } = l.value,
            ie = vt(Z, "top"),
            Be = vt(Z, "bottom"),
            Xe = _e(Re(he) - Re(ie) - Re(Be));
          return {
            "--n-arrow-color": de,
            "--n-loading-color": ue,
            "--n-bezier": i,
            "--n-font-size": u,
            "--n-node-border-radius": C,
            "--n-node-color-active": Q,
            "--n-node-color-hover": I,
            "--n-node-color-pressed": L,
            "--n-node-text-color": ze,
            "--n-node-text-color-disabled": Oe,
            "--n-drop-mark-color": fe,
            "--n-node-wrapper-padding": Z,
            "--n-line-offset-top": "-".concat(ie),
            "--n-line-offset-bottom": "-".concat(Be),
            "--n-node-content-height": Xe,
            "--n-line-height": be,
            "--n-line-color": Y,
          };
        }),
        Ae = n ? Ve("tree", void 0, Kt, e) : void 0;
      return Object.assign(Object.assign({}, $n), {
        mergedClsPrefix: t,
        mergedTheme: l,
        rtlEnabled: r,
        fNodes: mn,
        aip: Ee,
        selfElRef: s,
        virtualListInstRef: d,
        scrollbarInstRef: f,
        handleFocusout: On,
        handleDragLeaveTree: Kn,
        handleScroll: An,
        getScrollContainer: a,
        getScrollContent: c,
        handleAfterEnter: yn,
        handleResize: zn,
        cssVars: n ? void 0 : Kt,
        themeClass: Ae == null ? void 0 : Ae.themeClass,
        onRender: Ae == null ? void 0 : Ae.onRender,
      });
    },
    render() {
      var e;
      const { fNodes: t, internalRenderEmpty: n } = this;
      if (!t.length && n) return n();
      const {
          mergedClsPrefix: o,
          blockNode: r,
          blockLine: l,
          draggable: s,
          disabled: f,
          internalFocusable: d,
          checkable: a,
          handleKeydown: c,
          rtlEnabled: g,
          handleFocusout: h,
          scrollbarProps: N,
        } = this,
        k = d && !f,
        w = k ? "0" : void 0,
        y = [
          "".concat(o, "-tree"),
          g && "".concat(o, "-tree--rtl"),
          a && "".concat(o, "-tree--checkable"),
          (l || r) && "".concat(o, "-tree--block-node"),
          l && "".concat(o, "-tree--block-line"),
        ],
        m = (P) =>
          "__motion" in P
            ? v(Lr, {
                height: P.height,
                nodes: P.nodes,
                clsPrefix: o,
                mode: P.mode,
                onAfterEnter: this.handleAfterEnter,
              })
            : v(gn, { key: P.key, tmNode: P, clsPrefix: o });
      if (this.virtualScroll) {
        const { mergedTheme: P, internalScrollablePadding: p } = this,
          x = vt(p || "0");
        return v(
          Bt,
          Object.assign({}, N, {
            ref: "scrollbarInstRef",
            onDragleave: s ? this.handleDragLeaveTree : void 0,
            container: this.getScrollContainer,
            content: this.getScrollContent,
            class: y,
            theme: P.peers.Scrollbar,
            themeOverrides: P.peerOverrides.Scrollbar,
            tabindex: w,
            onKeydown: k ? c : void 0,
            onFocusout: k ? h : void 0,
          }),
          {
            default: () => {
              var b;
              return (
                (b = this.onRender) === null || b === void 0 || b.call(this),
                t.length
                  ? v(
                      _o,
                      {
                        ref: "virtualListInstRef",
                        items: this.fNodes,
                        itemSize: Re(P.self.nodeHeight),
                        ignoreItemResize: this.aip,
                        paddingTop: x.top,
                        paddingBottom: x.bottom,
                        class: this.themeClass,
                        style: [
                          this.cssVars,
                          { paddingLeft: x.left, paddingRight: x.right },
                        ],
                        onScroll: this.handleScroll,
                        onResize: this.handleResize,
                        showScrollbar: !1,
                        itemResizable: !0,
                      },
                      { default: ({ item: E }) => m(E) },
                    )
                  : Ot(this.$slots.empty, () => [
                      v(Wt, {
                        class: "".concat(o, "-tree__empty"),
                        theme: this.mergedTheme.peers.Empty,
                        themeOverrides: this.mergedTheme.peerOverrides.Empty,
                      }),
                    ])
              );
            },
          },
        );
      }
      const { internalScrollable: K } = this;
      return (
        y.push(this.themeClass),
        (e = this.onRender) === null || e === void 0 || e.call(this),
        K
          ? v(
              Bt,
              Object.assign({}, N, {
                class: y,
                tabindex: w,
                onKeydown: k ? c : void 0,
                onFocusout: k ? h : void 0,
                style: this.cssVars,
                contentStyle: { padding: this.internalScrollablePadding },
              }),
              {
                default: () =>
                  v(
                    "div",
                    {
                      onDragleave: s ? this.handleDragLeaveTree : void 0,
                      ref: "selfElRef",
                    },
                    this.fNodes.map(m),
                  ),
              },
            )
          : v(
              "div",
              {
                class: y,
                tabindex: w,
                ref: "selfElRef",
                style: this.cssVars,
                onKeydown: k ? c : void 0,
                onFocusout: k ? h : void 0,
                onDragleave: s ? this.handleDragLeaveTree : void 0,
              },
              t.length
                ? t.map(m)
                : Ot(this.$slots.empty, () => [
                    v(Wt, {
                      class: "".concat(o, "-tree__empty"),
                      theme: this.mergedTheme.peers.Empty,
                      themeOverrides: this.mergedTheme.peerOverrides.Empty,
                    }),
                  ]),
            )
      );
    },
  }),
  zr = { class: "avatar flex" },
  Or = { class: "flex-1 flex items-center" },
  Br = { class: "text-20px font-bold p-x-24px" },
  $r = ne({
    __name: "avatar",
    setup(e) {
      const t = M(ho.html.title);
      return (n, o) => (
        pe(),
        Ne("div", zr, [
          o[0] ||
            (o[0] = Ce(
              "div",
              {
                class:
                  "bg-$navbar-color p-t-10px p-b-15px w-$navbar-width flex justify-center items-center",
              },
              [
                Ce(
                  "div",
                  {
                    class: "w-46px of-hidden flex justify-center items-center",
                  },
                  [
                    Ce("img", {
                      src: "./images/nav-icon1.png",
                      alt: "",
                      class: "w-100% h-100%",
                    }),
                  ],
                ),
              ],
              -1,
            )),
          Ce("div", Or, [Ce("div", Br, nn(Se(t)), 1)]),
        ])
      );
    },
  }),
  Fr = Rt($r, [["__scopeId", "data-v-848c8d63"]]),
  Mr = (e, t, n) => {
    const o = e[t];
    return o
      ? typeof o == "function"
        ? o()
        : Promise.resolve(o)
      : new Promise((r, l) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            l.bind(
              null,
              new Error(
                "Unknown variable dynamic import: " +
                  t +
                  (t.split("/").length !== n
                    ? ". Note that variables only represent file names one level deep."
                    : ""),
              ),
            ),
          );
        });
  },
  Yt = ne({
    inheritAttrs: !1,
    props: {
      name: { type: String },
      iconProps: { type: Object, default: () => ({}) },
      notFill: { type: Boolean, default: !1 },
    },
    setup({ name: e, iconProps: t, notFill: n }, { attrs: o }) {
      return () =>
        v(
          vo,
          v(
            ne({
              async setup() {
                try {
                  const r = (
                    await Mr(
                      Object.assign({
                        "../assets/icons/add.svg": () =>
                          ve(
                            () => import("./add-B6A_aQWy.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/aixin.svg": () =>
                          ve(
                            () => import("./aixin-CIRM0mDy.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/dc.svg": () =>
                          ve(
                            () => import("./dc-BHUMuwm4.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/diannao.svg": () =>
                          ve(
                            () => import("./diannao-D7bN_hAq.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/gwb.svg": () =>
                          ve(
                            () => import("./gwb-BjHKMc6q.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/home.svg": () =>
                          ve(
                            () => import("./home-D8aVp0ec.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/kehu.svg": () =>
                          ve(
                            () => import("./kehu-D2RF9Sk5.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/khgl.svg": () =>
                          ve(
                            () => import("./khgl-CWkfa5ZQ.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/qianyue.svg": () =>
                          ve(
                            () => import("./qianyue-BXeKGBzr.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/search.svg": () =>
                          ve(
                            () => import("./search-8Rbab2D2.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/upload.svg": () =>
                          ve(
                            () => import("./upload-Dha4UOif.js"),
                            [],
                            import.meta.url,
                          ),
                        "../assets/icons/xiala.svg": () =>
                          ve(
                            () => import("./xiala-B7H3M3h6.js"),
                            [],
                            import.meta.url,
                          ),
                      }),
                      "../assets/icons/".concat(e, ".svg"),
                      4,
                    )
                  ).default;
                  return () =>
                    v(cr, {
                      innerHTML: r,
                      ...o,
                      ...t,
                      class: {
                        flex: !0,
                        "justify-center": !0,
                        "items-center": !0,
                        "svg-icon-fill": !n,
                        ...(typeof o.class == "string"
                          ? { [o.class]: !0 }
                          : o.class),
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
  }),
  jr = { class: "navbar flex w-100% h-100% flex-col of-hidden" },
  Vr = { class: "flex flex-1 w-100% of-hidden" },
  Hr = { class: "bg-$navbar-color h-100% of-x-hidden hide-scrollbar" },
  Ur = ["onClick"],
  Wr = ["src"],
  Gr = { key: 0, class: "flex-1 h-100% of-x-hidden hide-scrollbar p-x-15px" },
  qr = ne({
    __name: "navbar",
    setup(e) {
      const t = go(),
        n = bo(),
        o = M([]),
        r = D(() =>
          $t.flat.objectDeep(t.options.routes, (h) => h.filePath || h.fileName),
        ),
        l = (h) => {
          var k, w;
          const N = r.value[h.filename] || r.value[h.filePath] || {};
          return {
            ...h,
            url:
              h.url ||
              "/" +
                ((w =
                  (k = N == null ? void 0 : N.key) == null
                    ? void 0
                    : k.replace) == null
                  ? void 0
                  : w.call(k, /\.[^.]+$/g, "")),
            redirect: h.redirect || (N == null ? void 0 : N.redirect),
          };
        },
        s = D(() => $store.nav.munes.map(l)),
        f = D(() => s.value[$store.nav.menusActive] || {}),
        d = D(() => {
          var h;
          return $t.flat.objectDeep(
            ((h = f.value) == null ? void 0 : h.children) || [],
            null,
            null,
            !1,
            !0,
            (N) => l(N),
          );
        });
      Fe(() => {
        $store.nav.setMenusActiveInfo(f.value);
      });
      const a = (h) => {
          $store.nav.setMenusActive(h),
            (o.value = []),
            We(() => {
              d.value.length === 0 &&
                (f.value.redirect || f.value.url) &&
                t.push(f.value.redirect || f.value.url);
            });
        },
        c = (h) => !/^(http|\/{2})|\.(png|jpg|jpeg|gif|bmp)$/.test(h),
        g = ({ option: h }) =>
          v(
            "div",
            {
              class: "navbarTreeItem",
              onClick() {
                t.push(h.url);
              },
            },
            [
              c(h.icon)
                ? v(Yt, {
                    name: h.icon,
                    class: "navbarTreeItemIcon",
                    iconProps: { size: 18 },
                  })
                : v(
                    "img",
                    { class: "navbarTreeItemIcon", src: h.icon },
                    h.title,
                  ),
              v("span", { class: "navbarTreeItemLabel" }, h.title),
            ],
          );
      return (
        wt(async () => {
          var w, y;
          const h =
            (w = n.path.match(/^\/*pages\/[^/]+/)) == null ? void 0 : w[0];
          a(
            s.value.findIndex((m) => {
              var K, P;
              return (
                ((P = (K = m.url) == null ? void 0 : K.indexOf) == null
                  ? void 0
                  : P.call(K, h)) > -1
              );
            }),
          );
          const N =
              (y = n.path.match(/^\/*pages\/[^/]+\/[^/]+/)) == null
                ? void 0
                : y[0],
            k = d.value.find((m) => {
              var K, P;
              return (
                ((P = (K = m.url) == null ? void 0 : K.indexOf) == null
                  ? void 0
                  : P.call(K, N)) > -1
              );
            });
          k && k.url && (o.value = [k.url]);
        }),
        (h, N) => {
          const k = Fr,
            w = Ar;
          return (
            pe(),
            Ne("div", jr, [
              Te(k),
              Ce("div", Vr, [
                Ce("div", Hr, [
                  (pe(!0),
                  Ne(
                    mo,
                    null,
                    yo(
                      Se(s),
                      (y, m) => (
                        pe(),
                        Ne(
                          "div",
                          {
                            key: m,
                            class: ko([
                              { active: h.$store.nav.menusActive === m },
                              "navbarItem w-$navbar-width h-42px text-$white p-y-15px flex flex-col justify-center items-center",
                            ]),
                            onClick: (K) => a(m),
                          },
                          [
                            c(y.icon)
                              ? (pe(),
                                xo(
                                  Se(Yt),
                                  {
                                    key: 0,
                                    "icon-props": { size: 28 },
                                    name: y.icon,
                                    class: "w-28px h-28px m-b--4px",
                                  },
                                  null,
                                  8,
                                  ["name"],
                                ))
                              : (pe(),
                                Ne(
                                  "img",
                                  {
                                    key: 1,
                                    src: y.icon,
                                    alt: "",
                                    class: "w-22px h-22px m-b-4px",
                                  },
                                  null,
                                  8,
                                  Wr,
                                )),
                            Ce("div", null, nn(y.title), 1),
                          ],
                          10,
                          Ur,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                Se(d) && Se(d).length > 0
                  ? (pe(),
                    Ne("div", Gr, [
                      Te(
                        w,
                        {
                          data: Se(d),
                          "render-label": g,
                          class: "w-100% n-tree",
                          "label-field": "title",
                          "default-selected-keys": Se(o),
                          "key-field": "url",
                        },
                        null,
                        8,
                        ["data", "default-selected-keys"],
                      ),
                    ]))
                  : po("", !0),
              ]),
            ])
          );
        }
      );
    },
  }),
  Yr = Rt(qr, [["__scopeId", "data-v-c44ff8c8"]]),
  Xr = {},
  Zr = { class: "layout w-100% h-100% fixed" };
function Qr(e, t) {
  const n = Yr,
    o = pr,
    r = Co("router-view"),
    l = br,
    s = gr;
  return (
    pe(),
    Ne("div", Zr, [
      Te(
        s,
        { class: "w-100% h-100%", "has-sider": "" },
        {
          default: gt(() => [
            Te(
              o,
              {
                style: { "--n-color": "var(--navbar-background-color)" },
                class: "h-100% n-layout-sider",
              },
              { default: gt(() => [Te(n)]), _: 1 },
            ),
            Te(
              l,
              {
                style: { "--n-color": "var(--backgroundColor)" },
                "content-style": "padding: 15px;",
              },
              { default: gt(() => [Te(r)]), _: 1 },
            ),
          ]),
          _: 1,
        },
      ),
    ])
  );
}
const el = Rt(Xr, [
  ["render", Qr],
  ["__scopeId", "data-v-16b3f60e"],
]);
export { el as default };
