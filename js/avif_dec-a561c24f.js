define(["module", "require", "exports"], (function(n, r, t) {
    var e, o = (e = n.uri, function(r) {
        var t, o;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(n, r) {
            t = n, o = r
        }));
        var a, i = {};
        for (a in r) r.hasOwnProperty(a) && (i[a] = r[a]);
        var u, c = "";
        c = self.location.href, e && (c = e), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "", u = function(n) {
            var r = new XMLHttpRequest;
            return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
        };
        var f = r.print || console.log.bind(console),
            s = r.printErr || console.warn.bind(console);
        for (a in i) i.hasOwnProperty(a) && (r[a] = i[a]);
        i = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
        var l, p, v = 0;
        r.wasmBinary && (l = r.wasmBinary), r.noExitRuntime, "object" != typeof WebAssembly && V("no native wasm support detected");
        var d = !1,
            h = new TextDecoder("utf8");

        function y(n, r) {
            if (!n) return "";
            for (var t = n + r, e = n; !(e >= t) && w[e];) ++e;
            return h.decode(w.subarray(n, e))
        }
        var g, m, w, b, T, A, _, C, P, E, k = new TextDecoder("utf-16le");

        function W(n, r) {
            for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && T[e];) ++e;
            return t = e << 1, k.decode(w.subarray(n, t))
        }

        function F(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 2) return 0;
            for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, a = 0; a < o; ++a) {
                var i = n.charCodeAt(a);
                b[r >> 1] = i, r += 2
            }
            return b[r >> 1] = 0, r - e
        }

        function R(n) {
            return 2 * n.length
        }

        function I(n, r) {
            for (var t = 0, e = ""; !(t >= r / 4);) {
                var o = A[n + 4 * t >> 2];
                if (0 == o) break;
                if (++t, o >= 65536) {
                    var a = o - 65536;
                    e += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                } else e += String.fromCharCode(o)
            }
            return e
        }

        function j(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 4) return 0;
            for (var e = r, o = e + t - 4, a = 0; a < n.length; ++a) {
                var i = n.charCodeAt(a);
                if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a)), A[r >> 2] = i, (r += 4) + 4 > o) break
            }
            return A[r >> 2] = 0, r - e
        }

        function S(n) {
            for (var r = 0, t = 0; t < n.length; ++t) {
                var e = n.charCodeAt(t);
                e >= 55296 && e <= 57343 && ++t, r += 4
            }
            return r
        }

        function U(n) {
            g = n, r.HEAP8 = m = new Int8Array(n), r.HEAP16 = b = new Int16Array(n), r.HEAP32 = A = new Int32Array(n), r.HEAPU8 = w = new Uint8Array(n), r.HEAPU16 = T = new Uint16Array(n), r.HEAPU32 = _ = new Uint32Array(n), r.HEAPF32 = C = new Float32Array(n), r.HEAPF64 = P = new Float64Array(n)
        }
        r.INITIAL_MEMORY;
        var O, x = [],
            D = [],
            M = [],
            B = 0,
            H = null;

        function V(n) {
            r.onAbort && r.onAbort(n), s(n += ""), d = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(n);
            throw o(t), t
        }

        function q(n) {
            return n.startsWith("data:application/octet-stream;base64,")
        }
        if (r.preloadedImages = {}, r.preloadedAudios = {}, r.locateFile) q(z = "avif_dec.wasm") || (O = z, z = r.locateFile ? r.locateFile(O, c) : c + O);
        else var z = new URL("/wasm/avif_dec-07eff3d3.wasm", n.uri).toString();

        function N(n) {
            try {
                if (n == z && l) return new Uint8Array(l);
                if (u) return u(n);
                throw "both async and sync fetching of the wasm failed"
            } catch (n) {
                V(n)
            }
        }

        function L(n) {
            for (; n.length > 0;) {
                var t = n.shift();
                if ("function" != typeof t) {
                    var e = t.func;
                    "number" == typeof e ? void 0 === t.arg ? E.get(e)() : E.get(e)(t.arg) : e(void 0 === t.arg ? null : t.arg)
                } else t(r)
            }
        }

        function G(n) {
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
        var J = void 0;

        function K(n) {
            for (var r = "", t = n; w[t];) r += J[w[t++]];
            return r
        }
        var X = {},
            Y = {},
            Z = {};

        function $(n) {
            if (void 0 === n) return "_unknown";
            var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return r >= 48 && r <= 57 ? "_" + n : n
        }

        function Q(n, r) {
            return n = $(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
        }

        function nn(n, r) {
            var t = Q(r, (function(n) {
                this.name = r, this.message = n;
                var t = new Error(n).stack;
                void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
            }));
            return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, t
        }
        var rn = void 0;

        function tn(n) {
            throw new rn(n)
        }
        var en = void 0;

        function on(n) {
            throw new en(n)
        }

        function an(n, r, t) {
            if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var e = r.name;
            if (n || tn('type "' + e + '" must have a positive integer typeid pointer'), Y.hasOwnProperty(n)) {
                if (t.ignoreDuplicateRegistrations) return;
                tn("Cannot register type '" + e + "' twice")
            }
            if (Y[n] = r, delete Z[n], X.hasOwnProperty(n)) {
                var o = X[n];
                delete X[n], o.forEach((function(n) {
                    n()
                }))
            }
        }
        var un = [],
            cn = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];

        function fn(n) {
            n > 4 && 0 == --cn[n].refcount && (cn[n] = void 0, un.push(n))
        }

        function sn() {
            for (var n = 0, r = 5; r < cn.length; ++r) void 0 !== cn[r] && ++n;
            return n
        }

        function ln() {
            for (var n = 5; n < cn.length; ++n)
                if (void 0 !== cn[n]) return cn[n];
            return null
        }

        function pn(n) {
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
                    var r = un.length ? un.pop() : cn.length;
                    return cn[r] = {
                        refcount: 1,
                        value: n
                    }, r
            }
        }

        function vn(n) {
            return this.fromWireType(_[n >> 2])
        }

        function dn(n) {
            if (null === n) return "null";
            var r = typeof n;
            return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
        }

        function hn(n, r) {
            switch (r) {
                case 2:
                    return function(n) {
                        return this.fromWireType(C[n >> 2])
                    };
                case 3:
                    return function(n) {
                        return this.fromWireType(P[n >> 3])
                    };
                default:
                    throw new TypeError("Unknown float type: " + n)
            }
        }

        function yn(n) {
            for (; n.length;) {
                var r = n.pop();
                n.pop()(r)
            }
        }

        function gn(n, r, t, e, o) {
            var a = r.length;
            a < 2 && tn("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var i = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                if (null !== r[c] && void 0 === r[c].destructorFunction) {
                    u = !0;
                    break
                } var f = "void" !== r[0].name,
                s = "",
                l = "";
            for (c = 0; c < a - 2; ++c) s += (0 !== c ? ", " : "") + "arg" + c, l += (0 !== c ? ", " : "") + "arg" + c + "Wired";
            var p = "return function " + $(n) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
            u && (p += "var destructors = [];\n");
            var v = u ? "destructors" : "null",
                d = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                h = [tn, e, o, yn, r[0], r[1]];
            for (i && (p += "var thisWired = classParam.toWireType(" + v + ", this);\n"), c = 0; c < a - 2; ++c) p += "var arg" + c + "Wired = argType" + c + ".toWireType(" + v + ", arg" + c + "); // " + r[c + 2].name + "\n", d.push("argType" + c), h.push(r[c + 2]);
            if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), p += (f ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) p += "runDestructors(destructors);\n";
            else
                for (c = i ? 1 : 2; c < r.length; ++c) {
                    var y = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                    null !== r[c].destructorFunction && (p += y + "_dtor(" + y + "); // " + r[c].name + "\n", d.push(y + "_dtor"), h.push(r[c].destructorFunction))
                }
            return f && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", d.push(p),
                function(n, r) {
                    if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                    var t = Q(n.name || "unknownFunctionName", (function() {}));
                    t.prototype = n.prototype;
                    var e = new t,
                        o = n.apply(e, r);
                    return o instanceof Object ? o : e
                }(Function, d).apply(null, h)
        }

        function mn(n, t, e) {
            r.hasOwnProperty(n) ? ((void 0 === e || void 0 !== r[n].overloadTable && void 0 !== r[n].overloadTable[e]) && tn("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                if (void 0 === n[r].overloadTable) {
                    var e = n[r];
                    n[r] = function() {
                        return n[r].overloadTable.hasOwnProperty(arguments.length) || tn("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                    }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                }
            }(r, n, n), r.hasOwnProperty(e) && tn("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), r[n].overloadTable[e] = t) : (r[n] = t, void 0 !== e && (r[n].numArguments = e))
        }

        function wn(n, t, e) {
            return n.includes("j") ? function(n, t, e) {
                var o = r["dynCall_" + n];
                return e && e.length ? o.apply(null, [t].concat(e)) : o.call(null, t)
            }(n, t, e) : E.get(t).apply(null, e)
        }

        function bn(n, r) {
            var t, e, o, a = (n = K(n)).includes("j") ? (t = n, e = r, o = [], function() {
                o.length = arguments.length;
                for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                return wn(t, e, o)
            }) : E.get(r);
            return "function" != typeof a && tn("unknown function pointer with signature " + n + ": " + r), a
        }
        var Tn = void 0;

        function An(n) {
            var r = Sn(n),
                t = K(r);
            return jn(r), t
        }

        function _n(n, r, t) {
            switch (r) {
                case 0:
                    return t ? function(n) {
                        return m[n]
                    } : function(n) {
                        return w[n]
                    };
                case 1:
                    return t ? function(n) {
                        return b[n >> 1]
                    } : function(n) {
                        return T[n >> 1]
                    };
                case 2:
                    return t ? function(n) {
                        return A[n >> 2]
                    } : function(n) {
                        return _[n >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + n)
            }
        }
        var Cn = {};

        function Pn() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }

        function En(n, r) {
            var t = Y[n];
            return void 0 === t && tn(r + " has unknown type " + An(n)), t
        }
        var kn = {};

        function Wn(n) {
            try {
                return p.grow(n - g.byteLength + 65535 >>> 16), U(p.buffer), 1
            } catch (n) {}
        }
        var Fn = {
            mappings: {},
            buffers: [null, [],
                []
            ],
            printChar: function(n, r) {
                var t = Fn.buffers[n];
                0 === r || 10 === r ? ((1 === n ? f : s)(function(n, r, t) {
                    for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                    return h.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                }(t, 0)), t.length = 0) : t.push(r)
            },
            varargs: void 0,
            get: function() {
                return Fn.varargs += 4, A[Fn.varargs - 4 >> 2]
            },
            getStr: function(n) {
                return y(n)
            },
            get64: function(n, r) {
                return n
            }
        };
        ! function() {
            for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
            J = n
        }(), rn = r.BindingError = nn(Error, "BindingError"), en = r.InternalError = nn(Error, "InternalError"), r.count_emval_handles = sn, r.get_first_emval = ln, Tn = r.UnboundTypeError = nn(Error, "UnboundTypeError");
        var Rn = {
            j: function(n, r) {},
            v: function(n, r, t, e, o) {},
            r: function(n, r, t, e, o) {
                var a = G(t);
                an(n, {
                    name: r = K(r),
                    fromWireType: function(n) {
                        return !!n
                    },
                    toWireType: function(n, r) {
                        return r ? e : o
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function(n) {
                        var e;
                        if (1 === t) e = m;
                        else if (2 === t) e = b;
                        else {
                            if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                            e = A
                        }
                        return this.fromWireType(e[n >> a])
                    },
                    destructorFunction: null
                })
            },
            B: function(n, r) {
                an(n, {
                    name: r = K(r),
                    fromWireType: function(n) {
                        var r = cn[n].value;
                        return fn(n), r
                    },
                    toWireType: function(n, r) {
                        return pn(r)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: vn,
                    destructorFunction: null
                })
            },
            q: function(n, r, t) {
                var e = G(t);
                an(n, {
                    name: r = K(r),
                    fromWireType: function(n) {
                        return n
                    },
                    toWireType: function(n, r) {
                        if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + dn(r) + '" to ' + this.name);
                        return r
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: hn(r, e),
                    destructorFunction: null
                })
            },
            t: function(n, t, e, o, a, i) {
                var u = function(n, r) {
                    for (var t = [], e = 0; e < n; e++) t.push(A[(r >> 2) + e]);
                    return t
                }(t, e);
                n = K(n), a = bn(o, a), mn(n, (function() {
                        ! function(n, r) {
                            var t = [],
                                e = {};
                            throw r.forEach((function n(r) {
                                e[r] || Y[r] || (Z[r] ? Z[r].forEach(n) : (t.push(r), e[r] = !0))
                            })), new Tn(n + ": " + t.map(An).join([", "]))
                        }("Cannot call " + n + " due to unbound types", u)
                    }), t - 1),
                    function(n, r, t) {
                        function e(r) {
                            var e = t(r);
                            e.length !== n.length && on("Mismatched type converter count");
                            for (var o = 0; o < n.length; ++o) an(n[o], e[o])
                        }
                        n.forEach((function(n) {
                            Z[n] = r
                        }));
                        var o = new Array(r.length),
                            a = [],
                            i = 0;
                        r.forEach((function(n, r) {
                            Y.hasOwnProperty(n) ? o[r] = Y[n] : (a.push(n), X.hasOwnProperty(n) || (X[n] = []), X[n].push((function() {
                                o[r] = Y[n], ++i === a.length && e(o)
                            })))
                        })), 0 === a.length && e(o)
                    }([], u, (function(e) {
                        var o = [e[0], null].concat(e.slice(1));
                        return function(n, t, e) {
                            r.hasOwnProperty(n) || on("Replacing nonexistant public symbol"), void 0 !== r[n].overloadTable && void 0 !== e ? r[n].overloadTable[e] = t : (r[n] = t, r[n].argCount = e)
                        }(n, gn(n, o, null, a, i), t - 1), []
                    }))
            },
            e: function(n, r, t, e, o) {
                r = K(r), -1 === o && (o = 4294967295);
                var a = G(t),
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
                an(n, {
                    name: r,
                    fromWireType: i,
                    toWireType: function(n, t) {
                        if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + dn(t) + '" to ' + this.name);
                        if (t < e || t > o) throw new TypeError('Passing a number "' + dn(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                        return c ? t >>> 0 : 0 | t
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: _n(r, a, 0 !== e),
                    destructorFunction: null
                })
            },
            d: function(n, r, t) {
                var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                function o(n) {
                    var r = _,
                        t = r[n >>= 2],
                        o = r[n + 1];
                    return new e(g, o, t)
                }
                an(n, {
                    name: t = K(t),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o
                }, {
                    ignoreDuplicateRegistrations: !0
                })
            },
            m: function(n, r) {
                var t = "std::string" === (r = K(r));
                an(n, {
                    name: r,
                    fromWireType: function(n) {
                        var r, e = _[n >> 2];
                        if (t)
                            for (var o = n + 4, a = 0; a <= e; ++a) {
                                var i = n + 4 + a;
                                if (a == e || 0 == w[i]) {
                                    var u = y(o, i - o);
                                    void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = i + 1
                                }
                            } else {
                                var c = new Array(e);
                                for (a = 0; a < e; ++a) c[a] = String.fromCharCode(w[n + 4 + a]);
                                r = c.join("")
                            }
                        return jn(n), r
                    },
                    toWireType: function(n, r) {
                        r instanceof ArrayBuffer && (r = new Uint8Array(r));
                        var e = "string" == typeof r;
                        e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || tn("Cannot pass non-string to std::string");
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
                            a = In(4 + o + 1);
                        if (_[a >> 2] = o, t && e) ! function(n, r, t, e) {
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
                        }(r, w, a + 4, o + 1);
                        else if (e)
                            for (var i = 0; i < o; ++i) {
                                var u = r.charCodeAt(i);
                                u > 255 && (jn(a), tn("String has UTF-16 code units that do not fit in 8 bits")), w[a + 4 + i] = u
                            } else
                                for (i = 0; i < o; ++i) w[a + 4 + i] = r[i];
                        return null !== n && n.push(jn, a), a
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: vn,
                    destructorFunction: function(n) {
                        jn(n)
                    }
                })
            },
            l: function(n, r, t) {
                var e, o, a, i, u;
                t = K(t), 2 === r ? (e = W, o = F, i = R, a = function() {
                    return T
                }, u = 1) : 4 === r && (e = I, o = j, i = S, a = function() {
                    return _
                }, u = 2), an(n, {
                    name: t,
                    fromWireType: function(n) {
                        for (var t, o = _[n >> 2], i = a(), c = n + 4, f = 0; f <= o; ++f) {
                            var s = n + 4 + f * r;
                            if (f == o || 0 == i[s >> u]) {
                                var l = e(c, s - c);
                                void 0 === t ? t = l : (t += String.fromCharCode(0), t += l), c = s + r
                            }
                        }
                        return jn(n), t
                    },
                    toWireType: function(n, e) {
                        "string" != typeof e && tn("Cannot pass non-string to C++ string type " + t);
                        var a = i(e),
                            c = In(4 + a + r);
                        return _[c >> 2] = a >> u, o(e, c + 4, a + r), null !== n && n.push(jn, c), c
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: vn,
                    destructorFunction: function(n) {
                        jn(n)
                    }
                })
            },
            s: function(n, r) {
                an(n, {
                    isVoid: !0,
                    name: r = K(r),
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function(n, r) {}
                })
            },
            h: fn,
            i: function(n) {
                return 0 === n ? pn(Pn()) : (n = void 0 === (t = Cn[r = n]) ? K(r) : t, pn(Pn()[n]));
                var r, t
            },
            n: function(n) {
                n > 4 && (cn[n].refcount += 1)
            },
            o: function(n, t, e, o) {
                n = function(n) {
                    return n || tn("Cannot use deleted val. handle = " + n), cn[n].value
                }(n);
                var a = kn[t];
                return a || (a = function(n) {
                    for (var t = "", e = 0; e < n; ++e) t += (0 !== e ? ", " : "") + "arg" + e;
                    var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                    for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                    return o += "var obj = new constructor(" + t + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(En, r, pn)
                }(t), kn[t] = a), a(n, e, o)
            },
            a: function() {
                V()
            },
            g: function(n, r) {
                return function(n, r) {
                    throw Dn(n, r || 1), "longjmp"
                }(n, r)
            },
            y: function(n, r, t) {
                w.copyWithin(n, r, r + t)
            },
            k: function(n) {
                var r, t, e = w.length,
                    o = 2147483648;
                if ((n >>>= 0) > o) return !1;
                for (var a = 1; a <= 4; a *= 2) {
                    var i = e * (1 + .2 / a);
                    if (i = Math.min(i, n + 100663296), Wn(Math.min(o, ((r = Math.max(n, i)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                }
                return !1
            },
            A: function(n) {
                return 0
            },
            u: function(n, r, t, e, o) {},
            z: function(n, r, t, e) {
                for (var o = 0, a = 0; a < t; a++) {
                    for (var i = A[r + 8 * a >> 2], u = A[r + (8 * a + 4) >> 2], c = 0; c < u; c++) Fn.printChar(n, w[i + c]);
                    o += u
                }
                return A[e >> 2] = o, 0
            },
            b: function() {
                return v
            },
            f: function(n, r, t) {
                var e = On();
                try {
                    return E.get(n)(r, t)
                } catch (n) {
                    if (xn(e), n !== n + 0 && "longjmp" !== n) throw n;
                    Dn(1, 0)
                }
            },
            w: function(n, r, t, e, o) {
                var a = On();
                try {
                    return E.get(n)(r, t, e, o)
                } catch (n) {
                    if (xn(a), n !== n + 0 && "longjmp" !== n) throw n;
                    Dn(1, 0)
                }
            },
            p: function(n, r, t, e, o) {
                var a = On();
                try {
                    E.get(n)(r, t, e, o)
                } catch (n) {
                    if (xn(a), n !== n + 0 && "longjmp" !== n) throw n;
                    Dn(1, 0)
                }
            },
            x: function(n, r, t, e, o, a, i, u) {
                var c = On();
                try {
                    E.get(n)(r, t, e, o, a, i, u)
                } catch (n) {
                    if (xn(c), n !== n + 0 && "longjmp" !== n) throw n;
                    Dn(1, 0)
                }
            },
            c: function(n) {
                v = n
            }
        };
        ! function() {
            var n = {
                a: Rn
            };

            function t(n, t) {
                var e, o = n.exports;
                r.asm = o, U((p = r.asm.C).buffer), E = r.asm.L, e = r.asm.D, D.unshift(e),
                    function(n) {
                        if (B--, r.monitorRunDependencies && r.monitorRunDependencies(B), 0 == B && H) {
                            var t = H;
                            H = null, t()
                        }
                    }()
            }

            function e(n) {
                t(n.instance)
            }

            function a(r) {
                return (l || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return N(z)
                })) : fetch(z, {
                    credentials: "same-origin"
                }).then((function(n) {
                    if (!n.ok) throw "failed to load wasm binary file at '" + z + "'";
                    return n.arrayBuffer()
                })).catch((function() {
                    return N(z)
                }))).then((function(r) {
                    return WebAssembly.instantiate(r, n)
                })).then(r, (function(n) {
                    s("failed to asynchronously prepare wasm: " + n), V(n)
                }))
            }
            if (B++, r.monitorRunDependencies && r.monitorRunDependencies(B), r.instantiateWasm) try {
                return r.instantiateWasm(n, t)
            } catch (n) {
                return s("Module.instantiateWasm callback failed with error: " + n), !1
            }(l || "function" != typeof WebAssembly.instantiateStreaming || q(z) || "function" != typeof fetch ? a(e) : fetch(z, {
                credentials: "same-origin"
            }).then((function(r) {
                return WebAssembly.instantiateStreaming(r, n).then(e, (function(n) {
                    return s("wasm streaming compile failed: " + n), s("falling back to ArrayBuffer instantiation"), a(e)
                }))
            }))).catch(o)
        }(), r.___wasm_call_ctors = function() {
            return (r.___wasm_call_ctors = r.asm.D).apply(null, arguments)
        };
        var In = r._malloc = function() {
                return (In = r._malloc = r.asm.E).apply(null, arguments)
            },
            jn = r._free = function() {
                return (jn = r._free = r.asm.F).apply(null, arguments)
            },
            Sn = r.___getTypeName = function() {
                return (Sn = r.___getTypeName = r.asm.G).apply(null, arguments)
            };
        r.___embind_register_native_and_builtin_types = function() {
            return (r.___embind_register_native_and_builtin_types = r.asm.H).apply(null, arguments)
        };
        var Un, On = r.stackSave = function() {
                return (On = r.stackSave = r.asm.I).apply(null, arguments)
            },
            xn = r.stackRestore = function() {
                return (xn = r.stackRestore = r.asm.J).apply(null, arguments)
            },
            Dn = r._setThrew = function() {
                return (Dn = r._setThrew = r.asm.K).apply(null, arguments)
            };

        function Mn(n) {
            function e() {
                Un || (Un = !0, r.calledRun = !0, d || (L(D), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), function() {
                    if (r.postRun)
                        for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) n = r.postRun.shift(), M.unshift(n);
                    var n;
                    L(M)
                }()))
            }
            B > 0 || (function() {
                if (r.preRun)
                    for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) n = r.preRun.shift(), x.unshift(n);
                var n;
                L(x)
            }(), B > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                setTimeout((function() {
                    r.setStatus("")
                }), 1), e()
            }), 1)) : e()))
        }
        if (r.dynCall_iiijii = function() {
                return (r.dynCall_iiijii = r.asm.M).apply(null, arguments)
            }, r.dynCall_jiji = function() {
                return (r.dynCall_jiji = r.asm.N).apply(null, arguments)
            }, H = function n() {
                Un || Mn(), Un || (H = n)
            }, r.run = Mn, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        return Mn(), r.ready
    });
    t.default = o
}));