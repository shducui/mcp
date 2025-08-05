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
const Z = vs.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ut = vs.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
}, Xi = () => !1, wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Yr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zi = Object.prototype.hasOwnProperty, q = (e, t) => Zi.call(e, t), P = Array.isArray, It = (e) => tr(e) === "[object Map]", Ns = (e) => tr(e) === "[object Set]", L = (e) => typeof e == "function", oe = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", qr = (e) => (ee(e) || L(e)) && L(e.then) && L(e.catch), ws = Object.prototype.toString, tr = (e) => ws.call(e), Gr = (e) => tr(e).slice(8, -1), nr = (e) => tr(e) === "[object Object]", zr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ct(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qi = /* @__PURE__ */ ct(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, el = /-(\w)/g, Te = rr(
  (e) => e.replace(el, (t, n) => n ? n.toUpperCase() : "")
), tl = /\B([A-Z])/g, Ce = rr(
  (e) => e.replace(tl, "-$1").toLowerCase()
), or = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = rr(
  (e) => e ? `on${or(e)}` : ""
), mt = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, un = (e, t, n, r = !1) => {
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
const On = () => xo || (xo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sr(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = oe(r) ? sl(r) : sr(r);
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
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const r = fn(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const il = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ll = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", al = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", cl = /* @__PURE__ */ ct(il), ul = /* @__PURE__ */ ct(ll), fl = /* @__PURE__ */ ct(al), dl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pl = /* @__PURE__ */ ct(dl);
function Os(e) {
  return !!e || e === "";
}
const xs = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => oe(e) ? e : e == null ? "" : P(e) || ee(e) && (e.toString === ws || !L(e.toString)) ? xs(e) ? Ds(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => xs(t) ? Ss(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[gr(r, s) + " =>"] = o, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gr(n))
} : bt(t) ? gr(t) : ee(t) && !P(t) && !nr(t) ? String(t) : t, gr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var te = {};
function Ue(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class hl {
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
    } else te.NODE_ENV !== "production" && Ue("cannot run an inactive effect scope.");
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
function gl() {
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
    const t = X, n = Be;
    X = this, Be = !0;
    try {
      return this.fn();
    } finally {
      te.NODE_ENV !== "production" && X !== this && Ue(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), As(this), X = t, Be = n, this.flags &= -3;
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
    r.version === -1 ? (r === n && (n = o), Qr(r), _l(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = Be;
  X = e, Be = !0;
  try {
    Vs(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, Be = r, As(e), e.flags &= -3;
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
function _l(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Be = !0;
const Ps = [];
function Ke() {
  Ps.push(Be), Be = !1;
}
function We() {
  const e = Ps.pop();
  Be = e === void 0 ? !0 : e;
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
class ml {
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
      n = this.activeLink = new ml(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Ms(n);
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
    this.version++, dn++, this.notify(t);
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
const Kn = /* @__PURE__ */ new WeakMap(), Ct = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Vr = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), pn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ue(e, t, n) {
  if (Be && X) {
    let r = Kn.get(e);
    r || Kn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new eo()), o.map = r, o.key = n), te.NODE_ENV !== "production" ? o.track({
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
  if (Xr(), t === "clear")
    i.forEach(l);
  else {
    const a = P(e), f = a && zr(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((u, h) => {
        (h === "length" || h === pn || !bt(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(pn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Ct)), It(e) && l(i.get(Vr)));
          break;
        case "delete":
          a || (l(i.get(Ct)), It(e) && l(i.get(Vr)));
          break;
        case "set":
          It(e) && l(i.get(Ct));
          break;
      }
  }
  Zr();
}
function yl(e, t) {
  const n = Kn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = K(e);
  return t === e ? t : (ue(t, "iterate", pn), Oe(e) ? t : t.map(ge));
}
function ir(e) {
  return ue(e = K(e), "iterate", pn), e;
}
const bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return mr(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => P(t) ? Mt(t) : t)
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
const El = Array.prototype;
function st(e, t, n, r, o, s) {
  const i = ir(e), l = i !== e && !Oe(e), a = i[t];
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
  const o = ir(e);
  let s = n;
  return o !== e && (Oe(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, ge(l), a, e);
  }), o[t](s, ...r);
}
function yr(e, t, n) {
  const r = K(e);
  ue(r, "iterate", pn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && hn(n[0]) ? (n[0] = K(n[0]), r[t](...n)) : o;
}
function zt(e, t, n = []) {
  Ke(), Xr();
  const r = K(e)[t].apply(e, n);
  return Zr(), We(), r;
}
const vl = /* @__PURE__ */ ct("__proto__,__v_isRef,__isVue"), ks = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function Nl(e) {
  bt(e) || (e = String(e));
  const t = K(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
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
      return r === (o ? s ? Us : Bs : s ? Hs : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = P(t);
    if (!o) {
      let a;
      if (i && (a = bl[n]))
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
      ae(t) ? t : r
    );
    return (bt(n) ? ks.has(n) : vl(n)) || (o || ue(t, "get", n), s) ? l : ae(l) ? i && zr(n) ? l : l.value : ee(l) ? o ? sn(l) : xn(l) : l;
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
      if (!Oe(r) && !Je(r) && (s = K(s), r = K(r)), !P(t) && ae(s) && !ae(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = P(t) && zr(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      r,
      ae(t) ? t : o
    );
    return t === K(o) && (i ? mt(r, s) && Qe(t, "set", n, r, s) : Qe(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = q(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Qe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!bt(n) || !ks.has(n)) && ue(t, "has", n), r;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      P(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class Fs extends $s {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return te.NODE_ENV !== "production" && Ue(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return te.NODE_ENV !== "production" && Ue(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const wl = /* @__PURE__ */ new js(), Ol = /* @__PURE__ */ new Fs(), xl = /* @__PURE__ */ new js(!0), Dl = /* @__PURE__ */ new Fs(!0), Ar = (e) => e, Vn = (e) => Reflect.getPrototypeOf(e);
function Sl(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = K(o), i = It(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), d = n ? Ar : t ? Wn : ge;
    return !t && ue(
      s,
      "iterate",
      a ? Vr : Ct
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
      Ue(
        `${or(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Il(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      e || (mt(o, l) && ue(i, "get", o), ue(i, "get", l));
      const { has: a } = Vn(i), f = t ? Ar : e ? Wn : ge;
      if (a.call(i, o))
        return f(s.get(o));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ue(K(o), "iterate", Ct), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      return e || (mt(o, l) && ue(i, "has", o), ue(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const i = this, l = i.__v_raw, a = K(l), f = t ? Ar : e ? Wn : ge;
      return !e && ue(a, "iterate", Ct), l.forEach((d, u) => o.call(s, f(d), f(u), i));
    }
  };
  return ie(
    n,
    e ? {
      add: An("add"),
      set: An("set"),
      delete: An("delete"),
      clear: An("clear")
    } : {
      add(o) {
        !t && !Oe(o) && !Je(o) && (o = K(o));
        const s = K(this);
        return Vn(s).has.call(s, o) || (s.add(o), Qe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Oe(s) && !Je(s) && (s = K(s));
        const i = K(this), { has: l, get: a } = Vn(i);
        let f = l.call(i, o);
        f ? te.NODE_ENV !== "production" && Io(i, l, o) : (o = K(o), f = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), f ? mt(s, d) && Qe(i, "set", o, s, d) : Qe(i, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: i, get: l } = Vn(s);
        let a = i.call(s, o);
        a ? te.NODE_ENV !== "production" && Io(s, i, o) : (o = K(o), a = i.call(s, o));
        const f = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && Qe(s, "delete", o, void 0, f), d;
      },
      clear() {
        const o = K(this), s = o.size !== 0, i = te.NODE_ENV !== "production" ? It(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
function lr(e, t) {
  const n = Il(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    q(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Cl = {
  get: /* @__PURE__ */ lr(!1, !1)
}, Tl = {
  get: /* @__PURE__ */ lr(!1, !0)
}, Vl = {
  get: /* @__PURE__ */ lr(!0, !1)
}, Al = {
  get: /* @__PURE__ */ lr(!0, !0)
};
function Io(e, t, n) {
  const r = K(n);
  if (r !== n && t.call(e, r)) {
    const o = Gr(e);
    Ue(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ls = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap();
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
  return Je(e) ? e : ar(
    e,
    !1,
    wl,
    Cl,
    Ls
  );
}
function Ml(e) {
  return ar(
    e,
    !1,
    xl,
    Tl,
    Hs
  );
}
function sn(e) {
  return ar(
    e,
    !0,
    Ol,
    Vl,
    Bs
  );
}
function tt(e) {
  return ar(
    e,
    !0,
    Dl,
    Al,
    Us
  );
}
function ar(e, t, n, r, o) {
  if (!ee(e))
    return te.NODE_ENV !== "production" && Ue(
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
function Oe(e) {
  return !!(e && e.__v_isShallow);
}
function hn(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function kl(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const ge = (e) => ee(e) ? xn(e) : e, Wn = (e) => ee(e) ? sn(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Fe(e) {
  return $l(e, !1);
}
function $l(e, t) {
  return ae(e) ? e : new jl(e, t);
}
class jl {
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
  return ae(e) ? e.value : e;
}
const Fl = {
  get: (e, t, n) => t === "__v_raw" ? e : he(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ae(o) && !ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ks(e) {
  return Tt(e) ? e : new Proxy(e, Fl);
}
function Ll(e) {
  te.NODE_ENV !== "production" && !hn(e) && Ue("toRefs() expects a reactive object but received a plain one.");
  const t = P(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Bl(e, n);
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
    return yl(K(this._object), this._key);
  }
}
function Bl(e, t, n) {
  const r = e[t];
  return ae(r) ? r : new Hl(e, t, n);
}
class Ul {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new eo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
    this.setter ? this.setter(t) : te.NODE_ENV !== "production" && Ue("Write operation failed: computed value is readonly");
  }
}
function Kl(e, t, n = !1) {
  let r, o;
  return L(e) ? r = e : (r = e.get, o = e.set), new Ul(r, o, n);
}
const Rn = {}, Jn = /* @__PURE__ */ new WeakMap();
let St;
function Wl(e, t = !1, n = St) {
  if (n) {
    let r = Jn.get(n);
    r || Jn.set(n, r = []), r.push(e);
  } else te.NODE_ENV !== "production" && !t && Ue(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jl(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (y) => {
    (n.onWarn || Ue)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (y) => o ? y : Oe(y) || o === !1 || o === 0 ? at(y, 1) : at(y);
  let u, h, _, O, T = !1, J = !1;
  if (ae(e) ? (h = () => e.value, T = Oe(e)) : Tt(e) ? (h = () => d(e), T = !0) : P(e) ? (J = !0, T = e.some((y) => Tt(y) || Oe(y)), h = () => e.map((y) => {
    if (ae(y))
      return y.value;
    if (Tt(y))
      return d(y);
    if (L(y))
      return a ? a(y, 2) : y();
    te.NODE_ENV !== "production" && f(y);
  })) : L(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
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
      return a ? a(e, 3, [O]) : e(O);
    } finally {
      St = y;
    }
  } : (h = fe, te.NODE_ENV !== "production" && f(e)), t && o) {
    const y = h, b = o === !0 ? 1 / 0 : o;
    h = () => at(y(), b);
  }
  const H = gl(), F = () => {
    u.stop(), H && H.active && Yr(H.effects, u);
  };
  if (s && t) {
    const y = t;
    t = (...b) => {
      y(...b), F();
    };
  }
  let V = J ? new Array(e.length).fill(Rn) : Rn;
  const A = (y) => {
    if (!(!(u.flags & 1) || !u.dirty && !y))
      if (t) {
        const b = u.run();
        if (o || T || (J ? b.some((k, $) => mt(k, V[$])) : mt(b, V))) {
          _ && _();
          const k = St;
          St = u;
          try {
            const $ = [
              b,
              // pass undefined as the old value when it's changed for the first time
              V === Rn ? void 0 : J && V[0] === Rn ? [] : V,
              O
            ];
            V = b, a ? a(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            St = k;
          }
        }
      } else
        u.run();
  };
  return l && l(A), u = new Is(h), u.scheduler = i ? () => i(A, !1) : A, O = (y) => Wl(y, !1, u), _ = u.onStop = () => {
    const y = Jn.get(u);
    if (y) {
      if (a)
        a(y, 4);
      else
        for (const b of y) b();
      Jn.delete(u);
    }
  }, te.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? r ? A(!0) : V = u.run() : i ? i(A.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function at(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ae(e))
    at(e.value, t, n);
  else if (P(e))
    for (let r = 0; r < e.length; r++)
      at(e[r], t, n);
  else if (Ns(e) || It(e))
    e.forEach((r) => {
      at(r, t, n);
    });
  else if (nr(e)) {
    for (const r in e)
      at(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && at(e[r], t, n);
  }
  return e;
}
var g = {};
const Vt = [];
function Mn(e) {
  Vt.push(e);
}
function kn() {
  Vt.pop();
}
let br = !1;
function S(e, ...t) {
  if (br) return;
  br = !0, Ke();
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
          ({ vnode: s }) => `at <${hr(n, s.type)}>`
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
  We(), br = !1;
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${hr(
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
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ae(t) ? (t = Ws(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
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
    Dn(o, t, n);
  }
}
function ot(e, t, n, r) {
  if (L(e)) {
    const o = qt(e, t, n, r);
    return o && qr(o) && o.catch((s) => {
      Dn(s, t, n);
    }), o;
  }
  if (P(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(ot(e[s], t, n, r));
    return o;
  } else g.NODE_ENV !== "production" && S(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Dn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = g.NODE_ENV !== "production" ? to[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  if (g.NODE_ENV !== "production") {
    const s = to[t];
    if (n && Mn(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && kn(), r)
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
const Zl = 100;
function no(e) {
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
function cr(e) {
  if (!(e.flags & 1)) {
    const t = gn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= gn(n) ? Ne.push(e) : Ne.splice(Ql(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  Yn || (Yn = Js.then(zs));
}
function qs(e) {
  P(e) ? Kt.push(...e) : pt && e.id === -1 ? pt.splice(Ft + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Ys();
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
function Gs(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, r) => gn(n) - gn(r)
    );
    if (Kt.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ft = 0; Ft < pt.length; Ft++) {
      const n = pt[Ft];
      g.NODE_ENV !== "production" && ro(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    pt = null, Ft = 0;
  }
}
const gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zs(e) {
  g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = g.NODE_ENV !== "production" ? (n) => ro(e, n) : fe;
  try {
    for (Ze = 0; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      if (n && !(n.flags & 8)) {
        if (g.NODE_ENV !== "production" && t(n))
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
  createRecord: Er(Xs),
  rerender: Er(na),
  reload: Er(ra)
});
const Rt = /* @__PURE__ */ new Map();
function ea(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (Xs(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function ta(e) {
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
function na(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, qn(r.type).render = t), r.renderCache = [], nt = !0, r.update(), nt = !1;
  }));
}
function ra(e, t) {
  const n = Rt.get(e);
  if (!n) return;
  t = qn(t), To(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = qn(s.type);
    let l = $n.get(i);
    l || (i !== n.initialDef && To(i, t), $n.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? cr(() => {
      nt = !0, s.parent.update(), nt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  qs(() => {
    $n.clear();
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
function Sn(e, ...t) {
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
function oa(e, t) {
  Sn("app:init", e, t, {
    Fragment: je,
    Text: In,
    Comment: Me,
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
    r._d && Bo(-1);
    const s = Gn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Gn(s), r._d && Bo(1);
    }
    return g.NODE_ENV !== "production" && Qs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ni(e) {
  Qi(e) && S("Do not use built-in directive ids as custom directive id: " + e);
}
function pa(e, t) {
  if (we === null)
    return g.NODE_ENV !== "production" && S("withDirectives can only be used inside render functions."), e;
  const n = pr(we), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = Z] = t[o];
    s && (L(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && at(i), r.push({
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
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const _a = /* @__PURE__ */ new WeakSet();
function ln(e, t, n, r, o = !1) {
  if (P(e)) {
    e.forEach(
      (O, T) => ln(
        O,
        t && (P(t) ? t[T] : t),
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
  const s = r.shapeFlag & 4 ? pr(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e;
  if (g.NODE_ENV !== "production" && !l) {
    S(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === Z ? l.refs = {} : l.refs, u = l.setupState, h = K(u), _ = u === Z ? () => !1 : (O) => g.NODE_ENV !== "production" && (q(h, O) && !ae(h[O]) && S(
    `Template ref "${O}" used on a non-ref value. It will not work in the production build.`
  ), _a.has(h[O])) ? !1 : q(h, O);
  if (f != null && f !== a && (oe(f) ? (d[f] = null, _(f) && (u[f] = null)) : ae(f) && (f.value = null)), L(a))
    qt(a, l, 12, [i, d]);
  else {
    const O = oe(a), T = ae(a);
    if (O || T) {
      const J = () => {
        if (e.f) {
          const H = O ? _(a) ? u[a] : d[a] : a.value;
          o ? P(H) && Yr(H, s) : P(H) ? H.includes(s) || H.push(s) : O ? (d[a] = [s], _(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else O ? (d[a] = i, _(a) && (u[a] = i)) : T ? (a.value = i, e.k && (d[e.k] = i)) : g.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (J.id = -1, Re(J, n)) : J();
    } else g.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
  }
}
On().requestIdleCallback;
On().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, io = (e) => e.type.__isKeepAlive;
function ma(e, t) {
  si(e, "a", t);
}
function ya(e, t) {
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
      io(o.parent.vnode) && ba(r, t, n, o), o = o.parent;
  }
}
function ba(e, t, n, r) {
  const o = ur(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ao(() => {
    Yr(r[t], o);
  }, n);
}
function ur(e, t, n = _e, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ke();
      const l = Cn(n), a = ot(t, n, e, i);
      return l(), We(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (g.NODE_ENV !== "production") {
    const o = Dt(to[e].replace(/ hook$/, ""));
    S(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ut = (e) => (t, n = _e) => {
  (!mn || e === "sp") && ur(e, (...r) => t(...r), n);
}, Ea = ut("bm"), lo = ut("m"), va = ut(
  "bu"
), Na = ut("u"), wa = ut(
  "bum"
), ao = ut("um"), Oa = ut(
  "sp"
), xa = ut("rtg"), Da = ut("rtc");
function Sa(e, t = _e) {
  ur("ec", e, t);
}
const Ia = Symbol.for("v-ndc");
function Ca(e, t, n, r) {
  let o;
  const s = n, i = P(e);
  if (i || oe(e)) {
    const l = i && Tt(e);
    let a = !1, f = !1;
    l && (a = !Oe(e), f = Je(e), e = ir(e)), o = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      o[d] = t(
        a ? f ? Wn(ge(e[d])) : ge(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    g.NODE_ENV !== "production" && !Number.isInteger(e) && S(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
const Pr = (e) => e ? Ii(e) ? pr(e) : Pr(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => g.NODE_ENV !== "production" ? tt(e.props) : e.props,
    $attrs: (e) => g.NODE_ENV !== "production" ? tt(e.attrs) : e.attrs,
    $slots: (e) => g.NODE_ENV !== "production" ? tt(e.slots) : e.slots,
    $refs: (e) => g.NODE_ENV !== "production" ? tt(e.refs) : e.refs,
    $parent: (e) => Pr(e.parent),
    $root: (e) => Pr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = no.bind(e.proxy)),
    $watch: (e) => ac.bind(e)
  })
), co = (e) => e === "_" || e === "$", vr = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if (g.NODE_ENV !== "production" && t === "__isVue")
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
    let u, h;
    if (d)
      return t === "$attrs" ? (ue(e.attrs, "get", ""), g.NODE_ENV !== "production" && Zn()) : g.NODE_ENV !== "production" && t === "$slots" && ue(e, "get", t), d(e);
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
    return vr(o, t) ? (o[t] = n, !0) : g.NODE_ENV !== "production" && o.__isScriptSetup && q(o, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Z && q(r, t) ? (r[t] = n, !0) : q(e.props, t) ? (g.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (g.NODE_ENV !== "production" && S(
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
    return !!n[i] || e !== Z && q(e, i) || vr(t, i) || (l = s[0]) && q(l, i) || q(r, i) || q(At, i) || q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
g.NODE_ENV !== "production" && (ii.ownKeys = (e) => (S(
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
      set: fe
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
      set: fe
    });
  });
}
function Aa(e) {
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
        set: fe
      });
    }
  });
}
function Vo(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ra() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? S(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
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
    mounted: h,
    beforeUpdate: _,
    updated: O,
    activated: T,
    deactivated: J,
    beforeDestroy: H,
    beforeUnmount: F,
    destroyed: V,
    unmounted: A,
    render: y,
    renderTracked: b,
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
  } = t, pe = g.NODE_ENV !== "production" ? Ra() : null;
  if (g.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const Y in U)
        pe("Props", Y);
  }
  if (f && Ma(f, r, pe), i)
    for (const U in i) {
      const Y = i[U];
      L(Y) ? (g.NODE_ENV !== "production" ? Object.defineProperty(r, U, {
        value: Y.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[U] = Y.bind(n), g.NODE_ENV !== "production" && pe("Methods", U)) : g.NODE_ENV !== "production" && S(
        `Method "${U}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    g.NODE_ENV !== "production" && !L(o) && S(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = o.call(n, n);
    if (g.NODE_ENV !== "production" && qr(U) && S(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(U))
      g.NODE_ENV !== "production" && S("data() should return an object.");
    else if (e.data = xn(U), g.NODE_ENV !== "production")
      for (const Y in U)
        pe("Data", Y), co(Y[0]) || Object.defineProperty(r, Y, {
          configurable: !0,
          enumerable: !0,
          get: () => U[Y],
          set: fe
        });
  }
  if (Mr = !0, s)
    for (const U in s) {
      const Y = s[U], ke = L(Y) ? Y.bind(n, n) : L(Y.get) ? Y.get.bind(n, n) : fe;
      g.NODE_ENV !== "production" && ke === fe && S(`Computed property "${U}" has no getter.`);
      const Et = !L(Y) && L(Y.set) ? Y.set.bind(n) : g.NODE_ENV !== "production" ? () => {
        S(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : fe, vt = _o({
        get: ke,
        set: Et
      });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (ft) => vt.value = ft
      }), g.NODE_ENV !== "production" && pe("Computed", U);
    }
  if (l)
    for (const U in l)
      li(l[U], r, n, U);
  if (a) {
    const U = L(a) ? a.call(n) : a;
    Reflect.ownKeys(U).forEach((Y) => {
      Ha(Y, U[Y]);
    });
  }
  d && Ao(d, e, "c");
  function ce(U, Y) {
    P(Y) ? Y.forEach((ke) => U(ke.bind(n))) : Y && U(Y.bind(n));
  }
  if (ce(Ea, u), ce(lo, h), ce(va, _), ce(Na, O), ce(ma, T), ce(ya, J), ce(Sa, $), ce(Da, b), ce(xa, k), ce(wa, F), ce(ao, A), ce(Oa, M), P(z))
    if (z.length) {
      const U = e.exposed || (e.exposed = {});
      z.forEach((Y) => {
        Object.defineProperty(U, Y, {
          get: () => n[Y],
          set: (ke) => n[Y] = ke,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === fe && (e.render = y), de != null && (e.inheritAttrs = de), re && (e.components = re), se && (e.directives = se), M && oi(e);
}
function Ma(e, t, n = fe) {
  P(e) && (e = kr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = jn(
      o.from || r,
      o.default,
      !0
    ) : s = jn(o.from || r) : s = jn(o), ae(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, g.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ao(e, t, n) {
  ot(
    P(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, r) {
  let o = r.includes(".") ? Ei(n, r) : () => n[r];
  if (oe(e)) {
    const s = t[e];
    L(s) ? Jt(o, s) : g.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e}"`, s);
  } else if (L(e))
    Jt(o, e.bind(n));
  else if (ee(e))
    if (P(e))
      e.forEach((s) => li(s, t, n, r));
    else {
      const s = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(s) ? Jt(o, s, e) : g.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else g.NODE_ENV !== "production" && S(`Invalid watch option: "${r}"`, e);
}
function ai(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (f) => zn(a, f, i, !0)
  ), zn(a, t, i)), ee(t) && s.set(t, a), a;
}
function zn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && zn(e, s, n, !0), o && o.forEach(
    (i) => zn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      g.NODE_ENV !== "production" && S(
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
    return ie(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $a(e, t) {
  return tn(kr(e), kr(t));
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
function ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tn(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Po(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Vo(e),
    Vo(t ?? {})
  ) : t;
}
function ja(e, t) {
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
let Fa = 0;
function La(e, t) {
  return function(r, o = null) {
    L(r) || (r = ie({}, r)), o != null && !ee(o) && (g.NODE_ENV !== "production" && S("root props passed to app.mount() must be an object."), o = null);
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
        g.NODE_ENV !== "production" && S(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? g.NODE_ENV !== "production" && S("Plugin has already been applied to target app.") : d && L(d.install) ? (i.add(d), d.install(f, ...u)) : L(d) ? (i.add(d), d(f, ...u)) : g.NODE_ENV !== "production" && S(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? g.NODE_ENV !== "production" && S(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return g.NODE_ENV !== "production" && Hr(d, s.config), u ? (g.NODE_ENV !== "production" && s.components[d] && S(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return g.NODE_ENV !== "production" && ni(d), u ? (g.NODE_ENV !== "production" && s.directives[d] && S(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, h) {
        if (a)
          g.NODE_ENV !== "production" && S(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          g.NODE_ENV !== "production" && d.__vue_app__ && S(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = f._ceVNode || rt(r, o);
          return _.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), g.NODE_ENV !== "production" && (s.reload = () => {
            const O = yt(_);
            O.el = null, e(O, d, h);
          }), e(_, d, h), a = !0, f._container = d, d.__vue_app__ = f, g.NODE_ENV !== "production" && (f._instance = _.component, oa(f, Jo)), pr(_.component);
        }
      },
      onUnmount(d) {
        g.NODE_ENV !== "production" && typeof d != "function" && S(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (ot(
          l,
          f._instance,
          16
        ), e(null, f._container), g.NODE_ENV !== "production" && (f._instance = null, sa(f)), delete f._container.__vue_app__) : g.NODE_ENV !== "production" && S("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return g.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? S(
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
function Ha(e, t) {
  if (!_e)
    g.NODE_ENV !== "production" && S("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const r = _e.parent && _e.parent.provides;
    r === n && (n = _e.provides = Object.create(r)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const r = go();
  if (r || Wt) {
    let o = Wt ? Wt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
    g.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else g.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ba(e, t, n, r = !1) {
  const o = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  g.NODE_ENV !== "production" && gi(t || {}, o, e), n ? e.props = r ? o : Ml(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ua(e) {
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
  } = e, l = K(o), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(g.NODE_ENV !== "production" && Ua(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (fr(e.emitsOptions, h))
          continue;
        const _ = t[h];
        if (a)
          if (q(s, h))
            _ !== s[h] && (s[h] = _, f = !0);
          else {
            const O = Te(h);
            o[O] = $r(
              a,
              l,
              O,
              _,
              e,
              !1
            );
          }
        else
          _ !== s[h] && (s[h] = _, f = !0);
      }
    }
  } else {
    pi(e, t, o, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ce(u)) === u || !q(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[u] = $r(
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
      o && q(o, d = Te(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : fr(e.emitsOptions, a) || (!(a in r) || f !== r[a]) && (r[a] = f, i = !0);
    }
  if (s) {
    const a = K(n), f = l || Z;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = $r(
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
function $r(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && L(a)) {
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
    ] && (r === "" || r === Ce(n)) && (r = !0));
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
      const [h, _] = hi(u, t, !0);
      ie(i, h), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return ee(e) && r.set(e, Ut), Ut;
  if (P(s))
    for (let d = 0; d < s.length; d++) {
      g.NODE_ENV !== "production" && !oe(s[d]) && S("props must be strings when using array syntax.", s[d]);
      const u = Te(s[d]);
      Mo(u) && (i[u] = Z);
    }
  else if (s) {
    g.NODE_ENV !== "production" && !ee(s) && S("invalid props options", s);
    for (const d in s) {
      const u = Te(d);
      if (Mo(u)) {
        const h = s[d], _ = i[u] = P(h) || L(h) ? { type: h } : ie({}, h), O = _.type;
        let T = !1, J = !0;
        if (P(O))
          for (let H = 0; H < O.length; ++H) {
            const F = O[H], V = L(F) && F.name;
            if (V === "Boolean") {
              T = !0;
              break;
            } else V === "String" && (J = !1);
          }
        else
          T = L(O) && O.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = T, _[
          1
          /* shouldCastTrue */
        ] = J, (T || q(_, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return ee(e) && r.set(e, f), f;
}
function Mo(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (g.NODE_ENV !== "production" && S(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ja(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const r = K(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Te(i));
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
    S('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let f = !1;
      const d = P(s) ? s : [s], u = [];
      for (let h = 0; h < d.length && !f; h++) {
        const { valid: _, expectedType: O } = Ga(t, d[h]);
        u.push(O || ""), f = _;
      }
      if (!f) {
        S(za(e, t, u));
        return;
      }
    }
    l && !l(t, r) && S('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const qa = /* @__PURE__ */ ct(
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
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function za(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(or).join(" | ")}`;
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
const uo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", fo = (e) => P(e) ? e.map(He) : [He(e)], Za = (e, t, n) => {
  if (t._n)
    return t;
  const r = da((...o) => (g.NODE_ENV !== "production" && _e && !(n === null && we) && !(n && n.root !== _e.root) && S(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fo(t(...o))), n);
  return r._c = !1, r;
}, _i = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uo(o)) continue;
    const s = e[o];
    if (L(s))
      t[o] = Za(o, s, r);
    else if (s != null) {
      g.NODE_ENV !== "production" && S(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = fo(s);
      t[o] = () => i;
    }
  }
}, mi = (e, t) => {
  g.NODE_ENV !== "production" && !io(e.vnode) && S(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fo(t);
  e.slots.default = () => n;
}, jr = (e, t, n) => {
  for (const r in t)
    (n || !uo(r)) && (e[r] = t[r]);
}, Qa = (e, t, n) => {
  const r = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && un(r, "__", o, !0);
    const s = t._;
    s ? (jr(r, t, n), n && un(r, "_", s, !0)) : _i(t, r);
  } else t && mi(e, t);
}, ec = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? g.NODE_ENV !== "production" && nt ? (jr(o, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? s = !1 : jr(o, t, n) : (s = !t.$stable, _i(t, o)), i = t;
  } else t && (mi(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !uo(l) && i[l] == null && delete o[l];
};
let Xt, _t;
function kt(e, t) {
  e.appContext.config.performance && Xn() && _t.mark(`vue-${t}-${e.uid}`), g.NODE_ENV !== "production" && ca(e, t, Xn() ? _t.now() : Date.now());
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
  g.NODE_ENV !== "production" && ua(e, t, Xn() ? _t.now() : Date.now());
}
function Xn() {
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
const Re = gc;
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
    setScopeId: _ = fe,
    insertStaticContent: O
  } = e, T = (c, p, m, N = null, E = null, v = null, I = void 0, D = null, x = g.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (N = Ye(c), W(c, E, v, !0), c = null), p.patchFlag === -2 && (x = !1, p.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: C } = p;
    switch (w) {
      case In:
        J(c, p, m, N);
        break;
      case Me:
        H(c, p, m, N);
        break;
      case Ln:
        c == null ? F(p, m, N, I) : g.NODE_ENV !== "production" && V(c, p, m, I);
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
          D,
          x
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
          D,
          x
        ) : C & 6 ? be(
          c,
          p,
          m,
          N,
          E,
          v,
          I,
          D,
          x
        ) : C & 64 || C & 128 ? w.process(
          c,
          p,
          m,
          N,
          E,
          v,
          I,
          D,
          x,
          Nt
        ) : g.NODE_ENV !== "production" && S("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && E ? ln(j, c && c.ref, v, p || c, !p) : j == null && c && c.ref != null && ln(c.ref, null, v, c, !0);
  }, J = (c, p, m, N) => {
    if (c == null)
      r(
        p.el = l(p.children),
        m,
        N
      );
    else {
      const E = p.el = c.el;
      p.children !== c.children && f(E, p.children);
    }
  }, H = (c, p, m, N) => {
    c == null ? r(
      p.el = a(p.children || ""),
      m,
      N
    ) : p.el = c.el;
  }, F = (c, p, m, N) => {
    [c.el, c.anchor] = O(
      c.children,
      p,
      m,
      N,
      c.el,
      c.anchor
    );
  }, V = (c, p, m, N) => {
    if (p.children !== c.children) {
      const E = h(c.anchor);
      y(c), [p.el, p.anchor] = O(
        p.children,
        m,
        E,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, A = ({ el: c, anchor: p }, m, N) => {
    let E;
    for (; c && c !== p; )
      E = h(c), r(c, m, N), c = E;
    r(p, m, N);
  }, y = ({ el: c, anchor: p }) => {
    let m;
    for (; c && c !== p; )
      m = h(c), o(c), c = m;
    o(p);
  }, b = (c, p, m, N, E, v, I, D, x) => {
    p.type === "svg" ? I = "svg" : p.type === "math" && (I = "mathml"), c == null ? k(
      p,
      m,
      N,
      E,
      v,
      I,
      D,
      x
    ) : z(
      c,
      p,
      E,
      v,
      I,
      D,
      x
    );
  }, k = (c, p, m, N, E, v, I, D) => {
    let x, w;
    const { props: j, shapeFlag: C, transition: R, dirs: B } = c;
    if (x = c.el = i(
      c.type,
      v,
      j && j.is,
      j
    ), C & 8 ? d(x, c.children) : C & 16 && M(
      c.children,
      x,
      null,
      N,
      E,
      Nr(c, v),
      I,
      D
    ), B && wt(c, null, N, "created"), $(x, c, c.scopeId, I, N), j) {
      for (const ne in j)
        ne !== "value" && !nn(ne) && s(x, ne, null, j[ne], v, N);
      "value" in j && s(x, "value", null, j.value, v), (w = j.onVnodeBeforeMount) && Xe(w, N, c);
    }
    g.NODE_ENV !== "production" && (un(x, "__vnode", c, !0), un(x, "__vueParentComponent", N, !0)), B && wt(c, null, N, "beforeMount");
    const G = oc(E, R);
    G && R.beforeEnter(x), r(x, p, m), ((w = j && j.onVnodeMounted) || G || B) && Re(() => {
      w && Xe(w, N, c), G && R.enter(x), B && wt(c, null, N, "mounted");
    }, E);
  }, $ = (c, p, m, N, E) => {
    if (m && _(c, m), N)
      for (let v = 0; v < N.length; v++)
        _(c, N[v]);
    if (E) {
      let v = E.subTree;
      if (g.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = po(v.children) || v), p === v || wi(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const I = E.vnode;
        $(
          c,
          I,
          I.scopeId,
          I.slotScopeIds,
          E.parent
        );
      }
    }
  }, M = (c, p, m, N, E, v, I, D, x = 0) => {
    for (let w = x; w < c.length; w++) {
      const j = c[w] = D ? gt(c[w]) : He(c[w]);
      T(
        null,
        j,
        p,
        m,
        N,
        E,
        v,
        I,
        D
      );
    }
  }, z = (c, p, m, N, E, v, I) => {
    const D = p.el = c.el;
    g.NODE_ENV !== "production" && (D.__vnode = p);
    let { patchFlag: x, dynamicChildren: w, dirs: j } = p;
    x |= c.patchFlag & 16;
    const C = c.props || Z, R = p.props || Z;
    let B;
    if (m && Ot(m, !1), (B = R.onVnodeBeforeUpdate) && Xe(B, m, p, c), j && wt(p, c, m, "beforeUpdate"), m && Ot(m, !0), g.NODE_ENV !== "production" && nt && (x = 0, I = !1, w = null), (C.innerHTML && R.innerHTML == null || C.textContent && R.textContent == null) && d(D, ""), w ? (de(
      c.dynamicChildren,
      w,
      D,
      m,
      N,
      Nr(p, E),
      v
    ), g.NODE_ENV !== "production" && Fn(c, p)) : I || ke(
      c,
      p,
      D,
      null,
      m,
      N,
      Nr(p, E),
      v,
      !1
    ), x > 0) {
      if (x & 16)
        re(D, C, R, m, E);
      else if (x & 2 && C.class !== R.class && s(D, "class", null, R.class, E), x & 4 && s(D, "style", C.style, R.style, E), x & 8) {
        const G = p.dynamicProps;
        for (let ne = 0; ne < G.length; ne++) {
          const Q = G[ne], De = C[Q], Se = R[Q];
          (Se !== De || Q === "value") && s(D, Q, De, Se, E, m);
        }
      }
      x & 1 && c.children !== p.children && d(D, p.children);
    } else !I && w == null && re(D, C, R, m, E);
    ((B = R.onVnodeUpdated) || j) && Re(() => {
      B && Xe(B, m, p, c), j && wt(p, c, m, "updated");
    }, N);
  }, de = (c, p, m, N, E, v, I) => {
    for (let D = 0; D < p.length; D++) {
      const x = c[D], w = p[D], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(x, w) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? u(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      T(
        x,
        w,
        j,
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
        const I = m[v], D = p[v];
        I !== D && v !== "value" && s(c, v, D, I, E, N);
      }
      "value" in m && s(c, "value", p.value, m.value, E);
    }
  }, se = (c, p, m, N, E, v, I, D, x) => {
    const w = p.el = c ? c.el : l(""), j = p.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: R, slotScopeIds: B } = p;
    g.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || C & 2048) && (C = 0, x = !1, R = null), B && (D = D ? D.concat(B) : B), c == null ? (r(w, m, N), r(j, m, N), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      j,
      E,
      v,
      I,
      D,
      x
    )) : C > 0 && C & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (de(
      c.dynamicChildren,
      R,
      m,
      E,
      v,
      I,
      D
    ), g.NODE_ENV !== "production" ? Fn(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || E && p === E.subTree) && Fn(
        c,
        p,
        !0
        /* shallow */
      )
    )) : ke(
      c,
      p,
      m,
      j,
      E,
      v,
      I,
      D,
      x
    );
  }, be = (c, p, m, N, E, v, I, D, x) => {
    p.slotScopeIds = D, c == null ? p.shapeFlag & 512 ? E.ctx.activate(
      p,
      m,
      N,
      I,
      x
    ) : pe(
      p,
      m,
      N,
      E,
      v,
      I,
      x
    ) : ce(c, p, x);
  }, pe = (c, p, m, N, E, v, I) => {
    const D = c.component = Oc(
      c,
      N,
      E
    );
    if (g.NODE_ENV !== "production" && D.type.__hmrId && ea(D), g.NODE_ENV !== "production" && (Mn(c), kt(D, "mount")), io(c) && (D.ctx.renderer = Nt), g.NODE_ENV !== "production" && kt(D, "init"), Dc(D, !1, I), g.NODE_ENV !== "production" && $t(D, "init"), g.NODE_ENV !== "production" && nt && (c.el = null), D.asyncDep) {
      if (E && E.registerDep(D, U, I), !c.el) {
        const x = D.subTree = rt(Me);
        H(null, x, p, m), c.placeholder = x.el;
      }
    } else
      U(
        D,
        c,
        p,
        m,
        E,
        v,
        I
      );
    g.NODE_ENV !== "production" && (kn(), $t(D, "mount"));
  }, ce = (c, p, m) => {
    const N = p.component = c.component;
    if (pc(c, p, m))
      if (N.asyncDep && !N.asyncResolved) {
        g.NODE_ENV !== "production" && Mn(p), Y(N, p, m), g.NODE_ENV !== "production" && kn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, U = (c, p, m, N, E, v, I) => {
    const D = () => {
      if (c.isMounted) {
        let { next: C, bu: R, u: B, parent: G, vnode: ne } = c;
        {
          const Ge = yi(c);
          if (Ge) {
            C && (C.el = ne.el, Y(c, C, I)), Ge.asyncDep.then(() => {
              c.isUnmounted || D();
            });
            return;
          }
        }
        let Q = C, De;
        g.NODE_ENV !== "production" && Mn(C || c.vnode), Ot(c, !1), C ? (C.el = ne.el, Y(c, C, I)) : C = ne, R && jt(R), (De = C.props && C.props.onVnodeBeforeUpdate) && Xe(De, G, C, ne), Ot(c, !0), g.NODE_ENV !== "production" && kt(c, "render");
        const Se = Fo(c);
        g.NODE_ENV !== "production" && $t(c, "render");
        const qe = c.subTree;
        c.subTree = Se, g.NODE_ENV !== "production" && kt(c, "patch"), T(
          qe,
          Se,
          // parent may have changed if it's in a teleport
          u(qe.el),
          // anchor may have changed if it's in a fragment
          Ye(qe),
          c,
          E,
          v
        ), g.NODE_ENV !== "production" && $t(c, "patch"), C.el = Se.el, Q === null && hc(c, Se.el), B && Re(B, E), (De = C.props && C.props.onVnodeUpdated) && Re(
          () => Xe(De, G, C, ne),
          E
        ), g.NODE_ENV !== "production" && Qs(c), g.NODE_ENV !== "production" && kn();
      } else {
        let C;
        const { el: R, props: B } = p, { bm: G, m: ne, parent: Q, root: De, type: Se } = c, qe = an(p);
        Ot(c, !1), G && jt(G), !qe && (C = B && B.onVnodeBeforeMount) && Xe(C, Q, p), Ot(c, !0);
        {
          De.ce && // @ts-expect-error _def is private
          De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Se), g.NODE_ENV !== "production" && kt(c, "render");
          const Ge = c.subTree = Fo(c);
          g.NODE_ENV !== "production" && $t(c, "render"), g.NODE_ENV !== "production" && kt(c, "patch"), T(
            null,
            Ge,
            m,
            N,
            c,
            E,
            v
          ), g.NODE_ENV !== "production" && $t(c, "patch"), p.el = Ge.el;
        }
        if (ne && Re(ne, E), !qe && (C = B && B.onVnodeMounted)) {
          const Ge = p;
          Re(
            () => Xe(C, Q, Ge),
            E
          );
        }
        (p.shapeFlag & 256 || Q && an(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Re(c.a, E), c.isMounted = !0, g.NODE_ENV !== "production" && ia(c), p = m = N = null;
      }
    };
    c.scope.on();
    const x = c.effect = new Is(D);
    c.scope.off();
    const w = c.update = x.run.bind(x), j = c.job = x.runIfDirty.bind(x);
    j.i = c, j.id = c.uid, x.scheduler = () => cr(j), Ot(c, !0), g.NODE_ENV !== "production" && (x.onTrack = c.rtc ? (C) => jt(c.rtc, C) : void 0, x.onTrigger = c.rtg ? (C) => jt(c.rtg, C) : void 0), w();
  }, Y = (c, p, m) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Ka(c, p.props, N, m), ec(c, p.children, m), Ke(), Co(c), We();
  }, ke = (c, p, m, N, E, v, I, D, x = !1) => {
    const w = c && c.children, j = c ? c.shapeFlag : 0, C = p.children, { patchFlag: R, shapeFlag: B } = p;
    if (R > 0) {
      if (R & 128) {
        vt(
          w,
          C,
          m,
          N,
          E,
          v,
          I,
          D,
          x
        );
        return;
      } else if (R & 256) {
        Et(
          w,
          C,
          m,
          N,
          E,
          v,
          I,
          D,
          x
        );
        return;
      }
    }
    B & 8 ? (j & 16 && xe(w, E, v), C !== w && d(m, C)) : j & 16 ? B & 16 ? vt(
      w,
      C,
      m,
      N,
      E,
      v,
      I,
      D,
      x
    ) : xe(w, E, v, !0) : (j & 8 && d(m, ""), B & 16 && M(
      C,
      m,
      N,
      E,
      v,
      I,
      D,
      x
    ));
  }, Et = (c, p, m, N, E, v, I, D, x) => {
    c = c || Ut, p = p || Ut;
    const w = c.length, j = p.length, C = Math.min(w, j);
    let R;
    for (R = 0; R < C; R++) {
      const B = p[R] = x ? gt(p[R]) : He(p[R]);
      T(
        c[R],
        B,
        m,
        null,
        E,
        v,
        I,
        D,
        x
      );
    }
    w > j ? xe(
      c,
      E,
      v,
      !0,
      !1,
      C
    ) : M(
      p,
      m,
      N,
      E,
      v,
      I,
      D,
      x,
      C
    );
  }, vt = (c, p, m, N, E, v, I, D, x) => {
    let w = 0;
    const j = p.length;
    let C = c.length - 1, R = j - 1;
    for (; w <= C && w <= R; ) {
      const B = c[w], G = p[w] = x ? gt(p[w]) : He(p[w]);
      if (Zt(B, G))
        T(
          B,
          G,
          m,
          null,
          E,
          v,
          I,
          D,
          x
        );
      else
        break;
      w++;
    }
    for (; w <= C && w <= R; ) {
      const B = c[C], G = p[R] = x ? gt(p[R]) : He(p[R]);
      if (Zt(B, G))
        T(
          B,
          G,
          m,
          null,
          E,
          v,
          I,
          D,
          x
        );
      else
        break;
      C--, R--;
    }
    if (w > C) {
      if (w <= R) {
        const B = R + 1, G = B < j ? p[B].el : N;
        for (; w <= R; )
          T(
            null,
            p[w] = x ? gt(p[w]) : He(p[w]),
            m,
            G,
            E,
            v,
            I,
            D,
            x
          ), w++;
      }
    } else if (w > R)
      for (; w <= C; )
        W(c[w], E, v, !0), w++;
    else {
      const B = w, G = w, ne = /* @__PURE__ */ new Map();
      for (w = G; w <= R; w++) {
        const Ee = p[w] = x ? gt(p[w]) : He(p[w]);
        Ee.key != null && (g.NODE_ENV !== "production" && ne.has(Ee.key) && S(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), ne.set(Ee.key, w));
      }
      let Q, De = 0;
      const Se = R - G + 1;
      let qe = !1, Ge = 0;
      const Gt = new Array(Se);
      for (w = 0; w < Se; w++) Gt[w] = 0;
      for (w = B; w <= C; w++) {
        const Ee = c[w];
        if (De >= Se) {
          W(Ee, E, v, !0);
          continue;
        }
        let ze;
        if (Ee.key != null)
          ze = ne.get(Ee.key);
        else
          for (Q = G; Q <= R; Q++)
            if (Gt[Q - G] === 0 && Zt(Ee, p[Q])) {
              ze = Q;
              break;
            }
        ze === void 0 ? W(Ee, E, v, !0) : (Gt[ze - G] = w + 1, ze >= Ge ? Ge = ze : qe = !0, T(
          Ee,
          p[ze],
          m,
          null,
          E,
          v,
          I,
          D,
          x
        ), De++);
      }
      const vo = qe ? sc(Gt) : Ut;
      for (Q = vo.length - 1, w = Se - 1; w >= 0; w--) {
        const Ee = G + w, ze = p[Ee], No = p[Ee + 1], wo = Ee + 1 < j ? (
          // #13559, fallback to el placeholder for unresolved async component
          No.el || No.placeholder
        ) : N;
        Gt[w] === 0 ? T(
          null,
          ze,
          m,
          wo,
          E,
          v,
          I,
          D,
          x
        ) : qe && (Q < 0 || w !== vo[Q] ? ft(ze, m, wo, 2) : Q--);
      }
    }
  }, ft = (c, p, m, N, E = null) => {
    const { el: v, type: I, transition: D, children: x, shapeFlag: w } = c;
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
      for (let C = 0; C < x.length; C++)
        ft(x[C], p, m, N);
      r(c.anchor, p, m);
      return;
    }
    if (I === Ln) {
      A(c, p, m);
      return;
    }
    if (N !== 2 && w & 1 && D)
      if (N === 0)
        D.beforeEnter(v), r(v, p, m), Re(() => D.enter(v), E);
      else {
        const { leave: C, delayLeave: R, afterLeave: B } = D, G = () => {
          c.ctx.isUnmounted ? o(v) : r(v, p, m);
        }, ne = () => {
          C(v, () => {
            G(), B && B();
          });
        };
        R ? R(v, G, ne) : ne();
      }
    else
      r(v, p, m);
  }, W = (c, p, m, N = !1, E = !1) => {
    const {
      type: v,
      props: I,
      ref: D,
      children: x,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: C,
      dirs: R,
      cacheIndex: B
    } = c;
    if (C === -2 && (E = !1), D != null && (Ke(), ln(D, null, m, c, !0), We()), B != null && (p.renderCache[B] = void 0), j & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = j & 1 && R, ne = !an(c);
    let Q;
    if (ne && (Q = I && I.onVnodeBeforeUnmount) && Xe(Q, p, c), j & 6)
      Ve(c.component, m, N);
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
      (v !== je || C > 0 && C & 64) ? xe(
        w,
        p,
        m,
        !1,
        !0
      ) : (v === je && C & 384 || !E && j & 16) && xe(x, p, m), N && le(c);
    }
    (ne && (Q = I && I.onVnodeUnmounted) || G) && Re(() => {
      Q && Xe(Q, p, c), G && wt(c, null, p, "unmounted");
    }, m);
  }, le = (c) => {
    const { type: p, el: m, anchor: N, transition: E } = c;
    if (p === je) {
      g.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((I) => {
        I.type === Me ? o(I.el) : le(I);
      }) : me(m, N);
      return;
    }
    if (p === Ln) {
      y(c);
      return;
    }
    const v = () => {
      o(m), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: I, delayLeave: D } = E, x = () => I(m, v);
      D ? D(c.el, v, x) : x();
    } else
      v();
  }, me = (c, p) => {
    let m;
    for (; c !== p; )
      m = h(c), o(c), c = m;
    o(p);
  }, Ve = (c, p, m) => {
    g.NODE_ENV !== "production" && c.type.__hmrId && ta(c);
    const {
      bum: N,
      scope: E,
      job: v,
      subTree: I,
      um: D,
      m: x,
      a: w,
      parent: j,
      slots: { __: C }
    } = c;
    jo(x), jo(w), N && jt(N), j && P(C) && C.forEach((R) => {
      j.renderCache[R] = void 0;
    }), E.stop(), v && (v.flags |= 8, W(I, c, p, m)), D && Re(D, p), Re(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), g.NODE_ENV !== "production" && aa(c);
  }, xe = (c, p, m, N = !1, E = !1, v = 0) => {
    for (let I = v; I < c.length; I++)
      W(c[I], p, m, N, E);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), m = p && p[ha];
    return m ? h(m) : p;
  };
  let Pt = !1;
  const Tn = (c, p, m) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : T(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = c, Pt || (Pt = !0, Co(), Gs(), Pt = !1);
  }, Nt = {
    p: T,
    um: W,
    m: ft,
    r: le,
    mt: pe,
    mc: M,
    pc: ke,
    pbc: de,
    n: Ye,
    o: e
  };
  return {
    render: Tn,
    hydrate: void 0,
    createApp: La(Tn)
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
function Fn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (P(r) && P(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = gt(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && Fn(i, l)), l.type === In && (l.el = i.el), l.type === Me && !l.el && (l.el = i.el), g.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
function yi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yi(t);
}
function jo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ic = Symbol.for("v-scx"), lc = () => {
  {
    const e = jn(ic);
    return e || g.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Jt(e, t, n) {
  return g.NODE_ENV !== "production" && !L(t) && S(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), bi(e, t, n);
}
function bi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  g.NODE_ENV !== "production" && !t && (r !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ie({}, n);
  g.NODE_ENV !== "production" && (l.onWarn = S);
  const a = t && r || !t && s !== "post";
  let f;
  if (mn) {
    if (s === "sync") {
      const _ = lc();
      f = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!a) {
      const _ = () => {
      };
      return _.stop = fe, _.resume = fe, _.pause = fe, _;
    }
  }
  const d = _e;
  l.call = (_, O, T) => ot(_, d, O, T);
  let u = !1;
  s === "post" ? l.scheduler = (_) => {
    Re(_, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (_, O) => {
    O ? _() : cr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), u && (_.flags |= 2, d && (_.id = d.uid, _.i = d));
  };
  const h = Jl(e, t, l);
  return mn && (f ? f.push(h) : a && h()), h;
}
function ac(e, t, n) {
  const r = this.proxy, o = oe(e) ? e.includes(".") ? Ei(r, e) : () => r[e] : e.bind(r, r);
  let s;
  L(t) ? s = t : (s = t.handler, n = t);
  const i = Cn(this), l = bi(o, s.bind(r), n);
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
const cc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${Ce(t)}Modifiers`];
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
        (!u || !(Dt(Te(t)) in u)) && S(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Te(t))}" prop.`
        );
      else {
        const h = d[t];
        L(h) && (h(...n) || S(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && cc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => oe(d) ? d.trim() : d)), i.number && (o = n.map(Cr))), g.NODE_ENV !== "production" && fa(e, t, o), g.NODE_ENV !== "production") {
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
  let l, a = r[l = Dt(t)] || // also try camelCase event handler (#2249)
  r[l = Dt(Te(t))];
  !a && s && (a = r[l = Dt(Ce(t))]), a && ot(
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
      d && (l = !0, ie(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ee(e) && r.set(e, null), null) : (P(s) ? s.forEach((a) => i[a] = null) : ie(i, s), ee(e) && r.set(e, i), i);
}
function fr(e, t) {
  return !e || !wn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ce(t)) || q(e, t));
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
    attrs: l,
    emit: a,
    render: f,
    renderCache: d,
    props: u,
    data: h,
    setupState: _,
    ctx: O,
    inheritAttrs: T
  } = e, J = Gn(e);
  let H, F;
  g.NODE_ENV !== "production" && (Fr = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, b = g.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(y, {
        get(k, $, M) {
          return S(
            `Property '${String(
              $
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(k, $, M);
        }
      }) : y;
      H = He(
        f.call(
          b,
          y,
          d,
          g.NODE_ENV !== "production" ? tt(u) : u,
          _,
          h,
          O
        )
      ), F = l;
    } else {
      const y = t;
      g.NODE_ENV !== "production" && l === u && Zn(), H = He(
        y.length > 1 ? y(
          g.NODE_ENV !== "production" ? tt(u) : u,
          g.NODE_ENV !== "production" ? {
            get attrs() {
              return Zn(), tt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : y(
          g.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), F = t.props ? l : fc(l);
    }
  } catch (y) {
    cn.length = 0, Dn(y, e, 1), H = rt(Me);
  }
  let V = H, A;
  if (g.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([V, A] = Ni(H)), F && T !== !1) {
    const y = Object.keys(F), { shapeFlag: b } = V;
    if (y.length) {
      if (b & 7)
        s && y.some(Un) && (F = dc(
          F,
          s
        )), V = yt(V, F, !1, !0);
      else if (g.NODE_ENV !== "production" && !Fr && V.type !== Me) {
        const k = Object.keys(l), $ = [], M = [];
        for (let z = 0, de = k.length; z < de; z++) {
          const re = k[z];
          wn(re) ? Un(re) || $.push(re[2].toLowerCase() + re.slice(3)) : M.push(re);
        }
        M.length && S(
          `Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), $.length && S(
          `Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (g.NODE_ENV !== "production" && !Lo(V) && S(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = yt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (g.NODE_ENV !== "production" && !Lo(V) && S(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), so(V, n.transition)), g.NODE_ENV !== "production" && A ? A(V) : H = V, Gn(J), H;
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
    if (dr(o)) {
      if (o.type !== Me || o.children === "v-if") {
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
    (!Un(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Lo = (e) => e.shapeFlag & 7 || e.type === Me;
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
        if (i[h] !== r[h] && !fr(f, h))
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
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : qs(e);
}
const je = Symbol.for("v-fgt"), In = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Ln = Symbol.for("v-stc"), cn = [];
let Pe = null;
function Ae(e = !1) {
  cn.push(Pe = e ? null : []);
}
function _c() {
  cn.pop(), Pe = cn[cn.length - 1] || null;
}
let _n = 1;
function Bo(e, t = !1) {
  _n += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = _n > 0 ? Pe || Ut : null, _c(), _n > 0 && Pe && Pe.push(e), e;
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
  if (g.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = $n.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const yc = (...e) => Di(
  ...e
), xi = ({ key: e }) => e ?? null, Hn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ae(e) || L(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function ht(e, t = null, n = null, r = 0, o = null, s = e === je ? 0 : 1, i = !1, l = !1) {
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
  return l ? (ho(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= oe(n) ? 8 : 16), g.NODE_ENV !== "production" && a.key !== a.key && S("VNode created with invalid key (NaN). VNode type:", a.type), _n > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const rt = g.NODE_ENV !== "production" ? yc : Di;
function Di(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Ia) && (g.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Me), dr(e)) {
    const l = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ho(l, n), _n > 0 && !s && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag = -2, l;
  }
  if (Vi(e) && (e = e.__vccOpts), t) {
    t = bc(t);
    let { class: l, style: a } = t;
    l && !oe(l) && (t.class = fn(l)), ee(a) && (hn(a) && !P(a) && (a = ie({}, a)), t.style = sr(a));
  }
  const i = oe(e) ? 1 : wi(e) ? 128 : ga(e) ? 64 : ee(e) ? 4 : L(e) ? 2 : 0;
  return g.NODE_ENV !== "production" && i & 4 && hn(e) && (e = K(e), S(
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
function bc(e) {
  return e ? hn(e) || di(e) ? ie({}, e) : e : null;
}
function yt(e, t, n = !1, r = !1) {
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
      n && s ? P(s) ? s.concat(Hn(t)) : [s, Hn(t)] : Hn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: g.NODE_ENV !== "production" && i === -1 && P(l) ? l.map(Si) : l,
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
    ssContent: e.ssContent && yt(e.ssContent),
    ssFallback: e.ssFallback && yt(e.ssFallback),
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
  const t = yt(e);
  return P(e.children) && (t.children = e.children.map(Si)), t;
}
function Ec(e = " ", t = 0) {
  return rt(In, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (Ae(), mc(Me, null, e)) : rt(Me, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? rt(Me) : P(e) ? rt(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dr(e) ? gt(e) : rt(In, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
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
      !o && !di(t) ? t._ctx = we : o === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
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
        t.style = sr([t.style, r.style]);
      else if (wn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(P(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
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
let _e = null;
const go = () => _e || we;
let Qn, Lr;
{
  const e = On(), t = (n, r) => {
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
    (n) => mn = n
  );
}
const Cn = (e) => {
  const t = _e;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, Uo = () => {
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
let mn = !1;
function Dc(e, t = !1, n = !1) {
  t && Lr(t);
  const { props: r, children: o } = e.vnode, s = Ii(e);
  Ba(e, r, s, t), Qa(e, o, n || t);
  const i = s ? Sc(e, t) : void 0;
  return t && Lr(!1), i;
}
function Sc(e, t) {
  var n;
  const r = e.type;
  if (g.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), g.NODE_ENV !== "production" && Va(e);
  const { setup: o } = r;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Tc(e) : null, i = Cn(e), l = qt(
      o,
      e,
      0,
      [
        g.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), a = qr(l);
    if (We(), i(), (a || e.sp) && !an(e) && oi(e), a) {
      if (l.then(Uo, Uo), t)
        return l.then((f) => {
          Ko(e, f, t);
        }).catch((f) => {
          Dn(f, e, 0);
        });
      if (e.asyncDep = l, g.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        S(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ko(e, l, t);
  } else
    Ci(e, t);
}
function Ko(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (g.NODE_ENV !== "production" && dr(t) && S(
    "setup() should not return VNodes directly - return a render function instead."
  ), g.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ks(t), g.NODE_ENV !== "production" && Aa(e)) : g.NODE_ENV !== "production" && t !== void 0 && S(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ci(e, n);
}
const Ic = () => !0;
function Ci(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || fe);
  {
    const o = Cn(e);
    Ke();
    try {
      Pa(e);
    } finally {
      We(), o();
    }
  }
  g.NODE_ENV !== "production" && !r.render && e.render === fe && !t && (r.template ? S(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : S("Component is missing template or render function: ", r));
}
const Wo = g.NODE_ENV !== "production" ? {
  get(e, t) {
    return Zn(), ue(e, "get", ""), e[t];
  },
  set() {
    return S("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return S("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ue(e, "get", ""), e[t];
  }
};
function Cc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ue(e, "get", "$slots"), t[n];
    }
  });
}
function Tc(e) {
  const t = (n) => {
    if (g.NODE_ENV !== "production" && (e.exposed && S("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (P(n) ? r = "array" : ae(n) && (r = "ref")), r !== "object" && S(
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
function pr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(kl(e.exposed)), {
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
  return L(e) && "__vccOpts" in e;
}
const _o = (e, t) => {
  const n = Kl(e, t, mn);
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
      if (ae(u)) {
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
        if (Tt(u))
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
    u.type.props && u.props && h.push(i("props", K(u.props))), u.setupState !== Z && h.push(i("setup", u.setupState)), u.data !== Z && h.push(i("data", K(u.data)));
    const _ = a(u, "computed");
    _ && h.push(i("computed", _));
    const O = a(u, "inject");
    return O && h.push(i("injected", O)), h.push([
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
    return h = ie({}, h), Object.keys(h).length ? [
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
        ...Object.keys(h).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          l(h[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ee(u) ? ["object", { object: h ? K(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const _ = u.type;
    if (L(_))
      return;
    const O = {};
    for (const T in u.ctx)
      f(_, T, h) && (O[T] = u.ctx[T]);
    return O;
  }
  function f(u, h, _) {
    const O = u[_];
    if (P(O) && O.includes(h) || ee(O) && h in O || u.extends && f(u.extends, h, _) || u.mixins && u.mixins.some((T) => f(T, h, _)))
      return !0;
  }
  function d(u) {
    return Oe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Jo = "3.5.18", Le = g.NODE_ENV !== "production" ? S : fe;
var ye = {};
let Br;
const Yo = typeof window < "u" && window.trustedTypes;
if (Yo)
  try {
    Br = /* @__PURE__ */ Yo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ye.NODE_ENV !== "production" && Le(`Error creating trusted types policy: ${e}`);
  }
const Ai = Br ? (e) => Br.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", Mc = "http://www.w3.org/1998/Math/MathML", it = typeof document < "u" ? document : null, qo = it && /* @__PURE__ */ it.createElement("template"), kc = {
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
function Bc(e, t, n) {
  const r = e.style, o = oe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Bn(r, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Bn(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Bn(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Lc];
      i && (n += ";" + i), r.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  Go in e && (e[Go] = s ? r.display : "", e[Fc] && (r.display = "none"));
}
const Uc = /[^\\];\s*$/, zo = /\s*!important$/;
function Bn(e, t, n) {
  if (P(n))
    n.forEach((r) => Bn(e, t, r));
  else if (n == null && (n = ""), ye.NODE_ENV !== "production" && Uc.test(n) && Le(
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
function Qo(e, t, n, r, o, s = pl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zo, t.slice(6, t.length)) : e.setAttributeNS(Zo, t, n) : n == null || s && !Os(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : bt(n) ? String(n) : n
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
    ye.NODE_ENV !== "production" && !i && Le(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
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
    i.value = ye.NODE_ENV !== "production" ? rs(r, t) : r;
  else {
    const [l, a] = Yc(t);
    if (r) {
      const f = s[t] = zc(
        ye.NODE_ENV !== "production" ? rs(r, t) : r,
        o
      );
      Lt(e, l, f, a);
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
  return L(e) || P(e) ? e : (Le(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), fe);
}
function Xc(e, t) {
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
const os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? jc(e, r, i) : t === "style" ? Bc(e, n, r) : wn(t) ? Un(t) || Jc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, r, i)) ? (es(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qo(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? es(e, Te(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qo(e, t, r, i));
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
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== us ? this._root = this.shadowRoot : (ye.NODE_ENV !== "production" && this.shadowRoot && Le(
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
      let l;
      if (s && !P(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = Oo(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Te(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : ye.NODE_ENV !== "production" && i && Le(
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
        q(this, r) ? ye.NODE_ENV !== "production" && Le(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => he(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = P(n) ? n : Object.keys(n || {});
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
  return P(t) ? (n) => jt(t, n) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function ls(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xr = Symbol("_assign"), ru = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[xr] = is(o);
    const s = r || o.props && o.props.type === "number";
    Lt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Cr(l)), e[xr](l);
    }), n && Lt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Lt(e, "compositionstart", nu), Lt(e, "compositionend", ls), Lt(e, "change", ls));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[xr] = is(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, a = t ?? "";
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
    const s = Ce(o.key);
    if (t.some(
      (i) => i === s || iu[i] === s
    ))
      return e(o);
  });
}, au = /* @__PURE__ */ ie({ patchProp: Zc }, kc);
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
    return ye.NODE_ENV !== "production" && !t && Le(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ye.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Le(
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
var ji = "AI_InvalidArgumentError", Fi = `vercel.ai.error.${ji}`, yu = Symbol.for(Fi), Li, bu = class extends Yt {
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
Li = yu;
var Hi = "AI_JSONParseError", Bi = `vercel.ai.error.${Hi}`, Eu = Symbol.for(Bi), Ui, fs = class extends Yt {
  constructor({ text: e, cause: t }) {
    super({
      name: Hi,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${$i(t)}`,
      cause: t
    }), this[Ui] = !0, this.text = e;
  }
  static isInstance(e) {
    return Yt.hasMarker(e, Bi);
  }
};
Ui = Eu;
var Ki = "AI_TypeValidationError", Wi = `vercel.ai.error.${Ki}`, vu = Symbol.for(Wi), Ji, Nu = class Ur extends Yt {
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
    return Ur.isInstance(n) && n.value === t ? n : new Ur({ value: t, cause: n });
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
      for (const _ of h) {
        if (a !== "ignore" && Object.prototype.hasOwnProperty.call(_, "__proto__")) {
          if (d === !0)
            return null;
          if (a === "error")
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
        for (const O in _) {
          const T = _[O];
          T && typeof T == "object" && u.push(T);
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
    throw new bu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, yo = Iu(), Kr = Symbol.for("vercel.ai.validator");
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
var yn = {
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
  yn,
  bn,
  En,
  vn,
  Nn
];
yn.code + "", bn.code + "", En.code + "", vn.code + "", Nn.code + "";
yn.name + "", yn.code, bn.name + "", bn.code, En.name + "", En.code, vn.name + "", vn.code, Nn.name + "", Nn.code;
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
}, Bu = {
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
}, bo = [
  ju,
  Fu,
  Lu,
  Hu,
  Bu,
  Uu,
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
  bo.map((e) => [e.code, e])
);
Object.fromEntries(
  bo.map((e) => [e.name, e.code])
);
var tf = bo.map((e) => e.code), nf = (e) => {
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
  onMessageAnnotationsPart: _,
  onFinishMessagePart: O,
  onFinishStepPart: T,
  onStartStepPart: J
}) {
  const H = e.getReader(), F = new TextDecoder(), V = [];
  let A = 0;
  for (; ; ) {
    const { value: y } = await H.read();
    if (y && (V.push(y), A += y.length, y[y.length - 1] !== rf))
      continue;
    if (V.length === 0)
      break;
    const b = of(V, A);
    A = 0;
    const k = F.decode(b, { stream: !0 }).split(`
`).filter(($) => $ !== "").map(nf);
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
          await l?.(M);
          break;
        case "error":
          await a?.(M);
          break;
        case "message_annotations":
          await _?.(M);
          break;
        case "tool_call_streaming_start":
          await f?.(M);
          break;
        case "tool_call_delta":
          await d?.(M);
          break;
        case "tool_call":
          await u?.(M);
          break;
        case "tool_result":
          await h?.(M);
          break;
        case "finish_message":
          await O?.(M);
          break;
        case "finish_step":
          await T?.(M);
          break;
        case "start_step":
          await J?.(M);
          break;
        default: {
          const z = $;
          throw new Error(`Unknown stream part type: ${z}`);
        }
      }
  }
}
async function lf({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: r,
  generateId: o = yo,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var l, a;
  const f = i?.role === "assistant";
  let d = f ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((b, k) => {
    var $;
    return Math.max(b, ($ = k.step) != null ? $ : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let h, _, O;
  function T(b, k) {
    const $ = u.parts.find(
      (M) => M.type === "tool-invocation" && M.toolInvocation.toolCallId === b
    );
    $ != null ? $.toolInvocation = k : u.parts.push({
      type: "tool-invocation",
      toolInvocation: k
    });
  }
  const J = [];
  let H = f ? i?.annotations : void 0;
  const F = {};
  let V = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, A = "unknown";
  function y() {
    const b = [...J];
    H?.length && (u.annotations = H);
    const k = {
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
      message: k,
      data: b,
      replaceLastMessage: f
    });
  }
  await sf({
    stream: e,
    onTextPart(b) {
      h == null ? (h = {
        type: "text",
        text: b
      }, u.parts.push(h)) : h.text += b, u.content += b, y();
    },
    onReasoningPart(b) {
      var k;
      O == null ? (O = { type: "text", text: b }, _?.details.push(O)) : O.text += b, _ == null ? (_ = {
        type: "reasoning",
        reasoning: b,
        details: [O]
      }, u.parts.push(_)) : _.reasoning += b, u.reasoning = ((k = u.reasoning) != null ? k : "") + b, y();
    },
    onReasoningSignaturePart(b) {
      O != null && (O.signature = b.signature);
    },
    onRedactedReasoningPart(b) {
      _ == null && (_ = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(_)), _.details.push({
        type: "redacted",
        data: b.data
      }), O = void 0, y();
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
      u.toolInvocations == null && (u.toolInvocations = []), F[b.toolCallId] = {
        text: "",
        step: d,
        toolName: b.toolName,
        index: u.toolInvocations.length
      };
      const k = {
        state: "partial-call",
        step: d,
        toolCallId: b.toolCallId,
        toolName: b.toolName,
        args: void 0
      };
      u.toolInvocations.push(k), T(b.toolCallId, k), y();
    },
    onToolCallDeltaPart(b) {
      const k = F[b.toolCallId];
      k.text += b.argsTextDelta;
      const { value: $ } = $u(k.text), M = {
        state: "partial-call",
        step: k.step,
        toolCallId: b.toolCallId,
        toolName: k.toolName,
        args: $
      };
      u.toolInvocations[k.index] = M, T(b.toolCallId, M), y();
    },
    async onToolCallPart(b) {
      const k = {
        state: "call",
        step: d,
        ...b
      };
      if (F[b.toolCallId] != null ? u.toolInvocations[F[b.toolCallId].index] = k : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(k)), T(b.toolCallId, k), y(), n) {
        const $ = await n({ toolCall: b });
        if ($ != null) {
          const M = {
            state: "result",
            step: d,
            ...b,
            result: $
          };
          u.toolInvocations[u.toolInvocations.length - 1] = M, T(b.toolCallId, M), y();
        }
      }
    },
    onToolResultPart(b) {
      const k = u.toolInvocations;
      if (k == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const $ = k.findIndex(
        (z) => z.toolCallId === b.toolCallId
      );
      if ($ === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const M = {
        ...k[$],
        state: "result",
        ...b
      };
      k[$] = M, T(b.toolCallId, M), y();
    },
    onDataPart(b) {
      J.push(...b), y();
    },
    onMessageAnnotationsPart(b) {
      H == null ? H = [...b] : H.push(...b), y();
    },
    onFinishStepPart(b) {
      d += 1, h = b.isContinued ? h : void 0, _ = void 0, O = void 0;
    },
    onStartStepPart(b) {
      f || (u.id = b.messageId), u.parts.push({ type: "step-start" }), y();
    },
    onFinishMessagePart(b) {
      A = b.finishReason, b.usage != null && (V = Mu(b.usage));
    },
    onErrorPart(b) {
      throw new Error(b);
    }
  }), r?.({ message: u, finishReason: A, usage: V });
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
  generateId: o = yo
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
  lastMessage: _,
  requestType: O = "generate"
}) {
  var T, J, H;
  const V = await (O === "resume" ? h(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (T = s?.()) == null ? void 0 : T.signal,
    credentials: r
  }) : h(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (J = s?.()) == null ? void 0 : J.signal,
    credentials: r
  })).catch((A) => {
    throw i(), A;
  });
  if (l)
    try {
      await l(V);
    } catch (A) {
      throw A;
    }
  if (!V.ok)
    throw i(), new Error(
      (H = await V.text()) != null ? H : "Failed to fetch the chat response."
    );
  if (!V.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await cf({
        stream: V.body,
        update: a,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await lf({
        stream: V.body,
        update: a,
        lastMessage: _,
        onToolCall: d,
        onFinish({ message: A, finishReason: y, usage: b }) {
          f && A != null && f(A, { usage: b, finishReason: y });
        },
        generateId: u
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
function _f() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function mf() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var yf = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Sr = {
  isOnline: _f,
  isDocumentVisible: mf,
  fetcher: yf
};
var lt = function() {
  return lt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, lt.apply(this, arguments);
}, Ht = function(e, t, n, r) {
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
}, bf = function(e, t) {
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
          return f = er.get(e), f && f.data.length && (d = f.data.filter(function(h) {
            return h.key === e;
          }), d.forEach(function(h, _) {
            typeof a.data < "u" && (h.data = a.data), h.error = a.error, h.isValidating = a.isValidating, h.isLoading = a.isValidating;
            var O = _ === d.length - 1;
            O || delete d[_];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function ys() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = lt({}, zi), i = !1, l = !1, a = go(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = lt(lt({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, h = typeof r == "function" ? r : Fe(r);
  typeof o > "u" && (o = s.fetcher);
  var _ = null;
  _ || (_ = xn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var O = function(F, V) {
    return Ht(e, void 0, void 0, function() {
      var A, y, b, k, $, M, z, de = this;
      return Bt(this, function(re) {
        switch (re.label) {
          case 0:
            return A = _.data === void 0, y = h.value, y ? (b = s.cache.get(y), k = b && b.data, _.isValidating = !0, _.isLoading = !k, k && (_.data = k.data, _.error = k.error), $ = F || o, !$ || !s.isDocumentVisible() && !A || V?.forceRevalidate !== void 0 && !V?.forceRevalidate ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : b && (M = !!(Date.now() - b.createdAt >= s.dedupingInterval || V?.forceRevalidate), !M) ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : (z = function() {
              return Ht(de, void 0, void 0, function() {
                var se, be, pe, ce;
                return Bt(this, function(U) {
                  switch (U.label) {
                    case 0:
                      return se = Ir.get(y), se ? [3, 2] : (be = Array.isArray(y) ? y : [y], pe = $.apply(void 0, Ef([], bf(be), !1)), Ir.set(y, pe, s.dedupingInterval), [4, ms(y, pe, s.cache, u)]);
                    case 1:
                      return U.sent(), [3, 4];
                    case 2:
                      return [4, ms(y, se.data, s.cache, u)];
                    case 3:
                      U.sent(), U.label = 4;
                    case 4:
                      return _.isValidating = !1, _.isLoading = !1, Ir.delete(y), _.error !== void 0 && (ce = !i && s.shouldRetryOnError && (V ? V.shouldRetryOnError : !0), ce && Nf(O, V ? V.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, k && s.revalidateDebounce ? (setTimeout(function() {
              return Ht(de, void 0, void 0, function() {
                return Bt(this, function(se) {
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
  }, T = function() {
    return Ht(e, void 0, void 0, function() {
      return Bt(this, function(F) {
        return [2, O(null, { shouldRetryOnError: !1 })];
      });
    });
  }, J = null;
  lo(function() {
    var F = function() {
      return Ht(e, void 0, void 0, function() {
        return Bt(this, function(V) {
          switch (V.label) {
            case 0:
              return !_.error && s.isOnline() ? [4, O()] : [3, 2];
            case 1:
              return V.sent(), [3, 3];
            case 2:
              J && clearTimeout(J), V.label = 3;
            case 3:
              return s.refreshInterval && !i && (J = setTimeout(F, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (J = setTimeout(F, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", T, !1), window.addEventListener("focus", T, !1));
  }), ao(function() {
    i = !0, J && clearTimeout(J), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", T, !1), window.removeEventListener("focus", T, !1));
    var F = er.get(h.value);
    F && (F.data = F.data.filter(function(V) {
      return V !== _;
    }));
  });
  try {
    Jt(h, function(F) {
      Je(h) || (h.value = F), _.key = F, _.isValidating = !!F, vf(h.value, _, u), !d && !l && h.value && O(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = lt(lt({}, Ll(_)), { mutate: function(F, V) {
    return O(F, lt(lt({}, V), { forceRevalidate: !0 }));
  } });
  return H;
}
function wf(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Of = ys.default || ys, bs = {}, Es = {};
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
  generateId: h = yo,
  onToolCall: _,
  fetch: O,
  keepLastMessageOnError: T = !0,
  maxSteps: J = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var F, V;
  const A = t ?? h(), y = `${e}|${A}`, { data: b, mutate: k } = Of(
    y,
    () => {
      var W;
      return (W = bs[y]) != null ? W : Pn(n);
    }
  ), $ = (F = Es[A]) != null ? F : Es[A] = Fe(
    "ready"
  );
  (V = b.value) != null || (b.value = Pn(n));
  const M = (W) => (bs[y] = W, k()), z = b, de = Fe(void 0), re = Fe(void 0);
  let se = null;
  async function be(W, { data: le, headers: me, body: Ve } = {}) {
    var xe, Ye, Pt;
    de.value = void 0, $.value = "submitted";
    const Tn = z.value.length, Nt = Wr(
      (xe = z.value[z.value.length - 1]) == null ? void 0 : xe.toolInvocations
    );
    try {
      se = new AbortController();
      const dt = Pn(W), c = dt;
      M(c);
      const p = (Ye = re.value) != null ? Ye : [], m = o ? c : c.map(
        ({
          role: N,
          content: E,
          experimental_attachments: v,
          data: I,
          annotations: D,
          toolInvocations: x,
          parts: w
        }) => ({
          role: N,
          content: E,
          ...v !== void 0 && {
            experimental_attachments: v
          },
          ...I !== void 0 && { data: I },
          ...D !== void 0 && { annotations: D },
          ...x !== void 0 && { toolInvocations: x },
          ...w !== void 0 && { parts: w }
        })
      );
      await ff({
        api: e,
        body: (Pt = H?.({
          id: A,
          messages: c,
          requestData: le,
          requestBody: Ve
        })) != null ? Pt : {
          id: A,
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
          $.value = "streaming", M([
            ...v ? c.slice(0, c.length - 1) : c,
            N
          ]), E?.length && (re.value = [...p, ...E]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          T || M(dt);
        },
        generateId: h,
        onToolCall: _,
        fetch: O,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Jr(c[c.length - 1])
      }), $.value = "ready";
    } catch (dt) {
      if (dt.name === "AbortError")
        return se = null, $.value = "ready", null;
      a && dt instanceof Error && a(dt), de.value = dt, $.value = "error";
    } finally {
      se = null;
    }
    df({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: Tn,
      maxSteps: J,
      messages: z.value
    }) && await be(z.value);
  }
  const pe = async (W, le) => {
    var me, Ve, xe;
    const Ye = await gs(
      (me = le?.experimental_attachments) != null ? me : W.experimental_attachments
    );
    return be(
      z.value.concat({
        ...W,
        id: (Ve = W.id) != null ? Ve : h(),
        createdAt: (xe = W.createdAt) != null ? xe : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Yi(W)
      }),
      le
    );
  }, ce = async (W) => {
    const le = z.value;
    return le.length === 0 ? null : le[le.length - 1].role === "assistant" ? be(le.slice(0, -1), W) : be(le, W);
  }, U = () => {
    se && (se.abort(), se = null);
  }, Y = (W) => {
    typeof W == "function" && (W = W(z.value)), M(Pn(W));
  }, ke = (W) => {
    typeof W == "function" && (W = W(re.value)), re.value = W;
  }, Et = Fe(r), vt = async (W, le = {}) => {
    var me;
    (me = W?.preventDefault) == null || me.call(W);
    const Ve = Et.value;
    if (!Ve && !le.allowEmptySubmit)
      return;
    const xe = await gs(
      le.experimental_attachments
    );
    be(
      z.value.concat({
        id: h(),
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
    }), M(me), $.value === "submitted" || $.value === "streaming")
      return;
    const Ve = me[me.length - 1];
    qi(Ve) && be(me);
  };
  return {
    id: A,
    messages: z,
    append: pe,
    error: de,
    reload: ce,
    stop: U,
    setMessages: Y,
    input: Et,
    handleSubmit: vt,
    isLoading: _o(
      () => $.value === "submitted" || $.value === "streaming"
    ),
    status: $,
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
  const t = Fe(!1), n = Fe(""), r = Fe(!0);
  let o = null, s = [], i = null;
  const l = () => {
    const h = window.SpeechRecognition || window.webkitSpeechRecognition;
    return r.value = !!h, h;
  }, a = () => {
    const h = l();
    return h ? (i = new h(), i.continuous = !0, i.interimResults = !0, i.lang = "zh-CN", i.onresult = (_) => {
      let O = "";
      for (let T = _.resultIndex; T < _.results.length; T++)
        _.results[T].isFinal && (O += _.results[T][0].transcript);
      if (O) {
        const T = O.trim();
        if (["结束对话", "退出语音", "关闭语音", "结束语音", "停止录音"].includes(T)) {
          console.log("[ASR] 检测到结束对话命令，自动停止录音"), d();
          return;
        }
        e(O);
      }
    }, i.onerror = (_) => {
      n.value = `语音识别错误: ${_.error}`, t.value = !1;
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
        o = new MediaRecorder(h), s = [], o.ondataavailable = (_) => {
          s.push(_.data);
        }, o.onstop = async () => {
          const _ = new Blob(s, { type: o?.mimeType });
          await u(_), h.getTracks().forEach((O) => O.stop());
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
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s, error: i } = xf({
      api: t.apiUrl,
      // onToolCall 是 AI SDK 推荐的、用于在前端处理工具调用的标准方式
      onToolCall: ({ toolCall: A }) => {
        switch (console.log("[onToolCall] AI 请求调用工具:", A), A.toolName) {
          case "navigateToPage": {
            const y = A.args.path;
            return console.log(`[onToolCall] 准备派发导航事件, 目标: ${y}`), window.dispatchEvent(new CustomEvent("ai-navigate", {
              detail: { path: y }
            })), { path: y };
          }
          case "zoomInOnPhoto": {
            const y = A.args.photoTitle;
            return console.log(`[onToolCall] 准备派发图片放大事件, 目标: ${y}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
              detail: { title: y }
            })), { title: y };
          }
          default:
            return {};
        }
      }
    }), { isRecording: l, start: a, stop: f } = Df((A) => {
      const y = A.trim();
      if (["发送", "提交", "发出"].includes(y)) return void o();
      if (["清空", "清除", "删除"].includes(y)) return void (r.value = "");
      r.value = y;
    }), d = Fe(!1), u = xn({ x: 0, y: 0 }), h = Fe(null), _ = Fe(null), O = Fe(!1);
    function T() {
      d.value = !d.value;
    }
    function J() {
      O.value || T();
    }
    function H(A) {
      return A.trim().startsWith("<audio");
    }
    const F = _o(() => {
      if (!s.value) return !1;
      const A = [...n.value].reverse().find((y) => y.role === "user");
      return !!(A && /摇骰子|掷骰子/.test(A.content));
    });
    Jt(n, async () => {
      await no(), _.value && (_.value.scrollTop = _.value.scrollHeight);
    }, { deep: !0 }), Jt(i, (A) => {
      A && console.error("[AI Bubble] useChat hook 发生错误:", A);
    });
    function V(A) {
      A.preventDefault();
      const y = h.value, b = A.clientX, k = A.clientY, $ = u.x, M = u.y;
      let z = !1;
      function de(se) {
        const be = se.clientX - b, pe = se.clientY - k;
        if (!z && (Math.abs(be) > 5 || Math.abs(pe) > 5) && (z = !0, O.value = !0), z) {
          const ce = Math.min(Math.max(0, $ + be), window.innerWidth - y.offsetWidth), U = Math.min(Math.max(0, M + pe), window.innerHeight - y.offsetHeight);
          u.x = ce, u.y = U;
        }
      }
      function re() {
        document.removeEventListener("mousemove", de), document.removeEventListener("mouseup", re), setTimeout(() => O.value = !1, 10);
      }
      document.addEventListener("mousemove", de), document.addEventListener("mouseup", re);
    }
    return lo(() => {
      const A = h.value, y = 20;
      u.x = window.innerWidth - A.offsetWidth - y, u.y = window.innerHeight - A.offsetHeight - y;
    }), (A, y) => (Ae(), $e("div", {
      ref_key: "containerRef",
      ref: h,
      class: "ai-bubble-container",
      style: sr({ left: u.x + "px", top: u.y + "px" })
    }, [
      ht("div", {
        class: "floating-ball",
        onMousedown: V,
        onClick: J
      }, "AI", 32),
      d.value ? (Ae(), $e("div", Sf, [
        d.value ? (Ae(), $e("div", {
          key: 0,
          class: "close-btn",
          onClick: T
        }, "×")) : Qt("", !0),
        ht("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: _
        }, [
          he(n).length === 0 ? (Ae(), $e("div", If, "有什么可以帮您的吗？")) : Qt("", !0),
          (Ae(!0), $e(je, null, Ca(he(n), (b) => (Ae(), $e("div", {
            key: b.id,
            class: fn(["msg-line", b.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            b.role === "user" || b.role === "assistant" ? (Ae(), $e(je, { key: 0 }, [
              H(b.content) ? (Ae(), $e("div", {
                key: 0,
                innerHTML: b.content
              }, null, 8, Cf)) : (Ae(), $e("div", Tf, Ds(b.content), 1))
            ], 64)) : Qt("", !0)
          ], 2))), 128)),
          he(s) ? (Ae(), $e("div", Vf, [
            F.value ? (Ae(), $e("span", Af, "⚀⚂⚅")) : (Ae(), $e("span", Rf, "思考中..."))
          ])) : Qt("", !0)
        ], 512),
        ht("form", {
          onSubmit: y[3] || (y[3] = as(
            //@ts-ignore
            (...b) => he(o) && he(o)(...b),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          pa(ht("textarea", {
            "onUpdate:modelValue": y[0] || (y[0] = (b) => ae(r) ? r.value = b : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: y[1] || (y[1] = lu(as(
              //@ts-ignore
              (...b) => he(o) && he(o)(...b),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ru, he(r)]
          ]),
          ht("button", {
            type: "button",
            class: fn(["btn-voice", { listening: he(l) }]),
            onClick: y[2] || (y[2] = (b) => he(l) ? he(f)() : he(a)()),
            title: "语音输入"
          }, "🎤", 2),
          ht("button", {
            type: "submit",
            class: "btn-send",
            disabled: he(s) || !he(r).trim()
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
