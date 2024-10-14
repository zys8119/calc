System.register(["./index-legacy-CzynbWA3.js"], function (e, n) {
  "use strict";
  var t,
    o,
    r,
    l,
    i,
    a,
    s,
    d,
    c,
    u,
    h,
    f,
    v,
    p,
    b,
    g,
    m,
    y,
    k,
    x,
    C,
    w,
    S,
    R,
    N,
    L,
    T,
    z,
    I,
    P,
    D,
    K,
    B,
    A,
    $,
    F,
    E,
    O,
    j,
    _,
    M,
    U,
    H,
    V,
    W,
    q,
    G,
    Y,
    X,
    Z,
    Q,
    J,
    ee,
    ne,
    te,
    oe,
    re,
    le,
    ie,
    ae,
    se,
    de,
    ce,
    ue,
    he,
    fe,
    ve,
    pe,
    be,
    ge,
    me,
    ye,
    ke,
    xe,
    Ce,
    we,
    Se,
    Re,
    Ne,
    Le,
    Te,
    ze,
    Ie,
    Pe,
    De,
    Ke,
    Be,
    Ae;
  return {
    setters: [
      (e) => {
        (t = e.r),
          (o = e.f),
          (r = e.H),
          (l = e.J),
          (i = e.d),
          (a = e.K),
          (s = e.L),
          (d = e.M),
          (c = e.g),
          (u = e.O),
          (h = e.P),
          (f = e.Q),
          (v = e.R),
          (p = e.T),
          (b = e.s),
          (g = e.U),
          (m = e.V),
          (y = e.X),
          (k = e.Y),
          (x = e.Z),
          (C = e.$),
          (w = e.a0),
          (S = e.x),
          (R = e.y),
          (N = e.a1),
          (L = e.z),
          (T = e.A),
          (z = e.a2),
          (I = e.G),
          (P = e.C),
          (D = e.N),
          (K = e.a3),
          (B = e.a4),
          (A = e.a5),
          ($ = e.a6),
          (F = e.a7),
          (E = e.a8),
          (O = e.a9),
          (j = e.aa),
          (_ = e.ab),
          (M = e.ac),
          (U = e.ad),
          (H = e.ae),
          (V = e.af),
          (W = e.ag),
          (q = e.ah),
          (G = e.ai),
          (Y = e.aj),
          (X = e.ak),
          (Z = e.al),
          (Q = e.am),
          (J = e.an),
          (ee = e.ao),
          (ne = e.ap),
          (te = e.aq),
          (oe = e.ar),
          (re = e.as),
          (le = e.at),
          (ie = e.au),
          (ae = e.av),
          (se = e.aw),
          (de = e.ax),
          (ce = e.ay),
          (ue = e.az),
          (he = e.aA),
          (fe = e.aB),
          (ve = e.aC),
          (pe = e.aD),
          (be = e.aE),
          (ge = e.o),
          (me = e.h),
          (ye = e.e),
          (ke = e.t),
          (xe = e.i),
          (Ce = e._),
          (we = e.aF),
          (Se = e.aG),
          (Re = e.u),
          (Ne = e.p),
          (Le = e.aH),
          (Te = e.a),
          (ze = e.F),
          (Ie = e.j),
          (Pe = e.q),
          (De = e.c),
          (Ke = e.n),
          (Be = e.w),
          (Ae = e.aI);
      },
    ],
    execute: function () {
      var $e = document.createElement("style");
      function Fe(e, n) {
        let { target: t } = e;
        for (; t; ) {
          if (t.dataset && void 0 !== t.dataset[n]) return !0;
          t = t.parentElement;
        }
        return !1;
      }
      function Ee(e) {
        return "string" == typeof e ? `s-${e}` : `n-${e}`;
      }
      function Oe(e) {
        return e & -e;
      }
      ($e.textContent =
        ".navbar .navbarItem[data-v-c44ff8c8]{cursor:pointer;user-select:none}.navbar .navbarItem.active[data-v-c44ff8c8]{background-color:var(--navbar-color-active)}.navbar .navbarItem[data-v-c44ff8c8]:hover{background-color:var(--navbar-color-hover)}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node-content{flex:1}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node-switcher--hide{display:none}.navbar[data-v-c44ff8c8] .n-tree .navbarTreeItem{height:42px;display:flex;align-items:center;padding:0 23px;border-radius:8px;color:#666}.navbar[data-v-c44ff8c8] .n-tree .navbarTreeItem .navbarTreeItemIcon{margin-right:15px;width:18px;filter:invert(.1);display:flex;justify-content:center;align-items:center}.navbar[data-v-c44ff8c8] .n-tree .navbarTreeItem .navbarTreeItemLabel{flex:1}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node--selected .n-tree-node-content{background-color:transparent!important}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node--selected .navbarTreeItem{background-color:var(--primaryColor);color:#fff}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node--selected .navbarTreeItem .navbarTreeItemIcon{filter:invert(0)}.layout .n-layout-sider[data-v-16b3f60e]{width:var(--aside-width)!important;max-width:var(--aside-width)!important}\n"),
        document.head.appendChild($e);
      class je {
        constructor(e, n) {
          (this.l = e), (this.min = n);
          const t = new Array(e + 1);
          for (let o = 0; o < e + 1; ++o) t[o] = 0;
          this.ft = t;
        }
        add(e, n) {
          if (0 === n) return;
          const { l: t, ft: o } = this;
          for (e += 1; e <= t; ) (o[e] += n), (e += Oe(e));
        }
        get(e) {
          return this.sum(e + 1) - this.sum(e);
        }
        sum(e) {
          if ((void 0 === e && (e = this.l), e <= 0)) return 0;
          const { ft: n, min: t, l: o } = this;
          if (e > o)
            throw new Error("[FinweckTree.sum]: `i` is larger than length.");
          let r = e * t;
          for (; e > 0; ) (r += n[e]), (e -= Oe(e));
          return r;
        }
        getBound(e) {
          let n = 0,
            t = this.l;
          for (; t > n; ) {
            const o = Math.floor((n + t) / 2),
              r = this.sum(o);
            if (r > e) t = o;
            else {
              if (!(r < e)) return o;
              if (n === o) return this.sum(n + 1) <= e ? n + 1 : o;
              n = o;
            }
          }
          return n;
        }
      }
      let _e, Me;
      function Ue() {
        return "undefined" == typeof document
          ? 1
          : (void 0 === Me &&
              (Me = "chrome" in window ? window.devicePixelRatio : 1),
            Me);
      }
      const He = "VVirtualListXScroll",
        Ve = i({
          name: "VirtualListRow",
          props: {
            index: { type: Number, required: !0 },
            item: { type: Object, required: !0 },
          },
          setup() {
            const {
              startIndexRef: e,
              endIndexRef: n,
              columnsRef: t,
              getLeft: o,
              renderColRef: r,
              renderItemWithColsRef: l,
            } = a(He);
            return {
              startIndex: e,
              endIndex: n,
              columns: t,
              renderCol: r,
              renderItemWithCols: l,
              getLeft: o,
            };
          },
          render() {
            const {
              startIndex: e,
              endIndex: n,
              columns: t,
              renderCol: o,
              renderItemWithCols: r,
              getLeft: l,
              item: i,
            } = this;
            if (null != r)
              return r({
                itemIndex: this.index,
                startColIndex: e,
                endColIndex: n,
                allColumns: t,
                item: i,
                getLeft: l,
              });
            if (null != o) {
              const r = [];
              for (let a = e; a <= n; ++a) {
                const e = t[a];
                r.push(o({ column: e, left: l(a), item: i }));
              }
              return r;
            }
            return null;
          },
        }),
        We = y(
          ".v-vl",
          {
            maxHeight: "inherit",
            height: "100%",
            overflow: "auto",
            minWidth: "1px",
          },
          [
            y("&:not(.v-vl--show-scrollbar)", { scrollbarWidth: "none" }, [
              y(
                "&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",
                { width: 0, height: 0, display: "none" },
              ),
            ]),
          ],
        ),
        qe = i({
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
            const n = s();
            We.mount({
              id: "vueuc/virtual-list",
              head: !0,
              anchorMetaName: d,
              ssr: n,
            }),
              c(() => {
                const { defaultScrollIndex: n, defaultScrollKey: t } = e;
                null != n ? z({ index: n }) : null != t && z({ key: t });
              });
            let i = !1,
              a = !1;
            u(() => {
              (i = !1), a ? z({ top: N.value, left: m.value }) : (a = !0);
            }),
              h(() => {
                (i = !0), a || (a = !0);
              });
            const b = r(() => {
                if (null == e.renderCol && null == e.renderItemWithCols) return;
                if (0 === e.columns.length) return;
                let n = 0;
                return (
                  e.columns.forEach((e) => {
                    n += e.width;
                  }),
                  n
                );
              }),
              g = o(() => {
                const n = new Map(),
                  { keyField: t } = e;
                return (
                  e.items.forEach((e, o) => {
                    n.set(e[t], o);
                  }),
                  n
                );
              }),
              { scrollLeftRef: m, listWidthRef: y } = (function ({
                columnsRef: e,
                renderColRef: n,
                renderItemWithColsRef: i,
              }) {
                const a = t(0),
                  s = t(0),
                  d = o(() => {
                    const n = e.value;
                    if (0 === n.length) return null;
                    const t = new je(n.length, 0);
                    return (
                      n.forEach((e, n) => {
                        t.add(n, e.width);
                      }),
                      t
                    );
                  }),
                  c = r(() => {
                    const e = d.value;
                    return null !== e
                      ? Math.max(e.getBound(s.value) - 1, 0)
                      : 0;
                  }),
                  u = r(() => {
                    const n = d.value;
                    return null !== n
                      ? Math.min(
                          n.getBound(s.value + a.value) + 1,
                          e.value.length - 1,
                        )
                      : 0;
                  });
                return (
                  l(He, {
                    startIndexRef: c,
                    endIndexRef: u,
                    columnsRef: e,
                    renderColRef: n,
                    renderItemWithColsRef: i,
                    getLeft: (e) => {
                      const n = d.value;
                      return null !== n ? n.sum(e) : 0;
                    },
                  }),
                  { listWidthRef: a, scrollLeftRef: s }
                );
              })({
                columnsRef: f(e, "columns"),
                renderColRef: f(e, "renderCol"),
                renderItemWithColsRef: f(e, "renderItemWithCols"),
              }),
              x = t(null),
              C = t(void 0),
              w = new Map(),
              S = o(() => {
                const { items: n, itemSize: t, keyField: o } = e,
                  r = new je(n.length, t);
                return (
                  n.forEach((e, n) => {
                    const t = e[o],
                      l = w.get(t);
                    void 0 !== l && r.add(n, l);
                  }),
                  r
                );
              }),
              R = t(0),
              N = t(0),
              L = r(() =>
                Math.max(S.value.getBound(N.value - v(e.paddingTop)) - 1, 0),
              ),
              T = o(() => {
                const { value: n } = C;
                if (void 0 === n) return [];
                const { items: t, itemSize: o } = e,
                  r = L.value,
                  l = Math.min(r + Math.ceil(n / o + 1), t.length - 1),
                  i = [];
                for (let e = r; e <= l; ++e) i.push(t[e]);
                return i;
              }),
              z = (e, n) => {
                if ("number" == typeof e) return void K(e, n, "auto");
                const {
                  left: t,
                  top: o,
                  index: r,
                  key: l,
                  position: i,
                  behavior: a,
                  debounce: s = !0,
                } = e;
                if (void 0 !== t || void 0 !== o) K(t, o, a);
                else if (void 0 !== r) D(r, a, s);
                else if (void 0 !== l) {
                  const e = g.value.get(l);
                  void 0 !== e && D(e, a, s);
                } else
                  "bottom" === i
                    ? K(0, Number.MAX_SAFE_INTEGER, a)
                    : "top" === i && K(0, 0, a);
              };
            let I,
              P = null;
            function D(n, t, o) {
              const { value: r } = S,
                l = r.sum(n) + v(e.paddingTop);
              if (o) {
                (I = n),
                  null !== P && window.clearTimeout(P),
                  (P = window.setTimeout(() => {
                    (I = void 0), (P = null);
                  }, 16));
                const { scrollTop: e, offsetHeight: o } = x.value;
                if (l > e) {
                  const i = r.get(n);
                  l + i <= e + o ||
                    x.value.scrollTo({ left: 0, top: l + i - o, behavior: t });
                } else x.value.scrollTo({ left: 0, top: l, behavior: t });
              } else x.value.scrollTo({ left: 0, top: l, behavior: t });
            }
            function K(e, n, t) {
              x.value.scrollTo({ left: e, top: n, behavior: t });
            }
            const B = !(
              "undefined" != typeof document &&
              (void 0 === _e &&
                (_e =
                  "matchMedia" in window &&
                  window.matchMedia("(pointer:coarse)").matches),
              _e)
            );
            let A = !1;
            function $() {
              const { value: e } = x;
              null != e && ((N.value = e.scrollTop), (m.value = e.scrollLeft));
            }
            function F(e) {
              let n = e;
              for (; null !== n; ) {
                if ("none" === n.style.display) return !0;
                n = n.parentElement;
              }
              return !1;
            }
            return {
              listHeight: C,
              listStyle: { overflow: "auto" },
              keyToIndex: g,
              itemsStyle: o(() => {
                const { itemResizable: n } = e,
                  t = p(S.value.sum());
                return (
                  R.value,
                  [
                    e.itemsStyle,
                    {
                      boxSizing: "content-box",
                      width: p(b.value),
                      height: n ? "" : t,
                      minHeight: n ? t : "",
                      paddingTop: p(e.paddingTop),
                      paddingBottom: p(e.paddingBottom),
                    },
                  ]
                );
              }),
              visibleItemsStyle: o(
                () => (
                  R.value,
                  { transform: `translateY(${p(S.value.sum(L.value))})` }
                ),
              ),
              viewportItems: T,
              listElRef: x,
              itemsElRef: t(null),
              scrollTo: z,
              handleListResize: function (n) {
                if (i) return;
                if (F(n.target)) return;
                if (null == e.renderCol && null == e.renderItemWithCols) {
                  if (n.contentRect.height === C.value) return;
                } else if (
                  n.contentRect.height === C.value &&
                  n.contentRect.width === y.value
                )
                  return;
                (C.value = n.contentRect.height),
                  (y.value = n.contentRect.width);
                const { onResize: t } = e;
                void 0 !== t && t(n);
              },
              handleListScroll: function (n) {
                var t;
                null === (t = e.onScroll) || void 0 === t || t.call(e, n),
                  (B && A) || $();
              },
              handleListWheel: function (n) {
                var t;
                if (
                  (null === (t = e.onWheel) || void 0 === t || t.call(e, n), B)
                ) {
                  const e = x.value;
                  if (null != e) {
                    if (0 === n.deltaX) {
                      if (0 === e.scrollTop && n.deltaY <= 0) return;
                      if (
                        e.scrollTop + e.offsetHeight >= e.scrollHeight &&
                        n.deltaY >= 0
                      )
                        return;
                    }
                    n.preventDefault(),
                      (e.scrollTop += n.deltaY / Ue()),
                      (e.scrollLeft += n.deltaX / Ue()),
                      $(),
                      (A = !0),
                      k(() => {
                        A = !1;
                      });
                  }
                }
              },
              handleItemResize: function (n, t) {
                var o, r, l;
                if (i) return;
                if (e.ignoreItemResize) return;
                if (F(t.target)) return;
                const { value: a } = S,
                  s = g.value.get(n),
                  d = a.get(s),
                  c =
                    null !==
                      (l =
                        null ===
                          (r =
                            null === (o = t.borderBoxSize) || void 0 === o
                              ? void 0
                              : o[0]) || void 0 === r
                          ? void 0
                          : r.blockSize) && void 0 !== l
                      ? l
                      : t.contentRect.height;
                if (c === d) return;
                0 == c - e.itemSize ? w.delete(n) : w.set(n, c - e.itemSize);
                const u = c - d;
                if (0 === u) return;
                a.add(s, u);
                const h = x.value;
                if (null != h) {
                  if (void 0 === I) {
                    const e = a.sum(s);
                    h.scrollTop > e && h.scrollBy(0, u);
                  } else
                    (s < I ||
                      (s === I &&
                        c + a.sum(s) > h.scrollTop + h.offsetHeight)) &&
                      h.scrollBy(0, u);
                  $();
                }
                R.value++;
              },
            };
          },
          render() {
            const {
              itemResizable: e,
              keyField: n,
              keyToIndex: t,
              visibleItemsTag: o,
            } = this;
            return b(
              m,
              { onResize: this.handleListResize },
              {
                default: () => {
                  var r, l;
                  return b(
                    "div",
                    g(this.$attrs, {
                      class: [
                        "v-vl",
                        this.showScrollbar && "v-vl--show-scrollbar",
                      ],
                      onScroll: this.handleListScroll,
                      onWheel: this.handleListWheel,
                      ref: "listElRef",
                    }),
                    [
                      0 !== this.items.length
                        ? b(
                            "div",
                            {
                              ref: "itemsElRef",
                              class: "v-vl-items",
                              style: this.itemsStyle,
                            },
                            [
                              b(
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
                                    const {
                                      renderCol: o,
                                      renderItemWithCols: r,
                                    } = this;
                                    return this.viewportItems.map((l) => {
                                      const i = l[n],
                                        a = t.get(i),
                                        s =
                                          null != o
                                            ? b(Ve, { index: a, item: l })
                                            : void 0,
                                        d =
                                          null != r
                                            ? b(Ve, { index: a, item: l })
                                            : void 0,
                                        c = this.$slots.default({
                                          item: l,
                                          renderedCols: s,
                                          renderedItemWithCols: d,
                                          index: a,
                                        })[0];
                                      return e
                                        ? b(
                                            m,
                                            {
                                              key: i,
                                              onResize: (e) =>
                                                this.handleItemResize(i, e),
                                            },
                                            { default: () => c },
                                          )
                                        : ((c.key = i), c);
                                    });
                                  },
                                },
                              ),
                            ],
                          )
                        : null === (l = (r = this.$slots).empty) || void 0 === l
                          ? void 0
                          : l.call(r),
                    ],
                  );
                },
              },
            );
          },
        }),
        Ge = i({
          name: "ChevronRight",
          render: () =>
            b(
              "svg",
              {
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              b("path", {
                d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
                fill: "currentColor",
              }),
            ),
        }),
        Ye = i({
          name: "Empty",
          render: () =>
            b(
              "svg",
              {
                viewBox: "0 0 28 28",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              b("path", {
                d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
                fill: "currentColor",
              }),
              b("path", {
                d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
                fill: "currentColor",
              }),
            ),
        }),
        Xe = i({
          name: "Switcher",
          render: () =>
            b(
              "svg",
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
              b("path", { d: "M12 8l10 8l-10 8z" }),
            ),
        });
      function Ze(e) {
        return Array.isArray(e) ? e : [e];
      }
      const Qe = "STOP";
      function Je(e, n) {
        const t = n(e);
        void 0 !== e.children &&
          t !== Qe &&
          e.children.forEach((e) => Je(e, n));
      }
      function en(e) {
        return e.children;
      }
      function nn(e) {
        return e.key;
      }
      function tn() {
        return !1;
      }
      function on(e) {
        return !0 === e.disabled;
      }
      function rn(e) {
        var n;
        return null == e
          ? []
          : Array.isArray(e)
            ? e
            : null !== (n = e.checkedKeys) && void 0 !== n
              ? n
              : [];
      }
      function ln(e) {
        var n;
        return null == e || Array.isArray(e)
          ? []
          : null !== (n = e.indeterminateKeys) && void 0 !== n
            ? n
            : [];
      }
      function an(e, n) {
        const t = new Set(e);
        return (
          n.forEach((e) => {
            t.has(e) || t.add(e);
          }),
          Array.from(t)
        );
      }
      function sn(e, n) {
        const t = new Set(e);
        return (
          n.forEach((e) => {
            t.has(e) && t.delete(e);
          }),
          Array.from(t)
        );
      }
      function dn(e) {
        return "group" === (null == e ? void 0 : e.type);
      }
      class cn extends Error {
        constructor() {
          super(),
            (this.message =
              "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.");
        }
      }
      function un(e, n, t, o) {
        const r = fn(n, t, o, !1),
          l = fn(e, t, o, !0),
          i = (function (e, n) {
            const t = new Set();
            return (
              e.forEach((e) => {
                const o = n.treeNodeMap.get(e);
                if (void 0 !== o) {
                  let e = o.parent;
                  for (; null !== e && !e.disabled && !t.has(e.key); )
                    t.add(e.key), (e = e.parent);
                }
              }),
              t
            );
          })(e, t),
          a = [];
        return (
          r.forEach((e) => {
            (l.has(e) || i.has(e)) && a.push(e);
          }),
          a.forEach((e) => r.delete(e)),
          r
        );
      }
      function hn(e, n) {
        const {
          checkedKeys: t,
          keysToCheck: o,
          keysToUncheck: r,
          indeterminateKeys: l,
          cascade: i,
          leafOnly: a,
          checkStrategy: s,
          allowNotLoaded: d,
        } = e;
        if (!i)
          return void 0 !== o
            ? { checkedKeys: an(t, o), indeterminateKeys: Array.from(l) }
            : void 0 !== r
              ? { checkedKeys: sn(t, r), indeterminateKeys: Array.from(l) }
              : {
                  checkedKeys: Array.from(t),
                  indeterminateKeys: Array.from(l),
                };
        const { levelTreeNodeMap: c } = n;
        let u;
        u =
          void 0 !== r
            ? un(r, t, n, d)
            : void 0 !== o
              ? (function (e, n, t, o) {
                  return fn(n.concat(e), t, o, !1);
                })(o, t, n, d)
              : fn(t, n, d, !1);
        const h = "parent" === s,
          f = "child" === s || a,
          v = u,
          p = new Set();
        for (
          let b = Math.max.apply(null, Array.from(c.keys()));
          b >= 0;
          b -= 1
        ) {
          const e = 0 === b,
            n = c.get(b);
          for (const t of n) {
            if (t.isLeaf) continue;
            const { key: n, shallowLoaded: o } = t;
            if (
              (f &&
                o &&
                t.children.forEach((e) => {
                  !e.disabled &&
                    !e.isLeaf &&
                    e.shallowLoaded &&
                    v.has(e.key) &&
                    v.delete(e.key);
                }),
              t.disabled || !o)
            )
              continue;
            let r = !0,
              l = !1,
              i = !0;
            for (const e of t.children) {
              const n = e.key;
              if (!e.disabled)
                if ((i && (i = !1), v.has(n))) l = !0;
                else {
                  if (p.has(n)) {
                    (l = !0), (r = !1);
                    break;
                  }
                  if (((r = !1), l)) break;
                }
            }
            r && !i
              ? (h &&
                  t.children.forEach((e) => {
                    !e.disabled && v.has(e.key) && v.delete(e.key);
                  }),
                v.add(n))
              : l && p.add(n),
              e && f && v.has(n) && v.delete(n);
          }
        }
        return { checkedKeys: Array.from(v), indeterminateKeys: Array.from(p) };
      }
      function fn(e, n, t, o) {
        const { treeNodeMap: r, getChildren: l } = n,
          i = new Set(),
          a = new Set(e);
        return (
          e.forEach((e) => {
            const n = r.get(e);
            void 0 !== n &&
              Je(n, (e) => {
                if (e.disabled) return Qe;
                const { key: n } = e;
                if (
                  !i.has(n) &&
                  (i.add(n),
                  a.add(n),
                  (function (e, n) {
                    return !1 === e.isLeaf && !Array.isArray(n(e));
                  })(e.rawNode, l))
                ) {
                  if (o) return Qe;
                  if (!t) throw new cn();
                }
              });
          }),
          a
        );
      }
      function vn(e, n) {
        const t = e.siblings,
          o = t.length,
          { index: r } = e;
        return n ? t[(r + 1) % o] : r === t.length - 1 ? null : t[r + 1];
      }
      function pn(e, n, { loop: t = !1, includeDisabled: o = !1 } = {}) {
        const r = "prev" === n ? bn : vn,
          l = { reverse: "prev" === n };
        let i = !1,
          a = null;
        return (
          (function n(s) {
            if (null !== s) {
              if (s === e)
                if (i) {
                  if (!e.disabled && !e.isGroup) return void (a = e);
                } else i = !0;
              else if ((!s.disabled || o) && !s.ignored && !s.isGroup)
                return void (a = s);
              if (s.isGroup) {
                const e = gn(s, l);
                null !== e ? (a = e) : n(r(s, t));
              } else {
                const e = r(s, !1);
                if (null !== e) n(e);
                else {
                  const e = (function (e) {
                    return e.parent;
                  })(s);
                  (null == e ? void 0 : e.isGroup)
                    ? n(r(e, t))
                    : t && n(r(s, !0));
                }
              }
            }
          })(e),
          a
        );
      }
      function bn(e, n) {
        const t = e.siblings,
          o = t.length,
          { index: r } = e;
        return n ? t[(r - 1 + o) % o] : 0 === r ? null : t[r - 1];
      }
      function gn(e, n = {}) {
        const { reverse: t = !1 } = n,
          { children: o } = e;
        if (o) {
          const { length: e } = o,
            r = t ? -1 : e,
            l = t ? -1 : 1;
          for (let i = t ? e - 1 : 0; i !== r; i += l) {
            const e = o[i];
            if (!e.disabled && !e.ignored) {
              if (!e.isGroup) return e;
              {
                const t = gn(e, n);
                if (null !== t) return t;
              }
            }
          }
        }
        return null;
      }
      const mn = {
        getChild() {
          return this.ignored ? null : gn(this);
        },
        getParent() {
          const { parent: e } = this;
          return (null == e ? void 0 : e.isGroup) ? e.getParent() : e;
        },
        getNext(e = {}) {
          return pn(this, "next", e);
        },
        getPrev(e = {}) {
          return pn(this, "prev", e);
        },
      };
      function yn(e, n) {
        const t = n ? new Set(n) : void 0,
          o = [];
        return (
          (function e(n) {
            n.forEach((n) => {
              o.push(n),
                n.isLeaf ||
                  !n.children ||
                  n.ignored ||
                  ((n.isGroup || void 0 === t || t.has(n.key)) &&
                    e(n.children));
            });
          })(e),
          o
        );
      }
      function kn(e, n, t, o, r, l = null, i = 0) {
        const a = [];
        return (
          e.forEach((s, d) => {
            var c;
            const u = Object.create(o);
            if (
              ((u.rawNode = s),
              (u.siblings = a),
              (u.level = i),
              (u.index = d),
              (u.isFirstChild = 0 === d),
              (u.isLastChild = d + 1 === e.length),
              (u.parent = l),
              !u.ignored)
            ) {
              const e = r(s);
              Array.isArray(e) && (u.children = kn(e, n, t, o, r, u, i + 1));
            }
            a.push(u),
              n.set(u.key, u),
              t.has(i) || t.set(i, []),
              null === (c = t.get(i)) || void 0 === c || c.push(u);
          }),
          a
        );
      }
      function xn(e, n = {}) {
        var t;
        const o = new Map(),
          r = new Map(),
          {
            getDisabled: l = on,
            getIgnored: i = tn,
            getIsGroup: a = dn,
            getKey: s = nn,
          } = n,
          d = null !== (t = n.getChildren) && void 0 !== t ? t : en,
          c = n.ignoreEmptyChildren
            ? (e) => {
                const n = d(e);
                return Array.isArray(n) ? (n.length ? n : null) : n;
              }
            : d,
          u = Object.assign(
            {
              get key() {
                return s(this.rawNode);
              },
              get disabled() {
                return l(this.rawNode);
              },
              get isGroup() {
                return a(this.rawNode);
              },
              get isLeaf() {
                return (function (e, n) {
                  const { isLeaf: t } = e;
                  return void 0 !== t ? t : !n(e);
                })(this.rawNode, c);
              },
              get shallowLoaded() {
                return (function (e, n) {
                  const { isLeaf: t } = e;
                  return !(!1 === t && !Array.isArray(n(e)));
                })(this.rawNode, c);
              },
              get ignored() {
                return i(this.rawNode);
              },
              contains(e) {
                return (function (e, n) {
                  const t = e.key;
                  for (; n; ) {
                    if (n.key === t) return !0;
                    n = n.parent;
                  }
                  return !1;
                })(this, e);
              },
            },
            mn,
          ),
          h = kn(e, o, r, u, c);
        function f(e) {
          if (null == e) return null;
          const n = o.get(e);
          return n && !n.ignored ? n : null;
        }
        const v = {
          treeNodes: h,
          treeNodeMap: o,
          levelTreeNodeMap: r,
          maxLevel: Math.max(...r.keys()),
          getChildren: c,
          getFlattenedNodes: (e) => yn(h, e),
          getNode: function (e) {
            if (null == e) return null;
            const n = o.get(e);
            return !n || n.isGroup || n.ignored ? null : n;
          },
          getPrev: function (e, n) {
            const t = f(e);
            return t ? t.getPrev(n) : null;
          },
          getNext: function (e, n) {
            const t = f(e);
            return t ? t.getNext(n) : null;
          },
          getParent: function (e) {
            const n = f(e);
            return n ? n.getParent() : null;
          },
          getChild: function (e) {
            const n = f(e);
            return n ? n.getChild() : null;
          },
          getFirstAvailableNode: () =>
            (function (e) {
              if (0 === e.length) return null;
              const n = e[0];
              return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
            })(h),
          getPath: (e, n = {}) =>
            (function (e, { includeGroup: n = !1, includeSelf: t = !0 }, o) {
              var r;
              const l = o.treeNodeMap;
              let i =
                null == e
                  ? null
                  : null !== (r = l.get(e)) && void 0 !== r
                    ? r
                    : null;
              const a = { keyPath: [], treeNodePath: [], treeNode: i };
              if (null == i ? void 0 : i.ignored) return (a.treeNode = null), a;
              for (; i; )
                i.ignored || (!n && i.isGroup) || a.treeNodePath.push(i),
                  (i = i.parent);
              return (
                a.treeNodePath.reverse(),
                t || a.treeNodePath.pop(),
                (a.keyPath = a.treeNodePath.map((e) => e.key)),
                a
              );
            })(e, n, v),
          getCheckedKeys(e, n = {}) {
            const {
              cascade: t = !0,
              leafOnly: o = !1,
              checkStrategy: r = "all",
              allowNotLoaded: l = !1,
            } = n;
            return hn(
              {
                checkedKeys: rn(e),
                indeterminateKeys: ln(e),
                cascade: t,
                leafOnly: o,
                checkStrategy: r,
                allowNotLoaded: l,
              },
              v,
            );
          },
          check(e, n, t = {}) {
            const {
              cascade: o = !0,
              leafOnly: r = !1,
              checkStrategy: l = "all",
              allowNotLoaded: i = !1,
            } = t;
            return hn(
              {
                checkedKeys: rn(n),
                indeterminateKeys: ln(n),
                keysToCheck: null == e ? [] : Ze(e),
                cascade: o,
                leafOnly: r,
                checkStrategy: l,
                allowNotLoaded: i,
              },
              v,
            );
          },
          uncheck(e, n, t = {}) {
            const {
              cascade: o = !0,
              leafOnly: r = !1,
              checkStrategy: l = "all",
              allowNotLoaded: i = !1,
            } = t;
            return hn(
              {
                checkedKeys: rn(n),
                indeterminateKeys: ln(n),
                keysToUncheck: null == e ? [] : Ze(e),
                cascade: o,
                leafOnly: r,
                checkStrategy: l,
                allowNotLoaded: i,
              },
              v,
            );
          },
          getNonLeafKeys: (e = {}) =>
            (function (e, n = {}) {
              const { preserveGroup: t = !1 } = n,
                o = [],
                r = t
                  ? (e) => {
                      e.isLeaf || (o.push(e.key), l(e.children));
                    }
                  : (e) => {
                      e.isLeaf || (e.isGroup || o.push(e.key), l(e.children));
                    };
              function l(e) {
                e.forEach(r);
              }
              return l(e), o;
            })(h, e),
        };
        return v;
      }
      const Cn = S(
          "empty",
          "\n display: flex;\n flex-direction: column;\n align-items: center;\n font-size: var(--n-font-size);\n",
          [
            R(
              "icon",
              "\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n line-height: var(--n-icon-size);\n color: var(--n-icon-color);\n transition:\n color .3s var(--n-bezier);\n ",
              [N("+", [R("description", "\n margin-top: 8px;\n ")])],
            ),
            R(
              "description",
              "\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n ",
            ),
            R(
              "extra",
              "\n text-align: center;\n transition: color .3s var(--n-bezier);\n margin-top: 12px;\n color: var(--n-extra-text-color);\n ",
            ),
          ],
        ),
        wn = Object.assign(Object.assign({}, T.props), {
          description: String,
          showDescription: { type: Boolean, default: !0 },
          showIcon: { type: Boolean, default: !0 },
          size: { type: String, default: "medium" },
          renderIcon: Function,
        }),
        Sn = i({
          name: "Empty",
          props: wn,
          setup(e) {
            const {
                mergedClsPrefixRef: n,
                inlineThemeDisabled: t,
                mergedComponentPropsRef: r,
              } = L(e),
              l = T("Empty", "-empty", Cn, z, e, n),
              { localeRef: i } = (function (e) {
                const { mergedLocaleRef: n, mergedDateLocaleRef: t } =
                    a(x, null) || {},
                  r = o(() => {
                    var t, o;
                    return null !==
                      (o =
                        null === (t = null == n ? void 0 : n.value) ||
                        void 0 === t
                          ? void 0
                          : t[e]) && void 0 !== o
                      ? o
                      : C[e];
                  });
                return {
                  dateLocaleRef: o(() => {
                    var e;
                    return null !== (e = null == t ? void 0 : t.value) &&
                      void 0 !== e
                      ? e
                      : w;
                  }),
                  localeRef: r,
                };
              })("Empty"),
              s = o(() => {
                var n, t, o;
                return null !== (n = e.description) && void 0 !== n
                  ? n
                  : null ===
                        (o =
                          null === (t = null == r ? void 0 : r.value) ||
                          void 0 === t
                            ? void 0
                            : t.Empty) || void 0 === o
                    ? void 0
                    : o.description;
              }),
              d = o(() => {
                var e, n;
                return (
                  (null ===
                    (n =
                      null === (e = null == r ? void 0 : r.value) ||
                      void 0 === e
                        ? void 0
                        : e.Empty) || void 0 === n
                    ? void 0
                    : n.renderIcon) || (() => b(Ye, null))
                );
              }),
              c = o(() => {
                const { size: n } = e,
                  {
                    common: { cubicBezierEaseInOut: t },
                    self: {
                      [I("iconSize", n)]: o,
                      [I("fontSize", n)]: r,
                      textColor: i,
                      iconColor: a,
                      extraTextColor: s,
                    },
                  } = l.value;
                return {
                  "--n-icon-size": o,
                  "--n-font-size": r,
                  "--n-bezier": t,
                  "--n-text-color": i,
                  "--n-icon-color": a,
                  "--n-extra-text-color": s,
                };
              }),
              u = t
                ? P(
                    "empty",
                    o(() => {
                      let n = "";
                      const { size: t } = e;
                      return (n += t[0]), n;
                    }),
                    c,
                    e,
                  )
                : void 0;
            return {
              mergedClsPrefix: n,
              mergedRenderIcon: d,
              localizedDescription: o(() => s.value || i.value.description),
              cssVars: t ? void 0 : c,
              themeClass: null == u ? void 0 : u.themeClass,
              onRender: null == u ? void 0 : u.onRender,
            };
          },
          render() {
            const { $slots: e, mergedClsPrefix: n, onRender: t } = this;
            return (
              null == t || t(),
              b(
                "div",
                { class: [`${n}-empty`, this.themeClass], style: this.cssVars },
                this.showIcon
                  ? b(
                      "div",
                      { class: `${n}-empty__icon` },
                      e.icon
                        ? e.icon()
                        : b(
                            D,
                            { clsPrefix: n },
                            { default: this.mergedRenderIcon },
                          ),
                    )
                  : null,
                this.showDescription
                  ? b(
                      "div",
                      { class: `${n}-empty__description` },
                      e.default ? e.default() : this.localizedDescription,
                    )
                  : null,
                e.extra
                  ? b("div", { class: `${n}-empty__extra` }, e.extra())
                  : null,
              )
            );
          },
        }),
        Rn = b(
          "svg",
          { viewBox: "0 0 64 64", class: "check-icon" },
          b("path", {
            d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z",
          }),
        ),
        Nn = b(
          "svg",
          { viewBox: "0 0 100 100", class: "line-icon" },
          b("path", {
            d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z",
          }),
        ),
        Ln = K("n-checkbox-group"),
        Tn = N([
          S(
            "checkbox",
            "\n font-size: var(--n-font-size);\n outline: none;\n cursor: pointer;\n display: inline-flex;\n flex-wrap: nowrap;\n align-items: flex-start;\n word-break: break-word;\n line-height: var(--n-size);\n --n-merged-color-table: var(--n-color-table);\n ",
            [
              B("show-label", "line-height: var(--n-label-line-height);"),
              N("&:hover", [
                S("checkbox-box", [
                  R("border", "border: var(--n-border-checked);"),
                ]),
              ]),
              N("&:focus:not(:active)", [
                S("checkbox-box", [
                  R(
                    "border",
                    "\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n ",
                  ),
                ]),
              ]),
              B("inside-table", [
                S(
                  "checkbox-box",
                  "\n background-color: var(--n-merged-color-table);\n ",
                ),
              ]),
              B("checked", [
                S(
                  "checkbox-box",
                  "\n background-color: var(--n-color-checked);\n ",
                  [
                    S("checkbox-icon", [
                      N(
                        ".check-icon",
                        "\n opacity: 1;\n transform: scale(1);\n ",
                      ),
                    ]),
                  ],
                ),
              ]),
              B("indeterminate", [
                S("checkbox-box", [
                  S("checkbox-icon", [
                    N(
                      ".check-icon",
                      "\n opacity: 0;\n transform: scale(.5);\n ",
                    ),
                    N(".line-icon", "\n opacity: 1;\n transform: scale(1);\n "),
                  ]),
                ]),
              ]),
              B("checked, indeterminate", [
                N("&:focus:not(:active)", [
                  S("checkbox-box", [
                    R(
                      "border",
                      "\n border: var(--n-border-checked);\n box-shadow: var(--n-box-shadow-focus);\n ",
                    ),
                  ]),
                ]),
                S(
                  "checkbox-box",
                  "\n background-color: var(--n-color-checked);\n border-left: 0;\n border-top: 0;\n ",
                  [R("border", { border: "var(--n-border-checked)" })],
                ),
              ]),
              B("disabled", { cursor: "not-allowed" }, [
                B("checked", [
                  S(
                    "checkbox-box",
                    "\n background-color: var(--n-color-disabled-checked);\n ",
                    [
                      R("border", {
                        border: "var(--n-border-disabled-checked)",
                      }),
                      S("checkbox-icon", [
                        N(".check-icon, .line-icon", {
                          fill: "var(--n-check-mark-color-disabled-checked)",
                        }),
                      ]),
                    ],
                  ),
                ]),
                S(
                  "checkbox-box",
                  "\n background-color: var(--n-color-disabled);\n ",
                  [
                    R("border", "\n border: var(--n-border-disabled);\n "),
                    S("checkbox-icon", [
                      N(
                        ".check-icon, .line-icon",
                        "\n fill: var(--n-check-mark-color-disabled);\n ",
                      ),
                    ]),
                  ],
                ),
                R("label", "\n color: var(--n-text-color-disabled);\n "),
              ]),
              S(
                "checkbox-box-wrapper",
                "\n position: relative;\n width: var(--n-size);\n flex-shrink: 0;\n flex-grow: 0;\n user-select: none;\n -webkit-user-select: none;\n ",
              ),
              S(
                "checkbox-box",
                "\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n height: var(--n-size);\n width: var(--n-size);\n display: inline-block;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color 0.3s var(--n-bezier);\n ",
                [
                  R(
                    "border",
                    "\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border: var(--n-border);\n ",
                  ),
                  S(
                    "checkbox-icon",
                    "\n display: flex;\n align-items: center;\n justify-content: center;\n position: absolute;\n left: 1px;\n right: 1px;\n top: 1px;\n bottom: 1px;\n ",
                    [
                      N(
                        ".check-icon, .line-icon",
                        "\n width: 100%;\n fill: var(--n-check-mark-color);\n opacity: 0;\n transform: scale(0.5);\n transform-origin: center;\n transition:\n fill 0.3s var(--n-bezier),\n transform 0.3s var(--n-bezier),\n opacity 0.3s var(--n-bezier),\n border-color 0.3s var(--n-bezier);\n ",
                      ),
                      A({ left: "1px", top: "1px" }),
                    ],
                  ),
                ],
              ),
              R(
                "label",
                "\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n padding: var(--n-label-padding);\n font-weight: var(--n-label-font-weight);\n ",
                [N("&:empty", { display: "none" })],
              ),
            ],
          ),
          $(
            S(
              "checkbox",
              "\n --n-merged-color-table: var(--n-color-table-modal);\n ",
            ),
          ),
          F(
            S(
              "checkbox",
              "\n --n-merged-color-table: var(--n-color-table-popover);\n ",
            ),
          ),
        ]),
        zn = Object.assign(Object.assign({}, T.props), {
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
        In = i({
          name: "Checkbox",
          props: zn,
          setup(e) {
            const n = a(Ln, null),
              l = t(null),
              {
                mergedClsPrefixRef: i,
                inlineThemeDisabled: s,
                mergedRtlRef: d,
              } = L(e),
              c = t(e.defaultChecked),
              u = f(e, "checked"),
              h = E(u, c),
              v = r(() => {
                if (n) {
                  const t = n.valueSetRef.value;
                  return !(!t || void 0 === e.value) && t.has(e.value);
                }
                return h.value === e.checkedValue;
              }),
              p = O(e, {
                mergedSize(t) {
                  const { size: o } = e;
                  if (void 0 !== o) return o;
                  if (n) {
                    const { value: e } = n.mergedSizeRef;
                    if (void 0 !== e) return e;
                  }
                  if (t) {
                    const { mergedSize: e } = t;
                    if (void 0 !== e) return e.value;
                  }
                  return "medium";
                },
                mergedDisabled(t) {
                  const { disabled: o } = e;
                  if (void 0 !== o) return o;
                  if (n) {
                    if (n.disabledRef.value) return !0;
                    const {
                      maxRef: { value: e },
                      checkedCountRef: t,
                    } = n;
                    if (void 0 !== e && t.value >= e && !v.value) return !0;
                    const {
                      minRef: { value: o },
                    } = n;
                    if (void 0 !== o && t.value <= o && v.value) return !0;
                  }
                  return !!t && t.disabled.value;
                },
              }),
              { mergedDisabledRef: b, mergedSizeRef: g } = p,
              m = T("Checkbox", "-checkbox", Tn, j, e, i);
            function y(t) {
              if (n && void 0 !== e.value) n.toggleCheckbox(!v.value, e.value);
              else {
                const {
                    onChange: n,
                    "onUpdate:checked": o,
                    onUpdateChecked: r,
                  } = e,
                  { nTriggerFormInput: l, nTriggerFormChange: i } = p,
                  a = v.value ? e.uncheckedValue : e.checkedValue;
                o && W(o, a, t),
                  r && W(r, a, t),
                  n && W(n, a, t),
                  l(),
                  i(),
                  (c.value = a);
              }
            }
            const k = {
                focus: () => {
                  var e;
                  null === (e = l.value) || void 0 === e || e.focus();
                },
                blur: () => {
                  var e;
                  null === (e = l.value) || void 0 === e || e.blur();
                },
              },
              x = _("Checkbox", d, i),
              C = o(() => {
                const { value: e } = g,
                  {
                    common: { cubicBezierEaseInOut: n },
                    self: {
                      borderRadius: t,
                      color: o,
                      colorChecked: r,
                      colorDisabled: l,
                      colorTableHeader: i,
                      colorTableHeaderModal: a,
                      colorTableHeaderPopover: s,
                      checkMarkColor: d,
                      checkMarkColorDisabled: c,
                      border: u,
                      borderFocus: h,
                      borderDisabled: f,
                      borderChecked: v,
                      boxShadowFocus: p,
                      textColor: b,
                      textColorDisabled: y,
                      checkMarkColorDisabledChecked: k,
                      colorDisabledChecked: x,
                      borderDisabledChecked: C,
                      labelPadding: w,
                      labelLineHeight: S,
                      labelFontWeight: R,
                      [I("fontSize", e)]: N,
                      [I("size", e)]: L,
                    },
                  } = m.value;
                return {
                  "--n-label-line-height": S,
                  "--n-label-font-weight": R,
                  "--n-size": L,
                  "--n-bezier": n,
                  "--n-border-radius": t,
                  "--n-border": u,
                  "--n-border-checked": v,
                  "--n-border-focus": h,
                  "--n-border-disabled": f,
                  "--n-border-disabled-checked": C,
                  "--n-box-shadow-focus": p,
                  "--n-color": o,
                  "--n-color-checked": r,
                  "--n-color-table": i,
                  "--n-color-table-modal": a,
                  "--n-color-table-popover": s,
                  "--n-color-disabled": l,
                  "--n-color-disabled-checked": x,
                  "--n-text-color": b,
                  "--n-text-color-disabled": y,
                  "--n-check-mark-color": d,
                  "--n-check-mark-color-disabled": c,
                  "--n-check-mark-color-disabled-checked": k,
                  "--n-font-size": N,
                  "--n-label-padding": w,
                };
              }),
              w = s
                ? P(
                    "checkbox",
                    o(() => g.value[0]),
                    C,
                    e,
                  )
                : void 0;
            return Object.assign(p, k, {
              rtlEnabled: x,
              selfRef: l,
              mergedClsPrefix: i,
              mergedDisabled: b,
              renderedChecked: v,
              mergedTheme: m,
              labelId: M(),
              handleClick: function (e) {
                b.value || y(e);
              },
              handleKeyUp: function (e) {
                if (!b.value)
                  switch (e.key) {
                    case " ":
                    case "Enter":
                      y(e);
                  }
              },
              handleKeyDown: function (e) {
                " " === e.key && e.preventDefault();
              },
              cssVars: s ? void 0 : C,
              themeClass: null == w ? void 0 : w.themeClass,
              onRender: null == w ? void 0 : w.onRender,
            });
          },
          render() {
            var e;
            const {
              $slots: n,
              renderedChecked: t,
              mergedDisabled: o,
              indeterminate: r,
              privateInsideTable: l,
              cssVars: i,
              labelId: a,
              label: s,
              mergedClsPrefix: d,
              focusable: c,
              handleKeyUp: u,
              handleKeyDown: h,
              handleClick: f,
            } = this;
            null === (e = this.onRender) || void 0 === e || e.call(this);
            const v = U(n.default, (e) =>
              s || e
                ? b("span", { class: `${d}-checkbox__label`, id: a }, s || e)
                : null,
            );
            return b(
              "div",
              {
                ref: "selfRef",
                class: [
                  `${d}-checkbox`,
                  this.themeClass,
                  this.rtlEnabled && `${d}-checkbox--rtl`,
                  t && `${d}-checkbox--checked`,
                  o && `${d}-checkbox--disabled`,
                  r && `${d}-checkbox--indeterminate`,
                  l && `${d}-checkbox--inside-table`,
                  v && `${d}-checkbox--show-label`,
                ],
                tabindex: o || !c ? void 0 : 0,
                role: "checkbox",
                "aria-checked": r ? "mixed" : t,
                "aria-labelledby": a,
                style: i,
                onKeyup: u,
                onKeydown: h,
                onClick: f,
                onMousedown: () => {
                  V(
                    "selectstart",
                    window,
                    (e) => {
                      e.preventDefault();
                    },
                    { once: !0 },
                  );
                },
              },
              b(
                "div",
                { class: `${d}-checkbox-box-wrapper` },
                " ",
                b(
                  "div",
                  { class: `${d}-checkbox-box` },
                  b(H, null, {
                    default: () =>
                      this.indeterminate
                        ? b(
                            "div",
                            {
                              key: "indeterminate",
                              class: `${d}-checkbox-icon`,
                            },
                            Nn,
                          )
                        : b(
                            "div",
                            { key: "check", class: `${d}-checkbox-icon` },
                            Rn,
                          ),
                  }),
                  b("div", { class: `${d}-checkbox-box__border` }),
                ),
              ),
              v,
            );
          },
        }),
        Pn = S(
          "icon",
          "\n height: 1em;\n width: 1em;\n line-height: 1em;\n text-align: center;\n display: inline-block;\n position: relative;\n fill: currentColor;\n transform: translateZ(0);\n",
          [
            B("color-transition", { transition: "color .3s var(--n-bezier)" }),
            B("depth", { color: "var(--n-color)" }, [
              N("svg", {
                opacity: "var(--n-opacity)",
                transition: "opacity .3s var(--n-bezier)",
              }),
            ]),
            N("svg", { height: "1em", width: "1em" }),
          ],
        ),
        Dn = Object.assign(Object.assign({}, T.props), {
          depth: [String, Number],
          size: [Number, String],
          color: String,
          component: [Object, Function],
        }),
        Kn = i({
          _n_icon__: !0,
          name: "Icon",
          inheritAttrs: !1,
          props: Dn,
          setup(e) {
            const { mergedClsPrefixRef: n, inlineThemeDisabled: t } = L(e),
              r = T("Icon", "-icon", Pn, q, e, n),
              l = o(() => {
                const { depth: n } = e,
                  {
                    common: { cubicBezierEaseInOut: t },
                    self: o,
                  } = r.value;
                if (void 0 !== n) {
                  const { color: e, [`opacity${n}Depth`]: r } = o;
                  return { "--n-bezier": t, "--n-color": e, "--n-opacity": r };
                }
                return { "--n-bezier": t, "--n-color": "", "--n-opacity": "" };
              }),
              i = t
                ? P(
                    "icon",
                    o(() => `${e.depth || "d"}`),
                    l,
                    e,
                  )
                : void 0;
            return {
              mergedClsPrefix: n,
              mergedStyle: o(() => {
                const { size: n, color: t } = e;
                return { fontSize: G(n), color: t };
              }),
              cssVars: t ? void 0 : l,
              themeClass: null == i ? void 0 : i.themeClass,
              onRender: null == i ? void 0 : i.onRender,
            };
          },
          render() {
            var e;
            const {
              $parent: n,
              depth: t,
              mergedClsPrefix: o,
              component: r,
              onRender: l,
              themeClass: i,
            } = this;
            return (
              (null === (e = null == n ? void 0 : n.$options) || void 0 === e
                ? void 0
                : e._n_icon__) &&
                Y("icon", "don't wrap `n-icon` inside `n-icon`"),
              null == l || l(),
              b(
                "i",
                g(this.$attrs, {
                  role: "img",
                  class: [
                    `${o}-icon`,
                    i,
                    {
                      [`${o}-icon--depth`]: t,
                      [`${o}-icon--color-transition`]: void 0 !== t,
                    },
                  ],
                  style: [this.cssVars, this.mergedStyle],
                }),
                r ? b(r) : this.$slots,
              )
            );
          },
        }),
        Bn = X({
          name: "Layout",
          common: Z,
          peers: { Scrollbar: Q },
          self: function (e) {
            const {
              baseColor: n,
              textColor2: t,
              bodyColor: o,
              cardColor: r,
              dividerColor: l,
              actionColor: i,
              scrollbarColor: a,
              scrollbarColorHover: s,
              invertedColor: d,
            } = e;
            return {
              textColor: t,
              textColorInverted: "#FFF",
              color: o,
              colorEmbedded: i,
              headerColor: r,
              headerColorInverted: d,
              footerColor: i,
              footerColorInverted: d,
              headerBorderColor: l,
              headerBorderColorInverted: d,
              footerBorderColor: l,
              footerBorderColorInverted: d,
              siderBorderColor: l,
              siderBorderColorInverted: d,
              siderColor: r,
              siderColorInverted: d,
              siderToggleButtonBorder: `1px solid ${l}`,
              siderToggleButtonColor: n,
              siderToggleButtonIconColor: t,
              siderToggleButtonIconColorInverted: t,
              siderToggleBarColor: J(o, a),
              siderToggleBarColorHover: J(o, s),
              __invertScrollbar: "true",
            };
          },
        }),
        An = K("n-layout-sider"),
        $n = { type: String, default: "static" },
        Fn = S(
          "layout",
          "\n color: var(--n-text-color);\n background-color: var(--n-color);\n box-sizing: border-box;\n position: relative;\n z-index: auto;\n flex: auto;\n overflow: hidden;\n transition:\n box-shadow .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",
          [
            S(
              "layout-scroll-container",
              "\n overflow-x: hidden;\n box-sizing: border-box;\n height: 100%;\n ",
            ),
            B(
              "absolute-positioned",
              "\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ",
            ),
          ],
        ),
        En = {
          embedded: Boolean,
          position: $n,
          nativeScrollbar: { type: Boolean, default: !0 },
          scrollbarProps: Object,
          onScroll: Function,
          contentClass: String,
          contentStyle: { type: [String, Object], default: "" },
          hasSider: Boolean,
          siderPlacement: { type: String, default: "left" },
        },
        On = K("n-layout");
      function jn(e) {
        return i({
          name: e ? "LayoutContent" : "Layout",
          props: Object.assign(Object.assign({}, T.props), En),
          setup(e) {
            const n = t(null),
              r = t(null),
              { mergedClsPrefixRef: i, inlineThemeDisabled: a } = L(e),
              s = T("Layout", "-layout", Fn, Bn, e, i);
            l(On, e);
            let d = 0,
              c = 0;
            ee(() => {
              if (e.nativeScrollbar) {
                const e = n.value;
                e && ((e.scrollTop = c), (e.scrollLeft = d));
              }
            });
            const u = {
                scrollTo: function (t, o) {
                  if (e.nativeScrollbar) {
                    const { value: e } = n;
                    e && (void 0 === o ? e.scrollTo(t) : e.scrollTo(t, o));
                  } else {
                    const { value: e } = r;
                    e && e.scrollTo(t, o);
                  }
                },
              },
              h = o(() => {
                const {
                  common: { cubicBezierEaseInOut: n },
                  self: t,
                } = s.value;
                return {
                  "--n-bezier": n,
                  "--n-color": e.embedded ? t.colorEmbedded : t.color,
                  "--n-text-color": t.textColor,
                };
              }),
              f = a
                ? P(
                    "layout",
                    o(() => (e.embedded ? "e" : "")),
                    h,
                    e,
                  )
                : void 0;
            return Object.assign(
              {
                mergedClsPrefix: i,
                scrollableElRef: n,
                scrollbarInstRef: r,
                hasSiderStyle: {
                  display: "flex",
                  flexWrap: "nowrap",
                  width: "100%",
                  flexDirection: "row",
                },
                mergedTheme: s,
                handleNativeElScroll: (n) => {
                  var t;
                  const o = n.target;
                  (d = o.scrollLeft),
                    (c = o.scrollTop),
                    null === (t = e.onScroll) || void 0 === t || t.call(e, n);
                },
                cssVars: a ? void 0 : h,
                themeClass: null == f ? void 0 : f.themeClass,
                onRender: null == f ? void 0 : f.onRender,
              },
              u,
            );
          },
          render() {
            var n;
            const { mergedClsPrefix: t, hasSider: o } = this;
            null === (n = this.onRender) || void 0 === n || n.call(this);
            const r = o ? this.hasSiderStyle : void 0,
              l = [
                this.themeClass,
                e && `${t}-layout-content`,
                `${t}-layout`,
                `${t}-layout--${this.position}-positioned`,
              ];
            return b(
              "div",
              { class: l, style: this.cssVars },
              this.nativeScrollbar
                ? b(
                    "div",
                    {
                      ref: "scrollableElRef",
                      class: [
                        `${t}-layout-scroll-container`,
                        this.contentClass,
                      ],
                      style: [this.contentStyle, r],
                      onScroll: this.handleNativeElScroll,
                    },
                    this.$slots,
                  )
                : b(
                    ne,
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
      const _n = jn(!1),
        Mn = jn(!0),
        Un = S(
          "layout-sider",
          "\n flex-shrink: 0;\n box-sizing: border-box;\n position: relative;\n z-index: 1;\n color: var(--n-text-color);\n transition:\n color .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n min-width .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n transform .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n display: flex;\n justify-content: flex-end;\n",
          [
            B("bordered", [
              R(
                "border",
                '\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n width: 1px;\n background-color: var(--n-border-color);\n transition: background-color .3s var(--n-bezier);\n ',
              ),
            ]),
            R("left-placement", [
              B("bordered", [R("border", "\n right: 0;\n ")]),
            ]),
            B("right-placement", "\n justify-content: flex-start;\n ", [
              B("bordered", [R("border", "\n left: 0;\n ")]),
              B("collapsed", [
                S("layout-toggle-button", [
                  S("base-icon", "\n transform: rotate(180deg);\n "),
                ]),
                S("layout-toggle-bar", [
                  N("&:hover", [
                    R("top", {
                      transform: "rotate(-12deg) scale(1.15) translateY(-2px)",
                    }),
                    R("bottom", {
                      transform: "rotate(12deg) scale(1.15) translateY(2px)",
                    }),
                  ]),
                ]),
              ]),
              S(
                "layout-toggle-button",
                "\n left: 0;\n transform: translateX(-50%) translateY(-50%);\n ",
                [S("base-icon", "\n transform: rotate(0);\n ")],
              ),
              S(
                "layout-toggle-bar",
                "\n left: -28px;\n transform: rotate(180deg);\n ",
                [
                  N("&:hover", [
                    R("top", {
                      transform: "rotate(12deg) scale(1.15) translateY(-2px)",
                    }),
                    R("bottom", {
                      transform: "rotate(-12deg) scale(1.15) translateY(2px)",
                    }),
                  ]),
                ],
              ),
            ]),
            B("collapsed", [
              S("layout-toggle-bar", [
                N("&:hover", [
                  R("top", {
                    transform: "rotate(-12deg) scale(1.15) translateY(-2px)",
                  }),
                  R("bottom", {
                    transform: "rotate(12deg) scale(1.15) translateY(2px)",
                  }),
                ]),
              ]),
              S("layout-toggle-button", [
                S("base-icon", "\n transform: rotate(0);\n "),
              ]),
            ]),
            S(
              "layout-toggle-button",
              "\n transition:\n color .3s var(--n-bezier),\n right .3s var(--n-bezier),\n left .3s var(--n-bezier),\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n cursor: pointer;\n width: 24px;\n height: 24px;\n position: absolute;\n top: 50%;\n right: 0;\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n font-size: 18px;\n color: var(--n-toggle-button-icon-color);\n border: var(--n-toggle-button-border);\n background-color: var(--n-toggle-button-color);\n box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);\n transform: translateX(50%) translateY(-50%);\n z-index: 1;\n ",
              [
                S(
                  "base-icon",
                  "\n transition: transform .3s var(--n-bezier);\n transform: rotate(180deg);\n ",
                ),
              ],
            ),
            S(
              "layout-toggle-bar",
              "\n cursor: pointer;\n height: 72px;\n width: 32px;\n position: absolute;\n top: calc(50% - 36px);\n right: -28px;\n ",
              [
                R(
                  "top, bottom",
                  "\n position: absolute;\n width: 4px;\n border-radius: 2px;\n height: 38px;\n left: 14px;\n transition: \n background-color .3s var(--n-bezier),\n transform .3s var(--n-bezier);\n ",
                ),
                R("bottom", "\n position: absolute;\n top: 34px;\n "),
                N("&:hover", [
                  R("top", {
                    transform: "rotate(12deg) scale(1.15) translateY(-2px)",
                  }),
                  R("bottom", {
                    transform: "rotate(-12deg) scale(1.15) translateY(2px)",
                  }),
                ]),
                R("top, bottom", {
                  backgroundColor: "var(--n-toggle-bar-color)",
                }),
                N("&:hover", [
                  R("top, bottom", {
                    backgroundColor: "var(--n-toggle-bar-color-hover)",
                  }),
                ]),
              ],
            ),
            R(
              "border",
              "\n position: absolute;\n top: 0;\n right: 0;\n bottom: 0;\n width: 1px;\n transition: background-color .3s var(--n-bezier);\n ",
            ),
            S(
              "layout-sider-scroll-container",
              "\n flex-grow: 1;\n flex-shrink: 0;\n box-sizing: border-box;\n height: 100%;\n opacity: 0;\n transition: opacity .3s var(--n-bezier);\n max-width: 100%;\n ",
            ),
            B("show-content", [
              S("layout-sider-scroll-container", { opacity: 1 }),
            ]),
            B(
              "absolute-positioned",
              "\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n ",
            ),
          ],
        ),
        Hn = i({
          name: "LayoutToggleButton",
          props: {
            clsPrefix: { type: String, required: !0 },
            onClick: Function,
          },
          render() {
            const { clsPrefix: e } = this;
            return b(
              "div",
              { class: `${e}-layout-toggle-button`, onClick: this.onClick },
              b(D, { clsPrefix: e }, { default: () => b(Ge, null) }),
            );
          },
        }),
        Vn = i({
          props: {
            clsPrefix: { type: String, required: !0 },
            onClick: Function,
          },
          render() {
            const { clsPrefix: e } = this;
            return b(
              "div",
              { onClick: this.onClick, class: `${e}-layout-toggle-bar` },
              b("div", { class: `${e}-layout-toggle-bar__top` }),
              b("div", { class: `${e}-layout-toggle-bar__bottom` }),
            );
          },
        }),
        Wn = {
          position: $n,
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
        qn = i({
          name: "LayoutSider",
          props: Object.assign(Object.assign({}, T.props), Wn),
          setup(e) {
            const n = a(On),
              r = t(null),
              i = t(null),
              s = t(e.defaultCollapsed),
              d = E(f(e, "collapsed"), s),
              c = o(() => G(d.value ? e.collapsedWidth : e.width)),
              u = o(() =>
                "transform" !== e.collapseMode ? {} : { minWidth: G(e.width) },
              ),
              h = o(() => (n ? n.siderPlacement : "left"));
            let v = 0,
              p = 0;
            ee(() => {
              if (e.nativeScrollbar) {
                const e = r.value;
                e && ((e.scrollTop = p), (e.scrollLeft = v));
              }
            }),
              l(An, { collapsedRef: d, collapseModeRef: f(e, "collapseMode") });
            const { mergedClsPrefixRef: b, inlineThemeDisabled: g } = L(e),
              m = T("Layout", "-layout-sider", Un, Bn, e, b),
              y = {
                scrollTo: function (n, t) {
                  if (e.nativeScrollbar) {
                    const { value: e } = r;
                    e && (void 0 === t ? e.scrollTo(n) : e.scrollTo(n, t));
                  } else {
                    const { value: e } = i;
                    e && e.scrollTo(n, t);
                  }
                },
              },
              k = o(() => {
                const {
                    common: { cubicBezierEaseInOut: n },
                    self: t,
                  } = m.value,
                  {
                    siderToggleButtonColor: o,
                    siderToggleButtonBorder: r,
                    siderToggleBarColor: l,
                    siderToggleBarColorHover: i,
                  } = t,
                  a = {
                    "--n-bezier": n,
                    "--n-toggle-button-color": o,
                    "--n-toggle-button-border": r,
                    "--n-toggle-bar-color": l,
                    "--n-toggle-bar-color-hover": i,
                  };
                return (
                  e.inverted
                    ? ((a["--n-color"] = t.siderColorInverted),
                      (a["--n-text-color"] = t.textColorInverted),
                      (a["--n-border-color"] = t.siderBorderColorInverted),
                      (a["--n-toggle-button-icon-color"] =
                        t.siderToggleButtonIconColorInverted),
                      (a.__invertScrollbar = t.__invertScrollbar))
                    : ((a["--n-color"] = t.siderColor),
                      (a["--n-text-color"] = t.textColor),
                      (a["--n-border-color"] = t.siderBorderColor),
                      (a["--n-toggle-button-icon-color"] =
                        t.siderToggleButtonIconColor)),
                  a
                );
              }),
              x = g
                ? P(
                    "layout-sider",
                    o(() => (e.inverted ? "a" : "b")),
                    k,
                    e,
                  )
                : void 0;
            return Object.assign(
              {
                scrollableElRef: r,
                scrollbarInstRef: i,
                mergedClsPrefix: b,
                mergedTheme: m,
                styleMaxWidth: c,
                mergedCollapsed: d,
                scrollContainerStyle: u,
                siderPlacement: h,
                handleNativeElScroll: (n) => {
                  var t;
                  const o = n.target;
                  (v = o.scrollLeft),
                    (p = o.scrollTop),
                    null === (t = e.onScroll) || void 0 === t || t.call(e, n);
                },
                handleTransitionend: function (n) {
                  var t, o;
                  "max-width" === n.propertyName &&
                    (d.value
                      ? null === (t = e.onAfterLeave) ||
                        void 0 === t ||
                        t.call(e)
                      : null === (o = e.onAfterEnter) ||
                        void 0 === o ||
                        o.call(e));
                },
                handleTriggerClick: function () {
                  const {
                      "onUpdate:collapsed": n,
                      onUpdateCollapsed: t,
                      onExpand: o,
                      onCollapse: r,
                    } = e,
                    { value: l } = d;
                  t && W(t, !l),
                    n && W(n, !l),
                    (s.value = !l),
                    l ? o && W(o) : r && W(r);
                },
                inlineThemeDisabled: g,
                cssVars: k,
                themeClass: null == x ? void 0 : x.themeClass,
                onRender: null == x ? void 0 : x.onRender,
              },
              y,
            );
          },
          render() {
            var e;
            const {
              mergedClsPrefix: n,
              mergedCollapsed: t,
              showTrigger: o,
            } = this;
            return (
              null === (e = this.onRender) || void 0 === e || e.call(this),
              b(
                "aside",
                {
                  class: [
                    `${n}-layout-sider`,
                    this.themeClass,
                    `${n}-layout-sider--${this.position}-positioned`,
                    `${n}-layout-sider--${this.siderPlacement}-placement`,
                    this.bordered && `${n}-layout-sider--bordered`,
                    t && `${n}-layout-sider--collapsed`,
                    (!t || this.showCollapsedContent) &&
                      `${n}-layout-sider--show-content`,
                  ],
                  onTransitionend: this.handleTransitionend,
                  style: [
                    this.inlineThemeDisabled ? void 0 : this.cssVars,
                    { maxWidth: this.styleMaxWidth, width: G(this.width) },
                  ],
                },
                this.nativeScrollbar
                  ? b(
                      "div",
                      {
                        class: [
                          `${n}-layout-sider-scroll-container`,
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
                  : b(
                      ne,
                      Object.assign({}, this.scrollbarProps, {
                        onScroll: this.onScroll,
                        ref: "scrollbarInstRef",
                        style: this.scrollContainerStyle,
                        contentStyle: this.contentStyle,
                        contentClass: this.contentClass,
                        theme: this.mergedTheme.peers.Scrollbar,
                        themeOverrides:
                          this.mergedTheme.peerOverrides.Scrollbar,
                        builtinThemeOverrides:
                          this.inverted &&
                          "true" === this.cssVars.__invertScrollbar
                            ? {
                                colorHover: "rgba(255, 255, 255, .4)",
                                color: "rgba(255, 255, 255, .3)",
                              }
                            : void 0,
                      }),
                      this.$slots,
                    ),
                o
                  ? b("bar" === o ? Vn : Hn, {
                      clsPrefix: n,
                      class: t ? this.collapsedTriggerClass : this.triggerClass,
                      style: t ? this.collapsedTriggerStyle : this.triggerStyle,
                      onClick: this.handleTriggerClick,
                    })
                  : null,
                this.bordered
                  ? b("div", { class: `${n}-layout-sider__border` })
                  : null,
              )
            );
          },
        }),
        Gn = K("n-tree-select"),
        Yn = K("n-tree"),
        Xn = i({
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
            const { renderSwitcherIconRef: n } = a(Yn, null);
            return () => {
              const {
                clsPrefix: t,
                expanded: o,
                hide: r,
                indent: l,
                onClick: i,
              } = e;
              return b(
                "span",
                {
                  "data-switcher": !0,
                  class: [
                    `${t}-tree-node-switcher`,
                    o && `${t}-tree-node-switcher--expanded`,
                    r && `${t}-tree-node-switcher--hide`,
                  ],
                  style: { width: `${l}px` },
                  onClick: i,
                },
                b(
                  "div",
                  { class: `${t}-tree-node-switcher__icon` },
                  b(H, null, {
                    default: () => {
                      if (e.loading)
                        return b(te, {
                          clsPrefix: t,
                          key: "loading",
                          radius: 85,
                          strokeWidth: 20,
                        });
                      const { value: o } = n;
                      return o
                        ? o({
                            expanded: e.expanded,
                            selected: e.selected,
                            option: e.tmNode.rawNode,
                          })
                        : b(
                            D,
                            { clsPrefix: t, key: "switcher" },
                            { default: () => b(Xe, null) },
                          );
                    },
                  }),
                ),
              );
            };
          },
        }),
        Zn = i({
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
          setup: (e) => ({
            handleUpdateValue: function (n) {
              !(function (n) {
                const { onCheck: t } = e;
                t && t(n);
              })(n);
            },
            mergedTheme: a(Yn).mergedThemeRef,
          }),
          render() {
            const {
              clsPrefix: e,
              mergedTheme: n,
              checked: t,
              indeterminate: o,
              disabled: r,
              focusable: l,
              indent: i,
              handleUpdateValue: a,
            } = this;
            return b(
              "span",
              {
                class: [
                  `${e}-tree-node-checkbox`,
                  this.right && `${e}-tree-node-checkbox--right`,
                ],
                style: { width: `${i}px` },
                "data-checkbox": !0,
              },
              b(In, {
                focusable: l,
                disabled: r,
                theme: n.peers.Checkbox,
                themeOverrides: n.peerOverrides.Checkbox,
                checked: t,
                indeterminate: o,
                onUpdateChecked: a,
              }),
            );
          },
        }),
        Qn = i({
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
              renderLabelRef: n,
              renderPrefixRef: o,
              renderSuffixRef: r,
              labelFieldRef: l,
            } = a(Yn);
            return {
              selfRef: t(null),
              renderLabel: n,
              renderPrefix: o,
              renderSuffix: r,
              labelField: l,
              handleClick: function (n) {
                !(function (n) {
                  const { onClick: t } = e;
                  t && t(n);
                })(n);
              },
            };
          },
          render() {
            const {
              clsPrefix: e,
              labelField: n,
              nodeProps: t,
              checked: o = !1,
              selected: r = !1,
              renderLabel: l,
              renderPrefix: i,
              renderSuffix: a,
              handleClick: s,
              onDragstart: d,
              tmNode: {
                rawNode: c,
                rawNode: { prefix: u, suffix: h, [n]: f },
              },
            } = this;
            return b(
              "span",
              Object.assign({}, t, {
                ref: "selfRef",
                class: [`${e}-tree-node-content`, null == t ? void 0 : t.class],
                onClick: s,
                draggable: void 0 !== d || void 0,
                onDragstart: d,
              }),
              i || u
                ? b(
                    "div",
                    { class: `${e}-tree-node-content__prefix` },
                    i ? i({ option: c, selected: r, checked: o }) : oe(u),
                  )
                : null,
              b(
                "div",
                { class: `${e}-tree-node-content__text` },
                l ? l({ option: c, selected: r, checked: o }) : oe(f),
              ),
              a || h
                ? b(
                    "div",
                    { class: `${e}-tree-node-content__suffix` },
                    a ? a({ option: c, selected: r, checked: o }) : oe(h),
                  )
                : null,
            );
          },
        });
      function Jn({ position: e, offsetLevel: n, indent: t, el: o }) {
        const r = { position: "absolute", boxSizing: "border-box", right: 0 };
        if ("inside" === e)
          (r.left = 0),
            (r.top = 0),
            (r.bottom = 0),
            (r.borderRadius = "inherit"),
            (r.boxShadow = "inset 0 0 0 2px var(--n-drop-mark-color)");
        else {
          const l = "before" === e ? "top" : "bottom";
          (r[l] = 0),
            (r.left = o.offsetLeft + 6 - n * t + "px"),
            (r.height = "2px"),
            (r.backgroundColor = "var(--n-drop-mark-color)"),
            (r.transformOrigin = l),
            (r.borderRadius = "1px"),
            (r.transform =
              "before" === e ? "translateY(-4px)" : "translateY(4px)");
        }
        return b("div", { style: r });
      }
      function et(e, n) {
        return !!e.rawNode[n];
      }
      function nt(e, n, t, o) {
        null == e ||
          e.forEach((e) => {
            t(e), nt(e[n], n, t, o), o(e);
          });
      }
      function tt(e, n, t, o, r) {
        const l = new Set(),
          i = new Set(),
          a = [];
        return (
          nt(
            e,
            o,
            (e) => {
              if ((a.push(e), r(n, e))) {
                i.add(e[t]);
                for (let e = a.length - 2; e >= 0; --e) {
                  if (l.has(a[e][t])) return;
                  l.add(a[e][t]);
                }
              }
            },
            () => {
              a.pop();
            },
          ),
          { expandedKeys: Array.from(l), highlightKeySet: i }
        );
      }
      re &&
        Image &&
        (new Image().src =
          "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
      const ot = i({
          name: "TreeNode",
          props: {
            clsPrefix: { type: String, required: !0 },
            tmNode: { type: Object, required: !0 },
          },
          setup(e) {
            const n = a(Yn),
              {
                droppingNodeParentRef: l,
                droppingMouseNodeRef: i,
                draggingNodeRef: s,
                droppingPositionRef: d,
                droppingOffsetLevelRef: u,
                nodePropsRef: h,
                indentRef: f,
                blockLineRef: v,
                checkboxPlacementRef: p,
                checkOnClickRef: g,
                disabledFieldRef: m,
                showLineRef: y,
                renderSwitcherIconRef: k,
                overrideDefaultNodeClickBehaviorRef: x,
              } = n,
              C = r(() => !!e.tmNode.rawNode.checkboxDisabled),
              w = r(() => et(e.tmNode, m.value)),
              S = r(() => n.disabledRef.value || w.value),
              R = o(() => {
                const { value: n } = h;
                if (n) return n({ option: e.tmNode.rawNode });
              }),
              N = t(null),
              L = { value: null };
            function T() {
              const t = () => {
                const { tmNode: t } = e;
                if (t.isLeaf || t.shallowLoaded) n.handleSwitcherClick(t);
                else {
                  if (n.loadingKeysRef.value.has(t.key)) return;
                  n.loadingKeysRef.value.add(t.key);
                  const {
                    onLoadRef: { value: e },
                  } = n;
                  e &&
                    e(t.rawNode)
                      .then((e) => {
                        !1 !== e && n.handleSwitcherClick(t);
                      })
                      .finally(() => {
                        n.loadingKeysRef.value.delete(t.key);
                      });
                }
              };
              k.value ? setTimeout(t, 0) : t();
            }
            c(() => {
              L.value = N.value.$el;
            });
            const z = r(
                () =>
                  !w.value &&
                  n.selectableRef.value &&
                  (!n.internalTreeSelect ||
                    "child" !== n.mergedCheckStrategyRef.value ||
                    (n.multipleRef.value && n.cascadeRef.value) ||
                    e.tmNode.isLeaf),
              ),
              I = r(
                () =>
                  n.checkableRef.value &&
                  (n.cascadeRef.value ||
                    "child" !== n.mergedCheckStrategyRef.value ||
                    e.tmNode.isLeaf),
              ),
              P = r(() =>
                n.displayedCheckedKeysRef.value.includes(e.tmNode.key),
              ),
              D = r(() => {
                const { value: n } = I;
                if (!n) return !1;
                const { value: t } = g,
                  { tmNode: o } = e;
                return "boolean" == typeof t
                  ? !o.disabled && t
                  : t(e.tmNode.rawNode);
              });
            function K(t) {
              var o, r;
              if (!Fe(t, "checkbox") && !Fe(t, "switcher")) {
                if (!S.value) {
                  const o = x.value;
                  let r = !1;
                  if (o)
                    switch (o({ option: e.tmNode.rawNode })) {
                      case "toggleCheck":
                        (r = !0), B(!P.value);
                        break;
                      case "toggleSelect":
                        (r = !0), n.handleSelect(e.tmNode);
                        break;
                      case "toggleExpand":
                        (r = !0), T(), (r = !0);
                        break;
                      case "none":
                        return (r = !0), void (r = !0);
                    }
                  r ||
                    (function (t) {
                      const { value: o } = n.expandOnClickRef,
                        { value: r } = z,
                        { value: l } = D;
                      if (!r && !o && !l) return;
                      if (Fe(t, "checkbox") || Fe(t, "switcher")) return;
                      const { tmNode: i } = e;
                      r && n.handleSelect(i),
                        o && !i.isLeaf && T(),
                        l && B(!P.value);
                    })(t);
                }
                null ===
                  (r =
                    null === (o = R.value) || void 0 === o
                      ? void 0
                      : o.onClick) ||
                  void 0 === r ||
                  r.call(o, t);
              }
            }
            function B(t) {
              n.handleCheck(e.tmNode, t);
            }
            const A = o(() => {
              const { clsPrefix: n } = e,
                { value: t } = f;
              if (y.value) {
                const o = [];
                let r = e.tmNode.parent;
                for (; r; )
                  r.isLastChild
                    ? o.push(
                        b(
                          "div",
                          { class: `${n}-tree-node-indent` },
                          b("div", { style: { width: `${t}px` } }),
                        ),
                      )
                    : o.push(
                        b(
                          "div",
                          {
                            class: [
                              `${n}-tree-node-indent`,
                              `${n}-tree-node-indent--show-line`,
                            ],
                          },
                          b("div", { style: { width: `${t}px` } }),
                        ),
                      ),
                    (r = r.parent);
                return o.reverse();
              }
              return le(
                e.tmNode.level,
                b(
                  "div",
                  { class: `${e.clsPrefix}-tree-node-indent` },
                  b("div", { style: { width: `${t}px` } }),
                ),
              );
            });
            return {
              showDropMark: r(() => {
                const { value: n } = s;
                if (!n) return;
                const { value: t } = d;
                if (!t) return;
                const { value: o } = i;
                if (!o) return;
                const { tmNode: r } = e;
                return r.key === o.key;
              }),
              showDropMarkAsParent: r(() => {
                const { value: n } = l;
                if (!n) return !1;
                const { tmNode: t } = e,
                  { value: o } = d;
                return ("before" === o || "after" === o) && n.key === t.key;
              }),
              pending: r(() => n.pendingNodeKeyRef.value === e.tmNode.key),
              loading: r(() => n.loadingKeysRef.value.has(e.tmNode.key)),
              highlight: r(() => {
                var t;
                return null === (t = n.highlightKeySetRef.value) || void 0 === t
                  ? void 0
                  : t.has(e.tmNode.key);
              }),
              checked: P,
              indeterminate: r(() =>
                n.displayedIndeterminateKeysRef.value.includes(e.tmNode.key),
              ),
              selected: r(() =>
                n.mergedSelectedKeysRef.value.includes(e.tmNode.key),
              ),
              expanded: r(() =>
                n.mergedExpandedKeysRef.value.includes(e.tmNode.key),
              ),
              disabled: S,
              checkable: I,
              mergedCheckOnClick: D,
              checkboxDisabled: C,
              selectable: z,
              expandOnClick: n.expandOnClickRef,
              internalScrollable: n.internalScrollableRef,
              draggable: n.draggableRef,
              blockLine: v,
              nodeProps: R,
              checkboxFocusable: n.internalCheckboxFocusableRef,
              droppingPosition: d,
              droppingOffsetLevel: u,
              indent: f,
              checkboxPlacement: p,
              showLine: y,
              contentInstRef: N,
              contentElRef: L,
              indentNodes: A,
              handleCheck: B,
              handleDrop: function (t) {
                t.preventDefault(),
                  null !== d.value &&
                    n.handleDrop({
                      event: t,
                      node: e.tmNode,
                      dropPosition: d.value,
                    });
              },
              handleDragStart: function (t) {
                n.handleDragStart({ event: t, node: e.tmNode });
              },
              handleDragEnter: function (t) {
                t.currentTarget === t.target &&
                  n.handleDragEnter({ event: t, node: e.tmNode });
              },
              handleDragOver: function (t) {
                t.preventDefault(),
                  n.handleDragOver({ event: t, node: e.tmNode });
              },
              handleDragEnd: function (t) {
                n.handleDragEnd({ event: t, node: e.tmNode });
              },
              handleDragLeave: function (t) {
                t.currentTarget === t.target &&
                  n.handleDragLeave({ event: t, node: e.tmNode });
              },
              handleLineClick: function (e) {
                v.value && K(e);
              },
              handleContentClick: function (e) {
                v.value || K(e);
              },
              handleSwitcherClick: T,
            };
          },
          render() {
            const {
                tmNode: e,
                clsPrefix: n,
                checkable: t,
                expandOnClick: o,
                selectable: r,
                selected: l,
                checked: i,
                highlight: a,
                draggable: s,
                blockLine: d,
                indent: c,
                indentNodes: u,
                disabled: h,
                pending: f,
                internalScrollable: v,
                nodeProps: p,
                checkboxPlacement: g,
              } = this,
              m =
                s && !h
                  ? {
                      onDragenter: this.handleDragEnter,
                      onDragleave: this.handleDragLeave,
                      onDragend: this.handleDragEnd,
                      onDrop: this.handleDrop,
                      onDragover: this.handleDragOver,
                    }
                  : void 0,
              y = v ? Ee(e.key) : void 0,
              k = "right" === g,
              x = t
                ? b(Zn, {
                    indent: c,
                    right: k,
                    focusable: this.checkboxFocusable,
                    disabled: h || this.checkboxDisabled,
                    clsPrefix: n,
                    checked: this.checked,
                    indeterminate: this.indeterminate,
                    onCheck: this.handleCheck,
                  })
                : null;
            return b(
              "div",
              Object.assign({ class: `${n}-tree-node-wrapper` }, m),
              b(
                "div",
                Object.assign({}, d ? p : void 0, {
                  class: [
                    `${n}-tree-node`,
                    {
                      [`${n}-tree-node--selected`]: l,
                      [`${n}-tree-node--checkable`]: t,
                      [`${n}-tree-node--highlight`]: a,
                      [`${n}-tree-node--pending`]: f,
                      [`${n}-tree-node--disabled`]: h,
                      [`${n}-tree-node--selectable`]: r,
                      [`${n}-tree-node--clickable`]:
                        r || o || this.mergedCheckOnClick,
                    },
                    null == p ? void 0 : p.class,
                  ],
                  "data-key": y,
                  draggable: s && d,
                  onClick: this.handleLineClick,
                  onDragstart: s && d && !h ? this.handleDragStart : void 0,
                }),
                u,
                e.isLeaf && this.showLine
                  ? b(
                      "div",
                      {
                        class: [
                          `${n}-tree-node-indent`,
                          `${n}-tree-node-indent--show-line`,
                          e.isLeaf && `${n}-tree-node-indent--is-leaf`,
                          e.isLastChild && `${n}-tree-node-indent--last-child`,
                        ],
                      },
                      b("div", { style: { width: `${c}px` } }),
                    )
                  : b(Xn, {
                      clsPrefix: n,
                      expanded: this.expanded,
                      selected: l,
                      loading: this.loading,
                      hide: e.isLeaf,
                      tmNode: this.tmNode,
                      indent: c,
                      onClick: this.handleSwitcherClick,
                    }),
                k ? null : x,
                b(Qn, {
                  ref: "contentInstRef",
                  clsPrefix: n,
                  checked: i,
                  selected: l,
                  onClick: this.handleContentClick,
                  nodeProps: d ? void 0 : p,
                  onDragstart: !s || d || h ? void 0 : this.handleDragStart,
                  tmNode: e,
                }),
                s
                  ? this.showDropMark
                    ? Jn({
                        el: this.contentElRef.value,
                        position: this.droppingPosition,
                        offsetLevel: this.droppingOffsetLevel,
                        indent: c,
                      })
                    : this.showDropMarkAsParent
                      ? Jn({
                          el: this.contentElRef.value,
                          position: "inside",
                          offsetLevel: this.droppingOffsetLevel,
                          indent: c,
                        })
                      : null
                  : null,
                k ? x : null,
              ),
            );
          },
        }),
        rt = i({
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
            return b(
              ie,
              {
                onAfterEnter: this.onAfterEnter,
                appear: !0,
                reverse: "collapse" === this.mode,
              },
              {
                default: () =>
                  b(
                    "div",
                    {
                      class: [
                        `${e}-tree-motion-wrapper`,
                        `${e}-tree-motion-wrapper--${this.mode}`,
                      ],
                      style: { height: p(this.height) },
                    },
                    this.nodes.map((n) => b(ot, { clsPrefix: e, tmNode: n })),
                  ),
              },
            );
          },
        }),
        lt = A(),
        it = S("tree", "\n font-size: var(--n-font-size);\n outline: none;\n", [
          N("ul, li", "\n margin: 0;\n padding: 0;\n list-style: none;\n "),
          N(">", [S("tree-node", [N("&:first-child", "margin-top: 0;")])]),
          S("tree-motion-wrapper", [
            B("expand", [ae({ duration: "0.2s" })]),
            B("collapse", [ae({ duration: "0.2s", reverse: !0 })]),
          ]),
          S(
            "tree-node-wrapper",
            "\n box-sizing: border-box;\n padding: var(--n-node-wrapper-padding);\n ",
          ),
          S(
            "tree-node",
            "\n transform: translate3d(0,0,0);\n position: relative;\n display: flex;\n border-radius: var(--n-node-border-radius);\n transition: background-color .3s var(--n-bezier);\n ",
            [
              B("highlight", [
                S("tree-node-content", [
                  R(
                    "text",
                    "border-bottom-color: var(--n-node-text-color-disabled);",
                  ),
                ]),
              ]),
              B("disabled", [
                S(
                  "tree-node-content",
                  "\n color: var(--n-node-text-color-disabled);\n cursor: not-allowed;\n ",
                ),
              ]),
              se("disabled", [
                B("clickable", [
                  S("tree-node-content", "\n cursor: pointer;\n "),
                ]),
              ]),
            ],
          ),
          B("block-node", [
            S("tree-node-content", "\n flex: 1;\n min-width: 0;\n "),
          ]),
          se("block-line", [
            S("tree-node", [
              se("disabled", [
                S("tree-node-content", [
                  N("&:hover", "background: var(--n-node-color-hover);"),
                ]),
                B("selectable", [
                  S("tree-node-content", [
                    N("&:active", "background: var(--n-node-color-pressed);"),
                  ]),
                ]),
                B("pending", [
                  S(
                    "tree-node-content",
                    "\n background: var(--n-node-color-hover);\n ",
                  ),
                ]),
                B("selected", [
                  S(
                    "tree-node-content",
                    "background: var(--n-node-color-active);",
                  ),
                ]),
              ]),
              B("selected", [
                S(
                  "tree-node-content",
                  "background: var(--n-node-color-active);",
                ),
              ]),
            ]),
          ]),
          B("block-line", [
            S("tree-node", [
              se("disabled", [
                N("&:hover", "background: var(--n-node-color-hover);"),
                B("pending", "\n background: var(--n-node-color-hover);\n "),
                B("selectable", [
                  se("selected", [
                    N("&:active", "background: var(--n-node-color-pressed);"),
                  ]),
                ]),
                B("selected", "background: var(--n-node-color-active);"),
              ]),
              B("selected", "background: var(--n-node-color-active);"),
              B("disabled", "\n cursor: not-allowed;\n "),
            ]),
          ]),
          S("tree-node-indent", "\n flex-grow: 0;\n flex-shrink: 0;\n ", [
            B("show-line", "position: relative", [
              N(
                "&::before",
                '\n position: absolute;\n left: 50%;\n border-left: 1px solid var(--n-line-color);\n transition: border-color .3s var(--n-bezier);\n transform: translate(-50%);\n content: "";\n top: var(--n-line-offset-top);\n bottom: var(--n-line-offset-bottom);\n ',
              ),
              B("last-child", [N("&::before", "\n bottom: 50%;\n ")]),
              B("is-leaf", [
                N(
                  "&::after",
                  '\n position: absolute;\n content: "";\n left: calc(50% + 0.5px);\n right: 0;\n bottom: 50%;\n transition: border-color .3s var(--n-bezier);\n border-bottom: 1px solid var(--n-line-color);\n ',
                ),
              ]),
            ]),
            se("show-line", "height: 0;"),
          ]),
          S(
            "tree-node-switcher",
            "\n cursor: pointer;\n display: inline-flex;\n flex-shrink: 0;\n height: var(--n-node-content-height);\n align-items: center;\n justify-content: center;\n transition: transform .15s var(--n-bezier);\n vertical-align: bottom;\n ",
            [
              R(
                "icon",
                "\n position: relative;\n height: 14px;\n width: 14px;\n display: flex;\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n font-size: 14px;\n ",
                [
                  S("icon", [lt]),
                  S(
                    "base-loading",
                    "\n color: var(--n-loading-color);\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n ",
                    [lt],
                  ),
                  S("base-icon", [lt]),
                ],
              ),
              B("hide", "visibility: hidden;"),
              B("expanded", "transform: rotate(90deg);"),
            ],
          ),
          S(
            "tree-node-checkbox",
            "\n display: inline-flex;\n height: var(--n-node-content-height);\n vertical-align: bottom;\n align-items: center;\n justify-content: center;\n ",
          ),
          S(
            "tree-node-content",
            "\n user-select: none;\n position: relative;\n display: inline-flex;\n align-items: center;\n min-height: var(--n-node-content-height);\n box-sizing: border-box;\n line-height: var(--n-line-height);\n vertical-align: bottom;\n padding: 0 6px 0 4px;\n cursor: default;\n border-radius: var(--n-node-border-radius);\n color: var(--n-node-text-color);\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",
            [
              N("&:last-child", "margin-bottom: 0;"),
              R("prefix", "\n display: inline-flex;\n margin-right: 8px;\n "),
              R(
                "text",
                "\n border-bottom: 1px solid #0000;\n transition: border-color .3s var(--n-bezier);\n flex-grow: 1;\n max-width: 100%;\n ",
              ),
              R("suffix", "\n display: inline-flex;\n "),
            ],
          ),
          R("empty", "margin: auto;"),
        ]);
      var at = function (e, n, t, o) {
        return new (t || (t = Promise))(function (n, r) {
          function l(e) {
            try {
              a(o.next(e));
            } catch (n) {
              r(n);
            }
          }
          function i(e) {
            try {
              a(o.throw(e));
            } catch (n) {
              r(n);
            }
          }
          function a(e) {
            var o;
            e.done
              ? n(e.value)
              : ((o = e.value),
                o instanceof t
                  ? o
                  : new t(function (e) {
                      e(o);
                    })).then(l, i);
          }
          a((o = o.apply(e, [])).next());
        });
      };
      function st(e, n, t, o) {
        return {
          getIsGroup: () => !1,
          getKey: (n) => n[e],
          getChildren: o || ((e) => e[n]),
          getDisabled: (e) => !(!e[t] && !e.checkboxDisabled),
        };
      }
      const dt = {
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
        ct = Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, T.props), {
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
              allowDrop: {
                type: Function,
                default: function ({ dropPosition: e, node: n }) {
                  return !1 === n.isLeaf || !!n.children || "inside" !== e;
                },
              },
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
            dt,
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
        ut = i({
          name: "Tree",
          props: ct,
          setup(e) {
            const {
                mergedClsPrefixRef: n,
                inlineThemeDisabled: r,
                mergedRtlRef: i,
              } = L(e),
              s = _("Tree", i, n),
              d = T("Tree", "-tree", it, de, e, n),
              c = t(null),
              u = t(null),
              h = t(null),
              b = o(() => {
                const { filter: n } = e;
                if (n) return n;
                const { labelField: t } = e;
                return (e, n) => {
                  if (!e.length) return !0;
                  const o = n[t];
                  return (
                    "string" == typeof o &&
                    o.toLowerCase().includes(e.toLowerCase())
                  );
                };
              }),
              g = o(() => {
                const { pattern: n } = e;
                return n && n.length && b.value
                  ? (function (e, n, t, o, r) {
                      const l = new Set(),
                        i = new Set(),
                        a = new Set(),
                        s = [],
                        d = [],
                        c = [];
                      return (
                        (function e(s) {
                          s.forEach((s) => {
                            if ((c.push(s), n(t, s))) {
                              l.add(s[o]), a.add(s[o]);
                              for (let e = c.length - 2; e >= 0; --e) {
                                const n = c[e][o];
                                if (i.has(n)) break;
                                i.add(n), l.has(n) && l.delete(n);
                              }
                            }
                            const d = s[r];
                            d && e(d), c.pop();
                          });
                        })(e),
                        (function e(n, t) {
                          n.forEach((n) => {
                            const a = n[o],
                              d = l.has(a),
                              c = i.has(a);
                            if (!d && !c) return;
                            const u = n[r];
                            if (u)
                              if (d) t.push(n);
                              else {
                                s.push(a);
                                const o = Object.assign(Object.assign({}, n), {
                                  [r]: [],
                                });
                                t.push(o), e(u, o[r]);
                              }
                            else t.push(n);
                          });
                        })(e, d),
                        { filteredTree: d, highlightKeySet: a, expandedKeys: s }
                      );
                    })(e.data, b.value, n, e.keyField, e.childrenField)
                  : {
                      filteredTree: e.data,
                      highlightKeySet: null,
                      expandedKeys: void 0,
                    };
              }),
              m = o(() =>
                xn(
                  e.showIrrelevantNodes ? e.data : g.value.filteredTree,
                  st(
                    e.keyField,
                    e.childrenField,
                    e.disabledField,
                    e.getChildren,
                  ),
                ),
              ),
              y = a(Gn, null),
              k = e.internalTreeSelect
                ? y.dataTreeMate
                : o(() =>
                    e.showIrrelevantNodes
                      ? m.value
                      : xn(
                          e.data,
                          st(
                            e.keyField,
                            e.childrenField,
                            e.disabledField,
                            e.getChildren,
                          ),
                        ),
                  ),
              { watchProps: x } = e,
              C = t([]);
            (null == x ? void 0 : x.includes("defaultCheckedKeys"))
              ? ce(() => {
                  C.value = e.defaultCheckedKeys;
                })
              : (C.value = e.defaultCheckedKeys);
            const w = f(e, "checkedKeys"),
              S = E(w, C),
              R = o(() =>
                k.value.getCheckedKeys(S.value, {
                  cascade: e.cascade,
                  allowNotLoaded: e.allowCheckingNotLoaded,
                }),
              ),
              N = (function (e) {
                return o(() => (e.leafOnly ? "child" : e.checkStrategy));
              })(e),
              z = o(() => R.value.checkedKeys),
              I = o(() => {
                const { indeterminateKeys: n } = e;
                return void 0 !== n ? n : R.value.indeterminateKeys;
              }),
              D = t([]);
            (null == x ? void 0 : x.includes("defaultSelectedKeys"))
              ? ce(() => {
                  D.value = e.defaultSelectedKeys;
                })
              : (D.value = e.defaultSelectedKeys);
            const K = f(e, "selectedKeys"),
              B = E(K, D),
              A = t([]),
              $ = (n) => {
                A.value = e.defaultExpandAll
                  ? k.value.getNonLeafKeys()
                  : void 0 === n
                    ? e.defaultExpandedKeys
                    : n;
              };
            (null == x ? void 0 : x.includes("defaultExpandedKeys"))
              ? ce(() => {
                  $(void 0);
                })
              : ce(() => {
                  $(e.defaultExpandedKeys);
                });
            const F = f(e, "expandedKeys"),
              O = E(F, A),
              j = o(() => m.value.getFlattenedNodes(O.value)),
              { pendingNodeKeyRef: M, handleKeydown: U } = (function ({
                props: e,
                fNodesRef: n,
                mergedExpandedKeysRef: o,
                mergedSelectedKeysRef: r,
                mergedCheckedKeysRef: l,
                handleCheck: i,
                handleSelect: s,
                handleSwitcherClick: d,
              }) {
                const { value: c } = r,
                  u = a(Gn, null),
                  h = u
                    ? u.pendingNodeKeyRef
                    : t(c.length ? c[c.length - 1] : null);
                return {
                  pendingNodeKeyRef: h,
                  handleKeydown: function (t) {
                    var r;
                    if (!e.keyboard) return { enterBehavior: null };
                    const { value: a } = h;
                    let c = null;
                    if (null === a) {
                      if (
                        (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                          t.preventDefault(),
                        [
                          "ArrowDown",
                          "ArrowUp",
                          "ArrowLeft",
                          "ArrowRight",
                        ].includes(t.key) && null === a)
                      ) {
                        const { value: e } = n;
                        let t = 0;
                        for (; t < e.length; ) {
                          if (!e[t].disabled) {
                            h.value = e[t].key;
                            break;
                          }
                          t += 1;
                        }
                      }
                    } else {
                      const { value: u } = n;
                      let f = u.findIndex((e) => e.key === a);
                      if (!~f) return { enterBehavior: null };
                      if ("Enter" === t.key) {
                        const n = u[f];
                        switch (
                          ((c =
                            (null ===
                              (r = e.overrideDefaultNodeClickBehavior) ||
                            void 0 === r
                              ? void 0
                              : r.call(e, { option: n.rawNode })) || null),
                          c)
                        ) {
                          case "toggleCheck":
                            i(n, !l.value.includes(n.key));
                            break;
                          case "toggleSelect":
                            s(n);
                            break;
                          case "toggleExpand":
                            d(n);
                            break;
                          case "none":
                            break;
                          default:
                            (c = "default"), s(n);
                        }
                      } else if ("ArrowDown" === t.key)
                        for (t.preventDefault(), f += 1; f < u.length; ) {
                          if (!u[f].disabled) {
                            h.value = u[f].key;
                            break;
                          }
                          f += 1;
                        }
                      else if ("ArrowUp" === t.key)
                        for (t.preventDefault(), f -= 1; f >= 0; ) {
                          if (!u[f].disabled) {
                            h.value = u[f].key;
                            break;
                          }
                          f -= 1;
                        }
                      else if ("ArrowLeft" === t.key) {
                        const e = u[f];
                        if (e.isLeaf || !o.value.includes(a)) {
                          const n = e.getParent();
                          n && (h.value = n.key);
                        } else d(e);
                      } else if ("ArrowRight" === t.key) {
                        const e = u[f];
                        if (e.isLeaf) return { enterBehavior: null };
                        if (o.value.includes(a))
                          for (f += 1; f < u.length; ) {
                            if (!u[f].disabled) {
                              h.value = u[f].key;
                              break;
                            }
                            f += 1;
                          }
                        else d(e);
                      }
                    }
                    return { enterBehavior: c };
                  },
                };
              })({
                props: e,
                mergedCheckedKeysRef: S,
                mergedSelectedKeysRef: B,
                fNodesRef: j,
                mergedExpandedKeysRef: O,
                handleCheck: Le,
                handleSelect: ze,
                handleSwitcherClick: Te,
              });
            let H = null,
              V = null;
            const q = t(new Set()),
              G = o(() => e.internalHighlightKeySet || g.value.highlightKeySet),
              Y = E(G, q),
              X = t(new Set()),
              Z = o(() => O.value.filter((e) => !X.value.has(e)));
            let Q = 0;
            const J = t(null),
              ee = t(null),
              ne = t(null),
              te = t(null),
              oe = t(0),
              re = o(() => {
                const { value: e } = ee;
                return e ? e.parent : null;
              });
            let le = !1;
            ue(
              f(e, "data"),
              () => {
                (le = !0),
                  he(() => {
                    le = !1;
                  }),
                  X.value.clear(),
                  (M.value = null),
                  Se();
              },
              { deep: !1 },
            );
            let ie = !1;
            const ae = () => {
              (ie = !0),
                he(() => {
                  ie = !1;
                });
            };
            let se;
            function ve(n) {
              return at(this, 0, void 0, function* () {
                const { onLoad: t } = e;
                if (!t) return void (yield Promise.resolve());
                const { value: o } = X;
                if (!o.has(n.key)) {
                  o.add(n.key);
                  try {
                    !1 === (yield t(n.rawNode)) && Ne();
                  } catch (r) {
                    console.error(r), Ne();
                  }
                  o.delete(n.key);
                }
              });
            }
            ue(f(e, "pattern"), (n, t) => {
              if (e.showIrrelevantNodes)
                if (((se = void 0), n)) {
                  const { expandedKeys: n, highlightKeySet: t } = tt(
                    e.data,
                    e.pattern,
                    e.keyField,
                    e.childrenField,
                    b.value,
                  );
                  (q.value = t),
                    ae(),
                    xe(n, ke(n), { node: null, action: "filter" });
                } else q.value = new Set();
              else if (n.length) {
                t.length || (se = O.value);
                const { expandedKeys: e } = g.value;
                void 0 !== e &&
                  (ae(), xe(e, ke(e), { node: null, action: "filter" }));
              } else
                void 0 !== se &&
                  (ae(), xe(se, ke(se), { node: null, action: "filter" }));
            }),
              ce(() => {
                var e;
                const { value: n } = m;
                if (!n) return;
                const { getNode: t } = n;
                null === (e = O.value) ||
                  void 0 === e ||
                  e.forEach((e) => {
                    const n = t(e);
                    n && !n.shallowLoaded && ve(n);
                  });
              });
            const pe = t(!1),
              be = t([]);
            ue(Z, (n, t) => {
              if (!e.animated || ie) return void he(ye);
              if (le) return;
              const o = v(d.value.self.nodeHeight),
                r = new Set(t);
              let l = null,
                i = null;
              for (const e of n)
                if (!r.has(e)) {
                  if (null !== l) return;
                  l = e;
                }
              const a = new Set(n);
              for (const e of t)
                if (!a.has(e)) {
                  if (null !== i) return;
                  i = e;
                }
              if (null === l && null === i) return;
              const { virtualScroll: s } = e,
                u = (s ? h.value.listElRef : c.value).offsetHeight,
                f = Math.ceil(u / o) + 1;
              let p;
              if (
                (null !== l && (p = t),
                null !== i && (p = void 0 === p ? n : p.filter((e) => e !== i)),
                (pe.value = !0),
                (be.value = m.value.getFlattenedNodes(p)),
                null !== l)
              ) {
                const e = be.value.findIndex((e) => e.key === l);
                if (~e) {
                  const t = be.value[e].children;
                  if (t) {
                    const r = yn(t, n);
                    be.value.splice(e + 1, 0, {
                      __motion: !0,
                      mode: "expand",
                      height: s ? r.length * o : void 0,
                      nodes: s ? r.slice(0, f) : r,
                    });
                  }
                }
              }
              if (null !== i) {
                const e = be.value.findIndex((e) => e.key === i);
                if (~e) {
                  const t = be.value[e].children;
                  if (!t) return;
                  pe.value = !0;
                  const r = yn(t, n);
                  be.value.splice(e + 1, 0, {
                    __motion: !0,
                    mode: "collapse",
                    height: s ? r.length * o : void 0,
                    nodes: s ? r.slice(0, f) : r,
                  });
                }
              }
            });
            const ge = o(() =>
                (function (e) {
                  const n = new Map();
                  return (
                    e.forEach((e, t) => {
                      n.set(e.key, t);
                    }),
                    (e) => {
                      var t;
                      return null !== (t = n.get(e)) && void 0 !== t ? t : null;
                    }
                  );
                })(j.value),
              ),
              me = o(() => (pe.value ? be.value : j.value));
            function ye() {
              const { value: e } = u;
              e && e.sync();
            }
            function ke(e) {
              const { getNode: n } = k.value;
              return e.map((e) => {
                var t;
                return (
                  (null === (t = n(e)) || void 0 === t ? void 0 : t.rawNode) ||
                  null
                );
              });
            }
            function xe(n, t, o) {
              const { "onUpdate:expandedKeys": r, onUpdateExpandedKeys: l } = e;
              (A.value = n), r && W(r, n, t, o), l && W(l, n, t, o);
            }
            function Ce(n, t, o) {
              const { "onUpdate:checkedKeys": r, onUpdateCheckedKeys: l } = e;
              (C.value = n), l && W(l, n, t, o), r && W(r, n, t, o);
            }
            function we(n, t, o) {
              const { "onUpdate:selectedKeys": r, onUpdateSelectedKeys: l } = e;
              (D.value = n), l && W(l, n, t, o), r && W(r, n, t, o);
            }
            function Se() {
              (J.value = null), Re();
            }
            function Re() {
              (oe.value = 0),
                (ee.value = null),
                (ne.value = null),
                (te.value = null),
                Ne();
            }
            function Ne() {
              H && (window.clearTimeout(H), (H = null)), (V = null);
            }
            function Le(n, t) {
              if (e.disabled || et(n, e.disabledField)) return;
              if (e.internalUnifySelectCheck && !e.multiple) return void ze(n);
              const o = t ? "check" : "uncheck",
                { checkedKeys: r, indeterminateKeys: l } = k.value[o](
                  n.key,
                  z.value,
                  {
                    cascade: e.cascade,
                    checkStrategy: N.value,
                    allowNotLoaded: e.allowCheckingNotLoaded,
                  },
                );
              Ce(r, ke(r), { node: n.rawNode, action: o }),
                (function (n, t) {
                  const {
                    "onUpdate:indeterminateKeys": o,
                    onUpdateIndeterminateKeys: r,
                  } = e;
                  o && W(o, n, t), r && W(r, n, t);
                })(l, ke(l));
            }
            function Te(n) {
              e.disabled ||
                pe.value ||
                (function (n) {
                  if (e.disabled) return;
                  const { key: t } = n,
                    { value: o } = O,
                    r = o.findIndex((e) => e === t);
                  if (~r) {
                    const e = Array.from(o);
                    e.splice(r, 1),
                      xe(e, ke(e), { node: n.rawNode, action: "collapse" });
                  } else {
                    const r = m.value.getNode(t);
                    if (!r || r.isLeaf) return;
                    let l;
                    if (e.accordion) {
                      const e = new Set(n.siblings.map(({ key: e }) => e));
                      (l = o.filter((n) => !e.has(n))), l.push(t);
                    } else l = o.concat(t);
                    xe(l, ke(l), { node: n.rawNode, action: "expand" });
                  }
                })(n);
            }
            function ze(n) {
              if (!e.disabled && e.selectable) {
                if (((M.value = n.key), e.internalUnifySelectCheck)) {
                  const {
                    value: { checkedKeys: t, indeterminateKeys: o },
                  } = R;
                  e.multiple
                    ? Le(n, !(t.includes(n.key) || o.includes(n.key)))
                    : Ce([n.key], ke([n.key]), {
                        node: n.rawNode,
                        action: "check",
                      });
                }
                if (e.multiple) {
                  const t = Array.from(B.value),
                    o = t.findIndex((e) => e === n.key);
                  ~o ? e.cancelable && t.splice(o, 1) : ~o || t.push(n.key),
                    we(t, ke(t), {
                      node: n.rawNode,
                      action: ~o ? "unselect" : "select",
                    });
                } else
                  B.value.includes(n.key)
                    ? e.cancelable &&
                      we([], [], { node: n.rawNode, action: "unselect" })
                    : we([n.key], ke([n.key]), {
                        node: n.rawNode,
                        action: "select",
                      });
              }
            }
            function Ie({ event: n, node: t }, o = !0) {
              var r;
              if (!e.draggable || e.disabled || et(t, e.disabledField)) return;
              const { value: l } = J;
              if (!l) return;
              const { allowDrop: i, indent: a } = e;
              o &&
                (function (n) {
                  const { onDragover: t } = e;
                  t && W(t, n);
                })({ event: n, node: t.rawNode });
              const s = n.currentTarget,
                { height: d, top: c } = s.getBoundingClientRect(),
                u = n.clientY - c;
              let h;
              h = i({ node: t.rawNode, dropPosition: "inside", phase: "drag" })
                ? u <= 8
                  ? "before"
                  : u >= d - 8
                    ? "after"
                    : "inside"
                : u <= d / 2
                  ? "before"
                  : "after";
              const { value: f } = ge;
              let v, p;
              const b = f(t.key);
              if (null === b) return void Re();
              let g = !1;
              "inside" === h
                ? ((v = t), (p = "inside"))
                : "before" === h
                  ? t.isFirstChild
                    ? ((v = t), (p = "before"))
                    : ((v = j.value[b - 1]), (p = "after"))
                  : ((v = t), (p = "after")),
                !v.isLeaf &&
                  O.value.includes(v.key) &&
                  ((g = !0),
                  "after" === p &&
                    ((v = j.value[b + 1]),
                    v ? (p = "before") : ((v = t), (p = "inside"))));
              const m = v;
              if (
                ((ne.value = m),
                !g && l.isLastChild && l.key === v.key && (p = "after"),
                "after" === p)
              ) {
                let e = Q - n.clientX,
                  t = 0;
                for (
                  ;
                  e >= a / 2 && null !== v.parent && v.isLastChild && t < 1;

                )
                  (e -= a), (t += 1), (v = v.parent);
                oe.value = t;
              } else oe.value = 0;
              if (
                !(
                  l.contains(v) ||
                  ("inside" === p &&
                    (null === (r = l.parent) || void 0 === r
                      ? void 0
                      : r.key) === v.key)
                ) ||
                (l.key === m.key && l.key === v.key)
              )
                if (i({ node: v.rawNode, dropPosition: p, phase: "drag" })) {
                  if (l.key === v.key) Ne();
                  else if (V !== v.key)
                    if ("inside" === p) {
                      if (e.expandOnDragenter) {
                        if (
                          ((function (e) {
                            if (
                              (H && (window.clearTimeout(H), (H = null)),
                              e.isLeaf)
                            )
                              return;
                            V = e.key;
                            const n = () => {
                              if (V !== e.key) return;
                              const { value: n } = ne;
                              if (
                                n &&
                                n.key === e.key &&
                                !O.value.includes(e.key)
                              ) {
                                const n = O.value.concat(e.key);
                                xe(n, ke(n), {
                                  node: e.rawNode,
                                  action: "expand",
                                });
                              }
                              (H = null), (V = null);
                            };
                            H = e.shallowLoaded
                              ? window.setTimeout(() => {
                                  n();
                                }, 1e3)
                              : window.setTimeout(() => {
                                  ve(e).then(() => {
                                    n();
                                  });
                                }, 1e3);
                          })(v),
                          !v.shallowLoaded && V !== v.key)
                        )
                          return void Se();
                      } else if (!v.shallowLoaded) return void Se();
                    } else Ne();
                  else "inside" !== p && Ne();
                  (te.value = p), (ee.value = v);
                } else Re();
              else Re();
            }
            ue(M, (n) => {
              var t, o;
              if (null !== n)
                if (e.virtualScroll)
                  null === (t = h.value) ||
                    void 0 === t ||
                    t.scrollTo({ key: n });
                else if (e.internalScrollable) {
                  const { value: e } = u;
                  if (null === e) return;
                  const t =
                    null === (o = e.contentRef) || void 0 === o
                      ? void 0
                      : o.querySelector(`[data-key="${Ee(n)}"]`);
                  if (!t) return;
                  e.scrollTo({ el: t });
                }
            }),
              l(Yn, {
                loadingKeysRef: X,
                highlightKeySetRef: Y,
                displayedCheckedKeysRef: z,
                displayedIndeterminateKeysRef: I,
                mergedSelectedKeysRef: B,
                mergedExpandedKeysRef: O,
                mergedThemeRef: d,
                mergedCheckStrategyRef: N,
                nodePropsRef: f(e, "nodeProps"),
                disabledRef: f(e, "disabled"),
                checkableRef: f(e, "checkable"),
                selectableRef: f(e, "selectable"),
                expandOnClickRef: f(e, "expandOnClick"),
                onLoadRef: f(e, "onLoad"),
                draggableRef: f(e, "draggable"),
                blockLineRef: f(e, "blockLine"),
                indentRef: f(e, "indent"),
                cascadeRef: f(e, "cascade"),
                checkOnClickRef: f(e, "checkOnClick"),
                checkboxPlacementRef: e.checkboxPlacement,
                droppingMouseNodeRef: ne,
                droppingNodeParentRef: re,
                draggingNodeRef: J,
                droppingPositionRef: te,
                droppingOffsetLevelRef: oe,
                fNodesRef: j,
                pendingNodeKeyRef: M,
                showLineRef: f(e, "showLine"),
                disabledFieldRef: f(e, "disabledField"),
                internalScrollableRef: f(e, "internalScrollable"),
                internalCheckboxFocusableRef: f(e, "internalCheckboxFocusable"),
                internalTreeSelect: e.internalTreeSelect,
                renderLabelRef: f(e, "renderLabel"),
                renderPrefixRef: f(e, "renderPrefix"),
                renderSuffixRef: f(e, "renderSuffix"),
                renderSwitcherIconRef: f(e, "renderSwitcherIcon"),
                labelFieldRef: f(e, "labelField"),
                multipleRef: f(e, "multiple"),
                overrideDefaultNodeClickBehaviorRef: f(
                  e,
                  "overrideDefaultNodeClickBehavior",
                ),
                handleSwitcherClick: Te,
                handleDragEnd: function ({ event: n, node: t }) {
                  Se(),
                    !e.draggable ||
                      e.disabled ||
                      et(t, e.disabledField) ||
                      (function (n) {
                        const { onDragend: t } = e;
                        t && W(t, n);
                      })({ event: n, node: t.rawNode });
                },
                handleDragEnter: function ({ event: n, node: t }) {
                  !e.draggable ||
                    e.disabled ||
                    et(t, e.disabledField) ||
                    (Ie({ event: n, node: t }, !1),
                    (function (n) {
                      const { onDragenter: t } = e;
                      t && W(t, n);
                    })({ event: n, node: t.rawNode }));
                },
                handleDragLeave: function ({ event: n, node: t }) {
                  !e.draggable ||
                    e.disabled ||
                    et(t, e.disabledField) ||
                    (function (n) {
                      const { onDragleave: t } = e;
                      t && W(t, n);
                    })({ event: n, node: t.rawNode });
                },
                handleDragStart: function ({ event: n, node: t }) {
                  !e.draggable ||
                    e.disabled ||
                    et(t, e.disabledField) ||
                    ((Q = n.clientX),
                    (J.value = t),
                    (function (n) {
                      const { onDragstart: t } = e;
                      t && W(t, n);
                    })({ event: n, node: t.rawNode }));
                },
                handleDrop: function ({ event: n, node: t, dropPosition: o }) {
                  if (!e.draggable || e.disabled || et(t, e.disabledField))
                    return;
                  const { value: r } = J,
                    { value: l } = ee,
                    { value: i } = te;
                  if (
                    r &&
                    l &&
                    i &&
                    e.allowDrop({
                      node: l.rawNode,
                      dropPosition: i,
                      phase: "drag",
                    }) &&
                    r.key !== l.key
                  ) {
                    if ("before" === i) {
                      const e = r.getNext({ includeDisabled: !0 });
                      if (e && e.key === l.key) return void Re();
                    }
                    if ("after" === i) {
                      const e = r.getPrev({ includeDisabled: !0 });
                      if (e && e.key === l.key) return void Re();
                    }
                    !(function (n) {
                      const { onDrop: t } = e;
                      t && W(t, n);
                    })({
                      event: n,
                      node: l.rawNode,
                      dragNode: r.rawNode,
                      dropPosition: o,
                    }),
                      Se();
                  }
                },
                handleDragOver: Ie,
                handleSelect: ze,
                handleCheck: Le,
              });
            const Pe = {
                handleKeydown: U,
                scrollTo: function (e, n) {
                  var t, o;
                  "number" == typeof e
                    ? null === (t = h.value) ||
                      void 0 === t ||
                      t.scrollTo(e, n || 0)
                    : null === (o = h.value) || void 0 === o || o.scrollTo(e);
                },
                getCheckedData: () => {
                  if (!e.checkable) return { keys: [], options: [] };
                  const { checkedKeys: n } = R.value;
                  return { keys: n, options: ke(n) };
                },
                getIndeterminateData: () => {
                  if (!e.checkable) return { keys: [], options: [] };
                  const { indeterminateKeys: n } = R.value;
                  return { keys: n, options: ke(n) };
                },
              },
              De = o(() => {
                const {
                    common: { cubicBezierEaseInOut: e },
                    self: {
                      fontSize: n,
                      nodeBorderRadius: t,
                      nodeColorHover: o,
                      nodeColorPressed: r,
                      nodeColorActive: l,
                      arrowColor: i,
                      loadingColor: a,
                      nodeTextColor: s,
                      nodeTextColorDisabled: c,
                      dropMarkColor: u,
                      nodeWrapperPadding: h,
                      nodeHeight: f,
                      lineHeight: b,
                      lineColor: g,
                    },
                  } = d.value,
                  m = fe(h, "top"),
                  y = fe(h, "bottom");
                return {
                  "--n-arrow-color": i,
                  "--n-loading-color": a,
                  "--n-bezier": e,
                  "--n-font-size": n,
                  "--n-node-border-radius": t,
                  "--n-node-color-active": l,
                  "--n-node-color-hover": o,
                  "--n-node-color-pressed": r,
                  "--n-node-text-color": s,
                  "--n-node-text-color-disabled": c,
                  "--n-drop-mark-color": u,
                  "--n-node-wrapper-padding": h,
                  "--n-line-offset-top": `-${m}`,
                  "--n-line-offset-bottom": `-${y}`,
                  "--n-node-content-height": p(v(f) - v(m) - v(y)),
                  "--n-line-height": b,
                  "--n-line-color": g,
                };
              }),
              Ke = r ? P("tree", void 0, De, e) : void 0;
            return Object.assign(Object.assign({}, Pe), {
              mergedClsPrefix: n,
              mergedTheme: d,
              rtlEnabled: s,
              fNodes: me,
              aip: pe,
              selfElRef: c,
              virtualListInstRef: h,
              scrollbarInstRef: u,
              handleFocusout: function (n) {
                var t;
                if (e.virtualScroll || e.internalScrollable) {
                  const { value: e } = u;
                  if (
                    null === (t = null == e ? void 0 : e.containerRef) ||
                    void 0 === t
                      ? void 0
                      : t.contains(n.relatedTarget)
                  )
                    return;
                  M.value = null;
                } else {
                  const { value: e } = c;
                  if (null == e ? void 0 : e.contains(n.relatedTarget)) return;
                  M.value = null;
                }
              },
              handleDragLeaveTree: function (e) {
                e.target === e.currentTarget && Re();
              },
              handleScroll: function () {
                ye();
              },
              getScrollContainer: function () {
                var e;
                return null === (e = h.value) || void 0 === e
                  ? void 0
                  : e.listElRef;
              },
              getScrollContent: function () {
                var e;
                return null === (e = h.value) || void 0 === e
                  ? void 0
                  : e.itemsElRef;
              },
              handleAfterEnter: function () {
                (pe.value = !1), e.virtualScroll && he(ye);
              },
              handleResize: function () {
                ye();
              },
              cssVars: r ? void 0 : De,
              themeClass: null == Ke ? void 0 : Ke.themeClass,
              onRender: null == Ke ? void 0 : Ke.onRender,
            });
          },
          render() {
            var e;
            const { fNodes: n, internalRenderEmpty: t } = this;
            if (!n.length && t) return t();
            const {
                mergedClsPrefix: o,
                blockNode: r,
                blockLine: l,
                draggable: i,
                disabled: a,
                internalFocusable: s,
                checkable: d,
                handleKeydown: c,
                rtlEnabled: u,
                handleFocusout: h,
                scrollbarProps: f,
              } = this,
              p = s && !a,
              g = p ? "0" : void 0,
              m = [
                `${o}-tree`,
                u && `${o}-tree--rtl`,
                d && `${o}-tree--checkable`,
                (l || r) && `${o}-tree--block-node`,
                l && `${o}-tree--block-line`,
              ],
              y = (e) =>
                "__motion" in e
                  ? b(rt, {
                      height: e.height,
                      nodes: e.nodes,
                      clsPrefix: o,
                      mode: e.mode,
                      onAfterEnter: this.handleAfterEnter,
                    })
                  : b(ot, { key: e.key, tmNode: e, clsPrefix: o });
            if (this.virtualScroll) {
              const { mergedTheme: e, internalScrollablePadding: t } = this,
                r = fe(t || "0");
              return b(
                pe,
                Object.assign({}, f, {
                  ref: "scrollbarInstRef",
                  onDragleave: i ? this.handleDragLeaveTree : void 0,
                  container: this.getScrollContainer,
                  content: this.getScrollContent,
                  class: m,
                  theme: e.peers.Scrollbar,
                  themeOverrides: e.peerOverrides.Scrollbar,
                  tabindex: g,
                  onKeydown: p ? c : void 0,
                  onFocusout: p ? h : void 0,
                }),
                {
                  default: () => {
                    var t;
                    return (
                      null === (t = this.onRender) ||
                        void 0 === t ||
                        t.call(this),
                      n.length
                        ? b(
                            qe,
                            {
                              ref: "virtualListInstRef",
                              items: this.fNodes,
                              itemSize: v(e.self.nodeHeight),
                              ignoreItemResize: this.aip,
                              paddingTop: r.top,
                              paddingBottom: r.bottom,
                              class: this.themeClass,
                              style: [
                                this.cssVars,
                                { paddingLeft: r.left, paddingRight: r.right },
                              ],
                              onScroll: this.handleScroll,
                              onResize: this.handleResize,
                              showScrollbar: !1,
                              itemResizable: !0,
                            },
                            { default: ({ item: e }) => y(e) },
                          )
                        : ve(this.$slots.empty, () => [
                            b(Sn, {
                              class: `${o}-tree__empty`,
                              theme: this.mergedTheme.peers.Empty,
                              themeOverrides:
                                this.mergedTheme.peerOverrides.Empty,
                            }),
                          ])
                    );
                  },
                },
              );
            }
            const { internalScrollable: k } = this;
            return (
              m.push(this.themeClass),
              null === (e = this.onRender) || void 0 === e || e.call(this),
              k
                ? b(
                    pe,
                    Object.assign({}, f, {
                      class: m,
                      tabindex: g,
                      onKeydown: p ? c : void 0,
                      onFocusout: p ? h : void 0,
                      style: this.cssVars,
                      contentStyle: { padding: this.internalScrollablePadding },
                    }),
                    {
                      default: () =>
                        b(
                          "div",
                          {
                            onDragleave: i ? this.handleDragLeaveTree : void 0,
                            ref: "selfElRef",
                          },
                          this.fNodes.map(y),
                        ),
                    },
                  )
                : b(
                    "div",
                    {
                      class: m,
                      tabindex: g,
                      ref: "selfElRef",
                      style: this.cssVars,
                      onKeydown: p ? c : void 0,
                      onFocusout: p ? h : void 0,
                      onDragleave: i ? this.handleDragLeaveTree : void 0,
                    },
                    n.length
                      ? n.map(y)
                      : ve(this.$slots.empty, () => [
                          b(Sn, {
                            class: `${o}-tree__empty`,
                            theme: this.mergedTheme.peers.Empty,
                            themeOverrides:
                              this.mergedTheme.peerOverrides.Empty,
                          }),
                        ]),
                  )
            );
          },
        }),
        ht = { class: "avatar flex" },
        ft = { class: "flex-1 flex items-center" },
        vt = { class: "text-20px font-bold p-x-24px" },
        pt = Ce(
          i({
            __name: "avatar",
            setup(e) {
              const n = t(be.html.title);
              return (e, t) => (
                ge(),
                me("div", ht, [
                  t[0] ||
                    (t[0] = ye(
                      "div",
                      {
                        class:
                          "bg-$navbar-color p-t-10px p-b-15px w-$navbar-width flex justify-center items-center",
                      },
                      [
                        ye(
                          "div",
                          {
                            class:
                              "w-46px of-hidden flex justify-center items-center",
                          },
                          [
                            ye("img", {
                              src: "./images/nav-icon1.png",
                              alt: "",
                              class: "w-100% h-100%",
                            }),
                          ],
                        ),
                      ],
                      -1,
                    )),
                  ye("div", ft, [ye("div", vt, ke(xe(n)), 1)]),
                ])
              );
            },
          }),
          [["__scopeId", "data-v-848c8d63"]],
        ),
        bt = i({
          inheritAttrs: !1,
          props: {
            name: { type: String },
            iconProps: { type: Object, default: () => ({}) },
            notFill: { type: Boolean, default: !1 },
          },
          setup:
            ({ name: e, iconProps: t, notFill: o }, { attrs: r }) =>
            () =>
              b(
                Se,
                b(
                  i({
                    async setup() {
                      try {
                        const l = (
                          await ((e, n, t) => {
                            const o = e[n];
                            return o
                              ? "function" == typeof o
                                ? o()
                                : Promise.resolve(o)
                              : new Promise((e, o) => {
                                  ("function" == typeof queueMicrotask
                                    ? queueMicrotask
                                    : setTimeout)(
                                    o.bind(
                                      null,
                                      new Error(
                                        "Unknown variable dynamic import: " +
                                          n +
                                          (n.split("/").length !== t
                                            ? ". Note that variables only represent file names one level deep."
                                            : ""),
                                      ),
                                    ),
                                  );
                                });
                          })(
                            Object.assign({
                              "../assets/icons/add.svg": () =>
                                we(
                                  () => n.import("./add-legacy-Cg4xKlbs.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/aixin.svg": () =>
                                we(
                                  () => n.import("./aixin-legacy-BF4Necki.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/dc.svg": () =>
                                we(
                                  () => n.import("./dc-legacy-D68UafQH.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/diannao.svg": () =>
                                we(
                                  () =>
                                    n.import("./diannao-legacy-CI3jYhs8.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/gwb.svg": () =>
                                we(
                                  () => n.import("./gwb-legacy-CceLxjFQ.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/home.svg": () =>
                                we(
                                  () => n.import("./home-legacy-gde-StgM.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/kehu.svg": () =>
                                we(
                                  () => n.import("./kehu-legacy-DsKcC30Z.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/khgl.svg": () =>
                                we(
                                  () => n.import("./khgl-legacy-CUPQFTOm.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/pinyin1.svg": () =>
                                we(
                                  () =>
                                    n.import("./pinyin1-legacy-CSsrmfgb.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/qianyue.svg": () =>
                                we(
                                  () =>
                                    n.import("./qianyue-legacy-CTGwDFUD.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/search.svg": () =>
                                we(
                                  () => n.import("./search-legacy-xkFnR0Ke.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/upload.svg": () =>
                                we(
                                  () => n.import("./upload-legacy-D6cNyb3T.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                              "../assets/icons/xiala.svg": () =>
                                we(
                                  () => n.import("./xiala-legacy-UycM1wV6.js"),
                                  void 0,
                                  n.meta.url,
                                ),
                            }),
                            `../assets/icons/${e}.svg`,
                            4,
                          )
                        ).default;
                        return () =>
                          b(Kn, {
                            innerHTML: l,
                            ...r,
                            ...t,
                            class: {
                              flex: !0,
                              "justify-center": !0,
                              "items-center": !0,
                              "svg-icon-fill": !o,
                              ...("string" == typeof r.class
                                ? { [r.class]: !0 }
                                : r.class),
                            },
                          });
                      } catch (l) {
                        return () => {};
                      }
                    },
                  }),
                ),
              ),
        }),
        gt = { class: "navbar flex w-100% h-100% flex-col of-hidden" },
        mt = { class: "flex flex-1 w-100% of-hidden" },
        yt = { class: "bg-$navbar-color h-100% of-x-hidden hide-scrollbar" },
        kt = ["onClick"],
        xt = ["src"],
        Ct = {
          key: 0,
          class: "flex-1 h-100% of-x-hidden hide-scrollbar p-x-15px",
        },
        wt = Ce(
          i({
            __name: "navbar",
            setup(e) {
              const n = Re(),
                r = Ne(),
                l = t([]),
                i = o(() =>
                  Le.flat.objectDeep(
                    n.options.routes,
                    (e) => e.filePath || e.fileName,
                  ),
                ),
                a = (e) => {
                  const n = i.value[e.filename] || i.value[e.filePath] || {};
                  return {
                    ...e,
                    url: e.url || "/" + n?.key?.replace?.(/\.[^.]+$/g, ""),
                    redirect: e.redirect || n?.redirect,
                  };
                },
                s = o(() => $store.nav.munes.map(a)),
                d = o(() => s.value[$store.nav.menusActive] || {}),
                u = o(() =>
                  Le.flat.objectDeep(
                    d.value?.children || [],
                    null,
                    null,
                    !1,
                    !0,
                    (e) => a(e),
                  ),
                );
              ce(() => {
                $store.nav.setMenusActiveInfo(d.value);
              });
              const h = (e) => {
                  $store.nav.setMenusActive(e),
                    (l.value = []),
                    he(() => {
                      0 === u.value.length &&
                        (d.value.redirect || d.value.url) &&
                        n.push(d.value.redirect || d.value.url);
                    });
                },
                f = (e) => !/^(http|\/{2})|\.(png|jpg|jpeg|gif|bmp)$/.test(e),
                v = ({ option: e }) =>
                  b(
                    "div",
                    {
                      class: "navbarTreeItem",
                      onClick() {
                        n.push(e.url);
                      },
                    },
                    [
                      f(e.icon)
                        ? b(bt, {
                            name: e.icon,
                            class: "navbarTreeItemIcon",
                            iconProps: { size: 18 },
                          })
                        : b(
                            "img",
                            { class: "navbarTreeItemIcon", src: e.icon },
                            e.title,
                          ),
                      b("span", { class: "navbarTreeItemLabel" }, e.title),
                    ],
                  );
              return (
                c(async () => {
                  const e = r.path.match(/^\/*pages\/[^/]+/)?.[0];
                  h(s.value.findIndex((n) => n.url?.indexOf?.(e) > -1));
                  const n = r.path.match(/^\/*pages\/[^/]+\/[^/]+/)?.[0],
                    t = u.value.find((e) => e.url?.indexOf?.(n) > -1);
                  t && t.url && (l.value = [t.url]);
                }),
                (e, n) => {
                  const t = pt,
                    o = ut;
                  return (
                    ge(),
                    me("div", gt, [
                      Te(t),
                      ye("div", mt, [
                        ye("div", yt, [
                          (ge(!0),
                          me(
                            ze,
                            null,
                            Ie(
                              xe(s),
                              (n, t) => (
                                ge(),
                                me(
                                  "div",
                                  {
                                    key: t,
                                    class: Pe([
                                      {
                                        active: e.$store.nav.menusActive === t,
                                      },
                                      "navbarItem w-$navbar-width h-42px text-$white p-y-15px flex flex-col justify-center items-center",
                                    ]),
                                    onClick: (e) => h(t),
                                  },
                                  [
                                    f(n.icon)
                                      ? (ge(),
                                        De(
                                          xe(bt),
                                          {
                                            key: 0,
                                            "icon-props": { size: 28 },
                                            name: n.icon,
                                            class: "w-28px h-28px m-b--4px",
                                          },
                                          null,
                                          8,
                                          ["name"],
                                        ))
                                      : (ge(),
                                        me(
                                          "img",
                                          {
                                            key: 1,
                                            src: n.icon,
                                            alt: "",
                                            class: "w-22px h-22px m-b-4px",
                                          },
                                          null,
                                          8,
                                          xt,
                                        )),
                                    ye("div", null, ke(n.title), 1),
                                  ],
                                  10,
                                  kt,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        xe(u) && xe(u).length > 0
                          ? (ge(),
                            me("div", Ct, [
                              Te(
                                o,
                                {
                                  data: xe(u),
                                  "render-label": v,
                                  class: "w-100% n-tree",
                                  "label-field": "title",
                                  "default-selected-keys": xe(l),
                                  "key-field": "url",
                                },
                                null,
                                8,
                                ["data", "default-selected-keys"],
                              ),
                            ]))
                          : Ke("", !0),
                      ]),
                    ])
                  );
                }
              );
            },
          }),
          [["__scopeId", "data-v-c44ff8c8"]],
        ),
        St = { class: "layout w-100% h-100% fixed" };
      e(
        "default",
        Ce({}, [
          [
            "render",
            function (e, n) {
              const t = wt,
                o = qn,
                r = Ae("router-view"),
                l = Mn,
                i = _n;
              return (
                ge(),
                me("div", St, [
                  Te(
                    i,
                    { class: "w-100% h-100%", "has-sider": "" },
                    {
                      default: Be(() => [
                        Te(
                          o,
                          {
                            style: {
                              "--n-color": "var(--navbar-background-color)",
                            },
                            class: "h-100% n-layout-sider",
                          },
                          { default: Be(() => [Te(t)]), _: 1 },
                        ),
                        Te(
                          l,
                          {
                            style: { "--n-color": "var(--backgroundColor)" },
                            "content-style": "padding: 15px;",
                          },
                          { default: Be(() => [Te(r)]), _: 1 },
                        ),
                      ]),
                      _: 1,
                    },
                  ),
                ])
              );
            },
          ],
          ["__scopeId", "data-v-16b3f60e"],
        ]),
      );
    },
  };
});
