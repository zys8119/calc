System.register(["./index-legacy-BBDZ8Jv1.js"], function (e, t) {
  "use strict";
  var n, a, o, l, s, c, i, r, d, u, m, f, x, p;
  return {
    setters: [
      (e) => {
        (n = e.d),
          (a = e.h),
          (o = e.e),
          (l = e.aJ),
          (s = e.n),
          (c = e.o),
          (i = e.c),
          (r = e.w),
          (d = e.b),
          (u = e.t),
          (m = e.aK),
          (f = e.B),
          (x = e._),
          (p = e.a);
      },
    ],
    execute: function () {
      var t = document.createElement("style");
      (t.textContent =
        ".alert-content .alert-content-box[data-v-832b346e]{max-height:calc(var(--n-dialog-max-height) - 80px)}\n"),
        document.head.appendChild(t);
      const h = { class: "alert-content flex flex-col w-100% h-100%" },
        v = { class: "alert-content-box flex-1 of-x-hidden hide-scrollbar" },
        C = {
          key: 0,
          class: "m-t-30px flex justify-center items-center gap-15px",
        },
        y = n({
          __name: "alert-content",
          props: {
            hideConfirm: { type: Boolean },
            hideCancel: { type: Boolean },
            textCancel: null,
            textConfirm: null,
          },
          emits: ["save"],
          setup(e) {
            const t = () => {
              m.dialog.close();
            };
            return (n, m) => {
              const x = f;
              return (
                c(),
                a("div", h, [
                  o("div", v, [l(n.$slots, "default", {}, void 0, !0)]),
                  e.hideCancel && e.hideConfirm && !n.$slots.button
                    ? s("", !0)
                    : (c(),
                      a("div", C, [
                        l(
                          n.$slots,
                          "button",
                          {},
                          () => [
                            e.hideCancel
                              ? s("", !0)
                              : (c(),
                                i(
                                  x,
                                  { key: 0, onClick: t },
                                  {
                                    default: r(() => [
                                      d(u(e.textCancel || "取消"), 1),
                                    ]),
                                    _: 1,
                                  },
                                )),
                            e.hideConfirm
                              ? s("", !0)
                              : (c(),
                                i(
                                  x,
                                  {
                                    key: 1,
                                    type: "primary",
                                    onClick:
                                      m[0] || (m[0] = (e) => n.$emit("save")),
                                  },
                                  {
                                    default: r(() => [
                                      d(u(e.textConfirm || "确定"), 1),
                                    ]),
                                    _: 1,
                                  },
                                )),
                          ],
                          !0,
                        ),
                      ])),
                ])
              );
            };
          },
        }),
        _ = x(y, [["__scopeId", "data-v-832b346e"]]),
        b = { class: "confirm" },
        g = { class: "text-#666" };
      e(
        "default",
        n({
          __name: "confirm",
          props: { content: null },
          emits: ["save"],
          setup(e, { emit: t }) {
            const n = t,
              l = async () => {
                n("save"), m.dialog.close();
              };
            return (t, n) => {
              const s = _;
              return (
                c(),
                a("div", b, [
                  p(
                    s,
                    { onSave: l },
                    { default: r(() => [o("div", g, u(e.content), 1)]), _: 1 },
                  ),
                ])
              );
            };
          },
        }),
      );
    },
  };
});
