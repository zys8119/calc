import {
  d as _,
  h as l,
  e as f,
  aJ as d,
  n as c,
  o as n,
  c as m,
  w as i,
  b as u,
  t as r,
  aK as h,
  B as C,
  _ as v,
  a as y,
} from "./index-CZqhz6yy.js";
const $ = { class: "alert-content flex flex-col w-100% h-100%" },
  k = { class: "alert-content-box flex-1 of-x-hidden hide-scrollbar" },
  B = { key: 0, class: "m-t-30px flex justify-center items-center gap-15px" },
  b = _({
    __name: "alert-content",
    props: {
      hideConfirm: { type: Boolean },
      hideCancel: { type: Boolean },
      textCancel: null,
      textConfirm: null,
    },
    emits: ["save"],
    setup(e) {
      const a = () => {
        h.dialog.close();
      };
      return (t, o) => {
        const s = C;
        return (
          n(),
          l("div", $, [
            f("div", k, [d(t.$slots, "default", {}, void 0, !0)]),
            !e.hideCancel || !e.hideConfirm || t.$slots.button
              ? (n(),
                l("div", B, [
                  d(
                    t.$slots,
                    "button",
                    {},
                    () => [
                      e.hideCancel
                        ? c("", !0)
                        : (n(),
                          m(
                            s,
                            { key: 0, onClick: a },
                            {
                              default: i(() => [
                                u(r(e.textCancel || "取消"), 1),
                              ]),
                              _: 1,
                            },
                          )),
                      e.hideConfirm
                        ? c("", !0)
                        : (n(),
                          m(
                            s,
                            {
                              key: 1,
                              type: "primary",
                              onClick: o[0] || (o[0] = (p) => t.$emit("save")),
                            },
                            {
                              default: i(() => [
                                u(r(e.textConfirm || "确定"), 1),
                              ]),
                              _: 1,
                            },
                          )),
                    ],
                    !0,
                  ),
                ]))
              : c("", !0),
          ])
        );
      };
    },
  }),
  g = v(b, [["__scopeId", "data-v-832b346e"]]),
  N = { class: "confirm" },
  V = { class: "text-#666" },
  S = _({
    __name: "confirm",
    props: { content: null },
    emits: ["save"],
    setup(e, { emit: a }) {
      const t = a,
        o = async () => {
          t("save"), h.dialog.close();
        };
      return (s, p) => {
        const x = g;
        return (
          n(),
          l("div", N, [
            y(
              x,
              { onSave: o },
              { default: i(() => [f("div", V, r(e.content), 1)]), _: 1 },
            ),
          ])
        );
      };
    },
  });
export { S as default };
