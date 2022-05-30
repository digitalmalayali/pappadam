define(["module", "require", "exports"], (function(n, r, t) {
    var e, o = (e = n.uri, function(r) {
        var t, o;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(n, r) {
            t = n, o = r
        }));
        var i, a = {};
        for (i in r) r.hasOwnProperty(i) && (a[i] = r[i]);
        var u, c = "";
        c = self.location.href, e && (c = e), c = 0 !== c.indexOf("blob:") ? c.substr(0, c.lastIndexOf("/") + 1) : "", u = function(n) {
            var r = new XMLHttpRequest;
            return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
        };
        var f = r.print || console.log.bind(console),
            l = r.printErr || console.warn.bind(console);
        for (i in a) a.hasOwnProperty(i) && (r[i] = a[i]);
        a = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && r.quit;
        var s, p, v = 0;
        r.wasmBinary && (s = r.wasmBinary), r.noExitRuntime, "object" != typeof WebAssembly && V("no native wasm support detected");
        var d = !1,
            y = new TextDecoder("utf8");

        function h(n, r) {
            if (!n) return "";
            for (var t = n + r, e = n; !(e >= t) && w[e];) ++e;
            return y.decode(w.subarray(n, e))
        }
        var g, m, w, b, T, _, A, C, P, E, W = new TextDecoder("utf-16le");

        function k(n, r) {
            for (var t = n, e = t >> 1, o = e + r / 2; !(e >= o) && T[e];) ++e;
            return t = e << 1, W.decode(w.subarray(n, t))
        }

        function F(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 2) return 0;
            for (var e = r, o = (t -= 2) < 2 * n.length ? t / 2 : n.length, i = 0; i < o; ++i) {
                var a = n.charCodeAt(i);
                b[r >> 1] = a, r += 2
            }
            return b[r >> 1] = 0, r - e
        }

        function j(n) {
            return 2 * n.length
        }

        function R(n, r) {
            for (var t = 0, e = ""; !(t >= r / 4);) {
                var o = _[n + 4 * t >> 2];
                if (0 == o) break;
                if (++t, o >= 65536) {
                    var i = o - 65536;
                    e += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                } else e += String.fromCharCode(o)
            }
            return e
        }

        function I(n, r, t) {
            if (void 0 === t && (t = 2147483647), t < 4) return 0;
            for (var e = r, o = e + t - 4, i = 0; i < n.length; ++i) {
                var a = n.charCodeAt(i);
                if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & n.charCodeAt(++i)), _[r >> 2] = a, (r += 4) + 4 > o) break
            }
            return _[r >> 2] = 0, r - e
        }

        function S(n) {
            for (var r = 0, t = 0; t < n.length; ++t) {
                var e = n.charCodeAt(t);
                e >= 55296 && e <= 57343 && ++t, r += 4
            }
            return r
        }

        function U(n) {
            g = n, r.HEAP8 = m = new Int8Array(n), r.HEAP16 = b = new Int16Array(n), r.HEAP32 = _ = new Int32Array(n), r.HEAPU8 = w = new Uint8Array(n), r.HEAPU16 = T = new Uint16Array(n), r.HEAPU32 = A = new Uint32Array(n), r.HEAPF32 = C = new Float32Array(n), r.HEAPF64 = P = new Float64Array(n)
        }
        r.INITIAL_MEMORY;
        var O, x = [],
            D = [],
            M = [],
            B = 0,
            H = null;

        function V(n) {
            r.onAbort && r.onAbort(n), l(n += ""), d = !0, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.";
            var t = new WebAssembly.RuntimeError(n);
            throw o(t), t
        }

        function q(n) {
            return n.startsWith("data:application/octet-stream;base64,")
        }
        if (r.preloadedImages = {}, r.preloadedAudios = {}, r.locateFile) q(N = "avif_enc.wasm") || (O = N, N = r.locateFile ? r.locateFile(O, c) : c + O);
        else var N = new URL("/wasm/avif_enc-b345922b.wasm", n.uri).toString();

        function z(n) {
            try {
                if (n == N && s) return new Uint8Array(s);
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
        var G = {
                mappings: {},
                buffers: [null, [],
                    []
                ],
                printChar: function(n, r) {
                    var t = G.buffers[n];
                    0 === r || 10 === r ? ((1 === n ? f : l)(function(n, r, t) {
                        for (var e = r + t, o = r; n[o] && !(o >= e);) ++o;
                        return y.decode(n.subarray ? n.subarray(r, o) : new Uint8Array(n.slice(r, o)))
                    }(t, 0)), t.length = 0) : t.push(r)
                },
                varargs: void 0,
                get: function() {
                    return G.varargs += 4, _[G.varargs - 4 >> 2]
                },
                getStr: function(n) {
                    return h(n)
                },
                get64: function(n, r) {
                    return n
                }
            },
            J = {};

        function Q(n) {
            for (; n.length;) {
                var r = n.pop();
                n.pop()(r)
            }
        }

        function X(n) {
            return this.fromWireType(A[n >> 2])
        }
        var Y = {},
            Z = {},
            $ = {};

        function K(n) {
            if (void 0 === n) return "_unknown";
            var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return r >= 48 && r <= 57 ? "_" + n : n
        }

        function nn(n, r) {
            return n = K(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
        }

        function rn(n, r) {
            var t = nn(r, (function(n) {
                this.name = r, this.message = n;
                var t = new Error(n).stack;
                void 0 !== t && (this.stack = this.toString() + "\n" + t.replace(/^Error(:[^\n]*)?\n/, ""))
            }));
            return t.prototype = Object.create(n.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, t
        }
        var tn = void 0;

        function en(n) {
            throw new tn(n)
        }

        function on(n, r, t) {
            function e(r) {
                var e = t(r);
                e.length !== n.length && en("Mismatched type converter count");
                for (var o = 0; o < n.length; ++o) sn(n[o], e[o])
            }
            n.forEach((function(n) {
                $[n] = r
            }));
            var o = new Array(r.length),
                i = [],
                a = 0;
            r.forEach((function(n, r) {
                Z.hasOwnProperty(n) ? o[r] = Z[n] : (i.push(n), Y.hasOwnProperty(n) || (Y[n] = []), Y[n].push((function() {
                    o[r] = Z[n], ++a === i.length && e(o)
                })))
            })), 0 === i.length && e(o)
        }

        function an(n) {
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
        var un = void 0;

        function cn(n) {
            for (var r = "", t = n; w[t];) r += un[w[t++]];
            return r
        }
        var fn = void 0;

        function ln(n) {
            throw new fn(n)
        }

        function sn(n, r, t) {
            if (t = t || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var e = r.name;
            if (n || ln('type "' + e + '" must have a positive integer typeid pointer'), Z.hasOwnProperty(n)) {
                if (t.ignoreDuplicateRegistrations) return;
                ln("Cannot register type '" + e + "' twice")
            }
            if (Z[n] = r, delete $[n], Y.hasOwnProperty(n)) {
                var o = Y[n];
                delete Y[n], o.forEach((function(n) {
                    n()
                }))
            }
        }
        var pn = [],
            vn = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];

        function dn(n) {
            n > 4 && 0 == --vn[n].refcount && (vn[n] = void 0, pn.push(n))
        }

        function yn() {
            for (var n = 0, r = 5; r < vn.length; ++r) void 0 !== vn[r] && ++n;
            return n
        }

        function hn() {
            for (var n = 5; n < vn.length; ++n)
                if (void 0 !== vn[n]) return vn[n];
            return null
        }

        function gn(n) {
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
                    var r = pn.length ? pn.pop() : vn.length;
                    return vn[r] = {
                        refcount: 1,
                        value: n
                    }, r
            }
        }

        function mn(n) {
            if (null === n) return "null";
            var r = typeof n;
            return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n
        }

        function wn(n, r) {
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

        function bn(n, r, t, e, o) {
            var i = r.length;
            i < 2 && ln("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var a = null !== r[1] && null !== t, u = !1, c = 1; c < r.length; ++c)
                if (null !== r[c] && void 0 === r[c].destructorFunction) {
                    u = !0;
                    break
                } var f = "void" !== r[0].name,
                l = "",
                s = "";
            for (c = 0; c < i - 2; ++c) l += (0 !== c ? ", " : "") + "arg" + c, s += (0 !== c ? ", " : "") + "arg" + c + "Wired";
            var p = "return function " + K(n) + "(" + l + ") {\nif (arguments.length !== " + (i - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (i - 2) + " args!');\n}\n";
            u && (p += "var destructors = [];\n");
            var v = u ? "destructors" : "null",
                d = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                y = [ln, e, o, Q, r[0], r[1]];
            for (a && (p += "var thisWired = classParam.toWireType(" + v + ", this);\n"), c = 0; c < i - 2; ++c) p += "var arg" + c + "Wired = argType" + c + ".toWireType(" + v + ", arg" + c + "); // " + r[c + 2].name + "\n", d.push("argType" + c), y.push(r[c + 2]);
            if (a && (s = "thisWired" + (s.length > 0 ? ", " : "") + s), p += (f ? "var rv = " : "") + "invoker(fn" + (s.length > 0 ? ", " : "") + s + ");\n", u) p += "runDestructors(destructors);\n";
            else
                for (c = a ? 1 : 2; c < r.length; ++c) {
                    var h = 1 === c ? "thisWired" : "arg" + (c - 2) + "Wired";
                    null !== r[c].destructorFunction && (p += h + "_dtor(" + h + "); // " + r[c].name + "\n", d.push(h + "_dtor"), y.push(r[c].destructorFunction))
                }
            return f && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", d.push(p),
                function(n, r) {
                    if (!(n instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof n + " which is not a function");
                    var t = nn(n.name || "unknownFunctionName", (function() {}));
                    t.prototype = n.prototype;
                    var e = new t,
                        o = n.apply(e, r);
                    return o instanceof Object ? o : e
                }(Function, d).apply(null, y)
        }

        function Tn(n, t, e) {
            r.hasOwnProperty(n) ? ((void 0 === e || void 0 !== r[n].overloadTable && void 0 !== r[n].overloadTable[e]) && ln("Cannot register public name '" + n + "' twice"), function(n, r, t) {
                if (void 0 === n[r].overloadTable) {
                    var e = n[r];
                    n[r] = function() {
                        return n[r].overloadTable.hasOwnProperty(arguments.length) || ln("Function '" + t + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), n[r].overloadTable[arguments.length].apply(this, arguments)
                    }, n[r].overloadTable = [], n[r].overloadTable[e.argCount] = e
                }
            }(r, n, n), r.hasOwnProperty(e) && ln("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), r[n].overloadTable[e] = t) : (r[n] = t, void 0 !== e && (r[n].numArguments = e))
        }

        function _n(n, t, e) {
            return n.includes("j") ? function(n, t, e) {
                var o = r["dynCall_" + n];
                return e && e.length ? o.apply(null, [t].concat(e)) : o.call(null, t)
            }(n, t, e) : E.get(t).apply(null, e)
        }

        function An(n, r) {
            var t, e, o, i = (n = cn(n)).includes("j") ? (t = n, e = r, o = [], function() {
                o.length = arguments.length;
                for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
                return _n(t, e, o)
            }) : E.get(r);
            return "function" != typeof i && ln("unknown function pointer with signature " + n + ": " + r), i
        }
        var Cn = void 0;

        function Pn(n) {
            var r = On(n),
                t = cn(r);
            return Un(r), t
        }

        function En(n, r, t) {
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
                        return _[n >> 2]
                    } : function(n) {
                        return A[n >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + n)
            }
        }
        var Wn = {};

        function kn() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }

        function Fn(n, r) {
            var t = Z[n];
            return void 0 === t && ln(r + " has unknown type " + Pn(n)), t
        }
        var jn = {};

        function Rn(n) {
            try {
                return p.grow(n - g.byteLength + 65535 >>> 16), U(p.buffer), 1
            } catch (n) {}
        }
        tn = r.InternalError = rn(Error, "InternalError"),
            function() {
                for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
                un = n
            }(), fn = r.BindingError = rn(Error, "BindingError"), r.count_emval_handles = yn, r.get_first_emval = hn, Cn = r.UnboundTypeError = rn(Error, "UnboundTypeError");
        var In = {
            O: function(n, r) {},
            r: function(n, r, t) {
                return G.varargs = t, 0
            },
            G: function(n, r, t) {
                return G.varargs = t, 0
            },
            H: function(n, r, t) {
                G.varargs = t
            },
            x: function(n) {
                var r = J[n];
                delete J[n];
                var t = r.rawConstructor,
                    e = r.rawDestructor,
                    o = r.fields;
                on([n], o.map((function(n) {
                    return n.getterReturnType
                })).concat(o.map((function(n) {
                    return n.setterArgumentType
                }))), (function(n) {
                    var i = {};
                    return o.forEach((function(r, t) {
                        var e = r.fieldName,
                            a = n[t],
                            u = r.getter,
                            c = r.getterContext,
                            f = n[t + o.length],
                            l = r.setter,
                            s = r.setterContext;
                        i[e] = {
                            read: function(n) {
                                return a.fromWireType(u(c, n))
                            },
                            write: function(n, r) {
                                var t = [];
                                l(s, n, f.toWireType(t, r)), Q(t)
                            }
                        }
                    })), [{
                        name: r.name,
                        fromWireType: function(n) {
                            var r = {};
                            for (var t in i) r[t] = i[t].read(n);
                            return e(n), r
                        },
                        toWireType: function(n, r) {
                            for (var o in i)
                                if (!(o in r)) throw new TypeError('Missing field:  "' + o + '"');
                            var a = t();
                            for (o in i) i[o].write(a, r[o]);
                            return null !== n && n.push(e, a), a
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: X,
                        destructorFunction: e
                    }]
                }))
            },
            B: function(n, r, t, e, o) {},
            K: function(n, r, t, e, o) {
                var i = an(t);
                sn(n, {
                    name: r = cn(r),
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
                            e = _
                        }
                        return this.fromWireType(e[n >> i])
                    },
                    destructorFunction: null
                })
            },
            J: function(n, r) {
                sn(n, {
                    name: r = cn(r),
                    fromWireType: function(n) {
                        var r = vn[n].value;
                        return dn(n), r
                    },
                    toWireType: function(n, r) {
                        return gn(r)
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: X,
                    destructorFunction: null
                })
            },
            t: function(n, r, t) {
                var e = an(t);
                sn(n, {
                    name: r = cn(r),
                    fromWireType: function(n) {
                        return n
                    },
                    toWireType: function(n, r) {
                        if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + mn(r) + '" to ' + this.name);
                        return r
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: wn(r, e),
                    destructorFunction: null
                })
            },
            w: function(n, t, e, o, i, a) {
                var u = function(n, r) {
                    for (var t = [], e = 0; e < n; e++) t.push(_[(r >> 2) + e]);
                    return t
                }(t, e);
                n = cn(n), i = An(o, i), Tn(n, (function() {
                    ! function(n, r) {
                        var t = [],
                            e = {};
                        throw r.forEach((function n(r) {
                            e[r] || Z[r] || ($[r] ? $[r].forEach(n) : (t.push(r), e[r] = !0))
                        })), new Cn(n + ": " + t.map(Pn).join([", "]))
                    }("Cannot call " + n + " due to unbound types", u)
                }), t - 1), on([], u, (function(e) {
                    var o = [e[0], null].concat(e.slice(1));
                    return function(n, t, e) {
                        r.hasOwnProperty(n) || en("Replacing nonexistant public symbol"), void 0 !== r[n].overloadTable && void 0 !== e ? r[n].overloadTable[e] = t : (r[n] = t, r[n].argCount = e)
                    }(n, bn(n, o, null, i, a), t - 1), []
                }))
            },
            i: function(n, r, t, e, o) {
                r = cn(r), -1 === o && (o = 4294967295);
                var i = an(t),
                    a = function(n) {
                        return n
                    };
                if (0 === e) {
                    var u = 32 - 8 * t;
                    a = function(n) {
                        return n << u >>> u
                    }
                }
                var c = r.includes("unsigned");
                sn(n, {
                    name: r,
                    fromWireType: a,
                    toWireType: function(n, t) {
                        if ("number" != typeof t && "boolean" != typeof t) throw new TypeError('Cannot convert "' + mn(t) + '" to ' + this.name);
                        if (t < e || t > o) throw new TypeError('Passing a number "' + mn(t) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + e + ", " + o + "]!");
                        return c ? t >>> 0 : 0 | t
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: En(r, i, 0 !== e),
                    destructorFunction: null
                })
            },
            e: function(n, r, t) {
                var e = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                function o(n) {
                    var r = A,
                        t = r[n >>= 2],
                        o = r[n + 1];
                    return new e(g, o, t)
                }
                sn(n, {
                    name: t = cn(t),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o
                }, {
                    ignoreDuplicateRegistrations: !0
                })
            },
            u: function(n, r) {
                var t = "std::string" === (r = cn(r));
                sn(n, {
                    name: r,
                    fromWireType: function(n) {
                        var r, e = A[n >> 2];
                        if (t)
                            for (var o = n + 4, i = 0; i <= e; ++i) {
                                var a = n + 4 + i;
                                if (i == e || 0 == w[a]) {
                                    var u = h(o, a - o);
                                    void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = a + 1
                                }
                            } else {
                                var c = new Array(e);
                                for (i = 0; i < e; ++i) c[i] = String.fromCharCode(w[n + 4 + i]);
                                r = c.join("")
                            }
                        return Un(n), r
                    },
                    toWireType: function(n, r) {
                        r instanceof ArrayBuffer && (r = new Uint8Array(r));
                        var e = "string" == typeof r;
                        e || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || ln("Cannot pass non-string to std::string");
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
                            i = Sn(4 + o + 1);
                        if (A[i >> 2] = o, t && e) ! function(n, r, t, e) {
                            if (!(e > 0)) return 0;
                            for (var o = t + e - 1, i = 0; i < n.length; ++i) {
                                var a = n.charCodeAt(i);
                                if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & n.charCodeAt(++i)), a <= 127) {
                                    if (t >= o) break;
                                    r[t++] = a
                                } else if (a <= 2047) {
                                    if (t + 1 >= o) break;
                                    r[t++] = 192 | a >> 6, r[t++] = 128 | 63 & a
                                } else if (a <= 65535) {
                                    if (t + 2 >= o) break;
                                    r[t++] = 224 | a >> 12, r[t++] = 128 | a >> 6 & 63, r[t++] = 128 | 63 & a
                                } else {
                                    if (t + 3 >= o) break;
                                    r[t++] = 240 | a >> 18, r[t++] = 128 | a >> 12 & 63, r[t++] = 128 | a >> 6 & 63, r[t++] = 128 | 63 & a
                                }
                            }
                            r[t] = 0
                        }(r, w, i + 4, o + 1);
                        else if (e)
                            for (var a = 0; a < o; ++a) {
                                var u = r.charCodeAt(a);
                                u > 255 && (Un(i), ln("String has UTF-16 code units that do not fit in 8 bits")), w[i + 4 + a] = u
                            } else
                                for (a = 0; a < o; ++a) w[i + 4 + a] = r[a];
                        return null !== n && n.push(Un, i), i
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: X,
                    destructorFunction: function(n) {
                        Un(n)
                    }
                })
            },
            o: function(n, r, t) {
                var e, o, i, a, u;
                t = cn(t), 2 === r ? (e = k, o = F, a = j, i = function() {
                    return T
                }, u = 1) : 4 === r && (e = R, o = I, a = S, i = function() {
                    return A
                }, u = 2), sn(n, {
                    name: t,
                    fromWireType: function(n) {
                        for (var t, o = A[n >> 2], a = i(), c = n + 4, f = 0; f <= o; ++f) {
                            var l = n + 4 + f * r;
                            if (f == o || 0 == a[l >> u]) {
                                var s = e(c, l - c);
                                void 0 === t ? t = s : (t += String.fromCharCode(0), t += s), c = l + r
                            }
                        }
                        return Un(n), t
                    },
                    toWireType: function(n, e) {
                        "string" != typeof e && ln("Cannot pass non-string to C++ string type " + t);
                        var i = a(e),
                            c = Sn(4 + i + r);
                        return A[c >> 2] = i >> u, o(e, c + 4, i + r), null !== n && n.push(Un, c), c
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: X,
                    destructorFunction: function(n) {
                        Un(n)
                    }
                })
            },
            z: function(n, r, t, e, o, i) {
                J[n] = {
                    name: cn(r),
                    rawConstructor: An(t, e),
                    rawDestructor: An(o, i),
                    fields: []
                }
            },
            g: function(n, r, t, e, o, i, a, u, c, f) {
                J[n].fields.push({
                    fieldName: cn(r),
                    getterReturnType: t,
                    getter: An(e, o),
                    getterContext: i,
                    setterArgumentType: a,
                    setter: An(u, c),
                    setterContext: f
                })
            },
            L: function(n, r) {
                sn(n, {
                    isVoid: !0,
                    name: r = cn(r),
                    argPackAdvance: 0,
                    fromWireType: function() {},
                    toWireType: function(n, r) {}
                })
            },
            j: dn,
            N: function(n) {
                return 0 === n ? gn(kn()) : (n = void 0 === (t = Wn[r = n]) ? cn(r) : t, gn(kn()[n]));
                var r, t
            },
            v: function(n) {
                n > 4 && (vn[n].refcount += 1)
            },
            D: function(n, t, e, o) {
                n = function(n) {
                    return n || ln("Cannot use deleted val. handle = " + n), vn[n].value
                }(n);
                var i = jn[t];
                return i || (i = function(n) {
                    for (var t = "", e = 0; e < n; ++e) t += (0 !== e ? ", " : "") + "arg" + e;
                    var o = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
                    for (e = 0; e < n; ++e) o += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
                    return o += "var obj = new constructor(" + t + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", o)(Fn, r, gn)
                }(t), jn[t] = i), i(n, e, o)
            },
            f: function() {
                V()
            },
            d: function(n, r) {
                return function(n, r) {
                    throw Mn(n, r || 1), "longjmp"
                }(n, r)
            },
            E: function(n, r, t) {
                w.copyWithin(n, r, r + t)
            },
            n: function(n) {
                var r, t, e = w.length,
                    o = 2147483648;
                if ((n >>>= 0) > o) return !1;
                for (var i = 1; i <= 4; i *= 2) {
                    var a = e * (1 + .2 / i);
                    if (a = Math.min(a, n + 100663296), Rn(Math.min(o, ((r = Math.max(n, a)) % (t = 65536) > 0 && (r += t - r % t), r)))) return !0
                }
                return !1
            },
            s: function(n) {
                return 0
            },
            F: function(n, r, t, e) {
                var o = G.getStreamFromFD(n),
                    i = G.doReadv(o, r, t);
                return _[e >> 2] = i, 0
            },
            A: function(n, r, t, e, o) {},
            I: function(n, r, t, e) {
                for (var o = 0, i = 0; i < t; i++) {
                    for (var a = _[r + 8 * i >> 2], u = _[r + (8 * i + 4) >> 2], c = 0; c < u; c++) G.printChar(n, w[a + c]);
                    o += u
                }
                return _[e >> 2] = o, 0
            },
            b: function() {
                return v
            },
            l: function(n, r, t, e, o) {
                var i = xn();
                try {
                    return E.get(n)(r, t, e, o)
                } catch (n) {
                    if (Dn(i), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            p: function(n, r, t, e, o, i, a, u, c) {
                var f = xn();
                try {
                    return E.get(n)(r, t, e, o, i, a, u, c)
                } catch (n) {
                    if (Dn(f), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            q: function(n, r, t, e, o, i, a, u, c, f) {
                var l = xn();
                try {
                    return E.get(n)(r, t, e, o, i, a, u, c, f)
                } catch (n) {
                    if (Dn(l), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            C: function(n, r, t, e, o, i, a, u, c, f, l, s) {
                var p = xn();
                try {
                    return E.get(n)(r, t, e, o, i, a, u, c, f, l, s)
                } catch (n) {
                    if (Dn(p), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            y: function(n, r, t, e, o, i) {
                var a = xn();
                try {
                    return Hn(n, r, t, e, o, i)
                } catch (n) {
                    if (Dn(a), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            m: function(n, r) {
                var t = xn();
                try {
                    E.get(n)(r)
                } catch (n) {
                    if (Dn(t), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            h: function(n, r, t) {
                var e = xn();
                try {
                    E.get(n)(r, t)
                } catch (n) {
                    if (Dn(e), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            c: function(n, r, t, e, o) {
                var i = xn();
                try {
                    E.get(n)(r, t, e, o)
                } catch (n) {
                    if (Dn(i), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            k: function(n, r, t, e, o, i, a, u, c, f, l) {
                var s = xn();
                try {
                    E.get(n)(r, t, e, o, i, a, u, c, f, l)
                } catch (n) {
                    if (Dn(s), n !== n + 0 && "longjmp" !== n) throw n;
                    Mn(1, 0)
                }
            },
            a: function(n) {
                v = n
            },
            M: function(n) {
                var r = Date.now() / 1e3 | 0;
                return n && (_[n >> 2] = r), r
            }
        };
        ! function() {
            var n = {
                a: In
            };

            function t(n, t) {
                var e, o = n.exports;
                r.asm = o, U((p = r.asm.P).buffer), E = r.asm.Y, e = r.asm.Q, D.unshift(e),
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

            function i(r) {
                return (s || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return z(N)
                })) : fetch(N, {
                    credentials: "same-origin"
                }).then((function(n) {
                    if (!n.ok) throw "failed to load wasm binary file at '" + N + "'";
                    return n.arrayBuffer()
                })).catch((function() {
                    return z(N)
                }))).then((function(r) {
                    return WebAssembly.instantiate(r, n)
                })).then(r, (function(n) {
                    l("failed to asynchronously prepare wasm: " + n), V(n)
                }))
            }
            if (B++, r.monitorRunDependencies && r.monitorRunDependencies(B), r.instantiateWasm) try {
                return r.instantiateWasm(n, t)
            } catch (n) {
                return l("Module.instantiateWasm callback failed with error: " + n), !1
            }(s || "function" != typeof WebAssembly.instantiateStreaming || q(N) || "function" != typeof fetch ? i(e) : fetch(N, {
                credentials: "same-origin"
            }).then((function(r) {
                return WebAssembly.instantiateStreaming(r, n).then(e, (function(n) {
                    return l("wasm streaming compile failed: " + n), l("falling back to ArrayBuffer instantiation"), i(e)
                }))
            }))).catch(o)
        }(), r.___wasm_call_ctors = function() {
            return (r.___wasm_call_ctors = r.asm.Q).apply(null, arguments)
        };
        var Sn = r._malloc = function() {
                return (Sn = r._malloc = r.asm.R).apply(null, arguments)
            },
            Un = r._free = function() {
                return (Un = r._free = r.asm.S).apply(null, arguments)
            },
            On = r.___getTypeName = function() {
                return (On = r.___getTypeName = r.asm.T).apply(null, arguments)
            };
        r.___embind_register_native_and_builtin_types = function() {
            return (r.___embind_register_native_and_builtin_types = r.asm.U).apply(null, arguments)
        };
        var xn = r.stackSave = function() {
                return (xn = r.stackSave = r.asm.V).apply(null, arguments)
            },
            Dn = r.stackRestore = function() {
                return (Dn = r.stackRestore = r.asm.W).apply(null, arguments)
            },
            Mn = r._setThrew = function() {
                return (Mn = r._setThrew = r.asm.X).apply(null, arguments)
            };
        r.dynCall_jiiiiiiiii = function() {
            return (r.dynCall_jiiiiiiiii = r.asm.Z).apply(null, arguments)
        };
        var Bn, Hn = r.dynCall_ijiii = function() {
            return (Hn = r.dynCall_ijiii = r.asm._).apply(null, arguments)
        };

        function Vn(n) {
            function e() {
                Bn || (Bn = !0, r.calledRun = !0, d || (L(D), t(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), function() {
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
        if (r.dynCall_jiji = function() {
                return (r.dynCall_jiji = r.asm.$).apply(null, arguments)
            }, r.dynCall_jiiiiiiii = function() {
                return (r.dynCall_jiiiiiiii = r.asm.aa).apply(null, arguments)
            }, r.dynCall_jiiiiii = function() {
                return (r.dynCall_jiiiiii = r.asm.ba).apply(null, arguments)
            }, r.dynCall_jiiiii = function() {
                return (r.dynCall_jiiiii = r.asm.ca).apply(null, arguments)
            }, r.dynCall_iiijii = function() {
                return (r.dynCall_iiijii = r.asm.da).apply(null, arguments)
            }, H = function n() {
                Bn || Vn(), Bn || (H = n)
            }, r.run = Vn, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        return Vn(), r.ready
    });
    t.default = o
}));