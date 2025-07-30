var vs = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ft(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = vs.NODE_ENV !== "production" ? Object.freeze({}) : {}, Kt = vs.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, Xi = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), le = Object.assign, qr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zi = Object.prototype.hasOwnProperty, G = (e, t) => Zi.call(e, t), M = Array.isArray, It = (e) => nr(e) === "[object Map]", Ns = (e) => nr(e) === "[object Set]", L = (e) => typeof e == "function", ie = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Gr = (e) => (re(e) || L(e)) && L(e.then) && L(e.catch), ws = Object.prototype.toString, nr = (e) => ws.call(e), zr = (e) => nr(e).slice(8, -1), rr = (e) => nr(e) === "[object Object]", Xr = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ft(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qi = /* @__PURE__ */ ft(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, el = /-(\w)/g, Ve = or(
  (e) => e.replace(el, (t, n) => n ? n.toUpperCase() : "")
), tl = /\B([A-Z])/g, Te = or(
  (e) => e.replace(tl, "-$1").toLowerCase()
), sr = or((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = or(
  (e) => e ? `on${sr(e)}` : ""
), yt = (e, t) => !Object.is(e, t), Ft = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Tr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Oo = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xo;
const wn = () => xo || (xo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ir(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ie(r) ? sl(r) : ir(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (ie(e) || re(e))
    return e;
}
const nl = /;(?![^(]*\))/g, rl = /:([^]+)/, ol = /\/\*[^]*?\*\//g;
function sl(e) {
  const t = {};
  return e.replace(ol, "").split(nl).forEach((n) => {
    if (n) {
      const r = n.split(rl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function un(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const r = un(e[n]);
      r && (t += r + " ");
    }
  else if (re(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const il = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ll = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", al = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", cl = /* @__PURE__ */ ft(il), ul = /* @__PURE__ */ ft(ll), fl = /* @__PURE__ */ ft(al), dl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pl = /* @__PURE__ */ ft(dl);
function Os(e) {
  return !!e || e === "";
}
const xs = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => ie(e) ? e : e == null ? "" : M(e) || re(e) && (e.toString === ws || !L(e.toString)) ? xs(e) ? Ds(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => xs(t) ? Ss(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[mr(r, s) + " =>"] = o, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => mr(n))
} : vt(t) ? mr(t) : re(t) && !M(t) && !rr(t) ? String(t) : t, mr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var oe = {};
function Be(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ce;
class hl {
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
    } else oe.NODE_ENV !== "production" && Be("cannot run an inactive effect scope.");
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
function gl() {
  return Ce;
}
let Q;
const _r = /* @__PURE__ */ new WeakSet();
class Is {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ts(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Do(this), Vs(this);
    const t = Q, n = Ue;
    Q = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      oe.NODE_ENV !== "production" && Q !== this && Be(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), As(this), Q = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        eo(t);
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
    Vr(this) && this.run();
  }
  get dirty() {
    return Vr(this);
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
function Zr() {
  Cs++;
}
function Qr() {
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
    r.version === -1 ? (r === n && (n = o), eo(r), ml(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Vr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Rs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Vr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Q, r = Ue;
  Q = e, Ue = !0;
  try {
    Vs(e);
    const o = e.fn(e._value);
    (t.version === 0 || yt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Q = n, Ue = r, As(e), e.flags &= -3;
  }
}
function eo(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), oe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      eo(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ml(e) {
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
    const n = Q;
    Q = void 0;
    try {
      t();
    } finally {
      Q = n;
    }
  }
}
let fn = 0;
class _l {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class to {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, oe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Q || !Ue || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new _l(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, ks(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = r);
    }
    return oe.NODE_ENV !== "production" && Q.onTrack && Q.onTrack(
      le(
        {
          effect: Q
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, fn++, this.notify(t);
  }
  notify(t) {
    Zr();
    try {
      if (oe.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            le(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qr();
    }
  }
}
function ks(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        ks(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), oe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), Ct = Symbol(
  oe.NODE_ENV !== "production" ? "Object iterate" : ""
), Ar = Symbol(
  oe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), dn = Symbol(
  oe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function de(e, t, n) {
  if (Ue && Q) {
    let r = Bn.get(e);
    r || Bn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new to()), o.map = r, o.key = n), oe.NODE_ENV !== "production" ? o.track({
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
  const l = (a) => {
    a && (oe.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : a.trigger());
  };
  if (Zr(), t === "clear")
    i.forEach(l);
  else {
    const a = M(e), f = a && Xr(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((u, g) => {
        (g === "length" || g === dn || !vt(g) && g >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(dn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Ct)), It(e) && l(i.get(Ar)));
          break;
        case "delete":
          a || (l(i.get(Ct)), It(e) && l(i.get(Ar)));
          break;
        case "set":
          It(e) && l(i.get(Ct));
          break;
      }
  }
  Qr();
}
function bl(e, t) {
  const n = Bn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = W(e);
  return t === e ? t : (de(t, "iterate", dn), xe(e) ? t : t.map(me));
}
function lr(e) {
  return de(e = W(e), "iterate", dn), e;
}
const yl = {
  __proto__: null,
  [Symbol.iterator]() {
    return br(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => M(t) ? Mt(t) : t)
    );
  },
  entries() {
    return br(this, "entries", (e) => (e[1] = me(e[1]), e));
  },
  every(e, t) {
    return lt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return lt(this, "filter", e, t, (n) => n.map(me), arguments);
  },
  find(e, t) {
    return lt(this, "find", e, t, me, arguments);
  },
  findIndex(e, t) {
    return lt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return lt(this, "findLast", e, t, me, arguments);
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
    return lt(this, "some", e, t, void 0, arguments);
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
    return br(this, "values", me);
  }
};
function br(e, t, n) {
  const r = lr(e), o = r[t]();
  return r !== e && !xe(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const El = Array.prototype;
function lt(e, t, n, r, o, s) {
  const i = lr(e), l = i !== e && !xe(e), a = i[t];
  if (a !== El[t]) {
    const u = a.apply(e, s);
    return l ? me(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, g) {
    return n.call(this, me(u), g, e);
  } : n.length > 2 && (f = function(u, g) {
    return n.call(this, u, g, e);
  }));
  const d = a.call(i, f, r);
  return l && o ? o(d) : d;
}
function So(e, t, n, r) {
  const o = lr(e);
  let s = n;
  return o !== e && (xe(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, me(l), a, e);
  }), o[t](s, ...r);
}
function yr(e, t, n) {
  const r = W(e);
  de(r, "iterate", dn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && pn(n[0]) ? (n[0] = W(n[0]), r[t](...n)) : o;
}
function zt(e, t, n = []) {
  Ke(), Zr();
  const r = W(e)[t].apply(e, n);
  return Qr(), We(), r;
}
const vl = /* @__PURE__ */ ft("__proto__,__v_isRef,__isVue"), Ms = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
);
function Nl(e) {
  vt(e) || (e = String(e));
  const t = W(this);
  return de(t, "has", e), t.hasOwnProperty(e);
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
    const i = M(t);
    if (!o) {
      let a;
      if (i && (a = yl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Nl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ue(t) ? t : r
    );
    return (vt(n) ? Ms.has(n) : vl(n)) || (o || de(t, "get", n), s) ? l : ue(l) ? i && Xr(n) ? l : l.value : re(l) ? o ? Kn(l) : On(l) : l;
  }
}
class js extends $s {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Je(s);
      if (!xe(r) && !Je(r) && (s = W(s), r = W(r)), !M(t) && ue(s) && !ue(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = M(t) && Xr(n) ? Number(n) < t.length : G(t, n), l = Reflect.set(
      t,
      n,
      r,
      ue(t) ? t : o
    );
    return t === W(o) && (i ? yt(r, s) && Qe(t, "set", n, r, s) : Qe(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = G(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Qe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!vt(n) || !Ms.has(n)) && de(t, "has", n), r;
  }
  ownKeys(t) {
    return de(
      t,
      "iterate",
      M(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class Fs extends $s {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return oe.NODE_ENV !== "production" && Be(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return oe.NODE_ENV !== "production" && Be(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const wl = /* @__PURE__ */ new js(), Ol = /* @__PURE__ */ new Fs(), xl = /* @__PURE__ */ new js(!0), Dl = /* @__PURE__ */ new Fs(!0), Rr = (e) => e, Tn = (e) => Reflect.getPrototypeOf(e);
function Sl(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = W(o), i = It(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), d = n ? Rr : t ? Wn : me;
    return !t && de(
      s,
      "iterate",
      a ? Ar : Ct
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = f.next();
        return g ? { value: u, done: g } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
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
    if (oe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Be(
        `${sr(e)} operation ${n}failed: target is readonly.`,
        W(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Il(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = W(s), l = W(o);
      e || (yt(o, l) && de(i, "get", o), de(i, "get", l));
      const { has: a } = Tn(i), f = t ? Rr : e ? Wn : me;
      if (a.call(i, o))
        return f(s.get(o));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && de(W(o), "iterate", Ct), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = W(s), l = W(o);
      return e || (yt(o, l) && de(i, "has", o), de(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const i = this, l = i.__v_raw, a = W(l), f = t ? Rr : e ? Wn : me;
      return !e && de(a, "iterate", Ct), l.forEach((d, u) => o.call(s, f(d), f(u), i));
    }
  };
  return le(
    n,
    e ? {
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear")
    } : {
      add(o) {
        !t && !xe(o) && !Je(o) && (o = W(o));
        const s = W(this);
        return Tn(s).has.call(s, o) || (s.add(o), Qe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !xe(s) && !Je(s) && (s = W(s));
        const i = W(this), { has: l, get: a } = Tn(i);
        let f = l.call(i, o);
        f ? oe.NODE_ENV !== "production" && Io(i, l, o) : (o = W(o), f = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), f ? yt(s, d) && Qe(i, "set", o, s, d) : Qe(i, "add", o, s), this;
      },
      delete(o) {
        const s = W(this), { has: i, get: l } = Tn(s);
        let a = i.call(s, o);
        a ? oe.NODE_ENV !== "production" && Io(s, i, o) : (o = W(o), a = i.call(s, o));
        const f = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && Qe(s, "delete", o, void 0, f), d;
      },
      clear() {
        const o = W(this), s = o.size !== 0, i = oe.NODE_ENV !== "production" ? It(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return s && Qe(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Sl(o, e, t);
  }), n;
}
function ar(e, t) {
  const n = Il(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    G(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Cl = {
  get: /* @__PURE__ */ ar(!1, !1)
}, Tl = {
  get: /* @__PURE__ */ ar(!1, !0)
}, Vl = {
  get: /* @__PURE__ */ ar(!0, !1)
}, Al = {
  get: /* @__PURE__ */ ar(!0, !0)
};
function Io(e, t, n) {
  const r = W(n);
  if (r !== n && t.call(e, r)) {
    const o = zr(e);
    Be(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap();
function Rl(e) {
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
function Pl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rl(zr(e));
}
function On(e) {
  return Je(e) ? e : cr(
    e,
    !1,
    wl,
    Cl,
    Ls
  );
}
function kl(e) {
  return cr(
    e,
    !1,
    xl,
    Tl,
    Hs
  );
}
function Kn(e) {
  return cr(
    e,
    !0,
    Ol,
    Vl,
    Us
  );
}
function tt(e) {
  return cr(
    e,
    !0,
    Dl,
    Al,
    Bs
  );
}
function cr(e, t, n, r, o) {
  if (!re(e))
    return oe.NODE_ENV !== "production" && Be(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Pl(e);
  if (s === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    s === 2 ? r : n
  );
  return o.set(e, l), l;
}
function Tt(e) {
  return Je(e) ? Tt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function xe(e) {
  return !!(e && e.__v_isShallow);
}
function pn(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Ml(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && cn(e, "__v_skip", !0), e;
}
const me = (e) => re(e) ? On(e) : e, Wn = (e) => re(e) ? Kn(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function He(e) {
  return $l(e, !1);
}
function $l(e, t) {
  return ue(e) ? e : new jl(e, t);
}
class jl {
  constructor(t, n) {
    this.dep = new to(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : W(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return oe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || xe(t) || Je(t);
    t = r ? t : W(t), yt(t, n) && (this._rawValue = t, this._value = r ? t : me(t), oe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ge(e) {
  return ue(e) ? e.value : e;
}
const Fl = {
  get: (e, t, n) => t === "__v_raw" ? e : ge(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ue(o) && !ue(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ks(e) {
  return Tt(e) ? e : new Proxy(e, Fl);
}
function Ll(e) {
  oe.NODE_ENV !== "production" && !pn(e) && Be("toRefs() expects a reactive object but received a plain one.");
  const t = M(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ul(e, n);
  return t;
}
class Hl {
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
    return bl(W(this._object), this._key);
  }
}
function Ul(e, t, n) {
  const r = e[t];
  return ue(r) ? r : new Hl(e, t, n);
}
class Bl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new to(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return Ts(this, !0), !0;
  }
  get value() {
    const t = oe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Rs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : oe.NODE_ENV !== "production" && Be("Write operation failed: computed value is readonly");
  }
}
function Kl(e, t, n = !1) {
  let r, o;
  return L(e) ? r = e : (r = e.get, o = e.set), new Bl(r, o, n);
}
const An = {}, Jn = /* @__PURE__ */ new WeakMap();
let St;
function Wl(e, t = !1, n = St) {
  if (n) {
    let r = Jn.get(n);
    r || Jn.set(n, r = []), r.push(e);
  } else oe.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jl(e, t, n = ee) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (x) => {
    (n.onWarn || Be)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (x) => o ? x : xe(x) || o === !1 || o === 0 ? ut(x, 1) : ut(x);
  let u, g, m, S, R = !1, q = !1;
  if (ue(e) ? (g = () => e.value, R = xe(e)) : Tt(e) ? (g = () => d(e), R = !0) : M(e) ? (q = !0, R = e.some((x) => Tt(x) || xe(x)), g = () => e.map((x) => {
    if (ue(x))
      return x.value;
    if (Tt(x))
      return d(x);
    if (L(x))
      return a ? a(x, 2) : x();
    oe.NODE_ENV !== "production" && f(x);
  })) : L(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (m) {
      Ke();
      try {
        m();
      } finally {
        We();
      }
    }
    const x = St;
    St = u;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      St = x;
    }
  } : (g = pe, oe.NODE_ENV !== "production" && f(e)), t && o) {
    const x = g, N = o === !0 ? 1 / 0 : o;
    g = () => ut(x(), N);
  }
  const H = gl(), F = () => {
    u.stop(), H && H.active && qr(H.effects, u);
  };
  if (s && t) {
    const x = t;
    t = (...N) => {
      x(...N), F();
    };
  }
  let A = q ? new Array(e.length).fill(An) : An;
  const K = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x))
      if (t) {
        const N = u.run();
        if (o || R || (q ? N.some(($, O) => yt($, A[O])) : yt(N, A))) {
          m && m();
          const $ = St;
          St = u;
          try {
            const O = [
              N,
              // pass undefined as the old value when it's changed for the first time
              A === An ? void 0 : q && A[0] === An ? [] : A,
              S
            ];
            A = N, a ? a(t, 3, O) : (
              // @ts-expect-error
              t(...O)
            );
          } finally {
            St = $;
          }
        }
      } else
        u.run();
  };
  return l && l(K), u = new Is(g), u.scheduler = i ? () => i(K, !1) : K, S = (x) => Wl(x, !1, u), m = u.onStop = () => {
    const x = Jn.get(u);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const N of x) N();
      Jn.delete(u);
    }
  }, oe.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? r ? K(!0) : A = u.run() : i ? i(K.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function ut(e, t = 1 / 0, n) {
  if (t <= 0 || !re(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    ut(e.value, t, n);
  else if (M(e))
    for (let r = 0; r < e.length; r++)
      ut(e[r], t, n);
  else if (Ns(e) || It(e))
    e.forEach((r) => {
      ut(r, t, n);
    });
  else if (rr(e)) {
    for (const r in e)
      ut(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ut(e[r], t, n);
  }
  return e;
}
var h = {};
const Vt = [];
function Pn(e) {
  Vt.push(e);
}
function kn() {
  Vt.pop();
}
let Er = !1;
function C(e, ...t) {
  if (Er) return;
  Er = !0, Ke();
  const n = Vt.length ? Vt[Vt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Yl();
  if (r)
    qt(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, l;
          return (l = (i = s.toString) == null ? void 0 : i.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${gr(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...ql(o)), console.warn(...s);
  }
  We(), Er = !1;
}
function Yl() {
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
function ql(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Gl(n));
  }), t;
}
function Gl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${gr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...zl(e.props), s] : [o + s];
}
function zl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ws(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ws(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = Ws(e, W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = W(t), n ? t : [`${e}=`, t]);
}
const no = {
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
  if (L(e)) {
    const o = qt(e, t, n, r);
    return o && Gr(o) && o.catch((s) => {
      xn(s, t, n);
    }), o;
  }
  if (M(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(ot(e[s], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && C(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function xn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = h.NODE_ENV !== "production" ? no[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Ke(), qt(s, null, 10, [
        e,
        a,
        f
      ]), We();
      return;
    }
  }
  Xl(e, n, o, r, i);
}
function Xl(e, t, n, r = !0, o = !1) {
  if (h.NODE_ENV !== "production") {
    const s = no[t];
    if (n && Pn(n), C(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && kn(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const we = [];
let Ze = -1;
const Wt = [];
let gt = null, Lt = 0;
const Js = /* @__PURE__ */ Promise.resolve();
let Yn = null;
const Zl = 100;
function qn(e) {
  const t = Yn || Js;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ql(e) {
  let t = Ze + 1, n = we.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = we[r], s = hn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ur(e) {
  if (!(e.flags & 1)) {
    const t = hn(e), n = we[we.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hn(n) ? we.push(e) : we.splice(Ql(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  Yn || (Yn = Js.then(zs));
}
function qs(e) {
  M(e) ? Wt.push(...e) : gt && e.id === -1 ? gt.splice(Lt + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), Ys();
}
function Co(e, t, n = Ze + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < we.length; n++) {
    const r = we[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && ro(t, r))
        continue;
      we.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Gs(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, r) => hn(n) - hn(r)
    );
    if (Wt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < gt.length; Lt++) {
      const n = gt[Lt];
      h.NODE_ENV !== "production" && ro(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, Lt = 0;
  }
}
const hn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zs(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => ro(e, n) : pe;
  try {
    for (Ze = 0; Ze < we.length; Ze++) {
      const n = we[Ze];
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
    for (; Ze < we.length; Ze++) {
      const n = we[Ze];
      n && (n.flags &= -2);
    }
    Ze = -1, we.length = 0, Gs(e), Yn = null, (we.length || Wt.length) && zs(e);
  }
}
function ro(e, t) {
  const n = e.get(t) || 0;
  if (n > Zl) {
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
const Mn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (wn().__VUE_HMR_RUNTIME__ = {
  createRecord: vr(Xs),
  rerender: vr(na),
  reload: vr(ra)
});
const Pt = /* @__PURE__ */ new Map();
function ea(e) {
  const t = e.type.__hmrId;
  let n = Pt.get(t);
  n || (Xs(t, e.type), n = Pt.get(t)), n.instances.add(e);
}
function ta(e) {
  Pt.get(e.type.__hmrId).instances.delete(e);
}
function Xs(e, t) {
  return Pt.has(e) ? !1 : (Pt.set(e, {
    initialDef: Gn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Gn(e) {
  return Vi(e) ? e.__vccOpts : e;
}
function na(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Gn(r.type).render = t), r.renderCache = [], nt = !0, r.update(), nt = !1;
  }));
}
function ra(e, t) {
  const n = Pt.get(e);
  if (!n) return;
  t = Gn(t), To(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = Gn(s.type);
    let l = Mn.get(i);
    l || (i !== n.initialDef && To(i, t), Mn.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? ur(() => {
      nt = !0, s.parent.update(), nt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  qs(() => {
    Mn.clear();
  });
}
function To(e, t) {
  le(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function vr(e) {
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
let et, en = [], Pr = !1;
function Dn(e, ...t) {
  et ? et.emit(e, ...t) : Pr || en.push({ event: e, args: t });
}
function Zs(e, t) {
  var n, r;
  et = e, et ? (et.enabled = !0, en.forEach(({ event: o, args: s }) => et.emit(o, ...s)), en = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Zs(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Pr = !0, en = []);
  }, 3e3)) : (Pr = !0, en = []);
}
function oa(e, t) {
  Dn("app:init", e, t, {
    Fragment: je,
    Text: Sn,
    Comment: Me,
    Static: Fn
  });
}
function sa(e) {
  Dn("app:unmount", e);
}
const ia = /* @__PURE__ */ oo(
  "component:added"
  /* COMPONENT_ADDED */
), Qs = /* @__PURE__ */ oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), la = /* @__PURE__ */ oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), aa = (e) => {
  et && typeof et.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !et.cleanupBuffer(e) && la(e);
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
const ca = /* @__PURE__ */ ei(
  "perf:start"
  /* PERFORMANCE_START */
), ua = /* @__PURE__ */ ei(
  "perf:end"
  /* PERFORMANCE_END */
);
function ei(e) {
  return (t, n, r) => {
    Dn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function fa(e, t, n) {
  Dn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Oe = null, ti = null;
function zn(e) {
  const t = Oe;
  return Oe = e, ti = e && e.type.__scopeId || null, t;
}
function da(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Uo(-1);
    const s = zn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      zn(s), r._d && Uo(1);
    }
    return h.NODE_ENV !== "production" && Qs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ni(e) {
  Qi(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function pa(e, t) {
  if (Oe === null)
    return h.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const n = hr(Oe), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = ee] = t[o];
    s && (L(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ut(i), r.push({
      dir: s,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function wt(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[r];
    a && (Ke(), ot(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), We());
  }
}
const ha = Symbol("_vte"), ga = (e) => e.__isTeleport;
function so(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, so(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ri(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ma = /* @__PURE__ */ new WeakSet();
function sn(e, t, n, r, o = !1) {
  if (M(e)) {
    e.forEach(
      (S, R) => sn(
        S,
        t && (M(t) ? t[R] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (ln(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && sn(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? hr(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    C(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === ee ? l.refs = {} : l.refs, u = l.setupState, g = W(u), m = u === ee ? () => !1 : (S) => h.NODE_ENV !== "production" && (G(g, S) && !ue(g[S]) && C(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), ma.has(g[S])) ? !1 : G(g, S);
  if (f != null && f !== a && (ie(f) ? (d[f] = null, m(f) && (u[f] = null)) : ue(f) && (f.value = null)), L(a))
    qt(a, l, 12, [i, d]);
  else {
    const S = ie(a), R = ue(a);
    if (S || R) {
      const q = () => {
        if (e.f) {
          const H = S ? m(a) ? u[a] : d[a] : a.value;
          o ? M(H) && qr(H, s) : M(H) ? H.includes(s) || H.push(s) : S ? (d[a] = [s], m(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else S ? (d[a] = i, m(a) && (u[a] = i)) : R ? (a.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (q.id = -1, Pe(q, n)) : q();
    } else h.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
  }
}
wn().requestIdleCallback;
wn().cancelIdleCallback;
const ln = (e) => !!e.type.__asyncLoader, io = (e) => e.type.__isKeepAlive;
function _a(e, t) {
  si(e, "a", t);
}
function ba(e, t) {
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
  if (fr(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      io(o.parent.vnode) && ya(r, t, n, o), o = o.parent;
  }
}
function ya(e, t, n, r) {
  const o = fr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ao(() => {
    qr(r[t], o);
  }, n);
}
function fr(e, t, n = _e, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ke();
      const l = In(n), a = ot(t, n, e, i);
      return l(), We(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const o = Dt(no[e].replace(/ hook$/, ""));
    C(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const dt = (e) => (t, n = _e) => {
  (!mn || e === "sp") && fr(e, (...r) => t(...r), n);
}, Ea = dt("bm"), lo = dt("m"), va = dt(
  "bu"
), Na = dt("u"), wa = dt(
  "bum"
), ao = dt("um"), Oa = dt(
  "sp"
), xa = dt("rtg"), Da = dt("rtc");
function Sa(e, t = _e) {
  fr("ec", e, t);
}
const Ia = Symbol.for("v-ndc");
function Ca(e, t, n, r) {
  let o;
  const s = n, i = M(e);
  if (i || ie(e)) {
    const l = i && Tt(e);
    let a = !1, f = !1;
    l && (a = !xe(e), f = Je(e), e = lr(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? f ? Wn(me(e[d])) : me(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, s);
  } else if (re(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, s)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, s);
      }
    }
  else
    o = [];
  return o;
}
const kr = (e) => e ? Ii(e) ? hr(e) : kr(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? tt(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? tt(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? tt(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? tt(e.refs) : e.refs,
    $parent: (e) => kr(e.parent),
    $root: (e) => kr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ur(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qn.bind(e.proxy)),
    $watch: (e) => ac.bind(e)
  })
), co = (e) => e === "_" || e === "$", Nr = (e, t) => e !== ee && !e.__isScriptSetup && G(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
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
        if (Nr(r, t))
          return i[t] = 1, r[t];
        if (o !== ee && G(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && G(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== ee && G(n, t))
          return i[t] = 4, n[t];
        Mr && (i[t] = 0);
      }
    }
    const d = At[t];
    let u, g;
    if (d)
      return t === "$attrs" ? (de(e.attrs, "get", ""), h.NODE_ENV !== "production" && Qn()) : h.NODE_ENV !== "production" && t === "$slots" && de(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && G(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, G(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && Oe && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== ee && co(t[0]) && G(o, t) ? C(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Oe && C(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Nr(o, t) ? (o[t] = n, !0) : h.NODE_ENV !== "production" && o.__isScriptSetup && G(o, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== ee && G(r, t) ? (r[t] = n, !0) : G(e.props, t) ? (h.NODE_ENV !== "production" && C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && C(
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
    let l;
    return !!n[i] || e !== ee && G(e, i) || Nr(t, i) || (l = s[0]) && G(l, i) || G(r, i) || G(At, i) || G(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (ii.ownKeys = (e) => (C(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ta(e) {
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
      set: pe
    });
  }), t;
}
function Va(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: pe
    });
  });
}
function Aa(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(W(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (co(r[0])) {
        C(
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
        set: pe
      });
    }
  });
}
function Vo(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ra() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? C(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Mr = !0;
function Pa(e) {
  const t = ai(e), n = e.proxy, r = e.ctx;
  Mr = !1, t.beforeCreate && Ao(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: f,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: R,
    deactivated: q,
    beforeDestroy: H,
    beforeUnmount: F,
    destroyed: A,
    unmounted: K,
    render: x,
    renderTracked: N,
    renderTriggered: $,
    errorCaptured: O,
    serverPrefetch: E,
    // public API
    expose: P,
    inheritAttrs: ne,
    // assets
    components: z,
    directives: Z,
    filters: fe
  } = t, he = h.NODE_ENV !== "production" ? Ra() : null;
  if (h.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const J in B)
        he("Props", J);
  }
  if (f && ka(f, r, he), i)
    for (const B in i) {
      const J = i[B];
      L(J) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = J.bind(n), h.NODE_ENV !== "production" && he("Methods", B)) : h.NODE_ENV !== "production" && C(
        `Method "${B}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !L(o) && C(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = o.call(n, n);
    if (h.NODE_ENV !== "production" && Gr(B) && C(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !re(B))
      h.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = On(B), h.NODE_ENV !== "production")
      for (const J in B)
        he("Data", J), co(J[0]) || Object.defineProperty(r, J, {
          configurable: !0,
          enumerable: !0,
          get: () => B[J],
          set: pe
        });
  }
  if (Mr = !0, s)
    for (const B in s) {
      const J = s[B], Ee = L(J) ? J.bind(n, n) : L(J.get) ? J.get.bind(n, n) : pe;
      h.NODE_ENV !== "production" && Ee === pe && C(`Computed property "${B}" has no getter.`);
      const st = !L(J) && L(J.set) ? J.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        C(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : pe, it = mo({
        get: Ee,
        set: st
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (pt) => it.value = pt
      }), h.NODE_ENV !== "production" && he("Computed", B);
    }
  if (l)
    for (const B in l)
      li(l[B], r, n, B);
  if (a) {
    const B = L(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach((J) => {
      Ha(J, B[J]);
    });
  }
  d && Ao(d, e, "c");
  function ae(B, J) {
    M(J) ? J.forEach((Ee) => B(Ee.bind(n))) : J && B(J.bind(n));
  }
  if (ae(Ea, u), ae(lo, g), ae(va, m), ae(Na, S), ae(_a, R), ae(ba, q), ae(Sa, O), ae(Da, N), ae(xa, $), ae(wa, F), ae(ao, K), ae(Oa, E), M(P))
    if (P.length) {
      const B = e.exposed || (e.exposed = {});
      P.forEach((J) => {
        Object.defineProperty(B, J, {
          get: () => n[J],
          set: (Ee) => n[J] = Ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === pe && (e.render = x), ne != null && (e.inheritAttrs = ne), z && (e.components = z), Z && (e.directives = Z), E && oi(e);
}
function ka(e, t, n = pe) {
  M(e) && (e = $r(e));
  for (const r in e) {
    const o = e[r];
    let s;
    re(o) ? "default" in o ? s = $n(
      o.from || r,
      o.default,
      !0
    ) : s = $n(o.from || r) : s = $n(o), ue(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ao(e, t, n) {
  ot(
    M(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, r) {
  let o = r.includes(".") ? Ei(n, r) : () => n[r];
  if (ie(e)) {
    const s = t[e];
    L(s) ? Rt(o, s) : h.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, s);
  } else if (L(e))
    Rt(o, e.bind(n));
  else if (re(e))
    if (M(e))
      e.forEach((s) => li(s, t, n, r));
    else {
      const s = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(s) ? Rt(o, s, e) : h.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && C(`Invalid watch option: "${r}"`, e);
}
function ai(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (f) => Xn(a, f, i, !0)
  ), Xn(a, t, i)), re(t) && s.set(t, a), a;
}
function Xn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Xn(e, s, n, !0), o && o.forEach(
    (i) => Xn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      h.NODE_ENV !== "production" && C(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ma[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ma = {
  data: Ro,
  props: Po,
  emits: Po,
  // objects
  methods: tn,
  computed: tn,
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
  components: tn,
  directives: tn,
  // watch
  watch: ja,
  // provide / inject
  provide: Ro,
  inject: $a
};
function Ro(e, t) {
  return t ? e ? function() {
    return le(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $a(e, t) {
  return tn($r(e), $r(t));
}
function $r(e) {
  if (M(e)) {
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
function tn(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Po(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Vo(e),
    Vo(t ?? {})
  ) : t;
}
function ja(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Ne(e[r], t[r]);
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
let Fa = 0;
function La(e, t) {
  return function(r, o = null) {
    L(r) || (r = le({}, r)), o != null && !re(o) && (h.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), o = null);
    const s = ci(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = s.app = {
      _uid: Fa++,
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
        h.NODE_ENV !== "production" && C(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? h.NODE_ENV !== "production" && C("Plugin has already been applied to target app.") : d && L(d.install) ? (i.add(d), d.install(f, ...u)) : L(d) ? (i.add(d), d(f, ...u)) : h.NODE_ENV !== "production" && C(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && C(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return h.NODE_ENV !== "production" && Ur(d, s.config), u ? (h.NODE_ENV !== "production" && s.components[d] && C(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return h.NODE_ENV !== "production" && ni(d), u ? (h.NODE_ENV !== "production" && s.directives[d] && C(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, g) {
        if (a)
          h.NODE_ENV !== "production" && C(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && C(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || rt(r, o);
          return m.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const S = Et(m);
            S.el = null, e(S, d, g);
          }), e(m, d, g), a = !0, f._container = d, d.__vue_app__ = f, h.NODE_ENV !== "production" && (f._instance = m.component, oa(f, Jo)), hr(m.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && C(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (ot(
          l,
          f._instance,
          16
        ), e(null, f._container), h.NODE_ENV !== "production" && (f._instance = null, sa(f)), delete f._container.__vue_app__) : h.NODE_ENV !== "production" && C("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return h.NODE_ENV !== "production" && d in s.provides && (G(s.provides, d) ? C(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : C(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = u, f;
      },
      runWithContext(d) {
        const u = Jt;
        Jt = f;
        try {
          return d();
        } finally {
          Jt = u;
        }
      }
    };
    return f;
  };
}
let Jt = null;
function Ha(e, t) {
  if (!_e)
    h.NODE_ENV !== "production" && C("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const r = _e.parent && _e.parent.provides;
    r === n && (n = _e.provides = Object.create(r)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const r = go();
  if (r || Jt) {
    let o = Jt ? Jt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && C(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && C("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ua(e, t, n, r = !1) {
  const o = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  h.NODE_ENV !== "production" && gi(t || {}, o, e), n ? e.props = r ? o : kl(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ba(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ka(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = W(o), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Ba(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let g = d[u];
        if (dr(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (a)
          if (G(s, g))
            m !== s[g] && (s[g] = m, f = !0);
          else {
            const S = Ve(g);
            o[S] = jr(
              a,
              l,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== s[g] && (s[g] = m, f = !0);
      }
    }
  } else {
    pi(e, t, o, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !G(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Te(u)) === u || !G(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = jr(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (s !== l)
      for (const u in s)
        (!t || !G(t, u)) && (delete s[u], f = !0);
  }
  f && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && gi(t || {}, o, e);
}
function pi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (nn(a))
        continue;
      const f = t[a];
      let d;
      o && G(o, d = Ve(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : dr(e.emitsOptions, a) || (!(a in r) || f !== r[a]) && (r[a] = f, i = !0);
    }
  if (s) {
    const a = W(n), f = l || ee;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = jr(
        o,
        a,
        u,
        f[u],
        e,
        !G(f, u)
      );
    }
  }
  return i;
}
function jr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = G(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && L(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          r = f[n];
        else {
          const d = In(o);
          r = f[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        r = a;
      o.ce && o.ce._setProp(n, r);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !l ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Te(n)) && (r = !0));
  }
  return r;
}
const Wa = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
  const r = n ? Wa : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const d = (u) => {
      a = !0;
      const [g, m] = hi(u, t, !0);
      le(i, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return re(e) && r.set(e, Kt), Kt;
  if (M(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !ie(s[d]) && C("props must be strings when using array syntax.", s[d]);
      const u = Ve(s[d]);
      ko(u) && (i[u] = ee);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !re(s) && C("invalid props options", s);
    for (const d in s) {
      const u = Ve(d);
      if (ko(u)) {
        const g = s[d], m = i[u] = M(g) || L(g) ? { type: g } : le({}, g), S = m.type;
        let R = !1, q = !0;
        if (M(S))
          for (let H = 0; H < S.length; ++H) {
            const F = S[H], A = L(F) && F.name;
            if (A === "Boolean") {
              R = !0;
              break;
            } else A === "String" && (q = !1);
          }
        else
          R = L(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = R, m[
          1
          /* shouldCastTrue */
        ] = q, (R || G(m, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return re(e) && r.set(e, f), f;
}
function ko(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (h.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ja(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const r = W(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Ve(i));
  for (const i in o) {
    let l = o[i];
    l != null && Ya(
      i,
      r[i],
      l,
      h.NODE_ENV !== "production" ? tt(r) : r,
      !s.includes(i)
    );
  }
}
function Ya(e, t, n, r, o) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    C('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let f = !1;
      const d = M(s) ? s : [s], u = [];
      for (let g = 0; g < d.length && !f; g++) {
        const { valid: m, expectedType: S } = Ga(t, d[g]);
        u.push(S || ""), f = m;
      }
      if (!f) {
        C(za(e, t, u));
        return;
      }
    }
    l && !l(t, r) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const qa = /* @__PURE__ */ ft(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ga(e, t) {
  let n;
  const r = Ja(t);
  if (r === "null")
    n = e === null;
  else if (qa(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = re(e) : r === "Array" ? n = M(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function za(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(sr).join(" | ")}`;
  const o = n[0], s = zr(t), i = Mo(t, o), l = Mo(t, s);
  return n.length === 1 && $o(o) && !Xa(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, $o(s) && (r += `with value ${l}.`), r;
}
function Mo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $o(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Xa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const uo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", fo = (e) => M(e) ? e.map(Le) : [Le(e)], Za = (e, t, n) => {
  if (t._n)
    return t;
  const r = da((...o) => (h.NODE_ENV !== "production" && _e && !(n === null && Oe) && !(n && n.root !== _e.root) && C(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fo(t(...o))), n);
  return r._c = !1, r;
}, mi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uo(o)) continue;
    const s = e[o];
    if (L(s))
      t[o] = Za(o, s, r);
    else if (s != null) {
      h.NODE_ENV !== "production" && C(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = fo(s);
      t[o] = () => i;
    }
  }
}, _i = (e, t) => {
  h.NODE_ENV !== "production" && !io(e.vnode) && C(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fo(t);
  e.slots.default = () => n;
}, Fr = (e, t, n) => {
  for (const r in t)
    (n || !uo(r)) && (e[r] = t[r]);
}, Qa = (e, t, n) => {
  const r = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && cn(r, "__", o, !0);
    const s = t._;
    s ? (Fr(r, t, n), n && cn(r, "_", s, !0)) : mi(t, r);
  } else t && _i(e, t);
}, ec = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = ee;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && nt ? (Fr(o, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? s = !1 : Fr(o, t, n) : (s = !t.$stable, mi(t, o)), i = t;
  } else t && (_i(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !uo(l) && i[l] == null && delete o[l];
};
let Xt, bt;
function $t(e, t) {
  e.appContext.config.performance && Zn() && bt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && ca(e, t, Zn() ? bt.now() : Date.now());
}
function jt(e, t) {
  if (e.appContext.config.performance && Zn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    bt.mark(r), bt.measure(
      `<${gr(e, e.type)}> ${t}`,
      n,
      r
    ), bt.clearMarks(n), bt.clearMarks(r);
  }
  h.NODE_ENV !== "production" && ua(e, t, Zn() ? bt.now() : Date.now());
}
function Zn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, bt = window.performance) : Xt = !1), Xt;
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
const Pe = gc;
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
    createText: l,
    createComment: a,
    setText: f,
    setElementText: d,
    parentNode: u,
    nextSibling: g,
    setScopeId: m = pe,
    insertStaticContent: S
  } = e, R = (c, p, _, v = null, b = null, y = null, T = void 0, I = null, D = h.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (v = Ye(c), Y(c, b, y, !0), c = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: V } = p;
    switch (w) {
      case Sn:
        q(c, p, _, v);
        break;
      case Me:
        H(c, p, _, v);
        break;
      case Fn:
        c == null ? F(p, _, v, T) : h.NODE_ENV !== "production" && A(c, p, _, T);
        break;
      case je:
        Z(
          c,
          p,
          _,
          v,
          b,
          y,
          T,
          I,
          D
        );
        break;
      default:
        V & 1 ? N(
          c,
          p,
          _,
          v,
          b,
          y,
          T,
          I,
          D
        ) : V & 6 ? fe(
          c,
          p,
          _,
          v,
          b,
          y,
          T,
          I,
          D
        ) : V & 64 || V & 128 ? w.process(
          c,
          p,
          _,
          v,
          b,
          y,
          T,
          I,
          D,
          Nt
        ) : h.NODE_ENV !== "production" && C("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && b ? sn(j, c && c.ref, y, p || c, !p) : j == null && c && c.ref != null && sn(c.ref, null, y, c, !0);
  }, q = (c, p, _, v) => {
    if (c == null)
      r(
        p.el = l(p.children),
        _,
        v
      );
    else {
      const b = p.el = c.el;
      p.children !== c.children && f(b, p.children);
    }
  }, H = (c, p, _, v) => {
    c == null ? r(
      p.el = a(p.children || ""),
      _,
      v
    ) : p.el = c.el;
  }, F = (c, p, _, v) => {
    [c.el, c.anchor] = S(
      c.children,
      p,
      _,
      v,
      c.el,
      c.anchor
    );
  }, A = (c, p, _, v) => {
    if (p.children !== c.children) {
      const b = g(c.anchor);
      x(c), [p.el, p.anchor] = S(
        p.children,
        _,
        b,
        v
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, K = ({ el: c, anchor: p }, _, v) => {
    let b;
    for (; c && c !== p; )
      b = g(c), r(c, _, v), c = b;
    r(p, _, v);
  }, x = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = g(c), o(c), c = _;
    o(p);
  }, N = (c, p, _, v, b, y, T, I, D) => {
    p.type === "svg" ? T = "svg" : p.type === "math" && (T = "mathml"), c == null ? $(
      p,
      _,
      v,
      b,
      y,
      T,
      I,
      D
    ) : P(
      c,
      p,
      b,
      y,
      T,
      I,
      D
    );
  }, $ = (c, p, _, v, b, y, T, I) => {
    let D, w;
    const { props: j, shapeFlag: V, transition: k, dirs: U } = c;
    if (D = c.el = i(
      c.type,
      y,
      j && j.is,
      j
    ), V & 8 ? d(D, c.children) : V & 16 && E(
      c.children,
      D,
      null,
      v,
      b,
      wr(c, y),
      T,
      I
    ), U && wt(c, null, v, "created"), O(D, c, c.scopeId, T, v), j) {
      for (const se in j)
        se !== "value" && !nn(se) && s(D, se, null, j[se], y, v);
      "value" in j && s(D, "value", null, j.value, y), (w = j.onVnodeBeforeMount) && Xe(w, v, c);
    }
    h.NODE_ENV !== "production" && (cn(D, "__vnode", c, !0), cn(D, "__vueParentComponent", v, !0)), U && wt(c, null, v, "beforeMount");
    const X = oc(b, k);
    X && k.beforeEnter(D), r(D, p, _), ((w = j && j.onVnodeMounted) || X || U) && Pe(() => {
      w && Xe(w, v, c), X && k.enter(D), U && wt(c, null, v, "mounted");
    }, b);
  }, O = (c, p, _, v, b) => {
    if (_ && m(c, _), v)
      for (let y = 0; y < v.length; y++)
        m(c, v[y]);
    if (b) {
      let y = b.subTree;
      if (h.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = po(y.children) || y), p === y || wi(y.type) && (y.ssContent === p || y.ssFallback === p)) {
        const T = b.vnode;
        O(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          b.parent
        );
      }
    }
  }, E = (c, p, _, v, b, y, T, I, D = 0) => {
    for (let w = D; w < c.length; w++) {
      const j = c[w] = I ? _t(c[w]) : Le(c[w]);
      R(
        null,
        j,
        p,
        _,
        v,
        b,
        y,
        T,
        I
      );
    }
  }, P = (c, p, _, v, b, y, T) => {
    const I = p.el = c.el;
    h.NODE_ENV !== "production" && (I.__vnode = p);
    let { patchFlag: D, dynamicChildren: w, dirs: j } = p;
    D |= c.patchFlag & 16;
    const V = c.props || ee, k = p.props || ee;
    let U;
    if (_ && Ot(_, !1), (U = k.onVnodeBeforeUpdate) && Xe(U, _, p, c), j && wt(p, c, _, "beforeUpdate"), _ && Ot(_, !0), h.NODE_ENV !== "production" && nt && (D = 0, T = !1, w = null), (V.innerHTML && k.innerHTML == null || V.textContent && k.textContent == null) && d(I, ""), w ? (ne(
      c.dynamicChildren,
      w,
      I,
      _,
      v,
      wr(p, b),
      y
    ), h.NODE_ENV !== "production" && jn(c, p)) : T || Ee(
      c,
      p,
      I,
      null,
      _,
      v,
      wr(p, b),
      y,
      !1
    ), D > 0) {
      if (D & 16)
        z(I, V, k, _, b);
      else if (D & 2 && V.class !== k.class && s(I, "class", null, k.class, b), D & 4 && s(I, "style", V.style, k.style, b), D & 8) {
        const X = p.dynamicProps;
        for (let se = 0; se < X.length; se++) {
          const te = X[se], Se = V[te], Ie = k[te];
          (Ie !== Se || te === "value") && s(I, te, Se, Ie, b, _);
        }
      }
      D & 1 && c.children !== p.children && d(I, p.children);
    } else !T && w == null && z(I, V, k, _, b);
    ((U = k.onVnodeUpdated) || j) && Pe(() => {
      U && Xe(U, _, p, c), j && wt(p, c, _, "updated");
    }, v);
  }, ne = (c, p, _, v, b, y, T) => {
    for (let I = 0; I < p.length; I++) {
      const D = c[I], w = p[I], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(D, w) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      R(
        D,
        w,
        j,
        null,
        v,
        b,
        y,
        T,
        !0
      );
    }
  }, z = (c, p, _, v, b) => {
    if (p !== _) {
      if (p !== ee)
        for (const y in p)
          !nn(y) && !(y in _) && s(
            c,
            y,
            p[y],
            null,
            b,
            v
          );
      for (const y in _) {
        if (nn(y)) continue;
        const T = _[y], I = p[y];
        T !== I && y !== "value" && s(c, y, I, T, b, v);
      }
      "value" in _ && s(c, "value", p.value, _.value, b);
    }
  }, Z = (c, p, _, v, b, y, T, I, D) => {
    const w = p.el = c ? c.el : l(""), j = p.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: k, slotScopeIds: U } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || V & 2048) && (V = 0, D = !1, k = null), U && (I = I ? I.concat(U) : U), c == null ? (r(w, _, v), r(j, _, v), E(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      j,
      b,
      y,
      T,
      I,
      D
    )) : V > 0 && V & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (ne(
      c.dynamicChildren,
      k,
      _,
      b,
      y,
      T,
      I
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
    )) : Ee(
      c,
      p,
      _,
      j,
      b,
      y,
      T,
      I,
      D
    );
  }, fe = (c, p, _, v, b, y, T, I, D) => {
    p.slotScopeIds = I, c == null ? p.shapeFlag & 512 ? b.ctx.activate(
      p,
      _,
      v,
      T,
      D
    ) : he(
      p,
      _,
      v,
      b,
      y,
      T,
      D
    ) : ae(c, p, D);
  }, he = (c, p, _, v, b, y, T) => {
    const I = c.component = Oc(
      c,
      v,
      b
    );
    if (h.NODE_ENV !== "production" && I.type.__hmrId && ea(I), h.NODE_ENV !== "production" && (Pn(c), $t(I, "mount")), io(c) && (I.ctx.renderer = Nt), h.NODE_ENV !== "production" && $t(I, "init"), Dc(I, !1, T), h.NODE_ENV !== "production" && jt(I, "init"), h.NODE_ENV !== "production" && nt && (c.el = null), I.asyncDep) {
      if (b && b.registerDep(I, B, T), !c.el) {
        const D = I.subTree = rt(Me);
        H(null, D, p, _), c.placeholder = D.el;
      }
    } else
      B(
        I,
        c,
        p,
        _,
        b,
        y,
        T
      );
    h.NODE_ENV !== "production" && (kn(), jt(I, "mount"));
  }, ae = (c, p, _) => {
    const v = p.component = c.component;
    if (pc(c, p, _))
      if (v.asyncDep && !v.asyncResolved) {
        h.NODE_ENV !== "production" && Pn(p), J(v, p, _), h.NODE_ENV !== "production" && kn();
        return;
      } else
        v.next = p, v.update();
    else
      p.el = c.el, v.vnode = p;
  }, B = (c, p, _, v, b, y, T) => {
    const I = () => {
      if (c.isMounted) {
        let { next: V, bu: k, u: U, parent: X, vnode: se } = c;
        {
          const Ge = bi(c);
          if (Ge) {
            V && (V.el = se.el, J(c, V, T)), Ge.asyncDep.then(() => {
              c.isUnmounted || I();
            });
            return;
          }
        }
        let te = V, Se;
        h.NODE_ENV !== "production" && Pn(V || c.vnode), Ot(c, !1), V ? (V.el = se.el, J(c, V, T)) : V = se, k && Ft(k), (Se = V.props && V.props.onVnodeBeforeUpdate) && Xe(Se, X, V, se), Ot(c, !0), h.NODE_ENV !== "production" && $t(c, "render");
        const Ie = Fo(c);
        h.NODE_ENV !== "production" && jt(c, "render");
        const qe = c.subTree;
        c.subTree = Ie, h.NODE_ENV !== "production" && $t(c, "patch"), R(
          qe,
          Ie,
          // parent may have changed if it's in a teleport
          u(qe.el),
          // anchor may have changed if it's in a fragment
          Ye(qe),
          c,
          b,
          y
        ), h.NODE_ENV !== "production" && jt(c, "patch"), V.el = Ie.el, te === null && hc(c, Ie.el), U && Pe(U, b), (Se = V.props && V.props.onVnodeUpdated) && Pe(
          () => Xe(Se, X, V, se),
          b
        ), h.NODE_ENV !== "production" && Qs(c), h.NODE_ENV !== "production" && kn();
      } else {
        let V;
        const { el: k, props: U } = p, { bm: X, m: se, parent: te, root: Se, type: Ie } = c, qe = ln(p);
        Ot(c, !1), X && Ft(X), !qe && (V = U && U.onVnodeBeforeMount) && Xe(V, te, p), Ot(c, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie), h.NODE_ENV !== "production" && $t(c, "render");
          const Ge = c.subTree = Fo(c);
          h.NODE_ENV !== "production" && jt(c, "render"), h.NODE_ENV !== "production" && $t(c, "patch"), R(
            null,
            Ge,
            _,
            v,
            c,
            b,
            y
          ), h.NODE_ENV !== "production" && jt(c, "patch"), p.el = Ge.el;
        }
        if (se && Pe(se, b), !qe && (V = U && U.onVnodeMounted)) {
          const Ge = p;
          Pe(
            () => Xe(V, te, Ge),
            b
          );
        }
        (p.shapeFlag & 256 || te && ln(te.vnode) && te.vnode.shapeFlag & 256) && c.a && Pe(c.a, b), c.isMounted = !0, h.NODE_ENV !== "production" && ia(c), p = _ = v = null;
      }
    };
    c.scope.on();
    const D = c.effect = new Is(I);
    c.scope.off();
    const w = c.update = D.run.bind(D), j = c.job = D.runIfDirty.bind(D);
    j.i = c, j.id = c.uid, D.scheduler = () => ur(j), Ot(c, !0), h.NODE_ENV !== "production" && (D.onTrack = c.rtc ? (V) => Ft(c.rtc, V) : void 0, D.onTrigger = c.rtg ? (V) => Ft(c.rtg, V) : void 0), w();
  }, J = (c, p, _) => {
    p.component = c;
    const v = c.vnode.props;
    c.vnode = p, c.next = null, Ka(c, p.props, v, _), ec(c, p.children, _), Ke(), Co(c), We();
  }, Ee = (c, p, _, v, b, y, T, I, D = !1) => {
    const w = c && c.children, j = c ? c.shapeFlag : 0, V = p.children, { patchFlag: k, shapeFlag: U } = p;
    if (k > 0) {
      if (k & 128) {
        it(
          w,
          V,
          _,
          v,
          b,
          y,
          T,
          I,
          D
        );
        return;
      } else if (k & 256) {
        st(
          w,
          V,
          _,
          v,
          b,
          y,
          T,
          I,
          D
        );
        return;
      }
    }
    U & 8 ? (j & 16 && De(w, b, y), V !== w && d(_, V)) : j & 16 ? U & 16 ? it(
      w,
      V,
      _,
      v,
      b,
      y,
      T,
      I,
      D
    ) : De(w, b, y, !0) : (j & 8 && d(_, ""), U & 16 && E(
      V,
      _,
      v,
      b,
      y,
      T,
      I,
      D
    ));
  }, st = (c, p, _, v, b, y, T, I, D) => {
    c = c || Kt, p = p || Kt;
    const w = c.length, j = p.length, V = Math.min(w, j);
    let k;
    for (k = 0; k < V; k++) {
      const U = p[k] = D ? _t(p[k]) : Le(p[k]);
      R(
        c[k],
        U,
        _,
        null,
        b,
        y,
        T,
        I,
        D
      );
    }
    w > j ? De(
      c,
      b,
      y,
      !0,
      !1,
      V
    ) : E(
      p,
      _,
      v,
      b,
      y,
      T,
      I,
      D,
      V
    );
  }, it = (c, p, _, v, b, y, T, I, D) => {
    let w = 0;
    const j = p.length;
    let V = c.length - 1, k = j - 1;
    for (; w <= V && w <= k; ) {
      const U = c[w], X = p[w] = D ? _t(p[w]) : Le(p[w]);
      if (Zt(U, X))
        R(
          U,
          X,
          _,
          null,
          b,
          y,
          T,
          I,
          D
        );
      else
        break;
      w++;
    }
    for (; w <= V && w <= k; ) {
      const U = c[V], X = p[k] = D ? _t(p[k]) : Le(p[k]);
      if (Zt(U, X))
        R(
          U,
          X,
          _,
          null,
          b,
          y,
          T,
          I,
          D
        );
      else
        break;
      V--, k--;
    }
    if (w > V) {
      if (w <= k) {
        const U = k + 1, X = U < j ? p[U].el : v;
        for (; w <= k; )
          R(
            null,
            p[w] = D ? _t(p[w]) : Le(p[w]),
            _,
            X,
            b,
            y,
            T,
            I,
            D
          ), w++;
      }
    } else if (w > k)
      for (; w <= V; )
        Y(c[w], b, y, !0), w++;
    else {
      const U = w, X = w, se = /* @__PURE__ */ new Map();
      for (w = X; w <= k; w++) {
        const ve = p[w] = D ? _t(p[w]) : Le(p[w]);
        ve.key != null && (h.NODE_ENV !== "production" && se.has(ve.key) && C(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), se.set(ve.key, w));
      }
      let te, Se = 0;
      const Ie = k - X + 1;
      let qe = !1, Ge = 0;
      const Gt = new Array(Ie);
      for (w = 0; w < Ie; w++) Gt[w] = 0;
      for (w = U; w <= V; w++) {
        const ve = c[w];
        if (Se >= Ie) {
          Y(ve, b, y, !0);
          continue;
        }
        let ze;
        if (ve.key != null)
          ze = se.get(ve.key);
        else
          for (te = X; te <= k; te++)
            if (Gt[te - X] === 0 && Zt(ve, p[te])) {
              ze = te;
              break;
            }
        ze === void 0 ? Y(ve, b, y, !0) : (Gt[ze - X] = w + 1, ze >= Ge ? Ge = ze : qe = !0, R(
          ve,
          p[ze],
          _,
          null,
          b,
          y,
          T,
          I,
          D
        ), Se++);
      }
      const vo = qe ? sc(Gt) : Kt;
      for (te = vo.length - 1, w = Ie - 1; w >= 0; w--) {
        const ve = X + w, ze = p[ve], No = p[ve + 1], wo = ve + 1 < j ? (
          // #13559, fallback to el placeholder for unresolved async component
          No.el || No.placeholder
        ) : v;
        Gt[w] === 0 ? R(
          null,
          ze,
          _,
          wo,
          b,
          y,
          T,
          I,
          D
        ) : qe && (te < 0 || w !== vo[te] ? pt(ze, _, wo, 2) : te--);
      }
    }
  }, pt = (c, p, _, v, b = null) => {
    const { el: y, type: T, transition: I, children: D, shapeFlag: w } = c;
    if (w & 6) {
      pt(c.component.subTree, p, _, v);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, _, v);
      return;
    }
    if (w & 64) {
      T.move(c, p, _, Nt);
      return;
    }
    if (T === je) {
      r(y, p, _);
      for (let V = 0; V < D.length; V++)
        pt(D[V], p, _, v);
      r(c.anchor, p, _);
      return;
    }
    if (T === Fn) {
      K(c, p, _);
      return;
    }
    if (v !== 2 && w & 1 && I)
      if (v === 0)
        I.beforeEnter(y), r(y, p, _), Pe(() => I.enter(y), b);
      else {
        const { leave: V, delayLeave: k, afterLeave: U } = I, X = () => {
          c.ctx.isUnmounted ? o(y) : r(y, p, _);
        }, se = () => {
          V(y, () => {
            X(), U && U();
          });
        };
        k ? k(y, X, se) : se();
      }
    else
      r(y, p, _);
  }, Y = (c, p, _, v = !1, b = !1) => {
    const {
      type: y,
      props: T,
      ref: I,
      children: D,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: V,
      dirs: k,
      cacheIndex: U
    } = c;
    if (V === -2 && (b = !1), I != null && (Ke(), sn(I, null, _, c, !0), We()), U != null && (p.renderCache[U] = void 0), j & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const X = j & 1 && k, se = !ln(c);
    let te;
    if (se && (te = T && T.onVnodeBeforeUnmount) && Xe(te, p, c), j & 6)
      Ae(c.component, _, v);
    else {
      if (j & 128) {
        c.suspense.unmount(_, v);
        return;
      }
      X && wt(c, null, p, "beforeUnmount"), j & 64 ? c.type.remove(
        c,
        p,
        _,
        Nt,
        v
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== je || V > 0 && V & 64) ? De(
        w,
        p,
        _,
        !1,
        !0
      ) : (y === je && V & 384 || !b && j & 16) && De(D, p, _), v && ce(c);
    }
    (se && (te = T && T.onVnodeUnmounted) || X) && Pe(() => {
      te && Xe(te, p, c), X && wt(c, null, p, "unmounted");
    }, _);
  }, ce = (c) => {
    const { type: p, el: _, anchor: v, transition: b } = c;
    if (p === je) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((T) => {
        T.type === Me ? o(T.el) : ce(T);
      }) : be(_, v);
      return;
    }
    if (p === Fn) {
      x(c);
      return;
    }
    const y = () => {
      o(_), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: T, delayLeave: I } = b, D = () => T(_, y);
      I ? I(c.el, y, D) : D();
    } else
      y();
  }, be = (c, p) => {
    let _;
    for (; c !== p; )
      _ = g(c), o(c), c = _;
    o(p);
  }, Ae = (c, p, _) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && ta(c);
    const {
      bum: v,
      scope: b,
      job: y,
      subTree: T,
      um: I,
      m: D,
      a: w,
      parent: j,
      slots: { __: V }
    } = c;
    jo(D), jo(w), v && Ft(v), j && M(V) && V.forEach((k) => {
      j.renderCache[k] = void 0;
    }), b.stop(), y && (y.flags |= 8, Y(T, c, p, _)), I && Pe(I, p), Pe(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && aa(c);
  }, De = (c, p, _, v = !1, b = !1, y = 0) => {
    for (let T = y; T < c.length; T++)
      Y(c[T], p, _, v, b);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), _ = p && p[ha];
    return _ ? g(_) : p;
  };
  let kt = !1;
  const Cn = (c, p, _) => {
    c == null ? p._vnode && Y(p._vnode, null, null, !0) : R(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, kt || (kt = !0, Co(), Gs(), kt = !1);
  }, Nt = {
    p: R,
    um: Y,
    m: pt,
    r: ce,
    mt: he,
    mc: E,
    pc: Ee,
    pbc: ne,
    n: Ye,
    o: e
  };
  return {
    render: Cn,
    hydrate: void 0,
    createApp: La(Cn)
  };
}
function wr({ type: e, props: t }, n) {
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
  if (M(r) && M(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = _t(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && jn(i, l)), l.type === Sn && (l.el = i.el), l.type === Me && !l.el && (l.el = i.el), h.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function sc(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const f = e[r];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < f ? s = l + 1 : i = l;
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
const ic = Symbol.for("v-scx"), lc = () => {
  {
    const e = $n(ic);
    return e || h.NODE_ENV !== "production" && C(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rt(e, t, n) {
  return h.NODE_ENV !== "production" && !L(t) && C(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yi(e, t, n);
}
function yi(e, t, n = ee) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && C(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && C(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && C(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = le({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = C);
  const a = t && r || !t && s !== "post";
  let f;
  if (mn) {
    if (s === "sync") {
      const m = lc();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = pe, m.resume = pe, m.pause = pe, m;
    }
  }
  const d = _e;
  l.call = (m, S, R) => ot(m, d, S, R);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    Pe(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, S) => {
    S ? m() : ur(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const g = Jl(e, t, l);
  return mn && (f ? f.push(g) : a && g()), g;
}
function ac(e, t, n) {
  const r = this.proxy, o = ie(e) ? e.includes(".") ? Ei(r, e) : () => r[e] : e.bind(r, r);
  let s;
  L(t) ? s = t : (s = t.handler, n = t);
  const i = In(this), l = yi(o, s.bind(r), n);
  return i(), l;
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
const cc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Te(t)}Modifiers`];
function uc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ee;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Dt(Ve(t)) in u)) && C(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Ve(t))}" prop.`
        );
      else {
        const g = d[t];
        L(g) && (g(...n) || C(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && cc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => ie(d) ? d.trim() : d)), i.number && (o = n.map(Tr))), h.NODE_ENV !== "production" && fa(e, t, o), h.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[Dt(d)] && C(
      `Event "${d}" is emitted in component ${gr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Te(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = Dt(t)] || // also try camelCase event handler (#2249)
  r[l = Dt(Ve(t))];
  !a && s && (a = r[l = Dt(Te(t))]), a && ot(
    a,
    e,
    6,
    o
  );
  const f = r[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, ot(
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
  let i = {}, l = !1;
  if (!L(e)) {
    const a = (f) => {
      const d = vi(f, t, !0);
      d && (l = !0, le(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (re(e) && r.set(e, null), null) : (M(s) ? s.forEach((a) => i[a] = null) : le(i, s), re(e) && r.set(e, i), i);
}
function dr(e, t) {
  return !e || !Nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Te(t)) || G(e, t));
}
let Lr = !1;
function Qn() {
  Lr = !0;
}
function Fo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: a,
    render: f,
    renderCache: d,
    props: u,
    data: g,
    setupState: m,
    ctx: S,
    inheritAttrs: R
  } = e, q = zn(e);
  let H, F;
  h.NODE_ENV !== "production" && (Lr = !1);
  try {
    if (n.shapeFlag & 4) {
      const x = o || r, N = h.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(x, {
        get($, O, E) {
          return C(
            `Property '${String(
              O
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get($, O, E);
        }
      }) : x;
      H = Le(
        f.call(
          N,
          x,
          d,
          h.NODE_ENV !== "production" ? tt(u) : u,
          m,
          g,
          S
        )
      ), F = l;
    } else {
      const x = t;
      h.NODE_ENV !== "production" && l === u && Qn(), H = Le(
        x.length > 1 ? x(
          h.NODE_ENV !== "production" ? tt(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Qn(), tt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : x(
          h.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), F = t.props ? l : fc(l);
    }
  } catch (x) {
    an.length = 0, xn(x, e, 1), H = rt(Me);
  }
  let A = H, K;
  if (h.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([A, K] = Ni(H)), F && R !== !1) {
    const x = Object.keys(F), { shapeFlag: N } = A;
    if (x.length) {
      if (N & 7)
        s && x.some(Un) && (F = dc(
          F,
          s
        )), A = Et(A, F, !1, !0);
      else if (h.NODE_ENV !== "production" && !Lr && A.type !== Me) {
        const $ = Object.keys(l), O = [], E = [];
        for (let P = 0, ne = $.length; P < ne; P++) {
          const z = $[P];
          Nn(z) ? Un(z) || O.push(z[2].toLowerCase() + z.slice(3)) : E.push(z);
        }
        E.length && C(
          `Extraneous non-props attributes (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), O.length && C(
          `Extraneous non-emits event listeners (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Lo(A) && C(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), A = Et(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Lo(A) && C(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), so(A, n.transition)), h.NODE_ENV !== "production" && K ? K(A) : H = A, zn(q), H;
}
const Ni = (e) => {
  const t = e.children, n = e.dynamicChildren, r = po(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Ni(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Le(r), i];
};
function po(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (pr(o)) {
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
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, f = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || l) && nt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Ho(r, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const g = d[u];
        if (i[g] !== r[g] && !dr(f, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Ho(r, i, f) : !0 : !!i;
  return !1;
}
function Ho(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !dr(n, s))
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
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : qs(e);
}
const je = Symbol.for("v-fgt"), Sn = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), an = [];
let ke = null;
function Re(e = !1) {
  an.push(ke = e ? null : []);
}
function mc() {
  an.pop(), ke = an[an.length - 1] || null;
}
let gn = 1;
function Uo(e, t = !1) {
  gn += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = gn > 0 ? ke || Kt : null, mc(), gn > 0 && ke && ke.push(e), e;
}
function $e(e, t, n, r, o, s) {
  return Oi(
    mt(
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
function pr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Mn.get(t.type);
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
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ue(e) || L(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function mt(e, t = null, n = null, r = 0, o = null, s = e === je ? 0 : 1, i = !1, l = !1) {
  const a = {
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
    ctx: Oe
  };
  return l ? (ho(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && C("VNode created with invalid key (NaN). VNode type:", a.type), gn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const rt = h.NODE_ENV !== "production" ? bc : Di;
function Di(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Ia) && (h.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = Me), pr(e)) {
    const l = Et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ho(l, n), gn > 0 && !s && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (Vi(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = un(l)), re(a) && (pn(a) && !M(a) && (a = le({}, a)), t.style = ir(a));
  }
  const i = ie(e) ? 1 : wi(e) ? 128 : ga(e) ? 64 : re(e) ? 4 : L(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && pn(e) && (e = W(e), C(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), mt(
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
  return e ? pn(e) || di(e) ? le({}, e) : e : null;
}
function Et(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, f = t ? vc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && xi(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? M(s) ? s.concat(Ln(t)) : [s, Ln(t)] : Ln(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && M(l) ? l.map(Si) : l,
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
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Et(e.ssContent),
    ssFallback: e.ssFallback && Et(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && so(
    d,
    a.clone(d)
  ), d;
}
function Si(e) {
  const t = Et(e);
  return M(e.children) && (t.children = e.children.map(Si)), t;
}
function Ec(e = " ", t = 0) {
  return rt(Sn, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (Re(), _c(Me, null, e)) : rt(Me, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean" ? rt(Me) : M(e) ? rt(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pr(e) ? _t(e) : rt(Sn, null, String(e));
}
function _t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function ho(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ho(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !di(t) ? t._ctx = Oe : o === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
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
        t.style = ir([t.style, r.style]);
      else if (Nn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(M(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
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
    scope: new hl(
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
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
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
  return h.NODE_ENV !== "production" ? s.ctx = Ta(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = uc.bind(null, s), e.ce && e.ce(s), s;
}
let _e = null;
const go = () => _e || Oe;
let er, Hr;
{
  const e = wn(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  er = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), Hr = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const In = (e) => {
  const t = _e;
  return er(e), e.scope.on(), () => {
    e.scope.off(), er(t);
  };
}, Bo = () => {
  _e && _e.scope.off(), er(null);
}, xc = /* @__PURE__ */ ft("slot,component");
function Ur(e, { isNativeTag: t }) {
  (xc(e) || t(e)) && C(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function Dc(e, t = !1, n = !1) {
  t && Hr(t);
  const { props: r, children: o } = e.vnode, s = Ii(e);
  Ua(e, r, s, t), Qa(e, o, n || t);
  const i = s ? Sc(e, t) : void 0;
  return t && Hr(!1), i;
}
function Sc(e, t) {
  var n;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && Ur(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Ur(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        ni(s[i]);
    }
    r.compilerOptions && Ic() && C(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), h.NODE_ENV !== "production" && Va(e);
  const { setup: o } = r;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Tc(e) : null, i = In(e), l = qt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), a = Gr(l);
    if (We(), i(), (a || e.sp) && !ln(e) && oi(e), a) {
      if (l.then(Bo, Bo), t)
        return l.then((f) => {
          Ko(e, f, t);
        }).catch((f) => {
          xn(f, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        C(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ko(e, l, t);
  } else
    Ci(e, t);
}
function Ko(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) ? (h.NODE_ENV !== "production" && pr(t) && C(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ks(t), h.NODE_ENV !== "production" && Aa(e)) : h.NODE_ENV !== "production" && t !== void 0 && C(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ci(e, n);
}
const Ic = () => !0;
function Ci(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || pe);
  {
    const o = In(e);
    Ke();
    try {
      Pa(e);
    } finally {
      We(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === pe && !t && (r.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : C("Component is missing template or render function: ", r));
}
const Wo = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Qn(), de(e, "get", ""), e[t];
  },
  set() {
    return C("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return C("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return de(e, "get", ""), e[t];
  }
};
function Cc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return de(e, "get", "$slots"), t[n];
    }
  });
}
function Tc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && C("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (M(n) ? r = "array" : ue(n) && (r = "ref")), r !== "object" && C(
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
function hr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(Ml(e.exposed)), {
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
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gr(e, t, n = !1) {
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
  return L(e) && "__vccOpts" in e;
}
const mo = (e, t) => {
  const n = Kl(e, t, mn);
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
      if (!re(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ue(u)) {
        Ke();
        const g = u.value;
        return We(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (Tt(u))
          return [
            "div",
            {},
            ["span", e, xe(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Je(u) ? " (readonly)" : ""}`
          ];
        if (Je(u))
          return [
            "div",
            {},
            ["span", e, xe(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
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
    u.type.props && u.props && g.push(i("props", W(u.props))), u.setupState !== ee && g.push(i("setup", u.setupState)), u.data !== ee && g.push(i("data", W(u.data)));
    const m = a(u, "computed");
    m && g.push(i("computed", m));
    const S = a(u, "inject");
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
      ["object", { object: u }]
    ]), g;
  }
  function i(u, g) {
    return g = le({}, g), Object.keys(g).length ? [
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
        ...Object.keys(g).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          l(g[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : re(u) ? ["object", { object: g ? W(u) : u }] : ["span", n, String(u)];
  }
  function a(u, g) {
    const m = u.type;
    if (L(m))
      return;
    const S = {};
    for (const R in u.ctx)
      f(m, R, g) && (S[R] = u.ctx[R]);
    return S;
  }
  function f(u, g, m) {
    const S = u[m];
    if (M(S) && S.includes(g) || re(S) && g in S || u.extends && f(u.extends, g, m) || u.mixins && u.mixins.some((R) => f(R, g, m)))
      return !0;
  }
  function d(u) {
    return xe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Jo = "3.5.18", Fe = h.NODE_ENV !== "production" ? C : pe;
var ye = {};
let Br;
const Yo = typeof window < "u" && window.trustedTypes;
if (Yo)
  try {
    Br = /* @__PURE__ */ Yo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ye.NODE_ENV !== "production" && Fe(`Error creating trusted types policy: ${e}`);
  }
const Ai = Br ? (e) => Br.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, qo = at && /* @__PURE__ */ at.createElement("template"), Mc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? at.createElementNS(Pc, e) : t === "mathml" ? at.createElementNS(kc, e) : n ? at.createElement(e, { is: n }) : at.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => at.createTextNode(e),
  createComment: (e) => at.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => at.querySelector(e),
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
      const l = qo.content;
      if (r === "svg" || r === "mathml") {
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
}, $c = Symbol("_vtc");
function jc(e, t, n) {
  const r = e[$c];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Go = Symbol("_vod"), Fc = Symbol("_vsh"), Lc = Symbol(ye.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hc = /(^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const r = e.style, o = ie(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (ie(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Hn(r, l, "");
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
  if (M(n))
    n.forEach((r) => Hn(e, t, r));
  else if (n == null && (n = ""), ye.NODE_ENV !== "production" && Bc.test(n) && Fe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Kc(e, t);
    zo.test(n) ? e.setProperty(
      Te(r),
      n.replace(zo, ""),
      "important"
    ) : e[r] = n;
  }
}
const Xo = ["Webkit", "Moz", "ms"], Or = {};
function Kc(e, t) {
  const n = Or[t];
  if (n)
    return n;
  let r = Ve(t);
  if (r !== "filter" && r in e)
    return Or[t] = r;
  r = sr(r);
  for (let o = 0; o < Xo.length; o++) {
    const s = Xo[o] + r;
    if (s in e)
      return Or[t] = s;
  }
  return t;
}
const Zo = "http://www.w3.org/1999/xlink";
function Qo(e, t, n, r, o, s = pl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zo, t.slice(6, t.length)) : e.setAttributeNS(Zo, t, n) : n == null || s && !Os(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : vt(n) ? String(n) : n
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
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
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
    l === "boolean" ? n = Os(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ye.NODE_ENV !== "production" && !i && Fe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Ht(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Wc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ts = Symbol("_vei");
function Jc(e, t, n, r, o = null) {
  const s = e[ts] || (e[ts] = {}), i = s[t];
  if (r && i)
    i.value = ye.NODE_ENV !== "production" ? rs(r, t) : r;
  else {
    const [l, a] = Yc(t);
    if (r) {
      const f = s[t] = zc(
        ye.NODE_ENV !== "production" ? rs(r, t) : r,
        o
      );
      Ht(e, l, f, a);
    } else i && (Wc(e, l, i, a), s[t] = void 0);
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
  return [e[2] === ":" ? e.slice(3) : Te(e.slice(2)), t];
}
let xr = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Gc = () => xr || (qc.then(() => xr = 0), xr = Date.now());
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
  return L(e) || M(e) ? e : (Fe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), pe);
}
function Xc(e, t) {
  if (M(t)) {
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
  t === "class" ? jc(e, r, i) : t === "style" ? Uc(e, n, r) : Nn(t) ? Un(t) || Jc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, i)) ? (es(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qo(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(r)) ? es(e, Ve(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qo(e, t, r, i));
};
function Qc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && os(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return os(t) && ie(n) ? !1 : t in e;
}
const ss = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function eu(e, t, n) {
  const r = /* @__PURE__ */ ri(e, t);
  rr(r) && le(r, t);
  class o extends _o {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const tu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _o extends tu {
  constructor(t, n = {}, r = us) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== us ? this._root = this.shadowRoot : (ye.NODE_ENV !== "production" && this.shadowRoot && Fe(
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
    this._connected = !1, qn(() => {
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
      let l;
      if (s && !M(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = Oo(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ve(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : ye.NODE_ENV !== "production" && i && Fe(
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
        G(this, r) ? ye.NODE_ENV !== "production" && Fe(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ge(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = M(n) ? n : Object.keys(n || {});
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
    let r = n ? this.getAttribute(t) : ss;
    const o = Ve(t);
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
      s && s.disconnect(), n === !0 ? this.setAttribute(Te(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Te(t), n + "") : n || this.removeAttribute(Te(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), cu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = rt(this._def, le(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, ye.NODE_ENV !== "production" && (r.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const o = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            rr(i[0]) ? le({ detail: i }, i[0]) : { detail: i }
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
      const o = t[r], s = o.getAttribute("name") || "default", i = this._slots[s], l = o.parentNode;
      if (i)
        for (const a of i) {
          if (n && a.nodeType === 1) {
            const f = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(f, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(f, "");
          }
          l.insertBefore(a, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
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
const is = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return M(t) ? (n) => Ft(t, n) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function ls(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dr = Symbol("_assign"), ru = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Dr] = is(o);
    const s = r || o.props && o.props.type === "number";
    Ht(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Tr(l)), e[Dr](l);
    }), n && Ht(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ht(e, "compositionstart", nu), Ht(e, "compositionend", ls), Ht(e, "change", ls));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[Dr] = is(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Tr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === a) || (e.value = a));
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
}, as = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = su[t[i]];
      if (l && l(o, t)) return;
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
}, lu = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Te(o.key);
    if (t.some(
      (i) => i === s || iu[i] === s
    ))
      return e(o);
  });
}, au = /* @__PURE__ */ le({ patchProp: Zc }, Mc);
let cs;
function Ri() {
  return cs || (cs = nc(au));
}
const cu = (...e) => {
  Ri().render(...e);
}, us = (...e) => {
  const t = Ri().createApp(...e);
  ye.NODE_ENV !== "production" && (fu(t), du(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = pu(r);
    if (!o) return;
    const s = t._component;
    !L(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
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
    value: (t) => cl(t) || ul(t) || fl(t),
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
  if (ie(e)) {
    const t = document.querySelector(e);
    return ye.NODE_ENV !== "production" && !t && Fe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ye.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Fe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var hu = {};
function gu() {
  Rc();
}
hu.NODE_ENV !== "production" && gu();
var Pi = "vercel.ai.error", mu = Symbol.for(Pi), ki, _u = class Mi extends Error {
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
    super(n), this[ki] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Mi.hasMarker(t, Pi);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
ki = mu;
var Yt = _u;
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
var Ki = "AI_TypeValidationError", Wi = `vercel.ai.error.${Ki}`, vu = Symbol.for(Wi), Ji, Nu = class Kr extends Yt {
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
    return Kr.isInstance(n) && n.value === t ? n : new Kr({ value: t, cause: n });
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
  function r(l, a, f) {
    f == null && a !== null && typeof a == "object" && (f = a, a = void 0), e && Buffer.isBuffer(l) && (l = l.toString()), l && l.charCodeAt(0) === 65279 && (l = l.slice(1));
    const d = JSON.parse(l, a);
    if (d === null || typeof d != "object")
      return d;
    const u = f && f.protoAction || "error", g = f && f.constructorAction || "error";
    if (u === "ignore" && g === "ignore")
      return d;
    if (u !== "ignore" && g !== "ignore") {
      if (t.test(l) === !1 && n.test(l) === !1)
        return d;
    } else if (u !== "ignore" && g === "ignore") {
      if (t.test(l) === !1)
        return d;
    } else if (n.test(l) === !1)
      return d;
    return o(d, { protoAction: u, constructorAction: g, safe: f && f.safe });
  }
  function o(l, { protoAction: a = "error", constructorAction: f = "error", safe: d } = {}) {
    let u = [l];
    for (; u.length; ) {
      const g = u;
      u = [];
      for (const m of g) {
        if (a !== "ignore" && Object.prototype.hasOwnProperty.call(m, "__proto__")) {
          if (d === !0)
            return null;
          if (a === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete m.__proto__;
        }
        if (f !== "ignore" && Object.prototype.hasOwnProperty.call(m, "constructor") && Object.prototype.hasOwnProperty.call(m.constructor, "prototype")) {
          if (d === !0)
            return null;
          if (f === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete m.constructor;
        }
        for (const S in m) {
          const R = m[S];
          R && typeof R == "object" && u.push(R);
        }
      }
    }
    return l;
  }
  function s(l, a, f) {
    const d = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(l, a, f);
    } finally {
      Error.stackTraceLimit = d;
    }
  }
  function i(l, a) {
    const f = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(l, a, { safe: !0 });
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
}, bo = Iu(), Wr = Symbol.for("vercel.ai.validator");
function Cu(e) {
  return { [Wr]: !0, validate: e };
}
function Tu(e) {
  return typeof e == "object" && e !== null && Wr in e && e[Wr] === !0 && "validate" in e;
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
var _n = {
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
  _n,
  bn,
  yn,
  En,
  vn
];
_n.code + "", bn.code + "", yn.code + "", En.code + "", vn.code + "";
_n.name + "", _n.code, bn.name + "", bn.code, yn.name + "", yn.code, En.name + "", En.code, vn.name + "", vn.code;
Pu.map((e) => e.code);
function ku({
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
  function o(a, f, d) {
    switch (a) {
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
  function s(a, f) {
    switch (a) {
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
  function i(a, f) {
    switch (a) {
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
  for (let a = 0; a < e.length; a++) {
    const f = e[a];
    switch (t[t.length - 1]) {
      case "ROOT":
        o(f, a, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (f) {
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
        o(f, a, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(f, a);
        break;
      }
      case "INSIDE_STRING": {
        switch (f) {
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
        switch (f) {
          case "]": {
            n = a, t.pop();
            break;
          }
          default: {
            n = a, o(f, a, "INSIDE_ARRAY_AFTER_VALUE");
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
        o(f, a, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = a;
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
            n = a;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(f, a), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(f, a);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(f, a);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(f, a);
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
        const u = e.substring(r, a + 1);
        !"false".startsWith(u) && !"true".startsWith(u) && !"null".startsWith(u) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(f, a) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(f, a)) : n = a;
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
        const d = e.substring(r, e.length);
        "true".startsWith(d) ? l += "true".slice(d.length) : "false".startsWith(d) ? l += "false".slice(d.length) : "null".startsWith(d) && (l += "null".slice(d.length));
      }
    }
  return l;
}
function $u(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = hs({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = hs({ text: Mu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
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
  onDataPart: l,
  onErrorPart: a,
  onToolCallStreamingStartPart: f,
  onToolCallDeltaPart: d,
  onToolCallPart: u,
  onToolResultPart: g,
  onMessageAnnotationsPart: m,
  onFinishMessagePart: S,
  onFinishStepPart: R,
  onStartStepPart: q
}) {
  const H = e.getReader(), F = new TextDecoder(), A = [];
  let K = 0;
  for (; ; ) {
    const { value: x } = await H.read();
    if (x && (A.push(x), K += x.length, x[x.length - 1] !== rf))
      continue;
    if (A.length === 0)
      break;
    const N = of(A, K);
    K = 0;
    const $ = F.decode(N, { stream: !0 }).split(`
`).filter((O) => O !== "").map(nf);
    for (const { type: O, value: E } of $)
      switch (O) {
        case "text":
          await t?.(E);
          break;
        case "reasoning":
          await n?.(E);
          break;
        case "reasoning_signature":
          await r?.(E);
          break;
        case "redacted_reasoning":
          await o?.(E);
          break;
        case "file":
          await i?.(E);
          break;
        case "source":
          await s?.(E);
          break;
        case "data":
          await l?.(E);
          break;
        case "error":
          await a?.(E);
          break;
        case "message_annotations":
          await m?.(E);
          break;
        case "tool_call_streaming_start":
          await f?.(E);
          break;
        case "tool_call_delta":
          await d?.(E);
          break;
        case "tool_call":
          await u?.(E);
          break;
        case "tool_result":
          await g?.(E);
          break;
        case "finish_message":
          await S?.(E);
          break;
        case "finish_step":
          await R?.(E);
          break;
        case "start_step":
          await q?.(E);
          break;
        default: {
          const P = O;
          throw new Error(`Unknown stream part type: ${P}`);
        }
      }
  }
}
async function lf({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: r,
  generateId: o = bo,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var l, a;
  const f = i?.role === "assistant";
  let d = f ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((N, $) => {
    var O;
    return Math.max(N, (O = $.step) != null ? O : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, m, S;
  function R(N, $) {
    const O = u.parts.find(
      (E) => E.type === "tool-invocation" && E.toolInvocation.toolCallId === N
    );
    O != null ? O.toolInvocation = $ : u.parts.push({
      type: "tool-invocation",
      toolInvocation: $
    });
  }
  const q = [];
  let H = f ? i?.annotations : void 0;
  const F = {};
  let A = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, K = "unknown";
  function x() {
    const N = [...q];
    H?.length && (u.annotations = H);
    const $ = {
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
      message: $,
      data: N,
      replaceLastMessage: f
    });
  }
  await sf({
    stream: e,
    onTextPart(N) {
      g == null ? (g = {
        type: "text",
        text: N
      }, u.parts.push(g)) : g.text += N, u.content += N, x();
    },
    onReasoningPart(N) {
      var $;
      S == null ? (S = { type: "text", text: N }, m?.details.push(S)) : S.text += N, m == null ? (m = {
        type: "reasoning",
        reasoning: N,
        details: [S]
      }, u.parts.push(m)) : m.reasoning += N, u.reasoning = (($ = u.reasoning) != null ? $ : "") + N, x();
    },
    onReasoningSignaturePart(N) {
      S != null && (S.signature = N.signature);
    },
    onRedactedReasoningPart(N) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: N.data
      }), S = void 0, x();
    },
    onFilePart(N) {
      u.parts.push({
        type: "file",
        mimeType: N.mimeType,
        data: N.data
      }), x();
    },
    onSourcePart(N) {
      u.parts.push({
        type: "source",
        source: N
      }), x();
    },
    onToolCallStreamingStartPart(N) {
      u.toolInvocations == null && (u.toolInvocations = []), F[N.toolCallId] = {
        text: "",
        step: d,
        toolName: N.toolName,
        index: u.toolInvocations.length
      };
      const $ = {
        state: "partial-call",
        step: d,
        toolCallId: N.toolCallId,
        toolName: N.toolName,
        args: void 0
      };
      u.toolInvocations.push($), R(N.toolCallId, $), x();
    },
    onToolCallDeltaPart(N) {
      const $ = F[N.toolCallId];
      $.text += N.argsTextDelta;
      const { value: O } = $u($.text), E = {
        state: "partial-call",
        step: $.step,
        toolCallId: N.toolCallId,
        toolName: $.toolName,
        args: O
      };
      u.toolInvocations[$.index] = E, R(N.toolCallId, E), x();
    },
    async onToolCallPart(N) {
      const $ = {
        state: "call",
        step: d,
        ...N
      };
      if (F[N.toolCallId] != null ? u.toolInvocations[F[N.toolCallId].index] = $ : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push($)), R(N.toolCallId, $), x(), n) {
        const O = await n({ toolCall: N });
        if (O != null) {
          const E = {
            state: "result",
            step: d,
            ...N,
            result: O
          };
          u.toolInvocations[u.toolInvocations.length - 1] = E, R(N.toolCallId, E), x();
        }
      }
    },
    onToolResultPart(N) {
      const $ = u.toolInvocations;
      if ($ == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const O = $.findIndex(
        (P) => P.toolCallId === N.toolCallId
      );
      if (O === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const E = {
        ...$[O],
        state: "result",
        ...N
      };
      $[O] = E, R(N.toolCallId, E), x();
    },
    onDataPart(N) {
      q.push(...N), x();
    },
    onMessageAnnotationsPart(N) {
      H == null ? H = [...N] : H.push(...N), x();
    },
    onFinishStepPart(N) {
      d += 1, g = N.isContinued ? g : void 0, m = void 0, S = void 0;
    },
    onStartStepPart(N) {
      f || (u.id = N.messageId), u.parts.push({ type: "step-start" }), x();
    },
    onFinishMessagePart(N) {
      K = N.finishReason, N.usage != null && (A = ku(N.usage));
    },
    onErrorPart(N) {
      throw new Error(N);
    }
  }), r?.({ message: u, finishReason: K, usage: A });
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
  await af({
    stream: e,
    onTextPart: (l) => {
      i.content += l, s.text += l, t({
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
  onResponse: l,
  onUpdate: a,
  onFinish: f,
  onToolCall: d,
  generateId: u,
  fetch: g = uf(),
  lastMessage: m,
  requestType: S = "generate"
}) {
  var R, q, H;
  const A = await (S === "resume" ? g(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (R = s?.()) == null ? void 0 : R.signal,
    credentials: r
  }) : g(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (q = s?.()) == null ? void 0 : q.signal,
    credentials: r
  })).catch((K) => {
    throw i(), K;
  });
  if (l)
    try {
      await l(A);
    } catch (K) {
      throw K;
    }
  if (!A.ok)
    throw i(), new Error(
      (H = await A.text()) != null ? H : "Failed to fetch the chat response."
    );
  if (!A.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await cf({
        stream: A.body,
        update: a,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await lf({
        stream: A.body,
        update: a,
        lastMessage: m,
        onToolCall: d,
        onFinish({ message: K, finishReason: x, usage: N }) {
          f && K != null && f(K, { usage: N, finishReason: x });
        },
        generateId: u
      });
      return;
    }
    default: {
      const K = n;
      throw new Error(`Unknown stream protocol: ${K}`);
    }
  }
}
function Jr(e) {
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
          const l = new FileReader();
          l.onload = (a) => {
            var f;
            s((f = a.target) == null ? void 0 : f.result);
          }, l.onerror = (a) => i(a), l.readAsDataURL(t);
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
    (r.length > t || Jr(s.toolInvocations) !== e) && // check that next step is possible:
    qi(s) && // limit the number of automatic steps:
    ((o = Jr(s.toolInvocations)) != null ? o : 0) < n
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
    (l) => l.type === "tool-invocation" && l.toolInvocation.toolCallId === t
  );
  if (s == null)
    return;
  const i = {
    ...s.toolInvocation,
    state: "result",
    result: n
  };
  s.toolInvocation = i, o.toolInvocations = (r = o.toolInvocations) == null ? void 0 : r.map(
    (l) => l.toolCallId === t ? i : l
  );
}
var Sr = /* @__PURE__ */ new WeakMap(), ms = 0;
function hf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Sr.has(e[n]) ? r = Sr.get(e[n]) : (r = ms, Sr.set(e[n], ms++)), t += "@" + r;
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
      var o = this.serializeKey(t), s = r || this.ttl, i = Date.now(), l = {
        data: n,
        createdAt: i,
        expiresAt: s ? i + s : 1 / 0
      };
      this.dispatchExpire(s, l, o), this.items.set(o, l);
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
function mf() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function _f() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var bf = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Ir = {
  isOnline: mf,
  isDocumentVisible: _f,
  fetcher: bf
};
var ct = function() {
  return ct = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ct.apply(this, arguments);
}, Ut = function(e, t, n, r) {
  function o(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function l(d) {
      try {
        f(r.next(d));
      } catch (u) {
        i(u);
      }
    }
    function a(d) {
      try {
        f(r.throw(d));
      } catch (u) {
        i(u);
      }
    }
    function f(d) {
      d.done ? s(d.value) : o(d.value).then(l, a);
    }
    f((r = r.apply(e, t || [])).next());
  });
}, Bt = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(f) {
    return function(d) {
      return a([f, d]);
    };
  }
  function a(f) {
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
  } catch (l) {
    i = { error: l };
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
}, Gi = new Eo(), tr = new Eo(), Cr = new Eo(), zi = {
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
  fetcher: Ir.fetcher,
  isOnline: Ir.isOnline,
  isDocumentVisible: Ir.isDocumentVisible
};
function vf(e, t, n) {
  var r = tr.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    tr.set(e, [t], n > 0 ? n + o : n);
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
var _s = function(e, t, n, r) {
  return n === void 0 && (n = Gi), r === void 0 && (r = zi.ttl), Ut(void 0, void 0, void 0, function() {
    var o, s, i, l, a, f, d;
    return Bt(this, function(u) {
      switch (u.label) {
        case 0:
          if (!wf(t)) return [3, 5];
          u.label = 1;
        case 1:
          return u.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return o = u.sent(), [3, 4];
        case 3:
          return l = u.sent(), s = l, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          o = t, u.label = 6;
        case 6:
          if (i = !1, a = { data: o, error: s, isValidating: i }, typeof o < "u")
            try {
              n.set(e, a, r);
            } catch (g) {
              console.error("swrv(mutate): failed to set cache", g);
            }
          return f = tr.get(e), f && f.data.length && (d = f.data.filter(function(g) {
            return g.key === e;
          }), d.forEach(function(g, m) {
            typeof a.data < "u" && (g.data = a.data), g.error = a.error, g.isValidating = a.isValidating, g.isLoading = a.isValidating;
            var S = m === d.length - 1;
            S || delete d[m];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function bs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = ct({}, zi), i = !1, l = !1, a = go(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = ct(ct({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, g = typeof r == "function" ? r : He(r);
  typeof o > "u" && (o = s.fetcher);
  var m = null;
  m || (m = On({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var S = function(F, A) {
    return Ut(e, void 0, void 0, function() {
      var K, x, N, $, O, E, P, ne = this;
      return Bt(this, function(z) {
        switch (z.label) {
          case 0:
            return K = m.data === void 0, x = g.value, x ? (N = s.cache.get(x), $ = N && N.data, m.isValidating = !0, m.isLoading = !$, $ && (m.data = $.data, m.error = $.error), O = F || o, !O || !s.isDocumentVisible() && !K || A?.forceRevalidate !== void 0 && !A?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : N && (E = !!(Date.now() - N.createdAt >= s.dedupingInterval || A?.forceRevalidate), !E) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (P = function() {
              return Ut(ne, void 0, void 0, function() {
                var Z, fe, he, ae;
                return Bt(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return Z = Cr.get(x), Z ? [3, 2] : (fe = Array.isArray(x) ? x : [x], he = O.apply(void 0, Ef([], yf(fe), !1)), Cr.set(x, he, s.dedupingInterval), [4, _s(x, he, s.cache, u)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, _s(x, Z.data, s.cache, u)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Cr.delete(x), m.error !== void 0 && (ae = !i && s.shouldRetryOnError && (A ? A.shouldRetryOnError : !0), ae && Nf(S, A ? A.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, $ && s.revalidateDebounce ? (setTimeout(function() {
              return Ut(ne, void 0, void 0, function() {
                return Bt(this, function(Z) {
                  switch (Z.label) {
                    case 0:
                      return i ? [3, 2] : [4, P()];
                    case 1:
                      Z.sent(), Z.label = 2;
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
            return [4, P()];
          case 2:
            z.sent(), z.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, R = function() {
    return Ut(e, void 0, void 0, function() {
      return Bt(this, function(F) {
        return [2, S(null, { shouldRetryOnError: !1 })];
      });
    });
  }, q = null;
  lo(function() {
    var F = function() {
      return Ut(e, void 0, void 0, function() {
        return Bt(this, function(A) {
          switch (A.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, S()] : [3, 2];
            case 1:
              return A.sent(), [3, 3];
            case 2:
              q && clearTimeout(q), A.label = 3;
            case 3:
              return s.refreshInterval && !i && (q = setTimeout(F, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (q = setTimeout(F, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", R, !1), window.addEventListener("focus", R, !1));
  }), ao(function() {
    i = !0, q && clearTimeout(q), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", R, !1), window.removeEventListener("focus", R, !1));
    var F = tr.get(g.value);
    F && (F.data = F.data.filter(function(A) {
      return A !== m;
    }));
  });
  try {
    Rt(g, function(F) {
      Je(g) || (g.value = F), m.key = F, m.isValidating = !!F, vf(g.value, m, u), !d && !l && g.value && S(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = ct(ct({}, Ll(m)), { mutate: function(F, A) {
    return S(F, ct(ct({}, A), { forceRevalidate: !0 }));
  } });
  return H;
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
  onFinish: l,
  onError: a,
  credentials: f,
  headers: d,
  body: u,
  generateId: g = bo,
  onToolCall: m,
  fetch: S,
  keepLastMessageOnError: R = !0,
  maxSteps: q = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var F, A;
  const K = t ?? g(), x = `${e}|${K}`, { data: N, mutate: $ } = Of(
    x,
    () => {
      var Y;
      return (Y = ys[x]) != null ? Y : Rn(n);
    }
  ), O = (F = Es[K]) != null ? F : Es[K] = He(
    "ready"
  );
  (A = N.value) != null || (N.value = Rn(n));
  const E = (Y) => (ys[x] = Y, $()), P = N, ne = He(void 0), z = He(void 0);
  let Z = null;
  async function fe(Y, { data: ce, headers: be, body: Ae } = {}) {
    var De, Ye, kt;
    ne.value = void 0, O.value = "submitted";
    const Cn = P.value.length, Nt = Jr(
      (De = P.value[P.value.length - 1]) == null ? void 0 : De.toolInvocations
    );
    try {
      Z = new AbortController();
      const ht = Rn(Y), c = ht;
      E(c);
      const p = (Ye = z.value) != null ? Ye : [], _ = o ? c : c.map(
        ({
          role: v,
          content: b,
          experimental_attachments: y,
          data: T,
          annotations: I,
          toolInvocations: D,
          parts: w
        }) => ({
          role: v,
          content: b,
          ...y !== void 0 && {
            experimental_attachments: y
          },
          ...T !== void 0 && { data: T },
          ...I !== void 0 && { annotations: I },
          ...D !== void 0 && { toolInvocations: D },
          ...w !== void 0 && { parts: w }
        })
      );
      await ff({
        api: e,
        body: (kt = H?.({
          id: K,
          messages: c,
          requestData: ce,
          requestBody: Ae
        })) != null ? kt : {
          id: K,
          messages: _,
          data: ce,
          ...ge(u),
          // Use unref to unwrap the ref value
          ...Ae
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...be
        },
        abortController: () => Z,
        credentials: f,
        onResponse: i,
        onUpdate({ message: v, data: b, replaceLastMessage: y }) {
          O.value = "streaming", E([
            ...y ? c.slice(0, c.length - 1) : c,
            v
          ]), b?.length && (z.value = [...p, ...b]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          R || E(ht);
        },
        generateId: g,
        onToolCall: m,
        fetch: S,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Yr(c[c.length - 1])
      }), O.value = "ready";
    } catch (ht) {
      if (ht.name === "AbortError")
        return Z = null, O.value = "ready", null;
      a && ht instanceof Error && a(ht), ne.value = ht, O.value = "error";
    } finally {
      Z = null;
    }
    df({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: Cn,
      maxSteps: q,
      messages: P.value
    }) && await fe(P.value);
  }
  const he = async (Y, ce) => {
    var be, Ae, De;
    const Ye = await gs(
      (be = ce?.experimental_attachments) != null ? be : Y.experimental_attachments
    );
    return fe(
      P.value.concat({
        ...Y,
        id: (Ae = Y.id) != null ? Ae : g(),
        createdAt: (De = Y.createdAt) != null ? De : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Yi(Y)
      }),
      ce
    );
  }, ae = async (Y) => {
    const ce = P.value;
    return ce.length === 0 ? null : ce[ce.length - 1].role === "assistant" ? fe(ce.slice(0, -1), Y) : fe(ce, Y);
  }, B = () => {
    Z && (Z.abort(), Z = null);
  }, J = (Y) => {
    typeof Y == "function" && (Y = Y(P.value)), E(Rn(Y));
  }, Ee = (Y) => {
    typeof Y == "function" && (Y = Y(z.value)), z.value = Y;
  }, st = He(r), it = async (Y, ce = {}) => {
    var be;
    (be = Y?.preventDefault) == null || be.call(Y);
    const Ae = st.value;
    if (!Ae && !ce.allowEmptySubmit)
      return;
    const De = await gs(
      ce.experimental_attachments
    );
    fe(
      P.value.concat({
        id: g(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ae,
        role: "user",
        experimental_attachments: De.length > 0 ? De : void 0,
        parts: [{ type: "text", text: Ae }]
      }),
      ce
    ), st.value = "";
  }, pt = ({
    toolCallId: Y,
    result: ce
  }) => {
    const be = P.value;
    if (pf({
      messages: be,
      toolCallId: Y,
      toolResult: ce
    }), E(be), O.value === "submitted" || O.value === "streaming")
      return;
    const Ae = be[be.length - 1];
    qi(Ae) && fe(be);
  };
  return {
    id: K,
    messages: P,
    append: he,
    error: ne,
    reload: ae,
    stop: B,
    setMessages: J,
    input: st,
    handleSubmit: it,
    isLoading: mo(
      () => O.value === "submitted" || O.value === "streaming"
    ),
    status: O,
    data: z,
    setData: Ee,
    addToolResult: pt
  };
}
function Yr(e) {
  if (Array.isArray(e))
    return [...e.map(Yr)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, r] of Object.entries(e))
      t[n] = Yr(r);
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
        const a = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        r = new MediaRecorder(a), o = [], r.ondataavailable = (f) => {
          o.push(f.data);
        }, r.onstop = async () => {
          const f = new Blob(o, { type: r?.mimeType });
          await l(f), a.getTracks().forEach((d) => d.stop());
        }, r.start(), t.value = !0, n.value = "";
      } catch (a) {
        n.value = `启动录音失败: ${a.message}`;
      }
  }, i = () => {
    !t.value || !r || (r.stop(), t.value = !1);
  }, l = async (a) => {
    const f = new FormData();
    f.append("audio", a, "recording.webm");
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
}, Rf = { key: 1 }, Pf = ["disabled"], kf = /* @__PURE__ */ ri({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, n = xf({
      // 确保 API 地址指向我们新的 /api/chat
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat")
    }), r = n.messages, o = n.input, s = n.handleSubmit, i = n.isLoading, l = n.error, { isRecording: a, start: f, stop: d } = Df((O) => {
      const E = O.trim();
      if (["发送", "提交", "发出"].includes(E)) return void s();
      if (["清空", "清除", "删除"].includes(E)) return void (o.value = "");
      o.value = E;
    }), u = He(!1), g = On({ x: 0, y: 0 }), m = He(null), S = He(null), R = He(!1);
    function q() {
      u.value = !u.value;
    }
    function H() {
      R.value || q();
    }
    function F(O) {
      return O.trim().startsWith("<audio");
    }
    const A = mo(() => {
      if (!i.value) return !1;
      const O = [...r.value].reverse().find((E) => E.role === "user");
      return !!(O && /摇骰子|掷骰子/.test(O.content));
    });
    Rt(r, async (O, E) => {
      if (!O || O.length === (E?.length || 0)) return;
      const P = O.length, ne = E?.length || 0;
      for (let z = ne; z < P; z++) {
        const Z = O[z];
        if (console.log(`[Watcher] 检查消息 ${z}:`, JSON.stringify(Z, null, 2)), Z.role === "tool" && (console.log("[Watcher] 发现工具消息:", Z), K(Z)), Z.role === "assistant" && Z.toolInvocations) {
          console.log("[Watcher] 发现助手工具调用:", Z.toolInvocations);
          for (const fe of Z.toolInvocations)
            fe.state === "result" && x(fe);
        }
      }
      await qn(), S.value && (S.value.scrollTop = S.value.scrollHeight);
    }, { deep: !0 });
    function K(O) {
      if (O.toolName === "navigateToPage") {
        const E = O.result;
        E?.page && (console.log(`[Tool Result] 导航到: ${E.page}`), N(E.page));
      } else if (O.toolName === "zoomInOnPhoto") {
        const E = O.result;
        E?.title && (console.log(`[Tool Result] 放大图片: ${E.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
          detail: { title: E.title },
          bubbles: !0,
          composed: !0
        })));
      }
    }
    function x(O) {
      if (O.toolName === "navigateToPage") {
        const E = O.result;
        E?.page && (console.log(`[Tool Invocation] 导航到: ${E.page}`), N(E.page));
      } else if (O.toolName === "zoomInOnPhoto") {
        const E = O.result;
        E?.title && (console.log(`[Tool Invocation] 放大图片: ${E.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
          detail: { title: E.title },
          bubbles: !0,
          composed: !0
        })));
      }
    }
    function N(O) {
      let E = "/";
      switch (O) {
        case "portfolio":
        case "blog":
        case "archives":
          E = "/";
          break;
        case "about":
          E = "/about";
          break;
        case "contact":
          E = "/contact";
          break;
        default:
          console.error(`[Navigation] 未知目标: ${O}`);
          return;
      }
      console.log(`[Navigation] 执行跳转到: ${E}`), window.location.href = E;
    }
    Rt(r, async (O, E) => {
      if (!O || O.length === (E?.length || 0)) return;
      const P = O[O.length - 1];
      if (P) {
        if (console.log("最新消息对象结构:", JSON.stringify(P, null, 2)), P.role === "tool" && P.toolName)
          switch (P.toolName) {
            case "navigateToPage": {
              const ne = P.result;
              if (ne?.page) {
                console.log(`[Watcher] 检测到导航指令, 目标: ${ne.page}`);
                let z = "/";
                switch (ne.page) {
                  case "portfolio":
                  case "blog":
                  case "archives":
                    z = "/";
                    break;
                  case "about":
                    z = "/about";
                    break;
                  case "contact":
                    z = "/contact";
                    break;
                  default:
                    console.error(`[Watcher] 未知导航目标: ${ne.page}`);
                    return;
                }
                console.log(`[Watcher] 执行页面跳转到: ${z}`), window.location.href = z;
              }
              break;
            }
            case "zoomInOnPhoto": {
              const ne = P.result;
              ne?.title && (console.log(`[Watcher] 检测到放大图片指令, 目标: ${ne.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
                detail: { title: ne.title },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
          }
        await qn(), S.value && (S.value.scrollTop = S.value.scrollHeight);
      }
    }, { deep: !0 }), Rt(l, (O) => {
      O && console.error("[Assistant] An error occurred:", O);
    });
    function $(O) {
      O.preventDefault();
      const E = m.value, P = O.clientX, ne = O.clientY, z = g.x, Z = g.y;
      let fe = !1;
      function he(B) {
        const J = B.clientX - P, Ee = B.clientY - ne;
        if (!fe && (Math.abs(J) > 5 || Math.abs(Ee) > 5) && (fe = !0, R.value = !0), fe) {
          const st = Math.min(Math.max(0, z + J), window.innerWidth - E.offsetWidth), it = Math.min(Math.max(0, Z + Ee), window.innerHeight - E.offsetHeight);
          g.x = st, g.y = it;
        }
      }
      function ae() {
        document.removeEventListener("mousemove", he), document.removeEventListener("mouseup", ae), setTimeout(() => R.value = !1, 10);
      }
      document.addEventListener("mousemove", he), document.addEventListener("mouseup", ae);
    }
    return lo(() => {
      const O = m.value, E = 20;
      g.x = window.innerWidth - O.offsetWidth - E, g.y = window.innerHeight - O.offsetHeight - E;
    }), (O, E) => (Re(), $e("div", {
      ref_key: "containerRef",
      ref: m,
      class: "ai-bubble-container",
      style: ir({ left: g.x + "px", top: g.y + "px" })
    }, [
      mt("div", {
        class: "floating-ball",
        onMousedown: $,
        onClick: H
      }, "AI", 32),
      u.value ? (Re(), $e("div", Sf, [
        u.value ? (Re(), $e("div", {
          key: 0,
          class: "close-btn",
          onClick: q
        }, "×")) : Qt("", !0),
        mt("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: S
        }, [
          ge(r).length === 0 ? (Re(), $e("div", If, "有什么可以帮您的吗？")) : Qt("", !0),
          (Re(!0), $e(je, null, Ca(ge(r), (P) => (Re(), $e("div", {
            key: P.id,
            class: un(["msg-line", P.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            P.role === "user" || P.role === "assistant" ? (Re(), $e(je, { key: 0 }, [
              F(P.content) ? (Re(), $e("div", {
                key: 0,
                innerHTML: P.content
              }, null, 8, Cf)) : (Re(), $e("div", Tf, Ds(P.content), 1))
            ], 64)) : Qt("", !0)
          ], 2))), 128)),
          ge(i) ? (Re(), $e("div", Vf, [
            A.value ? (Re(), $e("span", Af, "⚀⚂⚅")) : (Re(), $e("span", Rf, "思考中..."))
          ])) : Qt("", !0)
        ], 512),
        mt("form", {
          onSubmit: E[3] || (E[3] = as(
            //@ts-ignore
            (...P) => ge(s) && ge(s)(...P),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          pa(mt("textarea", {
            "onUpdate:modelValue": E[0] || (E[0] = (P) => ue(o) ? o.value = P : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: E[1] || (E[1] = lu(as(
              //@ts-ignore
              (...P) => ge(s) && ge(s)(...P),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ru, ge(o)]
          ]),
          mt("button", {
            type: "button",
            class: un(["btn-voice", { listening: ge(a) }]),
            onClick: E[2] || (E[2] = (P) => ge(a) ? ge(d)() : ge(f)()),
            title: "语音输入"
          }, "🎤", 2),
          mt("button", {
            type: "submit",
            class: "btn-send",
            disabled: ge(i) || !ge(o).trim()
          }, "➤", 8, Pf)
        ], 32)
      ])) : Qt("", !0)
    ], 4));
  }
}), Mf = ".ai-bubble-container{position:fixed;z-index:9999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", $f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, jf = /* @__PURE__ */ $f(kf, [["styles", [Mf]]]), Ff = /* @__PURE__ */ eu(jf);
customElements.define("ai-chat-bubble", Ff);
