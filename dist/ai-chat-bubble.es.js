var Zo = Object.defineProperty, Qo = Object.defineProperties;
var ei = Object.getOwnPropertyDescriptors;
var $s = Object.getOwnPropertySymbols;
var ti = Object.prototype.hasOwnProperty, ni = Object.prototype.propertyIsEnumerable;
var Bs = (e, t, n) => t in e ? Zo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ie = (e, t) => {
  for (var n in t || (t = {}))
    ti.call(t, n) && Bs(e, n, t[n]);
  if ($s)
    for (var n of $s(t))
      ni.call(t, n) && Bs(e, n, t[n]);
  return e;
}, ut = (e, t) => Qo(e, ei(t));
var fe = (e, t, n) => new Promise((s, r) => {
  var o = (a) => {
    try {
      l(n.next(a));
    } catch (c) {
      r(c);
    }
  }, i = (a) => {
    try {
      l(n.throw(a));
    } catch (c) {
      r(c);
    }
  }, l = (a) => a.done ? s(a.value) : Promise.resolve(a.value).then(o, i);
  l((n = n.apply(e, t)).next());
});
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ps(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = {}, At = [], Xe = () => {
}, si = () => !1, In = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), gs = (e) => e.startsWith("onUpdate:"), ae = Object.assign, ms = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ri = Object.prototype.hasOwnProperty, z = (e, t) => ri.call(e, t), $ = Array.isArray, Rt = (e) => Tn(e) === "[object Map]", Pr = (e) => Tn(e) === "[object Set]", K = (e) => typeof e == "function", le = (e) => typeof e == "string", gt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Dr = (e) => (re(e) || K(e)) && K(e.then) && K(e.catch), Mr = Object.prototype.toString, Tn = (e) => Mr.call(e), oi = (e) => Tn(e).slice(8, -1), Cn = (e) => Tn(e) === "[object Object]", _s = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $t = /* @__PURE__ */ ps(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), An = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ii = /-(\w)/g, Be = An(
  (e) => e.replace(ii, (t, n) => n ? n.toUpperCase() : "")
), li = /\B([A-Z])/g, De = An(
  (e) => e.replace(li, "-$1").toLowerCase()
), kr = An((e) => e.charAt(0).toUpperCase() + e.slice(1)), jn = An(
  (e) => e ? `on${kr(e)}` : ""
), ht = (e, t) => !Object.is(e, t), hn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Xn = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Zn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Hs = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Us;
const Rn = () => Us || (Us = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : typeof globalThis != "undefined" ? globalThis : {});
function On(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = le(s) ? fi(s) : On(s);
      if (r)
        for (const o in r)
          t[o] = r[o];
    }
    return t;
  } else if (le(e) || re(e))
    return e;
}
const ai = /;(?![^(]*\))/g, ci = /:([^]+)/, ui = /\/\*[^]*?\*\//g;
function fi(e) {
  const t = {};
  return e.replace(ui, "").split(ai).forEach((n) => {
    if (n) {
      const s = n.split(ci);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (le(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ot(e[n]);
      s && (t += s + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const di = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hi = /* @__PURE__ */ ps(di);
function Fr(e) {
  return !!e || e === "";
}
const jr = (e) => !!(e && e.__v_isRef === !0), Qn = (e) => le(e) ? e : e == null ? "" : $(e) || re(e) && (e.toString === Mr || !K(e.toString)) ? jr(e) ? Qn(e.value) : JSON.stringify(e, Lr, 2) : String(e), Lr = (e, t) => jr(t) ? Lr(e, t.value) : Rt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], o) => (n[Ln(s, o) + " =>"] = r, n),
    {}
  )
} : Pr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ln(n))
} : gt(t) ? Ln(t) : re(t) && !$(t) && !Cn(t) ? String(t) : t, Ln = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ce;
class pi {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ce, !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ce, Ce = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ce = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function gi() {
  return Ce;
}
let te;
const Vn = /* @__PURE__ */ new WeakSet();
class Vr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Vn.has(this) && (Vn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Br(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ks(this), Hr(this);
    const t = te, n = He;
    te = this, He = !0;
    try {
      return this.fn();
    } finally {
      Ur(this), te = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        vs(t);
      this.deps = this.depsTail = void 0, Ks(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Vn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    es(this) && this.run();
  }
  get dirty() {
    return es(this);
  }
}
let $r = 0, Bt, Ht;
function Br(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ht, Ht = e;
    return;
  }
  e.next = Bt, Bt = e;
}
function ys() {
  $r++;
}
function bs() {
  if (--$r > 0)
    return;
  if (Ht) {
    let t = Ht;
    for (Ht = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Bt; ) {
    let t = Bt;
    for (Bt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Hr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ur(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), vs(s), mi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function es(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Kr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Kr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gt) || (e.globalVersion = Gt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !es(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = te, s = He;
  te = e, He = !0;
  try {
    Hr(e);
    const r = e.fn(e._value);
    (t.version === 0 || ht(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    te = n, He = s, Ur(e), e.flags &= -3;
  }
}
function vs(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      vs(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function mi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const Wr = [];
function it() {
  Wr.push(He), He = !1;
}
function lt() {
  const e = Wr.pop();
  He = e === void 0 ? !0 : e;
}
function Ks(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = te;
    te = void 0;
    try {
      t();
    } finally {
      te = n;
    }
  }
}
let Gt = 0;
class _i {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ws {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!te || !He || te === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== te)
      n = this.activeLink = new _i(te, this), te.deps ? (n.prevDep = te.depsTail, te.depsTail.nextDep = n, te.depsTail = n) : te.deps = te.depsTail = n, Jr(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = te.depsTail, n.nextDep = void 0, te.depsTail.nextDep = n, te.depsTail = n, te.deps === n && (te.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Gt++, this.notify(t);
  }
  notify(t) {
    ys();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      bs();
    }
  }
}
function Jr(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Jr(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const _n = /* @__PURE__ */ new WeakMap(), vt = Symbol(
  ""
), ts = Symbol(
  ""
), qt = Symbol(
  ""
);
function ye(e, t, n) {
  if (He && te) {
    let s = _n.get(e);
    s || _n.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new ws()), r.map = s, r.key = n), r.track();
  }
}
function rt(e, t, n, s, r, o) {
  const i = _n.get(e);
  if (!i) {
    Gt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if (ys(), t === "clear")
    i.forEach(l);
  else {
    const a = $(e), c = a && _s(n);
    if (a && n === "length") {
      const f = Number(s);
      i.forEach((h, p) => {
        (p === "length" || p === qt || !gt(p) && p >= f) && l(h);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), c && l(i.get(qt)), t) {
        case "add":
          a ? c && l(i.get("length")) : (l(i.get(vt)), Rt(e) && l(i.get(ts)));
          break;
        case "delete":
          a || (l(i.get(vt)), Rt(e) && l(i.get(ts)));
          break;
        case "set":
          Rt(e) && l(i.get(vt));
          break;
      }
  }
  bs();
}
function yi(e, t) {
  const n = _n.get(e);
  return n && n.get(t);
}
function wt(e) {
  const t = q(e);
  return t === e ? t : (ye(t, "iterate", qt), je(e) ? t : t.map(pe));
}
function Nn(e) {
  return ye(e = q(e), "iterate", qt), e;
}
const bi = {
  __proto__: null,
  [Symbol.iterator]() {
    return $n(this, Symbol.iterator, pe);
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((t) => $(t) ? wt(t) : t)
    );
  },
  entries() {
    return $n(this, "entries", (e) => (e[1] = pe(e[1]), e));
  },
  every(e, t) {
    return et(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return et(this, "filter", e, t, (n) => n.map(pe), arguments);
  },
  find(e, t) {
    return et(this, "find", e, t, pe, arguments);
  },
  findIndex(e, t) {
    return et(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return et(this, "findLast", e, t, pe, arguments);
  },
  findLastIndex(e, t) {
    return et(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return et(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bn(this, "includes", e);
  },
  indexOf(...e) {
    return Bn(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Bn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return et(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jt(this, "pop");
  },
  push(...e) {
    return jt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ws(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ws(this, "reduceRight", e, t);
  },
  shift() {
    return jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return et(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jt(this, "splice", e);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return jt(this, "unshift", e);
  },
  values() {
    return $n(this, "values", pe);
  }
};
function $n(e, t, n) {
  const s = Nn(e), r = s[t]();
  return s !== e && !je(e) && (r._next = r.next, r.next = () => {
    const o = r._next();
    return o.value && (o.value = n(o.value)), o;
  }), r;
}
const vi = Array.prototype;
function et(e, t, n, s, r, o) {
  const i = Nn(e), l = i !== e && !je(e), a = i[t];
  if (a !== vi[t]) {
    const h = a.apply(e, o);
    return l ? pe(h) : h;
  }
  let c = n;
  i !== e && (l ? c = function(h, p) {
    return n.call(this, pe(h), p, e);
  } : n.length > 2 && (c = function(h, p) {
    return n.call(this, h, p, e);
  }));
  const f = a.call(i, c, s);
  return l && r ? r(f) : f;
}
function Ws(e, t, n, s) {
  const r = Nn(e);
  let o = n;
  return r !== e && (je(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, pe(l), a, e);
  }), r[t](o, ...s);
}
function Bn(e, t, n) {
  const s = q(e);
  ye(s, "iterate", qt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && Ss(n[0]) ? (n[0] = q(n[0]), s[t](...n)) : r;
}
function jt(e, t, n = []) {
  it(), ys();
  const s = q(e)[t].apply(e, n);
  return bs(), lt(), s;
}
const wi = /* @__PURE__ */ ps("__proto__,__v_isRef,__isVue"), Yr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt)
);
function Ei(e) {
  gt(e) || (e = String(e));
  const t = q(this);
  return ye(t, "has", e), t.hasOwnProperty(e);
}
class Gr {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (r ? o ? Pi : Zr : o ? Xr : zr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = $(t);
    if (!r) {
      let a;
      if (i && (a = bi[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ei;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : s
    );
    return (gt(n) ? Yr.has(n) : wi(n)) || (r || ye(t, "get", n), o) ? l : de(l) ? i && _s(n) ? l : l.value : re(l) ? r ? Ut(l) : rn(l) : l;
  }
}
class qr extends Gr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let o = t[n];
    if (!this._isShallow) {
      const a = at(o);
      if (!je(s) && !at(s) && (o = q(o), s = q(s)), !$(t) && de(o) && !de(s))
        return a ? !1 : (o.value = s, !0);
    }
    const i = $(t) && _s(n) ? Number(n) < t.length : z(t, n), l = Reflect.set(
      t,
      n,
      s,
      de(t) ? t : r
    );
    return t === q(r) && (i ? ht(s, o) && rt(t, "set", n, s) : rt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = z(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && rt(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!gt(n) || !Yr.has(n)) && ye(t, "has", n), s;
  }
  ownKeys(t) {
    return ye(
      t,
      "iterate",
      $(t) ? "length" : vt
    ), Reflect.ownKeys(t);
  }
}
class xi extends Gr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Si = /* @__PURE__ */ new qr(), Ii = /* @__PURE__ */ new xi(), Ti = /* @__PURE__ */ new qr(!0);
const ns = (e) => e, cn = (e) => Reflect.getPrototypeOf(e);
function Ci(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, o = q(r), i = Rt(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = r[e](...s), f = n ? ns : t ? yn : pe;
    return !t && ye(
      o,
      "iterate",
      a ? ts : vt
    ), {
      // iterator protocol
      next() {
        const { value: h, done: p } = c.next();
        return p ? { value: h, done: p } : {
          value: l ? [f(h[0]), f(h[1])] : f(h),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function un(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ai(e, t) {
  const n = {
    get(r) {
      const o = this.__v_raw, i = q(o), l = q(r);
      e || (ht(r, l) && ye(i, "get", r), ye(i, "get", l));
      const { has: a } = cn(i), c = t ? ns : e ? yn : pe;
      if (a.call(i, r))
        return c(o.get(r));
      if (a.call(i, l))
        return c(o.get(l));
      o !== i && o.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && ye(q(r), "iterate", vt), Reflect.get(r, "size", r);
    },
    has(r) {
      const o = this.__v_raw, i = q(o), l = q(r);
      return e || (ht(r, l) && ye(i, "has", r), ye(i, "has", l)), r === l ? o.has(r) : o.has(r) || o.has(l);
    },
    forEach(r, o) {
      const i = this, l = i.__v_raw, a = q(l), c = t ? ns : e ? yn : pe;
      return !e && ye(a, "iterate", vt), l.forEach((f, h) => r.call(o, c(f), c(h), i));
    }
  };
  return ae(
    n,
    e ? {
      add: un("add"),
      set: un("set"),
      delete: un("delete"),
      clear: un("clear")
    } : {
      add(r) {
        !t && !je(r) && !at(r) && (r = q(r));
        const o = q(this);
        return cn(o).has.call(o, r) || (o.add(r), rt(o, "add", r, r)), this;
      },
      set(r, o) {
        !t && !je(o) && !at(o) && (o = q(o));
        const i = q(this), { has: l, get: a } = cn(i);
        let c = l.call(i, r);
        c || (r = q(r), c = l.call(i, r));
        const f = a.call(i, r);
        return i.set(r, o), c ? ht(o, f) && rt(i, "set", r, o) : rt(i, "add", r, o), this;
      },
      delete(r) {
        const o = q(this), { has: i, get: l } = cn(o);
        let a = i.call(o, r);
        a || (r = q(r), a = i.call(o, r)), l && l.call(o, r);
        const c = o.delete(r);
        return a && rt(o, "delete", r, void 0), c;
      },
      clear() {
        const r = q(this), o = r.size !== 0, i = r.clear();
        return o && rt(
          r,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Ci(r, e, t);
  }), n;
}
function Es(e, t) {
  const n = Ai(e, t);
  return (s, r, o) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    z(n, r) && r in s ? n : s,
    r,
    o
  );
}
const Ri = {
  get: /* @__PURE__ */ Es(!1, !1)
}, Oi = {
  get: /* @__PURE__ */ Es(!1, !0)
}, Ni = {
  get: /* @__PURE__ */ Es(!0, !1)
};
const zr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), Zr = /* @__PURE__ */ new WeakMap(), Pi = /* @__PURE__ */ new WeakMap();
function Di(e) {
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
function Mi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Di(oi(e));
}
function rn(e) {
  return at(e) ? e : xs(
    e,
    !1,
    Si,
    Ri,
    zr
  );
}
function ki(e) {
  return xs(
    e,
    !1,
    Ti,
    Oi,
    Xr
  );
}
function Ut(e) {
  return xs(
    e,
    !0,
    Ii,
    Ni,
    Zr
  );
}
function xs(e, t, n, s, r) {
  if (!re(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = Mi(e);
  if (o === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, l), l;
}
function Nt(e) {
  return at(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function at(e) {
  return !!(e && e.__v_isReadonly);
}
function je(e) {
  return !!(e && e.__v_isShallow);
}
function Ss(e) {
  return e ? !!e.__v_raw : !1;
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function Fi(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && Xn(e, "__v_skip", !0), e;
}
const pe = (e) => re(e) ? rn(e) : e, yn = (e) => re(e) ? Ut(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function we(e) {
  return ji(e, !1);
}
function ji(e, t) {
  return de(e) ? e : new Li(e, t);
}
class Li {
  constructor(t, n) {
    this.dep = new ws(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : q(t), this._value = n ? t : pe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || je(t) || at(t);
    t = s ? t : q(t), ht(t, n) && (this._rawValue = t, this._value = s ? t : pe(t), this.dep.trigger());
  }
}
function Te(e) {
  return de(e) ? e.value : e;
}
const Vi = {
  get: (e, t, n) => t === "__v_raw" ? e : Te(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return de(r) && !de(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Qr(e) {
  return Nt(e) ? e : new Proxy(e, Vi);
}
function $i(e) {
  const t = $(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Hi(e, n);
  return t;
}
class Bi {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return yi(q(this._object), this._key);
  }
}
function Hi(e, t, n) {
  const s = e[t];
  return de(s) ? s : new Bi(e, t, n);
}
class Ui {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ws(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    te !== this)
      return Br(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Kr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ki(e, t, n = !1) {
  let s, r;
  return K(e) ? s = e : (s = e.get, r = e.set), new Ui(s, r, n);
}
const fn = {}, bn = /* @__PURE__ */ new WeakMap();
let bt;
function Wi(e, t = !1, n = bt) {
  if (n) {
    let s = bn.get(n);
    s || bn.set(n, s = []), s.push(e);
  }
}
function Ji(e, t, n = Q) {
  const { immediate: s, deep: r, once: o, scheduler: i, augmentJob: l, call: a } = n, c = (A) => r ? A : je(A) || r === !1 || r === 0 ? ot(A, 1) : ot(A);
  let f, h, p, m, O = !1, R = !1;
  if (de(e) ? (h = () => e.value, O = je(e)) : Nt(e) ? (h = () => c(e), O = !0) : $(e) ? (R = !0, O = e.some((A) => Nt(A) || je(A)), h = () => e.map((A) => {
    if (de(A))
      return A.value;
    if (Nt(A))
      return c(A);
    if (K(A))
      return a ? a(A, 2) : A();
  })) : K(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (p) {
      it();
      try {
        p();
      } finally {
        lt();
      }
    }
    const A = bt;
    bt = f;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      bt = A;
    }
  } : h = Xe, t && r) {
    const A = h, j = r === !0 ? 1 / 0 : r;
    h = () => ot(A(), j);
  }
  const L = gi(), H = () => {
    f.stop(), L && L.active && ms(L.effects, f);
  };
  if (o && t) {
    const A = t;
    t = (...j) => {
      A(...j), H();
    };
  }
  let N = R ? new Array(e.length).fill(fn) : fn;
  const P = (A) => {
    if (!(!(f.flags & 1) || !f.dirty && !A))
      if (t) {
        const j = f.run();
        if (r || O || (R ? j.some((U, J) => ht(U, N[J])) : ht(j, N))) {
          p && p();
          const U = bt;
          bt = f;
          try {
            const J = [
              j,
              // pass undefined as the old value when it's changed for the first time
              N === fn ? void 0 : R && N[0] === fn ? [] : N,
              m
            ];
            N = j, a ? a(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            bt = U;
          }
        }
      } else
        f.run();
  };
  return l && l(P), f = new Vr(h), f.scheduler = i ? () => i(P, !1) : P, m = (A) => Wi(A, !1, f), p = f.onStop = () => {
    const A = bn.get(f);
    if (A) {
      if (a)
        a(A, 4);
      else
        for (const j of A) j();
      bn.delete(f);
    }
  }, t ? s ? P(!0) : N = f.run() : i ? i(P.bind(null, !0), !0) : f.run(), H.pause = f.pause.bind(f), H.resume = f.resume.bind(f), H.stop = H, H;
}
function ot(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, de(e))
    ot(e.value, t, n);
  else if ($(e))
    for (let s = 0; s < e.length; s++)
      ot(e[s], t, n);
  else if (Pr(e) || Rt(e))
    e.forEach((s) => {
      ot(s, t, n);
    });
  else if (Cn(e)) {
    for (const s in e)
      ot(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function on(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Pn(r, t, n);
  }
}
function Qe(e, t, n, s) {
  if (K(e)) {
    const r = on(e, t, n, s);
    return r && Dr(r) && r.catch((o) => {
      Pn(o, t, n);
    }), r;
  }
  if ($(e)) {
    const r = [];
    for (let o = 0; o < e.length; o++)
      r.push(Qe(e[o], t, n, s));
    return r;
  }
}
function Pn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let h = 0; h < f.length; h++)
          if (f[h](e, a, c) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      it(), on(o, null, 10, [
        e,
        a,
        c
      ]), lt();
      return;
    }
  }
  Yi(e, n, r, s, i);
}
function Yi(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const Ee = [];
let Ge = -1;
const Pt = [];
let ft = null, St = 0;
const eo = /* @__PURE__ */ Promise.resolve();
let vn = null;
function tt(e) {
  const t = vn || eo;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Gi(e) {
  let t = Ge + 1, n = Ee.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = Ee[s], o = zt(r);
    o < e || o === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Is(e) {
  if (!(e.flags & 1)) {
    const t = zt(e), n = Ee[Ee.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= zt(n) ? Ee.push(e) : Ee.splice(Gi(t), 0, e), e.flags |= 1, to();
  }
}
function to() {
  vn || (vn = eo.then(so));
}
function qi(e) {
  $(e) ? Pt.push(...e) : ft && e.id === -1 ? ft.splice(St + 1, 0, e) : e.flags & 1 || (Pt.push(e), e.flags |= 1), to();
}
function Js(e, t, n = Ge + 1) {
  for (; n < Ee.length; n++) {
    const s = Ee[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Ee.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function no(e) {
  if (Pt.length) {
    const t = [...new Set(Pt)].sort(
      (n, s) => zt(n) - zt(s)
    );
    if (Pt.length = 0, ft) {
      ft.push(...t);
      return;
    }
    for (ft = t, St = 0; St < ft.length; St++) {
      const n = ft[St];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ft = null, St = 0;
  }
}
const zt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function so(e) {
  try {
    for (Ge = 0; Ge < Ee.length; Ge++) {
      const t = Ee[Ge];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), on(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ge < Ee.length; Ge++) {
      const t = Ee[Ge];
      t && (t.flags &= -2);
    }
    Ge = -1, Ee.length = 0, no(), vn = null, (Ee.length || Pt.length) && so();
  }
}
let Fe = null, ro = null;
function wn(e) {
  const t = Fe;
  return Fe = e, ro = e && e.type.__scopeId || null, t;
}
function zi(e, t = Fe, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && tr(-1);
    const o = wn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      wn(o), s._d && tr(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Xi(e, t) {
  if (Fe === null)
    return e;
  const n = Fn(Fe), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, i, l, a = Q] = t[r];
    o && (K(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && ot(i), s.push({
      dir: o,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function mt(e, t, n, s) {
  const r = e.dirs, o = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    o && (l.oldValue = o[i].value);
    let a = l.dir[s];
    a && (it(), Qe(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), lt());
  }
}
const Zi = Symbol("_vte"), Qi = (e) => e.__isTeleport;
function Ts(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ts(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function io(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Kt(e, t, n, s, r = !1) {
  if ($(e)) {
    e.forEach(
      (O, R) => Kt(
        O,
        t && ($(t) ? t[R] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Wt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Kt(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Fn(s.component) : s.el, i = r ? null : o, { i: l, r: a } = e, c = t && t.r, f = l.refs === Q ? l.refs = {} : l.refs, h = l.setupState, p = q(h), m = h === Q ? () => !1 : (O) => z(p, O);
  if (c != null && c !== a && (le(c) ? (f[c] = null, m(c) && (h[c] = null)) : de(c) && (c.value = null)), K(a))
    on(a, l, 12, [i, f]);
  else {
    const O = le(a), R = de(a);
    if (O || R) {
      const L = () => {
        if (e.f) {
          const H = O ? m(a) ? h[a] : f[a] : a.value;
          r ? $(H) && ms(H, o) : $(H) ? H.includes(o) || H.push(o) : O ? (f[a] = [o], m(a) && (h[a] = f[a])) : (a.value = [o], e.k && (f[e.k] = a.value));
        } else O ? (f[a] = i, m(a) && (h[a] = i)) : R && (a.value = i, e.k && (f[e.k] = i));
      };
      i ? (L.id = -1, Ne(L, n)) : L();
    }
  }
}
Rn().requestIdleCallback;
Rn().cancelIdleCallback;
const Wt = (e) => !!e.type.__asyncLoader, lo = (e) => e.type.__isKeepAlive;
function el(e, t) {
  ao(e, "a", t);
}
function tl(e, t) {
  ao(e, "da", t);
}
function ao(e, t, n = xe) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Dn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      lo(r.parent.vnode) && nl(s, t, n, r), r = r.parent;
  }
}
function nl(e, t, n, s) {
  const r = Dn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  As(() => {
    ms(s[t], r);
  }, n);
}
function Dn(e, t, n = xe, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      it();
      const l = ln(n), a = Qe(t, n, e, i);
      return l(), lt(), a;
    });
    return s ? r.unshift(o) : r.push(o), o;
  }
}
const ct = (e) => (t, n = xe) => {
  (!Zt || e === "sp") && Dn(e, (...s) => t(...s), n);
}, sl = ct("bm"), Cs = ct("m"), rl = ct(
  "bu"
), ol = ct("u"), il = ct(
  "bum"
), As = ct("um"), ll = ct(
  "sp"
), al = ct("rtg"), cl = ct("rtc");
function ul(e, t = xe) {
  Dn("ec", e, t);
}
const fl = Symbol.for("v-ndc");
function dl(e, t, n, s) {
  let r;
  const o = n, i = $(e);
  if (i || le(e)) {
    const l = i && Nt(e);
    let a = !1, c = !1;
    l && (a = !je(e), c = at(e), e = Nn(e)), r = new Array(e.length);
    for (let f = 0, h = e.length; f < h; f++)
      r[f] = t(
        a ? c ? yn(pe(e[f])) : pe(e[f]) : e[f],
        f,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, o);
  } else if (re(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, o)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, c = l.length; a < c; a++) {
        const f = l[a];
        r[a] = t(e[f], f, a, o);
      }
    }
  else
    r = [];
  return r;
}
const ss = (e) => e ? No(e) ? Fn(e) : ss(e.parent) : null, Jt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ss(e.parent),
    $root: (e) => ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => uo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Is(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = tt.bind(e.proxy)),
    $watch: (e) => Ml.bind(e)
  })
), Hn = (e, t) => e !== Q && !e.__isScriptSetup && z(e, t), hl = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: o, accessCache: i, type: l, appContext: a } = e;
    let c;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Hn(s, t))
          return i[t] = 1, s[t];
        if (r !== Q && z(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (c = e.propsOptions[0]) && z(c, t)
        )
          return i[t] = 3, o[t];
        if (n !== Q && z(n, t))
          return i[t] = 4, n[t];
        rs && (i[t] = 0);
      }
    }
    const f = Jt[t];
    let h, p;
    if (f)
      return t === "$attrs" && ye(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (h = l.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== Q && z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, z(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: o } = e;
    return Hn(r, t) ? (r[t] = n, !0) : s !== Q && z(s, t) ? (s[t] = n, !0) : z(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== Q && z(e, i) || Hn(t, i) || (l = o[0]) && z(l, i) || z(s, i) || z(Jt, i) || z(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ys(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let rs = !0;
function pl(e) {
  const t = uo(e), n = e.proxy, s = e.ctx;
  rs = !1, t.beforeCreate && Gs(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: o,
    methods: i,
    watch: l,
    provide: a,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: O,
    activated: R,
    deactivated: L,
    beforeDestroy: H,
    beforeUnmount: N,
    destroyed: P,
    unmounted: A,
    render: j,
    renderTracked: U,
    renderTriggered: J,
    errorCaptured: E,
    serverPrefetch: V,
    // public API
    expose: D,
    inheritAttrs: X,
    // assets
    components: ce,
    directives: se,
    filters: he
  } = t;
  if (c && gl(c, s, null), i)
    for (const G in i) {
      const _ = i[G];
      K(_) && (s[G] = _.bind(n));
    }
  if (r) {
    const G = r.call(n, n);
    re(G) && (e.data = rn(G));
  }
  if (rs = !0, o)
    for (const G in o) {
      const _ = o[G], T = K(_) ? _.bind(n, n) : K(_.get) ? _.get.bind(n, n) : Xe, k = !K(_) && K(_.set) ? _.set.bind(n) : Xe, be = Ps({
        get: T,
        set: k
      });
      Object.defineProperty(s, G, {
        enumerable: !0,
        configurable: !0,
        get: () => be.value,
        set: (ue) => be.value = ue
      });
    }
  if (l)
    for (const G in l)
      co(l[G], s, n, G);
  if (a) {
    const G = K(a) ? a.call(n) : a;
    Reflect.ownKeys(G).forEach((_) => {
      wl(_, G[_]);
    });
  }
  f && Gs(f, e, "c");
  function oe(G, _) {
    $(_) ? _.forEach((T) => G(T.bind(n))) : _ && G(_.bind(n));
  }
  if (oe(sl, h), oe(Cs, p), oe(rl, m), oe(ol, O), oe(el, R), oe(tl, L), oe(ul, E), oe(cl, U), oe(al, J), oe(il, N), oe(As, A), oe(ll, V), $(D))
    if (D.length) {
      const G = e.exposed || (e.exposed = {});
      D.forEach((_) => {
        Object.defineProperty(G, _, {
          get: () => n[_],
          set: (T) => n[_] = T,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  j && e.render === Xe && (e.render = j), X != null && (e.inheritAttrs = X), ce && (e.components = ce), se && (e.directives = se), V && io(e);
}
function gl(e, t, n = Xe) {
  $(e) && (e = os(e));
  for (const s in e) {
    const r = e[s];
    let o;
    re(r) ? "default" in r ? o = pn(
      r.from || s,
      r.default,
      !0
    ) : o = pn(r.from || s) : o = pn(r), de(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (i) => o.value = i
    }) : t[s] = o;
  }
}
function Gs(e, t, n) {
  Qe(
    $(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function co(e, t, n, s) {
  let r = s.includes(".") ? So(n, s) : () => n[s];
  if (le(e)) {
    const o = t[e];
    K(o) && $e(r, o);
  } else if (K(e))
    $e(r, e.bind(n));
  else if (re(e))
    if ($(e))
      e.forEach((o) => co(o, t, n, s));
    else {
      const o = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(o) && $e(r, o, e);
    }
}
function uo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (c) => En(a, c, i, !0)
  ), En(a, t, i)), re(t) && o.set(t, a), a;
}
function En(e, t, n, s = !1) {
  const { mixins: r, extends: o } = t;
  o && En(e, o, n, !0), r && r.forEach(
    (i) => En(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const l = ml[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ml = {
  data: qs,
  props: zs,
  emits: zs,
  // objects
  methods: Vt,
  computed: Vt,
  // lifecycle
  beforeCreate: ve,
  created: ve,
  beforeMount: ve,
  mounted: ve,
  beforeUpdate: ve,
  updated: ve,
  beforeDestroy: ve,
  beforeUnmount: ve,
  destroyed: ve,
  unmounted: ve,
  activated: ve,
  deactivated: ve,
  errorCaptured: ve,
  serverPrefetch: ve,
  // assets
  components: Vt,
  directives: Vt,
  // watch
  watch: yl,
  // provide / inject
  provide: qs,
  inject: _l
};
function qs(e, t) {
  return t ? e ? function() {
    return ae(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function _l(e, t) {
  return Vt(os(e), os(t));
}
function os(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Vt(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zs(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Ys(e),
    Ys(t != null ? t : {})
  ) : t;
}
function yl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ve(e[s], t[s]);
  return n;
}
function fo() {
  return {
    app: null,
    config: {
      isNativeTag: si,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let bl = 0;
function vl(e, t) {
  return function(s, r = null) {
    K(s) || (s = ae({}, s)), r != null && !re(r) && (r = null);
    const o = fo(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const c = o.app = {
      _uid: bl++,
      _component: s,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: ta,
      get config() {
        return o.config;
      },
      set config(f) {
      },
      use(f, ...h) {
        return i.has(f) || (f && K(f.install) ? (i.add(f), f.install(c, ...h)) : K(f) && (i.add(f), f(c, ...h))), c;
      },
      mixin(f) {
        return o.mixins.includes(f) || o.mixins.push(f), c;
      },
      component(f, h) {
        return h ? (o.components[f] = h, c) : o.components[f];
      },
      directive(f, h) {
        return h ? (o.directives[f] = h, c) : o.directives[f];
      },
      mount(f, h, p) {
        if (!a) {
          const m = c._ceVNode || Ze(s, r);
          return m.appContext = o, p === !0 ? p = "svg" : p === !1 && (p = void 0), e(m, f, p), a = !0, c._container = f, f.__vue_app__ = c, Fn(m.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        a && (Qe(
          l,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, h) {
        return o.provides[f] = h, c;
      },
      runWithContext(f) {
        const h = Dt;
        Dt = c;
        try {
          return f();
        } finally {
          Dt = h;
        }
      }
    };
    return c;
  };
}
let Dt = null;
function wl(e, t) {
  if (xe) {
    let n = xe.provides;
    const s = xe.parent && xe.parent.provides;
    s === n && (n = xe.provides = Object.create(s)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const s = Oo();
  if (s || Dt) {
    let r = Dt ? Dt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(s && s.proxy) : t;
  }
}
const ho = {}, po = () => Object.create(ho), go = (e) => Object.getPrototypeOf(e) === ho;
function El(e, t, n, s = !1) {
  const r = {}, o = po();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mo(e, t, r, o);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  n ? e.props = s ? r : ki(r) : e.type.props ? e.props = r : e.props = o, e.attrs = o;
}
function xl(e, t, n, s) {
  const {
    props: r,
    attrs: o,
    vnode: { patchFlag: i }
  } = e, l = q(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const f = e.vnode.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        let p = f[h];
        if (Mn(e.emitsOptions, p))
          continue;
        const m = t[p];
        if (a)
          if (z(o, p))
            m !== o[p] && (o[p] = m, c = !0);
          else {
            const O = Be(p);
            r[O] = is(
              a,
              l,
              O,
              m,
              e,
              !1
            );
          }
        else
          m !== o[p] && (o[p] = m, c = !0);
      }
    }
  } else {
    mo(e, t, r, o) && (c = !0);
    let f;
    for (const h in l)
      (!t || // for camelCase
      !z(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = De(h)) === h || !z(t, f))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[f] !== void 0) && (r[h] = is(
        a,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (o !== l)
      for (const h in o)
        (!t || !z(t, h)) && (delete o[h], c = !0);
  }
  c && rt(e.attrs, "set", "");
}
function mo(e, t, n, s) {
  const [r, o] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if ($t(a))
        continue;
      const c = t[a];
      let f;
      r && z(r, f = Be(a)) ? !o || !o.includes(f) ? n[f] = c : (l || (l = {}))[f] = c : Mn(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
    }
  if (o) {
    const a = q(n), c = l || Q;
    for (let f = 0; f < o.length; f++) {
      const h = o[f];
      n[h] = is(
        r,
        a,
        h,
        c[h],
        e,
        !z(c, h)
      );
    }
  }
  return i;
}
function is(e, t, n, s, r, o) {
  const i = e[n];
  if (i != null) {
    const l = z(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && K(a)) {
        const { propsDefaults: c } = r;
        if (n in c)
          s = c[n];
        else {
          const f = ln(r);
          s = c[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === De(n)) && (s = !0));
  }
  return s;
}
const Sl = /* @__PURE__ */ new WeakMap();
function _o(e, t, n = !1) {
  const s = n ? Sl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const o = e.props, i = {}, l = [];
  let a = !1;
  if (!K(e)) {
    const f = (h) => {
      a = !0;
      const [p, m] = _o(h, t, !0);
      ae(i, p), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!o && !a)
    return re(e) && s.set(e, At), At;
  if ($(o))
    for (let f = 0; f < o.length; f++) {
      const h = Be(o[f]);
      Xs(h) && (i[h] = Q);
    }
  else if (o)
    for (const f in o) {
      const h = Be(f);
      if (Xs(h)) {
        const p = o[f], m = i[h] = $(p) || K(p) ? { type: p } : ae({}, p), O = m.type;
        let R = !1, L = !0;
        if ($(O))
          for (let H = 0; H < O.length; ++H) {
            const N = O[H], P = K(N) && N.name;
            if (P === "Boolean") {
              R = !0;
              break;
            } else P === "String" && (L = !1);
          }
        else
          R = K(O) && O.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = R, m[
          1
          /* shouldCastTrue */
        ] = L, (R || z(m, "default")) && l.push(h);
      }
    }
  const c = [i, l];
  return re(e) && s.set(e, c), c;
}
function Xs(e) {
  return e[0] !== "$" && !$t(e);
}
const Rs = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Os = (e) => $(e) ? e.map(ze) : [ze(e)], Il = (e, t, n) => {
  if (t._n)
    return t;
  const s = zi((...r) => Os(t(...r)), n);
  return s._c = !1, s;
}, yo = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (Rs(r)) continue;
    const o = e[r];
    if (K(o))
      t[r] = Il(r, o, s);
    else if (o != null) {
      const i = Os(o);
      t[r] = () => i;
    }
  }
}, bo = (e, t) => {
  const n = Os(t);
  e.slots.default = () => n;
}, vo = (e, t, n) => {
  for (const s in t)
    (n || !Rs(s)) && (e[s] = t[s]);
}, Tl = (e, t, n) => {
  const s = e.slots = po();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && Xn(s, "__", r, !0);
    const o = t._;
    o ? (vo(s, t, n), n && Xn(s, "_", o, !0)) : yo(t, s);
  } else t && bo(e, t);
}, Cl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let o = !0, i = Q;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? o = !1 : vo(r, t, n) : (o = !t.$stable, yo(t, r)), i = t;
  } else t && (bo(e, t), i = { default: 1 });
  if (o)
    for (const l in r)
      !Rs(l) && i[l] == null && delete r[l];
}, Ne = Bl;
function Al(e) {
  return Rl(e);
}
function Rl(e, t) {
  const n = Rn();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: o,
    createElement: i,
    createText: l,
    createComment: a,
    setText: c,
    setElementText: f,
    parentNode: h,
    nextSibling: p,
    setScopeId: m = Xe,
    insertStaticContent: O
  } = e, R = (u, d, g, w = null, y = null, b = null, I = void 0, S = null, x = !!d.dynamicChildren) => {
    if (u === d)
      return;
    u && !Lt(u, d) && (w = Re(u), ue(u, y, b, !0), u = null), d.patchFlag === -2 && (x = !1, d.dynamicChildren = null);
    const { type: v, ref: M, shapeFlag: C } = d;
    switch (v) {
      case kn:
        L(u, d, g, w);
        break;
      case pt:
        H(u, d, g, w);
        break;
      case Kn:
        u == null && N(d, g, w, I);
        break;
      case qe:
        ce(
          u,
          d,
          g,
          w,
          y,
          b,
          I,
          S,
          x
        );
        break;
      default:
        C & 1 ? j(
          u,
          d,
          g,
          w,
          y,
          b,
          I,
          S,
          x
        ) : C & 6 ? se(
          u,
          d,
          g,
          w,
          y,
          b,
          I,
          S,
          x
        ) : (C & 64 || C & 128) && v.process(
          u,
          d,
          g,
          w,
          y,
          b,
          I,
          S,
          x,
          Ue
        );
    }
    M != null && y ? Kt(M, u && u.ref, b, d || u, !d) : M == null && u && u.ref != null && Kt(u.ref, null, b, u, !0);
  }, L = (u, d, g, w) => {
    if (u == null)
      s(
        d.el = l(d.children),
        g,
        w
      );
    else {
      const y = d.el = u.el;
      d.children !== u.children && c(y, d.children);
    }
  }, H = (u, d, g, w) => {
    u == null ? s(
      d.el = a(d.children || ""),
      g,
      w
    ) : d.el = u.el;
  }, N = (u, d, g, w) => {
    [u.el, u.anchor] = O(
      u.children,
      d,
      g,
      w,
      u.el,
      u.anchor
    );
  }, P = ({ el: u, anchor: d }, g, w) => {
    let y;
    for (; u && u !== d; )
      y = p(u), s(u, g, w), u = y;
    s(d, g, w);
  }, A = ({ el: u, anchor: d }) => {
    let g;
    for (; u && u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, j = (u, d, g, w, y, b, I, S, x) => {
    d.type === "svg" ? I = "svg" : d.type === "math" && (I = "mathml"), u == null ? U(
      d,
      g,
      w,
      y,
      b,
      I,
      S,
      x
    ) : V(
      u,
      d,
      y,
      b,
      I,
      S,
      x
    );
  }, U = (u, d, g, w, y, b, I, S) => {
    let x, v;
    const { props: M, shapeFlag: C, transition: F, dirs: B } = u;
    if (x = u.el = i(
      u.type,
      b,
      M && M.is,
      M
    ), C & 8 ? f(x, u.children) : C & 16 && E(
      u.children,
      x,
      null,
      w,
      y,
      Un(u, b),
      I,
      S
    ), B && mt(u, null, w, "created"), J(x, u, u.scopeId, I, w), M) {
      for (const ee in M)
        ee !== "value" && !$t(ee) && o(x, ee, null, M[ee], b, w);
      "value" in M && o(x, "value", null, M.value, b), (v = M.onVnodeBeforeMount) && Ye(v, w, u);
    }
    B && mt(u, null, w, "beforeMount");
    const Y = Ol(y, F);
    Y && F.beforeEnter(x), s(x, d, g), ((v = M && M.onVnodeMounted) || Y || B) && Ne(() => {
      v && Ye(v, w, u), Y && F.enter(x), B && mt(u, null, w, "mounted");
    }, y);
  }, J = (u, d, g, w, y) => {
    if (g && m(u, g), w)
      for (let b = 0; b < w.length; b++)
        m(u, w[b]);
    if (y) {
      let b = y.subTree;
      if (d === b || To(b.type) && (b.ssContent === d || b.ssFallback === d)) {
        const I = y.vnode;
        J(
          u,
          I,
          I.scopeId,
          I.slotScopeIds,
          y.parent
        );
      }
    }
  }, E = (u, d, g, w, y, b, I, S, x = 0) => {
    for (let v = x; v < u.length; v++) {
      const M = u[v] = S ? dt(u[v]) : ze(u[v]);
      R(
        null,
        M,
        d,
        g,
        w,
        y,
        b,
        I,
        S
      );
    }
  }, V = (u, d, g, w, y, b, I) => {
    const S = d.el = u.el;
    let { patchFlag: x, dynamicChildren: v, dirs: M } = d;
    x |= u.patchFlag & 16;
    const C = u.props || Q, F = d.props || Q;
    let B;
    if (g && _t(g, !1), (B = F.onVnodeBeforeUpdate) && Ye(B, g, d, u), M && mt(d, u, g, "beforeUpdate"), g && _t(g, !0), (C.innerHTML && F.innerHTML == null || C.textContent && F.textContent == null) && f(S, ""), v ? D(
      u.dynamicChildren,
      v,
      S,
      g,
      w,
      Un(d, y),
      b
    ) : I || _(
      u,
      d,
      S,
      null,
      g,
      w,
      Un(d, y),
      b,
      !1
    ), x > 0) {
      if (x & 16)
        X(S, C, F, g, y);
      else if (x & 2 && C.class !== F.class && o(S, "class", null, F.class, y), x & 4 && o(S, "style", C.style, F.style, y), x & 8) {
        const Y = d.dynamicProps;
        for (let ee = 0; ee < Y.length; ee++) {
          const Z = Y[ee], Se = C[Z], Ie = F[Z];
          (Ie !== Se || Z === "value") && o(S, Z, Se, Ie, y, g);
        }
      }
      x & 1 && u.children !== d.children && f(S, d.children);
    } else !I && v == null && X(S, C, F, g, y);
    ((B = F.onVnodeUpdated) || M) && Ne(() => {
      B && Ye(B, g, d, u), M && mt(d, u, g, "updated");
    }, w);
  }, D = (u, d, g, w, y, b, I) => {
    for (let S = 0; S < d.length; S++) {
      const x = u[S], v = d[S], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(x, v) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? h(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      R(
        x,
        v,
        M,
        null,
        w,
        y,
        b,
        I,
        !0
      );
    }
  }, X = (u, d, g, w, y) => {
    if (d !== g) {
      if (d !== Q)
        for (const b in d)
          !$t(b) && !(b in g) && o(
            u,
            b,
            d[b],
            null,
            y,
            w
          );
      for (const b in g) {
        if ($t(b)) continue;
        const I = g[b], S = d[b];
        I !== S && b !== "value" && o(u, b, S, I, y, w);
      }
      "value" in g && o(u, "value", d.value, g.value, y);
    }
  }, ce = (u, d, g, w, y, b, I, S, x) => {
    const v = d.el = u ? u.el : l(""), M = d.anchor = u ? u.anchor : l("");
    let { patchFlag: C, dynamicChildren: F, slotScopeIds: B } = d;
    B && (S = S ? S.concat(B) : B), u == null ? (s(v, g, w), s(M, g, w), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      M,
      y,
      b,
      I,
      S,
      x
    )) : C > 0 && C & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    u.dynamicChildren ? (D(
      u.dynamicChildren,
      F,
      g,
      y,
      b,
      I,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (d.key != null || y && d === y.subTree) && wo(
      u,
      d,
      !0
      /* shallow */
    )) : _(
      u,
      d,
      g,
      M,
      y,
      b,
      I,
      S,
      x
    );
  }, se = (u, d, g, w, y, b, I, S, x) => {
    d.slotScopeIds = S, u == null ? d.shapeFlag & 512 ? y.ctx.activate(
      d,
      g,
      w,
      I,
      x
    ) : he(
      d,
      g,
      w,
      y,
      b,
      I,
      x
    ) : Ae(u, d, x);
  }, he = (u, d, g, w, y, b, I) => {
    const S = u.component = ql(
      u,
      w,
      y
    );
    if (lo(u) && (S.ctx.renderer = Ue), zl(S, !1, I), S.asyncDep) {
      if (y && y.registerDep(S, oe, I), !u.el) {
        const x = S.subTree = Ze(pt);
        H(null, x, d, g), u.placeholder = x.el;
      }
    } else
      oe(
        S,
        u,
        d,
        g,
        y,
        b,
        I
      );
  }, Ae = (u, d, g) => {
    const w = d.component = u.component;
    if (Vl(u, d, g))
      if (w.asyncDep && !w.asyncResolved) {
        G(w, d, g);
        return;
      } else
        w.next = d, w.update();
    else
      d.el = u.el, w.vnode = d;
  }, oe = (u, d, g, w, y, b, I) => {
    const S = () => {
      if (u.isMounted) {
        let { next: C, bu: F, u: B, parent: Y, vnode: ee } = u;
        {
          const We = Eo(u);
          if (We) {
            C && (C.el = ee.el, G(u, C, I)), We.asyncDep.then(() => {
              u.isUnmounted || S();
            });
            return;
          }
        }
        let Z = C, Se;
        _t(u, !1), C ? (C.el = ee.el, G(u, C, I)) : C = ee, F && hn(F), (Se = C.props && C.props.onVnodeBeforeUpdate) && Ye(Se, Y, C, ee), _t(u, !0);
        const Ie = Qs(u), Ke = u.subTree;
        u.subTree = Ie, R(
          Ke,
          Ie,
          // parent may have changed if it's in a teleport
          h(Ke.el),
          // anchor may have changed if it's in a fragment
          Re(Ke),
          u,
          y,
          b
        ), C.el = Ie.el, Z === null && $l(u, Ie.el), B && Ne(B, y), (Se = C.props && C.props.onVnodeUpdated) && Ne(
          () => Ye(Se, Y, C, ee),
          y
        );
      } else {
        let C;
        const { el: F, props: B } = d, { bm: Y, m: ee, parent: Z, root: Se, type: Ie } = u, Ke = Wt(d);
        _t(u, !1), Y && hn(Y), !Ke && (C = B && B.onVnodeBeforeMount) && Ye(C, Z, d), _t(u, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie);
          const We = u.subTree = Qs(u);
          R(
            null,
            We,
            g,
            w,
            u,
            y,
            b
          ), d.el = We.el;
        }
        if (ee && Ne(ee, y), !Ke && (C = B && B.onVnodeMounted)) {
          const We = d;
          Ne(
            () => Ye(C, Z, We),
            y
          );
        }
        (d.shapeFlag & 256 || Z && Wt(Z.vnode) && Z.vnode.shapeFlag & 256) && u.a && Ne(u.a, y), u.isMounted = !0, d = g = w = null;
      }
    };
    u.scope.on();
    const x = u.effect = new Vr(S);
    u.scope.off();
    const v = u.update = x.run.bind(x), M = u.job = x.runIfDirty.bind(x);
    M.i = u, M.id = u.uid, x.scheduler = () => Is(M), _t(u, !0), v();
  }, G = (u, d, g) => {
    d.component = u;
    const w = u.vnode.props;
    u.vnode = d, u.next = null, xl(u, d.props, w, g), Cl(u, d.children, g), it(), Js(u), lt();
  }, _ = (u, d, g, w, y, b, I, S, x = !1) => {
    const v = u && u.children, M = u ? u.shapeFlag : 0, C = d.children, { patchFlag: F, shapeFlag: B } = d;
    if (F > 0) {
      if (F & 128) {
        k(
          v,
          C,
          g,
          w,
          y,
          b,
          I,
          S,
          x
        );
        return;
      } else if (F & 256) {
        T(
          v,
          C,
          g,
          w,
          y,
          b,
          I,
          S,
          x
        );
        return;
      }
    }
    B & 8 ? (M & 16 && me(v, y, b), C !== v && f(g, C)) : M & 16 ? B & 16 ? k(
      v,
      C,
      g,
      w,
      y,
      b,
      I,
      S,
      x
    ) : me(v, y, b, !0) : (M & 8 && f(g, ""), B & 16 && E(
      C,
      g,
      w,
      y,
      b,
      I,
      S,
      x
    ));
  }, T = (u, d, g, w, y, b, I, S, x) => {
    u = u || At, d = d || At;
    const v = u.length, M = d.length, C = Math.min(v, M);
    let F;
    for (F = 0; F < C; F++) {
      const B = d[F] = x ? dt(d[F]) : ze(d[F]);
      R(
        u[F],
        B,
        g,
        null,
        y,
        b,
        I,
        S,
        x
      );
    }
    v > M ? me(
      u,
      y,
      b,
      !0,
      !1,
      C
    ) : E(
      d,
      g,
      w,
      y,
      b,
      I,
      S,
      x,
      C
    );
  }, k = (u, d, g, w, y, b, I, S, x) => {
    let v = 0;
    const M = d.length;
    let C = u.length - 1, F = M - 1;
    for (; v <= C && v <= F; ) {
      const B = u[v], Y = d[v] = x ? dt(d[v]) : ze(d[v]);
      if (Lt(B, Y))
        R(
          B,
          Y,
          g,
          null,
          y,
          b,
          I,
          S,
          x
        );
      else
        break;
      v++;
    }
    for (; v <= C && v <= F; ) {
      const B = u[C], Y = d[F] = x ? dt(d[F]) : ze(d[F]);
      if (Lt(B, Y))
        R(
          B,
          Y,
          g,
          null,
          y,
          b,
          I,
          S,
          x
        );
      else
        break;
      C--, F--;
    }
    if (v > C) {
      if (v <= F) {
        const B = F + 1, Y = B < M ? d[B].el : w;
        for (; v <= F; )
          R(
            null,
            d[v] = x ? dt(d[v]) : ze(d[v]),
            g,
            Y,
            y,
            b,
            I,
            S,
            x
          ), v++;
      }
    } else if (v > F)
      for (; v <= C; )
        ue(u[v], y, b, !0), v++;
    else {
      const B = v, Y = v, ee = /* @__PURE__ */ new Map();
      for (v = Y; v <= F; v++) {
        const Oe = d[v] = x ? dt(d[v]) : ze(d[v]);
        Oe.key != null && ee.set(Oe.key, v);
      }
      let Z, Se = 0;
      const Ie = F - Y + 1;
      let Ke = !1, We = 0;
      const Ft = new Array(Ie);
      for (v = 0; v < Ie; v++) Ft[v] = 0;
      for (v = B; v <= C; v++) {
        const Oe = u[v];
        if (Se >= Ie) {
          ue(Oe, y, b, !0);
          continue;
        }
        let Je;
        if (Oe.key != null)
          Je = ee.get(Oe.key);
        else
          for (Z = Y; Z <= F; Z++)
            if (Ft[Z - Y] === 0 && Lt(Oe, d[Z])) {
              Je = Z;
              break;
            }
        Je === void 0 ? ue(Oe, y, b, !0) : (Ft[Je - Y] = v + 1, Je >= We ? We = Je : Ke = !0, R(
          Oe,
          d[Je],
          g,
          null,
          y,
          b,
          I,
          S,
          x
        ), Se++);
      }
      const js = Ke ? Nl(Ft) : At;
      for (Z = js.length - 1, v = Ie - 1; v >= 0; v--) {
        const Oe = Y + v, Je = d[Oe], Ls = d[Oe + 1], Vs = Oe + 1 < M ? (
          // #13559, fallback to el placeholder for unresolved async component
          Ls.el || Ls.placeholder
        ) : w;
        Ft[v] === 0 ? R(
          null,
          Je,
          g,
          Vs,
          y,
          b,
          I,
          S,
          x
        ) : Ke && (Z < 0 || v !== js[Z] ? be(Je, g, Vs, 2) : Z--);
      }
    }
  }, be = (u, d, g, w, y = null) => {
    const { el: b, type: I, transition: S, children: x, shapeFlag: v } = u;
    if (v & 6) {
      be(u.component.subTree, d, g, w);
      return;
    }
    if (v & 128) {
      u.suspense.move(d, g, w);
      return;
    }
    if (v & 64) {
      I.move(u, d, g, Ue);
      return;
    }
    if (I === qe) {
      s(b, d, g);
      for (let C = 0; C < x.length; C++)
        be(x[C], d, g, w);
      s(u.anchor, d, g);
      return;
    }
    if (I === Kn) {
      P(u, d, g);
      return;
    }
    if (w !== 2 && v & 1 && S)
      if (w === 0)
        S.beforeEnter(b), s(b, d, g), Ne(() => S.enter(b), y);
      else {
        const { leave: C, delayLeave: F, afterLeave: B } = S, Y = () => {
          u.ctx.isUnmounted ? r(b) : s(b, d, g);
        }, ee = () => {
          C(b, () => {
            Y(), B && B();
          });
        };
        F ? F(b, Y, ee) : ee();
      }
    else
      s(b, d, g);
  }, ue = (u, d, g, w = !1, y = !1) => {
    const {
      type: b,
      props: I,
      ref: S,
      children: x,
      dynamicChildren: v,
      shapeFlag: M,
      patchFlag: C,
      dirs: F,
      cacheIndex: B
    } = u;
    if (C === -2 && (y = !1), S != null && (it(), Kt(S, null, g, u, !0), lt()), B != null && (d.renderCache[B] = void 0), M & 256) {
      d.ctx.deactivate(u);
      return;
    }
    const Y = M & 1 && F, ee = !Wt(u);
    let Z;
    if (ee && (Z = I && I.onVnodeBeforeUnmount) && Ye(Z, d, u), M & 6)
      ge(u.component, g, w);
    else {
      if (M & 128) {
        u.suspense.unmount(g, w);
        return;
      }
      Y && mt(u, null, d, "beforeUnmount"), M & 64 ? u.type.remove(
        u,
        d,
        g,
        Ue,
        w
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== qe || C > 0 && C & 64) ? me(
        v,
        d,
        g,
        !1,
        !0
      ) : (b === qe && C & 384 || !y && M & 16) && me(x, d, g), w && W(u);
    }
    (ee && (Z = I && I.onVnodeUnmounted) || Y) && Ne(() => {
      Z && Ye(Z, d, u), Y && mt(u, null, d, "unmounted");
    }, g);
  }, W = (u) => {
    const { type: d, el: g, anchor: w, transition: y } = u;
    if (d === qe) {
      ne(g, w);
      return;
    }
    if (d === Kn) {
      A(u);
      return;
    }
    const b = () => {
      r(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (u.shapeFlag & 1 && y && !y.persisted) {
      const { leave: I, delayLeave: S } = y, x = () => I(g, b);
      S ? S(u.el, b, x) : x();
    } else
      b();
  }, ne = (u, d) => {
    let g;
    for (; u !== d; )
      g = p(u), r(u), u = g;
    r(d);
  }, ge = (u, d, g) => {
    const {
      bum: w,
      scope: y,
      job: b,
      subTree: I,
      um: S,
      m: x,
      a: v,
      parent: M,
      slots: { __: C }
    } = u;
    Zs(x), Zs(v), w && hn(w), M && $(C) && C.forEach((F) => {
      M.renderCache[F] = void 0;
    }), y.stop(), b && (b.flags |= 8, ue(I, u, d, g)), S && Ne(S, d), Ne(() => {
      u.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && u.asyncDep && !u.asyncResolved && u.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve());
  }, me = (u, d, g, w = !1, y = !1, b = 0) => {
    for (let I = b; I < u.length; I++)
      ue(u[I], d, g, w, y);
  }, Re = (u) => {
    if (u.shapeFlag & 6)
      return Re(u.component.subTree);
    if (u.shapeFlag & 128)
      return u.suspense.next();
    const d = p(u.anchor || u.el), g = d && d[Zi];
    return g ? p(g) : d;
  };
  let _e = !1;
  const Le = (u, d, g) => {
    u == null ? d._vnode && ue(d._vnode, null, null, !0) : R(
      d._vnode || null,
      u,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = u, _e || (_e = !0, Js(), no(), _e = !1);
  }, Ue = {
    p: R,
    um: ue,
    m: be,
    r: W,
    mt: he,
    mc: E,
    pc: _,
    pbc: D,
    n: Re,
    o: e
  };
  return {
    render: Le,
    hydrate: void 0,
    createApp: vl(Le)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function _t({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ol(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function wo(e, t, n = !1) {
  const s = e.children, r = t.children;
  if ($(s) && $(r))
    for (let o = 0; o < s.length; o++) {
      const i = s[o];
      let l = r[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[o] = dt(r[o]), l.el = i.el), !n && l.patchFlag !== -2 && wo(i, l)), l.type === kn && (l.el = i.el), l.type === pt && !l.el && (l.el = i.el);
    }
}
function Nl(e) {
  const t = e.slice(), n = [0];
  let s, r, o, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (r = n[n.length - 1], e[r] < c) {
        t[s] = r, n.push(s);
        continue;
      }
      for (o = 0, i = n.length - 1; o < i; )
        l = o + i >> 1, e[n[l]] < c ? o = l + 1 : i = l;
      c < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, i = n[o - 1]; o-- > 0; )
    n[o] = i, i = t[i];
  return n;
}
function Eo(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Eo(t);
}
function Zs(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Pl = Symbol.for("v-scx"), Dl = () => pn(Pl);
function $e(e, t, n) {
  return xo(e, t, n);
}
function xo(e, t, n = Q) {
  const { immediate: s, deep: r, flush: o, once: i } = n, l = ae({}, n), a = t && s || !t && o !== "post";
  let c;
  if (Zt) {
    if (o === "sync") {
      const m = Dl();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = Xe, m.resume = Xe, m.pause = Xe, m;
    }
  }
  const f = xe;
  l.call = (m, O, R) => Qe(m, f, O, R);
  let h = !1;
  o === "post" ? l.scheduler = (m) => {
    Ne(m, f && f.suspense);
  } : o !== "sync" && (h = !0, l.scheduler = (m, O) => {
    O ? m() : Is(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, f && (m.id = f.uid, m.i = f));
  };
  const p = Ji(e, t, l);
  return Zt && (c ? c.push(p) : a && p()), p;
}
function Ml(e, t, n) {
  const s = this.proxy, r = le(e) ? e.includes(".") ? So(s, e) : () => s[e] : e.bind(s, s);
  let o;
  K(t) ? o = t : (o = t.handler, n = t);
  const i = ln(this), l = xo(r, o.bind(s), n);
  return i(), l;
}
function So(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const kl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Be(t)}Modifiers`] || e[`${De(t)}Modifiers`];
function Fl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Q;
  let r = n;
  const o = t.startsWith("update:"), i = o && kl(s, t.slice(7));
  i && (i.trim && (r = n.map((f) => le(f) ? f.trim() : f)), i.number && (r = n.map(Zn)));
  let l, a = s[l = jn(t)] || // also try camelCase event handler (#2249)
  s[l = jn(Be(t))];
  !a && o && (a = s[l = jn(De(t))]), a && Qe(
    a,
    e,
    6,
    r
  );
  const c = s[l + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Qe(
      c,
      e,
      6,
      r
    );
  }
}
function Io(e, t, n = !1) {
  const s = t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const o = e.emits;
  let i = {}, l = !1;
  if (!K(e)) {
    const a = (c) => {
      const f = Io(c, t, !0);
      f && (l = !0, ae(i, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !o && !l ? (re(e) && s.set(e, null), null) : ($(o) ? o.forEach((a) => i[a] = null) : ae(i, o), re(e) && s.set(e, i), i);
}
function Mn(e, t) {
  return !e || !In(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, De(t)) || z(e, t));
}
function Qs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [o],
    slots: i,
    attrs: l,
    emit: a,
    render: c,
    renderCache: f,
    props: h,
    data: p,
    setupState: m,
    ctx: O,
    inheritAttrs: R
  } = e, L = wn(e);
  let H, N;
  try {
    if (n.shapeFlag & 4) {
      const A = r || s, j = A;
      H = ze(
        c.call(
          j,
          A,
          f,
          h,
          m,
          p,
          O
        )
      ), N = l;
    } else {
      const A = t;
      H = ze(
        A.length > 1 ? A(
          h,
          { attrs: l, slots: i, emit: a }
        ) : A(
          h,
          null
        )
      ), N = t.props ? l : jl(l);
    }
  } catch (A) {
    Yt.length = 0, Pn(A, e, 1), H = Ze(pt);
  }
  let P = H;
  if (N && R !== !1) {
    const A = Object.keys(N), { shapeFlag: j } = P;
    A.length && j & 7 && (o && A.some(gs) && (N = Ll(
      N,
      o
    )), P = Mt(P, N, !1, !0));
  }
  return n.dirs && (P = Mt(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && Ts(P, n.transition), H = P, wn(L), H;
}
const jl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || In(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ll = (e, t) => {
  const n = {};
  for (const s in e)
    (!gs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Vl(e, t, n) {
  const { props: s, children: r, component: o } = e, { props: i, children: l, patchFlag: a } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? er(s, i, c) : !!i;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let h = 0; h < f.length; h++) {
        const p = f[h];
        if (i[p] !== s[p] && !Mn(c, p))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? er(s, i, c) : !0 : !!i;
  return !1;
}
function er(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const o = s[r];
    if (t[o] !== e[o] && !Mn(n, o))
      return !0;
  }
  return !1;
}
function $l({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const To = (e) => e.__isSuspense;
function Bl(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : qi(e);
}
const qe = Symbol.for("v-fgt"), kn = Symbol.for("v-txt"), pt = Symbol.for("v-cmt"), Kn = Symbol.for("v-stc"), Yt = [];
let Me = null;
function ke(e = !1) {
  Yt.push(Me = e ? null : []);
}
function Hl() {
  Yt.pop(), Me = Yt[Yt.length - 1] || null;
}
let Xt = 1;
function tr(e, t = !1) {
  Xt += e, e < 0 && Me && t && (Me.hasOnce = !0);
}
function Co(e) {
  return e.dynamicChildren = Xt > 0 ? Me || At : null, Hl(), Xt > 0 && Me && Me.push(e), e;
}
function Ve(e, t, n, s, r, o) {
  return Co(
    Pe(
      e,
      t,
      n,
      s,
      r,
      o,
      !0
    )
  );
}
function Ul(e, t, n, s, r) {
  return Co(
    Ze(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function Ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ro = ({ key: e }) => e != null ? e : null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || de(e) || K(e) ? { i: Fe, r: e, k: t, f: !!n } : e : null);
function Pe(e, t = null, n = null, s = 0, r = null, o = e === qe ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ro(t),
    ref: t && gn(t),
    scopeId: ro,
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
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Fe
  };
  return l ? (Ns(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), Xt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Me.push(a), a;
}
const Ze = Kl;
function Kl(e, t = null, n = null, s = 0, r = null, o = !1) {
  if ((!e || e === fl) && (e = pt), Ao(e)) {
    const l = Mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ns(l, n), Xt > 0 && !o && Me && (l.shapeFlag & 6 ? Me[Me.indexOf(e)] = l : Me.push(l)), l.patchFlag = -2, l;
  }
  if (ea(e) && (e = e.__vccOpts), t) {
    t = Wl(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = Ot(l)), re(a) && (Ss(a) && !$(a) && (a = ae({}, a)), t.style = On(a));
  }
  const i = le(e) ? 1 : To(e) ? 128 : Qi(e) ? 64 : re(e) ? 4 : K(e) ? 2 : 0;
  return Pe(
    e,
    t,
    n,
    s,
    r,
    i,
    o,
    !0
  );
}
function Wl(e) {
  return e ? Ss(e) || go(e) ? ae({}, e) : e : null;
}
function Mt(e, t, n = !1, s = !1) {
  const { props: r, ref: o, patchFlag: i, children: l, transition: a } = e, c = t ? Jl(r || {}, t) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ro(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? $(o) ? o.concat(gn(t)) : [o, gn(t)] : gn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== qe ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Mt(e.ssContent),
    ssFallback: e.ssFallback && Mt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Ts(
    f,
    a.clone(f)
  ), f;
}
function ls(e = " ", t = 0) {
  return Ze(kn, null, e, t);
}
function Et(e = "", t = !1) {
  return t ? (ke(), Ul(pt, null, e)) : Ze(pt, null, e);
}
function ze(e) {
  return e == null || typeof e == "boolean" ? Ze(pt) : $(e) ? Ze(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ao(e) ? dt(e) : Ze(kn, null, String(e));
}
function dt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Mt(e);
}
function Ns(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Ns(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !go(t) ? t._ctx = Fe : r === 3 && Fe && (Fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else K(t) ? (t = { default: t, _ctx: Fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ls(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Jl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ot([t.class, s.class]));
      else if (r === "style")
        t.style = On([t.style, s.style]);
      else if (In(r)) {
        const o = t[r], i = s[r];
        i && o !== i && !($(o) && o.includes(i)) && (t[r] = o ? [].concat(o, i) : i);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function Ye(e, t, n, s = null) {
  Qe(e, t, 7, [
    n,
    s
  ]);
}
const Yl = fo();
let Gl = 0;
function ql(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Yl, o = {
    uid: Gl++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new pi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: _o(s, r),
    emitsOptions: Io(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Fl.bind(null, o), e.ce && e.ce(o), o;
}
let xe = null;
const Oo = () => xe || Fe;
let xn, as;
{
  const e = Rn(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (o) => {
      r.length > 1 ? r.forEach((i) => i(o)) : r[0](o);
    };
  };
  xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xe = n
  ), as = t(
    "__VUE_SSR_SETTERS__",
    (n) => Zt = n
  );
}
const ln = (e) => {
  const t = xe;
  return xn(e), e.scope.on(), () => {
    e.scope.off(), xn(t);
  };
}, nr = () => {
  xe && xe.scope.off(), xn(null);
};
function No(e) {
  return e.vnode.shapeFlag & 4;
}
let Zt = !1;
function zl(e, t = !1, n = !1) {
  t && as(t);
  const { props: s, children: r } = e.vnode, o = No(e);
  El(e, s, o, t), Tl(e, r, n || t);
  const i = o ? Xl(e, t) : void 0;
  return t && as(!1), i;
}
function Xl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hl);
  const { setup: s } = n;
  if (s) {
    it();
    const r = e.setupContext = s.length > 1 ? Ql(e) : null, o = ln(e), i = on(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Dr(i);
    if (lt(), o(), (l || e.sp) && !Wt(e) && io(e), l) {
      if (i.then(nr, nr), t)
        return i.then((a) => {
          sr(e, a);
        }).catch((a) => {
          Pn(a, e, 0);
        });
      e.asyncDep = i;
    } else
      sr(e, i);
  } else
    Po(e);
}
function sr(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) && (e.setupState = Qr(t)), Po(e);
}
function Po(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Xe);
  {
    const r = ln(e);
    it();
    try {
      pl(e);
    } finally {
      lt(), r();
    }
  }
}
const Zl = {
  get(e, t) {
    return ye(e, "get", ""), e[t];
  }
};
function Ql(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Zl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Fn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qr(Fi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Jt)
        return Jt[n](e);
    },
    has(t, n) {
      return n in t || n in Jt;
    }
  })) : e.proxy;
}
function ea(e) {
  return K(e) && "__vccOpts" in e;
}
const Ps = (e, t) => Ki(e, t, Zt), ta = "3.5.18";
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cs;
const rr = typeof window != "undefined" && window.trustedTypes;
if (rr)
  try {
    cs = /* @__PURE__ */ rr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
  }
const Do = cs ? (e) => cs.createHTML(e) : (e) => e, na = "http://www.w3.org/2000/svg", sa = "http://www.w3.org/1998/Math/MathML", nt = typeof document != "undefined" ? document : null, or = nt && /* @__PURE__ */ nt.createElement("template"), ra = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? nt.createElementNS(na, e) : t === "mathml" ? nt.createElementNS(sa, e) : n ? nt.createElement(e, { is: n }) : nt.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => nt.createTextNode(e),
  createComment: (e) => nt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => nt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, o) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === o || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === o || !(r = r.nextSibling)); )
        ;
    else {
      or.innerHTML = Do(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = or.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, oa = Symbol("_vtc");
function ia(e, t, n) {
  const s = e[oa];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ir = Symbol("_vod"), la = Symbol("_vsh"), aa = Symbol(""), ca = /(^|;)\s*display\s*:/;
function ua(e, t, n) {
  const s = e.style, r = le(n);
  let o = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && mn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && mn(s, i, "");
    for (const i in n)
      i === "display" && (o = !0), mn(s, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = s[aa];
      i && (n += ";" + i), s.cssText = n, o = ca.test(n);
    }
  } else t && e.removeAttribute("style");
  ir in e && (e[ir] = o ? s.display : "", e[la] && (s.display = "none"));
}
const lr = /\s*!important$/;
function mn(e, t, n) {
  if ($(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = fa(e, t);
    lr.test(n) ? e.setProperty(
      De(s),
      n.replace(lr, ""),
      "important"
    ) : e[s] = n;
  }
}
const ar = ["Webkit", "Moz", "ms"], Wn = {};
function fa(e, t) {
  const n = Wn[t];
  if (n)
    return n;
  let s = Be(t);
  if (s !== "filter" && s in e)
    return Wn[t] = s;
  s = kr(s);
  for (let r = 0; r < ar.length; r++) {
    const o = ar[r] + s;
    if (o in e)
      return Wn[t] = o;
  }
  return t;
}
const cr = "http://www.w3.org/1999/xlink";
function ur(e, t, n, s, r, o = hi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(cr, t.slice(6, t.length)) : e.setAttributeNS(cr, t, n) : n == null || o && !Fr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : gt(n) ? String(n) : n
  );
}
function fr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Do(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Fr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
  }
  i && e.removeAttribute(r || t);
}
function It(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function da(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const dr = Symbol("_vei");
function ha(e, t, n, s, r = null) {
  const o = e[dr] || (e[dr] = {}), i = o[t];
  if (s && i)
    i.value = s;
  else {
    const [l, a] = pa(t);
    if (s) {
      const c = o[t] = _a(
        s,
        r
      );
      It(e, l, c, a);
    } else i && (da(e, l, i, a), o[t] = void 0);
  }
}
const hr = /(?:Once|Passive|Capture)$/;
function pa(e) {
  let t;
  if (hr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(hr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : De(e.slice(2)), t];
}
let Jn = 0;
const ga = /* @__PURE__ */ Promise.resolve(), ma = () => Jn || (ga.then(() => Jn = 0), Jn = Date.now());
function _a(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Qe(
      ya(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ma(), n;
}
function ya(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const pr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ba = (e, t, n, s, r, o) => {
  const i = r === "svg";
  t === "class" ? ia(e, s, i) : t === "style" ? ua(e, n, s) : In(t) ? gs(t) || ha(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : va(e, t, s, i)) ? (fr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ur(e, t, s, i, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(s)) ? fr(e, Be(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ur(e, t, s, i));
};
function va(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && pr(t) && K(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return pr(t) && le(n) ? !1 : t in e;
}
const gr = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wa(e, t, n) {
  const s = /* @__PURE__ */ oo(e, t);
  Cn(s) && ae(s, t);
  class r extends Ds {
    constructor(i) {
      super(s, i, n);
    }
  }
  return r.def = s, r;
}
const Ea = typeof HTMLElement != "undefined" ? HTMLElement : class {
};
class Ds extends Ea {
  constructor(t, n = {}, s = vr) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== vr ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ds) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, tt(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const r of s)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: i } = s;
      let l;
      if (o && !$(o))
        for (const a in o) {
          const c = o[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = Hs(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Be(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot && this._applyStyles(i), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        z(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Te(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = $(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r]);
    for (const r of s.map(Be))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(o) {
          this._setProp(r, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : gr;
    const r = Be(t);
    n && this._numberProps && this._numberProps[r] && (s = Hs(s)), this._setProp(r, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, r = !1) {
    if (n !== this._props[t] && (n === gr ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), s)) {
      const o = this._ob;
      o && o.disconnect(), n === !0 ? this.setAttribute(De(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(De(t), n + "") : n || this.removeAttribute(De(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Oa(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Ze(this._def, ae(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const r = (o, i) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            Cn(i[0]) ? ae({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      s.emit = (o, ...i) => {
        r(o, i), De(o) !== o && r(De(o), i);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const o = document.createElement("style");
      s && o.setAttribute("nonce", s), o.textContent = t[r], this.shadowRoot.prepend(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const r = t[s], o = r.getAttribute("name") || "default", i = this._slots[o], l = r.parentNode;
      if (i)
        for (const a of i) {
          if (n && a.nodeType === 1) {
            const c = n + "-s", f = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let h;
            for (; h = f.nextNode(); )
              h.setAttribute(c, "");
          }
          l.insertBefore(a, r);
        }
      else
        for (; r.firstChild; ) l.insertBefore(r.firstChild, r);
      l.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
const mr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return $(t) ? (n) => hn(t, n) : t;
};
function xa(e) {
  e.target.composing = !0;
}
function _r(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Yn = Symbol("_assign"), Sa = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[Yn] = mr(r);
    const o = s || r.props && r.props.type === "number";
    It(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), o && (l = Zn(l)), e[Yn](l);
    }), n && It(e, "change", () => {
      e.value = e.value.trim();
    }), t || (It(e, "compositionstart", xa), It(e, "compositionend", _r), It(e, "change", _r));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t == null ? "" : t;
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: o } }, i) {
    if (e[Yn] = mr(i), e.composing) return;
    const l = (o || e.type === "number") && !/^0\d/.test(e.value) ? Zn(e.value) : e.value, a = t == null ? "" : t;
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, Ia = ["ctrl", "shift", "alt", "meta"], Ta = {
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
  exact: (e, t) => Ia.some((n) => e[`${n}Key`] && !t.includes(n))
}, yr = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (r, ...o) => {
    for (let i = 0; i < t.length; i++) {
      const l = Ta[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...o);
  });
}, Ca = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Aa = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (r) => {
    if (!("key" in r))
      return;
    const o = De(r.key);
    if (t.some(
      (i) => i === o || Ca[i] === o
    ))
      return e(r);
  });
}, Ra = /* @__PURE__ */ ae({ patchProp: ba }, ra);
let br;
function Mo() {
  return br || (br = Al(Ra));
}
const Oa = (...e) => {
  Mo().render(...e);
}, vr = (...e) => {
  const t = Mo().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Pa(s);
    if (!r) return;
    const o = t._component;
    !K(o) && !o.render && !o.template && (o.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, Na(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
  }, t;
};
function Na(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pa(e) {
  return le(e) ? document.querySelector(e) : e;
}
var ko = "vercel.ai.error", Da = Symbol.for(ko), Fo, Ma = class jo extends Error {
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
    cause: s
  }) {
    super(n), this[Fo] = !0, this.name = t, this.cause = s;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return jo.hasMarker(t, ko);
  }
  static hasMarker(t, n) {
    const s = Symbol.for(n);
    return t != null && typeof t == "object" && s in t && typeof t[s] == "boolean" && t[s] === !0;
  }
};
Fo = Da;
var kt = Ma;
function Lo(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Vo = "AI_InvalidArgumentError", $o = `vercel.ai.error.${Vo}`, ka = Symbol.for($o), Bo, Fa = class extends kt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Vo, message: e, cause: t }), this[Bo] = !0, this.argument = n;
  }
  static isInstance(e) {
    return kt.hasMarker(e, $o);
  }
};
Bo = ka;
var Ho = "AI_JSONParseError", Uo = `vercel.ai.error.${Ho}`, ja = Symbol.for(Uo), Ko, wr = class extends kt {
  constructor({ text: e, cause: t }) {
    super({
      name: Ho,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Lo(t)}`,
      cause: t
    }), this[Ko] = !0, this.text = e;
  }
  static isInstance(e) {
    return kt.hasMarker(e, Uo);
  }
};
Ko = ja;
var Wo = "AI_TypeValidationError", Jo = `vercel.ai.error.${Wo}`, La = Symbol.for(Jo), Yo, Va = class us extends kt {
  constructor({ value: t, cause: n }) {
    super({
      name: Wo,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Lo(n)}`,
      cause: n
    }), this[Yo] = !0, this.value = t;
  }
  static isInstance(t) {
    return kt.hasMarker(t, Jo);
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
    return us.isInstance(n) && n.value === t ? n : new us({ value: t, cause: n });
  }
};
Yo = La;
var Er = Va;
let $a = (e, t = 21) => (n = t) => {
  let s = "", r = n | 0;
  for (; r--; )
    s += e[Math.random() * e.length | 0];
  return s;
};
function Ba(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yt = { exports: {} }, xr;
function Ha() {
  if (xr) return yt.exports;
  xr = 1;
  const e = typeof Buffer != "undefined", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function s(l, a, c) {
    c == null && a !== null && typeof a == "object" && (c = a, a = void 0), e && Buffer.isBuffer(l) && (l = l.toString()), l && l.charCodeAt(0) === 65279 && (l = l.slice(1));
    const f = JSON.parse(l, a);
    if (f === null || typeof f != "object")
      return f;
    const h = c && c.protoAction || "error", p = c && c.constructorAction || "error";
    if (h === "ignore" && p === "ignore")
      return f;
    if (h !== "ignore" && p !== "ignore") {
      if (t.test(l) === !1 && n.test(l) === !1)
        return f;
    } else if (h !== "ignore" && p === "ignore") {
      if (t.test(l) === !1)
        return f;
    } else if (n.test(l) === !1)
      return f;
    return r(f, { protoAction: h, constructorAction: p, safe: c && c.safe });
  }
  function r(l, { protoAction: a = "error", constructorAction: c = "error", safe: f } = {}) {
    let h = [l];
    for (; h.length; ) {
      const p = h;
      h = [];
      for (const m of p) {
        if (a !== "ignore" && Object.prototype.hasOwnProperty.call(m, "__proto__")) {
          if (f === !0)
            return null;
          if (a === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete m.__proto__;
        }
        if (c !== "ignore" && Object.prototype.hasOwnProperty.call(m, "constructor") && Object.prototype.hasOwnProperty.call(m.constructor, "prototype")) {
          if (f === !0)
            return null;
          if (c === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete m.constructor;
        }
        for (const O in m) {
          const R = m[O];
          R && typeof R == "object" && h.push(R);
        }
      }
    }
    return l;
  }
  function o(l, a, c) {
    const f = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return s(l, a, c);
    } finally {
      Error.stackTraceLimit = f;
    }
  }
  function i(l, a) {
    const c = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return s(l, a, { safe: !0 });
    } catch (f) {
      return null;
    } finally {
      Error.stackTraceLimit = c;
    }
  }
  return yt.exports = o, yt.exports.default = o, yt.exports.parse = o, yt.exports.safeParse = i, yt.exports.scan = r, yt.exports;
}
var Ua = Ha();
const Ka = /* @__PURE__ */ Ba(Ua);
var Wa = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: s = "-"
} = {}) => {
  const r = $a(n, t);
  if (e == null)
    return r;
  if (n.includes(s))
    throw new Fa({
      argument: "separator",
      message: `The separator "${s}" must not be part of the alphabet "${n}".`
    });
  return (o) => `${e}${s}${r(o)}`;
}, Ms = Wa(), fs = Symbol.for("vercel.ai.validator");
function Ja(e) {
  return { [fs]: !0, validate: e };
}
function Ya(e) {
  return typeof e == "object" && e !== null && fs in e && e[fs] === !0 && "validate" in e;
}
function Ga(e) {
  return Ya(e) ? e : qa(e);
}
function qa(e) {
  return Ja((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function za({
  value: e,
  schema: t
}) {
  const n = Ga(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const s = n.validate(e);
    return s.success ? s : {
      success: !1,
      error: Er.wrap({ value: e, cause: s.error })
    };
  } catch (s) {
    return {
      success: !1,
      error: Er.wrap({ value: e, cause: s })
    };
  }
}
function Sr({
  text: e,
  schema: t
}) {
  try {
    const n = Ka.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const s = za({ value: n, schema: t });
    return s.success ? ut(ie({}, s), { rawValue: n }) : s;
  } catch (n) {
    return {
      success: !1,
      error: wr.isInstance(n) ? n : new wr({ text: e, cause: n })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var Qt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, en = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, tn = {
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
}, nn = {
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
}, sn = {
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
}, Xa = [
  Qt,
  en,
  tn,
  nn,
  sn
];
Qt.code + "", en.code + "", tn.code + "", nn.code + "", sn.code + "";
Qt.name + "", Qt.code, en.name + "", en.code, tn.name + "", tn.code, nn.name + "", nn.code, sn.name + "", sn.code;
Xa.map((e) => e.code);
function Za({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Qa(e) {
  const t = ["ROOT"];
  let n = -1, s = null;
  function r(a, c, f) {
    switch (a) {
      case '"': {
        n = c, t.pop(), t.push(f), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = c, s = c, t.pop(), t.push(f), t.push("INSIDE_LITERAL");
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
        n = c, t.pop(), t.push(f), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = c, t.pop(), t.push(f), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = c, t.pop(), t.push(f), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function o(a, c) {
    switch (a) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        n = c, t.pop();
        break;
      }
    }
  }
  function i(a, c) {
    switch (a) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        n = c, t.pop();
        break;
      }
    }
  }
  for (let a = 0; a < e.length; a++) {
    const c = e[a];
    switch (t[t.length - 1]) {
      case "ROOT":
        r(c, a, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            n = a, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (c) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (c) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        r(c, a, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        o(c, a);
        break;
      }
      case "INSIDE_STRING": {
        switch (c) {
          case '"': {
            t.pop(), n = a;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            n = a;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (c) {
          case "]": {
            n = a, t.pop();
            break;
          }
          default: {
            n = a, r(c, a, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (c) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            n = a, t.pop();
            break;
          }
          default: {
            n = a;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        r(c, a, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = a;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (c) {
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
            n = a;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(c, a), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && o(c, a);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && o(c, a);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(c, a);
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
        const h = e.substring(s, a + 1);
        !"false".startsWith(h) && !"true".startsWith(h) && !"null".startsWith(h) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? o(c, a) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(c, a)) : n = a;
        break;
      }
    }
  }
  let l = e.slice(0, n + 1);
  for (let a = t.length - 1; a >= 0; a--)
    switch (t[a]) {
      case "INSIDE_STRING": {
        l += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        l += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        l += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const f = e.substring(s, e.length);
        "true".startsWith(f) ? l += "true".slice(f.length) : "false".startsWith(f) ? l += "false".slice(f.length) : "null".startsWith(f) && (l += "null".slice(f.length));
      }
    }
  return l;
}
function ec(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = Sr({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = Sr({ text: Qa(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var tc = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, nc = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, sc = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, rc = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, oc = {
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
}, ic = {
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
}, lc = {
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
}, ac = {
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
}, cc = {
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
}, uc = {
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
}, fc = {
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
}, dc = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, hc = {
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
}, pc = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, gc = {
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
}, mc = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, ks = [
  tc,
  nc,
  sc,
  rc,
  oc,
  ic,
  lc,
  ac,
  cc,
  uc,
  fc,
  dc,
  hc,
  pc,
  gc,
  mc
], _c = Object.fromEntries(
  ks.map((e) => [e.code, e])
);
Object.fromEntries(
  ks.map((e) => [e.name, e.code])
);
var yc = ks.map((e) => e.code), bc = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!yc.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const s = n, r = e.slice(t + 1), o = JSON.parse(r);
  return _c[s].parse(o);
}, vc = 10;
function wc(e, t) {
  const n = new Uint8Array(t);
  let s = 0;
  for (const r of e)
    n.set(r, s), s += r.length;
  return e.length = 0, n;
}
function Ec(H) {
  return fe(this, arguments, function* ({
    stream: e,
    onTextPart: t,
    onReasoningPart: n,
    onReasoningSignaturePart: s,
    onRedactedReasoningPart: r,
    onSourcePart: o,
    onFilePart: i,
    onDataPart: l,
    onErrorPart: a,
    onToolCallStreamingStartPart: c,
    onToolCallDeltaPart: f,
    onToolCallPart: h,
    onToolResultPart: p,
    onMessageAnnotationsPart: m,
    onFinishMessagePart: O,
    onFinishStepPart: R,
    onStartStepPart: L
  }) {
    const N = e.getReader(), P = new TextDecoder(), A = [];
    let j = 0;
    for (; ; ) {
      const { value: U } = yield N.read();
      if (U && (A.push(U), j += U.length, U[U.length - 1] !== vc))
        continue;
      if (A.length === 0)
        break;
      const J = wc(A, j);
      j = 0;
      const E = P.decode(J, { stream: !0 }).split(`
`).filter((V) => V !== "").map(bc);
      for (const { type: V, value: D } of E)
        switch (V) {
          case "text":
            yield t == null ? void 0 : t(D);
            break;
          case "reasoning":
            yield n == null ? void 0 : n(D);
            break;
          case "reasoning_signature":
            yield s == null ? void 0 : s(D);
            break;
          case "redacted_reasoning":
            yield r == null ? void 0 : r(D);
            break;
          case "file":
            yield i == null ? void 0 : i(D);
            break;
          case "source":
            yield o == null ? void 0 : o(D);
            break;
          case "data":
            yield l == null ? void 0 : l(D);
            break;
          case "error":
            yield a == null ? void 0 : a(D);
            break;
          case "message_annotations":
            yield m == null ? void 0 : m(D);
            break;
          case "tool_call_streaming_start":
            yield c == null ? void 0 : c(D);
            break;
          case "tool_call_delta":
            yield f == null ? void 0 : f(D);
            break;
          case "tool_call":
            yield h == null ? void 0 : h(D);
            break;
          case "tool_result":
            yield p == null ? void 0 : p(D);
            break;
          case "finish_message":
            yield O == null ? void 0 : O(D);
            break;
          case "finish_step":
            yield R == null ? void 0 : R(D);
            break;
          case "start_step":
            yield L == null ? void 0 : L(D);
            break;
          default: {
            const X = V;
            throw new Error(`Unknown stream part type: ${X}`);
          }
        }
    }
  });
}
function xc(l) {
  return fe(this, arguments, function* ({
    stream: e,
    update: t,
    onToolCall: n,
    onFinish: s,
    generateId: r = Ms,
    getCurrentDate: o = () => /* @__PURE__ */ new Date(),
    lastMessage: i
  }) {
    var a, c;
    const f = (i == null ? void 0 : i.role) === "assistant";
    let h = f ? 1 + // find max step in existing tool invocations:
    ((c = (a = i.toolInvocations) == null ? void 0 : a.reduce((E, V) => {
      var D;
      return Math.max(E, (D = V.step) != null ? D : 0);
    }, 0)) != null ? c : 0) : 0;
    const p = f ? structuredClone(i) : {
      id: r(),
      createdAt: o(),
      role: "assistant",
      content: "",
      parts: []
    };
    let m, O, R;
    function L(E, V) {
      const D = p.parts.find(
        (X) => X.type === "tool-invocation" && X.toolInvocation.toolCallId === E
      );
      D != null ? D.toolInvocation = V : p.parts.push({
        type: "tool-invocation",
        toolInvocation: V
      });
    }
    const H = [];
    let N = f ? i == null ? void 0 : i.annotations : void 0;
    const P = {};
    let A = {
      completionTokens: NaN,
      promptTokens: NaN,
      totalTokens: NaN
    }, j = "unknown";
    function U() {
      const E = [...H];
      N != null && N.length && (p.annotations = N);
      const V = ut(ie({}, structuredClone(p)), {
        // add a revision id to ensure that the message is updated with SWR. SWR uses a
        // hashing approach by default to detect changes, but it only works for shallow
        // changes. This is why we need to add a revision id to ensure that the message
        // is updated with SWR (without it, the changes get stuck in SWR and are not
        // forwarded to rendering):
        revisionId: r()
      });
      t({
        message: V,
        data: E,
        replaceLastMessage: f
      });
    }
    yield Ec({
      stream: e,
      onTextPart(E) {
        m == null ? (m = {
          type: "text",
          text: E
        }, p.parts.push(m)) : m.text += E, p.content += E, U();
      },
      onReasoningPart(E) {
        var V;
        R == null ? (R = { type: "text", text: E }, O != null && O.details.push(R)) : R.text += E, O == null ? (O = {
          type: "reasoning",
          reasoning: E,
          details: [R]
        }, p.parts.push(O)) : O.reasoning += E, p.reasoning = ((V = p.reasoning) != null ? V : "") + E, U();
      },
      onReasoningSignaturePart(E) {
        R != null && (R.signature = E.signature);
      },
      onRedactedReasoningPart(E) {
        O == null && (O = {
          type: "reasoning",
          reasoning: "",
          details: []
        }, p.parts.push(O)), O.details.push({
          type: "redacted",
          data: E.data
        }), R = void 0, U();
      },
      onFilePart(E) {
        p.parts.push({
          type: "file",
          mimeType: E.mimeType,
          data: E.data
        }), U();
      },
      onSourcePart(E) {
        p.parts.push({
          type: "source",
          source: E
        }), U();
      },
      onToolCallStreamingStartPart(E) {
        p.toolInvocations == null && (p.toolInvocations = []), P[E.toolCallId] = {
          text: "",
          step: h,
          toolName: E.toolName,
          index: p.toolInvocations.length
        };
        const V = {
          state: "partial-call",
          step: h,
          toolCallId: E.toolCallId,
          toolName: E.toolName,
          args: void 0
        };
        p.toolInvocations.push(V), L(E.toolCallId, V), U();
      },
      onToolCallDeltaPart(E) {
        const V = P[E.toolCallId];
        V.text += E.argsTextDelta;
        const { value: D } = ec(V.text), X = {
          state: "partial-call",
          step: V.step,
          toolCallId: E.toolCallId,
          toolName: V.toolName,
          args: D
        };
        p.toolInvocations[V.index] = X, L(E.toolCallId, X), U();
      },
      onToolCallPart(E) {
        return fe(this, null, function* () {
          const V = ie({
            state: "call",
            step: h
          }, E);
          if (P[E.toolCallId] != null ? p.toolInvocations[P[E.toolCallId].index] = V : (p.toolInvocations == null && (p.toolInvocations = []), p.toolInvocations.push(V)), L(E.toolCallId, V), U(), n) {
            const D = yield n({ toolCall: E });
            if (D != null) {
              const X = ut(ie({
                state: "result",
                step: h
              }, E), {
                result: D
              });
              p.toolInvocations[p.toolInvocations.length - 1] = X, L(E.toolCallId, X), U();
            }
          }
        });
      },
      onToolResultPart(E) {
        const V = p.toolInvocations;
        if (V == null)
          throw new Error("tool_result must be preceded by a tool_call");
        const D = V.findIndex(
          (ce) => ce.toolCallId === E.toolCallId
        );
        if (D === -1)
          throw new Error(
            "tool_result must be preceded by a tool_call with the same toolCallId"
          );
        const X = ie(ut(ie({}, V[D]), {
          state: "result"
        }), E);
        V[D] = X, L(E.toolCallId, X), U();
      },
      onDataPart(E) {
        H.push(...E), U();
      },
      onMessageAnnotationsPart(E) {
        N == null ? N = [...E] : N.push(...E), U();
      },
      onFinishStepPart(E) {
        h += 1, m = E.isContinued ? m : void 0, O = void 0, R = void 0;
      },
      onStartStepPart(E) {
        f || (p.id = E.messageId), p.parts.push({ type: "step-start" }), U();
      },
      onFinishMessagePart(E) {
        j = E.finishReason, E.usage != null && (A = Za(E.usage));
      },
      onErrorPart(E) {
        throw new Error(E);
      }
    }), s == null || s({ message: p, finishReason: j, usage: A });
  });
}
function Sc(n) {
  return fe(this, arguments, function* ({
    stream: e,
    onTextPart: t
  }) {
    const s = e.pipeThrough(new TextDecoderStream()).getReader();
    for (; ; ) {
      const { done: r, value: o } = yield s.read();
      if (r)
        break;
      yield t(o);
    }
  });
}
function Ic(o) {
  return fe(this, arguments, function* ({
    stream: e,
    update: t,
    onFinish: n,
    getCurrentDate: s = () => /* @__PURE__ */ new Date(),
    generateId: r = Ms
  }) {
    const i = { type: "text", text: "" }, l = {
      id: r(),
      createdAt: s(),
      role: "assistant",
      content: "",
      parts: [i]
    };
    yield Sc({
      stream: e,
      onTextPart: (a) => {
        l.content += a, i.text += a, t({
          message: ie({}, l),
          data: [],
          replaceLastMessage: !1
        });
      }
    }), n == null || n(l, {
      usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
      finishReason: "unknown"
    });
  });
}
var Tc = () => fetch;
function Cc(R) {
  return fe(this, arguments, function* ({
    api: e,
    body: t,
    streamProtocol: n = "data",
    credentials: s,
    headers: r,
    abortController: o,
    restoreMessagesOnFailure: i,
    onResponse: l,
    onUpdate: a,
    onFinish: c,
    onToolCall: f,
    generateId: h,
    fetch: p = Tc(),
    lastMessage: m,
    requestType: O = "generate"
  }) {
    var L, H, N;
    const A = yield (O === "resume" ? p(`${e}?chatId=${t.id}`, {
      method: "GET",
      headers: ie({
        "Content-Type": "application/json"
      }, r),
      signal: (L = o == null ? void 0 : o()) == null ? void 0 : L.signal,
      credentials: s
    }) : p(e, {
      method: "POST",
      body: JSON.stringify(t),
      headers: ie({
        "Content-Type": "application/json"
      }, r),
      signal: (H = o == null ? void 0 : o()) == null ? void 0 : H.signal,
      credentials: s
    })).catch((j) => {
      throw i(), j;
    });
    if (l)
      try {
        yield l(A);
      } catch (j) {
        throw j;
      }
    if (!A.ok)
      throw i(), new Error(
        (N = yield A.text()) != null ? N : "Failed to fetch the chat response."
      );
    if (!A.body)
      throw new Error("The response body is empty.");
    switch (n) {
      case "text": {
        yield Ic({
          stream: A.body,
          update: a,
          onFinish: c,
          generateId: h
        });
        return;
      }
      case "data": {
        yield xc({
          stream: A.body,
          update: a,
          lastMessage: m,
          onToolCall: f,
          onFinish({ message: j, finishReason: U, usage: J }) {
            c && j != null && c(j, { usage: J, finishReason: U });
          },
          generateId: h
        });
        return;
      }
      default: {
        const j = n;
        throw new Error(`Unknown stream protocol: ${j}`);
      }
    }
  });
}
function ds(e) {
  return e == null ? void 0 : e.reduce((t, n) => {
    var s;
    return Math.max(t, (s = n.step) != null ? s : 0);
  }, 0);
}
function Go(e) {
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
function dn(e) {
  return e.map((t) => ut(ie({}, t), {
    parts: Go(t)
  }));
}
function Ir(e) {
  return fe(this, null, function* () {
    if (!e)
      return [];
    if (globalThis.FileList && e instanceof globalThis.FileList)
      return Promise.all(
        Array.from(e).map((t) => fe(null, null, function* () {
          const { name: n, type: s } = t, r = yield new Promise((o, i) => {
            const l = new FileReader();
            l.onload = (a) => {
              var c;
              o((c = a.target) == null ? void 0 : c.result);
            }, l.onerror = (a) => i(a), l.readAsDataURL(t);
          });
          return {
            name: n,
            contentType: s,
            url: r
          };
        }))
      );
    if (Array.isArray(e))
      return e;
    throw new Error("Invalid attachments type");
  });
}
function Ac({
  originalMaxToolInvocationStep: e,
  originalMessageCount: t,
  maxSteps: n,
  messages: s
}) {
  var r;
  const o = s[s.length - 1];
  return (
    // check if the feature is enabled:
    n > 1 && // ensure there is a last message:
    o != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (s.length > t || ds(o.toolInvocations) !== e) && // check that next step is possible:
    qo(o) && // limit the number of automatic steps:
    ((r = ds(o.toolInvocations)) != null ? r : 0) < n
  );
}
function qo(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((s, r, o) => r.type === "step-start" ? o : s, -1), n = e.parts.slice(t + 1).filter((s) => s.type === "tool-invocation");
  return n.length > 0 && n.every((s) => "result" in s.toolInvocation);
}
function Rc({
  messages: e,
  toolCallId: t,
  toolResult: n
}) {
  var s;
  const r = e[e.length - 1], o = r.parts.find(
    (l) => l.type === "tool-invocation" && l.toolInvocation.toolCallId === t
  );
  if (o == null)
    return;
  const i = ut(ie({}, o.toolInvocation), {
    state: "result",
    result: n
  });
  o.toolInvocation = i, r.toolInvocations = (s = r.toolInvocations) == null ? void 0 : s.map(
    (l) => l.toolCallId === t ? i : l
  );
}
var Gn = /* @__PURE__ */ new WeakMap(), Tr = 0;
function Oc(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var s = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? s = '"' + e[n] + '"' : s = String(e[n]) : Gn.has(e[n]) ? s = Gn.get(e[n]) : (s = Tr, Gn.set(e[n], Tr++)), t += "@" + s;
  }
  return t;
}
function Nc(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch (t) {
      e = "";
    }
  return Array.isArray(e) ? e = Oc(e) : e = String(e || ""), e;
}
var Fs = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return Nc(t);
    }, e.prototype.get = function(t) {
      var n = this.serializeKey(t);
      return this.items.get(n);
    }, e.prototype.set = function(t, n, s) {
      var r = this.serializeKey(t), o = s || this.ttl, i = Date.now(), l = {
        data: n,
        createdAt: i,
        expiresAt: o ? i + o : 1 / 0
      };
      this.dispatchExpire(o, l, r), this.items.set(r, l);
    }, e.prototype.dispatchExpire = function(t, n, s) {
      var r = this;
      t && setTimeout(function() {
        var o = Date.now(), i = o >= n.expiresAt;
        i && r.delete(s);
      }, t);
    }, e.prototype.delete = function(t) {
      this.items.delete(t);
    }, e;
  }()
);
function Pc() {
  return typeof navigator.onLine != "undefined" ? navigator.onLine : !0;
}
function Dc() {
  return typeof document != "undefined" && typeof document.visibilityState != "undefined" ? document.visibilityState !== "hidden" : !0;
}
var Mc = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const qn = {
  isOnline: Pc,
  isDocumentVisible: Dc,
  fetcher: Mc
};
var st = function() {
  return st = Object.assign || function(e) {
    for (var t, n = 1, s = arguments.length; n < s; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, st.apply(this, arguments);
}, Tt = function(e, t, n, s) {
  function r(o) {
    return o instanceof n ? o : new n(function(i) {
      i(o);
    });
  }
  return new (n || (n = Promise))(function(o, i) {
    function l(f) {
      try {
        c(s.next(f));
      } catch (h) {
        i(h);
      }
    }
    function a(f) {
      try {
        c(s.throw(f));
      } catch (h) {
        i(h);
      }
    }
    function c(f) {
      f.done ? o(f.value) : r(f.value).then(l, a);
    }
    c((s = s.apply(e, [])).next());
  });
}, Ct = function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, s, r, o, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(c) {
    return function(f) {
      return a([c, f]);
    };
  }
  function a(c) {
    if (s) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (s = 1, r && (o = c[0] & 2 ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
      switch (r = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
        case 0:
        case 1:
          o = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, r = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < o[1]) {
            n.label = o[1], o = c;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2], n.ops.push(c);
            break;
          }
          o[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = t.call(e, n);
    } catch (f) {
      c = [6, f], r = 0;
    } finally {
      s = o = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, kc = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var s = n.call(e), r, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = s.next()).done; ) o.push(r.value);
  } catch (l) {
    i = { error: l };
  } finally {
    try {
      r && !r.done && (n = s.return) && n.call(s);
    } finally {
      if (i) throw i.error;
    }
  }
  return o;
}, Fc = function(e, t, n) {
  if (arguments.length === 2) for (var s = 0, r = t.length, o; s < r; s++)
    (o || !(s in t)) && (o || (o = Array.prototype.slice.call(t, 0, s)), o[s] = t[s]);
  return e.concat(o || Array.prototype.slice.call(t));
}, zo = new Fs(), Sn = new Fs(), zn = new Fs(), Xo = {
  cache: zo,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: !0,
  revalidateDebounce: 0,
  shouldRetryOnError: !0,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: qn.fetcher,
  isOnline: qn.isOnline,
  isDocumentVisible: qn.isDocumentVisible
};
function jc(e, t, n) {
  var s = Sn.get(e);
  if (s)
    s.data.push(t);
  else {
    var r = 5e3;
    Sn.set(e, [t], n > 0 ? n + r : n);
  }
}
function Lc(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var s = Math.min(t || 0, n.errorRetryCount), r = s * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: s + 1, shouldRetryOnError: !0 });
    }, r);
  }
}
var Cr = function(e, t, n, s) {
  return n === void 0 && (n = zo), s === void 0 && (s = Xo.ttl), Tt(void 0, void 0, void 0, function() {
    var r, o, i, l, a, c, f;
    return Ct(this, function(h) {
      switch (h.label) {
        case 0:
          if (!Vc(t)) return [3, 5];
          h.label = 1;
        case 1:
          return h.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return r = h.sent(), [3, 4];
        case 3:
          return l = h.sent(), o = l, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          r = t, h.label = 6;
        case 6:
          if (i = !1, a = { data: r, error: o, isValidating: i }, typeof r != "undefined")
            try {
              n.set(e, a, s);
            } catch (p) {
              console.error("swrv(mutate): failed to set cache", p);
            }
          return c = Sn.get(e), c && c.data.length && (f = c.data.filter(function(p) {
            return p.key === e;
          }), f.forEach(function(p, m) {
            typeof a.data != "undefined" && (p.data = a.data), p.error = a.error, p.isValidating = a.isValidating, p.isLoading = a.isValidating;
            var O = m === f.length - 1;
            O || delete f[m];
          }), f = f.filter(Boolean)), [2, a];
      }
    });
  });
};
function Ar() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var s, r, o = st({}, Xo), i = !1, l = !1, a = Oo(), c = (a == null ? void 0 : a.proxy) || a;
  if (!c)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var f = (c == null ? void 0 : c.$isServer) || !1;
  t.length >= 1 && (s = t[0]), t.length >= 2 && (r = t[1]), t.length > 2 && (o = st(st({}, o), t[2]));
  var h = f ? o.serverTTL : o.ttl, p = typeof s == "function" ? s : we(s);
  typeof r == "undefined" && (r = o.fetcher);
  var m = null;
  m || (m = rn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var O = function(N, P) {
    return Tt(e, void 0, void 0, function() {
      var A, j, U, J, E, V, D, X = this;
      return Ct(this, function(ce) {
        switch (ce.label) {
          case 0:
            return A = m.data === void 0, j = p.value, j ? (U = o.cache.get(j), J = U && U.data, m.isValidating = !0, m.isLoading = !J, J && (m.data = J.data, m.error = J.error), E = N || r, !E || !o.isDocumentVisible() && !A || (P == null ? void 0 : P.forceRevalidate) !== void 0 && !(P != null && P.forceRevalidate) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : U && (V = !!(Date.now() - U.createdAt >= o.dedupingInterval || P != null && P.forceRevalidate), !V) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (D = function() {
              return Tt(X, void 0, void 0, function() {
                var se, he, Ae, oe;
                return Ct(this, function(G) {
                  switch (G.label) {
                    case 0:
                      return se = zn.get(j), se ? [3, 2] : (he = Array.isArray(j) ? j : [j], Ae = E.apply(void 0, Fc([], kc(he), !1)), zn.set(j, Ae, o.dedupingInterval), [4, Cr(j, Ae, o.cache, h)]);
                    case 1:
                      return G.sent(), [3, 4];
                    case 2:
                      return [4, Cr(j, se.data, o.cache, h)];
                    case 3:
                      G.sent(), G.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, zn.delete(j), m.error !== void 0 && (oe = !i && o.shouldRetryOnError && (P ? P.shouldRetryOnError : !0), oe && Lc(O, P ? P.errorRetryCount : 1, o)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, J && o.revalidateDebounce ? (setTimeout(function() {
              return Tt(X, void 0, void 0, function() {
                return Ct(this, function(se) {
                  switch (se.label) {
                    case 0:
                      return i ? [3, 2] : [4, D()];
                    case 1:
                      se.sent(), se.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, o.revalidateDebounce), [3, 3]) : [3, 1])) : [
              2
              /*return*/
            ];
          case 1:
            return [4, D()];
          case 2:
            ce.sent(), ce.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, R = function() {
    return Tt(e, void 0, void 0, function() {
      return Ct(this, function(N) {
        return [2, O(null, { shouldRetryOnError: !1 })];
      });
    });
  }, L = null;
  Cs(function() {
    var N = function() {
      return Tt(e, void 0, void 0, function() {
        return Ct(this, function(P) {
          switch (P.label) {
            case 0:
              return !m.error && o.isOnline() ? [4, O()] : [3, 2];
            case 1:
              return P.sent(), [3, 3];
            case 2:
              L && clearTimeout(L), P.label = 3;
            case 3:
              return o.refreshInterval && !i && (L = setTimeout(N, o.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    o.refreshInterval && (L = setTimeout(N, o.refreshInterval)), o.revalidateOnFocus && (document.addEventListener("visibilitychange", R, !1), window.addEventListener("focus", R, !1));
  }), As(function() {
    i = !0, L && clearTimeout(L), o.revalidateOnFocus && (document.removeEventListener("visibilitychange", R, !1), window.removeEventListener("focus", R, !1));
    var N = Sn.get(p.value);
    N && (N.data = N.data.filter(function(P) {
      return P !== m;
    }));
  });
  try {
    $e(p, function(N) {
      at(p) || (p.value = N), m.key = N, m.isValidating = !!N, jc(p.value, m, h), !f && !l && p.value && O(), l = !1;
    }, {
      immediate: !0
    });
  } catch (N) {
  }
  var H = st(st({}, $i(m)), { mutate: function(N, P) {
    return O(N, st(st({}, P), { forceRevalidate: !0 }));
  } });
  return H;
}
function Vc(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var $c = Ar.default || Ar, Rr = {}, Or = {};
function Bc({
  api: e = "/api/chat",
  id: t,
  initialMessages: n = [],
  initialInput: s = "",
  sendExtraMessageFields: r,
  streamProtocol: o = "data",
  onResponse: i,
  onFinish: l,
  onError: a,
  credentials: c,
  headers: f,
  body: h,
  generateId: p = Ms,
  onToolCall: m,
  fetch: O,
  keepLastMessageOnError: R = !0,
  maxSteps: L = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var N, P;
  const A = t != null ? t : p(), j = `${e}|${A}`, { data: U, mutate: J } = $c(
    j,
    () => {
      var W;
      return (W = Rr[j]) != null ? W : dn(n);
    }
  ), E = (N = Or[A]) != null ? N : Or[A] = we(
    "ready"
  );
  (P = U.value) != null || (U.value = dn(n));
  const V = (W) => (Rr[j] = W, J()), D = U, X = we(void 0), ce = we(void 0);
  let se = null;
  function he(Re) {
    return fe(this, arguments, function* (W, { data: ne, headers: ge, body: me } = {}) {
      var _e, Le, Ue;
      X.value = void 0, E.value = "submitted";
      const an = D.value.length, u = ds(
        (_e = D.value[D.value.length - 1]) == null ? void 0 : _e.toolInvocations
      );
      try {
        se = new AbortController();
        const d = dn(W), g = d;
        V(g);
        const w = (Le = ce.value) != null ? Le : [], y = r ? g : g.map(
          ({
            role: b,
            content: I,
            experimental_attachments: S,
            data: x,
            annotations: v,
            toolInvocations: M,
            parts: C
          }) => ie(ie(ie(ie(ie({
            role: b,
            content: I
          }, S !== void 0 && {
            experimental_attachments: S
          }), x !== void 0 && { data: x }), v !== void 0 && { annotations: v }), M !== void 0 && { toolInvocations: M }), C !== void 0 && { parts: C })
        );
        yield Cc({
          api: e,
          body: (Ue = H == null ? void 0 : H({
            id: A,
            messages: g,
            requestData: ne,
            requestBody: me
          })) != null ? Ue : ie(ie({
            id: A,
            messages: y,
            data: ne
          }, Te(h)), me),
          streamProtocol: o,
          headers: ie(ie({}, f), ge),
          abortController: () => se,
          credentials: c,
          onResponse: i,
          onUpdate({ message: b, data: I, replaceLastMessage: S }) {
            E.value = "streaming", V([
              ...S ? g.slice(0, g.length - 1) : g,
              b
            ]), I != null && I.length && (ce.value = [...w, ...I]);
          },
          onFinish: l,
          restoreMessagesOnFailure() {
            R || V(d);
          },
          generateId: p,
          onToolCall: m,
          fetch: O,
          // enabled use of structured clone in processChatResponse:
          lastMessage: hs(g[g.length - 1])
        }), E.value = "ready";
      } catch (d) {
        if (d.name === "AbortError")
          return se = null, E.value = "ready", null;
        a && d instanceof Error && a(d), X.value = d, E.value = "error";
      } finally {
        se = null;
      }
      Ac({
        originalMaxToolInvocationStep: u,
        originalMessageCount: an,
        maxSteps: L,
        messages: D.value
      }) && (yield he(D.value));
    });
  }
  const Ae = (W, ne) => fe(null, null, function* () {
    var ge, me, Re;
    const _e = yield Ir(
      (ge = ne == null ? void 0 : ne.experimental_attachments) != null ? ge : W.experimental_attachments
    );
    return he(
      D.value.concat(ut(ie({}, W), {
        id: (me = W.id) != null ? me : p(),
        createdAt: (Re = W.createdAt) != null ? Re : /* @__PURE__ */ new Date(),
        experimental_attachments: _e.length > 0 ? _e : void 0,
        parts: Go(W)
      })),
      ne
    );
  }), oe = (W) => fe(null, null, function* () {
    const ne = D.value;
    return ne.length === 0 ? null : ne[ne.length - 1].role === "assistant" ? he(ne.slice(0, -1), W) : he(ne, W);
  }), G = () => {
    se && (se.abort(), se = null);
  }, _ = (W) => {
    typeof W == "function" && (W = W(D.value)), V(dn(W));
  }, T = (W) => {
    typeof W == "function" && (W = W(ce.value)), ce.value = W;
  }, k = we(s), be = (ge, ...me) => fe(null, [ge, ...me], function* (W, ne = {}) {
    var Re;
    (Re = W == null ? void 0 : W.preventDefault) == null || Re.call(W);
    const _e = k.value;
    if (!_e && !ne.allowEmptySubmit)
      return;
    const Le = yield Ir(
      ne.experimental_attachments
    );
    he(
      D.value.concat({
        id: p(),
        createdAt: /* @__PURE__ */ new Date(),
        content: _e,
        role: "user",
        experimental_attachments: Le.length > 0 ? Le : void 0,
        parts: [{ type: "text", text: _e }]
      }),
      ne
    ), k.value = "";
  }), ue = ({
    toolCallId: W,
    result: ne
  }) => {
    const ge = D.value;
    if (Rc({
      messages: ge,
      toolCallId: W,
      toolResult: ne
    }), V(ge), E.value === "submitted" || E.value === "streaming")
      return;
    const me = ge[ge.length - 1];
    qo(me) && he(ge);
  };
  return {
    id: A,
    messages: D,
    append: Ae,
    error: X,
    reload: oe,
    stop: G,
    setMessages: _,
    input: k,
    handleSubmit: be,
    isLoading: Ps(
      () => E.value === "submitted" || E.value === "streaming"
    ),
    status: E,
    data: ce,
    setData: T,
    addToolResult: ue
  };
}
function hs(e) {
  if (Array.isArray(e))
    return [...e.map(hs)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, s] of Object.entries(e))
      t[n] = hs(s);
    return t;
  } else
    return e;
}
function Hc(e) {
  const t = we(!1), n = we(""), s = we(!0);
  let r = null, o = [], i = null;
  const l = () => {
    const p = window.SpeechRecognition || window.webkitSpeechRecognition;
    return s.value = !!p, p;
  }, a = () => {
    const p = l();
    return p ? (i = new p(), i.continuous = !0, i.interimResults = !0, i.lang = "zh-CN", i.onresult = (m) => {
      let O = "";
      for (let R = m.resultIndex; R < m.results.length; R++)
        m.results[R].isFinal && (O += m.results[R][0].transcript);
      O && e(O);
    }, i.onerror = (m) => {
      n.value = `语音识别错误: ${m.error}`, t.value = !1;
    }, i.onend = () => {
      t.value = !1;
    }, i) : null;
  }, c = () => fe(null, null, function* () {
    if (!t.value) {
      if (n.value = "", l())
        try {
          if (i || (i = a()), i) {
            i.start(), t.value = !0;
            return;
          }
        } catch (p) {
          console.warn("Web Speech API 启动失败，使用录音模式:", p.message);
        }
      try {
        const p = yield navigator.mediaDevices.getUserMedia({ audio: !0 });
        r = new MediaRecorder(p), o = [], r.ondataavailable = (m) => {
          o.push(m.data);
        }, r.onstop = () => fe(null, null, function* () {
          const m = new Blob(o, { type: r == null ? void 0 : r.mimeType });
          yield h(m), p.getTracks().forEach((O) => O.stop());
        }), r.start(), t.value = !0;
      } catch (p) {
        n.value = `启动录音失败: ${p.message}`;
      }
    }
  }), f = () => {
    if (t.value) {
      if (i && l())
        try {
          i.stop();
        } catch (p) {
          console.warn("停止语音识别失败:", p);
        }
      r && r.stop(), t.value = !1;
    }
  }, h = (p) => fe(null, null, function* () {
    n.value = "当前环境不支持服务器端转录，请使用支持 Web Speech API 的浏览器";
  });
  return {
    isRecording: Ut(t),
    error: Ut(n),
    isSupported: Ut(s),
    start: c,
    stop: f
  };
}
const Uc = {
  key: 0,
  class: "chat-panel"
}, Kc = {
  key: 0,
  class: "msg-empty"
}, Wc = { key: 0 }, Jc = { key: 1 }, Yc = {
  key: 0,
  class: "msg-content"
}, Gc = {
  key: 1,
  class: "msg-line msg-ai"
}, qc = { class: "chat-toolbar" }, zc = ["title"], Xc = {
  key: 0,
  class: "speech-indicator"
}, Zc = ["title"], Qc = ["disabled"], xt = "ai-chat-bubble-data", Nr = "ai-chat-bubble-position", eu = 24, tu = /* @__PURE__ */ oo({
  __name: "AiChatBubble",
  props: {
    apiUrl: {}
  },
  setup(e) {
    const t = e, n = we(!1), s = we(!1), r = we(null), o = Bc({
      // 修复API路径 - 移除错误的路径处理逻辑 
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat"),
      onToolCall: (T) => fe(null, [T], function* ({ toolCall: _ }) {
        if (console.log("[onToolCall] 工具被调用:", _), _.toolName === "navigateToPage") {
          const k = _.args.path;
          return console.log(`[onToolCall] 导航工具调用: ${k}`), G(k), { path: k, success: !0 };
        }
        if (_.toolName === "zoomInOnPhoto") {
          const k = _.args.photoTitle;
          return console.log(`[onToolCall] 图片放大工具调用: ${k}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
            detail: { title: k },
            bubbles: !0,
            composed: !0
          })), { title: k };
        }
        if (_.toolName === "zoomOutPhoto") {
          const k = _.args.action || "close";
          return console.log(`[onToolCall] 图片缩小工具调用: ${k}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
            detail: { action: k },
            bubbles: !0,
            composed: !0
          })), { action: k, success: !0 };
        }
        if (_.toolName === "toggleSpeechMode") {
          const k = _.args.action;
          return n.value = k === "on", console.log(`[onToolCall] 语音模式已${k === "on" ? "开启" : "关闭"}，前端状态强制更新为: ${n.value}`), {
            status: k,
            message: `语音播报模式已${k === "on" ? "开启" : "关闭"}`
          };
        }
        if (_.toolName === "speakOnce") {
          const { textToSpeak: k } = _.args;
          return console.log(`[onToolCall] 执行单次语音播报: "${k.substring(0, 50)}..."`), he(k), { text: k, mode: "once", executed: !0 };
        }
        return _.toolName === "stopSpeech" ? (Ae(), console.log("[onToolCall] 停止播报（模式保持不变：" + n.value + "）"), { status: "stopped", message: "语音播报已停止" }) : {};
      }),
      onFinish: (_) => {
        console.log("[onFinish] AI回复完成:", _.content), J(), n.value && _.content && (console.log("[onFinish] 全局语音模式开启，开始播报"), he(_.content));
      }
    }), i = o.messages, l = o.input, a = o.handleSubmit, c = o.isLoading, f = o.error, { isRecording: h, start: p, stop: m, error: O } = Hc(
      (_) => {
        const T = _.trim();
        if (["发送", "提交", "发出", "发送。", "提交。", "发出。"].includes(T)) {
          if (l.value.trim()) {
            console.log("[语音指令] 执行发送，内容:", `"${l.value}"`);
            const k = new Event("submit", { bubbles: !0, cancelable: !0 });
            a(k);
          } else
            console.log("[语音指令] 输入框为空，无可发送内容");
          return;
        }
        if (["清空", "清除", "删除", "清除。", "清空。", "删除。"].includes(T)) {
          console.log("[语音指令] 执行清空历史对话"), i.value.length = 0, l.value = "", localStorage.removeItem(xt), J();
          return;
        }
        if (["停止播报", "停止", "别说了", "安静"].includes(T)) {
          console.log("[语音指令] 执行停止播报（不改变模式）"), Ae(), l.value = "";
          return;
        }
        if (["朗读关闭", "关闭朗读", "朗读关闭。", "关闭朗读。", "朗读，关闭", "朗读，关闭。"].includes(T)) {
          console.log("[语音指令] 执行朗读关闭"), n.value && se(), l.value = "";
          return;
        }
        if (["结束对话", "结束", "再见", "拜拜", "结束对话。", "结束。", "再见。", "拜拜。"].includes(T)) {
          console.log("[语音指令] 执行结束对话，立即退出持久化模式"), s.value = !1, console.log("[麦克风] 已设置持久化模式为 false"), h.value && (console.log("[麦克风] 强制停止录音"), m()), J(), console.log("[麦克风] 已保存关闭状态，后续页面刷新将保持关闭状态"), setTimeout(() => {
            l.value = T, tt(() => a());
          }, 100);
          return;
        }
        if (T.endsWith("发送") && T.length > 2) {
          const k = T.slice(0, -2).trim();
          k && (l.value = k, tt(() => a()));
          return;
        }
        console.log(`[语音指令] 设置输入内容并自动发送: "${T}"`), T.trim() ? (l.value = T, console.log("[自动发送] 执行自动发送，内容:", T), tt(() => {
          a();
        })) : console.log("[自动发送] 文本为空，跳过自动发送");
      }
    ), R = we(!1), L = rn({ x: 0, y: 0 }), H = we(null), N = we(null), P = we(!1);
    function A() {
      R.value = !R.value, J();
    }
    function j() {
      P.value || A();
    }
    function U() {
      s.value ? (m(), s.value = !1, console.log("[麦克风] 退出持久化模式，后续页面刷新将保持关闭状态")) : (p(), s.value = !0, console.log("[麦克风] 开启持久化录音模式")), J();
    }
    function J() {
      try {
        const _ = {
          messages: i.value,
          timestamp: Date.now(),
          speechMode: n.value,
          chatOpen: R.value,
          microphonePersistent: s.value
          // 🆕 保存麦克风状态
        };
        localStorage.setItem(xt, JSON.stringify(_)), console.log(`[存储] 已保存 ${i.value.length} 条对话记录`);
      } catch (_) {
        console.error("[存储] 保存对话历史失败:", _);
      }
    }
    function E() {
      try {
        const _ = localStorage.getItem(xt);
        if (!_) {
          console.log("[存储] 没有找到历史记录");
          return;
        }
        const T = JSON.parse(_), k = Date.now(), be = eu * 60 * 60 * 1e3;
        if (k - T.timestamp > be) {
          console.log("[存储] 历史记录已过期，清除数据"), localStorage.removeItem(xt);
          return;
        }
        T.messages && Array.isArray(T.messages) && (i.value.length = 0, T.messages.forEach((ue) => {
          i.value.push(ue);
        }), console.log(`[存储] 已恢复 ${T.messages.length} 条对话记录`)), typeof T.speechMode == "boolean" && (n.value = T.speechMode, console.log(`[存储] 已恢复语音模式: ${T.speechMode}`)), typeof T.chatOpen == "boolean" && (R.value = T.chatOpen, console.log(`[存储] 已恢复对话框状态: ${T.chatOpen}`)), typeof T.microphonePersistent == "boolean" && (s.value = T.microphonePersistent, console.log(`[存储] 已恢复麦克风状态: ${T.microphonePersistent}`), T.microphonePersistent === !0 ? (console.log("[存储] 恢复持久化录音模式，立即开启录音"), tt(() => {
          p();
        })) : console.log("[存储] 保持麦克风关闭状态"));
      } catch (_) {
        console.error("[存储] 恢复对话历史失败:", _), localStorage.removeItem(xt);
      }
    }
    function V() {
      try {
        const _ = {
          x: L.x,
          y: L.y,
          timestamp: Date.now()
        };
        localStorage.setItem(Nr, JSON.stringify(_)), console.log("[存储] 已保存悬浮球位置");
      } catch (_) {
        console.error("[存储] 保存位置失败:", _);
      }
    }
    function D() {
      try {
        const _ = localStorage.getItem(Nr);
        if (!_) return;
        const T = JSON.parse(_), k = H.value;
        if (k) {
          const be = window.innerWidth - k.offsetWidth, ue = window.innerHeight - k.offsetHeight;
          if (T.x >= 0 && T.x <= be && T.y >= 0 && T.y <= ue) {
            L.x = T.x, L.y = T.y, console.log("[存储] 已恢复悬浮球位置");
            return;
          }
        }
        X();
      } catch (_) {
        console.error("[存储] 恢复位置失败:", _), X();
      }
    }
    function X() {
      const _ = H.value;
      _ && (L.x = window.innerWidth - _.offsetWidth - 20, L.y = window.innerHeight - _.offsetHeight - 20);
    }
    function ce() {
      confirm("确定要清除所有对话历史吗？此操作无法撤销。") && (i.value.length = 0, l.value = "", h.value && m(), s.value = !1, localStorage.removeItem(xt), Ae(), console.log("[清除历史] 对话历史已完全清除，麦克风已退出持久化模式"));
    }
    function se() {
      const _ = !n.value;
      n.value = _, console.log(`[语音模式] 用户${_ ? "开启" : "关闭"}语音模式，状态已更新为：${n.value}`), J();
      const T = _ ? "开启语音模式" : "关闭语音模式";
      l.value = T, tt(() => {
        a(), setTimeout(() => {
          l.value = "";
        }, 100);
      }), _ ? he("准备就绪") : Ae();
    }
    function he(_) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const T = new SpeechSynthesisUtterance(_);
        T.lang = "zh-CN", T.rate = 1.5, window.speechSynthesis.speak(T);
      } else
        console.error("您的浏览器不支持语音合成功能。");
    }
    function Ae() {
      "speechSynthesis" in window && (console.log("[TTS] 停止播报"), window.speechSynthesis.cancel(), r.value = null);
    }
    Ps(() => {
      if (!c.value) return !1;
      const _ = [...i.value].reverse().find((T) => T.role === "user");
      return !!(_ && /摇骰子|掷骰子/.test(_.content));
    }), $e(i, (_, T) => fe(null, null, function* () {
      _.length > 0 && J(), yield tt(), N.value && (N.value.scrollTop = N.value.scrollHeight);
    }), { deep: !0 }), $e(n, (_) => {
      J();
    }), $e(R, (_) => {
      J();
    }), $e(s, (_) => {
      console.log(`[麦克风] 持久化状态变更为: ${_}`), J();
    }), $e(h, (_, T) => {
      console.log(`[麦克风] 录音状态变更: ${T} -> ${_}`), !_ && s.value ? (console.log("[麦克风] 录音停止，检查是否需要重新开启"), setTimeout(() => {
        s.value && !h.value ? (console.log("[麦克风] 持久化模式仍然开启，重新启动录音"), p()) : console.log(`[麦克风] 不重新启动录音 - 持久化: ${s.value}, 录音中: ${h.value}`);
      }, 1e3)) : !_ && !s.value && console.log("[麦克风] 录音正常停止，不在持久化模式中");
    }), $e(f, (_) => {
      _ && console.error("[Assistant] An error occurred:", _);
    }), $e(O, (_) => {
      if (_ && (console.error("[ASR] 语音识别错误:", _), N.value)) {
        const T = document.createElement("div");
        T.className = "msg-line msg-ai error-msg", T.textContent = `语音识别错误: ${_}`, N.value.appendChild(T), N.value.scrollTop = N.value.scrollHeight;
      }
    });
    function oe(_) {
      _.preventDefault();
      const T = H.value, k = _.clientX, be = _.clientY, ue = L.x, W = L.y;
      let ne = !1;
      function ge(Re) {
        const _e = Re.clientX - k, Le = Re.clientY - be;
        if (!ne && (Math.abs(_e) > 5 || Math.abs(Le) > 5) && (ne = !0, P.value = !0), ne) {
          const Ue = Math.min(Math.max(0, ue + _e), window.innerWidth - T.offsetWidth), an = Math.min(Math.max(0, W + Le), window.innerHeight - T.offsetHeight);
          L.x = Ue, L.y = an;
        }
      }
      function me() {
        document.removeEventListener("mousemove", ge), document.removeEventListener("mouseup", me), setTimeout(() => {
          P.value = !1, ne && V();
        }, 10);
      }
      document.addEventListener("mousemove", ge), document.addEventListener("mouseup", me);
    }
    Cs(() => {
      H.value, tt(() => {
        D(), E();
      });
    });
    function G(_) {
      J(), V(), typeof _ == "string" && _.length > 0 ? (window.location.href = _, console.log(`[Navigation] 页面跳转到: ${_}`)) : console.error("[Navigation] 跳转路径无效:", _);
    }
    return (_, T) => (ke(), Ve("div", {
      ref_key: "containerRef",
      ref: H,
      class: "ai-bubble-container",
      style: On({ left: L.x + "px", top: L.y + "px" })
    }, [
      Pe("div", {
        class: "floating-ball",
        onMousedown: oe,
        onClick: j
      }, "AI", 32),
      R.value ? (ke(), Ve("div", Uc, [
        R.value ? (ke(), Ve("div", {
          key: 0,
          class: "close-btn",
          onClick: A
        }, "×")) : Et("", !0),
        Pe("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: N
        }, [
          Te(i).length === 0 ? (ke(), Ve("div", Kc, [
            T[3] || (T[3] = ls(" 有什么可以帮您的吗？", -1)),
            T[4] || (T[4] = Pe("br", null, null, -1)),
            n.value ? (ke(), Ve("small", Wc, " 💡 当前为朗读开启模式，所有回答都会自动语音播报 ")) : (ke(), Ve("small", Jc, ' 💡 当前为朗读关闭模式，在问题后加上"语音播报"可以听到回答 '))
          ])) : Et("", !0),
          (ke(!0), Ve(qe, null, dl(Te(i), (k) => (ke(), Ve("div", {
            key: k.id,
            class: Ot(["msg-line", k.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            k.role === "user" || k.role === "assistant" ? (ke(), Ve("div", Yc, Qn(k.content), 1)) : Et("", !0)
          ], 2))), 128)),
          Te(c) ? (ke(), Ve("div", Gc, T[5] || (T[5] = [
            Pe("span", null, "思考中...", -1)
          ]))) : Et("", !0)
        ], 512),
        Pe("div", qc, [
          Pe("button", {
            onClick: se,
            class: Ot(["toolbar-btn", { active: n.value }]),
            title: n.value ? "关闭连续语音播报模式（将只在明确要求时播报）" : "开启连续语音播报模式（所有回答都将自动播报）"
          }, [
            ls(Qn(n.value ? "🔊 朗读开启" : "🔇 朗读关闭") + " ", 1),
            n.value ? (ke(), Ve("span", Xc)) : Et("", !0)
          ], 10, zc),
          Pe("button", {
            onClick: ce,
            class: "toolbar-btn clear-btn",
            title: "清除对话历史"
          }, " 🗑️ 清除 ")
        ]),
        Pe("form", {
          onSubmit: T[2] || (T[2] = yr(
            //@ts-ignore
            (...k) => Te(a) && Te(a)(...k),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          Xi(Pe("textarea", {
            "onUpdate:modelValue": T[0] || (T[0] = (k) => de(l) ? l.value = k : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: T[1] || (T[1] = Aa(yr(
              //@ts-ignore
              (...k) => Te(a) && Te(a)(...k),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [Sa, Te(l)]
          ]),
          Pe("button", {
            type: "button",
            class: Ot(["btn-voice", { listening: Te(h) }]),
            onClick: U,
            title: s.value ? "录音中（点击关闭）" : "点击开启持久录音"
          }, "🎤", 10, Zc),
          Pe("button", {
            type: "submit",
            class: "btn-send",
            disabled: Te(c) || !Te(l).trim()
          }, "➤", 8, Qc)
        ], 32)
      ])) : Et("", !0)
    ], 4));
  }
}), nu = /* @__PURE__ */ wa(tu);
customElements.define("ai-chat-bubble", nu);
//# sourceMappingURL=ai-chat-bubble.es.js.map
