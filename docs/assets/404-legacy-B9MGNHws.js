System.register(
  ["./index-legacy-CzynbWA3.js", "./Result-legacy-CfrZEZeW.js"],
  function (e, t) {
    "use strict";
    var r, n, a, s, u, c, d, o, l, i, f;
    return {
      setters: [
        (e) => {
          (r = e.d),
            (n = e.c),
            (a = e.w),
            (s = e.u),
            (u = e.o),
            (c = e.a),
            (d = e.b),
            (o = e.e),
            (l = e.B),
            (i = e._);
        },
        (e) => {
          f = e._;
        },
      ],
      execute: function () {
        var t = document.createElement("style");
        (t.textContent = ".n-result[data-v-d545d41c]{margin-top:20vh}\n"),
          document.head.appendChild(t),
          e(
            "default",
            i(
              r({
                __name: "404",
                props: { error: null },
                setup(e) {
                  const t = s(),
                    r = () => t.replace("/");
                  return (t, s) => {
                    const i = l,
                      p = f;
                    return (
                      u(),
                      n(
                        p,
                        { title: e.error ?? "页面加载错误", status: "error" },
                        {
                          footer: a(() => [
                            c(
                              i,
                              { onClick: r },
                              {
                                default: a(
                                  () => s[0] || (s[0] = [d("返回首页")]),
                                ),
                                _: 1,
                              },
                            ),
                          ]),
                          default: a(() => [
                            s[1] ||
                              (s[1] = o(
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
              [["__scopeId", "data-v-d545d41c"]],
            ),
          );
      },
    };
  },
);
