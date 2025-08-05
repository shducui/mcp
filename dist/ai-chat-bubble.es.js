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
const ee = vs.NODE_ENV !== "production" ? Object.freeze({}) : {}, Wt = vs.NODE_ENV !== "production" ? Object.freeze([]) : [], pe = () => {
}, Xi = () => !1, wn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Bn = (e) => e.startsWith("onUpdate:"), le = Object.assign, qo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Zi = Object.prototype.hasOwnProperty, q = (e, t) => Zi.call(e, t), M = Array.isArray, Tt = (e) => no(e) === "[object Map]", Ns = (e) => no(e) === "[object Set]", L = (e) => typeof e == "function", ie = (e) => typeof e == "string", Nt = (e) => typeof e == "symbol", oe = (e) => e !== null && typeof e == "object", Go = (e) => (oe(e) || L(e)) && L(e.then) && L(e.catch), ws = Object.prototype.toString, no = (e) => ws.call(e), Xo = (e) => no(e).slice(8, -1), oo = (e) => no(e) === "[object Object]", Zo = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, nn = /* @__PURE__ */ ft(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qi = /* @__PURE__ */ ft(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ro = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, el = /-(\w)/g, Ve = ro(
  (e) => e.replace(el, (t, n) => n ? n.toUpperCase() : "")
), tl = /\B([A-Z])/g, Ce = ro(
  (e) => e.replace(tl, "-$1").toLowerCase()
), so = ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), St = ro(
  (e) => e ? `on${so(e)}` : ""
), Et = (e, t) => !Object.is(e, t), Ft = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, un = (e, t, n, o = !1) => {
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
const On = () => xr || (xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function io(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ie(o) ? sl(o) : io(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (ie(e) || oe(e))
    return e;
}
const nl = /;(?![^(]*\))/g, ol = /:([^]+)/, rl = /\/\*[^]*?\*\//g;
function sl(e) {
  const t = {};
  return e.replace(rl, "").split(nl).forEach((n) => {
    if (n) {
      const o = n.split(ol);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function fn(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const o = fn(e[n]);
      o && (t += o + " ");
    }
  else if (oe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const il = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ll = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", al = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", cl = /* @__PURE__ */ ft(il), ul = /* @__PURE__ */ ft(ll), fl = /* @__PURE__ */ ft(al), dl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pl = /* @__PURE__ */ ft(dl);
function Os(e) {
  return !!e || e === "";
}
const xs = (e) => !!(e && e.__v_isRef === !0), Ds = (e) => ie(e) ? e : e == null ? "" : M(e) || oe(e) && (e.toString === ws || !L(e.toString)) ? xs(e) ? Ds(e.value) : JSON.stringify(e, Ss, 2) : String(e), Ss = (e, t) => xs(t) ? Ss(e, t.value) : Tt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[_o(o, s) + " =>"] = r, n),
    {}
  )
} : Ns(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => _o(n))
} : Nt(t) ? _o(t) : oe(t) && !M(t) && !oo(t) ? String(t) : t, _o = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Nt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var re = {};
function Be(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Te;
class hl {
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
function gl() {
  return Te;
}
let Q;
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
    const t = Q, n = Ue;
    Q = this, Ue = !0;
    try {
      return this.fn();
    } finally {
      re.NODE_ENV !== "production" && Q !== this && Be(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), As(this), Q = t, Ue = n, this.flags &= -3;
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
    o.version === -1 ? (o === n && (n = r), tr(o), ml(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ao(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Q, o = Ue;
  Q = e, Ue = !0;
  try {
    Vs(e);
    const r = e.fn(e._value);
    (t.version === 0 || Et(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Q = n, Ue = o, As(e), e.flags &= -3;
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
function ml(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ue = !0;
const Ps = [];
function We() {
  Ps.push(Ue), Ue = !1;
}
function Ke() {
  const e = Ps.pop();
  Ue = e === void 0 ? !0 : e;
}
function Dr(e) {
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
let dn = 0;
class _l {
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
    if (!Q || !Ue || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new _l(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, ks(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = o);
    }
    return re.NODE_ENV !== "production" && Q.onTrack && Q.onTrack(
      le(
        {
          effect: Q
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, dn++, this.notify(t);
  }
  notify(t) {
    Qo();
    try {
      if (re.NODE_ENV !== "production")
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
const Wn = /* @__PURE__ */ new WeakMap(), Ct = Symbol(
  re.NODE_ENV !== "production" ? "Object iterate" : ""
), Ro = Symbol(
  re.NODE_ENV !== "production" ? "Map keys iterate" : ""
), pn = Symbol(
  re.NODE_ENV !== "production" ? "Array iterate" : ""
);
function de(e, t, n) {
  if (Ue && Q) {
    let o = Wn.get(e);
    o || Wn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new nr()), r.map = o, r.key = n), re.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function Qe(e, t, n, o, r, s) {
  const i = Wn.get(e);
  if (!i) {
    dn++;
    return;
  }
  const l = (a) => {
    a && (re.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : a.trigger());
  };
  if (Qo(), t === "clear")
    i.forEach(l);
  else {
    const a = M(e), f = a && Zo(n);
    if (a && n === "length") {
      const d = Number(o);
      i.forEach((u, h) => {
        (h === "length" || h === pn || !Nt(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(pn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Ct)), Tt(e) && l(i.get(Ro)));
          break;
        case "delete":
          a || (l(i.get(Ct)), Tt(e) && l(i.get(Ro)));
          break;
        case "set":
          Tt(e) && l(i.get(Ct));
          break;
      }
  }
  er();
}
function bl(e, t) {
  const n = Wn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = K(e);
  return t === e ? t : (de(t, "iterate", pn), xe(e) ? t : t.map(me));
}
function lo(e) {
  return de(e = K(e), "iterate", pn), e;
}
const yl = {
  __proto__: null,
  [Symbol.iterator]() {
    return yo(this, Symbol.iterator, me);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => M(t) ? Mt(t) : t)
    );
  },
  entries() {
    return yo(this, "entries", (e) => (e[1] = me(e[1]), e));
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
    return lt(this, "map", e, t, void 0, arguments);
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
    return yo(this, "values", me);
  }
};
function yo(e, t, n) {
  const o = lo(e), r = o[t]();
  return o !== e && !xe(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const El = Array.prototype;
function lt(e, t, n, o, r, s) {
  const i = lo(e), l = i !== e && !xe(e), a = i[t];
  if (a !== El[t]) {
    const u = a.apply(e, s);
    return l ? me(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, h) {
    return n.call(this, me(u), h, e);
  } : n.length > 2 && (f = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const d = a.call(i, f, o);
  return l && r ? r(d) : d;
}
function Sr(e, t, n, o) {
  const r = lo(e);
  let s = n;
  return r !== e && (xe(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, me(l), a, e);
  }), r[t](s, ...o);
}
function Eo(e, t, n) {
  const o = K(e);
  de(o, "iterate", pn);
  const r = o[t](...n);
  return (r === -1 || r === !1) && hn(n[0]) ? (n[0] = K(n[0]), o[t](...n)) : r;
}
function Gt(e, t, n = []) {
  We(), Qo();
  const o = K(e)[t].apply(e, n);
  return er(), Ke(), o;
}
const vl = /* @__PURE__ */ ft("__proto__,__v_isRef,__isVue"), Ms = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Nt)
);
function Nl(e) {
  Nt(e) || (e = String(e));
  const t = K(this);
  return de(t, "has", e), t.hasOwnProperty(e);
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
      ue(t) ? t : o
    );
    return (Nt(n) ? Ms.has(n) : vl(n)) || (r || de(t, "get", n), s) ? l : ue(l) ? i && Zo(n) ? l : l.value : oe(l) ? r ? sn(l) : xn(l) : l;
  }
}
class js extends $s {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Je(s);
      if (!xe(o) && !Je(o) && (s = K(s), o = K(o)), !M(t) && ue(s) && !ue(o))
        return a ? !1 : (s.value = o, !0);
    }
    const i = M(t) && Zo(n) ? Number(n) < t.length : q(t, n), l = Reflect.set(
      t,
      n,
      o,
      ue(t) ? t : r
    );
    return t === K(r) && (i ? Et(o, s) && Qe(t, "set", n, o, s) : Qe(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = q(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Qe(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Nt(n) || !Ms.has(n)) && de(t, "has", n), o;
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
const wl = /* @__PURE__ */ new js(), Ol = /* @__PURE__ */ new Fs(), xl = /* @__PURE__ */ new js(!0), Dl = /* @__PURE__ */ new Fs(!0), Po = (e) => e, Vn = (e) => Reflect.getPrototypeOf(e);
function Sl(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = K(r), i = Tt(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = r[e](...o), d = n ? Po : t ? Kn : me;
    return !t && de(
      s,
      "iterate",
      a ? Ro : Ct
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
    if (re.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Be(
        `${so(e)} operation ${n}failed: target is readonly.`,
        K(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Il(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = K(s), l = K(r);
      e || (Et(r, l) && de(i, "get", r), de(i, "get", l));
      const { has: a } = Vn(i), f = t ? Po : e ? Kn : me;
      if (a.call(i, r))
        return f(s.get(r));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && de(K(r), "iterate", Ct), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = K(s), l = K(r);
      return e || (Et(r, l) && de(i, "has", r), de(i, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    },
    forEach(r, s) {
      const i = this, l = i.__v_raw, a = K(l), f = t ? Po : e ? Kn : me;
      return !e && de(a, "iterate", Ct), l.forEach((d, u) => r.call(s, f(d), f(u), i));
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
      add(r) {
        !t && !xe(r) && !Je(r) && (r = K(r));
        const s = K(this);
        return Vn(s).has.call(s, r) || (s.add(r), Qe(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !xe(s) && !Je(s) && (s = K(s));
        const i = K(this), { has: l, get: a } = Vn(i);
        let f = l.call(i, r);
        f ? re.NODE_ENV !== "production" && Ir(i, l, r) : (r = K(r), f = l.call(i, r));
        const d = a.call(i, r);
        return i.set(r, s), f ? Et(s, d) && Qe(i, "set", r, s, d) : Qe(i, "add", r, s), this;
      },
      delete(r) {
        const s = K(this), { has: i, get: l } = Vn(s);
        let a = i.call(s, r);
        a ? re.NODE_ENV !== "production" && Ir(s, i, r) : (r = K(r), a = i.call(s, r));
        const f = l ? l.call(s, r) : void 0, d = s.delete(r);
        return a && Qe(s, "delete", r, void 0, f), d;
      },
      clear() {
        const r = K(this), s = r.size !== 0, i = re.NODE_ENV !== "production" ? Tt(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return s && Qe(
          r,
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
  ].forEach((r) => {
    n[r] = Sl(r, e, t);
  }), n;
}
function ao(e, t) {
  const n = Il(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    q(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Tl = {
  get: /* @__PURE__ */ ao(!1, !1)
}, Cl = {
  get: /* @__PURE__ */ ao(!1, !0)
}, Vl = {
  get: /* @__PURE__ */ ao(!0, !1)
}, Al = {
  get: /* @__PURE__ */ ao(!0, !0)
};
function Ir(e, t, n) {
  const o = K(n);
  if (o !== n && t.call(e, o)) {
    const r = Xo(e);
    Be(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Rl(Xo(e));
}
function xn(e) {
  return Je(e) ? e : co(
    e,
    !1,
    wl,
    Tl,
    Ls
  );
}
function kl(e) {
  return co(
    e,
    !1,
    xl,
    Cl,
    Hs
  );
}
function sn(e) {
  return co(
    e,
    !0,
    Ol,
    Vl,
    Us
  );
}
function tt(e) {
  return co(
    e,
    !0,
    Dl,
    Al,
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
  const s = Pl(e);
  if (s === 0)
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Vt(e) {
  return Je(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Je(e) {
  return !!(e && e.__v_isReadonly);
}
function xe(e) {
  return !!(e && e.__v_isShallow);
}
function hn(e) {
  return e ? !!e.__v_raw : !1;
}
function K(e) {
  const t = e && e.__v_raw;
  return t ? K(t) : e;
}
function Ml(e) {
  return !q(e, "__v_skip") && Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const me = (e) => oe(e) ? xn(e) : e, Kn = (e) => oe(e) ? sn(e) : e;
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
    this.dep = new nr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : K(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return re.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || xe(t) || Je(t);
    t = o ? t : K(t), Et(t, n) && (this._rawValue = t, this._value = o ? t : me(t), re.NODE_ENV !== "production" ? this.dep.trigger({
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
  set: (e, t, n, o) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ws(e) {
  return Vt(e) ? e : new Proxy(e, Fl);
}
function Ll(e) {
  re.NODE_ENV !== "production" && !hn(e) && Be("toRefs() expects a reactive object but received a plain one.");
  const t = M(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Ul(e, n);
  return t;
}
class Hl {
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
    return bl(K(this._object), this._key);
  }
}
function Ul(e, t, n) {
  const o = e[t];
  return ue(o) ? o : new Hl(e, t, n);
}
class Bl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new nr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
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
function Wl(e, t, n = !1) {
  let o, r;
  return L(e) ? o = e : (o = e.get, r = e.set), new Bl(o, r, n);
}
const Rn = {}, Jn = /* @__PURE__ */ new WeakMap();
let It;
function Kl(e, t = !1, n = It) {
  if (n) {
    let o = Jn.get(n);
    o || Jn.set(n, o = []), o.push(e);
  } else re.NODE_ENV !== "production" && !t && Be(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jl(e, t, n = ee) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (x) => {
    (n.onWarn || Be)(
      "Invalid watch source: ",
      x,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (x) => r ? x : xe(x) || r === !1 || r === 0 ? ut(x, 1) : ut(x);
  let u, h, m, D, V = !1, Y = !1;
  if (ue(e) ? (h = () => e.value, V = xe(e)) : Vt(e) ? (h = () => d(e), V = !0) : M(e) ? (Y = !0, V = e.some((x) => Vt(x) || xe(x)), h = () => e.map((x) => {
    if (ue(x))
      return x.value;
    if (Vt(x))
      return d(x);
    if (L(x))
      return a ? a(x, 2) : x();
    re.NODE_ENV !== "production" && f(x);
  })) : L(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      We();
      try {
        m();
      } finally {
        Ke();
      }
    }
    const x = It;
    It = u;
    try {
      return a ? a(e, 3, [D]) : e(D);
    } finally {
      It = x;
    }
  } : (h = pe, re.NODE_ENV !== "production" && f(e)), t && r) {
    const x = h, O = r === !0 ? 1 / 0 : r;
    h = () => ut(x(), O);
  }
  const H = gl(), F = () => {
    u.stop(), H && H.active && qo(H.effects, u);
  };
  if (s && t) {
    const x = t;
    t = (...O) => {
      x(...O), F();
    };
  }
  let R = Y ? new Array(e.length).fill(Rn) : Rn;
  const W = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x))
      if (t) {
        const O = u.run();
        if (r || V || (Y ? O.some(($, v) => Et($, R[v])) : Et(O, R))) {
          m && m();
          const $ = It;
          It = u;
          try {
            const v = [
              O,
              // pass undefined as the old value when it's changed for the first time
              R === Rn ? void 0 : Y && R[0] === Rn ? [] : R,
              D
            ];
            R = O, a ? a(t, 3, v) : (
              // @ts-expect-error
              t(...v)
            );
          } finally {
            It = $;
          }
        }
      } else
        u.run();
  };
  return l && l(W), u = new Is(h), u.scheduler = i ? () => i(W, !1) : W, D = (x) => Kl(x, !1, u), m = u.onStop = () => {
    const x = Jn.get(u);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const O of x) O();
      Jn.delete(u);
    }
  }, re.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? W(!0) : R = u.run() : i ? i(W.bind(null, !0), !0) : u.run(), F.pause = u.pause.bind(u), F.resume = u.resume.bind(u), F.stop = F, F;
}
function ut(e, t = 1 / 0, n) {
  if (t <= 0 || !oe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    ut(e.value, t, n);
  else if (M(e))
    for (let o = 0; o < e.length; o++)
      ut(e[o], t, n);
  else if (Ns(e) || Tt(e))
    e.forEach((o) => {
      ut(o, t, n);
    });
  else if (oo(e)) {
    for (const o in e)
      ut(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && ut(e[o], t, n);
  }
  return e;
}
var g = {};
const At = [];
function kn(e) {
  At.push(e);
}
function Mn() {
  At.pop();
}
let vo = !1;
function T(e, ...t) {
  if (vo) return;
  vo = !0, We();
  const n = At.length ? At[At.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = zl();
  if (o)
    Yt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, l;
          return (l = (i = s.toString) == null ? void 0 : i.call(s)) != null ? l : JSON.stringify(s);
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
`, ...Yl(r)), console.warn(...s);
  }
  Ke(), vo = !1;
}
function zl() {
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
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Yl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ql(n));
  }), t;
}
function ql({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${mo(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Gl(e.props), s] : [r + s];
}
function Gl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Ks(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ks(e, t, n) {
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = Ks(e, K(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : L(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = K(t), n ? t : [`${e}=`, t]);
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
function Yt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Dn(r, t, n);
  }
}
function rt(e, t, n, o) {
  if (L(e)) {
    const r = Yt(e, t, n, o);
    return r && Go(r) && r.catch((s) => {
      Dn(s, t, n);
    }), r;
  }
  if (M(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(rt(e[s], t, n, o));
    return r;
  } else g.NODE_ENV !== "production" && T(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Dn(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = g.NODE_ENV !== "production" ? or[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      We(), Yt(s, null, 10, [
        e,
        a,
        f
      ]), Ke();
      return;
    }
  }
  Xl(e, n, r, o, i);
}
function Xl(e, t, n, o = !0, r = !1) {
  if (g.NODE_ENV !== "production") {
    const s = or[t];
    if (n && kn(n), T(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Mn(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const we = [];
let Ze = -1;
const Kt = [];
let gt = null, Lt = 0;
const Js = /* @__PURE__ */ Promise.resolve();
let zn = null;
const Zl = 100;
function Yn(e) {
  const t = zn || Js;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ql(e) {
  let t = Ze + 1, n = we.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = we[o], s = gn(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function uo(e) {
  if (!(e.flags & 1)) {
    const t = gn(e), n = we[we.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= gn(n) ? we.push(e) : we.splice(Ql(t), 0, e), e.flags |= 1, zs();
  }
}
function zs() {
  zn || (zn = Js.then(Gs));
}
function Ys(e) {
  M(e) ? Kt.push(...e) : gt && e.id === -1 ? gt.splice(Lt + 1, 0, e) : e.flags & 1 || (Kt.push(e), e.flags |= 1), zs();
}
function Tr(e, t, n = Ze + 1) {
  for (g.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < we.length; n++) {
    const o = we[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || g.NODE_ENV !== "production" && rr(t, o))
        continue;
      we.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function qs(e) {
  if (Kt.length) {
    const t = [...new Set(Kt)].sort(
      (n, o) => gn(n) - gn(o)
    );
    if (Kt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < gt.length; Lt++) {
      const n = gt[Lt];
      g.NODE_ENV !== "production" && rr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, Lt = 0;
  }
}
const gn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Gs(e) {
  g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = g.NODE_ENV !== "production" ? (n) => rr(e, n) : pe;
  try {
    for (Ze = 0; Ze < we.length; Ze++) {
      const n = we[Ze];
      if (n && !(n.flags & 8)) {
        if (g.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Yt(
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
    Ze = -1, we.length = 0, qs(e), zn = null, (we.length || Kt.length) && Gs(e);
  }
}
function rr(e, t) {
  const n = e.get(t) || 0;
  if (n > Zl) {
    const o = t.i, r = o && Ci(o.type);
    return Dn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let nt = !1;
const $n = /* @__PURE__ */ new Map();
g.NODE_ENV !== "production" && (On().__VUE_HMR_RUNTIME__ = {
  createRecord: No(Xs),
  rerender: No(na),
  reload: No(oa)
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
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, qn(o.type).render = t), o.renderCache = [], nt = !0, o.update(), nt = !1;
  }));
}
function oa(e, t) {
  const n = Pt.get(e);
  if (!n) return;
  t = qn(t), Cr(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = qn(s.type);
    let l = $n.get(i);
    l || (i !== n.initialDef && Cr(i, t), $n.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? uo(() => {
      nt = !0, s.parent.update(), nt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Ys(() => {
    $n.clear();
  });
}
function Cr(e, t) {
  le(e, t);
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
function Sn(e, ...t) {
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
function ra(e, t) {
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
const ia = /* @__PURE__ */ sr(
  "component:added"
  /* COMPONENT_ADDED */
), Qs = /* @__PURE__ */ sr(
  "component:updated"
  /* COMPONENT_UPDATED */
), la = /* @__PURE__ */ sr(
  "component:removed"
  /* COMPONENT_REMOVED */
), aa = (e) => {
  et && typeof et.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !et.cleanupBuffer(e) && la(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function sr(e) {
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
  return (t, n, o) => {
    Sn(e, t.appContext.app, t.uid, t, n, o);
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
let Oe = null, ti = null;
function Gn(e) {
  const t = Oe;
  return Oe = e, ti = e && e.type.__scopeId || null, t;
}
function da(e, t = Oe, n) {
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
    return g.NODE_ENV !== "production" && Qs(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ni(e) {
  Qi(e) && T("Do not use built-in directive ids as custom directive id: " + e);
}
function pa(e, t) {
  if (Oe === null)
    return g.NODE_ENV !== "production" && T("withDirectives can only be used inside render functions."), e;
  const n = go(Oe), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, l, a = ee] = t[r];
    s && (L(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && ut(i), o.push({
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
function Ot(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[o];
    a && (We(), rt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ke());
  }
}
const ha = Symbol("_vte"), ga = (e) => e.__isTeleport;
function ir(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ir(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function oi(e, t) {
  return L(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function ri(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ma = /* @__PURE__ */ new WeakSet();
function ln(e, t, n, o, r = !1) {
  if (M(e)) {
    e.forEach(
      (D, V) => ln(
        D,
        t && (M(t) ? t[V] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (an(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && ln(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? go(o.component) : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (g.NODE_ENV !== "production" && !l) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === ee ? l.refs = {} : l.refs, u = l.setupState, h = K(u), m = u === ee ? () => !1 : (D) => g.NODE_ENV !== "production" && (q(h, D) && !ue(h[D]) && T(
    `Template ref "${D}" used on a non-ref value. It will not work in the production build.`
  ), ma.has(h[D])) ? !1 : q(h, D);
  if (f != null && f !== a && (ie(f) ? (d[f] = null, m(f) && (u[f] = null)) : ue(f) && (f.value = null)), L(a))
    Yt(a, l, 12, [i, d]);
  else {
    const D = ie(a), V = ue(a);
    if (D || V) {
      const Y = () => {
        if (e.f) {
          const H = D ? m(a) ? u[a] : d[a] : a.value;
          r ? M(H) && qo(H, s) : M(H) ? H.includes(s) || H.push(s) : D ? (d[a] = [s], m(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else D ? (d[a] = i, m(a) && (u[a] = i)) : V ? (a.value = i, e.k && (d[e.k] = i)) : g.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (Y.id = -1, Pe(Y, n)) : Y();
    } else g.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
  }
}
On().requestIdleCallback;
On().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, lr = (e) => e.type.__isKeepAlive;
function _a(e, t) {
  si(e, "a", t);
}
function ba(e, t) {
  si(e, "da", t);
}
function si(e, t, n = _e) {
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
      lr(r.parent.vnode) && ya(o, t, n, r), r = r.parent;
  }
}
function ya(e, t, n, o) {
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
function fo(e, t, n = _e, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      We();
      const l = Tn(n), a = rt(t, n, e, i);
      return l(), Ke(), a;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (g.NODE_ENV !== "production") {
    const r = St(or[e].replace(/ hook$/, ""));
    T(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const dt = (e) => (t, n = _e) => {
  (!_n || e === "sp") && fo(e, (...o) => t(...o), n);
}, Ea = dt("bm"), ar = dt("m"), va = dt(
  "bu"
), Na = dt("u"), wa = dt(
  "bum"
), cr = dt("um"), Oa = dt(
  "sp"
), xa = dt("rtg"), Da = dt("rtc");
function Sa(e, t = _e) {
  fo("ec", e, t);
}
const Ia = Symbol.for("v-ndc");
function Ta(e, t, n, o) {
  let r;
  const s = n, i = M(e);
  if (i || ie(e)) {
    const l = i && Vt(e);
    let a = !1, f = !1;
    l && (a = !xe(e), f = Je(e), e = lo(e)), r = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(
        a ? f ? Kn(me(e[d])) : me(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    g.NODE_ENV !== "production" && !Number.isInteger(e) && T(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, s);
  } else if (oe(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, s)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, f = l.length; a < f; a++) {
        const d = l[a];
        r[a] = t(e[d], d, a, s);
      }
    }
  else
    r = [];
  return r;
}
const Mo = (e) => e ? Ii(e) ? go(e) : Mo(e.parent) : null, Rt = (
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
    $parent: (e) => Mo(e.parent),
    $root: (e) => Mo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ai(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      uo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Yn.bind(e.proxy)),
    $watch: (e) => ac.bind(e)
  })
), ur = (e) => e === "_" || e === "$", wo = (e, t) => e !== ee && !e.__isScriptSetup && q(e, t), ii = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: a } = e;
    if (g.NODE_ENV !== "production" && t === "__isVue")
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
        if (r !== ee && q(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && q(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== ee && q(n, t))
          return i[t] = 4, n[t];
        $o && (i[t] = 0);
      }
    }
    const d = Rt[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (de(e.attrs, "get", ""), g.NODE_ENV !== "production" && Qn()) : g.NODE_ENV !== "production" && t === "$slots" && de(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && q(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, q(h, t)
    )
      return h[t];
    g.NODE_ENV !== "production" && Oe && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ee && ur(t[0]) && q(r, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Oe && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return wo(r, t) ? (r[t] = n, !0) : g.NODE_ENV !== "production" && r.__isScriptSetup && q(r, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ee && q(o, t) ? (o[t] = n, !0) : q(e.props, t) ? (g.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (g.NODE_ENV !== "production" && T(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (g.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let l;
    return !!n[i] || e !== ee && q(e, i) || wo(t, i) || (l = s[0]) && q(l, i) || q(o, i) || q(Rt, i) || q(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : q(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
g.NODE_ENV !== "production" && (ii.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ca(e) {
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
      set: pe
    });
  }), t;
}
function Va(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: pe
    });
  });
}
function Aa(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(K(n)).forEach((o) => {
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
        set: pe
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
function Ra() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? T(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let $o = !0;
function Pa(e) {
  const t = ai(e), n = e.proxy, o = e.ctx;
  $o = !1, t.beforeCreate && Ar(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
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
    updated: D,
    activated: V,
    deactivated: Y,
    beforeDestroy: H,
    beforeUnmount: F,
    destroyed: R,
    unmounted: W,
    render: x,
    renderTracked: O,
    renderTriggered: $,
    errorCaptured: v,
    serverPrefetch: b,
    // public API
    expose: P,
    inheritAttrs: Z,
    // assets
    components: G,
    directives: ne,
    filters: fe
  } = t, he = g.NODE_ENV !== "production" ? Ra() : null;
  if (g.NODE_ENV !== "production") {
    const [B] = e.propsOptions;
    if (B)
      for (const J in B)
        he("Props", J);
  }
  if (f && ka(f, o, he), i)
    for (const B in i) {
      const J = i[B];
      L(J) ? (g.NODE_ENV !== "production" ? Object.defineProperty(o, B, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[B] = J.bind(n), g.NODE_ENV !== "production" && he("Methods", B)) : g.NODE_ENV !== "production" && T(
        `Method "${B}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    g.NODE_ENV !== "production" && !L(r) && T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const B = r.call(n, n);
    if (g.NODE_ENV !== "production" && Go(B) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !oe(B))
      g.NODE_ENV !== "production" && T("data() should return an object.");
    else if (e.data = xn(B), g.NODE_ENV !== "production")
      for (const J in B)
        he("Data", J), ur(J[0]) || Object.defineProperty(o, J, {
          configurable: !0,
          enumerable: !0,
          get: () => B[J],
          set: pe
        });
  }
  if ($o = !0, s)
    for (const B in s) {
      const J = s[B], Ee = L(J) ? J.bind(n, n) : L(J.get) ? J.get.bind(n, n) : pe;
      g.NODE_ENV !== "production" && Ee === pe && T(`Computed property "${B}" has no getter.`);
      const st = !L(J) && L(J.set) ? J.set.bind(n) : g.NODE_ENV !== "production" ? () => {
        T(
          `Write operation failed: computed property "${B}" is readonly.`
        );
      } : pe, it = mr({
        get: Ee,
        set: st
      });
      Object.defineProperty(o, B, {
        enumerable: !0,
        configurable: !0,
        get: () => it.value,
        set: (pt) => it.value = pt
      }), g.NODE_ENV !== "production" && he("Computed", B);
    }
  if (l)
    for (const B in l)
      li(l[B], o, n, B);
  if (a) {
    const B = L(a) ? a.call(n) : a;
    Reflect.ownKeys(B).forEach((J) => {
      Ha(J, B[J]);
    });
  }
  d && Ar(d, e, "c");
  function ae(B, J) {
    M(J) ? J.forEach((Ee) => B(Ee.bind(n))) : J && B(J.bind(n));
  }
  if (ae(Ea, u), ae(ar, h), ae(va, m), ae(Na, D), ae(_a, V), ae(ba, Y), ae(Sa, v), ae(Da, O), ae(xa, $), ae(wa, F), ae(cr, W), ae(Oa, b), M(P))
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
  x && e.render === pe && (e.render = x), Z != null && (e.inheritAttrs = Z), G && (e.components = G), ne && (e.directives = ne), b && ri(e);
}
function ka(e, t, n = pe) {
  M(e) && (e = jo(e));
  for (const o in e) {
    const r = e[o];
    let s;
    oe(r) ? "default" in r ? s = jn(
      r.from || o,
      r.default,
      !0
    ) : s = jn(r.from || o) : s = jn(r), ue(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, g.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ar(e, t, n) {
  rt(
    M(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function li(e, t, n, o) {
  let r = o.includes(".") ? Ei(n, o) : () => n[o];
  if (ie(e)) {
    const s = t[e];
    L(s) ? yt(r, s) : g.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e}"`, s);
  } else if (L(e))
    yt(r, e.bind(n));
  else if (oe(e))
    if (M(e))
      e.forEach((s) => li(s, t, n, o));
    else {
      const s = L(e.handler) ? e.handler.bind(n) : t[e.handler];
      L(s) ? yt(r, s, e) : g.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else g.NODE_ENV !== "production" && T(`Invalid watch option: "${o}"`, e);
}
function ai(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(
    (f) => Xn(a, f, i, !0)
  ), Xn(a, t, i)), oe(t) && s.set(t, a), a;
}
function Xn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Xn(e, s, n, !0), r && r.forEach(
    (i) => Xn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      g.NODE_ENV !== "production" && T(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ma[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ma = {
  data: Rr,
  props: Pr,
  emits: Pr,
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
  provide: Rr,
  inject: $a
};
function Rr(e, t) {
  return t ? e ? function() {
    return le(
      L(e) ? e.call(this, this) : e,
      L(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function $a(e, t) {
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
function Ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function tn(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Pr(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    Vr(e),
    Vr(t ?? {})
  ) : t;
}
function ja(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = Ne(e[o], t[o]);
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
  return function(o, r = null) {
    L(o) || (o = le({}, o)), r != null && !oe(r) && (g.NODE_ENV !== "production" && T("root props passed to app.mount() must be an object."), r = null);
    const s = ci(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = s.app = {
      _uid: Fa++,
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
        g.NODE_ENV !== "production" && T(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? g.NODE_ENV !== "production" && T("Plugin has already been applied to target app.") : d && L(d.install) ? (i.add(d), d.install(f, ...u)) : L(d) ? (i.add(d), d(f, ...u)) : g.NODE_ENV !== "production" && T(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? g.NODE_ENV !== "production" && T(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return g.NODE_ENV !== "production" && Bo(d, s.config), u ? (g.NODE_ENV !== "production" && s.components[d] && T(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return g.NODE_ENV !== "production" && ni(d), u ? (g.NODE_ENV !== "production" && s.directives[d] && T(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
      },
      mount(d, u, h) {
        if (a)
          g.NODE_ENV !== "production" && T(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          g.NODE_ENV !== "production" && d.__vue_app__ && T(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = f._ceVNode || ot(o, r);
          return m.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), g.NODE_ENV !== "production" && (s.reload = () => {
            const D = vt(m);
            D.el = null, e(D, d, h);
          }), e(m, d, h), a = !0, f._container = d, d.__vue_app__ = f, g.NODE_ENV !== "production" && (f._instance = m.component, ra(f, Jr)), go(m.component);
        }
      },
      onUnmount(d) {
        g.NODE_ENV !== "production" && typeof d != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (rt(
          l,
          f._instance,
          16
        ), e(null, f._container), g.NODE_ENV !== "production" && (f._instance = null, sa(f)), delete f._container.__vue_app__) : g.NODE_ENV !== "production" && T("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return g.NODE_ENV !== "production" && d in s.provides && (q(s.provides, d) ? T(
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
function Ha(e, t) {
  if (!_e)
    g.NODE_ENV !== "production" && T("provide() can only be used inside setup().");
  else {
    let n = _e.provides;
    const o = _e.parent && _e.parent.provides;
    o === n && (n = _e.provides = Object.create(o)), n[e] = t;
  }
}
function jn(e, t, n = !1) {
  const o = gr();
  if (o || Jt) {
    let r = Jt ? Jt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && L(t) ? t.call(o && o.proxy) : t;
    g.NODE_ENV !== "production" && T(`injection "${String(e)}" not found.`);
  } else g.NODE_ENV !== "production" && T("inject() can only be used inside setup() or functional components.");
}
const ui = {}, fi = () => Object.create(ui), di = (e) => Object.getPrototypeOf(e) === ui;
function Ua(e, t, n, o = !1) {
  const r = {}, s = fi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), pi(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  g.NODE_ENV !== "production" && gi(t || {}, r, e), n ? e.props = o ? r : kl(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Ba(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Wa(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = K(r), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(g.NODE_ENV !== "production" && Ba(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (po(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (q(s, h))
            m !== s[h] && (s[h] = m, f = !0);
          else {
            const D = Ve(h);
            r[D] = Fo(
              a,
              l,
              D,
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
    pi(e, t, r, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !q(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ce(u)) === u || !q(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[u] = Fo(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (s !== l)
      for (const u in s)
        (!t || !q(t, u)) && (delete s[u], f = !0);
  }
  f && Qe(e.attrs, "set", ""), g.NODE_ENV !== "production" && gi(t || {}, r, e);
}
function pi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (nn(a))
        continue;
      const f = t[a];
      let d;
      r && q(r, d = Ve(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : po(e.emitsOptions, a) || (!(a in o) || f !== o[a]) && (o[a] = f, i = !0);
    }
  if (s) {
    const a = K(n), f = l || ee;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = Fo(
        r,
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
function Fo(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = q(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && L(a)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const d = Tn(r);
          o = f[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        o = a;
      r.ce && r.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Ce(n)) && (o = !0));
  }
  return o;
}
const Ka = /* @__PURE__ */ new WeakMap();
function hi(e, t, n = !1) {
  const o = n ? Ka : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!L(e)) {
    const d = (u) => {
      a = !0;
      const [h, m] = hi(u, t, !0);
      le(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return oe(e) && o.set(e, Wt), Wt;
  if (M(s))
    for (let d = 0; d < s.length; d++) {
      g.NODE_ENV !== "production" && !ie(s[d]) && T("props must be strings when using array syntax.", s[d]);
      const u = Ve(s[d]);
      kr(u) && (i[u] = ee);
    }
  else if (s) {
    g.NODE_ENV !== "production" && !oe(s) && T("invalid props options", s);
    for (const d in s) {
      const u = Ve(d);
      if (kr(u)) {
        const h = s[d], m = i[u] = M(h) || L(h) ? { type: h } : le({}, h), D = m.type;
        let V = !1, Y = !0;
        if (M(D))
          for (let H = 0; H < D.length; ++H) {
            const F = D[H], R = L(F) && F.name;
            if (R === "Boolean") {
              V = !0;
              break;
            } else R === "String" && (Y = !1);
          }
        else
          V = L(D) && D.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = V, m[
          1
          /* shouldCastTrue */
        ] = Y, (V || q(m, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return oe(e) && o.set(e, f), f;
}
function kr(e) {
  return e[0] !== "$" && !nn(e) ? !0 : (g.NODE_ENV !== "production" && T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ja(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function gi(e, t, n) {
  const o = K(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => Ve(i));
  for (const i in r) {
    let l = r[i];
    l != null && za(
      i,
      o[i],
      l,
      g.NODE_ENV !== "production" ? tt(o) : o,
      !s.includes(i)
    );
  }
}
function za(e, t, n, o, r) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && r) {
    T('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let f = !1;
      const d = M(s) ? s : [s], u = [];
      for (let h = 0; h < d.length && !f; h++) {
        const { valid: m, expectedType: D } = qa(t, d[h]);
        u.push(D || ""), f = m;
      }
      if (!f) {
        T(Ga(e, t, u));
        return;
      }
    }
    l && !l(t, o) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ya = /* @__PURE__ */ ft(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function qa(e, t) {
  let n;
  const o = Ja(t);
  if (o === "null")
    n = e === null;
  else if (Ya(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = oe(e) : o === "Array" ? n = M(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Ga(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(so).join(" | ")}`;
  const r = n[0], s = Xo(t), i = Mr(t, r), l = Mr(t, s);
  return n.length === 1 && $r(r) && !Xa(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, $r(s) && (o += `with value ${l}.`), o;
}
function Mr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function $r(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Xa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const fr = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", dr = (e) => M(e) ? e.map(He) : [He(e)], Za = (e, t, n) => {
  if (t._n)
    return t;
  const o = da((...r) => (g.NODE_ENV !== "production" && _e && !(n === null && Oe) && !(n && n.root !== _e.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), dr(t(...r))), n);
  return o._c = !1, o;
}, mi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (fr(r)) continue;
    const s = e[r];
    if (L(s))
      t[r] = Za(r, s, o);
    else if (s != null) {
      g.NODE_ENV !== "production" && T(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = dr(s);
      t[r] = () => i;
    }
  }
}, _i = (e, t) => {
  g.NODE_ENV !== "production" && !lr(e.vnode) && T(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = dr(t);
  e.slots.default = () => n;
}, Lo = (e, t, n) => {
  for (const o in t)
    (n || !fr(o)) && (e[o] = t[o]);
}, Qa = (e, t, n) => {
  const o = e.slots = fi();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && un(o, "__", r, !0);
    const s = t._;
    s ? (Lo(o, t, n), n && un(o, "_", s, !0)) : mi(t, o);
  } else t && _i(e, t);
}, ec = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = ee;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? g.NODE_ENV !== "production" && nt ? (Lo(r, t, n), Qe(e, "set", "$slots")) : n && l === 1 ? s = !1 : Lo(r, t, n) : (s = !t.$stable, mi(t, r)), i = t;
  } else t && (_i(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !fr(l) && i[l] == null && delete r[l];
};
let Xt, bt;
function $t(e, t) {
  e.appContext.config.performance && Zn() && bt.mark(`vue-${t}-${e.uid}`), g.NODE_ENV !== "production" && ca(e, t, Zn() ? bt.now() : Date.now());
}
function jt(e, t) {
  if (e.appContext.config.performance && Zn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    bt.mark(o), bt.measure(
      `<${mo(e, e.type)}> ${t}`,
      n,
      o
    ), bt.clearMarks(n), bt.clearMarks(o);
  }
  g.NODE_ENV !== "production" && ua(e, t, Zn() ? bt.now() : Date.now());
}
function Zn() {
  return Xt !== void 0 || (typeof window < "u" && window.performance ? (Xt = !0, bt = window.performance) : Xt = !1), Xt;
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
  return oc(e);
}
function oc(e, t) {
  tc();
  const n = On();
  n.__VUE__ = !0, g.NODE_ENV !== "production" && Zs(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: l,
    createComment: a,
    setText: f,
    setElementText: d,
    parentNode: u,
    nextSibling: h,
    setScopeId: m = pe,
    insertStaticContent: D
  } = e, V = (c, p, _, N = null, y = null, E = null, C = void 0, I = null, S = g.NODE_ENV !== "production" && nt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !Zt(c, p) && (N = ze(c), z(c, y, E, !0), c = null), p.patchFlag === -2 && (S = !1, p.dynamicChildren = null);
    const { type: w, ref: j, shapeFlag: A } = p;
    switch (w) {
      case In:
        Y(c, p, _, N);
        break;
      case Me:
        H(c, p, _, N);
        break;
      case Ln:
        c == null ? F(p, _, N, C) : g.NODE_ENV !== "production" && R(c, p, _, C);
        break;
      case je:
        ne(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        );
        break;
      default:
        A & 1 ? O(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        ) : A & 6 ? fe(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        ) : A & 64 || A & 128 ? w.process(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S,
          wt
        ) : g.NODE_ENV !== "production" && T("Invalid VNode type:", w, `(${typeof w})`);
    }
    j != null && y ? ln(j, c && c.ref, E, p || c, !p) : j == null && c && c.ref != null && ln(c.ref, null, E, c, !0);
  }, Y = (c, p, _, N) => {
    if (c == null)
      o(
        p.el = l(p.children),
        _,
        N
      );
    else {
      const y = p.el = c.el;
      p.children !== c.children && f(y, p.children);
    }
  }, H = (c, p, _, N) => {
    c == null ? o(
      p.el = a(p.children || ""),
      _,
      N
    ) : p.el = c.el;
  }, F = (c, p, _, N) => {
    [c.el, c.anchor] = D(
      c.children,
      p,
      _,
      N,
      c.el,
      c.anchor
    );
  }, R = (c, p, _, N) => {
    if (p.children !== c.children) {
      const y = h(c.anchor);
      x(c), [p.el, p.anchor] = D(
        p.children,
        _,
        y,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, W = ({ el: c, anchor: p }, _, N) => {
    let y;
    for (; c && c !== p; )
      y = h(c), o(c, _, N), c = y;
    o(p, _, N);
  }, x = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = h(c), r(c), c = _;
    r(p);
  }, O = (c, p, _, N, y, E, C, I, S) => {
    p.type === "svg" ? C = "svg" : p.type === "math" && (C = "mathml"), c == null ? $(
      p,
      _,
      N,
      y,
      E,
      C,
      I,
      S
    ) : P(
      c,
      p,
      y,
      E,
      C,
      I,
      S
    );
  }, $ = (c, p, _, N, y, E, C, I) => {
    let S, w;
    const { props: j, shapeFlag: A, transition: k, dirs: U } = c;
    if (S = c.el = i(
      c.type,
      E,
      j && j.is,
      j
    ), A & 8 ? d(S, c.children) : A & 16 && b(
      c.children,
      S,
      null,
      N,
      y,
      Oo(c, E),
      C,
      I
    ), U && Ot(c, null, N, "created"), v(S, c, c.scopeId, C, N), j) {
      for (const se in j)
        se !== "value" && !nn(se) && s(S, se, null, j[se], E, N);
      "value" in j && s(S, "value", null, j.value, E), (w = j.onVnodeBeforeMount) && Xe(w, N, c);
    }
    g.NODE_ENV !== "production" && (un(S, "__vnode", c, !0), un(S, "__vueParentComponent", N, !0)), U && Ot(c, null, N, "beforeMount");
    const X = rc(y, k);
    X && k.beforeEnter(S), o(S, p, _), ((w = j && j.onVnodeMounted) || X || U) && Pe(() => {
      w && Xe(w, N, c), X && k.enter(S), U && Ot(c, null, N, "mounted");
    }, y);
  }, v = (c, p, _, N, y) => {
    if (_ && m(c, _), N)
      for (let E = 0; E < N.length; E++)
        m(c, N[E]);
    if (y) {
      let E = y.subTree;
      if (g.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = pr(E.children) || E), p === E || wi(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const C = y.vnode;
        v(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          y.parent
        );
      }
    }
  }, b = (c, p, _, N, y, E, C, I, S = 0) => {
    for (let w = S; w < c.length; w++) {
      const j = c[w] = I ? _t(c[w]) : He(c[w]);
      V(
        null,
        j,
        p,
        _,
        N,
        y,
        E,
        C,
        I
      );
    }
  }, P = (c, p, _, N, y, E, C) => {
    const I = p.el = c.el;
    g.NODE_ENV !== "production" && (I.__vnode = p);
    let { patchFlag: S, dynamicChildren: w, dirs: j } = p;
    S |= c.patchFlag & 16;
    const A = c.props || ee, k = p.props || ee;
    let U;
    if (_ && xt(_, !1), (U = k.onVnodeBeforeUpdate) && Xe(U, _, p, c), j && Ot(p, c, _, "beforeUpdate"), _ && xt(_, !0), g.NODE_ENV !== "production" && nt && (S = 0, C = !1, w = null), (A.innerHTML && k.innerHTML == null || A.textContent && k.textContent == null) && d(I, ""), w ? (Z(
      c.dynamicChildren,
      w,
      I,
      _,
      N,
      Oo(p, y),
      E
    ), g.NODE_ENV !== "production" && Fn(c, p)) : C || Ee(
      c,
      p,
      I,
      null,
      _,
      N,
      Oo(p, y),
      E,
      !1
    ), S > 0) {
      if (S & 16)
        G(I, A, k, _, y);
      else if (S & 2 && A.class !== k.class && s(I, "class", null, k.class, y), S & 4 && s(I, "style", A.style, k.style, y), S & 8) {
        const X = p.dynamicProps;
        for (let se = 0; se < X.length; se++) {
          const te = X[se], Se = A[te], Ie = k[te];
          (Ie !== Se || te === "value") && s(I, te, Se, Ie, y, _);
        }
      }
      S & 1 && c.children !== p.children && d(I, p.children);
    } else !C && w == null && G(I, A, k, _, y);
    ((U = k.onVnodeUpdated) || j) && Pe(() => {
      U && Xe(U, _, p, c), j && Ot(p, c, _, "updated");
    }, N);
  }, Z = (c, p, _, N, y, E, C) => {
    for (let I = 0; I < p.length; I++) {
      const S = c[I], w = p[I], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Zt(S, w) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? u(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      V(
        S,
        w,
        j,
        null,
        N,
        y,
        E,
        C,
        !0
      );
    }
  }, G = (c, p, _, N, y) => {
    if (p !== _) {
      if (p !== ee)
        for (const E in p)
          !nn(E) && !(E in _) && s(
            c,
            E,
            p[E],
            null,
            y,
            N
          );
      for (const E in _) {
        if (nn(E)) continue;
        const C = _[E], I = p[E];
        C !== I && E !== "value" && s(c, E, I, C, y, N);
      }
      "value" in _ && s(c, "value", p.value, _.value, y);
    }
  }, ne = (c, p, _, N, y, E, C, I, S) => {
    const w = p.el = c ? c.el : l(""), j = p.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: k, slotScopeIds: U } = p;
    g.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (nt || A & 2048) && (A = 0, S = !1, k = null), U && (I = I ? I.concat(U) : U), c == null ? (o(w, _, N), o(j, _, N), b(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      j,
      y,
      E,
      C,
      I,
      S
    )) : A > 0 && A & 64 && k && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Z(
      c.dynamicChildren,
      k,
      _,
      y,
      E,
      C,
      I
    ), g.NODE_ENV !== "production" ? Fn(c, p) : (
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
    )) : Ee(
      c,
      p,
      _,
      j,
      y,
      E,
      C,
      I,
      S
    );
  }, fe = (c, p, _, N, y, E, C, I, S) => {
    p.slotScopeIds = I, c == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      _,
      N,
      C,
      S
    ) : he(
      p,
      _,
      N,
      y,
      E,
      C,
      S
    ) : ae(c, p, S);
  }, he = (c, p, _, N, y, E, C) => {
    const I = c.component = Oc(
      c,
      N,
      y
    );
    if (g.NODE_ENV !== "production" && I.type.__hmrId && ea(I), g.NODE_ENV !== "production" && (kn(c), $t(I, "mount")), lr(c) && (I.ctx.renderer = wt), g.NODE_ENV !== "production" && $t(I, "init"), Dc(I, !1, C), g.NODE_ENV !== "production" && jt(I, "init"), g.NODE_ENV !== "production" && nt && (c.el = null), I.asyncDep) {
      if (y && y.registerDep(I, B, C), !c.el) {
        const S = I.subTree = ot(Me);
        H(null, S, p, _), c.placeholder = S.el;
      }
    } else
      B(
        I,
        c,
        p,
        _,
        y,
        E,
        C
      );
    g.NODE_ENV !== "production" && (Mn(), jt(I, "mount"));
  }, ae = (c, p, _) => {
    const N = p.component = c.component;
    if (pc(c, p, _))
      if (N.asyncDep && !N.asyncResolved) {
        g.NODE_ENV !== "production" && kn(p), J(N, p, _), g.NODE_ENV !== "production" && Mn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, B = (c, p, _, N, y, E, C) => {
    const I = () => {
      if (c.isMounted) {
        let { next: A, bu: k, u: U, parent: X, vnode: se } = c;
        {
          const qe = bi(c);
          if (qe) {
            A && (A.el = se.el, J(c, A, C)), qe.asyncDep.then(() => {
              c.isUnmounted || I();
            });
            return;
          }
        }
        let te = A, Se;
        g.NODE_ENV !== "production" && kn(A || c.vnode), xt(c, !1), A ? (A.el = se.el, J(c, A, C)) : A = se, k && Ft(k), (Se = A.props && A.props.onVnodeBeforeUpdate) && Xe(Se, X, A, se), xt(c, !0), g.NODE_ENV !== "production" && $t(c, "render");
        const Ie = Fr(c);
        g.NODE_ENV !== "production" && jt(c, "render");
        const Ye = c.subTree;
        c.subTree = Ie, g.NODE_ENV !== "production" && $t(c, "patch"), V(
          Ye,
          Ie,
          // parent may have changed if it's in a teleport
          u(Ye.el),
          // anchor may have changed if it's in a fragment
          ze(Ye),
          c,
          y,
          E
        ), g.NODE_ENV !== "production" && jt(c, "patch"), A.el = Ie.el, te === null && hc(c, Ie.el), U && Pe(U, y), (Se = A.props && A.props.onVnodeUpdated) && Pe(
          () => Xe(Se, X, A, se),
          y
        ), g.NODE_ENV !== "production" && Qs(c), g.NODE_ENV !== "production" && Mn();
      } else {
        let A;
        const { el: k, props: U } = p, { bm: X, m: se, parent: te, root: Se, type: Ie } = c, Ye = an(p);
        xt(c, !1), X && Ft(X), !Ye && (A = U && U.onVnodeBeforeMount) && Xe(A, te, p), xt(c, !0);
        {
          Se.ce && // @ts-expect-error _def is private
          Se.ce._def.shadowRoot !== !1 && Se.ce._injectChildStyle(Ie), g.NODE_ENV !== "production" && $t(c, "render");
          const qe = c.subTree = Fr(c);
          g.NODE_ENV !== "production" && jt(c, "render"), g.NODE_ENV !== "production" && $t(c, "patch"), V(
            null,
            qe,
            _,
            N,
            c,
            y,
            E
          ), g.NODE_ENV !== "production" && jt(c, "patch"), p.el = qe.el;
        }
        if (se && Pe(se, y), !Ye && (A = U && U.onVnodeMounted)) {
          const qe = p;
          Pe(
            () => Xe(A, te, qe),
            y
          );
        }
        (p.shapeFlag & 256 || te && an(te.vnode) && te.vnode.shapeFlag & 256) && c.a && Pe(c.a, y), c.isMounted = !0, g.NODE_ENV !== "production" && ia(c), p = _ = N = null;
      }
    };
    c.scope.on();
    const S = c.effect = new Is(I);
    c.scope.off();
    const w = c.update = S.run.bind(S), j = c.job = S.runIfDirty.bind(S);
    j.i = c, j.id = c.uid, S.scheduler = () => uo(j), xt(c, !0), g.NODE_ENV !== "production" && (S.onTrack = c.rtc ? (A) => Ft(c.rtc, A) : void 0, S.onTrigger = c.rtg ? (A) => Ft(c.rtg, A) : void 0), w();
  }, J = (c, p, _) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Wa(c, p.props, N, _), ec(c, p.children, _), We(), Tr(c), Ke();
  }, Ee = (c, p, _, N, y, E, C, I, S = !1) => {
    const w = c && c.children, j = c ? c.shapeFlag : 0, A = p.children, { patchFlag: k, shapeFlag: U } = p;
    if (k > 0) {
      if (k & 128) {
        it(
          w,
          A,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        );
        return;
      } else if (k & 256) {
        st(
          w,
          A,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        );
        return;
      }
    }
    U & 8 ? (j & 16 && De(w, y, E), A !== w && d(_, A)) : j & 16 ? U & 16 ? it(
      w,
      A,
      _,
      N,
      y,
      E,
      C,
      I,
      S
    ) : De(w, y, E, !0) : (j & 8 && d(_, ""), U & 16 && b(
      A,
      _,
      N,
      y,
      E,
      C,
      I,
      S
    ));
  }, st = (c, p, _, N, y, E, C, I, S) => {
    c = c || Wt, p = p || Wt;
    const w = c.length, j = p.length, A = Math.min(w, j);
    let k;
    for (k = 0; k < A; k++) {
      const U = p[k] = S ? _t(p[k]) : He(p[k]);
      V(
        c[k],
        U,
        _,
        null,
        y,
        E,
        C,
        I,
        S
      );
    }
    w > j ? De(
      c,
      y,
      E,
      !0,
      !1,
      A
    ) : b(
      p,
      _,
      N,
      y,
      E,
      C,
      I,
      S,
      A
    );
  }, it = (c, p, _, N, y, E, C, I, S) => {
    let w = 0;
    const j = p.length;
    let A = c.length - 1, k = j - 1;
    for (; w <= A && w <= k; ) {
      const U = c[w], X = p[w] = S ? _t(p[w]) : He(p[w]);
      if (Zt(U, X))
        V(
          U,
          X,
          _,
          null,
          y,
          E,
          C,
          I,
          S
        );
      else
        break;
      w++;
    }
    for (; w <= A && w <= k; ) {
      const U = c[A], X = p[k] = S ? _t(p[k]) : He(p[k]);
      if (Zt(U, X))
        V(
          U,
          X,
          _,
          null,
          y,
          E,
          C,
          I,
          S
        );
      else
        break;
      A--, k--;
    }
    if (w > A) {
      if (w <= k) {
        const U = k + 1, X = U < j ? p[U].el : N;
        for (; w <= k; )
          V(
            null,
            p[w] = S ? _t(p[w]) : He(p[w]),
            _,
            X,
            y,
            E,
            C,
            I,
            S
          ), w++;
      }
    } else if (w > k)
      for (; w <= A; )
        z(c[w], y, E, !0), w++;
    else {
      const U = w, X = w, se = /* @__PURE__ */ new Map();
      for (w = X; w <= k; w++) {
        const ve = p[w] = S ? _t(p[w]) : He(p[w]);
        ve.key != null && (g.NODE_ENV !== "production" && se.has(ve.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(ve.key),
          "Make sure keys are unique."
        ), se.set(ve.key, w));
      }
      let te, Se = 0;
      const Ie = k - X + 1;
      let Ye = !1, qe = 0;
      const qt = new Array(Ie);
      for (w = 0; w < Ie; w++) qt[w] = 0;
      for (w = U; w <= A; w++) {
        const ve = c[w];
        if (Se >= Ie) {
          z(ve, y, E, !0);
          continue;
        }
        let Ge;
        if (ve.key != null)
          Ge = se.get(ve.key);
        else
          for (te = X; te <= k; te++)
            if (qt[te - X] === 0 && Zt(ve, p[te])) {
              Ge = te;
              break;
            }
        Ge === void 0 ? z(ve, y, E, !0) : (qt[Ge - X] = w + 1, Ge >= qe ? qe = Ge : Ye = !0, V(
          ve,
          p[Ge],
          _,
          null,
          y,
          E,
          C,
          I,
          S
        ), Se++);
      }
      const vr = Ye ? sc(qt) : Wt;
      for (te = vr.length - 1, w = Ie - 1; w >= 0; w--) {
        const ve = X + w, Ge = p[ve], Nr = p[ve + 1], wr = ve + 1 < j ? (
          // #13559, fallback to el placeholder for unresolved async component
          Nr.el || Nr.placeholder
        ) : N;
        qt[w] === 0 ? V(
          null,
          Ge,
          _,
          wr,
          y,
          E,
          C,
          I,
          S
        ) : Ye && (te < 0 || w !== vr[te] ? pt(Ge, _, wr, 2) : te--);
      }
    }
  }, pt = (c, p, _, N, y = null) => {
    const { el: E, type: C, transition: I, children: S, shapeFlag: w } = c;
    if (w & 6) {
      pt(c.component.subTree, p, _, N);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, _, N);
      return;
    }
    if (w & 64) {
      C.move(c, p, _, wt);
      return;
    }
    if (C === je) {
      o(E, p, _);
      for (let A = 0; A < S.length; A++)
        pt(S[A], p, _, N);
      o(c.anchor, p, _);
      return;
    }
    if (C === Ln) {
      W(c, p, _);
      return;
    }
    if (N !== 2 && w & 1 && I)
      if (N === 0)
        I.beforeEnter(E), o(E, p, _), Pe(() => I.enter(E), y);
      else {
        const { leave: A, delayLeave: k, afterLeave: U } = I, X = () => {
          c.ctx.isUnmounted ? r(E) : o(E, p, _);
        }, se = () => {
          A(E, () => {
            X(), U && U();
          });
        };
        k ? k(E, X, se) : se();
      }
    else
      o(E, p, _);
  }, z = (c, p, _, N = !1, y = !1) => {
    const {
      type: E,
      props: C,
      ref: I,
      children: S,
      dynamicChildren: w,
      shapeFlag: j,
      patchFlag: A,
      dirs: k,
      cacheIndex: U
    } = c;
    if (A === -2 && (y = !1), I != null && (We(), ln(I, null, _, c, !0), Ke()), U != null && (p.renderCache[U] = void 0), j & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const X = j & 1 && k, se = !an(c);
    let te;
    if (se && (te = C && C.onVnodeBeforeUnmount) && Xe(te, p, c), j & 6)
      Ae(c.component, _, N);
    else {
      if (j & 128) {
        c.suspense.unmount(_, N);
        return;
      }
      X && Ot(c, null, p, "beforeUnmount"), j & 64 ? c.type.remove(
        c,
        p,
        _,
        wt,
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
      ) : (E === je && A & 384 || !y && j & 16) && De(S, p, _), N && ce(c);
    }
    (se && (te = C && C.onVnodeUnmounted) || X) && Pe(() => {
      te && Xe(te, p, c), X && Ot(c, null, p, "unmounted");
    }, _);
  }, ce = (c) => {
    const { type: p, el: _, anchor: N, transition: y } = c;
    if (p === je) {
      g.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && y && !y.persisted ? c.children.forEach((C) => {
        C.type === Me ? r(C.el) : ce(C);
      }) : be(_, N);
      return;
    }
    if (p === Ln) {
      x(c);
      return;
    }
    const E = () => {
      r(_), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (c.shapeFlag & 1 && y && !y.persisted) {
      const { leave: C, delayLeave: I } = y, S = () => C(_, E);
      I ? I(c.el, E, S) : S();
    } else
      E();
  }, be = (c, p) => {
    let _;
    for (; c !== p; )
      _ = h(c), r(c), c = _;
    r(p);
  }, Ae = (c, p, _) => {
    g.NODE_ENV !== "production" && c.type.__hmrId && ta(c);
    const {
      bum: N,
      scope: y,
      job: E,
      subTree: C,
      um: I,
      m: S,
      a: w,
      parent: j,
      slots: { __: A }
    } = c;
    jr(S), jr(w), N && Ft(N), j && M(A) && A.forEach((k) => {
      j.renderCache[k] = void 0;
    }), y.stop(), E && (E.flags |= 8, z(C, c, p, _)), I && Pe(I, p), Pe(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), g.NODE_ENV !== "production" && aa(c);
  }, De = (c, p, _, N = !1, y = !1, E = 0) => {
    for (let C = E; C < c.length; C++)
      z(c[C], p, _, N, y);
  }, ze = (c) => {
    if (c.shapeFlag & 6)
      return ze(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), _ = p && p[ha];
    return _ ? h(_) : p;
  };
  let kt = !1;
  const Cn = (c, p, _) => {
    c == null ? p._vnode && z(p._vnode, null, null, !0) : V(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, kt || (kt = !0, Tr(), qs(), kt = !1);
  }, wt = {
    p: V,
    um: z,
    m: pt,
    r: ce,
    mt: he,
    mc: b,
    pc: Ee,
    pbc: Z,
    n: ze,
    o: e
  };
  return {
    render: Cn,
    hydrate: void 0,
    createApp: La(Cn)
  };
}
function Oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function xt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Fn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (M(o) && M(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = _t(r[s]), l.el = i.el), !n && l.patchFlag !== -2 && Fn(i, l)), l.type === In && (l.el = i.el), l.type === Me && !l.el && (l.el = i.el), g.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function sc(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const f = e[o];
    if (f !== 0) {
      if (r = n[n.length - 1], e[r] < f) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < f ? s = l + 1 : i = l;
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
const ic = Symbol.for("v-scx"), lc = () => {
  {
    const e = jn(ic);
    return e || g.NODE_ENV !== "production" && T(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function yt(e, t, n) {
  return g.NODE_ENV !== "production" && !L(t) && T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), yi(e, t, n);
}
function yi(e, t, n = ee) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  g.NODE_ENV !== "production" && !t && (o !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = le({}, n);
  g.NODE_ENV !== "production" && (l.onWarn = T);
  const a = t && o || !t && s !== "post";
  let f;
  if (_n) {
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
  l.call = (m, D, V) => rt(m, d, D, V);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    Pe(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, D) => {
    D ? m() : uo(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = Jl(e, t, l);
  return _n && (f ? f.push(h) : a && h()), h;
}
function ac(e, t, n) {
  const o = this.proxy, r = ie(e) ? e.includes(".") ? Ei(o, e) : () => o[e] : e.bind(o, o);
  let s;
  L(t) ? s = t : (s = t.handler, n = t);
  const i = Tn(this), l = yi(r, s.bind(o), n);
  return i(), l;
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
  const o = e.vnode.props || ee;
  if (g.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(St(Ve(t)) in u)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${St(Ve(t))}" prop.`
        );
      else {
        const h = d[t];
        L(h) && (h(...n) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && cc(o, t.slice(7));
  if (i && (i.trim && (r = n.map((d) => ie(d) ? d.trim() : d)), i.number && (r = n.map(Vo))), g.NODE_ENV !== "production" && fa(e, t, r), g.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[St(d)] && T(
      `Event "${d}" is emitted in component ${mo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ce(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = St(t)] || // also try camelCase event handler (#2249)
  o[l = St(Ve(t))];
  !a && s && (a = o[l = St(Ce(t))]), a && rt(
    a,
    e,
    6,
    r
  );
  const f = o[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, rt(
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
  let i = {}, l = !1;
  if (!L(e)) {
    const a = (f) => {
      const d = vi(f, t, !0);
      d && (l = !0, le(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (oe(e) && o.set(e, null), null) : (M(s) ? s.forEach((a) => i[a] = null) : le(i, s), oe(e) && o.set(e, i), i);
}
function po(e, t) {
  return !e || !wn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), q(e, t[0].toLowerCase() + t.slice(1)) || q(e, Ce(t)) || q(e, t));
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
    attrs: l,
    emit: a,
    render: f,
    renderCache: d,
    props: u,
    data: h,
    setupState: m,
    ctx: D,
    inheritAttrs: V
  } = e, Y = Gn(e);
  let H, F;
  g.NODE_ENV !== "production" && (Ho = !1);
  try {
    if (n.shapeFlag & 4) {
      const x = r || o, O = g.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(x, {
        get($, v, b) {
          return T(
            `Property '${String(
              v
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get($, v, b);
        }
      }) : x;
      H = He(
        f.call(
          O,
          x,
          d,
          g.NODE_ENV !== "production" ? tt(u) : u,
          m,
          h,
          D
        )
      ), F = l;
    } else {
      const x = t;
      g.NODE_ENV !== "production" && l === u && Qn(), H = He(
        x.length > 1 ? x(
          g.NODE_ENV !== "production" ? tt(u) : u,
          g.NODE_ENV !== "production" ? {
            get attrs() {
              return Qn(), tt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : x(
          g.NODE_ENV !== "production" ? tt(u) : u,
          null
        )
      ), F = t.props ? l : fc(l);
    }
  } catch (x) {
    cn.length = 0, Dn(x, e, 1), H = ot(Me);
  }
  let R = H, W;
  if (g.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([R, W] = Ni(H)), F && V !== !1) {
    const x = Object.keys(F), { shapeFlag: O } = R;
    if (x.length) {
      if (O & 7)
        s && x.some(Bn) && (F = dc(
          F,
          s
        )), R = vt(R, F, !1, !0);
      else if (g.NODE_ENV !== "production" && !Ho && R.type !== Me) {
        const $ = Object.keys(l), v = [], b = [];
        for (let P = 0, Z = $.length; P < Z; P++) {
          const G = $[P];
          wn(G) ? Bn(G) || v.push(G[2].toLowerCase() + G.slice(3)) : b.push(G);
        }
        b.length && T(
          `Extraneous non-props attributes (${b.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), v.length && T(
          `Extraneous non-emits event listeners (${v.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (g.NODE_ENV !== "production" && !Lr(R) && T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), R = vt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (g.NODE_ENV !== "production" && !Lr(R) && T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ir(R, n.transition)), g.NODE_ENV !== "production" && W ? W(R) : H = R, Gn(Y), H;
}
const Ni = (e) => {
  const t = e.children, n = e.dynamicChildren, o = pr(t, !1);
  if (o) {
    if (g.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ni(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [He(o), i];
};
function pr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (ho(r)) {
      if (r.type !== Me || r.children === "v-if") {
        if (n)
          return;
        if (n = r, g.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
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
    (n === "class" || n === "style" || wn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Bn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lr = (e) => e.shapeFlag & 7 || e.type === Me;
function pc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, f = s.emitsOptions;
  if (g.NODE_ENV !== "production" && (r || l) && nt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Hr(o, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const h = d[u];
        if (i[h] !== o[h] && !po(f, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Hr(o, i, f) : !0 : !!i;
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
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : Ys(e);
}
const je = Symbol.for("v-fgt"), In = Symbol.for("v-txt"), Me = Symbol.for("v-cmt"), Ln = Symbol.for("v-stc"), cn = [];
let ke = null;
function Re(e = !1) {
  cn.push(ke = e ? null : []);
}
function mc() {
  cn.pop(), ke = cn[cn.length - 1] || null;
}
let mn = 1;
function Ur(e, t = !1) {
  mn += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = mn > 0 ? ke || Wt : null, mc(), mn > 0 && ke && ke.push(e), e;
}
function $e(e, t, n, o, r, s) {
  return Oi(
    mt(
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
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ue(e) || L(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function mt(e, t = null, n = null, o = 0, r = null, s = e === je ? 0 : 1, i = !1, l = !1) {
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
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe
  };
  return l ? (hr(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), g.NODE_ENV !== "production" && a.key !== a.key && T("VNode created with invalid key (NaN). VNode type:", a.type), mn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ke.push(a), a;
}
const ot = g.NODE_ENV !== "production" ? bc : Di;
function Di(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Ia) && (g.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Me), ho(e)) {
    const l = vt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && hr(l, n), mn > 0 && !s && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (Vi(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = fn(l)), oe(a) && (hn(a) && !M(a) && (a = le({}, a)), t.style = io(a));
  }
  const i = ie(e) ? 1 : wi(e) ? 128 : ga(e) ? 64 : oe(e) ? 4 : L(e) ? 2 : 0;
  return g.NODE_ENV !== "production" && i & 4 && hn(e) && (e = K(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), mt(
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
  return e ? hn(e) || di(e) ? le({}, e) : e : null;
}
function vt(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: l, transition: a } = e, f = t ? vc(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && xi(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? M(s) ? s.concat(Hn(t)) : [s, Hn(t)] : Hn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: g.NODE_ENV !== "production" && i === -1 && M(l) ? l.map(Si) : l,
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
    ssContent: e.ssContent && vt(e.ssContent),
    ssFallback: e.ssFallback && vt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && ir(
    d,
    a.clone(d)
  ), d;
}
function Si(e) {
  const t = vt(e);
  return M(e.children) && (t.children = e.children.map(Si)), t;
}
function Ec(e = " ", t = 0) {
  return ot(In, null, e, t);
}
function Qt(e = "", t = !1) {
  return t ? (Re(), _c(Me, null, e)) : ot(Me, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ot(Me) : M(e) ? ot(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ho(e) ? _t(e) : ot(In, null, String(e));
}
function _t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : vt(e);
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
      !r && !di(t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else L(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = fn([t.class, o.class]));
      else if (r === "style")
        t.style = io([t.style, o.style]);
      else if (wn(r)) {
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
    scope: new hl(
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
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
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
  return g.NODE_ENV !== "production" ? s.ctx = Ca(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = uc.bind(null, s), e.ce && e.ce(s), s;
}
let _e = null;
const gr = () => _e || Oe;
let eo, Uo;
{
  const e = On(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  eo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => _e = n
  ), Uo = t(
    "__VUE_SSR_SETTERS__",
    (n) => _n = n
  );
}
const Tn = (e) => {
  const t = _e;
  return eo(e), e.scope.on(), () => {
    e.scope.off(), eo(t);
  };
}, Br = () => {
  _e && _e.scope.off(), eo(null);
}, xc = /* @__PURE__ */ ft("slot,component");
function Bo(e, { isNativeTag: t }) {
  (xc(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ii(e) {
  return e.vnode.shapeFlag & 4;
}
let _n = !1;
function Dc(e, t = !1, n = !1) {
  t && Uo(t);
  const { props: o, children: r } = e.vnode, s = Ii(e);
  Ua(e, o, s, t), Qa(e, r, n || t);
  const i = s ? Sc(e, t) : void 0;
  return t && Uo(!1), i;
}
function Sc(e, t) {
  var n;
  const o = e.type;
  if (g.NODE_ENV !== "production") {
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
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ii), g.NODE_ENV !== "production" && Va(e);
  const { setup: r } = o;
  if (r) {
    We();
    const s = e.setupContext = r.length > 1 ? Cc(e) : null, i = Tn(e), l = Yt(
      r,
      e,
      0,
      [
        g.NODE_ENV !== "production" ? tt(e.props) : e.props,
        s
      ]
    ), a = Go(l);
    if (Ke(), i(), (a || e.sp) && !an(e) && ri(e), a) {
      if (l.then(Br, Br), t)
        return l.then((f) => {
          Wr(e, f, t);
        }).catch((f) => {
          Dn(f, e, 0);
        });
      if (e.asyncDep = l, g.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        T(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Wr(e, l, t);
  } else
    Ti(e, t);
}
function Wr(e, t, n) {
  L(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) ? (g.NODE_ENV !== "production" && ho(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), g.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ws(t), g.NODE_ENV !== "production" && Aa(e)) : g.NODE_ENV !== "production" && t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ti(e, n);
}
const Ic = () => !0;
function Ti(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || pe);
  {
    const r = Tn(e);
    We();
    try {
      Pa(e);
    } finally {
      Ke(), r();
    }
  }
  g.NODE_ENV !== "production" && !o.render && e.render === pe && !t && (o.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", o));
}
const Kr = g.NODE_ENV !== "production" ? {
  get(e, t) {
    return Qn(), de(e, "get", ""), e[t];
  },
  set() {
    return T("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return T("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return de(e, "get", ""), e[t];
  }
};
function Tc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return de(e, "get", "$slots"), t[n];
    }
  });
}
function Cc(e) {
  const t = (n) => {
    if (g.NODE_ENV !== "production" && (e.exposed && T("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (M(n) ? o = "array" : ue(n) && (o = "ref")), o !== "object" && T(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (g.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Kr));
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
      attrs: new Proxy(e.attrs, Kr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function go(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ws(Ml(e.exposed)), {
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
function Ci(e, t = !0) {
  return L(e) ? e.displayName || e.name : e.name || t && e.__name;
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
  return L(e) && "__vccOpts" in e;
}
const mr = (e, t) => {
  const n = Wl(e, t, _n);
  if (g.NODE_ENV !== "production") {
    const o = gr();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Rc() {
  if (g.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!oe(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ue(u)) {
        We();
        const h = u.value;
        return Ke(), [
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
    const h = [];
    u.type.props && u.props && h.push(i("props", K(u.props))), u.setupState !== ee && h.push(i("setup", u.setupState)), u.data !== ee && h.push(i("data", K(u.data)));
    const m = a(u, "computed");
    m && h.push(i("computed", m));
    const D = a(u, "inject");
    return D && h.push(i("injected", D)), h.push([
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
          ["span", o, m + ": "],
          l(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, h = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : oe(u) ? ["object", { object: h ? K(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const m = u.type;
    if (L(m))
      return;
    const D = {};
    for (const V in u.ctx)
      f(m, V, h) && (D[V] = u.ctx[V]);
    return D;
  }
  function f(u, h, m) {
    const D = u[m];
    if (M(D) && D.includes(h) || oe(D) && h in D || u.extends && f(u.extends, h, m) || u.mixins && u.mixins.some((V) => f(V, h, m)))
      return !0;
  }
  function d(u) {
    return xe(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Jr = "3.5.18", Le = g.NODE_ENV !== "production" ? T : pe;
var ye = {};
let Wo;
const zr = typeof window < "u" && window.trustedTypes;
if (zr)
  try {
    Wo = /* @__PURE__ */ zr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ye.NODE_ENV !== "production" && Le(`Error creating trusted types policy: ${e}`);
  }
const Ai = Wo ? (e) => Wo.createHTML(e) : (e) => e, Pc = "http://www.w3.org/2000/svg", kc = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, Yr = at && /* @__PURE__ */ at.createElement("template"), Mc = {
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
      Yr.innerHTML = Ai(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Yr.content;
      if (o === "svg" || o === "mathml") {
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
  const o = e[$c];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qr = Symbol("_vod"), Fc = Symbol("_vsh"), Lc = Symbol(ye.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hc = /(^|;)\s*display\s*:/;
function Uc(e, t, n) {
  const o = e.style, r = ie(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Un(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Un(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), Un(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[Lc];
      i && (n += ";" + i), o.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  qr in e && (e[qr] = s ? o.display : "", e[Fc] && (o.display = "none"));
}
const Bc = /[^\\];\s*$/, Gr = /\s*!important$/;
function Un(e, t, n) {
  if (M(n))
    n.forEach((o) => Un(e, t, o));
  else if (n == null && (n = ""), ye.NODE_ENV !== "production" && Bc.test(n) && Le(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Wc(e, t);
    Gr.test(n) ? e.setProperty(
      Ce(o),
      n.replace(Gr, ""),
      "important"
    ) : e[o] = n;
  }
}
const Xr = ["Webkit", "Moz", "ms"], xo = {};
function Wc(e, t) {
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
function Qr(e, t, n, o, r, s = pl(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zr, t.slice(6, t.length)) : e.setAttributeNS(Zr, t, n) : n == null || s && !Os(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : Nt(n) ? String(n) : n
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
  i && e.removeAttribute(r || t);
}
function Ht(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Kc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ts = Symbol("_vei");
function Jc(e, t, n, o, r = null) {
  const s = e[ts] || (e[ts] = {}), i = s[t];
  if (o && i)
    i.value = ye.NODE_ENV !== "production" ? os(o, t) : o;
  else {
    const [l, a] = zc(t);
    if (o) {
      const f = s[t] = Gc(
        ye.NODE_ENV !== "production" ? os(o, t) : o,
        r
      );
      Ht(e, l, f, a);
    } else i && (Kc(e, l, i, a), s[t] = void 0);
  }
}
const ns = /(?:Once|Passive|Capture)$/;
function zc(e) {
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
const Yc = /* @__PURE__ */ Promise.resolve(), qc = () => Do || (Yc.then(() => Do = 0), Do = Date.now());
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
  return L(e) || M(e) ? e : (Le(
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
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zc = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? jc(e, o, i) : t === "style" ? Uc(e, n, o) : wn(t) ? Bn(t) || Jc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Qc(e, t, o, i)) ? (es(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qr(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(o)) ? es(e, Ve(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Qr(e, t, o, i));
};
function Qc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rs(t) && L(n));
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
  oo(o) && le(o, t);
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
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== us ? this._root = this.shadowRoot : (ye.NODE_ENV !== "production" && this.shadowRoot && Le(
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
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const r of o)
        this._setAttr(r.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: i } = o;
      let l;
      if (s && !M(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = Or(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ve(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(i) : ye.NODE_ENV !== "production" && i && Le(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ye.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        q(this, o) ? ye.NODE_ENV !== "production" && Le(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ge(n[o])
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
    const n = ot(this._def, le(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ye.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const r = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            oo(i[0]) ? le({ detail: i }, i[0]) : { detail: i }
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
      if (o && s.setAttribute("nonce", o), s.textContent = t[r], this.shadowRoot.prepend(s), ye.NODE_ENV !== "production")
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
      const r = t[o], s = r.getAttribute("name") || "default", i = this._slots[s], l = r.parentNode;
      if (i)
        for (const a of i) {
          if (n && a.nodeType === 1) {
            const f = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(f, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(f, "");
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
    if (ye.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
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
function ls(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const So = Symbol("_assign"), ou = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[So] = is(r);
    const s = o || r.props && r.props.type === "number";
    Ht(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Vo(l)), e[So](l);
    }), n && Ht(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ht(e, "compositionstart", nu), Ht(e, "compositionend", ls), Ht(e, "change", ls));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, i) {
    if (e[So] = is(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Vo(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === a) || (e.value = a));
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
}, as = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = su[t[i]];
      if (l && l(r, t)) return;
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
}, lu = (e, t) => {
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
  return t.mount = (o) => {
    const r = pu(o);
    if (!r) return;
    const s = t._component;
    !L(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
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
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Le(o), n;
      },
      set() {
        Le(o);
      }
    });
  }
}
function pu(e) {
  if (ie(e)) {
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
var zt = _u;
function $i(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var ji = "AI_InvalidArgumentError", Fi = `vercel.ai.error.${ji}`, bu = Symbol.for(Fi), Li, yu = class extends zt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: ji, message: e, cause: t }), this[Li] = !0, this.argument = n;
  }
  static isInstance(e) {
    return zt.hasMarker(e, Fi);
  }
};
Li = bu;
var Hi = "AI_JSONParseError", Ui = `vercel.ai.error.${Hi}`, Eu = Symbol.for(Ui), Bi, fs = class extends zt {
  constructor({ text: e, cause: t }) {
    super({
      name: Hi,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${$i(t)}`,
      cause: t
    }), this[Bi] = !0, this.text = e;
  }
  static isInstance(e) {
    return zt.hasMarker(e, Ui);
  }
};
Bi = Eu;
var Wi = "AI_TypeValidationError", Ki = `vercel.ai.error.${Wi}`, vu = Symbol.for(Ki), Ji, Nu = class Ko extends zt {
  constructor({ value: t, cause: n }) {
    super({
      name: Wi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${$i(n)}`,
      cause: n
    }), this[Ji] = !0, this.value = t;
  }
  static isInstance(t) {
    return zt.hasMarker(t, Ki);
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
    return Ko.isInstance(n) && n.value === t ? n : new Ko({ value: t, cause: n });
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
var Dt = { exports: {} }, ps;
function xu() {
  if (ps) return Dt.exports;
  ps = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, n = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function o(l, a, f) {
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
    return r(d, { protoAction: u, constructorAction: h, safe: f && f.safe });
  }
  function r(l, { protoAction: a = "error", constructorAction: f = "error", safe: d } = {}) {
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
        for (const D in m) {
          const V = m[D];
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
      return o(l, a, f);
    } finally {
      Error.stackTraceLimit = d;
    }
  }
  function i(l, a) {
    const f = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return o(l, a, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = f;
    }
  }
  return Dt.exports = s, Dt.exports.default = s, Dt.exports.parse = s, Dt.exports.safeParse = i, Dt.exports.scan = r, Dt.exports;
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
  function r(a, f, d) {
    switch (a) {
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
        r(f, a, "FINISH");
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
        r(f, a, "INSIDE_OBJECT_AFTER_VALUE");
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
            n = a, r(f, a, "INSIDE_ARRAY_AFTER_VALUE");
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
        r(f, a, "INSIDE_ARRAY_AFTER_VALUE");
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
        const u = e.substring(o, a + 1);
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
        const d = e.substring(o, e.length);
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
}, zu = {
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
  Wu,
  Ku,
  Ju,
  zu,
  Yu,
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
  onDataPart: l,
  onErrorPart: a,
  onToolCallStreamingStartPart: f,
  onToolCallDeltaPart: d,
  onToolCallPart: u,
  onToolResultPart: h,
  onMessageAnnotationsPart: m,
  onFinishMessagePart: D,
  onFinishStepPart: V,
  onStartStepPart: Y
}) {
  const H = e.getReader(), F = new TextDecoder(), R = [];
  let W = 0;
  for (; ; ) {
    const { value: x } = await H.read();
    if (x && (R.push(x), W += x.length, x[x.length - 1] !== of))
      continue;
    if (R.length === 0)
      break;
    const O = rf(R, W);
    W = 0;
    const $ = F.decode(O, { stream: !0 }).split(`
`).filter((v) => v !== "").map(nf);
    for (const { type: v, value: b } of $)
      switch (v) {
        case "text":
          await t?.(b);
          break;
        case "reasoning":
          await n?.(b);
          break;
        case "reasoning_signature":
          await o?.(b);
          break;
        case "redacted_reasoning":
          await r?.(b);
          break;
        case "file":
          await i?.(b);
          break;
        case "source":
          await s?.(b);
          break;
        case "data":
          await l?.(b);
          break;
        case "error":
          await a?.(b);
          break;
        case "message_annotations":
          await m?.(b);
          break;
        case "tool_call_streaming_start":
          await f?.(b);
          break;
        case "tool_call_delta":
          await d?.(b);
          break;
        case "tool_call":
          await u?.(b);
          break;
        case "tool_result":
          await h?.(b);
          break;
        case "finish_message":
          await D?.(b);
          break;
        case "finish_step":
          await V?.(b);
          break;
        case "start_step":
          await Y?.(b);
          break;
        default: {
          const P = v;
          throw new Error(`Unknown stream part type: ${P}`);
        }
      }
  }
}
async function lf({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: o,
  generateId: r = br,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var l, a;
  const f = i?.role === "assistant";
  let d = f ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((O, $) => {
    var v;
    return Math.max(O, (v = $.step) != null ? v : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: r(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let h, m, D;
  function V(O, $) {
    const v = u.parts.find(
      (b) => b.type === "tool-invocation" && b.toolInvocation.toolCallId === O
    );
    v != null ? v.toolInvocation = $ : u.parts.push({
      type: "tool-invocation",
      toolInvocation: $
    });
  }
  const Y = [];
  let H = f ? i?.annotations : void 0;
  const F = {};
  let R = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, W = "unknown";
  function x() {
    const O = [...Y];
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
      revisionId: r()
    };
    t({
      message: $,
      data: O,
      replaceLastMessage: f
    });
  }
  await sf({
    stream: e,
    onTextPart(O) {
      h == null ? (h = {
        type: "text",
        text: O
      }, u.parts.push(h)) : h.text += O, u.content += O, x();
    },
    onReasoningPart(O) {
      var $;
      D == null ? (D = { type: "text", text: O }, m?.details.push(D)) : D.text += O, m == null ? (m = {
        type: "reasoning",
        reasoning: O,
        details: [D]
      }, u.parts.push(m)) : m.reasoning += O, u.reasoning = (($ = u.reasoning) != null ? $ : "") + O, x();
    },
    onReasoningSignaturePart(O) {
      D != null && (D.signature = O.signature);
    },
    onRedactedReasoningPart(O) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: O.data
      }), D = void 0, x();
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
      u.toolInvocations == null && (u.toolInvocations = []), F[O.toolCallId] = {
        text: "",
        step: d,
        toolName: O.toolName,
        index: u.toolInvocations.length
      };
      const $ = {
        state: "partial-call",
        step: d,
        toolCallId: O.toolCallId,
        toolName: O.toolName,
        args: void 0
      };
      u.toolInvocations.push($), V(O.toolCallId, $), x();
    },
    onToolCallDeltaPart(O) {
      const $ = F[O.toolCallId];
      $.text += O.argsTextDelta;
      const { value: v } = $u($.text), b = {
        state: "partial-call",
        step: $.step,
        toolCallId: O.toolCallId,
        toolName: $.toolName,
        args: v
      };
      u.toolInvocations[$.index] = b, V(O.toolCallId, b), x();
    },
    async onToolCallPart(O) {
      const $ = {
        state: "call",
        step: d,
        ...O
      };
      if (F[O.toolCallId] != null ? u.toolInvocations[F[O.toolCallId].index] = $ : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push($)), V(O.toolCallId, $), x(), n) {
        const v = await n({ toolCall: O });
        if (v != null) {
          const b = {
            state: "result",
            step: d,
            ...O,
            result: v
          };
          u.toolInvocations[u.toolInvocations.length - 1] = b, V(O.toolCallId, b), x();
        }
      }
    },
    onToolResultPart(O) {
      const $ = u.toolInvocations;
      if ($ == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const v = $.findIndex(
        (P) => P.toolCallId === O.toolCallId
      );
      if (v === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const b = {
        ...$[v],
        state: "result",
        ...O
      };
      $[v] = b, V(O.toolCallId, b), x();
    },
    onDataPart(O) {
      Y.push(...O), x();
    },
    onMessageAnnotationsPart(O) {
      H == null ? H = [...O] : H.push(...O), x();
    },
    onFinishStepPart(O) {
      d += 1, h = O.isContinued ? h : void 0, m = void 0, D = void 0;
    },
    onStartStepPart(O) {
      f || (u.id = O.messageId), u.parts.push({ type: "step-start" }), x();
    },
    onFinishMessagePart(O) {
      W = O.finishReason, O.usage != null && (R = ku(O.usage));
    },
    onErrorPart(O) {
      throw new Error(O);
    }
  }), o?.({ message: u, finishReason: W, usage: R });
}
async function af({
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
  credentials: o,
  headers: r,
  abortController: s,
  restoreMessagesOnFailure: i,
  onResponse: l,
  onUpdate: a,
  onFinish: f,
  onToolCall: d,
  generateId: u,
  fetch: h = uf(),
  lastMessage: m,
  requestType: D = "generate"
}) {
  var V, Y, H;
  const R = await (D === "resume" ? h(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (V = s?.()) == null ? void 0 : V.signal,
    credentials: o
  }) : h(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (Y = s?.()) == null ? void 0 : Y.signal,
    credentials: o
  })).catch((W) => {
    throw i(), W;
  });
  if (l)
    try {
      await l(R);
    } catch (W) {
      throw W;
    }
  if (!R.ok)
    throw i(), new Error(
      (H = await R.text()) != null ? H : "Failed to fetch the chat response."
    );
  if (!R.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await cf({
        stream: R.body,
        update: a,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await lf({
        stream: R.body,
        update: a,
        lastMessage: m,
        onToolCall: d,
        onFinish({ message: W, finishReason: x, usage: O }) {
          f && W != null && f(W, { usage: O, finishReason: x });
        },
        generateId: u
      });
      return;
    }
    default: {
      const W = n;
      throw new Error(`Unknown stream protocol: ${W}`);
    }
  }
}
function zo(e) {
  return e?.reduce((t, n) => {
    var o;
    return Math.max(t, (o = n.step) != null ? o : 0);
  }, 0);
}
function zi(e) {
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
    parts: zi(t)
  }));
}
async function gs(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: n, type: o } = t, r = await new Promise((s, i) => {
          const l = new FileReader();
          l.onload = (a) => {
            var f;
            s((f = a.target) == null ? void 0 : f.result);
          }, l.onerror = (a) => i(a), l.readAsDataURL(t);
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
    (o.length > t || zo(s.toolInvocations) !== e) && // check that next step is possible:
    Yi(s) && // limit the number of automatic steps:
    ((r = zo(s.toolInvocations)) != null ? r : 0) < n
  );
}
function Yi(e) {
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
    (l) => l.type === "tool-invocation" && l.toolInvocation.toolCallId === t
  );
  if (s == null)
    return;
  const i = {
    ...s.toolInvocation,
    state: "result",
    result: n
  };
  s.toolInvocation = i, r.toolInvocations = (o = r.toolInvocations) == null ? void 0 : o.map(
    (l) => l.toolCallId === t ? i : l
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
      var r = this.serializeKey(t), s = o || this.ttl, i = Date.now(), l = {
        data: n,
        createdAt: i,
        expiresAt: s ? i + s : 1 / 0
      };
      this.dispatchExpire(s, l, r), this.items.set(r, l);
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
var ct = function() {
  return ct = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ct.apply(this, arguments);
}, Ut = function(e, t, n, o) {
  function r(s) {
    return s instanceof n ? s : new n(function(i) {
      i(s);
    });
  }
  return new (n || (n = Promise))(function(s, i) {
    function l(d) {
      try {
        f(o.next(d));
      } catch (u) {
        i(u);
      }
    }
    function a(d) {
      try {
        f(o.throw(d));
      } catch (u) {
        i(u);
      }
    }
    function f(d) {
      d.done ? s(d.value) : r(d.value).then(l, a);
    }
    f((o = o.apply(e, t || [])).next());
  });
}, Bt = function(e, t) {
  var n = { label: 0, sent: function() {
    if (s[0] & 1) throw s[1];
    return s[1];
  }, trys: [], ops: [] }, o, r, s, i;
  return i = { next: l(0), throw: l(1), return: l(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function l(f) {
    return function(d) {
      return a([f, d]);
    };
  }
  function a(f) {
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
  } catch (l) {
    i = { error: l };
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
    var r, s, i, l, a, f, d;
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
          return l = u.sent(), s = l, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          r = t, u.label = 6;
        case 6:
          if (i = !1, a = { data: r, error: s, isValidating: i }, typeof r < "u")
            try {
              n.set(e, a, o);
            } catch (h) {
              console.error("swrv(mutate): failed to set cache", h);
            }
          return f = to.get(e), f && f.data.length && (d = f.data.filter(function(h) {
            return h.key === e;
          }), d.forEach(function(h, m) {
            typeof a.data < "u" && (h.data = a.data), h.error = a.error, h.isValidating = a.isValidating, h.isLoading = a.isValidating;
            var D = m === d.length - 1;
            D || delete d[m];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function bs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var o, r, s = ct({}, Gi), i = !1, l = !1, a = gr(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (o = t[0]), t.length >= 2 && (r = t[1]), t.length > 2 && (s = ct(ct({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, h = typeof o == "function" ? o : Fe(o);
  typeof r > "u" && (r = s.fetcher);
  var m = null;
  m || (m = xn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var D = function(F, R) {
    return Ut(e, void 0, void 0, function() {
      var W, x, O, $, v, b, P, Z = this;
      return Bt(this, function(G) {
        switch (G.label) {
          case 0:
            return W = m.data === void 0, x = h.value, x ? (O = s.cache.get(x), $ = O && O.data, m.isValidating = !0, m.isLoading = !$, $ && (m.data = $.data, m.error = $.error), v = F || r, !v || !s.isDocumentVisible() && !W || R?.forceRevalidate !== void 0 && !R?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : O && (b = !!(Date.now() - O.createdAt >= s.dedupingInterval || R?.forceRevalidate), !b) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (P = function() {
              return Ut(Z, void 0, void 0, function() {
                var ne, fe, he, ae;
                return Bt(this, function(B) {
                  switch (B.label) {
                    case 0:
                      return ne = Co.get(x), ne ? [3, 2] : (fe = Array.isArray(x) ? x : [x], he = v.apply(void 0, Ef([], yf(fe), !1)), Co.set(x, he, s.dedupingInterval), [4, _s(x, he, s.cache, u)]);
                    case 1:
                      return B.sent(), [3, 4];
                    case 2:
                      return [4, _s(x, ne.data, s.cache, u)];
                    case 3:
                      B.sent(), B.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Co.delete(x), m.error !== void 0 && (ae = !i && s.shouldRetryOnError && (R ? R.shouldRetryOnError : !0), ae && Nf(D, R ? R.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, $ && s.revalidateDebounce ? (setTimeout(function() {
              return Ut(Z, void 0, void 0, function() {
                return Bt(this, function(ne) {
                  switch (ne.label) {
                    case 0:
                      return i ? [3, 2] : [4, P()];
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
            return [4, P()];
          case 2:
            G.sent(), G.label = 3;
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
      return Bt(this, function(F) {
        return [2, D(null, { shouldRetryOnError: !1 })];
      });
    });
  }, Y = null;
  ar(function() {
    var F = function() {
      return Ut(e, void 0, void 0, function() {
        return Bt(this, function(R) {
          switch (R.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, D()] : [3, 2];
            case 1:
              return R.sent(), [3, 3];
            case 2:
              Y && clearTimeout(Y), R.label = 3;
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
  }), cr(function() {
    i = !0, Y && clearTimeout(Y), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", V, !1), window.removeEventListener("focus", V, !1));
    var F = to.get(h.value);
    F && (F.data = F.data.filter(function(R) {
      return R !== m;
    }));
  });
  try {
    yt(h, function(F) {
      Je(h) || (h.value = F), m.key = F, m.isValidating = !!F, vf(h.value, m, u), !d && !l && h.value && D(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = ct(ct({}, Ll(m)), { mutate: function(F, R) {
    return D(F, ct(ct({}, R), { forceRevalidate: !0 }));
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
  initialInput: o = "",
  sendExtraMessageFields: r,
  streamProtocol: s = "data",
  onResponse: i,
  onFinish: l,
  onError: a,
  credentials: f,
  headers: d,
  body: u,
  generateId: h = br,
  onToolCall: m,
  fetch: D,
  keepLastMessageOnError: V = !0,
  maxSteps: Y = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var F, R;
  const W = t ?? h(), x = `${e}|${W}`, { data: O, mutate: $ } = Of(
    x,
    () => {
      var z;
      return (z = ys[x]) != null ? z : Pn(n);
    }
  ), v = (F = Es[W]) != null ? F : Es[W] = Fe(
    "ready"
  );
  (R = O.value) != null || (O.value = Pn(n));
  const b = (z) => (ys[x] = z, $()), P = O, Z = Fe(void 0), G = Fe(void 0);
  let ne = null;
  async function fe(z, { data: ce, headers: be, body: Ae } = {}) {
    var De, ze, kt;
    Z.value = void 0, v.value = "submitted";
    const Cn = P.value.length, wt = zo(
      (De = P.value[P.value.length - 1]) == null ? void 0 : De.toolInvocations
    );
    try {
      ne = new AbortController();
      const ht = Pn(z), c = ht;
      b(c);
      const p = (ze = G.value) != null ? ze : [], _ = r ? c : c.map(
        ({
          role: N,
          content: y,
          experimental_attachments: E,
          data: C,
          annotations: I,
          toolInvocations: S,
          parts: w
        }) => ({
          role: N,
          content: y,
          ...E !== void 0 && {
            experimental_attachments: E
          },
          ...C !== void 0 && { data: C },
          ...I !== void 0 && { annotations: I },
          ...S !== void 0 && { toolInvocations: S },
          ...w !== void 0 && { parts: w }
        })
      );
      await ff({
        api: e,
        body: (kt = H?.({
          id: W,
          messages: c,
          requestData: ce,
          requestBody: Ae
        })) != null ? kt : {
          id: W,
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
        abortController: () => ne,
        credentials: f,
        onResponse: i,
        onUpdate({ message: N, data: y, replaceLastMessage: E }) {
          v.value = "streaming", b([
            ...E ? c.slice(0, c.length - 1) : c,
            N
          ]), y?.length && (G.value = [...p, ...y]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          V || b(ht);
        },
        generateId: h,
        onToolCall: m,
        fetch: D,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Yo(c[c.length - 1])
      }), v.value = "ready";
    } catch (ht) {
      if (ht.name === "AbortError")
        return ne = null, v.value = "ready", null;
      a && ht instanceof Error && a(ht), Z.value = ht, v.value = "error";
    } finally {
      ne = null;
    }
    df({
      originalMaxToolInvocationStep: wt,
      originalMessageCount: Cn,
      maxSteps: Y,
      messages: P.value
    }) && await fe(P.value);
  }
  const he = async (z, ce) => {
    var be, Ae, De;
    const ze = await gs(
      (be = ce?.experimental_attachments) != null ? be : z.experimental_attachments
    );
    return fe(
      P.value.concat({
        ...z,
        id: (Ae = z.id) != null ? Ae : h(),
        createdAt: (De = z.createdAt) != null ? De : /* @__PURE__ */ new Date(),
        experimental_attachments: ze.length > 0 ? ze : void 0,
        parts: zi(z)
      }),
      ce
    );
  }, ae = async (z) => {
    const ce = P.value;
    return ce.length === 0 ? null : ce[ce.length - 1].role === "assistant" ? fe(ce.slice(0, -1), z) : fe(ce, z);
  }, B = () => {
    ne && (ne.abort(), ne = null);
  }, J = (z) => {
    typeof z == "function" && (z = z(P.value)), b(Pn(z));
  }, Ee = (z) => {
    typeof z == "function" && (z = z(G.value)), G.value = z;
  }, st = Fe(o), it = async (z, ce = {}) => {
    var be;
    (be = z?.preventDefault) == null || be.call(z);
    const Ae = st.value;
    if (!Ae && !ce.allowEmptySubmit)
      return;
    const De = await gs(
      ce.experimental_attachments
    );
    fe(
      P.value.concat({
        id: h(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ae,
        role: "user",
        experimental_attachments: De.length > 0 ? De : void 0,
        parts: [{ type: "text", text: Ae }]
      }),
      ce
    ), st.value = "";
  }, pt = ({
    toolCallId: z,
    result: ce
  }) => {
    const be = P.value;
    if (pf({
      messages: be,
      toolCallId: z,
      toolResult: ce
    }), b(be), v.value === "submitted" || v.value === "streaming")
      return;
    const Ae = be[be.length - 1];
    Yi(Ae) && fe(be);
  };
  return {
    id: W,
    messages: P,
    append: he,
    error: Z,
    reload: ae,
    stop: B,
    setMessages: J,
    input: st,
    handleSubmit: it,
    isLoading: mr(
      () => v.value === "submitted" || v.value === "streaming"
    ),
    status: v,
    data: G,
    setData: Ee,
    addToolResult: pt
  };
}
function Yo(e) {
  if (Array.isArray(e))
    return [...e.map(Yo)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, o] of Object.entries(e))
      t[n] = Yo(o);
    return t;
  } else
    return e;
}
function Df(e) {
  const t = Fe(!1), n = Fe(""), o = Fe(!0);
  let r = null, s = [], i = null;
  const l = () => {
    const h = window.SpeechRecognition || window.webkitSpeechRecognition;
    return o.value = !!h, h;
  }, a = () => {
    const h = l();
    return h ? (i = new h(), i.continuous = !0, i.interimResults = !0, i.lang = "zh-CN", i.onresult = (m) => {
      let D = "";
      for (let V = m.resultIndex; V < m.results.length; V++)
        m.results[V].isFinal && (D += m.results[V][0].transcript);
      if (D) {
        const V = D.trim();
        if (["结束对话", "退出语音", "关闭语音", "结束语音", "停止录音"].includes(V)) {
          console.log("[ASR] 检测到结束对话命令，自动停止录音"), d();
          return;
        }
        e(D);
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
        r = new MediaRecorder(h), s = [], r.ondataavailable = (m) => {
          s.push(m.data);
        }, r.onstop = async () => {
          const m = new Blob(s, { type: r?.mimeType });
          await u(m), h.getTracks().forEach((D) => D.stop());
        }, r.start(), t.value = !0;
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
      r && r.stop(), t.value = !1;
    }
  }, u = async (h) => {
    n.value = "当前环境不支持服务器端转录，请使用支持 Web Speech API 的浏览器";
  };
  return {
    isRecording: sn(t),
    error: sn(n),
    isSupported: sn(o),
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
      // 修复API路径 - 移除错误的路径处理逻辑
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat"),
      onToolCall: async ({ toolCall: v }) => {
        if (console.log("[onToolCall] 工具被调用:", v), v.toolName === "navigateToPage") {
          const b = v.args.pageName;
          return console.log(`[onToolCall] 导航工具调用: ${b}`), x(b), { page: b, success: !0 };
        }
        if (v.toolName === "zoomInOnPhoto") {
          const b = v.args.photoTitle;
          return console.log(`[onToolCall] 图片放大工具调用: ${b}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
            detail: { title: b },
            bubbles: !0,
            composed: !0
          })), { title: b };
        }
        if (v.toolName === "zoomOutPhoto") {
          const b = v.args.action || "close";
          return console.log(`[onToolCall] 图片缩小工具调用: ${b}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
            detail: { action: b },
            bubbles: !0,
            composed: !0
          })), { action: b, success: !0 };
        }
        return {};
      }
    }), o = n.messages, r = n.input, s = n.handleSubmit, i = n.isLoading, l = n.error, { isRecording: a, start: f, stop: d, error: u } = Df((v) => {
      const b = v.trim();
      if (["发送", "提交", "发出"].includes(b)) return void s();
      if (["清空", "清除", "删除"].includes(b)) return void (r.value = "");
      r.value = b;
    }), h = Fe(!1), m = xn({ x: 0, y: 0 }), D = Fe(null), V = Fe(null), Y = Fe(!1);
    function H() {
      h.value = !h.value;
    }
    function F() {
      Y.value || H();
    }
    function R(v) {
      return v.trim().startsWith("<audio");
    }
    const W = mr(() => {
      if (!i.value) return !1;
      const v = [...o.value].reverse().find((b) => b.role === "user");
      return !!(v && /摇骰子|掷骰子/.test(v.content));
    });
    yt(o, async (v, b) => {
      if (!v || v.length === (b?.length || 0)) return;
      const P = v.length, Z = b?.length || 0;
      for (let G = Z; G < P; G++) {
        const ne = v[G];
        if (console.log(`[Watcher] 检查消息 ${G}:`, JSON.stringify(ne, null, 2)), ne.role === "assistant" && ne.toolInvocations) {
          console.log("[Watcher] 发现助手工具调用:", ne.toolInvocations);
          for (const fe of ne.toolInvocations)
            fe.state === "result" && (console.log("[Watcher] 工具调用完成:", fe), $(fe));
        }
      }
      await Yn(), V.value && (V.value.scrollTop = V.value.scrollHeight);
    }, { deep: !0 });
    function x(v) {
      let b = "/";
      switch (v) {
        case "portfolio":
        case "blog":
        case "archives":
          b = "/";
          break;
        case "about":
          b = "/about";
          break;
        case "contact":
          b = "/contact";
          break;
        default:
          console.error(`[Navigation] 未知目标: ${v}`);
          return;
      }
      console.log(`[Navigation] 执行跳转到: ${b}`), setTimeout(() => {
        window.location.href = b;
      }, 100);
    }
    yt(o, async (v, b) => {
      if (!v || v.length === (b?.length || 0)) return;
      const P = v[v.length - 1];
      if (P) {
        if (console.log("最新消息对象结构:", JSON.stringify(P, null, 2)), P.role === "tool" && P.toolName)
          switch (P.toolName) {
            case "navigateToPage": {
              const Z = P.result;
              if (Z?.page) {
                console.log(`[Watcher] 检测到导航指令, 目标: ${Z.page}`);
                let G = "/";
                switch (Z.page) {
                  case "portfolio":
                  case "blog":
                  case "archives":
                    G = "/";
                    break;
                  case "about":
                    G = "/about";
                    break;
                  case "contact":
                    G = "/contact";
                    break;
                  default:
                    console.error(`[Watcher] 未知导航目标: ${Z.page}`);
                    return;
                }
                console.log(`[Watcher] 执行页面跳转到: ${G}`), window.location.href = G;
              }
              break;
            }
            case "zoomInOnPhoto": {
              const Z = P.result;
              Z?.title && (console.log(`[Watcher] 检测到放大图片指令, 目标: ${Z.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
                detail: { title: Z.title },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
            case "zoomOutPhoto": {
              const Z = P.result;
              Z?.action && (console.log(`[Watcher] 检测到缩小图片指令, 动作: ${Z.action}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
                detail: { action: Z.action },
                bubbles: !0,
                composed: !0
              })));
              break;
            }
          }
        await Yn(), V.value && (V.value.scrollTop = V.value.scrollHeight);
      }
    }, { deep: !0 }), yt(l, (v) => {
      v && console.error("[Assistant] An error occurred:", v);
    }), yt(u, (v) => {
      if (v && (console.error("[ASR] 语音识别错误:", v), V.value)) {
        const b = document.createElement("div");
        b.className = "msg-line msg-ai error-msg", b.textContent = `语音识别错误: ${v}`, V.value.appendChild(b), V.value.scrollTop = V.value.scrollHeight;
      }
    });
    function O(v) {
      v.preventDefault();
      const b = D.value, P = v.clientX, Z = v.clientY, G = m.x, ne = m.y;
      let fe = !1;
      function he(B) {
        const J = B.clientX - P, Ee = B.clientY - Z;
        if (!fe && (Math.abs(J) > 5 || Math.abs(Ee) > 5) && (fe = !0, Y.value = !0), fe) {
          const st = Math.min(Math.max(0, G + J), window.innerWidth - b.offsetWidth), it = Math.min(Math.max(0, ne + Ee), window.innerHeight - b.offsetHeight);
          m.x = st, m.y = it;
        }
      }
      function ae() {
        document.removeEventListener("mousemove", he), document.removeEventListener("mouseup", ae), setTimeout(() => Y.value = !1, 10);
      }
      document.addEventListener("mousemove", he), document.addEventListener("mouseup", ae);
    }
    ar(() => {
      const v = D.value, b = 20;
      m.x = window.innerWidth - v.offsetWidth - b, m.y = window.innerHeight - v.offsetHeight - b;
    });
    function $(v) {
      if (!(!v || !v.toolName))
        switch (v.toolName) {
          case "navigateToPage": {
            const b = v.result;
            b?.page && (console.log(`[handleToolInvocation] 导航到页面: ${b.page}`), x(b.page));
            break;
          }
          case "zoomInOnPhoto": {
            const b = v.result;
            b?.title && (console.log(`[handleToolInvocation] 放大图片: ${b.title}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
              detail: { title: b.title },
              bubbles: !0,
              composed: !0
            })));
            break;
          }
          case "zoomOutPhoto": {
            const b = v.result;
            b?.action && (console.log(`[handleToolInvocation] 缩小图片: ${b.action}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
              detail: { action: b.action },
              bubbles: !0,
              composed: !0
            })));
            break;
          }
          default:
            console.warn(`[handleToolInvocation] 未知工具: ${v.toolName}`, v);
        }
    }
    return (v, b) => (Re(), $e("div", {
      ref_key: "containerRef",
      ref: D,
      class: "ai-bubble-container",
      style: io({ left: m.x + "px", top: m.y + "px" })
    }, [
      mt("div", {
        class: "floating-ball",
        onMousedown: O,
        onClick: F
      }, "AI", 32),
      h.value ? (Re(), $e("div", Sf, [
        h.value ? (Re(), $e("div", {
          key: 0,
          class: "close-btn",
          onClick: H
        }, "×")) : Qt("", !0),
        mt("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: V
        }, [
          ge(o).length === 0 ? (Re(), $e("div", If, "有什么可以帮您的吗？")) : Qt("", !0),
          (Re(!0), $e(je, null, Ta(ge(o), (P) => (Re(), $e("div", {
            key: P.id,
            class: fn(["msg-line", P.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            P.role === "user" || P.role === "assistant" ? (Re(), $e(je, { key: 0 }, [
              R(P.content) ? (Re(), $e("div", {
                key: 0,
                innerHTML: P.content
              }, null, 8, Tf)) : (Re(), $e("div", Cf, Ds(P.content), 1))
            ], 64)) : Qt("", !0)
          ], 2))), 128)),
          ge(i) ? (Re(), $e("div", Vf, [
            W.value ? (Re(), $e("span", Af, "⚀⚂⚅")) : (Re(), $e("span", Rf, "思考中..."))
          ])) : Qt("", !0)
        ], 512),
        mt("form", {
          onSubmit: b[3] || (b[3] = as(
            //@ts-ignore
            (...P) => ge(s) && ge(s)(...P),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          pa(mt("textarea", {
            "onUpdate:modelValue": b[0] || (b[0] = (P) => ue(r) ? r.value = P : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: b[1] || (b[1] = lu(as(
              //@ts-ignore
              (...P) => ge(s) && ge(s)(...P),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [ou, ge(r)]
          ]),
          mt("button", {
            type: "button",
            class: fn(["btn-voice", { listening: ge(a) }]),
            onClick: b[2] || (b[2] = (P) => ge(a) ? ge(d)() : ge(f)()),
            title: "语音输入"
          }, "🎤", 2),
          mt("button", {
            type: "submit",
            class: "btn-send",
            disabled: ge(i) || !ge(r).trim()
          }, "➤", 8, Pf)
        ], 32)
      ])) : Qt("", !0)
    ], 4));
  }
}), Mf = ".ai-bubble-container{position:fixed;z-index:99999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden;z-index:99999}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", $f = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, jf = /* @__PURE__ */ $f(kf, [["styles", [Mf]]]), Ff = /* @__PURE__ */ eu(jf);
customElements.define("ai-chat-bubble", Ff);
