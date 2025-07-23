var Ss = {};
/**
* @vue/shared v3.5.17
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
const Q = Ss.NODE_ENV !== "production" ? Object.freeze({}) : {}, Bt = Ss.NODE_ENV !== "production" ? Object.freeze([]) : [], de = () => {
}, nl = () => !1, Dn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Jn = (e) => e.startsWith("onUpdate:"), le = Object.assign, eo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, rl = Object.prototype.hasOwnProperty, G = (e, t) => rl.call(e, t), P = Array.isArray, Ct = (e) => Sn(e) === "[object Map]", ar = (e) => Sn(e) === "[object Set]", Io = (e) => Sn(e) === "[object Date]", F = (e) => typeof e == "function", se = (e) => typeof e == "string", st = (e) => typeof e == "symbol", ee = (e) => e !== null && typeof e == "object", to = (e) => (ee(e) || F(e)) && F(e.then) && F(e.catch), Is = Object.prototype.toString, Sn = (e) => Is.call(e), no = (e) => Sn(e).slice(8, -1), cr = (e) => Sn(e) === "[object Object]", ro = (e) => se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = /* @__PURE__ */ ft(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ol = /* @__PURE__ */ ft(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ur = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, sl = /-(\w)/g, Pe = ur(
  (e) => e.replace(sl, (t, n) => n ? n.toUpperCase() : "")
), il = /\B([A-Z])/g, Re = ur(
  (e) => e.replace(il, "-$1").toLowerCase()
), fr = ur((e) => e.charAt(0).toUpperCase() + e.slice(1)), Dt = ur(
  (e) => e ? `on${fr(e)}` : ""
), yt = (e, t) => !Object.is(e, t), Ft = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Yn = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Co = (e) => {
  const t = se(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let To;
const In = () => To || (To = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kt(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = se(r) ? ul(r) : Kt(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if (se(e) || ee(e))
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
function Wt(e) {
  let t = "";
  if (se(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const r = Wt(e[n]);
      r && (t += r + " ");
    }
  else if (ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", dl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", pl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", hl = /* @__PURE__ */ ft(fl), gl = /* @__PURE__ */ ft(dl), _l = /* @__PURE__ */ ft(pl), ml = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", yl = /* @__PURE__ */ ft(ml);
function Cs(e) {
  return !!e || e === "";
}
function El(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = dr(e[r], t[r]);
  return n;
}
function dr(e, t) {
  if (e === t) return !0;
  let n = Io(e), r = Io(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = st(e), r = st(t), n || r)
    return e === t;
  if (n = P(e), r = P(t), n || r)
    return n && r ? El(e, t) : !1;
  if (n = ee(e), r = ee(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, s = Object.keys(t).length;
    if (o !== s)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (l && !a || !l && a || !dr(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function bl(e, t) {
  return e.findIndex((n) => dr(n, t));
}
const Ts = (e) => !!(e && e.__v_isRef === !0), rn = (e) => se(e) ? e : e == null ? "" : P(e) || ee(e) && (e.toString === Is || !F(e.toString)) ? Ts(e) ? rn(e.value) : JSON.stringify(e, Vs, 2) : String(e), Vs = (e, t) => Ts(t) ? Vs(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], s) => (n[wr(r, s) + " =>"] = o, n),
    {}
  )
} : ar(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => wr(n))
} : st(t) ? wr(t) : ee(t) && !P(t) && !cr(t) ? String(t) : t, wr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    st(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var ne = {};
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ae;
class vl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
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
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    } else ne.NODE_ENV !== "production" && Ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ae, Ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ae = this.prevScope, this.prevScope = void 0);
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
function Nl() {
  return Ae;
}
let Z;
const Or = /* @__PURE__ */ new WeakSet();
class As {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Or.has(this) && (Or.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ps(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Vo(this), Ms(this);
    const t = Z, n = Be;
    Z = this, Be = !0;
    try {
      return this.fn();
    } finally {
      ne.NODE_ENV !== "production" && Z !== this && Ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ks(this), Z = t, Be = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        io(t);
      this.deps = this.depsTail = void 0, Vo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    $r(this) && this.run();
  }
  get dirty() {
    return $r(this);
  }
}
let Rs = 0, an, cn;
function Ps(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cn, cn = e;
    return;
  }
  e.next = an, an = e;
}
function oo() {
  Rs++;
}
function so() {
  if (--Rs > 0)
    return;
  if (cn) {
    let t = cn;
    for (cn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; an; ) {
    let t = an;
    for (an = void 0; t; ) {
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
function Ms(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ks(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), io(r), wl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function $r(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && ($s(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function $s(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !$r(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, r = Be;
  Z = e, Be = !0;
  try {
    Ms(e);
    const o = e.fn(e._value);
    (t.version === 0 || yt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Z = n, Be = r, ks(e), e.flags &= -3;
  }
}
function io(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), ne.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      io(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function wl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Be = !0;
const js = [];
function We() {
  js.push(Be), Be = !1;
}
function Je() {
  const e = js.pop();
  Be = e === void 0 ? !0 : e;
}
function Vo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Z;
    Z = void 0;
    try {
      t();
    } finally {
      Z = n;
    }
  }
}
let gn = 0;
class Ol {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, ne.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Z || !Be || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new Ol(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, Fs(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = r);
    }
    return ne.NODE_ENV !== "production" && Z.onTrack && Z.onTrack(
      le(
        {
          effect: Z
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    oo();
    try {
      if (ne.NODE_ENV !== "production")
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
      so();
    }
  }
}
function Fs(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Fs(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), ne.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const qn = /* @__PURE__ */ new WeakMap(), Tt = Symbol(
  ne.NODE_ENV !== "production" ? "Object iterate" : ""
), jr = Symbol(
  ne.NODE_ENV !== "production" ? "Map keys iterate" : ""
), _n = Symbol(
  ne.NODE_ENV !== "production" ? "Array iterate" : ""
);
function fe(e, t, n) {
  if (Be && Z) {
    let r = qn.get(e);
    r || qn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new lo()), o.map = r, o.key = n), ne.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function et(e, t, n, r, o, s) {
  const i = qn.get(e);
  if (!i) {
    gn++;
    return;
  }
  const l = (a) => {
    a && (ne.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: s
    }) : a.trigger());
  };
  if (oo(), t === "clear")
    i.forEach(l);
  else {
    const a = P(e), u = a && ro(n);
    if (a && n === "length") {
      const d = Number(r);
      i.forEach((f, g) => {
        (g === "length" || g === _n || !st(g) && g >= d) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), u && l(i.get(_n)), t) {
        case "add":
          a ? u && l(i.get("length")) : (l(i.get(Tt)), Ct(e) && l(i.get(jr)));
          break;
        case "delete":
          a || (l(i.get(Tt)), Ct(e) && l(i.get(jr)));
          break;
        case "set":
          Ct(e) && l(i.get(Tt));
          break;
      }
  }
  so();
}
function xl(e, t) {
  const n = qn.get(e);
  return n && n.get(t);
}
function kt(e) {
  const t = W(e);
  return t === e ? t : (fe(t, "iterate", _n), Se(e) ? t : t.map(me));
}
function pr(e) {
  return fe(e = W(e), "iterate", _n), e;
}
const Dl = {
  __proto__: null,
  [Symbol.iterator]() {
    return xr(this, Symbol.iterator, me);
  },
  concat(...e) {
    return kt(this).concat(
      ...e.map((t) => P(t) ? kt(t) : t)
    );
  },
  entries() {
    return xr(this, "entries", (e) => (e[1] = me(e[1]), e));
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
    return Dr(this, "includes", e);
  },
  indexOf(...e) {
    return Dr(this, "indexOf", e);
  },
  join(e) {
    return kt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Dr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return lt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...e) {
    return Qt(this, "push", e);
  },
  reduce(e, ...t) {
    return Ao(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ao(this, "reduceRight", e, t);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return lt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qt(this, "splice", e);
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
    return Qt(this, "unshift", e);
  },
  values() {
    return xr(this, "values", me);
  }
};
function xr(e, t, n) {
  const r = pr(e), o = r[t]();
  return r !== e && !Se(e) && (o._next = o.next, o.next = () => {
    const s = o._next();
    return s.value && (s.value = n(s.value)), s;
  }), o;
}
const Sl = Array.prototype;
function lt(e, t, n, r, o, s) {
  const i = pr(e), l = i !== e && !Se(e), a = i[t];
  if (a !== Sl[t]) {
    const f = a.apply(e, s);
    return l ? me(f) : f;
  }
  let u = n;
  i !== e && (l ? u = function(f, g) {
    return n.call(this, me(f), g, e);
  } : n.length > 2 && (u = function(f, g) {
    return n.call(this, f, g, e);
  }));
  const d = a.call(i, u, r);
  return l && o ? o(d) : d;
}
function Ao(e, t, n, r) {
  const o = pr(e);
  let s = n;
  return o !== e && (Se(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, me(l), a, e);
  }), o[t](s, ...r);
}
function Dr(e, t, n) {
  const r = W(e);
  fe(r, "iterate", _n);
  const o = r[t](...n);
  return (o === -1 || o === !1) && mn(n[0]) ? (n[0] = W(n[0]), r[t](...n)) : o;
}
function Qt(e, t, n = []) {
  We(), oo();
  const r = W(e)[t].apply(e, n);
  return so(), Je(), r;
}
const Il = /* @__PURE__ */ ft("__proto__,__v_isRef,__isVue"), Ls = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(st)
);
function Cl(e) {
  st(e) || (e = String(e));
  const t = W(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Hs {
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
      return r === (o ? s ? Ys : Js : s ? Ws : Ks).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = P(t);
    if (!o) {
      let a;
      if (i && (a = Dl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Cl;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(t) ? t : r
    );
    return (st(n) ? Ls.has(n) : Il(n)) || (o || fe(t, "get", n), s) ? l : ce(l) ? i && ro(n) ? l : l.value : ee(l) ? o ? Gn(l) : Gt(l) : l;
  }
}
class Us extends Hs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Ye(s);
      if (!Se(r) && !Ye(r) && (s = W(s), r = W(r)), !P(t) && ce(s) && !ce(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = P(t) && ro(n) ? Number(n) < t.length : G(t, n), l = Reflect.set(
      t,
      n,
      r,
      ce(t) ? t : o
    );
    return t === W(o) && (i ? yt(r, s) && et(t, "set", n, r, s) : et(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = G(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && et(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!st(n) || !Ls.has(n)) && fe(t, "has", n), r;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      P(t) ? "length" : Tt
    ), Reflect.ownKeys(t);
  }
}
class Bs extends Hs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ne.NODE_ENV !== "production" && Ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ne.NODE_ENV !== "production" && Ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Tl = /* @__PURE__ */ new Us(), Vl = /* @__PURE__ */ new Bs(), Al = /* @__PURE__ */ new Us(!0), Rl = /* @__PURE__ */ new Bs(!0), Fr = (e) => e, Pn = (e) => Reflect.getPrototypeOf(e);
function Pl(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = W(o), i = Ct(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = o[e](...r), d = n ? Fr : t ? zn : me;
    return !t && fe(
      s,
      "iterate",
      a ? jr : Tt
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
function Mn(e) {
  return function(...t) {
    if (ne.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ke(
        `${fr(e)} operation ${n}failed: target is readonly.`,
        W(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ml(e, t) {
  const n = {
    get(o) {
      const s = this.__v_raw, i = W(s), l = W(o);
      e || (yt(o, l) && fe(i, "get", o), fe(i, "get", l));
      const { has: a } = Pn(i), u = t ? Fr : e ? zn : me;
      if (a.call(i, o))
        return u(s.get(o));
      if (a.call(i, l))
        return u(s.get(l));
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
      const i = this, l = i.__v_raw, a = W(l), u = t ? Fr : e ? zn : me;
      return !e && fe(a, "iterate", Tt), l.forEach((d, f) => o.call(s, u(d), u(f), i));
    }
  };
  return le(
    n,
    e ? {
      add: Mn("add"),
      set: Mn("set"),
      delete: Mn("delete"),
      clear: Mn("clear")
    } : {
      add(o) {
        !t && !Se(o) && !Ye(o) && (o = W(o));
        const s = W(this);
        return Pn(s).has.call(s, o) || (s.add(o), et(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !Se(s) && !Ye(s) && (s = W(s));
        const i = W(this), { has: l, get: a } = Pn(i);
        let u = l.call(i, o);
        u ? ne.NODE_ENV !== "production" && Ro(i, l, o) : (o = W(o), u = l.call(i, o));
        const d = a.call(i, o);
        return i.set(o, s), u ? yt(s, d) && et(i, "set", o, s, d) : et(i, "add", o, s), this;
      },
      delete(o) {
        const s = W(this), { has: i, get: l } = Pn(s);
        let a = i.call(s, o);
        a ? ne.NODE_ENV !== "production" && Ro(s, i, o) : (o = W(o), a = i.call(s, o));
        const u = l ? l.call(s, o) : void 0, d = s.delete(o);
        return a && et(s, "delete", o, void 0, u), d;
      },
      clear() {
        const o = W(this), s = o.size !== 0, i = ne.NODE_ENV !== "production" ? Ct(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return s && et(
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
    n[o] = Pl(o, e, t);
  }), n;
}
function hr(e, t) {
  const n = Ml(e, t);
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    G(n, o) && o in r ? n : r,
    o,
    s
  );
}
const kl = {
  get: /* @__PURE__ */ hr(!1, !1)
}, $l = {
  get: /* @__PURE__ */ hr(!1, !0)
}, jl = {
  get: /* @__PURE__ */ hr(!0, !1)
}, Fl = {
  get: /* @__PURE__ */ hr(!0, !0)
};
function Ro(e, t, n) {
  const r = W(n);
  if (r !== n && t.call(e, r)) {
    const o = no(e);
    Ke(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ks = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap(), Ys = /* @__PURE__ */ new WeakMap();
function Ll(e) {
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
function Hl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ll(no(e));
}
function Gt(e) {
  return Ye(e) ? e : gr(
    e,
    !1,
    Tl,
    kl,
    Ks
  );
}
function Ul(e) {
  return gr(
    e,
    !1,
    Al,
    $l,
    Ws
  );
}
function Gn(e) {
  return gr(
    e,
    !0,
    Vl,
    jl,
    Js
  );
}
function nt(e) {
  return gr(
    e,
    !0,
    Rl,
    Fl,
    Ys
  );
}
function gr(e, t, n, r, o) {
  if (!ee(e))
    return ne.NODE_ENV !== "production" && Ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Hl(e);
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
  return Ye(e) ? Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function mn(e) {
  return e ? !!e.__v_raw : !1;
}
function W(e) {
  const t = e && e.__v_raw;
  return t ? W(t) : e;
}
function Bl(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && hn(e, "__v_skip", !0), e;
}
const me = (e) => ee(e) ? Gt(e) : e, zn = (e) => ee(e) ? Gn(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function He(e) {
  return Kl(e, !1);
}
function Kl(e, t) {
  return ce(e) ? e : new Wl(e, t);
}
class Wl {
  constructor(t, n) {
    this.dep = new lo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : W(t), this._value = n ? t : me(t), this.__v_isShallow = n;
  }
  get value() {
    return ne.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || Se(t) || Ye(t);
    t = r ? t : W(t), yt(t, n) && (this._rawValue = t, this._value = r ? t : me(t), ne.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function be(e) {
  return ce(e) ? e.value : e;
}
const Jl = {
  get: (e, t, n) => t === "__v_raw" ? e : be(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return ce(o) && !ce(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function qs(e) {
  return Vt(e) ? e : new Proxy(e, Jl);
}
function Yl(e) {
  ne.NODE_ENV !== "production" && !mn(e) && Ke("toRefs() expects a reactive object but received a plain one.");
  const t = P(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Gl(e, n);
  return t;
}
class ql {
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
    return xl(W(this._object), this._key);
  }
}
function Gl(e, t, n) {
  const r = e[t];
  return ce(r) ? r : new ql(e, t, n);
}
class zl {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new lo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return Ps(this, !0), !0;
  }
  get value() {
    const t = ne.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return $s(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ne.NODE_ENV !== "production" && Ke("Write operation failed: computed value is readonly");
  }
}
function Xl(e, t, n = !1) {
  let r, o;
  return F(e) ? r = e : (r = e.get, o = e.set), new zl(r, o, n);
}
const kn = {}, Xn = /* @__PURE__ */ new WeakMap();
let St;
function Zl(e, t = !1, n = St) {
  if (n) {
    let r = Xn.get(n);
    r || Xn.set(n, r = []), r.push(e);
  } else ne.NODE_ENV !== "production" && !t && Ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ql(e, t, n = Q) {
  const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: l, call: a } = n, u = (O) => {
    (n.onWarn || Ke)(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (O) => o ? O : Se(O) || o === !1 || o === 0 ? ut(O, 1) : ut(O);
  let f, g, _, I, R = !1, Y = !1;
  if (ce(e) ? (g = () => e.value, R = Se(e)) : Vt(e) ? (g = () => d(e), R = !0) : P(e) ? (Y = !0, R = e.some((O) => Vt(O) || Se(O)), g = () => e.map((O) => {
    if (ce(O))
      return O.value;
    if (Vt(O))
      return d(O);
    if (F(O))
      return a ? a(O, 2) : O();
    ne.NODE_ENV !== "production" && u(O);
  })) : F(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (_) {
      We();
      try {
        _();
      } finally {
        Je();
      }
    }
    const O = St;
    St = f;
    try {
      return a ? a(e, 3, [I]) : e(I);
    } finally {
      St = O;
    }
  } : (g = de, ne.NODE_ENV !== "production" && u(e)), t && o) {
    const O = g, y = o === !0 ? 1 / 0 : o;
    g = () => ut(O(), y);
  }
  const L = Nl(), j = () => {
    f.stop(), L && L.active && eo(L.effects, f);
  };
  if (s && t) {
    const O = t;
    t = (...y) => {
      O(...y), j();
    };
  }
  let A = Y ? new Array(e.length).fill(kn) : kn;
  const B = (O) => {
    if (!(!(f.flags & 1) || !f.dirty && !O))
      if (t) {
        const y = f.run();
        if (o || R || (Y ? y.some((E, D) => yt(E, A[D])) : yt(y, A))) {
          _ && _();
          const E = St;
          St = f;
          try {
            const D = [
              y,
              // pass undefined as the old value when it's changed for the first time
              A === kn ? void 0 : Y && A[0] === kn ? [] : A,
              I
            ];
            A = y, a ? a(t, 3, D) : (
              // @ts-expect-error
              t(...D)
            );
          } finally {
            St = E;
          }
        }
      } else
        f.run();
  };
  return l && l(B), f = new As(g), f.scheduler = i ? () => i(B, !1) : B, I = (O) => Zl(O, !1, f), _ = f.onStop = () => {
    const O = Xn.get(f);
    if (O) {
      if (a)
        a(O, 4);
      else
        for (const y of O) y();
      Xn.delete(f);
    }
  }, ne.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? r ? B(!0) : A = f.run() : i ? i(B.bind(null, !0), !0) : f.run(), j.pause = f.pause.bind(f), j.resume = f.resume.bind(f), j.stop = j, j;
}
function ut(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ce(e))
    ut(e.value, t, n);
  else if (P(e))
    for (let r = 0; r < e.length; r++)
      ut(e[r], t, n);
  else if (ar(e) || Ct(e))
    e.forEach((r) => {
      ut(r, t, n);
    });
  else if (cr(e)) {
    for (const r in e)
      ut(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ut(e[r], t, n);
  }
  return e;
}
var h = {};
const At = [];
function jn(e) {
  At.push(e);
}
function Fn() {
  At.pop();
}
let Sr = !1;
function C(e, ...t) {
  if (Sr) return;
  Sr = !0, We();
  const n = At.length ? At[At.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = ea();
  if (r)
    Xt(
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
          ({ vnode: s }) => `at <${Nr(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...ta(o)), console.warn(...s);
  }
  Je(), Sr = !1;
}
function ea() {
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
function ta(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...na(n));
  }), t;
}
function na({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Nr(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...ra(e.props), s] : [o + s];
}
function ra(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Gs(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Gs(e, t, n) {
  return se(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ce(t) ? (t = Gs(e, W(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : F(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = W(t), n ? t : [`${e}=`, t]);
}
const ao = {
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
function Xt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Cn(o, t, n);
  }
}
function it(e, t, n, r) {
  if (F(e)) {
    const o = Xt(e, t, n, r);
    return o && to(o) && o.catch((s) => {
      Cn(s, t, n);
    }), o;
  }
  if (P(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(it(e[s], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && C(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Cn(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = h.NODE_ENV !== "production" ? ao[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      We(), Xt(s, null, 10, [
        e,
        a,
        u
      ]), Je();
      return;
    }
  }
  oa(e, n, o, r, i);
}
function oa(e, t, n, r = !0, o = !1) {
  if (h.NODE_ENV !== "production") {
    const s = ao[t];
    if (n && jn(n), C(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Fn(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const xe = [];
let Qe = -1;
const Jt = [];
let gt = null, Lt = 0;
const zs = /* @__PURE__ */ Promise.resolve();
let Zn = null;
const sa = 100;
function _r(e) {
  const t = Zn || zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ia(e) {
  let t = Qe + 1, n = xe.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = xe[r], s = yn(o);
    s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function mr(e) {
  if (!(e.flags & 1)) {
    const t = yn(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= yn(n) ? xe.push(e) : xe.splice(ia(t), 0, e), e.flags |= 1, Xs();
  }
}
function Xs() {
  Zn || (Zn = zs.then(ei));
}
function Zs(e) {
  P(e) ? Jt.push(...e) : gt && e.id === -1 ? gt.splice(Lt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), Xs();
}
function Po(e, t, n = Qe + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < xe.length; n++) {
    const r = xe[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && co(t, r))
        continue;
      xe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Qs(e) {
  if (Jt.length) {
    const t = [...new Set(Jt)].sort(
      (n, r) => yn(n) - yn(r)
    );
    if (Jt.length = 0, gt) {
      gt.push(...t);
      return;
    }
    for (gt = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < gt.length; Lt++) {
      const n = gt[Lt];
      h.NODE_ENV !== "production" && co(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    gt = null, Lt = 0;
  }
}
const yn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ei(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => co(e, n) : de;
  try {
    for (Qe = 0; Qe < xe.length; Qe++) {
      const n = xe[Qe];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Xt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Qe < xe.length; Qe++) {
      const n = xe[Qe];
      n && (n.flags &= -2);
    }
    Qe = -1, xe.length = 0, Qs(e), Zn = null, (xe.length || Jt.length) && ei(e);
  }
}
function co(e, t) {
  const n = e.get(t) || 0;
  if (n > sa) {
    const r = t.i, o = r && Mi(r.type);
    return Cn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let rt = !1;
const Ln = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (In().__VUE_HMR_RUNTIME__ = {
  createRecord: Ir(ti),
  rerender: Ir(ca),
  reload: Ir(ua)
});
const Pt = /* @__PURE__ */ new Map();
function la(e) {
  const t = e.type.__hmrId;
  let n = Pt.get(t);
  n || (ti(t, e.type), n = Pt.get(t)), n.instances.add(e);
}
function aa(e) {
  Pt.get(e.type.__hmrId).instances.delete(e);
}
function ti(e, t) {
  return Pt.has(e) ? !1 : (Pt.set(e, {
    initialDef: Qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Qn(e) {
  return ki(e) ? e.__vccOpts : e;
}
function ca(e, t) {
  const n = Pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Qn(r.type).render = t), r.renderCache = [], rt = !0, r.update(), rt = !1;
  }));
}
function ua(e, t) {
  const n = Pt.get(e);
  if (!n) return;
  t = Qn(t), Mo(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = Qn(s.type);
    let l = Ln.get(i);
    l || (i !== n.initialDef && Mo(i, t), Ln.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? mr(() => {
      rt = !0, s.parent.update(), rt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Zs(() => {
    Ln.clear();
  });
}
function Mo(e, t) {
  le(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ir(e) {
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
let tt, on = [], Lr = !1;
function Tn(e, ...t) {
  tt ? tt.emit(e, ...t) : Lr || on.push({ event: e, args: t });
}
function ni(e, t) {
  var n, r;
  tt = e, tt ? (tt.enabled = !0, on.forEach(({ event: o, args: s }) => tt.emit(o, ...s)), on = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ni(s, t);
  }), setTimeout(() => {
    tt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Lr = !0, on = []);
  }, 3e3)) : (Lr = !0, on = []);
}
function fa(e, t) {
  Tn("app:init", e, t, {
    Fragment: De,
    Text: Vn,
    Comment: je,
    Static: Bn
  });
}
function da(e) {
  Tn("app:unmount", e);
}
const pa = /* @__PURE__ */ uo(
  "component:added"
  /* COMPONENT_ADDED */
), ri = /* @__PURE__ */ uo(
  "component:updated"
  /* COMPONENT_UPDATED */
), ha = /* @__PURE__ */ uo(
  "component:removed"
  /* COMPONENT_REMOVED */
), ga = (e) => {
  tt && typeof tt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !tt.cleanupBuffer(e) && ha(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function uo(e) {
  return (t) => {
    Tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const _a = /* @__PURE__ */ oi(
  "perf:start"
  /* PERFORMANCE_START */
), ma = /* @__PURE__ */ oi(
  "perf:end"
  /* PERFORMANCE_END */
);
function oi(e) {
  return (t, n, r) => {
    Tn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function ya(e, t, n) {
  Tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ve = null, si = null;
function er(e) {
  const t = ve;
  return ve = e, si = e && e.type.__scopeId || null, t;
}
function Ea(e, t = ve, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && qo(-1);
    const s = er(t);
    let i;
    try {
      i = e(...o);
    } finally {
      er(s), r._d && qo(1);
    }
    return h.NODE_ENV !== "production" && ri(t), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ii(e) {
  ol(e) && C("Do not use built-in directive ids as custom directive id: " + e);
}
function ko(e, t) {
  if (ve === null)
    return h.NODE_ENV !== "production" && C("withDirectives can only be used inside render functions."), e;
  const n = vr(ve), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = Q] = t[o];
    s && (F(s) && (s = {
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
    a && (We(), it(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Je());
  }
}
const ba = Symbol("_vte"), va = (e) => e.__isTeleport;
function fo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, fo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function li(e, t) {
  return F(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function ai(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Na = /* @__PURE__ */ new WeakSet();
function un(e, t, n, r, o = !1) {
  if (P(e)) {
    e.forEach(
      (I, R) => un(
        I,
        t && (P(t) ? t[R] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (fn(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && un(e, t, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? vr(r.component) : r.el, i = o ? null : s, { i: l, r: a } = e;
  if (h.NODE_ENV !== "production" && !l) {
    C(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, d = l.refs === Q ? l.refs = {} : l.refs, f = l.setupState, g = W(f), _ = f === Q ? () => !1 : (I) => h.NODE_ENV !== "production" && (G(g, I) && !ce(g[I]) && C(
    `Template ref "${I}" used on a non-ref value. It will not work in the production build.`
  ), Na.has(g[I])) ? !1 : G(g, I);
  if (u != null && u !== a && (se(u) ? (d[u] = null, _(u) && (f[u] = null)) : ce(u) && (u.value = null)), F(a))
    Xt(a, l, 12, [i, d]);
  else {
    const I = se(a), R = ce(a);
    if (I || R) {
      const Y = () => {
        if (e.f) {
          const L = I ? _(a) ? f[a] : d[a] : a.value;
          o ? P(L) && eo(L, s) : P(L) ? L.includes(s) || L.push(s) : I ? (d[a] = [s], _(a) && (f[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else I ? (d[a] = i, _(a) && (f[a] = i)) : R ? (a.value = i, e.k && (d[e.k] = i)) : h.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (Y.id = -1, ke(Y, n)) : Y();
    } else h.NODE_ENV !== "production" && C("Invalid template ref type:", a, `(${typeof a})`);
  }
}
In().requestIdleCallback;
In().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader, po = (e) => e.type.__isKeepAlive;
function wa(e, t) {
  ci(e, "a", t);
}
function Oa(e, t) {
  ci(e, "da", t);
}
function ci(e, t, n = pe) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (yr(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      po(o.parent.vnode) && xa(r, t, n, o), o = o.parent;
  }
}
function xa(e, t, n, r) {
  const o = yr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  go(() => {
    eo(r[t], o);
  }, n);
}
function yr(e, t, n = pe, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      We();
      const l = An(n), a = it(t, n, e, i);
      return l(), Je(), a;
    });
    return r ? o.unshift(s) : o.push(s), s;
  } else if (h.NODE_ENV !== "production") {
    const o = Dt(ao[e].replace(/ hook$/, ""));
    C(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const dt = (e) => (t, n = pe) => {
  (!bn || e === "sp") && yr(e, (...r) => t(...r), n);
}, Da = dt("bm"), ho = dt("m"), Sa = dt(
  "bu"
), Ia = dt("u"), Ca = dt(
  "bum"
), go = dt("um"), Ta = dt(
  "sp"
), Va = dt("rtg"), Aa = dt("rtc");
function Ra(e, t = pe) {
  yr("ec", e, t);
}
const Pa = Symbol.for("v-ndc");
function Cr(e, t, n, r) {
  let o;
  const s = n, i = P(e);
  if (i || se(e)) {
    const l = i && Vt(e);
    let a = !1, u = !1;
    l && (a = !Se(e), u = Ye(e), e = pr(e)), o = new Array(e.length);
    for (let d = 0, f = e.length; d < f; d++)
      o[d] = t(
        a ? u ? zn(me(e[d])) : me(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && C(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
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
const Hr = (e) => e ? Ri(e) ? vr(e) : Hr(e.parent) : null, Rt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? nt(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? nt(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? nt(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? nt(e.refs) : e.refs,
    $parent: (e) => Hr(e.parent),
    $root: (e) => Hr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => di(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      mr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = _r.bind(e.proxy)),
    $watch: (e) => pc.bind(e)
  })
), _o = (e) => e === "_" || e === "$", Tr = (e, t) => e !== Q && !e.__isScriptSetup && G(e, t), ui = {
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
        if (Tr(r, t))
          return i[t] = 1, r[t];
        if (o !== Q && G(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && G(u, t)
        )
          return i[t] = 3, s[t];
        if (n !== Q && G(n, t))
          return i[t] = 4, n[t];
        Ur && (i[t] = 0);
      }
    }
    const d = Rt[t];
    let f, g;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), h.NODE_ENV !== "production" && rr()) : h.NODE_ENV !== "production" && t === "$slots" && fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== Q && G(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, G(g, t)
    )
      return g[t];
    h.NODE_ENV !== "production" && ve && (!se(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== Q && _o(t[0]) && G(o, t) ? C(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ve && C(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Tr(o, t) ? (o[t] = n, !0) : h.NODE_ENV !== "production" && o.__isScriptSetup && G(o, t) ? (C(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== Q && G(r, t) ? (r[t] = n, !0) : G(e.props, t) ? (h.NODE_ENV !== "production" && C(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && C(
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
    return !!n[i] || e !== Q && G(e, i) || Tr(t, i) || (l = s[0]) && G(l, i) || G(r, i) || G(Rt, i) || G(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : G(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (ui.ownKeys = (e) => (C(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ma(e) {
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
      set: de
    });
  });
}
function $a(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(W(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (_o(r[0])) {
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
function $o(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ja() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? C(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Ur = !0;
function Fa(e) {
  const t = di(e), n = e.proxy, r = e.ctx;
  Ur = !1, t.beforeCreate && jo(t.beforeCreate, e, "bc");
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
    activated: R,
    deactivated: Y,
    beforeDestroy: L,
    beforeUnmount: j,
    destroyed: A,
    unmounted: B,
    render: O,
    renderTracked: y,
    renderTriggered: E,
    errorCaptured: D,
    serverPrefetch: k,
    // public API
    expose: X,
    inheritAttrs: he,
    // assets
    components: oe,
    directives: ie,
    filters: Ne
  } = t, Ie = h.NODE_ENV !== "production" ? ja() : null;
  if (h.NODE_ENV !== "production") {
    const [K] = e.propsOptions;
    if (K)
      for (const q in K)
        Ie("Props", q);
  }
  if (u && La(u, r, Ie), i)
    for (const K in i) {
      const q = i[K];
      F(q) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, K, {
        value: q.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[K] = q.bind(n), h.NODE_ENV !== "production" && Ie("Methods", K)) : h.NODE_ENV !== "production" && C(
        `Method "${K}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !F(o) && C(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const K = o.call(n, n);
    if (h.NODE_ENV !== "production" && to(K) && C(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ee(K))
      h.NODE_ENV !== "production" && C("data() should return an object.");
    else if (e.data = Gt(K), h.NODE_ENV !== "production")
      for (const q in K)
        Ie("Data", q), _o(q[0]) || Object.defineProperty(r, q, {
          configurable: !0,
          enumerable: !0,
          get: () => K[q],
          set: de
        });
  }
  if (Ur = !0, s)
    for (const K in s) {
      const q = s[K], Le = F(q) ? q.bind(n, n) : F(q.get) ? q.get.bind(n, n) : de;
      h.NODE_ENV !== "production" && Le === de && C(`Computed property "${K}" has no getter.`);
      const bt = !F(q) && F(q.set) ? q.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        C(
          `Write operation failed: computed property "${K}" is readonly.`
        );
      } : de, vt = vo({
        get: Le,
        set: bt
      });
      Object.defineProperty(r, K, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (pt) => vt.value = pt
      }), h.NODE_ENV !== "production" && Ie("Computed", K);
    }
  if (l)
    for (const K in l)
      fi(l[K], r, n, K);
  if (a) {
    const K = F(a) ? a.call(n) : a;
    Reflect.ownKeys(K).forEach((q) => {
      Ja(q, K[q]);
    });
  }
  d && jo(d, e, "c");
  function ue(K, q) {
    P(q) ? q.forEach((Le) => K(Le.bind(n))) : q && K(q.bind(n));
  }
  if (ue(Da, f), ue(ho, g), ue(Sa, _), ue(Ia, I), ue(wa, R), ue(Oa, Y), ue(Ra, D), ue(Aa, y), ue(Va, E), ue(Ca, j), ue(go, B), ue(Ta, k), P(X))
    if (X.length) {
      const K = e.exposed || (e.exposed = {});
      X.forEach((q) => {
        Object.defineProperty(K, q, {
          get: () => n[q],
          set: (Le) => n[q] = Le
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === de && (e.render = O), he != null && (e.inheritAttrs = he), oe && (e.components = oe), ie && (e.directives = ie), k && ai(e);
}
function La(e, t, n = de) {
  P(e) && (e = Br(e));
  for (const r in e) {
    const o = e[r];
    let s;
    ee(o) ? "default" in o ? s = Hn(
      o.from || r,
      o.default,
      !0
    ) : s = Hn(o.from || r) : s = Hn(o), ce(s) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[r] = s, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function jo(e, t, n) {
  it(
    P(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fi(e, t, n, r) {
  let o = r.includes(".") ? Oi(n, r) : () => n[r];
  if (se(e)) {
    const s = t[e];
    F(s) ? dn(o, s) : h.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e}"`, s);
  } else if (F(e))
    dn(o, e.bind(n));
  else if (ee(e))
    if (P(e))
      e.forEach((s) => fi(s, t, n, r));
    else {
      const s = F(e.handler) ? e.handler.bind(n) : t[e.handler];
      F(s) ? dn(o, s, e) : h.NODE_ENV !== "production" && C(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else h.NODE_ENV !== "production" && C(`Invalid watch option: "${r}"`, e);
}
function di(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (u) => tr(a, u, i, !0)
  ), tr(a, t, i)), ee(t) && s.set(t, a), a;
}
function tr(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && tr(e, s, n, !0), o && o.forEach(
    (i) => tr(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      h.NODE_ENV !== "production" && C(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Ha[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Ha = {
  data: Fo,
  props: Lo,
  emits: Lo,
  // objects
  methods: sn,
  computed: sn,
  // lifecycle
  beforeCreate: Oe,
  created: Oe,
  beforeMount: Oe,
  mounted: Oe,
  beforeUpdate: Oe,
  updated: Oe,
  beforeDestroy: Oe,
  beforeUnmount: Oe,
  destroyed: Oe,
  unmounted: Oe,
  activated: Oe,
  deactivated: Oe,
  errorCaptured: Oe,
  serverPrefetch: Oe,
  // assets
  components: sn,
  directives: sn,
  // watch
  watch: Ba,
  // provide / inject
  provide: Fo,
  inject: Ua
};
function Fo(e, t) {
  return t ? e ? function() {
    return le(
      F(e) ? e.call(this, this) : e,
      F(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ua(e, t) {
  return sn(Br(e), Br(t));
}
function Br(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sn(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lo(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    $o(e),
    $o(t ?? {})
  ) : t;
}
function Ba(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = le(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Oe(e[r], t[r]);
  return n;
}
function pi() {
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
    F(r) || (r = le({}, r)), o != null && !ee(o) && (h.NODE_ENV !== "production" && C("root props passed to app.mount() must be an object."), o = null);
    const s = pi(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = s.app = {
      _uid: Ka++,
      _component: r,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Zo,
      get config() {
        return s.config;
      },
      set config(d) {
        h.NODE_ENV !== "production" && C(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return i.has(d) ? h.NODE_ENV !== "production" && C("Plugin has already been applied to target app.") : d && F(d.install) ? (i.add(d), d.install(u, ...f)) : F(d) ? (i.add(d), d(u, ...f)) : h.NODE_ENV !== "production" && C(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(d) {
        return s.mixins.includes(d) ? h.NODE_ENV !== "production" && C(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), u;
      },
      component(d, f) {
        return h.NODE_ENV !== "production" && qr(d, s.config), f ? (h.NODE_ENV !== "production" && s.components[d] && C(`Component "${d}" has already been registered in target app.`), s.components[d] = f, u) : s.components[d];
      },
      directive(d, f) {
        return h.NODE_ENV !== "production" && ii(d), f ? (h.NODE_ENV !== "production" && s.directives[d] && C(`Directive "${d}" has already been registered in target app.`), s.directives[d] = f, u) : s.directives[d];
      },
      mount(d, f, g) {
        if (a)
          h.NODE_ENV !== "production" && C(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && d.__vue_app__ && C(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = u._ceVNode || ot(r, o);
          return _.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), h.NODE_ENV !== "production" && (s.reload = () => {
            const I = Et(_);
            I.el = null, e(I, d, g);
          }), e(_, d, g), a = !0, u._container = d, d.__vue_app__ = u, h.NODE_ENV !== "production" && (u._instance = _.component, fa(u, Zo)), vr(_.component);
        }
      },
      onUnmount(d) {
        h.NODE_ENV !== "production" && typeof d != "function" && C(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (it(
          l,
          u._instance,
          16
        ), e(null, u._container), h.NODE_ENV !== "production" && (u._instance = null, da(u)), delete u._container.__vue_app__) : h.NODE_ENV !== "production" && C("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return h.NODE_ENV !== "production" && d in s.provides && (G(s.provides, d) ? C(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : C(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = f, u;
      },
      runWithContext(d) {
        const f = Yt;
        Yt = u;
        try {
          return d();
        } finally {
          Yt = f;
        }
      }
    };
    return u;
  };
}
let Yt = null;
function Ja(e, t) {
  if (!pe)
    h.NODE_ENV !== "production" && C("provide() can only be used inside setup().");
  else {
    let n = pe.provides;
    const r = pe.parent && pe.parent.provides;
    r === n && (n = pe.provides = Object.create(r)), n[e] = t;
  }
}
function Hn(e, t, n = !1) {
  const r = pe || ve;
  if (r || Yt) {
    let o = Yt ? Yt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && F(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && C(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && C("inject() can only be used inside setup() or functional components.");
}
const hi = {}, gi = () => Object.create(hi), _i = (e) => Object.getPrototypeOf(e) === hi;
function Ya(e, t, n, r = !1) {
  const o = {}, s = gi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mi(e, t, o, s);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  h.NODE_ENV !== "production" && Ei(t || {}, o, e), n ? e.props = r ? o : Ul(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
}
function qa(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ga(e, t, n, r) {
  const {
    props: o,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = W(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && qa(e)) && (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let g = d[f];
        if (Er(e.emitsOptions, g))
          continue;
        const _ = t[g];
        if (a)
          if (G(s, g))
            _ !== s[g] && (s[g] = _, u = !0);
          else {
            const I = Pe(g);
            o[I] = Kr(
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
    mi(e, t, o, s) && (u = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !G(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Re(f)) === f || !G(t, d))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[d] !== void 0) && (o[f] = Kr(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (s !== l)
      for (const f in s)
        (!t || !G(t, f)) && (delete s[f], u = !0);
  }
  u && et(e.attrs, "set", ""), h.NODE_ENV !== "production" && Ei(t || {}, o, e);
}
function mi(e, t, n, r) {
  const [o, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (ln(a))
        continue;
      const u = t[a];
      let d;
      o && G(o, d = Pe(a)) ? !s || !s.includes(d) ? n[d] = u : (l || (l = {}))[d] = u : Er(e.emitsOptions, a) || (!(a in r) || u !== r[a]) && (r[a] = u, i = !0);
    }
  if (s) {
    const a = W(n), u = l || Q;
    for (let d = 0; d < s.length; d++) {
      const f = s[d];
      n[f] = Kr(
        o,
        a,
        f,
        u[f],
        e,
        !G(u, f)
      );
    }
  }
  return i;
}
function Kr(e, t, n, r, o, s) {
  const i = e[n];
  if (i != null) {
    const l = G(i, "default");
    if (l && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && F(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          r = u[n];
        else {
          const d = An(o);
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
    ] && (r === "" || r === Re(n)) && (r = !0));
  }
  return r;
}
const za = /* @__PURE__ */ new WeakMap();
function yi(e, t, n = !1) {
  const r = n ? za : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!F(e)) {
    const d = (f) => {
      a = !0;
      const [g, _] = yi(f, t, !0);
      le(i, g), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return ee(e) && r.set(e, Bt), Bt;
  if (P(s))
    for (let d = 0; d < s.length; d++) {
      h.NODE_ENV !== "production" && !se(s[d]) && C("props must be strings when using array syntax.", s[d]);
      const f = Pe(s[d]);
      Ho(f) && (i[f] = Q);
    }
  else if (s) {
    h.NODE_ENV !== "production" && !ee(s) && C("invalid props options", s);
    for (const d in s) {
      const f = Pe(d);
      if (Ho(f)) {
        const g = s[d], _ = i[f] = P(g) || F(g) ? { type: g } : le({}, g), I = _.type;
        let R = !1, Y = !0;
        if (P(I))
          for (let L = 0; L < I.length; ++L) {
            const j = I[L], A = F(j) && j.name;
            if (A === "Boolean") {
              R = !0;
              break;
            } else A === "String" && (Y = !1);
          }
        else
          R = F(I) && I.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = R, _[
          1
          /* shouldCastTrue */
        ] = Y, (R || G(_, "default")) && l.push(f);
      }
    }
  }
  const u = [i, l];
  return ee(e) && r.set(e, u), u;
}
function Ho(e) {
  return e[0] !== "$" && !ln(e) ? !0 : (h.NODE_ENV !== "production" && C(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Xa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ei(e, t, n) {
  const r = W(t), o = n.propsOptions[0], s = Object.keys(e).map((i) => Pe(i));
  for (const i in o) {
    let l = o[i];
    l != null && Za(
      i,
      r[i],
      l,
      h.NODE_ENV !== "production" ? nt(r) : r,
      !s.includes(i)
    );
  }
}
function Za(e, t, n, r, o) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    C('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let u = !1;
      const d = P(s) ? s : [s], f = [];
      for (let g = 0; g < d.length && !u; g++) {
        const { valid: _, expectedType: I } = ec(t, d[g]);
        f.push(I || ""), u = _;
      }
      if (!u) {
        C(tc(e, t, f));
        return;
      }
    }
    l && !l(t, r) && C('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Qa = /* @__PURE__ */ ft(
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
  } else r === "Object" ? n = ee(e) : r === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function tc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(fr).join(" | ")}`;
  const o = n[0], s = no(t), i = Uo(t, o), l = Uo(t, s);
  return n.length === 1 && Bo(o) && !nc(o, s) && (r += ` with value ${i}`), r += `, got ${s} `, Bo(s) && (r += `with value ${l}.`), r;
}
function Uo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Bo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function nc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const mo = (e) => e[0] === "_" || e === "$stable", yo = (e) => P(e) ? e.map(Ue) : [Ue(e)], rc = (e, t, n) => {
  if (t._n)
    return t;
  const r = Ea((...o) => (h.NODE_ENV !== "production" && pe && !(n === null && ve) && !(n && n.root !== pe.root) && C(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), yo(t(...o))), n);
  return r._c = !1, r;
}, bi = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (mo(o)) continue;
    const s = e[o];
    if (F(s))
      t[o] = rc(o, s, r);
    else if (s != null) {
      h.NODE_ENV !== "production" && C(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = yo(s);
      t[o] = () => i;
    }
  }
}, vi = (e, t) => {
  h.NODE_ENV !== "production" && !po(e.vnode) && C(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = yo(t);
  e.slots.default = () => n;
}, Wr = (e, t, n) => {
  for (const r in t)
    (n || !mo(r)) && (e[r] = t[r]);
}, oc = (e, t, n) => {
  const r = e.slots = gi();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && hn(r, "__", o, !0);
    const s = t._;
    s ? (Wr(r, t, n), n && hn(r, "_", s, !0)) : bi(t, r);
  } else t && vi(e, t);
}, sc = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let s = !0, i = Q;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && rt ? (Wr(o, t, n), et(e, "set", "$slots")) : n && l === 1 ? s = !1 : Wr(o, t, n) : (s = !t.$stable, bi(t, o)), i = t;
  } else t && (vi(e, t), i = { default: 1 });
  if (s)
    for (const l in o)
      !mo(l) && i[l] == null && delete o[l];
};
let en, mt;
function $t(e, t) {
  e.appContext.config.performance && nr() && mt.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && _a(e, t, nr() ? mt.now() : Date.now());
}
function jt(e, t) {
  if (e.appContext.config.performance && nr()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end";
    mt.mark(r), mt.measure(
      `<${Nr(e, e.type)}> ${t}`,
      n,
      r
    ), mt.clearMarks(n), mt.clearMarks(r);
  }
  h.NODE_ENV !== "production" && ma(e, t, nr() ? mt.now() : Date.now());
}
function nr() {
  return en !== void 0 || (typeof window < "u" && window.performance ? (en = !0, mt = window.performance) : en = !1), en;
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
const ke = bc;
function lc(e) {
  return ac(e);
}
function ac(e, t) {
  ic();
  const n = In();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && ni(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
  } = e, R = (c, p, m, N = null, b = null, v = null, T = void 0, S = null, x = h.NODE_ENV !== "production" && rt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !tn(c, p) && (N = qe(c), J(c, b, v, !0), c = null), p.patchFlag === -2 && (x = !1, p.dynamicChildren = null);
    const { type: w, ref: $, shapeFlag: V } = p;
    switch (w) {
      case Vn:
        Y(c, p, m, N);
        break;
      case je:
        L(c, p, m, N);
        break;
      case Bn:
        c == null ? j(p, m, N, T) : h.NODE_ENV !== "production" && A(c, p, m, T);
        break;
      case De:
        ie(
          c,
          p,
          m,
          N,
          b,
          v,
          T,
          S,
          x
        );
        break;
      default:
        V & 1 ? y(
          c,
          p,
          m,
          N,
          b,
          v,
          T,
          S,
          x
        ) : V & 6 ? Ne(
          c,
          p,
          m,
          N,
          b,
          v,
          T,
          S,
          x
        ) : V & 64 || V & 128 ? w.process(
          c,
          p,
          m,
          N,
          b,
          v,
          T,
          S,
          x,
          Nt
        ) : h.NODE_ENV !== "production" && C("Invalid VNode type:", w, `(${typeof w})`);
    }
    $ != null && b ? un($, c && c.ref, v, p || c, !p) : $ == null && c && c.ref != null && un(c.ref, null, v, c, !0);
  }, Y = (c, p, m, N) => {
    if (c == null)
      r(
        p.el = l(p.children),
        m,
        N
      );
    else {
      const b = p.el = c.el;
      p.children !== c.children && u(b, p.children);
    }
  }, L = (c, p, m, N) => {
    c == null ? r(
      p.el = a(p.children || ""),
      m,
      N
    ) : p.el = c.el;
  }, j = (c, p, m, N) => {
    [c.el, c.anchor] = I(
      c.children,
      p,
      m,
      N,
      c.el,
      c.anchor
    );
  }, A = (c, p, m, N) => {
    if (p.children !== c.children) {
      const b = g(c.anchor);
      O(c), [p.el, p.anchor] = I(
        p.children,
        m,
        b,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, B = ({ el: c, anchor: p }, m, N) => {
    let b;
    for (; c && c !== p; )
      b = g(c), r(c, m, N), c = b;
    r(p, m, N);
  }, O = ({ el: c, anchor: p }) => {
    let m;
    for (; c && c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, y = (c, p, m, N, b, v, T, S, x) => {
    p.type === "svg" ? T = "svg" : p.type === "math" && (T = "mathml"), c == null ? E(
      p,
      m,
      N,
      b,
      v,
      T,
      S,
      x
    ) : X(
      c,
      p,
      b,
      v,
      T,
      S,
      x
    );
  }, E = (c, p, m, N, b, v, T, S) => {
    let x, w;
    const { props: $, shapeFlag: V, transition: M, dirs: H } = c;
    if (x = c.el = i(
      c.type,
      v,
      $ && $.is,
      $
    ), V & 8 ? d(x, c.children) : V & 16 && k(
      c.children,
      x,
      null,
      N,
      b,
      Vr(c, v),
      T,
      S
    ), H && wt(c, null, N, "created"), D(x, c, c.scopeId, T, N), $) {
      for (const re in $)
        re !== "value" && !ln(re) && s(x, re, null, $[re], v, N);
      "value" in $ && s(x, "value", null, $.value, v), (w = $.onVnodeBeforeMount) && Ze(w, N, c);
    }
    h.NODE_ENV !== "production" && (hn(x, "__vnode", c, !0), hn(x, "__vueParentComponent", N, !0)), H && wt(c, null, N, "beforeMount");
    const z = cc(b, M);
    z && M.beforeEnter(x), r(x, p, m), ((w = $ && $.onVnodeMounted) || z || H) && ke(() => {
      w && Ze(w, N, c), z && M.enter(x), H && wt(c, null, N, "mounted");
    }, b);
  }, D = (c, p, m, N, b) => {
    if (m && _(c, m), N)
      for (let v = 0; v < N.length; v++)
        _(c, N[v]);
    if (b) {
      let v = b.subTree;
      if (h.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Eo(v.children) || v), p === v || Si(v.type) && (v.ssContent === p || v.ssFallback === p)) {
        const T = b.vnode;
        D(
          c,
          T,
          T.scopeId,
          T.slotScopeIds,
          b.parent
        );
      }
    }
  }, k = (c, p, m, N, b, v, T, S, x = 0) => {
    for (let w = x; w < c.length; w++) {
      const $ = c[w] = S ? _t(c[w]) : Ue(c[w]);
      R(
        null,
        $,
        p,
        m,
        N,
        b,
        v,
        T,
        S
      );
    }
  }, X = (c, p, m, N, b, v, T) => {
    const S = p.el = c.el;
    h.NODE_ENV !== "production" && (S.__vnode = p);
    let { patchFlag: x, dynamicChildren: w, dirs: $ } = p;
    x |= c.patchFlag & 16;
    const V = c.props || Q, M = p.props || Q;
    let H;
    if (m && Ot(m, !1), (H = M.onVnodeBeforeUpdate) && Ze(H, m, p, c), $ && wt(p, c, m, "beforeUpdate"), m && Ot(m, !0), h.NODE_ENV !== "production" && rt && (x = 0, T = !1, w = null), (V.innerHTML && M.innerHTML == null || V.textContent && M.textContent == null) && d(S, ""), w ? (he(
      c.dynamicChildren,
      w,
      S,
      m,
      N,
      Vr(p, b),
      v
    ), h.NODE_ENV !== "production" && Un(c, p)) : T || Le(
      c,
      p,
      S,
      null,
      m,
      N,
      Vr(p, b),
      v,
      !1
    ), x > 0) {
      if (x & 16)
        oe(S, V, M, m, b);
      else if (x & 2 && V.class !== M.class && s(S, "class", null, M.class, b), x & 4 && s(S, "style", V.style, M.style, b), x & 8) {
        const z = p.dynamicProps;
        for (let re = 0; re < z.length; re++) {
          const te = z[re], Te = V[te], Ve = M[te];
          (Ve !== Te || te === "value") && s(S, te, Te, Ve, b, m);
        }
      }
      x & 1 && c.children !== p.children && d(S, p.children);
    } else !T && w == null && oe(S, V, M, m, b);
    ((H = M.onVnodeUpdated) || $) && ke(() => {
      H && Ze(H, m, p, c), $ && wt(p, c, m, "updated");
    }, N);
  }, he = (c, p, m, N, b, v, T) => {
    for (let S = 0; S < p.length; S++) {
      const x = c[S], w = p[S], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        x.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (x.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tn(x, w) || // - In the case of a component, it could contain anything.
        x.shapeFlag & 198) ? f(x.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      R(
        x,
        w,
        $,
        null,
        N,
        b,
        v,
        T,
        !0
      );
    }
  }, oe = (c, p, m, N, b) => {
    if (p !== m) {
      if (p !== Q)
        for (const v in p)
          !ln(v) && !(v in m) && s(
            c,
            v,
            p[v],
            null,
            b,
            N
          );
      for (const v in m) {
        if (ln(v)) continue;
        const T = m[v], S = p[v];
        T !== S && v !== "value" && s(c, v, S, T, b, N);
      }
      "value" in m && s(c, "value", p.value, m.value, b);
    }
  }, ie = (c, p, m, N, b, v, T, S, x) => {
    const w = p.el = c ? c.el : l(""), $ = p.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: M, slotScopeIds: H } = p;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (rt || V & 2048) && (V = 0, x = !1, M = null), H && (S = S ? S.concat(H) : H), c == null ? (r(w, m, N), r($, m, N), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      m,
      $,
      b,
      v,
      T,
      S,
      x
    )) : V > 0 && V & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (he(
      c.dynamicChildren,
      M,
      m,
      b,
      v,
      T,
      S
    ), h.NODE_ENV !== "production" ? Un(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || b && p === b.subTree) && Un(
        c,
        p,
        !0
        /* shallow */
      )
    )) : Le(
      c,
      p,
      m,
      $,
      b,
      v,
      T,
      S,
      x
    );
  }, Ne = (c, p, m, N, b, v, T, S, x) => {
    p.slotScopeIds = S, c == null ? p.shapeFlag & 512 ? b.ctx.activate(
      p,
      m,
      N,
      T,
      x
    ) : Ie(
      p,
      m,
      N,
      b,
      v,
      T,
      x
    ) : ue(c, p, x);
  }, Ie = (c, p, m, N, b, v, T) => {
    const S = c.component = Cc(
      c,
      N,
      b
    );
    if (h.NODE_ENV !== "production" && S.type.__hmrId && la(S), h.NODE_ENV !== "production" && (jn(c), $t(S, "mount")), po(c) && (S.ctx.renderer = Nt), h.NODE_ENV !== "production" && $t(S, "init"), Vc(S, !1, T), h.NODE_ENV !== "production" && jt(S, "init"), h.NODE_ENV !== "production" && rt && (c.el = null), S.asyncDep) {
      if (b && b.registerDep(S, K, T), !c.el) {
        const x = S.subTree = ot(je);
        L(null, x, p, m);
      }
    } else
      K(
        S,
        c,
        p,
        m,
        b,
        v,
        T
      );
    h.NODE_ENV !== "production" && (Fn(), jt(S, "mount"));
  }, ue = (c, p, m) => {
    const N = p.component = c.component;
    if (yc(c, p, m))
      if (N.asyncDep && !N.asyncResolved) {
        h.NODE_ENV !== "production" && jn(p), q(N, p, m), h.NODE_ENV !== "production" && Fn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, K = (c, p, m, N, b, v, T) => {
    const S = () => {
      if (c.isMounted) {
        let { next: V, bu: M, u: H, parent: z, vnode: re } = c;
        {
          const ze = Ni(c);
          if (ze) {
            V && (V.el = re.el, q(c, V, T)), ze.asyncDep.then(() => {
              c.isUnmounted || S();
            });
            return;
          }
        }
        let te = V, Te;
        h.NODE_ENV !== "production" && jn(V || c.vnode), Ot(c, !1), V ? (V.el = re.el, q(c, V, T)) : V = re, M && Ft(M), (Te = V.props && V.props.onVnodeBeforeUpdate) && Ze(Te, z, V, re), Ot(c, !0), h.NODE_ENV !== "production" && $t(c, "render");
        const Ve = Wo(c);
        h.NODE_ENV !== "production" && jt(c, "render");
        const Ge = c.subTree;
        c.subTree = Ve, h.NODE_ENV !== "production" && $t(c, "patch"), R(
          Ge,
          Ve,
          // parent may have changed if it's in a teleport
          f(Ge.el),
          // anchor may have changed if it's in a fragment
          qe(Ge),
          c,
          b,
          v
        ), h.NODE_ENV !== "production" && jt(c, "patch"), V.el = Ve.el, te === null && Ec(c, Ve.el), H && ke(H, b), (Te = V.props && V.props.onVnodeUpdated) && ke(
          () => Ze(Te, z, V, re),
          b
        ), h.NODE_ENV !== "production" && ri(c), h.NODE_ENV !== "production" && Fn();
      } else {
        let V;
        const { el: M, props: H } = p, { bm: z, m: re, parent: te, root: Te, type: Ve } = c, Ge = fn(p);
        Ot(c, !1), z && Ft(z), !Ge && (V = H && H.onVnodeBeforeMount) && Ze(V, te, p), Ot(c, !0);
        {
          Te.ce && // @ts-expect-error _def is private
          Te.ce._def.shadowRoot !== !1 && Te.ce._injectChildStyle(Ve), h.NODE_ENV !== "production" && $t(c, "render");
          const ze = c.subTree = Wo(c);
          h.NODE_ENV !== "production" && jt(c, "render"), h.NODE_ENV !== "production" && $t(c, "patch"), R(
            null,
            ze,
            m,
            N,
            c,
            b,
            v
          ), h.NODE_ENV !== "production" && jt(c, "patch"), p.el = ze.el;
        }
        if (re && ke(re, b), !Ge && (V = H && H.onVnodeMounted)) {
          const ze = p;
          ke(
            () => Ze(V, te, ze),
            b
          );
        }
        (p.shapeFlag & 256 || te && fn(te.vnode) && te.vnode.shapeFlag & 256) && c.a && ke(c.a, b), c.isMounted = !0, h.NODE_ENV !== "production" && pa(c), p = m = N = null;
      }
    };
    c.scope.on();
    const x = c.effect = new As(S);
    c.scope.off();
    const w = c.update = x.run.bind(x), $ = c.job = x.runIfDirty.bind(x);
    $.i = c, $.id = c.uid, x.scheduler = () => mr($), Ot(c, !0), h.NODE_ENV !== "production" && (x.onTrack = c.rtc ? (V) => Ft(c.rtc, V) : void 0, x.onTrigger = c.rtg ? (V) => Ft(c.rtg, V) : void 0), w();
  }, q = (c, p, m) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Ga(c, p.props, N, m), sc(c, p.children, m), We(), Po(c), Je();
  }, Le = (c, p, m, N, b, v, T, S, x = !1) => {
    const w = c && c.children, $ = c ? c.shapeFlag : 0, V = p.children, { patchFlag: M, shapeFlag: H } = p;
    if (M > 0) {
      if (M & 128) {
        vt(
          w,
          V,
          m,
          N,
          b,
          v,
          T,
          S,
          x
        );
        return;
      } else if (M & 256) {
        bt(
          w,
          V,
          m,
          N,
          b,
          v,
          T,
          S,
          x
        );
        return;
      }
    }
    H & 8 ? ($ & 16 && Ce(w, b, v), V !== w && d(m, V)) : $ & 16 ? H & 16 ? vt(
      w,
      V,
      m,
      N,
      b,
      v,
      T,
      S,
      x
    ) : Ce(w, b, v, !0) : ($ & 8 && d(m, ""), H & 16 && k(
      V,
      m,
      N,
      b,
      v,
      T,
      S,
      x
    ));
  }, bt = (c, p, m, N, b, v, T, S, x) => {
    c = c || Bt, p = p || Bt;
    const w = c.length, $ = p.length, V = Math.min(w, $);
    let M;
    for (M = 0; M < V; M++) {
      const H = p[M] = x ? _t(p[M]) : Ue(p[M]);
      R(
        c[M],
        H,
        m,
        null,
        b,
        v,
        T,
        S,
        x
      );
    }
    w > $ ? Ce(
      c,
      b,
      v,
      !0,
      !1,
      V
    ) : k(
      p,
      m,
      N,
      b,
      v,
      T,
      S,
      x,
      V
    );
  }, vt = (c, p, m, N, b, v, T, S, x) => {
    let w = 0;
    const $ = p.length;
    let V = c.length - 1, M = $ - 1;
    for (; w <= V && w <= M; ) {
      const H = c[w], z = p[w] = x ? _t(p[w]) : Ue(p[w]);
      if (tn(H, z))
        R(
          H,
          z,
          m,
          null,
          b,
          v,
          T,
          S,
          x
        );
      else
        break;
      w++;
    }
    for (; w <= V && w <= M; ) {
      const H = c[V], z = p[M] = x ? _t(p[M]) : Ue(p[M]);
      if (tn(H, z))
        R(
          H,
          z,
          m,
          null,
          b,
          v,
          T,
          S,
          x
        );
      else
        break;
      V--, M--;
    }
    if (w > V) {
      if (w <= M) {
        const H = M + 1, z = H < $ ? p[H].el : N;
        for (; w <= M; )
          R(
            null,
            p[w] = x ? _t(p[w]) : Ue(p[w]),
            m,
            z,
            b,
            v,
            T,
            S,
            x
          ), w++;
      }
    } else if (w > M)
      for (; w <= V; )
        J(c[w], b, v, !0), w++;
    else {
      const H = w, z = w, re = /* @__PURE__ */ new Map();
      for (w = z; w <= M; w++) {
        const we = p[w] = x ? _t(p[w]) : Ue(p[w]);
        we.key != null && (h.NODE_ENV !== "production" && re.has(we.key) && C(
          "Duplicate keys found during update:",
          JSON.stringify(we.key),
          "Make sure keys are unique."
        ), re.set(we.key, w));
      }
      let te, Te = 0;
      const Ve = M - z + 1;
      let Ge = !1, ze = 0;
      const Zt = new Array(Ve);
      for (w = 0; w < Ve; w++) Zt[w] = 0;
      for (w = H; w <= V; w++) {
        const we = c[w];
        if (Te >= Ve) {
          J(we, b, v, !0);
          continue;
        }
        let Xe;
        if (we.key != null)
          Xe = re.get(we.key);
        else
          for (te = z; te <= M; te++)
            if (Zt[te - z] === 0 && tn(we, p[te])) {
              Xe = te;
              break;
            }
        Xe === void 0 ? J(we, b, v, !0) : (Zt[Xe - z] = w + 1, Xe >= ze ? ze = Xe : Ge = !0, R(
          we,
          p[Xe],
          m,
          null,
          b,
          v,
          T,
          S,
          x
        ), Te++);
      }
      const Do = Ge ? uc(Zt) : Bt;
      for (te = Do.length - 1, w = Ve - 1; w >= 0; w--) {
        const we = z + w, Xe = p[we], So = we + 1 < $ ? p[we + 1].el : N;
        Zt[w] === 0 ? R(
          null,
          Xe,
          m,
          So,
          b,
          v,
          T,
          S,
          x
        ) : Ge && (te < 0 || w !== Do[te] ? pt(Xe, m, So, 2) : te--);
      }
    }
  }, pt = (c, p, m, N, b = null) => {
    const { el: v, type: T, transition: S, children: x, shapeFlag: w } = c;
    if (w & 6) {
      pt(c.component.subTree, p, m, N);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, m, N);
      return;
    }
    if (w & 64) {
      T.move(c, p, m, Nt);
      return;
    }
    if (T === De) {
      r(v, p, m);
      for (let V = 0; V < x.length; V++)
        pt(x[V], p, m, N);
      r(c.anchor, p, m);
      return;
    }
    if (T === Bn) {
      B(c, p, m);
      return;
    }
    if (N !== 2 && w & 1 && S)
      if (N === 0)
        S.beforeEnter(v), r(v, p, m), ke(() => S.enter(v), b);
      else {
        const { leave: V, delayLeave: M, afterLeave: H } = S, z = () => {
          c.ctx.isUnmounted ? o(v) : r(v, p, m);
        }, re = () => {
          V(v, () => {
            z(), H && H();
          });
        };
        M ? M(v, z, re) : re();
      }
    else
      r(v, p, m);
  }, J = (c, p, m, N = !1, b = !1) => {
    const {
      type: v,
      props: T,
      ref: S,
      children: x,
      dynamicChildren: w,
      shapeFlag: $,
      patchFlag: V,
      dirs: M,
      cacheIndex: H
    } = c;
    if (V === -2 && (b = !1), S != null && (We(), un(S, null, m, c, !0), Je()), H != null && (p.renderCache[H] = void 0), $ & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const z = $ & 1 && M, re = !fn(c);
    let te;
    if (re && (te = T && T.onVnodeBeforeUnmount) && Ze(te, p, c), $ & 6)
      Me(c.component, m, N);
    else {
      if ($ & 128) {
        c.suspense.unmount(m, N);
        return;
      }
      z && wt(c, null, p, "beforeUnmount"), $ & 64 ? c.type.remove(
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
      (v !== De || V > 0 && V & 64) ? Ce(
        w,
        p,
        m,
        !1,
        !0
      ) : (v === De && V & 384 || !b && $ & 16) && Ce(x, p, m), N && ae(c);
    }
    (re && (te = T && T.onVnodeUnmounted) || z) && ke(() => {
      te && Ze(te, p, c), z && wt(c, null, p, "unmounted");
    }, m);
  }, ae = (c) => {
    const { type: p, el: m, anchor: N, transition: b } = c;
    if (p === De) {
      h.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((T) => {
        T.type === je ? o(T.el) : ae(T);
      }) : ye(m, N);
      return;
    }
    if (p === Bn) {
      O(c);
      return;
    }
    const v = () => {
      o(m), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: T, delayLeave: S } = b, x = () => T(m, v);
      S ? S(c.el, v, x) : x();
    } else
      v();
  }, ye = (c, p) => {
    let m;
    for (; c !== p; )
      m = g(c), o(c), c = m;
    o(p);
  }, Me = (c, p, m) => {
    h.NODE_ENV !== "production" && c.type.__hmrId && aa(c);
    const {
      bum: N,
      scope: b,
      job: v,
      subTree: T,
      um: S,
      m: x,
      a: w,
      parent: $,
      slots: { __: V }
    } = c;
    Ko(x), Ko(w), N && Ft(N), $ && P(V) && V.forEach((M) => {
      $.renderCache[M] = void 0;
    }), b.stop(), v && (v.flags |= 8, J(T, c, p, m)), S && ke(S, p), ke(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), h.NODE_ENV !== "production" && ga(c);
  }, Ce = (c, p, m, N = !1, b = !1, v = 0) => {
    for (let T = v; T < c.length; T++)
      J(c[T], p, m, N, b);
  }, qe = (c) => {
    if (c.shapeFlag & 6)
      return qe(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = g(c.anchor || c.el), m = p && p[ba];
    return m ? g(m) : p;
  };
  let Mt = !1;
  const Rn = (c, p, m) => {
    c == null ? p._vnode && J(p._vnode, null, null, !0) : R(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      m
    ), p._vnode = c, Mt || (Mt = !0, Po(), Qs(), Mt = !1);
  }, Nt = {
    p: R,
    um: J,
    m: pt,
    r: ae,
    mt: Ie,
    mc: k,
    pc: Le,
    pbc: he,
    n: qe,
    o: e
  };
  return {
    render: Rn,
    hydrate: void 0,
    createApp: Wa(Rn)
  };
}
function Vr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Un(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (P(r) && P(o))
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let l = o[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[s] = _t(o[s]), l.el = i.el), !n && l.patchFlag !== -2 && Un(i, l)), l.type === Vn && (l.el = i.el), l.type === je && !l.el && (l.el = i.el), h.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function uc(e) {
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
function Ni(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ni(t);
}
function Ko(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const fc = Symbol.for("v-scx"), dc = () => {
  {
    const e = Hn(fc);
    return e || h.NODE_ENV !== "production" && C(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function dn(e, t, n) {
  return h.NODE_ENV !== "production" && !F(t) && C(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), wi(e, t, n);
}
function wi(e, t, n = Q) {
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
  let u;
  if (bn) {
    if (s === "sync") {
      const _ = dc();
      u = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!a) {
      const _ = () => {
      };
      return _.stop = de, _.resume = de, _.pause = de, _;
    }
  }
  const d = pe;
  l.call = (_, I, R) => it(_, d, I, R);
  let f = !1;
  s === "post" ? l.scheduler = (_) => {
    ke(_, d && d.suspense);
  } : s !== "sync" && (f = !0, l.scheduler = (_, I) => {
    I ? _() : mr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), f && (_.flags |= 2, d && (_.id = d.uid, _.i = d));
  };
  const g = Ql(e, t, l);
  return bn && (u ? u.push(g) : a && g()), g;
}
function pc(e, t, n) {
  const r = this.proxy, o = se(e) ? e.includes(".") ? Oi(r, e) : () => r[e] : e.bind(r, r);
  let s;
  F(t) ? s = t : (s = t.handler, n = t);
  const i = An(this), l = wi(o, s.bind(r), n);
  return i(), l;
}
function Oi(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const hc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pe(t)}Modifiers`] || e[`${Re(t)}Modifiers`];
function gc(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Q;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(Dt(Pe(t)) in f)) && C(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Dt(Pe(t))}" prop.`
        );
      else {
        const g = d[t];
        F(g) && (g(...n) || C(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const s = t.startsWith("update:"), i = s && hc(r, t.slice(7));
  if (i && (i.trim && (o = n.map((d) => se(d) ? d.trim() : d)), i.number && (o = n.map(Yn))), h.NODE_ENV !== "production" && ya(e, t, o), h.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && r[Dt(d)] && C(
      `Event "${d}" is emitted in component ${Nr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Re(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = r[l = Dt(t)] || // also try camelCase event handler (#2249)
  r[l = Dt(Pe(t))];
  !a && s && (a = r[l = Dt(Re(t))]), a && it(
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
    e.emitted[l] = !0, it(
      u,
      e,
      6,
      o
    );
  }
}
function xi(e, t, n = !1) {
  const r = t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const s = e.emits;
  let i = {}, l = !1;
  if (!F(e)) {
    const a = (u) => {
      const d = xi(u, t, !0);
      d && (l = !0, le(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ee(e) && r.set(e, null), null) : (P(s) ? s.forEach((a) => i[a] = null) : le(i, s), ee(e) && r.set(e, i), i);
}
function Er(e, t) {
  return !e || !Dn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Re(t)) || G(e, t));
}
let Jr = !1;
function rr() {
  Jr = !0;
}
function Wo(e) {
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
    inheritAttrs: R
  } = e, Y = er(e);
  let L, j;
  h.NODE_ENV !== "production" && (Jr = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = o || r, y = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy(O, {
        get(E, D, k) {
          return C(
            `Property '${String(
              D
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(E, D, k);
        }
      }) : O;
      L = Ue(
        u.call(
          y,
          O,
          d,
          h.NODE_ENV !== "production" ? nt(f) : f,
          _,
          g,
          I
        )
      ), j = l;
    } else {
      const O = t;
      h.NODE_ENV !== "production" && l === f && rr(), L = Ue(
        O.length > 1 ? O(
          h.NODE_ENV !== "production" ? nt(f) : f,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return rr(), nt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : O(
          h.NODE_ENV !== "production" ? nt(f) : f,
          null
        )
      ), j = t.props ? l : _c(l);
    }
  } catch (O) {
    pn.length = 0, Cn(O, e, 1), L = ot(je);
  }
  let A = L, B;
  if (h.NODE_ENV !== "production" && L.patchFlag > 0 && L.patchFlag & 2048 && ([A, B] = Di(L)), j && R !== !1) {
    const O = Object.keys(j), { shapeFlag: y } = A;
    if (O.length) {
      if (y & 7)
        s && O.some(Jn) && (j = mc(
          j,
          s
        )), A = Et(A, j, !1, !0);
      else if (h.NODE_ENV !== "production" && !Jr && A.type !== je) {
        const E = Object.keys(l), D = [], k = [];
        for (let X = 0, he = E.length; X < he; X++) {
          const oe = E[X];
          Dn(oe) ? Jn(oe) || D.push(oe[2].toLowerCase() + oe.slice(3)) : k.push(oe);
        }
        k.length && C(
          `Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), D.length && C(
          `Extraneous non-emits event listeners (${D.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Jo(A) && C(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), A = Et(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Jo(A) && C(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), fo(A, n.transition)), h.NODE_ENV !== "production" && B ? B(A) : L = A, er(Y), L;
}
const Di = (e) => {
  const t = e.children, n = e.dynamicChildren, r = Eo(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return Di(r);
  } else return [e, void 0];
  const o = t.indexOf(r), s = n ? n.indexOf(r) : -1, i = (l) => {
    t[o] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ue(r), i];
};
function Eo(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (br(o)) {
      if (o.type !== je || o.children === "v-if") {
        if (n)
          return;
        if (n = o, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Eo(n.children);
      }
    } else
      return;
  }
  return n;
}
const _c = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Dn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, mc = (e, t) => {
  const n = {};
  for (const r in e)
    (!Jn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Jo = (e) => e.shapeFlag & 7 || e.type === je;
function yc(e, t, n) {
  const { props: r, children: o, component: s } = e, { props: i, children: l, patchFlag: a } = t, u = s.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || l) && rt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? Yo(r, i, u) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        if (i[g] !== r[g] && !Er(u, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === i ? !1 : r ? i ? Yo(r, i, u) : !0 : !!i;
  return !1;
}
function Yo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !Er(n, s))
      return !0;
  }
  return !1;
}
function Ec({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Si = (e) => e.__isSuspense;
function bc(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Zs(e);
}
const De = Symbol.for("v-fgt"), Vn = Symbol.for("v-txt"), je = Symbol.for("v-cmt"), Bn = Symbol.for("v-stc"), pn = [];
let $e = null;
function ge(e = !1) {
  pn.push($e = e ? null : []);
}
function vc() {
  pn.pop(), $e = pn[pn.length - 1] || null;
}
let En = 1;
function qo(e, t = !1) {
  En += e, e < 0 && $e && t && ($e.hasOnce = !0);
}
function Ii(e) {
  return e.dynamicChildren = En > 0 ? $e || Bt : null, vc(), En > 0 && $e && $e.push(e), e;
}
function Ee(e, t, n, r, o, s) {
  return Ii(
    U(
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
  return Ii(
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
function br(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tn(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Ln.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const wc = (...e) => Ti(
  ...e
), Ci = ({ key: e }) => e ?? null, Kn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? se(e) || ce(e) || F(e) ? { i: ve, r: e, k: t, f: !!n } : e : null);
function U(e, t = null, n = null, r = 0, o = null, s = e === De ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ci(t),
    ref: t && Kn(t),
    scopeId: si,
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
  return l ? (bo(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= se(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && C("VNode created with invalid key (NaN). VNode type:", a.type), En > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && $e.push(a), a;
}
const ot = h.NODE_ENV !== "production" ? wc : Ti;
function Ti(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === Pa) && (h.NODE_ENV !== "production" && !e && C(`Invalid vnode type when creating vnode: ${e}.`), e = je), br(e)) {
    const l = Et(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && bo(l, n), En > 0 && !s && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag = -2, l;
  }
  if (ki(e) && (e = e.__vccOpts), t) {
    t = Oc(t);
    let { class: l, style: a } = t;
    l && !se(l) && (t.class = Wt(l)), ee(a) && (mn(a) && !P(a) && (a = le({}, a)), t.style = Kt(a));
  }
  const i = se(e) ? 1 : Si(e) ? 128 : va(e) ? 64 : ee(e) ? 4 : F(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && mn(e) && (e = W(e), C(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), U(
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
  return e ? mn(e) || _i(e) ? le({}, e) : e : null;
}
function Et(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, u = t ? Dc(o || {}, t) : o, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Ci(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? P(s) ? s.concat(Kn(t)) : [s, Kn(t)] : Kn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && P(l) ? l.map(Vi) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? i === -1 ? 16 : i | 16 : i,
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
  return a && r && fo(
    d,
    a.clone(d)
  ), d;
}
function Vi(e) {
  const t = Et(e);
  return P(e.children) && (t.children = e.children.map(Vi)), t;
}
function xc(e = " ", t = 0) {
  return ot(Vn, null, e, t);
}
function nn(e = "", t = !1) {
  return t ? (ge(), Nc(je, null, e)) : ot(je, null, e);
}
function Ue(e) {
  return e == null || typeof e == "boolean" ? ot(je) : P(e) ? ot(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : br(e) ? _t(e) : ot(Vn, null, String(e));
}
function _t(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e);
}
function bo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), bo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !_i(t) ? t._ctx = ve : o === 3 && ve && (ve.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else F(t) ? (t = { default: t, _ctx: ve }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [xc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Dc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Wt([t.class, r.class]));
      else if (o === "style")
        t.style = Kt([t.style, r.style]);
      else if (Dn(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(P(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Ze(e, t, n, r = null) {
  it(e, t, 7, [
    n,
    r
  ]);
}
const Sc = pi();
let Ic = 0;
function Cc(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || Sc, s = {
    uid: Ic++,
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
    scope: new vl(
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
    propsOptions: yi(r, o),
    emitsOptions: xi(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Q,
    data: Q,
    props: Q,
    attrs: Q,
    slots: Q,
    refs: Q,
    setupState: Q,
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
let pe = null;
const Ai = () => pe || ve;
let or, Yr;
{
  const e = In(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  or = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), Yr = t(
    "__VUE_SSR_SETTERS__",
    (n) => bn = n
  );
}
const An = (e) => {
  const t = pe;
  return or(e), e.scope.on(), () => {
    e.scope.off(), or(t);
  };
}, Go = () => {
  pe && pe.scope.off(), or(null);
}, Tc = /* @__PURE__ */ ft("slot,component");
function qr(e, { isNativeTag: t }) {
  (Tc(e) || t(e)) && C(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ri(e) {
  return e.vnode.shapeFlag & 4;
}
let bn = !1;
function Vc(e, t = !1, n = !1) {
  t && Yr(t);
  const { props: r, children: o } = e.vnode, s = Ri(e);
  Ya(e, r, s, t), oc(e, o, n || t);
  const i = s ? Ac(e, t) : void 0;
  return t && Yr(!1), i;
}
function Ac(e, t) {
  var n;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && qr(r.name, e.appContext.config), r.components) {
      const s = Object.keys(r.components);
      for (let i = 0; i < s.length; i++)
        qr(s[i], e.appContext.config);
    }
    if (r.directives) {
      const s = Object.keys(r.directives);
      for (let i = 0; i < s.length; i++)
        ii(s[i]);
    }
    r.compilerOptions && Rc() && C(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ui), h.NODE_ENV !== "production" && ka(e);
  const { setup: o } = r;
  if (o) {
    We();
    const s = e.setupContext = o.length > 1 ? Mc(e) : null, i = An(e), l = Xt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? nt(e.props) : e.props,
        s
      ]
    ), a = to(l);
    if (Je(), i(), (a || e.sp) && !fn(e) && ai(e), a) {
      if (l.then(Go, Go), t)
        return l.then((u) => {
          zo(e, u, t);
        }).catch((u) => {
          Cn(u, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = r.name) != null ? n : "Anonymous";
        C(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      zo(e, l, t);
  } else
    Pi(e, t);
}
function zo(e, t, n) {
  F(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ee(t) ? (h.NODE_ENV !== "production" && br(t) && C(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = qs(t), h.NODE_ENV !== "production" && $a(e)) : h.NODE_ENV !== "production" && t !== void 0 && C(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Pi(e, n);
}
const Rc = () => !0;
function Pi(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || de);
  {
    const o = An(e);
    We();
    try {
      Fa(e);
    } finally {
      Je(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === de && !t && (r.template ? C(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : C("Component is missing template or render function: ", r));
}
const Xo = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return rr(), fe(e, "get", ""), e[t];
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
function Pc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return fe(e, "get", "$slots"), t[n];
    }
  });
}
function Mc(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && C("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (P(n) ? r = "array" : ce(n) && (r = "ref")), r !== "object" && C(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Xo));
      },
      get slots() {
        return r || (r = Pc(e));
      },
      get emit() {
        return (o, ...s) => e.emit(o, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Xo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function vr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(qs(Bl(e.exposed)), {
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
const kc = /(?:^|[-_])(\w)/g, $c = (e) => e.replace(kc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Mi(e, t = !0) {
  return F(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Nr(e, t, n = !1) {
  let r = Mi(t);
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
  return r ? $c(r) : n ? "App" : "Anonymous";
}
function ki(e) {
  return F(e) && "__vccOpts" in e;
}
const vo = (e, t) => {
  const n = Xl(e, t, bn);
  if (h.NODE_ENV !== "production") {
    const r = Ai();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function jc() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!ee(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (ce(f)) {
        We();
        const g = f.value;
        return Je(), [
          "div",
          {},
          ["span", e, d(f)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (Vt(f))
          return [
            "div",
            {},
            ["span", e, Se(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${Ye(f) ? " (readonly)" : ""}`
          ];
        if (Ye(f))
          return [
            "div",
            {},
            ["span", e, Se(f) ? "ShallowReadonly" : "Readonly"],
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
    f.type.props && f.props && g.push(i("props", W(f.props))), f.setupState !== Q && g.push(i("setup", f.setupState)), f.data !== Q && g.push(i("data", W(f.data)));
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
    return g = le({}, g), Object.keys(g).length ? [
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
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", r, f] : ee(f) ? ["object", { object: g ? W(f) : f }] : ["span", n, String(f)];
  }
  function a(f, g) {
    const _ = f.type;
    if (F(_))
      return;
    const I = {};
    for (const R in f.ctx)
      u(_, R, g) && (I[R] = f.ctx[R]);
    return I;
  }
  function u(f, g, _) {
    const I = f[_];
    if (P(I) && I.includes(g) || ee(I) && g in I || f.extends && u(f.extends, g, _) || f.mixins && f.mixins.some((R) => u(R, g, _)))
      return !0;
  }
  function d(f) {
    return Se(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const Zo = "3.5.17", Fe = h.NODE_ENV !== "production" ? C : de;
var _e = {};
let Gr;
const Qo = typeof window < "u" && window.trustedTypes;
if (Qo)
  try {
    Gr = /* @__PURE__ */ Qo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    _e.NODE_ENV !== "production" && Fe(`Error creating trusted types policy: ${e}`);
  }
const $i = Gr ? (e) => Gr.createHTML(e) : (e) => e, Fc = "http://www.w3.org/2000/svg", Lc = "http://www.w3.org/1998/Math/MathML", at = typeof document < "u" ? document : null, es = at && /* @__PURE__ */ at.createElement("template"), Hc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? at.createElementNS(Fc, e) : t === "mathml" ? at.createElementNS(Lc, e) : n ? at.createElement(e, { is: n }) : at.createElement(e);
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
      es.innerHTML = $i(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = es.content;
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
}, Uc = Symbol("_vtc");
function Bc(e, t, n) {
  const r = e[Uc];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ts = Symbol("_vod"), Kc = Symbol("_vsh"), Wc = Symbol(_e.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Jc = /(^|;)\s*display\s*:/;
function Yc(e, t, n) {
  const r = e.style, o = se(n);
  let s = !1;
  if (n && !o) {
    if (t)
      if (se(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Wn(r, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Wn(r, i, "");
    for (const i in n)
      i === "display" && (s = !0), Wn(r, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = r[Wc];
      i && (n += ";" + i), r.cssText = n, s = Jc.test(n);
    }
  } else t && e.removeAttribute("style");
  ts in e && (e[ts] = s ? r.display : "", e[Kc] && (r.display = "none"));
}
const qc = /[^\\];\s*$/, ns = /\s*!important$/;
function Wn(e, t, n) {
  if (P(n))
    n.forEach((r) => Wn(e, t, r));
  else if (n == null && (n = ""), _e.NODE_ENV !== "production" && qc.test(n) && Fe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Gc(e, t);
    ns.test(n) ? e.setProperty(
      Re(r),
      n.replace(ns, ""),
      "important"
    ) : e[r] = n;
  }
}
const rs = ["Webkit", "Moz", "ms"], Ar = {};
function Gc(e, t) {
  const n = Ar[t];
  if (n)
    return n;
  let r = Pe(t);
  if (r !== "filter" && r in e)
    return Ar[t] = r;
  r = fr(r);
  for (let o = 0; o < rs.length; o++) {
    const s = rs[o] + r;
    if (s in e)
      return Ar[t] = s;
  }
  return t;
}
const os = "http://www.w3.org/1999/xlink";
function ss(e, t, n, r, o, s = yl(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(os, t.slice(6, t.length)) : e.setAttributeNS(os, t, n) : n == null || s && !Cs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : st(n) ? String(n) : n
  );
}
function is(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $i(n) : n);
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
    l === "boolean" ? n = Cs(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    _e.NODE_ENV !== "production" && !i && Fe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function It(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function zc(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const ls = Symbol("_vei");
function Xc(e, t, n, r, o = null) {
  const s = e[ls] || (e[ls] = {}), i = s[t];
  if (r && i)
    i.value = _e.NODE_ENV !== "production" ? cs(r, t) : r;
  else {
    const [l, a] = Zc(t);
    if (r) {
      const u = s[t] = tu(
        _e.NODE_ENV !== "production" ? cs(r, t) : r,
        o
      );
      It(e, l, u, a);
    } else i && (zc(e, l, i, a), s[t] = void 0);
  }
}
const as = /(?:Once|Passive|Capture)$/;
function Zc(e) {
  let t;
  if (as.test(e)) {
    t = {};
    let r;
    for (; r = e.match(as); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Re(e.slice(2)), t];
}
let Rr = 0;
const Qc = /* @__PURE__ */ Promise.resolve(), eu = () => Rr || (Qc.then(() => Rr = 0), Rr = Date.now());
function tu(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    it(
      nu(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = eu(), n;
}
function cs(e, t) {
  return F(e) || P(e) ? e : (Fe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), de);
}
function nu(e, t) {
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
const us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ru = (e, t, n, r, o, s) => {
  const i = o === "svg";
  t === "class" ? Bc(e, r, i) : t === "style" ? Yc(e, n, r) : Dn(t) ? Jn(t) || Xc(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ou(e, t, r, i)) ? (is(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ss(e, t, r, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !se(r)) ? is(e, Pe(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ss(e, t, r, i));
};
function ou(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && us(t) && F(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return us(t) && se(n) ? !1 : t in e;
}
const fs = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function su(e, t, n) {
  const r = /* @__PURE__ */ li(e, t);
  cr(r) && le(r, t);
  class o extends No {
    constructor(i) {
      super(r, i, n);
    }
  }
  return o.def = r, o;
}
const iu = typeof HTMLElement < "u" ? HTMLElement : class {
};
class No extends iu {
  constructor(t, n = {}, r = _s) {
    super(), this._def = t, this._props = n, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && r !== _s ? this._root = this.shadowRoot : (_e.NODE_ENV !== "production" && this.shadowRoot && Fe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof No) {
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
    this._connected = !1, _r(() => {
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
          const u = s[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = Co(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Pe(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(r), this.shadowRoot ? this._applyStyles(i) : _e.NODE_ENV !== "production" && i && Fe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(r);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((r) => {
      r.configureApp = this._def.configureApp, t(this._def = r, !0);
    }) : t(this._def);
  }
  _mount(t) {
    _e.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const r in n)
        G(this, r) ? _e.NODE_ENV !== "production" && Fe(`Exposed property "${r}" already exists on custom element.`) : Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => be(n[r])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, r = P(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && r.includes(o) && this._setProp(o, this[o]);
    for (const o of r.map(Pe))
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
    let r = n ? this.getAttribute(t) : fs;
    const o = Pe(t);
    n && this._numberProps && this._numberProps[o] && (r = Co(r)), this._setProp(o, r, !1, !0);
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
    if (n !== this._props[t] && (n === fs ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), r)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Re(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Re(t), n + "") : n || this.removeAttribute(Re(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), gu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ot(this._def, le(t, this._props));
    return this._instance || (n.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0, _e.NODE_ENV !== "production" && (r.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const o = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            cr(i[0]) ? le({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (s, ...i) => {
        o(s, i), Re(s) !== s && o(Re(s), i);
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
      if (r && s.setAttribute("nonce", r), s.textContent = t[o], this.shadowRoot.prepend(s), _e.NODE_ENV !== "production")
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
    if (_e.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((r) => this._root.removeChild(r)), n.length = 0);
    }
  }
}
const sr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return P(t) ? (n) => Ft(t, n) : t;
};
function lu(e) {
  e.target.composing = !0;
}
function ds(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const qt = Symbol("_assign"), au = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[qt] = sr(o);
    const s = r || o.props && o.props.type === "number";
    It(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Yn(l)), e[qt](l);
    }), n && It(e, "change", () => {
      e.value = e.value.trim();
    }), t || (It(e, "compositionstart", lu), It(e, "compositionend", ds), It(e, "change", ds));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
    if (e[qt] = sr(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Yn(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, cu = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, r) {
    const o = ar(t);
    It(e, "change", () => {
      const s = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? Yn(ir(i)) : ir(i)
      );
      e[qt](
        e.multiple ? o ? new Set(s) : s : s[0]
      ), e._assigning = !0, _r(() => {
        e._assigning = !1;
      });
    }), e[qt] = sr(r);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    ps(e, t);
  },
  beforeUpdate(e, t, n) {
    e[qt] = sr(n);
  },
  updated(e, { value: t }) {
    e._assigning || ps(e, t);
  }
};
function ps(e, t) {
  const n = e.multiple, r = P(t);
  if (n && !r && !ar(t)) {
    _e.NODE_ENV !== "production" && Fe(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, s = e.options.length; o < s; o++) {
    const i = e.options[o], l = ir(i);
    if (n)
      if (r) {
        const a = typeof l;
        a === "string" || a === "number" ? i.selected = t.some((u) => String(u) === String(l)) : i.selected = bl(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (dr(ir(i), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function ir(e) {
  return "_value" in e ? e._value : e.value;
}
const uu = ["ctrl", "shift", "alt", "meta"], fu = {
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
  exact: (e, t) => uu.some((n) => e[`${n}Key`] && !t.includes(n))
}, hs = (e, t) => {
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = (o, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = fu[t[i]];
      if (l && l(o, t)) return;
    }
    return e(o, ...s);
  });
}, du = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, pu = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
  return n[r] || (n[r] = (o) => {
    if (!("key" in o))
      return;
    const s = Re(o.key);
    if (t.some(
      (i) => i === s || du[i] === s
    ))
      return e(o);
  });
}, hu = /* @__PURE__ */ le({ patchProp: ru }, Hc);
let gs;
function ji() {
  return gs || (gs = lc(hu));
}
const gu = (...e) => {
  ji().render(...e);
}, _s = (...e) => {
  const t = ji().createApp(...e);
  _e.NODE_ENV !== "production" && (mu(t), yu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = Eu(r);
    if (!o) return;
    const s = t._component;
    !F(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, _u(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function _u(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function mu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => hl(t) || gl(t) || _l(t),
    writable: !1
  });
}
function yu(e) {
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
function Eu(e) {
  if (se(e)) {
    const t = document.querySelector(e);
    return _e.NODE_ENV !== "production" && !t && Fe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return _e.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Fe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var bu = {};
function vu() {
  jc();
}
bu.NODE_ENV !== "production" && vu();
var Fi = "vercel.ai.error", Nu = Symbol.for(Fi), Li, wu = class Hi extends Error {
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
    super(n), this[Li] = !0, this.name = t, this.cause = r;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Hi.hasMarker(t, Fi);
  }
  static hasMarker(t, n) {
    const r = Symbol.for(n);
    return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === !0;
  }
};
Li = Nu;
var zt = wu;
function Ui(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Bi = "AI_InvalidArgumentError", Ki = `vercel.ai.error.${Bi}`, Ou = Symbol.for(Ki), Wi, xu = class extends zt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Bi, message: e, cause: t }), this[Wi] = !0, this.argument = n;
  }
  static isInstance(e) {
    return zt.hasMarker(e, Ki);
  }
};
Wi = Ou;
var Ji = "AI_JSONParseError", Yi = `vercel.ai.error.${Ji}`, Du = Symbol.for(Yi), qi, ms = class extends zt {
  constructor({ text: e, cause: t }) {
    super({
      name: Ji,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Ui(t)}`,
      cause: t
    }), this[qi] = !0, this.text = e;
  }
  static isInstance(e) {
    return zt.hasMarker(e, Yi);
  }
};
qi = Du;
var Gi = "AI_TypeValidationError", zi = `vercel.ai.error.${Gi}`, Su = Symbol.for(zi), Xi, Iu = class zr extends zt {
  constructor({ value: t, cause: n }) {
    super({
      name: Gi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Ui(n)}`,
      cause: n
    }), this[Xi] = !0, this.value = t;
  }
  static isInstance(t) {
    return zt.hasMarker(t, zi);
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
    return zr.isInstance(n) && n.value === t ? n : new zr({ value: t, cause: n });
  }
};
Xi = Su;
var ys = Iu;
let Cu = (e, t = 21) => (n = t) => {
  let r = "", o = n | 0;
  for (; o--; )
    r += e[Math.random() * e.length | 0];
  return r;
};
function Tu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xt = { exports: {} }, Es;
function Vu() {
  if (Es) return xt.exports;
  Es = 1;
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
          const R = _[I];
          R && typeof R == "object" && f.push(R);
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
var Au = Vu();
const Ru = /* @__PURE__ */ Tu(Au);
var Pu = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  const o = Cu(n, t);
  if (e == null)
    return o;
  if (n.includes(r))
    throw new xu({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${r}${o(s)}`;
}, wo = Pu(), Xr = Symbol.for("vercel.ai.validator");
function Mu(e) {
  return { [Xr]: !0, validate: e };
}
function ku(e) {
  return typeof e == "object" && e !== null && Xr in e && e[Xr] === !0 && "validate" in e;
}
function $u(e) {
  return ku(e) ? e : ju(e);
}
function ju(e) {
  return Mu((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function Fu({
  value: e,
  schema: t
}) {
  const n = $u(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const r = n.validate(e);
    return r.success ? r : {
      success: !1,
      error: ys.wrap({ value: e, cause: r.error })
    };
  } catch (r) {
    return {
      success: !1,
      error: ys.wrap({ value: e, cause: r })
    };
  }
}
function bs({
  text: e,
  schema: t
}) {
  try {
    const n = Ru.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const r = Fu({ value: n, schema: t });
    return r.success ? { ...r, rawValue: n } : r;
  } catch (n) {
    return {
      success: !1,
      error: ms.isInstance(n) ? n : new ms({ text: e, cause: n })
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
}, Nn = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, wn = {
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
}, On = {
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
}, xn = {
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
}, Lu = [
  vn,
  Nn,
  wn,
  On,
  xn
];
vn.code + "", Nn.code + "", wn.code + "", On.code + "", xn.code + "";
vn.name + "", vn.code, Nn.name + "", Nn.code, wn.name + "", wn.code, On.name + "", On.code, xn.name + "", xn.code;
Lu.map((e) => e.code);
function Hu({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Uu(e) {
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
function Bu(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = bs({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = bs({ text: Uu(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Ku = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Wu = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Ju = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Yu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, qu = {
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
}, zu = {
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
}, Xu = {
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
}, Zu = {
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
}, Qu = {
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
}, ef = {
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
}, tf = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, nf = {
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
}, rf = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, of = {
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
}, sf = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, Oo = [
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
  ef,
  tf,
  nf,
  rf,
  of,
  sf
], lf = Object.fromEntries(
  Oo.map((e) => [e.code, e])
);
Object.fromEntries(
  Oo.map((e) => [e.name, e.code])
);
var af = Oo.map((e) => e.code), cf = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!af.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const r = n, o = e.slice(t + 1), s = JSON.parse(o);
  return lf[r].parse(s);
}, uf = 10;
function ff(e, t) {
  const n = new Uint8Array(t);
  let r = 0;
  for (const o of e)
    n.set(o, r), r += o.length;
  return e.length = 0, n;
}
async function df({
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
  onFinishStepPart: R,
  onStartStepPart: Y
}) {
  const L = e.getReader(), j = new TextDecoder(), A = [];
  let B = 0;
  for (; ; ) {
    const { value: O } = await L.read();
    if (O && (A.push(O), B += O.length, O[O.length - 1] !== uf))
      continue;
    if (A.length === 0)
      break;
    const y = ff(A, B);
    B = 0;
    const E = j.decode(y, { stream: !0 }).split(`
`).filter((D) => D !== "").map(cf);
    for (const { type: D, value: k } of E)
      switch (D) {
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
          await _?.(k);
          break;
        case "tool_call_streaming_start":
          await u?.(k);
          break;
        case "tool_call_delta":
          await d?.(k);
          break;
        case "tool_call":
          await f?.(k);
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
          await Y?.(k);
          break;
        default: {
          const X = D;
          throw new Error(`Unknown stream part type: ${X}`);
        }
      }
  }
}
async function pf({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: r,
  generateId: o = wo,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var l, a;
  const u = i?.role === "assistant";
  let d = u ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((y, E) => {
    var D;
    return Math.max(y, (D = E.step) != null ? D : 0);
  }, 0)) != null ? a : 0) : 0;
  const f = u ? structuredClone(i) : {
    id: o(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let g, _, I;
  function R(y, E) {
    const D = f.parts.find(
      (k) => k.type === "tool-invocation" && k.toolInvocation.toolCallId === y
    );
    D != null ? D.toolInvocation = E : f.parts.push({
      type: "tool-invocation",
      toolInvocation: E
    });
  }
  const Y = [];
  let L = u ? i?.annotations : void 0;
  const j = {};
  let A = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, B = "unknown";
  function O() {
    const y = [...Y];
    L?.length && (f.annotations = L);
    const E = {
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
      message: E,
      data: y,
      replaceLastMessage: u
    });
  }
  await df({
    stream: e,
    onTextPart(y) {
      g == null ? (g = {
        type: "text",
        text: y
      }, f.parts.push(g)) : g.text += y, f.content += y, O();
    },
    onReasoningPart(y) {
      var E;
      I == null ? (I = { type: "text", text: y }, _?.details.push(I)) : I.text += y, _ == null ? (_ = {
        type: "reasoning",
        reasoning: y,
        details: [I]
      }, f.parts.push(_)) : _.reasoning += y, f.reasoning = ((E = f.reasoning) != null ? E : "") + y, O();
    },
    onReasoningSignaturePart(y) {
      I != null && (I.signature = y.signature);
    },
    onRedactedReasoningPart(y) {
      _ == null && (_ = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, f.parts.push(_)), _.details.push({
        type: "redacted",
        data: y.data
      }), I = void 0, O();
    },
    onFilePart(y) {
      f.parts.push({
        type: "file",
        mimeType: y.mimeType,
        data: y.data
      }), O();
    },
    onSourcePart(y) {
      f.parts.push({
        type: "source",
        source: y
      }), O();
    },
    onToolCallStreamingStartPart(y) {
      f.toolInvocations == null && (f.toolInvocations = []), j[y.toolCallId] = {
        text: "",
        step: d,
        toolName: y.toolName,
        index: f.toolInvocations.length
      };
      const E = {
        state: "partial-call",
        step: d,
        toolCallId: y.toolCallId,
        toolName: y.toolName,
        args: void 0
      };
      f.toolInvocations.push(E), R(y.toolCallId, E), O();
    },
    onToolCallDeltaPart(y) {
      const E = j[y.toolCallId];
      E.text += y.argsTextDelta;
      const { value: D } = Bu(E.text), k = {
        state: "partial-call",
        step: E.step,
        toolCallId: y.toolCallId,
        toolName: E.toolName,
        args: D
      };
      f.toolInvocations[E.index] = k, R(y.toolCallId, k), O();
    },
    async onToolCallPart(y) {
      const E = {
        state: "call",
        step: d,
        ...y
      };
      if (j[y.toolCallId] != null ? f.toolInvocations[j[y.toolCallId].index] = E : (f.toolInvocations == null && (f.toolInvocations = []), f.toolInvocations.push(E)), R(y.toolCallId, E), O(), n) {
        const D = await n({ toolCall: y });
        if (D != null) {
          const k = {
            state: "result",
            step: d,
            ...y,
            result: D
          };
          f.toolInvocations[f.toolInvocations.length - 1] = k, R(y.toolCallId, k), O();
        }
      }
    },
    onToolResultPart(y) {
      const E = f.toolInvocations;
      if (E == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const D = E.findIndex(
        (X) => X.toolCallId === y.toolCallId
      );
      if (D === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const k = {
        ...E[D],
        state: "result",
        ...y
      };
      E[D] = k, R(y.toolCallId, k), O();
    },
    onDataPart(y) {
      Y.push(...y), O();
    },
    onMessageAnnotationsPart(y) {
      L == null ? L = [...y] : L.push(...y), O();
    },
    onFinishStepPart(y) {
      d += 1, g = y.isContinued ? g : void 0, _ = void 0, I = void 0;
    },
    onStartStepPart(y) {
      u || (f.id = y.messageId), f.parts.push({ type: "step-start" }), O();
    },
    onFinishMessagePart(y) {
      B = y.finishReason, y.usage != null && (A = Hu(y.usage));
    },
    onErrorPart(y) {
      throw new Error(y);
    }
  }), r?.({ message: f, finishReason: B, usage: A });
}
async function hf({
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
async function gf({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: r = () => /* @__PURE__ */ new Date(),
  generateId: o = wo
}) {
  const s = { type: "text", text: "" }, i = {
    id: o(),
    createdAt: r(),
    role: "assistant",
    content: "",
    parts: [s]
  };
  await hf({
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
var _f = () => fetch;
async function mf({
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
  fetch: g = _f(),
  lastMessage: _,
  requestType: I = "generate"
}) {
  var R, Y, L;
  const A = await (I === "resume" ? g(`${e}?chatId=${t.id}`, {
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
    signal: (Y = s?.()) == null ? void 0 : Y.signal,
    credentials: r
  })).catch((B) => {
    throw i(), B;
  });
  if (l)
    try {
      await l(A);
    } catch (B) {
      throw B;
    }
  if (!A.ok)
    throw i(), new Error(
      (L = await A.text()) != null ? L : "Failed to fetch the chat response."
    );
  if (!A.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await gf({
        stream: A.body,
        update: a,
        onFinish: u,
        generateId: f
      });
      return;
    }
    case "data": {
      await pf({
        stream: A.body,
        update: a,
        lastMessage: _,
        onToolCall: d,
        onFinish({ message: B, finishReason: O, usage: y }) {
          u && B != null && u(B, { usage: y, finishReason: O });
        },
        generateId: f
      });
      return;
    }
    default: {
      const B = n;
      throw new Error(`Unknown stream protocol: ${B}`);
    }
  }
}
function Zr(e) {
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
function $n(e) {
  return e.map((t) => ({
    ...t,
    parts: Zi(t)
  }));
}
async function vs(e) {
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
function yf({
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
    (r.length > t || Zr(s.toolInvocations) !== e) && // check that next step is possible:
    Qi(s) && // limit the number of automatic steps:
    ((o = Zr(s.toolInvocations)) != null ? o : 0) < n
  );
}
function Qi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((r, o, s) => o.type === "step-start" ? s : r, -1), n = e.parts.slice(t + 1).filter((r) => r.type === "tool-invocation");
  return n.length > 0 && n.every((r) => "result" in r.toolInvocation);
}
function Ef({
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
var Pr = /* @__PURE__ */ new WeakMap(), Ns = 0;
function bf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var r = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? r = '"' + e[n] + '"' : r = String(e[n]) : Pr.has(e[n]) ? r = Pr.get(e[n]) : (r = Ns, Pr.set(e[n], Ns++)), t += "@" + r;
  }
  return t;
}
function vf(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = bf(e) : e = String(e || ""), e;
}
var xo = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return vf(t);
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
function Nf() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function wf() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var Of = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Mr = {
  isOnline: Nf,
  isDocumentVisible: wf,
  fetcher: Of
};
var ct = function() {
  return ct = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, ct.apply(this, arguments);
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
}, xf = function(e, t) {
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
}, Df = function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}, el = new xo(), lr = new xo(), kr = new xo(), tl = {
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
  fetcher: Mr.fetcher,
  isOnline: Mr.isOnline,
  isDocumentVisible: Mr.isDocumentVisible
};
function Sf(e, t, n) {
  var r = lr.get(e);
  if (r)
    r.data.push(t);
  else {
    var o = 5e3;
    lr.set(e, [t], n > 0 ? n + o : n);
  }
}
function If(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var r = Math.min(t || 0, n.errorRetryCount), o = r * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: r + 1, shouldRetryOnError: !0 });
    }, o);
  }
}
var ws = function(e, t, n, r) {
  return n === void 0 && (n = el), r === void 0 && (r = tl.ttl), Ht(void 0, void 0, void 0, function() {
    var o, s, i, l, a, u, d;
    return Ut(this, function(f) {
      switch (f.label) {
        case 0:
          if (!Cf(t)) return [3, 5];
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
          return u = lr.get(e), u && u.data.length && (d = u.data.filter(function(g) {
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
function Os() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var r, o, s = ct({}, tl), i = !1, l = !1, a = Ai(), u = a?.proxy || a;
  if (!u)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = u?.$isServer || !1;
  t.length >= 1 && (r = t[0]), t.length >= 2 && (o = t[1]), t.length > 2 && (s = ct(ct({}, s), t[2]));
  var f = d ? s.serverTTL : s.ttl, g = typeof r == "function" ? r : He(r);
  typeof o > "u" && (o = s.fetcher);
  var _ = null;
  _ || (_ = Gt({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var I = function(j, A) {
    return Ht(e, void 0, void 0, function() {
      var B, O, y, E, D, k, X, he = this;
      return Ut(this, function(oe) {
        switch (oe.label) {
          case 0:
            return B = _.data === void 0, O = g.value, O ? (y = s.cache.get(O), E = y && y.data, _.isValidating = !0, _.isLoading = !E, E && (_.data = E.data, _.error = E.error), D = j || o, !D || !s.isDocumentVisible() && !B || A?.forceRevalidate !== void 0 && !A?.forceRevalidate ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : y && (k = !!(Date.now() - y.createdAt >= s.dedupingInterval || A?.forceRevalidate), !k) ? (_.isValidating = !1, _.isLoading = !1, [
              2
              /*return*/
            ]) : (X = function() {
              return Ht(he, void 0, void 0, function() {
                var ie, Ne, Ie, ue;
                return Ut(this, function(K) {
                  switch (K.label) {
                    case 0:
                      return ie = kr.get(O), ie ? [3, 2] : (Ne = Array.isArray(O) ? O : [O], Ie = D.apply(void 0, Df([], xf(Ne), !1)), kr.set(O, Ie, s.dedupingInterval), [4, ws(O, Ie, s.cache, f)]);
                    case 1:
                      return K.sent(), [3, 4];
                    case 2:
                      return [4, ws(O, ie.data, s.cache, f)];
                    case 3:
                      K.sent(), K.label = 4;
                    case 4:
                      return _.isValidating = !1, _.isLoading = !1, kr.delete(O), _.error !== void 0 && (ue = !i && s.shouldRetryOnError && (A ? A.shouldRetryOnError : !0), ue && If(I, A ? A.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, E && s.revalidateDebounce ? (setTimeout(function() {
              return Ht(he, void 0, void 0, function() {
                return Ut(this, function(ie) {
                  switch (ie.label) {
                    case 0:
                      return i ? [3, 2] : [4, X()];
                    case 1:
                      ie.sent(), ie.label = 2;
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
            return [4, X()];
          case 2:
            oe.sent(), oe.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, R = function() {
    return Ht(e, void 0, void 0, function() {
      return Ut(this, function(j) {
        return [2, I(null, { shouldRetryOnError: !1 })];
      });
    });
  }, Y = null;
  ho(function() {
    var j = function() {
      return Ht(e, void 0, void 0, function() {
        return Ut(this, function(A) {
          switch (A.label) {
            case 0:
              return !_.error && s.isOnline() ? [4, I()] : [3, 2];
            case 1:
              return A.sent(), [3, 3];
            case 2:
              Y && clearTimeout(Y), A.label = 3;
            case 3:
              return s.refreshInterval && !i && (Y = setTimeout(j, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (Y = setTimeout(j, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", R, !1), window.addEventListener("focus", R, !1));
  }), go(function() {
    i = !0, Y && clearTimeout(Y), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", R, !1), window.removeEventListener("focus", R, !1));
    var j = lr.get(g.value);
    j && (j.data = j.data.filter(function(A) {
      return A !== _;
    }));
  });
  try {
    dn(g, function(j) {
      Ye(g) || (g.value = j), _.key = j, _.isValidating = !!j, Sf(g.value, _, f), !d && !l && g.value && I(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var L = ct(ct({}, Yl(_)), { mutate: function(j, A) {
    return I(j, ct(ct({}, A), { forceRevalidate: !0 }));
  } });
  return L;
}
function Cf(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Tf = Os.default || Os, xs = {}, Ds = {};
function Vf({
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
  generateId: g = wo,
  onToolCall: _,
  fetch: I,
  keepLastMessageOnError: R = !0,
  maxSteps: Y = 1,
  experimental_prepareRequestBody: L
} = {
  maxSteps: 1
}) {
  var j, A;
  const B = t ?? g(), O = `${e}|${B}`, { data: y, mutate: E } = Tf(
    O,
    () => {
      var J;
      return (J = xs[O]) != null ? J : $n(n);
    }
  ), D = (j = Ds[B]) != null ? j : Ds[B] = He(
    "ready"
  );
  (A = y.value) != null || (y.value = $n(n));
  const k = (J) => (xs[O] = J, E()), X = y, he = He(void 0), oe = He(void 0);
  let ie = null;
  async function Ne(J, { data: ae, headers: ye, body: Me } = {}) {
    var Ce, qe, Mt;
    he.value = void 0, D.value = "submitted";
    const Rn = X.value.length, Nt = Zr(
      (Ce = X.value[X.value.length - 1]) == null ? void 0 : Ce.toolInvocations
    );
    try {
      ie = new AbortController();
      const ht = $n(J), c = ht;
      k(c);
      const p = (qe = oe.value) != null ? qe : [], m = o ? c : c.map(
        ({
          role: N,
          content: b,
          experimental_attachments: v,
          data: T,
          annotations: S,
          toolInvocations: x,
          parts: w
        }) => ({
          role: N,
          content: b,
          ...v !== void 0 && {
            experimental_attachments: v
          },
          ...T !== void 0 && { data: T },
          ...S !== void 0 && { annotations: S },
          ...x !== void 0 && { toolInvocations: x },
          ...w !== void 0 && { parts: w }
        })
      );
      await mf({
        api: e,
        body: (Mt = L?.({
          id: B,
          messages: c,
          requestData: ae,
          requestBody: Me
        })) != null ? Mt : {
          id: B,
          messages: m,
          data: ae,
          ...be(f),
          // Use unref to unwrap the ref value
          ...Me
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...ye
        },
        abortController: () => ie,
        credentials: u,
        onResponse: i,
        onUpdate({ message: N, data: b, replaceLastMessage: v }) {
          D.value = "streaming", k([
            ...v ? c.slice(0, c.length - 1) : c,
            N
          ]), b?.length && (oe.value = [...p, ...b]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          R || k(ht);
        },
        generateId: g,
        onToolCall: _,
        fetch: I,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Qr(c[c.length - 1])
      }), D.value = "ready";
    } catch (ht) {
      if (ht.name === "AbortError")
        return ie = null, D.value = "ready", null;
      a && ht instanceof Error && a(ht), he.value = ht, D.value = "error";
    } finally {
      ie = null;
    }
    yf({
      originalMaxToolInvocationStep: Nt,
      originalMessageCount: Rn,
      maxSteps: Y,
      messages: X.value
    }) && await Ne(X.value);
  }
  const Ie = async (J, ae) => {
    var ye, Me, Ce;
    const qe = await vs(
      (ye = ae?.experimental_attachments) != null ? ye : J.experimental_attachments
    );
    return Ne(
      X.value.concat({
        ...J,
        id: (Me = J.id) != null ? Me : g(),
        createdAt: (Ce = J.createdAt) != null ? Ce : /* @__PURE__ */ new Date(),
        experimental_attachments: qe.length > 0 ? qe : void 0,
        parts: Zi(J)
      }),
      ae
    );
  }, ue = async (J) => {
    const ae = X.value;
    return ae.length === 0 ? null : ae[ae.length - 1].role === "assistant" ? Ne(ae.slice(0, -1), J) : Ne(ae, J);
  }, K = () => {
    ie && (ie.abort(), ie = null);
  }, q = (J) => {
    typeof J == "function" && (J = J(X.value)), k($n(J));
  }, Le = (J) => {
    typeof J == "function" && (J = J(oe.value)), oe.value = J;
  }, bt = He(r), vt = async (J, ae = {}) => {
    var ye;
    (ye = J?.preventDefault) == null || ye.call(J);
    const Me = bt.value;
    if (!Me && !ae.allowEmptySubmit)
      return;
    const Ce = await vs(
      ae.experimental_attachments
    );
    Ne(
      X.value.concat({
        id: g(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Me,
        role: "user",
        experimental_attachments: Ce.length > 0 ? Ce : void 0,
        parts: [{ type: "text", text: Me }]
      }),
      ae
    ), bt.value = "";
  }, pt = ({
    toolCallId: J,
    result: ae
  }) => {
    const ye = X.value;
    if (Ef({
      messages: ye,
      toolCallId: J,
      toolResult: ae
    }), k(ye), D.value === "submitted" || D.value === "streaming")
      return;
    const Me = ye[ye.length - 1];
    Qi(Me) && Ne(ye);
  };
  return {
    id: B,
    messages: X,
    append: Ie,
    error: he,
    reload: ue,
    stop: K,
    setMessages: q,
    input: bt,
    handleSubmit: vt,
    isLoading: vo(
      () => D.value === "submitted" || D.value === "streaming"
    ),
    status: D,
    data: oe,
    setData: Le,
    addToolResult: pt
  };
}
function Qr(e) {
  if (Array.isArray(e))
    return [...e.map(Qr)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, r] of Object.entries(e))
      t[n] = Qr(r);
    return t;
  } else
    return e;
}
function Af(e) {
  const t = He(!1), n = He("");
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
    isRecording: Gn(t),
    error: Gn(n),
    start: s,
    stop: i
  };
}
const Rf = { class: "ai-bubble-container" }, Pf = { class: "toolbar" }, Mf = ["value"], kf = { class: "messages-area" }, $f = { class: "message-bubble ai-bubble" }, jf = ["src"], Ff = {
  key: 1,
  class: "text-content"
}, Lf = { class: "message-bubble user-bubble" }, Hf = { class: "text-content" }, Uf = {
  key: 0,
  class: "message-wrapper"
}, Bf = { class: "message-row" }, Kf = { class: "message-bubble ai-bubble" }, Wf = {
  key: 0,
  class: "dice-animation"
}, Jf = { key: 1 }, Yf = ["disabled"], qf = { class: "modal-content" }, Gf = /* @__PURE__ */ li({
  __name: "AiChatBubble",
  props: {
    apiUrl: {}
  },
  setup(e) {
    const t = e, { messages: n, input: r, handleSubmit: o, isLoading: s } = Vf({ api: t.apiUrl }), { isRecording: i, start: l, stop: a } = Af((y) => {
      const E = y.trim();
      if (["发送", "提交", "发出"].includes(E)) {
        o();
        return;
      }
      if (["清空", "清除", "删除"].includes(E)) {
        r.value = "";
        return;
      }
      if (["打开日志", "显示日志", "日志"].includes(E)) {
        d.value = !0;
        return;
      }
      if (["关闭", "隐藏"].includes(E)) {
        d.value = !1, f.value = !1;
        return;
      }
      if (["打开窗口", "备注", "语音库"].includes(E)) {
        f.value = !0;
        return;
      }
      r.value = E;
    }), u = He(!1), d = He(!1), f = He(!1), g = Gt({ x: 600, y: 80 }), _ = Gt({ x: 600, y: 200 }), I = He("#ffffff"), R = [
      { name: "白色", value: "#ffffff" },
      { name: "浅灰", value: "#f7f7f7" },
      { name: "青色", value: "#e0f7fa" },
      { name: "橙色", value: "#ffe0b2" },
      { name: "粉色", value: "#fce4ec" },
      { name: "绿色", value: "#e8f5e9" },
      { name: "蓝色", value: "#e3f2fd" },
      { name: "紫色", value: "#f3e5f5" }
    ];
    function Y() {
      u.value = !u.value, u.value || (d.value = !1, f.value = !1);
    }
    const L = He(null);
    function j(y) {
      return y.trim().startsWith("<audio");
    }
    function A(y) {
      const E = y.match(/src="([^"]+)"/);
      return E ? E[1] : null;
    }
    const B = vo(() => {
      if (!s.value) return !1;
      const y = [...n.value].reverse().find((E) => E.role === "user");
      return !!(y && /摇骰子|摇色子|掷骰子/.test(y.content));
    });
    dn(n, async (y) => {
      const E = y[y.length - 1];
      if (E?.role === "assistant" && j(E.content)) {
        if (!A(E.content)) return;
        await _r(), L.value?.play().catch(() => {
          console.warn("Audio autoplay was prevented by the browser.");
        });
      }
    }, { deep: !0 });
    function O(y, E) {
      E.preventDefault();
      const D = E.clientX, k = E.clientY, X = y.x, he = y.y;
      function oe(Ne) {
        y.x = X + (Ne.clientX - D), y.y = he + (Ne.clientY - k);
      }
      function ie() {
        document.removeEventListener("mousemove", oe), document.removeEventListener("mouseup", ie);
      }
      document.addEventListener("mousemove", oe), document.addEventListener("mouseup", ie);
    }
    return ho(() => {
    }), (y, E) => (ge(), Ee("div", Rf, [
      U("div", {
        class: "floating-button",
        onClick: Y
      }, " 🤖 AI "),
      u.value ? (ge(), Ee("div", {
        key: 0,
        class: "chat-main",
        style: Kt({ backgroundColor: I.value })
      }, [
        U("div", Pf, [
          U("button", {
            class: "toolbar-btn",
            onClick: E[0] || (E[0] = (D) => d.value = !0)
          }, "📜日志"),
          U("button", {
            class: "toolbar-btn",
            onClick: E[1] || (E[1] = (D) => f.value = !0)
          }, "📚备注"),
          ko(U("select", {
            "onUpdate:modelValue": E[2] || (E[2] = (D) => I.value = D),
            class: "theme-select"
          }, [
            (ge(), Ee(De, null, Cr(R, (D) => U("option", {
              key: D.value,
              value: D.value
            }, rn(D.name), 9, Mf)), 64))
          ], 512), [
            [cu, I.value]
          ]),
          U("button", {
            class: "toolbar-btn close-chat-btn",
            onClick: Y
          }, "❌")
        ]),
        U("div", kf, [
          (ge(!0), Ee(De, null, Cr(be(n), (D) => (ge(), Ee("div", {
            key: D.id,
            class: Wt(["message-wrapper", { "is-user": D.role === "user" }])
          }, [
            U("div", {
              class: Wt(["message-row", { "is-user-row": D.role === "user" }])
            }, [
              D.role === "assistant" ? (ge(), Ee(De, { key: 0 }, [
                E[11] || (E[11] = U("span", { class: "message-label" }, "AI", -1)),
                U("div", $f, [
                  D.content.trim().startsWith("<audio") ? (ge(), Ee("audio", {
                    key: 0,
                    ref_for: !0,
                    ref_key: "audioRef",
                    ref: L,
                    src: A(D.content) ?? "",
                    controls: "",
                    autoplay: ""
                  }, null, 8, jf)) : (ge(), Ee("p", Ff, rn(D.content), 1))
                ])
              ], 64)) : D.role === "user" ? (ge(), Ee(De, { key: 1 }, [
                U("div", Lf, [
                  U("p", Hf, rn(D.content), 1)
                ]),
                E[12] || (E[12] = U("span", { class: "message-label" }, "You", -1))
              ], 64)) : nn("", !0)
            ], 2)
          ], 2))), 128)),
          be(s) ? (ge(), Ee("div", Uf, [
            U("div", Bf, [
              E[14] || (E[14] = U("span", { class: "message-label" }, "AI", -1)),
              U("div", Kf, [
                B.value ? (ge(), Ee("div", Wf, E[13] || (E[13] = [
                  U("span", { class: "die" }, "⚀", -1),
                  U("span", { class: "die" }, "⚂", -1),
                  U("span", { class: "die" }, "⚅", -1)
                ]))) : (ge(), Ee("div", Jf, "思考中..."))
              ])
            ])
          ])) : nn("", !0)
        ]),
        U("form", {
          onSubmit: E[6] || (E[6] = hs(
            //@ts-ignore
            (...D) => be(o) && be(o)(...D),
            ["prevent"]
          )),
          class: "input-form"
        }, [
          ko(U("textarea", {
            "onUpdate:modelValue": E[3] || (E[3] = (D) => ce(r) ? r.value = D : null),
            placeholder: "请输入您的问题，或点击麦克风说话：",
            class: "chat-textarea",
            rows: "2",
            onKeydown: E[4] || (E[4] = pu(hs(
              //@ts-ignore
              (...D) => be(o) && be(o)(...D),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [au, be(r)]
          ]),
          U("button", {
            type: "button",
            onClick: E[5] || (E[5] = (D) => be(i) ? be(a)() : be(l)()),
            class: Wt(["mic-button", { "is-listening": be(i) }]),
            title: "语音输入"
          }, " 🎤 ", 2),
          U("button", {
            type: "submit",
            disabled: be(s)
          }, "发送", 8, Yf)
        ], 32)
      ], 4)) : nn("", !0),
      u.value && d.value ? (ge(), Ee("div", {
        key: 1,
        class: "draggable-modal",
        style: Kt({ left: g.x + "px", top: g.y + "px" })
      }, [
        U("div", {
          class: "modal-header",
          onMousedown: E[8] || (E[8] = (D) => O(g, D))
        }, [
          E[15] || (E[15] = U("span", null, "Debug Log", -1)),
          U("button", {
            class: "close-btn",
            onClick: E[7] || (E[7] = (D) => d.value = !1)
          }, "✖")
        ], 32),
        U("div", qf, [
          (ge(!0), Ee(De, null, Cr(be(n), (D) => (ge(), Ee("div", {
            key: D.id,
            class: "log-entry"
          }, [
            U("pre", null, rn(JSON.stringify(D, null, 2)), 1),
            E[16] || (E[16] = U("hr", null, null, -1))
          ]))), 128))
        ])
      ], 4)) : nn("", !0),
      u.value && f.value ? (ge(), Ee("div", {
        key: 2,
        class: "draggable-modal",
        style: Kt({ left: _.x + "px", top: _.y + "px" })
      }, [
        U("div", {
          class: "modal-header",
          onMousedown: E[10] || (E[10] = (D) => O(_, D))
        }, [
          E[17] || (E[17] = U("span", null, "备注", -1)),
          U("button", {
            class: "close-btn",
            onClick: E[9] || (E[9] = (D) => f.value = !1)
          }, "✖")
        ], 32),
        E[18] || (E[18] = U("div", { class: "modal-content pre-wrap text-center" }, [
          U("div", null, "中文语音库"),
          U("div", null, "zf_xiaobei"),
          U("div", null, "zf_xiaoni"),
          U("div", null, "zf_xiaoxiao"),
          U("div", null, "zf_xiaoyi"),
          U("div", null, "zm_yunjian"),
          U("div", null, "zm_yunxi"),
          U("div", null, "zm_yunxia"),
          U("div", null, "zm_yunyang")
        ], -1))
      ], 4)) : nn("", !0)
    ]));
  }
}), zf = /* @__PURE__ */ su(Gf);
customElements.define("ai-chat-bubble", zf);
