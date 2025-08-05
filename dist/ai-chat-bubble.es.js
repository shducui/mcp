var vs = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ut(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = vs.NODE_ENV !== "production" ? Object.freeze({}) : {}, Kt = vs.NODE_ENV !== "production" ? Object.freeze([]) : [], de = () => {
}, Xi = () => !1, wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), le = Object.assign, zr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zi = Object.prototype.hasOwnProperty, q = (e, t) => Zi.call(e, t), k = Array.isArray, Ct = (e) => nr(e) === "[object Map]", Ns = (e) => nr(e) === "[object Set]", F = (e) => typeof e == "function", oe = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", qr = (e) => (ee(e) || F(e)) && F(e.then) && F(e.catch), ws = Object.prototype.toString, nr = (e) => ws.call(e), Gr = (e) => nr(e).slice(8, -1), rr = (e) => nr(e) === "[object Object]", Xr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ut(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qi = /* @__PURE__ */ ut(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), or = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, el = /-(\w)/g, Ve = or(
  (e) => e.replace(el, (t, n) => n ? n.toUpperCase() : "")
), tl = /\B([A-Z])/g, Te = or(
  (e) => e.replace(tl, "-$1").toLowerCase()
), sr = or((e) => e.charAt(0).toUpperCase() + e.slice(1)), St = or(
  (e) => e ? `on${sr(e)}` : ""
), yt = (e, t) => !Object.is(e, t), Ft = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, un = (e, t, n, r = !1) => {
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
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xo;
const On = () => xo || (xo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ir(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = oe(r) ? sl(r) : ir(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (oe(e) || ee(e))
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
function fn(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const r = fn(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const il = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ll = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", al = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", cl = /* @__PURE__ */ ut(il), ul = /* @__PURE__ */ ut(ll), fl = /* @__PURE__ */ ut(al), dl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pl = /* @__PURE__ */ ut(dl);
function Os(e) {
  return !!e || e === "";
}
const xs = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => oe(e) ? e : e == null ? "" : k(e) || ee(e) && (e.toString === ws || !F(e.toString)) ? xs(e) ? Ds(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => xs(t) ? Ss(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[mr(r, s) + " =>"] = o, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => mr(n))
} : vt(t) ? mr(t) : ee(t) && !k(t) && !rr(t) ? String(t) : t, mr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    vt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var te = {};
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
    } else te.NODE_ENV !== "production" && Be("cannot run an inactive effect scope.");
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
let X;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Vr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = Ue;
  X = e, Ue = !0;
  try {
    Vs(e);
    const o = e.fn(e._value);
    (t.version === 0 || yt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, Ue = r, As(e), e.flags &= -3;
  }
}
function eo(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), te.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
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
    const n = X;
    X = void 0;
    try {
      t();
    } finally {
      X = n;
    }
  }
}
let dn = 0;
class _l {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class to {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, te.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !Ue || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new _l(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Ms(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = r);
    }
    return te.NODE_ENV !== "production" && X.onTrack && X.onTrack(
      le(
        {
          effect: X
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, dn++, this.notify(t);
  }
  notify(t) {
    Zr();
    try {
      if (te.NODE_ENV !== "production")
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
const Kn = /* @__PURE__ */ new WeakMap(), Tt = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Ar = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), pn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function fe(e, t, n) {
  if (Ue && X) {
    let r = Kn.get(e);
    r || Kn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new to()), o.map = r, o.key = n), te.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Qe(e, t, n, r, o, s) {
  const i = Kn.get(e);
  if (!i) {
    dn++;
    return;
  }
  const l = (a) => {
    a && (te.NODE_ENV !== "production" ? a.trigger({
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
    const a = k(e), f = a && Xr(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((u, h) => {
        (h === "length" || h === pn || !vt(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(pn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Tt)), Ct(e) && l(i.get(Ar)));
          break;
        case "delete":
          a || (l(i.get(Tt)), Ct(e) && l(i.get(Ar)));
          break;
        case "set":
          Ct(e) && l(i.get(Tt));
          break;
      }
  }
  Qr();
}
function bl(e, t) {
  const n = Kn.get(e);
  return n && n.get(t);
}
function kt(e) {
  const t = W(e);
  return t === e ? t : (fe(t, "iterate", pn), Oe(e) ? t : t.map(ge));
}
function lr(e) {
  return fe(e = W(e), "iterate", pn), e;
}
const yl = {
  __proto__: null,
  [Symbol.iterator]() {
    return br(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return kt(this).concat(
      ...e.map((t) => k(t) ? kt(t) : t)
    );
  },
  entries() {
    return br(this, "entries", (e) => (e[1] = ge(e[1]), e));
  },
  every(e, t) {
    return it(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return it(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return it(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return it(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return it(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return it(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return it(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return yr(this, "includes", e);
  },
  indexOf(...e) {
    return yr(this, "indexOf", e);
  },
  join(e) {
    return kt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return yr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return it(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...t) {
    return So(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return So(this, "reduceRight", e, t);
  },
  shift() {
    return Gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return it(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
  },
  toReversed() {
    return kt(this).toReversed();
  },
  toSorted(e) {
    return kt(this).toSorted(e);
  },
  toSpliced(...e) {
    return kt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gt(this, "unshift", e);
  },
  values() {
    return br(this, "values", ge);
  }
};
function br(e, t, n) {
  const r = lr(e), o = r[t]();
  return r !== e && !Oe(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const El = Array.prototype;
function it(e, t, n, r, o, s) {
  const i = lr(e), l = i !== e && !Oe(e), a = i[t];
  if (a !== El[t]) {
    const u = a.apply(e, s);
    return l ? ge(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, h) {
    return n.call(this, ge(u), h, e);
  } : n.length > 2 && (f = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const d = a.call(i, f, r);
  return l && o ? o(d) : d;
}
function So(e, t, n, r) {
  const o = lr(e);
  let s = n;
  return o !== e && (Oe(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, ge(l), a, e);
  }), o[t](s, ...r);
}
function yr(e, t, n) {
  const r = W(e);
  fe(r, "iterate", pn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && hn(n[0]) ? (n[0] = W(n[0]), r[t](...n)) : o;
}
function Gt(e, t, n = []) {
  Ke(), Zr();
  const r = W(e)[t].apply(e, n);
  return Qr(), We(), r;
}
const vl = /* @__PURE__ */ ut("__proto__,__v_isRef,__isVue"), ks = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
);
function Nl(e) {
  vt(e) || (e = String(e));
  const t = W(this);
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
    return (vt(n) ? ks.has(n) : vl(n)) || (o || fe(t, "get", n), s) ? l : ue(l) ? i && Xr(n) ? l : l.value : ee(l) ? o ? sn(l) : xn(l) : l;
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
      if (!Oe(r) && !Je(r) && (s = W(s), r = W(r)), !k(t) && ue(s) && !ue(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = k(t) && Xr(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      r,
      ue(t) ? t : o
    );
    return t === W(o) && (i ? yt(r, s) && Qe(t, "set", n, r, s) : Qe(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = q(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Qe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!vt(n) || !ks.has(n)) && fe(t, "has", n), r;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      k(t) ? "length" : Tt
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
const wl = /* @__PURE__ */ new js(), Ol = /* @__PURE__ */ new Fs(), xl = /* @__PURE__ */ new js(!0), Dl = /* @__PURE__ */ new Fs(!0), Rr = (e) => e, Vn = (e) => Reflect.getPrototypeOf(e);
function Sl(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = W(o), i = Ct(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), d = n ? Rr : t ? Wn : ge;
    return !t && fe(
      s,
      "iterate",
      a ? Ar : Tt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: h } = f.next();
        return h ? { value: u, done: h } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function An(e) {
  return function(...t) {
    if (te.NODE_ENV !== "production") {
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
      e || (yt(o, l) && fe(i, "get", o), fe(i, "get", l));
      const { has: a } = Vn(i), f = t ? Rr : e ? Wn : ge;
      if (a.call(i, o))
        return f(s.get(o));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && fe(W(o), "iterate", Tt), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = W(s), l = W(o);
      return e || (yt(o, l) && fe(i, "has", o), fe(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const i = this, l = i.__v_raw, a = W(l), f = t ? Rr : e ? Wn : ge;
      return !e && fe(a, "iterate", Tt), l.forEach((d, u) => o.call(s, f(d), f(u), i));
    }
  };
  return le(
    n,
    e ? {
      add: An("add"),
      set: An("set"),
      delete: An("delete"),
      clear: An("clear")
    } : {
      add(o) {
        !t && !Oe(o) && !Je(o) && (o = W(o));
        const s = W(this);
        return Vn(s).has.call(s, o) || (s.add(o), Qe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Oe(s) && !Je(s) && (s = W(s));
        const i = W(this), { has: l, get: a } = Vn(i);
        let f = l.call(i, o);
        f ? te.NODE_ENV !== "production" && Io(i, l, o) : (o = W(o), f = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), f ? yt(s, d) && Qe(i, "set", o, s, d) : Qe(i, "add", o, s), this;
      },
      delete(o) {
        const s = W(this), { has: i, get: l } = Vn(s);
        let a = i.call(s, o);
        a ? te.NODE_ENV !== "production" && Io(s, i, o) : (o = W(o), a = i.call(s, o));
        const f = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && Qe(s, "delete", o, void 0, f), d;
      },
      clear() {
        const o = W(this), s = o.size !== 0, i = te.NODE_ENV !== "production" ? Ct(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
    q(n, o) && o in r ? n : r,
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
    const o = Gr(e);
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rl(Gr(e));
}
function xn(e) {
  return Je(e) ? e : cr(
    e,
    !1,
    wl,
    Cl,
    Ls
  );
}
function Ml(e) {
  return cr(
    e,
    !1,
    xl,
    Tl,
    Hs
  );
}
function sn(e) {
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
  if (!ee(e))
    return te.NODE_ENV !== "production" && Be(
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
function Vt(e) {
  return Je(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function hn(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function kl(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const ge = (e) => ee(e) ? xn(e) : e, Wn = (e) => ee(e) ? sn(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Fe(e) {
  return $l(e, !1);
}
function $l(e, t) {
  return ue(e) ? e : new jl(e, t);
}
class jl {
  constructor(t, n) {
    this.dep = new to(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : W(t), this._value = n ? t : ge(t), this.__v_isShallow = n;
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
    t = r ? t : W(t), yt(t, n) && (this._rawValue = t, this._value = r ? t : ge(t), te.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function he(e) {
  return ue(e) ? e.value : e;
}
const Fl = {
  get: (e, t, n) => t === "__v_raw" ? e : he(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ue(o) && !ue(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ks(e) {
  return Vt(e) ? e : new Proxy(e, Fl);
}
function Ll(e) {
  te.NODE_ENV !== "production" && !hn(e) && Be("toRefs() expects a reactive object but received a plain one.");
  const t = k(e) ? new Array(e.length) : {};
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
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new to(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
function Kl(e, t, n = !1) {
  let r, o;
  return F(e) ? r = e : (r = e.get, o = e.set), new Bl(r, o, n);
}
const Rn = {}, Jn = /* @__PURE__ */ new WeakMap();
let It;
function Wl(e, t = !1, n = It) {
  if (n) {
    let r = Jn.get(n);
    r || Jn.set(n, r = []), r.push(e);
  } else te.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jl(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (D) => {
    (n.onWarn || Be)(
      "Invalid watch source: ",
      D,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (D) => o ? D : Oe(D) || o === !1 || o === 0 ? ct(D, 1) : ct(D);
  let u, h, m, x, V = !1, z = !1;
  if (ue(e) ? (h = () => e.value, V = Oe(e)) : Vt(e) ? (h = () => d(e), V = !0) : k(e) ? (z = !0, V = e.some((D) => Vt(D) || Oe(D)), h = () => e.map((D) => {
    if (ue(D))
      return D.value;
    if (Vt(D))
      return d(D);
    if (F(D))
      return a ? a(D, 2) : D();
    te.NODE_ENV !== "production" && f(D);
  })) : F(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      Ke();
      try {
        m();
      } finally {
        We();
      }
    }
    const D = It;
    It = u;
    try {
      return a ? a(e, 3, [x]) : e(x);
    } finally {
      It = D;
    }
  } : (h = de, te.NODE_ENV !== "production" && f(e)), t && o) {
    const D = h, N = o === !0 ? 1 / 0 : o;
    h = () => ct(D(), N);
  }
  const L = gl(), j = () => {
    u.stop(), L && L.active && zr(L.effects, u);
  };
  if (s && t) {
    const D = t;
    t = (...N) => {
      D(...N), j();
    };
  }
  let P = z ? new Array(e.length).fill(Rn) : Rn;
  const K = (D) => {
    if (!(!(u.flags & 1) || !u.dirty && !D))
      if (t) {
        const N = u.run();
        if (o || V || (z ? N.some((O, w) => yt(O, P[w])) : yt(N, P))) {
          m && m();
          const O = It;
          It = u;
          try {
            const w = [
              N,
              // pass undefined as the old value when it's changed for the first time
              P === Rn ? void 0 : z && P[0] === Rn ? [] : P,
              x
            ];
            P = N, a ? a(t, 3, w) : (
              // @ts-expect-error
              t(...w)
            );
          } finally {
            It = O;
          }
        }
      } else
        u.run();
  };
  return l && l(K), u = new Is(h), u.scheduler = i ? () => i(K, !1) : K, x = (D) => Wl(D, !1, u), m = u.onStop = () => {
    const D = Jn.get(u);
    if (D) {
      if (a)
        a(D, 4);
      else
        for (const N of D) N();
      Jn.delete(u);
    }
  }, te.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? r ? K(!0) : P = u.run() : i ? i(K.bind(null, !0), !0) : u.run(), j.pause = u.pause.bind(u), j.resume = u.resume.bind(u), j.stop = j, j;
}
function ct(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    ct(e.value, t, n);
  else if (k(e))
    for (let r = 0; r < e.length; r++)
      ct(e[r], t, n);
  else if (Ns(e) || Ct(e))
    e.forEach((r) => {
      ct(r, t, n);
    });
  else if (rr(e)) {
    for (const r in e)
      ct(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ct(e[r], t, n);
  }
  return e;
}
var g = {};
const At = [];
function Mn(e) {
  At.push(e);
}
function kn() {
  At.pop();
}
let Er = !1;
function C(e, ...t) {
  if (Er) return;
  Er = !0, Ke();
  const n = At.length ? At[At.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Yl();
  if (r)
    zt(
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
`, ...zl(o)), console.warn(...s);
  }
  We(), Er = !1;
}
function Yl() {
  let e = At[At.length - 1];
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
function zl(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...ql(n));
  }), t;
}
function ql({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${gr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Gl(e.props), s] : [o + s];
}
function Gl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ws(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ws(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = Ws(e, W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = W(t), n ? t : [`${e}=`, t]);
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
function zt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Dn(o, t, n);
  }
}
function ot(e, t, n, r) {
  if (F(e)) {
    const o = zt(e, t, n, r);
    return o && qr(o) && o.catch((s) => {
      Dn(s, t, n);
    }), o;
  }
  if (k(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(ot(e[s], t, n, r));
    return o;
  } else g.NODE_ENV !== "production" && C(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Dn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = g.NODE_ENV !== "production" ? no[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Ke(), zt(s, null, 10, [
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
  if (g.NODE_ENV !== "production") {
    const s = no[t];
    if (n && Mn(n), C(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && kn(), r)
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
const Wt = [];
let ht = null, Lt = 0;
const Js = /* @__PURE__ */ Promise.resolve();
let Yn = null;
const Zl = 100;
function zn(e) {
  const t = Yn || Js;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ql(e) {
  let t = Ze + 1, n = Ne.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Ne[r], s = gn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ur(e) {
  if (!(e.flags & 1)) {
    const t = gn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= gn(n) ? Ne.push(e) : Ne.splice(Ql(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  Yn || (Yn = Js.then(Gs));
}
function zs(e) {
  k(e) ? Wt.push(...e) : ht && e.id === -1 ? ht.splice(Lt + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), Ys();
}
function Co(e, t, n = Ze + 1) {
  for (g.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ne.length; n++) {
    const r = Ne[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || g.NODE_ENV !== "production" && ro(t, r))
        continue;
      Ne.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function qs(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, r) => gn(n) - gn(r)
    );
    if (Wt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < ht.length; Lt++) {
      const n = ht[Lt];
      g.NODE_ENV !== "production" && ro(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ht = null, Lt = 0;
  }
}
const gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Gs(e) {
  g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = g.NODE_ENV !== "production" ? (n) => ro(e, n) : de;
  try {
    for (Ze = 0; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      if (n && !(n.flags & 8)) {
        if (g.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), zt(
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
    Ze = -1, Ne.length = 0, qs(e), Yn = null, (Ne.length || Wt.length) && Gs(e);
  }
}
function ro(e, t) {
  const n = e.get(t) || 0;
  if (n > Zl) {
    const r = t.i, o = r && Ti(r.type);
    return Dn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nt = !1;
const $n = /* @__PURE__ */ new Map();
g.NODE_ENV !== "production" && (On().__VUE_HMR_RUNTIME__ = {
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
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return Vi(e) ? e.__vccOpts : e;
}
function na(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, qn(r.type).render = t), r.renderCache = [], nt = !0, r.update(), nt = !1;
  }));
}
function ra(e, t) {
  const n = Pt.get(e);
  if (!n) return;
  t = qn(t), To(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = qn(s.type);
    let l = $n.get(i);
    l || (i !== n.initialDef && To(i, t), $n.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? ur(() => {
      nt = !0, s.parent.update(), nt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  zs(() => {
    $n.clear();
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
function Sn(e, ...t) {
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
  Sn("app:init", e, t, {
    Fragment: je,
    Text: In,
    Comment: ke,
    Static: Ln
  });
}
function sa(e) {
  Sn("app:unmount", e);
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
    Sn(
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
    Sn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function fa(e, t, n) {
  Sn(
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
function da(e, t = we, n) {
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
    return g.NODE_ENV !== "production" && Qs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ni(e) {
  Qi(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function pa(e, t) {
  if (we === null)
    return g.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const n = hr(we), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = Z] = t[o];
    s && (F(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ct(i), r.push({
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
function Ot(e, t, n, r) {
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
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ma = /* @__PURE__ */ new WeakSet();
function ln(e, t, n, r, o = !1) {
  if (k(e)) {
    e.forEach(
      (x, V) => ln(
        x,
        t && (k(t) ? t[V] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (an(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ln(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? hr(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e;
  if (g.NODE_ENV !== "production" && !l) {
    C(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === Z ? l.refs = {} : l.refs, u = l.setupState, h = W(u), m = u === Z ? () => !1 : (x) => g.NODE_ENV !== "production" && (q(h, x) && !ue(h[x]) && C(
    `Template ref "${x}" used on a non-ref value. It will not work in the production build.`
  ), ma.has(h[x])) ? !1 : q(h, x);
  if (f != null && f !== a && (oe(f) ? (d[f] = null, m(f) && (u[f] = null)) : ue(f) && (f.value = null)), F(a))
    zt(a, l, 12, [i, d]);
  else {
    const x = oe(a), V = ue(a);
    if (x || V) {
      const z = () => {
        if (e.f) {
          const L = x ? m(a) ? u[a] : d[a] : a.value;
          o ? k(L) && zr(L, s) : k(L) ? L.includes(s) || L.push(s) : x ? (d[a] = [s], m(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else x ? (d[a] = i, m(a) && (u[a] = i)) : V ? (a.value = i, e.k && (d[e.k] = i)) : g.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (z.id = -1, Pe(z, n)) : z();
    } else g.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
  }
}
On().requestIdleCallback;
On().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, io = (e) => e.type.__isKeepAlive;
function _a(e, t) {
  si(e, "a", t);
}
function ba(e, t) {
  si(e, "da", t);
}
function si(e, t, n = me) {
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
    zr(r[t], o);
  }, n);
}
function fr(e, t, n = me, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ke();
      const l = Cn(n), a = ot(t, n, e, i);
      return l(), We(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (g.NODE_ENV !== "production") {
    const o = St(no[e].replace(/ hook$/, ""));
    C(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ft = (e) => (t, n = me) => {
  (!_n || e === "sp") && fr(e, (...r) => t(...r), n);
}, Ea = ft("bm"), lo = ft("m"), va = ft(
  "bu"
), Na = ft("u"), wa = ft(
  "bum"
), ao = ft("um"), Oa = ft(
  "sp"
), xa = ft("rtg"), Da = ft("rtc");
function Sa(e, t = me) {
  fr("ec", e, t);
}
const Ia = Symbol.for("v-ndc");
function Ca(e, t, n, r) {
  let o;
  const s = n, i = k(e);
  if (i || oe(e)) {
    const l = i && Vt(e);
    let a = !1, f = !1;
    l && (a = !Oe(e), f = Je(e), e = lr(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? f ? Wn(ge(e[d])) : ge(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    g.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, s);
  } else if (ee(e))
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
const Mr = (e) => e ? Ii(e) ? hr(e) : Mr(e.parent) : null, Rt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => g.NODE_ENV !== "production" ? tt(e.props) : e.props,
    $attrs: (e) => g.NODE_ENV !== "production" ? tt(e.attrs) : e.attrs,
    $slots: (e) => g.NODE_ENV !== "production" ? tt(e.slots) : e.slots,
    $refs: (e) => g.NODE_ENV !== "production" ? tt(e.refs) : e.refs,
    $parent: (e) => Mr(e.parent),
    $root: (e) => Mr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ur(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zn.bind(e.proxy)),
    $watch: (e) => ac.bind(e)
  })
), co = (e) => e === "_" || e === "$", Nr = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if (g.NODE_ENV !== "production" && t === "__isVue")
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
        kr && (i[t] = 0);
      }
    }
    const d = Rt[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), g.NODE_ENV !== "production" && Qn()) : g.NODE_ENV !== "production" && t === "$slots" && fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Z && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, q(h, t)
    )
      return h[t];
    g.NODE_ENV !== "production" && we && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && co(t[0]) && q(o, t) ? C(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === we && C(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Nr(o, t) ? (o[t] = n, !0) : g.NODE_ENV !== "production" && o.__isScriptSetup && q(o, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Z && q(r, t) ? (r[t] = n, !0) : q(e.props, t) ? (g.NODE_ENV !== "production" && C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (g.NODE_ENV !== "production" && C(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (g.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let l;
    return !!n[i] || e !== Z && q(e, i) || Nr(t, i) || (l = s[0]) && q(l, i) || q(r, i) || q(Rt, i) || q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
g.NODE_ENV !== "production" && (ii.ownKeys = (e) => (C(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ta(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Rt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Rt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: de
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
      set: de
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
function Ra() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? C(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let kr = !0;
function Pa(e) {
  const t = ai(e), n = e.proxy, r = e.ctx;
  kr = !1, t.beforeCreate && Ao(t.beforeCreate, e, "bc");
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
    mounted: h,
    beforeUpdate: m,
    updated: x,
    activated: V,
    deactivated: z,
    beforeDestroy: L,
    beforeUnmount: j,
    destroyed: P,
    unmounted: K,
    render: D,
    renderTracked: N,
    renderTriggered: O,
    errorCaptured: w,
    serverPrefetch: A,
    // public API
    expose: U,
    inheritAttrs: se,
    // assets
    components: ie,
    directives: re,
    filters: ye
  } = t, pe = g.NODE_ENV !== "production" ? Ra() : null;
  if (g.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const J in B)
        pe("Props", J);
  }
  if (f && Ma(f, r, pe), i)
    for (const B in i) {
      const J = i[B];
      F(J) ? (g.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = J.bind(n), g.NODE_ENV !== "production" && pe("Methods", B)) : g.NODE_ENV !== "production" && C(
        `Method "${B}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    g.NODE_ENV !== "production" && !F(o) && C(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = o.call(n, n);
    if (g.NODE_ENV !== "production" && qr(B) && C(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(B))
      g.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = xn(B), g.NODE_ENV !== "production")
      for (const J in B)
        pe("Data", J), co(J[0]) || Object.defineProperty(r, J, {
          configurable: !0,
          enumerable: !0,
          get: () => B[J],
          set: de
        });
  }
  if (kr = !0, s)
    for (const B in s) {
      const J = s[B], xe = F(J) ? J.bind(n, n) : F(J.get) ? J.get.bind(n, n) : de;
      g.NODE_ENV !== "production" && xe === de && C(`Computed property "${B}" has no getter.`);
      const st = !F(J) && F(J.set) ? J.set.bind(n) : g.NODE_ENV !== "production" ? () => {
        C(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : de, Nt = mo({
        get: xe,
        set: st
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => Nt.value,
        set: (dt) => Nt.value = dt
      }), g.NODE_ENV !== "production" && pe("Computed", B);
    }
  if (l)
    for (const B in l)
      li(l[B], r, n, B);
  if (a) {
    const B = F(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach((J) => {
      Ha(J, B[J]);
    });
  }
  d && Ao(d, e, "c");
  function ae(B, J) {
    k(J) ? J.forEach((xe) => B(xe.bind(n))) : J && B(J.bind(n));
  }
  if (ae(Ea, u), ae(lo, h), ae(va, m), ae(Na, x), ae(_a, V), ae(ba, z), ae(Sa, w), ae(Da, N), ae(xa, O), ae(wa, j), ae(ao, K), ae(Oa, A), k(U))
    if (U.length) {
      const B = e.exposed || (e.exposed = {});
      U.forEach((J) => {
        Object.defineProperty(B, J, {
          get: () => n[J],
          set: (xe) => n[J] = xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  D && e.render === de && (e.render = D), se != null && (e.inheritAttrs = se), ie && (e.components = ie), re && (e.directives = re), A && oi(e);
}
function Ma(e, t, n = de) {
  k(e) && (e = $r(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = jn(
      o.from || r,
      o.default,
      !0
    ) : s = jn(o.from || r) : s = jn(o), ue(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, g.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ao(e, t, n) {
  ot(
    k(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, r) {
  let o = r.includes(".") ? Ei(n, r) : () => n[r];
  if (oe(e)) {
    const s = t[e];
    F(s) ? bt(o, s) : g.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, s);
  } else if (F(e))
    bt(o, e.bind(n));
  else if (ee(e))
    if (k(e))
      e.forEach((s) => li(s, t, n, r));
    else {
      const s = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(s) ? bt(o, s, e) : g.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else g.NODE_ENV !== "production" && C(`Invalid watch option: "${r}"`, e);
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
  ), Xn(a, t, i)), ee(t) && s.set(t, a), a;
}
function Xn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Xn(e, s, n, !0), o && o.forEach(
    (i) => Xn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      g.NODE_ENV !== "production" && C(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ka[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ka = {
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
  watch: ja,
  // provide / inject
  provide: Ro,
  inject: $a
};
function Ro(e, t) {
  return t ? e ? function() {
    return le(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $a(e, t) {
  return tn($r(e), $r(t));
}
function $r(e) {
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
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Po(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
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
let Fa = 0;
function La(e, t) {
  return function(r, o = null) {
    F(r) || (r = le({}, r)), o != null && !ee(o) && (g.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), o = null);
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
        g.NODE_ENV !== "production" && C(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? g.NODE_ENV !== "production" && C("Plugin has already been applied to target app.") : d && F(d.install) ? (i.add(d), d.install(f, ...u)) : F(d) ? (i.add(d), d(f, ...u)) : g.NODE_ENV !== "production" && C(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? g.NODE_ENV !== "production" && C(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return g.NODE_ENV !== "production" && Ur(d, s.config), u ? (g.NODE_ENV !== "production" && s.components[d] && C(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return g.NODE_ENV !== "production" && ni(d), u ? (g.NODE_ENV !== "production" && s.directives[d] && C(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, h) {
        if (a)
          g.NODE_ENV !== "production" && C(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          g.NODE_ENV !== "production" && d.__vue_app__ && C(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || rt(r, o);
          return m.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), g.NODE_ENV !== "production" && (s.reload = () => {
            const x = Et(m);
            x.el = null, e(x, d, h);
          }), e(m, d, h), a = !0, f._container = d, d.__vue_app__ = f, g.NODE_ENV !== "production" && (f._instance = m.component, oa(f, Jo)), hr(m.component);
        }
      },
      onUnmount(d) {
        g.NODE_ENV !== "production" && typeof d != "function" && C(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (ot(
          l,
          f._instance,
          16
        ), e(null, f._container), g.NODE_ENV !== "production" && (f._instance = null, sa(f)), delete f._container.__vue_app__) : g.NODE_ENV !== "production" && C("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return g.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? C(
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
  if (!me)
    g.NODE_ENV !== "production" && C("provide() can only be used inside setup().");
  else {
    let n = me.provides;
    const r = me.parent && me.parent.provides;
    r === n && (n = me.provides = Object.create(r)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const r = go();
  if (r || Jt) {
    let o = Jt ? Jt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(r && r.proxy) : t;
    g.NODE_ENV !== "production" && C(`injection "${String(e)}" not found.`);
  } else g.NODE_ENV !== "production" && C("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ua(e, t, n, r = !1) {
  const o = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  g.NODE_ENV !== "production" && gi(t || {}, o, e), n ? e.props = r ? o : Ml(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
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
    !(g.NODE_ENV !== "production" && Ba(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (dr(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (q(s, h))
            m !== s[h] && (s[h] = m, f = !0);
          else {
            const x = Ve(h);
            o[x] = jr(
              a,
              l,
              x,
              m,
              e,
              !1
            );
          }
        else
          m !== s[h] && (s[h] = m, f = !0);
      }
    }
  } else {
    pi(e, t, o, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Te(u)) === u || !q(t, d))) && (a ? n && // for camelCase
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
        (!t || !q(t, u)) && (delete s[u], f = !0);
  }
  f && Qe(e.attrs, "set", ""), g.NODE_ENV !== "production" && gi(t || {}, o, e);
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
      o && q(o, d = Ve(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : dr(e.emitsOptions, a) || (!(a in r) || f !== r[a]) && (r[a] = f, i = !0);
    }
  if (s) {
    const a = W(n), f = l || Z;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = jr(
        o,
        a,
        u,
        f[u],
        e,
        !q(f, u)
      );
    }
  }
  return i;
}
function jr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && F(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          r = f[n];
        else {
          const d = Cn(o);
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
  if (!F(e)) {
    const d = (u) => {
      a = !0;
      const [h, m] = hi(u, t, !0);
      le(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return ee(e) && r.set(e, Kt), Kt;
  if (k(s))
    for (let d = 0; d < s.length; d++) {
      g.NODE_ENV !== "production" && !oe(s[d]) && C("props must be strings when using array syntax.", s[d]);
      const u = Ve(s[d]);
      Mo(u) && (i[u] = Z);
    }
  else if (s) {
    g.NODE_ENV !== "production" && !ee(s) && C("invalid props options", s);
    for (const d in s) {
      const u = Ve(d);
      if (Mo(u)) {
        const h = s[d], m = i[u] = k(h) || F(h) ? { type: h } : le({}, h), x = m.type;
        let V = !1, z = !0;
        if (k(x))
          for (let L = 0; L < x.length; ++L) {
            const j = x[L], P = F(j) && j.name;
            if (P === "Boolean") {
              V = !0;
              break;
            } else P === "String" && (z = !1);
          }
        else
          V = F(x) && x.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = V, m[
          1
          /* shouldCastTrue */
        ] = z, (V || q(m, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return ee(e) && r.set(e, f), f;
}
function Mo(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (g.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
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
      g.NODE_ENV !== "production" ? tt(r) : r,
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
      const d = k(s) ? s : [s], u = [];
      for (let h = 0; h < d.length && !f; h++) {
        const { valid: m, expectedType: x } = qa(t, d[h]);
        u.push(x || ""), f = m;
      }
      if (!f) {
        C(Ga(e, t, u));
        return;
      }
    }
    l && !l(t, r) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const za = /* @__PURE__ */ ut(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function qa(e, t) {
  let n;
  const r = Ja(t);
  if (r === "null")
    n = e === null;
  else if (za(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = k(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Ga(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(sr).join(" | ")}`;
  const o = n[0], s = Gr(t), i = ko(t, o), l = ko(t, s);
  return n.length === 1 && $o(o) && !Xa(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, $o(s) && (r += `with value ${l}.`), r;
}
function ko(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $o(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Xa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const uo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", fo = (e) => k(e) ? e.map(He) : [He(e)], Za = (e, t, n) => {
  if (t._n)
    return t;
  const r = da((...o) => (g.NODE_ENV !== "production" && me && !(n === null && we) && !(n && n.root !== me.root) && C(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fo(t(...o))), n);
  return r._c = !1, r;
}, mi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uo(o)) continue;
    const s = e[o];
    if (F(s))
      t[o] = Za(o, s, r);
    else if (s != null) {
      g.NODE_ENV !== "production" && C(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = fo(s);
      t[o] = () => i;
    }
  }
}, _i = (e, t) => {
  g.NODE_ENV !== "production" && !io(e.vnode) && C(
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
    o && un(r, "__", o, !0);
    const s = t._;
    s ? (Fr(r, t, n), n && un(r, "_", s, !0)) : mi(t, r);
  } else t && _i(e, t);
}, ec = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? g.NODE_ENV !== "production" && nt ? (Fr(o, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? s = !1 : Fr(o, t, n) : (s = !t.$stable, mi(t, o)), i = t;
  } else t && (_i(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !uo(l) && i[l] == null && delete o[l];
};
let Xt, _t;
function $t(e, t) {
  e.appContext.config.performance && Zn() && _t.mark(`vue-${t}-${e.uid}`), g.NODE_ENV !== "production" && ca(e, t, Zn() ? _t.now() : Date.now());
}
function jt(e, t) {
  if (e.appContext.config.performance && Zn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    _t.mark(r), _t.measure(
      `<${gr(e, e.type)}> ${t}`,
      n,
      r
    ), _t.clearMarks(n), _t.clearMarks(r);
  }
  g.NODE_ENV !== "production" && ua(e, t, Zn() ? _t.now() : Date.now());
}
function Zn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, _t = window.performance) : Xt = !1), Xt;
}
function tc() {
  const e = [];
  if (g.NODE_ENV !== "production" && e.length) {
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
  const n = On();
  n.__VUE__ = !0, g.NODE_ENV !== "production" && Zs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: h,
    setScopeId: m = de,
    insertStaticContent: x
  } = e, V = (c, p, _, E = null, b = null, y = null, T = void 0, I = null, S = g.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (E = Ye(c), Y(c, b, y, !0), c = null), p.patchFlag === -2 && (S = !1, p.dynamicChildren = null);
    const { type: v, ref: $, shapeFlag: R } = p;
    switch (v) {
      case In:
        z(c, p, _, E);
        break;
      case ke:
        L(c, p, _, E);
        break;
      case Ln:
        c == null ? j(p, _, E, T) : g.NODE_ENV !== "production" && P(c, p, _, T);
        break;
      case je:
        re(
          c,
          p,
          _,
          E,
          b,
          y,
          T,
          I,
          S
        );
        break;
      default:
        R & 1 ? N(
          c,
          p,
          _,
          E,
          b,
          y,
          T,
          I,
          S
        ) : R & 6 ? ye(
          c,
          p,
          _,
          E,
          b,
          y,
          T,
          I,
          S
        ) : R & 64 || R & 128 ? v.process(
          c,
          p,
          _,
          E,
          b,
          y,
          T,
          I,
          S,
          wt
        ) : g.NODE_ENV !== "production" && C("Invalid VNode type:", v, `(${typeof v})`);
    }
    $ != null && b ? ln($, c && c.ref, y, p || c, !p) : $ == null && c && c.ref != null && ln(c.ref, null, y, c, !0);
  }, z = (c, p, _, E) => {
    if (c == null)
      r(
        p.el = l(p.children),
        _,
        E
      );
    else {
      const b = p.el = c.el;
      p.children !== c.children && f(b, p.children);
    }
  }, L = (c, p, _, E) => {
    c == null ? r(
      p.el = a(p.children || ""),
      _,
      E
    ) : p.el = c.el;
  }, j = (c, p, _, E) => {
    [c.el, c.anchor] = x(
      c.children,
      p,
      _,
      E,
      c.el,
      c.anchor
    );
  }, P = (c, p, _, E) => {
    if (p.children !== c.children) {
      const b = h(c.anchor);
      D(c), [p.el, p.anchor] = x(
        p.children,
        _,
        b,
        E
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, K = ({ el: c, anchor: p }, _, E) => {
    let b;
    for (; c && c !== p; )
      b = h(c), r(c, _, E), c = b;
    r(p, _, E);
  }, D = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = h(c), o(c), c = _;
    o(p);
  }, N = (c, p, _, E, b, y, T, I, S) => {
    p.type === "svg" ? T = "svg" : p.type === "math" && (T = "mathml"), c == null ? O(
      p,
      _,
      E,
      b,
      y,
      T,
      I,
      S
    ) : U(
      c,
      p,
      b,
      y,
      T,
      I,
      S
    );
  }, O = (c, p, _, E, b, y, T, I) => {
    let S, v;
    const { props: $, shapeFlag: R, transition: M, dirs: H } = c;
    if (S = c.el = i(
      c.type,
      y,
      $ && $.is,
      $
    ), R & 8 ? d(S, c.children) : R & 16 && A(
      c.children,
      S,
      null,
      E,
      b,
      wr(c, y),
      T,
      I
    ), H && Ot(c, null, E, "created"), w(S, c, c.scopeId, T, E), $) {
      for (const ne in $)
        ne !== "value" && !nn(ne) && s(S, ne, null, $[ne], y, E);
      "value" in $ && s(S, "value", null, $.value, y), (v = $.onVnodeBeforeMount) && Xe(v, E, c);
    }
    g.NODE_ENV !== "production" && (un(S, "__vnode", c, !0), un(S, "__vueParentComponent", E, !0)), H && Ot(c, null, E, "beforeMount");
    const G = oc(b, M);
    G && M.beforeEnter(S), r(S, p, _), ((v = $ && $.onVnodeMounted) || G || H) && Pe(() => {
      v && Xe(v, E, c), G && M.enter(S), H && Ot(c, null, E, "mounted");
    }, b);
  }, w = (c, p, _, E, b) => {
    if (_ && m(c, _), E)
      for (let y = 0; y < E.length; y++)
        m(c, E[y]);
    if (b) {
      let y = b.subTree;
      if (g.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && (y = po(y.children) || y), p === y || wi(y.type) && (y.ssContent === p || y.ssFallback === p)) {
        const T = b.vnode;
        w(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          b.parent
        );
      }
    }
  }, A = (c, p, _, E, b, y, T, I, S = 0) => {
    for (let v = S; v < c.length; v++) {
      const $ = c[v] = I ? mt(c[v]) : He(c[v]);
      V(
        null,
        $,
        p,
        _,
        E,
        b,
        y,
        T,
        I
      );
    }
  }, U = (c, p, _, E, b, y, T) => {
    const I = p.el = c.el;
    g.NODE_ENV !== "production" && (I.__vnode = p);
    let { patchFlag: S, dynamicChildren: v, dirs: $ } = p;
    S |= c.patchFlag & 16;
    const R = c.props || Z, M = p.props || Z;
    let H;
    if (_ && xt(_, !1), (H = M.onVnodeBeforeUpdate) && Xe(H, _, p, c), $ && Ot(p, c, _, "beforeUpdate"), _ && xt(_, !0), g.NODE_ENV !== "production" && nt && (S = 0, T = !1, v = null), (R.innerHTML && M.innerHTML == null || R.textContent && M.textContent == null) && d(I, ""), v ? (se(
      c.dynamicChildren,
      v,
      I,
      _,
      E,
      wr(p, b),
      y
    ), g.NODE_ENV !== "production" && Fn(c, p)) : T || xe(
      c,
      p,
      I,
      null,
      _,
      E,
      wr(p, b),
      y,
      !1
    ), S > 0) {
      if (S & 16)
        ie(I, R, M, _, b);
      else if (S & 2 && R.class !== M.class && s(I, "class", null, M.class, b), S & 4 && s(I, "style", R.style, M.style, b), S & 8) {
        const G = p.dynamicProps;
        for (let ne = 0; ne < G.length; ne++) {
          const Q = G[ne], Se = R[Q], Ie = M[Q];
          (Ie !== Se || Q === "value") && s(I, Q, Se, Ie, b, _);
        }
      }
      S & 1 && c.children !== p.children && d(I, p.children);
    } else !T && v == null && ie(I, R, M, _, b);
    ((H = M.onVnodeUpdated) || $) && Pe(() => {
      H && Xe(H, _, p, c), $ && Ot(p, c, _, "updated");
    }, E);
  }, se = (c, p, _, E, b, y, T) => {
    for (let I = 0; I < p.length; I++) {
      const S = c[I], v = p[I], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(S, v) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? u(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      V(
        S,
        v,
        $,
        null,
        E,
        b,
        y,
        T,
        !0
      );
    }
  }, ie = (c, p, _, E, b) => {
    if (p !== _) {
      if (p !== Z)
        for (const y in p)
          !nn(y) && !(y in _) && s(
            c,
            y,
            p[y],
            null,
            b,
            E
          );
      for (const y in _) {
        if (nn(y)) continue;
        const T = _[y], I = p[y];
        T !== I && y !== "value" && s(c, y, I, T, b, E);
      }
      "value" in _ && s(c, "value", p.value, _.value, b);
    }
  }, re = (c, p, _, E, b, y, T, I, S) => {
    const v = p.el = c ? c.el : l(""), $ = p.anchor = c ? c.anchor : l("");
    let { patchFlag: R, dynamicChildren: M, slotScopeIds: H } = p;
    g.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || R & 2048) && (R = 0, S = !1, M = null), H && (I = I ? I.concat(H) : H), c == null ? (r(v, _, E), r($, _, E), A(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      $,
      b,
      y,
      T,
      I,
      S
    )) : R > 0 && R & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (se(
      c.dynamicChildren,
      M,
      _,
      b,
      y,
      T,
      I
    ), g.NODE_ENV !== "production" ? Fn(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || b && p === b.subTree) && Fn(
        c,
        p,
        !0
        /* shallow */
      )
    )) : xe(
      c,
      p,
      _,
      $,
      b,
      y,
      T,
      I,
      S
    );
  }, ye = (c, p, _, E, b, y, T, I, S) => {
    p.slotScopeIds = I, c == null ? p.shapeFlag & 512 ? b.ctx.activate(
      p,
      _,
      E,
      T,
      S
    ) : pe(
      p,
      _,
      E,
      b,
      y,
      T,
      S
    ) : ae(c, p, S);
  }, pe = (c, p, _, E, b, y, T) => {
    const I = c.component = Oc(
      c,
      E,
      b
    );
    if (g.NODE_ENV !== "production" && I.type.__hmrId && ea(I), g.NODE_ENV !== "production" && (Mn(c), $t(I, "mount")), io(c) && (I.ctx.renderer = wt), g.NODE_ENV !== "production" && $t(I, "init"), Dc(I, !1, T), g.NODE_ENV !== "production" && jt(I, "init"), g.NODE_ENV !== "production" && nt && (c.el = null), I.asyncDep) {
      if (b && b.registerDep(I, B, T), !c.el) {
        const S = I.subTree = rt(ke);
        L(null, S, p, _), c.placeholder = S.el;
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
    g.NODE_ENV !== "production" && (kn(), jt(I, "mount"));
  }, ae = (c, p, _) => {
    const E = p.component = c.component;
    if (pc(c, p, _))
      if (E.asyncDep && !E.asyncResolved) {
        g.NODE_ENV !== "production" && Mn(p), J(E, p, _), g.NODE_ENV !== "production" && kn();
        return;
      } else
        E.next = p, E.update();
    else
      p.el = c.el, E.vnode = p;
  }, B = (c, p, _, E, b, y, T) => {
    const I = () => {
      if (c.isMounted) {
        let { next: R, bu: M, u: H, parent: G, vnode: ne } = c;
        {
          const qe = bi(c);
          if (qe) {
            R && (R.el = ne.el, J(c, R, T)), qe.asyncDep.then(() => {
              c.isUnmounted || I();
            });
            return;
          }
        }
        let Q = R, Se;
        g.NODE_ENV !== "production" && Mn(R || c.vnode), xt(c, !1), R ? (R.el = ne.el, J(c, R, T)) : R = ne, M && Ft(M), (Se = R.props && R.props.onVnodeBeforeUpdate) && Xe(Se, G, R, ne), xt(c, !0), g.NODE_ENV !== "production" && $t(c, "render");
        const Ie = Fo(c);
        g.NODE_ENV !== "production" && jt(c, "render");
        const ze = c.subTree;
        c.subTree = Ie, g.NODE_ENV !== "production" && $t(c, "patch"), V(
          ze,
          Ie,
          // parent may have changed if it's in a teleport
          u(ze.el),
          // anchor may have changed if it's in a fragment
          Ye(ze),
          c,
          b,
          y
        ), g.NODE_ENV !== "production" && jt(c, "patch"), R.el = Ie.el, Q === null && hc(c, Ie.el), H && Pe(H, b), (Se = R.props && R.props.onVnodeUpdated) && Pe(
          () => Xe(Se, G, R, ne),
          b
        ), g.NODE_ENV !== "production" && Qs(c), g.NODE_ENV !== "production" && kn();
      } else {
        let R;
        const { el: M, props: H } = p, { bm: G, m: ne, parent: Q, root: Se, type: Ie } = c, ze = an(p);
        xt(c, !1), G && Ft(G), !ze && (R = H && H.onVnodeBeforeMount) && Xe(R, Q, p), xt(c, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie), g.NODE_ENV !== "production" && $t(c, "render");
          const qe = c.subTree = Fo(c);
          g.NODE_ENV !== "production" && jt(c, "render"), g.NODE_ENV !== "production" && $t(c, "patch"), V(
            null,
            qe,
            _,
            E,
            c,
            b,
            y
          ), g.NODE_ENV !== "production" && jt(c, "patch"), p.el = qe.el;
        }
        if (ne && Pe(ne, b), !ze && (R = H && H.onVnodeMounted)) {
          const qe = p;
          Pe(
            () => Xe(R, Q, qe),
            b
          );
        }
        (p.shapeFlag & 256 || Q && an(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Pe(c.a, b), c.isMounted = !0, g.NODE_ENV !== "production" && ia(c), p = _ = E = null;
      }
    };
    c.scope.on();
    const S = c.effect = new Is(I);
    c.scope.off();
    const v = c.update = S.run.bind(S), $ = c.job = S.runIfDirty.bind(S);
    $.i = c, $.id = c.uid, S.scheduler = () => ur($), xt(c, !0), g.NODE_ENV !== "production" && (S.onTrack = c.rtc ? (R) => Ft(c.rtc, R) : void 0, S.onTrigger = c.rtg ? (R) => Ft(c.rtg, R) : void 0), v();
  }, J = (c, p, _) => {
    p.component = c;
    const E = c.vnode.props;
    c.vnode = p, c.next = null, Ka(c, p.props, E, _), ec(c, p.children, _), Ke(), Co(c), We();
  }, xe = (c, p, _, E, b, y, T, I, S = !1) => {
    const v = c && c.children, $ = c ? c.shapeFlag : 0, R = p.children, { patchFlag: M, shapeFlag: H } = p;
    if (M > 0) {
      if (M & 128) {
        Nt(
          v,
          R,
          _,
          E,
          b,
          y,
          T,
          I,
          S
        );
        return;
      } else if (M & 256) {
        st(
          v,
          R,
          _,
          E,
          b,
          y,
          T,
          I,
          S
        );
        return;
      }
    }
    H & 8 ? ($ & 16 && De(v, b, y), R !== v && d(_, R)) : $ & 16 ? H & 16 ? Nt(
      v,
      R,
      _,
      E,
      b,
      y,
      T,
      I,
      S
    ) : De(v, b, y, !0) : ($ & 8 && d(_, ""), H & 16 && A(
      R,
      _,
      E,
      b,
      y,
      T,
      I,
      S
    ));
  }, st = (c, p, _, E, b, y, T, I, S) => {
    c = c || Kt, p = p || Kt;
    const v = c.length, $ = p.length, R = Math.min(v, $);
    let M;
    for (M = 0; M < R; M++) {
      const H = p[M] = S ? mt(p[M]) : He(p[M]);
      V(
        c[M],
        H,
        _,
        null,
        b,
        y,
        T,
        I,
        S
      );
    }
    v > $ ? De(
      c,
      b,
      y,
      !0,
      !1,
      R
    ) : A(
      p,
      _,
      E,
      b,
      y,
      T,
      I,
      S,
      R
    );
  }, Nt = (c, p, _, E, b, y, T, I, S) => {
    let v = 0;
    const $ = p.length;
    let R = c.length - 1, M = $ - 1;
    for (; v <= R && v <= M; ) {
      const H = c[v], G = p[v] = S ? mt(p[v]) : He(p[v]);
      if (Zt(H, G))
        V(
          H,
          G,
          _,
          null,
          b,
          y,
          T,
          I,
          S
        );
      else
        break;
      v++;
    }
    for (; v <= R && v <= M; ) {
      const H = c[R], G = p[M] = S ? mt(p[M]) : He(p[M]);
      if (Zt(H, G))
        V(
          H,
          G,
          _,
          null,
          b,
          y,
          T,
          I,
          S
        );
      else
        break;
      R--, M--;
    }
    if (v > R) {
      if (v <= M) {
        const H = M + 1, G = H < $ ? p[H].el : E;
        for (; v <= M; )
          V(
            null,
            p[v] = S ? mt(p[v]) : He(p[v]),
            _,
            G,
            b,
            y,
            T,
            I,
            S
          ), v++;
      }
    } else if (v > M)
      for (; v <= R; )
        Y(c[v], b, y, !0), v++;
    else {
      const H = v, G = v, ne = /* @__PURE__ */ new Map();
      for (v = G; v <= M; v++) {
        const Ee = p[v] = S ? mt(p[v]) : He(p[v]);
        Ee.key != null && (g.NODE_ENV !== "production" && ne.has(Ee.key) && C(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), ne.set(Ee.key, v));
      }
      let Q, Se = 0;
      const Ie = M - G + 1;
      let ze = !1, qe = 0;
      const qt = new Array(Ie);
      for (v = 0; v < Ie; v++) qt[v] = 0;
      for (v = H; v <= R; v++) {
        const Ee = c[v];
        if (Se >= Ie) {
          Y(Ee, b, y, !0);
          continue;
        }
        let Ge;
        if (Ee.key != null)
          Ge = ne.get(Ee.key);
        else
          for (Q = G; Q <= M; Q++)
            if (qt[Q - G] === 0 && Zt(Ee, p[Q])) {
              Ge = Q;
              break;
            }
        Ge === void 0 ? Y(Ee, b, y, !0) : (qt[Ge - G] = v + 1, Ge >= qe ? qe = Ge : ze = !0, V(
          Ee,
          p[Ge],
          _,
          null,
          b,
          y,
          T,
          I,
          S
        ), Se++);
      }
      const vo = ze ? sc(qt) : Kt;
      for (Q = vo.length - 1, v = Ie - 1; v >= 0; v--) {
        const Ee = G + v, Ge = p[Ee], No = p[Ee + 1], wo = Ee + 1 < $ ? (
          // #13559, fallback to el placeholder for unresolved async component
          No.el || No.placeholder
        ) : E;
        qt[v] === 0 ? V(
          null,
          Ge,
          _,
          wo,
          b,
          y,
          T,
          I,
          S
        ) : ze && (Q < 0 || v !== vo[Q] ? dt(Ge, _, wo, 2) : Q--);
      }
    }
  }, dt = (c, p, _, E, b = null) => {
    const { el: y, type: T, transition: I, children: S, shapeFlag: v } = c;
    if (v & 6) {
      dt(c.component.subTree, p, _, E);
      return;
    }
    if (v & 128) {
      c.suspense.move(p, _, E);
      return;
    }
    if (v & 64) {
      T.move(c, p, _, wt);
      return;
    }
    if (T === je) {
      r(y, p, _);
      for (let R = 0; R < S.length; R++)
        dt(S[R], p, _, E);
      r(c.anchor, p, _);
      return;
    }
    if (T === Ln) {
      K(c, p, _);
      return;
    }
    if (E !== 2 && v & 1 && I)
      if (E === 0)
        I.beforeEnter(y), r(y, p, _), Pe(() => I.enter(y), b);
      else {
        const { leave: R, delayLeave: M, afterLeave: H } = I, G = () => {
          c.ctx.isUnmounted ? o(y) : r(y, p, _);
        }, ne = () => {
          R(y, () => {
            G(), H && H();
          });
        };
        M ? M(y, G, ne) : ne();
      }
    else
      r(y, p, _);
  }, Y = (c, p, _, E = !1, b = !1) => {
    const {
      type: y,
      props: T,
      ref: I,
      children: S,
      dynamicChildren: v,
      shapeFlag: $,
      patchFlag: R,
      dirs: M,
      cacheIndex: H
    } = c;
    if (R === -2 && (b = !1), I != null && (Ke(), ln(I, null, _, c, !0), We()), H != null && (p.renderCache[H] = void 0), $ & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = $ & 1 && M, ne = !an(c);
    let Q;
    if (ne && (Q = T && T.onVnodeBeforeUnmount) && Xe(Q, p, c), $ & 6)
      Ae(c.component, _, E);
    else {
      if ($ & 128) {
        c.suspense.unmount(_, E);
        return;
      }
      G && Ot(c, null, p, "beforeUnmount"), $ & 64 ? c.type.remove(
        c,
        p,
        _,
        wt,
        E
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== je || R > 0 && R & 64) ? De(
        v,
        p,
        _,
        !1,
        !0
      ) : (y === je && R & 384 || !b && $ & 16) && De(S, p, _), E && ce(c);
    }
    (ne && (Q = T && T.onVnodeUnmounted) || G) && Pe(() => {
      Q && Xe(Q, p, c), G && Ot(c, null, p, "unmounted");
    }, _);
  }, ce = (c) => {
    const { type: p, el: _, anchor: E, transition: b } = c;
    if (p === je) {
      g.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((T) => {
        T.type === ke ? o(T.el) : ce(T);
      }) : _e(_, E);
      return;
    }
    if (p === Ln) {
      D(c);
      return;
    }
    const y = () => {
      o(_), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: T, delayLeave: I } = b, S = () => T(_, y);
      I ? I(c.el, y, S) : S();
    } else
      y();
  }, _e = (c, p) => {
    let _;
    for (; c !== p; )
      _ = h(c), o(c), c = _;
    o(p);
  }, Ae = (c, p, _) => {
    g.NODE_ENV !== "production" && c.type.__hmrId && ta(c);
    const {
      bum: E,
      scope: b,
      job: y,
      subTree: T,
      um: I,
      m: S,
      a: v,
      parent: $,
      slots: { __: R }
    } = c;
    jo(S), jo(v), E && Ft(E), $ && k(R) && R.forEach((M) => {
      $.renderCache[M] = void 0;
    }), b.stop(), y && (y.flags |= 8, Y(T, c, p, _)), I && Pe(I, p), Pe(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), g.NODE_ENV !== "production" && aa(c);
  }, De = (c, p, _, E = !1, b = !1, y = 0) => {
    for (let T = y; T < c.length; T++)
      Y(c[T], p, _, E, b);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), _ = p && p[ha];
    return _ ? h(_) : p;
  };
  let Mt = !1;
  const Tn = (c, p, _) => {
    c == null ? p._vnode && Y(p._vnode, null, null, !0) : V(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, Mt || (Mt = !0, Co(), qs(), Mt = !1);
  }, wt = {
    p: V,
    um: Y,
    m: dt,
    r: ce,
    mt: pe,
    mc: A,
    pc: xe,
    pbc: se,
    n: Ye,
    o: e
  };
  return {
    render: Tn,
    hydrate: void 0,
    createApp: La(Tn)
  };
}
function wr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function oc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (k(r) && k(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = mt(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && Fn(i, l)), l.type === In && (l.el = i.el), l.type === ke && !l.el && (l.el = i.el), g.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
    const e = jn(ic);
    return e || g.NODE_ENV !== "production" && C(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function bt(e, t, n) {
  return g.NODE_ENV !== "production" && !F(t) && C(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yi(e, t, n);
}
function yi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  g.NODE_ENV !== "production" && !t && (r !== void 0 && C(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && C(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && C(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = le({}, n);
  g.NODE_ENV !== "production" && (l.onWarn = C);
  const a = t && r || !t && s !== "post";
  let f;
  if (_n) {
    if (s === "sync") {
      const m = lc();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = de, m.resume = de, m.pause = de, m;
    }
  }
  const d = me;
  l.call = (m, x, V) => ot(m, d, x, V);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    Pe(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, x) => {
    x ? m() : ur(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = Jl(e, t, l);
  return _n && (f ? f.push(h) : a && h()), h;
}
function ac(e, t, n) {
  const r = this.proxy, o = oe(e) ? e.includes(".") ? Ei(r, e) : () => r[e] : e.bind(r, r);
  let s;
  F(t) ? s = t : (s = t.handler, n = t);
  const i = Cn(this), l = yi(o, s.bind(r), n);
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
  const r = e.vnode.props || Z;
  if (g.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(St(Ve(t)) in u)) && C(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${St(Ve(t))}" prop.`
        );
      else {
        const h = d[t];
        F(h) && (h(...n) || C(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && cc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => oe(d) ? d.trim() : d)), i.number && (o = n.map(Tr))), g.NODE_ENV !== "production" && fa(e, t, o), g.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[St(d)] && C(
      `Event "${d}" is emitted in component ${gr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Te(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = St(t)] || // also try camelCase event handler (#2249)
  r[l = St(Ve(t))];
  !a && s && (a = r[l = St(Te(t))]), a && ot(
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
  if (!F(e)) {
    const a = (f) => {
      const d = vi(f, t, !0);
      d && (l = !0, le(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ee(e) && r.set(e, null), null) : (k(s) ? s.forEach((a) => i[a] = null) : le(i, s), ee(e) && r.set(e, i), i);
}
function dr(e, t) {
  return !e || !wn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Te(t)) || q(e, t));
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
    data: h,
    setupState: m,
    ctx: x,
    inheritAttrs: V
  } = e, z = Gn(e);
  let L, j;
  g.NODE_ENV !== "production" && (Lr = !1);
  try {
    if (n.shapeFlag & 4) {
      const D = o || r, N = g.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(D, {
        get(O, w, A) {
          return C(
            `Property '${String(
              w
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(O, w, A);
        }
      }) : D;
      L = He(
        f.call(
          N,
          D,
          d,
          g.NODE_ENV !== "production" ? tt(u) : u,
          m,
          h,
          x
        )
      ), j = l;
    } else {
      const D = t;
      g.NODE_ENV !== "production" && l === u && Qn(), L = He(
        D.length > 1 ? D(
          g.NODE_ENV !== "production" ? tt(u) : u,
          g.NODE_ENV !== "production" ? {
            get attrs() {
              return Qn(), tt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : D(
          g.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), j = t.props ? l : fc(l);
    }
  } catch (D) {
    cn.length = 0, Dn(D, e, 1), L = rt(ke);
  }
  let P = L, K;
  if (g.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([P, K] = Ni(L)), j && V !== !1) {
    const D = Object.keys(j), { shapeFlag: N } = P;
    if (D.length) {
      if (N & 7)
        s && D.some(Bn) && (j = dc(
          j,
          s
        )), P = Et(P, j, !1, !0);
      else if (g.NODE_ENV !== "production" && !Lr && P.type !== ke) {
        const O = Object.keys(l), w = [], A = [];
        for (let U = 0, se = O.length; U < se; U++) {
          const ie = O[U];
          wn(ie) ? Bn(ie) || w.push(ie[2].toLowerCase() + ie.slice(3)) : A.push(ie);
        }
        A.length && C(
          `Extraneous non-props attributes (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), w.length && C(
          `Extraneous non-emits event listeners (${w.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (g.NODE_ENV !== "production" && !Lo(P) && C(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), P = Et(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(n.dirs) : n.dirs), n.transition && (g.NODE_ENV !== "production" && !Lo(P) && C(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), so(P, n.transition)), g.NODE_ENV !== "production" && K ? K(P) : L = P, Gn(z), L;
}
const Ni = (e) => {
  const t = e.children, n = e.dynamicChildren, r = po(t, !1);
  if (r) {
    if (g.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Ni(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [He(r), i];
};
function po(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (pr(o)) {
      if (o.type !== ke || o.children === "v-if") {
        if (n)
          return;
        if (n = o, g.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
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
    (n === "class" || n === "style" || wn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Bn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Lo = (e) => e.shapeFlag & 7 || e.type === ke;
function pc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, f = s.emitsOptions;
  if (g.NODE_ENV !== "production" && (o || l) && nt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Ho(r, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const h = d[u];
        if (i[h] !== r[h] && !dr(f, h))
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
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : zs(e);
}
const je = Symbol.for("v-fgt"), In = Symbol.for("v-txt"), ke = Symbol.for("v-cmt"), Ln = Symbol.for("v-stc"), cn = [];
let Me = null;
function Re(e = !1) {
  cn.push(Me = e ? null : []);
}
function mc() {
  cn.pop(), Me = cn[cn.length - 1] || null;
}
let mn = 1;
function Uo(e, t = !1) {
  mn += e, e < 0 && Me && t && (Me.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = mn > 0 ? Me || Kt : null, mc(), mn > 0 && Me && Me.push(e), e;
}
function $e(e, t, n, r, o, s) {
  return Oi(
    gt(
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
  if (g.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = $n.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const bc = (...e) => Di(
  ...e
), xi = ({ key: e }) => e ?? null, Hn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ue(e) || F(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function gt(e, t = null, n = null, r = 0, o = null, s = e === je ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xi(t),
    ref: t && Hn(t),
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
  return l ? (ho(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= oe(n) ? 8 : 16), g.NODE_ENV !== "production" && a.key !== a.key && C("VNode created with invalid key (NaN). VNode type:", a.type), mn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Me.push(a), a;
}
const rt = g.NODE_ENV !== "production" ? bc : Di;
function Di(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Ia) && (g.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = ke), pr(e)) {
    const l = Et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ho(l, n), mn > 0 && !s && Me && (l.shapeFlag & 6 ? Me[Me.indexOf(e)] = l : Me.push(l)), l.patchFlag = -2, l;
  }
  if (Vi(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: l, style: a } = t;
    l && !oe(l) && (t.class = fn(l)), ee(a) && (hn(a) && !k(a) && (a = le({}, a)), t.style = ir(a));
  }
  const i = oe(e) ? 1 : wi(e) ? 128 : ga(e) ? 64 : ee(e) ? 4 : F(e) ? 2 : 0;
  return g.NODE_ENV !== "production" && i & 4 && hn(e) && (e = W(e), C(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), gt(
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
  return e ? hn(e) || di(e) ? le({}, e) : e : null;
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
      n && s ? k(s) ? s.concat(Hn(t)) : [s, Hn(t)] : Hn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: g.NODE_ENV !== "production" && i === -1 && k(l) ? l.map(Si) : l,
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
  return k(e.children) && (t.children = e.children.map(Si)), t;
}
function Ec(e = " ", t = 0) {
  return rt(In, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (Re(), _c(ke, null, e)) : rt(ke, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? rt(ke) : k(e) ? rt(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pr(e) ? mt(e) : rt(In, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
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
        t.class !== r.class && (t.class = fn([t.class, r.class]));
      else if (o === "style")
        t.style = ir([t.style, r.style]);
      else if (wn(o)) {
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
  return g.NODE_ENV !== "production" ? s.ctx = Ta(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = uc.bind(null, s), e.ce && e.ce(s), s;
}
let me = null;
const go = () => me || we;
let er, Hr;
{
  const e = On(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  er = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), Hr = t(
    "__VUE_SSR_SETTERS__",
    (n) => _n = n
  );
}
const Cn = (e) => {
  const t = me;
  return er(e), e.scope.on(), () => {
    e.scope.off(), er(t);
  };
}, Bo = () => {
  me && me.scope.off(), er(null);
}, xc = /* @__PURE__ */ ut("slot,component");
function Ur(e, { isNativeTag: t }) {
  (xc(e) || t(e)) && C(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let _n = !1;
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
  if (g.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), g.NODE_ENV !== "production" && Va(e);
  const { setup: o } = r;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Tc(e) : null, i = Cn(e), l = zt(
      o,
      e,
      0,
      [
        g.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), a = qr(l);
    if (We(), i(), (a || e.sp) && !an(e) && oi(e), a) {
      if (l.then(Bo, Bo), t)
        return l.then((f) => {
          Ko(e, f, t);
        }).catch((f) => {
          Dn(f, e, 0);
        });
      if (e.asyncDep = l, g.NODE_ENV !== "production" && !e.suspense) {
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
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (g.NODE_ENV !== "production" && pr(t) && C(
    "setup() should not return VNodes directly - return a render function instead."
  ), g.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ks(t), g.NODE_ENV !== "production" && Aa(e)) : g.NODE_ENV !== "production" && t !== void 0 && C(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ci(e, n);
}
const Ic = () => !0;
function Ci(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || de);
  {
    const o = Cn(e);
    Ke();
    try {
      Pa(e);
    } finally {
      We(), o();
    }
  }
  g.NODE_ENV !== "production" && !r.render && e.render === de && !t && (r.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : C("Component is missing template or render function: ", r));
}
const Wo = g.NODE_ENV !== "production" ? {
  get(e, t) {
    return Qn(), fe(e, "get", ""), e[t];
  },
  set() {
    return C("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return C("setupContext.attrs is readonly."), !1;
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
    if (g.NODE_ENV !== "production" && (e.exposed && C("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (k(n) ? r = "array" : ue(n) && (r = "ref")), r !== "object" && C(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (g.NODE_ENV !== "production") {
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(kl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Rt)
        return Rt[n](e);
    },
    has(t, n) {
      return n in t || n in Rt;
    }
  })) : e.proxy;
}
const Vc = /(?:^|[-_])(\w)/g, Ac = (e) => e.replace(Vc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ti(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
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
  return F(e) && "__vccOpts" in e;
}
const mo = (e, t) => {
  const n = Kl(e, t, _n);
  if (g.NODE_ENV !== "production") {
    const r = go();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Rc() {
  if (g.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ee(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ue(u)) {
        Ke();
        const h = u.value;
        return We(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (Vt(u))
          return [
            "div",
            {},
            ["span", e, Oe(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Je(u) ? " (readonly)" : ""}`
          ];
        if (Je(u))
          return [
            "div",
            {},
            ["span", e, Oe(u) ? "ShallowReadonly" : "Readonly"],
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
    const h = [];
    u.type.props && u.props && h.push(i("props", W(u.props))), u.setupState !== Z && h.push(i("setup", u.setupState)), u.data !== Z && h.push(i("data", W(u.data)));
    const m = a(u, "computed");
    m && h.push(i("computed", m));
    const x = a(u, "inject");
    return x && h.push(i("injected", x)), h.push([
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
    ]), h;
  }
  function i(u, h) {
    return h = le({}, h), Object.keys(h).length ? [
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
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          l(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ee(u) ? ["object", { object: h ? W(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const m = u.type;
    if (F(m))
      return;
    const x = {};
    for (const V in u.ctx)
      f(m, V, h) && (x[V] = u.ctx[V]);
    return x;
  }
  function f(u, h, m) {
    const x = u[m];
    if (k(x) && x.includes(h) || ee(x) && h in x || u.extends && f(u.extends, h, m) || u.mixins && u.mixins.some((V) => f(V, h, m)))
      return !0;
  }
  function d(u) {
    return Oe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Jo = "3.5.18", Le = g.NODE_ENV !== "production" ? C : de;
var be = {};
let Br;
const Yo = typeof window < "u" && window.trustedTypes;
if (Yo)
  try {
    Br = /* @__PURE__ */ Yo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    be.NODE_ENV !== "production" && Le(`Error creating trusted types policy: ${e}`);
  }
const Ai = Br ? (e) => Br.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, zo = lt && /* @__PURE__ */ lt.createElement("template"), kc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? lt.createElementNS(Pc, e) : t === "mathml" ? lt.createElementNS(Mc, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
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
      zo.innerHTML = Ai(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = zo.content;
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
const qo = Symbol("_vod"), Fc = Symbol("_vsh"), Lc = Symbol(be.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hc = /(^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const r = e.style, o = oe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Un(r, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Un(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Un(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Lc];
      i && (n += ";" + i), r.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  qo in e && (e[qo] = s ? r.display : "", e[Fc] && (r.display = "none"));
}
const Bc = /[^\\];\s*$/, Go = /\s*!important$/;
function Un(e, t, n) {
  if (k(n))
    n.forEach((r) => Un(e, t, r));
  else if (n == null && (n = ""), be.NODE_ENV !== "production" && Bc.test(n) && Le(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Kc(e, t);
    Go.test(n) ? e.setProperty(
      Te(r),
      n.replace(Go, ""),
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
    be.NODE_ENV !== "production" && !i && Le(
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
    i.value = be.NODE_ENV !== "production" ? rs(r, t) : r;
  else {
    const [l, a] = Yc(t);
    if (r) {
      const f = s[t] = Gc(
        be.NODE_ENV !== "production" ? rs(r, t) : r,
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
const zc = /* @__PURE__ */ Promise.resolve(), qc = () => xr || (zc.then(() => xr = 0), xr = Date.now());
function Gc(e, t) {
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
  return n.value = e, n.attached = qc(), n;
}
function rs(e, t) {
  return F(e) || k(e) ? e : (Le(
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
  t === "class" ? jc(e, r, i) : t === "style" ? Uc(e, n, r) : wn(t) ? Bn(t) || Jc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, i)) ? (es(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qo(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? es(e, Ve(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qo(e, t, r, i));
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
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== us ? this._root = this.shadowRoot : (be.NODE_ENV !== "production" && this.shadowRoot && Le(
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
    this._connected = !1, zn(() => {
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
      if (s && !k(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = Oo(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ve(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : be.NODE_ENV !== "production" && i && Le(
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
        q(this, r) ? be.NODE_ENV !== "production" && Le(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => he(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = k(n) ? n : Object.keys(n || {});
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
      this._instance = r, r.ce = this, r.isCE = !0, be.NODE_ENV !== "production" && (r.ceReload = (s) => {
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
    if (be.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
const is = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (n) => Ft(t, n) : t;
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
}, au = /* @__PURE__ */ le({ patchProp: Zc }, kc);
let cs;
function Ri() {
  return cs || (cs = nc(au));
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
        Le(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Le(r), n;
      },
      set() {
        Le(r);
      }
    });
  }
}
function pu(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return be.NODE_ENV !== "production" && !t && Le(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return be.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Le(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var hu = {};
function gu() {
  Rc();
}
hu.NODE_ENV !== "production" && gu();
var Pi = "vercel.ai.error", mu = Symbol.for(Pi), Mi, _u = class ki extends Error {
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
Mi = mu;
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
var Dt = { exports: {} }, ps;
function xu() {
  if (ps) return Dt.exports;
  ps = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function r(l, a, f) {
    f == null && a !== null && typeof a == "object" && (f = a, a = void 0), e && Buffer.isBuffer(l) && (l = l.toString()), l && l.charCodeAt(0) === 65279 && (l = l.slice(1));
    const d = JSON.parse(l, a);
    if (d === null || typeof d != "object")
      return d;
    const u = f && f.protoAction || "error", h = f && f.constructorAction || "error";
    if (u === "ignore" && h === "ignore")
      return d;
    if (u !== "ignore" && h !== "ignore") {
      if (t.test(l) === !1 && n.test(l) === !1)
        return d;
    } else if (u !== "ignore" && h === "ignore") {
      if (t.test(l) === !1)
        return d;
    } else if (n.test(l) === !1)
      return d;
    return o(d, { protoAction: u, constructorAction: h, safe: f && f.safe });
  }
  function o(l, { protoAction: a = "error", constructorAction: f = "error", safe: d } = {}) {
    let u = [l];
    for (; u.length; ) {
      const h = u;
      u = [];
      for (const m of h) {
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
        for (const x in m) {
          const V = m[x];
          V && typeof V == "object" && u.push(V);
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
  return Dt.exports = s, Dt.exports.default = s, Dt.exports.parse = s, Dt.exports.safeParse = i, Dt.exports.scan = o, Dt.exports;
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
var bn = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, yn = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, En = {
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
}, vn = {
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
}, Nn = {
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
  bn,
  yn,
  En,
  vn,
  Nn
];
bn.code + "", yn.code + "", En.code + "", vn.code + "", Nn.code + "";
bn.name + "", bn.code, yn.name + "", yn.code, En.name + "", En.code, vn.name + "", vn.code, Nn.name + "", Nn.code;
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
}, zu = {
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
  zu,
  qu,
  Gu,
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
  onToolResultPart: h,
  onMessageAnnotationsPart: m,
  onFinishMessagePart: x,
  onFinishStepPart: V,
  onStartStepPart: z
}) {
  const L = e.getReader(), j = new TextDecoder(), P = [];
  let K = 0;
  for (; ; ) {
    const { value: D } = await L.read();
    if (D && (P.push(D), K += D.length, D[D.length - 1] !== rf))
      continue;
    if (P.length === 0)
      break;
    const N = of(P, K);
    K = 0;
    const O = j.decode(N, { stream: !0 }).split(`
`).filter((w) => w !== "").map(nf);
    for (const { type: w, value: A } of O)
      switch (w) {
        case "text":
          await t?.(A);
          break;
        case "reasoning":
          await n?.(A);
          break;
        case "reasoning_signature":
          await r?.(A);
          break;
        case "redacted_reasoning":
          await o?.(A);
          break;
        case "file":
          await i?.(A);
          break;
        case "source":
          await s?.(A);
          break;
        case "data":
          await l?.(A);
          break;
        case "error":
          await a?.(A);
          break;
        case "message_annotations":
          await m?.(A);
          break;
        case "tool_call_streaming_start":
          await f?.(A);
          break;
        case "tool_call_delta":
          await d?.(A);
          break;
        case "tool_call":
          await u?.(A);
          break;
        case "tool_result":
          await h?.(A);
          break;
        case "finish_message":
          await x?.(A);
          break;
        case "finish_step":
          await V?.(A);
          break;
        case "start_step":
          await z?.(A);
          break;
        default: {
          const U = w;
          throw new Error(`Unknown stream part type: ${U}`);
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
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((N, O) => {
    var w;
    return Math.max(N, (w = O.step) != null ? w : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let h, m, x;
  function V(N, O) {
    const w = u.parts.find(
      (A) => A.type === "tool-invocation" && A.toolInvocation.toolCallId === N
    );
    w != null ? w.toolInvocation = O : u.parts.push({
      type: "tool-invocation",
      toolInvocation: O
    });
  }
  const z = [];
  let L = f ? i?.annotations : void 0;
  const j = {};
  let P = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, K = "unknown";
  function D() {
    const N = [...z];
    L?.length && (u.annotations = L);
    const O = {
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
      message: O,
      data: N,
      replaceLastMessage: f
    });
  }
  await sf({
    stream: e,
    onTextPart(N) {
      h == null ? (h = {
        type: "text",
        text: N
      }, u.parts.push(h)) : h.text += N, u.content += N, D();
    },
    onReasoningPart(N) {
      var O;
      x == null ? (x = { type: "text", text: N }, m?.details.push(x)) : x.text += N, m == null ? (m = {
        type: "reasoning",
        reasoning: N,
        details: [x]
      }, u.parts.push(m)) : m.reasoning += N, u.reasoning = ((O = u.reasoning) != null ? O : "") + N, D();
    },
    onReasoningSignaturePart(N) {
      x != null && (x.signature = N.signature);
    },
    onRedactedReasoningPart(N) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: N.data
      }), x = void 0, D();
    },
    onFilePart(N) {
      u.parts.push({
        type: "file",
        mimeType: N.mimeType,
        data: N.data
      }), D();
    },
    onSourcePart(N) {
      u.parts.push({
        type: "source",
        source: N
      }), D();
    },
    onToolCallStreamingStartPart(N) {
      u.toolInvocations == null && (u.toolInvocations = []), j[N.toolCallId] = {
        text: "",
        step: d,
        toolName: N.toolName,
        index: u.toolInvocations.length
      };
      const O = {
        state: "partial-call",
        step: d,
        toolCallId: N.toolCallId,
        toolName: N.toolName,
        args: void 0
      };
      u.toolInvocations.push(O), V(N.toolCallId, O), D();
    },
    onToolCallDeltaPart(N) {
      const O = j[N.toolCallId];
      O.text += N.argsTextDelta;
      const { value: w } = $u(O.text), A = {
        state: "partial-call",
        step: O.step,
        toolCallId: N.toolCallId,
        toolName: O.toolName,
        args: w
      };
      u.toolInvocations[O.index] = A, V(N.toolCallId, A), D();
    },
    async onToolCallPart(N) {
      const O = {
        state: "call",
        step: d,
        ...N
      };
      if (j[N.toolCallId] != null ? u.toolInvocations[j[N.toolCallId].index] = O : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(O)), V(N.toolCallId, O), D(), n) {
        const w = await n({ toolCall: N });
        if (w != null) {
          const A = {
            state: "result",
            step: d,
            ...N,
            result: w
          };
          u.toolInvocations[u.toolInvocations.length - 1] = A, V(N.toolCallId, A), D();
        }
      }
    },
    onToolResultPart(N) {
      const O = u.toolInvocations;
      if (O == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const w = O.findIndex(
        (U) => U.toolCallId === N.toolCallId
      );
      if (w === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const A = {
        ...O[w],
        state: "result",
        ...N
      };
      O[w] = A, V(N.toolCallId, A), D();
    },
    onDataPart(N) {
      z.push(...N), D();
    },
    onMessageAnnotationsPart(N) {
      L == null ? L = [...N] : L.push(...N), D();
    },
    onFinishStepPart(N) {
      d += 1, h = N.isContinued ? h : void 0, m = void 0, x = void 0;
    },
    onStartStepPart(N) {
      f || (u.id = N.messageId), u.parts.push({ type: "step-start" }), D();
    },
    onFinishMessagePart(N) {
      K = N.finishReason, N.usage != null && (P = Mu(N.usage));
    },
    onErrorPart(N) {
      throw new Error(N);
    }
  }), r?.({ message: u, finishReason: K, usage: P });
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
  fetch: h = uf(),
  lastMessage: m,
  requestType: x = "generate"
}) {
  var V, z, L;
  const P = await (x === "resume" ? h(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (V = s?.()) == null ? void 0 : V.signal,
    credentials: r
  }) : h(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (z = s?.()) == null ? void 0 : z.signal,
    credentials: r
  })).catch((K) => {
    throw i(), K;
  });
  if (l)
    try {
      await l(P);
    } catch (K) {
      throw K;
    }
  if (!P.ok)
    throw i(), new Error(
      (L = await P.text()) != null ? L : "Failed to fetch the chat response."
    );
  if (!P.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await cf({
        stream: P.body,
        update: a,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await lf({
        stream: P.body,
        update: a,
        lastMessage: m,
        onToolCall: d,
        onFinish({ message: K, finishReason: D, usage: N }) {
          f && K != null && f(K, { usage: N, finishReason: D });
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
function Pn(e) {
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
    zi(s) && // limit the number of automatic steps:
    ((o = Jr(s.toolInvocations)) != null ? o : 0) < n
  );
}
function zi(e) {
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
var at = function() {
  return at = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, at.apply(this, arguments);
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
}, qi = new Eo(), tr = new Eo(), Cr = new Eo(), Gi = {
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
  return n === void 0 && (n = qi), r === void 0 && (r = Gi.ttl), Ut(void 0, void 0, void 0, function() {
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
            } catch (h) {
              console.error("swrv(mutate): failed to set cache", h);
            }
          return f = tr.get(e), f && f.data.length && (d = f.data.filter(function(h) {
            return h.key === e;
          }), d.forEach(function(h, m) {
            typeof a.data < "u" && (h.data = a.data), h.error = a.error, h.isValidating = a.isValidating, h.isLoading = a.isValidating;
            var x = m === d.length - 1;
            x || delete d[m];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function bs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = at({}, Gi), i = !1, l = !1, a = go(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = at(at({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, h = typeof r == "function" ? r : Fe(r);
  typeof o > "u" && (o = s.fetcher);
  var m = null;
  m || (m = xn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var x = function(j, P) {
    return Ut(e, void 0, void 0, function() {
      var K, D, N, O, w, A, U, se = this;
      return Bt(this, function(ie) {
        switch (ie.label) {
          case 0:
            return K = m.data === void 0, D = h.value, D ? (N = s.cache.get(D), O = N && N.data, m.isValidating = !0, m.isLoading = !O, O && (m.data = O.data, m.error = O.error), w = j || o, !w || !s.isDocumentVisible() && !K || P?.forceRevalidate !== void 0 && !P?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : N && (A = !!(Date.now() - N.createdAt >= s.dedupingInterval || P?.forceRevalidate), !A) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (U = function() {
              return Ut(se, void 0, void 0, function() {
                var re, ye, pe, ae;
                return Bt(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return re = Cr.get(D), re ? [3, 2] : (ye = Array.isArray(D) ? D : [D], pe = w.apply(void 0, Ef([], yf(ye), !1)), Cr.set(D, pe, s.dedupingInterval), [4, _s(D, pe, s.cache, u)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, _s(D, re.data, s.cache, u)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Cr.delete(D), m.error !== void 0 && (ae = !i && s.shouldRetryOnError && (P ? P.shouldRetryOnError : !0), ae && Nf(x, P ? P.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, O && s.revalidateDebounce ? (setTimeout(function() {
              return Ut(se, void 0, void 0, function() {
                return Bt(this, function(re) {
                  switch (re.label) {
                    case 0:
                      return i ? [3, 2] : [4, U()];
                    case 1:
                      re.sent(), re.label = 2;
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
            return [4, U()];
          case 2:
            ie.sent(), ie.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, V = function() {
    return Ut(e, void 0, void 0, function() {
      return Bt(this, function(j) {
        return [2, x(null, { shouldRetryOnError: !1 })];
      });
    });
  }, z = null;
  lo(function() {
    var j = function() {
      return Ut(e, void 0, void 0, function() {
        return Bt(this, function(P) {
          switch (P.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, x()] : [3, 2];
            case 1:
              return P.sent(), [3, 3];
            case 2:
              z && clearTimeout(z), P.label = 3;
            case 3:
              return s.refreshInterval && !i && (z = setTimeout(j, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (z = setTimeout(j, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", V, !1), window.addEventListener("focus", V, !1));
  }), ao(function() {
    i = !0, z && clearTimeout(z), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", V, !1), window.removeEventListener("focus", V, !1));
    var j = tr.get(h.value);
    j && (j.data = j.data.filter(function(P) {
      return P !== m;
    }));
  });
  try {
    bt(h, function(j) {
      Je(h) || (h.value = j), m.key = j, m.isValidating = !!j, vf(h.value, m, u), !d && !l && h.value && x(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var L = at(at({}, Ll(m)), { mutate: function(j, P) {
    return x(j, at(at({}, P), { forceRevalidate: !0 }));
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
  onFinish: l,
  onError: a,
  credentials: f,
  headers: d,
  body: u,
  generateId: h = bo,
  onToolCall: m,
  fetch: x,
  keepLastMessageOnError: V = !0,
  maxSteps: z = 1,
  experimental_prepareRequestBody: L
} = {
  maxSteps: 1
}) {
  var j, P;
  const K = t ?? h(), D = `${e}|${K}`, { data: N, mutate: O } = Of(
    D,
    () => {
      var Y;
      return (Y = ys[D]) != null ? Y : Pn(n);
    }
  ), w = (j = Es[K]) != null ? j : Es[K] = Fe(
    "ready"
  );
  (P = N.value) != null || (N.value = Pn(n));
  const A = (Y) => (ys[D] = Y, O()), U = N, se = Fe(void 0), ie = Fe(void 0);
  let re = null;
  async function ye(Y, { data: ce, headers: _e, body: Ae } = {}) {
    var De, Ye, Mt;
    se.value = void 0, w.value = "submitted";
    const Tn = U.value.length, wt = Jr(
      (De = U.value[U.value.length - 1]) == null ? void 0 : De.toolInvocations
    );
    try {
      re = new AbortController();
      const pt = Pn(Y), c = pt;
      A(c);
      const p = (Ye = ie.value) != null ? Ye : [], _ = o ? c : c.map(
        ({
          role: E,
          content: b,
          experimental_attachments: y,
          data: T,
          annotations: I,
          toolInvocations: S,
          parts: v
        }) => ({
          role: E,
          content: b,
          ...y !== void 0 && {
            experimental_attachments: y
          },
          ...T !== void 0 && { data: T },
          ...I !== void 0 && { annotations: I },
          ...S !== void 0 && { toolInvocations: S },
          ...v !== void 0 && { parts: v }
        })
      );
      await ff({
        api: e,
        body: (Mt = L?.({
          id: K,
          messages: c,
          requestData: ce,
          requestBody: Ae
        })) != null ? Mt : {
          id: K,
          messages: _,
          data: ce,
          ...he(u),
          // Use unref to unwrap the ref value
          ...Ae
        },
        streamProtocol: s,
        headers: {
          ...d,
          ..._e
        },
        abortController: () => re,
        credentials: f,
        onResponse: i,
        onUpdate({ message: E, data: b, replaceLastMessage: y }) {
          w.value = "streaming", A([
            ...y ? c.slice(0, c.length - 1) : c,
            E
          ]), b?.length && (ie.value = [...p, ...b]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          V || A(pt);
        },
        generateId: h,
        onToolCall: m,
        fetch: x,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Yr(c[c.length - 1])
      }), w.value = "ready";
    } catch (pt) {
      if (pt.name === "AbortError")
        return re = null, w.value = "ready", null;
      a && pt instanceof Error && a(pt), se.value = pt, w.value = "error";
    } finally {
      re = null;
    }
    df({
      originalMaxToolInvocationStep: wt,
      originalMessageCount: Tn,
      maxSteps: z,
      messages: U.value
    }) && await ye(U.value);
  }
  const pe = async (Y, ce) => {
    var _e, Ae, De;
    const Ye = await gs(
      (_e = ce?.experimental_attachments) != null ? _e : Y.experimental_attachments
    );
    return ye(
      U.value.concat({
        ...Y,
        id: (Ae = Y.id) != null ? Ae : h(),
        createdAt: (De = Y.createdAt) != null ? De : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Yi(Y)
      }),
      ce
    );
  }, ae = async (Y) => {
    const ce = U.value;
    return ce.length === 0 ? null : ce[ce.length - 1].role === "assistant" ? ye(ce.slice(0, -1), Y) : ye(ce, Y);
  }, B = () => {
    re && (re.abort(), re = null);
  }, J = (Y) => {
    typeof Y == "function" && (Y = Y(U.value)), A(Pn(Y));
  }, xe = (Y) => {
    typeof Y == "function" && (Y = Y(ie.value)), ie.value = Y;
  }, st = Fe(r), Nt = async (Y, ce = {}) => {
    var _e;
    (_e = Y?.preventDefault) == null || _e.call(Y);
    const Ae = st.value;
    if (!Ae && !ce.allowEmptySubmit)
      return;
    const De = await gs(
      ce.experimental_attachments
    );
    ye(
      U.value.concat({
        id: h(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ae,
        role: "user",
        experimental_attachments: De.length > 0 ? De : void 0,
        parts: [{ type: "text", text: Ae }]
      }),
      ce
    ), st.value = "";
  }, dt = ({
    toolCallId: Y,
    result: ce
  }) => {
    const _e = U.value;
    if (pf({
      messages: _e,
      toolCallId: Y,
      toolResult: ce
    }), A(_e), w.value === "submitted" || w.value === "streaming")
      return;
    const Ae = _e[_e.length - 1];
    zi(Ae) && ye(_e);
  };
  return {
    id: K,
    messages: U,
    append: pe,
    error: se,
    reload: ae,
    stop: B,
    setMessages: J,
    input: st,
    handleSubmit: Nt,
    isLoading: mo(
      () => w.value === "submitted" || w.value === "streaming"
    ),
    status: w,
    data: ie,
    setData: xe,
    addToolResult: dt
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
  const t = Fe(!1), n = Fe(""), r = Fe(!0);
  let o = null, s = [], i = null;
  const l = () => {
    const h = window.SpeechRecognition || window.webkitSpeechRecognition;
    return r.value = !!h, h;
  }, a = () => {
    const h = l();
    return h ? (i = new h(), i.continuous = !0, i.interimResults = !0, i.lang = "zh-CN", i.onresult = (m) => {
      let x = "";
      for (let V = m.resultIndex; V < m.results.length; V++)
        m.results[V].isFinal && (x += m.results[V][0].transcript);
      if (x) {
        const V = x.trim();
        if (["结束对话", "退出语音", "关闭语音", "结束语音", "停止录音", "结束对话。", "退出语音。", "关闭语音。", "结束语音。", "停止录音。"].includes(V)) {
          console.log("[ASR] 检测到结束对话命令，自动停止录音"), d();
          return;
        }
        e(x);
      }
    }, i.onerror = (m) => {
      n.value = `语音识别错误: ${m.error}`, t.value = !1;
    }, i.onend = () => {
      t.value = !1;
    }, i) : null;
  }, f = async () => {
    if (!t.value) {
      if (n.value = "", l())
        try {
          if (i || (i = a()), i) {
            i.start(), t.value = !0;
            return;
          }
        } catch (h) {
          console.warn("Web Speech API 启动失败，使用录音模式:", h.message);
        }
      try {
        const h = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        o = new MediaRecorder(h), s = [], o.ondataavailable = (m) => {
          s.push(m.data);
        }, o.onstop = async () => {
          const m = new Blob(s, { type: o?.mimeType });
          await u(m), h.getTracks().forEach((x) => x.stop());
        }, o.start(), t.value = !0;
      } catch (h) {
        n.value = `启动录音失败: ${h.message}`;
      }
    }
  }, d = () => {
    if (t.value) {
      if (i && l())
        try {
          i.stop();
        } catch (h) {
          console.warn("停止语音识别失败:", h);
        }
      o && o.stop(), t.value = !1;
    }
  }, u = async (h) => {
    n.value = "当前环境不支持服务器端转录，请使用支持 Web Speech API 的浏览器";
  };
  return {
    isRecording: sn(t),
    error: sn(n),
    isSupported: sn(r),
    start: f,
    stop: d
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
      // 修复API路径 - 移除错误的路径处理逻辑
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat"),
      onToolCall: async ({ toolCall: O }) => {
        if (console.log("[onToolCall] 工具被调用:", O), O.toolName === "navigateToPage") {
          const w = O.args.path;
          return console.log(`[onToolCall] 导航工具调用: ${w}`), D(w), { path: w, success: !0 };
        }
        if (O.toolName === "zoomInOnPhoto") {
          const w = O.args.photoTitle;
          return console.log(`[onToolCall] 图片放大工具调用: ${w}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
            detail: { title: w },
            bubbles: !0,
            composed: !0
          })), { title: w };
        }
        if (O.toolName === "zoomOutPhoto") {
          const w = O.args.action || "close";
          return console.log(`[onToolCall] 图片缩小工具调用: ${w}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
            detail: { action: w },
            bubbles: !0,
            composed: !0
          })), { action: w, success: !0 };
        }
        return {};
      }
    }), r = n.messages, o = n.input, s = n.handleSubmit, i = n.isLoading, l = n.error, { isRecording: a, start: f, stop: d, error: u } = Df((O) => {
      const w = O.trim();
      if (["发送", "提交", "发出", "发送。", "提交。", "发出。"].includes(w)) {
        if (o.value.trim()) {
          console.log("[语音指令] 执行发送，内容:", `"${o.value}"`);
          const A = new Event("submit", { bubbles: !0, cancelable: !0 });
          s(A);
        } else
          console.log("[语音指令] 输入框为空，无可发送内容");
        return;
      }
      if (["清空", "清除", "删除", "清除。", "清空。", "删除。"].includes(w)) {
        console.log("[语音指令] 执行清空"), o.value = "";
        return;
      }
      console.log(`[语音指令] 设置输入内容: "${w}"`), o.value = w;
    }), h = Fe(!1), m = xn({ x: 0, y: 0 }), x = Fe(null), V = Fe(null), z = Fe(!1);
    function L() {
      h.value = !h.value;
    }
    function j() {
      z.value || L();
    }
    function P(O) {
      return O.trim().startsWith("<audio");
    }
    const K = mo(() => {
      if (!i.value) return !1;
      const O = [...r.value].reverse().find((w) => w.role === "user");
      return !!(O && /摇骰子|掷骰子/.test(O.content));
    });
    bt(r, async (O, w) => {
      await zn(), V.value && (V.value.scrollTop = V.value.scrollHeight);
    }, { deep: !0 });
    function D(O) {
      if (!O.startsWith("/")) {
        console.error(`[Navigation] 无效路径: ${O}`);
        return;
      }
      console.log(`[Navigation] 执行跳转到: ${O}`);
      const w = new CustomEvent("ai-navigate", {
        detail: { path: O },
        bubbles: !0,
        composed: !0
      });
      window.dispatchEvent(w), console.log(`[Navigation] 事件已派发: ${O}`);
    }
    bt(r, async (O, w) => {
      if (!O || O.length === (w?.length || 0)) return;
      const A = O[O.length - 1];
      if (A) {
        if (console.log("最新消息对象结构:", JSON.stringify(A, null, 2)), A.role === "tool" && A.toolName)
          switch (A.toolName) {
            case "navigateToPage": {
              const U = A.result;
              if (U?.page) {
                console.log(`[Watcher] 检测到导航指令, 目标: ${U.page}`);
                let se = "/";
                switch (U.page) {
                  case "portfolio":
                  case "blog":
                  case "archives":
                    se = "/";
                    break;
                  case "about":
                    se = "/about";
                    break;
                  case "contact":
                    se = "/contact";
                    break;
                  default:
                    console.error(`[Watcher] 未知导航目标: ${U.page}`);
                    return;
                }
                console.log(`[Watcher] 执行页面跳转到: ${se}`), window.location.href = se;
              }
              break;
            }
            case "zoomInOnPhoto": {
              const U = A.result;
              U?.title && (console.log(`[Watcher] 检测到放大图片指令, 目标: ${U.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
                detail: { title: U.title },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
            case "zoomOutPhoto": {
              const U = A.result;
              U?.action && (console.log(`[Watcher] 检测到缩小图片指令, 动作: ${U.action}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
                detail: { action: U.action },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
          }
        await zn(), V.value && (V.value.scrollTop = V.value.scrollHeight);
      }
    }, { deep: !0 }), bt(l, (O) => {
      O && console.error("[Assistant] An error occurred:", O);
    }), bt(u, (O) => {
      if (O && (console.error("[ASR] 语音识别错误:", O), V.value)) {
        const w = document.createElement("div");
        w.className = "msg-line msg-ai error-msg", w.textContent = `语音识别错误: ${O}`, V.value.appendChild(w), V.value.scrollTop = V.value.scrollHeight;
      }
    });
    function N(O) {
      O.preventDefault();
      const w = x.value, A = O.clientX, U = O.clientY, se = m.x, ie = m.y;
      let re = !1;
      function ye(ae) {
        const B = ae.clientX - A, J = ae.clientY - U;
        if (!re && (Math.abs(B) > 5 || Math.abs(J) > 5) && (re = !0, z.value = !0), re) {
          const xe = Math.min(Math.max(0, se + B), window.innerWidth - w.offsetWidth), st = Math.min(Math.max(0, ie + J), window.innerHeight - w.offsetHeight);
          m.x = xe, m.y = st;
        }
      }
      function pe() {
        document.removeEventListener("mousemove", ye), document.removeEventListener("mouseup", pe), setTimeout(() => z.value = !1, 10);
      }
      document.addEventListener("mousemove", ye), document.addEventListener("mouseup", pe);
    }
    return lo(() => {
      const O = x.value, w = 20;
      m.x = window.innerWidth - O.offsetWidth - w, m.y = window.innerHeight - O.offsetHeight - w;
    }), (O, w) => (Re(), $e("div", {
      ref_key: "containerRef",
      ref: x,
      class: "ai-bubble-container",
      style: ir({ left: m.x + "px", top: m.y + "px" })
    }, [
      gt("div", {
        class: "floating-ball",
        onMousedown: N,
        onClick: j
      }, "AI", 32),
      h.value ? (Re(), $e("div", Sf, [
        h.value ? (Re(), $e("div", {
          key: 0,
          class: "close-btn",
          onClick: L
        }, "×")) : Qt("", !0),
        gt("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: V
        }, [
          he(r).length === 0 ? (Re(), $e("div", If, "有什么可以帮您的吗？")) : Qt("", !0),
          (Re(!0), $e(je, null, Ca(he(r), (A) => (Re(), $e("div", {
            key: A.id,
            class: fn(["msg-line", A.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            A.role === "user" || A.role === "assistant" ? (Re(), $e(je, { key: 0 }, [
              P(A.content) ? (Re(), $e("div", {
                key: 0,
                innerHTML: A.content
              }, null, 8, Cf)) : (Re(), $e("div", Tf, Ds(A.content), 1))
            ], 64)) : Qt("", !0)
          ], 2))), 128)),
          he(i) ? (Re(), $e("div", Vf, [
            K.value ? (Re(), $e("span", Af, "⚀⚂⚅")) : (Re(), $e("span", Rf, "思考中..."))
          ])) : Qt("", !0)
        ], 512),
        gt("form", {
          onSubmit: w[3] || (w[3] = as(
            //@ts-ignore
            (...A) => he(s) && he(s)(...A),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          pa(gt("textarea", {
            "onUpdate:modelValue": w[0] || (w[0] = (A) => ue(o) ? o.value = A : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: w[1] || (w[1] = lu(as(
              //@ts-ignore
              (...A) => he(s) && he(s)(...A),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ru, he(o)]
          ]),
          gt("button", {
            type: "button",
            class: fn(["btn-voice", { listening: he(a) }]),
            onClick: w[2] || (w[2] = (A) => he(a) ? he(d)() : he(f)()),
            title: "语音输入"
          }, "🎤", 2),
          gt("button", {
            type: "submit",
            class: "btn-send",
            disabled: he(i) || !he(o).trim()
          }, "➤", 8, Pf)
        ], 32)
      ])) : Qt("", !0)
    ], 4));
  }
}), kf = ".ai-bubble-container{position:fixed;z-index:99999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden;z-index:99999}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", $f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, jf = /* @__PURE__ */ $f(Mf, [["styles", [kf]]]), Ff = /* @__PURE__ */ eu(jf);
customElements.define("ai-chat-bubble", Ff);
