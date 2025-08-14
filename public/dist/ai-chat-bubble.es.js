var Os = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ht(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Q = Os.NODE_ENV !== "production" ? Object.freeze({}) : {}, Jt = Os.NODE_ENV !== "production" ? Object.freeze([]) : [], de = () => {
}, el = () => !1, On = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wn = (e) => e.startsWith("onUpdate:"), ae = Object.assign, Zo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tl = Object.prototype.hasOwnProperty, z = (e, t) => tl.call(e, t), $ = Array.isArray, Ct = (e) => oo(e) === "[object Map]", Ss = (e) => oo(e) === "[object Set]", B = (e) => typeof e == "function", le = (e) => typeof e == "string", wt = (e) => typeof e == "symbol", te = (e) => e !== null && typeof e == "object", Qo = (e) => (te(e) || B(e)) && B(e.then) && B(e.catch), Ds = Object.prototype.toString, oo = (e) => Ds.call(e), er = (e) => oo(e).slice(8, -1), ro = (e) => oo(e) === "[object Object]", tr = (e) => le(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = /* @__PURE__ */ ht(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nl = /* @__PURE__ */ ht(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), so = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ol = /-(\w)/g, Re = so(
  (e) => e.replace(ol, (t, n) => n ? n.toUpperCase() : "")
), rl = /\B([A-Z])/g, Ae = so(
  (e) => e.replace(rl, "-$1").toLowerCase()
), io = so((e) => e.charAt(0).toUpperCase() + e.slice(1)), It = so(
  (e) => e ? `on${io(e)}` : ""
), vt = (e, t) => !Object.is(e, t), Lt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, pn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Ao = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Dr = (e) => {
  const t = le(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ir;
const Sn = () => Ir || (Ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function lo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = le(o) ? al(o) : lo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (le(e) || te(e))
    return e;
}
const sl = /;(?![^(]*\))/g, il = /:([^]+)/, ll = /\/\*[^]*?\*\//g;
function al(e) {
  const t = {};
  return e.replace(ll, "").split(sl).forEach((n) => {
    if (n) {
      const o = n.split(il);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Yt(e) {
  let t = "";
  if (le(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Yt(e[n]);
      o && (t += o + " ");
    }
  else if (te(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const cl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ul = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", dl = /* @__PURE__ */ ht(cl), pl = /* @__PURE__ */ ht(ul), hl = /* @__PURE__ */ ht(fl), gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ml = /* @__PURE__ */ ht(gl);
function Is(e) {
  return !!e || e === "";
}
const Ts = (e) => !!(e && e.__v_isRef === !0), Ro = (e) => le(e) ? e : e == null ? "" : $(e) || te(e) && (e.toString === Ds || !B(e.toString)) ? Ts(e) ? Ro(e.value) : JSON.stringify(e, Cs, 2) : String(e), Cs = (e, t) => Ts(t) ? Cs(e, t.value) : Ct(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[bo(o, s) + " =>"] = r, n),
    {}
  )
} : Ss(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => bo(n))
} : wt(t) ? bo(t) : te(t) && !$(t) && !ro(t) ? String(t) : t, bo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var ne = {};
function Ye(e, ...t) {
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
    } else ne.NODE_ENV !== "production" && Ye("cannot run an inactive effect scope.");
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
function bl() {
  return Ce;
}
let Z;
const yo = /* @__PURE__ */ new WeakSet();
class Vs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, yo.has(this) && (yo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Rs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Tr(this), Ps(this);
    const t = Z, n = Je;
    Z = this, Je = !0;
    try {
      return this.fn();
    } finally {
      ne.NODE_ENV !== "production" && Z !== this && Ye(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ks(this), Z = t, Je = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        rr(t);
      this.deps = this.depsTail = void 0, Tr(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? yo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Po(this) && this.run();
  }
  get dirty() {
    return Po(this);
  }
}
let As = 0, ln, an;
function Rs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = an, an = e;
    return;
  }
  e.next = ln, ln = e;
}
function nr() {
  As++;
}
function or() {
  if (--As > 0)
    return;
  if (an) {
    let t = an;
    for (an = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ln; ) {
    let t = ln;
    for (ln = void 0; t; ) {
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
function Ps(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ks(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), rr(o), yl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function Po(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ms(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ms(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === hn) || (e.globalVersion = hn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Po(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Z, o = Je;
  Z = e, Je = !0;
  try {
    Ps(e);
    const r = e.fn(e._value);
    (t.version === 0 || vt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Z = n, Je = o, ks(e), e.flags &= -3;
  }
}
function rr(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), ne.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      rr(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function yl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Je = !0;
const $s = [];
function Ge() {
  $s.push(Je), Je = !1;
}
function ze() {
  const e = $s.pop();
  Je = e === void 0 ? !0 : e;
}
function Tr(e) {
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
let hn = 0;
class El {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, ne.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Z || !Je || Z === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Z)
      n = this.activeLink = new El(Z, this), Z.deps ? (n.prevDep = Z.depsTail, Z.depsTail.nextDep = n, Z.depsTail = n) : Z.deps = Z.depsTail = n, js(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Z.depsTail, n.nextDep = void 0, Z.depsTail.nextDep = n, Z.depsTail = n, Z.deps === n && (Z.deps = o);
    }
    return ne.NODE_ENV !== "production" && Z.onTrack && Z.onTrack(
      ae(
        {
          effect: Z
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, hn++, this.notify(t);
  }
  notify(t) {
    nr();
    try {
      if (ne.NODE_ENV !== "production")
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
      or();
    }
  }
}
function js(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        js(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), ne.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Jn = /* @__PURE__ */ new WeakMap(), Vt = Symbol(
  ne.NODE_ENV !== "production" ? "Object iterate" : ""
), ko = Symbol(
  ne.NODE_ENV !== "production" ? "Map keys iterate" : ""
), gn = Symbol(
  ne.NODE_ENV !== "production" ? "Array iterate" : ""
);
function fe(e, t, n) {
  if (Je && Z) {
    let o = Jn.get(e);
    o || Jn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new sr()), r.map = o, r.key = n), ne.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function nt(e, t, n, o, r, s) {
  const i = Jn.get(e);
  if (!i) {
    hn++;
    return;
  }
  const l = (a) => {
    a && (ne.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: r,
      oldTarget: s
    }) : a.trigger());
  };
  if (nr(), t === "clear")
    i.forEach(l);
  else {
    const a = $(e), f = a && tr(n);
    if (a && n === "length") {
      const d = Number(o);
      i.forEach((u, h) => {
        (h === "length" || h === gn || !wt(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(gn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(Vt)), Ct(e) && l(i.get(ko)));
          break;
        case "delete":
          a || (l(i.get(Vt)), Ct(e) && l(i.get(ko)));
          break;
        case "set":
          Ct(e) && l(i.get(Vt));
          break;
      }
  }
  or();
}
function vl(e, t) {
  const n = Jn.get(e);
  return n && n.get(t);
}
function Mt(e) {
  const t = G(e);
  return t === e ? t : (fe(t, "iterate", gn), Se(e) ? t : t.map(_e));
}
function ao(e) {
  return fe(e = G(e), "iterate", gn), e;
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Eo(this, Symbol.iterator, _e);
  },
  concat(...e) {
    return Mt(this).concat(
      ...e.map((t) => $(t) ? Mt(t) : t)
    );
  },
  entries() {
    return Eo(this, "entries", (e) => (e[1] = _e(e[1]), e));
  },
  every(e, t) {
    return ct(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ct(this, "filter", e, t, (n) => n.map(_e), arguments);
  },
  find(e, t) {
    return ct(this, "find", e, t, _e, arguments);
  },
  findIndex(e, t) {
    return ct(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ct(this, "findLast", e, t, _e, arguments);
  },
  findLastIndex(e, t) {
    return ct(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ct(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vo(this, "includes", e);
  },
  indexOf(...e) {
    return vo(this, "indexOf", e);
  },
  join(e) {
    return Mt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return vo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ct(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...e) {
    return Qt(this, "push", e);
  },
  reduce(e, ...t) {
    return Cr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cr(this, "reduceRight", e, t);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ct(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qt(this, "splice", e);
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
    return Qt(this, "unshift", e);
  },
  values() {
    return Eo(this, "values", _e);
  }
};
function Eo(e, t, n) {
  const o = ao(e), r = o[t]();
  return o !== e && !Se(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const wl = Array.prototype;
function ct(e, t, n, o, r, s) {
  const i = ao(e), l = i !== e && !Se(e), a = i[t];
  if (a !== wl[t]) {
    const u = a.apply(e, s);
    return l ? _e(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, h) {
    return n.call(this, _e(u), h, e);
  } : n.length > 2 && (f = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const d = a.call(i, f, o);
  return l && r ? r(d) : d;
}
function Cr(e, t, n, o) {
  const r = ao(e);
  let s = n;
  return r !== e && (Se(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, _e(l), a, e);
  }), r[t](s, ...o);
}
function vo(e, t, n) {
  const o = G(e);
  fe(o, "iterate", gn);
  const r = o[t](...n);
  return (r === -1 || r === !1) && mn(n[0]) ? (n[0] = G(n[0]), o[t](...n)) : r;
}
function Qt(e, t, n = []) {
  Ge(), nr();
  const o = G(e)[t].apply(e, n);
  return or(), ze(), o;
}
const xl = /* @__PURE__ */ ht("__proto__,__v_isRef,__isVue"), Fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wt)
);
function Ol(e) {
  wt(e) || (e = String(e));
  const t = G(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class Ls {
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
      return o === (r ? s ? Js : Ws : s ? Ks : Bs).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = $(t);
    if (!r) {
      let a;
      if (i && (a = Nl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ol;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ce(t) ? t : o
    );
    return (wt(n) ? Fs.has(n) : xl(n)) || (r || fe(t, "get", n), s) ? l : ce(l) ? i && tr(n) ? l : l.value : te(l) ? r ? cn(l) : Dn(l) : l;
  }
}
class Hs extends Ls {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const a = qe(s);
      if (!Se(o) && !qe(o) && (s = G(s), o = G(o)), !$(t) && ce(s) && !ce(o))
        return a ? !1 : (s.value = o, !0);
    }
    const i = $(t) && tr(n) ? Number(n) < t.length : z(t, n), l = Reflect.set(
      t,
      n,
      o,
      ce(t) ? t : r
    );
    return t === G(r) && (i ? vt(o, s) && nt(t, "set", n, o, s) : nt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = z(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && nt(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!wt(n) || !Fs.has(n)) && fe(t, "has", n), o;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      $(t) ? "length" : Vt
    ), Reflect.ownKeys(t);
  }
}
class Us extends Ls {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return ne.NODE_ENV !== "production" && Ye(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return ne.NODE_ENV !== "production" && Ye(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Sl = /* @__PURE__ */ new Hs(), Dl = /* @__PURE__ */ new Us(), Il = /* @__PURE__ */ new Hs(!0), Tl = /* @__PURE__ */ new Us(!0), Mo = (e) => e, Rn = (e) => Reflect.getPrototypeOf(e);
function Cl(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = G(r), i = Ct(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = r[e](...o), d = n ? Mo : t ? Yn : _e;
    return !t && fe(
      s,
      "iterate",
      a ? ko : Vt
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
function Pn(e) {
  return function(...t) {
    if (ne.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${io(e)} operation ${n}failed: target is readonly.`,
        G(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vl(e, t) {
  const n = {
    get(r) {
      const s = this.__v_raw, i = G(s), l = G(r);
      e || (vt(r, l) && fe(i, "get", r), fe(i, "get", l));
      const { has: a } = Rn(i), f = t ? Mo : e ? Yn : _e;
      if (a.call(i, r))
        return f(s.get(r));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && fe(G(r), "iterate", Vt), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = G(s), l = G(r);
      return e || (vt(r, l) && fe(i, "has", r), fe(i, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    },
    forEach(r, s) {
      const i = this, l = i.__v_raw, a = G(l), f = t ? Mo : e ? Yn : _e;
      return !e && fe(a, "iterate", Vt), l.forEach((d, u) => r.call(s, f(d), f(u), i));
    }
  };
  return ae(
    n,
    e ? {
      add: Pn("add"),
      set: Pn("set"),
      delete: Pn("delete"),
      clear: Pn("clear")
    } : {
      add(r) {
        !t && !Se(r) && !qe(r) && (r = G(r));
        const s = G(this);
        return Rn(s).has.call(s, r) || (s.add(r), nt(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !Se(s) && !qe(s) && (s = G(s));
        const i = G(this), { has: l, get: a } = Rn(i);
        let f = l.call(i, r);
        f ? ne.NODE_ENV !== "production" && Vr(i, l, r) : (r = G(r), f = l.call(i, r));
        const d = a.call(i, r);
        return i.set(r, s), f ? vt(s, d) && nt(i, "set", r, s, d) : nt(i, "add", r, s), this;
      },
      delete(r) {
        const s = G(this), { has: i, get: l } = Rn(s);
        let a = i.call(s, r);
        a ? ne.NODE_ENV !== "production" && Vr(s, i, r) : (r = G(r), a = i.call(s, r));
        const f = l ? l.call(s, r) : void 0, d = s.delete(r);
        return a && nt(s, "delete", r, void 0, f), d;
      },
      clear() {
        const r = G(this), s = r.size !== 0, i = ne.NODE_ENV !== "production" ? Ct(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return s && nt(
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
    n[r] = Cl(r, e, t);
  }), n;
}
function co(e, t) {
  const n = Vl(e, t);
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    z(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Al = {
  get: /* @__PURE__ */ co(!1, !1)
}, Rl = {
  get: /* @__PURE__ */ co(!1, !0)
}, Pl = {
  get: /* @__PURE__ */ co(!0, !1)
}, kl = {
  get: /* @__PURE__ */ co(!0, !0)
};
function Vr(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const r = er(e);
    Ye(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap();
function Ml(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ml(er(e));
}
function Dn(e) {
  return qe(e) ? e : uo(
    e,
    !1,
    Sl,
    Al,
    Bs
  );
}
function jl(e) {
  return uo(
    e,
    !1,
    Il,
    Rl,
    Ks
  );
}
function cn(e) {
  return uo(
    e,
    !0,
    Dl,
    Pl,
    Ws
  );
}
function rt(e) {
  return uo(
    e,
    !0,
    Tl,
    kl,
    Js
  );
}
function uo(e, t, n, o, r) {
  if (!te(e))
    return ne.NODE_ENV !== "production" && Ye(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = $l(e);
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
function At(e) {
  return qe(e) ? At(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qe(e) {
  return !!(e && e.__v_isReadonly);
}
function Se(e) {
  return !!(e && e.__v_isShallow);
}
function mn(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Fl(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && pn(e, "__v_skip", !0), e;
}
const _e = (e) => te(e) ? Dn(e) : e, Yn = (e) => te(e) ? cn(e) : e;
function ce(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ve(e) {
  return Ll(e, !1);
}
function Ll(e, t) {
  return ce(e) ? e : new Hl(e, t);
}
class Hl {
  constructor(t, n) {
    this.dep = new sr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : G(t), this._value = n ? t : _e(t), this.__v_isShallow = n;
  }
  get value() {
    return ne.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Se(t) || qe(t);
    t = o ? t : G(t), vt(t, n) && (this._rawValue = t, this._value = o ? t : _e(t), ne.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function me(e) {
  return ce(e) ? e.value : e;
}
const Ul = {
  get: (e, t, n) => t === "__v_raw" ? e : me(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ce(r) && !ce(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ys(e) {
  return At(e) ? e : new Proxy(e, Ul);
}
function Bl(e) {
  ne.NODE_ENV !== "production" && !mn(e) && Ye("toRefs() expects a reactive object but received a plain one.");
  const t = $(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Wl(e, n);
  return t;
}
class Kl {
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
    return vl(G(this._object), this._key);
  }
}
function Wl(e, t, n) {
  const o = e[t];
  return ce(o) ? o : new Kl(e, t, n);
}
class Jl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new sr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = hn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Z !== this)
      return Rs(this, !0), !0;
  }
  get value() {
    const t = ne.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Ms(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : ne.NODE_ENV !== "production" && Ye("Write operation failed: computed value is readonly");
  }
}
function Yl(e, t, n = !1) {
  let o, r;
  return B(e) ? o = e : (o = e.get, r = e.set), new Jl(o, r, n);
}
const kn = {}, Gn = /* @__PURE__ */ new WeakMap();
let Tt;
function Gl(e, t = !1, n = Tt) {
  if (n) {
    let o = Gn.get(n);
    o || Gn.set(n, o = []), o.push(e);
  } else ne.NODE_ENV !== "production" && !t && Ye(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function zl(e, t, n = Q) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (w) => {
    (n.onWarn || Ye)(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (w) => r ? w : Se(w) || r === !1 || r === 0 ? dt(w, 1) : dt(w);
  let u, h, m, O, C = !1, J = !1;
  if (ce(e) ? (h = () => e.value, C = Se(e)) : At(e) ? (h = () => d(e), C = !0) : $(e) ? (J = !0, C = e.some((w) => At(w) || Se(w)), h = () => e.map((w) => {
    if (ce(w))
      return w.value;
    if (At(w))
      return d(w);
    if (B(w))
      return a ? a(w, 2) : w();
    ne.NODE_ENV !== "production" && f(w);
  })) : B(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      Ge();
      try {
        m();
      } finally {
        ze();
      }
    }
    const w = Tt;
    Tt = u;
    try {
      return a ? a(e, 3, [O]) : e(O);
    } finally {
      Tt = w;
    }
  } : (h = de, ne.NODE_ENV !== "production" && f(e)), t && r) {
    const w = h, x = r === !0 ? 1 / 0 : r;
    h = () => dt(w(), x);
  }
  const F = bl(), L = () => {
    u.stop(), F && F.active && Zo(F.effects, u);
  };
  if (s && t) {
    const w = t;
    t = (...x) => {
      w(...x), L();
    };
  }
  let R = J ? new Array(e.length).fill(kn) : kn;
  const Y = (w) => {
    if (!(!(u.flags & 1) || !u.dirty && !w))
      if (t) {
        const x = u.run();
        if (r || C || (J ? x.some((j, H) => vt(j, R[H])) : vt(x, R))) {
          m && m();
          const j = Tt;
          Tt = u;
          try {
            const H = [
              x,
              // pass undefined as the old value when it's changed for the first time
              R === kn ? void 0 : J && R[0] === kn ? [] : R,
              O
            ];
            R = x, a ? a(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            Tt = j;
          }
        }
      } else
        u.run();
  };
  return l && l(Y), u = new Vs(h), u.scheduler = i ? () => i(Y, !1) : Y, O = (w) => Gl(w, !1, u), m = u.onStop = () => {
    const w = Gn.get(u);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const x of w) x();
      Gn.delete(u);
    }
  }, ne.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? Y(!0) : R = u.run() : i ? i(Y.bind(null, !0), !0) : u.run(), L.pause = u.pause.bind(u), L.resume = u.resume.bind(u), L.stop = L, L;
}
function dt(e, t = 1 / 0, n) {
  if (t <= 0 || !te(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ce(e))
    dt(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      dt(e[o], t, n);
  else if (Ss(e) || Ct(e))
    e.forEach((o) => {
      dt(o, t, n);
    });
  else if (ro(e)) {
    for (const o in e)
      dt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && dt(e[o], t, n);
  }
  return e;
}
var g = {};
const Rt = [];
function $n(e) {
  Rt.push(e);
}
function jn() {
  Rt.pop();
}
let No = !1;
function T(e, ...t) {
  if (No) return;
  No = !0, Ge();
  const n = Rt.length ? Rt[Rt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = ql();
  if (o)
    Xt(
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
          ({ vnode: s }) => `at <${_o(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...Xl(r)), console.warn(...s);
  }
  ze(), No = !1;
}
function ql() {
  let e = Rt[Rt.length - 1];
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
function Xl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Zl(n));
  }), t;
}
function Zl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${_o(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...Ql(e.props), s] : [r + s];
}
function Ql(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Gs(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Gs(e, t, n) {
  return le(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ce(t) ? (t = Gs(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : B(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
const ir = {
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
function Xt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    In(r, t, n);
  }
}
function lt(e, t, n, o) {
  if (B(e)) {
    const r = Xt(e, t, n, o);
    return r && Qo(r) && r.catch((s) => {
      In(s, t, n);
    }), r;
  }
  if ($(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(lt(e[s], t, n, o));
    return r;
  } else g.NODE_ENV !== "production" && T(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function In(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || Q;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = g.NODE_ENV !== "production" ? ir[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      Ge(), Xt(s, null, 10, [
        e,
        a,
        f
      ]), ze();
      return;
    }
  }
  ea(e, n, r, o, i);
}
function ea(e, t, n, o = !0, r = !1) {
  if (g.NODE_ENV !== "production") {
    const s = ir[t];
    if (n && $n(n), T(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && jn(), o)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const xe = [];
let tt = -1;
const Gt = [];
let bt = null, Ht = 0;
const zs = /* @__PURE__ */ Promise.resolve();
let zn = null;
const ta = 100;
function Wt(e) {
  const t = zn || zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function na(e) {
  let t = tt + 1, n = xe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = xe[o], s = _n(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function fo(e) {
  if (!(e.flags & 1)) {
    const t = _n(e), n = xe[xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _n(n) ? xe.push(e) : xe.splice(na(t), 0, e), e.flags |= 1, qs();
  }
}
function qs() {
  zn || (zn = zs.then(Qs));
}
function Xs(e) {
  $(e) ? Gt.push(...e) : bt && e.id === -1 ? bt.splice(Ht + 1, 0, e) : e.flags & 1 || (Gt.push(e), e.flags |= 1), qs();
}
function Ar(e, t, n = tt + 1) {
  for (g.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < xe.length; n++) {
    const o = xe[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || g.NODE_ENV !== "production" && lr(t, o))
        continue;
      xe.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Zs(e) {
  if (Gt.length) {
    const t = [...new Set(Gt)].sort(
      (n, o) => _n(n) - _n(o)
    );
    if (Gt.length = 0, bt) {
      bt.push(...t);
      return;
    }
    for (bt = t, g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ht = 0; Ht < bt.length; Ht++) {
      const n = bt[Ht];
      g.NODE_ENV !== "production" && lr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    bt = null, Ht = 0;
  }
}
const _n = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qs(e) {
  g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = g.NODE_ENV !== "production" ? (n) => lr(e, n) : de;
  try {
    for (tt = 0; tt < xe.length; tt++) {
      const n = xe[tt];
      if (n && !(n.flags & 8)) {
        if (g.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Xt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; tt < xe.length; tt++) {
      const n = xe[tt];
      n && (n.flags &= -2);
    }
    tt = -1, xe.length = 0, Zs(e), zn = null, (xe.length || Gt.length) && Qs(e);
  }
}
function lr(e, t) {
  const n = e.get(t) || 0;
  if (n > ta) {
    const o = t.i, r = o && Ri(o.type);
    return In(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let st = !1;
const Fn = /* @__PURE__ */ new Map();
g.NODE_ENV !== "production" && (Sn().__VUE_HMR_RUNTIME__ = {
  createRecord: wo(ei),
  rerender: wo(sa),
  reload: wo(ia)
});
const kt = /* @__PURE__ */ new Map();
function oa(e) {
  const t = e.type.__hmrId;
  let n = kt.get(t);
  n || (ei(t, e.type), n = kt.get(t)), n.instances.add(e);
}
function ra(e) {
  kt.get(e.type.__hmrId).instances.delete(e);
}
function ei(e, t) {
  return kt.has(e) ? !1 : (kt.set(e, {
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return Pi(e) ? e.__vccOpts : e;
}
function sa(e, t) {
  const n = kt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, qn(o.type).render = t), o.renderCache = [], st = !0, o.update(), st = !1;
  }));
}
function ia(e, t) {
  const n = kt.get(e);
  if (!n) return;
  t = qn(t), Rr(n.initialDef, t);
  const o = [...n.instances];
  for (let r = 0; r < o.length; r++) {
    const s = o[r], i = qn(s.type);
    let l = Fn.get(i);
    l || (i !== n.initialDef && Rr(i, t), Fn.set(i, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? fo(() => {
      st = !0, s.parent.update(), st = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Xs(() => {
    Fn.clear();
  });
}
function Rr(e, t) {
  ae(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function wo(e) {
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
let ot, on = [], $o = !1;
function Tn(e, ...t) {
  ot ? ot.emit(e, ...t) : $o || on.push({ event: e, args: t });
}
function ti(e, t) {
  var n, o;
  ot = e, ot ? (ot.enabled = !0, on.forEach(({ event: r, args: s }) => ot.emit(r, ...s)), on = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ti(s, t);
  }), setTimeout(() => {
    ot || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $o = !0, on = []);
  }, 3e3)) : ($o = !0, on = []);
}
function la(e, t) {
  Tn("app:init", e, t, {
    Fragment: Ke,
    Text: Cn,
    Comment: Fe,
    Static: Un
  });
}
function aa(e) {
  Tn("app:unmount", e);
}
const ca = /* @__PURE__ */ ar(
  "component:added"
  /* COMPONENT_ADDED */
), ni = /* @__PURE__ */ ar(
  "component:updated"
  /* COMPONENT_UPDATED */
), ua = /* @__PURE__ */ ar(
  "component:removed"
  /* COMPONENT_REMOVED */
), fa = (e) => {
  ot && typeof ot.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ot.cleanupBuffer(e) && ua(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ar(e) {
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
const da = /* @__PURE__ */ oi(
  "perf:start"
  /* PERFORMANCE_START */
), pa = /* @__PURE__ */ oi(
  "perf:end"
  /* PERFORMANCE_END */
);
function oi(e) {
  return (t, n, o) => {
    Tn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ha(e, t, n) {
  Tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Oe = null, ri = null;
function Xn(e) {
  const t = Oe;
  return Oe = e, ri = e && e.type.__scopeId || null, t;
}
function ga(e, t = Oe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Wr(-1);
    const s = Xn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Xn(s), o._d && Wr(1);
    }
    return g.NODE_ENV !== "production" && ni(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function si(e) {
  nl(e) && T("Do not use built-in directive ids as custom directive id: " + e);
}
function ma(e, t) {
  if (Oe === null)
    return g.NODE_ENV !== "production" && T("withDirectives can only be used inside render functions."), e;
  const n = mo(Oe), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, l, a = Q] = t[r];
    s && (B(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && dt(i), o.push({
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
    a && (Ge(), lt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), ze());
  }
}
const _a = Symbol("_vte"), ba = (e) => e.__isTeleport;
function cr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ii(e, t) {
  return B(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ae({ name: e.name }, t, { setup: e })
  ) : e;
}
function li(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ya = /* @__PURE__ */ new WeakSet();
function un(e, t, n, o, r = !1) {
  if ($(e)) {
    e.forEach(
      (O, C) => un(
        O,
        t && ($(t) ? t[C] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (fn(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && un(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? mo(o.component) : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (g.NODE_ENV !== "production" && !l) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === Q ? l.refs = {} : l.refs, u = l.setupState, h = G(u), m = u === Q ? () => !1 : (O) => g.NODE_ENV !== "production" && (z(h, O) && !ce(h[O]) && T(
    `Template ref "${O}" used on a non-ref value. It will not work in the production build.`
  ), ya.has(h[O])) ? !1 : z(h, O);
  if (f != null && f !== a && (le(f) ? (d[f] = null, m(f) && (u[f] = null)) : ce(f) && (f.value = null)), B(a))
    Xt(a, l, 12, [i, d]);
  else {
    const O = le(a), C = ce(a);
    if (O || C) {
      const J = () => {
        if (e.f) {
          const F = O ? m(a) ? u[a] : d[a] : a.value;
          r ? $(F) && Zo(F, s) : $(F) ? F.includes(s) || F.push(s) : O ? (d[a] = [s], m(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else O ? (d[a] = i, m(a) && (u[a] = i)) : C ? (a.value = i, e.k && (d[e.k] = i)) : g.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (J.id = -1, Me(J, n)) : J();
    } else g.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
  }
}
Sn().requestIdleCallback;
Sn().cancelIdleCallback;
const fn = (e) => !!e.type.__asyncLoader, ur = (e) => e.type.__isKeepAlive;
function Ea(e, t) {
  ai(e, "a", t);
}
function va(e, t) {
  ai(e, "da", t);
}
function ai(e, t, n = be) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (po(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      ur(r.parent.vnode) && Na(o, t, n, r), r = r.parent;
  }
}
function Na(e, t, n, o) {
  const r = po(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  dr(() => {
    Zo(o[t], r);
  }, n);
}
function po(e, t, n = be, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      Ge();
      const l = Vn(n), a = lt(t, n, e, i);
      return l(), ze(), a;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (g.NODE_ENV !== "production") {
    const r = It(ir[e].replace(/ hook$/, ""));
    T(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const gt = (e) => (t, n = be) => {
  (!yn || e === "sp") && po(e, (...o) => t(...o), n);
}, wa = gt("bm"), fr = gt("m"), xa = gt(
  "bu"
), Oa = gt("u"), Sa = gt(
  "bum"
), dr = gt("um"), Da = gt(
  "sp"
), Ia = gt("rtg"), Ta = gt("rtc");
function Ca(e, t = be) {
  po("ec", e, t);
}
const Va = Symbol.for("v-ndc");
function Aa(e, t, n, o) {
  let r;
  const s = n, i = $(e);
  if (i || le(e)) {
    const l = i && At(e);
    let a = !1, f = !1;
    l && (a = !Se(e), f = qe(e), e = ao(e)), r = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(
        a ? f ? Yn(_e(e[d])) : _e(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    g.NODE_ENV !== "production" && !Number.isInteger(e) && T(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, s);
  } else if (te(e))
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
const jo = (e) => e ? Vi(e) ? mo(e) : jo(e.parent) : null, Pt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ae(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => g.NODE_ENV !== "production" ? rt(e.props) : e.props,
    $attrs: (e) => g.NODE_ENV !== "production" ? rt(e.attrs) : e.attrs,
    $slots: (e) => g.NODE_ENV !== "production" ? rt(e.slots) : e.slots,
    $refs: (e) => g.NODE_ENV !== "production" ? rt(e.refs) : e.refs,
    $parent: (e) => jo(e.parent),
    $root: (e) => jo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Wt.bind(e.proxy)),
    $watch: (e) => fc.bind(e)
  })
), pr = (e) => e === "_" || e === "$", xo = (e, t) => e !== Q && !e.__isScriptSetup && z(e, t), ci = {
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
        if (xo(o, t))
          return i[t] = 1, o[t];
        if (r !== Q && z(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && z(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== Q && z(n, t))
          return i[t] = 4, n[t];
        Fo && (i[t] = 0);
      }
    }
    const d = Pt[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), g.NODE_ENV !== "production" && eo()) : g.NODE_ENV !== "production" && t === "$slots" && fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== Q && z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, z(h, t)
    )
      return h[t];
    g.NODE_ENV !== "production" && Oe && (!le(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== Q && pr(t[0]) && z(r, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Oe && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return xo(r, t) ? (r[t] = n, !0) : g.NODE_ENV !== "production" && r.__isScriptSetup && z(r, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== Q && z(o, t) ? (o[t] = n, !0) : z(e.props, t) ? (g.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (g.NODE_ENV !== "production" && T(
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
    return !!n[i] || e !== Q && z(e, i) || xo(t, i) || (l = s[0]) && z(l, i) || z(o, i) || z(Pt, i) || z(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : z(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
g.NODE_ENV !== "production" && (ci.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ra(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Pt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Pt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: de
    });
  }), t;
}
function Pa(e) {
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
function ka(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (pr(o[0])) {
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
function Pr(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ma() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? T(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Fo = !0;
function $a(e) {
  const t = fi(e), n = e.proxy, o = e.ctx;
  Fo = !1, t.beforeCreate && kr(t.beforeCreate, e, "bc");
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
    updated: O,
    activated: C,
    deactivated: J,
    beforeDestroy: F,
    beforeUnmount: L,
    destroyed: R,
    unmounted: Y,
    render: w,
    renderTracked: x,
    renderTriggered: j,
    errorCaptured: H,
    serverPrefetch: k,
    // public API
    expose: X,
    inheritAttrs: he,
    // assets
    components: re,
    directives: se,
    filters: De
  } = t, ye = g.NODE_ENV !== "production" ? Ma() : null;
  if (g.NODE_ENV !== "production") {
    const [b] = e.propsOptions;
    if (b)
      for (const P in b)
        ye("Props", P);
  }
  if (f && ja(f, o, ye), i)
    for (const b in i) {
      const P = i[b];
      B(P) ? (g.NODE_ENV !== "production" ? Object.defineProperty(o, b, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[b] = P.bind(n), g.NODE_ENV !== "production" && ye("Methods", b)) : g.NODE_ENV !== "production" && T(
        `Method "${b}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    g.NODE_ENV !== "production" && !B(r) && T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const b = r.call(n, n);
    if (g.NODE_ENV !== "production" && Qo(b) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !te(b))
      g.NODE_ENV !== "production" && T("data() should return an object.");
    else if (e.data = Dn(b), g.NODE_ENV !== "production")
      for (const P in b)
        ye("Data", P), pr(P[0]) || Object.defineProperty(o, P, {
          configurable: !0,
          enumerable: !0,
          get: () => b[P],
          set: de
        });
  }
  if (Fo = !0, s)
    for (const b in s) {
      const P = s[b], pe = B(P) ? P.bind(n, n) : B(P.get) ? P.get.bind(n, n) : de;
      g.NODE_ENV !== "production" && pe === de && T(`Computed property "${b}" has no getter.`);
      const Pe = !B(P) && B(P.set) ? P.set.bind(n) : g.NODE_ENV !== "production" ? () => {
        T(
          `Write operation failed: computed property "${b}" is readonly.`
        );
      } : de, at = yr({
        get: pe,
        set: Pe
      });
      Object.defineProperty(o, b, {
        enumerable: !0,
        configurable: !0,
        get: () => at.value,
        set: (ke) => at.value = ke
      }), g.NODE_ENV !== "production" && ye("Computed", b);
    }
  if (l)
    for (const b in l)
      ui(l[b], o, n, b);
  if (a) {
    const b = B(a) ? a.call(n) : a;
    Reflect.ownKeys(b).forEach((P) => {
      Ka(P, b[P]);
    });
  }
  d && kr(d, e, "c");
  function S(b, P) {
    $(P) ? P.forEach((pe) => b(pe.bind(n))) : P && b(P.bind(n));
  }
  if (S(wa, u), S(fr, h), S(xa, m), S(Oa, O), S(Ea, C), S(va, J), S(Ca, H), S(Ta, x), S(Ia, j), S(Sa, L), S(dr, Y), S(Da, k), $(X))
    if (X.length) {
      const b = e.exposed || (e.exposed = {});
      X.forEach((P) => {
        Object.defineProperty(b, P, {
          get: () => n[P],
          set: (pe) => n[P] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === de && (e.render = w), he != null && (e.inheritAttrs = he), re && (e.components = re), se && (e.directives = se), k && li(e);
}
function ja(e, t, n = de) {
  $(e) && (e = Lo(e));
  for (const o in e) {
    const r = e[o];
    let s;
    te(r) ? "default" in r ? s = Ln(
      r.from || o,
      r.default,
      !0
    ) : s = Ln(r.from || o) : s = Ln(r), ce(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, g.NODE_ENV !== "production" && n("Inject", o);
  }
}
function kr(e, t, n) {
  lt(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ui(e, t, n, o) {
  let r = o.includes(".") ? wi(n, o) : () => n[o];
  if (le(e)) {
    const s = t[e];
    B(s) ? pt(r, s) : g.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e}"`, s);
  } else if (B(e))
    pt(r, e.bind(n));
  else if (te(e))
    if ($(e))
      e.forEach((s) => ui(s, t, n, o));
    else {
      const s = B(e.handler) ? e.handler.bind(n) : t[e.handler];
      B(s) ? pt(r, s, e) : g.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else g.NODE_ENV !== "production" && T(`Invalid watch option: "${o}"`, e);
}
function fi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !r.length && !n && !o ? a = t : (a = {}, r.length && r.forEach(
    (f) => Zn(a, f, i, !0)
  ), Zn(a, t, i)), te(t) && s.set(t, a), a;
}
function Zn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Zn(e, s, n, !0), r && r.forEach(
    (i) => Zn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      g.NODE_ENV !== "production" && T(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Fa[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Fa = {
  data: Mr,
  props: $r,
  emits: $r,
  // objects
  methods: rn,
  computed: rn,
  // lifecycle
  beforeCreate: we,
  created: we,
  beforeMount: we,
  mounted: we,
  beforeUpdate: we,
  updated: we,
  beforeDestroy: we,
  beforeUnmount: we,
  destroyed: we,
  unmounted: we,
  activated: we,
  deactivated: we,
  errorCaptured: we,
  serverPrefetch: we,
  // assets
  components: rn,
  directives: rn,
  // watch
  watch: Ha,
  // provide / inject
  provide: Mr,
  inject: La
};
function Mr(e, t) {
  return t ? e ? function() {
    return ae(
      B(e) ? e.call(this, this) : e,
      B(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function La(e, t) {
  return rn(Lo(e), Lo(t));
}
function Lo(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function we(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rn(e, t) {
  return e ? ae(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $r(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ae(
    /* @__PURE__ */ Object.create(null),
    Pr(e),
    Pr(t ?? {})
  ) : t;
}
function Ha(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ae(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = we(e[o], t[o]);
  return n;
}
function di() {
  return {
    app: null,
    config: {
      isNativeTag: el,
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
let Ua = 0;
function Ba(e, t) {
  return function(o, r = null) {
    B(o) || (o = ae({}, o)), r != null && !te(r) && (g.NODE_ENV !== "production" && T("root props passed to app.mount() must be an object."), r = null);
    const s = di(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const f = s.app = {
      _uid: Ua++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: zr,
      get config() {
        return s.config;
      },
      set config(d) {
        g.NODE_ENV !== "production" && T(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return i.has(d) ? g.NODE_ENV !== "production" && T("Plugin has already been applied to target app.") : d && B(d.install) ? (i.add(d), d.install(f, ...u)) : B(d) ? (i.add(d), d(f, ...u)) : g.NODE_ENV !== "production" && T(
          'A plugin must either be a function or an object with an "install" function.'
        ), f;
      },
      mixin(d) {
        return s.mixins.includes(d) ? g.NODE_ENV !== "production" && T(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), f;
      },
      component(d, u) {
        return g.NODE_ENV !== "production" && Jo(d, s.config), u ? (g.NODE_ENV !== "production" && s.components[d] && T(`Component "${d}" has already been registered in target app.`), s.components[d] = u, f) : s.components[d];
      },
      directive(d, u) {
        return g.NODE_ENV !== "production" && si(d), u ? (g.NODE_ENV !== "production" && s.directives[d] && T(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, f) : s.directives[d];
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
          const m = f._ceVNode || it(o, r);
          return m.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), g.NODE_ENV !== "production" && (s.reload = () => {
            const O = Nt(m);
            O.el = null, e(O, d, h);
          }), e(m, d, h), a = !0, f._container = d, d.__vue_app__ = f, g.NODE_ENV !== "production" && (f._instance = m.component, la(f, zr)), mo(m.component);
        }
      },
      onUnmount(d) {
        g.NODE_ENV !== "production" && typeof d != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (lt(
          l,
          f._instance,
          16
        ), e(null, f._container), g.NODE_ENV !== "production" && (f._instance = null, aa(f)), delete f._container.__vue_app__) : g.NODE_ENV !== "production" && T("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return g.NODE_ENV !== "production" && d in s.provides && (z(s.provides, d) ? T(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : T(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = u, f;
      },
      runWithContext(d) {
        const u = zt;
        zt = f;
        try {
          return d();
        } finally {
          zt = u;
        }
      }
    };
    return f;
  };
}
let zt = null;
function Ka(e, t) {
  if (!be)
    g.NODE_ENV !== "production" && T("provide() can only be used inside setup().");
  else {
    let n = be.provides;
    const o = be.parent && be.parent.provides;
    o === n && (n = be.provides = Object.create(o)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const o = br();
  if (o || zt) {
    let r = zt ? zt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && B(t) ? t.call(o && o.proxy) : t;
    g.NODE_ENV !== "production" && T(`injection "${String(e)}" not found.`);
  } else g.NODE_ENV !== "production" && T("inject() can only be used inside setup() or functional components.");
}
const pi = {}, hi = () => Object.create(pi), gi = (e) => Object.getPrototypeOf(e) === pi;
function Wa(e, t, n, o = !1) {
  const r = {}, s = hi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mi(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  g.NODE_ENV !== "production" && bi(t || {}, r, e), n ? e.props = o ? r : jl(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Ja(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ya(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = G(r), [a] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(g.NODE_ENV !== "production" && Ja(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let h = d[u];
        if (ho(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (a)
          if (z(s, h))
            m !== s[h] && (s[h] = m, f = !0);
          else {
            const O = Re(h);
            r[O] = Ho(
              a,
              l,
              O,
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
    mi(e, t, r, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !z(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Ae(u)) === u || !z(t, d))) && (a ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (r[u] = Ho(
        a,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete r[u]);
    if (s !== l)
      for (const u in s)
        (!t || !z(t, u)) && (delete s[u], f = !0);
  }
  f && nt(e.attrs, "set", ""), g.NODE_ENV !== "production" && bi(t || {}, r, e);
}
function mi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (sn(a))
        continue;
      const f = t[a];
      let d;
      r && z(r, d = Re(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : ho(e.emitsOptions, a) || (!(a in o) || f !== o[a]) && (o[a] = f, i = !0);
    }
  if (s) {
    const a = G(n), f = l || Q;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = Ho(
        r,
        a,
        u,
        f[u],
        e,
        !z(f, u)
      );
    }
  }
  return i;
}
function Ho(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = z(i, "default");
    if (l && o === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && B(a)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const d = Vn(r);
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
    ] && (o === "" || o === Ae(n)) && (o = !0));
  }
  return o;
}
const Ga = /* @__PURE__ */ new WeakMap();
function _i(e, t, n = !1) {
  const o = n ? Ga : t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let a = !1;
  if (!B(e)) {
    const d = (u) => {
      a = !0;
      const [h, m] = _i(u, t, !0);
      ae(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return te(e) && o.set(e, Jt), Jt;
  if ($(s))
    for (let d = 0; d < s.length; d++) {
      g.NODE_ENV !== "production" && !le(s[d]) && T("props must be strings when using array syntax.", s[d]);
      const u = Re(s[d]);
      jr(u) && (i[u] = Q);
    }
  else if (s) {
    g.NODE_ENV !== "production" && !te(s) && T("invalid props options", s);
    for (const d in s) {
      const u = Re(d);
      if (jr(u)) {
        const h = s[d], m = i[u] = $(h) || B(h) ? { type: h } : ae({}, h), O = m.type;
        let C = !1, J = !0;
        if ($(O))
          for (let F = 0; F < O.length; ++F) {
            const L = O[F], R = B(L) && L.name;
            if (R === "Boolean") {
              C = !0;
              break;
            } else R === "String" && (J = !1);
          }
        else
          C = B(O) && O.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = C, m[
          1
          /* shouldCastTrue */
        ] = J, (C || z(m, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return te(e) && o.set(e, f), f;
}
function jr(e) {
  return e[0] !== "$" && !sn(e) ? !0 : (g.NODE_ENV !== "production" && T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function za(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function bi(e, t, n) {
  const o = G(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => Re(i));
  for (const i in r) {
    let l = r[i];
    l != null && qa(
      i,
      o[i],
      l,
      g.NODE_ENV !== "production" ? rt(o) : o,
      !s.includes(i)
    );
  }
}
function qa(e, t, n, o, r) {
  const { type: s, required: i, validator: l, skipCheck: a } = n;
  if (i && r) {
    T('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !a) {
      let f = !1;
      const d = $(s) ? s : [s], u = [];
      for (let h = 0; h < d.length && !f; h++) {
        const { valid: m, expectedType: O } = Za(t, d[h]);
        u.push(O || ""), f = m;
      }
      if (!f) {
        T(Qa(e, t, u));
        return;
      }
    }
    l && !l(t, o) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Xa = /* @__PURE__ */ ht(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Za(e, t) {
  let n;
  const o = za(t);
  if (o === "null")
    n = e === null;
  else if (Xa(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else o === "Object" ? n = te(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Qa(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(io).join(" | ")}`;
  const r = n[0], s = er(t), i = Fr(t, r), l = Fr(t, s);
  return n.length === 1 && Lr(r) && !ec(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Lr(s) && (o += `with value ${l}.`), o;
}
function Fr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Lr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function ec(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const hr = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", gr = (e) => $(e) ? e.map(We) : [We(e)], tc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ga((...r) => (g.NODE_ENV !== "production" && be && !(n === null && Oe) && !(n && n.root !== be.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), gr(t(...r))), n);
  return o._c = !1, o;
}, yi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (hr(r)) continue;
    const s = e[r];
    if (B(s))
      t[r] = tc(r, s, o);
    else if (s != null) {
      g.NODE_ENV !== "production" && T(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = gr(s);
      t[r] = () => i;
    }
  }
}, Ei = (e, t) => {
  g.NODE_ENV !== "production" && !ur(e.vnode) && T(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = gr(t);
  e.slots.default = () => n;
}, Uo = (e, t, n) => {
  for (const o in t)
    (n || !hr(o)) && (e[o] = t[o]);
}, nc = (e, t, n) => {
  const o = e.slots = hi();
  if (e.vnode.shapeFlag & 32) {
    const r = t.__;
    r && pn(o, "__", r, !0);
    const s = t._;
    s ? (Uo(o, t, n), n && pn(o, "_", s, !0)) : yi(t, o);
  } else t && Ei(e, t);
}, oc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = Q;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? g.NODE_ENV !== "production" && st ? (Uo(r, t, n), nt(e, "set", "$slots")) : n && l === 1 ? s = !1 : Uo(r, t, n) : (s = !t.$stable, yi(t, r)), i = t;
  } else t && (Ei(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !hr(l) && i[l] == null && delete r[l];
};
let en, Et;
function $t(e, t) {
  e.appContext.config.performance && Qn() && Et.mark(`vue-${t}-${e.uid}`), g.NODE_ENV !== "production" && da(e, t, Qn() ? Et.now() : Date.now());
}
function jt(e, t) {
  if (e.appContext.config.performance && Qn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Et.mark(o), Et.measure(
      `<${_o(e, e.type)}> ${t}`,
      n,
      o
    ), Et.clearMarks(n), Et.clearMarks(o);
  }
  g.NODE_ENV !== "production" && pa(e, t, Qn() ? Et.now() : Date.now());
}
function Qn() {
  return en !== void 0 || (typeof window < "u" && window.performance ? (en = !0, Et = window.performance) : en = !1), en;
}
function rc() {
  const e = [];
  if (g.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Me = bc;
function sc(e) {
  return ic(e);
}
function ic(e, t) {
  rc();
  const n = Sn();
  n.__VUE__ = !0, g.NODE_ENV !== "production" && ti(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    setScopeId: m = de,
    insertStaticContent: O
  } = e, C = (c, p, _, v = null, y = null, E = null, V = void 0, I = null, D = g.NODE_ENV !== "production" && st ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !tn(c, p) && (v = Le(c), W(c, y, E, !0), c = null), p.patchFlag === -2 && (D = !1, p.dynamicChildren = null);
    const { type: N, ref: U, shapeFlag: A } = p;
    switch (N) {
      case Cn:
        J(c, p, _, v);
        break;
      case Fe:
        F(c, p, _, v);
        break;
      case Un:
        c == null ? L(p, _, v, V) : g.NODE_ENV !== "production" && R(c, p, _, V);
        break;
      case Ke:
        se(
          c,
          p,
          _,
          v,
          y,
          E,
          V,
          I,
          D
        );
        break;
      default:
        A & 1 ? x(
          c,
          p,
          _,
          v,
          y,
          E,
          V,
          I,
          D
        ) : A & 6 ? De(
          c,
          p,
          _,
          v,
          y,
          E,
          V,
          I,
          D
        ) : A & 64 || A & 128 ? N.process(
          c,
          p,
          _,
          v,
          y,
          E,
          V,
          I,
          D,
          xt
        ) : g.NODE_ENV !== "production" && T("Invalid VNode type:", N, `(${typeof N})`);
    }
    U != null && y ? un(U, c && c.ref, E, p || c, !p) : U == null && c && c.ref != null && un(c.ref, null, E, c, !0);
  }, J = (c, p, _, v) => {
    if (c == null)
      o(
        p.el = l(p.children),
        _,
        v
      );
    else {
      const y = p.el = c.el;
      p.children !== c.children && f(y, p.children);
    }
  }, F = (c, p, _, v) => {
    c == null ? o(
      p.el = a(p.children || ""),
      _,
      v
    ) : p.el = c.el;
  }, L = (c, p, _, v) => {
    [c.el, c.anchor] = O(
      c.children,
      p,
      _,
      v,
      c.el,
      c.anchor
    );
  }, R = (c, p, _, v) => {
    if (p.children !== c.children) {
      const y = h(c.anchor);
      w(c), [p.el, p.anchor] = O(
        p.children,
        _,
        y,
        v
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, Y = ({ el: c, anchor: p }, _, v) => {
    let y;
    for (; c && c !== p; )
      y = h(c), o(c, _, v), c = y;
    o(p, _, v);
  }, w = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = h(c), r(c), c = _;
    r(p);
  }, x = (c, p, _, v, y, E, V, I, D) => {
    p.type === "svg" ? V = "svg" : p.type === "math" && (V = "mathml"), c == null ? j(
      p,
      _,
      v,
      y,
      E,
      V,
      I,
      D
    ) : X(
      c,
      p,
      y,
      E,
      V,
      I,
      D
    );
  }, j = (c, p, _, v, y, E, V, I) => {
    let D, N;
    const { props: U, shapeFlag: A, transition: M, dirs: K } = c;
    if (D = c.el = i(
      c.type,
      E,
      U && U.is,
      U
    ), A & 8 ? d(D, c.children) : A & 16 && k(
      c.children,
      D,
      null,
      v,
      y,
      Oo(c, E),
      V,
      I
    ), K && Ot(c, null, v, "created"), H(D, c, c.scopeId, V, v), U) {
      for (const oe in U)
        oe !== "value" && !sn(oe) && s(D, oe, null, U[oe], E, v);
      "value" in U && s(D, "value", null, U.value, E), (N = U.onVnodeBeforeMount) && et(N, v, c);
    }
    g.NODE_ENV !== "production" && (pn(D, "__vnode", c, !0), pn(D, "__vueParentComponent", v, !0)), K && Ot(c, null, v, "beforeMount");
    const q = lc(y, M);
    q && M.beforeEnter(D), o(D, p, _), ((N = U && U.onVnodeMounted) || q || K) && Me(() => {
      N && et(N, v, c), q && M.enter(D), K && Ot(c, null, v, "mounted");
    }, y);
  }, H = (c, p, _, v, y) => {
    if (_ && m(c, _), v)
      for (let E = 0; E < v.length; E++)
        m(c, v[E]);
    if (y) {
      let E = y.subTree;
      if (g.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = mr(E.children) || E), p === E || Si(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const V = y.vnode;
        H(
          c,
          V,
          V.scopeId,
          V.slotScopeIds,
          y.parent
        );
      }
    }
  }, k = (c, p, _, v, y, E, V, I, D = 0) => {
    for (let N = D; N < c.length; N++) {
      const U = c[N] = I ? yt(c[N]) : We(c[N]);
      C(
        null,
        U,
        p,
        _,
        v,
        y,
        E,
        V,
        I
      );
    }
  }, X = (c, p, _, v, y, E, V) => {
    const I = p.el = c.el;
    g.NODE_ENV !== "production" && (I.__vnode = p);
    let { patchFlag: D, dynamicChildren: N, dirs: U } = p;
    D |= c.patchFlag & 16;
    const A = c.props || Q, M = p.props || Q;
    let K;
    if (_ && St(_, !1), (K = M.onVnodeBeforeUpdate) && et(K, _, p, c), U && Ot(p, c, _, "beforeUpdate"), _ && St(_, !0), g.NODE_ENV !== "production" && st && (D = 0, V = !1, N = null), (A.innerHTML && M.innerHTML == null || A.textContent && M.textContent == null) && d(I, ""), N ? (he(
      c.dynamicChildren,
      N,
      I,
      _,
      v,
      Oo(p, y),
      E
    ), g.NODE_ENV !== "production" && Hn(c, p)) : V || pe(
      c,
      p,
      I,
      null,
      _,
      v,
      Oo(p, y),
      E,
      !1
    ), D > 0) {
      if (D & 16)
        re(I, A, M, _, y);
      else if (D & 2 && A.class !== M.class && s(I, "class", null, M.class, y), D & 4 && s(I, "style", A.style, M.style, y), D & 8) {
        const q = p.dynamicProps;
        for (let oe = 0; oe < q.length; oe++) {
          const ee = q[oe], Ie = A[ee], Te = M[ee];
          (Te !== Ie || ee === "value") && s(I, ee, Ie, Te, y, _);
        }
      }
      D & 1 && c.children !== p.children && d(I, p.children);
    } else !V && N == null && re(I, A, M, _, y);
    ((K = M.onVnodeUpdated) || U) && Me(() => {
      K && et(K, _, p, c), U && Ot(p, c, _, "updated");
    }, v);
  }, he = (c, p, _, v, y, E, V) => {
    for (let I = 0; I < p.length; I++) {
      const D = c[I], N = p[I], U = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tn(D, N) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      C(
        D,
        N,
        U,
        null,
        v,
        y,
        E,
        V,
        !0
      );
    }
  }, re = (c, p, _, v, y) => {
    if (p !== _) {
      if (p !== Q)
        for (const E in p)
          !sn(E) && !(E in _) && s(
            c,
            E,
            p[E],
            null,
            y,
            v
          );
      for (const E in _) {
        if (sn(E)) continue;
        const V = _[E], I = p[E];
        V !== I && E !== "value" && s(c, E, I, V, y, v);
      }
      "value" in _ && s(c, "value", p.value, _.value, y);
    }
  }, se = (c, p, _, v, y, E, V, I, D) => {
    const N = p.el = c ? c.el : l(""), U = p.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: M, slotScopeIds: K } = p;
    g.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (st || A & 2048) && (A = 0, D = !1, M = null), K && (I = I ? I.concat(K) : K), c == null ? (o(N, _, v), o(U, _, v), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      U,
      y,
      E,
      V,
      I,
      D
    )) : A > 0 && A & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (he(
      c.dynamicChildren,
      M,
      _,
      y,
      E,
      V,
      I
    ), g.NODE_ENV !== "production" ? Hn(c, p) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (p.key != null || y && p === y.subTree) && Hn(
        c,
        p,
        !0
        /* shallow */
      )
    )) : pe(
      c,
      p,
      _,
      U,
      y,
      E,
      V,
      I,
      D
    );
  }, De = (c, p, _, v, y, E, V, I, D) => {
    p.slotScopeIds = I, c == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      _,
      v,
      V,
      D
    ) : ye(
      p,
      _,
      v,
      y,
      E,
      V,
      D
    ) : S(c, p, D);
  }, ye = (c, p, _, v, y, E, V) => {
    const I = c.component = Sc(
      c,
      v,
      y
    );
    if (g.NODE_ENV !== "production" && I.type.__hmrId && oa(I), g.NODE_ENV !== "production" && ($n(c), $t(I, "mount")), ur(c) && (I.ctx.renderer = xt), g.NODE_ENV !== "production" && $t(I, "init"), Ic(I, !1, V), g.NODE_ENV !== "production" && jt(I, "init"), g.NODE_ENV !== "production" && st && (c.el = null), I.asyncDep) {
      if (y && y.registerDep(I, b, V), !c.el) {
        const D = I.subTree = it(Fe);
        F(null, D, p, _), c.placeholder = D.el;
      }
    } else
      b(
        I,
        c,
        p,
        _,
        y,
        E,
        V
      );
    g.NODE_ENV !== "production" && (jn(), jt(I, "mount"));
  }, S = (c, p, _) => {
    const v = p.component = c.component;
    if (mc(c, p, _))
      if (v.asyncDep && !v.asyncResolved) {
        g.NODE_ENV !== "production" && $n(p), P(v, p, _), g.NODE_ENV !== "production" && jn();
        return;
      } else
        v.next = p, v.update();
    else
      p.el = c.el, v.vnode = p;
  }, b = (c, p, _, v, y, E, V) => {
    const I = () => {
      if (c.isMounted) {
        let { next: A, bu: M, u: K, parent: q, vnode: oe } = c;
        {
          const Ze = vi(c);
          if (Ze) {
            A && (A.el = oe.el, P(c, A, V)), Ze.asyncDep.then(() => {
              c.isUnmounted || I();
            });
            return;
          }
        }
        let ee = A, Ie;
        g.NODE_ENV !== "production" && $n(A || c.vnode), St(c, !1), A ? (A.el = oe.el, P(c, A, V)) : A = oe, M && Lt(M), (Ie = A.props && A.props.onVnodeBeforeUpdate) && et(Ie, q, A, oe), St(c, !0), g.NODE_ENV !== "production" && $t(c, "render");
        const Te = Ur(c);
        g.NODE_ENV !== "production" && jt(c, "render");
        const Xe = c.subTree;
        c.subTree = Te, g.NODE_ENV !== "production" && $t(c, "patch"), C(
          Xe,
          Te,
          // parent may have changed if it's in a teleport
          u(Xe.el),
          // anchor may have changed if it's in a fragment
          Le(Xe),
          c,
          y,
          E
        ), g.NODE_ENV !== "production" && jt(c, "patch"), A.el = Te.el, ee === null && _c(c, Te.el), K && Me(K, y), (Ie = A.props && A.props.onVnodeUpdated) && Me(
          () => et(Ie, q, A, oe),
          y
        ), g.NODE_ENV !== "production" && ni(c), g.NODE_ENV !== "production" && jn();
      } else {
        let A;
        const { el: M, props: K } = p, { bm: q, m: oe, parent: ee, root: Ie, type: Te } = c, Xe = fn(p);
        St(c, !1), q && Lt(q), !Xe && (A = K && K.onVnodeBeforeMount) && et(A, ee, p), St(c, !0);
        {
          Ie.ce && // @ts-expect-error _def is private
          Ie.ce._def.shadowRoot !== !1 && Ie.ce._injectChildStyle(Te), g.NODE_ENV !== "production" && $t(c, "render");
          const Ze = c.subTree = Ur(c);
          g.NODE_ENV !== "production" && jt(c, "render"), g.NODE_ENV !== "production" && $t(c, "patch"), C(
            null,
            Ze,
            _,
            v,
            c,
            y,
            E
          ), g.NODE_ENV !== "production" && jt(c, "patch"), p.el = Ze.el;
        }
        if (oe && Me(oe, y), !Xe && (A = K && K.onVnodeMounted)) {
          const Ze = p;
          Me(
            () => et(A, ee, Ze),
            y
          );
        }
        (p.shapeFlag & 256 || ee && fn(ee.vnode) && ee.vnode.shapeFlag & 256) && c.a && Me(c.a, y), c.isMounted = !0, g.NODE_ENV !== "production" && ca(c), p = _ = v = null;
      }
    };
    c.scope.on();
    const D = c.effect = new Vs(I);
    c.scope.off();
    const N = c.update = D.run.bind(D), U = c.job = D.runIfDirty.bind(D);
    U.i = c, U.id = c.uid, D.scheduler = () => fo(U), St(c, !0), g.NODE_ENV !== "production" && (D.onTrack = c.rtc ? (A) => Lt(c.rtc, A) : void 0, D.onTrigger = c.rtg ? (A) => Lt(c.rtg, A) : void 0), N();
  }, P = (c, p, _) => {
    p.component = c;
    const v = c.vnode.props;
    c.vnode = p, c.next = null, Ya(c, p.props, v, _), oc(c, p.children, _), Ge(), Ar(c), ze();
  }, pe = (c, p, _, v, y, E, V, I, D = !1) => {
    const N = c && c.children, U = c ? c.shapeFlag : 0, A = p.children, { patchFlag: M, shapeFlag: K } = p;
    if (M > 0) {
      if (M & 128) {
        at(
          N,
          A,
          _,
          v,
          y,
          E,
          V,
          I,
          D
        );
        return;
      } else if (M & 256) {
        Pe(
          N,
          A,
          _,
          v,
          y,
          E,
          V,
          I,
          D
        );
        return;
      }
    }
    K & 8 ? (U & 16 && ge(N, y, E), A !== N && d(_, A)) : U & 16 ? K & 16 ? at(
      N,
      A,
      _,
      v,
      y,
      E,
      V,
      I,
      D
    ) : ge(N, y, E, !0) : (U & 8 && d(_, ""), K & 16 && k(
      A,
      _,
      v,
      y,
      E,
      V,
      I,
      D
    ));
  }, Pe = (c, p, _, v, y, E, V, I, D) => {
    c = c || Jt, p = p || Jt;
    const N = c.length, U = p.length, A = Math.min(N, U);
    let M;
    for (M = 0; M < A; M++) {
      const K = p[M] = D ? yt(p[M]) : We(p[M]);
      C(
        c[M],
        K,
        _,
        null,
        y,
        E,
        V,
        I,
        D
      );
    }
    N > U ? ge(
      c,
      y,
      E,
      !0,
      !1,
      A
    ) : k(
      p,
      _,
      v,
      y,
      E,
      V,
      I,
      D,
      A
    );
  }, at = (c, p, _, v, y, E, V, I, D) => {
    let N = 0;
    const U = p.length;
    let A = c.length - 1, M = U - 1;
    for (; N <= A && N <= M; ) {
      const K = c[N], q = p[N] = D ? yt(p[N]) : We(p[N]);
      if (tn(K, q))
        C(
          K,
          q,
          _,
          null,
          y,
          E,
          V,
          I,
          D
        );
      else
        break;
      N++;
    }
    for (; N <= A && N <= M; ) {
      const K = c[A], q = p[M] = D ? yt(p[M]) : We(p[M]);
      if (tn(K, q))
        C(
          K,
          q,
          _,
          null,
          y,
          E,
          V,
          I,
          D
        );
      else
        break;
      A--, M--;
    }
    if (N > A) {
      if (N <= M) {
        const K = M + 1, q = K < U ? p[K].el : v;
        for (; N <= M; )
          C(
            null,
            p[N] = D ? yt(p[N]) : We(p[N]),
            _,
            q,
            y,
            E,
            V,
            I,
            D
          ), N++;
      }
    } else if (N > M)
      for (; N <= A; )
        W(c[N], y, E, !0), N++;
    else {
      const K = N, q = N, oe = /* @__PURE__ */ new Map();
      for (N = q; N <= M; N++) {
        const Ne = p[N] = D ? yt(p[N]) : We(p[N]);
        Ne.key != null && (g.NODE_ENV !== "production" && oe.has(Ne.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(Ne.key),
          "Make sure keys are unique."
        ), oe.set(Ne.key, N));
      }
      let ee, Ie = 0;
      const Te = M - q + 1;
      let Xe = !1, Ze = 0;
      const Zt = new Array(Te);
      for (N = 0; N < Te; N++) Zt[N] = 0;
      for (N = K; N <= A; N++) {
        const Ne = c[N];
        if (Ie >= Te) {
          W(Ne, y, E, !0);
          continue;
        }
        let Qe;
        if (Ne.key != null)
          Qe = oe.get(Ne.key);
        else
          for (ee = q; ee <= M; ee++)
            if (Zt[ee - q] === 0 && tn(Ne, p[ee])) {
              Qe = ee;
              break;
            }
        Qe === void 0 ? W(Ne, y, E, !0) : (Zt[Qe - q] = N + 1, Qe >= Ze ? Ze = Qe : Xe = !0, C(
          Ne,
          p[Qe],
          _,
          null,
          y,
          E,
          V,
          I,
          D
        ), Ie++);
      }
      const xr = Xe ? ac(Zt) : Jt;
      for (ee = xr.length - 1, N = Te - 1; N >= 0; N--) {
        const Ne = q + N, Qe = p[Ne], Or = p[Ne + 1], Sr = Ne + 1 < U ? (
          // #13559, fallback to el placeholder for unresolved async component
          Or.el || Or.placeholder
        ) : v;
        Zt[N] === 0 ? C(
          null,
          Qe,
          _,
          Sr,
          y,
          E,
          V,
          I,
          D
        ) : Xe && (ee < 0 || N !== xr[ee] ? ke(Qe, _, Sr, 2) : ee--);
      }
    }
  }, ke = (c, p, _, v, y = null) => {
    const { el: E, type: V, transition: I, children: D, shapeFlag: N } = c;
    if (N & 6) {
      ke(c.component.subTree, p, _, v);
      return;
    }
    if (N & 128) {
      c.suspense.move(p, _, v);
      return;
    }
    if (N & 64) {
      V.move(c, p, _, xt);
      return;
    }
    if (V === Ke) {
      o(E, p, _);
      for (let A = 0; A < D.length; A++)
        ke(D[A], p, _, v);
      o(c.anchor, p, _);
      return;
    }
    if (V === Un) {
      Y(c, p, _);
      return;
    }
    if (v !== 2 && N & 1 && I)
      if (v === 0)
        I.beforeEnter(E), o(E, p, _), Me(() => I.enter(E), y);
      else {
        const { leave: A, delayLeave: M, afterLeave: K } = I, q = () => {
          c.ctx.isUnmounted ? r(E) : o(E, p, _);
        }, oe = () => {
          A(E, () => {
            q(), K && K();
          });
        };
        M ? M(E, q, oe) : oe();
      }
    else
      o(E, p, _);
  }, W = (c, p, _, v = !1, y = !1) => {
    const {
      type: E,
      props: V,
      ref: I,
      children: D,
      dynamicChildren: N,
      shapeFlag: U,
      patchFlag: A,
      dirs: M,
      cacheIndex: K
    } = c;
    if (A === -2 && (y = !1), I != null && (Ge(), un(I, null, _, c, !0), ze()), K != null && (p.renderCache[K] = void 0), U & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const q = U & 1 && M, oe = !fn(c);
    let ee;
    if (oe && (ee = V && V.onVnodeBeforeUnmount) && et(ee, p, c), U & 6)
      Ee(c.component, _, v);
    else {
      if (U & 128) {
        c.suspense.unmount(_, v);
        return;
      }
      q && Ot(c, null, p, "beforeUnmount"), U & 64 ? c.type.remove(
        c,
        p,
        _,
        xt,
        v
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Ke || A > 0 && A & 64) ? ge(
        N,
        p,
        _,
        !1,
        !0
      ) : (E === Ke && A & 384 || !y && U & 16) && ge(D, p, _), v && ie(c);
    }
    (oe && (ee = V && V.onVnodeUnmounted) || q) && Me(() => {
      ee && et(ee, p, c), q && Ot(c, null, p, "unmounted");
    }, _);
  }, ie = (c) => {
    const { type: p, el: _, anchor: v, transition: y } = c;
    if (p === Ke) {
      g.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && y && !y.persisted ? c.children.forEach((V) => {
        V.type === Fe ? r(V.el) : ie(V);
      }) : ue(_, v);
      return;
    }
    if (p === Un) {
      w(c);
      return;
    }
    const E = () => {
      r(_), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (c.shapeFlag & 1 && y && !y.persisted) {
      const { leave: V, delayLeave: I } = y, D = () => V(_, E);
      I ? I(c.el, E, D) : D();
    } else
      E();
  }, ue = (c, p) => {
    let _;
    for (; c !== p; )
      _ = h(c), r(c), c = _;
    r(p);
  }, Ee = (c, p, _) => {
    g.NODE_ENV !== "production" && c.type.__hmrId && ra(c);
    const {
      bum: v,
      scope: y,
      job: E,
      subTree: V,
      um: I,
      m: D,
      a: N,
      parent: U,
      slots: { __: A }
    } = c;
    Hr(D), Hr(N), v && Lt(v), U && $(A) && A.forEach((M) => {
      U.renderCache[M] = void 0;
    }), y.stop(), E && (E.flags |= 8, W(V, c, p, _)), I && Me(I, p), Me(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), g.NODE_ENV !== "production" && fa(c);
  }, ge = (c, p, _, v = !1, y = !1, E = 0) => {
    for (let V = E; V < c.length; V++)
      W(c[V], p, _, v, y);
  }, Le = (c) => {
    if (c.shapeFlag & 6)
      return Le(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), _ = p && p[_a];
    return _ ? h(_) : p;
  };
  let mt = !1;
  const An = (c, p, _) => {
    c == null ? p._vnode && W(p._vnode, null, null, !0) : C(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, mt || (mt = !0, Ar(), Zs(), mt = !1);
  }, xt = {
    p: C,
    um: W,
    m: ke,
    r: ie,
    mt: ye,
    mc: k,
    pc: pe,
    pbc: he,
    n: Le,
    o: e
  };
  return {
    render: An,
    hydrate: void 0,
    createApp: Ba(An)
  };
}
function Oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function St({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if ($(o) && $(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = yt(r[s]), l.el = i.el), !n && l.patchFlag !== -2 && Hn(i, l)), l.type === Cn && (l.el = i.el), l.type === Fe && !l.el && (l.el = i.el), g.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function ac(e) {
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
function vi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vi(t);
}
function Hr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const cc = Symbol.for("v-scx"), uc = () => {
  {
    const e = Ln(cc);
    return e || g.NODE_ENV !== "production" && T(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function pt(e, t, n) {
  return g.NODE_ENV !== "production" && !B(t) && T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ni(e, t, n);
}
function Ni(e, t, n = Q) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  g.NODE_ENV !== "production" && !t && (o !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ae({}, n);
  g.NODE_ENV !== "production" && (l.onWarn = T);
  const a = t && o || !t && s !== "post";
  let f;
  if (yn) {
    if (s === "sync") {
      const m = uc();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = de, m.resume = de, m.pause = de, m;
    }
  }
  const d = be;
  l.call = (m, O, C) => lt(m, d, O, C);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    Me(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, O) => {
    O ? m() : fo(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = zl(e, t, l);
  return yn && (f ? f.push(h) : a && h()), h;
}
function fc(e, t, n) {
  const o = this.proxy, r = le(e) ? e.includes(".") ? wi(o, e) : () => o[e] : e.bind(o, o);
  let s;
  B(t) ? s = t : (s = t.handler, n = t);
  const i = Vn(this), l = Ni(r, s.bind(o), n);
  return i(), l;
}
function wi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
const dc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Re(t)}Modifiers`] || e[`${Ae(t)}Modifiers`];
function pc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || Q;
  if (g.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(It(Re(t)) in u)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${It(Re(t))}" prop.`
        );
      else {
        const h = d[t];
        B(h) && (h(...n) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && dc(o, t.slice(7));
  if (i && (i.trim && (r = n.map((d) => le(d) ? d.trim() : d)), i.number && (r = n.map(Ao))), g.NODE_ENV !== "production" && ha(e, t, r), g.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[It(d)] && T(
      `Event "${d}" is emitted in component ${_o(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ae(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = It(t)] || // also try camelCase event handler (#2249)
  o[l = It(Re(t))];
  !a && s && (a = o[l = It(Ae(t))]), a && lt(
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
    e.emitted[l] = !0, lt(
      f,
      e,
      6,
      r
    );
  }
}
function xi(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!B(e)) {
    const a = (f) => {
      const d = xi(f, t, !0);
      d && (l = !0, ae(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (te(e) && o.set(e, null), null) : ($(s) ? s.forEach((a) => i[a] = null) : ae(i, s), te(e) && o.set(e, i), i);
}
function ho(e, t) {
  return !e || !On(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Ae(t)) || z(e, t));
}
let Bo = !1;
function eo() {
  Bo = !0;
}
function Ur(e) {
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
    ctx: O,
    inheritAttrs: C
  } = e, J = Xn(e);
  let F, L;
  g.NODE_ENV !== "production" && (Bo = !1);
  try {
    if (n.shapeFlag & 4) {
      const w = r || o, x = g.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(w, {
        get(j, H, k) {
          return T(
            `Property '${String(
              H
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(j, H, k);
        }
      }) : w;
      F = We(
        f.call(
          x,
          w,
          d,
          g.NODE_ENV !== "production" ? rt(u) : u,
          m,
          h,
          O
        )
      ), L = l;
    } else {
      const w = t;
      g.NODE_ENV !== "production" && l === u && eo(), F = We(
        w.length > 1 ? w(
          g.NODE_ENV !== "production" ? rt(u) : u,
          g.NODE_ENV !== "production" ? {
            get attrs() {
              return eo(), rt(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : w(
          g.NODE_ENV !== "production" ? rt(u) : u,
          null
        )
      ), L = t.props ? l : hc(l);
    }
  } catch (w) {
    dn.length = 0, In(w, e, 1), F = it(Fe);
  }
  let R = F, Y;
  if (g.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([R, Y] = Oi(F)), L && C !== !1) {
    const w = Object.keys(L), { shapeFlag: x } = R;
    if (w.length) {
      if (x & 7)
        s && w.some(Wn) && (L = gc(
          L,
          s
        )), R = Nt(R, L, !1, !0);
      else if (g.NODE_ENV !== "production" && !Bo && R.type !== Fe) {
        const j = Object.keys(l), H = [], k = [];
        for (let X = 0, he = j.length; X < he; X++) {
          const re = j[X];
          On(re) ? Wn(re) || H.push(re[2].toLowerCase() + re.slice(3)) : k.push(re);
        }
        k.length && T(
          `Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), H.length && T(
          `Extraneous non-emits event listeners (${H.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (g.NODE_ENV !== "production" && !Br(R) && T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), R = Nt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (g.NODE_ENV !== "production" && !Br(R) && T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), cr(R, n.transition)), g.NODE_ENV !== "production" && Y ? Y(R) : F = R, Xn(J), F;
}
const Oi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = mr(t, !1);
  if (o) {
    if (g.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Oi(o);
  } else return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [We(o), i];
};
function mr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (go(r)) {
      if (r.type !== Fe || r.children === "v-if") {
        if (n)
          return;
        if (n = r, g.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return mr(n.children);
      }
    } else
      return;
  }
  return n;
}
const hc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || On(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Wn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Br = (e) => e.shapeFlag & 7 || e.type === Fe;
function mc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, f = s.emitsOptions;
  if (g.NODE_ENV !== "production" && (r || l) && st || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Kr(o, i, f) : !!i;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const h = d[u];
        if (i[h] !== o[h] && !ho(f, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Kr(o, i, f) : !0 : !!i;
  return !1;
}
function Kr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !ho(n, s))
      return !0;
  }
  return !1;
}
function _c({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Si = (e) => e.__isSuspense;
function bc(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : Xs(e);
}
const Ke = Symbol.for("v-fgt"), Cn = Symbol.for("v-txt"), Fe = Symbol.for("v-cmt"), Un = Symbol.for("v-stc"), dn = [];
let je = null;
function He(e = !1) {
  dn.push(je = e ? null : []);
}
function yc() {
  dn.pop(), je = dn[dn.length - 1] || null;
}
let bn = 1;
function Wr(e, t = !1) {
  bn += e, e < 0 && je && t && (je.hasOnce = !0);
}
function Di(e) {
  return e.dynamicChildren = bn > 0 ? je || Jt : null, yc(), bn > 0 && je && je.push(e), e;
}
function Be(e, t, n, o, r, s) {
  return Di(
    $e(
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
function Ec(e, t, n, o, r) {
  return Di(
    it(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function go(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tn(e, t) {
  if (g.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Fn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const vc = (...e) => Ti(
  ...e
), Ii = ({ key: e }) => e ?? null, Bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? le(e) || ce(e) || B(e) ? { i: Oe, r: e, k: t, f: !!n } : e : null);
function $e(e, t = null, n = null, o = 0, r = null, s = e === Ke ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ii(t),
    ref: t && Bn(t),
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
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Oe
  };
  return l ? (_r(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= le(n) ? 8 : 16), g.NODE_ENV !== "production" && a.key !== a.key && T("VNode created with invalid key (NaN). VNode type:", a.type), bn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && je.push(a), a;
}
const it = g.NODE_ENV !== "production" ? vc : Ti;
function Ti(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Va) && (g.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Fe), go(e)) {
    const l = Nt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _r(l, n), bn > 0 && !s && je && (l.shapeFlag & 6 ? je[je.indexOf(e)] = l : je.push(l)), l.patchFlag = -2, l;
  }
  if (Pi(e) && (e = e.__vccOpts), t) {
    t = Nc(t);
    let { class: l, style: a } = t;
    l && !le(l) && (t.class = Yt(l)), te(a) && (mn(a) && !$(a) && (a = ae({}, a)), t.style = lo(a));
  }
  const i = le(e) ? 1 : Si(e) ? 128 : ba(e) ? 64 : te(e) ? 4 : B(e) ? 2 : 0;
  return g.NODE_ENV !== "production" && i & 4 && mn(e) && (e = G(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $e(
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
function Nc(e) {
  return e ? mn(e) || gi(e) ? ae({}, e) : e : null;
}
function Nt(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: l, transition: a } = e, f = t ? wc(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Ii(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? $(s) ? s.concat(Bn(t)) : [s, Bn(t)] : Bn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: g.NODE_ENV !== "production" && i === -1 && $(l) ? l.map(Ci) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ke ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Nt(e.ssContent),
    ssFallback: e.ssFallback && Nt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && cr(
    d,
    a.clone(d)
  ), d;
}
function Ci(e) {
  const t = Nt(e);
  return $(e.children) && (t.children = e.children.map(Ci)), t;
}
function Ko(e = " ", t = 0) {
  return it(Cn, null, e, t);
}
function Ft(e = "", t = !1) {
  return t ? (He(), Ec(Fe, null, e)) : it(Fe, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? it(Fe) : $(e) ? it(
    Ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : go(e) ? yt(e) : it(Cn, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Nt(e);
}
function _r(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), _r(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !gi(t) ? t._ctx = Oe : r === 3 && Oe && (Oe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else B(t) ? (t = { default: t, _ctx: Oe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ko(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Yt([t.class, o.class]));
      else if (r === "style")
        t.style = lo([t.style, o.style]);
      else if (On(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !($(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function et(e, t, n, o = null) {
  lt(e, t, 7, [
    n,
    o
  ]);
}
const xc = di();
let Oc = 0;
function Sc(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || xc, s = {
    uid: Oc++,
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
    scope: new _l(
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
    propsOptions: _i(o, r),
    emitsOptions: xi(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Q,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
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
  return g.NODE_ENV !== "production" ? s.ctx = Ra(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = pc.bind(null, s), e.ce && e.ce(s), s;
}
let be = null;
const br = () => be || Oe;
let to, Wo;
{
  const e = Sn(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  to = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => be = n
  ), Wo = t(
    "__VUE_SSR_SETTERS__",
    (n) => yn = n
  );
}
const Vn = (e) => {
  const t = be;
  return to(e), e.scope.on(), () => {
    e.scope.off(), to(t);
  };
}, Jr = () => {
  be && be.scope.off(), to(null);
}, Dc = /* @__PURE__ */ ht("slot,component");
function Jo(e, { isNativeTag: t }) {
  (Dc(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let yn = !1;
function Ic(e, t = !1, n = !1) {
  t && Wo(t);
  const { props: o, children: r } = e.vnode, s = Vi(e);
  Wa(e, o, s, t), nc(e, r, n || t);
  const i = s ? Tc(e, t) : void 0;
  return t && Wo(!1), i;
}
function Tc(e, t) {
  var n;
  const o = e.type;
  if (g.NODE_ENV !== "production") {
    if (o.name && Jo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        Jo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        si(s[i]);
    }
    o.compilerOptions && Cc() && T(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ci), g.NODE_ENV !== "production" && Pa(e);
  const { setup: r } = o;
  if (r) {
    Ge();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = Vn(e), l = Xt(
      r,
      e,
      0,
      [
        g.NODE_ENV !== "production" ? rt(e.props) : e.props,
        s
      ]
    ), a = Qo(l);
    if (ze(), i(), (a || e.sp) && !fn(e) && li(e), a) {
      if (l.then(Jr, Jr), t)
        return l.then((f) => {
          Yr(e, f, t);
        }).catch((f) => {
          In(f, e, 0);
        });
      if (e.asyncDep = l, g.NODE_ENV !== "production" && !e.suspense) {
        const f = (n = o.name) != null ? n : "Anonymous";
        T(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Yr(e, l, t);
  } else
    Ai(e, t);
}
function Yr(e, t, n) {
  B(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) ? (g.NODE_ENV !== "production" && go(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), g.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ys(t), g.NODE_ENV !== "production" && ka(e)) : g.NODE_ENV !== "production" && t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ai(e, n);
}
const Cc = () => !0;
function Ai(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || de);
  {
    const r = Vn(e);
    Ge();
    try {
      $a(e);
    } finally {
      ze(), r();
    }
  }
  g.NODE_ENV !== "production" && !o.render && e.render === de && !t && (o.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", o));
}
const Gr = g.NODE_ENV !== "production" ? {
  get(e, t) {
    return eo(), fe(e, "get", ""), e[t];
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
function Vc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return fe(e, "get", "$slots"), t[n];
    }
  });
}
function Ac(e) {
  const t = (n) => {
    if (g.NODE_ENV !== "production" && (e.exposed && T("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : ce(n) && (o = "ref")), o !== "object" && T(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (g.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Gr));
      },
      get slots() {
        return o || (o = Vc(e));
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Gr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function mo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ys(Fl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Pt)
        return Pt[n](e);
    },
    has(t, n) {
      return n in t || n in Pt;
    }
  })) : e.proxy;
}
const Rc = /(?:^|[-_])(\w)/g, Pc = (e) => e.replace(Rc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ri(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function _o(e, t, n = !1) {
  let o = Ri(t);
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
  return o ? Pc(o) : n ? "App" : "Anonymous";
}
function Pi(e) {
  return B(e) && "__vccOpts" in e;
}
const yr = (e, t) => {
  const n = Yl(e, t, yn);
  if (g.NODE_ENV !== "production") {
    const o = br();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function kc() {
  if (g.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!te(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ce(u)) {
        Ge();
        const h = u.value;
        return ze(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (At(u))
          return [
            "div",
            {},
            ["span", e, Se(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${qe(u) ? " (readonly)" : ""}`
          ];
        if (qe(u))
          return [
            "div",
            {},
            ["span", e, Se(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && h.push(i("props", G(u.props))), u.setupState !== Q && h.push(i("setup", u.setupState)), u.data !== Q && h.push(i("data", G(u.data)));
    const m = a(u, "computed");
    m && h.push(i("computed", m));
    const O = a(u, "inject");
    return O && h.push(i("injected", O)), h.push([
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
    return h = ae({}, h), Object.keys(h).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : te(u) ? ["object", { object: h ? G(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const m = u.type;
    if (B(m))
      return;
    const O = {};
    for (const C in u.ctx)
      f(m, C, h) && (O[C] = u.ctx[C]);
    return O;
  }
  function f(u, h, m) {
    const O = u[m];
    if ($(O) && O.includes(h) || te(O) && h in O || u.extends && f(u.extends, h, m) || u.mixins && u.mixins.some((C) => f(C, h, m)))
      return !0;
  }
  function d(u) {
    return Se(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const zr = "3.5.18", Ue = g.NODE_ENV !== "production" ? T : de;
var ve = {};
let Yo;
const qr = typeof window < "u" && window.trustedTypes;
if (qr)
  try {
    Yo = /* @__PURE__ */ qr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ve.NODE_ENV !== "production" && Ue(`Error creating trusted types policy: ${e}`);
  }
const ki = Yo ? (e) => Yo.createHTML(e) : (e) => e, Mc = "http://www.w3.org/2000/svg", $c = "http://www.w3.org/1998/Math/MathML", ut = typeof document < "u" ? document : null, Xr = ut && /* @__PURE__ */ ut.createElement("template"), jc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? ut.createElementNS(Mc, e) : t === "mathml" ? ut.createElementNS($c, e) : n ? ut.createElement(e, { is: n }) : ut.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => ut.createTextNode(e),
  createComment: (e) => ut.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ut.querySelector(e),
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
      Xr.innerHTML = ki(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Xr.content;
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
}, Fc = Symbol("_vtc");
function Lc(e, t, n) {
  const o = e[Fc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zr = Symbol("_vod"), Hc = Symbol("_vsh"), Uc = Symbol(ve.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Bc = /(^|;)\s*display\s*:/;
function Kc(e, t, n) {
  const o = e.style, r = le(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (le(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Kn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Kn(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), Kn(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[Uc];
      i && (n += ";" + i), o.cssText = n, s = Bc.test(n);
    }
  } else t && e.removeAttribute("style");
  Zr in e && (e[Zr] = s ? o.display : "", e[Hc] && (o.display = "none"));
}
const Wc = /[^\\];\s*$/, Qr = /\s*!important$/;
function Kn(e, t, n) {
  if ($(n))
    n.forEach((o) => Kn(e, t, o));
  else if (n == null && (n = ""), ve.NODE_ENV !== "production" && Wc.test(n) && Ue(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Jc(e, t);
    Qr.test(n) ? e.setProperty(
      Ae(o),
      n.replace(Qr, ""),
      "important"
    ) : e[o] = n;
  }
}
const es = ["Webkit", "Moz", "ms"], So = {};
function Jc(e, t) {
  const n = So[t];
  if (n)
    return n;
  let o = Re(t);
  if (o !== "filter" && o in e)
    return So[t] = o;
  o = io(o);
  for (let r = 0; r < es.length; r++) {
    const s = es[r] + o;
    if (s in e)
      return So[t] = s;
  }
  return t;
}
const ts = "http://www.w3.org/1999/xlink";
function ns(e, t, n, o, r, s = ml(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ts, t.slice(6, t.length)) : e.setAttributeNS(ts, t, n) : n == null || s && !Is(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : wt(n) ? String(n) : n
  );
}
function os(e, t, n, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ki(n) : n);
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
    l === "boolean" ? n = Is(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ve.NODE_ENV !== "production" && !i && Ue(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(r || t);
}
function Ut(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Yc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const rs = Symbol("_vei");
function Gc(e, t, n, o, r = null) {
  const s = e[rs] || (e[rs] = {}), i = s[t];
  if (o && i)
    i.value = ve.NODE_ENV !== "production" ? is(o, t) : o;
  else {
    const [l, a] = zc(t);
    if (o) {
      const f = s[t] = Zc(
        ve.NODE_ENV !== "production" ? is(o, t) : o,
        r
      );
      Ut(e, l, f, a);
    } else i && (Yc(e, l, i, a), s[t] = void 0);
  }
}
const ss = /(?:Once|Passive|Capture)$/;
function zc(e) {
  let t;
  if (ss.test(e)) {
    t = {};
    let o;
    for (; o = e.match(ss); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ae(e.slice(2)), t];
}
let Do = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Xc = () => Do || (qc.then(() => Do = 0), Do = Date.now());
function Zc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    lt(
      Qc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Xc(), n;
}
function is(e, t) {
  return B(e) || $(e) ? e : (Ue(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), de);
}
function Qc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, eu = (e, t, n, o, r, s) => {
  const i = r === "svg";
  t === "class" ? Lc(e, o, i) : t === "style" ? Kc(e, n, o) : On(t) ? Wn(t) || Gc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, o, i)) ? (os(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ns(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !le(o)) ? os(e, Re(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ns(e, t, o, i));
};
function tu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ls(t) && B(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ls(t) && le(n) ? !1 : t in e;
}
const as = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nu(e, t, n) {
  const o = /* @__PURE__ */ ii(e, t);
  ro(o) && ae(o, t);
  class r extends Er {
    constructor(i) {
      super(o, i, n);
    }
  }
  return r.def = o, r;
}
const ou = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Er extends ou {
  constructor(t, n = {}, o = ps) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== ps ? this._root = this.shadowRoot : (ve.NODE_ENV !== "production" && this.shadowRoot && Ue(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Er) {
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
    this._connected = !1, Wt(() => {
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
      if (s && !$(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = Dr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Re(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(i) : ve.NODE_ENV !== "production" && i && Ue(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ve.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        z(this, o) ? ve.NODE_ENV !== "production" && Ue(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => me(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = $(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(Re))
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
    let o = n ? this.getAttribute(t) : as;
    const r = Re(t);
    n && this._numberProps && this._numberProps[r] && (o = Dr(o)), this._setProp(r, o, !1, !0);
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
    if (n !== this._props[t] && (n === as ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), r && this._instance && this._update(), o)) {
      const s = this._ob;
      s && s.disconnect(), n === !0 ? this.setAttribute(Ae(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ae(t), n + "") : n || this.removeAttribute(Ae(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), fu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = it(this._def, ae(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ve.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const r = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            ro(i[0]) ? ae({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (s, ...i) => {
        r(s, i), Ae(s) !== s && r(Ae(s), i);
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
      if (o && s.setAttribute("nonce", o), s.textContent = t[r], this.shadowRoot.prepend(s), ve.NODE_ENV !== "production")
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
    if (ve.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const cs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return $(t) ? (n) => Lt(t, n) : t;
};
function ru(e) {
  e.target.composing = !0;
}
function us(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Io = Symbol("_assign"), su = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, r) {
    e[Io] = cs(r);
    const s = o || r.props && r.props.type === "number";
    Ut(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Ao(l)), e[Io](l);
    }), n && Ut(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ut(e, "compositionstart", ru), Ut(e, "compositionend", us), Ut(e, "change", us));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: r, number: s } }, i) {
    if (e[Io] = cs(i), e.composing) return;
    const l = (s || e.type === "number") && !/^0\d/.test(e.value) ? Ao(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (o && t === n || r && e.value.trim() === a) || (e.value = a));
  }
}, iu = ["ctrl", "shift", "alt", "meta"], lu = {
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
}, fs = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = lu[t[i]];
      if (l && l(r, t)) return;
    }
    return e(r, ...s);
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
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = Ae(r.key);
    if (t.some(
      (i) => i === s || au[i] === s
    ))
      return e(r);
  });
}, uu = /* @__PURE__ */ ae({ patchProp: eu }, jc);
let ds;
function Mi() {
  return ds || (ds = sc(uu));
}
const fu = (...e) => {
  Mi().render(...e);
}, ps = (...e) => {
  const t = Mi().createApp(...e);
  ve.NODE_ENV !== "production" && (pu(t), hu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = gu(o);
    if (!r) return;
    const s = t._component;
    !B(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const i = n(r, !1, du(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), i;
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
    value: (t) => dl(t) || pl(t) || hl(t),
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
        Ue(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ue(o), n;
      },
      set() {
        Ue(o);
      }
    });
  }
}
function gu(e) {
  if (le(e)) {
    const t = document.querySelector(e);
    return ve.NODE_ENV !== "production" && !t && Ue(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ve.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ue(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var mu = {};
function _u() {
  kc();
}
mu.NODE_ENV !== "production" && _u();
var $i = "vercel.ai.error", bu = Symbol.for($i), ji, yu = class Fi extends Error {
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
    super(n), this[ji] = !0, this.name = t, this.cause = o;
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
    const o = Symbol.for(n);
    return t != null && typeof t == "object" && o in t && typeof t[o] == "boolean" && t[o] === !0;
  }
};
ji = bu;
var qt = yu;
function Li(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Hi = "AI_InvalidArgumentError", Ui = `vercel.ai.error.${Hi}`, Eu = Symbol.for(Ui), Bi, vu = class extends qt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Hi, message: e, cause: t }), this[Bi] = !0, this.argument = n;
  }
  static isInstance(e) {
    return qt.hasMarker(e, Ui);
  }
};
Bi = Eu;
var Ki = "AI_JSONParseError", Wi = `vercel.ai.error.${Ki}`, Nu = Symbol.for(Wi), Ji, hs = class extends qt {
  constructor({ text: e, cause: t }) {
    super({
      name: Ki,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Li(t)}`,
      cause: t
    }), this[Ji] = !0, this.text = e;
  }
  static isInstance(e) {
    return qt.hasMarker(e, Wi);
  }
};
Ji = Nu;
var Yi = "AI_TypeValidationError", Gi = `vercel.ai.error.${Yi}`, wu = Symbol.for(Gi), zi, xu = class Go extends qt {
  constructor({ value: t, cause: n }) {
    super({
      name: Yi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Li(n)}`,
      cause: n
    }), this[zi] = !0, this.value = t;
  }
  static isInstance(t) {
    return qt.hasMarker(t, Gi);
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
    return Go.isInstance(n) && n.value === t ? n : new Go({ value: t, cause: n });
  }
};
zi = wu;
var gs = xu;
let Ou = (e, t = 21) => (n = t) => {
  let o = "", r = n | 0;
  for (; r--; )
    o += e[Math.random() * e.length | 0];
  return o;
};
function Su(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = { exports: {} }, ms;
function Du() {
  if (ms) return Dt.exports;
  ms = 1;
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
        for (const O in m) {
          const C = m[O];
          C && typeof C == "object" && u.push(C);
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
var Iu = Du();
const Tu = /* @__PURE__ */ Su(Iu);
var Cu = ({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: o = "-"
} = {}) => {
  const r = Ou(n, t);
  if (e == null)
    return r;
  if (n.includes(o))
    throw new vu({
      argument: "separator",
      message: `The separator "${o}" must not be part of the alphabet "${n}".`
    });
  return (s) => `${e}${o}${r(s)}`;
}, vr = Cu(), zo = Symbol.for("vercel.ai.validator");
function Vu(e) {
  return { [zo]: !0, validate: e };
}
function Au(e) {
  return typeof e == "object" && e !== null && zo in e && e[zo] === !0 && "validate" in e;
}
function Ru(e) {
  return Au(e) ? e : Pu(e);
}
function Pu(e) {
  return Vu((t) => {
    const n = e.safeParse(t);
    return n.success ? { success: !0, value: n.data } : { success: !1, error: n.error };
  });
}
function ku({
  value: e,
  schema: t
}) {
  const n = Ru(t);
  try {
    if (n.validate == null)
      return { success: !0, value: e };
    const o = n.validate(e);
    return o.success ? o : {
      success: !1,
      error: gs.wrap({ value: e, cause: o.error })
    };
  } catch (o) {
    return {
      success: !1,
      error: gs.wrap({ value: e, cause: o })
    };
  }
}
function _s({
  text: e,
  schema: t
}) {
  try {
    const n = Tu.parse(e);
    if (t == null)
      return { success: !0, value: n, rawValue: n };
    const o = ku({ value: n, schema: t });
    return o.success ? { ...o, rawValue: n } : o;
  } catch (n) {
    return {
      success: !1,
      error: hs.isInstance(n) ? n : new hs({ text: e, cause: n })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var En = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, vn = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Nn = {
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
}, wn = {
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
}, Mu = [
  En,
  vn,
  Nn,
  wn,
  xn
];
En.code + "", vn.code + "", Nn.code + "", wn.code + "", xn.code + "";
En.name + "", En.code, vn.name + "", vn.code, Nn.name + "", Nn.code, wn.name + "", wn.code, xn.name + "", xn.code;
Mu.map((e) => e.code);
function $u({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function ju(e) {
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
function Fu(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = _s({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = _s({ text: ju(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Lu = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Hu = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Uu = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, Bu = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, Ku = {
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
}, Wu = {
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
}, Ju = {
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
}, Yu = {
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
}, Gu = {
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
}, Xu = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, Zu = {
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
}, Qu = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, ef = {
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
}, tf = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, Nr = [
  Lu,
  Hu,
  Uu,
  Bu,
  Ku,
  Wu,
  Ju,
  Yu,
  Gu,
  zu,
  qu,
  Xu,
  Zu,
  Qu,
  ef,
  tf
], nf = Object.fromEntries(
  Nr.map((e) => [e.code, e])
);
Object.fromEntries(
  Nr.map((e) => [e.name, e.code])
);
var of = Nr.map((e) => e.code), rf = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const n = e.slice(0, t);
  if (!of.includes(n))
    throw new Error(`Failed to parse stream string. Invalid code ${n}.`);
  const o = n, r = e.slice(t + 1), s = JSON.parse(r);
  return nf[o].parse(s);
}, sf = 10;
function lf(e, t) {
  const n = new Uint8Array(t);
  let o = 0;
  for (const r of e)
    n.set(r, o), o += r.length;
  return e.length = 0, n;
}
async function af({
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
  onFinishMessagePart: O,
  onFinishStepPart: C,
  onStartStepPart: J
}) {
  const F = e.getReader(), L = new TextDecoder(), R = [];
  let Y = 0;
  for (; ; ) {
    const { value: w } = await F.read();
    if (w && (R.push(w), Y += w.length, w[w.length - 1] !== sf))
      continue;
    if (R.length === 0)
      break;
    const x = lf(R, Y);
    Y = 0;
    const j = L.decode(x, { stream: !0 }).split(`
`).filter((H) => H !== "").map(rf);
    for (const { type: H, value: k } of j)
      switch (H) {
        case "text":
          await t?.(k);
          break;
        case "reasoning":
          await n?.(k);
          break;
        case "reasoning_signature":
          await o?.(k);
          break;
        case "redacted_reasoning":
          await r?.(k);
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
          await h?.(k);
          break;
        case "finish_message":
          await O?.(k);
          break;
        case "finish_step":
          await C?.(k);
          break;
        case "start_step":
          await J?.(k);
          break;
        default: {
          const X = H;
          throw new Error(`Unknown stream part type: ${X}`);
        }
      }
  }
}
async function cf({
  stream: e,
  update: t,
  onToolCall: n,
  onFinish: o,
  generateId: r = vr,
  getCurrentDate: s = () => /* @__PURE__ */ new Date(),
  lastMessage: i
}) {
  var l, a;
  const f = i?.role === "assistant";
  let d = f ? 1 + // find max step in existing tool invocations:
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((x, j) => {
    var H;
    return Math.max(x, (H = j.step) != null ? H : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: r(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let h, m, O;
  function C(x, j) {
    const H = u.parts.find(
      (k) => k.type === "tool-invocation" && k.toolInvocation.toolCallId === x
    );
    H != null ? H.toolInvocation = j : u.parts.push({
      type: "tool-invocation",
      toolInvocation: j
    });
  }
  const J = [];
  let F = f ? i?.annotations : void 0;
  const L = {};
  let R = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, Y = "unknown";
  function w() {
    const x = [...J];
    F?.length && (u.annotations = F);
    const j = {
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
      message: j,
      data: x,
      replaceLastMessage: f
    });
  }
  await af({
    stream: e,
    onTextPart(x) {
      h == null ? (h = {
        type: "text",
        text: x
      }, u.parts.push(h)) : h.text += x, u.content += x, w();
    },
    onReasoningPart(x) {
      var j;
      O == null ? (O = { type: "text", text: x }, m?.details.push(O)) : O.text += x, m == null ? (m = {
        type: "reasoning",
        reasoning: x,
        details: [O]
      }, u.parts.push(m)) : m.reasoning += x, u.reasoning = ((j = u.reasoning) != null ? j : "") + x, w();
    },
    onReasoningSignaturePart(x) {
      O != null && (O.signature = x.signature);
    },
    onRedactedReasoningPart(x) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: x.data
      }), O = void 0, w();
    },
    onFilePart(x) {
      u.parts.push({
        type: "file",
        mimeType: x.mimeType,
        data: x.data
      }), w();
    },
    onSourcePart(x) {
      u.parts.push({
        type: "source",
        source: x
      }), w();
    },
    onToolCallStreamingStartPart(x) {
      u.toolInvocations == null && (u.toolInvocations = []), L[x.toolCallId] = {
        text: "",
        step: d,
        toolName: x.toolName,
        index: u.toolInvocations.length
      };
      const j = {
        state: "partial-call",
        step: d,
        toolCallId: x.toolCallId,
        toolName: x.toolName,
        args: void 0
      };
      u.toolInvocations.push(j), C(x.toolCallId, j), w();
    },
    onToolCallDeltaPart(x) {
      const j = L[x.toolCallId];
      j.text += x.argsTextDelta;
      const { value: H } = Fu(j.text), k = {
        state: "partial-call",
        step: j.step,
        toolCallId: x.toolCallId,
        toolName: j.toolName,
        args: H
      };
      u.toolInvocations[j.index] = k, C(x.toolCallId, k), w();
    },
    async onToolCallPart(x) {
      const j = {
        state: "call",
        step: d,
        ...x
      };
      if (L[x.toolCallId] != null ? u.toolInvocations[L[x.toolCallId].index] = j : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(j)), C(x.toolCallId, j), w(), n) {
        const H = await n({ toolCall: x });
        if (H != null) {
          const k = {
            state: "result",
            step: d,
            ...x,
            result: H
          };
          u.toolInvocations[u.toolInvocations.length - 1] = k, C(x.toolCallId, k), w();
        }
      }
    },
    onToolResultPart(x) {
      const j = u.toolInvocations;
      if (j == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const H = j.findIndex(
        (X) => X.toolCallId === x.toolCallId
      );
      if (H === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const k = {
        ...j[H],
        state: "result",
        ...x
      };
      j[H] = k, C(x.toolCallId, k), w();
    },
    onDataPart(x) {
      J.push(...x), w();
    },
    onMessageAnnotationsPart(x) {
      F == null ? F = [...x] : F.push(...x), w();
    },
    onFinishStepPart(x) {
      d += 1, h = x.isContinued ? h : void 0, m = void 0, O = void 0;
    },
    onStartStepPart(x) {
      f || (u.id = x.messageId), u.parts.push({ type: "step-start" }), w();
    },
    onFinishMessagePart(x) {
      Y = x.finishReason, x.usage != null && (R = $u(x.usage));
    },
    onErrorPart(x) {
      throw new Error(x);
    }
  }), o?.({ message: u, finishReason: Y, usage: R });
}
async function uf({
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
async function ff({
  stream: e,
  update: t,
  onFinish: n,
  getCurrentDate: o = () => /* @__PURE__ */ new Date(),
  generateId: r = vr
}) {
  const s = { type: "text", text: "" }, i = {
    id: r(),
    createdAt: o(),
    role: "assistant",
    content: "",
    parts: [s]
  };
  await uf({
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
var df = () => fetch;
async function pf({
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
  fetch: h = df(),
  lastMessage: m,
  requestType: O = "generate"
}) {
  var C, J, F;
  const R = await (O === "resume" ? h(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (C = s?.()) == null ? void 0 : C.signal,
    credentials: o
  }) : h(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (J = s?.()) == null ? void 0 : J.signal,
    credentials: o
  })).catch((Y) => {
    throw i(), Y;
  });
  if (l)
    try {
      await l(R);
    } catch (Y) {
      throw Y;
    }
  if (!R.ok)
    throw i(), new Error(
      (F = await R.text()) != null ? F : "Failed to fetch the chat response."
    );
  if (!R.body)
    throw new Error("The response body is empty.");
  switch (n) {
    case "text": {
      await ff({
        stream: R.body,
        update: a,
        onFinish: f,
        generateId: u
      });
      return;
    }
    case "data": {
      await cf({
        stream: R.body,
        update: a,
        lastMessage: m,
        onToolCall: d,
        onFinish({ message: Y, finishReason: w, usage: x }) {
          f && Y != null && f(Y, { usage: x, finishReason: w });
        },
        generateId: u
      });
      return;
    }
    default: {
      const Y = n;
      throw new Error(`Unknown stream protocol: ${Y}`);
    }
  }
}
function qo(e) {
  return e?.reduce((t, n) => {
    var o;
    return Math.max(t, (o = n.step) != null ? o : 0);
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
function Mn(e) {
  return e.map((t) => ({
    ...t,
    parts: qi(t)
  }));
}
async function bs(e) {
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
function hf({
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
    (o.length > t || qo(s.toolInvocations) !== e) && // check that next step is possible:
    Xi(s) && // limit the number of automatic steps:
    ((r = qo(s.toolInvocations)) != null ? r : 0) < n
  );
}
function Xi(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((o, r, s) => r.type === "step-start" ? s : o, -1), n = e.parts.slice(t + 1).filter((o) => o.type === "tool-invocation");
  return n.length > 0 && n.every((o) => "result" in o.toolInvocation);
}
function gf({
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
var To = /* @__PURE__ */ new WeakMap(), ys = 0;
function mf(e) {
  if (!e.length)
    return "";
  for (var t = "arg", n = 0; n < e.length; ++n) {
    var o = void 0;
    e[n] === null || typeof e[n] != "object" && typeof e[n] != "function" ? typeof e[n] == "string" ? o = '"' + e[n] + '"' : o = String(e[n]) : To.has(e[n]) ? o = To.get(e[n]) : (o = ys, To.set(e[n], ys++)), t += "@" + o;
  }
  return t;
}
function _f(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = mf(e) : e = String(e || ""), e;
}
var wr = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return _f(t);
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
function bf() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function yf() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var Ef = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const Co = {
  isOnline: bf,
  isDocumentVisible: yf,
  fetcher: Ef
};
var ft = function() {
  return ft = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ft.apply(this, arguments);
}, Bt = function(e, t, n, o) {
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
}, Kt = function(e, t) {
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
}, vf = function(e, t) {
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
}, Nf = function(e, t, n) {
  if (n || arguments.length === 2) for (var o = 0, r = t.length, s; o < r; o++)
    (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}, Zi = new wr(), no = new wr(), Vo = new wr(), Qi = {
  cache: Zi,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: !0,
  revalidateDebounce: 0,
  shouldRetryOnError: !0,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: Co.fetcher,
  isOnline: Co.isOnline,
  isDocumentVisible: Co.isDocumentVisible
};
function wf(e, t, n) {
  var o = no.get(e);
  if (o)
    o.data.push(t);
  else {
    var r = 5e3;
    no.set(e, [t], n > 0 ? n + r : n);
  }
}
function xf(e, t, n) {
  if (n.isDocumentVisible() && !(n.errorRetryCount !== void 0 && t > n.errorRetryCount)) {
    var o = Math.min(t || 0, n.errorRetryCount), r = o * n.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: o + 1, shouldRetryOnError: !0 });
    }, r);
  }
}
var Es = function(e, t, n, o) {
  return n === void 0 && (n = Zi), o === void 0 && (o = Qi.ttl), Bt(void 0, void 0, void 0, function() {
    var r, s, i, l, a, f, d;
    return Kt(this, function(u) {
      switch (u.label) {
        case 0:
          if (!Of(t)) return [3, 5];
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
          return f = no.get(e), f && f.data.length && (d = f.data.filter(function(h) {
            return h.key === e;
          }), d.forEach(function(h, m) {
            typeof a.data < "u" && (h.data = a.data), h.error = a.error, h.isValidating = a.isValidating, h.isLoading = a.isValidating;
            var O = m === d.length - 1;
            O || delete d[m];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function vs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var o, r, s = ft({}, Qi), i = !1, l = !1, a = br(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (o = t[0]), t.length >= 2 && (r = t[1]), t.length > 2 && (s = ft(ft({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, h = typeof o == "function" ? o : Ve(o);
  typeof r > "u" && (r = s.fetcher);
  var m = null;
  m || (m = Dn({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var O = function(L, R) {
    return Bt(e, void 0, void 0, function() {
      var Y, w, x, j, H, k, X, he = this;
      return Kt(this, function(re) {
        switch (re.label) {
          case 0:
            return Y = m.data === void 0, w = h.value, w ? (x = s.cache.get(w), j = x && x.data, m.isValidating = !0, m.isLoading = !j, j && (m.data = j.data, m.error = j.error), H = L || r, !H || !s.isDocumentVisible() && !Y || R?.forceRevalidate !== void 0 && !R?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : x && (k = !!(Date.now() - x.createdAt >= s.dedupingInterval || R?.forceRevalidate), !k) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (X = function() {
              return Bt(he, void 0, void 0, function() {
                var se, De, ye, S;
                return Kt(this, function(b) {
                  switch (b.label) {
                    case 0:
                      return se = Vo.get(w), se ? [3, 2] : (De = Array.isArray(w) ? w : [w], ye = H.apply(void 0, Nf([], vf(De), !1)), Vo.set(w, ye, s.dedupingInterval), [4, Es(w, ye, s.cache, u)]);
                    case 1:
                      return b.sent(), [3, 4];
                    case 2:
                      return [4, Es(w, se.data, s.cache, u)];
                    case 3:
                      b.sent(), b.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Vo.delete(w), m.error !== void 0 && (S = !i && s.shouldRetryOnError && (R ? R.shouldRetryOnError : !0), S && xf(O, R ? R.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, j && s.revalidateDebounce ? (setTimeout(function() {
              return Bt(he, void 0, void 0, function() {
                return Kt(this, function(se) {
                  switch (se.label) {
                    case 0:
                      return i ? [3, 2] : [4, X()];
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
            return [4, X()];
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
  }, C = function() {
    return Bt(e, void 0, void 0, function() {
      return Kt(this, function(L) {
        return [2, O(null, { shouldRetryOnError: !1 })];
      });
    });
  }, J = null;
  fr(function() {
    var L = function() {
      return Bt(e, void 0, void 0, function() {
        return Kt(this, function(R) {
          switch (R.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, O()] : [3, 2];
            case 1:
              return R.sent(), [3, 3];
            case 2:
              J && clearTimeout(J), R.label = 3;
            case 3:
              return s.refreshInterval && !i && (J = setTimeout(L, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (J = setTimeout(L, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", C, !1), window.addEventListener("focus", C, !1));
  }), dr(function() {
    i = !0, J && clearTimeout(J), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", C, !1), window.removeEventListener("focus", C, !1));
    var L = no.get(h.value);
    L && (L.data = L.data.filter(function(R) {
      return R !== m;
    }));
  });
  try {
    pt(h, function(L) {
      qe(h) || (h.value = L), m.key = L, m.isValidating = !!L, wf(h.value, m, u), !d && !l && h.value && O(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var F = ft(ft({}, Bl(m)), { mutate: function(L, R) {
    return O(L, ft(ft({}, R), { forceRevalidate: !0 }));
  } });
  return F;
}
function Of(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Sf = vs.default || vs, Ns = {}, ws = {};
function Df({
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
  generateId: h = vr,
  onToolCall: m,
  fetch: O,
  keepLastMessageOnError: C = !0,
  maxSteps: J = 1,
  experimental_prepareRequestBody: F
} = {
  maxSteps: 1
}) {
  var L, R;
  const Y = t ?? h(), w = `${e}|${Y}`, { data: x, mutate: j } = Sf(
    w,
    () => {
      var W;
      return (W = Ns[w]) != null ? W : Mn(n);
    }
  ), H = (L = ws[Y]) != null ? L : ws[Y] = Ve(
    "ready"
  );
  (R = x.value) != null || (x.value = Mn(n));
  const k = (W) => (Ns[w] = W, j()), X = x, he = Ve(void 0), re = Ve(void 0);
  let se = null;
  async function De(W, { data: ie, headers: ue, body: Ee } = {}) {
    var ge, Le, mt;
    he.value = void 0, H.value = "submitted";
    const An = X.value.length, xt = qo(
      (ge = X.value[X.value.length - 1]) == null ? void 0 : ge.toolInvocations
    );
    try {
      se = new AbortController();
      const _t = Mn(W), c = _t;
      k(c);
      const p = (Le = re.value) != null ? Le : [], _ = r ? c : c.map(
        ({
          role: v,
          content: y,
          experimental_attachments: E,
          data: V,
          annotations: I,
          toolInvocations: D,
          parts: N
        }) => ({
          role: v,
          content: y,
          ...E !== void 0 && {
            experimental_attachments: E
          },
          ...V !== void 0 && { data: V },
          ...I !== void 0 && { annotations: I },
          ...D !== void 0 && { toolInvocations: D },
          ...N !== void 0 && { parts: N }
        })
      );
      await pf({
        api: e,
        body: (mt = F?.({
          id: Y,
          messages: c,
          requestData: ie,
          requestBody: Ee
        })) != null ? mt : {
          id: Y,
          messages: _,
          data: ie,
          ...me(u),
          // Use unref to unwrap the ref value
          ...Ee
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...ue
        },
        abortController: () => se,
        credentials: f,
        onResponse: i,
        onUpdate({ message: v, data: y, replaceLastMessage: E }) {
          H.value = "streaming", k([
            ...E ? c.slice(0, c.length - 1) : c,
            v
          ]), y?.length && (re.value = [...p, ...y]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          C || k(_t);
        },
        generateId: h,
        onToolCall: m,
        fetch: O,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Xo(c[c.length - 1])
      }), H.value = "ready";
    } catch (_t) {
      if (_t.name === "AbortError")
        return se = null, H.value = "ready", null;
      a && _t instanceof Error && a(_t), he.value = _t, H.value = "error";
    } finally {
      se = null;
    }
    hf({
      originalMaxToolInvocationStep: xt,
      originalMessageCount: An,
      maxSteps: J,
      messages: X.value
    }) && await De(X.value);
  }
  const ye = async (W, ie) => {
    var ue, Ee, ge;
    const Le = await bs(
      (ue = ie?.experimental_attachments) != null ? ue : W.experimental_attachments
    );
    return De(
      X.value.concat({
        ...W,
        id: (Ee = W.id) != null ? Ee : h(),
        createdAt: (ge = W.createdAt) != null ? ge : /* @__PURE__ */ new Date(),
        experimental_attachments: Le.length > 0 ? Le : void 0,
        parts: qi(W)
      }),
      ie
    );
  }, S = async (W) => {
    const ie = X.value;
    return ie.length === 0 ? null : ie[ie.length - 1].role === "assistant" ? De(ie.slice(0, -1), W) : De(ie, W);
  }, b = () => {
    se && (se.abort(), se = null);
  }, P = (W) => {
    typeof W == "function" && (W = W(X.value)), k(Mn(W));
  }, pe = (W) => {
    typeof W == "function" && (W = W(re.value)), re.value = W;
  }, Pe = Ve(o), at = async (W, ie = {}) => {
    var ue;
    (ue = W?.preventDefault) == null || ue.call(W);
    const Ee = Pe.value;
    if (!Ee && !ie.allowEmptySubmit)
      return;
    const ge = await bs(
      ie.experimental_attachments
    );
    De(
      X.value.concat({
        id: h(),
        createdAt: /* @__PURE__ */ new Date(),
        content: Ee,
        role: "user",
        experimental_attachments: ge.length > 0 ? ge : void 0,
        parts: [{ type: "text", text: Ee }]
      }),
      ie
    ), Pe.value = "";
  }, ke = ({
    toolCallId: W,
    result: ie
  }) => {
    const ue = X.value;
    if (gf({
      messages: ue,
      toolCallId: W,
      toolResult: ie
    }), k(ue), H.value === "submitted" || H.value === "streaming")
      return;
    const Ee = ue[ue.length - 1];
    Xi(Ee) && De(ue);
  };
  return {
    id: Y,
    messages: X,
    append: ye,
    error: he,
    reload: S,
    stop: b,
    setMessages: P,
    input: Pe,
    handleSubmit: at,
    isLoading: yr(
      () => H.value === "submitted" || H.value === "streaming"
    ),
    status: H,
    data: re,
    setData: pe,
    addToolResult: ke
  };
}
function Xo(e) {
  if (Array.isArray(e))
    return [...e.map(Xo)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [n, o] of Object.entries(e))
      t[n] = Xo(o);
    return t;
  } else
    return e;
}
function If(e) {
  const t = Ve(!1), n = Ve(""), o = Ve(!0);
  let r = null, s = [], i = null;
  const l = () => {
    const h = window.SpeechRecognition || window.webkitSpeechRecognition;
    return o.value = !!h, h;
  }, a = () => {
    const h = l();
    return h ? (i = new h(), i.continuous = !0, i.interimResults = !0, i.lang = "zh-CN", i.onresult = (m) => {
      let O = "";
      for (let C = m.resultIndex; C < m.results.length; C++)
        m.results[C].isFinal && (O += m.results[C][0].transcript);
      if (O) {
        const C = O.trim();
        if (["结束对话", "退出语音", "关闭语音", "结束语音", "停止录音", "结束对话。", "退出语音。", "关闭语音。", "结束语音。", "停止录音。"].includes(C)) {
          console.log("[ASR] 检测到结束对话命令，自动停止录音"), d();
          return;
        }
        e(O);
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
          await u(m), h.getTracks().forEach((O) => O.stop());
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
    isRecording: cn(t),
    error: cn(n),
    isSupported: cn(o),
    start: f,
    stop: d
  };
}
const Tf = {
  key: 0,
  class: "chat-panel"
}, Cf = {
  key: 0,
  class: "msg-empty"
}, Vf = { key: 0 }, Af = { key: 1 }, Rf = {
  key: 0,
  class: "msg-content"
}, Pf = {
  key: 1,
  class: "msg-line msg-ai"
}, kf = { class: "chat-toolbar" }, Mf = ["title"], $f = {
  key: 0,
  class: "speech-indicator"
}, jf = ["disabled"], nn = "ai-chat-bubble-data", xs = "ai-chat-bubble-position", Ff = 24, Lf = /* @__PURE__ */ ii({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, n = Ve(!1), o = Ve(null), r = Df({
      // 修复API路径 - 移除错误的路径处理逻辑 
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat"),
      onToolCall: async ({ toolCall: S }) => {
        if (console.log("[onToolCall] 工具被调用:", S), S.toolName === "navigateToPage") {
          const b = S.args.path;
          return console.log(`[onToolCall] 导航工具调用: ${b}`), ye(b), { path: b, success: !0 };
        }
        if (S.toolName === "zoomInOnPhoto") {
          const b = S.args.photoTitle;
          return console.log(`[onToolCall] 图片放大工具调用: ${b}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
            detail: { title: b },
            bubbles: !0,
            composed: !0
          })), { title: b };
        }
        if (S.toolName === "zoomOutPhoto") {
          const b = S.args.action || "close";
          return console.log(`[onToolCall] 图片缩小工具调用: ${b}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
            detail: { action: b },
            bubbles: !0,
            composed: !0
          })), { action: b, success: !0 };
        }
        if (S.toolName === "toggleSpeechMode") {
          const b = S.args.action;
          return n.value = b === "on", console.log(`[onToolCall] 语音模式已${b === "on" ? "开启" : "关闭"}，前端状态强制更新为: ${n.value}`), {
            status: b,
            message: `语音播报模式已${b === "on" ? "开启" : "关闭"}`
          };
        }
        if (S.toolName === "speakOnce") {
          const { textToSpeak: b } = S.args;
          return console.log(`[onToolCall] 执行单次语音播报: "${b.substring(0, 50)}..."`), re(b), { text: b, mode: "once", executed: !0 };
        }
        return S.toolName === "stopSpeech" ? (se(), console.log("[onToolCall] 停止播报（模式保持不变：" + n.value + "）"), { status: "stopped", message: "语音播报已停止" }) : {};
      },
      onFinish: (S) => {
        console.log("[onFinish] AI回复完成:", S.content), w(), n.value && S.content && (console.log("[onFinish] 全局语音模式开启，开始播报"), re(S.content));
      }
    }), s = r.messages, i = r.input, l = r.handleSubmit, a = r.isLoading, f = r.error, { isRecording: d, start: u, stop: h, error: m } = If((S) => {
      const b = S.trim();
      if (["发送", "提交", "发出", "发送。", "提交。", "发出。"].includes(b)) {
        if (i.value.trim()) {
          console.log("[语音指令] 执行发送，内容:", `"${i.value}"`);
          const P = new Event("submit", { bubbles: !0, cancelable: !0 });
          l(P);
        } else
          console.log("[语音指令] 输入框为空，无可发送内容");
        return;
      }
      if (["清空", "清除", "删除", "清除。", "清空。", "删除。"].includes(b)) {
        console.log("[语音指令] 执行清空"), i.value = "";
        return;
      }
      if (["停止播报", "停止", "别说了", "安静"].includes(b)) {
        console.log("[语音指令] 执行停止播报（不改变模式）"), se();
        return;
      }
      if (b.endsWith("发送") && b.length > 2) {
        const P = b.slice(0, -2).trim();
        P && (i.value = P, Wt(() => l()));
        return;
      }
      console.log(`[语音指令] 设置输入内容: "${b}"`), i.value = b;
    }), O = Ve(!1), C = Dn({ x: 0, y: 0 }), J = Ve(null), F = Ve(null), L = Ve(!1);
    function R() {
      O.value = !O.value, w();
    }
    function Y() {
      L.value || R();
    }
    function w() {
      try {
        const S = {
          messages: s.value,
          timestamp: Date.now(),
          speechMode: n.value,
          chatOpen: O.value
        };
        localStorage.setItem(nn, JSON.stringify(S)), console.log(`[存储] 已保存 ${s.value.length} 条对话记录`);
      } catch (S) {
        console.error("[存储] 保存对话历史失败:", S);
      }
    }
    function x() {
      try {
        const S = localStorage.getItem(nn);
        if (!S) {
          console.log("[存储] 没有找到历史记录");
          return;
        }
        const b = JSON.parse(S), P = Date.now(), pe = Ff * 60 * 60 * 1e3;
        if (P - b.timestamp > pe) {
          console.log("[存储] 历史记录已过期，清除数据"), localStorage.removeItem(nn);
          return;
        }
        b.messages && Array.isArray(b.messages) && (s.value.length = 0, b.messages.forEach((Pe) => {
          s.value.push(Pe);
        }), console.log(`[存储] 已恢复 ${b.messages.length} 条对话记录`)), typeof b.speechMode == "boolean" && (n.value = b.speechMode, console.log(`[存储] 已恢复语音模式: ${b.speechMode}`)), typeof b.chatOpen == "boolean" && (O.value = b.chatOpen, console.log(`[存储] 已恢复对话框状态: ${b.chatOpen}`));
      } catch (S) {
        console.error("[存储] 恢复对话历史失败:", S), localStorage.removeItem(nn);
      }
    }
    function j() {
      try {
        const S = {
          x: C.x,
          y: C.y,
          timestamp: Date.now()
        };
        localStorage.setItem(xs, JSON.stringify(S)), console.log("[存储] 已保存悬浮球位置");
      } catch (S) {
        console.error("[存储] 保存位置失败:", S);
      }
    }
    function H() {
      try {
        const S = localStorage.getItem(xs);
        if (!S) return;
        const b = JSON.parse(S), P = J.value;
        if (P) {
          const pe = window.innerWidth - P.offsetWidth, Pe = window.innerHeight - P.offsetHeight;
          if (b.x >= 0 && b.x <= pe && b.y >= 0 && b.y <= Pe) {
            C.x = b.x, C.y = b.y, console.log("[存储] 已恢复悬浮球位置");
            return;
          }
        }
        k();
      } catch (S) {
        console.error("[存储] 恢复位置失败:", S), k();
      }
    }
    function k() {
      const S = J.value;
      S && (C.x = window.innerWidth - S.offsetWidth - 20, C.y = window.innerHeight - S.offsetHeight - 20);
    }
    function X() {
      confirm("确定要清除所有对话历史吗？此操作无法撤销。") && (s.value.length = 0, i.value = "", localStorage.removeItem(nn), se(), console.log("[清除历史] 对话历史已完全清除"));
    }
    function he() {
      const S = !n.value;
      n.value = S, console.log(`[语音模式] 用户${S ? "开启" : "关闭"}语音模式，状态已更新为：${n.value}`), w();
      const b = S ? "开启语音模式" : "关闭语音模式";
      i.value = b, Wt(() => {
        l(), setTimeout(() => {
          i.value = "";
        }, 100);
      }), S ? re("准备就绪") : se();
    }
    function re(S) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const b = new SpeechSynthesisUtterance(S);
        b.lang = "zh-CN", b.rate = 1.5, window.speechSynthesis.speak(b);
      } else
        console.error("您的浏览器不支持语音合成功能。");
    }
    function se() {
      "speechSynthesis" in window && (console.log("[TTS] 停止播报"), window.speechSynthesis.cancel(), o.value = null);
    }
    yr(() => {
      if (!a.value) return !1;
      const S = [...s.value].reverse().find((b) => b.role === "user");
      return !!(S && /摇骰子|掷骰子/.test(S.content));
    }), pt(s, async (S, b) => {
      S.length > 0 && w(), await Wt(), F.value && (F.value.scrollTop = F.value.scrollHeight);
    }, { deep: !0 }), pt(n, (S) => {
      w();
    }), pt(O, (S) => {
      w();
    }), pt(f, (S) => {
      S && console.error("[Assistant] An error occurred:", S);
    }), pt(m, (S) => {
      if (S && (console.error("[ASR] 语音识别错误:", S), F.value)) {
        const b = document.createElement("div");
        b.className = "msg-line msg-ai error-msg", b.textContent = `语音识别错误: ${S}`, F.value.appendChild(b), F.value.scrollTop = F.value.scrollHeight;
      }
    });
    function De(S) {
      S.preventDefault();
      const b = J.value, P = S.clientX, pe = S.clientY, Pe = C.x, at = C.y;
      let ke = !1;
      function W(ue) {
        const Ee = ue.clientX - P, ge = ue.clientY - pe;
        if (!ke && (Math.abs(Ee) > 5 || Math.abs(ge) > 5) && (ke = !0, L.value = !0), ke) {
          const Le = Math.min(Math.max(0, Pe + Ee), window.innerWidth - b.offsetWidth), mt = Math.min(Math.max(0, at + ge), window.innerHeight - b.offsetHeight);
          C.x = Le, C.y = mt;
        }
      }
      function ie() {
        document.removeEventListener("mousemove", W), document.removeEventListener("mouseup", ie), setTimeout(() => {
          L.value = !1, ke && j();
        }, 10);
      }
      document.addEventListener("mousemove", W), document.addEventListener("mouseup", ie);
    }
    fr(() => {
      J.value, Wt(() => {
        H(), x();
      });
    });
    function ye(S) {
      w(), j(), typeof S == "string" && S.length > 0 ? (window.location.href = S, console.log(`[Navigation] 页面跳转到: ${S}`)) : console.error("[Navigation] 跳转路径无效:", S);
    }
    return (S, b) => (He(), Be("div", {
      ref_key: "containerRef",
      ref: J,
      class: "ai-bubble-container",
      style: lo({ left: C.x + "px", top: C.y + "px" })
    }, [
      $e("div", {
        class: "floating-ball",
        onMousedown: De,
        onClick: Y
      }, "AI", 32),
      O.value ? (He(), Be("div", Tf, [
        O.value ? (He(), Be("div", {
          key: 0,
          class: "close-btn",
          onClick: R
        }, "×")) : Ft("", !0),
        $e("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: F
        }, [
          me(s).length === 0 ? (He(), Be("div", Cf, [
            b[4] || (b[4] = Ko(" 有什么可以帮您的吗？", -1)),
            b[5] || (b[5] = $e("br", null, null, -1)),
            n.value ? (He(), Be("small", Vf, " 💡 当前为朗读开启模式，所有回答都会自动语音播报 ")) : (He(), Be("small", Af, ' 💡 当前为朗读关闭模式，在问题后加上"语音播报"可以听到回答 '))
          ])) : Ft("", !0),
          (He(!0), Be(Ke, null, Aa(me(s), (P) => (He(), Be("div", {
            key: P.id,
            class: Yt(["msg-line", P.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            P.role === "user" || P.role === "assistant" ? (He(), Be("div", Rf, Ro(P.content), 1)) : Ft("", !0)
          ], 2))), 128)),
          me(a) ? (He(), Be("div", Pf, b[6] || (b[6] = [
            $e("span", null, "思考中...", -1)
          ]))) : Ft("", !0)
        ], 512),
        $e("div", kf, [
          $e("button", {
            onClick: he,
            class: Yt(["toolbar-btn", { active: n.value }]),
            title: n.value ? "关闭连续语音播报模式（将只在明确要求时播报）" : "开启连续语音播报模式（所有回答都将自动播报）"
          }, [
            Ko(Ro(n.value ? "🔊 朗读开启" : "🔇 朗读关闭") + " ", 1),
            n.value ? (He(), Be("span", $f)) : Ft("", !0)
          ], 10, Mf),
          $e("button", {
            onClick: X,
            class: "toolbar-btn clear-btn",
            title: "清除对话历史"
          }, " 🗑️ 清除 ")
        ]),
        $e("form", {
          onSubmit: b[3] || (b[3] = fs(
            //@ts-ignore
            (...P) => me(l) && me(l)(...P),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          ma($e("textarea", {
            "onUpdate:modelValue": b[0] || (b[0] = (P) => ce(i) ? i.value = P : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: b[1] || (b[1] = cu(fs(
              //@ts-ignore
              (...P) => me(l) && me(l)(...P),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [su, me(i)]
          ]),
          $e("button", {
            type: "button",
            class: Yt(["btn-voice", { listening: me(d) }]),
            onClick: b[2] || (b[2] = (P) => me(d) ? me(h)() : me(u)()),
            title: "语音输入"
          }, "🎤", 2),
          $e("button", {
            type: "submit",
            class: "btn-send",
            disabled: me(a) || !me(i).trim()
          }, "➤", 8, jf)
        ], 32)
      ])) : Ft("", !0)
    ], 4));
  }
}), Hf = ".ai-bubble-container{position:fixed;z-index:99999;font-size:16px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:400px;height:520px;background:#fff;border-radius:10px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden;z-index:99999}.msg-content{white-space:pre-wrap;word-break:break-word;line-height:1.5}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:6px 16px;font-size:16px;line-height:1.3;background:#fafafa;outline:none;max-height:80px;overflow-y:auto}.btn-voice,.btn-send{width:36px;height:36px;margin-left:8px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}.chat-toolbar{padding:4px 8px;background:#f0f0f0;border-top:1px solid #ddd;display:flex;justify-content:space-between;align-items:center}.toolbar-btn{background:#e0e0e0;border:1px solid #ccc;border-radius:12px;padding:6px 12px;font-size:12px;cursor:pointer;transition:all .3s ease;font-weight:500}.toolbar-btn.active{background:#4caf50;color:#fff;border-color:#4caf50;box-shadow:0 2px 4px #4caf504d}.toolbar-btn.clear-btn{background:#ff6b6b;color:#fff;border-color:#ff6b6b;font-size:11px;padding:4px 8px}.toolbar-btn.clear-btn:hover{background:#ff5252;transform:translateY(-1px)}.toolbar-btn:hover{transform:translateY(-1px);box-shadow:0 2px 8px #00000026}.speech-indicator{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#fff;margin-left:5px;animation:pulse-speech 1.5s infinite}@keyframes pulse-speech{0%{opacity:.3}50%{opacity:1}to{opacity:.3}}", Uf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Bf = /* @__PURE__ */ Uf(Lf, [["styles", [Hf]]]), Kf = /* @__PURE__ */ nu(Bf);
customElements.define("ai-chat-bubble", Kf);
export {
  Kf as AiChatBubbleElement
};
