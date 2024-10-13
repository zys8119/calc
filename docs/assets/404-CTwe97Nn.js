import {
  d as c,
  c as u,
  w as e,
  u as l,
  o as p,
  a as d,
  b as f,
  e as i,
  B as m,
  _ as x,
} from "./index-B2BSPBrj.js";
import { _ as B } from "./Result-DDdJvuln.js";
const N = c({
    __name: "404",
    props: { error: null },
    setup(s) {
      const r = l(),
        n = () => r.replace("/");
      return (g, t) => {
        var o;
        const a = m,
          _ = B;
        return (
          p(),
          u(
            _,
            {
              title: (o = s.error) != null ? o : "页面加载错误",
              status: "error",
            },
            {
              footer: e(() => [
                d(
                  a,
                  { onClick: n },
                  { default: e(() => t[0] || (t[0] = [f("返回首页")])), _: 1 },
                ),
              ]),
              default: e(() => [
                t[1] ||
                  (t[1] = i(
                    "div",
                    { class: "flex justify-center text-#999" },
                    "404 Page Not Found",
                    -1,
                  )),
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
  V = x(N, [["__scopeId", "data-v-d545d41c"]]);
export { V as default };
