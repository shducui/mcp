var vs = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ct(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = vs.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = vs.NODE_ENV !== "production" ? Object.freeze([]) : [], de = () => {
}, Xi = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Yr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zi = Object.prototype.hasOwnProperty, q = (e, t) => Zi.call(e, t), k = Array.isArray, It = (e) => tr(e) === "[object Map]", Ns = (e) => tr(e) === "[object Set]", F = (e) => typeof e == "function", oe = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", qr = (e) => (ee(e) || F(e)) && F(e.then) && F(e.catch), ws = Object.prototype.toString, tr = (e) => ws.call(e), Gr = (e) => tr(e).slice(8, -1), nr = (e) => tr(e) === "[object Object]", zr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ct(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qi = /* @__PURE__ */ ct(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ea = /-(\w)/g, Te = rr(
  (e) => e.replace(ea, (t, n) => n ? n.toUpperCase() : "")
), ta = /\B([A-Z])/g, Ce = rr(
  (e) => e.replace(ta, "-$1").toLowerCase()
), or = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = rr(
  (e) => e ? `on${or(e)}` : ""
), mt = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Oo = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xo;
const wn = () => xo || (xo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sr(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = oe(r) ? sa(r) : sr(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (oe(e) || ee(e))
    return e;
}
const na = /;(?![^(]*\))/g, ra = /:([^]+)/, oa = /\/\*[^]*?\*\//g;
function sa(e) {
  const t = {};
  return e.replace(oa, "").split(na).forEach((n) => {
    if (n) {
      const r = n.split(ra);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function un(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const r = un(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ia = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", aa = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", la = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ca = /* @__PURE__ */ ct(ia), ua = /* @__PURE__ */ ct(aa), fa = /* @__PURE__ */ ct(la), da = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pa = /* @__PURE__ */ ct(da);
function Os(e) {
  return !!e || e === "";
}
const xs = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => oe(e) ? e : e == null ? "" : k(e) || ee(e) && (e.toString === ws || !F(e.toString)) ? xs(e) ? Ds(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => xs(t) ? Ss(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[gr(r, s) + " =>"] = o, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gr(n))
} : yt(t) ? gr(t) : ee(t) && !k(t) && !nr(t) ? String(t) : t, gr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var te = {};
function Be(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class ha {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ie, !t && Ie && (this.index = (Ie.scopes || (Ie.scopes = [])).push(
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
      const n = Ie;
      try {
        return Ie = this, t();
      } finally {
        Ie = n;
      }
    } else te.NODE_ENV !== "production" && Be("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ie, Ie = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ie = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function ga() {
  return Ie;
}
let X;
const _r = /* @__PURE__ */ new WeakSet();
class Is {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ie && Ie.active && Ie.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _r.has(this) && (_r.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ts(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Do(this), Vs(this);
    const t = X, n = Ue;
    X = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      te.NODE_ENV !== "production" && X !== this && Be(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), As(this), X = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qr(t);
      this.deps = this.depsTail = void 0, Do(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _r.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Tr(this) && this.run();
  }
  get dirty() {
    return Tr(this);
  }
}
let Cs = 0, rn, on;
function Ts(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = on, on = e;
    return;
  }
  e.next = rn, rn = e;
}
function Xr() {
  Cs++;
}
function Zr() {
  if (--Cs > 0)
    return;
  if (on) {
    let t = on;
    for (on = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; rn; ) {
    let t = rn;
    for (rn = void 0; t; ) {
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
function Vs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function As(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Qr(r), _a(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Rs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = Ue;
  X = e, Ue = !0;
  try {
    Vs(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, Ue = r, As(e), e.flags &= -3;
  }
}
function Qr(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), te.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Qr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function _a(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const Ps = [];
function Ke() {
  Ps.push(Ue), Ue = !1;
}
function We() {
  const e = Ps.pop();
  Ue = e === void 0 ? !0 : e;
}
function Do(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let fn = 0;
class ma {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class eo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, te.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !Ue || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new ma(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Ms(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = r);
    }
    return te.NODE_ENV !== "production" && X.onTrack && X.onTrack(
      ie(
        {
          effect: X
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    Xr();
    try {
      if (te.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ie(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zr();
    }
  }
}
function Ms(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Ms(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), te.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), Ct = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Vr = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), dn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function fe(e, t, n) {
  if (Ue && X) {
    let r = Bn.get(e);
    r || Bn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new eo()), o.map = r, o.key = n), te.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Qe(e, t, n, r, o, s) {
  const i = Bn.get(e);
  if (!i) {
    fn++;
    return;
  }
  const a = (l) => {
    l && (te.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : l.trigger());
  };
  if (Xr(), t === "clear")
    i.forEach(a);
  else {
    const l = k(e), f = l && zr(n);
    if (l && n === "length") {
      const d = Number(r);
      i.forEach((u, g) => {
        (g === "length" || g === dn || !yt(g) && g >= d) && a(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(dn)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(Ct)), It(e) && a(i.get(Vr)));
          break;
        case "delete":
          l || (a(i.get(Ct)), It(e) && a(i.get(Vr)));
          break;
        case "set":
          It(e) && a(i.get(Ct));
          break;
      }
  }
  Zr();
}
function ba(e, t) {
  const n = Bn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = K(e);
  return t === e ? t : (fe(t, "iterate", dn), Oe(e) ? t : t.map(ge));
}
function ir(e) {
  return fe(e = K(e), "iterate", dn), e;
}
const ya = {
  __proto__: null,
  [Symbol.iterator]() {
    return mr(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => k(t) ? Mt(t) : t)
    );
  },
  entries() {
    return mr(this, "entries", (e) => (e[1] = ge(e[1]), e));
  },
  every(e, t) {
    return st(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return st(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return st(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return st(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return st(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return st(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return st(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return br(this, "includes", e);
  },
  indexOf(...e) {
    return br(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return br(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zt(this, "pop");
  },
  push(...e) {
    return zt(this, "push", e);
  },
  reduce(e, ...t) {
    return So(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return So(this, "reduceRight", e, t);
  },
  shift() {
    return zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zt(this, "splice", e);
  },
  toReversed() {
    return Mt(this).toReversed();
  },
  toSorted(e) {
    return Mt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mt(this).toSpliced(...e);
  },
  unshift(...e) {
    return zt(this, "unshift", e);
  },
  values() {
    return mr(this, "values", ge);
  }
};
function mr(e, t, n) {
  const r = ir(e), o = r[t]();
  return r !== e && !Oe(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const Ea = Array.prototype;
function st(e, t, n, r, o, s) {
  const i = ir(e), a = i !== e && !Oe(e), l = i[t];
  if (l !== Ea[t]) {
    const u = l.apply(e, s);
    return a ? ge(u) : u;
  }
  let f = n;
  i !== e && (a ? f = function(u, g) {
    return n.call(this, ge(u), g, e);
  } : n.length > 2 && (f = function(u, g) {
    return n.call(this, u, g, e);
  }));
  const d = l.call(i, f, r);
  return a && o ? o(d) : d;
}
function So(e, t, n, r) {
  const o = ir(e);
  let s = n;
  return o !== e && (Oe(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, ge(a), l, e);
  }), o[t](s, ...r);
}
function br(e, t, n) {
  const r = K(e);
  fe(r, "iterate", dn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && pn(n[0]) ? (n[0] = K(n[0]), r[t](...n)) : o;
}
function zt(e, t, n = []) {
  Ke(), Xr();
  const r = K(e)[t].apply(e, n);
  return Zr(), We(), r;
}
const va = /* @__PURE__ */ ct("__proto__,__v_isRef,__isVue"), ks = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function Na(e) {
  yt(e) || (e = String(e));
  const t = K(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class $s {
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
      return r === (o ? s ? Bs : Us : s ? Hs : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = k(t);
    if (!o) {
      let l;
      if (i && (l = ya[n]))
        return l;
      if (n === "hasOwnProperty")
        return Na;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(t) ? t : r
    );
    return (yt(n) ? ks.has(n) : va(n)) || (o || fe(t, "get", n), s) ? a : ce(a) ? i && zr(n) ? a : a.value : ee(a) ? o ? Kn(a) : On(a) : a;
  }
}
class js extends $s {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const l = Je(s);
      if (!Oe(r) && !Je(r) && (s = K(s), r = K(r)), !k(t) && ce(s) && !ce(r))
        return l ? !1 : (s.value = r, !0);
    }
    const i = k(t) && zr(n) ? Number(n) < t.length : q(t, n), a = Reflect.set(
      t,
      n,
      r,
      ce(t) ? t : o
    );
    return t === K(o) && (i ? mt(r, s) && Qe(t, "set", n, r, s) : Qe(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = q(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Qe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!yt(n) || !ks.has(n)) && fe(t, "has", n), r;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      k(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class Fs extends $s {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return te.NODE_ENV !== "production" && Be(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return te.NODE_ENV !== "production" && Be(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const wa = /* @__PURE__ */ new js(), Oa = /* @__PURE__ */ new Fs(), xa = /* @__PURE__ */ new js(!0), Da = /* @__PURE__ */ new Fs(!0), Ar = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function Sa(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = K(o), i = It(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = o[e](...r), d = n ? Ar : t ? Wn : ge;
    return !t && fe(
      s,
      "iterate",
      l ? Vr : Ct
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = f.next();
        return g ? { value: u, done: g } : {
          value: a ? [d(u[0]), d(u[1])] : d(u),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Vn(e) {
  return function(...t) {
    if (te.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Be(
        `${or(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ia(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = K(s), a = K(o);
      e || (mt(o, a) && fe(i, "get", o), fe(i, "get", a));
      const { has: l } = Tn(i), f = t ? Ar : e ? Wn : ge;
      if (l.call(i, o))
        return f(s.get(o));
      if (l.call(i, a))
        return f(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && fe(K(o), "iterate", Ct), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = K(s), a = K(o);
      return e || (mt(o, a) && fe(i, "has", o), fe(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
    },
    forEach(o, s) {
      const i = this, a = i.__v_raw, l = K(a), f = t ? Ar : e ? Wn : ge;
      return !e && fe(l, "iterate", Ct), a.forEach((d, u) => o.call(s, f(d), f(u), i));
    }
  };
  return ie(
    n,
    e ? {
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear")
    } : {
      add(o) {
        !t && !Oe(o) && !Je(o) && (o = K(o));
        const s = K(this);
        return Tn(s).has.call(s, o) || (s.add(o), Qe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Oe(s) && !Je(s) && (s = K(s));
        const i = K(this), { has: a, get: l } = Tn(i);
        let f = a.call(i, o);
        f ? te.NODE_ENV !== "production" && Io(i, a, o) : (o = K(o), f = a.call(i, o));
        const d = l.call(i, o);
        return i.set(o, s), f ? mt(s, d) && Qe(i, "set", o, s, d) : Qe(i, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: i, get: a } = Tn(s);
        let l = i.call(s, o);
        l ? te.NODE_ENV !== "production" && Io(s, i, o) : (o = K(o), l = i.call(s, o));
        const f = a ? a.call(s, o) : void 0, d = s.delete(o);
        return l && Qe(s, "delete", o, void 0, f), d;
      },
      clear() {
        const o = K(this), s = o.size !== 0, i = te.NODE_ENV !== "production" ? It(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return s && Qe(
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
    n[o] = Sa(o, e, t);
  }), n;
}
function ar(e, t) {
  const n = Ia(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    q(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Ca = {
  get: /* @__PURE__ */ ar(!1, !1)
}, Ta = {
  get: /* @__PURE__ */ ar(!1, !0)
}, Va = {
  get: /* @__PURE__ */ ar(!0, !1)
}, Aa = {
  get: /* @__PURE__ */ ar(!0, !0)
};
function Io(e, t, n) {
  const r = K(n);
  if (r !== n && t.call(e, r)) {
    const o = Gr(e);
    Be(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap();
function Ra(e) {
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
function Pa(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ra(Gr(e));
}
function On(e) {
  return Je(e) ? e : lr(
    e,
    !1,
    wa,
    Ca,
    Ls
  );
}
function Ma(e) {
  return lr(
    e,
    !1,
    xa,
    Ta,
    Hs
  );
}
function Kn(e) {
  return lr(
    e,
    !0,
    Oa,
    Va,
    Us
  );
}
function tt(e) {
  return lr(
    e,
    !0,
    Da,
    Aa,
    Bs
  );
}
function lr(e, t, n, r, o) {
  if (!ee(e))
    return te.NODE_ENV !== "production" && Be(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Pa(e);
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
function Tt(e) {
  return Je(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function pn(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function ka(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && cn(e, "__v_skip", !0), e;
}
const ge = (e) => ee(e) ? On(e) : e, Wn = (e) => ee(e) ? Kn(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function He(e) {
  return $a(e, !1);
}
function $a(e, t) {
  return ce(e) ? e : new ja(e, t);
}
class ja {
  constructor(t, n) {
    this.dep = new eo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : K(t), this._value = n ? t : ge(t), this.__v_isShallow = n;
  }
  get value() {
    return te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || Je(t);
    t = r ? t : K(t), mt(t, n) && (this._rawValue = t, this._value = r ? t : ge(t), te.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function he(e) {
  return ce(e) ? e.value : e;
}
const Fa = {
  get: (e, t, n) => t === "__v_raw" ? e : he(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ce(o) && !ce(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ks(e) {
  return Tt(e) ? e : new Proxy(e, Fa);
}
function La(e) {
  te.NODE_ENV !== "production" && !pn(e) && Be("toRefs() expects a reactive object but received a plain one.");
  const t = k(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ua(e, n);
  return t;
}
class Ha {
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
    return ba(K(this._object), this._key);
  }
}
function Ua(e, t, n) {
  const r = e[t];
  return ce(r) ? r : new Ha(e, t, n);
}
class Ba {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new eo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Ts(this, !0), !0;
  }
  get value() {
    const t = te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Rs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : te.NODE_ENV !== "production" && Be("Write operation failed: computed value is readonly");
  }
}
function Ka(e, t, n = !1) {
  let r, o;
  return F(e) ? r = e : (r = e.get, o = e.set), new Ba(r, o, n);
}
const An = {}, Jn = /* @__PURE__ */ new WeakMap();
let St;
function Wa(e, t = !1, n = St) {
  if (n) {
    let r = Jn.get(n);
    r || Jn.set(n, r = []), r.push(e);
  } else te.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ja(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, f = (y) => {
    (n.onWarn || Be)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (y) => o ? y : Oe(y) || o === !1 || o === 0 ? lt(y, 1) : lt(y);
  let u, g, _, D, A = !1, Y = !1;
  if (ce(e) ? (g = () => e.value, A = Oe(e)) : Tt(e) ? (g = () => d(e), A = !0) : k(e) ? (Y = !0, A = e.some((y) => Tt(y) || Oe(y)), g = () => e.map((y) => {
    if (ce(y))
      return y.value;
    if (Tt(y))
      return d(y);
    if (F(y))
      return l ? l(y, 2) : y();
    te.NODE_ENV !== "production" && f(y);
  })) : F(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (_) {
      Ke();
      try {
        _();
      } finally {
        We();
      }
    }
    const y = St;
    St = u;
    try {
      return l ? l(e, 3, [D]) : e(D);
    } finally {
      St = y;
    }
  } : (g = de, te.NODE_ENV !== "production" && f(e)), t && o) {
    const y = g, b = o === !0 ? 1 / 0 : o;
    g = () => lt(y(), b);
  }
  const L = ga(), j = () => {
    u.stop(), L && L.active && Yr(L.effects, u);
  };
  if (s && t) {
    const y = t;
    t = (...b) => {
      y(...b), j();
    };
  }
  let V = Y ? new Array(e.length).fill(An) : An;
  const B = (y) => {
    if (!(!(u.flags & 1) || !u.dirty && !y))
      if (t) {
        const b = u.run();
        if (o || A || (Y ? b.some((T, R) => mt(T, V[R])) : mt(b, V))) {
          _ && _();
          const T = St;
          St = u;
          try {
            const R = [
              b,
              // pass undefined as the old value when it's changed for the first time
              V === An ? void 0 : Y && V[0] === An ? [] : V,
              D
            ];
            V = b, l ? l(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            St = T;
          }
        }
      } else
        u.run();
  };
  return a && a(B), u = new Is(g), u.scheduler = i ? () => i(B, !1) : B, D = (y) => Wa(y, !1, u), _ = u.onStop = () => {
    const y = Jn.get(u);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const b of y) b();
      Jn.delete(u);
    }
  }, te.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? r ? B(!0) : V = u.run() : i ? i(B.bind(null, !0), !0) : u.run(), j.pause = u.pause.bind(u), j.resume = u.resume.bind(u), j.stop = j, j;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ce(e))
    lt(e.value, t, n);
  else if (k(e))
    for (let r = 0; r < e.length; r++)
      lt(e[r], t, n);
  else if (Ns(e) || It(e))
    e.forEach((r) => {
      lt(r, t, n);
    });
  else if (nr(e)) {
    for (const r in e)
      lt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && lt(e[r], t, n);
  }
  return e;
}
var h = {};
const Vt = [];
function Pn(e) {
  Vt.push(e);
}
function Mn() {
  Vt.pop();
}
let yr = !1;
function S(e, ...t) {
  if (yr) return;
  yr = !0, Ke();
  const n = Vt.length ? Vt[Vt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Ya();
  if (r)
    qt(
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
          ({ vnode: s }) => `at <${hr(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...qa(o)), console.warn(...s);
  }
  We(), yr = !1;
}
function Ya() {
  let e = Vt[Vt.length - 1];
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
function qa(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Ga(n));
  }), t;
}
function Ga({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${hr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...za(e.props), s] : [o + s];
}
function za(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ws(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ws(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ce(t) ? (t = Ws(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
}
const to = {
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
function qt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    xn(o, t, n);
  }
}
function ot(e, t, n, r) {
  if (F(e)) {
    const o = qt(e, t, n, r);
    return o && qr(o) && o.catch((s) => {
      xn(s, t, n);
    }), o;
  }
  if (k(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(ot(e[s], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && S(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function xn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = h.NODE_ENV !== "production" ? to[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, f) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      Ke(), qt(s, null, 10, [
        e,
        l,
        f
      ]), We();
      return;
    }
  }
  Xa(e, n, o, r, i);
}
function Xa(e, t, n, r = !0, o = !1) {
  if (h.NODE_ENV !== "production") {
    const s = to[t];
    if (n && Pn(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Mn(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Ne = [];
let Ze = -1;
const Kt = [];
let pt = null, Ft = 0;
const Js = /* @__PURE__ */ Promise.resolve();
let Yn = null;
const Za = 100;
function no(e) {
  const t = Yn || Js;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qa(e) {
  let t = Ze + 1, n = Ne.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Ne[r], s = hn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function cr(e) {
  if (!(e.flags & 1)) {
    const t = hn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hn(n) ? Ne.push(e) : Ne.splice(Qa(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  Yn || (Yn = Js.then(zs));
}
function qs(e) {
  k(e) ? Kt.push(...e) : pt && e.id === -1 ? pt.splice(Ft + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Ys();
}
function Co(e, t, n = Ze + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ne.length; n++) {
    const r = Ne[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && ro(t, r))
        continue;
      Ne.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Gs(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, r) => hn(n) - hn(r)
    );
    if (Kt.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ft = 0; Ft < pt.length; Ft++) {
      const n = pt[Ft];
      h.NODE_ENV !== "production" && ro(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    pt = null, Ft = 0;
  }
}
const hn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zs(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => ro(e, n) : de;
  try {
    for (Ze = 0; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), qt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      n && (n.flags &= -2);
    }
    Ze = -1, Ne.length = 0, Gs(e), Yn = null, (Ne.length || Kt.length) && zs(e);
  }
}
function ro(e, t) {
  const n = e.get(t) || 0;
  if (n > Za) {
    const r = t.i, o = r && Ti(r.type);
    return xn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nt = !1;
const kn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (wn().__VUE_HMR_RUNTIME__ = {
  createRecord: Er(Xs),
  rerender: Er(nl),
  reload: Er(rl)
});
const Rt = /* @__PURE__ */ new Map();
function el(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (Xs(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function tl(e) {
  Rt.get(e.type.__hmrId).instances.delete(e);
}
function Xs(e, t) {
  return Rt.has(e) ? !1 : (Rt.set(e, {
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return Vi(e) ? e.__vccOpts : e;
}
function nl(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, qn(r.type).render = t), r.renderCache = [], nt = !0, r.update(), nt = !1;
  }));
}
function rl(e, t) {
  const n = Rt.get(e);
  if (!n) return;
  t = qn(t), To(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = qn(s.type);
    let a = kn.get(i);
    a || (i !== n.initialDef && To(i, t), kn.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? cr(() => {
      nt = !0, s.parent.update(), nt = !1, a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  qs(() => {
    kn.clear();
  });
}
function To(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Er(e) {
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
let et, en = [], Rr = !1;
function Dn(e, ...t) {
  et ? et.emit(e, ...t) : Rr || en.push({ event: e, args: t });
}
function Zs(e, t) {
  var n, r;
  et = e, et ? (et.enabled = !0, en.forEach(({ event: o, args: s }) => et.emit(o, ...s)), en = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Zs(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Rr = !0, en = []);
  }, 3e3)) : (Rr = !0, en = []);
}
function ol(e, t) {
  Dn("app:init", e, t, {
    Fragment: je,
    Text: Sn,
    Comment: Me,
    Static: Fn
  });
}
function sl(e) {
  Dn("app:unmount", e);
}
const il = /* @__PURE__ */ oo(
  "component:added"
  /* COMPONENT_ADDED */
), Qs = /* @__PURE__ */ oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), al = /* @__PURE__ */ oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), ll = (e) => {
  et && typeof et.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !et.cleanupBuffer(e) && al(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oo(e) {
  return (t) => {
    Dn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const cl = /* @__PURE__ */ ei(
  "perf:start"
  /* PERFORMANCE_START */
), ul = /* @__PURE__ */ ei(
  "perf:end"
  /* PERFORMANCE_END */
);
function ei(e) {
  return (t, n, r) => {
    Dn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function fl(e, t, n) {
  Dn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let we = null, ti = null;
function Gn(e) {
  const t = we;
  return we = e, ti = e && e.type.__scopeId || null, t;
}
function dl(e, t = we, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Uo(-1);
    const s = Gn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Gn(s), r._d && Uo(1);
    }
    return h.NODE_ENV !== "production" && Qs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ni(e) {
  Qi(e) && S("Do not use built-in directive ids as custom directive id: " + e);
}
function pl(e, t) {
  if (we === null)
    return h.NODE_ENV !== "production" && S("withDirectives can only be used inside render functions."), e;
  const n = pr(we), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, l = Z] = t[o];
    s && (F(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && lt(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function wt(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const a = o[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[r];
    l && (Ke(), ot(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), We());
  }
}
const hl = Symbol("_vte"), gl = (e) => e.__isTeleport;
function so(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, so(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ri(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const _l = /* @__PURE__ */ new WeakSet();
function sn(e, t, n, r, o = !1) {
  if (k(e)) {
    e.forEach(
      (D, A) => sn(
        D,
        t && (k(t) ? t[A] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (an(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && sn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? pr(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e;
  if (h.NODE_ENV !== "production" && !a) {
    S(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = a.refs === Z ? a.refs = {} : a.refs, u = a.setupState, g = K(u), _ = u === Z ? () => !1 : (D) => h.NODE_ENV !== "production" && (q(g, D) && !ce(g[D]) && S(
    `Template ref "${D}" used on a non-ref value. It will not work in the production build.`
  ), _l.has(g[D])) ? !1 : q(g, D);
  if (f != null && f !== l && (oe(f) ? (d[f] = null, _(f) && (u[f] = null)) : ce(f) && (f.value = null)), F(l))
    qt(l, a, 12, [i, d]);
  else {
    const D = oe(l), A = ce(l);
    if (D || A) {
      const Y = () => {
        if (e.f) {
          const L = D ? _(l) ? u[l] : d[l] : l.value;
          o ? k(L) && Yr(L, s) : k(L) ? L.includes(s) || L.push(s) : D ? (d[l] = [s], _(l) && (u[l] = d[l])) : (l.value = [s], e.k && (d[e.k] = l.value));
        } else D ? (d[l] = i, _(l) && (u[l] = i)) : A ? (l.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && S("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (Y.id = -1, Re(Y, n)) : Y();
    } else h.NODE_ENV !== "production" && S("Invalid template ref type:", l, `(${typeof l})`);
  }
}
wn().requestIdleCallback;
wn().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, io = (e) => e.type.__isKeepAlive;
function ml(e, t) {
  si(e, "a", t);
}
function bl(e, t) {
  si(e, "da", t);
}
function si(e, t, n = _e) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ur(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      io(o.parent.vnode) && yl(r, t, n, o), o = o.parent;
  }
}
function yl(e, t, n, r) {
  const o = ur(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  lo(() => {
    Yr(r[t], o);
  }, n);
}
function ur(e, t, n = _e, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ke();
      const a = In(n), l = ot(t, n, e, i);
      return a(), We(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const o = Dt(to[e].replace(/ hook$/, ""));
    S(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ut = (e) => (t, n = _e) => {
  (!_n || e === "sp") && ur(e, (...r) => t(...r), n);
}, El = ut("bm"), ao = ut("m"), vl = ut(
  "bu"
), Nl = ut("u"), wl = ut(
  "bum"
), lo = ut("um"), Ol = ut(
  "sp"
), xl = ut("rtg"), Dl = ut("rtc");
function Sl(e, t = _e) {
  ur("ec", e, t);
}
const Il = Symbol.for("v-ndc");
function Cl(e, t, n, r) {
  let o;
  const s = n, i = k(e);
  if (i || oe(e)) {
    const a = i && Tt(e);
    let l = !1, f = !1;
    a && (l = !Oe(e), f = Je(e), e = ir(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        l ? f ? Wn(ge(e[d])) : ge(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && S(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let a = 0; a < e; a++)
      o[a] = t(a + 1, a, void 0, s);
  } else if (ee(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (a, l) => t(a, l, void 0, s)
      );
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const d = a[l];
        o[l] = t(e[d], d, l, s);
      }
    }
  else
    o = [];
  return o;
}
const Pr = (e) => e ? Ii(e) ? pr(e) : Pr(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? tt(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? tt(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? tt(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? tt(e.refs) : e.refs,
    $parent: (e) => Pr(e.parent),
    $root: (e) => Pr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => li(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = no.bind(e.proxy)),
    $watch: (e) => lc.bind(e)
  })
), co = (e) => e === "_" || e === "$", vr = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (vr(r, t))
          return i[t] = 1, r[t];
        if (o !== Z && q(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && q(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== Z && q(n, t))
          return i[t] = 4, n[t];
        Mr && (i[t] = 0);
      }
    }
    const d = At[t];
    let u, g;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), h.NODE_ENV !== "production" && Zn()) : h.NODE_ENV !== "production" && t === "$slots" && fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Z && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, q(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && we && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && co(t[0]) && q(o, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === we && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return vr(o, t) ? (o[t] = n, !0) : h.NODE_ENV !== "production" && o.__isScriptSetup && q(o, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Z && q(r, t) ? (r[t] = n, !0) : q(e.props, t) ? (h.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && S(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let a;
    return !!n[i] || e !== Z && q(e, i) || vr(t, i) || (a = s[0]) && q(a, i) || q(r, i) || q(At, i) || q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (ii.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Tl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(At).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => At[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: de
    });
  }), t;
}
function Vl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: de
    });
  });
}
function Al(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(K(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (co(r[0])) {
        S(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: de
      });
    }
  });
}
function Vo(e) {
  return k(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Rl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? S(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Mr = !0;
function Pl(e) {
  const t = li(e), n = e.proxy, r = e.ctx;
  Mr = !1, t.beforeCreate && Ao(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: g,
    beforeUpdate: _,
    updated: D,
    activated: A,
    deactivated: Y,
    beforeDestroy: L,
    beforeUnmount: j,
    destroyed: V,
    unmounted: B,
    render: y,
    renderTracked: b,
    renderTriggered: T,
    errorCaptured: R,
    serverPrefetch: P,
    // public API
    expose: z,
    inheritAttrs: ue,
    // assets
    components: re,
    directives: se,
    filters: ye
  } = t, pe = h.NODE_ENV !== "production" ? Rl() : null;
  if (h.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const J in U)
        pe("Props", J);
  }
  if (f && Ml(f, r, pe), i)
    for (const U in i) {
      const J = i[U];
      F(J) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, U, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[U] = J.bind(n), h.NODE_ENV !== "production" && pe("Methods", U)) : h.NODE_ENV !== "production" && S(
        `Method "${U}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !F(o) && S(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = o.call(n, n);
    if (h.NODE_ENV !== "production" && qr(U) && S(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(U))
      h.NODE_ENV !== "production" && S("data() should return an object.");
    else if (e.data = On(U), h.NODE_ENV !== "production")
      for (const J in U)
        pe("Data", J), co(J[0]) || Object.defineProperty(r, J, {
          configurable: !0,
          enumerable: !0,
          get: () => U[J],
          set: de
        });
  }
  if (Mr = !0, s)
    for (const U in s) {
      const J = s[U], ke = F(J) ? J.bind(n, n) : F(J.get) ? J.get.bind(n, n) : de;
      h.NODE_ENV !== "production" && ke === de && S(`Computed property "${U}" has no getter.`);
      const Et = !F(J) && F(J.set) ? J.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        S(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : de, vt = _o({
        get: ke,
        set: Et
      });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (ft) => vt.value = ft
      }), h.NODE_ENV !== "production" && pe("Computed", U);
    }
  if (a)
    for (const U in a)
      ai(a[U], r, n, U);
  if (l) {
    const U = F(l) ? l.call(n) : l;
    Reflect.ownKeys(U).forEach((J) => {
      Hl(J, U[J]);
    });
  }
  d && Ao(d, e, "c");
  function ae(U, J) {
    k(J) ? J.forEach((ke) => U(ke.bind(n))) : J && U(J.bind(n));
  }
  if (ae(El, u), ae(ao, g), ae(vl, _), ae(Nl, D), ae(ml, A), ae(bl, Y), ae(Sl, R), ae(Dl, b), ae(xl, T), ae(wl, j), ae(lo, B), ae(Ol, P), k(z))
    if (z.length) {
      const U = e.exposed || (e.exposed = {});
      z.forEach((J) => {
        Object.defineProperty(U, J, {
          get: () => n[J],
          set: (ke) => n[J] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === de && (e.render = y), ue != null && (e.inheritAttrs = ue), re && (e.components = re), se && (e.directives = se), P && oi(e);
}
function Ml(e, t, n = de) {
  k(e) && (e = kr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = $n(
      o.from || r,
      o.default,
      !0
    ) : s = $n(o.from || r) : s = $n(o), ce(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ao(e, t, n) {
  ot(
    k(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ai(e, t, n, r) {
  let o = r.includes(".") ? Ei(n, r) : () => n[r];
  if (oe(e)) {
    const s = t[e];
    F(s) ? Jt(o, s) : h.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e}"`, s);
  } else if (F(e))
    Jt(o, e.bind(n));
  else if (ee(e))
    if (k(e))
      e.forEach((s) => ai(s, t, n, r));
    else {
      const s = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(s) ? Jt(o, s, e) : h.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && S(`Invalid watch option: "${r}"`, e);
}
function li(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (f) => zn(l, f, i, !0)
  ), zn(l, t, i)), ee(t) && s.set(t, l), l;
}
function zn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && zn(e, s, n, !0), o && o.forEach(
    (i) => zn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      h.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = kl[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const kl = {
  data: Ro,
  props: Po,
  emits: Po,
  // objects
  methods: tn,
  computed: tn,
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
  components: tn,
  directives: tn,
  // watch
  watch: jl,
  // provide / inject
  provide: Ro,
  inject: $l
};
function Ro(e, t) {
  return t ? e ? function() {
    return ie(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $l(e, t) {
  return tn(kr(e), kr(t));
}
function kr(e) {
  if (k(e)) {
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
function tn(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Po(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Vo(e),
    Vo(t ?? {})
  ) : t;
}
function jl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ve(e[r], t[r]);
  return n;
}
function ci() {
  return {
    app: null,
    config: {
      isNativeTag: Xi,
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
let Fl = 0;
function Ll(e, t) {
  return function(r, o = null) {
    F(r) || (r = ie({}, r)), o != null && !ee(o) && (h.NODE_ENV !== "production" && S("root props passed to app.mount() must be an object."), o = null);
    const s = ci(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = s.app = {
      _uid: Fl++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Jo,
      get config() {
        return s.config;
      },
      set config(d) {
        h.NODE_ENV !== "production" && S(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? h.NODE_ENV !== "production" && S("Plugin has already been applied to target app.") : d && F(d.install) ? (i.add(d), d.install(f, ...u)) : F(d) ? (i.add(d), d(f, ...u)) : h.NODE_ENV !== "production" && S(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && S(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return h.NODE_ENV !== "production" && Hr(d, s.config), u ? (h.NODE_ENV !== "production" && s.components[d] && S(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return h.NODE_ENV !== "production" && ni(d), u ? (h.NODE_ENV !== "production" && s.directives[d] && S(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, g) {
        if (l)
          h.NODE_ENV !== "production" && S(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && S(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = f._ceVNode || rt(r, o);
          return _.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const D = bt(_);
            D.el = null, e(D, d, g);
          }), e(_, d, g), l = !0, f._container = d, d.__vue_app__ = f, h.NODE_ENV !== "production" && (f._instance = _.component, ol(f, Jo)), pr(_.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && S(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), a.push(d);
      },
      unmount() {
        l ? (ot(
          a,
          f._instance,
          16
        ), e(null, f._container), h.NODE_ENV !== "production" && (f._instance = null, sl(f)), delete f._container.__vue_app__) : h.NODE_ENV !== "production" && S("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return h.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? S(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : S(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = u, f;
      },
      runWithContext(d) {
        const u = Wt;
        Wt = f;
        try {
          return d();
        } finally {
          Wt = u;
        }
      }
    };
    return f;
  };
}
let Wt = null;
function Hl(e, t) {
  if (!_e)
    h.NODE_ENV !== "production" && S("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const r = _e.parent && _e.parent.provides;
    r === n && (n = _e.provides = Object.create(r)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const r = go();
  if (r || Wt) {
    let o = Wt ? Wt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ul(e, t, n, r = !1) {
  const o = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  h.NODE_ENV !== "production" && gi(t || {}, o, e), n ? e.props = r ? o : Ma(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Bl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Kl(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = K(o), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Bl(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let g = d[u];
        if (fr(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (l)
          if (q(s, g))
            _ !== s[g] && (s[g] = _, f = !0);
          else {
            const D = Te(g);
            o[D] = $r(
              l,
              a,
              D,
              _,
              e,
              !1
            );
          }
        else
          _ !== s[g] && (s[g] = _, f = !0);
      }
    }
  } else {
    pi(e, t, o, s) && (f = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ce(u)) === u || !q(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = $r(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (s !== a)
      for (const u in s)
        (!t || !q(t, u)) && (delete s[u], f = !0);
  }
  f && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && gi(t || {}, o, e);
}
function pi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (nn(l))
        continue;
      const f = t[l];
      let d;
      o && q(o, d = Te(l)) ? !s || !s.includes(d) ? n[d] = f : (a || (a = {}))[d] = f : fr(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, i = !0);
    }
  if (s) {
    const l = K(n), f = a || Z;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = $r(
        o,
        l,
        u,
        f[u],
        e,
        !q(f, u)
      );
    }
  }
  return i;
}
function $r(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const a = q(i, "default");
    if (a && r === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && F(l)) {
        const { propsDefaults: f } = o;
        if (n in f)
          r = f[n];
        else {
          const d = In(o);
          r = f[n] = l.call(
            null,
            t
          ), d();
        }
      } else
        r = l;
      o.ce && o.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !a ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Ce(n)) && (r = !0));
  }
  return r;
}
const Wl = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
  const r = n ? Wl : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!F(e)) {
    const d = (u) => {
      l = !0;
      const [g, _] = hi(u, t, !0);
      ie(i, g), _ && a.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !l)
    return ee(e) && r.set(e, Bt), Bt;
  if (k(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !oe(s[d]) && S("props must be strings when using array syntax.", s[d]);
      const u = Te(s[d]);
      Mo(u) && (i[u] = Z);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !ee(s) && S("invalid props options", s);
    for (const d in s) {
      const u = Te(d);
      if (Mo(u)) {
        const g = s[d], _ = i[u] = k(g) || F(g) ? { type: g } : ie({}, g), D = _.type;
        let A = !1, Y = !0;
        if (k(D))
          for (let L = 0; L < D.length; ++L) {
            const j = D[L], V = F(j) && j.name;
            if (V === "Boolean") {
              A = !0;
              break;
            } else V === "String" && (Y = !1);
          }
        else
          A = F(D) && D.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = A, _[
          1
          /* shouldCastTrue */
        ] = Y, (A || q(_, "default")) && a.push(u);
      }
    }
  }
  const f = [i, a];
  return ee(e) && r.set(e, f), f;
}
function Mo(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (h.NODE_ENV !== "production" && S(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Jl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const r = K(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Te(i));
  for (const i in o) {
    let a = o[i];
    a != null && Yl(
      i,
      r[i],
      a,
      h.NODE_ENV !== "production" ? tt(r) : r,
      !s.includes(i)
    );
  }
}
function Yl(e, t, n, r, o) {
  const { type: s, required: i, validator: a, skipCheck: l } = n;
  if (i && o) {
    S('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !l) {
      let f = !1;
      const d = k(s) ? s : [s], u = [];
      for (let g = 0; g < d.length && !f; g++) {
        const { valid: _, expectedType: D } = Gl(t, d[g]);
        u.push(D || ""), f = _;
      }
      if (!f) {
        S(zl(e, t, u));
        return;
      }
    }
    a && !a(t, r) && S('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ql = /* @__PURE__ */ ct(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Gl(e, t) {
  let n;
  const r = Jl(t);
  if (r === "null")
    n = e === null;
  else if (ql(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = k(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function zl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(or).join(" | ")}`;
  const o = n[0], s = Gr(t), i = ko(t, o), a = ko(t, s);
  return n.length === 1 && $o(o) && !Xl(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, $o(s) && (r += `with value ${a}.`), r;
}
function ko(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $o(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Xl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const uo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", fo = (e) => k(e) ? e.map(Le) : [Le(e)], Zl = (e, t, n) => {
  if (t._n)
    return t;
  const r = dl((...o) => (h.NODE_ENV !== "production" && _e && !(n === null && we) && !(n && n.root !== _e.root) && S(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fo(t(...o))), n);
  return r._c = !1, r;
}, _i = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uo(o)) continue;
    const s = e[o];
    if (F(s))
      t[o] = Zl(o, s, r);
    else if (s != null) {
      h.NODE_ENV !== "production" && S(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = fo(s);
      t[o] = () => i;
    }
  }
}, mi = (e, t) => {
  h.NODE_ENV !== "production" && !io(e.vnode) && S(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fo(t);
  e.slots.default = () => n;
}, jr = (e, t, n) => {
  for (const r in t)
    (n || !uo(r)) && (e[r] = t[r]);
}, Ql = (e, t, n) => {
  const r = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && cn(r, "__", o, !0);
    const s = t._;
    s ? (jr(r, t, n), n && cn(r, "_", s, !0)) : _i(t, r);
  } else t && mi(e, t);
}, ec = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? h.NODE_ENV !== "production" && nt ? (jr(o, t, n), Qe(e, "set", "$slots")) : n && a === 1 ? s = !1 : jr(o, t, n) : (s = !t.$stable, _i(t, o)), i = t;
  } else t && (mi(e, t), i = { default: 1 });
  if (s)
    for (const a in o)
      !uo(a) && i[a] == null && delete o[a];
};
let Xt, _t;
function kt(e, t) {
  e.appContext.config.performance && Xn() && _t.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && cl(e, t, Xn() ? _t.now() : Date.now());
}
function $t(e, t) {
  if (e.appContext.config.performance && Xn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    _t.mark(r), _t.measure(
      `<${hr(e, e.type)}> ${t}`,
      n,
      r
    ), _t.clearMarks(n), _t.clearMarks(r);
  }
  h.NODE_ENV !== "production" && ul(e, t, Xn() ? _t.now() : Date.now());
}
function Xn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, _t = window.performance) : Xt = !1), Xt;
}
function tc() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = gc;
function nc(e) {
  return rc(e);
}
function rc(e, t) {
  tc();
  const n = wn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Zs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: l,
    setText: f,
    setElementText: d,
    parentNode: u,
    nextSibling: g,
    setScopeId: _ = de,
    insertStaticContent: D
  } = e, A = (c, p, m, N = null, E = null, v = null, I = void 0, x = null, O = h.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (N = Ye(c), W(c, E, v, !0), c = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: w, ref: $, shapeFlag: C } = p;
    switch (w) {
      case Sn:
        Y(c, p, m, N);
        break;
      case Me:
        L(c, p, m, N);
        break;
      case Fn:
        c == null ? j(p, m, N, I) : h.NODE_ENV !== "production" && V(c, p, m, I);
        break;
      case je:
        se(
          c,
          p,
          m,
          N,
          E,
          v,
          I,
          x,
          O
        );
        break;
      default:
        C & 1 ? b(
          c,
          p,
          m,
          N,
          E,
          v,
          I,
          x,
          O
        ) : C & 6 ? ye(
          c,
          p,
          m,
          N,
          E,
          v,
          I,
          x,
          O
        ) : C & 64 || C & 128 ? w.process(
          c,
          p,
          m,
          N,
          E,
          v,
          I,
          x,
          O,
          Nt
        ) : h.NODE_ENV !== "production" && S("Invalid VNode type:", w, `(${typeof w})`);
    }
    $ != null && E ? sn($, c && c.ref, v, p || c, !p) : $ == null && c && c.ref != null && sn(c.ref, null, v, c, !0);
  }, Y = (c, p, m, N) => {
    if (c == null)
      r(
        p.el = a(p.children),
        m,
        N
      );
    else {
      const E = p.el = c.el;
      p.children !== c.children && f(E, p.children);
    }
  }, L = (c, p, m, N) => {
    c == null ? r(
      p.el = l(p.children || ""),
      m,
      N
    ) : p.el = c.el;
  }, j = (c, p, m, N) => {
    [c.el, c.anchor] = D(
      c.children,
      p,
      m,
      N,
      c.el,
      c.anchor
    );
  }, V = (c, p, m, N) => {
    if (p.children !== c.children) {
      const E = g(c.anchor);
      y(c), [p.el, p.anchor] = D(
        p.children,
        m,
        E,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, B = ({ el: c, anchor: p }, m, N) => {
    let E;
    for (; c && c !== p; )
      E = g(c), r(c, m, N), c = E;
    r(p, m, N);
  }, y = ({ el: c, anchor: p }) => {
    let m;
    for (; c && c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, b = (c, p, m, N, E, v, I, x, O) => {
    p.type === "svg" ? I = "svg" : p.type === "math" && (I = "mathml"), c == null ? T(
      p,
      m,
      N,
      E,
      v,
      I,
      x,
      O
    ) : z(
      c,
      p,
      E,
      v,
      I,
      x,
      O
    );
  }, T = (c, p, m, N, E, v, I, x) => {
    let O, w;
    const { props: $, shapeFlag: C, transition: M, dirs: H } = c;
    if (O = c.el = i(
      c.type,
      v,
      $ && $.is,
      $
    ), C & 8 ? d(O, c.children) : C & 16 && P(
      c.children,
      O,
      null,
      N,
      E,
      Nr(c, v),
      I,
      x
    ), H && wt(c, null, N, "created"), R(O, c, c.scopeId, I, N), $) {
      for (const ne in $)
        ne !== "value" && !nn(ne) && s(O, ne, null, $[ne], v, N);
      "value" in $ && s(O, "value", null, $.value, v), (w = $.onVnodeBeforeMount) && Xe(w, N, c);
    }
    h.NODE_ENV !== "production" && (cn(O, "__vnode", c, !0), cn(O, "__vueParentComponent", N, !0)), H && wt(c, null, N, "beforeMount");
    const G = oc(E, M);
    G && M.beforeEnter(O), r(O, p, m), ((w = $ && $.onVnodeMounted) || G || H) && Re(() => {
      w && Xe(w, N, c), G && M.enter(O), H && wt(c, null, N, "mounted");
    }, E);
  }, R = (c, p, m, N, E) => {
    if (m && _(c, m), N)
      for (let v = 0; v < N.length; v++)
        _(c, N[v]);
    if (E) {
      let v = E.subTree;
      if (h.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = po(v.children) || v), p === v || wi(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const I = E.vnode;
        R(
          c,
          I,
          I.scopeId,
          I.slotScopeIds,
          E.parent
        );
      }
    }
  }, P = (c, p, m, N, E, v, I, x, O = 0) => {
    for (let w = O; w < c.length; w++) {
      const $ = c[w] = x ? gt(c[w]) : Le(c[w]);
      A(
        null,
        $,
        p,
        m,
        N,
        E,
        v,
        I,
        x
      );
    }
  }, z = (c, p, m, N, E, v, I) => {
    const x = p.el = c.el;
    h.NODE_ENV !== "production" && (x.__vnode = p);
    let { patchFlag: O, dynamicChildren: w, dirs: $ } = p;
    O |= c.patchFlag & 16;
    const C = c.props || Z, M = p.props || Z;
    let H;
    if (m && Ot(m, !1), (H = M.onVnodeBeforeUpdate) && Xe(H, m, p, c), $ && wt(p, c, m, "beforeUpdate"), m && Ot(m, !0), h.NODE_ENV !== "production" && nt && (O = 0, I = !1, w = null), (C.innerHTML && M.innerHTML == null || C.textContent && M.textContent == null) && d(x, ""), w ? (ue(
      c.dynamicChildren,
      w,
      x,
      m,
      N,
      Nr(p, E),
      v
    ), h.NODE_ENV !== "production" && jn(c, p)) : I || ke(
      c,
      p,
      x,
      null,
      m,
      N,
      Nr(p, E),
      v,
      !1
    ), O > 0) {
      if (O & 16)
        re(x, C, M, m, E);
      else if (O & 2 && C.class !== M.class && s(x, "class", null, M.class, E), O & 4 && s(x, "style", C.style, M.style, E), O & 8) {
        const G = p.dynamicProps;
        for (let ne = 0; ne < G.length; ne++) {
          const Q = G[ne], De = C[Q], Se = M[Q];
          (Se !== De || Q === "value") && s(x, Q, De, Se, E, m);
        }
      }
      O & 1 && c.children !== p.children && d(x, p.children);
    } else !I && w == null && re(x, C, M, m, E);
    ((H = M.onVnodeUpdated) || $) && Re(() => {
      H && Xe(H, m, p, c), $ && wt(p, c, m, "updated");
    }, N);
  }, ue = (c, p, m, N, E, v, I) => {
    for (let x = 0; x < p.length; x++) {
      const O = c[x], w = p[x], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(O, w) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? u(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      A(
        O,
        w,
        $,
        null,
        N,
        E,
        v,
        I,
        !0
      );
    }
  }, re = (c, p, m, N, E) => {
    if (p !== m) {
      if (p !== Z)
        for (const v in p)
          !nn(v) && !(v in m) && s(
            c,
            v,
            p[v],
            null,
            E,
            N
          );
      for (const v in m) {
        if (nn(v)) continue;
        const I = m[v], x = p[v];
        I !== x && v !== "value" && s(c, v, x, I, E, N);
      }
      "value" in m && s(c, "value", p.value, m.value, E);
    }
  }, se = (c, p, m, N, E, v, I, x, O) => {
    const w = p.el = c ? c.el : a(""), $ = p.anchor = c ? c.anchor : a("");
    let { patchFlag: C, dynamicChildren: M, slotScopeIds: H } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || C & 2048) && (C = 0, O = !1, M = null), H && (x = x ? x.concat(H) : H), c == null ? (r(w, m, N), r($, m, N), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      $,
      E,
      v,
      I,
      x,
      O
    )) : C > 0 && C & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (ue(
      c.dynamicChildren,
      M,
      m,
      E,
      v,
      I,
      x
    ), h.NODE_ENV !== "production" ? jn(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || E && p === E.subTree) && jn(
        c,
        p,
        !0
        /* shallow */
      )
    )) : ke(
      c,
      p,
      m,
      $,
      E,
      v,
      I,
      x,
      O
    );
  }, ye = (c, p, m, N, E, v, I, x, O) => {
    p.slotScopeIds = x, c == null ? p.shapeFlag & 512 ? E.ctx.activate(
      p,
      m,
      N,
      I,
      O
    ) : pe(
      p,
      m,
      N,
      E,
      v,
      I,
      O
    ) : ae(c, p, O);
  }, pe = (c, p, m, N, E, v, I) => {
    const x = c.component = Oc(
      c,
      N,
      E
    );
    if (h.NODE_ENV !== "production" && x.type.__hmrId && el(x), h.NODE_ENV !== "production" && (Pn(c), kt(x, "mount")), io(c) && (x.ctx.renderer = Nt), h.NODE_ENV !== "production" && kt(x, "init"), Dc(x, !1, I), h.NODE_ENV !== "production" && $t(x, "init"), h.NODE_ENV !== "production" && nt && (c.el = null), x.asyncDep) {
      if (E && E.registerDep(x, U, I), !c.el) {
        const O = x.subTree = rt(Me);
        L(null, O, p, m), c.placeholder = O.el;
      }
    } else
      U(
        x,
        c,
        p,
        m,
        E,
        v,
        I
      );
    h.NODE_ENV !== "production" && (Mn(), $t(x, "mount"));
  }, ae = (c, p, m) => {
    const N = p.component = c.component;
    if (pc(c, p, m))
      if (N.asyncDep && !N.asyncResolved) {
        h.NODE_ENV !== "production" && Pn(p), J(N, p, m), h.NODE_ENV !== "production" && Mn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, U = (c, p, m, N, E, v, I) => {
    const x = () => {
      if (c.isMounted) {
        let { next: C, bu: M, u: H, parent: G, vnode: ne } = c;
        {
          const Ge = bi(c);
          if (Ge) {
            C && (C.el = ne.el, J(c, C, I)), Ge.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let Q = C, De;
        h.NODE_ENV !== "production" && Pn(C || c.vnode), Ot(c, !1), C ? (C.el = ne.el, J(c, C, I)) : C = ne, M && jt(M), (De = C.props && C.props.onVnodeBeforeUpdate) && Xe(De, G, C, ne), Ot(c, !0), h.NODE_ENV !== "production" && kt(c, "render");
        const Se = Fo(c);
        h.NODE_ENV !== "production" && $t(c, "render");
        const qe = c.subTree;
        c.subTree = Se, h.NODE_ENV !== "production" && kt(c, "patch"), A(
          qe,
          Se,
          // parent may have changed if it's in a teleport
          u(qe.el),
          // anchor may have changed if it's in a fragment
          Ye(qe),
          c,
          E,
          v
        ), h.NODE_ENV !== "production" && $t(c, "patch"), C.el = Se.el, Q === null && hc(c, Se.el), H && Re(H, E), (De = C.props && C.props.onVnodeUpdated) && Re(
          () => Xe(De, G, C, ne),
          E
        ), h.NODE_ENV !== "production" && Qs(c), h.NODE_ENV !== "production" && Mn();
      } else {
        let C;
        const { el: M, props: H } = p, { bm: G, m: ne, parent: Q, root: De, type: Se } = c, qe = an(p);
        Ot(c, !1), G && jt(G), !qe && (C = H && H.onVnodeBeforeMount) && Xe(C, Q, p), Ot(c, !0);
        {
          De.ce && // @ts-expect-error _def is private
          De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Se), h.NODE_ENV !== "production" && kt(c, "render");
          const Ge = c.subTree = Fo(c);
          h.NODE_ENV !== "production" && $t(c, "render"), h.NODE_ENV !== "production" && kt(c, "patch"), A(
            null,
            Ge,
            m,
            N,
            c,
            E,
            v
          ), h.NODE_ENV !== "production" && $t(c, "patch"), p.el = Ge.el;
        }
        if (ne && Re(ne, E), !qe && (C = H && H.onVnodeMounted)) {
          const Ge = p;
          Re(
            () => Xe(C, Q, Ge),
            E
          );
        }
        (p.shapeFlag & 256 || Q && an(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Re(c.a, E), c.isMounted = !0, h.NODE_ENV !== "production" && il(c), p = m = N = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Is(x);
    c.scope.off();
    const w = c.update = O.run.bind(O), $ = c.job = O.runIfDirty.bind(O);
    $.i = c, $.id = c.uid, O.scheduler = () => cr($), Ot(c, !0), h.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (C) => jt(c.rtc, C) : void 0, O.onTrigger = c.rtg ? (C) => jt(c.rtg, C) : void 0), w();
  }, J = (c, p, m) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Kl(c, p.props, N, m), ec(c, p.children, m), Ke(), Co(c), We();
  }, ke = (c, p, m, N, E, v, I, x, O = !1) => {
    const w = c && c.children, $ = c ? c.shapeFlag : 0, C = p.children, { patchFlag: M, shapeFlag: H } = p;
    if (M > 0) {
      if (M & 128) {
        vt(
          w,
          C,
          m,
          N,
          E,
          v,
          I,
          x,
          O
        );
        return;
      } else if (M & 256) {
        Et(
          w,
          C,
          m,
          N,
          E,
          v,
          I,
          x,
          O
        );
        return;
      }
    }
    H & 8 ? ($ & 16 && xe(w, E, v), C !== w && d(m, C)) : $ & 16 ? H & 16 ? vt(
      w,
      C,
      m,
      N,
      E,
      v,
      I,
      x,
      O
    ) : xe(w, E, v, !0) : ($ & 8 && d(m, ""), H & 16 && P(
      C,
      m,
      N,
      E,
      v,
      I,
      x,
      O
    ));
  }, Et = (c, p, m, N, E, v, I, x, O) => {
    c = c || Bt, p = p || Bt;
    const w = c.length, $ = p.length, C = Math.min(w, $);
    let M;
    for (M = 0; M < C; M++) {
      const H = p[M] = O ? gt(p[M]) : Le(p[M]);
      A(
        c[M],
        H,
        m,
        null,
        E,
        v,
        I,
        x,
        O
      );
    }
    w > $ ? xe(
      c,
      E,
      v,
      !0,
      !1,
      C
    ) : P(
      p,
      m,
      N,
      E,
      v,
      I,
      x,
      O,
      C
    );
  }, vt = (c, p, m, N, E, v, I, x, O) => {
    let w = 0;
    const $ = p.length;
    let C = c.length - 1, M = $ - 1;
    for (; w <= C && w <= M; ) {
      const H = c[w], G = p[w] = O ? gt(p[w]) : Le(p[w]);
      if (Zt(H, G))
        A(
          H,
          G,
          m,
          null,
          E,
          v,
          I,
          x,
          O
        );
      else
        break;
      w++;
    }
    for (; w <= C && w <= M; ) {
      const H = c[C], G = p[M] = O ? gt(p[M]) : Le(p[M]);
      if (Zt(H, G))
        A(
          H,
          G,
          m,
          null,
          E,
          v,
          I,
          x,
          O
        );
      else
        break;
      C--, M--;
    }
    if (w > C) {
      if (w <= M) {
        const H = M + 1, G = H < $ ? p[H].el : N;
        for (; w <= M; )
          A(
            null,
            p[w] = O ? gt(p[w]) : Le(p[w]),
            m,
            G,
            E,
            v,
            I,
            x,
            O
          ), w++;
      }
    } else if (w > M)
      for (; w <= C; )
        W(c[w], E, v, !0), w++;
    else {
      const H = w, G = w, ne = /* @__PURE__ */ new Map();
      for (w = G; w <= M; w++) {
        const Ee = p[w] = O ? gt(p[w]) : Le(p[w]);
        Ee.key != null && (h.NODE_ENV !== "production" && ne.has(Ee.key) && S(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), ne.set(Ee.key, w));
      }
      let Q, De = 0;
      const Se = M - G + 1;
      let qe = !1, Ge = 0;
      const Gt = new Array(Se);
      for (w = 0; w < Se; w++) Gt[w] = 0;
      for (w = H; w <= C; w++) {
        const Ee = c[w];
        if (De >= Se) {
          W(Ee, E, v, !0);
          continue;
        }
        let ze;
        if (Ee.key != null)
          ze = ne.get(Ee.key);
        else
          for (Q = G; Q <= M; Q++)
            if (Gt[Q - G] === 0 && Zt(Ee, p[Q])) {
              ze = Q;
              break;
            }
        ze === void 0 ? W(Ee, E, v, !0) : (Gt[ze - G] = w + 1, ze >= Ge ? Ge = ze : qe = !0, A(
          Ee,
          p[ze],
          m,
          null,
          E,
          v,
          I,
          x,
          O
        ), De++);
      }
      const vo = qe ? sc(Gt) : Bt;
      for (Q = vo.length - 1, w = Se - 1; w >= 0; w--) {
        const Ee = G + w, ze = p[Ee], No = p[Ee + 1], wo = Ee + 1 < $ ? (
          // #13559, fallback to el placeholder for unresolved async component
          No.el || No.placeholder
        ) : N;
        Gt[w] === 0 ? A(
          null,
          ze,
          m,
          wo,
          E,
          v,
          I,
          x,
          O
        ) : qe && (Q < 0 || w !== vo[Q] ? ft(ze, m, wo, 2) : Q--);
      }
    }
  }, ft = (c, p, m, N, E = null) => {
    const { el: v, type: I, transition: x, children: O, shapeFlag: w } = c;
    if (w & 6) {
      ft(c.component.subTree, p, m, N);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, m, N);
      return;
    }
    if (w & 64) {
      I.move(c, p, m, Nt);
      return;
    }
    if (I === je) {
      r(v, p, m);
      for (let C = 0; C < O.length; C++)
        ft(O[C], p, m, N);
      r(c.anchor, p, m);
      return;
    }
    if (I === Fn) {
      B(c, p, m);
      return;
    }
    if (N !== 2 && w & 1 && x)
      if (N === 0)
        x.beforeEnter(v), r(v, p, m), Re(() => x.enter(v), E);
      else {
        const { leave: C, delayLeave: M, afterLeave: H } = x, G = () => {
          c.ctx.isUnmounted ? o(v) : r(v, p, m);
        }, ne = () => {
          C(v, () => {
            G(), H && H();
          });
        };
        M ? M(v, G, ne) : ne();
      }
    else
      r(v, p, m);
  }, W = (c, p, m, N = !1, E = !1) => {
    const {
      type: v,
      props: I,
      ref: x,
      children: O,
      dynamicChildren: w,
      shapeFlag: $,
      patchFlag: C,
      dirs: M,
      cacheIndex: H
    } = c;
    if (C === -2 && (E = !1), x != null && (Ke(), sn(x, null, m, c, !0), We()), H != null && (p.renderCache[H] = void 0), $ & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = $ & 1 && M, ne = !an(c);
    let Q;
    if (ne && (Q = I && I.onVnodeBeforeUnmount) && Xe(Q, p, c), $ & 6)
      Ve(c.component, m, N);
    else {
      if ($ & 128) {
        c.suspense.unmount(m, N);
        return;
      }
      G && wt(c, null, p, "beforeUnmount"), $ & 64 ? c.type.remove(
        c,
        p,
        m,
        Nt,
        N
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== je || C > 0 && C & 64) ? xe(
        w,
        p,
        m,
        !1,
        !0
      ) : (v === je && C & 384 || !E && $ & 16) && xe(O, p, m), N && le(c);
    }
    (ne && (Q = I && I.onVnodeUnmounted) || G) && Re(() => {
      Q && Xe(Q, p, c), G && wt(c, null, p, "unmounted");
    }, m);
  }, le = (c) => {
    const { type: p, el: m, anchor: N, transition: E } = c;
    if (p === je) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((I) => {
        I.type === Me ? o(I.el) : le(I);
      }) : me(m, N);
      return;
    }
    if (p === Fn) {
      y(c);
      return;
    }
    const v = () => {
      o(m), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: I, delayLeave: x } = E, O = () => I(m, v);
      x ? x(c.el, v, O) : O();
    } else
      v();
  }, me = (c, p) => {
    let m;
    for (; c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, Ve = (c, p, m) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && tl(c);
    const {
      bum: N,
      scope: E,
      job: v,
      subTree: I,
      um: x,
      m: O,
      a: w,
      parent: $,
      slots: { __: C }
    } = c;
    jo(O), jo(w), N && jt(N), $ && k(C) && C.forEach((M) => {
      $.renderCache[M] = void 0;
    }), E.stop(), v && (v.flags |= 8, W(I, c, p, m)), x && Re(x, p), Re(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && ll(c);
  }, xe = (c, p, m, N = !1, E = !1, v = 0) => {
    for (let I = v; I < c.length; I++)
      W(c[I], p, m, N, E);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), m = p && p[hl];
    return m ? g(m) : p;
  };
  let Pt = !1;
  const Cn = (c, p, m) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : A(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = c, Pt || (Pt = !0, Co(), Gs(), Pt = !1);
  }, Nt = {
    p: A,
    um: W,
    m: ft,
    r: le,
    mt: pe,
    mc: P,
    pc: ke,
    pbc: ue,
    n: Ye,
    o: e
  };
  return {
    render: Cn,
    hydrate: void 0,
    createApp: Ll(Cn)
  };
}
function Nr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function oc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (k(r) && k(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = gt(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && jn(i, a)), a.type === Sn && (a.el = i.el), a.type === Me && !a.el && (a.el = i.el), h.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function sc(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const f = e[r];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        a = s + i >> 1, e[n[a]] < f ? s = a + 1 : i = a;
      f < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function bi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bi(t);
}
function jo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ic = Symbol.for("v-scx"), ac = () => {
  {
    const e = $n(ic);
    return e || h.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Jt(e, t, n) {
  return h.NODE_ENV !== "production" && !F(t) && S(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yi(e, t, n);
}
function yi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = ie({}, n);
  h.NODE_ENV !== "production" && (a.onWarn = S);
  const l = t && r || !t && s !== "post";
  let f;
  if (_n) {
    if (s === "sync") {
      const _ = ac();
      f = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!l) {
      const _ = () => {
      };
      return _.stop = de, _.resume = de, _.pause = de, _;
    }
  }
  const d = _e;
  a.call = (_, D, A) => ot(_, d, D, A);
  let u = !1;
  s === "post" ? a.scheduler = (_) => {
    Re(_, d && d.suspense);
  } : s !== "sync" && (u = !0, a.scheduler = (_, D) => {
    D ? _() : cr(_);
  }), a.augmentJob = (_) => {
    t && (_.flags |= 4), u && (_.flags |= 2, d && (_.id = d.uid, _.i = d));
  };
  const g = Ja(e, t, a);
  return _n && (f ? f.push(g) : l && g()), g;
}
function lc(e, t, n) {
  const r = this.proxy, o = oe(e) ? e.includes(".") ? Ei(r, e) : () => r[e] : e.bind(r, r);
  let s;
  F(t) ? s = t : (s = t.handler, n = t);
  const i = In(this), a = yi(o, s.bind(r), n);
  return i(), a;
}
function Ei(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const cc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${Ce(t)}Modifiers`];
function uc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Z;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Dt(Te(t)) in u)) && S(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Te(t))}" prop.`
        );
      else {
        const g = d[t];
        F(g) && (g(...n) || S(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && cc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => oe(d) ? d.trim() : d)), i.number && (o = n.map(Cr))), h.NODE_ENV !== "production" && fl(e, t, o), h.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[Dt(d)] && S(
      `Event "${d}" is emitted in component ${hr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ce(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = r[a = Dt(t)] || // also try camelCase event handler (#2249)
  r[a = Dt(Te(t))];
  !l && s && (l = r[a = Dt(Ce(t))]), l && ot(
    l,
    e,
    6,
    o
  );
  const f = r[a + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, ot(
      f,
      e,
      6,
      o
    );
  }
}
function vi(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, a = !1;
  if (!F(e)) {
    const l = (f) => {
      const d = vi(f, t, !0);
      d && (a = !0, ie(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (ee(e) && r.set(e, null), null) : (k(s) ? s.forEach((l) => i[l] = null) : ie(i, s), ee(e) && r.set(e, i), i);
}
function fr(e, t) {
  return !e || !Nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ce(t)) || q(e, t));
}
let Fr = !1;
function Zn() {
  Fr = !0;
}
function Fo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: a,
    emit: l,
    render: f,
    renderCache: d,
    props: u,
    data: g,
    setupState: _,
    ctx: D,
    inheritAttrs: A
  } = e, Y = Gn(e);
  let L, j;
  h.NODE_ENV !== "production" && (Fr = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, b = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(y, {
        get(T, R, P) {
          return S(
            `Property '${String(
              R
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(T, R, P);
        }
      }) : y;
      L = Le(
        f.call(
          b,
          y,
          d,
          h.NODE_ENV !== "production" ? tt(u) : u,
          _,
          g,
          D
        )
      ), j = a;
    } else {
      const y = t;
      h.NODE_ENV !== "production" && a === u && Zn(), L = Le(
        y.length > 1 ? y(
          h.NODE_ENV !== "production" ? tt(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Zn(), tt(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : y(
          h.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), j = t.props ? a : fc(a);
    }
  } catch (y) {
    ln.length = 0, xn(y, e, 1), L = rt(Me);
  }
  let V = L, B;
  if (h.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([V, B] = Ni(L)), j && A !== !1) {
    const y = Object.keys(j), { shapeFlag: b } = V;
    if (y.length) {
      if (b & 7)
        s && y.some(Un) && (j = dc(
          j,
          s
        )), V = bt(V, j, !1, !0);
      else if (h.NODE_ENV !== "production" && !Fr && V.type !== Me) {
        const T = Object.keys(a), R = [], P = [];
        for (let z = 0, ue = T.length; z < ue; z++) {
          const re = T[z];
          Nn(re) ? Un(re) || R.push(re[2].toLowerCase() + re.slice(3)) : P.push(re);
        }
        P.length && S(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), R.length && S(
          `Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Lo(V) && S(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = bt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Lo(V) && S(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), so(V, n.transition)), h.NODE_ENV !== "production" && B ? B(V) : L = V, Gn(Y), L;
}
const Ni = (e) => {
  const t = e.children, n = e.dynamicChildren, r = po(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Ni(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (a) => {
    t[o] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Le(r), i];
};
function po(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (dr(o)) {
      if (o.type !== Me || o.children === "v-if") {
        if (n)
          return;
        if (n = o, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return po(n.children);
      }
    } else
      return;
  }
  return n;
}
const fc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Nn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Un(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Lo = (e) => e.shapeFlag & 7 || e.type === Me;
function pc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, f = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || a) && nt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ho(r, i, f) : !!i;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const g = d[u];
        if (i[g] !== r[g] && !fr(f, g))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Ho(r, i, f) : !0 : !!i;
  return !1;
}
function Ho(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !fr(n, s))
      return !0;
  }
  return !1;
}
function hc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const wi = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : qs(e);
}
const je = Symbol.for("v-fgt"), Sn = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), ln = [];
let Pe = null;
function Ae(e = !1) {
  ln.push(Pe = e ? null : []);
}
function _c() {
  ln.pop(), Pe = ln[ln.length - 1] || null;
}
let gn = 1;
function Uo(e, t = !1) {
  gn += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = gn > 0 ? Pe || Bt : null, _c(), gn > 0 && Pe && Pe.push(e), e;
}
function $e(e, t, n, r, o, s) {
  return Oi(
    ht(
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
function mc(e, t, n, r, o) {
  return Oi(
    rt(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function dr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = kn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const bc = (...e) => Di(
  ...e
), xi = ({ key: e }) => e ?? null, Ln = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ce(e) || F(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function ht(e, t = null, n = null, r = 0, o = null, s = e === je ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xi(t),
    ref: t && Ln(t),
    scopeId: ti,
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
    ctx: we
  };
  return a ? (ho(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= oe(n) ? 8 : 16), h.NODE_ENV !== "production" && l.key !== l.key && S("VNode created with invalid key (NaN). VNode type:", l.type), gn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Pe.push(l), l;
}
const rt = h.NODE_ENV !== "production" ? bc : Di;
function Di(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Il) && (h.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Me), dr(e)) {
    const a = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ho(a, n), gn > 0 && !s && Pe && (a.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = a : Pe.push(a)), a.patchFlag = -2, a;
  }
  if (Vi(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: a, style: l } = t;
    a && !oe(a) && (t.class = un(a)), ee(l) && (pn(l) && !k(l) && (l = ie({}, l)), t.style = sr(l));
  }
  const i = oe(e) ? 1 : wi(e) ? 128 : gl(e) ? 64 : ee(e) ? 4 : F(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && pn(e) && (e = K(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ht(
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
function yc(e) {
  return e ? pn(e) || di(e) ? ie({}, e) : e : null;
}
function bt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, f = t ? vc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && xi(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? k(s) ? s.concat(Ln(t)) : [s, Ln(t)] : Ln(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && k(a) ? a.map(Si) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== je ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && bt(e.ssContent),
    ssFallback: e.ssFallback && bt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && r && so(
    d,
    l.clone(d)
  ), d;
}
function Si(e) {
  const t = bt(e);
  return k(e.children) && (t.children = e.children.map(Si)), t;
}
function Ec(e = " ", t = 0) {
  return rt(Sn, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (Ae(), mc(Me, null, e)) : rt(Me, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean" ? rt(Me) : k(e) ? rt(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dr(e) ? gt(e) : rt(Sn, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function ho(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ho(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !di(t) ? t._ctx = we : o === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = un([t.class, r.class]));
      else if (o === "style")
        t.style = sr([t.style, r.style]);
      else if (Nn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(k(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Xe(e, t, n, r = null) {
  ot(e, t, 7, [
    n,
    r
  ]);
}
const Nc = ci();
let wc = 0;
function Oc(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Nc, s = {
    uid: wc++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ha(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: hi(r, o),
    emitsOptions: vi(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Z,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Z,
    data: Z,
    props: Z,
    attrs: Z,
    slots: Z,
    refs: Z,
    setupState: Z,
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
  return h.NODE_ENV !== "production" ? s.ctx = Tl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = uc.bind(null, s), e.ce && e.ce(s), s;
}
let _e = null;
const go = () => _e || we;
let Qn, Lr;
{
  const e = wn(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), Lr = t(
    "__VUE_SSR_SETTERS__",
    (n) => _n = n
  );
}
const In = (e) => {
  const t = _e;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, Bo = () => {
  _e && _e.scope.off(), Qn(null);
}, xc = /* @__PURE__ */ ct("slot,component");
function Hr(e, { isNativeTag: t }) {
  (xc(e) || t(e)) && S(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let _n = !1;
function Dc(e, t = !1, n = !1) {
  t && Lr(t);
  const { props: r, children: o } = e.vnode, s = Ii(e);
  Ul(e, r, s, t), Ql(e, o, n || t);
  const i = s ? Sc(e, t) : void 0;
  return t && Lr(!1), i;
}
function Sc(e, t) {
  var n;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && Hr(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Hr(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        ni(s[i]);
    }
    r.compilerOptions && Ic() && S(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), h.NODE_ENV !== "production" && Vl(e);
  const { setup: o } = r;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Tc(e) : null, i = In(e), a = qt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), l = qr(a);
    if (We(), i(), (l || e.sp) && !an(e) && oi(e), l) {
      if (a.then(Bo, Bo), t)
        return a.then((f) => {
          Ko(e, f, t);
        }).catch((f) => {
          xn(f, e, 0);
        });
      if (e.asyncDep = a, h.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        S(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ko(e, a, t);
  } else
    Ci(e, t);
}
function Ko(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (h.NODE_ENV !== "production" && dr(t) && S(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ks(t), h.NODE_ENV !== "production" && Al(e)) : h.NODE_ENV !== "production" && t !== void 0 && S(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ci(e, n);
}
const Ic = () => !0;
function Ci(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || de);
  {
    const o = In(e);
    Ke();
    try {
      Pl(e);
    } finally {
      We(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === de && !t && (r.template ? S(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : S("Component is missing template or render function: ", r));
}
const Wo = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Zn(), fe(e, "get", ""), e[t];
  },
  set() {
    return S("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return S("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return fe(e, "get", ""), e[t];
  }
};
function Cc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return fe(e, "get", "$slots"), t[n];
    }
  });
}
function Tc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && S("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (k(n) ? r = "array" : ce(n) && (r = "ref")), r !== "object" && S(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Wo));
      },
      get slots() {
        return r || (r = Cc(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Wo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function pr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(ka(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in At)
        return At[n](e);
    },
    has(t, n) {
      return n in t || n in At;
    }
  })) : e.proxy;
}
const Vc = /(?:^|[-_])(\w)/g, Ac = (e) => e.replace(Vc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ti(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hr(e, t, n = !1) {
  let r = Ti(t);
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
  return r ? Ac(r) : n ? "App" : "Anonymous";
}
function Vi(e) {
  return F(e) && "__vccOpts" in e;
}
const _o = (e, t) => {
  const n = Ka(e, t, _n);
  if (h.NODE_ENV !== "production") {
    const r = go();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Rc() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ee(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ce(u)) {
        Ke();
        const g = u.value;
        return We(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          a(g),
          ">"
        ];
      } else {
        if (Tt(u))
          return [
            "div",
            {},
            ["span", e, Oe(u) ? "ShallowReactive" : "Reactive"],
            "<",
            a(u),
            `>${Je(u) ? " (readonly)" : ""}`
          ];
        if (Je(u))
          return [
            "div",
            {},
            ["span", e, Oe(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const g = [];
    u.type.props && u.props && g.push(i("props", K(u.props))), u.setupState !== Z && g.push(i("setup", u.setupState)), u.data !== Z && g.push(i("data", K(u.data)));
    const _ = l(u, "computed");
    _ && g.push(i("computed", _));
    const D = l(u, "inject");
    return D && g.push(i("injected", D)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function i(u, g) {
    return g = ie({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          a(g[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ee(u) ? ["object", { object: g ? K(u) : u }] : ["span", n, String(u)];
  }
  function l(u, g) {
    const _ = u.type;
    if (F(_))
      return;
    const D = {};
    for (const A in u.ctx)
      f(_, A, g) && (D[A] = u.ctx[A]);
    return D;
  }
  function f(u, g, _) {
    const D = u[_];
    if (k(D) && D.includes(g) || ee(D) && g in D || u.extends && f(u.extends, g, _) || u.mixins && u.mixins.some((A) => f(A, g, _)))
      return !0;
  }
  function d(u) {
    return Oe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Jo = "3.5.18", Fe = h.NODE_ENV !== "production" ? S : de;
var be = {};
let Ur;
const Yo = typeof window < "u" && window.trustedTypes;
if (Yo)
  try {
    Ur = /* @__PURE__ */ Yo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    be.NODE_ENV !== "production" && Fe(`Error creating trusted types policy: ${e}`);
  }
const Ai = Ur ? (e) => Ur.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", it = typeof document < "u" ? document : null, qo = it && /* @__PURE__ */ it.createElement("template"), kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? it.createElementNS(Pc, e) : t === "mathml" ? it.createElementNS(Mc, e) : n ? it.createElement(e, { is: n }) : it.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => it.createTextNode(e),
  createComment: (e) => it.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => it.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === s || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)); )
        ;
    else {
      qo.innerHTML = Ai(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = qo.content;
      if (r === "svg" || r === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, $c = Symbol("_vtc");
function jc(e, t, n) {
  const r = e[$c];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Go = Symbol("_vod"), Fc = Symbol("_vsh"), Lc = Symbol(be.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hc = /(^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const r = e.style, o = oe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Hn(r, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Hn(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Hn(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Lc];
      i && (n += ";" + i), r.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  Go in e && (e[Go] = s ? r.display : "", e[Fc] && (r.display = "none"));
}
const Bc = /[^\\];\s*$/, zo = /\s*!important$/;
function Hn(e, t, n) {
  if (k(n))
    n.forEach((r) => Hn(e, t, r));
  else if (n == null && (n = ""), be.NODE_ENV !== "production" && Bc.test(n) && Fe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Kc(e, t);
    zo.test(n) ? e.setProperty(
      Ce(r),
      n.replace(zo, ""),
      "important"
    ) : e[r] = n;
  }
}
const Xo = ["Webkit", "Moz", "ms"], wr = {};
function Kc(e, t) {
  const n = wr[t];
  if (n)
    return n;
  let r = Te(t);
  if (r !== "filter" && r in e)
    return wr[t] = r;
  r = or(r);
  for (let o = 0; o < Xo.length; o++) {
    const s = Xo[o] + r;
    if (s in e)
      return wr[t] = s;
  }
  return t;
}
const Zo = "http://www.w3.org/1999/xlink";
function Qo(e, t, n, r, o, s = pa(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zo, t.slice(6, t.length)) : e.setAttributeNS(Zo, t, n) : n == null || s && !Os(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : yt(n) ? String(n) : n
  );
}
function es(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ai(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = Os(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    be.NODE_ENV !== "production" && !i && Fe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function Lt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Wc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ts = Symbol("_vei");
function Jc(e, t, n, r, o = null) {
  const s = e[ts] || (e[ts] = {}), i = s[t];
  if (r && i)
    i.value = be.NODE_ENV !== "production" ? rs(r, t) : r;
  else {
    const [a, l] = Yc(t);
    if (r) {
      const f = s[t] = zc(
        be.NODE_ENV !== "production" ? rs(r, t) : r,
        o
      );
      Lt(e, a, f, l);
    } else i && (Wc(e, a, i, l), s[t] = void 0);
  }
}
const ns = /(?:Once|Passive|Capture)$/;
function Yc(e) {
  let t;
  if (ns.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ns); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ce(e.slice(2)), t];
}
let Or = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Gc = () => Or || (qc.then(() => Or = 0), Or = Date.now());
function zc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ot(
      Xc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Gc(), n;
}
function rs(e, t) {
  return F(e) || k(e) ? e : (Fe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), de);
}
function Xc(e, t) {
  if (k(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? jc(e, r, i) : t === "style" ? Uc(e, n, r) : Nn(t) ? Un(t) || Jc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, i)) ? (es(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qo(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? es(e, Te(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qo(e, t, r, i));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && os(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return os(t) && oe(n) ? !1 : t in e;
}
const ss = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function eu(e, t, n) {
  const r = /* @__PURE__ */ ri(e, t);
  nr(r) && ie(r, t);
  class o extends mo {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const tu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class mo extends tu {
  constructor(t, n = {}, r = us) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== us ? this._root = this.shadowRoot : (be.NODE_ENV !== "production" && this.shadowRoot && Fe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof mo) {
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
    this._connected = !1, no(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver((r) => {
      for (const o of r)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (r, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: i } = r;
      let a;
      if (s && !k(s))
        for (const l in s) {
          const f = s[l];
          (f === Number || f && f.type === Number) && (l in this._props && (this._props[l] = Oo(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Te(l)] = !0);
        }
      this._numberProps = a, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : be.NODE_ENV !== "production" && i && Fe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((r) => {
      r.configureApp = this._def.configureApp, t(this._def = r, !0);
    }) : t(this._def);
  }
  _mount(t) {
    be.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        q(this, r) ? be.NODE_ENV !== "production" && Fe(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => he(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = k(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(Te))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(s) {
          this._setProp(o, s, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let r = n ? this.getAttribute(t) : ss;
    const o = Te(t);
    n && this._numberProps && this._numberProps[o] && (r = Oo(r)), this._setProp(o, r, !1, !0);
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
  _setProp(t, n, r = !0, o = !1) {
    if (n !== this._props[t] && (n === ss ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Ce(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ce(t), n + "") : n || this.removeAttribute(Ce(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), cu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = rt(this._def, ie(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, be.NODE_ENV !== "production" && (r.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const o = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            nr(i[0]) ? ie({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (s, ...i) => {
        o(s, i), Ce(s) !== s && o(Ce(s), i);
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
    const r = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const s = document.createElement("style");
      if (r && s.setAttribute("nonce", r), s.textContent = t[o], this.shadowRoot.prepend(s), be.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let i = this._childStyles.get(n.__hmrId);
            i || this._childStyles.set(n.__hmrId, i = []), i.push(s);
          }
        } else
          (this._styles || (this._styles = [])).push(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const r = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[r] || (t[r] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let r = 0; r < t.length; r++) {
      const o = t[r], s = o.getAttribute("name") || "default", i = this._slots[s], a = o.parentNode;
      if (i)
        for (const l of i) {
          if (n && l.nodeType === 1) {
            const f = n + "-s", d = document.createTreeWalker(l, 1);
            l.setAttribute(f, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(f, "");
          }
          a.insertBefore(l, o);
        }
      else
        for (; o.firstChild; ) a.insertBefore(o.firstChild, o);
      a.removeChild(o);
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
    if (be.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
const is = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (n) => jt(t, n) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function as(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xr = Symbol("_assign"), ru = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[xr] = is(o);
    const s = r || o.props && o.props.type === "number";
    Lt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Cr(a)), e[xr](a);
    }), n && Lt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Lt(e, "compositionstart", nu), Lt(e, "compositionend", as), Lt(e, "change", as));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[xr] = is(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, ou = ["ctrl", "shift", "alt", "meta"], su = {
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
  exact: (e, t) => ou.some((n) => e[`${n}Key`] && !t.includes(n))
}, ls = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = su[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...s);
  });
}, iu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, au = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Ce(o.key);
    if (t.some(
      (i) => i === s || iu[i] === s
    ))
      return e(o);
  });
}, lu = /* @__PURE__ */ ie({ patchProp: Zc }, kc);
let cs;
function Ri() {
  return cs || (cs = nc(lu));
}
const cu = (...e) => {
  Ri().render(...e);
}, us = (...e) => {
  const t = Ri().createApp(...e);
  be.NODE_ENV !== "production" && (fu(t), du(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = pu(r);
    if (!o) return;
    const s = t._component;
    !F(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, uu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ca(t) || ua(t) || fa(t),
    writable: !1
  });
}
function du(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Fe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Fe(r), n;
      },
      set() {
        Fe(r);
      }
    });
  }
}
function pu(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return be.NODE_ENV !== "production" && !t && Fe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return be.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Fe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var hu = {};
function gu() {
  Rc();
}
hu.NODE_ENV !== "production" && gu();
var Pi = "vercel.ai.error", _u = Symbol.for(Pi), Mi, mu = class ki extends Error {
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
    super(n), this[Mi] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return ki.hasMarker(t, Pi);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
Mi = _u;
var Yt = mu;
function $i(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var ji = "AI_InvalidArgumentError", Fi = `vercel.ai.error.${ji}`, bu = Symbol.for(Fi), Li, yu = class extends Yt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: ji, message: e, cause: t }), this[Li] = !0, this.argument = n;
  }
  static isInstance(e) {
    return Yt.hasMarker(e, Fi);
  }
};
Li = bu;
var Hi = "AI_JSONParseError", Ui = `vercel.ai.error.${Hi}`, Eu = Symbol.for(Ui), Bi, fs = class extends Yt {
  constructor({ text: e, cause: t }) {
    super({
      name: Hi,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${$i(t)}`,
      cause: t
    }), this[Bi] = !0, this.text = e;
  }
  static isInstance(e) {
    return Yt.hasMarker(e, Ui);
  }
};
Bi = Eu;
var Ki = "AI_TypeValidationError", Wi = `vercel.ai.error.${Ki}`, vu = Symbol.for(Wi), Ji, Nu = class Br extends Yt {
  constructor({ value: t, cause: n }) {
    super({
      name: Ki,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${$i(n)}`,
      cause: n
    }), this[Ji] = !0, this.value = t;
  }
  static isInstance(t) {
    return Yt.hasMarker(t, Wi);
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
    return Br.isInstance(n) && n.value === t ? n : new Br({ value: t, cause: n });
  }
};
Ji = vu;
var ds = Nu;
let wu = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function Ou(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} }, ps;
function xu() {
  if (ps) return xt.exports;
  ps = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function r(a, l, f) {
    f == null && l !== null && typeof l == "object" && (f = l, l = void 0), e && Buffer.isBuffer(a) && (a = a.toString()), a && a.charCodeAt(0) === 65279 && (a = a.slice(1));
    const d = JSON.parse(a, l);
    if (d === null || typeof d != "object")
      return d;
    const u = f && f.protoAction || "error", g = f && f.constructorAction || "error";
    if (u === "ignore" && g === "ignore")
      return d;
    if (u !== "ignore" && g !== "ignore") {
      if (t.test(a) === !1 && n.test(a) === !1)
        return d;
    } else if (u !== "ignore" && g === "ignore") {
      if (t.test(a) === !1)
        return d;
    } else if (n.test(a) === !1)
      return d;
    return o(d, { protoAction: u, constructorAction: g, safe: f && f.safe });
  }
  function o(a, { protoAction: l = "error", constructorAction: f = "error", safe: d } = {}) {
    let u = [a];
    for (; u.length; ) {
      const g = u;
      u = [];
      for (const _ of g) {
        if (l !== "ignore" && Object.prototype.hasOwnProperty.call(_, "__proto__")) {
          if (d === !0)
            return null;
          if (l === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete _.__proto__;
        }
        if (f !== "ignore" && Object.prototype.hasOwnProperty.call(_, "constructor") && Object.prototype.hasOwnProperty.call(_.constructor, "prototype")) {
          if (d === !0)
            return null;
          if (f === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete _.constructor;
        }
        for (const D in _) {
          const A = _[D];
          A && typeof A == "object" && u.push(A);
        }
      }
    }
    return a;
  }
  function s(a, l, f) {
    const d = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(a, l, f);
    } finally {
      Error.stackTraceLimit = d;
    }
  }
  function i(a, l) {
    const f = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(a, l, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = f;
    }
  }
  return xt.exports = s, xt.exports.default = s, xt.exports.parse = s, xt.exports.safeParse = i, xt.exports.scan = o, xt.exports;
}
var Du = xu();
const Su = /* @__PURE__ */ Ou(Du);
var Iu = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = wu(n, t);
  if (e == null)
    return o;
  if (n.includes(r))
    throw new yu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, bo = Iu(), Kr = Symbol.for("vercel.ai.validator");
function Cu(e) {
  return { [Kr]: !0, validate: e };
}
function Tu(e) {
  return typeof e == "object" && e !== null && Kr in e && e[Kr] === !0 && "validate" in e;
}
function Vu(e) {
  return Tu(e) ? e : Au(e);
}
function Au(e) {
  return Cu((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function Ru({
  value: e,
  schema: t
}) {
  const n = Vu(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const r = n.validate(e);
    return r.success ? r : {
      success: !1,
      error: ds.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: ds.wrap({ value: e, cause: r })
    };
  }
}
function hs({
  text: e,
  schema: t
}) {
  try {
    const n = Su.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const r = Ru({ value: n, schema: t });
    return r.success ? { ...r, rawValue: n } : r;
  } catch (n) {
    return {
      success: !1,
      error: fs.isInstance(n) ? n : new fs({ text: e, cause: n })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var mn = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, bn = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, yn = {
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
}, En = {
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
}, vn = {
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
}, Pu = [
  mn,
  bn,
  yn,
  En,
  vn
];
mn.code + "", bn.code + "", yn.code + "", En.code + "", vn.code + "";
mn.name + "", mn.code, bn.name + "", bn.code, yn.name + "", yn.code, En.name + "", En.code, vn.name + "", vn.code;
Pu.map((e) => e.code);
function Mu({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function ku(e) {
  const t = ["ROOT"];
  let n = -1, r = null;
  function o(l, f, d) {
    switch (l) {
      case '"': {
        n = f, t.pop(), t.push(d), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = f, r = f, t.pop(), t.push(d), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(d), t.push("INSIDE_NUMBER");
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
        n = f, t.pop(), t.push(d), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = f, t.pop(), t.push(d), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = f, t.pop(), t.push(d), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function s(l, f) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        n = f, t.pop();
        break;
      }
    }
  }
  function i(l, f) {
    switch (l) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        n = f, t.pop();
        break;
      }
    }
  }
  for (let l = 0; l < e.length; l++) {
    const f = e[l];
    switch (t[t.length - 1]) {
      case "ROOT":
        o(f, l, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (f) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            n = l, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (f) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (f) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (f) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        o(f, l, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(f, l);
        break;
      }
      case "INSIDE_STRING": {
        switch (f) {
          case '"': {
            t.pop(), n = l;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            n = l;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (f) {
          case "]": {
            n = l, t.pop();
            break;
          }
          default: {
            n = l, o(f, l, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (f) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            n = l, t.pop();
            break;
          }
          default: {
            n = l;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        o(f, l, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = l;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (f) {
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
            n = l;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(f, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(f, l);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(f, l);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(f, l);
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
        const u = e.substring(r, l + 1);
        !"false".startsWith(u) && !"true".startsWith(u) && !"null".startsWith(u) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(f, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(f, l)) : n = l;
        break;
      }
    }
  }
  let a = e.slice(0, n + 1);
  for (let l = t.length - 1; l >= 0; l--)
    switch (t[l]) {
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
        const d = e.substring(r, e.length);
        "true".startsWith(d) ? a += "true".slice(d.length) : "false".startsWith(d) ? a += "false".slice(d.length) : "null".startsWith(d) && (a += "null".slice(d.length));
      }
    }
  return a;
}
function $u(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = hs({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = hs({ text: ku(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var ju = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Fu = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Lu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Hu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Uu = {
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
}, Bu = {
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
}, Ku = {
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
}, Wu = {
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
}, Ju = {
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
}, Yu = {
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
}, qu = {
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
}, Gu = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, zu = {
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
}, Xu = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, Zu = {
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
}, Qu = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, yo = [
  ju,
  Fu,
  Lu,
  Hu,
  Uu,
  Bu,
  Ku,
  Wu,
  Ju,
  Yu,
  qu,
  Gu,
  zu,
  Xu,
  Zu,
  Qu
], ef = Object.fromEntries(
  yo.map((e) => [e.code, e])
);
Object.fromEntries(
  yo.map((e) => [e.name, e.code])
);
var tf = yo.map((e) => e.code), nf = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!tf.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const r = n, o = e.slice(t + 1), s = JSON.parse(o);
  return ef[r].parse(s);
}, rf = 10;
function of(e, t) {
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    n.set(o, r), r += o.length;
  return e.length = 0, n;
}
async function sf({
  stream: e,
  onTextPart: t,
  onReasoningPart: n,
  onReasoningSignaturePart: r,
  onRedactedReasoningPart: o,
  onSourcePart: s,
  onFilePart: i,
  onDataPart: a,
  onErrorPart: l,
  onToolCallStreamingStartPart: f,
  onToolCallDeltaPart: d,
  onToolCallPart: u,
  onToolResultPart: g,
  onMessageAnnotationsPart: _,
  onFinishMessagePart: D,
  onFinishStepPart: A,
  onStartStepPart: Y
}) {
  const L = e.getReader(), j = new TextDecoder(), V = [];
  let B = 0;
  for (; ; ) {
    const { value: y } = await L.read();
    if (y && (V.push(y), B += y.length, y[y.length - 1] !== rf))
      continue;
    if (V.length === 0)
      break;
    const b = of(V, B);
    B = 0;
    const T = j.decode(b, { stream: !0 }).split(`
`).filter((R) => R !== "").map(nf);
    for (const { type: R, value: P } of T)
      switch (R) {
        case "text":
          await t?.(P);
          break;
        case "reasoning":
          await n?.(P);
          break;
        case "reasoning_signature":
          await r?.(P);
          break;
        case "redacted_reasoning":
          await o?.(P);
          break;
        case "file":
          await i?.(P);
          break;
        case "source":
          await s?.(P);
          break;
        case "data":
          await a?.(P);
          break;
        case "error":
          await l?.(P);
          break;
        case "message_annotations":
          await _?.(P);
          break;
        case "tool_call_streaming_start":
          await f?.(P);
          break;
        case "tool_call_delta":
          await d?.(P);
          break;
        case "tool_call":
          await u?.(P);
          break;
        case "tool_result":
          await g?.(P);
          break;
        case "finish_message":
          await D?.(P);
          break;
        case "finish_step":
          await A?.(P);
          break;
        case "start_step":
          await Y?.(P);
          break;
        default: {
          const z = R;
          throw new Error(`Unknown stream part type: ${z}`);
        }
      }
  }
}
async function af({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: r,
  generateId: o = bo,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var a, l;
  const f = i?.role === "assistant";
  let d = f ? 1 + // find max step in existing tool invocations:
  ((l = (a = i.toolInvocations) == null ? void 0 : a.reduce((b, T) => {
    var R;
    return Math.max(b, (R = T.step) != null ? R : 0);
  }, 0)) != null ? l : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, _, D;
  function A(b, T) {
    const R = u.parts.find(
      (P) => P.type === "tool-invocation" && P.toolInvocation.toolCallId === b
    );
    R != null ? R.toolInvocation = T : u.parts.push({
      type: "tool-invocation",
      toolInvocation: T
    });
  }
  const Y = [];
  let L = f ? i?.annotations : void 0;
  const j = {};
  let V = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, B = "unknown";
  function y() {
    const b = [...Y];
    L?.length && (u.annotations = L);
    const T = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(u),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: o()
    };
    t({
      message: T,
      data: b,
      replaceLastMessage: f
    });
  }
  await sf({
    stream: e,
    onTextPart(b) {
      g == null ? (g = {
        type: "text",
        text: b
      }, u.parts.push(g)) : g.text += b, u.content += b, y();
    },
    onReasoningPart(b) {
      var T;
      D == null ? (D = { type: "text", text: b }, _?.details.push(D)) : D.text += b, _ == null ? (_ = {
        type: "reasoning",
        reasoning: b,
        details: [D]
      }, u.parts.push(_)) : _.reasoning += b, u.reasoning = ((T = u.reasoning) != null ? T : "") + b, y();
    },
    onReasoningSignaturePart(b) {
      D != null && (D.signature = b.signature);
    },
    onRedactedReasoningPart(b) {
      _ == null && (_ = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(_)), _.details.push({
        type: "redacted",
        data: b.data
      }), D = void 0, y();
    },
    onFilePart(b) {
      u.parts.push({
        type: "file",
        mimeType: b.mimeType,
        data: b.data
      }), y();
    },
    onSourcePart(b) {
      u.parts.push({
        type: "source",
        source: b
      }), y();
    },
    onToolCallStreamingStartPart(b) {
      u.toolInvocations == null && (u.toolInvocations = []), j[b.toolCallId] = {
        text: "",
        step: d,
        toolName: b.toolName,
        index: u.toolInvocations.length
      };
      const T = {
        state: "partial-call",
        step: d,
        toolCallId: b.toolCallId,
        toolName: b.toolName,
        args: void 0
      };
      u.toolInvocations.push(T), A(b.toolCallId, T), y();
    },
    onToolCallDeltaPart(b) {
      const T = j[b.toolCallId];
      T.text += b.argsTextDelta;
      const { value: R } = $u(T.text), P = {
        state: "partial-call",
        step: T.step,
        toolCallId: b.toolCallId,
        toolName: T.toolName,
        args: R
      };
      u.toolInvocations[T.index] = P, A(b.toolCallId, P), y();
    },
    async onToolCallPart(b) {
      const T = {
        state: "call",
        step: d,
        ...b
      };
      if (j[b.toolCallId] != null ? u.toolInvocations[j[b.toolCallId].index] = T : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(T)), A(b.toolCallId, T), y(), n) {
        const R = await n({ toolCall: b });
        if (R != null) {
          const P = {
            state: "result",
            step: d,
            ...b,
            result: R
          };
          u.toolInvocations[u.toolInvocations.length - 1] = P, A(b.toolCallId, P), y();
        }
      }
    },
    onToolResultPart(b) {
      const T = u.toolInvocations;
      if (T == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const R = T.findIndex(
        (z) => z.toolCallId === b.toolCallId
      );
      if (R === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const P = {
        ...T[R],
        state: "result",
        ...b
      };
      T[R] = P, A(b.toolCallId, P), y();
    },
    onDataPart(b) {
      Y.push(...b), y();
    },
    onMessageAnnotationsPart(b) {
      L == null ? L = [...b] : L.push(...b), y();
    },
    onFinishStepPart(b) {
      d += 1, g = b.isContinued ? g : void 0, _ = void 0, D = void 0;
    },
    onStartStepPart(b) {
      f || (u.id = b.messageId), u.parts.push({ type: "step-start" }), y();
    },
    onFinishMessagePart(b) {
      B = b.finishReason, b.usage != null && (V = Mu(b.usage));
    },
    onErrorPart(b) {
      throw new Error(b);
    }
  }), r?.({ message: u, finishReason: B, usage: V });
}
async function lf({
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
async function cf({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: r = () => /* @__PURE__ */ new Date(),
  generateId: o = bo
}) {
  const s = { type: "text", text: "" }, i = {
    id: o(),
    createdAt: r(),
    role: "assistant",
    content: "",
    parts: [s]
  };
  await lf({
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
var uf = () => fetch;
async function ff({
  api: e,
  body: t,
  streamProtocol: n = "data",
  credentials: r,
  headers: o,
  abortController: s,
  restoreMessagesOnFailure: i,
  onResponse: a,
  onUpdate: l,
  onFinish: f,
  onToolCall: d,
  generateId: u,
  fetch: g = uf(),
  lastMessage: _,
  requestType: D = "generate"
}) {
  var A, Y, L;
  const V = await (D === "resume" ? g(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (A = s?.()) == null ? void 0 : A.signal,
    credentials: r
  }) : g(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (Y = s?.()) == null ? void 0 : Y.signal,
    credentials: r
  })).catch((B) => {
    throw i(), B;
  });
  if (a)
    try {
      await a(V);
    } catch (B) {
      throw B;
    }
  if (!V.ok)
    throw i(), new Error(
      (L = await V.text()) != null ? L : "Failed to fetch the chat response."
    );
  if (!V.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await cf({
        stream: V.body,
        update: l,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await af({
        stream: V.body,
        update: l,
        lastMessage: _,
        onToolCall: d,
        onFinish({ message: B, finishReason: y, usage: b }) {
          f && B != null && f(B, { usage: b, finishReason: y });
        },
        generateId: u
      });
      return;
    }
    default: {
      const B = n;
      throw new Error(`Unknown stream protocol: ${B}`);
    }
  }
}
function Wr(e) {
  return e?.reduce((t, n) => {
    var r;
    return Math.max(t, (r = n.step) != null ? r : 0);
  }, 0);
}
function Yi(e) {
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
function Rn(e) {
  return e.map((t) => ({
    ...t,
    parts: Yi(t)
  }));
}
async function gs(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: n, type: r } = t, o = await new Promise((s, i) => {
          const a = new FileReader();
          a.onload = (l) => {
            var f;
            s((f = l.target) == null ? void 0 : f.result);
          }, a.onerror = (l) => i(l), a.readAsDataURL(t);
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
function df({
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
    (r.length > t || Wr(s.toolInvocations) !== e) && // check that next step is possible:
    qi(s) && // limit the number of automatic steps:
    ((o = Wr(s.toolInvocations)) != null ? o : 0) < n
  );
}
function qi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, o, s) => o.type === "step-start" ? s : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function pf({
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
var Dr = /* @__PURE__ */ new WeakMap(), _s = 0;
function hf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Dr.has(e[n]) ? r = Dr.get(e[n]) : (r = _s, Dr.set(e[n], _s++)), t += "@" + r;
  }
  return t;
}
function gf(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = hf(e) : e = String(e || ""), e;
}
var Eo = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return gf(t);
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
function _f() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function mf() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var bf = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Sr = {
  isOnline: _f,
  isDocumentVisible: mf,
  fetcher: bf
};
var at = function() {
  return at = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, at.apply(this, arguments);
}, Ht = function(e, t, n, r) {
  function o(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function a(d) {
      try {
        f(r.next(d));
      } catch (u) {
        i(u);
      }
    }
    function l(d) {
      try {
        f(r.throw(d));
      } catch (u) {
        i(u);
      }
    }
    function f(d) {
      d.done ? s(d.value) : o(d.value).then(a, l);
    }
    f((r = r.apply(e, t || [])).next());
  });
}, Ut = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(f) {
    return function(d) {
      return l([f, d]);
    };
  }
  function l(f) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, o && (s = f[0] & 2 ? o.return : f[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, f[1])).done) return s;
      switch (o = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
        case 0:
        case 1:
          s = f;
          break;
        case 4:
          return n.label++, { value: f[1], done: !1 };
        case 5:
          n.label++, o = f[1], f = [0];
          continue;
        case 7:
          f = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            n = 0;
            continue;
          }
          if (f[0] === 3 && (!s || f[1] > s[0] && f[1] < s[3])) {
            n.label = f[1];
            break;
          }
          if (f[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = f;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(f);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      f = t.call(e, n);
    } catch (d) {
      f = [6, d], o = 0;
    } finally {
      r = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, yf = function(e, t) {
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
}, Ef = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Gi = new Eo(), er = new Eo(), Ir = new Eo(), zi = {
  cache: Gi,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: !0,
  revalidateDebounce: 0,
  shouldRetryOnError: !0,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: Sr.fetcher,
  isOnline: Sr.isOnline,
  isDocumentVisible: Sr.isDocumentVisible
};
function vf(e, t, n) {
  var r = er.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    er.set(e, [t], n > 0 ? n + o : n);
  }
}
function Nf(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var r = Math.min(t || 0, n.errorRetryCount), o = r * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: r + 1, shouldRetryOnError: !0 });
    }, o);
  }
}
var ms = function(e, t, n, r) {
  return n === void 0 && (n = Gi), r === void 0 && (r = zi.ttl), Ht(void 0, void 0, void 0, function() {
    var o, s, i, a, l, f, d;
    return Ut(this, function(u) {
      switch (u.label) {
        case 0:
          if (!wf(t)) return [3, 5];
          u.label = 1;
        case 1:
          return u.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return o = u.sent(), [3, 4];
        case 3:
          return a = u.sent(), s = a, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          o = t, u.label = 6;
        case 6:
          if (i = !1, l = { data: o, error: s, isValidating: i }, typeof o < "u")
            try {
              n.set(e, l, r);
            } catch (g) {
              console.error("swrv(mutate): failed to set cache", g);
            }
          return f = er.get(e), f && f.data.length && (d = f.data.filter(function(g) {
            return g.key === e;
          }), d.forEach(function(g, _) {
            typeof l.data < "u" && (g.data = l.data), g.error = l.error, g.isValidating = l.isValidating, g.isLoading = l.isValidating;
            var D = _ === d.length - 1;
            D || delete d[_];
          }), d = d.filter(Boolean)), [2, l];
      }
    });
  });
};
function bs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = at({}, zi), i = !1, a = !1, l = go(), f = l?.proxy || l;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = at(at({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, g = typeof r == "function" ? r : He(r);
  typeof o > "u" && (o = s.fetcher);
  var _ = null;
  _ || (_ = On({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var D = function(j, V) {
    return Ht(e, void 0, void 0, function() {
      var B, y, b, T, R, P, z, ue = this;
      return Ut(this, function(re) {
        switch (re.label) {
          case 0:
            return B = _.data === void 0, y = g.value, y ? (b = s.cache.get(y), T = b && b.data, _.isValidating = !0, _.isLoading = !T, T && (_.data = T.data, _.error = T.error), R = j || o, !R || !s.isDocumentVisible() && !B || V?.forceRevalidate !== void 0 && !V?.forceRevalidate ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : b && (P = !!(Date.now() - b.createdAt >= s.dedupingInterval || V?.forceRevalidate), !P) ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : (z = function() {
              return Ht(ue, void 0, void 0, function() {
                var se, ye, pe, ae;
                return Ut(this, function(U) {
                  switch (U.label) {
                    case 0:
                      return se = Ir.get(y), se ? [3, 2] : (ye = Array.isArray(y) ? y : [y], pe = R.apply(void 0, Ef([], yf(ye), !1)), Ir.set(y, pe, s.dedupingInterval), [4, ms(y, pe, s.cache, u)]);
                    case 1:
                      return U.sent(), [3, 4];
                    case 2:
                      return [4, ms(y, se.data, s.cache, u)];
                    case 3:
                      U.sent(), U.label = 4;
                    case 4:
                      return _.isValidating = !1, _.isLoading = !1, Ir.delete(y), _.error !== void 0 && (ae = !i && s.shouldRetryOnError && (V ? V.shouldRetryOnError : !0), ae && Nf(D, V ? V.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, T && s.revalidateDebounce ? (setTimeout(function() {
              return Ht(ue, void 0, void 0, function() {
                return Ut(this, function(se) {
                  switch (se.label) {
                    case 0:
                      return i ? [3, 2] : [4, z()];
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
            }, s.revalidateDebounce), [3, 3]) : [3, 1])) : [
              2
              /*return*/
            ];
          case 1:
            return [4, z()];
          case 2:
            re.sent(), re.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, A = function() {
    return Ht(e, void 0, void 0, function() {
      return Ut(this, function(j) {
        return [2, D(null, { shouldRetryOnError: !1 })];
      });
    });
  }, Y = null;
  ao(function() {
    var j = function() {
      return Ht(e, void 0, void 0, function() {
        return Ut(this, function(V) {
          switch (V.label) {
            case 0:
              return !_.error && s.isOnline() ? [4, D()] : [3, 2];
            case 1:
              return V.sent(), [3, 3];
            case 2:
              Y && clearTimeout(Y), V.label = 3;
            case 3:
              return s.refreshInterval && !i && (Y = setTimeout(j, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (Y = setTimeout(j, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", A, !1), window.addEventListener("focus", A, !1));
  }), lo(function() {
    i = !0, Y && clearTimeout(Y), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", A, !1), window.removeEventListener("focus", A, !1));
    var j = er.get(g.value);
    j && (j.data = j.data.filter(function(V) {
      return V !== _;
    }));
  });
  try {
    Jt(g, function(j) {
      Je(g) || (g.value = j), _.key = j, _.isValidating = !!j, vf(g.value, _, u), !d && !a && g.value && D(), a = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var L = at(at({}, La(_)), { mutate: function(j, V) {
    return D(j, at(at({}, V), { forceRevalidate: !0 }));
  } });
  return L;
}
function wf(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Of = bs.default || bs, ys = {}, Es = {};
function xf({
  api: e = "/api/chat",
  id: t,
  initialMessages: n = [],
  initialInput: r = "",
  sendExtraMessageFields: o,
  streamProtocol: s = "data",
  onResponse: i,
  onFinish: a,
  onError: l,
  credentials: f,
  headers: d,
  body: u,
  generateId: g = bo,
  onToolCall: _,
  fetch: D,
  keepLastMessageOnError: A = !0,
  maxSteps: Y = 1,
  experimental_prepareRequestBody: L
} = {
  maxSteps: 1
}) {
  var j, V;
  const B = t ?? g(), y = `${e}|${B}`, { data: b, mutate: T } = Of(
    y,
    () => {
      var W;
      return (W = ys[y]) != null ? W : Rn(n);
    }
  ), R = (j = Es[B]) != null ? j : Es[B] = He(
    "ready"
  );
  (V = b.value) != null || (b.value = Rn(n));
  const P = (W) => (ys[y] = W, T()), z = b, ue = He(void 0), re = He(void 0);
  let se = null;
  async function ye(W, { data: le, headers: me, body: Ve } = {}) {
    var xe, Ye, Pt;
    ue.value = void 0, R.value = "submitted";
    const Cn = z.value.length, Nt = Wr(
      (xe = z.value[z.value.length - 1]) == null ? void 0 : xe.toolInvocations
    );
    try {
      se = new AbortController();
      const dt = Rn(W), c = dt;
      P(c);
      const p = (Ye = re.value) != null ? Ye : [], m = o ? c : c.map(
        ({
          role: N,
          content: E,
          experimental_attachments: v,
          data: I,
          annotations: x,
          toolInvocations: O,
          parts: w
        }) => ({
          role: N,
          content: E,
          ...v !== void 0 && {
            experimental_attachments: v
          },
          ...I !== void 0 && { data: I },
          ...x !== void 0 && { annotations: x },
          ...O !== void 0 && { toolInvocations: O },
          ...w !== void 0 && { parts: w }
        })
      );
      await ff({
        api: e,
        body: (Pt = L?.({
          id: B,
          messages: c,
          requestData: le,
          requestBody: Ve
        })) != null ? Pt : {
          id: B,
          messages: m,
          data: le,
          ...he(u),
          // Use unref to unwrap the ref value
          ...Ve
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...me
        },
        abortController: () => se,
        credentials: f,
        onResponse: i,
        onUpdate({ message: N, data: E, replaceLastMessage: v }) {
          R.value = "streaming", P([
            ...v ? c.slice(0, c.length - 1) : c,
            N
          ]), E?.length && (re.value = [...p, ...E]);
        },
        onFinish: a,
        restoreMessagesOnFailure() {
          A || P(dt);
        },
        generateId: g,
        onToolCall: _,
        fetch: D,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Jr(c[c.length - 1])
      }), R.value = "ready";
    } catch (dt) {
      if (dt.name === "AbortError")
        return se = null, R.value = "ready", null;
      l && dt instanceof Error && l(dt), ue.value = dt, R.value = "error";
    } finally {
      se = null;
    }
    df({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: Cn,
      maxSteps: Y,
      messages: z.value
    }) && await ye(z.value);
  }
  const pe = async (W, le) => {
    var me, Ve, xe;
    const Ye = await gs(
      (me = le?.experimental_attachments) != null ? me : W.experimental_attachments
    );
    return ye(
      z.value.concat({
        ...W,
        id: (Ve = W.id) != null ? Ve : g(),
        createdAt: (xe = W.createdAt) != null ? xe : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Yi(W)
      }),
      le
    );
  }, ae = async (W) => {
    const le = z.value;
    return le.length === 0 ? null : le[le.length - 1].role === "assistant" ? ye(le.slice(0, -1), W) : ye(le, W);
  }, U = () => {
    se && (se.abort(), se = null);
  }, J = (W) => {
    typeof W == "function" && (W = W(z.value)), P(Rn(W));
  }, ke = (W) => {
    typeof W == "function" && (W = W(re.value)), re.value = W;
  }, Et = He(r), vt = async (W, le = {}) => {
    var me;
    (me = W?.preventDefault) == null || me.call(W);
    const Ve = Et.value;
    if (!Ve && !le.allowEmptySubmit)
      return;
    const xe = await gs(
      le.experimental_attachments
    );
    ye(
      z.value.concat({
        id: g(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ve,
        role: "user",
        experimental_attachments: xe.length > 0 ? xe : void 0,
        parts: [{ type: "text", text: Ve }]
      }),
      le
    ), Et.value = "";
  }, ft = ({
    toolCallId: W,
    result: le
  }) => {
    const me = z.value;
    if (pf({
      messages: me,
      toolCallId: W,
      toolResult: le
    }), P(me), R.value === "submitted" || R.value === "streaming")
      return;
    const Ve = me[me.length - 1];
    qi(Ve) && ye(me);
  };
  return {
    id: B,
    messages: z,
    append: pe,
    error: ue,
    reload: ae,
    stop: U,
    setMessages: J,
    input: Et,
    handleSubmit: vt,
    isLoading: _o(
      () => R.value === "submitted" || R.value === "streaming"
    ),
    status: R,
    data: re,
    setData: ke,
    addToolResult: ft
  };
}
function Jr(e) {
  if (Array.isArray(e))
    return [...e.map(Jr)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, r] of Object.entries(e))
      t[n] = Jr(r);
    return t;
  } else
    return e;
}
function Df(e) {
  const t = He(!1), n = He("");
  let r = null, o = [];
  const s = async () => {
    if (!t.value)
      try {
        const l = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        r = new MediaRecorder(l), o = [], r.ondataavailable = (f) => {
          o.push(f.data);
        }, r.onstop = async () => {
          const f = new Blob(o, { type: r?.mimeType });
          await a(f), l.getTracks().forEach((d) => d.stop());
        }, r.start(), t.value = !0, n.value = "";
      } catch (l) {
        n.value = `启动录音失败: ${l.message}`;
      }
  }, i = () => {
    !t.value || !r || (r.stop(), t.value = !1);
  }, a = async (l) => {
    const f = new FormData();
    f.append("audio", l, "recording.webm");
    try {
      const d = await fetch("/api/transcribe", {
        method: "POST",
        body: f
      });
      if (!d.ok) throw new Error("转录请求失败");
      const u = await d.json();
      u.transcript && e(u.transcript);
    } catch (d) {
      n.value = `上传音频失败: ${d.message}`;
    }
  };
  return {
    isRecording: Kn(t),
    error: Kn(n),
    start: s,
    stop: i
  };
}
const Sf = {
  key: 0,
  class: "chat-panel"
}, If = {
  key: 0,
  class: "msg-empty"
}, Cf = ["innerHTML"], Tf = { key: 1 }, Vf = {
  key: 1,
  class: "msg-line msg-ai"
}, Af = {
  key: 0,
  class: "dice"
}, Rf = { key: 1 }, Pf = ["disabled"], Mf = /* @__PURE__ */ ri({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, n = xf({
      // 确保 API 地址指向我们新的 /api/chat
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat")
    }), r = n.messages, o = n.input, s = n.handleSubmit, i = n.isLoading, a = n.error, { isRecording: l, start: f, stop: d } = Df((y) => {
      const b = y.trim();
      if (["发送", "提交", "发出"].includes(b)) return void s();
      if (["清空", "清除", "删除"].includes(b)) return void (o.value = "");
      o.value = b;
    }), u = He(!1), g = On({ x: 0, y: 0 }), _ = He(null), D = He(null), A = He(!1);
    function Y() {
      u.value = !u.value;
    }
    function L() {
      A.value || Y();
    }
    function j(y) {
      return y.trim().startsWith("<audio");
    }
    const V = _o(() => {
      if (!i.value) return !1;
      const y = [...r.value].reverse().find((b) => b.role === "user");
      return !!(y && /摇骰子|掷骰子/.test(y.content));
    });
    Jt(r, async (y, b) => {
      if (!y || y.length === (b?.length || 0)) return;
      const T = y[y.length - 1];
      if (T) {
        if (console.log("最新消息对象结构:", JSON.stringify(T, null, 2)), T.role === "tool" && T.toolName)
          switch (T.toolName) {
            case "navigateToPage": {
              const R = T.result;
              if (R?.page) {
                console.log(`[Watcher] 检测到导航指令, 目标: ${R.page}`);
                let P = "/";
                switch (R.page) {
                  case "portfolio":
                  case "blog":
                  case "archives":
                    P = "/";
                    break;
                  case "about":
                    P = "/about";
                    break;
                  case "contact":
                    P = "/contact";
                    break;
                  default:
                    console.error(`[Watcher] 未知导航目标: ${R.page}`);
                    return;
                }
                console.log(`[Watcher] 执行页面跳转到: ${P}`), window.location.href = P;
              }
              break;
            }
            case "zoomInOnPhoto": {
              const R = T.result;
              R?.title && (console.log(`[Watcher] 检测到放大图片指令, 目标: ${R.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
                detail: { title: R.title },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
          }
        await no(), D.value && (D.value.scrollTop = D.value.scrollHeight);
      }
    }, { deep: !0 }), Jt(a, (y) => {
      y && console.error("[Assistant] An error occurred:", y);
    });
    function B(y) {
      y.preventDefault();
      const b = _.value, T = y.clientX, R = y.clientY, P = g.x, z = g.y;
      let ue = !1;
      function re(ye) {
        const pe = ye.clientX - T, ae = ye.clientY - R;
        if (!ue && (Math.abs(pe) > 5 || Math.abs(ae) > 5) && (ue = !0, A.value = !0), ue) {
          const U = Math.min(Math.max(0, P + pe), window.innerWidth - b.offsetWidth), J = Math.min(Math.max(0, z + ae), window.innerHeight - b.offsetHeight);
          g.x = U, g.y = J;
        }
      }
      function se() {
        document.removeEventListener("mousemove", re), document.removeEventListener("mouseup", se), setTimeout(() => A.value = !1, 10);
      }
      document.addEventListener("mousemove", re), document.addEventListener("mouseup", se);
    }
    return ao(() => {
      const y = _.value, b = 20;
      g.x = window.innerWidth - y.offsetWidth - b, g.y = window.innerHeight - y.offsetHeight - b;
    }), (y, b) => (Ae(), $e("div", {
      ref_key: "containerRef",
      ref: _,
      class: "ai-bubble-container",
      style: sr({ left: g.x + "px", top: g.y + "px" })
    }, [
      ht("div", {
        class: "floating-ball",
        onMousedown: B,
        onClick: L
      }, "AI", 32),
      u.value ? (Ae(), $e("div", Sf, [
        u.value ? (Ae(), $e("div", {
          key: 0,
          class: "close-btn",
          onClick: Y
        }, "×")) : Qt("", !0),
        ht("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: D
        }, [
          he(r).length === 0 ? (Ae(), $e("div", If, "有什么可以帮您的吗？")) : Qt("", !0),
          (Ae(!0), $e(je, null, Cl(he(r), (T) => (Ae(), $e("div", {
            key: T.id,
            class: un(["msg-line", T.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            T.role === "user" || T.role === "assistant" ? (Ae(), $e(je, { key: 0 }, [
              j(T.content) ? (Ae(), $e("div", {
                key: 0,
                innerHTML: T.content
              }, null, 8, Cf)) : (Ae(), $e("div", Tf, Ds(T.content), 1))
            ], 64)) : Qt("", !0)
          ], 2))), 128)),
          he(i) ? (Ae(), $e("div", Vf, [
            V.value ? (Ae(), $e("span", Af, "⚀⚂⚅")) : (Ae(), $e("span", Rf, "思考中..."))
          ])) : Qt("", !0)
        ], 512),
        ht("form", {
          onSubmit: b[3] || (b[3] = ls(
            //@ts-ignore
            (...T) => he(s) && he(s)(...T),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          pl(ht("textarea", {
            "onUpdate:modelValue": b[0] || (b[0] = (T) => ce(o) ? o.value = T : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: b[1] || (b[1] = au(ls(
              //@ts-ignore
              (...T) => he(s) && he(s)(...T),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ru, he(o)]
          ]),
          ht("button", {
            type: "button",
            class: un(["btn-voice", { listening: he(l) }]),
            onClick: b[2] || (b[2] = (T) => he(l) ? he(d)() : he(f)()),
            title: "语音输入"
          }, "🎤", 2),
          ht("button", {
            type: "submit",
            class: "btn-send",
            disabled: he(i) || !he(o).trim()
          }, "➤", 8, Pf)
        ], 32)
      ])) : Qt("", !0)
    ], 4));
  }
}), kf = ".ai-bubble-container{position:fixed;z-index:9999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", $f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, jf = /* @__PURE__ */ $f(Mf, [["styles", [kf]]]), Ff = /* @__PURE__ */ eu(jf);
customElements.define("ai-chat-bubble", Ff);
