if (!self.define) {
    let e = {};
    const t = (t, a) => (t = t.startsWith(location.origin) ? t : new URL(t + ".js", a).href, e[t] || new Promise(e => {
        if ("document" in self) {
            const a = document.createElement("link");
            a.rel = "preload", a.as = "script", a.href = t, a.onload = () => {
                const a = document.createElement("script");
                a.src = t, a.onload = e, document.head.appendChild(a)
            }, document.head.appendChild(a)
        } else self.nextDefineUri = t, importScripts(t), e()
    }).then(() => {
        let a = e[t];
        if (!a) throw new Error(`Module ${t} didn’t register its module`);
        return a
    }));
    self.define = (a, r) => {
        const n = self.nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
        if (e[n]) return;
        let d = {};
        const s = e => t(e, n),
            i = {
                module: {
                    uri: n
                },
                exports: d,
                require: s
            };
        e[n] = Promise.resolve().then(() => Promise.all(a.map(e => i[e] || s(e)))).then(e => (r(...e), d))
    }
}
define(["require"], (function(e) {
    var t = {},
        a = !1;
    var r = function() {
        var e = Array.prototype.slice.call(arguments).join(" ");
        console.error(e)
    };
    self.alert = function() {
        var e = Array.prototype.slice.call(arguments).join(" ");
        postMessage({
            cmd: "alert",
            text: e,
            threadId: t._pthread_self()
        })
    }, t.instantiateWasm = function(e, a) {
        var r = new WebAssembly.Instance(t.wasmModule, e);
        return a(r), t.wasmModule = null, r.exports
    }, self.onmessage = function(n) {
        try {
            if ("load" === n.data.cmd) t.wasmModule = n.data.wasmModule, t.wasmMemory = n.data.wasmMemory, t.buffer = t.wasmMemory.buffer, t.ENVIRONMENT_IS_PTHREAD = !0, (n.data.urlOrBlob ? e(n.data.urlOrBlob) : e("./avif_enc_mt-13bf1872")).then((function(e) {
                return e.default(t)
            })).then((function(e) {
                t = e
            }));
            else if ("objectTransfer" === n.data.cmd) t.PThread.receiveObjectTransfer(n.data);
            else if ("run" === n.data.cmd) {
                t.__performance_now_clock_drift = performance.now() - n.data.time, t.__emscripten_thread_init(n.data.threadInfoStruct, 0, 0);
                var d = n.data.stackBase,
                    s = n.data.stackBase + n.data.stackSize;
                t.establishStackSpace(s, d), t.PThread.receiveObjectTransfer(n.data), t.PThread.threadInit(), a || (t.___embind_register_native_and_builtin_types(), a = !0);
                try {
                    var i = t.invokeEntryPoint(n.data.start_routine, n.data.arg);
                    t.keepRuntimeAlive() ? t.PThread.setExitStatus(i) : t.PThread.threadExit(i)
                } catch (e) {
                    if ("Canceled!" === e) t.PThread.threadCancel();
                    else if ("unwind" != e) {
                        if (!(e instanceof t.ExitStatus)) throw t.PThread.threadExit(-2), e;
                        t.keepRuntimeAlive() || t.PThread.threadExit(e.status)
                    }
                }
            } else "cancel" === n.data.cmd ? t._pthread_self() && t.PThread.threadCancel() : "setimmediate" === n.data.target || ("processThreadQueue" === n.data.cmd ? t._pthread_self() && t._emscripten_current_thread_process_queued_calls() : (r("worker.js received unknown command " + n.data.cmd), r(n.data)))
        } catch (e) {
            throw r("worker.js onmessage() captured an uncaught exception: " + e), e && e.stack && r(e.stack), e
        }
    }
}));