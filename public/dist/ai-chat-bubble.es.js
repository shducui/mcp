var Os = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function mt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = Os.NODE_ENV !== "production" ? Object.freeze({}) : {}, Yt = Os.NODE_ENV !== "production" ? Object.freeze([]) : [], ge = () => {
}, el = () => !1, Sn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Wn = (e) => e.startsWith("onUpdate:"), ce = Object.assign, Zo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, tl = Object.prototype.hasOwnProperty, z = (e, t) => tl.call(e, t), j = Array.isArray, Vt = (e) => oo(e) === "[object Map]", Ss = (e) => oo(e) === "[object Set]", U = (e) => typeof e == "function", ie = (e) => typeof e == "string", Ot = (e) => typeof e == "symbol", ne = (e) => e !== null && typeof e == "object", Qo = (e) => (ne(e) || U(e)) && U(e.then) && U(e.catch), Ds = Object.prototype.toString, oo = (e) => Ds.call(e), er = (e) => oo(e).slice(8, -1), ro = (e) => oo(e) === "[object Object]", tr = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = /* @__PURE__ */ mt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), nl = /* @__PURE__ */ mt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), so = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ol = /-(\w)/g, Me = so(
  (e) => e.replace(ol, (t, n) => n ? n.toUpperCase() : "")
), rl = /\B([A-Z])/g, Pe = so(
  (e) => e.replace(rl, "-$1").toLowerCase()
), io = so((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tt = so(
  (e) => e ? `on${io(e)}` : ""
), wt = (e, t) => !Object.is(e, t), Ut = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, hn = (e, t, n, o = !1) => {
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
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ir;
const Dn = () => Ir || (Ir = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function lo(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ie(o) ? al(o) : lo(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (ie(e) || ne(e))
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
function Gt(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (j(e))
    for (let n = 0; n < e.length; n++) {
      const o = Gt(e[n]);
      o && (t += o + " ");
    }
  else if (ne(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const cl = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ul = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", fl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", dl = /* @__PURE__ */ mt(cl), pl = /* @__PURE__ */ mt(ul), hl = /* @__PURE__ */ mt(fl), gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ml = /* @__PURE__ */ mt(gl);
function Is(e) {
  return !!e || e === "";
}
const Ts = (e) => !!(e && e.__v_isRef === !0), Ro = (e) => ie(e) ? e : e == null ? "" : j(e) || ne(e) && (e.toString === Ds || !U(e.toString)) ? Ts(e) ? Ro(e.value) : JSON.stringify(e, Cs, 2) : String(e), Cs = (e, t) => Ts(t) ? Cs(e, t.value) : Vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[bo(o, s) + " =>"] = r, n),
    {}
  )
} : Ss(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => bo(n))
} : Ot(t) ? bo(t) : ne(t) && !j(t) && !ro(t) ? String(t) : t, bo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var oe = {};
function ze(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Re;
class _l {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Re, !t && Re && (this.index = (Re.scopes || (Re.scopes = [])).push(
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
      const n = Re;
      try {
        return Re = this, t();
      } finally {
        Re = n;
      }
    } else oe.NODE_ENV !== "production" && ze("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Re, Re = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Re = this.prevScope, this.prevScope = void 0);
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
  return Re;
}
let Q;
const yo = /* @__PURE__ */ new WeakSet();
class Vs {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Re && Re.active && Re.effects.push(this);
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
    const t = Q, n = Ge;
    Q = this, Ge = !0;
    try {
      return this.fn();
    } finally {
      oe.NODE_ENV !== "production" && Q !== this && ze(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ms(this), Q = t, Ge = n, this.flags &= -3;
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
let As = 0, an, cn;
function Rs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = cn, cn = e;
    return;
  }
  e.next = an, an = e;
}
function nr() {
  As++;
}
function or() {
  if (--As > 0)
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
function Ms(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const r = o.prevDep;
    o.version === -1 ? (o === n && (n = r), rr(o), yl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = r;
  }
  e.deps = t, e.depsTail = n;
}
function Po(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ks(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ks(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === gn) || (e.globalVersion = gn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Po(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Q, o = Ge;
  Q = e, Ge = !0;
  try {
    Ps(e);
    const r = e.fn(e._value);
    (t.version === 0 || wt(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    Q = n, Ge = o, Ms(e), e.flags &= -3;
  }
}
function rr(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: r } = e;
  if (o && (o.nextSub = r, e.prevSub = void 0), r && (r.prevSub = o, e.nextSub = void 0), oe.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = o, !o && n.computed)) {
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
let Ge = !0;
const $s = [];
function qe() {
  $s.push(Ge), Ge = !1;
}
function Xe() {
  const e = $s.pop();
  Ge = e === void 0 ? !0 : e;
}
function Tr(e) {
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
let gn = 0;
class El {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class sr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, oe.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Q || !Ge || Q === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Q)
      n = this.activeLink = new El(Q, this), Q.deps ? (n.prevDep = Q.depsTail, Q.depsTail.nextDep = n, Q.depsTail = n) : Q.deps = Q.depsTail = n, js(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = Q.depsTail, n.nextDep = void 0, Q.depsTail.nextDep = n, Q.depsTail = n, Q.deps === n && (Q.deps = o);
    }
    return oe.NODE_ENV !== "production" && Q.onTrack && Q.onTrack(
      ce(
        {
          effect: Q
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, gn++, this.notify(t);
  }
  notify(t) {
    nr();
    try {
      if (oe.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ce(
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
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), oe.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Jn = /* @__PURE__ */ new WeakMap(), At = Symbol(
  oe.NODE_ENV !== "production" ? "Object iterate" : ""
), Mo = Symbol(
  oe.NODE_ENV !== "production" ? "Map keys iterate" : ""
), mn = Symbol(
  oe.NODE_ENV !== "production" ? "Array iterate" : ""
);
function he(e, t, n) {
  if (Ge && Q) {
    let o = Jn.get(e);
    o || Jn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || (o.set(n, r = new sr()), r.map = o, r.key = n), oe.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function rt(e, t, n, o, r, s) {
  const i = Jn.get(e);
  if (!i) {
    gn++;
    return;
  }
  const l = (a) => {
    a && (oe.NODE_ENV !== "production" ? a.trigger({
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
    const a = j(e), f = a && tr(n);
    if (a && n === "length") {
      const d = Number(o);
      i.forEach((u, h) => {
        (h === "length" || h === mn || !Ot(h) && h >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), f && l(i.get(mn)), t) {
        case "add":
          a ? f && l(i.get("length")) : (l(i.get(At)), Vt(e) && l(i.get(Mo)));
          break;
        case "delete":
          a || (l(i.get(At)), Vt(e) && l(i.get(Mo)));
          break;
        case "set":
          Vt(e) && l(i.get(At));
          break;
      }
  }
  or();
}
function vl(e, t) {
  const n = Jn.get(e);
  return n && n.get(t);
}
function jt(e) {
  const t = G(e);
  return t === e ? t : (he(t, "iterate", mn), Ie(e) ? t : t.map(be));
}
function ao(e) {
  return he(e = G(e), "iterate", mn), e;
}
const Nl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Eo(this, Symbol.iterator, be);
  },
  concat(...e) {
    return jt(this).concat(
      ...e.map((t) => j(t) ? jt(t) : t)
    );
  },
  entries() {
    return Eo(this, "entries", (e) => (e[1] = be(e[1]), e));
  },
  every(e, t) {
    return dt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dt(this, "filter", e, t, (n) => n.map(be), arguments);
  },
  find(e, t) {
    return dt(this, "find", e, t, be, arguments);
  },
  findIndex(e, t) {
    return dt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dt(this, "findLast", e, t, be, arguments);
  },
  findLastIndex(e, t) {
    return dt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return dt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return vo(this, "includes", e);
  },
  indexOf(...e) {
    return vo(this, "indexOf", e);
  },
  join(e) {
    return jt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return vo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return en(this, "pop");
  },
  push(...e) {
    return en(this, "push", e);
  },
  reduce(e, ...t) {
    return Cr(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Cr(this, "reduceRight", e, t);
  },
  shift() {
    return en(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return dt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return en(this, "splice", e);
  },
  toReversed() {
    return jt(this).toReversed();
  },
  toSorted(e) {
    return jt(this).toSorted(e);
  },
  toSpliced(...e) {
    return jt(this).toSpliced(...e);
  },
  unshift(...e) {
    return en(this, "unshift", e);
  },
  values() {
    return Eo(this, "values", be);
  }
};
function Eo(e, t, n) {
  const o = ao(e), r = o[t]();
  return o !== e && !Ie(e) && (r._next = r.next, r.next = () => {
    const s = r._next();
    return s.value && (s.value = n(s.value)), s;
  }), r;
}
const wl = Array.prototype;
function dt(e, t, n, o, r, s) {
  const i = ao(e), l = i !== e && !Ie(e), a = i[t];
  if (a !== wl[t]) {
    const u = a.apply(e, s);
    return l ? be(u) : u;
  }
  let f = n;
  i !== e && (l ? f = function(u, h) {
    return n.call(this, be(u), h, e);
  } : n.length > 2 && (f = function(u, h) {
    return n.call(this, u, h, e);
  }));
  const d = a.call(i, f, o);
  return l && r ? r(d) : d;
}
function Cr(e, t, n, o) {
  const r = ao(e);
  let s = n;
  return r !== e && (Ie(e) ? n.length > 3 && (s = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : s = function(i, l, a) {
    return n.call(this, i, be(l), a, e);
  }), r[t](s, ...o);
}
function vo(e, t, n) {
  const o = G(e);
  he(o, "iterate", mn);
  const r = o[t](...n);
  return (r === -1 || r === !1) && _n(n[0]) ? (n[0] = G(n[0]), o[t](...n)) : r;
}
function en(e, t, n = []) {
  qe(), nr();
  const o = G(e)[t].apply(e, n);
  return or(), Xe(), o;
}
const xl = /* @__PURE__ */ mt("__proto__,__v_isRef,__isVue"), Fs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ot)
);
function Ol(e) {
  Ot(e) || (e = String(e));
  const t = G(this);
  return he(t, "has", e), t.hasOwnProperty(e);
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
    const i = j(t);
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
      ue(t) ? t : o
    );
    return (Ot(n) ? Fs.has(n) : xl(n)) || (r || he(t, "get", n), s) ? l : ue(l) ? i && tr(n) ? l : l.value : ne(l) ? r ? un(l) : In(l) : l;
  }
}
class Hs extends Ls {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const a = Ze(s);
      if (!Ie(o) && !Ze(o) && (s = G(s), o = G(o)), !j(t) && ue(s) && !ue(o))
        return a ? !1 : (s.value = o, !0);
    }
    const i = j(t) && tr(n) ? Number(n) < t.length : z(t, n), l = Reflect.set(
      t,
      n,
      o,
      ue(t) ? t : r
    );
    return t === G(r) && (i ? wt(o, s) && rt(t, "set", n, o, s) : rt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = z(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && rt(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ot(n) || !Fs.has(n)) && he(t, "has", n), o;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      j(t) ? "length" : At
    ), Reflect.ownKeys(t);
  }
}
class Us extends Ls {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return oe.NODE_ENV !== "production" && ze(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return oe.NODE_ENV !== "production" && ze(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Sl = /* @__PURE__ */ new Hs(), Dl = /* @__PURE__ */ new Us(), Il = /* @__PURE__ */ new Hs(!0), Tl = /* @__PURE__ */ new Us(!0), ko = (e) => e, Rn = (e) => Reflect.getPrototypeOf(e);
function Cl(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = G(r), i = Vt(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = r[e](...o), d = n ? ko : t ? Yn : be;
    return !t && he(
      s,
      "iterate",
      a ? Mo : At
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
    if (oe.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      ze(
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
      e || (wt(r, l) && he(i, "get", r), he(i, "get", l));
      const { has: a } = Rn(i), f = t ? ko : e ? Yn : be;
      if (a.call(i, r))
        return f(s.get(r));
      if (a.call(i, l))
        return f(s.get(l));
      s !== i && s.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && he(G(r), "iterate", At), Reflect.get(r, "size", r);
    },
    has(r) {
      const s = this.__v_raw, i = G(s), l = G(r);
      return e || (wt(r, l) && he(i, "has", r), he(i, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    },
    forEach(r, s) {
      const i = this, l = i.__v_raw, a = G(l), f = t ? ko : e ? Yn : be;
      return !e && he(a, "iterate", At), l.forEach((d, u) => r.call(s, f(d), f(u), i));
    }
  };
  return ce(
    n,
    e ? {
      add: Pn("add"),
      set: Pn("set"),
      delete: Pn("delete"),
      clear: Pn("clear")
    } : {
      add(r) {
        !t && !Ie(r) && !Ze(r) && (r = G(r));
        const s = G(this);
        return Rn(s).has.call(s, r) || (s.add(r), rt(s, "add", r, r)), this;
      },
      set(r, s) {
        !t && !Ie(s) && !Ze(s) && (s = G(s));
        const i = G(this), { has: l, get: a } = Rn(i);
        let f = l.call(i, r);
        f ? oe.NODE_ENV !== "production" && Vr(i, l, r) : (r = G(r), f = l.call(i, r));
        const d = a.call(i, r);
        return i.set(r, s), f ? wt(s, d) && rt(i, "set", r, s, d) : rt(i, "add", r, s), this;
      },
      delete(r) {
        const s = G(this), { has: i, get: l } = Rn(s);
        let a = i.call(s, r);
        a ? oe.NODE_ENV !== "production" && Vr(s, i, r) : (r = G(r), a = i.call(s, r));
        const f = l ? l.call(s, r) : void 0, d = s.delete(r);
        return a && rt(s, "delete", r, void 0, f), d;
      },
      clear() {
        const r = G(this), s = r.size !== 0, i = oe.NODE_ENV !== "production" ? Vt(r) ? new Map(r) : new Set(r) : void 0, l = r.clear();
        return s && rt(
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
}, Ml = {
  get: /* @__PURE__ */ co(!0, !0)
};
function Vr(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const r = er(e);
    ze(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Bs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Js = /* @__PURE__ */ new WeakMap();
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kl(er(e));
}
function In(e) {
  return Ze(e) ? e : uo(
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
function un(e) {
  return uo(
    e,
    !0,
    Dl,
    Pl,
    Ws
  );
}
function it(e) {
  return uo(
    e,
    !0,
    Tl,
    Ml,
    Js
  );
}
function uo(e, t, n, o, r) {
  if (!ne(e))
    return oe.NODE_ENV !== "production" && ze(
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
function Rt(e) {
  return Ze(e) ? Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function Ie(e) {
  return !!(e && e.__v_isShallow);
}
function _n(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function Fl(e) {
  return !z(e, "__v_skip") && Object.isExtensible(e) && hn(e, "__v_skip", !0), e;
}
const be = (e) => ne(e) ? In(e) : e, Yn = (e) => ne(e) ? un(e) : e;
function ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Oe(e) {
  return Ll(e, !1);
}
function Ll(e, t) {
  return ue(e) ? e : new Hl(e, t);
}
class Hl {
  constructor(t, n) {
    this.dep = new sr(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : G(t), this._value = n ? t : be(t), this.__v_isShallow = n;
  }
  get value() {
    return oe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Ie(t) || Ze(t);
    t = o ? t : G(t), wt(t, n) && (this._rawValue = t, this._value = o ? t : be(t), oe.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Ae(e) {
  return ue(e) ? e.value : e;
}
const Ul = {
  get: (e, t, n) => t === "__v_raw" ? e : Ae(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return ue(r) && !ue(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ys(e) {
  return Rt(e) ? e : new Proxy(e, Ul);
}
function Bl(e) {
  oe.NODE_ENV !== "production" && !_n(e) && ze("toRefs() expects a reactive object but received a plain one.");
  const t = j(e) ? new Array(e.length) : {};
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
  return ue(o) ? o : new Kl(e, t, n);
}
class Jl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new sr(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = gn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Q !== this)
      return Rs(this, !0), !0;
  }
  get value() {
    const t = oe.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ks(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : oe.NODE_ENV !== "production" && ze("Write operation failed: computed value is readonly");
  }
}
function Yl(e, t, n = !1) {
  let o, r;
  return U(e) ? o = e : (o = e.get, r = e.set), new Jl(o, r, n);
}
const Mn = {}, Gn = /* @__PURE__ */ new WeakMap();
let Ct;
function Gl(e, t = !1, n = Ct) {
  if (n) {
    let o = Gn.get(n);
    o || Gn.set(n, o = []), o.push(e);
  } else oe.NODE_ENV !== "production" && !t && ze(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function zl(e, t, n = ee) {
  const { immediate: o, deep: r, once: s, scheduler: i, augmentJob: l, call: a } = n, f = (O) => {
    (n.onWarn || ze)(
      "Invalid watch source: ",
      O,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (O) => r ? O : Ie(O) || r === !1 || r === 0 ? gt(O, 1) : gt(O);
  let u, h, m, D, A = !1, B = !1;
  if (ue(e) ? (h = () => e.value, A = Ie(e)) : Rt(e) ? (h = () => d(e), A = !0) : j(e) ? (B = !0, A = e.some((O) => Rt(O) || Ie(O)), h = () => e.map((O) => {
    if (ue(O))
      return O.value;
    if (Rt(O))
      return d(O);
    if (U(O))
      return a ? a(O, 2) : O();
    oe.NODE_ENV !== "production" && f(O);
  })) : U(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      qe();
      try {
        m();
      } finally {
        Xe();
      }
    }
    const O = Ct;
    Ct = u;
    try {
      return a ? a(e, 3, [D]) : e(D);
    } finally {
      Ct = O;
    }
  } : (h = ge, oe.NODE_ENV !== "production" && f(e)), t && r) {
    const O = h, x = r === !0 ? 1 / 0 : r;
    h = () => gt(O(), x);
  }
  const H = bl(), M = () => {
    u.stop(), H && H.active && Zo(H.effects, u);
  };
  if (s && t) {
    const O = t;
    t = (...x) => {
      O(...x), M();
    };
  }
  let R = B ? new Array(e.length).fill(Mn) : Mn;
  const J = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const x = u.run();
        if (r || A || (B ? x.some((P, F) => wt(P, R[F])) : wt(x, R))) {
          m && m();
          const P = Ct;
          Ct = u;
          try {
            const F = [
              x,
              // pass undefined as the old value when it's changed for the first time
              R === Mn ? void 0 : B && R[0] === Mn ? [] : R,
              D
            ];
            R = x, a ? a(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            Ct = P;
          }
        }
      } else
        u.run();
  };
  return l && l(J), u = new Vs(h), u.scheduler = i ? () => i(J, !1) : J, D = (O) => Gl(O, !1, u), m = u.onStop = () => {
    const O = Gn.get(u);
    if (O) {
      if (a)
        a(O, 4);
      else
        for (const x of O) x();
      Gn.delete(u);
    }
  }, oe.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? J(!0) : R = u.run() : i ? i(J.bind(null, !0), !0) : u.run(), M.pause = u.pause.bind(u), M.resume = u.resume.bind(u), M.stop = M, M;
}
function gt(e, t = 1 / 0, n) {
  if (t <= 0 || !ne(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, ue(e))
    gt(e.value, t, n);
  else if (j(e))
    for (let o = 0; o < e.length; o++)
      gt(e[o], t, n);
  else if (Ss(e) || Vt(e))
    e.forEach((o) => {
      gt(o, t, n);
    });
  else if (ro(e)) {
    for (const o in e)
      gt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && gt(e[o], t, n);
  }
  return e;
}
var g = {};
const Pt = [];
function $n(e) {
  Pt.push(e);
}
function jn() {
  Pt.pop();
}
let No = !1;
function T(e, ...t) {
  if (No) return;
  No = !0, qe();
  const n = Pt.length ? Pt[Pt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = ql();
  if (o)
    Zt(
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
  Xe(), No = !1;
}
function ql() {
  let e = Pt[Pt.length - 1];
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
  return ie(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ue(t) ? (t = Gs(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : U(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
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
function Zt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    Tn(r, t, n);
  }
}
function ct(e, t, n, o) {
  if (U(e)) {
    const r = Zt(e, t, n, o);
    return r && Qo(r) && r.catch((s) => {
      Tn(s, t, n);
    }), r;
  }
  if (j(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(ct(e[s], t, n, o));
    return r;
  } else g.NODE_ENV !== "production" && T(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Tn(e, t, n, o = !0) {
  const r = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ee;
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
      qe(), Zt(s, null, 10, [
        e,
        a,
        f
      ]), Xe();
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
const Se = [];
let ot = -1;
const zt = [];
let yt = null, Bt = 0;
const zs = /* @__PURE__ */ Promise.resolve();
let zn = null;
const ta = 100;
function Et(e) {
  const t = zn || zs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function na(e) {
  let t = ot + 1, n = Se.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = Se[o], s = bn(r);
    s < e || s === e && r.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function fo(e) {
  if (!(e.flags & 1)) {
    const t = bn(e), n = Se[Se.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= bn(n) ? Se.push(e) : Se.splice(na(t), 0, e), e.flags |= 1, qs();
  }
}
function qs() {
  zn || (zn = zs.then(Qs));
}
function Xs(e) {
  j(e) ? zt.push(...e) : yt && e.id === -1 ? yt.splice(Bt + 1, 0, e) : e.flags & 1 || (zt.push(e), e.flags |= 1), qs();
}
function Ar(e, t, n = ot + 1) {
  for (g.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Se.length; n++) {
    const o = Se[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || g.NODE_ENV !== "production" && lr(t, o))
        continue;
      Se.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Zs(e) {
  if (zt.length) {
    const t = [...new Set(zt)].sort(
      (n, o) => bn(n) - bn(o)
    );
    if (zt.length = 0, yt) {
      yt.push(...t);
      return;
    }
    for (yt = t, g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Bt = 0; Bt < yt.length; Bt++) {
      const n = yt[Bt];
      g.NODE_ENV !== "production" && lr(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    yt = null, Bt = 0;
  }
}
const bn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qs(e) {
  g.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = g.NODE_ENV !== "production" ? (n) => lr(e, n) : ge;
  try {
    for (ot = 0; ot < Se.length; ot++) {
      const n = Se[ot];
      if (n && !(n.flags & 8)) {
        if (g.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Zt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; ot < Se.length; ot++) {
      const n = Se[ot];
      n && (n.flags &= -2);
    }
    ot = -1, Se.length = 0, Zs(e), zn = null, (Se.length || zt.length) && Qs(e);
  }
}
function lr(e, t) {
  const n = e.get(t) || 0;
  if (n > ta) {
    const o = t.i, r = o && Ri(o.type);
    return Tn(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let lt = !1;
const Fn = /* @__PURE__ */ new Map();
g.NODE_ENV !== "production" && (Dn().__VUE_HMR_RUNTIME__ = {
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
    t && (o.render = t, qn(o.type).render = t), o.renderCache = [], lt = !0, o.update(), lt = !1;
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
      lt = !0, s.parent.update(), lt = !1, l.delete(s);
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(i);
  }
  Xs(() => {
    Fn.clear();
  });
}
function Rr(e, t) {
  ce(e, t);
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
let st, rn = [], $o = !1;
function Cn(e, ...t) {
  st ? st.emit(e, ...t) : $o || rn.push({ event: e, args: t });
}
function ti(e, t) {
  var n, o;
  st = e, st ? (st.enabled = !0, rn.forEach(({ event: r, args: s }) => st.emit(r, ...s)), rn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ti(s, t);
  }), setTimeout(() => {
    st || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, $o = !0, rn = []);
  }, 3e3)) : ($o = !0, rn = []);
}
function la(e, t) {
  Cn("app:init", e, t, {
    Fragment: Je,
    Text: Vn,
    Comment: He,
    Static: Un
  });
}
function aa(e) {
  Cn("app:unmount", e);
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
  st && typeof st.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !st.cleanupBuffer(e) && ua(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ar(e) {
  return (t) => {
    Cn(
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
    Cn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function ha(e, t, n) {
  Cn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let De = null, ri = null;
function Xn(e) {
  const t = De;
  return De = e, ri = e && e.type.__scopeId || null, t;
}
function ga(e, t = De, n) {
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
  if (De === null)
    return g.NODE_ENV !== "production" && T("withDirectives can only be used inside render functions."), e;
  const n = mo(De), o = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [s, i, l, a = ee] = t[r];
    s && (U(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && gt(i), o.push({
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
function St(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[o];
    a && (qe(), ct(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Xe());
  }
}
const _a = Symbol("_vte"), ba = (e) => e.__isTeleport;
function cr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, cr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ii(e, t) {
  return U(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ce({ name: e.name }, t, { setup: e })
  ) : e;
}
function li(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const ya = /* @__PURE__ */ new WeakSet();
function fn(e, t, n, o, r = !1) {
  if (j(e)) {
    e.forEach(
      (D, A) => fn(
        D,
        t && (j(t) ? t[A] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (dn(o) && !r) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && fn(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? mo(o.component) : o.el, i = r ? null : s, { i: l, r: a } = e;
  if (g.NODE_ENV !== "production" && !l) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const f = t && t.r, d = l.refs === ee ? l.refs = {} : l.refs, u = l.setupState, h = G(u), m = u === ee ? () => !1 : (D) => g.NODE_ENV !== "production" && (z(h, D) && !ue(h[D]) && T(
    `Template ref "${D}" used on a non-ref value. It will not work in the production build.`
  ), ya.has(h[D])) ? !1 : z(h, D);
  if (f != null && f !== a && (ie(f) ? (d[f] = null, m(f) && (u[f] = null)) : ue(f) && (f.value = null)), U(a))
    Zt(a, l, 12, [i, d]);
  else {
    const D = ie(a), A = ue(a);
    if (D || A) {
      const B = () => {
        if (e.f) {
          const H = D ? m(a) ? u[a] : d[a] : a.value;
          r ? j(H) && Zo(H, s) : j(H) ? H.includes(s) || H.push(s) : D ? (d[a] = [s], m(a) && (u[a] = d[a])) : (a.value = [s], e.k && (d[e.k] = a.value));
        } else D ? (d[a] = i, m(a) && (u[a] = i)) : A ? (a.value = i, e.k && (d[e.k] = i)) : g.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (B.id = -1, je(B, n)) : B();
    } else g.NODE_ENV !== "production" && T("Invalid template ref type:", a, `(${typeof a})`);
  }
}
Dn().requestIdleCallback;
Dn().cancelIdleCallback;
const dn = (e) => !!e.type.__asyncLoader, ur = (e) => e.type.__isKeepAlive;
function Ea(e, t) {
  ai(e, "a", t);
}
function va(e, t) {
  ai(e, "da", t);
}
function ai(e, t, n = ye) {
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
function po(e, t, n = ye, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      qe();
      const l = An(n), a = ct(t, n, e, i);
      return l(), Xe(), a;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (g.NODE_ENV !== "production") {
    const r = Tt(ir[e].replace(/ hook$/, ""));
    T(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _t = (e) => (t, n = ye) => {
  (!En || e === "sp") && po(e, (...o) => t(...o), n);
}, wa = _t("bm"), fr = _t("m"), xa = _t(
  "bu"
), Oa = _t("u"), Sa = _t(
  "bum"
), dr = _t("um"), Da = _t(
  "sp"
), Ia = _t("rtg"), Ta = _t("rtc");
function Ca(e, t = ye) {
  po("ec", e, t);
}
const Va = Symbol.for("v-ndc");
function Aa(e, t, n, o) {
  let r;
  const s = n, i = j(e);
  if (i || ie(e)) {
    const l = i && Rt(e);
    let a = !1, f = !1;
    l && (a = !Ie(e), f = Ze(e), e = ao(e)), r = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(
        a ? f ? Yn(be(e[d])) : be(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    g.NODE_ENV !== "production" && !Number.isInteger(e) && T(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, s);
  } else if (ne(e))
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
const jo = (e) => e ? Vi(e) ? mo(e) : jo(e.parent) : null, Mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => g.NODE_ENV !== "production" ? it(e.props) : e.props,
    $attrs: (e) => g.NODE_ENV !== "production" ? it(e.attrs) : e.attrs,
    $slots: (e) => g.NODE_ENV !== "production" ? it(e.slots) : e.slots,
    $refs: (e) => g.NODE_ENV !== "production" ? it(e.refs) : e.refs,
    $parent: (e) => jo(e.parent),
    $root: (e) => jo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => fi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      fo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Et.bind(e.proxy)),
    $watch: (e) => fc.bind(e)
  })
), pr = (e) => e === "_" || e === "$", xo = (e, t) => e !== ee && !e.__isScriptSetup && z(e, t), ci = {
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
        if (r !== ee && z(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && z(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== ee && z(n, t))
          return i[t] = 4, n[t];
        Fo && (i[t] = 0);
      }
    }
    const d = Mt[t];
    let u, h;
    if (d)
      return t === "$attrs" ? (he(e.attrs, "get", ""), g.NODE_ENV !== "production" && eo()) : g.NODE_ENV !== "production" && t === "$slots" && he(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && z(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, z(h, t)
    )
      return h[t];
    g.NODE_ENV !== "production" && De && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== ee && pr(t[0]) && z(r, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === De && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return xo(r, t) ? (r[t] = n, !0) : g.NODE_ENV !== "production" && r.__isScriptSetup && z(r, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ee && z(o, t) ? (o[t] = n, !0) : z(e.props, t) ? (g.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (g.NODE_ENV !== "production" && T(
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
    return !!n[i] || e !== ee && z(e, i) || xo(t, i) || (l = s[0]) && z(l, i) || z(o, i) || z(Mt, i) || z(r.config.globalProperties, i);
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
  }), Object.keys(Mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ge
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
      set: ge
    });
  });
}
function Ma(e) {
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
        set: ge
      });
    }
  });
}
function Pr(e) {
  return j(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ka() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? T(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Fo = !0;
function $a(e) {
  const t = fi(e), n = e.proxy, o = e.ctx;
  Fo = !1, t.beforeCreate && Mr(t.beforeCreate, e, "bc");
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
    activated: A,
    deactivated: B,
    beforeDestroy: H,
    beforeUnmount: M,
    destroyed: R,
    unmounted: J,
    render: O,
    renderTracked: x,
    renderTriggered: P,
    errorCaptured: F,
    serverPrefetch: k,
    // public API
    expose: Z,
    inheritAttrs: me,
    // assets
    components: le,
    directives: ae,
    filters: Ee
  } = t, de = g.NODE_ENV !== "production" ? ka() : null;
  if (g.NODE_ENV !== "production") {
    const [W] = e.propsOptions;
    if (W)
      for (const b in W)
        de("Props", b);
  }
  if (f && ja(f, o, de), i)
    for (const W in i) {
      const b = i[W];
      U(b) ? (g.NODE_ENV !== "production" ? Object.defineProperty(o, W, {
        value: b.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[W] = b.bind(n), g.NODE_ENV !== "production" && de("Methods", W)) : g.NODE_ENV !== "production" && T(
        `Method "${W}" has type "${typeof b}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    g.NODE_ENV !== "production" && !U(r) && T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const W = r.call(n, n);
    if (g.NODE_ENV !== "production" && Qo(W) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !ne(W))
      g.NODE_ENV !== "production" && T("data() should return an object.");
    else if (e.data = In(W), g.NODE_ENV !== "production")
      for (const b in W)
        de("Data", b), pr(b[0]) || Object.defineProperty(o, b, {
          configurable: !0,
          enumerable: !0,
          get: () => W[b],
          set: ge
        });
  }
  if (Fo = !0, s)
    for (const W in s) {
      const b = s[W], v = U(b) ? b.bind(n, n) : U(b.get) ? b.get.bind(n, n) : ge;
      g.NODE_ENV !== "production" && v === ge && T(`Computed property "${W}" has no getter.`);
      const X = !U(b) && U(b.set) ? b.set.bind(n) : g.NODE_ENV !== "production" ? () => {
        T(
          `Write operation failed: computed property "${W}" is readonly.`
        );
      } : ge, ke = yr({
        get: v,
        set: X
      });
      Object.defineProperty(o, W, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (Te) => ke.value = Te
      }), g.NODE_ENV !== "production" && de("Computed", W);
    }
  if (l)
    for (const W in l)
      ui(l[W], o, n, W);
  if (a) {
    const W = U(a) ? a.call(n) : a;
    Reflect.ownKeys(W).forEach((b) => {
      Ka(b, W[b]);
    });
  }
  d && Mr(d, e, "c");
  function fe(W, b) {
    j(b) ? b.forEach((v) => W(v.bind(n))) : b && W(b.bind(n));
  }
  if (fe(wa, u), fe(fr, h), fe(xa, m), fe(Oa, D), fe(Ea, A), fe(va, B), fe(Ca, F), fe(Ta, x), fe(Ia, P), fe(Sa, M), fe(dr, J), fe(Da, k), j(Z))
    if (Z.length) {
      const W = e.exposed || (e.exposed = {});
      Z.forEach((b) => {
        Object.defineProperty(W, b, {
          get: () => n[b],
          set: (v) => n[b] = v,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === ge && (e.render = O), me != null && (e.inheritAttrs = me), le && (e.components = le), ae && (e.directives = ae), k && li(e);
}
function ja(e, t, n = ge) {
  j(e) && (e = Lo(e));
  for (const o in e) {
    const r = e[o];
    let s;
    ne(r) ? "default" in r ? s = Ln(
      r.from || o,
      r.default,
      !0
    ) : s = Ln(r.from || o) : s = Ln(r), ue(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, g.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Mr(e, t, n) {
  ct(
    j(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ui(e, t, n, o) {
  let r = o.includes(".") ? wi(n, o) : () => n[o];
  if (ie(e)) {
    const s = t[e];
    U(s) ? We(r, s) : g.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e}"`, s);
  } else if (U(e))
    We(r, e.bind(n));
  else if (ne(e))
    if (j(e))
      e.forEach((s) => ui(s, t, n, o));
    else {
      const s = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(s) ? We(r, s, e) : g.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e.handler}"`, s);
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
  ), Zn(a, t, i)), ne(t) && s.set(t, a), a;
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
  data: kr,
  props: $r,
  emits: $r,
  // objects
  methods: sn,
  computed: sn,
  // lifecycle
  beforeCreate: xe,
  created: xe,
  beforeMount: xe,
  mounted: xe,
  beforeUpdate: xe,
  updated: xe,
  beforeDestroy: xe,
  beforeUnmount: xe,
  destroyed: xe,
  unmounted: xe,
  activated: xe,
  deactivated: xe,
  errorCaptured: xe,
  serverPrefetch: xe,
  // assets
  components: sn,
  directives: sn,
  // watch
  watch: Ha,
  // provide / inject
  provide: kr,
  inject: La
};
function kr(e, t) {
  return t ? e ? function() {
    return ce(
      U(e) ? e.call(this, this) : e,
      U(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function La(e, t) {
  return sn(Lo(e), Lo(t));
}
function Lo(e) {
  if (j(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function xe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function sn(e, t) {
  return e ? ce(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function $r(e, t) {
  return e ? j(e) && j(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ce(
    /* @__PURE__ */ Object.create(null),
    Pr(e),
    Pr(t ?? {})
  ) : t;
}
function Ha(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ce(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = xe(e[o], t[o]);
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
    U(o) || (o = ce({}, o)), r != null && !ne(r) && (g.NODE_ENV !== "production" && T("root props passed to app.mount() must be an object."), r = null);
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
        return i.has(d) ? g.NODE_ENV !== "production" && T("Plugin has already been applied to target app.") : d && U(d.install) ? (i.add(d), d.install(f, ...u)) : U(d) ? (i.add(d), d(f, ...u)) : g.NODE_ENV !== "production" && T(
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
          const m = f._ceVNode || at(o, r);
          return m.appContext = s, h === !0 ? h = "svg" : h === !1 && (h = void 0), g.NODE_ENV !== "production" && (s.reload = () => {
            const D = xt(m);
            D.el = null, e(D, d, h);
          }), e(m, d, h), a = !0, f._container = d, d.__vue_app__ = f, g.NODE_ENV !== "production" && (f._instance = m.component, la(f, zr)), mo(m.component);
        }
      },
      onUnmount(d) {
        g.NODE_ENV !== "production" && typeof d != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (ct(
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
        const u = qt;
        qt = f;
        try {
          return d();
        } finally {
          qt = u;
        }
      }
    };
    return f;
  };
}
let qt = null;
function Ka(e, t) {
  if (!ye)
    g.NODE_ENV !== "production" && T("provide() can only be used inside setup().");
  else {
    let n = ye.provides;
    const o = ye.parent && ye.parent.provides;
    o === n && (n = ye.provides = Object.create(o)), n[e] = t;
  }
}
function Ln(e, t, n = !1) {
  const o = br();
  if (o || qt) {
    let r = qt ? qt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(o && o.proxy) : t;
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
            const D = Me(h);
            r[D] = Ho(
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
    mi(e, t, r, s) && (f = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !z(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Pe(u)) === u || !z(t, d))) && (a ? n && // for camelCase
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
  f && rt(e.attrs, "set", ""), g.NODE_ENV !== "production" && bi(t || {}, r, e);
}
function mi(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (ln(a))
        continue;
      const f = t[a];
      let d;
      r && z(r, d = Me(a)) ? !s || !s.includes(d) ? n[d] = f : (l || (l = {}))[d] = f : ho(e.emitsOptions, a) || (!(a in o) || f !== o[a]) && (o[a] = f, i = !0);
    }
  if (s) {
    const a = G(n), f = l || ee;
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
      if (i.type !== Function && !i.skipFactory && U(a)) {
        const { propsDefaults: f } = r;
        if (n in f)
          o = f[n];
        else {
          const d = An(r);
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
    ] && (o === "" || o === Pe(n)) && (o = !0));
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
  if (!U(e)) {
    const d = (u) => {
      a = !0;
      const [h, m] = _i(u, t, !0);
      ce(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !a)
    return ne(e) && o.set(e, Yt), Yt;
  if (j(s))
    for (let d = 0; d < s.length; d++) {
      g.NODE_ENV !== "production" && !ie(s[d]) && T("props must be strings when using array syntax.", s[d]);
      const u = Me(s[d]);
      jr(u) && (i[u] = ee);
    }
  else if (s) {
    g.NODE_ENV !== "production" && !ne(s) && T("invalid props options", s);
    for (const d in s) {
      const u = Me(d);
      if (jr(u)) {
        const h = s[d], m = i[u] = j(h) || U(h) ? { type: h } : ce({}, h), D = m.type;
        let A = !1, B = !0;
        if (j(D))
          for (let H = 0; H < D.length; ++H) {
            const M = D[H], R = U(M) && M.name;
            if (R === "Boolean") {
              A = !0;
              break;
            } else R === "String" && (B = !1);
          }
        else
          A = U(D) && D.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = A, m[
          1
          /* shouldCastTrue */
        ] = B, (A || z(m, "default")) && l.push(u);
      }
    }
  }
  const f = [i, l];
  return ne(e) && o.set(e, f), f;
}
function jr(e) {
  return e[0] !== "$" && !ln(e) ? !0 : (g.NODE_ENV !== "production" && T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function za(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function bi(e, t, n) {
  const o = G(t), r = n.propsOptions[0], s = Object.keys(e).map((i) => Me(i));
  for (const i in r) {
    let l = r[i];
    l != null && qa(
      i,
      o[i],
      l,
      g.NODE_ENV !== "production" ? it(o) : o,
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
      const d = j(s) ? s : [s], u = [];
      for (let h = 0; h < d.length && !f; h++) {
        const { valid: m, expectedType: D } = Za(t, d[h]);
        u.push(D || ""), f = m;
      }
      if (!f) {
        T(Qa(e, t, u));
        return;
      }
    }
    l && !l(t, o) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Xa = /* @__PURE__ */ mt(
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
  } else o === "Object" ? n = ne(e) : o === "Array" ? n = j(e) : n = e instanceof t;
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
const hr = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", gr = (e) => j(e) ? e.map(Ye) : [Ye(e)], tc = (e, t, n) => {
  if (t._n)
    return t;
  const o = ga((...r) => (g.NODE_ENV !== "production" && ye && !(n === null && De) && !(n && n.root !== ye.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), gr(t(...r))), n);
  return o._c = !1, o;
}, yi = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (hr(r)) continue;
    const s = e[r];
    if (U(s))
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
    r && hn(o, "__", r, !0);
    const s = t._;
    s ? (Uo(o, t, n), n && hn(o, "_", s, !0)) : yi(t, o);
  } else t && Ei(e, t);
}, oc = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = ee;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? g.NODE_ENV !== "production" && lt ? (Uo(r, t, n), rt(e, "set", "$slots")) : n && l === 1 ? s = !1 : Uo(r, t, n) : (s = !t.$stable, yi(t, r)), i = t;
  } else t && (Ei(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !hr(l) && i[l] == null && delete r[l];
};
let tn, Nt;
function Ft(e, t) {
  e.appContext.config.performance && Qn() && Nt.mark(`vue-${t}-${e.uid}`), g.NODE_ENV !== "production" && da(e, t, Qn() ? Nt.now() : Date.now());
}
function Lt(e, t) {
  if (e.appContext.config.performance && Qn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Nt.mark(o), Nt.measure(
      `<${_o(e, e.type)}> ${t}`,
      n,
      o
    ), Nt.clearMarks(n), Nt.clearMarks(o);
  }
  g.NODE_ENV !== "production" && pa(e, t, Qn() ? Nt.now() : Date.now());
}
function Qn() {
  return tn !== void 0 || (typeof window < "u" && window.performance ? (tn = !0, Nt = window.performance) : tn = !1), tn;
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
const je = bc;
function sc(e) {
  return ic(e);
}
function ic(e, t) {
  rc();
  const n = Dn();
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
    setScopeId: m = ge,
    insertStaticContent: D
  } = e, A = (c, p, _, N = null, y = null, E = null, C = void 0, I = null, S = g.NODE_ENV !== "production" && lt ? !1 : !!p.dynamicChildren) => {
    if (c === p)
      return;
    c && !nn(c, p) && (N = $e(c), Y(c, y, E, !0), c = null), p.patchFlag === -2 && (S = !1, p.dynamicChildren = null);
    const { type: w, ref: L, shapeFlag: V } = p;
    switch (w) {
      case Vn:
        B(c, p, _, N);
        break;
      case He:
        H(c, p, _, N);
        break;
      case Un:
        c == null ? M(p, _, N, C) : g.NODE_ENV !== "production" && R(c, p, _, C);
        break;
      case Je:
        ae(
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
        V & 1 ? x(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        ) : V & 6 ? Ee(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        ) : V & 64 || V & 128 ? w.process(
          c,
          p,
          _,
          N,
          y,
          E,
          C,
          I,
          S,
          ft
        ) : g.NODE_ENV !== "production" && T("Invalid VNode type:", w, `(${typeof w})`);
    }
    L != null && y ? fn(L, c && c.ref, E, p || c, !p) : L == null && c && c.ref != null && fn(c.ref, null, E, c, !0);
  }, B = (c, p, _, N) => {
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
  }, M = (c, p, _, N) => {
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
      O(c), [p.el, p.anchor] = D(
        p.children,
        _,
        y,
        N
      );
    } else
      p.el = c.el, p.anchor = c.anchor;
  }, J = ({ el: c, anchor: p }, _, N) => {
    let y;
    for (; c && c !== p; )
      y = h(c), o(c, _, N), c = y;
    o(p, _, N);
  }, O = ({ el: c, anchor: p }) => {
    let _;
    for (; c && c !== p; )
      _ = h(c), r(c), c = _;
    r(p);
  }, x = (c, p, _, N, y, E, C, I, S) => {
    p.type === "svg" ? C = "svg" : p.type === "math" && (C = "mathml"), c == null ? P(
      p,
      _,
      N,
      y,
      E,
      C,
      I,
      S
    ) : Z(
      c,
      p,
      y,
      E,
      C,
      I,
      S
    );
  }, P = (c, p, _, N, y, E, C, I) => {
    let S, w;
    const { props: L, shapeFlag: V, transition: $, dirs: K } = c;
    if (S = c.el = i(
      c.type,
      E,
      L && L.is,
      L
    ), V & 8 ? d(S, c.children) : V & 16 && k(
      c.children,
      S,
      null,
      N,
      y,
      Oo(c, E),
      C,
      I
    ), K && St(c, null, N, "created"), F(S, c, c.scopeId, C, N), L) {
      for (const se in L)
        se !== "value" && !ln(se) && s(S, se, null, L[se], E, N);
      "value" in L && s(S, "value", null, L.value, E), (w = L.onVnodeBeforeMount) && nt(w, N, c);
    }
    g.NODE_ENV !== "production" && (hn(S, "__vnode", c, !0), hn(S, "__vueParentComponent", N, !0)), K && St(c, null, N, "beforeMount");
    const q = lc(y, $);
    q && $.beforeEnter(S), o(S, p, _), ((w = L && L.onVnodeMounted) || q || K) && je(() => {
      w && nt(w, N, c), q && $.enter(S), K && St(c, null, N, "mounted");
    }, y);
  }, F = (c, p, _, N, y) => {
    if (_ && m(c, _), N)
      for (let E = 0; E < N.length; E++)
        m(c, N[E]);
    if (y) {
      let E = y.subTree;
      if (g.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = mr(E.children) || E), p === E || Si(E.type) && (E.ssContent === p || E.ssFallback === p)) {
        const C = y.vnode;
        F(
          c,
          C,
          C.scopeId,
          C.slotScopeIds,
          y.parent
        );
      }
    }
  }, k = (c, p, _, N, y, E, C, I, S = 0) => {
    for (let w = S; w < c.length; w++) {
      const L = c[w] = I ? vt(c[w]) : Ye(c[w]);
      A(
        null,
        L,
        p,
        _,
        N,
        y,
        E,
        C,
        I
      );
    }
  }, Z = (c, p, _, N, y, E, C) => {
    const I = p.el = c.el;
    g.NODE_ENV !== "production" && (I.__vnode = p);
    let { patchFlag: S, dynamicChildren: w, dirs: L } = p;
    S |= c.patchFlag & 16;
    const V = c.props || ee, $ = p.props || ee;
    let K;
    if (_ && Dt(_, !1), (K = $.onVnodeBeforeUpdate) && nt(K, _, p, c), L && St(p, c, _, "beforeUpdate"), _ && Dt(_, !0), g.NODE_ENV !== "production" && lt && (S = 0, C = !1, w = null), (V.innerHTML && $.innerHTML == null || V.textContent && $.textContent == null) && d(I, ""), w ? (me(
      c.dynamicChildren,
      w,
      I,
      _,
      N,
      Oo(p, y),
      E
    ), g.NODE_ENV !== "production" && Hn(c, p)) : C || v(
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
        le(I, V, $, _, y);
      else if (S & 2 && V.class !== $.class && s(I, "class", null, $.class, y), S & 4 && s(I, "style", V.style, $.style, y), S & 8) {
        const q = p.dynamicProps;
        for (let se = 0; se < q.length; se++) {
          const te = q[se], Ce = V[te], Ve = $[te];
          (Ve !== Ce || te === "value") && s(I, te, Ce, Ve, y, _);
        }
      }
      S & 1 && c.children !== p.children && d(I, p.children);
    } else !C && w == null && le(I, V, $, _, y);
    ((K = $.onVnodeUpdated) || L) && je(() => {
      K && nt(K, _, p, c), L && St(p, c, _, "updated");
    }, N);
  }, me = (c, p, _, N, y, E, C) => {
    for (let I = 0; I < p.length; I++) {
      const S = c[I], w = p[I], L = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !nn(S, w) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? u(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      A(
        S,
        w,
        L,
        null,
        N,
        y,
        E,
        C,
        !0
      );
    }
  }, le = (c, p, _, N, y) => {
    if (p !== _) {
      if (p !== ee)
        for (const E in p)
          !ln(E) && !(E in _) && s(
            c,
            E,
            p[E],
            null,
            y,
            N
          );
      for (const E in _) {
        if (ln(E)) continue;
        const C = _[E], I = p[E];
        C !== I && E !== "value" && s(c, E, I, C, y, N);
      }
      "value" in _ && s(c, "value", p.value, _.value, y);
    }
  }, ae = (c, p, _, N, y, E, C, I, S) => {
    const w = p.el = c ? c.el : l(""), L = p.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: $, slotScopeIds: K } = p;
    g.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (lt || V & 2048) && (V = 0, S = !1, $ = null), K && (I = I ? I.concat(K) : K), c == null ? (o(w, _, N), o(L, _, N), k(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      _,
      L,
      y,
      E,
      C,
      I,
      S
    )) : V > 0 && V & 64 && $ && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (me(
      c.dynamicChildren,
      $,
      _,
      y,
      E,
      C,
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
    )) : v(
      c,
      p,
      _,
      L,
      y,
      E,
      C,
      I,
      S
    );
  }, Ee = (c, p, _, N, y, E, C, I, S) => {
    p.slotScopeIds = I, c == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      _,
      N,
      C,
      S
    ) : de(
      p,
      _,
      N,
      y,
      E,
      C,
      S
    ) : fe(c, p, S);
  }, de = (c, p, _, N, y, E, C) => {
    const I = c.component = Sc(
      c,
      N,
      y
    );
    if (g.NODE_ENV !== "production" && I.type.__hmrId && oa(I), g.NODE_ENV !== "production" && ($n(c), Ft(I, "mount")), ur(c) && (I.ctx.renderer = ft), g.NODE_ENV !== "production" && Ft(I, "init"), Ic(I, !1, C), g.NODE_ENV !== "production" && Lt(I, "init"), g.NODE_ENV !== "production" && lt && (c.el = null), I.asyncDep) {
      if (y && y.registerDep(I, W, C), !c.el) {
        const S = I.subTree = at(He);
        H(null, S, p, _), c.placeholder = S.el;
      }
    } else
      W(
        I,
        c,
        p,
        _,
        y,
        E,
        C
      );
    g.NODE_ENV !== "production" && (jn(), Lt(I, "mount"));
  }, fe = (c, p, _) => {
    const N = p.component = c.component;
    if (mc(c, p, _))
      if (N.asyncDep && !N.asyncResolved) {
        g.NODE_ENV !== "production" && $n(p), b(N, p, _), g.NODE_ENV !== "production" && jn();
        return;
      } else
        N.next = p, N.update();
    else
      p.el = c.el, N.vnode = p;
  }, W = (c, p, _, N, y, E, C) => {
    const I = () => {
      if (c.isMounted) {
        let { next: V, bu: $, u: K, parent: q, vnode: se } = c;
        {
          const et = vi(c);
          if (et) {
            V && (V.el = se.el, b(c, V, C)), et.asyncDep.then(() => {
              c.isUnmounted || I();
            });
            return;
          }
        }
        let te = V, Ce;
        g.NODE_ENV !== "production" && $n(V || c.vnode), Dt(c, !1), V ? (V.el = se.el, b(c, V, C)) : V = se, $ && Ut($), (Ce = V.props && V.props.onVnodeBeforeUpdate) && nt(Ce, q, V, se), Dt(c, !0), g.NODE_ENV !== "production" && Ft(c, "render");
        const Ve = Ur(c);
        g.NODE_ENV !== "production" && Lt(c, "render");
        const Qe = c.subTree;
        c.subTree = Ve, g.NODE_ENV !== "production" && Ft(c, "patch"), A(
          Qe,
          Ve,
          // parent may have changed if it's in a teleport
          u(Qe.el),
          // anchor may have changed if it's in a fragment
          $e(Qe),
          c,
          y,
          E
        ), g.NODE_ENV !== "production" && Lt(c, "patch"), V.el = Ve.el, te === null && _c(c, Ve.el), K && je(K, y), (Ce = V.props && V.props.onVnodeUpdated) && je(
          () => nt(Ce, q, V, se),
          y
        ), g.NODE_ENV !== "production" && ni(c), g.NODE_ENV !== "production" && jn();
      } else {
        let V;
        const { el: $, props: K } = p, { bm: q, m: se, parent: te, root: Ce, type: Ve } = c, Qe = dn(p);
        Dt(c, !1), q && Ut(q), !Qe && (V = K && K.onVnodeBeforeMount) && nt(V, te, p), Dt(c, !0);
        {
          Ce.ce && // @ts-expect-error _def is private
          Ce.ce._def.shadowRoot !== !1 && Ce.ce._injectChildStyle(Ve), g.NODE_ENV !== "production" && Ft(c, "render");
          const et = c.subTree = Ur(c);
          g.NODE_ENV !== "production" && Lt(c, "render"), g.NODE_ENV !== "production" && Ft(c, "patch"), A(
            null,
            et,
            _,
            N,
            c,
            y,
            E
          ), g.NODE_ENV !== "production" && Lt(c, "patch"), p.el = et.el;
        }
        if (se && je(se, y), !Qe && (V = K && K.onVnodeMounted)) {
          const et = p;
          je(
            () => nt(V, te, et),
            y
          );
        }
        (p.shapeFlag & 256 || te && dn(te.vnode) && te.vnode.shapeFlag & 256) && c.a && je(c.a, y), c.isMounted = !0, g.NODE_ENV !== "production" && ca(c), p = _ = N = null;
      }
    };
    c.scope.on();
    const S = c.effect = new Vs(I);
    c.scope.off();
    const w = c.update = S.run.bind(S), L = c.job = S.runIfDirty.bind(S);
    L.i = c, L.id = c.uid, S.scheduler = () => fo(L), Dt(c, !0), g.NODE_ENV !== "production" && (S.onTrack = c.rtc ? (V) => Ut(c.rtc, V) : void 0, S.onTrigger = c.rtg ? (V) => Ut(c.rtg, V) : void 0), w();
  }, b = (c, p, _) => {
    p.component = c;
    const N = c.vnode.props;
    c.vnode = p, c.next = null, Ya(c, p.props, N, _), oc(c, p.children, _), qe(), Ar(c), Xe();
  }, v = (c, p, _, N, y, E, C, I, S = !1) => {
    const w = c && c.children, L = c ? c.shapeFlag : 0, V = p.children, { patchFlag: $, shapeFlag: K } = p;
    if ($ > 0) {
      if ($ & 128) {
        ke(
          w,
          V,
          _,
          N,
          y,
          E,
          C,
          I,
          S
        );
        return;
      } else if ($ & 256) {
        X(
          w,
          V,
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
    K & 8 ? (L & 16 && _e(w, y, E), V !== w && d(_, V)) : L & 16 ? K & 16 ? ke(
      w,
      V,
      _,
      N,
      y,
      E,
      C,
      I,
      S
    ) : _e(w, y, E, !0) : (L & 8 && d(_, ""), K & 16 && k(
      V,
      _,
      N,
      y,
      E,
      C,
      I,
      S
    ));
  }, X = (c, p, _, N, y, E, C, I, S) => {
    c = c || Yt, p = p || Yt;
    const w = c.length, L = p.length, V = Math.min(w, L);
    let $;
    for ($ = 0; $ < V; $++) {
      const K = p[$] = S ? vt(p[$]) : Ye(p[$]);
      A(
        c[$],
        K,
        _,
        null,
        y,
        E,
        C,
        I,
        S
      );
    }
    w > L ? _e(
      c,
      y,
      E,
      !0,
      !1,
      V
    ) : k(
      p,
      _,
      N,
      y,
      E,
      C,
      I,
      S,
      V
    );
  }, ke = (c, p, _, N, y, E, C, I, S) => {
    let w = 0;
    const L = p.length;
    let V = c.length - 1, $ = L - 1;
    for (; w <= V && w <= $; ) {
      const K = c[w], q = p[w] = S ? vt(p[w]) : Ye(p[w]);
      if (nn(K, q))
        A(
          K,
          q,
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
    for (; w <= V && w <= $; ) {
      const K = c[V], q = p[$] = S ? vt(p[$]) : Ye(p[$]);
      if (nn(K, q))
        A(
          K,
          q,
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
      V--, $--;
    }
    if (w > V) {
      if (w <= $) {
        const K = $ + 1, q = K < L ? p[K].el : N;
        for (; w <= $; )
          A(
            null,
            p[w] = S ? vt(p[w]) : Ye(p[w]),
            _,
            q,
            y,
            E,
            C,
            I,
            S
          ), w++;
      }
    } else if (w > $)
      for (; w <= V; )
        Y(c[w], y, E, !0), w++;
    else {
      const K = w, q = w, se = /* @__PURE__ */ new Map();
      for (w = q; w <= $; w++) {
        const we = p[w] = S ? vt(p[w]) : Ye(p[w]);
        we.key != null && (g.NODE_ENV !== "production" && se.has(we.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(we.key),
          "Make sure keys are unique."
        ), se.set(we.key, w));
      }
      let te, Ce = 0;
      const Ve = $ - q + 1;
      let Qe = !1, et = 0;
      const Qt = new Array(Ve);
      for (w = 0; w < Ve; w++) Qt[w] = 0;
      for (w = K; w <= V; w++) {
        const we = c[w];
        if (Ce >= Ve) {
          Y(we, y, E, !0);
          continue;
        }
        let tt;
        if (we.key != null)
          tt = se.get(we.key);
        else
          for (te = q; te <= $; te++)
            if (Qt[te - q] === 0 && nn(we, p[te])) {
              tt = te;
              break;
            }
        tt === void 0 ? Y(we, y, E, !0) : (Qt[tt - q] = w + 1, tt >= et ? et = tt : Qe = !0, A(
          we,
          p[tt],
          _,
          null,
          y,
          E,
          C,
          I,
          S
        ), Ce++);
      }
      const xr = Qe ? ac(Qt) : Yt;
      for (te = xr.length - 1, w = Ve - 1; w >= 0; w--) {
        const we = q + w, tt = p[we], Or = p[we + 1], Sr = we + 1 < L ? (
          // #13559, fallback to el placeholder for unresolved async component
          Or.el || Or.placeholder
        ) : N;
        Qt[w] === 0 ? A(
          null,
          tt,
          _,
          Sr,
          y,
          E,
          C,
          I,
          S
        ) : Qe && (te < 0 || w !== xr[te] ? Te(tt, _, Sr, 2) : te--);
      }
    }
  }, Te = (c, p, _, N, y = null) => {
    const { el: E, type: C, transition: I, children: S, shapeFlag: w } = c;
    if (w & 6) {
      Te(c.component.subTree, p, _, N);
      return;
    }
    if (w & 128) {
      c.suspense.move(p, _, N);
      return;
    }
    if (w & 64) {
      C.move(c, p, _, ft);
      return;
    }
    if (C === Je) {
      o(E, p, _);
      for (let V = 0; V < S.length; V++)
        Te(S[V], p, _, N);
      o(c.anchor, p, _);
      return;
    }
    if (C === Un) {
      J(c, p, _);
      return;
    }
    if (N !== 2 && w & 1 && I)
      if (N === 0)
        I.beforeEnter(E), o(E, p, _), je(() => I.enter(E), y);
      else {
        const { leave: V, delayLeave: $, afterLeave: K } = I, q = () => {
          c.ctx.isUnmounted ? r(E) : o(E, p, _);
        }, se = () => {
          V(E, () => {
            q(), K && K();
          });
        };
        $ ? $(E, q, se) : se();
      }
    else
      o(E, p, _);
  }, Y = (c, p, _, N = !1, y = !1) => {
    const {
      type: E,
      props: C,
      ref: I,
      children: S,
      dynamicChildren: w,
      shapeFlag: L,
      patchFlag: V,
      dirs: $,
      cacheIndex: K
    } = c;
    if (V === -2 && (y = !1), I != null && (qe(), fn(I, null, _, c, !0), Xe()), K != null && (p.renderCache[K] = void 0), L & 256) {
      p.ctx.deactivate(c);
      return;
    }
    const q = L & 1 && $, se = !dn(c);
    let te;
    if (se && (te = C && C.onVnodeBeforeUnmount) && nt(te, p, c), L & 6)
      ve(c.component, _, N);
    else {
      if (L & 128) {
        c.suspense.unmount(_, N);
        return;
      }
      q && St(c, null, p, "beforeUnmount"), L & 64 ? c.type.remove(
        c,
        p,
        _,
        ft,
        N
      ) : w && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !w.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Je || V > 0 && V & 64) ? _e(
        w,
        p,
        _,
        !1,
        !0
      ) : (E === Je && V & 384 || !y && L & 16) && _e(S, p, _), N && re(c);
    }
    (se && (te = C && C.onVnodeUnmounted) || q) && je(() => {
      te && nt(te, p, c), q && St(c, null, p, "unmounted");
    }, _);
  }, re = (c) => {
    const { type: p, el: _, anchor: N, transition: y } = c;
    if (p === Je) {
      g.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && y && !y.persisted ? c.children.forEach((C) => {
        C.type === He ? r(C.el) : re(C);
      }) : pe(_, N);
      return;
    }
    if (p === Un) {
      O(c);
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
  }, pe = (c, p) => {
    let _;
    for (; c !== p; )
      _ = h(c), r(c), c = _;
    r(p);
  }, ve = (c, p, _) => {
    g.NODE_ENV !== "production" && c.type.__hmrId && ra(c);
    const {
      bum: N,
      scope: y,
      job: E,
      subTree: C,
      um: I,
      m: S,
      a: w,
      parent: L,
      slots: { __: V }
    } = c;
    Hr(S), Hr(w), N && Ut(N), L && j(V) && V.forEach(($) => {
      L.renderCache[$] = void 0;
    }), y.stop(), E && (E.flags |= 8, Y(C, c, p, _)), I && je(I, p), je(() => {
      c.isUnmounted = !0;
    }, p), p && p.pendingBranch && !p.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), g.NODE_ENV !== "production" && fa(c);
  }, _e = (c, p, _, N = !1, y = !1, E = 0) => {
    for (let C = E; C < c.length; C++)
      Y(c[C], p, _, N, y);
  }, $e = (c) => {
    if (c.shapeFlag & 6)
      return $e(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const p = h(c.anchor || c.el), _ = p && p[_a];
    return _ ? h(_) : p;
  };
  let ut = !1;
  const $t = (c, p, _) => {
    c == null ? p._vnode && Y(p._vnode, null, null, !0) : A(
      p._vnode || null,
      c,
      p,
      null,
      null,
      null,
      _
    ), p._vnode = c, ut || (ut = !0, Ar(), Zs(), ut = !1);
  }, ft = {
    p: A,
    um: Y,
    m: Te,
    r: re,
    mt: de,
    mc: k,
    pc: v,
    pbc: me,
    n: $e,
    o: e
  };
  return {
    render: $t,
    hydrate: void 0,
    createApp: Ba($t)
  };
}
function Oo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Dt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function lc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Hn(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (j(o) && j(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = vt(r[s]), l.el = i.el), !n && l.patchFlag !== -2 && Hn(i, l)), l.type === Vn && (l.el = i.el), l.type === He && !l.el && (l.el = i.el), g.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
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
function We(e, t, n) {
  return g.NODE_ENV !== "production" && !U(t) && T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ni(e, t, n);
}
function Ni(e, t, n = ee) {
  const { immediate: o, deep: r, flush: s, once: i } = n;
  g.NODE_ENV !== "production" && !t && (o !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ce({}, n);
  g.NODE_ENV !== "production" && (l.onWarn = T);
  const a = t && o || !t && s !== "post";
  let f;
  if (En) {
    if (s === "sync") {
      const m = uc();
      f = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = ge, m.resume = ge, m.pause = ge, m;
    }
  }
  const d = ye;
  l.call = (m, D, A) => ct(m, d, D, A);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    je(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, D) => {
    D ? m() : fo(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const h = zl(e, t, l);
  return En && (f ? f.push(h) : a && h()), h;
}
function fc(e, t, n) {
  const o = this.proxy, r = ie(e) ? e.includes(".") ? wi(o, e) : () => o[e] : e.bind(o, o);
  let s;
  U(t) ? s = t : (s = t.handler, n = t);
  const i = An(this), l = Ni(r, s.bind(o), n);
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
const dc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Me(t)}Modifiers`] || e[`${Pe(t)}Modifiers`];
function pc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || ee;
  if (g.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(Tt(Me(t)) in u)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Tt(Me(t))}" prop.`
        );
      else {
        const h = d[t];
        U(h) && (h(...n) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && dc(o, t.slice(7));
  if (i && (i.trim && (r = n.map((d) => ie(d) ? d.trim() : d)), i.number && (r = n.map(Ao))), g.NODE_ENV !== "production" && ha(e, t, r), g.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[Tt(d)] && T(
      `Event "${d}" is emitted in component ${_o(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = Tt(t)] || // also try camelCase event handler (#2249)
  o[l = Tt(Me(t))];
  !a && s && (a = o[l = Tt(Pe(t))]), a && ct(
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
    e.emitted[l] = !0, ct(
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
  if (!U(e)) {
    const a = (f) => {
      const d = xi(f, t, !0);
      d && (l = !0, ce(i, d));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !s && !l ? (ne(e) && o.set(e, null), null) : (j(s) ? s.forEach((a) => i[a] = null) : ce(i, s), ne(e) && o.set(e, i), i);
}
function ho(e, t) {
  return !e || !Sn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), z(e, t[0].toLowerCase() + t.slice(1)) || z(e, Pe(t)) || z(e, t));
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
    ctx: D,
    inheritAttrs: A
  } = e, B = Xn(e);
  let H, M;
  g.NODE_ENV !== "production" && (Bo = !1);
  try {
    if (n.shapeFlag & 4) {
      const O = r || o, x = g.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(O, {
        get(P, F, k) {
          return T(
            `Property '${String(
              F
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(P, F, k);
        }
      }) : O;
      H = Ye(
        f.call(
          x,
          O,
          d,
          g.NODE_ENV !== "production" ? it(u) : u,
          m,
          h,
          D
        )
      ), M = l;
    } else {
      const O = t;
      g.NODE_ENV !== "production" && l === u && eo(), H = Ye(
        O.length > 1 ? O(
          g.NODE_ENV !== "production" ? it(u) : u,
          g.NODE_ENV !== "production" ? {
            get attrs() {
              return eo(), it(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : O(
          g.NODE_ENV !== "production" ? it(u) : u,
          null
        )
      ), M = t.props ? l : hc(l);
    }
  } catch (O) {
    pn.length = 0, Tn(O, e, 1), H = at(He);
  }
  let R = H, J;
  if (g.NODE_ENV !== "production" && H.patchFlag > 0 && H.patchFlag & 2048 && ([R, J] = Oi(H)), M && A !== !1) {
    const O = Object.keys(M), { shapeFlag: x } = R;
    if (O.length) {
      if (x & 7)
        s && O.some(Wn) && (M = gc(
          M,
          s
        )), R = xt(R, M, !1, !0);
      else if (g.NODE_ENV !== "production" && !Bo && R.type !== He) {
        const P = Object.keys(l), F = [], k = [];
        for (let Z = 0, me = P.length; Z < me; Z++) {
          const le = P[Z];
          Sn(le) ? Wn(le) || F.push(le[2].toLowerCase() + le.slice(3)) : k.push(le);
        }
        k.length && T(
          `Extraneous non-props attributes (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), F.length && T(
          `Extraneous non-emits event listeners (${F.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (g.NODE_ENV !== "production" && !Br(R) && T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), R = xt(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && (g.NODE_ENV !== "production" && !Br(R) && T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), cr(R, n.transition)), g.NODE_ENV !== "production" && J ? J(R) : H = R, Xn(B), H;
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
  return [Ye(o), i];
};
function mr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (go(r)) {
      if (r.type !== He || r.children === "v-if") {
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
    (n === "class" || n === "style" || Sn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, gc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Wn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Br = (e) => e.shapeFlag & 7 || e.type === He;
function mc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: a } = t, f = s.emitsOptions;
  if (g.NODE_ENV !== "production" && (r || l) && lt || t.dirs || t.transition)
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
  t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Xs(e);
}
const Je = Symbol.for("v-fgt"), Vn = Symbol.for("v-txt"), He = Symbol.for("v-cmt"), Un = Symbol.for("v-stc"), pn = [];
let Le = null;
function Ue(e = !1) {
  pn.push(Le = e ? null : []);
}
function yc() {
  pn.pop(), Le = pn[pn.length - 1] || null;
}
let yn = 1;
function Wr(e, t = !1) {
  yn += e, e < 0 && Le && t && (Le.hasOnce = !0);
}
function Di(e) {
  return e.dynamicChildren = yn > 0 ? Le || Yt : null, yc(), yn > 0 && Le && Le.push(e), e;
}
function Ke(e, t, n, o, r, s) {
  return Di(
    Fe(
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
    at(
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
function nn(e, t) {
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
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ue(e) || U(e) ? { i: De, r: e, k: t, f: !!n } : e : null);
function Fe(e, t = null, n = null, o = 0, r = null, s = e === Je ? 0 : 1, i = !1, l = !1) {
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
    ctx: De
  };
  return l ? (_r(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= ie(n) ? 8 : 16), g.NODE_ENV !== "production" && a.key !== a.key && T("VNode created with invalid key (NaN). VNode type:", a.type), yn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Le.push(a), a;
}
const at = g.NODE_ENV !== "production" ? vc : Ti;
function Ti(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === Va) && (g.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = He), go(e)) {
    const l = xt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _r(l, n), yn > 0 && !s && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l;
  }
  if (Pi(e) && (e = e.__vccOpts), t) {
    t = Nc(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = Gt(l)), ne(a) && (_n(a) && !j(a) && (a = ce({}, a)), t.style = lo(a));
  }
  const i = ie(e) ? 1 : Si(e) ? 128 : ba(e) ? 64 : ne(e) ? 4 : U(e) ? 2 : 0;
  return g.NODE_ENV !== "production" && i & 4 && _n(e) && (e = G(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Fe(
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
  return e ? _n(e) || gi(e) ? ce({}, e) : e : null;
}
function xt(e, t, n = !1, o = !1) {
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
      n && s ? j(s) ? s.concat(Bn(t)) : [s, Bn(t)] : Bn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: g.NODE_ENV !== "production" && i === -1 && j(l) ? l.map(Ci) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Je ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && xt(e.ssContent),
    ssFallback: e.ssFallback && xt(e.ssFallback),
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
  const t = xt(e);
  return j(e.children) && (t.children = e.children.map(Ci)), t;
}
function Ko(e = " ", t = 0) {
  return at(Vn, null, e, t);
}
function Ht(e = "", t = !1) {
  return t ? (Ue(), Ec(He, null, e)) : at(He, null, e);
}
function Ye(e) {
  return e == null || typeof e == "boolean" ? at(He) : j(e) ? at(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : go(e) ? vt(e) : at(Vn, null, String(e));
}
function vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xt(e);
}
function _r(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (j(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), _r(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !gi(t) ? t._ctx = De : r === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else U(t) ? (t = { default: t, _ctx: De }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ko(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function wc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Gt([t.class, o.class]));
      else if (r === "style")
        t.style = lo([t.style, o.style]);
      else if (Sn(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(j(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else r !== "" && (t[r] = o[r]);
  }
  return t;
}
function nt(e, t, n, o = null) {
  ct(e, t, 7, [
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
  return g.NODE_ENV !== "production" ? s.ctx = Ra(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = pc.bind(null, s), e.ce && e.ce(s), s;
}
let ye = null;
const br = () => ye || De;
let to, Wo;
{
  const e = Dn(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  to = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ye = n
  ), Wo = t(
    "__VUE_SSR_SETTERS__",
    (n) => En = n
  );
}
const An = (e) => {
  const t = ye;
  return to(e), e.scope.on(), () => {
    e.scope.off(), to(t);
  };
}, Jr = () => {
  ye && ye.scope.off(), to(null);
}, Dc = /* @__PURE__ */ mt("slot,component");
function Jo(e, { isNativeTag: t }) {
  (Dc(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Vi(e) {
  return e.vnode.shapeFlag & 4;
}
let En = !1;
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
    qe();
    const s = e.setupContext = r.length > 1 ? Ac(e) : null, i = An(e), l = Zt(
      r,
      e,
      0,
      [
        g.NODE_ENV !== "production" ? it(e.props) : e.props,
        s
      ]
    ), a = Qo(l);
    if (Xe(), i(), (a || e.sp) && !dn(e) && li(e), a) {
      if (l.then(Jr, Jr), t)
        return l.then((f) => {
          Yr(e, f, t);
        }).catch((f) => {
          Tn(f, e, 0);
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
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ne(t) ? (g.NODE_ENV !== "production" && go(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), g.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ys(t), g.NODE_ENV !== "production" && Ma(e)) : g.NODE_ENV !== "production" && t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Ai(e, n);
}
const Cc = () => !0;
function Ai(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ge);
  {
    const r = An(e);
    qe();
    try {
      $a(e);
    } finally {
      Xe(), r();
    }
  }
  g.NODE_ENV !== "production" && !o.render && e.render === ge && !t && (o.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", o));
}
const Gr = g.NODE_ENV !== "production" ? {
  get(e, t) {
    return eo(), he(e, "get", ""), e[t];
  },
  set() {
    return T("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return T("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function Vc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return he(e, "get", "$slots"), t[n];
    }
  });
}
function Ac(e) {
  const t = (n) => {
    if (g.NODE_ENV !== "production" && (e.exposed && T("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (j(n) ? o = "array" : ue(n) && (o = "ref")), o !== "object" && T(
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
      if (n in Mt)
        return Mt[n](e);
    },
    has(t, n) {
      return n in t || n in Mt;
    }
  })) : e.proxy;
}
const Rc = /(?:^|[-_])(\w)/g, Pc = (e) => e.replace(Rc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ri(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || t && e.__name;
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
  return U(e) && "__vccOpts" in e;
}
const yr = (e, t) => {
  const n = Yl(e, t, En);
  if (g.NODE_ENV !== "production") {
    const o = br();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Mc() {
  if (g.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!ne(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (ue(u)) {
        qe();
        const h = u.value;
        return Xe(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (Rt(u))
          return [
            "div",
            {},
            ["span", e, Ie(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Ze(u) ? " (readonly)" : ""}`
          ];
        if (Ze(u))
          return [
            "div",
            {},
            ["span", e, Ie(u) ? "ShallowReadonly" : "Readonly"],
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
    u.type.props && u.props && h.push(i("props", G(u.props))), u.setupState !== ee && h.push(i("setup", u.setupState)), u.data !== ee && h.push(i("data", G(u.data)));
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
    return h = ce({}, h), Object.keys(h).length ? [
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
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : ne(u) ? ["object", { object: h ? G(u) : u }] : ["span", n, String(u)];
  }
  function a(u, h) {
    const m = u.type;
    if (U(m))
      return;
    const D = {};
    for (const A in u.ctx)
      f(m, A, h) && (D[A] = u.ctx[A]);
    return D;
  }
  function f(u, h, m) {
    const D = u[m];
    if (j(D) && D.includes(h) || ne(D) && h in D || u.extends && f(u.extends, h, m) || u.mixins && u.mixins.some((A) => f(A, h, m)))
      return !0;
  }
  function d(u) {
    return Ie(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const zr = "3.5.18", Be = g.NODE_ENV !== "production" ? T : ge;
var Ne = {};
let Yo;
const qr = typeof window < "u" && window.trustedTypes;
if (qr)
  try {
    Yo = /* @__PURE__ */ qr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Ne.NODE_ENV !== "production" && Be(`Error creating trusted types policy: ${e}`);
  }
const Mi = Yo ? (e) => Yo.createHTML(e) : (e) => e, kc = "http://www.w3.org/2000/svg", $c = "http://www.w3.org/1998/Math/MathML", pt = typeof document < "u" ? document : null, Xr = pt && /* @__PURE__ */ pt.createElement("template"), jc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? pt.createElementNS(kc, e) : t === "mathml" ? pt.createElementNS($c, e) : n ? pt.createElement(e, { is: n }) : pt.createElement(e);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => pt.createTextNode(e),
  createComment: (e) => pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pt.querySelector(e),
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
      Xr.innerHTML = Mi(
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
const Zr = Symbol("_vod"), Hc = Symbol("_vsh"), Uc = Symbol(Ne.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Bc = /(^|;)\s*display\s*:/;
function Kc(e, t, n) {
  const o = e.style, r = ie(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (ie(t))
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
  if (j(n))
    n.forEach((o) => Kn(e, t, o));
  else if (n == null && (n = ""), Ne.NODE_ENV !== "production" && Wc.test(n) && Be(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Jc(e, t);
    Qr.test(n) ? e.setProperty(
      Pe(o),
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
  let o = Me(t);
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
    s ? "" : Ot(n) ? String(n) : n
  );
}
function os(e, t, n, o, r) {
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
    l === "boolean" ? n = Is(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Ne.NODE_ENV !== "production" && !i && Be(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(r || t);
}
function Kt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Yc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const rs = Symbol("_vei");
function Gc(e, t, n, o, r = null) {
  const s = e[rs] || (e[rs] = {}), i = s[t];
  if (o && i)
    i.value = Ne.NODE_ENV !== "production" ? is(o, t) : o;
  else {
    const [l, a] = zc(t);
    if (o) {
      const f = s[t] = Zc(
        Ne.NODE_ENV !== "production" ? is(o, t) : o,
        r
      );
      Kt(e, l, f, a);
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
  return [e[2] === ":" ? e.slice(3) : Pe(e.slice(2)), t];
}
let Do = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Xc = () => Do || (qc.then(() => Do = 0), Do = Date.now());
function Zc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ct(
      Qc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Xc(), n;
}
function is(e, t) {
  return U(e) || j(e) ? e : (Be(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ge);
}
function Qc(e, t) {
  if (j(t)) {
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
  t === "class" ? Lc(e, o, i) : t === "style" ? Kc(e, n, o) : Sn(t) ? Wn(t) || Gc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : tu(e, t, o, i)) ? (os(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ns(e, t, o, i, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(o)) ? os(e, Me(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ns(e, t, o, i));
};
function tu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ls(t) && U(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return ls(t) && ie(n) ? !1 : t in e;
}
const as = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function nu(e, t, n) {
  const o = /* @__PURE__ */ ii(e, t);
  ro(o) && ce(o, t);
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
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== ps ? this._root = this.shadowRoot : (Ne.NODE_ENV !== "production" && this.shadowRoot && Be(
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
    this._connected = !1, Et(() => {
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
      if (s && !j(s))
        for (const a in s) {
          const f = s[a];
          (f === Number || f && f.type === Number) && (a in this._props && (this._props[a] = Dr(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Me(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(i) : Ne.NODE_ENV !== "production" && i && Be(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    Ne.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        z(this, o) ? Ne.NODE_ENV !== "production" && Be(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ae(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = j(n) ? n : Object.keys(n || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && o.includes(r) && this._setProp(r, this[r]);
    for (const r of o.map(Me))
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
    const r = Me(t);
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
      s && s.disconnect(), n === !0 ? this.setAttribute(Pe(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Pe(t), n + "") : n || this.removeAttribute(Pe(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), fu(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = at(this._def, ce(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, Ne.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((i) => this._root.removeChild(i)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const r = (s, i) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            ro(i[0]) ? ce({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      o.emit = (s, ...i) => {
        r(s, i), Pe(s) !== s && r(Pe(s), i);
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
      if (o && s.setAttribute("nonce", o), s.textContent = t[r], this.shadowRoot.prepend(s), Ne.NODE_ENV !== "production")
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
    if (Ne.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const cs = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return j(t) ? (n) => Ut(t, n) : t;
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
    Kt(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), s && (l = Ao(l)), e[Io](l);
    }), n && Kt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Kt(e, "compositionstart", ru), Kt(e, "compositionend", us), Kt(e, "change", us));
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
    const s = Pe(r.key);
    if (t.some(
      (i) => i === s || au[i] === s
    ))
      return e(r);
  });
}, uu = /* @__PURE__ */ ce({ patchProp: eu }, jc);
let ds;
function ki() {
  return ds || (ds = sc(uu));
}
const fu = (...e) => {
  ki().render(...e);
}, ps = (...e) => {
  const t = ki().createApp(...e);
  Ne.NODE_ENV !== "production" && (pu(t), hu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = gu(o);
    if (!r) return;
    const s = t._component;
    !U(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
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
        Be(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Be(o), n;
      },
      set() {
        Be(o);
      }
    });
  }
}
function gu(e) {
  if (ie(e)) {
    const t = document.querySelector(e);
    return Ne.NODE_ENV !== "production" && !t && Be(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Ne.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Be(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var mu = {};
function _u() {
  Mc();
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
var Xt = yu;
function Li(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Hi = "AI_InvalidArgumentError", Ui = `vercel.ai.error.${Hi}`, Eu = Symbol.for(Ui), Bi, vu = class extends Xt {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({ name: Hi, message: e, cause: t }), this[Bi] = !0, this.argument = n;
  }
  static isInstance(e) {
    return Xt.hasMarker(e, Ui);
  }
};
Bi = Eu;
var Ki = "AI_JSONParseError", Wi = `vercel.ai.error.${Ki}`, Nu = Symbol.for(Wi), Ji, hs = class extends Xt {
  constructor({ text: e, cause: t }) {
    super({
      name: Ki,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${Li(t)}`,
      cause: t
    }), this[Ji] = !0, this.text = e;
  }
  static isInstance(e) {
    return Xt.hasMarker(e, Wi);
  }
};
Ji = Nu;
var Yi = "AI_TypeValidationError", Gi = `vercel.ai.error.${Yi}`, wu = Symbol.for(Gi), zi, xu = class Go extends Xt {
  constructor({ value: t, cause: n }) {
    super({
      name: Yi,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${Li(n)}`,
      cause: n
    }), this[zi] = !0, this.value = t;
  }
  static isInstance(t) {
    return Xt.hasMarker(t, Gi);
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
var It = { exports: {} }, ms;
function Du() {
  if (ms) return It.exports;
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
        for (const D in m) {
          const A = m[D];
          A && typeof A == "object" && u.push(A);
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
  return It.exports = s, It.exports.default = s, It.exports.parse = s, It.exports.safeParse = i, It.exports.scan = r, It.exports;
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
function Mu({
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
    const o = Mu({ value: n, schema: t });
    return o.success ? { ...o, rawValue: n } : o;
  } catch (n) {
    return {
      success: !1,
      error: hs.isInstance(n) ? n : new hs({ text: e, cause: n })
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
}, xn = {
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
}, On = {
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
}, ku = [
  vn,
  Nn,
  wn,
  xn,
  On
];
vn.code + "", Nn.code + "", wn.code + "", xn.code + "", On.code + "";
vn.name + "", vn.code, Nn.name + "", Nn.code, wn.name + "", wn.code, xn.name + "", xn.code, On.name + "", On.code;
ku.map((e) => e.code);
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
  onFinishMessagePart: D,
  onFinishStepPart: A,
  onStartStepPart: B
}) {
  const H = e.getReader(), M = new TextDecoder(), R = [];
  let J = 0;
  for (; ; ) {
    const { value: O } = await H.read();
    if (O && (R.push(O), J += O.length, O[O.length - 1] !== sf))
      continue;
    if (R.length === 0)
      break;
    const x = lf(R, J);
    J = 0;
    const P = M.decode(x, { stream: !0 }).split(`
`).filter((F) => F !== "").map(rf);
    for (const { type: F, value: k } of P)
      switch (F) {
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
          await D?.(k);
          break;
        case "finish_step":
          await A?.(k);
          break;
        case "start_step":
          await B?.(k);
          break;
        default: {
          const Z = F;
          throw new Error(`Unknown stream part type: ${Z}`);
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
  ((a = (l = i.toolInvocations) == null ? void 0 : l.reduce((x, P) => {
    var F;
    return Math.max(x, (F = P.step) != null ? F : 0);
  }, 0)) != null ? a : 0) : 0;
  const u = f ? structuredClone(i) : {
    id: r(),
    createdAt: s(),
    role: "assistant",
    content: "",
    parts: []
  };
  let h, m, D;
  function A(x, P) {
    const F = u.parts.find(
      (k) => k.type === "tool-invocation" && k.toolInvocation.toolCallId === x
    );
    F != null ? F.toolInvocation = P : u.parts.push({
      type: "tool-invocation",
      toolInvocation: P
    });
  }
  const B = [];
  let H = f ? i?.annotations : void 0;
  const M = {};
  let R = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, J = "unknown";
  function O() {
    const x = [...B];
    H?.length && (u.annotations = H);
    const P = {
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
      message: P,
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
      }, u.parts.push(h)) : h.text += x, u.content += x, O();
    },
    onReasoningPart(x) {
      var P;
      D == null ? (D = { type: "text", text: x }, m?.details.push(D)) : D.text += x, m == null ? (m = {
        type: "reasoning",
        reasoning: x,
        details: [D]
      }, u.parts.push(m)) : m.reasoning += x, u.reasoning = ((P = u.reasoning) != null ? P : "") + x, O();
    },
    onReasoningSignaturePart(x) {
      D != null && (D.signature = x.signature);
    },
    onRedactedReasoningPart(x) {
      m == null && (m = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, u.parts.push(m)), m.details.push({
        type: "redacted",
        data: x.data
      }), D = void 0, O();
    },
    onFilePart(x) {
      u.parts.push({
        type: "file",
        mimeType: x.mimeType,
        data: x.data
      }), O();
    },
    onSourcePart(x) {
      u.parts.push({
        type: "source",
        source: x
      }), O();
    },
    onToolCallStreamingStartPart(x) {
      u.toolInvocations == null && (u.toolInvocations = []), M[x.toolCallId] = {
        text: "",
        step: d,
        toolName: x.toolName,
        index: u.toolInvocations.length
      };
      const P = {
        state: "partial-call",
        step: d,
        toolCallId: x.toolCallId,
        toolName: x.toolName,
        args: void 0
      };
      u.toolInvocations.push(P), A(x.toolCallId, P), O();
    },
    onToolCallDeltaPart(x) {
      const P = M[x.toolCallId];
      P.text += x.argsTextDelta;
      const { value: F } = Fu(P.text), k = {
        state: "partial-call",
        step: P.step,
        toolCallId: x.toolCallId,
        toolName: P.toolName,
        args: F
      };
      u.toolInvocations[P.index] = k, A(x.toolCallId, k), O();
    },
    async onToolCallPart(x) {
      const P = {
        state: "call",
        step: d,
        ...x
      };
      if (M[x.toolCallId] != null ? u.toolInvocations[M[x.toolCallId].index] = P : (u.toolInvocations == null && (u.toolInvocations = []), u.toolInvocations.push(P)), A(x.toolCallId, P), O(), n) {
        const F = await n({ toolCall: x });
        if (F != null) {
          const k = {
            state: "result",
            step: d,
            ...x,
            result: F
          };
          u.toolInvocations[u.toolInvocations.length - 1] = k, A(x.toolCallId, k), O();
        }
      }
    },
    onToolResultPart(x) {
      const P = u.toolInvocations;
      if (P == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const F = P.findIndex(
        (Z) => Z.toolCallId === x.toolCallId
      );
      if (F === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const k = {
        ...P[F],
        state: "result",
        ...x
      };
      P[F] = k, A(x.toolCallId, k), O();
    },
    onDataPart(x) {
      B.push(...x), O();
    },
    onMessageAnnotationsPart(x) {
      H == null ? H = [...x] : H.push(...x), O();
    },
    onFinishStepPart(x) {
      d += 1, h = x.isContinued ? h : void 0, m = void 0, D = void 0;
    },
    onStartStepPart(x) {
      f || (u.id = x.messageId), u.parts.push({ type: "step-start" }), O();
    },
    onFinishMessagePart(x) {
      J = x.finishReason, x.usage != null && (R = $u(x.usage));
    },
    onErrorPart(x) {
      throw new Error(x);
    }
  }), o?.({ message: u, finishReason: J, usage: R });
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
  requestType: D = "generate"
}) {
  var A, B, H;
  const R = await (D === "resume" ? h(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (A = s?.()) == null ? void 0 : A.signal,
    credentials: o
  }) : h(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...r
    },
    signal: (B = s?.()) == null ? void 0 : B.signal,
    credentials: o
  })).catch((J) => {
    throw i(), J;
  });
  if (l)
    try {
      await l(R);
    } catch (J) {
      throw J;
    }
  if (!R.ok)
    throw i(), new Error(
      (H = await R.text()) != null ? H : "Failed to fetch the chat response."
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
        onFinish({ message: J, finishReason: O, usage: x }) {
          f && J != null && f(J, { usage: x, finishReason: O });
        },
        generateId: u
      });
      return;
    }
    default: {
      const J = n;
      throw new Error(`Unknown stream protocol: ${J}`);
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
function kn(e) {
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
var ht = function() {
  return ht = Object.assign || function(e) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, ht.apply(this, arguments);
}, Wt = function(e, t, n, o) {
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
}, Jt = function(e, t) {
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
  return n === void 0 && (n = Zi), o === void 0 && (o = Qi.ttl), Wt(void 0, void 0, void 0, function() {
    var r, s, i, l, a, f, d;
    return Jt(this, function(u) {
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
            var D = m === d.length - 1;
            D || delete d[m];
          }), d = d.filter(Boolean)), [2, a];
      }
    });
  });
};
function vs() {
  for (var e = this, t = [], n = 0; n < arguments.length; n++)
    t[n] = arguments[n];
  var o, r, s = ht({}, Qi), i = !1, l = !1, a = br(), f = a?.proxy || a;
  if (!f)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var d = f?.$isServer || !1;
  t.length >= 1 && (o = t[0]), t.length >= 2 && (r = t[1]), t.length > 2 && (s = ht(ht({}, s), t[2]));
  var u = d ? s.serverTTL : s.ttl, h = typeof o == "function" ? o : Oe(o);
  typeof r > "u" && (r = s.fetcher);
  var m = null;
  m || (m = In({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var D = function(M, R) {
    return Wt(e, void 0, void 0, function() {
      var J, O, x, P, F, k, Z, me = this;
      return Jt(this, function(le) {
        switch (le.label) {
          case 0:
            return J = m.data === void 0, O = h.value, O ? (x = s.cache.get(O), P = x && x.data, m.isValidating = !0, m.isLoading = !P, P && (m.data = P.data, m.error = P.error), F = M || r, !F || !s.isDocumentVisible() && !J || R?.forceRevalidate !== void 0 && !R?.forceRevalidate ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : x && (k = !!(Date.now() - x.createdAt >= s.dedupingInterval || R?.forceRevalidate), !k) ? (m.isValidating = !1, m.isLoading = !1, [
              2
              /*return*/
            ]) : (Z = function() {
              return Wt(me, void 0, void 0, function() {
                var ae, Ee, de, fe;
                return Jt(this, function(W) {
                  switch (W.label) {
                    case 0:
                      return ae = Vo.get(O), ae ? [3, 2] : (Ee = Array.isArray(O) ? O : [O], de = F.apply(void 0, Nf([], vf(Ee), !1)), Vo.set(O, de, s.dedupingInterval), [4, Es(O, de, s.cache, u)]);
                    case 1:
                      return W.sent(), [3, 4];
                    case 2:
                      return [4, Es(O, ae.data, s.cache, u)];
                    case 3:
                      W.sent(), W.label = 4;
                    case 4:
                      return m.isValidating = !1, m.isLoading = !1, Vo.delete(O), m.error !== void 0 && (fe = !i && s.shouldRetryOnError && (R ? R.shouldRetryOnError : !0), fe && xf(D, R ? R.errorRetryCount : 1, s)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, P && s.revalidateDebounce ? (setTimeout(function() {
              return Wt(me, void 0, void 0, function() {
                return Jt(this, function(ae) {
                  switch (ae.label) {
                    case 0:
                      return i ? [3, 2] : [4, Z()];
                    case 1:
                      ae.sent(), ae.label = 2;
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
            return [4, Z()];
          case 2:
            le.sent(), le.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, A = function() {
    return Wt(e, void 0, void 0, function() {
      return Jt(this, function(M) {
        return [2, D(null, { shouldRetryOnError: !1 })];
      });
    });
  }, B = null;
  fr(function() {
    var M = function() {
      return Wt(e, void 0, void 0, function() {
        return Jt(this, function(R) {
          switch (R.label) {
            case 0:
              return !m.error && s.isOnline() ? [4, D()] : [3, 2];
            case 1:
              return R.sent(), [3, 3];
            case 2:
              B && clearTimeout(B), R.label = 3;
            case 3:
              return s.refreshInterval && !i && (B = setTimeout(M, s.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    s.refreshInterval && (B = setTimeout(M, s.refreshInterval)), s.revalidateOnFocus && (document.addEventListener("visibilitychange", A, !1), window.addEventListener("focus", A, !1));
  }), dr(function() {
    i = !0, B && clearTimeout(B), s.revalidateOnFocus && (document.removeEventListener("visibilitychange", A, !1), window.removeEventListener("focus", A, !1));
    var M = no.get(h.value);
    M && (M.data = M.data.filter(function(R) {
      return R !== m;
    }));
  });
  try {
    We(h, function(M) {
      Ze(h) || (h.value = M), m.key = M, m.isValidating = !!M, wf(h.value, m, u), !d && !l && h.value && D(), l = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var H = ht(ht({}, Bl(m)), { mutate: function(M, R) {
    return D(M, ht(ht({}, R), { forceRevalidate: !0 }));
  } });
  return H;
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
  fetch: D,
  keepLastMessageOnError: A = !0,
  maxSteps: B = 1,
  experimental_prepareRequestBody: H
} = {
  maxSteps: 1
}) {
  var M, R;
  const J = t ?? h(), O = `${e}|${J}`, { data: x, mutate: P } = Sf(
    O,
    () => {
      var Y;
      return (Y = Ns[O]) != null ? Y : kn(n);
    }
  ), F = (M = ws[J]) != null ? M : ws[J] = Oe(
    "ready"
  );
  (R = x.value) != null || (x.value = kn(n));
  const k = (Y) => (Ns[O] = Y, P()), Z = x, me = Oe(void 0), le = Oe(void 0);
  let ae = null;
  async function Ee(Y, { data: re, headers: pe, body: ve } = {}) {
    var _e, $e, ut;
    me.value = void 0, F.value = "submitted";
    const $t = Z.value.length, ft = qo(
      (_e = Z.value[Z.value.length - 1]) == null ? void 0 : _e.toolInvocations
    );
    try {
      ae = new AbortController();
      const bt = kn(Y), c = bt;
      k(c);
      const p = ($e = le.value) != null ? $e : [], _ = r ? c : c.map(
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
      await pf({
        api: e,
        body: (ut = H?.({
          id: J,
          messages: c,
          requestData: re,
          requestBody: ve
        })) != null ? ut : {
          id: J,
          messages: _,
          data: re,
          ...Ae(u),
          // Use unref to unwrap the ref value
          ...ve
        },
        streamProtocol: s,
        headers: {
          ...d,
          ...pe
        },
        abortController: () => ae,
        credentials: f,
        onResponse: i,
        onUpdate({ message: N, data: y, replaceLastMessage: E }) {
          F.value = "streaming", k([
            ...E ? c.slice(0, c.length - 1) : c,
            N
          ]), y?.length && (le.value = [...p, ...y]);
        },
        onFinish: l,
        restoreMessagesOnFailure() {
          A || k(bt);
        },
        generateId: h,
        onToolCall: m,
        fetch: D,
        // enabled use of structured clone in processChatResponse:
        lastMessage: Xo(c[c.length - 1])
      }), F.value = "ready";
    } catch (bt) {
      if (bt.name === "AbortError")
        return ae = null, F.value = "ready", null;
      a && bt instanceof Error && a(bt), me.value = bt, F.value = "error";
    } finally {
      ae = null;
    }
    hf({
      originalMaxToolInvocationStep: ft,
      originalMessageCount: $t,
      maxSteps: B,
      messages: Z.value
    }) && await Ee(Z.value);
  }
  const de = async (Y, re) => {
    var pe, ve, _e;
    const $e = await bs(
      (pe = re?.experimental_attachments) != null ? pe : Y.experimental_attachments
    );
    return Ee(
      Z.value.concat({
        ...Y,
        id: (ve = Y.id) != null ? ve : h(),
        createdAt: (_e = Y.createdAt) != null ? _e : /* @__PURE__ */ new Date(),
        experimental_attachments: $e.length > 0 ? $e : void 0,
        parts: qi(Y)
      }),
      re
    );
  }, fe = async (Y) => {
    const re = Z.value;
    return re.length === 0 ? null : re[re.length - 1].role === "assistant" ? Ee(re.slice(0, -1), Y) : Ee(re, Y);
  }, W = () => {
    ae && (ae.abort(), ae = null);
  }, b = (Y) => {
    typeof Y == "function" && (Y = Y(Z.value)), k(kn(Y));
  }, v = (Y) => {
    typeof Y == "function" && (Y = Y(le.value)), le.value = Y;
  }, X = Oe(o), ke = async (Y, re = {}) => {
    var pe;
    (pe = Y?.preventDefault) == null || pe.call(Y);
    const ve = X.value;
    if (!ve && !re.allowEmptySubmit)
      return;
    const _e = await bs(
      re.experimental_attachments
    );
    Ee(
      Z.value.concat({
        id: h(),
        createdAt: /* @__PURE__ */ new Date(),
        content: ve,
        role: "user",
        experimental_attachments: _e.length > 0 ? _e : void 0,
        parts: [{ type: "text", text: ve }]
      }),
      re
    ), X.value = "";
  }, Te = ({
    toolCallId: Y,
    result: re
  }) => {
    const pe = Z.value;
    if (gf({
      messages: pe,
      toolCallId: Y,
      toolResult: re
    }), k(pe), F.value === "submitted" || F.value === "streaming")
      return;
    const ve = pe[pe.length - 1];
    Xi(ve) && Ee(pe);
  };
  return {
    id: J,
    messages: Z,
    append: de,
    error: me,
    reload: fe,
    stop: W,
    setMessages: b,
    input: X,
    handleSubmit: ke,
    isLoading: yr(
      () => F.value === "submitted" || F.value === "streaming"
    ),
    status: F,
    data: le,
    setData: v,
    addToolResult: Te
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
  const t = Oe(!1), n = Oe(""), o = Oe(!0);
  let r = null, s = [], i = null;
  const l = () => {
    const h = window.SpeechRecognition || window.webkitSpeechRecognition;
    return o.value = !!h, h;
  }, a = () => {
    const h = l();
    return h ? (i = new h(), i.continuous = !0, i.interimResults = !0, i.lang = "zh-CN", i.onresult = (m) => {
      let D = "";
      for (let A = m.resultIndex; A < m.results.length; A++)
        m.results[A].isFinal && (D += m.results[A][0].transcript);
      D && e(D);
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
    isRecording: un(t),
    error: un(n),
    isSupported: un(o),
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
}, Mf = { class: "chat-toolbar" }, kf = ["title"], $f = {
  key: 0,
  class: "speech-indicator"
}, jf = ["title"], Ff = ["disabled"], on = "ai-chat-bubble-data", xs = "ai-chat-bubble-position", Lf = 24, Hf = /* @__PURE__ */ ii({
  __name: "AiChatBubble",
  props: {
    apiUrl: { type: String }
  },
  setup(e) {
    const t = e, n = Oe(!1), o = Oe(!1), r = Oe(null), s = Df({
      // 修复API路径 - 移除错误的路径处理逻辑 
      api: t.apiUrl.includes("/chat") ? t.apiUrl : t.apiUrl.replace("/assistant", "/chat"),
      onToolCall: async ({ toolCall: b }) => {
        if (console.log("[onToolCall] 工具被调用:", b), b.toolName === "navigateToPage") {
          const v = b.args.path;
          return console.log(`[onToolCall] 导航工具调用: ${v}`), W(v), { path: v, success: !0 };
        }
        if (b.toolName === "zoomInOnPhoto") {
          const v = b.args.photoTitle;
          return console.log(`[onToolCall] 图片放大工具调用: ${v}`), window.dispatchEvent(new CustomEvent("ai-zoom-photo", {
            detail: { title: v },
            bubbles: !0,
            composed: !0
          })), { title: v };
        }
        if (b.toolName === "zoomOutPhoto") {
          const v = b.args.action || "close";
          return console.log(`[onToolCall] 图片缩小工具调用: ${v}`), window.dispatchEvent(new CustomEvent("ai-zoom-out-photo", {
            detail: { action: v },
            bubbles: !0,
            composed: !0
          })), { action: v, success: !0 };
        }
        if (b.toolName === "toggleSpeechMode") {
          const v = b.args.action;
          return n.value = v === "on", console.log(`[onToolCall] 语音模式已${v === "on" ? "开启" : "关闭"}，前端状态强制更新为: ${n.value}`), {
            status: v,
            message: `语音播报模式已${v === "on" ? "开启" : "关闭"}`
          };
        }
        if (b.toolName === "speakOnce") {
          const { textToSpeak: v } = b.args;
          return console.log(`[onToolCall] 执行单次语音播报: "${v.substring(0, 50)}..."`), Ee(v), { text: v, mode: "once", executed: !0 };
        }
        return b.toolName === "stopSpeech" ? (de(), console.log("[onToolCall] 停止播报（模式保持不变：" + n.value + "）"), { status: "stopped", message: "语音播报已停止" }) : {};
      },
      onFinish: (b) => {
        console.log("[onFinish] AI回复完成:", b.content), P(), n.value && b.content && (console.log("[onFinish] 全局语音模式开启，开始播报"), Ee(b.content));
      }
    }), i = s.messages, l = s.input, a = s.handleSubmit, f = s.isLoading, d = s.error, { isRecording: u, start: h, stop: m, error: D } = If((b) => {
      const v = b.trim();
      if (["发送", "提交", "发出", "发送。", "提交。", "发出。"].includes(v)) {
        if (l.value.trim()) {
          console.log("[语音指令] 执行发送，内容:", `"${l.value}"`);
          const X = new Event("submit", { bubbles: !0, cancelable: !0 });
          a(X);
        } else
          console.log("[语音指令] 输入框为空，无可发送内容");
        return;
      }
      if (["清空", "清除", "删除", "清除。", "清空。", "删除。"].includes(v)) {
        console.log("[语音指令] 执行清空"), l.value = "";
        return;
      }
      if (["停止播报", "停止", "别说了", "安静"].includes(v)) {
        console.log("[语音指令] 执行停止播报（不改变模式）"), de();
        return;
      }
      if (["朗读关闭", "关闭朗读", "朗读关闭。", "关闭朗读。", "朗读，关闭", "朗读，关闭。"].includes(v)) {
        console.log("[语音指令] 执行朗读关闭"), n.value && ae();
        return;
      }
      if (["结束对话", "结束", "再见", "拜拜", "结束对话。", "结束。", "再见。", "拜拜。"].includes(v)) {
        console.log("[语音指令] 执行结束对话，立即退出持久化模式"), o.value = !1, console.log("[麦克风] 已设置持久化模式为 false"), u.value && (console.log("[麦克风] 强制停止录音"), m()), P(), console.log("[麦克风] 已保存关闭状态，后续页面刷新将保持关闭状态"), setTimeout(() => {
          l.value = v, Et(() => a());
        }, 100);
        return;
      }
      if (v.endsWith("发送") && v.length > 2) {
        const X = v.slice(0, -2).trim();
        X && (l.value = X, Et(() => a()));
        return;
      }
      console.log(`[语音指令] 设置输入内容: "${v}"`), l.value = v;
    }), A = Oe(!1), B = In({ x: 0, y: 0 }), H = Oe(null), M = Oe(null), R = Oe(!1);
    function J() {
      A.value = !A.value, P();
    }
    function O() {
      R.value || J();
    }
    function x() {
      o.value ? (m(), o.value = !1, console.log("[麦克风] 退出持久化模式，后续页面刷新将保持关闭状态")) : (h(), o.value = !0, console.log("[麦克风] 开启持久化录音模式")), P();
    }
    function P() {
      try {
        const b = {
          messages: i.value,
          timestamp: Date.now(),
          speechMode: n.value,
          chatOpen: A.value,
          microphonePersistent: o.value
          // 🆕 保存麦克风状态
        };
        localStorage.setItem(on, JSON.stringify(b)), console.log(`[存储] 已保存 ${i.value.length} 条对话记录`);
      } catch (b) {
        console.error("[存储] 保存对话历史失败:", b);
      }
    }
    function F() {
      try {
        const b = localStorage.getItem(on);
        if (!b) {
          console.log("[存储] 没有找到历史记录");
          return;
        }
        const v = JSON.parse(b), X = Date.now(), ke = Lf * 60 * 60 * 1e3;
        if (X - v.timestamp > ke) {
          console.log("[存储] 历史记录已过期，清除数据"), localStorage.removeItem(on);
          return;
        }
        v.messages && Array.isArray(v.messages) && (i.value.length = 0, v.messages.forEach((Te) => {
          i.value.push(Te);
        }), console.log(`[存储] 已恢复 ${v.messages.length} 条对话记录`)), typeof v.speechMode == "boolean" && (n.value = v.speechMode, console.log(`[存储] 已恢复语音模式: ${v.speechMode}`)), typeof v.chatOpen == "boolean" && (A.value = v.chatOpen, console.log(`[存储] 已恢复对话框状态: ${v.chatOpen}`)), typeof v.microphonePersistent == "boolean" && (o.value = v.microphonePersistent, console.log(`[存储] 已恢复麦克风状态: ${v.microphonePersistent}`), v.microphonePersistent === !0 ? (console.log("[存储] 恢复持久化录音模式，立即开启录音"), Et(() => {
          h();
        })) : console.log("[存储] 保持麦克风关闭状态"));
      } catch (b) {
        console.error("[存储] 恢复对话历史失败:", b), localStorage.removeItem(on);
      }
    }
    function k() {
      try {
        const b = {
          x: B.x,
          y: B.y,
          timestamp: Date.now()
        };
        localStorage.setItem(xs, JSON.stringify(b)), console.log("[存储] 已保存悬浮球位置");
      } catch (b) {
        console.error("[存储] 保存位置失败:", b);
      }
    }
    function Z() {
      try {
        const b = localStorage.getItem(xs);
        if (!b) return;
        const v = JSON.parse(b), X = H.value;
        if (X) {
          const ke = window.innerWidth - X.offsetWidth, Te = window.innerHeight - X.offsetHeight;
          if (v.x >= 0 && v.x <= ke && v.y >= 0 && v.y <= Te) {
            B.x = v.x, B.y = v.y, console.log("[存储] 已恢复悬浮球位置");
            return;
          }
        }
        me();
      } catch (b) {
        console.error("[存储] 恢复位置失败:", b), me();
      }
    }
    function me() {
      const b = H.value;
      b && (B.x = window.innerWidth - b.offsetWidth - 20, B.y = window.innerHeight - b.offsetHeight - 20);
    }
    function le() {
      confirm("确定要清除所有对话历史吗？此操作无法撤销。") && (i.value.length = 0, l.value = "", u.value && m(), o.value = !1, localStorage.removeItem(on), de(), console.log("[清除历史] 对话历史已完全清除，麦克风已退出持久化模式"));
    }
    function ae() {
      const b = !n.value;
      n.value = b, console.log(`[语音模式] 用户${b ? "开启" : "关闭"}语音模式，状态已更新为：${n.value}`), P();
      const v = b ? "开启语音模式" : "关闭语音模式";
      l.value = v, Et(() => {
        a(), setTimeout(() => {
          l.value = "";
        }, 100);
      }), b ? Ee("准备就绪") : de();
    }
    function Ee(b) {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const v = new SpeechSynthesisUtterance(b);
        v.lang = "zh-CN", v.rate = 1.5, window.speechSynthesis.speak(v);
      } else
        console.error("您的浏览器不支持语音合成功能。");
    }
    function de() {
      "speechSynthesis" in window && (console.log("[TTS] 停止播报"), window.speechSynthesis.cancel(), r.value = null);
    }
    yr(() => {
      if (!f.value) return !1;
      const b = [...i.value].reverse().find((v) => v.role === "user");
      return !!(b && /摇骰子|掷骰子/.test(b.content));
    }), We(i, async (b, v) => {
      b.length > 0 && P(), await Et(), M.value && (M.value.scrollTop = M.value.scrollHeight);
    }, { deep: !0 }), We(n, (b) => {
      P();
    }), We(A, (b) => {
      P();
    }), We(o, (b) => {
      console.log(`[麦克风] 持久化状态变更为: ${b}`), P();
    }), We(u, (b, v) => {
      console.log(`[麦克风] 录音状态变更: ${v} -> ${b}`), !b && o.value ? (console.log("[麦克风] 录音停止，检查是否需要重新开启"), setTimeout(() => {
        o.value && !u.value ? (console.log("[麦克风] 持久化模式仍然开启，重新启动录音"), h()) : console.log(`[麦克风] 不重新启动录音 - 持久化: ${o.value}, 录音中: ${u.value}`);
      }, 1e3)) : !b && !o.value && console.log("[麦克风] 录音正常停止，不在持久化模式中");
    }), We(d, (b) => {
      b && console.error("[Assistant] An error occurred:", b);
    }), We(D, (b) => {
      if (b && (console.error("[ASR] 语音识别错误:", b), M.value)) {
        const v = document.createElement("div");
        v.className = "msg-line msg-ai error-msg", v.textContent = `语音识别错误: ${b}`, M.value.appendChild(v), M.value.scrollTop = M.value.scrollHeight;
      }
    });
    function fe(b) {
      b.preventDefault();
      const v = H.value, X = b.clientX, ke = b.clientY, Te = B.x, Y = B.y;
      let re = !1;
      function pe(_e) {
        const $e = _e.clientX - X, ut = _e.clientY - ke;
        if (!re && (Math.abs($e) > 5 || Math.abs(ut) > 5) && (re = !0, R.value = !0), re) {
          const $t = Math.min(Math.max(0, Te + $e), window.innerWidth - v.offsetWidth), ft = Math.min(Math.max(0, Y + ut), window.innerHeight - v.offsetHeight);
          B.x = $t, B.y = ft;
        }
      }
      function ve() {
        document.removeEventListener("mousemove", pe), document.removeEventListener("mouseup", ve), setTimeout(() => {
          R.value = !1, re && k();
        }, 10);
      }
      document.addEventListener("mousemove", pe), document.addEventListener("mouseup", ve);
    }
    fr(() => {
      H.value, Et(() => {
        Z(), F();
      });
    });
    function W(b) {
      P(), k(), typeof b == "string" && b.length > 0 ? (window.location.href = b, console.log(`[Navigation] 页面跳转到: ${b}`)) : console.error("[Navigation] 跳转路径无效:", b);
    }
    return (b, v) => (Ue(), Ke("div", {
      ref_key: "containerRef",
      ref: H,
      class: "ai-bubble-container",
      style: lo({ left: B.x + "px", top: B.y + "px" })
    }, [
      Fe("div", {
        class: "floating-ball",
        onMousedown: fe,
        onClick: O
      }, "AI", 32),
      A.value ? (Ue(), Ke("div", Tf, [
        A.value ? (Ue(), Ke("div", {
          key: 0,
          class: "close-btn",
          onClick: J
        }, "×")) : Ht("", !0),
        Fe("div", {
          class: "messages",
          ref_key: "messagesContainerRef",
          ref: M
        }, [
          Ae(i).length === 0 ? (Ue(), Ke("div", Cf, [
            v[3] || (v[3] = Ko(" 有什么可以帮您的吗？", -1)),
            v[4] || (v[4] = Fe("br", null, null, -1)),
            n.value ? (Ue(), Ke("small", Vf, " 💡 当前为朗读开启模式，所有回答都会自动语音播报 ")) : (Ue(), Ke("small", Af, ' 💡 当前为朗读关闭模式，在问题后加上"语音播报"可以听到回答 '))
          ])) : Ht("", !0),
          (Ue(!0), Ke(Je, null, Aa(Ae(i), (X) => (Ue(), Ke("div", {
            key: X.id,
            class: Gt(["msg-line", X.role === "user" ? "msg-user" : "msg-ai"])
          }, [
            X.role === "user" || X.role === "assistant" ? (Ue(), Ke("div", Rf, Ro(X.content), 1)) : Ht("", !0)
          ], 2))), 128)),
          Ae(f) ? (Ue(), Ke("div", Pf, v[5] || (v[5] = [
            Fe("span", null, "思考中...", -1)
          ]))) : Ht("", !0)
        ], 512),
        Fe("div", Mf, [
          Fe("button", {
            onClick: ae,
            class: Gt(["toolbar-btn", { active: n.value }]),
            title: n.value ? "关闭连续语音播报模式（将只在明确要求时播报）" : "开启连续语音播报模式（所有回答都将自动播报）"
          }, [
            Ko(Ro(n.value ? "🔊 朗读开启" : "🔇 朗读关闭") + " ", 1),
            n.value ? (Ue(), Ke("span", $f)) : Ht("", !0)
          ], 10, kf),
          Fe("button", {
            onClick: le,
            class: "toolbar-btn clear-btn",
            title: "清除对话历史"
          }, " 🗑️ 清除 ")
        ]),
        Fe("form", {
          onSubmit: v[2] || (v[2] = fs(
            //@ts-ignore
            (...X) => Ae(a) && Ae(a)(...X),
            ["prevent"]
          )),
          class: "input-area"
        }, [
          ma(Fe("textarea", {
            "onUpdate:modelValue": v[0] || (v[0] = (X) => ue(l) ? l.value = X : null),
            class: "input-text",
            rows: "1",
            placeholder: "请输入...",
            onKeydown: v[1] || (v[1] = cu(fs(
              //@ts-ignore
              (...X) => Ae(a) && Ae(a)(...X),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [su, Ae(l)]
          ]),
          Fe("button", {
            type: "button",
            class: Gt(["btn-voice", { listening: Ae(u) }]),
            onClick: x,
            title: o.value ? "录音中（点击关闭）" : "点击开启持久录音"
          }, "🎤", 10, jf),
          Fe("button", {
            type: "submit",
            class: "btn-send",
            disabled: Ae(f) || !Ae(l).trim()
          }, "➤", 8, Ff)
        ], 32)
      ])) : Ht("", !0)
    ], 4));
  }
}), Uf = ".ai-bubble-container{position:fixed;z-index:99999;font-size:16px}.floating-ball{width:70px;height:70px;border-radius:50%;background:linear-gradient(45deg,#7b64d3,#5a8cf3);color:#fff;font-weight:600;font-size:18px;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px #0000004d;cursor:grab;user-select:none}.floating-ball:active{cursor:grabbing;transform:scale(.95)}.close-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;line-height:24px;background:#0009;color:#fff;border-radius:50%;text-align:center;cursor:pointer;font-size:14px;z-index:10}.chat-panel{position:relative;top:0;left:80px;width:400px;height:520px;background:#fff;border-radius:10px;box-shadow:0 8px 24px #00000026;display:flex;flex-direction:column;overflow:hidden;z-index:99999}.msg-content{white-space:pre-wrap;word-break:break-word;line-height:1.5}.messages{flex:1;padding:8px;overflow-y:auto;background:#f5f5f5}.msg-empty{color:#999;text-align:center;margin-top:40px}.msg-line{margin-bottom:6px;line-height:1.4;word-break:break-word}.msg-user{color:#007bff}.msg-ai{color:#000}.input-area{display:flex;align-items:center;padding:6px;border-top:1px solid #ddd}.input-text{flex:1;resize:none;border:1px solid #ccc;border-radius:999px;padding:6px 16px;font-size:16px;line-height:1.3;background:#fafafa;outline:none;max-height:80px;overflow-y:auto}.btn-voice,.btn-send{width:36px;height:36px;margin-left:8px;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px}.btn-voice{background:transparent;color:#555}.btn-voice.listening{background:#4caf50;color:#fff;animation:pulse 1.2s infinite}.btn-send{background:#007bff;color:#fff}.btn-send:disabled{background:#aaa;cursor:not-allowed}@keyframes pulse{0%{box-shadow:0 0 #4caf50b3}70%{box-shadow:0 0 0 10px #4caf5000}to{box-shadow:0 0 #4caf5000}}.chat-toolbar{padding:4px 8px;background:#f0f0f0;border-top:1px solid #ddd;display:flex;justify-content:space-between;align-items:center}.toolbar-btn{background:#e0e0e0;border:1px solid #ccc;border-radius:12px;padding:6px 12px;font-size:12px;cursor:pointer;transition:all .3s ease;font-weight:500}.toolbar-btn.active{background:#4caf50;color:#fff;border-color:#4caf50;box-shadow:0 2px 4px #4caf504d}.toolbar-btn.clear-btn{background:#ff6b6b;color:#fff;border-color:#ff6b6b;font-size:11px;padding:4px 8px}.toolbar-btn.clear-btn:hover{background:#ff5252;transform:translateY(-1px)}.toolbar-btn:hover{transform:translateY(-1px);box-shadow:0 2px 8px #00000026}.speech-indicator{display:inline-block;width:6px;height:6px;border-radius:50%;background-color:#fff;margin-left:5px;animation:pulse-speech 1.5s infinite}@keyframes pulse-speech{0%{opacity:.3}50%{opacity:1}to{opacity:.3}}", Bf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Kf = /* @__PURE__ */ Bf(Hf, [["styles", [Uf]]]), Wf = /* @__PURE__ */ nu(Kf);
customElements.define("ai-chat-bubble", Wf);
export {
  Wf as AiChatBubbleElement
};
