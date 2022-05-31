const ASSETS = [
  "img/logo-99b7d28c.svg",
  "img/github-logo-eaea4a88.svg",
  "img/icon-demo-large-photo-18da387a.jpg",
  "img/icon-demo-device-screen-5d52d8b9.jpg",
  "img/icon-demo-logo-326ed9b6.png",
  "img/icon-demo-artwork-9eba1655.jpg",
  "img/small-db1eae6f.svg",
  "img/simple-258b6ed5.svg",
  "img/secure-a66bbdfe.svg",
  "img/demo-device-screen-b9d088e8.jpg",
  "wasm/rotate-e8fb6784.wasm",
  "wasm/imagequant-a10bbe1a.wasm",
  "wasm/webp_dec-12bed04a.wasm",
  "wasm/squoosh_resize_bg-3d426466.wasm",
  "wasm/squoosh_oxipng_bg-bb6b7672.wasm",
  "wasm/mozjpeg_enc-f6bf569c.wasm",
  "wasm/squoosh_oxipng_bg-89ef9006.wasm",
  "wasm/webp_enc-a8223a7d.wasm",
  "wasm/squooshhqx_bg-6e04a330.wasm",
  "wasm/webp_enc_simd-75acd924.wasm",
  "wasm/wp2_dec-9a40adf1.wasm",
  "img/demo-large-photo-a6b23f7b.jpg",
  "img/demo-artwork-c444f915.jpg",
  "wasm/jxl_dec-e90a5afa.wasm",
  "wasm/wp2_enc_mt-1feb6658.wasm",
  "wasm/wp2_enc-89317929.wasm",
  "wasm/wp2_enc_mt_simd-0b0595e9.wasm",
  "wasm/jxl_enc_mt-669d03c7.wasm",
  "wasm/jxl_enc-68f8271f.wasm",
  "wasm/avif_dec-07eff3d3.wasm",
  "wasm/jxl_enc_mt_simd-efe18ebf.wasm",
  "wasm/avif_enc-b345922b.wasm",
  "wasm/avif_enc_mt-e6a6332c.wasm",
  "js/initial-app-c3b1146f.js",
  "js/idb-keyval-3888ea60.js",
  "js/index-5f659321.js",
  "js/features-worker-89e5e6c0.js",
  "js/util-d4fc8e28.js",
  "js/avif_enc_mt.worker-8046ca86.js",
  "js/jxl_enc_mt.worker-06718fba.js",
  "js/jxl_enc_mt_simd.worker-d62e3e37.js",
  "js/wp2_enc_mt.worker-7435247e.js",
  "js/wp2_enc_mt_simd.worker-871eaa55.js",
  "js/workerHelpers-036793d8.js",
  "js/Compress-0ac4f2d5.js",
  "js/sw-bridge-113d10b4.js",
  "js/blob-anim-c843ee1d.js",
  "js/avif_dec-a561c24f.js",
  "js/webp_dec-36c82cbe.js",
  "js/avif_enc_mt-13bf1872.js",
  "js/avif_enc-0d7d1363.js",
  "js/jxl_enc_mt_simd-7feb3ee4.js",
  "js/jxl_enc_mt-25b2c513.js",
  "js/jxl_enc-c802bba0.js",
  "js/squoosh_oxipng-bcd760ee.js",
  "js/squoosh_oxipng-3f0e8351.js",
  "js/webp_enc_simd-2d7d2456.js",
  "js/webp_enc-75623855.js",
  "js/wp2_enc_mt_simd-109ebbc7.js",
  "js/wp2_enc_mt-b95436aa.js",
  "js/wp2_enc-9f185f33.js"
];
const VERSION = "c26da1f04081194e7664d47dc35fccc5434ff618";
if (!self.define) {
  let e = {};
  const A = (A, t) => (A = A.startsWith(location.origin) ? A : new URL(A + ".js", t).href, e[A] || new Promise(e => {
      if ("document" in self) {
          const t = document.createElement("link");
          t.rel = "preload", t.as = "script", t.href = A, t.onload = () => {
              const t = document.createElement("script");
              t.src = A, t.onload = e, document.head.appendChild(t)
          }, document.head.appendChild(t)
      } else self.nextDefineUri = A, importScripts(A), e()
  }).then(() => {
      let t = e[A];
      if (!t) throw new Error(`Module ${A} didn’t register its module`);
      return t
  }));
  self.define = (t, n) => {
      const a = self.nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
      if (e[a]) return;
      let _ = {};
      const s = e => A(e, a),
          i = {
              module: {
                  uri: a
              },
              exports: _,
              require: s
          };
      e[a] = Promise.resolve().then(() => Promise.all(t.map(e => i[e] || s(e)))).then(e => (n(...e), _))
  }
}
define(["./js/index-5f659321", "./js/idb-keyval-3888ea60"], (function(e, A) {
  var t = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      n = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABUAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB1tZGF0EgAKBDgADskyCx/wAABYAAAAAK+w";
  const a = "/js/initial-app-c3b1146f.js",
      _ = ["/img/logo-99b7d28c.svg", "/img/github-logo-eaea4a88.svg", "/img/demo-large-photo-a6b23f7b.jpg", "/img/demo-artwork-c444f915.jpg", "/img/demo-device-screen-b9d088e8.jpg", "/img/icon-demo-large-photo-18da387a.jpg", "/img/icon-demo-artwork-9eba1655.jpg", "/img/icon-demo-device-screen-5d52d8b9.jpg", "/img/small-db1eae6f.svg", "/img/simple-258b6ed5.svg", "/img/secure-a66bbdfe.svg", "/img/icon-demo-logo-326ed9b6.png"],
      s = "/js/Compress-0ac4f2d5.js",
      i = ["/js/initial-app-c3b1146f.js", "/js/util-d4fc8e28.js", "/js/features-worker-89e5e6c0.js", "/img/logo-99b7d28c.svg", "/img/github-logo-eaea4a88.svg", "/img/demo-large-photo-a6b23f7b.jpg", "/img/demo-artwork-c444f915.jpg", "/img/demo-device-screen-b9d088e8.jpg", "/img/icon-demo-large-photo-18da387a.jpg", "/img/icon-demo-artwork-9eba1655.jpg", "/img/icon-demo-device-screen-5d52d8b9.jpg", "/img/small-db1eae6f.svg", "/img/simple-258b6ed5.svg", "/img/secure-a66bbdfe.svg", "/img/icon-demo-logo-326ed9b6.png"],
      r = "/js/sw-bridge-113d10b4.js",
      c = ["/js/idb-keyval-3888ea60.js", "/serviceworker.js"],
      o = "/js/blob-anim-c843ee1d.js",
      l = ["/js/initial-app-c3b1146f.js", "/img/logo-99b7d28c.svg", "/img/github-logo-eaea4a88.svg", "/img/demo-large-photo-a6b23f7b.jpg", "/img/demo-artwork-c444f915.jpg", "/img/demo-device-screen-b9d088e8.jpg", "/img/icon-demo-large-photo-18da387a.jpg", "/img/icon-demo-artwork-9eba1655.jpg", "/img/icon-demo-device-screen-5d52d8b9.jpg", "/img/small-db1eae6f.svg", "/img/simple-258b6ed5.svg", "/img/secure-a66bbdfe.svg", "/img/icon-demo-logo-326ed9b6.png"],
      N = "/js/features-worker-89e5e6c0.js",
      E = ["/js/util-d4fc8e28.js", "/js/index-5f659321.js", "/wasm/jxl_dec-e90a5afa.wasm", "/wasm/wp2_dec-9a40adf1.wasm", "/wasm/mozjpeg_enc-f6bf569c.wasm", "/wasm/rotate-e8fb6784.wasm", "/wasm/imagequant-a10bbe1a.wasm", "/wasm/squoosh_resize_bg-3d426466.wasm", "/wasm/squooshhqx_bg-6e04a330.wasm"];
  var d = Object.freeze({
      __proto__: null,
      main: N,
      deps: E
  });
  const f = "/js/avif_dec-a561c24f.js",
      u = ["/wasm/avif_dec-07eff3d3.wasm"];
  var T = Object.freeze({
      __proto__: null,
      main: f,
      deps: u
  });
  const p = "/js/webp_dec-36c82cbe.js",
      m = ["/wasm/webp_dec-12bed04a.wasm"];
  var P = Object.freeze({
      __proto__: null,
      main: p,
      deps: m
  });
  const D = "/js/avif_enc_mt-13bf1872.js",
      I = ["/js/avif_enc_mt-e6a6332c.wasm", "/js/avif_enc_mt.worker-8046ca86.js"];
  var h = Object.freeze({
      __proto__: null,
      main: D,
      deps: I
  });
  const U = "/js/avif_enc-0d7d1363.js",
      w = ["/wasm/avif_enc-b345922b.wasm"];
  var G = Object.freeze({
      __proto__: null,
      main: U,
      deps: w
  });
  const R = "/js/jxl_enc_mt_simd-7feb3ee4.js",
      L = ["/js/jxl_enc_mt_simd-efe18ebf.wasm", "/js/jxl_enc_mt_simd.worker-d62e3e37.js"];
  var Y = Object.freeze({
      __proto__: null,
      main: R,
      deps: L
  });
  const M = "/js/jxl_enc_mt-25b2c513.js",
      S = ["/js/jxl_enc_mt-669d03c7.wasm", "/js/jxl_enc_mt.worker-06718fba.js"];
  var g = Object.freeze({
      __proto__: null,
      main: M,
      deps: S
  });
  const v = "/js/jxl_enc-c802bba0.js",
      b = ["/wasm/jxl_enc-68f8271f.wasm"];
  var B = Object.freeze({
      __proto__: null,
      main: v,
      deps: b
  });
  const j = "/js/squoosh_oxipng-bcd760ee.js",
      y = ["/js/workerHelpers-036793d8.js", "/wasm/squoosh_oxipng_bg-89ef9006.wasm"];
  var O = Object.freeze({
      __proto__: null,
      main: j,
      deps: y
  });
  const z = "/js/squoosh_oxipng-3f0e8351.js",
      W = ["/wasm/squoosh_oxipng_bg-bb6b7672.wasm"];
  var k = Object.freeze({
      __proto__: null,
      main: z,
      deps: W
  });
  const x = "/js/webp_enc_simd-2d7d2456.js",
      q = ["/wasm/webp_enc_simd-75acd924.wasm"];
  var Q = Object.freeze({
      __proto__: null,
      main: x,
      deps: q
  });
  const C = "/js/webp_enc-75623855.js",
      Z = ["/wasm/webp_enc-a8223a7d.wasm"];
  var X = Object.freeze({
      __proto__: null,
      main: C,
      deps: Z
  });
  const F = "/js/wp2_enc_mt_simd-109ebbc7.js",
      K = ["/js/wp2_enc_mt_simd-0b0595e9.wasm", "/js/wp2_enc_mt_simd.worker-871eaa55.js"];
  var V = Object.freeze({
      __proto__: null,
      main: F,
      deps: K
  });
  const H = "/js/wp2_enc_mt-b95436aa.js",
      J = ["/js/wp2_enc_mt-1feb6658.wasm", "/js/wp2_enc_mt.worker-7435247e.js"];
  var $ = Object.freeze({
      __proto__: null,
      main: H,
      deps: J
  });
  const ee = "/js/wp2_enc-9f185f33.js",
      Ae = ["/wasm/wp2_enc-89317929.wasm"];
  var te = Object.freeze({
      __proto__: null,
      main: ee,
      deps: Ae
  });

  function ne(e) {
      return e.startsWith("/img/demo-")
  }
  let ae = new Set([s, ...i, r, ...c, o, ...l]);
  ae = function(e, A) {
      const t = new Set(e);
      for (const e of A) t.delete(e);
      return t
  }(ae, new Set([a, ..._.filter(e => e.endsWith(".js") || ne(e)), N, A.swUrl]));
  const _e = ["/", ...ae],
      se = (async () => {
          const [A, a, _, s] = await Promise.all([e.threads(), e.simd(), ...[t, n].map(async e => {
              if (!self.createImageBitmap) return !1;
              const A = await fetch(e),
                  t = await A.blob();
              return createImageBitmap(t).then(() => !0, () => !1)
          })]), i = [];

          function r(e) {
              i.push(e.main, ...e.deps)
          }
          return r(d), s || r(T), _ || r(P), r(A ? h : G), r(A && a ? Y : A ? g : B), r(A ? O : k), r(a ? Q : X), r(A && a ? V : A ? $ : te), [...new Set(i)]
      })();

  function ie(e) {
      const A = e.request.formData();
      e.respondWith(Response.redirect("/?share-target")), e.waitUntil(async function() {
          var t;
          await (t = "share-ready", new Promise(e => {
              oe.has(t) || oe.set(t, []), oe.get(t).push(e)
          }));
          const n = await self.clients.get(e.resultingClientId),
              a = (await A).get("file");
          n.postMessage({
              file: a,
              action: "load-image"
          })
      }())
  }

  function re(e) {
      return e.map(e => new Request(e, {
          cache: "no-cache"
      }))
  }
  async function ce(e) {
      return (await caches.open(e)).addAll(re(await se))
  }
  const oe = new Map;
  self.addEventListener("message", e => {
      const A = oe.get(e.data);
      if (A) {
          oe.delete(e.data);
          for (const e of A) e()
      }
  });
  const le = "static-" + VERSION,
      Ne = "dynamic",
      Ee = [le, Ne];
  self.addEventListener("install", e => {
      e.waitUntil(async function() {
          const e = [];
          e.push(async function(e) {
              return (await caches.open(e)).addAll(re(_e))
          }(le)), await A.get("user-interacted") && e.push(ce(le)), await Promise.all(e)
      }())
  }), self.addEventListener("activate", e => {
      self.clients.claim(), e.waitUntil(async function() {
          const e = (await caches.keys()).map(e => {
              if (!Ee.includes(e)) return caches.delete(e)
          });
          await Promise.all(e)
      }())
  }), self.addEventListener("fetch", e => {
      const A = new URL(e.request.url);
      if (A.origin === location.origin)
          if ("/editor" !== A.pathname) {
              if ("/" === A.pathname && A.searchParams.has("share-target") && "POST" === e.request.method) ie(e);
              else if ("GET" === e.request.method) return ne(A.pathname) ? (function(e, A) {
                      e.respondWith(async function() {
                          const {
                              request: t
                          } = e, n = await caches.match(t);
                          if (n) return n;
                          const a = await fetch(t),
                              _ = a.clone();
                          return e.waitUntil(async function() {
                              const e = await caches.open(A);
                              await e.put(t, _)
                          }()), a
                      }())
                  }(e, Ne), void
                  function(e, A, t) {
                      e.waitUntil(async function() {
                          const e = await caches.open(A),
                              n = (await e.keys()).map(A => {
                                  const n = new URL(A.url).pathname.slice(1);
                                  if (!t.includes(n)) return e.delete(A)
                              });
                          await Promise.all(n)
                      }())
                  }(e, Ne, ASSETS)) : void
              function(e) {
                  e.respondWith(async function() {
                      return await caches.match(e.request, {
                          ignoreSearch: !0
                      }) || fetch(e.request)
                  }())
              }(e)
          } else e.respondWith(Response.redirect("/"))
  }), self.addEventListener("message", e => {
      switch (e.data) {
          case "cache-all":
              e.waitUntil(ce(le));
              break;
          case "skip-waiting":
              self.skipWaiting()
      }
  })
}));
