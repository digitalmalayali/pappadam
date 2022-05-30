if (!self.define) {
    let n = {};
    const r = (r, t) => (r = r.startsWith(location.origin) ? r : new URL(r + ".js", t).href, n[r] || new Promise(n => {
        if ("document" in self) {
            const t = document.createElement("link");
            t.rel = "preload", t.as = "script", t.href = r, t.onload = () => {
                const t = document.createElement("script");
                t.src = r, t.onload = n, document.head.appendChild(t)
            }, document.head.appendChild(t)
        } else self.nextDefineUri = r, importScripts(r), n()
    }).then(() => {
        let t = n[r];
        if (!t) throw new Error(`Module ${r} didn’t register its module`);
        return t
    }));
    self.define = (t, e) => {
        const o = self.nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
        if (n[o]) return;
        let a = {};
        const i = n => r(n, o),
            u = {
                module: {
                    uri: o
                },
                exports: a,
                require: i
            };
        n[o] = Promise.resolve().then(() => Promise.all(t.map(n => u[n] || i(n)))).then(n => (e(...n), a))
    }
}
define(["module", "require", "./util-d4fc8e28", "./index-5f659321"], (function(n, r, t, e) {
    function o(n, r) {
        return console.time(n), r().finally(() => console.timeEnd(n))
    }

    function a(n) {
        return n({
            noInitialRun: !0
        })
    }

    function i(n) {
        return new Response(n).arrayBuffer()
    }
    let u;
    var c, f = (c = n.uri, function(r) {
        var t, e;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(n, r) {
            t = n, e = r
        }));
        var o, a = {};
        for (o in r) r.hasOwnProperty(o) && (a[o] = r[o]);
        var i, u = "";
        u = self.location.href, c && (u = c), u = 0 !== u.indexOf("blob:") ? u.substr(0, u.lastIndexOf("/") + 1) : "", i = function(n) {
            var r = new XMLHttpRequest;
            return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
        };
        var f, s, l = r.print || console.log.bind(console),
            d = r.printErr || console.warn.bind(console);
        for (o in a) a.hasOwnProperty(o) && (r[o] = a[o]);
        a = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit, r.wasmBinary && (f = r.wasmBinary), r.noExitRuntime, "object" != typeof WebAssembly && q("no native wasm support detected");
        var p = !1,
            h = new TextDecoder("utf8");

        function v(n, r) {
            if (!n) return "";
            for (var t = n + r, e = n; !(e >= t) && m[e];) ++e;
            return h.decode(m.subarray(n, e))
        }
        var y, g, m, w, b, _, A, T, E, C, P = new TextDecoder("utf-16le");

        function W(n, r) {
            for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && b[e];) ++e;
            return t = e << 1, P.decode(m.subarray(n, t))
        }

        function k(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 2) return 0;
            for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0; a < o; ++a) {
                var i = n.charCodeAt(a);
                w[r >> 1] = i, r += 2
            }
            return w[r >> 1] = 0, r - e
        }

        function R(n) {
            return 2 * n.length
        }

        function F(n, r) {
            for (var t = 0, e = ""; !(t >= r / 4);) {
                var o = _[n + 4 * t >> 2];
                if (0 == o) break;
                if (++t, o >= 65536) {
                    var a = o - 65536;
                    e += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                } else e += String.fromCharCode(o)
            }
            return e
        }

        function U(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 4) return 0;
            for (var e = r, o = e + t - 4, a = 0; a < n.length; ++a) {
                var i = n.charCodeAt(a);
                if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a)), _[r >> 2] = i, (r += 4) + 4 > o) break
            }
            return _[r >> 2] = 0, r - e
        }

        function I(n) {
            for (var r = 0, t = 0; t < n.length; ++t) {
                var e = n.charCodeAt(t);
                e >= 55296 && e <= 57343 && ++t, r += 4
            }
            return r
        }

        function S(n) {
            y = n, r.HEAP8 = g = new Int8Array(n), r.HEAP16 = w = new Int16Array(n), r.HEAP32 = _ = new Int32Array(n), r.HEAPU8 = m = new Uint8Array(n), r.HEAPU16 = b = new Uint16Array(n), r.HEAPU32 = A = new Uint32Array(n), r.HEAPF32 = T = new Float32Array(n), r.HEAPF64 = E = new Float64Array(n)
        }
        r.INITIAL_MEMORY;
        var x, j = [],
            O = [],
            D = [],
            M = 0,
            B = null;

        function q(n) {
            r.onAbort && r.onAbort(n), d(n += ""), p = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(n);
            throw e(t), t
        }

        function z(n) {
            return n.startsWith("data:application/octet-stream;base64,")
        }
        if (r.preloadedImages = {}, r.preloadedAudios = {}, r.locateFile) z(H = "jxl_dec.wasm") || (x = H, H = r.locateFile ? r.locateFile(x, u) : u + x);
        else var H = new URL("/wasm/jxl_dec-e90a5afa.wasm", n.uri).toString();

        function V(n) {
            try {
                if (n == H && f) return new Uint8Array(f);
                if (i) return i(n);
                throw "both async and sync fetching of the wasm failed"
            } catch (n) {
                q(n)
            }
        }

        function L(n) {
            for (; n.length > 0;) {
                var t = n.shift();
                if ("function" != typeof t) {
                    var e = t.func;
                    "number" == typeof e ? void 0 === t.arg ? C.get(e)() : C.get(e)(t.arg) : e(void 0 === t.arg ? null : t.arg)
                } else t(r)
            }
        }

        function N(n) {
            switch (n) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + n)
            }
        }
        var G = void 0;

        function J(n) {
            for (var r = "", t = n; m[t];) r += G[m[t++]];
            return r
        }
        var X = {},
            $ = {},
            Y = {};

        function Z(n) {
            if (void 0 === n) return "_unknown";
            var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return r >= 48 && r <= 57 ? "_" + n : n
        }

        function K(n, r) {
            return n = Z(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
        }

        function Q(n, r) {
            var t = K(r, (function(n) {
                this.name = r, this.message = n;
                var t = new Error(n).stack;
                void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
            }));
            return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, t
        }
        var nn = void 0;

        function rn(n) {
            throw new nn(n)
        }
        var tn = void 0;

        function en(n) {
            throw new tn(n)
        }

        function on(n, r, t) {
            if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var e = r.name;
            if (n || rn('type "' + e + '" must have a positive integer typeid pointer'), $.hasOwnProperty(n)) {
                if (t.ignoreDuplicateRegistrations) return;
                rn("Cannot register type '" + e + "' twice")
            }
            if ($[n] = r, delete Y[n], X.hasOwnProperty(n)) {
                var o = X[n];
                delete X[n], o.forEach((function(n) {
                    n()
                }))
            }
        }
        var an = [],
            un = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];

        function cn(n) {
            n > 4 && 0 == --un[n].refcount && (un[n] = void 0, an.push(n))
        }

        function fn() {
            for (var n = 0, r = 5; r < un.length; ++r) void 0 !== un[r] && ++n;
            return n
        }

        function sn() {
            for (var n = 5; n < un.length; ++n)
                if (void 0 !== un[n]) return un[n];
            return null
        }

        function ln(n) {
            switch (n) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var r = an.length ? an.pop() : un.length;
                    return un[r] = {
                        refcount: 1,
                        value: n
                    }, r
            }
        }

        function dn(n) {
            return this.fromWireType(A[n >> 2])
        }

        function pn(n) {
            if (null === n) return "null";
            var r = typeof n;
            return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
        }

        function hn(n, r) {
            switch (r) {
                case 2:
                    return function(n) {
                        return this.fromWireType(T[n >> 2])
                    };
                case 3:
                    return function(n) {
                        return this.fromWireType(E[n >> 3])
                    };
                default:
                    throw new TypeError("Unknown float type: " + n)
            }
        }

        function vn(n) {
            for (; n.length;) {
                var r = n.pop();
                n.pop()(r)
            }
        }

        function yn(n, r, t, e, o) {
            var a = r.length;
            a < 2 && rn("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var i = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                if (null !== r[c] && void 0 === r[c].destructorFunction) {
                    u = !0;
                    break
                } var f = "void" !== r[0].name,
                s = "",
                l = "";
            for (c = 0; c < a - 2; ++c) s += (0 !== c ? ", " : "") + "arg" + c, l += (0 !== c ? ", " : "") + "arg" + c + "Wired";
            var d = "return function " + Z(n) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
            u && (d += "var destructors = [];\n");
            var p = u ? "destructors" : "null",
                h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                v = [rn, e, o, vn, r[0], r[1]];
            for (i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n"), c = 0; c < a - 2; ++c) d += "var arg" + c + "Wired = argType" + c + ".toWireType(" + p + ", arg" + c + "); // " + r[c + 2].name + "\n", h.push("argType" + c), v.push(r[c + 2]);
            if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), d += (f ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) d += "runDestructors(destructors);\n";
            else
                for (c = i ? 1 : 2; c < r.length; ++c) {
                    var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                    null !== r[c].destructorFunction && (d += y + "_dtor(" + y + "); // " + r[c].name + "\n", h.push(y + "_dtor"), v.push(r[c].destructorFunction))
                }
            return f && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", h.push(d),
                function(n, r) {
                    if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                    var t = K(n.name || "unknownFunctionName", (function() {}));
                    t.prototype = n.prototype;
                    var e = new t,
                        o = n.apply(e, r);
                    return o instanceof Object ? o : e
                }(Function, h).apply(null, v)
        }

        function gn(n, t, e) {
            r.hasOwnProperty(n) ? ((void 0 === e || void 0 !== r[n].overloadTable && void 0 !== r[n].overloadTable[e]) && rn("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                if (void 0 === n[r].overloadTable) {
                    var e = n[r];
                    n[r] = function() {
                        return n[r].overloadTable.hasOwnProperty(arguments.length) || rn("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                    }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                }
            }(r, n, n), r.hasOwnProperty(e) && rn("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), r[n].overloadTable[e] = t) : (r[n] = t, void 0 !== e && (r[n].numArguments = e))
        }

        function mn(n, t, e) {
            return n.includes("j") ? function(n, t, e) {
                var o = r["dynCall_" + n];
                return e && e.length ? o.apply(null, [t].concat(e)) : o.call(null, t)
            }(n, t, e) : C.get(t).apply(null, e)
        }

        function wn(n, r) {
            var t, e, o, a = (n = J(n)).includes("j") ? (t = n, e = r, o = [], function() {
                o.length = arguments.length;
                for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                return mn(t, e, o)
            }) : C.get(r);
            return "function" != typeof a && rn("unknown function pointer with signature " + n + ": " + r), a
        }
        var bn = void 0;

        function _n(n) {
            var r = Sn(n),
                t = J(r);
            return In(r), t
        }

        function An(n, r, t) {
            switch (r) {
                case 0:
                    return t ? function(n) {
                        return g[n]
                    } : function(n) {
                        return m[n]
                    };
                case 1:
                    return t ? function(n) {
                        return w[n >> 1]
                    } : function(n) {
                        return b[n >> 1]
                    };
                case 2:
                    return t ? function(n) {
                        return _[n >> 2]
                    } : function(n) {
                        return A[n >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + n)
            }
        }
        var Tn = {};

        function En() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }

        function Cn(n, r) {
            var t = $[n];
            return void 0 === t && rn(r + " has unknown type " + _n(n)), t
        }
        var Pn = {};

        function Wn(n) {
            try {
                return s.grow(n - y.byteLength + 65535 >>> 16), S(s.buffer), 1
            } catch (n) {}
        }
        var kn = {
            mappings: {},
            buffers: [null, [],
                []
            ],
            printChar: function(n, r) {
                var t = kn.buffers[n];
                0 === r || 10 === r ? ((1 === n ? l : d)(function(n, r, t) {
                    for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                    return h.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                }(t, 0)), t.length = 0) : t.push(r)
            },
            varargs: void 0,
            get: function() {
                return kn.varargs += 4, _[kn.varargs - 4 >> 2]
            },
            getStr: function(n) {
                return v(n)
            },
            get64: function(n, r) {
                return n
            }
        };
        ! function() {
            for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
            G = n
        }(), nn = r.BindingError = Q(Error, "BindingError"), tn = r.InternalError = Q(Error, "InternalError"), r.count_emval_handles = fn, r.get_first_emval = sn, bn = r.UnboundTypeError = Q(Error, "UnboundTypeError");
        var Rn = {
            b: function(n, r, t, e) {
                q("Assertion failed: " + v(n) + ", at: " + [r ? v(r) : "unknown filename", t, e ? v(e) : "unknown function"])
            },
            m: function(n, r) {},
            r: function(n, r, t, e, o) {},
            n: function(n, r, t, e, o) {
                var a = N(t);
                on(n, {
                    name: r = J(r),
                    fromWireType: function(n) {
                        return !!n
                    },
                    toWireType: function(n, r) {
                        return r ? e : o
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(n) {
                        var e;
                        if (1 === t) e = g;
                        else if (2 === t) e = w;
                        else {
                            if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                            e = _
                        }
                        return this.fromWireType(e[n >> a])
                    },
                    destructorFunction: null
                })
            },
            w: function(n, r) {
                on(n, {
                    name: r = J(r),
                    fromWireType: function(n) {
                        var r = un[n].value;
                        return cn(n), r
                    },
                    toWireType: function(n, r) {
                        return ln(r)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: dn,
                    destructorFunction: null
                })
            },
            j: function(n, r, t) {
                var e = N(t);
                on(n, {
                    name: r = J(r),
                    fromWireType: function(n) {
                        return n
                    },
                    toWireType: function(n, r) {
                        if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + pn(r) + '" to ' + this.name);
                        return r
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: hn(r, e),
                    destructorFunction: null
                })
            },
            p: function(n, t, e, o, a, i) {
                var u = function(n, r) {
                    for (var t = [], e = 0; e < n; e++) t.push(_[(r >> 2) + e]);
                    return t
                }(t, e);
                n = J(n), a = wn(o, a), gn(n, (function() {
                        ! function(n, r) {
                            var t = [],
                                e = {};
                            throw r.forEach((function n(r) {
                                e[r] || $[r] || (Y[r] ? Y[r].forEach(n) : (t.push(r), e[r] = !0))
                            })), new bn(n + ": " + t.map(_n).join([", "]))
                        }("Cannot call " + n + " due to unbound types", u)
                    }), t - 1),
                    function(n, r, t) {
                        function e(r) {
                            var e = t(r);
                            e.length !== n.length && en("Mismatched type converter count");
                            for (var o = 0; o < n.length; ++o) on(n[o], e[o])
                        }
                        n.forEach((function(n) {
                            Y[n] = r
                        }));
                        var o = new Array(r.length),
                            a = [],
                            i = 0;
                        r.forEach((function(n, r) {
                            $.hasOwnProperty(n) ? o[r] = $[n] : (a.push(n), X.hasOwnProperty(n) || (X[n] = []), X[n].push((function() {
                                o[r] = $[n], ++i === a.length && e(o)
                            })))
                        })), 0 === a.length && e(o)
                    }([], u, (function(e) {
                        var o = [e[0], null].concat(e.slice(1));
                        return function(n, t, e) {
                            r.hasOwnProperty(n) || en("Replacing nonexistant public symbol"), void 0 !== r[n].overloadTable && void 0 !== e ? r[n].overloadTable[e] = t : (r[n] = t, r[n].argCount = e)
                        }(n, yn(n, o, null, a, i), t - 1), []
                    }))
            },
            d: function(n, r, t, e, o) {
                r = J(r), -1 === o && (o = 4294967295);
                var a = N(t),
                    i = function(n) {
                        return n
                    };
                if (0 === e) {
                    var u = 32 - 8 * t;
                    i = function(n) {
                        return n << u >>> u
                    }
                }
                var c = r.includes("unsigned");
                on(n, {
                    name: r,
                    fromWireType: i,
                    toWireType: function(n, t) {
                        if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + pn(t) + '" to ' + this.name);
                        if (t < e || t > o) throw new TypeError('Passing a number "' + pn(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                        return c ? t >>> 0 : 0 | t
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: An(r, a, 0 !== e),
                    destructorFunction: null
                })
            },
            c: function(n, r, t) {
                var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                function o(n) {
                    var r = A,
                        t = r[n >>= 2],
                        o = r[n + 1];
                    return new e(y, o, t)
                }
                on(n, {
                    name: t = J(t),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o
                }, {
                    ignoreDuplicateRegistrations: !0
                })
            },
            k: function(n, r) {
                var t = "std::string" === (r = J(r));
                on(n, {
                    name: r,
                    fromWireType: function(n) {
                        var r, e = A[n >> 2];
                        if (t)
                            for (var o = n + 4, a = 0; a <= e; ++a) {
                                var i = n + 4 + a;
                                if (a == e || 0 == m[i]) {
                                    var u = v(o, i - o);
                                    void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = i + 1
                                }
                            } else {
                                var c = new Array(e);
                                for (a = 0; a < e; ++a) c[a] = String.fromCharCode(m[n + 4 + a]);
                                r = c.join("")
                            }
                        return In(n), r
                    },
                    toWireType: function(n, r) {
                        r instanceof ArrayBuffer && (r = new Uint8Array(r));
                        var e = "string" == typeof r;
                        e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || rn("Cannot pass non-string to std::string");
                        var o = (t && e ? function() {
                                return function(n) {
                                    for (var r = 0, t = 0; t < n.length; ++t) {
                                        var e = n.charCodeAt(t);
                                        e >= 55296 && e <= 57343 && (e = 65536 + ((1023 & e) << 10) | 1023 & n.charCodeAt(++t)), e <= 127 ? ++r : r += e <= 2047 ? 2 : e <= 65535 ? 3 : 4
                                    }
                                    return r
                                }(r)
                            } : function() {
                                return r.length
                            })(),
                            a = Un(4 + o + 1);
                        if (A[a >> 2] = o, t && e) ! function(n, r, t, e) {
                            if (!(e > 0)) return 0;
                            for (var o = t + e - 1, a = 0; a < n.length; ++a) {
                                var i = n.charCodeAt(a);
                                if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a)), i <= 127) {
                                    if (t >= o) break;
                                    r[t++] = i
                                } else if (i <= 2047) {
                                    if (t + 1 >= o) break;
                                    r[t++] = 192 | i >> 6, r[t++] = 128 | 63 & i
                                } else if (i <= 65535) {
                                    if (t + 2 >= o) break;
                                    r[t++] = 224 | i >> 12, r[t++] = 128 | i >> 6 & 63, r[t++] = 128 | 63 & i
                                } else {
                                    if (t + 3 >= o) break;
                                    r[t++] = 240 | i >> 18, r[t++] = 128 | i >> 12 & 63, r[t++] = 128 | i >> 6 & 63, r[t++] = 128 | 63 & i
                                }
                            }
                            r[t] = 0
                        }(r, m, a + 4, o + 1);
                        else if (e)
                            for (var i = 0; i < o; ++i) {
                                var u = r.charCodeAt(i);
                                u > 255 && (In(a), rn("String has UTF-16 code units that do not fit in 8 bits")), m[a + 4 + i] = u
                            } else
                                for (i = 0; i < o; ++i) m[a + 4 + i] = r[i];
                        return null !== n && n.push(In, a), a
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: dn,
                    destructorFunction: function(n) {
                        In(n)
                    }
                })
            },
            g: function(n, r, t) {
                var e, o, a, i, u;
                t = J(t), 2 === r ? (e = W, o = k, i = R, a = function() {
                    return b
                }, u = 1) : 4 === r && (e = F, o = U, i = I, a = function() {
                    return A
                }, u = 2), on(n, {
                    name: t,
                    fromWireType: function(n) {
                        for (var t, o = A[n >> 2], i = a(), c = n + 4, f = 0; f <= o; ++f) {
                            var s = n + 4 + f * r;
                            if (f == o || 0 == i[s >> u]) {
                                var l = e(c, s - c);
                                void 0 === t ? t = l : (t += String.fromCharCode(0), t += l), c = s + r
                            }
                        }
                        return In(n), t
                    },
                    toWireType: function(n, e) {
                        "string" != typeof e && rn("Cannot pass non-string to C++ string type " + t);
                        var a = i(e),
                            c = Un(4 + a + r);
                        return A[c >> 2] = a >> u, o(e, c + 4, a + r), null !== n && n.push(In, c), c
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: dn,
                    destructorFunction: function(n) {
                        In(n)
                    }
                })
            },
            o: function(n, r) {
                on(n, {
                    isVoid: !0,
                    name: r = J(r),
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function(n, r) {}
                })
            },
            e: cn,
            l: function(n) {
                return 0 === n ? ln(En()) : (n = void 0 === (t = Tn[r = n]) ? J(r) : t, ln(En()[n]));
                var r, t
            },
            h: function(n) {
                n > 4 && (un[n].refcount += 1)
            },
            i: function(n, t, e, o) {
                n = function(n) {
                    return n || rn("Cannot use deleted val. handle = " + n), un[n].value
                }(n);
                var a = Pn[t];
                return a || (a = function(n) {
                    for (var t = "", e = 0; e < n; ++e) t += (0 !== e ? ", " : "") + "arg" + e;
                    var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                    for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                    return o += "var obj = new constructor(" + t + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(Cn, r, ln)
                }(t), Pn[t] = a), a(n, e, o)
            },
            a: function() {
                q()
            },
            t: function(n, r, t) {
                m.copyWithin(n, r, r + t)
            },
            f: function(n) {
                var r, t, e = m.length,
                    o = 2147483648;
                if ((n >>>= 0) > o) return !1;
                for (var a = 1; a <= 4; a *= 2) {
                    var i = e * (1 + .2 / a);
                    if (i = Math.min(i, n + 100663296), Wn(Math.min(o, ((r = Math.max(n, i)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                }
                return !1
            },
            u: function(n) {
                return 0
            },
            q: function(n, r, t, e, o) {},
            v: function(n, r, t, e) {
                for (var o = 0, a = 0; a < t; a++) {
                    for (var i = _[r + 8 * a >> 2], u = _[r + (8 * a + 4) >> 2], c = 0; c < u; c++) kn.printChar(n, m[i + c]);
                    o += u
                }
                return _[e >> 2] = o, 0
            },
            s: function(n) {}
        };
        ! function() {
            var n = {
                a: Rn
            };

            function t(n, t) {
                var e, o = n.exports;
                r.asm = o, S((s = r.asm.x).buffer), C = r.asm.D, e = r.asm.y, O.unshift(e),
                    function(n) {
                        if (M--, r.monitorRunDependencies && r.monitorRunDependencies(M), 0 == M && B) {
                            var t = B;
                            B = null, t()
                        }
                    }()
            }

            function o(n) {
                t(n.instance)
            }

            function a(r) {
                return (f || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return V(H)
                })) : fetch(H, {
                    credentials: "same-origin"
                }).then((function(n) {
                    if (!n.ok) throw "failed to load wasm binary file at '" + H + "'";
                    return n.arrayBuffer()
                })).catch((function() {
                    return V(H)
                }))).then((function(r) {
                    return WebAssembly.instantiate(r, n)
                })).then(r, (function(n) {
                    d("failed to asynchronously prepare wasm: " + n), q(n)
                }))
            }
            if (M++, r.monitorRunDependencies && r.monitorRunDependencies(M), r.instantiateWasm) try {
                return r.instantiateWasm(n, t)
            } catch (n) {
                return d("Module.instantiateWasm callback failed with error: " + n), !1
            }(f || "function" != typeof WebAssembly.instantiateStreaming || z(H) || "function" != typeof fetch ? a(o) : fetch(H, {
                credentials: "same-origin"
            }).then((function(r) {
                return WebAssembly.instantiateStreaming(r, n).then(o, (function(n) {
                    return d("wasm streaming compile failed: " + n), d("falling back to ArrayBuffer instantiation"), a(o)
                }))
            }))).catch(e)
        }(), r.___wasm_call_ctors = function() {
            return (r.___wasm_call_ctors = r.asm.y).apply(null, arguments)
        };
        var Fn, Un = r._malloc = function() {
                return (Un = r._malloc = r.asm.z).apply(null, arguments)
            },
            In = r._free = function() {
                return (In = r._free = r.asm.A).apply(null, arguments)
            },
            Sn = r.___getTypeName = function() {
                return (Sn = r.___getTypeName = r.asm.B).apply(null, arguments)
            };

        function xn(n) {
            function e() {
                Fn || (Fn = !0, r.calledRun = !0, p || (L(O), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), function() {
                    if (r.postRun)
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) n = r.postRun.shift(), D.unshift(n);
                    var n;
                    L(D)
                }()))
            }
            M > 0 || (function() {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) n = r.preRun.shift(), j.unshift(n);
                var n;
                L(j)
            }(), M > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    r.setStatus("")
                }), 1), e()
            }), 1)) : e()))
        }
        if (r.___embind_register_native_and_builtin_types = function() {
                return (r.___embind_register_native_and_builtin_types = r.asm.C).apply(null, arguments)
            }, r.dynCall_iiji = function() {
                return (r.dynCall_iiji = r.asm.E).apply(null, arguments)
            }, r.dynCall_jiji = function() {
                return (r.dynCall_jiji = r.asm.F).apply(null, arguments)
            }, B = function n() {
                Fn || xn(), Fn || (B = n)
            }, r.run = xn, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        return xn(), r.ready
    });
    let s, l;
    var d = function() {
        var r = n.uri;
        return function(t) {
            var e, o;
            (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise((function(n, r) {
                e = n, o = r
            }));
            var a, i = {};
            for (a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
            var u, c = "";
            c = self.location.href, r && (c = r), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "", u = function(n) {
                var r = new XMLHttpRequest;
                return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
            };
            var f, s, l = t.print || console.log.bind(console),
                d = t.printErr || console.warn.bind(console);
            for (a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
            i = null, t.arguments && t.arguments, t.thisProgram && t.thisProgram, t.quit && t.quit, t.wasmBinary && (f = t.wasmBinary), t.noExitRuntime, "object" != typeof WebAssembly && B("no native wasm support detected");
            var p = !1,
                h = new TextDecoder("utf8");

            function v(n, r) {
                if (!n) return "";
                for (var t = n + r, e = n; !(e >= t) && m[e];) ++e;
                return h.decode(m.subarray(n, e))
            }
            var y, g, m, w, b, _, A, T, E, C, P = new TextDecoder("utf-16le");

            function W(n, r) {
                for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && b[e];) ++e;
                return t = e << 1, P.decode(m.subarray(n, t))
            }

            function k(n, r, t) {
                if (void 0 === t && (t = 2147483647), t < 2) return 0;
                for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0; a < o; ++a) {
                    var i = n.charCodeAt(a);
                    w[r >> 1] = i, r += 2
                }
                return w[r >> 1] = 0, r - e
            }

            function R(n) {
                return 2 * n.length
            }

            function F(n, r) {
                for (var t = 0, e = ""; !(t >= r / 4);) {
                    var o = _[n + 4 * t >> 2];
                    if (0 == o) break;
                    if (++t, o >= 65536) {
                        var a = o - 65536;
                        e += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                    } else e += String.fromCharCode(o)
                }
                return e
            }

            function U(n, r, t) {
                if (void 0 === t && (t = 2147483647), t < 4) return 0;
                for (var e = r, o = e + t - 4, a = 0; a < n.length; ++a) {
                    var i = n.charCodeAt(a);
                    if (i >= 55296 && i <= 57343) i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a);
                    if (_[r >> 2] = i, (r += 4) + 4 > o) break
                }
                return _[r >> 2] = 0, r - e
            }

            function I(n) {
                for (var r = 0, t = 0; t < n.length; ++t) {
                    var e = n.charCodeAt(t);
                    e >= 55296 && e <= 57343 && ++t, r += 4
                }
                return r
            }

            function S(n) {
                y = n, t.HEAP8 = g = new Int8Array(n), t.HEAP16 = w = new Int16Array(n), t.HEAP32 = _ = new Int32Array(n), t.HEAPU8 = m = new Uint8Array(n), t.HEAPU16 = b = new Uint16Array(n), t.HEAPU32 = A = new Uint32Array(n), t.HEAPF32 = T = new Float32Array(n), t.HEAPF64 = E = new Float64Array(n)
            }
            t.INITIAL_MEMORY;
            var x = [],
                j = [],
                O = [];
            var D = 0,
                M = null;

            function B(n) {
                t.onAbort && t.onAbort(n), d(n += ""), p = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
                var r = new WebAssembly.RuntimeError(n);
                throw o(r), r
            }
            t.preloadedImages = {}, t.preloadedAudios = {};
            var q;

            function z(n) {
                return n.startsWith("data:application/octet-stream;base64,")
            }
            if (t.locateFile) z(H = "wp2_dec.wasm") || (q = H, H = t.locateFile ? t.locateFile(q, c) : c + q);
            else var H = new URL("/wasm/wp2_dec-9a40adf1.wasm", n.uri).toString();

            function V(n) {
                try {
                    if (n == H && f) return new Uint8Array(f);
                    if (u) return u(n);
                    throw "both async and sync fetching of the wasm failed"
                } catch (n) {
                    B(n)
                }
            }

            function L(n) {
                for (; n.length > 0;) {
                    var r = n.shift();
                    if ("function" != typeof r) {
                        var e = r.func;
                        "number" == typeof e ? void 0 === r.arg ? C.get(e)() : C.get(e)(r.arg) : e(void 0 === r.arg ? null : r.arg)
                    } else r(t)
                }
            }
            var N = 0,
                G = 4,
                J = 8,
                X = 12,
                $ = 13,
                Y = 16;

            function Z(n) {
                this.excPtr = n, this.ptr = n - Y, this.set_type = function(n) {
                    _[this.ptr + J >> 2] = n
                }, this.get_type = function() {
                    return _[this.ptr + J >> 2]
                }, this.set_destructor = function(n) {
                    _[this.ptr + N >> 2] = n
                }, this.get_destructor = function() {
                    return _[this.ptr + N >> 2]
                }, this.set_refcount = function(n) {
                    _[this.ptr + G >> 2] = n
                }, this.set_caught = function(n) {
                    n = n ? 1 : 0, g[this.ptr + X >> 0] = n
                }, this.get_caught = function() {
                    return 0 != g[this.ptr + X >> 0]
                }, this.set_rethrown = function(n) {
                    n = n ? 1 : 0, g[this.ptr + $ >> 0] = n
                }, this.get_rethrown = function() {
                    return 0 != g[this.ptr + $ >> 0]
                }, this.init = function(n, r) {
                    this.set_type(n), this.set_destructor(r), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                }, this.add_ref = function() {
                    var n = _[this.ptr + G >> 2];
                    _[this.ptr + G >> 2] = n + 1
                }, this.release_ref = function() {
                    var n = _[this.ptr + G >> 2];
                    return _[this.ptr + G >> 2] = n - 1, 1 === n
                }
            }

            function K(n) {
                switch (n) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + n)
                }
            }
            var Q = void 0;

            function nn(n) {
                for (var r = "", t = n; m[t];) r += Q[m[t++]];
                return r
            }
            var rn = {},
                tn = {},
                en = {};

            function on(n) {
                if (void 0 === n) return "_unknown";
                var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return r >= 48 && r <= 57 ? "_" + n : n
            }

            function an(n, r) {
                return n = on(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
            }

            function un(n, r) {
                var t = an(r, (function(n) {
                    this.name = r, this.message = n;
                    var t = new Error(n).stack;
                    void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
                }));
                return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                }, t
            }
            var cn = void 0;

            function fn(n) {
                throw new cn(n)
            }
            var sn = void 0;

            function ln(n) {
                throw new sn(n)
            }

            function dn(n, r, t) {
                if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var e = r.name;
                if (n || fn('type "' + e + '" must have a positive integer typeid pointer'), tn.hasOwnProperty(n)) {
                    if (t.ignoreDuplicateRegistrations) return;
                    fn("Cannot register type '" + e + "' twice")
                }
                if (tn[n] = r, delete en[n], rn.hasOwnProperty(n)) {
                    var o = rn[n];
                    delete rn[n], o.forEach((function(n) {
                        n()
                    }))
                }
            }
            var pn = [],
                hn = [{}, {
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }];

            function vn(n) {
                n > 4 && 0 == --hn[n].refcount && (hn[n] = void 0, pn.push(n))
            }

            function yn() {
                for (var n = 0, r = 5; r < hn.length; ++r) void 0 !== hn[r] && ++n;
                return n
            }

            function gn() {
                for (var n = 5; n < hn.length; ++n)
                    if (void 0 !== hn[n]) return hn[n];
                return null
            }

            function mn(n) {
                switch (n) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        var r = pn.length ? pn.pop() : hn.length;
                        return hn[r] = {
                            refcount: 1,
                            value: n
                        }, r
                }
            }

            function wn(n) {
                return this.fromWireType(A[n >> 2])
            }

            function bn(n) {
                if (null === n) return "null";
                var r = typeof n;
                return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
            }

            function _n(n, r) {
                switch (r) {
                    case 2:
                        return function(n) {
                            return this.fromWireType(T[n >> 2])
                        };
                    case 3:
                        return function(n) {
                            return this.fromWireType(E[n >> 3])
                        };
                    default:
                        throw new TypeError("Unknown float type: " + n)
                }
            }

            function An(n) {
                for (; n.length;) {
                    var r = n.pop();
                    n.pop()(r)
                }
            }

            function Tn(n, r, t, e, o) {
                var a = r.length;
                a < 2 && fn("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var i = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                    if (null !== r[c] && void 0 === r[c].destructorFunction) {
                        u = !0;
                        break
                    } var f = "void" !== r[0].name,
                    s = "",
                    l = "";
                for (c = 0; c < a - 2; ++c) s += (0 !== c ? ", " : "") + "arg" + c, l += (0 !== c ? ", " : "") + "arg" + c + "Wired";
                var d = "return function " + on(n) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
                u && (d += "var destructors = [];\n");
                var p = u ? "destructors" : "null",
                    h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                    v = [fn, e, o, An, r[0], r[1]];
                i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n");
                for (c = 0; c < a - 2; ++c) d += "var arg" + c + "Wired = argType" + c + ".toWireType(" + p + ", arg" + c + "); // " + r[c + 2].name + "\n", h.push("argType" + c), v.push(r[c + 2]);
                if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), d += (f ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) d += "runDestructors(destructors);\n";
                else
                    for (c = i ? 1 : 2; c < r.length; ++c) {
                        var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                        null !== r[c].destructorFunction && (d += y + "_dtor(" + y + "); // " + r[c].name + "\n", h.push(y + "_dtor"), v.push(r[c].destructorFunction))
                    }
                return f && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", h.push(d),
                    function(n, r) {
                        if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                        var t = an(n.name || "unknownFunctionName", (function() {}));
                        t.prototype = n.prototype;
                        var e = new t,
                            o = n.apply(e, r);
                        return o instanceof Object ? o : e
                    }(Function, h).apply(null, v)
            }

            function En(n, r, e) {
                t.hasOwnProperty(n) ? ((void 0 === e || void 0 !== t[n].overloadTable && void 0 !== t[n].overloadTable[e]) && fn("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                    if (void 0 === n[r].overloadTable) {
                        var e = n[r];
                        n[r] = function() {
                            return n[r].overloadTable.hasOwnProperty(arguments.length) || fn("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                        }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                    }
                }(t, n, n), t.hasOwnProperty(e) && fn("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), t[n].overloadTable[e] = r) : (t[n] = r, void 0 !== e && (t[n].numArguments = e))
            }

            function Cn(n, r, e) {
                return n.includes("j") ? function(n, r, e) {
                    var o = t["dynCall_" + n];
                    return e && e.length ? o.apply(null, [r].concat(e)) : o.call(null, r)
                }(n, r, e) : C.get(r).apply(null, e)
            }

            function Pn(n, r) {
                var t, e, o, a = (n = nn(n)).includes("j") ? (t = n, e = r, o = [], function() {
                    o.length = arguments.length;
                    for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                    return Cn(t, e, o)
                }) : C.get(r);
                return "function" != typeof a && fn("unknown function pointer with signature " + n + ": " + r), a
            }
            var Wn = void 0;

            function kn(n) {
                var r = qn(n),
                    t = nn(r);
                return Mn(r), t
            }

            function Rn(n, r, t) {
                switch (r) {
                    case 0:
                        return t ? function(n) {
                            return g[n]
                        } : function(n) {
                            return m[n]
                        };
                    case 1:
                        return t ? function(n) {
                            return w[n >> 1]
                        } : function(n) {
                            return b[n >> 1]
                        };
                    case 2:
                        return t ? function(n) {
                            return _[n >> 2]
                        } : function(n) {
                            return A[n >> 2]
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + n)
                }
            }
            var Fn = {};

            function Un() {
                return "object" == typeof globalThis ? globalThis : Function("return this")()
            }

            function In(n, r) {
                var t = tn[n];
                return void 0 === t && fn(r + " has unknown type " + kn(n)), t
            }
            var Sn = {};

            function xn(n) {
                try {
                    return s.grow(n - y.byteLength + 65535 >>> 16), S(s.buffer), 1
                } catch (n) {}
            }
            var jn = {
                mappings: {},
                buffers: [null, [],
                    []
                ],
                printChar: function(n, r) {
                    var t = jn.buffers[n];
                    0 === r || 10 === r ? ((1 === n ? l : d)(function(n, r, t) {
                        for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                        return h.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                    }(t, 0)), t.length = 0) : t.push(r)
                },
                varargs: void 0,
                get: function() {
                    return jn.varargs += 4, _[jn.varargs - 4 >> 2]
                },
                getStr: function(n) {
                    return v(n)
                },
                get64: function(n, r) {
                    return n
                }
            };
            ! function() {
                for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
                Q = n
            }(), cn = t.BindingError = un(Error, "BindingError"), sn = t.InternalError = un(Error, "InternalError"), t.count_emval_handles = yn, t.get_first_emval = gn, Wn = t.UnboundTypeError = un(Error, "UnboundTypeError");
            var On = {
                p: function(n) {
                    return Bn(n + Y) + Y
                },
                e: function(n, r) {},
                o: function(n, r, t) {
                    throw new Z(n).init(r, t), n
                },
                r: function(n, r, t, e, o) {},
                m: function(n, r, t, e, o) {
                    var a = K(t);
                    dn(n, {
                        name: r = nn(r),
                        fromWireType: function(n) {
                            return !!n
                        },
                        toWireType: function(n, r) {
                            return r ? e : o
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(n) {
                            var e;
                            if (1 === t) e = g;
                            else if (2 === t) e = w;
                            else {
                                if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                                e = _
                            }
                            return this.fromWireType(e[n >> a])
                        },
                        destructorFunction: null
                    })
                },
                v: function(n, r) {
                    dn(n, {
                        name: r = nn(r),
                        fromWireType: function(n) {
                            var r = hn[n].value;
                            return vn(n), r
                        },
                        toWireType: function(n, r) {
                            return mn(r)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: wn,
                        destructorFunction: null
                    })
                },
                k: function(n, r, t) {
                    var e = K(t);
                    dn(n, {
                        name: r = nn(r),
                        fromWireType: function(n) {
                            return n
                        },
                        toWireType: function(n, r) {
                            if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + bn(r) + '" to ' + this.name);
                            return r
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: _n(r, e),
                        destructorFunction: null
                    })
                },
                q: function(n, r, e, o, a, i) {
                    var u = function(n, r) {
                        for (var t = [], e = 0; e < n; e++) t.push(_[(r >> 2) + e]);
                        return t
                    }(r, e);
                    n = nn(n), a = Pn(o, a), En(n, (function() {
                            ! function(n, r) {
                                var t = [],
                                    e = {};
                                throw r.forEach((function n(r) {
                                    e[r] || tn[r] || (en[r] ? en[r].forEach(n) : (t.push(r), e[r] = !0))
                                })), new Wn(n + ": " + t.map(kn).join([", "]))
                            }("Cannot call " + n + " due to unbound types", u)
                        }), r - 1),
                        function(n, r, t) {
                            function e(r) {
                                var e = t(r);
                                e.length !== n.length && ln("Mismatched type converter count");
                                for (var o = 0; o < n.length; ++o) dn(n[o], e[o])
                            }
                            n.forEach((function(n) {
                                en[n] = r
                            }));
                            var o = new Array(r.length),
                                a = [],
                                i = 0;
                            r.forEach((function(n, r) {
                                tn.hasOwnProperty(n) ? o[r] = tn[n] : (a.push(n), rn.hasOwnProperty(n) || (rn[n] = []), rn[n].push((function() {
                                    o[r] = tn[n], ++i === a.length && e(o)
                                })))
                            })), 0 === a.length && e(o)
                        }([], u, (function(e) {
                            var o = [e[0], null].concat(e.slice(1));
                            return function(n, r, e) {
                                t.hasOwnProperty(n) || ln("Replacing nonexistant public symbol"), void 0 !== t[n].overloadTable && void 0 !== e ? t[n].overloadTable[e] = r : (t[n] = r, t[n].argCount = e)
                            }(n, Tn(n, o, null, a, i), r - 1), []
                        }))
                },
                b: function(n, r, t, e, o) {
                    r = nn(r), -1 === o && (o = 4294967295);
                    var a = K(t),
                        i = function(n) {
                            return n
                        };
                    if (0 === e) {
                        var u = 32 - 8 * t;
                        i = function(n) {
                            return n << u >>> u
                        }
                    }
                    var c = r.includes("unsigned");
                    dn(n, {
                        name: r,
                        fromWireType: i,
                        toWireType: function(n, t) {
                            if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + bn(t) + '" to ' + this.name);
                            if (t < e || t > o) throw new TypeError('Passing a number "' + bn(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                            return c ? t >>> 0 : 0 | t
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Rn(r, a, 0 !== e),
                        destructorFunction: null
                    })
                },
                a: function(n, r, t) {
                    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                    function o(n) {
                        var r = A,
                            t = r[n >>= 2],
                            o = r[n + 1];
                        return new e(y, o, t)
                    }
                    dn(n, {
                        name: t = nn(t),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                l: function(n, r) {
                    var t = "std::string" === (r = nn(r));
                    dn(n, {
                        name: r,
                        fromWireType: function(n) {
                            var r, e = A[n >> 2];
                            if (t)
                                for (var o = n + 4, a = 0; a <= e; ++a) {
                                    var i = n + 4 + a;
                                    if (a == e || 0 == m[i]) {
                                        var u = v(o, i - o);
                                        void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = i + 1
                                    }
                                } else {
                                    var c = new Array(e);
                                    for (a = 0; a < e; ++a) c[a] = String.fromCharCode(m[n + 4 + a]);
                                    r = c.join("")
                                }
                            return Mn(n), r
                        },
                        toWireType: function(n, r) {
                            r instanceof ArrayBuffer && (r = new Uint8Array(r));
                            var e = "string" == typeof r;
                            e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || fn("Cannot pass non-string to std::string");
                            var o = (t && e ? function() {
                                    return function(n) {
                                        for (var r = 0, t = 0; t < n.length; ++t) {
                                            var e = n.charCodeAt(t);
                                            e >= 55296 && e <= 57343 && (e = 65536 + ((1023 & e) << 10) | 1023 & n.charCodeAt(++t)), e <= 127 ? ++r : r += e <= 2047 ? 2 : e <= 65535 ? 3 : 4
                                        }
                                        return r
                                    }(r)
                                } : function() {
                                    return r.length
                                })(),
                                a = Bn(4 + o + 1);
                            if (A[a >> 2] = o, t && e)(function(n, r, t, e) {
                                if (!(e > 0)) return 0;
                                for (var o = t, a = t + e - 1, i = 0; i < n.length; ++i) {
                                    var u = n.charCodeAt(i);
                                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & n.charCodeAt(++i)), u <= 127) {
                                        if (t >= a) break;
                                        r[t++] = u
                                    } else if (u <= 2047) {
                                        if (t + 1 >= a) break;
                                        r[t++] = 192 | u >> 6, r[t++] = 128 | 63 & u
                                    } else if (u <= 65535) {
                                        if (t + 2 >= a) break;
                                        r[t++] = 224 | u >> 12, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                                    } else {
                                        if (t + 3 >= a) break;
                                        r[t++] = 240 | u >> 18, r[t++] = 128 | u >> 12 & 63, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                                    }
                                }
                                r[t] = 0
                            })(r, m, a + 4, o + 1);
                            else if (e)
                                for (var i = 0; i < o; ++i) {
                                    var u = r.charCodeAt(i);
                                    u > 255 && (Mn(a), fn("String has UTF-16 code units that do not fit in 8 bits")), m[a + 4 + i] = u
                                } else
                                    for (i = 0; i < o; ++i) m[a + 4 + i] = r[i];
                            return null !== n && n.push(Mn, a), a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: wn,
                        destructorFunction: function(n) {
                            Mn(n)
                        }
                    })
                },
                g: function(n, r, t) {
                    var e, o, a, i, u;
                    t = nn(t), 2 === r ? (e = W, o = k, i = R, a = function() {
                        return b
                    }, u = 1) : 4 === r && (e = F, o = U, i = I, a = function() {
                        return A
                    }, u = 2), dn(n, {
                        name: t,
                        fromWireType: function(n) {
                            for (var t, o = A[n >> 2], i = a(), c = n + 4, f = 0; f <= o; ++f) {
                                var s = n + 4 + f * r;
                                if (f == o || 0 == i[s >> u]) {
                                    var l = e(c, s - c);
                                    void 0 === t ? t = l : (t += String.fromCharCode(0), t += l), c = s + r
                                }
                            }
                            return Mn(n), t
                        },
                        toWireType: function(n, e) {
                            "string" != typeof e && fn("Cannot pass non-string to C++ string type " + t);
                            var a = i(e),
                                c = Bn(4 + a + r);
                            return A[c >> 2] = a >> u, o(e, c + 4, a + r), null !== n && n.push(Mn, c), c
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: wn,
                        destructorFunction: function(n) {
                            Mn(n)
                        }
                    })
                },
                n: function(n, r) {
                    dn(n, {
                        isVoid: !0,
                        name: r = nn(r),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function(n, r) {}
                    })
                },
                c: vn,
                d: function(n) {
                    return 0 === n ? mn(Un()) : (n = void 0 === (t = Fn[r = n]) ? nn(r) : t, mn(Un()[n]));
                    var r, t
                },
                h: function(n) {
                    n > 4 && (hn[n].refcount += 1)
                },
                i: function(n, r, e, o) {
                    n = function(n) {
                        return n || fn("Cannot use deleted val. handle = " + n), hn[n].value
                    }(n);
                    var a = Sn[r];
                    return a || (a = function(n) {
                        for (var r = "", e = 0; e < n; ++e) r += (0 !== e ? ", " : "") + "arg" + e;
                        var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                        for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                        return o += "var obj = new constructor(" + r + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(In, t, mn)
                    }(r), Sn[r] = a), a(n, e, o)
                },
                j: function() {
                    B()
                },
                t: function(n, r, t) {
                    m.copyWithin(n, r, r + t)
                },
                f: function(n) {
                    var r, t, e = m.length,
                        o = 2147483648;
                    if ((n >>>= 0) > o) return !1;
                    for (var a = 1; a <= 4; a *= 2) {
                        var i = e * (1 + .2 / a);
                        if (i = Math.min(i, n + 100663296), xn(Math.min(o, ((r = Math.max(n, i)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                    }
                    return !1
                },
                u: function(n, r, t, e) {
                    for (var o = 0, a = 0; a < t; a++) {
                        for (var i = _[r + 8 * a >> 2], u = _[r + (8 * a + 4) >> 2], c = 0; c < u; c++) jn.printChar(n, m[i + c]);
                        o += u
                    }
                    return _[e >> 2] = o, 0
                },
                s: function(n) {}
            };
            ! function() {
                var n = {
                    a: On
                };

                function r(n, r) {
                    var e, o = n.exports;
                    t.asm = o, S((s = t.asm.w).buffer), C = t.asm.C, e = t.asm.x, j.unshift(e),
                        function(n) {
                            if (D--, t.monitorRunDependencies && t.monitorRunDependencies(D), 0 == D && M) {
                                var r = M;
                                M = null, r()
                            }
                        }()
                }

                function e(n) {
                    r(n.instance)
                }

                function a(r) {
                    return (f || "function" != typeof fetch ? Promise.resolve().then((function() {
                        return V(H)
                    })) : fetch(H, {
                        credentials: "same-origin"
                    }).then((function(n) {
                        if (!n.ok) throw "failed to load wasm binary file at '" + H + "'";
                        return n.arrayBuffer()
                    })).catch((function() {
                        return V(H)
                    }))).then((function(r) {
                        return WebAssembly.instantiate(r, n)
                    })).then(r, (function(n) {
                        d("failed to asynchronously prepare wasm: " + n), B(n)
                    }))
                }
                if (D++, t.monitorRunDependencies && t.monitorRunDependencies(D), t.instantiateWasm) try {
                    return t.instantiateWasm(n, r)
                } catch (n) {
                    return d("Module.instantiateWasm callback failed with error: " + n), !1
                }(f || "function" != typeof WebAssembly.instantiateStreaming || z(H) || "function" != typeof fetch ? a(e) : fetch(H, {
                    credentials: "same-origin"
                }).then((function(r) {
                    return WebAssembly.instantiateStreaming(r, n).then(e, (function(n) {
                        return d("wasm streaming compile failed: " + n), d("falling back to ArrayBuffer instantiation"), a(e)
                    }))
                }))).catch(o)
            }(), t.___wasm_call_ctors = function() {
                return (t.___wasm_call_ctors = t.asm.x).apply(null, arguments)
            };
            var Dn, Mn = t._free = function() {
                    return (Mn = t._free = t.asm.y).apply(null, arguments)
                },
                Bn = t._malloc = function() {
                    return (Bn = t._malloc = t.asm.z).apply(null, arguments)
                },
                qn = t.___getTypeName = function() {
                    return (qn = t.___getTypeName = t.asm.A).apply(null, arguments)
                };

            function zn(n) {
                function r() {
                    Dn || (Dn = !0, t.calledRun = !0, p || (L(j), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), function() {
                        if (t.postRun)
                            for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) n = t.postRun.shift(), O.unshift(n);
                        var n;
                        L(O)
                    }()))
                }
                D > 0 || (! function() {
                    if (t.preRun)
                        for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) n = t.preRun.shift(), x.unshift(n);
                    var n;
                    L(x)
                }(), D > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout((function() {
                    setTimeout((function() {
                        t.setStatus("")
                    }), 1), r()
                }), 1)) : r()))
            }
            if (t.___embind_register_native_and_builtin_types = function() {
                    return (t.___embind_register_native_and_builtin_types = t.asm.B).apply(null, arguments)
                }, t.dynCall_jiji = function() {
                    return (t.dynCall_jiji = t.asm.D).apply(null, arguments)
                }, M = function n() {
                    Dn || zn(), Dn || (M = n)
                }, t.run = zn, t.preInit)
                for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) t.preInit.pop()();
            return zn(), t.ready
        }
    }();
    let p, h, v;
    async function y(n, t) {
        h || (h = async function() {
            if (await e.threads()) return a((await r("./avif_enc_mt-13bf1872")).default);
            return a((await r("./avif_enc-0d7d1363")).default)
        }());
        const o = (await h).encode(n.data, n.width, n.height, t);
        if (!o) throw new Error("Encoding error");
        return o.buffer
    }
    async function g(n, t) {
        v || (v = async function() {
            if (await e.threads()) return await e.simd() ? a((await r("./jxl_enc_mt_simd-7feb3ee4")).default) : a((await r("./jxl_enc_mt-25b2c513")).default);
            return a((await r("./jxl_enc-c802bba0")).default)
        }());
        const o = (await v).encode(n.data, n.width, n.height, t);
        if (!o) throw new Error("Encoding error.");
        return o.buffer
    }
    var m = function() {
        var r = n.uri;
        return function(t) {
            var e, o;
            (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise((function(n, r) {
                e = n, o = r
            }));
            var a, i = {};
            for (a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
            var u, c = "./this.program",
                f = function(n, r) {
                    throw r
                },
                s = "";
            s = self.location.href, r && (s = r), s = 0 !== s.indexOf("blob:") ? s.substr(0, s.lastIndexOf("/") + 1) : "", u = function(n) {
                var r = new XMLHttpRequest;
                return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
            };
            var l, d = t.print || console.log.bind(console),
                p = t.printErr || console.warn.bind(console);
            for (a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
            i = null, t.arguments && t.arguments, t.thisProgram && (c = t.thisProgram), t.quit && (f = t.quit), t.wasmBinary && (l = t.wasmBinary);
            var h, v = t.noExitRuntime || !0;
            "object" != typeof WebAssembly && H("no native wasm support detected");
            var y = !1,
                g = new TextDecoder("utf8");

            function m(n, r) {
                if (!n) return "";
                for (var t = n + r, e = n; !(e >= t) && _[e];) ++e;
                return g.decode(_.subarray(n, e))
            }
            var w, b, _, A, T, E, C, P, W, k, R = new TextDecoder("utf-16le");

            function F(n, r) {
                for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && T[e];) ++e;
                return t = e << 1, R.decode(_.subarray(n, t))
            }

            function U(n, r, t) {
                if (void 0 === t && (t = 2147483647), t < 2) return 0;
                for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0; a < o; ++a) {
                    var i = n.charCodeAt(a);
                    A[r >> 1] = i, r += 2
                }
                return A[r >> 1] = 0, r - e
            }

            function I(n) {
                return 2 * n.length
            }

            function S(n, r) {
                for (var t = 0, e = ""; !(t >= r / 4);) {
                    var o = E[n + 4 * t >> 2];
                    if (0 == o) break;
                    if (++t, o >= 65536) {
                        var a = o - 65536;
                        e += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                    } else e += String.fromCharCode(o)
                }
                return e
            }

            function x(n, r, t) {
                if (void 0 === t && (t = 2147483647), t < 4) return 0;
                for (var e = r, o = e + t - 4, a = 0; a < n.length; ++a) {
                    var i = n.charCodeAt(a);
                    if (i >= 55296 && i <= 57343) i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a);
                    if (E[r >> 2] = i, (r += 4) + 4 > o) break
                }
                return E[r >> 2] = 0, r - e
            }

            function j(n) {
                for (var r = 0, t = 0; t < n.length; ++t) {
                    var e = n.charCodeAt(t);
                    e >= 55296 && e <= 57343 && ++t, r += 4
                }
                return r
            }

            function O(n) {
                w = n, t.HEAP8 = b = new Int8Array(n), t.HEAP16 = A = new Int16Array(n), t.HEAP32 = E = new Int32Array(n), t.HEAPU8 = _ = new Uint8Array(n), t.HEAPU16 = T = new Uint16Array(n), t.HEAPU32 = C = new Uint32Array(n), t.HEAPF32 = P = new Float32Array(n), t.HEAPF64 = W = new Float64Array(n)
            }
            t.INITIAL_MEMORY;
            var D = [],
                M = [],
                B = [];
            var q = 0,
                z = null;

            function H(n) {
                t.onAbort && t.onAbort(n), p(n += ""), y = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
                var r = new WebAssembly.RuntimeError(n);
                throw o(r), r
            }
            t.preloadedImages = {}, t.preloadedAudios = {};
            var V;

            function L(n) {
                return n.startsWith("data:application/octet-stream;base64,")
            }
            if (t.locateFile) L(N = "mozjpeg_enc.wasm") || (V = N, N = t.locateFile ? t.locateFile(V, s) : s + V);
            else var N = new URL("/wasm/mozjpeg_enc-f6bf569c.wasm", n.uri).toString();

            function G(n) {
                try {
                    if (n == N && l) return new Uint8Array(l);
                    if (u) return u(n);
                    throw "both async and sync fetching of the wasm failed"
                } catch (n) {
                    H(n)
                }
            }

            function J(n) {
                for (; n.length > 0;) {
                    var r = n.shift();
                    if ("function" != typeof r) {
                        var e = r.func;
                        "number" == typeof e ? void 0 === r.arg ? k.get(e)() : k.get(e)(r.arg) : e(void 0 === r.arg ? null : r.arg)
                    } else r(t)
                }
            }

            function X() {
                return v || !1
            }
            var $ = {};

            function Y(n) {
                for (; n.length;) {
                    var r = n.pop();
                    n.pop()(r)
                }
            }

            function Z(n) {
                return this.fromWireType(C[n >> 2])
            }
            var K = {},
                Q = {},
                nn = {};

            function rn(n) {
                if (void 0 === n) return "_unknown";
                var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return r >= 48 && r <= 57 ? "_" + n : n
            }

            function tn(n, r) {
                return n = rn(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
            }

            function en(n, r) {
                var t = tn(r, (function(n) {
                    this.name = r, this.message = n;
                    var t = new Error(n).stack;
                    void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
                }));
                return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                }, t
            }
            var on = void 0;

            function an(n) {
                throw new on(n)
            }

            function un(n, r, t) {
                function e(r) {
                    var e = t(r);
                    e.length !== n.length && an("Mismatched type converter count");
                    for (var o = 0; o < n.length; ++o) pn(n[o], e[o])
                }
                n.forEach((function(n) {
                    nn[n] = r
                }));
                var o = new Array(r.length),
                    a = [],
                    i = 0;
                r.forEach((function(n, r) {
                    Q.hasOwnProperty(n) ? o[r] = Q[n] : (a.push(n), K.hasOwnProperty(n) || (K[n] = []), K[n].push((function() {
                        o[r] = Q[n], ++i === a.length && e(o)
                    })))
                })), 0 === a.length && e(o)
            }

            function cn(n) {
                switch (n) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + n)
                }
            }
            var fn = void 0;

            function sn(n) {
                for (var r = "", t = n; _[t];) r += fn[_[t++]];
                return r
            }
            var ln = void 0;

            function dn(n) {
                throw new ln(n)
            }

            function pn(n, r, t) {
                if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var e = r.name;
                if (n || dn('type "' + e + '" must have a positive integer typeid pointer'), Q.hasOwnProperty(n)) {
                    if (t.ignoreDuplicateRegistrations) return;
                    dn("Cannot register type '" + e + "' twice")
                }
                if (Q[n] = r, delete nn[n], K.hasOwnProperty(n)) {
                    var o = K[n];
                    delete K[n], o.forEach((function(n) {
                        n()
                    }))
                }
            }
            var hn = [],
                vn = [{}, {
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }];

            function yn(n) {
                n > 4 && 0 == --vn[n].refcount && (vn[n] = void 0, hn.push(n))
            }

            function gn() {
                for (var n = 0, r = 5; r < vn.length; ++r) void 0 !== vn[r] && ++n;
                return n
            }

            function mn() {
                for (var n = 5; n < vn.length; ++n)
                    if (void 0 !== vn[n]) return vn[n];
                return null
            }

            function wn(n) {
                switch (n) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        var r = hn.length ? hn.pop() : vn.length;
                        return vn[r] = {
                            refcount: 1,
                            value: n
                        }, r
                }
            }

            function bn(n) {
                if (null === n) return "null";
                var r = typeof n;
                return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
            }

            function _n(n, r) {
                switch (r) {
                    case 2:
                        return function(n) {
                            return this.fromWireType(P[n >> 2])
                        };
                    case 3:
                        return function(n) {
                            return this.fromWireType(W[n >> 3])
                        };
                    default:
                        throw new TypeError("Unknown float type: " + n)
                }
            }

            function An(n, r, t, e, o) {
                var a = r.length;
                a < 2 && dn("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var i = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                    if (null !== r[c] && void 0 === r[c].destructorFunction) {
                        u = !0;
                        break
                    } var f = "void" !== r[0].name,
                    s = "",
                    l = "";
                for (c = 0; c < a - 2; ++c) s += (0 !== c ? ", " : "") + "arg" + c, l += (0 !== c ? ", " : "") + "arg" + c + "Wired";
                var d = "return function " + rn(n) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
                u && (d += "var destructors = [];\n");
                var p = u ? "destructors" : "null",
                    h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                    v = [dn, e, o, Y, r[0], r[1]];
                i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n");
                for (c = 0; c < a - 2; ++c) d += "var arg" + c + "Wired = argType" + c + ".toWireType(" + p + ", arg" + c + "); // " + r[c + 2].name + "\n", h.push("argType" + c), v.push(r[c + 2]);
                if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), d += (f ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) d += "runDestructors(destructors);\n";
                else
                    for (c = i ? 1 : 2; c < r.length; ++c) {
                        var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                        null !== r[c].destructorFunction && (d += y + "_dtor(" + y + "); // " + r[c].name + "\n", h.push(y + "_dtor"), v.push(r[c].destructorFunction))
                    }
                return f && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", h.push(d),
                    function(n, r) {
                        if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                        var t = tn(n.name || "unknownFunctionName", (function() {}));
                        t.prototype = n.prototype;
                        var e = new t,
                            o = n.apply(e, r);
                        return o instanceof Object ? o : e
                    }(Function, h).apply(null, v)
            }

            function Tn(n, r, e) {
                t.hasOwnProperty(n) ? ((void 0 === e || void 0 !== t[n].overloadTable && void 0 !== t[n].overloadTable[e]) && dn("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                    if (void 0 === n[r].overloadTable) {
                        var e = n[r];
                        n[r] = function() {
                            return n[r].overloadTable.hasOwnProperty(arguments.length) || dn("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                        }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                    }
                }(t, n, n), t.hasOwnProperty(e) && dn("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), t[n].overloadTable[e] = r) : (t[n] = r, void 0 !== e && (t[n].numArguments = e))
            }

            function En(n, r, e) {
                return n.includes("j") ? function(n, r, e) {
                    var o = t["dynCall_" + n];
                    return e && e.length ? o.apply(null, [r].concat(e)) : o.call(null, r)
                }(n, r, e) : k.get(r).apply(null, e)
            }

            function Cn(n, r) {
                var t, e, o, a = (n = sn(n)).includes("j") ? (t = n, e = r, o = [], function() {
                    o.length = arguments.length;
                    for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                    return En(t, e, o)
                }) : k.get(r);
                return "function" != typeof a && dn("unknown function pointer with signature " + n + ": " + r), a
            }
            var Pn = void 0;

            function Wn(n) {
                var r = zn(n),
                    t = sn(r);
                return qn(r), t
            }

            function kn(n, r, t) {
                switch (r) {
                    case 0:
                        return t ? function(n) {
                            return b[n]
                        } : function(n) {
                            return _[n]
                        };
                    case 1:
                        return t ? function(n) {
                            return A[n >> 1]
                        } : function(n) {
                            return T[n >> 1]
                        };
                    case 2:
                        return t ? function(n) {
                            return E[n >> 2]
                        } : function(n) {
                            return C[n >> 2]
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + n)
                }
            }
            var Rn = {};

            function Fn() {
                return "object" == typeof globalThis ? globalThis : Function("return this")()
            }

            function Un(n, r) {
                var t = Q[n];
                return void 0 === t && dn(r + " has unknown type " + Wn(n)), t
            }
            var In = {};

            function Sn(n) {
                try {
                    return h.grow(n - w.byteLength + 65535 >>> 16), O(h.buffer), 1
                } catch (n) {}
            }
            var xn = {};

            function jn() {
                if (!jn.strings) {
                    var n = {
                        USER: "web_user",
                        LOGNAME: "web_user",
                        PATH: "/",
                        PWD: "/",
                        HOME: "/home/web_user",
                        LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                        _: c || "./this.program"
                    };
                    for (var r in xn) n[r] = xn[r];
                    var t = [];
                    for (var r in n) t.push(r + "=" + n[r]);
                    jn.strings = t
                }
                return jn.strings
            }
            var On = {
                mappings: {},
                buffers: [null, [],
                    []
                ],
                printChar: function(n, r) {
                    var t = On.buffers[n];
                    0 === r || 10 === r ? ((1 === n ? d : p)(function(n, r, t) {
                        for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                        return g.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                    }(t, 0)), t.length = 0) : t.push(r)
                },
                varargs: void 0,
                get: function() {
                    return On.varargs += 4, E[On.varargs - 4 >> 2]
                },
                getStr: function(n) {
                    return m(n)
                },
                get64: function(n, r) {
                    return n
                }
            };
            on = t.InternalError = en(Error, "InternalError"),
                function() {
                    for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
                    fn = n
                }(), ln = t.BindingError = en(Error, "BindingError"), t.count_emval_handles = gn, t.get_first_emval = mn, Pn = t.UnboundTypeError = en(Error, "UnboundTypeError");
            var Dn = {
                B: function(n, r) {},
                l: function(n) {
                    var r = $[n];
                    delete $[n];
                    var t = r.rawConstructor,
                        e = r.rawDestructor,
                        o = r.fields;
                    un([n], o.map((function(n) {
                        return n.getterReturnType
                    })).concat(o.map((function(n) {
                        return n.setterArgumentType
                    }))), (function(n) {
                        var a = {};
                        return o.forEach((function(r, t) {
                            var e = r.fieldName,
                                i = n[t],
                                u = r.getter,
                                c = r.getterContext,
                                f = n[t + o.length],
                                s = r.setter,
                                l = r.setterContext;
                            a[e] = {
                                read: function(n) {
                                    return i.fromWireType(u(c, n))
                                },
                                write: function(n, r) {
                                    var t = [];
                                    s(l, n, f.toWireType(t, r)), Y(t)
                                }
                            }
                        })), [{
                            name: r.name,
                            fromWireType: function(n) {
                                var r = {};
                                for (var t in a) r[t] = a[t].read(n);
                                return e(n), r
                            },
                            toWireType: function(n, r) {
                                for (var o in a)
                                    if (!(o in r)) throw new TypeError('Missing field:  "' + o + '"');
                                var i = t();
                                for (o in a) a[o].write(i, r[o]);
                                return null !== n && n.push(e, i), i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Z,
                            destructorFunction: e
                        }]
                    }))
                },
                p: function(n, r, t, e, o) {},
                y: function(n, r, t, e, o) {
                    var a = cn(t);
                    pn(n, {
                        name: r = sn(r),
                        fromWireType: function(n) {
                            return !!n
                        },
                        toWireType: function(n, r) {
                            return r ? e : o
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(n) {
                            var e;
                            if (1 === t) e = b;
                            else if (2 === t) e = A;
                            else {
                                if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                                e = E
                            }
                            return this.fromWireType(e[n >> a])
                        },
                        destructorFunction: null
                    })
                },
                x: function(n, r) {
                    pn(n, {
                        name: r = sn(r),
                        fromWireType: function(n) {
                            var r = vn[n].value;
                            return yn(n), r
                        },
                        toWireType: function(n, r) {
                            return wn(r)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Z,
                        destructorFunction: null
                    })
                },
                i: function(n, r, t) {
                    var e = cn(t);
                    pn(n, {
                        name: r = sn(r),
                        fromWireType: function(n) {
                            return n
                        },
                        toWireType: function(n, r) {
                            if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + bn(r) + '" to ' + this.name);
                            return r
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: _n(r, e),
                        destructorFunction: null
                    })
                },
                f: function(n, r, e, o, a, i) {
                    var u = function(n, r) {
                        for (var t = [], e = 0; e < n; e++) t.push(E[(r >> 2) + e]);
                        return t
                    }(r, e);
                    n = sn(n), a = Cn(o, a), Tn(n, (function() {
                        ! function(n, r) {
                            var t = [],
                                e = {};
                            throw r.forEach((function n(r) {
                                e[r] || Q[r] || (nn[r] ? nn[r].forEach(n) : (t.push(r), e[r] = !0))
                            })), new Pn(n + ": " + t.map(Wn).join([", "]))
                        }("Cannot call " + n + " due to unbound types", u)
                    }), r - 1), un([], u, (function(e) {
                        var o = [e[0], null].concat(e.slice(1));
                        return function(n, r, e) {
                            t.hasOwnProperty(n) || an("Replacing nonexistant public symbol"), void 0 !== t[n].overloadTable && void 0 !== e ? t[n].overloadTable[e] = r : (t[n] = r, t[n].argCount = e)
                        }(n, An(n, o, null, a, i), r - 1), []
                    }))
                },
                c: function(n, r, t, e, o) {
                    r = sn(r), -1 === o && (o = 4294967295);
                    var a = cn(t),
                        i = function(n) {
                            return n
                        };
                    if (0 === e) {
                        var u = 32 - 8 * t;
                        i = function(n) {
                            return n << u >>> u
                        }
                    }
                    var c = r.includes("unsigned");
                    pn(n, {
                        name: r,
                        fromWireType: i,
                        toWireType: function(n, t) {
                            if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + bn(t) + '" to ' + this.name);
                            if (t < e || t > o) throw new TypeError('Passing a number "' + bn(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                            return c ? t >>> 0 : 0 | t
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: kn(r, a, 0 !== e),
                        destructorFunction: null
                    })
                },
                b: function(n, r, t) {
                    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                    function o(n) {
                        var r = C,
                            t = r[n >>= 2],
                            o = r[n + 1];
                        return new e(w, o, t)
                    }
                    pn(n, {
                        name: t = sn(t),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                j: function(n, r) {
                    var t = "std::string" === (r = sn(r));
                    pn(n, {
                        name: r,
                        fromWireType: function(n) {
                            var r, e = C[n >> 2];
                            if (t)
                                for (var o = n + 4, a = 0; a <= e; ++a) {
                                    var i = n + 4 + a;
                                    if (a == e || 0 == _[i]) {
                                        var u = m(o, i - o);
                                        void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = i + 1
                                    }
                                } else {
                                    var c = new Array(e);
                                    for (a = 0; a < e; ++a) c[a] = String.fromCharCode(_[n + 4 + a]);
                                    r = c.join("")
                                }
                            return qn(n), r
                        },
                        toWireType: function(n, r) {
                            r instanceof ArrayBuffer && (r = new Uint8Array(r));
                            var e = "string" == typeof r;
                            e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || dn("Cannot pass non-string to std::string");
                            var o = (t && e ? function() {
                                    return function(n) {
                                        for (var r = 0, t = 0; t < n.length; ++t) {
                                            var e = n.charCodeAt(t);
                                            e >= 55296 && e <= 57343 && (e = 65536 + ((1023 & e) << 10) | 1023 & n.charCodeAt(++t)), e <= 127 ? ++r : r += e <= 2047 ? 2 : e <= 65535 ? 3 : 4
                                        }
                                        return r
                                    }(r)
                                } : function() {
                                    return r.length
                                })(),
                                a = Bn(4 + o + 1);
                            if (C[a >> 2] = o, t && e)(function(n, r, t, e) {
                                if (!(e > 0)) return 0;
                                for (var o = t, a = t + e - 1, i = 0; i < n.length; ++i) {
                                    var u = n.charCodeAt(i);
                                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & n.charCodeAt(++i)), u <= 127) {
                                        if (t >= a) break;
                                        r[t++] = u
                                    } else if (u <= 2047) {
                                        if (t + 1 >= a) break;
                                        r[t++] = 192 | u >> 6, r[t++] = 128 | 63 & u
                                    } else if (u <= 65535) {
                                        if (t + 2 >= a) break;
                                        r[t++] = 224 | u >> 12, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                                    } else {
                                        if (t + 3 >= a) break;
                                        r[t++] = 240 | u >> 18, r[t++] = 128 | u >> 12 & 63, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                                    }
                                }
                                r[t] = 0
                            })(r, _, a + 4, o + 1);
                            else if (e)
                                for (var i = 0; i < o; ++i) {
                                    var u = r.charCodeAt(i);
                                    u > 255 && (qn(a), dn("String has UTF-16 code units that do not fit in 8 bits")), _[a + 4 + i] = u
                                } else
                                    for (i = 0; i < o; ++i) _[a + 4 + i] = r[i];
                            return null !== n && n.push(qn, a), a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Z,
                        destructorFunction: function(n) {
                            qn(n)
                        }
                    })
                },
                e: function(n, r, t) {
                    var e, o, a, i, u;
                    t = sn(t), 2 === r ? (e = F, o = U, i = I, a = function() {
                        return T
                    }, u = 1) : 4 === r && (e = S, o = x, i = j, a = function() {
                        return C
                    }, u = 2), pn(n, {
                        name: t,
                        fromWireType: function(n) {
                            for (var t, o = C[n >> 2], i = a(), c = n + 4, f = 0; f <= o; ++f) {
                                var s = n + 4 + f * r;
                                if (f == o || 0 == i[s >> u]) {
                                    var l = e(c, s - c);
                                    void 0 === t ? t = l : (t += String.fromCharCode(0), t += l), c = s + r
                                }
                            }
                            return qn(n), t
                        },
                        toWireType: function(n, e) {
                            "string" != typeof e && dn("Cannot pass non-string to C++ string type " + t);
                            var a = i(e),
                                c = Bn(4 + a + r);
                            return C[c >> 2] = a >> u, o(e, c + 4, a + r), null !== n && n.push(qn, c), c
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Z,
                        destructorFunction: function(n) {
                            qn(n)
                        }
                    })
                },
                m: function(n, r, t, e, o, a) {
                    $[n] = {
                        name: sn(r),
                        rawConstructor: Cn(t, e),
                        rawDestructor: Cn(o, a),
                        fields: []
                    }
                },
                a: function(n, r, t, e, o, a, i, u, c, f) {
                    $[n].fields.push({
                        fieldName: sn(r),
                        getterReturnType: t,
                        getter: Cn(e, o),
                        getterContext: a,
                        setterArgumentType: i,
                        setter: Cn(u, c),
                        setterContext: f
                    })
                },
                z: function(n, r) {
                    pn(n, {
                        isVoid: !0,
                        name: r = sn(r),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function(n, r) {}
                    })
                },
                g: yn,
                u: function(n) {
                    return 0 === n ? wn(Fn()) : (n = void 0 === (t = Rn[r = n]) ? sn(r) : t, wn(Fn()[n]));
                    var r, t
                },
                k: function(n) {
                    n > 4 && (vn[n].refcount += 1)
                },
                n: function(n, r, e, o) {
                    n = function(n) {
                        return n || dn("Cannot use deleted val. handle = " + n), vn[n].value
                    }(n);
                    var a = In[r];
                    return a || (a = function(n) {
                        for (var r = "", e = 0; e < n; ++e) r += (0 !== e ? ", " : "") + "arg" + e;
                        var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                        for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                        return o += "var obj = new constructor(" + r + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(Un, t, wn)
                    }(r), In[r] = a), a(n, e, o)
                },
                h: function() {
                    H()
                },
                r: function(n, r, t) {
                    _.copyWithin(n, r, r + t)
                },
                d: function(n) {
                    var r, t, e = _.length,
                        o = 2147483648;
                    if ((n >>>= 0) > o) return !1;
                    for (var a = 1; a <= 4; a *= 2) {
                        var i = e * (1 + .2 / a);
                        if (i = Math.min(i, n + 100663296), Sn(Math.min(o, ((r = Math.max(n, i)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                    }
                    return !1
                },
                s: function(n, r) {
                    var t = 0;
                    return jn().forEach((function(e, o) {
                        var a = r + t;
                        E[n + 4 * o >> 2] = a,
                            function(n, r, t) {
                                for (var e = 0; e < n.length; ++e) b[r++ >> 0] = n.charCodeAt(e);
                                t || (b[r >> 0] = 0)
                            }(e, a), t += e.length + 1
                    })), 0
                },
                t: function(n, r) {
                    var t = jn();
                    E[n >> 2] = t.length;
                    var e = 0;
                    return t.forEach((function(n) {
                        e += n.length + 1
                    })), E[r >> 2] = e, 0
                },
                A: function(n) {
                    ! function(n, r) {
                        if (r && X() && 0 === n) return;
                        X() || (t.onExit && t.onExit(n), y = !0);
                        f(n, new Hn(n))
                    }(n)
                },
                w: function(n) {
                    return 0
                },
                o: function(n, r, t, e, o) {},
                v: function(n, r, t, e) {
                    for (var o = 0, a = 0; a < t; a++) {
                        for (var i = E[r + 8 * a >> 2], u = E[r + (8 * a + 4) >> 2], c = 0; c < u; c++) On.printChar(n, _[i + c]);
                        o += u
                    }
                    return E[e >> 2] = o, 0
                },
                q: function(n) {}
            };
            ! function() {
                var n = {
                    a: Dn
                };

                function r(n, r) {
                    var e, o = n.exports;
                    t.asm = o, O((h = t.asm.C).buffer), k = t.asm.I, e = t.asm.D, M.unshift(e),
                        function(n) {
                            if (q--, t.monitorRunDependencies && t.monitorRunDependencies(q), 0 == q && z) {
                                var r = z;
                                z = null, r()
                            }
                        }()
                }

                function e(n) {
                    r(n.instance)
                }

                function a(r) {
                    return (l || "function" != typeof fetch ? Promise.resolve().then((function() {
                        return G(N)
                    })) : fetch(N, {
                        credentials: "same-origin"
                    }).then((function(n) {
                        if (!n.ok) throw "failed to load wasm binary file at '" + N + "'";
                        return n.arrayBuffer()
                    })).catch((function() {
                        return G(N)
                    }))).then((function(r) {
                        return WebAssembly.instantiate(r, n)
                    })).then(r, (function(n) {
                        p("failed to asynchronously prepare wasm: " + n), H(n)
                    }))
                }
                if (q++, t.monitorRunDependencies && t.monitorRunDependencies(q), t.instantiateWasm) try {
                    return t.instantiateWasm(n, r)
                } catch (n) {
                    return p("Module.instantiateWasm callback failed with error: " + n), !1
                }(l || "function" != typeof WebAssembly.instantiateStreaming || L(N) || "function" != typeof fetch ? a(e) : fetch(N, {
                    credentials: "same-origin"
                }).then((function(r) {
                    return WebAssembly.instantiateStreaming(r, n).then(e, (function(n) {
                        return p("wasm streaming compile failed: " + n), p("falling back to ArrayBuffer instantiation"), a(e)
                    }))
                }))).catch(o)
            }(), t.___wasm_call_ctors = function() {
                return (t.___wasm_call_ctors = t.asm.D).apply(null, arguments)
            };
            var Mn, Bn = t._malloc = function() {
                    return (Bn = t._malloc = t.asm.E).apply(null, arguments)
                },
                qn = t._free = function() {
                    return (qn = t._free = t.asm.F).apply(null, arguments)
                },
                zn = t.___getTypeName = function() {
                    return (zn = t.___getTypeName = t.asm.G).apply(null, arguments)
                };

            function Hn(n) {
                this.name = "ExitStatus", this.message = "Program terminated with exit(" + n + ")", this.status = n
            }

            function Vn(n) {
                function r() {
                    Mn || (Mn = !0, t.calledRun = !0, y || (J(M), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), function() {
                        if (t.postRun)
                            for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) n = t.postRun.shift(), B.unshift(n);
                        var n;
                        J(B)
                    }()))
                }
                q > 0 || (! function() {
                    if (t.preRun)
                        for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) n = t.preRun.shift(), D.unshift(n);
                    var n;
                    J(D)
                }(), q > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout((function() {
                    setTimeout((function() {
                        t.setStatus("")
                    }), 1), r()
                }), 1)) : r()))
            }
            if (t.___embind_register_native_and_builtin_types = function() {
                    return (t.___embind_register_native_and_builtin_types = t.asm.H).apply(null, arguments)
                }, t.dynCall_jiji = function() {
                    return (t.dynCall_jiji = t.asm.J).apply(null, arguments)
                }, z = function n() {
                    Mn || Vn(), Mn || (z = n)
                }, t.run = Vn, t.preInit)
                for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) t.preInit.pop()();
            return Vn(), t.ready
        }
    }();
    let w, b, _, A;
    async function T(n, t) {
        b || (b = e.threads().then(n => n ? async function() {
            const {
                default: n,
                initThreadPool: t,
                optimise: e
            } = await r("./squoosh_oxipng-bcd760ee");
            return await n(), await t(navigator.hardwareConcurrency), e
        }(): async function() {
            const {
                default: n,
                optimise: t
            } = await r("./squoosh_oxipng-3f0e8351");
            return await n(), t
        }()));
        return (await b)(new Uint8Array(n), t.level, t.interlace).buffer
    }
    async function E(n, t) {
        _ || (_ = async function() {
            if (await e.simd()) return a((await r("./webp_enc_simd-2d7d2456")).default);
            return a((await r("./webp_enc-75623855")).default)
        }());
        const o = (await _).encode(n.data, n.width, n.height, t);
        if (!o) throw new Error("Encoding error.");
        return o.buffer
    }
    async function C(n, t) {
        A || (A = async function() {
            if (await e.threads()) return await e.simd() ? a((await r("./wp2_enc_mt_simd-109ebbc7")).default) : a((await r("./wp2_enc_mt-b95436aa")).default);
            return a((await r("./wp2_enc-9f185f33")).default)
        }());
        const o = (await A).encode(n.data, n.width, n.height, t);
        if (!o) throw new Error("Encoding error.");
        return o.buffer
    }
    const P = fetch("/wasm/rotate-e8fb6784.wasm").then(n => n.arrayBuffer()).then(n => WebAssembly.instantiate(n));
    var W = function() {
        var r = n.uri;
        return function(t) {
            var e, o;
            (t = void 0 !== (t = t || {}) ? t : {}).ready = new Promise((function(n, r) {
                e = n, o = r
            }));
            var a, i = {};
            for (a in t) t.hasOwnProperty(a) && (i[a] = t[a]);
            var u, c = "";
            c = self.location.href, r && (c = r), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "", u = function(n) {
                var r = new XMLHttpRequest;
                return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
            };
            var f, s, l = t.print || console.log.bind(console),
                d = t.printErr || console.warn.bind(console);
            for (a in i) i.hasOwnProperty(a) && (t[a] = i[a]);
            i = null, t.arguments && t.arguments, t.thisProgram && t.thisProgram, t.quit && t.quit, t.wasmBinary && (f = t.wasmBinary), t.noExitRuntime, "object" != typeof WebAssembly && B("no native wasm support detected");
            var p = !1,
                h = new TextDecoder("utf8");

            function v(n, r) {
                if (!n) return "";
                for (var t = n + r, e = n; !(e >= t) && m[e];) ++e;
                return h.decode(m.subarray(n, e))
            }
            var y, g, m, w, b, _, A, T, E, C, P = new TextDecoder("utf-16le");

            function W(n, r) {
                for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && b[e];) ++e;
                return t = e << 1, P.decode(m.subarray(n, t))
            }

            function k(n, r, t) {
                if (void 0 === t && (t = 2147483647), t < 2) return 0;
                for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0; a < o; ++a) {
                    var i = n.charCodeAt(a);
                    w[r >> 1] = i, r += 2
                }
                return w[r >> 1] = 0, r - e
            }

            function R(n) {
                return 2 * n.length
            }

            function F(n, r) {
                for (var t = 0, e = ""; !(t >= r / 4);) {
                    var o = _[n + 4 * t >> 2];
                    if (0 == o) break;
                    if (++t, o >= 65536) {
                        var a = o - 65536;
                        e += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                    } else e += String.fromCharCode(o)
                }
                return e
            }

            function U(n, r, t) {
                if (void 0 === t && (t = 2147483647), t < 4) return 0;
                for (var e = r, o = e + t - 4, a = 0; a < n.length; ++a) {
                    var i = n.charCodeAt(a);
                    if (i >= 55296 && i <= 57343) i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a);
                    if (_[r >> 2] = i, (r += 4) + 4 > o) break
                }
                return _[r >> 2] = 0, r - e
            }

            function I(n) {
                for (var r = 0, t = 0; t < n.length; ++t) {
                    var e = n.charCodeAt(t);
                    e >= 55296 && e <= 57343 && ++t, r += 4
                }
                return r
            }

            function S(n) {
                y = n, t.HEAP8 = g = new Int8Array(n), t.HEAP16 = w = new Int16Array(n), t.HEAP32 = _ = new Int32Array(n), t.HEAPU8 = m = new Uint8Array(n), t.HEAPU16 = b = new Uint16Array(n), t.HEAPU32 = A = new Uint32Array(n), t.HEAPF32 = T = new Float32Array(n), t.HEAPF64 = E = new Float64Array(n)
            }
            t.INITIAL_MEMORY;
            var x = [],
                j = [],
                O = [];
            var D = 0,
                M = null;

            function B(n) {
                t.onAbort && t.onAbort(n), d(n += ""), p = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
                var r = new WebAssembly.RuntimeError(n);
                throw o(r), r
            }
            t.preloadedImages = {}, t.preloadedAudios = {};
            var q;

            function z(n) {
                return n.startsWith("data:application/octet-stream;base64,")
            }
            if (t.locateFile) z(H = "imagequant.wasm") || (q = H, H = t.locateFile ? t.locateFile(q, c) : c + q);
            else var H = new URL("/wasm/imagequant-a10bbe1a.wasm", n.uri).toString();

            function V(n) {
                try {
                    if (n == H && f) return new Uint8Array(f);
                    if (u) return u(n);
                    throw "both async and sync fetching of the wasm failed"
                } catch (n) {
                    B(n)
                }
            }

            function L(n) {
                for (; n.length > 0;) {
                    var r = n.shift();
                    if ("function" != typeof r) {
                        var e = r.func;
                        "number" == typeof e ? void 0 === r.arg ? C.get(e)() : C.get(e)(r.arg) : e(void 0 === r.arg ? null : r.arg)
                    } else r(t)
                }
            }

            function N(n) {
                switch (n) {
                    case 1:
                        return 0;
                    case 2:
                        return 1;
                    case 4:
                        return 2;
                    case 8:
                        return 3;
                    default:
                        throw new TypeError("Unknown type size: " + n)
                }
            }
            var G = void 0;

            function J(n) {
                for (var r = "", t = n; m[t];) r += G[m[t++]];
                return r
            }
            var X = {},
                $ = {},
                Y = {};

            function Z(n) {
                if (void 0 === n) return "_unknown";
                var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                return r >= 48 && r <= 57 ? "_" + n : n
            }

            function K(n, r) {
                return n = Z(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
            }

            function Q(n, r) {
                var t = K(r, (function(n) {
                    this.name = r, this.message = n;
                    var t = new Error(n).stack;
                    void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
                }));
                return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                    return void 0 === this.message ? this.name : this.name + ": " + this.message
                }, t
            }
            var nn = void 0;

            function rn(n) {
                throw new nn(n)
            }
            var tn = void 0;

            function en(n) {
                throw new tn(n)
            }

            function on(n, r, t) {
                if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                var e = r.name;
                if (n || rn('type "' + e + '" must have a positive integer typeid pointer'), $.hasOwnProperty(n)) {
                    if (t.ignoreDuplicateRegistrations) return;
                    rn("Cannot register type '" + e + "' twice")
                }
                if ($[n] = r, delete Y[n], X.hasOwnProperty(n)) {
                    var o = X[n];
                    delete X[n], o.forEach((function(n) {
                        n()
                    }))
                }
            }
            var an = [],
                un = [{}, {
                    value: void 0
                }, {
                    value: null
                }, {
                    value: !0
                }, {
                    value: !1
                }];

            function cn(n) {
                n > 4 && 0 == --un[n].refcount && (un[n] = void 0, an.push(n))
            }

            function fn() {
                for (var n = 0, r = 5; r < un.length; ++r) void 0 !== un[r] && ++n;
                return n
            }

            function sn() {
                for (var n = 5; n < un.length; ++n)
                    if (void 0 !== un[n]) return un[n];
                return null
            }

            function ln(n) {
                switch (n) {
                    case void 0:
                        return 1;
                    case null:
                        return 2;
                    case !0:
                        return 3;
                    case !1:
                        return 4;
                    default:
                        var r = an.length ? an.pop() : un.length;
                        return un[r] = {
                            refcount: 1,
                            value: n
                        }, r
                }
            }

            function dn(n) {
                return this.fromWireType(A[n >> 2])
            }

            function pn(n) {
                if (null === n) return "null";
                var r = typeof n;
                return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
            }

            function hn(n, r) {
                switch (r) {
                    case 2:
                        return function(n) {
                            return this.fromWireType(T[n >> 2])
                        };
                    case 3:
                        return function(n) {
                            return this.fromWireType(E[n >> 3])
                        };
                    default:
                        throw new TypeError("Unknown float type: " + n)
                }
            }

            function vn(n) {
                for (; n.length;) {
                    var r = n.pop();
                    n.pop()(r)
                }
            }

            function yn(n, r, t, e, o) {
                var a = r.length;
                a < 2 && rn("argTypes array size mismatch! Must at least get return value and 'this' types!");
                for (var i = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                    if (null !== r[c] && void 0 === r[c].destructorFunction) {
                        u = !0;
                        break
                    } var f = "void" !== r[0].name,
                    s = "",
                    l = "";
                for (c = 0; c < a - 2; ++c) s += (0 !== c ? ", " : "") + "arg" + c, l += (0 !== c ? ", " : "") + "arg" + c + "Wired";
                var d = "return function " + Z(n) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
                u && (d += "var destructors = [];\n");
                var p = u ? "destructors" : "null",
                    h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                    v = [rn, e, o, vn, r[0], r[1]];
                i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n");
                for (c = 0; c < a - 2; ++c) d += "var arg" + c + "Wired = argType" + c + ".toWireType(" + p + ", arg" + c + "); // " + r[c + 2].name + "\n", h.push("argType" + c), v.push(r[c + 2]);
                if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), d += (f ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) d += "runDestructors(destructors);\n";
                else
                    for (c = i ? 1 : 2; c < r.length; ++c) {
                        var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                        null !== r[c].destructorFunction && (d += y + "_dtor(" + y + "); // " + r[c].name + "\n", h.push(y + "_dtor"), v.push(r[c].destructorFunction))
                    }
                return f && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", h.push(d),
                    function(n, r) {
                        if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                        var t = K(n.name || "unknownFunctionName", (function() {}));
                        t.prototype = n.prototype;
                        var e = new t,
                            o = n.apply(e, r);
                        return o instanceof Object ? o : e
                    }(Function, h).apply(null, v)
            }

            function gn(n, r, e) {
                t.hasOwnProperty(n) ? ((void 0 === e || void 0 !== t[n].overloadTable && void 0 !== t[n].overloadTable[e]) && rn("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                    if (void 0 === n[r].overloadTable) {
                        var e = n[r];
                        n[r] = function() {
                            return n[r].overloadTable.hasOwnProperty(arguments.length) || rn("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                        }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                    }
                }(t, n, n), t.hasOwnProperty(e) && rn("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), t[n].overloadTable[e] = r) : (t[n] = r, void 0 !== e && (t[n].numArguments = e))
            }

            function mn(n, r, e) {
                return n.includes("j") ? function(n, r, e) {
                    var o = t["dynCall_" + n];
                    return e && e.length ? o.apply(null, [r].concat(e)) : o.call(null, r)
                }(n, r, e) : C.get(r).apply(null, e)
            }

            function wn(n, r) {
                var t, e, o, a = (n = J(n)).includes("j") ? (t = n, e = r, o = [], function() {
                    o.length = arguments.length;
                    for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                    return mn(t, e, o)
                }) : C.get(r);
                return "function" != typeof a && rn("unknown function pointer with signature " + n + ": " + r), a
            }
            var bn = void 0;

            function _n(n) {
                var r = Sn(n),
                    t = J(r);
                return In(r), t
            }

            function An(n, r, t) {
                switch (r) {
                    case 0:
                        return t ? function(n) {
                            return g[n]
                        } : function(n) {
                            return m[n]
                        };
                    case 1:
                        return t ? function(n) {
                            return w[n >> 1]
                        } : function(n) {
                            return b[n >> 1]
                        };
                    case 2:
                        return t ? function(n) {
                            return _[n >> 2]
                        } : function(n) {
                            return A[n >> 2]
                        };
                    default:
                        throw new TypeError("Unknown integer type: " + n)
                }
            }
            var Tn = {};

            function En() {
                return "object" == typeof globalThis ? globalThis : Function("return this")()
            }

            function Cn(n, r) {
                var t = $[n];
                return void 0 === t && rn(r + " has unknown type " + _n(n)), t
            }
            var Pn = {};

            function Wn(n) {
                try {
                    return s.grow(n - y.byteLength + 65535 >>> 16), S(s.buffer), 1
                } catch (n) {}
            }
            var kn = {
                mappings: {},
                buffers: [null, [],
                    []
                ],
                printChar: function(n, r) {
                    var t = kn.buffers[n];
                    0 === r || 10 === r ? ((1 === n ? l : d)(function(n, r, t) {
                        for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                        return h.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                    }(t, 0)), t.length = 0) : t.push(r)
                },
                varargs: void 0,
                get: function() {
                    return kn.varargs += 4, _[kn.varargs - 4 >> 2]
                },
                getStr: function(n) {
                    return v(n)
                },
                get64: function(n, r) {
                    return n
                }
            };
            ! function() {
                for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
                G = n
            }(), nn = t.BindingError = Q(Error, "BindingError"), tn = t.InternalError = Q(Error, "InternalError"), t.count_emval_handles = fn, t.get_first_emval = sn, bn = t.UnboundTypeError = Q(Error, "UnboundTypeError");
            var Rn = {
                m: function(n, r) {},
                q: function(n, r, t, e, o) {},
                n: function(n, r, t, e, o) {
                    var a = N(t);
                    on(n, {
                        name: r = J(r),
                        fromWireType: function(n) {
                            return !!n
                        },
                        toWireType: function(n, r) {
                            return r ? e : o
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(n) {
                            var e;
                            if (1 === t) e = g;
                            else if (2 === t) e = w;
                            else {
                                if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                                e = _
                            }
                            return this.fromWireType(e[n >> a])
                        },
                        destructorFunction: null
                    })
                },
                v: function(n, r) {
                    on(n, {
                        name: r = J(r),
                        fromWireType: function(n) {
                            var r = un[n].value;
                            return cn(n), r
                        },
                        toWireType: function(n, r) {
                            return ln(r)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: dn,
                        destructorFunction: null
                    })
                },
                l: function(n, r, t) {
                    var e = N(t);
                    on(n, {
                        name: r = J(r),
                        fromWireType: function(n) {
                            return n
                        },
                        toWireType: function(n, r) {
                            if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + pn(r) + '" to ' + this.name);
                            return r
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: hn(r, e),
                        destructorFunction: null
                    })
                },
                c: function(n, r, e, o, a, i) {
                    var u = function(n, r) {
                        for (var t = [], e = 0; e < n; e++) t.push(_[(r >> 2) + e]);
                        return t
                    }(r, e);
                    n = J(n), a = wn(o, a), gn(n, (function() {
                            ! function(n, r) {
                                var t = [],
                                    e = {};
                                throw r.forEach((function n(r) {
                                    e[r] || $[r] || (Y[r] ? Y[r].forEach(n) : (t.push(r), e[r] = !0))
                                })), new bn(n + ": " + t.map(_n).join([", "]))
                            }("Cannot call " + n + " due to unbound types", u)
                        }), r - 1),
                        function(n, r, t) {
                            function e(r) {
                                var e = t(r);
                                e.length !== n.length && en("Mismatched type converter count");
                                for (var o = 0; o < n.length; ++o) on(n[o], e[o])
                            }
                            n.forEach((function(n) {
                                Y[n] = r
                            }));
                            var o = new Array(r.length),
                                a = [],
                                i = 0;
                            r.forEach((function(n, r) {
                                $.hasOwnProperty(n) ? o[r] = $[n] : (a.push(n), X.hasOwnProperty(n) || (X[n] = []), X[n].push((function() {
                                    o[r] = $[n], ++i === a.length && e(o)
                                })))
                            })), 0 === a.length && e(o)
                        }([], u, (function(e) {
                            var o = [e[0], null].concat(e.slice(1));
                            return function(n, r, e) {
                                t.hasOwnProperty(n) || en("Replacing nonexistant public symbol"), void 0 !== t[n].overloadTable && void 0 !== e ? t[n].overloadTable[e] = r : (t[n] = r, t[n].argCount = e)
                            }(n, yn(n, o, null, a, i), r - 1), []
                        }))
                },
                b: function(n, r, t, e, o) {
                    r = J(r), -1 === o && (o = 4294967295);
                    var a = N(t),
                        i = function(n) {
                            return n
                        };
                    if (0 === e) {
                        var u = 32 - 8 * t;
                        i = function(n) {
                            return n << u >>> u
                        }
                    }
                    var c = r.includes("unsigned");
                    on(n, {
                        name: r,
                        fromWireType: i,
                        toWireType: function(n, t) {
                            if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + pn(t) + '" to ' + this.name);
                            if (t < e || t > o) throw new TypeError('Passing a number "' + pn(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                            return c ? t >>> 0 : 0 | t
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: An(r, a, 0 !== e),
                        destructorFunction: null
                    })
                },
                a: function(n, r, t) {
                    var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                    function o(n) {
                        var r = A,
                            t = r[n >>= 2],
                            o = r[n + 1];
                        return new e(y, o, t)
                    }
                    on(n, {
                        name: t = J(t),
                        fromWireType: o,
                        argPackAdvance: 8,
                        readValueFromPointer: o
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                h: function(n, r) {
                    var t = "std::string" === (r = J(r));
                    on(n, {
                        name: r,
                        fromWireType: function(n) {
                            var r, e = A[n >> 2];
                            if (t)
                                for (var o = n + 4, a = 0; a <= e; ++a) {
                                    var i = n + 4 + a;
                                    if (a == e || 0 == m[i]) {
                                        var u = v(o, i - o);
                                        void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = i + 1
                                    }
                                } else {
                                    var c = new Array(e);
                                    for (a = 0; a < e; ++a) c[a] = String.fromCharCode(m[n + 4 + a]);
                                    r = c.join("")
                                }
                            return In(n), r
                        },
                        toWireType: function(n, r) {
                            r instanceof ArrayBuffer && (r = new Uint8Array(r));
                            var e = "string" == typeof r;
                            e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || rn("Cannot pass non-string to std::string");
                            var o = (t && e ? function() {
                                    return function(n) {
                                        for (var r = 0, t = 0; t < n.length; ++t) {
                                            var e = n.charCodeAt(t);
                                            e >= 55296 && e <= 57343 && (e = 65536 + ((1023 & e) << 10) | 1023 & n.charCodeAt(++t)), e <= 127 ? ++r : r += e <= 2047 ? 2 : e <= 65535 ? 3 : 4
                                        }
                                        return r
                                    }(r)
                                } : function() {
                                    return r.length
                                })(),
                                a = Un(4 + o + 1);
                            if (A[a >> 2] = o, t && e)(function(n, r, t, e) {
                                if (!(e > 0)) return 0;
                                for (var o = t, a = t + e - 1, i = 0; i < n.length; ++i) {
                                    var u = n.charCodeAt(i);
                                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & n.charCodeAt(++i)), u <= 127) {
                                        if (t >= a) break;
                                        r[t++] = u
                                    } else if (u <= 2047) {
                                        if (t + 1 >= a) break;
                                        r[t++] = 192 | u >> 6, r[t++] = 128 | 63 & u
                                    } else if (u <= 65535) {
                                        if (t + 2 >= a) break;
                                        r[t++] = 224 | u >> 12, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                                    } else {
                                        if (t + 3 >= a) break;
                                        r[t++] = 240 | u >> 18, r[t++] = 128 | u >> 12 & 63, r[t++] = 128 | u >> 6 & 63, r[t++] = 128 | 63 & u
                                    }
                                }
                                r[t] = 0
                            })(r, m, a + 4, o + 1);
                            else if (e)
                                for (var i = 0; i < o; ++i) {
                                    var u = r.charCodeAt(i);
                                    u > 255 && (In(a), rn("String has UTF-16 code units that do not fit in 8 bits")), m[a + 4 + i] = u
                                } else
                                    for (i = 0; i < o; ++i) m[a + 4 + i] = r[i];
                            return null !== n && n.push(In, a), a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: dn,
                        destructorFunction: function(n) {
                            In(n)
                        }
                    })
                },
                f: function(n, r, t) {
                    var e, o, a, i, u;
                    t = J(t), 2 === r ? (e = W, o = k, i = R, a = function() {
                        return b
                    }, u = 1) : 4 === r && (e = F, o = U, i = I, a = function() {
                        return A
                    }, u = 2), on(n, {
                        name: t,
                        fromWireType: function(n) {
                            for (var t, o = A[n >> 2], i = a(), c = n + 4, f = 0; f <= o; ++f) {
                                var s = n + 4 + f * r;
                                if (f == o || 0 == i[s >> u]) {
                                    var l = e(c, s - c);
                                    void 0 === t ? t = l : (t += String.fromCharCode(0), t += l), c = s + r
                                }
                            }
                            return In(n), t
                        },
                        toWireType: function(n, e) {
                            "string" != typeof e && rn("Cannot pass non-string to C++ string type " + t);
                            var a = i(e),
                                c = Un(4 + a + r);
                            return A[c >> 2] = a >> u, o(e, c + 4, a + r), null !== n && n.push(In, c), c
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: dn,
                        destructorFunction: function(n) {
                            In(n)
                        }
                    })
                },
                o: function(n, r) {
                    on(n, {
                        isVoid: !0,
                        name: r = J(r),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function(n, r) {}
                    })
                },
                d: cn,
                k: function(n) {
                    return 0 === n ? ln(En()) : (n = void 0 === (t = Tn[r = n]) ? J(r) : t, ln(En()[n]));
                    var r, t
                },
                i: function(n) {
                    n > 4 && (un[n].refcount += 1)
                },
                j: function(n, r, e, o) {
                    n = function(n) {
                        return n || rn("Cannot use deleted val. handle = " + n), un[n].value
                    }(n);
                    var a = Pn[r];
                    return a || (a = function(n) {
                        for (var r = "", e = 0; e < n; ++e) r += (0 !== e ? ", " : "") + "arg" + e;
                        var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                        for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                        return o += "var obj = new constructor(" + r + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(Cn, t, ln)
                    }(r), Pn[r] = a), a(n, e, o)
                },
                g: function() {
                    B()
                },
                s: function(n, r, t) {
                    m.copyWithin(n, r, r + t)
                },
                e: function(n) {
                    var r, t, e = m.length,
                        o = 2147483648;
                    if ((n >>>= 0) > o) return !1;
                    for (var a = 1; a <= 4; a *= 2) {
                        var i = e * (1 + .2 / a);
                        if (i = Math.min(i, n + 100663296), Wn(Math.min(o, ((r = Math.max(n, i)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                    }
                    return !1
                },
                u: function(n) {
                    return 0
                },
                p: function(n, r, t, e, o) {},
                t: function(n, r, t, e) {
                    for (var o = 0, a = 0; a < t; a++) {
                        for (var i = _[r + 8 * a >> 2], u = _[r + (8 * a + 4) >> 2], c = 0; c < u; c++) kn.printChar(n, m[i + c]);
                        o += u
                    }
                    return _[e >> 2] = o, 0
                },
                r: function(n) {}
            };
            ! function() {
                var n = {
                    a: Rn
                };

                function r(n, r) {
                    var e, o = n.exports;
                    t.asm = o, S((s = t.asm.w).buffer), C = t.asm.C, e = t.asm.x, j.unshift(e),
                        function(n) {
                            if (D--, t.monitorRunDependencies && t.monitorRunDependencies(D), 0 == D && M) {
                                var r = M;
                                M = null, r()
                            }
                        }()
                }

                function e(n) {
                    r(n.instance)
                }

                function a(r) {
                    return (f || "function" != typeof fetch ? Promise.resolve().then((function() {
                        return V(H)
                    })) : fetch(H, {
                        credentials: "same-origin"
                    }).then((function(n) {
                        if (!n.ok) throw "failed to load wasm binary file at '" + H + "'";
                        return n.arrayBuffer()
                    })).catch((function() {
                        return V(H)
                    }))).then((function(r) {
                        return WebAssembly.instantiate(r, n)
                    })).then(r, (function(n) {
                        d("failed to asynchronously prepare wasm: " + n), B(n)
                    }))
                }
                if (D++, t.monitorRunDependencies && t.monitorRunDependencies(D), t.instantiateWasm) try {
                    return t.instantiateWasm(n, r)
                } catch (n) {
                    return d("Module.instantiateWasm callback failed with error: " + n), !1
                }(f || "function" != typeof WebAssembly.instantiateStreaming || z(H) || "function" != typeof fetch ? a(e) : fetch(H, {
                    credentials: "same-origin"
                }).then((function(r) {
                    return WebAssembly.instantiateStreaming(r, n).then(e, (function(n) {
                        return d("wasm streaming compile failed: " + n), d("falling back to ArrayBuffer instantiation"), a(e)
                    }))
                }))).catch(o)
            }(), t.___wasm_call_ctors = function() {
                return (t.___wasm_call_ctors = t.asm.x).apply(null, arguments)
            };
            var Fn, Un = t._malloc = function() {
                    return (Un = t._malloc = t.asm.y).apply(null, arguments)
                },
                In = t._free = function() {
                    return (In = t._free = t.asm.z).apply(null, arguments)
                },
                Sn = t.___getTypeName = function() {
                    return (Sn = t.___getTypeName = t.asm.A).apply(null, arguments)
                };

            function xn(n) {
                function r() {
                    Fn || (Fn = !0, t.calledRun = !0, p || (L(j), e(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), function() {
                        if (t.postRun)
                            for ("function" == typeof t.postRun && (t.postRun = [t.postRun]); t.postRun.length;) n = t.postRun.shift(), O.unshift(n);
                        var n;
                        L(O)
                    }()))
                }
                D > 0 || (! function() {
                    if (t.preRun)
                        for ("function" == typeof t.preRun && (t.preRun = [t.preRun]); t.preRun.length;) n = t.preRun.shift(), x.unshift(n);
                    var n;
                    L(x)
                }(), D > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout((function() {
                    setTimeout((function() {
                        t.setStatus("")
                    }), 1), r()
                }), 1)) : r()))
            }
            if (t.___embind_register_native_and_builtin_types = function() {
                    return (t.___embind_register_native_and_builtin_types = t.asm.B).apply(null, arguments)
                }, t.dynCall_jiji = function() {
                    return (t.dynCall_jiji = t.asm.D).apply(null, arguments)
                }, M = function n() {
                    Fn || xn(), Fn || (M = n)
                }, t.run = xn, t.preInit)
                for ("function" == typeof t.preInit && (t.preInit = [t.preInit]); t.preInit.length > 0;) t.preInit.pop()();
            return xn(), t.ready
        }
    }();
    let k, R;
    let F = null;
    let U = 0;

    function I(n, r) {
        const t = r(1 * n.length);
        return (null !== F && F.buffer === R.memory.buffer || (F = new Uint8Array(R.memory.buffer)), F).set(n, t / 1), U = n.length, t
    }
    let S = null;

    function x() {
        return null !== S && S.buffer === R.memory.buffer || (S = new Int32Array(R.memory.buffer)), S
    }
    let j, O = null;

    function D(n, r) {
        return (null !== O && O.buffer === R.memory.buffer || (O = new Uint8ClampedArray(R.memory.buffer)), O).subarray(n / 1, n / 1 + r)
    }
    async function M(r) {
        void 0 === r && (r = new URL("/wasm/squoosh_resize_bg-3d426466.wasm", n.uri));
        ("string" == typeof r || "function" == typeof Request && r instanceof Request || "function" == typeof URL && r instanceof URL) && (r = fetch(r));
        const {
            instance: t,
            module: e
        } = await async function(n, r) {
            if ("function" == typeof Response && n instanceof Response) {
                if ("function" == typeof WebAssembly.instantiateStreaming) try {
                    return await WebAssembly.instantiateStreaming(n, r)
                } catch (r) {
                    if ("application/wasm" == n.headers.get("Content-Type")) throw r;
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r)
                }
                const t = await n.arrayBuffer();
                return await WebAssembly.instantiate(t, r)
            } {
                const t = await WebAssembly.instantiate(n, r);
                return t instanceof WebAssembly.Instance ? {
                    instance: t,
                    module: n
                } : t
            }
        }(await r, {});
        return R = t.exports, M.__wbindgen_wasm_module = e, R
    }
    let B = null;

    function q() {
        return null !== B && B.buffer === j.memory.buffer || (B = new Uint32Array(j.memory.buffer)), B
    }
    let z = 0;
    let H = null;

    function V() {
        return null !== H && H.buffer === j.memory.buffer || (H = new Int32Array(j.memory.buffer)), H
    }

    function L(n, r, t, e) {
        try {
            const l = j.__wbindgen_add_to_stack_pointer(-16);
            var o = function(n, r) {
                    const t = r(4 * n.length);
                    return q().set(n, t / 4), z = n.length, t
                }(n, j.__wbindgen_malloc),
                a = z;
            j.resize(l, o, a, r, t, e);
            var i = V()[l / 4 + 0],
                u = V()[l / 4 + 1],
                c = (f = i, s = u, q().subarray(f / 4, f / 4 + s)).slice();
            return j.__wbindgen_free(i, 4 * u), c
        } finally {
            j.__wbindgen_add_to_stack_pointer(16)
        }
        var f, s
    }
    async function N(r) {
        void 0 === r && (r = new URL("/wasm/squooshhqx_bg-6e04a330.wasm", n.uri));
        ("string" == typeof r || "function" == typeof Request && r instanceof Request || "function" == typeof URL && r instanceof URL) && (r = fetch(r));
        const {
            instance: t,
            module: e
        } = await async function(n, r) {
            if ("function" == typeof Response && n instanceof Response) {
                if ("function" == typeof WebAssembly.instantiateStreaming) try {
                    return await WebAssembly.instantiateStreaming(n, r)
                } catch (r) {
                    if ("application/wasm" == n.headers.get("Content-Type")) throw r;
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r)
                }
                const t = await n.arrayBuffer();
                return await WebAssembly.instantiate(t, r)
            } {
                const t = await WebAssembly.instantiate(n, r);
                return t instanceof WebAssembly.Instance ? {
                    instance: t,
                    module: n
                } : t
            }
        }(await r, {});
        return j = t.exports, N.__wbindgen_wasm_module = e, j
    }
    const G = ["triangle", "catrom", "mitchell", "lanczos3"];
    let J, X;
    async function $(n, r) {
        X || (X = N()), await X;
        const t = r.width / n.width,
            e = r.height / n.height,
            o = Math.max(t, e),
            a = function(n, {
                min: r = Number.MIN_VALUE,
                max: t = Number.MAX_VALUE
            }) {
                return Math.min(Math.max(n, r), t)
            }(Math.ceil(o), {
                min: 1,
                max: 4
            });
        if (1 === a) return n;
        const i = L(new Uint32Array(n.data.buffer), n.width, n.height, a);
        return new ImageData(new Uint8ClampedArray(i.buffer), n.width * a, n.height * a)
    }
    async function Y(n, r) {
        let e = n;
        if (J || (J = M()), function(n) {
                return "hqx" === n.method
            }(r) && (e = await $(e, r), r = {
                ...r,
                method: "catrom"
            }), await J, "contain" === r.fitMethod) {
            const {
                sx: o,
                sy: a,
                sw: i,
                sh: u
            } = t.getContainOffsets(n.width, n.height, r.width, r.height);
            e = function(n, r, t, e, o) {
                const a = new Uint32Array(n.data.buffer);
                for (let i = 0; i < o; i += 1) {
                    const o = (i + t) * n.width + r;
                    a.copyWithin(i * e, o, o + e)
                }
                return new ImageData(new Uint8ClampedArray(a.buffer.slice(0, e * o * 4)), e, o)
            }(e, Math.round(o), Math.round(a), Math.round(i), Math.round(u))
        }
        const o = function(n, r, t, e, o, a, i, u) {
            try {
                const p = R.__wbindgen_add_to_stack_pointer(-16);
                var c = I(n, R.__wbindgen_malloc),
                    f = U;
                R.resize(p, c, f, r, t, e, o, a, i, u);
                var s = x()[p / 4 + 0],
                    l = x()[p / 4 + 1],
                    d = D(s, l).slice();
                return R.__wbindgen_free(s, 1 * l), d
            } finally {
                R.__wbindgen_add_to_stack_pointer(16)
            }
        }(new Uint8Array(e.data.buffer), e.width, e.height, r.width, r.height, G.indexOf(r.method), r.premultiply, r.linearRGB);
        return new ImageData(new Uint8ClampedArray(o.buffer), r.width, r.height)
    }
    const Z = {
        avifDecode: (...n) => o("avifDecode", () => async function(n) {
            if (!u) {
                const n = await r("./avif_dec-a561c24f");
                u = a(n.default)
            }
            const [t, e] = await Promise.all([u, i(n)]), o = t.decode(e);
            if (!o) throw new Error("Decoding error");
            return o
        }(...n)),
        jxlDecode: (...n) => o("jxlDecode", () => async function(n) {
            s || (s = a(f));
            const [r, t] = await Promise.all([s, i(n)]), e = r.decode(t);
            if (!e) throw new Error("Decoding error");
            return e
        }(...n)),
        webpDecode: (...n) => o("webpDecode", () => async function(n) {
            if (!l) {
                const n = await r("./webp_dec-36c82cbe");
                l = a(n.default)
            }
            const [t, e] = await Promise.all([l, i(n)]), o = t.decode(e);
            if (!o) throw new Error("Decoding error");
            return o
        }(...n)),
        wp2Decode: (...n) => o("wp2Decode", () => async function(n) {
            p || (p = a(d));
            const [r, t] = await Promise.all([p, i(n)]), e = r.decode(t);
            if (!e) throw new Error("Decoding error");
            return e
        }(...n)),
        avifEncode: (...n) => o("avifEncode", () => y(...n)),
        jxlEncode: (...n) => o("jxlEncode", () => g(...n)),
        mozjpegEncode: (...n) => o("mozjpegEncode", () => async function(n, r) {
            return w || (w = a(m)), (await w).encode(n.data, n.width, n.height, r).buffer
        }(...n)),
        oxipngEncode: (...n) => o("oxipngEncode", () => T(...n)),
        webpEncode: (...n) => o("webpEncode", () => E(...n)),
        wp2Encode: (...n) => o("wp2Encode", () => C(...n)),
        rotate: (...n) => o("rotate", () => async function(n, r) {
            const t = (await P).instance,
                e = n.width * n.height * 4,
                o = Math.ceil((2 * e + 8) / 65536) - Math.floor(t.exports.memory.buffer.byteLength / 65536);
            o > 0 && t.exports.memory.grow(o);
            const a = new Uint8ClampedArray(t.exports.memory.buffer);
            a.set(n.data, 8), t.exports.rotate(n.width, n.height, r.rotate);
            const i = r.rotate % 180 != 0;
            return new ImageData(a.slice(e + 8, 2 * e + 8), i ? n.height : n.width, i ? n.width : n.height)
        }(...n)),
        quantize: (...n) => o("quantize", () => async function(n, r) {
            k || (k = a(W));
            const t = await k,
                e = r.zx ? t.zx_quantize(n.data, n.width, n.height, r.dither) : t.quantize(n.data, n.width, n.height, r.maxNumColors, r.dither);
            return new ImageData(e, n.width, n.height)
        }(...n)),
        resize: (...n) => o("resize", () => Y(...n))
    };
    t.expose(Z, self)
}));