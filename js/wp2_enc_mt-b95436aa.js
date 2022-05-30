define(["module", "require", "exports"], (function(e, r, n) {
    var t, a = (t = e.uri, function(r) {
        function n() {
            return T.buffer != x && z(T.buffer), E
        }

        function a() {
            return T.buffer != x && z(T.buffer), C
        }

        function o() {
            return T.buffer != x && z(T.buffer), W
        }

        function i() {
            return T.buffer != x && z(T.buffer), S
        }

        function u() {
            return T.buffer != x && z(T.buffer), P
        }

        function s() {
            return T.buffer != x && z(T.buffer), I
        }

        function c() {
            return T.buffer != x && z(T.buffer), R
        }
        var f, l;
        (r = void 0 !== (r = r || {}) ? r : {}).ready = new Promise((function(e, r) {
            f = e, l = r
        }));
        var d, h = {};
        for (d in r) r.hasOwnProperty(d) && (h[d] = r[d]);
        var p, v = function(e, r) {
                throw r
            },
            m = r.ENVIRONMENT_IS_PTHREAD || !1,
            g = "";

        function _(e) {
            return r.locateFile ? r.locateFile(e, g) : g + e
        }
        g = self.location.href, t && (g = t), g = 0 !== g.indexOf("blob:") ? g.substr(0, g.lastIndexOf("/") + 1) : "", p = function(e) {
            var r = new XMLHttpRequest;
            return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response)
        };
        var y, w = r.print || console.log.bind(console),
            b = r.printErr || console.warn.bind(console);
        for (d in h) h.hasOwnProperty(d) && (r[d] = h[d]);
        h = null, r.arguments && r.arguments, r.thisProgram && r.thisProgram, r.quit && (v = r.quit), r.wasmBinary && (y = r.wasmBinary);
        var T, k, A = r.noExitRuntime || !0;
        "object" != typeof WebAssembly && re("no native wasm support detected");
        var x, E, C, W, S, P, I, F, R, H = !1;

        function M(e, r) {
            e || re("Assertion failed: " + r)
        }

        function O(e, r, n) {
            for (var t = r + n, a = ""; !(r >= t);) {
                var o = e[r++];
                if (!o) return a;
                if (128 & o) {
                    var i = 63 & e[r++];
                    if (192 != (224 & o)) {
                        var u = 63 & e[r++];
                        if ((o = 224 == (240 & o) ? (15 & o) << 12 | i << 6 | u : (7 & o) << 18 | i << 12 | u << 6 | 63 & e[r++]) < 65536) a += String.fromCharCode(o);
                        else {
                            var s = o - 65536;
                            a += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
                        }
                    } else a += String.fromCharCode((31 & o) << 6 | i)
                } else a += String.fromCharCode(o)
            }
            return a
        }

        function L(e, r) {
            return e ? O(a(), e, r) : ""
        }

        function j(e, r, n) {
            return function(e, r, n, t) {
                if (!(t > 0)) return 0;
                for (var a = n, o = n + t - 1, i = 0; i < e.length; ++i) {
                    var u = e.charCodeAt(i);
                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++i)), u <= 127) {
                        if (n >= o) break;
                        r[n++] = u
                    } else if (u <= 2047) {
                        if (n + 1 >= o) break;
                        r[n++] = 192 | u >> 6, r[n++] = 128 | 63 & u
                    } else if (u <= 65535) {
                        if (n + 2 >= o) break;
                        r[n++] = 224 | u >> 12, r[n++] = 128 | u >> 6 & 63, r[n++] = 128 | 63 & u
                    } else {
                        if (n + 3 >= o) break;
                        r[n++] = 240 | u >> 18, r[n++] = 128 | u >> 12 & 63, r[n++] = 128 | u >> 6 & 63, r[n++] = 128 | 63 & u
                    }
                }
                return r[n] = 0, n - a
            }(e, a(), r, n)
        }

        function B(e) {
            for (var r = 0, n = 0; n < e.length; ++n) {
                var t = e.charCodeAt(n);
                t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++n)), t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4
            }
            return r
        }

        function D(e, r) {
            for (var n = "", t = 0; !(t >= r / 2); ++t) {
                var a = o()[e + 2 * t >> 1];
                if (0 == a) break;
                n += String.fromCharCode(a)
            }
            return n
        }

        function G(e, r, n) {
            if (void 0 === n && (n = 2147483647), n < 2) return 0;
            for (var t = r, a = (n -= 2) < 2 * e.length ? n / 2 : e.length, i = 0; i < a; ++i) {
                var u = e.charCodeAt(i);
                o()[r >> 1] = u, r += 2
            }
            return o()[r >> 1] = 0, r - t
        }

        function U(e) {
            return 2 * e.length
        }

        function N(e, r) {
            for (var n = 0, t = ""; !(n >= r / 4);) {
                var a = u()[e + 4 * n >> 2];
                if (0 == a) break;
                if (++n, a >= 65536) {
                    var o = a - 65536;
                    t += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)
                } else t += String.fromCharCode(a)
            }
            return t
        }

        function V(e, r, n) {
            if (void 0 === n && (n = 2147483647), n < 4) return 0;
            for (var t = r, a = t + n - 4, o = 0; o < e.length; ++o) {
                var i = e.charCodeAt(o);
                if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & e.charCodeAt(++o)), u()[r >> 2] = i, (r += 4) + 4 > a) break
            }
            return u()[r >> 2] = 0, r - t
        }

        function q(e) {
            for (var r = 0, n = 0; n < e.length; ++n) {
                var t = e.charCodeAt(n);
                t >= 55296 && t <= 57343 && ++n, r += 4
            }
            return r
        }

        function z(e) {
            x = e, r.HEAP8 = E = new Int8Array(e), r.HEAP16 = W = new Int16Array(e), r.HEAP32 = P = new Int32Array(e), r.HEAPU8 = C = new Uint8Array(e), r.HEAPU16 = S = new Uint16Array(e), r.HEAPU32 = I = new Uint32Array(e), r.HEAPF32 = F = new Float32Array(e), r.HEAPF64 = R = new Float64Array(e)
        }
        m && (x = r.buffer);
        var Q, X = r.INITIAL_MEMORY || 16777216;
        if (m) T = r.wasmMemory, x = r.buffer;
        else if (r.wasmMemory) T = r.wasmMemory;
        else if (!((T = new WebAssembly.Memory({
                initial: X / 65536,
                maximum: 32768,
                shared: !0
            })).buffer instanceof SharedArrayBuffer)) throw b("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), Error("bad memory");
        T && (x = T.buffer), X = x.byteLength, z(x);
        var J = [],
            Y = [],
            Z = [];

        function $() {
            m || ie(Y)
        }
        var K = 0,
            ee = null;

        function re(e) {
            r.onAbort && r.onAbort(e), m && console.error("Pthread aborting at " + (new Error).stack), b(e += ""), H = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
            var n = new WebAssembly.RuntimeError(e);
            throw l(n), n
        }

        function ne(e) {
            return e.startsWith("data:application/octet-stream;base64,")
        }
        if (r.preloadedImages = {}, r.preloadedAudios = {}, r.locateFile) ne(te = "wp2_enc_mt.wasm") || (te = _(te));
        else var te = new URL("/wasm/wp2_enc_mt-1feb6658.wasm", e.uri).toString();

        function ae(e) {
            try {
                if (e == te && y) return new Uint8Array(y);
                if (p) return p(e);
                throw "both async and sync fetching of the wasm failed"
            } catch (e) {
                re(e)
            }
        }
        var oe = {
            112416: function() {
                throw "Canceled!"
            },
            112434: function(e, r) {
                setTimeout((function() {
                    Hr(e, r)
                }), 0)
            }
        };

        function ie(e) {
            for (; e.length > 0;) {
                var n = e.shift();
                if ("function" != typeof n) {
                    var t = n.func;
                    "number" == typeof t ? void 0 === n.arg ? Q.get(t)() : Q.get(t)(n.arg) : t(void 0 === n.arg ? null : n.arg)
                } else n(r)
            }
        }
        var ue = 71,
            se = 10,
            ce = 28,
            fe = 16;

        function le(e, r) {
            if (e <= 0 || e > n().length || !0 & e || r < 0) return -28;
            if (0 == r) return 0;
            r >= 2147483647 && (r = 1 / 0);
            var t = Atomics.load(u(), Yr >> 2),
                a = 0;
            if (t == e && Atomics.compareExchange(u(), Yr >> 2, t, 0) == t && (a = 1, --r <= 0)) return 1;
            var o = Atomics.notify(u(), e >> 2, r);
            if (o >= 0) return o + a;
            throw "Atomics.notify returned an unexpected value " + o
        }

        function de(e) {
            if (m) throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
            if (!e) throw "Internal Error! Null pthread_ptr in cleanupThread!";
            var r = pe.pthreads[e];
            if (r) {
                u()[e + 12 >> 2] = 0;
                var n = r.worker;
                pe.returnWorkerToPool(n)
            }
        }
        r._emscripten_futex_wake = le;
        var he, pe = {
            unusedWorkers: [],
            runningWorkers: [],
            tlsInitFunctions: [],
            initMainThreadBlock: function() {
                for (var e = navigator.hardwareConcurrency, r = 0; r < e; ++r) pe.allocateUnusedWorker()
            },
            initRuntime: function() {
                for (var e = Pr(228), r = 0; r < 57; ++r) s()[e / 4 + r] = 0;
                u()[e + 12 >> 2] = e;
                var n = e + 152;
                u()[n >> 2] = n;
                var t = Pr(512);
                for (r = 0; r < 128; ++r) s()[t / 4 + r] = 0;
                Atomics.store(s(), e + 100 >> 2, t), Atomics.store(s(), e + 40 >> 2, e), Br(e, !1, 1), Fr(e)
            },
            initWorker: function() {},
            pthreads: {},
            threadExitHandlers: [],
            runExitHandlers: function() {
                for (; pe.threadExitHandlers.length > 0;) pe.threadExitHandlers.pop()();
                m && Gr() && Ur()
            },
            runExitHandlersAndDeinitThread: function(e, r) {
                Atomics.store(s(), e + 56 >> 2, 1), Atomics.store(s(), e + 60 >> 2, 0), pe.runExitHandlers(), Atomics.store(s(), e + 4 >> 2, r), Atomics.store(s(), e + 0 >> 2, 1), le(e + 0, 2147483647), Br(0, 0, 0)
            },
            setExitStatus: function(e) {},
            threadExit: function(e) {
                var r = Gr();
                r && (pe.runExitHandlersAndDeinitThread(r, e), m && postMessage({
                    cmd: "exit"
                }))
            },
            threadCancel: function() {
                pe.runExitHandlersAndDeinitThread(Gr(), -1), postMessage({
                    cmd: "cancelDone"
                })
            },
            terminateAllThreads: function() {
                for (var e in pe.pthreads)(t = pe.pthreads[e]) && t.worker && pe.returnWorkerToPool(t.worker);
                pe.pthreads = {};
                for (var r = 0; r < pe.unusedWorkers.length; ++r)(n = pe.unusedWorkers[r]).terminate();
                for (pe.unusedWorkers = [], r = 0; r < pe.runningWorkers.length; ++r) {
                    var n, t = (n = pe.runningWorkers[r]).pthread;
                    pe.freeThreadData(t), n.terminate()
                }
                pe.runningWorkers = []
            },
            freeThreadData: function(e) {
                if (e) {
                    if (e.threadInfoStruct) {
                        var r = u()[e.threadInfoStruct + 100 >> 2];
                        u()[e.threadInfoStruct + 100 >> 2] = 0, Sr(r), Sr(e.threadInfoStruct)
                    }
                    e.threadInfoStruct = 0, e.allocatedOwnStack && e.stackBase && Sr(e.stackBase), e.stackBase = 0, e.worker && (e.worker.pthread = null)
                }
            },
            returnWorkerToPool: function(e) {
                pe.runWithoutMainThreadQueuedCalls((function() {
                    delete pe.pthreads[e.pthread.threadInfoStruct], pe.unusedWorkers.push(e), pe.runningWorkers.splice(pe.runningWorkers.indexOf(e), 1), pe.freeThreadData(e.pthread), e.pthread = void 0
                }))
            },
            runWithoutMainThreadQueuedCalls: function(e) {
                u()[Jr >> 2] = 0;
                try {
                    e()
                } finally {
                    u()[Jr >> 2] = 1
                }
            },
            receiveObjectTransfer: function(e) {},
            threadInit: function() {
                for (var e in pe.tlsInitFunctions) pe.tlsInitFunctions[e]()
            },
            loadWasmModuleToWorker: function(e, n) {
                e.onmessage = function(t) {
                    var a = t.data,
                        o = a.cmd;
                    if (e.pthread && (pe.currentProxiedOperationCallerThread = e.pthread.threadInfoStruct), a.targetThread && a.targetThread != Gr()) {
                        var i = pe.pthreads[a.targetThread];
                        return i ? i.worker.postMessage(t.data, a.transferList) : console.error('Internal error! Worker sent a message "' + o + '" to target pthread ' + a.targetThread + ", but that thread no longer exists!"), void(pe.currentProxiedOperationCallerThread = void 0)
                    }
                    if ("processQueuedMainThreadWork" === o) Or();
                    else if ("spawnThread" === o) xr(t.data);
                    else if ("cleanupThread" === o) de(a.thread);
                    else if ("killThread" === o) ! function(e) {
                        if (m) throw "Internal Error! killThread() can only ever be called from main application thread!";
                        if (!e) throw "Internal Error! Null pthread_ptr in killThread!";
                        u()[e + 12 >> 2] = 0;
                        var r = pe.pthreads[e];
                        r.worker.terminate(), pe.freeThreadData(r), pe.runningWorkers.splice(pe.runningWorkers.indexOf(r.worker), 1), r.worker.pthread = void 0
                    }(a.thread);
                    else if ("cancelThread" === o) ! function(e) {
                        if (m) throw "Internal Error! cancelThread() can only ever be called from main application thread!";
                        if (!e) throw "Internal Error! Null pthread_ptr in cancelThread!";
                        pe.pthreads[e].worker.postMessage({
                            cmd: "cancel"
                        })
                    }(a.thread);
                    else if ("loaded" === o) e.loaded = !0, n && n(e), e.runPthread && (e.runPthread(), delete e.runPthread);
                    else if ("print" === o) w("Thread " + a.threadId + ": " + a.text);
                    else if ("printErr" === o) b("Thread " + a.threadId + ": " + a.text);
                    else if ("alert" === o) alert("Thread " + a.threadId + ": " + a.text);
                    else if ("exit" === o) e.pthread && Atomics.load(s(), e.pthread.threadInfoStruct + 64 >> 2) && pe.returnWorkerToPool(e);
                    else if ("exitProcess" === o) try {
                        ! function(e, n) {
                            if (!n || !ve() || 0 !== e) {
                                if (!n && m) throw postMessage({
                                    cmd: "exitProcess",
                                    returnCode: e
                                }), new Zr(e);
                                ve() || (pe.terminateAllThreads(), r.onExit && r.onExit(e), H = !0), v(e, new Zr(e))
                            }
                        }(a.returnCode)
                    } catch (t) {
                        if (t instanceof Zr) return;
                        throw t
                    } else "cancelDone" === o ? pe.returnWorkerToPool(e) : "objectTransfer" === o ? pe.receiveObjectTransfer(t.data) : "setimmediate" === t.data.target ? e.postMessage(t.data) : b("worker sent an unknown command " + o);
                    pe.currentProxiedOperationCallerThread = void 0
                }, e.onerror = function(e) {
                    b("pthread sent an error! " + e.filename + ":" + e.lineno + ": " + e.message)
                }, e.postMessage({
                    cmd: "load",
                    urlOrBlob: r.mainScriptUrlOrBlob,
                    wasmMemory: T,
                    wasmModule: k
                })
            },
            allocateUnusedWorker: function() {
                if (r.locateFile) {
                    var n = _("wp2_enc_mt.worker.js");
                    pe.unusedWorkers.push(new Worker(n))
                } else pe.unusedWorkers.push(new Worker(new URL("/js/wp2_enc_mt.worker-7435247e.js", e.uri)))
            },
            getNewWorker: function() {
                return 0 == pe.unusedWorkers.length && (pe.allocateUnusedWorker(), pe.loadWasmModuleToWorker(pe.unusedWorkers[0])), pe.unusedWorkers.pop()
            },
            busySpinWait: function(e) {
                for (var r = performance.now() + e; performance.now() < r;);
            }
        };

        function ve() {
            return A || !1
        }
        r.establishStackSpace = function(e, r) {
            zr(e, r), Vr(e)
        }, r.invokeEntryPoint = function(e, r) {
            return Q.get(e)(r)
        }, r.keepRuntimeAlive = ve, he = m ? function() {
            return performance.now() - r.__performance_now_clock_drift
        } : function() {
            return performance.now()
        };
        var me = 0,
            ge = 4,
            _e = 8,
            ye = 12,
            we = 13,
            be = 16;

        function Te(e) {
            this.excPtr = e, this.ptr = e - be, this.set_type = function(e) {
                u()[this.ptr + _e >> 2] = e
            }, this.get_type = function() {
                return u()[this.ptr + _e >> 2]
            }, this.set_destructor = function(e) {
                u()[this.ptr + me >> 2] = e
            }, this.get_destructor = function() {
                return u()[this.ptr + me >> 2]
            }, this.set_refcount = function(e) {
                u()[this.ptr + ge >> 2] = e
            }, this.set_caught = function(e) {
                e = e ? 1 : 0, n()[this.ptr + ye >> 0] = e
            }, this.get_caught = function() {
                return 0 != n()[this.ptr + ye >> 0]
            }, this.set_rethrown = function(e) {
                e = e ? 1 : 0, n()[this.ptr + we >> 0] = e
            }, this.get_rethrown = function() {
                return 0 != n()[this.ptr + we >> 0]
            }, this.init = function(e, r) {
                this.set_type(e), this.set_destructor(r), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
            }, this.add_ref = function() {
                Atomics.add(u(), this.ptr + ge >> 2, 1)
            }, this.release_ref = function() {
                return 1 === Atomics.sub(u(), this.ptr + ge >> 2, 1)
            }
        }
        var ke = {};

        function Ae(e) {
            for (; e.length;) {
                var r = e.pop();
                e.pop()(r)
            }
        }

        function xe(e) {
            return this.fromWireType(s()[e >> 2])
        }
        var Ee = {},
            Ce = {},
            We = {};

        function Se(e) {
            if (void 0 === e) return "_unknown";
            var r = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return r >= 48 && r <= 57 ? "_" + e : e
        }

        function Pe(e, r) {
            return e = Se(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)
        }

        function Ie(e, r) {
            var n = Pe(r, (function(e) {
                this.name = r, this.message = e;
                var n = new Error(e).stack;
                void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
            }));
            return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, n
        }
        var Fe = void 0;

        function Re(e) {
            throw new Fe(e)
        }

        function He(e, r, n) {
            function t(r) {
                var t = n(r);
                t.length !== e.length && Re("Mismatched type converter count");
                for (var a = 0; a < e.length; ++a) De(e[a], t[a])
            }
            e.forEach((function(e) {
                We[e] = r
            }));
            var a = new Array(r.length),
                o = [],
                i = 0;
            r.forEach((function(e, r) {
                Ce.hasOwnProperty(e) ? a[r] = Ce[e] : (o.push(e), Ee.hasOwnProperty(e) || (Ee[e] = []), Ee[e].push((function() {
                    a[r] = Ce[e], ++i === o.length && t(a)
                })))
            })), 0 === o.length && t(a)
        }

        function Me(e) {
            switch (e) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + e)
            }
        }
        var Oe = void 0;

        function Le(e) {
            for (var r = "", n = e; a()[n];) r += Oe[a()[n++]];
            return r
        }
        var je = void 0;

        function Be(e) {
            throw new je(e)
        }

        function De(e, r, n) {
            if (n = n || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var t = r.name;
            if (e || Be('type "' + t + '" must have a positive integer typeid pointer'), Ce.hasOwnProperty(e)) {
                if (n.ignoreDuplicateRegistrations) return;
                Be("Cannot register type '" + t + "' twice")
            }
            if (Ce[e] = r, delete We[e], Ee.hasOwnProperty(e)) {
                var a = Ee[e];
                delete Ee[e], a.forEach((function(e) {
                    e()
                }))
            }
        }
        var Ge = [],
            Ue = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];

        function Ne(e) {
            e > 4 && 0 == --Ue[e].refcount && (Ue[e] = void 0, Ge.push(e))
        }

        function Ve() {
            for (var e = 0, r = 5; r < Ue.length; ++r) void 0 !== Ue[r] && ++e;
            return e
        }

        function qe() {
            for (var e = 5; e < Ue.length; ++e)
                if (void 0 !== Ue[e]) return Ue[e];
            return null
        }

        function ze(e) {
            switch (e) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var r = Ge.length ? Ge.pop() : Ue.length;
                    return Ue[r] = {
                        refcount: 1,
                        value: e
                    }, r
            }
        }

        function Qe(e) {
            if (null === e) return "null";
            var r = typeof e;
            return "object" === r || "array" === r || "function" === r ? e.toString() : "" + e
        }

        function Xe(e, r) {
            switch (r) {
                case 2:
                    return function(e) {
                        return this.fromWireType((T.buffer != x && z(T.buffer), F)[e >> 2])
                    };
                case 3:
                    return function(e) {
                        return this.fromWireType(c()[e >> 3])
                    };
                default:
                    throw new TypeError("Unknown float type: " + e)
            }
        }

        function Je(e, r, n, t, a) {
            var o = r.length;
            o < 2 && Be("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var i = null !== r[1] && null !== n, u = !1, s = 1; s < r.length; ++s)
                if (null !== r[s] && void 0 === r[s].destructorFunction) {
                    u = !0;
                    break
                } var c = "void" !== r[0].name,
                f = "",
                l = "";
            for (s = 0; s < o - 2; ++s) f += (0 !== s ? ", " : "") + "arg" + s, l += (0 !== s ? ", " : "") + "arg" + s + "Wired";
            var d = "return function " + Se(e) + "(" + f + ") {\nif (arguments.length !== " + (o - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (o - 2) + " args!');\n}\n";
            u && (d += "var destructors = [];\n");
            var h = u ? "destructors" : "null",
                p = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                v = [Be, t, a, Ae, r[0], r[1]];
            for (i && (d += "var thisWired = classParam.toWireType(" + h + ", this);\n"), s = 0; s < o - 2; ++s) d += "var arg" + s + "Wired = argType" + s + ".toWireType(" + h + ", arg" + s + "); // " + r[s + 2].name + "\n", p.push("argType" + s), v.push(r[s + 2]);
            if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), d += (c ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) d += "runDestructors(destructors);\n";
            else
                for (s = i ? 1 : 2; s < r.length; ++s) {
                    var m = 1 === s ? "thisWired" : "arg" + (s - 2) + "Wired";
                    null !== r[s].destructorFunction && (d += m + "_dtor(" + m + "); // " + r[s].name + "\n", p.push(m + "_dtor"), v.push(r[s].destructorFunction))
                }
            return c && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", p.push(d),
                function(e, r) {
                    if (!(e instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
                    var n = Pe(e.name || "unknownFunctionName", (function() {}));
                    n.prototype = e.prototype;
                    var t = new n,
                        a = e.apply(t, r);
                    return a instanceof Object ? a : t
                }(Function, p).apply(null, v)
        }

        function Ye(e, n, t) {
            r.hasOwnProperty(e) ? ((void 0 === t || void 0 !== r[e].overloadTable && void 0 !== r[e].overloadTable[t]) && Be("Cannot register public name '" + e + "' twice"), function(e, r, n) {
                if (void 0 === e[r].overloadTable) {
                    var t = e[r];
                    e[r] = function() {
                        return e[r].overloadTable.hasOwnProperty(arguments.length) || Be("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[r].overloadTable + ")!"), e[r].overloadTable[arguments.length].apply(this, arguments)
                    }, e[r].overloadTable = [], e[r].overloadTable[t.argCount] = t
                }
            }(r, e, e), r.hasOwnProperty(t) && Be("Cannot register multiple overloads of a function with the same number of arguments (" + t + ")!"), r[e].overloadTable[t] = n) : (r[e] = n, void 0 !== t && (r[e].numArguments = t))
        }

        function Ze(e, n, t) {
            return e.includes("j") ? function(e, n, t) {
                var a = r["dynCall_" + e];
                return t && t.length ? a.apply(null, [n].concat(t)) : a.call(null, n)
            }(e, n, t) : Q.get(n).apply(null, t)
        }

        function $e(e, r) {
            var n, t, a, o = (e = Le(e)).includes("j") ? (n = e, t = r, a = [], function() {
                a.length = arguments.length;
                for (var e = 0; e < arguments.length; e++) a[e] = arguments[e];
                return Ze(n, t, a)
            }) : Q.get(r);
            return "function" != typeof o && Be("unknown function pointer with signature " + e + ": " + r), o
        }
        var Ke = void 0;

        function er(e) {
            var r = Ir(e),
                n = Le(r);
            return Sr(r), n
        }

        function rr(e, r, t) {
            switch (r) {
                case 0:
                    return t ? function(e) {
                        return n()[e]
                    } : function(e) {
                        return a()[e]
                    };
                case 1:
                    return t ? function(e) {
                        return o()[e >> 1]
                    } : function(e) {
                        return i()[e >> 1]
                    };
                case 2:
                    return t ? function(e) {
                        return u()[e >> 2]
                    } : function(e) {
                        return s()[e >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + e)
            }
        }
        var nr = {};

        function tr() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }

        function ar(e, r) {
            var n = Ce[e];
            return void 0 === n && Be(r + " has unknown type " + er(e)), n
        }
        var or = {},
            ir = [];

        function ur(e, r, t) {
            if (e <= 0 || e > n().length || !0 & e) return -28;
            var a = Atomics.wait(u(), e >> 2, r, t);
            if ("timed-out" === a) return -73;
            if ("not-equal" === a) return -6;
            if ("ok" === a) return 0;
            throw "Atomics.wait returned an unexpected value " + a
        }

        function sr(e, r) {
            for (var n = arguments.length - 2, t = Nr(), a = n, o = qr(8 * a), i = o >> 3, u = 0; u < n; u++) {
                var s = arguments[2 + u];
                c()[i + u] = s
            }
            var f = Lr(e, a, o, r);
            return Vr(t), f
        }
        var cr = [];

        function fr(e) {
            try {
                return T.grow(e - x.byteLength + 65535 >>> 16), z(T.buffer), 1
            } catch (e) {}
        }
        var lr = {
            inEventHandler: 0,
            removeAllEventListeners: function() {
                for (var e = lr.eventHandlers.length - 1; e >= 0; --e) lr._removeHandler(e);
                lr.eventHandlers = [], lr.deferredCalls = []
            },
            registerRemoveEventListeners: function() {
                lr.removeEventListenersRegistered || (lr.removeEventListenersRegistered = !0)
            },
            deferredCalls: [],
            deferCall: function(e, r, n) {
                function t(e, r) {
                    if (e.length != r.length) return !1;
                    for (var n in e)
                        if (e[n] != r[n]) return !1;
                    return !0
                }
                for (var a in lr.deferredCalls) {
                    var o = lr.deferredCalls[a];
                    if (o.targetFunction == e && t(o.argsList, n)) return
                }
                lr.deferredCalls.push({
                    targetFunction: e,
                    precedence: r,
                    argsList: n
                }), lr.deferredCalls.sort((function(e, r) {
                    return e.precedence < r.precedence
                }))
            },
            removeDeferredCalls: function(e) {
                for (var r = 0; r < lr.deferredCalls.length; ++r) lr.deferredCalls[r].targetFunction == e && (lr.deferredCalls.splice(r, 1), --r)
            },
            canPerformEventHandlerRequests: function() {
                return lr.inEventHandler && lr.currentEventHandler.allowsDeferredCalls
            },
            runDeferredCalls: function() {
                if (lr.canPerformEventHandlerRequests())
                    for (var e = 0; e < lr.deferredCalls.length; ++e) {
                        var r = lr.deferredCalls[e];
                        lr.deferredCalls.splice(e, 1), --e, r.targetFunction.apply(null, r.argsList)
                    }
            },
            eventHandlers: [],
            removeAllHandlersOnTarget: function(e, r) {
                for (var n = 0; n < lr.eventHandlers.length; ++n) lr.eventHandlers[n].target != e || r && r != lr.eventHandlers[n].eventTypeString || lr._removeHandler(n--)
            },
            _removeHandler: function(e) {
                var r = lr.eventHandlers[e];
                r.target.removeEventListener(r.eventTypeString, r.eventListenerFunc, r.useCapture), lr.eventHandlers.splice(e, 1)
            },
            registerOrRemoveHandler: function(e) {
                var r = function(r) {
                    ++lr.inEventHandler, lr.currentEventHandler = e, lr.runDeferredCalls(), e.handlerFunc(r), lr.runDeferredCalls(), --lr.inEventHandler
                };
                if (e.callbackfunc) e.eventListenerFunc = r, e.target.addEventListener(e.eventTypeString, r, e.useCapture), lr.eventHandlers.push(e), lr.registerRemoveEventListeners();
                else
                    for (var n = 0; n < lr.eventHandlers.length; ++n) lr.eventHandlers[n].target == e.target && lr.eventHandlers[n].eventTypeString == e.eventTypeString && lr._removeHandler(n--)
            },
            queueEventHandlerOnThread_iiii: function(e, r, n, t, a) {
                var o = Nr(),
                    i = qr(12);
                u()[i >> 2] = n, u()[i + 4 >> 2] = t, u()[i + 8 >> 2] = a, jr(0, e, 637534208, r, t, i), Vr(o)
            },
            getTargetThreadForEventCallback: function(e) {
                switch (e) {
                    case 1:
                        return 0;
                    case 2:
                        return pe.currentProxiedOperationCallerThread;
                    default:
                        return e
                }
            },
            getNodeNameForTarget: function(e) {
                return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : ""
            },
            fullscreenEnabled: function() {
                return document.fullscreenEnabled || document.webkitFullscreenEnabled
            }
        };

        function dr(e, r, n, t) {
            var a, o, i, s = Nr(),
                c = qr(12),
                f = 0;
            r && (o = B(a = r) + 1, i = Pr(o), j(a, i, o), f = i), u()[c >> 2] = f, u()[c + 4 >> 2] = n, u()[c + 8 >> 2] = t, jr(0, e, 657457152, 0, f, c), Vr(s)
        }
        var hr = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];

        function pr(e) {
            var r;
            return e = (r = e) > 2 ? L(r) : r, hr[e] || ("undefined" != typeof document ? document.querySelector(e) : void 0)
        }

        function vr(e) {
            return pr(e)
        }

        function mr(e, r, n) {
            var t = vr(e);
            if (!t) return -4;
            if (t.canvasSharedPtr && (u()[t.canvasSharedPtr >> 2] = r, u()[t.canvasSharedPtr + 4 >> 2] = n), !t.offscreenCanvas && t.controlTransferredOffscreen) return t.canvasSharedPtr ? (function(e, r, n, t) {
                dr(e, r = r ? L(r) : "", n, t)
            }(u()[t.canvasSharedPtr + 8 >> 2], e, r, n), 1) : -4;
            t.offscreenCanvas && (t = t.offscreenCanvas);
            var a = !1;
            if (t.GLctxObject && t.GLctxObject.GLctx) {
                var o = t.GLctxObject.GLctx.getParameter(2978);
                a = 0 === o[0] && 0 === o[1] && o[2] === t.width && o[3] === t.height
            }
            return t.width = r, t.height = n, a && t.GLctxObject.GLctx.viewport(0, 0, r, n), 0
        }

        function gr(e, r, n) {
            return m ? sr(1, 1, e, r, n) : mr(e, r, n)
        }
        var _r, yr = {
                counter: 1,
                buffers: [],
                programs: [],
                framebuffers: [],
                renderbuffers: [],
                textures: [],
                shaders: [],
                vaos: [],
                contexts: {},
                offscreenCanvases: {},
                queries: [],
                stringCache: {},
                unpackAlignment: 4,
                recordError: function(e) {
                    yr.lastError || (yr.lastError = e)
                },
                getNewId: function(e) {
                    for (var r = yr.counter++, n = e.length; n < r; n++) e[n] = null;
                    return r
                },
                getSource: function(e, r, n, t) {
                    for (var a = "", o = 0; o < r; ++o) {
                        var i = t ? u()[t + 4 * o >> 2] : -1;
                        a += L(u()[n + 4 * o >> 2], i < 0 ? void 0 : i)
                    }
                    return a
                },
                createContext: function(e, r) {
                    e.getContextSafariWebGL2Fixed || (e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = function(r, n) {
                        var t = e.getContextSafariWebGL2Fixed(r, n);
                        return "webgl" == r == t instanceof WebGLRenderingContext ? t : null
                    });
                    var n = e.getContext("webgl", r);
                    return n ? yr.registerContext(n, r) : 0
                },
                registerContext: function(e, r) {
                    var n = Pr(8);
                    u()[n + 4 >> 2] = Gr();
                    var t = {
                        handle: n,
                        attributes: r,
                        version: r.majorVersion,
                        GLctx: e
                    };
                    return e.canvas && (e.canvas.GLctxObject = t), yr.contexts[n] = t, (void 0 === r.enableExtensionsByDefault || r.enableExtensionsByDefault) && yr.initExtensions(t), n
                },
                makeContextCurrent: function(e) {
                    return yr.currentContext = yr.contexts[e], r.ctx = _r = yr.currentContext && yr.currentContext.GLctx, !(e && !_r)
                },
                getContext: function(e) {
                    return yr.contexts[e]
                },
                deleteContext: function(e) {
                    yr.currentContext === yr.contexts[e] && (yr.currentContext = null), "object" == typeof lr && lr.removeAllHandlersOnTarget(yr.contexts[e].GLctx.canvas), yr.contexts[e] && yr.contexts[e].GLctx.canvas && (yr.contexts[e].GLctx.canvas.GLctxObject = void 0), Sr(yr.contexts[e].handle), yr.contexts[e] = null
                },
                initExtensions: function(e) {
                    if (e || (e = yr.currentContext), !e.initExtensionsDone) {
                        e.initExtensionsDone = !0;
                        var r, n = e.GLctx;
                        ! function(e) {
                            var r = e.getExtension("ANGLE_instanced_arrays");
                            r && (e.vertexAttribDivisor = function(e, n) {
                                r.vertexAttribDivisorANGLE(e, n)
                            }, e.drawArraysInstanced = function(e, n, t, a) {
                                r.drawArraysInstancedANGLE(e, n, t, a)
                            }, e.drawElementsInstanced = function(e, n, t, a, o) {
                                r.drawElementsInstancedANGLE(e, n, t, a, o)
                            })
                        }(n),
                        function(e) {
                            var r = e.getExtension("OES_vertex_array_object");
                            r && (e.createVertexArray = function() {
                                return r.createVertexArrayOES()
                            }, e.deleteVertexArray = function(e) {
                                r.deleteVertexArrayOES(e)
                            }, e.bindVertexArray = function(e) {
                                r.bindVertexArrayOES(e)
                            }, e.isVertexArray = function(e) {
                                return r.isVertexArrayOES(e)
                            })
                        }(n),
                        function(e) {
                            var r = e.getExtension("WEBGL_draw_buffers");
                            r && (e.drawBuffers = function(e, n) {
                                r.drawBuffersWEBGL(e, n)
                            })
                        }(n), n.disjointTimerQueryExt = n.getExtension("EXT_disjoint_timer_query"), (r = n).multiDrawWebgl = r.getExtension("WEBGL_multi_draw"), (n.getSupportedExtensions() || []).forEach((function(e) {
                            e.includes("lose_context") || e.includes("debug") || n.getExtension(e)
                        }))
                    }
                }
            },
            wr = ["default", "low-power", "high-performance"],
            br = {
                mappings: {},
                buffers: [null, [],
                    []
                ],
                printChar: function(e, r) {
                    var n = br.buffers[e];
                    0 === r || 10 === r ? ((1 === e ? w : b)(O(n, 0)), n.length = 0) : n.push(r)
                },
                varargs: void 0,
                get: function() {
                    return br.varargs += 4, u()[br.varargs - 4 >> 2]
                },
                getStr: function(e) {
                    return L(e)
                },
                get64: function(e, r) {
                    return e
                }
            };

        function Tr(e) {
            return m ? sr(2, 1, e) : 0
        }

        function kr(e, r, n, t, a) {
            if (m) return sr(3, 1, e, r, n, t, a)
        }

        function Ar(e, r, n, t) {
            if (m) return sr(4, 1, e, r, n, t);
            for (var o = 0, i = 0; i < n; i++) {
                for (var s = u()[r + 8 * i >> 2], c = u()[r + (8 * i + 4) >> 2], f = 0; f < c; f++) br.printChar(e, a()[s + f]);
                o += c
            }
            return u()[t >> 2] = o, 0
        }

        function xr(e) {
            if (m) throw "Internal Error! spawnThread() can only ever be called from main application thread!";
            var r = pe.getNewWorker();
            if (!r) return 6;
            if (void 0 !== r.pthread) throw "Internal error!";
            if (!e.pthread_ptr) throw "Internal error, no pthread ptr!";
            pe.runningWorkers.push(r);
            for (var n = Pr(512), t = 0; t < 128; ++t) u()[n + 4 * t >> 2] = 0;
            var a = e.stackBase + e.stackSize,
                o = pe.pthreads[e.pthread_ptr] = {
                    worker: r,
                    stackBase: e.stackBase,
                    stackSize: e.stackSize,
                    allocatedOwnStack: e.allocatedOwnStack,
                    threadInfoStruct: e.pthread_ptr
                },
                i = o.threadInfoStruct >> 2;
            Atomics.store(s(), i + 16, e.detached), Atomics.store(s(), i + 25, n), Atomics.store(s(), i + 10, o.threadInfoStruct), Atomics.store(s(), i + 20, e.stackSize), Atomics.store(s(), i + 19, a), Atomics.store(s(), i + 26, e.stackSize), Atomics.store(s(), i + 28, a), Atomics.store(s(), i + 29, e.detached);
            var c = Dr() + 40;
            Atomics.store(s(), i + 43, c), r.pthread = o;
            var f = {
                cmd: "run",
                start_routine: e.startRoutine,
                arg: e.arg,
                threadInfoStruct: e.pthread_ptr,
                stackBase: e.stackBase,
                stackSize: e.stackSize
            };
            return r.runPthread = function() {
                f.time = performance.now(), r.postMessage(f, e.transferList)
            }, r.loaded && (r.runPthread(), delete r.runPthread), 0
        }

        function Er() {
            if (m) {
                var e = Gr();
                if (e && !Atomics.load(s(), e + 56 >> 2) && 2 == Atomics.load(s(), e + 0 >> 2)) throw "Canceled!"
            }
        }
        m || pe.initMainThreadBlock(), Fe = r.InternalError = Ie(Error, "InternalError"),
            function() {
                for (var e = new Array(256), r = 0; r < 256; ++r) e[r] = String.fromCharCode(r);
                Oe = e
            }(), je = r.BindingError = Ie(Error, "BindingError"), r.count_emval_handles = Ve, r.get_first_emval = qe, Ke = r.UnboundTypeError = Ie(Error, "UnboundTypeError");
        var Cr = [null, gr, Tr, kr, Ar],
            Wr = {
                d: function(e, r, n, t) {
                    re("Assertion failed: " + L(e) + ", at: " + [r ? L(r) : "unknown filename", n, t ? L(t) : "unknown function"])
                },
                O: function(e) {
                    return Pr(e + be) + be
                },
                r: function(e, r) {
                    return n = e, t = r, void pe.threadExitHandlers.push((function() {
                        Q.get(n)(t)
                    }));
                    var n, t
                },
                N: function(e, r, n) {
                    throw new Te(e).init(r, n), e
                },
                t: function(e) {
                    var r = ke[e];
                    delete ke[e];
                    var n = r.rawConstructor,
                        t = r.rawDestructor,
                        a = r.fields;
                    He([e], a.map((function(e) {
                        return e.getterReturnType
                    })).concat(a.map((function(e) {
                        return e.setterArgumentType
                    }))), (function(e) {
                        var o = {};
                        return a.forEach((function(r, n) {
                            var t = r.fieldName,
                                i = e[n],
                                u = r.getter,
                                s = r.getterContext,
                                c = e[n + a.length],
                                f = r.setter,
                                l = r.setterContext;
                            o[t] = {
                                read: function(e) {
                                    return i.fromWireType(u(s, e))
                                },
                                write: function(e, r) {
                                    var n = [];
                                    f(l, e, c.toWireType(n, r)), Ae(n)
                                }
                            }
                        })), [{
                            name: r.name,
                            fromWireType: function(e) {
                                var r = {};
                                for (var n in o) r[n] = o[n].read(e);
                                return t(e), r
                            },
                            toWireType: function(e, r) {
                                for (var a in o)
                                    if (!(a in r)) throw new TypeError('Missing field:  "' + a + '"');
                                var i = n();
                                for (a in o) o[a].write(i, r[a]);
                                return null !== e && e.push(t, i), i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: xe,
                            destructorFunction: t
                        }]
                    }))
                },
                x: function(e, r, n, t, a) {},
                L: function(e, r, t, a, i) {
                    var s = Me(t);
                    De(e, {
                        name: r = Le(r),
                        fromWireType: function(e) {
                            return !!e
                        },
                        toWireType: function(e, r) {
                            return r ? a : i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(e) {
                            var a;
                            if (1 === t) a = n();
                            else if (2 === t) a = o();
                            else {
                                if (4 !== t) throw new TypeError("Unknown boolean type size: " + r);
                                a = u()
                            }
                            return this.fromWireType(a[e >> s])
                        },
                        destructorFunction: null
                    })
                },
                K: function(e, r) {
                    De(e, {
                        name: r = Le(r),
                        fromWireType: function(e) {
                            var r = Ue[e].value;
                            return Ne(e), r
                        },
                        toWireType: function(e, r) {
                            return ze(r)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: xe,
                        destructorFunction: null
                    })
                },
                o: function(e, r, n) {
                    var t = Me(n);
                    De(e, {
                        name: r = Le(r),
                        fromWireType: function(e) {
                            return e
                        },
                        toWireType: function(e, r) {
                            if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + Qe(r) + '" to ' + this.name);
                            return r
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Xe(r, t),
                        destructorFunction: null
                    })
                },
                s: function(e, n, t, a, o, i) {
                    var s = function(e, r) {
                        for (var n = [], t = 0; t < e; t++) n.push(u()[(r >> 2) + t]);
                        return n
                    }(n, t);
                    e = Le(e), o = $e(a, o), Ye(e, (function() {
                        ! function(e, r) {
                            var n = [],
                                t = {};
                            throw r.forEach((function e(r) {
                                t[r] || Ce[r] || (We[r] ? We[r].forEach(e) : (n.push(r), t[r] = !0))
                            })), new Ke(e + ": " + n.map(er).join([", "]))
                        }("Cannot call " + e + " due to unbound types", s)
                    }), n - 1), He([], s, (function(t) {
                        var a = [t[0], null].concat(t.slice(1));
                        return function(e, n, t) {
                            r.hasOwnProperty(e) || Re("Replacing nonexistant public symbol"), void 0 !== r[e].overloadTable && void 0 !== t ? r[e].overloadTable[t] = n : (r[e] = n, r[e].argCount = t)
                        }(e, Je(e, a, null, o, i), n - 1), []
                    }))
                },
                e: function(e, r, n, t, a) {
                    r = Le(r), -1 === a && (a = 4294967295);
                    var o = Me(n),
                        i = function(e) {
                            return e
                        };
                    if (0 === t) {
                        var u = 32 - 8 * n;
                        i = function(e) {
                            return e << u >>> u
                        }
                    }
                    var s = r.includes("unsigned");
                    De(e, {
                        name: r,
                        fromWireType: i,
                        toWireType: function(e, n) {
                            if ("number" != typeof n && "boolean" != typeof n) throw new TypeError('Cannot convert "' + Qe(n) + '" to ' + this.name);
                            if (n < t || n > a) throw new TypeError('Passing a number "' + Qe(n) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + t + ", " + a + "]!");
                            return s ? n >>> 0 : 0 | n
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: rr(r, o, 0 !== t),
                        destructorFunction: null
                    })
                },
                b: function(e, r, n) {
                    var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];

                    function a(e) {
                        e >>= 2;
                        var r = s(),
                            n = r[e],
                            a = r[e + 1];
                        return new t(x, a, n)
                    }
                    De(e, {
                        name: n = Le(n),
                        fromWireType: a,
                        argPackAdvance: 8,
                        readValueFromPointer: a
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                p: function(e, r) {
                    var n = "std::string" === (r = Le(r));
                    De(e, {
                        name: r,
                        fromWireType: function(e) {
                            var r, t = s()[e >> 2];
                            if (n)
                                for (var o = e + 4, i = 0; i <= t; ++i) {
                                    var u = e + 4 + i;
                                    if (i == t || 0 == a()[u]) {
                                        var c = L(o, u - o);
                                        void 0 === r ? r = c : (r += String.fromCharCode(0), r += c), o = u + 1
                                    }
                                } else {
                                    var f = new Array(t);
                                    for (i = 0; i < t; ++i) f[i] = String.fromCharCode(a()[e + 4 + i]);
                                    r = f.join("")
                                }
                            return Sr(e), r
                        },
                        toWireType: function(e, r) {
                            r instanceof ArrayBuffer && (r = new Uint8Array(r));
                            var t = "string" == typeof r;
                            t || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || Be("Cannot pass non-string to std::string");
                            var o = (n && t ? function() {
                                    return B(r)
                                } : function() {
                                    return r.length
                                })(),
                                i = Pr(4 + o + 1);
                            if (s()[i >> 2] = o, n && t) j(r, i + 4, o + 1);
                            else if (t)
                                for (var u = 0; u < o; ++u) {
                                    var c = r.charCodeAt(u);
                                    c > 255 && (Sr(i), Be("String has UTF-16 code units that do not fit in 8 bits")), a()[i + 4 + u] = c
                                } else
                                    for (u = 0; u < o; ++u) a()[i + 4 + u] = r[u];
                            return null !== e && e.push(Sr, i), i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: xe,
                        destructorFunction: function(e) {
                            Sr(e)
                        }
                    })
                },
                i: function(e, r, n) {
                    var t, a, o, u, c;
                    n = Le(n), 2 === r ? (t = D, a = G, u = U, o = function() {
                        return i()
                    }, c = 1) : 4 === r && (t = N, a = V, u = q, o = function() {
                        return s()
                    }, c = 2), De(e, {
                        name: n,
                        fromWireType: function(e) {
                            for (var n, a = s()[e >> 2], i = o(), u = e + 4, f = 0; f <= a; ++f) {
                                var l = e + 4 + f * r;
                                if (f == a || 0 == i[l >> c]) {
                                    var d = t(u, l - u);
                                    void 0 === n ? n = d : (n += String.fromCharCode(0), n += d), u = l + r
                                }
                            }
                            return Sr(e), n
                        },
                        toWireType: function(e, t) {
                            "string" != typeof t && Be("Cannot pass non-string to C++ string type " + n);
                            var o = u(t),
                                i = Pr(4 + o + r);
                            return s()[i >> 2] = o >> c, a(t, i + 4, o + r), null !== e && e.push(Sr, i), i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: xe,
                        destructorFunction: function(e) {
                            Sr(e)
                        }
                    })
                },
                u: function(e, r, n, t, a, o) {
                    ke[e] = {
                        name: Le(r),
                        rawConstructor: $e(n, t),
                        rawDestructor: $e(a, o),
                        fields: []
                    }
                },
                c: function(e, r, n, t, a, o, i, u, s, c) {
                    ke[e].fields.push({
                        fieldName: Le(r),
                        getterReturnType: n,
                        getter: $e(t, a),
                        getterContext: o,
                        setterArgumentType: i,
                        setter: $e(u, s),
                        setterContext: c
                    })
                },
                M: function(e, r) {
                    De(e, {
                        isVoid: !0,
                        name: r = Le(r),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function(e, r) {}
                    })
                },
                G: function(e, r) {
                    if (e == r) postMessage({
                        cmd: "processQueuedMainThreadWork"
                    });
                    else if (m) postMessage({
                        targetThread: e,
                        cmd: "processThreadQueue"
                    });
                    else {
                        var n = pe.pthreads[e],
                            t = n && n.worker;
                        if (!t) return;
                        t.postMessage({
                            cmd: "processThreadQueue"
                        })
                    }
                    return 1
                },
                l: Ne,
                J: function(e) {
                    return 0 === e ? ze(tr()) : (e = void 0 === (n = nr[r = e]) ? Le(r) : n, ze(tr()[e]));
                    var r, n
                },
                Q: function(e) {
                    e > 4 && (Ue[e].refcount += 1)
                },
                v: function(e, n, t, a) {
                    e = function(e) {
                        return e || Be("Cannot use deleted val. handle = " + e), Ue[e].value
                    }(e);
                    var o = or[n];
                    return o || (o = function(e) {
                        for (var n = "", t = 0; t < e; ++t) n += (0 !== t ? ", " : "") + "arg" + t;
                        var a = "return function emval_allocator_" + e + "(constructor, argTypes, args) {\n";
                        for (t = 0; t < e; ++t) a += "var argType" + t + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + t + '], "parameter ' + t + '");\nvar arg' + t + " = argType" + t + ".readValueFromPointer(args);\nargs += argType" + t + "['argPackAdvance'];\n";
                        return a += "var obj = new constructor(" + n + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", a)(ar, r, ze)
                    }(n), or[n] = o), o(e, t, a)
                },
                j: function() {
                    re()
                },
                n: function(e, r, n) {
                    var t = function(e, r) {
                        var n;
                        for (ir.length = 0, r >>= 2; n = a()[e++];) {
                            var t = n < 105;
                            t && 1 & r && r++, ir.push(t ? c()[r++ >> 1] : u()[r]), ++r
                        }
                        return ir
                    }(r, n);
                    return oe[e].apply(null, t)
                },
                C: function() {},
                m: function(e, r) {},
                f: ur,
                g: le,
                h: he,
                A: function(e, r, n) {
                    a().copyWithin(e, r, r + n)
                },
                R: function() {
                    return navigator.hardwareConcurrency
                },
                D: function(e, r, n) {
                    cr.length = r;
                    for (var t = n >> 3, a = 0; a < r; a++) cr[a] = c()[t + a];
                    return (e < 0 ? oe[-e - 1] : Cr[e]).apply(null, cr)
                },
                B: function(e) {
                    var r = a().length;
                    if ((e >>>= 0) <= r) return !1;
                    var n, t, o = 2147483648;
                    if (e > o) return !1;
                    for (var i = 1; i <= 4; i *= 2) {
                        var u = r * (1 + .2 / i);
                        if (u = Math.min(u, e + 100663296), fr(Math.min(o, ((n = Math.max(e, u)) % (t = 65536) > 0 && (n += t - n % t), n)))) return !0
                    }
                    return !1
                },
                E: function(e, r, n) {
                    return vr(e) ? mr(e, r, n) : gr(e, r, n)
                },
                k: function(e) {},
                F: function(e, r) {
                    return n = e, t = r >> 2, a = u()[t + 6], o = {
                        alpha: !!u()[t + 0],
                        depth: !!u()[t + 1],
                        stencil: !!u()[t + 2],
                        antialias: !!u()[t + 3],
                        premultipliedAlpha: !!u()[t + 4],
                        preserveDrawingBuffer: !!u()[t + 5],
                        powerPreference: wr[a],
                        failIfMajorPerformanceCaveat: !!u()[t + 7],
                        majorVersion: u()[t + 8],
                        minorVersion: u()[t + 9],
                        enableExtensionsByDefault: u()[t + 10],
                        explicitSwapControl: u()[t + 11],
                        proxyContextToMainThread: u()[t + 12],
                        renderViaOffscreenBackBuffer: u()[t + 13]
                    }, (i = vr(n)) ? o.explicitSwapControl ? 0 : yr.createContext(i, o) : 0;
                    var n, t, a, o, i
                },
                I: Tr,
                w: kr,
                H: Ar,
                z: function() {
                    pe.initRuntime()
                },
                a: T || r.wasmMemory,
                q: function(e, r, n, t) {
                    if ("undefined" == typeof SharedArrayBuffer) return b("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
                    if (!e) return b("pthread_create called with a null thread pointer!"), 28;
                    var a = [];
                    if (m && 0 === a.length) return Mr(687865856, e, r, n, t);
                    var o = 0,
                        i = 0,
                        c = 0;
                    r && -1 != r ? (o = u()[r >> 2], o += 81920, i = u()[r + 8 >> 2], c = 0 !== u()[r + 12 >> 2]) : o = 2097152;
                    var f = 0 == i;
                    f ? i = Qr(16, o) : M((i -= o) > 0);
                    for (var l = Pr(228), d = 0; d < 57; ++d) s()[(l >> 2) + d] = 0;
                    u()[e >> 2] = l, u()[l + 12 >> 2] = l;
                    var h = l + 152;
                    u()[h >> 2] = h;
                    var p = {
                        stackBase: i,
                        stackSize: o,
                        allocatedOwnStack: f,
                        detached: c,
                        startRoutine: n,
                        pthread_ptr: l,
                        arg: t,
                        transferList: a
                    };
                    return m ? (p.cmd = "spawnThread", postMessage(p, a), 0) : xr(p)
                },
                P: function(e, r) {
                    return function(e, r, n) {
                        if (!e) return b("pthread_join attempted on a null thread pointer!"), ue;
                        if (m && Gr() == e) return b("PThread " + e + " is attempting to join to itself!"), fe;
                        if (!m && Rr() == e) return b("Main thread " + e + " is attempting to join to itself!"), fe;
                        if (u()[e + 12 >> 2] !== e) return b("pthread_join attempted on thread " + e + ", which does not point to a valid thread, or does not exist anymore!"), ue;
                        if (Atomics.load(s(), e + 64 >> 2)) return b("Attempted to join thread " + e + ", which was already detached!"), ce;
                        for (;;) {
                            var t = Atomics.load(s(), e + 0 >> 2);
                            if (1 == t) {
                                var a = Atomics.load(s(), e + 4 >> 2);
                                return r && (u()[r >> 2] = a), Atomics.store(s(), e + 64 >> 2, 1), m ? postMessage({
                                    cmd: "cleanupThread",
                                    thread: e
                                }) : de(e), 0
                            }
                            if (!n) return se;
                            Er(), m || Or(), ur(e + 0, t, m ? 100 : 1)
                        }
                    }(e, r, !0)
                },
                y: function(e) {}
            };
        ! function() {
            var e = {
                a: Wr
            };

            function n(e, n) {
                var t, a = e.exports;
                if (r.asm = a, Q = r.asm.W, t = r.asm.S, Y.unshift(t), pe.tlsInitFunctions.push(r.asm.V), k = n, !m) {
                    var o = pe.unusedWorkers.length;
                    pe.unusedWorkers.forEach((function(e) {
                        pe.loadWasmModuleToWorker(e, (function() {
                            --o || function(e) {
                                if (K--, r.monitorRunDependencies && r.monitorRunDependencies(K), 0 == K && ee) {
                                    var n = ee;
                                    ee = null, n()
                                }
                            }()
                        }))
                    }))
                }
            }

            function t(e) {
                n(e.instance, e.module)
            }

            function a(r) {
                return (y || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return ae(te)
                })) : fetch(te, {
                    credentials: "same-origin"
                }).then((function(e) {
                    if (!e.ok) throw "failed to load wasm binary file at '" + te + "'";
                    return e.arrayBuffer()
                })).catch((function() {
                    return ae(te)
                }))).then((function(r) {
                    return WebAssembly.instantiate(r, e)
                })).then(r, (function(e) {
                    b("failed to asynchronously prepare wasm: " + e), re(e)
                }))
            }
            if (m || (M(!m, "addRunDependency cannot be used in a pthread worker"), K++, r.monitorRunDependencies && r.monitorRunDependencies(K)), r.instantiateWasm) try {
                return r.instantiateWasm(e, n)
            } catch (e) {
                return b("Module.instantiateWasm callback failed with error: " + e), !1
            }(y || "function" != typeof WebAssembly.instantiateStreaming || ne(te) || "function" != typeof fetch ? a(t) : fetch(te, {
                credentials: "same-origin"
            }).then((function(r) {
                return WebAssembly.instantiateStreaming(r, e).then(t, (function(e) {
                    return b("wasm streaming compile failed: " + e), b("falling back to ArrayBuffer instantiation"), a(t)
                }))
            }))).catch(l)
        }(), r.___wasm_call_ctors = function() {
            return (r.___wasm_call_ctors = r.asm.S).apply(null, arguments)
        };
        var Sr = r._free = function() {
                return (Sr = r._free = r.asm.T).apply(null, arguments)
            },
            Pr = r._malloc = function() {
                return (Pr = r._malloc = r.asm.U).apply(null, arguments)
            };
        r._emscripten_tls_init = function() {
            return (r._emscripten_tls_init = r.asm.V).apply(null, arguments)
        };
        var Ir = r.___getTypeName = function() {
            return (Ir = r.___getTypeName = r.asm.X).apply(null, arguments)
        };
        r.___embind_register_native_and_builtin_types = function() {
            return (r.___embind_register_native_and_builtin_types = r.asm.Y).apply(null, arguments)
        }, r._emscripten_current_thread_process_queued_calls = function() {
            return (r._emscripten_current_thread_process_queued_calls = r.asm.Z).apply(null, arguments)
        };
        var Fr = r._emscripten_register_main_browser_thread_id = function() {
                return (Fr = r._emscripten_register_main_browser_thread_id = r.asm._).apply(null, arguments)
            },
            Rr = r._emscripten_main_browser_thread_id = function() {
                return (Rr = r._emscripten_main_browser_thread_id = r.asm.$).apply(null, arguments)
            },
            Hr = r.__emscripten_do_dispatch_to_thread = function() {
                return (Hr = r.__emscripten_do_dispatch_to_thread = r.asm.aa).apply(null, arguments)
            },
            Mr = r._emscripten_sync_run_in_main_thread_4 = function() {
                return (Mr = r._emscripten_sync_run_in_main_thread_4 = r.asm.ba).apply(null, arguments)
            },
            Or = r._emscripten_main_thread_process_queued_calls = function() {
                return (Or = r._emscripten_main_thread_process_queued_calls = r.asm.ca).apply(null, arguments)
            },
            Lr = r._emscripten_run_in_main_runtime_thread_js = function() {
                return (Lr = r._emscripten_run_in_main_runtime_thread_js = r.asm.da).apply(null, arguments)
            },
            jr = r.__emscripten_call_on_thread = function() {
                return (jr = r.__emscripten_call_on_thread = r.asm.ea).apply(null, arguments)
            },
            Br = r.__emscripten_thread_init = function() {
                return (Br = r.__emscripten_thread_init = r.asm.fa).apply(null, arguments)
            },
            Dr = r._emscripten_get_global_libc = function() {
                return (Dr = r._emscripten_get_global_libc = r.asm.ga).apply(null, arguments)
            },
            Gr = r._pthread_self = function() {
                return (Gr = r._pthread_self = r.asm.ha).apply(null, arguments)
            },
            Ur = r.___pthread_tsd_run_dtors = function() {
                return (Ur = r.___pthread_tsd_run_dtors = r.asm.ia).apply(null, arguments)
            },
            Nr = r.stackSave = function() {
                return (Nr = r.stackSave = r.asm.ja).apply(null, arguments)
            },
            Vr = r.stackRestore = function() {
                return (Vr = r.stackRestore = r.asm.ka).apply(null, arguments)
            },
            qr = r.stackAlloc = function() {
                return (qr = r.stackAlloc = r.asm.la).apply(null, arguments)
            },
            zr = r._emscripten_stack_set_limits = function() {
                return (zr = r._emscripten_stack_set_limits = r.asm.ma).apply(null, arguments)
            },
            Qr = r._memalign = function() {
                return (Qr = r._memalign = r.asm.na).apply(null, arguments)
            };
        r.dynCall_jiji = function() {
            return (r.dynCall_jiji = r.asm.oa).apply(null, arguments)
        };
        var Xr, Jr = r.__emscripten_allow_main_runtime_queued_calls = 112408,
            Yr = r.__emscripten_main_thread_futex = 123196;

        function Zr(e) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
        }

        function $r(e) {
            if (!(K > 0)) {
                if (m) return f(r), $(), void postMessage({
                    cmd: "loaded"
                });
                ! function() {
                    if (!m) {
                        if (r.preRun)
                            for ("function" == typeof r.preRun && (r.preRun = [r.preRun]); r.preRun.length;) e = r.preRun.shift(), J.unshift(e);
                        var e;
                        ie(J)
                    }
                }(), K > 0 || (r.setStatus ? (r.setStatus("Running..."), setTimeout((function() {
                    setTimeout((function() {
                        r.setStatus("")
                    }), 1), n()
                }), 1)) : n())
            }

            function n() {
                Xr || (Xr = !0, r.calledRun = !0, H || ($(), f(r), r.onRuntimeInitialized && r.onRuntimeInitialized(), function() {
                    if (!m) {
                        if (r.postRun)
                            for ("function" == typeof r.postRun && (r.postRun = [r.postRun]); r.postRun.length;) e = r.postRun.shift(), Z.unshift(e);
                        var e;
                        ie(Z)
                    }
                }()))
            }
        }
        if (r.PThread = pe, r.PThread = pe, r.wasmMemory = T, r.ExitStatus = Zr, ee = function e() {
                Xr || $r(), Xr || (ee = e)
            }, r.run = $r, r.preInit)
            for ("function" == typeof r.preInit && (r.preInit = [r.preInit]); r.preInit.length > 0;) r.preInit.pop()();
        return m && (A = !1, pe.initWorker()), $r(), r.ready
    });
    n.default = a
}));