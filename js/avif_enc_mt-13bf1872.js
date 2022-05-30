define(["module", "require", "exports"], (function(r, e, n) {
    var t, a = (t = r.uri, function(e) {
        function n() {
            return k.buffer != x && Q(k.buffer), E
        }

        function a() {
            return k.buffer != x && Q(k.buffer), W
        }

        function o() {
            return k.buffer != x && Q(k.buffer), S
        }

        function i() {
            return k.buffer != x && Q(k.buffer), P
        }

        function u() {
            return k.buffer != x && Q(k.buffer), I
        }

        function s() {
            return k.buffer != x && Q(k.buffer), j
        }

        function c() {
            return k.buffer != x && Q(k.buffer), R
        }
        var f, l;
        (e = void 0 !== (e = e || {}) ? e : {}).ready = new Promise((function(r, e) {
            f = r, l = e
        }));
        var d, p = {};
        for (d in e) e.hasOwnProperty(d) && (p[d] = e[d]);
        var h, v = function(r, e) {
                throw e
            },
            m = e.ENVIRONMENT_IS_PTHREAD || !1,
            g = "";

        function y(r) {
            return e.locateFile ? e.locateFile(r, g) : g + r
        }
        g = self.location.href, t && (g = t), g = 0 !== g.indexOf("blob:") ? g.substr(0, g.lastIndexOf("/") + 1) : "", h = function(r) {
            var e = new XMLHttpRequest;
            return e.open("GET", r, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response)
        };
        var _ = e.print || console.log.bind(console),
            w = e.printErr || console.warn.bind(console);
        for (d in p) p.hasOwnProperty(d) && (e[d] = p[d]);
        p = null, e.arguments && e.arguments, e.thisProgram && e.thisProgram, e.quit && (v = e.quit);
        var b, T = 0;
        e.wasmBinary && (b = e.wasmBinary);
        var k, A, C = e.noExitRuntime || !0;
        "object" != typeof WebAssembly && nr("no native wasm support detected");
        var x, E, W, S, P, I, j, F, R, H = !1;

        function M(r, e) {
            r || nr("Assertion failed: " + e)
        }

        function O(r, e, n) {
            for (var t = e + n, a = ""; !(e >= t);) {
                var o = r[e++];
                if (!o) return a;
                if (128 & o) {
                    var i = 63 & r[e++];
                    if (192 != (224 & o)) {
                        var u = 63 & r[e++];
                        if ((o = 224 == (240 & o) ? (15 & o) << 12 | i << 6 | u : (7 & o) << 18 | i << 12 | u << 6 | 63 & r[e++]) < 65536) a += String.fromCharCode(o);
                        else {
                            var s = o - 65536;
                            a += String.fromCharCode(55296 | s >> 10, 56320 | 1023 & s)
                        }
                    } else a += String.fromCharCode((31 & o) << 6 | i)
                } else a += String.fromCharCode(o)
            }
            return a
        }

        function L(r, e) {
            return r ? O(a(), r, e) : ""
        }

        function B(r, e, n) {
            return function(r, e, n, t) {
                if (!(t > 0)) return 0;
                for (var a = n, o = n + t - 1, i = 0; i < r.length; ++i) {
                    var u = r.charCodeAt(i);
                    if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & r.charCodeAt(++i)), u <= 127) {
                        if (n >= o) break;
                        e[n++] = u
                    } else if (u <= 2047) {
                        if (n + 1 >= o) break;
                        e[n++] = 192 | u >> 6, e[n++] = 128 | 63 & u
                    } else if (u <= 65535) {
                        if (n + 2 >= o) break;
                        e[n++] = 224 | u >> 12, e[n++] = 128 | u >> 6 & 63, e[n++] = 128 | 63 & u
                    } else {
                        if (n + 3 >= o) break;
                        e[n++] = 240 | u >> 18, e[n++] = 128 | u >> 12 & 63, e[n++] = 128 | u >> 6 & 63, e[n++] = 128 | 63 & u
                    }
                }
                return e[n] = 0, n - a
            }(r, a(), e, n)
        }

        function D(r) {
            for (var e = 0, n = 0; n < r.length; ++n) {
                var t = r.charCodeAt(n);
                t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & r.charCodeAt(++n)), t <= 127 ? ++e : e += t <= 2047 ? 2 : t <= 65535 ? 3 : 4
            }
            return e
        }

        function G(r, e) {
            for (var n = "", t = 0; !(t >= e / 2); ++t) {
                var a = o()[r + 2 * t >> 1];
                if (0 == a) break;
                n += String.fromCharCode(a)
            }
            return n
        }

        function U(r, e, n) {
            if (void 0 === n && (n = 2147483647), n < 2) return 0;
            for (var t = e, a = (n -= 2) < 2 * r.length ? n / 2 : r.length, i = 0; i < a; ++i) {
                var u = r.charCodeAt(i);
                o()[e >> 1] = u, e += 2
            }
            return o()[e >> 1] = 0, e - t
        }

        function N(r) {
            return 2 * r.length
        }

        function V(r, e) {
            for (var n = 0, t = ""; !(n >= e / 4);) {
                var a = u()[r + 4 * n >> 2];
                if (0 == a) break;
                if (++n, a >= 65536) {
                    var o = a - 65536;
                    t += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o)
                } else t += String.fromCharCode(a)
            }
            return t
        }

        function q(r, e, n) {
            if (void 0 === n && (n = 2147483647), n < 4) return 0;
            for (var t = e, a = t + n - 4, o = 0; o < r.length; ++o) {
                var i = r.charCodeAt(o);
                if (i >= 55296 && i <= 57343 && (i = 65536 + ((1023 & i) << 10) | 1023 & r.charCodeAt(++o)), u()[e >> 2] = i, (e += 4) + 4 > a) break
            }
            return u()[e >> 2] = 0, e - t
        }

        function z(r) {
            for (var e = 0, n = 0; n < r.length; ++n) {
                var t = r.charCodeAt(n);
                t >= 55296 && t <= 57343 && ++n, e += 4
            }
            return e
        }

        function Q(r) {
            x = r, e.HEAP8 = E = new Int8Array(r), e.HEAP16 = S = new Int16Array(r), e.HEAP32 = I = new Int32Array(r), e.HEAPU8 = W = new Uint8Array(r), e.HEAPU16 = P = new Uint16Array(r), e.HEAPU32 = j = new Uint32Array(r), e.HEAPF32 = F = new Float32Array(r), e.HEAPF64 = R = new Float64Array(r)
        }
        m && (x = e.buffer);
        var J, X = e.INITIAL_MEMORY || 16777216;
        if (m) k = e.wasmMemory, x = e.buffer;
        else if (e.wasmMemory) k = e.wasmMemory;
        else if (!((k = new WebAssembly.Memory({
                initial: X / 65536,
                maximum: 32768,
                shared: !0
            })).buffer instanceof SharedArrayBuffer)) throw w("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), Error("bad memory");
        k && (x = k.buffer), X = x.byteLength, Q(x);
        var K = [],
            Y = [],
            Z = [];

        function $() {
            m || ur(Y)
        }
        var rr = 0,
            er = null;

        function nr(r) {
            e.onAbort && e.onAbort(r), m && console.error("Pthread aborting at " + (new Error).stack), w(r += ""), H = !0, r = "abort(" + r + "). Build with -s ASSERTIONS=1 for more info.";
            var n = new WebAssembly.RuntimeError(r);
            throw l(n), n
        }

        function tr(r) {
            return r.startsWith("data:application/octet-stream;base64,")
        }
        if (e.preloadedImages = {}, e.preloadedAudios = {}, e.locateFile) tr(ar = "avif_enc_mt.wasm") || (ar = y(ar));
        else var ar = new URL("/wasm/avif_enc_mt-e6a6332c.wasm", r.uri).toString();

        function or(r) {
            try {
                if (r == ar && b) return new Uint8Array(b);
                if (h) return h(r);
                throw "both async and sync fetching of the wasm failed"
            } catch (r) {
                nr(r)
            }
        }
        var ir = {
            601124: function() {
                throw "Canceled!"
            },
            601142: function(r, e) {
                setTimeout((function() {
                    Fe(r, e)
                }), 0)
            }
        };

        function ur(r) {
            for (; r.length > 0;) {
                var n = r.shift();
                if ("function" != typeof n) {
                    var t = n.func;
                    "number" == typeof t ? void 0 === n.arg ? J.get(t)() : J.get(t)(n.arg) : t(void 0 === n.arg ? null : n.arg)
                } else n(e)
            }
        }
        var sr = 71,
            cr = 10,
            fr = 28,
            lr = 16;

        function dr(r, e) {
            if (r <= 0 || r > n().length || !0 & r || e < 0) return -28;
            if (0 == e) return 0;
            e >= 2147483647 && (e = 1 / 0);
            var t = Atomics.load(u(), Ye >> 2),
                a = 0;
            if (t == r && Atomics.compareExchange(u(), Ye >> 2, t, 0) == t && (a = 1, --e <= 0)) return 1;
            var o = Atomics.notify(u(), r >> 2, e);
            if (o >= 0) return o + a;
            throw "Atomics.notify returned an unexpected value " + o
        }

        function pr(r) {
            if (m) throw "Internal Error! cleanupThread() can only ever be called from main application thread!";
            if (!r) throw "Internal Error! Null pthread_ptr in cleanupThread!";
            var e = vr.pthreads[r];
            if (e) {
                u()[r + 12 >> 2] = 0;
                var n = e.worker;
                vr.returnWorkerToPool(n)
            }
        }
        e._emscripten_futex_wake = dr;
        var hr, vr = {
            unusedWorkers: [],
            runningWorkers: [],
            tlsInitFunctions: [],
            initMainThreadBlock: function() {
                for (var r = navigator.hardwareConcurrency, e = 0; e < r; ++e) vr.allocateUnusedWorker()
            },
            initRuntime: function() {
                for (var r = We(228), e = 0; e < 57; ++e) s()[r / 4 + e] = 0;
                u()[r + 12 >> 2] = r;
                var n = r + 152;
                u()[n >> 2] = n;
                var t = We(512);
                for (e = 0; e < 128; ++e) s()[t / 4 + e] = 0;
                Atomics.store(s(), r + 100 >> 2, t), Atomics.store(s(), r + 40 >> 2, r), Le(r, !1, 1), Ie(r)
            },
            initWorker: function() {},
            pthreads: {},
            threadExitHandlers: [],
            runExitHandlers: function() {
                for (; vr.threadExitHandlers.length > 0;) vr.threadExitHandlers.pop()();
                m && Be() && De()
            },
            runExitHandlersAndDeinitThread: function(r, e) {
                Atomics.store(s(), r + 56 >> 2, 1), Atomics.store(s(), r + 60 >> 2, 0), vr.runExitHandlers(), Atomics.store(s(), r + 4 >> 2, e), Atomics.store(s(), r + 0 >> 2, 1), dr(r + 0, 2147483647), Le(0, 0, 0)
            },
            setExitStatus: function(r) {},
            threadExit: function(r) {
                var e = Be();
                e && (vr.runExitHandlersAndDeinitThread(e, r), m && postMessage({
                    cmd: "exit"
                }))
            },
            threadCancel: function() {
                vr.runExitHandlersAndDeinitThread(Be(), -1), postMessage({
                    cmd: "cancelDone"
                })
            },
            terminateAllThreads: function() {
                for (var r in vr.pthreads)(t = vr.pthreads[r]) && t.worker && vr.returnWorkerToPool(t.worker);
                vr.pthreads = {};
                for (var e = 0; e < vr.unusedWorkers.length; ++e)(n = vr.unusedWorkers[e]).terminate();
                for (vr.unusedWorkers = [], e = 0; e < vr.runningWorkers.length; ++e) {
                    var n, t = (n = vr.runningWorkers[e]).pthread;
                    vr.freeThreadData(t), n.terminate()
                }
                vr.runningWorkers = []
            },
            freeThreadData: function(r) {
                if (r) {
                    if (r.threadInfoStruct) {
                        var e = u()[r.threadInfoStruct + 100 >> 2];
                        u()[r.threadInfoStruct + 100 >> 2] = 0, Se(e), Se(r.threadInfoStruct)
                    }
                    r.threadInfoStruct = 0, r.allocatedOwnStack && r.stackBase && Se(r.stackBase), r.stackBase = 0, r.worker && (r.worker.pthread = null)
                }
            },
            returnWorkerToPool: function(r) {
                vr.runWithoutMainThreadQueuedCalls((function() {
                    delete vr.pthreads[r.pthread.threadInfoStruct], vr.unusedWorkers.push(r), vr.runningWorkers.splice(vr.runningWorkers.indexOf(r), 1), vr.freeThreadData(r.pthread), r.pthread = void 0
                }))
            },
            runWithoutMainThreadQueuedCalls: function(r) {
                u()[Ke >> 2] = 0;
                try {
                    r()
                } finally {
                    u()[Ke >> 2] = 1
                }
            },
            receiveObjectTransfer: function(r) {},
            threadInit: function() {
                for (var r in vr.tlsInitFunctions) vr.tlsInitFunctions[r]()
            },
            loadWasmModuleToWorker: function(r, n) {
                r.onmessage = function(t) {
                    var a = t.data,
                        o = a.cmd;
                    if (r.pthread && (vr.currentProxiedOperationCallerThread = r.pthread.threadInfoStruct), a.targetThread && a.targetThread != Be()) {
                        var i = vr.pthreads[a.targetThread];
                        return i ? i.worker.postMessage(t.data, a.transferList) : console.error('Internal error! Worker sent a message "' + o + '" to target pthread ' + a.targetThread + ", but that thread no longer exists!"), void(vr.currentProxiedOperationCallerThread = void 0)
                    }
                    if ("processQueuedMainThreadWork" === o) He();
                    else if ("spawnThread" === o) Ae(t.data);
                    else if ("cleanupThread" === o) pr(a.thread);
                    else if ("killThread" === o) ! function(r) {
                        if (m) throw "Internal Error! killThread() can only ever be called from main application thread!";
                        if (!r) throw "Internal Error! Null pthread_ptr in killThread!";
                        u()[r + 12 >> 2] = 0;
                        var e = vr.pthreads[r];
                        e.worker.terminate(), vr.freeThreadData(e), vr.runningWorkers.splice(vr.runningWorkers.indexOf(e.worker), 1), e.worker.pthread = void 0
                    }(a.thread);
                    else if ("cancelThread" === o) ! function(r) {
                        if (m) throw "Internal Error! cancelThread() can only ever be called from main application thread!";
                        if (!r) throw "Internal Error! Null pthread_ptr in cancelThread!";
                        vr.pthreads[r].worker.postMessage({
                            cmd: "cancel"
                        })
                    }(a.thread);
                    else if ("loaded" === o) r.loaded = !0, n && n(r), r.runPthread && (r.runPthread(), delete r.runPthread);
                    else if ("print" === o) _("Thread " + a.threadId + ": " + a.text);
                    else if ("printErr" === o) w("Thread " + a.threadId + ": " + a.text);
                    else if ("alert" === o) alert("Thread " + a.threadId + ": " + a.text);
                    else if ("exit" === o) r.pthread && Atomics.load(s(), r.pthread.threadInfoStruct + 64 >> 2) && vr.returnWorkerToPool(r);
                    else if ("exitProcess" === o) try {
                        ! function(r, n) {
                            if (!n || !mr() || 0 !== r) {
                                if (!n && m) throw postMessage({
                                    cmd: "exitProcess",
                                    returnCode: r
                                }), new Ze(r);
                                mr() || (vr.terminateAllThreads(), e.onExit && e.onExit(r), H = !0), v(r, new Ze(r))
                            }
                        }(a.returnCode)
                    } catch (t) {
                        if (t instanceof Ze) return;
                        throw t
                    } else "cancelDone" === o ? vr.returnWorkerToPool(r) : "objectTransfer" === o ? vr.receiveObjectTransfer(t.data) : "setimmediate" === t.data.target ? r.postMessage(t.data) : w("worker sent an unknown command " + o);
                    vr.currentProxiedOperationCallerThread = void 0
                }, r.onerror = function(r) {
                    w("pthread sent an error! " + r.filename + ":" + r.lineno + ": " + r.message)
                }, r.postMessage({
                    cmd: "load",
                    urlOrBlob: e.mainScriptUrlOrBlob,
                    wasmMemory: k,
                    wasmModule: A
                })
            },
            allocateUnusedWorker: function() {
                if (e.locateFile) {
                    var n = y("avif_enc_mt.worker.js");
                    vr.unusedWorkers.push(new Worker(n))
                } else vr.unusedWorkers.push(new Worker(new URL("/js/avif_enc_mt.worker-8046ca86.js", r.uri)))
            },
            getNewWorker: function() {
                return 0 == vr.unusedWorkers.length && (vr.allocateUnusedWorker(), vr.loadWasmModuleToWorker(vr.unusedWorkers[0])), vr.unusedWorkers.pop()
            },
            busySpinWait: function(r) {
                for (var e = performance.now() + r; performance.now() < e;);
            }
        };

        function mr() {
            return C || !1
        }

        function gr(r, e) {
            vr.threadExitHandlers.push((function() {
                J.get(r)(e)
            }))
        }
        e.establishStackSpace = function(r, e) {
            qe(r, e), Ne(r)
        }, e.invokeEntryPoint = function(r, e) {
            return J.get(r)(e)
        }, e.keepRuntimeAlive = mr, hr = m ? function() {
            return performance.now() - e.__performance_now_clock_drift
        } : function() {
            return performance.now()
        };
        var yr = {
            mappings: {},
            buffers: [null, [],
                []
            ],
            printChar: function(r, e) {
                var n = yr.buffers[r];
                0 === e || 10 === e ? ((1 === r ? _ : w)(O(n, 0)), n.length = 0) : n.push(e)
            },
            varargs: void 0,
            get: function() {
                return yr.varargs += 4, u()[yr.varargs - 4 >> 2]
            },
            getStr: function(r) {
                return L(r)
            },
            get64: function(r, e) {
                return r
            }
        };

        function _r(r, e, n) {
            return m ? ue(1, 1, r, e, n) : (yr.varargs = n, 0)
        }

        function wr(r, e, n) {
            return m ? ue(2, 1, r, e, n) : (yr.varargs = n, 0)
        }

        function br(r, e, n) {
            if (m) return ue(3, 1, r, e, n);
            yr.varargs = n
        }
        var Tr = {};

        function kr(r) {
            for (; r.length;) {
                var e = r.pop();
                r.pop()(e)
            }
        }

        function Ar(r) {
            return this.fromWireType(s()[r >> 2])
        }
        var Cr = {},
            xr = {},
            Er = {};

        function Wr(r) {
            if (void 0 === r) return "_unknown";
            var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
            return e >= 48 && e <= 57 ? "_" + r : r
        }

        function Sr(r, e) {
            return r = Wr(r), new Function("body", "return function " + r + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)
        }

        function Pr(r, e) {
            var n = Sr(e, (function(r) {
                this.name = e, this.message = r;
                var n = new Error(r).stack;
                void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
            }));
            return n.prototype = Object.create(r.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
                return void 0 === this.message ? this.name : this.name + ": " + this.message
            }, n
        }
        var Ir = void 0;

        function jr(r) {
            throw new Ir(r)
        }

        function Fr(r, e, n) {
            function t(e) {
                var t = n(e);
                t.length !== r.length && jr("Mismatched type converter count");
                for (var a = 0; a < r.length; ++a) Br(r[a], t[a])
            }
            r.forEach((function(r) {
                Er[r] = e
            }));
            var a = new Array(e.length),
                o = [],
                i = 0;
            e.forEach((function(r, e) {
                xr.hasOwnProperty(r) ? a[e] = xr[r] : (o.push(r), Cr.hasOwnProperty(r) || (Cr[r] = []), Cr[r].push((function() {
                    a[e] = xr[r], ++i === o.length && t(a)
                })))
            })), 0 === o.length && t(a)
        }

        function Rr(r) {
            switch (r) {
                case 1:
                    return 0;
                case 2:
                    return 1;
                case 4:
                    return 2;
                case 8:
                    return 3;
                default:
                    throw new TypeError("Unknown type size: " + r)
            }
        }
        var Hr = void 0;

        function Mr(r) {
            for (var e = "", n = r; a()[n];) e += Hr[a()[n++]];
            return e
        }
        var Or = void 0;

        function Lr(r) {
            throw new Or(r)
        }

        function Br(r, e, n) {
            if (n = n || {}, !("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
            var t = e.name;
            if (r || Lr('type "' + t + '" must have a positive integer typeid pointer'), xr.hasOwnProperty(r)) {
                if (n.ignoreDuplicateRegistrations) return;
                Lr("Cannot register type '" + t + "' twice")
            }
            if (xr[r] = e, delete Er[r], Cr.hasOwnProperty(r)) {
                var a = Cr[r];
                delete Cr[r], a.forEach((function(r) {
                    r()
                }))
            }
        }
        var Dr = [],
            Gr = [{}, {
                value: void 0
            }, {
                value: null
            }, {
                value: !0
            }, {
                value: !1
            }];

        function Ur(r) {
            r > 4 && 0 == --Gr[r].refcount && (Gr[r] = void 0, Dr.push(r))
        }

        function Nr() {
            for (var r = 0, e = 5; e < Gr.length; ++e) void 0 !== Gr[e] && ++r;
            return r
        }

        function Vr() {
            for (var r = 5; r < Gr.length; ++r)
                if (void 0 !== Gr[r]) return Gr[r];
            return null
        }

        function qr(r) {
            switch (r) {
                case void 0:
                    return 1;
                case null:
                    return 2;
                case !0:
                    return 3;
                case !1:
                    return 4;
                default:
                    var e = Dr.length ? Dr.pop() : Gr.length;
                    return Gr[e] = {
                        refcount: 1,
                        value: r
                    }, e
            }
        }

        function zr(r) {
            if (null === r) return "null";
            var e = typeof r;
            return "object" === e || "array" === e || "function" === e ? r.toString() : "" + r
        }

        function Qr(r, e) {
            switch (e) {
                case 2:
                    return function(r) {
                        return this.fromWireType((k.buffer != x && Q(k.buffer), F)[r >> 2])
                    };
                case 3:
                    return function(r) {
                        return this.fromWireType(c()[r >> 3])
                    };
                default:
                    throw new TypeError("Unknown float type: " + r)
            }
        }

        function Jr(r, e, n, t, a) {
            var o = e.length;
            o < 2 && Lr("argTypes array size mismatch! Must at least get return value and 'this' types!");
            for (var i = null !== e[1] && null !== n, u = !1, s = 1; s < e.length; ++s)
                if (null !== e[s] && void 0 === e[s].destructorFunction) {
                    u = !0;
                    break
                } var c = "void" !== e[0].name,
                f = "",
                l = "";
            for (s = 0; s < o - 2; ++s) f += (0 !== s ? ", " : "") + "arg" + s, l += (0 !== s ? ", " : "") + "arg" + s + "Wired";
            var d = "return function " + Wr(r) + "(" + f + ") {\nif (arguments.length !== " + (o - 2) + ") {\nthrowBindingError('function " + r + " called with ' + arguments.length + ' arguments, expected " + (o - 2) + " args!');\n}\n";
            u && (d += "var destructors = [];\n");
            var p = u ? "destructors" : "null",
                h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                v = [Lr, t, a, kr, e[0], e[1]];
            for (i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n"), s = 0; s < o - 2; ++s) d += "var arg" + s + "Wired = argType" + s + ".toWireType(" + p + ", arg" + s + "); // " + e[s + 2].name + "\n", h.push("argType" + s), v.push(e[s + 2]);
            if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), d += (c ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", u) d += "runDestructors(destructors);\n";
            else
                for (s = i ? 1 : 2; s < e.length; ++s) {
                    var m = 1 === s ? "thisWired" : "arg" + (s - 2) + "Wired";
                    null !== e[s].destructorFunction && (d += m + "_dtor(" + m + "); // " + e[s].name + "\n", h.push(m + "_dtor"), v.push(e[s].destructorFunction))
                }
            return c && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", h.push(d),
                function(r, e) {
                    if (!(r instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof r + " which is not a function");
                    var n = Sr(r.name || "unknownFunctionName", (function() {}));
                    n.prototype = r.prototype;
                    var t = new n,
                        a = r.apply(t, e);
                    return a instanceof Object ? a : t
                }(Function, h).apply(null, v)
        }

        function Xr(r, n, t) {
            e.hasOwnProperty(r) ? ((void 0 === t || void 0 !== e[r].overloadTable && void 0 !== e[r].overloadTable[t]) && Lr("Cannot register public name '" + r + "' twice"), function(r, e, n) {
                if (void 0 === r[e].overloadTable) {
                    var t = r[e];
                    r[e] = function() {
                        return r[e].overloadTable.hasOwnProperty(arguments.length) || Lr("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + r[e].overloadTable + ")!"), r[e].overloadTable[arguments.length].apply(this, arguments)
                    }, r[e].overloadTable = [], r[e].overloadTable[t.argCount] = t
                }
            }(e, r, r), e.hasOwnProperty(t) && Lr("Cannot register multiple overloads of a function with the same number of arguments (" + t + ")!"), e[r].overloadTable[t] = n) : (e[r] = n, void 0 !== t && (e[r].numArguments = t))
        }

        function Kr(r, n, t) {
            return r.includes("j") ? function(r, n, t) {
                var a = e["dynCall_" + r];
                return t && t.length ? a.apply(null, [n].concat(t)) : a.call(null, n)
            }(r, n, t) : J.get(n).apply(null, t)
        }

        function Yr(r, e) {
            var n, t, a, o = (r = Mr(r)).includes("j") ? (n = r, t = e, a = [], function() {
                a.length = arguments.length;
                for (var r = 0; r < arguments.length; r++) a[r] = arguments[r];
                return Kr(n, t, a)
            }) : J.get(e);
            return "function" != typeof o && Lr("unknown function pointer with signature " + r + ": " + e), o
        }
        var Zr = void 0;

        function $r(r) {
            var e = Pe(r),
                n = Mr(e);
            return Se(e), n
        }

        function re(r, e, t) {
            switch (e) {
                case 0:
                    return t ? function(r) {
                        return n()[r]
                    } : function(r) {
                        return a()[r]
                    };
                case 1:
                    return t ? function(r) {
                        return o()[r >> 1]
                    } : function(r) {
                        return i()[r >> 1]
                    };
                case 2:
                    return t ? function(r) {
                        return u()[r >> 2]
                    } : function(r) {
                        return s()[r >> 2]
                    };
                default:
                    throw new TypeError("Unknown integer type: " + r)
            }
        }
        var ee = {};

        function ne() {
            return "object" == typeof globalThis ? globalThis : Function("return this")()
        }

        function te(r, e) {
            var n = xr[r];
            return void 0 === n && Lr(e + " has unknown type " + $r(r)), n
        }
        var ae = {},
            oe = [];

        function ie(r, e, t) {
            if (r <= 0 || r > n().length || !0 & r) return -28;
            var a = Atomics.wait(u(), r >> 2, e, t);
            if ("timed-out" === a) return -73;
            if ("not-equal" === a) return -6;
            if ("ok" === a) return 0;
            throw "Atomics.wait returned an unexpected value " + a
        }

        function ue(r, e) {
            for (var n = arguments.length - 2, t = Ue(), a = n, o = Ve(8 * a), i = o >> 3, u = 0; u < n; u++) {
                var s = arguments[2 + u];
                c()[i + u] = s
            }
            var f = Me(r, a, o, e);
            return Ne(t), f
        }
        var se = [];

        function ce(r) {
            try {
                return k.grow(r - x.byteLength + 65535 >>> 16), Q(k.buffer), 1
            } catch (r) {}
        }
        var fe = {
            inEventHandler: 0,
            removeAllEventListeners: function() {
                for (var r = fe.eventHandlers.length - 1; r >= 0; --r) fe._removeHandler(r);
                fe.eventHandlers = [], fe.deferredCalls = []
            },
            registerRemoveEventListeners: function() {
                fe.removeEventListenersRegistered || (fe.removeEventListenersRegistered = !0)
            },
            deferredCalls: [],
            deferCall: function(r, e, n) {
                function t(r, e) {
                    if (r.length != e.length) return !1;
                    for (var n in r)
                        if (r[n] != e[n]) return !1;
                    return !0
                }
                for (var a in fe.deferredCalls) {
                    var o = fe.deferredCalls[a];
                    if (o.targetFunction == r && t(o.argsList, n)) return
                }
                fe.deferredCalls.push({
                    targetFunction: r,
                    precedence: e,
                    argsList: n
                }), fe.deferredCalls.sort((function(r, e) {
                    return r.precedence < e.precedence
                }))
            },
            removeDeferredCalls: function(r) {
                for (var e = 0; e < fe.deferredCalls.length; ++e) fe.deferredCalls[e].targetFunction == r && (fe.deferredCalls.splice(e, 1), --e)
            },
            canPerformEventHandlerRequests: function() {
                return fe.inEventHandler && fe.currentEventHandler.allowsDeferredCalls
            },
            runDeferredCalls: function() {
                if (fe.canPerformEventHandlerRequests())
                    for (var r = 0; r < fe.deferredCalls.length; ++r) {
                        var e = fe.deferredCalls[r];
                        fe.deferredCalls.splice(r, 1), --r, e.targetFunction.apply(null, e.argsList)
                    }
            },
            eventHandlers: [],
            removeAllHandlersOnTarget: function(r, e) {
                for (var n = 0; n < fe.eventHandlers.length; ++n) fe.eventHandlers[n].target != r || e && e != fe.eventHandlers[n].eventTypeString || fe._removeHandler(n--)
            },
            _removeHandler: function(r) {
                var e = fe.eventHandlers[r];
                e.target.removeEventListener(e.eventTypeString, e.eventListenerFunc, e.useCapture), fe.eventHandlers.splice(r, 1)
            },
            registerOrRemoveHandler: function(r) {
                var e = function(e) {
                    ++fe.inEventHandler, fe.currentEventHandler = r, fe.runDeferredCalls(), r.handlerFunc(e), fe.runDeferredCalls(), --fe.inEventHandler
                };
                if (r.callbackfunc) r.eventListenerFunc = e, r.target.addEventListener(r.eventTypeString, e, r.useCapture), fe.eventHandlers.push(r), fe.registerRemoveEventListeners();
                else
                    for (var n = 0; n < fe.eventHandlers.length; ++n) fe.eventHandlers[n].target == r.target && fe.eventHandlers[n].eventTypeString == r.eventTypeString && fe._removeHandler(n--)
            },
            queueEventHandlerOnThread_iiii: function(r, e, n, t, a) {
                var o = Ue(),
                    i = Ve(12);
                u()[i >> 2] = n, u()[i + 4 >> 2] = t, u()[i + 8 >> 2] = a, Oe(0, r, 637534208, e, t, i), Ne(o)
            },
            getTargetThreadForEventCallback: function(r) {
                switch (r) {
                    case 1:
                        return 0;
                    case 2:
                        return vr.currentProxiedOperationCallerThread;
                    default:
                        return r
                }
            },
            getNodeNameForTarget: function(r) {
                return r ? r == window ? "#window" : r == screen ? "#screen" : r && r.nodeName ? r.nodeName : "" : ""
            },
            fullscreenEnabled: function() {
                return document.fullscreenEnabled || document.webkitFullscreenEnabled
            }
        };

        function le(r, e, n, t) {
            var a, o, i, s = Ue(),
                c = Ve(12),
                f = 0;
            e && (o = D(a = e) + 1, i = We(o), B(a, i, o), f = i), u()[c >> 2] = f, u()[c + 4 >> 2] = n, u()[c + 8 >> 2] = t, Oe(0, r, 657457152, 0, f, c), Ne(s)
        }
        var de = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];

        function pe(r) {
            var e;
            return r = (e = r) > 2 ? L(e) : e, de[r] || ("undefined" != typeof document ? document.querySelector(r) : void 0)
        }

        function he(r) {
            return pe(r)
        }

        function ve(r, e, n) {
            var t = he(r);
            if (!t) return -4;
            if (t.canvasSharedPtr && (u()[t.canvasSharedPtr >> 2] = e, u()[t.canvasSharedPtr + 4 >> 2] = n), !t.offscreenCanvas && t.controlTransferredOffscreen) return t.canvasSharedPtr ? (function(r, e, n, t) {
                le(r, e = e ? L(e) : "", n, t)
            }(u()[t.canvasSharedPtr + 8 >> 2], r, e, n), 1) : -4;
            t.offscreenCanvas && (t = t.offscreenCanvas);
            var a = !1;
            if (t.GLctxObject && t.GLctxObject.GLctx) {
                var o = t.GLctxObject.GLctx.getParameter(2978);
                a = 0 === o[0] && 0 === o[1] && o[2] === t.width && o[3] === t.height
            }
            return t.width = e, t.height = n, a && t.GLctxObject.GLctx.viewport(0, 0, e, n), 0
        }

        function me(r, e, n) {
            return m ? ue(4, 1, r, e, n) : ve(r, e, n)
        }
        var ge, ye = {
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
                recordError: function(r) {
                    ye.lastError || (ye.lastError = r)
                },
                getNewId: function(r) {
                    for (var e = ye.counter++, n = r.length; n < e; n++) r[n] = null;
                    return e
                },
                getSource: function(r, e, n, t) {
                    for (var a = "", o = 0; o < e; ++o) {
                        var i = t ? u()[t + 4 * o >> 2] : -1;
                        a += L(u()[n + 4 * o >> 2], i < 0 ? void 0 : i)
                    }
                    return a
                },
                createContext: function(r, e) {
                    r.getContextSafariWebGL2Fixed || (r.getContextSafariWebGL2Fixed = r.getContext, r.getContext = function(e, n) {
                        var t = r.getContextSafariWebGL2Fixed(e, n);
                        return "webgl" == e == t instanceof WebGLRenderingContext ? t : null
                    });
                    var n = r.getContext("webgl", e);
                    return n ? ye.registerContext(n, e) : 0
                },
                registerContext: function(r, e) {
                    var n = We(8);
                    u()[n + 4 >> 2] = Be();
                    var t = {
                        handle: n,
                        attributes: e,
                        version: e.majorVersion,
                        GLctx: r
                    };
                    return r.canvas && (r.canvas.GLctxObject = t), ye.contexts[n] = t, (void 0 === e.enableExtensionsByDefault || e.enableExtensionsByDefault) && ye.initExtensions(t), n
                },
                makeContextCurrent: function(r) {
                    return ye.currentContext = ye.contexts[r], e.ctx = ge = ye.currentContext && ye.currentContext.GLctx, !(r && !ge)
                },
                getContext: function(r) {
                    return ye.contexts[r]
                },
                deleteContext: function(r) {
                    ye.currentContext === ye.contexts[r] && (ye.currentContext = null), "object" == typeof fe && fe.removeAllHandlersOnTarget(ye.contexts[r].GLctx.canvas), ye.contexts[r] && ye.contexts[r].GLctx.canvas && (ye.contexts[r].GLctx.canvas.GLctxObject = void 0), Se(ye.contexts[r].handle), ye.contexts[r] = null
                },
                initExtensions: function(r) {
                    if (r || (r = ye.currentContext), !r.initExtensionsDone) {
                        r.initExtensionsDone = !0;
                        var e, n = r.GLctx;
                        ! function(r) {
                            var e = r.getExtension("ANGLE_instanced_arrays");
                            e && (r.vertexAttribDivisor = function(r, n) {
                                e.vertexAttribDivisorANGLE(r, n)
                            }, r.drawArraysInstanced = function(r, n, t, a) {
                                e.drawArraysInstancedANGLE(r, n, t, a)
                            }, r.drawElementsInstanced = function(r, n, t, a, o) {
                                e.drawElementsInstancedANGLE(r, n, t, a, o)
                            })
                        }(n),
                        function(r) {
                            var e = r.getExtension("OES_vertex_array_object");
                            e && (r.createVertexArray = function() {
                                return e.createVertexArrayOES()
                            }, r.deleteVertexArray = function(r) {
                                e.deleteVertexArrayOES(r)
                            }, r.bindVertexArray = function(r) {
                                e.bindVertexArrayOES(r)
                            }, r.isVertexArray = function(r) {
                                return e.isVertexArrayOES(r)
                            })
                        }(n),
                        function(r) {
                            var e = r.getExtension("WEBGL_draw_buffers");
                            e && (r.drawBuffers = function(r, n) {
                                e.drawBuffersWEBGL(r, n)
                            })
                        }(n), n.disjointTimerQueryExt = n.getExtension("EXT_disjoint_timer_query"), (e = n).multiDrawWebgl = e.getExtension("WEBGL_multi_draw"), (n.getSupportedExtensions() || []).forEach((function(r) {
                            r.includes("lose_context") || r.includes("debug") || n.getExtension(r)
                        }))
                    }
                }
            },
            _e = ["default", "low-power", "high-performance"];

        function we(r) {
            return m ? ue(5, 1, r) : 0
        }

        function be(r, e, n, t) {
            if (m) return ue(6, 1, r, e, n, t);
            var a = yr.getStreamFromFD(r),
                o = yr.doReadv(a, e, n);
            return u()[t >> 2] = o, 0
        }

        function Te(r, e, n, t, a) {
            if (m) return ue(7, 1, r, e, n, t, a)
        }

        function ke(r, e, n, t) {
            if (m) return ue(8, 1, r, e, n, t);
            for (var o = 0, i = 0; i < n; i++) {
                for (var s = u()[e + 8 * i >> 2], c = u()[e + (8 * i + 4) >> 2], f = 0; f < c; f++) yr.printChar(r, a()[s + f]);
                o += c
            }
            return u()[t >> 2] = o, 0
        }

        function Ae(r) {
            if (m) throw "Internal Error! spawnThread() can only ever be called from main application thread!";
            var e = vr.getNewWorker();
            if (!e) return 6;
            if (void 0 !== e.pthread) throw "Internal error!";
            if (!r.pthread_ptr) throw "Internal error, no pthread ptr!";
            vr.runningWorkers.push(e);
            for (var n = We(512), t = 0; t < 128; ++t) u()[n + 4 * t >> 2] = 0;
            var a = r.stackBase + r.stackSize,
                o = vr.pthreads[r.pthread_ptr] = {
                    worker: e,
                    stackBase: r.stackBase,
                    stackSize: r.stackSize,
                    allocatedOwnStack: r.allocatedOwnStack,
                    threadInfoStruct: r.pthread_ptr
                },
                i = o.threadInfoStruct >> 2;
            Atomics.store(s(), i + 16, r.detached), Atomics.store(s(), i + 25, n), Atomics.store(s(), i + 10, o.threadInfoStruct), Atomics.store(s(), i + 20, r.stackSize), Atomics.store(s(), i + 19, a), Atomics.store(s(), i + 26, r.stackSize), Atomics.store(s(), i + 28, a), Atomics.store(s(), i + 29, r.detached);
            var c = Ge() + 40;
            Atomics.store(s(), i + 43, c), e.pthread = o;
            var f = {
                cmd: "run",
                start_routine: r.startRoutine,
                arg: r.arg,
                threadInfoStruct: r.pthread_ptr,
                stackBase: r.stackBase,
                stackSize: r.stackSize
            };
            return e.runPthread = function() {
                f.time = performance.now(), e.postMessage(f, r.transferList)
            }, e.loaded && (e.runPthread(), delete e.runPthread), 0
        }

        function Ce() {
            if (m) {
                var r = Be();
                if (r && !Atomics.load(s(), r + 56 >> 2) && 2 == Atomics.load(s(), r + 0 >> 2)) throw "Canceled!"
            }
        }
        m || vr.initMainThreadBlock(), Ir = e.InternalError = Pr(Error, "InternalError"),
            function() {
                for (var r = new Array(256), e = 0; e < 256; ++e) r[e] = String.fromCharCode(e);
                Hr = r
            }(), Or = e.BindingError = Pr(Error, "BindingError"), e.count_emval_handles = Nr, e.get_first_emval = Vr, Zr = e.UnboundTypeError = Pr(Error, "UnboundTypeError");
        var xe = [null, _r, wr, br, me, we, be, Te, ke],
            Ee = {
                k: function(r, e, n, t) {
                    nr("Assertion failed: " + L(r) + ", at: " + [e ? L(e) : "unknown filename", n, t ? L(t) : "unknown function"])
                },
                C: function(r, e) {
                    return gr(r, e)
                },
                u: _r,
                P: wr,
                R: br,
                F: function(r) {
                    var e = Tr[r];
                    delete Tr[r];
                    var n = e.rawConstructor,
                        t = e.rawDestructor,
                        a = e.fields;
                    Fr([r], a.map((function(r) {
                        return r.getterReturnType
                    })).concat(a.map((function(r) {
                        return r.setterArgumentType
                    }))), (function(r) {
                        var o = {};
                        return a.forEach((function(e, n) {
                            var t = e.fieldName,
                                i = r[n],
                                u = e.getter,
                                s = e.getterContext,
                                c = r[n + a.length],
                                f = e.setter,
                                l = e.setterContext;
                            o[t] = {
                                read: function(r) {
                                    return i.fromWireType(u(s, r))
                                },
                                write: function(r, e) {
                                    var n = [];
                                    f(l, r, c.toWireType(n, e)), kr(n)
                                }
                            }
                        })), [{
                            name: e.name,
                            fromWireType: function(r) {
                                var e = {};
                                for (var n in o) e[n] = o[n].read(r);
                                return t(r), e
                            },
                            toWireType: function(r, e) {
                                for (var a in o)
                                    if (!(a in e)) throw new TypeError('Missing field:  "' + a + '"');
                                var i = n();
                                for (a in o) o[a].write(i, e[a]);
                                return null !== r && r.push(t, i), i
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: Ar,
                            destructorFunction: t
                        }]
                    }))
                },
                I: function(r, e, n, t, a) {},
                aa: function(r, e, t, a, i) {
                    var s = Rr(t);
                    Br(r, {
                        name: e = Mr(e),
                        fromWireType: function(r) {
                            return !!r
                        },
                        toWireType: function(r, e) {
                            return e ? a : i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: function(r) {
                            var a;
                            if (1 === t) a = n();
                            else if (2 === t) a = o();
                            else {
                                if (4 !== t) throw new TypeError("Unknown boolean type size: " + e);
                                a = u()
                            }
                            return this.fromWireType(a[r >> s])
                        },
                        destructorFunction: null
                    })
                },
                $: function(r, e) {
                    Br(r, {
                        name: e = Mr(e),
                        fromWireType: function(r) {
                            var e = Gr[r].value;
                            return Ur(r), e
                        },
                        toWireType: function(r, e) {
                            return qr(e)
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Ar,
                        destructorFunction: null
                    })
                },
                z: function(r, e, n) {
                    var t = Rr(n);
                    Br(r, {
                        name: e = Mr(e),
                        fromWireType: function(r) {
                            return r
                        },
                        toWireType: function(r, e) {
                            if ("number" != typeof e && "boolean" != typeof e) throw new TypeError('Cannot convert "' + zr(e) + '" to ' + this.name);
                            return e
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Qr(e, t),
                        destructorFunction: null
                    })
                },
                E: function(r, n, t, a, o, i) {
                    var s = function(r, e) {
                        for (var n = [], t = 0; t < r; t++) n.push(u()[(e >> 2) + t]);
                        return n
                    }(n, t);
                    r = Mr(r), o = Yr(a, o), Xr(r, (function() {
                        ! function(r, e) {
                            var n = [],
                                t = {};
                            throw e.forEach((function r(e) {
                                t[e] || xr[e] || (Er[e] ? Er[e].forEach(r) : (n.push(e), t[e] = !0))
                            })), new Zr(r + ": " + n.map($r).join([", "]))
                        }("Cannot call " + r + " due to unbound types", s)
                    }), n - 1), Fr([], s, (function(t) {
                        var a = [t[0], null].concat(t.slice(1));
                        return function(r, n, t) {
                            e.hasOwnProperty(r) || jr("Replacing nonexistant public symbol"), void 0 !== e[r].overloadTable && void 0 !== t ? e[r].overloadTable[t] = n : (e[r] = n, e[r].argCount = t)
                        }(r, Jr(r, a, null, o, i), n - 1), []
                    }))
                },
                j: function(r, e, n, t, a) {
                    e = Mr(e), -1 === a && (a = 4294967295);
                    var o = Rr(n),
                        i = function(r) {
                            return r
                        };
                    if (0 === t) {
                        var u = 32 - 8 * n;
                        i = function(r) {
                            return r << u >>> u
                        }
                    }
                    var s = e.includes("unsigned");
                    Br(r, {
                        name: e,
                        fromWireType: i,
                        toWireType: function(r, n) {
                            if ("number" != typeof n && "boolean" != typeof n) throw new TypeError('Cannot convert "' + zr(n) + '" to ' + this.name);
                            if (n < t || n > a) throw new TypeError('Passing a number "' + zr(n) + '" from JS side to C/C++ side to an argument of type "' + e + '", which is outside the valid range [' + t + ", " + a + "]!");
                            return s ? n >>> 0 : 0 | n
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: re(e, o, 0 !== t),
                        destructorFunction: null
                    })
                },
                g: function(r, e, n) {
                    var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];

                    function a(r) {
                        r >>= 2;
                        var e = s(),
                            n = e[r],
                            a = e[r + 1];
                        return new t(x, a, n)
                    }
                    Br(r, {
                        name: n = Mr(n),
                        fromWireType: a,
                        argPackAdvance: 8,
                        readValueFromPointer: a
                    }, {
                        ignoreDuplicateRegistrations: !0
                    })
                },
                A: function(r, e) {
                    var n = "std::string" === (e = Mr(e));
                    Br(r, {
                        name: e,
                        fromWireType: function(r) {
                            var e, t = s()[r >> 2];
                            if (n)
                                for (var o = r + 4, i = 0; i <= t; ++i) {
                                    var u = r + 4 + i;
                                    if (i == t || 0 == a()[u]) {
                                        var c = L(o, u - o);
                                        void 0 === e ? e = c : (e += String.fromCharCode(0), e += c), o = u + 1
                                    }
                                } else {
                                    var f = new Array(t);
                                    for (i = 0; i < t; ++i) f[i] = String.fromCharCode(a()[r + 4 + i]);
                                    e = f.join("")
                                }
                            return Se(r), e
                        },
                        toWireType: function(r, e) {
                            e instanceof ArrayBuffer && (e = new Uint8Array(e));
                            var t = "string" == typeof e;
                            t || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || Lr("Cannot pass non-string to std::string");
                            var o = (n && t ? function() {
                                    return D(e)
                                } : function() {
                                    return e.length
                                })(),
                                i = We(4 + o + 1);
                            if (s()[i >> 2] = o, n && t) B(e, i + 4, o + 1);
                            else if (t)
                                for (var u = 0; u < o; ++u) {
                                    var c = e.charCodeAt(u);
                                    c > 255 && (Se(i), Lr("String has UTF-16 code units that do not fit in 8 bits")), a()[i + 4 + u] = c
                                } else
                                    for (u = 0; u < o; ++u) a()[i + 4 + u] = e[u];
                            return null !== r && r.push(Se, i), i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Ar,
                        destructorFunction: function(r) {
                            Se(r)
                        }
                    })
                },
                r: function(r, e, n) {
                    var t, a, o, u, c;
                    n = Mr(n), 2 === e ? (t = G, a = U, u = N, o = function() {
                        return i()
                    }, c = 1) : 4 === e && (t = V, a = q, u = z, o = function() {
                        return s()
                    }, c = 2), Br(r, {
                        name: n,
                        fromWireType: function(r) {
                            for (var n, a = s()[r >> 2], i = o(), u = r + 4, f = 0; f <= a; ++f) {
                                var l = r + 4 + f * e;
                                if (f == a || 0 == i[l >> c]) {
                                    var d = t(u, l - u);
                                    void 0 === n ? n = d : (n += String.fromCharCode(0), n += d), u = l + e
                                }
                            }
                            return Se(r), n
                        },
                        toWireType: function(r, t) {
                            "string" != typeof t && Lr("Cannot pass non-string to C++ string type " + n);
                            var o = u(t),
                                i = We(4 + o + e);
                            return s()[i >> 2] = o >> c, a(t, i + 4, o + e), null !== r && r.push(Se, i), i
                        },
                        argPackAdvance: 8,
                        readValueFromPointer: Ar,
                        destructorFunction: function(r) {
                            Se(r)
                        }
                    })
                },
                K: function(r, e, n, t, a, o) {
                    Tr[r] = {
                        name: Mr(e),
                        rawConstructor: Yr(n, t),
                        rawDestructor: Yr(a, o),
                        fields: []
                    }
                },
                h: function(r, e, n, t, a, o, i, u, s, c) {
                    Tr[r].fields.push({
                        fieldName: Mr(e),
                        getterReturnType: n,
                        getter: Yr(t, a),
                        getterContext: o,
                        setterArgumentType: i,
                        setter: Yr(u, s),
                        setterContext: c
                    })
                },
                ba: function(r, e) {
                    Br(r, {
                        isVoid: !0,
                        name: e = Mr(e),
                        argPackAdvance: 0,
                        fromWireType: function() {},
                        toWireType: function(r, e) {}
                    })
                },
                Z: function(r, e) {
                    if (r == e) postMessage({
                        cmd: "processQueuedMainThreadWork"
                    });
                    else if (m) postMessage({
                        targetThread: r,
                        cmd: "processThreadQueue"
                    });
                    else {
                        var n = vr.pthreads[r],
                            t = n && n.worker;
                        if (!t) return;
                        t.postMessage({
                            cmd: "processThreadQueue"
                        })
                    }
                    return 1
                },
                o: Ur,
                _: function(r) {
                    return 0 === r ? qr(ne()) : (r = void 0 === (n = ee[e = r]) ? Mr(e) : n, qr(ne()[r]));
                    var e, n
                },
                D: function(r) {
                    r > 4 && (Gr[r].refcount += 1)
                },
                Q: function(r, n, t, a) {
                    r = function(r) {
                        return r || Lr("Cannot use deleted val. handle = " + r), Gr[r].value
                    }(r);
                    var o = ae[n];
                    return o || (o = function(r) {
                        for (var n = "", t = 0; t < r; ++t) n += (0 !== t ? ", " : "") + "arg" + t;
                        var a = "return function emval_allocator_" + r + "(constructor, argTypes, args) {\n";
                        for (t = 0; t < r; ++t) a += "var argType" + t + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + t + '], "parameter ' + t + '");\nvar arg' + t + " = argType" + t + ".readValueFromPointer(args);\nargs += argType" + t + "['argPackAdvance'];\n";
                        return a += "var obj = new constructor(" + n + ");\nreturn __emval_register(obj);\n}\n", new Function("requireRegisteredType", "Module", "__emval_register", a)(te, e, qr)
                    }(n), ae[n] = o), o(r, t, a)
                },
                i: function() {
                    nr()
                },
                y: function(r, e, n) {
                    var t = function(r, e) {
                        var n;
                        for (oe.length = 0, e >>= 2; n = a()[r++];) {
                            var t = n < 105;
                            t && 1 & e && e++, oe.push(t ? c()[e++ >> 1] : u()[e]), ++e
                        }
                        return oe
                    }(e, n);
                    return ir[r].apply(null, t)
                },
                V: function() {},
                x: function(r, e) {},
                l: ie,
                m: dr,
                p: hr,
                e: function(r, e) {
                    return function(r, e) {
                        throw ze(r, e || 1), "longjmp"
                    }(r, e)
                },
                M: function(r, e, n) {
                    a().copyWithin(r, e, e + n)
                },
                ea: function() {
                    return navigator.hardwareConcurrency
                },
                W: function(r, e, n) {
                    se.length = e;
                    for (var t = n >> 3, a = 0; a < e; a++) se[a] = c()[t + a];
                    return (r < 0 ? ir[-r - 1] : xe[r]).apply(null, se)
                },
                N: function(r) {
                    var e = a().length;
                    if ((r >>>= 0) <= e) return !1;
                    var n, t, o = 2147483648;
                    if (r > o) return !1;
                    for (var i = 1; i <= 4; i *= 2) {
                        var u = e * (1 + .2 / i);
                        if (u = Math.min(u, r + 100663296), ce(Math.min(o, ((n = Math.max(r, u)) % (t = 65536) > 0 && (n += t - n % t), n)))) return !0
                    }
                    return !1
                },
                X: function(r, e, n) {
                    return he(r) ? ve(r, e, n) : me(r, e, n)
                },
                w: function(r) {},
                Y: function(r, e) {
                    return n = r, t = e >> 2, a = u()[t + 6], o = {
                        alpha: !!u()[t + 0],
                        depth: !!u()[t + 1],
                        stencil: !!u()[t + 2],
                        antialias: !!u()[t + 3],
                        premultipliedAlpha: !!u()[t + 4],
                        preserveDrawingBuffer: !!u()[t + 5],
                        powerPreference: _e[a],
                        failIfMajorPerformanceCaveat: !!u()[t + 7],
                        majorVersion: u()[t + 8],
                        minorVersion: u()[t + 9],
                        enableExtensionsByDefault: u()[t + 10],
                        explicitSwapControl: u()[t + 11],
                        proxyContextToMainThread: u()[t + 12],
                        renderViaOffscreenBackBuffer: u()[t + 13]
                    }, (i = he(n)) ? o.explicitSwapControl ? 0 : ye.createContext(i, o) : 0;
                    var n, t, a, o, i
                },
                v: we,
                O: be,
                H: Te,
                S: ke,
                c: function() {
                    return T
                },
                L: function() {
                    vr.initRuntime()
                },
                q: function(r, e, n, t, a) {
                    var o = Ue();
                    try {
                        return J.get(r)(e, n, t, a)
                    } catch (r) {
                        if (Ne(o), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                s: function(r, e, n, t, a, o, i, u, s) {
                    var c = Ue();
                    try {
                        return J.get(r)(e, n, t, a, o, i, u, s)
                    } catch (r) {
                        if (Ne(c), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                t: function(r, e, n, t, a, o, i, u, s, c) {
                    var f = Ue();
                    try {
                        return J.get(r)(e, n, t, a, o, i, u, s, c)
                    } catch (r) {
                        if (Ne(f), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                J: function(r, e, n, t, a, o, i, u, s, c, f, l) {
                    var d = Ue();
                    try {
                        return J.get(r)(e, n, t, a, o, i, u, s, c, f, l)
                    } catch (r) {
                        if (Ne(d), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                G: function(r, e, n, t, a, o) {
                    var i = Ue();
                    try {
                        return Je(r, e, n, t, a, o)
                    } catch (r) {
                        if (Ne(i), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                n: function(r, e) {
                    var n = Ue();
                    try {
                        J.get(r)(e)
                    } catch (r) {
                        if (Ne(n), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                f: function(r, e, n) {
                    var t = Ue();
                    try {
                        J.get(r)(e, n)
                    } catch (r) {
                        if (Ne(t), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                d: function(r, e, n, t, a) {
                    var o = Ue();
                    try {
                        J.get(r)(e, n, t, a)
                    } catch (r) {
                        if (Ne(o), r !== r + 0 && "longjmp" !== r) throw r;
                        ze(1, 0)
                    }
                },
                a: k || e.wasmMemory,
                T: function(r) {
                    var e = vr.threadExitHandlers.pop();
                    r && e()
                },
                U: gr,
                B: function(r, e, n, t) {
                    if ("undefined" == typeof SharedArrayBuffer) return w("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
                    if (!r) return w("pthread_create called with a null thread pointer!"), 28;
                    var a = [];
                    if (m && 0 === a.length) return Re(687865856, r, e, n, t);
                    var o = 0,
                        i = 0,
                        c = 0;
                    e && -1 != e ? (o = u()[e >> 2], o += 81920, i = u()[e + 8 >> 2], c = 0 !== u()[e + 12 >> 2]) : o = 2097152;
                    var f = 0 == i;
                    f ? i = Qe(16, o) : M((i -= o) > 0);
                    for (var l = We(228), d = 0; d < 57; ++d) s()[(l >> 2) + d] = 0;
                    u()[r >> 2] = l, u()[l + 12 >> 2] = l;
                    var p = l + 152;
                    u()[p >> 2] = p;
                    var h = {
                        stackBase: i,
                        stackSize: o,
                        allocatedOwnStack: f,
                        detached: c,
                        startRoutine: n,
                        pthread_ptr: l,
                        arg: t,
                        transferList: a
                    };
                    return m ? (h.cmd = "spawnThread", postMessage(h, a), 0) : Ae(h)
                },
                ca: function(r, e) {
                    return function(r, e, n) {
                        if (!r) return w("pthread_join attempted on a null thread pointer!"), sr;
                        if (m && Be() == r) return w("PThread " + r + " is attempting to join to itself!"), lr;
                        if (!m && je() == r) return w("Main thread " + r + " is attempting to join to itself!"), lr;
                        if (u()[r + 12 >> 2] !== r) return w("pthread_join attempted on thread " + r + ", which does not point to a valid thread, or does not exist anymore!"), sr;
                        if (Atomics.load(s(), r + 64 >> 2)) return w("Attempted to join thread " + r + ", which was already detached!"), fr;
                        for (;;) {
                            var t = Atomics.load(s(), r + 0 >> 2);
                            if (1 == t) {
                                var a = Atomics.load(s(), r + 4 >> 2);
                                return e && (u()[e >> 2] = a), Atomics.store(s(), r + 64 >> 2, 1), m ? postMessage({
                                    cmd: "cleanupThread",
                                    thread: r
                                }) : pr(r), 0
                            }
                            if (!n) return cr;
                            Ce(), m || He(), ie(r + 0, t, m ? 100 : 1)
                        }
                    }(r, e, !0)
                },
                b: function(r) {
                    T = r
                },
                da: function(r) {
                    var e = Date.now() / 1e3 | 0;
                    return r && (u()[r >> 2] = e), e
                }
            };
        ! function() {
            var r = {
                a: Ee
            };

            function n(r, n) {
                var t, a = r.exports;
                if (e.asm = a, J = e.asm.ja, t = e.asm.fa, Y.unshift(t), vr.tlsInitFunctions.push(e.asm.ia), A = n, !m) {
                    var o = vr.unusedWorkers.length;
                    vr.unusedWorkers.forEach((function(r) {
                        vr.loadWasmModuleToWorker(r, (function() {
                            --o || function(r) {
                                if (rr--, e.monitorRunDependencies && e.monitorRunDependencies(rr), 0 == rr && er) {
                                    var n = er;
                                    er = null, n()
                                }
                            }()
                        }))
                    }))
                }
            }

            function t(r) {
                n(r.instance, r.module)
            }

            function a(e) {
                return (b || "function" != typeof fetch ? Promise.resolve().then((function() {
                    return or(ar)
                })) : fetch(ar, {
                    credentials: "same-origin"
                }).then((function(r) {
                    if (!r.ok) throw "failed to load wasm binary file at '" + ar + "'";
                    return r.arrayBuffer()
                })).catch((function() {
                    return or(ar)
                }))).then((function(e) {
                    return WebAssembly.instantiate(e, r)
                })).then(e, (function(r) {
                    w("failed to asynchronously prepare wasm: " + r), nr(r)
                }))
            }
            if (m || (M(!m, "addRunDependency cannot be used in a pthread worker"), rr++, e.monitorRunDependencies && e.monitorRunDependencies(rr)), e.instantiateWasm) try {
                return e.instantiateWasm(r, n)
            } catch (r) {
                return w("Module.instantiateWasm callback failed with error: " + r), !1
            }(b || "function" != typeof WebAssembly.instantiateStreaming || tr(ar) || "function" != typeof fetch ? a(t) : fetch(ar, {
                credentials: "same-origin"
            }).then((function(e) {
                return WebAssembly.instantiateStreaming(e, r).then(t, (function(r) {
                    return w("wasm streaming compile failed: " + r), w("falling back to ArrayBuffer instantiation"), a(t)
                }))
            }))).catch(l)
        }(), e.___wasm_call_ctors = function() {
            return (e.___wasm_call_ctors = e.asm.fa).apply(null, arguments)
        };
        var We = e._malloc = function() {
                return (We = e._malloc = e.asm.ga).apply(null, arguments)
            },
            Se = e._free = function() {
                return (Se = e._free = e.asm.ha).apply(null, arguments)
            };
        e._emscripten_tls_init = function() {
            return (e._emscripten_tls_init = e.asm.ia).apply(null, arguments)
        };
        var Pe = e.___getTypeName = function() {
            return (Pe = e.___getTypeName = e.asm.ka).apply(null, arguments)
        };
        e.___embind_register_native_and_builtin_types = function() {
            return (e.___embind_register_native_and_builtin_types = e.asm.la).apply(null, arguments)
        }, e._emscripten_current_thread_process_queued_calls = function() {
            return (e._emscripten_current_thread_process_queued_calls = e.asm.ma).apply(null, arguments)
        };
        var Ie = e._emscripten_register_main_browser_thread_id = function() {
                return (Ie = e._emscripten_register_main_browser_thread_id = e.asm.na).apply(null, arguments)
            },
            je = e._emscripten_main_browser_thread_id = function() {
                return (je = e._emscripten_main_browser_thread_id = e.asm.oa).apply(null, arguments)
            },
            Fe = e.__emscripten_do_dispatch_to_thread = function() {
                return (Fe = e.__emscripten_do_dispatch_to_thread = e.asm.pa).apply(null, arguments)
            },
            Re = e._emscripten_sync_run_in_main_thread_4 = function() {
                return (Re = e._emscripten_sync_run_in_main_thread_4 = e.asm.qa).apply(null, arguments)
            },
            He = e._emscripten_main_thread_process_queued_calls = function() {
                return (He = e._emscripten_main_thread_process_queued_calls = e.asm.ra).apply(null, arguments)
            },
            Me = e._emscripten_run_in_main_runtime_thread_js = function() {
                return (Me = e._emscripten_run_in_main_runtime_thread_js = e.asm.sa).apply(null, arguments)
            },
            Oe = e.__emscripten_call_on_thread = function() {
                return (Oe = e.__emscripten_call_on_thread = e.asm.ta).apply(null, arguments)
            },
            Le = e.__emscripten_thread_init = function() {
                return (Le = e.__emscripten_thread_init = e.asm.ua).apply(null, arguments)
            },
            Be = e._pthread_self = function() {
                return (Be = e._pthread_self = e.asm.va).apply(null, arguments)
            },
            De = e.___pthread_tsd_run_dtors = function() {
                return (De = e.___pthread_tsd_run_dtors = e.asm.wa).apply(null, arguments)
            },
            Ge = e._emscripten_get_global_libc = function() {
                return (Ge = e._emscripten_get_global_libc = e.asm.xa).apply(null, arguments)
            },
            Ue = e.stackSave = function() {
                return (Ue = e.stackSave = e.asm.ya).apply(null, arguments)
            },
            Ne = e.stackRestore = function() {
                return (Ne = e.stackRestore = e.asm.za).apply(null, arguments)
            },
            Ve = e.stackAlloc = function() {
                return (Ve = e.stackAlloc = e.asm.Aa).apply(null, arguments)
            },
            qe = e._emscripten_stack_set_limits = function() {
                return (qe = e._emscripten_stack_set_limits = e.asm.Ba).apply(null, arguments)
            },
            ze = e._setThrew = function() {
                return (ze = e._setThrew = e.asm.Ca).apply(null, arguments)
            },
            Qe = e._memalign = function() {
                return (Qe = e._memalign = e.asm.Da).apply(null, arguments)
            };
        e.dynCall_jiiiiiiiii = function() {
            return (e.dynCall_jiiiiiiiii = e.asm.Ea).apply(null, arguments)
        };
        var Je = e.dynCall_ijiii = function() {
            return (Je = e.dynCall_ijiii = e.asm.Fa).apply(null, arguments)
        };
        e.dynCall_jiji = function() {
            return (e.dynCall_jiji = e.asm.Ga).apply(null, arguments)
        }, e.dynCall_jiiiiiiii = function() {
            return (e.dynCall_jiiiiiiii = e.asm.Ha).apply(null, arguments)
        }, e.dynCall_jiiiiii = function() {
            return (e.dynCall_jiiiiii = e.asm.Ia).apply(null, arguments)
        }, e.dynCall_jiiiii = function() {
            return (e.dynCall_jiiiii = e.asm.Ja).apply(null, arguments)
        }, e.dynCall_iiijii = function() {
            return (e.dynCall_iiijii = e.asm.Ka).apply(null, arguments)
        };
        var Xe, Ke = e.__emscripten_allow_main_runtime_queued_calls = 600816,
            Ye = e.__emscripten_main_thread_futex = 897300;

        function Ze(r) {
            this.name = "ExitStatus", this.message = "Program terminated with exit(" + r + ")", this.status = r
        }

        function $e(r) {
            if (!(rr > 0)) {
                if (m) return f(e), $(), void postMessage({
                    cmd: "loaded"
                });
                ! function() {
                    if (!m) {
                        if (e.preRun)
                            for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) r = e.preRun.shift(), K.unshift(r);
                        var r;
                        ur(K)
                    }
                }(), rr > 0 || (e.setStatus ? (e.setStatus("Running..."), setTimeout((function() {
                    setTimeout((function() {
                        e.setStatus("")
                    }), 1), n()
                }), 1)) : n())
            }

            function n() {
                Xe || (Xe = !0, e.calledRun = !0, H || ($(), f(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), function() {
                    if (!m) {
                        if (e.postRun)
                            for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) r = e.postRun.shift(), Z.unshift(r);
                        var r;
                        ur(Z)
                    }
                }()))
            }
        }
        if (e.PThread = vr, e.PThread = vr, e.wasmMemory = k, e.ExitStatus = Ze, er = function r() {
                Xe || $e(), Xe || (er = r)
            }, e.run = $e, e.preInit)
            for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); e.preInit.length > 0;) e.preInit.pop()();
        return m && (C = !1, vr.initWorker()), $e(), e.ready
    });
    n.default = a
}));