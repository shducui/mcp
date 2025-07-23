import { getCurrentInstance as gt, ref as j, reactive as ge, onMounted as $e, onUnmounted as bt, watch as ze, isReadonly as _t, toRefs as Et, computed as Ke, unref as L, readonly as Ne, defineComponent as wt, nextTick as It, createElementBlock as N, openBlock as D, createElementVNode as m, createCommentVNode as Q, normalizeStyle as fe, withDirectives as De, Fragment as Z, renderList as pe, toDisplayString as ie, vModelSelect as St, normalizeClass as he, withModifiers as Oe, withKeys as Tt, isRef as Rt, vModelText as kt, defineCustomElement as At } from "vue";
var We = "vercel.ai.error", xt = Symbol.for(We), qe, Ct = class Ge extends Error {
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
    message: r,
    cause: n
  }) {
    super(r), this[qe] = !0, this.name = t, this.cause = n;
  }
  /**
   * Checks if the given error is an AI SDK Error.
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an AI SDK Error, false otherwise.
   */
  static isInstance(t) {
    return Ge.hasMarker(t, We);
  }
  static hasMarker(t, r) {
    const n = Symbol.for(r);
    return t != null && typeof t == "object" && n in t && typeof t[n] == "boolean" && t[n] === !0;
  }
};
qe = xt;
var q = Ct;
function He(e) {
  return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
var Xe = "AI_InvalidArgumentError", Qe = `vercel.ai.error.${Xe}`, Nt = Symbol.for(Qe), Ze, Dt = class extends q {
  constructor({
    message: e,
    cause: t,
    argument: r
  }) {
    super({ name: Xe, message: e, cause: t }), this[Ze] = !0, this.argument = r;
  }
  static isInstance(e) {
    return q.hasMarker(e, Qe);
  }
};
Ze = Nt;
var et = "AI_JSONParseError", tt = `vercel.ai.error.${et}`, Ot = Symbol.for(tt), rt, Le = class extends q {
  constructor({ text: e, cause: t }) {
    super({
      name: et,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${He(t)}`,
      cause: t
    }), this[rt] = !0, this.text = e;
  }
  static isInstance(e) {
    return q.hasMarker(e, tt);
  }
};
rt = Ot;
var nt = "AI_TypeValidationError", at = `vercel.ai.error.${nt}`, Lt = Symbol.for(at), ot, Mt = class be extends q {
  constructor({ value: t, cause: r }) {
    super({
      name: nt,
      message: `Type validation failed: Value: ${JSON.stringify(t)}.
Error message: ${He(r)}`,
      cause: r
    }), this[ot] = !0, this.value = t;
  }
  static isInstance(t) {
    return q.hasMarker(t, at);
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
    cause: r
  }) {
    return be.isInstance(r) && r.value === t ? r : new be({ value: t, cause: r });
  }
};
ot = Lt;
var Me = Mt;
let Pt = (e, t = 21) => (r = t) => {
  let n = "", i = r | 0;
  for (; i--; )
    n += e[Math.random() * e.length | 0];
  return n;
};
function jt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $ = { exports: {} }, Pe;
function Vt() {
  if (Pe) return $.exports;
  Pe = 1;
  const e = typeof Buffer < "u", t = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, r = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function n(f, c, o) {
    o == null && c !== null && typeof c == "object" && (o = c, c = void 0), e && Buffer.isBuffer(f) && (f = f.toString()), f && f.charCodeAt(0) === 65279 && (f = f.slice(1));
    const u = JSON.parse(f, c);
    if (u === null || typeof u != "object")
      return u;
    const d = o && o.protoAction || "error", v = o && o.constructorAction || "error";
    if (d === "ignore" && v === "ignore")
      return u;
    if (d !== "ignore" && v !== "ignore") {
      if (t.test(f) === !1 && r.test(f) === !1)
        return u;
    } else if (d !== "ignore" && v === "ignore") {
      if (t.test(f) === !1)
        return u;
    } else if (r.test(f) === !1)
      return u;
    return i(u, { protoAction: d, constructorAction: v, safe: o && o.safe });
  }
  function i(f, { protoAction: c = "error", constructorAction: o = "error", safe: u } = {}) {
    let d = [f];
    for (; d.length; ) {
      const v = d;
      d = [];
      for (const y of v) {
        if (c !== "ignore" && Object.prototype.hasOwnProperty.call(y, "__proto__")) {
          if (u === !0)
            return null;
          if (c === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete y.__proto__;
        }
        if (o !== "ignore" && Object.prototype.hasOwnProperty.call(y, "constructor") && Object.prototype.hasOwnProperty.call(y.constructor, "prototype")) {
          if (u === !0)
            return null;
          if (o === "error")
            throw new SyntaxError("Object contains forbidden prototype property");
          delete y.constructor;
        }
        for (const w in y) {
          const T = y[w];
          T && typeof T == "object" && d.push(T);
        }
      }
    }
    return f;
  }
  function a(f, c, o) {
    const u = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return n(f, c, o);
    } finally {
      Error.stackTraceLimit = u;
    }
  }
  function h(f, c) {
    const o = Error.stackTraceLimit;
    Error.stackTraceLimit = 0;
    try {
      return n(f, c, { safe: !0 });
    } catch {
      return null;
    } finally {
      Error.stackTraceLimit = o;
    }
  }
  return $.exports = a, $.exports.default = a, $.exports.parse = a, $.exports.safeParse = h, $.exports.scan = i, $.exports;
}
var Ft = Vt();
const Bt = /* @__PURE__ */ jt(Ft);
var Jt = ({
  prefix: e,
  size: t = 16,
  alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: n = "-"
} = {}) => {
  const i = Pt(r, t);
  if (e == null)
    return i;
  if (r.includes(n))
    throw new Dt({
      argument: "separator",
      message: `The separator "${n}" must not be part of the alphabet "${r}".`
    });
  return (a) => `${e}${n}${i(a)}`;
}, Ie = Jt(), _e = Symbol.for("vercel.ai.validator");
function Ut(e) {
  return { [_e]: !0, validate: e };
}
function Yt(e) {
  return typeof e == "object" && e !== null && _e in e && e[_e] === !0 && "validate" in e;
}
function $t(e) {
  return Yt(e) ? e : zt(e);
}
function zt(e) {
  return Ut((t) => {
    const r = e.safeParse(t);
    return r.success ? { success: !0, value: r.data } : { success: !1, error: r.error };
  });
}
function Kt({
  value: e,
  schema: t
}) {
  const r = $t(t);
  try {
    if (r.validate == null)
      return { success: !0, value: e };
    const n = r.validate(e);
    return n.success ? n : {
      success: !1,
      error: Me.wrap({ value: e, cause: n.error })
    };
  } catch (n) {
    return {
      success: !1,
      error: Me.wrap({ value: e, cause: n })
    };
  }
}
function je({
  text: e,
  schema: t
}) {
  try {
    const r = Bt.parse(e);
    if (t == null)
      return { success: !0, value: r, rawValue: r };
    const n = Kt({ value: r, schema: t });
    return n.success ? { ...n, rawValue: r } : n;
  } catch (r) {
    return {
      success: !1,
      error: Le.isInstance(r) ? r : new Le({ text: e, cause: r })
    };
  }
}
new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
var ee = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, te = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, re = {
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
}, ne = {
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
}, ae = {
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
}, Wt = [
  ee,
  te,
  re,
  ne,
  ae
];
ee.code + "", te.code + "", re.code + "", ne.code + "", ae.code + "";
ee.name + "", ee.code, te.name + "", te.code, re.name + "", re.code, ne.name + "", ne.code, ae.name + "", ae.code;
Wt.map((e) => e.code);
function qt({
  promptTokens: e,
  completionTokens: t
}) {
  return {
    promptTokens: e,
    completionTokens: t,
    totalTokens: e + t
  };
}
function Gt(e) {
  const t = ["ROOT"];
  let r = -1, n = null;
  function i(c, o, u) {
    switch (c) {
      case '"': {
        r = o, t.pop(), t.push(u), t.push("INSIDE_STRING");
        break;
      }
      case "f":
      case "t":
      case "n": {
        r = o, n = o, t.pop(), t.push(u), t.push("INSIDE_LITERAL");
        break;
      }
      case "-": {
        t.pop(), t.push(u), t.push("INSIDE_NUMBER");
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
        r = o, t.pop(), t.push(u), t.push("INSIDE_NUMBER");
        break;
      }
      case "{": {
        r = o, t.pop(), t.push(u), t.push("INSIDE_OBJECT_START");
        break;
      }
      case "[": {
        r = o, t.pop(), t.push(u), t.push("INSIDE_ARRAY_START");
        break;
      }
    }
  }
  function a(c, o) {
    switch (c) {
      case ",": {
        t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
        break;
      }
      case "}": {
        r = o, t.pop();
        break;
      }
    }
  }
  function h(c, o) {
    switch (c) {
      case ",": {
        t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
        break;
      }
      case "]": {
        r = o, t.pop();
        break;
      }
    }
  }
  for (let c = 0; c < e.length; c++) {
    const o = e[c];
    switch (t[t.length - 1]) {
      case "ROOT":
        i(o, c, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (o) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
          case "}": {
            r = c, t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        switch (o) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        switch (o) {
          case '"': {
            t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        switch (o) {
          case ":": {
            t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        i(o, c, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        a(o, c);
        break;
      }
      case "INSIDE_STRING": {
        switch (o) {
          case '"': {
            t.pop(), r = c;
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = c;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        switch (o) {
          case "]": {
            r = c, t.pop();
            break;
          }
          default: {
            r = c, i(o, c, "INSIDE_ARRAY_AFTER_VALUE");
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (o) {
          case ",": {
            t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
            break;
          }
          case "]": {
            r = c, t.pop();
            break;
          }
          default: {
            r = c;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        i(o, c, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        t.pop(), r = c;
        break;
      }
      case "INSIDE_NUMBER": {
        switch (o) {
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
            r = c;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && h(o, c), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(o, c);
            break;
          }
          case "}": {
            t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && a(o, c);
            break;
          }
          case "]": {
            t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && h(o, c);
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
        const d = e.substring(n, c + 1);
        !"false".startsWith(d) && !"true".startsWith(d) && !"null".startsWith(d) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? a(o, c) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && h(o, c)) : r = c;
        break;
      }
    }
  }
  let f = e.slice(0, r + 1);
  for (let c = t.length - 1; c >= 0; c--)
    switch (t[c]) {
      case "INSIDE_STRING": {
        f += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        f += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        f += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const u = e.substring(n, e.length);
        "true".startsWith(u) ? f += "true".slice(u.length) : "false".startsWith(u) ? f += "false".slice(u.length) : "null".startsWith(u) && (f += "null".slice(u.length));
      }
    }
  return f;
}
function Ht(e) {
  if (e === void 0)
    return { value: void 0, state: "undefined-input" };
  let t = je({ text: e });
  return t.success ? { value: t.value, state: "successful-parse" } : (t = je({ text: Gt(e) }), t.success ? { value: t.value, state: "repaired-parse" } : { value: void 0, state: "failed-parse" });
}
var Xt = {
  code: "0",
  name: "text",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"text" parts expect a string value.');
    return { type: "text", value: e };
  }
}, Qt = {
  code: "2",
  name: "data",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"data" parts expect an array value.');
    return { type: "data", value: e };
  }
}, Zt = {
  code: "3",
  name: "error",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"error" parts expect a string value.');
    return { type: "error", value: e };
  }
}, er = {
  code: "8",
  name: "message_annotations",
  parse: (e) => {
    if (!Array.isArray(e))
      throw new Error('"message_annotations" parts expect an array value.');
    return { type: "message_annotations", value: e };
  }
}, tr = {
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
}, rr = {
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
}, nr = {
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
}, ar = {
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
}, or = {
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
}, sr = {
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
}, ir = {
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
}, lr = {
  code: "g",
  name: "reasoning",
  parse: (e) => {
    if (typeof e != "string")
      throw new Error('"reasoning" parts expect a string value.');
    return { type: "reasoning", value: e };
  }
}, cr = {
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
}, ur = {
  code: "i",
  name: "redacted_reasoning",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string")
      throw new Error(
        '"redacted_reasoning" parts expect an object with a "data" property.'
      );
    return { type: "redacted_reasoning", value: { data: e.data } };
  }
}, dr = {
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
}, fr = {
  code: "k",
  name: "file",
  parse: (e) => {
    if (e == null || typeof e != "object" || !("data" in e) || typeof e.data != "string" || !("mimeType" in e) || typeof e.mimeType != "string")
      throw new Error(
        '"file" parts expect an object with a "data" and "mimeType" property.'
      );
    return { type: "file", value: e };
  }
}, Se = [
  Xt,
  Qt,
  Zt,
  er,
  tr,
  rr,
  nr,
  ar,
  or,
  sr,
  ir,
  lr,
  cr,
  ur,
  dr,
  fr
], pr = Object.fromEntries(
  Se.map((e) => [e.code, e])
);
Object.fromEntries(
  Se.map((e) => [e.name, e.code])
);
var hr = Se.map((e) => e.code), yr = (e) => {
  const t = e.indexOf(":");
  if (t === -1)
    throw new Error("Failed to parse stream string. No separator found.");
  const r = e.slice(0, t);
  if (!hr.includes(r))
    throw new Error(`Failed to parse stream string. Invalid code ${r}.`);
  const n = r, i = e.slice(t + 1), a = JSON.parse(i);
  return pr[n].parse(a);
}, vr = 10;
function mr(e, t) {
  const r = new Uint8Array(t);
  let n = 0;
  for (const i of e)
    r.set(i, n), n += i.length;
  return e.length = 0, r;
}
async function gr({
  stream: e,
  onTextPart: t,
  onReasoningPart: r,
  onReasoningSignaturePart: n,
  onRedactedReasoningPart: i,
  onSourcePart: a,
  onFilePart: h,
  onDataPart: f,
  onErrorPart: c,
  onToolCallStreamingStartPart: o,
  onToolCallDeltaPart: u,
  onToolCallPart: d,
  onToolResultPart: v,
  onMessageAnnotationsPart: y,
  onFinishMessagePart: w,
  onFinishStepPart: T,
  onStartStepPart: k
}) {
  const A = e.getReader(), I = new TextDecoder(), g = [];
  let S = 0;
  for (; ; ) {
    const { value: b } = await A.read();
    if (b && (g.push(b), S += b.length, b[b.length - 1] !== vr))
      continue;
    if (g.length === 0)
      break;
    const l = mr(g, S);
    S = 0;
    const s = I.decode(l, { stream: !0 }).split(`
`).filter((p) => p !== "").map(yr);
    for (const { type: p, value: _ } of s)
      switch (p) {
        case "text":
          await t?.(_);
          break;
        case "reasoning":
          await r?.(_);
          break;
        case "reasoning_signature":
          await n?.(_);
          break;
        case "redacted_reasoning":
          await i?.(_);
          break;
        case "file":
          await h?.(_);
          break;
        case "source":
          await a?.(_);
          break;
        case "data":
          await f?.(_);
          break;
        case "error":
          await c?.(_);
          break;
        case "message_annotations":
          await y?.(_);
          break;
        case "tool_call_streaming_start":
          await o?.(_);
          break;
        case "tool_call_delta":
          await u?.(_);
          break;
        case "tool_call":
          await d?.(_);
          break;
        case "tool_result":
          await v?.(_);
          break;
        case "finish_message":
          await w?.(_);
          break;
        case "finish_step":
          await T?.(_);
          break;
        case "start_step":
          await k?.(_);
          break;
        default: {
          const R = p;
          throw new Error(`Unknown stream part type: ${R}`);
        }
      }
  }
}
async function br({
  stream: e,
  update: t,
  onToolCall: r,
  onFinish: n,
  generateId: i = Ie,
  getCurrentDate: a = () => /* @__PURE__ */ new Date(),
  lastMessage: h
}) {
  var f, c;
  const o = h?.role === "assistant";
  let u = o ? 1 + // find max step in existing tool invocations:
  ((c = (f = h.toolInvocations) == null ? void 0 : f.reduce((l, s) => {
    var p;
    return Math.max(l, (p = s.step) != null ? p : 0);
  }, 0)) != null ? c : 0) : 0;
  const d = o ? structuredClone(h) : {
    id: i(),
    createdAt: a(),
    role: "assistant",
    content: "",
    parts: []
  };
  let v, y, w;
  function T(l, s) {
    const p = d.parts.find(
      (_) => _.type === "tool-invocation" && _.toolInvocation.toolCallId === l
    );
    p != null ? p.toolInvocation = s : d.parts.push({
      type: "tool-invocation",
      toolInvocation: s
    });
  }
  const k = [];
  let A = o ? h?.annotations : void 0;
  const I = {};
  let g = {
    completionTokens: NaN,
    promptTokens: NaN,
    totalTokens: NaN
  }, S = "unknown";
  function b() {
    const l = [...k];
    A?.length && (d.annotations = A);
    const s = {
      // deep copy the message to ensure that deep changes (msg attachments) are updated
      // with SolidJS. SolidJS uses referential integration of sub-objects to detect changes.
      ...structuredClone(d),
      // add a revision id to ensure that the message is updated with SWR. SWR uses a
      // hashing approach by default to detect changes, but it only works for shallow
      // changes. This is why we need to add a revision id to ensure that the message
      // is updated with SWR (without it, the changes get stuck in SWR and are not
      // forwarded to rendering):
      revisionId: i()
    };
    t({
      message: s,
      data: l,
      replaceLastMessage: o
    });
  }
  await gr({
    stream: e,
    onTextPart(l) {
      v == null ? (v = {
        type: "text",
        text: l
      }, d.parts.push(v)) : v.text += l, d.content += l, b();
    },
    onReasoningPart(l) {
      var s;
      w == null ? (w = { type: "text", text: l }, y?.details.push(w)) : w.text += l, y == null ? (y = {
        type: "reasoning",
        reasoning: l,
        details: [w]
      }, d.parts.push(y)) : y.reasoning += l, d.reasoning = ((s = d.reasoning) != null ? s : "") + l, b();
    },
    onReasoningSignaturePart(l) {
      w != null && (w.signature = l.signature);
    },
    onRedactedReasoningPart(l) {
      y == null && (y = {
        type: "reasoning",
        reasoning: "",
        details: []
      }, d.parts.push(y)), y.details.push({
        type: "redacted",
        data: l.data
      }), w = void 0, b();
    },
    onFilePart(l) {
      d.parts.push({
        type: "file",
        mimeType: l.mimeType,
        data: l.data
      }), b();
    },
    onSourcePart(l) {
      d.parts.push({
        type: "source",
        source: l
      }), b();
    },
    onToolCallStreamingStartPart(l) {
      d.toolInvocations == null && (d.toolInvocations = []), I[l.toolCallId] = {
        text: "",
        step: u,
        toolName: l.toolName,
        index: d.toolInvocations.length
      };
      const s = {
        state: "partial-call",
        step: u,
        toolCallId: l.toolCallId,
        toolName: l.toolName,
        args: void 0
      };
      d.toolInvocations.push(s), T(l.toolCallId, s), b();
    },
    onToolCallDeltaPart(l) {
      const s = I[l.toolCallId];
      s.text += l.argsTextDelta;
      const { value: p } = Ht(s.text), _ = {
        state: "partial-call",
        step: s.step,
        toolCallId: l.toolCallId,
        toolName: s.toolName,
        args: p
      };
      d.toolInvocations[s.index] = _, T(l.toolCallId, _), b();
    },
    async onToolCallPart(l) {
      const s = {
        state: "call",
        step: u,
        ...l
      };
      if (I[l.toolCallId] != null ? d.toolInvocations[I[l.toolCallId].index] = s : (d.toolInvocations == null && (d.toolInvocations = []), d.toolInvocations.push(s)), T(l.toolCallId, s), b(), r) {
        const p = await r({ toolCall: l });
        if (p != null) {
          const _ = {
            state: "result",
            step: u,
            ...l,
            result: p
          };
          d.toolInvocations[d.toolInvocations.length - 1] = _, T(l.toolCallId, _), b();
        }
      }
    },
    onToolResultPart(l) {
      const s = d.toolInvocations;
      if (s == null)
        throw new Error("tool_result must be preceded by a tool_call");
      const p = s.findIndex(
        (R) => R.toolCallId === l.toolCallId
      );
      if (p === -1)
        throw new Error(
          "tool_result must be preceded by a tool_call with the same toolCallId"
        );
      const _ = {
        ...s[p],
        state: "result",
        ...l
      };
      s[p] = _, T(l.toolCallId, _), b();
    },
    onDataPart(l) {
      k.push(...l), b();
    },
    onMessageAnnotationsPart(l) {
      A == null ? A = [...l] : A.push(...l), b();
    },
    onFinishStepPart(l) {
      u += 1, v = l.isContinued ? v : void 0, y = void 0, w = void 0;
    },
    onStartStepPart(l) {
      o || (d.id = l.messageId), d.parts.push({ type: "step-start" }), b();
    },
    onFinishMessagePart(l) {
      S = l.finishReason, l.usage != null && (g = qt(l.usage));
    },
    onErrorPart(l) {
      throw new Error(l);
    }
  }), n?.({ message: d, finishReason: S, usage: g });
}
async function _r({
  stream: e,
  onTextPart: t
}) {
  const r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (; ; ) {
    const { done: n, value: i } = await r.read();
    if (n)
      break;
    await t(i);
  }
}
async function Er({
  stream: e,
  update: t,
  onFinish: r,
  getCurrentDate: n = () => /* @__PURE__ */ new Date(),
  generateId: i = Ie
}) {
  const a = { type: "text", text: "" }, h = {
    id: i(),
    createdAt: n(),
    role: "assistant",
    content: "",
    parts: [a]
  };
  await _r({
    stream: e,
    onTextPart: (f) => {
      h.content += f, a.text += f, t({
        message: { ...h },
        data: [],
        replaceLastMessage: !1
      });
    }
  }), r?.(h, {
    usage: { completionTokens: NaN, promptTokens: NaN, totalTokens: NaN },
    finishReason: "unknown"
  });
}
var wr = () => fetch;
async function Ir({
  api: e,
  body: t,
  streamProtocol: r = "data",
  credentials: n,
  headers: i,
  abortController: a,
  restoreMessagesOnFailure: h,
  onResponse: f,
  onUpdate: c,
  onFinish: o,
  onToolCall: u,
  generateId: d,
  fetch: v = wr(),
  lastMessage: y,
  requestType: w = "generate"
}) {
  var T, k, A;
  const g = await (w === "resume" ? v(`${e}?chatId=${t.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...i
    },
    signal: (T = a?.()) == null ? void 0 : T.signal,
    credentials: n
  }) : v(e, {
    method: "POST",
    body: JSON.stringify(t),
    headers: {
      "Content-Type": "application/json",
      ...i
    },
    signal: (k = a?.()) == null ? void 0 : k.signal,
    credentials: n
  })).catch((S) => {
    throw h(), S;
  });
  if (f)
    try {
      await f(g);
    } catch (S) {
      throw S;
    }
  if (!g.ok)
    throw h(), new Error(
      (A = await g.text()) != null ? A : "Failed to fetch the chat response."
    );
  if (!g.body)
    throw new Error("The response body is empty.");
  switch (r) {
    case "text": {
      await Er({
        stream: g.body,
        update: c,
        onFinish: o,
        generateId: d
      });
      return;
    }
    case "data": {
      await br({
        stream: g.body,
        update: c,
        lastMessage: y,
        onToolCall: u,
        onFinish({ message: S, finishReason: b, usage: l }) {
          o && S != null && o(S, { usage: l, finishReason: b });
        },
        generateId: d
      });
      return;
    }
    default: {
      const S = r;
      throw new Error(`Unknown stream protocol: ${S}`);
    }
  }
}
function Ee(e) {
  return e?.reduce((t, r) => {
    var n;
    return Math.max(t, (n = r.step) != null ? n : 0);
  }, 0);
}
function st(e) {
  var t;
  return (t = e.parts) != null ? t : [
    ...e.toolInvocations ? e.toolInvocations.map((r) => ({
      type: "tool-invocation",
      toolInvocation: r
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
function le(e) {
  return e.map((t) => ({
    ...t,
    parts: st(t)
  }));
}
async function Ve(e) {
  if (!e)
    return [];
  if (globalThis.FileList && e instanceof globalThis.FileList)
    return Promise.all(
      Array.from(e).map(async (t) => {
        const { name: r, type: n } = t, i = await new Promise((a, h) => {
          const f = new FileReader();
          f.onload = (c) => {
            var o;
            a((o = c.target) == null ? void 0 : o.result);
          }, f.onerror = (c) => h(c), f.readAsDataURL(t);
        });
        return {
          name: r,
          contentType: n,
          url: i
        };
      })
    );
  if (Array.isArray(e))
    return e;
  throw new Error("Invalid attachments type");
}
function Sr({
  originalMaxToolInvocationStep: e,
  originalMessageCount: t,
  maxSteps: r,
  messages: n
}) {
  var i;
  const a = n[n.length - 1];
  return (
    // check if the feature is enabled:
    r > 1 && // ensure there is a last message:
    a != null && // ensure we actually have new steps (to prevent infinite loops in case of errors):
    (n.length > t || Ee(a.toolInvocations) !== e) && // check that next step is possible:
    it(a) && // limit the number of automatic steps:
    ((i = Ee(a.toolInvocations)) != null ? i : 0) < r
  );
}
function it(e) {
  if (e.role !== "assistant")
    return !1;
  const t = e.parts.reduce((n, i, a) => i.type === "step-start" ? a : n, -1), r = e.parts.slice(t + 1).filter((n) => n.type === "tool-invocation");
  return r.length > 0 && r.every((n) => "result" in n.toolInvocation);
}
function Tr({
  messages: e,
  toolCallId: t,
  toolResult: r
}) {
  var n;
  const i = e[e.length - 1], a = i.parts.find(
    (f) => f.type === "tool-invocation" && f.toolInvocation.toolCallId === t
  );
  if (a == null)
    return;
  const h = {
    ...a.toolInvocation,
    state: "result",
    result: r
  };
  a.toolInvocation = h, i.toolInvocations = (n = i.toolInvocations) == null ? void 0 : n.map(
    (f) => f.toolCallId === t ? h : f
  );
}
var ye = /* @__PURE__ */ new WeakMap(), Fe = 0;
function Rr(e) {
  if (!e.length)
    return "";
  for (var t = "arg", r = 0; r < e.length; ++r) {
    var n = void 0;
    e[r] === null || typeof e[r] != "object" && typeof e[r] != "function" ? typeof e[r] == "string" ? n = '"' + e[r] + '"' : n = String(e[r]) : ye.has(e[r]) ? n = ye.get(e[r]) : (n = Fe, ye.set(e[r], Fe++)), t += "@" + n;
  }
  return t;
}
function kr(e) {
  if (typeof e == "function")
    try {
      e = e();
    } catch {
      e = "";
    }
  return Array.isArray(e) ? e = Rr(e) : e = String(e || ""), e;
}
var Te = (
  /** @class */
  function() {
    function e(t) {
      t === void 0 && (t = 0), this.items = /* @__PURE__ */ new Map(), this.ttl = t;
    }
    return e.prototype.serializeKey = function(t) {
      return kr(t);
    }, e.prototype.get = function(t) {
      var r = this.serializeKey(t);
      return this.items.get(r);
    }, e.prototype.set = function(t, r, n) {
      var i = this.serializeKey(t), a = n || this.ttl, h = Date.now(), f = {
        data: r,
        createdAt: h,
        expiresAt: a ? h + a : 1 / 0
      };
      this.dispatchExpire(a, f, i), this.items.set(i, f);
    }, e.prototype.dispatchExpire = function(t, r, n) {
      var i = this;
      t && setTimeout(function() {
        var a = Date.now(), h = a >= r.expiresAt;
        h && i.delete(n);
      }, t);
    }, e.prototype.delete = function(t) {
      this.items.delete(t);
    }, e;
  }()
);
function Ar() {
  return typeof navigator.onLine < "u" ? navigator.onLine : !0;
}
function xr() {
  return typeof document < "u" && typeof document.visibilityState < "u" ? document.visibilityState !== "hidden" : !0;
}
var Cr = function(e) {
  return fetch(e).then(function(t) {
    return t.json();
  });
};
const ve = {
  isOnline: Ar,
  isDocumentVisible: xr,
  fetcher: Cr
};
var B = function() {
  return B = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, B.apply(this, arguments);
}, K = function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(h) {
      h(a);
    });
  }
  return new (r || (r = Promise))(function(a, h) {
    function f(u) {
      try {
        o(n.next(u));
      } catch (d) {
        h(d);
      }
    }
    function c(u) {
      try {
        o(n.throw(u));
      } catch (d) {
        h(d);
      }
    }
    function o(u) {
      u.done ? a(u.value) : i(u.value).then(f, c);
    }
    o((n = n.apply(e, t || [])).next());
  });
}, W = function(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, h;
  return h = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (h[Symbol.iterator] = function() {
    return this;
  }), h;
  function f(o) {
    return function(u) {
      return c([o, u]);
    };
  }
  function c(o) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (n = 1, i && (a = o[0] & 2 ? i.return : o[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, o[1])).done) return a;
      switch (i = 0, a && (o = [o[0] & 2, a.value]), o[0]) {
        case 0:
        case 1:
          a = o;
          break;
        case 4:
          return r.label++, { value: o[1], done: !1 };
        case 5:
          r.label++, i = o[1], o = [0];
          continue;
        case 7:
          o = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (o[0] === 6 || o[0] === 2)) {
            r = 0;
            continue;
          }
          if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
            r.label = o[1];
            break;
          }
          if (o[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = o;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(o);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      o = t.call(e, r);
    } catch (u) {
      o = [6, u], i = 0;
    } finally {
      n = a = 0;
    }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}, Nr = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), i, a = [], h;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (f) {
    h = { error: f };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (h) throw h.error;
    }
  }
  return a;
}, Dr = function(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}, lt = new Te(), ce = new Te(), me = new Te(), ct = {
  cache: lt,
  refreshInterval: 0,
  ttl: 0,
  serverTTL: 1e3,
  dedupingInterval: 2e3,
  revalidateOnFocus: !0,
  revalidateDebounce: 0,
  shouldRetryOnError: !0,
  errorRetryInterval: 5e3,
  errorRetryCount: 5,
  fetcher: ve.fetcher,
  isOnline: ve.isOnline,
  isDocumentVisible: ve.isDocumentVisible
};
function Or(e, t, r) {
  var n = ce.get(e);
  if (n)
    n.data.push(t);
  else {
    var i = 5e3;
    ce.set(e, [t], r > 0 ? r + i : r);
  }
}
function Lr(e, t, r) {
  if (r.isDocumentVisible() && !(r.errorRetryCount !== void 0 && t > r.errorRetryCount)) {
    var n = Math.min(t || 0, r.errorRetryCount), i = n * r.errorRetryInterval;
    setTimeout(function() {
      e(null, { errorRetryCount: n + 1, shouldRetryOnError: !0 });
    }, i);
  }
}
var Be = function(e, t, r, n) {
  return r === void 0 && (r = lt), n === void 0 && (n = ct.ttl), K(void 0, void 0, void 0, function() {
    var i, a, h, f, c, o, u;
    return W(this, function(d) {
      switch (d.label) {
        case 0:
          if (!Mr(t)) return [3, 5];
          d.label = 1;
        case 1:
          return d.trys.push([1, 3, , 4]), [4, t];
        case 2:
          return i = d.sent(), [3, 4];
        case 3:
          return f = d.sent(), a = f, [3, 4];
        case 4:
          return [3, 6];
        case 5:
          i = t, d.label = 6;
        case 6:
          if (h = !1, c = { data: i, error: a, isValidating: h }, typeof i < "u")
            try {
              r.set(e, c, n);
            } catch (v) {
              console.error("swrv(mutate): failed to set cache", v);
            }
          return o = ce.get(e), o && o.data.length && (u = o.data.filter(function(v) {
            return v.key === e;
          }), u.forEach(function(v, y) {
            typeof c.data < "u" && (v.data = c.data), v.error = c.error, v.isValidating = c.isValidating, v.isLoading = c.isValidating;
            var w = y === u.length - 1;
            w || delete u[y];
          }), u = u.filter(Boolean)), [2, c];
      }
    });
  });
};
function Je() {
  for (var e = this, t = [], r = 0; r < arguments.length; r++)
    t[r] = arguments[r];
  var n, i, a = B({}, ct), h = !1, f = !1, c = gt(), o = c?.proxy || c;
  if (!o)
    return console.error("Could not get current instance, check to make sure that `useSwrv` is declared in the top level of the setup function."), null;
  var u = o?.$isServer || !1;
  t.length >= 1 && (n = t[0]), t.length >= 2 && (i = t[1]), t.length > 2 && (a = B(B({}, a), t[2]));
  var d = u ? a.serverTTL : a.ttl, v = typeof n == "function" ? n : j(n);
  typeof i > "u" && (i = a.fetcher);
  var y = null;
  y || (y = ge({
    data: void 0,
    error: void 0,
    isValidating: !0,
    isLoading: !0,
    key: null
  }));
  var w = function(I, g) {
    return K(e, void 0, void 0, function() {
      var S, b, l, s, p, _, R, J = this;
      return W(this, function(M) {
        switch (M.label) {
          case 0:
            return S = y.data === void 0, b = v.value, b ? (l = a.cache.get(b), s = l && l.data, y.isValidating = !0, y.isLoading = !s, s && (y.data = s.data, y.error = s.error), p = I || i, !p || !a.isDocumentVisible() && !S || g?.forceRevalidate !== void 0 && !g?.forceRevalidate ? (y.isValidating = !1, y.isLoading = !1, [
              2
              /*return*/
            ]) : l && (_ = !!(Date.now() - l.createdAt >= a.dedupingInterval || g?.forceRevalidate), !_) ? (y.isValidating = !1, y.isLoading = !1, [
              2
              /*return*/
            ]) : (R = function() {
              return K(J, void 0, void 0, function() {
                var x, P, G, oe;
                return W(this, function(z) {
                  switch (z.label) {
                    case 0:
                      return x = me.get(b), x ? [3, 2] : (P = Array.isArray(b) ? b : [b], G = p.apply(void 0, Dr([], Nr(P), !1)), me.set(b, G, a.dedupingInterval), [4, Be(b, G, a.cache, d)]);
                    case 1:
                      return z.sent(), [3, 4];
                    case 2:
                      return [4, Be(b, x.data, a.cache, d)];
                    case 3:
                      z.sent(), z.label = 4;
                    case 4:
                      return y.isValidating = !1, y.isLoading = !1, me.delete(b), y.error !== void 0 && (oe = !h && a.shouldRetryOnError && (g ? g.shouldRetryOnError : !0), oe && Lr(w, g ? g.errorRetryCount : 1, a)), [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, s && a.revalidateDebounce ? (setTimeout(function() {
              return K(J, void 0, void 0, function() {
                return W(this, function(x) {
                  switch (x.label) {
                    case 0:
                      return h ? [3, 2] : [4, R()];
                    case 1:
                      x.sent(), x.label = 2;
                    case 2:
                      return [
                        2
                        /*return*/
                      ];
                  }
                });
              });
            }, a.revalidateDebounce), [3, 3]) : [3, 1])) : [
              2
              /*return*/
            ];
          case 1:
            return [4, R()];
          case 2:
            M.sent(), M.label = 3;
          case 3:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, T = function() {
    return K(e, void 0, void 0, function() {
      return W(this, function(I) {
        return [2, w(null, { shouldRetryOnError: !1 })];
      });
    });
  }, k = null;
  $e(function() {
    var I = function() {
      return K(e, void 0, void 0, function() {
        return W(this, function(g) {
          switch (g.label) {
            case 0:
              return !y.error && a.isOnline() ? [4, w()] : [3, 2];
            case 1:
              return g.sent(), [3, 3];
            case 2:
              k && clearTimeout(k), g.label = 3;
            case 3:
              return a.refreshInterval && !h && (k = setTimeout(I, a.refreshInterval)), [
                2
                /*return*/
              ];
          }
        });
      });
    };
    a.refreshInterval && (k = setTimeout(I, a.refreshInterval)), a.revalidateOnFocus && (document.addEventListener("visibilitychange", T, !1), window.addEventListener("focus", T, !1));
  }), bt(function() {
    h = !0, k && clearTimeout(k), a.revalidateOnFocus && (document.removeEventListener("visibilitychange", T, !1), window.removeEventListener("focus", T, !1));
    var I = ce.get(v.value);
    I && (I.data = I.data.filter(function(g) {
      return g !== y;
    }));
  });
  try {
    ze(v, function(I) {
      _t(v) || (v.value = I), y.key = I, y.isValidating = !!I, Or(v.value, y, d), !u && !f && v.value && w(), f = !1;
    }, {
      immediate: !0
    });
  } catch {
  }
  var A = B(B({}, Et(y)), { mutate: function(I, g) {
    return w(I, B(B({}, g), { forceRevalidate: !0 }));
  } });
  return A;
}
function Mr(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Pr = Je.default || Je, Ue = {}, Ye = {};
function jr({
  api: e = "/api/chat",
  id: t,
  initialMessages: r = [],
  initialInput: n = "",
  sendExtraMessageFields: i,
  streamProtocol: a = "data",
  onResponse: h,
  onFinish: f,
  onError: c,
  credentials: o,
  headers: u,
  body: d,
  generateId: v = Ie,
  onToolCall: y,
  fetch: w,
  keepLastMessageOnError: T = !0,
  maxSteps: k = 1,
  experimental_prepareRequestBody: A
} = {
  maxSteps: 1
}) {
  var I, g;
  const S = t ?? v(), b = `${e}|${S}`, { data: l, mutate: s } = Pr(
    b,
    () => {
      var E;
      return (E = Ue[b]) != null ? E : le(r);
    }
  ), p = (I = Ye[S]) != null ? I : Ye[S] = j(
    "ready"
  );
  (g = l.value) != null || (l.value = le(r));
  const _ = (E) => (Ue[b] = E, s()), R = l, J = j(void 0), M = j(void 0);
  let x = null;
  async function P(E, { data: C, headers: O, body: V } = {}) {
    var U, H, Re;
    J.value = void 0, p.value = "submitted";
    const ht = R.value.length, yt = Ee(
      (U = R.value[R.value.length - 1]) == null ? void 0 : U.toolInvocations
    );
    try {
      x = new AbortController();
      const Y = le(E), F = Y;
      _(F);
      const vt = (H = M.value) != null ? H : [], mt = i ? F : F.map(
        ({
          role: de,
          content: X,
          experimental_attachments: se,
          data: ke,
          annotations: Ae,
          toolInvocations: xe,
          parts: Ce
        }) => ({
          role: de,
          content: X,
          ...se !== void 0 && {
            experimental_attachments: se
          },
          ...ke !== void 0 && { data: ke },
          ...Ae !== void 0 && { annotations: Ae },
          ...xe !== void 0 && { toolInvocations: xe },
          ...Ce !== void 0 && { parts: Ce }
        })
      );
      await Ir({
        api: e,
        body: (Re = A?.({
          id: S,
          messages: F,
          requestData: C,
          requestBody: V
        })) != null ? Re : {
          id: S,
          messages: mt,
          data: C,
          ...L(d),
          // Use unref to unwrap the ref value
          ...V
        },
        streamProtocol: a,
        headers: {
          ...u,
          ...O
        },
        abortController: () => x,
        credentials: o,
        onResponse: h,
        onUpdate({ message: de, data: X, replaceLastMessage: se }) {
          p.value = "streaming", _([
            ...se ? F.slice(0, F.length - 1) : F,
            de
          ]), X?.length && (M.value = [...vt, ...X]);
        },
        onFinish: f,
        restoreMessagesOnFailure() {
          T || _(Y);
        },
        generateId: v,
        onToolCall: y,
        fetch: w,
        // enabled use of structured clone in processChatResponse:
        lastMessage: we(F[F.length - 1])
      }), p.value = "ready";
    } catch (Y) {
      if (Y.name === "AbortError")
        return x = null, p.value = "ready", null;
      c && Y instanceof Error && c(Y), J.value = Y, p.value = "error";
    } finally {
      x = null;
    }
    Sr({
      originalMaxToolInvocationStep: yt,
      originalMessageCount: ht,
      maxSteps: k,
      messages: R.value
    }) && await P(R.value);
  }
  const G = async (E, C) => {
    var O, V, U;
    const H = await Ve(
      (O = C?.experimental_attachments) != null ? O : E.experimental_attachments
    );
    return P(
      R.value.concat({
        ...E,
        id: (V = E.id) != null ? V : v(),
        createdAt: (U = E.createdAt) != null ? U : /* @__PURE__ */ new Date(),
        experimental_attachments: H.length > 0 ? H : void 0,
        parts: st(E)
      }),
      C
    );
  }, oe = async (E) => {
    const C = R.value;
    return C.length === 0 ? null : C[C.length - 1].role === "assistant" ? P(C.slice(0, -1), E) : P(C, E);
  }, z = () => {
    x && (x.abort(), x = null);
  }, ut = (E) => {
    typeof E == "function" && (E = E(R.value)), _(le(E));
  }, dt = (E) => {
    typeof E == "function" && (E = E(M.value)), M.value = E;
  }, ue = j(n), ft = async (E, C = {}) => {
    var O;
    (O = E?.preventDefault) == null || O.call(E);
    const V = ue.value;
    if (!V && !C.allowEmptySubmit)
      return;
    const U = await Ve(
      C.experimental_attachments
    );
    P(
      R.value.concat({
        id: v(),
        createdAt: /* @__PURE__ */ new Date(),
        content: V,
        role: "user",
        experimental_attachments: U.length > 0 ? U : void 0,
        parts: [{ type: "text", text: V }]
      }),
      C
    ), ue.value = "";
  }, pt = ({
    toolCallId: E,
    result: C
  }) => {
    const O = R.value;
    if (Tr({
      messages: O,
      toolCallId: E,
      toolResult: C
    }), _(O), p.value === "submitted" || p.value === "streaming")
      return;
    const V = O[O.length - 1];
    it(V) && P(O);
  };
  return {
    id: S,
    messages: R,
    append: G,
    error: J,
    reload: oe,
    stop: z,
    setMessages: ut,
    input: ue,
    handleSubmit: ft,
    isLoading: Ke(
      () => p.value === "submitted" || p.value === "streaming"
    ),
    status: p,
    data: M,
    setData: dt,
    addToolResult: pt
  };
}
function we(e) {
  if (Array.isArray(e))
    return [...e.map(we)];
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const [r, n] of Object.entries(e))
      t[r] = we(n);
    return t;
  } else
    return e;
}
function Vr(e) {
  const t = j(!1), r = j("");
  let n = null, i = [];
  const a = async () => {
    if (!t.value)
      try {
        const c = await navigator.mediaDevices.getUserMedia({ audio: !0 });
        n = new MediaRecorder(c), i = [], n.ondataavailable = (o) => {
          i.push(o.data);
        }, n.onstop = async () => {
          const o = new Blob(i, { type: n?.mimeType });
          await f(o), c.getTracks().forEach((u) => u.stop());
        }, n.start(), t.value = !0, r.value = "";
      } catch (c) {
        r.value = `启动录音失败: ${c.message}`;
      }
  }, h = () => {
    !t.value || !n || (n.stop(), t.value = !1);
  }, f = async (c) => {
    const o = new FormData();
    o.append("audio", c, "recording.webm");
    try {
      const u = await fetch("/api/transcribe", {
        method: "POST",
        body: o
      });
      if (!u.ok) throw new Error("转录请求失败");
      const d = await u.json();
      d.transcript && e(d.transcript);
    } catch (u) {
      r.value = `上传音频失败: ${u.message}`;
    }
  };
  return {
    isRecording: Ne(t),
    error: Ne(r),
    start: a,
    stop: h
  };
}
const Fr = { class: "ai-bubble-container" }, Br = { class: "toolbar" }, Jr = ["value"], Ur = { class: "messages-area" }, Yr = { class: "message-bubble ai-bubble" }, $r = ["src"], zr = {
  key: 1,
  class: "text-content"
}, Kr = { class: "message-bubble user-bubble" }, Wr = { class: "text-content" }, qr = {
  key: 0,
  class: "message-wrapper"
}, Gr = { class: "message-row" }, Hr = { class: "message-bubble ai-bubble" }, Xr = {
  key: 0,
  class: "dice-animation"
}, Qr = { key: 1 }, Zr = ["disabled"], en = { class: "modal-content" }, tn = /* @__PURE__ */ wt({
  __name: "AiChatBubble",
  props: {
    apiUrl: {}
  },
  setup(e) {
    const t = e, { messages: r, input: n, handleSubmit: i, isLoading: a } = jr({ api: t.apiUrl }), { isRecording: h, start: f, stop: c } = Vr((l) => {
      const s = l.trim();
      if (["发送", "提交", "发出"].includes(s)) {
        i();
        return;
      }
      if (["清空", "清除", "删除"].includes(s)) {
        n.value = "";
        return;
      }
      if (["打开日志", "显示日志", "日志"].includes(s)) {
        u.value = !0;
        return;
      }
      if (["关闭", "隐藏"].includes(s)) {
        u.value = !1, d.value = !1;
        return;
      }
      if (["打开窗口", "备注", "语音库"].includes(s)) {
        d.value = !0;
        return;
      }
      n.value = s;
    }), o = j(!1), u = j(!1), d = j(!1), v = ge({ x: 600, y: 80 }), y = ge({ x: 600, y: 200 }), w = j("#ffffff"), T = [
      { name: "白色", value: "#ffffff" },
      { name: "浅灰", value: "#f7f7f7" },
      { name: "青色", value: "#e0f7fa" },
      { name: "橙色", value: "#ffe0b2" },
      { name: "粉色", value: "#fce4ec" },
      { name: "绿色", value: "#e8f5e9" },
      { name: "蓝色", value: "#e3f2fd" },
      { name: "紫色", value: "#f3e5f5" }
    ];
    function k() {
      o.value = !o.value, o.value || (u.value = !1, d.value = !1);
    }
    const A = j(null);
    function I(l) {
      return l.trim().startsWith("<audio");
    }
    function g(l) {
      const s = l.match(/src="([^"]+)"/);
      return s ? s[1] : null;
    }
    const S = Ke(() => {
      if (!a.value) return !1;
      const l = [...r.value].reverse().find((s) => s.role === "user");
      return !!(l && /摇骰子|摇色子|掷骰子/.test(l.content));
    });
    ze(r, async (l) => {
      const s = l[l.length - 1];
      if (s?.role === "assistant" && I(s.content)) {
        if (!g(s.content)) return;
        await It(), A.value?.play().catch(() => {
          console.warn("Audio autoplay was prevented by the browser.");
        });
      }
    }, { deep: !0 });
    function b(l, s) {
      s.preventDefault();
      const p = s.clientX, _ = s.clientY, R = l.x, J = l.y;
      function M(P) {
        l.x = R + (P.clientX - p), l.y = J + (P.clientY - _);
      }
      function x() {
        document.removeEventListener("mousemove", M), document.removeEventListener("mouseup", x);
      }
      document.addEventListener("mousemove", M), document.addEventListener("mouseup", x);
    }
    return $e(() => {
    }), (l, s) => (D(), N("div", Fr, [
      m("div", {
        class: "floating-button",
        onClick: k
      }, " 🤖 AI "),
      o.value ? (D(), N("div", {
        key: 0,
        class: "chat-main",
        style: fe({ backgroundColor: w.value })
      }, [
        m("div", Br, [
          m("button", {
            class: "toolbar-btn",
            onClick: s[0] || (s[0] = (p) => u.value = !0)
          }, "📜日志"),
          m("button", {
            class: "toolbar-btn",
            onClick: s[1] || (s[1] = (p) => d.value = !0)
          }, "📚备注"),
          De(m("select", {
            "onUpdate:modelValue": s[2] || (s[2] = (p) => w.value = p),
            class: "theme-select"
          }, [
            (D(), N(Z, null, pe(T, (p) => m("option", {
              key: p.value,
              value: p.value
            }, ie(p.name), 9, Jr)), 64))
          ], 512), [
            [St, w.value]
          ]),
          m("button", {
            class: "toolbar-btn close-chat-btn",
            onClick: k
          }, "❌")
        ]),
        m("div", Ur, [
          (D(!0), N(Z, null, pe(L(r), (p) => (D(), N("div", {
            key: p.id,
            class: he(["message-wrapper", { "is-user": p.role === "user" }])
          }, [
            m("div", {
              class: he(["message-row", { "is-user-row": p.role === "user" }])
            }, [
              p.role === "assistant" ? (D(), N(Z, { key: 0 }, [
                s[11] || (s[11] = m("span", { class: "message-label" }, "AI", -1)),
                m("div", Yr, [
                  p.content.trim().startsWith("<audio") ? (D(), N("audio", {
                    key: 0,
                    ref_for: !0,
                    ref_key: "audioRef",
                    ref: A,
                    src: g(p.content) ?? "",
                    controls: "",
                    autoplay: ""
                  }, null, 8, $r)) : (D(), N("p", zr, ie(p.content), 1))
                ])
              ], 64)) : p.role === "user" ? (D(), N(Z, { key: 1 }, [
                m("div", Kr, [
                  m("p", Wr, ie(p.content), 1)
                ]),
                s[12] || (s[12] = m("span", { class: "message-label" }, "You", -1))
              ], 64)) : Q("", !0)
            ], 2)
          ], 2))), 128)),
          L(a) ? (D(), N("div", qr, [
            m("div", Gr, [
              s[14] || (s[14] = m("span", { class: "message-label" }, "AI", -1)),
              m("div", Hr, [
                S.value ? (D(), N("div", Xr, s[13] || (s[13] = [
                  m("span", { class: "die" }, "⚀", -1),
                  m("span", { class: "die" }, "⚂", -1),
                  m("span", { class: "die" }, "⚅", -1)
                ]))) : (D(), N("div", Qr, "思考中..."))
              ])
            ])
          ])) : Q("", !0)
        ]),
        m("form", {
          onSubmit: s[6] || (s[6] = Oe(
            //@ts-ignore
            (...p) => L(i) && L(i)(...p),
            ["prevent"]
          )),
          class: "input-form"
        }, [
          De(m("textarea", {
            "onUpdate:modelValue": s[3] || (s[3] = (p) => Rt(n) ? n.value = p : null),
            placeholder: "请输入您的问题，或点击麦克风说话：",
            class: "chat-textarea",
            rows: "2",
            onKeydown: s[4] || (s[4] = Tt(Oe(
              //@ts-ignore
              (...p) => L(i) && L(i)(...p),
              ["exact", "prevent"]
            ), ["enter"]))
          }, null, 544), [
            [kt, L(n)]
          ]),
          m("button", {
            type: "button",
            onClick: s[5] || (s[5] = (p) => L(h) ? L(c)() : L(f)()),
            class: he(["mic-button", { "is-listening": L(h) }]),
            title: "语音输入"
          }, " 🎤 ", 2),
          m("button", {
            type: "submit",
            disabled: L(a)
          }, "发送", 8, Zr)
        ], 32)
      ], 4)) : Q("", !0),
      o.value && u.value ? (D(), N("div", {
        key: 1,
        class: "draggable-modal",
        style: fe({ left: v.x + "px", top: v.y + "px" })
      }, [
        m("div", {
          class: "modal-header",
          onMousedown: s[8] || (s[8] = (p) => b(v, p))
        }, [
          s[15] || (s[15] = m("span", null, "Debug Log", -1)),
          m("button", {
            class: "close-btn",
            onClick: s[7] || (s[7] = (p) => u.value = !1)
          }, "✖")
        ], 32),
        m("div", en, [
          (D(!0), N(Z, null, pe(L(r), (p) => (D(), N("div", {
            key: p.id,
            class: "log-entry"
          }, [
            m("pre", null, ie(JSON.stringify(p, null, 2)), 1),
            s[16] || (s[16] = m("hr", null, null, -1))
          ]))), 128))
        ])
      ], 4)) : Q("", !0),
      o.value && d.value ? (D(), N("div", {
        key: 2,
        class: "draggable-modal",
        style: fe({ left: y.x + "px", top: y.y + "px" })
      }, [
        m("div", {
          class: "modal-header",
          onMousedown: s[10] || (s[10] = (p) => b(y, p))
        }, [
          s[17] || (s[17] = m("span", null, "备注", -1)),
          m("button", {
            class: "close-btn",
            onClick: s[9] || (s[9] = (p) => d.value = !1)
          }, "✖")
        ], 32),
        s[18] || (s[18] = m("div", { class: "modal-content pre-wrap text-center" }, [
          m("div", null, "中文语音库"),
          m("div", null, "zf_xiaobei"),
          m("div", null, "zf_xiaoni"),
          m("div", null, "zf_xiaoxiao"),
          m("div", null, "zf_xiaoyi"),
          m("div", null, "zm_yunjian"),
          m("div", null, "zm_yunxi"),
          m("div", null, "zm_yunxia"),
          m("div", null, "zm_yunyang")
        ], -1))
      ], 4)) : Q("", !0)
    ]));
  }
}), rn = At(tn);
customElements.define("ai-chat-bubble", rn);
