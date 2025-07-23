var bs = {};
/**
* @vue/shared v3.5.17
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
const Z = bs.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = bs.NODE_ENV !== "production" ? Object.freeze([]) : [], de = () => {
}, zi = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Gr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Xi = Object.prototype.hasOwnProperty, q = (e, t) => Xi.call(e, t), k = Array.isArray, It = (e) => tr(e) === "[object Map]", vs = (e) => tr(e) === "[object Set]", L = (e) => typeof e == "function", oe = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", zr = (e) => (ee(e) || L(e)) && L(e.then) && L(e.catch), Ns = Object.prototype.toString, tr = (e) => Ns.call(e), Xr = (e) => tr(e).slice(8, -1), nr = (e) => tr(e) === "[object Object]", Zr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ ut(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zi = /* @__PURE__ */ ut(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Qi = /-(\w)/g, Te = rr(
  (e) => e.replace(Qi, (t, n) => n ? n.toUpperCase() : "")
), el = /\B([A-Z])/g, Ce = rr(
  (e) => e.replace(el, "-$1").toLowerCase()
), or = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = rr(
  (e) => e ? `on${or(e)}` : ""
), mt = (e, t) => !Object.is(e, t), jt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, an = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Tr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, wo = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Oo;
const Nn = () => Oo || (Oo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sr(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = oe(r) ? ol(r) : sr(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (oe(e) || ee(e))
    return e;
}
const tl = /;(?![^(]*\))/g, nl = /:([^]+)/, rl = /\/\*[^]*?\*\//g;
function ol(e) {
  const t = {};
  return e.replace(rl, "").split(tl).forEach((n) => {
    if (n) {
      const r = n.split(nl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function cn(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (k(e))
    for (let n = 0; n < e.length; n++) {
      const r = cn(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const sl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", il = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ll = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", al = /* @__PURE__ */ ut(sl), cl = /* @__PURE__ */ ut(il), ul = /* @__PURE__ */ ut(ll), fl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", dl = /* @__PURE__ */ ut(fl);
function ws(e) {
  return !!e || e === "";
}
const Os = (e) => !!(e && e.__v_isRef === !0), Vr = (e) => oe(e) ? e : e == null ? "" : k(e) || ee(e) && (e.toString === Ns || !L(e.toString)) ? Os(e) ? Vr(e.value) : JSON.stringify(e, xs, 2) : String(e), xs = (e, t) => Os(t) ? xs(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[gr(r, s) + " =>"] = o, n),
    {}
  )
} : vs(t) ? {
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
class pl {
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
function hl() {
  return Ie;
}
let X;
const _r = /* @__PURE__ */ new WeakSet();
class Ds {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Is(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xo(this), Cs(this);
    const t = X, n = Ue;
    X = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      te.NODE_ENV !== "production" && X !== this && Be(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ts(this), X = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        to(t);
      this.deps = this.depsTail = void 0, xo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _r.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ar(this) && this.run();
  }
  get dirty() {
    return Ar(this);
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
function Qr() {
  Ss++;
}
function eo() {
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
    r.version === -1 ? (r === n && (n = o), to(r), gl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === un) || (e.globalVersion = un, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ar(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = Ue;
  X = e, Ue = !0;
  try {
    Cs(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, Ue = r, Ts(e), e.flags &= -3;
  }
}
function to(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), te.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      to(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function gl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const As = [];
function Ke() {
  As.push(Ue), Ue = !1;
}
function We() {
  const e = As.pop();
  Ue = e === void 0 ? !0 : e;
}
function xo(e) {
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
class _l {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class no {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, te.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !Ue || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new _l(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, Rs(n);
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
    Qr();
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
      eo();
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
const Un = /* @__PURE__ */ new WeakMap(), Ct = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Rr = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function fe(e, t, n) {
  if (Ue && X) {
    let r = Un.get(e);
    r || Un.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new no()), o.map = r, o.key = n), te.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Qe(e, t, n, r, o, s) {
  const i = Un.get(e);
  if (!i) {
    un++;
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
  if (Qr(), t === "clear")
    i.forEach(l);
  else {
    const a = k(e), u = a && Zr(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((f, g) => {
        (g === "length" || g === fn || !yt(g) && g >= d) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(fn)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(Ct)), It(e) && l(i.get(Rr)));
          break;
        case "delete":
          a || (l(i.get(Ct)), It(e) && l(i.get(Rr)));
          break;
        case "set":
          It(e) && l(i.get(Ct));
          break;
      }
  }
  eo();
}
function ml(e, t) {
  const n = Un.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = K(e);
  return t === e ? t : (fe(t, "iterate", fn), we(e) ? t : t.map(ge));
}
function ir(e) {
  return fe(e = K(e), "iterate", fn), e;
}
const El = {
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
    return Er(this, "includes", e);
  },
  indexOf(...e) {
    return Er(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Er(this, "lastIndexOf", e);
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
    return Do(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Do(this, "reduceRight", e, t);
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
    return mr(this, "values", ge);
  }
};
function mr(e, t, n) {
  const r = ir(e), o = r[t]();
  return r !== e && !we(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const yl = Array.prototype;
function it(e, t, n, r, o, s) {
  const i = ir(e), l = i !== e && !we(e), a = i[t];
  if (a !== yl[t]) {
    const f = a.apply(e, s);
    return l ? ge(f) : f;
  }
  let u = n;
  i !== e && (l ? u = function(f, g) {
    return n.call(this, ge(f), g, e);
  } : n.length > 2 && (u = function(f, g) {
    return n.call(this, f, g, e);
  }));
  const d = a.call(i, u, r);
  return l && o ? o(d) : d;
}
function Do(e, t, n, r) {
  const o = ir(e);
  let s = n;
  return o !== e && (we(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, ge(l), a, e);
  }), o[t](s, ...r);
}
function Er(e, t, n) {
  const r = K(e);
  fe(r, "iterate", fn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && dn(n[0]) ? (n[0] = K(n[0]), r[t](...n)) : o;
}
function Gt(e, t, n = []) {
  Ke(), Qr();
  const r = K(e)[t].apply(e, n);
  return eo(), We(), r;
}
const bl = /* @__PURE__ */ ut("__proto__,__v_isRef,__isVue"), Ps = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function vl(e) {
  yt(e) || (e = String(e));
  const t = K(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
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
    const i = k(t);
    if (!o) {
      let a;
      if (i && (a = El[n]))
        return a;
      if (n === "hasOwnProperty")
        return vl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ae(t) ? t : r
    );
    return (yt(n) ? Ps.has(n) : bl(n)) || (o || fe(t, "get", n), s) ? l : ae(l) ? i && Zr(n) ? l : l.value : ee(l) ? o ? Bn(l) : wn(l) : l;
  }
}
class ks extends Ms {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Je(s);
      if (!we(r) && !Je(r) && (s = K(s), r = K(r)), !k(t) && ae(s) && !ae(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = k(t) && Zr(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
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
    return (!yt(n) || !Ps.has(n)) && fe(t, "has", n), r;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      k(t) ? "length" : Ct
    ), Reflect.ownKeys(t);
  }
}
class $s extends Ms {
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
const Nl = /* @__PURE__ */ new ks(), wl = /* @__PURE__ */ new $s(), Ol = /* @__PURE__ */ new ks(!0), xl = /* @__PURE__ */ new $s(!0), Pr = (e) => e, Cn = (e) => Reflect.getPrototypeOf(e);
function Dl(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = K(o), i = It(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = o[e](...r), d = n ? Pr : t ? Kn : ge;
    return !t && fe(
      s,
      "iterate",
      a ? Rr : Ct
    ), {
      // iterator protocol
      next() {
        const { value: f, done: g } = u.next();
        return g ? { value: f, done: g } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
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
      Be(
        `${or(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Sl(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      e || (mt(o, l) && fe(i, "get", o), fe(i, "get", l));
      const { has: a } = Cn(i), u = t ? Pr : e ? Kn : ge;
      if (a.call(i, o))
        return u(s.get(o));
      if (a.call(i, l))
        return u(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && fe(K(o), "iterate", Ct), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      return e || (mt(o, l) && fe(i, "has", o), fe(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const i = this, l = i.__v_raw, a = K(l), u = t ? Pr : e ? Kn : ge;
      return !e && fe(a, "iterate", Ct), l.forEach((d, f) => o.call(s, u(d), u(f), i));
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
        !t && !we(o) && !Je(o) && (o = K(o));
        const s = K(this);
        return Cn(s).has.call(s, o) || (s.add(o), Qe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !we(s) && !Je(s) && (s = K(s));
        const i = K(this), { has: l, get: a } = Cn(i);
        let u = l.call(i, o);
        u ? te.NODE_ENV !== "production" && So(i, l, o) : (o = K(o), u = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), u ? mt(s, d) && Qe(i, "set", o, s, d) : Qe(i, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: i, get: l } = Cn(s);
        let a = i.call(s, o);
        a ? te.NODE_ENV !== "production" && So(s, i, o) : (o = K(o), a = i.call(s, o));
        const u = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && Qe(s, "delete", o, void 0, u), d;
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
    n[o] = Dl(o, e, t);
  }), n;
}
function lr(e, t) {
  const n = Sl(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    q(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Il = {
  get: /* @__PURE__ */ lr(!1, !1)
}, Cl = {
  get: /* @__PURE__ */ lr(!1, !0)
}, Tl = {
  get: /* @__PURE__ */ lr(!0, !1)
}, Vl = {
  get: /* @__PURE__ */ lr(!0, !0)
};
function So(e, t, n) {
  const r = K(n);
  if (r !== n && t.call(e, r)) {
    const o = Xr(e);
    Be(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const js = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap();
function Al(e) {
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
function Rl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Al(Xr(e));
}
function wn(e) {
  return Je(e) ? e : ar(
    e,
    !1,
    Nl,
    Il,
    js
  );
}
function Pl(e) {
  return ar(
    e,
    !1,
    Ol,
    Cl,
    Fs
  );
}
function Bn(e) {
  return ar(
    e,
    !0,
    wl,
    Tl,
    Ls
  );
}
function tt(e) {
  return ar(
    e,
    !0,
    xl,
    Vl,
    Hs
  );
}
function ar(e, t, n, r, o) {
  if (!ee(e))
    return te.NODE_ENV !== "production" && Be(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Rl(e);
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
function we(e) {
  return !!(e && e.__v_isShallow);
}
function dn(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function Ml(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const ge = (e) => ee(e) ? wn(e) : e, Kn = (e) => ee(e) ? Bn(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function nt(e) {
  return kl(e, !1);
}
function kl(e, t) {
  return ae(e) ? e : new $l(e, t);
}
class $l {
  constructor(t, n) {
    this.dep = new no(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : K(t), this._value = n ? t : ge(t), this.__v_isShallow = n;
  }
  get value() {
    return te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || we(t) || Je(t);
    t = r ? t : K(t), mt(t, n) && (this._rawValue = t, this._value = r ? t : ge(t), te.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function ve(e) {
  return ae(e) ? e.value : e;
}
const jl = {
  get: (e, t, n) => t === "__v_raw" ? e : ve(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ae(o) && !ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Us(e) {
  return Tt(e) ? e : new Proxy(e, jl);
}
function Fl(e) {
  te.NODE_ENV !== "production" && !dn(e) && Be("toRefs() expects a reactive object but received a plain one.");
  const t = k(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Hl(e, n);
  return t;
}
class Ll {
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
    return ml(K(this._object), this._key);
  }
}
function Hl(e, t, n) {
  const r = e[t];
  return ae(r) ? r : new Ll(e, t, n);
}
class Ul {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new no(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = un - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
    this.setter ? this.setter(t) : te.NODE_ENV !== "production" && Be("Write operation failed: computed value is readonly");
  }
}
function Bl(e, t, n = !1) {
  let r, o;
  return L(e) ? r = e : (r = e.get, o = e.set), new Ul(r, o, n);
}
const Vn = {}, Wn = /* @__PURE__ */ new WeakMap();
let St;
function Kl(e, t = !1, n = St) {
  if (n) {
    let r = Wn.get(n);
    r || Wn.set(n, r = []), r.push(e);
  } else te.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Wl(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, u = (y) => {
    (n.onWarn || Be)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (y) => o ? y : we(y) || o === !1 || o === 0 ? ct(y, 1) : ct(y);
  let f, g, _, I, A = !1, J = !1;
  if (ae(e) ? (g = () => e.value, A = we(e)) : Tt(e) ? (g = () => d(e), A = !0) : k(e) ? (J = !0, A = e.some((y) => Tt(y) || we(y)), g = () => e.map((y) => {
    if (ae(y))
      return y.value;
    if (Tt(y))
      return d(y);
    if (L(y))
      return a ? a(y, 2) : y();
    te.NODE_ENV !== "production" && u(y);
  })) : L(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (_) {
      Ke();
      try {
        _();
      } finally {
        We();
      }
    }
    const y = St;
    St = f;
    try {
      return a ? a(e, 3, [I]) : e(I);
    } finally {
      St = y;
    }
  } : (g = de, te.NODE_ENV !== "production" && u(e)), t && o) {
    const y = g, w = o === !0 ? 1 / 0 : o;
    g = () => ct(y(), w);
  }
  const H = hl(), F = () => {
    f.stop(), H && H.active && Gr(H.effects, f);
  };
  if (s && t) {
    const y = t;
    t = (...w) => {
      y(...w), F();
    };
  }
  let D = J ? new Array(e.length).fill(Vn) : Vn;
  const V = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const w = f.run();
        if (o || A || (J ? w.some(($, R) => mt($, D[R])) : mt(w, D))) {
          _ && _();
          const $ = St;
          St = f;
          try {
            const R = [
              w,
              // pass undefined as the old value when it's changed for the first time
              D === Vn ? void 0 : J && D[0] === Vn ? [] : D,
              I
            ];
            D = w, a ? a(t, 3, R) : (
              // @ts-expect-error
              t(...R)
            );
          } finally {
            St = $;
          }
        }
      } else
        f.run();
  };
  return l && l(V), f = new Ds(g), f.scheduler = i ? () => i(V, !1) : V, I = (y) => Kl(y, !1, f), _ = f.onStop = () => {
    const y = Wn.get(f);
    if (y) {
      if (a)
        a(y, 4);
      else
        for (const w of y) w();
      Wn.delete(f);
    }
  }, te.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? r ? V(!0) : D = f.run() : i ? i(V.bind(null, !0), !0) : f.run(), F.pause = f.pause.bind(f), F.resume = f.resume.bind(f), F.stop = F, F;
}
function ct(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ae(e))
    ct(e.value, t, n);
  else if (k(e))
    for (let r = 0; r < e.length; r++)
      ct(e[r], t, n);
  else if (vs(e) || It(e))
    e.forEach((r) => {
      ct(r, t, n);
    });
  else if (nr(e)) {
    for (const r in e)
      ct(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ct(e[r], t, n);
  }
  return e;
}
var h = {};
const Vt = [];
function Rn(e) {
  Vt.push(e);
}
function Pn() {
  Vt.pop();
}
let yr = !1;
function S(e, ...t) {
  if (yr) return;
  yr = !0, Ke();
  const n = Vt.length ? Vt[Vt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Jl();
  if (r)
    Yt(
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
`, ...Yl(o)), console.warn(...s);
  }
  We(), yr = !1;
}
function Jl() {
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
function Yl(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...ql(n));
  }), t;
}
function ql({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${hr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Gl(e.props), s] : [o + s];
}
function Gl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Bs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Bs(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ae(t) ? (t = Bs(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
}
const ro = {
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
    return o && zr(o) && o.catch((s) => {
      On(s, t, n);
    }), o;
  }
  if (k(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(st(e[s], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && S(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function On(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = h.NODE_ENV !== "production" ? ro[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Ke(), Yt(s, null, 10, [
        e,
        a,
        u
      ]), We();
      return;
    }
  }
  zl(e, n, o, r, i);
}
function zl(e, t, n, r = !0, o = !1) {
  if (h.NODE_ENV !== "production") {
    const s = ro[t];
    if (n && Rn(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Pn(), r)
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
let ht = null, Ft = 0;
const Ks = /* @__PURE__ */ Promise.resolve();
let Jn = null;
const Xl = 100;
function Yn(e) {
  const t = Jn || Ks;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zl(e) {
  let t = Ze + 1, n = Ne.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Ne[r], s = pn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function cr(e) {
  if (!(e.flags & 1)) {
    const t = pn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= pn(n) ? Ne.push(e) : Ne.splice(Zl(t), 0, e), e.flags |= 1, Ws();
  }
}
function Ws() {
  Jn || (Jn = Ks.then(qs));
}
function Js(e) {
  k(e) ? Kt.push(...e) : ht && e.id === -1 ? ht.splice(Ft + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), Ws();
}
function Io(e, t, n = Ze + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ne.length; n++) {
    const r = Ne[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && oo(t, r))
        continue;
      Ne.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ys(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, r) => pn(n) - pn(r)
    );
    if (Kt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ft = 0; Ft < ht.length; Ft++) {
      const n = ht[Ft];
      h.NODE_ENV !== "production" && oo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ht = null, Ft = 0;
  }
}
const pn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qs(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => oo(e, n) : de;
  try {
    for (Ze = 0; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
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
    for (; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      n && (n.flags &= -2);
    }
    Ze = -1, Ne.length = 0, Ys(e), Jn = null, (Ne.length || Kt.length) && qs(e);
  }
}
function oo(e, t) {
  const n = e.get(t) || 0;
  if (n > Xl) {
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
const Mn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (Nn().__VUE_HMR_RUNTIME__ = {
  createRecord: br(Gs),
  rerender: br(ta),
  reload: br(na)
});
const Rt = /* @__PURE__ */ new Map();
function Ql(e) {
  const t = e.type.__hmrId;
  let n = Rt.get(t);
  n || (Gs(t, e.type), n = Rt.get(t)), n.instances.add(e);
}
function ea(e) {
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
function ta(e, t) {
  const n = Rt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, qn(r.type).render = t), r.renderCache = [], rt = !0, r.update(), rt = !1;
  }));
}
function na(e, t) {
  const n = Rt.get(e);
  if (!n) return;
  t = qn(t), Co(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = qn(s.type);
    let l = Mn.get(i);
    l || (i !== n.initialDef && Co(i, t), Mn.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? cr(() => {
      rt = !0, s.parent.update(), rt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Js(() => {
    Mn.clear();
  });
}
function Co(e, t) {
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
let et, Zt = [], Mr = !1;
function xn(e, ...t) {
  et ? et.emit(e, ...t) : Mr || Zt.push({ event: e, args: t });
}
function zs(e, t) {
  var n, r;
  et = e, et ? (et.enabled = !0, Zt.forEach(({ event: o, args: s }) => et.emit(o, ...s)), Zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    zs(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Mr = !0, Zt = []);
  }, 3e3)) : (Mr = !0, Zt = []);
}
function ra(e, t) {
  xn("app:init", e, t, {
    Fragment: Le,
    Text: Dn,
    Comment: Pe,
    Static: jn
  });
}
function oa(e) {
  xn("app:unmount", e);
}
const sa = /* @__PURE__ */ so(
  "component:added"
  /* COMPONENT_ADDED */
), Xs = /* @__PURE__ */ so(
  "component:updated"
  /* COMPONENT_UPDATED */
), ia = /* @__PURE__ */ so(
  "component:removed"
  /* COMPONENT_REMOVED */
), la = (e) => {
  et && typeof et.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !et.cleanupBuffer(e) && ia(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function so(e) {
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
const aa = /* @__PURE__ */ Zs(
  "perf:start"
  /* PERFORMANCE_START */
), ca = /* @__PURE__ */ Zs(
  "perf:end"
  /* PERFORMANCE_END */
);
function Zs(e) {
  return (t, n, r) => {
    xn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function ua(e, t, n) {
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
function fa(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Ho(-1);
    const s = Gn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Gn(s), r._d && Ho(1);
    }
    return h.NODE_ENV !== "production" && Xs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ei(e) {
  Zi(e) && S("Do not use built-in directive ids as custom directive id: " + e);
}
function da(e, t) {
  if (Ee === null)
    return h.NODE_ENV !== "production" && S("withDirectives can only be used inside render functions."), e;
  const n = pr(Ee), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = Z] = t[o];
    s && (L(s) && (s = {
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
function wt(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[r];
    a && (Ke(), st(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), We());
  }
}
const pa = Symbol("_vte"), ha = (e) => e.__isTeleport;
function io(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, io(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
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
const ga = /* @__PURE__ */ new WeakSet();
function rn(e, t, n, r, o = !1) {
  if (k(e)) {
    e.forEach(
      (I, A) => rn(
        I,
        t && (k(t) ? t[A] : t),
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
  const s = r.shapeFlag & 4 ? pr(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    S(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = l.refs === Z ? l.refs = {} : l.refs, f = l.setupState, g = K(f), _ = f === Z ? () => !1 : (I) => h.NODE_ENV !== "production" && (q(g, I) && !ae(g[I]) && S(
    `Template ref "${I}" used on a non-ref value. It will not work in the production build.`
  ), ga.has(g[I])) ? !1 : q(g, I);
  if (u != null && u !== a && (oe(u) ? (d[u] = null, _(u) && (f[u] = null)) : ae(u) && (u.value = null)), L(a))
    Yt(a, l, 12, [i, d]);
  else {
    const I = oe(a), A = ae(a);
    if (I || A) {
      const J = () => {
        if (e.f) {
          const H = I ? _(a) ? f[a] : d[a] : a.value;
          o ? k(H) && Gr(H, s) : k(H) ? H.includes(s) || H.push(s) : I ? (d[a] = [s], _(a) && (f[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else I ? (d[a] = i, _(a) && (f[a] = i)) : A ? (a.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (J.id = -1, Ae(J, n)) : J();
    } else h.NODE_ENV !== "production" && S("Invalid template ref type:", a, `(${typeof a})`);
  }
}
Nn().requestIdleCallback;
Nn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, lo = (e) => e.type.__isKeepAlive;
function _a(e, t) {
  ri(e, "a", t);
}
function ma(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = he) {
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
      lo(o.parent.vnode) && Ea(r, t, n, o), o = o.parent;
  }
}
function Ea(e, t, n, r) {
  const o = ur(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  co(() => {
    Gr(r[t], o);
  }, n);
}
function ur(e, t, n = he, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ke();
      const l = Sn(n), a = st(t, n, e, i);
      return l(), We(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const o = Dt(ro[e].replace(/ hook$/, ""));
    S(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ft = (e) => (t, n = he) => {
  (!gn || e === "sp") && ur(e, (...r) => t(...r), n);
}, ya = ft("bm"), ao = ft("m"), ba = ft(
  "bu"
), va = ft("u"), Na = ft(
  "bum"
), co = ft("um"), wa = ft(
  "sp"
), Oa = ft("rtg"), xa = ft("rtc");
function Da(e, t = he) {
  ur("ec", e, t);
}
const Sa = Symbol.for("v-ndc");
function Ia(e, t, n, r) {
  let o;
  const s = n, i = k(e);
  if (i || oe(e)) {
    const l = i && Tt(e);
    let a = !1, u = !1;
    l && (a = !we(e), u = Je(e), e = ir(e)), o = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      o[d] = t(
        a ? u ? Kn(ge(e[d])) : ge(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && S(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
      for (let a = 0, u = l.length; a < u; a++) {
        const d = l[a];
        o[a] = t(e[d], d, a, s);
      }
    }
  else
    o = [];
  return o;
}
const kr = (e) => e ? Si(e) ? pr(e) : kr(e.parent) : null, At = (
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
    $parent: (e) => kr(e.parent),
    $root: (e) => kr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ii(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yn.bind(e.proxy)),
    $watch: (e) => lc.bind(e)
  })
), uo = (e) => e === "_" || e === "$", vr = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), oi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
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
        $r && (i[t] = 0);
      }
    }
    const d = At[t];
    let f, g;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), h.NODE_ENV !== "production" && Zn()) : h.NODE_ENV !== "production" && t === "$slots" && fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Z && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, q(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && Ee && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && uo(t[0]) && q(o, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && S(
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
    let l;
    return !!n[i] || e !== Z && q(e, i) || vr(t, i) || (l = s[0]) && q(l, i) || q(r, i) || q(At, i) || q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (oi.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ca(e) {
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
function Ta(e) {
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
function Va(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(K(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (uo(r[0])) {
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
function To(e) {
  return k(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Aa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? S(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let $r = !0;
function Ra(e) {
  const t = ii(e), n = e.proxy, r = e.ctx;
  $r = !1, t.beforeCreate && Vo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: g,
    beforeUpdate: _,
    updated: I,
    activated: A,
    deactivated: J,
    beforeDestroy: H,
    beforeUnmount: F,
    destroyed: D,
    unmounted: V,
    render: y,
    renderTracked: w,
    renderTriggered: $,
    errorCaptured: R,
    serverPrefetch: P,
    // public API
    expose: z,
    inheritAttrs: pe,
    // assets
    components: re,
    directives: se,
    filters: Me
  } = t, Oe = h.NODE_ENV !== "production" ? Aa() : null;
  if (h.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const Y in B)
        Oe("Props", Y);
  }
  if (u && Pa(u, r, Oe), i)
    for (const B in i) {
      const Y = i[B];
      L(Y) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: Y.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = Y.bind(n), h.NODE_ENV !== "production" && Oe("Methods", B)) : h.NODE_ENV !== "production" && S(
        `Method "${B}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !L(o) && S(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = o.call(n, n);
    if (h.NODE_ENV !== "production" && zr(B) && S(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(B))
      h.NODE_ENV !== "production" && S("data() should return an object.");
    else if (e.data = wn(B), h.NODE_ENV !== "production")
      for (const Y in B)
        Oe("Data", Y), uo(Y[0]) || Object.defineProperty(r, Y, {
          configurable: !0,
          enumerable: !0,
          get: () => B[Y],
          set: de
        });
  }
  if ($r = !0, s)
    for (const B in s) {
      const Y = s[B], ke = L(Y) ? Y.bind(n, n) : L(Y.get) ? Y.get.bind(n, n) : de;
      h.NODE_ENV !== "production" && ke === de && S(`Computed property "${B}" has no getter.`);
      const bt = !L(Y) && L(Y.set) ? Y.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        S(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : de, vt = _o({
        get: ke,
        set: bt
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (dt) => vt.value = dt
      }), h.NODE_ENV !== "production" && Oe("Computed", B);
    }
  if (l)
    for (const B in l)
      si(l[B], r, n, B);
  if (a) {
    const B = L(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach((Y) => {
      La(Y, B[Y]);
    });
  }
  d && Vo(d, e, "c");
  function ue(B, Y) {
    k(Y) ? Y.forEach((ke) => B(ke.bind(n))) : Y && B(Y.bind(n));
  }
  if (ue(ya, f), ue(ao, g), ue(ba, _), ue(va, I), ue(_a, A), ue(ma, J), ue(Da, R), ue(xa, w), ue(Oa, $), ue(Na, F), ue(co, V), ue(wa, P), k(z))
    if (z.length) {
      const B = e.exposed || (e.exposed = {});
      z.forEach((Y) => {
        Object.defineProperty(B, Y, {
          get: () => n[Y],
          set: (ke) => n[Y] = ke
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === de && (e.render = y), pe != null && (e.inheritAttrs = pe), re && (e.components = re), se && (e.directives = se), P && ni(e);
}
function Pa(e, t, n = de) {
  k(e) && (e = jr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = kn(
      o.from || r,
      o.default,
      !0
    ) : s = kn(o.from || r) : s = kn(o), ae(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Vo(e, t, n) {
  st(
    k(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function si(e, t, n, r) {
  let o = r.includes(".") ? Ei(n, r) : () => n[r];
  if (oe(e)) {
    const s = t[e];
    L(s) ? sn(o, s) : h.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e}"`, s);
  } else if (L(e))
    sn(o, e.bind(n));
  else if (ee(e))
    if (k(e))
      e.forEach((s) => si(s, t, n, r));
    else {
      const s = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(s) ? sn(o, s, e) : h.NODE_ENV !== "production" && S(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && S(`Invalid watch option: "${r}"`, e);
}
function ii(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (u) => zn(a, u, i, !0)
  ), zn(a, t, i)), ee(t) && s.set(t, a), a;
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
      const l = Ma[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ma = {
  data: Ao,
  props: Ro,
  emits: Ro,
  // objects
  methods: Qt,
  computed: Qt,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: Qt,
  directives: Qt,
  // watch
  watch: $a,
  // provide / inject
  provide: Ao,
  inject: ka
};
function Ao(e, t) {
  return t ? e ? function() {
    return ie(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ka(e, t) {
  return Qt(jr(e), jr(t));
}
function jr(e) {
  if (k(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Qt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ro(e, t) {
  return e ? k(e) && k(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    To(e),
    To(t ?? {})
  ) : t;
}
function $a(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = be(e[r], t[r]);
  return n;
}
function li() {
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
let ja = 0;
function Fa(e, t) {
  return function(r, o = null) {
    L(r) || (r = ie({}, r)), o != null && !ee(o) && (h.NODE_ENV !== "production" && S("root props passed to app.mount() must be an object."), o = null);
    const s = li(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = s.app = {
      _uid: ja++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Wo,
      get config() {
        return s.config;
      },
      set config(d) {
        h.NODE_ENV !== "production" && S(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return i.has(d) ? h.NODE_ENV !== "production" && S("Plugin has already been applied to target app.") : d && L(d.install) ? (i.add(d), d.install(u, ...f)) : L(d) ? (i.add(d), d(u, ...f)) : h.NODE_ENV !== "production" && S(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && S(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), u;
      },
      component(d, f) {
        return h.NODE_ENV !== "production" && Br(d, s.config), f ? (h.NODE_ENV !== "production" && s.components[d] && S(`Component "${d}" has already been registered in target app.`), s.components[d] = f, u) : s.components[d];
      },
      directive(d, f) {
        return h.NODE_ENV !== "production" && ei(d), f ? (h.NODE_ENV !== "production" && s.directives[d] && S(`Directive "${d}" has already been registered in target app.`), s.directives[d] = f, u) : s.directives[d];
      },
      mount(d, f, g) {
        if (a)
          h.NODE_ENV !== "production" && S(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && S(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = u._ceVNode || ot(r, o);
          return _.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const I = Et(_);
            I.el = null, e(I, d, g);
          }), e(_, d, g), a = !0, u._container = d, d.__vue_app__ = u, h.NODE_ENV !== "production" && (u._instance = _.component, ra(u, Wo)), pr(_.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && S(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (st(
          l,
          u._instance,
          16
        ), e(null, u._container), h.NODE_ENV !== "production" && (u._instance = null, oa(u)), delete u._container.__vue_app__) : h.NODE_ENV !== "production" && S("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return h.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? S(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : S(
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
function La(e, t) {
  if (!he)
    h.NODE_ENV !== "production" && S("provide() can only be used inside setup().");
  else {
    let n = he.provides;
    const r = he.parent && he.parent.provides;
    r === n && (n = he.provides = Object.create(r)), n[e] = t;
  }
}
function kn(e, t, n = !1) {
  const r = he || Ee;
  if (r || Wt) {
    let o = Wt ? Wt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const ai = {}, ci = () => Object.create(ai), ui = (e) => Object.getPrototypeOf(e) === ai;
function Ha(e, t, n, r = !1) {
  const o = {}, s = ci();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  h.NODE_ENV !== "production" && pi(t || {}, o, e), n ? e.props = r ? o : Pl(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ua(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ba(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = K(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Ua(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let g = d[f];
        if (fr(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (a)
          if (q(s, g))
            _ !== s[g] && (s[g] = _, u = !0);
          else {
            const I = Te(g);
            o[I] = Fr(
              a,
              l,
              I,
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
    for (const f in l)
      (!t || // for camelCase
      !q(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ce(f)) === f || !q(t, d))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[f] = Fr(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== l)
      for (const f in s)
        (!t || !q(t, f)) && (delete s[f], u = !0);
  }
  u && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && pi(t || {}, o, e);
}
function fi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (en(a))
        continue;
      const u = t[a];
      let d;
      o && q(o, d = Te(a)) ? !s || !s.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : fr(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, i = !0);
    }
  if (s) {
    const a = K(n), u = l || Z;
    for (let d = 0; d < s.length; d++) {
      const f = s[d];
      n[f] = Fr(
        o,
        a,
        f,
        u[f],
        e,
        !q(u, f)
      );
    }
  }
  return i;
}
function Fr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && L(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const d = Sn(o);
          r = u[n] = a.call(
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
const Ka = /* @__PURE__ */ new WeakMap();
function di(e, t, n = !1) {
  const r = n ? Ka : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const d = (f) => {
      a = !0;
      const [g, _] = di(f, t, !0);
      ie(i, g), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return ee(e) && r.set(e, Bt), Bt;
  if (k(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !oe(s[d]) && S("props must be strings when using array syntax.", s[d]);
      const f = Te(s[d]);
      Po(f) && (i[f] = Z);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !ee(s) && S("invalid props options", s);
    for (const d in s) {
      const f = Te(d);
      if (Po(f)) {
        const g = s[d], _ = i[f] = k(g) || L(g) ? { type: g } : ie({}, g), I = _.type;
        let A = !1, J = !0;
        if (k(I))
          for (let H = 0; H < I.length; ++H) {
            const F = I[H], D = L(F) && F.name;
            if (D === "Boolean") {
              A = !0;
              break;
            } else D === "String" && (J = !1);
          }
        else
          A = L(I) && I.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = A, _[
          1
          /* shouldCastTrue */
        ] = J, (A || q(_, "default")) && l.push(f);
      }
    }
  }
  const u = [i, l];
  return ee(e) && r.set(e, u), u;
}
function Po(e) {
  return e[0] !== "$" && !en(e) ? !0 : (h.NODE_ENV !== "production" && S(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Wa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function pi(e, t, n) {
  const r = K(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Te(i));
  for (const i in o) {
    let l = o[i];
    l != null && Ja(
      i,
      r[i],
      l,
      h.NODE_ENV !== "production" ? tt(r) : r,
      !s.includes(i)
    );
  }
}
function Ja(e, t, n, r, o) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    S('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let u = !1;
      const d = k(s) ? s : [s], f = [];
      for (let g = 0; g < d.length && !u; g++) {
        const { valid: _, expectedType: I } = qa(t, d[g]);
        f.push(I || ""), u = _;
      }
      if (!u) {
        S(Ga(e, t, f));
        return;
      }
    }
    l && !l(t, r) && S('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ya = /* @__PURE__ */ ut(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function qa(e, t) {
  let n;
  const r = Wa(t);
  if (r === "null")
    n = e === null;
  else if (Ya(r)) {
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
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(or).join(" | ")}`;
  const o = n[0], s = Xr(t), i = Mo(t, o), l = Mo(t, s);
  return n.length === 1 && ko(o) && !za(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, ko(s) && (r += `with value ${l}.`), r;
}
function Mo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ko(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function za(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const fo = (e) => e[0] === "_" || e === "$stable", po = (e) => k(e) ? e.map(He) : [He(e)], Xa = (e, t, n) => {
  if (t._n)
    return t;
  const r = fa((...o) => (h.NODE_ENV !== "production" && he && !(n === null && Ee) && !(n && n.root !== he.root) && S(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), po(t(...o))), n);
  return r._c = !1, r;
}, hi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (fo(o)) continue;
    const s = e[o];
    if (L(s))
      t[o] = Xa(o, s, r);
    else if (s != null) {
      h.NODE_ENV !== "production" && S(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = po(s);
      t[o] = () => i;
    }
  }
}, gi = (e, t) => {
  h.NODE_ENV !== "production" && !lo(e.vnode) && S(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = po(t);
  e.slots.default = () => n;
}, Lr = (e, t, n) => {
  for (const r in t)
    (n || !fo(r)) && (e[r] = t[r]);
}, Za = (e, t, n) => {
  const r = e.slots = ci();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && an(r, "__", o, !0);
    const s = t._;
    s ? (Lr(r, t, n), n && an(r, "_", s, !0)) : hi(t, r);
  } else t && gi(e, t);
}, Qa = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && rt ? (Lr(o, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? s = !1 : Lr(o, t, n) : (s = !t.$stable, hi(t, o)), i = t;
  } else t && (gi(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !fo(l) && i[l] == null && delete o[l];
};
let zt, _t;
function kt(e, t) {
  e.appContext.config.performance && Xn() && _t.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && aa(e, t, Xn() ? _t.now() : Date.now());
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
  h.NODE_ENV !== "production" && ca(e, t, Xn() ? _t.now() : Date.now());
}
function Xn() {
  return zt !== void 0 || (typeof window < "u" && window.performance ? (zt = !0, _t = window.performance) : zt = !1), zt;
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
const Ae = hc;
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
    createText: l,
    createComment: a,
    setText: u,
    setElementText: d,
    parentNode: f,
    nextSibling: g,
    setScopeId: _ = de,
    insertStaticContent: I
  } = e, A = (c, p, m, v = null, E = null, b = null, C = void 0, x = null, O = h.NODE_ENV !== "production" && rt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Xt(c, p) && (v = Ye(c), W(c, E, b, !0), c = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: N, ref: j, shapeFlag: T } = p;
    switch (N) {
      case Dn:
        J(c, p, m, v);
        break;
      case Pe:
        H(c, p, m, v);
        break;
      case jn:
        c == null ? F(p, m, v, C) : h.NODE_ENV !== "production" && D(c, p, m, C);
        break;
      case Le:
        se(
          c,
          p,
          m,
          v,
          E,
          b,
          C,
          x,
          O
        );
        break;
      default:
        T & 1 ? w(
          c,
          p,
          m,
          v,
          E,
          b,
          C,
          x,
          O
        ) : T & 6 ? Me(
          c,
          p,
          m,
          v,
          E,
          b,
          C,
          x,
          O
        ) : T & 64 || T & 128 ? N.process(
          c,
          p,
          m,
          v,
          E,
          b,
          C,
          x,
          O,
          Nt
        ) : h.NODE_ENV !== "production" && S("Invalid VNode type:", N, `(${typeof N})`);
    }
    j != null && E ? rn(j, c && c.ref, b, p || c, !p) : j == null && c && c.ref != null && rn(c.ref, null, b, c, !0);
  }, J = (c, p, m, v) => {
    if (c == null)
      r(
        p.el = l(p.children),
        m,
        v
      );
    else {
      const E = p.el = c.el;
      p.children !== c.children && u(E, p.children);
    }
  }, H = (c, p, m, v) => {
    c == null ? r(
      p.el = a(p.children || ""),
      m,
      v
    ) : p.el = c.el;
  }, F = (c, p, m, v) => {
    [c.el, c.anchor] = I(
      c.children,
      p,
      m,
      v,
      c.el,
      c.anchor
    );
  }, D = (c, p, m, v) => {
    if (p.children !== c.children) {
      const E = g(c.anchor);
      y(c), [p.el, p.anchor] = I(
        p.children,
        m,
        E,
        v
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, V = ({ el: c, anchor: p }, m, v) => {
    let E;
    for (; c && c !== p; )
      E = g(c), r(c, m, v), c = E;
    r(p, m, v);
  }, y = ({ el: c, anchor: p }) => {
    let m;
    for (; c && c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, w = (c, p, m, v, E, b, C, x, O) => {
    p.type === "svg" ? C = "svg" : p.type === "math" && (C = "mathml"), c == null ? $(
      p,
      m,
      v,
      E,
      b,
      C,
      x,
      O
    ) : z(
      c,
      p,
      E,
      b,
      C,
      x,
      O
    );
  }, $ = (c, p, m, v, E, b, C, x) => {
    let O, N;
    const { props: j, shapeFlag: T, transition: M, dirs: U } = c;
    if (O = c.el = i(
      c.type,
      b,
      j && j.is,
      j
    ), T & 8 ? d(O, c.children) : T & 16 && P(
      c.children,
      O,
      null,
      v,
      E,
      Nr(c, b),
      C,
      x
    ), U && wt(c, null, v, "created"), R(O, c, c.scopeId, C, v), j) {
      for (const ne in j)
        ne !== "value" && !en(ne) && s(O, ne, null, j[ne], b, v);
      "value" in j && s(O, "value", null, j.value, b), (N = j.onVnodeBeforeMount) && Xe(N, v, c);
    }
    h.NODE_ENV !== "production" && (an(O, "__vnode", c, !0), an(O, "__vueParentComponent", v, !0)), U && wt(c, null, v, "beforeMount");
    const G = rc(E, M);
    G && M.beforeEnter(O), r(O, p, m), ((N = j && j.onVnodeMounted) || G || U) && Ae(() => {
      N && Xe(N, v, c), G && M.enter(O), U && wt(c, null, v, "mounted");
    }, E);
  }, R = (c, p, m, v, E) => {
    if (m && _(c, m), v)
      for (let b = 0; b < v.length; b++)
        _(c, v[b]);
    if (E) {
      let b = E.subTree;
      if (h.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = ho(b.children) || b), p === b || vi(b.type) && (b.ssContent === p || b.ssFallback === p)) {
        const C = E.vnode;
        R(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          E.parent
        );
      }
    }
  }, P = (c, p, m, v, E, b, C, x, O = 0) => {
    for (let N = O; N < c.length; N++) {
      const j = c[N] = x ? gt(c[N]) : He(c[N]);
      A(
        null,
        j,
        p,
        m,
        v,
        E,
        b,
        C,
        x
      );
    }
  }, z = (c, p, m, v, E, b, C) => {
    const x = p.el = c.el;
    h.NODE_ENV !== "production" && (x.__vnode = p);
    let { patchFlag: O, dynamicChildren: N, dirs: j } = p;
    O |= c.patchFlag & 16;
    const T = c.props || Z, M = p.props || Z;
    let U;
    if (m && Ot(m, !1), (U = M.onVnodeBeforeUpdate) && Xe(U, m, p, c), j && wt(p, c, m, "beforeUpdate"), m && Ot(m, !0), h.NODE_ENV !== "production" && rt && (O = 0, C = !1, N = null), (T.innerHTML && M.innerHTML == null || T.textContent && M.textContent == null) && d(x, ""), N ? (pe(
      c.dynamicChildren,
      N,
      x,
      m,
      v,
      Nr(p, E),
      b
    ), h.NODE_ENV !== "production" && $n(c, p)) : C || ke(
      c,
      p,
      x,
      null,
      m,
      v,
      Nr(p, E),
      b,
      !1
    ), O > 0) {
      if (O & 16)
        re(x, T, M, m, E);
      else if (O & 2 && T.class !== M.class && s(x, "class", null, M.class, E), O & 4 && s(x, "style", T.style, M.style, E), O & 8) {
        const G = p.dynamicProps;
        for (let ne = 0; ne < G.length; ne++) {
          const Q = G[ne], De = T[Q], Se = M[Q];
          (Se !== De || Q === "value") && s(x, Q, De, Se, E, m);
        }
      }
      O & 1 && c.children !== p.children && d(x, p.children);
    } else !C && N == null && re(x, T, M, m, E);
    ((U = M.onVnodeUpdated) || j) && Ae(() => {
      U && Xe(U, m, p, c), j && wt(p, c, m, "updated");
    }, v);
  }, pe = (c, p, m, v, E, b, C) => {
    for (let x = 0; x < p.length; x++) {
      const O = c[x], N = p[x], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === Le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(O, N) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      A(
        O,
        N,
        j,
        null,
        v,
        E,
        b,
        C,
        !0
      );
    }
  }, re = (c, p, m, v, E) => {
    if (p !== m) {
      if (p !== Z)
        for (const b in p)
          !en(b) && !(b in m) && s(
            c,
            b,
            p[b],
            null,
            E,
            v
          );
      for (const b in m) {
        if (en(b)) continue;
        const C = m[b], x = p[b];
        C !== x && b !== "value" && s(c, b, x, C, E, v);
      }
      "value" in m && s(c, "value", p.value, m.value, E);
    }
  }, se = (c, p, m, v, E, b, C, x, O) => {
    const N = p.el = c ? c.el : l(""), j = p.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: M, slotScopeIds: U } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (rt || T & 2048) && (T = 0, O = !1, M = null), U && (x = x ? x.concat(U) : U), c == null ? (r(N, m, v), r(j, m, v), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      j,
      E,
      b,
      C,
      x,
      O
    )) : T > 0 && T & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (pe(
      c.dynamicChildren,
      M,
      m,
      E,
      b,
      C,
      x
    ), h.NODE_ENV !== "production" ? $n(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || E && p === E.subTree) && $n(
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
      b,
      C,
      x,
      O
    );
  }, Me = (c, p, m, v, E, b, C, x, O) => {
    p.slotScopeIds = x, c == null ? p.shapeFlag & 512 ? E.ctx.activate(
      p,
      m,
      v,
      C,
      O
    ) : Oe(
      p,
      m,
      v,
      E,
      b,
      C,
      O
    ) : ue(c, p, O);
  }, Oe = (c, p, m, v, E, b, C) => {
    const x = c.component = wc(
      c,
      v,
      E
    );
    if (h.NODE_ENV !== "production" && x.type.__hmrId && Ql(x), h.NODE_ENV !== "production" && (Rn(c), kt(x, "mount")), lo(c) && (x.ctx.renderer = Nt), h.NODE_ENV !== "production" && kt(x, "init"), xc(x, !1, C), h.NODE_ENV !== "production" && $t(x, "init"), h.NODE_ENV !== "production" && rt && (c.el = null), x.asyncDep) {
      if (E && E.registerDep(x, B, C), !c.el) {
        const O = x.subTree = ot(Pe);
        H(null, O, p, m);
      }
    } else
      B(
        x,
        c,
        p,
        m,
        E,
        b,
        C
      );
    h.NODE_ENV !== "production" && (Pn(), $t(x, "mount"));
  }, ue = (c, p, m) => {
    const v = p.component = c.component;
    if (dc(c, p, m))
      if (v.asyncDep && !v.asyncResolved) {
        h.NODE_ENV !== "production" && Rn(p), Y(v, p, m), h.NODE_ENV !== "production" && Pn();
        return;
      } else
        v.next = p, v.update();
    else
      p.el = c.el, v.vnode = p;
  }, B = (c, p, m, v, E, b, C) => {
    const x = () => {
      if (c.isMounted) {
        let { next: T, bu: M, u: U, parent: G, vnode: ne } = c;
        {
          const Ge = _i(c);
          if (Ge) {
            T && (T.el = ne.el, Y(c, T, C)), Ge.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let Q = T, De;
        h.NODE_ENV !== "production" && Rn(T || c.vnode), Ot(c, !1), T ? (T.el = ne.el, Y(c, T, C)) : T = ne, M && jt(M), (De = T.props && T.props.onVnodeBeforeUpdate) && Xe(De, G, T, ne), Ot(c, !0), h.NODE_ENV !== "production" && kt(c, "render");
        const Se = jo(c);
        h.NODE_ENV !== "production" && $t(c, "render");
        const qe = c.subTree;
        c.subTree = Se, h.NODE_ENV !== "production" && kt(c, "patch"), A(
          qe,
          Se,
          // parent may have changed if it's in a teleport
          f(qe.el),
          // anchor may have changed if it's in a fragment
          Ye(qe),
          c,
          E,
          b
        ), h.NODE_ENV !== "production" && $t(c, "patch"), T.el = Se.el, Q === null && pc(c, Se.el), U && Ae(U, E), (De = T.props && T.props.onVnodeUpdated) && Ae(
          () => Xe(De, G, T, ne),
          E
        ), h.NODE_ENV !== "production" && Xs(c), h.NODE_ENV !== "production" && Pn();
      } else {
        let T;
        const { el: M, props: U } = p, { bm: G, m: ne, parent: Q, root: De, type: Se } = c, qe = on(p);
        Ot(c, !1), G && jt(G), !qe && (T = U && U.onVnodeBeforeMount) && Xe(T, Q, p), Ot(c, !0);
        {
          De.ce && // @ts-expect-error _def is private
          De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Se), h.NODE_ENV !== "production" && kt(c, "render");
          const Ge = c.subTree = jo(c);
          h.NODE_ENV !== "production" && $t(c, "render"), h.NODE_ENV !== "production" && kt(c, "patch"), A(
            null,
            Ge,
            m,
            v,
            c,
            E,
            b
          ), h.NODE_ENV !== "production" && $t(c, "patch"), p.el = Ge.el;
        }
        if (ne && Ae(ne, E), !qe && (T = U && U.onVnodeMounted)) {
          const Ge = p;
          Ae(
            () => Xe(T, Q, Ge),
            E
          );
        }
        (p.shapeFlag & 256 || Q && on(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Ae(c.a, E), c.isMounted = !0, h.NODE_ENV !== "production" && sa(c), p = m = v = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Ds(x);
    c.scope.off();
    const N = c.update = O.run.bind(O), j = c.job = O.runIfDirty.bind(O);
    j.i = c, j.id = c.uid, O.scheduler = () => cr(j), Ot(c, !0), h.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (T) => jt(c.rtc, T) : void 0, O.onTrigger = c.rtg ? (T) => jt(c.rtg, T) : void 0), N();
  }, Y = (c, p, m) => {
    p.component = c;
    const v = c.vnode.props;
    c.vnode = p, c.next = null, Ba(c, p.props, v, m), Qa(c, p.children, m), Ke(), Io(c), We();
  }, ke = (c, p, m, v, E, b, C, x, O = !1) => {
    const N = c && c.children, j = c ? c.shapeFlag : 0, T = p.children, { patchFlag: M, shapeFlag: U } = p;
    if (M > 0) {
      if (M & 128) {
        vt(
          N,
          T,
          m,
          v,
          E,
          b,
          C,
          x,
          O
        );
        return;
      } else if (M & 256) {
        bt(
          N,
          T,
          m,
          v,
          E,
          b,
          C,
          x,
          O
        );
        return;
      }
    }
    U & 8 ? (j & 16 && xe(N, E, b), T !== N && d(m, T)) : j & 16 ? U & 16 ? vt(
      N,
      T,
      m,
      v,
      E,
      b,
      C,
      x,
      O
    ) : xe(N, E, b, !0) : (j & 8 && d(m, ""), U & 16 && P(
      T,
      m,
      v,
      E,
      b,
      C,
      x,
      O
    ));
  }, bt = (c, p, m, v, E, b, C, x, O) => {
    c = c || Bt, p = p || Bt;
    const N = c.length, j = p.length, T = Math.min(N, j);
    let M;
    for (M = 0; M < T; M++) {
      const U = p[M] = O ? gt(p[M]) : He(p[M]);
      A(
        c[M],
        U,
        m,
        null,
        E,
        b,
        C,
        x,
        O
      );
    }
    N > j ? xe(
      c,
      E,
      b,
      !0,
      !1,
      T
    ) : P(
      p,
      m,
      v,
      E,
      b,
      C,
      x,
      O,
      T
    );
  }, vt = (c, p, m, v, E, b, C, x, O) => {
    let N = 0;
    const j = p.length;
    let T = c.length - 1, M = j - 1;
    for (; N <= T && N <= M; ) {
      const U = c[N], G = p[N] = O ? gt(p[N]) : He(p[N]);
      if (Xt(U, G))
        A(
          U,
          G,
          m,
          null,
          E,
          b,
          C,
          x,
          O
        );
      else
        break;
      N++;
    }
    for (; N <= T && N <= M; ) {
      const U = c[T], G = p[M] = O ? gt(p[M]) : He(p[M]);
      if (Xt(U, G))
        A(
          U,
          G,
          m,
          null,
          E,
          b,
          C,
          x,
          O
        );
      else
        break;
      T--, M--;
    }
    if (N > T) {
      if (N <= M) {
        const U = M + 1, G = U < j ? p[U].el : v;
        for (; N <= M; )
          A(
            null,
            p[N] = O ? gt(p[N]) : He(p[N]),
            m,
            G,
            E,
            b,
            C,
            x,
            O
          ), N++;
      }
    } else if (N > M)
      for (; N <= T; )
        W(c[N], E, b, !0), N++;
    else {
      const U = N, G = N, ne = /* @__PURE__ */ new Map();
      for (N = G; N <= M; N++) {
        const ye = p[N] = O ? gt(p[N]) : He(p[N]);
        ye.key != null && (h.NODE_ENV !== "production" && ne.has(ye.key) && S(
          "Duplicate keys found during update:",
          JSON.stringify(ye.key),
          "Make sure keys are unique."
        ), ne.set(ye.key, N));
      }
      let Q, De = 0;
      const Se = M - G + 1;
      let qe = !1, Ge = 0;
      const qt = new Array(Se);
      for (N = 0; N < Se; N++) qt[N] = 0;
      for (N = U; N <= T; N++) {
        const ye = c[N];
        if (De >= Se) {
          W(ye, E, b, !0);
          continue;
        }
        let ze;
        if (ye.key != null)
          ze = ne.get(ye.key);
        else
          for (Q = G; Q <= M; Q++)
            if (qt[Q - G] === 0 && Xt(ye, p[Q])) {
              ze = Q;
              break;
            }
        ze === void 0 ? W(ye, E, b, !0) : (qt[ze - G] = N + 1, ze >= Ge ? Ge = ze : qe = !0, A(
          ye,
          p[ze],
          m,
          null,
          E,
          b,
          C,
          x,
          O
        ), De++);
      }
      const vo = qe ? oc(qt) : Bt;
      for (Q = vo.length - 1, N = Se - 1; N >= 0; N--) {
        const ye = G + N, ze = p[ye], No = ye + 1 < j ? p[ye + 1].el : v;
        qt[N] === 0 ? A(
          null,
          ze,
          m,
          No,
          E,
          b,
          C,
          x,
          O
        ) : qe && (Q < 0 || N !== vo[Q] ? dt(ze, m, No, 2) : Q--);
      }
    }
  }, dt = (c, p, m, v, E = null) => {
    const { el: b, type: C, transition: x, children: O, shapeFlag: N } = c;
    if (N & 6) {
      dt(c.component.subTree, p, m, v);
      return;
    }
    if (N & 128) {
      c.suspense.move(p, m, v);
      return;
    }
    if (N & 64) {
      C.move(c, p, m, Nt);
      return;
    }
    if (C === Le) {
      r(b, p, m);
      for (let T = 0; T < O.length; T++)
        dt(O[T], p, m, v);
      r(c.anchor, p, m);
      return;
    }
    if (C === jn) {
      V(c, p, m);
      return;
    }
    if (v !== 2 && N & 1 && x)
      if (v === 0)
        x.beforeEnter(b), r(b, p, m), Ae(() => x.enter(b), E);
      else {
        const { leave: T, delayLeave: M, afterLeave: U } = x, G = () => {
          c.ctx.isUnmounted ? o(b) : r(b, p, m);
        }, ne = () => {
          T(b, () => {
            G(), U && U();
          });
        };
        M ? M(b, G, ne) : ne();
      }
    else
      r(b, p, m);
  }, W = (c, p, m, v = !1, E = !1) => {
    const {
      type: b,
      props: C,
      ref: x,
      children: O,
      dynamicChildren: N,
      shapeFlag: j,
      patchFlag: T,
      dirs: M,
      cacheIndex: U
    } = c;
    if (T === -2 && (E = !1), x != null && (Ke(), rn(x, null, m, c, !0), We()), U != null && (p.renderCache[U] = void 0), j & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = j & 1 && M, ne = !on(c);
    let Q;
    if (ne && (Q = C && C.onVnodeBeforeUnmount) && Xe(Q, p, c), j & 6)
      Ve(c.component, m, v);
    else {
      if (j & 128) {
        c.suspense.unmount(m, v);
        return;
      }
      G && wt(c, null, p, "beforeUnmount"), j & 64 ? c.type.remove(
        c,
        p,
        m,
        Nt,
        v
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Le || T > 0 && T & 64) ? xe(
        N,
        p,
        m,
        !1,
        !0
      ) : (b === Le && T & 384 || !E && j & 16) && xe(O, p, m), v && le(c);
    }
    (ne && (Q = C && C.onVnodeUnmounted) || G) && Ae(() => {
      Q && Xe(Q, p, c), G && wt(c, null, p, "unmounted");
    }, m);
  }, le = (c) => {
    const { type: p, el: m, anchor: v, transition: E } = c;
    if (p === Le) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((C) => {
        C.type === Pe ? o(C.el) : le(C);
      }) : _e(m, v);
      return;
    }
    if (p === jn) {
      y(c);
      return;
    }
    const b = () => {
      o(m), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: C, delayLeave: x } = E, O = () => C(m, b);
      x ? x(c.el, b, O) : O();
    } else
      b();
  }, _e = (c, p) => {
    let m;
    for (; c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, Ve = (c, p, m) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && ea(c);
    const {
      bum: v,
      scope: E,
      job: b,
      subTree: C,
      um: x,
      m: O,
      a: N,
      parent: j,
      slots: { __: T }
    } = c;
    $o(O), $o(N), v && jt(v), j && k(T) && T.forEach((M) => {
      j.renderCache[M] = void 0;
    }), E.stop(), b && (b.flags |= 8, W(C, c, p, m)), x && Ae(x, p), Ae(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && la(c);
  }, xe = (c, p, m, v = !1, E = !1, b = 0) => {
    for (let C = b; C < c.length; C++)
      W(c[C], p, m, v, E);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), m = p && p[pa];
    return m ? g(m) : p;
  };
  let Pt = !1;
  const In = (c, p, m) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : A(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = c, Pt || (Pt = !0, Io(), Ys(), Pt = !1);
  }, Nt = {
    p: A,
    um: W,
    m: dt,
    r: le,
    mt: Oe,
    mc: P,
    pc: ke,
    pbc: pe,
    n: Ye,
    o: e
  };
  return {
    render: In,
    hydrate: void 0,
    createApp: Fa(In)
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
function $n(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (k(r) && k(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = gt(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && $n(i, l)), l.type === Dn && (l.el = i.el), l.type === Pe && !l.el && (l.el = i.el), h.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function oc(e) {
  const t = e.slice(), n = [0];
  let r, o, s, i, l;
  const a = e.length;
  for (r = 0; r < a; r++) {
    const u = e[r];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[r] = o, n.push(r);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < u ? s = l + 1 : i = l;
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
function $o(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const sc = Symbol.for("v-scx"), ic = () => {
  {
    const e = kn(sc);
    return e || h.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function sn(e, t, n) {
  return h.NODE_ENV !== "production" && !L(t) && S(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), mi(e, t, n);
}
function mi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ie({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = S);
  const a = t && r || !t && s !== "post";
  let u;
  if (gn) {
    if (s === "sync") {
      const _ = ic();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!a) {
      const _ = () => {
      };
      return _.stop = de, _.resume = de, _.pause = de, _;
    }
  }
  const d = he;
  l.call = (_, I, A) => st(_, d, I, A);
  let f = !1;
  s === "post" ? l.scheduler = (_) => {
    Ae(_, d && d.suspense);
  } : s !== "sync" && (f = !0, l.scheduler = (_, I) => {
    I ? _() : cr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), f && (_.flags |= 2, d && (_.id = d.uid, _.i = d));
  };
  const g = Wl(e, t, l);
  return gn && (u ? u.push(g) : a && g()), g;
}
function lc(e, t, n) {
  const r = this.proxy, o = oe(e) ? e.includes(".") ? Ei(r, e) : () => r[e] : e.bind(r, r);
  let s;
  L(t) ? s = t : (s = t.handler, n = t);
  const i = Sn(this), l = mi(o, s.bind(r), n);
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
const ac = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${Ce(t)}Modifiers`];
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
        (!f || !(Dt(Te(t)) in f)) && S(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Te(t))}" prop.`
        );
      else {
        const g = d[t];
        L(g) && (g(...n) || S(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && ac(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => oe(d) ? d.trim() : d)), i.number && (o = n.map(Tr))), h.NODE_ENV !== "production" && ua(e, t, o), h.NODE_ENV !== "production") {
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
  !a && s && (a = r[l = Dt(Ce(t))]), a && st(
    a,
    e,
    6,
    o
  );
  const u = r[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, st(
      u,
      e,
      6,
      o
    );
  }
}
function yi(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!L(e)) {
    const a = (u) => {
      const d = yi(u, t, !0);
      d && (l = !0, ie(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ee(e) && r.set(e, null), null) : (k(s) ? s.forEach((a) => i[a] = null) : ie(i, s), ee(e) && r.set(e, i), i);
}
function fr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ce(t)) || q(e, t));
}
let Hr = !1;
function Zn() {
  Hr = !0;
}
function jo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: a,
    render: u,
    renderCache: d,
    props: f,
    data: g,
    setupState: _,
    ctx: I,
    inheritAttrs: A
  } = e, J = Gn(e);
  let H, F;
  h.NODE_ENV !== "production" && (Hr = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, w = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(y, {
        get($, R, P) {
          return S(
            `Property '${String(
              R
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get($, R, P);
        }
      }) : y;
      H = He(
        u.call(
          w,
          y,
          d,
          h.NODE_ENV !== "production" ? tt(f) : f,
          _,
          g,
          I
        )
      ), F = l;
    } else {
      const y = t;
      h.NODE_ENV !== "production" && l === f && Zn(), H = He(
        y.length > 1 ? y(
          h.NODE_ENV !== "production" ? tt(f) : f,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Zn(), tt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : y(
          h.NODE_ENV !== "production" ? tt(f) : f,
          null
        )
      ), F = t.props ? l : uc(l);
    }
  } catch (y) {
    ln.length = 0, On(y, e, 1), H = ot(Pe);
  }
  let D = H, V;
  if (h.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([D, V] = bi(H)), F && A !== !1) {
    const y = Object.keys(F), { shapeFlag: w } = D;
    if (y.length) {
      if (w & 7)
        s && y.some(Hn) && (F = fc(
          F,
          s
        )), D = Et(D, F, !1, !0);
      else if (h.NODE_ENV !== "production" && !Hr && D.type !== Pe) {
        const $ = Object.keys(l), R = [], P = [];
        for (let z = 0, pe = $.length; z < pe; z++) {
          const re = $[z];
          vn(re) ? Hn(re) || R.push(re[2].toLowerCase() + re.slice(3)) : P.push(re);
        }
        P.length && S(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), R.length && S(
          `Extraneous non-emits event listeners (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Fo(D) && S(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), D = Et(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Fo(D) && S(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), io(D, n.transition)), h.NODE_ENV !== "production" && V ? V(D) : H = D, Gn(J), H;
}
const bi = (e) => {
  const t = e.children, n = e.dynamicChildren, r = ho(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return bi(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [He(r), i];
};
function ho(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (dr(o)) {
      if (o.type !== Pe || o.children === "v-if") {
        if (n)
          return;
        if (n = o, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return ho(n.children);
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
    (!Hn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Fo = (e) => e.shapeFlag & 7 || e.type === Pe;
function dc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, u = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || l) && rt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Lo(r, i, u) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        if (i[g] !== r[g] && !fr(u, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Lo(r, i, u) : !0 : !!i;
  return !1;
}
function Lo(e, t, n) {
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
  t && t.pendingBranch ? k(e) ? t.effects.push(...e) : t.effects.push(e) : Js(e);
}
const Le = Symbol.for("v-fgt"), Dn = Symbol.for("v-txt"), Pe = Symbol.for("v-cmt"), jn = Symbol.for("v-stc"), ln = [];
let Re = null;
function $e(e = !1) {
  ln.push(Re = e ? null : []);
}
function gc() {
  ln.pop(), Re = ln[ln.length - 1] || null;
}
let hn = 1;
function Ho(e, t = !1) {
  hn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function Ni(e) {
  return e.dynamicChildren = hn > 0 ? Re || Bt : null, gc(), hn > 0 && Re && Re.push(e), e;
}
function Fe(e, t, n, r, o, s) {
  return Ni(
    ce(
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
    const n = Mn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const mc = (...e) => Oi(
  ...e
), wi = ({ key: e }) => e ?? null, Fn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ae(e) || L(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function ce(e, t = null, n = null, r = 0, o = null, s = e === Le ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wi(t),
    ref: t && Fn(t),
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
  return l ? (go(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= oe(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && S("VNode created with invalid key (NaN). VNode type:", a.type), hn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const ot = h.NODE_ENV !== "production" ? mc : Oi;
function Oi(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Sa) && (h.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), dr(e)) {
    const l = Et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && go(l, n), hn > 0 && !s && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (Ti(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: l, style: a } = t;
    l && !oe(l) && (t.class = cn(l)), ee(a) && (dn(a) && !k(a) && (a = ie({}, a)), t.style = sr(a));
  }
  const i = oe(e) ? 1 : vi(e) ? 128 : ha(e) ? 64 : ee(e) ? 4 : L(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && dn(e) && (e = K(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ce(
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
function Ec(e) {
  return e ? dn(e) || ui(e) ? ie({}, e) : e : null;
}
function Et(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, u = t ? bc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && wi(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? k(s) ? s.concat(Fn(t)) : [s, Fn(t)] : Fn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && k(l) ? l.map(xi) : l,
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
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Et(e.ssContent),
    ssFallback: e.ssFallback && Et(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && io(
    d,
    a.clone(d)
  ), d;
}
function xi(e) {
  const t = Et(e);
  return k(e.children) && (t.children = e.children.map(xi)), t;
}
function yc(e = " ", t = 0) {
  return ot(Dn, null, e, t);
}
function wr(e = "", t = !1) {
  return t ? ($e(), _c(Pe, null, e)) : ot(Pe, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ot(Pe) : k(e) ? ot(
    Le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dr(e) ? gt(e) : ot(Dn, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function go(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (k(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), go(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !ui(t) ? t._ctx = Ee : o === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [yc(t)]) : n = 8);
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
        i && s !== i && !(k(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Xe(e, t, n, r = null) {
  st(e, t, 7, [
    n,
    r
  ]);
}
const vc = li();
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
    scope: new pl(
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
    emitsOptions: yi(r, o),
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
  return h.NODE_ENV !== "production" ? s.ctx = Ca(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = cc.bind(null, s), e.ce && e.ce(s), s;
}
let he = null;
const Di = () => he || Ee;
let Qn, Ur;
{
  const e = Nn(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Qn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), Ur = t(
    "__VUE_SSR_SETTERS__",
    (n) => gn = n
  );
}
const Sn = (e) => {
  const t = he;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, Uo = () => {
  he && he.scope.off(), Qn(null);
}, Oc = /* @__PURE__ */ ut("slot,component");
function Br(e, { isNativeTag: t }) {
  (Oc(e) || t(e)) && S(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Si(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function xc(e, t = !1, n = !1) {
  t && Ur(t);
  const { props: r, children: o } = e.vnode, s = Si(e);
  Ha(e, r, s, t), Za(e, o, n || t);
  const i = s ? Dc(e, t) : void 0;
  return t && Ur(!1), i;
}
function Dc(e, t) {
  var n;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && Br(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Br(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        ei(s[i]);
    }
    r.compilerOptions && Sc() && S(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oi), h.NODE_ENV !== "production" && Ta(e);
  const { setup: o } = r;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Cc(e) : null, i = Sn(e), l = Yt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), a = zr(l);
    if (We(), i(), (a || e.sp) && !on(e) && ni(e), a) {
      if (l.then(Uo, Uo), t)
        return l.then((u) => {
          Bo(e, u, t);
        }).catch((u) => {
          On(u, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        S(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Bo(e, l, t);
  } else
    Ii(e, t);
}
function Bo(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (h.NODE_ENV !== "production" && dr(t) && S(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Us(t), h.NODE_ENV !== "production" && Va(e)) : h.NODE_ENV !== "production" && t !== void 0 && S(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ii(e, n);
}
const Sc = () => !0;
function Ii(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || de);
  {
    const o = Sn(e);
    Ke();
    try {
      Ra(e);
    } finally {
      We(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === de && !t && (r.template ? S(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : S("Component is missing template or render function: ", r));
}
const Ko = h.NODE_ENV !== "production" ? {
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
function Ic(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return fe(e, "get", "$slots"), t[n];
    }
  });
}
function Cc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && S("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (k(n) ? r = "array" : ae(n) && (r = "ref")), r !== "object" && S(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ko));
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
      attrs: new Proxy(e.attrs, Ko),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function pr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Us(Ml(e.exposed)), {
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
const _o = (e, t) => {
  const n = Bl(e, t, gn);
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
      if (ae(f)) {
        Ke();
        const g = f.value;
        return We(), [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (Tt(f))
          return [
            "div",
            {},
            ["span", e, we(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${Je(f) ? " (readonly)" : ""}`
          ];
        if (Je(f))
          return [
            "div",
            {},
            ["span", e, we(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(f),
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
    const _ = a(f, "computed");
    _ && g.push(i("computed", _));
    const I = a(f, "inject");
    return I && g.push(i("injected", I)), g.push([
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
          l(g[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, g = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : ee(f) ? ["object", { object: g ? K(f) : f }] : ["span", n, String(f)];
  }
  function a(f, g) {
    const _ = f.type;
    if (L(_))
      return;
    const I = {};
    for (const A in f.ctx)
      u(_, A, g) && (I[A] = f.ctx[A]);
    return I;
  }
  function u(f, g, _) {
    const I = f[_];
    if (k(I) && I.includes(g) || ee(I) && g in I || f.extends && u(f.extends, g, _) || f.mixins && f.mixins.some((A) => u(A, g, _)))
      return !0;
  }
  function d(f) {
    return we(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Wo = "3.5.17", je = h.NODE_ENV !== "production" ? S : de;
var me = {};
let Kr;
const Jo = typeof window < "u" && window.trustedTypes;
if (Jo)
  try {
    Kr = /* @__PURE__ */ Jo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    me.NODE_ENV !== "production" && je(`Error creating trusted types policy: ${e}`);
  }
const Vi = Kr ? (e) => Kr.createHTML(e) : (e) => e, Rc = "http://www.w3.org/2000/svg", Pc = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, Yo = lt && /* @__PURE__ */ lt.createElement("template"), Mc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? lt.createElementNS(Rc, e) : t === "mathml" ? lt.createElementNS(Pc, e) : n ? lt.createElement(e, { is: n }) : lt.createElement(e);
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
      Yo.innerHTML = Vi(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Yo.content;
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
}, kc = Symbol("_vtc");
function $c(e, t, n) {
  const r = e[kc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qo = Symbol("_vod"), jc = Symbol("_vsh"), Fc = Symbol(me.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Lc = /(^|;)\s*display\s*:/;
function Hc(e, t, n) {
  const r = e.style, o = oe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (oe(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Ln(r, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Ln(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Ln(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Fc];
      i && (n += ";" + i), r.cssText = n, s = Lc.test(n);
    }
  } else t && e.removeAttribute("style");
  qo in e && (e[qo] = s ? r.display : "", e[jc] && (r.display = "none"));
}
const Uc = /[^\\];\s*$/, Go = /\s*!important$/;
function Ln(e, t, n) {
  if (k(n))
    n.forEach((r) => Ln(e, t, r));
  else if (n == null && (n = ""), me.NODE_ENV !== "production" && Uc.test(n) && je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Bc(e, t);
    Go.test(n) ? e.setProperty(
      Ce(r),
      n.replace(Go, ""),
      "important"
    ) : e[r] = n;
  }
}
const zo = ["Webkit", "Moz", "ms"], Or = {};
function Bc(e, t) {
  const n = Or[t];
  if (n)
    return n;
  let r = Te(t);
  if (r !== "filter" && r in e)
    return Or[t] = r;
  r = or(r);
  for (let o = 0; o < zo.length; o++) {
    const s = zo[o] + r;
    if (s in e)
      return Or[t] = s;
  }
  return t;
}
const Xo = "http://www.w3.org/1999/xlink";
function Zo(e, t, n, r, o, s = dl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xo, t.slice(6, t.length)) : e.setAttributeNS(Xo, t, n) : n == null || s && !ws(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : yt(n) ? String(n) : n
  );
}
function Qo(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vi(n) : n);
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
    l === "boolean" ? n = ws(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    me.NODE_ENV !== "production" && !i && je(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
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
const es = Symbol("_vei");
function Wc(e, t, n, r, o = null) {
  const s = e[es] || (e[es] = {}), i = s[t];
  if (r && i)
    i.value = me.NODE_ENV !== "production" ? ns(r, t) : r;
  else {
    const [l, a] = Jc(t);
    if (r) {
      const u = s[t] = Gc(
        me.NODE_ENV !== "production" ? ns(r, t) : r,
        o
      );
      Lt(e, l, u, a);
    } else i && (Kc(e, l, i, a), s[t] = void 0);
  }
}
const ts = /(?:Once|Passive|Capture)$/;
function Jc(e) {
  let t;
  if (ts.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ts); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ce(e.slice(2)), t];
}
let xr = 0;
const Yc = /* @__PURE__ */ Promise.resolve(), qc = () => xr || (Yc.then(() => xr = 0), xr = Date.now());
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
function ns(e, t) {
  return L(e) || k(e) ? e : (je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), de);
}
function zc(e, t) {
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
const rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? $c(e, r, i) : t === "style" ? Hc(e, n, r) : vn(t) ? Hn(t) || Wc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zc(e, t, r, i)) ? (Qo(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Zo(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? Qo(e, Te(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Zo(e, t, r, i));
};
function Zc(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rs(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return rs(t) && oe(n) ? !1 : t in e;
}
const os = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qc(e, t, n) {
  const r = /* @__PURE__ */ ti(e, t);
  nr(r) && ie(r, t);
  class o extends mo {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const eu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class mo extends eu {
  constructor(t, n = {}, r = cs) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== cs ? this._root = this.shadowRoot : (me.NODE_ENV !== "production" && this.shadowRoot && je(
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
    this._connected = !1, Yn(() => {
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
          const u = s[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = wo(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Te(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : me.NODE_ENV !== "production" && i && je(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((r) => {
      r.configureApp = this._def.configureApp, t(this._def = r, !0);
    }) : t(this._def);
  }
  _mount(t) {
    me.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        q(this, r) ? me.NODE_ENV !== "production" && je(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ve(n[r])
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
    let r = n ? this.getAttribute(t) : os;
    const o = Te(t);
    n && this._numberProps && this._numberProps[o] && (r = wo(r)), this._setProp(o, r, !1, !0);
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
    if (n !== this._props[t] && (n === os ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Ce(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ce(t), n + "") : n || this.removeAttribute(Ce(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), au(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ot(this._def, ie(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, me.NODE_ENV !== "production" && (r.ceReload = (s) => {
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
      if (r && s.setAttribute("nonce", r), s.textContent = t[o], this.shadowRoot.prepend(s), me.NODE_ENV !== "production")
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
            const u = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let f;
            for (; f = d.nextNode(); )
              f.setAttribute(u, "");
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
    if (me.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
const ss = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return k(t) ? (n) => jt(t, n) : t;
};
function tu(e) {
  e.target.composing = !0;
}
function is(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Dr = Symbol("_assign"), nu = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Dr] = ss(o);
    const s = r || o.props && o.props.type === "number";
    Lt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Tr(l)), e[Dr](l);
    }), n && Lt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Lt(e, "compositionstart", tu), Lt(e, "compositionend", is), Lt(e, "change", is));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[Dr] = ss(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Tr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === a) || (e.value = a));
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
}, ls = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = ou[t[i]];
      if (l && l(o, t)) return;
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
    const s = Ce(o.key);
    if (t.some(
      (i) => i === s || su[i] === s
    ))
      return e(o);
  });
}, lu = /* @__PURE__ */ ie({ patchProp: Xc }, Mc);
let as;
function Ai() {
  return as || (as = tc(lu));
}
const au = (...e) => {
  Ai().render(...e);
}, cs = (...e) => {
  const t = Ai().createApp(...e);
  me.NODE_ENV !== "production" && (uu(t), fu(t));
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
    value: (t) => al(t) || cl(t) || ul(t),
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
    return me.NODE_ENV !== "production" && !t && je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return me.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && je(
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
var $i = "AI_InvalidArgumentError", ji = `vercel.ai.error.${$i}`, mu = Symbol.for(ji), Fi, Eu = class extends Jt {
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
var Li = "AI_JSONParseError", Hi = `vercel.ai.error.${Li}`, yu = Symbol.for(Hi), Ui, us = class extends Jt {
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
Ui = yu;
var Bi = "AI_TypeValidationError", Ki = `vercel.ai.error.${Bi}`, bu = Symbol.for(Ki), Wi, vu = class Wr extends Jt {
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
    return Wr.isInstance(n) && n.value === t ? n : new Wr({ value: t, cause: n });
  }
};
Wi = bu;
var fs = vu;
let Nu = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function wu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} }, ds;
function Ou() {
  if (ds) return xt.exports;
  ds = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function r(l, a, u) {
    u == null && a !== null && typeof a == "object" && (u = a, a = void 0), e && Buffer.isBuffer(l) && (l = l.toString()), l && l.charCodeAt(0) === 65279 && (l = l.slice(1));
    const d = JSON.parse(l, a);
    if (d === null || typeof d != "object")
      return d;
    const f = u && u.protoAction || "error", g = u && u.constructorAction || "error";
    if (f === "ignore" && g === "ignore")
      return d;
    if (f !== "ignore" && g !== "ignore") {
      if (t.test(l) === !1 && n.test(l) === !1)
        return d;
    } else if (f !== "ignore" && g === "ignore") {
      if (t.test(l) === !1)
        return d;
    } else if (n.test(l) === !1)
      return d;
    return o(d, { protoAction: f, constructorAction: g, safe: u && u.safe });
  }
  function o(l, { protoAction: a = "error", constructorAction: u = "error", safe: d } = {}) {
    let f = [l];
    for (; f.length; ) {
      const g = f;
      f = [];
      for (const _ of g) {
        if (a !== "ignore" && Object.prototype.hasOwnProperty.call(_, "__proto__")) {
          if (d === !0)
            return null;
          if (a === "error")
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
        for (const I in _) {
          const A = _[I];
          A && typeof A == "object" && f.push(A);
        }
      }
    }
    return l;
  }
  function s(l, a, u) {
    const d = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(l, a, u);
    } finally {
      Error.stackTraceLimit = d;
    }
  }
  function i(l, a) {
    const u = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return r(l, a, { safe: !0 });
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
    throw new Eu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, Eo = Su(), Jr = Symbol.for("vercel.ai.validator");
function Iu(e) {
  return { [Jr]: !0, validate: e };
}
function Cu(e) {
  return typeof e == "object" && e !== null && Jr in e && e[Jr] === !0 && "validate" in e;
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
      error: fs.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: fs.wrap({ value: e, cause: r })
    };
  }
}
function ps({
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
      error: us.isInstance(n) ? n : new us({ text: e, cause: n })
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
}, yn = {
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
  En,
  yn,
  bn
];
_n.code + "", mn.code + "", En.code + "", yn.code + "", bn.code + "";
_n.name + "", _n.code, mn.name + "", mn.code, En.name + "", En.code, yn.name + "", yn.code, bn.name + "", bn.code;
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
  function o(a, u, d) {
    switch (a) {
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
  function s(a, u) {
    switch (a) {
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
  function i(a, u) {
    switch (a) {
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
  for (let a = 0; a < e.length; a++) {
    const u = e[a];
    switch (t[t.length - 1]) {
      case "ROOT":
        o(u, a, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
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
        o(u, a, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(u, a);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
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
        switch (u) {
          case "]": {
            n = a, t.pop();
            break;
          }
          default: {
            n = a, o(u, a, "INSIDE_ARRAY_AFTER_VALUE");
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
        o(u, a, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), n = a;
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
            n = a;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, a), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, a);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, a);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, a);
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
        const f = e.substring(r, a + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? s(u, a) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && i(u, a)) : n = a;
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
function ku(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = ps({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = ps({ text: Mu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
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
  onDataPart: l,
  onErrorPart: a,
  onToolCallStreamingStartPart: u,
  onToolCallDeltaPart: d,
  onToolCallPart: f,
  onToolResultPart: g,
  onMessageAnnotationsPart: _,
  onFinishMessagePart: I,
  onFinishStepPart: A,
  onStartStepPart: J
}) {
  const H = e.getReader(), F = new TextDecoder(), D = [];
  let V = 0;
  for (; ; ) {
    const { value: y } = await H.read();
    if (y && (D.push(y), V += y.length, y[y.length - 1] !== nf))
      continue;
    if (D.length === 0)
      break;
    const w = rf(D, V);
    V = 0;
    const $ = F.decode(w, { stream: !0 }).split(`
`).filter((R) => R !== "").map(tf);
    for (const { type: R, value: P } of $)
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
          await l?.(P);
          break;
        case "error":
          await a?.(P);
          break;
        case "message_annotations":
          await _?.(P);
          break;
        case "tool_call_streaming_start":
          await u?.(P);
          break;
        case "tool_call_delta":
          await d?.(P);
          break;
        case "tool_call":
          await f?.(P);
          break;
        case "tool_result":
          await g?.(P);
          break;
        case "finish_message":
          await I?.(P);
          break;
        case "finish_step":
          await A?.(P);
          break;
        case "start_step":
          await J?.(P);
          break;
        default: {
          const z = R;
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
  generateId: o = Eo,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var l, a;
  const u = i?.role === "assistant";
  let d = u ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((w, $) => {
    var R;
    return Math.max(w, (R = $.step) != null ? R : 0);
  }, 0)) != null ? a : 0) : 0;
  const f = u ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, _, I;
  function A(w, $) {
    const R = f.parts.find(
      (P) => P.type === "tool-invocation" && P.toolInvocation.toolCallId === w
    );
    R != null ? R.toolInvocation = $ : f.parts.push({
      type: "tool-invocation",
      toolInvocation: $
    });
  }
  const J = [];
  let H = u ? i?.annotations : void 0;
  const F = {};
  let D = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, V = "unknown";
  function y() {
    const w = [...J];
    H?.length && (f.annotations = H);
    const $ = {
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
      message: $,
      data: w,
      replaceLastMessage: u
    });
  }
  await of({
    stream: e,
    onTextPart(w) {
      g == null ? (g = {
        type: "text",
        text: w
      }, f.parts.push(g)) : g.text += w, f.content += w, y();
    },
    onReasoningPart(w) {
      var $;
      I == null ? (I = { type: "text", text: w }, _?.details.push(I)) : I.text += w, _ == null ? (_ = {
        type: "reasoning",
        reasoning: w,
        details: [I]
      }, f.parts.push(_)) : _.reasoning += w, f.reasoning = (($ = f.reasoning) != null ? $ : "") + w, y();
    },
    onReasoningSignaturePart(w) {
      I != null && (I.signature = w.signature);
    },
    onRedactedReasoningPart(w) {
      _ == null && (_ = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, f.parts.push(_)), _.details.push({
        type: "redacted",
        data: w.data
      }), I = void 0, y();
    },
    onFilePart(w) {
      f.parts.push({
        type: "file",
        mimeType: w.mimeType,
        data: w.data
      }), y();
    },
    onSourcePart(w) {
      f.parts.push({
        type: "source",
        source: w
      }), y();
    },
    onToolCallStreamingStartPart(w) {
      f.toolInvocations == null && (f.toolInvocations = []), F[w.toolCallId] = {
        text: "",
        step: d,
        toolName: w.toolName,
        index: f.toolInvocations.length
      };
      const $ = {
        state: "partial-call",
        step: d,
        toolCallId: w.toolCallId,
        toolName: w.toolName,
        args: void 0
      };
      f.toolInvocations.push($), A(w.toolCallId, $), y();
    },
    onToolCallDeltaPart(w) {
      const $ = F[w.toolCallId];
      $.text += w.argsTextDelta;
      const { value: R } = ku($.text), P = {
        state: "partial-call",
        step: $.step,
        toolCallId: w.toolCallId,
        toolName: $.toolName,
        args: R
      };
      f.toolInvocations[$.index] = P, A(w.toolCallId, P), y();
    },
    async onToolCallPart(w) {
      const $ = {
        state: "call",
        step: d,
        ...w
      };
      if (F[w.toolCallId] != null ? f.toolInvocations[F[w.toolCallId].index] = $ : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push($)), A(w.toolCallId, $), y(), n) {
        const R = await n({ toolCall: w });
        if (R != null) {
          const P = {
            state: "result",
            step: d,
            ...w,
            result: R
          };
          f.toolInvocations[f.toolInvocations.length - 1] = P, A(w.toolCallId, P), y();
        }
      }
    },
    onToolResultPart(w) {
      const $ = f.toolInvocations;
      if ($ == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const R = $.findIndex(
        (z) => z.toolCallId === w.toolCallId
      );
      if (R === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const P = {
        ...$[R],
        state: "result",
        ...w
      };
      $[R] = P, A(w.toolCallId, P), y();
    },
    onDataPart(w) {
      J.push(...w), y();
    },
    onMessageAnnotationsPart(w) {
      H == null ? H = [...w] : H.push(...w), y();
    },
    onFinishStepPart(w) {
      d += 1, g = w.isContinued ? g : void 0, _ = void 0, I = void 0;
    },
    onStartStepPart(w) {
      u || (f.id = w.messageId), f.parts.push({ type: "step-start" }), y();
    },
    onFinishMessagePart(w) {
      V = w.finishReason, w.usage != null && (D = Pu(w.usage));
    },
    onErrorPart(w) {
      throw new Error(w);
    }
  }), r?.({ message: f, finishReason: V, usage: D });
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
async function af({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: r = () => /* @__PURE__ */ new Date(),
  generateId: o = Eo
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
var cf = () => fetch;
async function uf({
  api: e,
  body: t,
  streamProtocol: n = "data",
  credentials: r,
  headers: o,
  abortController: s,
  restoreMessagesOnFailure: i,
  onResponse: l,
  onUpdate: a,
  onFinish: u,
  onToolCall: d,
  generateId: f,
  fetch: g = cf(),
  lastMessage: _,
  requestType: I = "generate"
}) {
  var A, J, H;
  const D = await (I === "resume" ? g(`${e}?chatId=${t.id}`, {
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
    signal: (J = s?.()) == null ? void 0 : J.signal,
    credentials: r
  })).catch((V) => {
    throw i(), V;
  });
  if (l)
    try {
      await l(D);
    } catch (V) {
      throw V;
    }
  if (!D.ok)
    throw i(), new Error(
      (H = await D.text()) != null ? H : "Failed to fetch the chat response."
    );
  if (!D.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await af({
        stream: D.body,
        update: a,
        onFinish: u,
        generateId: f
      });
      return;
    }
    case "data": {
      await sf({
        stream: D.body,
        update: a,
        lastMessage: _,
        onToolCall: d,
        onFinish({ message: V, finishReason: y, usage: w }) {
          u && V != null && u(V, { usage: w, finishReason: y });
        },
        generateId: f
      });
      return;
    }
    default: {
      const V = n;
      throw new Error(`Unknown stream protocol: ${V}`);
    }
  }
}
function Yr(e) {
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
function An(e) {
  return e.map((t) => ({
    ...t,
    parts: Ji(t)
  }));
}
async function hs(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: n, type: r } = t, o = await new Promise((s, i) => {
          const l = new FileReader();
          l.onload = (a) => {
            var u;
            s((u = a.target) == null ? void 0 : u.result);
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
    (r.length > t || Yr(s.toolInvocations) !== e) && // check that next step is possible:
    Yi(s) && // limit the number of automatic steps:
    ((o = Yr(s.toolInvocations)) != null ? o : 0) < n
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
var Sr = /* @__PURE__ */ new WeakMap(), gs = 0;
function pf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Sr.has(e[n]) ? r = Sr.get(e[n]) : (r = gs, Sr.set(e[n], gs++)), t += "@" + r;
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
var bo = (
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
const Ir = {
  isOnline: gf,
  isDocumentVisible: _f,
  fetcher: mf
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
    function l(d) {
      try {
        u(r.next(d));
      } catch (f) {
        i(f);
      }
    }
    function a(d) {
      try {
        u(r.throw(d));
      } catch (f) {
        i(f);
      }
    }
    function u(d) {
      d.done ? s(d.value) : o(d.value).then(l, a);
    }
    u((r = r.apply(e, t || [])).next());
  });
}, Ut = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, r, o, s, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(u) {
    return function(d) {
      return a([u, d]);
    };
  }
  function a(u) {
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
}, Ef = function(e, t) {
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
}, yf = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, qi = new bo(), er = new bo(), Cr = new bo(), Gi = {
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
var _s = function(e, t, n, r) {
  return n === void 0 && (n = qi), r === void 0 && (r = Gi.ttl), Ht(void 0, void 0, void 0, function() {
    var o, s, i, l, a, u, d;
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
          return l = f.sent(), s = l, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          o = t, f.label = 6;
        case 6:
          if (i = !1, a = { data: o, error: s, isValidating: i }, typeof o < "u")
            try {
              n.set(e, a, r);
            } catch (g) {
              console.error("swrv(mutate): failed to set cache", g);
            }
          return u = er.get(e), u && u.data.length && (d = u.data.filter(function(g) {
            return g.key === e;
          }), d.forEach(function(g, _) {
            typeof a.data < "u" && (g.data = a.data), g.error = a.error, g.isValidating = a.isValidating, g.isLoading = a.isValidating;
            var I = _ === d.length - 1;
            I || delete d[_];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function ms() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = at({}, Gi), i = !1, l = !1, a = Di(), u = a?.proxy || a;
  if (!u)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = u?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = at(at({}, s), t[2]));
  var f = d ? s.serverTTL : s.ttl, g = typeof r == "function" ? r : nt(r);
  typeof o > "u" && (o = s.fetcher);
  var _ = null;
  _ || (_ = wn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var I = function(F, D) {
    return Ht(e, void 0, void 0, function() {
      var V, y, w, $, R, P, z, pe = this;
      return Ut(this, function(re) {
        switch (re.label) {
          case 0:
            return V = _.data === void 0, y = g.value, y ? (w = s.cache.get(y), $ = w && w.data, _.isValidating = !0, _.isLoading = !$, $ && (_.data = $.data, _.error = $.error), R = F || o, !R || !s.isDocumentVisible() && !V || D?.forceRevalidate !== void 0 && !D?.forceRevalidate ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : w && (P = !!(Date.now() - w.createdAt >= s.dedupingInterval || D?.forceRevalidate), !P) ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : (z = function() {
              return Ht(pe, void 0, void 0, function() {
                var se, Me, Oe, ue;
                return Ut(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return se = Cr.get(y), se ? [3, 2] : (Me = Array.isArray(y) ? y : [y], Oe = R.apply(void 0, yf([], Ef(Me), !1)), Cr.set(y, Oe, s.dedupingInterval), [4, _s(y, Oe, s.cache, f)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, _s(y, se.data, s.cache, f)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return _.isValidating = !1, _.isLoading = !1, Cr.delete(y), _.error !== void 0 && (ue = !i && s.shouldRetryOnError && (D ? D.shouldRetryOnError : !0), ue && vf(I, D ? D.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, $ && s.revalidateDebounce ? (setTimeout(function() {
              return Ht(pe, void 0, void 0, function() {
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
      return Ut(this, function(F) {
        return [2, I(null, { shouldRetryOnError: !1 })];
      });
    });
  }, J = null;
  ao(function() {
    var F = function() {
      return Ht(e, void 0, void 0, function() {
        return Ut(this, function(D) {
          switch (D.label) {
            case 0:
              return !_.error && s.isOnline() ? [4, I()] : [3, 2];
            case 1:
              return D.sent(), [3, 3];
            case 2:
              J && clearTimeout(J), D.label = 3;
            case 3:
              return s.refreshInterval && !i && (J = setTimeout(F, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (J = setTimeout(F, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", A, !1), window.addEventListener("focus", A, !1));
  }), co(function() {
    i = !0, J && clearTimeout(J), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", A, !1), window.removeEventListener("focus", A, !1));
    var F = er.get(g.value);
    F && (F.data = F.data.filter(function(D) {
      return D !== _;
    }));
  });
  try {
    sn(g, function(F) {
      Je(g) || (g.value = F), _.key = F, _.isValidating = !!F, bf(g.value, _, f), !d && !l && g.value && I(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = at(at({}, Fl(_)), { mutate: function(F, D) {
    return I(F, at(at({}, D), { forceRevalidate: !0 }));
  } });
  return H;
}
function Nf(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var wf = ms.default || ms, Es = {}, ys = {};
function Of({
  api: e = "/api/chat",
  id: t,
  initialMessages: n = [],
  initialInput: r = "",
  sendExtraMessageFields: o,
  streamProtocol: s = "data",
  onResponse: i,
  onFinish: l,
  onError: a,
  credentials: u,
  headers: d,
  body: f,
  generateId: g = Eo,
  onToolCall: _,
  fetch: I,
  keepLastMessageOnError: A = !0,
  maxSteps: J = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var F, D;
  const V = t ?? g(), y = `${e}|${V}`, { data: w, mutate: $ } = wf(
    y,
    () => {
      var W;
      return (W = Es[y]) != null ? W : An(n);
    }
  ), R = (F = ys[V]) != null ? F : ys[V] = nt(
    "ready"
  );
  (D = w.value) != null || (w.value = An(n));
  const P = (W) => (Es[y] = W, $()), z = w, pe = nt(void 0), re = nt(void 0);
  let se = null;
  async function Me(W, { data: le, headers: _e, body: Ve } = {}) {
    var xe, Ye, Pt;
    pe.value = void 0, R.value = "submitted";
    const In = z.value.length, Nt = Yr(
      (xe = z.value[z.value.length - 1]) == null ? void 0 : xe.toolInvocations
    );
    try {
      se = new AbortController();
      const pt = An(W), c = pt;
      P(c);
      const p = (Ye = re.value) != null ? Ye : [], m = o ? c : c.map(
        ({
          role: v,
          content: E,
          experimental_attachments: b,
          data: C,
          annotations: x,
          toolInvocations: O,
          parts: N
        }) => ({
          role: v,
          content: E,
          ...b !== void 0 && {
            experimental_attachments: b
          },
          ...C !== void 0 && { data: C },
          ...x !== void 0 && { annotations: x },
          ...O !== void 0 && { toolInvocations: O },
          ...N !== void 0 && { parts: N }
        })
      );
      await uf({
        api: e,
        body: (Pt = H?.({
          id: V,
          messages: c,
          requestData: le,
          requestBody: Ve
        })) != null ? Pt : {
          id: V,
          messages: m,
          data: le,
          ...ve(f),
          // Use unref to unwrap the ref value
          ...Ve
        },
        streamProtocol: s,
        headers: {
          ...d,
          ..._e
        },
        abortController: () => se,
        credentials: u,
        onResponse: i,
        onUpdate({ message: v, data: E, replaceLastMessage: b }) {
          R.value = "streaming", P([
            ...b ? c.slice(0, c.length - 1) : c,
            v
          ]), E?.length && (re.value = [...p, ...E]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          A || P(pt);
        },
        generateId: g,
        onToolCall: _,
        fetch: I,
        // enabled use of structured clone in processChatResponse:
        lastMessage: qr(c[c.length - 1])
      }), R.value = "ready";
    } catch (pt) {
      if (pt.name === "AbortError")
        return se = null, R.value = "ready", null;
      a && pt instanceof Error && a(pt), pe.value = pt, R.value = "error";
    } finally {
      se = null;
    }
    ff({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: In,
      maxSteps: J,
      messages: z.value
    }) && await Me(z.value);
  }
  const Oe = async (W, le) => {
    var _e, Ve, xe;
    const Ye = await hs(
      (_e = le?.experimental_attachments) != null ? _e : W.experimental_attachments
    );
    return Me(
      z.value.concat({
        ...W,
        id: (Ve = W.id) != null ? Ve : g(),
        createdAt: (xe = W.createdAt) != null ? xe : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Ji(W)
      }),
      le
    );
  }, ue = async (W) => {
    const le = z.value;
    return le.length === 0 ? null : le[le.length - 1].role === "assistant" ? Me(le.slice(0, -1), W) : Me(le, W);
  }, B = () => {
    se && (se.abort(), se = null);
  }, Y = (W) => {
    typeof W == "function" && (W = W(z.value)), P(An(W));
  }, ke = (W) => {
    typeof W == "function" && (W = W(re.value)), re.value = W;
  }, bt = nt(r), vt = async (W, le = {}) => {
    var _e;
    (_e = W?.preventDefault) == null || _e.call(W);
    const Ve = bt.value;
    if (!Ve && !le.allowEmptySubmit)
      return;
    const xe = await hs(
      le.experimental_attachments
    );
    Me(
      z.value.concat({
        id: g(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ve,
        role: "user",
        experimental_attachments: xe.length > 0 ? xe : void 0,
        parts: [{ type: "text", text: Ve }]
      }),
      le
    ), bt.value = "";
  }, dt = ({
    toolCallId: W,
    result: le
  }) => {
    const _e = z.value;
    if (df({
      messages: _e,
      toolCallId: W,
      toolResult: le
    }), P(_e), R.value === "submitted" || R.value === "streaming")
      return;
    const Ve = _e[_e.length - 1];
    Yi(Ve) && Me(_e);
  };
  return {
    id: V,
    messages: z,
    append: Oe,
    error: pe,
    reload: ue,
    stop: B,
    setMessages: Y,
    input: bt,
    handleSubmit: vt,
    isLoading: _o(
      () => R.value === "submitted" || R.value === "streaming"
    ),
    status: R,
    data: re,
    setData: ke,
    addToolResult: dt
  };
}
function qr(e) {
  if (Array.isArray(e))
    return [...e.map(qr)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, r] of Object.entries(e))
      t[n] = qr(r);
    return t;
  } else
    return e;
}
function xf(e) {
  const t = nt(!1), n = nt("");
  let r = null, o = [];
  const s = async () => {
    if (!t.value)
      try {
        const a = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        r = new MediaRecorder(a), o = [], r.ondataavailable = (u) => {
          o.push(u.data);
        }, r.onstop = async () => {
          const u = new Blob(o, { type: r?.mimeType });
          await l(u), a.getTracks().forEach((d) => d.stop());
        }, r.start(), t.value = !0, n.value = "";
      } catch (a) {
        n.value = `启动录音失败: ${a.message}`;
      }
  }, i = () => {
    !t.value || !r || (r.stop(), t.value = !1);
  }, l = async (a) => {
    const u = new FormData();
    u.append("audio", a, "recording.webm");
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
    isRecording: Bn(t),
    error: Bn(n),
    start: s,
    stop: i
  };
}
const Df = {
  key: 0,
  class: "chat-main"
}, Sf = { class: "messages-area" }, If = { class: "message-row" }, Cf = {
  key: 0,
  class: "message-bubble ai-bubble"
}, Tf = ["src"], Vf = {
  key: 1,
  class: "text-content"
}, Af = {
  key: 1,
  class: "message-bubble user-bubble"
}, Rf = { class: "text-content" }, Pf = {
  key: 0,
  class: "message-wrapper"
}, Mf = { class: "message-row" }, kf = { class: "message-bubble ai-bubble" }, $f = {
  key: 0,
  class: "dice-animation"
}, jf = { key: 1 }, Ff = ["disabled"], Lf = /* @__PURE__ */ ti({
  __name: "AiChatBubble",
  props: {
    apiUrl: {}
  },
  setup(e) {
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s } = Of({ api: t.apiUrl }), { isRecording: i, start: l, stop: a } = xf((D) => {
      const V = D.trim();
      if (["发送", "提交", "发出"].includes(V)) {
        o();
        return;
      }
      if (["清空", "清除", "删除"].includes(V)) {
        r.value = "";
        return;
      }
      r.value = V;
    }), u = nt(!1), d = wn({ x: 0, y: 0 });
    function f() {
      u.value = !u.value;
    }
    const g = nt(null);
    function _(D) {
      return D.trim().startsWith("<audio");
    }
    function I(D) {
      const V = D.match(/src="([^"]+)"/);
      return V ? V[1] : null;
    }
    const A = _o(() => {
      if (!s.value) return !1;
      const D = [...n.value].reverse().find((V) => V.role === "user");
      return !!(D && /摇骰子|摇色子|掷骰子/.test(D.content));
    });
    sn(n, async (D) => {
      const V = D[D.length - 1];
      if (V?.role === "assistant" && _(V.content)) {
        if (!I(V.content)) return;
        await Yn(), g.value?.play().catch(() => {
          console.warn("Audio autoplay was prevented by the browser.");
        });
      }
    }, { deep: !0 });
    const J = nt(!1);
    function H(D) {
      D.preventDefault();
      const V = D.clientX, y = D.clientY, w = d.x, $ = d.y;
      let R = !1;
      function P(pe) {
        const re = pe.clientX - V, se = pe.clientY - y;
        !R && (Math.abs(re) > 5 || Math.abs(se) > 5) && (R = !0, J.value = !0), R && (d.x = w + re, d.y = $ + se);
      }
      function z() {
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", z), Yn(() => {
          J.value = !1;
        });
      }
      document.addEventListener("mousemove", P), document.addEventListener("mouseup", z);
    }
    function F() {
      J.value || f();
    }
    return ao(() => {
      const D = window.innerWidth, V = window.innerHeight;
      d.x = D - 70 - 20, d.y = V - 70 - 20;
    }), (D, V) => ($e(), Fe("div", {
      class: "ai-bubble-container",
      style: sr({ left: d.x + "px", top: d.y + "px" })
    }, [
      ce("div", {
        class: "floating-button",
        onClick: F,
        onMousedown: H
      }, V[4] || (V[4] = [
        ce("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "white",
          width: "38px",
          height: "38px"
        }, [
          ce("path", { d: "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" }),
          ce("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
          })
        ], -1)
      ]), 32),
      u.value ? ($e(), Fe("div", Df, [
        ce("div", { class: "toolbar" }, [
          V[5] || (V[5] = ce("div", { class: "toolbar-title" }, "AI助手", -1)),
          ce("button", {
            class: "toolbar-btn close-chat-btn",
            onClick: f
          }, "❌")
        ]),
        ce("div", Sf, [
          ($e(!0), Fe(Le, null, Ia(ve(n), (y) => ($e(), Fe("div", {
            key: y.id,
            class: cn(["message-wrapper", { "is-user": y.role === "user" }])
          }, [
            ce("div", If, [
              y.role === "assistant" ? ($e(), Fe("div", Cf, [
                y.content.trim().startsWith("<audio") ? ($e(), Fe("audio", {
                  key: 0,
                  ref_for: !0,
                  ref_key: "audioRef",
                  ref: g,
                  src: I(y.content) ?? "",
                  controls: "",
                  autoplay: ""
                }, null, 8, Tf)) : ($e(), Fe("p", Vf, Vr(y.content), 1))
              ])) : y.role === "user" ? ($e(), Fe("div", Af, [
                ce("p", Rf, Vr(y.content), 1)
              ])) : wr("", !0)
            ])
          ], 2))), 128)),
          ve(s) ? ($e(), Fe("div", Pf, [
            ce("div", Mf, [
              ce("div", kf, [
                A.value ? ($e(), Fe("div", $f, V[6] || (V[6] = [
                  ce("span", { class: "die" }, "⚀", -1),
                  ce("span", { class: "die" }, "⚂", -1),
                  ce("span", { class: "die" }, "⚅", -1)
                ]))) : ($e(), Fe("div", jf, "思考中..."))
              ])
            ])
          ])) : wr("", !0)
        ]),
        ce("form", {
          onSubmit: V[3] || (V[3] = ls(
            //@ts-ignore
            (...y) => ve(o) && ve(o)(...y),
            ["prevent"]
          )),
          class: "input-form"
        }, [
          da(ce("textarea", {
            "onUpdate:modelValue": V[0] || (V[0] = (y) => ae(r) ? r.value = y : null),
            placeholder: "请输入您的问题...",
            class: "chat-textarea",
            rows: "2",
            onKeydown: V[1] || (V[1] = iu(ls(
              //@ts-ignore
              (...y) => ve(o) && ve(o)(...y),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [nu, ve(r)]
          ]),
          ce("button", {
            type: "button",
            onClick: V[2] || (V[2] = (y) => ve(i) ? ve(a)() : ve(l)()),
            class: cn(["mic-button", { "is-listening": ve(i) }]),
            title: "语音输入"
          }, " 🎤 ", 2),
          ce("button", {
            type: "submit",
            disabled: ve(s)
          }, "发送", 8, Ff)
        ], 32)
      ])) : wr("", !0)
    ], 4));
  }
}), Hf = /* @__PURE__ */ Qc(Lf);
customElements.define("ai-chat-bubble", Hf);
