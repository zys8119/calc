System.register(
  ["./index-legacy-D2JH51JW.js", "./Result-legacy-BFkAXTa2.js"],
  function (e, t) {
    "use strict";
    var r, n, a, o, s, u, c, l, d, i;
    return {
      setters: [
        (e) => {
          (r = e.d),
            (n = e.c),
            (a = e.w),
            (o = e.u),
            (s = e.o),
            (u = e.a),
            (c = e.b),
            (l = e.B),
            (d = e._);
        },
        (e) => {
          i = e._;
        },
      ],
      execute: function () {
        var t = document.createElement("style");
        (t.textContent = ".n-result[data-v-95581f90]{margin-top:20vh}\n"),
          document.head.appendChild(t),
          e(
            "default",
            d(
              r({
                __name: "error",
                props: { error: null },
                setup(e) {
                  const t = o(),
                    r = () => t.replace("/");
                  return (t, o) => {
                    const d = l,
                      p = i;
                    return (
                      s(),
                      n(
                        p,
                        { title: e.error ?? "页面加载错误", status: "error" },
                        {
                          footer: a(() => [
                            u(
                              d,
                              { onClick: r },
                              {
                                default: a(
                                  () => o[0] || (o[0] = [c("返回首页")]),
                                ),
                                _: 1,
                              },
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
              [["__scopeId", "data-v-95581f90"]],
            ),
          );
      },
    };
  },
);
