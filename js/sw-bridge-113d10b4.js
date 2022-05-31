define(["exports", "./idb-keyval-3888ea60"], (function(e, t) {
    async function a(e) {
        if (e.waiting) return;
        const t = await async function(e) {
            return e.installing ? e.installing : new Promise(t => {
                e.addEventListener("updatefound", () => t(e.installing), {
                    once: !0
                })
            })
        }(e);
        return new Promise(e => {
            t.addEventListener("statechange", () => {
                "installed" === t.state && e()
            })
        })
    }
    e.getSharedImage = function() {
        return new Promise(e => {
            const t = a => {
                "load-image" === a.data.action && (e(a.data.file), navigator.serviceWorker.removeEventListener("message", t))
            };
            navigator.serviceWorker.addEventListener("message", t), navigator.serviceWorker.controller.postMessage("share-ready")
        })
    }, e.mainAppLoaded = async function() {
        if (await t.get("user-interacted")) return;
        t.set("user-interacted", !0);
        const e = await async function() {
            const e = await navigator.serviceWorker.getRegistration();
            return e ? e.active || e.waiting || e.installing : null
        }();
        e && e.postMessage("cache-all")
    }, e.offliner = async function(e) {
        navigator.serviceWorker.register(t.swUrl);
        const n = !!navigator.serviceWorker.controller;
        if (navigator.serviceWorker.addEventListener("controllerchange", async () => {
                n ? location.reload() : e("ഓഫ്‌ലൈനിൽ പ്രവർത്തിക്കാൻ തയ്യാറാണ്", {
                    timeout: 5e3
                })
            }), !n) return;
        const i = await navigator.serviceWorker.getRegistration();
        if (!i) return;
        await a(i), "reload" === await e("അപ്ഡേറ്റ് ലഭ്യമാണ്", {
            actions: ["റീലോഡ്", "ഒഴിവാക്കുക"]
        }) && async function() {
            const e = await navigator.serviceWorker.getRegistration();
            e && e.waiting && e.waiting.postMessage("skip-waiting")
        }()
    }
}));