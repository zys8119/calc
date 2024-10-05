export function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  (async function* () {})().next();
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
            ? self
            : {},
  n = function (t) {
    return t && t.Math === Math && t;
  },
  r =
    n("object" == typeof globalThis && globalThis) ||
    n("object" == typeof window && window) ||
    n("object" == typeof self && self) ||
    n("object" == typeof t && t) ||
    n("object" == typeof t && t) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  e = {},
  o = function (t) {
    try {
      return !!t();
    } catch (n) {
      return !0;
    }
  },
  i = !o(function () {
    return (
      7 !==
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  }),
  u = !o(function () {
    var t = function () {}.bind();
    return "function" != typeof t || t.hasOwnProperty("prototype");
  }),
  c = u,
  a = Function.prototype.call,
  f = c
    ? a.bind(a)
    : function () {
        return a.apply(a, arguments);
      },
  l = {},
  s = {}.propertyIsEnumerable,
  p = Object.getOwnPropertyDescriptor,
  y = p && !s.call({ 1: 2 }, 1);
l.f = y
  ? function (t) {
      var n = p(this, t);
      return !!n && n.enumerable;
    }
  : s;
var b,
  v,
  g = function (t, n) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: n,
    };
  },
  h = u,
  d = Function.prototype,
  m = d.call,
  w = h && d.bind.bind(m, m),
  O = h
    ? w
    : function (t) {
        return function () {
          return m.apply(t, arguments);
        };
      },
  S = O,
  j = S({}.toString),
  P = S("".slice),
  E = function (t) {
    return P(j(t), 8, -1);
  },
  T = o,
  A = E,
  F = Object,
  x = O("".split),
  M = T(function () {
    return !F("z").propertyIsEnumerable(0);
  })
    ? function (t) {
        return "String" === A(t) ? x(t, "") : F(t);
      }
    : F,
  C = function (t) {
    return null == t;
  },
  I = C,
  k = TypeError,
  z = function (t) {
    if (I(t)) throw new k("Can't call method on " + t);
    return t;
  },
  L = M,
  N = z,
  D = function (t) {
    return L(N(t));
  },
  R = "object" == typeof document && document.all,
  _ =
    void 0 === R && void 0 !== R
      ? function (t) {
          return "function" == typeof t || t === R;
        }
      : function (t) {
          return "function" == typeof t;
        },
  G = _,
  U = function (t) {
    return "object" == typeof t ? null !== t : G(t);
  },
  W = r,
  B = _,
  $ = function (t, n) {
    return arguments.length < 2
      ? ((r = W[t]), B(r) ? r : void 0)
      : W[t] && W[t][n];
    var r;
  },
  q = O({}.isPrototypeOf),
  K = r.navigator,
  V = K && K.userAgent,
  X = r,
  Y = V ? String(V) : "",
  H = X.process,
  J = X.Deno,
  Q = (H && H.versions) || (J && J.version),
  Z = Q && Q.v8;
Z && (v = (b = Z.split("."))[0] > 0 && b[0] < 4 ? 1 : +(b[0] + b[1])),
  !v &&
    Y &&
    (!(b = Y.match(/Edge\/(\d+)/)) || b[1] >= 74) &&
    (b = Y.match(/Chrome\/(\d+)/)) &&
    (v = +b[1]);
var tt = v,
  nt = o,
  rt = r.String,
  et =
    !!Object.getOwnPropertySymbols &&
    !nt(function () {
      var t = Symbol("symbol detection");
      return (
        !rt(t) ||
        !(Object(t) instanceof Symbol) ||
        (!Symbol.sham && tt && tt < 41)
      );
    }),
  ot = et && !Symbol.sham && "symbol" == typeof Symbol.iterator,
  it = $,
  ut = _,
  ct = q,
  at = Object,
  ft = ot
    ? function (t) {
        return "symbol" == typeof t;
      }
    : function (t) {
        var n = it("Symbol");
        return ut(n) && ct(n.prototype, at(t));
      },
  lt = String,
  st = _,
  pt = function (t) {
    try {
      return lt(t);
    } catch (n) {
      return "Object";
    }
  },
  yt = TypeError,
  bt = function (t) {
    if (st(t)) return t;
    throw new yt(pt(t) + " is not a function");
  },
  vt = bt,
  gt = C,
  ht = f,
  dt = _,
  mt = U,
  wt = TypeError,
  Ot = { exports: {} },
  St = r,
  jt = Object.defineProperty,
  Pt = function (t, n) {
    try {
      jt(St, t, { value: n, configurable: !0, writable: !0 });
    } catch (r) {
      St[t] = n;
    }
    return n;
  },
  Et = r,
  Tt = Pt,
  At = "__core-js_shared__",
  Ft = (Ot.exports = Et[At] || Tt(At, {}));
(Ft.versions || (Ft.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var xt = Ot.exports,
  Mt = xt,
  Ct = function (t, n) {
    return Mt[t] || (Mt[t] = n || {});
  },
  It = z,
  kt = Object,
  zt = function (t) {
    return kt(It(t));
  },
  Lt = zt,
  Nt = O({}.hasOwnProperty),
  Dt =
    Object.hasOwn ||
    function (t, n) {
      return Nt(Lt(t), n);
    },
  Rt = O,
  _t = 0,
  Gt = Math.random(),
  Ut = Rt((1).toString),
  Wt = function (t) {
    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Ut(++_t + Gt, 36);
  },
  Bt = Ct,
  $t = Dt,
  qt = Wt,
  Kt = et,
  Vt = ot,
  Xt = r.Symbol,
  Yt = Bt("wks"),
  Ht = Vt ? Xt.for || Xt : (Xt && Xt.withoutSetter) || qt,
  Jt = function (t) {
    return (
      $t(Yt, t) || (Yt[t] = Kt && $t(Xt, t) ? Xt[t] : Ht("Symbol." + t)), Yt[t]
    );
  },
  Qt = f,
  Zt = U,
  tn = ft,
  nn = function (t, n) {
    var r = t[n];
    return gt(r) ? void 0 : vt(r);
  },
  rn = function (t, n) {
    var r, e;
    if ("string" === n && dt((r = t.toString)) && !mt((e = ht(r, t)))) return e;
    if (dt((r = t.valueOf)) && !mt((e = ht(r, t)))) return e;
    if ("string" !== n && dt((r = t.toString)) && !mt((e = ht(r, t)))) return e;
    throw new wt("Can't convert object to primitive value");
  },
  en = TypeError,
  on = Jt("toPrimitive"),
  un = function (t, n) {
    if (!Zt(t) || tn(t)) return t;
    var r,
      e = nn(t, on);
    if (e) {
      if ((void 0 === n && (n = "default"), (r = Qt(e, t, n)), !Zt(r) || tn(r)))
        return r;
      throw new en("Can't convert object to primitive value");
    }
    return void 0 === n && (n = "number"), rn(t, n);
  },
  cn = ft,
  an = function (t) {
    var n = un(t, "string");
    return cn(n) ? n : n + "";
  },
  fn = U,
  ln = r.document,
  sn = fn(ln) && fn(ln.createElement),
  pn = function (t) {
    return sn ? ln.createElement(t) : {};
  },
  yn =
    !i &&
    !o(function () {
      return (
        7 !==
        Object.defineProperty(pn("div"), "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
  bn = i,
  vn = f,
  gn = l,
  hn = g,
  dn = D,
  mn = an,
  wn = Dt,
  On = yn,
  Sn = Object.getOwnPropertyDescriptor;
e.f = bn
  ? Sn
  : function (t, n) {
      if (((t = dn(t)), (n = mn(n)), On))
        try {
          return Sn(t, n);
        } catch (r) {}
      if (wn(t, n)) return hn(!vn(gn.f, t, n), t[n]);
    };
var jn = {},
  Pn =
    i &&
    o(function () {
      return (
        42 !==
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype
      );
    }),
  En = U,
  Tn = String,
  An = TypeError,
  Fn = function (t) {
    if (En(t)) return t;
    throw new An(Tn(t) + " is not an object");
  },
  xn = i,
  Mn = yn,
  Cn = Pn,
  In = Fn,
  kn = an,
  zn = TypeError,
  Ln = Object.defineProperty,
  Nn = Object.getOwnPropertyDescriptor,
  Dn = "enumerable",
  Rn = "configurable",
  _n = "writable";
jn.f = xn
  ? Cn
    ? function (t, n, r) {
        if (
          (In(t),
          (n = kn(n)),
          In(r),
          "function" == typeof t &&
            "prototype" === n &&
            "value" in r &&
            _n in r &&
            !r[_n])
        ) {
          var e = Nn(t, n);
          e &&
            e[_n] &&
            ((t[n] = r.value),
            (r = {
              configurable: Rn in r ? r[Rn] : e[Rn],
              enumerable: Dn in r ? r[Dn] : e[Dn],
              writable: !1,
            }));
        }
        return Ln(t, n, r);
      }
    : Ln
  : function (t, n, r) {
      if ((In(t), (n = kn(n)), In(r), Mn))
        try {
          return Ln(t, n, r);
        } catch (e) {}
      if ("get" in r || "set" in r) throw new zn("Accessors not supported");
      return "value" in r && (t[n] = r.value), t;
    };
var Gn = jn,
  Un = g,
  Wn = i
    ? function (t, n, r) {
        return Gn.f(t, n, Un(1, r));
      }
    : function (t, n, r) {
        return (t[n] = r), t;
      },
  Bn = { exports: {} },
  $n = i,
  qn = Dt,
  Kn = Function.prototype,
  Vn = $n && Object.getOwnPropertyDescriptor,
  Xn = qn(Kn, "name"),
  Yn = {
    EXISTS: Xn,
    PROPER: Xn && "something" === function () {}.name,
    CONFIGURABLE: Xn && (!$n || ($n && Vn(Kn, "name").configurable)),
  },
  Hn = _,
  Jn = xt,
  Qn = O(Function.toString);
Hn(Jn.inspectSource) ||
  (Jn.inspectSource = function (t) {
    return Qn(t);
  });
var Zn,
  tr,
  nr,
  rr = Jn.inspectSource,
  er = _,
  or = r.WeakMap,
  ir = er(or) && /native code/.test(String(or)),
  ur = Wt,
  cr = Ct("keys"),
  ar = {},
  fr = ir,
  lr = r,
  sr = U,
  pr = Wn,
  yr = Dt,
  br = xt,
  vr = function (t) {
    return cr[t] || (cr[t] = ur(t));
  },
  gr = ar,
  hr = "Object already initialized",
  dr = lr.TypeError,
  mr = lr.WeakMap;
if (fr || br.state) {
  var wr = br.state || (br.state = new mr());
  (wr.get = wr.get),
    (wr.has = wr.has),
    (wr.set = wr.set),
    (Zn = function (t, n) {
      if (wr.has(t)) throw new dr(hr);
      return (n.facade = t), wr.set(t, n), n;
    }),
    (tr = function (t) {
      return wr.get(t) || {};
    }),
    (nr = function (t) {
      return wr.has(t);
    });
} else {
  var Or = vr("state");
  (gr[Or] = !0),
    (Zn = function (t, n) {
      if (yr(t, Or)) throw new dr(hr);
      return (n.facade = t), pr(t, Or, n), n;
    }),
    (tr = function (t) {
      return yr(t, Or) ? t[Or] : {};
    }),
    (nr = function (t) {
      return yr(t, Or);
    });
}
var Sr = {
    set: Zn,
    get: tr,
    has: nr,
    enforce: function (t) {
      return nr(t) ? tr(t) : Zn(t, {});
    },
    getterFor: function (t) {
      return function (n) {
        var r;
        if (!sr(n) || (r = tr(n)).type !== t)
          throw new dr("Incompatible receiver, " + t + " required");
        return r;
      };
    },
  },
  jr = O,
  Pr = o,
  Er = _,
  Tr = Dt,
  Ar = i,
  Fr = Yn.CONFIGURABLE,
  xr = rr,
  Mr = Sr.enforce,
  Cr = Sr.get,
  Ir = String,
  kr = Object.defineProperty,
  zr = jr("".slice),
  Lr = jr("".replace),
  Nr = jr([].join),
  Dr =
    Ar &&
    !Pr(function () {
      return 8 !== kr(function () {}, "length", { value: 8 }).length;
    }),
  Rr = String(String).split("String"),
  _r = (Bn.exports = function (t, n, r) {
    "Symbol(" === zr(Ir(n), 0, 7) &&
      (n = "[" + Lr(Ir(n), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
      r && r.getter && (n = "get " + n),
      r && r.setter && (n = "set " + n),
      (!Tr(t, "name") || (Fr && t.name !== n)) &&
        (Ar ? kr(t, "name", { value: n, configurable: !0 }) : (t.name = n)),
      Dr &&
        r &&
        Tr(r, "arity") &&
        t.length !== r.arity &&
        kr(t, "length", { value: r.arity });
    try {
      r && Tr(r, "constructor") && r.constructor
        ? Ar && kr(t, "prototype", { writable: !1 })
        : t.prototype && (t.prototype = void 0);
    } catch (o) {}
    var e = Mr(t);
    return (
      Tr(e, "source") || (e.source = Nr(Rr, "string" == typeof n ? n : "")), t
    );
  });
Function.prototype.toString = _r(function () {
  return (Er(this) && Cr(this).source) || xr(this);
}, "toString");
var Gr = Bn.exports,
  Ur = _,
  Wr = jn,
  Br = Gr,
  $r = Pt,
  qr = {},
  Kr = Math.ceil,
  Vr = Math.floor,
  Xr =
    Math.trunc ||
    function (t) {
      var n = +t;
      return (n > 0 ? Vr : Kr)(n);
    },
  Yr = function (t) {
    var n = +t;
    return n != n || 0 === n ? 0 : Xr(n);
  },
  Hr = Yr,
  Jr = Math.max,
  Qr = Math.min,
  Zr = Yr,
  te = Math.min,
  ne = function (t) {
    var n = Zr(t);
    return n > 0 ? te(n, 9007199254740991) : 0;
  },
  re = function (t) {
    return ne(t.length);
  },
  ee = D,
  oe = function (t, n) {
    var r = Hr(t);
    return r < 0 ? Jr(r + n, 0) : Qr(r, n);
  },
  ie = re,
  ue = function (t) {
    return function (n, r, e) {
      var o = ee(n),
        i = ie(o);
      if (0 === i) return !t && -1;
      var u,
        c = oe(e, i);
      if (t && r != r) {
        for (; i > c; ) if ((u = o[c++]) != u) return !0;
      } else
        for (; i > c; c++) if ((t || c in o) && o[c] === r) return t || c || 0;
      return !t && -1;
    };
  },
  ce = { includes: ue(!0), indexOf: ue(!1) },
  ae = Dt,
  fe = D,
  le = ce.indexOf,
  se = ar,
  pe = O([].push),
  ye = function (t, n) {
    var r,
      e = fe(t),
      o = 0,
      i = [];
    for (r in e) !ae(se, r) && ae(e, r) && pe(i, r);
    for (; n.length > o; ) ae(e, (r = n[o++])) && (~le(i, r) || pe(i, r));
    return i;
  },
  be = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ].concat("length", "prototype");
qr.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return ye(t, be);
  };
var ve = {};
ve.f = Object.getOwnPropertySymbols;
var ge = $,
  he = qr,
  de = ve,
  me = Fn,
  we = O([].concat),
  Oe =
    ge("Reflect", "ownKeys") ||
    function (t) {
      var n = he.f(me(t)),
        r = de.f;
      return r ? we(n, r(t)) : n;
    },
  Se = Dt,
  je = Oe,
  Pe = e,
  Ee = jn,
  Te = o,
  Ae = _,
  Fe = /#|\.prototype\./,
  xe = function (t, n) {
    var r = Ce[Me(t)];
    return r === ke || (r !== Ie && (Ae(n) ? Te(n) : !!n));
  },
  Me = (xe.normalize = function (t) {
    return String(t).replace(Fe, ".").toLowerCase();
  }),
  Ce = (xe.data = {}),
  Ie = (xe.NATIVE = "N"),
  ke = (xe.POLYFILL = "P"),
  ze = xe,
  Le = r,
  Ne = e.f,
  De = Wn,
  Re = function (t, n, r, e) {
    e || (e = {});
    var o = e.enumerable,
      i = void 0 !== e.name ? e.name : n;
    if ((Ur(r) && Br(r, i, e), e.global)) o ? (t[n] = r) : $r(n, r);
    else {
      try {
        e.unsafe ? t[n] && (o = !0) : delete t[n];
      } catch (u) {}
      o
        ? (t[n] = r)
        : Wr.f(t, n, {
            value: r,
            enumerable: !1,
            configurable: !e.nonConfigurable,
            writable: !e.nonWritable,
          });
    }
    return t;
  },
  _e = Pt,
  Ge = function (t, n, r) {
    for (var e = je(n), o = Ee.f, i = Pe.f, u = 0; u < e.length; u++) {
      var c = e[u];
      Se(t, c) || (r && Se(r, c)) || o(t, c, i(n, c));
    }
  },
  Ue = ze,
  We = function (t, n) {
    var r,
      e,
      o,
      i,
      u,
      c = t.target,
      a = t.global,
      f = t.stat;
    if ((r = a ? Le : f ? Le[c] || _e(c, {}) : Le[c] && Le[c].prototype))
      for (e in n) {
        if (
          ((i = n[e]),
          (o = t.dontCallGetSet ? (u = Ne(r, e)) && u.value : r[e]),
          !Ue(a ? e : c + (f ? "." : "#") + e, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Ge(i, o);
        }
        (t.sham || (o && o.sham)) && De(i, "sham", !0), Re(r, e, i, t);
      }
  },
  Be = r;
We({ global: !0, forced: Be.globalThis !== Be }, { globalThis: Be });
var $e = E,
  qe =
    Array.isArray ||
    function (t) {
      return "Array" === $e(t);
    },
  Ke = TypeError,
  Ve = E,
  Xe = O,
  Ye = function (t) {
    if ("Function" === Ve(t)) return Xe(t);
  },
  He = bt,
  Je = u,
  Qe = Ye(Ye.bind),
  Ze = qe,
  to = re,
  no = function (t) {
    if (t > 9007199254740991) throw Ke("Maximum allowed index exceeded");
    return t;
  },
  ro = function (t, n) {
    return (
      He(t),
      void 0 === n
        ? t
        : Je
          ? Qe(t, n)
          : function () {
              return t.apply(n, arguments);
            }
    );
  },
  eo = function (t, n, r, e, o, i, u, c) {
    for (var a, f, l = o, s = 0, p = !!u && ro(u, c); s < e; )
      s in r &&
        ((a = p ? p(r[s], s, n) : r[s]),
        i > 0 && Ze(a)
          ? ((f = to(a)), (l = eo(t, n, a, f, l, i - 1) - 1))
          : (no(l + 1), (t[l] = a)),
        l++),
        s++;
    return l;
  },
  oo = eo,
  io = {};
io[Jt("toStringTag")] = "z";
var uo = "[object z]" === String(io),
  co = _,
  ao = E,
  fo = Jt("toStringTag"),
  lo = Object,
  so =
    "Arguments" ===
    ao(
      (function () {
        return arguments;
      })(),
    ),
  po = O,
  yo = o,
  bo = _,
  vo = uo
    ? ao
    : function (t) {
        var n, r, e;
        return void 0 === t
          ? "Undefined"
          : null === t
            ? "Null"
            : "string" ==
                typeof (r = (function (t, n) {
                  try {
                    return t[n];
                  } catch (r) {}
                })((n = lo(t)), fo))
              ? r
              : so
                ? ao(n)
                : "Object" === (e = ao(n)) && co(n.callee)
                  ? "Arguments"
                  : e;
      },
  go = rr,
  ho = function () {},
  mo = $("Reflect", "construct"),
  wo = /^\s*(?:class|function)\b/,
  Oo = po(wo.exec),
  So = !wo.test(ho),
  jo = function (t) {
    if (!bo(t)) return !1;
    try {
      return mo(ho, [], t), !0;
    } catch (n) {
      return !1;
    }
  },
  Po = function (t) {
    if (!bo(t)) return !1;
    switch (vo(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return So || !!Oo(wo, go(t));
    } catch (n) {
      return !0;
    }
  };
Po.sham = !0;
var Eo =
    !mo ||
    yo(function () {
      var t;
      return (
        jo(jo.call) ||
        !jo(Object) ||
        !jo(function () {
          t = !0;
        }) ||
        t
      );
    })
      ? Po
      : jo,
  To = qe,
  Ao = Eo,
  Fo = U,
  xo = Jt("species"),
  Mo = Array,
  Co = function (t) {
    var n;
    return (
      To(t) &&
        ((n = t.constructor),
        ((Ao(n) && (n === Mo || To(n.prototype))) ||
          (Fo(n) && null === (n = n[xo]))) &&
          (n = void 0)),
      void 0 === n ? Mo : n
    );
  },
  Io = oo,
  ko = zt,
  zo = re,
  Lo = Yr,
  No = function (t, n) {
    return new (Co(t))(0 === n ? 0 : n);
  };
We(
  { target: "Array", proto: !0 },
  {
    flat: function () {
      var t = arguments.length ? arguments[0] : void 0,
        n = ko(this),
        r = zo(n),
        e = No(n, 0);
      return (e.length = Io(e, n, n, r, 0, void 0 === t ? 1 : Lo(t))), e;
    },
  },
);
