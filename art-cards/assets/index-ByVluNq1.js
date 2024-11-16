(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function _0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wh = { exports: {} },
  ps = {},
  Sh = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ni = Symbol.for("react.element"),
  D0 = Symbol.for("react.portal"),
  L0 = Symbol.for("react.fragment"),
  V0 = Symbol.for("react.strict_mode"),
  N0 = Symbol.for("react.profiler"),
  I0 = Symbol.for("react.provider"),
  $0 = Symbol.for("react.context"),
  O0 = Symbol.for("react.forward_ref"),
  j0 = Symbol.for("react.suspense"),
  F0 = Symbol.for("react.memo"),
  z0 = Symbol.for("react.lazy"),
  _c = Symbol.iterator;
function B0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_c && e[_c]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kh = Object.assign,
  Ph = {};
function _r(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ph),
    (this.updater = n || xh);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ch() {}
Ch.prototype = _r.prototype;
function Jl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ph),
    (this.updater = n || xh);
}
var eu = (Jl.prototype = new Ch());
eu.constructor = Jl;
kh(eu, _r.prototype);
eu.isPureReactComponent = !0;
var Dc = Array.isArray,
  Th = Object.prototype.hasOwnProperty,
  tu = { current: null },
  Eh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ah(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Th.call(t, r) && !Eh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ni,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: tu.current,
  };
}
function U0(e, t) {
  return {
    $$typeof: Ni,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function nu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ni;
}
function W0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lc = /\/+/g;
function bs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? W0("" + e.key)
    : t.toString(36);
}
function ho(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ni:
          case D0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + bs(s, 0) : r),
      Dc(i)
        ? ((n = ""),
          e != null && (n = e.replace(Lc, "$&/") + "/"),
          ho(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (nu(i) &&
            (i = U0(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Lc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Dc(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + bs(o, a);
      s += ho(o, t, n, l, i);
    }
  else if (((l = B0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + bs(o, a++)), (s += ho(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Hi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ho(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function H0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var _e = { current: null },
  po = { transition: null },
  b0 = {
    ReactCurrentDispatcher: _e,
    ReactCurrentBatchConfig: po,
    ReactCurrentOwner: tu,
  };
function Rh() {
  throw Error("act(...) is not supported in production builds of React.");
}
$.Children = {
  map: Hi,
  forEach: function (e, t, n) {
    Hi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Hi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Hi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!nu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
$.Component = _r;
$.Fragment = L0;
$.Profiler = N0;
$.PureComponent = Jl;
$.StrictMode = V0;
$.Suspense = j0;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b0;
$.act = Rh;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kh({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = tu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Th.call(t, l) &&
        !Eh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ni, type: e.type, key: i, ref: o, props: r, _owner: s };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: $0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: I0, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Ah;
$.createFactory = function (e) {
  var t = Ah.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: O0, render: e };
};
$.isValidElement = nu;
$.lazy = function (e) {
  return { $$typeof: z0, _payload: { _status: -1, _result: e }, _init: H0 };
};
$.memo = function (e, t) {
  return { $$typeof: F0, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = po.transition;
  po.transition = {};
  try {
    e();
  } finally {
    po.transition = t;
  }
};
$.unstable_act = Rh;
$.useCallback = function (e, t) {
  return _e.current.useCallback(e, t);
};
$.useContext = function (e) {
  return _e.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return _e.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return _e.current.useEffect(e, t);
};
$.useId = function () {
  return _e.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return _e.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return _e.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return _e.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return _e.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return _e.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return _e.current.useRef(e);
};
$.useState = function (e) {
  return _e.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return _e.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return _e.current.useTransition();
};
$.version = "18.3.1";
Sh.exports = $;
var R = Sh.exports;
const fi = _0(R);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var K0 = R,
  G0 = Symbol.for("react.element"),
  Y0 = Symbol.for("react.fragment"),
  X0 = Object.prototype.hasOwnProperty,
  Q0 = K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Z0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mh(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) X0.call(t, r) && !Z0.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: G0,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Q0.current,
  };
}
ps.Fragment = Y0;
ps.jsx = Mh;
ps.jsxs = Mh;
wh.exports = ps;
var N = wh.exports,
  _h = { exports: {} },
  Ze = {},
  Dh = { exports: {} },
  Lh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, A) {
    var D = E.length;
    E.push(A);
    e: for (; 0 < D; ) {
      var O = (D - 1) >>> 1,
        j = E[O];
      if (0 < i(j, A)) (E[O] = A), (E[D] = j), (D = O);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var A = E[0],
      D = E.pop();
    if (D !== A) {
      E[0] = D;
      e: for (var O = 0, j = E.length, Be = j >>> 1; O < Be; ) {
        var Ae = 2 * (O + 1) - 1,
          Je = E[Ae],
          me = Ae + 1,
          Ue = E[me];
        if (0 > i(Je, D))
          me < j && 0 > i(Ue, Je)
            ? ((E[O] = Ue), (E[me] = D), (O = me))
            : ((E[O] = Je), (E[Ae] = D), (O = Ae));
        else if (me < j && 0 > i(Ue, D)) (E[O] = Ue), (E[me] = D), (O = me);
        else break e;
      }
    }
    return A;
  }
  function i(E, A) {
    var D = E.sortIndex - A.sortIndex;
    return D !== 0 ? D : E.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(E) {
    for (var A = n(u); A !== null; ) {
      if (A.callback === null) r(u);
      else if (A.startTime <= E)
        r(u), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(u);
    }
  }
  function w(E) {
    if (((v = !1), m(E), !y))
      if (n(l) !== null) (y = !0), ze(S);
      else {
        var A = n(u);
        A !== null && W(w, A.startTime - E);
      }
  }
  function S(E, A) {
    (y = !1), v && ((v = !1), p(C), (C = -1)), (g = !0);
    var D = d;
    try {
      for (
        m(A), f = n(l);
        f !== null && (!(f.expirationTime > A) || (E && !b()));

      ) {
        var O = f.callback;
        if (typeof O == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var j = O(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof j == "function" ? (f.callback = j) : f === n(l) && r(l),
            m(A);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var Be = !0;
      else {
        var Ae = n(u);
        Ae !== null && W(w, Ae.startTime - A), (Be = !1);
      }
      return Be;
    } finally {
      (f = null), (d = D), (g = !1);
    }
  }
  var x = !1,
    P = null,
    C = -1,
    V = 5,
    _ = -1;
  function b() {
    return !(e.unstable_now() - _ < V);
  }
  function G() {
    if (P !== null) {
      var E = e.unstable_now();
      _ = E;
      var A = !0;
      try {
        A = P(!0, E);
      } finally {
        A ? Se() : ((x = !1), (P = null));
      }
    } else x = !1;
  }
  var Se;
  if (typeof h == "function")
    Se = function () {
      h(G);
    };
  else if (typeof MessageChannel < "u") {
    var Le = new MessageChannel(),
      Fe = Le.port2;
    (Le.port1.onmessage = G),
      (Se = function () {
        Fe.postMessage(null);
      });
  } else
    Se = function () {
      k(G, 0);
    };
  function ze(E) {
    (P = E), x || ((x = !0), Se());
  }
  function W(E, A) {
    C = k(function () {
      E(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ze(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = d;
      }
      var D = d;
      d = A;
      try {
        return E();
      } finally {
        d = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, A) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = d;
      d = E;
      try {
        return A();
      } finally {
        d = D;
      }
    }),
    (e.unstable_scheduleCallback = function (E, A, D) {
      var O = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? O + D : O))
          : (D = O),
        E)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = D + j),
        (E = {
          id: c++,
          callback: A,
          priorityLevel: E,
          startTime: D,
          expirationTime: j,
          sortIndex: -1,
        }),
        D > O
          ? ((E.sortIndex = D),
            t(u, E),
            n(l) === null &&
              E === n(u) &&
              (v ? (p(C), (C = -1)) : (v = !0), W(w, D - O)))
          : ((E.sortIndex = j), t(l, E), y || g || ((y = !0), ze(S))),
        E
      );
    }),
    (e.unstable_shouldYield = b),
    (e.unstable_wrapCallback = function (E) {
      var A = d;
      return function () {
        var D = d;
        d = A;
        try {
          return E.apply(this, arguments);
        } finally {
          d = D;
        }
      };
    });
})(Lh);
Dh.exports = Lh;
var q0 = Dh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J0 = R,
  Xe = q0;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Vh = new Set(),
  di = {};
function Fn(e, t) {
  pr(e, t), pr(e + "Capture", t);
}
function pr(e, t) {
  for (di[e] = t, e = 0; e < t.length; e++) Vh.add(t[e]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ja = Object.prototype.hasOwnProperty,
  ey =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vc = {},
  Nc = {};
function ty(e) {
  return ja.call(Nc, e)
    ? !0
    : ja.call(Vc, e)
    ? !1
    : ey.test(e)
    ? (Nc[e] = !0)
    : ((Vc[e] = !0), !1);
}
function ny(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ry(e, t, n, r) {
  if (t === null || typeof t > "u" || ny(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function De(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    we[e] = new De(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  we[t] = new De(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  we[e] = new De(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  we[e] = new De(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    we[e] = new De(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  we[e] = new De(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  we[e] = new De(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  we[e] = new De(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  we[e] = new De(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ru = /[\-:]([a-z])/g;
function iu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ru, iu);
    we[t] = new De(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ru, iu);
    we[t] = new De(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ru, iu);
  we[t] = new De(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  we[e] = new De(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
we.xlinkHref = new De(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  we[e] = new De(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ou(e, t, n, r) {
  var i = we.hasOwnProperty(t) ? we[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ry(t, n, i, r) && (n = null),
    r || i === null
      ? ty(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bi = Symbol.for("react.element"),
  Hn = Symbol.for("react.portal"),
  bn = Symbol.for("react.fragment"),
  su = Symbol.for("react.strict_mode"),
  Fa = Symbol.for("react.profiler"),
  Nh = Symbol.for("react.provider"),
  Ih = Symbol.for("react.context"),
  au = Symbol.for("react.forward_ref"),
  za = Symbol.for("react.suspense"),
  Ba = Symbol.for("react.suspense_list"),
  lu = Symbol.for("react.memo"),
  Yt = Symbol.for("react.lazy"),
  $h = Symbol.for("react.offscreen"),
  Ic = Symbol.iterator;
function Ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ic && e[Ic]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Ks;
function Hr(e) {
  if (Ks === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ks = (t && t[1]) || "";
    }
  return (
    `
` +
    Ks +
    e
  );
}
var Gs = !1;
function Ys(e, t) {
  if (!e || Gs) return "";
  Gs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Gs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Hr(e) : "";
}
function iy(e) {
  switch (e.tag) {
    case 5:
      return Hr(e.type);
    case 16:
      return Hr("Lazy");
    case 13:
      return Hr("Suspense");
    case 19:
      return Hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ys(e.type, !1)), e;
    case 11:
      return (e = Ys(e.type.render, !1)), e;
    case 1:
      return (e = Ys(e.type, !0)), e;
    default:
      return "";
  }
}
function Ua(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bn:
      return "Fragment";
    case Hn:
      return "Portal";
    case Fa:
      return "Profiler";
    case su:
      return "StrictMode";
    case za:
      return "Suspense";
    case Ba:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ih:
        return (e.displayName || "Context") + ".Consumer";
      case Nh:
        return (e._context.displayName || "Context") + ".Provider";
      case au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case lu:
        return (
          (t = e.displayName || null), t !== null ? t : Ua(e.type) || "Memo"
        );
      case Yt:
        (t = e._payload), (e = e._init);
        try {
          return Ua(e(t));
        } catch {}
    }
  return null;
}
function oy(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ua(t);
    case 8:
      return t === su ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Oh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function sy(e) {
  var t = Oh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ki(e) {
  e._valueTracker || (e._valueTracker = sy(e));
}
function jh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Oh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Vo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wa(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function $c(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fh(e, t) {
  (t = t.checked), t != null && ou(e, "checked", t, !1);
}
function Ha(e, t) {
  Fh(e, t);
  var n = un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ba(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ba(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Oc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ba(e, t, n) {
  (t !== "number" || Vo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var br = Array.isArray;
function lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + un(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function jc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (br(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function zh(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Fc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Bh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ga(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Bh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Gi,
  Uh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Gi = Gi || document.createElement("div"),
          Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Gi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function hi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ay = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zr).forEach(function (e) {
  ay.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zr[t] = Zr[e]);
  });
});
function Wh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zr.hasOwnProperty(e) && Zr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Hh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Wh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var ly = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ya(e, t) {
  if (t) {
    if (ly[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Xa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qa = null;
function uu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Za = null,
  ur = null,
  cr = null;
function zc(e) {
  if ((e = Oi(e))) {
    if (typeof Za != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = ws(t)), Za(e.stateNode, e.type, t));
  }
}
function bh(e) {
  ur ? (cr ? cr.push(e) : (cr = [e])) : (ur = e);
}
function Kh() {
  if (ur) {
    var e = ur,
      t = cr;
    if (((cr = ur = null), zc(e), t)) for (e = 0; e < t.length; e++) zc(t[e]);
  }
}
function Gh(e, t) {
  return e(t);
}
function Yh() {}
var Xs = !1;
function Xh(e, t, n) {
  if (Xs) return e(t, n);
  Xs = !0;
  try {
    return Gh(e, t, n);
  } finally {
    (Xs = !1), (ur !== null || cr !== null) && (Yh(), Kh());
  }
}
function pi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ws(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var qa = !1;
if (jt)
  try {
    var $r = {};
    Object.defineProperty($r, "passive", {
      get: function () {
        qa = !0;
      },
    }),
      window.addEventListener("test", $r, $r),
      window.removeEventListener("test", $r, $r);
  } catch {
    qa = !1;
  }
function uy(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qr = !1,
  No = null,
  Io = !1,
  Ja = null,
  cy = {
    onError: function (e) {
      (qr = !0), (No = e);
    },
  };
function fy(e, t, n, r, i, o, s, a, l) {
  (qr = !1), (No = null), uy.apply(cy, arguments);
}
function dy(e, t, n, r, i, o, s, a, l) {
  if ((fy.apply(this, arguments), qr)) {
    if (qr) {
      var u = No;
      (qr = !1), (No = null);
    } else throw Error(T(198));
    Io || ((Io = !0), (Ja = u));
  }
}
function zn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Bc(e) {
  if (zn(e) !== e) throw Error(T(188));
}
function hy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Bc(i), e;
        if (o === r) return Bc(i), t;
        o = o.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Zh(e) {
  return (e = hy(e)), e !== null ? qh(e) : null;
}
function qh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Jh = Xe.unstable_scheduleCallback,
  Uc = Xe.unstable_cancelCallback,
  py = Xe.unstable_shouldYield,
  my = Xe.unstable_requestPaint,
  ie = Xe.unstable_now,
  gy = Xe.unstable_getCurrentPriorityLevel,
  cu = Xe.unstable_ImmediatePriority,
  ep = Xe.unstable_UserBlockingPriority,
  $o = Xe.unstable_NormalPriority,
  yy = Xe.unstable_LowPriority,
  tp = Xe.unstable_IdlePriority,
  ms = null,
  kt = null;
function vy(e) {
  if (kt && typeof kt.onCommitFiberRoot == "function")
    try {
      kt.onCommitFiberRoot(ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var pt = Math.clz32 ? Math.clz32 : xy,
  wy = Math.log,
  Sy = Math.LN2;
function xy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((wy(e) / Sy) | 0)) | 0;
}
var Yi = 64,
  Xi = 4194304;
function Kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Kr(a)) : ((o &= s), o !== 0 && (r = Kr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Kr(s)) : o !== 0 && (r = Kr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - pt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function ky(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Py(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - pt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = ky(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function el(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function np() {
  var e = Yi;
  return (Yi <<= 1), !(Yi & 4194240) && (Yi = 64), e;
}
function Qs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - pt(t)),
    (e[t] = n);
}
function Cy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - pt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function fu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - pt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var H = 0;
function rp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ip,
  du,
  op,
  sp,
  ap,
  tl = !1,
  Qi = [],
  en = null,
  tn = null,
  nn = null,
  mi = new Map(),
  gi = new Map(),
  Qt = [],
  Ty =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Wc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      en = null;
      break;
    case "dragenter":
    case "dragleave":
      tn = null;
      break;
    case "mouseover":
    case "mouseout":
      nn = null;
      break;
    case "pointerover":
    case "pointerout":
      mi.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gi.delete(t.pointerId);
  }
}
function Or(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Oi(t)), t !== null && du(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Ey(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (en = Or(en, e, t, n, r, i)), !0;
    case "dragenter":
      return (tn = Or(tn, e, t, n, r, i)), !0;
    case "mouseover":
      return (nn = Or(nn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return mi.set(o, Or(mi.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), gi.set(o, Or(gi.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function lp(e) {
  var t = Cn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qh(n)), t !== null)) {
          (e.blockedOn = t),
            ap(e.priority, function () {
              op(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function mo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = nl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Qa = r), n.target.dispatchEvent(r), (Qa = null);
    } else return (t = Oi(n)), t !== null && du(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Hc(e, t, n) {
  mo(e) && n.delete(t);
}
function Ay() {
  (tl = !1),
    en !== null && mo(en) && (en = null),
    tn !== null && mo(tn) && (tn = null),
    nn !== null && mo(nn) && (nn = null),
    mi.forEach(Hc),
    gi.forEach(Hc);
}
function jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    tl ||
      ((tl = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Ay)));
}
function yi(e) {
  function t(i) {
    return jr(i, e);
  }
  if (0 < Qi.length) {
    jr(Qi[0], e);
    for (var n = 1; n < Qi.length; n++) {
      var r = Qi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    en !== null && jr(en, e),
      tn !== null && jr(tn, e),
      nn !== null && jr(nn, e),
      mi.forEach(t),
      gi.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    (r = Qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    lp(n), n.blockedOn === null && Qt.shift();
}
var fr = Wt.ReactCurrentBatchConfig,
  jo = !0;
function Ry(e, t, n, r) {
  var i = H,
    o = fr.transition;
  fr.transition = null;
  try {
    (H = 1), hu(e, t, n, r);
  } finally {
    (H = i), (fr.transition = o);
  }
}
function My(e, t, n, r) {
  var i = H,
    o = fr.transition;
  fr.transition = null;
  try {
    (H = 4), hu(e, t, n, r);
  } finally {
    (H = i), (fr.transition = o);
  }
}
function hu(e, t, n, r) {
  if (jo) {
    var i = nl(e, t, n, r);
    if (i === null) sa(e, t, r, Fo, n), Wc(e, r);
    else if (Ey(i, e, t, n, r)) r.stopPropagation();
    else if ((Wc(e, r), t & 4 && -1 < Ty.indexOf(e))) {
      for (; i !== null; ) {
        var o = Oi(i);
        if (
          (o !== null && ip(o),
          (o = nl(e, t, n, r)),
          o === null && sa(e, t, r, Fo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else sa(e, t, r, null, n);
  }
}
var Fo = null;
function nl(e, t, n, r) {
  if (((Fo = null), (e = uu(r)), (e = Cn(e)), e !== null))
    if (((t = zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fo = e), null;
}
function up(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (gy()) {
        case cu:
          return 1;
        case ep:
          return 4;
        case $o:
        case yy:
          return 16;
        case tp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var qt = null,
  pu = null,
  go = null;
function cp() {
  if (go) return go;
  var e,
    t = pu,
    n = t.length,
    r,
    i = "value" in qt ? qt.value : qt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (go = i.slice(e, 1 < r ? 1 - r : void 0));
}
function yo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Zi() {
  return !0;
}
function bc() {
  return !1;
}
function qe(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Zi
        : bc),
      (this.isPropagationStopped = bc),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Zi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Zi));
      },
      persist: function () {},
      isPersistent: Zi,
    }),
    t
  );
}
var Dr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mu = qe(Dr),
  $i = te({}, Dr, { view: 0, detail: 0 }),
  _y = qe($i),
  Zs,
  qs,
  Fr,
  gs = te({}, $i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fr &&
            (Fr && e.type === "mousemove"
              ? ((Zs = e.screenX - Fr.screenX), (qs = e.screenY - Fr.screenY))
              : (qs = Zs = 0),
            (Fr = e)),
          Zs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qs;
    },
  }),
  Kc = qe(gs),
  Dy = te({}, gs, { dataTransfer: 0 }),
  Ly = qe(Dy),
  Vy = te({}, $i, { relatedTarget: 0 }),
  Js = qe(Vy),
  Ny = te({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Iy = qe(Ny),
  $y = te({}, Dr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Oy = qe($y),
  jy = te({}, Dr, { data: 0 }),
  Gc = qe(jy),
  Fy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  zy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  By = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Uy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = By[e]) ? !!t[e] : !1;
}
function gu() {
  return Uy;
}
var Wy = te({}, $i, {
    key: function (e) {
      if (e.key) {
        var t = Fy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = yo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? zy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function (e) {
      return e.type === "keypress" ? yo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? yo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Hy = qe(Wy),
  by = te({}, gs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Yc = qe(by),
  Ky = te({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu,
  }),
  Gy = qe(Ky),
  Yy = te({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xy = qe(Yy),
  Qy = te({}, gs, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zy = qe(Qy),
  qy = [9, 13, 27, 32],
  yu = jt && "CompositionEvent" in window,
  Jr = null;
jt && "documentMode" in document && (Jr = document.documentMode);
var Jy = jt && "TextEvent" in window && !Jr,
  fp = jt && (!yu || (Jr && 8 < Jr && 11 >= Jr)),
  Xc = " ",
  Qc = !1;
function dp(e, t) {
  switch (e) {
    case "keyup":
      return qy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function hp(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kn = !1;
function ev(e, t) {
  switch (e) {
    case "compositionend":
      return hp(t);
    case "keypress":
      return t.which !== 32 ? null : ((Qc = !0), Xc);
    case "textInput":
      return (e = t.data), e === Xc && Qc ? null : e;
    default:
      return null;
  }
}
function tv(e, t) {
  if (Kn)
    return e === "compositionend" || (!yu && dp(e, t))
      ? ((e = cp()), (go = pu = qt = null), (Kn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return fp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var nv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!nv[e.type] : t === "textarea";
}
function pp(e, t, n, r) {
  bh(r),
    (t = zo(t, "onChange")),
    0 < t.length &&
      ((n = new mu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ei = null,
  vi = null;
function rv(e) {
  Tp(e, 0);
}
function ys(e) {
  var t = Xn(e);
  if (jh(t)) return e;
}
function iv(e, t) {
  if (e === "change") return t;
}
var mp = !1;
if (jt) {
  var ea;
  if (jt) {
    var ta = "oninput" in document;
    if (!ta) {
      var qc = document.createElement("div");
      qc.setAttribute("oninput", "return;"),
        (ta = typeof qc.oninput == "function");
    }
    ea = ta;
  } else ea = !1;
  mp = ea && (!document.documentMode || 9 < document.documentMode);
}
function Jc() {
  ei && (ei.detachEvent("onpropertychange", gp), (vi = ei = null));
}
function gp(e) {
  if (e.propertyName === "value" && ys(vi)) {
    var t = [];
    pp(t, vi, e, uu(e)), Xh(rv, t);
  }
}
function ov(e, t, n) {
  e === "focusin"
    ? (Jc(), (ei = t), (vi = n), ei.attachEvent("onpropertychange", gp))
    : e === "focusout" && Jc();
}
function sv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ys(vi);
}
function av(e, t) {
  if (e === "click") return ys(t);
}
function lv(e, t) {
  if (e === "input" || e === "change") return ys(t);
}
function uv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var yt = typeof Object.is == "function" ? Object.is : uv;
function wi(e, t) {
  if (yt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ja.call(t, i) || !yt(e[i], t[i])) return !1;
  }
  return !0;
}
function ef(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function tf(e, t) {
  var n = ef(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ef(n);
  }
}
function yp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vp() {
  for (var e = window, t = Vo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vo(e.document);
  }
  return t;
}
function vu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function cv(e) {
  var t = vp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && vu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = tf(n, o));
        var s = tf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var fv = jt && "documentMode" in document && 11 >= document.documentMode,
  Gn = null,
  rl = null,
  ti = null,
  il = !1;
function nf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  il ||
    Gn == null ||
    Gn !== Vo(r) ||
    ((r = Gn),
    "selectionStart" in r && vu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ti && wi(ti, r)) ||
      ((ti = r),
      (r = zo(rl, "onSelect")),
      0 < r.length &&
        ((t = new mu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Gn))));
}
function qi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Yn = {
    animationend: qi("Animation", "AnimationEnd"),
    animationiteration: qi("Animation", "AnimationIteration"),
    animationstart: qi("Animation", "AnimationStart"),
    transitionend: qi("Transition", "TransitionEnd"),
  },
  na = {},
  wp = {};
jt &&
  ((wp = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  "TransitionEvent" in window || delete Yn.transitionend.transition);
function vs(e) {
  if (na[e]) return na[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in wp) return (na[e] = t[n]);
  return e;
}
var Sp = vs("animationend"),
  xp = vs("animationiteration"),
  kp = vs("animationstart"),
  Pp = vs("transitionend"),
  Cp = new Map(),
  rf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function mn(e, t) {
  Cp.set(e, t), Fn(t, [e]);
}
for (var ra = 0; ra < rf.length; ra++) {
  var ia = rf[ra],
    dv = ia.toLowerCase(),
    hv = ia[0].toUpperCase() + ia.slice(1);
  mn(dv, "on" + hv);
}
mn(Sp, "onAnimationEnd");
mn(xp, "onAnimationIteration");
mn(kp, "onAnimationStart");
mn("dblclick", "onDoubleClick");
mn("focusin", "onFocus");
mn("focusout", "onBlur");
mn(Pp, "onTransitionEnd");
pr("onMouseEnter", ["mouseout", "mouseover"]);
pr("onMouseLeave", ["mouseout", "mouseover"]);
pr("onPointerEnter", ["pointerout", "pointerover"]);
pr("onPointerLeave", ["pointerout", "pointerover"]);
Fn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Fn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Fn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Fn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Fn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Fn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  pv = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));
function of(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), dy(r, t, void 0, e), (e.currentTarget = null);
}
function Tp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          of(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          of(i, a, u), (o = l);
        }
    }
  }
  if (Io) throw ((e = Ja), (Io = !1), (Ja = null), e);
}
function Y(e, t) {
  var n = t[ul];
  n === void 0 && (n = t[ul] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ep(t, e, 2, !1), n.add(r));
}
function oa(e, t, n) {
  var r = 0;
  t && (r |= 4), Ep(n, e, r, t);
}
var Ji = "_reactListening" + Math.random().toString(36).slice(2);
function Si(e) {
  if (!e[Ji]) {
    (e[Ji] = !0),
      Vh.forEach(function (n) {
        n !== "selectionchange" && (pv.has(n) || oa(n, !1, e), oa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ji] || ((t[Ji] = !0), oa("selectionchange", !1, t));
  }
}
function Ep(e, t, n, r) {
  switch (up(t)) {
    case 1:
      var i = Ry;
      break;
    case 4:
      i = My;
      break;
    default:
      i = hu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !qa ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function sa(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Cn(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Xh(function () {
    var u = o,
      c = uu(n),
      f = [];
    e: {
      var d = Cp.get(e);
      if (d !== void 0) {
        var g = mu,
          y = e;
        switch (e) {
          case "keypress":
            if (yo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Hy;
            break;
          case "focusin":
            (y = "focus"), (g = Js);
            break;
          case "focusout":
            (y = "blur"), (g = Js);
            break;
          case "beforeblur":
          case "afterblur":
            g = Js;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Kc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ly;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Gy;
            break;
          case Sp:
          case xp:
          case kp:
            g = Iy;
            break;
          case Pp:
            g = Xy;
            break;
          case "scroll":
            g = _y;
            break;
          case "wheel":
            g = Zy;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Oy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Yc;
        }
        var v = (t & 4) !== 0,
          k = !v && e === "scroll",
          p = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, m; h !== null; ) {
          m = h;
          var w = m.stateNode;
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              p !== null && ((w = pi(h, p)), w != null && v.push(xi(h, w, m)))),
            k)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Qa &&
            (y = n.relatedTarget || n.fromElement) &&
            (Cn(y) || y[Ft]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Cn(y) : null),
              y !== null &&
                ((k = zn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Kc),
            (w = "onMouseLeave"),
            (p = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Yc),
              (w = "onPointerLeave"),
              (p = "onPointerEnter"),
              (h = "pointer")),
            (k = g == null ? d : Xn(g)),
            (m = y == null ? d : Xn(y)),
            (d = new v(w, h + "leave", g, n, c)),
            (d.target = k),
            (d.relatedTarget = m),
            (w = null),
            Cn(c) === u &&
              ((v = new v(p, h + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = k),
              (w = v)),
            (k = w),
            g && y)
          )
            t: {
              for (v = g, p = y, h = 0, m = v; m; m = Un(m)) h++;
              for (m = 0, w = p; w; w = Un(w)) m++;
              for (; 0 < h - m; ) (v = Un(v)), h--;
              for (; 0 < m - h; ) (p = Un(p)), m--;
              for (; h--; ) {
                if (v === p || (p !== null && v === p.alternate)) break t;
                (v = Un(v)), (p = Un(p));
              }
              v = null;
            }
          else v = null;
          g !== null && sf(f, d, g, v, !1),
            y !== null && k !== null && sf(f, k, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Xn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var S = iv;
        else if (Zc(d))
          if (mp) S = lv;
          else {
            S = sv;
            var x = ov;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = av);
        if (S && (S = S(e, u))) {
          pp(f, S, n, c);
          break e;
        }
        x && x(e, d, u),
          e === "focusout" &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === "number" &&
            ba(d, "number", d.value);
      }
      switch (((x = u ? Xn(u) : window), e)) {
        case "focusin":
          (Zc(x) || x.contentEditable === "true") &&
            ((Gn = x), (rl = u), (ti = null));
          break;
        case "focusout":
          ti = rl = Gn = null;
          break;
        case "mousedown":
          il = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (il = !1), nf(f, n, c);
          break;
        case "selectionchange":
          if (fv) break;
        case "keydown":
        case "keyup":
          nf(f, n, c);
      }
      var P;
      if (yu)
        e: {
          switch (e) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Kn
          ? dp(e, n) && (C = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (fp &&
          n.locale !== "ko" &&
          (Kn || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Kn && (P = cp())
            : ((qt = c),
              (pu = "value" in qt ? qt.value : qt.textContent),
              (Kn = !0))),
        (x = zo(u, C)),
        0 < x.length &&
          ((C = new Gc(C, e, null, n, c)),
          f.push({ event: C, listeners: x }),
          P ? (C.data = P) : ((P = hp(n)), P !== null && (C.data = P)))),
        (P = Jy ? ev(e, n) : tv(e, n)) &&
          ((u = zo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Gc("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Tp(f, t);
  });
}
function xi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function zo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = pi(e, n)),
      o != null && r.unshift(xi(e, o, i)),
      (o = pi(e, t)),
      o != null && r.push(xi(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Un(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = pi(n, o)), l != null && s.unshift(xi(n, l, a)))
        : i || ((l = pi(n, o)), l != null && s.push(xi(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var mv = /\r\n?/g,
  gv = /\u0000|\uFFFD/g;
function af(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      mv,
      `
`
    )
    .replace(gv, "");
}
function eo(e, t, n) {
  if (((t = af(t)), af(e) !== t && n)) throw Error(T(425));
}
function Bo() {}
var ol = null,
  sl = null;
function al(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ll = typeof setTimeout == "function" ? setTimeout : void 0,
  yv = typeof clearTimeout == "function" ? clearTimeout : void 0,
  lf = typeof Promise == "function" ? Promise : void 0,
  vv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof lf < "u"
      ? function (e) {
          return lf.resolve(null).then(e).catch(wv);
        }
      : ll;
function wv(e) {
  setTimeout(function () {
    throw e;
  });
}
function aa(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), yi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  yi(t);
}
function rn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function uf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Lr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + Lr,
  ki = "__reactProps$" + Lr,
  Ft = "__reactContainer$" + Lr,
  ul = "__reactEvents$" + Lr,
  Sv = "__reactListeners$" + Lr,
  xv = "__reactHandles$" + Lr;
function Cn(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uf(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = uf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Oi(e) {
  return (
    (e = e[xt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function ws(e) {
  return e[ki] || null;
}
var cl = [],
  Qn = -1;
function gn(e) {
  return { current: e };
}
function Q(e) {
  0 > Qn || ((e.current = cl[Qn]), (cl[Qn] = null), Qn--);
}
function K(e, t) {
  Qn++, (cl[Qn] = e.current), (e.current = t);
}
var cn = {},
  Ee = gn(cn),
  $e = gn(!1),
  Nn = cn;
function mr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return cn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function Uo() {
  Q($e), Q(Ee);
}
function cf(e, t, n) {
  if (Ee.current !== cn) throw Error(T(168));
  K(Ee, t), K($e, n);
}
function Ap(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, oy(e) || "Unknown", i));
  return te({}, n, r);
}
function Wo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || cn),
    (Nn = Ee.current),
    K(Ee, e),
    K($e, $e.current),
    !0
  );
}
function ff(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Ap(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Q($e),
      Q(Ee),
      K(Ee, e))
    : Q($e),
    K($e, n);
}
var Mt = null,
  Ss = !1,
  la = !1;
function Rp(e) {
  Mt === null ? (Mt = [e]) : Mt.push(e);
}
function kv(e) {
  (Ss = !0), Rp(e);
}
function yn() {
  if (!la && Mt !== null) {
    la = !0;
    var e = 0,
      t = H;
    try {
      var n = Mt;
      for (H = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Mt = null), (Ss = !1);
    } catch (i) {
      throw (Mt !== null && (Mt = Mt.slice(e + 1)), Jh(cu, yn), i);
    } finally {
      (H = t), (la = !1);
    }
  }
  return null;
}
var Zn = [],
  qn = 0,
  Ho = null,
  bo = 0,
  nt = [],
  rt = 0,
  In = null,
  _t = 1,
  Dt = "";
function Sn(e, t) {
  (Zn[qn++] = bo), (Zn[qn++] = Ho), (Ho = e), (bo = t);
}
function Mp(e, t, n) {
  (nt[rt++] = _t), (nt[rt++] = Dt), (nt[rt++] = In), (In = e);
  var r = _t;
  e = Dt;
  var i = 32 - pt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - pt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (_t = (1 << (32 - pt(t) + i)) | (n << i) | r),
      (Dt = o + e);
  } else (_t = (1 << o) | (n << i) | r), (Dt = e);
}
function wu(e) {
  e.return !== null && (Sn(e, 1), Mp(e, 1, 0));
}
function Su(e) {
  for (; e === Ho; )
    (Ho = Zn[--qn]), (Zn[qn] = null), (bo = Zn[--qn]), (Zn[qn] = null);
  for (; e === In; )
    (In = nt[--rt]),
      (nt[rt] = null),
      (Dt = nt[--rt]),
      (nt[rt] = null),
      (_t = nt[--rt]),
      (nt[rt] = null);
}
var Ye = null,
  Ge = null,
  Z = !1,
  ht = null;
function _p(e, t) {
  var n = it(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function df(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ge = rn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ge = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = In !== null ? { id: _t, overflow: Dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = it(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ge = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function dl(e) {
  if (Z) {
    var t = Ge;
    if (t) {
      var n = t;
      if (!df(e, t)) {
        if (fl(e)) throw Error(T(418));
        t = rn(n.nextSibling);
        var r = Ye;
        t && df(e, t)
          ? _p(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Z = !1), (Ye = e));
      }
    } else {
      if (fl(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (Z = !1), (Ye = e);
    }
  }
}
function hf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function to(e) {
  if (e !== Ye) return !1;
  if (!Z) return hf(e), (Z = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !al(e.type, e.memoizedProps))),
    t && (t = Ge))
  ) {
    if (fl(e)) throw (Dp(), Error(T(418)));
    for (; t; ) _p(e, t), (t = rn(t.nextSibling));
  }
  if ((hf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ge = rn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ge = null;
    }
  } else Ge = Ye ? rn(e.stateNode.nextSibling) : null;
  return !0;
}
function Dp() {
  for (var e = Ge; e; ) e = rn(e.nextSibling);
}
function gr() {
  (Ge = Ye = null), (Z = !1);
}
function xu(e) {
  ht === null ? (ht = [e]) : ht.push(e);
}
var Pv = Wt.ReactCurrentBatchConfig;
function zr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function no(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function pf(e) {
  var t = e._init;
  return t(e._payload);
}
function Lp(e) {
  function t(p, h) {
    if (e) {
      var m = p.deletions;
      m === null ? ((p.deletions = [h]), (p.flags |= 16)) : m.push(h);
    }
  }
  function n(p, h) {
    if (!e) return null;
    for (; h !== null; ) t(p, h), (h = h.sibling);
    return null;
  }
  function r(p, h) {
    for (p = new Map(); h !== null; )
      h.key !== null ? p.set(h.key, h) : p.set(h.index, h), (h = h.sibling);
    return p;
  }
  function i(p, h) {
    return (p = ln(p, h)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, h, m) {
    return (
      (p.index = m),
      e
        ? ((m = p.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((p.flags |= 2), h) : m)
            : ((p.flags |= 2), h))
        : ((p.flags |= 1048576), h)
    );
  }
  function s(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = ma(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function l(p, h, m, w) {
    var S = m.type;
    return S === bn
      ? c(p, h, m.props.children, w, m.key)
      : h !== null &&
        (h.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Yt &&
            pf(S) === h.type))
      ? ((w = i(h, m.props)), (w.ref = zr(p, h, m)), (w.return = p), w)
      : ((w = Co(m.type, m.key, m.props, null, p.mode, w)),
        (w.ref = zr(p, h, m)),
        (w.return = p),
        w);
  }
  function u(p, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = ga(m, p.mode, w)), (h.return = p), h)
      : ((h = i(h, m.children || [])), (h.return = p), h);
  }
  function c(p, h, m, w, S) {
    return h === null || h.tag !== 7
      ? ((h = _n(m, p.mode, w, S)), (h.return = p), h)
      : ((h = i(h, m)), (h.return = p), h);
  }
  function f(p, h, m) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ma("" + h, p.mode, m)), (h.return = p), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case bi:
          return (
            (m = Co(h.type, h.key, h.props, null, p.mode, m)),
            (m.ref = zr(p, null, h)),
            (m.return = p),
            m
          );
        case Hn:
          return (h = ga(h, p.mode, m)), (h.return = p), h;
        case Yt:
          var w = h._init;
          return f(p, w(h._payload), m);
      }
      if (br(h) || Ir(h))
        return (h = _n(h, p.mode, m, null)), (h.return = p), h;
      no(p, h);
    }
    return null;
  }
  function d(p, h, m, w) {
    var S = h !== null ? h.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return S !== null ? null : a(p, h, "" + m, w);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case bi:
          return m.key === S ? l(p, h, m, w) : null;
        case Hn:
          return m.key === S ? u(p, h, m, w) : null;
        case Yt:
          return (S = m._init), d(p, h, S(m._payload), w);
      }
      if (br(m) || Ir(m)) return S !== null ? null : c(p, h, m, w, null);
      no(p, m);
    }
    return null;
  }
  function g(p, h, m, w, S) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (p = p.get(m) || null), a(h, p, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case bi:
          return (p = p.get(w.key === null ? m : w.key) || null), l(h, p, w, S);
        case Hn:
          return (p = p.get(w.key === null ? m : w.key) || null), u(h, p, w, S);
        case Yt:
          var x = w._init;
          return g(p, h, m, x(w._payload), S);
      }
      if (br(w) || Ir(w)) return (p = p.get(m) || null), c(h, p, w, S, null);
      no(h, w);
    }
    return null;
  }
  function y(p, h, m, w) {
    for (
      var S = null, x = null, P = h, C = (h = 0), V = null;
      P !== null && C < m.length;
      C++
    ) {
      P.index > C ? ((V = P), (P = null)) : (V = P.sibling);
      var _ = d(p, P, m[C], w);
      if (_ === null) {
        P === null && (P = V);
        break;
      }
      e && P && _.alternate === null && t(p, P),
        (h = o(_, h, C)),
        x === null ? (S = _) : (x.sibling = _),
        (x = _),
        (P = V);
    }
    if (C === m.length) return n(p, P), Z && Sn(p, C), S;
    if (P === null) {
      for (; C < m.length; C++)
        (P = f(p, m[C], w)),
          P !== null &&
            ((h = o(P, h, C)), x === null ? (S = P) : (x.sibling = P), (x = P));
      return Z && Sn(p, C), S;
    }
    for (P = r(p, P); C < m.length; C++)
      (V = g(P, p, C, m[C], w)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? C : V.key),
          (h = o(V, h, C)),
          x === null ? (S = V) : (x.sibling = V),
          (x = V));
    return (
      e &&
        P.forEach(function (b) {
          return t(p, b);
        }),
      Z && Sn(p, C),
      S
    );
  }
  function v(p, h, m, w) {
    var S = Ir(m);
    if (typeof S != "function") throw Error(T(150));
    if (((m = S.call(m)), m == null)) throw Error(T(151));
    for (
      var x = (S = null), P = h, C = (h = 0), V = null, _ = m.next();
      P !== null && !_.done;
      C++, _ = m.next()
    ) {
      P.index > C ? ((V = P), (P = null)) : (V = P.sibling);
      var b = d(p, P, _.value, w);
      if (b === null) {
        P === null && (P = V);
        break;
      }
      e && P && b.alternate === null && t(p, P),
        (h = o(b, h, C)),
        x === null ? (S = b) : (x.sibling = b),
        (x = b),
        (P = V);
    }
    if (_.done) return n(p, P), Z && Sn(p, C), S;
    if (P === null) {
      for (; !_.done; C++, _ = m.next())
        (_ = f(p, _.value, w)),
          _ !== null &&
            ((h = o(_, h, C)), x === null ? (S = _) : (x.sibling = _), (x = _));
      return Z && Sn(p, C), S;
    }
    for (P = r(p, P); !_.done; C++, _ = m.next())
      (_ = g(P, p, C, _.value, w)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? C : _.key),
          (h = o(_, h, C)),
          x === null ? (S = _) : (x.sibling = _),
          (x = _));
    return (
      e &&
        P.forEach(function (G) {
          return t(p, G);
        }),
      Z && Sn(p, C),
      S
    );
  }
  function k(p, h, m, w) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === bn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case bi:
          e: {
            for (var S = m.key, x = h; x !== null; ) {
              if (x.key === S) {
                if (((S = m.type), S === bn)) {
                  if (x.tag === 7) {
                    n(p, x.sibling),
                      (h = i(x, m.props.children)),
                      (h.return = p),
                      (p = h);
                    break e;
                  }
                } else if (
                  x.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Yt &&
                    pf(S) === x.type)
                ) {
                  n(p, x.sibling),
                    (h = i(x, m.props)),
                    (h.ref = zr(p, x, m)),
                    (h.return = p),
                    (p = h);
                  break e;
                }
                n(p, x);
                break;
              } else t(p, x);
              x = x.sibling;
            }
            m.type === bn
              ? ((h = _n(m.props.children, p.mode, w, m.key)),
                (h.return = p),
                (p = h))
              : ((w = Co(m.type, m.key, m.props, null, p.mode, w)),
                (w.ref = zr(p, h, m)),
                (w.return = p),
                (p = w));
          }
          return s(p);
        case Hn:
          e: {
            for (x = m.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(p, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = p),
                    (p = h);
                  break e;
                } else {
                  n(p, h);
                  break;
                }
              else t(p, h);
              h = h.sibling;
            }
            (h = ga(m, p.mode, w)), (h.return = p), (p = h);
          }
          return s(p);
        case Yt:
          return (x = m._init), k(p, h, x(m._payload), w);
      }
      if (br(m)) return y(p, h, m, w);
      if (Ir(m)) return v(p, h, m, w);
      no(p, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        h !== null && h.tag === 6
          ? (n(p, h.sibling), (h = i(h, m)), (h.return = p), (p = h))
          : (n(p, h), (h = ma(m, p.mode, w)), (h.return = p), (p = h)),
        s(p))
      : n(p, h);
  }
  return k;
}
var yr = Lp(!0),
  Vp = Lp(!1),
  Ko = gn(null),
  Go = null,
  Jn = null,
  ku = null;
function Pu() {
  ku = Jn = Go = null;
}
function Cu(e) {
  var t = Ko.current;
  Q(Ko), (e._currentValue = t);
}
function hl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dr(e, t) {
  (Go = e),
    (ku = Jn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (ku !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Jn === null)) {
      if (Go === null) throw Error(T(308));
      (Jn = e), (Go.dependencies = { lanes: 0, firstContext: e });
    } else Jn = Jn.next = e;
  return t;
}
var Tn = null;
function Tu(e) {
  Tn === null ? (Tn = [e]) : Tn.push(e);
}
function Np(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Tu(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function Eu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ip(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Vt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function on(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Tu(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function vo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
function mf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yo(e, t, n, r) {
  var i = e.updateQueue;
  Xt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = te({}, f, d);
              break e;
            case 2:
              Xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (On |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function gf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var ji = {},
  Pt = gn(ji),
  Pi = gn(ji),
  Ci = gn(ji);
function En(e) {
  if (e === ji) throw Error(T(174));
  return e;
}
function Au(e, t) {
  switch ((K(Ci, t), K(Pi, e), K(Pt, ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ga(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ga(t, e));
  }
  Q(Pt), K(Pt, t);
}
function vr() {
  Q(Pt), Q(Pi), Q(Ci);
}
function $p(e) {
  En(Ci.current);
  var t = En(Pt.current),
    n = Ga(t, e.type);
  t !== n && (K(Pi, e), K(Pt, n));
}
function Ru(e) {
  Pi.current === e && (Q(Pt), Q(Pi));
}
var q = gn(0);
function Xo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ua = [];
function Mu() {
  for (var e = 0; e < ua.length; e++)
    ua[e]._workInProgressVersionPrimary = null;
  ua.length = 0;
}
var wo = Wt.ReactCurrentDispatcher,
  ca = Wt.ReactCurrentBatchConfig,
  $n = 0,
  ee = null,
  le = null,
  fe = null,
  Qo = !1,
  ni = !1,
  Ti = 0,
  Cv = 0;
function xe() {
  throw Error(T(321));
}
function _u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!yt(e[n], t[n])) return !1;
  return !0;
}
function Du(e, t, n, r, i, o) {
  if (
    (($n = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (wo.current = e === null || e.memoizedState === null ? Rv : Mv),
    (e = n(r, i)),
    ni)
  ) {
    o = 0;
    do {
      if (((ni = !1), (Ti = 0), 25 <= o)) throw Error(T(301));
      (o += 1),
        (fe = le = null),
        (t.updateQueue = null),
        (wo.current = _v),
        (e = n(r, i));
    } while (ni);
  }
  if (
    ((wo.current = Zo),
    (t = le !== null && le.next !== null),
    ($n = 0),
    (fe = le = ee = null),
    (Qo = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Lu() {
  var e = Ti !== 0;
  return (Ti = 0), e;
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function at() {
  if (le === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = le.next;
  var t = fe === null ? ee.memoizedState : fe.next;
  if (t !== null) (fe = t), (le = e);
  else {
    if (e === null) throw Error(T(310));
    (le = e),
      (e = {
        memoizedState: le.memoizedState,
        baseState: le.baseState,
        baseQueue: le.baseQueue,
        queue: le.queue,
        next: null,
      }),
      fe === null ? (ee.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Ei(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fa(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = le,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if (($n & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (ee.lanes |= c),
          (On |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      yt(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ee.lanes |= o), (On |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function da(e) {
  var t = at(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    yt(o, t.memoizedState) || (Ne = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Op() {}
function jp(e, t) {
  var n = ee,
    r = at(),
    i = t(),
    o = !yt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Ne = !0)),
    (r = r.queue),
    Vu(Bp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ai(9, zp.bind(null, n, r, i, t), void 0, null),
      pe === null)
    )
      throw Error(T(349));
    $n & 30 || Fp(n, t, i);
  }
  return i;
}
function Fp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function zp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Up(t) && Wp(e);
}
function Bp(e, t, n) {
  return n(function () {
    Up(t) && Wp(e);
  });
}
function Up(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !yt(e, n);
  } catch {
    return !0;
  }
}
function Wp(e) {
  var t = zt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function yf(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ei,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Av.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Ai(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Hp() {
  return at().memoizedState;
}
function So(e, t, n, r) {
  var i = wt();
  (ee.flags |= e),
    (i.memoizedState = Ai(1 | t, n, void 0, r === void 0 ? null : r));
}
function xs(e, t, n, r) {
  var i = at();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (le !== null) {
    var s = le.memoizedState;
    if (((o = s.destroy), r !== null && _u(r, s.deps))) {
      i.memoizedState = Ai(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = Ai(1 | t, n, o, r));
}
function vf(e, t) {
  return So(8390656, 8, e, t);
}
function Vu(e, t) {
  return xs(2048, 8, e, t);
}
function bp(e, t) {
  return xs(4, 2, e, t);
}
function Kp(e, t) {
  return xs(4, 4, e, t);
}
function Gp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Yp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xs(4, 4, Gp.bind(null, t, e), n)
  );
}
function Nu() {}
function Xp(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Qp(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Zp(e, t, n) {
  return $n & 21
    ? (yt(n, t) || ((n = np()), (ee.lanes |= n), (On |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Tv(e, t) {
  var n = H;
  (H = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ca.transition;
  ca.transition = {};
  try {
    e(!1), t();
  } finally {
    (H = n), (ca.transition = r);
  }
}
function qp() {
  return at().memoizedState;
}
function Ev(e, t, n) {
  var r = an(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jp(e))
  )
    em(t, n);
  else if (((n = Np(e, t, n, r)), n !== null)) {
    var i = Me();
    mt(n, e, r, i), tm(n, t, r);
  }
}
function Av(e, t, n) {
  var r = an(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jp(e)) em(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), yt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Tu(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Np(e, t, i, r)),
      n !== null && ((i = Me()), mt(n, e, r, i), tm(n, t, r));
  }
}
function Jp(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function em(e, t) {
  ni = Qo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fu(e, n);
  }
}
var Zo = {
    readContext: st,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Rv = {
    readContext: st,
    useCallback: function (e, t) {
      return (wt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: vf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        So(4194308, 4, Gp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return So(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return So(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ev.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: yf,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = yf(!1),
        t = e[0];
      return (e = Tv.bind(null, e[1])), (wt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = wt();
      if (Z) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(T(349));
        $n & 30 || Fp(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        vf(Bp.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ai(9, zp.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = pe.identifierPrefix;
      if (Z) {
        var n = Dt,
          r = _t;
        (n = (r & ~(1 << (32 - pt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Ti++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Cv++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mv = {
    readContext: st,
    useCallback: Xp,
    useContext: st,
    useEffect: Vu,
    useImperativeHandle: Yp,
    useInsertionEffect: bp,
    useLayoutEffect: Kp,
    useMemo: Qp,
    useReducer: fa,
    useRef: Hp,
    useState: function () {
      return fa(Ei);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = at();
      return Zp(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = fa(Ei)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Op,
    useSyncExternalStore: jp,
    useId: qp,
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: st,
    useCallback: Xp,
    useContext: st,
    useEffect: Vu,
    useImperativeHandle: Yp,
    useInsertionEffect: bp,
    useLayoutEffect: Kp,
    useMemo: Qp,
    useReducer: da,
    useRef: Hp,
    useState: function () {
      return da(Ei);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = at();
      return le === null ? (t.memoizedState = e) : Zp(t, le.memoizedState, e);
    },
    useTransition: function () {
      var e = da(Ei)[0],
        t = at().memoizedState;
      return [e, t];
    },
    useMutableSource: Op,
    useSyncExternalStore: jp,
    useId: qp,
    unstable_isNewReconciler: !1,
  };
function ft(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function pl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ks = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      i = an(e),
      o = Vt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = on(e, o, i)),
      t !== null && (mt(t, e, i, r), vo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      i = an(e),
      o = Vt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = on(e, o, i)),
      t !== null && (mt(t, e, i, r), vo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = an(e),
      i = Vt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = on(e, i, r)),
      t !== null && (mt(t, e, r, n), vo(t, e, r));
  },
};
function wf(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !wi(n, r) || !wi(i, o)
      : !0
  );
}
function nm(e, t, n) {
  var r = !1,
    i = cn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = st(o))
      : ((i = Oe(t) ? Nn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? mr(e, i) : cn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ks),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Sf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ks.enqueueReplaceState(t, t.state, null);
}
function ml(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Eu(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = st(o))
    : ((o = Oe(t) ? Nn : Ee.current), (i.context = mr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (pl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ks.enqueueReplaceState(i, i.state, null),
      Yo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function wr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += iy(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ha(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Dv = typeof WeakMap == "function" ? WeakMap : Map;
function rm(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jo || ((Jo = !0), (El = r)), gl(e, t);
    }),
    n
  );
}
function im(e, t, n) {
  (n = Vt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        gl(e, t),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function xf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Dv();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = bv.bind(null, e, t, n)), t.then(e, e));
}
function kf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Pf(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Vt(-1, 1)), (t.tag = 2), on(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lv = Wt.ReactCurrentOwner,
  Ne = !1;
function Re(e, t, n, r) {
  t.child = e === null ? Vp(t, null, n, r) : yr(t, e.child, n, r);
}
function Cf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    dr(t, i),
    (r = Du(e, t, n, r, o, i)),
    (n = Lu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (Z && n && wu(t), (t.flags |= 1), Re(e, t, r, i), t.child)
  );
}
function Tf(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Uu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), om(e, t, o, r, i))
      : ((e = Co(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : wi), n(s, r) && e.ref === t.ref)
    )
      return Bt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = ln(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function om(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (wi(o, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Bt(e, t, i);
  }
  return yl(e, t, n, r, i);
}
function sm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(tr, He),
        (He |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(tr, He),
          (He |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(tr, He),
        (He |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(tr, He),
      (He |= r);
  return Re(e, t, i, n), t.child;
}
function am(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yl(e, t, n, r, i) {
  var o = Oe(n) ? Nn : Ee.current;
  return (
    (o = mr(t, o)),
    dr(t, i),
    (n = Du(e, t, n, r, o, i)),
    (r = Lu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (Z && r && wu(t), (t.flags |= 1), Re(e, t, n, i), t.child)
  );
}
function Ef(e, t, n, r, i) {
  if (Oe(n)) {
    var o = !0;
    Wo(t);
  } else o = !1;
  if ((dr(t, i), t.stateNode === null))
    xo(e, t), nm(t, n, r), ml(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = st(u))
      : ((u = Oe(n) ? Nn : Ee.current), (u = mr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Sf(t, s, r, u)),
      (Xt = !1);
    var d = t.memoizedState;
    (s.state = d),
      Yo(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || $e.current || Xt
        ? (typeof c == "function" && (pl(t, n, c, r), (l = t.memoizedState)),
          (a = Xt || wf(t, n, a, r, d, l, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ip(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ft(t.type, a)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = st(l))
        : ((l = Oe(n) ? Nn : Ee.current), (l = mr(t, l)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && Sf(t, s, r, l)),
      (Xt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Yo(t, r, s, i);
    var y = t.memoizedState;
    a !== f || d !== y || $e.current || Xt
      ? (typeof g == "function" && (pl(t, n, g, r), (y = t.memoizedState)),
        (u = Xt || wf(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return vl(e, t, n, r, o, i);
}
function vl(e, t, n, r, i, o) {
  am(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && ff(t, n, !1), Bt(e, t, o);
  (r = t.stateNode), (Lv.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = yr(t, e.child, null, o)), (t.child = yr(t, null, a, o)))
      : Re(e, t, a, o),
    (t.memoizedState = r.state),
    i && ff(t, n, !0),
    t.child
  );
}
function lm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cf(e, t.context, !1),
    Au(e, t.containerInfo);
}
function Af(e, t, n, r, i) {
  return gr(), xu(i), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function um(e, t, n) {
  var r = t.pendingProps,
    i = q.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    K(q, i & 1),
    e === null)
  )
    return (
      dl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ts(s, r, 0, null)),
              (e = _n(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Sl(n)),
              (t.memoizedState = wl),
              e)
            : Iu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return Vv(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = ln(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = ln(a, o)) : ((o = _n(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Sl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = wl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ln(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Iu(e, t) {
  return (
    (t = Ts({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ro(e, t, n, r) {
  return (
    r !== null && xu(r),
    yr(t, e.child, null, n),
    (e = Iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vv(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ha(Error(T(422)))), ro(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ts({ mode: "visible", children: r.children }, i, 0, null)),
        (o = _n(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && yr(t, e.child, null, s),
        (t.child.memoizedState = Sl(s)),
        (t.memoizedState = wl),
        o);
  if (!(t.mode & 1)) return ro(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(T(419))), (r = ha(o, r, void 0)), ro(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Ne || a)) {
    if (((r = pe), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), zt(e, i), mt(r, e, i, -1));
    }
    return Bu(), (r = ha(Error(T(421)))), ro(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Kv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ge = rn(i.nextSibling)),
      (Ye = t),
      (Z = !0),
      (ht = null),
      e !== null &&
        ((nt[rt++] = _t),
        (nt[rt++] = Dt),
        (nt[rt++] = In),
        (_t = e.id),
        (Dt = e.overflow),
        (In = t)),
      (t = Iu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Rf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hl(e.return, t, n);
}
function pa(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function cm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Re(e, t, r.children, n), (r = q.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Rf(e, n, t);
        else if (e.tag === 19) Rf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(q, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Xo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          pa(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Xo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        pa(t, !0, n, null, o);
        break;
      case "together":
        pa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (On |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nv(e, t, n) {
  switch (t.tag) {
    case 3:
      lm(t), gr();
      break;
    case 5:
      $p(t);
      break;
    case 1:
      Oe(t.type) && Wo(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      K(Ko, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(q, q.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? um(e, t, n)
          : (K(q, q.current & 1),
            (e = Bt(e, t, n)),
            e !== null ? e.sibling : null);
      K(q, q.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(q, q.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), sm(e, t, n);
  }
  return Bt(e, t, n);
}
var fm, xl, dm, hm;
fm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
xl = function () {};
dm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), En(Pt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Wa(e, i)), (r = Wa(e, r)), (o = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ka(e, i)), (r = Ka(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Bo);
    }
    Ya(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (di.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (di.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && Y("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
hm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Br(e, t) {
  if (!Z)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Iv(e, t, n) {
  var r = t.pendingProps;
  switch ((Su(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return Oe(t.type) && Uo(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        vr(),
        Q($e),
        Q(Ee),
        Mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (to(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ht !== null && (Ml(ht), (ht = null)))),
        xl(e, t),
        ke(t),
        null
      );
    case 5:
      Ru(t);
      var i = En(Ci.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return ke(t), null;
        }
        if (((e = En(Pt.current)), to(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[xt] = t), (r[ki] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Gr.length; i++) Y(Gr[i], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y("error", r), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              $c(r, o), Y("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Y("invalid", r);
              break;
            case "textarea":
              jc(r, o), Y("invalid", r);
          }
          Ya(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      eo(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      eo(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : di.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Y("scroll", r);
            }
          switch (n) {
            case "input":
              Ki(r), Oc(r, o, !0);
              break;
            case "textarea":
              Ki(r), Fc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Bo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Bh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[xt] = t),
            (e[ki] = r),
            fm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Xa(n, r)), n)) {
              case "dialog":
                Y("cancel", e), Y("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Gr.length; i++) Y(Gr[i], e);
                i = r;
                break;
              case "source":
                Y("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                Y("error", e), Y("load", e), (i = r);
                break;
              case "details":
                Y("toggle", e), (i = r);
                break;
              case "input":
                $c(e, r), (i = Wa(e, r)), Y("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  Y("invalid", e);
                break;
              case "textarea":
                jc(e, r), (i = Ka(e, r)), Y("invalid", e);
                break;
              default:
                i = r;
            }
            Ya(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Hh(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Uh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && hi(e, l)
                    : typeof l == "number" && hi(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (di.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && Y("scroll", e)
                      : l != null && ou(e, o, l, s));
              }
            switch (n) {
              case "input":
                Ki(e), Oc(e, r, !1);
                break;
              case "textarea":
                Ki(e), Fc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? lr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Bo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) hm(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = En(Ci.current)), En(Pt.current), to(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (o = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                eo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  eo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (Q(q),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Z && Ge !== null && t.mode & 1 && !(t.flags & 128))
          Dp(), gr(), (t.flags |= 98560), (o = !1);
        else if (((o = to(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(T(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(T(317));
            o[xt] = t;
          } else
            gr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (o = !1);
        } else ht !== null && (Ml(ht), (ht = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || q.current & 1 ? ue === 0 && (ue = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        vr(), xl(e, t), e === null && Si(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return Cu(t.type._context), ke(t), null;
    case 17:
      return Oe(t.type) && Uo(), ke(t), null;
    case 19:
      if ((Q(q), (o = t.memoizedState), o === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Br(o, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Xo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Br(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(q, (q.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > Sr &&
            ((t.flags |= 128), (r = !0), Br(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Br(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Z)
            )
              return ke(t), null;
          } else
            2 * ie() - o.renderingStartTime > Sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Br(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = q.current),
          K(q, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        zu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? He & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function $v(e, t) {
  switch ((Su(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && Uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        vr(),
        Q($e),
        Q(Ee),
        Mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ru(t), null;
    case 13:
      if ((Q(q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        gr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Q(q), null;
    case 4:
      return vr(), null;
    case 10:
      return Cu(t.type._context), null;
    case 22:
    case 23:
      return zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var io = !1,
  Ce = !1,
  Ov = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function kl(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var Mf = !1;
function jv(e, t) {
  if (((ol = jo), (e = vp()), vu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++c === r && (l = s),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (sl = { focusedElem: e, selectionRange: n }, jo = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    k = y.memoizedState,
                    p = t.stateNode,
                    h = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ft(t.type, v),
                      k
                    );
                  p.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = Mf), (Mf = !1), y;
}
function ri(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && kl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ps(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Pl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[ki], delete t[ul], delete t[Sv], delete t[xv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _f(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Bo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Cl(e, t, n), e = e.sibling; e !== null; ) Cl(e, t, n), (e = e.sibling);
}
function Tl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Tl(e, t, n), e = e.sibling; e !== null; ) Tl(e, t, n), (e = e.sibling);
}
var ge = null,
  dt = !1;
function bt(e, t, n) {
  for (n = n.child; n !== null; ) gm(e, t, n), (n = n.sibling);
}
function gm(e, t, n) {
  if (kt && typeof kt.onCommitFiberUnmount == "function")
    try {
      kt.onCommitFiberUnmount(ms, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ce || er(n, t);
    case 6:
      var r = ge,
        i = dt;
      (ge = null),
        bt(e, t, n),
        (ge = r),
        (dt = i),
        ge !== null &&
          (dt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (dt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? aa(e.parentNode, n)
              : e.nodeType === 1 && aa(e, n),
            yi(e))
          : aa(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = dt),
        (ge = n.stateNode.containerInfo),
        (dt = !0),
        bt(e, t, n),
        (ge = r),
        (dt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ce &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && kl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      bt(e, t, n);
      break;
    case 1:
      if (
        !Ce &&
        (er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ne(n, t, a);
        }
      bt(e, t, n);
      break;
    case 21:
      bt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ce = (r = Ce) || n.memoizedState !== null), bt(e, t, n), (Ce = r))
        : bt(e, t, n);
      break;
    default:
      bt(e, t, n);
  }
}
function Df(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ov()),
      t.forEach(function (r) {
        var i = Gv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function ct(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (dt = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (dt = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (dt = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(T(160));
        gm(o, s, i), (ge = null), (dt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ne(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ym(t, e), (t = t.sibling);
}
function ym(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ct(t, e), vt(e), r & 4)) {
        try {
          ri(3, e, e.return), Ps(3, e);
        } catch (v) {
          ne(e, e.return, v);
        }
        try {
          ri(5, e, e.return);
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      break;
    case 1:
      ct(t, e), vt(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if (
        (ct(t, e),
        vt(e),
        r & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          hi(i, "");
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Fh(i, o),
              Xa(a, s);
            var u = Xa(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                f = l[s + 1];
              c === "style"
                ? Hh(i, f)
                : c === "dangerouslySetInnerHTML"
                ? Uh(i, f)
                : c === "children"
                ? hi(i, f)
                : ou(i, c, f, u);
            }
            switch (a) {
              case "input":
                Ha(i, o);
                break;
              case "textarea":
                zh(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? lr(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? lr(i, !!o.multiple, o.defaultValue, !0)
                      : lr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ki] = o;
          } catch (v) {
            ne(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ct(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          ne(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ct(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          yi(t.containerInfo);
        } catch (v) {
          ne(e, e.return, v);
        }
      break;
    case 4:
      ct(t, e), vt(e);
      break;
    case 13:
      ct(t, e),
        vt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (ju = ie())),
        r & 4 && Df(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ce = (u = Ce) || c), ct(t, e), (Ce = u)) : ct(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (M = e, c = e.child; c !== null; ) {
            for (f = M = c; M !== null; ) {
              switch (((d = M), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ri(4, d, d.return);
                  break;
                case 1:
                  er(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      ne(r, n, v);
                    }
                  }
                  break;
                case 5:
                  er(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Vf(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (M = g)) : Vf(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Wh("display", s)));
              } catch (v) {
                ne(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                ne(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      ct(t, e), vt(e), r & 4 && Df(e);
      break;
    case 21:
      break;
    default:
      ct(t, e), vt(e);
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (hi(i, ""), (r.flags &= -33));
          var o = _f(e);
          Tl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = _f(e);
          Cl(e, a, s);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      ne(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Fv(e, t, n) {
  (M = e), vm(e);
}
function vm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || io;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ce;
        a = io;
        var u = Ce;
        if (((io = s), (Ce = l) && !u))
          for (M = i; M !== null; )
            (s = M),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Nf(i)
                : l !== null
                ? ((l.return = s), (M = l))
                : Nf(i);
        for (; o !== null; ) (M = o), vm(o), (o = o.sibling);
        (M = i), (io = a), (Ce = u);
      }
      Lf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (M = o)) : Lf(e);
  }
}
function Lf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ce || Ps(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ce)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ft(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && gf(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gf(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && yi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Ce || (t.flags & 512 && Pl(t));
      } catch (d) {
        ne(t, t.return, d);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Vf(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Nf(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ps(4, t);
          } catch (l) {
            ne(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ne(t, i, l);
            }
          }
          var o = t.return;
          try {
            Pl(t);
          } catch (l) {
            ne(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Pl(t);
          } catch (l) {
            ne(t, s, l);
          }
      }
    } catch (l) {
      ne(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var zv = Math.ceil,
  qo = Wt.ReactCurrentDispatcher,
  $u = Wt.ReactCurrentOwner,
  ot = Wt.ReactCurrentBatchConfig,
  F = 0,
  pe = null,
  ae = null,
  ve = 0,
  He = 0,
  tr = gn(0),
  ue = 0,
  Ri = null,
  On = 0,
  Cs = 0,
  Ou = 0,
  ii = null,
  Ve = null,
  ju = 0,
  Sr = 1 / 0,
  At = null,
  Jo = !1,
  El = null,
  sn = null,
  oo = !1,
  Jt = null,
  es = 0,
  oi = 0,
  Al = null,
  ko = -1,
  Po = 0;
function Me() {
  return F & 6 ? ie() : ko !== -1 ? ko : (ko = ie());
}
function an(e) {
  return e.mode & 1
    ? F & 2 && ve !== 0
      ? ve & -ve
      : Pv.transition !== null
      ? (Po === 0 && (Po = np()), Po)
      : ((e = H),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : up(e.type))),
        e)
    : 1;
}
function mt(e, t, n, r) {
  if (50 < oi) throw ((oi = 0), (Al = null), Error(T(185)));
  Ii(e, n, r),
    (!(F & 2) || e !== pe) &&
      (e === pe && (!(F & 2) && (Cs |= n), ue === 4 && Zt(e, ve)),
      je(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((Sr = ie() + 500), Ss && yn()));
}
function je(e, t) {
  var n = e.callbackNode;
  Py(e, t);
  var r = Oo(e, e === pe ? ve : 0);
  if (r === 0)
    n !== null && Uc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Uc(n), t === 1))
      e.tag === 0 ? kv(If.bind(null, e)) : Rp(If.bind(null, e)),
        vv(function () {
          !(F & 6) && yn();
        }),
        (n = null);
    else {
      switch (rp(r)) {
        case 1:
          n = cu;
          break;
        case 4:
          n = ep;
          break;
        case 16:
          n = $o;
          break;
        case 536870912:
          n = tp;
          break;
        default:
          n = $o;
      }
      n = Em(n, wm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wm(e, t) {
  if (((ko = -1), (Po = 0), F & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = Oo(e, e === pe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ts(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var o = xm();
    (pe !== e || ve !== t) && ((At = null), (Sr = ie() + 500), Mn(e, t));
    do
      try {
        Wv();
        break;
      } catch (a) {
        Sm(e, a);
      }
    while (!0);
    Pu(),
      (qo.current = o),
      (F = i),
      ae !== null ? (t = 0) : ((pe = null), (ve = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = el(e)), i !== 0 && ((r = i), (t = Rl(e, i)))), t === 1)
    )
      throw ((n = Ri), Mn(e, 0), Zt(e, r), je(e, ie()), n);
    if (t === 6) Zt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Bv(i) &&
          ((t = ts(e, r)),
          t === 2 && ((o = el(e)), o !== 0 && ((r = o), (t = Rl(e, o)))),
          t === 1))
      )
        throw ((n = Ri), Mn(e, 0), Zt(e, r), je(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          xn(e, Ve, At);
          break;
        case 3:
          if (
            (Zt(e, r), (r & 130023424) === r && ((t = ju + 500 - ie()), 10 < t))
          ) {
            if (Oo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ll(xn.bind(null, e, Ve, At), t);
            break;
          }
          xn(e, Ve, At);
          break;
        case 4:
          if ((Zt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - pt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * zv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ll(xn.bind(null, e, Ve, At), r);
            break;
          }
          xn(e, Ve, At);
          break;
        case 5:
          xn(e, Ve, At);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return je(e, ie()), e.callbackNode === n ? wm.bind(null, e) : null;
}
function Rl(e, t) {
  var n = ii;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = ts(e, t)),
    e !== 2 && ((t = Ve), (Ve = n), t !== null && Ml(t)),
    e
  );
}
function Ml(e) {
  Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
}
function Bv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!yt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Zt(e, t) {
  for (
    t &= ~Ou,
      t &= ~Cs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - pt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function If(e) {
  if (F & 6) throw Error(T(327));
  hr();
  var t = Oo(e, 0);
  if (!(t & 1)) return je(e, ie()), null;
  var n = ts(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = el(e);
    r !== 0 && ((t = r), (n = Rl(e, r)));
  }
  if (n === 1) throw ((n = Ri), Mn(e, 0), Zt(e, t), je(e, ie()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, Ve, At),
    je(e, ie()),
    null
  );
}
function Fu(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((Sr = ie() + 500), Ss && yn());
  }
}
function jn(e) {
  Jt !== null && Jt.tag === 0 && !(F & 6) && hr();
  var t = F;
  F |= 1;
  var n = ot.transition,
    r = H;
  try {
    if (((ot.transition = null), (H = 1), e)) return e();
  } finally {
    (H = r), (ot.transition = n), (F = t), !(F & 6) && yn();
  }
}
function zu() {
  (He = tr.current), Q(tr);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), yv(n)), ae !== null))
    for (n = ae.return; n !== null; ) {
      var r = n;
      switch ((Su(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uo();
          break;
        case 3:
          vr(), Q($e), Q(Ee), Mu();
          break;
        case 5:
          Ru(r);
          break;
        case 4:
          vr();
          break;
        case 13:
          Q(q);
          break;
        case 19:
          Q(q);
          break;
        case 10:
          Cu(r.type._context);
          break;
        case 22:
        case 23:
          zu();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ae = e = ln(e.current, null)),
    (ve = He = t),
    (ue = 0),
    (Ri = null),
    (Ou = Cs = On = 0),
    (Ve = ii = null),
    Tn !== null)
  ) {
    for (t = 0; t < Tn.length; t++)
      if (((n = Tn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    Tn = null;
  }
  return e;
}
function Sm(e, t) {
  do {
    var n = ae;
    try {
      if ((Pu(), (wo.current = Zo), Qo)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Qo = !1;
      }
      if (
        (($n = 0),
        (fe = le = ee = null),
        (ni = !1),
        (Ti = 0),
        ($u.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Ri = t), (ae = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ve),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = kf(s);
          if (g !== null) {
            (g.flags &= -257),
              Pf(g, s, a, o, t),
              g.mode & 1 && xf(o, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              xf(o, u, t), Bu();
              break e;
            }
            l = Error(T(426));
          }
        } else if (Z && a.mode & 1) {
          var k = kf(s);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Pf(k, s, a, o, t),
              xu(wr(l, a));
            break e;
          }
        }
        (o = l = wr(l, a)),
          ue !== 4 && (ue = 2),
          ii === null ? (ii = [o]) : ii.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = rm(o, l, t);
              mf(o, p);
              break e;
            case 1:
              a = l;
              var h = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (sn === null || !sn.has(m))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = im(o, a, t);
                mf(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Pm(n);
    } catch (S) {
      (t = S), ae === n && n !== null && (ae = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xm() {
  var e = qo.current;
  return (qo.current = Zo), e === null ? Zo : e;
}
function Bu() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    pe === null || (!(On & 268435455) && !(Cs & 268435455)) || Zt(pe, ve);
}
function ts(e, t) {
  var n = F;
  F |= 2;
  var r = xm();
  (pe !== e || ve !== t) && ((At = null), Mn(e, t));
  do
    try {
      Uv();
      break;
    } catch (i) {
      Sm(e, i);
    }
  while (!0);
  if ((Pu(), (F = n), (qo.current = r), ae !== null)) throw Error(T(261));
  return (pe = null), (ve = 0), ue;
}
function Uv() {
  for (; ae !== null; ) km(ae);
}
function Wv() {
  for (; ae !== null && !py(); ) km(ae);
}
function km(e) {
  var t = Tm(e.alternate, e, He);
  (e.memoizedProps = e.pendingProps),
    t === null ? Pm(e) : (ae = t),
    ($u.current = null);
}
function Pm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = $v(n, t)), n !== null)) {
        (n.flags &= 32767), (ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (ae = null);
        return;
      }
    } else if (((n = Iv(n, t, He)), n !== null)) {
      ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ae = t;
      return;
    }
    ae = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function xn(e, t, n) {
  var r = H,
    i = ot.transition;
  try {
    (ot.transition = null), (H = 1), Hv(e, t, n, r);
  } finally {
    (ot.transition = i), (H = r);
  }
  return null;
}
function Hv(e, t, n, r) {
  do hr();
  while (Jt !== null);
  if (F & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Cy(e, o),
    e === pe && ((ae = pe = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      oo ||
      ((oo = !0),
      Em($o, function () {
        return hr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ot.transition), (ot.transition = null);
    var s = H;
    H = 1;
    var a = F;
    (F |= 4),
      ($u.current = null),
      jv(e, n),
      ym(n, e),
      cv(sl),
      (jo = !!ol),
      (sl = ol = null),
      (e.current = n),
      Fv(n),
      my(),
      (F = a),
      (H = s),
      (ot.transition = o);
  } else e.current = n;
  if (
    (oo && ((oo = !1), (Jt = e), (es = i)),
    (o = e.pendingLanes),
    o === 0 && (sn = null),
    vy(n.stateNode),
    je(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Jo) throw ((Jo = !1), (e = El), (El = null), e);
  return (
    es & 1 && e.tag !== 0 && hr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Al ? oi++ : ((oi = 0), (Al = e))) : (oi = 0),
    yn(),
    null
  );
}
function hr() {
  if (Jt !== null) {
    var e = rp(es),
      t = ot.transition,
      n = H;
    try {
      if (((ot.transition = null), (H = 16 > e ? 16 : e), Jt === null))
        var r = !1;
      else {
        if (((e = Jt), (Jt = null), (es = 0), F & 6)) throw Error(T(331));
        var i = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var o = M,
            s = o.child;
          if (M.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (M = u; M !== null; ) {
                  var c = M;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ri(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (M = f);
                  else
                    for (; M !== null; ) {
                      c = M;
                      var d = c.sibling,
                        g = c.return;
                      if ((pm(c), c === u)) {
                        M = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (M = d);
                        break;
                      }
                      M = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var k = v.sibling;
                    (v.sibling = null), (v = k);
                  } while (v !== null);
                }
              }
              M = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (M = s);
          else
            e: for (; M !== null; ) {
              if (((o = M), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ri(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (M = p);
                break e;
              }
              M = o.return;
            }
        }
        var h = e.current;
        for (M = h; M !== null; ) {
          s = M;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) (m.return = s), (M = m);
          else
            e: for (s = h; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ps(9, a);
                  }
                } catch (S) {
                  ne(a, a.return, S);
                }
              if (a === s) {
                M = null;
                break e;
              }
              var w = a.sibling;
              if (w !== null) {
                (w.return = a.return), (M = w);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((F = i), yn(), kt && typeof kt.onPostCommitFiberRoot == "function")
        )
          try {
            kt.onPostCommitFiberRoot(ms, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (H = n), (ot.transition = t);
    }
  }
  return !1;
}
function $f(e, t, n) {
  (t = wr(n, t)),
    (t = rm(e, t, 1)),
    (e = on(e, t, 1)),
    (t = Me()),
    e !== null && (Ii(e, 1, t), je(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) $f(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $f(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = wr(n, e)),
            (e = im(t, e, 1)),
            (t = on(t, e, 1)),
            (e = Me()),
            t !== null && (Ii(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (ve & n) === n &&
      (ue === 4 || (ue === 3 && (ve & 130023424) === ve && 500 > ie() - ju)
        ? Mn(e, 0)
        : (Ou |= n)),
    je(e, t);
}
function Cm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Xi), (Xi <<= 1), !(Xi & 130023424) && (Xi = 4194304))
      : (t = 1));
  var n = Me();
  (e = zt(e, t)), e !== null && (Ii(e, t, n), je(e, n));
}
function Kv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Cm(e, n);
}
function Gv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Cm(e, n);
}
var Tm;
Tm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), Nv(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), Z && t.flags & 1048576 && Mp(t, bo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      xo(e, t), (e = t.pendingProps);
      var i = mr(t, Ee.current);
      dr(t, n), (i = Du(null, t, r, e, i, n));
      var o = Lu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((o = !0), Wo(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Eu(t),
            (i.updater = ks),
            (t.stateNode = i),
            (i._reactInternals = t),
            ml(t, r, e, n),
            (t = vl(null, t, r, !0, o, n)))
          : ((t.tag = 0), Z && o && wu(t), Re(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (xo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Xv(r)),
          (e = ft(r, e)),
          i)
        ) {
          case 0:
            t = yl(null, t, r, e, n);
            break e;
          case 1:
            t = Ef(null, t, r, e, n);
            break e;
          case 11:
            t = Cf(null, t, r, e, n);
            break e;
          case 14:
            t = Tf(null, t, r, ft(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        yl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Ef(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((lm(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ip(e, t),
          Yo(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = wr(Error(T(423)), t)), (t = Af(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = wr(Error(T(424)), t)), (t = Af(e, t, r, n, i));
            break e;
          } else
            for (
              Ge = rn(t.stateNode.containerInfo.firstChild),
                Ye = t,
                Z = !0,
                ht = null,
                n = Vp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gr(), r === i)) {
            t = Bt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $p(t),
        e === null && dl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        al(r, i) ? (s = null) : o !== null && al(r, o) && (t.flags |= 32),
        am(e, t),
        Re(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && dl(t), null;
    case 13:
      return um(e, t, n);
    case 4:
      return (
        Au(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = yr(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        Cf(e, t, r, i, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          K(Ko, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (yt(o.value, s)) {
            if (o.children === i.children && !$e.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Vt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      hl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(T(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  hl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Re(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        dr(t, n),
        (i = st(i)),
        (r = r(i)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ft(r, t.pendingProps)),
        (i = ft(r.type, i)),
        Tf(e, t, r, i, n)
      );
    case 15:
      return om(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ft(r, i)),
        xo(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), Wo(t)) : (e = !1),
        dr(t, n),
        nm(t, r, i),
        ml(t, r, i, n),
        vl(null, t, r, !0, e, n)
      );
    case 19:
      return cm(e, t, n);
    case 22:
      return sm(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Em(e, t) {
  return Jh(e, t);
}
function Yv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function it(e, t, n, r) {
  return new Yv(e, t, n, r);
}
function Uu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Xv(e) {
  if (typeof e == "function") return Uu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === lu) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = it(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Co(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Uu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case bn:
        return _n(n.children, i, o, t);
      case su:
        (s = 8), (i |= 8);
        break;
      case Fa:
        return (
          (e = it(12, n, t, i | 2)), (e.elementType = Fa), (e.lanes = o), e
        );
      case za:
        return (e = it(13, n, t, i)), (e.elementType = za), (e.lanes = o), e;
      case Ba:
        return (e = it(19, n, t, i)), (e.elementType = Ba), (e.lanes = o), e;
      case $h:
        return Ts(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Nh:
              s = 10;
              break e;
            case Ih:
              s = 9;
              break e;
            case au:
              s = 11;
              break e;
            case lu:
              s = 14;
              break e;
            case Yt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = it(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _n(e, t, n, r) {
  return (e = it(7, e, r, t)), (e.lanes = n), e;
}
function Ts(e, t, n, r) {
  return (
    (e = it(22, e, r, t)),
    (e.elementType = $h),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ma(e, t, n) {
  return (e = it(6, e, null, t)), (e.lanes = n), e;
}
function ga(e, t, n) {
  return (
    (t = it(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Qv(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Qs(0)),
    (this.expirationTimes = Qs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Qs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Qv(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = it(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Eu(o),
    e
  );
}
function Zv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Hn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Am(e) {
  if (!e) return cn;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Ap(e, n, t);
  }
  return t;
}
function Rm(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Wu(n, r, !0, e, i, o, s, a, l)),
    (e.context = Am(null)),
    (n = e.current),
    (r = Me()),
    (i = an(n)),
    (o = Vt(r, i)),
    (o.callback = t ?? null),
    on(n, o, i),
    (e.current.lanes = i),
    Ii(e, i, r),
    je(e, r),
    e
  );
}
function Es(e, t, n, r) {
  var i = t.current,
    o = Me(),
    s = an(i);
  return (
    (n = Am(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Vt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = on(i, t, s)),
    e !== null && (mt(e, i, s, o), vo(e, i, s)),
    s
  );
}
function ns(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Of(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Hu(e, t) {
  Of(e, t), (e = e.alternate) && Of(e, t);
}
function qv() {
  return null;
}
var Mm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function bu(e) {
  this._internalRoot = e;
}
As.prototype.render = bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Es(e, t, null, null);
};
As.prototype.unmount = bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jn(function () {
      Es(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function As(e) {
  this._internalRoot = e;
}
As.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sp();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    Qt.splice(n, 0, e), n === 0 && lp(e);
  }
};
function Ku(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function jf() {}
function Jv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ns(s);
        o.call(u);
      };
    }
    var s = Rm(t, r, e, 0, null, !1, !1, "", jf);
    return (
      (e._reactRootContainer = s),
      (e[Ft] = s.current),
      Si(e.nodeType === 8 ? e.parentNode : e),
      jn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ns(l);
      a.call(u);
    };
  }
  var l = Wu(e, 0, !1, null, null, !1, !1, "", jf);
  return (
    (e._reactRootContainer = l),
    (e[Ft] = l.current),
    Si(e.nodeType === 8 ? e.parentNode : e),
    jn(function () {
      Es(t, l, n, r);
    }),
    l
  );
}
function Ms(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ns(s);
        a.call(l);
      };
    }
    Es(t, s, e, i);
  } else s = Jv(n, t, e, i, r);
  return ns(s);
}
ip = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kr(t.pendingLanes);
        n !== 0 &&
          (fu(t, n | 1), je(t, ie()), !(F & 6) && ((Sr = ie() + 500), yn()));
      }
      break;
    case 13:
      jn(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var i = Me();
          mt(r, e, 1, i);
        }
      }),
        Hu(e, 1);
  }
};
du = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Me();
      mt(t, e, 134217728, n);
    }
    Hu(e, 134217728);
  }
};
op = function (e) {
  if (e.tag === 13) {
    var t = an(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Me();
      mt(n, e, t, r);
    }
    Hu(e, t);
  }
};
sp = function () {
  return H;
};
ap = function (e, t) {
  var n = H;
  try {
    return (H = e), t();
  } finally {
    H = n;
  }
};
Za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ha(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = ws(r);
            if (!i) throw Error(T(90));
            jh(r), Ha(r, i);
          }
        }
      }
      break;
    case "textarea":
      zh(e, n);
      break;
    case "select":
      (t = n.value), t != null && lr(e, !!n.multiple, t, !1);
  }
};
Gh = Fu;
Yh = jn;
var e1 = { usingClientEntryPoint: !1, Events: [Oi, Xn, ws, bh, Kh, Fu] },
  Ur = {
    findFiberByHostInstance: Cn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  t1 = {
    bundleType: Ur.bundleType,
    version: Ur.version,
    rendererPackageName: Ur.rendererPackageName,
    rendererConfig: Ur.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ur.findFiberByHostInstance || qv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var so = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!so.isDisabled && so.supportsFiber)
    try {
      (ms = so.inject(t1)), (kt = so);
    } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e1;
Ze.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ku(t)) throw Error(T(200));
  return Zv(e, t, null, n);
};
Ze.createRoot = function (e, t) {
  if (!Ku(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = Mm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Wu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ft] = t.current),
    Si(e.nodeType === 8 ? e.parentNode : e),
    new bu(t)
  );
};
Ze.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Zh(t)), (e = e === null ? null : e.stateNode), e;
};
Ze.flushSync = function (e) {
  return jn(e);
};
Ze.hydrate = function (e, t, n) {
  if (!Rs(t)) throw Error(T(200));
  return Ms(null, e, t, !0, n);
};
Ze.hydrateRoot = function (e, t, n) {
  if (!Ku(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Mm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Rm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Ft] = t.current),
    Si(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new As(t);
};
Ze.render = function (e, t, n) {
  if (!Rs(t)) throw Error(T(200));
  return Ms(null, e, t, !1, n);
};
Ze.unmountComponentAtNode = function (e) {
  if (!Rs(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (jn(function () {
        Ms(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
Ze.unstable_batchedUpdates = Fu;
Ze.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rs(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return Ms(e, t, n, !1, r);
};
Ze.version = "18.3.1-next-f1338f8080-20240426";
function _m() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_m);
    } catch (e) {
      console.error(e);
    }
}
_m(), (_h.exports = Ze);
var n1 = _h.exports,
  Dm,
  Ff = n1;
(Dm = Ff.createRoot), Ff.hydrateRoot;
function r1(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
function _s(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const _l = (e) => Array.isArray(e);
function Lm(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Mi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function zf(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Gu(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = zf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = zf(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function Ds(e, t, n) {
  const r = e.getProps();
  return Gu(r, t, n !== void 0 ? n : r.custom, e);
}
const Yu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Xu = ["initial", ...Yu],
  Fi = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Bn = new Set(Fi),
  Nt = (e) => e * 1e3,
  It = (e) => e / 1e3,
  i1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  o1 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  s1 = { type: "keyframes", duration: 0.8 },
  a1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  l1 = (e, { keyframes: t }) =>
    t.length > 2
      ? s1
      : Bn.has(e)
      ? e.startsWith("scale")
        ? o1(t[1])
        : i1
      : a1;
function Qu(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const u1 = { skipAnimations: !1, useManualTiming: !1 },
  c1 = (e) => e !== null;
function Ls(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(c1),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const Te = (e) => e;
function f1(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const o = new WeakSet();
  let s = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    o.has(u) && (l.schedule(u), e()), u(s);
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return c && o.add(u), g.has(u) || g.add(u), u;
    },
    cancel: (u) => {
      n.delete(u), o.delete(u);
    },
    process: (u) => {
      if (((s = u), r)) {
        i = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        n.clear(),
        t.forEach(a),
        (r = !1),
        i && ((i = !1), l.process(u));
    },
  };
  return l;
}
const ao = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  d1 = 40;
function Vm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = ao.reduce((p, h) => ((p[h] = f1(o)), p), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = s,
    g = () => {
      const p = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, d1), 1)),
        (i.timestamp = p),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    y = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: ao.reduce((p, h) => {
      const m = s[h];
      return (p[h] = (w, S = !1, x = !1) => (n || y(), m.schedule(w, S, x))), p;
    }, {}),
    cancel: (p) => {
      for (let h = 0; h < ao.length; h++) s[ao[h]].cancel(p);
    },
    state: i,
    steps: s,
  };
}
const {
    schedule: U,
    cancel: Ut,
    state: ce,
    steps: ya,
  } = Vm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Te, !0),
  Nm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  h1 = 1e-7,
  p1 = 12;
function m1(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Nm(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > h1 && ++a < p1);
  return s;
}
function zi(e, t, n, r) {
  if (e === t && n === r) return Te;
  const i = (o) => m1(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Nm(i(o), t, r));
}
const Im = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  $m = (e) => (t) => 1 - e(1 - t),
  Om = zi(0.33, 1.53, 0.69, 0.99),
  Zu = $m(Om),
  jm = Im(Zu),
  Fm = (e) =>
    (e *= 2) < 1 ? 0.5 * Zu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  qu = (e) => 1 - Math.sin(Math.acos(e)),
  zm = $m(qu),
  Bm = Im(qu),
  Um = (e) => /^0[^.\s]+$/u.test(e);
function g1(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Um(e)
    : !0;
}
let Dl = Te;
const Wm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Hm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  bm = Hm("--"),
  y1 = Hm("var(--"),
  Ju = (e) => (y1(e) ? v1.test(e.split("/*")[0].trim()) : !1),
  v1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  w1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function S1(e) {
  const t = w1.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Km(e, t, n = 1) {
  const [r, i] = S1(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Wm(s) ? parseFloat(s) : s;
  }
  return Ju(i) ? Km(i, t, n + 1) : i;
}
const fn = (e, t, n) => (n > t ? t : n < e ? e : n),
  Vr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  _i = { ...Vr, transform: (e) => fn(0, 1, e) },
  lo = { ...Vr, default: 1 },
  Bi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Kt = Bi("deg"),
  Ct = Bi("%"),
  L = Bi("px"),
  x1 = Bi("vh"),
  k1 = Bi("vw"),
  Bf = {
    ...Ct,
    parse: (e) => Ct.parse(e) / 100,
    transform: (e) => Ct.transform(e * 100),
  },
  P1 = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Uf = (e) => e === Vr || e === L,
  Wf = (e, t) => parseFloat(e.split(", ")[t]),
  Hf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Wf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? Wf(o[1], e) : 0;
      }
    },
  C1 = new Set(["x", "y", "z"]),
  T1 = Fi.filter((e) => !C1.has(e));
function E1(e) {
  const t = [];
  return (
    T1.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const xr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Hf(4, 13),
  y: Hf(5, 14),
};
xr.translateX = xr.x;
xr.translateY = xr.y;
const Gm = (e) => (t) => t.test(e),
  A1 = { test: (e) => e === "auto", parse: (e) => e },
  Ym = [Vr, L, Ct, Kt, k1, x1, A1],
  bf = (e) => Ym.find(Gm(e)),
  Dn = new Set();
let Ll = !1,
  Vl = !1;
function Xm() {
  if (Vl) {
    const e = Array.from(Dn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = E1(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Vl = !1), (Ll = !1), Dn.forEach((e) => e.complete()), Dn.clear();
}
function Qm() {
  Dn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Vl = !0);
  });
}
function R1() {
  Qm(), Xm();
}
class ec {
  constructor(t, n, r, i, o, s = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Dn.add(this), Ll || ((Ll = !0), U.read(Qm), U.resolveKeyframes(Xm)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const s = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (s !== void 0) t[0] = s;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), i && s === void 0 && i.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Dn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Dn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const si = (e) => Math.round(e * 1e5) / 1e5,
  tc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function M1(e) {
  return e == null;
}
const _1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  nc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && _1.test(n) && n.startsWith(e)) ||
      (t && !M1(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Zm = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(tc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  D1 = (e) => fn(0, 255, e),
  va = { ...Vr, transform: (e) => Math.round(D1(e)) },
  An = {
    test: nc("rgb", "red"),
    parse: Zm("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      va.transform(e) +
      ", " +
      va.transform(t) +
      ", " +
      va.transform(n) +
      ", " +
      si(_i.transform(r)) +
      ")",
  };
function L1(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Nl = { test: nc("#"), parse: L1, transform: An.transform },
  nr = {
    test: nc("hsl", "hue"),
    parse: Zm("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ct.transform(si(t)) +
      ", " +
      Ct.transform(si(n)) +
      ", " +
      si(_i.transform(r)) +
      ")",
  },
  Pe = {
    test: (e) => An.test(e) || Nl.test(e) || nr.test(e),
    parse: (e) =>
      An.test(e) ? An.parse(e) : nr.test(e) ? nr.parse(e) : Nl.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? An.transform(e)
        : nr.transform(e),
  },
  V1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function N1(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(tc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(V1)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const qm = "number",
  Jm = "color",
  I1 = "var",
  $1 = "var(",
  Kf = "${}",
  O1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Di(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      O1,
      (l) => (
        Pe.test(l)
          ? (r.color.push(o), i.push(Jm), n.push(Pe.parse(l)))
          : l.startsWith($1)
          ? (r.var.push(o), i.push(I1), n.push(l))
          : (r.number.push(o), i.push(qm), n.push(parseFloat(l))),
        ++o,
        Kf
      )
    )
    .split(Kf);
  return { values: n, split: a, indexes: r, types: i };
}
function eg(e) {
  return Di(e).values;
}
function tg(e) {
  const { split: t, types: n } = Di(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === qm
          ? (o += si(i[s]))
          : a === Jm
          ? (o += Pe.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const j1 = (e) => (typeof e == "number" ? 0 : e);
function F1(e) {
  const t = eg(e);
  return tg(e)(t.map(j1));
}
const dn = {
    test: N1,
    parse: eg,
    createTransformer: tg,
    getAnimatableNone: F1,
  },
  z1 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function B1(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(tc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = z1.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const U1 = /\b([a-z-]*)\(.*?\)/gu,
  Il = {
    ...dn,
    getAnimatableNone: (e) => {
      const t = e.match(U1);
      return t ? t.map(B1).join(" ") : e;
    },
  },
  W1 = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L,
  },
  H1 = {
    rotate: Kt,
    rotateX: Kt,
    rotateY: Kt,
    rotateZ: Kt,
    scale: lo,
    scaleX: lo,
    scaleY: lo,
    scaleZ: lo,
    skew: Kt,
    skewX: Kt,
    skewY: Kt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: _i,
    originX: Bf,
    originY: Bf,
    originZ: L,
  },
  Gf = { ...Vr, transform: Math.round },
  rc = {
    ...W1,
    ...H1,
    zIndex: Gf,
    size: L,
    fillOpacity: _i,
    strokeOpacity: _i,
    numOctaves: Gf,
  },
  b1 = {
    ...rc,
    color: Pe,
    backgroundColor: Pe,
    outlineColor: Pe,
    fill: Pe,
    stroke: Pe,
    borderColor: Pe,
    borderTopColor: Pe,
    borderRightColor: Pe,
    borderBottomColor: Pe,
    borderLeftColor: Pe,
    filter: Il,
    WebkitFilter: Il,
  },
  ic = (e) => b1[e];
function ng(e, t) {
  let n = ic(e);
  return (
    n !== Il && (n = dn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const K1 = new Set(["auto", "none", "0"]);
function G1(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !K1.has(o) && Di(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = ng(n, i);
}
class rg extends ec {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Ju(u))) {
        const c = Km(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !P1.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = bf(i),
      a = bf(o);
    if (s !== a)
      if (Uf(s) && Uf(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) g1(t[i]) && r.push(i);
    r.length && G1(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = xr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const s = i.length - 1,
      a = i[s];
    (i[s] = xr[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function oc(e) {
  return typeof e == "function";
}
let To;
function Y1() {
  To = void 0;
}
const Tt = {
    now: () => (
      To === void 0 &&
        Tt.set(
          ce.isProcessing || u1.useManualTiming
            ? ce.timestamp
            : performance.now()
        ),
      To
    ),
    set: (e) => {
      (To = e), queueMicrotask(Y1);
    },
  },
  Yf = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (dn.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function X1(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Q1(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = Yf(i, t),
    a = Yf(o, t);
  return !s || !a ? !1 : X1(e) || ((n === "spring" || oc(n)) && r);
}
const Z1 = 40;
class ig {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Tt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Z1
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && R1(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Tt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: i,
      velocity: o,
      delay: s,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !Q1(t, r, i, o))
      if (s) this.options.duration = 0;
      else {
        l == null || l(Ls(t, this.options, n)),
          a == null || a(),
          this.resolveFinishedPromise();
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function og(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const q1 = 5;
function sg(e, t, n) {
  const r = Math.max(t - q1, 0);
  return og(n - e(r), t - r);
}
const wa = 0.001,
  J1 = 0.01,
  ew = 10,
  tw = 0.05,
  nw = 1;
function rw({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = fn(tw, nw, s)),
    (e = fn(J1, ew, It(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            g = $l(u, s),
            y = Math.exp(-f);
          return wa - (d / g) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = $l(Math.pow(u, 2), s);
          return ((-i(u) + wa > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -wa + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const a = 5 / e,
    l = ow(i, o, a);
  if (((e = Nt(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const iw = 12;
function ow(e, t, n) {
  let r = n;
  for (let i = 1; i < iw; i++) r = r - e(r) / t(r);
  return r;
}
function $l(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sw = ["duration", "bounce"],
  aw = ["stiffness", "damping", "mass"];
function Xf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function lw(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Xf(e, aw) && Xf(e, sw)) {
    const n = rw(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ag({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: f,
      isResolvedFromDuration: d,
    } = lw({ ...r, velocity: -It(r.velocity || 0) }),
    g = f || 0,
    y = l / (2 * Math.sqrt(a * u)),
    v = o - i,
    k = It(Math.sqrt(a / u)),
    p = Math.abs(v) < 5;
  n || (n = p ? 0.01 : 2), t || (t = p ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const m = $l(k, y);
    h = (w) => {
      const S = Math.exp(-y * k * w);
      return (
        o - S * (((g + y * k * v) / m) * Math.sin(m * w) + v * Math.cos(m * w))
      );
    };
  } else if (y === 1) h = (m) => o - Math.exp(-k * m) * (v + (g + k * v) * m);
  else {
    const m = k * Math.sqrt(y * y - 1);
    h = (w) => {
      const S = Math.exp(-y * k * w),
        x = Math.min(m * w, 300);
      return (
        o - (S * ((g + y * k * v) * Math.sinh(x) + m * v * Math.cosh(x))) / m
      );
    };
  }
  return {
    calculatedDuration: (d && c) || null,
    next: (m) => {
      const w = h(m);
      if (d) s.done = m >= c;
      else {
        let S = 0;
        y < 1 && (S = m === 0 ? Nt(g) : sg(h, m, w));
        const x = Math.abs(S) <= n,
          P = Math.abs(o - w) <= t;
        s.done = x && P;
      }
      return (s.value = s.done ? o : w), s;
    },
  };
}
function Qf({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (C) => (a !== void 0 && C < a) || (l !== void 0 && C > l),
    y = (C) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - C) < Math.abs(l - C)
        ? a
        : l;
  let v = n * t;
  const k = f + v,
    p = s === void 0 ? k : s(k);
  p !== k && (v = p - f);
  const h = (C) => -v * Math.exp(-C / r),
    m = (C) => p + h(C),
    w = (C) => {
      const V = h(C),
        _ = m(C);
      (d.done = Math.abs(V) <= u), (d.value = d.done ? p : _);
    };
  let S, x;
  const P = (C) => {
    g(d.value) &&
      ((S = C),
      (x = ag({
        keyframes: [d.value, y(d.value)],
        velocity: sg(m, C, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (C) => {
        let V = !1;
        return (
          !x && S === void 0 && ((V = !0), w(C), P(C)),
          S !== void 0 && C >= S ? x.next(C - S) : (!V && w(C), d)
        );
      },
    }
  );
}
const uw = zi(0.42, 0, 1, 1),
  cw = zi(0, 0, 0.58, 1),
  lg = zi(0.42, 0, 0.58, 1),
  fw = (e) => Array.isArray(e) && typeof e[0] != "number",
  sc = (e) => Array.isArray(e) && typeof e[0] == "number",
  Zf = {
    linear: Te,
    easeIn: uw,
    easeInOut: lg,
    easeOut: cw,
    circIn: qu,
    circInOut: Bm,
    circOut: zm,
    backIn: Zu,
    backInOut: jm,
    backOut: Om,
    anticipate: Fm,
  },
  qf = (e) => {
    if (sc(e)) {
      Dl(e.length === 4);
      const [t, n, r, i] = e;
      return zi(t, n, r, i);
    } else if (typeof e == "string") return Dl(Zf[e] !== void 0), Zf[e];
    return e;
  },
  dw = (e, t) => (n) => t(e(n)),
  $t = (...e) => e.reduce(dw),
  kr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  J = (e, t, n) => e + (t - e) * n;
function Sa(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function hw({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Sa(l, a, e + 1 / 3)), (o = Sa(l, a, e)), (s = Sa(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function rs(e, t) {
  return (n) => (n > 0 ? t : e);
}
const xa = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  pw = [Nl, An, nr],
  mw = (e) => pw.find((t) => t.test(e));
function Jf(e) {
  const t = mw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === nr && (n = hw(n)), n;
}
const ed = (e, t) => {
    const n = Jf(e),
      r = Jf(t);
    if (!n || !r) return rs(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = xa(n.red, r.red, o)),
      (i.green = xa(n.green, r.green, o)),
      (i.blue = xa(n.blue, r.blue, o)),
      (i.alpha = J(n.alpha, r.alpha, o)),
      An.transform(i)
    );
  },
  Ol = new Set(["none", "hidden"]);
function gw(e, t) {
  return Ol.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function yw(e, t) {
  return (n) => J(e, t, n);
}
function ac(e) {
  return typeof e == "number"
    ? yw
    : typeof e == "string"
    ? Ju(e)
      ? rs
      : Pe.test(e)
      ? ed
      : Sw
    : Array.isArray(e)
    ? ug
    : typeof e == "object"
    ? Pe.test(e)
      ? ed
      : vw
    : rs;
}
function ug(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => ac(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function vw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ac(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function ww(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
const Sw = (e, t) => {
  const n = dn.createTransformer(t),
    r = Di(e),
    i = Di(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Ol.has(e) && !i.values.length) || (Ol.has(t) && !r.values.length)
      ? gw(e, t)
      : $t(ug(ww(r, i), i.values), n)
    : rs(e, t);
};
function cg(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? J(e, t, n)
    : ac(e)(e, t);
}
function xw(e, t, n) {
  const r = [],
    i = n || cg,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Te : t;
      a = $t(l, a);
    }
    r.push(a);
  }
  return r;
}
function fg(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Dl(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = xw(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = kr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => l(fn(e[0], e[o - 1], u)) : l;
}
function kw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = kr(0, t, r);
    e.push(J(n, 1, i));
  }
}
function Pw(e) {
  const t = [0];
  return kw(t, e.length - 1), t;
}
function Cw(e, t) {
  return e.map((n) => n * t);
}
function Tw(e, t) {
  return e.map(() => t || lg).splice(0, e.length - 1);
}
function is({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = fw(r) ? r.map(qf) : qf(r),
    o = { done: !1, value: t[0] },
    s = Cw(n && n.length === t.length ? n : Pw(t), e),
    a = fg(s, t, { ease: Array.isArray(i) ? i : Tw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const td = 2e4;
function Ew(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < td; ) (t += n), (r = e.next(t));
  return t >= td ? 1 / 0 : t;
}
const Aw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => Ut(t),
      now: () => (ce.isProcessing ? ce.timestamp : Tt.now()),
    };
  },
  Rw = { decay: Qf, inertia: Qf, tween: is, keyframes: is, spring: ag },
  Mw = (e) => e / 100;
class Vs extends ig {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options,
      s = (i == null ? void 0 : i.KeyframeResolver) || ec,
      a = (l, u) => this.onKeyframesResolved(l, u);
    (this.resolver = new s(o, a, n, r, i)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: o,
        velocity: s = 0,
      } = this.options,
      a = oc(n) ? n : Rw[n] || is;
    let l, u;
    a !== is &&
      typeof t[0] != "number" &&
      ((l = $t(Mw, cg(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    o === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -s })),
      c.calculatedDuration === null && (c.calculatedDuration = Ew(c));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: C } = this.options;
      return { done: !0, value: C[C.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: o,
      mirroredGenerator: s,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      h = this.speed >= 0 ? p < 0 : p > c;
    (this.currentTime = Math.max(p, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c);
    let m = this.currentTime,
      w = o;
    if (g) {
      const C = Math.min(this.currentTime, c) / f;
      let V = Math.floor(C),
        _ = C % 1;
      !_ && C >= 1 && (_ = 1),
        _ === 1 && V--,
        (V = Math.min(V, g + 1)),
        !!(V % 2) &&
          (y === "reverse"
            ? ((_ = 1 - _), v && (_ -= v / f))
            : y === "mirror" && (w = s)),
        (m = fn(0, 1, _) * f);
    }
    const S = h ? { done: !1, value: l[0] } : w.next(m);
    a && (S.value = a(S.value));
    let { done: x } = S;
    !h &&
      u !== null &&
      (x = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && x));
    return (
      P && i !== void 0 && (S.value = Ls(l, this.options, i)),
      k && k(S.value),
      P && this.finish(),
      S
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? It(t.calculatedDuration) : 0;
  }
  get time() {
    return It(this.currentTime);
  }
  set time(t) {
    (t = Nt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = It(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Aw, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), n && n();
    const i = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = i)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
function _w(e) {
  return new Vs(e);
}
const Dw = new Set(["opacity", "clipPath", "filter", "transform"]),
  Lw = 10,
  Vw = (e, t) => {
    let n = "";
    const r = Math.max(Math.round(t / Lw), 2);
    for (let i = 0; i < r; i++) n += e(kr(0, r - 1, i)) + ", ";
    return `linear(${n.substring(0, n.length - 2)})`;
  };
function lc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Nw = { linearEasing: void 0 };
function Iw(e, t) {
  const n = lc(e);
  return () => {
    var r;
    return (r = Nw[t]) !== null && r !== void 0 ? r : n();
  };
}
const os = Iw(() => {
  try {
    document
      .createElement("div")
      .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing");
function dg(e) {
  return !!(
    (typeof e == "function" && os()) ||
    !e ||
    (typeof e == "string" && (e in jl || os())) ||
    sc(e) ||
    (Array.isArray(e) && e.every(dg))
  );
}
const Yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  jl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Yr([0, 0.65, 0.55, 1]),
    circOut: Yr([0.55, 0, 1, 0.45]),
    backIn: Yr([0.31, 0.01, 0.66, -0.59]),
    backOut: Yr([0.33, 1.53, 0.69, 0.99]),
  };
function hg(e, t) {
  if (e)
    return typeof e == "function" && os()
      ? Vw(e, t)
      : sc(e)
      ? Yr(e)
      : Array.isArray(e)
      ? e.map((n) => hg(n, t) || jl.easeOut)
      : jl[e];
}
function $w(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = hg(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function nd(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Ow = lc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  ss = 10,
  jw = 2e4;
function Fw(e) {
  return oc(e.type) || e.type === "spring" || !dg(e.ease);
}
function zw(e, t) {
  const n = new Vs({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let o = 0;
  for (; !r.done && o < jw; ) (r = n.sample(o)), i.push(r.value), (o += ss);
  return { times: void 0, keyframes: i, duration: o - ss, ease: "linear" };
}
const pg = { anticipate: Fm, backInOut: jm, circInOut: Bm };
function Bw(e) {
  return e in pg;
}
class rd extends ig {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: o } = this.options;
    (this.resolver = new rg(
      o,
      (s, a) => this.onKeyframesResolved(s, a),
      n,
      r,
      i
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: i = 300,
      times: o,
      ease: s,
      type: a,
      motionValue: l,
      name: u,
      startTime: c,
    } = this.options;
    if (!(!((r = l.owner) === null || r === void 0) && r.current)) return !1;
    if (
      (typeof s == "string" && os() && Bw(s) && (s = pg[s]), Fw(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: g,
          motionValue: y,
          element: v,
          ...k
        } = this.options,
        p = zw(t, k);
      (t = p.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (i = p.duration),
        (o = p.times),
        (s = p.ease),
        (a = "keyframes");
    }
    const f = $w(l.owner.current, u, t, {
      ...this.options,
      duration: i,
      times: o,
      ease: s,
    });
    return (
      (f.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (nd(f, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (f.onfinish = () => {
            const { onComplete: d } = this.options;
            l.set(Ls(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: f, duration: i, times: o, type: a, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return It(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return It(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Nt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Te;
      const { animation: r } = n;
      nd(r, t);
    }
    return Te;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: o,
      ease: s,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        y = new Vs({
          ...g,
          keyframes: r,
          duration: i,
          type: o,
          ease: s,
          times: a,
          isGenerator: !0,
        }),
        v = Nt(this.time);
      u.setWithVelocity(y.sample(v - ss).value, y.sample(v).value, ss);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: o,
      damping: s,
      type: a,
    } = t;
    return (
      Ow() &&
      r &&
      Dw.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      !n.owner.getProps().onUpdate &&
      !i &&
      o !== "mirror" &&
      s !== 0 &&
      a !== "inertia"
    );
  }
}
const Uw = lc(() => window.ScrollTimeline !== void 0);
class Ww {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) =>
      Uw() && i.attachTimeline ? i.attachTimeline(t) : n(i)
    );
    return () => {
      r.forEach((i, o) => {
        i && i(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
function Hw({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const uc =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      const a = Qu(r, e) || {},
        l = a.delay || r.delay || 0;
      let { elapsed: u = 0 } = r;
      u = u - Nt(l);
      let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -u,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      Hw(a) || (c = { ...c, ...l1(e, c) }),
        c.duration && (c.duration = Nt(c.duration)),
        c.repeatDelay && (c.repeatDelay = Nt(c.repeatDelay)),
        c.from !== void 0 && (c.keyframes[0] = c.from);
      let f = !1;
      if (
        ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
          ((c.duration = 0), c.delay === 0 && (f = !0)),
        f && !o && t.get() !== void 0)
      ) {
        const d = Ls(c.keyframes, a);
        if (d !== void 0)
          return (
            U.update(() => {
              c.onUpdate(d), c.onComplete();
            }),
            new Ww([])
          );
      }
      return !o && rd.supports(c) ? new rd(c) : new Vs(c);
    },
  bw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Kw = (e) => (_l(e) ? e[e.length - 1] || 0 : e);
function cc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class dc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return cc(this.subscriptions, t), () => fc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const id = 30,
  Gw = (e) => !isNaN(parseFloat(e)),
  ai = { current: void 0 };
class Yw {
  constructor(t, n = {}) {
    (this.version = "11.11.17"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const o = Tt.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Tt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Gw(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new dc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return ai.current && ai.current.push(this), this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Tt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > id
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, id);
    return og(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Pr(e, t) {
  return new Yw(e, t);
}
function Xw(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pr(n));
}
function Qw(e, t) {
  const n = Ds(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = Kw(o[s]);
    Xw(e, s, a);
  }
}
const hc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Zw = "framerAppearId",
  mg = "data-" + hc(Zw);
function gg(e) {
  return e.props[mg];
}
const he = (e) => !!(e && e.getVelocity);
function qw(e) {
  return !!(he(e) && e.add);
}
function Fl(e, t) {
  const n = e.getValue("willChange");
  if (qw(n)) return n.add(t);
}
function Jw({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function yg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (o = e.latestValues[f]) !== null && o !== void 0 ? o : null
      ),
      g = l[f];
    if (g === void 0 || (c && Jw(c, f))) continue;
    const y = { delay: n, ...Qu(s || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const p = gg(e);
      if (p) {
        const h = window.MotionHandoffAnimation(p, f, U);
        h !== null && ((y.startTime = h), (v = !0));
      }
    }
    Fl(e, f),
      d.start(
        uc(f, d, g, e.shouldReduceMotion && Bn.has(f) ? { type: !1 } : y, e, v)
      );
    const k = d.animation;
    k && u.push(k);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        U.update(() => {
          a && Qw(e, a);
        });
      }),
    u
  );
}
function zl(e, t, n = {}) {
  var r;
  const i = Ds(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  const s = i ? () => Promise.all(yg(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return eS(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [s, a] : [a, s];
    return u().then(() => c());
  } else return Promise.all([s(), a(n.delay)]);
}
function eS(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(tS)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            zl(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function tS(e, t) {
  return e.sortNodePosition(t);
}
function nS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => zl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = zl(e, t, n);
  else {
    const i = typeof t == "function" ? Ds(e, t, n.custom) : t;
    r = Promise.all(yg(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const rS = Xu.length;
function vg(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? vg(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < rS; n++) {
    const r = Xu[n],
      i = e.props[r];
    (Mi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const iS = [...Yu].reverse(),
  oS = Yu.length;
function sS(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => nS(e, n, r)));
}
function aS(e) {
  let t = sS(e),
    n = od(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = Ds(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = vg(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      y = 1 / 0;
    for (let k = 0; k < oS; k++) {
      const p = iS[k],
        h = n[p],
        m = u[p] !== void 0 ? u[p] : c[p],
        w = Mi(m),
        S = p === l ? h.isActive : null;
      S === !1 && (y = k);
      let x = m === c[p] && m !== u[p] && w;
      if (
        (x && r && e.manuallyAnimateOnMount && (x = !1),
        (h.protectedKeys = { ...g }),
        (!h.isActive && S === null) ||
          (!m && !h.prevProp) ||
          _s(m) ||
          typeof m == "boolean")
      )
        continue;
      const P = lS(h.prevProp, m);
      let C = P || (p === l && h.isActive && !x && w) || (k > y && w),
        V = !1;
      const _ = Array.isArray(m) ? m : [m];
      let b = _.reduce(i(p), {});
      S === !1 && (b = {});
      const { prevResolvedValues: G = {} } = h,
        Se = { ...G, ...b },
        Le = (W) => {
          (C = !0),
            d.has(W) && ((V = !0), d.delete(W)),
            (h.needsAnimating[W] = !0);
          const E = e.getValue(W);
          E && (E.liveStyle = !1);
        };
      for (const W in Se) {
        const E = b[W],
          A = G[W];
        if (g.hasOwnProperty(W)) continue;
        let D = !1;
        _l(E) && _l(A) ? (D = !Lm(E, A)) : (D = E !== A),
          D
            ? E != null
              ? Le(W)
              : d.add(W)
            : E !== void 0 && d.has(W)
            ? Le(W)
            : (h.protectedKeys[W] = !0);
      }
      (h.prevProp = m),
        (h.prevResolvedValues = b),
        h.isActive && (g = { ...g, ...b }),
        r && e.blockInitialAnimation && (C = !1),
        C &&
          (!(x && P) || V) &&
          f.push(..._.map((W) => ({ animation: W, options: { type: p } })));
    }
    if (d.size) {
      const k = {};
      d.forEach((p) => {
        const h = e.getBaseTarget(p),
          m = e.getValue(p);
        m && (m.liveStyle = !0), (k[p] = h ?? null);
      }),
        f.push({ animation: k });
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u);
    const f = s(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = od()), (r = !0);
    },
  };
}
function lS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Lm(t, e) : !1;
}
function wn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function od() {
  return {
    animate: wn(!0),
    whileInView: wn(),
    whileHover: wn(),
    whileTap: wn(),
    whileDrag: wn(),
    whileFocus: wn(),
    exit: wn(),
  };
}
class vn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class uS extends vn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = aS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    _s(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let cS = 0;
class fS extends vn {
  constructor() {
    super(...arguments), (this.id = cS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const dS = { animation: { Feature: uS }, exit: { Feature: fS } },
  wg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function Ns(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
const hS = (e) => (t) => wg(t) && e(t, Ns(t));
function Lt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ot(e, t, n, r) {
  return Lt(e, t, hS(n), r);
}
const sd = (e, t) => Math.abs(e - t);
function pS(e, t) {
  const n = sd(e.x, t.x),
    r = sd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Sg {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Pa(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = pS(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = f,
          { timestamp: v } = ce;
        this.history.push({ ...y, timestamp: v });
        const { onStart: k, onMove: p } = this.handlers;
        d ||
          (k && k(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, d) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = ka(d, this.transformPagePoint)),
          U.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const k = Pa(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : ka(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(f, k), y && y(f, k);
      }),
      !wg(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Ns(t),
      a = ka(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = ce;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, Pa(a, this.history)),
      (this.removeListeners = $t(
        Ot(this.contextWindow, "pointermove", this.handlePointerMove),
        Ot(this.contextWindow, "pointerup", this.handlePointerUp),
        Ot(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ut(this.updatePoint);
  }
}
function ka(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ad(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Pa({ point: e }, t) {
  return {
    point: e,
    delta: ad(e, xg(t)),
    offset: ad(e, mS(t)),
    velocity: gS(t, 0.1),
  };
}
function mS(e) {
  return e[0];
}
function xg(e) {
  return e[e.length - 1];
}
function gS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = xg(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Nt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = It(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function kg(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const ld = kg("dragHorizontal"),
  ud = kg("dragVertical");
function Pg(e) {
  let t = !1;
  if (e === "y") t = ud();
  else if (e === "x") t = ld();
  else {
    const n = ld(),
      r = ud();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Cg() {
  const e = Pg(!0);
  return e ? (e(), !1) : !0;
}
function rr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const Tg = 1e-4,
  yS = 1 - Tg,
  vS = 1 + Tg,
  Eg = 0.01,
  wS = 0 - Eg,
  SS = 0 + Eg;
function Qe(e) {
  return e.max - e.min;
}
function xS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function cd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = J(t.min, t.max, e.origin)),
    (e.scale = Qe(n) / Qe(t)),
    (e.translate = J(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= yS && e.scale <= vS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= wS && e.translate <= SS) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function li(e, t, n, r) {
  cd(e.x, t.x, n.x, r ? r.originX : void 0),
    cd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function fd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Qe(t));
}
function kS(e, t, n) {
  fd(e.x, t.x, n.x), fd(e.y, t.y, n.y);
}
function dd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Qe(t));
}
function ui(e, t, n) {
  dd(e.x, t.x, n.x), dd(e.y, t.y, n.y);
}
function PS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? J(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? J(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function hd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function CS(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: hd(e.x, n, i), y: hd(e.y, t, r) };
}
function pd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function TS(e, t) {
  return { x: pd(e.x, t.x), y: pd(e.y, t.y) };
}
function ES(e, t) {
  let n = 0.5;
  const r = Qe(e),
    i = Qe(t);
  return (
    i > r
      ? (n = kr(t.min, t.max - r, e.min))
      : r > i && (n = kr(e.min, e.max - i, t.min)),
    fn(0, 1, n)
  );
}
function AS(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Bl = 0.35;
function RS(e = Bl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Bl),
    { x: md(e, "left", "right"), y: md(e, "top", "bottom") }
  );
}
function md(e, t, n) {
  return { min: gd(e, t), max: gd(e, n) };
}
function gd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const yd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ir = () => ({ x: yd(), y: yd() }),
  vd = () => ({ min: 0, max: 0 }),
  re = () => ({ x: vd(), y: vd() });
function tt(e) {
  return [e("x"), e("y")];
}
function Ag({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function MS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function _S(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ca(e) {
  return e === void 0 || e === 1;
}
function Ul({ scale: e, scaleX: t, scaleY: n }) {
  return !Ca(e) || !Ca(t) || !Ca(n);
}
function kn(e) {
  return (
    Ul(e) ||
    Rg(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Rg(e) {
  return wd(e.x) || wd(e.y);
}
function wd(e) {
  return e && e !== "0%";
}
function as(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Sd(e, t, n, r, i) {
  return i !== void 0 && (e = as(e, i, r)), as(e, n, r) + t;
}
function Wl(e, t = 0, n = 1, r, i) {
  (e.min = Sd(e.min, t, n, r, i)), (e.max = Sd(e.max, t, n, r, i));
}
function Mg(e, { x: t, y: n }) {
  Wl(e.x, t.translate, t.scale, t.originPoint),
    Wl(e.y, n.translate, n.scale, n.originPoint);
}
const xd = 0.999999999999,
  kd = 1.0000000000001;
function DS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        sr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Mg(e, s)),
      r && kn(o.latestValues) && sr(e, o.latestValues));
  }
  t.x < kd && t.x > xd && (t.x = 1), t.y < kd && t.y > xd && (t.y = 1);
}
function or(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Pd(e, t, n, r, i = 0.5) {
  const o = J(e.min, e.max, i);
  Wl(e, t, n, o, r);
}
function sr(e, t) {
  Pd(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function _g(e, t) {
  return Ag(_S(e.getBoundingClientRect(), t));
}
function LS(e, t, n) {
  const r = _g(e, n),
    { scroll: i } = t;
  return i && (or(r.x, i.offset.x), or(r.y, i.offset.y)), r;
}
const Dg = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  VS = new WeakMap();
class NS {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = re()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ns(c, "page").point);
      },
      o = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Pg(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          tt((k) => {
            let p = this.getAxisMotionValue(k).get() || 0;
            if (Ct.test(p)) {
              const { projection: h } = this.visualElement;
              if (h && h.layout) {
                const m = h.layout.layoutBox[k];
                m && (p = Qe(m) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[k] = p;
          }),
          y && U.postRender(() => y(c, f)),
          Fl(this.visualElement, "transform");
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: k } = f;
        if (g && this.currentDirection === null) {
          (this.currentDirection = IS(k)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, k),
          this.updateAxis("y", f.point, k),
          this.visualElement.render(),
          v && v(c, f);
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        tt((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Sg(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Dg(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && U.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !uo(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = PS(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && rr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = CS(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = RS(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        tt((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = AS(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !rr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = LS(r, i.root, this.visualElement.getTransformPagePoint());
    let s = TS(i.layout.layoutBox, o);
    if (n) {
      const a = n(MS(s));
      (this.hasMutatedConstraints = !!a), a && (s = Ag(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = tt((c) => {
        if (!uo(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Fl(this.visualElement, t), r.start(uc(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    tt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    tt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    tt((n) => {
      const { drag: r } = this.getProps();
      if (!uo(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - J(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!rr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    tt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = ES({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      tt((s) => {
        if (!uo(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(J(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    VS.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Ot(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        rr(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      U.read(r);
    const s = Lt(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (tt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Bl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function uo(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function IS(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class $S extends vn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Te),
      (this.removeListeners = Te),
      (this.controls = new NS(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Te);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Cd = (e) => (t, n) => {
  e && U.postRender(() => e(t, n));
};
class OS extends vn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Te);
  }
  onPointerDown(t) {
    this.session = new Sg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Dg(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Cd(t),
      onStart: Cd(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && U.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Ot(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const pc = R.createContext(null);
function jS() {
  const e = R.useContext(pc);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = R.useId();
  R.useEffect(() => r(i), []);
  const o = R.useCallback(() => n && n(i), [i, n]);
  return !t && n ? [!1, o] : [!0];
}
const Lg = R.createContext({}),
  Vg = R.createContext({}),
  Eo = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Td(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Wr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = Td(e, t.target.x),
        r = Td(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  FS = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = dn.parse(e);
      if (i.length > 5) return r;
      const o = dn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = J(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  },
  ls = {};
function zS(e) {
  Object.assign(ls, e);
}
const { schedule: mc, cancel: uC } = Vm(queueMicrotask, !1);
class BS extends R.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    zS(US),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Eo.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              U.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      mc.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Ng(e) {
  const [t, n] = jS(),
    r = R.useContext(Lg);
  return N.jsx(BS, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: R.useContext(Vg),
    isPresent: t,
    safeToRemove: n,
  });
}
const US = {
    borderRadius: {
      ...Wr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Wr,
    borderTopRightRadius: Wr,
    borderBottomLeftRadius: Wr,
    borderBottomRightRadius: Wr,
    boxShadow: FS,
  },
  Ig = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  WS = Ig.length,
  Ed = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Ad = (e) => typeof e == "number" || L.test(e);
function HS(e, t, n, r, i, o) {
  i
    ? ((e.opacity = J(0, n.opacity !== void 0 ? n.opacity : 1, bS(r))),
      (e.opacityExit = J(t.opacity !== void 0 ? t.opacity : 1, 0, KS(r))))
    : o &&
      (e.opacity = J(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < WS; s++) {
    const a = `border${Ig[s]}Radius`;
    let l = Rd(t, a),
      u = Rd(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Ad(l) === Ad(u)
        ? ((e[a] = Math.max(J(Ed(l), Ed(u), r), 0)),
          (Ct.test(u) || Ct.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = J(t.rotate || 0, n.rotate || 0, r));
}
function Rd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const bS = $g(0, 0.5, zm),
  KS = $g(0.5, 0.95, Te);
function $g(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(kr(e, t, r)));
}
function Md(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function et(e, t) {
  Md(e.x, t.x), Md(e.y, t.y);
}
function _d(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Dd(e, t, n, r, i) {
  return (
    (e -= t), (e = as(e, 1 / n, r)), i !== void 0 && (e = as(e, 1 / i, r)), e
  );
}
function GS(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Ct.test(t) &&
      ((t = parseFloat(t)), (t = J(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = J(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Dd(e.min, t, n, a, i)),
    (e.max = Dd(e.max, t, n, a, i));
}
function Ld(e, t, [n, r, i], o, s) {
  GS(e, t[n], t[r], t[i], t.scale, o, s);
}
const YS = ["x", "scaleX", "originX"],
  XS = ["y", "scaleY", "originY"];
function Vd(e, t, n, r) {
  Ld(e.x, t, YS, n ? n.x : void 0, r ? r.x : void 0),
    Ld(e.y, t, XS, n ? n.y : void 0, r ? r.y : void 0);
}
function Nd(e) {
  return e.translate === 0 && e.scale === 1;
}
function Og(e) {
  return Nd(e.x) && Nd(e.y);
}
function Id(e, t) {
  return e.min === t.min && e.max === t.max;
}
function QS(e, t) {
  return Id(e.x, t.x) && Id(e.y, t.y);
}
function $d(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function jg(e, t) {
  return $d(e.x, t.x) && $d(e.y, t.y);
}
function Od(e) {
  return Qe(e.x) / Qe(e.y);
}
function jd(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class ZS {
  constructor() {
    this.members = [];
  }
  add(t) {
    cc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (fc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function qS(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: y,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const JS = (e, t) => e.depth - t.depth;
class ex {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    cc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    fc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(JS),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function Ao(e) {
  const t = he(e) ? e.get() : e;
  return bw(t) ? t.toValue() : t;
}
function tx(e, t) {
  const n = Tt.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Ut(r), e(o - t));
    };
  return U.read(r, !0), () => Ut(r);
}
function nx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function rx(e, t, n) {
  const r = he(e) ? e : Pr(e);
  return r.start(uc("", r, t, n)), r.animation;
}
const Pn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Xr = typeof window < "u" && window.MotionDebug !== void 0,
  Ta = ["", "X", "Y", "Z"],
  ix = { visibility: "hidden" },
  Fd = 1e3;
let ox = 0;
function Ea(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Fg(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = gg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", U, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Fg(r);
}
function zg({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = ox++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            Xr &&
              (Pn.totalNodes =
                Pn.resolvedTargetDeltas =
                Pn.recalculatedProjection =
                  0),
            this.nodes.forEach(lx),
            this.nodes.forEach(hx),
            this.nodes.forEach(px),
            this.nodes.forEach(ux),
            Xr && window.MotionDebug.record(Pn);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ex());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new dc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = nx(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = tx(d, 250)),
            Eo.hasAnimatedSinceResize &&
              ((Eo.hasAnimatedSinceResize = !1), this.nodes.forEach(Bd));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || wx,
                { onLayoutAnimationStart: k, onLayoutAnimationComplete: p } =
                  c.getProps(),
                h = !this.targetLayout || !jg(this.targetLayout, y) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m);
                const w = { ...Qu(v, "layout"), onPlay: k, onComplete: p };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((w.delay = 0), (w.type = !1)),
                  this.startAnimation(w);
              } else
                d || Bd(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ut(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(mx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Fg(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(zd);
        return;
      }
      this.isUpdating || this.nodes.forEach(fx),
        (this.isUpdating = !1),
        this.nodes.forEach(dx),
        this.nodes.forEach(sx),
        this.nodes.forEach(ax),
        this.clearAllSnapshots();
      const a = Tt.now();
      (ce.delta = fn(0, 1e3 / 60, a - ce.timestamp)),
        (ce.timestamp = a),
        (ce.isProcessing = !0),
        ya.update.process(ce),
        ya.preRender.process(ce),
        ya.render.process(ce),
        (ce.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), mc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cx), this.sharedNodes.forEach(gx);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = re()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Og(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || kn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        Sx(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var s;
      const { visualElement: a } = this.options;
      if (!a) return re();
      const l = a.measureViewportBox();
      if (
        !(
          ((s = this.scroll) === null || s === void 0 ? void 0 : s.wasRoot) ||
          this.path.some(xx)
        )
      ) {
        const { scroll: c } = this.root;
        c && (or(l.x, c.offset.x), or(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(s) {
      var a;
      const l = re();
      if (
        (et(l, s), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && et(l, s), or(l.x, f.offset.x), or(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(s, a = !1) {
      const l = re();
      et(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          sr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          kn(c.latestValues) && sr(l, c.latestValues);
      }
      return kn(this.latestValues) && sr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = re();
      et(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !kn(u.latestValues)) continue;
        Ul(u.latestValues) && u.updateSnapshot();
        const c = re(),
          f = u.measurePageBox();
        et(c, f),
          Vd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return kn(this.latestValues) && Vd(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ce.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = re()),
              (this.relativeTargetOrigin = re()),
              ui(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              et(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = re()), (this.targetWithTransforms = re())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                kS(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : et(this.target, this.layout.layoutBox),
                Mg(this.target, this.targetDelta))
              : et(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = re()),
                (this.relativeTargetOrigin = re()),
                ui(this.relativeTargetOrigin, this.target, g.target),
                et(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Xr && Pn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Ul(this.parent.latestValues) ||
          Rg(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ce.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      et(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      DS(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = re()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (_d(this.prevProjectionDelta.x, this.projectionDelta.x),
          _d(this.prevProjectionDelta.y, this.projectionDelta.y)),
        li(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !jd(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !jd(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Xr && Pn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        s)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ir()),
        (this.projectionDelta = ir()),
        (this.projectionDeltaWithTransform = ir());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = ir();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = re(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        k = this.getStack(),
        p = !k || k.members.length <= 1,
        h = !!(v && !p && this.options.crossfade === !0 && !this.path.some(vx));
      this.animationProgress = 0;
      let m;
      (this.mixTargetDelta = (w) => {
        const S = w / 1e3;
        Ud(f.x, s.x, S),
          Ud(f.y, s.y, S),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ui(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            yx(this.relativeTarget, this.relativeTargetOrigin, d, S),
            m && QS(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = re()),
            et(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), HS(c, u, this.latestValues, S, h, p)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = S);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ut(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          (Eo.hasAnimatedSinceResize = !0),
            (this.currentAnimation = rx(0, Fd, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Fd),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Bg(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || re();
          const f = Qe(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          const d = Qe(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        et(a, l),
          sr(a, c),
          li(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ZS()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ea("z", s, u, this.animationValues);
      for (let c = 0; c < Ta.length; c++)
        Ea(`rotate${Ta[c]}`, s, u, this.animationValues),
          Ea(`skew${Ta[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return ix;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Ao(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Ao(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !kn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = qS(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in ls) {
        if (d[v] === void 0) continue;
        const { correct: k, applyTo: p } = ls[v],
          h = u.transform === "none" ? d[v] : k(d[v], f);
        if (p) {
          const m = p.length;
          for (let w = 0; w < m; w++) u[p[w]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Ao(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(zd),
        this.root.sharedNodes.clear();
    }
  };
}
function sx(e) {
  e.updateLayout();
}
function ax(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Qe(d);
          (d.min = r[f].min), (d.max = d.min + g);
        })
      : Bg(o, n.layoutBox, r) &&
        tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            g = Qe(r[f]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g));
        });
    const a = ir();
    li(a, r, n.layoutBox);
    const l = ir();
    s ? li(l, e.applyTransform(i, !0), n.measuredBox) : li(l, r, n.layoutBox);
    const u = !Og(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = re();
          ui(y, n.layoutBox, d.layoutBox);
          const v = re();
          ui(v, r, g.layoutBox),
            jg(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lx(e) {
  Xr && Pn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ux(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cx(e) {
  e.clearSnapshot();
}
function zd(e) {
  e.clearMeasurements();
}
function fx(e) {
  e.isLayoutDirty = !1;
}
function dx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Bd(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function hx(e) {
  e.resolveTargetDelta();
}
function px(e) {
  e.calcProjection();
}
function mx(e) {
  e.resetSkewAndRotation();
}
function gx(e) {
  e.removeLeadSnapshot();
}
function Ud(e, t, n) {
  (e.translate = J(t.translate, 0, n)),
    (e.scale = J(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Wd(e, t, n, r) {
  (e.min = J(t.min, n.min, r)), (e.max = J(t.max, n.max, r));
}
function yx(e, t, n, r) {
  Wd(e.x, t.x, n.x, r), Wd(e.y, t.y, n.y, r);
}
function vx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Hd = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  bd = Hd("applewebkit/") && !Hd("chrome/") ? Math.round : Te;
function Kd(e) {
  (e.min = bd(e.min)), (e.max = bd(e.max));
}
function Sx(e) {
  Kd(e.x), Kd(e.y);
}
function Bg(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !xS(Od(t), Od(n), 0.2))
  );
}
function xx(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const kx = zg({
    attachResizeListener: (e, t) => Lt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Aa = { current: void 0 },
  Ug = zg({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Aa.current) {
        const e = new kx({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Aa.current = e);
      }
      return Aa.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Px = {
    pan: { Feature: OS },
    drag: { Feature: $S, ProjectionNode: Ug, MeasureLayout: Ng },
  };
function Gd(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Cg()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      const l = a[r];
      l && U.postRender(() => l(o, s));
    };
  return Ot(e.current, n, i, { passive: !e.getProps()[r] });
}
class Cx extends vn {
  mount() {
    this.unmount = $t(Gd(this.node, !0), Gd(this.node, !1));
  }
  unmount() {}
}
class Tx extends vn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = $t(
      Lt(this.node.current, "focus", () => this.onFocus()),
      Lt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Wg = (e, t) => (t ? (e === t ? !0 : Wg(e, t.parentElement)) : !1);
function Ra(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ns(n));
}
class Ex extends vn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Te),
      (this.removeEndListeners = Te),
      (this.removeAccessibleListeners = Te),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = Ot(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: u,
                  onTapCancel: c,
                  globalTapTarget: f,
                } = this.node.getProps(),
                d = !f && !Wg(this.node.current, a.target) ? c : u;
              d && U.update(() => d(a, l));
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Ot(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = $t(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Ra("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && U.postRender(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Lt(this.node.current, "keyup", s)),
              Ra("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Lt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Ra("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Lt(this.node.current, "blur", r);
        this.removeAccessibleListeners = $t(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && U.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Cg()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && U.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Ot(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Lt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = $t(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Hl = new WeakMap(),
  Ma = new WeakMap(),
  Ax = (e) => {
    const t = Hl.get(e.target);
    t && t(e);
  },
  Rx = (e) => {
    e.forEach(Ax);
  };
function Mx({ root: e, ...t }) {
  const n = e || document;
  Ma.has(n) || Ma.set(n, {});
  const r = Ma.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Rx, { root: e, ...t })), r[i];
}
function _x(e, t, n) {
  const r = Mx(t);
  return (
    Hl.set(e, n),
    r.observe(e),
    () => {
      Hl.delete(e), r.unobserve(e);
    }
  );
}
const Dx = { some: 0, all: 1 };
class Lx extends vn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Dx[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return _x(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Vx(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Vx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Nx = {
    inView: { Feature: Lx },
    tap: { Feature: Ex },
    focus: { Feature: Tx },
    hover: { Feature: Cx },
  },
  Ix = { layout: { ProjectionNode: Ug, MeasureLayout: Ng } },
  Is = R.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  $s = R.createContext({}),
  gc = typeof window < "u",
  yc = gc ? R.useLayoutEffect : R.useEffect,
  Hg = R.createContext({ strict: !1 });
function $x(e, t, n, r, i) {
  var o, s;
  const { visualElement: a } = R.useContext($s),
    l = R.useContext(Hg),
    u = R.useContext(pc),
    c = R.useContext(Is).reducedMotion,
    f = R.useRef();
  (r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    g = R.useContext(Vg);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    Ox(f.current, n, i, g);
  const y = R.useRef(!1);
  R.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[mg],
    k = R.useRef(
      !!v &&
        !(
          !((o = window.MotionHandoffIsComplete) === null || o === void 0) &&
          o.call(window, v)
        ) &&
        ((s = window.MotionHasOptimisedAnimation) === null || s === void 0
          ? void 0
          : s.call(window, v))
    );
  return (
    yc(() => {
      d &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        mc.render(d.render),
        k.current && d.animationState && d.animationState.animateChanges());
    }),
    R.useEffect(() => {
      d &&
        (!k.current && d.animationState && d.animationState.animateChanges(),
        k.current &&
          (queueMicrotask(() => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null ||
              p === void 0 ||
              p.call(window, v);
          }),
          (k.current = !1)));
    }),
    d
  );
}
function Ox(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : bg(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && rr(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function bg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : bg(e.parent);
}
function jx(e, t, n) {
  return R.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : rr(n) && (n.current = r));
    },
    [t]
  );
}
function Os(e) {
  return _s(e.animate) || Xu.some((t) => Mi(e[t]));
}
function Kg(e) {
  return !!(Os(e) || e.variants);
}
function Fx(e, t) {
  if (Os(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Mi(n) ? n : void 0,
      animate: Mi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function zx(e) {
  const { initial: t, animate: n } = Fx(e, R.useContext($s));
  return R.useMemo(() => ({ initial: t, animate: n }), [Yd(t), Yd(n)]);
}
function Yd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Xd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Cr = {};
for (const e in Xd) Cr[e] = { isEnabled: (t) => Xd[e].some((n) => !!t[n]) };
function Bx(e) {
  for (const t in e) Cr[t] = { ...Cr[t], ...e[t] };
}
const Ux = Symbol.for("motionComponentSymbol");
function Wx({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Bx(e);
  function o(a, l) {
    let u;
    const c = { ...R.useContext(Is), ...a, layoutId: Hx(a) },
      { isStatic: f } = c,
      d = zx(a),
      g = r(a, f);
    if (!f && gc) {
      bx();
      const y = Kx(c);
      (u = y.MeasureLayout),
        (d.visualElement = $x(i, g, c, t, y.ProjectionNode));
    }
    return N.jsxs($s.Provider, {
      value: d,
      children: [
        u && d.visualElement
          ? N.jsx(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, a, jx(g, d.visualElement, l), g, f, d.visualElement),
      ],
    });
  }
  const s = R.forwardRef(o);
  return (s[Ux] = i), s;
}
function Hx({ layoutId: e }) {
  const t = R.useContext(Lg).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function bx(e, t) {
  R.useContext(Hg).strict;
}
function Kx(e) {
  const { drag: t, layout: n } = Cr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const Gx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function vc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Gx.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Gg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Yg = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Xg(e, t, n, r) {
  Gg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Yg.has(i) ? i : hc(i), t.attrs[i]);
}
function Qg(e, { layout: t, layoutId: n }) {
  return (
    Bn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ls[e] || e === "opacity"))
  );
}
function wc(e, t, n) {
  var r;
  const { style: i } = e,
    o = {};
  for (const s in i)
    (he(i[s]) ||
      (t.style && he(t.style[s])) ||
      Qg(s, e) ||
      ((r = n == null ? void 0 : n.getValue(s)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[s] = i[s]);
  return o;
}
function Zg(e, t, n) {
  const r = wc(e, t, n);
  for (const i in e)
    if (he(e[i]) || he(t[i])) {
      const o =
        Fi.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
function Sc(e) {
  const t = R.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
function Yx(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: Xx(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const qg = (e) => (t, n) => {
  const r = R.useContext($s),
    i = R.useContext(pc),
    o = () => Yx(e, t, r, i);
  return n ? o() : Sc(o);
};
function Xx(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Ao(o[d]);
  let { initial: s, animate: a } = e;
  const l = Os(e),
    u = Kg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? a : s;
  if (f && typeof f != "boolean" && !_s(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Gu(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: k, ...p } = y;
        for (const h in p) {
          let m = p[h];
          if (Array.isArray(m)) {
            const w = c ? m.length - 1 : 0;
            m = m[w];
          }
          m !== null && (i[h] = m);
        }
        for (const h in v) i[h] = v[h];
      }
    }
  }
  return i;
}
const xc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  Jg = () => ({ ...xc(), attrs: {} }),
  e0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Qx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Zx = Fi.length;
function qx(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < Zx; o++) {
    const s = Fi[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = e0(a, rc[s]);
      if (!l) {
        i = !1;
        const c = Qx[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function kc(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Bn.has(l)) {
      s = !0;
      continue;
    } else if (bm(l)) {
      i[l] = u;
      continue;
    } else {
      const c = e0(u, rc[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = qx(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
function Qd(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function Jx(e, t, n) {
  const r = Qd(t, e.x, e.width),
    i = Qd(n, e.y, e.height);
  return `${r} ${i}`;
}
const ek = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  tk = { offset: "strokeDashoffset", array: "strokeDasharray" };
function nk(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? ek : tk;
  e[o.offset] = L.transform(-r);
  const s = L.transform(t),
    a = L.transform(n);
  e[o.array] = `${s} ${a}`;
}
function Pc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f
) {
  if ((kc(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: g, dimensions: y } = e;
  d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = Jx(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    s !== void 0 && nk(d, s, a, l, !1);
}
const Cc = (e) => typeof e == "string" && e.toLowerCase() === "svg",
  rk = {
    useVisualState: qg({
      scrapeMotionValuesFromProps: Zg,
      createRenderState: Jg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        U.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          U.render(() => {
            Pc(n, r, Cc(t.tagName), e.transformTemplate), Xg(t, n);
          });
      },
    }),
  },
  ik = {
    useVisualState: qg({
      scrapeMotionValuesFromProps: wc,
      createRenderState: xc,
    }),
  };
function t0(e, t, n) {
  for (const r in t) !he(t[r]) && !Qg(r, n) && (e[r] = t[r]);
}
function ok({ transformTemplate: e }, t) {
  return R.useMemo(() => {
    const n = xc();
    return kc(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function sk(e, t) {
  const n = e.style || {},
    r = {};
  return t0(r, n, e), Object.assign(r, ok(e, t)), r;
}
function ak(e, t) {
  const n = {},
    r = sk(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const lk = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function us(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    lk.has(e)
  );
}
let n0 = (e) => !us(e);
function uk(e) {
  e && (n0 = (t) => (t.startsWith("on") ? !us(t) : e(t)));
}
try {
  uk(require("@emotion/is-prop-valid").default);
} catch {}
function ck(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((n0(i) ||
        (n === !0 && us(i)) ||
        (!t && !us(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function fk(e, t, n, r) {
  const i = R.useMemo(() => {
    const o = Jg();
    return (
      Pc(o, t, Cc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    t0(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function dk(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (vc(n) ? fk : ak)(r, o, s, n),
      u = ck(r, typeof n == "string", e),
      c = n !== R.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = R.useMemo(() => (he(f) ? f.get() : f), [f]);
    return R.createElement(n, { ...c, children: d });
  };
}
function hk(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const s = {
      ...(vc(r) ? rk : ik),
      preloadedFeatures: e,
      useRender: dk(i),
      createVisualElement: t,
      Component: r,
    };
    return Wx(s);
  };
}
const bl = { current: null },
  r0 = { current: !1 };
function pk() {
  if (((r0.current = !0), !!gc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (bl.current = e.matches);
      e.addListener(t), t();
    } else bl.current = !1;
}
function mk(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (he(i)) e.addValue(r, i);
    else if (he(o)) e.addValue(r, Pr(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Pr(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Zd = new WeakMap(),
  gk = [...Ym, Pe, dn],
  yk = (e) => gk.find(Gm(e)),
  qd = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ];
class vk {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ec),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = Tt.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), U.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = Os(n)),
      (this.isVariantNode = Kg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const d in f) {
      const g = f[d];
      l[d] !== void 0 && he(g) && g.set(l[d], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Zd.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      r0.current || pk(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : bl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Zd.delete(this.current),
      this.projection && this.projection.unmount(),
      Ut(this.notifyUpdate),
      Ut(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Bn.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && U.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Cr) {
      const n = Cr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : re();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < qd.length; r++) {
      const i = qd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = mk(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Pr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (Wm(i) || Um(i))
          ? (i = parseFloat(i))
          : !yk(i) && dn.test(n) && (i = ng(t, n)),
        this.setBaseTarget(t, he(i) ? i.get() : i)),
      he(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const s = Gu(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      s && (i = s[t]);
    }
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !he(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new dc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class i0 extends vk {
  constructor() {
    super(...arguments), (this.KeyframeResolver = rg);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function wk(e) {
  return window.getComputedStyle(e);
}
class Sk extends i0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Gg);
  }
  readValueFromInstance(t, n) {
    if (Bn.has(n)) {
      const r = ic(n);
      return (r && r.default) || 0;
    } else {
      const r = wk(t),
        i = (bm(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return _g(t, n);
  }
  build(t, n, r) {
    kc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return wc(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    he(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
class xk extends i0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = re);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Bn.has(n)) {
      const r = ic(n);
      return (r && r.default) || 0;
    }
    return (n = Yg.has(n) ? n : hc(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Zg(t, n, r);
  }
  build(t, n, r) {
    Pc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Xg(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Cc(t.tagName)), super.mount(t);
  }
}
const kk = (e, t) =>
    vc(e) ? new xk(t) : new Sk(t, { allowProjection: e !== R.Fragment }),
  Pk = hk({ ...dS, ...Nx, ...Px, ...Ix }, kk),
  oe = r1(Pk);
function ye(e) {
  const t = Sc(() => Pr(e)),
    { isStatic: n } = R.useContext(Is);
  if (n) {
    const [, r] = R.useState(e);
    R.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function o0(e, t) {
  const n = ye(t()),
    r = () => n.set(t());
  return (
    r(),
    yc(() => {
      const i = () => U.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), Ut(r);
      };
    }),
    n
  );
}
const Ck = (e) => e && typeof e == "object" && e.mix,
  Tk = (e) => (Ck(e) ? e.mix : void 0);
function Ek(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = fg(i, o, { mixer: Tk(o[0]), ...s });
  return t ? a(r) : a;
}
function Ak(e) {
  (ai.current = []), e();
  const t = o0(ai.current, e);
  return (ai.current = void 0), t;
}
function be(e, t, n, r) {
  if (typeof e == "function") return Ak(e);
  const i = Ek(t, n, r);
  return Array.isArray(e) ? Jd(e, i) : Jd([e], ([o]) => i(o));
}
function Jd(e, t) {
  const n = Sc(() => []);
  return o0(e, () => {
    n.length = 0;
    const r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
function eh(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function Ke(e, t = {}) {
  const { isStatic: n } = R.useContext(Is),
    r = R.useRef(null),
    i = ye(he(e) ? eh(e.get()) : e),
    o = R.useRef(i.get()),
    s = R.useRef(() => {}),
    a = () => {
      const u = r.current;
      u && u.time === 0 && u.sample(ce.delta),
        l(),
        (r.current = _w({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    R.useInsertionEffect(
      () =>
        i.attach(
          (u, c) =>
            n ? c(u) : ((o.current = u), (s.current = c), U.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    yc(() => {
      if (he(e)) return e.on("change", (u) => i.set(eh(u)));
    }, [i]),
    i
  );
}
var Ie = function () {
  return (
    (Ie =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    Ie.apply(this, arguments)
  );
};
function cs(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, i = t.length, o; r < i; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var X = "-ms-",
  ci = "-moz-",
  B = "-webkit-",
  s0 = "comm",
  js = "rule",
  Tc = "decl",
  Rk = "@import",
  a0 = "@keyframes",
  Mk = "@layer",
  l0 = Math.abs,
  Ec = String.fromCharCode,
  Kl = Object.assign;
function _k(e, t) {
  return de(e, 0) ^ 45
    ? (((((((t << 2) ^ de(e, 0)) << 2) ^ de(e, 1)) << 2) ^ de(e, 2)) << 2) ^
        de(e, 3)
    : 0;
}
function u0(e) {
  return e.trim();
}
function Rt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function I(e, t, n) {
  return e.replace(t, n);
}
function Ro(e, t, n) {
  return e.indexOf(t, n);
}
function de(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tr(e, t, n) {
  return e.slice(t, n);
}
function St(e) {
  return e.length;
}
function c0(e) {
  return e.length;
}
function Qr(e, t) {
  return t.push(e), e;
}
function Dk(e, t) {
  return e.map(t).join("");
}
function th(e, t) {
  return e.filter(function (n) {
    return !Rt(n, t);
  });
}
var Fs = 1,
  Er = 1,
  f0 = 0,
  lt = 0,
  se = 0,
  Nr = "";
function zs(e, t, n, r, i, o, s, a) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Fs,
    column: Er,
    length: s,
    return: "",
    siblings: a,
  };
}
function Gt(e, t) {
  return Kl(
    zs("", null, null, "", null, null, 0, e.siblings),
    e,
    { length: -e.length },
    t
  );
}
function Wn(e) {
  for (; e.root; ) e = Gt(e.root, { children: [e] });
  Qr(e, e.siblings);
}
function Lk() {
  return se;
}
function Vk() {
  return (
    (se = lt > 0 ? de(Nr, --lt) : 0), Er--, se === 10 && ((Er = 1), Fs--), se
  );
}
function gt() {
  return (
    (se = lt < f0 ? de(Nr, lt++) : 0), Er++, se === 10 && ((Er = 1), Fs++), se
  );
}
function Ln() {
  return de(Nr, lt);
}
function Mo() {
  return lt;
}
function Bs(e, t) {
  return Tr(Nr, e, t);
}
function Gl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Nk(e) {
  return (Fs = Er = 1), (f0 = St((Nr = e))), (lt = 0), [];
}
function Ik(e) {
  return (Nr = ""), e;
}
function _a(e) {
  return u0(Bs(lt - 1, Yl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function $k(e) {
  for (; (se = Ln()) && se < 33; ) gt();
  return Gl(e) > 2 || Gl(se) > 3 ? "" : " ";
}
function Ok(e, t) {
  for (
    ;
    --t &&
    gt() &&
    !(se < 48 || se > 102 || (se > 57 && se < 65) || (se > 70 && se < 97));

  );
  return Bs(e, Mo() + (t < 6 && Ln() == 32 && gt() == 32));
}
function Yl(e) {
  for (; gt(); )
    switch (se) {
      case e:
        return lt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yl(se);
        break;
      case 40:
        e === 41 && Yl(e);
        break;
      case 92:
        gt();
        break;
    }
  return lt;
}
function jk(e, t) {
  for (; gt() && e + se !== 57; ) if (e + se === 84 && Ln() === 47) break;
  return "/*" + Bs(t, lt - 1) + "*" + Ec(e === 47 ? e : gt());
}
function Fk(e) {
  for (; !Gl(Ln()); ) gt();
  return Bs(e, lt);
}
function zk(e) {
  return Ik(_o("", null, null, null, [""], (e = Nk(e)), 0, [0], e));
}
function _o(e, t, n, r, i, o, s, a, l) {
  for (
    var u = 0,
      c = 0,
      f = s,
      d = 0,
      g = 0,
      y = 0,
      v = 1,
      k = 1,
      p = 1,
      h = 0,
      m = "",
      w = i,
      S = o,
      x = r,
      P = m;
    k;

  )
    switch (((y = h), (h = gt()))) {
      case 40:
        if (y != 108 && de(P, f - 1) == 58) {
          Ro((P += I(_a(h), "&", "&\f")), "&\f", l0(u ? a[u - 1] : 0)) != -1 &&
            (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        P += _a(h);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        P += $k(y);
        break;
      case 92:
        P += Ok(Mo() - 1, 7);
        continue;
      case 47:
        switch (Ln()) {
          case 42:
          case 47:
            Qr(Bk(jk(gt(), Mo()), t, n, l), l);
            break;
          default:
            P += "/";
        }
        break;
      case 123 * v:
        a[u++] = St(P) * p;
      case 125 * v:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            k = 0;
          case 59 + c:
            p == -1 && (P = I(P, /\f/g, "")),
              g > 0 &&
                St(P) - f &&
                Qr(
                  g > 32
                    ? rh(P + ";", r, n, f - 1, l)
                    : rh(I(P, " ", "") + ";", r, n, f - 2, l),
                  l
                );
            break;
          case 59:
            P += ";";
          default:
            if (
              (Qr(
                (x = nh(P, t, n, u, c, i, a, m, (w = []), (S = []), f, o)),
                o
              ),
              h === 123)
            )
              if (c === 0) _o(P, t, x, x, w, o, f, a, S);
              else
                switch (d === 99 && de(P, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    _o(
                      e,
                      x,
                      x,
                      r && Qr(nh(e, x, x, 0, 0, i, a, m, i, (w = []), f, S), S),
                      i,
                      S,
                      f,
                      a,
                      r ? w : S
                    );
                    break;
                  default:
                    _o(P, x, x, x, [""], S, 0, a, S);
                }
        }
        (u = c = g = 0), (v = p = 1), (m = P = ""), (f = s);
        break;
      case 58:
        (f = 1 + St(P)), (g = y);
      default:
        if (v < 1) {
          if (h == 123) --v;
          else if (h == 125 && v++ == 0 && Vk() == 125) continue;
        }
        switch (((P += Ec(h)), h * v)) {
          case 38:
            p = c > 0 ? 1 : ((P += "\f"), -1);
            break;
          case 44:
            (a[u++] = (St(P) - 1) * p), (p = 1);
            break;
          case 64:
            Ln() === 45 && (P += _a(gt())),
              (d = Ln()),
              (c = f = St((m = P += Fk(Mo())))),
              h++;
            break;
          case 45:
            y === 45 && St(P) == 2 && (v = 0);
        }
    }
  return o;
}
function nh(e, t, n, r, i, o, s, a, l, u, c, f) {
  for (
    var d = i - 1, g = i === 0 ? o : [""], y = c0(g), v = 0, k = 0, p = 0;
    v < r;
    ++v
  )
    for (var h = 0, m = Tr(e, d + 1, (d = l0((k = s[v])))), w = e; h < y; ++h)
      (w = u0(k > 0 ? g[h] + " " + m : I(m, /&\f/g, g[h]))) && (l[p++] = w);
  return zs(e, t, n, i === 0 ? js : a, l, u, c, f);
}
function Bk(e, t, n, r) {
  return zs(e, t, n, s0, Ec(Lk()), Tr(e, 2, -2), 0, r);
}
function rh(e, t, n, r, i) {
  return zs(e, t, n, Tc, Tr(e, 0, r), Tr(e, r + 1, -1), r, i);
}
function d0(e, t, n) {
  switch (_k(e, t)) {
    case 5103:
      return B + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e;
    case 4789:
      return ci + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + ci + e + X + e + e;
    case 5936:
      switch (de(e, t + 11)) {
        case 114:
          return B + e + X + I(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + X + I(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + X + I(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return B + e + X + e + e;
    case 6165:
      return B + e + X + "flex-" + e + e;
    case 5187:
      return (
        B + e + I(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + X + "flex-$1$2") + e
      );
    case 5443:
      return (
        B +
        e +
        X +
        "flex-item-" +
        I(e, /flex-|-self/g, "") +
        (Rt(e, /flex-|baseline/)
          ? ""
          : X + "grid-row-" + I(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        B +
        e +
        X +
        "flex-line-pack" +
        I(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return B + e + X + I(e, "shrink", "negative") + e;
    case 5292:
      return B + e + X + I(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        B +
        "box-" +
        I(e, "-grow", "") +
        B +
        e +
        X +
        I(e, "grow", "positive") +
        e
      );
    case 4554:
      return B + I(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return (
        I(I(I(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return I(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return (
        I(
          I(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + X + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        B +
        e +
        e
      );
    case 4200:
      if (!Rt(e, /flex-|baseline/))
        return X + "grid-column-align" + Tr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return X + I(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, i) {
          return (t = i), Rt(r.props, /grid-\w+-end/);
        })
        ? ~Ro(e + (n = n[t].value), "span", 0)
          ? e
          : X +
            I(e, "-start", "") +
            e +
            X +
            "grid-row-span:" +
            (~Ro(n, "span", 0) ? Rt(n, /\d+/) : +Rt(n, /\d+/) - +Rt(e, /\d+/)) +
            ";"
        : X + I(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Rt(r.props, /grid-\w+-start/);
        })
        ? e
        : X + I(I(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e, /(.+)-inline(.+)/, B + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (St(e) - 1 - t > 6)
        switch (de(e, t + 1)) {
          case 109:
            if (de(e, t + 4) !== 45) break;
          case 102:
            return (
              I(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  B +
                  "$2-$3$1" +
                  ci +
                  (de(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Ro(e, "stretch", 0)
              ? d0(I(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return I(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, i, o, s, a, l, u) {
          return (
            X +
            i +
            ":" +
            o +
            u +
            (s ? X + i + "-span:" + (a ? l : +l - +o) + u : "") +
            e
          );
        }
      );
    case 4949:
      if (de(e, t + 6) === 121) return I(e, ":", ":" + B) + e;
      break;
    case 6444:
      switch (de(e, de(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            I(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                B +
                (de(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                B +
                "$2$3$1" +
                X +
                "$2box$3"
            ) + e
          );
        case 100:
          return I(e, ":", ":" + X) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return I(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function fs(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function Uk(e, t, n, r) {
  switch (e.type) {
    case Mk:
      if (e.children.length) break;
    case Rk:
    case Tc:
      return (e.return = e.return || e.value);
    case s0:
      return "";
    case a0:
      return (e.return = e.value + "{" + fs(e.children, r) + "}");
    case js:
      if (!St((e.value = e.props.join(",")))) return "";
  }
  return St((n = fs(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Wk(e) {
  var t = c0(e);
  return function (n, r, i, o) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, i, o) || "";
    return s;
  };
}
function Hk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function bk(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Tc:
        e.return = d0(e.value, e.length, n);
        return;
      case a0:
        return fs([Gt(e, { value: I(e.value, "@", "@" + B) })], r);
      case js:
        if (e.length)
          return Dk((n = e.props), function (i) {
            switch (Rt(i, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                Wn(Gt(e, { props: [I(i, /:(read-\w+)/, ":" + ci + "$1")] })),
                  Wn(Gt(e, { props: [i] })),
                  Kl(e, { props: th(n, r) });
                break;
              case "::placeholder":
                Wn(
                  Gt(e, { props: [I(i, /:(plac\w+)/, ":" + B + "input-$1")] })
                ),
                  Wn(Gt(e, { props: [I(i, /:(plac\w+)/, ":" + ci + "$1")] })),
                  Wn(Gt(e, { props: [I(i, /:(plac\w+)/, X + "input-$1")] })),
                  Wn(Gt(e, { props: [i] })),
                  Kl(e, { props: th(n, r) });
                break;
            }
            return "";
          });
    }
}
var Kk = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  We = {},
  Ar =
    (typeof process < "u" &&
      We !== void 0 &&
      (We.REACT_APP_SC_ATTR || We.SC_ATTR)) ||
    "data-styled",
  h0 = "active",
  p0 = "data-styled-version",
  Us = "6.1.13",
  Ac = `/*!sc*/
`,
  ds = typeof window < "u" && "HTMLElement" in window,
  Gk = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      We !== void 0 &&
      We.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      We.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? We.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      We.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      We !== void 0 &&
      We.SC_DISABLE_SPEEDY !== void 0 &&
      We.SC_DISABLE_SPEEDY !== "" &&
      We.SC_DISABLE_SPEEDY !== "false" &&
      We.SC_DISABLE_SPEEDY),
  Ws = Object.freeze([]),
  Rr = Object.freeze({});
function Yk(e, t, n) {
  return (
    n === void 0 && (n = Rr), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var m0 = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Xk = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Qk = /(^-|-$)/g;
function ih(e) {
  return e.replace(Xk, "-").replace(Qk, "");
}
var Zk = /(a)(d)/gi,
  co = 52,
  oh = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Xl(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > co; t = (t / co) | 0) n = oh(t % co) + n;
  return (oh(t % co) + n).replace(Zk, "$1-$2");
}
var Da,
  g0 = 5381,
  ar = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  y0 = function (e) {
    return ar(g0, e);
  };
function qk(e) {
  return Xl(y0(e) >>> 0);
}
function Jk(e) {
  return e.displayName || e.name || "Component";
}
function La(e) {
  return typeof e == "string" && !0;
}
var v0 = typeof Symbol == "function" && Symbol.for,
  w0 = v0 ? Symbol.for("react.memo") : 60115,
  eP = v0 ? Symbol.for("react.forward_ref") : 60112,
  tP = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  nP = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  S0 = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  rP =
    (((Da = {})[eP] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Da[w0] = S0),
    Da);
function sh(e) {
  return ("type" in (t = e) && t.type.$$typeof) === w0
    ? S0
    : "$$typeof" in e
    ? rP[e.$$typeof]
    : tP;
  var t;
}
var iP = Object.defineProperty,
  oP = Object.getOwnPropertyNames,
  ah = Object.getOwnPropertySymbols,
  sP = Object.getOwnPropertyDescriptor,
  aP = Object.getPrototypeOf,
  lh = Object.prototype;
function x0(e, t, n) {
  if (typeof t != "string") {
    if (lh) {
      var r = aP(t);
      r && r !== lh && x0(e, r, n);
    }
    var i = oP(t);
    ah && (i = i.concat(ah(t)));
    for (var o = sh(e), s = sh(t), a = 0; a < i.length; ++a) {
      var l = i[a];
      if (!(l in nP || (n && n[l]) || (s && l in s) || (o && l in o))) {
        var u = sP(t, l);
        try {
          iP(e, l, u);
        } catch {}
      }
    }
  }
  return e;
}
function Mr(e) {
  return typeof e == "function";
}
function Rc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Rn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function uh(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function Li(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function Ql(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !Li(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = Ql(e[r], t[r]);
  else if (Li(t)) for (var r in t) e[r] = Ql(e[r], t[r]);
  return e;
}
function Mc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function Ui(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var lP = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, i = r.length, o = i; t >= o; )
            if ((o <<= 1) < 0) throw Ui(16, "".concat(t));
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(r),
            (this.length = o);
          for (var s = i; s < o; s++) this.groupSizes[s] = 0;
        }
        for (
          var a = this.indexOfGroup(t + 1), l = ((s = 0), n.length);
          s < l;
          s++
        )
          this.tag.insertRule(a, n[s]) && (this.groupSizes[t]++, a++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            i = r + n;
          this.groupSizes[t] = 0;
          for (var o = r; o < i; o++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            i = this.indexOfGroup(t),
            o = i + r,
            s = i;
          s < o;
          s++
        )
          n += "".concat(this.tag.getRule(s)).concat(Ac);
        return n;
      }),
      e
    );
  })(),
  Do = new Map(),
  hs = new Map(),
  Lo = 1,
  fo = function (e) {
    if (Do.has(e)) return Do.get(e);
    for (; hs.has(Lo); ) Lo++;
    var t = Lo++;
    return Do.set(e, t), hs.set(t, e), t;
  },
  uP = function (e, t) {
    (Lo = t + 1), Do.set(e, t), hs.set(t, e);
  },
  cP = "style[".concat(Ar, "][").concat(p0, '="').concat(Us, '"]'),
  fP = new RegExp(
    "^".concat(Ar, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  dP = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, s = i.length; o < s; o++)
      (r = i[o]) && e.registerName(t, r);
  },
  hP = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Ac),
        i = [],
        o = 0,
        s = r.length;
      o < s;
      o++
    ) {
      var a = r[o].trim();
      if (a) {
        var l = a.match(fP);
        if (l) {
          var u = 0 | parseInt(l[1], 10),
            c = l[2];
          u !== 0 && (uP(c, u), dP(e, c, l[3]), e.getTag().insertRules(u, i)),
            (i.length = 0);
        } else i.push(a);
      }
    }
  },
  ch = function (e) {
    for (
      var t = document.querySelectorAll(cP), n = 0, r = t.length;
      n < r;
      n++
    ) {
      var i = t[n];
      i &&
        i.getAttribute(Ar) !== h0 &&
        (hP(e, i), i.parentNode && i.parentNode.removeChild(i));
    }
  };
function pP() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var k0 = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (a) {
        var l = Array.from(a.querySelectorAll("style[".concat(Ar, "]")));
        return l[l.length - 1];
      })(n),
      o = i !== void 0 ? i.nextSibling : null;
    r.setAttribute(Ar, h0), r.setAttribute(p0, Us);
    var s = pP();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, o), r;
  },
  mP = (function () {
    function e(t) {
      (this.element = k0(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, i = 0, o = r.length; i < o; i++) {
            var s = r[i];
            if (s.ownerNode === n) return s;
          }
          throw Ui(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  gP = (function () {
    function e(t) {
      (this.element = k0(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  yP = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  fh = ds,
  vP = { isServer: !ds, useCSSOMInjection: !Gk },
  P0 = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Rr), n === void 0 && (n = {});
      var i = this;
      (this.options = Ie(Ie({}, vP), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server && ds && fh && ((fh = !1), ch(this)),
        Mc(this, function () {
          return (function (o) {
            for (
              var s = o.getTag(),
                a = s.length,
                l = "",
                u = function (f) {
                  var d = (function (p) {
                    return hs.get(p);
                  })(f);
                  if (d === void 0) return "continue";
                  var g = o.names.get(d),
                    y = s.getGroup(f);
                  if (g === void 0 || !g.size || y.length === 0)
                    return "continue";
                  var v = ""
                      .concat(Ar, ".g")
                      .concat(f, '[id="')
                      .concat(d, '"]'),
                    k = "";
                  g !== void 0 &&
                    g.forEach(function (p) {
                      p.length > 0 && (k += "".concat(p, ","));
                    }),
                    (l += ""
                      .concat(y)
                      .concat(v, '{content:"')
                      .concat(k, '"}')
                      .concat(Ac));
                },
                c = 0;
              c < a;
              c++
            )
              u(c);
            return l;
          })(i);
        });
    }
    return (
      (e.registerId = function (t) {
        return fo(t);
      }),
      (e.prototype.rehydrate = function () {
        !this.server && ds && ch(this);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Ie(Ie({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                i = n.target;
              return n.isServer ? new yP(i) : r ? new mP(i) : new gP(i);
            })(this.options)),
            new lP(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((fo(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(fo(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(fo(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  wP = /&/g,
  SP = /^\s*\/\/.*$/gm;
function C0(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = C0(n.children, t)),
      n
    );
  });
}
function xP(e) {
  var t,
    n,
    r,
    i = Rr,
    o = i.options,
    s = o === void 0 ? Rr : o,
    a = i.plugins,
    l = a === void 0 ? Ws : a,
    u = function (d, g, y) {
      return y.startsWith(n) && y.endsWith(n) && y.replaceAll(n, "").length > 0
        ? ".".concat(t)
        : d;
    },
    c = l.slice();
  c.push(function (d) {
    d.type === js &&
      d.value.includes("&") &&
      (d.props[0] = d.props[0].replace(wP, n).replace(r, u));
  }),
    s.prefix && c.push(bk),
    c.push(Uk);
  var f = function (d, g, y, v) {
    g === void 0 && (g = ""),
      y === void 0 && (y = ""),
      v === void 0 && (v = "&"),
      (t = v),
      (n = g),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var k = d.replace(SP, ""),
      p = zk(y || g ? "".concat(y, " ").concat(g, " { ").concat(k, " }") : k);
    s.namespace && (p = C0(p, s.namespace));
    var h = [];
    return (
      fs(
        p,
        Wk(
          c.concat(
            Hk(function (m) {
              return h.push(m);
            })
          )
        )
      ),
      h
    );
  };
  return (
    (f.hash = l.length
      ? l
          .reduce(function (d, g) {
            return g.name || Ui(15), ar(d, g.name);
          }, g0)
          .toString()
      : ""),
    f
  );
}
var kP = new P0(),
  Zl = xP(),
  T0 = fi.createContext({
    shouldForwardProp: void 0,
    styleSheet: kP,
    stylis: Zl,
  });
T0.Consumer;
fi.createContext(void 0);
function dh() {
  return R.useContext(T0);
}
var PP = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (i, o) {
        o === void 0 && (o = Zl);
        var s = r.name + o.hash;
        i.hasNameForId(r.id, s) ||
          i.insertRules(r.id, s, o(r.rules, s, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Mc(this, function () {
          throw Ui(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Zl), this.name + t.hash;
      }),
      e
    );
  })(),
  CP = function (e) {
    return e >= "A" && e <= "Z";
  };
function hh(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    CP(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var E0 = function (e) {
    return e == null || e === !1 || e === "";
  },
  A0 = function (e) {
    var t,
      n,
      r = [];
    for (var i in e) {
      var o = e[i];
      e.hasOwnProperty(i) &&
        !E0(o) &&
        ((Array.isArray(o) && o.isCss) || Mr(o)
          ? r.push("".concat(hh(i), ":"), o, ";")
          : Li(o)
          ? r.push.apply(r, cs(cs(["".concat(i, " {")], A0(o), !1), ["}"], !1))
          : r.push(
              ""
                .concat(hh(i), ": ")
                .concat(
                  ((t = i),
                  (n = o) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in Kk ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function Vn(e, t, n, r) {
  if (E0(e)) return [];
  if (Rc(e)) return [".".concat(e.styledComponentId)];
  if (Mr(e)) {
    if (!Mr((o = e)) || (o.prototype && o.prototype.isReactComponent) || !t)
      return [e];
    var i = e(t);
    return Vn(i, t, n, r);
  }
  var o;
  return e instanceof PP
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : Li(e)
    ? A0(e)
    : Array.isArray(e)
    ? Array.prototype.concat.apply(
        Ws,
        e.map(function (s) {
          return Vn(s, t, n, r);
        })
      )
    : [e.toString()];
}
function TP(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (Mr(n) && !Rc(n)) return !1;
  }
  return !0;
}
var EP = y0(Us),
  AP = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && TP(t)),
        (this.componentId = n),
        (this.baseHash = ar(EP, n)),
        (this.baseStyle = r),
        P0.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            i = Rn(i, this.staticRulesId);
          else {
            var o = uh(Vn(this.rules, t, n, r)),
              s = Xl(ar(this.baseHash, o) >>> 0);
            if (!n.hasNameForId(this.componentId, s)) {
              var a = r(o, ".".concat(s), void 0, this.componentId);
              n.insertRules(this.componentId, s, a);
            }
            (i = Rn(i, s)), (this.staticRulesId = s);
          }
        else {
          for (
            var l = ar(this.baseHash, r.hash), u = "", c = 0;
            c < this.rules.length;
            c++
          ) {
            var f = this.rules[c];
            if (typeof f == "string") u += f;
            else if (f) {
              var d = uh(Vn(f, t, n, r));
              (l = ar(l, d + c)), (u += d);
            }
          }
          if (u) {
            var g = Xl(l >>> 0);
            n.hasNameForId(this.componentId, g) ||
              n.insertRules(
                this.componentId,
                g,
                r(u, ".".concat(g), void 0, this.componentId)
              ),
              (i = Rn(i, g));
          }
        }
        return i;
      }),
      e
    );
  })(),
  R0 = fi.createContext(void 0);
R0.Consumer;
var Va = {};
function RP(e, t, n) {
  var r = Rc(e),
    i = e,
    o = !La(e),
    s = t.attrs,
    a = s === void 0 ? Ws : s,
    l = t.componentId,
    u =
      l === void 0
        ? (function (w, S) {
            var x = typeof w != "string" ? "sc" : ih(w);
            Va[x] = (Va[x] || 0) + 1;
            var P = "".concat(x, "-").concat(qk(Us + x + Va[x]));
            return S ? "".concat(S, "-").concat(P) : P;
          })(t.displayName, t.parentComponentId)
        : l,
    c = t.displayName,
    f =
      c === void 0
        ? (function (w) {
            return La(w) ? "styled.".concat(w) : "Styled(".concat(Jk(w), ")");
          })(e)
        : c,
    d =
      t.displayName && t.componentId
        ? "".concat(ih(t.displayName), "-").concat(t.componentId)
        : t.componentId || u,
    g = r && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
    y = t.shouldForwardProp;
  if (r && i.shouldForwardProp) {
    var v = i.shouldForwardProp;
    if (t.shouldForwardProp) {
      var k = t.shouldForwardProp;
      y = function (w, S) {
        return v(w, S) && k(w, S);
      };
    } else y = v;
  }
  var p = new AP(n, d, r ? i.componentStyle : void 0);
  function h(w, S) {
    return (function (x, P, C) {
      var V = x.attrs,
        _ = x.componentStyle,
        b = x.defaultProps,
        G = x.foldedComponentIds,
        Se = x.styledComponentId,
        Le = x.target,
        Fe = fi.useContext(R0),
        ze = dh(),
        W = x.shouldForwardProp || ze.shouldForwardProp,
        E = Yk(P, Fe, b) || Rr,
        A = (function (Je, me, Ue) {
          for (
            var Et,
              ut = Ie(Ie({}, me), { className: void 0, theme: Ue }),
              Hs = 0;
            Hs < Je.length;
            Hs += 1
          ) {
            var Wi = Mr((Et = Je[Hs])) ? Et(ut) : Et;
            for (var Ht in Wi)
              ut[Ht] =
                Ht === "className"
                  ? Rn(ut[Ht], Wi[Ht])
                  : Ht === "style"
                  ? Ie(Ie({}, ut[Ht]), Wi[Ht])
                  : Wi[Ht];
          }
          return (
            me.className && (ut.className = Rn(ut.className, me.className)), ut
          );
        })(V, P, E),
        D = A.as || Le,
        O = {};
      for (var j in A)
        A[j] === void 0 ||
          j[0] === "$" ||
          j === "as" ||
          (j === "theme" && A.theme === E) ||
          (j === "forwardedAs"
            ? (O.as = A.forwardedAs)
            : (W && !W(j, D)) || (O[j] = A[j]));
      var Be = (function (Je, me) {
          var Ue = dh(),
            Et = Je.generateAndInjectStyles(me, Ue.styleSheet, Ue.stylis);
          return Et;
        })(_, A),
        Ae = Rn(G, Se);
      return (
        Be && (Ae += " " + Be),
        A.className && (Ae += " " + A.className),
        (O[La(D) && !m0.has(D) ? "class" : "className"] = Ae),
        (O.ref = C),
        R.createElement(D, O)
      );
    })(m, w, S);
  }
  h.displayName = f;
  var m = fi.forwardRef(h);
  return (
    (m.attrs = g),
    (m.componentStyle = p),
    (m.displayName = f),
    (m.shouldForwardProp = y),
    (m.foldedComponentIds = r
      ? Rn(i.foldedComponentIds, i.styledComponentId)
      : ""),
    (m.styledComponentId = d),
    (m.target = r ? i.target : e),
    Object.defineProperty(m, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (w) {
        this._foldedDefaultProps = r
          ? (function (S) {
              for (var x = [], P = 1; P < arguments.length; P++)
                x[P - 1] = arguments[P];
              for (var C = 0, V = x; C < V.length; C++) Ql(S, V[C], !0);
              return S;
            })({}, i.defaultProps, w)
          : w;
      },
    }),
    Mc(m, function () {
      return ".".concat(m.styledComponentId);
    }),
    o &&
      x0(m, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    m
  );
}
function ph(e, t) {
  for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var mh = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function MP(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (Mr(e) || Li(e)) return mh(Vn(ph(Ws, cs([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string"
    ? Vn(r)
    : mh(Vn(ph(r, t)));
}
function ql(e, t, n) {
  if ((n === void 0 && (n = Rr), !t)) throw Ui(1, t);
  var r = function (i) {
    for (var o = [], s = 1; s < arguments.length; s++) o[s - 1] = arguments[s];
    return e(t, n, MP.apply(void 0, cs([i], o, !1)));
  };
  return (
    (r.attrs = function (i) {
      return ql(
        e,
        t,
        Ie(Ie({}, n), {
          attrs: Array.prototype.concat(n.attrs, i).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (i) {
      return ql(e, t, Ie(Ie({}, n), i));
    }),
    r
  );
}
var M0 = function (e) {
    return ql(RP, e);
  },
  z = M0;
m0.forEach(function (e) {
  z[e] = M0(e);
});
const Na = 1e3,
  Ia = 10,
  hn = 70,
  _P = () => {
    const [e, t] = R.useState(0),
      [n, r] = R.useState(!1),
      [i, o] = R.useState(!1),
      [s, a] = R.useState(0),
      [l, u] = R.useState(0),
      c = R.useRef(null);
    R.useEffect(() => {
      c.current && (a(c.current.offsetWidth), u(c.current.offsetHeight));
    }, [window.innerWidth, window.innerHeight]);
    const f = ye(0),
      d = ye(0),
      g = ye(0),
      y = Ke(g, { stiffness: Na, damping: Ia }),
      v = be(() => f.get() * 20 + 40 + y.get()),
      k = be(() => d.get() * 20 + 40),
      p = be(() => f.get() * 100),
      h = be(() => d.get() * 100),
      m = Ke(p, { stiffness: Na, damping: Ia }),
      w = Ke(h, { stiffness: Na, damping: Ia }),
      S = ye(0),
      x = ye(0),
      P = be(() => S.get() + y.get()),
      C = Ke(P, { stiffness: 100, damping: 20 }),
      V = Ke(x, { stiffness: 100, damping: 20 }),
      _ = () => {
        n ? (g.set(0), r(!1)) : (g.set(180), r(!0)), t(Math.random());
      },
      b = (A) => {
        o(!0);
        const D = A.clientX,
          O = A.clientY,
          j = window.innerWidth / 2,
          Be = window.innerHeight / 2,
          Ae = ((D - j) / j) * 45,
          Je = ((O - Be) / Be) * 45,
          me = A.currentTarget.getBoundingClientRect().left,
          Ue = A.currentTarget.getBoundingClientRect().top,
          Et = A.currentTarget.offsetWidth,
          ut = A.currentTarget.offsetHeight;
        S.set(-Ae),
          x.set(Je),
          f.set((D - me) / Et),
          d.set((O - Ue) / ut),
          t(Math.random());
      },
      G = (A) => {
        o(!1), S.set(0), x.set(0), t(Math.random());
      },
      Se = `radial-gradient(farthest-corner circle at ${p.get()}% ${h.get()}%, hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%)`,
      Le = `radial-gradient(farthest-corner circle at ${
        100 - p.get()
      }% ${h.get()}%, hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%)`,
      Fe = `url("https://poke-holo.simey.me/img/grain.webp"),
    repeating-linear-gradient(
      0deg,
      hsl(2, 100%, 73%) calc(5% * 1),
      hsl(53, 100%, 69%) calc(5% * 2),
      hsl(93, 100%, 69%) calc(5% * 3),
      hsl(176, 100%, 76%) calc(5% * 4),
      hsl(228, 100%, 74%) calc(5% * 5),
      hsl(283, 100%, 73%) calc(5% * 6),
      hsl(2, 100%, 73%) calc(5% * 7)
    ),
    repeating-linear-gradient(
      133deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 29%, 66%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ),
    radial-gradient(
      farthest-corner circle at ${m.get()}% ${w.get()}%,
      hsla(0, 0%, 0%, 0.1) 12%,
      hsla(0, 0%, 0%, 0.15) 20%,
      hsla(0, 0%, 0%, 0.25) 120%
    )`,
      ze = `conic-gradient(
      from ${S.get() * 2}deg at 50% 50%,
      rgba(0, 0, 0, 1) 0deg,
      rgba(255, 255, 255, 0.7) 17deg,
      rgba(0, 0, 0, 1) 88deg,
      rgba(255, 255, 255, 0.7) 152deg,
      rgba(0, 0, 0, 1) 225deg,
      rgba(255, 255, 255, 0.7) 289deg,
      rgba(0, 0, 0, 1) 360deg
    ),
    conic-gradient(
      from ${180 - x.get() * 2}deg at 50% 50%,
      rgba(0, 0, 0, 1) 0deg,
      rgba(255, 255, 255, 1) 30deg,
      rgba(0, 0, 0, 1) 96deg,
      rgba(255, 255, 255, 1) 169deg,
      rgba(0, 0, 0, 1) 229deg,
      rgba(255, 255, 255, 1) 285deg,
      rgba(0, 0, 0, 1) 360deg
    ),
    radial-gradient(
      88% 127% at 13% 13%,
      rgba(248, 110, 251, 1) 8%,
      rgba(115, 66, 255, 1) 35%,
      rgba(66, 232, 255, 1) 63%,
      rgba(66, 255, 107, 1) 100%
    )`,
      W = `center, 0% ${k.get()}%,
    ${v.get()}% ${k.get()}%,
    ${v.get()}% ${k.get()}%`,
      E = `center, 0% ${k.get()}%,
    -${v.get()}% -${k.get()}%,
    ${v.get()}% ${k.get()}%`;
    return N.jsx(IP, {
      children: N.jsxs($P, {
        onClick: () => _(),
        onMouseMove: (A) => b(A),
        onMouseLeave: (A) => G(),
        whileHover: { scale: 1.1, transition: { duration: 0.3 } },
        ref: c,
        children: [
          N.jsxs(VP, {
            style: { rotateX: V, rotateY: C },
            children: [
              N.jsx(jP, { src: "/art-cards/back.png" }),
              N.jsx(gh, { style: { backgroundImage: Le } }),
            ],
          }),
          N.jsxs(LP, {
            style: { rotateX: V, rotateY: C, translateZ: 1 },
            children: [
              N.jsx(DP, {
                style: {
                  background: ze,
                  width: s / 10,
                  height: s / 10,
                  top: l / 21,
                  right: s / 15.8,
                  opacity: i ? 0.65 : 0.2,
                },
              }),
              N.jsx(OP, { src: "/art-cards/joan_of_arc.jpg" }),
              N.jsx(FP, {
                style: { backgroundImage: Fe, backgroundPosition: W },
                children: N.jsx(zP, {
                  style: { backgroundImage: Fe, backgroundPosition: E },
                }),
              }),
              N.jsx(NP, {}),
              N.jsx(gh, { style: { backgroundImage: Se } }),
            ],
          }),
        ],
      }),
    });
  },
  DP = z(oe.div)`
  position: absolute;
  transform: translateZ(2px);
  background-blend-mode: screen, multiply, normal;
  mix-blend-mode: lighten;
  -webkit-mask-image: url("/art-cards/pngdiamondmask.png");
  mask-image: url("/art-cards/pngdiamondmask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
  transition: opacity 0.3s ease-out;

  filter: brightness(1.8) contrast(0.8);
`,
  LP = z(oe.div)`
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  border-radius: 4px;
  height: 70vh;
`,
  VP = z(oe.div)`
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 70vh;
`,
  NP = z(oe.div)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url("hdr_pixel.avif");
  height: 100%;
  width: 100%;
  position: absolute;
  mix-blend-mode: multiply;
  -webkit-mask-image: url("/art-cards/joan_of_arc_mask.png");
  mask-image: url("/art-cards/joan_of_arc_mask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
  opacity: 0.05;
  height: ${hn}vh;
`,
  IP = z.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`,
  $P = z(oe.div)`
  height: ${hn}vh;
  position: absolute;
  cursor: pointer;
  transform-style: preserve-3d;
  border-radius: 4px;
`,
  OP = z.img`
  height: ${hn}vh;
`,
  jP = z.img`
  height: ${hn}vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  z-index: 2;
  transform: translateZ(1px) scaleX(-1);
`,
  gh = z(oe.div)`
  height: ${hn}vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: ${hn}vh;
  width: 100%;
  border-radius: 4px;
  opacity: 0.3;
  mix-blend-mode: hard-light;
  filter: brightness(0.9) contrast(1.75);
`,
  FP = z(oe.div)`
  height: ${hn}vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: ${hn}vh;
  width: 100%;
  border-radius: 4px;

  background: transparent;
  mix-blend-mode: color-dodge;

  filter: brightness(0.7) contrast(2) saturate(0.5);

  background-blend-mode: screen, hue, hard-light;
  background-size: 500px 100%, 200% 700%, 300% 100%, 200% 100%;

  background-blend-mode: screen, hue, hard-light;
  filter: brightness(0.8) contrast(2.95) saturate(0.65);
  -webkit-mask-image: url("/art-cards/joan_of_arc_mask.png");
  mask-image: url("/art-cards/joan_of_arc_mask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
`,
  zP = z(oe.div)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  mix-blend-mode: color-dodge;
  filter: brightness(0.7) contrast(2) saturate(0.5);
  background-blend-mode: screen, hue, hard-light;
  background-size: 500px 100%, 200% 400%, 195% 100%, 200% 100%;
  background-blend-mode: screen, hue, hard-light;
  filter: brightness(0.8) contrast(2.95) saturate(0.65);
  content: "";
  filter: brightness(1) contrast(2.5) saturate(1.75);
  mix-blend-mode: soft-light;
`,
  BP = 1e3,
  UP = 10,
  Vi = 70,
  WP = () => {
    const [e, t] = R.useState(0),
      [n, r] = R.useState(!1),
      [i, o] = R.useState(!1),
      [s, a] = R.useState(0),
      [l, u] = R.useState(0),
      c = R.useRef(null);
    R.useEffect(() => {
      c.current && (a(c.current.offsetWidth), u(c.current.offsetHeight));
    }, [window.innerWidth, window.innerHeight]);
    const f = ye(0),
      d = ye(0),
      g = ye(0),
      y = Ke(g, { stiffness: BP, damping: UP }),
      v = be(() => f.get() * 100),
      k = be(() => d.get() * 100),
      p = ye(0),
      h = ye(0),
      m = be(() => p.get() + y.get()),
      w = Ke(m, { stiffness: 100, damping: 20 }),
      S = Ke(h, { stiffness: 100, damping: 20 }),
      x = () => {
        n ? (g.set(0), r(!1)) : (g.set(180), r(!0)), t(Math.random());
      },
      P = (G) => {
        o(!0);
        const Se = G.clientX,
          Le = G.clientY,
          Fe = window.innerWidth / 2,
          ze = window.innerHeight / 2,
          W = ((Se - Fe) / Fe) * 45,
          E = ((Le - ze) / ze) * 45,
          A = G.currentTarget.getBoundingClientRect().left,
          D = G.currentTarget.getBoundingClientRect().top,
          O = G.currentTarget.offsetWidth,
          j = G.currentTarget.offsetHeight;
        p.set(-W),
          h.set(E),
          f.set((Se - A) / O),
          d.set((Le - D) / j),
          t(Math.random());
      },
      C = (G) => {
        o(!1), p.set(0), h.set(0), t(Math.random());
      },
      V = `radial-gradient(farthest-corner circle at ${v.get()}% ${k.get()}%, hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%)`,
      _ = `radial-gradient(farthest-corner circle at ${
        100 - v.get()
      }% ${k.get()}%, hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%)`,
      b = `conic-gradient(
      from ${p.get() * 2}deg at 50% 50%,
      rgba(0, 0, 0, 1) 0deg,
      rgba(255, 255, 255, 0.7) 17deg,
      rgba(0, 0, 0, 1) 88deg,
      rgba(255, 255, 255, 0.7) 152deg,
      rgba(0, 0, 0, 1) 225deg,
      rgba(255, 255, 255, 0.7) 289deg,
      rgba(0, 0, 0, 1) 360deg
    ),
    conic-gradient(
      from ${180 - h.get() * 2}deg at 50% 50%,
      rgba(0, 0, 0, 1) 0deg,
      rgba(255, 255, 255, 1) 30deg,
      rgba(0, 0, 0, 1) 96deg,
      rgba(255, 255, 255, 1) 169deg,
      rgba(0, 0, 0, 1) 229deg,
      rgba(255, 255, 255, 1) 285deg,
      rgba(0, 0, 0, 1) 360deg
    ),
    radial-gradient(
      88% 127% at 13% 13%,
      rgba(248, 110, 251, 1) 8%,
      rgba(115, 66, 255, 1) 35%,
      rgba(66, 232, 255, 1) 63%,
      rgba(66, 255, 107, 1) 100%
    )`;
    return N.jsx(GP, {
      children: N.jsxs(YP, {
        onClick: () => x(),
        onMouseMove: (G) => P(G),
        onMouseLeave: (G) => C(),
        whileHover: { scale: 1.1, transition: { duration: 0.3 } },
        ref: c,
        children: [
          N.jsxs(KP, {
            style: { rotateX: S, rotateY: w },
            children: [
              N.jsx(QP, { src: "/art-cards/back.png" }),
              N.jsx(yh, { style: { backgroundImage: _ } }),
            ],
          }),
          N.jsxs(bP, {
            style: { rotateX: S, rotateY: w, translateZ: 1 },
            children: [
              N.jsx(HP, {
                style: {
                  background: b,
                  width: s / 10,
                  height: s / 10,
                  top: l / 21,
                  right: s / 15.8,
                  opacity: i ? 0.7 : 0.2,
                },
              }),
              N.jsx(XP, { src: "/art-cards/gathering-almond-blossoms.jpg" }),
              N.jsx(yh, { style: { backgroundImage: V } }),
            ],
          }),
        ],
      }),
    });
  },
  HP = z(oe.div)`
  position: absolute;
  transform: translateZ(2px);
  background-blend-mode: screen, multiply, normal;
  mix-blend-mode: lighten;
  -webkit-mask-image: url("/art-cards/pngdiamondmask.png");
  mask-image: url("/art-cards/pngdiamondmask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
  transition: opacity 0.3s ease-out;

  filter: brightness(1.5) contrast(0.8);
`,
  bP = z(oe.div)`
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  border-radius: 4px;
  height: 70vh;
`,
  KP = z(oe.div)`
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 70vh;
`,
  GP = z.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`,
  YP = z(oe.div)`
  height: ${Vi}vh;
  position: absolute;
  cursor: pointer;
  transform-style: preserve-3d;
  border-radius: 4px;
`,
  XP = z.img`
  height: ${Vi}vh;
`,
  QP = z.img`
  height: ${Vi}vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  z-index: 2;
  transform: translateZ(1px) scaleX(-1);
`,
  yh = z(oe.div)`
  height: ${Vi}vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: ${Vi}vh;
  width: 100%;
  border-radius: 4px;
  opacity: 0.3;
  mix-blend-mode: hard-light;
  filter: brightness(0.9) contrast(1.75);
`,
  $a = 1e3,
  Oa = 10,
  pn = 70,
  ZP = () => {
    const [e, t] = R.useState(0),
      [n, r] = R.useState(!1),
      [i, o] = R.useState(!1),
      [s, a] = R.useState(0),
      [l, u] = R.useState(0),
      c = R.useRef(null);
    R.useEffect(() => {
      c.current && (a(c.current.offsetWidth), u(c.current.offsetHeight));
    }, [window.innerWidth, window.innerHeight]);
    const f = ye(0),
      d = ye(0),
      g = ye(0),
      y = Ke(g, { stiffness: $a, damping: Oa }),
      v = be(() => f.get() * 20 + 40 + y.get()),
      k = be(() => d.get() * 20 + 40),
      p = be(() => f.get() * 100),
      h = be(() => d.get() * 100),
      m = Ke(p, { stiffness: $a, damping: Oa }),
      w = Ke(h, { stiffness: $a, damping: Oa }),
      S = ye(0),
      x = ye(0),
      P = be(() => S.get() + y.get()),
      C = Ke(P, { stiffness: 100, damping: 20 }),
      V = Ke(x, { stiffness: 100, damping: 20 }),
      _ = () => {
        n ? (g.set(0), r(!1)) : (g.set(180), r(!0)), t(Math.random());
      },
      b = (A) => {
        o(!0);
        const D = A.clientX,
          O = A.clientY,
          j = window.innerWidth / 2,
          Be = window.innerHeight / 2,
          Ae = ((D - j) / j) * 45,
          Je = ((O - Be) / Be) * 45,
          me = A.currentTarget.getBoundingClientRect().left,
          Ue = A.currentTarget.getBoundingClientRect().top,
          Et = A.currentTarget.offsetWidth,
          ut = A.currentTarget.offsetHeight;
        S.set(-Ae),
          x.set(Je),
          f.set((D - me) / Et),
          d.set((O - Ue) / ut),
          t(Math.random());
      },
      G = (A) => {
        o(!1), S.set(0), x.set(0), t(Math.random());
      },
      Se = `radial-gradient(farthest-corner circle at ${p.get()}% ${h.get()}%, hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%)`,
      Le = `radial-gradient(farthest-corner circle at ${
        100 - p.get()
      }% ${h.get()}%, hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%)`,
      Fe = `url("https://poke-holo.simey.me/img/grain.webp"),
    repeating-linear-gradient(
      0deg,
      hsl(2, 100%, 73%) calc(5% * 1),
      hsl(53, 100%, 69%) calc(5% * 2),
      hsl(93, 100%, 69%) calc(5% * 3),
      hsl(176, 100%, 76%) calc(5% * 4),
      hsl(228, 100%, 74%) calc(5% * 5),
      hsl(283, 100%, 73%) calc(5% * 6),
      hsl(2, 100%, 73%) calc(5% * 7)
    ),
    repeating-linear-gradient(
      133deg,
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 29%, 66%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ),
    radial-gradient(
      farthest-corner circle at ${m.get()}% ${w.get()}%,
      hsla(0, 0%, 0%, 0.1) 12%,
      hsla(0, 0%, 0%, 0.15) 20%,
      hsla(0, 0%, 0%, 0.25) 120%
    )`,
      ze = `conic-gradient(
      from ${S.get() * 2}deg at 50% 50%,
      rgba(0, 0, 0, 1) 0deg,
      rgba(255, 255, 255, 0.7) 17deg,
      rgba(0, 0, 0, 1) 88deg,
      rgba(255, 255, 255, 0.7) 152deg,
      rgba(0, 0, 0, 1) 225deg,
      rgba(255, 255, 255, 0.7) 289deg,
      rgba(0, 0, 0, 1) 360deg
    ),
    conic-gradient(
      from ${180 - x.get() * 2}deg at 50% 50%,
      rgba(0, 0, 0, 1) 0deg,
      rgba(255, 255, 255, 1) 30deg,
      rgba(0, 0, 0, 1) 96deg,
      rgba(255, 255, 255, 1) 169deg,
      rgba(0, 0, 0, 1) 229deg,
      rgba(255, 255, 255, 1) 285deg,
      rgba(0, 0, 0, 1) 360deg
    ),
    radial-gradient(
      88% 127% at 13% 13%,
      rgba(248, 110, 251, 1) 8%,
      rgba(115, 66, 255, 1) 35%,
      rgba(66, 232, 255, 1) 63%,
      rgba(66, 255, 107, 1) 100%
    )`,
      W = `center, 0% ${k.get()}%,
    ${v.get()}% ${k.get()}%,
    ${v.get()}% ${k.get()}%`,
      E = `center, 0% ${k.get()}%,
    -${v.get()}% -${k.get()}%,
    ${v.get()}% ${k.get()}%`;
    return N.jsx(nC, {
      children: N.jsxs(rC, {
        onClick: () => _(),
        onMouseMove: (A) => b(A),
        onMouseLeave: (A) => G(),
        whileHover: { scale: 1.1, transition: { duration: 0.3 } },
        ref: c,
        children: [
          N.jsxs(eC, {
            style: { rotateX: V, rotateY: C },
            children: [
              N.jsx(oC, { src: "/art-cards/back.png" }),
              N.jsx(vh, { style: { backgroundImage: Le } }),
            ],
          }),
          N.jsxs(JP, {
            style: { rotateX: V, rotateY: C, translateZ: 1 },
            children: [
              N.jsx(qP, {
                style: {
                  background: ze,
                  width: s / 10,
                  height: s / 10,
                  top: l / 21,
                  right: s / 15.8,
                  opacity: i ? 0.65 : 0.2,
                },
              }),
              N.jsx(iC, { src: "/art-cards/the-day-dream.jpg" }),
              N.jsx(sC, {
                style: { backgroundImage: Fe, backgroundPosition: W },
                children: N.jsx(aC, {
                  style: { backgroundImage: Fe, backgroundPosition: E },
                }),
              }),
              N.jsx(tC, {}),
              N.jsx(vh, { style: { backgroundImage: Se } }),
            ],
          }),
        ],
      }),
    });
  },
  qP = z(oe.div)`
  position: absolute;
  transform: translateZ(2px);
  background-blend-mode: screen, multiply, normal;
  mix-blend-mode: lighten;
  -webkit-mask-image: url("/art-cards/pngdiamondmask.png");
  mask-image: url("/art-cards/pngdiamondmask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
  transition: opacity 0.3s ease-out;

  filter: brightness(1.8) contrast(0.8);
`,
  JP = z(oe.div)`
  overflow: hidden;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  border-radius: 4px;
  height: 70vh;
`,
  eC = z(oe.div)`
  top: 0;
  left: 0;
  border-radius: 4px;
  height: 70vh;
`,
  tC = z(oe.div)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url("hdr_pixel.avif");
  height: 100%;
  width: 100%;
  position: absolute;
  mix-blend-mode: multiply;
  -webkit-mask-image: url("/art-cards/the-day-dream-mask.png");
  mask-image: url("/art-cards/the-day-dream-mask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
  opacity: 0.05;
  height: ${pn}vh;
`,
  nC = z.div`
  width: 100vw;
  height: 100vh;
  perspective: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`,
  rC = z(oe.div)`
  height: ${pn}vh;
  position: absolute;
  cursor: pointer;
  transform-style: preserve-3d;
`,
  iC = z.img`
  height: ${pn}vh;
`,
  oC = z.img`
  height: ${pn}vh;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  z-index: 2;
  transform: translateZ(1px) scaleX(-1);
`,
  vh = z(oe.div)`
  height: ${pn}vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: ${pn}vh;
  width: 100%;
  border-radius: 4px;
  opacity: 0.3;
  mix-blend-mode: hard-light;
  filter: brightness(0.9) contrast(1.75);
`,
  sC = z(oe.div)`
  height: ${pn}vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  height: ${pn}vh;
  width: 100%;
  border-radius: 4px;

  background: transparent;
  mix-blend-mode: color-dodge;

  filter: brightness(0.7) contrast(2) saturate(0.5);

  background-blend-mode: screen, hue, hard-light;
  background-size: 500px 100%, 200% 700%, 300% 100%, 200% 100%;

  background-blend-mode: screen, hue, hard-light;
  filter: brightness(0.8) contrast(2.95) saturate(0.65);
  -webkit-mask-image: url("/art-cards/the-day-dream-mask.png");
  mask-image: url("/art-cards/the-day-dream-mask.png");
  -webkit-mask-size: cover;
  mask-size: cover;
  -webkit-mask-position: center center;
  mask-position: center center;
`,
  aC = z(oe.div)`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  mix-blend-mode: color-dodge;
  filter: brightness(0.7) contrast(2) saturate(0.5);
  background-blend-mode: screen, hue, hard-light;
  background-size: 500px 100%, 200% 400%, 195% 100%, 200% 100%;
  background-blend-mode: screen, hue, hard-light;
  filter: brightness(0.8) contrast(2.95) saturate(0.65);
  content: "";
  filter: brightness(1) contrast(2.5) saturate(1.75);
  mix-blend-mode: soft-light;
`;
function lC() {
  return N.jsx(N.Fragment, {
    children: N.jsxs("div", {
      children: [N.jsx(ZP, {}), N.jsx(_P, {}), N.jsx(WP, {})],
    }),
  });
}
Dm(document.getElementById("root")).render(
  N.jsx(R.StrictMode, { children: N.jsx(lC, {}) })
);
