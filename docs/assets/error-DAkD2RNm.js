import {
  d as c,
  c as u,
  w as e,
  u as p,
  o as l,
  a as m,
  b as f,
  B as i,
  _ as d,
} from "./index-CZqhz6yy.js";
import { _ as x } from "./Result-DCjtP4Hx.js";
const B = c({
    __name: "error",
    props: { error: null },
    setup(r) {
      const n = p(),
        s = () => n.replace("/");
      return (k, o) => {
        var t;
        const a = i,
          _ = x;
        return (
          l(),
          u(
            _,
            {
              title: (t = r.error) != null ? t : "页面加载错误",
              status: "error",
            },
            {
              footer: e(() => [
                m(
                  a,
                  { onClick: s },
                  { default: e(() => o[0] || (o[0] = [f("返回首页")])), _: 1 },
                ),
              ]),
              _: 1,
            },
            8,
            ["title"],
          )
        );
      };
    },
  }),
  g = d(B, [["__scopeId", "data-v-95581f90"]]);
export { g as default };
