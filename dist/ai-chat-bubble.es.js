/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Z = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Lt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ue = () => {
}, Zi = () => !1, wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), se = Object.assign, Xr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Qi = Object.prototype.hasOwnProperty, q = (e, t) => Qi.call(e, t), R = Array.isArray, Dt = (e) => On(e) === "[object Map]", sr = (e) => On(e) === "[object Set]", Do = (e) => On(e) === "[object Date]", j = (e) => typeof e == "function", re = (e) => typeof e == "string", nt = (e) => typeof e == "symbol", Q = (e) => e !== null && typeof e == "object", Zr = (e) => (Q(e) || j(e)) && j(e.then) && j(e.catch), xs = Object.prototype.toString, On = (e) => xs.call(e), Qr = (e) => On(e).slice(8, -1), ir = (e) => On(e) === "[object Object]", eo = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = /* @__PURE__ */ at(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), el = /* @__PURE__ */ at(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), lr = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, tl = /-(\w)/g, Ve = lr(
  (e) => e.replace(tl, (t, n) => n ? n.toUpperCase() : "")
), nl = /\B([A-Z])/g, Te = lr(
  (e) => e.replace(nl, "-$1").toLowerCase()
), ar = lr((e) => e.charAt(0).toUpperCase() + e.slice(1)), wt = lr(
  (e) => e ? `on${ar(e)}` : ""
), gt = (e, t) => !Object.is(e, t), kt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, fn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Kn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, So = (e) => {
  const t = re(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Io;
const xn = () => Io || (Io = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ht(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = re(r) ? il(r) : Ht(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (re(e) || Q(e))
    return e;
}
const rl = /;(?![^(]*\))/g, ol = /:([^]+)/, sl = /\/\*[^]*?\*\//g;
function il(e) {
  const t = {};
  return e.replace(sl, "").split(rl).forEach((n) => {
    if (n) {
      const r = n.split(ol);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Ut(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const r = Ut(e[n]);
      r && (t += r + " ");
    }
  else if (Q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ll = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", al = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", cl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ul = /* @__PURE__ */ at(ll), fl = /* @__PURE__ */ at(al), dl = /* @__PURE__ */ at(cl), pl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", hl = /* @__PURE__ */ at(pl);
function Ds(e) {
  return !!e || e === "";
}
function gl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = cr(e[r], t[r]);
  return n;
}
function cr(e, t) {
  if (e === t) return !0;
  let n = Do(e), r = Do(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = nt(e), r = nt(t), n || r)
    return e === t;
  if (n = R(e), r = R(t), n || r)
    return n && r ? gl(e, t) : !1;
  if (n = Q(e), r = Q(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !cr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ml(e, t) {
  return e.findIndex((n) => cr(n, t));
}
const Ss = (e) => !!(e && e.__v_isRef === !0), en = (e) => re(e) ? e : e == null ? "" : R(e) || Q(e) && (e.toString === xs || !j(e.toString)) ? Ss(e) ? en(e.value) : JSON.stringify(e, Is, 2) : String(e), Is = (e, t) => Ss(t) ? Is(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[Er(r, s) + " =>"] = o, n),
    {}
  )
} : sr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Er(n))
} : nt(t) ? Er(t) : Q(t) && !R(t) && !ir(t) ? String(t) : t, Er = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ue(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ce;
class _l {
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
    } else process.env.NODE_ENV !== "production" && Ue("cannot run an inactive effect scope.");
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
function vl() {
  return Ce;
}
let X;
const br = /* @__PURE__ */ new WeakSet();
class Cs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, br.has(this) && (br.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Vs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Co(this), As(this);
    const t = X, n = He;
    X = this, He = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && X !== this && Ue(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Rs(this), X = t, He = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ro(t);
      this.deps = this.depsTail = void 0, Co(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? br.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pr(this) && this.run();
  }
  get dirty() {
    return Pr(this);
  }
}
let Ts = 0, on, sn;
function Vs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = sn, sn = e;
    return;
  }
  e.next = on, on = e;
}
function to() {
  Ts++;
}
function no() {
  if (--Ts > 0)
    return;
  if (sn) {
    let t = sn;
    for (sn = void 0; t; ) {
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
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function As(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rs(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ro(r), yl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Pr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ps(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ps(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Pr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = X, r = He;
  X = e, He = !0;
  try {
    As(e);
    const o = e.fn(e._value);
    (t.version === 0 || gt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    X = n, He = r, Rs(e), e.flags &= -3;
  }
}
function ro(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      ro(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let He = !0;
const Ms = [];
function Be() {
  Ms.push(He), He = !1;
}
function Ke() {
  const e = Ms.pop();
  He = e === void 0 ? !0 : e;
}
function Co(e) {
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
class El {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class oo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!X || !He || X === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== X)
      n = this.activeLink = new El(X, this), X.deps ? (n.prevDep = X.depsTail, X.depsTail.nextDep = n, X.depsTail = n) : X.deps = X.depsTail = n, ks(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = X.depsTail, n.nextDep = void 0, X.depsTail.nextDep = n, X.depsTail = n, X.deps === n && (X.deps = r);
    }
    return process.env.NODE_ENV !== "production" && X.onTrack && X.onTrack(
      se(
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
    to();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            se(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      no();
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Wn = /* @__PURE__ */ new WeakMap(), St = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Mr = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), pn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ce(e, t, n) {
  if (He && X) {
    let r = Wn.get(e);
    r || Wn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new oo()), o.map = r, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Ze(e, t, n, r, o, s) {
  const i = Wn.get(e);
  if (!i) {
    dn++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : a.trigger());
  };
  if (to(), t === "clear")
    i.forEach(l);
  else {
    const a = R(e), u = a && eo(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((f, h) => {
        (h === "length" || h === pn || !nt(h) && h >= d) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(pn)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(St)), Dt(e) && l(i.get(Mr)));
          break;
        case "delete":
          a || (l(i.get(St)), Dt(e) && l(i.get(Mr)));
          break;
        case "set":
          Dt(e) && l(i.get(St));
          break;
      }
  }
  no();
}
function bl(e, t) {
  const n = Wn.get(e);
  return n && n.get(t);
}
function Rt(e) {
  const t = K(e);
  return t === e ? t : (ce(t, "iterate", pn), Oe(e) ? t : t.map(he));
}
function ur(e) {
  return ce(e = K(e), "iterate", pn), e;
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Nr(this, Symbol.iterator, he);
  },
  concat(...e) {
    return Rt(this).concat(
      ...e.map((t) => R(t) ? Rt(t) : t)
    );
  },
  entries() {
    return Nr(this, "entries", (e) => (e[1] = he(e[1]), e));
  },
  every(e, t) {
    return ot(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ot(this, "filter", e, t, (n) => n.map(he), arguments);
  },
  find(e, t) {
    return ot(this, "find", e, t, he, arguments);
  },
  findIndex(e, t) {
    return ot(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ot(this, "findLast", e, t, he, arguments);
  },
  findLastIndex(e, t) {
    return ot(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ot(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return wr(this, "includes", e);
  },
  indexOf(...e) {
    return wr(this, "indexOf", e);
  },
  join(e) {
    return Rt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return wr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ot(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return zt(this, "pop");
  },
  push(...e) {
    return zt(this, "push", e);
  },
  reduce(e, ...t) {
    return To(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return To(this, "reduceRight", e, t);
  },
  shift() {
    return zt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ot(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return zt(this, "splice", e);
  },
  toReversed() {
    return Rt(this).toReversed();
  },
  toSorted(e) {
    return Rt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Rt(this).toSpliced(...e);
  },
  unshift(...e) {
    return zt(this, "unshift", e);
  },
  values() {
    return Nr(this, "values", he);
  }
};
function Nr(e, t, n) {
  const r = ur(e), o = r[t]();
  return r !== e && !Oe(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const wl = Array.prototype;
function ot(e, t, n, r, o, s) {
  const i = ur(e), l = i !== e && !Oe(e), a = i[t];
  if (a !== wl[t]) {
    const f = a.apply(e, s);
    return l ? he(f) : f;
  }
  let u = n;
  i !== e && (l ? u = function(f, h) {
    return n.call(this, he(f), h, e);
  } : n.length > 2 && (u = function(f, h) {
    return n.call(this, f, h, e);
  }));
  const d = a.call(i, u, r);
  return l && o ? o(d) : d;
}
function To(e, t, n, r) {
  const o = ur(e);
  let s = n;
  return o !== e && (Oe(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, he(l), a, e);
  }), o[t](s, ...r);
}
function wr(e, t, n) {
  const r = K(e);
  ce(r, "iterate", pn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && hn(n[0]) ? (n[0] = K(n[0]), r[t](...n)) : o;
}
function zt(e, t, n = []) {
  Be(), to();
  const r = K(e)[t].apply(e, n);
  return no(), Ke(), r;
}
const Ol = /* @__PURE__ */ at("__proto__,__v_isRef,__isVue"), $s = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(nt)
);
function xl(e) {
  nt(e) || (e = String(e));
  const t = K(this);
  return ce(t, "has", e), t.hasOwnProperty(e);
}
class js {
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
      return r === (o ? s ? Ks : Bs : s ? Us : Hs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = R(t);
    if (!o) {
      let a;
      if (i && (a = Nl[n]))
        return a;
      if (n === "hasOwnProperty")
        return xl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      le(t) ? t : r
    );
    return (nt(n) ? $s.has(n) : Ol(n)) || (o || ce(t, "get", n), s) ? l : le(l) ? i && eo(n) ? l : l.value : Q(l) ? o ? Jn(l) : Jt(l) : l;
  }
}
class Fs extends js {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = We(s);
      if (!Oe(r) && !We(r) && (s = K(s), r = K(r)), !R(t) && le(s) && !le(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = R(t) && eo(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      r,
      le(t) ? t : o
    );
    return t === K(o) && (i ? gt(r, s) && Ze(t, "set", n, r, s) : Ze(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = q(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && Ze(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!nt(n) || !$s.has(n)) && ce(t, "has", n), r;
  }
  ownKeys(t) {
    return ce(
      t,
      "iterate",
      R(t) ? "length" : St
    ), Reflect.ownKeys(t);
  }
}
class Ls extends js {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ue(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ue(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Dl = /* @__PURE__ */ new Fs(), Sl = /* @__PURE__ */ new Ls(), Il = /* @__PURE__ */ new Fs(!0), Cl = /* @__PURE__ */ new Ls(!0), kr = (e) => e, Vn = (e) => Reflect.getPrototypeOf(e);
function Tl(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = K(o), i = Dt(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = o[e](...r), d = n ? kr : t ? Yn : he;
    return !t && ce(
      s,
      "iterate",
      a ? Mr : St
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = u.next();
        return h ? { value: f, done: h } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
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
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ue(
        `${ar(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vl(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      e || (gt(o, l) && ce(i, "get", o), ce(i, "get", l));
      const { has: a } = Vn(i), u = t ? kr : e ? Yn : he;
      if (a.call(i, o))
        return u(s.get(o));
      if (a.call(i, l))
        return u(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ce(K(o), "iterate", St), Reflect.get(o, "size", o);
    },
    has(o) {
      const s = this.__v_raw, i = K(s), l = K(o);
      return e || (gt(o, l) && ce(i, "has", o), ce(i, "has", l)), o === l ? s.has(o) : s.has(o) || s.has(l);
    },
    forEach(o, s) {
      const i = this, l = i.__v_raw, a = K(l), u = t ? kr : e ? Yn : he;
      return !e && ce(a, "iterate", St), l.forEach((d, f) => o.call(s, u(d), u(f), i));
    }
  };
  return se(
    n,
    e ? {
      add: An("add"),
      set: An("set"),
      delete: An("delete"),
      clear: An("clear")
    } : {
      add(o) {
        !t && !Oe(o) && !We(o) && (o = K(o));
        const s = K(this);
        return Vn(s).has.call(s, o) || (s.add(o), Ze(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Oe(s) && !We(s) && (s = K(s));
        const i = K(this), { has: l, get: a } = Vn(i);
        let u = l.call(i, o);
        u ? process.env.NODE_ENV !== "production" && Vo(i, l, o) : (o = K(o), u = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), u ? gt(s, d) && Ze(i, "set", o, s, d) : Ze(i, "add", o, s), this;
      },
      delete(o) {
        const s = K(this), { has: i, get: l } = Vn(s);
        let a = i.call(s, o);
        a ? process.env.NODE_ENV !== "production" && Vo(s, i, o) : (o = K(o), a = i.call(s, o));
        const u = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && Ze(s, "delete", o, void 0, u), d;
      },
      clear() {
        const o = K(this), s = o.size !== 0, i = process.env.NODE_ENV !== "production" ? Dt(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return s && Ze(
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
    n[o] = Tl(o, e, t);
  }), n;
}
function fr(e, t) {
  const n = Vl(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    q(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Al = {
  get: /* @__PURE__ */ fr(!1, !1)
}, Rl = {
  get: /* @__PURE__ */ fr(!1, !0)
}, Pl = {
  get: /* @__PURE__ */ fr(!0, !1)
}, Ml = {
  get: /* @__PURE__ */ fr(!0, !0)
};
function Vo(e, t, n) {
  const r = K(n);
  if (r !== n && t.call(e, r)) {
    const o = Qr(e);
    Ue(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Hs = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap();
function kl(e) {
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
function $l(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kl(Qr(e));
}
function Jt(e) {
  return We(e) ? e : dr(
    e,
    !1,
    Dl,
    Al,
    Hs
  );
}
function jl(e) {
  return dr(
    e,
    !1,
    Il,
    Rl,
    Us
  );
}
function Jn(e) {
  return dr(
    e,
    !0,
    Sl,
    Pl,
    Bs
  );
}
function Qe(e) {
  return dr(
    e,
    !0,
    Cl,
    Ml,
    Ks
  );
}
function dr(e, t, n, r, o) {
  if (!Q(e))
    return process.env.NODE_ENV !== "production" && Ue(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = $l(e);
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
function It(e) {
  return We(e) ? It(e.__v_raw) : !!(e && e.__v_isReactive);
}
function We(e) {
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
function Fl(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && fn(e, "__v_skip", !0), e;
}
const he = (e) => Q(e) ? Jt(e) : e, Yn = (e) => Q(e) ? Jn(e) : e;
function le(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function je(e) {
  return Ll(e, !1);
}
function Ll(e, t) {
  return le(e) ? e : new Hl(e, t);
}
class Hl {
  constructor(t, n) {
    this.dep = new oo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : K(t), this._value = n ? t : he(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Oe(t) || We(t);
    t = r ? t : K(t), gt(t, n) && (this._rawValue = t, this._value = r ? t : he(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function _e(e) {
  return le(e) ? e.value : e;
}
const Ul = {
  get: (e, t, n) => t === "__v_raw" ? e : _e(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return le(o) && !le(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ws(e) {
  return It(e) ? e : new Proxy(e, Ul);
}
function Bl(e) {
  process.env.NODE_ENV !== "production" && !hn(e) && Ue("toRefs() expects a reactive object but received a plain one.");
  const t = R(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Wl(e, n);
  return t;
}
class Kl {
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
    return bl(K(this._object), this._key);
  }
}
function Wl(e, t, n) {
  const r = e[t];
  return le(r) ? r : new Kl(e, t, n);
}
class Jl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new oo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    X !== this)
      return Vs(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ps(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ue("Write operation failed: computed value is readonly");
  }
}
function Yl(e, t, n = !1) {
  let r, o;
  j(e) ? r = e : (r = e.get, o = e.set);
  const s = new Jl(r, o, n);
  return process.env.NODE_ENV, s;
}
const Rn = {}, qn = /* @__PURE__ */ new WeakMap();
let Ot;
function ql(e, t = !1, n = Ot) {
  if (n) {
    let r = qn.get(n);
    r || qn.set(n, r = []), r.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ue(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Gl(e, t, n = Z) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, u = (w) => {
    (n.onWarn || Ue)(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (w) => o ? w : Oe(w) || o === !1 || o === 0 ? lt(w, 1) : lt(w);
  let f, h, g, S, A = !1, J = !1;
  if (le(e) ? (h = () => e.value, A = Oe(e)) : It(e) ? (h = () => d(e), A = !0) : R(e) ? (J = !0, A = e.some((w) => It(w) || Oe(w)), h = () => e.map((w) => {
    if (le(w))
      return w.value;
    if (It(w))
      return d(w);
    if (j(w))
      return a ? a(w, 2) : w();
    process.env.NODE_ENV !== "production" && u(w);
  })) : j(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (g) {
      Be();
      try {
        g();
      } finally {
        Ke();
      }
    }
    const w = Ot;
    Ot = f;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      Ot = w;
    }
  } : (h = ue, process.env.NODE_ENV !== "production" && u(e)), t && o) {
    const w = h, _ = o === !0 ? 1 / 0 : o;
    h = () => lt(w(), _);
  }
  const F = vl(), $ = () => {
    f.stop(), F && F.active && Xr(F.effects, f);
  };
  if (s && t) {
    const w = t;
    t = (..._) => {
      w(..._), $();
    };
  }
  let V = J ? new Array(e.length).fill(Rn) : Rn;
  const U = (w) => {
    if (!(!(f.flags & 1) || !f.dirty && !w))
      if (t) {
        const _ = f.run();
        if (o || A || (J ? _.some((v, x) => gt(v, V[x])) : gt(_, V))) {
          g && g();
          const v = Ot;
          Ot = f;
          try {
            const x = [
              _,
              // pass undefined as the old value when it's changed for the first time
              V === Rn ? void 0 : J && V[0] === Rn ? [] : V,
              S
            ];
            V = _, a ? a(t, 3, x) : (
              // @ts-expect-error
              t(...x)
            );
          } finally {
            Ot = v;
          }
        }
      } else
        f.run();
  };
  return l && l(U), f = new Cs(h), f.scheduler = i ? () => i(U, !1) : U, S = (w) => ql(w, !1, f), g = f.onStop = () => {
    const w = qn.get(f);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const _ of w) _();
      qn.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? r ? U(!0) : V = f.run() : i ? i(U.bind(null, !0), !0) : f.run(), $.pause = f.pause.bind(f), $.resume = f.resume.bind(f), $.stop = $, $;
}
function lt(e, t = 1 / 0, n) {
  if (t <= 0 || !Q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, le(e))
    lt(e.value, t, n);
  else if (R(e))
    for (let r = 0; r < e.length; r++)
      lt(e[r], t, n);
  else if (sr(e) || Dt(e))
    e.forEach((r) => {
      lt(r, t, n);
    });
  else if (ir(e)) {
    for (const r in e)
      lt(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && lt(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ct = [];
function Mn(e) {
  Ct.push(e);
}
function kn() {
  Ct.pop();
}
let Or = !1;
function I(e, ...t) {
  if (Or) return;
  Or = !0, Be();
  const n = Ct.length ? Ct[Ct.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = zl();
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
          ({ vnode: s }) => `at <${yr(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...Xl(o)), console.warn(...s);
  }
  Ke(), Or = !1;
}
function zl() {
  let e = Ct[Ct.length - 1];
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
function Xl(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Zl(n));
  }), t;
}
function Zl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${yr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Ql(e.props), s] : [o + s];
}
function Ql(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Js(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Js(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : le(t) ? (t = Js(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : j(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
}
const so = {
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
function rt(e, t, n, r) {
  if (j(e)) {
    const o = qt(e, t, n, r);
    return o && Zr(o) && o.catch((s) => {
      Dn(s, t, n);
    }), o;
  }
  if (R(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(rt(e[s], t, n, r));
    return o;
  } else process.env.NODE_ENV !== "production" && I(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Dn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Z;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = process.env.NODE_ENV !== "production" ? so[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Be(), qt(s, null, 10, [
        e,
        a,
        u
      ]), Ke();
      return;
    }
  }
  ea(e, n, o, r, i);
}
function ea(e, t, n, r = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const s = so[t];
    if (n && Mn(n), I(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && kn(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const Ne = [];
let Xe = -1;
const Bt = [];
let dt = null, $t = 0;
const Ys = /* @__PURE__ */ Promise.resolve();
let Gn = null;
const ta = 100;
function pr(e) {
  const t = Gn || Ys;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function na(e) {
  let t = Xe + 1, n = Ne.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Ne[r], s = gn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function hr(e) {
  if (!(e.flags & 1)) {
    const t = gn(e), n = Ne[Ne.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= gn(n) ? Ne.push(e) : Ne.splice(na(t), 0, e), e.flags |= 1, qs();
  }
}
function qs() {
  Gn || (Gn = Ys.then(Xs));
}
function Gs(e) {
  R(e) ? Bt.push(...e) : dt && e.id === -1 ? dt.splice($t + 1, 0, e) : e.flags & 1 || (Bt.push(e), e.flags |= 1), qs();
}
function Ao(e, t, n = Xe + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ne.length; n++) {
    const r = Ne[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && io(t, r))
        continue;
      Ne.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function zs(e) {
  if (Bt.length) {
    const t = [...new Set(Bt)].sort(
      (n, r) => gn(n) - gn(r)
    );
    if (Bt.length = 0, dt) {
      dt.push(...t);
      return;
    }
    for (dt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $t = 0; $t < dt.length; $t++) {
      const n = dt[$t];
      process.env.NODE_ENV !== "production" && io(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    dt = null, $t = 0;
  }
}
const gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Xs(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => io(e, n) : ue;
  try {
    for (Xe = 0; Xe < Ne.length; Xe++) {
      const n = Ne[Xe];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), qt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Xe < Ne.length; Xe++) {
      const n = Ne[Xe];
      n && (n.flags &= -2);
    }
    Xe = -1, Ne.length = 0, zs(e), Gn = null, (Ne.length || Bt.length) && Xs(e);
  }
}
function io(e, t) {
  const n = e.get(t) || 0;
  if (n > ta) {
    const r = t.i, o = r && Vi(r.type);
    return Dn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let et = !1;
const $n = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (xn().__VUE_HMR_RUNTIME__ = {
  createRecord: xr(Zs),
  rerender: xr(sa),
  reload: xr(ia)
});
const Vt = /* @__PURE__ */ new Map();
function ra(e) {
  const t = e.type.__hmrId;
  let n = Vt.get(t);
  n || (Zs(t, e.type), n = Vt.get(t)), n.instances.add(e);
}
function oa(e) {
  Vt.get(e.type.__hmrId).instances.delete(e);
}
function Zs(e, t) {
  return Vt.has(e) ? !1 : (Vt.set(e, {
    initialDef: zn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function zn(e) {
  return Ai(e) ? e.__vccOpts : e;
}
function sa(e, t) {
  const n = Vt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, zn(r.type).render = t), r.renderCache = [], et = !0, r.update(), et = !1;
  }));
}
function ia(e, t) {
  const n = Vt.get(e);
  if (!n) return;
  t = zn(t), Ro(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = zn(s.type);
    let l = $n.get(i);
    l || (i !== n.initialDef && Ro(i, t), $n.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? hr(() => {
      et = !0, s.parent.update(), et = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Gs(() => {
    $n.clear();
  });
}
function Ro(e, t) {
  se(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function xr(e) {
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
let Le, tn = [], $r = !1;
function Sn(e, ...t) {
  Le ? Le.emit(e, ...t) : $r || tn.push({ event: e, args: t });
}
function lo(e, t) {
  var n, r;
  Le = e, Le ? (Le.enabled = !0, tn.forEach(({ event: o, args: s }) => Le.emit(o, ...s)), tn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    lo(s, t);
  }), setTimeout(() => {
    Le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $r = !0, tn = []);
  }, 3e3)) : ($r = !0, tn = []);
}
function la(e, t) {
  Sn("app:init", e, t, {
    Fragment: we,
    Text: In,
    Comment: Me,
    Static: Ln
  });
}
function aa(e) {
  Sn("app:unmount", e);
}
const ca = /* @__PURE__ */ ao(
  "component:added"
  /* COMPONENT_ADDED */
), Qs = /* @__PURE__ */ ao(
  "component:updated"
  /* COMPONENT_UPDATED */
), ua = /* @__PURE__ */ ao(
  "component:removed"
  /* COMPONENT_REMOVED */
), fa = (e) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(e) && ua(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ao(e) {
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
const da = /* @__PURE__ */ ei(
  "perf:start"
  /* PERFORMANCE_START */
), pa = /* @__PURE__ */ ei(
  "perf:end"
  /* PERFORMANCE_END */
);
function ei(e) {
  return (t, n, r) => {
    Sn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function ha(e, t, n) {
  Sn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ve = null, ti = null;
function Xn(e) {
  const t = ve;
  return ve = e, ti = e && e.type.__scopeId || null, t;
}
function ga(e, t = ve, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Jo(-1);
    const s = Xn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      Xn(s), r._d && Jo(1);
    }
    return process.env.NODE_ENV !== "production" && Qs(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ni(e) {
  el(e) && I("Do not use built-in directive ids as custom directive id: " + e);
}
function Po(e, t) {
  if (ve === null)
    return process.env.NODE_ENV !== "production" && I("withDirectives can only be used inside render functions."), e;
  const n = vr(ve), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = Z] = t[o];
    s && (j(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && lt(i), r.push({
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
function Et(e, t, n, r) {
  const o = e.dirs, s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[r];
    a && (Be(), rt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ke());
  }
}
const ma = Symbol("_vte"), _a = (e) => e.__isTeleport;
function co(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, co(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ri(e, t) {
  return j(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    se({ name: e.name }, t, { setup: e })
  ) : e;
}
function oi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const va = /* @__PURE__ */ new WeakSet();
function ln(e, t, n, r, o = !1) {
  if (R(e)) {
    e.forEach(
      (S, A) => ln(
        S,
        t && (R(t) ? t[A] : t),
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
  const s = r.shapeFlag & 4 ? vr(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    I(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = l.refs === Z ? l.refs = {} : l.refs, f = l.setupState, h = K(f), g = f === Z ? () => !1 : (S) => process.env.NODE_ENV !== "production" && (q(h, S) && !le(h[S]) && I(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), va.has(h[S])) ? !1 : q(h, S);
  if (u != null && u !== a && (re(u) ? (d[u] = null, g(u) && (f[u] = null)) : le(u) && (u.value = null)), j(a))
    qt(a, l, 12, [i, d]);
  else {
    const S = re(a), A = le(a);
    if (S || A) {
      const J = () => {
        if (e.f) {
          const F = S ? g(a) ? f[a] : d[a] : a.value;
          o ? R(F) && Xr(F, s) : R(F) ? F.includes(s) || F.push(s) : S ? (d[a] = [s], g(a) && (f[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else S ? (d[a] = i, g(a) && (f[a] = i)) : A ? (a.value = i, e.k && (d[e.k] = i)) : process.env.NODE_ENV !== "production" && I("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (J.id = -1, Re(J, n)) : J();
    } else process.env.NODE_ENV !== "production" && I("Invalid template ref type:", a, `(${typeof a})`);
  }
}
xn().requestIdleCallback;
xn().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, uo = (e) => e.type.__isKeepAlive;
function ya(e, t) {
  si(e, "a", t);
}
function Ea(e, t) {
  si(e, "da", t);
}
function si(e, t, n = fe) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (gr(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      uo(o.parent.vnode) && ba(r, t, n, o), o = o.parent;
  }
}
function ba(e, t, n, r) {
  const o = gr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  po(() => {
    Xr(r[t], o);
  }, n);
}
function gr(e, t, n = fe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Be();
      const l = Cn(n), a = rt(t, n, e, i);
      return l(), Ke(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const o = wt(so[e].replace(/ hook$/, ""));
    I(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ct = (e) => (t, n = fe) => {
  (!_n || e === "sp") && gr(e, (...r) => t(...r), n);
}, Na = ct("bm"), fo = ct("m"), wa = ct(
  "bu"
), Oa = ct("u"), xa = ct(
  "bum"
), po = ct("um"), Da = ct(
  "sp"
), Sa = ct("rtg"), Ia = ct("rtc");
function Ca(e, t = fe) {
  gr("ec", e, t);
}
const Ta = Symbol.for("v-ndc");
function Dr(e, t, n, r) {
  let o;
  const s = n, i = R(e);
  if (i || re(e)) {
    const l = i && It(e);
    let a = !1, u = !1;
    l && (a = !Oe(e), u = We(e), e = ur(e)), o = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      o[d] = t(
        a ? u ? Yn(he(e[d])) : he(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && I(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, s);
  } else if (Q(e))
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
const jr = (e) => e ? Ci(e) ? vr(e) : jr(e.parent) : null, Tt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ se(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Qe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Qe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Qe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Qe(e.refs) : e.refs,
    $parent: (e) => jr(e.parent),
    $root: (e) => jr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      hr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pr.bind(e.proxy)),
    $watch: (e) => cc.bind(e)
  })
), ho = (e) => e === "_" || e === "$", Sr = (e, t) => e !== Z && !e.__isScriptSetup && q(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const g = i[t];
      if (g !== void 0)
        switch (g) {
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
        if (Sr(r, t))
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
        Fr && (i[t] = 0);
      }
    }
    const d = Tt[t];
    let f, h;
    if (d)
      return t === "$attrs" ? (ce(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && er()) : process.env.NODE_ENV !== "production" && t === "$slots" && ce(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Z && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, q(h, t)
    )
      return h[t];
    process.env.NODE_ENV !== "production" && ve && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Z && ho(t[0]) && q(o, t) ? I(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ve && I(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Sr(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && q(o, t) ? (I(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Z && q(r, t) ? (r[t] = n, !0) : q(e.props, t) ? (process.env.NODE_ENV !== "production" && I(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && I(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let l;
    return !!n[i] || e !== Z && q(e, i) || Sr(t, i) || (l = s[0]) && q(l, i) || q(r, i) || q(Tt, i) || q(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (ii.ownKeys = (e) => (I(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Va(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Tt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Tt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ue
    });
  }), t;
}
function Aa(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: ue
    });
  });
}
function Ra(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(K(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (ho(r[0])) {
        I(
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
        set: ue
      });
    }
  });
}
function Mo(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? I(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Fr = !0;
function Ma(e) {
  const t = ai(e), n = e.proxy, r = e.ctx;
  Fr = !1, t.beforeCreate && ko(t.beforeCreate, e, "bc");
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
    mounted: h,
    beforeUpdate: g,
    updated: S,
    activated: A,
    deactivated: J,
    beforeDestroy: F,
    beforeUnmount: $,
    destroyed: V,
    unmounted: U,
    render: w,
    renderTracked: _,
    renderTriggered: v,
    errorCaptured: x,
    serverPrefetch: M,
    // public API
    expose: z,
    inheritAttrs: de,
    // assets
    components: ne,
    directives: oe,
    filters: ye
  } = t, xe = process.env.NODE_ENV !== "production" ? Pa() : null;
  if (process.env.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const Y in B)
        xe("Props", Y);
  }
  if (u && ka(u, r, xe), i)
    for (const B in i) {
      const Y = i[B];
      j(Y) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, B, {
        value: Y.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[B] = Y.bind(n), process.env.NODE_ENV !== "production" && xe("Methods", B)) : process.env.NODE_ENV !== "production" && I(
        `Method "${B}" has type "${typeof Y}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !j(o) && I(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && Zr(B) && I(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Q(B))
      process.env.NODE_ENV !== "production" && I("data() should return an object.");
    else if (e.data = Jt(B), process.env.NODE_ENV !== "production")
      for (const Y in B)
        xe("Data", Y), ho(Y[0]) || Object.defineProperty(r, Y, {
          configurable: !0,
          enumerable: !0,
          get: () => B[Y],
          set: ue
        });
  }
  if (Fr = !0, s)
    for (const B in s) {
      const Y = s[B], $e = j(Y) ? Y.bind(n, n) : j(Y.get) ? Y.get.bind(n, n) : ue;
      process.env.NODE_ENV !== "production" && $e === ue && I(`Computed property "${B}" has no getter.`);
      const _t = !j(Y) && j(Y.set) ? Y.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        I(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : ue, vt = yo({
        get: $e,
        set: _t
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (ut) => vt.value = ut
      }), process.env.NODE_ENV !== "production" && xe("Computed", B);
    }
  if (l)
    for (const B in l)
      li(l[B], r, n, B);
  if (a) {
    const B = j(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach((Y) => {
      Ua(Y, B[Y]);
    });
  }
  d && ko(d, e, "c");
  function ae(B, Y) {
    R(Y) ? Y.forEach(($e) => B($e.bind(n))) : Y && B(Y.bind(n));
  }
  if (ae(Na, f), ae(fo, h), ae(wa, g), ae(Oa, S), ae(ya, A), ae(Ea, J), ae(Ca, x), ae(Ia, _), ae(Sa, v), ae(xa, $), ae(po, U), ae(Da, M), R(z))
    if (z.length) {
      const B = e.exposed || (e.exposed = {});
      z.forEach((Y) => {
        Object.defineProperty(B, Y, {
          get: () => n[Y],
          set: ($e) => n[Y] = $e
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === ue && (e.render = w), de != null && (e.inheritAttrs = de), ne && (e.components = ne), oe && (e.directives = oe), M && oi(e);
}
function ka(e, t, n = ue) {
  R(e) && (e = Lr(e));
  for (const r in e) {
    const o = e[r];
    let s;
    Q(o) ? "default" in o ? s = jn(
      o.from || r,
      o.default,
      !0
    ) : s = jn(o.from || r) : s = jn(o), le(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, process.env.NODE_ENV !== "production" && n("Inject", r);
  }
}
function ko(e, t, n) {
  rt(
    R(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, r) {
  let o = r.includes(".") ? Ei(n, r) : () => n[r];
  if (re(e)) {
    const s = t[e];
    j(s) ? cn(o, s) : process.env.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e}"`, s);
  } else if (j(e))
    cn(o, e.bind(n));
  else if (Q(e))
    if (R(e))
      e.forEach((s) => li(s, t, n, r));
    else {
      const s = j(e.handler) ? e.handler.bind(n) : t[e.handler];
      j(s) ? cn(o, s, e) : process.env.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else process.env.NODE_ENV !== "production" && I(`Invalid watch option: "${r}"`, e);
}
function ai(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (u) => Zn(a, u, i, !0)
  ), Zn(a, t, i)), Q(t) && s.set(t, a), a;
}
function Zn(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Zn(e, s, n, !0), o && o.forEach(
    (i) => Zn(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && I(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = $a[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const $a = {
  data: $o,
  props: jo,
  emits: jo,
  // objects
  methods: nn,
  computed: nn,
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
  components: nn,
  directives: nn,
  // watch
  watch: Fa,
  // provide / inject
  provide: $o,
  inject: ja
};
function $o(e, t) {
  return t ? e ? function() {
    return se(
      j(e) ? e.call(this, this) : e,
      j(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ja(e, t) {
  return nn(Lr(e), Lr(t));
}
function Lr(e) {
  if (R(e)) {
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
function nn(e, t) {
  return e ? se(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function jo(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : se(
    /* @__PURE__ */ Object.create(null),
    Mo(e),
    Mo(t ?? {})
  ) : t;
}
function Fa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = se(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = be(e[r], t[r]);
  return n;
}
function ci() {
  return {
    app: null,
    config: {
      isNativeTag: Zi,
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
let La = 0;
function Ha(e, t) {
  return function(r, o = null) {
    j(r) || (r = se({}, r)), o != null && !Q(o) && (process.env.NODE_ENV !== "production" && I("root props passed to app.mount() must be an object."), o = null);
    const s = ci(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = s.app = {
      _uid: La++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: zo,
      get config() {
        return s.config;
      },
      set config(d) {
        process.env.NODE_ENV !== "production" && I(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return i.has(d) ? process.env.NODE_ENV !== "production" && I("Plugin has already been applied to target app.") : d && j(d.install) ? (i.add(d), d.install(u, ...f)) : j(d) ? (i.add(d), d(u, ...f)) : process.env.NODE_ENV !== "production" && I(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return s.mixins.includes(d) ? process.env.NODE_ENV !== "production" && I(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), u;
      },
      component(d, f) {
        return process.env.NODE_ENV !== "production" && Wr(d, s.config), f ? (process.env.NODE_ENV !== "production" && s.components[d] && I(`Component "${d}" has already been registered in target app.`), s.components[d] = f, u) : s.components[d];
      },
      directive(d, f) {
        return process.env.NODE_ENV !== "production" && ni(d), f ? (process.env.NODE_ENV !== "production" && s.directives[d] && I(`Directive "${d}" has already been registered in target app.`), s.directives[d] = f, u) : s.directives[d];
      },
      mount(d, f, h) {
        if (a)
          process.env.NODE_ENV !== "production" && I(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && d.__vue_app__ && I(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const g = u._ceVNode || tt(r, o);
          return g.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            const S = mt(g);
            S.el = null, e(S, d, h);
          }), e(g, d, h), a = !0, u._container = d, d.__vue_app__ = u, process.env.NODE_ENV !== "production" && (u._instance = g.component, la(u, zo)), vr(g.component);
        }
      },
      onUnmount(d) {
        process.env.NODE_ENV !== "production" && typeof d != "function" && I(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (rt(
          l,
          u._instance,
          16
        ), e(null, u._container), process.env.NODE_ENV !== "production" && (u._instance = null, aa(u)), delete u._container.__vue_app__) : process.env.NODE_ENV !== "production" && I("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return process.env.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? I(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : I(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = f, u;
      },
      runWithContext(d) {
        const f = Kt;
        Kt = u;
        try {
          return d();
        } finally {
          Kt = f;
        }
      }
    };
    return u;
  };
}
let Kt = null;
function Ua(e, t) {
  if (!fe)
    process.env.NODE_ENV !== "production" && I("provide() can only be used inside setup().");
  else {
    let n = fe.provides;
    const r = fe.parent && fe.parent.provides;
    r === n && (n = fe.provides = Object.create(r)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const r = fe || ve;
  if (r || Kt) {
    let o = Kt ? Kt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && j(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && I(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && I("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ba(e, t, n, r = !1) {
  const o = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && gi(t || {}, o, e), n ? e.props = r ? o : jl(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function Ka(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Wa(e, t, n, r) {
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
    !(process.env.NODE_ENV !== "production" && Ka(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let h = d[f];
        if (mr(e.emitsOptions, h))
          continue;
        const g = t[h];
        if (a)
          if (q(s, h))
            g !== s[h] && (s[h] = g, u = !0);
          else {
            const S = Ve(h);
            o[S] = Hr(
              a,
              l,
              S,
              g,
              e,
              !1
            );
          }
        else
          g !== s[h] && (s[h] = g, u = !0);
      }
    }
  } else {
    pi(e, t, o, s) && (u = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !q(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Te(f)) === f || !q(t, d))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[f] = Hr(
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
  u && Ze(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && gi(t || {}, o, e);
}
function pi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (rn(a))
        continue;
      const u = t[a];
      let d;
      o && q(o, d = Ve(a)) ? !s || !s.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : mr(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, i = !0);
    }
  if (s) {
    const a = K(n), u = l || Z;
    for (let d = 0; d < s.length; d++) {
      const f = s[d];
      n[f] = Hr(
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
function Hr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && j(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const d = Cn(o);
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
    ] && (r === "" || r === Te(n)) && (r = !0));
  }
  return r;
}
const Ja = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
  const r = n ? Ja : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!j(e)) {
    const d = (f) => {
      a = !0;
      const [h, g] = hi(f, t, !0);
      se(i, h), g && l.push(...g);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return Q(e) && r.set(e, Lt), Lt;
  if (R(s))
    for (let d = 0; d < s.length; d++) {
      process.env.NODE_ENV !== "production" && !re(s[d]) && I("props must be strings when using array syntax.", s[d]);
      const f = Ve(s[d]);
      Fo(f) && (i[f] = Z);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Q(s) && I("invalid props options", s);
    for (const d in s) {
      const f = Ve(d);
      if (Fo(f)) {
        const h = s[d], g = i[f] = R(h) || j(h) ? { type: h } : se({}, h), S = g.type;
        let A = !1, J = !0;
        if (R(S))
          for (let F = 0; F < S.length; ++F) {
            const $ = S[F], V = j($) && $.name;
            if (V === "Boolean") {
              A = !0;
              break;
            } else V === "String" && (J = !1);
          }
        else
          A = j(S) && S.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = A, g[
          1
          /* shouldCastTrue */
        ] = J, (A || q(g, "default")) && l.push(f);
      }
    }
  }
  const u = [i, l];
  return Q(e) && r.set(e, u), u;
}
function Fo(e) {
  return e[0] !== "$" && !rn(e) ? !0 : (process.env.NODE_ENV !== "production" && I(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ya(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const r = K(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Ve(i));
  for (const i in o) {
    let l = o[i];
    l != null && qa(
      i,
      r[i],
      l,
      process.env.NODE_ENV !== "production" ? Qe(r) : r,
      !s.includes(i)
    );
  }
}
function qa(e, t, n, r, o) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    I('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let u = !1;
      const d = R(s) ? s : [s], f = [];
      for (let h = 0; h < d.length && !u; h++) {
        const { valid: g, expectedType: S } = za(t, d[h]);
        f.push(S || ""), u = g;
      }
      if (!u) {
        I(Xa(e, t, f));
        return;
      }
    }
    l && !l(t, r) && I('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ga = /* @__PURE__ */ at(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function za(e, t) {
  let n;
  const r = Ya(t);
  if (r === "null")
    n = e === null;
  else if (Ga(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = Q(e) : r === "Array" ? n = R(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Xa(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(ar).join(" | ")}`;
  const o = n[0], s = Qr(t), i = Lo(t, o), l = Lo(t, s);
  return n.length === 1 && Ho(o) && !Za(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Ho(s) && (r += `with value ${l}.`), r;
}
function Lo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ho(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Za(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const go = (e) => e[0] === "_" || e === "$stable", mo = (e) => R(e) ? e.map(Fe) : [Fe(e)], Qa = (e, t, n) => {
  if (t._n)
    return t;
  const r = ga((...o) => (process.env.NODE_ENV !== "production" && fe && !(n === null && ve) && !(n && n.root !== fe.root) && I(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), mo(t(...o))), n);
  return r._c = !1, r;
}, mi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (go(o)) continue;
    const s = e[o];
    if (j(s))
      t[o] = Qa(o, s, r);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && I(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = mo(s);
      t[o] = () => i;
    }
  }
}, _i = (e, t) => {
  process.env.NODE_ENV !== "production" && !uo(e.vnode) && I(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = mo(t);
  e.slots.default = () => n;
}, Ur = (e, t, n) => {
  for (const r in t)
    (n || !go(r)) && (e[r] = t[r]);
}, ec = (e, t, n) => {
  const r = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && fn(r, "__", o, !0);
    const s = t._;
    s ? (Ur(r, t, n), n && fn(r, "_", s, !0)) : mi(t, r);
  } else t && _i(e, t);
}, tc = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Z;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && et ? (Ur(o, t, n), Ze(e, "set", "$slots")) : n && l === 1 ? s = !1 : Ur(o, t, n) : (s = !t.$stable, mi(t, o)), i = t;
  } else t && (_i(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !go(l) && i[l] == null && delete o[l];
};
let Xt, ht;
function Pt(e, t) {
  e.appContext.config.performance && Qn() && ht.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && da(e, t, Qn() ? ht.now() : Date.now());
}
function Mt(e, t) {
  if (e.appContext.config.performance && Qn()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    ht.mark(r), ht.measure(
      `<${yr(e, e.type)}> ${t}`,
      n,
      r
    ), ht.clearMarks(n), ht.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && pa(e, t, Qn() ? ht.now() : Date.now());
}
function Qn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, ht = window.performance) : Xt = !1), Xt;
}
function nc() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Re = mc;
function rc(e) {
  return oc(e);
}
function oc(e, t) {
  nc();
  const n = xn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && lo(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    nextSibling: h,
    setScopeId: g = ue,
    insertStaticContent: S
  } = e, A = (c, p, m, b = null, y = null, E = null, C = void 0, D = null, O = process.env.NODE_ENV !== "production" && et ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (b = Je(c), W(c, y, E, !0), c = null), p.patchFlag === -2 && (O = !1, p.dynamicChildren = null);
    const { type: N, ref: k, shapeFlag: T } = p;
    switch (N) {
      case In:
        J(c, p, m, b);
        break;
      case Me:
        F(c, p, m, b);
        break;
      case Ln:
        c == null ? $(p, m, b, C) : process.env.NODE_ENV !== "production" && V(c, p, m, C);
        break;
      case we:
        oe(
          c,
          p,
          m,
          b,
          y,
          E,
          C,
          D,
          O
        );
        break;
      default:
        T & 1 ? _(
          c,
          p,
          m,
          b,
          y,
          E,
          C,
          D,
          O
        ) : T & 6 ? ye(
          c,
          p,
          m,
          b,
          y,
          E,
          C,
          D,
          O
        ) : T & 64 || T & 128 ? N.process(
          c,
          p,
          m,
          b,
          y,
          E,
          C,
          D,
          O,
          yt
        ) : process.env.NODE_ENV !== "production" && I("Invalid VNode type:", N, `(${typeof N})`);
    }
    k != null && y ? ln(k, c && c.ref, E, p || c, !p) : k == null && c && c.ref != null && ln(c.ref, null, E, c, !0);
  }, J = (c, p, m, b) => {
    if (c == null)
      r(
        p.el = l(p.children),
        m,
        b
      );
    else {
      const y = p.el = c.el;
      p.children !== c.children && u(y, p.children);
    }
  }, F = (c, p, m, b) => {
    c == null ? r(
      p.el = a(p.children || ""),
      m,
      b
    ) : p.el = c.el;
  }, $ = (c, p, m, b) => {
    [c.el, c.anchor] = S(
      c.children,
      p,
      m,
      b,
      c.el,
      c.anchor
    );
  }, V = (c, p, m, b) => {
    if (p.children !== c.children) {
      const y = h(c.anchor);
      w(c), [p.el, p.anchor] = S(
        p.children,
        m,
        y,
        b
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, U = ({ el: c, anchor: p }, m, b) => {
    let y;
    for (; c && c !== p; )
      y = h(c), r(c, m, b), c = y;
    r(p, m, b);
  }, w = ({ el: c, anchor: p }) => {
    let m;
    for (; c && c !== p; )
      m = h(c), o(c), c = m;
    o(p);
  }, _ = (c, p, m, b, y, E, C, D, O) => {
    p.type === "svg" ? C = "svg" : p.type === "math" && (C = "mathml"), c == null ? v(
      p,
      m,
      b,
      y,
      E,
      C,
      D,
      O
    ) : z(
      c,
      p,
      y,
      E,
      C,
      D,
      O
    );
  }, v = (c, p, m, b, y, E, C, D) => {
    let O, N;
    const { props: k, shapeFlag: T, transition: P, dirs: L } = c;
    if (O = c.el = i(
      c.type,
      E,
      k && k.is,
      k
    ), T & 8 ? d(O, c.children) : T & 16 && M(
      c.children,
      O,
      null,
      b,
      y,
      Ir(c, E),
      C,
      D
    ), L && Et(c, null, b, "created"), x(O, c, c.scopeId, C, b), k) {
      for (const te in k)
        te !== "value" && !rn(te) && s(O, te, null, k[te], E, b);
      "value" in k && s(O, "value", null, k.value, E), (N = k.onVnodeBeforeMount) && ze(N, b, c);
    }
    process.env.NODE_ENV !== "production" && (fn(O, "__vnode", c, !0), fn(O, "__vueParentComponent", b, !0)), L && Et(c, null, b, "beforeMount");
    const G = sc(y, P);
    G && P.beforeEnter(O), r(O, p, m), ((N = k && k.onVnodeMounted) || G || L) && Re(() => {
      N && ze(N, b, c), G && P.enter(O), L && Et(c, null, b, "mounted");
    }, y);
  }, x = (c, p, m, b, y) => {
    if (m && g(c, m), b)
      for (let E = 0; E < b.length; E++)
        g(c, b[E]);
    if (y) {
      let E = y.subTree;
      if (process.env.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = _o(E.children) || E), p === E || wi(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const C = y.vnode;
        x(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          y.parent
        );
      }
    }
  }, M = (c, p, m, b, y, E, C, D, O = 0) => {
    for (let N = O; N < c.length; N++) {
      const k = c[N] = D ? pt(c[N]) : Fe(c[N]);
      A(
        null,
        k,
        p,
        m,
        b,
        y,
        E,
        C,
        D
      );
    }
  }, z = (c, p, m, b, y, E, C) => {
    const D = p.el = c.el;
    process.env.NODE_ENV !== "production" && (D.__vnode = p);
    let { patchFlag: O, dynamicChildren: N, dirs: k } = p;
    O |= c.patchFlag & 16;
    const T = c.props || Z, P = p.props || Z;
    let L;
    if (m && bt(m, !1), (L = P.onVnodeBeforeUpdate) && ze(L, m, p, c), k && Et(p, c, m, "beforeUpdate"), m && bt(m, !0), process.env.NODE_ENV !== "production" && et && (O = 0, C = !1, N = null), (T.innerHTML && P.innerHTML == null || T.textContent && P.textContent == null) && d(D, ""), N ? (de(
      c.dynamicChildren,
      N,
      D,
      m,
      b,
      Ir(p, y),
      E
    ), process.env.NODE_ENV !== "production" && Fn(c, p)) : C || $e(
      c,
      p,
      D,
      null,
      m,
      b,
      Ir(p, y),
      E,
      !1
    ), O > 0) {
      if (O & 16)
        ne(D, T, P, m, y);
      else if (O & 2 && T.class !== P.class && s(D, "class", null, P.class, y), O & 4 && s(D, "style", T.style, P.style, y), O & 8) {
        const G = p.dynamicProps;
        for (let te = 0; te < G.length; te++) {
          const ee = G[te], Se = T[ee], Ie = P[ee];
          (Ie !== Se || ee === "value") && s(D, ee, Se, Ie, y, m);
        }
      }
      O & 1 && c.children !== p.children && d(D, p.children);
    } else !C && N == null && ne(D, T, P, m, y);
    ((L = P.onVnodeUpdated) || k) && Re(() => {
      L && ze(L, m, p, c), k && Et(p, c, m, "updated");
    }, b);
  }, de = (c, p, m, b, y, E, C) => {
    for (let D = 0; D < p.length; D++) {
      const O = c[D], N = p[D], k = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(O, N) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? f(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      A(
        O,
        N,
        k,
        null,
        b,
        y,
        E,
        C,
        !0
      );
    }
  }, ne = (c, p, m, b, y) => {
    if (p !== m) {
      if (p !== Z)
        for (const E in p)
          !rn(E) && !(E in m) && s(
            c,
            E,
            p[E],
            null,
            y,
            b
          );
      for (const E in m) {
        if (rn(E)) continue;
        const C = m[E], D = p[E];
        C !== D && E !== "value" && s(c, E, D, C, y, b);
      }
      "value" in m && s(c, "value", p.value, m.value, y);
    }
  }, oe = (c, p, m, b, y, E, C, D, O) => {
    const N = p.el = c ? c.el : l(""), k = p.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: P, slotScopeIds: L } = p;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (et || T & 2048) && (T = 0, O = !1, P = null), L && (D = D ? D.concat(L) : L), c == null ? (r(N, m, b), r(k, m, b), M(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      k,
      y,
      E,
      C,
      D,
      O
    )) : T > 0 && T & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (de(
      c.dynamicChildren,
      P,
      m,
      y,
      E,
      C,
      D
    ), process.env.NODE_ENV !== "production" ? Fn(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || y && p === y.subTree) && Fn(
        c,
        p,
        !0
        /* shallow */
      )
    )) : $e(
      c,
      p,
      m,
      k,
      y,
      E,
      C,
      D,
      O
    );
  }, ye = (c, p, m, b, y, E, C, D, O) => {
    p.slotScopeIds = D, c == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      m,
      b,
      C,
      O
    ) : xe(
      p,
      m,
      b,
      y,
      E,
      C,
      O
    ) : ae(c, p, O);
  }, xe = (c, p, m, b, y, E, C) => {
    const D = c.component = xc(
      c,
      b,
      y
    );
    if (process.env.NODE_ENV !== "production" && D.type.__hmrId && ra(D), process.env.NODE_ENV !== "production" && (Mn(c), Pt(D, "mount")), uo(c) && (D.ctx.renderer = yt), process.env.NODE_ENV !== "production" && Pt(D, "init"), Sc(D, !1, C), process.env.NODE_ENV !== "production" && Mt(D, "init"), process.env.NODE_ENV !== "production" && et && (c.el = null), D.asyncDep) {
      if (y && y.registerDep(D, B, C), !c.el) {
        const O = D.subTree = tt(Me);
        F(null, O, p, m);
      }
    } else
      B(
        D,
        c,
        p,
        m,
        y,
        E,
        C
      );
    process.env.NODE_ENV !== "production" && (kn(), Mt(D, "mount"));
  }, ae = (c, p, m) => {
    const b = p.component = c.component;
    if (hc(c, p, m))
      if (b.asyncDep && !b.asyncResolved) {
        process.env.NODE_ENV !== "production" && Mn(p), Y(b, p, m), process.env.NODE_ENV !== "production" && kn();
        return;
      } else
        b.next = p, b.update();
    else
      p.el = c.el, b.vnode = p;
  }, B = (c, p, m, b, y, E, C) => {
    const D = () => {
      if (c.isMounted) {
        let { next: T, bu: P, u: L, parent: G, vnode: te } = c;
        {
          const qe = vi(c);
          if (qe) {
            T && (T.el = te.el, Y(c, T, C)), qe.asyncDep.then(() => {
              c.isUnmounted || D();
            });
            return;
          }
        }
        let ee = T, Se;
        process.env.NODE_ENV !== "production" && Mn(T || c.vnode), bt(c, !1), T ? (T.el = te.el, Y(c, T, C)) : T = te, P && kt(P), (Se = T.props && T.props.onVnodeBeforeUpdate) && ze(Se, G, T, te), bt(c, !0), process.env.NODE_ENV !== "production" && Pt(c, "render");
        const Ie = Bo(c);
        process.env.NODE_ENV !== "production" && Mt(c, "render");
        const Ye = c.subTree;
        c.subTree = Ie, process.env.NODE_ENV !== "production" && Pt(c, "patch"), A(
          Ye,
          Ie,
          // parent may have changed if it's in a teleport
          f(Ye.el),
          // anchor may have changed if it's in a fragment
          Je(Ye),
          c,
          y,
          E
        ), process.env.NODE_ENV !== "production" && Mt(c, "patch"), T.el = Ie.el, ee === null && gc(c, Ie.el), L && Re(L, y), (Se = T.props && T.props.onVnodeUpdated) && Re(
          () => ze(Se, G, T, te),
          y
        ), process.env.NODE_ENV !== "production" && Qs(c), process.env.NODE_ENV !== "production" && kn();
      } else {
        let T;
        const { el: P, props: L } = p, { bm: G, m: te, parent: ee, root: Se, type: Ie } = c, Ye = an(p);
        bt(c, !1), G && kt(G), !Ye && (T = L && L.onVnodeBeforeMount) && ze(T, ee, p), bt(c, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie), process.env.NODE_ENV !== "production" && Pt(c, "render");
          const qe = c.subTree = Bo(c);
          process.env.NODE_ENV !== "production" && Mt(c, "render"), process.env.NODE_ENV !== "production" && Pt(c, "patch"), A(
            null,
            qe,
            m,
            b,
            c,
            y,
            E
          ), process.env.NODE_ENV !== "production" && Mt(c, "patch"), p.el = qe.el;
        }
        if (te && Re(te, y), !Ye && (T = L && L.onVnodeMounted)) {
          const qe = p;
          Re(
            () => ze(T, ee, qe),
            y
          );
        }
        (p.shapeFlag & 256 || ee && an(ee.vnode) && ee.vnode.shapeFlag & 256) && c.a && Re(c.a, y), c.isMounted = !0, process.env.NODE_ENV !== "production" && ca(c), p = m = b = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Cs(D);
    c.scope.off();
    const N = c.update = O.run.bind(O), k = c.job = O.runIfDirty.bind(O);
    k.i = c, k.id = c.uid, O.scheduler = () => hr(k), bt(c, !0), process.env.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (T) => kt(c.rtc, T) : void 0, O.onTrigger = c.rtg ? (T) => kt(c.rtg, T) : void 0), N();
  }, Y = (c, p, m) => {
    p.component = c;
    const b = c.vnode.props;
    c.vnode = p, c.next = null, Wa(c, p.props, b, m), tc(c, p.children, m), Be(), Ao(c), Ke();
  }, $e = (c, p, m, b, y, E, C, D, O = !1) => {
    const N = c && c.children, k = c ? c.shapeFlag : 0, T = p.children, { patchFlag: P, shapeFlag: L } = p;
    if (P > 0) {
      if (P & 128) {
        vt(
          N,
          T,
          m,
          b,
          y,
          E,
          C,
          D,
          O
        );
        return;
      } else if (P & 256) {
        _t(
          N,
          T,
          m,
          b,
          y,
          E,
          C,
          D,
          O
        );
        return;
      }
    }
    L & 8 ? (k & 16 && De(N, y, E), T !== N && d(m, T)) : k & 16 ? L & 16 ? vt(
      N,
      T,
      m,
      b,
      y,
      E,
      C,
      D,
      O
    ) : De(N, y, E, !0) : (k & 8 && d(m, ""), L & 16 && M(
      T,
      m,
      b,
      y,
      E,
      C,
      D,
      O
    ));
  }, _t = (c, p, m, b, y, E, C, D, O) => {
    c = c || Lt, p = p || Lt;
    const N = c.length, k = p.length, T = Math.min(N, k);
    let P;
    for (P = 0; P < T; P++) {
      const L = p[P] = O ? pt(p[P]) : Fe(p[P]);
      A(
        c[P],
        L,
        m,
        null,
        y,
        E,
        C,
        D,
        O
      );
    }
    N > k ? De(
      c,
      y,
      E,
      !0,
      !1,
      T
    ) : M(
      p,
      m,
      b,
      y,
      E,
      C,
      D,
      O,
      T
    );
  }, vt = (c, p, m, b, y, E, C, D, O) => {
    let N = 0;
    const k = p.length;
    let T = c.length - 1, P = k - 1;
    for (; N <= T && N <= P; ) {
      const L = c[N], G = p[N] = O ? pt(p[N]) : Fe(p[N]);
      if (Zt(L, G))
        A(
          L,
          G,
          m,
          null,
          y,
          E,
          C,
          D,
          O
        );
      else
        break;
      N++;
    }
    for (; N <= T && N <= P; ) {
      const L = c[T], G = p[P] = O ? pt(p[P]) : Fe(p[P]);
      if (Zt(L, G))
        A(
          L,
          G,
          m,
          null,
          y,
          E,
          C,
          D,
          O
        );
      else
        break;
      T--, P--;
    }
    if (N > T) {
      if (N <= P) {
        const L = P + 1, G = L < k ? p[L].el : b;
        for (; N <= P; )
          A(
            null,
            p[N] = O ? pt(p[N]) : Fe(p[N]),
            m,
            G,
            y,
            E,
            C,
            D,
            O
          ), N++;
      }
    } else if (N > P)
      for (; N <= T; )
        W(c[N], y, E, !0), N++;
    else {
      const L = N, G = N, te = /* @__PURE__ */ new Map();
      for (N = G; N <= P; N++) {
        const Ee = p[N] = O ? pt(p[N]) : Fe(p[N]);
        Ee.key != null && (process.env.NODE_ENV !== "production" && te.has(Ee.key) && I(
          "Duplicate keys found during update:",
          JSON.stringify(Ee.key),
          "Make sure keys are unique."
        ), te.set(Ee.key, N));
      }
      let ee, Se = 0;
      const Ie = P - G + 1;
      let Ye = !1, qe = 0;
      const Gt = new Array(Ie);
      for (N = 0; N < Ie; N++) Gt[N] = 0;
      for (N = L; N <= T; N++) {
        const Ee = c[N];
        if (Se >= Ie) {
          W(Ee, y, E, !0);
          continue;
        }
        let Ge;
        if (Ee.key != null)
          Ge = te.get(Ee.key);
        else
          for (ee = G; ee <= P; ee++)
            if (Gt[ee - G] === 0 && Zt(Ee, p[ee])) {
              Ge = ee;
              break;
            }
        Ge === void 0 ? W(Ee, y, E, !0) : (Gt[Ge - G] = N + 1, Ge >= qe ? qe = Ge : Ye = !0, A(
          Ee,
          p[Ge],
          m,
          null,
          y,
          E,
          C,
          D,
          O
        ), Se++);
      }
      const Oo = Ye ? ic(Gt) : Lt;
      for (ee = Oo.length - 1, N = Ie - 1; N >= 0; N--) {
        const Ee = G + N, Ge = p[Ee], xo = Ee + 1 < k ? p[Ee + 1].el : b;
        Gt[N] === 0 ? A(
          null,
          Ge,
          m,
          xo,
          y,
          E,
          C,
          D,
          O
        ) : Ye && (ee < 0 || N !== Oo[ee] ? ut(Ge, m, xo, 2) : ee--);
      }
    }
  }, ut = (c, p, m, b, y = null) => {
    const { el: E, type: C, transition: D, children: O, shapeFlag: N } = c;
    if (N & 6) {
      ut(c.component.subTree, p, m, b);
      return;
    }
    if (N & 128) {
      c.suspense.move(p, m, b);
      return;
    }
    if (N & 64) {
      C.move(c, p, m, yt);
      return;
    }
    if (C === we) {
      r(E, p, m);
      for (let T = 0; T < O.length; T++)
        ut(O[T], p, m, b);
      r(c.anchor, p, m);
      return;
    }
    if (C === Ln) {
      U(c, p, m);
      return;
    }
    if (b !== 2 && N & 1 && D)
      if (b === 0)
        D.beforeEnter(E), r(E, p, m), Re(() => D.enter(E), y);
      else {
        const { leave: T, delayLeave: P, afterLeave: L } = D, G = () => {
          c.ctx.isUnmounted ? o(E) : r(E, p, m);
        }, te = () => {
          T(E, () => {
            G(), L && L();
          });
        };
        P ? P(E, G, te) : te();
      }
    else
      r(E, p, m);
  }, W = (c, p, m, b = !1, y = !1) => {
    const {
      type: E,
      props: C,
      ref: D,
      children: O,
      dynamicChildren: N,
      shapeFlag: k,
      patchFlag: T,
      dirs: P,
      cacheIndex: L
    } = c;
    if (T === -2 && (y = !1), D != null && (Be(), ln(D, null, m, c, !0), Ke()), L != null && (p.renderCache[L] = void 0), k & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const G = k & 1 && P, te = !an(c);
    let ee;
    if (te && (ee = C && C.onVnodeBeforeUnmount) && ze(ee, p, c), k & 6)
      Ae(c.component, m, b);
    else {
      if (k & 128) {
        c.suspense.unmount(m, b);
        return;
      }
      G && Et(c, null, p, "beforeUnmount"), k & 64 ? c.type.remove(
        c,
        p,
        m,
        yt,
        b
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== we || T > 0 && T & 64) ? De(
        N,
        p,
        m,
        !1,
        !0
      ) : (E === we && T & 384 || !y && k & 16) && De(O, p, m), b && ie(c);
    }
    (te && (ee = C && C.onVnodeUnmounted) || G) && Re(() => {
      ee && ze(ee, p, c), G && Et(c, null, p, "unmounted");
    }, m);
  }, ie = (c) => {
    const { type: p, el: m, anchor: b, transition: y } = c;
    if (p === we) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && y && !y.persisted ? c.children.forEach((C) => {
        C.type === Me ? o(C.el) : ie(C);
      }) : ge(m, b);
      return;
    }
    if (p === Ln) {
      w(c);
      return;
    }
    const E = () => {
      o(m), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (c.shapeFlag & 1 && y && !y.persisted) {
      const { leave: C, delayLeave: D } = y, O = () => C(m, E);
      D ? D(c.el, E, O) : O();
    } else
      E();
  }, ge = (c, p) => {
    let m;
    for (; c !== p; )
      m = h(c), o(c), c = m;
    o(p);
  }, Ae = (c, p, m) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && oa(c);
    const {
      bum: b,
      scope: y,
      job: E,
      subTree: C,
      um: D,
      m: O,
      a: N,
      parent: k,
      slots: { __: T }
    } = c;
    Uo(O), Uo(N), b && kt(b), k && R(T) && T.forEach((P) => {
      k.renderCache[P] = void 0;
    }), y.stop(), E && (E.flags |= 8, W(C, c, p, m)), D && Re(D, p), Re(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), process.env.NODE_ENV !== "production" && fa(c);
  }, De = (c, p, m, b = !1, y = !1, E = 0) => {
    for (let C = E; C < c.length; C++)
      W(c[C], p, m, b, y);
  }, Je = (c) => {
    if (c.shapeFlag & 6)
      return Je(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), m = p && p[ma];
    return m ? h(m) : p;
  };
  let At = !1;
  const Tn = (c, p, m) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : A(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = c, At || (At = !0, Ao(), zs(), At = !1);
  }, yt = {
    p: A,
    um: W,
    m: ut,
    r: ie,
    mt: xe,
    mc: M,
    pc: $e,
    pbc: de,
    n: Je,
    o: e
  };
  return {
    render: Tn,
    hydrate: void 0,
    createApp: Ha(Tn)
  };
}
function Ir({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function bt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (R(r) && R(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = pt(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && Fn(i, l)), l.type === In && (l.el = i.el), l.type === Me && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function ic(e) {
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
function vi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vi(t);
}
function Uo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const lc = Symbol.for("v-scx"), ac = () => {
  {
    const e = jn(lc);
    return e || process.env.NODE_ENV !== "production" && I(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function cn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !j(t) && I(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yi(e, t, n);
}
function yi(e, t, n = Z) {
  const { immediate: r, deep: o, flush: s, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (r !== void 0 && I(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && I(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && I(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = se({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = I);
  const a = t && r || !t && s !== "post";
  let u;
  if (_n) {
    if (s === "sync") {
      const g = ac();
      u = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!a) {
      const g = () => {
      };
      return g.stop = ue, g.resume = ue, g.pause = ue, g;
    }
  }
  const d = fe;
  l.call = (g, S, A) => rt(g, d, S, A);
  let f = !1;
  s === "post" ? l.scheduler = (g) => {
    Re(g, d && d.suspense);
  } : s !== "sync" && (f = !0, l.scheduler = (g, S) => {
    S ? g() : hr(g);
  }), l.augmentJob = (g) => {
    t && (g.flags |= 4), f && (g.flags |= 2, d && (g.id = d.uid, g.i = d));
  };
  const h = Gl(e, t, l);
  return _n && (u ? u.push(h) : a && h()), h;
}
function cc(e, t, n) {
  const r = this.proxy, o = re(e) ? e.includes(".") ? Ei(r, e) : () => r[e] : e.bind(r, r);
  let s;
  j(t) ? s = t : (s = t.handler, n = t);
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
const uc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Te(t)}Modifiers`];
function fc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Z;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(wt(Ve(t)) in f)) && I(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${wt(Ve(t))}" prop.`
        );
      else {
        const h = d[t];
        j(h) && (h(...n) || I(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && uc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => re(d) ? d.trim() : d)), i.number && (o = n.map(Kn))), process.env.NODE_ENV !== "production" && ha(e, t, o), process.env.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[wt(d)] && I(
      `Event "${d}" is emitted in component ${yr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Te(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = wt(t)] || // also try camelCase event handler (#2249)
  r[l = wt(Ve(t))];
  !a && s && (a = r[l = wt(Te(t))]), a && rt(
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
    e.emitted[l] = !0, rt(
      u,
      e,
      6,
      o
    );
  }
}
function bi(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!j(e)) {
    const a = (u) => {
      const d = bi(u, t, !0);
      d && (l = !0, se(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (Q(e) && r.set(e, null), null) : (R(s) ? s.forEach((a) => i[a] = null) : se(i, s), Q(e) && r.set(e, i), i);
}
function mr(e, t) {
  return !e || !wn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Te(t)) || q(e, t));
}
let Br = !1;
function er() {
  Br = !0;
}
function Bo(e) {
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
    data: h,
    setupState: g,
    ctx: S,
    inheritAttrs: A
  } = e, J = Xn(e);
  let F, $;
  process.env.NODE_ENV !== "production" && (Br = !1);
  try {
    if (n.shapeFlag & 4) {
      const w = o || r, _ = process.env.NODE_ENV !== "production" && g.__isScriptSetup ? new Proxy(w, {
        get(v, x, M) {
          return I(
            `Property '${String(
              x
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(v, x, M);
        }
      }) : w;
      F = Fe(
        u.call(
          _,
          w,
          d,
          process.env.NODE_ENV !== "production" ? Qe(f) : f,
          g,
          h,
          S
        )
      ), $ = l;
    } else {
      const w = t;
      process.env.NODE_ENV !== "production" && l === f && er(), F = Fe(
        w.length > 1 ? w(
          process.env.NODE_ENV !== "production" ? Qe(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return er(), Qe(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : w(
          process.env.NODE_ENV !== "production" ? Qe(f) : f,
          null
        )
      ), $ = t.props ? l : dc(l);
    }
  } catch (w) {
    un.length = 0, Dn(w, e, 1), F = tt(Me);
  }
  let V = F, U;
  if (process.env.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([V, U] = Ni(F)), $ && A !== !1) {
    const w = Object.keys($), { shapeFlag: _ } = V;
    if (w.length) {
      if (_ & 7)
        s && w.some(Bn) && ($ = pc(
          $,
          s
        )), V = mt(V, $, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Br && V.type !== Me) {
        const v = Object.keys(l), x = [], M = [];
        for (let z = 0, de = v.length; z < de; z++) {
          const ne = v[z];
          wn(ne) ? Bn(ne) || x.push(ne[2].toLowerCase() + ne.slice(3)) : M.push(ne);
        }
        M.length && I(
          `Extraneous non-props attributes (${M.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), x.length && I(
          `Extraneous non-emits event listeners (${x.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Ko(V) && I(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = mt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Ko(V) && I(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), co(V, n.transition)), process.env.NODE_ENV !== "production" && U ? U(V) : F = V, Xn(J), F;
}
const Ni = (e) => {
  const t = e.children, n = e.dynamicChildren, r = _o(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Ni(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Fe(r), i];
};
function _o(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (_r(o)) {
      if (o.type !== Me || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return _o(n.children);
      }
    } else
      return;
  }
  return n;
}
const dc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || wn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Bn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Ko = (e) => e.shapeFlag & 7 || e.type === Me;
function hc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && et || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Wo(r, i, u) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const h = d[f];
        if (i[h] !== r[h] && !mr(u, h))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Wo(r, i, u) : !0 : !!i;
  return !1;
}
function Wo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !mr(n, s))
      return !0;
  }
  return !1;
}
function gc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const wi = (e) => e.__isSuspense;
function mc(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : Gs(e);
}
const we = Symbol.for("v-fgt"), In = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Ln = Symbol.for("v-stc"), un = [];
let Pe = null;
function pe(e = !1) {
  un.push(Pe = e ? null : []);
}
function _c() {
  un.pop(), Pe = un[un.length - 1] || null;
}
let mn = 1;
function Jo(e, t = !1) {
  mn += e, e < 0 && Pe && t && (Pe.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = mn > 0 ? Pe || Lt : null, _c(), mn > 0 && Pe && Pe.push(e), e;
}
function me(e, t, n, r, o, s) {
  return Oi(
    H(
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
function vc(e, t, n, r, o) {
  return Oi(
    tt(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function _r(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Zt(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
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
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || le(e) || j(e) ? { i: ve, r: e, k: t, f: !!n } : e : null);
function H(e, t = null, n = null, r = 0, o = null, s = e === we ? 0 : 1, i = !1, l = !1) {
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
    ctx: ve
  };
  return l ? (vo(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= re(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && I("VNode created with invalid key (NaN). VNode type:", a.type), mn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Pe.push(a), a;
}
const tt = process.env.NODE_ENV !== "production" ? yc : Di;
function Di(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Ta) && (process.env.NODE_ENV !== "production" && !e && I(`Invalid vnode type when creating vnode: ${e}.`), e = Me), _r(e)) {
    const l = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vo(l, n), mn > 0 && !s && Pe && (l.shapeFlag & 6 ? Pe[Pe.indexOf(e)] = l : Pe.push(l)), l.patchFlag = -2, l;
  }
  if (Ai(e) && (e = e.__vccOpts), t) {
    t = Ec(t);
    let { class: l, style: a } = t;
    l && !re(l) && (t.class = Ut(l)), Q(a) && (hn(a) && !R(a) && (a = se({}, a)), t.style = Ht(a));
  }
  const i = re(e) ? 1 : wi(e) ? 128 : _a(e) ? 64 : Q(e) ? 4 : j(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && hn(e) && (e = K(e), I(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), H(
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
  return e ? hn(e) || di(e) ? se({}, e) : e : null;
}
function mt(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, u = t ? Nc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && xi(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? R(s) ? s.concat(Hn(t)) : [s, Hn(t)] : Hn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && R(l) ? l.map(Si) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && co(
    d,
    a.clone(d)
  ), d;
}
function Si(e) {
  const t = mt(e);
  return R(e.children) && (t.children = e.children.map(Si)), t;
}
function bc(e = " ", t = 0) {
  return tt(In, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (pe(), vc(Me, null, e)) : tt(Me, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? tt(Me) : R(e) ? tt(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _r(e) ? pt(e) : tt(In, null, String(e));
}
function pt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
}
function vo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), vo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !di(t) ? t._ctx = ve : o === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else j(t) ? (t = { default: t, _ctx: ve }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [bc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Nc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Ut([t.class, r.class]));
      else if (o === "style")
        t.style = Ht([t.style, r.style]);
      else if (wn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(R(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function ze(e, t, n, r = null) {
  rt(e, t, 7, [
    n,
    r
  ]);
}
const wc = ci();
let Oc = 0;
function xc(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || wc, s = {
    uid: Oc++,
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
    scope: new _l(
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
    emitsOptions: bi(r, o),
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
  return process.env.NODE_ENV !== "production" ? s.ctx = Va(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = fc.bind(null, s), e.ce && e.ce(s), s;
}
let fe = null;
const Ii = () => fe || ve;
let tr, Kr;
{
  const e = xn(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  tr = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => fe = n
  ), Kr = t(
    "__VUE_SSR_SETTERS__",
    (n) => _n = n
  );
}
const Cn = (e) => {
  const t = fe;
  return tr(e), e.scope.on(), () => {
    e.scope.off(), tr(t);
  };
}, Yo = () => {
  fe && fe.scope.off(), tr(null);
}, Dc = /* @__PURE__ */ at("slot,component");
function Wr(e, { isNativeTag: t }) {
  (Dc(e) || t(e)) && I(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ci(e) {
  return e.vnode.shapeFlag & 4;
}
let _n = !1;
function Sc(e, t = !1, n = !1) {
  t && Kr(t);
  const { props: r, children: o } = e.vnode, s = Ci(e);
  Ba(e, r, s, t), ec(e, o, n || t);
  const i = s ? Ic(e, t) : void 0;
  return t && Kr(!1), i;
}
function Ic(e, t) {
  var n;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Wr(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        Wr(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        ni(s[i]);
    }
    r.compilerOptions && Cc() && I(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), process.env.NODE_ENV !== "production" && Aa(e);
  const { setup: o } = r;
  if (o) {
    Be();
    const s = e.setupContext = o.length > 1 ? Vc(e) : null, i = Cn(e), l = qt(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Qe(e.props) : e.props,
        s
      ]
    ), a = Zr(l);
    if (Ke(), i(), (a || e.sp) && !an(e) && oi(e), a) {
      if (l.then(Yo, Yo), t)
        return l.then((u) => {
          qo(e, u, t);
        }).catch((u) => {
          Dn(u, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        I(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      qo(e, l, t);
  } else
    Ti(e, t);
}
function qo(e, t, n) {
  j(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Q(t) ? (process.env.NODE_ENV !== "production" && _r(t) && I(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ws(t), process.env.NODE_ENV !== "production" && Ra(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && I(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ti(e, n);
}
const Cc = () => !0;
function Ti(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ue);
  {
    const o = Cn(e);
    Be();
    try {
      Ma(e);
    } finally {
      Ke(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === ue && !t && (r.template ? I(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : I("Component is missing template or render function: ", r));
}
const Go = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return er(), ce(e, "get", ""), e[t];
  },
  set() {
    return I("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return I("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ce(e, "get", ""), e[t];
  }
};
function Tc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ce(e, "get", "$slots"), t[n];
    }
  });
}
function Vc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && I("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (R(n) ? r = "array" : le(n) && (r = "ref")), r !== "object" && I(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Go));
      },
      get slots() {
        return r || (r = Tc(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Go),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ws(Fl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Tt)
        return Tt[n](e);
    },
    has(t, n) {
      return n in t || n in Tt;
    }
  })) : e.proxy;
}
const Ac = /(?:^|[-_])(\w)/g, Rc = (e) => e.replace(Ac, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Vi(e, t = !0) {
  return j(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yr(e, t, n = !1) {
  let r = Vi(t);
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
  return r ? Rc(r) : n ? "App" : "Anonymous";
}
function Ai(e) {
  return j(e) && "__vccOpts" in e;
}
const yo = (e, t) => {
  const n = Yl(e, t, _n);
  if (process.env.NODE_ENV !== "production") {
    const r = Ii();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Pc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!Q(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (le(f)) {
        Be();
        const h = f.value;
        return Ke(), [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (It(f))
          return [
            "div",
            {},
            ["span", e, Oe(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${We(f) ? " (readonly)" : ""}`
          ];
        if (We(f))
          return [
            "div",
            {},
            ["span", e, Oe(f) ? "ShallowReadonly" : "Readonly"],
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
    const h = [];
    f.type.props && f.props && h.push(i("props", K(f.props))), f.setupState !== Z && h.push(i("setup", f.setupState)), f.data !== Z && h.push(i("data", K(f.data)));
    const g = a(f, "computed");
    g && h.push(i("computed", g));
    const S = a(f, "inject");
    return S && h.push(i("injected", S)), h.push([
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
    ]), h;
  }
  function i(f, h) {
    return h = se({}, h), Object.keys(h).length ? [
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
        ...Object.keys(h).map((g) => [
          "div",
          {},
          ["span", r, g + ": "],
          l(h[g], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : Q(f) ? ["object", { object: h ? K(f) : f }] : ["span", n, String(f)];
  }
  function a(f, h) {
    const g = f.type;
    if (j(g))
      return;
    const S = {};
    for (const A in f.ctx)
      u(g, A, h) && (S[A] = f.ctx[A]);
    return S;
  }
  function u(f, h, g) {
    const S = f[g];
    if (R(S) && S.includes(h) || Q(S) && h in S || f.extends && u(f.extends, h, g) || f.mixins && f.mixins.some((A) => u(A, h, g)))
      return !0;
  }
  function d(f) {
    return Oe(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const zo = "3.5.17", ke = process.env.NODE_ENV !== "production" ? I : ue;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jr;
const Xo = typeof window < "u" && window.trustedTypes;
if (Xo)
  try {
    Jr = /* @__PURE__ */ Xo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && ke(`Error creating trusted types policy: ${e}`);
  }
const Ri = Jr ? (e) => Jr.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", st = typeof document < "u" ? document : null, Zo = st && /* @__PURE__ */ st.createElement("template"), $c = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? st.createElementNS(Mc, e) : t === "mathml" ? st.createElementNS(kc, e) : n ? st.createElement(e, { is: n }) : st.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => st.createTextNode(e),
  createComment: (e) => st.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => st.querySelector(e),
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
      Zo.innerHTML = Ri(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Zo.content;
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
}, jc = Symbol("_vtc");
function Fc(e, t, n) {
  const r = e[jc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qo = Symbol("_vod"), Lc = Symbol("_vsh");
process.env.NODE_ENV;
const Hc = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Uc = /(^|;)\s*display\s*:/;
function Bc(e, t, n) {
  const r = e.style, o = re(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (re(t))
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
      const i = r[Hc];
      i && (n += ";" + i), r.cssText = n, s = Uc.test(n);
    }
  } else t && e.removeAttribute("style");
  Qo in e && (e[Qo] = s ? r.display : "", e[Lc] && (r.display = "none"));
}
const Kc = /[^\\];\s*$/, es = /\s*!important$/;
function Un(e, t, n) {
  if (R(n))
    n.forEach((r) => Un(e, t, r));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Kc.test(n) && ke(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Wc(e, t);
    es.test(n) ? e.setProperty(
      Te(r),
      n.replace(es, ""),
      "important"
    ) : e[r] = n;
  }
}
const ts = ["Webkit", "Moz", "ms"], Cr = {};
function Wc(e, t) {
  const n = Cr[t];
  if (n)
    return n;
  let r = Ve(t);
  if (r !== "filter" && r in e)
    return Cr[t] = r;
  r = ar(r);
  for (let o = 0; o < ts.length; o++) {
    const s = ts[o] + r;
    if (s in e)
      return Cr[t] = s;
  }
  return t;
}
const ns = "http://www.w3.org/1999/xlink";
function rs(e, t, n, r, o, s = hl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ns, t.slice(6, t.length)) : e.setAttributeNS(ns, t, n) : n == null || s && !Ds(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : nt(n) ? String(n) : n
  );
}
function os(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ri(n) : n);
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
    process.env.NODE_ENV !== "production" && !i && ke(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function xt(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Jc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ss = Symbol("_vei");
function Yc(e, t, n, r, o = null) {
  const s = e[ss] || (e[ss] = {}), i = s[t];
  if (r && i)
    i.value = process.env.NODE_ENV !== "production" ? ls(r, t) : r;
  else {
    const [l, a] = qc(t);
    if (r) {
      const u = s[t] = Xc(
        process.env.NODE_ENV !== "production" ? ls(r, t) : r,
        o
      );
      xt(e, l, u, a);
    } else i && (Jc(e, l, i, a), s[t] = void 0);
  }
}
const is = /(?:Once|Passive|Capture)$/;
function qc(e) {
  let t;
  if (is.test(e)) {
    t = {};
    let r;
    for (; r = e.match(is); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Te(e.slice(2)), t];
}
let Tr = 0;
const Gc = /* @__PURE__ */ Promise.resolve(), zc = () => Tr || (Gc.then(() => Tr = 0), Tr = Date.now());
function Xc(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    rt(
      Zc(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = zc(), n;
}
function ls(e, t) {
  return j(e) || R(e) ? e : (ke(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ue);
}
function Zc(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const as = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qc = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? Fc(e, r, i) : t === "style" ? Bc(e, n, r) : wn(t) ? Bn(t) || Yc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : eu(e, t, r, i)) ? (os(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rs(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(r)) ? os(e, Ve(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), rs(e, t, r, i));
};
function eu(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && as(t) && j(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return as(t) && re(n) ? !1 : t in e;
}
const cs = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function tu(e, t, n) {
  const r = /* @__PURE__ */ ri(e, t);
  ir(r) && se(r, t);
  class o extends Eo {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const nu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Eo extends nu {
  constructor(t, n = {}, r = hs) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== hs ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && ke(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Eo) {
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
    this._connected = !1, pr(() => {
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
      if (s && !R(s))
        for (const a in s) {
          const u = s[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = So(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ve(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : process.env.NODE_ENV !== "production" && i && ke(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((r) => {
      r.configureApp = this._def.configureApp, t(this._def = r, !0);
    }) : t(this._def);
  }
  _mount(t) {
    process.env.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        q(this, r) ? process.env.NODE_ENV !== "production" && ke(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => _e(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = R(n) ? n : Object.keys(n || {});
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
    let r = n ? this.getAttribute(t) : cs;
    const o = Ve(t);
    n && this._numberProps && this._numberProps[o] && (r = So(r)), this._setProp(o, r, !1, !0);
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
    if (n !== this._props[t] && (n === cs ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Te(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Te(t), n + "") : n || this.removeAttribute(Te(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), fu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = tt(this._def, se(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, process.env.NODE_ENV !== "production" && (r.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const o = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            ir(i[0]) ? se({ detail: i }, i[0]) : { detail: i }
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
      if (r && s.setAttribute("nonce", r), s.textContent = t[o], this.shadowRoot.prepend(s), process.env.NODE_ENV !== "production")
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
    if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
const nr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (n) => kt(t, n) : t;
};
function ru(e) {
  e.target.composing = !0;
}
function us(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Wt = Symbol("_assign"), ou = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Wt] = nr(o);
    const s = r || o.props && o.props.type === "number";
    xt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Kn(l)), e[Wt](l);
    }), n && xt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (xt(e, "compositionstart", ru), xt(e, "compositionend", us), xt(e, "change", us));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[Wt] = nr(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Kn(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, su = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = sr(t);
    xt(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Kn(rr(i)) : rr(i)
      );
      e[Wt](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, pr(() => {
        e._assigning = !1;
      });
    }), e[Wt] = nr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    fs(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Wt] = nr(n);
  },
  updated(e, { value: t }) {
    e._assigning || fs(e, t);
  }
};
function fs(e, t) {
  const n = e.multiple, r = R(t);
  if (n && !r && !sr(t)) {
    process.env.NODE_ENV !== "production" && ke(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, s = e.options.length; o < s; o++) {
    const i = e.options[o], l = rr(i);
    if (n)
      if (r) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((u) => String(u) === String(l)) : i.selected = ml(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (cr(rr(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function rr(e) {
  return "_value" in e ? e._value : e.value;
}
const iu = ["ctrl", "shift", "alt", "meta"], lu = {
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
  exact: (e, t) => iu.some((n) => e[`${n}Key`] && !t.includes(n))
}, ds = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = lu[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...s);
  });
}, au = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, cu = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Te(o.key);
    if (t.some(
      (i) => i === s || au[i] === s
    ))
      return e(o);
  });
}, uu = /* @__PURE__ */ se({ patchProp: Qc }, $c);
let ps;
function Pi() {
  return ps || (ps = rc(uu));
}
const fu = (...e) => {
  Pi().render(...e);
}, hs = (...e) => {
  const t = Pi().createApp(...e);
  process.env.NODE_ENV !== "production" && (pu(t), hu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = gu(r);
    if (!o) return;
    const s = t._component;
    !j(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, du(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function du(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function pu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ul(t) || fl(t) || dl(t),
    writable: !1
  });
}
function hu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ke(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ke(r), n;
      },
      set() {
        ke(r);
      }
    });
  }
}
function gu(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ke(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ke(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mu() {
  Pc();
}
process.env.NODE_ENV !== "production" && mu();
var Mi = "vercel.ai.error", _u = Symbol.for(Mi), ki, vu = class $i extends Error {
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
    return $i.hasMarker(t, Mi);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
ki = _u;
var Yt = vu;
function ji(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Fi = "AI_InvalidArgumentError", Li = `vercel.ai.error.${Fi}`, yu = Symbol.for(Li), Hi, Eu = class extends Yt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Fi, message: e, cause: t }), this[Hi] = !0, this.argument = n;
  }
  static isInstance(e) {
    return Yt.hasMarker(e, Li);
  }
};
Hi = yu;
var Ui = "AI_JSONParseError", Bi = `vercel.ai.error.${Ui}`, bu = Symbol.for(Bi), Ki, gs = class extends Yt {
  constructor({ text: e, cause: t }) {
    super({
      name: Ui,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${ji(t)}`,
      cause: t
    }), this[Ki] = !0, this.text = e;
  }
  static isInstance(e) {
    return Yt.hasMarker(e, Bi);
  }
};
Ki = bu;
var Wi = "AI_TypeValidationError", Ji = `vercel.ai.error.${Wi}`, Nu = Symbol.for(Ji), Yi, wu = class Yr extends Yt {
  constructor({ value: t, cause: n }) {
    super({
      name: Wi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${ji(n)}`,
      cause: n
    }), this[Yi] = !0, this.value = t;
  }
  static isInstance(t) {
    return Yt.hasMarker(t, Ji);
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
    return Yr.isInstance(n) && n.value === t ? n : new Yr({ value: t, cause: n });
  }
};
Yi = Nu;
var ms = wu;
let Ou = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function xu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = { exports: {} }, _s;
function Du() {
  if (_s) return Nt.exports;
  _s = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function r(l, a, u) {
    u == null && a !== null && typeof a == "object" && (u = a, a = void 0), e && Buffer.isBuffer(l) && (l = l.toString()), l && l.charCodeAt(0) === 65279 && (l = l.slice(1));
    const d = JSON.parse(l, a);
    if (d === null || typeof d != "object")
      return d;
    const f = u && u.protoAction || "error", h = u && u.constructorAction || "error";
    if (f === "ignore" && h === "ignore")
      return d;
    if (f !== "ignore" && h !== "ignore") {
      if (t.test(l) === !1 && n.test(l) === !1)
        return d;
    } else if (f !== "ignore" && h === "ignore") {
      if (t.test(l) === !1)
        return d;
    } else if (n.test(l) === !1)
      return d;
    return o(d, { protoAction: f, constructorAction: h, safe: u && u.safe });
  }
  function o(l, { protoAction: a = "error", constructorAction: u = "error", safe: d } = {}) {
    let f = [l];
    for (; f.length; ) {
      const h = f;
      f = [];
      for (const g of h) {
        if (a !== "ignore" && Object.prototype.hasOwnProperty.call(g, "__proto__")) {
          if (d === !0)
            return null;
          if (a === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete g.__proto__;
        }
        if (u !== "ignore" && Object.prototype.hasOwnProperty.call(g, "constructor") && Object.prototype.hasOwnProperty.call(g.constructor, "prototype")) {
          if (d === !0)
            return null;
          if (u === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete g.constructor;
        }
        for (const S in g) {
          const A = g[S];
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
  return Nt.exports = s, Nt.exports.default = s, Nt.exports.parse = s, Nt.exports.safeParse = i, Nt.exports.scan = o, Nt.exports;
}
var Su = Du();
const Iu = /* @__PURE__ */ xu(Su);
var Cu = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = Ou(n, t);
  if (e == null)
    return o;
  if (n.includes(r))
    throw new Eu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, bo = Cu(), qr = Symbol.for("vercel.ai.validator");
function Tu(e) {
  return { [qr]: !0, validate: e };
}
function Vu(e) {
  return typeof e == "object" && e !== null && qr in e && e[qr] === !0 && "validate" in e;
}
function Au(e) {
  return Vu(e) ? e : Ru(e);
}
function Ru(e) {
  return Tu((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function Pu({
  value: e,
  schema: t
}) {
  const n = Au(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const r = n.validate(e);
    return r.success ? r : {
      success: !1,
      error: ms.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: ms.wrap({ value: e, cause: r })
    };
  }
}
function vs({
  text: e,
  schema: t
}) {
  try {
    const n = Iu.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const r = Pu({ value: n, schema: t });
    return r.success ? { ...r, rawValue: n } : r;
  } catch (n) {
    return {
      success: !1,
      error: gs.isInstance(n) ? n : new gs({ text: e, cause: n })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var vn = {
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
}, bn = {
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
}, Mu = [
  vn,
  yn,
  En,
  bn,
  Nn
];
vn.code + "", yn.code + "", En.code + "", bn.code + "", Nn.code + "";
vn.name + "", vn.code, yn.name + "", yn.code, En.name + "", En.code, bn.name + "", bn.code, Nn.name + "", Nn.code;
Mu.map((e) => e.code);
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
function $u(e) {
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
function ju(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = vs({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = vs({ text: $u(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Fu = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Lu = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Hu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Uu = {
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
}, Ku = {
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
}, Wu = {
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
}, Ju = {
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
}, Yu = {
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
}, qu = {
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
}, Gu = {
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
}, zu = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, Xu = {
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
}, Zu = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, Qu = {
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
}, ef = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, No = [
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
  Qu,
  ef
], tf = Object.fromEntries(
  No.map((e) => [e.code, e])
);
Object.fromEntries(
  No.map((e) => [e.name, e.code])
);
var nf = No.map((e) => e.code), rf = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!nf.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const r = n, o = e.slice(t + 1), s = JSON.parse(o);
  return tf[r].parse(s);
}, of = 10;
function sf(e, t) {
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    n.set(o, r), r += o.length;
  return e.length = 0, n;
}
async function lf({
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
  onToolResultPart: h,
  onMessageAnnotationsPart: g,
  onFinishMessagePart: S,
  onFinishStepPart: A,
  onStartStepPart: J
}) {
  const F = e.getReader(), $ = new TextDecoder(), V = [];
  let U = 0;
  for (; ; ) {
    const { value: w } = await F.read();
    if (w && (V.push(w), U += w.length, w[w.length - 1] !== of))
      continue;
    if (V.length === 0)
      break;
    const _ = sf(V, U);
    U = 0;
    const v = $.decode(_, { stream: !0 }).split(`
`).filter((x) => x !== "").map(rf);
    for (const { type: x, value: M } of v)
      switch (x) {
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
          await g?.(M);
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
          await h?.(M);
          break;
        case "finish_message":
          await S?.(M);
          break;
        case "finish_step":
          await A?.(M);
          break;
        case "start_step":
          await J?.(M);
          break;
        default: {
          const z = x;
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
  var l, a;
  const u = i?.role === "assistant";
  let d = u ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((_, v) => {
    var x;
    return Math.max(_, (x = v.step) != null ? x : 0);
  }, 0)) != null ? a : 0) : 0;
  const f = u ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let h, g, S;
  function A(_, v) {
    const x = f.parts.find(
      (M) => M.type === "tool-invocation" && M.toolInvocation.toolCallId === _
    );
    x != null ? x.toolInvocation = v : f.parts.push({
      type: "tool-invocation",
      toolInvocation: v
    });
  }
  const J = [];
  let F = u ? i?.annotations : void 0;
  const $ = {};
  let V = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, U = "unknown";
  function w() {
    const _ = [...J];
    F?.length && (f.annotations = F);
    const v = {
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
      message: v,
      data: _,
      replaceLastMessage: u
    });
  }
  await lf({
    stream: e,
    onTextPart(_) {
      h == null ? (h = {
        type: "text",
        text: _
      }, f.parts.push(h)) : h.text += _, f.content += _, w();
    },
    onReasoningPart(_) {
      var v;
      S == null ? (S = { type: "text", text: _ }, g?.details.push(S)) : S.text += _, g == null ? (g = {
        type: "reasoning",
        reasoning: _,
        details: [S]
      }, f.parts.push(g)) : g.reasoning += _, f.reasoning = ((v = f.reasoning) != null ? v : "") + _, w();
    },
    onReasoningSignaturePart(_) {
      S != null && (S.signature = _.signature);
    },
    onRedactedReasoningPart(_) {
      g == null && (g = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, f.parts.push(g)), g.details.push({
        type: "redacted",
        data: _.data
      }), S = void 0, w();
    },
    onFilePart(_) {
      f.parts.push({
        type: "file",
        mimeType: _.mimeType,
        data: _.data
      }), w();
    },
    onSourcePart(_) {
      f.parts.push({
        type: "source",
        source: _
      }), w();
    },
    onToolCallStreamingStartPart(_) {
      f.toolInvocations == null && (f.toolInvocations = []), $[_.toolCallId] = {
        text: "",
        step: d,
        toolName: _.toolName,
        index: f.toolInvocations.length
      };
      const v = {
        state: "partial-call",
        step: d,
        toolCallId: _.toolCallId,
        toolName: _.toolName,
        args: void 0
      };
      f.toolInvocations.push(v), A(_.toolCallId, v), w();
    },
    onToolCallDeltaPart(_) {
      const v = $[_.toolCallId];
      v.text += _.argsTextDelta;
      const { value: x } = ju(v.text), M = {
        state: "partial-call",
        step: v.step,
        toolCallId: _.toolCallId,
        toolName: v.toolName,
        args: x
      };
      f.toolInvocations[v.index] = M, A(_.toolCallId, M), w();
    },
    async onToolCallPart(_) {
      const v = {
        state: "call",
        step: d,
        ..._
      };
      if ($[_.toolCallId] != null ? f.toolInvocations[$[_.toolCallId].index] = v : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push(v)), A(_.toolCallId, v), w(), n) {
        const x = await n({ toolCall: _ });
        if (x != null) {
          const M = {
            state: "result",
            step: d,
            ..._,
            result: x
          };
          f.toolInvocations[f.toolInvocations.length - 1] = M, A(_.toolCallId, M), w();
        }
      }
    },
    onToolResultPart(_) {
      const v = f.toolInvocations;
      if (v == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const x = v.findIndex(
        (z) => z.toolCallId === _.toolCallId
      );
      if (x === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const M = {
        ...v[x],
        state: "result",
        ..._
      };
      v[x] = M, A(_.toolCallId, M), w();
    },
    onDataPart(_) {
      J.push(..._), w();
    },
    onMessageAnnotationsPart(_) {
      F == null ? F = [..._] : F.push(..._), w();
    },
    onFinishStepPart(_) {
      d += 1, h = _.isContinued ? h : void 0, g = void 0, S = void 0;
    },
    onStartStepPart(_) {
      u || (f.id = _.messageId), f.parts.push({ type: "step-start" }), w();
    },
    onFinishMessagePart(_) {
      U = _.finishReason, _.usage != null && (V = ku(_.usage));
    },
    onErrorPart(_) {
      throw new Error(_);
    }
  }), r?.({ message: f, finishReason: U, usage: V });
}
async function cf({
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
async function uf({
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
  await cf({
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
var ff = () => fetch;
async function df({
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
  fetch: h = ff(),
  lastMessage: g,
  requestType: S = "generate"
}) {
  var A, J, F;
  const V = await (S === "resume" ? h(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...o
    },
    signal: (A = s?.()) == null ? void 0 : A.signal,
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
  })).catch((U) => {
    throw i(), U;
  });
  if (l)
    try {
      await l(V);
    } catch (U) {
      throw U;
    }
  if (!V.ok)
    throw i(), new Error(
      (F = await V.text()) != null ? F : "Failed to fetch the chat response."
    );
  if (!V.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await uf({
        stream: V.body,
        update: a,
        onFinish: u,
        generateId: f
      });
      return;
    }
    case "data": {
      await af({
        stream: V.body,
        update: a,
        lastMessage: g,
        onToolCall: d,
        onFinish({ message: U, finishReason: w, usage: _ }) {
          u && U != null && u(U, { usage: _, finishReason: w });
        },
        generateId: f
      });
      return;
    }
    default: {
      const U = n;
      throw new Error(`Unknown stream protocol: ${U}`);
    }
  }
}
function Gr(e) {
  return e?.reduce((t, n) => {
    var r;
    return Math.max(t, (r = n.step) != null ? r : 0);
  }, 0);
}
function qi(e) {
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
    parts: qi(t)
  }));
}
async function ys(e) {
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
function pf({
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
    (r.length > t || Gr(s.toolInvocations) !== e) && // check that next step is possible:
    Gi(s) && // limit the number of automatic steps:
    ((o = Gr(s.toolInvocations)) != null ? o : 0) < n
  );
}
function Gi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, o, s) => o.type === "step-start" ? s : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function hf({
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
var Vr = /* @__PURE__ */ new WeakMap(), Es = 0;
function gf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Vr.has(e[n]) ? r = Vr.get(e[n]) : (r = Es, Vr.set(e[n], Es++)), t += "@" + r;
  }
  return t;
}
function mf(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = gf(e) : e = String(e || ""), e;
}
var wo = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return mf(t);
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
function vf() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var yf = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Ar = {
  isOnline: _f,
  isDocumentVisible: vf,
  fetcher: yf
};
var it = function() {
  return it = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, it.apply(this, arguments);
}, jt = function(e, t, n, r) {
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
}, Ft = function(e, t) {
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
}, bf = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, zi = new wo(), or = new wo(), Rr = new wo(), Xi = {
  cache: zi,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: !0,
  revalidateDebounce: 0,
  shouldRetryOnError: !0,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: Ar.fetcher,
  isOnline: Ar.isOnline,
  isDocumentVisible: Ar.isDocumentVisible
};
function Nf(e, t, n) {
  var r = or.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    or.set(e, [t], n > 0 ? n + o : n);
  }
}
function wf(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var r = Math.min(t || 0, n.errorRetryCount), o = r * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: r + 1, shouldRetryOnError: !0 });
    }, o);
  }
}
var bs = function(e, t, n, r) {
  return n === void 0 && (n = zi), r === void 0 && (r = Xi.ttl), jt(void 0, void 0, void 0, function() {
    var o, s, i, l, a, u, d;
    return Ft(this, function(f) {
      switch (f.label) {
        case 0:
          if (!Of(t)) return [3, 5];
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
            } catch (h) {
              console.error("swrv(mutate): failed to set cache", h);
            }
          return u = or.get(e), u && u.data.length && (d = u.data.filter(function(h) {
            return h.key === e;
          }), d.forEach(function(h, g) {
            typeof a.data < "u" && (h.data = a.data), h.error = a.error, h.isValidating = a.isValidating, h.isLoading = a.isValidating;
            var S = g === d.length - 1;
            S || delete d[g];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function Ns() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = it({}, Xi), i = !1, l = !1, a = Ii(), u = a?.proxy || a;
  if (!u)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = u?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = it(it({}, s), t[2]));
  var f = d ? s.serverTTL : s.ttl, h = typeof r == "function" ? r : je(r);
  typeof o > "u" && (o = s.fetcher);
  var g = null;
  g || (g = Jt({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var S = function($, V) {
    return jt(e, void 0, void 0, function() {
      var U, w, _, v, x, M, z, de = this;
      return Ft(this, function(ne) {
        switch (ne.label) {
          case 0:
            return U = g.data === void 0, w = h.value, w ? (_ = s.cache.get(w), v = _ && _.data, g.isValidating = !0, g.isLoading = !v, v && (g.data = v.data, g.error = v.error), x = $ || o, !x || !s.isDocumentVisible() && !U || V?.forceRevalidate !== void 0 && !V?.forceRevalidate ? (g.isValidating = !1, g.isLoading = !1, [
              2
              /*return*/
            ]) : _ && (M = !!(Date.now() - _.createdAt >= s.dedupingInterval || V?.forceRevalidate), !M) ? (g.isValidating = !1, g.isLoading = !1, [
              2
              /*return*/
            ]) : (z = function() {
              return jt(de, void 0, void 0, function() {
                var oe, ye, xe, ae;
                return Ft(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return oe = Rr.get(w), oe ? [3, 2] : (ye = Array.isArray(w) ? w : [w], xe = x.apply(void 0, bf([], Ef(ye), !1)), Rr.set(w, xe, s.dedupingInterval), [4, bs(w, xe, s.cache, f)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, bs(w, oe.data, s.cache, f)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return g.isValidating = !1, g.isLoading = !1, Rr.delete(w), g.error !== void 0 && (ae = !i && s.shouldRetryOnError && (V ? V.shouldRetryOnError : !0), ae && wf(S, V ? V.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, v && s.revalidateDebounce ? (setTimeout(function() {
              return jt(de, void 0, void 0, function() {
                return Ft(this, function(oe) {
                  switch (oe.label) {
                    case 0:
                      return i ? [3, 2] : [4, z()];
                    case 1:
                      oe.sent(), oe.label = 2;
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
            ne.sent(), ne.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, A = function() {
    return jt(e, void 0, void 0, function() {
      return Ft(this, function($) {
        return [2, S(null, { shouldRetryOnError: !1 })];
      });
    });
  }, J = null;
  fo(function() {
    var $ = function() {
      return jt(e, void 0, void 0, function() {
        return Ft(this, function(V) {
          switch (V.label) {
            case 0:
              return !g.error && s.isOnline() ? [4, S()] : [3, 2];
            case 1:
              return V.sent(), [3, 3];
            case 2:
              J && clearTimeout(J), V.label = 3;
            case 3:
              return s.refreshInterval && !i && (J = setTimeout($, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (J = setTimeout($, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", A, !1), window.addEventListener("focus", A, !1));
  }), po(function() {
    i = !0, J && clearTimeout(J), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", A, !1), window.removeEventListener("focus", A, !1));
    var $ = or.get(h.value);
    $ && ($.data = $.data.filter(function(V) {
      return V !== g;
    }));
  });
  try {
    cn(h, function($) {
      We(h) || (h.value = $), g.key = $, g.isValidating = !!$, Nf(h.value, g, f), !d && !l && h.value && S(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var F = it(it({}, Bl(g)), { mutate: function($, V) {
    return S($, it(it({}, V), { forceRevalidate: !0 }));
  } });
  return F;
}
function Of(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var xf = Ns.default || Ns, ws = {}, Os = {};
function Df({
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
  generateId: h = bo,
  onToolCall: g,
  fetch: S,
  keepLastMessageOnError: A = !0,
  maxSteps: J = 1,
  experimental_prepareRequestBody: F
} = {
  maxSteps: 1
}) {
  var $, V;
  const U = t ?? h(), w = `${e}|${U}`, { data: _, mutate: v } = xf(
    w,
    () => {
      var W;
      return (W = ws[w]) != null ? W : Pn(n);
    }
  ), x = ($ = Os[U]) != null ? $ : Os[U] = je(
    "ready"
  );
  (V = _.value) != null || (_.value = Pn(n));
  const M = (W) => (ws[w] = W, v()), z = _, de = je(void 0), ne = je(void 0);
  let oe = null;
  async function ye(W, { data: ie, headers: ge, body: Ae } = {}) {
    var De, Je, At;
    de.value = void 0, x.value = "submitted";
    const Tn = z.value.length, yt = Gr(
      (De = z.value[z.value.length - 1]) == null ? void 0 : De.toolInvocations
    );
    try {
      oe = new AbortController();
      const ft = Pn(W), c = ft;
      M(c);
      const p = (Je = ne.value) != null ? Je : [], m = o ? c : c.map(
        ({
          role: b,
          content: y,
          experimental_attachments: E,
          data: C,
          annotations: D,
          toolInvocations: O,
          parts: N
        }) => ({
          role: b,
          content: y,
          ...E !== void 0 && {
            experimental_attachments: E
          },
          ...C !== void 0 && { data: C },
          ...D !== void 0 && { annotations: D },
          ...O !== void 0 && { toolInvocations: O },
          ...N !== void 0 && { parts: N }
        })
      );
      await df({
        api: e,
        body: (At = F?.({
          id: U,
          messages: c,
          requestData: ie,
          requestBody: Ae
        })) != null ? At : {
          id: U,
          messages: m,
          data: ie,
          ..._e(f),
          // Use unref to unwrap the ref value
          ...Ae
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...ge
        },
        abortController: () => oe,
        credentials: u,
        onResponse: i,
        onUpdate({ message: b, data: y, replaceLastMessage: E }) {
          x.value = "streaming", M([
            ...E ? c.slice(0, c.length - 1) : c,
            b
          ]), y?.length && (ne.value = [...p, ...y]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          A || M(ft);
        },
        generateId: h,
        onToolCall: g,
        fetch: S,
        // enabled use of structured clone in processChatResponse:
        lastMessage: zr(c[c.length - 1])
      }), x.value = "ready";
    } catch (ft) {
      if (ft.name === "AbortError")
        return oe = null, x.value = "ready", null;
      a && ft instanceof Error && a(ft), de.value = ft, x.value = "error";
    } finally {
      oe = null;
    }
    pf({
      originalMaxToolInvocationStep: yt,
      originalMessageCount: Tn,
      maxSteps: J,
      messages: z.value
    }) && await ye(z.value);
  }
  const xe = async (W, ie) => {
    var ge, Ae, De;
    const Je = await ys(
      (ge = ie?.experimental_attachments) != null ? ge : W.experimental_attachments
    );
    return ye(
      z.value.concat({
        ...W,
        id: (Ae = W.id) != null ? Ae : h(),
        createdAt: (De = W.createdAt) != null ? De : /* @__PURE__ */ new Date(),
        experimental_attachments: Je.length > 0 ? Je : void 0,
        parts: qi(W)
      }),
      ie
    );
  }, ae = async (W) => {
    const ie = z.value;
    return ie.length === 0 ? null : ie[ie.length - 1].role === "assistant" ? ye(ie.slice(0, -1), W) : ye(ie, W);
  }, B = () => {
    oe && (oe.abort(), oe = null);
  }, Y = (W) => {
    typeof W == "function" && (W = W(z.value)), M(Pn(W));
  }, $e = (W) => {
    typeof W == "function" && (W = W(ne.value)), ne.value = W;
  }, _t = je(r), vt = async (W, ie = {}) => {
    var ge;
    (ge = W?.preventDefault) == null || ge.call(W);
    const Ae = _t.value;
    if (!Ae && !ie.allowEmptySubmit)
      return;
    const De = await ys(
      ie.experimental_attachments
    );
    ye(
      z.value.concat({
        id: h(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ae,
        role: "user",
        experimental_attachments: De.length > 0 ? De : void 0,
        parts: [{ type: "text", text: Ae }]
      }),
      ie
    ), _t.value = "";
  }, ut = ({
    toolCallId: W,
    result: ie
  }) => {
    const ge = z.value;
    if (hf({
      messages: ge,
      toolCallId: W,
      toolResult: ie
    }), M(ge), x.value === "submitted" || x.value === "streaming")
      return;
    const Ae = ge[ge.length - 1];
    Gi(Ae) && ye(ge);
  };
  return {
    id: U,
    messages: z,
    append: xe,
    error: de,
    reload: ae,
    stop: B,
    setMessages: Y,
    input: _t,
    handleSubmit: vt,
    isLoading: yo(
      () => x.value === "submitted" || x.value === "streaming"
    ),
    status: x,
    data: ne,
    setData: $e,
    addToolResult: ut
  };
}
function zr(e) {
  if (Array.isArray(e))
    return [...e.map(zr)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, r] of Object.entries(e))
      t[n] = zr(r);
    return t;
  } else
    return e;
}
function Sf(e) {
  const t = je(!1), n = je("");
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
    isRecording: Jn(t),
    error: Jn(n),
    start: s,
    stop: i
  };
}
const If = { class: "ai-bubble-container" }, Cf = { class: "toolbar" }, Tf = ["value"], Vf = { class: "messages-area" }, Af = { class: "message-bubble ai-bubble" }, Rf = ["src"], Pf = {
  key: 1,
  class: "text-content"
}, Mf = { class: "message-bubble user-bubble" }, kf = { class: "text-content" }, $f = {
  key: 0,
  class: "message-wrapper"
}, jf = { class: "message-row" }, Ff = { class: "message-bubble ai-bubble" }, Lf = {
  key: 0,
  class: "dice-animation"
}, Hf = { key: 1 }, Uf = ["disabled"], Bf = { class: "modal-content" }, Kf = /* @__PURE__ */ ri({
  __name: "AiChatBubble",
  props: {
    apiUrl: {}
  },
  setup(e) {
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s } = Df({ api: t.apiUrl }), { isRecording: i, start: l, stop: a } = Sf((_) => {
      const v = _.trim();
      if (["发送", "提交", "发出"].includes(v)) {
        o();
        return;
      }
      if (["清空", "清除", "删除"].includes(v)) {
        r.value = "";
        return;
      }
      if (["打开日志", "显示日志", "日志"].includes(v)) {
        d.value = !0;
        return;
      }
      if (["关闭", "隐藏"].includes(v)) {
        d.value = !1, f.value = !1;
        return;
      }
      if (["打开窗口", "备注", "语音库"].includes(v)) {
        f.value = !0;
        return;
      }
      r.value = v;
    }), u = je(!1), d = je(!1), f = je(!1), h = Jt({ x: 600, y: 80 }), g = Jt({ x: 600, y: 200 }), S = je("#ffffff"), A = [
      { name: "白色", value: "#ffffff" },
      { name: "浅灰", value: "#f7f7f7" },
      { name: "青色", value: "#e0f7fa" },
      { name: "橙色", value: "#ffe0b2" },
      { name: "粉色", value: "#fce4ec" },
      { name: "绿色", value: "#e8f5e9" },
      { name: "蓝色", value: "#e3f2fd" },
      { name: "紫色", value: "#f3e5f5" }
    ];
    function J() {
      u.value = !u.value, u.value || (d.value = !1, f.value = !1);
    }
    const F = je(null);
    function $(_) {
      return _.trim().startsWith("<audio");
    }
    function V(_) {
      const v = _.match(/src="([^"]+)"/);
      return v ? v[1] : null;
    }
    const U = yo(() => {
      if (!s.value) return !1;
      const _ = [...n.value].reverse().find((v) => v.role === "user");
      return !!(_ && /摇骰子|摇色子|掷骰子/.test(_.content));
    });
    cn(n, async (_) => {
      const v = _[_.length - 1];
      if (v?.role === "assistant" && $(v.content)) {
        if (!V(v.content)) return;
        await pr(), F.value?.play().catch(() => {
          console.warn("Audio autoplay was prevented by the browser.");
        });
      }
    }, { deep: !0 });
    function w(_, v) {
      v.preventDefault();
      const x = v.clientX, M = v.clientY, z = _.x, de = _.y;
      function ne(ye) {
        _.x = z + (ye.clientX - x), _.y = de + (ye.clientY - M);
      }
      function oe() {
        document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", oe);
      }
      document.addEventListener("mousemove", ne), document.addEventListener("mouseup", oe);
    }
    return fo(() => {
    }), (_, v) => (pe(), me("div", If, [
      H("div", {
        class: "floating-button",
        onClick: J
      }, " 🤖 AI "),
      u.value ? (pe(), me("div", {
        key: 0,
        class: "chat-main",
        style: Ht({ backgroundColor: S.value })
      }, [
        H("div", Cf, [
          H("button", {
            class: "toolbar-btn",
            onClick: v[0] || (v[0] = (x) => d.value = !0)
          }, "📜日志"),
          H("button", {
            class: "toolbar-btn",
            onClick: v[1] || (v[1] = (x) => f.value = !0)
          }, "📚备注"),
          Po(H("select", {
            "onUpdate:modelValue": v[2] || (v[2] = (x) => S.value = x),
            class: "theme-select"
          }, [
            (pe(), me(we, null, Dr(A, (x) => H("option", {
              key: x.value,
              value: x.value
            }, en(x.name), 9, Tf)), 64))
          ], 512), [
            [su, S.value]
          ]),
          H("button", {
            class: "toolbar-btn close-chat-btn",
            onClick: J
          }, "❌")
        ]),
        H("div", Vf, [
          (pe(!0), me(we, null, Dr(_e(n), (x) => (pe(), me("div", {
            key: x.id,
            class: Ut(["message-wrapper", { "is-user": x.role === "user" }])
          }, [
            H("div", {
              class: Ut(["message-row", { "is-user-row": x.role === "user" }])
            }, [
              x.role === "assistant" ? (pe(), me(we, { key: 0 }, [
                v[11] || (v[11] = H("span", { class: "message-label" }, "AI", -1)),
                H("div", Af, [
                  x.content.trim().startsWith("<audio") ? (pe(), me("audio", {
                    key: 0,
                    ref_for: !0,
                    ref_key: "audioRef",
                    ref: F,
                    src: V(x.content) ?? "",
                    controls: "",
                    autoplay: ""
                  }, null, 8, Rf)) : (pe(), me("p", Pf, en(x.content), 1))
                ])
              ], 64)) : x.role === "user" ? (pe(), me(we, { key: 1 }, [
                H("div", Mf, [
                  H("p", kf, en(x.content), 1)
                ]),
                v[12] || (v[12] = H("span", { class: "message-label" }, "You", -1))
              ], 64)) : Qt("", !0)
            ], 2)
          ], 2))), 128)),
          _e(s) ? (pe(), me("div", $f, [
            H("div", jf, [
              v[14] || (v[14] = H("span", { class: "message-label" }, "AI", -1)),
              H("div", Ff, [
                U.value ? (pe(), me("div", Lf, v[13] || (v[13] = [
                  H("span", { class: "die" }, "⚀", -1),
                  H("span", { class: "die" }, "⚂", -1),
                  H("span", { class: "die" }, "⚅", -1)
                ]))) : (pe(), me("div", Hf, "思考中..."))
              ])
            ])
          ])) : Qt("", !0)
        ]),
        H("form", {
          onSubmit: v[6] || (v[6] = ds(
            //@ts-ignore
            (...x) => _e(o) && _e(o)(...x),
            ["prevent"]
          )),
          class: "input-form"
        }, [
          Po(H("textarea", {
            "onUpdate:modelValue": v[3] || (v[3] = (x) => le(r) ? r.value = x : null),
            placeholder: "请输入您的问题，或点击麦克风说话：",
            class: "chat-textarea",
            rows: "2",
            onKeydown: v[4] || (v[4] = cu(ds(
              //@ts-ignore
              (...x) => _e(o) && _e(o)(...x),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ou, _e(r)]
          ]),
          H("button", {
            type: "button",
            onClick: v[5] || (v[5] = (x) => _e(i) ? _e(a)() : _e(l)()),
            class: Ut(["mic-button", { "is-listening": _e(i) }]),
            title: "语音输入"
          }, " 🎤 ", 2),
          H("button", {
            type: "submit",
            disabled: _e(s)
          }, "发送", 8, Uf)
        ], 32)
      ], 4)) : Qt("", !0),
      u.value && d.value ? (pe(), me("div", {
        key: 1,
        class: "draggable-modal",
        style: Ht({ left: h.x + "px", top: h.y + "px" })
      }, [
        H("div", {
          class: "modal-header",
          onMousedown: v[8] || (v[8] = (x) => w(h, x))
        }, [
          v[15] || (v[15] = H("span", null, "Debug Log", -1)),
          H("button", {
            class: "close-btn",
            onClick: v[7] || (v[7] = (x) => d.value = !1)
          }, "✖")
        ], 32),
        H("div", Bf, [
          (pe(!0), me(we, null, Dr(_e(n), (x) => (pe(), me("div", {
            key: x.id,
            class: "log-entry"
          }, [
            H("pre", null, en(JSON.stringify(x, null, 2)), 1),
            v[16] || (v[16] = H("hr", null, null, -1))
          ]))), 128))
        ])
      ], 4)) : Qt("", !0),
      u.value && f.value ? (pe(), me("div", {
        key: 2,
        class: "draggable-modal",
        style: Ht({ left: g.x + "px", top: g.y + "px" })
      }, [
        H("div", {
          class: "modal-header",
          onMousedown: v[10] || (v[10] = (x) => w(g, x))
        }, [
          v[17] || (v[17] = H("span", null, "备注", -1)),
          H("button", {
            class: "close-btn",
            onClick: v[9] || (v[9] = (x) => f.value = !1)
          }, "✖")
        ], 32),
        v[18] || (v[18] = H("div", { class: "modal-content pre-wrap text-center" }, [
          H("div", null, "中文语音库"),
          H("div", null, "zf_xiaobei"),
          H("div", null, "zf_xiaoni"),
          H("div", null, "zf_xiaoxiao"),
          H("div", null, "zf_xiaoyi"),
          H("div", null, "zm_yunjian"),
          H("div", null, "zm_yunxi"),
          H("div", null, "zm_yunxia"),
          H("div", null, "zm_yunyang")
        ], -1))
      ], 4)) : Qt("", !0)
    ]));
  }
}), Wf = /* @__PURE__ */ tu(Kf);
customElements.define("ai-chat-bubble", Wf);
