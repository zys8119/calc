import {
  r as M,
  f as D,
  H as oe,
  J as tt,
  d as re,
  K as be,
  L as $n,
  M as On,
  g as Ct,
  O as Fn,
  P as Mn,
  Q as j,
  R as Se,
  T as Re,
  s as v,
  U as jn,
  V as Pt,
  X as ct,
  Y as Hn,
  Z as Un,
  $ as Vn,
  a0 as Wn,
  x as T,
  y as O,
  a1 as Y,
  z as Ue,
  A as ge,
  a2 as Gn,
  G as Je,
  C as Ve,
  N as wt,
  a3 as We,
  a4 as $,
  a5 as Yt,
  a6 as qn,
  a7 as Yn,
  a8 as Fe,
  a9 as Xn,
  aa as Zn,
  ab as Xt,
  ac as Qn,
  ad as Jn,
  ae as Zt,
  af as eo,
  ag as ne,
  ah as to,
  ai as no,
  aj as oo,
  ak as Dt,
  al as Qt,
  am as Jt,
  an as ut,
  ao as ro,
  ap as ft,
  aq as lo,
  ar as io,
  as as ao,
  at as zt,
  au as $e,
  av as so,
  aw as Oe,
  ax as Xe,
  ay as He,
  az as ht,
  aA as At,
  aB as Bt,
  aC as co,
  o as xe,
  h as Ne,
  e as pe,
  t as en,
  i as we,
  _ as St,
  u as uo,
  p as fo,
  aD as $t,
  a as Te,
  F as ho,
  j as vo,
  q as go,
  c as bo,
  n as yo,
  w as vt,
  aE as mo,
} from "./index-D1df6D06.js";
import { _ as Ot } from "./svg-icon-DgSBpzdX.js";
function Ze(e, t) {
  let { target: n } = e;
  for (; n; ) {
    if (n.dataset && n.dataset[t] !== void 0) return !0;
    n = n.parentElement;
  }
  return !1;
}
function tn(e) {
  return typeof e == "string" ? "s-".concat(e) : "n-".concat(e);
}
function Ft(e) {
  return e & -e;
}
class nn {
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
    let i = t * o;
    for (; t > 0; ) (i += n[t]), (t -= Ft(t));
    return i;
  }
  getBound(t) {
    let n = 0,
      o = this.l;
    for (; o > n; ) {
      const r = Math.floor((n + o) / 2),
        i = this.sum(r);
      if (i > t) {
        o = r;
        continue;
      } else if (i < t) {
        if (n === r) return this.sum(n + 1) <= t ? n + 1 : r;
        n = r;
      } else return r;
    }
    return n;
  }
}
let Qe;
function ko() {
  return typeof document > "u"
    ? !1
    : (Qe === void 0 &&
        ("matchMedia" in window
          ? (Qe = window.matchMedia("(pointer:coarse)").matches)
          : (Qe = !1)),
      Qe);
}
let gt;
function Mt() {
  return typeof document > "u"
    ? 1
    : (gt === void 0 && (gt = "chrome" in window ? window.devicePixelRatio : 1),
      gt);
}
const on = "VVirtualListXScroll";
function xo({ columnsRef: e, renderColRef: t, renderItemWithColsRef: n }) {
  const o = M(0),
    r = M(0),
    i = D(() => {
      const a = e.value;
      if (a.length === 0) return null;
      const c = new nn(a.length, 0);
      return (
        a.forEach((g, h) => {
          c.add(h, g.width);
        }),
        c
      );
    }),
    s = oe(() => {
      const a = i.value;
      return a !== null ? Math.max(a.getBound(r.value) - 1, 0) : 0;
    }),
    f = (a) => {
      const c = i.value;
      return c !== null ? c.sum(a) : 0;
    },
    d = oe(() => {
      const a = i.value;
      return a !== null
        ? Math.min(a.getBound(r.value + o.value) + 1, e.value.length - 1)
        : 0;
    });
  return (
    tt(on, {
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
const jt = re({
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
        renderItemWithColsRef: i,
      } = be(on);
      return {
        startIndex: e,
        endIndex: t,
        columns: n,
        renderCol: r,
        renderItemWithCols: i,
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
        getLeft: i,
        item: s,
      } = this;
      if (r != null)
        return r({
          itemIndex: this.index,
          startColIndex: e,
          endColIndex: t,
          allColumns: n,
          item: s,
          getLeft: i,
        });
      if (o != null) {
        const f = [];
        for (let d = e; d <= t; ++d) {
          const a = n[d];
          f.push(o({ column: a, left: i(d), item: s }));
        }
        return f;
      }
      return null;
    },
  }),
  po = ct(
    ".v-vl",
    { maxHeight: "inherit", height: "100%", overflow: "auto", minWidth: "1px" },
    [
      ct("&:not(.v-vl--show-scrollbar)", { scrollbarWidth: "none" }, [
        ct(
          "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
          { width: 0, height: 0, display: "none" },
        ),
      ]),
    ],
  ),
  Co = re({
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
      const t = $n();
      po.mount({
        id: "vueuc/virtual-list",
        head: !0,
        anchorMetaName: On,
        ssr: t,
      }),
        Ct(() => {
          const { defaultScrollIndex: R, defaultScrollKey: _ } = e;
          R != null ? m({ index: R }) : _ != null && m({ key: _ });
        });
      let n = !1,
        o = !1;
      Fn(() => {
        if (((n = !1), !o)) {
          o = !0;
          return;
        }
        m({ top: N.value, left: s.value });
      }),
        Mn(() => {
          (n = !0), o || (o = !0);
        });
      const r = oe(() => {
          if (
            (e.renderCol == null && e.renderItemWithCols == null) ||
            e.columns.length === 0
          )
            return;
          let R = 0;
          return (
            e.columns.forEach((_) => {
              R += _.width;
            }),
            R
          );
        }),
        i = D(() => {
          const R = new Map(),
            { keyField: _ } = e;
          return (
            e.items.forEach((B, G) => {
              R.set(B[_], G);
            }),
            R
          );
        }),
        { scrollLeftRef: s, listWidthRef: f } = xo({
          columnsRef: j(e, "columns"),
          renderColRef: j(e, "renderCol"),
          renderItemWithColsRef: j(e, "renderItemWithCols"),
        }),
        d = M(null),
        a = M(void 0),
        c = new Map(),
        g = D(() => {
          const { items: R, itemSize: _, keyField: B } = e,
            G = new nn(R.length, _);
          return (
            R.forEach((J, V) => {
              const W = J[B],
                ee = c.get(W);
              ee !== void 0 && G.add(V, ee);
            }),
            G
          );
        }),
        h = M(0),
        N = M(0),
        k = oe(() =>
          Math.max(g.value.getBound(N.value - Se(e.paddingTop)) - 1, 0),
        ),
        w = D(() => {
          const { value: R } = a;
          if (R === void 0) return [];
          const { items: _, itemSize: B } = e,
            G = k.value,
            J = Math.min(G + Math.ceil(R / B + 1), _.length - 1),
            V = [];
          for (let W = G; W <= J; ++W) V.push(_[W]);
          return V;
        }),
        m = (R, _) => {
          if (typeof R == "number") {
            p(R, _, "auto");
            return;
          }
          const {
            left: B,
            top: G,
            index: J,
            key: V,
            position: W,
            behavior: ee,
            debounce: se = !0,
          } = R;
          if (B !== void 0 || G !== void 0) p(B, G, ee);
          else if (J !== void 0) P(J, ee, se);
          else if (V !== void 0) {
            const ye = i.value.get(V);
            ye !== void 0 && P(ye, ee, se);
          } else
            W === "bottom"
              ? p(0, Number.MAX_SAFE_INTEGER, ee)
              : W === "top" && p(0, 0, ee);
        };
      let y,
        L = null;
      function P(R, _, B) {
        const { value: G } = g,
          J = G.sum(R) + Se(e.paddingTop);
        if (!B) d.value.scrollTo({ left: 0, top: J, behavior: _ });
        else {
          (y = R),
            L !== null && window.clearTimeout(L),
            (L = window.setTimeout(() => {
              (y = void 0), (L = null);
            }, 16));
          const { scrollTop: V, offsetHeight: W } = d.value;
          if (J > V) {
            const ee = G.get(R);
            J + ee <= V + W ||
              d.value.scrollTo({ left: 0, top: J + ee - W, behavior: _ });
          } else d.value.scrollTo({ left: 0, top: J, behavior: _ });
        }
      }
      function p(R, _, B) {
        d.value.scrollTo({ left: R, top: _, behavior: B });
      }
      function x(R, _) {
        var B, G, J;
        if (n || e.ignoreItemResize || ae(_.target)) return;
        const { value: V } = g,
          W = i.value.get(R),
          ee = V.get(W),
          se =
            (J =
              (G =
                (B = _.borderBoxSize) === null || B === void 0
                  ? void 0
                  : B[0]) === null || G === void 0
                ? void 0
                : G.blockSize) !== null && J !== void 0
              ? J
              : _.contentRect.height;
        if (se === ee) return;
        se - e.itemSize === 0 ? c.delete(R) : c.set(R, se - e.itemSize);
        const S = se - ee;
        if (S === 0) return;
        V.add(W, S);
        const z = d.value;
        if (z != null) {
          if (y === void 0) {
            const U = V.sum(W);
            z.scrollTop > U && z.scrollBy(0, S);
          } else if (W < y) z.scrollBy(0, S);
          else if (W === y) {
            const U = V.sum(W);
            se + U > z.scrollTop + z.offsetHeight && z.scrollBy(0, S);
          }
          X();
        }
        h.value++;
      }
      const b = !ko();
      let E = !1;
      function A(R) {
        var _;
        (_ = e.onScroll) === null || _ === void 0 || _.call(e, R),
          (!b || !E) && X();
      }
      function H(R) {
        var _;
        if (((_ = e.onWheel) === null || _ === void 0 || _.call(e, R), b)) {
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
        const { onResize: _ } = e;
        _ !== void 0 && _(R);
      }
      function X() {
        const { value: R } = d;
        R != null && ((N.value = R.scrollTop), (s.value = R.scrollLeft));
      }
      function ae(R) {
        let _ = R;
        for (; _ !== null; ) {
          if (_.style.display === "none") return !0;
          _ = _.parentElement;
        }
        return !1;
      }
      return {
        listHeight: a,
        listStyle: { overflow: "auto" },
        keyToIndex: i,
        itemsStyle: D(() => {
          const { itemResizable: R } = e,
            _ = Re(g.value.sum());
          return (
            h.value,
            [
              e.itemsStyle,
              {
                boxSizing: "content-box",
                width: Re(r.value),
                height: R ? "" : _,
                minHeight: R ? _ : "",
                paddingTop: Re(e.paddingTop),
                paddingBottom: Re(e.paddingBottom),
              },
            ]
          );
        }),
        visibleItemsStyle: D(
          () => (
            h.value,
            { transform: "translateY(".concat(Re(g.value.sum(k.value)), ")") }
          ),
        ),
        viewportItems: w,
        listElRef: d,
        itemsElRef: M(null),
        scrollTo: m,
        handleListResize: F,
        handleListScroll: A,
        handleListWheel: H,
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
        Pt,
        { onResize: this.handleListResize },
        {
          default: () => {
            var r, i;
            return v(
              "div",
              jn(this.$attrs, {
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
                                      Pt,
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
                  : (i = (r = this.$slots).empty) === null || i === void 0
                    ? void 0
                    : i.call(r),
              ],
            );
          },
        },
      );
    },
  });
function wo(e) {
  const { mergedLocaleRef: t, mergedDateLocaleRef: n } = be(Un, null) || {},
    o = D(() => {
      var i, s;
      return (s =
        (i = t == null ? void 0 : t.value) === null || i === void 0
          ? void 0
          : i[e]) !== null && s !== void 0
        ? s
        : Vn[e];
    });
  return {
    dateLocaleRef: D(() => {
      var i;
      return (i = n == null ? void 0 : n.value) !== null && i !== void 0
        ? i
        : Wn;
    }),
    localeRef: o,
  };
}
const So = re({
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
  Ro = re({
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
  No = re({
    name: "Switcher",
    render() {
      return v(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
        v("path", { d: "M12 8l10 8l-10 8z" }),
      );
    },
  });
function Ht(e) {
  return Array.isArray(e) ? e : [e];
}
const xt = { STOP: "STOP" };
function rn(e, t) {
  const n = t(e);
  e.children !== void 0 && n !== xt.STOP && e.children.forEach((o) => rn(o, t));
}
function To(e, t = {}) {
  const { preserveGroup: n = !1 } = t,
    o = [],
    r = n
      ? (s) => {
          s.isLeaf || (o.push(s.key), i(s.children));
        }
      : (s) => {
          s.isLeaf || (s.isGroup || o.push(s.key), i(s.children));
        };
  function i(s) {
    s.forEach(r);
  }
  return i(e), o;
}
function _o(e, t) {
  const { isLeaf: n } = e;
  return n !== void 0 ? n : !t(e);
}
function Ko(e) {
  return e.children;
}
function Io(e) {
  return e.key;
}
function Lo() {
  return !1;
}
function Eo(e, t) {
  const { isLeaf: n } = e;
  return !(n === !1 && !Array.isArray(t(e)));
}
function Po(e) {
  return e.disabled === !0;
}
function Do(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function bt(e) {
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
function zo(e, t) {
  const n = new Set(e);
  return (
    t.forEach((o) => {
      n.has(o) || n.add(o);
    }),
    Array.from(n)
  );
}
function Ao(e, t) {
  const n = new Set(e);
  return (
    t.forEach((o) => {
      n.has(o) && n.delete(o);
    }),
    Array.from(n)
  );
}
function Bo(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function $o(e) {
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
class Oo extends Error {
  constructor() {
    super(),
      (this.message =
        "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.");
  }
}
function Fo(e, t, n, o) {
  return et(t.concat(e), n, o, !1);
}
function Mo(e, t) {
  const n = new Set();
  return (
    e.forEach((o) => {
      const r = t.treeNodeMap.get(o);
      if (r !== void 0) {
        let i = r.parent;
        for (; i !== null && !(i.disabled || n.has(i.key)); )
          n.add(i.key), (i = i.parent);
      }
    }),
    n
  );
}
function jo(e, t, n, o) {
  const r = et(t, n, o, !1),
    i = et(e, n, o, !0),
    s = Mo(e, n),
    f = [];
  return (
    r.forEach((d) => {
      (i.has(d) || s.has(d)) && f.push(d);
    }),
    f.forEach((d) => r.delete(d)),
    r
  );
}
function mt(e, t) {
  const {
    checkedKeys: n,
    keysToCheck: o,
    keysToUncheck: r,
    indeterminateKeys: i,
    cascade: s,
    leafOnly: f,
    checkStrategy: d,
    allowNotLoaded: a,
  } = e;
  if (!s)
    return o !== void 0
      ? { checkedKeys: zo(n, o), indeterminateKeys: Array.from(i) }
      : r !== void 0
        ? { checkedKeys: Ao(n, r), indeterminateKeys: Array.from(i) }
        : { checkedKeys: Array.from(n), indeterminateKeys: Array.from(i) };
  const { levelTreeNodeMap: c } = t;
  let g;
  r !== void 0
    ? (g = jo(r, n, t, a))
    : o !== void 0
      ? (g = Fo(o, n, t, a))
      : (g = et(n, t, a, !1));
  const h = d === "parent",
    N = d === "child" || f,
    k = g,
    w = new Set(),
    m = Math.max.apply(null, Array.from(c.keys()));
  for (let y = m; y >= 0; y -= 1) {
    const L = y === 0,
      P = c.get(y);
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
        A = !1,
        H = !0;
      for (const F of p.children) {
        const X = F.key;
        if (!F.disabled) {
          if ((H && (H = !1), k.has(X))) A = !0;
          else if (w.has(X)) {
            (A = !0), (E = !1);
            break;
          } else if (((E = !1), A)) break;
        }
      }
      E && !H
        ? (h &&
            p.children.forEach((F) => {
              !F.disabled && k.has(F.key) && k.delete(F.key);
            }),
          k.add(x))
        : A && w.add(x),
        L && N && k.has(x) && k.delete(x);
    }
  }
  return { checkedKeys: Array.from(k), indeterminateKeys: Array.from(w) };
}
function et(e, t, n, o) {
  const { treeNodeMap: r, getChildren: i } = t,
    s = new Set(),
    f = new Set(e);
  return (
    e.forEach((d) => {
      const a = r.get(d);
      a !== void 0 &&
        rn(a, (c) => {
          if (c.disabled) return xt.STOP;
          const { key: g } = c;
          if (!s.has(g) && (s.add(g), f.add(g), Do(c.rawNode, i))) {
            if (o) return xt.STOP;
            if (!n) throw new Oo();
          }
        });
    }),
    f
  );
}
function Ho(e, { includeGroup: t = !1, includeSelf: n = !0 }, o) {
  var r;
  const i = o.treeNodeMap;
  let s = e == null ? null : (r = i.get(e)) !== null && r !== void 0 ? r : null;
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
function Uo(e) {
  if (e.length === 0) return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Vo(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r + 1) % o] : r === n.length - 1 ? null : n[r + 1];
}
function Ut(e, t, { loop: n = !1, includeDisabled: o = !1 } = {}) {
  const r = t === "prev" ? Wo : Vo,
    i = { reverse: t === "prev" };
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
        const c = Rt(a, i);
        c !== null ? (f = c) : d(r(a, n));
      } else {
        const c = r(a, !1);
        if (c !== null) d(c);
        else {
          const g = Go(a);
          g != null && g.isGroup ? d(r(g, n)) : n && d(r(a, !0));
        }
      }
    }
  }
  return d(e), f;
}
function Wo(e, t) {
  const n = e.siblings,
    o = n.length,
    { index: r } = e;
  return t ? n[(r - 1 + o) % o] : r === 0 ? null : n[r - 1];
}
function Go(e) {
  return e.parent;
}
function Rt(e, t = {}) {
  const { reverse: n = !1 } = t,
    { children: o } = e;
  if (o) {
    const { length: r } = o,
      i = n ? r - 1 : 0,
      s = n ? -1 : r,
      f = n ? -1 : 1;
    for (let d = i; d !== s; d += f) {
      const a = o[d];
      if (!a.disabled && !a.ignored)
        if (a.isGroup) {
          const c = Rt(a, t);
          if (c !== null) return c;
        } else return a;
    }
  }
  return null;
}
const qo = {
  getChild() {
    return this.ignored ? null : Rt(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Ut(this, "next", e);
  },
  getPrev(e = {}) {
    return Ut(this, "prev", e);
  },
};
function pt(e, t) {
  const n = t ? new Set(t) : void 0,
    o = [];
  function r(i) {
    i.forEach((s) => {
      o.push(s),
        !(s.isLeaf || !s.children || s.ignored) &&
          (s.isGroup || n === void 0 || n.has(s.key)) &&
          r(s.children);
    });
  }
  return r(e), o;
}
function Yo(e, t) {
  const n = e.key;
  for (; t; ) {
    if (t.key === n) return !0;
    t = t.parent;
  }
  return !1;
}
function ln(e, t, n, o, r, i = null, s = 0) {
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
        (g.parent = i),
        !g.ignored)
      ) {
        const h = r(d);
        Array.isArray(h) && (g.children = ln(h, t, n, o, r, g, s + 1));
      }
      f.push(g),
        t.set(g.key, g),
        n.has(s) || n.set(s, []),
        (c = n.get(s)) === null || c === void 0 || c.push(g);
    }),
    f
  );
}
function Vt(e, t = {}) {
  var n;
  const o = new Map(),
    r = new Map(),
    {
      getDisabled: i = Po,
      getIgnored: s = Lo,
      getIsGroup: f = Bo,
      getKey: d = Io,
    } = t,
    a = (n = t.getChildren) !== null && n !== void 0 ? n : Ko,
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
          return i(this.rawNode);
        },
        get isGroup() {
          return f(this.rawNode);
        },
        get isLeaf() {
          return _o(this.rawNode, c);
        },
        get shallowLoaded() {
          return Eo(this.rawNode, c);
        },
        get ignored() {
          return s(this.rawNode);
        },
        contains(p) {
          return Yo(this, p);
        },
      },
      qo,
    ),
    h = ln(e, o, r, g, c);
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
  function m(p, x) {
    const b = k(p);
    return b ? b.getNext(x) : null;
  }
  function y(p) {
    const x = k(p);
    return x ? x.getParent() : null;
  }
  function L(p) {
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
      return pt(h, p);
    },
    getNode: N,
    getPrev: w,
    getNext: m,
    getParent: y,
    getChild: L,
    getFirstAvailableNode() {
      return Uo(h);
    },
    getPath(p, x = {}) {
      return Ho(p, x, P);
    },
    getCheckedKeys(p, x = {}) {
      const {
        cascade: b = !0,
        leafOnly: E = !1,
        checkStrategy: A = "all",
        allowNotLoaded: H = !1,
      } = x;
      return mt(
        {
          checkedKeys: bt(p),
          indeterminateKeys: yt(p),
          cascade: b,
          leafOnly: E,
          checkStrategy: A,
          allowNotLoaded: H,
        },
        P,
      );
    },
    check(p, x, b = {}) {
      const {
        cascade: E = !0,
        leafOnly: A = !1,
        checkStrategy: H = "all",
        allowNotLoaded: F = !1,
      } = b;
      return mt(
        {
          checkedKeys: bt(x),
          indeterminateKeys: yt(x),
          keysToCheck: p == null ? [] : Ht(p),
          cascade: E,
          leafOnly: A,
          checkStrategy: H,
          allowNotLoaded: F,
        },
        P,
      );
    },
    uncheck(p, x, b = {}) {
      const {
        cascade: E = !0,
        leafOnly: A = !1,
        checkStrategy: H = "all",
        allowNotLoaded: F = !1,
      } = b;
      return mt(
        {
          checkedKeys: bt(x),
          indeterminateKeys: yt(x),
          keysToUncheck: p == null ? [] : Ht(p),
          cascade: E,
          leafOnly: A,
          checkStrategy: H,
          allowNotLoaded: F,
        },
        P,
      );
    },
    getNonLeafKeys(p = {}) {
      return To(h, p);
    },
  };
  return P;
}
const Xo = T(
    "empty",
    "\n display: flex;\n flex-direction: column;\n align-items: center;\n font-size: var(--n-font-size);\n",
    [
      O(
        "icon",
        "\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n line-height: var(--n-icon-size);\n color: var(--n-icon-color);\n transition:\n color .3s var(--n-bezier);\n ",
        [Y("+", [O("description", "\n margin-top: 8px;\n ")])],
      ),
      O(
        "description",
        "\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n ",
      ),
      O(
        "extra",
        "\n text-align: center;\n transition: color .3s var(--n-bezier);\n margin-top: 12px;\n color: var(--n-extra-text-color);\n ",
      ),
    ],
  ),
  Zo = Object.assign(Object.assign({}, ge.props), {
    description: String,
    showDescription: { type: Boolean, default: !0 },
    showIcon: { type: Boolean, default: !0 },
    size: { type: String, default: "medium" },
    renderIcon: Function,
  }),
  Wt = re({
    name: "Empty",
    props: Zo,
    setup(e) {
      const {
          mergedClsPrefixRef: t,
          inlineThemeDisabled: n,
          mergedComponentPropsRef: o,
        } = Ue(e),
        r = ge("Empty", "-empty", Xo, Gn, e, t),
        { localeRef: i } = wo("Empty"),
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
              : g.renderIcon) || (() => v(Ro, null))
          );
        }),
        d = D(() => {
          const { size: c } = e,
            {
              common: { cubicBezierEaseInOut: g },
              self: {
                [Je("iconSize", c)]: h,
                [Je("fontSize", c)]: N,
                textColor: k,
                iconColor: w,
                extraTextColor: m,
              },
            } = r.value;
          return {
            "--n-icon-size": h,
            "--n-font-size": N,
            "--n-bezier": g,
            "--n-text-color": k,
            "--n-icon-color": w,
            "--n-extra-text-color": m,
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
        localizedDescription: D(() => s.value || i.value.description),
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
                  : v(wt, { clsPrefix: t }, { default: this.mergedRenderIcon }),
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
  Qo = v(
    "svg",
    { viewBox: "0 0 64 64", class: "check-icon" },
    v("path", {
      d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z",
    }),
  ),
  Jo = v(
    "svg",
    { viewBox: "0 0 100 100", class: "line-icon" },
    v("path", {
      d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z",
    }),
  ),
  er = We("n-checkbox-group"),
  tr = Y([
    T(
      "checkbox",
      "\n font-size: var(--n-font-size);\n outline: none;\n cursor: pointer;\n display: inline-flex;\n flex-wrap: nowrap;\n align-items: flex-start;\n word-break: break-word;\n line-height: var(--n-size);\n --n-merged-color-table: var(--n-color-table);\n ",
      [
        $("show-label", "line-height: var(--n-label-line-height);"),
        Y("&:hover", [
          T("checkbox-box", [O("border", "border: var(--n-border-checked);")]),
        ]),
        Y("&:focus:not(:active)", [
          T("checkbox-box", [
            O(
              "border",
              "\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n ",
            ),
          ]),
        ]),
        $("inside-table", [
          T(
            "checkbox-box",
            "\n background-color: var(--n-merged-color-table);\n ",
          ),
        ]),
        $("checked", [
          T("checkbox-box", "\n background-color: var(--n-color-checked);\n ", [
            T("checkbox-icon", [
              Y(".check-icon", "\n opacity: 1;\n transform: scale(1);\n "),
            ]),
          ]),
        ]),
        $("indeterminate", [
          T("checkbox-box", [
            T("checkbox-icon", [
              Y(".check-icon", "\n opacity: 0;\n transform: scale(.5);\n "),
              Y(".line-icon", "\n opacity: 1;\n transform: scale(1);\n "),
            ]),
          ]),
        ]),
        $("checked, indeterminate", [
          Y("&:focus:not(:active)", [
            T("checkbox-box", [
              O(
                "border",
                "\n border: var(--n-border-checked);\n box-shadow: var(--n-box-shadow-focus);\n ",
              ),
            ]),
          ]),
          T(
            "checkbox-box",
            "\n background-color: var(--n-color-checked);\n border-left: 0;\n border-top: 0;\n ",
            [O("border", { border: "var(--n-border-checked)" })],
          ),
        ]),
        $("disabled", { cursor: "not-allowed" }, [
          $("checked", [
            T(
              "checkbox-box",
              "\n background-color: var(--n-color-disabled-checked);\n ",
              [
                O("border", { border: "var(--n-border-disabled-checked)" }),
                T("checkbox-icon", [
                  Y(".check-icon, .line-icon", {
                    fill: "var(--n-check-mark-color-disabled-checked)",
                  }),
                ]),
              ],
            ),
          ]),
          T(
            "checkbox-box",
            "\n background-color: var(--n-color-disabled);\n ",
            [
              O("border", "\n border: var(--n-border-disabled);\n "),
              T("checkbox-icon", [
                Y(
                  ".check-icon, .line-icon",
                  "\n fill: var(--n-check-mark-color-disabled);\n ",
                ),
              ]),
            ],
          ),
          O("label", "\n color: var(--n-text-color-disabled);\n "),
        ]),
        T(
          "checkbox-box-wrapper",
          "\n position: relative;\n width: var(--n-size);\n flex-shrink: 0;\n flex-grow: 0;\n user-select: none;\n -webkit-user-select: none;\n ",
        ),
        T(
          "checkbox-box",
          "\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n height: var(--n-size);\n width: var(--n-size);\n display: inline-block;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color 0.3s var(--n-bezier);\n ",
          [
            O(
              "border",
              "\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border: var(--n-border);\n ",
            ),
            T(
              "checkbox-icon",
              "\n display: flex;\n align-items: center;\n justify-content: center;\n position: absolute;\n left: 1px;\n right: 1px;\n top: 1px;\n bottom: 1px;\n ",
              [
                Y(
                  ".check-icon, .line-icon",
                  "\n width: 100%;\n fill: var(--n-check-mark-color);\n opacity: 0;\n transform: scale(0.5);\n transform-origin: center;\n transition:\n fill 0.3s var(--n-bezier),\n transform 0.3s var(--n-bezier),\n opacity 0.3s var(--n-bezier),\n border-color 0.3s var(--n-bezier);\n ",
                ),
                Yt({ left: "1px", top: "1px" }),
              ],
            ),
          ],
        ),
        O(
          "label",
          "\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n padding: var(--n-label-padding);\n font-weight: var(--n-label-font-weight);\n ",
          [Y("&:empty", { display: "none" })],
        ),
      ],
    ),
    qn(
      T(
        "checkbox",
        "\n --n-merged-color-table: var(--n-color-table-modal);\n ",
      ),
    ),
    Yn(
      T(
        "checkbox",
        "\n --n-merged-color-table: var(--n-color-table-popover);\n ",
      ),
    ),
  ]),
  nr = Object.assign(Object.assign({}, ge.props), {
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
  or = re({
    name: "Checkbox",
    props: nr,
    setup(e) {
      const t = be(er, null),
        n = M(null),
        {
          mergedClsPrefixRef: o,
          inlineThemeDisabled: r,
          mergedRtlRef: i,
        } = Ue(e),
        s = M(e.defaultChecked),
        f = j(e, "checked"),
        d = Fe(f, s),
        a = oe(() => {
          if (t) {
            const b = t.valueSetRef.value;
            return b && e.value !== void 0 ? b.has(e.value) : !1;
          } else return d.value === e.checkedValue;
        }),
        c = Xn(e, {
          mergedSize(b) {
            const { size: E } = e;
            if (E !== void 0) return E;
            if (t) {
              const { value: A } = t.mergedSizeRef;
              if (A !== void 0) return A;
            }
            if (b) {
              const { mergedSize: A } = b;
              if (A !== void 0) return A.value;
            }
            return "medium";
          },
          mergedDisabled(b) {
            const { disabled: E } = e;
            if (E !== void 0) return E;
            if (t) {
              if (t.disabledRef.value) return !0;
              const {
                maxRef: { value: A },
                checkedCountRef: H,
              } = t;
              if (A !== void 0 && H.value >= A && !a.value) return !0;
              const {
                minRef: { value: F },
              } = t;
              if (F !== void 0 && H.value <= F && a.value) return !0;
            }
            return b ? b.disabled.value : !1;
          },
        }),
        { mergedDisabledRef: g, mergedSizeRef: h } = c,
        N = ge("Checkbox", "-checkbox", tr, Zn, e, o);
      function k(b) {
        if (t && e.value !== void 0) t.toggleCheckbox(!a.value, e.value);
        else {
          const { onChange: E, "onUpdate:checked": A, onUpdateChecked: H } = e,
            { nTriggerFormInput: F, nTriggerFormChange: X } = c,
            ae = a.value ? e.uncheckedValue : e.checkedValue;
          A && ne(A, ae, b),
            H && ne(H, ae, b),
            E && ne(E, ae, b),
            F(),
            X(),
            (s.value = ae);
        }
      }
      function w(b) {
        g.value || k(b);
      }
      function m(b) {
        if (!g.value)
          switch (b.key) {
            case " ":
            case "Enter":
              k(b);
          }
      }
      function y(b) {
        switch (b.key) {
          case " ":
            b.preventDefault();
        }
      }
      const L = {
          focus: () => {
            var b;
            (b = n.value) === null || b === void 0 || b.focus();
          },
          blur: () => {
            var b;
            (b = n.value) === null || b === void 0 || b.blur();
          },
        },
        P = Xt("Checkbox", i, o),
        p = D(() => {
          const { value: b } = h,
            {
              common: { cubicBezierEaseInOut: E },
              self: {
                borderRadius: A,
                color: H,
                colorChecked: F,
                colorDisabled: X,
                colorTableHeader: ae,
                colorTableHeaderModal: R,
                colorTableHeaderPopover: _,
                checkMarkColor: B,
                checkMarkColorDisabled: G,
                border: J,
                borderFocus: V,
                borderDisabled: W,
                borderChecked: ee,
                boxShadowFocus: se,
                textColor: ye,
                textColorDisabled: S,
                checkMarkColorDisabledChecked: z,
                colorDisabledChecked: U,
                borderDisabledChecked: te,
                labelPadding: le,
                labelLineHeight: _e,
                labelFontWeight: Ke,
                [Je("fontSize", b)]: Ie,
                [Je("size", b)]: nt,
              },
            } = N.value;
          return {
            "--n-label-line-height": _e,
            "--n-label-font-weight": Ke,
            "--n-size": nt,
            "--n-bezier": E,
            "--n-border-radius": A,
            "--n-border": J,
            "--n-border-checked": ee,
            "--n-border-focus": V,
            "--n-border-disabled": W,
            "--n-border-disabled-checked": te,
            "--n-box-shadow-focus": se,
            "--n-color": H,
            "--n-color-checked": F,
            "--n-color-table": ae,
            "--n-color-table-modal": R,
            "--n-color-table-popover": _,
            "--n-color-disabled": X,
            "--n-color-disabled-checked": U,
            "--n-text-color": ye,
            "--n-text-color-disabled": S,
            "--n-check-mark-color": B,
            "--n-check-mark-color-disabled": G,
            "--n-check-mark-color-disabled-checked": z,
            "--n-font-size": Ie,
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
      return Object.assign(c, L, {
        rtlEnabled: P,
        selfRef: n,
        mergedClsPrefix: o,
        mergedDisabled: g,
        renderedChecked: a,
        mergedTheme: N,
        labelId: Qn(),
        handleClick: w,
        handleKeyUp: m,
        handleKeyDown: y,
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
        privateInsideTable: i,
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
      const k = Jn(t.default, (w) =>
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
            i && "".concat(a, "-checkbox--inside-table"),
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
            eo(
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
            v(Zt, null, {
              default: () =>
                this.indeterminate
                  ? v(
                      "div",
                      {
                        key: "indeterminate",
                        class: "".concat(a, "-checkbox-icon"),
                      },
                      Jo,
                    )
                  : v(
                      "div",
                      { key: "check", class: "".concat(a, "-checkbox-icon") },
                      Qo,
                    ),
            }),
            v("div", { class: "".concat(a, "-checkbox-box__border") }),
          ),
        ),
        k,
      );
    },
  });
function rr(e) {
  const {
    baseColor: t,
    textColor2: n,
    bodyColor: o,
    cardColor: r,
    dividerColor: i,
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
    headerBorderColor: i,
    headerBorderColorInverted: a,
    footerBorderColor: i,
    footerBorderColorInverted: a,
    siderBorderColor: i,
    siderBorderColorInverted: a,
    siderColor: r,
    siderColorInverted: a,
    siderToggleButtonBorder: "1px solid ".concat(i),
    siderToggleButtonColor: t,
    siderToggleButtonIconColor: n,
    siderToggleButtonIconColorInverted: n,
    siderToggleBarColor: Dt(o, f),
    siderToggleBarColorHover: Dt(o, d),
    __invertScrollbar: "true",
  };
}
const an = to({
    name: "Layout",
    common: no,
    peers: { Scrollbar: oo },
    self: rr,
  }),
  lr = We("n-layout-sider"),
  sn = { type: String, default: "static" },
  ir = T(
    "layout",
    "\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n flex: auto;\n overflow: hidden;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",
    [
      T(
        "layout-scroll-container",
        "\n overflow-x: hidden;\n box-sizing: border-box;\n height: 100%;\n ",
      ),
      $(
        "absolute-positioned",
        "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ",
      ),
    ],
  ),
  ar = {
    embedded: Boolean,
    position: sn,
    nativeScrollbar: { type: Boolean, default: !0 },
    scrollbarProps: Object,
    onScroll: Function,
    contentClass: String,
    contentStyle: { type: [String, Object], default: "" },
    hasSider: Boolean,
    siderPlacement: { type: String, default: "left" },
  },
  dn = We("n-layout");
function cn(e) {
  return re({
    name: e ? "LayoutContent" : "Layout",
    props: Object.assign(Object.assign({}, ge.props), ar),
    setup(t) {
      const n = M(null),
        o = M(null),
        { mergedClsPrefixRef: r, inlineThemeDisabled: i } = Ue(t),
        s = ge("Layout", "-layout", ir, an, t, r);
      function f(w, m) {
        if (t.nativeScrollbar) {
          const { value: y } = n;
          y && (m === void 0 ? y.scrollTo(w) : y.scrollTo(w, m));
        } else {
          const { value: y } = o;
          y && y.scrollTo(w, m);
        }
      }
      tt(dn, t);
      let d = 0,
        a = 0;
      const c = (w) => {
        var m;
        const y = w.target;
        (d = y.scrollLeft),
          (a = y.scrollTop),
          (m = t.onScroll) === null || m === void 0 || m.call(t, w);
      };
      Qt(() => {
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
            self: m,
          } = s.value;
          return {
            "--n-bezier": w,
            "--n-color": t.embedded ? m.colorEmbedded : m.color,
            "--n-text-color": m.textColor,
          };
        }),
        k = i
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
          cssVars: i ? void 0 : N,
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
        i = [
          this.themeClass,
          e && "".concat(n, "-layout-content"),
          "".concat(n, "-layout"),
          "".concat(n, "-layout--").concat(this.position, "-positioned"),
        ];
      return v(
        "div",
        { class: i, style: this.cssVars },
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
              Jt,
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
const sr = cn(!1),
  dr = cn(!0),
  cr = T(
    "layout-sider",
    "\n flex-shrink: 0;\n box-sizing: border-box;\n position: relative;\n z-index: 1;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n min-width .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: flex;\n justify-content: flex-end;\n",
    [
      $("bordered", [
        O(
          "border",
          '\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 1px;\n background-color: var(--n-border-color);\n transition: background-color .3s var(--n-bezier);\n ',
        ),
      ]),
      O("left-placement", [$("bordered", [O("border", "\n right: 0;\n ")])]),
      $("right-placement", "\n justify-content: flex-start;\n ", [
        $("bordered", [O("border", "\n left: 0;\n ")]),
        $("collapsed", [
          T("layout-toggle-button", [
            T("base-icon", "\n transform: rotate(180deg);\n "),
          ]),
          T("layout-toggle-bar", [
            Y("&:hover", [
              O("top", {
                transform: "rotate(-12deg) scale(1.15) translateY(-2px)",
              }),
              O("bottom", {
                transform: "rotate(12deg) scale(1.15) translateY(2px)",
              }),
            ]),
          ]),
        ]),
        T(
          "layout-toggle-button",
          "\n left: 0;\n transform: translateX(-50%) translateY(-50%);\n ",
          [T("base-icon", "\n transform: rotate(0);\n ")],
        ),
        T(
          "layout-toggle-bar",
          "\n left: -28px;\n transform: rotate(180deg);\n ",
          [
            Y("&:hover", [
              O("top", {
                transform: "rotate(12deg) scale(1.15) translateY(-2px)",
              }),
              O("bottom", {
                transform: "rotate(-12deg) scale(1.15) translateY(2px)",
              }),
            ]),
          ],
        ),
      ]),
      $("collapsed", [
        T("layout-toggle-bar", [
          Y("&:hover", [
            O("top", {
              transform: "rotate(-12deg) scale(1.15) translateY(-2px)",
            }),
            O("bottom", {
              transform: "rotate(12deg) scale(1.15) translateY(2px)",
            }),
          ]),
        ]),
        T("layout-toggle-button", [
          T("base-icon", "\n transform: rotate(0);\n "),
        ]),
      ]),
      T(
        "layout-toggle-button",
        "\n transition:\n color .3s var(--n-bezier),\n right .3s var(--n-bezier),\n left .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n cursor: pointer;\n width: 24px;\n height: 24px;\n position: absolute;\n top: 50%;\n right: 0;\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n font-size: 18px;\n color: var(--n-toggle-button-icon-color);\n border: var(--n-toggle-button-border);\n background-color: var(--n-toggle-button-color);\n box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);\n transform: translateX(50%) translateY(-50%);\n z-index: 1;\n ",
        [
          T(
            "base-icon",
            "\n transition: transform .3s var(--n-bezier);\n transform: rotate(180deg);\n ",
          ),
        ],
      ),
      T(
        "layout-toggle-bar",
        "\n cursor: pointer;\n height: 72px;\n width: 32px;\n position: absolute;\n top: calc(50% - 36px);\n right: -28px;\n ",
        [
          O(
            "top, bottom",
            "\n position: absolute;\n width: 4px;\n border-radius: 2px;\n height: 38px;\n left: 14px;\n transition: \n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n ",
          ),
          O("bottom", "\n position: absolute;\n top: 34px;\n "),
          Y("&:hover", [
            O("top", {
              transform: "rotate(12deg) scale(1.15) translateY(-2px)",
            }),
            O("bottom", {
              transform: "rotate(-12deg) scale(1.15) translateY(2px)",
            }),
          ]),
          O("top, bottom", { backgroundColor: "var(--n-toggle-bar-color)" }),
          Y("&:hover", [
            O("top, bottom", {
              backgroundColor: "var(--n-toggle-bar-color-hover)",
            }),
          ]),
        ],
      ),
      O(
        "border",
        "\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n width: 1px;\n transition: background-color .3s var(--n-bezier);\n ",
      ),
      T(
        "layout-sider-scroll-container",
        "\n flex-grow: 1;\n flex-shrink: 0;\n box-sizing: border-box;\n height: 100%;\n opacity: 0;\n transition: opacity .3s var(--n-bezier);\n max-width: 100%;\n ",
      ),
      $("show-content", [T("layout-sider-scroll-container", { opacity: 1 })]),
      $(
        "absolute-positioned",
        "\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n ",
      ),
    ],
  ),
  ur = re({
    name: "LayoutToggleButton",
    props: { clsPrefix: { type: String, required: !0 }, onClick: Function },
    render() {
      const { clsPrefix: e } = this;
      return v(
        "div",
        { class: "".concat(e, "-layout-toggle-button"), onClick: this.onClick },
        v(wt, { clsPrefix: e }, { default: () => v(So, null) }),
      );
    },
  }),
  fr = re({
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
  hr = {
    position: sn,
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
  vr = re({
    name: "LayoutSider",
    props: Object.assign(Object.assign({}, ge.props), hr),
    setup(e) {
      const t = be(dn),
        n = M(null),
        o = M(null),
        r = M(e.defaultCollapsed),
        i = Fe(j(e, "collapsed"), r),
        s = D(() => ut(i.value ? e.collapsedWidth : e.width)),
        f = D(() =>
          e.collapseMode !== "transform" ? {} : { minWidth: ut(e.width) },
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
            onCollapse: A,
          } = e,
          { value: H } = i;
        b && ne(b, !H),
          x && ne(x, !H),
          (r.value = !H),
          H ? E && ne(E) : A && ne(A);
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
      Qt(() => {
        if (e.nativeScrollbar) {
          const x = n.value;
          x && ((x.scrollTop = h), (x.scrollLeft = g));
        }
      }),
        tt(lr, { collapsedRef: i, collapseModeRef: j(e, "collapseMode") });
      const { mergedClsPrefixRef: k, inlineThemeDisabled: w } = Ue(e),
        m = ge("Layout", "-layout-sider", cr, an, e, k);
      function y(x) {
        var b, E;
        x.propertyName === "max-width" &&
          (i.value
            ? (b = e.onAfterLeave) === null || b === void 0 || b.call(e)
            : (E = e.onAfterEnter) === null || E === void 0 || E.call(e));
      }
      const L = { scrollTo: a },
        P = D(() => {
          const {
              common: { cubicBezierEaseInOut: x },
              self: b,
            } = m.value,
            {
              siderToggleButtonColor: E,
              siderToggleButtonBorder: A,
              siderToggleBarColor: H,
              siderToggleBarColorHover: F,
            } = b,
            X = {
              "--n-bezier": x,
              "--n-toggle-button-color": E,
              "--n-toggle-button-border": A,
              "--n-toggle-bar-color": H,
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
          mergedTheme: m,
          styleMaxWidth: s,
          mergedCollapsed: i,
          scrollContainerStyle: f,
          siderPlacement: d,
          handleNativeElScroll: N,
          handleTransitionend: y,
          handleTriggerClick: c,
          inlineThemeDisabled: w,
          cssVars: P,
          themeClass: p == null ? void 0 : p.themeClass,
          onRender: p == null ? void 0 : p.onRender,
        },
        L,
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
              { maxWidth: this.styleMaxWidth, width: ut(this.width) },
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
                Jt,
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
              ? v(fr, {
                  clsPrefix: t,
                  class: n ? this.collapsedTriggerClass : this.triggerClass,
                  style: n ? this.collapsedTriggerStyle : this.triggerStyle,
                  onClick: this.handleTriggerClick,
                })
              : v(ur, {
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
  un = We("n-tree-select"),
  Ge = We("n-tree"),
  gr = re({
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
      const { renderSwitcherIconRef: t } = be(Ge, null);
      return () => {
        const { clsPrefix: n, expanded: o, hide: r, indent: i, onClick: s } = e;
        return v(
          "span",
          {
            "data-switcher": !0,
            class: [
              "".concat(n, "-tree-node-switcher"),
              o && "".concat(n, "-tree-node-switcher--expanded"),
              r && "".concat(n, "-tree-node-switcher--hide"),
            ],
            style: { width: "".concat(i, "px") },
            onClick: s,
          },
          v(
            "div",
            { class: "".concat(n, "-tree-node-switcher__icon") },
            v(Zt, null, {
              default: () => {
                if (e.loading)
                  return v(ro, {
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
                      wt,
                      { clsPrefix: n, key: "switcher" },
                      { default: () => v(No, null) },
                    );
              },
            }),
          ),
        );
      };
    },
  }),
  br = re({
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
      const t = be(Ge);
      function n(r) {
        const { onCheck: i } = e;
        i && i(r);
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
        focusable: i,
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
        v(or, {
          focusable: i,
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
  yr = re({
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
        } = be(Ge),
        i = M(null);
      function s(d) {
        const { onClick: a } = e;
        a && a(d);
      }
      function f(d) {
        s(d);
      }
      return {
        selfRef: i,
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
        renderLabel: i,
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
              s ? s({ option: c, selected: r, checked: o }) : ft(g),
            )
          : null,
        v(
          "div",
          { class: "".concat(e, "-tree-node-content__text") },
          i ? i({ option: c, selected: r, checked: o }) : ft(N),
        ),
        f || h
          ? v(
              "div",
              { class: "".concat(e, "-tree-node-content__suffix") },
              f ? f({ option: c, selected: r, checked: o }) : ft(h),
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
    const i = e === "before" ? "top" : "bottom";
    (r[i] = 0),
      (r.left = "".concat(o.offsetLeft + 6 - t * n, "px")),
      (r.height = "2px"),
      (r.backgroundColor = "var(--n-drop-mark-color)"),
      (r.transformOrigin = i),
      (r.borderRadius = "1px"),
      (r.transform = e === "before" ? "translateY(-4px)" : "translateY(4px)");
  }
  return v("div", { style: r });
}
function mr({ dropPosition: e, node: t }) {
  return t.isLeaf === !1 || t.children ? !0 : e !== "inside";
}
function kr(e) {
  return D(() => (e.leafOnly ? "child" : e.checkStrategy));
}
function ke(e, t) {
  return !!e.rawNode[t];
}
function fn(e, t, n, o) {
  e == null ||
    e.forEach((r) => {
      n(r), fn(r[t], t, n, o), o(r);
    });
}
function xr(e, t, n, o, r) {
  const i = new Set(),
    s = new Set(),
    f = [];
  return (
    fn(
      e,
      o,
      (d) => {
        if ((f.push(d), r(t, d))) {
          s.add(d[n]);
          for (let a = f.length - 2; a >= 0; --a)
            if (!i.has(f[a][n])) i.add(f[a][n]);
            else return;
        }
      },
      () => {
        f.pop();
      },
    ),
    { expandedKeys: Array.from(i), highlightKeySet: s }
  );
}
if (lo && Image) {
  const e = new Image();
  e.src =
    "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
}
function pr(e, t, n, o, r) {
  const i = new Set(),
    s = new Set(),
    f = new Set(),
    d = [],
    a = [],
    c = [];
  function g(N) {
    N.forEach((k) => {
      if ((c.push(k), t(n, k))) {
        i.add(k[o]), f.add(k[o]);
        for (let m = c.length - 2; m >= 0; --m) {
          const y = c[m][o];
          if (!s.has(y)) s.add(y), i.has(y) && i.delete(y);
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
      const m = w[o],
        y = i.has(m),
        L = s.has(m);
      if (!y && !L) return;
      const P = w[r];
      if (P)
        if (y) k.push(w);
        else {
          d.push(m);
          const p = Object.assign(Object.assign({}, w), { [r]: [] });
          k.push(p), h(P, p[r]);
        }
      else k.push(w);
    });
  }
  return h(e, a), { filteredTree: a, highlightKeySet: f, expandedKeys: d };
}
const hn = re({
  name: "TreeNode",
  props: {
    clsPrefix: { type: String, required: !0 },
    tmNode: { type: Object, required: !0 },
  },
  setup(e) {
    const t = be(Ge),
      {
        droppingNodeParentRef: n,
        droppingMouseNodeRef: o,
        draggingNodeRef: r,
        droppingPositionRef: i,
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
      m = oe(() => !!e.tmNode.rawNode.checkboxDisabled),
      y = oe(() => ke(e.tmNode, h.value)),
      L = oe(() => t.disabledRef.value || y.value),
      P = D(() => {
        const { value: S } = f;
        if (S) return S({ option: e.tmNode.rawNode });
      }),
      p = M(null),
      x = { value: null };
    Ct(() => {
      x.value = p.value.$el;
    });
    function b() {
      const S = () => {
        const { tmNode: z } = e;
        if (!z.isLeaf && !z.shallowLoaded) {
          if (!t.loadingKeysRef.value.has(z.key))
            t.loadingKeysRef.value.add(z.key);
          else return;
          const {
            onLoadRef: { value: U },
          } = t;
          U &&
            U(z.rawNode)
              .then((te) => {
                te !== !1 && t.handleSwitcherClick(z);
              })
              .finally(() => {
                t.loadingKeysRef.value.delete(z.key);
              });
        } else t.handleSwitcherClick(z);
      };
      k.value ? setTimeout(S, 0) : S();
    }
    const E = oe(
        () =>
          !y.value &&
          t.selectableRef.value &&
          (t.internalTreeSelect
            ? t.mergedCheckStrategyRef.value !== "child" ||
              (t.multipleRef.value && t.cascadeRef.value) ||
              e.tmNode.isLeaf
            : !0),
      ),
      A = oe(
        () =>
          t.checkableRef.value &&
          (t.cascadeRef.value ||
            t.mergedCheckStrategyRef.value !== "child" ||
            e.tmNode.isLeaf),
      ),
      H = oe(() => t.displayedCheckedKeysRef.value.includes(e.tmNode.key)),
      F = oe(() => {
        const { value: S } = A;
        if (!S) return !1;
        const { value: z } = g,
          { tmNode: U } = e;
        return typeof z == "boolean" ? !U.disabled && z : z(e.tmNode.rawNode);
      });
    function X(S) {
      const { value: z } = t.expandOnClickRef,
        { value: U } = E,
        { value: te } = F;
      if ((!U && !z && !te) || Ze(S, "checkbox") || Ze(S, "switcher")) return;
      const { tmNode: le } = e;
      U && t.handleSelect(le), z && !le.isLeaf && b(), te && B(!H.value);
    }
    function ae(S) {
      var z, U;
      if (!(Ze(S, "checkbox") || Ze(S, "switcher"))) {
        if (!L.value) {
          const te = w.value;
          let le = !1;
          if (te)
            switch (te({ option: e.tmNode.rawNode })) {
              case "toggleCheck":
                (le = !0), B(!H.value);
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
        (U = (z = P.value) === null || z === void 0 ? void 0 : z.onClick) ===
          null ||
          U === void 0 ||
          U.call(z, S);
      }
    }
    function R(S) {
      a.value || ae(S);
    }
    function _(S) {
      a.value && ae(S);
    }
    function B(S) {
      t.handleCheck(e.tmNode, S);
    }
    function G(S) {
      t.handleDragStart({ event: S, node: e.tmNode });
    }
    function J(S) {
      S.currentTarget === S.target &&
        t.handleDragEnter({ event: S, node: e.tmNode });
    }
    function V(S) {
      S.preventDefault(), t.handleDragOver({ event: S, node: e.tmNode });
    }
    function W(S) {
      t.handleDragEnd({ event: S, node: e.tmNode });
    }
    function ee(S) {
      S.currentTarget === S.target &&
        t.handleDragLeave({ event: S, node: e.tmNode });
    }
    function se(S) {
      S.preventDefault(),
        i.value !== null &&
          t.handleDrop({ event: S, node: e.tmNode, dropPosition: i.value });
    }
    const ye = D(() => {
      const { clsPrefix: S } = e,
        { value: z } = d;
      if (N.value) {
        const U = [];
        let te = e.tmNode.parent;
        for (; te; )
          te.isLastChild
            ? U.push(
                v(
                  "div",
                  { class: "".concat(S, "-tree-node-indent") },
                  v("div", { style: { width: "".concat(z, "px") } }),
                ),
              )
            : U.push(
                v(
                  "div",
                  {
                    class: [
                      "".concat(S, "-tree-node-indent"),
                      "".concat(S, "-tree-node-indent--show-line"),
                    ],
                  },
                  v("div", { style: { width: "".concat(z, "px") } }),
                ),
              ),
            (te = te.parent);
        return U.reverse();
      } else
        return io(
          e.tmNode.level,
          v(
            "div",
            { class: "".concat(e.clsPrefix, "-tree-node-indent") },
            v("div", { style: { width: "".concat(z, "px") } }),
          ),
        );
    });
    return {
      showDropMark: oe(() => {
        const { value: S } = r;
        if (!S) return;
        const { value: z } = i;
        if (!z) return;
        const { value: U } = o;
        if (!U) return;
        const { tmNode: te } = e;
        return te.key === U.key;
      }),
      showDropMarkAsParent: oe(() => {
        const { value: S } = n;
        if (!S) return !1;
        const { tmNode: z } = e,
          { value: U } = i;
        return U === "before" || U === "after" ? S.key === z.key : !1;
      }),
      pending: oe(() => t.pendingNodeKeyRef.value === e.tmNode.key),
      loading: oe(() => t.loadingKeysRef.value.has(e.tmNode.key)),
      highlight: oe(() => {
        var S;
        return (S = t.highlightKeySetRef.value) === null || S === void 0
          ? void 0
          : S.has(e.tmNode.key);
      }),
      checked: H,
      indeterminate: oe(() =>
        t.displayedIndeterminateKeysRef.value.includes(e.tmNode.key),
      ),
      selected: oe(() => t.mergedSelectedKeysRef.value.includes(e.tmNode.key)),
      expanded: oe(() => t.mergedExpandedKeysRef.value.includes(e.tmNode.key)),
      disabled: L,
      checkable: A,
      mergedCheckOnClick: F,
      checkboxDisabled: m,
      selectable: E,
      expandOnClick: t.expandOnClickRef,
      internalScrollable: t.internalScrollableRef,
      draggable: t.draggableRef,
      blockLine: a,
      nodeProps: P,
      checkboxFocusable: t.internalCheckboxFocusableRef,
      droppingPosition: i,
      droppingOffsetLevel: s,
      indent: d,
      checkboxPlacement: c,
      showLine: N,
      contentInstRef: p,
      contentElRef: x,
      indentNodes: ye,
      handleCheck: B,
      handleDrop: se,
      handleDragStart: G,
      handleDragEnter: J,
      handleDragOver: V,
      handleDragEnd: W,
      handleDragLeave: ee,
      handleLineClick: _,
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
        selected: i,
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
        checkboxPlacement: m,
      } = this,
      y =
        d && !h
          ? {
              onDragenter: this.handleDragEnter,
              onDragleave: this.handleDragLeave,
              onDragend: this.handleDragEnd,
              onDrop: this.handleDrop,
              onDragover: this.handleDragOver,
            }
          : void 0,
      L = k ? tn(e.key) : void 0,
      P = m === "right",
      p = n
        ? v(br, {
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
      Object.assign({ class: "".concat(t, "-tree-node-wrapper") }, y),
      v(
        "div",
        Object.assign({}, a ? w : void 0, {
          class: [
            "".concat(t, "-tree-node"),
            {
              ["".concat(t, "-tree-node--selected")]: i,
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
          "data-key": L,
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
          : v(gr, {
              clsPrefix: t,
              expanded: this.expanded,
              selected: i,
              loading: this.loading,
              hide: e.isLeaf,
              tmNode: this.tmNode,
              indent: c,
              onClick: this.handleSwitcherClick,
            }),
        P ? null : p,
        v(yr, {
          ref: "contentInstRef",
          clsPrefix: t,
          checked: s,
          selected: i,
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
function Cr({
  props: e,
  fNodesRef: t,
  mergedExpandedKeysRef: n,
  mergedSelectedKeysRef: o,
  mergedCheckedKeysRef: r,
  handleCheck: i,
  handleSelect: s,
  handleSwitcherClick: f,
}) {
  const { value: d } = o,
    a = be(un, null),
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
        const { value: m } = t;
        let y = 0;
        for (; y < m.length; ) {
          if (!m[y].disabled) {
            c.value = m[y].key;
            break;
          }
          y += 1;
        }
      }
    } else {
      const { value: m } = t;
      let y = m.findIndex((L) => L.key === k);
      if (!~y) return { enterBehavior: null };
      if (h.key === "Enter") {
        const L = m[y];
        switch (
          ((w =
            ((N = e.overrideDefaultNodeClickBehavior) === null || N === void 0
              ? void 0
              : N.call(e, { option: L.rawNode })) || null),
          w)
        ) {
          case "toggleCheck":
            i(L, !r.value.includes(L.key));
            break;
          case "toggleSelect":
            s(L);
            break;
          case "toggleExpand":
            f(L);
            break;
          case "none":
            break;
          case "default":
          default:
            (w = "default"), s(L);
        }
      } else if (h.key === "ArrowDown")
        for (h.preventDefault(), y += 1; y < m.length; ) {
          if (!m[y].disabled) {
            c.value = m[y].key;
            break;
          }
          y += 1;
        }
      else if (h.key === "ArrowUp")
        for (h.preventDefault(), y -= 1; y >= 0; ) {
          if (!m[y].disabled) {
            c.value = m[y].key;
            break;
          }
          y -= 1;
        }
      else if (h.key === "ArrowLeft") {
        const L = m[y];
        if (L.isLeaf || !n.value.includes(k)) {
          const P = L.getParent();
          P && (c.value = P.key);
        } else f(L);
      } else if (h.key === "ArrowRight") {
        const L = m[y];
        if (L.isLeaf) return { enterBehavior: null };
        if (!n.value.includes(k)) f(L);
        else
          for (y += 1; y < m.length; ) {
            if (!m[y].disabled) {
              c.value = m[y].key;
              break;
            }
            y += 1;
          }
      }
    }
    return { enterBehavior: w };
  }
  return { pendingNodeKeyRef: c, handleKeydown: g };
}
const wr = re({
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
        ao,
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
                style: { height: Re(this.height) },
              },
              this.nodes.map((t) => v(hn, { clsPrefix: e, tmNode: t })),
            ),
        },
      );
    },
  }),
  kt = Yt(),
  Sr = T("tree", "\n font-size: var(--n-font-size);\n outline: none;\n", [
    Y("ul, li", "\n margin: 0;\n padding: 0;\n list-style: none;\n "),
    Y(">", [T("tree-node", [Y("&:first-child", "margin-top: 0;")])]),
    T("tree-motion-wrapper", [
      $("expand", [zt({ duration: "0.2s" })]),
      $("collapse", [zt({ duration: "0.2s", reverse: !0 })]),
    ]),
    T(
      "tree-node-wrapper",
      "\n box-sizing: border-box;\n padding: var(--n-node-wrapper-padding);\n ",
    ),
    T(
      "tree-node",
      "\n transform: translate3d(0,0,0);\n position: relative;\n display: flex;\n border-radius: var(--n-node-border-radius);\n transition: background-color .3s var(--n-bezier);\n ",
      [
        $("highlight", [
          T("tree-node-content", [
            O(
              "text",
              "border-bottom-color: var(--n-node-text-color-disabled);",
            ),
          ]),
        ]),
        $("disabled", [
          T(
            "tree-node-content",
            "\n color: var(--n-node-text-color-disabled);\n cursor: not-allowed;\n ",
          ),
        ]),
        $e("disabled", [
          $("clickable", [T("tree-node-content", "\n cursor: pointer;\n ")]),
        ]),
      ],
    ),
    $("block-node", [T("tree-node-content", "\n flex: 1;\n min-width: 0;\n ")]),
    $e("block-line", [
      T("tree-node", [
        $e("disabled", [
          T("tree-node-content", [
            Y("&:hover", "background: var(--n-node-color-hover);"),
          ]),
          $("selectable", [
            T("tree-node-content", [
              Y("&:active", "background: var(--n-node-color-pressed);"),
            ]),
          ]),
          $("pending", [
            T(
              "tree-node-content",
              "\n background: var(--n-node-color-hover);\n ",
            ),
          ]),
          $("selected", [
            T("tree-node-content", "background: var(--n-node-color-active);"),
          ]),
        ]),
        $("selected", [
          T("tree-node-content", "background: var(--n-node-color-active);"),
        ]),
      ]),
    ]),
    $("block-line", [
      T("tree-node", [
        $e("disabled", [
          Y("&:hover", "background: var(--n-node-color-hover);"),
          $("pending", "\n background: var(--n-node-color-hover);\n "),
          $("selectable", [
            $e("selected", [
              Y("&:active", "background: var(--n-node-color-pressed);"),
            ]),
          ]),
          $("selected", "background: var(--n-node-color-active);"),
        ]),
        $("selected", "background: var(--n-node-color-active);"),
        $("disabled", "\n cursor: not-allowed;\n "),
      ]),
    ]),
    T("tree-node-indent", "\n flex-grow: 0;\n flex-shrink: 0;\n ", [
      $("show-line", "position: relative", [
        Y(
          "&::before",
          '\n position: absolute;\n left: 50%;\n border-left: 1px solid var(--n-line-color);\n transition: border-color .3s var(--n-bezier);\n transform: translate(-50%);\n content: "";\n top: var(--n-line-offset-top);\n bottom: var(--n-line-offset-bottom);\n ',
        ),
        $("last-child", [Y("&::before", "\n bottom: 50%;\n ")]),
        $("is-leaf", [
          Y(
            "&::after",
            '\n position: absolute;\n content: "";\n left: calc(50% + 0.5px);\n right: 0;\n bottom: 50%;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-line-color);\n ',
          ),
        ]),
      ]),
      $e("show-line", "height: 0;"),
    ]),
    T(
      "tree-node-switcher",
      "\n cursor: pointer;\n display: inline-flex;\n flex-shrink: 0;\n height: var(--n-node-content-height);\n align-items: center;\n justify-content: center;\n transition: transform .15s var(--n-bezier);\n vertical-align: bottom;\n ",
      [
        O(
          "icon",
          "\n position: relative;\n height: 14px;\n width: 14px;\n display: flex;\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n font-size: 14px;\n ",
          [
            T("icon", [kt]),
            T(
              "base-loading",
              "\n color: var(--n-loading-color);\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n ",
              [kt],
            ),
            T("base-icon", [kt]),
          ],
        ),
        $("hide", "visibility: hidden;"),
        $("expanded", "transform: rotate(90deg);"),
      ],
    ),
    T(
      "tree-node-checkbox",
      "\n display: inline-flex;\n height: var(--n-node-content-height);\n vertical-align: bottom;\n align-items: center;\n justify-content: center;\n ",
    ),
    T(
      "tree-node-content",
      "\n user-select: none;\n position: relative;\n display: inline-flex;\n align-items: center;\n min-height: var(--n-node-content-height);\n box-sizing: border-box;\n line-height: var(--n-line-height);\n vertical-align: bottom;\n padding: 0 6px 0 4px;\n cursor: default;\n border-radius: var(--n-node-border-radius);\n color: var(--n-node-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",
      [
        Y("&:last-child", "margin-bottom: 0;"),
        O("prefix", "\n display: inline-flex;\n margin-right: 8px;\n "),
        O(
          "text",
          "\n border-bottom: 1px solid #0000;\n transition: border-color .3s var(--n-bezier);\n flex-grow: 1;\n max-width: 100%;\n ",
        ),
        O("suffix", "\n display: inline-flex;\n "),
      ],
    ),
    O("empty", "margin: auto;"),
  ]);
var Rr = function (e, t, n, o) {
  function r(i) {
    return i instanceof n
      ? i
      : new n(function (s) {
          s(i);
        });
  }
  return new (n || (n = Promise))(function (i, s) {
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
      c.done ? i(c.value) : r(c.value).then(f, d);
    }
    a((o = o.apply(e, [])).next());
  });
};
function qt(e, t, n, o) {
  return {
    getIsGroup() {
      return !1;
    },
    getKey(i) {
      return i[e];
    },
    getChildren: o || ((i) => i[t]),
    getDisabled(i) {
      return !!(i[n] || i.checkboxDisabled);
    },
  };
}
const Nr = {
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
  Tr = Object.assign(
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
        allowDrop: { type: Function, default: mr },
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
      Nr,
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
  _r = re({
    name: "Tree",
    props: Tr,
    setup(e) {
      const {
          mergedClsPrefixRef: t,
          inlineThemeDisabled: n,
          mergedRtlRef: o,
        } = Ue(e),
        r = Xt("Tree", o, t),
        i = ge("Tree", "-tree", Sr, so, e, t),
        s = M(null),
        f = M(null),
        d = M(null);
      function a() {
        var l;
        return (l = d.value) === null || l === void 0 ? void 0 : l.listElRef;
      }
      function c() {
        var l;
        return (l = d.value) === null || l === void 0 ? void 0 : l.itemsElRef;
      }
      const g = D(() => {
          const { filter: l } = e;
          if (l) return l;
          const { labelField: u } = e;
          return (C, K) => {
            if (!C.length) return !0;
            const I = K[u];
            return typeof I == "string"
              ? I.toLowerCase().includes(C.toLowerCase())
              : !1;
          };
        }),
        h = D(() => {
          const { pattern: l } = e;
          return l
            ? !l.length || !g.value
              ? {
                  filteredTree: e.data,
                  highlightKeySet: null,
                  expandedKeys: void 0,
                }
              : pr(e.data, g.value, l, e.keyField, e.childrenField)
            : {
                filteredTree: e.data,
                highlightKeySet: null,
                expandedKeys: void 0,
              };
        }),
        N = D(() =>
          Vt(
            e.showIrrelevantNodes ? e.data : h.value.filteredTree,
            qt(e.keyField, e.childrenField, e.disabledField, e.getChildren),
          ),
        ),
        k = be(un, null),
        w = e.internalTreeSelect
          ? k.dataTreeMate
          : D(() =>
              e.showIrrelevantNodes
                ? N.value
                : Vt(
                    e.data,
                    qt(
                      e.keyField,
                      e.childrenField,
                      e.disabledField,
                      e.getChildren,
                    ),
                  ),
            ),
        { watchProps: m } = e,
        y = M([]);
      m != null && m.includes("defaultCheckedKeys")
        ? Oe(() => {
            y.value = e.defaultCheckedKeys;
          })
        : (y.value = e.defaultCheckedKeys);
      const L = j(e, "checkedKeys"),
        P = Fe(L, y),
        p = D(() =>
          w.value.getCheckedKeys(P.value, {
            cascade: e.cascade,
            allowNotLoaded: e.allowCheckingNotLoaded,
          }),
        ),
        x = kr(e),
        b = D(() => p.value.checkedKeys),
        E = D(() => {
          const { indeterminateKeys: l } = e;
          return l !== void 0 ? l : p.value.indeterminateKeys;
        }),
        A = M([]);
      m != null && m.includes("defaultSelectedKeys")
        ? Oe(() => {
            A.value = e.defaultSelectedKeys;
          })
        : (A.value = e.defaultSelectedKeys);
      const H = j(e, "selectedKeys"),
        F = Fe(H, A),
        X = M([]),
        ae = (l) => {
          X.value = e.defaultExpandAll
            ? w.value.getNonLeafKeys()
            : l === void 0
              ? e.defaultExpandedKeys
              : l;
        };
      m != null && m.includes("defaultExpandedKeys")
        ? Oe(() => {
            ae(void 0);
          })
        : Oe(() => {
            ae(e.defaultExpandedKeys);
          });
      const R = j(e, "expandedKeys"),
        _ = Fe(R, X),
        B = D(() => N.value.getFlattenedNodes(_.value)),
        { pendingNodeKeyRef: G, handleKeydown: J } = Cr({
          props: e,
          mergedCheckedKeysRef: P,
          mergedSelectedKeysRef: F,
          fNodesRef: B,
          mergedExpandedKeysRef: _,
          handleCheck: at,
          handleSelect: st,
          handleSwitcherClick: _t,
        });
      let V = null,
        W = null;
      const ee = M(new Set()),
        se = D(() => e.internalHighlightKeySet || h.value.highlightKeySet),
        ye = Fe(se, ee),
        S = M(new Set()),
        z = D(() => _.value.filter((l) => !S.value.has(l)));
      let U = 0;
      const te = M(null),
        le = M(null),
        _e = M(null),
        Ke = M(null),
        Ie = M(0),
        nt = D(() => {
          const { value: l } = le;
          return l ? l.parent : null;
        });
      let ot = !1;
      Xe(
        j(e, "data"),
        () => {
          (ot = !0),
            He(() => {
              ot = !1;
            }),
            S.value.clear(),
            (G.value = null),
            je();
        },
        { deep: !1 },
      );
      let rt = !1;
      const lt = () => {
        (rt = !0),
          He(() => {
            rt = !1;
          });
      };
      let Me;
      Xe(j(e, "pattern"), (l, u) => {
        if (e.showIrrelevantNodes)
          if (((Me = void 0), l)) {
            const { expandedKeys: C, highlightKeySet: K } = xr(
              e.data,
              e.pattern,
              e.keyField,
              e.childrenField,
              g.value,
            );
            (ee.value = K),
              lt(),
              Ee(C, ce(C), { node: null, action: "filter" });
          } else ee.value = new Set();
        else if (!l.length)
          Me !== void 0 &&
            (lt(), Ee(Me, ce(Me), { node: null, action: "filter" }));
        else {
          u.length || (Me = _.value);
          const { expandedKeys: C } = h.value;
          C !== void 0 &&
            (lt(), Ee(C, ce(C), { node: null, action: "filter" }));
        }
      });
      function Nt(l) {
        return Rr(this, void 0, void 0, function* () {
          const { onLoad: u } = e;
          if (!u) {
            yield Promise.resolve();
            return;
          }
          const { value: C } = S;
          if (!C.has(l.key)) {
            C.add(l.key);
            try {
              (yield u(l.rawNode)) === !1 && Pe();
            } catch (K) {
              console.error(K), Pe();
            }
            C.delete(l.key);
          }
        });
      }
      Oe(() => {
        var l;
        const { value: u } = N;
        if (!u) return;
        const { getNode: C } = u;
        (l = _.value) === null ||
          l === void 0 ||
          l.forEach((K) => {
            const I = C(K);
            I && !I.shallowLoaded && Nt(I);
          });
      });
      const Le = M(!1),
        me = M([]);
      Xe(z, (l, u) => {
        if (!e.animated || rt) {
          He(qe);
          return;
        }
        if (ot) return;
        const C = Se(i.value.self.nodeHeight),
          K = new Set(u);
        let I = null,
          Q = null;
        for (const Z of l)
          if (!K.has(Z)) {
            if (I !== null) return;
            I = Z;
          }
        const de = new Set(l);
        for (const Z of u)
          if (!de.has(Z)) {
            if (Q !== null) return;
            Q = Z;
          }
        if (I === null && Q === null) return;
        const { virtualScroll: ue } = e,
          ze = (ue ? d.value.listElRef : s.value).offsetHeight,
          Ae = Math.ceil(ze / C) + 1;
        let fe;
        if (
          (I !== null && (fe = u),
          Q !== null &&
            (fe === void 0 ? (fe = l) : (fe = fe.filter((Z) => Z !== Q))),
          (Le.value = !0),
          (me.value = N.value.getFlattenedNodes(fe)),
          I !== null)
        ) {
          const Z = me.value.findIndex((he) => he.key === I);
          if (~Z) {
            const he = me.value[Z].children;
            if (he) {
              const ve = pt(he, l);
              me.value.splice(Z + 1, 0, {
                __motion: !0,
                mode: "expand",
                height: ue ? ve.length * C : void 0,
                nodes: ue ? ve.slice(0, Ae) : ve,
              });
            }
          }
        }
        if (Q !== null) {
          const Z = me.value.findIndex((he) => he.key === Q);
          if (~Z) {
            const he = me.value[Z].children;
            if (!he) return;
            Le.value = !0;
            const ve = pt(he, l);
            me.value.splice(Z + 1, 0, {
              __motion: !0,
              mode: "collapse",
              height: ue ? ve.length * C : void 0,
              nodes: ue ? ve.slice(0, Ae) : ve,
            });
          }
        }
      });
      const vn = D(() => $o(B.value)),
        gn = D(() => (Le.value ? me.value : B.value));
      function qe() {
        const { value: l } = f;
        l && l.sync();
      }
      function bn() {
        (Le.value = !1), e.virtualScroll && He(qe);
      }
      function ce(l) {
        const { getNode: u } = w.value;
        return l.map((C) => {
          var K;
          return (
            ((K = u(C)) === null || K === void 0 ? void 0 : K.rawNode) || null
          );
        });
      }
      function Ee(l, u, C) {
        const { "onUpdate:expandedKeys": K, onUpdateExpandedKeys: I } = e;
        (X.value = l), K && ne(K, l, u, C), I && ne(I, l, u, C);
      }
      function Tt(l, u, C) {
        const { "onUpdate:checkedKeys": K, onUpdateCheckedKeys: I } = e;
        (y.value = l), I && ne(I, l, u, C), K && ne(K, l, u, C);
      }
      function yn(l, u) {
        const {
          "onUpdate:indeterminateKeys": C,
          onUpdateIndeterminateKeys: K,
        } = e;
        C && ne(C, l, u), K && ne(K, l, u);
      }
      function it(l, u, C) {
        const { "onUpdate:selectedKeys": K, onUpdateSelectedKeys: I } = e;
        (A.value = l), I && ne(I, l, u, C), K && ne(K, l, u, C);
      }
      function mn(l) {
        const { onDragenter: u } = e;
        u && ne(u, l);
      }
      function kn(l) {
        const { onDragleave: u } = e;
        u && ne(u, l);
      }
      function xn(l) {
        const { onDragend: u } = e;
        u && ne(u, l);
      }
      function pn(l) {
        const { onDragstart: u } = e;
        u && ne(u, l);
      }
      function Cn(l) {
        const { onDragover: u } = e;
        u && ne(u, l);
      }
      function wn(l) {
        const { onDrop: u } = e;
        u && ne(u, l);
      }
      function je() {
        Sn(), Ce();
      }
      function Sn() {
        te.value = null;
      }
      function Ce() {
        (Ie.value = 0),
          (le.value = null),
          (_e.value = null),
          (Ke.value = null),
          Pe();
      }
      function Pe() {
        V && (window.clearTimeout(V), (V = null)), (W = null);
      }
      function at(l, u) {
        if (e.disabled || ke(l, e.disabledField)) return;
        if (e.internalUnifySelectCheck && !e.multiple) {
          st(l);
          return;
        }
        const C = u ? "check" : "uncheck",
          { checkedKeys: K, indeterminateKeys: I } = w.value[C](
            l.key,
            b.value,
            {
              cascade: e.cascade,
              checkStrategy: x.value,
              allowNotLoaded: e.allowCheckingNotLoaded,
            },
          );
        Tt(K, ce(K), { node: l.rawNode, action: C }), yn(I, ce(I));
      }
      function Rn(l) {
        if (e.disabled) return;
        const { key: u } = l,
          { value: C } = _,
          K = C.findIndex((I) => I === u);
        if (~K) {
          const I = Array.from(C);
          I.splice(K, 1), Ee(I, ce(I), { node: l.rawNode, action: "collapse" });
        } else {
          const I = N.value.getNode(u);
          if (!I || I.isLeaf) return;
          let Q;
          if (e.accordion) {
            const de = new Set(l.siblings.map(({ key: ue }) => ue));
            (Q = C.filter((ue) => !de.has(ue))), Q.push(u);
          } else Q = C.concat(u);
          Ee(Q, ce(Q), { node: l.rawNode, action: "expand" });
        }
      }
      function _t(l) {
        e.disabled || Le.value || Rn(l);
      }
      function st(l) {
        if (!(e.disabled || !e.selectable)) {
          if (((G.value = l.key), e.internalUnifySelectCheck)) {
            const {
              value: { checkedKeys: u, indeterminateKeys: C },
            } = p;
            e.multiple
              ? at(l, !(u.includes(l.key) || C.includes(l.key)))
              : Tt([l.key], ce([l.key]), { node: l.rawNode, action: "check" });
          }
          if (e.multiple) {
            const u = Array.from(F.value),
              C = u.findIndex((K) => K === l.key);
            ~C ? e.cancelable && u.splice(C, 1) : ~C || u.push(l.key),
              it(u, ce(u), {
                node: l.rawNode,
                action: ~C ? "unselect" : "select",
              });
          } else
            F.value.includes(l.key)
              ? e.cancelable &&
                it([], [], { node: l.rawNode, action: "unselect" })
              : it([l.key], ce([l.key]), { node: l.rawNode, action: "select" });
        }
      }
      function Nn(l) {
        if ((V && (window.clearTimeout(V), (V = null)), l.isLeaf)) return;
        W = l.key;
        const u = () => {
          if (W !== l.key) return;
          const { value: C } = _e;
          if (C && C.key === l.key && !_.value.includes(l.key)) {
            const K = _.value.concat(l.key);
            Ee(K, ce(K), { node: l.rawNode, action: "expand" });
          }
          (V = null), (W = null);
        };
        l.shallowLoaded
          ? (V = window.setTimeout(() => {
              u();
            }, 1e3))
          : (V = window.setTimeout(() => {
              Nt(l).then(() => {
                u();
              });
            }, 1e3));
      }
      function Tn({ event: l, node: u }) {
        !e.draggable ||
          e.disabled ||
          ke(u, e.disabledField) ||
          (Kt({ event: l, node: u }, !1), mn({ event: l, node: u.rawNode }));
      }
      function _n({ event: l, node: u }) {
        !e.draggable ||
          e.disabled ||
          ke(u, e.disabledField) ||
          kn({ event: l, node: u.rawNode });
      }
      function Kn(l) {
        l.target === l.currentTarget && Ce();
      }
      function In({ event: l, node: u }) {
        je(),
          !(!e.draggable || e.disabled || ke(u, e.disabledField)) &&
            xn({ event: l, node: u.rawNode });
      }
      function Ln({ event: l, node: u }) {
        !e.draggable ||
          e.disabled ||
          ke(u, e.disabledField) ||
          ((U = l.clientX), (te.value = u), pn({ event: l, node: u.rawNode }));
      }
      function Kt({ event: l, node: u }, C = !0) {
        var K;
        if (!e.draggable || e.disabled || ke(u, e.disabledField)) return;
        const { value: I } = te;
        if (!I) return;
        const { allowDrop: Q, indent: de } = e;
        C && Cn({ event: l, node: u.rawNode });
        const ue = l.currentTarget,
          { height: ze, top: Ae } = ue.getBoundingClientRect(),
          fe = l.clientY - Ae;
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
        const { value: ve } = vn;
        let q, ie;
        const Be = ve(u.key);
        if (Be === null) {
          Ce();
          return;
        }
        let Ye = !1;
        Z === "inside"
          ? ((q = u), (ie = "inside"))
          : Z === "before"
            ? u.isFirstChild
              ? ((q = u), (ie = "before"))
              : ((q = B.value[Be - 1]), (ie = "after"))
            : ((q = u), (ie = "after")),
          !q.isLeaf &&
            _.value.includes(q.key) &&
            ((Ye = !0),
            ie === "after" &&
              ((q = B.value[Be + 1]),
              q ? (ie = "before") : ((q = u), (ie = "inside"))));
        const Lt = q;
        if (
          ((_e.value = Lt),
          !Ye && I.isLastChild && I.key === q.key && (ie = "after"),
          ie === "after")
        ) {
          let Et = U - l.clientX,
            dt = 0;
          for (; Et >= de / 2 && q.parent !== null && q.isLastChild && dt < 1; )
            (Et -= de), (dt += 1), (q = q.parent);
          Ie.value = dt;
        } else Ie.value = 0;
        if (
          (I.contains(q) ||
            (ie === "inside" &&
              ((K = I.parent) === null || K === void 0 ? void 0 : K.key) ===
                q.key)) &&
          !(I.key === Lt.key && I.key === q.key)
        ) {
          Ce();
          return;
        }
        if (!Q({ node: q.rawNode, dropPosition: ie, phase: "drag" })) {
          Ce();
          return;
        }
        if (I.key === q.key) Pe();
        else if (W !== q.key)
          if (ie === "inside") {
            if (e.expandOnDragenter) {
              if ((Nn(q), !q.shallowLoaded && W !== q.key)) {
                je();
                return;
              }
            } else if (!q.shallowLoaded) {
              je();
              return;
            }
          } else Pe();
        else ie !== "inside" && Pe();
        (Ke.value = ie), (le.value = q);
      }
      function En({ event: l, node: u, dropPosition: C }) {
        if (!e.draggable || e.disabled || ke(u, e.disabledField)) return;
        const { value: K } = te,
          { value: I } = le,
          { value: Q } = Ke;
        if (
          !(!K || !I || !Q) &&
          e.allowDrop({ node: I.rawNode, dropPosition: Q, phase: "drag" }) &&
          K.key !== I.key
        ) {
          if (Q === "before") {
            const de = K.getNext({ includeDisabled: !0 });
            if (de && de.key === I.key) {
              Ce();
              return;
            }
          }
          if (Q === "after") {
            const de = K.getPrev({ includeDisabled: !0 });
            if (de && de.key === I.key) {
              Ce();
              return;
            }
          }
          wn({
            event: l,
            node: I.rawNode,
            dragNode: K.rawNode,
            dropPosition: C,
          }),
            je();
        }
      }
      function Pn() {
        qe();
      }
      function Dn() {
        qe();
      }
      function zn(l) {
        var u;
        if (e.virtualScroll || e.internalScrollable) {
          const { value: C } = f;
          if (
            !(
              (u = C == null ? void 0 : C.containerRef) === null || u === void 0
            ) &&
            u.contains(l.relatedTarget)
          )
            return;
          G.value = null;
        } else {
          const { value: C } = s;
          if (C != null && C.contains(l.relatedTarget)) return;
          G.value = null;
        }
      }
      Xe(G, (l) => {
        var u, C;
        if (l !== null) {
          if (e.virtualScroll)
            (u = d.value) === null || u === void 0 || u.scrollTo({ key: l });
          else if (e.internalScrollable) {
            const { value: K } = f;
            if (K === null) return;
            const I =
              (C = K.contentRef) === null || C === void 0
                ? void 0
                : C.querySelector('[data-key="'.concat(tn(l), '"]'));
            if (!I) return;
            K.scrollTo({ el: I });
          }
        }
      }),
        tt(Ge, {
          loadingKeysRef: S,
          highlightKeySetRef: ye,
          displayedCheckedKeysRef: b,
          displayedIndeterminateKeysRef: E,
          mergedSelectedKeysRef: F,
          mergedExpandedKeysRef: _,
          mergedThemeRef: i,
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
          droppingMouseNodeRef: _e,
          droppingNodeParentRef: nt,
          draggingNodeRef: te,
          droppingPositionRef: Ke,
          droppingOffsetLevelRef: Ie,
          fNodesRef: B,
          pendingNodeKeyRef: G,
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
          handleSwitcherClick: _t,
          handleDragEnd: In,
          handleDragEnter: Tn,
          handleDragLeave: _n,
          handleDragStart: Ln,
          handleDrop: En,
          handleDragOver: Kt,
          handleSelect: st,
          handleCheck: at,
        });
      function An(l, u) {
        var C, K;
        typeof l == "number"
          ? (C = d.value) === null || C === void 0 || C.scrollTo(l, u || 0)
          : (K = d.value) === null || K === void 0 || K.scrollTo(l);
      }
      const Bn = {
          handleKeydown: J,
          scrollTo: An,
          getCheckedData: () => {
            if (!e.checkable) return { keys: [], options: [] };
            const { checkedKeys: l } = p.value;
            return { keys: l, options: ce(l) };
          },
          getIndeterminateData: () => {
            if (!e.checkable) return { keys: [], options: [] };
            const { indeterminateKeys: l } = p.value;
            return { keys: l, options: ce(l) };
          },
        },
        It = D(() => {
          const {
              common: { cubicBezierEaseInOut: l },
              self: {
                fontSize: u,
                nodeBorderRadius: C,
                nodeColorHover: K,
                nodeColorPressed: I,
                nodeColorActive: Q,
                arrowColor: de,
                loadingColor: ue,
                nodeTextColor: ze,
                nodeTextColorDisabled: Ae,
                dropMarkColor: fe,
                nodeWrapperPadding: Z,
                nodeHeight: he,
                lineHeight: ve,
                lineColor: q,
              },
            } = i.value,
            ie = ht(Z, "top"),
            Be = ht(Z, "bottom"),
            Ye = Re(Se(he) - Se(ie) - Se(Be));
          return {
            "--n-arrow-color": de,
            "--n-loading-color": ue,
            "--n-bezier": l,
            "--n-font-size": u,
            "--n-node-border-radius": C,
            "--n-node-color-active": Q,
            "--n-node-color-hover": K,
            "--n-node-color-pressed": I,
            "--n-node-text-color": ze,
            "--n-node-text-color-disabled": Ae,
            "--n-drop-mark-color": fe,
            "--n-node-wrapper-padding": Z,
            "--n-line-offset-top": "-".concat(ie),
            "--n-line-offset-bottom": "-".concat(Be),
            "--n-node-content-height": Ye,
            "--n-line-height": ve,
            "--n-line-color": q,
          };
        }),
        De = n ? Ve("tree", void 0, It, e) : void 0;
      return Object.assign(Object.assign({}, Bn), {
        mergedClsPrefix: t,
        mergedTheme: i,
        rtlEnabled: r,
        fNodes: gn,
        aip: Le,
        selfElRef: s,
        virtualListInstRef: d,
        scrollbarInstRef: f,
        handleFocusout: zn,
        handleDragLeaveTree: Kn,
        handleScroll: Pn,
        getScrollContainer: a,
        getScrollContent: c,
        handleAfterEnter: bn,
        handleResize: Dn,
        cssVars: n ? void 0 : It,
        themeClass: De == null ? void 0 : De.themeClass,
        onRender: De == null ? void 0 : De.onRender,
      });
    },
    render() {
      var e;
      const { fNodes: t, internalRenderEmpty: n } = this;
      if (!t.length && n) return n();
      const {
          mergedClsPrefix: o,
          blockNode: r,
          blockLine: i,
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
        m = [
          "".concat(o, "-tree"),
          g && "".concat(o, "-tree--rtl"),
          a && "".concat(o, "-tree--checkable"),
          (i || r) && "".concat(o, "-tree--block-node"),
          i && "".concat(o, "-tree--block-line"),
        ],
        y = (P) =>
          "__motion" in P
            ? v(wr, {
                height: P.height,
                nodes: P.nodes,
                clsPrefix: o,
                mode: P.mode,
                onAfterEnter: this.handleAfterEnter,
              })
            : v(hn, { key: P.key, tmNode: P, clsPrefix: o });
      if (this.virtualScroll) {
        const { mergedTheme: P, internalScrollablePadding: p } = this,
          x = ht(p || "0");
        return v(
          Bt,
          Object.assign({}, N, {
            ref: "scrollbarInstRef",
            onDragleave: s ? this.handleDragLeaveTree : void 0,
            container: this.getScrollContainer,
            content: this.getScrollContent,
            class: m,
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
                      Co,
                      {
                        ref: "virtualListInstRef",
                        items: this.fNodes,
                        itemSize: Se(P.self.nodeHeight),
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
                      { default: ({ item: E }) => y(E) },
                    )
                  : At(this.$slots.empty, () => [
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
      const { internalScrollable: L } = this;
      return (
        m.push(this.themeClass),
        (e = this.onRender) === null || e === void 0 || e.call(this),
        L
          ? v(
              Bt,
              Object.assign({}, N, {
                class: m,
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
                    this.fNodes.map(y),
                  ),
              },
            )
          : v(
              "div",
              {
                class: m,
                tabindex: w,
                ref: "selfElRef",
                style: this.cssVars,
                onKeydown: k ? c : void 0,
                onFocusout: k ? h : void 0,
                onDragleave: s ? this.handleDragLeaveTree : void 0,
              },
              t.length
                ? t.map(y)
                : At(this.$slots.empty, () => [
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
  Kr = { class: "avatar flex" },
  Ir = { class: "flex-1 flex items-center" },
  Lr = { class: "text-20px font-bold p-x-24px" },
  Er = re({
    __name: "avatar",
    setup(e) {
      const t = M(co.html.title);
      return (n, o) => (
        xe(),
        Ne("div", Kr, [
          o[0] ||
            (o[0] = pe(
              "div",
              {
                class:
                  "bg-$navbar-color p-t-10px p-b-15px w-$navbar-width flex justify-center items-center",
              },
              [
                pe(
                  "div",
                  {
                    class: "w-46px of-hidden flex justify-center items-center",
                  },
                  [
                    pe("img", {
                      src: "./images/nav-icon1.png",
                      alt: "",
                      class: "w-100% h-100%",
                    }),
                  ],
                ),
              ],
              -1,
            )),
          pe("div", Ir, [pe("div", Lr, en(we(t)), 1)]),
        ])
      );
    },
  }),
  Pr = St(Er, [["__scopeId", "data-v-848c8d63"]]),
  Dr = { class: "navbar flex w-100% h-100% flex-col of-hidden" },
  zr = { class: "flex flex-1 w-100% of-hidden" },
  Ar = { class: "bg-$navbar-color h-100% of-x-hidden hide-scrollbar" },
  Br = ["onClick"],
  $r = ["src"],
  Or = { key: 0, class: "flex-1 h-100% of-x-hidden hide-scrollbar p-x-15px" },
  Fr = re({
    __name: "navbar",
    setup(e) {
      const t = uo(),
        n = fo(),
        o = M([]),
        r = D(() =>
          $t.flat.objectDeep(t.options.routes, (h) => h.filePath || h.fileName),
        ),
        i = (h) => {
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
        s = D(() => $store.nav.munes.map(i)),
        f = D(() => s.value[$store.nav.menusActive] || {}),
        d = D(() => {
          var h;
          return $t.flat.objectDeep(
            ((h = f.value) == null ? void 0 : h.children) || [],
            null,
            null,
            !1,
            !0,
            (N) => i(N),
          );
        });
      Oe(() => {
        $store.nav.setMenusActiveInfo(f.value);
      });
      const a = (h) => {
          $store.nav.setMenusActive(h),
            (o.value = []),
            He(() => {
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
                ? v(Ot, {
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
        Ct(async () => {
          var w, m;
          const h =
            (w = n.path.match(/^\/*pages\/[^/]+/)) == null ? void 0 : w[0];
          a(
            s.value.findIndex((y) => {
              var L, P;
              return (
                ((P = (L = y.url) == null ? void 0 : L.indexOf) == null
                  ? void 0
                  : P.call(L, h)) > -1
              );
            }),
          );
          const N =
              (m = n.path.match(/^\/*pages\/[^/]+\/[^/]+/)) == null
                ? void 0
                : m[0],
            k = d.value.find((y) => {
              var L, P;
              return (
                ((P = (L = y.url) == null ? void 0 : L.indexOf) == null
                  ? void 0
                  : P.call(L, N)) > -1
              );
            });
          k && k.url && (o.value = [k.url]);
        }),
        (h, N) => {
          const k = Pr,
            w = _r;
          return (
            xe(),
            Ne("div", Dr, [
              Te(k),
              pe("div", zr, [
                pe("div", Ar, [
                  (xe(!0),
                  Ne(
                    ho,
                    null,
                    vo(
                      we(s),
                      (m, y) => (
                        xe(),
                        Ne(
                          "div",
                          {
                            key: y,
                            class: go([
                              { active: h.$store.nav.menusActive === y },
                              "navbarItem w-$navbar-width h-42px text-$white p-y-15px flex flex-col justify-center items-center",
                            ]),
                            onClick: (L) => a(y),
                          },
                          [
                            c(m.icon)
                              ? (xe(),
                                bo(
                                  we(Ot),
                                  {
                                    key: 0,
                                    "icon-props": { size: 28 },
                                    name: m.icon,
                                    class: "w-28px h-28px m-b--4px",
                                  },
                                  null,
                                  8,
                                  ["name"],
                                ))
                              : (xe(),
                                Ne(
                                  "img",
                                  {
                                    key: 1,
                                    src: m.icon,
                                    alt: "",
                                    class: "w-22px h-22px m-b-4px",
                                  },
                                  null,
                                  8,
                                  $r,
                                )),
                            pe("div", null, en(m.title), 1),
                          ],
                          10,
                          Br,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
                we(d) && we(d).length > 0
                  ? (xe(),
                    Ne("div", Or, [
                      Te(
                        w,
                        {
                          data: we(d),
                          "render-label": g,
                          class: "w-100% n-tree",
                          "label-field": "title",
                          "default-selected-keys": we(o),
                          "key-field": "url",
                        },
                        null,
                        8,
                        ["data", "default-selected-keys"],
                      ),
                    ]))
                  : yo("", !0),
              ]),
            ])
          );
        }
      );
    },
  }),
  Mr = St(Fr, [["__scopeId", "data-v-c44ff8c8"]]),
  jr = {},
  Hr = { class: "layout w-100% h-100% fixed" };
function Ur(e, t) {
  const n = Mr,
    o = vr,
    r = mo("router-view"),
    i = dr,
    s = sr;
  return (
    xe(),
    Ne("div", Hr, [
      Te(
        s,
        { class: "w-100% h-100%", "has-sider": "" },
        {
          default: vt(() => [
            Te(
              o,
              {
                style: { "--n-color": "var(--navbar-background-color)" },
                class: "h-100% n-layout-sider",
              },
              { default: vt(() => [Te(n)]), _: 1 },
            ),
            Te(
              i,
              {
                style: { "--n-color": "var(--backgroundColor)" },
                "content-style": "padding: 15px;",
              },
              { default: vt(() => [Te(r)]), _: 1 },
            ),
          ]),
          _: 1,
        },
      ),
    ])
  );
}
const Gr = St(jr, [
  ["render", Ur],
  ["__scopeId", "data-v-16b3f60e"],
]);
export { Gr as default };
