var Pn = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Be = Pn.NODE_ENV !== "production" ? Object.freeze({}) : {}, Xr = Pn.NODE_ENV !== "production" ? Object.freeze([]) : [], Re = () => {
}, Qr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ae = Object.assign, Zr = Object.prototype.hasOwnProperty, Pt = (e, t) => Zr.call(e, t), D = Array.isArray, _e = (e) => _t(e) === "[object Map]", jn = (e) => _t(e) === "[object Set]", P = (e) => typeof e == "function", Q = (e) => typeof e == "string", be = (e) => typeof e == "symbol", F = (e) => e !== null && typeof e == "object", eo = (e) => (F(e) || P(e)) && P(e.then) && P(e.catch), Fn = Object.prototype.toString, _t = (e) => Fn.call(e), Ln = (e) => _t(e).slice(8, -1), $n = (e) => _t(e) === "[object Object]", Yt = (e) => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, zt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, to = /\B([A-Z])/g, no = zt(
  (e) => e.replace(to, "-$1").toLowerCase()
), Bn = zt((e) => e.charAt(0).toUpperCase() + e.slice(1)), ro = zt(
  (e) => e ? `on${Bn(e)}` : ""
), pe = (e, t) => !Object.is(e, t), oo = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, gn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let mn;
const yt = () => mn || (mn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vt(e) {
  if (D(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Q(r) ? co(r) : vt(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (Q(e) || F(e))
    return e;
}
const so = /;(?![^(]*\))/g, io = /:([^]+)/, ao = /\/\*[^]*?\*\//g;
function co(e) {
  const t = {};
  return e.replace(ao, "").split(so).forEach((n) => {
    if (n) {
      const r = n.split(io);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ke(e) {
  let t = "";
  if (Q(e))
    t = e;
  else if (D(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ke(e[n]);
      r && (t += r + " ");
    }
  else if (F(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kn = (e) => !!(e && e.__v_isRef === !0), Un = (e) => Q(e) ? e : e == null ? "" : D(e) || F(e) && (e.toString === Fn || !P(e.toString)) ? Kn(e) ? Un(e.value) : JSON.stringify(e, Jn, 2) : String(e), Jn = (e, t) => Kn(t) ? Jn(e, t.value) : _e(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[xt(r, s) + " =>"] = o, n),
    {}
  )
} : jn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => xt(n))
} : be(t) ? xt(t) : F(t) && !D(t) && !$n(t) ? String(t) : t, xt = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    be(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var T = {};
function te(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let N;
const Nt = /* @__PURE__ */ new WeakSet();
class lo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Nt.has(this) && (Nt.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _n(this), Yn(this);
    const t = N, n = X;
    N = this, X = !0;
    try {
      return this.fn();
    } finally {
      T.NODE_ENV !== "production" && N !== this && te(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), zn(this), N = t, X = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Xt(t);
      this.deps = this.depsTail = void 0, _n(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Nt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    jt(this) && this.run();
  }
  get dirty() {
    return jt(this);
  }
}
let Wn = 0, Le, $e;
function Hn(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = $e, $e = e;
    return;
  }
  e.next = Le, Le = e;
}
function qt() {
  Wn++;
}
function Gt() {
  if (--Wn > 0)
    return;
  if ($e) {
    let t = $e;
    for ($e = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Le; ) {
    let t = Le;
    for (Le = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zn(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Xt(r), uo(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function jt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ue) || (e.globalVersion = Ue, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !jt(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = N, r = X;
  N = e, X = !0;
  try {
    Yn(e);
    const o = e.fn(e._value);
    (t.version === 0 || pe(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    N = n, X = r, zn(e), e.flags &= -3;
  }
}
function Xt(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), T.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Xt(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function uo(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let X = !0;
const Gn = [];
function Ae() {
  Gn.push(X), X = !1;
}
function ke() {
  const e = Gn.pop();
  X = e === void 0 ? !0 : e;
}
function _n(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = N;
    N = void 0;
    try {
      t();
    } finally {
      N = n;
    }
  }
}
let Ue = 0;
class fo {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Qt {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, T.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!N || !X || N === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== N)
      n = this.activeLink = new fo(N, this), N.deps ? (n.prevDep = N.depsTail, N.depsTail.nextDep = n, N.depsTail = n) : N.deps = N.depsTail = n, Xn(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = N.depsTail, n.nextDep = void 0, N.depsTail.nextDep = n, N.depsTail = n, N.deps === n && (N.deps = r);
    }
    return T.NODE_ENV !== "production" && N.onTrack && N.onTrack(
      ae(
        {
          effect: N
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ue++, this.notify(t);
  }
  notify(t) {
    qt();
    try {
      if (T.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ae(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gt();
    }
  }
}
function Xn(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Xn(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), T.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ct = /* @__PURE__ */ new WeakMap(), ye = Symbol(
  T.NODE_ENV !== "production" ? "Object iterate" : ""
), Ft = Symbol(
  T.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Je = Symbol(
  T.NODE_ENV !== "production" ? "Array iterate" : ""
);
function U(e, t, n) {
  if (X && N) {
    let r = ct.get(e);
    r || ct.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Qt()), o.map = r, o.key = n), T.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function fe(e, t, n, r, o, s) {
  const i = ct.get(e);
  if (!i) {
    Ue++;
    return;
  }
  const a = (c) => {
    c && (T.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : c.trigger());
  };
  if (qt(), t === "clear")
    i.forEach(a);
  else {
    const c = D(e), u = c && Yt(n);
    if (c && n === "length") {
      const f = Number(r);
      i.forEach((l, d) => {
        (d === "length" || d === Je || !be(d) && d >= f) && a(l);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Je)), t) {
        case "add":
          c ? u && a(i.get("length")) : (a(i.get(ye)), _e(e) && a(i.get(Ft)));
          break;
        case "delete":
          c || (a(i.get(ye)), _e(e) && a(i.get(Ft)));
          break;
        case "set":
          _e(e) && a(i.get(ye));
          break;
      }
  }
  Gt();
}
function po(e, t) {
  const n = ct.get(e);
  return n && n.get(t);
}
function Ie(e) {
  const t = I(e);
  return t === e ? t : (U(t, "iterate", Je), $(e) ? t : t.map(j));
}
function bt(e) {
  return U(e = I(e), "iterate", Je), e;
}
const ho = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rt(this, Symbol.iterator, j);
  },
  concat(...e) {
    return Ie(this).concat(
      ...e.map((t) => D(t) ? Ie(t) : t)
    );
  },
  entries() {
    return Rt(this, "entries", (e) => (e[1] = j(e[1]), e));
  },
  every(e, t) {
    return oe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return oe(this, "filter", e, t, (n) => n.map(j), arguments);
  },
  find(e, t) {
    return oe(this, "find", e, t, j, arguments);
  },
  findIndex(e, t) {
    return oe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return oe(this, "findLast", e, t, j, arguments);
  },
  findLastIndex(e, t) {
    return oe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return oe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Tt(this, "includes", e);
  },
  indexOf(...e) {
    return Tt(this, "indexOf", e);
  },
  join(e) {
    return Ie(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Tt(this, "lastIndexOf", e);
  },
  map(e, t) {
    return oe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return je(this, "pop");
  },
  push(...e) {
    return je(this, "push", e);
  },
  reduce(e, ...t) {
    return yn(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yn(this, "reduceRight", e, t);
  },
  shift() {
    return je(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return oe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return je(this, "splice", e);
  },
  toReversed() {
    return Ie(this).toReversed();
  },
  toSorted(e) {
    return Ie(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ie(this).toSpliced(...e);
  },
  unshift(...e) {
    return je(this, "unshift", e);
  },
  values() {
    return Rt(this, "values", j);
  }
};
function Rt(e, t, n) {
  const r = bt(e), o = r[t]();
  return r !== e && !$(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const go = Array.prototype;
function oe(e, t, n, r, o, s) {
  const i = bt(e), a = i !== e && !$(e), c = i[t];
  if (c !== go[t]) {
    const l = c.apply(e, s);
    return a ? j(l) : l;
  }
  let u = n;
  i !== e && (a ? u = function(l, d) {
    return n.call(this, j(l), d, e);
  } : n.length > 2 && (u = function(l, d) {
    return n.call(this, l, d, e);
  }));
  const f = c.call(i, u, r);
  return a && o ? o(f) : f;
}
function yn(e, t, n, r) {
  const o = bt(e);
  let s = n;
  return o !== e && ($(e) ? n.length > 3 && (s = function(i, a, c) {
    return n.call(this, i, a, c, e);
  }) : s = function(i, a, c) {
    return n.call(this, i, j(a), c, e);
  }), o[t](s, ...r);
}
function Tt(e, t, n) {
  const r = I(e);
  U(r, "iterate", Je);
  const o = r[t](...n);
  return (o === -1 || o === !1) && We(n[0]) ? (n[0] = I(n[0]), r[t](...n)) : o;
}
function je(e, t, n = []) {
  Ae(), qt();
  const r = I(e)[t].apply(e, n);
  return Gt(), ke(), r;
}
const mo = /* @__PURE__ */ Gr("__proto__,__v_isRef,__isVue"), Qn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(be)
);
function _o(e) {
  be(e) || (e = String(e));
  const t = I(this);
  return U(t, "has", e), t.hasOwnProperty(e);
}
class Zn {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? Ro : nr : s ? No : tr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = D(t);
    if (!o) {
      let c;
      if (i && (c = ho[n]))
        return c;
      if (n === "hasOwnProperty")
        return _o;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      B(t) ? t : r
    );
    return (be(n) ? Qn.has(n) : mo(n)) || (o || U(t, "get", n), s) ? a : B(a) ? i && Yt(n) ? a : a.value : F(a) ? o ? lt(a) : wt(a) : a;
  }
}
class yo extends Zn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const c = Z(s);
      if (!$(r) && !Z(r) && (s = I(s), r = I(r)), !D(t) && B(s) && !B(r))
        return c ? !1 : (s.value = r, !0);
    }
    const i = D(t) && Yt(n) ? Number(n) < t.length : Pt(t, n), a = Reflect.set(
      t,
      n,
      r,
      B(t) ? t : o
    );
    return t === I(o) && (i ? pe(r, s) && fe(t, "set", n, r, s) : fe(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = Pt(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && fe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!be(n) || !Qn.has(n)) && U(t, "has", n), r;
  }
  ownKeys(t) {
    return U(
      t,
      "iterate",
      D(t) ? "length" : ye
    ), Reflect.ownKeys(t);
  }
}
class vo extends Zn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return T.NODE_ENV !== "production" && te(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return T.NODE_ENV !== "production" && te(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const bo = /* @__PURE__ */ new yo(), wo = /* @__PURE__ */ new vo(), Lt = (e) => e, tt = (e) => Reflect.getPrototypeOf(e);
function Eo(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = I(o), i = _e(s), a = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = o[e](...r), f = n ? Lt : t ? ut : j;
    return !t && U(
      s,
      "iterate",
      c ? Ft : ye
    ), {
      // iterator protocol
      next() {
        const { value: l, done: d } = u.next();
        return d ? { value: l, done: d } : {
          value: a ? [f(l[0]), f(l[1])] : f(l),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function nt(e) {
  return function(...t) {
    if (T.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      te(
        `${Bn(e)} operation ${n}failed: target is readonly.`,
        I(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Io(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = I(s), a = I(o);
      e || (pe(o, a) && U(i, "get", o), U(i, "get", a));
      const { has: c } = tt(i), u = t ? Lt : e ? ut : j;
      if (c.call(i, o))
        return u(s.get(o));
      if (c.call(i, a))
        return u(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && U(I(o), "iterate", ye), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = I(s), a = I(o);
      return e || (pe(o, a) && U(i, "has", o), U(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
    },
    forEach(o, s) {
      const i = this, a = i.__v_raw, c = I(a), u = t ? Lt : e ? ut : j;
      return !e && U(c, "iterate", ye), a.forEach((f, l) => o.call(s, u(f), u(l), i));
    }
  };
  return ae(
    n,
    e ? {
      add: nt("add"),
      set: nt("set"),
      delete: nt("delete"),
      clear: nt("clear")
    } : {
      add(o) {
        !t && !$(o) && !Z(o) && (o = I(o));
        const s = I(this);
        return tt(s).has.call(s, o) || (s.add(o), fe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !$(s) && !Z(s) && (s = I(s));
        const i = I(this), { has: a, get: c } = tt(i);
        let u = a.call(i, o);
        u ? T.NODE_ENV !== "production" && vn(i, a, o) : (o = I(o), u = a.call(i, o));
        const f = c.call(i, o);
        return i.set(o, s), u ? pe(s, f) && fe(i, "set", o, s, f) : fe(i, "add", o, s), this;
      },
      delete(o) {
        const s = I(this), { has: i, get: a } = tt(s);
        let c = i.call(s, o);
        c ? T.NODE_ENV !== "production" && vn(s, i, o) : (o = I(o), c = i.call(s, o));
        const u = a ? a.call(s, o) : void 0, f = s.delete(o);
        return c && fe(s, "delete", o, void 0, u), f;
      },
      clear() {
        const o = I(this), s = o.size !== 0, i = T.NODE_ENV !== "production" ? _e(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return s && fe(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), a;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Eo(o, e, t);
  }), n;
}
function er(e, t) {
  const n = Io(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    Pt(n, o) && o in r ? n : r,
    o,
    s
  );
}
const So = {
  get: /* @__PURE__ */ er(!1, !1)
}, xo = {
  get: /* @__PURE__ */ er(!0, !1)
};
function vn(e, t, n) {
  const r = I(n);
  if (r !== n && t.call(e, r)) {
    const o = Ln(e);
    te(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const tr = /* @__PURE__ */ new WeakMap(), No = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap();
function To(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Co(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : To(Ln(e));
}
function wt(e) {
  return Z(e) ? e : rr(
    e,
    !1,
    bo,
    So,
    tr
  );
}
function lt(e) {
  return rr(
    e,
    !0,
    wo,
    xo,
    nr
  );
}
function rr(e, t, n, r, o) {
  if (!F(e))
    return T.NODE_ENV !== "production" && te(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Co(e);
  if (s === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, a), a;
}
function Te(e) {
  return Z(e) ? Te(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Z(e) {
  return !!(e && e.__v_isReadonly);
}
function $(e) {
  return !!(e && e.__v_isShallow);
}
function We(e) {
  return e ? !!e.__v_raw : !1;
}
function I(e) {
  const t = e && e.__v_raw;
  return t ? I(t) : e;
}
const j = (e) => F(e) ? wt(e) : e, ut = (e) => F(e) ? lt(e) : e;
function B(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ee(e) {
  return Do(e, !1);
}
function Do(e, t) {
  return B(e) ? e : new Ao(e, t);
}
class Ao {
  constructor(t, n) {
    this.dep = new Qt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : I(t), this._value = n ? t : j(t), this.__v_isShallow = n;
  }
  get value() {
    return T.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || $(t) || Z(t);
    t = r ? t : I(t), pe(t, n) && (this._rawValue = t, this._value = r ? t : j(t), T.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function L(e) {
  return B(e) ? e.value : e;
}
function ko(e) {
  T.NODE_ENV !== "production" && !We(e) && te("toRefs() expects a reactive object but received a plain one.");
  const t = D(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Vo(e, n);
  return t;
}
class Oo {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return po(I(this._object), this._key);
  }
}
function Vo(e, t, n) {
  const r = e[t];
  return B(r) ? r : new Oo(e, t, n);
}
class Mo {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Qt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ue - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    N !== this)
      return Hn(this, !0), !0;
  }
  get value() {
    const t = T.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return qn(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : T.NODE_ENV !== "production" && te("Write operation failed: computed value is readonly");
  }
}
function Po(e, t, n = !1) {
  let r, o;
  return P(e) ? r = e : (r = e.get, o = e.set), new Mo(r, o, n);
}
const rt = {}, ft = /* @__PURE__ */ new WeakMap();
let me;
function jo(e, t = !1, n = me) {
  if (n) {
    let r = ft.get(n);
    r || ft.set(n, r = []), r.push(e);
  } else T.NODE_ENV !== "production" && !t && te(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Fo(e, t, n = Be) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: c } = n, u = (h) => {
    (n.onWarn || te)(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (h) => o ? h : $(h) || o === !1 || o === 0 ? de(h, 1) : de(h);
  let l, d, p, y, S = !1, A = !1;
  if (B(e) ? (d = () => e.value, S = $(e)) : Te(e) ? (d = () => f(e), S = !0) : D(e) ? (A = !0, S = e.some((h) => Te(h) || $(h)), d = () => e.map((h) => {
    if (B(h))
      return h.value;
    if (Te(h))
      return f(h);
    if (P(h))
      return c ? c(h, 2) : h();
    T.NODE_ENV !== "production" && u(h);
  })) : P(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
    if (p) {
      Ae();
      try {
        p();
      } finally {
        ke();
      }
    }
    const h = me;
    me = l;
    try {
      return c ? c(e, 3, [y]) : e(y);
    } finally {
      me = h;
    }
  } : (d = Re, T.NODE_ENV !== "production" && u(e)), t && o) {
    const h = d, m = o === !0 ? 1 / 0 : o;
    d = () => de(h(), m);
  }
  const R = () => {
    l.stop();
  };
  if (s && t) {
    const h = t;
    t = (...m) => {
      h(...m), R();
    };
  }
  let w = A ? new Array(e.length).fill(rt) : rt;
  const _ = (h) => {
    if (!(!(l.flags & 1) || !l.dirty && !h))
      if (t) {
        const m = l.run();
        if (o || S || (A ? m.some((g, v) => pe(g, w[v])) : pe(m, w))) {
          p && p();
          const g = me;
          me = l;
          try {
            const v = [
              m,
              // pass undefined as the old value when it's changed for the first time
              w === rt ? void 0 : A && w[0] === rt ? [] : w,
              y
            ];
            w = m, c ? c(t, 3, v) : (
              // @ts-expect-error
              t(...v)
            );
          } finally {
            me = g;
          }
        }
      } else
        l.run();
  };
  return a && a(_), l = new lo(d), l.scheduler = i ? () => i(_, !1) : _, y = (h) => jo(h, !1, l), p = l.onStop = () => {
    const h = ft.get(l);
    if (h) {
      if (c)
        c(h, 4);
      else
        for (const m of h) m();
      ft.delete(l);
    }
  }, T.NODE_ENV !== "production" && (l.onTrack = n.onTrack, l.onTrigger = n.onTrigger), t ? r ? _(!0) : w = l.run() : i ? i(_.bind(null, !0), !0) : l.run(), R.pause = l.pause.bind(l), R.resume = l.resume.bind(l), R.stop = R, R;
}
function de(e, t = 1 / 0, n) {
  if (t <= 0 || !F(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, B(e))
    de(e.value, t, n);
  else if (D(e))
    for (let r = 0; r < e.length; r++)
      de(e[r], t, n);
  else if (jn(e) || _e(e))
    e.forEach((r) => {
      de(r, t, n);
    });
  else if ($n(e)) {
    for (const r in e)
      de(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && de(e[r], t, n);
  }
  return e;
}
var C = {};
const ve = [];
function Lo(e) {
  ve.push(e);
}
function $o() {
  ve.pop();
}
let Ct = !1;
function M(e, ...t) {
  if (Ct) return;
  Ct = !0, Ae();
  const n = ve.length ? ve[ve.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Bo();
  if (r)
    Et(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, a;
          return (a = (i = s.toString) == null ? void 0 : i.call(s)) != null ? a : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${br(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...Ko(o)), console.warn(...s);
  }
  ke(), Ct = !1;
}
function Bo() {
  let e = ve[ve.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Ko(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Uo(n));
  }), t;
}
function Uo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${br(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Jo(e.props), s] : [o + s];
}
function Jo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...or(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function or(e, t, n) {
  return Q(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : B(t) ? (t = or(e, I(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = I(t), n ? t : [`${e}=`, t]);
}
const Zt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Et(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    tn(o, t, n);
  }
}
function en(e, t, n, r) {
  if (P(e)) {
    const o = Et(e, t, n, r);
    return o && eo(o) && o.catch((s) => {
      tn(s, t, n);
    }), o;
  }
  if (D(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(en(e[s], t, n, r));
    return o;
  } else C.NODE_ENV !== "production" && M(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function tn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Be;
  if (t) {
    let a = t.parent;
    const c = t.proxy, u = C.NODE_ENV !== "production" ? Zt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const f = a.ec;
      if (f) {
        for (let l = 0; l < f.length; l++)
          if (f[l](e, c, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      Ae(), Et(s, null, 10, [
        e,
        c,
        u
      ]), ke();
      return;
    }
  }
  Wo(e, n, o, r, i);
}
function Wo(e, t, n, r = !0, o = !1) {
  if (C.NODE_ENV !== "production") {
    const s = Zt[t];
    if (n && Lo(n), M(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && $o(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Y = [];
let se = -1;
const Ce = [];
let le = null, Se = 0;
const Ho = /* @__PURE__ */ Promise.resolve();
let $t = null;
const Yo = 100;
function zo(e) {
  let t = se + 1, n = Y.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Y[r], s = He(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function sr(e) {
  if (!(e.flags & 1)) {
    const t = He(e), n = Y[Y.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= He(n) ? Y.push(e) : Y.splice(zo(t), 0, e), e.flags |= 1, ir();
  }
}
function ir() {
  $t || ($t = Ho.then(cr));
}
function ar(e) {
  D(e) ? Ce.push(...e) : le && e.id === -1 ? le.splice(Se + 1, 0, e) : e.flags & 1 || (Ce.push(e), e.flags |= 1), ir();
}
function qo(e) {
  if (Ce.length) {
    const t = [...new Set(Ce)].sort(
      (n, r) => He(n) - He(r)
    );
    if (Ce.length = 0, le) {
      le.push(...t);
      return;
    }
    for (le = t, C.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Se = 0; Se < le.length; Se++) {
      const n = le[Se];
      C.NODE_ENV !== "production" && lr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    le = null, Se = 0;
  }
}
const He = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function cr(e) {
  C.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = C.NODE_ENV !== "production" ? (n) => lr(e, n) : Re;
  try {
    for (se = 0; se < Y.length; se++) {
      const n = Y[se];
      if (n && !(n.flags & 8)) {
        if (C.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Et(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; se < Y.length; se++) {
      const n = Y[se];
      n && (n.flags &= -2);
    }
    se = -1, Y.length = 0, qo(e), $t = null, (Y.length || Ce.length) && cr(e);
  }
}
function lr(e, t) {
  const n = e.get(t) || 0;
  if (n > Yo) {
    const r = t.i, o = r && vr(r.type);
    return tn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Dt = /* @__PURE__ */ new Map();
C.NODE_ENV !== "production" && (yt().__VUE_HMR_RUNTIME__ = {
  createRecord: At(Go),
  rerender: At(Xo),
  reload: At(Qo)
});
const dt = /* @__PURE__ */ new Map();
function Go(e, t) {
  return dt.has(e) ? !1 : (dt.set(e, {
    initialDef: pt(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pt(e) {
  return wr(e) ? e.__vccOpts : e;
}
function Xo(e, t) {
  const n = dt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, pt(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Qo(e, t) {
  const n = dt.get(e);
  if (!n) return;
  t = pt(t), bn(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = pt(s.type);
    let a = Dt.get(i);
    a || (i !== n.initialDef && bn(i, t), Dt.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? sr(() => {
      s.parent.update(), a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  ar(() => {
    Dt.clear();
  });
}
function bn(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function At(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ye = null, Zo = null;
function es(e, t) {
  return C.NODE_ENV !== "production" && M("withDirectives can only be used inside render functions."), e;
}
const ts = (e) => e.__isTeleport;
function ur(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ur(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ns(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
yt().requestIdleCallback;
yt().cancelIdleCallback;
function rs(e, t, n = Oe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ae();
      const a = xs(n), c = en(t, n, e, i);
      return a(), ke(), c;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (C.NODE_ENV !== "production") {
    const o = ro(Zt[e].replace(/ hook$/, ""));
    M(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const fr = (e) => (t, n = Oe) => {
  (!ze || e === "sp") && rs(e, (...r) => t(...r), n);
}, dr = fr("m"), os = fr("um"), ss = Symbol.for("v-ndc");
function is(e, t, n, r) {
  let o;
  const s = n, i = D(e);
  if (i || Q(e)) {
    const a = i && Te(e);
    let c = !1, u = !1;
    a && (c = !$(e), u = Z(e), e = bt(e)), o = new Array(e.length);
    for (let f = 0, l = e.length; f < l; f++)
      o[f] = t(
        c ? u ? ut(j(e[f])) : j(e[f]) : e[f],
        f,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    C.NODE_ENV !== "production" && !Number.isInteger(e) && M(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, s);
  } else if (F(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, c) => t(a, c, void 0, s)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let c = 0, u = a.length; c < u; c++) {
        const f = a[c];
        o[c] = t(e[f], f, c, s);
      }
    }
  else
    o = [];
  return o;
}
const as = {};
C.NODE_ENV !== "production" && (as.ownKeys = (e) => (M(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
let cs = null;
function ls(e, t, n = !1) {
  const r = on();
  if (r || cs) {
    let o = r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(r && r.proxy) : t;
    C.NODE_ENV !== "production" && M(`injection "${String(e)}" not found.`);
  } else C.NODE_ENV !== "production" && M("inject() can only be used inside setup() or functional components.");
}
const us = {}, pr = (e) => Object.getPrototypeOf(e) === us, fs = _s, ds = Symbol.for("v-scx"), ps = () => {
  {
    const e = ls(ds);
    return e || C.NODE_ENV !== "production" && M(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function hs(e, t, n) {
  return C.NODE_ENV !== "production" && !P(t) && M(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), gs(e, t, n);
}
function gs(e, t, n = Be) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  C.NODE_ENV !== "production" && !t && (r !== void 0 && M(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && M(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && M(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = ae({}, n);
  C.NODE_ENV !== "production" && (a.onWarn = M);
  const c = t && r || !t && s !== "post";
  let u;
  if (ze) {
    if (s === "sync") {
      const p = ps();
      u = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {
      };
      return p.stop = Re, p.resume = Re, p.pause = Re, p;
    }
  }
  const f = Oe;
  a.call = (p, y, S) => en(p, f, y, S);
  let l = !1;
  s === "post" ? a.scheduler = (p) => {
    fs(p, f && f.suspense);
  } : s !== "sync" && (l = !0, a.scheduler = (p, y) => {
    y ? p() : sr(p);
  }), a.augmentJob = (p) => {
    t && (p.flags |= 4), l && (p.flags |= 2, f && (p.id = f.uid, p.i = f));
  };
  const d = Fo(e, t, a);
  return ze && (u ? u.push(d) : c && d()), d;
}
const ms = (e) => e.__isSuspense;
function _s(e, t) {
  t && t.pendingBranch ? D(e) ? t.effects.push(...e) : t.effects.push(e) : ar(e);
}
const ht = Symbol.for("v-fgt"), ys = Symbol.for("v-txt"), Bt = Symbol.for("v-cmt"), it = [];
let G = null;
function H(e = !1) {
  it.push(G = e ? null : []);
}
function vs() {
  it.pop(), G = it[it.length - 1] || null;
}
function hr(e) {
  return e.dynamicChildren = G || Xr, vs(), G && G.push(e), e;
}
function q(e, t, n, r, o, s) {
  return hr(
    ue(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function bs(e, t, n, r, o) {
  return hr(
    nn(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function ws(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Es = (...e) => mr(
  ...e
), gr = ({ key: e }) => e ?? null, at = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || B(e) || P(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function ue(e, t = null, n = null, r = 0, o = null, s = e === ht ? 0 : 1, i = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gr(t),
    ref: t && at(t),
    scopeId: Zo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ye
  };
  return a ? (rn(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= Q(n) ? 8 : 16), C.NODE_ENV !== "production" && c.key !== c.key && M("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !i && // has current parent block
  G && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && G.push(c), c;
}
const nn = C.NODE_ENV !== "production" ? Es : mr;
function mr(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === ss) && (C.NODE_ENV !== "production" && !e && M(`Invalid vnode type when creating vnode: ${e}.`), e = Bt), ws(e)) {
    const a = gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rn(a, n), !s && G && (a.shapeFlag & 6 ? G[G.indexOf(e)] = a : G.push(a)), a.patchFlag = -2, a;
  }
  if (wr(e) && (e = e.__vccOpts), t) {
    t = Is(t);
    let { class: a, style: c } = t;
    a && !Q(a) && (t.class = Ke(a)), F(c) && (We(c) && !D(c) && (c = ae({}, c)), t.style = vt(c));
  }
  const i = Q(e) ? 1 : ms(e) ? 128 : ts(e) ? 64 : F(e) ? 4 : P(e) ? 2 : 0;
  return C.NODE_ENV !== "production" && i & 4 && We(e) && (e = I(e), M(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ue(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function Is(e) {
  return e ? We(e) || pr(e) ? ae({}, e) : e : null;
}
function gt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: c } = e, u = t ? Ss(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && gr(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? D(s) ? s.concat(at(t)) : [s, at(t)] : at(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: C.NODE_ENV !== "production" && i === -1 && D(a) ? a.map(_r) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ht ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && gt(e.ssContent),
    ssFallback: e.ssFallback && gt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && ur(
    f,
    c.clone(f)
  ), f;
}
function _r(e) {
  const t = gt(e);
  return D(e.children) && (t.children = e.children.map(_r)), t;
}
function yr(e = " ", t = 0) {
  return nn(ys, null, e, t);
}
function ot(e = "", t = !1) {
  return t ? (H(), bs(Bt, null, e)) : nn(Bt, null, e);
}
function rn(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (D(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), rn(e, o()), o._c && (o._d = !0));
      return;
    } else
      n = 32, !t._ && !pr(t) && (t._ctx = Ye);
  else P(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [yr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ss(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ke([t.class, r.class]));
      else if (o === "style")
        t.style = vt([t.style, r.style]);
      else if (Qr(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(D(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
let Oe = null;
const on = () => Oe || Ye;
let Kt;
{
  const e = yt(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Kt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Oe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => ze = n
  );
}
const xs = (e) => {
  const t = Oe;
  return Kt(e), e.scope.on(), () => {
    e.scope.off(), Kt(t);
  };
};
let ze = !1;
const Ns = /(?:^|[-_])(\w)/g, Rs = (e) => e.replace(Ns, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function vr(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function br(e, t, n = !1) {
  let r = vr(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? Rs(r) : n ? "App" : "Anonymous";
}
function wr(e) {
  return P(e) && "__vccOpts" in e;
}
const Er = (e, t) => {
  const n = Po(e, t, ze);
  if (C.NODE_ENV !== "production") {
    const r = on();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ts() {
  if (C.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(l) {
      if (!F(l))
        return null;
      if (l.__isVue)
        return ["div", e, "VueInstance"];
      if (B(l)) {
        Ae();
        const d = l.value;
        return ke(), [
          "div",
          {},
          ["span", e, f(l)],
          "<",
          a(d),
          ">"
        ];
      } else {
        if (Te(l))
          return [
            "div",
            {},
            ["span", e, $(l) ? "ShallowReactive" : "Reactive"],
            "<",
            a(l),
            `>${Z(l) ? " (readonly)" : ""}`
          ];
        if (Z(l))
          return [
            "div",
            {},
            ["span", e, $(l) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(l),
            ">"
          ];
      }
      return null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const d = [];
    l.type.props && l.props && d.push(i("props", I(l.props))), l.setupState !== Be && d.push(i("setup", l.setupState)), l.data !== Be && d.push(i("data", I(l.data)));
    const p = c(l, "computed");
    p && d.push(i("computed", p));
    const y = c(l, "inject");
    return y && d.push(i("injected", y)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), d;
  }
  function i(l, d) {
    return d = ae({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((p) => [
          "div",
          {},
          ["span", r, p + ": "],
          a(d[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(l, d = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : F(l) ? ["object", { object: d ? I(l) : l }] : ["span", n, String(l)];
  }
  function c(l, d) {
    const p = l.type;
    if (P(p))
      return;
    const y = {};
    for (const S in l.ctx)
      u(p, S, d) && (y[S] = l.ctx[S]);
    return y;
  }
  function u(l, d, p) {
    const y = l[p];
    if (D(y) && y.includes(d) || F(y) && d in y || l.extends && u(l.extends, d, p) || l.mixins && l.mixins.some((S) => u(S, d, p)))
      return !0;
  }
  function f(l) {
    return $(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Cs = C.NODE_ENV !== "production" ? M : Re;
var Ds = {};
let As;
const wn = typeof window < "u" && window.trustedTypes;
if (wn)
  try {
    As = /* @__PURE__ */ wn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Ds.NODE_ENV !== "production" && Cs(`Error creating trusted types policy: ${e}`);
  }
function Fe(e, t, n, r) {
  e.addEventListener(t, n, r);
}
const En = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return D(t) ? (n) => oo(t, n) : t;
};
function ks(e) {
  e.target.composing = !0;
}
function In(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const kt = Symbol("_assign"), Os = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[kt] = En(o);
    const s = r || o.props && o.props.type === "number";
    Fe(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = gn(a)), e[kt](a);
    }), n && Fe(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Fe(e, "compositionstart", ks), Fe(e, "compositionend", In), Fe(e, "change", In));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[kt] = En(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? gn(e.value) : e.value, c = t ?? "";
    a !== c && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === c) || (e.value = c));
  }
}, Vs = ["ctrl", "shift", "alt", "meta"], Ms = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Vs.some((n) => e[`${n}Key`] && !t.includes(n))
}, Sn = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = Ms[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...s);
  });
}, Ps = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, js = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = no(o.key);
    if (t.some(
      (i) => i === s || Ps[i] === s
    ))
      return e(o);
  });
};
var Fs = {};
function Ls() {
  Ts();
}
Fs.NODE_ENV !== "production" && Ls();
var Ir = "vercel.ai.error", $s = Symbol.for(Ir), Sr, Bs = class xr extends Error {
  /**
   * Creates an AI SDK Error.
   *
   * @param {Object} params - The parameters for creating the error.
   * @param {string} params.name - The name of the error.
   * @param {string} params.message - The error message.
   * @param {unknown} [params.cause] - The underlying cause of the error.
   */
  constructor({
    name: t,
    message: n,
    cause: r
  }) {
    super(n), this[Sr] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return xr.hasMarker(t, Ir);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
Sr = $s;
var De = Bs;
function Nr(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Rr = "AI_InvalidArgumentError", Tr = `vercel.ai.error.${Rr}`, Ks = Symbol.for(Tr), Cr, Us = class extends De {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Rr, message: e, cause: t }), this[Cr] = !0, this.argument = n;
  }
  static isInstance(e) {
    return De.hasMarker(e, Tr);
  }
};
Cr = Ks;
var Dr = "AI_JSONParseError", Ar = `vercel.ai.error.${Dr}`, Js = Symbol.for(Ar), kr, xn = class extends De {
  constructor({ text: e, cause: t }) {
    super({
      name: Dr,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Nr(t)}`,
      cause: t
    }), this[kr] = !0, this.text = e;
  }
  static isInstance(e) {
    return De.hasMarker(e, Ar);
  }
};
kr = Js;
var Or = "AI_TypeValidationError", Vr = `vercel.ai.error.${Or}`, Ws = Symbol.for(Vr), Mr, Hs = class Ut extends De {
  constructor({ value: t, cause: n }) {
    super({
      name: Or,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Nr(n)}`,
      cause: n
    }), this[Mr] = !0, this.value = t;
  }
  static isInstance(t) {
    return De.hasMarker(t, Vr);
  }
  /**
   * Wraps an error into a TypeValidationError.
   * If the cause is already a TypeValidationError with the same value, it returns the cause.
   * Otherwise, it creates a new TypeValidationError.
   *
   * @param {Object} params - The parameters for wrapping the error.
   * @param {unknown} params.value - The value that failed validation.
   * @param {unknown} params.cause - The original error or cause of the validation failure.
   * @returns {TypeValidationError} A TypeValidationError instance.
   */
  static wrap({
    value: t,
    cause: n
  }) {
    return Ut.isInstance(n) && n.value === t ? n : new Ut({ value: t, cause: n });
  }
};
Mr = Ws;
var Nn = Hs;
let Ys = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function zs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ve = { exports: {} };
const qs = typeof Buffer < "u", Rn = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Tn = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Pr(e, t, n) {
  n == null && t !== null && typeof t == "object" && (n = t, t = void 0), qs && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const r = JSON.parse(e, t);
  if (r === null || typeof r != "object")
    return r;
  const o = n && n.protoAction || "error", s = n && n.constructorAction || "error";
  if (o === "ignore" && s === "ignore")
    return r;
  if (o !== "ignore" && s !== "ignore") {
    if (Rn.test(e) === !1 && Tn.test(e) === !1)
      return r;
  } else if (o !== "ignore" && s === "ignore") {
    if (Rn.test(e) === !1)
      return r;
  } else if (Tn.test(e) === !1)
    return r;
  return jr(r, { protoAction: o, constructorAction: s, safe: n && n.safe });
}
function jr(e, { protoAction: t = "error", constructorAction: n = "error", safe: r } = {}) {
  let o = [e];
  for (; o.length; ) {
    const s = o;
    o = [];
    for (const i of s) {
      if (t !== "ignore" && Object.prototype.hasOwnProperty.call(i, "__proto__")) {
        if (r === !0)
          return null;
        if (t === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete i.__proto__;
      }
      if (n !== "ignore" && Object.prototype.hasOwnProperty.call(i, "constructor") && Object.prototype.hasOwnProperty.call(i.constructor, "prototype")) {
        if (r === !0)
          return null;
        if (n === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete i.constructor;
      }
      for (const a in i) {
        const c = i[a];
        c && typeof c == "object" && o.push(c);
      }
    }
  }
  return e;
}
function sn(e, t, n) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Pr(e, t, n);
  } finally {
    Error.stackTraceLimit = r;
  }
}
function Gs(e, t) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return Pr(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = n;
  }
}
Ve.exports = sn;
Ve.exports.default = sn;
Ve.exports.parse = sn;
Ve.exports.safeParse = Gs;
Ve.exports.scan = jr;
var Xs = Ve.exports;
const Qs = /* @__PURE__ */ zs(Xs);
var Zs = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = Ys(n, t);
  if (e == null)
    return o;
  if (n.includes(r))
    throw new Us({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, an = Zs(), Jt = Symbol.for("vercel.ai.validator");
function ei(e) {
  return { [Jt]: !0, validate: e };
}
function ti(e) {
  return typeof e == "object" && e !== null && Jt in e && e[Jt] === !0 && "validate" in e;
}
function ni(e) {
  return ti(e) ? e : ri(e);
}
function ri(e) {
  return ei((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function oi({
  value: e,
  schema: t
}) {
  const n = ni(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const r = n.validate(e);
    return r.success ? r : {
      success: !1,
      error: Nn.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: Nn.wrap({ value: e, cause: r })
    };
  }
}
function Cn({
  text: e,
  schema: t
}) {
  try {
    const n = Qs.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const r = oi({ value: n, schema: t });
    return r.success ? { ...r, rawValue: n } : r;
  } catch (n) {
    return {
      success: !1,
      error: xn.isInstance(n) ? n : new xn({ text: e, cause: n })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var qe = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Ge = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Xe = {
  code: "4",
  name: "assistant_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("id" in e) || !("role" in e) || !("content" in e) || typeof e.id != "string" || typeof e.role != "string" || e.role !== "assistant" || !Array.isArray(e.content) || !e.content.every(
      (t) => t != null && typeof t == "object" && "type" in t && t.type === "text" && "text" in t && t.text != null && typeof t.text == "object" && "value" in t.text && typeof t.text.value == "string"
    ))
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    return {
      type: "assistant_message",
      value: e
    };
  }
}, Qe = {
  code: "5",
  name: "assistant_control_data",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("threadId" in e) || !("messageId" in e) || typeof e.threadId != "string" || typeof e.messageId != "string")
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    return {
      type: "assistant_control_data",
      value: {
        threadId: e.threadId,
        messageId: e.messageId
      }
    };
  }
}, Ze = {
  code: "6",
  name: "data_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("role" in e) || !("data" in e) || typeof e.role != "string" || e.role !== "data")
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    return {
      type: "data_message",
      value: e
    };
  }
}, si = [
  qe,
  Ge,
  Xe,
  Qe,
  Ze
];
qe.code + "", Ge.code + "", Xe.code + "", Qe.code + "", Ze.code + "";
qe.name + "", qe.code, Ge.name + "", Ge.code, Xe.name + "", Xe.code, Qe.name + "", Qe.code, Ze.name + "", Ze.code;
si.map((e) => e.code);
function ii({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function ai(e) {
  const t = ["ROOT"];
  let n = -1, r = null;
  function o(c, u, f) {
    switch (c) {
      case '"': {
        n = u, t.pop(), t.push(f), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = u, r = u, t.pop(), t.push(f), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(f), t.push("INSIDE_NUMBER");
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        n = u, t.pop(), t.push(f), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = u, t.pop(), t.push(f), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = u, t.pop(), t.push(f), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function s(c, u) {
    switch (c) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        n = u, t.pop();
        break;
      }
    }
  }
  function i(c, u) {
    switch (c) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        n = u, t.pop();
        break;
      }
    }
  }
  for (let c = 0; c < e.length; c++) {
    const u = e[c];
    switch (t[t.length - 1]) {
      case "ROOT":
        o(u, c, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            n = c, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (u) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (u) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        o(u, c, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(u, c);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            t.pop(), n = c;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            n = c;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (u) {
          case "]": {
            n = c, t.pop();
            break;
          }
          default: {
            n = c, o(u, c, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (u) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            n = c, t.pop();
            break;
          }
          default: {
            n = c;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        o(u, c, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = c;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (u) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            n = c;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, c), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, c);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, c);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, c);
            break;
          }
          default: {
            t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        const l = e.substring(r, c + 1);
        !"false".startsWith(l) && !"true".startsWith(l) && !"null".startsWith(l) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(u, c) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, c)) : n = c;
        break;
      }
    }
  }
  let a = e.slice(0, n + 1);
  for (let c = t.length - 1; c >= 0; c--)
    switch (t[c]) {
      case "INSIDE_STRING": {
        a += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        a += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const f = e.substring(r, e.length);
        "true".startsWith(f) ? a += "true".slice(f.length) : "false".startsWith(f) ? a += "false".slice(f.length) : "null".startsWith(f) && (a += "null".slice(f.length));
      }
    }
  return a;
}
function ci(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = Cn({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = Cn({ text: ai(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var li = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, ui = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, fi = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, di = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, pi = {
  code: "9",
  name: "tool_call",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string" || !("args" in e) || typeof e.args != "object")
      throw new Error(
        '"tool_call" parts expect an object with a "toolCallId", "toolName", and "args" property.'
      );
    return {
      type: "tool_call",
      value: e
    };
  }
}, hi = {
  code: "a",
  name: "tool_result",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("result" in e))
      throw new Error(
        '"tool_result" parts expect an object with a "toolCallId" and a "result" property.'
      );
    return {
      type: "tool_result",
      value: e
    };
  }
}, gi = {
  code: "b",
  name: "tool_call_streaming_start",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("toolName" in e) || typeof e.toolName != "string")
      throw new Error(
        '"tool_call_streaming_start" parts expect an object with a "toolCallId" and "toolName" property.'
      );
    return {
      type: "tool_call_streaming_start",
      value: e
    };
  }
}, mi = {
  code: "c",
  name: "tool_call_delta",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("toolCallId" in e) || typeof e.toolCallId != "string" || !("argsTextDelta" in e) || typeof e.argsTextDelta != "string")
      throw new Error(
        '"tool_call_delta" parts expect an object with a "toolCallId" and "argsTextDelta" property.'
      );
    return {
      type: "tool_call_delta",
      value: e
    };
  }
}, _i = {
  code: "d",
  name: "finish_message",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string")
      throw new Error(
        '"finish_message" parts expect an object with a "finishReason" property.'
      );
    const t = {
      finishReason: e.finishReason
    };
    return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
      promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN,
      completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN
    }), {
      type: "finish_message",
      value: t
    };
  }
}, yi = {
  code: "e",
  name: "finish_step",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("finishReason" in e) || typeof e.finishReason != "string")
      throw new Error(
        '"finish_step" parts expect an object with a "finishReason" property.'
      );
    const t = {
      finishReason: e.finishReason,
      isContinued: !1
    };
    return "usage" in e && e.usage != null && typeof e.usage == "object" && "promptTokens" in e.usage && "completionTokens" in e.usage && (t.usage = {
      promptTokens: typeof e.usage.promptTokens == "number" ? e.usage.promptTokens : Number.NaN,
      completionTokens: typeof e.usage.completionTokens == "number" ? e.usage.completionTokens : Number.NaN
    }), "isContinued" in e && typeof e.isContinued == "boolean" && (t.isContinued = e.isContinued), {
      type: "finish_step",
      value: t
    };
  }
}, vi = {
  code: "f",
  name: "start_step",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("messageId" in e) || typeof e.messageId != "string")
      throw new Error(
        '"start_step" parts expect an object with an "id" property.'
      );
    return {
      type: "start_step",
      value: {
        messageId: e.messageId
      }
    };
  }
}, bi = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, wi = {
  code: "h",
  name: "source",
  parse: (e) => {
    if (e == null || typeof e != "object")
      throw new Error('"source" parts expect a Source object.');
    return {
      type: "source",
      value: e
    };
  }
}, Ei = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, Ii = {
  code: "j",
  name: "reasoning_signature",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("signature" in e) || typeof e.signature != "string")
      throw new Error(
        '"reasoning_signature" parts expect an object with a "signature" property.'
      );
    return {
      type: "reasoning_signature",
      value: { signature: e.signature }
    };
  }
}, Si = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, cn = [
  li,
  ui,
  fi,
  di,
  pi,
  hi,
  gi,
  mi,
  _i,
  yi,
  vi,
  bi,
  wi,
  Ei,
  Ii,
  Si
], xi = Object.fromEntries(
  cn.map((e) => [e.code, e])
);
Object.fromEntries(
  cn.map((e) => [e.name, e.code])
);
var Ni = cn.map((e) => e.code), Ri = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!Ni.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const r = n, o = e.slice(t + 1), s = JSON.parse(o);
  return xi[r].parse(s);
}, Ti = 10;
function Ci(e, t) {
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    n.set(o, r), r += o.length;
  return e.length = 0, n;
}
async function Di({
  stream: e,
  onTextPart: t,
  onReasoningPart: n,
  onReasoningSignaturePart: r,
  onRedactedReasoningPart: o,
  onSourcePart: s,
  onFilePart: i,
  onDataPart: a,
  onErrorPart: c,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: f,
  onToolCallPart: l,
  onToolResultPart: d,
  onMessageAnnotationsPart: p,
  onFinishMessagePart: y,
  onFinishStepPart: S,
  onStartStepPart: A
}) {
  const R = e.getReader(), w = new TextDecoder(), _ = [];
  let h = 0;
  for (; ; ) {
    const { value: m } = await R.read();
    if (m && (_.push(m), h += m.length, m[m.length - 1] !== Ti))
      continue;
    if (_.length === 0)
      break;
    const g = Ci(_, h);
    h = 0;
    const v = w.decode(g, { stream: !0 }).split(`
`).filter((E) => E !== "").map(Ri);
    for (const { type: E, value: b } of v)
      switch (E) {
        case "text":
          await t?.(b);
          break;
        case "reasoning":
          await n?.(b);
          break;
        case "reasoning_signature":
          await r?.(b);
          break;
        case "redacted_reasoning":
          await o?.(b);
          break;
        case "file":
          await i?.(b);
          break;
        case "source":
          await s?.(b);
          break;
        case "data":
          await a?.(b);
          break;
        case "error":
          await c?.(b);
          break;
        case "message_annotations":
          await p?.(b);
          break;
        case "tool_call_streaming_start":
          await u?.(b);
          break;
        case "tool_call_delta":
          await f?.(b);
          break;
        case "tool_call":
          await l?.(b);
          break;
        case "tool_result":
          await d?.(b);
          break;
        case "finish_message":
          await y?.(b);
          break;
        case "finish_step":
          await S?.(b);
          break;
        case "start_step":
          await A?.(b);
          break;
        default: {
          const k = E;
          throw new Error(`Unknown stream part type: ${k}`);
        }
      }
  }
}
async function Ai({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: r,
  generateId: o = an,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var a, c;
  const u = i?.role === "assistant";
  let f = u ? 1 + // find max step in existing tool invocations:
  ((c = (a = i.toolInvocations) == null ? void 0 : a.reduce((g, v) => {
    var E;
    return Math.max(g, (E = v.step) != null ? E : 0);
  }, 0)) != null ? c : 0) : 0;
  const l = u ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let d, p, y;
  function S(g, v) {
    const E = l.parts.find(
      (b) => b.type === "tool-invocation" && b.toolInvocation.toolCallId === g
    );
    E != null ? E.toolInvocation = v : l.parts.push({
      type: "tool-invocation",
      toolInvocation: v
    });
  }
  const A = [];
  let R = u ? i?.annotations : void 0;
  const w = {};
  let _ = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, h = "unknown";
  function m() {
    const g = [...A];
    R?.length && (l.annotations = R);
    const v = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(l),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: o()
    };
    t({
      message: v,
      data: g,
      replaceLastMessage: u
    });
  }
  await Di({
    stream: e,
    onTextPart(g) {
      d == null ? (d = {
        type: "text",
        text: g
      }, l.parts.push(d)) : d.text += g, l.content += g, m();
    },
    onReasoningPart(g) {
      var v;
      y == null ? (y = { type: "text", text: g }, p?.details.push(y)) : y.text += g, p == null ? (p = {
        type: "reasoning",
        reasoning: g,
        details: [y]
      }, l.parts.push(p)) : p.reasoning += g, l.reasoning = ((v = l.reasoning) != null ? v : "") + g, m();
    },
    onReasoningSignaturePart(g) {
      y != null && (y.signature = g.signature);
    },
    onRedactedReasoningPart(g) {
      p == null && (p = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, l.parts.push(p)), p.details.push({
        type: "redacted",
        data: g.data
      }), y = void 0, m();
    },
    onFilePart(g) {
      l.parts.push({
        type: "file",
        mimeType: g.mimeType,
        data: g.data
      }), m();
    },
    onSourcePart(g) {
      l.parts.push({
        type: "source",
        source: g
      }), m();
    },
    onToolCallStreamingStartPart(g) {
      l.toolInvocations == null && (l.toolInvocations = []), w[g.toolCallId] = {
        text: "",
        step: f,
        toolName: g.toolName,
        index: l.toolInvocations.length
      };
      const v = {
        state: "partial-call",
        step: f,
        toolCallId: g.toolCallId,
        toolName: g.toolName,
        args: void 0
      };
      l.toolInvocations.push(v), S(g.toolCallId, v), m();
    },
    onToolCallDeltaPart(g) {
      const v = w[g.toolCallId];
      v.text += g.argsTextDelta;
      const { value: E } = ci(v.text), b = {
        state: "partial-call",
        step: v.step,
        toolCallId: g.toolCallId,
        toolName: v.toolName,
        args: E
      };
      l.toolInvocations[v.index] = b, S(g.toolCallId, b), m();
    },
    async onToolCallPart(g) {
      const v = {
        state: "call",
        step: f,
        ...g
      };
      if (w[g.toolCallId] != null ? l.toolInvocations[w[g.toolCallId].index] = v : (l.toolInvocations == null && (l.toolInvocations = []), l.toolInvocations.push(v)), S(g.toolCallId, v), m(), n) {
        const E = await n({ toolCall: g });
        if (E != null) {
          const b = {
            state: "result",
            step: f,
            ...g,
            result: E
          };
          l.toolInvocations[l.toolInvocations.length - 1] = b, S(g.toolCallId, b), m();
        }
      }
    },
    onToolResultPart(g) {
      const v = l.toolInvocations;
      if (v == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const E = v.findIndex(
        (k) => k.toolCallId === g.toolCallId
      );
      if (E === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const b = {
        ...v[E],
        state: "result",
        ...g
      };
      v[E] = b, S(g.toolCallId, b), m();
    },
    onDataPart(g) {
      A.push(...g), m();
    },
    onMessageAnnotationsPart(g) {
      R == null ? R = [...g] : R.push(...g), m();
    },
    onFinishStepPart(g) {
      f += 1, d = g.isContinued ? d : void 0, p = void 0, y = void 0;
    },
    onStartStepPart(g) {
      u || (l.id = g.messageId), l.parts.push({ type: "step-start" }), m();
    },
    onFinishMessagePart(g) {
      h = g.finishReason, g.usage != null && (_ = ii(g.usage));
    },
    onErrorPart(g) {
      throw new Error(g);
    }
  }), r?.({ message: l, finishReason: h, usage: _ });
}
async function ki({
  stream: e,
  onTextPart: t
}) {
  const n = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: r, value: o } = await n.read();
    if (r)
      break;
    await t(o);
  }
}
async function Oi({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: r = () => /* @__PURE__ */ new Date(),
  generateId: o = an
}) {
  const s = { type: "text", text: "" }, i = {
    id: o(),
    createdAt: r(),
    role: "assistant",
    content: "",
    parts: [s]
  };
  await ki({
    stream: e,
    onTextPart: (a) => {
      i.content += a, s.text += a, t({
        message: { ...i },
        data: [],
        replaceLastMessage: !1
      });
    }
  }), n?.(i, {
    usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
    finishReason: "unknown"
  });
}
var Vi = () => fetch;
async function Mi({
  api: e,
  body: t,
  streamProtocol: n = "data",
  credentials: r,
  headers: o,
  abortController: s,
  restoreMessagesOnFailure: i,
  onResponse: a,
  onUpdate: c,
  onFinish: u,
  onToolCall: f,
  generateId: l,
  fetch: d = Vi(),
  lastMessage: p,
  requestType: y = "generate"
}) {
  var S, A, R;
  const _ = await (y === "resume" ? d(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (S = s?.()) == null ? void 0 : S.signal,
    credentials: r
  }) : d(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (A = s?.()) == null ? void 0 : A.signal,
    credentials: r
  })).catch((h) => {
    throw i(), h;
  });
  if (a)
    try {
      await a(_);
    } catch (h) {
      throw h;
    }
  if (!_.ok)
    throw i(), new Error(
      (R = await _.text()) != null ? R : "Failed to fetch the chat response."
    );
  if (!_.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await Oi({
        stream: _.body,
        update: c,
        onFinish: u,
        generateId: l
      });
      return;
    }
    case "data": {
      await Ai({
        stream: _.body,
        update: c,
        lastMessage: p,
        onToolCall: f,
        onFinish({ message: h, finishReason: m, usage: g }) {
          u && h != null && u(h, { usage: g, finishReason: m });
        },
        generateId: l
      });
      return;
    }
    default: {
      const h = n;
      throw new Error(`Unknown stream protocol: ${h}`);
    }
  }
}
function Wt(e) {
  return e?.reduce((t, n) => {
    var r;
    return Math.max(t, (r = n.step) != null ? r : 0);
  }, 0);
}
function Fr(e) {
  var t;
  return (t = e.parts) != null ? t : [
    ...e.toolInvocations ? e.toolInvocations.map((n) => ({
      type: "tool-invocation",
      toolInvocation: n
    })) : [],
    ...e.reasoning ? [
      {
        type: "reasoning",
        reasoning: e.reasoning,
        details: [{ type: "text", text: e.reasoning }]
      }
    ] : [],
    ...e.content ? [{ type: "text", text: e.content }] : []
  ];
}
function st(e) {
  return e.map((t) => ({
    ...t,
    parts: Fr(t)
  }));
}
async function Dn(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: n, type: r } = t, o = await new Promise((s, i) => {
          const a = new FileReader();
          a.onload = (c) => {
            var u;
            s((u = c.target) == null ? void 0 : u.result);
          }, a.onerror = (c) => i(c), a.readAsDataURL(t);
        });
        return {
          name: n,
          contentType: r,
          url: o
        };
      })
    );
  if (Array.isArray(e))
    return e;
  throw new Error("Invalid attachments type");
}
function Pi({
  originalMaxToolInvocationStep: e,
  originalMessageCount: t,
  maxSteps: n,
  messages: r
}) {
  var o;
  const s = r[r.length - 1];
  return (
    // check if the feature is enabled:
    n > 1 && // ensure there is a last message:
    s != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (r.length > t || Wt(s.toolInvocations) !== e) && // check that next step is possible:
    Lr(s) && // limit the number of automatic steps:
    ((o = Wt(s.toolInvocations)) != null ? o : 0) < n
  );
}
function Lr(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, o, s) => o.type === "step-start" ? s : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function ji({
  messages: e,
  toolCallId: t,
  toolResult: n
}) {
  var r;
  const o = e[e.length - 1], s = o.parts.find(
    (a) => a.type === "tool-invocation" && a.toolInvocation.toolCallId === t
  );
  if (s == null)
    return;
  const i = {
    ...s.toolInvocation,
    state: "result",
    result: n
  };
  s.toolInvocation = i, o.toolInvocations = (r = o.toolInvocations) == null ? void 0 : r.map(
    (a) => a.toolCallId === t ? i : a
  );
}
var Ot = /* @__PURE__ */ new WeakMap(), An = 0;
function Fi(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Ot.has(e[n]) ? r = Ot.get(e[n]) : (r = An, Ot.set(e[n], An++)), t += "@" + r;
  }
  return t;
}
function Li(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = Fi(e) : e = String(e || ""), e;
}
var ln = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return Li(t);
    }, e.prototype.get = function(t) {
      var n = this.serializeKey(t);
      return this.items.get(n);
    }, e.prototype.set = function(t, n, r) {
      var o = this.serializeKey(t), s = r || this.ttl, i = Date.now(), a = {
        data: n,
        createdAt: i,
        expiresAt: s ? i + s : 1 / 0
      };
      this.dispatchExpire(s, a, o), this.items.set(o, a);
    }, e.prototype.dispatchExpire = function(t, n, r) {
      var o = this;
      t && setTimeout(function() {
        var s = Date.now(), i = s >= n.expiresAt;
        i && o.delete(r);
      }, t);
    }, e.prototype.delete = function(t) {
      this.items.delete(t);
    }, e;
  }()
);
function $i() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function Bi() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var Ki = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Vt = {
  isOnline: $i,
  isDocumentVisible: Bi,
  fetcher: Ki
};
var ie = function() {
  return ie = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ie.apply(this, arguments);
}, xe = function(e, t, n, r) {
  function o(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function a(f) {
      try {
        u(r.next(f));
      } catch (l) {
        i(l);
      }
    }
    function c(f) {
      try {
        u(r.throw(f));
      } catch (l) {
        i(l);
      }
    }
    function u(f) {
      f.done ? s(f.value) : o(f.value).then(a, c);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, Ne = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(u) {
    return function(f) {
      return c([u, f]);
    };
  }
  function c(u) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, o && (s = u[0] & 2 ? o.return : u[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, u[1])).done) return s;
      switch (o = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
        case 0:
        case 1:
          s = u;
          break;
        case 4:
          return n.label++, { value: u[1], done: !1 };
        case 5:
          n.label++, o = u[1], u = [0];
          continue;
        case 7:
          u = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            n = 0;
            continue;
          }
          if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
            n.label = u[1];
            break;
          }
          if (u[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = u;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(u);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      u = t.call(e, n);
    } catch (f) {
      u = [6, f], o = 0;
    } finally {
      r = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}, Ui = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, s = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) s.push(o.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (i) throw i.error;
    }
  }
  return s;
}, Ji = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, $r = new ln(), mt = new ln(), Mt = new ln(), Br = {
  cache: $r,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: !0,
  revalidateDebounce: 0,
  shouldRetryOnError: !0,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: Vt.fetcher,
  isOnline: Vt.isOnline,
  isDocumentVisible: Vt.isDocumentVisible
};
function Wi(e, t, n) {
  var r = mt.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    mt.set(e, [t], n > 0 ? n + o : n);
  }
}
function Hi(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var r = Math.min(t || 0, n.errorRetryCount), o = r * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: r + 1, shouldRetryOnError: !0 });
    }, o);
  }
}
var kn = function(e, t, n, r) {
  return n === void 0 && (n = $r), r === void 0 && (r = Br.ttl), xe(void 0, void 0, void 0, function() {
    var o, s, i, a, c, u, f;
    return Ne(this, function(l) {
      switch (l.label) {
        case 0:
          if (!Yi(t)) return [3, 5];
          l.label = 1;
        case 1:
          return l.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return o = l.sent(), [3, 4];
        case 3:
          return a = l.sent(), s = a, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          o = t, l.label = 6;
        case 6:
          if (i = !1, c = { data: o, error: s, isValidating: i }, typeof o < "u")
            try {
              n.set(e, c, r);
            } catch (d) {
              console.error("swrv(mutate): failed to set cache", d);
            }
          return u = mt.get(e), u && u.data.length && (f = u.data.filter(function(d) {
            return d.key === e;
          }), f.forEach(function(d, p) {
            typeof c.data < "u" && (d.data = c.data), d.error = c.error, d.isValidating = c.isValidating, d.isLoading = c.isValidating;
            var y = p === f.length - 1;
            y || delete f[p];
          }), f = f.filter(Boolean)), [2, c];
      }
    });
  });
};
function On() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = ie({}, Br), i = !1, a = !1, c = on(), u = c?.proxy || c;
  if (!u)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var f = u?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = ie(ie({}, s), t[2]));
  var l = f ? s.serverTTL : s.ttl, d = typeof r == "function" ? r : ee(r);
  typeof o > "u" && (o = s.fetcher);
  var p = null;
  p || (p = wt({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var y = function(w, _) {
    return xe(e, void 0, void 0, function() {
      var h, m, g, v, E, b, k, ne = this;
      return Ne(this, function(J) {
        switch (J.label) {
          case 0:
            return h = p.data === void 0, m = d.value, m ? (g = s.cache.get(m), v = g && g.data, p.isValidating = !0, p.isLoading = !v, v && (p.data = v.data, p.error = v.error), E = w || o, !E || !s.isDocumentVisible() && !h || _?.forceRevalidate !== void 0 && !_?.forceRevalidate ? (p.isValidating = !1, p.isLoading = !1, [
              2
              /*return*/
            ]) : g && (b = !!(Date.now() - g.createdAt >= s.dedupingInterval || _?.forceRevalidate), !b) ? (p.isValidating = !1, p.isLoading = !1, [
              2
              /*return*/
            ]) : (k = function() {
              return xe(ne, void 0, void 0, function() {
                var O, W, he, we;
                return Ne(this, function(Ee) {
                  switch (Ee.label) {
                    case 0:
                      return O = Mt.get(m), O ? [3, 2] : (W = Array.isArray(m) ? m : [m], he = E.apply(void 0, Ji([], Ui(W), !1)), Mt.set(m, he, s.dedupingInterval), [4, kn(m, he, s.cache, l)]);
                    case 1:
                      return Ee.sent(), [3, 4];
                    case 2:
                      return [4, kn(m, O.data, s.cache, l)];
                    case 3:
                      Ee.sent(), Ee.label = 4;
                    case 4:
                      return p.isValidating = !1, p.isLoading = !1, Mt.delete(m), p.error !== void 0 && (we = !i && s.shouldRetryOnError && (_ ? _.shouldRetryOnError : !0), we && Hi(y, _ ? _.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, v && s.revalidateDebounce ? (setTimeout(function() {
              return xe(ne, void 0, void 0, function() {
                return Ne(this, function(O) {
                  switch (O.label) {
                    case 0:
                      return i ? [3, 2] : [4, k()];
                    case 1:
                      O.sent(), O.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, s.revalidateDebounce), [3, 3]) : [3, 1])) : [
              2
              /*return*/
            ];
          case 1:
            return [4, k()];
          case 2:
            J.sent(), J.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, S = function() {
    return xe(e, void 0, void 0, function() {
      return Ne(this, function(w) {
        return [2, y(null, { shouldRetryOnError: !1 })];
      });
    });
  }, A = null;
  dr(function() {
    var w = function() {
      return xe(e, void 0, void 0, function() {
        return Ne(this, function(_) {
          switch (_.label) {
            case 0:
              return !p.error && s.isOnline() ? [4, y()] : [3, 2];
            case 1:
              return _.sent(), [3, 3];
            case 2:
              A && clearTimeout(A), _.label = 3;
            case 3:
              return s.refreshInterval && !i && (A = setTimeout(w, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (A = setTimeout(w, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", S, !1), window.addEventListener("focus", S, !1));
  }), os(function() {
    i = !0, A && clearTimeout(A), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", S, !1), window.removeEventListener("focus", S, !1));
    var w = mt.get(d.value);
    w && (w.data = w.data.filter(function(_) {
      return _ !== p;
    }));
  });
  try {
    hs(d, function(w) {
      Z(d) || (d.value = w), p.key = w, p.isValidating = !!w, Wi(d.value, p, l), !f && !a && d.value && y(), a = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var R = ie(ie({}, ko(p)), { mutate: function(w, _) {
    return y(w, ie(ie({}, _), { forceRevalidate: !0 }));
  } });
  return R;
}
function Yi(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var zi = On.default || On, Vn = {}, Mn = {};
function qi({
  api: e = "/api/chat",
  id: t,
  initialMessages: n = [],
  initialInput: r = "",
  sendExtraMessageFields: o,
  streamProtocol: s = "data",
  onResponse: i,
  onFinish: a,
  onError: c,
  credentials: u,
  headers: f,
  body: l,
  generateId: d = an,
  onToolCall: p,
  fetch: y,
  keepLastMessageOnError: S = !0,
  maxSteps: A = 1,
  experimental_prepareRequestBody: R
} = {
  maxSteps: 1
}) {
  var w, _;
  const h = t ?? d(), m = `${e}|${h}`, { data: g, mutate: v } = zi(
    m,
    () => {
      var x;
      return (x = Vn[m]) != null ? x : st(n);
    }
  ), E = (w = Mn[h]) != null ? w : Mn[h] = ee(
    "ready"
  );
  (_ = g.value) != null || (g.value = st(n));
  const b = (x) => (Vn[m] = x, v()), k = g, ne = ee(void 0), J = ee(void 0);
  let O = null;
  async function W(x, { data: V, headers: K, body: z } = {}) {
    var ce, Me, un;
    ne.value = void 0, E.value = "submitted";
    const Hr = k.value.length, Yr = Wt(
      (ce = k.value[k.value.length - 1]) == null ? void 0 : ce.toolInvocations
    );
    try {
      O = new AbortController();
      const ge = st(x), re = ge;
      b(re);
      const zr = (Me = J.value) != null ? Me : [], qr = o ? re : re.map(
        ({
          role: St,
          content: Pe,
          experimental_attachments: et,
          data: fn,
          annotations: dn,
          toolInvocations: pn,
          parts: hn
        }) => ({
          role: St,
          content: Pe,
          ...et !== void 0 && {
            experimental_attachments: et
          },
          ...fn !== void 0 && { data: fn },
          ...dn !== void 0 && { annotations: dn },
          ...pn !== void 0 && { toolInvocations: pn },
          ...hn !== void 0 && { parts: hn }
        })
      );
      await Mi({
        api: e,
        body: (un = R?.({
          id: h,
          messages: re,
          requestData: V,
          requestBody: z
        })) != null ? un : {
          id: h,
          messages: qr,
          data: V,
          ...L(l),
          // Use unref to unwrap the ref value
          ...z
        },
        streamProtocol: s,
        headers: {
          ...f,
          ...K
        },
        abortController: () => O,
        credentials: u,
        onResponse: i,
        onUpdate({ message: St, data: Pe, replaceLastMessage: et }) {
          E.value = "streaming", b([
            ...et ? re.slice(0, re.length - 1) : re,
            St
          ]), Pe?.length && (J.value = [...zr, ...Pe]);
        },
        onFinish: a,
        restoreMessagesOnFailure() {
          S || b(ge);
        },
        generateId: d,
        onToolCall: p,
        fetch: y,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Ht(re[re.length - 1])
      }), E.value = "ready";
    } catch (ge) {
      if (ge.name === "AbortError")
        return O = null, E.value = "ready", null;
      c && ge instanceof Error && c(ge), ne.value = ge, E.value = "error";
    } finally {
      O = null;
    }
    Pi({
      originalMaxToolInvocationStep: Yr,
      originalMessageCount: Hr,
      maxSteps: A,
      messages: k.value
    }) && await W(k.value);
  }
  const he = async (x, V) => {
    var K, z, ce;
    const Me = await Dn(
      (K = V?.experimental_attachments) != null ? K : x.experimental_attachments
    );
    return W(
      k.value.concat({
        ...x,
        id: (z = x.id) != null ? z : d(),
        createdAt: (ce = x.createdAt) != null ? ce : /* @__PURE__ */ new Date(),
        experimental_attachments: Me.length > 0 ? Me : void 0,
        parts: Fr(x)
      }),
      V
    );
  }, we = async (x) => {
    const V = k.value;
    return V.length === 0 ? null : V[V.length - 1].role === "assistant" ? W(V.slice(0, -1), x) : W(V, x);
  }, Ee = () => {
    O && (O.abort(), O = null);
  }, Kr = (x) => {
    typeof x == "function" && (x = x(k.value)), b(st(x));
  }, Ur = (x) => {
    typeof x == "function" && (x = x(J.value)), J.value = x;
  }, It = ee(r), Jr = async (x, V = {}) => {
    var K;
    (K = x?.preventDefault) == null || K.call(x);
    const z = It.value;
    if (!z && !V.allowEmptySubmit)
      return;
    const ce = await Dn(
      V.experimental_attachments
    );
    W(
      k.value.concat({
        id: d(),
        createdAt: /* @__PURE__ */ new Date(),
        content: z,
        role: "user",
        experimental_attachments: ce.length > 0 ? ce : void 0,
        parts: [{ type: "text", text: z }]
      }),
      V
    ), It.value = "";
  }, Wr = ({
    toolCallId: x,
    result: V
  }) => {
    const K = k.value;
    if (ji({
      messages: K,
      toolCallId: x,
      toolResult: V
    }), b(K), E.value === "submitted" || E.value === "streaming")
      return;
    const z = K[K.length - 1];
    Lr(z) && W(K);
  };
  return {
    id: h,
    messages: k,
    append: he,
    error: ne,
    reload: we,
    stop: Ee,
    setMessages: Kr,
    input: It,
    handleSubmit: Jr,
    isLoading: Er(
      () => E.value === "submitted" || E.value === "streaming"
    ),
    status: E,
    data: J,
    setData: Ur,
    addToolResult: Wr
  };
}
function Ht(e) {
  if (Array.isArray(e))
    return [...e.map(Ht)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, r] of Object.entries(e))
      t[n] = Ht(r);
    return t;
  } else
    return e;
}
function Gi(e) {
  const t = ee(!1), n = ee("");
  let r = null, o = [];
  const s = async () => {
    if (!t.value)
      try {
        const c = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        r = new MediaRecorder(c), o = [], r.ondataavailable = (u) => {
          o.push(u.data);
        }, r.onstop = async () => {
          const u = new Blob(o, { type: r?.mimeType });
          await a(u), c.getTracks().forEach((f) => f.stop());
        }, r.start(), t.value = !0, n.value = "";
      } catch (c) {
        n.value = `启动录音失败: ${c.message}`;
      }
  }, i = () => {
    !t.value || !r || (r.stop(), t.value = !1);
  }, a = async (c) => {
    const u = new FormData();
    u.append("audio", c, "recording.webm");
    try {
      const f = await fetch("/api/transcribe", {
        method: "POST",
        body: u
      });
      if (!f.ok) throw new Error("转录请求失败");
      const l = await f.json();
      l.transcript && e(l.transcript);
    } catch (f) {
      n.value = `上传音频失败: ${f.message}`;
    }
  };
  return {
    isRecording: lt(t),
    error: lt(n),
    start: s,
    stop: i
  };
}
const Xi = {
  key: 1,
  class: "chat-panel"
}, Qi = { class: "messages" }, Zi = {
  key: 0,
  class: "msg-empty"
}, ea = ["src"], ta = {
  key: 1,
  class: "msg-line msg-ai"
}, na = {
  key: 0,
  class: "dice"
}, ra = { key: 1 }, oa = ["disabled"], sa = /* @__PURE__ */ ns({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s } = qi({ api: t.apiUrl }), { isRecording: i, start: a, stop: c } = Gi((_) => {
      const h = _.trim();
      if (["发送", "提交", "发出"].includes(h)) return void o();
      if (["清空", "清除", "删除"].includes(h)) return void (r.value = "");
      r.value = h;
    }), u = ee(!1), f = wt({ x: 0, y: 0 }), l = ee(null);
    function d() {
      u.value = !u.value;
    }
    function p() {
      R.value || d();
    }
    function y(_) {
      return _.trim().startsWith("<audio");
    }
    function S(_) {
      const h = _.match(/src="([^"]+)"/);
      return h ? h[1] : null;
    }
    const A = Er(() => {
      if (!s.value) return !1;
      const _ = [...n.value].reverse().find((h) => h.role === "user");
      return !!(_ && /摇骰子|掷骰子/.test(_.content));
    }), R = ee(!1);
    function w(_) {
      _.preventDefault();
      const h = l.value, m = _.clientX, g = _.clientY, v = f.x, E = f.y;
      let b = !1;
      function k(J) {
        const O = J.clientX - m, W = J.clientY - g;
        if (!b && (Math.abs(O) > 5 || Math.abs(W) > 5) && (b = !0, R.value = !0), b) {
          const he = Math.min(Math.max(0, v + O), window.innerWidth - h.offsetWidth), we = Math.min(Math.max(0, E + W), window.innerHeight - h.offsetHeight);
          f.x = he, f.y = we;
        }
      }
      function ne() {
        document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", ne), setTimeout(() => R.value = !1, 10);
      }
      document.addEventListener("mousemove", k), document.addEventListener("mouseup", ne);
    }
    return dr(() => {
      const _ = l.value, h = 20;
      f.x = window.innerWidth - _.offsetWidth - h, f.y = window.innerHeight - _.offsetHeight - h;
    }), (_, h) => (H(), q("div", {
      ref_key: "containerRef",
      ref: l,
      class: "ai-bubble-container",
      style: vt({ left: f.x + "px", top: f.y + "px" })
    }, [
      ue("div", {
        class: "floating-ball",
        onMousedown: w,
        onClick: p
      }, "AI", 32),
      u.value ? (H(), q("div", {
        key: 0,
        class: "close-btn",
        onClick: d
      }, "×")) : ot("", !0),
      u.value ? (H(), q("div", Xi, [
        ue("div", Qi, [
          L(n).length === 0 ? (H(), q("div", Zi, " 有什么可以帮您的吗？ ")) : ot("", !0),
          (H(!0), q(ht, null, is(L(n), (m) => (H(), q("div", {
            key: m.id,
            class: Ke(["msg-line", m.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            y(m.content) ? (H(), q("audio", {
              key: 0,
              src: S(m.content),
              controls: "",
              autoplay: ""
            }, null, 8, ea)) : (H(), q(ht, { key: 1 }, [
              yr(Un(m.content), 1)
            ], 64))
          ], 2))), 128)),
          L(s) ? (H(), q("div", ta, [
            A.value ? (H(), q("span", na, "⚀⚂⚅")) : (H(), q("span", ra, "思考中..."))
          ])) : ot("", !0)
        ]),
        ue("form", {
          onSubmit: h[3] || (h[3] = Sn(
            //@ts-ignore
            (...m) => L(o) && L(o)(...m),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          es(ue("textarea", {
            "onUpdate:modelValue": h[0] || (h[0] = (m) => B(r) ? r.value = m : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: h[1] || (h[1] = js(Sn(
              //@ts-ignore
              (...m) => L(o) && L(o)(...m),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [Os, L(r)]
          ]),
          ue("button", {
            type: "button",
            class: Ke(["btn-voice", { listening: L(i) }]),
            onClick: h[2] || (h[2] = (m) => L(i) ? L(c)() : L(a)()),
            title: "语音输入"
          }, "🎤", 2),
          ue("button", {
            type: "submit",
            class: "btn-send",
            disabled: L(s) || !L(r).trim()
          }, "➤", 8, oa)
        ], 32)
      ])) : ot("", !0)
    ], 4));
  }
}), ia = ".ai-bubble-container{position:fixed;z-index:9999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#ff5722,#ffc107);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:-8px;right:-8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px}.chat-panel{position:absolute;bottom:80px;right:0;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", aa = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, ca = /* @__PURE__ */ aa(sa, [["styles", [ia]]]);
export {
  ca as default
};
