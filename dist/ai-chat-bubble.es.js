var ws = {};
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
const Z = ws.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = ws.NODE_ENV !== "production" ? Object.freeze([]) : [], fe = () => {
}, nl = () => !1, vn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Yr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rl = Object.prototype.hasOwnProperty, G = (e, t) => rl.call(e, t), M = Array.isArray, St = (e) => tr(e) === "[object Map]", Os = (e) => tr(e) === "[object Set]", L = (e) => typeof e == "function", oe = (e) => typeof e == "string", yt = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", Gr = (e) => (ee(e) || L(e)) && L(e.then) && L(e.catch), xs = Object.prototype.toString, tr = (e) => xs.call(e), qr = (e) => tr(e).slice(8, -1), nr = (e) => tr(e) === "[object Object]", zr = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, en = /* @__PURE__ */ ct(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ol = /* @__PURE__ */ ct(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), rr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, sl = /-(\w)/g, Te = rr(
  (e) => e.replace(sl, (t, n) => n ? n.toUpperCase() : "")
), il = /\B([A-Z])/g, Ce = rr(
  (e) => e.replace(il, "-$1").toLowerCase()
), or = rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), xt = rr(
  (e) => e ? `on${or(e)}` : ""
), mt = (e, t) => !Object.is(e, t), $t = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, an = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Cr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, xo = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Do;
const Nn = () => Do || (Do = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function sr(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = oe(r) ? ul(r) : sr(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (oe(e) || ee(e))
    return e;
}
const ll = /;(?![^(]*\))/g, al = /:([^]+)/, cl = /\/\*[^]*?\*\//g;
function ul(e) {
  const t = {};
  return e.replace(cl, "").split(ll).forEach((n) => {
    if (n) {
      const r = n.split(al);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function cn(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const r = cn(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", dl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", pl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", hl = /* @__PURE__ */ ct(fl), gl = /* @__PURE__ */ ct(dl), _l = /* @__PURE__ */ ct(pl), ml = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", bl = /* @__PURE__ */ ct(ml);
function Ds(e) {
  return !!e || e === "";
}
const Ss = (e) => !!(e && e.__v_isRef === !0), Is = (e) => oe(e) ? e : e == null ? "" : M(e) || ee(e) && (e.toString === xs || !L(e.toString)) ? Ss(e) ? Is(e.value) : JSON.stringify(e, Cs, 2) : String(e), Cs = (e, t) => Ss(t) ? Cs(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[gr(r, s) + " =>"] = o, n),
    {}
  )
} : Os(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => gr(n))
} : yt(t) ? gr(t) : ee(t) && !M(t) && !nr(t) ? String(t) : t, gr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    yt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var te = {};
function Ue(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ie;
class yl {
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
function El() {
  return Ie;
}
let X;
const _r = /* @__PURE__ */ new WeakSet();
class Ts {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || As(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, So(this), Rs(this);
    const t = X, n = Be;
    X = this, Be = !0;
    try {
      return this.fn();
    } finally {
      te.NODE_ENV !== "production" && X !== this && Ue(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ps(this), X = t, Be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Qr(t);
      this.deps = this.depsTail = void 0, So(this), this.onStop && this.onStop(), this.flags &= -2;
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
let Vs = 0, tn, nn;
function As(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = nn, nn = e;
    return;
  }
  e.next = tn, tn = e;
}
function Xr() {
  Vs++;
}
function Zr() {
  if (--Vs > 0)
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
function Rs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ps(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Qr(r), vl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Tr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ms(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ms(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === un) || (e.globalVersion = un, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Tr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = Be;
  X = e, Be = !0;
  try {
    Rs(e);
    const o = e.fn(e._value);
    (t.version === 0 || mt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, Be = r, Ps(e), e.flags &= -3;
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
function vl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Be = !0;
const ks = [];
function Ke() {
  ks.push(Be), Be = !1;
}
function We() {
  const e = ks.pop();
  Be = e === void 0 ? !0 : e;
}
function So(e) {
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
class Nl {
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
      n = this.activeLink = new Nl(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, $s(n);
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
function $s(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        $s(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), te.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Un = /* @__PURE__ */ new WeakMap(), It = Symbol(
  te.NODE_ENV !== "production" ? "Object iterate" : ""
), Vr = Symbol(
  te.NODE_ENV !== "production" ? "Map keys iterate" : ""
), fn = Symbol(
  te.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ue(e, t, n) {
  if (Be && X) {
    let r = Un.get(e);
    r || Un.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new eo()), o.map = r, o.key = n), te.NODE_ENV !== "production" ? o.track({
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
  if (Xr(), t === "clear")
    i.forEach(l);
  else {
    const a = M(e), f = a && zr(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((u, g) => {
        (g === "length" || g === fn || !yt(g) && g >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(fn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(It)), St(e) && l(i.get(Vr)));
          break;
        case "delete":
          a || (l(i.get(It)), St(e) && l(i.get(Vr)));
          break;
        case "set":
          St(e) && l(i.get(It));
          break;
      }
  }
  Zr();
}
function wl(e, t) {
  const n = Un.get(e);
  return n && n.get(t);
}
function Pt(e) {
  const t = K(e);
  return t === e ? t : (ue(t, "iterate", fn), Oe(e) ? t : t.map(ge));
}
function ir(e) {
  return ue(e = K(e), "iterate", fn), e;
}
const Ol = {
  __proto__: null,
  [Symbol.iterator]() {
    return mr(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return Pt(this).concat(
      ...e.map((t) => M(t) ? Pt(t) : t)
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
    return Pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return br(this, "lastIndexOf", e);
  },
  map(e, t) {
    return st(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return qt(this, "pop");
  },
  push(...e) {
    return qt(this, "push", e);
  },
  reduce(e, ...t) {
    return Io(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Io(this, "reduceRight", e, t);
  },
  shift() {
    return qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return st(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return qt(this, "splice", e);
  },
  toReversed() {
    return Pt(this).toReversed();
  },
  toSorted(e) {
    return Pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return qt(this, "unshift", e);
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
const xl = Array.prototype;
function st(e, t, n, r, o, s) {
  const i = ir(e), l = i !== e && !Oe(e), a = i[t];
  if (a !== xl[t]) {
    const u = a.apply(e, s);
    return l ? ge(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, g) {
    return n.call(this, ge(u), g, e);
  } : n.length > 2 && (f = function(u, g) {
    return n.call(this, u, g, e);
  }));
  const d = a.call(i, f, r);
  return l && o ? o(d) : d;
}
function Io(e, t, n, r) {
  const o = ir(e);
  let s = n;
  return o !== e && (Oe(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, ge(l), a, e);
  }), o[t](s, ...r);
}
function br(e, t, n) {
  const r = K(e);
  ue(r, "iterate", fn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && dn(n[0]) ? (n[0] = K(n[0]), r[t](...n)) : o;
}
function qt(e, t, n = []) {
  Ke(), Xr();
  const r = K(e)[t].apply(e, n);
  return Zr(), We(), r;
}
const Dl = /* @__PURE__ */ ct("__proto__,__v_isRef,__isVue"), js = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(yt)
);
function Sl(e) {
  yt(e) || (e = String(e));
  const t = K(this);
  return ue(t, "has", e), t.hasOwnProperty(e);
}
class Fs {
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
      return r === (o ? s ? Ws : Ks : s ? Us : Bs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = M(t);
    if (!o) {
      let a;
      if (i && (a = Ol[n]))
        return a;
      if (n === "hasOwnProperty")
        return Sl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ae(t) ? t : r
    );
    return (yt(n) ? js.has(n) : Dl(n)) || (o || ue(t, "get", n), s) ? l : ae(l) ? i && zr(n) ? l : l.value : ee(l) ? o ? Kn(l) : wn(l) : l;
  }
}
class Ls extends Fs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Je(s);
      if (!Oe(r) && !Je(r) && (s = K(s), r = K(r)), !M(t) && ae(s) && !ae(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = M(t) && zr(n) ? Number(n) < t.length : G(t, n), l = Reflect.set(
      t,
      n,
      r,
      ae(t) ? t : o
    );
    return t === K(o) && (i ? mt(r, s) && Qe(t, "set", n, r, s) : Qe(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = G(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Qe(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!yt(n) || !js.has(n)) && ue(t, "has", n), r;
  }
  ownKeys(t) {
    return ue(
      t,
      "iterate",
      M(t) ? "length" : It
    ), Reflect.ownKeys(t);
  }
}
class Hs extends Fs {
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
const Il = /* @__PURE__ */ new Ls(), Cl = /* @__PURE__ */ new Hs(), Tl = /* @__PURE__ */ new Ls(!0), Vl = /* @__PURE__ */ new Hs(!0), Ar = (e) => e, Cn = (e) => Reflect.getPrototypeOf(e);
function Al(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = K(o), i = St(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), d = n ? Ar : t ? Wn : ge;
    return !t && ue(
      s,
      "iterate",
      a ? Vr : It
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
function Tn(e) {
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
function Rl(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      e || (mt(o, l) && ue(i, "get", o), ue(i, "get", l));
      const { has: a } = Cn(i), f = t ? Ar : e ? Wn : ge;
      if (a.call(i, o))
        return f(s.get(o));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ue(K(o), "iterate", It), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      return e || (mt(o, l) && ue(i, "has", o), ue(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const i = this, l = i.__v_raw, a = K(l), f = t ? Ar : e ? Wn : ge;
      return !e && ue(a, "iterate", It), l.forEach((d, u) => o.call(s, f(d), f(u), i));
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
        !t && !Oe(o) && !Je(o) && (o = K(o));
        const s = K(this);
        return Cn(s).has.call(s, o) || (s.add(o), Qe(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Oe(s) && !Je(s) && (s = K(s));
        const i = K(this), { has: l, get: a } = Cn(i);
        let f = l.call(i, o);
        f ? te.NODE_ENV !== "production" && Co(i, l, o) : (o = K(o), f = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), f ? mt(s, d) && Qe(i, "set", o, s, d) : Qe(i, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: i, get: l } = Cn(s);
        let a = i.call(s, o);
        a ? te.NODE_ENV !== "production" && Co(s, i, o) : (o = K(o), a = i.call(s, o));
        const f = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && Qe(s, "delete", o, void 0, f), d;
      },
      clear() {
        const o = K(this), s = o.size !== 0, i = te.NODE_ENV !== "production" ? St(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
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
    n[o] = Al(o, e, t);
  }), n;
}
function lr(e, t) {
  const n = Rl(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    G(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Pl = {
  get: /* @__PURE__ */ lr(!1, !1)
}, Ml = {
  get: /* @__PURE__ */ lr(!1, !0)
}, kl = {
  get: /* @__PURE__ */ lr(!0, !1)
}, $l = {
  get: /* @__PURE__ */ lr(!0, !0)
};
function Co(e, t, n) {
  const r = K(n);
  if (r !== n && t.call(e, r)) {
    const o = qr(e);
    Ue(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap();
function jl(e) {
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
function Fl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : jl(qr(e));
}
function wn(e) {
  return Je(e) ? e : ar(
    e,
    !1,
    Il,
    Pl,
    Bs
  );
}
function Ll(e) {
  return ar(
    e,
    !1,
    Tl,
    Ml,
    Us
  );
}
function Kn(e) {
  return ar(
    e,
    !0,
    Cl,
    kl,
    Ks
  );
}
function tt(e) {
  return ar(
    e,
    !0,
    Vl,
    $l,
    Ws
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
  const s = Fl(e);
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
function Ct(e) {
  return Je(e) ? Ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
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
function Hl(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const ge = (e) => ee(e) ? wn(e) : e, Wn = (e) => ee(e) ? Kn(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function He(e) {
  return Bl(e, !1);
}
function Bl(e, t) {
  return ae(e) ? e : new Ul(e, t);
}
class Ul {
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
const Kl = {
  get: (e, t, n) => t === "__v_raw" ? e : he(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ae(o) && !ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Js(e) {
  return Ct(e) ? e : new Proxy(e, Kl);
}
function Wl(e) {
  te.NODE_ENV !== "production" && !dn(e) && Ue("toRefs() expects a reactive object but received a plain one.");
  const t = M(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Yl(e, n);
  return t;
}
class Jl {
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
    return wl(K(this._object), this._key);
  }
}
function Yl(e, t, n) {
  const r = e[t];
  return ae(r) ? r : new Jl(e, t, n);
}
class Gl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new eo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = un - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return As(this, !0), !0;
  }
  get value() {
    const t = te.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ms(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : te.NODE_ENV !== "production" && Ue("Write operation failed: computed value is readonly");
  }
}
function ql(e, t, n = !1) {
  let r, o;
  return L(e) ? r = e : (r = e.get, o = e.set), new Gl(r, o, n);
}
const Vn = {}, Jn = /* @__PURE__ */ new WeakMap();
let Dt;
function zl(e, t = !1, n = Dt) {
  if (n) {
    let r = Jn.get(n);
    r || Jn.set(n, r = []), r.push(e);
  } else te.NODE_ENV !== "production" && !t && Ue(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Xl(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (y) => {
    (n.onWarn || Ue)(
      "Invalid watch source: ",
      y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (y) => o ? y : Oe(y) || o === !1 || o === 0 ? at(y, 1) : at(y);
  let u, g, m, I, R = !1, J = !1;
  if (ae(e) ? (g = () => e.value, R = Oe(e)) : Ct(e) ? (g = () => d(e), R = !0) : M(e) ? (J = !0, R = e.some((y) => Ct(y) || Oe(y)), g = () => e.map((y) => {
    if (ae(y))
      return y.value;
    if (Ct(y))
      return d(y);
    if (L(y))
      return a ? a(y, 2) : y();
    te.NODE_ENV !== "production" && f(y);
  })) : L(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (m) {
      Ke();
      try {
        m();
      } finally {
        We();
      }
    }
    const y = Dt;
    Dt = u;
    try {
      return a ? a(e, 3, [I]) : e(I);
    } finally {
      Dt = y;
    }
  } : (g = fe, te.NODE_ENV !== "production" && f(e)), t && o) {
    const y = g, b = o === !0 ? 1 / 0 : o;
    g = () => at(y(), b);
  }
  const H = El(), F = () => {
    u.stop(), H && H.active && Yr(H.effects, u);
  };
  if (s && t) {
    const y = t;
    t = (...b) => {
      y(...b), F();
    };
  }
  let T = J ? new Array(e.length).fill(Vn) : Vn;
  const A = (y) => {
    if (!(!(u.flags & 1) || !u.dirty && !y))
      if (t) {
        const b = u.run();
        if (o || R || (J ? b.some((V, $) => mt(V, T[$])) : mt(b, T))) {
          m && m();
          const V = Dt;
          Dt = u;
          try {
            const $ = [
              b,
              // pass undefined as the old value when it's changed for the first time
              T === Vn ? void 0 : J && T[0] === Vn ? [] : T,
              I
            ];
            T = b, a ? a(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            Dt = V;
          }
        }
      } else
        u.run();
  };
  return l && l(A), u = new Ts(g), u.scheduler = i ? () => i(A, !1) : A, I = (y) => zl(y, !1, u), m = u.onStop = () => {
    const y = Jn.get(u);
    if (y) {
      if (a)
        a(y, 4);
      else
        for (const b of y) b();
      Jn.delete(u);
    }
  }, te.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? r ? A(!0) : T = u.run() : i ? i(A.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function at(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ae(e))
    at(e.value, t, n);
  else if (M(e))
    for (let r = 0; r < e.length; r++)
      at(e[r], t, n);
  else if (Os(e) || St(e))
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
var h = {};
const Tt = [];
function Pn(e) {
  Tt.push(e);
}
function Mn() {
  Tt.pop();
}
let yr = !1;
function D(e, ...t) {
  if (yr) return;
  yr = !0, Ke();
  const n = Tt.length ? Tt[Tt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Zl();
  if (r)
    Jt(
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
`, ...Ql(o)), console.warn(...s);
  }
  We(), yr = !1;
}
function Zl() {
  let e = Tt[Tt.length - 1];
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
function Ql(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...ea(n));
  }), t;
}
function ea({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${hr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...ta(e.props), s] : [o + s];
}
function ta(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ys(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ys(e, t, n) {
  return oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ae(t) ? (t = Ys(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
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
function Jt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    On(o, t, n);
  }
}
function ot(e, t, n, r) {
  if (L(e)) {
    const o = Jt(e, t, n, r);
    return o && Gr(o) && o.catch((s) => {
      On(s, t, n);
    }), o;
  }
  if (M(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(ot(e[s], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && D(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function On(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = h.NODE_ENV !== "production" ? to[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Ke(), Jt(s, null, 10, [
        e,
        a,
        f
      ]), We();
      return;
    }
  }
  na(e, n, o, r, i);
}
function na(e, t, n, r = !0, o = !1) {
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
const Ne = [];
let Ze = -1;
const Ut = [];
let pt = null, jt = 0;
const Gs = /* @__PURE__ */ Promise.resolve();
let Yn = null;
const ra = 100;
function no(e) {
  const t = Yn || Gs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oa(e) {
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
    !(e.flags & 2) && t >= pn(n) ? Ne.push(e) : Ne.splice(oa(t), 0, e), e.flags |= 1, qs();
  }
}
function qs() {
  Yn || (Yn = Gs.then(Zs));
}
function zs(e) {
  M(e) ? Ut.push(...e) : pt && e.id === -1 ? pt.splice(jt + 1, 0, e) : e.flags & 1 || (Ut.push(e), e.flags |= 1), qs();
}
function To(e, t, n = Ze + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ne.length; n++) {
    const r = Ne[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && ro(t, r))
        continue;
      Ne.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Xs(e) {
  if (Ut.length) {
    const t = [...new Set(Ut)].sort(
      (n, r) => pn(n) - pn(r)
    );
    if (Ut.length = 0, pt) {
      pt.push(...t);
      return;
    }
    for (pt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), jt = 0; jt < pt.length; jt++) {
      const n = pt[jt];
      h.NODE_ENV !== "production" && ro(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    pt = null, jt = 0;
  }
}
const pn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Zs(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => ro(e, n) : fe;
  try {
    for (Ze = 0; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Jt(
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
    Ze = -1, Ne.length = 0, Xs(e), Yn = null, (Ne.length || Ut.length) && Zs(e);
  }
}
function ro(e, t) {
  const n = e.get(t) || 0;
  if (n > ra) {
    const r = t.i, o = r && Ri(r.type);
    return On(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nt = !1;
const kn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (Nn().__VUE_HMR_RUNTIME__ = {
  createRecord: Er(Qs),
  rerender: Er(la),
  reload: Er(aa)
});
const At = /* @__PURE__ */ new Map();
function sa(e) {
  const t = e.type.__hmrId;
  let n = At.get(t);
  n || (Qs(t, e.type), n = At.get(t)), n.instances.add(e);
}
function ia(e) {
  At.get(e.type.__hmrId).instances.delete(e);
}
function Qs(e, t) {
  return At.has(e) ? !1 : (At.set(e, {
    initialDef: Gn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Gn(e) {
  return Pi(e) ? e.__vccOpts : e;
}
function la(e, t) {
  const n = At.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Gn(r.type).render = t), r.renderCache = [], nt = !0, r.update(), nt = !1;
  }));
}
function aa(e, t) {
  const n = At.get(e);
  if (!n) return;
  t = Gn(t), Vo(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = Gn(s.type);
    let l = kn.get(i);
    l || (i !== n.initialDef && Vo(i, t), kn.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? cr(() => {
      nt = !0, s.parent.update(), nt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  zs(() => {
    kn.clear();
  });
}
function Vo(e, t) {
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
let et, Zt = [], Rr = !1;
function xn(e, ...t) {
  et ? et.emit(e, ...t) : Rr || Zt.push({ event: e, args: t });
}
function ei(e, t) {
  var n, r;
  et = e, et ? (et.enabled = !0, Zt.forEach(({ event: o, args: s }) => et.emit(o, ...s)), Zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ei(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Rr = !0, Zt = []);
  }, 3e3)) : (Rr = !0, Zt = []);
}
function ca(e, t) {
  xn("app:init", e, t, {
    Fragment: $e,
    Text: Dn,
    Comment: Pe,
    Static: Fn
  });
}
function ua(e) {
  xn("app:unmount", e);
}
const fa = /* @__PURE__ */ oo(
  "component:added"
  /* COMPONENT_ADDED */
), ti = /* @__PURE__ */ oo(
  "component:updated"
  /* COMPONENT_UPDATED */
), da = /* @__PURE__ */ oo(
  "component:removed"
  /* COMPONENT_REMOVED */
), pa = (e) => {
  et && typeof et.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !et.cleanupBuffer(e) && da(e);
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
const ha = /* @__PURE__ */ ni(
  "perf:start"
  /* PERFORMANCE_START */
), ga = /* @__PURE__ */ ni(
  "perf:end"
  /* PERFORMANCE_END */
);
function ni(e) {
  return (t, n, r) => {
    xn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function _a(e, t, n) {
  xn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let we = null, ri = null;
function qn(e) {
  const t = we;
  return we = e, ri = e && e.type.__scopeId || null, t;
}
function ma(e, t = we, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Uo(-1);
    const s = qn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      qn(s), r._d && Uo(1);
    }
    return h.NODE_ENV !== "production" && ti(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function oi(e) {
  ol(e) && D("Do not use built-in directive ids as custom directive id: " + e);
}
function ba(e, t) {
  if (we === null)
    return h.NODE_ENV !== "production" && D("withDirectives can only be used inside render functions."), e;
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
const ya = Symbol("_vte"), Ea = (e) => e.__isTeleport;
function so(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, so(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function si(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function ii(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const va = /* @__PURE__ */ new WeakSet();
function rn(e, t, n, r, o = !1) {
  if (M(e)) {
    e.forEach(
      (I, R) => rn(
        I,
        t && (M(t) ? t[R] : t),
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
    D(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === Z ? l.refs = {} : l.refs, u = l.setupState, g = K(u), m = u === Z ? () => !1 : (I) => h.NODE_ENV !== "production" && (G(g, I) && !ae(g[I]) && D(
    `Template ref "${I}" used on a non-ref value. It will not work in the production build.`
  ), va.has(g[I])) ? !1 : G(g, I);
  if (f != null && f !== a && (oe(f) ? (d[f] = null, m(f) && (u[f] = null)) : ae(f) && (f.value = null)), L(a))
    Jt(a, l, 12, [i, d]);
  else {
    const I = oe(a), R = ae(a);
    if (I || R) {
      const J = () => {
        if (e.f) {
          const H = I ? m(a) ? u[a] : d[a] : a.value;
          o ? M(H) && Yr(H, s) : M(H) ? H.includes(s) || H.push(s) : I ? (d[a] = [s], m(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else I ? (d[a] = i, m(a) && (u[a] = i)) : R ? (a.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && D("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (J.id = -1, Ae(J, n)) : J();
    } else h.NODE_ENV !== "production" && D("Invalid template ref type:", a, `(${typeof a})`);
  }
}
Nn().requestIdleCallback;
Nn().cancelIdleCallback;
const on = (e) => !!e.type.__asyncLoader, io = (e) => e.type.__isKeepAlive;
function Na(e, t) {
  li(e, "a", t);
}
function wa(e, t) {
  li(e, "da", t);
}
function li(e, t, n = _e) {
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
      io(o.parent.vnode) && Oa(r, t, n, o), o = o.parent;
  }
}
function Oa(e, t, n, r) {
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
      const l = Sn(n), a = ot(t, n, e, i);
      return l(), We(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const o = xt(to[e].replace(/ hook$/, ""));
    D(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ut = (e) => (t, n = _e) => {
  (!gn || e === "sp") && ur(e, (...r) => t(...r), n);
}, xa = ut("bm"), lo = ut("m"), Da = ut(
  "bu"
), Sa = ut("u"), Ia = ut(
  "bum"
), ao = ut("um"), Ca = ut(
  "sp"
), Ta = ut("rtg"), Va = ut("rtc");
function Aa(e, t = _e) {
  ur("ec", e, t);
}
const Ra = Symbol.for("v-ndc");
function Pa(e, t, n, r) {
  let o;
  const s = n, i = M(e);
  if (i || oe(e)) {
    const l = i && Ct(e);
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
    h.NODE_ENV !== "production" && !Number.isInteger(e) && D(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
const Pr = (e) => e ? Vi(e) ? pr(e) : Pr(e.parent) : null, Vt = (
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
    $options: (e) => ui(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      cr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = no.bind(e.proxy)),
    $watch: (e) => pc.bind(e)
  })
), co = (e) => e === "_" || e === "$", vr = (e, t) => e !== Z && !e.__isScriptSetup && G(e, t), ai = {
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
        if (vr(r, t))
          return i[t] = 1, r[t];
        if (o !== Z && G(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && G(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== Z && G(n, t))
          return i[t] = 4, n[t];
        Mr && (i[t] = 0);
      }
    }
    const d = Vt[t];
    let u, g;
    if (d)
      return t === "$attrs" ? (ue(e.attrs, "get", ""), h.NODE_ENV !== "production" && Zn()) : h.NODE_ENV !== "production" && t === "$slots" && ue(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Z && G(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, G(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && we && (!oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && co(t[0]) && G(o, t) ? D(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === we && D(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return vr(o, t) ? (o[t] = n, !0) : h.NODE_ENV !== "production" && o.__isScriptSetup && G(o, t) ? (D(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Z && G(r, t) ? (r[t] = n, !0) : G(e.props, t) ? (h.NODE_ENV !== "production" && D(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && D(
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
    return !!n[i] || e !== Z && G(e, i) || vr(t, i) || (l = s[0]) && G(l, i) || G(r, i) || G(Vt, i) || G(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (ai.ownKeys = (e) => (D(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ma(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Vt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Vt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: fe
    });
  }), t;
}
function ka(e) {
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
function $a(e) {
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
function Ao(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ja() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? D(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Mr = !0;
function Fa(e) {
  const t = ui(e), n = e.proxy, r = e.ctx;
  Mr = !1, t.beforeCreate && Ro(t.beforeCreate, e, "bc");
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
    updated: I,
    activated: R,
    deactivated: J,
    beforeDestroy: H,
    beforeUnmount: F,
    destroyed: T,
    unmounted: A,
    render: y,
    renderTracked: b,
    renderTriggered: V,
    errorCaptured: $,
    serverPrefetch: k,
    // public API
    expose: z,
    inheritAttrs: de,
    // assets
    components: re,
    directives: se,
    filters: ye
  } = t, pe = h.NODE_ENV !== "production" ? ja() : null;
  if (h.NODE_ENV !== "production") {
    const [U] = e.propsOptions;
    if (U)
      for (const Y in U)
        pe("Props", Y);
  }
  if (f && La(f, r, pe), i)
    for (const U in i) {
      const Y = i[U];
      L(Y) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, U, {
        value: Y.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[U] = Y.bind(n), h.NODE_ENV !== "production" && pe("Methods", U)) : h.NODE_ENV !== "production" && D(
        `Method "${U}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !L(o) && D(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const U = o.call(n, n);
    if (h.NODE_ENV !== "production" && Gr(U) && D(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(U))
      h.NODE_ENV !== "production" && D("data() should return an object.");
    else if (e.data = wn(U), h.NODE_ENV !== "production")
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
      const Y = s[U], Me = L(Y) ? Y.bind(n, n) : L(Y.get) ? Y.get.bind(n, n) : fe;
      h.NODE_ENV !== "production" && Me === fe && D(`Computed property "${U}" has no getter.`);
      const Et = !L(Y) && L(Y.set) ? Y.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        D(
          `Write operation failed: computed property "${U}" is readonly.`
        );
      } : fe, vt = _o({
        get: Me,
        set: Et
      });
      Object.defineProperty(r, U, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (ft) => vt.value = ft
      }), h.NODE_ENV !== "production" && pe("Computed", U);
    }
  if (l)
    for (const U in l)
      ci(l[U], r, n, U);
  if (a) {
    const U = L(a) ? a.call(n) : a;
    Reflect.ownKeys(U).forEach((Y) => {
      Ja(Y, U[Y]);
    });
  }
  d && Ro(d, e, "c");
  function ce(U, Y) {
    M(Y) ? Y.forEach((Me) => U(Me.bind(n))) : Y && U(Y.bind(n));
  }
  if (ce(xa, u), ce(lo, g), ce(Da, m), ce(Sa, I), ce(Na, R), ce(wa, J), ce(Aa, $), ce(Va, b), ce(Ta, V), ce(Ia, F), ce(ao, A), ce(Ca, k), M(z))
    if (z.length) {
      const U = e.exposed || (e.exposed = {});
      z.forEach((Y) => {
        Object.defineProperty(U, Y, {
          get: () => n[Y],
          set: (Me) => n[Y] = Me,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  y && e.render === fe && (e.render = y), de != null && (e.inheritAttrs = de), re && (e.components = re), se && (e.directives = se), k && ii(e);
}
function La(e, t, n = fe) {
  M(e) && (e = kr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = $n(
      o.from || r,
      o.default,
      !0
    ) : s = $n(o.from || r) : s = $n(o), ae(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Ro(e, t, n) {
  ot(
    M(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ci(e, t, n, r) {
  let o = r.includes(".") ? Ni(n, r) : () => n[r];
  if (oe(e)) {
    const s = t[e];
    L(s) ? sn(o, s) : h.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e}"`, s);
  } else if (L(e))
    sn(o, e.bind(n));
  else if (ee(e))
    if (M(e))
      e.forEach((s) => ci(s, t, n, r));
    else {
      const s = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(s) ? sn(o, s, e) : h.NODE_ENV !== "production" && D(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && D(`Invalid watch option: "${r}"`, e);
}
function ui(e) {
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
      h.NODE_ENV !== "production" && D(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ha[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ha = {
  data: Po,
  props: Mo,
  emits: Mo,
  // objects
  methods: Qt,
  computed: Qt,
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
  components: Qt,
  directives: Qt,
  // watch
  watch: Ua,
  // provide / inject
  provide: Po,
  inject: Ba
};
function Po(e, t) {
  return t ? e ? function() {
    return ie(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ba(e, t) {
  return Qt(kr(e), kr(t));
}
function kr(e) {
  if (M(e)) {
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
function Qt(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mo(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Ao(e),
    Ao(t ?? {})
  ) : t;
}
function Ua(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = ve(e[r], t[r]);
  return n;
}
function fi() {
  return {
    app: null,
    config: {
      isNativeTag: nl,
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
let Ka = 0;
function Wa(e, t) {
  return function(r, o = null) {
    L(r) || (r = ie({}, r)), o != null && !ee(o) && (h.NODE_ENV !== "production" && D("root props passed to app.mount() must be an object."), o = null);
    const s = fi(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = s.app = {
      _uid: Ka++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Yo,
      get config() {
        return s.config;
      },
      set config(d) {
        h.NODE_ENV !== "production" && D(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? h.NODE_ENV !== "production" && D("Plugin has already been applied to target app.") : d && L(d.install) ? (i.add(d), d.install(f, ...u)) : L(d) ? (i.add(d), d(f, ...u)) : h.NODE_ENV !== "production" && D(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && D(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return h.NODE_ENV !== "production" && Hr(d, s.config), u ? (h.NODE_ENV !== "production" && s.components[d] && D(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return h.NODE_ENV !== "production" && oi(d), u ? (h.NODE_ENV !== "production" && s.directives[d] && D(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, g) {
        if (a)
          h.NODE_ENV !== "production" && D(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && D(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || rt(r, o);
          return m.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const I = bt(m);
            I.el = null, e(I, d, g);
          }), e(m, d, g), a = !0, f._container = d, d.__vue_app__ = f, h.NODE_ENV !== "production" && (f._instance = m.component, ca(f, Yo)), pr(m.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && D(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (ot(
          l,
          f._instance,
          16
        ), e(null, f._container), h.NODE_ENV !== "production" && (f._instance = null, ua(f)), delete f._container.__vue_app__) : h.NODE_ENV !== "production" && D("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return h.NODE_ENV !== "production" && d in s.provides && (G(s.provides, d) ? D(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : D(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = u, f;
      },
      runWithContext(d) {
        const u = Kt;
        Kt = f;
        try {
          return d();
        } finally {
          Kt = u;
        }
      }
    };
    return f;
  };
}
let Kt = null;
function Ja(e, t) {
  if (!_e)
    h.NODE_ENV !== "production" && D("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const r = _e.parent && _e.parent.provides;
    r === n && (n = _e.provides = Object.create(r)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const r = go();
  if (r || Kt) {
    let o = Kt ? Kt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && D(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && D("inject() can only be used inside setup() or functional components.");
}
const di = {}, pi = () => Object.create(di), hi = (e) => Object.getPrototypeOf(e) === di;
function Ya(e, t, n, r = !1) {
  const o = {}, s = pi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), gi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  h.NODE_ENV !== "production" && mi(t || {}, o, e), n ? e.props = r ? o : Ll(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ga(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function qa(e, t, n, r) {
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
    !(h.NODE_ENV !== "production" && Ga(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let g = d[u];
        if (fr(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (a)
          if (G(s, g))
            m !== s[g] && (s[g] = m, f = !0);
          else {
            const I = Te(g);
            o[I] = $r(
              a,
              l,
              I,
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
    gi(e, t, o, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !G(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ce(u)) === u || !G(t, d))) && (a ? n && // for camelCase
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
        (!t || !G(t, u)) && (delete s[u], f = !0);
  }
  f && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && mi(t || {}, o, e);
}
function gi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (en(a))
        continue;
      const f = t[a];
      let d;
      o && G(o, d = Te(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : fr(e.emitsOptions, a) || (!(a in r) || f !== r[a]) && (r[a] = f, i = !0);
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
        !G(f, u)
      );
    }
  }
  return i;
}
function $r(e, t, n, r, o, s) {
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
          const d = Sn(o);
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
const za = /* @__PURE__ */ new WeakMap();
function _i(e, t, n = !1) {
  const r = n ? za : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const d = (u) => {
      a = !0;
      const [g, m] = _i(u, t, !0);
      ie(i, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return ee(e) && r.set(e, Bt), Bt;
  if (M(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !oe(s[d]) && D("props must be strings when using array syntax.", s[d]);
      const u = Te(s[d]);
      ko(u) && (i[u] = Z);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !ee(s) && D("invalid props options", s);
    for (const d in s) {
      const u = Te(d);
      if (ko(u)) {
        const g = s[d], m = i[u] = M(g) || L(g) ? { type: g } : ie({}, g), I = m.type;
        let R = !1, J = !0;
        if (M(I))
          for (let H = 0; H < I.length; ++H) {
            const F = I[H], T = L(F) && F.name;
            if (T === "Boolean") {
              R = !0;
              break;
            } else T === "String" && (J = !1);
          }
        else
          R = L(I) && I.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = R, m[
          1
          /* shouldCastTrue */
        ] = J, (R || G(m, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return ee(e) && r.set(e, f), f;
}
function ko(e) {
  return e[0] !== "$" && !en(e) ? !0 : (h.NODE_ENV !== "production" && D(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Xa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function mi(e, t, n) {
  const r = K(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Te(i));
  for (const i in o) {
    let l = o[i];
    l != null && Za(
      i,
      r[i],
      l,
      h.NODE_ENV !== "production" ? tt(r) : r,
      !s.includes(i)
    );
  }
}
function Za(e, t, n, r, o) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    D('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let f = !1;
      const d = M(s) ? s : [s], u = [];
      for (let g = 0; g < d.length && !f; g++) {
        const { valid: m, expectedType: I } = ec(t, d[g]);
        u.push(I || ""), f = m;
      }
      if (!f) {
        D(tc(e, t, u));
        return;
      }
    }
    l && !l(t, r) && D('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Qa = /* @__PURE__ */ ct(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ec(e, t) {
  let n;
  const r = Xa(t);
  if (r === "null")
    n = e === null;
  else if (Qa(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = M(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function tc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(or).join(" | ")}`;
  const o = n[0], s = qr(t), i = $o(t, o), l = $o(t, s);
  return n.length === 1 && jo(o) && !nc(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, jo(s) && (r += `with value ${l}.`), r;
}
function $o(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function jo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function nc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const uo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", fo = (e) => M(e) ? e.map(Le) : [Le(e)], rc = (e, t, n) => {
  if (t._n)
    return t;
  const r = ma((...o) => (h.NODE_ENV !== "production" && _e && !(n === null && we) && !(n && n.root !== _e.root) && D(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), fo(t(...o))), n);
  return r._c = !1, r;
}, bi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (uo(o)) continue;
    const s = e[o];
    if (L(s))
      t[o] = rc(o, s, r);
    else if (s != null) {
      h.NODE_ENV !== "production" && D(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = fo(s);
      t[o] = () => i;
    }
  }
}, yi = (e, t) => {
  h.NODE_ENV !== "production" && !io(e.vnode) && D(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = fo(t);
  e.slots.default = () => n;
}, jr = (e, t, n) => {
  for (const r in t)
    (n || !uo(r)) && (e[r] = t[r]);
}, oc = (e, t, n) => {
  const r = e.slots = pi();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && an(r, "__", o, !0);
    const s = t._;
    s ? (jr(r, t, n), n && an(r, "_", s, !0)) : bi(t, r);
  } else t && yi(e, t);
}, sc = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && nt ? (jr(o, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? s = !1 : jr(o, t, n) : (s = !t.$stable, bi(t, o)), i = t;
  } else t && (yi(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !uo(l) && i[l] == null && delete o[l];
};
let zt, _t;
function Mt(e, t) {
  e.appContext.config.performance && Xn() && _t.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && ha(e, t, Xn() ? _t.now() : Date.now());
}
function kt(e, t) {
  if (e.appContext.config.performance && Xn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    _t.mark(r), _t.measure(
      `<${hr(e, e.type)}> ${t}`,
      n,
      r
    ), _t.clearMarks(n), _t.clearMarks(r);
  }
  h.NODE_ENV !== "production" && ga(e, t, Xn() ? _t.now() : Date.now());
}
function Xn() {
  return zt !== void 0 || (typeof window < "u" && window.performance ? (zt = !0, _t = window.performance) : zt = !1), zt;
}
function ic() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ae = Ec;
function lc(e) {
  return ac(e);
}
function ac(e, t) {
  ic();
  const n = Nn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && ei(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: m = fe,
    insertStaticContent: I
  } = e, R = (c, p, _, N = null, E = null, v = null, S = void 0, x = null, O = h.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Xt(c, p) && (N = Ye(c), W(c, E, v, !0), c = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: C } = p;
    switch (w) {
      case Dn:
        J(c, p, _, N);
        break;
      case Pe:
        H(c, p, _, N);
        break;
      case Fn:
        c == null ? F(p, _, N, S) : h.NODE_ENV !== "production" && T(c, p, _, S);
        break;
      case $e:
        se(
          c,
          p,
          _,
          N,
          E,
          v,
          S,
          x,
          O
        );
        break;
      default:
        C & 1 ? b(
          c,
          p,
          _,
          N,
          E,
          v,
          S,
          x,
          O
        ) : C & 6 ? ye(
          c,
          p,
          _,
          N,
          E,
          v,
          S,
          x,
          O
        ) : C & 64 || C & 128 ? w.process(
          c,
          p,
          _,
          N,
          E,
          v,
          S,
          x,
          O,
          Nt
        ) : h.NODE_ENV !== "production" && D("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && E ? rn(j, c && c.ref, v, p || c, !p) : j == null && c && c.ref != null && rn(c.ref, null, v, c, !0);
  }, J = (c, p, _, N) => {
    if (c == null)
      r(
        p.el = l(p.children),
        _,
        N
      );
    else {
      const E = p.el = c.el;
      p.children !== c.children && f(E, p.children);
    }
  }, H = (c, p, _, N) => {
    c == null ? r(
      p.el = a(p.children || ""),
      _,
      N
    ) : p.el = c.el;
  }, F = (c, p, _, N) => {
    [c.el, c.anchor] = I(
      c.children,
      p,
      _,
      N,
      c.el,
      c.anchor
    );
  }, T = (c, p, _, N) => {
    if (p.children !== c.children) {
      const E = g(c.anchor);
      y(c), [p.el, p.anchor] = I(
        p.children,
        _,
        E,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, A = ({ el: c, anchor: p }, _, N) => {
    let E;
    for (; c && c !== p; )
      E = g(c), r(c, _, N), c = E;
    r(p, _, N);
  }, y = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = g(c), o(c), c = _;
    o(p);
  }, b = (c, p, _, N, E, v, S, x, O) => {
    p.type === "svg" ? S = "svg" : p.type === "math" && (S = "mathml"), c == null ? V(
      p,
      _,
      N,
      E,
      v,
      S,
      x,
      O
    ) : z(
      c,
      p,
      E,
      v,
      S,
      x,
      O
    );
  }, V = (c, p, _, N, E, v, S, x) => {
    let O, w;
    const { props: j, shapeFlag: C, transition: P, dirs: B } = c;
    if (O = c.el = i(
      c.type,
      v,
      j && j.is,
      j
    ), C & 8 ? d(O, c.children) : C & 16 && k(
      c.children,
      O,
      null,
      N,
      E,
      Nr(c, v),
      S,
      x
    ), B && wt(c, null, N, "created"), $(O, c, c.scopeId, S, N), j) {
      for (const ne in j)
        ne !== "value" && !en(ne) && s(O, ne, null, j[ne], v, N);
      "value" in j && s(O, "value", null, j.value, v), (w = j.onVnodeBeforeMount) && Xe(w, N, c);
    }
    h.NODE_ENV !== "production" && (an(O, "__vnode", c, !0), an(O, "__vueParentComponent", N, !0)), B && wt(c, null, N, "beforeMount");
    const q = cc(E, P);
    q && P.beforeEnter(O), r(O, p, _), ((w = j && j.onVnodeMounted) || q || B) && Ae(() => {
      w && Xe(w, N, c), q && P.enter(O), B && wt(c, null, N, "mounted");
    }, E);
  }, $ = (c, p, _, N, E) => {
    if (_ && m(c, _), N)
      for (let v = 0; v < N.length; v++)
        m(c, N[v]);
    if (E) {
      let v = E.subTree;
      if (h.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = po(v.children) || v), p === v || xi(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const S = E.vnode;
        $(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          E.parent
        );
      }
    }
  }, k = (c, p, _, N, E, v, S, x, O = 0) => {
    for (let w = O; w < c.length; w++) {
      const j = c[w] = x ? gt(c[w]) : Le(c[w]);
      R(
        null,
        j,
        p,
        _,
        N,
        E,
        v,
        S,
        x
      );
    }
  }, z = (c, p, _, N, E, v, S) => {
    const x = p.el = c.el;
    h.NODE_ENV !== "production" && (x.__vnode = p);
    let { patchFlag: O, dynamicChildren: w, dirs: j } = p;
    O |= c.patchFlag & 16;
    const C = c.props || Z, P = p.props || Z;
    let B;
    if (_ && Ot(_, !1), (B = P.onVnodeBeforeUpdate) && Xe(B, _, p, c), j && wt(p, c, _, "beforeUpdate"), _ && Ot(_, !0), h.NODE_ENV !== "production" && nt && (O = 0, S = !1, w = null), (C.innerHTML && P.innerHTML == null || C.textContent && P.textContent == null) && d(x, ""), w ? (de(
      c.dynamicChildren,
      w,
      x,
      _,
      N,
      Nr(p, E),
      v
    ), h.NODE_ENV !== "production" && jn(c, p)) : S || Me(
      c,
      p,
      x,
      null,
      _,
      N,
      Nr(p, E),
      v,
      !1
    ), O > 0) {
      if (O & 16)
        re(x, C, P, _, E);
      else if (O & 2 && C.class !== P.class && s(x, "class", null, P.class, E), O & 4 && s(x, "style", C.style, P.style, E), O & 8) {
        const q = p.dynamicProps;
        for (let ne = 0; ne < q.length; ne++) {
          const Q = q[ne], De = C[Q], Se = P[Q];
          (Se !== De || Q === "value") && s(x, Q, De, Se, E, _);
        }
      }
      O & 1 && c.children !== p.children && d(x, p.children);
    } else !S && w == null && re(x, C, P, _, E);
    ((B = P.onVnodeUpdated) || j) && Ae(() => {
      B && Xe(B, _, p, c), j && wt(p, c, _, "updated");
    }, N);
  }, de = (c, p, _, N, E, v, S) => {
    for (let x = 0; x < p.length; x++) {
      const O = c[x], w = p[x], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(O, w) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? u(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      R(
        O,
        w,
        j,
        null,
        N,
        E,
        v,
        S,
        !0
      );
    }
  }, re = (c, p, _, N, E) => {
    if (p !== _) {
      if (p !== Z)
        for (const v in p)
          !en(v) && !(v in _) && s(
            c,
            v,
            p[v],
            null,
            E,
            N
          );
      for (const v in _) {
        if (en(v)) continue;
        const S = _[v], x = p[v];
        S !== x && v !== "value" && s(c, v, x, S, E, N);
      }
      "value" in _ && s(c, "value", p.value, _.value, E);
    }
  }, se = (c, p, _, N, E, v, S, x, O) => {
    const w = p.el = c ? c.el : l(""), j = p.anchor = c ? c.anchor : l("");
    let { patchFlag: C, dynamicChildren: P, slotScopeIds: B } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || C & 2048) && (C = 0, O = !1, P = null), B && (x = x ? x.concat(B) : B), c == null ? (r(w, _, N), r(j, _, N), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      j,
      E,
      v,
      S,
      x,
      O
    )) : C > 0 && C & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (de(
      c.dynamicChildren,
      P,
      _,
      E,
      v,
      S,
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
    )) : Me(
      c,
      p,
      _,
      j,
      E,
      v,
      S,
      x,
      O
    );
  }, ye = (c, p, _, N, E, v, S, x, O) => {
    p.slotScopeIds = x, c == null ? p.shapeFlag & 512 ? E.ctx.activate(
      p,
      _,
      N,
      S,
      O
    ) : pe(
      p,
      _,
      N,
      E,
      v,
      S,
      O
    ) : ce(c, p, O);
  }, pe = (c, p, _, N, E, v, S) => {
    const x = c.component = Ic(
      c,
      N,
      E
    );
    if (h.NODE_ENV !== "production" && x.type.__hmrId && sa(x), h.NODE_ENV !== "production" && (Pn(c), Mt(x, "mount")), io(c) && (x.ctx.renderer = Nt), h.NODE_ENV !== "production" && Mt(x, "init"), Tc(x, !1, S), h.NODE_ENV !== "production" && kt(x, "init"), h.NODE_ENV !== "production" && nt && (c.el = null), x.asyncDep) {
      if (E && E.registerDep(x, U, S), !c.el) {
        const O = x.subTree = rt(Pe);
        H(null, O, p, _), c.placeholder = O.el;
      }
    } else
      U(
        x,
        c,
        p,
        _,
        E,
        v,
        S
      );
    h.NODE_ENV !== "production" && (Mn(), kt(x, "mount"));
  }, ce = (c, p, _) => {
    const N = p.component = c.component;
    if (bc(c, p, _))
      if (N.asyncDep && !N.asyncResolved) {
        h.NODE_ENV !== "production" && Pn(p), Y(N, p, _), h.NODE_ENV !== "production" && Mn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, U = (c, p, _, N, E, v, S) => {
    const x = () => {
      if (c.isMounted) {
        let { next: C, bu: P, u: B, parent: q, vnode: ne } = c;
        {
          const qe = Ei(c);
          if (qe) {
            C && (C.el = ne.el, Y(c, C, S)), qe.asyncDep.then(() => {
              c.isUnmounted || x();
            });
            return;
          }
        }
        let Q = C, De;
        h.NODE_ENV !== "production" && Pn(C || c.vnode), Ot(c, !1), C ? (C.el = ne.el, Y(c, C, S)) : C = ne, P && $t(P), (De = C.props && C.props.onVnodeBeforeUpdate) && Xe(De, q, C, ne), Ot(c, !0), h.NODE_ENV !== "production" && Mt(c, "render");
        const Se = Lo(c);
        h.NODE_ENV !== "production" && kt(c, "render");
        const Ge = c.subTree;
        c.subTree = Se, h.NODE_ENV !== "production" && Mt(c, "patch"), R(
          Ge,
          Se,
          // parent may have changed if it's in a teleport
          u(Ge.el),
          // anchor may have changed if it's in a fragment
          Ye(Ge),
          c,
          E,
          v
        ), h.NODE_ENV !== "production" && kt(c, "patch"), C.el = Se.el, Q === null && yc(c, Se.el), B && Ae(B, E), (De = C.props && C.props.onVnodeUpdated) && Ae(
          () => Xe(De, q, C, ne),
          E
        ), h.NODE_ENV !== "production" && ti(c), h.NODE_ENV !== "production" && Mn();
      } else {
        let C;
        const { el: P, props: B } = p, { bm: q, m: ne, parent: Q, root: De, type: Se } = c, Ge = on(p);
        Ot(c, !1), q && $t(q), !Ge && (C = B && B.onVnodeBeforeMount) && Xe(C, Q, p), Ot(c, !0);
        {
          De.ce && // @ts-expect-error _def is private
          De.ce._def.shadowRoot !== !1 && De.ce._injectChildStyle(Se), h.NODE_ENV !== "production" && Mt(c, "render");
          const qe = c.subTree = Lo(c);
          h.NODE_ENV !== "production" && kt(c, "render"), h.NODE_ENV !== "production" && Mt(c, "patch"), R(
            null,
            qe,
            _,
            N,
            c,
            E,
            v
          ), h.NODE_ENV !== "production" && kt(c, "patch"), p.el = qe.el;
        }
        if (ne && Ae(ne, E), !Ge && (C = B && B.onVnodeMounted)) {
          const qe = p;
          Ae(
            () => Xe(C, Q, qe),
            E
          );
        }
        (p.shapeFlag & 256 || Q && on(Q.vnode) && Q.vnode.shapeFlag & 256) && c.a && Ae(c.a, E), c.isMounted = !0, h.NODE_ENV !== "production" && fa(c), p = _ = N = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Ts(x);
    c.scope.off();
    const w = c.update = O.run.bind(O), j = c.job = O.runIfDirty.bind(O);
    j.i = c, j.id = c.uid, O.scheduler = () => cr(j), Ot(c, !0), h.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (C) => $t(c.rtc, C) : void 0, O.onTrigger = c.rtg ? (C) => $t(c.rtg, C) : void 0), w();
  }, Y = (c, p, _) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, qa(c, p.props, N, _), sc(c, p.children, _), Ke(), To(c), We();
  }, Me = (c, p, _, N, E, v, S, x, O = !1) => {
    const w = c && c.children, j = c ? c.shapeFlag : 0, C = p.children, { patchFlag: P, shapeFlag: B } = p;
    if (P > 0) {
      if (P & 128) {
        vt(
          w,
          C,
          _,
          N,
          E,
          v,
          S,
          x,
          O
        );
        return;
      } else if (P & 256) {
        Et(
          w,
          C,
          _,
          N,
          E,
          v,
          S,
          x,
          O
        );
        return;
      }
    }
    B & 8 ? (j & 16 && xe(w, E, v), C !== w && d(_, C)) : j & 16 ? B & 16 ? vt(
      w,
      C,
      _,
      N,
      E,
      v,
      S,
      x,
      O
    ) : xe(w, E, v, !0) : (j & 8 && d(_, ""), B & 16 && k(
      C,
      _,
      N,
      E,
      v,
      S,
      x,
      O
    ));
  }, Et = (c, p, _, N, E, v, S, x, O) => {
    c = c || Bt, p = p || Bt;
    const w = c.length, j = p.length, C = Math.min(w, j);
    let P;
    for (P = 0; P < C; P++) {
      const B = p[P] = O ? gt(p[P]) : Le(p[P]);
      R(
        c[P],
        B,
        _,
        null,
        E,
        v,
        S,
        x,
        O
      );
    }
    w > j ? xe(
      c,
      E,
      v,
      !0,
      !1,
      C
    ) : k(
      p,
      _,
      N,
      E,
      v,
      S,
      x,
      O,
      C
    );
  }, vt = (c, p, _, N, E, v, S, x, O) => {
    let w = 0;
    const j = p.length;
    let C = c.length - 1, P = j - 1;
    for (; w <= C && w <= P; ) {
      const B = c[w], q = p[w] = O ? gt(p[w]) : Le(p[w]);
      if (Xt(B, q))
        R(
          B,
          q,
          _,
          null,
          E,
          v,
          S,
          x,
          O
        );
      else
        break;
      w++;
    }
    for (; w <= C && w <= P; ) {
      const B = c[C], q = p[P] = O ? gt(p[P]) : Le(p[P]);
      if (Xt(B, q))
        R(
          B,
          q,
          _,
          null,
          E,
          v,
          S,
          x,
          O
        );
      else
        break;
      C--, P--;
    }
    if (w > C) {
      if (w <= P) {
        const B = P + 1, q = B < j ? p[B].el : N;
        for (; w <= P; )
          R(
            null,
            p[w] = O ? gt(p[w]) : Le(p[w]),
            _,
            q,
            E,
            v,
            S,
            x,
            O
          ), w++;
      }
    } else if (w > P)
      for (; w <= C; )
        W(c[w], E, v, !0), w++;
    else {
      const B = w, q = w, ne = /* @__PURE__ */ new Map();
      for (w = q; w <= P; w++) {
        const Ee = p[w] = O ? gt(p[w]) : Le(p[w]);
        Ee.key != null && (h.NODE_ENV !== "production" && ne.has(Ee.key) && D(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), ne.set(Ee.key, w));
      }
      let Q, De = 0;
      const Se = P - q + 1;
      let Ge = !1, qe = 0;
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
          for (Q = q; Q <= P; Q++)
            if (Gt[Q - q] === 0 && Xt(Ee, p[Q])) {
              ze = Q;
              break;
            }
        ze === void 0 ? W(Ee, E, v, !0) : (Gt[ze - q] = w + 1, ze >= qe ? qe = ze : Ge = !0, R(
          Ee,
          p[ze],
          _,
          null,
          E,
          v,
          S,
          x,
          O
        ), De++);
      }
      const No = Ge ? uc(Gt) : Bt;
      for (Q = No.length - 1, w = Se - 1; w >= 0; w--) {
        const Ee = q + w, ze = p[Ee], wo = p[Ee + 1], Oo = Ee + 1 < j ? (
          // #13559, fallback to el placeholder for unresolved async component
          wo.el || wo.placeholder
        ) : N;
        Gt[w] === 0 ? R(
          null,
          ze,
          _,
          Oo,
          E,
          v,
          S,
          x,
          O
        ) : Ge && (Q < 0 || w !== No[Q] ? ft(ze, _, Oo, 2) : Q--);
      }
    }
  }, ft = (c, p, _, N, E = null) => {
    const { el: v, type: S, transition: x, children: O, shapeFlag: w } = c;
    if (w & 6) {
      ft(c.component.subTree, p, _, N);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, _, N);
      return;
    }
    if (w & 64) {
      S.move(c, p, _, Nt);
      return;
    }
    if (S === $e) {
      r(v, p, _);
      for (let C = 0; C < O.length; C++)
        ft(O[C], p, _, N);
      r(c.anchor, p, _);
      return;
    }
    if (S === Fn) {
      A(c, p, _);
      return;
    }
    if (N !== 2 && w & 1 && x)
      if (N === 0)
        x.beforeEnter(v), r(v, p, _), Ae(() => x.enter(v), E);
      else {
        const { leave: C, delayLeave: P, afterLeave: B } = x, q = () => {
          c.ctx.isUnmounted ? o(v) : r(v, p, _);
        }, ne = () => {
          C(v, () => {
            q(), B && B();
          });
        };
        P ? P(v, q, ne) : ne();
      }
    else
      r(v, p, _);
  }, W = (c, p, _, N = !1, E = !1) => {
    const {
      type: v,
      props: S,
      ref: x,
      children: O,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: C,
      dirs: P,
      cacheIndex: B
    } = c;
    if (C === -2 && (E = !1), x != null && (Ke(), rn(x, null, _, c, !0), We()), B != null && (p.renderCache[B] = void 0), j & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const q = j & 1 && P, ne = !on(c);
    let Q;
    if (ne && (Q = S && S.onVnodeBeforeUnmount) && Xe(Q, p, c), j & 6)
      Ve(c.component, _, N);
    else {
      if (j & 128) {
        c.suspense.unmount(_, N);
        return;
      }
      q && wt(c, null, p, "beforeUnmount"), j & 64 ? c.type.remove(
        c,
        p,
        _,
        Nt,
        N
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== $e || C > 0 && C & 64) ? xe(
        w,
        p,
        _,
        !1,
        !0
      ) : (v === $e && C & 384 || !E && j & 16) && xe(O, p, _), N && le(c);
    }
    (ne && (Q = S && S.onVnodeUnmounted) || q) && Ae(() => {
      Q && Xe(Q, p, c), q && wt(c, null, p, "unmounted");
    }, _);
  }, le = (c) => {
    const { type: p, el: _, anchor: N, transition: E } = c;
    if (p === $e) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && E && !E.persisted ? c.children.forEach((S) => {
        S.type === Pe ? o(S.el) : le(S);
      }) : me(_, N);
      return;
    }
    if (p === Fn) {
      y(c);
      return;
    }
    const v = () => {
      o(_), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (c.shapeFlag & 1 && E && !E.persisted) {
      const { leave: S, delayLeave: x } = E, O = () => S(_, v);
      x ? x(c.el, v, O) : O();
    } else
      v();
  }, me = (c, p) => {
    let _;
    for (; c !== p; )
      _ = g(c), o(c), c = _;
    o(p);
  }, Ve = (c, p, _) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && ia(c);
    const {
      bum: N,
      scope: E,
      job: v,
      subTree: S,
      um: x,
      m: O,
      a: w,
      parent: j,
      slots: { __: C }
    } = c;
    Fo(O), Fo(w), N && $t(N), j && M(C) && C.forEach((P) => {
      j.renderCache[P] = void 0;
    }), E.stop(), v && (v.flags |= 8, W(S, c, p, _)), x && Ae(x, p), Ae(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && pa(c);
  }, xe = (c, p, _, N = !1, E = !1, v = 0) => {
    for (let S = v; S < c.length; S++)
      W(c[S], p, _, N, E);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), _ = p && p[ya];
    return _ ? g(_) : p;
  };
  let Rt = !1;
  const In = (c, p, _) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : R(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, Rt || (Rt = !0, To(), Xs(), Rt = !1);
  }, Nt = {
    p: R,
    um: W,
    m: ft,
    r: le,
    mt: pe,
    mc: k,
    pc: Me,
    pbc: de,
    n: Ye,
    o: e
  };
  return {
    render: In,
    hydrate: void 0,
    createApp: Wa(In)
  };
}
function Nr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (M(r) && M(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = gt(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && jn(i, l)), l.type === Dn && (l.el = i.el), l.type === Pe && !l.el && (l.el = i.el), h.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function uc(e) {
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
function Ei(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ei(t);
}
function Fo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const fc = Symbol.for("v-scx"), dc = () => {
  {
    const e = $n(fc);
    return e || h.NODE_ENV !== "production" && D(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function sn(e, t, n) {
  return h.NODE_ENV !== "production" && !L(t) && D(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vi(e, t, n);
}
function vi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && D(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && D(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && D(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ie({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = D);
  const a = t && r || !t && s !== "post";
  let f;
  if (gn) {
    if (s === "sync") {
      const m = dc();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = fe, m.resume = fe, m.pause = fe, m;
    }
  }
  const d = _e;
  l.call = (m, I, R) => ot(m, d, I, R);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    Ae(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, I) => {
    I ? m() : cr(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const g = Xl(e, t, l);
  return gn && (f ? f.push(g) : a && g()), g;
}
function pc(e, t, n) {
  const r = this.proxy, o = oe(e) ? e.includes(".") ? Ni(r, e) : () => r[e] : e.bind(r, r);
  let s;
  L(t) ? s = t : (s = t.handler, n = t);
  const i = Sn(this), l = vi(o, s.bind(r), n);
  return i(), l;
}
function Ni(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const hc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Te(t)}Modifiers`] || e[`${Ce(t)}Modifiers`];
function gc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Z;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(xt(Te(t)) in u)) && D(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${xt(Te(t))}" prop.`
        );
      else {
        const g = d[t];
        L(g) && (g(...n) || D(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && hc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => oe(d) ? d.trim() : d)), i.number && (o = n.map(Cr))), h.NODE_ENV !== "production" && _a(e, t, o), h.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[xt(d)] && D(
      `Event "${d}" is emitted in component ${hr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ce(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = xt(t)] || // also try camelCase event handler (#2249)
  r[l = xt(Te(t))];
  !a && s && (a = r[l = xt(Ce(t))]), a && ot(
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
function wi(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!L(e)) {
    const a = (f) => {
      const d = wi(f, t, !0);
      d && (l = !0, ie(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ee(e) && r.set(e, null), null) : (M(s) ? s.forEach((a) => i[a] = null) : ie(i, s), ee(e) && r.set(e, i), i);
}
function fr(e, t) {
  return !e || !vn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Ce(t)) || G(e, t));
}
let Fr = !1;
function Zn() {
  Fr = !0;
}
function Lo(e) {
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
    ctx: I,
    inheritAttrs: R
  } = e, J = qn(e);
  let H, F;
  h.NODE_ENV !== "production" && (Fr = !1);
  try {
    if (n.shapeFlag & 4) {
      const y = o || r, b = h.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(y, {
        get(V, $, k) {
          return D(
            `Property '${String(
              $
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(V, $, k);
        }
      }) : y;
      H = Le(
        f.call(
          b,
          y,
          d,
          h.NODE_ENV !== "production" ? tt(u) : u,
          m,
          g,
          I
        )
      ), F = l;
    } else {
      const y = t;
      h.NODE_ENV !== "production" && l === u && Zn(), H = Le(
        y.length > 1 ? y(
          h.NODE_ENV !== "production" ? tt(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Zn(), tt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : y(
          h.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), F = t.props ? l : _c(l);
    }
  } catch (y) {
    ln.length = 0, On(y, e, 1), H = rt(Pe);
  }
  let T = H, A;
  if (h.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([T, A] = Oi(H)), F && R !== !1) {
    const y = Object.keys(F), { shapeFlag: b } = T;
    if (y.length) {
      if (b & 7)
        s && y.some(Bn) && (F = mc(
          F,
          s
        )), T = bt(T, F, !1, !0);
      else if (h.NODE_ENV !== "production" && !Fr && T.type !== Pe) {
        const V = Object.keys(l), $ = [], k = [];
        for (let z = 0, de = V.length; z < de; z++) {
          const re = V[z];
          vn(re) ? Bn(re) || $.push(re[2].toLowerCase() + re.slice(3)) : k.push(re);
        }
        k.length && D(
          `Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), $.length && D(
          `Extraneous non-emits event listeners (${$.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Ho(T) && D(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), T = bt(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Ho(T) && D(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), so(T, n.transition)), h.NODE_ENV !== "production" && A ? A(T) : H = T, qn(J), H;
}
const Oi = (e) => {
  const t = e.children, n = e.dynamicChildren, r = po(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Oi(r);
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
    if (dr(o)) {
      if (o.type !== Pe || o.children === "v-if") {
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
const _c = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Bn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Ho = (e) => e.shapeFlag & 7 || e.type === Pe;
function bc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, f = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || l) && nt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Bo(r, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const g = d[u];
        if (i[g] !== r[g] && !fr(f, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Bo(r, i, f) : !0 : !!i;
  return !1;
}
function Bo(e, t, n) {
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
function yc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const xi = (e) => e.__isSuspense;
function Ec(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : zs(e);
}
const $e = Symbol.for("v-fgt"), Dn = Symbol.for("v-txt"), Pe = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), ln = [];
let Re = null;
function ke(e = !1) {
  ln.push(Re = e ? null : []);
}
function vc() {
  ln.pop(), Re = ln[ln.length - 1] || null;
}
let hn = 1;
function Uo(e, t = !1) {
  hn += e, e < 0 && Re && t && (Re.hasOnce = !0);
}
function Di(e) {
  return e.dynamicChildren = hn > 0 ? Re || Bt : null, vc(), hn > 0 && Re && Re.push(e), e;
}
function Fe(e, t, n, r, o, s) {
  return Di(
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
function Nc(e, t, n, r, o) {
  return Di(
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
function Xt(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = kn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const wc = (...e) => Ii(
  ...e
), Si = ({ key: e }) => e ?? null, Ln = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || ae(e) || L(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function ht(e, t = null, n = null, r = 0, o = null, s = e === $e ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Si(t),
    ref: t && Ln(t),
    scopeId: ri,
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
  return l ? (ho(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= oe(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && D("VNode created with invalid key (NaN). VNode type:", a.type), hn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Re && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Re.push(a), a;
}
const rt = h.NODE_ENV !== "production" ? wc : Ii;
function Ii(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Ra) && (h.NODE_ENV !== "production" && !e && D(`Invalid vnode type when creating vnode: ${e}.`), e = Pe), dr(e)) {
    const l = bt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ho(l, n), hn > 0 && !s && Re && (l.shapeFlag & 6 ? Re[Re.indexOf(e)] = l : Re.push(l)), l.patchFlag = -2, l;
  }
  if (Pi(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: l, style: a } = t;
    l && !oe(l) && (t.class = cn(l)), ee(a) && (dn(a) && !M(a) && (a = ie({}, a)), t.style = sr(a));
  }
  const i = oe(e) ? 1 : xi(e) ? 128 : Ea(e) ? 64 : ee(e) ? 4 : L(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && dn(e) && (e = K(e), D(
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
function Oc(e) {
  return e ? dn(e) || hi(e) ? ie({}, e) : e : null;
}
function bt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, f = t ? xc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Si(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? M(s) ? s.concat(Ln(t)) : [s, Ln(t)] : Ln(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && M(l) ? l.map(Ci) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && bt(e.ssContent),
    ssFallback: e.ssFallback && bt(e.ssFallback),
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
function Ci(e) {
  const t = bt(e);
  return M(e.children) && (t.children = e.children.map(Ci)), t;
}
function Ti(e = " ", t = 0) {
  return rt(Dn, null, e, t);
}
function An(e = "", t = !1) {
  return t ? (ke(), Nc(Pe, null, e)) : rt(Pe, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean" ? rt(Pe) : M(e) ? rt(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dr(e) ? gt(e) : rt(Dn, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
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
      !o && !hi(t) ? t._ctx = we : o === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ti(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xc(...e) {
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
const Dc = fi();
let Sc = 0;
function Ic(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Dc, s = {
    uid: Sc++,
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
    scope: new yl(
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
    propsOptions: _i(r, o),
    emitsOptions: wi(r, o),
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
  return h.NODE_ENV !== "production" ? s.ctx = Ma(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = gc.bind(null, s), e.ce && e.ce(s), s;
}
let _e = null;
const go = () => _e || we;
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
    (n) => _e = n
  ), Lr = t(
    "__VUE_SSR_SETTERS__",
    (n) => gn = n
  );
}
const Sn = (e) => {
  const t = _e;
  return Qn(e), e.scope.on(), () => {
    e.scope.off(), Qn(t);
  };
}, Ko = () => {
  _e && _e.scope.off(), Qn(null);
}, Cc = /* @__PURE__ */ ct("slot,component");
function Hr(e, { isNativeTag: t }) {
  (Cc(e) || t(e)) && D(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let gn = !1;
function Tc(e, t = !1, n = !1) {
  t && Lr(t);
  const { props: r, children: o } = e.vnode, s = Vi(e);
  Ya(e, r, s, t), oc(e, o, n || t);
  const i = s ? Vc(e, t) : void 0;
  return t && Lr(!1), i;
}
function Vc(e, t) {
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
        oi(s[i]);
    }
    r.compilerOptions && Ac() && D(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ai), h.NODE_ENV !== "production" && ka(e);
  const { setup: o } = r;
  if (o) {
    Ke();
    const s = e.setupContext = o.length > 1 ? Pc(e) : null, i = Sn(e), l = Jt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), a = Gr(l);
    if (We(), i(), (a || e.sp) && !on(e) && ii(e), a) {
      if (l.then(Ko, Ko), t)
        return l.then((f) => {
          Wo(e, f, t);
        }).catch((f) => {
          On(f, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = r.name) != null ? n : "Anonymous";
        D(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Wo(e, l, t);
  } else
    Ai(e, t);
}
function Wo(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (h.NODE_ENV !== "production" && dr(t) && D(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Js(t), h.NODE_ENV !== "production" && $a(e)) : h.NODE_ENV !== "production" && t !== void 0 && D(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ai(e, n);
}
const Ac = () => !0;
function Ai(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || fe);
  {
    const o = Sn(e);
    Ke();
    try {
      Fa(e);
    } finally {
      We(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === fe && !t && (r.template ? D(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : D("Component is missing template or render function: ", r));
}
const Jo = h.NODE_ENV !== "production" ? {
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
function Rc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ue(e, "get", "$slots"), t[n];
    }
  });
}
function Pc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && D("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (M(n) ? r = "array" : ae(n) && (r = "ref")), r !== "object" && D(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Jo));
      },
      get slots() {
        return r || (r = Rc(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Jo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function pr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Js(Hl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Vt)
        return Vt[n](e);
    },
    has(t, n) {
      return n in t || n in Vt;
    }
  })) : e.proxy;
}
const Mc = /(?:^|[-_])(\w)/g, kc = (e) => e.replace(Mc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ri(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function hr(e, t, n = !1) {
  let r = Ri(t);
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
  return r ? kc(r) : n ? "App" : "Anonymous";
}
function Pi(e) {
  return L(e) && "__vccOpts" in e;
}
const _o = (e, t) => {
  const n = ql(e, t, gn);
  if (h.NODE_ENV !== "production") {
    const r = go();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function $c() {
  if (h.NODE_ENV === "production" || typeof window > "u")
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
        if (Ct(u))
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
    const g = [];
    u.type.props && u.props && g.push(i("props", K(u.props))), u.setupState !== Z && g.push(i("setup", u.setupState)), u.data !== Z && g.push(i("data", K(u.data)));
    const m = a(u, "computed");
    m && g.push(i("computed", m));
    const I = a(u, "inject");
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : ee(u) ? ["object", { object: g ? K(u) : u }] : ["span", n, String(u)];
  }
  function a(u, g) {
    const m = u.type;
    if (L(m))
      return;
    const I = {};
    for (const R in u.ctx)
      f(m, R, g) && (I[R] = u.ctx[R]);
    return I;
  }
  function f(u, g, m) {
    const I = u[m];
    if (M(I) && I.includes(g) || ee(I) && g in I || u.extends && f(u.extends, g, m) || u.mixins && u.mixins.some((R) => f(R, g, m)))
      return !0;
  }
  function d(u) {
    return Oe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Yo = "3.5.18", je = h.NODE_ENV !== "production" ? D : fe;
var be = {};
let Br;
const Go = typeof window < "u" && window.trustedTypes;
if (Go)
  try {
    Br = /* @__PURE__ */ Go.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    be.NODE_ENV !== "production" && je(`Error creating trusted types policy: ${e}`);
  }
const Mi = Br ? (e) => Br.createHTML(e) : (e) => e, jc = "http://www.w3.org/2000/svg", Fc = "http://www.w3.org/1998/Math/MathML", it = typeof document < "u" ? document : null, qo = it && /* @__PURE__ */ it.createElement("template"), Lc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? it.createElementNS(jc, e) : t === "mathml" ? it.createElementNS(Fc, e) : n ? it.createElement(e, { is: n }) : it.createElement(e);
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
      qo.innerHTML = Mi(
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
}, Hc = Symbol("_vtc");
function Bc(e, t, n) {
  const r = e[Hc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const zo = Symbol("_vod"), Uc = Symbol("_vsh"), Kc = Symbol(be.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Wc = /(^|;)\s*display\s*:/;
function Jc(e, t, n) {
  const r = e.style, o = oe(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (oe(t))
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
      const i = r[Kc];
      i && (n += ";" + i), r.cssText = n, s = Wc.test(n);
    }
  } else t && e.removeAttribute("style");
  zo in e && (e[zo] = s ? r.display : "", e[Uc] && (r.display = "none"));
}
const Yc = /[^\\];\s*$/, Xo = /\s*!important$/;
function Hn(e, t, n) {
  if (M(n))
    n.forEach((r) => Hn(e, t, r));
  else if (n == null && (n = ""), be.NODE_ENV !== "production" && Yc.test(n) && je(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Gc(e, t);
    Xo.test(n) ? e.setProperty(
      Ce(r),
      n.replace(Xo, ""),
      "important"
    ) : e[r] = n;
  }
}
const Zo = ["Webkit", "Moz", "ms"], wr = {};
function Gc(e, t) {
  const n = wr[t];
  if (n)
    return n;
  let r = Te(t);
  if (r !== "filter" && r in e)
    return wr[t] = r;
  r = or(r);
  for (let o = 0; o < Zo.length; o++) {
    const s = Zo[o] + r;
    if (s in e)
      return wr[t] = s;
  }
  return t;
}
const Qo = "http://www.w3.org/1999/xlink";
function es(e, t, n, r, o, s = bl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qo, t.slice(6, t.length)) : e.setAttributeNS(Qo, t, n) : n == null || s && !Ds(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : yt(n) ? String(n) : n
  );
}
function ts(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Mi(n) : n);
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
    l === "boolean" ? n = Ds(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    be.NODE_ENV !== "production" && !i && je(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Ft(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function qc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ns = Symbol("_vei");
function zc(e, t, n, r, o = null) {
  const s = e[ns] || (e[ns] = {}), i = s[t];
  if (r && i)
    i.value = be.NODE_ENV !== "production" ? os(r, t) : r;
  else {
    const [l, a] = Xc(t);
    if (r) {
      const f = s[t] = eu(
        be.NODE_ENV !== "production" ? os(r, t) : r,
        o
      );
      Ft(e, l, f, a);
    } else i && (qc(e, l, i, a), s[t] = void 0);
  }
}
const rs = /(?:Once|Passive|Capture)$/;
function Xc(e) {
  let t;
  if (rs.test(e)) {
    t = {};
    let r;
    for (; r = e.match(rs); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ce(e.slice(2)), t];
}
let Or = 0;
const Zc = /* @__PURE__ */ Promise.resolve(), Qc = () => Or || (Zc.then(() => Or = 0), Or = Date.now());
function eu(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    ot(
      tu(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Qc(), n;
}
function os(e, t) {
  return L(e) || M(e) ? e : (je(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), fe);
}
function tu(e, t) {
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
const ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nu = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? Bc(e, r, i) : t === "style" ? Jc(e, n, r) : vn(t) ? Bn(t) || zc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ru(e, t, r, i)) ? (ts(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && es(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !oe(r)) ? ts(e, Te(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), es(e, t, r, i));
};
function ru(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ss(t) && L(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ss(t) && oe(n) ? !1 : t in e;
}
const is = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ou(e, t, n) {
  const r = /* @__PURE__ */ si(e, t);
  nr(r) && ie(r, t);
  class o extends mo {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const su = typeof HTMLElement < "u" ? HTMLElement : class {
};
class mo extends su {
  constructor(t, n = {}, r = fs) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== fs ? this._root = this.shadowRoot : (be.NODE_ENV !== "production" && this.shadowRoot && je(
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
      if (s && !M(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = xo(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Te(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : be.NODE_ENV !== "production" && i && je(
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
        G(this, r) ? be.NODE_ENV !== "production" && je(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => he(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = M(n) ? n : Object.keys(n || {});
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
    let r = n ? this.getAttribute(t) : is;
    const o = Te(t);
    n && this._numberProps && this._numberProps[o] && (r = xo(r)), this._setProp(o, r, !1, !0);
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
    if (n !== this._props[t] && (n === is ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Ce(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ce(t), n + "") : n || this.removeAttribute(Ce(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), pu(t, this._root);
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
const ls = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return M(t) ? (n) => $t(t, n) : t;
};
function iu(e) {
  e.target.composing = !0;
}
function as(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const xr = Symbol("_assign"), lu = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[xr] = ls(o);
    const s = r || o.props && o.props.type === "number";
    Ft(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Cr(l)), e[xr](l);
    }), n && Ft(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ft(e, "compositionstart", iu), Ft(e, "compositionend", as), Ft(e, "change", as));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[xr] = ls(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Cr(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, au = ["ctrl", "shift", "alt", "meta"], cu = {
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
  exact: (e, t) => au.some((n) => e[`${n}Key`] && !t.includes(n))
}, cs = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = cu[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...s);
  });
}, uu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, fu = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Ce(o.key);
    if (t.some(
      (i) => i === s || uu[i] === s
    ))
      return e(o);
  });
}, du = /* @__PURE__ */ ie({ patchProp: nu }, Lc);
let us;
function ki() {
  return us || (us = lc(du));
}
const pu = (...e) => {
  ki().render(...e);
}, fs = (...e) => {
  const t = ki().createApp(...e);
  be.NODE_ENV !== "production" && (gu(t), _u(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = mu(r);
    if (!o) return;
    const s = t._component;
    !L(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, hu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function hu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hl(t) || gl(t) || _l(t),
    writable: !1
  });
}
function _u(e) {
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
function mu(e) {
  if (oe(e)) {
    const t = document.querySelector(e);
    return be.NODE_ENV !== "production" && !t && je(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return be.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && je(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var bu = {};
function yu() {
  $c();
}
bu.NODE_ENV !== "production" && yu();
var $i = "vercel.ai.error", Eu = Symbol.for($i), ji, vu = class Fi extends Error {
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
    super(n), this[ji] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Fi.hasMarker(t, $i);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
ji = Eu;
var Wt = vu;
function Li(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Hi = "AI_InvalidArgumentError", Bi = `vercel.ai.error.${Hi}`, Nu = Symbol.for(Bi), Ui, wu = class extends Wt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Hi, message: e, cause: t }), this[Ui] = !0, this.argument = n;
  }
  static isInstance(e) {
    return Wt.hasMarker(e, Bi);
  }
};
Ui = Nu;
var Ki = "AI_JSONParseError", Wi = `vercel.ai.error.${Ki}`, Ou = Symbol.for(Wi), Ji, ds = class extends Wt {
  constructor({ text: e, cause: t }) {
    super({
      name: Ki,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Li(t)}`,
      cause: t
    }), this[Ji] = !0, this.text = e;
  }
  static isInstance(e) {
    return Wt.hasMarker(e, Wi);
  }
};
Ji = Ou;
var Yi = "AI_TypeValidationError", Gi = `vercel.ai.error.${Yi}`, xu = Symbol.for(Gi), qi, Du = class Ur extends Wt {
  constructor({ value: t, cause: n }) {
    super({
      name: Yi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Li(n)}`,
      cause: n
    }), this[qi] = !0, this.value = t;
  }
  static isInstance(t) {
    return Wt.hasMarker(t, Gi);
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
qi = xu;
var ps = Du;
let Su = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function Iu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yt = { exports: {} };
const Cu = typeof Buffer < "u", hs = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, gs = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function zi(e, t, n) {
  n == null && t !== null && typeof t == "object" && (n = t, t = void 0), Cu && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const r = JSON.parse(e, t);
  if (r === null || typeof r != "object")
    return r;
  const o = n && n.protoAction || "error", s = n && n.constructorAction || "error";
  if (o === "ignore" && s === "ignore")
    return r;
  if (o !== "ignore" && s !== "ignore") {
    if (hs.test(e) === !1 && gs.test(e) === !1)
      return r;
  } else if (o !== "ignore" && s === "ignore") {
    if (hs.test(e) === !1)
      return r;
  } else if (gs.test(e) === !1)
    return r;
  return Xi(r, { protoAction: o, constructorAction: s, safe: n && n.safe });
}
function Xi(e, { protoAction: t = "error", constructorAction: n = "error", safe: r } = {}) {
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
      for (const l in i) {
        const a = i[l];
        a && typeof a == "object" && o.push(a);
      }
    }
  }
  return e;
}
function bo(e, t, n) {
  const r = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return zi(e, t, n);
  } finally {
    Error.stackTraceLimit = r;
  }
}
function Tu(e, t) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return zi(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = n;
  }
}
Yt.exports = bo;
Yt.exports.default = bo;
Yt.exports.parse = bo;
Yt.exports.safeParse = Tu;
Yt.exports.scan = Xi;
var Vu = Yt.exports;
const Au = /* @__PURE__ */ Iu(Vu);
var Ru = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = Su(n, t);
  if (e == null)
    return o;
  if (n.includes(r))
    throw new wu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, yo = Ru(), Kr = Symbol.for("vercel.ai.validator");
function Pu(e) {
  return { [Kr]: !0, validate: e };
}
function Mu(e) {
  return typeof e == "object" && e !== null && Kr in e && e[Kr] === !0 && "validate" in e;
}
function ku(e) {
  return Mu(e) ? e : $u(e);
}
function $u(e) {
  return Pu((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function ju({
  value: e,
  schema: t
}) {
  const n = ku(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const r = n.validate(e);
    return r.success ? r : {
      success: !1,
      error: ps.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: ps.wrap({ value: e, cause: r })
    };
  }
}
function _s({
  text: e,
  schema: t
}) {
  try {
    const n = Au.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const r = ju({ value: n, schema: t });
    return r.success ? { ...r, rawValue: n } : r;
  } catch (n) {
    return {
      success: !1,
      error: ds.isInstance(n) ? n : new ds({ text: e, cause: n })
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
}, bn = {
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
}, En = {
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
}, Fu = [
  _n,
  mn,
  bn,
  yn,
  En
];
_n.code + "", mn.code + "", bn.code + "", yn.code + "", En.code + "";
_n.name + "", _n.code, mn.name + "", mn.code, bn.name + "", bn.code, yn.name + "", yn.code, En.name + "", En.code;
Fu.map((e) => e.code);
function Lu({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Hu(e) {
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
function Bu(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = _s({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = _s({ text: Hu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Uu = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Ku = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Wu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Ju = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Yu = {
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
}, Gu = {
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
}, qu = {
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
}, zu = {
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
}, Xu = {
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
}, Zu = {
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
}, Qu = {
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
}, ef = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, tf = {
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
}, nf = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, rf = {
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
}, of = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, Eo = [
  Uu,
  Ku,
  Wu,
  Ju,
  Yu,
  Gu,
  qu,
  zu,
  Xu,
  Zu,
  Qu,
  ef,
  tf,
  nf,
  rf,
  of
], sf = Object.fromEntries(
  Eo.map((e) => [e.code, e])
);
Object.fromEntries(
  Eo.map((e) => [e.name, e.code])
);
var lf = Eo.map((e) => e.code), af = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!lf.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const r = n, o = e.slice(t + 1), s = JSON.parse(o);
  return sf[r].parse(s);
}, cf = 10;
function uf(e, t) {
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    n.set(o, r), r += o.length;
  return e.length = 0, n;
}
async function ff({
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
  onFinishMessagePart: I,
  onFinishStepPart: R,
  onStartStepPart: J
}) {
  const H = e.getReader(), F = new TextDecoder(), T = [];
  let A = 0;
  for (; ; ) {
    const { value: y } = await H.read();
    if (y && (T.push(y), A += y.length, y[y.length - 1] !== cf))
      continue;
    if (T.length === 0)
      break;
    const b = uf(T, A);
    A = 0;
    const V = F.decode(b, { stream: !0 }).split(`
`).filter(($) => $ !== "").map(af);
    for (const { type: $, value: k } of V)
      switch ($) {
        case "text":
          await t?.(k);
          break;
        case "reasoning":
          await n?.(k);
          break;
        case "reasoning_signature":
          await r?.(k);
          break;
        case "redacted_reasoning":
          await o?.(k);
          break;
        case "file":
          await i?.(k);
          break;
        case "source":
          await s?.(k);
          break;
        case "data":
          await l?.(k);
          break;
        case "error":
          await a?.(k);
          break;
        case "message_annotations":
          await m?.(k);
          break;
        case "tool_call_streaming_start":
          await f?.(k);
          break;
        case "tool_call_delta":
          await d?.(k);
          break;
        case "tool_call":
          await u?.(k);
          break;
        case "tool_result":
          await g?.(k);
          break;
        case "finish_message":
          await I?.(k);
          break;
        case "finish_step":
          await R?.(k);
          break;
        case "start_step":
          await J?.(k);
          break;
        default: {
          const z = $;
          throw new Error(`Unknown stream part type: ${z}`);
        }
      }
  }
}
async function df({
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
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((b, V) => {
    var $;
    return Math.max(b, ($ = V.step) != null ? $ : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, m, I;
  function R(b, V) {
    const $ = u.parts.find(
      (k) => k.type === "tool-invocation" && k.toolInvocation.toolCallId === b
    );
    $ != null ? $.toolInvocation = V : u.parts.push({
      type: "tool-invocation",
      toolInvocation: V
    });
  }
  const J = [];
  let H = f ? i?.annotations : void 0;
  const F = {};
  let T = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, A = "unknown";
  function y() {
    const b = [...J];
    H?.length && (u.annotations = H);
    const V = {
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
      message: V,
      data: b,
      replaceLastMessage: f
    });
  }
  await ff({
    stream: e,
    onTextPart(b) {
      g == null ? (g = {
        type: "text",
        text: b
      }, u.parts.push(g)) : g.text += b, u.content += b, y();
    },
    onReasoningPart(b) {
      var V;
      I == null ? (I = { type: "text", text: b }, m?.details.push(I)) : I.text += b, m == null ? (m = {
        type: "reasoning",
        reasoning: b,
        details: [I]
      }, u.parts.push(m)) : m.reasoning += b, u.reasoning = ((V = u.reasoning) != null ? V : "") + b, y();
    },
    onReasoningSignaturePart(b) {
      I != null && (I.signature = b.signature);
    },
    onRedactedReasoningPart(b) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: b.data
      }), I = void 0, y();
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
      const V = {
        state: "partial-call",
        step: d,
        toolCallId: b.toolCallId,
        toolName: b.toolName,
        args: void 0
      };
      u.toolInvocations.push(V), R(b.toolCallId, V), y();
    },
    onToolCallDeltaPart(b) {
      const V = F[b.toolCallId];
      V.text += b.argsTextDelta;
      const { value: $ } = Bu(V.text), k = {
        state: "partial-call",
        step: V.step,
        toolCallId: b.toolCallId,
        toolName: V.toolName,
        args: $
      };
      u.toolInvocations[V.index] = k, R(b.toolCallId, k), y();
    },
    async onToolCallPart(b) {
      const V = {
        state: "call",
        step: d,
        ...b
      };
      if (F[b.toolCallId] != null ? u.toolInvocations[F[b.toolCallId].index] = V : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(V)), R(b.toolCallId, V), y(), n) {
        const $ = await n({ toolCall: b });
        if ($ != null) {
          const k = {
            state: "result",
            step: d,
            ...b,
            result: $
          };
          u.toolInvocations[u.toolInvocations.length - 1] = k, R(b.toolCallId, k), y();
        }
      }
    },
    onToolResultPart(b) {
      const V = u.toolInvocations;
      if (V == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const $ = V.findIndex(
        (z) => z.toolCallId === b.toolCallId
      );
      if ($ === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const k = {
        ...V[$],
        state: "result",
        ...b
      };
      V[$] = k, R(b.toolCallId, k), y();
    },
    onDataPart(b) {
      J.push(...b), y();
    },
    onMessageAnnotationsPart(b) {
      H == null ? H = [...b] : H.push(...b), y();
    },
    onFinishStepPart(b) {
      d += 1, g = b.isContinued ? g : void 0, m = void 0, I = void 0;
    },
    onStartStepPart(b) {
      f || (u.id = b.messageId), u.parts.push({ type: "step-start" }), y();
    },
    onFinishMessagePart(b) {
      A = b.finishReason, b.usage != null && (T = Lu(b.usage));
    },
    onErrorPart(b) {
      throw new Error(b);
    }
  }), r?.({ message: u, finishReason: A, usage: T });
}
async function pf({
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
async function hf({
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
  await pf({
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
var gf = () => fetch;
async function _f({
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
  fetch: g = gf(),
  lastMessage: m,
  requestType: I = "generate"
}) {
  var R, J, H;
  const T = await (I === "resume" ? g(`${e}?chatId=${t.id}`, {
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
    signal: (J = s?.()) == null ? void 0 : J.signal,
    credentials: r
  })).catch((A) => {
    throw i(), A;
  });
  if (l)
    try {
      await l(T);
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
      await hf({
        stream: T.body,
        update: a,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await df({
        stream: T.body,
        update: a,
        lastMessage: m,
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
function Zi(e) {
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
    parts: Zi(t)
  }));
}
async function ms(e) {
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
function mf({
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
    Qi(s) && // limit the number of automatic steps:
    ((o = Wr(s.toolInvocations)) != null ? o : 0) < n
  );
}
function Qi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, o, s) => o.type === "step-start" ? s : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function bf({
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
var Dr = /* @__PURE__ */ new WeakMap(), bs = 0;
function yf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Dr.has(e[n]) ? r = Dr.get(e[n]) : (r = bs, Dr.set(e[n], bs++)), t += "@" + r;
  }
  return t;
}
function Ef(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = yf(e) : e = String(e || ""), e;
}
var vo = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return Ef(t);
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
function vf() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function Nf() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var wf = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Sr = {
  isOnline: vf,
  isDocumentVisible: Nf,
  fetcher: wf
};
var lt = function() {
  return lt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, lt.apply(this, arguments);
}, Lt = function(e, t, n, r) {
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
}, Ht = function(e, t) {
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
}, Of = function(e, t) {
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
}, xf = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, el = new vo(), er = new vo(), Ir = new vo(), tl = {
  cache: el,
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
function Df(e, t, n) {
  var r = er.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    er.set(e, [t], n > 0 ? n + o : n);
  }
}
function Sf(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var r = Math.min(t || 0, n.errorRetryCount), o = r * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: r + 1, shouldRetryOnError: !0 });
    }, o);
  }
}
var ys = function(e, t, n, r) {
  return n === void 0 && (n = el), r === void 0 && (r = tl.ttl), Lt(void 0, void 0, void 0, function() {
    var o, s, i, l, a, f, d;
    return Ht(this, function(u) {
      switch (u.label) {
        case 0:
          if (!If(t)) return [3, 5];
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
          return f = er.get(e), f && f.data.length && (d = f.data.filter(function(g) {
            return g.key === e;
          }), d.forEach(function(g, m) {
            typeof a.data < "u" && (g.data = a.data), g.error = a.error, g.isValidating = a.isValidating, g.isLoading = a.isValidating;
            var I = m === d.length - 1;
            I || delete d[m];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function Es() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = lt({}, tl), i = !1, l = !1, a = go(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = lt(lt({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, g = typeof r == "function" ? r : He(r);
  typeof o > "u" && (o = s.fetcher);
  var m = null;
  m || (m = wn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var I = function(F, T) {
    return Lt(e, void 0, void 0, function() {
      var A, y, b, V, $, k, z, de = this;
      return Ht(this, function(re) {
        switch (re.label) {
          case 0:
            return A = m.data === void 0, y = g.value, y ? (b = s.cache.get(y), V = b && b.data, m.isValidating = !0, m.isLoading = !V, V && (m.data = V.data, m.error = V.error), $ = F || o, !$ || !s.isDocumentVisible() && !A || T?.forceRevalidate !== void 0 && !T?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : b && (k = !!(Date.now() - b.createdAt >= s.dedupingInterval || T?.forceRevalidate), !k) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (z = function() {
              return Lt(de, void 0, void 0, function() {
                var se, ye, pe, ce;
                return Ht(this, function(U) {
                  switch (U.label) {
                    case 0:
                      return se = Ir.get(y), se ? [3, 2] : (ye = Array.isArray(y) ? y : [y], pe = $.apply(void 0, xf([], Of(ye), !1)), Ir.set(y, pe, s.dedupingInterval), [4, ys(y, pe, s.cache, u)]);
                    case 1:
                      return U.sent(), [3, 4];
                    case 2:
                      return [4, ys(y, se.data, s.cache, u)];
                    case 3:
                      U.sent(), U.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Ir.delete(y), m.error !== void 0 && (ce = !i && s.shouldRetryOnError && (T ? T.shouldRetryOnError : !0), ce && Sf(I, T ? T.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, V && s.revalidateDebounce ? (setTimeout(function() {
              return Lt(de, void 0, void 0, function() {
                return Ht(this, function(se) {
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
  }, R = function() {
    return Lt(e, void 0, void 0, function() {
      return Ht(this, function(F) {
        return [2, I(null, { shouldRetryOnError: !1 })];
      });
    });
  }, J = null;
  lo(function() {
    var F = function() {
      return Lt(e, void 0, void 0, function() {
        return Ht(this, function(T) {
          switch (T.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, I()] : [3, 2];
            case 1:
              return T.sent(), [3, 3];
            case 2:
              J && clearTimeout(J), T.label = 3;
            case 3:
              return s.refreshInterval && !i && (J = setTimeout(F, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (J = setTimeout(F, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", R, !1), window.addEventListener("focus", R, !1));
  }), ao(function() {
    i = !0, J && clearTimeout(J), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", R, !1), window.removeEventListener("focus", R, !1));
    var F = er.get(g.value);
    F && (F.data = F.data.filter(function(T) {
      return T !== m;
    }));
  });
  try {
    sn(g, function(F) {
      Je(g) || (g.value = F), m.key = F, m.isValidating = !!F, Df(g.value, m, u), !d && !l && g.value && I(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = lt(lt({}, Wl(m)), { mutate: function(F, T) {
    return I(F, lt(lt({}, T), { forceRevalidate: !0 }));
  } });
  return H;
}
function If(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Cf = Es.default || Es, vs = {}, Ns = {};
function Tf({
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
  generateId: g = yo,
  onToolCall: m,
  fetch: I,
  keepLastMessageOnError: R = !0,
  maxSteps: J = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var F, T;
  const A = t ?? g(), y = `${e}|${A}`, { data: b, mutate: V } = Cf(
    y,
    () => {
      var W;
      return (W = vs[y]) != null ? W : Rn(n);
    }
  ), $ = (F = Ns[A]) != null ? F : Ns[A] = He(
    "ready"
  );
  (T = b.value) != null || (b.value = Rn(n));
  const k = (W) => (vs[y] = W, V()), z = b, de = He(void 0), re = He(void 0);
  let se = null;
  async function ye(W, { data: le, headers: me, body: Ve } = {}) {
    var xe, Ye, Rt;
    de.value = void 0, $.value = "submitted";
    const In = z.value.length, Nt = Wr(
      (xe = z.value[z.value.length - 1]) == null ? void 0 : xe.toolInvocations
    );
    try {
      se = new AbortController();
      const dt = Rn(W), c = dt;
      k(c);
      const p = (Ye = re.value) != null ? Ye : [], _ = o ? c : c.map(
        ({
          role: N,
          content: E,
          experimental_attachments: v,
          data: S,
          annotations: x,
          toolInvocations: O,
          parts: w
        }) => ({
          role: N,
          content: E,
          ...v !== void 0 && {
            experimental_attachments: v
          },
          ...S !== void 0 && { data: S },
          ...x !== void 0 && { annotations: x },
          ...O !== void 0 && { toolInvocations: O },
          ...w !== void 0 && { parts: w }
        })
      );
      await _f({
        api: e,
        body: (Rt = H?.({
          id: A,
          messages: c,
          requestData: le,
          requestBody: Ve
        })) != null ? Rt : {
          id: A,
          messages: _,
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
          $.value = "streaming", k([
            ...v ? c.slice(0, c.length - 1) : c,
            N
          ]), E?.length && (re.value = [...p, ...E]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          R || k(dt);
        },
        generateId: g,
        onToolCall: m,
        fetch: I,
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
    mf({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: In,
      maxSteps: J,
      messages: z.value
    }) && await ye(z.value);
  }
  const pe = async (W, le) => {
    var me, Ve, xe;
    const Ye = await ms(
      (me = le?.experimental_attachments) != null ? me : W.experimental_attachments
    );
    return ye(
      z.value.concat({
        ...W,
        id: (Ve = W.id) != null ? Ve : g(),
        createdAt: (xe = W.createdAt) != null ? xe : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Zi(W)
      }),
      le
    );
  }, ce = async (W) => {
    const le = z.value;
    return le.length === 0 ? null : le[le.length - 1].role === "assistant" ? ye(le.slice(0, -1), W) : ye(le, W);
  }, U = () => {
    se && (se.abort(), se = null);
  }, Y = (W) => {
    typeof W == "function" && (W = W(z.value)), k(Rn(W));
  }, Me = (W) => {
    typeof W == "function" && (W = W(re.value)), re.value = W;
  }, Et = He(r), vt = async (W, le = {}) => {
    var me;
    (me = W?.preventDefault) == null || me.call(W);
    const Ve = Et.value;
    if (!Ve && !le.allowEmptySubmit)
      return;
    const xe = await ms(
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
    if (bf({
      messages: me,
      toolCallId: W,
      toolResult: le
    }), k(me), $.value === "submitted" || $.value === "streaming")
      return;
    const Ve = me[me.length - 1];
    Qi(Ve) && ye(me);
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
    setData: Me,
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
function Vf(e) {
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
const Af = {
  key: 0,
  class: "chat-panel"
}, Rf = {
  key: 0,
  class: "msg-empty"
}, Pf = ["src"], Mf = {
  key: 1,
  class: "msg-line msg-ai"
}, kf = {
  key: 0,
  class: "dice"
}, $f = { key: 1 }, jf = ["disabled"], Ff = /* @__PURE__ */ si({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s } = Tf({ api: t.apiUrl }), { isRecording: i, start: l, stop: a } = Vf((A) => {
      const y = A.trim();
      if (["发送", "提交", "发出"].includes(y)) return void o();
      if (["清空", "清除", "删除"].includes(y)) return void (r.value = "");
      r.value = y;
    }), f = He(!1), d = wn({ x: 0, y: 0 }), u = He(null), g = He(null), m = He(!1);
    function I() {
      f.value = !f.value;
    }
    function R() {
      m.value || I();
    }
    function J(A) {
      return A.trim().startsWith("<audio");
    }
    function H(A) {
      const y = A.match(/src="([^"]+)"/);
      return y ? y[1] : null;
    }
    const F = _o(() => {
      if (!s.value) return !1;
      const A = [...n.value].reverse().find((y) => y.role === "user");
      return !!(A && /摇骰子|掷骰子/.test(A.content));
    });
    sn(n, async (A, y) => {
      if (!A || A.length === y?.length) return;
      const b = A[A.length - 1];
      if (b) {
        if ("toolName" in b && b.toolName)
          switch (b.toolName) {
            case "navigateToPage": {
              const V = b.result;
              V && V.page && (console.log(`[AI Bubble] 检测到导航指令, 目标: ${V.page}`), window.dispatchEvent(new CustomEvent("ai-navigate", { detail: { page: V.page }, bubbles: !0, composed: !0 })));
              break;
            }
            case "zoomInOnPhoto": {
              const V = b.result;
              V && V.title && (console.log(`[AI Bubble] 检测到放大图片指令, 目标: ${V.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", { detail: { title: V.title }, bubbles: !0, composed: !0 })));
              break;
            }
          }
        await no(), g.value && (g.value.scrollTop = g.value.scrollHeight);
      }
    }, { deep: !0 });
    function T(A) {
      A.preventDefault();
      const y = u.value, b = A.clientX, V = A.clientY, $ = d.x, k = d.y;
      let z = !1;
      function de(se) {
        const ye = se.clientX - b, pe = se.clientY - V;
        if (!z && (Math.abs(ye) > 5 || Math.abs(pe) > 5) && (z = !0, m.value = !0), z) {
          const ce = Math.min(Math.max(0, $ + ye), window.innerWidth - y.offsetWidth), U = Math.min(Math.max(0, k + pe), window.innerHeight - y.offsetHeight);
          d.x = ce, d.y = U;
        }
      }
      function re() {
        document.removeEventListener("mousemove", de), document.removeEventListener("mouseup", re), setTimeout(() => m.value = !1, 10);
      }
      document.addEventListener("mousemove", de), document.addEventListener("mouseup", re);
    }
    return lo(() => {
      const A = u.value, y = 20;
      d.x = window.innerWidth - A.offsetWidth - y, d.y = window.innerHeight - A.offsetHeight - y;
    }), (A, y) => (ke(), Fe("div", {
      ref_key: "containerRef",
      ref: u,
      class: "ai-bubble-container",
      style: sr({ left: d.x + "px", top: d.y + "px" })
    }, [
      ht("div", {
        class: "floating-ball",
        onMousedown: T,
        onClick: R
      }, "AI", 32),
      f.value ? (ke(), Fe("div", Af, [
        f.value ? (ke(), Fe("div", {
          key: 0,
          class: "close-btn",
          onClick: I
        }, "×")) : An("", !0),
        ht("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: g
        }, [
          he(n).length === 0 ? (ke(), Fe("div", Rf, " 有什么可以帮您的吗？ ")) : An("", !0),
          (ke(!0), Fe($e, null, Pa(he(n), (b) => (ke(), Fe("div", {
            key: b.id,
            class: cn(["msg-line", b.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            J(b.content) ? (ke(), Fe("audio", {
              key: 0,
              src: H(b.content),
              controls: "",
              autoplay: ""
            }, null, 8, Pf)) : (ke(), Fe($e, { key: 1 }, [
              Ti(Is(b.content), 1)
            ], 64))
          ], 2))), 128)),
          he(s) ? (ke(), Fe("div", Mf, [
            F.value ? (ke(), Fe("span", kf, "⚀⚂⚅")) : (ke(), Fe("span", $f, "思考中..."))
          ])) : An("", !0)
        ], 512),
        ht("form", {
          onSubmit: y[3] || (y[3] = cs(
            //@ts-ignore
            (...b) => he(o) && he(o)(...b),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          ba(ht("textarea", {
            "onUpdate:modelValue": y[0] || (y[0] = (b) => ae(r) ? r.value = b : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: y[1] || (y[1] = fu(cs(
              //@ts-ignore
              (...b) => he(o) && he(o)(...b),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [lu, he(r)]
          ]),
          ht("button", {
            type: "button",
            class: cn(["btn-voice", { listening: he(i) }]),
            onClick: y[2] || (y[2] = (b) => he(i) ? he(a)() : he(l)()),
            title: "语音输入"
          }, "🎤", 2),
          ht("button", {
            type: "submit",
            class: "btn-send",
            disabled: he(s) || !he(r).trim()
          }, "➤", 8, jf)
        ], 32)
      ])) : An("", !0)
    ], 4));
  }
}), Lf = ".ai-bubble-container{position:fixed;z-index:9999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", Hf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Bf = /* @__PURE__ */ Hf(Ff, [["styles", [Lf]]]), Uf = /* @__PURE__ */ ou(Bf);
customElements.define("ai-chat-bubble", Uf);
