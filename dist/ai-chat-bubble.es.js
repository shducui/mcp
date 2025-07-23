var Es = {};
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = Es.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = Es.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
}, zi = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Yr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xi = Object.prototype.hasOwnProperty, q = (e, t) => Xi.call(e, t), P = Array.isArray, It = (e) => tr(e) === "[object Map]", bs = (e) => tr(e) === "[object Set]", L = (e) => typeof e == "function", oe = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", qr = (e) => (ee(e) || L(e)) && L(e.then) && L(e.catch), vs = Object.prototype.toString, tr = (e) => vs.call(e), Gr = (e) => tr(e).slice(8, -1), nr = (e) => tr(e) === "[object Object]", zr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ dt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zi = /* @__PURE__ */ dt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Qi = /-(\w)/g, Ve = rr(
  (e) => e.replace(Qi, (t, n) => n ? n.toUpperCase() : "")
), ea = /\B([A-Z])/g, Te = rr(
  (e) => e.replace(ea, "-$1").toLowerCase()
), or = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = rr(
  (e) => e ? `on${or(e)}` : ""
), Et = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ln = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, No = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let wo;
const Nn = () => wo || (wo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sr(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = oe(r) ? oa(r) : sr(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (oe(e) || ee(e))
    return e;
}
const ta = /;(?![^(]*\))/g, na = /:([^]+)/, ra = /\/\*[^]*?\*\//g;
function oa(e) {
  const t = {};
  return e.replace(ra, "").split(ta).forEach((n) => {
    if (n) {
      const r = n.split(na);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function cn(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const r = cn(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const sa = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ia = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", aa = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", la = /* @__PURE__ */ dt(sa), ca = /* @__PURE__ */ dt(ia), ua = /* @__PURE__ */ dt(aa), fa = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", da = /* @__PURE__ */ dt(fa);
function Ns(e) {
  return !!e || e === "";
}
const ws = (e) => !!(e && e.__v_isRef === !0), Os = (e) => oe(e) ? e : e == null ? "" : P(e) || ee(e) && (e.toString === vs || !L(e.toString)) ? ws(e) ? Os(e.value) : JSON.stringify(e, xs, 2) : String(e), xs = (e, t) => ws(t) ? xs(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[gr(r, s) + " =>"] = o, n),
    {}
  )
} : bs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gr(n))
} : vt(t) ? gr(t) : ee(t) && !P(t) && !nr(t) ? String(t) : t, gr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var te = {};
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ce;
class pa {
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
    } else te.NODE_ENV !== "production" && Ke("cannot run an inactive effect scope.");
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
function ha() {
  return Ce;
}
let X;
const _r = /* @__PURE__ */ new WeakSet();
class Ds {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Is(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oo(this), Cs(this);
    const t = X, n = Be;
    X = this, Be = !0;
    try {
      return this.fn();
    } finally {
      te.NODE_ENV !== "production" && X !== this && Ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ts(this), X = t, Be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qr(t);
      this.deps = this.depsTail = void 0, Oo(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Ss = 0, tn, nn;
function Is(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = nn, nn = e;
    return;
  }
  e.next = tn, tn = e;
}
function Xr() {
  Ss++;
}
function Zr() {
  if (--Ss > 0)
    return;
  if (nn) {
    let t = nn;
    for (nn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; tn; ) {
    let t = tn;
    for (tn = void 0; t; ) {
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
function Cs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ts(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Qr(r), ga(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === un) || (e.globalVersion = un, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = Be;
  X = e, Be = !0;
  try {
    Cs(e);
    const o = e.fn(e._value);
    (t.version === 0 || Et(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, Be = r, Ts(e), e.flags &= -3;
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
function ga(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Be = !0;
const As = [];
function We() {
  As.push(Be), Be = !1;
}
function Je() {
  const e = As.pop();
  Be = e === void 0 ? !0 : e;
}
function Oo(e) {
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
let un = 0;
class _a {
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
    if (!X || !Be || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new _a(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Rs(n);
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
    this.version++, un++, this.notify(t);
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
function Rs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Rs(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), te.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), Ct = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Vr = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ue(e, t, n) {
  if (Be && X) {
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
function et(e, t, n, r, o, s) {
  const i = Bn.get(e);
  if (!i) {
    un++;
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
    const l = P(e), u = l && zr(n);
    if (l && n === "length") {
      const d = Number(r);
      i.forEach((f, g) => {
        (g === "length" || g === fn || !vt(g) && g >= d) && a(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(fn)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Ct)), It(e) && a(i.get(Vr)));
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
function ma(e, t) {
  const n = Bn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = K(e);
  return t === e ? t : (ue(t, "iterate", fn), Oe(e) ? t : t.map(_e));
}
function ir(e) {
  return ue(e = K(e), "iterate", fn), e;
}
const ya = {
  __proto__: null,
  [Symbol.iterator]() {
    return mr(this, Symbol.iterator, _e);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => P(t) ? Mt(t) : t)
    );
  },
  entries() {
    return mr(this, "entries", (e) => (e[1] = _e(e[1]), e));
  },
  every(e, t) {
    return lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lt(this, "filter", e, t, (n) => n.map(_e), arguments);
  },
  find(e, t) {
    return lt(this, "find", e, t, _e, arguments);
  },
  findIndex(e, t) {
    return lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lt(this, "findLast", e, t, _e, arguments);
  },
  findLastIndex(e, t) {
    return lt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return lt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yr(this, "includes", e);
  },
  indexOf(...e) {
    return yr(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return yr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return xo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xo(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
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
    return Gt(this, "unshift", e);
  },
  values() {
    return mr(this, "values", _e);
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
function lt(e, t, n, r, o, s) {
  const i = ir(e), a = i !== e && !Oe(e), l = i[t];
  if (l !== Ea[t]) {
    const f = l.apply(e, s);
    return a ? _e(f) : f;
  }
  let u = n;
  i !== e && (a ? u = function(f, g) {
    return n.call(this, _e(f), g, e);
  } : n.length > 2 && (u = function(f, g) {
    return n.call(this, f, g, e);
  }));
  const d = l.call(i, u, r);
  return a && o ? o(d) : d;
}
function xo(e, t, n, r) {
  const o = ir(e);
  let s = n;
  return o !== e && (Oe(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, _e(a), l, e);
  }), o[t](s, ...r);
}
function yr(e, t, n) {
  const r = K(e);
  ue(r, "iterate", fn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && dn(n[0]) ? (n[0] = K(n[0]), r[t](...n)) : o;
}
function Gt(e, t, n = []) {
  We(), Xr();
  const r = K(e)[t].apply(e, n);
  return Zr(), Je(), r;
}
const ba = /* @__PURE__ */ dt("__proto__,__v_isRef,__isVue"), Ps = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
);
function va(e) {
  vt(e) || (e = String(e));
  const t = K(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class Ms {
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
      return r === (o ? s ? Hs : Ls : s ? Fs : js).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = P(t);
    if (!o) {
      let l;
      if (i && (l = ya[n]))
        return l;
      if (n === "hasOwnProperty")
        return va;
    }
    const a = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      le(t) ? t : r
    );
    return (vt(n) ? Ps.has(n) : ba(n)) || (o || ue(t, "get", n), s) ? a : le(a) ? i && zr(n) ? a : a.value : ee(a) ? o ? Kn(a) : wn(a) : a;
  }
}
class ks extends Ms {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const l = Ye(s);
      if (!Oe(r) && !Ye(r) && (s = K(s), r = K(r)), !P(t) && le(s) && !le(r))
        return l ? !1 : (s.value = r, !0);
    }
    const i = P(t) && zr(n) ? Number(n) < t.length : q(t, n), a = Reflect.set(
      t,
      n,
      r,
      le(t) ? t : o
    );
    return t === K(o) && (i ? Et(r, s) && et(t, "set", n, r, s) : et(t, "add", n, r)), a;
  }
  deleteProperty(t, n) {
    const r = q(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && et(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!vt(n) || !Ps.has(n)) && ue(t, "has", n), r;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      P(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class $s extends Ms {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return te.NODE_ENV !== "production" && Ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return te.NODE_ENV !== "production" && Ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Na = /* @__PURE__ */ new ks(), wa = /* @__PURE__ */ new $s(), Oa = /* @__PURE__ */ new ks(!0), xa = /* @__PURE__ */ new $s(!0), Ar = (e) => e, Cn = (e) => Reflect.getPrototypeOf(e);
function Da(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = K(o), i = It(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), d = n ? Ar : t ? Wn : _e;
    return !t && ue(
      s,
      "iterate",
      l ? Vr : Ct
    ), {
      // iterator protocol
      next() {
        const { value: f, done: g } = u.next();
        return g ? { value: f, done: g } : {
          value: a ? [d(f[0]), d(f[1])] : d(f),
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
function Tn(e) {
  return function(...t) {
    if (te.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ke(
        `${or(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sa(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = K(s), a = K(o);
      e || (Et(o, a) && ue(i, "get", o), ue(i, "get", a));
      const { has: l } = Cn(i), u = t ? Ar : e ? Wn : _e;
      if (l.call(i, o))
        return u(s.get(o));
      if (l.call(i, a))
        return u(s.get(a));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ue(K(o), "iterate", Ct), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = K(s), a = K(o);
      return e || (Et(o, a) && ue(i, "has", o), ue(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
    },
    forEach(o, s) {
      const i = this, a = i.__v_raw, l = K(a), u = t ? Ar : e ? Wn : _e;
      return !e && ue(l, "iterate", Ct), a.forEach((d, f) => o.call(s, u(d), u(f), i));
    }
  };
  return ie(
    n,
    e ? {
      add: Tn("add"),
      set: Tn("set"),
      delete: Tn("delete"),
      clear: Tn("clear")
    } : {
      add(o) {
        !t && !Oe(o) && !Ye(o) && (o = K(o));
        const s = K(this);
        return Cn(s).has.call(s, o) || (s.add(o), et(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Oe(s) && !Ye(s) && (s = K(s));
        const i = K(this), { has: a, get: l } = Cn(i);
        let u = a.call(i, o);
        u ? te.NODE_ENV !== "production" && Do(i, a, o) : (o = K(o), u = a.call(i, o));
        const d = l.call(i, o);
        return i.set(o, s), u ? Et(s, d) && et(i, "set", o, s, d) : et(i, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: i, get: a } = Cn(s);
        let l = i.call(s, o);
        l ? te.NODE_ENV !== "production" && Do(s, i, o) : (o = K(o), l = i.call(s, o));
        const u = a ? a.call(s, o) : void 0, d = s.delete(o);
        return l && et(s, "delete", o, void 0, u), d;
      },
      clear() {
        const o = K(this), s = o.size !== 0, i = te.NODE_ENV !== "production" ? It(o) ? new Map(o) : new Set(o) : void 0, a = o.clear();
        return s && et(
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
    n[o] = Da(o, e, t);
  }), n;
}
function ar(e, t) {
  const n = Sa(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    q(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Ia = {
  get: /* @__PURE__ */ ar(!1, !1)
}, Ca = {
  get: /* @__PURE__ */ ar(!1, !0)
}, Ta = {
  get: /* @__PURE__ */ ar(!0, !1)
}, Va = {
  get: /* @__PURE__ */ ar(!0, !0)
};
function Do(e, t, n) {
  const r = K(n);
  if (r !== n && t.call(e, r)) {
    const o = Gr(e);
    Ke(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const js = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap();
function Aa(e) {
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
function Ra(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Aa(Gr(e));
}
function wn(e) {
  return Ye(e) ? e : lr(
    e,
    !1,
    Na,
    Ia,
    js
  );
}
function Pa(e) {
  return lr(
    e,
    !1,
    Oa,
    Ca,
    Fs
  );
}
function Kn(e) {
  return lr(
    e,
    !0,
    wa,
    Ta,
    Ls
  );
}
function nt(e) {
  return lr(
    e,
    !0,
    xa,
    Va,
    Hs
  );
}
function lr(e, t, n, r, o) {
  if (!ee(e))
    return te.NODE_ENV !== "production" && Ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Ra(e);
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
  return Ye(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function dn(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function Ma(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && ln(e, "__v_skip", !0), e;
}
const _e = (e) => ee(e) ? wn(e) : e, Wn = (e) => ee(e) ? Kn(e) : e;
function le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ue(e) {
  return ka(e, !1);
}
function ka(e, t) {
  return le(e) ? e : new $a(e, t);
}
class $a {
  constructor(t, n) {
    this.dep = new eo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : K(t), this._value = n ? t : _e(t), this.__v_isShallow = n;
  }
  get value() {
    return te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || Ye(t);
    t = r ? t : K(t), Et(t, n) && (this._rawValue = t, this._value = r ? t : _e(t), te.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ge(e) {
  return le(e) ? e.value : e;
}
const ja = {
  get: (e, t, n) => t === "__v_raw" ? e : ge(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return le(o) && !le(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Us(e) {
  return Tt(e) ? e : new Proxy(e, ja);
}
function Fa(e) {
  te.NODE_ENV !== "production" && !dn(e) && Ke("toRefs() expects a reactive object but received a plain one.");
  const t = P(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ha(e, n);
  return t;
}
class La {
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
    return ma(K(this._object), this._key);
  }
}
function Ha(e, t, n) {
  const r = e[t];
  return le(r) ? r : new La(e, t, n);
}
class Ua {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new eo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = un - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Is(this, !0), !0;
  }
  get value() {
    const t = te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Vs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : te.NODE_ENV !== "production" && Ke("Write operation failed: computed value is readonly");
  }
}
function Ba(e, t, n = !1) {
  let r, o;
  return L(e) ? r = e : (r = e.get, o = e.set), new Ua(r, o, n);
}
const Vn = {}, Jn = /* @__PURE__ */ new WeakMap();
let St;
function Ka(e, t = !1, n = St) {
  if (n) {
    let r = Jn.get(n);
    r || Jn.set(n, r = []), r.push(e);
  } else te.NODE_ENV !== "production" && !t && Ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Wa(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (y) => {
    (n.onWarn || Ke)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (y) => o ? y : Oe(y) || o === !1 || o === 0 ? ft(y, 1) : ft(y);
  let f, g, _, S, V = !1, Y = !1;
  if (le(e) ? (g = () => e.value, V = Oe(e)) : Tt(e) ? (g = () => d(e), V = !0) : P(e) ? (Y = !0, V = e.some((y) => Tt(y) || Oe(y)), g = () => e.map((y) => {
    if (le(y))
      return y.value;
    if (Tt(y))
      return d(y);
    if (L(y))
      return l ? l(y, 2) : y();
    te.NODE_ENV !== "production" && u(y);
  })) : L(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
    if (_) {
      We();
      try {
        _();
      } finally {
        Je();
      }
    }
    const y = St;
    St = f;
    try {
      return l ? l(e, 3, [S]) : e(S);
    } finally {
      St = y;
    }
  } : (g = fe, te.NODE_ENV !== "production" && u(e)), t && o) {
    const y = g, E = o === !0 ? 1 / 0 : o;
    g = () => ft(y(), E);
  }
  const H = ha(), F = () => {
    f.stop(), H && H.active && Yr(H.effects, f);
  };
  if (s && t) {
    const y = t;
    t = (...E) => {
      y(...E), F();
    };
  }
  let T = Y ? new Array(e.length).fill(Vn) : Vn;
  const A = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const E = f.run();
        if (o || V || (Y ? E.some((k, $) => Et(k, T[$])) : Et(E, T))) {
          _ && _();
          const k = St;
          St = f;
          try {
            const $ = [
              E,
              // pass undefined as the old value when it's changed for the first time
              T === Vn ? void 0 : Y && T[0] === Vn ? [] : T,
              S
            ];
            T = E, l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            St = k;
          }
        }
      } else
        f.run();
  };
  return a && a(A), f = new Ds(g), f.scheduler = i ? () => i(A, !1) : A, S = (y) => Ka(y, !1, f), _ = f.onStop = () => {
    const y = Jn.get(f);
    if (y) {
      if (l)
        l(y, 4);
      else
        for (const E of y) E();
      Jn.delete(f);
    }
  }, te.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? r ? A(!0) : T = f.run() : i ? i(A.bind(null, !0), !0) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
}
function ft(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, le(e))
    ft(e.value, t, n);
  else if (P(e))
    for (let r = 0; r < e.length; r++)
      ft(e[r], t, n);
  else if (bs(e) || It(e))
    e.forEach((r) => {
      ft(r, t, n);
    });
  else if (nr(e)) {
    for (const r in e)
      ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ft(e[r], t, n);
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
let Er = !1;
function D(e, ...t) {
  if (Er) return;
  Er = !0, We();
  const n = Vt.length ? Vt[Vt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Ja();
  if (r)
    Yt(
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
`, ...Ya(o)), console.warn(...s);
  }
  Je(), Er = !1;
}
function Ja() {
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
function Ya(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...qa(n));
  }), t;
}
function qa({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${hr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Ga(e.props), s] : [o + s];
}
function Ga(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Bs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Bs(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = Bs(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
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
function Yt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    On(o, t, n);
  }
}
function st(e, t, n, r) {
  if (L(e)) {
    const o = Yt(e, t, n, r);
    return o && qr(o) && o.catch((s) => {
      On(s, t, n);
    }), o;
  }
  if (P(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(st(e[s], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && D(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function On(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let a = t.parent;
    const l = t.proxy, u = h.NODE_ENV !== "production" ? to[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, l, u) === !1)
            return;
      }
      a = a.parent;
    }
    if (s) {
      We(), Yt(s, null, 10, [
        e,
        l,
        u
      ]), Je();
      return;
    }
  }
  za(e, n, o, r, i);
}
function za(e, t, n, r = !0, o = !1) {
  if (h.NODE_ENV !== "production") {
    const s = to[t];
    if (n && Pn(n), D(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Mn(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const we = [];
let Qe = -1;
const Kt = [];
let _t = null, Ft = 0;
const Ks = /* @__PURE__ */ Promise.resolve();
let Yn = null;
const Xa = 100;
function no(e) {
  const t = Yn || Ks;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Za(e) {
  let t = Qe + 1, n = we.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = we[r], s = pn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function cr(e) {
  if (!(e.flags & 1)) {
    const t = pn(e), n = we[we.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pn(n) ? we.push(e) : we.splice(Za(t), 0, e), e.flags |= 1, Ws();
  }
}
function Ws() {
  Yn || (Yn = Ks.then(qs));
}
function Js(e) {
  P(e) ? Kt.push(...e) : _t && e.id === -1 ? _t.splice(Ft + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Ws();
}
function So(e, t, n = Qe + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < we.length; n++) {
    const r = we[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && ro(t, r))
        continue;
      we.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ys(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, r) => pn(n) - pn(r)
    );
    if (Kt.length = 0, _t) {
      _t.push(...t);
      return;
    }
    for (_t = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ft = 0; Ft < _t.length; Ft++) {
      const n = _t[Ft];
      h.NODE_ENV !== "production" && ro(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    _t = null, Ft = 0;
  }
}
const pn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qs(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => ro(e, n) : fe;
  try {
    for (Qe = 0; Qe < we.length; Qe++) {
      const n = we[Qe];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Yt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Qe < we.length; Qe++) {
      const n = we[Qe];
      n && (n.flags &= -2);
    }
    Qe = -1, we.length = 0, Ys(e), Yn = null, (we.length || Kt.length) && qs(e);
  }
}
function ro(e, t) {
  const n = e.get(t) || 0;
  if (n > Xa) {
    const r = t.i, o = r && Ci(r.type);
    return On(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let rt = !1;
const kn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (Nn().__VUE_HMR_RUNTIME__ = {
  createRecord: br(Gs),
  rerender: br(tl),
  reload: br(nl)
});
const Rt = /* @__PURE__ */ new Map();
function Qa(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (Gs(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function el(e) {
  Rt.get(e.type.__hmrId).instances.delete(e);
}
function Gs(e, t) {
  return Rt.has(e) ? !1 : (Rt.set(e, {
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return Ti(e) ? e.__vccOpts : e;
}
function tl(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, qn(r.type).render = t), r.renderCache = [], rt = !0, r.update(), rt = !1;
  }));
}
function nl(e, t) {
  const n = Rt.get(e);
  if (!n) return;
  t = qn(t), Io(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = qn(s.type);
    let a = kn.get(i);
    a || (i !== n.initialDef && Io(i, t), kn.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? cr(() => {
      rt = !0, s.parent.update(), rt = !1, a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Js(() => {
    kn.clear();
  });
}
function Io(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function br(e) {
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
let tt, Zt = [], Rr = !1;
function xn(e, ...t) {
  tt ? tt.emit(e, ...t) : Rr || Zt.push({ event: e, args: t });
}
function zs(e, t) {
  var n, r;
  tt = e, tt ? (tt.enabled = !0, Zt.forEach(({ event: o, args: s }) => tt.emit(o, ...s)), Zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    zs(s, t);
  }), setTimeout(() => {
    tt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Rr = !0, Zt = []);
  }, 3e3)) : (Rr = !0, Zt = []);
}
function rl(e, t) {
  xn("app:init", e, t, {
    Fragment: Le,
    Text: Dn,
    Comment: ke,
    Static: Fn
  });
}
function ol(e) {
  xn("app:unmount", e);
}
const sl = /* @__PURE__ */ oo(
  "component:added"
  /* COMPONENT_ADDED */
), Xs = /* @__PURE__ */ oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), il = /* @__PURE__ */ oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), al = (e) => {
  tt && typeof tt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !tt.cleanupBuffer(e) && il(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oo(e) {
  return (t) => {
    xn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const ll = /* @__PURE__ */ Zs(
  "perf:start"
  /* PERFORMANCE_START */
), cl = /* @__PURE__ */ Zs(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zs(e) {
  return (t, n, r) => {
    xn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function ul(e, t, n) {
  xn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ee = null, Qs = null;
function Gn(e) {
  const t = Ee;
  return Ee = e, Qs = e && e.type.__scopeId || null, t;
}
function fl(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Lo(-1);
    const s = Gn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Gn(s), r._d && Lo(1);
    }
    return h.NODE_ENV !== "production" && Xs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ei(e) {
  Zi(e) && D("Do not use built-in directive ids as custom directive id: " + e);
}
function dl(e, t) {
  if (Ee === null)
    return h.NODE_ENV !== "production" && D("withDirectives can only be used inside render functions."), e;
  const n = pr(Ee), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, a, l = Z] = t[o];
    s && (L(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ft(i), r.push({
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
    l && (We(), st(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), Je());
  }
}
const pl = Symbol("_vte"), hl = (e) => e.__isTeleport;
function so(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, so(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ti(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function ni(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const gl = /* @__PURE__ */ new WeakSet();
function rn(e, t, n, r, o = !1) {
  if (P(e)) {
    e.forEach(
      (S, V) => rn(
        S,
        t && (P(t) ? t[V] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (on(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && rn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? pr(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e;
  if (h.NODE_ENV !== "production" && !a) {
    D(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = a.refs === Z ? a.refs = {} : a.refs, f = a.setupState, g = K(f), _ = f === Z ? () => !1 : (S) => h.NODE_ENV !== "production" && (q(g, S) && !le(g[S]) && D(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), gl.has(g[S])) ? !1 : q(g, S);
  if (u != null && u !== l && (oe(u) ? (d[u] = null, _(u) && (f[u] = null)) : le(u) && (u.value = null)), L(l))
    Yt(l, a, 12, [i, d]);
  else {
    const S = oe(l), V = le(l);
    if (S || V) {
      const Y = () => {
        if (e.f) {
          const H = S ? _(l) ? f[l] : d[l] : l.value;
          o ? P(H) && Yr(H, s) : P(H) ? H.includes(s) || H.push(s) : S ? (d[l] = [s], _(l) && (f[l] = d[l])) : (l.value = [s], e.k && (d[e.k] = l.value));
        } else S ? (d[l] = i, _(l) && (f[l] = i)) : V ? (l.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && D("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (Y.id = -1, Re(Y, n)) : Y();
    } else h.NODE_ENV !== "production" && D("Invalid template ref type:", l, `(${typeof l})`);
  }
}
Nn().requestIdleCallback;
Nn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, io = (e) => e.type.__isKeepAlive;
function _l(e, t) {
  ri(e, "a", t);
}
function ml(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = pe) {
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
function ur(e, t, n = pe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      We();
      const a = Sn(n), l = st(t, n, e, i);
      return a(), Je(), l;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const o = Dt(to[e].replace(/ hook$/, ""));
    D(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const pt = (e) => (t, n = pe) => {
  (!gn || e === "sp") && ur(e, (...r) => t(...r), n);
}, El = pt("bm"), ao = pt("m"), bl = pt(
  "bu"
), vl = pt("u"), Nl = pt(
  "bum"
), lo = pt("um"), wl = pt(
  "sp"
), Ol = pt("rtg"), xl = pt("rtc");
function Dl(e, t = pe) {
  ur("ec", e, t);
}
const Sl = Symbol.for("v-ndc");
function Il(e, t, n, r) {
  let o;
  const s = n, i = P(e);
  if (i || oe(e)) {
    const a = i && Tt(e);
    let l = !1, u = !1;
    a && (l = !Oe(e), u = Ye(e), e = ir(e)), o = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      o[d] = t(
        l ? u ? Wn(_e(e[d])) : _e(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && D(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
      for (let l = 0, u = a.length; l < u; l++) {
        const d = a[l];
        o[l] = t(e[d], d, l, s);
      }
    }
  else
    o = [];
  return o;
}
const Pr = (e) => e ? Si(e) ? pr(e) : Pr(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? nt(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? nt(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? nt(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? nt(e.refs) : e.refs,
    $parent: (e) => Pr(e.parent),
    $root: (e) => Pr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ii(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = no.bind(e.proxy)),
    $watch: (e) => ac.bind(e)
  })
), co = (e) => e === "_" || e === "$", vr = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), oi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
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
          (u = e.propsOptions[0]) && q(u, t)
        )
          return i[t] = 3, s[t];
        if (n !== Z && q(n, t))
          return i[t] = 4, n[t];
        Mr && (i[t] = 0);
      }
    }
    const d = At[t];
    let f, g;
    if (d)
      return t === "$attrs" ? (ue(e.attrs, "get", ""), h.NODE_ENV !== "production" && Zn()) : h.NODE_ENV !== "production" && t === "$slots" && ue(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = a.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Z && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = l.config.globalProperties, q(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && Ee && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && co(t[0]) && q(o, t) ? D(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && D(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return vr(o, t) ? (o[t] = n, !0) : h.NODE_ENV !== "production" && o.__isScriptSetup && q(o, t) ? (D(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Z && q(r, t) ? (r[t] = n, !0) : q(e.props, t) ? (h.NODE_ENV !== "production" && D(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && D(
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
h.NODE_ENV !== "production" && (oi.ownKeys = (e) => (D(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Cl(e) {
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
      set: fe
    });
  }), t;
}
function Tl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: fe
    });
  });
}
function Vl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(K(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (co(r[0])) {
        D(
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
        set: fe
      });
    }
  });
}
function Co(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Al() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? D(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Mr = !0;
function Rl(e) {
  const t = ii(e), n = e.proxy, r = e.ctx;
  Mr = !1, t.beforeCreate && To(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: g,
    beforeUpdate: _,
    updated: S,
    activated: V,
    deactivated: Y,
    beforeDestroy: H,
    beforeUnmount: F,
    destroyed: T,
    unmounted: A,
    render: y,
    renderTracked: E,
    renderTriggered: k,
    errorCaptured: $,
    serverPrefetch: M,
    // public API
    expose: z,
    inheritAttrs: de,
    // assets
    components: re,
    directives: se,
    filters: be
  } = t, he = h.NODE_ENV !== "production" ? Al() : null;
  if (h.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const J in B)
        he("Props", J);
  }
  if (u && Pl(u, r, he), i)
    for (const B in i) {
      const J = i[B];
      L(J) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = J.bind(n), h.NODE_ENV !== "production" && he("Methods", B)) : h.NODE_ENV !== "production" && D(
        `Method "${B}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !L(o) && D(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = o.call(n, n);
    if (h.NODE_ENV !== "production" && qr(B) && D(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(B))
      h.NODE_ENV !== "production" && D("data() should return an object.");
    else if (e.data = wn(B), h.NODE_ENV !== "production")
      for (const J in B)
        he("Data", J), co(J[0]) || Object.defineProperty(r, J, {
          configurable: !0,
          enumerable: !0,
          get: () => B[J],
          set: fe
        });
  }
  if (Mr = !0, s)
    for (const B in s) {
      const J = s[B], xe = L(J) ? J.bind(n, n) : L(J.get) ? J.get.bind(n, n) : fe;
      h.NODE_ENV !== "production" && xe === fe && D(`Computed property "${B}" has no getter.`);
      const it = !L(J) && L(J.set) ? J.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        D(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : fe, at = go({
        get: xe,
        set: it
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: (ht) => at.value = ht
      }), h.NODE_ENV !== "production" && he("Computed", B);
    }
  if (a)
    for (const B in a)
      si(a[B], r, n, B);
  if (l) {
    const B = L(l) ? l.call(n) : l;
    Reflect.ownKeys(B).forEach((J) => {
      Ll(J, B[J]);
    });
  }
  d && To(d, e, "c");
  function ce(B, J) {
    P(J) ? J.forEach((xe) => B(xe.bind(n))) : J && B(J.bind(n));
  }
  if (ce(El, f), ce(ao, g), ce(bl, _), ce(vl, S), ce(_l, V), ce(ml, Y), ce(Dl, $), ce(xl, E), ce(Ol, k), ce(Nl, F), ce(lo, A), ce(wl, M), P(z))
    if (z.length) {
      const B = e.exposed || (e.exposed = {});
      z.forEach((J) => {
        Object.defineProperty(B, J, {
          get: () => n[J],
          set: (xe) => n[J] = xe
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === fe && (e.render = y), de != null && (e.inheritAttrs = de), re && (e.components = re), se && (e.directives = se), M && ni(e);
}
function Pl(e, t, n = fe) {
  P(e) && (e = kr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = $n(
      o.from || r,
      o.default,
      !0
    ) : s = $n(o.from || r) : s = $n(o), le(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function To(e, t, n) {
  st(
    P(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function si(e, t, n, r) {
  let o = r.includes(".") ? yi(n, r) : () => n[r];
  if (oe(e)) {
    const s = t[e];
    L(s) ? sn(o, s) : h.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e}"`, s);
  } else if (L(e))
    sn(o, e.bind(n));
  else if (ee(e))
    if (P(e))
      e.forEach((s) => si(s, t, n, r));
    else {
      const s = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(s) ? sn(o, s, e) : h.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && D(`Invalid watch option: "${r}"`, e);
}
function ii(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(
    (u) => zn(l, u, i, !0)
  ), zn(l, t, i)), ee(t) && s.set(t, l), l;
}
function zn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && zn(e, s, n, !0), o && o.forEach(
    (i) => zn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      h.NODE_ENV !== "production" && D(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ml[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Ml = {
  data: Vo,
  props: Ao,
  emits: Ao,
  // objects
  methods: Qt,
  computed: Qt,
  // lifecycle
  beforeCreate: Ne,
  created: Ne,
  beforeMount: Ne,
  mounted: Ne,
  beforeUpdate: Ne,
  updated: Ne,
  beforeDestroy: Ne,
  beforeUnmount: Ne,
  destroyed: Ne,
  unmounted: Ne,
  activated: Ne,
  deactivated: Ne,
  errorCaptured: Ne,
  serverPrefetch: Ne,
  // assets
  components: Qt,
  directives: Qt,
  // watch
  watch: $l,
  // provide / inject
  provide: Vo,
  inject: kl
};
function Vo(e, t) {
  return t ? e ? function() {
    return ie(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function kl(e, t) {
  return Qt(kr(e), kr(t));
}
function kr(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Co(e),
    Co(t ?? {})
  ) : t;
}
function $l(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ne(e[r], t[r]);
  return n;
}
function ai() {
  return {
    app: null,
    config: {
      isNativeTag: zi,
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
let jl = 0;
function Fl(e, t) {
  return function(r, o = null) {
    L(r) || (r = ie({}, r)), o != null && !ee(o) && (h.NODE_ENV !== "production" && D("root props passed to app.mount() must be an object."), o = null);
    const s = ai(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const u = s.app = {
      _uid: jl++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Ko,
      get config() {
        return s.config;
      },
      set config(d) {
        h.NODE_ENV !== "production" && D(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return i.has(d) ? h.NODE_ENV !== "production" && D("Plugin has already been applied to target app.") : d && L(d.install) ? (i.add(d), d.install(u, ...f)) : L(d) ? (i.add(d), d(u, ...f)) : h.NODE_ENV !== "production" && D(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && D(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), u;
      },
      component(d, f) {
        return h.NODE_ENV !== "production" && Hr(d, s.config), f ? (h.NODE_ENV !== "production" && s.components[d] && D(`Component "${d}" has already been registered in target app.`), s.components[d] = f, u) : s.components[d];
      },
      directive(d, f) {
        return h.NODE_ENV !== "production" && ei(d), f ? (h.NODE_ENV !== "production" && s.directives[d] && D(`Directive "${d}" has already been registered in target app.`), s.directives[d] = f, u) : s.directives[d];
      },
      mount(d, f, g) {
        if (l)
          h.NODE_ENV !== "production" && D(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && D(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = u._ceVNode || ot(r, o);
          return _.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const S = bt(_);
            S.el = null, e(S, d, g);
          }), e(_, d, g), l = !0, u._container = d, d.__vue_app__ = u, h.NODE_ENV !== "production" && (u._instance = _.component, rl(u, Ko)), pr(_.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && D(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), a.push(d);
      },
      unmount() {
        l ? (st(
          a,
          u._instance,
          16
        ), e(null, u._container), h.NODE_ENV !== "production" && (u._instance = null, ol(u)), delete u._container.__vue_app__) : h.NODE_ENV !== "production" && D("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return h.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? D(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : D(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = f, u;
      },
      runWithContext(d) {
        const f = Wt;
        Wt = u;
        try {
          return d();
        } finally {
          Wt = f;
        }
      }
    };
    return u;
  };
}
let Wt = null;
function Ll(e, t) {
  if (!pe)
    h.NODE_ENV !== "production" && D("provide() can only be used inside setup().");
  else {
    let n = pe.provides;
    const r = pe.parent && pe.parent.provides;
    r === n && (n = pe.provides = Object.create(r)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const r = pe || Ee;
  if (r || Wt) {
    let o = Wt ? Wt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
const li = {}, ci = () => Object.create(li), ui = (e) => Object.getPrototypeOf(e) === li;
function Hl(e, t, n, r = !1) {
  const o = {}, s = ci();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  h.NODE_ENV !== "production" && pi(t || {}, o, e), n ? e.props = r ? o : Pa(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ul(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Bl(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = K(o), [l] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Ul(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let g = d[f];
        if (fr(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (l)
          if (q(s, g))
            _ !== s[g] && (s[g] = _, u = !0);
          else {
            const S = Ve(g);
            o[S] = $r(
              l,
              a,
              S,
              _,
              e,
              !1
            );
          }
        else
          _ !== s[g] && (s[g] = _, u = !0);
      }
    }
  } else {
    fi(e, t, o, s) && (u = !0);
    let d;
    for (const f in a)
      (!t || // for camelCase
      !q(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Te(f)) === f || !q(t, d))) && (l ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[f] = $r(
        l,
        a,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== a)
      for (const f in s)
        (!t || !q(t, f)) && (delete s[f], u = !0);
  }
  u && et(e.attrs, "set", ""), h.NODE_ENV !== "production" && pi(t || {}, o, e);
}
function fi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (en(l))
        continue;
      const u = t[l];
      let d;
      o && q(o, d = Ve(l)) ? !s || !s.includes(d) ? n[d] = u : (a || (a = {}))[d] = u : fr(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = !0);
    }
  if (s) {
    const l = K(n), u = a || Z;
    for (let d = 0; d < s.length; d++) {
      const f = s[d];
      n[f] = $r(
        o,
        l,
        f,
        u[f],
        e,
        !q(u, f)
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
      if (i.type !== Function && !i.skipFactory && L(l)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const d = Sn(o);
          r = u[n] = l.call(
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
    ] && (r === "" || r === Te(n)) && (r = !0));
  }
  return r;
}
const Kl = /* @__PURE__ */ new WeakMap();
function di(e, t, n = !1) {
  const r = n ? Kl : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!L(e)) {
    const d = (f) => {
      l = !0;
      const [g, _] = di(f, t, !0);
      ie(i, g), _ && a.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !l)
    return ee(e) && r.set(e, Bt), Bt;
  if (P(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !oe(s[d]) && D("props must be strings when using array syntax.", s[d]);
      const f = Ve(s[d]);
      Ro(f) && (i[f] = Z);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !ee(s) && D("invalid props options", s);
    for (const d in s) {
      const f = Ve(d);
      if (Ro(f)) {
        const g = s[d], _ = i[f] = P(g) || L(g) ? { type: g } : ie({}, g), S = _.type;
        let V = !1, Y = !0;
        if (P(S))
          for (let H = 0; H < S.length; ++H) {
            const F = S[H], T = L(F) && F.name;
            if (T === "Boolean") {
              V = !0;
              break;
            } else T === "String" && (Y = !1);
          }
        else
          V = L(S) && S.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = V, _[
          1
          /* shouldCastTrue */
        ] = Y, (V || q(_, "default")) && a.push(f);
      }
    }
  }
  const u = [i, a];
  return ee(e) && r.set(e, u), u;
}
function Ro(e) {
  return e[0] !== "$" && !en(e) ? !0 : (h.NODE_ENV !== "production" && D(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Wl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function pi(e, t, n) {
  const r = K(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Ve(i));
  for (const i in o) {
    let a = o[i];
    a != null && Jl(
      i,
      r[i],
      a,
      h.NODE_ENV !== "production" ? nt(r) : r,
      !s.includes(i)
    );
  }
}
function Jl(e, t, n, r, o) {
  const { type: s, required: i, validator: a, skipCheck: l } = n;
  if (i && o) {
    D('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !l) {
      let u = !1;
      const d = P(s) ? s : [s], f = [];
      for (let g = 0; g < d.length && !u; g++) {
        const { valid: _, expectedType: S } = ql(t, d[g]);
        f.push(S || ""), u = _;
      }
      if (!u) {
        D(Gl(e, t, f));
        return;
      }
    }
    a && !a(t, r) && D('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Yl = /* @__PURE__ */ dt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ql(e, t) {
  let n;
  const r = Wl(t);
  if (r === "null")
    n = e === null;
  else if (Yl(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Gl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(or).join(" | ")}`;
  const o = n[0], s = Gr(t), i = Po(t, o), a = Po(t, s);
  return n.length === 1 && Mo(o) && !zl(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Mo(s) && (r += `with value ${a}.`), r;
}
function Po(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Mo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function zl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const uo = (e) => e[0] === "_" || e === "$stable", fo = (e) => P(e) ? e.map(He) : [He(e)], Xl = (e, t, n) => {
  if (t._n)
    return t;
  const r = fl((...o) => (h.NODE_ENV !== "production" && pe && !(n === null && Ee) && !(n && n.root !== pe.root) && D(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fo(t(...o))), n);
  return r._c = !1, r;
}, hi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uo(o)) continue;
    const s = e[o];
    if (L(s))
      t[o] = Xl(o, s, r);
    else if (s != null) {
      h.NODE_ENV !== "production" && D(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = fo(s);
      t[o] = () => i;
    }
  }
}, gi = (e, t) => {
  h.NODE_ENV !== "production" && !io(e.vnode) && D(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fo(t);
  e.slots.default = () => n;
}, jr = (e, t, n) => {
  for (const r in t)
    (n || !uo(r)) && (e[r] = t[r]);
}, Zl = (e, t, n) => {
  const r = e.slots = ci();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && ln(r, "__", o, !0);
    const s = t._;
    s ? (jr(r, t, n), n && ln(r, "_", s, !0)) : hi(t, r);
  } else t && gi(e, t);
}, Ql = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? h.NODE_ENV !== "production" && rt ? (jr(o, t, n), et(e, "set", "$slots")) : n && a === 1 ? s = !1 : jr(o, t, n) : (s = !t.$stable, hi(t, o)), i = t;
  } else t && (gi(e, t), i = { default: 1 });
  if (s)
    for (const a in o)
      !uo(a) && i[a] == null && delete o[a];
};
let zt, yt;
function kt(e, t) {
  e.appContext.config.performance && Xn() && yt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && ll(e, t, Xn() ? yt.now() : Date.now());
}
function $t(e, t) {
  if (e.appContext.config.performance && Xn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    yt.mark(r), yt.measure(
      `<${hr(e, e.type)}> ${t}`,
      n,
      r
    ), yt.clearMarks(n), yt.clearMarks(r);
  }
  h.NODE_ENV !== "production" && cl(e, t, Xn() ? yt.now() : Date.now());
}
function Xn() {
  return zt !== void 0 || (typeof window < "u" && window.performance ? (zt = !0, yt = window.performance) : zt = !1), zt;
}
function ec() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = hc;
function tc(e) {
  return nc(e);
}
function nc(e, t) {
  ec();
  const n = Nn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && zs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: l,
    setText: u,
    setElementText: d,
    parentNode: f,
    nextSibling: g,
    setScopeId: _ = fe,
    insertStaticContent: S
  } = e, V = (c, p, m, N = null, b = null, v = null, I = void 0, x = null, O = h.NODE_ENV !== "production" && rt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Xt(c, p) && (N = qe(c), W(c, b, v, !0), c = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: C } = p;
    switch (w) {
      case Dn:
        Y(c, p, m, N);
        break;
      case ke:
        H(c, p, m, N);
        break;
      case Fn:
        c == null ? F(p, m, N, I) : h.NODE_ENV !== "production" && T(c, p, m, I);
        break;
      case Le:
        se(
          c,
          p,
          m,
          N,
          b,
          v,
          I,
          x,
          O
        );
        break;
      default:
        C & 1 ? E(
          c,
          p,
          m,
          N,
          b,
          v,
          I,
          x,
          O
        ) : C & 6 ? be(
          c,
          p,
          m,
          N,
          b,
          v,
          I,
          x,
          O
        ) : C & 64 || C & 128 ? w.process(
          c,
          p,
          m,
          N,
          b,
          v,
          I,
          x,
          O,
          Nt
        ) : h.NODE_ENV !== "production" && D("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && b ? rn(j, c && c.ref, v, p || c, !p) : j == null && c && c.ref != null && rn(c.ref, null, v, c, !0);
  }, Y = (c, p, m, N) => {
    if (c == null)
      r(
        p.el = a(p.children),
        m,
        N
      );
    else {
      const b = p.el = c.el;
      p.children !== c.children && u(b, p.children);
    }
  }, H = (c, p, m, N) => {
    c == null ? r(
      p.el = l(p.children || ""),
      m,
      N
    ) : p.el = c.el;
  }, F = (c, p, m, N) => {
    [c.el, c.anchor] = S(
      c.children,
      p,
      m,
      N,
      c.el,
      c.anchor
    );
  }, T = (c, p, m, N) => {
    if (p.children !== c.children) {
      const b = g(c.anchor);
      y(c), [p.el, p.anchor] = S(
        p.children,
        m,
        b,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, A = ({ el: c, anchor: p }, m, N) => {
    let b;
    for (; c && c !== p; )
      b = g(c), r(c, m, N), c = b;
    r(p, m, N);
  }, y = ({ el: c, anchor: p }) => {
    let m;
    for (; c && c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, E = (c, p, m, N, b, v, I, x, O) => {
    p.type === "svg" ? I = "svg" : p.type === "math" && (I = "mathml"), c == null ? k(
      p,
      m,
      N,
      b,
      v,
      I,
      x,
      O
    ) : z(
      c,
      p,
      b,
      v,
      I,
      x,
      O
    );
  }, k = (c, p, m, N, b, v, I, x) => {
    let O, w;
    const { props: j, shapeFlag: C, transition: R, dirs: U } = c;
    if (O = c.el = i(
      c.type,
      v,
      j && j.is,
      j
    ), C & 8 ? d(O, c.children) : C & 16 && M(
      c.children,
      O,
      null,
      N,
      b,
      Nr(c, v),
      I,
      x
    ), U && wt(c, null, N, "created"), $(O, c, c.scopeId, I, N), j) {
      for (const ne in j)
        ne !== "value" && !en(ne) && s(O, ne, null, j[ne], v, N);
      "value" in j && s(O, "value", null, j.value, v), (w = j.onVnodeBeforeMount) && Ze(w, N, c);
    }
    h.NODE_ENV !== "production" && (ln(O, "__vnode", c, !0), ln(O, "__vueParentComponent", N, !0)), U && wt(c, null, N, "beforeMount");
    const G = rc(b, R);
    G && R.beforeEnter(O), r(O, p, m), ((w = j && j.onVnodeMounted) || G || U) && Re(() => {
      w && Ze(w, N, c), G && R.enter(O), U && wt(c, null, N, "mounted");
    }, b);
  }, $ = (c, p, m, N, b) => {
    if (m && _(c, m), N)
      for (let v = 0; v < N.length; v++)
        _(c, N[v]);
    if (b) {
      let v = b.subTree;
      if (h.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = po(v.children) || v), p === v || vi(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const I = b.vnode;
        $(
          c,
          I,
          I.scopeId,
          I.slotScopeIds,
          b.parent
        );
      }
    }
  }, M = (c, p, m, N, b, v, I, x, O = 0) => {
    for (let w = O; w < c.length; w++) {
      const j = c[w] = x ? mt(c[w]) : He(c[w]);
      V(
        null,
        j,
        p,
        m,
        N,
        b,
        v,
        I,
        x
      );
    }
  }, z = (c, p, m, N, b, v, I) => {
    const x = p.el = c.el;
    h.NODE_ENV !== "production" && (x.__vnode = p);
    let { patchFlag: O, dynamicChildren: w, dirs: j } = p;
    O |= c.patchFlag & 16;
    const C = c.props || Z, R = p.props || Z;
    let U;
    if (m && Ot(m, !1), (U = R.onVnodeBeforeUpdate) && Ze(U, m, p, c), j && wt(p, c, m, "beforeUpdate"), m && Ot(m, !0), h.NODE_ENV !== "production" && rt && (O = 0, I = !1, w = null), (C.innerHTML && R.innerHTML == null || C.textContent && R.textContent == null) && d(x, ""), w ? (de(
      c.dynamicChildren,
      w,
      x,
      m,
      N,
      Nr(p, b),
      v
    ), h.NODE_ENV !== "production" && jn(c, p)) : I || xe(
      c,
      p,
      x,
      null,
      m,
      N,
      Nr(p, b),
      v,
      !1
    ), O > 0) {
      if (O & 16)
        re(x, C, R, m, b);
      else if (O & 2 && C.class !== R.class && s(x, "class", null, R.class, b), O & 4 && s(x, "style", C.style, R.style, b), O & 8) {
        const G = p.dynamicProps;
        for (let ne = 0; ne < G.length; ne++) {
          const Q = G[ne], Se = C[Q], Ie = R[Q];
          (Ie !== Se || Q === "value") && s(x, Q, Se, Ie, b, m);
        }
      }
      O & 1 && c.children !== p.children && d(x, p.children);
    } else !I && w == null && re(x, C, R, m, b);
    ((U = R.onVnodeUpdated) || j) && Re(() => {
      U && Ze(U, m, p, c), j && wt(p, c, m, "updated");
    }, N);
  }, de = (c, p, m, N, b, v, I) => {
    for (let x = 0; x < p.length; x++) {
      const O = c[x], w = p[x], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(O, w) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      V(
        O,
        w,
        j,
        null,
        N,
        b,
        v,
        I,
        !0
      );
    }
  }, re = (c, p, m, N, b) => {
    if (p !== m) {
      if (p !== Z)
        for (const v in p)
          !en(v) && !(v in m) && s(
            c,
            v,
            p[v],
            null,
            b,
            N
          );
      for (const v in m) {
        if (en(v)) continue;
        const I = m[v], x = p[v];
        I !== x && v !== "value" && s(c, v, x, I, b, N);
      }
      "value" in m && s(c, "value", p.value, m.value, b);
    }
  }, se = (c, p, m, N, b, v, I, x, O) => {
    const w = p.el = c ? c.el : a(""), j = p.anchor = c ? c.anchor : a("");
    let { patchFlag: C, dynamicChildren: R, slotScopeIds: U } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (rt || C & 2048) && (C = 0, O = !1, R = null), U && (x = x ? x.concat(U) : U), c == null ? (r(w, m, N), r(j, m, N), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      j,
      b,
      v,
      I,
      x,
      O
    )) : C > 0 && C & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (de(
      c.dynamicChildren,
      R,
      m,
      b,
      v,
      I,
      x
    ), h.NODE_ENV !== "production" ? jn(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || b && p === b.subTree) && jn(
        c,
        p,
        !0
        /* shallow */
      )
    )) : xe(
      c,
      p,
      m,
      j,
      b,
      v,
      I,
      x,
      O
    );
  }, be = (c, p, m, N, b, v, I, x, O) => {
    p.slotScopeIds = x, c == null ? p.shapeFlag & 512 ? b.ctx.activate(
      p,
      m,
      N,
      I,
      O
    ) : he(
      p,
      m,
      N,
      b,
      v,
      I,
      O
    ) : ce(c, p, O);
  }, he = (c, p, m, N, b, v, I) => {
    const x = c.component = wc(
      c,
      N,
      b
    );
    if (h.NODE_ENV !== "production" && x.type.__hmrId && Qa(x), h.NODE_ENV !== "production" && (Pn(c), kt(x, "mount")), io(c) && (x.ctx.renderer = Nt), h.NODE_ENV !== "production" && kt(x, "init"), xc(x, !1, I), h.NODE_ENV !== "production" && $t(x, "init"), h.NODE_ENV !== "production" && rt && (c.el = null), x.asyncDep) {
      if (b && b.registerDep(x, B, I), !c.el) {
        const O = x.subTree = ot(ke);
        H(null, O, p, m);
      }
    } else
      B(
        x,
        c,
        p,
        m,
        b,
        v,
        I
      );
    h.NODE_ENV !== "production" && (Mn(), $t(x, "mount"));
  }, ce = (c, p, m) => {
    const N = p.component = c.component;
    if (dc(c, p, m))
      if (N.asyncDep && !N.asyncResolved) {
        h.NODE_ENV !== "production" && Pn(p), J(N, p, m), h.NODE_ENV !== "production" && Mn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, B = (c, p, m, N, b, v, I) => {
    const x = () => {
      if (c.isMounted) {
        let { next: C, bu: R, u: U, parent: G, vnode: ne } = c;
        {
          const ze = _i(c);
          if (ze) {
            C && (C.el = ne.el, J(c, C, I)), ze.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let Q = C, Se;
        h.NODE_ENV !== "production" && Pn(C || c.vnode), Ot(c, !1), C ? (C.el = ne.el, J(c, C, I)) : C = ne, R && jt(R), (Se = C.props && C.props.onVnodeBeforeUpdate) && Ze(Se, G, C, ne), Ot(c, !0), h.NODE_ENV !== "production" && kt(c, "render");
        const Ie = $o(c);
        h.NODE_ENV !== "production" && $t(c, "render");
        const Ge = c.subTree;
        c.subTree = Ie, h.NODE_ENV !== "production" && kt(c, "patch"), V(
          Ge,
          Ie,
          // parent may have changed if it's in a teleport
          f(Ge.el),
          // anchor may have changed if it's in a fragment
          qe(Ge),
          c,
          b,
          v
        ), h.NODE_ENV !== "production" && $t(c, "patch"), C.el = Ie.el, Q === null && pc(c, Ie.el), U && Re(U, b), (Se = C.props && C.props.onVnodeUpdated) && Re(
          () => Ze(Se, G, C, ne),
          b
        ), h.NODE_ENV !== "production" && Xs(c), h.NODE_ENV !== "production" && Mn();
      } else {
        let C;
        const { el: R, props: U } = p, { bm: G, m: ne, parent: Q, root: Se, type: Ie } = c, Ge = on(p);
        Ot(c, !1), G && jt(G), !Ge && (C = U && U.onVnodeBeforeMount) && Ze(C, Q, p), Ot(c, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie), h.NODE_ENV !== "production" && kt(c, "render");
          const ze = c.subTree = $o(c);
          h.NODE_ENV !== "production" && $t(c, "render"), h.NODE_ENV !== "production" && kt(c, "patch"), V(
            null,
            ze,
            m,
            N,
            c,
            b,
            v
          ), h.NODE_ENV !== "production" && $t(c, "patch"), p.el = ze.el;
        }
        if (ne && Re(ne, b), !Ge && (C = U && U.onVnodeMounted)) {
          const ze = p;
          Re(
            () => Ze(C, Q, ze),
            b
          );
        }
        (p.shapeFlag & 256 || Q && on(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Re(c.a, b), c.isMounted = !0, h.NODE_ENV !== "production" && sl(c), p = m = N = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Ds(x);
    c.scope.off();
    const w = c.update = O.run.bind(O), j = c.job = O.runIfDirty.bind(O);
    j.i = c, j.id = c.uid, O.scheduler = () => cr(j), Ot(c, !0), h.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (C) => jt(c.rtc, C) : void 0, O.onTrigger = c.rtg ? (C) => jt(c.rtg, C) : void 0), w();
  }, J = (c, p, m) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Bl(c, p.props, N, m), Ql(c, p.children, m), We(), So(c), Je();
  }, xe = (c, p, m, N, b, v, I, x, O = !1) => {
    const w = c && c.children, j = c ? c.shapeFlag : 0, C = p.children, { patchFlag: R, shapeFlag: U } = p;
    if (R > 0) {
      if (R & 128) {
        at(
          w,
          C,
          m,
          N,
          b,
          v,
          I,
          x,
          O
        );
        return;
      } else if (R & 256) {
        it(
          w,
          C,
          m,
          N,
          b,
          v,
          I,
          x,
          O
        );
        return;
      }
    }
    U & 8 ? (j & 16 && De(w, b, v), C !== w && d(m, C)) : j & 16 ? U & 16 ? at(
      w,
      C,
      m,
      N,
      b,
      v,
      I,
      x,
      O
    ) : De(w, b, v, !0) : (j & 8 && d(m, ""), U & 16 && M(
      C,
      m,
      N,
      b,
      v,
      I,
      x,
      O
    ));
  }, it = (c, p, m, N, b, v, I, x, O) => {
    c = c || Bt, p = p || Bt;
    const w = c.length, j = p.length, C = Math.min(w, j);
    let R;
    for (R = 0; R < C; R++) {
      const U = p[R] = O ? mt(p[R]) : He(p[R]);
      V(
        c[R],
        U,
        m,
        null,
        b,
        v,
        I,
        x,
        O
      );
    }
    w > j ? De(
      c,
      b,
      v,
      !0,
      !1,
      C
    ) : M(
      p,
      m,
      N,
      b,
      v,
      I,
      x,
      O,
      C
    );
  }, at = (c, p, m, N, b, v, I, x, O) => {
    let w = 0;
    const j = p.length;
    let C = c.length - 1, R = j - 1;
    for (; w <= C && w <= R; ) {
      const U = c[w], G = p[w] = O ? mt(p[w]) : He(p[w]);
      if (Xt(U, G))
        V(
          U,
          G,
          m,
          null,
          b,
          v,
          I,
          x,
          O
        );
      else
        break;
      w++;
    }
    for (; w <= C && w <= R; ) {
      const U = c[C], G = p[R] = O ? mt(p[R]) : He(p[R]);
      if (Xt(U, G))
        V(
          U,
          G,
          m,
          null,
          b,
          v,
          I,
          x,
          O
        );
      else
        break;
      C--, R--;
    }
    if (w > C) {
      if (w <= R) {
        const U = R + 1, G = U < j ? p[U].el : N;
        for (; w <= R; )
          V(
            null,
            p[w] = O ? mt(p[w]) : He(p[w]),
            m,
            G,
            b,
            v,
            I,
            x,
            O
          ), w++;
      }
    } else if (w > R)
      for (; w <= C; )
        W(c[w], b, v, !0), w++;
    else {
      const U = w, G = w, ne = /* @__PURE__ */ new Map();
      for (w = G; w <= R; w++) {
        const ve = p[w] = O ? mt(p[w]) : He(p[w]);
        ve.key != null && (h.NODE_ENV !== "production" && ne.has(ve.key) && D(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), ne.set(ve.key, w));
      }
      let Q, Se = 0;
      const Ie = R - G + 1;
      let Ge = !1, ze = 0;
      const qt = new Array(Ie);
      for (w = 0; w < Ie; w++) qt[w] = 0;
      for (w = U; w <= C; w++) {
        const ve = c[w];
        if (Se >= Ie) {
          W(ve, b, v, !0);
          continue;
        }
        let Xe;
        if (ve.key != null)
          Xe = ne.get(ve.key);
        else
          for (Q = G; Q <= R; Q++)
            if (qt[Q - G] === 0 && Xt(ve, p[Q])) {
              Xe = Q;
              break;
            }
        Xe === void 0 ? W(ve, b, v, !0) : (qt[Xe - G] = w + 1, Xe >= ze ? ze = Xe : Ge = !0, V(
          ve,
          p[Xe],
          m,
          null,
          b,
          v,
          I,
          x,
          O
        ), Se++);
      }
      const bo = Ge ? oc(qt) : Bt;
      for (Q = bo.length - 1, w = Ie - 1; w >= 0; w--) {
        const ve = G + w, Xe = p[ve], vo = ve + 1 < j ? p[ve + 1].el : N;
        qt[w] === 0 ? V(
          null,
          Xe,
          m,
          vo,
          b,
          v,
          I,
          x,
          O
        ) : Ge && (Q < 0 || w !== bo[Q] ? ht(Xe, m, vo, 2) : Q--);
      }
    }
  }, ht = (c, p, m, N, b = null) => {
    const { el: v, type: I, transition: x, children: O, shapeFlag: w } = c;
    if (w & 6) {
      ht(c.component.subTree, p, m, N);
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
    if (I === Le) {
      r(v, p, m);
      for (let C = 0; C < O.length; C++)
        ht(O[C], p, m, N);
      r(c.anchor, p, m);
      return;
    }
    if (I === Fn) {
      A(c, p, m);
      return;
    }
    if (N !== 2 && w & 1 && x)
      if (N === 0)
        x.beforeEnter(v), r(v, p, m), Re(() => x.enter(v), b);
      else {
        const { leave: C, delayLeave: R, afterLeave: U } = x, G = () => {
          c.ctx.isUnmounted ? o(v) : r(v, p, m);
        }, ne = () => {
          C(v, () => {
            G(), U && U();
          });
        };
        R ? R(v, G, ne) : ne();
      }
    else
      r(v, p, m);
  }, W = (c, p, m, N = !1, b = !1) => {
    const {
      type: v,
      props: I,
      ref: x,
      children: O,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: C,
      dirs: R,
      cacheIndex: U
    } = c;
    if (C === -2 && (b = !1), x != null && (We(), rn(x, null, m, c, !0), Je()), U != null && (p.renderCache[U] = void 0), j & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = j & 1 && R, ne = !on(c);
    let Q;
    if (ne && (Q = I && I.onVnodeBeforeUnmount) && Ze(Q, p, c), j & 6)
      Ae(c.component, m, N);
    else {
      if (j & 128) {
        c.suspense.unmount(m, N);
        return;
      }
      G && wt(c, null, p, "beforeUnmount"), j & 64 ? c.type.remove(
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
      (v !== Le || C > 0 && C & 64) ? De(
        w,
        p,
        m,
        !1,
        !0
      ) : (v === Le && C & 384 || !b && j & 16) && De(O, p, m), N && ae(c);
    }
    (ne && (Q = I && I.onVnodeUnmounted) || G) && Re(() => {
      Q && Ze(Q, p, c), G && wt(c, null, p, "unmounted");
    }, m);
  }, ae = (c) => {
    const { type: p, el: m, anchor: N, transition: b } = c;
    if (p === Le) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((I) => {
        I.type === ke ? o(I.el) : ae(I);
      }) : me(m, N);
      return;
    }
    if (p === Fn) {
      y(c);
      return;
    }
    const v = () => {
      o(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: I, delayLeave: x } = b, O = () => I(m, v);
      x ? x(c.el, v, O) : O();
    } else
      v();
  }, me = (c, p) => {
    let m;
    for (; c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, Ae = (c, p, m) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && el(c);
    const {
      bum: N,
      scope: b,
      job: v,
      subTree: I,
      um: x,
      m: O,
      a: w,
      parent: j,
      slots: { __: C }
    } = c;
    ko(O), ko(w), N && jt(N), j && P(C) && C.forEach((R) => {
      j.renderCache[R] = void 0;
    }), b.stop(), v && (v.flags |= 8, W(I, c, p, m)), x && Re(x, p), Re(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && al(c);
  }, De = (c, p, m, N = !1, b = !1, v = 0) => {
    for (let I = v; I < c.length; I++)
      W(c[I], p, m, N, b);
  }, qe = (c) => {
    if (c.shapeFlag & 6)
      return qe(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), m = p && p[pl];
    return m ? g(m) : p;
  };
  let Pt = !1;
  const In = (c, p, m) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : V(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = c, Pt || (Pt = !0, So(), Ys(), Pt = !1);
  }, Nt = {
    p: V,
    um: W,
    m: ht,
    r: ae,
    mt: he,
    mc: M,
    pc: xe,
    pbc: de,
    n: qe,
    o: e
  };
  return {
    render: In,
    hydrate: void 0,
    createApp: Fl(In)
  };
}
function Nr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (P(r) && P(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = mt(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && jn(i, a)), a.type === Dn && (a.el = i.el), a.type === ke && !a.el && (a.el = i.el), h.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function oc(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, a;
  const l = e.length;
  for (r = 0; r < l; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        a = s + i >> 1, e[n[a]] < u ? s = a + 1 : i = a;
      u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function _i(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _i(t);
}
function ko(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const sc = Symbol.for("v-scx"), ic = () => {
  {
    const e = $n(sc);
    return e || h.NODE_ENV !== "production" && D(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function sn(e, t, n) {
  return h.NODE_ENV !== "production" && !L(t) && D(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), mi(e, t, n);
}
function mi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && D(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && D(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && D(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = ie({}, n);
  h.NODE_ENV !== "production" && (a.onWarn = D);
  const l = t && r || !t && s !== "post";
  let u;
  if (gn) {
    if (s === "sync") {
      const _ = ic();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!l) {
      const _ = () => {
      };
      return _.stop = fe, _.resume = fe, _.pause = fe, _;
    }
  }
  const d = pe;
  a.call = (_, S, V) => st(_, d, S, V);
  let f = !1;
  s === "post" ? a.scheduler = (_) => {
    Re(_, d && d.suspense);
  } : s !== "sync" && (f = !0, a.scheduler = (_, S) => {
    S ? _() : cr(_);
  }), a.augmentJob = (_) => {
    t && (_.flags |= 4), f && (_.flags |= 2, d && (_.id = d.uid, _.i = d));
  };
  const g = Wa(e, t, a);
  return gn && (u ? u.push(g) : l && g()), g;
}
function ac(e, t, n) {
  const r = this.proxy, o = oe(e) ? e.includes(".") ? yi(r, e) : () => r[e] : e.bind(r, r);
  let s;
  L(t) ? s = t : (s = t.handler, n = t);
  const i = Sn(this), a = mi(o, s.bind(r), n);
  return i(), a;
}
function yi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const lc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Te(t)}Modifiers`];
function cc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Z;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(Dt(Ve(t)) in f)) && D(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Ve(t))}" prop.`
        );
      else {
        const g = d[t];
        L(g) && (g(...n) || D(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && lc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => oe(d) ? d.trim() : d)), i.number && (o = n.map(Cr))), h.NODE_ENV !== "production" && ul(e, t, o), h.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[Dt(d)] && D(
      `Event "${d}" is emitted in component ${hr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Te(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = r[a = Dt(t)] || // also try camelCase event handler (#2249)
  r[a = Dt(Ve(t))];
  !l && s && (l = r[a = Dt(Te(t))]), l && st(
    l,
    e,
    6,
    o
  );
  const u = r[a + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, st(
      u,
      e,
      6,
      o
    );
  }
}
function Ei(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, a = !1;
  if (!L(e)) {
    const l = (u) => {
      const d = Ei(u, t, !0);
      d && (a = !0, ie(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (ee(e) && r.set(e, null), null) : (P(s) ? s.forEach((l) => i[l] = null) : ie(i, s), ee(e) && r.set(e, i), i);
}
function fr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Te(t)) || q(e, t));
}
let Fr = !1;
function Zn() {
  Fr = !0;
}
function $o(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: a,
    emit: l,
    render: u,
    renderCache: d,
    props: f,
    data: g,
    setupState: _,
    ctx: S,
    inheritAttrs: V
  } = e, Y = Gn(e);
  let H, F;
  h.NODE_ENV !== "production" && (Fr = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, E = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(y, {
        get(k, $, M) {
          return D(
            `Property '${String(
              $
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(k, $, M);
        }
      }) : y;
      H = He(
        u.call(
          E,
          y,
          d,
          h.NODE_ENV !== "production" ? nt(f) : f,
          _,
          g,
          S
        )
      ), F = a;
    } else {
      const y = t;
      h.NODE_ENV !== "production" && a === f && Zn(), H = He(
        y.length > 1 ? y(
          h.NODE_ENV !== "production" ? nt(f) : f,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Zn(), nt(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : y(
          h.NODE_ENV !== "production" ? nt(f) : f,
          null
        )
      ), F = t.props ? a : uc(a);
    }
  } catch (y) {
    an.length = 0, On(y, e, 1), H = ot(ke);
  }
  let T = H, A;
  if (h.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([T, A] = bi(H)), F && V !== !1) {
    const y = Object.keys(F), { shapeFlag: E } = T;
    if (y.length) {
      if (E & 7)
        s && y.some(Un) && (F = fc(
          F,
          s
        )), T = bt(T, F, !1, !0);
      else if (h.NODE_ENV !== "production" && !Fr && T.type !== ke) {
        const k = Object.keys(a), $ = [], M = [];
        for (let z = 0, de = k.length; z < de; z++) {
          const re = k[z];
          vn(re) ? Un(re) || $.push(re[2].toLowerCase() + re.slice(3)) : M.push(re);
        }
        M.length && D(
          `Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), $.length && D(
          `Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !jo(T) && D(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), T = bt(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !jo(T) && D(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), so(T, n.transition)), h.NODE_ENV !== "production" && A ? A(T) : H = T, Gn(Y), H;
}
const bi = (e) => {
  const t = e.children, n = e.dynamicChildren, r = po(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return bi(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (a) => {
    t[o] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [He(r), i];
};
function po(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (dr(o)) {
      if (o.type !== ke || o.children === "v-if") {
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
const uc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, fc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Un(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, jo = (e) => e.shapeFlag & 7 || e.type === ke;
function dc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || a) && rt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Fo(r, i, u) : !!i;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        if (i[g] !== r[g] && !fr(u, g))
          return !0;
      }
    }
  } else
    return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Fo(r, i, u) : !0 : !!i;
  return !1;
}
function Fo(e, t, n) {
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
function pc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const vi = (e) => e.__isSuspense;
function hc(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Js(e);
}
const Le = Symbol.for("v-fgt"), Dn = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), an = [];
let Me = null;
function $e(e = !1) {
  an.push(Me = e ? null : []);
}
function gc() {
  an.pop(), Me = an[an.length - 1] || null;
}
let hn = 1;
function Lo(e, t = !1) {
  hn += e, e < 0 && Me && t && (Me.hasOnce = !0);
}
function Ni(e) {
  return e.dynamicChildren = hn > 0 ? Me || Bt : null, gc(), hn > 0 && Me && Me.push(e), e;
}
function Fe(e, t, n, r, o, s) {
  return Ni(
    Pe(
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
function _c(e, t, n, r, o) {
  return Ni(
    ot(
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
function Xt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = kn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const mc = (...e) => Oi(
  ...e
), wi = ({ key: e }) => e ?? null, Ln = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || le(e) || L(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function Pe(e, t = null, n = null, r = 0, o = null, s = e === Le ? 0 : 1, i = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wi(t),
    ref: t && Ln(t),
    scopeId: Qs,
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
    ctx: Ee
  };
  return a ? (ho(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= oe(n) ? 8 : 16), h.NODE_ENV !== "production" && l.key !== l.key && D("VNode created with invalid key (NaN). VNode type:", l.type), hn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && Me.push(l), l;
}
const ot = h.NODE_ENV !== "production" ? mc : Oi;
function Oi(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Sl) && (h.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = ke), dr(e)) {
    const a = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ho(a, n), hn > 0 && !s && Me && (a.shapeFlag & 6 ? Me[Me.indexOf(e)] = a : Me.push(a)), a.patchFlag = -2, a;
  }
  if (Ti(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: a, style: l } = t;
    a && !oe(a) && (t.class = cn(a)), ee(l) && (dn(l) && !P(l) && (l = ie({}, l)), t.style = sr(l));
  }
  const i = oe(e) ? 1 : vi(e) ? 128 : hl(e) ? 64 : ee(e) ? 4 : L(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && dn(e) && (e = K(e), D(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Pe(
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
  return e ? dn(e) || ui(e) ? ie({}, e) : e : null;
}
function bt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? bc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && wi(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? P(s) ? s.concat(Ln(t)) : [s, Ln(t)] : Ln(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && P(a) ? a.map(xi) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Le ? i === -1 ? 16 : i | 16 : i,
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
function xi(e) {
  const t = bt(e);
  return P(e.children) && (t.children = e.children.map(xi)), t;
}
function Ec(e = " ", t = 0) {
  return ot(Dn, null, e, t);
}
function An(e = "", t = !1) {
  return t ? ($e(), _c(ke, null, e)) : ot(ke, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ot(ke) : P(e) ? ot(
    Le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dr(e) ? mt(e) : ot(Dn, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
}
function ho(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ho(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ui(t) ? t._ctx = Ee : o === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = cn([t.class, r.class]));
      else if (o === "style")
        t.style = sr([t.style, r.style]);
      else if (vn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(P(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ze(e, t, n, r = null) {
  st(e, t, 7, [
    n,
    r
  ]);
}
const vc = ai();
let Nc = 0;
function wc(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || vc, s = {
    uid: Nc++,
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
    scope: new pa(
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
    propsOptions: di(r, o),
    emitsOptions: Ei(r, o),
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
  return h.NODE_ENV !== "production" ? s.ctx = Cl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = cc.bind(null, s), e.ce && e.ce(s), s;
}
let pe = null;
const Di = () => pe || Ee;
let Qn, Lr;
{
  const e = Nn(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), Lr = t(
    "__VUE_SSR_SETTERS__",
    (n) => gn = n
  );
}
const Sn = (e) => {
  const t = pe;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, Ho = () => {
  pe && pe.scope.off(), Qn(null);
}, Oc = /* @__PURE__ */ dt("slot,component");
function Hr(e, { isNativeTag: t }) {
  (Oc(e) || t(e)) && D(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Si(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function xc(e, t = !1, n = !1) {
  t && Lr(t);
  const { props: r, children: o } = e.vnode, s = Si(e);
  Hl(e, r, s, t), Zl(e, o, n || t);
  const i = s ? Dc(e, t) : void 0;
  return t && Lr(!1), i;
}
function Dc(e, t) {
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
        ei(s[i]);
    }
    r.compilerOptions && Sc() && D(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oi), h.NODE_ENV !== "production" && Tl(e);
  const { setup: o } = r;
  if (o) {
    We();
    const s = e.setupContext = o.length > 1 ? Cc(e) : null, i = Sn(e), a = Yt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? nt(e.props) : e.props,
        s
      ]
    ), l = qr(a);
    if (Je(), i(), (l || e.sp) && !on(e) && ni(e), l) {
      if (a.then(Ho, Ho), t)
        return a.then((u) => {
          Uo(e, u, t);
        }).catch((u) => {
          On(u, e, 0);
        });
      if (e.asyncDep = a, h.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        D(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Uo(e, a, t);
  } else
    Ii(e, t);
}
function Uo(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (h.NODE_ENV !== "production" && dr(t) && D(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Us(t), h.NODE_ENV !== "production" && Vl(e)) : h.NODE_ENV !== "production" && t !== void 0 && D(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ii(e, n);
}
const Sc = () => !0;
function Ii(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || fe);
  {
    const o = Sn(e);
    We();
    try {
      Rl(e);
    } finally {
      Je(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === fe && !t && (r.template ? D(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : D("Component is missing template or render function: ", r));
}
const Bo = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Zn(), ue(e, "get", ""), e[t];
  },
  set() {
    return D("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return D("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ue(e, "get", ""), e[t];
  }
};
function Ic(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ue(e, "get", "$slots"), t[n];
    }
  });
}
function Cc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && D("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (P(n) ? r = "array" : le(n) && (r = "ref")), r !== "object" && D(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Bo));
      },
      get slots() {
        return r || (r = Ic(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Bo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function pr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Us(Ma(e.exposed)), {
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
const Tc = /(?:^|[-_])(\w)/g, Vc = (e) => e.replace(Tc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ci(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hr(e, t, n = !1) {
  let r = Ci(t);
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
  return r ? Vc(r) : n ? "App" : "Anonymous";
}
function Ti(e) {
  return L(e) && "__vccOpts" in e;
}
const go = (e, t) => {
  const n = Ba(e, t, gn);
  if (h.NODE_ENV !== "production") {
    const r = Di();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Ac() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!ee(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (le(f)) {
        We();
        const g = f.value;
        return Je(), [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          a(g),
          ">"
        ];
      } else {
        if (Tt(f))
          return [
            "div",
            {},
            ["span", e, Oe(f) ? "ShallowReactive" : "Reactive"],
            "<",
            a(f),
            `>${Ye(f) ? " (readonly)" : ""}`
          ];
        if (Ye(f))
          return [
            "div",
            {},
            ["span", e, Oe(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            a(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const g = [];
    f.type.props && f.props && g.push(i("props", K(f.props))), f.setupState !== Z && g.push(i("setup", f.setupState)), f.data !== Z && g.push(i("data", K(f.data)));
    const _ = l(f, "computed");
    _ && g.push(i("computed", _));
    const S = l(f, "inject");
    return S && g.push(i("injected", S)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), g;
  }
  function i(f, g) {
    return g = ie({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
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
  function a(f, g = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : ee(f) ? ["object", { object: g ? K(f) : f }] : ["span", n, String(f)];
  }
  function l(f, g) {
    const _ = f.type;
    if (L(_))
      return;
    const S = {};
    for (const V in f.ctx)
      u(_, V, g) && (S[V] = f.ctx[V]);
    return S;
  }
  function u(f, g, _) {
    const S = f[_];
    if (P(S) && S.includes(g) || ee(S) && g in S || f.extends && u(f.extends, g, _) || f.mixins && f.mixins.some((V) => u(V, g, _)))
      return !0;
  }
  function d(f) {
    return Oe(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Ko = "3.5.17", je = h.NODE_ENV !== "production" ? D : fe;
var ye = {};
let Ur;
const Wo = typeof window < "u" && window.trustedTypes;
if (Wo)
  try {
    Ur = /* @__PURE__ */ Wo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ye.NODE_ENV !== "production" && je(`Error creating trusted types policy: ${e}`);
  }
const Vi = Ur ? (e) => Ur.createHTML(e) : (e) => e, Rc = "http://www.w3.org/2000/svg", Pc = "http://www.w3.org/1998/Math/MathML", ct = typeof document < "u" ? document : null, Jo = ct && /* @__PURE__ */ ct.createElement("template"), Mc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? ct.createElementNS(Rc, e) : t === "mathml" ? ct.createElementNS(Pc, e) : n ? ct.createElement(e, { is: n }) : ct.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => ct.createTextNode(e),
  createComment: (e) => ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ct.querySelector(e),
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
      Jo.innerHTML = Vi(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Jo.content;
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
}, kc = Symbol("_vtc");
function $c(e, t, n) {
  const r = e[kc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Yo = Symbol("_vod"), jc = Symbol("_vsh"), Fc = Symbol(ye.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Lc = /(^|;)\s*display\s*:/;
function Hc(e, t, n) {
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
      const i = r[Fc];
      i && (n += ";" + i), r.cssText = n, s = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  Yo in e && (e[Yo] = s ? r.display : "", e[jc] && (r.display = "none"));
}
const Uc = /[^\\];\s*$/, qo = /\s*!important$/;
function Hn(e, t, n) {
  if (P(n))
    n.forEach((r) => Hn(e, t, r));
  else if (n == null && (n = ""), ye.NODE_ENV !== "production" && Uc.test(n) && je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Bc(e, t);
    qo.test(n) ? e.setProperty(
      Te(r),
      n.replace(qo, ""),
      "important"
    ) : e[r] = n;
  }
}
const Go = ["Webkit", "Moz", "ms"], wr = {};
function Bc(e, t) {
  const n = wr[t];
  if (n)
    return n;
  let r = Ve(t);
  if (r !== "filter" && r in e)
    return wr[t] = r;
  r = or(r);
  for (let o = 0; o < Go.length; o++) {
    const s = Go[o] + r;
    if (s in e)
      return wr[t] = s;
  }
  return t;
}
const zo = "http://www.w3.org/1999/xlink";
function Xo(e, t, n, r, o, s = da(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(zo, t.slice(6, t.length)) : e.setAttributeNS(zo, t, n) : n == null || s && !Ns(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : vt(n) ? String(n) : n
  );
}
function Zo(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vi(n) : n);
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
    a === "boolean" ? n = Ns(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (a) {
    ye.NODE_ENV !== "production" && !i && je(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      a
    );
  }
  i && e.removeAttribute(o || t);
}
function Lt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Kc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Qo = Symbol("_vei");
function Wc(e, t, n, r, o = null) {
  const s = e[Qo] || (e[Qo] = {}), i = s[t];
  if (r && i)
    i.value = ye.NODE_ENV !== "production" ? ts(r, t) : r;
  else {
    const [a, l] = Jc(t);
    if (r) {
      const u = s[t] = Gc(
        ye.NODE_ENV !== "production" ? ts(r, t) : r,
        o
      );
      Lt(e, a, u, l);
    } else i && (Kc(e, a, i, l), s[t] = void 0);
  }
}
const es = /(?:Once|Passive|Capture)$/;
function Jc(e) {
  let t;
  if (es.test(e)) {
    t = {};
    let r;
    for (; r = e.match(es); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Te(e.slice(2)), t];
}
let Or = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), qc = () => Or || (Yc.then(() => Or = 0), Or = Date.now());
function Gc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    st(
      zc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = qc(), n;
}
function ts(e, t) {
  return L(e) || P(e) ? e : (je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), fe);
}
function zc(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? $c(e, r, i) : t === "style" ? Hc(e, n, r) : vn(t) ? Un(t) || Wc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zc(e, t, r, i)) ? (Zo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xo(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? Zo(e, Ve(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xo(e, t, r, i));
};
function Zc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ns(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ns(t) && oe(n) ? !1 : t in e;
}
const rs = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qc(e, t, n) {
  const r = /* @__PURE__ */ ti(e, t);
  nr(r) && ie(r, t);
  class o extends _o {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const eu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _o extends eu {
  constructor(t, n = {}, r = ls) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== ls ? this._root = this.shadowRoot : (ye.NODE_ENV !== "production" && this.shadowRoot && je(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof _o) {
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
      if (s && !P(s))
        for (const l in s) {
          const u = s[l];
          (u === Number || u && u.type === Number) && (l in this._props && (this._props[l] = No(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ve(l)] = !0);
        }
      this._numberProps = a, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : ye.NODE_ENV !== "production" && i && je(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((r) => {
      r.configureApp = this._def.configureApp, t(this._def = r, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ye.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        q(this, r) ? ye.NODE_ENV !== "production" && je(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ge(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = P(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(Ve))
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
    let r = n ? this.getAttribute(t) : rs;
    const o = Ve(t);
    n && this._numberProps && this._numberProps[o] && (r = No(r)), this._setProp(o, r, !1, !0);
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
    if (n !== this._props[t] && (n === rs ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Te(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Te(t), n + "") : n || this.removeAttribute(Te(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), lu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ot(this._def, ie(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, ye.NODE_ENV !== "production" && (r.ceReload = (s) => {
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
        o(s, i), Te(s) !== s && o(Te(s), i);
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
      if (r && s.setAttribute("nonce", r), s.textContent = t[o], this.shadowRoot.prepend(s), ye.NODE_ENV !== "production")
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
            const u = n + "-s", d = document.createTreeWalker(l, 1);
            l.setAttribute(u, "");
            let f;
            for (; f = d.nextNode(); )
              f.setAttribute(u, "");
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
    if (ye.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
const os = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (n) => jt(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function ss(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xr = Symbol("_assign"), nu = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[xr] = os(o);
    const s = r || o.props && o.props.type === "number";
    Lt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Cr(a)), e[xr](a);
    }), n && Lt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Lt(e, "compositionstart", tu), Lt(e, "compositionend", ss), Lt(e, "change", ss));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[xr] = os(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
  }
}, ru = ["ctrl", "shift", "alt", "meta"], ou = {
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
  exact: (e, t) => ru.some((n) => e[`${n}Key`] && !t.includes(n))
}, is = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = ou[t[i]];
      if (a && a(o, t)) return;
    }
    return e(o, ...s);
  });
}, su = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, iu = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Te(o.key);
    if (t.some(
      (i) => i === s || su[i] === s
    ))
      return e(o);
  });
}, au = /* @__PURE__ */ ie({ patchProp: Xc }, Mc);
let as;
function Ai() {
  return as || (as = tc(au));
}
const lu = (...e) => {
  Ai().render(...e);
}, ls = (...e) => {
  const t = Ai().createApp(...e);
  ye.NODE_ENV !== "production" && (uu(t), fu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = du(r);
    if (!o) return;
    const s = t._component;
    !L(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, cu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function cu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function uu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => la(t) || ca(t) || ua(t),
    writable: !1
  });
}
function fu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        je(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return je(r), n;
      },
      set() {
        je(r);
      }
    });
  }
}
function du(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return ye.NODE_ENV !== "production" && !t && je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ye.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && je(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var pu = {};
function hu() {
  Ac();
}
pu.NODE_ENV !== "production" && hu();
var Ri = "vercel.ai.error", gu = Symbol.for(Ri), Pi, _u = class Mi extends Error {
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
    super(n), this[Pi] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Mi.hasMarker(t, Ri);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
Pi = gu;
var Jt = _u;
function ki(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var $i = "AI_InvalidArgumentError", ji = `vercel.ai.error.${$i}`, mu = Symbol.for(ji), Fi, yu = class extends Jt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: $i, message: e, cause: t }), this[Fi] = !0, this.argument = n;
  }
  static isInstance(e) {
    return Jt.hasMarker(e, ji);
  }
};
Fi = mu;
var Li = "AI_JSONParseError", Hi = `vercel.ai.error.${Li}`, Eu = Symbol.for(Hi), Ui, cs = class extends Jt {
  constructor({ text: e, cause: t }) {
    super({
      name: Li,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${ki(t)}`,
      cause: t
    }), this[Ui] = !0, this.text = e;
  }
  static isInstance(e) {
    return Jt.hasMarker(e, Hi);
  }
};
Ui = Eu;
var Bi = "AI_TypeValidationError", Ki = `vercel.ai.error.${Bi}`, bu = Symbol.for(Ki), Wi, vu = class Br extends Jt {
  constructor({ value: t, cause: n }) {
    super({
      name: Bi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${ki(n)}`,
      cause: n
    }), this[Wi] = !0, this.value = t;
  }
  static isInstance(t) {
    return Jt.hasMarker(t, Ki);
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
Wi = bu;
var us = vu;
let Nu = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function wu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} }, fs;
function Ou() {
  if (fs) return xt.exports;
  fs = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function r(a, l, u) {
    u == null && l !== null && typeof l == "object" && (u = l, l = void 0), e && Buffer.isBuffer(a) && (a = a.toString()), a && a.charCodeAt(0) === 65279 && (a = a.slice(1));
    const d = JSON.parse(a, l);
    if (d === null || typeof d != "object")
      return d;
    const f = u && u.protoAction || "error", g = u && u.constructorAction || "error";
    if (f === "ignore" && g === "ignore")
      return d;
    if (f !== "ignore" && g !== "ignore") {
      if (t.test(a) === !1 && n.test(a) === !1)
        return d;
    } else if (f !== "ignore" && g === "ignore") {
      if (t.test(a) === !1)
        return d;
    } else if (n.test(a) === !1)
      return d;
    return o(d, { protoAction: f, constructorAction: g, safe: u && u.safe });
  }
  function o(a, { protoAction: l = "error", constructorAction: u = "error", safe: d } = {}) {
    let f = [a];
    for (; f.length; ) {
      const g = f;
      f = [];
      for (const _ of g) {
        if (l !== "ignore" && Object.prototype.hasOwnProperty.call(_, "__proto__")) {
          if (d === !0)
            return null;
          if (l === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete _.__proto__;
        }
        if (u !== "ignore" && Object.prototype.hasOwnProperty.call(_, "constructor") && Object.prototype.hasOwnProperty.call(_.constructor, "prototype")) {
          if (d === !0)
            return null;
          if (u === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete _.constructor;
        }
        for (const S in _) {
          const V = _[S];
          V && typeof V == "object" && f.push(V);
        }
      }
    }
    return a;
  }
  function s(a, l, u) {
    const d = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(a, l, u);
    } finally {
      Error.stackTraceLimit = d;
    }
  }
  function i(a, l) {
    const u = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(a, l, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = u;
    }
  }
  return xt.exports = s, xt.exports.default = s, xt.exports.parse = s, xt.exports.safeParse = i, xt.exports.scan = o, xt.exports;
}
var xu = Ou();
const Du = /* @__PURE__ */ wu(xu);
var Su = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = Nu(n, t);
  if (e == null)
    return o;
  if (n.includes(r))
    throw new yu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, mo = Su(), Kr = Symbol.for("vercel.ai.validator");
function Iu(e) {
  return { [Kr]: !0, validate: e };
}
function Cu(e) {
  return typeof e == "object" && e !== null && Kr in e && e[Kr] === !0 && "validate" in e;
}
function Tu(e) {
  return Cu(e) ? e : Vu(e);
}
function Vu(e) {
  return Iu((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function Au({
  value: e,
  schema: t
}) {
  const n = Tu(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const r = n.validate(e);
    return r.success ? r : {
      success: !1,
      error: us.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: us.wrap({ value: e, cause: r })
    };
  }
}
function ds({
  text: e,
  schema: t
}) {
  try {
    const n = Du.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const r = Au({ value: n, schema: t });
    return r.success ? { ...r, rawValue: n } : r;
  } catch (n) {
    return {
      success: !1,
      error: cs.isInstance(n) ? n : new cs({ text: e, cause: n })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var _n = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, mn = {
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
}, bn = {
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
}, Ru = [
  _n,
  mn,
  yn,
  En,
  bn
];
_n.code + "", mn.code + "", yn.code + "", En.code + "", bn.code + "";
_n.name + "", _n.code, mn.name + "", mn.code, yn.name + "", yn.code, En.name + "", En.code, bn.name + "", bn.code;
Ru.map((e) => e.code);
function Pu({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Mu(e) {
  const t = ["ROOT"];
  let n = -1, r = null;
  function o(l, u, d) {
    switch (l) {
      case '"': {
        n = u, t.pop(), t.push(d), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = u, r = u, t.pop(), t.push(d), t.push("INSIDE_LITERAL");
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
        n = u, t.pop(), t.push(d), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        n = u, t.pop(), t.push(d), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        n = u, t.pop(), t.push(d), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function s(l, u) {
    switch (l) {
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
  function i(l, u) {
    switch (l) {
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
  for (let l = 0; l < e.length; l++) {
    const u = e[l];
    switch (t[t.length - 1]) {
      case "ROOT":
        o(u, l, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
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
        o(u, l, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(u, l);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
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
        switch (u) {
          case "]": {
            n = l, t.pop();
            break;
          }
          default: {
            n = l, o(u, l, "INSIDE_ARRAY_AFTER_VALUE");
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
        o(u, l, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = l;
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
            n = l;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, l);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, l);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, l);
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
        const f = e.substring(r, l + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(u, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, l)) : n = l;
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
function ku(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = ds({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = ds({ text: Mu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var $u = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, ju = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Fu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Lu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Hu = {
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
}, Uu = {
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
}, Bu = {
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
}, Ku = {
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
}, Wu = {
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
}, Ju = {
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
}, Yu = {
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
}, qu = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, Gu = {
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
}, zu = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, Xu = {
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
}, Zu = {
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
  $u,
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
  Zu
], Qu = Object.fromEntries(
  yo.map((e) => [e.code, e])
);
Object.fromEntries(
  yo.map((e) => [e.name, e.code])
);
var ef = yo.map((e) => e.code), tf = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!ef.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const r = n, o = e.slice(t + 1), s = JSON.parse(o);
  return Qu[r].parse(s);
}, nf = 10;
function rf(e, t) {
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    n.set(o, r), r += o.length;
  return e.length = 0, n;
}
async function of({
  stream: e,
  onTextPart: t,
  onReasoningPart: n,
  onReasoningSignaturePart: r,
  onRedactedReasoningPart: o,
  onSourcePart: s,
  onFilePart: i,
  onDataPart: a,
  onErrorPart: l,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: d,
  onToolCallPart: f,
  onToolResultPart: g,
  onMessageAnnotationsPart: _,
  onFinishMessagePart: S,
  onFinishStepPart: V,
  onStartStepPart: Y
}) {
  const H = e.getReader(), F = new TextDecoder(), T = [];
  let A = 0;
  for (; ; ) {
    const { value: y } = await H.read();
    if (y && (T.push(y), A += y.length, y[y.length - 1] !== nf))
      continue;
    if (T.length === 0)
      break;
    const E = rf(T, A);
    A = 0;
    const k = F.decode(E, { stream: !0 }).split(`
`).filter(($) => $ !== "").map(tf);
    for (const { type: $, value: M } of k)
      switch ($) {
        case "text":
          await t?.(M);
          break;
        case "reasoning":
          await n?.(M);
          break;
        case "reasoning_signature":
          await r?.(M);
          break;
        case "redacted_reasoning":
          await o?.(M);
          break;
        case "file":
          await i?.(M);
          break;
        case "source":
          await s?.(M);
          break;
        case "data":
          await a?.(M);
          break;
        case "error":
          await l?.(M);
          break;
        case "message_annotations":
          await _?.(M);
          break;
        case "tool_call_streaming_start":
          await u?.(M);
          break;
        case "tool_call_delta":
          await d?.(M);
          break;
        case "tool_call":
          await f?.(M);
          break;
        case "tool_result":
          await g?.(M);
          break;
        case "finish_message":
          await S?.(M);
          break;
        case "finish_step":
          await V?.(M);
          break;
        case "start_step":
          await Y?.(M);
          break;
        default: {
          const z = $;
          throw new Error(`Unknown stream part type: ${z}`);
        }
      }
  }
}
async function sf({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: r,
  generateId: o = mo,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var a, l;
  const u = i?.role === "assistant";
  let d = u ? 1 + // find max step in existing tool invocations:
  ((l = (a = i.toolInvocations) == null ? void 0 : a.reduce((E, k) => {
    var $;
    return Math.max(E, ($ = k.step) != null ? $ : 0);
  }, 0)) != null ? l : 0) : 0;
  const f = u ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, _, S;
  function V(E, k) {
    const $ = f.parts.find(
      (M) => M.type === "tool-invocation" && M.toolInvocation.toolCallId === E
    );
    $ != null ? $.toolInvocation = k : f.parts.push({
      type: "tool-invocation",
      toolInvocation: k
    });
  }
  const Y = [];
  let H = u ? i?.annotations : void 0;
  const F = {};
  let T = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, A = "unknown";
  function y() {
    const E = [...Y];
    H?.length && (f.annotations = H);
    const k = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(f),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: o()
    };
    t({
      message: k,
      data: E,
      replaceLastMessage: u
    });
  }
  await of({
    stream: e,
    onTextPart(E) {
      g == null ? (g = {
        type: "text",
        text: E
      }, f.parts.push(g)) : g.text += E, f.content += E, y();
    },
    onReasoningPart(E) {
      var k;
      S == null ? (S = { type: "text", text: E }, _?.details.push(S)) : S.text += E, _ == null ? (_ = {
        type: "reasoning",
        reasoning: E,
        details: [S]
      }, f.parts.push(_)) : _.reasoning += E, f.reasoning = ((k = f.reasoning) != null ? k : "") + E, y();
    },
    onReasoningSignaturePart(E) {
      S != null && (S.signature = E.signature);
    },
    onRedactedReasoningPart(E) {
      _ == null && (_ = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, f.parts.push(_)), _.details.push({
        type: "redacted",
        data: E.data
      }), S = void 0, y();
    },
    onFilePart(E) {
      f.parts.push({
        type: "file",
        mimeType: E.mimeType,
        data: E.data
      }), y();
    },
    onSourcePart(E) {
      f.parts.push({
        type: "source",
        source: E
      }), y();
    },
    onToolCallStreamingStartPart(E) {
      f.toolInvocations == null && (f.toolInvocations = []), F[E.toolCallId] = {
        text: "",
        step: d,
        toolName: E.toolName,
        index: f.toolInvocations.length
      };
      const k = {
        state: "partial-call",
        step: d,
        toolCallId: E.toolCallId,
        toolName: E.toolName,
        args: void 0
      };
      f.toolInvocations.push(k), V(E.toolCallId, k), y();
    },
    onToolCallDeltaPart(E) {
      const k = F[E.toolCallId];
      k.text += E.argsTextDelta;
      const { value: $ } = ku(k.text), M = {
        state: "partial-call",
        step: k.step,
        toolCallId: E.toolCallId,
        toolName: k.toolName,
        args: $
      };
      f.toolInvocations[k.index] = M, V(E.toolCallId, M), y();
    },
    async onToolCallPart(E) {
      const k = {
        state: "call",
        step: d,
        ...E
      };
      if (F[E.toolCallId] != null ? f.toolInvocations[F[E.toolCallId].index] = k : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push(k)), V(E.toolCallId, k), y(), n) {
        const $ = await n({ toolCall: E });
        if ($ != null) {
          const M = {
            state: "result",
            step: d,
            ...E,
            result: $
          };
          f.toolInvocations[f.toolInvocations.length - 1] = M, V(E.toolCallId, M), y();
        }
      }
    },
    onToolResultPart(E) {
      const k = f.toolInvocations;
      if (k == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const $ = k.findIndex(
        (z) => z.toolCallId === E.toolCallId
      );
      if ($ === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const M = {
        ...k[$],
        state: "result",
        ...E
      };
      k[$] = M, V(E.toolCallId, M), y();
    },
    onDataPart(E) {
      Y.push(...E), y();
    },
    onMessageAnnotationsPart(E) {
      H == null ? H = [...E] : H.push(...E), y();
    },
    onFinishStepPart(E) {
      d += 1, g = E.isContinued ? g : void 0, _ = void 0, S = void 0;
    },
    onStartStepPart(E) {
      u || (f.id = E.messageId), f.parts.push({ type: "step-start" }), y();
    },
    onFinishMessagePart(E) {
      A = E.finishReason, E.usage != null && (T = Pu(E.usage));
    },
    onErrorPart(E) {
      throw new Error(E);
    }
  }), r?.({ message: f, finishReason: A, usage: T });
}
async function af({
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
async function lf({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: r = () => /* @__PURE__ */ new Date(),
  generateId: o = mo
}) {
  const s = { type: "text", text: "" }, i = {
    id: o(),
    createdAt: r(),
    role: "assistant",
    content: "",
    parts: [s]
  };
  await af({
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
var cf = () => fetch;
async function uf({
  api: e,
  body: t,
  streamProtocol: n = "data",
  credentials: r,
  headers: o,
  abortController: s,
  restoreMessagesOnFailure: i,
  onResponse: a,
  onUpdate: l,
  onFinish: u,
  onToolCall: d,
  generateId: f,
  fetch: g = cf(),
  lastMessage: _,
  requestType: S = "generate"
}) {
  var V, Y, H;
  const T = await (S === "resume" ? g(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (V = s?.()) == null ? void 0 : V.signal,
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
  })).catch((A) => {
    throw i(), A;
  });
  if (a)
    try {
      await a(T);
    } catch (A) {
      throw A;
    }
  if (!T.ok)
    throw i(), new Error(
      (H = await T.text()) != null ? H : "Failed to fetch the chat response."
    );
  if (!T.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await lf({
        stream: T.body,
        update: l,
        onFinish: u,
        generateId: f
      });
      return;
    }
    case "data": {
      await sf({
        stream: T.body,
        update: l,
        lastMessage: _,
        onToolCall: d,
        onFinish({ message: A, finishReason: y, usage: E }) {
          u && A != null && u(A, { usage: E, finishReason: y });
        },
        generateId: f
      });
      return;
    }
    default: {
      const A = n;
      throw new Error(`Unknown stream protocol: ${A}`);
    }
  }
}
function Wr(e) {
  return e?.reduce((t, n) => {
    var r;
    return Math.max(t, (r = n.step) != null ? r : 0);
  }, 0);
}
function Ji(e) {
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
    parts: Ji(t)
  }));
}
async function ps(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: n, type: r } = t, o = await new Promise((s, i) => {
          const a = new FileReader();
          a.onload = (l) => {
            var u;
            s((u = l.target) == null ? void 0 : u.result);
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
function ff({
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
    Yi(s) && // limit the number of automatic steps:
    ((o = Wr(s.toolInvocations)) != null ? o : 0) < n
  );
}
function Yi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, o, s) => o.type === "step-start" ? s : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function df({
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
var Dr = /* @__PURE__ */ new WeakMap(), hs = 0;
function pf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Dr.has(e[n]) ? r = Dr.get(e[n]) : (r = hs, Dr.set(e[n], hs++)), t += "@" + r;
  }
  return t;
}
function hf(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = pf(e) : e = String(e || ""), e;
}
var Eo = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return hf(t);
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
function gf() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function _f() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var mf = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Sr = {
  isOnline: gf,
  isDocumentVisible: _f,
  fetcher: mf
};
var ut = function() {
  return ut = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ut.apply(this, arguments);
}, Ht = function(e, t, n, r) {
  function o(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function a(d) {
      try {
        u(r.next(d));
      } catch (f) {
        i(f);
      }
    }
    function l(d) {
      try {
        u(r.throw(d));
      } catch (f) {
        i(f);
      }
    }
    function u(d) {
      d.done ? s(d.value) : o(d.value).then(a, l);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, Ut = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(u) {
    return function(d) {
      return l([u, d]);
    };
  }
  function l(u) {
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
    } catch (d) {
      u = [6, d], o = 0;
    } finally {
      r = s = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
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
}, qi = new Eo(), er = new Eo(), Ir = new Eo(), Gi = {
  cache: qi,
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
function bf(e, t, n) {
  var r = er.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    er.set(e, [t], n > 0 ? n + o : n);
  }
}
function vf(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var r = Math.min(t || 0, n.errorRetryCount), o = r * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: r + 1, shouldRetryOnError: !0 });
    }, o);
  }
}
var gs = function(e, t, n, r) {
  return n === void 0 && (n = qi), r === void 0 && (r = Gi.ttl), Ht(void 0, void 0, void 0, function() {
    var o, s, i, a, l, u, d;
    return Ut(this, function(f) {
      switch (f.label) {
        case 0:
          if (!Nf(t)) return [3, 5];
          f.label = 1;
        case 1:
          return f.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return o = f.sent(), [3, 4];
        case 3:
          return a = f.sent(), s = a, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          o = t, f.label = 6;
        case 6:
          if (i = !1, l = { data: o, error: s, isValidating: i }, typeof o < "u")
            try {
              n.set(e, l, r);
            } catch (g) {
              console.error("swrv(mutate): failed to set cache", g);
            }
          return u = er.get(e), u && u.data.length && (d = u.data.filter(function(g) {
            return g.key === e;
          }), d.forEach(function(g, _) {
            typeof l.data < "u" && (g.data = l.data), g.error = l.error, g.isValidating = l.isValidating, g.isLoading = l.isValidating;
            var S = _ === d.length - 1;
            S || delete d[_];
          }), d = d.filter(Boolean)), [2, l];
      }
    });
  });
};
function _s() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = ut({}, Gi), i = !1, a = !1, l = Di(), u = l?.proxy || l;
  if (!u)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = u?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = ut(ut({}, s), t[2]));
  var f = d ? s.serverTTL : s.ttl, g = typeof r == "function" ? r : Ue(r);
  typeof o > "u" && (o = s.fetcher);
  var _ = null;
  _ || (_ = wn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var S = function(F, T) {
    return Ht(e, void 0, void 0, function() {
      var A, y, E, k, $, M, z, de = this;
      return Ut(this, function(re) {
        switch (re.label) {
          case 0:
            return A = _.data === void 0, y = g.value, y ? (E = s.cache.get(y), k = E && E.data, _.isValidating = !0, _.isLoading = !k, k && (_.data = k.data, _.error = k.error), $ = F || o, !$ || !s.isDocumentVisible() && !A || T?.forceRevalidate !== void 0 && !T?.forceRevalidate ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : E && (M = !!(Date.now() - E.createdAt >= s.dedupingInterval || T?.forceRevalidate), !M) ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : (z = function() {
              return Ht(de, void 0, void 0, function() {
                var se, be, he, ce;
                return Ut(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return se = Ir.get(y), se ? [3, 2] : (be = Array.isArray(y) ? y : [y], he = $.apply(void 0, Ef([], yf(be), !1)), Ir.set(y, he, s.dedupingInterval), [4, gs(y, he, s.cache, f)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, gs(y, se.data, s.cache, f)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return _.isValidating = !1, _.isLoading = !1, Ir.delete(y), _.error !== void 0 && (ce = !i && s.shouldRetryOnError && (T ? T.shouldRetryOnError : !0), ce && vf(S, T ? T.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, k && s.revalidateDebounce ? (setTimeout(function() {
              return Ht(de, void 0, void 0, function() {
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
  }, V = function() {
    return Ht(e, void 0, void 0, function() {
      return Ut(this, function(F) {
        return [2, S(null, { shouldRetryOnError: !1 })];
      });
    });
  }, Y = null;
  ao(function() {
    var F = function() {
      return Ht(e, void 0, void 0, function() {
        return Ut(this, function(T) {
          switch (T.label) {
            case 0:
              return !_.error && s.isOnline() ? [4, S()] : [3, 2];
            case 1:
              return T.sent(), [3, 3];
            case 2:
              Y && clearTimeout(Y), T.label = 3;
            case 3:
              return s.refreshInterval && !i && (Y = setTimeout(F, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (Y = setTimeout(F, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", V, !1), window.addEventListener("focus", V, !1));
  }), lo(function() {
    i = !0, Y && clearTimeout(Y), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", V, !1), window.removeEventListener("focus", V, !1));
    var F = er.get(g.value);
    F && (F.data = F.data.filter(function(T) {
      return T !== _;
    }));
  });
  try {
    sn(g, function(F) {
      Ye(g) || (g.value = F), _.key = F, _.isValidating = !!F, bf(g.value, _, f), !d && !a && g.value && S(), a = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = ut(ut({}, Fa(_)), { mutate: function(F, T) {
    return S(F, ut(ut({}, T), { forceRevalidate: !0 }));
  } });
  return H;
}
function Nf(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var wf = _s.default || _s, ms = {}, ys = {};
function Of({
  api: e = "/api/chat",
  id: t,
  initialMessages: n = [],
  initialInput: r = "",
  sendExtraMessageFields: o,
  streamProtocol: s = "data",
  onResponse: i,
  onFinish: a,
  onError: l,
  credentials: u,
  headers: d,
  body: f,
  generateId: g = mo,
  onToolCall: _,
  fetch: S,
  keepLastMessageOnError: V = !0,
  maxSteps: Y = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var F, T;
  const A = t ?? g(), y = `${e}|${A}`, { data: E, mutate: k } = wf(
    y,
    () => {
      var W;
      return (W = ms[y]) != null ? W : Rn(n);
    }
  ), $ = (F = ys[A]) != null ? F : ys[A] = Ue(
    "ready"
  );
  (T = E.value) != null || (E.value = Rn(n));
  const M = (W) => (ms[y] = W, k()), z = E, de = Ue(void 0), re = Ue(void 0);
  let se = null;
  async function be(W, { data: ae, headers: me, body: Ae } = {}) {
    var De, qe, Pt;
    de.value = void 0, $.value = "submitted";
    const In = z.value.length, Nt = Wr(
      (De = z.value[z.value.length - 1]) == null ? void 0 : De.toolInvocations
    );
    try {
      se = new AbortController();
      const gt = Rn(W), c = gt;
      M(c);
      const p = (qe = re.value) != null ? qe : [], m = o ? c : c.map(
        ({
          role: N,
          content: b,
          experimental_attachments: v,
          data: I,
          annotations: x,
          toolInvocations: O,
          parts: w
        }) => ({
          role: N,
          content: b,
          ...v !== void 0 && {
            experimental_attachments: v
          },
          ...I !== void 0 && { data: I },
          ...x !== void 0 && { annotations: x },
          ...O !== void 0 && { toolInvocations: O },
          ...w !== void 0 && { parts: w }
        })
      );
      await uf({
        api: e,
        body: (Pt = H?.({
          id: A,
          messages: c,
          requestData: ae,
          requestBody: Ae
        })) != null ? Pt : {
          id: A,
          messages: m,
          data: ae,
          ...ge(f),
          // Use unref to unwrap the ref value
          ...Ae
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...me
        },
        abortController: () => se,
        credentials: u,
        onResponse: i,
        onUpdate({ message: N, data: b, replaceLastMessage: v }) {
          $.value = "streaming", M([
            ...v ? c.slice(0, c.length - 1) : c,
            N
          ]), b?.length && (re.value = [...p, ...b]);
        },
        onFinish: a,
        restoreMessagesOnFailure() {
          V || M(gt);
        },
        generateId: g,
        onToolCall: _,
        fetch: S,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Jr(c[c.length - 1])
      }), $.value = "ready";
    } catch (gt) {
      if (gt.name === "AbortError")
        return se = null, $.value = "ready", null;
      l && gt instanceof Error && l(gt), de.value = gt, $.value = "error";
    } finally {
      se = null;
    }
    ff({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: In,
      maxSteps: Y,
      messages: z.value
    }) && await be(z.value);
  }
  const he = async (W, ae) => {
    var me, Ae, De;
    const qe = await ps(
      (me = ae?.experimental_attachments) != null ? me : W.experimental_attachments
    );
    return be(
      z.value.concat({
        ...W,
        id: (Ae = W.id) != null ? Ae : g(),
        createdAt: (De = W.createdAt) != null ? De : /* @__PURE__ */ new Date(),
        experimental_attachments: qe.length > 0 ? qe : void 0,
        parts: Ji(W)
      }),
      ae
    );
  }, ce = async (W) => {
    const ae = z.value;
    return ae.length === 0 ? null : ae[ae.length - 1].role === "assistant" ? be(ae.slice(0, -1), W) : be(ae, W);
  }, B = () => {
    se && (se.abort(), se = null);
  }, J = (W) => {
    typeof W == "function" && (W = W(z.value)), M(Rn(W));
  }, xe = (W) => {
    typeof W == "function" && (W = W(re.value)), re.value = W;
  }, it = Ue(r), at = async (W, ae = {}) => {
    var me;
    (me = W?.preventDefault) == null || me.call(W);
    const Ae = it.value;
    if (!Ae && !ae.allowEmptySubmit)
      return;
    const De = await ps(
      ae.experimental_attachments
    );
    be(
      z.value.concat({
        id: g(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ae,
        role: "user",
        experimental_attachments: De.length > 0 ? De : void 0,
        parts: [{ type: "text", text: Ae }]
      }),
      ae
    ), it.value = "";
  }, ht = ({
    toolCallId: W,
    result: ae
  }) => {
    const me = z.value;
    if (df({
      messages: me,
      toolCallId: W,
      toolResult: ae
    }), M(me), $.value === "submitted" || $.value === "streaming")
      return;
    const Ae = me[me.length - 1];
    Yi(Ae) && be(me);
  };
  return {
    id: A,
    messages: z,
    append: he,
    error: de,
    reload: ce,
    stop: B,
    setMessages: J,
    input: it,
    handleSubmit: at,
    isLoading: go(
      () => $.value === "submitted" || $.value === "streaming"
    ),
    status: $,
    data: re,
    setData: xe,
    addToolResult: ht
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
function xf(e) {
  const t = Ue(!1), n = Ue("");
  let r = null, o = [];
  const s = async () => {
    if (!t.value)
      try {
        const l = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        r = new MediaRecorder(l), o = [], r.ondataavailable = (u) => {
          o.push(u.data);
        }, r.onstop = async () => {
          const u = new Blob(o, { type: r?.mimeType });
          await a(u), l.getTracks().forEach((d) => d.stop());
        }, r.start(), t.value = !0, n.value = "";
      } catch (l) {
        n.value = `启动录音失败: ${l.message}`;
      }
  }, i = () => {
    !t.value || !r || (r.stop(), t.value = !1);
  }, a = async (l) => {
    const u = new FormData();
    u.append("audio", l, "recording.webm");
    try {
      const d = await fetch("/api/transcribe", {
        method: "POST",
        body: u
      });
      if (!d.ok) throw new Error("转录请求失败");
      const f = await d.json();
      f.transcript && e(f.transcript);
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
const Df = {
  key: 1,
  class: "chat-main"
}, Sf = { class: "messages-area" }, If = {
  key: 0,
  class: "welcome-message"
}, Cf = ["src"], Tf = { key: 1 }, Vf = {
  key: 1,
  class: "message-entry"
}, Af = { class: "message-ai" }, Rf = {
  key: 0,
  class: "dice-animation"
}, Pf = { key: 1 }, Mf = ["disabled"], kf = /* @__PURE__ */ ti({
  __name: "AiChatBubble",
  props: {
    apiUrl: {}
  },
  setup(e) {
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s } = Of({ api: t.apiUrl }), { isRecording: i, start: a, stop: l } = xf((A) => {
      const y = A.trim();
      if (["发送", "提交", "发出"].includes(y)) {
        o();
        return;
      }
      if (["清空", "清除", "删除"].includes(y)) {
        r.value = "";
        return;
      }
      r.value = y;
    }), u = Ue(!1), d = wn({ x: 0, y: 0 }), f = Ue(null);
    function g() {
      u.value = !u.value;
    }
    const _ = Ue(null);
    function S(A) {
      return A.trim().startsWith("<audio");
    }
    function V(A) {
      const y = A.match(/src="([^"]+)"/);
      return y ? y[1] : null;
    }
    const Y = go(() => {
      if (!s.value) return !1;
      const A = [...n.value].reverse().find((y) => y.role === "user");
      return !!(A && /摇骰子|摇色子|掷骰子/.test(A.content));
    });
    sn(n, async (A) => {
      const y = A[A.length - 1];
      if (y?.role === "assistant" && S(y.content)) {
        if (!V(y.content)) return;
        await no(), _.value?.play().catch(() => console.warn("Audio autoplay was prevented."));
      }
    }, { deep: !0 });
    const H = Ue(!1);
    function F(A) {
      A.preventDefault();
      const y = f.value;
      if (!y) return;
      const E = A.clientX, k = A.clientY, $ = d.x, M = d.y;
      let z = !1;
      function de(se) {
        const be = se.clientX - E, he = se.clientY - k;
        if (!z && (Math.abs(be) > 5 || Math.abs(he) > 5) && (z = !0, H.value = !0), z) {
          const ce = $ + be, B = M + he;
          if (!y) return;
          const J = y.offsetWidth, xe = y.offsetHeight, it = Math.max(0, Math.min(ce, window.innerWidth - J)), at = Math.max(0, Math.min(B, window.innerHeight - xe));
          d.x = it, d.y = at;
        }
      }
      function re() {
        document.removeEventListener("mousemove", de), document.removeEventListener("mouseup", re), setTimeout(() => {
          H.value = !1;
        }, 10);
      }
      document.addEventListener("mousemove", de), document.addEventListener("mouseup", re);
    }
    function T() {
      H.value || g();
    }
    return ao(() => {
      const A = f.value;
      if (!A) return;
      const y = 20;
      d.x = window.innerWidth - A.offsetWidth - y, d.y = window.innerHeight - A.offsetHeight - y;
    }), (A, y) => ($e(), Fe("div", {
      ref_key: "containerRef",
      ref: f,
      class: "ai-bubble-container",
      style: sr({ left: d.x + "px", top: d.y + "px" })
    }, [
      Pe("div", {
        class: "floating-button",
        onClick: T,
        onMousedown: F
      }, " :) ", 32),
      u.value ? ($e(), Fe("button", {
        key: 0,
        class: "chat-close-button",
        onClick: g
      }, " ✕ ")) : An("", !0),
      u.value ? ($e(), Fe("div", Df, [
        Pe("div", Sf, [
          ge(n).length === 0 ? ($e(), Fe("div", If, " 有什么可以帮您的吗？ ")) : An("", !0),
          ($e(!0), Fe(Le, null, Il(ge(n), (E) => ($e(), Fe("div", {
            key: E.id,
            class: "message-entry"
          }, [
            Pe("p", {
              class: cn(E.role === "user" ? "message-user" : "message-ai")
            }, [
              E.content.trim().startsWith("<audio") ? ($e(), Fe("audio", {
                key: 0,
                ref_for: !0,
                ref_key: "audioRef",
                ref: _,
                src: V(E.content) ?? "",
                controls: "",
                autoplay: ""
              }, null, 8, Cf)) : ($e(), Fe("span", Tf, Os(E.content), 1))
            ], 2)
          ]))), 128)),
          ge(s) ? ($e(), Fe("div", Vf, [
            Pe("p", Af, [
              Y.value ? ($e(), Fe("span", Rf, y[4] || (y[4] = [
                Pe("span", { class: "die" }, "⚀", -1),
                Pe("span", { class: "die" }, "⚂", -1),
                Pe("span", { class: "die" }, "⚅", -1)
              ]))) : ($e(), Fe("span", Pf, "思考中..."))
            ])
          ])) : An("", !0)
        ]),
        Pe("form", {
          onSubmit: y[3] || (y[3] = is(
            //@ts-ignore
            (...E) => ge(o) && ge(o)(...E),
            ["prevent"]
          )),
          class: "input-form"
        }, [
          dl(Pe("textarea", {
            "onUpdate:modelValue": y[0] || (y[0] = (E) => le(r) ? r.value = E : null),
            placeholder: "请输入...",
            class: "chat-textarea",
            rows: "1",
            onKeydown: y[1] || (y[1] = iu(is(
              //@ts-ignore
              (...E) => ge(o) && ge(o)(...E),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [nu, ge(r)]
          ]),
          Pe("button", {
            type: "button",
            onClick: y[2] || (y[2] = (E) => ge(i) ? ge(l)() : ge(a)()),
            class: cn(["mic-button", { "is-listening": ge(i) }]),
            title: "语音输入"
          }, "🎤", 2),
          Pe("button", {
            type: "submit",
            disabled: ge(s) || !ge(r).trim(),
            class: "send-button"
          }, "➤", 8, Mf)
        ], 32)
      ])) : An("", !0)
    ], 4));
  }
}), $f = /* @__PURE__ */ Qc(kf);
customElements.define("ai-chat-bubble", $f);
