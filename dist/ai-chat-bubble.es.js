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
}, Xi = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Un = (e) => e.startsWith("onUpdate:"), ae = Object.assign, qo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zi = Object.prototype.hasOwnProperty, q = (e, t) => Zi.call(e, t), M = Array.isArray, It = (e) => no(e) === "[object Map]", Ns = (e) => no(e) === "[object Set]", F = (e) => typeof e == "function", ie = (e) => typeof e == "string", Et = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", Go = (e) => (oe(e) || F(e)) && F(e.then) && F(e.catch), ws = Object.prototype.toString, no = (e) => ws.call(e), Xo = (e) => no(e).slice(8, -1), oo = (e) => no(e) === "[object Object]", Zo = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ut(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qi = /* @__PURE__ */ ut(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ro = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ea = /-(\w)/g, Ve = ro(
  (e) => e.replace(ea, (t, n) => n ? n.toUpperCase() : "")
), ta = /\B([A-Z])/g, Ce = ro(
  (e) => e.replace(ta, "-$1").toLowerCase()
), so = ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = ro(
  (e) => e ? `on${so(e)}` : ""
), bt = (e, t) => !Object.is(e, t), Ft = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Vo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Or = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xr;
const wn = () => xr || (xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function io(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ie(o) ? sa(o) : io(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (ie(e) || oe(e))
    return e;
}
const na = /;(?![^(]*\))/g, oa = /:([^]+)/, ra = /\/\*[^]*?\*\//g;
function sa(e) {
  const t = {};
  return e.replace(ra, "").split(na).forEach((n) => {
    if (n) {
      const o = n.split(oa);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function un(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const o = un(e[n]);
      o && (t += o + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ia = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", aa = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", la = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ca = /* @__PURE__ */ ut(ia), ua = /* @__PURE__ */ ut(aa), fa = /* @__PURE__ */ ut(la), da = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pa = /* @__PURE__ */ ut(da);
function Os(e) {
  return !!e || e === "";
}
const xs = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => ie(e) ? e : e == null ? "" : M(e) || oe(e) && (e.toString === ws || !F(e.toString)) ? xs(e) ? Ds(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => xs(t) ? Ss(e, t.value) : It(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[_o(o, s) + " =>"] = r, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _o(n))
} : Et(t) ? _o(t) : oe(t) && !M(t) && !oo(t) ? String(t) : t, _o = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var re = {};
function Be(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Te;
class ha {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Te, !t && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(
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
      const n = Te;
      try {
        return Te = this, t();
      } finally {
        Te = n;
      }
    } else re.NODE_ENV !== "production" && Be("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Te, Te = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Te = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
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
function ga() {
  return Te;
}
let X;
const bo = /* @__PURE__ */ new WeakSet();
class Is {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && Te.active && Te.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bo.has(this) && (bo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Dr(this), Vs(this);
    const t = X, n = Ue;
    X = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      re.NODE_ENV !== "production" && X !== this && Be(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), As(this), X = t, Ue = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        tr(t);
      this.deps = this.depsTail = void 0, Dr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ao(this) && this.run();
  }
  get dirty() {
    return Ao(this);
  }
}
let Ts = 0, on, rn;
function Cs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = rn, rn = e;
    return;
  }
  e.next = on, on = e;
}
function Qo() {
  Ts++;
}
function er() {
  if (--Ts > 0)
    return;
  if (rn) {
    let t = rn;
    for (rn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; on; ) {
    let t = on;
    for (on = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
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
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), tr(o), ma(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function Ao(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Rs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Rs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === fn) || (e.globalVersion = fn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ao(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, o = Ue;
  X = e, Ue = !0;
  try {
    Vs(e);
    const r = e.fn(e._value);
    (t.version === 0 || bt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    X = n, Ue = o, As(e), e.flags &= -3;
  }
}
function tr(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), re.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      tr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ma(e) {
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
function Dr(e) {
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
class _a {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class nr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, re.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !Ue || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new _a(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, ks(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = o);
    }
    return re.NODE_ENV !== "production" && X.onTrack && X.onTrack(
      ae(
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
    Qo();
    try {
      if (re.NODE_ENV !== "production")
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
      er();
    }
  }
}
function ks(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        ks(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), re.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Bn = /* @__PURE__ */ new WeakMap(), Tt = Symbol(
  re.NODE_ENV !== "production" ? "Object iterate" : ""
), Ro = Symbol(
  re.NODE_ENV !== "production" ? "Map keys iterate" : ""
), dn = Symbol(
  re.NODE_ENV !== "production" ? "Array iterate" : ""
);
function fe(e, t, n) {
  if (Ue && X) {
    let o = Bn.get(e);
    o || Bn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new nr()), r.map = o, r.key = n), re.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Qe(e, t, n, o, r, s) {
  const i = Bn.get(e);
  if (!i) {
    fn++;
    return;
  }
  const a = (l) => {
    l && (re.NODE_ENV !== "production" ? l.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : l.trigger());
  };
  if (Qo(), t === "clear")
    i.forEach(a);
  else {
    const l = M(e), f = l && Zo(n);
    if (l && n === "length") {
      const d = Number(o);
      i.forEach((u, g) => {
        (g === "length" || g === dn || !Et(g) && g >= d) && a(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(dn)), t) {
        case "add":
          l ? f && a(i.get("length")) : (a(i.get(Tt)), It(e) && a(i.get(Ro)));
          break;
        case "delete":
          l || (a(i.get(Tt)), It(e) && a(i.get(Ro)));
          break;
        case "set":
          It(e) && a(i.get(Tt));
          break;
      }
  }
  er();
}
function ba(e, t) {
  const n = Bn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = W(e);
  return t === e ? t : (fe(t, "iterate", dn), Oe(e) ? t : t.map(ge));
}
function ao(e) {
  return fe(e = W(e), "iterate", dn), e;
}
const ya = {
  __proto__: null,
  [Symbol.iterator]() {
    return yo(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => M(t) ? Mt(t) : t)
    );
  },
  entries() {
    return yo(this, "entries", (e) => (e[1] = ge(e[1]), e));
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
    return Eo(this, "includes", e);
  },
  indexOf(...e) {
    return Eo(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Eo(this, "lastIndexOf", e);
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
    return Sr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Sr(this, "reduceRight", e, t);
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
    return yo(this, "values", ge);
  }
};
function yo(e, t, n) {
  const o = ao(e), r = o[t]();
  return o !== e && !Oe(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const Ea = Array.prototype;
function it(e, t, n, o, r, s) {
  const i = ao(e), a = i !== e && !Oe(e), l = i[t];
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
  const d = l.call(i, f, o);
  return a && r ? r(d) : d;
}
function Sr(e, t, n, o) {
  const r = ao(e);
  let s = n;
  return r !== e && (Oe(e) ? n.length > 3 && (s = function(i, a, l) {
    return n.call(this, i, a, l, e);
  }) : s = function(i, a, l) {
    return n.call(this, i, ge(a), l, e);
  }), r[t](s, ...o);
}
function Eo(e, t, n) {
  const o = W(e);
  fe(o, "iterate", dn);
  const r = o[t](...n);
  return (r === -1 || r === !1) && pn(n[0]) ? (n[0] = W(n[0]), o[t](...n)) : r;
}
function Gt(e, t, n = []) {
  Ke(), Qo();
  const o = W(e)[t].apply(e, n);
  return er(), We(), o;
}
const va = /* @__PURE__ */ ut("__proto__,__v_isRef,__isVue"), Ms = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Et)
);
function Na(e) {
  Et(e) || (e = String(e));
  const t = W(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class $s {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? Bs : Us : s ? Hs : Ls).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = M(t);
    if (!r) {
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
      ue(t) ? t : o
    );
    return (Et(n) ? Ms.has(n) : va(n)) || (r || fe(t, "get", n), s) ? a : ue(a) ? i && Zo(n) ? a : a.value : oe(a) ? r ? Kn(a) : On(a) : a;
  }
}
class js extends $s {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const l = Je(s);
      if (!Oe(o) && !Je(o) && (s = W(s), o = W(o)), !M(t) && ue(s) && !ue(o))
        return l ? !1 : (s.value = o, !0);
    }
    const i = M(t) && Zo(n) ? Number(n) < t.length : q(t, n), a = Reflect.set(
      t,
      n,
      o,
      ue(t) ? t : r
    );
    return t === W(r) && (i ? bt(o, s) && Qe(t, "set", n, o, s) : Qe(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = q(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Qe(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Et(n) || !Ms.has(n)) && fe(t, "has", n), o;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      M(t) ? "length" : Tt
    ), Reflect.ownKeys(t);
  }
}
class Fs extends $s {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return re.NODE_ENV !== "production" && Be(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return re.NODE_ENV !== "production" && Be(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const wa = /* @__PURE__ */ new js(), Oa = /* @__PURE__ */ new Fs(), xa = /* @__PURE__ */ new js(!0), Da = /* @__PURE__ */ new Fs(!0), Po = (e) => e, Cn = (e) => Reflect.getPrototypeOf(e);
function Sa(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = W(r), i = It(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, f = r[e](...o), d = n ? Po : t ? Wn : ge;
    return !t && fe(
      s,
      "iterate",
      l ? Ro : Tt
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
    if (re.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Be(
        `${so(e)} operation ${n}failed: target is readonly.`,
        W(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ia(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = W(s), a = W(r);
      e || (bt(r, a) && fe(i, "get", r), fe(i, "get", a));
      const { has: l } = Cn(i), f = t ? Po : e ? Wn : ge;
      if (l.call(i, r))
        return f(s.get(r));
      if (l.call(i, a))
        return f(s.get(a));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && fe(W(r), "iterate", Tt), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = W(s), a = W(r);
      return e || (bt(r, a) && fe(i, "has", r), fe(i, "has", a)), r === a ? s.has(r) : s.has(r) || s.has(a);
    },
    forEach(r, s) {
      const i = this, a = i.__v_raw, l = W(a), f = t ? Po : e ? Wn : ge;
      return !e && fe(l, "iterate", Tt), a.forEach((d, u) => r.call(s, f(d), f(u), i));
    }
  };
  return ae(
    n,
    e ? {
      add: Vn("add"),
      set: Vn("set"),
      delete: Vn("delete"),
      clear: Vn("clear")
    } : {
      add(r) {
        !t && !Oe(r) && !Je(r) && (r = W(r));
        const s = W(this);
        return Cn(s).has.call(s, r) || (s.add(r), Qe(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !Oe(s) && !Je(s) && (s = W(s));
        const i = W(this), { has: a, get: l } = Cn(i);
        let f = a.call(i, r);
        f ? re.NODE_ENV !== "production" && Ir(i, a, r) : (r = W(r), f = a.call(i, r));
        const d = l.call(i, r);
        return i.set(r, s), f ? bt(s, d) && Qe(i, "set", r, s, d) : Qe(i, "add", r, s), this;
      },
      delete(r) {
        const s = W(this), { has: i, get: a } = Cn(s);
        let l = i.call(s, r);
        l ? re.NODE_ENV !== "production" && Ir(s, i, r) : (r = W(r), l = i.call(s, r));
        const f = a ? a.call(s, r) : void 0, d = s.delete(r);
        return l && Qe(s, "delete", r, void 0, f), d;
      },
      clear() {
        const r = W(this), s = r.size !== 0, i = re.NODE_ENV !== "production" ? It(r) ? new Map(r) : new Set(r) : void 0, a = r.clear();
        return s && Qe(
          r,
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
  ].forEach((r) => {
    n[r] = Sa(r, e, t);
  }), n;
}
function lo(e, t) {
  const n = Ia(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    q(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Ta = {
  get: /* @__PURE__ */ lo(!1, !1)
}, Ca = {
  get: /* @__PURE__ */ lo(!1, !0)
}, Va = {
  get: /* @__PURE__ */ lo(!0, !1)
}, Aa = {
  get: /* @__PURE__ */ lo(!0, !0)
};
function Ir(e, t, n) {
  const o = W(n);
  if (o !== n && t.call(e, o)) {
    const r = Xo(e);
    Be(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ra(Xo(e));
}
function On(e) {
  return Je(e) ? e : co(
    e,
    !1,
    wa,
    Ta,
    Ls
  );
}
function ka(e) {
  return co(
    e,
    !1,
    xa,
    Ca,
    Hs
  );
}
function Kn(e) {
  return co(
    e,
    !0,
    Oa,
    Va,
    Us
  );
}
function tt(e) {
  return co(
    e,
    !0,
    Da,
    Aa,
    Bs
  );
}
function co(e, t, n, o, r) {
  if (!oe(e))
    return re.NODE_ENV !== "production" && Be(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Pa(e);
  if (s === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const a = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, a), a;
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
function pn(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Ma(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && cn(e, "__v_skip", !0), e;
}
const ge = (e) => oe(e) ? On(e) : e, Wn = (e) => oe(e) ? Kn(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function He(e) {
  return $a(e, !1);
}
function $a(e, t) {
  return ue(e) ? e : new ja(e, t);
}
class ja {
  constructor(t, n) {
    this.dep = new nr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : W(t), this._value = n ? t : ge(t), this.__v_isShallow = n;
  }
  get value() {
    return re.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Oe(t) || Je(t);
    t = o ? t : W(t), bt(t, n) && (this._rawValue = t, this._value = o ? t : ge(t), re.NODE_ENV !== "production" ? this.dep.trigger({
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
const Fa = {
  get: (e, t, n) => t === "__v_raw" ? e : he(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ks(e) {
  return Ct(e) ? e : new Proxy(e, Fa);
}
function La(e) {
  re.NODE_ENV !== "production" && !pn(e) && Be("toRefs() expects a reactive object but received a plain one.");
  const t = M(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ua(e, n);
  return t;
}
class Ha {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ba(W(this._object), this._key);
  }
}
function Ua(e, t, n) {
  const o = e[t];
  return ue(o) ? o : new Ha(e, t, n);
}
class Ba {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new nr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Cs(this, !0), !0;
  }
  get value() {
    const t = re.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Rs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : re.NODE_ENV !== "production" && Be("Write operation failed: computed value is readonly");
  }
}
function Ka(e, t, n = !1) {
  let o, r;
  return F(e) ? o = e : (o = e.get, r = e.set), new Ba(o, r, n);
}
const An = {}, Jn = /* @__PURE__ */ new WeakMap();
let St;
function Wa(e, t = !1, n = St) {
  if (n) {
    let o = Jn.get(n);
    o || Jn.set(n, o = []), o.push(e);
  } else re.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ja(e, t, n = Z) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: a, call: l } = n, f = (x) => {
    (n.onWarn || Be)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (x) => r ? x : Oe(x) || r === !1 || r === 0 ? ct(x, 1) : ct(x);
  let u, g, m, S, P = !1, z = !1;
  if (ue(e) ? (g = () => e.value, P = Oe(e)) : Ct(e) ? (g = () => d(e), P = !0) : M(e) ? (z = !0, P = e.some((x) => Ct(x) || Oe(x)), g = () => e.map((x) => {
    if (ue(x))
      return x.value;
    if (Ct(x))
      return d(x);
    if (F(x))
      return l ? l(x, 2) : x();
    re.NODE_ENV !== "production" && f(x);
  })) : F(e) ? t ? g = l ? () => l(e, 2) : e : g = () => {
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
      return l ? l(e, 3, [S]) : e(S);
    } finally {
      St = x;
    }
  } : (g = de, re.NODE_ENV !== "production" && f(e)), t && r) {
    const x = g, O = r === !0 ? 1 / 0 : r;
    g = () => ct(x(), O);
  }
  const L = ga(), j = () => {
    u.stop(), L && L.active && qo(L.effects, u);
  };
  if (s && t) {
    const x = t;
    t = (...O) => {
      x(...O), j();
    };
  }
  let R = z ? new Array(e.length).fill(An) : An;
  const K = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x))
      if (t) {
        const O = u.run();
        if (r || P || (z ? O.some((v, y) => bt(v, R[y])) : bt(O, R))) {
          m && m();
          const v = St;
          St = u;
          try {
            const y = [
              O,
              // pass undefined as the old value when it's changed for the first time
              R === An ? void 0 : z && R[0] === An ? [] : R,
              S
            ];
            R = O, l ? l(t, 3, y) : (
              // @ts-expect-error
              t(...y)
            );
          } finally {
            St = v;
          }
        }
      } else
        u.run();
  };
  return a && a(K), u = new Is(g), u.scheduler = i ? () => i(K, !1) : K, S = (x) => Wa(x, !1, u), m = u.onStop = () => {
    const x = Jn.get(u);
    if (x) {
      if (l)
        l(x, 4);
      else
        for (const O of x) O();
      Jn.delete(u);
    }
  }, re.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? K(!0) : R = u.run() : i ? i(K.bind(null, !0), !0) : u.run(), j.pause = u.pause.bind(u), j.resume = u.resume.bind(u), j.stop = j, j;
}
function ct(e, t = 1 / 0, n) {
  if (t <= 0 || !oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    ct(e.value, t, n);
  else if (M(e))
    for (let o = 0; o < e.length; o++)
      ct(e[o], t, n);
  else if (Ns(e) || It(e))
    e.forEach((o) => {
      ct(o, t, n);
    });
  else if (oo(e)) {
    for (const o in e)
      ct(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ct(e[o], t, n);
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
let vo = !1;
function T(e, ...t) {
  if (vo) return;
  vo = !0, Ke();
  const n = Vt.length ? Vt[Vt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = Ya();
  if (o)
    zt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, a;
          return (a = (i = s.toString) == null ? void 0 : i.call(s)) != null ? a : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${mo(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...za(r)), console.warn(...s);
  }
  We(), vo = !1;
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
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function za(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...qa(n));
  }), t;
}
function qa({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${mo(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Ga(e.props), s] : [r + s];
}
function Ga(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ws(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ws(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = Ws(e, W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = W(t), n ? t : [`${e}=`, t]);
}
const or = {
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
function zt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    xn(r, t, n);
  }
}
function rt(e, t, n, o) {
  if (F(e)) {
    const r = zt(e, t, n, o);
    return r && Go(r) && r.catch((s) => {
      xn(s, t, n);
    }), r;
  }
  if (M(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(rt(e[s], t, n, o));
    return r;
  } else h.NODE_ENV !== "production" && T(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function xn(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let a = t.parent;
    const l = t.proxy, f = h.NODE_ENV !== "production" ? or[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Ke(), zt(s, null, 10, [
        e,
        l,
        f
      ]), We();
      return;
    }
  }
  Xa(e, n, r, o, i);
}
function Xa(e, t, n, o = !0, r = !1) {
  if (h.NODE_ENV !== "production") {
    const s = or[t];
    if (n && Pn(n), T(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && kn(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
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
const Za = 100;
function zn(e) {
  const t = Yn || Js;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Qa(e) {
  let t = Ze + 1, n = Ne.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = Ne[o], s = hn(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function uo(e) {
  if (!(e.flags & 1)) {
    const t = hn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= hn(n) ? Ne.push(e) : Ne.splice(Qa(t), 0, e), e.flags |= 1, Ys();
  }
}
function Ys() {
  Yn || (Yn = Js.then(Gs));
}
function zs(e) {
  M(e) ? Wt.push(...e) : ht && e.id === -1 ? ht.splice(Lt + 1, 0, e) : e.flags & 1 || (Wt.push(e), e.flags |= 1), Ys();
}
function Tr(e, t, n = Ze + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ne.length; n++) {
    const o = Ne[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || h.NODE_ENV !== "production" && rr(t, o))
        continue;
      Ne.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function qs(e) {
  if (Wt.length) {
    const t = [...new Set(Wt)].sort(
      (n, o) => hn(n) - hn(o)
    );
    if (Wt.length = 0, ht) {
      ht.push(...t);
      return;
    }
    for (ht = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < ht.length; Lt++) {
      const n = ht[Lt];
      h.NODE_ENV !== "production" && rr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ht = null, Lt = 0;
  }
}
const hn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Gs(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => rr(e, n) : de;
  try {
    for (Ze = 0; Ze < Ne.length; Ze++) {
      const n = Ne[Ze];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
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
function rr(e, t) {
  const n = e.get(t) || 0;
  if (n > Za) {
    const o = t.i, r = o && Ci(o.type);
    return xn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nt = !1;
const Mn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (wn().__VUE_HMR_RUNTIME__ = {
  createRecord: No(Xs),
  rerender: No(nl),
  reload: No(ol)
});
const Pt = /* @__PURE__ */ new Map();
function el(e) {
  const t = e.type.__hmrId;
  let n = Pt.get(t);
  n || (Xs(t, e.type), n = Pt.get(t)), n.instances.add(e);
}
function tl(e) {
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
function nl(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, qn(o.type).render = t), o.renderCache = [], nt = !0, o.update(), nt = !1;
  }));
}
function ol(e, t) {
  const n = Pt.get(e);
  if (!n) return;
  t = qn(t), Cr(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = qn(s.type);
    let a = Mn.get(i);
    a || (i !== n.initialDef && Cr(i, t), Mn.set(i, a = /* @__PURE__ */ new Set())), a.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (a.add(s), s.ceReload(t.styles), a.delete(s)) : s.parent ? uo(() => {
      nt = !0, s.parent.update(), nt = !1, a.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  zs(() => {
    Mn.clear();
  });
}
function Cr(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function No(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let et, en = [], ko = !1;
function Dn(e, ...t) {
  et ? et.emit(e, ...t) : ko || en.push({ event: e, args: t });
}
function Zs(e, t) {
  var n, o;
  et = e, et ? (et.enabled = !0, en.forEach(({ event: r, args: s }) => et.emit(r, ...s)), en = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Zs(s, t);
  }), setTimeout(() => {
    et || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ko = !0, en = []);
  }, 3e3)) : (ko = !0, en = []);
}
function rl(e, t) {
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
const il = /* @__PURE__ */ sr(
  "component:added"
  /* COMPONENT_ADDED */
), Qs = /* @__PURE__ */ sr(
  "component:updated"
  /* COMPONENT_UPDATED */
), al = /* @__PURE__ */ sr(
  "component:removed"
  /* COMPONENT_REMOVED */
), ll = (e) => {
  et && typeof et.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !et.cleanupBuffer(e) && al(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function sr(e) {
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
  return (t, n, o) => {
    Dn(e, t.appContext.app, t.uid, t, n, o);
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
  const o = (...r) => {
    o._d && Ur(-1);
    const s = Gn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Gn(s), o._d && Ur(1);
    }
    return h.NODE_ENV !== "production" && Qs(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ni(e) {
  Qi(e) && T("Do not use built-in directive ids as custom directive id: " + e);
}
function pl(e, t) {
  if (we === null)
    return h.NODE_ENV !== "production" && T("withDirectives can only be used inside render functions."), e;
  const n = go(we), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, a, l = Z] = t[r];
    s && (F(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ct(i), o.push({
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
function wt(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    s && (a.oldValue = s[i].value);
    let l = a.dir[o];
    l && (Ke(), rt(l, n, 8, [
      e.el,
      a,
      e,
      t
    ]), We());
  }
}
const hl = Symbol("_vte"), gl = (e) => e.__isTeleport;
function ir(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ir(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oi(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function ri(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ml = /* @__PURE__ */ new WeakSet();
function sn(e, t, n, o, r = !1) {
  if (M(e)) {
    e.forEach(
      (S, P) => sn(
        S,
        t && (M(t) ? t[P] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (an(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && sn(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? go(o.component) : o.el, i = r ? null : s, { i: a, r: l } = e;
  if (h.NODE_ENV !== "production" && !a) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = a.refs === Z ? a.refs = {} : a.refs, u = a.setupState, g = W(u), m = u === Z ? () => !1 : (S) => h.NODE_ENV !== "production" && (q(g, S) && !ue(g[S]) && T(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), ml.has(g[S])) ? !1 : q(g, S);
  if (f != null && f !== l && (ie(f) ? (d[f] = null, m(f) && (u[f] = null)) : ue(f) && (f.value = null)), F(l))
    zt(l, a, 12, [i, d]);
  else {
    const S = ie(l), P = ue(l);
    if (S || P) {
      const z = () => {
        if (e.f) {
          const L = S ? m(l) ? u[l] : d[l] : l.value;
          r ? M(L) && qo(L, s) : M(L) ? L.includes(s) || L.push(s) : S ? (d[l] = [s], m(l) && (u[l] = d[l])) : (l.value = [s], e.k && (d[e.k] = l.value));
        } else S ? (d[l] = i, m(l) && (u[l] = i)) : P ? (l.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && T("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (z.id = -1, Pe(z, n)) : z();
    } else h.NODE_ENV !== "production" && T("Invalid template ref type:", l, `(${typeof l})`);
  }
}
wn().requestIdleCallback;
wn().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, ar = (e) => e.type.__isKeepAlive;
function _l(e, t) {
  si(e, "a", t);
}
function bl(e, t) {
  si(e, "da", t);
}
function si(e, t, n = me) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (fo(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ar(r.parent.vnode) && yl(o, t, n, r), r = r.parent;
  }
}
function yl(e, t, n, o) {
  const r = fo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  cr(() => {
    qo(o[t], r);
  }, n);
}
function fo(e, t, n = me, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ke();
      const a = In(n), l = rt(t, n, e, i);
      return a(), We(), l;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const r = Dt(or[e].replace(/ hook$/, ""));
    T(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ft = (e) => (t, n = me) => {
  (!mn || e === "sp") && fo(e, (...o) => t(...o), n);
}, El = ft("bm"), lr = ft("m"), vl = ft(
  "bu"
), Nl = ft("u"), wl = ft(
  "bum"
), cr = ft("um"), Ol = ft(
  "sp"
), xl = ft("rtg"), Dl = ft("rtc");
function Sl(e, t = me) {
  fo("ec", e, t);
}
const Il = Symbol.for("v-ndc");
function Tl(e, t, n, o) {
  let r;
  const s = n, i = M(e);
  if (i || ie(e)) {
    const a = i && Ct(e);
    let l = !1, f = !1;
    a && (l = !Oe(e), f = Je(e), e = ao(e)), r = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(
        l ? f ? Wn(ge(e[d])) : ge(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && T(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let a = 0; a < e; a++)
      r[a] = t(a + 1, a, void 0, s);
  } else if (oe(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (a, l) => t(a, l, void 0, s)
      );
    else {
      const a = Object.keys(e);
      r = new Array(a.length);
      for (let l = 0, f = a.length; l < f; l++) {
        const d = a[l];
        r[l] = t(e[d], d, l, s);
      }
    }
  else
    r = [];
  return r;
}
const Mo = (e) => e ? Ii(e) ? go(e) : Mo(e.parent) : null, At = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? tt(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? tt(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? tt(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? tt(e.refs) : e.refs,
    $parent: (e) => Mo(e.parent),
    $root: (e) => Mo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => li(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      uo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = zn.bind(e.proxy)),
    $watch: (e) => lc.bind(e)
  })
), ur = (e) => e === "_" || e === "$", wo = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: a, appContext: l } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (wo(o, t))
          return i[t] = 1, o[t];
        if (r !== Z && q(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && q(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== Z && q(n, t))
          return i[t] = 4, n[t];
        $o && (i[t] = 0);
      }
    }
    const d = At[t];
    let u, g;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), h.NODE_ENV !== "production" && Qn()) : h.NODE_ENV !== "production" && t === "$slots" && fe(e, "get", t), d(e);
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
    h.NODE_ENV !== "production" && we && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Z && ur(t[0]) && q(r, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === we && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return wo(r, t) ? (r[t] = n, !0) : h.NODE_ENV !== "production" && r.__isScriptSetup && q(r, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Z && q(o, t) ? (o[t] = n, !0) : q(e.props, t) ? (h.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && T(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let a;
    return !!n[i] || e !== Z && q(e, i) || wo(t, i) || (a = s[0]) && q(a, i) || q(o, i) || q(At, i) || q(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (ii.ownKeys = (e) => (T(
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
      set: de
    });
  }), t;
}
function Vl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: de
    });
  });
}
function Al(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(W(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (ur(o[0])) {
        T(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: de
      });
    }
  });
}
function Vr(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Rl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? T(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let $o = !0;
function Pl(e) {
  const t = li(e), n = e.proxy, o = e.ctx;
  $o = !1, t.beforeCreate && Ar(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: a,
    provide: l,
    inject: f,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: P,
    deactivated: z,
    beforeDestroy: L,
    beforeUnmount: j,
    destroyed: R,
    unmounted: K,
    render: x,
    renderTracked: O,
    renderTriggered: v,
    errorCaptured: y,
    serverPrefetch: V,
    // public API
    expose: H,
    inheritAttrs: te,
    // assets
    components: Q,
    directives: ne,
    filters: ye
  } = t, pe = h.NODE_ENV !== "production" ? Rl() : null;
  if (h.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const J in B)
        pe("Props", J);
  }
  if (f && kl(f, o, pe), i)
    for (const B in i) {
      const J = i[B];
      F(J) ? (h.NODE_ENV !== "production" ? Object.defineProperty(o, B, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[B] = J.bind(n), h.NODE_ENV !== "production" && pe("Methods", B)) : h.NODE_ENV !== "production" && T(
        `Method "${B}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    h.NODE_ENV !== "production" && !F(r) && T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = r.call(n, n);
    if (h.NODE_ENV !== "production" && Go(B) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !oe(B))
      h.NODE_ENV !== "production" && T("data() should return an object.");
    else if (e.data = On(B), h.NODE_ENV !== "production")
      for (const J in B)
        pe("Data", J), ur(J[0]) || Object.defineProperty(o, J, {
          configurable: !0,
          enumerable: !0,
          get: () => B[J],
          set: de
        });
  }
  if ($o = !0, s)
    for (const B in s) {
      const J = s[B], xe = F(J) ? J.bind(n, n) : F(J.get) ? J.get.bind(n, n) : de;
      h.NODE_ENV !== "production" && xe === de && T(`Computed property "${B}" has no getter.`);
      const st = !F(J) && F(J.set) ? J.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        T(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : de, vt = mr({
        get: xe,
        set: st
      });
      Object.defineProperty(o, B, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (dt) => vt.value = dt
      }), h.NODE_ENV !== "production" && pe("Computed", B);
    }
  if (a)
    for (const B in a)
      ai(a[B], o, n, B);
  if (l) {
    const B = F(l) ? l.call(n) : l;
    Reflect.ownKeys(B).forEach((J) => {
      Hl(J, B[J]);
    });
  }
  d && Ar(d, e, "c");
  function le(B, J) {
    M(J) ? J.forEach((xe) => B(xe.bind(n))) : J && B(J.bind(n));
  }
  if (le(El, u), le(lr, g), le(vl, m), le(Nl, S), le(_l, P), le(bl, z), le(Sl, y), le(Dl, O), le(xl, v), le(wl, j), le(cr, K), le(Ol, V), M(H))
    if (H.length) {
      const B = e.exposed || (e.exposed = {});
      H.forEach((J) => {
        Object.defineProperty(B, J, {
          get: () => n[J],
          set: (xe) => n[J] = xe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  x && e.render === de && (e.render = x), te != null && (e.inheritAttrs = te), Q && (e.components = Q), ne && (e.directives = ne), V && ri(e);
}
function kl(e, t, n = de) {
  M(e) && (e = jo(e));
  for (const o in e) {
    const r = e[o];
    let s;
    oe(r) ? "default" in r ? s = $n(
      r.from || o,
      r.default,
      !0
    ) : s = $n(r.from || o) : s = $n(r), ue(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, h.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ar(e, t, n) {
  rt(
    M(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ai(e, t, n, o) {
  let r = o.includes(".") ? Ei(n, o) : () => n[o];
  if (ie(e)) {
    const s = t[e];
    F(s) ? Rt(r, s) : h.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e}"`, s);
  } else if (F(e))
    Rt(r, e.bind(n));
  else if (oe(e))
    if (M(e))
      e.forEach((s) => ai(s, t, n, o));
    else {
      const s = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(s) ? Rt(r, s, e) : h.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && T(`Invalid watch option: "${o}"`, e);
}
function li(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, a = s.get(t);
  let l;
  return a ? l = a : !r.length && !n && !o ? l = t : (l = {}, r.length && r.forEach(
    (f) => Xn(l, f, i, !0)
  ), Xn(l, t, i)), oe(t) && s.set(t, l), l;
}
function Xn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Xn(e, s, n, !0), r && r.forEach(
    (i) => Xn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      h.NODE_ENV !== "production" && T(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ml[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
  return e;
}
const Ml = {
  data: Rr,
  props: Pr,
  emits: Pr,
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
  provide: Rr,
  inject: $l
};
function Rr(e, t) {
  return t ? e ? function() {
    return ae(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $l(e, t) {
  return tn(jo(e), jo(t));
}
function jo(e) {
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
function tn(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pr(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Vr(e),
    Vr(t ?? {})
  ) : t;
}
function jl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ve(e[o], t[o]);
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
  return function(o, r = null) {
    F(o) || (o = ae({}, o)), r != null && !oe(r) && (h.NODE_ENV !== "production" && T("root props passed to app.mount() must be an object."), r = null);
    const s = ci(), i = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const f = s.app = {
      _uid: Fl++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: Jr,
      get config() {
        return s.config;
      },
      set config(d) {
        h.NODE_ENV !== "production" && T(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? h.NODE_ENV !== "production" && T("Plugin has already been applied to target app.") : d && F(d.install) ? (i.add(d), d.install(f, ...u)) : F(d) ? (i.add(d), d(f, ...u)) : h.NODE_ENV !== "production" && T(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && T(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return h.NODE_ENV !== "production" && Bo(d, s.config), u ? (h.NODE_ENV !== "production" && s.components[d] && T(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return h.NODE_ENV !== "production" && ni(d), u ? (h.NODE_ENV !== "production" && s.directives[d] && T(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, g) {
        if (l)
          h.NODE_ENV !== "production" && T(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && T(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || ot(o, r);
          return m.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const S = yt(m);
            S.el = null, e(S, d, g);
          }), e(m, d, g), l = !0, f._container = d, d.__vue_app__ = f, h.NODE_ENV !== "production" && (f._instance = m.component, rl(f, Jr)), go(m.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), a.push(d);
      },
      unmount() {
        l ? (rt(
          a,
          f._instance,
          16
        ), e(null, f._container), h.NODE_ENV !== "production" && (f._instance = null, sl(f)), delete f._container.__vue_app__) : h.NODE_ENV !== "production" && T("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return h.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? T(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : T(
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
function Hl(e, t) {
  if (!me)
    h.NODE_ENV !== "production" && T("provide() can only be used inside setup().");
  else {
    let n = me.provides;
    const o = me.parent && me.parent.provides;
    o === n && (n = me.provides = Object.create(o)), n[e] = t;
  }
}
function $n(e, t, n = !1) {
  const o = gr();
  if (o || Jt) {
    let r = Jt ? Jt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(o && o.proxy) : t;
    h.NODE_ENV !== "production" && T(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && T("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ul(e, t, n, o = !1) {
  const r = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  h.NODE_ENV !== "production" && gi(t || {}, r, e), n ? e.props = o ? r : ka(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Bl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Kl(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, a = W(r), [l] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && Bl(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let g = d[u];
        if (po(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (l)
          if (q(s, g))
            m !== s[g] && (s[g] = m, f = !0);
          else {
            const S = Ve(g);
            r[S] = Fo(
              l,
              a,
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
    pi(e, t, r, s) && (f = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ce(u)) === u || !q(t, d))) && (l ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[u] = Fo(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (s !== a)
      for (const u in s)
        (!t || !q(t, u)) && (delete s[u], f = !0);
  }
  f && Qe(e.attrs, "set", ""), h.NODE_ENV !== "production" && gi(t || {}, r, e);
}
function pi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, a;
  if (t)
    for (let l in t) {
      if (nn(l))
        continue;
      const f = t[l];
      let d;
      r && q(r, d = Ve(l)) ? !s || !s.includes(d) ? n[d] = f : (a || (a = {}))[d] = f : po(e.emitsOptions, l) || (!(l in o) || f !== o[l]) && (o[l] = f, i = !0);
    }
  if (s) {
    const l = W(n), f = a || Z;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = Fo(
        r,
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
function Fo(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const a = q(i, "default");
    if (a && o === void 0) {
      const l = i.default;
      if (i.type !== Function && !i.skipFactory && F(l)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const d = In(r);
          o = f[n] = l.call(
            null,
            t
          ), d();
        }
      } else
        o = l;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !a ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ce(n)) && (o = !0));
  }
  return o;
}
const Wl = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
  const o = n ? Wl : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, a = [];
  let l = !1;
  if (!F(e)) {
    const d = (u) => {
      l = !0;
      const [g, m] = hi(u, t, !0);
      ae(i, g), m && a.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !l)
    return oe(e) && o.set(e, Kt), Kt;
  if (M(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !ie(s[d]) && T("props must be strings when using array syntax.", s[d]);
      const u = Ve(s[d]);
      kr(u) && (i[u] = Z);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !oe(s) && T("invalid props options", s);
    for (const d in s) {
      const u = Ve(d);
      if (kr(u)) {
        const g = s[d], m = i[u] = M(g) || F(g) ? { type: g } : ae({}, g), S = m.type;
        let P = !1, z = !0;
        if (M(S))
          for (let L = 0; L < S.length; ++L) {
            const j = S[L], R = F(j) && j.name;
            if (R === "Boolean") {
              P = !0;
              break;
            } else R === "String" && (z = !1);
          }
        else
          P = F(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = P, m[
          1
          /* shouldCastTrue */
        ] = z, (P || q(m, "default")) && a.push(u);
      }
    }
  }
  const f = [i, a];
  return oe(e) && o.set(e, f), f;
}
function kr(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (h.NODE_ENV !== "production" && T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Jl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const o = W(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => Ve(i));
  for (const i in r) {
    let a = r[i];
    a != null && Yl(
      i,
      o[i],
      a,
      h.NODE_ENV !== "production" ? tt(o) : o,
      !s.includes(i)
    );
  }
}
function Yl(e, t, n, o, r) {
  const { type: s, required: i, validator: a, skipCheck: l } = n;
  if (i && r) {
    T('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !l) {
      let f = !1;
      const d = M(s) ? s : [s], u = [];
      for (let g = 0; g < d.length && !f; g++) {
        const { valid: m, expectedType: S } = ql(t, d[g]);
        u.push(S || ""), f = m;
      }
      if (!f) {
        T(Gl(e, t, u));
        return;
      }
    }
    a && !a(t, o) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const zl = /* @__PURE__ */ ut(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ql(e, t) {
  let n;
  const o = Jl(t);
  if (o === "null")
    n = e === null;
  else if (zl(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = oe(e) : o === "Array" ? n = M(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Gl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(so).join(" | ")}`;
  const r = n[0], s = Xo(t), i = Mr(t, r), a = Mr(t, s);
  return n.length === 1 && $r(r) && !Xl(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, $r(s) && (o += `with value ${a}.`), o;
}
function Mr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $r(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Xl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const fr = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", dr = (e) => M(e) ? e.map(Le) : [Le(e)], Zl = (e, t, n) => {
  if (t._n)
    return t;
  const o = dl((...r) => (h.NODE_ENV !== "production" && me && !(n === null && we) && !(n && n.root !== me.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), dr(t(...r))), n);
  return o._c = !1, o;
}, mi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (fr(r)) continue;
    const s = e[r];
    if (F(s))
      t[r] = Zl(r, s, o);
    else if (s != null) {
      h.NODE_ENV !== "production" && T(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = dr(s);
      t[r] = () => i;
    }
  }
}, _i = (e, t) => {
  h.NODE_ENV !== "production" && !ar(e.vnode) && T(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = dr(t);
  e.slots.default = () => n;
}, Lo = (e, t, n) => {
  for (const o in t)
    (n || !fr(o)) && (e[o] = t[o]);
}, Ql = (e, t, n) => {
  const o = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && cn(o, "__", r, !0);
    const s = t._;
    s ? (Lo(o, t, n), n && cn(o, "_", s, !0)) : mi(t, o);
  } else t && _i(e, t);
}, ec = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = Z;
  if (o.shapeFlag & 32) {
    const a = t._;
    a ? h.NODE_ENV !== "production" && nt ? (Lo(r, t, n), Qe(e, "set", "$slots")) : n && a === 1 ? s = !1 : Lo(r, t, n) : (s = !t.$stable, mi(t, r)), i = t;
  } else t && (_i(e, t), i = { default: 1 });
  if (s)
    for (const a in r)
      !fr(a) && i[a] == null && delete r[a];
};
let Xt, _t;
function $t(e, t) {
  e.appContext.config.performance && Zn() && _t.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && cl(e, t, Zn() ? _t.now() : Date.now());
}
function jt(e, t) {
  if (e.appContext.config.performance && Zn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    _t.mark(o), _t.measure(
      `<${mo(e, e.type)}> ${t}`,
      n,
      o
    ), _t.clearMarks(n), _t.clearMarks(o);
  }
  h.NODE_ENV !== "production" && ul(e, t, Zn() ? _t.now() : Date.now());
}
function Zn() {
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
const Pe = gc;
function nc(e) {
  return oc(e);
}
function oc(e, t) {
  tc();
  const n = wn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && Zs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: a,
    createComment: l,
    setText: f,
    setElementText: d,
    parentNode: u,
    nextSibling: g,
    setScopeId: m = de,
    insertStaticContent: S
  } = e, P = (c, p, _, N = null, b = null, E = null, C = void 0, I = null, D = h.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (N = Ye(c), Y(c, b, E, !0), c = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: w, ref: $, shapeFlag: A } = p;
    switch (w) {
      case Sn:
        z(c, p, _, N);
        break;
      case Me:
        L(c, p, _, N);
        break;
      case Fn:
        c == null ? j(p, _, N, C) : h.NODE_ENV !== "production" && R(c, p, _, C);
        break;
      case je:
        ne(
          c,
          p,
          _,
          N,
          b,
          E,
          C,
          I,
          D
        );
        break;
      default:
        A & 1 ? O(
          c,
          p,
          _,
          N,
          b,
          E,
          C,
          I,
          D
        ) : A & 6 ? ye(
          c,
          p,
          _,
          N,
          b,
          E,
          C,
          I,
          D
        ) : A & 64 || A & 128 ? w.process(
          c,
          p,
          _,
          N,
          b,
          E,
          C,
          I,
          D,
          Nt
        ) : h.NODE_ENV !== "production" && T("Invalid VNode type:", w, `(${typeof w})`);
    }
    $ != null && b ? sn($, c && c.ref, E, p || c, !p) : $ == null && c && c.ref != null && sn(c.ref, null, E, c, !0);
  }, z = (c, p, _, N) => {
    if (c == null)
      o(
        p.el = a(p.children),
        _,
        N
      );
    else {
      const b = p.el = c.el;
      p.children !== c.children && f(b, p.children);
    }
  }, L = (c, p, _, N) => {
    c == null ? o(
      p.el = l(p.children || ""),
      _,
      N
    ) : p.el = c.el;
  }, j = (c, p, _, N) => {
    [c.el, c.anchor] = S(
      c.children,
      p,
      _,
      N,
      c.el,
      c.anchor
    );
  }, R = (c, p, _, N) => {
    if (p.children !== c.children) {
      const b = g(c.anchor);
      x(c), [p.el, p.anchor] = S(
        p.children,
        _,
        b,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, K = ({ el: c, anchor: p }, _, N) => {
    let b;
    for (; c && c !== p; )
      b = g(c), o(c, _, N), c = b;
    o(p, _, N);
  }, x = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = g(c), r(c), c = _;
    r(p);
  }, O = (c, p, _, N, b, E, C, I, D) => {
    p.type === "svg" ? C = "svg" : p.type === "math" && (C = "mathml"), c == null ? v(
      p,
      _,
      N,
      b,
      E,
      C,
      I,
      D
    ) : H(
      c,
      p,
      b,
      E,
      C,
      I,
      D
    );
  }, v = (c, p, _, N, b, E, C, I) => {
    let D, w;
    const { props: $, shapeFlag: A, transition: k, dirs: U } = c;
    if (D = c.el = i(
      c.type,
      E,
      $ && $.is,
      $
    ), A & 8 ? d(D, c.children) : A & 16 && V(
      c.children,
      D,
      null,
      N,
      b,
      Oo(c, E),
      C,
      I
    ), U && wt(c, null, N, "created"), y(D, c, c.scopeId, C, N), $) {
      for (const se in $)
        se !== "value" && !nn(se) && s(D, se, null, $[se], E, N);
      "value" in $ && s(D, "value", null, $.value, E), (w = $.onVnodeBeforeMount) && Xe(w, N, c);
    }
    h.NODE_ENV !== "production" && (cn(D, "__vnode", c, !0), cn(D, "__vueParentComponent", N, !0)), U && wt(c, null, N, "beforeMount");
    const G = rc(b, k);
    G && k.beforeEnter(D), o(D, p, _), ((w = $ && $.onVnodeMounted) || G || U) && Pe(() => {
      w && Xe(w, N, c), G && k.enter(D), U && wt(c, null, N, "mounted");
    }, b);
  }, y = (c, p, _, N, b) => {
    if (_ && m(c, _), N)
      for (let E = 0; E < N.length; E++)
        m(c, N[E]);
    if (b) {
      let E = b.subTree;
      if (h.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = pr(E.children) || E), p === E || wi(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const C = b.vnode;
        y(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          b.parent
        );
      }
    }
  }, V = (c, p, _, N, b, E, C, I, D = 0) => {
    for (let w = D; w < c.length; w++) {
      const $ = c[w] = I ? mt(c[w]) : Le(c[w]);
      P(
        null,
        $,
        p,
        _,
        N,
        b,
        E,
        C,
        I
      );
    }
  }, H = (c, p, _, N, b, E, C) => {
    const I = p.el = c.el;
    h.NODE_ENV !== "production" && (I.__vnode = p);
    let { patchFlag: D, dynamicChildren: w, dirs: $ } = p;
    D |= c.patchFlag & 16;
    const A = c.props || Z, k = p.props || Z;
    let U;
    if (_ && Ot(_, !1), (U = k.onVnodeBeforeUpdate) && Xe(U, _, p, c), $ && wt(p, c, _, "beforeUpdate"), _ && Ot(_, !0), h.NODE_ENV !== "production" && nt && (D = 0, C = !1, w = null), (A.innerHTML && k.innerHTML == null || A.textContent && k.textContent == null) && d(I, ""), w ? (te(
      c.dynamicChildren,
      w,
      I,
      _,
      N,
      Oo(p, b),
      E
    ), h.NODE_ENV !== "production" && jn(c, p)) : C || xe(
      c,
      p,
      I,
      null,
      _,
      N,
      Oo(p, b),
      E,
      !1
    ), D > 0) {
      if (D & 16)
        Q(I, A, k, _, b);
      else if (D & 2 && A.class !== k.class && s(I, "class", null, k.class, b), D & 4 && s(I, "style", A.style, k.style, b), D & 8) {
        const G = p.dynamicProps;
        for (let se = 0; se < G.length; se++) {
          const ee = G[se], Se = A[ee], Ie = k[ee];
          (Ie !== Se || ee === "value") && s(I, ee, Se, Ie, b, _);
        }
      }
      D & 1 && c.children !== p.children && d(I, p.children);
    } else !C && w == null && Q(I, A, k, _, b);
    ((U = k.onVnodeUpdated) || $) && Pe(() => {
      U && Xe(U, _, p, c), $ && wt(p, c, _, "updated");
    }, N);
  }, te = (c, p, _, N, b, E, C) => {
    for (let I = 0; I < p.length; I++) {
      const D = c[I], w = p[I], $ = (
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
      P(
        D,
        w,
        $,
        null,
        N,
        b,
        E,
        C,
        !0
      );
    }
  }, Q = (c, p, _, N, b) => {
    if (p !== _) {
      if (p !== Z)
        for (const E in p)
          !nn(E) && !(E in _) && s(
            c,
            E,
            p[E],
            null,
            b,
            N
          );
      for (const E in _) {
        if (nn(E)) continue;
        const C = _[E], I = p[E];
        C !== I && E !== "value" && s(c, E, I, C, b, N);
      }
      "value" in _ && s(c, "value", p.value, _.value, b);
    }
  }, ne = (c, p, _, N, b, E, C, I, D) => {
    const w = p.el = c ? c.el : a(""), $ = p.anchor = c ? c.anchor : a("");
    let { patchFlag: A, dynamicChildren: k, slotScopeIds: U } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || A & 2048) && (A = 0, D = !1, k = null), U && (I = I ? I.concat(U) : U), c == null ? (o(w, _, N), o($, _, N), V(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      $,
      b,
      E,
      C,
      I,
      D
    )) : A > 0 && A & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (te(
      c.dynamicChildren,
      k,
      _,
      b,
      E,
      C,
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
    )) : xe(
      c,
      p,
      _,
      $,
      b,
      E,
      C,
      I,
      D
    );
  }, ye = (c, p, _, N, b, E, C, I, D) => {
    p.slotScopeIds = I, c == null ? p.shapeFlag & 512 ? b.ctx.activate(
      p,
      _,
      N,
      C,
      D
    ) : pe(
      p,
      _,
      N,
      b,
      E,
      C,
      D
    ) : le(c, p, D);
  }, pe = (c, p, _, N, b, E, C) => {
    const I = c.component = Oc(
      c,
      N,
      b
    );
    if (h.NODE_ENV !== "production" && I.type.__hmrId && el(I), h.NODE_ENV !== "production" && (Pn(c), $t(I, "mount")), ar(c) && (I.ctx.renderer = Nt), h.NODE_ENV !== "production" && $t(I, "init"), Dc(I, !1, C), h.NODE_ENV !== "production" && jt(I, "init"), h.NODE_ENV !== "production" && nt && (c.el = null), I.asyncDep) {
      if (b && b.registerDep(I, B, C), !c.el) {
        const D = I.subTree = ot(Me);
        L(null, D, p, _), c.placeholder = D.el;
      }
    } else
      B(
        I,
        c,
        p,
        _,
        b,
        E,
        C
      );
    h.NODE_ENV !== "production" && (kn(), jt(I, "mount"));
  }, le = (c, p, _) => {
    const N = p.component = c.component;
    if (pc(c, p, _))
      if (N.asyncDep && !N.asyncResolved) {
        h.NODE_ENV !== "production" && Pn(p), J(N, p, _), h.NODE_ENV !== "production" && kn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, B = (c, p, _, N, b, E, C) => {
    const I = () => {
      if (c.isMounted) {
        let { next: A, bu: k, u: U, parent: G, vnode: se } = c;
        {
          const qe = bi(c);
          if (qe) {
            A && (A.el = se.el, J(c, A, C)), qe.asyncDep.then(() => {
              c.isUnmounted || I();
            });
            return;
          }
        }
        let ee = A, Se;
        h.NODE_ENV !== "production" && Pn(A || c.vnode), Ot(c, !1), A ? (A.el = se.el, J(c, A, C)) : A = se, k && Ft(k), (Se = A.props && A.props.onVnodeBeforeUpdate) && Xe(Se, G, A, se), Ot(c, !0), h.NODE_ENV !== "production" && $t(c, "render");
        const Ie = Fr(c);
        h.NODE_ENV !== "production" && jt(c, "render");
        const ze = c.subTree;
        c.subTree = Ie, h.NODE_ENV !== "production" && $t(c, "patch"), P(
          ze,
          Ie,
          // parent may have changed if it's in a teleport
          u(ze.el),
          // anchor may have changed if it's in a fragment
          Ye(ze),
          c,
          b,
          E
        ), h.NODE_ENV !== "production" && jt(c, "patch"), A.el = Ie.el, ee === null && hc(c, Ie.el), U && Pe(U, b), (Se = A.props && A.props.onVnodeUpdated) && Pe(
          () => Xe(Se, G, A, se),
          b
        ), h.NODE_ENV !== "production" && Qs(c), h.NODE_ENV !== "production" && kn();
      } else {
        let A;
        const { el: k, props: U } = p, { bm: G, m: se, parent: ee, root: Se, type: Ie } = c, ze = an(p);
        Ot(c, !1), G && Ft(G), !ze && (A = U && U.onVnodeBeforeMount) && Xe(A, ee, p), Ot(c, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie), h.NODE_ENV !== "production" && $t(c, "render");
          const qe = c.subTree = Fr(c);
          h.NODE_ENV !== "production" && jt(c, "render"), h.NODE_ENV !== "production" && $t(c, "patch"), P(
            null,
            qe,
            _,
            N,
            c,
            b,
            E
          ), h.NODE_ENV !== "production" && jt(c, "patch"), p.el = qe.el;
        }
        if (se && Pe(se, b), !ze && (A = U && U.onVnodeMounted)) {
          const qe = p;
          Pe(
            () => Xe(A, ee, qe),
            b
          );
        }
        (p.shapeFlag & 256 || ee && an(ee.vnode) && ee.vnode.shapeFlag & 256) && c.a && Pe(c.a, b), c.isMounted = !0, h.NODE_ENV !== "production" && il(c), p = _ = N = null;
      }
    };
    c.scope.on();
    const D = c.effect = new Is(I);
    c.scope.off();
    const w = c.update = D.run.bind(D), $ = c.job = D.runIfDirty.bind(D);
    $.i = c, $.id = c.uid, D.scheduler = () => uo($), Ot(c, !0), h.NODE_ENV !== "production" && (D.onTrack = c.rtc ? (A) => Ft(c.rtc, A) : void 0, D.onTrigger = c.rtg ? (A) => Ft(c.rtg, A) : void 0), w();
  }, J = (c, p, _) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Kl(c, p.props, N, _), ec(c, p.children, _), Ke(), Tr(c), We();
  }, xe = (c, p, _, N, b, E, C, I, D = !1) => {
    const w = c && c.children, $ = c ? c.shapeFlag : 0, A = p.children, { patchFlag: k, shapeFlag: U } = p;
    if (k > 0) {
      if (k & 128) {
        vt(
          w,
          A,
          _,
          N,
          b,
          E,
          C,
          I,
          D
        );
        return;
      } else if (k & 256) {
        st(
          w,
          A,
          _,
          N,
          b,
          E,
          C,
          I,
          D
        );
        return;
      }
    }
    U & 8 ? ($ & 16 && De(w, b, E), A !== w && d(_, A)) : $ & 16 ? U & 16 ? vt(
      w,
      A,
      _,
      N,
      b,
      E,
      C,
      I,
      D
    ) : De(w, b, E, !0) : ($ & 8 && d(_, ""), U & 16 && V(
      A,
      _,
      N,
      b,
      E,
      C,
      I,
      D
    ));
  }, st = (c, p, _, N, b, E, C, I, D) => {
    c = c || Kt, p = p || Kt;
    const w = c.length, $ = p.length, A = Math.min(w, $);
    let k;
    for (k = 0; k < A; k++) {
      const U = p[k] = D ? mt(p[k]) : Le(p[k]);
      P(
        c[k],
        U,
        _,
        null,
        b,
        E,
        C,
        I,
        D
      );
    }
    w > $ ? De(
      c,
      b,
      E,
      !0,
      !1,
      A
    ) : V(
      p,
      _,
      N,
      b,
      E,
      C,
      I,
      D,
      A
    );
  }, vt = (c, p, _, N, b, E, C, I, D) => {
    let w = 0;
    const $ = p.length;
    let A = c.length - 1, k = $ - 1;
    for (; w <= A && w <= k; ) {
      const U = c[w], G = p[w] = D ? mt(p[w]) : Le(p[w]);
      if (Zt(U, G))
        P(
          U,
          G,
          _,
          null,
          b,
          E,
          C,
          I,
          D
        );
      else
        break;
      w++;
    }
    for (; w <= A && w <= k; ) {
      const U = c[A], G = p[k] = D ? mt(p[k]) : Le(p[k]);
      if (Zt(U, G))
        P(
          U,
          G,
          _,
          null,
          b,
          E,
          C,
          I,
          D
        );
      else
        break;
      A--, k--;
    }
    if (w > A) {
      if (w <= k) {
        const U = k + 1, G = U < $ ? p[U].el : N;
        for (; w <= k; )
          P(
            null,
            p[w] = D ? mt(p[w]) : Le(p[w]),
            _,
            G,
            b,
            E,
            C,
            I,
            D
          ), w++;
      }
    } else if (w > k)
      for (; w <= A; )
        Y(c[w], b, E, !0), w++;
    else {
      const U = w, G = w, se = /* @__PURE__ */ new Map();
      for (w = G; w <= k; w++) {
        const Ee = p[w] = D ? mt(p[w]) : Le(p[w]);
        Ee.key != null && (h.NODE_ENV !== "production" && se.has(Ee.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), se.set(Ee.key, w));
      }
      let ee, Se = 0;
      const Ie = k - G + 1;
      let ze = !1, qe = 0;
      const qt = new Array(Ie);
      for (w = 0; w < Ie; w++) qt[w] = 0;
      for (w = U; w <= A; w++) {
        const Ee = c[w];
        if (Se >= Ie) {
          Y(Ee, b, E, !0);
          continue;
        }
        let Ge;
        if (Ee.key != null)
          Ge = se.get(Ee.key);
        else
          for (ee = G; ee <= k; ee++)
            if (qt[ee - G] === 0 && Zt(Ee, p[ee])) {
              Ge = ee;
              break;
            }
        Ge === void 0 ? Y(Ee, b, E, !0) : (qt[Ge - G] = w + 1, Ge >= qe ? qe = Ge : ze = !0, P(
          Ee,
          p[Ge],
          _,
          null,
          b,
          E,
          C,
          I,
          D
        ), Se++);
      }
      const vr = ze ? sc(qt) : Kt;
      for (ee = vr.length - 1, w = Ie - 1; w >= 0; w--) {
        const Ee = G + w, Ge = p[Ee], Nr = p[Ee + 1], wr = Ee + 1 < $ ? (
          // #13559, fallback to el placeholder for unresolved async component
          Nr.el || Nr.placeholder
        ) : N;
        qt[w] === 0 ? P(
          null,
          Ge,
          _,
          wr,
          b,
          E,
          C,
          I,
          D
        ) : ze && (ee < 0 || w !== vr[ee] ? dt(Ge, _, wr, 2) : ee--);
      }
    }
  }, dt = (c, p, _, N, b = null) => {
    const { el: E, type: C, transition: I, children: D, shapeFlag: w } = c;
    if (w & 6) {
      dt(c.component.subTree, p, _, N);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, _, N);
      return;
    }
    if (w & 64) {
      C.move(c, p, _, Nt);
      return;
    }
    if (C === je) {
      o(E, p, _);
      for (let A = 0; A < D.length; A++)
        dt(D[A], p, _, N);
      o(c.anchor, p, _);
      return;
    }
    if (C === Fn) {
      K(c, p, _);
      return;
    }
    if (N !== 2 && w & 1 && I)
      if (N === 0)
        I.beforeEnter(E), o(E, p, _), Pe(() => I.enter(E), b);
      else {
        const { leave: A, delayLeave: k, afterLeave: U } = I, G = () => {
          c.ctx.isUnmounted ? r(E) : o(E, p, _);
        }, se = () => {
          A(E, () => {
            G(), U && U();
          });
        };
        k ? k(E, G, se) : se();
      }
    else
      o(E, p, _);
  }, Y = (c, p, _, N = !1, b = !1) => {
    const {
      type: E,
      props: C,
      ref: I,
      children: D,
      dynamicChildren: w,
      shapeFlag: $,
      patchFlag: A,
      dirs: k,
      cacheIndex: U
    } = c;
    if (A === -2 && (b = !1), I != null && (Ke(), sn(I, null, _, c, !0), We()), U != null && (p.renderCache[U] = void 0), $ & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = $ & 1 && k, se = !an(c);
    let ee;
    if (se && (ee = C && C.onVnodeBeforeUnmount) && Xe(ee, p, c), $ & 6)
      Ae(c.component, _, N);
    else {
      if ($ & 128) {
        c.suspense.unmount(_, N);
        return;
      }
      G && wt(c, null, p, "beforeUnmount"), $ & 64 ? c.type.remove(
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
      (E !== je || A > 0 && A & 64) ? De(
        w,
        p,
        _,
        !1,
        !0
      ) : (E === je && A & 384 || !b && $ & 16) && De(D, p, _), N && ce(c);
    }
    (se && (ee = C && C.onVnodeUnmounted) || G) && Pe(() => {
      ee && Xe(ee, p, c), G && wt(c, null, p, "unmounted");
    }, _);
  }, ce = (c) => {
    const { type: p, el: _, anchor: N, transition: b } = c;
    if (p === je) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((C) => {
        C.type === Me ? r(C.el) : ce(C);
      }) : _e(_, N);
      return;
    }
    if (p === Fn) {
      x(c);
      return;
    }
    const E = () => {
      r(_), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: C, delayLeave: I } = b, D = () => C(_, E);
      I ? I(c.el, E, D) : D();
    } else
      E();
  }, _e = (c, p) => {
    let _;
    for (; c !== p; )
      _ = g(c), r(c), c = _;
    r(p);
  }, Ae = (c, p, _) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && tl(c);
    const {
      bum: N,
      scope: b,
      job: E,
      subTree: C,
      um: I,
      m: D,
      a: w,
      parent: $,
      slots: { __: A }
    } = c;
    jr(D), jr(w), N && Ft(N), $ && M(A) && A.forEach((k) => {
      $.renderCache[k] = void 0;
    }), b.stop(), E && (E.flags |= 8, Y(C, c, p, _)), I && Pe(I, p), Pe(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && ll(c);
  }, De = (c, p, _, N = !1, b = !1, E = 0) => {
    for (let C = E; C < c.length; C++)
      Y(c[C], p, _, N, b);
  }, Ye = (c) => {
    if (c.shapeFlag & 6)
      return Ye(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), _ = p && p[hl];
    return _ ? g(_) : p;
  };
  let kt = !1;
  const Tn = (c, p, _) => {
    c == null ? p._vnode && Y(p._vnode, null, null, !0) : P(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, kt || (kt = !0, Tr(), qs(), kt = !1);
  }, Nt = {
    p: P,
    um: Y,
    m: dt,
    r: ce,
    mt: pe,
    mc: V,
    pc: xe,
    pbc: te,
    n: Ye,
    o: e
  };
  return {
    render: Tn,
    hydrate: void 0,
    createApp: Ll(Tn)
  };
}
function Oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (M(o) && M(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let a = r[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = mt(r[s]), a.el = i.el), !n && a.patchFlag !== -2 && jn(i, a)), a.type === Sn && (a.el = i.el), a.type === Me && !a.el && (a.el = i.el), h.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
    }
}
function sc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, a;
  const l = e.length;
  for (o = 0; o < l; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        a = s + i >> 1, e[n[a]] < f ? s = a + 1 : i = a;
      f < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
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
function jr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ic = Symbol.for("v-scx"), ac = () => {
  {
    const e = $n(ic);
    return e || h.NODE_ENV !== "production" && T(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rt(e, t, n) {
  return h.NODE_ENV !== "production" && !F(t) && T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yi(e, t, n);
}
function yi(e, t, n = Z) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  h.NODE_ENV !== "production" && !t && (o !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = ae({}, n);
  h.NODE_ENV !== "production" && (a.onWarn = T);
  const l = t && o || !t && s !== "post";
  let f;
  if (mn) {
    if (s === "sync") {
      const m = ac();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = de, m.resume = de, m.pause = de, m;
    }
  }
  const d = me;
  a.call = (m, S, P) => rt(m, d, S, P);
  let u = !1;
  s === "post" ? a.scheduler = (m) => {
    Pe(m, d && d.suspense);
  } : s !== "sync" && (u = !0, a.scheduler = (m, S) => {
    S ? m() : uo(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const g = Ja(e, t, a);
  return mn && (f ? f.push(g) : l && g()), g;
}
function lc(e, t, n) {
  const o = this.proxy, r = ie(e) ? e.includes(".") ? Ei(o, e) : () => o[e] : e.bind(o, o);
  let s;
  F(t) ? s = t : (s = t.handler, n = t);
  const i = In(this), a = yi(r, s.bind(o), n);
  return i(), a;
}
function Ei(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const cc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Ce(t)}Modifiers`];
function uc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Z;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Dt(Ve(t)) in u)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Ve(t))}" prop.`
        );
      else {
        const g = d[t];
        F(g) && (g(...n) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && cc(o, t.slice(7));
  if (i && (i.trim && (r = n.map((d) => ie(d) ? d.trim() : d)), i.number && (r = n.map(Vo))), h.NODE_ENV !== "production" && fl(e, t, r), h.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[Dt(d)] && T(
      `Event "${d}" is emitted in component ${mo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ce(
        t
      )}" instead of "${t}".`
    );
  }
  let a, l = o[a = Dt(t)] || // also try camelCase event handler (#2249)
  o[a = Dt(Ve(t))];
  !l && s && (l = o[a = Dt(Ce(t))]), l && rt(
    l,
    e,
    6,
    r
  );
  const f = o[a + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, rt(
      f,
      e,
      6,
      r
    );
  }
}
function vi(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, a = !1;
  if (!F(e)) {
    const l = (f) => {
      const d = vi(f, t, !0);
      d && (a = !0, ae(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !s && !a ? (oe(e) && o.set(e, null), null) : (M(s) ? s.forEach((l) => i[l] = null) : ae(i, s), oe(e) && o.set(e, i), i);
}
function po(e, t) {
  return !e || !Nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ce(t)) || q(e, t));
}
let Ho = !1;
function Qn() {
  Ho = !0;
}
function Fr(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [s],
    slots: i,
    attrs: a,
    emit: l,
    render: f,
    renderCache: d,
    props: u,
    data: g,
    setupState: m,
    ctx: S,
    inheritAttrs: P
  } = e, z = Gn(e);
  let L, j;
  h.NODE_ENV !== "production" && (Ho = !1);
  try {
    if (n.shapeFlag & 4) {
      const x = r || o, O = h.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(x, {
        get(v, y, V) {
          return T(
            `Property '${String(
              y
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(v, y, V);
        }
      }) : x;
      L = Le(
        f.call(
          O,
          x,
          d,
          h.NODE_ENV !== "production" ? tt(u) : u,
          m,
          g,
          S
        )
      ), j = a;
    } else {
      const x = t;
      h.NODE_ENV !== "production" && a === u && Qn(), L = Le(
        x.length > 1 ? x(
          h.NODE_ENV !== "production" ? tt(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return Qn(), tt(a);
            },
            slots: i,
            emit: l
          } : { attrs: a, slots: i, emit: l }
        ) : x(
          h.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), j = t.props ? a : fc(a);
    }
  } catch (x) {
    ln.length = 0, xn(x, e, 1), L = ot(Me);
  }
  let R = L, K;
  if (h.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([R, K] = Ni(L)), j && P !== !1) {
    const x = Object.keys(j), { shapeFlag: O } = R;
    if (x.length) {
      if (O & 7)
        s && x.some(Un) && (j = dc(
          j,
          s
        )), R = yt(R, j, !1, !0);
      else if (h.NODE_ENV !== "production" && !Ho && R.type !== Me) {
        const v = Object.keys(a), y = [], V = [];
        for (let H = 0, te = v.length; H < te; H++) {
          const Q = v[H];
          Nn(Q) ? Un(Q) || y.push(Q[2].toLowerCase() + Q.slice(3)) : V.push(Q);
        }
        V.length && T(
          `Extraneous non-props attributes (${V.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), y.length && T(
          `Extraneous non-emits event listeners (${y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Lr(R) && T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), R = yt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Lr(R) && T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ir(R, n.transition)), h.NODE_ENV !== "production" && K ? K(R) : L = R, Gn(z), L;
}
const Ni = (e) => {
  const t = e.children, n = e.dynamicChildren, o = pr(t, !1);
  if (o) {
    if (h.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ni(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (a) => {
    t[r] = a, n && (s > -1 ? n[s] = a : a.patchFlag > 0 && (e.dynamicChildren = [...n, a]));
  };
  return [Le(o), i];
};
function pr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (ho(r)) {
      if (r.type !== Me || r.children === "v-if") {
        if (n)
          return;
        if (n = r, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return pr(n.children);
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
  for (const o in e)
    (!Un(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lr = (e) => e.shapeFlag & 7 || e.type === Me;
function pc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: a, patchFlag: l } = t, f = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (r || a) && nt || t.dirs || t.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return o ? Hr(o, i, f) : !!i;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const g = d[u];
        if (i[g] !== o[g] && !po(f, g))
          return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable) ? !0 : o === i ? !1 : o ? i ? Hr(o, i, f) : !0 : !!i;
  return !1;
}
function Hr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !po(n, s))
      return !0;
  }
  return !1;
}
function hc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const wi = (e) => e.__isSuspense;
function gc(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : zs(e);
}
const je = Symbol.for("v-fgt"), Sn = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Fn = Symbol.for("v-stc"), ln = [];
let ke = null;
function Re(e = !1) {
  ln.push(ke = e ? null : []);
}
function mc() {
  ln.pop(), ke = ln[ln.length - 1] || null;
}
let gn = 1;
function Ur(e, t = !1) {
  gn += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = gn > 0 ? ke || Kt : null, mc(), gn > 0 && ke && ke.push(e), e;
}
function $e(e, t, n, o, r, s) {
  return Oi(
    gt(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function _c(e, t, n, o, r) {
  return Oi(
    ot(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function ho(e) {
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
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ue(e) || F(e) ? { i: we, r: e, k: t, f: !!n } : e : null);
function gt(e, t = null, n = null, o = 0, r = null, s = e === je ? 0 : 1, i = !1, a = !1) {
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
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: we
  };
  return a ? (hr(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ie(n) ? 8 : 16), h.NODE_ENV !== "production" && l.key !== l.key && T("VNode created with invalid key (NaN). VNode type:", l.type), gn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ke.push(l), l;
}
const ot = h.NODE_ENV !== "production" ? bc : Di;
function Di(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Il) && (h.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Me), ho(e)) {
    const a = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && hr(a, n), gn > 0 && !s && ke && (a.shapeFlag & 6 ? ke[ke.indexOf(e)] = a : ke.push(a)), a.patchFlag = -2, a;
  }
  if (Vi(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: a, style: l } = t;
    a && !ie(a) && (t.class = un(a)), oe(l) && (pn(l) && !M(l) && (l = ae({}, l)), t.style = io(l));
  }
  const i = ie(e) ? 1 : wi(e) ? 128 : gl(e) ? 64 : oe(e) ? 4 : F(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && pn(e) && (e = W(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), gt(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function yc(e) {
  return e ? pn(e) || di(e) ? ae({}, e) : e : null;
}
function yt(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: a, transition: l } = e, f = t ? vc(r || {}, t) : r, d = {
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
    children: h.NODE_ENV !== "production" && i === -1 && M(a) ? a.map(Si) : a,
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
    ssContent: e.ssContent && yt(e.ssContent),
    ssFallback: e.ssFallback && yt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && o && ir(
    d,
    l.clone(d)
  ), d;
}
function Si(e) {
  const t = yt(e);
  return M(e.children) && (t.children = e.children.map(Si)), t;
}
function Ec(e = " ", t = 0) {
  return ot(Sn, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (Re(), _c(Me, null, e)) : ot(Me, null, e);
}
function Le(e) {
  return e == null || typeof e == "boolean" ? ot(Me) : M(e) ? ot(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ho(e) ? mt(e) : ot(Sn, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
}
function hr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), hr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !di(t) ? t._ctx = we : r === 3 && we && (we.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: we }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = un([t.class, o.class]));
      else if (r === "style")
        t.style = io([t.style, o.style]);
      else if (Nn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(M(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Xe(e, t, n, o = null) {
  rt(e, t, 7, [
    n,
    o
  ]);
}
const Nc = ci();
let wc = 0;
function Oc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Nc, s = {
    uid: wc++,
    vnode: e,
    type: o,
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
    scope: new ha(
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
    propsOptions: hi(o, r),
    emitsOptions: vi(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Z,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
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
  return h.NODE_ENV !== "production" ? s.ctx = Cl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = uc.bind(null, s), e.ce && e.ce(s), s;
}
let me = null;
const gr = () => me || we;
let eo, Uo;
{
  const e = wn(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  eo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), Uo = t(
    "__VUE_SSR_SETTERS__",
    (n) => mn = n
  );
}
const In = (e) => {
  const t = me;
  return eo(e), e.scope.on(), () => {
    e.scope.off(), eo(t);
  };
}, Br = () => {
  me && me.scope.off(), eo(null);
}, xc = /* @__PURE__ */ ut("slot,component");
function Bo(e, { isNativeTag: t }) {
  (xc(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let mn = !1;
function Dc(e, t = !1, n = !1) {
  t && Uo(t);
  const { props: o, children: r } = e.vnode, s = Ii(e);
  Ul(e, o, s, t), Ql(e, r, n || t);
  const i = s ? Sc(e, t) : void 0;
  return t && Uo(!1), i;
}
function Sc(e, t) {
  var n;
  const o = e.type;
  if (h.NODE_ENV !== "production") {
    if (o.name && Bo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        Bo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        ni(s[i]);
    }
    o.compilerOptions && Ic() && T(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), h.NODE_ENV !== "production" && Vl(e);
  const { setup: r } = o;
  if (r) {
    Ke();
    const s = e.setupContext = r.length > 1 ? Cc(e) : null, i = In(e), a = zt(
      r,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), l = Go(a);
    if (We(), i(), (l || e.sp) && !an(e) && ri(e), l) {
      if (a.then(Br, Br), t)
        return a.then((f) => {
          Kr(e, f, t);
        }).catch((f) => {
          xn(f, e, 0);
        });
      if (e.asyncDep = a, h.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        T(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Kr(e, a, t);
  } else
    Ti(e, t);
}
function Kr(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) ? (h.NODE_ENV !== "production" && ho(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ks(t), h.NODE_ENV !== "production" && Al(e)) : h.NODE_ENV !== "production" && t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ti(e, n);
}
const Ic = () => !0;
function Ti(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || de);
  {
    const r = In(e);
    Ke();
    try {
      Pl(e);
    } finally {
      We(), r();
    }
  }
  h.NODE_ENV !== "production" && !o.render && e.render === de && !t && (o.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", o));
}
const Wr = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return Qn(), fe(e, "get", ""), e[t];
  },
  set() {
    return T("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return T("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return fe(e, "get", ""), e[t];
  }
};
function Tc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return fe(e, "get", "$slots"), t[n];
    }
  });
}
function Cc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && T("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (M(n) ? o = "array" : ue(n) && (o = "ref")), o !== "object" && T(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Wr));
      },
      get slots() {
        return o || (o = Tc(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Wr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function go(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ks(Ma(e.exposed)), {
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
function Ci(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mo(e, t, n = !1) {
  let o = Ci(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Ac(o) : n ? "App" : "Anonymous";
}
function Vi(e) {
  return F(e) && "__vccOpts" in e;
}
const mr = (e, t) => {
  const n = Ka(e, t, mn);
  if (h.NODE_ENV !== "production") {
    const o = gr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Rc() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!oe(u))
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
          a(g),
          ">"
        ];
      } else {
        if (Ct(u))
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
    u.type.props && u.props && g.push(i("props", W(u.props))), u.setupState !== Z && g.push(i("setup", u.setupState)), u.data !== Z && g.push(i("data", W(u.data)));
    const m = l(u, "computed");
    m && g.push(i("computed", m));
    const S = l(u, "inject");
    return S && g.push(i("injected", S)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function i(u, g) {
    return g = ae({}, g), Object.keys(g).length ? [
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
          ["span", o, m + ": "],
          a(g[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : oe(u) ? ["object", { object: g ? W(u) : u }] : ["span", n, String(u)];
  }
  function l(u, g) {
    const m = u.type;
    if (F(m))
      return;
    const S = {};
    for (const P in u.ctx)
      f(m, P, g) && (S[P] = u.ctx[P]);
    return S;
  }
  function f(u, g, m) {
    const S = u[m];
    if (M(S) && S.includes(g) || oe(S) && g in S || u.extends && f(u.extends, g, m) || u.mixins && u.mixins.some((P) => f(P, g, m)))
      return !0;
  }
  function d(u) {
    return Oe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Jr = "3.5.18", Fe = h.NODE_ENV !== "production" ? T : de;
var be = {};
let Ko;
const Yr = typeof window < "u" && window.trustedTypes;
if (Yr)
  try {
    Ko = /* @__PURE__ */ Yr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    be.NODE_ENV !== "production" && Fe(`Error creating trusted types policy: ${e}`);
  }
const Ai = Ko ? (e) => Ko.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, zr = at && /* @__PURE__ */ at.createElement("template"), Mc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? at.createElementNS(Pc, e) : t === "mathml" ? at.createElementNS(kc, e) : n ? at.createElement(e, { is: n }) : at.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
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
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      zr.innerHTML = Ai(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const a = zr.content;
      if (o === "svg" || o === "mathml") {
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
  const o = e[$c];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qr = Symbol("_vod"), Fc = Symbol("_vsh"), Lc = Symbol(be.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hc = /(^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const o = e.style, r = ie(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const i of t.split(";")) {
          const a = i.slice(0, i.indexOf(":")).trim();
          n[a] == null && Hn(o, a, "");
        }
      else
        for (const i in t)
          n[i] == null && Hn(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), Hn(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[Lc];
      i && (n += ";" + i), o.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  qr in e && (e[qr] = s ? o.display : "", e[Fc] && (o.display = "none"));
}
const Bc = /[^\\];\s*$/, Gr = /\s*!important$/;
function Hn(e, t, n) {
  if (M(n))
    n.forEach((o) => Hn(e, t, o));
  else if (n == null && (n = ""), be.NODE_ENV !== "production" && Bc.test(n) && Fe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Kc(e, t);
    Gr.test(n) ? e.setProperty(
      Ce(o),
      n.replace(Gr, ""),
      "important"
    ) : e[o] = n;
  }
}
const Xr = ["Webkit", "Moz", "ms"], xo = {};
function Kc(e, t) {
  const n = xo[t];
  if (n)
    return n;
  let o = Ve(t);
  if (o !== "filter" && o in e)
    return xo[t] = o;
  o = so(o);
  for (let r = 0; r < Xr.length; r++) {
    const s = Xr[r] + o;
    if (s in e)
      return xo[t] = s;
  }
  return t;
}
const Zr = "http://www.w3.org/1999/xlink";
function Qr(e, t, n, o, r, s = pa(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zr, t.slice(6, t.length)) : e.setAttributeNS(Zr, t, n) : n == null || s && !Os(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Et(n) ? String(n) : n
  );
}
function es(e, t, n, o, r) {
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
  i && e.removeAttribute(r || t);
}
function Ht(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Wc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ts = Symbol("_vei");
function Jc(e, t, n, o, r = null) {
  const s = e[ts] || (e[ts] = {}), i = s[t];
  if (o && i)
    i.value = be.NODE_ENV !== "production" ? os(o, t) : o;
  else {
    const [a, l] = Yc(t);
    if (o) {
      const f = s[t] = Gc(
        be.NODE_ENV !== "production" ? os(o, t) : o,
        r
      );
      Ht(e, a, f, l);
    } else i && (Wc(e, a, i, l), s[t] = void 0);
  }
}
const ns = /(?:Once|Passive|Capture)$/;
function Yc(e) {
  let t;
  if (ns.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ns); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ce(e.slice(2)), t];
}
let Do = 0;
const zc = /* @__PURE__ */ Promise.resolve(), qc = () => Do || (zc.then(() => Do = 0), Do = Date.now());
function Gc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    rt(
      Xc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = qc(), n;
}
function os(e, t) {
  return F(e) || M(e) ? e : (Fe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), de);
}
function Xc(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? jc(e, o, i) : t === "style" ? Uc(e, n, o) : Nn(t) ? Un(t) || Jc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, o, i)) ? (es(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qr(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(o)) ? es(e, Ve(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Qr(e, t, o, i));
};
function Qc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rs(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return rs(t) && ie(n) ? !1 : t in e;
}
const ss = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function eu(e, t, n) {
  const o = /* @__PURE__ */ oi(e, t);
  oo(o) && ae(o, t);
  class r extends _r {
    constructor(i) {
      super(o, i, n);
    }
  }
  return r.def = o, r;
}
const tu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class _r extends tu {
  constructor(t, n = {}, o = us) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== us ? this._root = this.shadowRoot : (be.NODE_ENV !== "production" && this.shadowRoot && Fe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof _r) {
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
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: i } = o;
      let a;
      if (s && !M(s))
        for (const l in s) {
          const f = s[l];
          (f === Number || f && f.type === Number) && (l in this._props && (this._props[l] = Or(this._props[l])), (a || (a = /* @__PURE__ */ Object.create(null)))[Ve(l)] = !0);
        }
      this._numberProps = a, this._resolveProps(o), this.shadowRoot ? this._applyStyles(i) : be.NODE_ENV !== "production" && i && Fe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    be.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        q(this, o) ? be.NODE_ENV !== "production" && Fe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => he(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = M(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(Ve))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(s) {
          this._setProp(r, s, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : ss;
    const r = Ve(t);
    n && this._numberProps && this._numberProps[r] && (o = Or(o)), this._setProp(r, o, !1, !0);
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
  _setProp(t, n, o = !0, r = !1) {
    if (n !== this._props[t] && (n === ss ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o)) {
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
    const n = ot(this._def, ae(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, be.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const r = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            oo(i[0]) ? ae({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (s, ...i) => {
        r(s, i), Ce(s) !== s && r(Ce(s), i);
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
    const o = this._nonce;
    for (let r = t.length - 1; r >= 0; r--) {
      const s = document.createElement("style");
      if (o && s.setAttribute("nonce", o), s.textContent = t[r], this.shadowRoot.prepend(s), be.NODE_ENV !== "production")
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
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const r = t[o], s = r.getAttribute("name") || "default", i = this._slots[s], a = r.parentNode;
      if (i)
        for (const l of i) {
          if (n && l.nodeType === 1) {
            const f = n + "-s", d = document.createTreeWalker(l, 1);
            l.setAttribute(f, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(f, "");
          }
          a.insertBefore(l, r);
        }
      else
        for (; r.firstChild; ) a.insertBefore(r.firstChild, r);
      a.removeChild(r);
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
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
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
function as(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const So = Symbol("_assign"), ou = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[So] = is(r);
    const s = o || r.props && r.props.type === "number";
    Ht(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let a = e.value;
      n && (a = a.trim()), s && (a = Vo(a)), e[So](a);
    }), n && Ht(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ht(e, "compositionstart", nu), Ht(e, "compositionend", as), Ht(e, "change", as));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, i) {
    if (e[So] = is(i), e.composing) return;
    const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Vo(e.value) : e.value, l = t ?? "";
    a !== l && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === l) || (e.value = l));
  }
}, ru = ["ctrl", "shift", "alt", "meta"], su = {
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
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const a = su[t[i]];
      if (a && a(r, t)) return;
    }
    return e(r, ...s);
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
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = Ce(r.key);
    if (t.some(
      (i) => i === s || iu[i] === s
    ))
      return e(r);
  });
}, lu = /* @__PURE__ */ ae({ patchProp: Zc }, Mc);
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
  return t.mount = (o) => {
    const r = pu(o);
    if (!r) return;
    const s = t._component;
    !F(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, uu(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
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
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Fe(o), n;
      },
      set() {
        Fe(o);
      }
    });
  }
}
function pu(e) {
  if (ie(e)) {
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
    cause: o
  }) {
    super(n), this[ki] = !0, this.name = t, this.cause = o;
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
    const o = Symbol.for(n);
    return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0;
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
var Ki = "AI_TypeValidationError", Wi = `vercel.ai.error.${Ki}`, vu = Symbol.for(Wi), Ji, Nu = class Wo extends Yt {
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
    return Wo.isInstance(n) && n.value === t ? n : new Wo({ value: t, cause: n });
  }
};
Ji = vu;
var ds = Nu;
let wu = (e, t = 21) => (n = t) => {
  let o = "", r = n | 0;
  for (; r--; )
    o += e[Math.random() * e.length | 0];
  return o;
};
function Ou(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} }, ps;
function xu() {
  if (ps) return xt.exports;
  ps = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function o(a, l, f) {
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
    return r(d, { protoAction: u, constructorAction: g, safe: f && f.safe });
  }
  function r(a, { protoAction: l = "error", constructorAction: f = "error", safe: d } = {}) {
    let u = [a];
    for (; u.length; ) {
      const g = u;
      u = [];
      for (const m of g) {
        if (l !== "ignore" && Object.prototype.hasOwnProperty.call(m, "__proto__")) {
          if (d === !0)
            return null;
          if (l === "error")
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
          const P = m[S];
          P && typeof P == "object" && u.push(P);
        }
      }
    }
    return a;
  }
  function s(a, l, f) {
    const d = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return o(a, l, f);
    } finally {
      Error.stackTraceLimit = d;
    }
  }
  function i(a, l) {
    const f = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return o(a, l, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = f;
    }
  }
  return xt.exports = s, xt.exports.default = s, xt.exports.parse = s, xt.exports.safeParse = i, xt.exports.scan = r, xt.exports;
}
var Du = xu();
const Su = /* @__PURE__ */ Ou(Du);
var Iu = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: o = "-"
} = {}) => {
  const r = wu(n, t);
  if (e == null)
    return r;
  if (n.includes(o))
    throw new yu({
      argument: "separator",
      message: `The separator "${o}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${o}${r(s)}`;
}, br = Iu(), Jo = Symbol.for("vercel.ai.validator");
function Tu(e) {
  return { [Jo]: !0, validate: e };
}
function Cu(e) {
  return typeof e == "object" && e !== null && Jo in e && e[Jo] === !0 && "validate" in e;
}
function Vu(e) {
  return Cu(e) ? e : Au(e);
}
function Au(e) {
  return Tu((t) => {
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
    const o = n.validate(e);
    return o.success ? o : {
      success: !1,
      error: ds.wrap({ value: e, cause: o.error })
    };
  } catch (o) {
    return {
      success: !1,
      error: ds.wrap({ value: e, cause: o })
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
    const o = Ru({ value: n, schema: t });
    return o.success ? { ...o, rawValue: n } : o;
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
  let n = -1, o = null;
  function r(l, f, d) {
    switch (l) {
      case '"': {
        n = f, t.pop(), t.push(d), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        n = f, o = f, t.pop(), t.push(d), t.push("INSIDE_LITERAL");
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
        r(f, l, "FINISH");
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
        r(f, l, "INSIDE_OBJECT_AFTER_VALUE");
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
            n = l, r(f, l, "INSIDE_ARRAY_AFTER_VALUE");
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
        r(f, l, "INSIDE_ARRAY_AFTER_VALUE");
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
        const u = e.substring(o, l + 1);
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
        const d = e.substring(o, e.length);
        "true".startsWith(d) ? a += "true".slice(d.length) : "false".startsWith(d) ? a += "false".slice(d.length) : "null".startsWith(d) && (a += "null".slice(d.length));
      }
    }
  return a;
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
}, yr = [
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
  yr.map((e) => [e.code, e])
);
Object.fromEntries(
  yr.map((e) => [e.name, e.code])
);
var tf = yr.map((e) => e.code), nf = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!tf.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const o = n, r = e.slice(t + 1), s = JSON.parse(r);
  return ef[o].parse(s);
}, of = 10;
function rf(e, t) {
  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e)
    n.set(r, o), o += r.length;
  return e.length = 0, n;
}
async function sf({
  stream: e,
  onTextPart: t,
  onReasoningPart: n,
  onReasoningSignaturePart: o,
  onRedactedReasoningPart: r,
  onSourcePart: s,
  onFilePart: i,
  onDataPart: a,
  onErrorPart: l,
  onToolCallStreamingStartPart: f,
  onToolCallDeltaPart: d,
  onToolCallPart: u,
  onToolResultPart: g,
  onMessageAnnotationsPart: m,
  onFinishMessagePart: S,
  onFinishStepPart: P,
  onStartStepPart: z
}) {
  const L = e.getReader(), j = new TextDecoder(), R = [];
  let K = 0;
  for (; ; ) {
    const { value: x } = await L.read();
    if (x && (R.push(x), K += x.length, x[x.length - 1] !== of))
      continue;
    if (R.length === 0)
      break;
    const O = rf(R, K);
    K = 0;
    const v = j.decode(O, { stream: !0 }).split(`
`).filter((y) => y !== "").map(nf);
    for (const { type: y, value: V } of v)
      switch (y) {
        case "text":
          await t?.(V);
          break;
        case "reasoning":
          await n?.(V);
          break;
        case "reasoning_signature":
          await o?.(V);
          break;
        case "redacted_reasoning":
          await r?.(V);
          break;
        case "file":
          await i?.(V);
          break;
        case "source":
          await s?.(V);
          break;
        case "data":
          await a?.(V);
          break;
        case "error":
          await l?.(V);
          break;
        case "message_annotations":
          await m?.(V);
          break;
        case "tool_call_streaming_start":
          await f?.(V);
          break;
        case "tool_call_delta":
          await d?.(V);
          break;
        case "tool_call":
          await u?.(V);
          break;
        case "tool_result":
          await g?.(V);
          break;
        case "finish_message":
          await S?.(V);
          break;
        case "finish_step":
          await P?.(V);
          break;
        case "start_step":
          await z?.(V);
          break;
        default: {
          const H = y;
          throw new Error(`Unknown stream part type: ${H}`);
        }
      }
  }
}
async function af({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: o,
  generateId: r = br,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var a, l;
  const f = i?.role === "assistant";
  let d = f ? 1 + // find max step in existing tool invocations:
  ((l = (a = i.toolInvocations) == null ? void 0 : a.reduce((O, v) => {
    var y;
    return Math.max(O, (y = v.step) != null ? y : 0);
  }, 0)) != null ? l : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: r(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, m, S;
  function P(O, v) {
    const y = u.parts.find(
      (V) => V.type === "tool-invocation" && V.toolInvocation.toolCallId === O
    );
    y != null ? y.toolInvocation = v : u.parts.push({
      type: "tool-invocation",
      toolInvocation: v
    });
  }
  const z = [];
  let L = f ? i?.annotations : void 0;
  const j = {};
  let R = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, K = "unknown";
  function x() {
    const O = [...z];
    L?.length && (u.annotations = L);
    const v = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(u),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: r()
    };
    t({
      message: v,
      data: O,
      replaceLastMessage: f
    });
  }
  await sf({
    stream: e,
    onTextPart(O) {
      g == null ? (g = {
        type: "text",
        text: O
      }, u.parts.push(g)) : g.text += O, u.content += O, x();
    },
    onReasoningPart(O) {
      var v;
      S == null ? (S = { type: "text", text: O }, m?.details.push(S)) : S.text += O, m == null ? (m = {
        type: "reasoning",
        reasoning: O,
        details: [S]
      }, u.parts.push(m)) : m.reasoning += O, u.reasoning = ((v = u.reasoning) != null ? v : "") + O, x();
    },
    onReasoningSignaturePart(O) {
      S != null && (S.signature = O.signature);
    },
    onRedactedReasoningPart(O) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: O.data
      }), S = void 0, x();
    },
    onFilePart(O) {
      u.parts.push({
        type: "file",
        mimeType: O.mimeType,
        data: O.data
      }), x();
    },
    onSourcePart(O) {
      u.parts.push({
        type: "source",
        source: O
      }), x();
    },
    onToolCallStreamingStartPart(O) {
      u.toolInvocations == null && (u.toolInvocations = []), j[O.toolCallId] = {
        text: "",
        step: d,
        toolName: O.toolName,
        index: u.toolInvocations.length
      };
      const v = {
        state: "partial-call",
        step: d,
        toolCallId: O.toolCallId,
        toolName: O.toolName,
        args: void 0
      };
      u.toolInvocations.push(v), P(O.toolCallId, v), x();
    },
    onToolCallDeltaPart(O) {
      const v = j[O.toolCallId];
      v.text += O.argsTextDelta;
      const { value: y } = $u(v.text), V = {
        state: "partial-call",
        step: v.step,
        toolCallId: O.toolCallId,
        toolName: v.toolName,
        args: y
      };
      u.toolInvocations[v.index] = V, P(O.toolCallId, V), x();
    },
    async onToolCallPart(O) {
      const v = {
        state: "call",
        step: d,
        ...O
      };
      if (j[O.toolCallId] != null ? u.toolInvocations[j[O.toolCallId].index] = v : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(v)), P(O.toolCallId, v), x(), n) {
        const y = await n({ toolCall: O });
        if (y != null) {
          const V = {
            state: "result",
            step: d,
            ...O,
            result: y
          };
          u.toolInvocations[u.toolInvocations.length - 1] = V, P(O.toolCallId, V), x();
        }
      }
    },
    onToolResultPart(O) {
      const v = u.toolInvocations;
      if (v == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const y = v.findIndex(
        (H) => H.toolCallId === O.toolCallId
      );
      if (y === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const V = {
        ...v[y],
        state: "result",
        ...O
      };
      v[y] = V, P(O.toolCallId, V), x();
    },
    onDataPart(O) {
      z.push(...O), x();
    },
    onMessageAnnotationsPart(O) {
      L == null ? L = [...O] : L.push(...O), x();
    },
    onFinishStepPart(O) {
      d += 1, g = O.isContinued ? g : void 0, m = void 0, S = void 0;
    },
    onStartStepPart(O) {
      f || (u.id = O.messageId), u.parts.push({ type: "step-start" }), x();
    },
    onFinishMessagePart(O) {
      K = O.finishReason, O.usage != null && (R = ku(O.usage));
    },
    onErrorPart(O) {
      throw new Error(O);
    }
  }), o?.({ message: u, finishReason: K, usage: R });
}
async function lf({
  stream: e,
  onTextPart: t
}) {
  const n = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: o, value: r } = await n.read();
    if (o)
      break;
    await t(r);
  }
}
async function cf({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: o = () => /* @__PURE__ */ new Date(),
  generateId: r = br
}) {
  const s = { type: "text", text: "" }, i = {
    id: r(),
    createdAt: o(),
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
  credentials: o,
  headers: r,
  abortController: s,
  restoreMessagesOnFailure: i,
  onResponse: a,
  onUpdate: l,
  onFinish: f,
  onToolCall: d,
  generateId: u,
  fetch: g = uf(),
  lastMessage: m,
  requestType: S = "generate"
}) {
  var P, z, L;
  const R = await (S === "resume" ? g(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (P = s?.()) == null ? void 0 : P.signal,
    credentials: o
  }) : g(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (z = s?.()) == null ? void 0 : z.signal,
    credentials: o
  })).catch((K) => {
    throw i(), K;
  });
  if (a)
    try {
      await a(R);
    } catch (K) {
      throw K;
    }
  if (!R.ok)
    throw i(), new Error(
      (L = await R.text()) != null ? L : "Failed to fetch the chat response."
    );
  if (!R.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await cf({
        stream: R.body,
        update: l,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await af({
        stream: R.body,
        update: l,
        lastMessage: m,
        onToolCall: d,
        onFinish({ message: K, finishReason: x, usage: O }) {
          f && K != null && f(K, { usage: O, finishReason: x });
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
function Yo(e) {
  return e?.reduce((t, n) => {
    var o;
    return Math.max(t, (o = n.step) != null ? o : 0);
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
        const { name: n, type: o } = t, r = await new Promise((s, i) => {
          const a = new FileReader();
          a.onload = (l) => {
            var f;
            s((f = l.target) == null ? void 0 : f.result);
          }, a.onerror = (l) => i(l), a.readAsDataURL(t);
        });
        return {
          name: n,
          contentType: o,
          url: r
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
  messages: o
}) {
  var r;
  const s = o[o.length - 1];
  return (
    // check if the feature is enabled:
    n > 1 && // ensure there is a last message:
    s != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (o.length > t || Yo(s.toolInvocations) !== e) && // check that next step is possible:
    zi(s) && // limit the number of automatic steps:
    ((r = Yo(s.toolInvocations)) != null ? r : 0) < n
  );
}
function zi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((o, r, s) => r.type === "step-start" ? s : o, -1), n = e.parts.slice(t + 1).filter((o) => o.type === "tool-invocation");
  return n.length > 0 && n.every((o) => "result" in o.toolInvocation);
}
function pf({
  messages: e,
  toolCallId: t,
  toolResult: n
}) {
  var o;
  const r = e[e.length - 1], s = r.parts.find(
    (a) => a.type === "tool-invocation" && a.toolInvocation.toolCallId === t
  );
  if (s == null)
    return;
  const i = {
    ...s.toolInvocation,
    state: "result",
    result: n
  };
  s.toolInvocation = i, r.toolInvocations = (o = r.toolInvocations) == null ? void 0 : o.map(
    (a) => a.toolCallId === t ? i : a
  );
}
var Io = /* @__PURE__ */ new WeakMap(), ms = 0;
function hf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var o = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? o = '"' + e[n] + '"' : o = String(e[n]) : Io.has(e[n]) ? o = Io.get(e[n]) : (o = ms, Io.set(e[n], ms++)), t += "@" + o;
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
var Er = (
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
    }, e.prototype.set = function(t, n, o) {
      var r = this.serializeKey(t), s = o || this.ttl, i = Date.now(), a = {
        data: n,
        createdAt: i,
        expiresAt: s ? i + s : 1 / 0
      };
      this.dispatchExpire(s, a, r), this.items.set(r, a);
    }, e.prototype.dispatchExpire = function(t, n, o) {
      var r = this;
      t && setTimeout(function() {
        var s = Date.now(), i = s >= n.expiresAt;
        i && r.delete(o);
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
const To = {
  isOnline: mf,
  isDocumentVisible: _f,
  fetcher: bf
};
var lt = function() {
  return lt = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, lt.apply(this, arguments);
}, Ut = function(e, t, n, o) {
  function r(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function a(d) {
      try {
        f(o.next(d));
      } catch (u) {
        i(u);
      }
    }
    function l(d) {
      try {
        f(o.throw(d));
      } catch (u) {
        i(u);
      }
    }
    function f(d) {
      d.done ? s(d.value) : r(d.value).then(a, l);
    }
    f((o = o.apply(e, t || [])).next());
  });
}, Bt = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, o, r, s, i;
  return i = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function a(f) {
    return function(d) {
      return l([f, d]);
    };
  }
  function l(f) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (o = 1, r && (s = f[0] & 2 ? r.return : f[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, f[1])).done) return s;
      switch (r = 0, s && (f = [f[0] & 2, s.value]), f[0]) {
        case 0:
        case 1:
          s = f;
          break;
        case 4:
          return n.label++, { value: f[1], done: !1 };
        case 5:
          n.label++, r = f[1], f = [0];
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
      f = [6, d], r = 0;
    } finally {
      o = s = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}, yf = function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var o = n.call(e), r, s = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(r = o.next()).done; ) s.push(r.value);
  } catch (a) {
    i = { error: a };
  } finally {
    try {
      r && !r.done && (n = o.return) && n.call(o);
    } finally {
      if (i) throw i.error;
    }
  }
  return s;
}, Ef = function(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}, qi = new Er(), to = new Er(), Co = new Er(), Gi = {
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
  fetcher: To.fetcher,
  isOnline: To.isOnline,
  isDocumentVisible: To.isDocumentVisible
};
function vf(e, t, n) {
  var o = to.get(e);
  if (o)
    o.data.push(t);
  else {
    var r = 5e3;
    to.set(e, [t], n > 0 ? n + r : n);
  }
}
function Nf(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var o = Math.min(t || 0, n.errorRetryCount), r = o * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: o + 1, shouldRetryOnError: !0 });
    }, r);
  }
}
var _s = function(e, t, n, o) {
  return n === void 0 && (n = qi), o === void 0 && (o = Gi.ttl), Ut(void 0, void 0, void 0, function() {
    var r, s, i, a, l, f, d;
    return Bt(this, function(u) {
      switch (u.label) {
        case 0:
          if (!wf(t)) return [3, 5];
          u.label = 1;
        case 1:
          return u.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return r = u.sent(), [3, 4];
        case 3:
          return a = u.sent(), s = a, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          r = t, u.label = 6;
        case 6:
          if (i = !1, l = { data: r, error: s, isValidating: i }, typeof r < "u")
            try {
              n.set(e, l, o);
            } catch (g) {
              console.error("swrv(mutate): failed to set cache", g);
            }
          return f = to.get(e), f && f.data.length && (d = f.data.filter(function(g) {
            return g.key === e;
          }), d.forEach(function(g, m) {
            typeof l.data < "u" && (g.data = l.data), g.error = l.error, g.isValidating = l.isValidating, g.isLoading = l.isValidating;
            var S = m === d.length - 1;
            S || delete d[m];
          }), d = d.filter(Boolean)), [2, l];
      }
    });
  });
};
function bs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var o, r, s = lt({}, Gi), i = !1, a = !1, l = gr(), f = l?.proxy || l;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (o = t[0]), t.length >= 2 && (r = t[1]), t.length > 2 && (s = lt(lt({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, g = typeof o == "function" ? o : He(o);
  typeof r > "u" && (r = s.fetcher);
  var m = null;
  m || (m = On({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var S = function(j, R) {
    return Ut(e, void 0, void 0, function() {
      var K, x, O, v, y, V, H, te = this;
      return Bt(this, function(Q) {
        switch (Q.label) {
          case 0:
            return K = m.data === void 0, x = g.value, x ? (O = s.cache.get(x), v = O && O.data, m.isValidating = !0, m.isLoading = !v, v && (m.data = v.data, m.error = v.error), y = j || r, !y || !s.isDocumentVisible() && !K || R?.forceRevalidate !== void 0 && !R?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : O && (V = !!(Date.now() - O.createdAt >= s.dedupingInterval || R?.forceRevalidate), !V) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (H = function() {
              return Ut(te, void 0, void 0, function() {
                var ne, ye, pe, le;
                return Bt(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return ne = Co.get(x), ne ? [3, 2] : (ye = Array.isArray(x) ? x : [x], pe = y.apply(void 0, Ef([], yf(ye), !1)), Co.set(x, pe, s.dedupingInterval), [4, _s(x, pe, s.cache, u)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, _s(x, ne.data, s.cache, u)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Co.delete(x), m.error !== void 0 && (le = !i && s.shouldRetryOnError && (R ? R.shouldRetryOnError : !0), le && Nf(S, R ? R.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, v && s.revalidateDebounce ? (setTimeout(function() {
              return Ut(te, void 0, void 0, function() {
                return Bt(this, function(ne) {
                  switch (ne.label) {
                    case 0:
                      return i ? [3, 2] : [4, H()];
                    case 1:
                      ne.sent(), ne.label = 2;
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
            return [4, H()];
          case 2:
            Q.sent(), Q.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, P = function() {
    return Ut(e, void 0, void 0, function() {
      return Bt(this, function(j) {
        return [2, S(null, { shouldRetryOnError: !1 })];
      });
    });
  }, z = null;
  lr(function() {
    var j = function() {
      return Ut(e, void 0, void 0, function() {
        return Bt(this, function(R) {
          switch (R.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, S()] : [3, 2];
            case 1:
              return R.sent(), [3, 3];
            case 2:
              z && clearTimeout(z), R.label = 3;
            case 3:
              return s.refreshInterval && !i && (z = setTimeout(j, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (z = setTimeout(j, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", P, !1), window.addEventListener("focus", P, !1));
  }), cr(function() {
    i = !0, z && clearTimeout(z), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", P, !1), window.removeEventListener("focus", P, !1));
    var j = to.get(g.value);
    j && (j.data = j.data.filter(function(R) {
      return R !== m;
    }));
  });
  try {
    Rt(g, function(j) {
      Je(g) || (g.value = j), m.key = j, m.isValidating = !!j, vf(g.value, m, u), !d && !a && g.value && S(), a = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var L = lt(lt({}, La(m)), { mutate: function(j, R) {
    return S(j, lt(lt({}, R), { forceRevalidate: !0 }));
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
  initialInput: o = "",
  sendExtraMessageFields: r,
  streamProtocol: s = "data",
  onResponse: i,
  onFinish: a,
  onError: l,
  credentials: f,
  headers: d,
  body: u,
  generateId: g = br,
  onToolCall: m,
  fetch: S,
  keepLastMessageOnError: P = !0,
  maxSteps: z = 1,
  experimental_prepareRequestBody: L
} = {
  maxSteps: 1
}) {
  var j, R;
  const K = t ?? g(), x = `${e}|${K}`, { data: O, mutate: v } = Of(
    x,
    () => {
      var Y;
      return (Y = ys[x]) != null ? Y : Rn(n);
    }
  ), y = (j = Es[K]) != null ? j : Es[K] = He(
    "ready"
  );
  (R = O.value) != null || (O.value = Rn(n));
  const V = (Y) => (ys[x] = Y, v()), H = O, te = He(void 0), Q = He(void 0);
  let ne = null;
  async function ye(Y, { data: ce, headers: _e, body: Ae } = {}) {
    var De, Ye, kt;
    te.value = void 0, y.value = "submitted";
    const Tn = H.value.length, Nt = Yo(
      (De = H.value[H.value.length - 1]) == null ? void 0 : De.toolInvocations
    );
    try {
      ne = new AbortController();
      const pt = Rn(Y), c = pt;
      V(c);
      const p = (Ye = Q.value) != null ? Ye : [], _ = r ? c : c.map(
        ({
          role: N,
          content: b,
          experimental_attachments: E,
          data: C,
          annotations: I,
          toolInvocations: D,
          parts: w
        }) => ({
          role: N,
          content: b,
          ...E !== void 0 && {
            experimental_attachments: E
          },
          ...C !== void 0 && { data: C },
          ...I !== void 0 && { annotations: I },
          ...D !== void 0 && { toolInvocations: D },
          ...w !== void 0 && { parts: w }
        })
      );
      await ff({
        api: e,
        body: (kt = L?.({
          id: K,
          messages: c,
          requestData: ce,
          requestBody: Ae
        })) != null ? kt : {
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
        abortController: () => ne,
        credentials: f,
        onResponse: i,
        onUpdate({ message: N, data: b, replaceLastMessage: E }) {
          y.value = "streaming", V([
            ...E ? c.slice(0, c.length - 1) : c,
            N
          ]), b?.length && (Q.value = [...p, ...b]);
        },
        onFinish: a,
        restoreMessagesOnFailure() {
          P || V(pt);
        },
        generateId: g,
        onToolCall: m,
        fetch: S,
        // enabled use of structured clone in processChatResponse:
        lastMessage: zo(c[c.length - 1])
      }), y.value = "ready";
    } catch (pt) {
      if (pt.name === "AbortError")
        return ne = null, y.value = "ready", null;
      l && pt instanceof Error && l(pt), te.value = pt, y.value = "error";
    } finally {
      ne = null;
    }
    df({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: Tn,
      maxSteps: z,
      messages: H.value
    }) && await ye(H.value);
  }
  const pe = async (Y, ce) => {
    var _e, Ae, De;
    const Ye = await gs(
      (_e = ce?.experimental_attachments) != null ? _e : Y.experimental_attachments
    );
    return ye(
      H.value.concat({
        ...Y,
        id: (Ae = Y.id) != null ? Ae : g(),
        createdAt: (De = Y.createdAt) != null ? De : /* @__PURE__ */ new Date(),
        experimental_attachments: Ye.length > 0 ? Ye : void 0,
        parts: Yi(Y)
      }),
      ce
    );
  }, le = async (Y) => {
    const ce = H.value;
    return ce.length === 0 ? null : ce[ce.length - 1].role === "assistant" ? ye(ce.slice(0, -1), Y) : ye(ce, Y);
  }, B = () => {
    ne && (ne.abort(), ne = null);
  }, J = (Y) => {
    typeof Y == "function" && (Y = Y(H.value)), V(Rn(Y));
  }, xe = (Y) => {
    typeof Y == "function" && (Y = Y(Q.value)), Q.value = Y;
  }, st = He(o), vt = async (Y, ce = {}) => {
    var _e;
    (_e = Y?.preventDefault) == null || _e.call(Y);
    const Ae = st.value;
    if (!Ae && !ce.allowEmptySubmit)
      return;
    const De = await gs(
      ce.experimental_attachments
    );
    ye(
      H.value.concat({
        id: g(),
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
    const _e = H.value;
    if (pf({
      messages: _e,
      toolCallId: Y,
      toolResult: ce
    }), V(_e), y.value === "submitted" || y.value === "streaming")
      return;
    const Ae = _e[_e.length - 1];
    zi(Ae) && ye(_e);
  };
  return {
    id: K,
    messages: H,
    append: pe,
    error: te,
    reload: le,
    stop: B,
    setMessages: J,
    input: st,
    handleSubmit: vt,
    isLoading: mr(
      () => y.value === "submitted" || y.value === "streaming"
    ),
    status: y,
    data: Q,
    setData: xe,
    addToolResult: dt
  };
}
function zo(e) {
  if (Array.isArray(e))
    return [...e.map(zo)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, o] of Object.entries(e))
      t[n] = zo(o);
    return t;
  } else
    return e;
}
function Df(e) {
  const t = He(!1), n = He("");
  let o = null, r = [];
  const s = async () => {
    if (!t.value)
      try {
        const l = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        o = new MediaRecorder(l), r = [], o.ondataavailable = (f) => {
          r.push(f.data);
        }, o.onstop = async () => {
          const f = new Blob(r, { type: o?.mimeType });
          await a(f), l.getTracks().forEach((d) => d.stop());
        }, o.start(), t.value = !0, n.value = "";
      } catch (l) {
        n.value = `启动录音失败: ${l.message}`;
      }
  }, i = () => {
    !t.value || !o || (o.stop(), t.value = !1);
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
}, Tf = ["innerHTML"], Cf = { key: 1 }, Vf = {
  key: 1,
  class: "msg-line msg-ai"
}, Af = {
  key: 0,
  class: "dice"
}, Rf = { key: 1 }, Pf = ["disabled"], kf = /* @__PURE__ */ oi({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, n = xf({
      // 确保 API 地址指向我们新的 /api/chat
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat"),
      onToolCall: async ({ toolCall: v }) => {
        if (console.log("[onToolCall] 工具被调用:", v), v.toolName === "navigateToPage") {
          const y = v.args.pageName;
          return console.log(`[onToolCall] 导航工具调用: ${y}`), K(y), { page: y, success: !0 };
        }
        if (v.toolName === "zoomInOnPhoto") {
          const y = v.args.photoTitle;
          return console.log(`[onToolCall] 图片放大工具调用: ${y}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
            detail: { title: y },
            bubbles: !0,
            composed: !0
          })), { title: y };
        }
        if (v.toolName === "zoomOutPhoto") {
          const y = v.args.action || "close";
          return console.log(`[onToolCall] 图片缩小工具调用: ${y}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
            detail: { action: y },
            bubbles: !0,
            composed: !0
          })), { action: y, success: !0 };
        }
        return {};
      }
    }), o = n.messages, r = n.input, s = n.handleSubmit, i = n.isLoading, a = n.error, { isRecording: l, start: f, stop: d } = Df((v) => {
      const y = v.trim();
      if (["发送", "提交", "发出"].includes(y)) return void s();
      if (["清空", "清除", "删除"].includes(y)) return void (r.value = "");
      r.value = y;
    }), u = He(!1), g = On({ x: 0, y: 0 }), m = He(null), S = He(null), P = He(!1);
    function z() {
      u.value = !u.value;
    }
    function L() {
      P.value || z();
    }
    function j(v) {
      return v.trim().startsWith("<audio");
    }
    const R = mr(() => {
      if (!i.value) return !1;
      const v = [...o.value].reverse().find((y) => y.role === "user");
      return !!(v && /摇骰子|掷骰子/.test(v.content));
    });
    Rt(o, async (v, y) => {
      if (!v || v.length === (y?.length || 0)) return;
      const V = v.length, H = y?.length || 0;
      for (let te = H; te < V; te++) {
        const Q = v[te];
        if (console.log(`[Watcher] 检查消息 ${te}:`, JSON.stringify(Q, null, 2)), Q.role === "assistant" && Q.toolInvocations) {
          console.log("[Watcher] 发现助手工具调用:", Q.toolInvocations);
          for (const ne of Q.toolInvocations)
            ne.state === "result" && (console.log("[Watcher] 工具调用完成:", ne), O(ne));
        }
      }
      await zn(), S.value && (S.value.scrollTop = S.value.scrollHeight);
    }, { deep: !0 });
    function K(v) {
      let y = "/";
      switch (v) {
        case "portfolio":
        case "blog":
        case "archives":
          y = "/";
          break;
        case "about":
          y = "/about";
          break;
        case "contact":
          y = "/contact";
          break;
        default:
          console.error(`[Navigation] 未知目标: ${v}`);
          return;
      }
      console.log(`[Navigation] 执行跳转到: ${y}`), setTimeout(() => {
        window.location.href = y;
      }, 100);
    }
    Rt(o, async (v, y) => {
      if (!v || v.length === (y?.length || 0)) return;
      const V = v[v.length - 1];
      if (V) {
        if (console.log("最新消息对象结构:", JSON.stringify(V, null, 2)), V.role === "tool" && V.toolName)
          switch (V.toolName) {
            case "navigateToPage": {
              const H = V.result;
              if (H?.page) {
                console.log(`[Watcher] 检测到导航指令, 目标: ${H.page}`);
                let te = "/";
                switch (H.page) {
                  case "portfolio":
                  case "blog":
                  case "archives":
                    te = "/";
                    break;
                  case "about":
                    te = "/about";
                    break;
                  case "contact":
                    te = "/contact";
                    break;
                  default:
                    console.error(`[Watcher] 未知导航目标: ${H.page}`);
                    return;
                }
                console.log(`[Watcher] 执行页面跳转到: ${te}`), window.location.href = te;
              }
              break;
            }
            case "zoomInOnPhoto": {
              const H = V.result;
              H?.title && (console.log(`[Watcher] 检测到放大图片指令, 目标: ${H.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
                detail: { title: H.title },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
            case "zoomOutPhoto": {
              const H = V.result;
              H?.action && (console.log(`[Watcher] 检测到缩小图片指令, 动作: ${H.action}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
                detail: { action: H.action },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
          }
        await zn(), S.value && (S.value.scrollTop = S.value.scrollHeight);
      }
    }, { deep: !0 }), Rt(a, (v) => {
      v && console.error("[Assistant] An error occurred:", v);
    });
    function x(v) {
      v.preventDefault();
      const y = m.value, V = v.clientX, H = v.clientY, te = g.x, Q = g.y;
      let ne = !1;
      function ye(le) {
        const B = le.clientX - V, J = le.clientY - H;
        if (!ne && (Math.abs(B) > 5 || Math.abs(J) > 5) && (ne = !0, P.value = !0), ne) {
          const xe = Math.min(Math.max(0, te + B), window.innerWidth - y.offsetWidth), st = Math.min(Math.max(0, Q + J), window.innerHeight - y.offsetHeight);
          g.x = xe, g.y = st;
        }
      }
      function pe() {
        document.removeEventListener("mousemove", ye), document.removeEventListener("mouseup", pe), setTimeout(() => P.value = !1, 10);
      }
      document.addEventListener("mousemove", ye), document.addEventListener("mouseup", pe);
    }
    lr(() => {
      const v = m.value, y = 20;
      g.x = window.innerWidth - v.offsetWidth - y, g.y = window.innerHeight - v.offsetHeight - y;
    });
    function O(v) {
      if (!(!v || !v.toolName))
        switch (v.toolName) {
          case "navigateToPage": {
            const y = v.result;
            y?.page && (console.log(`[handleToolInvocation] 导航到页面: ${y.page}`), K(y.page));
            break;
          }
          case "zoomInOnPhoto": {
            const y = v.result;
            y?.title && (console.log(`[handleToolInvocation] 放大图片: ${y.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
              detail: { title: y.title },
              bubbles: !0,
              composed: !0
            })));
            break;
          }
          case "zoomOutPhoto": {
            const y = v.result;
            y?.action && (console.log(`[handleToolInvocation] 缩小图片: ${y.action}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
              detail: { action: y.action },
              bubbles: !0,
              composed: !0
            })));
            break;
          }
          default:
            console.warn(`[handleToolInvocation] 未知工具: ${v.toolName}`, v);
        }
    }
    return (v, y) => (Re(), $e("div", {
      ref_key: "containerRef",
      ref: m,
      class: "ai-bubble-container",
      style: io({ left: g.x + "px", top: g.y + "px" })
    }, [
      gt("div", {
        class: "floating-ball",
        onMousedown: x,
        onClick: L
      }, "AI", 32),
      u.value ? (Re(), $e("div", Sf, [
        u.value ? (Re(), $e("div", {
          key: 0,
          class: "close-btn",
          onClick: z
        }, "×")) : Qt("", !0),
        gt("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: S
        }, [
          he(o).length === 0 ? (Re(), $e("div", If, "有什么可以帮您的吗？")) : Qt("", !0),
          (Re(!0), $e(je, null, Tl(he(o), (V) => (Re(), $e("div", {
            key: V.id,
            class: un(["msg-line", V.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            V.role === "user" || V.role === "assistant" ? (Re(), $e(je, { key: 0 }, [
              j(V.content) ? (Re(), $e("div", {
                key: 0,
                innerHTML: V.content
              }, null, 8, Tf)) : (Re(), $e("div", Cf, Ds(V.content), 1))
            ], 64)) : Qt("", !0)
          ], 2))), 128)),
          he(i) ? (Re(), $e("div", Vf, [
            R.value ? (Re(), $e("span", Af, "⚀⚂⚅")) : (Re(), $e("span", Rf, "思考中..."))
          ])) : Qt("", !0)
        ], 512),
        gt("form", {
          onSubmit: y[3] || (y[3] = ls(
            //@ts-ignore
            (...V) => he(s) && he(s)(...V),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          pl(gt("textarea", {
            "onUpdate:modelValue": y[0] || (y[0] = (V) => ue(r) ? r.value = V : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: y[1] || (y[1] = au(ls(
              //@ts-ignore
              (...V) => he(s) && he(s)(...V),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ou, he(r)]
          ]),
          gt("button", {
            type: "button",
            class: un(["btn-voice", { listening: he(l) }]),
            onClick: y[2] || (y[2] = (V) => he(l) ? he(d)() : he(f)()),
            title: "语音输入"
          }, "🎤", 2),
          gt("button", {
            type: "submit",
            class: "btn-send",
            disabled: he(i) || !he(r).trim()
          }, "➤", 8, Pf)
        ], 32)
      ])) : Qt("", !0)
    ], 4));
  }
}), Mf = ".ai-bubble-container{position:fixed;z-index:9999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", $f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, jf = /* @__PURE__ */ $f(kf, [["styles", [Mf]]]), Ff = /* @__PURE__ */ eu(jf);
customElements.define("ai-chat-bubble", Ff);
