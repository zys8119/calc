System.register(
  ["./index-legacy-Q8n2PSZu.js", "./svg-icon-legacy-COxKwbqo.js"],
  function (e, n) {
    "use strict";
    var t,
      o,
      r,
      l,
      a,
      i,
      d,
      s,
      c,
      u,
      f,
      h,
      v,
      b,
      p,
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
      K,
      D,
      B,
      A,
      E,
      F,
      $,
      O,
      j,
      _,
      M,
      U,
      H,
      W,
      V,
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
      ae,
      ie,
      de,
      se,
      ce,
      ue,
      fe,
      he,
      ve,
      be,
      pe,
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
      Ke;
    return {
      setters: [
        (e) => {
          (t = e.r),
            (o = e.f),
            (r = e.H),
            (l = e.J),
            (a = e.d),
            (i = e.K),
            (d = e.L),
            (s = e.M),
            (c = e.g),
            (u = e.O),
            (f = e.P),
            (h = e.Q),
            (v = e.R),
            (b = e.T),
            (p = e.s),
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
            (K = e.N),
            (D = e.a3),
            (B = e.a4),
            (A = e.a5),
            (E = e.a6),
            (F = e.a7),
            ($ = e.a8),
            (O = e.a9),
            (j = e.aa),
            (_ = e.ab),
            (M = e.ac),
            (U = e.ad),
            (H = e.ae),
            (W = e.af),
            (V = e.ag),
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
            (ae = e.au),
            (ie = e.av),
            (de = e.aw),
            (se = e.ax),
            (ce = e.ay),
            (ue = e.az),
            (fe = e.aA),
            (he = e.aB),
            (ve = e.aC),
            (be = e.o),
            (pe = e.h),
            (ge = e.e),
            (me = e.t),
            (ye = e.i),
            (ke = e._),
            (xe = e.u),
            (Ce = e.p),
            (we = e.aD),
            (Se = e.a),
            (Re = e.F),
            (Ne = e.j),
            (Le = e.q),
            (Te = e.c),
            (ze = e.n),
            (Ie = e.w),
            (Pe = e.aE);
        },
        (e) => {
          Ke = e._;
        },
      ],
      execute: function () {
        var n = document.createElement("style");
        function De(e, n) {
          let { target: t } = e;
          for (; t; ) {
            if (t.dataset && void 0 !== t.dataset[n]) return !0;
            t = t.parentElement;
          }
          return !1;
        }
        function Be(e) {
          return "string" == typeof e ? `s-${e}` : `n-${e}`;
        }
        function Ae(e) {
          return e & -e;
        }
        (n.textContent =
          ".navbar .navbarItem[data-v-c44ff8c8]{cursor:pointer;user-select:none}.navbar .navbarItem.active[data-v-c44ff8c8]{background-color:var(--navbar-color-active)}.navbar .navbarItem[data-v-c44ff8c8]:hover{background-color:var(--navbar-color-hover)}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node-content{flex:1}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node-switcher--hide{display:none}.navbar[data-v-c44ff8c8] .n-tree .navbarTreeItem{height:42px;display:flex;align-items:center;padding:0 23px;border-radius:8px;color:#666}.navbar[data-v-c44ff8c8] .n-tree .navbarTreeItem .navbarTreeItemIcon{margin-right:15px;width:18px;filter:invert(.1);display:flex;justify-content:center;align-items:center}.navbar[data-v-c44ff8c8] .n-tree .navbarTreeItem .navbarTreeItemLabel{flex:1}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node--selected .n-tree-node-content{background-color:transparent!important}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node--selected .navbarTreeItem{background-color:var(--primaryColor);color:#fff}.navbar[data-v-c44ff8c8] .n-tree .n-tree-node--selected .navbarTreeItem .navbarTreeItemIcon{filter:invert(0)}.layout .n-layout-sider[data-v-16b3f60e]{width:var(--aside-width)!important;max-width:var(--aside-width)!important}\n"),
          document.head.appendChild(n);
        class Ee {
          constructor(e, n) {
            (this.l = e), (this.min = n);
            const t = new Array(e + 1);
            for (let o = 0; o < e + 1; ++o) t[o] = 0;
            this.ft = t;
          }
          add(e, n) {
            if (0 === n) return;
            const { l: t, ft: o } = this;
            for (e += 1; e <= t; ) (o[e] += n), (e += Ae(e));
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
            for (; e > 0; ) (r += n[e]), (e -= Ae(e));
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
        let Fe, $e;
        function Oe() {
          return "undefined" == typeof document
            ? 1
            : (void 0 === $e &&
                ($e = "chrome" in window ? window.devicePixelRatio : 1),
              $e);
        }
        const je = "VVirtualListXScroll",
          _e = a({
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
              } = i(je);
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
                item: a,
              } = this;
              if (null != r)
                return r({
                  itemIndex: this.index,
                  startColIndex: e,
                  endColIndex: n,
                  allColumns: t,
                  item: a,
                  getLeft: l,
                });
              if (null != o) {
                const r = [];
                for (let i = e; i <= n; ++i) {
                  const e = t[i];
                  r.push(o({ column: e, left: l(i), item: a }));
                }
                return r;
              }
              return null;
            },
          }),
          Me = y(
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
          Ue = a({
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
              const n = d();
              Me.mount({
                id: "vueuc/virtual-list",
                head: !0,
                anchorMetaName: s,
                ssr: n,
              }),
                c(() => {
                  const { defaultScrollIndex: n, defaultScrollKey: t } = e;
                  null != n ? z({ index: n }) : null != t && z({ key: t });
                });
              let a = !1,
                i = !1;
              u(() => {
                (a = !1), i ? z({ top: N.value, left: m.value }) : (i = !0);
              }),
                f(() => {
                  (a = !0), i || (i = !0);
                });
              const p = r(() => {
                  if (null == e.renderCol && null == e.renderItemWithCols)
                    return;
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
                  renderItemWithColsRef: a,
                }) {
                  const i = t(0),
                    d = t(0),
                    s = o(() => {
                      const n = e.value;
                      if (0 === n.length) return null;
                      const t = new Ee(n.length, 0);
                      return (
                        n.forEach((e, n) => {
                          t.add(n, e.width);
                        }),
                        t
                      );
                    }),
                    c = r(() => {
                      const e = s.value;
                      return null !== e
                        ? Math.max(e.getBound(d.value) - 1, 0)
                        : 0;
                    }),
                    u = r(() => {
                      const n = s.value;
                      return null !== n
                        ? Math.min(
                            n.getBound(d.value + i.value) + 1,
                            e.value.length - 1,
                          )
                        : 0;
                    });
                  return (
                    l(je, {
                      startIndexRef: c,
                      endIndexRef: u,
                      columnsRef: e,
                      renderColRef: n,
                      renderItemWithColsRef: a,
                      getLeft: (e) => {
                        const n = s.value;
                        return null !== n ? n.sum(e) : 0;
                      },
                    }),
                    { listWidthRef: i, scrollLeftRef: d }
                  );
                })({
                  columnsRef: h(e, "columns"),
                  renderColRef: h(e, "renderCol"),
                  renderItemWithColsRef: h(e, "renderItemWithCols"),
                }),
                x = t(null),
                C = t(void 0),
                w = new Map(),
                S = o(() => {
                  const { items: n, itemSize: t, keyField: o } = e,
                    r = new Ee(n.length, t);
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
                    a = [];
                  for (let e = r; e <= l; ++e) a.push(t[e]);
                  return a;
                }),
                z = (e, n) => {
                  if ("number" == typeof e) return void D(e, n, "auto");
                  const {
                    left: t,
                    top: o,
                    index: r,
                    key: l,
                    position: a,
                    behavior: i,
                    debounce: d = !0,
                  } = e;
                  if (void 0 !== t || void 0 !== o) D(t, o, i);
                  else if (void 0 !== r) K(r, i, d);
                  else if (void 0 !== l) {
                    const e = g.value.get(l);
                    void 0 !== e && K(e, i, d);
                  } else
                    "bottom" === a
                      ? D(0, Number.MAX_SAFE_INTEGER, i)
                      : "top" === a && D(0, 0, i);
                };
              let I,
                P = null;
              function K(n, t, o) {
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
                    const a = r.get(n);
                    l + a <= e + o ||
                      x.value.scrollTo({
                        left: 0,
                        top: l + a - o,
                        behavior: t,
                      });
                  } else x.value.scrollTo({ left: 0, top: l, behavior: t });
                } else x.value.scrollTo({ left: 0, top: l, behavior: t });
              }
              function D(e, n, t) {
                x.value.scrollTo({ left: e, top: n, behavior: t });
              }
              const B = !(
                "undefined" != typeof document &&
                (void 0 === Fe &&
                  (Fe =
                    "matchMedia" in window &&
                    window.matchMedia("(pointer:coarse)").matches),
                Fe)
              );
              let A = !1;
              function E() {
                const { value: e } = x;
                null != e &&
                  ((N.value = e.scrollTop), (m.value = e.scrollLeft));
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
                    t = b(S.value.sum());
                  return (
                    R.value,
                    [
                      e.itemsStyle,
                      {
                        boxSizing: "content-box",
                        width: b(p.value),
                        height: n ? "" : t,
                        minHeight: n ? t : "",
                        paddingTop: b(e.paddingTop),
                        paddingBottom: b(e.paddingBottom),
                      },
                    ]
                  );
                }),
                visibleItemsStyle: o(
                  () => (
                    R.value,
                    { transform: `translateY(${b(S.value.sum(L.value))})` }
                  ),
                ),
                viewportItems: T,
                listElRef: x,
                itemsElRef: t(null),
                scrollTo: z,
                handleListResize: function (n) {
                  if (a) return;
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
                    (B && A) || E();
                },
                handleListWheel: function (n) {
                  var t;
                  if (
                    (null === (t = e.onWheel) || void 0 === t || t.call(e, n),
                    B)
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
                        (e.scrollTop += n.deltaY / Oe()),
                        (e.scrollLeft += n.deltaX / Oe()),
                        E(),
                        (A = !0),
                        k(() => {
                          A = !1;
                        });
                    }
                  }
                },
                handleItemResize: function (n, t) {
                  var o, r, l;
                  if (a) return;
                  if (e.ignoreItemResize) return;
                  if (F(t.target)) return;
                  const { value: i } = S,
                    d = g.value.get(n),
                    s = i.get(d),
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
                  if (c === s) return;
                  0 == c - e.itemSize ? w.delete(n) : w.set(n, c - e.itemSize);
                  const u = c - s;
                  if (0 === u) return;
                  i.add(d, u);
                  const f = x.value;
                  if (null != f) {
                    if (void 0 === I) {
                      const e = i.sum(d);
                      f.scrollTop > e && f.scrollBy(0, u);
                    } else
                      (d < I ||
                        (d === I &&
                          c + i.sum(d) > f.scrollTop + f.offsetHeight)) &&
                        f.scrollBy(0, u);
                    E();
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
              return p(
                m,
                { onResize: this.handleListResize },
                {
                  default: () => {
                    var r, l;
                    return p(
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
                          ? p(
                              "div",
                              {
                                ref: "itemsElRef",
                                class: "v-vl-items",
                                style: this.itemsStyle,
                              },
                              [
                                p(
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
                                        const a = l[n],
                                          i = t.get(a),
                                          d =
                                            null != o
                                              ? p(_e, { index: i, item: l })
                                              : void 0,
                                          s =
                                            null != r
                                              ? p(_e, { index: i, item: l })
                                              : void 0,
                                          c = this.$slots.default({
                                            item: l,
                                            renderedCols: d,
                                            renderedItemWithCols: s,
                                            index: i,
                                          })[0];
                                        return e
                                          ? p(
                                              m,
                                              {
                                                key: a,
                                                onResize: (e) =>
                                                  this.handleItemResize(a, e),
                                              },
                                              { default: () => c },
                                            )
                                          : ((c.key = a), c);
                                      });
                                    },
                                  },
                                ),
                              ],
                            )
                          : null === (l = (r = this.$slots).empty) ||
                              void 0 === l
                            ? void 0
                            : l.call(r),
                      ],
                    );
                  },
                },
              );
            },
          }),
          He = a({
            name: "ChevronRight",
            render: () =>
              p(
                "svg",
                {
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                p("path", {
                  d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
                  fill: "currentColor",
                }),
              ),
          }),
          We = a({
            name: "Empty",
            render: () =>
              p(
                "svg",
                {
                  viewBox: "0 0 28 28",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                p("path", {
                  d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
                  fill: "currentColor",
                }),
                p("path", {
                  d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
                  fill: "currentColor",
                }),
              ),
          }),
          Ve = a({
            name: "Switcher",
            render: () =>
              p(
                "svg",
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
                p("path", { d: "M12 8l10 8l-10 8z" }),
              ),
          });
        function qe(e) {
          return Array.isArray(e) ? e : [e];
        }
        const Ge = "STOP";
        function Ye(e, n) {
          const t = n(e);
          void 0 !== e.children &&
            t !== Ge &&
            e.children.forEach((e) => Ye(e, n));
        }
        function Xe(e) {
          return e.children;
        }
        function Ze(e) {
          return e.key;
        }
        function Qe() {
          return !1;
        }
        function Je(e) {
          return !0 === e.disabled;
        }
        function en(e) {
          var n;
          return null == e
            ? []
            : Array.isArray(e)
              ? e
              : null !== (n = e.checkedKeys) && void 0 !== n
                ? n
                : [];
        }
        function nn(e) {
          var n;
          return null == e || Array.isArray(e)
            ? []
            : null !== (n = e.indeterminateKeys) && void 0 !== n
              ? n
              : [];
        }
        function tn(e, n) {
          const t = new Set(e);
          return (
            n.forEach((e) => {
              t.has(e) || t.add(e);
            }),
            Array.from(t)
          );
        }
        function on(e, n) {
          const t = new Set(e);
          return (
            n.forEach((e) => {
              t.has(e) && t.delete(e);
            }),
            Array.from(t)
          );
        }
        function rn(e) {
          return "group" === (null == e ? void 0 : e.type);
        }
        class ln extends Error {
          constructor() {
            super(),
              (this.message =
                "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.");
          }
        }
        function an(e, n, t, o) {
          const r = sn(n, t, o, !1),
            l = sn(e, t, o, !0),
            a = (function (e, n) {
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
            i = [];
          return (
            r.forEach((e) => {
              (l.has(e) || a.has(e)) && i.push(e);
            }),
            i.forEach((e) => r.delete(e)),
            r
          );
        }
        function dn(e, n) {
          const {
            checkedKeys: t,
            keysToCheck: o,
            keysToUncheck: r,
            indeterminateKeys: l,
            cascade: a,
            leafOnly: i,
            checkStrategy: d,
            allowNotLoaded: s,
          } = e;
          if (!a)
            return void 0 !== o
              ? { checkedKeys: tn(t, o), indeterminateKeys: Array.from(l) }
              : void 0 !== r
                ? { checkedKeys: on(t, r), indeterminateKeys: Array.from(l) }
                : {
                    checkedKeys: Array.from(t),
                    indeterminateKeys: Array.from(l),
                  };
          const { levelTreeNodeMap: c } = n;
          let u;
          u =
            void 0 !== r
              ? an(r, t, n, s)
              : void 0 !== o
                ? (function (e, n, t, o) {
                    return sn(n.concat(e), t, o, !1);
                  })(o, t, n, s)
                : sn(t, n, s, !1);
          const f = "parent" === d,
            h = "child" === d || i,
            v = u,
            b = new Set();
          for (
            let p = Math.max.apply(null, Array.from(c.keys()));
            p >= 0;
            p -= 1
          ) {
            const e = 0 === p,
              n = c.get(p);
            for (const t of n) {
              if (t.isLeaf) continue;
              const { key: n, shallowLoaded: o } = t;
              if (
                (h &&
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
                a = !0;
              for (const e of t.children) {
                const n = e.key;
                if (!e.disabled)
                  if ((a && (a = !1), v.has(n))) l = !0;
                  else {
                    if (b.has(n)) {
                      (l = !0), (r = !1);
                      break;
                    }
                    if (((r = !1), l)) break;
                  }
              }
              r && !a
                ? (f &&
                    t.children.forEach((e) => {
                      !e.disabled && v.has(e.key) && v.delete(e.key);
                    }),
                  v.add(n))
                : l && b.add(n),
                e && h && v.has(n) && v.delete(n);
            }
          }
          return {
            checkedKeys: Array.from(v),
            indeterminateKeys: Array.from(b),
          };
        }
        function sn(e, n, t, o) {
          const { treeNodeMap: r, getChildren: l } = n,
            a = new Set(),
            i = new Set(e);
          return (
            e.forEach((e) => {
              const n = r.get(e);
              void 0 !== n &&
                Ye(n, (e) => {
                  if (e.disabled) return Ge;
                  const { key: n } = e;
                  if (
                    !a.has(n) &&
                    (a.add(n),
                    i.add(n),
                    (function (e, n) {
                      return !1 === e.isLeaf && !Array.isArray(n(e));
                    })(e.rawNode, l))
                  ) {
                    if (o) return Ge;
                    if (!t) throw new ln();
                  }
                });
            }),
            i
          );
        }
        function cn(e, n) {
          const t = e.siblings,
            o = t.length,
            { index: r } = e;
          return n ? t[(r + 1) % o] : r === t.length - 1 ? null : t[r + 1];
        }
        function un(e, n, { loop: t = !1, includeDisabled: o = !1 } = {}) {
          const r = "prev" === n ? fn : cn,
            l = { reverse: "prev" === n };
          let a = !1,
            i = null;
          return (
            (function n(d) {
              if (null !== d) {
                if (d === e)
                  if (a) {
                    if (!e.disabled && !e.isGroup) return void (i = e);
                  } else a = !0;
                else if ((!d.disabled || o) && !d.ignored && !d.isGroup)
                  return void (i = d);
                if (d.isGroup) {
                  const e = hn(d, l);
                  null !== e ? (i = e) : n(r(d, t));
                } else {
                  const e = r(d, !1);
                  if (null !== e) n(e);
                  else {
                    const e = (function (e) {
                      return e.parent;
                    })(d);
                    (null == e ? void 0 : e.isGroup)
                      ? n(r(e, t))
                      : t && n(r(d, !0));
                  }
                }
              }
            })(e),
            i
          );
        }
        function fn(e, n) {
          const t = e.siblings,
            o = t.length,
            { index: r } = e;
          return n ? t[(r - 1 + o) % o] : 0 === r ? null : t[r - 1];
        }
        function hn(e, n = {}) {
          const { reverse: t = !1 } = n,
            { children: o } = e;
          if (o) {
            const { length: e } = o,
              r = t ? -1 : e,
              l = t ? -1 : 1;
            for (let a = t ? e - 1 : 0; a !== r; a += l) {
              const e = o[a];
              if (!e.disabled && !e.ignored) {
                if (!e.isGroup) return e;
                {
                  const t = hn(e, n);
                  if (null !== t) return t;
                }
              }
            }
          }
          return null;
        }
        const vn = {
          getChild() {
            return this.ignored ? null : hn(this);
          },
          getParent() {
            const { parent: e } = this;
            return (null == e ? void 0 : e.isGroup) ? e.getParent() : e;
          },
          getNext(e = {}) {
            return un(this, "next", e);
          },
          getPrev(e = {}) {
            return un(this, "prev", e);
          },
        };
        function bn(e, n) {
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
        function pn(e, n, t, o, r, l = null, a = 0) {
          const i = [];
          return (
            e.forEach((d, s) => {
              var c;
              const u = Object.create(o);
              if (
                ((u.rawNode = d),
                (u.siblings = i),
                (u.level = a),
                (u.index = s),
                (u.isFirstChild = 0 === s),
                (u.isLastChild = s + 1 === e.length),
                (u.parent = l),
                !u.ignored)
              ) {
                const e = r(d);
                Array.isArray(e) && (u.children = pn(e, n, t, o, r, u, a + 1));
              }
              i.push(u),
                n.set(u.key, u),
                t.has(a) || t.set(a, []),
                null === (c = t.get(a)) || void 0 === c || c.push(u);
            }),
            i
          );
        }
        function gn(e, n = {}) {
          var t;
          const o = new Map(),
            r = new Map(),
            {
              getDisabled: l = Je,
              getIgnored: a = Qe,
              getIsGroup: i = rn,
              getKey: d = Ze,
            } = n,
            s = null !== (t = n.getChildren) && void 0 !== t ? t : Xe,
            c = n.ignoreEmptyChildren
              ? (e) => {
                  const n = s(e);
                  return Array.isArray(n) ? (n.length ? n : null) : n;
                }
              : s,
            u = Object.assign(
              {
                get key() {
                  return d(this.rawNode);
                },
                get disabled() {
                  return l(this.rawNode);
                },
                get isGroup() {
                  return i(this.rawNode);
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
                  return a(this.rawNode);
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
              vn,
            ),
            f = pn(e, o, r, u, c);
          function h(e) {
            if (null == e) return null;
            const n = o.get(e);
            return n && !n.ignored ? n : null;
          }
          const v = {
            treeNodes: f,
            treeNodeMap: o,
            levelTreeNodeMap: r,
            maxLevel: Math.max(...r.keys()),
            getChildren: c,
            getFlattenedNodes: (e) => bn(f, e),
            getNode: function (e) {
              if (null == e) return null;
              const n = o.get(e);
              return !n || n.isGroup || n.ignored ? null : n;
            },
            getPrev: function (e, n) {
              const t = h(e);
              return t ? t.getPrev(n) : null;
            },
            getNext: function (e, n) {
              const t = h(e);
              return t ? t.getNext(n) : null;
            },
            getParent: function (e) {
              const n = h(e);
              return n ? n.getParent() : null;
            },
            getChild: function (e) {
              const n = h(e);
              return n ? n.getChild() : null;
            },
            getFirstAvailableNode: () =>
              (function (e) {
                if (0 === e.length) return null;
                const n = e[0];
                return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
              })(f),
            getPath: (e, n = {}) =>
              (function (e, { includeGroup: n = !1, includeSelf: t = !0 }, o) {
                var r;
                const l = o.treeNodeMap;
                let a =
                  null == e
                    ? null
                    : null !== (r = l.get(e)) && void 0 !== r
                      ? r
                      : null;
                const i = { keyPath: [], treeNodePath: [], treeNode: a };
                if (null == a ? void 0 : a.ignored)
                  return (i.treeNode = null), i;
                for (; a; )
                  a.ignored || (!n && a.isGroup) || i.treeNodePath.push(a),
                    (a = a.parent);
                return (
                  i.treeNodePath.reverse(),
                  t || i.treeNodePath.pop(),
                  (i.keyPath = i.treeNodePath.map((e) => e.key)),
                  i
                );
              })(e, n, v),
            getCheckedKeys(e, n = {}) {
              const {
                cascade: t = !0,
                leafOnly: o = !1,
                checkStrategy: r = "all",
                allowNotLoaded: l = !1,
              } = n;
              return dn(
                {
                  checkedKeys: en(e),
                  indeterminateKeys: nn(e),
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
                allowNotLoaded: a = !1,
              } = t;
              return dn(
                {
                  checkedKeys: en(n),
                  indeterminateKeys: nn(n),
                  keysToCheck: null == e ? [] : qe(e),
                  cascade: o,
                  leafOnly: r,
                  checkStrategy: l,
                  allowNotLoaded: a,
                },
                v,
              );
            },
            uncheck(e, n, t = {}) {
              const {
                cascade: o = !0,
                leafOnly: r = !1,
                checkStrategy: l = "all",
                allowNotLoaded: a = !1,
              } = t;
              return dn(
                {
                  checkedKeys: en(n),
                  indeterminateKeys: nn(n),
                  keysToUncheck: null == e ? [] : qe(e),
                  cascade: o,
                  leafOnly: r,
                  checkStrategy: l,
                  allowNotLoaded: a,
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
              })(f, e),
          };
          return v;
        }
        const mn = S(
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
          yn = Object.assign(Object.assign({}, T.props), {
            description: String,
            showDescription: { type: Boolean, default: !0 },
            showIcon: { type: Boolean, default: !0 },
            size: { type: String, default: "medium" },
            renderIcon: Function,
          }),
          kn = a({
            name: "Empty",
            props: yn,
            setup(e) {
              const {
                  mergedClsPrefixRef: n,
                  inlineThemeDisabled: t,
                  mergedComponentPropsRef: r,
                } = L(e),
                l = T("Empty", "-empty", mn, z, e, n),
                { localeRef: a } = (function (e) {
                  const { mergedLocaleRef: n, mergedDateLocaleRef: t } =
                      i(x, null) || {},
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
                d = o(() => {
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
                s = o(() => {
                  var e, n;
                  return (
                    (null ===
                      (n =
                        null === (e = null == r ? void 0 : r.value) ||
                        void 0 === e
                          ? void 0
                          : e.Empty) || void 0 === n
                      ? void 0
                      : n.renderIcon) || (() => p(We, null))
                  );
                }),
                c = o(() => {
                  const { size: n } = e,
                    {
                      common: { cubicBezierEaseInOut: t },
                      self: {
                        [I("iconSize", n)]: o,
                        [I("fontSize", n)]: r,
                        textColor: a,
                        iconColor: i,
                        extraTextColor: d,
                      },
                    } = l.value;
                  return {
                    "--n-icon-size": o,
                    "--n-font-size": r,
                    "--n-bezier": t,
                    "--n-text-color": a,
                    "--n-icon-color": i,
                    "--n-extra-text-color": d,
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
                mergedRenderIcon: s,
                localizedDescription: o(() => d.value || a.value.description),
                cssVars: t ? void 0 : c,
                themeClass: null == u ? void 0 : u.themeClass,
                onRender: null == u ? void 0 : u.onRender,
              };
            },
            render() {
              const { $slots: e, mergedClsPrefix: n, onRender: t } = this;
              return (
                null == t || t(),
                p(
                  "div",
                  {
                    class: [`${n}-empty`, this.themeClass],
                    style: this.cssVars,
                  },
                  this.showIcon
                    ? p(
                        "div",
                        { class: `${n}-empty__icon` },
                        e.icon
                          ? e.icon()
                          : p(
                              K,
                              { clsPrefix: n },
                              { default: this.mergedRenderIcon },
                            ),
                      )
                    : null,
                  this.showDescription
                    ? p(
                        "div",
                        { class: `${n}-empty__description` },
                        e.default ? e.default() : this.localizedDescription,
                      )
                    : null,
                  e.extra
                    ? p("div", { class: `${n}-empty__extra` }, e.extra())
                    : null,
                )
              );
            },
          }),
          xn = p(
            "svg",
            { viewBox: "0 0 64 64", class: "check-icon" },
            p("path", {
              d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z",
            }),
          ),
          Cn = p(
            "svg",
            { viewBox: "0 0 100 100", class: "line-icon" },
            p("path", {
              d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z",
            }),
          ),
          wn = D("n-checkbox-group"),
          Sn = N([
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
                      N(
                        ".line-icon",
                        "\n opacity: 1;\n transform: scale(1);\n ",
                      ),
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
            E(
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
          Rn = Object.assign(Object.assign({}, T.props), {
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
          Nn = a({
            name: "Checkbox",
            props: Rn,
            setup(e) {
              const n = i(wn, null),
                l = t(null),
                {
                  mergedClsPrefixRef: a,
                  inlineThemeDisabled: d,
                  mergedRtlRef: s,
                } = L(e),
                c = t(e.defaultChecked),
                u = h(e, "checked"),
                f = $(u, c),
                v = r(() => {
                  if (n) {
                    const t = n.valueSetRef.value;
                    return !(!t || void 0 === e.value) && t.has(e.value);
                  }
                  return f.value === e.checkedValue;
                }),
                b = O(e, {
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
                { mergedDisabledRef: p, mergedSizeRef: g } = b,
                m = T("Checkbox", "-checkbox", Sn, j, e, a);
              function y(t) {
                if (n && void 0 !== e.value)
                  n.toggleCheckbox(!v.value, e.value);
                else {
                  const {
                      onChange: n,
                      "onUpdate:checked": o,
                      onUpdateChecked: r,
                    } = e,
                    { nTriggerFormInput: l, nTriggerFormChange: a } = b,
                    i = v.value ? e.uncheckedValue : e.checkedValue;
                  o && V(o, i, t),
                    r && V(r, i, t),
                    n && V(n, i, t),
                    l(),
                    a(),
                    (c.value = i);
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
                x = _("Checkbox", s, a),
                C = o(() => {
                  const { value: e } = g,
                    {
                      common: { cubicBezierEaseInOut: n },
                      self: {
                        borderRadius: t,
                        color: o,
                        colorChecked: r,
                        colorDisabled: l,
                        colorTableHeader: a,
                        colorTableHeaderModal: i,
                        colorTableHeaderPopover: d,
                        checkMarkColor: s,
                        checkMarkColorDisabled: c,
                        border: u,
                        borderFocus: f,
                        borderDisabled: h,
                        borderChecked: v,
                        boxShadowFocus: b,
                        textColor: p,
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
                    "--n-border-focus": f,
                    "--n-border-disabled": h,
                    "--n-border-disabled-checked": C,
                    "--n-box-shadow-focus": b,
                    "--n-color": o,
                    "--n-color-checked": r,
                    "--n-color-table": a,
                    "--n-color-table-modal": i,
                    "--n-color-table-popover": d,
                    "--n-color-disabled": l,
                    "--n-color-disabled-checked": x,
                    "--n-text-color": p,
                    "--n-text-color-disabled": y,
                    "--n-check-mark-color": s,
                    "--n-check-mark-color-disabled": c,
                    "--n-check-mark-color-disabled-checked": k,
                    "--n-font-size": N,
                    "--n-label-padding": w,
                  };
                }),
                w = d
                  ? P(
                      "checkbox",
                      o(() => g.value[0]),
                      C,
                      e,
                    )
                  : void 0;
              return Object.assign(b, k, {
                rtlEnabled: x,
                selfRef: l,
                mergedClsPrefix: a,
                mergedDisabled: p,
                renderedChecked: v,
                mergedTheme: m,
                labelId: M(),
                handleClick: function (e) {
                  p.value || y(e);
                },
                handleKeyUp: function (e) {
                  if (!p.value)
                    switch (e.key) {
                      case " ":
                      case "Enter":
                        y(e);
                    }
                },
                handleKeyDown: function (e) {
                  " " === e.key && e.preventDefault();
                },
                cssVars: d ? void 0 : C,
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
                cssVars: a,
                labelId: i,
                label: d,
                mergedClsPrefix: s,
                focusable: c,
                handleKeyUp: u,
                handleKeyDown: f,
                handleClick: h,
              } = this;
              null === (e = this.onRender) || void 0 === e || e.call(this);
              const v = U(n.default, (e) =>
                d || e
                  ? p("span", { class: `${s}-checkbox__label`, id: i }, d || e)
                  : null,
              );
              return p(
                "div",
                {
                  ref: "selfRef",
                  class: [
                    `${s}-checkbox`,
                    this.themeClass,
                    this.rtlEnabled && `${s}-checkbox--rtl`,
                    t && `${s}-checkbox--checked`,
                    o && `${s}-checkbox--disabled`,
                    r && `${s}-checkbox--indeterminate`,
                    l && `${s}-checkbox--inside-table`,
                    v && `${s}-checkbox--show-label`,
                  ],
                  tabindex: o || !c ? void 0 : 0,
                  role: "checkbox",
                  "aria-checked": r ? "mixed" : t,
                  "aria-labelledby": i,
                  style: a,
                  onKeyup: u,
                  onKeydown: f,
                  onClick: h,
                  onMousedown: () => {
                    W(
                      "selectstart",
                      window,
                      (e) => {
                        e.preventDefault();
                      },
                      { once: !0 },
                    );
                  },
                },
                p(
                  "div",
                  { class: `${s}-checkbox-box-wrapper` },
                  " ",
                  p(
                    "div",
                    { class: `${s}-checkbox-box` },
                    p(H, null, {
                      default: () =>
                        this.indeterminate
                          ? p(
                              "div",
                              {
                                key: "indeterminate",
                                class: `${s}-checkbox-icon`,
                              },
                              Cn,
                            )
                          : p(
                              "div",
                              { key: "check", class: `${s}-checkbox-icon` },
                              xn,
                            ),
                    }),
                    p("div", { class: `${s}-checkbox-box__border` }),
                  ),
                ),
                v,
              );
            },
          }),
          Ln = q({
            name: "Layout",
            common: G,
            peers: { Scrollbar: Y },
            self: function (e) {
              const {
                baseColor: n,
                textColor2: t,
                bodyColor: o,
                cardColor: r,
                dividerColor: l,
                actionColor: a,
                scrollbarColor: i,
                scrollbarColorHover: d,
                invertedColor: s,
              } = e;
              return {
                textColor: t,
                textColorInverted: "#FFF",
                color: o,
                colorEmbedded: a,
                headerColor: r,
                headerColorInverted: s,
                footerColor: a,
                footerColorInverted: s,
                headerBorderColor: l,
                headerBorderColorInverted: s,
                footerBorderColor: l,
                footerBorderColorInverted: s,
                siderBorderColor: l,
                siderBorderColorInverted: s,
                siderColor: r,
                siderColorInverted: s,
                siderToggleButtonBorder: `1px solid ${l}`,
                siderToggleButtonColor: n,
                siderToggleButtonIconColor: t,
                siderToggleButtonIconColorInverted: t,
                siderToggleBarColor: X(o, i),
                siderToggleBarColorHover: X(o, d),
                __invertScrollbar: "true",
              };
            },
          }),
          Tn = D("n-layout-sider"),
          zn = { type: String, default: "static" },
          In = S(
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
          Pn = {
            embedded: Boolean,
            position: zn,
            nativeScrollbar: { type: Boolean, default: !0 },
            scrollbarProps: Object,
            onScroll: Function,
            contentClass: String,
            contentStyle: { type: [String, Object], default: "" },
            hasSider: Boolean,
            siderPlacement: { type: String, default: "left" },
          },
          Kn = D("n-layout");
        function Dn(e) {
          return a({
            name: e ? "LayoutContent" : "Layout",
            props: Object.assign(Object.assign({}, T.props), Pn),
            setup(e) {
              const n = t(null),
                r = t(null),
                { mergedClsPrefixRef: a, inlineThemeDisabled: i } = L(e),
                d = T("Layout", "-layout", In, Ln, e, a);
              l(Kn, e);
              let s = 0,
                c = 0;
              Z(() => {
                if (e.nativeScrollbar) {
                  const e = n.value;
                  e && ((e.scrollTop = c), (e.scrollLeft = s));
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
                f = o(() => {
                  const {
                    common: { cubicBezierEaseInOut: n },
                    self: t,
                  } = d.value;
                  return {
                    "--n-bezier": n,
                    "--n-color": e.embedded ? t.colorEmbedded : t.color,
                    "--n-text-color": t.textColor,
                  };
                }),
                h = i
                  ? P(
                      "layout",
                      o(() => (e.embedded ? "e" : "")),
                      f,
                      e,
                    )
                  : void 0;
              return Object.assign(
                {
                  mergedClsPrefix: a,
                  scrollableElRef: n,
                  scrollbarInstRef: r,
                  hasSiderStyle: {
                    display: "flex",
                    flexWrap: "nowrap",
                    width: "100%",
                    flexDirection: "row",
                  },
                  mergedTheme: d,
                  handleNativeElScroll: (n) => {
                    var t;
                    const o = n.target;
                    (s = o.scrollLeft),
                      (c = o.scrollTop),
                      null === (t = e.onScroll) || void 0 === t || t.call(e, n);
                  },
                  cssVars: i ? void 0 : f,
                  themeClass: null == h ? void 0 : h.themeClass,
                  onRender: null == h ? void 0 : h.onRender,
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
              return p(
                "div",
                { class: l, style: this.cssVars },
                this.nativeScrollbar
                  ? p(
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
                  : p(
                      Q,
                      Object.assign({}, this.scrollbarProps, {
                        onScroll: this.onScroll,
                        ref: "scrollbarInstRef",
                        theme: this.mergedTheme.peers.Scrollbar,
                        themeOverrides:
                          this.mergedTheme.peerOverrides.Scrollbar,
                        contentClass: this.contentClass,
                        contentStyle: [this.contentStyle, r],
                      }),
                      this.$slots,
                    ),
              );
            },
          });
        }
        const Bn = Dn(!1),
          An = Dn(!0),
          En = S(
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
                        transform:
                          "rotate(-12deg) scale(1.15) translateY(-2px)",
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
          Fn = a({
            name: "LayoutToggleButton",
            props: {
              clsPrefix: { type: String, required: !0 },
              onClick: Function,
            },
            render() {
              const { clsPrefix: e } = this;
              return p(
                "div",
                { class: `${e}-layout-toggle-button`, onClick: this.onClick },
                p(K, { clsPrefix: e }, { default: () => p(He, null) }),
              );
            },
          }),
          $n = a({
            props: {
              clsPrefix: { type: String, required: !0 },
              onClick: Function,
            },
            render() {
              const { clsPrefix: e } = this;
              return p(
                "div",
                { onClick: this.onClick, class: `${e}-layout-toggle-bar` },
                p("div", { class: `${e}-layout-toggle-bar__top` }),
                p("div", { class: `${e}-layout-toggle-bar__bottom` }),
              );
            },
          }),
          On = {
            position: zn,
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
          jn = a({
            name: "LayoutSider",
            props: Object.assign(Object.assign({}, T.props), On),
            setup(e) {
              const n = i(Kn),
                r = t(null),
                a = t(null),
                d = t(e.defaultCollapsed),
                s = $(h(e, "collapsed"), d),
                c = o(() => J(s.value ? e.collapsedWidth : e.width)),
                u = o(() =>
                  "transform" !== e.collapseMode
                    ? {}
                    : { minWidth: J(e.width) },
                ),
                f = o(() => (n ? n.siderPlacement : "left"));
              let v = 0,
                b = 0;
              Z(() => {
                if (e.nativeScrollbar) {
                  const e = r.value;
                  e && ((e.scrollTop = b), (e.scrollLeft = v));
                }
              }),
                l(Tn, {
                  collapsedRef: s,
                  collapseModeRef: h(e, "collapseMode"),
                });
              const { mergedClsPrefixRef: p, inlineThemeDisabled: g } = L(e),
                m = T("Layout", "-layout-sider", En, Ln, e, p),
                y = {
                  scrollTo: function (n, t) {
                    if (e.nativeScrollbar) {
                      const { value: e } = r;
                      e && (void 0 === t ? e.scrollTo(n) : e.scrollTo(n, t));
                    } else {
                      const { value: e } = a;
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
                      siderToggleBarColorHover: a,
                    } = t,
                    i = {
                      "--n-bezier": n,
                      "--n-toggle-button-color": o,
                      "--n-toggle-button-border": r,
                      "--n-toggle-bar-color": l,
                      "--n-toggle-bar-color-hover": a,
                    };
                  return (
                    e.inverted
                      ? ((i["--n-color"] = t.siderColorInverted),
                        (i["--n-text-color"] = t.textColorInverted),
                        (i["--n-border-color"] = t.siderBorderColorInverted),
                        (i["--n-toggle-button-icon-color"] =
                          t.siderToggleButtonIconColorInverted),
                        (i.__invertScrollbar = t.__invertScrollbar))
                      : ((i["--n-color"] = t.siderColor),
                        (i["--n-text-color"] = t.textColor),
                        (i["--n-border-color"] = t.siderBorderColor),
                        (i["--n-toggle-button-icon-color"] =
                          t.siderToggleButtonIconColor)),
                    i
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
                  scrollbarInstRef: a,
                  mergedClsPrefix: p,
                  mergedTheme: m,
                  styleMaxWidth: c,
                  mergedCollapsed: s,
                  scrollContainerStyle: u,
                  siderPlacement: f,
                  handleNativeElScroll: (n) => {
                    var t;
                    const o = n.target;
                    (v = o.scrollLeft),
                      (b = o.scrollTop),
                      null === (t = e.onScroll) || void 0 === t || t.call(e, n);
                  },
                  handleTransitionend: function (n) {
                    var t, o;
                    "max-width" === n.propertyName &&
                      (s.value
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
                      { value: l } = s;
                    t && V(t, !l),
                      n && V(n, !l),
                      (d.value = !l),
                      l ? o && V(o) : r && V(r);
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
                p(
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
                      { maxWidth: this.styleMaxWidth, width: J(this.width) },
                    ],
                  },
                  this.nativeScrollbar
                    ? p(
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
                    : p(
                        Q,
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
                    ? p("bar" === o ? $n : Fn, {
                        clsPrefix: n,
                        class: t
                          ? this.collapsedTriggerClass
                          : this.triggerClass,
                        style: t
                          ? this.collapsedTriggerStyle
                          : this.triggerStyle,
                        onClick: this.handleTriggerClick,
                      })
                    : null,
                  this.bordered
                    ? p("div", { class: `${n}-layout-sider__border` })
                    : null,
                )
              );
            },
          }),
          _n = D("n-tree-select"),
          Mn = D("n-tree"),
          Un = a({
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
              const { renderSwitcherIconRef: n } = i(Mn, null);
              return () => {
                const {
                  clsPrefix: t,
                  expanded: o,
                  hide: r,
                  indent: l,
                  onClick: a,
                } = e;
                return p(
                  "span",
                  {
                    "data-switcher": !0,
                    class: [
                      `${t}-tree-node-switcher`,
                      o && `${t}-tree-node-switcher--expanded`,
                      r && `${t}-tree-node-switcher--hide`,
                    ],
                    style: { width: `${l}px` },
                    onClick: a,
                  },
                  p(
                    "div",
                    { class: `${t}-tree-node-switcher__icon` },
                    p(H, null, {
                      default: () => {
                        if (e.loading)
                          return p(ee, {
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
                          : p(
                              K,
                              { clsPrefix: t, key: "switcher" },
                              { default: () => p(Ve, null) },
                            );
                      },
                    }),
                  ),
                );
              };
            },
          }),
          Hn = a({
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
              mergedTheme: i(Mn).mergedThemeRef,
            }),
            render() {
              const {
                clsPrefix: e,
                mergedTheme: n,
                checked: t,
                indeterminate: o,
                disabled: r,
                focusable: l,
                indent: a,
                handleUpdateValue: i,
              } = this;
              return p(
                "span",
                {
                  class: [
                    `${e}-tree-node-checkbox`,
                    this.right && `${e}-tree-node-checkbox--right`,
                  ],
                  style: { width: `${a}px` },
                  "data-checkbox": !0,
                },
                p(Nn, {
                  focusable: l,
                  disabled: r,
                  theme: n.peers.Checkbox,
                  themeOverrides: n.peerOverrides.Checkbox,
                  checked: t,
                  indeterminate: o,
                  onUpdateChecked: i,
                }),
              );
            },
          }),
          Wn = a({
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
              } = i(Mn);
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
                renderPrefix: a,
                renderSuffix: i,
                handleClick: d,
                onDragstart: s,
                tmNode: {
                  rawNode: c,
                  rawNode: { prefix: u, suffix: f, [n]: h },
                },
              } = this;
              return p(
                "span",
                Object.assign({}, t, {
                  ref: "selfRef",
                  class: [
                    `${e}-tree-node-content`,
                    null == t ? void 0 : t.class,
                  ],
                  onClick: d,
                  draggable: void 0 !== s || void 0,
                  onDragstart: s,
                }),
                a || u
                  ? p(
                      "div",
                      { class: `${e}-tree-node-content__prefix` },
                      a ? a({ option: c, selected: r, checked: o }) : ne(u),
                    )
                  : null,
                p(
                  "div",
                  { class: `${e}-tree-node-content__text` },
                  l ? l({ option: c, selected: r, checked: o }) : ne(h),
                ),
                i || f
                  ? p(
                      "div",
                      { class: `${e}-tree-node-content__suffix` },
                      i ? i({ option: c, selected: r, checked: o }) : ne(f),
                    )
                  : null,
              );
            },
          });
        function Vn({ position: e, offsetLevel: n, indent: t, el: o }) {
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
          return p("div", { style: r });
        }
        function qn(e, n) {
          return !!e.rawNode[n];
        }
        function Gn(e, n, t, o) {
          null == e ||
            e.forEach((e) => {
              t(e), Gn(e[n], n, t, o), o(e);
            });
        }
        function Yn(e, n, t, o, r) {
          const l = new Set(),
            a = new Set(),
            i = [];
          return (
            Gn(
              e,
              o,
              (e) => {
                if ((i.push(e), r(n, e))) {
                  a.add(e[t]);
                  for (let e = i.length - 2; e >= 0; --e) {
                    if (l.has(i[e][t])) return;
                    l.add(i[e][t]);
                  }
                }
              },
              () => {
                i.pop();
              },
            ),
            { expandedKeys: Array.from(l), highlightKeySet: a }
          );
        }
        te &&
          Image &&
          (new Image().src =
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
        const Xn = a({
            name: "TreeNode",
            props: {
              clsPrefix: { type: String, required: !0 },
              tmNode: { type: Object, required: !0 },
            },
            setup(e) {
              const n = i(Mn),
                {
                  droppingNodeParentRef: l,
                  droppingMouseNodeRef: a,
                  draggingNodeRef: d,
                  droppingPositionRef: s,
                  droppingOffsetLevelRef: u,
                  nodePropsRef: f,
                  indentRef: h,
                  blockLineRef: v,
                  checkboxPlacementRef: b,
                  checkOnClickRef: g,
                  disabledFieldRef: m,
                  showLineRef: y,
                  renderSwitcherIconRef: k,
                  overrideDefaultNodeClickBehaviorRef: x,
                } = n,
                C = r(() => !!e.tmNode.rawNode.checkboxDisabled),
                w = r(() => qn(e.tmNode, m.value)),
                S = r(() => n.disabledRef.value || w.value),
                R = o(() => {
                  const { value: n } = f;
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
                K = r(() => {
                  const { value: n } = I;
                  if (!n) return !1;
                  const { value: t } = g,
                    { tmNode: o } = e;
                  return "boolean" == typeof t
                    ? !o.disabled && t
                    : t(e.tmNode.rawNode);
                });
              function D(t) {
                var o, r;
                if (!De(t, "checkbox") && !De(t, "switcher")) {
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
                          { value: l } = K;
                        if (!r && !o && !l) return;
                        if (De(t, "checkbox") || De(t, "switcher")) return;
                        const { tmNode: a } = e;
                        r && n.handleSelect(a),
                          o && !a.isLeaf && T(),
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
                  { value: t } = h;
                if (y.value) {
                  const o = [];
                  let r = e.tmNode.parent;
                  for (; r; )
                    r.isLastChild
                      ? o.push(
                          p(
                            "div",
                            { class: `${n}-tree-node-indent` },
                            p("div", { style: { width: `${t}px` } }),
                          ),
                        )
                      : o.push(
                          p(
                            "div",
                            {
                              class: [
                                `${n}-tree-node-indent`,
                                `${n}-tree-node-indent--show-line`,
                              ],
                            },
                            p("div", { style: { width: `${t}px` } }),
                          ),
                        ),
                      (r = r.parent);
                  return o.reverse();
                }
                return oe(
                  e.tmNode.level,
                  p(
                    "div",
                    { class: `${e.clsPrefix}-tree-node-indent` },
                    p("div", { style: { width: `${t}px` } }),
                  ),
                );
              });
              return {
                showDropMark: r(() => {
                  const { value: n } = d;
                  if (!n) return;
                  const { value: t } = s;
                  if (!t) return;
                  const { value: o } = a;
                  if (!o) return;
                  const { tmNode: r } = e;
                  return r.key === o.key;
                }),
                showDropMarkAsParent: r(() => {
                  const { value: n } = l;
                  if (!n) return !1;
                  const { tmNode: t } = e,
                    { value: o } = s;
                  return ("before" === o || "after" === o) && n.key === t.key;
                }),
                pending: r(() => n.pendingNodeKeyRef.value === e.tmNode.key),
                loading: r(() => n.loadingKeysRef.value.has(e.tmNode.key)),
                highlight: r(() => {
                  var t;
                  return null === (t = n.highlightKeySetRef.value) ||
                    void 0 === t
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
                mergedCheckOnClick: K,
                checkboxDisabled: C,
                selectable: z,
                expandOnClick: n.expandOnClickRef,
                internalScrollable: n.internalScrollableRef,
                draggable: n.draggableRef,
                blockLine: v,
                nodeProps: R,
                checkboxFocusable: n.internalCheckboxFocusableRef,
                droppingPosition: s,
                droppingOffsetLevel: u,
                indent: h,
                checkboxPlacement: b,
                showLine: y,
                contentInstRef: N,
                contentElRef: L,
                indentNodes: A,
                handleCheck: B,
                handleDrop: function (t) {
                  t.preventDefault(),
                    null !== s.value &&
                      n.handleDrop({
                        event: t,
                        node: e.tmNode,
                        dropPosition: s.value,
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
                  v.value && D(e);
                },
                handleContentClick: function (e) {
                  v.value || D(e);
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
                  checked: a,
                  highlight: i,
                  draggable: d,
                  blockLine: s,
                  indent: c,
                  indentNodes: u,
                  disabled: f,
                  pending: h,
                  internalScrollable: v,
                  nodeProps: b,
                  checkboxPlacement: g,
                } = this,
                m =
                  d && !f
                    ? {
                        onDragenter: this.handleDragEnter,
                        onDragleave: this.handleDragLeave,
                        onDragend: this.handleDragEnd,
                        onDrop: this.handleDrop,
                        onDragover: this.handleDragOver,
                      }
                    : void 0,
                y = v ? Be(e.key) : void 0,
                k = "right" === g,
                x = t
                  ? p(Hn, {
                      indent: c,
                      right: k,
                      focusable: this.checkboxFocusable,
                      disabled: f || this.checkboxDisabled,
                      clsPrefix: n,
                      checked: this.checked,
                      indeterminate: this.indeterminate,
                      onCheck: this.handleCheck,
                    })
                  : null;
              return p(
                "div",
                Object.assign({ class: `${n}-tree-node-wrapper` }, m),
                p(
                  "div",
                  Object.assign({}, s ? b : void 0, {
                    class: [
                      `${n}-tree-node`,
                      {
                        [`${n}-tree-node--selected`]: l,
                        [`${n}-tree-node--checkable`]: t,
                        [`${n}-tree-node--highlight`]: i,
                        [`${n}-tree-node--pending`]: h,
                        [`${n}-tree-node--disabled`]: f,
                        [`${n}-tree-node--selectable`]: r,
                        [`${n}-tree-node--clickable`]:
                          r || o || this.mergedCheckOnClick,
                      },
                      null == b ? void 0 : b.class,
                    ],
                    "data-key": y,
                    draggable: d && s,
                    onClick: this.handleLineClick,
                    onDragstart: d && s && !f ? this.handleDragStart : void 0,
                  }),
                  u,
                  e.isLeaf && this.showLine
                    ? p(
                        "div",
                        {
                          class: [
                            `${n}-tree-node-indent`,
                            `${n}-tree-node-indent--show-line`,
                            e.isLeaf && `${n}-tree-node-indent--is-leaf`,
                            e.isLastChild &&
                              `${n}-tree-node-indent--last-child`,
                          ],
                        },
                        p("div", { style: { width: `${c}px` } }),
                      )
                    : p(Un, {
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
                  p(Wn, {
                    ref: "contentInstRef",
                    clsPrefix: n,
                    checked: a,
                    selected: l,
                    onClick: this.handleContentClick,
                    nodeProps: s ? void 0 : b,
                    onDragstart: !d || s || f ? void 0 : this.handleDragStart,
                    tmNode: e,
                  }),
                  d
                    ? this.showDropMark
                      ? Vn({
                          el: this.contentElRef.value,
                          position: this.droppingPosition,
                          offsetLevel: this.droppingOffsetLevel,
                          indent: c,
                        })
                      : this.showDropMarkAsParent
                        ? Vn({
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
          Zn = a({
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
              return p(
                re,
                {
                  onAfterEnter: this.onAfterEnter,
                  appear: !0,
                  reverse: "collapse" === this.mode,
                },
                {
                  default: () =>
                    p(
                      "div",
                      {
                        class: [
                          `${e}-tree-motion-wrapper`,
                          `${e}-tree-motion-wrapper--${this.mode}`,
                        ],
                        style: { height: b(this.height) },
                      },
                      this.nodes.map((n) => p(Xn, { clsPrefix: e, tmNode: n })),
                    ),
                },
              );
            },
          }),
          Qn = A(),
          Jn = S(
            "tree",
            "\n font-size: var(--n-font-size);\n outline: none;\n",
            [
              N("ul, li", "\n margin: 0;\n padding: 0;\n list-style: none;\n "),
              N(">", [S("tree-node", [N("&:first-child", "margin-top: 0;")])]),
              S("tree-motion-wrapper", [
                B("expand", [le({ duration: "0.2s" })]),
                B("collapse", [le({ duration: "0.2s", reverse: !0 })]),
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
                  ae("disabled", [
                    B("clickable", [
                      S("tree-node-content", "\n cursor: pointer;\n "),
                    ]),
                  ]),
                ],
              ),
              B("block-node", [
                S("tree-node-content", "\n flex: 1;\n min-width: 0;\n "),
              ]),
              ae("block-line", [
                S("tree-node", [
                  ae("disabled", [
                    S("tree-node-content", [
                      N("&:hover", "background: var(--n-node-color-hover);"),
                    ]),
                    B("selectable", [
                      S("tree-node-content", [
                        N(
                          "&:active",
                          "background: var(--n-node-color-pressed);",
                        ),
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
                  ae("disabled", [
                    N("&:hover", "background: var(--n-node-color-hover);"),
                    B(
                      "pending",
                      "\n background: var(--n-node-color-hover);\n ",
                    ),
                    B("selectable", [
                      ae("selected", [
                        N(
                          "&:active",
                          "background: var(--n-node-color-pressed);",
                        ),
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
                ae("show-line", "height: 0;"),
              ]),
              S(
                "tree-node-switcher",
                "\n cursor: pointer;\n display: inline-flex;\n flex-shrink: 0;\n height: var(--n-node-content-height);\n align-items: center;\n justify-content: center;\n transition: transform .15s var(--n-bezier);\n vertical-align: bottom;\n ",
                [
                  R(
                    "icon",
                    "\n position: relative;\n height: 14px;\n width: 14px;\n display: flex;\n color: var(--n-arrow-color);\n transition: color .3s var(--n-bezier);\n font-size: 14px;\n ",
                    [
                      S("icon", [Qn]),
                      S(
                        "base-loading",
                        "\n color: var(--n-loading-color);\n position: absolute;\n left: 0;\n top: 0;\n right: 0;\n bottom: 0;\n ",
                        [Qn],
                      ),
                      S("base-icon", [Qn]),
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
                  R(
                    "prefix",
                    "\n display: inline-flex;\n margin-right: 8px;\n ",
                  ),
                  R(
                    "text",
                    "\n border-bottom: 1px solid #0000;\n transition: border-color .3s var(--n-bezier);\n flex-grow: 1;\n max-width: 100%;\n ",
                  ),
                  R("suffix", "\n display: inline-flex;\n "),
                ],
              ),
              R("empty", "margin: auto;"),
            ],
          );
        var et = function (e, n, t, o) {
          return new (t || (t = Promise))(function (n, r) {
            function l(e) {
              try {
                i(o.next(e));
              } catch (n) {
                r(n);
              }
            }
            function a(e) {
              try {
                i(o.throw(e));
              } catch (n) {
                r(n);
              }
            }
            function i(e) {
              var o;
              e.done
                ? n(e.value)
                : ((o = e.value),
                  o instanceof t
                    ? o
                    : new t(function (e) {
                        e(o);
                      })).then(l, a);
            }
            i((o = o.apply(e, [])).next());
          });
        };
        function nt(e, n, t, o) {
          return {
            getIsGroup: () => !1,
            getKey: (n) => n[e],
            getChildren: o || ((e) => e[n]),
            getDisabled: (e) => !(!e[t] && !e.checkboxDisabled),
          };
        }
        const tt = {
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
          ot = Object.assign(
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
              tt,
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
          rt = a({
            name: "Tree",
            props: ot,
            setup(e) {
              const {
                  mergedClsPrefixRef: n,
                  inlineThemeDisabled: r,
                  mergedRtlRef: a,
                } = L(e),
                d = _("Tree", a, n),
                s = T("Tree", "-tree", Jn, ie, e, n),
                c = t(null),
                u = t(null),
                f = t(null),
                p = o(() => {
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
                  return n && n.length && p.value
                    ? (function (e, n, t, o, r) {
                        const l = new Set(),
                          a = new Set(),
                          i = new Set(),
                          d = [],
                          s = [],
                          c = [];
                        return (
                          (function e(d) {
                            d.forEach((d) => {
                              if ((c.push(d), n(t, d))) {
                                l.add(d[o]), i.add(d[o]);
                                for (let e = c.length - 2; e >= 0; --e) {
                                  const n = c[e][o];
                                  if (a.has(n)) break;
                                  a.add(n), l.has(n) && l.delete(n);
                                }
                              }
                              const s = d[r];
                              s && e(s), c.pop();
                            });
                          })(e),
                          (function e(n, t) {
                            n.forEach((n) => {
                              const i = n[o],
                                s = l.has(i),
                                c = a.has(i);
                              if (!s && !c) return;
                              const u = n[r];
                              if (u)
                                if (s) t.push(n);
                                else {
                                  d.push(i);
                                  const o = Object.assign(
                                    Object.assign({}, n),
                                    { [r]: [] },
                                  );
                                  t.push(o), e(u, o[r]);
                                }
                              else t.push(n);
                            });
                          })(e, s),
                          {
                            filteredTree: s,
                            highlightKeySet: i,
                            expandedKeys: d,
                          }
                        );
                      })(e.data, p.value, n, e.keyField, e.childrenField)
                    : {
                        filteredTree: e.data,
                        highlightKeySet: null,
                        expandedKeys: void 0,
                      };
                }),
                m = o(() =>
                  gn(
                    e.showIrrelevantNodes ? e.data : g.value.filteredTree,
                    nt(
                      e.keyField,
                      e.childrenField,
                      e.disabledField,
                      e.getChildren,
                    ),
                  ),
                ),
                y = i(_n, null),
                k = e.internalTreeSelect
                  ? y.dataTreeMate
                  : o(() =>
                      e.showIrrelevantNodes
                        ? m.value
                        : gn(
                            e.data,
                            nt(
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
                ? de(() => {
                    C.value = e.defaultCheckedKeys;
                  })
                : (C.value = e.defaultCheckedKeys);
              const w = h(e, "checkedKeys"),
                S = $(w, C),
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
                K = t([]);
              (null == x ? void 0 : x.includes("defaultSelectedKeys"))
                ? de(() => {
                    K.value = e.defaultSelectedKeys;
                  })
                : (K.value = e.defaultSelectedKeys);
              const D = h(e, "selectedKeys"),
                B = $(D, K),
                A = t([]),
                E = (n) => {
                  A.value = e.defaultExpandAll
                    ? k.value.getNonLeafKeys()
                    : void 0 === n
                      ? e.defaultExpandedKeys
                      : n;
                };
              (null == x ? void 0 : x.includes("defaultExpandedKeys"))
                ? de(() => {
                    E(void 0);
                  })
                : de(() => {
                    E(e.defaultExpandedKeys);
                  });
              const F = h(e, "expandedKeys"),
                O = $(F, A),
                j = o(() => m.value.getFlattenedNodes(O.value)),
                { pendingNodeKeyRef: M, handleKeydown: U } = (function ({
                  props: e,
                  fNodesRef: n,
                  mergedExpandedKeysRef: o,
                  mergedSelectedKeysRef: r,
                  mergedCheckedKeysRef: l,
                  handleCheck: a,
                  handleSelect: d,
                  handleSwitcherClick: s,
                }) {
                  const { value: c } = r,
                    u = i(_n, null),
                    f = u
                      ? u.pendingNodeKeyRef
                      : t(c.length ? c[c.length - 1] : null);
                  return {
                    pendingNodeKeyRef: f,
                    handleKeydown: function (t) {
                      var r;
                      if (!e.keyboard) return { enterBehavior: null };
                      const { value: i } = f;
                      let c = null;
                      if (null === i) {
                        if (
                          (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                            t.preventDefault(),
                          [
                            "ArrowDown",
                            "ArrowUp",
                            "ArrowLeft",
                            "ArrowRight",
                          ].includes(t.key) && null === i)
                        ) {
                          const { value: e } = n;
                          let t = 0;
                          for (; t < e.length; ) {
                            if (!e[t].disabled) {
                              f.value = e[t].key;
                              break;
                            }
                            t += 1;
                          }
                        }
                      } else {
                        const { value: u } = n;
                        let h = u.findIndex((e) => e.key === i);
                        if (!~h) return { enterBehavior: null };
                        if ("Enter" === t.key) {
                          const n = u[h];
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
                              a(n, !l.value.includes(n.key));
                              break;
                            case "toggleSelect":
                              d(n);
                              break;
                            case "toggleExpand":
                              s(n);
                              break;
                            case "none":
                              break;
                            default:
                              (c = "default"), d(n);
                          }
                        } else if ("ArrowDown" === t.key)
                          for (t.preventDefault(), h += 1; h < u.length; ) {
                            if (!u[h].disabled) {
                              f.value = u[h].key;
                              break;
                            }
                            h += 1;
                          }
                        else if ("ArrowUp" === t.key)
                          for (t.preventDefault(), h -= 1; h >= 0; ) {
                            if (!u[h].disabled) {
                              f.value = u[h].key;
                              break;
                            }
                            h -= 1;
                          }
                        else if ("ArrowLeft" === t.key) {
                          const e = u[h];
                          if (e.isLeaf || !o.value.includes(i)) {
                            const n = e.getParent();
                            n && (f.value = n.key);
                          } else s(e);
                        } else if ("ArrowRight" === t.key) {
                          const e = u[h];
                          if (e.isLeaf) return { enterBehavior: null };
                          if (o.value.includes(i))
                            for (h += 1; h < u.length; ) {
                              if (!u[h].disabled) {
                                f.value = u[h].key;
                                break;
                              }
                              h += 1;
                            }
                          else s(e);
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
                W = null;
              const q = t(new Set()),
                G = o(
                  () => e.internalHighlightKeySet || g.value.highlightKeySet,
                ),
                Y = $(G, q),
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
              se(
                h(e, "data"),
                () => {
                  (le = !0),
                    ce(() => {
                      le = !1;
                    }),
                    X.value.clear(),
                    (M.value = null),
                    Se();
                },
                { deep: !1 },
              );
              let ae = !1;
              const fe = () => {
                (ae = !0),
                  ce(() => {
                    ae = !1;
                  });
              };
              let he;
              function ve(n) {
                return et(this, 0, void 0, function* () {
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
              se(h(e, "pattern"), (n, t) => {
                if (e.showIrrelevantNodes)
                  if (((he = void 0), n)) {
                    const { expandedKeys: n, highlightKeySet: t } = Yn(
                      e.data,
                      e.pattern,
                      e.keyField,
                      e.childrenField,
                      p.value,
                    );
                    (q.value = t),
                      fe(),
                      xe(n, ke(n), { node: null, action: "filter" });
                  } else q.value = new Set();
                else if (n.length) {
                  t.length || (he = O.value);
                  const { expandedKeys: e } = g.value;
                  void 0 !== e &&
                    (fe(), xe(e, ke(e), { node: null, action: "filter" }));
                } else
                  void 0 !== he &&
                    (fe(), xe(he, ke(he), { node: null, action: "filter" }));
              }),
                de(() => {
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
              const be = t(!1),
                pe = t([]);
              se(Z, (n, t) => {
                if (!e.animated || ae) return void ce(ye);
                if (le) return;
                const o = v(s.value.self.nodeHeight),
                  r = new Set(t);
                let l = null,
                  a = null;
                for (const e of n)
                  if (!r.has(e)) {
                    if (null !== l) return;
                    l = e;
                  }
                const i = new Set(n);
                for (const e of t)
                  if (!i.has(e)) {
                    if (null !== a) return;
                    a = e;
                  }
                if (null === l && null === a) return;
                const { virtualScroll: d } = e,
                  u = (d ? f.value.listElRef : c.value).offsetHeight,
                  h = Math.ceil(u / o) + 1;
                let b;
                if (
                  (null !== l && (b = t),
                  null !== a &&
                    (b = void 0 === b ? n : b.filter((e) => e !== a)),
                  (be.value = !0),
                  (pe.value = m.value.getFlattenedNodes(b)),
                  null !== l)
                ) {
                  const e = pe.value.findIndex((e) => e.key === l);
                  if (~e) {
                    const t = pe.value[e].children;
                    if (t) {
                      const r = bn(t, n);
                      pe.value.splice(e + 1, 0, {
                        __motion: !0,
                        mode: "expand",
                        height: d ? r.length * o : void 0,
                        nodes: d ? r.slice(0, h) : r,
                      });
                    }
                  }
                }
                if (null !== a) {
                  const e = pe.value.findIndex((e) => e.key === a);
                  if (~e) {
                    const t = pe.value[e].children;
                    if (!t) return;
                    be.value = !0;
                    const r = bn(t, n);
                    pe.value.splice(e + 1, 0, {
                      __motion: !0,
                      mode: "collapse",
                      height: d ? r.length * o : void 0,
                      nodes: d ? r.slice(0, h) : r,
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
                        return null !== (t = n.get(e)) && void 0 !== t
                          ? t
                          : null;
                      }
                    );
                  })(j.value),
                ),
                me = o(() => (be.value ? pe.value : j.value));
              function ye() {
                const { value: e } = u;
                e && e.sync();
              }
              function ke(e) {
                const { getNode: n } = k.value;
                return e.map((e) => {
                  var t;
                  return (
                    (null === (t = n(e)) || void 0 === t
                      ? void 0
                      : t.rawNode) || null
                  );
                });
              }
              function xe(n, t, o) {
                const { "onUpdate:expandedKeys": r, onUpdateExpandedKeys: l } =
                  e;
                (A.value = n), r && V(r, n, t, o), l && V(l, n, t, o);
              }
              function Ce(n, t, o) {
                const { "onUpdate:checkedKeys": r, onUpdateCheckedKeys: l } = e;
                (C.value = n), l && V(l, n, t, o), r && V(r, n, t, o);
              }
              function we(n, t, o) {
                const { "onUpdate:selectedKeys": r, onUpdateSelectedKeys: l } =
                  e;
                (K.value = n), l && V(l, n, t, o), r && V(r, n, t, o);
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
                H && (window.clearTimeout(H), (H = null)), (W = null);
              }
              function Le(n, t) {
                if (e.disabled || qn(n, e.disabledField)) return;
                if (e.internalUnifySelectCheck && !e.multiple)
                  return void ze(n);
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
                    o && V(o, n, t), r && V(r, n, t);
                  })(l, ke(l));
              }
              function Te(n) {
                e.disabled ||
                  be.value ||
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
                if (!e.draggable || e.disabled || qn(t, e.disabledField))
                  return;
                const { value: l } = J;
                if (!l) return;
                const { allowDrop: a, indent: i } = e;
                o &&
                  (function (n) {
                    const { onDragover: t } = e;
                    t && V(t, n);
                  })({ event: n, node: t.rawNode });
                const d = n.currentTarget,
                  { height: s, top: c } = d.getBoundingClientRect(),
                  u = n.clientY - c;
                let f;
                f = a({
                  node: t.rawNode,
                  dropPosition: "inside",
                  phase: "drag",
                })
                  ? u <= 8
                    ? "before"
                    : u >= s - 8
                      ? "after"
                      : "inside"
                  : u <= s / 2
                    ? "before"
                    : "after";
                const { value: h } = ge;
                let v, b;
                const p = h(t.key);
                if (null === p) return void Re();
                let g = !1;
                "inside" === f
                  ? ((v = t), (b = "inside"))
                  : "before" === f
                    ? t.isFirstChild
                      ? ((v = t), (b = "before"))
                      : ((v = j.value[p - 1]), (b = "after"))
                    : ((v = t), (b = "after")),
                  !v.isLeaf &&
                    O.value.includes(v.key) &&
                    ((g = !0),
                    "after" === b &&
                      ((v = j.value[p + 1]),
                      v ? (b = "before") : ((v = t), (b = "inside"))));
                const m = v;
                if (
                  ((ne.value = m),
                  !g && l.isLastChild && l.key === v.key && (b = "after"),
                  "after" === b)
                ) {
                  let e = Q - n.clientX,
                    t = 0;
                  for (
                    ;
                    e >= i / 2 && null !== v.parent && v.isLastChild && t < 1;

                  )
                    (e -= i), (t += 1), (v = v.parent);
                  oe.value = t;
                } else oe.value = 0;
                if (
                  !(
                    l.contains(v) ||
                    ("inside" === b &&
                      (null === (r = l.parent) || void 0 === r
                        ? void 0
                        : r.key) === v.key)
                  ) ||
                  (l.key === m.key && l.key === v.key)
                )
                  if (a({ node: v.rawNode, dropPosition: b, phase: "drag" })) {
                    if (l.key === v.key) Ne();
                    else if (W !== v.key)
                      if ("inside" === b) {
                        if (e.expandOnDragenter) {
                          if (
                            ((function (e) {
                              if (
                                (H && (window.clearTimeout(H), (H = null)),
                                e.isLeaf)
                              )
                                return;
                              W = e.key;
                              const n = () => {
                                if (W !== e.key) return;
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
                                (H = null), (W = null);
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
                            !v.shallowLoaded && W !== v.key)
                          )
                            return void Se();
                        } else if (!v.shallowLoaded) return void Se();
                      } else Ne();
                    else "inside" !== b && Ne();
                    (te.value = b), (ee.value = v);
                  } else Re();
                else Re();
              }
              se(M, (n) => {
                var t, o;
                if (null !== n)
                  if (e.virtualScroll)
                    null === (t = f.value) ||
                      void 0 === t ||
                      t.scrollTo({ key: n });
                  else if (e.internalScrollable) {
                    const { value: e } = u;
                    if (null === e) return;
                    const t =
                      null === (o = e.contentRef) || void 0 === o
                        ? void 0
                        : o.querySelector(`[data-key="${Be(n)}"]`);
                    if (!t) return;
                    e.scrollTo({ el: t });
                  }
              }),
                l(Mn, {
                  loadingKeysRef: X,
                  highlightKeySetRef: Y,
                  displayedCheckedKeysRef: z,
                  displayedIndeterminateKeysRef: I,
                  mergedSelectedKeysRef: B,
                  mergedExpandedKeysRef: O,
                  mergedThemeRef: s,
                  mergedCheckStrategyRef: N,
                  nodePropsRef: h(e, "nodeProps"),
                  disabledRef: h(e, "disabled"),
                  checkableRef: h(e, "checkable"),
                  selectableRef: h(e, "selectable"),
                  expandOnClickRef: h(e, "expandOnClick"),
                  onLoadRef: h(e, "onLoad"),
                  draggableRef: h(e, "draggable"),
                  blockLineRef: h(e, "blockLine"),
                  indentRef: h(e, "indent"),
                  cascadeRef: h(e, "cascade"),
                  checkOnClickRef: h(e, "checkOnClick"),
                  checkboxPlacementRef: e.checkboxPlacement,
                  droppingMouseNodeRef: ne,
                  droppingNodeParentRef: re,
                  draggingNodeRef: J,
                  droppingPositionRef: te,
                  droppingOffsetLevelRef: oe,
                  fNodesRef: j,
                  pendingNodeKeyRef: M,
                  showLineRef: h(e, "showLine"),
                  disabledFieldRef: h(e, "disabledField"),
                  internalScrollableRef: h(e, "internalScrollable"),
                  internalCheckboxFocusableRef: h(
                    e,
                    "internalCheckboxFocusable",
                  ),
                  internalTreeSelect: e.internalTreeSelect,
                  renderLabelRef: h(e, "renderLabel"),
                  renderPrefixRef: h(e, "renderPrefix"),
                  renderSuffixRef: h(e, "renderSuffix"),
                  renderSwitcherIconRef: h(e, "renderSwitcherIcon"),
                  labelFieldRef: h(e, "labelField"),
                  multipleRef: h(e, "multiple"),
                  overrideDefaultNodeClickBehaviorRef: h(
                    e,
                    "overrideDefaultNodeClickBehavior",
                  ),
                  handleSwitcherClick: Te,
                  handleDragEnd: function ({ event: n, node: t }) {
                    Se(),
                      !e.draggable ||
                        e.disabled ||
                        qn(t, e.disabledField) ||
                        (function (n) {
                          const { onDragend: t } = e;
                          t && V(t, n);
                        })({ event: n, node: t.rawNode });
                  },
                  handleDragEnter: function ({ event: n, node: t }) {
                    !e.draggable ||
                      e.disabled ||
                      qn(t, e.disabledField) ||
                      (Ie({ event: n, node: t }, !1),
                      (function (n) {
                        const { onDragenter: t } = e;
                        t && V(t, n);
                      })({ event: n, node: t.rawNode }));
                  },
                  handleDragLeave: function ({ event: n, node: t }) {
                    !e.draggable ||
                      e.disabled ||
                      qn(t, e.disabledField) ||
                      (function (n) {
                        const { onDragleave: t } = e;
                        t && V(t, n);
                      })({ event: n, node: t.rawNode });
                  },
                  handleDragStart: function ({ event: n, node: t }) {
                    !e.draggable ||
                      e.disabled ||
                      qn(t, e.disabledField) ||
                      ((Q = n.clientX),
                      (J.value = t),
                      (function (n) {
                        const { onDragstart: t } = e;
                        t && V(t, n);
                      })({ event: n, node: t.rawNode }));
                  },
                  handleDrop: function ({
                    event: n,
                    node: t,
                    dropPosition: o,
                  }) {
                    if (!e.draggable || e.disabled || qn(t, e.disabledField))
                      return;
                    const { value: r } = J,
                      { value: l } = ee,
                      { value: a } = te;
                    if (
                      r &&
                      l &&
                      a &&
                      e.allowDrop({
                        node: l.rawNode,
                        dropPosition: a,
                        phase: "drag",
                      }) &&
                      r.key !== l.key
                    ) {
                      if ("before" === a) {
                        const e = r.getNext({ includeDisabled: !0 });
                        if (e && e.key === l.key) return void Re();
                      }
                      if ("after" === a) {
                        const e = r.getPrev({ includeDisabled: !0 });
                        if (e && e.key === l.key) return void Re();
                      }
                      !(function (n) {
                        const { onDrop: t } = e;
                        t && V(t, n);
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
                      ? null === (t = f.value) ||
                        void 0 === t ||
                        t.scrollTo(e, n || 0)
                      : null === (o = f.value) || void 0 === o || o.scrollTo(e);
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
                Ke = o(() => {
                  const {
                      common: { cubicBezierEaseInOut: e },
                      self: {
                        fontSize: n,
                        nodeBorderRadius: t,
                        nodeColorHover: o,
                        nodeColorPressed: r,
                        nodeColorActive: l,
                        arrowColor: a,
                        loadingColor: i,
                        nodeTextColor: d,
                        nodeTextColorDisabled: c,
                        dropMarkColor: u,
                        nodeWrapperPadding: f,
                        nodeHeight: h,
                        lineHeight: p,
                        lineColor: g,
                      },
                    } = s.value,
                    m = ue(f, "top"),
                    y = ue(f, "bottom");
                  return {
                    "--n-arrow-color": a,
                    "--n-loading-color": i,
                    "--n-bezier": e,
                    "--n-font-size": n,
                    "--n-node-border-radius": t,
                    "--n-node-color-active": l,
                    "--n-node-color-hover": o,
                    "--n-node-color-pressed": r,
                    "--n-node-text-color": d,
                    "--n-node-text-color-disabled": c,
                    "--n-drop-mark-color": u,
                    "--n-node-wrapper-padding": f,
                    "--n-line-offset-top": `-${m}`,
                    "--n-line-offset-bottom": `-${y}`,
                    "--n-node-content-height": b(v(h) - v(m) - v(y)),
                    "--n-line-height": p,
                    "--n-line-color": g,
                  };
                }),
                De = r ? P("tree", void 0, Ke, e) : void 0;
              return Object.assign(Object.assign({}, Pe), {
                mergedClsPrefix: n,
                mergedTheme: s,
                rtlEnabled: d,
                fNodes: me,
                aip: be,
                selfElRef: c,
                virtualListInstRef: f,
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
                    if (null == e ? void 0 : e.contains(n.relatedTarget))
                      return;
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
                  return null === (e = f.value) || void 0 === e
                    ? void 0
                    : e.listElRef;
                },
                getScrollContent: function () {
                  var e;
                  return null === (e = f.value) || void 0 === e
                    ? void 0
                    : e.itemsElRef;
                },
                handleAfterEnter: function () {
                  (be.value = !1), e.virtualScroll && ce(ye);
                },
                handleResize: function () {
                  ye();
                },
                cssVars: r ? void 0 : Ke,
                themeClass: null == De ? void 0 : De.themeClass,
                onRender: null == De ? void 0 : De.onRender,
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
                  draggable: a,
                  disabled: i,
                  internalFocusable: d,
                  checkable: s,
                  handleKeydown: c,
                  rtlEnabled: u,
                  handleFocusout: f,
                  scrollbarProps: h,
                } = this,
                b = d && !i,
                g = b ? "0" : void 0,
                m = [
                  `${o}-tree`,
                  u && `${o}-tree--rtl`,
                  s && `${o}-tree--checkable`,
                  (l || r) && `${o}-tree--block-node`,
                  l && `${o}-tree--block-line`,
                ],
                y = (e) =>
                  "__motion" in e
                    ? p(Zn, {
                        height: e.height,
                        nodes: e.nodes,
                        clsPrefix: o,
                        mode: e.mode,
                        onAfterEnter: this.handleAfterEnter,
                      })
                    : p(Xn, { key: e.key, tmNode: e, clsPrefix: o });
              if (this.virtualScroll) {
                const { mergedTheme: e, internalScrollablePadding: t } = this,
                  r = ue(t || "0");
                return p(
                  he,
                  Object.assign({}, h, {
                    ref: "scrollbarInstRef",
                    onDragleave: a ? this.handleDragLeaveTree : void 0,
                    container: this.getScrollContainer,
                    content: this.getScrollContent,
                    class: m,
                    theme: e.peers.Scrollbar,
                    themeOverrides: e.peerOverrides.Scrollbar,
                    tabindex: g,
                    onKeydown: b ? c : void 0,
                    onFocusout: b ? f : void 0,
                  }),
                  {
                    default: () => {
                      var t;
                      return (
                        null === (t = this.onRender) ||
                          void 0 === t ||
                          t.call(this),
                        n.length
                          ? p(
                              Ue,
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
                                  {
                                    paddingLeft: r.left,
                                    paddingRight: r.right,
                                  },
                                ],
                                onScroll: this.handleScroll,
                                onResize: this.handleResize,
                                showScrollbar: !1,
                                itemResizable: !0,
                              },
                              { default: ({ item: e }) => y(e) },
                            )
                          : fe(this.$slots.empty, () => [
                              p(kn, {
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
                  ? p(
                      he,
                      Object.assign({}, h, {
                        class: m,
                        tabindex: g,
                        onKeydown: b ? c : void 0,
                        onFocusout: b ? f : void 0,
                        style: this.cssVars,
                        contentStyle: {
                          padding: this.internalScrollablePadding,
                        },
                      }),
                      {
                        default: () =>
                          p(
                            "div",
                            {
                              onDragleave: a
                                ? this.handleDragLeaveTree
                                : void 0,
                              ref: "selfElRef",
                            },
                            this.fNodes.map(y),
                          ),
                      },
                    )
                  : p(
                      "div",
                      {
                        class: m,
                        tabindex: g,
                        ref: "selfElRef",
                        style: this.cssVars,
                        onKeydown: b ? c : void 0,
                        onFocusout: b ? f : void 0,
                        onDragleave: a ? this.handleDragLeaveTree : void 0,
                      },
                      n.length
                        ? n.map(y)
                        : fe(this.$slots.empty, () => [
                            p(kn, {
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
          lt = { class: "avatar flex" },
          at = { class: "flex-1 flex items-center" },
          it = { class: "text-20px font-bold p-x-24px" },
          dt = ke(
            a({
              __name: "avatar",
              setup(e) {
                const n = t(ve.html.title);
                return (e, t) => (
                  be(),
                  pe("div", lt, [
                    t[0] ||
                      (t[0] = ge(
                        "div",
                        {
                          class:
                            "bg-$navbar-color p-t-10px p-b-15px w-$navbar-width flex justify-center items-center",
                        },
                        [
                          ge(
                            "div",
                            {
                              class:
                                "w-46px of-hidden flex justify-center items-center",
                            },
                            [
                              ge("img", {
                                src: "./images/nav-icon1.png",
                                alt: "",
                                class: "w-100% h-100%",
                              }),
                            ],
                          ),
                        ],
                        -1,
                      )),
                    ge("div", at, [ge("div", it, me(ye(n)), 1)]),
                  ])
                );
              },
            }),
            [["__scopeId", "data-v-848c8d63"]],
          ),
          st = { class: "navbar flex w-100% h-100% flex-col of-hidden" },
          ct = { class: "flex flex-1 w-100% of-hidden" },
          ut = { class: "bg-$navbar-color h-100% of-x-hidden hide-scrollbar" },
          ft = ["onClick"],
          ht = ["src"],
          vt = {
            key: 0,
            class: "flex-1 h-100% of-x-hidden hide-scrollbar p-x-15px",
          },
          bt = ke(
            a({
              __name: "navbar",
              setup(e) {
                const n = xe(),
                  r = Ce(),
                  l = t([]),
                  a = o(() =>
                    we.flat.objectDeep(
                      n.options.routes,
                      (e) => e.filePath || e.fileName,
                    ),
                  ),
                  i = (e) => {
                    const n = a.value[e.filename] || a.value[e.filePath] || {};
                    return {
                      ...e,
                      url: e.url || "/" + n?.key?.replace?.(/\.[^.]+$/g, ""),
                      redirect: e.redirect || n?.redirect,
                    };
                  },
                  d = o(() => $store.nav.munes.map(i)),
                  s = o(() => d.value[$store.nav.menusActive] || {}),
                  u = o(() =>
                    we.flat.objectDeep(
                      s.value?.children || [],
                      null,
                      null,
                      !1,
                      !0,
                      (e) => i(e),
                    ),
                  );
                de(() => {
                  $store.nav.setMenusActiveInfo(s.value);
                });
                const f = (e) => {
                    $store.nav.setMenusActive(e),
                      (l.value = []),
                      ce(() => {
                        0 === u.value.length &&
                          (s.value.redirect || s.value.url) &&
                          n.push(s.value.redirect || s.value.url);
                      });
                  },
                  h = (e) => !/^(http|\/{2})|\.(png|jpg|jpeg|gif|bmp)$/.test(e),
                  v = ({ option: e }) =>
                    p(
                      "div",
                      {
                        class: "navbarTreeItem",
                        onClick() {
                          n.push(e.url);
                        },
                      },
                      [
                        h(e.icon)
                          ? p(Ke, {
                              name: e.icon,
                              class: "navbarTreeItemIcon",
                              iconProps: { size: 18 },
                            })
                          : p(
                              "img",
                              { class: "navbarTreeItemIcon", src: e.icon },
                              e.title,
                            ),
                        p("span", { class: "navbarTreeItemLabel" }, e.title),
                      ],
                    );
                return (
                  c(async () => {
                    const e = r.path.match(/^\/*pages\/[^/]+/)?.[0];
                    f(d.value.findIndex((n) => n.url?.indexOf?.(e) > -1));
                    const n = r.path.match(/^\/*pages\/[^/]+\/[^/]+/)?.[0],
                      t = u.value.find((e) => e.url?.indexOf?.(n) > -1);
                    t && t.url && (l.value = [t.url]);
                  }),
                  (e, n) => {
                    const t = dt,
                      o = rt;
                    return (
                      be(),
                      pe("div", st, [
                        Se(t),
                        ge("div", ct, [
                          ge("div", ut, [
                            (be(!0),
                            pe(
                              Re,
                              null,
                              Ne(
                                ye(d),
                                (n, t) => (
                                  be(),
                                  pe(
                                    "div",
                                    {
                                      key: t,
                                      class: Le([
                                        {
                                          active:
                                            e.$store.nav.menusActive === t,
                                        },
                                        "navbarItem w-$navbar-width h-42px text-$white p-y-15px flex flex-col justify-center items-center",
                                      ]),
                                      onClick: (e) => f(t),
                                    },
                                    [
                                      h(n.icon)
                                        ? (be(),
                                          Te(
                                            ye(Ke),
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
                                        : (be(),
                                          pe(
                                            "img",
                                            {
                                              key: 1,
                                              src: n.icon,
                                              alt: "",
                                              class: "w-22px h-22px m-b-4px",
                                            },
                                            null,
                                            8,
                                            ht,
                                          )),
                                      ge("div", null, me(n.title), 1),
                                    ],
                                    10,
                                    ft,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          ye(u) && ye(u).length > 0
                            ? (be(),
                              pe("div", vt, [
                                Se(
                                  o,
                                  {
                                    data: ye(u),
                                    "render-label": v,
                                    class: "w-100% n-tree",
                                    "label-field": "title",
                                    "default-selected-keys": ye(l),
                                    "key-field": "url",
                                  },
                                  null,
                                  8,
                                  ["data", "default-selected-keys"],
                                ),
                              ]))
                            : ze("", !0),
                        ]),
                      ])
                    );
                  }
                );
              },
            }),
            [["__scopeId", "data-v-c44ff8c8"]],
          ),
          pt = { class: "layout w-100% h-100% fixed" };
        e(
          "default",
          ke({}, [
            [
              "render",
              function (e, n) {
                const t = bt,
                  o = jn,
                  r = Pe("router-view"),
                  l = An,
                  a = Bn;
                return (
                  be(),
                  pe("div", pt, [
                    Se(
                      a,
                      { class: "w-100% h-100%", "has-sider": "" },
                      {
                        default: Ie(() => [
                          Se(
                            o,
                            {
                              style: {
                                "--n-color": "var(--navbar-background-color)",
                              },
                              class: "h-100% n-layout-sider",
                            },
                            { default: Ie(() => [Se(t)]), _: 1 },
                          ),
                          Se(
                            l,
                            {
                              style: { "--n-color": "var(--backgroundColor)" },
                              "content-style": "padding: 15px;",
                            },
                            { default: Ie(() => [Se(r)]), _: 1 },
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
  },
);
