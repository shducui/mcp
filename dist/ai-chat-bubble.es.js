var zr = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const W = zr.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ct = zr.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, vs = () => !1, un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), An = (e) => e.startsWith("onUpdate:"), ne = Object.assign, Po = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ws = Object.prototype.hasOwnProperty, H = (e, t) => ws.call(e, t), T = Array.isArray, mt = (e) => Un(e) === "[object Map]", Yr = (e) => Un(e) === "[object Set]", I = (e) => typeof e == "function", ee = (e) => typeof e == "string", ut = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", Io = (e) => (q(e) || I(e)) && I(e.then) && I(e.catch), Xr = Object.prototype.toString, Un = (e) => Xr.call(e), Ro = (e) => Un(e).slice(8, -1), Kn = (e) => Un(e) === "[object Object]", $o = (e) => ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kt = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xs = /* @__PURE__ */ nt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Os = /-(\w)/g, xe = Bn(
  (e) => e.replace(Os, (t, n) => n ? n.toUpperCase() : "")
), Ds = /\B([A-Z])/g, we = Bn(
  (e) => e.replace(Ds, "-$1").toLowerCase()
), Wn = Bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ht = Bn(
  (e) => e ? `on${Wn(e)}` : ""
), at = (e, t) => !Object.is(e, t), Dt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yt = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, _o = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, rr = (e) => {
  const t = ee(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ir;
const dn = () => ir || (ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gn(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ee(o) ? Ts(o) : Gn(o);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (ee(e) || q(e))
    return e;
}
const Ss = /;(?![^(]*\))/g, Vs = /:([^]+)/, Cs = /\/\*[^]*?\*\//g;
function Ts(e) {
  const t = {};
  return e.replace(Cs, "").split(Ss).forEach((n) => {
    if (n) {
      const o = n.split(Vs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Xt(e) {
  let t = "";
  if (ee(e))
    t = e;
  else if (T(e))
    for (let n = 0; n < e.length; n++) {
      const o = Xt(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const As = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ps = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Is = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Rs = /* @__PURE__ */ nt(As), $s = /* @__PURE__ */ nt(Ps), Ms = /* @__PURE__ */ nt(Is), js = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fs = /* @__PURE__ */ nt(js);
function Zr(e) {
  return !!e || e === "";
}
const Qr = (e) => !!(e && e.__v_isRef === !0), ei = (e) => ee(e) ? e : e == null ? "" : T(e) || q(e) && (e.toString === Xr || !I(e.toString)) ? Qr(e) ? ei(e.value) : JSON.stringify(e, ti, 2) : String(e), ti = (e, t) => Qr(t) ? ti(e, t.value) : mt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], i) => (n[io(o, i) + " =>"] = r, n),
    {}
  )
} : Yr(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => io(n))
} : ut(t) ? io(t) : q(t) && !T(t) && !Kn(t) ? String(t) : t, io = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var X = {};
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ve;
class ks {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ve, !t && ve && (this.index = (ve.scopes || (ve.scopes = [])).push(
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
      const n = ve;
      try {
        return ve = this, t();
      } finally {
        ve = n;
      }
    } else X.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ve, ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ve = this.prevScope, this.prevScope = void 0);
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
function Ls() {
  return ve;
}
let B;
const so = /* @__PURE__ */ new WeakSet();
class ni {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ve && ve.active && ve.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, so.has(this) && (so.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ri(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, sr(this), ii(this);
    const t = B, n = Me;
    B = this, Me = !0;
    try {
      return this.fn();
    } finally {
      X.NODE_ENV !== "production" && B !== this && Ye(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), si(this), B = t, Me = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fo(t);
      this.deps = this.depsTail = void 0, sr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? so.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    bo(this) && this.run();
  }
  get dirty() {
    return bo(this);
  }
}
let oi = 0, Bt, Wt;
function ri(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wt, Wt = e;
    return;
  }
  e.next = Bt, Bt = e;
}
function Mo() {
  oi++;
}
function jo() {
  if (--oi > 0)
    return;
  if (Wt) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Bt; ) {
    let t = Bt;
    for (Bt = void 0; t; ) {
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
function ii(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function si(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), Fo(o), Hs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function bo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (li(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function li(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Zt) || (e.globalVersion = Zt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !bo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = B, o = Me;
  B = e, Me = !0;
  try {
    ii(e);
    const r = e.fn(e._value);
    (t.version === 0 || at(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    B = n, Me = o, si(e), e.flags &= -3;
  }
}
function Fo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), X.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Fo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Hs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Me = !0;
const ci = [];
function je() {
  ci.push(Me), Me = !1;
}
function Fe() {
  const e = ci.pop();
  Me = e === void 0 ? !0 : e;
}
function sr(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = B;
    B = void 0;
    try {
      t();
    } finally {
      B = n;
    }
  }
}
let Zt = 0;
class Us {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ko {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, X.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!B || !Me || B === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== B)
      n = this.activeLink = new Us(B, this), B.deps ? (n.prevDep = B.depsTail, B.depsTail.nextDep = n, B.depsTail = n) : B.deps = B.depsTail = n, ai(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = B.depsTail, n.nextDep = void 0, B.depsTail.nextDep = n, B.depsTail = n, B.deps === n && (B.deps = o);
    }
    return X.NODE_ENV !== "production" && B.onTrack && B.onTrack(
      ne(
        {
          effect: B
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Zt++, this.notify(t);
  }
  notify(t) {
    Mo();
    try {
      if (X.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ne(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      jo();
    }
  }
}
function ai(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        ai(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), X.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const yo = /* @__PURE__ */ new WeakMap(), _t = Symbol(
  X.NODE_ENV !== "production" ? "Object iterate" : ""
), Eo = Symbol(
  X.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Qt = Symbol(
  X.NODE_ENV !== "production" ? "Array iterate" : ""
);
function se(e, t, n) {
  if (Me && B) {
    let o = yo.get(e);
    o || yo.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new ko()), r.map = o, r.key = n), X.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function We(e, t, n, o, r, i) {
  const s = yo.get(e);
  if (!s) {
    Zt++;
    return;
  }
  const l = (a) => {
    a && (X.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: i
    }) : a.trigger());
  };
  if (Mo(), t === "clear")
    s.forEach(l);
  else {
    const a = T(e), h = a && $o(n);
    if (a && n === "length") {
      const d = Number(o);
      s.forEach((f, m) => {
        (m === "length" || m === Qt || !ut(m) && m >= d) && l(f);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(Qt)), t) {
        case "add":
          a ? h && l(s.get("length")) : (l(s.get(_t)), mt(e) && l(s.get(Eo)));
          break;
        case "delete":
          a || (l(s.get(_t)), mt(e) && l(s.get(Eo)));
          break;
        case "set":
          mt(e) && l(s.get(_t));
          break;
      }
  }
  jo();
}
function wt(e) {
  const t = M(e);
  return t === e ? t : (se(t, "iterate", Qt), _e(e) ? t : t.map(fe));
}
function Jn(e) {
  return se(e = M(e), "iterate", Qt), e;
}
const Ks = {
  __proto__: null,
  [Symbol.iterator]() {
    return lo(this, Symbol.iterator, fe);
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((t) => T(t) ? wt(t) : t)
    );
  },
  entries() {
    return lo(this, "entries", (e) => (e[1] = fe(e[1]), e));
  },
  every(e, t) {
    return Qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Qe(this, "filter", e, t, (n) => n.map(fe), arguments);
  },
  find(e, t) {
    return Qe(this, "find", e, t, fe, arguments);
  },
  findIndex(e, t) {
    return Qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Qe(this, "findLast", e, t, fe, arguments);
  },
  findLastIndex(e, t) {
    return Qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return co(this, "includes", e);
  },
  indexOf(...e) {
    return co(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return co(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ft(this, "pop");
  },
  push(...e) {
    return Ft(this, "push", e);
  },
  reduce(e, ...t) {
    return lr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return lr(this, "reduceRight", e, t);
  },
  shift() {
    return Ft(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ft(this, "splice", e);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ft(this, "unshift", e);
  },
  values() {
    return lo(this, "values", fe);
  }
};
function lo(e, t, n) {
  const o = Jn(e), r = o[t]();
  return o !== e && !_e(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Bs = Array.prototype;
function Qe(e, t, n, o, r, i) {
  const s = Jn(e), l = s !== e && !_e(e), a = s[t];
  if (a !== Bs[t]) {
    const f = a.apply(e, i);
    return l ? fe(f) : f;
  }
  let h = n;
  s !== e && (l ? h = function(f, m) {
    return n.call(this, fe(f), m, e);
  } : n.length > 2 && (h = function(f, m) {
    return n.call(this, f, m, e);
  }));
  const d = a.call(s, h, o);
  return l && r ? r(d) : d;
}
function lr(e, t, n, o) {
  const r = Jn(e);
  let i = n;
  return r !== e && (_e(e) ? n.length > 3 && (i = function(s, l, a) {
    return n.call(this, s, l, a, e);
  }) : i = function(s, l, a) {
    return n.call(this, s, fe(l), a, e);
  }), r[t](i, ...o);
}
function co(e, t, n) {
  const o = M(e);
  se(o, "iterate", Qt);
  const r = o[t](...n);
  return (r === -1 || r === !1) && Pn(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : r;
}
function Ft(e, t, n = []) {
  je(), Mo();
  const o = M(e)[t].apply(e, n);
  return jo(), Fe(), o;
}
const Ws = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), fi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ut)
);
function Gs(e) {
  ut(e) || (e = String(e));
  const t = M(this);
  return se(t, "has", e), t.hasOwnProperty(e);
}
class ui {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return o === (r ? i ? _i : mi : i ? gi : hi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = T(t);
    if (!r) {
      let a;
      if (s && (a = Ks[n]))
        return a;
      if (n === "hasOwnProperty")
        return Gs;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ie(t) ? t : o
    );
    return (ut(n) ? fi.has(n) : Ws(n)) || (r || se(t, "get", n), i) ? l : ie(l) ? s && $o(n) ? l : l.value : q(l) ? r ? en(l) : zn(l) : l;
  }
}
class di extends ui {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = Xe(i);
      if (!_e(o) && !Xe(o) && (i = M(i), o = M(o)), !T(t) && ie(i) && !ie(o))
        return a ? !1 : (i.value = o, !0);
    }
    const s = T(t) && $o(n) ? Number(n) < t.length : H(t, n), l = Reflect.set(
      t,
      n,
      o,
      ie(t) ? t : r
    );
    return t === M(r) && (s ? at(o, i) && We(t, "set", n, o, i) : We(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = H(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && o && We(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ut(n) || !fi.has(n)) && se(t, "has", n), o;
  }
  ownKeys(t) {
    return se(
      t,
      "iterate",
      T(t) ? "length" : _t
    ), Reflect.ownKeys(t);
  }
}
class pi extends ui {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return X.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return X.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Js = /* @__PURE__ */ new di(), qs = /* @__PURE__ */ new pi(), zs = /* @__PURE__ */ new di(!0), Ys = /* @__PURE__ */ new pi(!0), No = (e) => e, yn = (e) => Reflect.getPrototypeOf(e);
function Xs(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, i = M(r), s = mt(i), l = e === "entries" || e === Symbol.iterator && s, a = e === "keys" && s, h = r[e](...o), d = n ? No : t ? In : fe;
    return !t && se(
      i,
      "iterate",
      a ? Eo : _t
    ), {
      // iterator protocol
      next() {
        const { value: f, done: m } = h.next();
        return m ? { value: f, done: m } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function En(e) {
  return function(...t) {
    if (X.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${Wn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Zs(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, s = M(i), l = M(r);
      e || (at(r, l) && se(s, "get", r), se(s, "get", l));
      const { has: a } = yn(s), h = t ? No : e ? In : fe;
      if (a.call(s, r))
        return h(i.get(r));
      if (a.call(s, l))
        return h(i.get(l));
      i !== s && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && se(M(r), "iterate", _t), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, s = M(i), l = M(r);
      return e || (at(r, l) && se(s, "has", r), se(s, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const s = this, l = s.__v_raw, a = M(l), h = t ? No : e ? In : fe;
      return !e && se(a, "iterate", _t), l.forEach((d, f) => r.call(i, h(d), h(f), s));
    }
  };
  return ne(
    n,
    e ? {
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear")
    } : {
      add(r) {
        !t && !_e(r) && !Xe(r) && (r = M(r));
        const i = M(this);
        return yn(i).has.call(i, r) || (i.add(r), We(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !_e(i) && !Xe(i) && (i = M(i));
        const s = M(this), { has: l, get: a } = yn(s);
        let h = l.call(s, r);
        h ? X.NODE_ENV !== "production" && cr(s, l, r) : (r = M(r), h = l.call(s, r));
        const d = a.call(s, r);
        return s.set(r, i), h ? at(i, d) && We(s, "set", r, i, d) : We(s, "add", r, i), this;
      },
      delete(r) {
        const i = M(this), { has: s, get: l } = yn(i);
        let a = s.call(i, r);
        a ? X.NODE_ENV !== "production" && cr(i, s, r) : (r = M(r), a = s.call(i, r));
        const h = l ? l.call(i, r) : void 0, d = i.delete(r);
        return a && We(i, "delete", r, void 0, h), d;
      },
      clear() {
        const r = M(this), i = r.size !== 0, s = X.NODE_ENV !== "production" ? mt(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return i && We(
          r,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Xs(r, e, t);
  }), n;
}
function qn(e, t) {
  const n = Zs(e, t);
  return (o, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    H(n, r) && r in o ? n : o,
    r,
    i
  );
}
const Qs = {
  get: /* @__PURE__ */ qn(!1, !1)
}, el = {
  get: /* @__PURE__ */ qn(!1, !0)
}, tl = {
  get: /* @__PURE__ */ qn(!0, !1)
}, nl = {
  get: /* @__PURE__ */ qn(!0, !0)
};
function cr(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const r = Ro(e);
    Ye(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const hi = /* @__PURE__ */ new WeakMap(), gi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap(), _i = /* @__PURE__ */ new WeakMap();
function ol(e) {
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
function rl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ol(Ro(e));
}
function zn(e) {
  return Xe(e) ? e : Yn(
    e,
    !1,
    Js,
    Qs,
    hi
  );
}
function il(e) {
  return Yn(
    e,
    !1,
    zs,
    el,
    gi
  );
}
function en(e) {
  return Yn(
    e,
    !0,
    qs,
    tl,
    mi
  );
}
function Je(e) {
  return Yn(
    e,
    !0,
    Ys,
    nl,
    _i
  );
}
function Yn(e, t, n, o, r) {
  if (!q(e))
    return X.NODE_ENV !== "production" && Ye(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = rl(e);
  if (i === 0)
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, l), l;
}
function bt(e) {
  return Xe(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xe(e) {
  return !!(e && e.__v_isReadonly);
}
function _e(e) {
  return !!(e && e.__v_isShallow);
}
function Pn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function sl(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && Yt(e, "__v_skip", !0), e;
}
const fe = (e) => q(e) ? zn(e) : e, In = (e) => q(e) ? en(e) : e;
function ie(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Te(e) {
  return ll(e, !1);
}
function ll(e, t) {
  return ie(e) ? e : new cl(e, t);
}
class cl {
  constructor(t, n) {
    this.dep = new ko(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : M(t), this._value = n ? t : fe(t), this.__v_isShallow = n;
  }
  get value() {
    return X.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || _e(t) || Xe(t);
    t = o ? t : M(t), at(t, n) && (this._rawValue = t, this._value = o ? t : fe(t), X.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ke(e) {
  return ie(e) ? e.value : e;
}
const al = {
  get: (e, t, n) => t === "__v_raw" ? e : Ke(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ie(r) && !ie(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function bi(e) {
  return bt(e) ? e : new Proxy(e, al);
}
class fl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ko(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Zt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    B !== this)
      return ri(this, !0), !0;
  }
  get value() {
    const t = X.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return li(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : X.NODE_ENV !== "production" && Ye("Write operation failed: computed value is readonly");
  }
}
function ul(e, t, n = !1) {
  let o, r;
  return I(e) ? o = e : (o = e.get, r = e.set), new fl(o, r, n);
}
const Nn = {}, Rn = /* @__PURE__ */ new WeakMap();
let gt;
function dl(e, t = !1, n = gt) {
  if (n) {
    let o = Rn.get(n);
    o || Rn.set(n, o = []), o.push(e);
  } else X.NODE_ENV !== "production" && !t && Ye(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function pl(e, t, n = W) {
  const { immediate: o, deep: r, once: i, scheduler: s, augmentJob: l, call: a } = n, h = (V) => {
    (n.onWarn || Ye)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (V) => r ? V : _e(V) || r === !1 || r === 0 ? tt(V, 1) : tt(V);
  let f, m, N, S, A = !1, oe = !1;
  if (ie(e) ? (m = () => e.value, A = _e(e)) : bt(e) ? (m = () => d(e), A = !0) : T(e) ? (oe = !0, A = e.some((V) => bt(V) || _e(V)), m = () => e.map((V) => {
    if (ie(V))
      return V.value;
    if (bt(V))
      return d(V);
    if (I(V))
      return a ? a(V, 2) : V();
    X.NODE_ENV !== "production" && h(V);
  })) : I(e) ? t ? m = a ? () => a(e, 2) : e : m = () => {
    if (N) {
      je();
      try {
        N();
      } finally {
        Fe();
      }
    }
    const V = gt;
    gt = f;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      gt = V;
    }
  } : (m = le, X.NODE_ENV !== "production" && h(e)), t && r) {
    const V = m, te = r === !0 ? 1 / 0 : r;
    m = () => tt(V(), te);
  }
  const K = Ls(), Z = () => {
    f.stop(), K && K.active && Po(K.effects, f);
  };
  if (i && t) {
    const V = t;
    t = (...te) => {
      V(...te), Z();
    };
  }
  let R = oe ? new Array(e.length).fill(Nn) : Nn;
  const Q = (V) => {
    if (!(!(f.flags & 1) || !f.dirty && !V))
      if (t) {
        const te = f.run();
        if (r || A || (oe ? te.some((L, j) => at(L, R[j])) : at(te, R))) {
          N && N();
          const L = gt;
          gt = f;
          try {
            const j = [
              te,
              // pass undefined as the old value when it's changed for the first time
              R === Nn ? void 0 : oe && R[0] === Nn ? [] : R,
              S
            ];
            R = te, a ? a(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            gt = L;
          }
        }
      } else
        f.run();
  };
  return l && l(Q), f = new ni(m), f.scheduler = s ? () => s(Q, !1) : Q, S = (V) => dl(V, !1, f), N = f.onStop = () => {
    const V = Rn.get(f);
    if (V) {
      if (a)
        a(V, 4);
      else
        for (const te of V) te();
      Rn.delete(f);
    }
  }, X.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? o ? Q(!0) : R = f.run() : s ? s(Q.bind(null, !0), !0) : f.run(), Z.pause = f.pause.bind(f), Z.resume = f.resume.bind(f), Z.stop = Z, Z;
}
function tt(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ie(e))
    tt(e.value, t, n);
  else if (T(e))
    for (let o = 0; o < e.length; o++)
      tt(e[o], t, n);
  else if (Yr(e) || mt(e))
    e.forEach((o) => {
      tt(o, t, n);
    });
  else if (Kn(e)) {
    for (const o in e)
      tt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && tt(e[o], t, n);
  }
  return e;
}
var p = {};
const yt = [];
function wn(e) {
  yt.push(e);
}
function xn() {
  yt.pop();
}
let ao = !1;
function x(e, ...t) {
  if (ao) return;
  ao = !0, je();
  const n = yt.length ? yt[yt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = hl();
  if (o)
    Pt(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, l;
          return (l = (s = i.toString) == null ? void 0 : s.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${no(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...gl(r)), console.warn(...i);
  }
  Fe(), ao = !1;
}
function hl() {
  let e = yt[yt.length - 1];
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
function gl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ml(n));
  }), t;
}
function ml({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${no(
    e.component,
    e.type,
    o
  )}`, i = ">" + n;
  return e.props ? [r, ..._l(e.props), i] : [r + i];
}
function _l(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...yi(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function yi(e, t, n) {
  return ee(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ie(t) ? (t = yi(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const Lo = {
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
function Pt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    pn(r, t, n);
  }
}
function Ze(e, t, n, o) {
  if (I(e)) {
    const r = Pt(e, t, n, o);
    return r && Io(r) && r.catch((i) => {
      pn(i, t, n);
    }), r;
  }
  if (T(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ze(e[i], t, n, o));
    return r;
  } else p.NODE_ENV !== "production" && x(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function pn(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || W;
  if (t) {
    let l = t.parent;
    const a = t.proxy, h = p.NODE_ENV !== "production" ? Lo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, a, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      je(), Pt(i, null, 10, [
        e,
        a,
        h
      ]), Fe();
      return;
    }
  }
  bl(e, n, r, o, s);
}
function bl(e, t, n, o = !0, r = !1) {
  if (p.NODE_ENV !== "production") {
    const i = Lo[t];
    if (n && wn(n), x(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && xn(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const ge = [];
let Be = -1;
const Tt = [];
let it = null, St = 0;
const Ei = /* @__PURE__ */ Promise.resolve();
let $n = null;
const yl = 100;
function Ho(e) {
  const t = $n || Ei;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function El(e) {
  let t = Be + 1, n = ge.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = ge[o], i = tn(r);
    i < e || i === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Xn(e) {
  if (!(e.flags & 1)) {
    const t = tn(e), n = ge[ge.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= tn(n) ? ge.push(e) : ge.splice(El(t), 0, e), e.flags |= 1, Ni();
  }
}
function Ni() {
  $n || ($n = Ei.then(xi));
}
function vi(e) {
  T(e) ? Tt.push(...e) : it && e.id === -1 ? it.splice(St + 1, 0, e) : e.flags & 1 || (Tt.push(e), e.flags |= 1), Ni();
}
function ar(e, t, n = Be + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < ge.length; n++) {
    const o = ge[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && Uo(t, o))
        continue;
      ge.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function wi(e) {
  if (Tt.length) {
    const t = [...new Set(Tt)].sort(
      (n, o) => tn(n) - tn(o)
    );
    if (Tt.length = 0, it) {
      it.push(...t);
      return;
    }
    for (it = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), St = 0; St < it.length; St++) {
      const n = it[St];
      p.NODE_ENV !== "production" && Uo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    it = null, St = 0;
  }
}
const tn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xi(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => Uo(e, n) : le;
  try {
    for (Be = 0; Be < ge.length; Be++) {
      const n = ge[Be];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Pt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Be < ge.length; Be++) {
      const n = ge[Be];
      n && (n.flags &= -2);
    }
    Be = -1, ge.length = 0, wi(e), $n = null, (ge.length || Tt.length) && xi(e);
  }
}
function Uo(e, t) {
  const n = e.get(t) || 0;
  if (n > yl) {
    const o = t.i, r = o && cs(o.type);
    return pn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let qe = !1;
const On = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (dn().__VUE_HMR_RUNTIME__ = {
  createRecord: fo(Oi),
  rerender: fo(wl),
  reload: fo(xl)
});
const Nt = /* @__PURE__ */ new Map();
function Nl(e) {
  const t = e.type.__hmrId;
  let n = Nt.get(t);
  n || (Oi(t, e.type), n = Nt.get(t)), n.instances.add(e);
}
function vl(e) {
  Nt.get(e.type.__hmrId).instances.delete(e);
}
function Oi(e, t) {
  return Nt.has(e) ? !1 : (Nt.set(e, {
    initialDef: Mn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Mn(e) {
  return as(e) ? e.__vccOpts : e;
}
function wl(e, t) {
  const n = Nt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Mn(o.type).render = t), o.renderCache = [], qe = !0, o.update(), qe = !1;
  }));
}
function xl(e, t) {
  const n = Nt.get(e);
  if (!n) return;
  t = Mn(t), fr(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const i = o[r], s = Mn(i.type);
    let l = On.get(s);
    l || (s !== n.initialDef && fr(s, t), On.set(s, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Xn(() => {
      qe = !0, i.parent.update(), qe = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  vi(() => {
    On.clear();
  });
}
function fr(e, t) {
  ne(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function fo(e) {
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
let Ge, Ht = [], vo = !1;
function hn(e, ...t) {
  Ge ? Ge.emit(e, ...t) : vo || Ht.push({ event: e, args: t });
}
function Di(e, t) {
  var n, o;
  Ge = e, Ge ? (Ge.enabled = !0, Ht.forEach(({ event: r, args: i }) => Ge.emit(r, ...i)), Ht = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Di(i, t);
  }), setTimeout(() => {
    Ge || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, vo = !0, Ht = []);
  }, 3e3)) : (vo = !0, Ht = []);
}
function Ol(e, t) {
  hn("app:init", e, t, {
    Fragment: Ae,
    Text: gn,
    Comment: Se,
    Static: Vn
  });
}
function Dl(e) {
  hn("app:unmount", e);
}
const Sl = /* @__PURE__ */ Ko(
  "component:added"
  /* COMPONENT_ADDED */
), Si = /* @__PURE__ */ Ko(
  "component:updated"
  /* COMPONENT_UPDATED */
), Vl = /* @__PURE__ */ Ko(
  "component:removed"
  /* COMPONENT_REMOVED */
), Cl = (e) => {
  Ge && typeof Ge.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ge.cleanupBuffer(e) && Vl(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ko(e) {
  return (t) => {
    hn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Tl = /* @__PURE__ */ Vi(
  "perf:start"
  /* PERFORMANCE_START */
), Al = /* @__PURE__ */ Vi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Vi(e) {
  return (t, n, o) => {
    hn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Pl(e, t, n) {
  hn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let me = null, Ci = null;
function jn(e) {
  const t = me;
  return me = e, Ci = e && e.type.__scopeId || null, t;
}
function Il(e, t = me, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && vr(-1);
    const i = jn(t);
    let s;
    try {
      s = e(...r);
    } finally {
      jn(i), o._d && vr(1);
    }
    return p.NODE_ENV !== "production" && Si(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ti(e) {
  xs(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function Rl(e, t) {
  if (me === null)
    return p.NODE_ENV !== "production" && x("withDirectives can only be used inside render functions."), e;
  const n = to(me), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, s, l, a = W] = t[r];
    i && (I(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && tt(s), o.push({
      dir: i,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function dt(e, t, n, o) {
  const r = e.dirs, i = t && t.dirs;
  for (let s = 0; s < r.length; s++) {
    const l = r[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[o];
    a && (je(), Ze(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Fe());
  }
}
const $l = Symbol("_vte"), Ml = (e) => e.__isTeleport;
function Bo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Bo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ai(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ne({ name: e.name }, t, { setup: e })
  ) : e;
}
function Pi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const jl = /* @__PURE__ */ new WeakSet();
function Gt(e, t, n, o, r = !1) {
  if (T(e)) {
    e.forEach(
      (S, A) => Gt(
        S,
        t && (T(t) ? t[A] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (Jt(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Gt(e, t, n, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? to(o.component) : o.el, s = r ? null : i, { i: l, r: a } = e;
  if (p.NODE_ENV !== "production" && !l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = l.refs === W ? l.refs = {} : l.refs, f = l.setupState, m = M(f), N = f === W ? () => !1 : (S) => p.NODE_ENV !== "production" && (H(m, S) && !ie(m[S]) && x(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), jl.has(m[S])) ? !1 : H(m, S);
  if (h != null && h !== a && (ee(h) ? (d[h] = null, N(h) && (f[h] = null)) : ie(h) && (h.value = null)), I(a))
    Pt(a, l, 12, [s, d]);
  else {
    const S = ee(a), A = ie(a);
    if (S || A) {
      const oe = () => {
        if (e.f) {
          const K = S ? N(a) ? f[a] : d[a] : a.value;
          r ? T(K) && Po(K, i) : T(K) ? K.includes(i) || K.push(i) : S ? (d[a] = [i], N(a) && (f[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else S ? (d[a] = s, N(a) && (f[a] = s)) : A ? (a.value = s, e.k && (d[e.k] = s)) : p.NODE_ENV !== "production" && x("Invalid template ref type:", a, `(${typeof a})`);
      };
      s ? (oe.id = -1, Oe(oe, n)) : oe();
    } else p.NODE_ENV !== "production" && x("Invalid template ref type:", a, `(${typeof a})`);
  }
}
dn().requestIdleCallback;
dn().cancelIdleCallback;
const Jt = (e) => !!e.type.__asyncLoader, Wo = (e) => e.type.__isKeepAlive;
function Fl(e, t) {
  Ii(e, "a", t);
}
function kl(e, t) {
  Ii(e, "da", t);
}
function Ii(e, t, n = ue) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Zn(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Wo(r.parent.vnode) && Ll(o, t, n, r), r = r.parent;
  }
}
function Ll(e, t, n, o) {
  const r = Zn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  $i(() => {
    Po(o[t], r);
  }, n);
}
function Zn(e, t, n = ue, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      je();
      const l = mn(n), a = Ze(t, n, e, s);
      return l(), Fe(), a;
    });
    return o ? r.unshift(i) : r.push(i), i;
  } else if (p.NODE_ENV !== "production") {
    const r = ht(Lo[e].replace(/ hook$/, ""));
    x(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ot = (e) => (t, n = ue) => {
  (!on || e === "sp") && Zn(e, (...o) => t(...o), n);
}, Hl = ot("bm"), Ri = ot("m"), Ul = ot(
  "bu"
), Kl = ot("u"), Bl = ot(
  "bum"
), $i = ot("um"), Wl = ot(
  "sp"
), Gl = ot("rtg"), Jl = ot("rtc");
function ql(e, t = ue) {
  Zn("ec", e, t);
}
const zl = Symbol.for("v-ndc");
function Yl(e, t, n, o) {
  let r;
  const i = n, s = T(e);
  if (s || ee(e)) {
    const l = s && bt(e);
    let a = !1, h = !1;
    l && (a = !_e(e), h = Xe(e), e = Jn(e)), r = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      r[d] = t(
        a ? h ? In(fe(e[d])) : fe(e[d]) : e[d],
        d,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && x(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (q(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, h = l.length; a < h; a++) {
        const d = l[a];
        r[a] = t(e[d], d, a, i);
      }
    }
  else
    r = [];
  return r;
}
const wo = (e) => e ? ss(e) ? to(e) : wo(e.parent) : null, Et = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ne(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Je(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Je(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Je(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Je(e.refs) : e.refs,
    $parent: (e) => wo(e.parent),
    $root: (e) => wo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ho.bind(e.proxy)),
    $watch: (e) => Cc.bind(e)
  })
), Go = (e) => e === "_" || e === "$", uo = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), Mi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: i, accessCache: s, type: l, appContext: a } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const N = s[t];
      if (N !== void 0)
        switch (N) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (uo(o, t))
          return s[t] = 1, o[t];
        if (r !== W && H(r, t))
          return s[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return s[t] = 3, i[t];
        if (n !== W && H(n, t))
          return s[t] = 4, n[t];
        xo && (s[t] = 0);
      }
    }
    const d = Et[t];
    let f, m;
    if (d)
      return t === "$attrs" ? (se(e.attrs, "get", ""), p.NODE_ENV !== "production" && Ln()) : p.NODE_ENV !== "production" && t === "$slots" && se(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== W && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = a.config.globalProperties, H(m, t)
    )
      return m[t];
    p.NODE_ENV !== "production" && me && (!ee(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== W && Go(t[0]) && H(r, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: i } = e;
    return uo(r, t) ? (r[t] = n, !0) : p.NODE_ENV !== "production" && r.__isScriptSetup && H(r, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (p.NODE_ENV !== "production" && x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: i }
  }, s) {
    let l;
    return !!n[s] || e !== W && H(e, s) || uo(t, s) || (l = i[0]) && H(l, s) || H(o, s) || H(Et, s) || H(r.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (Mi.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Xl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Et).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Et[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: le
    });
  }), t;
}
function Zl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: le
    });
  });
}
function Ql(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Go(o[0])) {
        x(
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
        set: le
      });
    }
  });
}
function ur(e) {
  return T(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ec() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let xo = !0;
function tc(e) {
  const t = Fi(e), n = e.proxy, o = e.ctx;
  xo = !1, t.beforeCreate && dr(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: m,
    beforeUpdate: N,
    updated: S,
    activated: A,
    deactivated: oe,
    beforeDestroy: K,
    beforeUnmount: Z,
    destroyed: R,
    unmounted: Q,
    render: V,
    renderTracked: te,
    renderTriggered: L,
    errorCaptured: j,
    serverPrefetch: z,
    // public API
    expose: be,
    inheritAttrs: re,
    // assets
    components: J,
    directives: ce,
    filters: ye
  } = t, Ie = p.NODE_ENV !== "production" ? ec() : null;
  if (p.NODE_ENV !== "production") {
    const [k] = e.propsOptions;
    if (k)
      for (const F in k)
        Ie("Props", F);
  }
  if (h && nc(h, o, Ie), s)
    for (const k in s) {
      const F = s[k];
      I(F) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, k, {
        value: F.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[k] = F.bind(n), p.NODE_ENV !== "production" && Ie("Methods", k)) : p.NODE_ENV !== "production" && x(
        `Method "${k}" has type "${typeof F}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    p.NODE_ENV !== "production" && !I(r) && x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const k = r.call(n, n);
    if (p.NODE_ENV !== "production" && Io(k) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(k))
      p.NODE_ENV !== "production" && x("data() should return an object.");
    else if (e.data = zn(k), p.NODE_ENV !== "production")
      for (const F in k)
        Ie("Data", F), Go(F[0]) || Object.defineProperty(o, F, {
          configurable: !0,
          enumerable: !0,
          get: () => k[F],
          set: le
        });
  }
  if (xo = !0, i)
    for (const k in i) {
      const F = i[k], Ve = I(F) ? F.bind(n, n) : I(F.get) ? F.get.bind(n, n) : le;
      p.NODE_ENV !== "production" && Ve === le && x(`Computed property "${k}" has no getter.`);
      const It = !I(F) && I(F.set) ? F.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        x(
          `Write operation failed: computed property "${k}" is readonly.`
        );
      } : le, Rt = rn({
        get: Ve,
        set: It
      });
      Object.defineProperty(o, k, {
        enumerable: !0,
        configurable: !0,
        get: () => Rt.value,
        set: (vt) => Rt.value = vt
      }), p.NODE_ENV !== "production" && Ie("Computed", k);
    }
  if (l)
    for (const k in l)
      ji(l[k], o, n, k);
  if (a) {
    const k = I(a) ? a.call(n) : a;
    Reflect.ownKeys(k).forEach((F) => {
      cc(F, k[F]);
    });
  }
  d && dr(d, e, "c");
  function ae(k, F) {
    T(F) ? F.forEach((Ve) => k(Ve.bind(n))) : F && k(F.bind(n));
  }
  if (ae(Hl, f), ae(Ri, m), ae(Ul, N), ae(Kl, S), ae(Fl, A), ae(kl, oe), ae(ql, j), ae(Jl, te), ae(Gl, L), ae(Bl, Z), ae($i, Q), ae(Wl, z), T(be))
    if (be.length) {
      const k = e.exposed || (e.exposed = {});
      be.forEach((F) => {
        Object.defineProperty(k, F, {
          get: () => n[F],
          set: (Ve) => n[F] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === le && (e.render = V), re != null && (e.inheritAttrs = re), J && (e.components = J), ce && (e.directives = ce), z && Pi(e);
}
function nc(e, t, n = le) {
  T(e) && (e = Oo(e));
  for (const o in e) {
    const r = e[o];
    let i;
    q(r) ? "default" in r ? i = Dn(
      r.from || o,
      r.default,
      !0
    ) : i = Dn(r.from || o) : i = Dn(r), ie(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function dr(e, t, n) {
  Ze(
    T(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ji(e, t, n, o) {
  let r = o.includes(".") ? Yi(n, o) : () => n[o];
  if (ee(e)) {
    const i = t[e];
    I(i) ? qt(r, i) : p.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e}"`, i);
  } else if (I(e))
    qt(r, e.bind(n));
  else if (q(e))
    if (T(e))
      e.forEach((i) => ji(i, t, n, o));
    else {
      const i = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(i) ? qt(r, i, e) : p.NODE_ENV !== "production" && x(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else p.NODE_ENV !== "production" && x(`Invalid watch option: "${o}"`, e);
}
function Fi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(
    (h) => Fn(a, h, s, !0)
  ), Fn(a, t, s)), q(t) && i.set(t, a), a;
}
function Fn(e, t, n, o = !1) {
  const { mixins: r, extends: i } = t;
  i && Fn(e, i, n, !0), r && r.forEach(
    (s) => Fn(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      p.NODE_ENV !== "production" && x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = oc[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const oc = {
  data: pr,
  props: hr,
  emits: hr,
  // objects
  methods: Ut,
  computed: Ut,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: Ut,
  directives: Ut,
  // watch
  watch: ic,
  // provide / inject
  provide: pr,
  inject: rc
};
function pr(e, t) {
  return t ? e ? function() {
    return ne(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function rc(e, t) {
  return Ut(Oo(e), Oo(t));
}
function Oo(e) {
  if (T(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ut(e, t) {
  return e ? ne(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hr(e, t) {
  return e ? T(e) && T(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ne(
    /* @__PURE__ */ Object.create(null),
    ur(e),
    ur(t ?? {})
  ) : t;
}
function ic(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ne(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = he(e[o], t[o]);
  return n;
}
function ki() {
  return {
    app: null,
    config: {
      isNativeTag: vs,
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
let sc = 0;
function lc(e, t) {
  return function(o, r = null) {
    I(o) || (o = ne({}, o)), r != null && !q(r) && (p.NODE_ENV !== "production" && x("root props passed to app.mount() must be an object."), r = null);
    const i = ki(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const h = i.app = {
      _uid: sc++,
      _component: o,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: Dr,
      get config() {
        return i.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return s.has(d) ? p.NODE_ENV !== "production" && x("Plugin has already been applied to target app.") : d && I(d.install) ? (s.add(d), d.install(h, ...f)) : I(d) ? (s.add(d), d(h, ...f)) : p.NODE_ENV !== "production" && x(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return i.mixins.includes(d) ? p.NODE_ENV !== "production" && x(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), h;
      },
      component(d, f) {
        return p.NODE_ENV !== "production" && To(d, i.config), f ? (p.NODE_ENV !== "production" && i.components[d] && x(`Component "${d}" has already been registered in target app.`), i.components[d] = f, h) : i.components[d];
      },
      directive(d, f) {
        return p.NODE_ENV !== "production" && Ti(d), f ? (p.NODE_ENV !== "production" && i.directives[d] && x(`Directive "${d}" has already been registered in target app.`), i.directives[d] = f, h) : i.directives[d];
      },
      mount(d, f, m) {
        if (a)
          p.NODE_ENV !== "production" && x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const N = h._ceVNode || ze(o, r);
          return N.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), p.NODE_ENV !== "production" && (i.reload = () => {
            const S = ft(N);
            S.el = null, e(S, d, m);
          }), e(N, d, m), a = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = N.component, Ol(h, Dr)), to(N.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Ze(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, Dl(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && x("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return p.NODE_ENV !== "production" && d in i.provides && (H(i.provides, d) ? x(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : x(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[d] = f, h;
      },
      runWithContext(d) {
        const f = At;
        At = h;
        try {
          return d();
        } finally {
          At = f;
        }
      }
    };
    return h;
  };
}
let At = null;
function cc(e, t) {
  if (!ue)
    p.NODE_ENV !== "production" && x("provide() can only be used inside setup().");
  else {
    let n = ue.provides;
    const o = ue.parent && ue.parent.provides;
    o === n && (n = ue.provides = Object.create(o)), n[e] = t;
  }
}
function Dn(e, t, n = !1) {
  const o = is();
  if (o || At) {
    let r = At ? At._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && x(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && x("inject() can only be used inside setup() or functional components.");
}
const Li = {}, Hi = () => Object.create(Li), Ui = (e) => Object.getPrototypeOf(e) === Li;
function ac(e, t, n, o = !1) {
  const r = {}, i = Hi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ki(e, t, r, i);
  for (const s in e.propsOptions[0])
    s in r || (r[s] = void 0);
  p.NODE_ENV !== "production" && Wi(t || {}, r, e), n ? e.props = o ? r : il(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function fc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function uc(e, t, n, o) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = M(r), [a] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && fc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let m = d[f];
        if (Qn(e.emitsOptions, m))
          continue;
        const N = t[m];
        if (a)
          if (H(i, m))
            N !== i[m] && (i[m] = N, h = !0);
          else {
            const S = xe(m);
            r[S] = Do(
              a,
              l,
              S,
              N,
              e,
              !1
            );
          }
        else
          N !== i[m] && (i[m] = N, h = !0);
      }
    }
  } else {
    Ki(e, t, r, i) && (h = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !H(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = we(f)) === f || !H(t, d))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[f] = Do(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (i !== l)
      for (const f in i)
        (!t || !H(t, f)) && (delete i[f], h = !0);
  }
  h && We(e.attrs, "set", ""), p.NODE_ENV !== "production" && Wi(t || {}, r, e);
}
function Ki(e, t, n, o) {
  const [r, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let a in t) {
      if (Kt(a))
        continue;
      const h = t[a];
      let d;
      r && H(r, d = xe(a)) ? !i || !i.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Qn(e.emitsOptions, a) || (!(a in o) || h !== o[a]) && (o[a] = h, s = !0);
    }
  if (i) {
    const a = M(n), h = l || W;
    for (let d = 0; d < i.length; d++) {
      const f = i[d];
      n[f] = Do(
        r,
        a,
        f,
        h[f],
        e,
        !H(h, f)
      );
    }
  }
  return s;
}
function Do(e, t, n, o, r, i) {
  const s = e[n];
  if (s != null) {
    const l = H(s, "default");
    if (l && o === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && I(a)) {
        const { propsDefaults: h } = r;
        if (n in h)
          o = h[n];
        else {
          const d = mn(r);
          o = h[n] = a.call(
            null,
            t
          ), d();
        }
      } else
        o = a;
      r.ce && r.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === we(n)) && (o = !0));
  }
  return o;
}
const dc = /* @__PURE__ */ new WeakMap();
function Bi(e, t, n = !1) {
  const o = n ? dc : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const i = e.props, s = {}, l = [];
  let a = !1;
  if (!I(e)) {
    const d = (f) => {
      a = !0;
      const [m, N] = Bi(f, t, !0);
      ne(s, m), N && l.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return q(e) && o.set(e, Ct), Ct;
  if (T(i))
    for (let d = 0; d < i.length; d++) {
      p.NODE_ENV !== "production" && !ee(i[d]) && x("props must be strings when using array syntax.", i[d]);
      const f = xe(i[d]);
      gr(f) && (s[f] = W);
    }
  else if (i) {
    p.NODE_ENV !== "production" && !q(i) && x("invalid props options", i);
    for (const d in i) {
      const f = xe(d);
      if (gr(f)) {
        const m = i[d], N = s[f] = T(m) || I(m) ? { type: m } : ne({}, m), S = N.type;
        let A = !1, oe = !0;
        if (T(S))
          for (let K = 0; K < S.length; ++K) {
            const Z = S[K], R = I(Z) && Z.name;
            if (R === "Boolean") {
              A = !0;
              break;
            } else R === "String" && (oe = !1);
          }
        else
          A = I(S) && S.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = A, N[
          1
          /* shouldCastTrue */
        ] = oe, (A || H(N, "default")) && l.push(f);
      }
    }
  }
  const h = [s, l];
  return q(e) && o.set(e, h), h;
}
function gr(e) {
  return e[0] !== "$" && !Kt(e) ? !0 : (p.NODE_ENV !== "production" && x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function pc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Wi(e, t, n) {
  const o = M(t), r = n.propsOptions[0], i = Object.keys(e).map((s) => xe(s));
  for (const s in r) {
    let l = r[s];
    l != null && hc(
      s,
      o[s],
      l,
      p.NODE_ENV !== "production" ? Je(o) : o,
      !i.includes(s)
    );
  }
}
function hc(e, t, n, o, r) {
  const { type: i, required: s, validator: l, skipCheck: a } = n;
  if (s && r) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !a) {
      let h = !1;
      const d = T(i) ? i : [i], f = [];
      for (let m = 0; m < d.length && !h; m++) {
        const { valid: N, expectedType: S } = mc(t, d[m]);
        f.push(S || ""), h = N;
      }
      if (!h) {
        x(_c(e, t, f));
        return;
      }
    }
    l && !l(t, o) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const gc = /* @__PURE__ */ nt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function mc(e, t) {
  let n;
  const o = pc(t);
  if (o === "null")
    n = e === null;
  else if (gc(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = T(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function _c(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Wn).join(" | ")}`;
  const r = n[0], i = Ro(t), s = mr(t, r), l = mr(t, i);
  return n.length === 1 && _r(r) && !bc(r, i) && (o += ` with value ${s}`), o += `, got ${i} `, _r(i) && (o += `with value ${l}.`), o;
}
function mr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function _r(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function bc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Jo = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", qo = (e) => T(e) ? e.map($e) : [$e(e)], yc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Il((...r) => (p.NODE_ENV !== "production" && ue && !(n === null && me) && !(n && n.root !== ue.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), qo(t(...r))), n);
  return o._c = !1, o;
}, Gi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Jo(r)) continue;
    const i = e[r];
    if (I(i))
      t[r] = yc(r, i, o);
    else if (i != null) {
      p.NODE_ENV !== "production" && x(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const s = qo(i);
      t[r] = () => s;
    }
  }
}, Ji = (e, t) => {
  p.NODE_ENV !== "production" && !Wo(e.vnode) && x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = qo(t);
  e.slots.default = () => n;
}, So = (e, t, n) => {
  for (const o in t)
    (n || !Jo(o)) && (e[o] = t[o]);
}, Ec = (e, t, n) => {
  const o = e.slots = Hi();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && Yt(o, "__", r, !0);
    const i = t._;
    i ? (So(o, t, n), n && Yt(o, "_", i, !0)) : Gi(t, o);
  } else t && Ji(e, t);
}, Nc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let i = !0, s = W;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && qe ? (So(r, t, n), We(e, "set", "$slots")) : n && l === 1 ? i = !1 : So(r, t, n) : (i = !t.$stable, Gi(t, r)), s = t;
  } else t && (Ji(e, t), s = { default: 1 });
  if (i)
    for (const l in r)
      !Jo(l) && s[l] == null && delete r[l];
};
let kt, ct;
function xt(e, t) {
  e.appContext.config.performance && kn() && ct.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && Tl(e, t, kn() ? ct.now() : Date.now());
}
function Ot(e, t) {
  if (e.appContext.config.performance && kn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ct.mark(o), ct.measure(
      `<${no(e, e.type)}> ${t}`,
      n,
      o
    ), ct.clearMarks(n), ct.clearMarks(o);
  }
  p.NODE_ENV !== "production" && Al(e, t, kn() ? ct.now() : Date.now());
}
function kn() {
  return kt !== void 0 || (typeof window < "u" && window.performance ? (kt = !0, ct = window.performance) : kt = !1), kt;
}
function vc() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Oe = Mc;
function wc(e) {
  return xc(e);
}
function xc(e, t) {
  vc();
  const n = dn();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && Di(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: a,
    setText: h,
    setElementText: d,
    parentNode: f,
    nextSibling: m,
    setScopeId: N = le,
    insertStaticContent: S
  } = e, A = (c, u, g, y = null, _ = null, b = null, O = void 0, w = null, v = p.NODE_ENV !== "production" && qe ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Lt(c, u) && (y = bn(c), rt(c, _, b, !0), c = null), u.patchFlag === -2 && (v = !1, u.dynamicChildren = null);
    const { type: E, ref: P, shapeFlag: D } = u;
    switch (E) {
      case gn:
        oe(c, u, g, y);
        break;
      case Se:
        K(c, u, g, y);
        break;
      case Vn:
        c == null ? Z(u, g, y, O) : p.NODE_ENV !== "production" && R(c, u, g, O);
        break;
      case Ae:
        ce(
          c,
          u,
          g,
          y,
          _,
          b,
          O,
          w,
          v
        );
        break;
      default:
        D & 1 ? te(
          c,
          u,
          g,
          y,
          _,
          b,
          O,
          w,
          v
        ) : D & 6 ? ye(
          c,
          u,
          g,
          y,
          _,
          b,
          O,
          w,
          v
        ) : D & 64 || D & 128 ? E.process(
          c,
          u,
          g,
          y,
          _,
          b,
          O,
          w,
          v,
          Mt
        ) : p.NODE_ENV !== "production" && x("Invalid VNode type:", E, `(${typeof E})`);
    }
    P != null && _ ? Gt(P, c && c.ref, b, u || c, !u) : P == null && c && c.ref != null && Gt(c.ref, null, b, c, !0);
  }, oe = (c, u, g, y) => {
    if (c == null)
      o(
        u.el = l(u.children),
        g,
        y
      );
    else {
      const _ = u.el = c.el;
      u.children !== c.children && h(_, u.children);
    }
  }, K = (c, u, g, y) => {
    c == null ? o(
      u.el = a(u.children || ""),
      g,
      y
    ) : u.el = c.el;
  }, Z = (c, u, g, y) => {
    [c.el, c.anchor] = S(
      c.children,
      u,
      g,
      y,
      c.el,
      c.anchor
    );
  }, R = (c, u, g, y) => {
    if (u.children !== c.children) {
      const _ = m(c.anchor);
      V(c), [u.el, u.anchor] = S(
        u.children,
        g,
        _,
        y
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, Q = ({ el: c, anchor: u }, g, y) => {
    let _;
    for (; c && c !== u; )
      _ = m(c), o(c, g, y), c = _;
    o(u, g, y);
  }, V = ({ el: c, anchor: u }) => {
    let g;
    for (; c && c !== u; )
      g = m(c), r(c), c = g;
    r(u);
  }, te = (c, u, g, y, _, b, O, w, v) => {
    u.type === "svg" ? O = "svg" : u.type === "math" && (O = "mathml"), c == null ? L(
      u,
      g,
      y,
      _,
      b,
      O,
      w,
      v
    ) : be(
      c,
      u,
      _,
      b,
      O,
      w,
      v
    );
  }, L = (c, u, g, y, _, b, O, w) => {
    let v, E;
    const { props: P, shapeFlag: D, transition: C, dirs: $ } = c;
    if (v = c.el = s(
      c.type,
      b,
      P && P.is,
      P
    ), D & 8 ? d(v, c.children) : D & 16 && z(
      c.children,
      v,
      null,
      y,
      _,
      po(c, b),
      O,
      w
    ), $ && dt(c, null, y, "created"), j(v, c, c.scopeId, O, y), P) {
      for (const Y in P)
        Y !== "value" && !Kt(Y) && i(v, Y, null, P[Y], b, y);
      "value" in P && i(v, "value", null, P.value, b), (E = P.onVnodeBeforeMount) && Ue(E, y, c);
    }
    p.NODE_ENV !== "production" && (Yt(v, "__vnode", c, !0), Yt(v, "__vueParentComponent", y, !0)), $ && dt(c, null, y, "beforeMount");
    const U = Oc(_, C);
    U && C.beforeEnter(v), o(v, u, g), ((E = P && P.onVnodeMounted) || U || $) && Oe(() => {
      E && Ue(E, y, c), U && C.enter(v), $ && dt(c, null, y, "mounted");
    }, _);
  }, j = (c, u, g, y, _) => {
    if (g && N(c, g), y)
      for (let b = 0; b < y.length; b++)
        N(c, y[b]);
    if (_) {
      let b = _.subTree;
      if (p.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && (b = zo(b.children) || b), u === b || Qi(b.type) && (b.ssContent === u || b.ssFallback === u)) {
        const O = _.vnode;
        j(
          c,
          O,
          O.scopeId,
          O.slotScopeIds,
          _.parent
        );
      }
    }
  }, z = (c, u, g, y, _, b, O, w, v = 0) => {
    for (let E = v; E < c.length; E++) {
      const P = c[E] = w ? lt(c[E]) : $e(c[E]);
      A(
        null,
        P,
        u,
        g,
        y,
        _,
        b,
        O,
        w
      );
    }
  }, be = (c, u, g, y, _, b, O) => {
    const w = u.el = c.el;
    p.NODE_ENV !== "production" && (w.__vnode = u);
    let { patchFlag: v, dynamicChildren: E, dirs: P } = u;
    v |= c.patchFlag & 16;
    const D = c.props || W, C = u.props || W;
    let $;
    if (g && pt(g, !1), ($ = C.onVnodeBeforeUpdate) && Ue($, g, u, c), P && dt(u, c, g, "beforeUpdate"), g && pt(g, !0), p.NODE_ENV !== "production" && qe && (v = 0, O = !1, E = null), (D.innerHTML && C.innerHTML == null || D.textContent && C.textContent == null) && d(w, ""), E ? (re(
      c.dynamicChildren,
      E,
      w,
      g,
      y,
      po(u, _),
      b
    ), p.NODE_ENV !== "production" && Sn(c, u)) : O || Ve(
      c,
      u,
      w,
      null,
      g,
      y,
      po(u, _),
      b,
      !1
    ), v > 0) {
      if (v & 16)
        J(w, D, C, g, _);
      else if (v & 2 && D.class !== C.class && i(w, "class", null, C.class, _), v & 4 && i(w, "style", D.style, C.style, _), v & 8) {
        const U = u.dynamicProps;
        for (let Y = 0; Y < U.length; Y++) {
          const G = U[Y], Ee = D[G], Ne = C[G];
          (Ne !== Ee || G === "value") && i(w, G, Ee, Ne, _, g);
        }
      }
      v & 1 && c.children !== u.children && d(w, u.children);
    } else !O && E == null && J(w, D, C, g, _);
    (($ = C.onVnodeUpdated) || P) && Oe(() => {
      $ && Ue($, g, u, c), P && dt(u, c, g, "updated");
    }, y);
  }, re = (c, u, g, y, _, b, O) => {
    for (let w = 0; w < u.length; w++) {
      const v = c[w], E = u[w], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === Ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Lt(v, E) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 198) ? f(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        v,
        E,
        P,
        null,
        y,
        _,
        b,
        O,
        !0
      );
    }
  }, J = (c, u, g, y, _) => {
    if (u !== g) {
      if (u !== W)
        for (const b in u)
          !Kt(b) && !(b in g) && i(
            c,
            b,
            u[b],
            null,
            _,
            y
          );
      for (const b in g) {
        if (Kt(b)) continue;
        const O = g[b], w = u[b];
        O !== w && b !== "value" && i(c, b, w, O, _, y);
      }
      "value" in g && i(c, "value", u.value, g.value, _);
    }
  }, ce = (c, u, g, y, _, b, O, w, v) => {
    const E = u.el = c ? c.el : l(""), P = u.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: C, slotScopeIds: $ } = u;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (qe || D & 2048) && (D = 0, v = !1, C = null), $ && (w = w ? w.concat($) : $), c == null ? (o(E, g, y), o(P, g, y), z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      g,
      P,
      _,
      b,
      O,
      w,
      v
    )) : D > 0 && D & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (re(
      c.dynamicChildren,
      C,
      g,
      _,
      b,
      O,
      w
    ), p.NODE_ENV !== "production" ? Sn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || _ && u === _.subTree) && Sn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : Ve(
      c,
      u,
      g,
      P,
      _,
      b,
      O,
      w,
      v
    );
  }, ye = (c, u, g, y, _, b, O, w, v) => {
    u.slotScopeIds = w, c == null ? u.shapeFlag & 512 ? _.ctx.activate(
      u,
      g,
      y,
      O,
      v
    ) : Ie(
      u,
      g,
      y,
      _,
      b,
      O,
      v
    ) : ae(c, u, v);
  }, Ie = (c, u, g, y, _, b, O) => {
    const w = c.component = Bc(
      c,
      y,
      _
    );
    if (p.NODE_ENV !== "production" && w.type.__hmrId && Nl(w), p.NODE_ENV !== "production" && (wn(c), xt(w, "mount")), Wo(c) && (w.ctx.renderer = Mt), p.NODE_ENV !== "production" && xt(w, "init"), Gc(w, !1, O), p.NODE_ENV !== "production" && Ot(w, "init"), p.NODE_ENV !== "production" && qe && (c.el = null), w.asyncDep) {
      if (_ && _.registerDep(w, k, O), !c.el) {
        const v = w.subTree = ze(Se);
        K(null, v, u, g), c.placeholder = v.el;
      }
    } else
      k(
        w,
        c,
        u,
        g,
        _,
        b,
        O
      );
    p.NODE_ENV !== "production" && (xn(), Ot(w, "mount"));
  }, ae = (c, u, g) => {
    const y = u.component = c.component;
    if (Rc(c, u, g))
      if (y.asyncDep && !y.asyncResolved) {
        p.NODE_ENV !== "production" && wn(u), F(y, u, g), p.NODE_ENV !== "production" && xn();
        return;
      } else
        y.next = u, y.update();
    else
      u.el = c.el, y.vnode = u;
  }, k = (c, u, g, y, _, b, O) => {
    const w = () => {
      if (c.isMounted) {
        let { next: D, bu: C, u: $, parent: U, vnode: Y } = c;
        {
          const Le = qi(c);
          if (Le) {
            D && (D.el = Y.el, F(c, D, O)), Le.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let G = D, Ee;
        p.NODE_ENV !== "production" && wn(D || c.vnode), pt(c, !1), D ? (D.el = Y.el, F(c, D, O)) : D = Y, C && Dt(C), (Ee = D.props && D.props.onVnodeBeforeUpdate) && Ue(Ee, U, D, Y), pt(c, !0), p.NODE_ENV !== "production" && xt(c, "render");
        const Ne = yr(c);
        p.NODE_ENV !== "production" && Ot(c, "render");
        const ke = c.subTree;
        c.subTree = Ne, p.NODE_ENV !== "production" && xt(c, "patch"), A(
          ke,
          Ne,
          // parent may have changed if it's in a teleport
          f(ke.el),
          // anchor may have changed if it's in a fragment
          bn(ke),
          c,
          _,
          b
        ), p.NODE_ENV !== "production" && Ot(c, "patch"), D.el = Ne.el, G === null && $c(c, Ne.el), $ && Oe($, _), (Ee = D.props && D.props.onVnodeUpdated) && Oe(
          () => Ue(Ee, U, D, Y),
          _
        ), p.NODE_ENV !== "production" && Si(c), p.NODE_ENV !== "production" && xn();
      } else {
        let D;
        const { el: C, props: $ } = u, { bm: U, m: Y, parent: G, root: Ee, type: Ne } = c, ke = Jt(u);
        pt(c, !1), U && Dt(U), !ke && (D = $ && $.onVnodeBeforeMount) && Ue(D, G, u), pt(c, !0);
        {
          Ee.ce && // @ts-expect-error _def is private
          Ee.ce._def.shadowRoot !== !1 && Ee.ce._injectChildStyle(Ne), p.NODE_ENV !== "production" && xt(c, "render");
          const Le = c.subTree = yr(c);
          p.NODE_ENV !== "production" && Ot(c, "render"), p.NODE_ENV !== "production" && xt(c, "patch"), A(
            null,
            Le,
            g,
            y,
            c,
            _,
            b
          ), p.NODE_ENV !== "production" && Ot(c, "patch"), u.el = Le.el;
        }
        if (Y && Oe(Y, _), !ke && (D = $ && $.onVnodeMounted)) {
          const Le = u;
          Oe(
            () => Ue(D, G, Le),
            _
          );
        }
        (u.shapeFlag & 256 || G && Jt(G.vnode) && G.vnode.shapeFlag & 256) && c.a && Oe(c.a, _), c.isMounted = !0, p.NODE_ENV !== "production" && Sl(c), u = g = y = null;
      }
    };
    c.scope.on();
    const v = c.effect = new ni(w);
    c.scope.off();
    const E = c.update = v.run.bind(v), P = c.job = v.runIfDirty.bind(v);
    P.i = c, P.id = c.uid, v.scheduler = () => Xn(P), pt(c, !0), p.NODE_ENV !== "production" && (v.onTrack = c.rtc ? (D) => Dt(c.rtc, D) : void 0, v.onTrigger = c.rtg ? (D) => Dt(c.rtg, D) : void 0), E();
  }, F = (c, u, g) => {
    u.component = c;
    const y = c.vnode.props;
    c.vnode = u, c.next = null, uc(c, u.props, y, g), Nc(c, u.children, g), je(), ar(c), Fe();
  }, Ve = (c, u, g, y, _, b, O, w, v = !1) => {
    const E = c && c.children, P = c ? c.shapeFlag : 0, D = u.children, { patchFlag: C, shapeFlag: $ } = u;
    if (C > 0) {
      if (C & 128) {
        Rt(
          E,
          D,
          g,
          y,
          _,
          b,
          O,
          w,
          v
        );
        return;
      } else if (C & 256) {
        It(
          E,
          D,
          g,
          y,
          _,
          b,
          O,
          w,
          v
        );
        return;
      }
    }
    $ & 8 ? (P & 16 && $t(E, _, b), D !== E && d(g, D)) : P & 16 ? $ & 16 ? Rt(
      E,
      D,
      g,
      y,
      _,
      b,
      O,
      w,
      v
    ) : $t(E, _, b, !0) : (P & 8 && d(g, ""), $ & 16 && z(
      D,
      g,
      y,
      _,
      b,
      O,
      w,
      v
    ));
  }, It = (c, u, g, y, _, b, O, w, v) => {
    c = c || Ct, u = u || Ct;
    const E = c.length, P = u.length, D = Math.min(E, P);
    let C;
    for (C = 0; C < D; C++) {
      const $ = u[C] = v ? lt(u[C]) : $e(u[C]);
      A(
        c[C],
        $,
        g,
        null,
        _,
        b,
        O,
        w,
        v
      );
    }
    E > P ? $t(
      c,
      _,
      b,
      !0,
      !1,
      D
    ) : z(
      u,
      g,
      y,
      _,
      b,
      O,
      w,
      v,
      D
    );
  }, Rt = (c, u, g, y, _, b, O, w, v) => {
    let E = 0;
    const P = u.length;
    let D = c.length - 1, C = P - 1;
    for (; E <= D && E <= C; ) {
      const $ = c[E], U = u[E] = v ? lt(u[E]) : $e(u[E]);
      if (Lt($, U))
        A(
          $,
          U,
          g,
          null,
          _,
          b,
          O,
          w,
          v
        );
      else
        break;
      E++;
    }
    for (; E <= D && E <= C; ) {
      const $ = c[D], U = u[C] = v ? lt(u[C]) : $e(u[C]);
      if (Lt($, U))
        A(
          $,
          U,
          g,
          null,
          _,
          b,
          O,
          w,
          v
        );
      else
        break;
      D--, C--;
    }
    if (E > D) {
      if (E <= C) {
        const $ = C + 1, U = $ < P ? u[$].el : y;
        for (; E <= C; )
          A(
            null,
            u[E] = v ? lt(u[E]) : $e(u[E]),
            g,
            U,
            _,
            b,
            O,
            w,
            v
          ), E++;
      }
    } else if (E > C)
      for (; E <= D; )
        rt(c[E], _, b, !0), E++;
    else {
      const $ = E, U = E, Y = /* @__PURE__ */ new Map();
      for (E = U; E <= C; E++) {
        const pe = u[E] = v ? lt(u[E]) : $e(u[E]);
        pe.key != null && (p.NODE_ENV !== "production" && Y.has(pe.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(pe.key),
          "Make sure keys are unique."
        ), Y.set(pe.key, E));
      }
      let G, Ee = 0;
      const Ne = C - U + 1;
      let ke = !1, Le = 0;
      const jt = new Array(Ne);
      for (E = 0; E < Ne; E++) jt[E] = 0;
      for (E = $; E <= D; E++) {
        const pe = c[E];
        if (Ee >= Ne) {
          rt(pe, _, b, !0);
          continue;
        }
        let He;
        if (pe.key != null)
          He = Y.get(pe.key);
        else
          for (G = U; G <= C; G++)
            if (jt[G - U] === 0 && Lt(pe, u[G])) {
              He = G;
              break;
            }
        He === void 0 ? rt(pe, _, b, !0) : (jt[He - U] = E + 1, He >= Le ? Le = He : ke = !0, A(
          pe,
          u[He],
          g,
          null,
          _,
          b,
          O,
          w,
          v
        ), Ee++);
      }
      const tr = ke ? Dc(jt) : Ct;
      for (G = tr.length - 1, E = Ne - 1; E >= 0; E--) {
        const pe = U + E, He = u[pe], nr = u[pe + 1], or = pe + 1 < P ? (
          // #13559, fallback to el placeholder for unresolved async component
          nr.el || nr.placeholder
        ) : y;
        jt[E] === 0 ? A(
          null,
          He,
          g,
          or,
          _,
          b,
          O,
          w,
          v
        ) : ke && (G < 0 || E !== tr[G] ? vt(He, g, or, 2) : G--);
      }
    }
  }, vt = (c, u, g, y, _ = null) => {
    const { el: b, type: O, transition: w, children: v, shapeFlag: E } = c;
    if (E & 6) {
      vt(c.component.subTree, u, g, y);
      return;
    }
    if (E & 128) {
      c.suspense.move(u, g, y);
      return;
    }
    if (E & 64) {
      O.move(c, u, g, Mt);
      return;
    }
    if (O === Ae) {
      o(b, u, g);
      for (let D = 0; D < v.length; D++)
        vt(v[D], u, g, y);
      o(c.anchor, u, g);
      return;
    }
    if (O === Vn) {
      Q(c, u, g);
      return;
    }
    if (y !== 2 && E & 1 && w)
      if (y === 0)
        w.beforeEnter(b), o(b, u, g), Oe(() => w.enter(b), _);
      else {
        const { leave: D, delayLeave: C, afterLeave: $ } = w, U = () => {
          c.ctx.isUnmounted ? r(b) : o(b, u, g);
        }, Y = () => {
          D(b, () => {
            U(), $ && $();
          });
        };
        C ? C(b, U, Y) : Y();
      }
    else
      o(b, u, g);
  }, rt = (c, u, g, y = !1, _ = !1) => {
    const {
      type: b,
      props: O,
      ref: w,
      children: v,
      dynamicChildren: E,
      shapeFlag: P,
      patchFlag: D,
      dirs: C,
      cacheIndex: $
    } = c;
    if (D === -2 && (_ = !1), w != null && (je(), Gt(w, null, g, c, !0), Fe()), $ != null && (u.renderCache[$] = void 0), P & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const U = P & 1 && C, Y = !Jt(c);
    let G;
    if (Y && (G = O && O.onVnodeBeforeUnmount) && Ue(G, u, c), P & 6)
      Ns(c.component, g, y);
    else {
      if (P & 128) {
        c.suspense.unmount(g, y);
        return;
      }
      U && dt(c, null, u, "beforeUnmount"), P & 64 ? c.type.remove(
        c,
        u,
        g,
        Mt,
        y
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Ae || D > 0 && D & 64) ? $t(
        E,
        u,
        g,
        !1,
        !0
      ) : (b === Ae && D & 384 || !_ && P & 16) && $t(v, u, g), y && oo(c);
    }
    (Y && (G = O && O.onVnodeUnmounted) || U) && Oe(() => {
      G && Ue(G, u, c), U && dt(c, null, u, "unmounted");
    }, g);
  }, oo = (c) => {
    const { type: u, el: g, anchor: y, transition: _ } = c;
    if (u === Ae) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((O) => {
        O.type === Se ? r(O.el) : oo(O);
      }) : Es(g, y);
      return;
    }
    if (u === Vn) {
      V(c);
      return;
    }
    const b = () => {
      r(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: O, delayLeave: w } = _, v = () => O(g, b);
      w ? w(c.el, b, v) : v();
    } else
      b();
  }, Es = (c, u) => {
    let g;
    for (; c !== u; )
      g = m(c), r(c), c = g;
    r(u);
  }, Ns = (c, u, g) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && vl(c);
    const {
      bum: y,
      scope: _,
      job: b,
      subTree: O,
      um: w,
      m: v,
      a: E,
      parent: P,
      slots: { __: D }
    } = c;
    br(v), br(E), y && Dt(y), P && T(D) && D.forEach((C) => {
      P.renderCache[C] = void 0;
    }), _.stop(), b && (b.flags |= 8, rt(O, c, u, g)), w && Oe(w, u), Oe(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), p.NODE_ENV !== "production" && Cl(c);
  }, $t = (c, u, g, y = !1, _ = !1, b = 0) => {
    for (let O = b; O < c.length; O++)
      rt(c[O], u, g, y, _);
  }, bn = (c) => {
    if (c.shapeFlag & 6)
      return bn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = m(c.anchor || c.el), g = u && u[$l];
    return g ? m(g) : u;
  };
  let ro = !1;
  const er = (c, u, g) => {
    c == null ? u._vnode && rt(u._vnode, null, null, !0) : A(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      g
    ), u._vnode = c, ro || (ro = !0, ar(), wi(), ro = !1);
  }, Mt = {
    p: A,
    um: rt,
    m: vt,
    r: oo,
    mt: Ie,
    mc: z,
    pc: Ve,
    pbc: re,
    n: bn,
    o: e
  };
  return {
    render: er,
    hydrate: void 0,
    createApp: lc(er)
  };
}
function po({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Oc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Sn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (T(o) && T(r))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = lt(r[i]), l.el = s.el), !n && l.patchFlag !== -2 && Sn(s, l)), l.type === gn && (l.el = s.el), l.type === Se && !l.el && (l.el = s.el), p.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Dc(e) {
  const t = e.slice(), n = [0];
  let o, r, i, s, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const h = e[o];
    if (h !== 0) {
      if (r = n[n.length - 1], e[r] < h) {
        t[o] = r, n.push(o);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        l = i + s >> 1, e[n[l]] < h ? i = l + 1 : s = l;
      h < e[n[i]] && (i > 0 && (t[o] = n[i - 1]), n[i] = o);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function qi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qi(t);
}
function br(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Sc = Symbol.for("v-scx"), Vc = () => {
  {
    const e = Dn(Sc);
    return e || p.NODE_ENV !== "production" && x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function qt(e, t, n) {
  return p.NODE_ENV !== "production" && !I(t) && x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), zi(e, t, n);
}
function zi(e, t, n = W) {
  const { immediate: o, deep: r, flush: i, once: s } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ne({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = x);
  const a = t && o || !t && i !== "post";
  let h;
  if (on) {
    if (i === "sync") {
      const N = Vc();
      h = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!a) {
      const N = () => {
      };
      return N.stop = le, N.resume = le, N.pause = le, N;
    }
  }
  const d = ue;
  l.call = (N, S, A) => Ze(N, d, S, A);
  let f = !1;
  i === "post" ? l.scheduler = (N) => {
    Oe(N, d && d.suspense);
  } : i !== "sync" && (f = !0, l.scheduler = (N, S) => {
    S ? N() : Xn(N);
  }), l.augmentJob = (N) => {
    t && (N.flags |= 4), f && (N.flags |= 2, d && (N.id = d.uid, N.i = d));
  };
  const m = pl(e, t, l);
  return on && (h ? h.push(m) : a && m()), m;
}
function Cc(e, t, n) {
  const o = this.proxy, r = ee(e) ? e.includes(".") ? Yi(o, e) : () => o[e] : e.bind(o, o);
  let i;
  I(t) ? i = t : (i = t.handler, n = t);
  const s = mn(this), l = zi(r, i.bind(o), n);
  return s(), l;
}
function Yi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const Tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xe(t)}Modifiers`] || e[`${we(t)}Modifiers`];
function Ac(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || W;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(ht(xe(t)) in f)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ht(xe(t))}" prop.`
        );
      else {
        const m = d[t];
        I(m) && (m(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const i = t.startsWith("update:"), s = i && Tc(o, t.slice(7));
  if (s && (s.trim && (r = n.map((d) => ee(d) ? d.trim() : d)), s.number && (r = n.map(_o))), p.NODE_ENV !== "production" && Pl(e, t, r), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[ht(d)] && x(
      `Event "${d}" is emitted in component ${no(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${we(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = ht(t)] || // also try camelCase event handler (#2249)
  o[l = ht(xe(t))];
  !a && i && (a = o[l = ht(we(t))]), a && Ze(
    a,
    e,
    6,
    r
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ze(
      h,
      e,
      6,
      r
    );
  }
}
function Xi(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let s = {}, l = !1;
  if (!I(e)) {
    const a = (h) => {
      const d = Xi(h, t, !0);
      d && (l = !0, ne(s, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (q(e) && o.set(e, null), null) : (T(i) ? i.forEach((a) => s[a] = null) : ne(s, i), q(e) && o.set(e, s), s);
}
function Qn(e, t) {
  return !e || !un(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, we(t)) || H(e, t));
}
let Vo = !1;
function Ln() {
  Vo = !0;
}
function yr(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [i],
    slots: s,
    attrs: l,
    emit: a,
    render: h,
    renderCache: d,
    props: f,
    data: m,
    setupState: N,
    ctx: S,
    inheritAttrs: A
  } = e, oe = jn(e);
  let K, Z;
  p.NODE_ENV !== "production" && (Vo = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = r || o, te = p.NODE_ENV !== "production" && N.__isScriptSetup ? new Proxy(V, {
        get(L, j, z) {
          return x(
            `Property '${String(
              j
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(L, j, z);
        }
      }) : V;
      K = $e(
        h.call(
          te,
          V,
          d,
          p.NODE_ENV !== "production" ? Je(f) : f,
          N,
          m,
          S
        )
      ), Z = l;
    } else {
      const V = t;
      p.NODE_ENV !== "production" && l === f && Ln(), K = $e(
        V.length > 1 ? V(
          p.NODE_ENV !== "production" ? Je(f) : f,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return Ln(), Je(l);
            },
            slots: s,
            emit: a
          } : { attrs: l, slots: s, emit: a }
        ) : V(
          p.NODE_ENV !== "production" ? Je(f) : f,
          null
        )
      ), Z = t.props ? l : Pc(l);
    }
  } catch (V) {
    zt.length = 0, pn(V, e, 1), K = ze(Se);
  }
  let R = K, Q;
  if (p.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([R, Q] = Zi(K)), Z && A !== !1) {
    const V = Object.keys(Z), { shapeFlag: te } = R;
    if (V.length) {
      if (te & 7)
        i && V.some(An) && (Z = Ic(
          Z,
          i
        )), R = ft(R, Z, !1, !0);
      else if (p.NODE_ENV !== "production" && !Vo && R.type !== Se) {
        const L = Object.keys(l), j = [], z = [];
        for (let be = 0, re = L.length; be < re; be++) {
          const J = L[be];
          un(J) ? An(J) || j.push(J[2].toLowerCase() + J.slice(3)) : z.push(J);
        }
        z.length && x(
          `Extraneous non-props attributes (${z.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), j.length && x(
          `Extraneous non-emits event listeners (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !Er(R) && x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), R = ft(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !Er(R) && x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Bo(R, n.transition)), p.NODE_ENV !== "production" && Q ? Q(R) : K = R, jn(oe), K;
}
const Zi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = zo(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Zi(o);
  } else return [e, void 0];
  const r = t.indexOf(o), i = n ? n.indexOf(o) : -1, s = (l) => {
    t[r] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [$e(o), s];
};
function zo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (eo(r)) {
      if (r.type !== Se || r.children === "v-if") {
        if (n)
          return;
        if (n = r, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return zo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Pc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || un(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ic = (e, t) => {
  const n = {};
  for (const o in e)
    (!An(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Er = (e) => e.shapeFlag & 7 || e.type === Se;
function Rc(e, t, n) {
  const { props: o, children: r, component: i } = e, { props: s, children: l, patchFlag: a } = t, h = i.emitsOptions;
  if (p.NODE_ENV !== "production" && (r || l) && qe || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Nr(o, s, h) : !!s;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const m = d[f];
        if (s[m] !== o[m] && !Qn(h, m))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Nr(o, s, h) : !0 : !!s;
  return !1;
}
function Nr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const i = o[r];
    if (t[i] !== e[i] && !Qn(n, i))
      return !0;
  }
  return !1;
}
function $c({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Qi = (e) => e.__isSuspense;
function Mc(e, t) {
  t && t.pendingBranch ? T(e) ? t.effects.push(...e) : t.effects.push(e) : vi(e);
}
const Ae = Symbol.for("v-fgt"), gn = Symbol.for("v-txt"), Se = Symbol.for("v-cmt"), Vn = Symbol.for("v-stc"), zt = [];
let De = null;
function Ce(e = !1) {
  zt.push(De = e ? null : []);
}
function jc() {
  zt.pop(), De = zt[zt.length - 1] || null;
}
let nn = 1;
function vr(e, t = !1) {
  nn += e, e < 0 && De && t && (De.hasOnce = !0);
}
function es(e) {
  return e.dynamicChildren = nn > 0 ? De || Ct : null, jc(), nn > 0 && De && De.push(e), e;
}
function Re(e, t, n, o, r, i) {
  return es(
    st(
      e,
      t,
      n,
      o,
      r,
      i,
      !0
    )
  );
}
function Fc(e, t, n, o, r) {
  return es(
    ze(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function eo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Lt(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = On.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const kc = (...e) => ns(
  ...e
), ts = ({ key: e }) => e ?? null, Cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ee(e) || ie(e) || I(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function st(e, t = null, n = null, o = 0, r = null, i = e === Ae ? 0 : 1, s = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ts(t),
    ref: t && Cn(t),
    scopeId: Ci,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return l ? (Yo(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ee(n) ? 8 : 16), p.NODE_ENV !== "production" && a.key !== a.key && x("VNode created with invalid key (NaN). VNode type:", a.type), nn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  De && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && De.push(a), a;
}
const ze = p.NODE_ENV !== "production" ? kc : ns;
function ns(e, t = null, n = null, o = 0, r = null, i = !1) {
  if ((!e || e === zl) && (p.NODE_ENV !== "production" && !e && x(`Invalid vnode type when creating vnode: ${e}.`), e = Se), eo(e)) {
    const l = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Yo(l, n), nn > 0 && !i && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag = -2, l;
  }
  if (as(e) && (e = e.__vccOpts), t) {
    t = Lc(t);
    let { class: l, style: a } = t;
    l && !ee(l) && (t.class = Xt(l)), q(a) && (Pn(a) && !T(a) && (a = ne({}, a)), t.style = Gn(a));
  }
  const s = ee(e) ? 1 : Qi(e) ? 128 : Ml(e) ? 64 : q(e) ? 4 : I(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && s & 4 && Pn(e) && (e = M(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), st(
    e,
    t,
    n,
    o,
    r,
    s,
    i,
    !0
  );
}
function Lc(e) {
  return e ? Pn(e) || Ui(e) ? ne({}, e) : e : null;
}
function ft(e, t, n = !1, o = !1) {
  const { props: r, ref: i, patchFlag: s, children: l, transition: a } = e, h = t ? Hc(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ts(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? T(i) ? i.concat(Cn(t)) : [i, Cn(t)] : Cn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && s === -1 && T(l) ? l.map(os) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ae ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && Bo(
    d,
    a.clone(d)
  ), d;
}
function os(e) {
  const t = ft(e);
  return T(e.children) && (t.children = e.children.map(os)), t;
}
function rs(e = " ", t = 0) {
  return ze(gn, null, e, t);
}
function vn(e = "", t = !1) {
  return t ? (Ce(), Fc(Se, null, e)) : ze(Se, null, e);
}
function $e(e) {
  return e == null || typeof e == "boolean" ? ze(Se) : T(e) ? ze(
    Ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : eo(e) ? lt(e) : ze(gn, null, String(e));
}
function lt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function Yo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (T(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Yo(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !Ui(t) ? t._ctx = me : r === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [rs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Hc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Xt([t.class, o.class]));
      else if (r === "style")
        t.style = Gn([t.style, o.style]);
      else if (un(r)) {
        const i = t[r], s = o[r];
        s && i !== s && !(T(i) && i.includes(s)) && (t[r] = i ? [].concat(i, s) : s);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ue(e, t, n, o = null) {
  Ze(e, t, 7, [
    n,
    o
  ]);
}
const Uc = ki();
let Kc = 0;
function Bc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Uc, i = {
    uid: Kc++,
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
    scope: new ks(
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
    propsOptions: Bi(o, r),
    emitsOptions: Xi(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
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
  return p.NODE_ENV !== "production" ? i.ctx = Xl(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ac.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const is = () => ue || me;
let Hn, Co;
{
  const e = dn(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (i) => {
      r.length > 1 ? r.forEach((s) => s(i)) : r[0](i);
    };
  };
  Hn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), Co = t(
    "__VUE_SSR_SETTERS__",
    (n) => on = n
  );
}
const mn = (e) => {
  const t = ue;
  return Hn(e), e.scope.on(), () => {
    e.scope.off(), Hn(t);
  };
}, wr = () => {
  ue && ue.scope.off(), Hn(null);
}, Wc = /* @__PURE__ */ nt("slot,component");
function To(e, { isNativeTag: t }) {
  (Wc(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ss(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Gc(e, t = !1, n = !1) {
  t && Co(t);
  const { props: o, children: r } = e.vnode, i = ss(e);
  ac(e, o, i, t), Ec(e, r, n || t);
  const s = i ? Jc(e, t) : void 0;
  return t && Co(!1), s;
}
function Jc(e, t) {
  var n;
  const o = e.type;
  if (p.NODE_ENV !== "production") {
    if (o.name && To(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        To(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        Ti(i[s]);
    }
    o.compilerOptions && qc() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mi), p.NODE_ENV !== "production" && Zl(e);
  const { setup: r } = o;
  if (r) {
    je();
    const i = e.setupContext = r.length > 1 ? Yc(e) : null, s = mn(e), l = Pt(
      r,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Je(e.props) : e.props,
        i
      ]
    ), a = Io(l);
    if (Fe(), s(), (a || e.sp) && !Jt(e) && Pi(e), a) {
      if (l.then(wr, wr), t)
        return l.then((h) => {
          xr(e, h, t);
        }).catch((h) => {
          pn(h, e, 0);
        });
      if (e.asyncDep = l, p.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        x(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      xr(e, l, t);
  } else
    ls(e, t);
}
function xr(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (p.NODE_ENV !== "production" && eo(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = bi(t), p.NODE_ENV !== "production" && Ql(e)) : p.NODE_ENV !== "production" && t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ls(e, n);
}
const qc = () => !0;
function ls(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || le);
  {
    const r = mn(e);
    je();
    try {
      tc(e);
    } finally {
      Fe(), r();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === le && !t && (o.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", o));
}
const Or = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return Ln(), se(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return se(e, "get", ""), e[t];
  }
};
function zc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return se(e, "get", "$slots"), t[n];
    }
  });
}
function Yc(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && x("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (T(n) ? o = "array" : ie(n) && (o = "ref")), o !== "object" && x(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (p.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Or));
      },
      get slots() {
        return o || (o = zc(e));
      },
      get emit() {
        return (r, ...i) => e.emit(r, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Or),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function to(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(sl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Et)
        return Et[n](e);
    },
    has(t, n) {
      return n in t || n in Et;
    }
  })) : e.proxy;
}
const Xc = /(?:^|[-_])(\w)/g, Zc = (e) => e.replace(Xc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function cs(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function no(e, t, n = !1) {
  let o = cs(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Zc(o) : n ? "App" : "Anonymous";
}
function as(e) {
  return I(e) && "__vccOpts" in e;
}
const rn = (e, t) => {
  const n = ul(e, t, on);
  if (p.NODE_ENV !== "production") {
    const o = is();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Qc() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!q(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (ie(f)) {
        je();
        const m = f.value;
        return Fe(), [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          l(m),
          ">"
        ];
      } else {
        if (bt(f))
          return [
            "div",
            {},
            ["span", e, _e(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${Xe(f) ? " (readonly)" : ""}`
          ];
        if (Xe(f))
          return [
            "div",
            {},
            ["span", e, _e(f) ? "ShallowReadonly" : "Readonly"],
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
          ...i(f.$)
        ];
    }
  };
  function i(f) {
    const m = [];
    f.type.props && f.props && m.push(s("props", M(f.props))), f.setupState !== W && m.push(s("setup", f.setupState)), f.data !== W && m.push(s("data", M(f.data)));
    const N = a(f, "computed");
    N && m.push(s("computed", N));
    const S = a(f, "inject");
    return S && m.push(s("injected", S)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), m;
  }
  function s(f, m) {
    return m = ne({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((N) => [
          "div",
          {},
          ["span", o, N + ": "],
          l(m[N], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, m = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : q(f) ? ["object", { object: m ? M(f) : f }] : ["span", n, String(f)];
  }
  function a(f, m) {
    const N = f.type;
    if (I(N))
      return;
    const S = {};
    for (const A in f.ctx)
      h(N, A, m) && (S[A] = f.ctx[A]);
    return S;
  }
  function h(f, m, N) {
    const S = f[N];
    if (T(S) && S.includes(m) || q(S) && m in S || f.extends && h(f.extends, m, N) || f.mixins && f.mixins.some((A) => h(A, m, N)))
      return !0;
  }
  function d(f) {
    return _e(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const Dr = "3.5.18", Pe = p.NODE_ENV !== "production" ? x : le;
var de = {};
let Ao;
const Sr = typeof window < "u" && window.trustedTypes;
if (Sr)
  try {
    Ao = /* @__PURE__ */ Sr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    de.NODE_ENV !== "production" && Pe(`Error creating trusted types policy: ${e}`);
  }
const fs = Ao ? (e) => Ao.createHTML(e) : (e) => e, ea = "http://www.w3.org/2000/svg", ta = "http://www.w3.org/1998/Math/MathML", et = typeof document < "u" ? document : null, Vr = et && /* @__PURE__ */ et.createElement("template"), na = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? et.createElementNS(ea, e) : t === "mathml" ? et.createElementNS(ta, e) : n ? et.createElement(e, { is: n }) : et.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => et.createTextNode(e),
  createComment: (e) => et.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => et.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      Vr.innerHTML = fs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Vr.content;
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
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, oa = Symbol("_vtc");
function ra(e, t, n) {
  const o = e[oa];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Cr = Symbol("_vod"), ia = Symbol("_vsh"), sa = Symbol(de.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), la = /(^|;)\s*display\s*:/;
function ca(e, t, n) {
  const o = e.style, r = ee(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (ee(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Tn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Tn(o, s, "");
    for (const s in n)
      s === "display" && (i = !0), Tn(o, s, n[s]);
  } else if (r) {
    if (t !== n) {
      const s = o[sa];
      s && (n += ";" + s), o.cssText = n, i = la.test(n);
    }
  } else t && e.removeAttribute("style");
  Cr in e && (e[Cr] = i ? o.display : "", e[ia] && (o.display = "none"));
}
const aa = /[^\\];\s*$/, Tr = /\s*!important$/;
function Tn(e, t, n) {
  if (T(n))
    n.forEach((o) => Tn(e, t, o));
  else if (n == null && (n = ""), de.NODE_ENV !== "production" && aa.test(n) && Pe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = fa(e, t);
    Tr.test(n) ? e.setProperty(
      we(o),
      n.replace(Tr, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ar = ["Webkit", "Moz", "ms"], ho = {};
function fa(e, t) {
  const n = ho[t];
  if (n)
    return n;
  let o = xe(t);
  if (o !== "filter" && o in e)
    return ho[t] = o;
  o = Wn(o);
  for (let r = 0; r < Ar.length; r++) {
    const i = Ar[r] + o;
    if (i in e)
      return ho[t] = i;
  }
  return t;
}
const Pr = "http://www.w3.org/1999/xlink";
function Ir(e, t, n, o, r, i = Fs(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Pr, t.slice(6, t.length)) : e.setAttributeNS(Pr, t, n) : n == null || i && !Zr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ut(n) ? String(n) : n
  );
}
function Rr(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? fs(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Zr(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    de.NODE_ENV !== "production" && !s && Pe(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(r || t);
}
function Vt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function ua(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const $r = Symbol("_vei");
function da(e, t, n, o, r = null) {
  const i = e[$r] || (e[$r] = {}), s = i[t];
  if (o && s)
    s.value = de.NODE_ENV !== "production" ? jr(o, t) : o;
  else {
    const [l, a] = pa(t);
    if (o) {
      const h = i[t] = ma(
        de.NODE_ENV !== "production" ? jr(o, t) : o,
        r
      );
      Vt(e, l, h, a);
    } else s && (ua(e, l, s, a), i[t] = void 0);
  }
}
const Mr = /(?:Once|Passive|Capture)$/;
function pa(e) {
  let t;
  if (Mr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Mr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : we(e.slice(2)), t];
}
let go = 0;
const ha = /* @__PURE__ */ Promise.resolve(), ga = () => go || (ha.then(() => go = 0), go = Date.now());
function ma(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ze(
      _a(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = ga(), n;
}
function jr(e, t) {
  return I(e) || T(e) ? e : (Pe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), le);
}
function _a(e, t) {
  if (T(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const Fr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ba = (e, t, n, o, r, i) => {
  const s = r === "svg";
  t === "class" ? ra(e, o, s) : t === "style" ? ca(e, n, o) : un(t) ? An(t) || da(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ya(e, t, o, s)) ? (Rr(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ir(e, t, o, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ee(o)) ? Rr(e, xe(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Ir(e, t, o, s));
};
function ya(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fr(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Fr(t) && ee(n) ? !1 : t in e;
}
const kr = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ea(e, t, n) {
  const o = /* @__PURE__ */ Ai(e, t);
  Kn(o) && ne(o, t);
  class r extends Xo {
    constructor(s) {
      super(o, s, n);
    }
  }
  return r.def = o, r;
}
const Na = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Xo extends Na {
  constructor(t, n = {}, o = Br) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Br ? this._root = this.shadowRoot : (de.NODE_ENV !== "production" && this.shadowRoot && Pe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Xo) {
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
    this._connected = !1, Ho(() => {
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
      const { props: i, styles: s } = o;
      let l;
      if (i && !T(i))
        for (const a in i) {
          const h = i[a];
          (h === Number || h && h.type === Number) && (a in this._props && (this._props[a] = rr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[xe(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(s) : de.NODE_ENV !== "production" && s && Pe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    de.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        H(this, o) ? de.NODE_ENV !== "production" && Pe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ke(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = T(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(xe))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(i) {
          this._setProp(r, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : kr;
    const r = xe(t);
    n && this._numberProps && this._numberProps[r] && (o = rr(o)), this._setProp(r, o, !1, !0);
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
    if (n !== this._props[t] && (n === kr ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(we(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(we(t), n + "") : n || this.removeAttribute(we(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ca(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ze(this._def, ne(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, de.NODE_ENV !== "production" && (o.ceReload = (i) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const r = (i, s) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Kn(s[0]) ? ne({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      o.emit = (i, ...s) => {
        r(i, s), we(i) !== i && r(we(i), s);
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
      const i = document.createElement("style");
      if (o && i.setAttribute("nonce", o), i.textContent = t[r], this.shadowRoot.prepend(i), de.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let s = this._childStyles.get(n.__hmrId);
            s || this._childStyles.set(n.__hmrId, s = []), s.push(i);
          }
        } else
          (this._styles || (this._styles = [])).push(i);
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
      const r = t[o], i = r.getAttribute("name") || "default", s = this._slots[i], l = r.parentNode;
      if (s)
        for (const a of s) {
          if (n && a.nodeType === 1) {
            const h = n + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(h, "");
            let f;
            for (; f = d.nextNode(); )
              f.setAttribute(h, "");
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
    if (de.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const Lr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return T(t) ? (n) => Dt(t, n) : t;
};
function va(e) {
  e.target.composing = !0;
}
function Hr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mo = Symbol("_assign"), wa = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[mo] = Lr(r);
    const i = o || r.props && r.props.type === "number";
    Vt(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = _o(l)), e[mo](l);
    }), n && Vt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Vt(e, "compositionstart", va), Vt(e, "compositionend", Hr), Vt(e, "change", Hr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: i } }, s) {
    if (e[mo] = Lr(s), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? _o(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, xa = ["ctrl", "shift", "alt", "meta"], Oa = {
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
  exact: (e, t) => xa.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ur = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const l = Oa[t[s]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  });
}, Da = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Sa = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const i = we(r.key);
    if (t.some(
      (s) => s === i || Da[s] === i
    ))
      return e(r);
  });
}, Va = /* @__PURE__ */ ne({ patchProp: ba }, na);
let Kr;
function us() {
  return Kr || (Kr = wc(Va));
}
const Ca = (...e) => {
  us().render(...e);
}, Br = (...e) => {
  const t = us().createApp(...e);
  de.NODE_ENV !== "production" && (Aa(t), Pa(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Ia(o);
    if (!r) return;
    const i = t._component;
    !I(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const s = n(r, !1, Ta(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), s;
  }, t;
};
function Ta(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Aa(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Rs(t) || $s(t) || Ms(t),
    writable: !1
  });
}
function Pa(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Pe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Pe(o), n;
      },
      set() {
        Pe(o);
      }
    });
  }
}
function Ia(e) {
  if (ee(e)) {
    const t = document.querySelector(e);
    return de.NODE_ENV !== "production" && !t && Pe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return de.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Pe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Ra = {};
function $a() {
  Qc();
}
Ra.NODE_ENV !== "production" && $a();
var ds = "vercel.ai.error", Ma = Symbol.for(ds), ps, ja = class hs extends Error {
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
    super(n), this[ps] = !0, this.name = t, this.cause = o;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return hs.hasMarker(t, ds);
  }
  static hasMarker(t, n) {
    const o = Symbol.for(n);
    return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0;
  }
};
ps = Ma;
var Wr = ja, gs = "AI_InvalidArgumentError", ms = `vercel.ai.error.${gs}`, Fa = Symbol.for(ms), _s, ka = class extends Wr {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: gs, message: e, cause: t }), this[_s] = !0, this.argument = n;
  }
  static isInstance(e) {
    return Wr.hasMarker(e, ms);
  }
};
_s = Fa;
let La = (e, t = 21) => (n = t) => {
  let o = "", r = n | 0;
  for (; r--; )
    o += e[Math.random() * e.length | 0];
  return o;
};
var _n = { exports: {} };
const Ha = typeof Buffer < "u", Gr = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, Jr = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function bs(e, t, n) {
  n == null && t !== null && typeof t == "object" && (n = t, t = void 0), Ha && Buffer.isBuffer(e) && (e = e.toString()), e && e.charCodeAt(0) === 65279 && (e = e.slice(1));
  const o = JSON.parse(e, t);
  if (o === null || typeof o != "object")
    return o;
  const r = n && n.protoAction || "error", i = n && n.constructorAction || "error";
  if (r === "ignore" && i === "ignore")
    return o;
  if (r !== "ignore" && i !== "ignore") {
    if (Gr.test(e) === !1 && Jr.test(e) === !1)
      return o;
  } else if (r !== "ignore" && i === "ignore") {
    if (Gr.test(e) === !1)
      return o;
  } else if (Jr.test(e) === !1)
    return o;
  return ys(o, { protoAction: r, constructorAction: i, safe: n && n.safe });
}
function ys(e, { protoAction: t = "error", constructorAction: n = "error", safe: o } = {}) {
  let r = [e];
  for (; r.length; ) {
    const i = r;
    r = [];
    for (const s of i) {
      if (t !== "ignore" && Object.prototype.hasOwnProperty.call(s, "__proto__")) {
        if (o === !0)
          return null;
        if (t === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete s.__proto__;
      }
      if (n !== "ignore" && Object.prototype.hasOwnProperty.call(s, "constructor") && Object.prototype.hasOwnProperty.call(s.constructor, "prototype")) {
        if (o === !0)
          return null;
        if (n === "error")
          throw new SyntaxError("Object contains forbidden prototype property");
        delete s.constructor;
      }
      for (const l in s) {
        const a = s[l];
        a && typeof a == "object" && r.push(a);
      }
    }
  }
  return e;
}
function Zo(e, t, n) {
  const o = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return bs(e, t, n);
  } finally {
    Error.stackTraceLimit = o;
  }
}
function Ua(e, t) {
  const n = Error.stackTraceLimit;
  Error.stackTraceLimit = 0;
  try {
    return bs(e, t, { safe: !0 });
  } catch {
    return null;
  } finally {
    Error.stackTraceLimit = n;
  }
}
_n.exports = Zo;
_n.exports.default = Zo;
_n.exports.parse = Zo;
_n.exports.safeParse = Ua;
_n.exports.scan = ys;
var Ka = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: o = "-"
} = {}) => {
  const r = La(n, t);
  if (e == null)
    return r;
  if (n.includes(o))
    throw new ka({
      argument: "separator",
      message: `The separator "${o}" must not be part of the alphabet "${n}".`
    });
  return (i) => `${e}${o}${r(i)}`;
}, qr = Ka();
function Ba(e) {
  return e instanceof Error && (e.name === "AbortError" || e.name === "TimeoutError");
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var sn = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, ln = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, cn = {
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
}, an = {
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
}, fn = {
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
}, Wa = [
  sn,
  ln,
  cn,
  an,
  fn
], Ga = {
  [sn.code]: sn,
  [ln.code]: ln,
  [cn.code]: cn,
  [an.code]: an,
  [fn.code]: fn
};
sn.name + "", sn.code, ln.name + "", ln.code, cn.name + "", cn.code, an.name + "", an.code, fn.name + "", fn.code;
var Ja = Wa.map((e) => e.code), qa = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!Ja.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const o = n, r = e.slice(t + 1), i = JSON.parse(r);
  return Ga[o].parse(i);
}, za = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Ya = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Xa = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Za = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Qa = {
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
}, ef = {
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
}, tf = {
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
}, nf = {
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
}, of = {
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
}, rf = {
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
}, sf = {
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
}, lf = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, cf = {
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
}, af = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, ff = {
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
}, uf = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, Qo = [
  za,
  Ya,
  Xa,
  Za,
  Qa,
  ef,
  tf,
  nf,
  of,
  rf,
  sf,
  lf,
  cf,
  af,
  ff,
  uf
];
Object.fromEntries(
  Qo.map((e) => [e.code, e])
);
Object.fromEntries(
  Qo.map((e) => [e.name, e.code])
);
Qo.map((e) => e.code);
var df = 10;
function pf(e, t) {
  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e)
    n.set(r, o), o += r.length;
  return e.length = 0, n;
}
async function hf({
  stream: e,
  onTextPart: t,
  onErrorPart: n,
  onAssistantMessagePart: o,
  onAssistantControlDataPart: r,
  onDataMessagePart: i
}) {
  const s = e.getReader(), l = new TextDecoder(), a = [];
  let h = 0;
  for (; ; ) {
    const { value: d } = await s.read();
    if (d && (a.push(d), h += d.length, d[d.length - 1] !== df))
      continue;
    if (a.length === 0)
      break;
    const f = pf(a, h);
    h = 0;
    const m = l.decode(f, { stream: !0 }).split(`
`).filter((N) => N !== "").map(qa);
    for (const { type: N, value: S } of m)
      switch (N) {
        case "text":
          await t?.(S);
          break;
        case "error":
          await n?.(S);
          break;
        case "assistant_message":
          await o?.(S);
          break;
        case "assistant_control_data":
          await r?.(S);
          break;
        case "data_message":
          await i?.(S);
          break;
        default: {
          const A = N;
          throw new Error(`Unknown stream part type: ${A}`);
        }
      }
  }
}
function gf({
  api: e,
  threadId: t,
  credentials: n,
  headers: o,
  body: r,
  onError: i
}) {
  const s = Te([]), l = Te(""), a = Te(void 0), h = Te("awaiting_message"), d = Te(void 0), f = (R) => {
    s.value = R(s.value);
  }, m = (R) => {
    a.value = R, s.value = [];
  }, N = (R) => {
    var Q;
    l.value = (Q = R?.target) == null ? void 0 : Q.value;
  }, S = rn(() => h.value === "in_progress"), A = Te(null), oe = rn(() => () => {
    A.value && (A.value.abort(), A.value = null);
  }), K = async (R, Q) => {
    var V, te, L, j;
    h.value = "in_progress";
    const z = {
      ...R,
      id: (V = R.id) != null ? V : qr()
    };
    f((re) => [...re, z]), l.value = "";
    const be = new AbortController();
    try {
      A.value = be;
      const re = await fetch(e, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...o
        },
        body: JSON.stringify({
          ...r,
          // Message Content
          message: R.content,
          // Always Use User Provided Thread ID When Available
          threadId: (te = t ?? a.value) != null ? te : null,
          // Optional Request Data
          ...Q?.data && { data: Q?.data }
        }),
        signal: be.signal,
        credentials: n
      });
      if (!re.ok)
        throw new Error(
          (L = re.statusText) != null ? L : "An error occurred while sending the message"
        );
      if (!re.body)
        throw new Error("The response body is empty");
      await hf({
        stream: re.body,
        onAssistantMessagePart(J) {
          s.value = [
            ...s.value,
            {
              id: J.id,
              content: J.content[0].text.value,
              role: J.role,
              parts: []
            }
          ];
        },
        onTextPart(J) {
          f((ce) => {
            const ye = ce[ce.length - 1];
            return ye.content += J, [...ce.slice(0, -1), ye];
          });
        },
        onAssistantControlDataPart(J) {
          J.threadId && (a.value = J.threadId), f((ce) => {
            const ye = ce[ce.length - 1];
            return ye.id = J.messageId, [...ce.slice(0, -1), ye];
          });
        },
        onDataMessagePart(J) {
          f((ce) => {
            var ye;
            return [
              ...ce,
              {
                id: (ye = J.id) != null ? ye : qr(),
                role: "data",
                content: "",
                data: J.data,
                parts: []
              }
            ];
          });
        },
        onErrorPart(J) {
          d.value = new Error(J);
        }
      });
    } catch (re) {
      if (Ba(re) && ((j = A.value) != null && j.signal.aborted)) {
        A.value = null;
        return;
      }
      i && re instanceof Error && i(re), d.value = re;
    } finally {
      A.value = null, h.value = "awaiting_message";
    }
  }, Z = async (R, Q) => {
    var V;
    (V = R?.preventDefault) == null || V.call(R), l.value && K(
      {
        role: "user",
        content: l.value,
        parts: []
      },
      Q
    );
  };
  return {
    append: K,
    messages: s,
    setMessages: f,
    threadId: en(a),
    setThreadId: m,
    input: l,
    handleInputChange: N,
    handleSubmit: Z,
    isSending: S,
    status: h,
    error: d,
    stop: oe
  };
}
function mf(e) {
  const t = Te(!1), n = Te("");
  let o = null, r = [];
  const i = async () => {
    if (!t.value)
      try {
        const a = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        o = new MediaRecorder(a), r = [], o.ondataavailable = (h) => {
          r.push(h.data);
        }, o.onstop = async () => {
          const h = new Blob(r, { type: o?.mimeType });
          await l(h), a.getTracks().forEach((d) => d.stop());
        }, o.start(), t.value = !0, n.value = "";
      } catch (a) {
        n.value = `启动录音失败: ${a.message}`;
      }
  }, s = () => {
    !t.value || !o || (o.stop(), t.value = !1);
  }, l = async (a) => {
    const h = new FormData();
    h.append("audio", a, "recording.webm");
    try {
      const d = await fetch("/api/transcribe", {
        method: "POST",
        body: h
      });
      if (!d.ok) throw new Error("转录请求失败");
      const f = await d.json();
      f.transcript && e(f.transcript);
    } catch (d) {
      n.value = `上传音频失败: ${d.message}`;
    }
  };
  return {
    isRecording: en(t),
    error: en(n),
    start: i,
    stop: s
  };
}
const _f = {
  key: 0,
  class: "chat-panel"
}, bf = {
  key: 0,
  class: "msg-empty"
}, yf = ["src"], Ef = {
  key: 1,
  class: "msg-line msg-ai"
}, Nf = {
  key: 0,
  class: "dice"
}, vf = { key: 1 }, wf = ["onKeydown"], xf = ["disabled"], Of = /* @__PURE__ */ Ai({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, { status: n, messages: o, input: r, handleSubmit: i, error: s } = gf({
      // 将 API 地址指向新的 assistant API
      api: t.apiUrl.replace("/chat", "/assistant")
    }), l = rn(() => n.value === "in_progress"), { isRecording: a, start: h, stop: d } = mf((L) => {
      const j = L.trim();
      if (["发送", "提交", "发出"].includes(j)) {
        i(new Event("submit"));
        return;
      }
      if (["清空", "清除", "删除"].includes(j)) {
        r.value = "";
        return;
      }
      r.value = j;
    }), f = Te(!1), m = zn({ x: 0, y: 0 }), N = Te(null), S = Te(null), A = Te(!1);
    function oe() {
      f.value = !f.value;
    }
    function K() {
      A.value || oe();
    }
    function Z(L) {
      return L.trim().startsWith("<audio");
    }
    function R(L) {
      const j = L.match(/src="([^"]+)"/);
      return j ? j[1] : null;
    }
    const Q = rn(() => {
      if (n.value !== "in_progress") return !1;
      const L = [...o.value].reverse().find((j) => j.role === "user");
      return !!(L && /摇骰子|掷骰子/.test(L.content));
    });
    qt(o, async () => {
      await Ho(), S.value && (S.value.scrollTop = S.value.scrollHeight);
    }, { deep: !0 });
    function V() {
      !r.value.trim() || l.value || i(new Event("submit"));
    }
    qt(s, (L) => {
      L && console.error("[Assistant] An error occurred:", L);
    });
    function te(L) {
      L.preventDefault();
      const j = N.value, z = L.clientX, be = L.clientY, re = m.x, J = m.y;
      let ce = !1;
      function ye(ae) {
        const k = ae.clientX - z, F = ae.clientY - be;
        if (!ce && (Math.abs(k) > 5 || Math.abs(F) > 5) && (ce = !0, A.value = !0), ce) {
          const Ve = Math.min(Math.max(0, re + k), window.innerWidth - j.offsetWidth), It = Math.min(Math.max(0, J + F), window.innerHeight - j.offsetHeight);
          m.x = Ve, m.y = It;
        }
      }
      function Ie() {
        document.removeEventListener("mousemove", ye), document.removeEventListener("mouseup", Ie), setTimeout(() => A.value = !1, 10);
      }
      document.addEventListener("mousemove", ye), document.addEventListener("mouseup", Ie);
    }
    return Ri(() => {
      const L = N.value, j = 20;
      m.x = window.innerWidth - L.offsetWidth - j, m.y = window.innerHeight - L.offsetHeight - j;
    }), (L, j) => (Ce(), Re("div", {
      ref_key: "containerRef",
      ref: N,
      class: "ai-bubble-container",
      style: Gn({ left: m.x + "px", top: m.y + "px" })
    }, [
      st("div", {
        class: "floating-ball",
        onMousedown: te,
        onClick: K
      }, "AI", 32),
      f.value ? (Ce(), Re("div", _f, [
        f.value ? (Ce(), Re("div", {
          key: 0,
          class: "close-btn",
          onClick: oe
        }, "×")) : vn("", !0),
        st("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: S
        }, [
          Ke(o).length === 0 ? (Ce(), Re("div", bf, " 有什么可以帮您的吗？ ")) : vn("", !0),
          (Ce(!0), Re(Ae, null, Yl(Ke(o), (z) => (Ce(), Re("div", {
            key: z.id,
            class: Xt(["msg-line", z.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            Z(z.content) ? (Ce(), Re("audio", {
              key: 0,
              src: R(z.content),
              controls: "",
              autoplay: ""
            }, null, 8, yf)) : (Ce(), Re(Ae, { key: 1 }, [
              rs(ei(z.content), 1)
            ], 64))
          ], 2))), 128)),
          l.value ? (Ce(), Re("div", Ef, [
            Q.value ? (Ce(), Re("span", Nf, "⚀⚂⚅")) : (Ce(), Re("span", vf, "思考中..."))
          ])) : vn("", !0)
        ], 512),
        st("form", {
          onSubmit: Ur(V, ["prevent"]),
          class: "input-area"
        }, [
          Rl(st("textarea", {
            "onUpdate:modelValue": j[0] || (j[0] = (z) => ie(r) ? r.value = z : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: Sa(Ur(V, ["exact", "prevent"]), ["enter"])
          }, null, 40, wf), [
            [wa, Ke(r)]
          ]),
          st("button", {
            type: "button",
            class: Xt(["btn-voice", { listening: Ke(a) }]),
            onClick: j[1] || (j[1] = (z) => Ke(a) ? Ke(d)() : Ke(h)()),
            title: "语音输入"
          }, "🎤", 2),
          st("button", {
            type: "submit",
            class: "btn-send",
            disabled: l.value || !Ke(r).trim()
          }, "➤", 8, xf)
        ], 32)
      ])) : vn("", !0)
    ], 4));
  }
}), Df = ".ai-bubble-container{position:fixed;z-index:9999;font-size:12px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:300px;height:400px;background:#fff;border-radius:8px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:4px 12px;font-size:12px;line-height:1.2;background:#fafafa;outline:none;max-height:60px;overflow-y:auto}.btn-voice,.btn-send{width:32px;height:32px;margin-left:6px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:14px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}", Sf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Vf = /* @__PURE__ */ Sf(Of, [["styles", [Df]]]), Cf = /* @__PURE__ */ Ea(Vf);
customElements.define("ai-chat-bubble", Cf);
