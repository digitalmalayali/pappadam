define(["require", "exports", "./initial-app-c3b1146f", "./util-d4fc8e28"], (function(e, t, i, n) {
    const s = "_options-1-theme_9btcn_85",
        o = "_options-2-theme_9btcn_107";

    function a(e, t) {
        const i = e.getContext("2d");
        if (!i) throw Error("Canvas not initialized");
        i.clearRect(0, 0, e.width, e.height), i.putImageData(t, 0, 0)
    }
    async function r(e, t, i) {
        const n = document.createElement("canvas");
        n.width = e.width, n.height = e.height;
        const s = n.getContext("2d");
        if (!s) throw Error("Canvas not initialized");
        let o;
        if (s.putImageData(e, 0, 0), "toBlob" in n) o = await new Promise(e => n.toBlob(e, t, i));
        else {
            const e = n.toDataURL(t, i),
                s = /data:([^;]+);base64,(.*)$/.exec(e);
            if (!s) throw Error("Data URL reading failed");
            const a = s[1],
                r = atob(s[2]),
                l = new Uint8Array(r.length);
            for (let e = 0; e < l.length; e += 1) l[e] = r.charCodeAt(e);
            o = new Blob([l], {
                type: a
            })
        }
        if (!o) throw Error("Encoding failed");
        return o
    }

    function l(e) {
        return "displayWidth" in e ? e.displayWidth : e.width
    }

    function h(e) {
        return "displayHeight" in e ? e.displayHeight : e.height
    }

    function c(e, t = {}) {
        const {
            width: i = l(e),
            height: n = h(e),
            sx: s = 0,
            sy: o = 0,
            sw: a = l(e),
            sh: r = h(e)
        } = t, c = document.createElement("canvas");
        c.width = i, c.height = n;
        const p = c.getContext("2d");
        if (!p) throw new Error("Could not create canvas context");
        return p.drawImage(e, s, o, a, r, 0, 0, i, n), p.getImageData(0, 0, i, n)
    }
    i.appendCss('._compress_9btcn_1{width:100%;height:100%;contain:strict;display:grid;grid-template-rows:max-content 1fr;grid-template-areas:"header" "opts";--options-radius:7px}@media (min-width:600px){._compress_9btcn_1{grid-template-rows:max-content 1fr;grid-template-columns:max-content 1fr max-content;grid-template-areas:"header header header" "optsLeft viewportOpts optsRight"}}._options_9btcn_43{position:relative;color:#fff;font-size:1.2rem;max-width:400px;margin:0 auto;width:calc(100% - 60px);max-height:100%;overflow:hidden;grid-area:opts;display:grid;grid-template-rows:1fr max-content;align-content:end;align-self:end}@media (min-width:600px){._options_9btcn_43{width:300px;margin:0}}._options-1-theme_9btcn_85{--main-theme-color:var(--orange);--hot-theme-color:var(--hot-orange);--header-text-color:var(--white);--scroller-radius:var(--options-radius) var(--options-radius) 0 0}@media (min-width:600px){._options-1-theme_9btcn_85{--scroller-radius:0 var(--options-radius) var(--options-radius) 0}}._options-2-theme_9btcn_107{--main-theme-color:var(--blue);--hot-theme-color:var(--deep-blue);--header-text-color:var(--dark-text);--scroller-radius:var(--options-radius) var(--options-radius) 0 0}@media (min-width:600px){._options-2-theme_9btcn_107{--scroller-radius:var(--options-radius) 0 0 var(--options-radius)}}._options-1_9btcn_85{grid-area:optsLeft}._options-2_9btcn_107{grid-area:optsRight}._multi-panel_9btcn_153{position:relative;display:flex;flex-flow:column;overflow:hidden}._multi-panel_9btcn_153>:first-child{order:2;margin-bottom:10px}._multi-panel_9btcn_153>:nth-child(2){order:1}._multi-panel_9btcn_153>:nth-child(3){order:4}._multi-panel_9btcn_153>:nth-child(4){order:3}._back_9btcn_203{position:relative;grid-area:header;margin:9px;justify-self:start;align-self:start}._back_9btcn_203>svg{width:47px}@media (min-width:600px){._back_9btcn_203{margin:14px}._back_9btcn_203>svg{width:58px}}._back-blob_9btcn_245{fill:var(--hot-orange);opacity:.77}._back-x_9btcn_255{fill:var(--white)}');
    const p = "undefined" != typeof ImageDecoder;
    const d = /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent);

    function u(e, t) {
        for (const i in e)
            if (e[i] !== t[i]) return !1;
        for (const i in t)
            if (!(i in e)) return !1;
        return !0
    }
    const _ = new Map;

    function g(e) {
        return new Response(e).arrayBuffer()
    }
    const m = new Map([
        [/^%PDF-/, "application/pdf"],
        [/^GIF87a/, "image/gif"],
        [/^GIF89a/, "image/gif"],
        [/^\x89PNG\x0D\x0A\x1A\x0A/, "image/png"],
        [/^\xFF\xD8\xFF/, "image/jpeg"],
        [/^BM/, "image/bmp"],
        [/^I I/, "image/tiff"],
        [/^II*/, "image/tiff"],
        [/^MM\x00*/, "image/tiff"],
        [/^RIFF....WEBPVP8[LX ]/s, "image/webp"],
        [/^\xF4\xFF\x6F/, "image/webp2"],
        [/^\x00\x00\x00 ftypavif\x00\x00\x00\x00/, "image/avif"],
        [/^\xff\x0a/, "image/jxl"],
        [/^\x00\x00\x00\x0cJXL \x0d\x0a\x87\x0a/, "image/jxl"]
    ]);
    async function v(e) {
        const t = URL.createObjectURL(e);
        try {
            return await async function(e) {
                const t = new Image;
                t.decoding = "async", t.src = e;
                const i = new Promise((e, i) => {
                    t.onload = () => e(), t.onerror = () => i(Error("Image loading error"))
                });
                return t.decode && await t.decode().catch(() => null), await i, t
            }(t)
        } finally {
            URL.revokeObjectURL(t)
        }
    }
    async function f(e, t, i) {
        if (await async function(e) {
                if (!p) return !1;
                try {
                    return await ImageDecoder.isTypeSupported(e)
                } catch (e) {
                    return !1
                }
            }(i)) {
            z(e);
            try {
                return await k(e, async function(e, t) {
                    if (!p) throw Error("This browser does not support ImageDecoder. This function should not have been called.");
                    const i = new ImageDecoder({
                            type: t,
                            data: new Response(e).body
                        }),
                        {
                            image: n
                        } = await i.decode();
                    return c(n)
                }(t, i))
            } catch (e) {}
        }
        z(e);
        return c(await k(e, "createImageBitmap" in self ? createImageBitmap(t) : v(t)))
    }

    function b(e, t = 0) {
        return e ? Number(x(e)) : t
    }

    function A(e, t = 0) {
        return e ? Number(w(e)) : t
    }

    function w(e, t = !1) {
        return e ? e.checked : t
    }

    function x(e, t = "") {
        return e ? e.value : t
    }
    async function C(e, t) {
        const {
            from: i = e.getBoundingClientRect().height,
            to: n = e.getBoundingClientRect().height,
            duration: s = 1e3,
            easing: o = "ease-in-out"
        } = t;
        if (i !== n && 0 !== s) return e.style.height = i + "px", getComputedStyle(e).transform, e.style.transition = `height ${s}ms ${o}`, e.style.height = n + "px", new Promise(t => {
            const i = n => {
                n.target === e && (e.style.transition = "", e.removeEventListener("transitionend", i), e.removeEventListener("transitioncancel", i), t())
            };
            e.addEventListener("transitionend", i), e.addEventListener("transitioncancel", i)
        });
        e.style.height = n + "px"
    }

    function y(e) {
        e.preventDefault()
    }

    function z(e) {
        if (e.aborted) throw new DOMException("AbortError", "AbortError")
    }
    async function k(e, t) {
        return z(e), Promise.race([t, new Promise((t, i) => {
            e.addEventListener("abort", () => i(new DOMException("AbortError", "AbortError")))
        })])
    }
    const S = {
        cqLevel: 33,
        cqAlphaLevel: -1,
        denoiseLevel: 0,
        tileColsLog2: 0,
        tileRowsLog2: 0,
        speed: 6,
        subsample: 1,
        chromaDeltaQ: !1,
        sharpness: 0,
        tune: 0
    };
    var E = Object.freeze({
        __proto__: null,
        label: "AVIF",
        mimeType: "image/avif",
        extension: "avif",
        defaultOptions: S
    });
    const L = "image/gif";
    var q = Object.freeze({
        __proto__: null,
        label: "Browser GIF",
        mimeType: L,
        extension: "gif",
        defaultOptions: {}
    });
    const P = "image/jpeg";
    var I = Object.freeze({
        __proto__: null,
        label: "Browser JPEG",
        mimeType: P,
        extension: "jpg",
        defaultOptions: {
            quality: .75
        }
    });
    const M = "image/png";
    var O = Object.freeze({
        __proto__: null,
        label: "Browser PNG",
        mimeType: M,
        extension: "png",
        defaultOptions: {}
    });
    var B = Object.freeze({
        __proto__: null,
        label: "JPEG XL (beta)",
        mimeType: "image/jxl",
        extension: "jxl",
        defaultOptions: {
            effort: 7,
            quality: 75,
            progressive: !1,
            epf: -1,
            lossyPalette: !1,
            decodingSpeedTier: 0,
            photonNoiseIso: 0,
            lossyModular: !1
        }
    });
    var T = Object.freeze({
        __proto__: null,
        label: "MozJPEG",
        mimeType: "image/jpeg",
        extension: "jpg",
        defaultOptions: {
            quality: 75,
            baseline: !1,
            arithmetic: !1,
            progressive: !0,
            optimize_coding: !0,
            smoothing: 0,
            color_space: 3,
            quant_table: 3,
            trellis_multipass: !1,
            trellis_opt_zero: !1,
            trellis_opt_table: !1,
            trellis_loops: 1,
            auto_subsample: !0,
            chroma_subsample: 2,
            separate_chroma_quality: !1,
            chroma_quality: 75
        }
    });
    var R = Object.freeze({
        __proto__: null,
        label: "OxiPNG",
        mimeType: "image/png",
        extension: "png",
        defaultOptions: {
            level: 2,
            interlace: !1
        }
    });
    var D = Object.freeze({
        __proto__: null,
        label: "WebP",
        mimeType: "image/webp",
        extension: "webp",
        defaultOptions: {
            quality: 75,
            target_size: 0,
            target_PSNR: 0,
            method: 4,
            sns_strength: 50,
            filter_strength: 60,
            filter_sharpness: 0,
            filter_type: 1,
            partitions: 0,
            segments: 4,
            pass: 1,
            show_compressed: 0,
            preprocessing: 0,
            autofilter: 0,
            partition_limit: 0,
            alpha_compression: 1,
            alpha_filtering: 1,
            alpha_quality: 100,
            lossless: 0,
            exact: 0,
            image_hint: 0,
            emulate_jpeg_size: 0,
            thread_level: 0,
            low_memory: 0,
            near_lossless: 100,
            use_delta_palette: 0,
            use_sharp_yuv: 0
        }
    });
    const H = {
        quality: 75,
        alpha_quality: 75,
        effort: 5,
        pass: 1,
        sns: 50,
        uv_mode: 3,
        csp_type: 0,
        error_diffusion: 0,
        use_random_matrix: !1
    };
    var F = Object.freeze({
        __proto__: null,
        label: "WebP v2 (unstable)",
        mimeType: "image/webp2",
        extension: "wp2",
        defaultOptions: H
    });
    const j = "_options-title_1db19_27",
        V = "_option-text-first_1db19_69",
        U = "_option-toggle_1db19_85",
        Q = "_option-reveal_1db19_103 _option-toggle_1db19_85",
        N = "_option-one-cell_1db19_115",
        G = "_section-enabler_1db19_127 _option-toggle_1db19_85",
        Y = "_options-section_1db19_141",
        W = "_text-field_1db19_149",
        J = "_icon_1uftw_27";
    i.appendCss("._checkbox_1uftw_1{display:inline-block;position:relative;--size:17px}._real-checkbox_1uftw_13{top:0;position:absolute;opacity:0;pointer-events:none}._icon_1uftw_27{display:block;width:var(--size);height:var(--size)}._checked_1uftw_39{fill:var(--main-theme-color)}._disabled_1uftw_47{fill:var(--dark-gray)}");
    const X = e => i.h("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...e
        }),
        Z = e => i.h(X, {
            ...e
        }, i.h("circle", {
            cx: "12",
            cy: "12",
            r: "8",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2"
        })),
        K = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M12 3h5v2h2v2h2v5h-2V9h-2V7h-2V5h-3V3M21 12v5h-2v2h-2v2h-5v-2h3v-2h2v-2h2v-3h2M12 21H7v-2H5v-2H3v-5h2v3h2v2h2v2h3v2M3 12V7h2V5h2V3h5v2H9v2H7v2H5v3H3"
        })),
        $ = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"
        })),
        ee = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 0 0-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2a2 2 0 0 0-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.9 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8a2 2 0 0 0 2-2h-2v2zM5 7H3v12c0 1.1.9 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"
        })),
        te = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M15.6 5.5L11 1v3a8 8 0 0 0 0 16v-2a6 6 0 0 1 0-12v4l4.5-4.5zm4.3 5.5a8 8 0 0 0-1.6-3.9L17 8.5c.5.8.9 1.6 1 2.5h2zM13 17.9v2a8 8 0 0 0 3.9-1.6L15.5 17c-.8.5-1.6.9-2.5 1zm3.9-2.4l1.4 1.4A8 8 0 0 0 20 13h-2c-.1.9-.5 1.7-1 2.5z"
        })),
        ie = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
        })),
        ne = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M19 13H5v-2h14v2z"
        })),
        se = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M21.3 2.7v18.6H2.7V2.7h18.6m0-2.7H2.7A2.7 2.7 0 0 0 0 2.7v18.6A2.7 2.7 0 0 0 2.7 24h18.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 21.3 0z"
        })),
        oe = e => i.h(X, {
            ...e
        }, i.h("path", {
            d: "M21.3 0H2.7A2.7 2.7 0 0 0 0 2.7v18.6A2.7 2.7 0 0 0 2.7 24h18.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 21.3 0zm-12 18.7L2.7 12l1.8-1.9L9.3 15 19.5 4.8l1.8 1.9z"
        })),
        ae = () => i.h("svg", {
            viewBox: "0 -1.95 9.8 9.8"
        }, i.h("path", {
            d: "M8.2.2a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4A1 1 0 011.6.2l3.3 3.3L8.2.2z"
        })),
        re = () => i.h("svg", {
            viewBox: "0 0 23.9 24.9"
        }, i.h("path", {
            d: "M6.6 2.7h-4v13.2h2.7A2.7 2.7 0 018 18.6a2.7 2.7 0 002.6 2.6h2.7a2.7 2.7 0 002.6-2.6 2.7 2.7 0 012.7-2.7h2.6V2.7h-4a1.3 1.3 0 110-2.7h4A2.7 2.7 0 0124 2.7v18.5a2.7 2.7 0 01-2.7 2.7H2.7A2.7 2.7 0 010 21.2V2.7A2.7 2.7 0 012.7 0h4a1.3 1.3 0 010 2.7zm4 7.4V1.3a1.3 1.3 0 112.7 0v8.8L15 8.4a1.3 1.3 0 011.9 1.8l-4 4a1.3 1.3 0 01-1.9 0l-4-4A1.3 1.3 0 019 8.4z"
        })),
        le = () => i.h("svg", {
            viewBox: "0 0 81.3 68.8"
        }, i.h("path", {
            fill: "none",
            "stroke-miterlimit": "15.6",
            "stroke-width": "6.3",
            d: "M3.1 3.1h75v62.5h-75zm18.8 43.8l12.5-12.5-12.5-12.5m18.7 25h18.8"
        })),
        he = () => i.h("svg", {
            viewBox: "0 0 18 14"
        }, i.h("path", {
            d: "M5.5 3.6v6.8L2.1 7l3.4-3.4M7 0L0 7l7 7V0zm4 0v14l7-7-7-7z"
        }));
    class ce extends i.d {
        render(e) {
            return i.h("div", {
                class: "_checkbox_1uftw_1"
            }, e.checked ? e.disabled ? i.h(oe, {
                class: J + " _disabled_1uftw_47"
            }) : i.h(oe, {
                class: J + " _checked_1uftw_39"
            }) : i.h(se, {
                class: J
            }), i.h("input", {
                class: "_real-checkbox_1uftw_13",
                type: "checkbox",
                ...e
            }))
        }
    }
    i.appendCss("._children-exiting_nmxuz_1>*{pointer-events:none}");
    class pe extends i.d {
        static getDerivedStateFromProps(e, t) {
            return !e.children && t.children ? {
                children: e.children,
                outgoingChildren: t.children
            } : e.children !== t.children ? {
                children: e.children,
                outgoingChildren: void 0
            } : null
        }
        async componentDidUpdate(e, t) {
            let i, n;
            if (t.children && !this.state.children) i = this.base.getBoundingClientRect().height, n = 0;
            else {
                if (t.children || !this.state.children) return;
                i = 0, n = this.base.getBoundingClientRect().height
            }
            this.base.style.overflow = "hidden", await C(this.base, {
                duration: 300,
                from: i,
                to: n
            }), this.base.style.height = "", this.base.style.overflow = "", this.setState({
                outgoingChildren: void 0
            })
        }
        render({}, {
            children: e,
            outgoingChildren: t
        }) {
            return i.h("div", {
                class: t ? "_children-exiting_nmxuz_1" : ""
            }, t || e)
        }
    }
    i.appendCss("._select_kqeu1_1{position:relative}._builtin-select_kqeu1_9{background:var(--black);border-radius:4px;font:inherit;padding:7px 25px 7px 10px;-webkit-appearance:none;-moz-appearance:none;border:none;color:#fff;width:100%}._arrow_kqeu1_37{position:absolute;right:8px;top:50%;transform:translateY(-50%);fill:#fff;width:10px;pointer-events:none}._large_kqeu1_57{padding:10px 35px 10px 10px;background:var(--dark-gray)}._large_kqeu1_57 ._arrow_kqeu1_37{right:13px}");
    class de extends i.d {
        render(e) {
            const {
                large: t,
                ...n
            } = e;
            return i.h("div", {
                class: "_select_kqeu1_1"
            }, i.h("select", {
                class: "_builtin-select_kqeu1_9 " + (t ? "_large_kqeu1_57" : ""),
                ...n
            }), i.h("div", {
                class: "_arrow_kqeu1_37"
            }, i.h(ae, null)))
        }
    }
    i.appendCss("._range_ozfiq_1{position:relative;z-index:0;display:grid;grid-template-columns:1fr auto}._label-text_ozfiq_15{color:#fff}._range-wc-container_ozfiq_23{position:relative;z-index:1;grid-row:2/3;grid-column:1/3}._range-wc_ozfiq_23{width:100%}._text-input_ozfiq_45{grid-row:1/2;grid-column:2/3;text-align:right;background:transparent;color:inherit;font:inherit;border:none;padding:2px 5px;box-sizing:border-box;text-decoration:underline;text-decoration-style:dotted;text-decoration-color:var(--main-theme-color);text-underline-position:under;width:54px;position:relative;left:5px}._text-input_ozfiq_45:focus{background:#fff;color:#000}._text-input_ozfiq_45{-moz-appearance:textfield}._text-input_ozfiq_45::-webkit-inner-spin-button,._text-input_ozfiq_45::-webkit-outer-spin-button{-moz-appearance:none;-webkit-appearance:none;margin:0}");
    const ue = "_value-display_wnmd8_119",
        _e = "_touch-active_wnmd8_195";
    i.appendCss('range-input{position:relative;display:flex;height:18px;width:130px;margin:2px;font:inherit;line-height:16px;overflow:visible}range-input[disabled]{filter:grayscale(1)}range-input:before{content:"";display:block;position:absolute;top:8px;left:0;width:100%;height:2px;border-radius:1px;background:linear-gradient(var(--main-theme-color),var(--main-theme-color)) 0/var(--value-percent,0) 100% no-repeat var(--medium-light-gray)}._input_wnmd8_59{position:relative;width:100%;padding:0;margin:0;opacity:0}._thumb_wnmd8_75{pointer-events:none;position:absolute;bottom:3px;left:0;margin-left:-6px;background:var(--main-theme-color);border-radius:50%;width:12px;height:12px}._thumb-wrapper_wnmd8_99{position:absolute;left:6px;right:6px;bottom:0;height:0;overflow:visible;transform:translate(var(--value-percent,0))}._value-display_wnmd8_119{position:absolute;box-sizing:border-box;left:0;bottom:3px;width:32px;height:62px;text-align:center;padding:8px 3px 0;margin:0 0 0 -16px;transform-origin:50% 90%;opacity:.0001;transform:scale(.2);color:#fff;font:inherit;font-size:calc(100% - var(--value-width, 3)/5*0.2em);text-overflow:clip;text-shadow:0 -.5px 0 rgba(0,0,0,.4);transition:all .2s ease;transition-property:opacity,transform;will-change:transform;pointer-events:none;overflow:hidden}._value-display_wnmd8_119>svg{position:absolute;top:0;left:0;width:100%;height:100%;fill:var(--main-theme-color)}._value-display_wnmd8_119>span{position:relative}._touch-active_wnmd8_195+._thumb-wrapper_wnmd8_99 ._value-display_wnmd8_119{opacity:1;transform:scale(1)}._touch-active_wnmd8_195+._thumb-wrapper_wnmd8_99 ._thumb_wnmd8_75{box-shadow:0 1px 3px rgba(0,0,0,.5)}');
    const ge = ["focus", "blur"],
        me = ["input", "change"],
        ve = ["name", "min", "max", "step", "value", "disabled"],
        fe = ["name", "min", "max", "step", "value", "disabled"];
    class be extends HTMLElement {
        constructor() {
            let e;
            super(), this._ignoreChange = !1, this._retargetEvent = e => {
                e.stopImmediatePropagation();
                const t = new Event(e.type, e);
                this.dispatchEvent(t)
            }, this._update = () => {
                if (!this._valueDisplay) return;
                const e = Number(this.value) || 0,
                    t = Number(this.min) || 0,
                    i = 100 * (e - t) / ((Number(this.max) || 100) - t),
                    n = this._getDisplayValue(e);
                this._valueDisplay.textContent = n, this.style.setProperty("--value-percent", i + "%"), this.style.setProperty("--value-width", "" + n.length)
            }, this._input = document.createElement("input"), this._input.type = "range", this._input.className = "_input_wnmd8_59", this.addEventListener("pointerdown", t => {
                if (e) return;
                e = t.pointerId, this._input.classList.add(_e);
                const i = t => {
                    t.pointerId === e && (e = void 0, this._input.classList.remove(_e), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i))
                };
                window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i)
            });
            for (const e of ge) this._input.addEventListener(e, this._retargetEvent, !0);
            for (const e of me) this._input.addEventListener(e, this._update, !0)
        }
        static get observedAttributes() {
            return fe
        }
        connectedCallback() {
            this.contains(this._input) || (this.innerHTML = `<div class="_thumb-wrapper_wnmd8_99"><div class="_thumb_wnmd8_75"></div><div class="${ue}"><svg width="32" height="62"><path d="M27.3 27.3C25 29.6 17 35.8 17 43v3c0 3 2.5 5 3.2 5.8a6 6 0 1 1-8.5 0C12.6 51 15 49 15 46v-3c0-7.2-8-13.4-10.3-15.7A16 16 0 0 1 16 0a16 16 0 0 1 11.3 27.3z"/></svg><span></span></div></div>`, this.insertBefore(this._input, this.firstChild), this._valueDisplay = this.querySelector("." + ue + " > span"), this._update())
        }
        get labelPrecision() {
            return this.getAttribute("label-precision") || ""
        }
        set labelPrecision(e) {
            this.setAttribute("label-precision", e)
        }
        attributeChangedCallback(e, t, i) {
            this._ignoreChange || (null === i ? this._input.removeAttribute(e) : this._input.setAttribute(e, i), this._reflectAttributes(), this._update())
        }
        _getDisplayValue(e) {
            if (e >= 1e4) return (e / 1e3).toFixed(1) + "k";
            const t = Number(this.labelPrecision) || function(e) {
                const t = e.split(".")[1];
                return t ? t.length : 0
            }(this.step) || 0;
            return t ? e.toFixed(t) : Math.round(e).toString()
        }
        _reflectAttributes() {
            this._ignoreChange = !0;
            for (const e of fe) this._input.hasAttribute(e) ? this.setAttribute(e, this._input.getAttribute(e)) : this.removeAttribute(e);
            this._ignoreChange = !1
        }
    }
    for (const e of ve) Object.defineProperty(be.prototype, e, {
        get() {
            return this._input[e]
        },
        set(t) {
            this._input[e] = t, this._reflectAttributes(), this._update()
        }
    });
    customElements.define("range-input", be);
    class Ae extends i.d {
        constructor() {
            super(...arguments), this.onTextInput = e => {
                const t = e.target;
                t.value.trim() && (this.rangeWc.value = t.value, this.rangeWc.dispatchEvent(new InputEvent("input", {
                    bubbles: e.bubbles
                })))
            }, this.onTextFocus = () => {
                this.setState({
                    textFocused: !0
                })
            }, this.onTextBlur = () => {
                this.setState({
                    textFocused: !1
                })
            }
        }
        render(e, t) {
            const {
                children: n,
                ...s
            } = e, {
                value: o,
                min: a,
                max: r,
                step: l
            } = e, h = t.textFocused ? this.inputEl.value : o;
            return i.h("label", {
                class: "_range_ozfiq_1"
            }, i.h("span", {
                class: "_label-text_ozfiq_15"
            }, n), i.h("div", {
                class: "_range-wc-container_ozfiq_23"
            }, i.h("range-input", {
                ref: i.linkRef(this, "rangeWc"),
                class: "_range-wc_ozfiq_23",
                ...s
            })), i.h("input", {
                ref: i.linkRef(this, "inputEl"),
                type: "number",
                class: "_text-input_ozfiq_45",
                value: h,
                min: a,
                max: r,
                step: l,
                onInput: this.onTextInput,
                onFocus: this.onTextFocus,
                onBlur: this.onTextBlur
            }))
        }
    }
    var we, xe = (function(e, t) {
        e.exports = function(e, t, i, n, s) {
            for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : s;
            return e === s ? i : e
        }
    }(we = {
        path: void 0,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }()
        }
    }), we.exports);

    function Ce(e, t, i) {
        var n = t.split("."),
            s = e.__lsc || (e.__lsc = {});
        return s[t + i] || (s[t + i] = function(t) {
            for (var s = t && t.target || this, o = {}, a = o, r = "string" == typeof i ? xe(t, i) : s && s.nodeName ? s.type.match(/^che|rad/) ? s.checked : s.value : t, l = 0; l < n.length - 1; l++) a = a[n[l]] || (a[n[l]] = !l && e.state[n[l]] || {});
            a[n[l]] = r, e.setState(o)
        })
    }
    i.appendCss("._checkbox_18gq6_1{display:inline-block;position:relative}._arrow_18gq6_11{width:10px;height:10px;fill:var(--white);transition:transform .2s ease;transform:rotate(-90deg)}._arrow_18gq6_11 svg{width:100%;height:100%;display:block}._real-checkbox_18gq6_39{top:0;position:absolute;opacity:0;pointer-events:none}._real-checkbox_18gq6_39:checked+._arrow_18gq6_11{transform:none}");
    class ye extends i.d {
        render(e) {
            return i.h("div", {
                class: "_checkbox_18gq6_1"
            }, i.h("input", {
                class: "_real-checkbox_18gq6_39",
                type: "checkbox",
                ...e
            }), i.h("div", {
                class: "_arrow_18gq6_11"
            }, i.h(ae, null)))
        }
    }
    class ze extends i.d {
        constructor() {
            super(...arguments), this.state = {
                showAdvanced: !1
            }, this._inputChangeCallbacks = new Map, this._inputChange = (e, t) => (this._inputChangeCallbacks.has(e) || this._inputChangeCallbacks.set(e, i => {
                const n = i.target,
                    s = "boolean" === t ? "checked" in n ? n.checked : !!n.value : "number" === t ? Number(n.value) : n.value,
                    o = {
                        [e]: s
                    },
                    a = {
                        ...this.state,
                        ...o
                    },
                    r = {
                        cqLevel: a.lossless ? 0 : 63 - a.quality,
                        cqAlphaLevel: a.lossless || !a.separateAlpha ? -1 : 63 - a.alphaQuality,
                        subsample: a.lossless ? 3 : a.subsample,
                        tileColsLog2: a.tileCols,
                        tileRowsLog2: a.tileRows,
                        speed: 10 - a.effort,
                        chromaDeltaQ: a.chromaDeltaQ,
                        sharpness: a.sharpness,
                        denoiseLevel: a.denoiseLevel,
                        tune: a.tune
                    };
                o.options = r, this.setState(o), this.props.onChange(r)
            }), this._inputChangeCallbacks.get(e))
        }
        static getDerivedStateFromProps(e, t) {
            if (t.options && u(t.options, e.options)) return null;
            const {
                options: i
            } = e, n = 0 === i.cqLevel && i.cqAlphaLevel <= 0 && 3 == i.subsample, s = -1 !== i.cqAlphaLevel;
            return {
                options: i,
                lossless: n,
                quality: 63 - (n ? S.cqLevel : i.cqLevel),
                separateAlpha: s,
                alphaQuality: 63 - (s ? i.cqAlphaLevel : S.cqLevel),
                subsample: 0 === i.subsample || n ? S.subsample : i.subsample,
                tileRows: i.tileRowsLog2,
                tileCols: i.tileColsLog2,
                effort: 10 - i.speed,
                chromaDeltaQ: i.chromaDeltaQ,
                sharpness: i.sharpness,
                denoiseLevel: i.denoiseLevel,
                tune: i.tune
            }
        }
        render(e, {
            effort: t,
            lossless: n,
            alphaQuality: s,
            separateAlpha: o,
            quality: a,
            showAdvanced: r,
            subsample: l,
            tileCols: h,
            tileRows: c,
            chromaDeltaQ: p,
            sharpness: d,
            denoiseLevel: u,
            tune: _
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h("label", {
                class: U
            }, "ഗുണനഷ്ടമില്ലാത്ത", i.h(ce, {
                checked: n,
                onChange: this._inputChange("lossless", "boolean")
            })), i.h(pe, null, !n && i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "63",
                value: a,
                onInput: this._inputChange("quality", "number")
            }, "ഗുണമേന്മ:"))), i.h("label", {
                class: Q
            }, i.h(ye, {
                checked: r,
                onChange: Ce(this, "showAdvanced")
            }), "വിപുലമായ ക്രമീകരണങ്ങൾ"), i.h(pe, null, r && i.h("div", null, i.h(pe, null, !n && i.h("div", null, i.h("label", {
                class: V
            }, "Subsample chroma:", i.h(de, {
                value: l,
                onChange: this._inputChange("subsample", "number")
            }, i.h("option", {
                value: "1"
            }, "Half"), i.h("option", {
                value: "3"
            }, "Off"))), i.h("label", {
                class: U
            }, "Separate alpha quality", i.h(ce, {
                checked: o,
                onChange: this._inputChange("separateAlpha", "boolean")
            })), i.h(pe, null, o && i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "63",
                value: s,
                onInput: this._inputChange("alphaQuality", "number")
            }, "Alpha quality:"))), i.h("label", {
                class: U
            }, "Extra chroma compression", i.h(ce, {
                checked: p,
                onChange: this._inputChange("chromaDeltaQ", "boolean")
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "7",
                value: d,
                onInput: this._inputChange("sharpness", "number")
            }, "Sharpness:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "50",
                value: u,
                onInput: this._inputChange("denoiseLevel", "number")
            }, "Noise synthesis:")), i.h("label", {
                class: V
            }, "Tuning:", i.h(de, {
                value: _,
                onChange: this._inputChange("tune", "number")
            }, i.h("option", {
                value: 0
            }, "Auto"), i.h("option", {
                value: 1
            }, "PSNR"), i.h("option", {
                value: 2
            }, "SSIM"))))), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "6",
                value: c,
                onInput: this._inputChange("tileRows", "number")
            }, "Log2 of tile rows:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "6",
                value: h,
                onInput: this._inputChange("tileCols", "number")
            }, "Log2 of tile cols:")))), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "10",
                value: t,
                onInput: this._inputChange("effort", "number")
            }, "Effort:")))
        }
    }
    var ke = Object.freeze({
        __proto__: null,
        encode: (e, t, i, n) => t.avifEncode(e, i, n),
        Options: ze
    });
    var Se = Object.freeze({
        __proto__: null,
        featureTest: () => async function(e) {
            try {
                const t = await r(new ImageData(1, 1), e);
                return !!t && t.type === e
            } catch (e) {
                return !1
            }
        }(L),
        encode: (e, t, i, n) => r(i, L)
    });
    const Ee = function(e = {}) {
        const {
            min: t = 0,
            max: n = 100,
            step: s = 1
        } = e;
        class o extends i.d {
            constructor() {
                super(...arguments), this.onChange = e => {
                    const t = e.currentTarget;
                    this.props.onChange({
                        quality: Number(t.value)
                    })
                }
            }
            render({
                options: e
            }) {
                return i.h("div", {
                    class: Y
                }, i.h("div", {
                    class: N
                }, i.h(Ae, {
                    name: "quality",
                    min: t,
                    max: n,
                    step: s || "any",
                    value: e.quality,
                    onInput: this.onChange
                }, "ഗുണമേന്മ:")))
            }
        }
        return o
    }({
        min: 0,
        max: 1,
        step: .01
    });
    var Le = Object.freeze({
        __proto__: null,
        encode: (e, t, i, n) => r(i, P, n.quality),
        Options: Ee
    });
    var qe = Object.freeze({
        __proto__: null,
        encode: (e, t, i, n) => r(i, M)
    });
    class Pe extends i.d {
        constructor() {
            super(...arguments), this.state = {
                lossless: !1
            }, this._inputChangeCallbacks = new Map, this._inputChange = (e, t) => (this._inputChangeCallbacks.has(e) || this._inputChangeCallbacks.set(e, i => {
                const n = i.target,
                    s = "boolean" === t ? "checked" in n ? n.checked : !!n.value : Number(n.value),
                    o = {
                        [e]: s
                    },
                    a = {
                        ...this.state,
                        ...o
                    },
                    r = {
                        effort: a.effort,
                        quality: a.lossless ? 100 : a.quality,
                        progressive: a.progressive,
                        epf: a.autoEdgePreservingFilter ? -1 : a.edgePreservingFilter,
                        lossyPalette: !!a.lossless && a.slightLoss,
                        decodingSpeedTier: a.decodingSpeedTier,
                        photonNoiseIso: a.photonNoiseIso,
                        lossyModular: a.quality < 7 || a.alternativeLossy
                    };
                o.options = r, this.setState(o), this.props.onChange(r)
            }), this._inputChangeCallbacks.get(e))
        }
        static getDerivedStateFromProps(e, t) {
            if (t.options && u(t.options, e.options)) return null;
            const {
                options: i
            } = e;
            return {
                options: i,
                effort: i.effort,
                quality: i.quality,
                progressive: i.progressive,
                edgePreservingFilter: -1 === i.epf ? 2 : i.epf,
                lossless: 100 === i.quality,
                slightLoss: i.lossyPalette,
                autoEdgePreservingFilter: -1 === i.epf,
                decodingSpeedTier: i.decodingSpeedTier,
                photonNoiseIso: i.photonNoiseIso,
                alternativeLossy: i.lossyModular
            }
        }
        render({}, {
            effort: e,
            quality: t,
            progressive: n,
            edgePreservingFilter: s,
            lossless: o,
            slightLoss: a,
            autoEdgePreservingFilter: r,
            decodingSpeedTier: l,
            photonNoiseIso: h,
            alternativeLossy: c
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h("label", {
                class: U
            }, "ഗുണനഷ്ടമില്ലാത്ത", i.h(ce, {
                name: "lossless",
                checked: o,
                onChange: this._inputChange("lossless", "boolean")
            })), i.h(pe, null, o && i.h("label", {
                class: U
            }, "Slight loss", i.h(ce, {
                name: "slightLoss",
                checked: a,
                onChange: this._inputChange("slightLoss", "boolean")
            }))), i.h(pe, null, !o && i.h("div", null, i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "99.9",
                step: "0.1",
                value: t,
                onInput: this._inputChange("quality", "number")
            }, "ഗുണമേന്മ:")), i.h("label", {
                class: U
            }, "Alternative lossy mode", i.h(ce, {
                checked: t < 7 || c,
                disabled: t < 7,
                onChange: this._inputChange("alternativeLossy", "boolean")
            })), i.h("label", {
                class: U
            }, "Auto edge filter", i.h(ce, {
                checked: r,
                onChange: this._inputChange("autoEdgePreservingFilter", "boolean")
            })), i.h(pe, null, !r && i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "3",
                value: s,
                onInput: this._inputChange("edgePreservingFilter", "number")
            }, "Edge preserving filter:"))), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "4",
                value: l,
                onInput: this._inputChange("decodingSpeedTier", "number")
            }, "Optimise for decoding speed (worse compression):")), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "50000",
                step: "100",
                value: h,
                onInput: this._inputChange("photonNoiseIso", "number")
            }, "Noise equivalent to ISO:")))), i.h("label", {
                class: U
            }, "Progressive rendering", i.h(ce, {
                name: "progressive",
                checked: n,
                onChange: this._inputChange("progressive", "boolean")
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "1",
                max: "9",
                value: e,
                onInput: this._inputChange("effort", "number")
            }, "Effort:")))
        }
    }
    var Ie = Object.freeze({
        __proto__: null,
        encode: (e, t, i, n) => t.jxlEncode(e, i, n),
        Options: Pe
    });
    class Me extends i.d {
        constructor() {
            super(...arguments), this.state = {
                showAdvanced: !1
            }, this.onChange = e => {
                const t = e.currentTarget.closest("form"),
                    {
                        options: i
                    } = this.props,
                    n = {
                        ...this.props.options,
                        baseline: w(t.baseline, i.baseline),
                        progressive: w(t.progressive, i.progressive),
                        optimize_coding: w(t.optimize_coding, i.optimize_coding),
                        trellis_multipass: w(t.trellis_multipass, i.trellis_multipass),
                        trellis_opt_zero: w(t.trellis_opt_zero, i.trellis_opt_zero),
                        trellis_opt_table: w(t.trellis_opt_table, i.trellis_opt_table),
                        auto_subsample: w(t.auto_subsample, i.auto_subsample),
                        separate_chroma_quality: w(t.separate_chroma_quality, i.separate_chroma_quality),
                        quality: b(t.quality, i.quality),
                        chroma_quality: b(t.chroma_quality, i.chroma_quality),
                        chroma_subsample: b(t.chroma_subsample, i.chroma_subsample),
                        smoothing: b(t.smoothing, i.smoothing),
                        color_space: b(t.color_space, i.color_space),
                        quant_table: b(t.quant_table, i.quant_table),
                        trellis_loops: b(t.trellis_loops, i.trellis_loops)
                    };
                this.props.onChange(n)
            }
        }
        render({
            options: e
        }, {
            showAdvanced: t
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "quality",
                min: "0",
                max: "100",
                value: e.quality,
                onInput: this.onChange
            }, "ഗുണമേന്മ:")), i.h("label", {
                class: Q
            }, i.h(ye, {
                checked: t,
                onChange: Ce(this, "showAdvanced")
            }), "വിപുലമായ ക്രമീകരണങ്ങൾ"), i.h(pe, null, t ? i.h("div", null, i.h("label", {
                class: V
            }, "ചാനലുകൾ:", i.h(de, {
                name: "color_space",
                value: e.color_space,
                onChange: this.onChange
            }, i.h("option", {
                value: 1
            }, "Grayscale"), i.h("option", {
                value: 2
            }, "RGB"), i.h("option", {
                value: 3
            }, "YCbCr"))), i.h(pe, null, 3 === e.color_space ? i.h("div", null, i.h("label", {
                class: U
            }, "ഓട്ടോ സബ്സാമ്പിൾ ക്രോമ", i.h(ce, {
                name: "auto_subsample",
                checked: e.auto_subsample,
                onChange: this.onChange
            })), i.h(pe, null, e.auto_subsample ? null : i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "chroma_subsample",
                min: "1",
                max: "4",
                value: e.chroma_subsample,
                onInput: this.onChange
            }, "സബ്സാമ്പിൾ ക്രോമ:"))), i.h("label", {
                class: U
            }, "ക്രോമ ഗുണം വേർതിരിക്കുക", i.h(ce, {
                name: "separate_chroma_quality",
                checked: e.separate_chroma_quality,
                onChange: this.onChange
            })), i.h(pe, null, e.separate_chroma_quality ? i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "chroma_quality",
                min: "0",
                max: "100",
                value: e.chroma_quality,
                onInput: this.onChange
            }, "ക്രോമ ഗുണം:")) : null)) : null), i.h("label", {
                class: U
            }, "പോയിൻ്റ്‌ലെസ് സ്പെക് കമ്പ്ലൈൻസ്", i.h(ce, {
                name: "baseline",
                checked: e.baseline,
                onChange: this.onChange
            })), i.h(pe, null, e.baseline ? null : i.h("label", {
                class: U
            }, "പ്രോഗ്രസീവ് റെൻഡറിങ്", i.h(ce, {
                name: "progressive",
                checked: e.progressive,
                onChange: this.onChange
            }))), i.h(pe, null, e.baseline ? i.h("label", {
                class: U
            }, "ഹഫ്മൻ പട്ടിക ഒപ്റ്റിമൈസ് ചെയ്യുക", i.h(ce, {
                name: "optimize_coding",
                checked: e.optimize_coding,
                onChange: this.onChange
            })) : null), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "smoothing",
                min: "0",
                max: "100",
                value: e.smoothing,
                onInput: this.onChange
            }, "സ്മൂതിങ്:")), i.h("label", {
                class: V
            }, "ക്വാണ്ടിസേഷൻ:", i.h(de, {
                name: "quant_table",
                value: e.quant_table,
                onChange: this.onChange
            }, i.h("option", {
                value: "0"
            }, "JPEG Annex K"), i.h("option", {
                value: "1"
            }, "Flat"), i.h("option", {
                value: "2"
            }, "MSSIM-tuned Kodak"), i.h("option", {
                value: "3"
            }, "ImageMagick"), i.h("option", {
                value: "4"
            }, "PSNR-HVS-M-tuned Kodak"), i.h("option", {
                value: "5"
            }, "Klein et al"), i.h("option", {
                value: "6"
            }, "Watson et al"), i.h("option", {
                value: "7"
            }, "Ahumada et al"), i.h("option", {
                value: "8"
            }, "Peterson et al"))), i.h("label", {
                class: U
            }, "ട്രെല്ലിസ് മൾട്ടിപാസ്", i.h(ce, {
                name: "trellis_multipass",
                checked: e.trellis_multipass,
                onChange: this.onChange
            })), i.h(pe, null, e.trellis_multipass ? i.h("label", {
                class: U
            }, "Optimize zero block runs", i.h(ce, {
                name: "trellis_opt_zero",
                checked: e.trellis_opt_zero,
                onChange: this.onChange
            })) : null), i.h("label", {
                class: U
            }, "ട്രെല്ലിസ് ക്വാണ്ടിസേഷനു ശേഷം ഒപ്റ്റിമൈസ് ചെയ്യുക", i.h(ce, {
                name: "trellis_opt_table",
                checked: e.trellis_opt_table,
                onChange: this.onChange
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "trellis_loops",
                min: "1",
                max: "50",
                value: e.trellis_loops,
                onInput: this.onChange
            }, "ട്രെല്ലിസ് ക്വാണ്ടിസേഷൻ പാസ്സുകൾ:"))) : null))
        }
    }
    var Oe = Object.freeze({
        __proto__: null,
        encode: function(e, t, i, n) {
            return t.mozjpegEncode(e, i, n)
        },
        Options: Me
    });
    class Be extends i.d {
        constructor() {
            super(...arguments), this.onChange = e => {
                const t = e.currentTarget.closest("form"),
                    i = {
                        level: b(t.level),
                        interlace: w(t.interlace)
                    };
                this.props.onChange(i)
            }
        }
        render({
            options: e
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h("label", {
                class: U
            }, "Interlace", i.h(ce, {
                name: "interlace",
                checked: e.interlace,
                onChange: this.onChange
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "level",
                min: "0",
                max: "3",
                step: "1",
                value: e.level,
                onInput: this.onChange
            }, "Effort:")))
        }
    }
    var Te = Object.freeze({
        __proto__: null,
        encode: async function(e, t, i, n) {
            const s = await k(e, r(i, "image/png")),
                o = await k(e, g(s));
            return t.oxipngEncode(e, o, n)
        },
        Options: Be
    });
    const Re = [
        [0, 0],
        [1, 20],
        [2, 25],
        [3, 30],
        [3, 50],
        [4, 50],
        [4, 75],
        [4, 90],
        [5, 90],
        [6, 100]
    ];

    function De(e, t) {
        const i = Re.findIndex(([i, n]) => i === t && n === e);
        return -1 !== i ? i : 6
    }
    class He extends i.d {
        constructor() {
            super(...arguments), this.state = {
                showAdvanced: !1
            }, this.onChange = e => {
                const t = e.currentTarget.closest("form"),
                    i = A(t.lossless),
                    {
                        options: n
                    } = this.props,
                    s = b(t.lossless_preset, De(n.quality, n.method)),
                    o = {
                        ...n,
                        lossless: i,
                        quality: i ? Re[s][1] : b(t.quality, n.quality),
                        method: i ? Re[s][0] : b(t.method_input, n.method),
                        image_hint: A(t.image_hint, n.image_hint) ? 3 : 0,
                        exact: A(t.exact, n.exact),
                        alpha_compression: A(t.alpha_compression, n.alpha_compression),
                        autofilter: A(t.autofilter, n.autofilter),
                        filter_type: A(t.filter_type, n.filter_type),
                        use_sharp_yuv: A(t.use_sharp_yuv, n.use_sharp_yuv),
                        near_lossless: 100 - b(t.near_lossless, 100 - n.near_lossless),
                        alpha_quality: b(t.alpha_quality, n.alpha_quality),
                        alpha_filtering: b(t.alpha_filtering, n.alpha_filtering),
                        sns_strength: b(t.sns_strength, n.sns_strength),
                        filter_strength: b(t.filter_strength, n.filter_strength),
                        filter_sharpness: 7 - b(t.filter_sharpness, 7 - n.filter_sharpness),
                        pass: b(t.pass, n.pass),
                        preprocessing: b(t.preprocessing, n.preprocessing),
                        segments: b(t.segments, n.segments),
                        partitions: b(t.partitions, n.partitions)
                    };
                this.props.onChange(o)
            }
        }
        _losslessSpecificOptions(e) {
            return i.h("div", {
                key: "lossless"
            }, i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "lossless_preset",
                min: "0",
                max: "9",
                value: De(e.quality, e.method),
                onInput: this.onChange
            }, "Effort:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "near_lossless",
                min: "0",
                max: "100",
                value: "" + (100 - e.near_lossless),
                onInput: this.onChange
            }, "Slight loss:")), i.h("label", {
                class: U
            }, "Discrete tone image", i.h(ce, {
                name: "image_hint",
                checked: 3 === e.image_hint,
                onChange: this.onChange
            })))
        }
        _lossySpecificOptions(e) {
            const {
                showAdvanced: t
            } = this.state;
            return i.h("div", {
                key: "lossy"
            }, i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "method_input",
                min: "0",
                max: "6",
                value: e.method,
                onInput: this.onChange
            }, "Effort:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "quality",
                min: "0",
                max: "100",
                step: "0.1",
                value: e.quality,
                onInput: this.onChange
            }, "ഗുണമേന്മ:")), i.h("label", {
                class: Q
            }, i.h(ye, {
                checked: t,
                onChange: Ce(this, "showAdvanced")
            }), "വിപുലമായ ക്രമീകരണങ്ങൾ"), i.h(pe, null, t ? i.h("div", null, i.h("label", {
                class: U
            }, "Compress alpha", i.h(ce, {
                name: "alpha_compression",
                checked: !!e.alpha_compression,
                onChange: this.onChange
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "alpha_quality",
                min: "0",
                max: "100",
                value: e.alpha_quality,
                onInput: this.onChange
            }, "Alpha quality:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "alpha_filtering",
                min: "0",
                max: "2",
                value: e.alpha_filtering,
                onInput: this.onChange
            }, "Alpha filter quality:")), i.h("label", {
                class: U
            }, "Auto adjust filter strength", i.h(ce, {
                name: "autofilter",
                checked: !!e.autofilter,
                onChange: this.onChange
            })), i.h(pe, null, e.autofilter ? null : i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "filter_strength",
                min: "0",
                max: "100",
                value: e.filter_strength,
                onInput: this.onChange
            }, "Filter strength:"))), i.h("label", {
                class: U
            }, "Strong filter", i.h(ce, {
                name: "filter_type",
                checked: !!e.filter_type,
                onChange: this.onChange
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "filter_sharpness",
                min: "0",
                max: "7",
                value: 7 - e.filter_sharpness,
                onInput: this.onChange
            }, "Filter sharpness:")), i.h("label", {
                class: U
            }, "Sharp RGB→YUV conversion", i.h(ce, {
                name: "use_sharp_yuv",
                checked: !!e.use_sharp_yuv,
                onChange: this.onChange
            })), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "pass",
                min: "1",
                max: "10",
                value: e.pass,
                onInput: this.onChange
            }, "Passes:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "sns_strength",
                min: "0",
                max: "100",
                value: e.sns_strength,
                onInput: this.onChange
            }, "Spatial noise shaping:")), i.h("label", {
                class: V
            }, "Preprocess:", i.h(de, {
                name: "preprocessing",
                value: e.preprocessing,
                onChange: this.onChange
            }, i.h("option", {
                value: "0"
            }, "None"), i.h("option", {
                value: "1"
            }, "Segment smooth"), i.h("option", {
                value: "2"
            }, "Pseudo-random dithering"))), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "segments",
                min: "1",
                max: "4",
                value: e.segments,
                onInput: this.onChange
            }, "Segments:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "partitions",
                min: "0",
                max: "3",
                value: e.partitions,
                onInput: this.onChange
            }, "Partitions:"))) : null))
        }
        render({
            options: e
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h("label", {
                class: U
            }, "ഗുണനഷ്ടമില്ലാത്ത", i.h(ce, {
                name: "lossless",
                checked: !!e.lossless,
                onChange: this.onChange
            })), e.lossless ? this._losslessSpecificOptions(e) : this._lossySpecificOptions(e), i.h("label", {
                class: U
            }, "ട്രാൻപരെന്റ് ഡാറ്റ സൂക്ഷിക്കുക", i.h(ce, {
                name: "exact",
                checked: !!e.exact,
                onChange: this.onChange
            })))
        }
    }
    var Fe = Object.freeze({
        __proto__: null,
        encode: (e, t, i, n) => t.webpEncode(e, i, n),
        Options: He
    });
    class je extends i.d {
        constructor() {
            super(...arguments), this.state = {
                lossless: !1,
                slightLoss: 0,
                quality: H.quality,
                showAdvanced: !1
            }, this._inputChangeCallbacks = new Map, this._inputChange = (e, t) => (this._inputChangeCallbacks.has(e) || this._inputChangeCallbacks.set(e, i => {
                const n = i.target,
                    s = "boolean" === t ? "checked" in n ? n.checked : !!n.value : Number(n.value),
                    o = {
                        [e]: s
                    },
                    a = {
                        ...this.state,
                        ...o
                    },
                    r = {
                        effort: a.effort,
                        quality: a.lossless ? 100 - a.slightLoss : a.quality,
                        alpha_quality: a.separateAlpha ? a.alphaQuality : a.quality,
                        pass: a.passes,
                        sns: a.sns,
                        uv_mode: a.uvMode,
                        csp_type: a.colorSpace,
                        error_diffusion: a.errorDiffusion,
                        use_random_matrix: a.useRandomMatrix
                    };
                o.options = r, this.setState(o), this.props.onChange(r)
            }), this._inputChangeCallbacks.get(e))
        }
        static getDerivedStateFromProps(e, t) {
            if (t.options && u(t.options, e.options)) return null;
            const {
                options: i
            } = e, n = {
                options: i,
                effort: i.effort,
                alphaQuality: i.alpha_quality,
                passes: i.pass,
                sns: i.sns,
                uvMode: i.uv_mode,
                colorSpace: i.csp_type,
                errorDiffusion: i.error_diffusion,
                useRandomMatrix: i.use_random_matrix,
                separateAlpha: i.quality !== i.alpha_quality
            };
            return i.quality > 95 ? (n.lossless = !0, n.slightLoss = 100 - i.quality) : (n.quality = i.quality, n.lossless = !1), n
        }
        render({}, {
            effort: e,
            alphaQuality: t,
            passes: n,
            quality: s,
            sns: o,
            uvMode: a,
            lossless: r,
            slightLoss: l,
            colorSpace: h,
            errorDiffusion: c,
            useRandomMatrix: p,
            separateAlpha: d,
            showAdvanced: u
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h("label", {
                class: U
            }, "ഗുണനഷ്ടമില്ലാത്ത", i.h(ce, {
                checked: r,
                onChange: this._inputChange("lossless", "boolean")
            })), i.h(pe, null, r && i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "5",
                step: "0.1",
                value: l,
                onInput: this._inputChange("slightLoss", "number")
            }, "Slight loss:"))), i.h(pe, null, !r && i.h("div", null, i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "95",
                step: "0.1",
                value: s,
                onInput: this._inputChange("quality", "number")
            }, "ഗുണമേന്മ:")), i.h("label", {
                class: U
            }, "Separate alpha quality", i.h(ce, {
                checked: d,
                onChange: this._inputChange("separateAlpha", "boolean")
            })), i.h(pe, null, d && i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "100",
                step: "1",
                value: t,
                onInput: this._inputChange("alphaQuality", "number")
            }, "Alpha Quality:"))), i.h("label", {
                class: Q
            }, i.h(ye, {
                checked: u,
                onChange: Ce(this, "showAdvanced")
            }), "വിപുലമായ ക്രമീകരണങ്ങൾ"), i.h(pe, null, u && i.h("div", null, i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "1",
                max: "10",
                step: "1",
                value: n,
                onInput: this._inputChange("passes", "number")
            }, "Passes:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "100",
                step: "1",
                value: o,
                onInput: this._inputChange("sns", "number")
            }, "Spatial noise shaping:")), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "100",
                step: "1",
                value: c,
                onInput: this._inputChange("errorDiffusion", "number")
            }, "Error diffusion:")), i.h("label", {
                class: V
            }, "Subsample chroma:", i.h(de, {
                value: a,
                onInput: this._inputChange("uvMode", "number")
            }, i.h("option", {
                value: 3
            }, "Auto"), i.h("option", {
                value: 0
            }, "Vary"), i.h("option", {
                value: 1
            }, "Half"), i.h("option", {
                value: 2
            }, "Off"))), i.h("label", {
                class: V
            }, "Color space:", i.h(de, {
                value: h,
                onInput: this._inputChange("colorSpace", "number")
            }, i.h("option", {
                value: 0
            }, "YCoCg"), i.h("option", {
                value: 1
            }, "YCbCr"), i.h("option", {
                value: 3
            }, "YIQ"))), i.h("label", {
                class: U
            }, "Random matrix", i.h(ce, {
                checked: p,
                onChange: this._inputChange("useRandomMatrix", "boolean")
            })))))), i.h("div", {
                class: N
            }, i.h(Ae, {
                min: "0",
                max: "9",
                step: "1",
                value: e,
                onInput: this._inputChange("effort", "number")
            }, "Effort:")))
        }
    }
    const Ve = ["triangle", "catrom", "mitchell", "lanczos3", "hqx"],
        Ue = {
            avif: {
                meta: E,
                ...ke
            },
            browserGIF: {
                meta: q,
                ...Se
            },
            browserJPEG: {
                meta: I,
                ...Le
            },
            browserPNG: {
                meta: O,
                ...qe
            },
            jxl: {
                meta: B,
                ...Ie
            },
            mozJPEG: {
                meta: T,
                ...Oe
            },
            oxiPNG: {
                meta: R,
                ...Te
            },
            webP: {
                meta: D,
                ...Fe
            },
            wp2: {
                meta: F,
                ...Object.freeze({
                    __proto__: null,
                    encode: (e, t, i, n) => t.wp2Encode(e, i, n),
                    Options: je
                })
            }
        },
        Qe = {
            quantize: {
                enabled: !1,
                zx: 0,
                maxNumColors: 256,
                dither: 1
            },
            resize: {
                enabled: !1,
                width: 1,
                height: 1,
                method: "lanczos3",
                fitMethod: "stretch",
                premultiply: !0,
                linearRGB: !0
            }
        },
        Ne = {
            rotate: {
                rotate: 0
            }
        };
    class Ge {
        constructor(e) {
            this.id = -1, this.nativePointer = e, this.pageX = e.pageX, this.pageY = e.pageY, this.clientX = e.clientX, this.clientY = e.clientY, self.Touch && e instanceof Touch ? this.id = e.identifier : Ye(e) && (this.id = e.pointerId)
        }
        getCoalesced() {
            if ("getCoalescedEvents" in this.nativePointer) {
                const e = this.nativePointer.getCoalescedEvents().map(e => new Ge(e));
                if (e.length > 0) return e
            }
            return [this]
        }
    }
    const Ye = e => "pointerId" in e,
        We = e => "changedTouches" in e,
        Je = () => {};
    class Xe {
        constructor(e, {
            start: t = (() => !0),
            move: i = Je,
            end: n = Je,
            rawUpdates: s = !1,
            avoidPointerEvents: o = !1
        } = {}) {
            this._element = e, this.startPointers = [], this.currentPointers = [], this._excludeFromButtonsCheck = new Set, this._pointerStart = e => {
                if (Ye(e) && 0 === e.buttons) this._excludeFromButtonsCheck.add(e.pointerId);
                else if (!(1 & e.buttons)) return;
                const t = new Ge(e);
                if (!this.currentPointers.some(e => e.id === t.id) && this._triggerPointerStart(t, e))
                    if (Ye(e)) {
                        (e.target && "setPointerCapture" in e.target ? e.target : this._element).setPointerCapture(e.pointerId), this._element.addEventListener(this._rawUpdates ? "pointerrawupdate" : "pointermove", this._move), this._element.addEventListener("pointerup", this._pointerEnd), this._element.addEventListener("pointercancel", this._pointerEnd)
                    } else window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd)
            }, this._touchStart = e => {
                for (const t of Array.from(e.changedTouches)) this._triggerPointerStart(new Ge(t), e)
            }, this._move = e => {
                if (!(We(e) || Ye(e) && this._excludeFromButtonsCheck.has(e.pointerId) || 0 !== e.buttons)) return void this._pointerEnd(e);
                const t = this.currentPointers.slice(),
                    i = We(e) ? Array.from(e.changedTouches).map(e => new Ge(e)) : [new Ge(e)],
                    n = [];
                for (const e of i) {
                    const t = this.currentPointers.findIndex(t => t.id === e.id); - 1 !== t && (n.push(e), this.currentPointers[t] = e)
                }
                0 !== n.length && this._moveCallback(t, n, e)
            }, this._triggerPointerEnd = (e, t) => {
                if (!We(t) && 1 & t.buttons) return !1;
                const i = this.currentPointers.findIndex(t => t.id === e.id);
                if (-1 === i) return !1;
                this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this._excludeFromButtonsCheck.delete(e.id);
                const n = !("mouseup" === t.type || "touchend" === t.type || "pointerup" === t.type);
                return this._endCallback(e, t, n), !0
            }, this._pointerEnd = e => {
                if (this._triggerPointerEnd(new Ge(e), e))
                    if (Ye(e)) {
                        if (this.currentPointers.length) return;
                        this._element.removeEventListener(this._rawUpdates ? "pointerrawupdate" : "pointermove", this._move), this._element.removeEventListener("pointerup", this._pointerEnd), this._element.removeEventListener("pointercancel", this._pointerEnd)
                    } else window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd)
            }, this._touchEnd = e => {
                for (const t of Array.from(e.changedTouches)) this._triggerPointerEnd(new Ge(t), e)
            }, this._startCallback = t, this._moveCallback = i, this._endCallback = n, this._rawUpdates = s && "onpointerrawupdate" in window, self.PointerEvent && !o ? this._element.addEventListener("pointerdown", this._pointerStart) : (this._element.addEventListener("mousedown", this._pointerStart), this._element.addEventListener("touchstart", this._touchStart), this._element.addEventListener("touchmove", this._move), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd))
        }
        stop() {
            this._element.removeEventListener("pointerdown", this._pointerStart), this._element.removeEventListener("mousedown", this._pointerStart), this._element.removeEventListener("touchstart", this._touchStart), this._element.removeEventListener("touchmove", this._move), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), this._element.removeEventListener(this._rawUpdates ? "pointerrawupdate" : "pointermove", this._move), this._element.removeEventListener("pointerup", this._pointerEnd), this._element.removeEventListener("pointercancel", this._pointerEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd)
        }
        _triggerPointerStart(e, t) {
            return !!this._startCallback(e, t) && (this.currentPointers.push(e), this.startPointers.push(e), !0)
        }
    }

    function Ze(e, t) {
        return t ? Math.sqrt((t.clientX - e.clientX) ** 2 + (t.clientY - e.clientY) ** 2) : 0
    }

    function Ke(e, t) {
        return t ? {
            clientX: (e.clientX + t.clientX) / 2,
            clientY: (e.clientY + t.clientY) / 2
        } : e
    }

    function $e(e, t) {
        return "number" == typeof e ? e : e.trimRight().endsWith("%") ? t * parseFloat(e) / 100 : parseFloat(e)
    }
    let et;

    function tt() {
        return et || (et = document.createElementNS("http://www.w3.org/2000/svg", "svg"))
    }

    function it() {
        return tt().createSVGMatrix()
    }

    function nt() {
        return tt().createSVGPoint()
    }
    i.appendCss("pinch-zoom{display:block;overflow:hidden;touch-action:none;--scale:1;--x:0;--y:0}pinch-zoom>*{transform:translate(var(--x),var(--y)) scale(var(--scale));transform-origin:0 0;will-change:transform}");
    class st extends HTMLElement {
        constructor() {
            super(), this._transform = it(), new MutationObserver(() => this._stageElChange()).observe(this, {
                childList: !0
            });
            const e = new Xe(this, {
                start: (t, i) => !(2 === e.currentPointers.length || !this._positioningEl) && (i.preventDefault(), !0),
                move: t => {
                    this._onPointerMove(t, e.currentPointers)
                },
                avoidPointerEvents: d
            });
            this.addEventListener("wheel", e => this._onWheel(e))
        }
        connectedCallback() {
            this._stageElChange()
        }
        get x() {
            return this._transform.e
        }
        get y() {
            return this._transform.f
        }
        get scale() {
            return this._transform.a
        }
        scaleTo(e, t = {}) {
            let {
                originX: i = 0,
                originY: n = 0
            } = t;
            const {
                relativeTo: s = "content",
                allowChangeEvent: o = !1
            } = t, a = "content" === s ? this._positioningEl : this;
            if (!a || !this._positioningEl) return void this.setTransform({
                scale: e,
                allowChangeEvent: o
            });
            const r = a.getBoundingClientRect();
            if (i = $e(i, r.width), n = $e(n, r.height), "content" === s) i += this.x, n += this.y;
            else {
                const e = this._positioningEl.getBoundingClientRect();
                i -= e.left, n -= e.top
            }
            this._applyChange({
                allowChangeEvent: o,
                originX: i,
                originY: n,
                scaleDiff: e / this.scale
            })
        }
        setTransform(e = {}) {
            const {
                scale: t = this.scale,
                allowChangeEvent: i = !1
            } = e;
            let {
                x: n = this.x,
                y: s = this.y
            } = e;
            if (!this._positioningEl) return void this._updateTransform(t, n, s, i);
            const o = this.getBoundingClientRect(),
                a = this._positioningEl.getBoundingClientRect();
            if (!o.width || !o.height) return void this._updateTransform(t, n, s, i);
            let r = nt();
            r.x = a.left - o.left, r.y = a.top - o.top;
            let l = nt();
            l.x = a.width + r.x, l.y = a.height + r.y;
            const h = it().translate(n, s).scale(t).multiply(this._transform.inverse());
            r = r.matrixTransform(h), l = l.matrixTransform(h), r.x > o.width ? n += o.width - r.x : l.x < 0 && (n += -l.x), r.y > o.height ? s += o.height - r.y : l.y < 0 && (s += -l.y), this._updateTransform(t, n, s, i)
        }
        _updateTransform(e, t, i, n) {
            if (!(e < .01) && !(e > 1e5) && (e !== this.scale || t !== this.x || i !== this.y) && (this._transform.e = t, this._transform.f = i, this._transform.d = this._transform.a = e, this.style.setProperty("--x", this.x + "px"), this.style.setProperty("--y", this.y + "px"), this.style.setProperty("--scale", this.scale + ""), n)) {
                const e = new Event("change", {
                    bubbles: !0
                });
                this.dispatchEvent(e)
            }
        }
        _stageElChange() {
            this._positioningEl = void 0, 0 !== this.children.length && (this._positioningEl = this.children[0], this.children.length > 1 && console.warn("<pinch-zoom> must not have more than one child."), this.setTransform({
                allowChangeEvent: !0
            }))
        }
        _onWheel(e) {
            if (!this._positioningEl) return;
            e.preventDefault();
            const t = this._positioningEl.getBoundingClientRect();
            let {
                deltaY: i
            } = e;
            const {
                ctrlKey: n,
                deltaMode: s
            } = e;
            1 === s && (i *= 15);
            const o = i > 0,
                a = 1 - (o ? -i : i) / (n ? 100 : 300),
                r = o ? 1 / a : a;
            this._applyChange({
                scaleDiff: r,
                originX: e.clientX - t.left,
                originY: e.clientY - t.top,
                allowChangeEvent: !0
            })
        }
        _onPointerMove(e, t) {
            if (!this._positioningEl) return;
            const i = this._positioningEl.getBoundingClientRect(),
                n = Ke(e[0], e[1]),
                s = Ke(t[0], t[1]),
                o = n.clientX - i.left,
                a = n.clientY - i.top,
                r = Ze(e[0], e[1]),
                l = Ze(t[0], t[1]),
                h = r ? l / r : 1;
            this._applyChange({
                originX: o,
                originY: a,
                scaleDiff: h,
                panX: s.clientX - n.clientX,
                panY: s.clientY - n.clientY,
                allowChangeEvent: !0
            })
        }
        _applyChange(e = {}) {
            const {
                panX: t = 0,
                panY: i = 0,
                originX: n = 0,
                originY: s = 0,
                scaleDiff: o = 1,
                allowChangeEvent: a = !1
            } = e, r = it().translate(t, i).translate(n, s).translate(this.x, this.y).scale(o).translate(-n, -s).scale(this.scale);
            this.setTransform({
                allowChangeEvent: a,
                scale: r.a,
                x: r.e,
                y: r.f
            })
        }
    }
    customElements.define("pinch-zoom", st);
    const ot = "_two-up-handle_16zct_35";
    i.appendCss('two-up{display:grid;position:relative;--split-point:0;--track-color:rgb(0 0 0/0.6);--thumb-background:var(--black);--thumb-color:var(--accent-color);--thumb-size:62px;--bar-size:9px;--bar-touch-size:30px}two-up>*{grid-area:1/1}two-up[legacy-clip-compat]>:not(._two-up-handle_16zct_35){position:absolute}._two-up-handle_16zct_35{touch-action:none;position:relative;width:var(--bar-touch-size);transform:translateX(var(--split-point)) translateX(-50%);will-change:transform;cursor:ew-resize}._two-up-handle_16zct_35:before{content:"";display:block;height:100%;width:var(--bar-size);margin:0 auto;background:var(--track-color)}._scrubber_16zct_83{display:flex;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:var(--thumb-size);height:var(--thumb-size);background:var(--thumb-background);border-radius:var(--thumb-size);color:var(--thumb-color);box-sizing:border-box;padding:0 calc(var(--thumb-size)*0.24)}._scrubber_16zct_83 svg{flex:1}._arrow-left_16zct_121{fill:var(--orange)}._arrow-right_16zct_129{fill:var(--blue)}two-up[orientation=vertical] ._two-up-handle_16zct_35{width:auto;height:var(--bar-touch-size);transform:translateY(var(--split-point)) translateY(-50%);cursor:ns-resize}two-up[orientation=vertical] ._two-up-handle_16zct_35:before{width:auto;height:var(--bar-size);box-shadow:inset 0 calc(var(--bar-size)/2) 0 rgba(0,0,0,.1),0 1px 4px rgba(0,0,0,.4);margin:calc((var(--bar-touch-size) - var(--bar-size))/2) 0 0 0}two-up[orientation=vertical] ._scrubber_16zct_83{box-shadow:1px 0 4px rgba(0,0,0,.1);transform:translate(-50%,-50%) rotate(-90deg)}two-up>:first-child:not(._two-up-handle_16zct_35){-webkit-clip-path:inset(0 calc(100% - var(--split-point)) 0 0);clip-path:inset(0 calc(100% - var(--split-point)) 0 0)}two-up>:nth-child(2):not(._two-up-handle_16zct_35){-webkit-clip-path:inset(0 0 0 var(--split-point));clip-path:inset(0 0 0 var(--split-point))}two-up[orientation=vertical]>:first-child:not(._two-up-handle_16zct_35){-webkit-clip-path:inset(0 0 calc(100% - var(--split-point)) 0);clip-path:inset(0 0 calc(100% - var(--split-point)) 0)}two-up[orientation=vertical]>:nth-child(2):not(._two-up-handle_16zct_35){-webkit-clip-path:inset(var(--split-point) 0 0 0);clip-path:inset(var(--split-point) 0 0 0)}@supports not ((clip-path:inset(0 0 0 0)) or (-webkit-clip-path:inset(0 0 0 0))){two-up[legacy-clip-compat]>:first-child:not(._two-up-handle_16zct_35){clip:rect(auto var(--split-point) auto auto)}two-up[legacy-clip-compat]>:nth-child(2):not(._two-up-handle_16zct_35){clip:rect(auto auto auto var(--split-point))}two-up[orientation=vertical][legacy-clip-compat]>:first-child:not(._two-up-handle_16zct_35){clip:rect(auto auto var(--split-point) auto)}two-up[orientation=vertical][legacy-clip-compat]>:nth-child(2):not(._two-up-handle_16zct_35){clip:rect(var(--split-point) auto auto auto)}}');
    const at = "legacy-clip-compat",
        rt = "orientation";
    class lt extends HTMLElement {
        constructor() {
            super(), this._handle = document.createElement("div"), this._position = 0, this._relativePosition = .5, this._positionOnPointerStart = 0, this._everConnected = !1, this._onKeyDown = e => {
                const t = e.target;
                if (!(t instanceof HTMLElement && t.closest("input")))
                    if ("Digit1" === e.code || "Numpad1" === e.code) this._position = 0, this._relativePosition = 0, this._setPosition();
                    else if ("Digit2" === e.code || "Numpad2" === e.code) {
                    const e = "vertical" === this.orientation ? "height" : "width",
                        t = this.getBoundingClientRect();
                    this._position = t[e] / 2, this._relativePosition = this._position / t[e] / 2, this._setPosition()
                } else if ("Digit3" === e.code || "Numpad3" === e.code) {
                    const e = "vertical" === this.orientation ? "height" : "width",
                        t = this.getBoundingClientRect();
                    this._position = t[e], this._relativePosition = this._position / t[e], this._setPosition()
                }
            }, this._handle.className = ot, new MutationObserver(() => this._childrenChange()).observe(this, {
                childList: !0
            });
            const e = new Xe(this._handle, {
                start: (t, i) => 1 !== e.currentPointers.length && (i.preventDefault(), this._positionOnPointerStart = this._position, !0),
                move: () => {
                    this._pointerChange(e.startPointers[0], e.currentPointers[0])
                }
            })
        }
        static get observedAttributes() {
            return [rt]
        }
        connectedCallback() {
            this._childrenChange(), this._handle.innerHTML = '<div class="_scrubber_16zct_83"><svg viewBox="0 0 27 20"><path class="_arrow-left_16zct_121" d="M9.6 0L0 9.6l9.6 9.6z"/><path class="_arrow-right_16zct_129" d="M17 19.2l9.5-9.6L16.9 0z"/></svg>\n      </div>', this._resizeObserver = new ResizeObserver(() => this._resetPosition()), this._resizeObserver.observe(this), window.addEventListener("keydown", this._onKeyDown), this._everConnected || (this._resetPosition(), this._everConnected = !0)
        }
        disconnectedCallback() {
            window.removeEventListener("keydown", this._onKeyDown), this._resizeObserver && this._resizeObserver.disconnect()
        }
        attributeChangedCallback(e) {
            e === rt && this._resetPosition()
        }
        _resetPosition() {
            requestAnimationFrame(() => {
                const e = this.getBoundingClientRect(),
                    t = "vertical" === this.orientation ? "height" : "width";
                this._position = e[t] * this._relativePosition, this._setPosition()
            })
        }
        get legacyClipCompat() {
            return this.hasAttribute(at)
        }
        set legacyClipCompat(e) {
            e ? this.setAttribute(at, "") : this.removeAttribute(at)
        }
        get orientation() {
            const e = this.getAttribute(rt);
            return e && "vertical" === e.toLowerCase() ? "vertical" : "horizontal"
        }
        set orientation(e) {
            this.setAttribute(rt, e)
        }
        _childrenChange() {
            this.lastElementChild !== this._handle && this.appendChild(this._handle)
        }
        _pointerChange(e, t) {
            const i = "vertical" === this.orientation ? "clientY" : "clientX",
                n = "vertical" === this.orientation ? "height" : "width",
                s = this.getBoundingClientRect();
            this._position = this._positionOnPointerStart + (t[i] - e[i]), this._position = Math.max(0, Math.min(this._position, s[n])), this._relativePosition = this._position / s[n], this._setPosition()
        }
        _setPosition() {
            this.style.setProperty("--split-point", this._position + "px")
        }
    }
    customElements.define("two-up", lt);
    const ht = "_pinch-zoom_20c9f_49 abs-fill",
        ct = "_pinch-target_20c9f_65",
        pt = "_button-group_20c9f_133",
        dt = "_zoom_20c9f_149",
        ut = "_first-button_20c9f_217 _button_20c9f_133",
        _t = "_last-button_20c9f_227 _button_20c9f_133",
        gt = "_pixelated_20c9f_327";

    function mt(e, t, i, n) {
        const s = Array.isArray(t) ? t : ("" + t).split(".");
        let o = vt(e);
        const a = o,
            r = s.length - 1;
        for (const [e, t] of s.entries()) e !== r ? o = o[t] = vt(o[t]) : o[t] = n ? Object.assign(vt(o[t]), i) : i;
        return a
    }

    function vt(e) {
        return Array.isArray(e) ? [...e] : {
            ...e
        }
    }

    function ft(e, t, i) {
        return mt(e, t, i, !0)
    }

    function bt(e, t, i) {
        return mt(e, t, i, !1)
    }
    i.appendCss('._output_20c9f_1{display:contents}._output_20c9f_1:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:#000;opacity:.8;transition:opacity .5s ease}._output_20c9f_1._alt-background_20c9f_31:before{opacity:0}._pinch-zoom_20c9f_49{outline:none;display:flex;justify-content:center;align-items:center}._pinch-target_20c9f_65{will-change:auto;flex-shrink:0}._controls_20c9f_83{display:flex;justify-content:center;overflow:hidden;flex-wrap:wrap;contain:content;grid-area:header;align-self:center;padding:9px 66px;position:relative;pointer-events:none}._controls_20c9f_83>*{pointer-events:auto}@media (min-width:860px){._controls_20c9f_83{padding:9px;flex-wrap:wrap-reverse;grid-area:viewportOpts;align-self:end}}._button-group_20c9f_133{display:flex;position:relative;z-index:100;margin:0 3px}._button_20c9f_133,._zoom_20c9f_149{display:flex;align-items:center;box-sizing:border-box;background-color:rgba(29,29,29,.92);border:1px solid rgba(0,0,0,.67);border-right-width:0;line-height:1.1;white-space:nowrap;height:39px;padding:0 8px;font-size:1.2rem;cursor:pointer}._button_20c9f_133:focus-visible,._zoom_20c9f_149:focus-visible{box-shadow:0 0 0 2px #fff;outline:none;z-index:1}._button_20c9f_133{color:#fff}._button_20c9f_133:hover{background:rgba(50,50,50,.92)}._button_20c9f_133._active_20c9f_205{background:rgba(72,72,72,.92);color:#fff}._first-button_20c9f_217{border-radius:6px 0 0 6px}._last-button_20c9f_227{border-radius:0 6px 6px 0;border-left-width:1px}._zoom_20c9f_149{cursor:text;width:7rem;font:inherit;text-align:center;justify-content:center}._zoom_20c9f_149:focus{box-shadow:inset 0 1px 4px rgba(0,0,0,.2),0 0 0 2px #fff}span._zoom_20c9f_149{color:#939393;font-size:.8rem;line-height:1.2;font-weight:100}input._zoom_20c9f_149{text-indent:3px}._zoom-value_20c9f_289,input._zoom_20c9f_149{font-size:1.2rem;letter-spacing:.05rem;font-weight:700;color:#fff}._zoom-value_20c9f_289{margin:0 3px 0 0;padding:0 2px;border-bottom:1px dashed #999}._buttons-no-wrap_20c9f_309{display:flex;pointer-events:none}._buttons-no-wrap_20c9f_309>*{pointer-events:auto}._pixelated_20c9f_327{image-rendering:crisp-edges;image-rendering:pixelated}');
    const At = {
        originX: "50%",
        originY: "50%",
        relativeTo: "container",
        allowChangeEvent: !0
    };
    class wt extends i.d {
        constructor() {
            super(...arguments), this.state = {
                scale: 1,
                editingScale: !1,
                altBackground: !1,
                aliasing: !1
            }, this.retargetedEvents = new WeakSet, this.toggleAliasing = () => {
                this.setState(e => ({
                    aliasing: !e.aliasing
                }))
            }, this.toggleBackground = () => {
                this.setState({
                    altBackground: !this.state.altBackground
                })
            }, this.zoomIn = () => {
                if (!this.pinchZoomLeft) throw Error("Missing pinch-zoom element");
                this.pinchZoomLeft.scaleTo(1.25 * this.state.scale, At)
            }, this.zoomOut = () => {
                if (!this.pinchZoomLeft) throw Error("Missing pinch-zoom element");
                this.pinchZoomLeft.scaleTo(this.state.scale / 1.25, At)
            }, this.onRotateClick = () => {
                const {
                    preprocessorState: e
                } = this.props;
                if (!e) return;
                const t = bt(e, "rotate.rotate", (e.rotate.rotate + 90) % 360);
                this.props.onPreprocessorChange(t)
            }, this.onScaleValueFocus = () => {
                this.setState({
                    editingScale: !0
                }, () => {
                    this.scaleInput && (getComputedStyle(this.scaleInput).transform, this.scaleInput.focus())
                })
            }, this.onScaleInputBlur = () => {
                this.setState({
                    editingScale: !1
                })
            }, this.onScaleInputChanged = e => {
                const t = e.target,
                    i = parseFloat(t.value);
                if (!isNaN(i)) {
                    if (!this.pinchZoomLeft) throw Error("Missing pinch-zoom element");
                    this.pinchZoomLeft.scaleTo(i / 100, At)
                }
            }, this.onPinchZoomLeftChange = e => {
                if (!this.pinchZoomRight || !this.pinchZoomLeft) throw Error("Missing pinch-zoom element");
                this.setState({
                    scale: this.pinchZoomLeft.scale
                }), this.pinchZoomRight.setTransform({
                    scale: this.pinchZoomLeft.scale,
                    x: this.pinchZoomLeft.x,
                    y: this.pinchZoomLeft.y
                })
            }, this.onRetargetableEvent = e => {
                const t = e.target;
                if (!this.pinchZoomLeft) throw Error("Missing pinch-zoom element");
                if ("wheel" !== e.type && t.closest("." + ot)) return;
                if (this.retargetedEvents.has(e)) return;
                e.stopImmediatePropagation(), e.preventDefault();
                const i = new e.constructor(e.type, e);
                this.retargetedEvents.add(i), this.pinchZoomLeft.dispatchEvent(i), "touchend" === e.type && document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur()
            }
        }
        componentDidMount() {
            const e = this.leftDrawable(),
                t = this.rightDrawable();
            this.pinchZoomLeft.setTransform({
                allowChangeEvent: !0,
                x: 0,
                y: 0,
                scale: 1
            }), this.canvasLeft && e && a(this.canvasLeft, e), this.canvasRight && t && a(this.canvasRight, t)
        }
        componentDidUpdate(e, t) {
            const i = this.leftDrawable(e),
                n = this.rightDrawable(e),
                s = this.leftDrawable(),
                o = this.rightDrawable(),
                r = !!this.props.source != !!e.source || this.props.source && e.source && this.props.source.file !== e.source.file,
                l = e.source && e.source.preprocessed,
                h = this.props.source && this.props.source.preprocessed,
                c = this.pinchZoomLeft;
            if (r) c.setTransform({
                allowChangeEvent: !0,
                x: 0,
                y: 0,
                scale: 1
            });
            else if (l && h && l !== h) {
                const e = 1 - c.scale,
                    t = l.width / 2 * e,
                    i = l.height / 2 * e;
                c.setTransform({
                    allowChangeEvent: !0,
                    x: c.x - t + i,
                    y: c.y - i + t
                })
            }
            s && s !== i && this.canvasLeft && a(this.canvasLeft, s), o && o !== n && this.canvasRight && a(this.canvasRight, o)
        }
        shouldComponentUpdate(e, t) {
            return !u(this.props, e) || !u(this.state, t)
        }
        leftDrawable(e = this.props) {
            return e.leftCompressed || e.source && e.source.preprocessed
        }
        rightDrawable(e = this.props) {
            return e.rightCompressed || e.source && e.source.preprocessed
        }
        render({
            mobileView: e,
            leftImgContain: t,
            rightImgContain: n,
            source: s
        }, {
            scale: o,
            editingScale: a,
            altBackground: r,
            aliasing: l
        }) {
            const h = this.leftDrawable(),
                c = this.rightDrawable(),
                p = s && s.preprocessed;
            return i.h(i.p, null, i.h("div", {
                class: "_output_20c9f_1 " + (r ? "_alt-background_20c9f_31" : "")
            }, i.h("two-up", {
                "legacy-clip-compat": !0,
                class: "_two-up_20c9f_41 abs-fill",
                orientation: e ? "vertical" : "horizontal",
                onTouchStartCapture: this.onRetargetableEvent,
                onTouchEndCapture: this.onRetargetableEvent,
                onTouchMoveCapture: this.onRetargetableEvent,
                onPointerDownCapture: d ? void 0 : this.onRetargetableEvent,
                onMouseDownCapture: this.onRetargetableEvent,
                onWheelCapture: this.onRetargetableEvent
            }, i.h("pinch-zoom", {
                class: ht,
                onChange: this.onPinchZoomLeftChange,
                ref: i.linkRef(this, "pinchZoomLeft")
            }, i.h("canvas", {
                class: `${ct} ${l?gt:""}`,
                ref: i.linkRef(this, "canvasLeft"),
                width: h && h.width,
                height: h && h.height,
                style: {
                    width: p ? p.width : "",
                    height: p ? p.height : "",
                    objectFit: t ? "contain" : ""
                }
            })), i.h("pinch-zoom", {
                class: ht,
                ref: i.linkRef(this, "pinchZoomRight")
            }, i.h("canvas", {
                class: `${ct} ${l?gt:""}`,
                ref: i.linkRef(this, "canvasRight"),
                width: c && c.width,
                height: c && c.height,
                style: {
                    width: p ? p.width : "",
                    height: p ? p.height : "",
                    objectFit: n ? "contain" : ""
                }
            })))), i.h("div", {
                class: "_controls_20c9f_83"
            }, i.h("div", {
                class: pt
            }, i.h("button", {
                class: ut,
                onClick: this.zoomOut
            }, i.h(ne, null)), a ? i.h("input", {
                type: "number",
                step: "1",
                min: "1",
                max: "1000000",
                ref: i.linkRef(this, "scaleInput"),
                class: dt,
                value: Math.round(100 * o),
                onInput: this.onScaleInputChanged,
                onBlur: this.onScaleInputBlur
            }) : i.h("span", {
                class: dt,
                tabIndex: 0,
                onFocus: this.onScaleValueFocus
            }, i.h("span", {
                class: "_zoom-value_20c9f_289"
            }, Math.round(100 * o)), "%"), i.h("button", {
                class: _t,
                onClick: this.zoomIn
            }, i.h(ie, null))), i.h("div", {
                class: pt
            }, i.h("button", {
                class: ut,
                onClick: this.onRotateClick,
                title: "തിരിക്കുക"
            }, i.h(te, null)), !d && i.h("button", {
                class: "_button_20c9f_133",
                onClick: this.toggleAliasing,
                title: "സ്മൂതിങ് സജ്ജമാക്കുക"
            }, l ? i.h(K, null) : i.h(Z, null)), i.h("button", {
                class: _t,
                onClick: this.toggleBackground,
                title: "ബാക്ഗ്രൗണ്ട് സജ്ജമാക്കുക"
            }, r ? i.h(ee, null) : i.h($, null)))))
        }
    }
    i.appendCss("._options-scroller_1db19_1{--horizontal-padding:15px;border-radius:var(--scroller-radius);overflow:hidden}@media (min-width:600px){._options-scroller_1db19_1{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}}._options-title_1db19_27{background-color:var(--main-theme-color);color:var(--header-text-color);margin:0;padding:10px var(--horizontal-padding);font-weight:700;font-size:1.4rem;border-bottom:1px solid var(--off-black);transition:all .3s ease-in-out;transition-property:background-color,color;position:sticky;top:0;z-index:1}._original-image_1db19_59 ._options-title_1db19_27{background-color:var(--black);color:var(--white)}._option-text-first_1db19_69{grid-template-columns:87px 1fr}._option-text-first_1db19_69,._option-toggle_1db19_85{display:grid;align-items:center;gap:.7em;padding:10px var(--horizontal-padding)}._option-toggle_1db19_85{cursor:pointer;grid-template-columns:1fr auto}._option-reveal_1db19_103{grid-template-columns:auto 1fr;gap:1em}._option-one-cell_1db19_115{display:grid;grid-template-columns:1fr;padding:10px var(--horizontal-padding)}._section-enabler_1db19_127{background:var(--dark-gray);padding:15px var(--horizontal-padding);border-bottom:1px solid var(--off-black)}._options-section_1db19_141{background:var(--off-black)}._text-field_1db19_149{background:var(--white);color:var(--black);font:inherit;border:none;padding:6px 0 6px 10px;width:100%;box-sizing:border-box;border-radius:4px}._title-and-buttons_1db19_171{grid-template-columns:1fr;grid-auto-columns:max-content;grid-auto-flow:column;display:grid;gap:.8rem}._title-button_1db19_187 svg{--size:20px;display:block;width:var(--size);height:var(--size)}._cli-button_1db19_207 svg{stroke:var(--header-text-color)}._copy-over-button_1db19_223 svg{fill:var(--header-text-color)}");
    i.appendCss('._checkbox_iaobh_1{display:inline-block;position:relative}._track_iaobh_11{--thumb-size:14px;background:var(--black);border-radius:1000px;width:24px;padding:3px calc(var(--thumb-size)/2 + 3px)}._thumb_iaobh_27{position:relative;width:var(--thumb-size);height:var(--thumb-size);background:var(--less-light-gray);border-radius:100%;transform:translateX(calc(var(--thumb-size)/-2));overflow:hidden}._thumb_iaobh_27:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:var(--main-theme-color);opacity:0;transition:opacity .2s ease}._thumb-track_iaobh_71{transition:transform .2s ease}._real-checkbox_iaobh_79{top:0;position:absolute;opacity:0;pointer-events:none}._real-checkbox_iaobh_79:checked+._track_iaobh_11 ._thumb-track_iaobh_71{transform:translateX(100%)}._real-checkbox_iaobh_79:checked+._track_iaobh_11 ._thumb_iaobh_27:before{opacity:1}');
    class xt extends i.d {
        render(e) {
            return i.h("div", {
                class: "_checkbox_iaobh_1"
            }, i.h("input", {
                class: "_real-checkbox_iaobh_79",
                type: "checkbox",
                ...e
            }), i.h("div", {
                class: "_track_iaobh_11"
            }, i.h("div", {
                class: "_thumb-track_iaobh_71"
            }, i.h("div", {
                class: "_thumb_iaobh_27"
            }))))
        }
    }
    const Ct = new Promise(e => {
        const t = "38384040373937396665";
        let i = "";
        const n = s => {
            i += s.keyCode, i = i.slice(-t.length), i === t && (window.removeEventListener("keydown", n), e())
        };
        window.addEventListener("keydown", n)
    });
    class yt extends i.d {
        constructor() {
            super(...arguments), this.state = {
                extendedSettings: !1
            }, this.onChange = e => {
                const t = e.currentTarget.closest("form"),
                    {
                        options: i
                    } = this.props,
                    n = {
                        zx: b(t.zx, i.zx),
                        maxNumColors: b(t.maxNumColors, i.maxNumColors),
                        dither: b(t.dither)
                    };
                this.props.onChange(n)
            }
        }
        componentDidMount() {
            Ct.then(() => {
                this.setState({
                    extendedSettings: !0
                })
            })
        }
        render({
            options: e
        }, {
            extendedSettings: t
        }) {
            return i.h("form", {
                class: Y,
                onSubmit: y
            }, i.h(pe, null, t ? i.h("label", {
                class: V
            }, "Type:", i.h(de, {
                name: "zx",
                value: "" + e.zx,
                onChange: this.onChange
            }, i.h("option", {
                value: "0"
            }, "Standard"), i.h("option", {
                value: "1"
            }, "ZX"))) : null), i.h(pe, null, e.zx ? null : i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "maxNumColors",
                min: "2",
                max: "256",
                value: e.maxNumColors,
                onInput: this.onChange
            }, "നിറങ്ങൾ:"))), i.h("div", {
                class: N
            }, i.h(Ae, {
                name: "dither",
                min: "0",
                max: "1",
                step: "0.01",
                value: e.dither,
                onInput: this.onChange
            }, "ഡിതറിങ്:")))
        }
    }

    function zt(e) {
        return Ve.includes(e.method)
    }

    function kt(e, t) {
        let i = 0,
            s = 0,
            o = e.width,
            r = e.height;
        return "contain" === t.fitMethod && ({
                sx: i,
                sy: s,
                sw: o,
                sh: r
            } = n.getContainOffsets(o, r, t.width, t.height)),
            function(e, t, i, n, s, o, r, l) {
                const h = document.createElement("canvas");
                h.width = e.width, h.height = e.height, a(h, e);
                const c = document.createElement("canvas");
                c.width = o, c.height = r;
                const p = c.getContext("2d");
                if (!p) throw new Error("Could not create canvas context");
                return "pixelated" === l ? p.imageSmoothingEnabled = !1 : p.imageSmoothingQuality = l, p.drawImage(h, t, i, n, s, 0, 0, o, r), p.getImageData(0, 0, o, r)
            }(e, i, s, o, r, t.width, t.height, t.method.slice("browser-".length))
    }
    async function St(e, t, i, s) {
        if ("vector" === i.method) {
            if (!t.vectorImage) throw Error("No vector image available");
            return function(e, t) {
                let i = 0,
                    s = 0,
                    o = e.width,
                    a = e.height;
                return "contain" === t.fitMethod && ({
                    sx: i,
                    sy: s,
                    sw: o,
                    sh: a
                } = n.getContainOffsets(o, a, t.width, t.height)), c(e, {
                    sx: i,
                    sy: s,
                    sw: o,
                    sh: a,
                    width: t.width,
                    height: t.height
                })
            }(t.vectorImage, i)
        }
        return zt(i) ? s.resize(e, t.preprocessed, i) : kt(t.preprocessed, i)
    }
    const Et = [.25, .3333, .5, 1, 2, 3, 4];
    class Lt extends i.d {
        constructor(e) {
            super(e), this.state = {
                maintainAspect: !0
            }, this.presetWidths = {}, this.presetHeights = {}, this.onChange = () => {
                this.reportOptions()
            }, this.onWidthInput = () => {
                if (this.state.maintainAspect) {
                    const e = b(this.form.width);
                    this.form.height.value = Math.round(e / this.getAspect())
                }
                this.reportOptions()
            }, this.onHeightInput = () => {
                if (this.state.maintainAspect) {
                    const e = b(this.form.height);
                    this.form.width.value = Math.round(e * this.getAspect())
                }
                this.reportOptions()
            }, this.onPresetChange = e => {
                const t = e.target;
                if ("custom" === t.value) return;
                const i = Number(t.value);
                this.form.width.value = Math.round(this.props.inputWidth * i) + "", this.form.height.value = Math.round(this.props.inputHeight * i) + "", this.reportOptions()
            }, this.generatePresetValues(e.inputWidth, e.inputHeight)
        }
        reportOptions() {
            const e = this.form,
                t = e.width,
                i = e.height,
                {
                    options: n
                } = this.props;
            if (!t.checkValidity() || !i.checkValidity()) return;
            const s = {
                width: b(t),
                height: b(i),
                method: e.resizeMethod.value,
                premultiply: w(e.premultiply, !0),
                linearRGB: w(e.linearRGB, !0),
                fitMethod: x(e.fitMethod, n.fitMethod)
            };
            this.props.onChange(s)
        }
        getAspect() {
            return this.props.inputWidth / this.props.inputHeight
        }
        componentDidUpdate(e, t) {
            !t.maintainAspect && this.state.maintainAspect && (this.form.height.value = Math.round(Number(this.form.width.value) / this.getAspect()), this.reportOptions())
        }
        componentWillReceiveProps(e) {
            this.props.inputWidth === e.inputWidth && this.props.inputHeight === e.inputHeight || this.generatePresetValues(e.inputWidth, e.inputHeight)
        }
        generatePresetValues(e, t) {
            for (const i of Et) this.presetWidths[i] = Math.round(e * i), this.presetHeights[i] = Math.round(t * i)
        }
        getPreset() {
            const {
                width: e,
                height: t
            } = this.props.options;
            for (const i of Et)
                if (e === this.presetWidths[i] && t === this.presetHeights[i]) return i;
            return "custom"
        }
        render({
            options: e,
            isVector: t
        }, {
            maintainAspect: n
        }) {
            return i.h("form", {
                ref: i.linkRef(this, "form"),
                class: Y,
                onSubmit: y
            }, i.h("label", {
                class: V
            }, "രീതി:", i.h(de, {
                name: "resizeMethod",
                value: e.method,
                onChange: this.onChange
            }, t && i.h("option", {
                value: "vector"
            }, "Vector"), i.h("option", {
                value: "lanczos3"
            }, "Lanczos3"), i.h("option", {
                value: "mitchell"
            }, "Mitchell"), i.h("option", {
                value: "catrom"
            }, "Catmull-Rom"), i.h("option", {
                value: "triangle"
            }, "Triangle (bilinear)"), i.h("option", {
                value: "hqx"
            }, "hqx (pixel art)"), i.h("option", {
                value: "browser-pixelated"
            }, "Browser pixelated"), i.h("option", {
                value: "browser-low"
            }, "Browser low quality"), i.h("option", {
                value: "browser-medium"
            }, "Browser medium quality"), i.h("option", {
                value: "browser-high"
            }, "Browser high quality"))), i.h("label", {
                class: V
            }, "പ്രിസെറ്റ്:", i.h(de, {
                value: this.getPreset(),
                onChange: this.onPresetChange
            }, Et.map(e => i.h("option", {
                value: e
            }, 100 * e, "%")), i.h("option", {
                value: "custom"
            }, "Custom"))), i.h("label", {
                class: V
            }, "വീതി:", i.h("input", {
                required: !0,
                class: W,
                name: "width",
                type: "number",
                min: "1",
                value: "" + e.width,
                onInput: this.onWidthInput
            })), i.h("label", {
                class: V
            }, "ഉയരം:", i.h("input", {
                required: !0,
                class: W,
                name: "height",
                type: "number",
                min: "1",
                value: "" + e.height,
                onInput: this.onHeightInput
            })), i.h(pe, null, zt(e) ? i.h("label", {
                class: U
            }, "പ്രീമൾട്ടിപ്ലൈ ആൽഫാ ചാനൽ", i.h(ce, {
                name: "premultiply",
                checked: e.premultiply,
                onChange: this.onChange
            })) : null, zt(e) ? i.h("label", {
                class: U
            }, "ലീനിയർ RGB", i.h(ce, {
                name: "linearRGB",
                checked: e.linearRGB,
                onChange: this.onChange
            })) : null), i.h("label", {
                class: U
            }, "അനുപാതം നിലനിർത്തുക", i.h(ce, {
                name: "maintainAspect",
                checked: n,
                onChange: Ce(this, "maintainAspect")
            })), i.h(pe, null, n ? null : i.h("label", {
                class: V
            }, "Fit method:", i.h(de, {
                name: "fitMethod",
                value: e.fitMethod,
                onChange: this.onChange
            }, i.h("option", {
                value: "stretch"
            }, "Stretch"), i.h("option", {
                value: "contain"
            }, "Contain")))))
        }
    }
    const qt = (async () => {
        const e = {
            ...Ue
        };
        return await Promise.all(Object.entries(Ue).map(async ([t, i]) => {
            "featureTest" in i && !await i.featureTest() && delete e[t]
        })), e
    })();
    class Pt extends i.d {
        constructor() {
            super(), this.state = {
                supportedEncoderMap: void 0
            }, this.onEncoderTypeChange = e => {
                const t = e.currentTarget.value;
                this.props.onEncoderTypeChange(this.props.index, t)
            }, this.onProcessorEnabledChange = e => {
                const t = e.currentTarget,
                    i = t.name.split(".")[0];
                this.props.onProcessorOptionsChange(this.props.index, bt(this.props.processorState, i + ".enabled", t.checked))
            }, this.onQuantizerOptionsChange = e => {
                this.props.onProcessorOptionsChange(this.props.index, ft(this.props.processorState, "quantize", e))
            }, this.onResizeOptionsChange = e => {
                this.props.onProcessorOptionsChange(this.props.index, ft(this.props.processorState, "resize", e))
            }, this.onEncoderOptionsChange = e => {
                this.props.onEncoderOptionsChange(this.props.index, e)
            }, this.onCopyCliClick = () => {
                this.props.onCopyCliClick(this.props.index)
            }, this.onCopyToOtherSideClick = () => {
                this.props.onCopyToOtherSideClick(this.props.index)
            }, qt.then(e => this.setState({
                supportedEncoderMap: e
            }))
        }
        render({
            source: e,
            encoderState: t,
            processorState: n
        }, {
            supportedEncoderMap: s
        }) {
            const o = t && Ue[t.type],
                a = o && "Options" in o ? o.Options : void 0;
            return i.h("div", {
                class: "_options-scroller_1db19_1 " + (t ? "" : "_original-image_1db19_59")
            }, i.h(pe, null, t ? i.h("div", null, i.h("h3", {
                class: j
            }, i.h("div", {
                class: "_title-and-buttons_1db19_171"
            }, "തിരുത്തുക", i.h("button", {
                class: "_cli-button_1db19_207 _title-button_1db19_187 unbutton",
                title: "Copy npx command",
                onClick: this.onCopyCliClick
            }, i.h(le, null)), i.h("button", {
                class: "_copy-over-button_1db19_223 _title-button_1db19_187 unbutton",
                title: "Copy settings to other side",
                onClick: this.onCopyToOtherSideClick
            }, i.h(he, null)))), i.h("label", {
                class: G
            }, "സൈസ് മാറ്റുക", i.h(xt, {
                name: "resize.enable",
                checked: !!n.resize.enabled,
                onChange: this.onProcessorEnabledChange
            })), i.h(pe, null, n.resize.enabled ? i.h(Lt, {
                isVector: Boolean(e && e.vectorImage),
                inputWidth: e ? e.preprocessed.width : 1,
                inputHeight: e ? e.preprocessed.height : 1,
                options: n.resize,
                onChange: this.onResizeOptionsChange
            }) : null), i.h("label", {
                class: G
            }, "പാലറ്റ് കുറയ്ക്കുക", i.h(xt, {
                name: "quantize.enable",
                checked: !!n.quantize.enabled,
                onChange: this.onProcessorEnabledChange
            })), i.h(pe, null, n.quantize.enabled ? i.h(yt, {
                options: n.quantize,
                onChange: this.onQuantizerOptionsChange
            }) : null)) : null), i.h("h3", {
                class: j
            }, "പപ്പടമാക്കുക"), i.h("section", {
                class: `${N} ${Y}`
            }, s ? i.h(de, {
                value: t ? t.type : "identity",
                onChange: this.onEncoderTypeChange,
                large: !0
            }, i.h("option", {
                value: "identity"
            }, "യഥാർത്ഥ ചിത്രം"), Object.entries(s).map(([e, t]) => i.h("option", {
                value: e
            }, t.meta.label))) : i.h(de, {
                large: !0
            }, i.h("option", null, "ഇപ്പൊ വരും…"))), i.h(pe, null, a && i.h(a, {
                options: t.options,
                onChange: this.onEncoderOptionsChange
            })))
        }
    }
    class It {
        constructor() {
            this._entries = []
        }
        add(e) {
            this._entries.unshift(e), this._entries.length > 5 && this._entries.pop()
        }
        match(e, t, i) {
            const n = this._entries.findIndex(n => {
                if (n.preprocessed !== e) return !1;
                if (n.encoderState.type !== i.type) return !1;
                for (const e in t)
                    if (!u(t[e], n.processorState[e])) return !1;
                return !!u(i.options, n.encoderState.options)
            });
            if (-1 === n) return;
            const s = this._entries[n];
            return 0 !== n && (this._entries.splice(n, 1), this._entries.unshift(s)), {
                ...s
            }
        }
    }
    const Mt = "_panel-heading_156to_1",
        Ot = "_panel-content_156to_7";
    i.appendCss("._panel-content_156to_7{height:0;overflow:auto}._panel-content_156to_7[aria-expanded=true]{height:auto}");
    const Bt = "open-one-only";

    function Tt(e) {
        const t = e.closest("multi-panel > *, a, button");
        if (t && t.classList.contains(Mt)) return t
    }
    async function Rt(e) {
        const t = e.nextElementSibling;
        if (!t) return;
        const i = t.getBoundingClientRect().height;
        e.removeAttribute("content-expanded"), t.setAttribute("aria-expanded", "false"), await null, await C(t, {
            from: i,
            to: 0,
            duration: 300
        }), t.style.height = ""
    }
    class Dt extends HTMLElement {
        static get observedAttributes() {
            return [Bt]
        }
        constructor() {
            super(), this.addEventListener("click", this._onClick), this.addEventListener("keydown", this._onKeyDown), new MutationObserver(() => this._childrenChange()).observe(this, {
                childList: !0
            })
        }
        connectedCallback() {
            this._childrenChange()
        }
        attributeChangedCallback(e, t, i) {
            e === Bt && null === i && this._closeAll({
                exceptFirst: !0
            })
        }
        _onClick(e) {
            const t = Tt(e.target);
            t && this._toggle(t)
        }
        _onKeyDown(e) {
            const t = document.activeElement,
                i = Tt(t);
            if (!i) return;
            if (t !== i) return;
            if (e.altKey) return;
            let n;
            switch (e.key) {
                case "ArrowLeft":
                case "ArrowUp":
                    n = this._prevHeading();
                    break;
                case "ArrowRight":
                case "ArrowDown":
                    n = this._nextHeading();
                    break;
                case "Home":
                    n = this._firstHeading();
                    break;
                case "End":
                    n = this._lastHeading();
                    break;
                case "Enter":
                case " ":
                case "Spacebar":
                    this._toggle(i);
                    break;
                default:
                    return
            }
            e.preventDefault(), n && (t.setAttribute("tabindex", "-1"), n.setAttribute("tabindex", "0"), n.focus())
        }
        _toggle(e) {
            e && (e.hasAttribute("content-expanded") ? Rt(e) : (this.openOneOnly && this._closeAll(), async function(e) {
                const t = e.nextElementSibling;
                if (!t) return;
                const i = t.getBoundingClientRect().height;
                e.setAttribute("content-expanded", ""), t.setAttribute("aria-expanded", "true");
                const n = t.getBoundingClientRect().height;
                await null, await C(t, {
                    from: i,
                    to: n,
                    duration: 300
                }), t.style.height = ""
            }(e)))
        }
        _closeAll(e = {}) {
            const {
                exceptFirst: t = !1
            } = e;
            let i = [...this.children].filter(e => e.matches("[content-expanded]"));
            t && (i = i.slice(1));
            for (const e of i) Rt(e)
        }
        _childrenChange() {
            let e = !1,
                t = this.firstElementChild;
            for (; t;) {
                const i = t.nextElementSibling,
                    n = Math.random().toString(36).substr(2, 9);
                if (!i) {
                    console.error("<multi-panel> requires an even number of element children.");
                    break
                }
                t.classList.remove(Ot), i.classList.remove(Mt), t.removeAttribute("aria-expanded"), t.removeAttribute("content-expanded"), i.removeAttribute("tabindex"), t.classList.add(Mt), i.classList.add(Ot), t.id = "panel-heading-" + n, t.setAttribute("aria-controls", "panel-content-" + n), i.id = "panel-content-" + n, i.setAttribute("aria-labelledby", "panel-heading-" + n), "0" === t.getAttribute("tabindex") ? e = !0 : t.setAttribute("tabindex", "-1"), i.setAttribute("aria-expanded", t.hasAttribute("content-expanded") ? "true" : "false"), t = i.nextElementSibling
            }!e && this.firstElementChild && this.firstElementChild.setAttribute("tabindex", "0"), this.openOneOnly && this._closeAll({
                exceptFirst: !0
            })
        }
        _prevHeading() {
            if (this.firstElementChild === document.activeElement) return this.firstElementChild;
            const e = document.activeElement.previousElementSibling;
            return e ? e.previousElementSibling : void 0
        }
        _nextHeading() {
            const e = document.activeElement.nextElementSibling;
            if (e) return e.nextElementSibling
        }
        _firstHeading() {
            return this.firstElementChild
        }
        _lastHeading() {
            const e = this.lastElementChild;
            if (e && e.classList.contains(Mt)) return e;
            const t = this.lastElementChild;
            return t ? t.previousElementSibling : void 0
        }
        get openOneOnly() {
            return this.hasAttribute(Bt)
        }
        set openOneOnly(e) {
            e ? this.setAttribute(Bt, "") : this.removeAttribute(Bt)
        }
    }
    customElements.define("multi-panel", Dt);
    i.appendCss("@font-face{font-family:Roboto Mono Numbers;font-style:normal;font-weight:700;src:url(\"data:font/woff;base64,d09GRgABAAAAAAkEAA0AAAAACygAAQABAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABMAAAADYAAAA2kxWCFk9TLzIAAAFoAAAAYAAAAGCY9cGQU1RBVAAAAcgAAABEAAAAROXczCxjbWFwAAACDAAAADwAAAA8AFsAbWdhc3AAAAJIAAAACAAAAAgAAAAQZ2x5ZgAAAlAAAASiAAAF7GtBYvxoZWFkAAAG9AAAADYAAAA2ATacDmhoZWEAAAcsAAAAJAAAACQKsQEqaG10eAAAB1AAAAAaAAAAGgb1AeRsb2NhAAAHbAAAABoAAAAaCBgG1W1heHAAAAeIAAAAIAAAACAAKwE6bmFtZQAAB6gAAAE7AAACbDvbXDhwb3N0AAAI5AAAACAAAAAg/20AZQABAAAACgAyADQABERGTFQAGmN5cmwAJGdyZWsAJGxhdG4AJAAEAAAAAP//AAAAAAAAAAAAAAAAAAQEzQK8AAUAAAWaBTMAAAEfBZoFMwAAA9EAZgIAAAAAAAAJAAAAAAAA4AAC/xAAIFsAAAAgAAAAAEdPT0cAIAAgADkIYv3VAAAIYgIrIAABn08BAAAEOgWwAAAAIAABAAEAAQAIAAIAAAAUAAIAAAAkAAJ3Z2h0AQAAAGl0YWwBCwABAAQAEAABAAAAAAEQArwAAAADAAEAAgERAAAAAAABAAAAAAACAAAAAwAAABQAAwABAAAAFAAEACgAAAAGAAQAAQACACAAOf//AAAAIAAw////4f/SAAEAAAAAAAAAAQAB//8AD3icjZRLbBtVFIbv9SsihTROMh7P056M37FrJ54ZO/Y4sT12/IidOCl9JU3bxGneSaPS0CLBolC6i5AAKYukCEQrqFBaQ0ok1AqEVCQ2bGCRAgKEKpAogQVigdTYYSZeYBEhMaure4/u/P93/nOBGizv/qqJaT8DGHCBMAAxPWez22xsq65Op0P0LQbUYPB3CAFBgBzH85yy8ncou6i+RalhW5V6O2xpQTSxeKSrtDB/O9IVl7oipfmFUiQSK49juDHldUkobVJhmDHt9WeNCKqCV1QueHJ5K5POZtOZreXK9eWtdCabzaS3oNZk9r018KyVZQmSXRqsRAYu2iysw9k6EYdmysQACNYBUAvaEtABMKpntYhVrxYOlq/CRW3ppz+uPH4byDU9AGiS2vuyMzDKM1BQxPO1/pgaP8ienTqIaJLly7ApdcHl9IidoffOXfhESmQhSlPkkWBbCsdIBDXmAhXnD7A183I0+lL69LVgsKs3FlsfDZ800SYSJ3LtTI/DOSZWdB8rOs7sbmvSso6czBep/VsVHs/UYK7qs/8frSy8sdI5zJhbKZI6KvgKFG2uPDqcTL4/Mnc3kegjKepEhCsQBJmKRu/Mja9HoxloMJNExuXPY8pHHBPVgw9wgng67M3hFE3hWMo1s+bn/J0B4c2J0JS7LWHAkk7nsHdilef4EMe/esIRRQ1GEsNTbe5enGYAUCm50YzJvagHDUqCGIgyekbvl5EH9OqPKj+X1w6oRqDh5s4jKBIqSv3aTuhW5T4Uf4S/+coPFUJLMqEe+QYfAIdRYZ9RGRNj+DcjhUszwzOr3zdaUFR0RoZomkKNWH9weKm+8rv6SCJx+9Tzm6IYEoOdN6az502sStp5oPoi0EgdONBgY9nRUHjCanVNnT57TRCCfZJUGntms7tbsjXB6Lbsa1pWldXeA3YQlX2xrZo6nQpB9jWr2qC6qmw/3N9ffu9Ifc76YWV7ZORUKh67t7R4p7s74ee41Sn/catNRJ9IiuGbC42VbW6AJGmaJAvtvkGaZhqcGNWjvffc7Fzl6/XZF77K54/lJWlzpriRkPqNzS3t2PDrPB+qoE6LdTwcLlosTofDfqkwSHc0I6jCNil3J1GdlBjPIAxkNIkdqPq2/Dm0apHVh4/98iiBedlrl5xRL0iB03JlbfT2HKO6f9b7o6qu9VuT1P/a15iSka53i8V3xEiCIrCMhz8im+2NxzemJj+Ix3oFHx63OiXMzP5lIsjcIW+OoMw0QeR9vjxJ0BSGonGX/KYYjShqiLe5JCOKazzFlb1HilspCmNOexTFUm7PrDi5xvGK2rXJvisdpKcJ6WTc0+VSRz9JUgRODHIdBUpBThVUeXcGxykKxzMed0YeEDnnaSXho7t/arwyHQeIAXCWlYfYEhCaeH4fpSqZALIHq3mfbaR6AHPNyKfQMDR0VOqObp5f3JBDFxD4N6baBxkTh9RHhOD1V4QCTuAkjufbPX0UxTxpx4nYd79cnJ2BlltnXvymv//4QE/P3ZnJjXg8pz/4lAXRFS67D/nglx6bbSIYnHTYvQ6H41KhaOKbWwzgbxq6UxkAAAABAAAAAwAA+7NEP18PPPUACwgAAAAAAMTwES4AAAAA2tg/q/wF/dUGRwhiAAEACQACAAAAAAAAAAEAAAhi/dUAAATN/AX+hgZHAAEAAAAAAAAAAAAAAAAAAAABBM0AAAAAAI0ArQBGAGAAOwB1AGkARQBtAGEAAAAAAAAAAABcAG4AsgEiAUMBjgHxAgQCkwL2AAAAAQAAAAwAsQAWAIcABQABAAAAAAAAAAAAAAAAAAMAAXicfZG9TgJBFIW/ESQajdHGwsJsZbRgwb9GG39iCImiUaKdyYq4YFjWwBLji/ggxtoHoPSJPDs7qzSYmztz5s6cc+bOAIu8U8AU54FPZYYNq1pleIY5xg4X2OPb4SKeKTk8y5rZcLjEujlyeImmuc+wkZf5cHhB+Mvh5T99s6L6mFNiXnhjQJeQDgkeO1TZZl+oqUpb87VOPSgTpceFxr5FV+LFPOtMyzKPGWnuqDZgqPWmVUzkMOSAiiKUT3piJD1frJjIVmNFSE9KT1Y9EaNi1XPfyLluTbnNibLHI7vSrdo4pMaloiY0yckZ5V/OtP7y/VvdK+2oa3e8CY//dfPus95fbfgEqgTqPX1b375VqN2e1Fuq9OXTtt2fU9f/nNHgRmNZ/5K63mk3/6u6MnDMhlWK0vUPUDBdTwAAAwAAAAAAAP9qAGQAAAABAAAAAAAAAAAAAAAAAAAAAA==\") format(\"woff\")}@keyframes _action-enter_126nv_1{0%{transform:rotate(-90deg);opacity:0;animation-timing-function:ease-out}}@keyframes _action-leave_126nv_1{0%{transform:rotate(0deg);opacity:1;animation-timing-function:ease-out}}._results_126nv_51{--download-overflow-size:9px;background:rgba(0,0,0,.67);border-radius:5px;display:grid;grid-template-columns:max-content [bubble] 1fr [download] max-content}@media (min-width:600px){._results_126nv_51{--download-overflow-size:30px;background:none;border-radius:none;grid-template-columns:[download] auto [bubble] 1fr;align-items:center;margin-bottom:calc(var(--download-overflow-size)/2)}}._expand-arrow_126nv_85{fill:var(--white);transform:rotate(180deg);margin:0 1rem;align-self:center}@media (min-width:600px){._expand-arrow_126nv_85{display:none}}:focus ._expand-arrow_126nv_85{fill:var(--main-theme-color)}[content-expanded] ._expand-arrow_126nv_85{transform:none}._expand-arrow_126nv_85 svg{display:block;--size:15px;width:var(--size);height:var(--size)}._bubble_126nv_143{align-self:center}@media (min-width:600px){._bubble_126nv_143{position:relative;width:max-content;grid-row:1;grid-column:bubble}._bubble_126nv_143:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-image-source:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='186.5' height='280.3'%3E%3Cpath fill='rgba(30,31,29,0.69)' d='M181.5 0H16.4a5 5 0 00-5 5v134L0 146.5h11.4v128.8a5 5 0 005 5h165.1a5 5 0 005-5V5a5 5 0 00-5-5z'/%3E%3Cpath fill='rgba(0,0,0,0.23)' d='M16.4 1a4 4 0 00-4 4v134.5l-.5.3-8.6 5.7h9v129.8a4 4 0 004 4h165.2a4 4 0 004-4V5a4 4 0 00-4-4H16.4m0-1h165.1a5 5 0 015 5v270.3a5 5 0 01-5 5H16.4a5 5 0 01-5-5V146.5H0l11.4-7.5V5a5 5 0 015-5z'/%3E%3C/svg%3E\");border-image-slice:12 12 12 17 fill;border-image-width:12px 12px 12px 17px;border-image-repeat:repeat}}._bubble-inner_126nv_191{display:grid;grid-template-columns:[size-info] 1fr [percent-info] auto}@media (min-width:600px){._bubble-inner_126nv_191{position:relative;--main-padding:1px;--speech-padding:2.1rem;padding:var(--main-padding) var(--main-padding) var(--main-padding) var(--speech-padding);gap:.9rem}}._unit_126nv_219{color:var(--main-theme-color)}@media (min-width:600px){._type-label_126nv_227{display:none}}._size-info_126nv_239{background:var(--dark-gray);border-radius:19px;align-self:center;grid-column:size-info;grid-row:1;justify-self:start;padding:.6rem 1.2rem;margin:.4rem 0}@media (min-width:600px){._size-info_126nv_239{border-radius:none;background:none;padding:0;margin:0}}._percent-info_126nv_277{align-self:center;margin-left:1rem;margin-right:.3rem}@media (min-width:600px){._percent-info_126nv_277{margin:0;display:grid;--arrow-width:16px;grid-template-columns:[arrow] var(--arrow-width) [data] auto;grid-column:percent-info;grid-row:1;--shadow-direction:-1px;filter:drop-shadow(var(--shadow-direction) 0 0 rgba(0,0,0,.67))}}._big-arrow_126nv_311{display:none}@media (min-width:600px){._big-arrow_126nv_311{display:block;width:100%;fill:var(--main-theme-color);grid-column:arrow;grid-row:1;align-self:stretch}}._percent-output_126nv_337{grid-column:data;grid-row:1;display:grid;grid-template-columns:auto auto auto;line-height:1}@media (min-width:600px){._percent-output_126nv_337{background:var(--main-theme-color);--radius:4px;border-radius:0 var(--radius) var(--radius) 0;--padding-arrow-side:0.6rem;--padding-other-side:1.1rem;padding:.7rem var(--padding-other-side);padding-left:var(--padding-arrow-side)}}._size-direction_126nv_373{font-weight:700;align-self:center;font-family:sans-serif;opacity:.76;text-shadow:0 2px rgba(0,0,0,.3);font-size:1.5rem;position:relative;top:3px}._size-value_126nv_395{font-family:Roboto Mono Numbers;font-size:2.6rem;text-shadow:0 2px rgba(0,0,0,.3)}._percent-char_126nv_407{align-self:start;position:relative;top:4px;opacity:.76;margin-left:.2rem}._download_126nv_423{--size:59px;width:calc(var(--size) + var(--download-overflow-size));height:calc(var(--size) + var(--download-overflow-size));position:relative;grid-row:1;grid-column:download;margin:calc(var(--download-overflow-size)/-2) 0;margin-right:calc(var(--download-overflow-size)/-3);display:grid;align-items:center;justify-items:center;align-self:center}@media (min-width:600px){._download_126nv_423{--size:63px}}._download_126nv_423 loading-spinner{grid-area:1/1;position:relative;--color:var(--white);--size:21px;top:0;left:1px}@media (min-width:600px){._download_126nv_423 loading-spinner{top:-1px;left:2px;--size:28px}}._download-blobs_126nv_491{position:absolute;top:0;left:0;width:100%;height:100%}._download-blobs_126nv_491 path{fill:var(--hot-theme-color);opacity:.7}._download-icon_126nv_515{grid-area:1/1}._download-icon_126nv_515 svg{--size:19px;width:var(--size);height:var(--size);fill:var(--white);position:relative;top:3px;left:1px;animation:_action-enter_126nv_1 .2s}@media (min-width:600px){._download-icon_126nv_515 svg{--size:27px;top:2px;left:2px}}._download-disable_126nv_557{pointer-events:none}._download-disable_126nv_557 ._download-icon_126nv_515 svg{opacity:0;transform:rotate(90deg);animation:_action-leave_126nv_1 .2s}@media (min-width:600px){._results-right_126nv_589{grid-template-columns:[bubble] 1fr [download] auto}}@media (min-width:600px){._results-right_126nv_589 ._bubble_126nv_143{justify-self:end}._results-right_126nv_589 ._bubble_126nv_143:before{transform:scaleX(-1)}}._results-right_126nv_589 ._download_126nv_423{margin-left:calc(var(--download-overflow-size)/-3);margin-right:0}@media (min-width:600px){._results-right_126nv_589 ._bubble-inner_126nv_191{padding:var(--main-padding) var(--speech-padding) var(--main-padding) var(--main-padding);grid-template-columns:[percent-info] auto [size-info] 1fr}}@media (min-width:600px){._results-right_126nv_589 ._percent-info_126nv_277{grid-template-columns:[data] auto [arrow] var(--arrow-width);--shadow-direction:1px}}@media (min-width:600px){._results-right_126nv_589 ._percent-output_126nv_337{border-radius:var(--radius) 0 0 var(--radius);padding-left:var(--padding-other-side);padding-right:var(--padding-arrow-side)}}._results-right_126nv_589 ._big-arrow_126nv_311{transform:scaleX(-1)}._is-original_126nv_689 ._big-arrow_126nv_311{fill:transparent}._is-original_126nv_689 ._percent-output_126nv_337{background:none}._is-original_126nv_689 ._download-blobs_126nv_491 path{fill:var(--black)}._is-original_126nv_689 ._unit_126nv_219{color:var(--white);opacity:.76}");
    const Ht = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    class Ft extends i.d {
        constructor() {
            super(...arguments), this.state = {
                showLoadingState: this.props.loading
            }, this.loadingTimeoutId = 0, this.onDownload = () => {
                const e = Math.round(this.props.source.file.size / 1024),
                    t = Math.round(this.props.imageFile.size / 1024),
                    i = Math.round(t / e * 1e3);
                ga("send", "event", "compression", "download", {
                    metric1: e,
                    metric2: t,
                    metric3: i
                })
            }
        }
        componentDidUpdate(e, t) {
            e.loading && !this.props.loading ? (clearTimeout(this.loadingTimeoutId), this.setState({
                showLoadingState: !1
            })) : !e.loading && this.props.loading && (this.loadingTimeoutId = self.setTimeout(() => this.setState({
                showLoadingState: !0
            }), 500))
        }
        render({
            source: e,
            imageFile: t,
            downloadUrl: n,
            flipSide: s,
            typeLabel: o
        }, {
            showLoadingState: a
        }) {
            const r = t && function(e) {
                    const t = e < 0,
                        i = t ? "-" : "";
                    if (t && (e = -e), e < 1) return {
                        value: i + e,
                        unit: Ht[0]
                    };
                    const n = Math.min(Math.floor(Math.log10(e) / 3), Ht.length - 1);
                    return {
                        unit: Ht[n],
                        value: i + (e / Math.pow(1e3, n)).toPrecision(3)
                    }
                }(t.size),
                l = !e || !t || e.file === t;
            let h, c;
            if (e && t) {
                h = t.size / e.file.size;
                const i = Math.round(100 * Math.abs(h));
                c = h > 1 ? i - 100 : 100 - i
            }
            return i.h("div", {
                class: (s ? "_results-right_126nv_589 _results_126nv_51" : "_results-left_126nv_581 _results_126nv_51") + " " + (l ? "_is-original_126nv_689" : "")
            }, i.h("div", {
                class: "_expand-arrow_126nv_85"
            }, i.h(ae, null)), i.h("div", {
                class: "_bubble_126nv_143"
            }, i.h("div", {
                class: "_bubble-inner_126nv_191"
            }, i.h("div", {
                class: "_size-info_126nv_239"
            }, i.h("div", {
                class: "_file-size_126nv_137"
            }, r ? i.h(i.p, null, r.value, " ", i.h("span", {
                class: "_unit_126nv_219"
            }, r.unit), i.h("span", {
                class: "_type-label_126nv_227"
            }, " ", o)) : "…")), i.h("div", {
                class: "_percent-info_126nv_277"
            }, i.h("svg", {
                viewBox: "0 0 1 2",
                class: "_big-arrow_126nv_311",
                preserveAspectRatio: "none"
            }, i.h("path", {
                d: "M1 0v2L0 1z"
            })), i.h("div", {
                class: "_percent-output_126nv_337"
            }, h && 1 !== h && i.h("span", {
                class: "_size-direction_126nv_373"
            }, h < 1 ? "↓" : "↑"), i.h("span", {
                class: "_size-value_126nv_395"
            }, c || 0), i.h("span", {
                class: "_percent-char_126nv_407"
            }, "%"))))), i.h("a", {
                class: a ? "_download-disable_126nv_557 _download_126nv_423" : "_download_126nv_423",
                href: n,
                download: t ? t.name : "",
                title: "ഡൗൺലോഡ്",
                onClick: this.onDownload
            }, i.h("svg", {
                class: "_download-blobs_126nv_491",
                viewBox: "0 0 89.6 86.9"
            }, i.h("title", null, "ഡൗൺലോഡ്"), i.h("path", {
                d: "M27.3 72c-8-4-15.6-12.3-16.9-21-1.2-8.7 4-17.8 10.5-26s14.4-15.6 24-16 21.2 6 28.6 16.5c7.4 10.5 10.8 25 6.6 34S64.1 71.8 54 73.6c-10.2 2-18.7 2.3-26.7-1.6z"
            }), i.h("path", {
                d: "M19.8 24.8c4.3-7.8 13-15 21.8-15.7 8.7-.8 17.5 4.8 25.4 11.8 7.8 6.9 14.8 15.2 14.7 24.9s-7.1 20.7-18 27.6c-10.8 6.8-25.5 9.5-34.2 4.8S18.1 61.6 16.7 51.4c-1.3-10.3-1.3-18.8 3-26.6z"
            })), i.h("div", {
                class: "_download-icon_126nv_515"
            }, i.h(re, null)), a && i.h("loading-spinner", null)))
        }
    }
    const jt = ["avifDecode", "jxlDecode", "webpDecode", "wp2Decode", "avifEncode", "jxlEncode", "mozjpegEncode", "oxipngEncode", "webpEncode", "wp2Encode", "rotate", "quantize", "resize"];
    class Vt {
        constructor() {
            this._queue = Promise.resolve()
        }
        _terminateWorker() {
            this._worker && (this._worker.terminate(), this._worker = void 0, this._workerApi = void 0)
        }
        _startWorker() {
            this._worker = new Worker("/js/features-worker-89e5e6c0.js"), this._workerApi = n.wrap(this._worker)
        }
    }
    for (const e of jt) Vt.prototype[e] = function(t, ...i) {
        return this._queue = this._queue.catch(() => {}).then(async () => {
            if (t.aborted) throw new DOMException("AbortError", "AbortError");
            clearTimeout(this._workerTimeout), this._worker || this._startWorker();
            const n = () => this._terminateWorker();
            return t.addEventListener("abort", n), k(t, this._workerApi[e](...i)).finally(() => {
                t.removeEventListener("abort", n), this._workerTimeout = setTimeout(() => {
                    this._terminateWorker()
                }, 1e4)
            })
        }), this._queue
    };
    const Ut = new Map([
        ["avif", "--avif"],
        ["jxl", "--jxl"],
        ["mozJPEG", "--mozjpeg"],
        ["oxiPNG", "--oxipng"],
        ["webP", "--webp"],
        ["wp2", "--wp2"]
    ]);

    function Qt(e) {
        return "'" + JSON.stringify(e) + "'"
    }
    async function Nt(e, t, i) {
        z(e);
        const n = await k(e, async function(e) {
                const t = await g(e.slice(0, 16)),
                    i = Array.from(new Uint8Array(t)).map(e => String.fromCodePoint(e)).join("");
                for (const [e, t] of m)
                    if (e.test(i)) return t;
                return ""
            }(t)),
            s = await k(e, function(e) {
                if (!_.has(e)) {
                    const t = (async () => {
                        const t = document.createElement("picture"),
                            i = document.createElement("img"),
                            n = document.createElement("source");
                        return n.srcset = "data:,x", n.type = e, t.append(n, i), await 0, !!i.currentSrc
                    })();
                    _.set(e, t)
                }
                return _.get(e)
            }(n));
        try {
            if (!s) {
                if ("image/avif" === n) return await i.avifDecode(e, t);
                if ("image/webp" === n) return await i.webpDecode(e, t);
                if ("image/jxl" === n) return await i.jxlDecode(e, t);
                if ("image/webp2" === n) return await i.wp2Decode(e, t)
            }
            return await f(e, t, n)
        } catch (e) {
            if (e instanceof Error && "AbortError" === e.name) throw e;
            throw console.log(e), Error("ചിത്രം ഡീകോഡ് ചെയ്യാൻ സാധിക്കുന്നില്ല")
        }
    }
    async function Gt(e, t) {
        z(e);
        const i = new DOMParser,
            n = await k(e, function(e) {
                return new Response(e).text()
            }(t)),
            s = i.parseFromString(n, "image/svg+xml"),
            o = s.documentElement;
        if (o.hasAttribute("width") && o.hasAttribute("height")) return v(t);
        const a = o.getAttribute("viewBox");
        if (null === a) throw Error("SVG must have width/height or viewBox");
        const r = a.split(/\s+/);
        o.setAttribute("width", r[2]), o.setAttribute("height", r[3]);
        const l = (new XMLSerializer).serializeToString(s);
        return k(e, v(new Blob([l], {
            type: "image/svg+xml"
        })))
    }
    const Yt = document.title;

    function Wt(e) {
        const {
            loading: t,
            filename: i
        } = e;
        let n = "";
        t && (n += "⏳ "), i && (n += i + " - "), n += Yt, document.title = n
    }
    class Jt extends i.d {
        constructor(t) {
            super(t), this.widthQuery = window.matchMedia("(max-width: 599px)"), this.state = {
                source: void 0,
                loading: !1,
                preprocessorState: Ne,
                sides: [{
                    latestSettings: {
                        processorState: Qe,
                        encoderState: void 0
                    },
                    loading: !1
                }, {
                    latestSettings: {
                        processorState: Qe,
                        encoderState: {
                            type: "mozJPEG",
                            options: Ue.mozJPEG.meta.defaultOptions
                        }
                    },
                    loading: !1
                }],
                mobileView: this.widthQuery.matches
            }, this.encodeCache = new It, this.workerBridges = [new Vt, new Vt], this.mainAbortController = new AbortController, this.sideAbortControllers = [new AbortController, new AbortController], this.onMobileWidthChange = () => {
                this.setState({
                    mobileView: this.widthQuery.matches
                })
            }, this.onEncoderTypeChange = (e, t) => {
                this.setState({
                    sides: bt(this.state.sides, e + ".latestSettings.encoderState", "identity" === t ? void 0 : {
                        type: t,
                        options: Ue[t].meta.defaultOptions
                    })
                })
            }, this.onProcessorOptionsChange = (e, t) => {
                this.setState({
                    sides: bt(this.state.sides, e + ".latestSettings.processorState", t)
                })
            }, this.onEncoderOptionsChange = (e, t) => {
                this.setState({
                    sides: bt(this.state.sides, e + ".latestSettings.encoderState.options", t)
                })
            }, this.onCopyToOtherClick = async e => {
                const t = e ? 0 : 1,
                    i = this.state.sides[t],
                    n = {
                        ...this.state.sides[e]
                    };
                n.file && (n.downloadUrl = URL.createObjectURL(n.file)), this.setState({
                    sides: bt(this.state.sides, t, n)
                });
                "undo" === await this.props.showSnack("ക്രമീകരണങ്ങൾ പകർത്തി", {
                    timeout: 5e3,
                    actions: ["തിരിച്ചാക്കുക", "ഒഴിവാക്കുക"]
                }) && this.setState({
                    sides: bt(this.state.sides, t, i)
                })
            }, this.onPreprocessorChange = async e => {
                if (!this.state.source) return;
                const t = this.state.preprocessorState.rotate.rotate % 180 != e.rotate.rotate % 180;
                this.setState(i => ({
                    loading: !0,
                    preprocessorState: e,
                    sides: t ? i.sides.map(e => {
                        const t = e.latestSettings.processorState.resize;
                        return ft(e, "latestSettings.processorState.resize", {
                            width: t.height,
                            height: t.width
                        })
                    }) : i.sides
                }))
            }, this.onCopyCliClick = async e => {
                try {
                    const t = function(e, t) {
                        if (!Ut.has(e.type)) throw Error(`Encoder ${e.type} CLI-യിൽ പിന്തുണയ്കുന്നില്ല`);
                        return ["npx", "@squoosh/cli", ...t.resize.enabled ? ["--resize", Qt(t.resize)] : [], ...t.quantize.enabled ? ["--quant", Qt(t.quantize)] : [], Ut.get(e.type), Qt(e.options)].join(" ")
                    }(this.state.sides[e].latestSettings.encoderState, this.state.sides[e].latestSettings.processorState);
                    await navigator.clipboard.writeText(t);
                    "usage" === await this.props.showSnack("CLI കമാൻഡ് ക്ലിപ്ബോർഡിലേക്ക് പകർത്തി", {
                        timeout: 8e3,
                        actions: ["ഉപയോഗം", "ഒഴിവാക്കുക"]
                    }) && open("https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli")
                } catch (e) {
                    this.props.showSnack(String(e))
                }
            }, this.activeSideJobs = [void 0, void 0], this.widthQuery.addListener(this.onMobileWidthChange), this.sourceFile = t.file, this.queueUpdateImage({
                immediate: !0
            }), e("./sw-bridge-113d10b4").then(({
                mainAppLoaded: e
            }) => e())
        }
        componentWillReceiveProps(e) {
            e.file !== this.props.file && (this.sourceFile = e.file, this.queueUpdateImage({
                immediate: !0
            }))
        }
        componentWillUnmount() {
            Wt({
                loading: !1
            }), this.widthQuery.removeListener(this.onMobileWidthChange), this.mainAbortController.abort();
            for (const e of this.sideAbortControllers) e.abort()
        }
        componentDidUpdate(e, t) {
            var i;
            const n = t.loading || t.sides[0].loading || t.sides[1].loading,
                s = this.state.loading || this.state.sides[0].loading || this.state.sides[1].loading,
                o = t.source !== this.state.source;
            (n !== s || o) && Wt({
                loading: s,
                filename: null === (i = this.state.source) || void 0 === i ? void 0 : i.file.name
            }), this.queueUpdateImage()
        }
        queueUpdateImage({
            immediate: e
        } = {}) {
            clearTimeout(this.updateImageTimeout), e ? this.updateImage() : this.updateImageTimeout = setTimeout(() => this.updateImage(), 100)
        }
        async updateImage() {
            const e = this.state,
                t = this.activeMainJob || {
                    file: e.source && e.source.file,
                    preprocessorState: e.encodedPreprocessorState
                },
                i = e.sides.map((e, t) => this.activeSideJobs[t] || {
                    processorState: e.encodedSettings && e.encodedSettings.processorState,
                    encoderState: e.encodedSettings && e.encodedSettings.encoderState
                }),
                n = {
                    file: this.sourceFile,
                    preprocessorState: e.preprocessorState
                },
                s = e.sides.map(e => ({
                    processorState: e.latestSettings.encoderState ? e.latestSettings.processorState : Qe,
                    encoderState: e.latestSettings.encoderState
                })),
                o = t.file != n.file,
                a = o || t.preprocessorState !== n.preprocessorState,
                r = i.map((e, t) => {
                    const i = a || !e.processorState || !!e.encoderState != !!s[t].encoderState || ! function(e, t) {
                        if (e === t) return !0;
                        for (const i of Object.keys(e))
                            if ((e[i].enabled || t[i].enabled) && e !== t) return !1;
                        return !0
                    }(e.processorState, s[t].processorState);
                    return {
                        processing: i,
                        encoding: i || e.encoderState !== s[t].encoderState
                    }
                });
            let l = !1;
            (o || a) && (this.mainAbortController.abort(), this.mainAbortController = new AbortController, l = !0, this.activeMainJob = n);
            for (const [e, t] of r.entries())(t.processing || t.encoding) && (this.sideAbortControllers[e].abort(), this.sideAbortControllers[e] = new AbortController, l = !0, this.activeSideJobs[e] = s[e]);
            if (!l) return;
            const h = this.mainAbortController.signal,
                p = this.sideAbortControllers.map(e => e.signal);
            let d, u, _;
            if (o) try {
                z(h), this.setState({
                    source: void 0,
                    loading: !0
                }), n.file.type.startsWith("image/svg+xml") ? (u = await Gt(h, n.file), d = c(u)) : d = await Nt(h, n.file, this.workerBridges[0]), this.setState(e => {
                    if (h.aborted) return {};
                    return {
                        sides: e.sides.map(e => ft(e, "latestSettings.processorState.resize", {
                            width: d.width,
                            height: d.height,
                            method: u ? "vector" : "lanczos3",
                            enabled: !1
                        }))
                    }
                })
            } catch (e) {
                if (e instanceof Error && "AbortError" === e.name) return;
                throw this.props.showSnack("Source decoding error: " + e), e
            } else({
                decoded: d,
                vectorImage: u
            } = e.source);
            if (a) try {
                z(h), this.setState({
                    loading: !0
                });
                const e = await async function(e, t, i, n) {
                    z(e);
                    let s = t;
                    return 0 !== i.rotate.rotate && (s = await n.rotate(e, s, i.rotate)), s
                }(h, d, n.preprocessorState, this.workerBridges[0]);
                _ = {
                    decoded: d,
                    vectorImage: u,
                    preprocessed: e,
                    file: n.file
                }, this.setState(t => {
                    if (h.aborted) return {};
                    let i = {
                        ...t,
                        loading: !1,
                        source: _,
                        encodedPreprocessorState: n.preprocessorState,
                        sides: t.sides.map(t => {
                            t.downloadUrl && URL.revokeObjectURL(t.downloadUrl);
                            return {
                                ...t,
                                data: e,
                                processed: void 0,
                                encodedSettings: void 0
                            }
                        })
                    };
                    return i = function(e) {
                        let t = {
                            ...e
                        };
                        for (const i of [0, 1]) {
                            const n = e.sides[i].downloadUrl;
                            n && URL.revokeObjectURL(n), t = ft(e, "sides." + i, {
                                preprocessed: void 0,
                                file: void 0,
                                downloadUrl: void 0,
                                data: void 0,
                                encodedSettings: void 0
                            })
                        }
                        return t
                    }(i), i
                })
            } catch (e) {
                if (e instanceof Error && "AbortError" === e.name) return;
                throw this.setState({
                    loading: !1
                }), this.props.showSnack("Preprocessing error: " + e), e
            } else _ = e.source;
            this.activeMainJob = void 0, r.forEach(async (t, i) => {
                try {
                    if (!t.encoding) return;
                    const n = p[i],
                        o = s[i],
                        a = this.workerBridges[i];
                    let r, l, h = void 0;
                    if (o.encoderState) {
                        const s = this.encodeCache.match(_.preprocessed, o.processorState, o.encoderState);
                        s ? ({
                            file: r,
                            processed: h,
                            data: l
                        } = s) : (this.setState(e => {
                            if (n.aborted) return {};
                            return {
                                sides: ft(e.sides, i, {
                                    loading: !0
                                })
                            }
                        }), t.processing ? (h = await async function(e, t, i, n) {
                            z(e);
                            let s = t.preprocessed;
                            return i.resize.enabled && (s = await St(e, t, i.resize, n)), i.quantize.enabled && (s = await n.quantize(e, s, i.quantize)), s
                        }(n, _, o.processorState, a), this.setState(e => {
                            if (n.aborted) return {};
                            const t = e.sides[i],
                                s = {
                                    ...t,
                                    processed: h,
                                    data: h,
                                    encodedSettings: {
                                        ...t.encodedSettings,
                                        processorState: o.processorState
                                    }
                                };
                            return {
                                sides: bt(e.sides, i, s)
                            }
                        })) : h = e.sides[i].processed, r = await async function(e, t, i, n, s) {
                            z(e);
                            const o = Ue[i.type],
                                a = await o.encode(e, s, t, i.options),
                                r = o.meta.mimeType;
                            return new File([a], n.replace(/.[^.]*$/, "." + o.meta.extension), {
                                type: r
                            })
                        }(n, h, o.encoderState, _.file.name, a), l = await Nt(n, r, a), this.encodeCache.add({
                            data: l,
                            processed: h,
                            file: r,
                            preprocessed: _.preprocessed,
                            encoderState: o.encoderState,
                            processorState: o.processorState
                        }))
                    } else r = _.file, l = _.preprocessed;
                    this.setState(e => {
                        if (n.aborted) return {};
                        const t = e.sides[i];
                        t.downloadUrl && URL.revokeObjectURL(t.downloadUrl);
                        const s = {
                            ...t,
                            data: l,
                            file: r,
                            downloadUrl: URL.createObjectURL(r),
                            loading: !1,
                            processed: h,
                            encodedSettings: {
                                processorState: o.processorState,
                                encoderState: o.encoderState
                            }
                        };
                        return {
                            sides: bt(e.sides, i, s)
                        }
                    }), this.activeSideJobs[i] = void 0
                } catch (e) {
                    if (e instanceof Error && "AbortError" === e.name) return;
                    throw this.setState(e => ({
                        sides: ft(e.sides, i, {
                            loading: !1
                        })
                    })), this.props.showSnack("Processing error: " + e), e
                }
            })
        }
        render({
            onBack: e
        }, {
            loading: t,
            sides: n,
            source: a,
            mobileView: r,
            preprocessorState: l
        }) {
            const [h, c] = n, [p, d] = n.map(e => e.data), u = n.map((e, t) => i.h(Pt, {
                index: t,
                source: a,
                mobileView: r,
                processorState: e.latestSettings.processorState,
                encoderState: e.latestSettings.encoderState,
                onEncoderTypeChange: this.onEncoderTypeChange,
                onEncoderOptionsChange: this.onEncoderOptionsChange,
                onProcessorOptionsChange: this.onProcessorOptionsChange,
                onCopyCliClick: this.onCopyCliClick,
                onCopyToOtherSideClick: this.onCopyToOtherClick
            })), _ = n.map((e, n) => i.h(Ft, {
                downloadUrl: e.downloadUrl,
                imageFile: e.file,
                source: a,
                loading: t || e.loading,
                flipSide: r || 1 === n,
                typeLabel: e.latestSettings.encoderState ? Ue[e.latestSettings.encoderState.type].meta.label : "യഥാർത്ഥ ചിത്രം"
            })), g = h.encodedSettings || h.latestSettings, m = c.encodedSettings || c.latestSettings, v = g.processorState.resize.enabled && "contain" === g.processorState.resize.fitMethod, f = m.processorState.resize.enabled && "contain" === m.processorState.resize.fitMethod;
            return i.h("div", {
                class: "_compress_9btcn_1"
            }, i.h(wt, {
                source: a,
                mobileView: r,
                leftCompressed: p,
                rightCompressed: d,
                leftImgContain: v,
                rightImgContain: f,
                preprocessorState: l,
                onPreprocessorChange: this.onPreprocessorChange
            }), i.h("button", {
                class: "_back_9btcn_203 unbutton",
                onClick: e
            }, i.h("svg", {
                viewBox: "0 0 61 53.3"
            }, i.h("title", null, "Back"), i.h("path", {
                class: "_back-blob_9btcn_245",
                d: "M0 25.6c-.5-7.1 4.1-14.5 10-19.1S23.4.1 32.2 0c8.8 0 19 1.6 24.4 8s5.6 17.8 1.7 27a29.7 29.7 0 01-20.5 18c-8.4 1.5-17.3-2.6-24.5-8S.5 32.6.1 25.6z"
            }), i.h("path", {
                class: "_back-x_9btcn_255",
                d: "M41.6 17.1l-2-2.1-8.3 8.2-8.2-8.2-2 2 8.2 8.3-8.3 8.2 2.1 2 8.2-8.1 8.3 8.2 2-2-8.2-8.3z"
            }))), r ? i.h("div", {
                class: "_options_9btcn_43"
            }, i.h("multi-panel", {
                class: "_multi-panel_9btcn_153",
                "open-one-only": !0
            }, i.h("div", {
                class: s
            }, _[0]), i.h("div", {
                class: s
            }, u[0]), i.h("div", {
                class: o
            }, _[1]), i.h("div", {
                class: o
            }, u[1]))) : [i.h("div", {
                class: "_options-1_9btcn_85 _options_9btcn_43 _options-1-theme_9btcn_85",
                key: "options1"
            }, u[0], _[0]), i.h("div", {
                class: "_options-2_9btcn_107 _options_9btcn_43 _options-2-theme_9btcn_107",
                key: "options2"
            }, u[1], _[1])])
        }
    }
    t.default = Jt
}));