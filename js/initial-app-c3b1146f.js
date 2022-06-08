if (!self.define) {
    let e = {};
    const t = (t, n) => (t = t.startsWith(location.origin) ? t : new URL(t + ".js", n).href, e[t] || new Promise(e => {
        if ("document" in self) {
            const n = document.createElement("link");
            n.rel = "preload", n.as = "script", n.href = t, n.onload = () => {
                const n = document.createElement("script");
                n.src = t, n.onload = e, document.head.appendChild(n)
            }, document.head.appendChild(n)
        } else self.nextDefineUri = t, importScripts(t), e()
    }).then(() => {
        let n = e[t];
        if (!n) throw new Error(`Module ${t} didn’t register its module`);
        return n
    }));
    self.define = (n, i) => {
        const o = self.nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
        if (e[o]) return;
        let s = {};
        const r = e => t(e, o),
            a = {
                module: {
                    uri: o
                },
                exports: s,
                require: r
            };
        e[o] = Promise.resolve().then(() => Promise.all(n.map(e => a[e] || r(e)))).then(e => (i(...e), s))
    }
}
define(["require", "exports"], (function (e, t) {
    var n, i, o, s, r, a = {},
        l = [],
        c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

    function _(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function d(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function p(e, t, n) {
        var i, o, s, r = arguments,
            a = {};
        for (s in t) "key" == s ? i = t[s] : "ref" == s ? o = t[s] : a[s] = t[s];
        if (arguments.length > 3)
            for (n = [n], s = 3; s < arguments.length; s++) n.push(r[s]);
        if (null != n && (a.children = n), "function" == typeof e && null != e.defaultProps)
            for (s in e.defaultProps) void 0 === a[s] && (a[s] = e.defaultProps[s]);
        return h(e, a, i, o, null)
    }

    function h(e, t, i, o, s) {
        var r = {
            type: e,
            props: t,
            key: i,
            ref: o,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: s
        };
        return null == s && (r.__v = r), null != n.vnode && n.vnode(r), r
    }

    function u(e) {
        return e.children
    }

    function f(e, t) {
        this.props = e, this.context = t
    }

    function m(e, t) {
        if (null == t) return e.__ ? m(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? m(e) : null
    }

    function g(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                } return g(e)
        }
    }

    function v(e) {
        (!e.__d && (e.__d = !0) && i.push(e) && !b.__r++ || s !== n.debounceRendering) && ((s = n.debounceRendering) || o)(b)
    }

    function b() {
        for (var e; b.__r = i.length;) e = i.sort((function (e, t) {
            return e.__v.__b - t.__v.__b
        })), i = [], e.some((function (e) {
            var t, n, i, o, s, r, a;
            e.__d && (r = (s = (t = e).__v).__e, (a = t.__P) && (n = [], (i = _({}, s)).__v = i, o = C(a, s, i, t.__n, void 0 !== a.ownerSVGElement, null != s.__h ? [r] : null, n, null == r ? m(s) : r, s.__h), A(n, s), o != r && g(s)))
        }))
    }

    function y(e, t, n, i, o, s, r, c, _, p) {
        var f, g, v, b, y, D, k, E = i && i.__k || l,
            F = E.length;
        for (_ == a && (_ = null != r ? r[0] : F ? m(i, 0) : null), n.__k = [], f = 0; f < t.length; f++)
            if (null != (b = n.__k[f] = null == (b = t[f]) || "boolean" == typeof b ? null : "string" == typeof b || "number" == typeof b ? h(null, b, null, null, b) : Array.isArray(b) ? h(u, {
                children: b
            }, null, null, null) : null != b.__e || null != b.__c ? h(b.type, b.props, b.key, null, b.__v) : b)) {
                if (b.__ = n, b.__b = n.__b + 1, null === (v = E[f]) || v && b.key == v.key && b.type === v.type) E[f] = void 0;
                else
                    for (g = 0; g < F; g++) {
                        if ((v = E[g]) && b.key == v.key && b.type === v.type) {
                            E[g] = void 0;
                            break
                        }
                        v = null
                    }
                y = C(e, b, v = v || a, o, s, r, c, _, p), (g = b.ref) && v.ref != g && (k || (k = []), v.ref && k.push(v.ref, null, b), k.push(g, b.__c || y, b)), null != y ? (null == D && (D = y), _ = w(e, b, v, E, r, y, _), p || "option" != n.type ? "function" == typeof n.type && (n.__d = _) : e.value = "") : _ && v.__e == _ && _.parentNode != e && (_ = m(v))
            } if (n.__e = D, null != r && "function" != typeof n.type)
            for (f = r.length; f--;) null != r[f] && d(r[f]);
        for (f = F; f--;) null != E[f] && B(E[f], E[f]);
        if (k)
            for (f = 0; f < k.length; f++) S(k[f], k[++f], k[++f])
    }

    function w(e, t, n, i, o, s, r) {
        var a, l, c;
        if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
        else if (o == n || s != r || null == s.parentNode) e: if (null == r || r.parentNode !== e) e.appendChild(s), a = null;
        else {
            for (l = r, c = 0;
                (l = l.nextSibling) && c < i.length; c += 2)
                if (l == s) break e;
            e.insertBefore(s, r), a = r
        } return void 0 !== a ? a : s.nextSibling
    }

    function D(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || c.test(t) ? n : n + "px"
    }

    function k(e, t, n, i, o) {
        var s, r, a;
        if (o && "className" == t && (t = "class"), "style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof i && (e.style.cssText = i = ""), i)
                    for (t in i) n && t in n || D(e.style, t, "");
                if (n)
                    for (t in n) i && n[t] === i[t] || D(e.style, t, n[t])
            }
        else "o" === t[0] && "n" === t[1] ? (s = t !== (t = t.replace(/Capture$/, "")), (r = t.toLowerCase()) in e && (t = r), t = t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, a = s ? F : E, n ? i || e.addEventListener(t, a, s) : e.removeEventListener(t, a, s)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && !o && t in e ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/xlink:?/, "")) ? null == n || !1 === n ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), n) : null == n || !1 === n && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, n))
    }

    function E(e) {
        this.l[e.type + !1](n.event ? n.event(e) : e)
    }

    function F(e) {
        this.l[e.type + !0](n.event ? n.event(e) : e)
    }

    function x(e, t, n) {
        var i, o;
        for (i = 0; i < e.__k.length; i++)(o = e.__k[i]) && (o.__ = e, o.__e && ("function" == typeof o.type && o.__k.length > 1 && x(o, t, n), t = w(n, o, o, e.__k, null, o.__e, t), "function" == typeof e.type && (e.__d = t)))
    }

    function C(e, t, i, o, s, r, a, l, c) {
        var d, p, h, m, g, v, b, w, D, k, E, F = t.type;
        if (void 0 !== t.constructor) return null;
        null != i.__h && (c = i.__h, l = t.__e = i.__e, t.__h = null, r = [l]), (d = n.__b) && d(t);
        try {
            e: if ("function" == typeof F) {
                if (w = t.props, D = (d = F.contextType) && o[d.__c], k = d ? D ? D.props.value : d.__ : o, i.__c ? b = (p = t.__c = i.__c).__ = p.__E : ("prototype" in F && F.prototype.render ? t.__c = p = new F(w, k) : (t.__c = p = new f(w, k), p.constructor = F, p.render = L), D && D.sub(p), p.props = w, p.state || (p.state = {}), p.context = k, p.__n = o, h = p.__d = !0, p.__h = []), null == p.__s && (p.__s = p.state), null != F.getDerivedStateFromProps && (p.__s == p.state && (p.__s = _({}, p.__s)), _(p.__s, F.getDerivedStateFromProps(w, p.__s))), m = p.props, g = p.state, h) null == F.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                else {
                    if (null == F.getDerivedStateFromProps && w !== m && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, k), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, k) || t.__v === i.__v) {
                        p.props = w, p.state = p.__s, t.__v !== i.__v && (p.__d = !1), p.__v = t, t.__e = i.__e, t.__k = i.__k, p.__h.length && a.push(p), x(t, l, e);
                        break e
                    }
                    null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, k), null != p.componentDidUpdate && p.__h.push((function () {
                        p.componentDidUpdate(m, g, v)
                    }))
                }
                p.context = k, p.props = w, p.state = p.__s, (d = n.__r) && d(t), p.__d = !1, p.__v = t, p.__P = e, d = p.render(p.props, p.state, p.context), p.state = p.__s, null != p.getChildContext && (o = _(_({}, o), p.getChildContext())), h || null == p.getSnapshotBeforeUpdate || (v = p.getSnapshotBeforeUpdate(m, g)), E = null != d && d.type == u && null == d.key ? d.props.children : d, y(e, Array.isArray(E) ? E : [E], t, i, o, s, r, a, l, c), p.base = t.__e, t.__h = null, p.__h.length && a.push(p), b && (p.__E = p.__ = null), p.__e = !1
            } else null == r && t.__v === i.__v ? (t.__k = i.__k, t.__e = i.__e) : t.__e = z(i.__e, t, i, o, s, r, a, c);
            (d = n.diffed) && d(t)
        }
        catch (e) {
            t.__v = null, (c || null != r) && (t.__e = l, t.__h = !!c, r[r.indexOf(l)] = null), n.__e(e, t, i)
        }
        return t.__e
    }

    function A(e, t) {
        n.__c && n.__c(t, e), e.some((function (t) {
            try {
                e = t.__h, t.__h = [], e.some((function (e) {
                    e.call(t)
                }))
            } catch (e) {
                n.__e(e, t.__v)
            }
        }))
    }

    function z(e, t, n, i, o, s, r, c) {
        var _, d, p, h, u, f = n.props,
            m = t.props;
        if (o = "svg" === t.type || o, null != s)
            for (_ = 0; _ < s.length; _++)
                if (null != (d = s[_]) && ((null === t.type ? 3 === d.nodeType : d.localName === t.type) || e == d)) {
                    e = d, s[_] = null;
                    break
                } if (null == e) {
                    if (null === t.type) return document.createTextNode(m);
                    e = o ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, m.is && {
                        is: m.is
                    }), s = null, c = !1
                }
        if (null === t.type) f === m || c && e.data === m || (e.data = m);
        else {
            if (null != s && (s = l.slice.call(e.childNodes)), p = (f = n.props || a).dangerouslySetInnerHTML, h = m.dangerouslySetInnerHTML, !c) {
                if (null != s)
                    for (f = {}, u = 0; u < e.attributes.length; u++) f[e.attributes[u].name] = e.attributes[u].value;
                (h || p) && (h && (p && h.__html == p.__html || h.__html === e.innerHTML) || (e.innerHTML = h && h.__html || ""))
            } (function (e, t, n, i, o) {
                var s;
                for (s in n) "children" === s || "key" === s || s in t || k(e, s, null, n[s], i);
                for (s in t) o && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || k(e, s, t[s], n[s], i)
            })(e, m, f, o, c), h ? t.__k = [] : (_ = t.props.children, y(e, Array.isArray(_) ? _ : [_], t, n, i, "foreignObject" !== t.type && o, s, r, a, c)), c || ("value" in m && void 0 !== (_ = m.value) && (_ !== e.value || "progress" === t.type && !_) && k(e, "value", _, f.value, !1), "checked" in m && void 0 !== (_ = m.checked) && _ !== e.checked && k(e, "checked", _, f.checked, !1))
        }
        return e
    }

    function S(e, t, i) {
        try {
            "function" == typeof e ? e(t) : e.current = t
        } catch (e) {
            n.__e(e, i)
        }
    }

    function B(e, t, i) {
        var o, s, r;
        if (n.unmount && n.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || S(o, null, t)), i || "function" == typeof e.type || (i = null != (s = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) {
            if (o.componentWillUnmount) try {
                o.componentWillUnmount()
            } catch (e) {
                n.__e(e, t)
            }
            o.base = o.__P = null
        }
        if (o = e.__k)
            for (r = 0; r < o.length; r++) o[r] && B(o[r], t, i);
        null != s && d(s)
    }

    function L(e, t, n) {
        return this.constructor(e, n)
    }

    function M(e, t) {
        const n = "$$ref_" + t;
        let i = e[n];
        return i || (i = e[n] = n => {
            e[t] = n
        }), i
    }
    n = {
        __e: function (e, t) {
            for (var n, i, o, s = t.__h; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((i = n.constructor) && null != i.getDerivedStateFromError && (n.setState(i.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return t.__h = s, n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, f.prototype.setState = function (e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this.__h.push(t), v(this))
    }, f.prototype.forceUpdate = function (e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), v(this))
    }, f.prototype.render = u, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, b.__r = 0, r = a;

    function P(e) {
        const t = document.createElement("style");
        t.textContent = e, document.head.append(t)
    }

    function I(e, t, n) {
        const i = Array.from(e);
        let o;
        if ("" === t) return o = i.filter(e => "file" === e.kind), n ? o : [o[0]];
        const s = t.toLowerCase().split(",").map(e => e.split("/").map(e => e.trim())).filter(e => 2 === e.length);
        return o = o = i.filter(e => {
            if ("file" !== e.kind) return !1;
            const [t, n] = e.type.toLowerCase().split("/").map(e => e.trim());
            for (const [e, i] of s)
                if (t === e && ("*" === i || n === i)) return !0;
            return !1
        }), !1 === n && (o = [o[0]]), o
    }

    function U(e, t, n) {
        const i = [];
        return I(e.items, t, n).forEach(e => {
            const t = e.getAsFile();
            null !== t && i.push(t)
        }), i
    }
    P('._app_13ky7_1{position:absolute;left:0;top:0;contain:strict}._app_13ky7_1,._drop_13ky7_21{width:100%;height:100%;overflow:hidden}._drop_13ky7_21{touch-action:none}._drop_13ky7_21:after{content:"";position:absolute;display:block;left:10px;top:10px;right:10px;bottom:10px;background-color:rgba(0,0,0,.1);border:2px dashed #fff;border-color:var(--orange);border-radius:10px;opacity:0;transform:scale(.95);transition:all .2s ease-in;transition-property:transform,opacity;pointer-events:none}._drop_13ky7_21.drop-valid:after{opacity:1;transform:scale(1);transition-timing-function:ease-out}._option-pair_13ky7_89{display:flex;justify-content:flex-end;width:100%;height:100%}._option-pair_13ky7_89._horizontal_13ky7_101{justify-content:space-between;align-items:flex-end}._option-pair_13ky7_89._vertical_13ky7_111{flex-direction:column}._app-loader_13ky7_121{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);--size:225px;--stroke-width:26px}');
    class T extends Event {
        constructor(e, t) {
            var n;
            super(e, t), this instanceof (n = T) || Object.setPrototypeOf(this, n.prototype), this._files = t.files, this._action = t.action
        }
        get action() {
            return this._action
        }
        get files() {
            return this._files
        }
    }
    class O extends HTMLElement {
        constructor() {
            super(), this._dragEnterCount = 0, this._onDragEnter = this._onDragEnter.bind(this), this._onDragLeave = this._onDragLeave.bind(this), this._onDrop = this._onDrop.bind(this), this._onPaste = this._onPaste.bind(this), this.addEventListener("dragover", e => e.preventDefault()), this.addEventListener("drop", this._onDrop), this.addEventListener("dragenter", this._onDragEnter), this.addEventListener("dragend", () => this._reset()), this.addEventListener("dragleave", this._onDragLeave), this.addEventListener("paste", this._onPaste)
        }
        get accept() {
            return this.getAttribute("accept") || ""
        }
        set accept(e) {
            this.setAttribute("accept", e)
        }
        get multiple() {
            return this.getAttribute("multiple")
        }
        set multiple(e) {
            this.setAttribute("multiple", e || "")
        }
        _onDragEnter(e) {
            if (this._dragEnterCount += 1, this._dragEnterCount > 1) return;
            if (null === e.dataTransfer) return void this.classList.add("drop-invalid");
            const t = I(e.dataTransfer.items, this.accept, null !== this.multiple);
            this.classList.add(e.dataTransfer && e.dataTransfer.items.length && void 0 === t[0] ? "drop-invalid" : "drop-valid")
        }
        _onDragLeave() {
            this._dragEnterCount -= 1, 0 === this._dragEnterCount && this._reset()
        }
        _onDrop(e) {
            if (e.preventDefault(), null === e.dataTransfer) return;
            this._reset();
            const t = U(e.dataTransfer, this.accept, null !== this.multiple);
            void 0 !== t && this.dispatchEvent(new T("filedrop", {
                action: "drop",
                files: t
            }))
        }
        _onPaste(e) {
            if (!e.clipboardData) return;
            const t = U(e.clipboardData, this.accept, void 0 !== this.multiple);
            void 0 !== t && this.dispatchEvent(new T("filedrop", {
                action: "paste",
                files: t
            }))
        }
        _reset() {
            this._dragEnterCount = 0, this.classList.remove("drop-valid"), this.classList.remove("drop-invalid")
        }
    }
    customElements.define("file-drop", O);
    P('snack-bar{display:block;position:fixed;left:0;bottom:0;width:100%;height:0;overflow:visible}._snackbar_on6a8_21{position:fixed;display:flex;box-sizing:border-box;left:50%;bottom:24px;width:374px;margin-left:-172px;background:#2a2a2a;border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.5);transform-origin:center;color:#eee;z-index:100;cursor:default;will-change:transform;animation:_snackbar-show_on6a8_1 .3s ease 1 forwards}._snackbar_on6a8_21[aria-hidden=true]{animation:_snackbar-hide_on6a8_1 .3s ease 1 forwards}@keyframes _snackbar-show_on6a8_1{0%{opacity:0;transform:scale(.5)}}@keyframes _snackbar-hide_on6a8_1{to{opacity:0;transform:translateY(100%)}}@media (max-width:400px){._snackbar_on6a8_21{width:100%;bottom:0;left:0;margin-left:0;border-radius:0}}._text_on6a8_109{flex:1 1 auto;padding:16px;font-size:100%}._button_on6a8_121{position:relative;flex:0 1 auto;padding:8px;height:36px;margin:auto 8px auto -8px;min-width:10em;background:none;border:none;border-radius:3px;color:#90ee90;font-weight:inherit;letter-spacing:.05em;font-size:100%;text-transform:uppercase;text-align:center;cursor:pointer;overflow:hidden;transition:background-color .2s ease;outline:none}._button_on6a8_121:hover{background-color:rgba(0,0,0,.15)}._button_on6a8_121:focus:before{content:"";position:absolute;left:50%;top:50%;width:120%;height:0;padding:0 0 120%;margin:-60% 0 0 -60%;background:hsla(0,0%,100%,.1);border-radius:50%;transform-origin:center;will-change:transform;animation:_focus-ring_on6a8_1 .3s ease-out 1 forwards;pointer-events:none}@keyframes _focus-ring_on6a8_1{0%{transform:scale(.01)}}');
    const V = HTMLElement;

    function j(e, t) {
        const {
            timeout: n = 0,
            actions: i = ["ഒഴിവാക്കുക"]
        } = t, o = document.createElement("div");
        o.className = "_snackbar_on6a8_21", o.setAttribute("aria-live", "assertive"), o.setAttribute("aria-atomic", "true"), o.setAttribute("aria-hidden", "false");
        const s = document.createElement("div");
        s.className = "_text_on6a8_109", s.textContent = e, o.appendChild(s);
        const r = new Promise(e => {
            let t;
            for (const n of i) {
                const i = document.createElement("button");
                i.className = "_button_on6a8_121", i.textContent = n, i.addEventListener("click", () => {
                    clearTimeout(t), e(n)
                }), o.appendChild(i)
            }
            n && (t = self.setTimeout(() => e(""), n))
        });
        return [o, r]
    }
    customElements.define("snack-bar", class extends V {
        constructor() {
            super(...arguments), this._snackbars = [], this._processingQueue = !1
        }
        showSnackbar(e, t = {}) {
            return new Promise(n => {
                this._snackbars.push([e, t, n]), this._processingQueue || this._processQueue()
            })
        }
        async _processQueue() {
            for (this._processingQueue = !0; this._snackbars[0];) {
                const [e, t, n] = this._snackbars[0], [i, o] = j(e, t);
                n(o), this.appendChild(i), await o, i.setAttribute("aria-hidden", "true"), await new Promise(e => {
                    i.addEventListener("animationend", () => e())
                }), i.remove(), this._snackbars.shift()
            }
            this._processingQueue = !1
        }
    });
    const N = "_spinner-circle_1x9ri_155",
        Q = "_spinner-circle-clipper_1x9ri_227";
    P("@keyframes _spinner-left-spin_1x9ri_1{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@keyframes _spinner-right-spin_1x9ri_1{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}@keyframes _spinner-fade-out_1x9ri_1{to{opacity:0}}@keyframes _spinner-container-rotate_1x9ri_1{to{transform:rotate(1turn)}}@keyframes _spinner-fill-unfill-rotate_1x9ri_1{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}loading-spinner{--size:28px;--color:#4285f4;--stroke-width:3px;--delay:300ms;pointer-events:none;display:inline-block;position:relative;width:var(--size);height:var(--size);border-color:var(--color)}loading-spinner ._spinner-circle_1x9ri_155{position:absolute;top:0;left:0;right:0;bottom:0;box-sizing:border-box;height:100%;width:200%;border:var(--stroke-width) solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%}loading-spinner ._spinner-gap-patch_1x9ri_195{position:absolute;box-sizing:border-box;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}loading-spinner ._spinner-gap-patch_1x9ri_195 ._spinner-circle_1x9ri_155{width:1000%;left:-450%}loading-spinner ._spinner-circle-clipper_1x9ri_227{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}loading-spinner ._spinner-left_1x9ri_245 ._spinner-circle_1x9ri_155{border-right-color:transparent!important;transform:rotate(129deg);animation:_spinner-left-spin_1x9ri_1 1333ms cubic-bezier(.4,0,.2,1) infinite both}loading-spinner ._spinner-right_1x9ri_257 ._spinner-circle_1x9ri_155{left:-100%;border-left-color:transparent!important;transform:rotate(-129deg);animation:_spinner-right-spin_1x9ri_1 1333ms cubic-bezier(.4,0,.2,1) infinite both}loading-spinner._spinner-fadeout_1x9ri_273{animation:_spinner-fade-out_1x9ri_1 .4s cubic-bezier(.4,0,.2,1) forwards}loading-spinner ._spinner-container_1x9ri_281{width:100%;height:100%;border-color:inherit;animation:_spinner-container-rotate_1x9ri_1 1568ms linear infinite}loading-spinner ._spinner-layer_1x9ri_299{position:absolute;width:100%;height:100%;border-color:inherit;animation:_spinner-fill-unfill-rotate_1x9ri_1 5332ms cubic-bezier(.4,0,.2,1) infinite both}");
    const q = HTMLElement;
    customElements.define("loading-spinner", class extends q {
        constructor() {
            super(...arguments), this._delayTimeout = 0
        }
        disconnectedCallback() {
            this.style.display = "none", clearTimeout(this._delayTimeout)
        }
        connectedCallback() {
            this.style.display = "none", this.innerHTML = `<div class="_spinner-container_1x9ri_281"><div class="_spinner-layer_1x9ri_299"><div class="${Q} _spinner-left_1x9ri_245"><div class="${N}"></div></div><div class="_spinner-gap-patch_1x9ri_195"><div class="${N}"></div></div><div class="${Q} _spinner-right_1x9ri_257"><div class="${N}"></div></div></div></div>`;
            const e = getComputedStyle(this).getPropertyValue("--delay").trim();
            let t = parseFloat(e);
            /\ds$/.test(e) && (t *= 1e3), this._delayTimeout = self.setTimeout(() => {
                this.style.display = ""
            }, t)
        }
    });
    const Y = "_load-img_19rbd_91",
        G = "_top-wave_19rbd_211",
        W = "_info_19rbd_249",
        H = "_info-container_19rbd_269",
        R = "_info-content_19rbd_279",
        Z = "_info-title_19rbd_319",
        J = "_info-caption_19rbd_331",
        K = "_info-text-wrapper_19rbd_365",
        X = "_info-img-wrapper_19rbd_397",
        $ = "_info-img_19rbd_397",
        ee = "_footer-link_19rbd_519",
        te = [
            [
                [-.232, -1.029, .073, -1.029, .377, -1.029],
                [.565, -1.098, .755, -.86, .945, -.622],
                [.917, -.01, .849, .286, .782, .583],
                [.85, .687, .576, .819, .302, .951],
                [-.198, 1.009, -.472, .877, -.746, .745],
                [-.98, .513, -1.048, .216, -1.116, -.08],
                [-.964, -.395, -.774, -.633, -.584, -.871]
            ],
            [
                [-.505, -1.109, -.201, -1.109, .104, -1.109],
                [.641, -.684, .831, -.446, 1.02, -.208],
                [1.041, .034, .973, .331, .905, .628],
                [.734, .794, .46, .926, .186, 1.058],
                [-.135, .809, -.409, .677, -.684, .545],
                [-.935, .404, -1.002, .108, -1.07, -.189],
                [-.883, -.402, -.693, -.64, -.503, -.878]
            ],
            [
                [-.376, -1.168, -.071, -1.168, .233, -1.168],
                [.732, -.956, .922, -.718, 1.112, -.48],
                [1.173, .027, 1.105, .324, 1.038, .621],
                [.707, .81, .433, .943, .159, 1.075],
                [-.096, 1.135, -.37, 1.003, -.644, .871],
                [-.86, .457, -.927, .161, -.995, -.136],
                [-.87, -.516, -.68, -.754, -.49, -.992]
            ],
            [
                [-.309, -.998, -.004, -.998, .3, -.998],
                [.535, -.852, .725, -.614, .915, -.376],
                [1.05, -.09, .982, .207, .915, .504],
                [.659, .807, .385, .939, .111, 1.071],
                [-.178, 1.048, -.452, .916, -.727, .784],
                [-.942, .582, -1.009, .285, -1.077, -.011],
                [-1.141, -.335, -.951, -.573, -.761, -.811]
            ]
        ];
    class ne extends f {
        componentDidMount() {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const e = this.base;
            let t = !1;
            this.observer = new IntersectionObserver((n, i) => {
                for (const o of n) {
                    if (!o.isIntersecting) return t = !0, void (e.style.opacity = "0");
                    t && (e.style.opacity = "", e.animate({
                        offset: 0,
                        opacity: "0",
                        transform: "translateY(40px)"
                    }, {
                        duration: 300,
                        easing: "ease"
                    })), i.unobserve(o.target)
                }
            }, {
                threshold: .2
            }), this.observer.observe(e)
        }
        componentWillUnmount() {
            this.observer && this.observer.disconnect()
        }
        render({
            children: e
        }) {
            return p("div", null, e)
        }
    }
    const ie = [{
        description: "Large photo",
        size: "4.7mb",
        filename: "large-photo.jpg",
        url: "/img/demo-large-photo-a6b23f7b.jpg",
        iconUrl: "/img/icon-demo-large-photo-18da387a.jpg"
    }, {
        description: "Artwork",
        size: "2.2mb",
        filename: "art.jpg",
        url: "/img/demo-artwork-c444f915.jpg",
        iconUrl: "/img/icon-demo-artwork-9eba1655.jpg"
    }, {
        description: "Device screen",
        size: "1.8mb",
        filename: "pixel3.png",
        url: "/img/demo-device-screen-b9d088e8.jpg",
        iconUrl: "/img/icon-demo-device-screen-5d52d8b9.jpg"
    }, {
        description: "SVG icon",
        size: "7.7kb",
        filename: "pappadam.svg",
        url: "/img/logo-99b7d28c.svg",
        iconUrl: "/img/icon-demo-logo-326ed9b6.png"
    }],
        oe = matchMedia("(prefers-reduced-motion: reduce)").matches ? void 0 : e("./blob-anim-c843ee1d"),
        se = "introInstallButton-Purple",
        re = navigator.clipboard && navigator.clipboard.read;
    class ae extends f {
        constructor() {
            super(...arguments), this.state = {
                showBlobSVG: !0
            }, this.installingViaButton = !1, this.onFileChange = e => {
                const t = e.target,
                    n = t.files && t.files[0];
                n && (this.fileInput.value = "", this.props.onFile(n))
            }, this.onOpenClick = () => {
                this.fileInput.click()
            }, this.onDemoClick = async (e, t) => {
                try {
                    this.setState({
                        fetchingDemoIndex: e
                    });
                    const t = ie[e],
                        n = await fetch(t.url).then(e => e.blob()),
                        i = new File([n], t.filename, {
                            type: n.type
                        });
                    this.props.onFile(i)
                } catch (e) {
                    this.setState({
                        fetchingDemoIndex: void 0
                    }), this.props.showSnack("ഡെമോ ചിത്രം എടുക്കാൻ സാധിച്ചില്ല")
                }
            }, this.onBeforeInstallPromptEvent = e => {
                e.preventDefault(), this.setState({
                    beforeInstallEvent: e
                });
                ga("send", "event", {
                    eventCategory: "pwa-install",
                    eventAction: "promo-shown",
                    nonInteraction: !0
                })
            }, this.onInstallClick = async e => {
                const t = this.state.beforeInstallEvent;
                if (!t) return;
                this.installingViaButton = !0, t.prompt();
                const {
                    outcome: n
                } = await t.userChoice;
                ga("send", "event", {
                    eventCategory: "pwa-install",
                    eventAction: "promo-clicked",
                    eventLabel: se,
                    eventValue: "accepted" === n ? 1 : 0
                }), "dismissed" === n && (this.installingViaButton = !1)
            }, this.onAppInstalled = () => {
                if (this.setState({
                    beforeInstallEvent: void 0
                }), document.hidden) return;
                const e = this.installingViaButton ? se : "browser";
                ga("send", "event", "pwa-install", "installed", e), this.installingViaButton = !1
            }, this.onPasteClick = async () => {
                let e;
                try {
                    e = await navigator.clipboard.read()
                } catch (e) {
                    return void this.props.showSnack("No permission to access clipboard")
                }
                const t = await async function (e) {
                    for (const t of e) {
                        const e = t.types.find(e => e.startsWith("image/"));
                        if (e) return t.getType(e)
                    }
                }(e);
                t ? this.props.onFile(new File([t], "image.unknown")) : this.props.showSnack("ക്ലിപ്ബോർഡിൽ ചിത്രമൊന്നുമില്ല")
            }
        }
        componentDidMount() {
            window.addEventListener("beforeinstallprompt", this.onBeforeInstallPromptEvent), window.addEventListener("appinstalled", this.onAppInstalled), oe && oe.then(e => {
                this.setState({
                    showBlobSVG: !1
                }, () => e.startBlobAnim(this.blobCanvas))
            })
        }
        componentWillUnmount() {
            window.removeEventListener("beforeinstallprompt", this.onBeforeInstallPromptEvent), window.removeEventListener("appinstalled", this.onAppInstalled)
        }
        render({ }, {
            fetchingDemoIndex: e,
            beforeInstallEvent: t,
            showBlobSVG: n
        }) {
            return p("div", {
                class: "_intro_19rbd_1 abs-fill"
            }, p("input", {
                class: "_hide_19rbd_35",
                ref: M(this, "fileInput"),
                type: "file",
                onChange: this.onFileChange
            }), p("div", {
                class: "_main_19rbd_43"
            }, p("canvas", {
                ref: M(this, "blobCanvas"),
                class: "_blob-canvas_19rbd_23 abs-fill"
            }), p("h1", {
                class: "_logo-container_19rbd_71"
            }, p("a", {
                class: "digilink",
                href: "https://www.digitalmalayali.in/",
                target: "_blank"
            }, p("img", {
                class: "_logo_19rbd_71",
                src: "data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 226 81' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(2.31963,0,0,2.31963,-255.664,-88.2794)'%3E%3Cg transform='matrix(27.2797,0,0,27.2797,152.227,59.9216)'%3E%3Cpath d='M0.706,-0.729C0.71,-0.707 0.713,-0.684 0.715,-0.661C0.717,-0.637 0.719,-0.608 0.721,-0.574C0.722,-0.54 0.723,-0.517 0.724,-0.504C0.736,-0.357 0.746,-0.198 0.755,-0.027C0.756,-0.02 0.753,-0.014 0.748,-0.009C0.743,-0.004 0.737,-0.001 0.73,-0.002C0.549,-0.011 0.368,-0.011 0.187,-0.002C0.178,-0.001 0.172,-0.005 0.168,-0.012C0.163,-0.019 0.162,-0.026 0.163,-0.034C0.167,-0.06 0.166,-0.088 0.159,-0.118C0.152,-0.149 0.138,-0.169 0.118,-0.178C0.089,-0.191 0.074,-0.177 0.073,-0.135C0.073,-0.113 0.077,-0.083 0.084,-0.046C0.086,-0.036 0.083,-0.028 0.076,-0.021C0.069,-0.015 0.061,-0.013 0.051,-0.015C0.043,-0.017 0.037,-0.023 0.036,-0.033C0.033,-0.045 0.032,-0.054 0.031,-0.061C0.029,-0.067 0.028,-0.078 0.026,-0.093C0.024,-0.108 0.023,-0.12 0.023,-0.13C0.023,-0.139 0.023,-0.151 0.024,-0.165C0.025,-0.178 0.027,-0.189 0.031,-0.198C0.035,-0.206 0.04,-0.214 0.046,-0.222C0.051,-0.23 0.059,-0.235 0.069,-0.238C0.079,-0.241 0.091,-0.241 0.104,-0.238C0.13,-0.234 0.152,-0.222 0.17,-0.202C0.187,-0.181 0.199,-0.159 0.206,-0.134C0.213,-0.109 0.216,-0.082 0.215,-0.054C0.378,-0.062 0.541,-0.062 0.704,-0.054C0.7,-0.125 0.693,-0.233 0.684,-0.376C0.679,-0.458 0.674,-0.517 0.671,-0.554L0.665,-0.633C0.665,-0.635 0.664,-0.642 0.663,-0.653C0.661,-0.664 0.659,-0.674 0.658,-0.684C0.657,-0.694 0.656,-0.704 0.657,-0.714C0.657,-0.723 0.658,-0.729 0.661,-0.73C0.652,-0.725 0.644,-0.725 0.636,-0.73C0.629,-0.735 0.625,-0.741 0.625,-0.75C0.624,-0.759 0.628,-0.766 0.636,-0.773C0.648,-0.781 0.659,-0.784 0.669,-0.781C0.679,-0.778 0.687,-0.771 0.694,-0.762C0.7,-0.753 0.704,-0.742 0.706,-0.729Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(27.2797,0,0,27.2797,173.56,59.9216)'%3E%3Cpath d='M0.095,0.014C0.097,0.028 0.091,0.036 0.077,0.038C0.063,0.039 0.053,0.034 0.048,0.022C0.047,0.02 0.046,0.018 0.046,0.015C0.043,-0.008 0.041,-0.031 0.041,-0.053C0.041,-0.075 0.043,-0.099 0.049,-0.124C0.054,-0.149 0.064,-0.171 0.079,-0.188C0.094,-0.205 0.113,-0.216 0.138,-0.221C0.158,-0.225 0.174,-0.221 0.187,-0.21C0.199,-0.198 0.206,-0.181 0.21,-0.159C0.213,-0.136 0.214,-0.115 0.214,-0.094C0.213,-0.073 0.211,-0.051 0.208,-0.029C0.248,-0.032 0.308,-0.035 0.388,-0.04C0.468,-0.044 0.528,-0.047 0.568,-0.049C0.565,-0.14 0.563,-0.21 0.561,-0.258C0.494,-0.259 0.428,-0.256 0.361,-0.249C0.354,-0.249 0.347,-0.253 0.342,-0.26C0.337,-0.267 0.335,-0.275 0.337,-0.282C0.338,-0.283 0.339,-0.286 0.341,-0.293L0.349,-0.32C0.351,-0.327 0.352,-0.332 0.353,-0.335C0.353,-0.338 0.353,-0.343 0.354,-0.349C0.355,-0.355 0.355,-0.36 0.354,-0.364C0.353,-0.367 0.353,-0.372 0.352,-0.377C0.351,-0.382 0.35,-0.386 0.347,-0.389C0.344,-0.392 0.341,-0.396 0.338,-0.399C0.324,-0.412 0.312,-0.416 0.303,-0.413C0.293,-0.41 0.287,-0.402 0.285,-0.389C0.283,-0.376 0.281,-0.363 0.28,-0.35C0.279,-0.337 0.279,-0.327 0.281,-0.32C0.282,-0.309 0.279,-0.302 0.271,-0.298C0.263,-0.294 0.255,-0.294 0.246,-0.298C0.237,-0.302 0.232,-0.309 0.231,-0.32C0.23,-0.336 0.23,-0.353 0.233,-0.37C0.235,-0.387 0.239,-0.404 0.246,-0.42C0.253,-0.436 0.263,-0.448 0.278,-0.456C0.292,-0.464 0.309,-0.466 0.329,-0.461C0.353,-0.456 0.371,-0.444 0.383,-0.427C0.395,-0.409 0.401,-0.39 0.401,-0.369C0.401,-0.347 0.399,-0.326 0.396,-0.304C0.461,-0.309 0.515,-0.311 0.559,-0.31C0.553,-0.446 0.545,-0.582 0.535,-0.719C0.534,-0.73 0.538,-0.737 0.546,-0.741C0.554,-0.745 0.562,-0.745 0.571,-0.741C0.58,-0.737 0.584,-0.73 0.585,-0.719C0.602,-0.496 0.613,-0.265 0.619,-0.027C0.619,-0.02 0.617,-0.015 0.612,-0.01C0.607,-0.005 0.601,-0.003 0.594,-0.002C0.549,0.001 0.48,0.004 0.388,0.009C0.295,0.014 0.225,0.018 0.178,0.021C0.17,0.022 0.164,0.018 0.159,0.011C0.154,0.004 0.153,-0.003 0.154,-0.011C0.163,-0.05 0.165,-0.086 0.161,-0.121C0.161,-0.122 0.161,-0.125 0.16,-0.128C0.159,-0.137 0.158,-0.143 0.157,-0.148C0.156,-0.153 0.154,-0.158 0.152,-0.163C0.149,-0.168 0.146,-0.17 0.141,-0.169C0.136,-0.168 0.129,-0.165 0.122,-0.158C0.111,-0.149 0.103,-0.139 0.098,-0.126C0.092,-0.113 0.089,-0.098 0.089,-0.081C0.088,-0.064 0.088,-0.05 0.089,-0.039C0.09,-0.028 0.091,-0.013 0.094,0.006C0.095,0.009 0.095,0.012 0.095,0.014Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(27.2797,0,0,27.2797,191.51,59.9216)'%3E%3Cpath d='M0.223,-0.286C0.245,-0.258 0.259,-0.217 0.264,-0.163C0.265,-0.136 0.262,-0.111 0.254,-0.086C0.245,-0.062 0.231,-0.042 0.212,-0.025C0.192,-0.008 0.168,-0.001 0.14,-0.002C0.119,-0.003 0.101,-0.008 0.087,-0.019C0.074,-0.03 0.065,-0.043 0.061,-0.061C0.057,-0.078 0.055,-0.095 0.055,-0.113C0.055,-0.13 0.057,-0.148 0.062,-0.166C0.064,-0.176 0.07,-0.182 0.079,-0.184C0.087,-0.186 0.096,-0.184 0.102,-0.178C0.11,-0.171 0.112,-0.163 0.11,-0.153C0.11,-0.152 0.109,-0.149 0.108,-0.141C0.106,-0.135 0.105,-0.13 0.105,-0.128C0.104,-0.125 0.103,-0.121 0.102,-0.114C0.102,-0.107 0.101,-0.102 0.102,-0.099C0.102,-0.096 0.102,-0.092 0.103,-0.086C0.104,-0.082 0.105,-0.077 0.107,-0.073C0.109,-0.069 0.112,-0.066 0.115,-0.063C0.128,-0.052 0.142,-0.049 0.158,-0.054C0.173,-0.059 0.186,-0.067 0.195,-0.08C0.21,-0.103 0.217,-0.133 0.215,-0.168C0.212,-0.203 0.203,-0.231 0.186,-0.253C0.177,-0.264 0.162,-0.28 0.14,-0.301C0.117,-0.322 0.102,-0.339 0.093,-0.352C0.073,-0.383 0.059,-0.419 0.052,-0.46C0.046,-0.491 0.043,-0.534 0.043,-0.587L0.042,-0.625C0.042,-0.63 0.042,-0.636 0.043,-0.645C0.044,-0.653 0.045,-0.66 0.046,-0.665C0.047,-0.67 0.049,-0.676 0.051,-0.683C0.054,-0.689 0.057,-0.695 0.06,-0.7C0.075,-0.725 0.099,-0.738 0.13,-0.74C0.161,-0.742 0.186,-0.732 0.206,-0.711C0.213,-0.704 0.215,-0.696 0.212,-0.687C0.209,-0.678 0.203,-0.672 0.195,-0.67C0.187,-0.667 0.179,-0.669 0.171,-0.676C0.153,-0.692 0.137,-0.696 0.122,-0.687C0.107,-0.678 0.098,-0.662 0.095,-0.641C0.094,-0.632 0.093,-0.607 0.093,-0.565C0.093,-0.5 0.102,-0.447 0.12,-0.406C0.129,-0.386 0.147,-0.363 0.173,-0.337C0.201,-0.31 0.217,-0.293 0.223,-0.286Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(27.2797,0,0,27.2797,199.258,59.9216)'%3E%3Cpath d='M0.023,-0.236C0.025,-0.268 0.037,-0.294 0.058,-0.314C0.079,-0.333 0.103,-0.335 0.132,-0.319C0.143,-0.313 0.146,-0.304 0.143,-0.292C0.172,-0.266 0.182,-0.203 0.173,-0.103C0.171,-0.084 0.165,-0.065 0.156,-0.048C0.147,-0.03 0.134,-0.016 0.117,-0.007C0.101,0.003 0.082,0.003 0.061,-0.008C0.037,-0.019 0.024,-0.047 0.023,-0.09C0.02,-0.149 0.02,-0.197 0.023,-0.236ZM0.123,-0.105C0.125,-0.119 0.125,-0.134 0.124,-0.151C0.124,-0.152 0.124,-0.158 0.125,-0.17C0.125,-0.182 0.125,-0.191 0.125,-0.198C0.124,-0.205 0.123,-0.213 0.122,-0.224C0.121,-0.234 0.118,-0.242 0.115,-0.248C0.111,-0.253 0.106,-0.256 0.101,-0.257C0.092,-0.259 0.086,-0.264 0.084,-0.272C0.081,-0.269 0.079,-0.264 0.077,-0.257C0.075,-0.25 0.074,-0.243 0.074,-0.234C0.073,-0.225 0.073,-0.218 0.073,-0.212C0.072,-0.206 0.072,-0.199 0.073,-0.191C0.073,-0.183 0.073,-0.179 0.073,-0.179C0.073,-0.174 0.072,-0.164 0.071,-0.149C0.07,-0.134 0.069,-0.121 0.069,-0.11C0.069,-0.099 0.07,-0.089 0.073,-0.082C0.071,-0.062 0.086,-0.061 0.118,-0.079C0.121,-0.088 0.123,-0.096 0.123,-0.105Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,148.966,70.1072)'%3E%3Cpath d='M0.045,-0.505C0.046,-0.513 0.049,-0.519 0.054,-0.523C0.059,-0.527 0.065,-0.529 0.071,-0.529C0.078,-0.529 0.084,-0.528 0.089,-0.524C0.094,-0.52 0.097,-0.515 0.098,-0.507C0.101,-0.46 0.104,-0.413 0.106,-0.365C0.109,-0.318 0.11,-0.271 0.11,-0.224L0.11,-0.164C0.11,-0.137 0.109,-0.111 0.106,-0.085C0.103,-0.06 0.095,-0.035 0.082,-0.013C0.079,-0.008 0.076,-0.005 0.071,-0.004C0.066,-0.003 0.061,-0.002 0.056,-0.003C0.051,-0.004 0.047,-0.007 0.042,-0.01C0.038,-0.013 0.036,-0.017 0.035,-0.022C0.035,-0.027 0.034,-0.032 0.034,-0.036L0.034,-0.051C0.034,-0.068 0.035,-0.085 0.037,-0.102C0.038,-0.119 0.04,-0.135 0.041,-0.152C0.042,-0.171 0.044,-0.188 0.045,-0.206C0.046,-0.223 0.047,-0.241 0.047,-0.259C0.047,-0.268 0.047,-0.277 0.046,-0.287C0.046,-0.296 0.046,-0.305 0.045,-0.314C0.044,-0.333 0.044,-0.352 0.043,-0.37C0.043,-0.388 0.043,-0.406 0.043,-0.424L0.043,-0.464C0.043,-0.478 0.044,-0.492 0.045,-0.505ZM0.048,-0.688C0.049,-0.688 0.051,-0.687 0.053,-0.687C0.055,-0.687 0.056,-0.686 0.058,-0.685C0.067,-0.689 0.076,-0.691 0.087,-0.691C0.097,-0.691 0.106,-0.689 0.113,-0.684C0.121,-0.678 0.126,-0.671 0.127,-0.664C0.129,-0.656 0.13,-0.649 0.13,-0.642L0.13,-0.636C0.13,-0.63 0.128,-0.625 0.125,-0.62C0.121,-0.616 0.117,-0.613 0.113,-0.611C0.103,-0.606 0.092,-0.602 0.081,-0.6C0.069,-0.598 0.059,-0.601 0.049,-0.61C0.044,-0.614 0.038,-0.619 0.033,-0.626C0.028,-0.634 0.024,-0.64 0.021,-0.646C0.018,-0.65 0.017,-0.655 0.018,-0.66C0.019,-0.665 0.021,-0.67 0.024,-0.674C0.027,-0.679 0.03,-0.682 0.035,-0.685C0.039,-0.687 0.043,-0.688 0.048,-0.688Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,150.509,70.1072)'%3E%3Cpath d='M0.372,-0.533C0.408,-0.537 0.437,-0.532 0.459,-0.517C0.482,-0.502 0.499,-0.48 0.512,-0.453C0.524,-0.426 0.532,-0.394 0.537,-0.359C0.541,-0.323 0.543,-0.288 0.543,-0.252C0.543,-0.228 0.542,-0.204 0.542,-0.182C0.541,-0.159 0.539,-0.138 0.538,-0.119C0.537,-0.105 0.537,-0.093 0.537,-0.081C0.536,-0.069 0.536,-0.059 0.536,-0.05C0.536,-0.04 0.533,-0.033 0.527,-0.028C0.521,-0.024 0.514,-0.021 0.507,-0.021C0.498,-0.021 0.49,-0.024 0.483,-0.03C0.476,-0.035 0.473,-0.044 0.473,-0.055C0.473,-0.067 0.473,-0.079 0.473,-0.091C0.473,-0.103 0.474,-0.116 0.475,-0.128C0.475,-0.142 0.476,-0.158 0.476,-0.175C0.476,-0.192 0.477,-0.207 0.477,-0.222C0.477,-0.248 0.476,-0.274 0.474,-0.302C0.473,-0.313 0.471,-0.328 0.468,-0.349C0.465,-0.369 0.46,-0.389 0.454,-0.408C0.447,-0.428 0.44,-0.445 0.43,-0.459C0.421,-0.474 0.409,-0.481 0.396,-0.481C0.388,-0.481 0.381,-0.479 0.374,-0.476C0.366,-0.472 0.358,-0.465 0.349,-0.456C0.338,-0.445 0.328,-0.432 0.321,-0.417C0.314,-0.403 0.308,-0.387 0.303,-0.37C0.307,-0.351 0.31,-0.332 0.312,-0.312C0.313,-0.292 0.313,-0.272 0.313,-0.252C0.313,-0.229 0.313,-0.207 0.311,-0.185C0.309,-0.163 0.308,-0.142 0.307,-0.12C0.305,-0.103 0.304,-0.086 0.304,-0.069C0.303,-0.053 0.302,-0.037 0.302,-0.021C0.302,-0.014 0.299,-0.009 0.292,-0.007C0.286,-0.004 0.28,-0.003 0.272,-0.003C0.265,-0.004 0.258,-0.006 0.252,-0.009C0.245,-0.013 0.242,-0.018 0.242,-0.024C0.242,-0.034 0.242,-0.044 0.241,-0.057C0.24,-0.069 0.239,-0.082 0.238,-0.097C0.236,-0.119 0.235,-0.143 0.233,-0.169C0.231,-0.195 0.23,-0.222 0.23,-0.249C0.23,-0.274 0.231,-0.298 0.233,-0.323C0.235,-0.347 0.239,-0.37 0.243,-0.392C0.241,-0.403 0.239,-0.413 0.235,-0.423C0.232,-0.433 0.228,-0.44 0.222,-0.446C0.204,-0.465 0.188,-0.474 0.174,-0.474C0.162,-0.474 0.151,-0.467 0.14,-0.455C0.129,-0.443 0.119,-0.429 0.111,-0.414C0.113,-0.408 0.113,-0.402 0.113,-0.395L0.113,-0.374C0.113,-0.364 0.113,-0.355 0.112,-0.345C0.112,-0.336 0.111,-0.327 0.11,-0.318C0.11,-0.314 0.109,-0.31 0.109,-0.306L0.109,-0.295C0.109,-0.287 0.108,-0.279 0.108,-0.271L0.108,-0.246C0.108,-0.207 0.106,-0.166 0.103,-0.124C0.1,-0.082 0.091,-0.043 0.075,-0.008C0.072,-0.003 0.068,0.001 0.063,0.003C0.057,0.005 0.052,0.006 0.046,0.005C0.041,0.004 0.036,0.002 0.032,-0.002C0.028,-0.006 0.025,-0.011 0.024,-0.019C0.023,-0.042 0.024,-0.066 0.026,-0.091C0.029,-0.116 0.032,-0.14 0.036,-0.164C0.039,-0.18 0.041,-0.195 0.043,-0.209C0.046,-0.224 0.048,-0.239 0.049,-0.254L0.049,-0.272C0.049,-0.28 0.049,-0.286 0.05,-0.291L0.052,-0.321C0.043,-0.326 0.039,-0.333 0.039,-0.342C0.04,-0.357 0.043,-0.375 0.05,-0.396C0.05,-0.396 0.05,-0.397 0.049,-0.397C0.049,-0.397 0.049,-0.398 0.049,-0.398L0.049,-0.402L0.045,-0.421C0.045,-0.424 0.045,-0.425 0.045,-0.427C0.043,-0.436 0.041,-0.445 0.04,-0.456C0.039,-0.466 0.039,-0.475 0.04,-0.484C0.041,-0.492 0.045,-0.498 0.051,-0.501C0.057,-0.505 0.064,-0.505 0.072,-0.501C0.082,-0.492 0.09,-0.483 0.095,-0.476C0.108,-0.491 0.122,-0.504 0.138,-0.514C0.153,-0.524 0.17,-0.529 0.187,-0.529C0.202,-0.529 0.217,-0.524 0.231,-0.514C0.245,-0.503 0.258,-0.487 0.27,-0.464C0.281,-0.483 0.294,-0.498 0.311,-0.511C0.327,-0.523 0.347,-0.531 0.372,-0.533Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,156.339,70.1072)'%3E%3Cpath d='M0.366,-0.092C0.373,-0.097 0.379,-0.099 0.386,-0.098C0.392,-0.096 0.397,-0.093 0.401,-0.089C0.405,-0.084 0.407,-0.079 0.408,-0.072C0.408,-0.065 0.405,-0.058 0.399,-0.052C0.375,-0.029 0.354,-0.018 0.336,-0.018C0.317,-0.018 0.302,-0.026 0.29,-0.043C0.278,-0.06 0.268,-0.082 0.26,-0.109C0.256,-0.098 0.251,-0.087 0.245,-0.076C0.239,-0.064 0.232,-0.054 0.225,-0.043C0.217,-0.033 0.208,-0.024 0.199,-0.017C0.19,-0.009 0.18,-0.004 0.169,-0.001C0.144,0.004 0.121,-0.001 0.102,-0.015C0.082,-0.029 0.066,-0.048 0.053,-0.07C0.04,-0.093 0.03,-0.118 0.024,-0.144C0.018,-0.17 0.015,-0.192 0.017,-0.211C0.019,-0.233 0.021,-0.258 0.025,-0.285C0.028,-0.313 0.034,-0.34 0.041,-0.366C0.048,-0.393 0.058,-0.418 0.07,-0.442C0.082,-0.466 0.097,-0.486 0.116,-0.502L0.115,-0.502C0.126,-0.511 0.138,-0.518 0.15,-0.522C0.162,-0.526 0.174,-0.528 0.185,-0.528C0.205,-0.528 0.225,-0.522 0.243,-0.51C0.261,-0.497 0.274,-0.481 0.282,-0.46C0.285,-0.457 0.287,-0.454 0.288,-0.451C0.289,-0.449 0.29,-0.445 0.29,-0.44L0.29,-0.435C0.291,-0.429 0.292,-0.424 0.292,-0.417C0.292,-0.41 0.292,-0.405 0.291,-0.399C0.291,-0.399 0.291,-0.398 0.291,-0.397C0.29,-0.397 0.29,-0.396 0.29,-0.396C0.29,-0.383 0.29,-0.371 0.29,-0.359C0.289,-0.348 0.289,-0.336 0.289,-0.323C0.289,-0.294 0.29,-0.264 0.292,-0.234C0.293,-0.223 0.294,-0.208 0.295,-0.191C0.297,-0.174 0.299,-0.157 0.303,-0.14C0.306,-0.124 0.311,-0.109 0.316,-0.098C0.322,-0.086 0.33,-0.08 0.339,-0.08C0.347,-0.08 0.356,-0.084 0.366,-0.092ZM0.219,-0.14C0.224,-0.159 0.227,-0.177 0.229,-0.195C0.23,-0.213 0.23,-0.231 0.23,-0.25L0.23,-0.308L0.229,-0.366C0.229,-0.379 0.23,-0.392 0.23,-0.405C0.231,-0.417 0.232,-0.43 0.233,-0.443C0.233,-0.444 0.234,-0.444 0.234,-0.444C0.234,-0.444 0.234,-0.444 0.234,-0.445C0.227,-0.455 0.219,-0.463 0.21,-0.469C0.202,-0.475 0.192,-0.479 0.182,-0.479C0.169,-0.479 0.158,-0.473 0.148,-0.463C0.138,-0.452 0.129,-0.439 0.121,-0.423C0.113,-0.408 0.107,-0.393 0.102,-0.378C0.093,-0.351 0.086,-0.322 0.079,-0.292C0.073,-0.263 0.069,-0.234 0.067,-0.207C0.067,-0.187 0.07,-0.165 0.078,-0.14C0.085,-0.116 0.095,-0.095 0.107,-0.079C0.114,-0.072 0.121,-0.066 0.127,-0.062C0.134,-0.058 0.141,-0.056 0.146,-0.056C0.154,-0.056 0.162,-0.058 0.169,-0.063C0.176,-0.068 0.183,-0.074 0.189,-0.083C0.196,-0.091 0.202,-0.1 0.207,-0.11C0.211,-0.12 0.215,-0.13 0.219,-0.14Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,160.665,70.1072)'%3E%3Cpath d='M0.325,-0.55C0.333,-0.549 0.339,-0.546 0.344,-0.541C0.348,-0.535 0.351,-0.529 0.351,-0.522C0.351,-0.515 0.35,-0.509 0.346,-0.502C0.342,-0.496 0.336,-0.493 0.327,-0.492C0.314,-0.49 0.303,-0.488 0.293,-0.484C0.283,-0.481 0.273,-0.476 0.264,-0.47C0.28,-0.451 0.291,-0.43 0.297,-0.405C0.304,-0.38 0.307,-0.354 0.307,-0.328C0.307,-0.312 0.305,-0.295 0.303,-0.279C0.3,-0.262 0.297,-0.247 0.292,-0.233C0.286,-0.219 0.279,-0.205 0.27,-0.191C0.26,-0.177 0.25,-0.164 0.239,-0.153C0.228,-0.141 0.216,-0.132 0.203,-0.125C0.19,-0.117 0.177,-0.113 0.163,-0.111C0.161,-0.105 0.157,-0.1 0.15,-0.098C0.139,-0.094 0.13,-0.09 0.122,-0.084C0.114,-0.078 0.108,-0.072 0.104,-0.064C0.119,-0.055 0.137,-0.044 0.156,-0.031C0.175,-0.017 0.193,-0.003 0.209,0.013C0.225,0.028 0.239,0.045 0.25,0.062C0.261,0.079 0.267,0.097 0.267,0.114C0.267,0.128 0.263,0.141 0.255,0.154C0.247,0.167 0.235,0.18 0.218,0.191C0.206,0.199 0.193,0.205 0.178,0.21C0.164,0.215 0.149,0.218 0.135,0.218C0.117,0.218 0.099,0.214 0.082,0.206C0.064,0.198 0.05,0.185 0.039,0.167C0.033,0.158 0.029,0.149 0.027,0.14C0.025,0.131 0.023,0.122 0.023,0.113C0.023,0.094 0.029,0.077 0.04,0.061C0.05,0.045 0.065,0.032 0.084,0.021C0.09,0.018 0.097,0.019 0.103,0.023C0.109,0.028 0.114,0.034 0.118,0.041C0.121,0.048 0.123,0.056 0.123,0.063C0.123,0.07 0.12,0.076 0.113,0.079C0.097,0.089 0.089,0.101 0.089,0.115C0.089,0.128 0.095,0.139 0.107,0.148C0.119,0.158 0.133,0.16 0.15,0.156C0.165,0.153 0.179,0.147 0.19,0.139C0.201,0.131 0.207,0.121 0.207,0.109C0.207,0.1 0.203,0.09 0.195,0.082C0.178,0.059 0.158,0.04 0.134,0.024C0.111,0.009 0.086,-0.007 0.062,-0.022L0.052,-0.029L0.053,-0.028C0.048,-0.032 0.044,-0.036 0.042,-0.042C0.04,-0.049 0.04,-0.055 0.043,-0.062L0.042,-0.061C0.047,-0.077 0.054,-0.092 0.062,-0.104C0.069,-0.115 0.08,-0.125 0.093,-0.132L0.069,-0.151C0.052,-0.169 0.04,-0.189 0.032,-0.213C0.024,-0.236 0.02,-0.26 0.02,-0.285C0.02,-0.311 0.023,-0.336 0.031,-0.362C0.039,-0.388 0.049,-0.411 0.063,-0.432C0.074,-0.449 0.087,-0.464 0.104,-0.479C0.12,-0.494 0.138,-0.502 0.159,-0.503L0.172,-0.503C0.18,-0.508 0.19,-0.51 0.201,-0.508C0.203,-0.507 0.205,-0.507 0.208,-0.506C0.21,-0.505 0.213,-0.505 0.216,-0.504C0.229,-0.518 0.246,-0.53 0.266,-0.539C0.286,-0.547 0.306,-0.551 0.325,-0.55ZM0.107,-0.199C0.116,-0.191 0.124,-0.185 0.131,-0.182C0.139,-0.178 0.146,-0.177 0.153,-0.177C0.167,-0.177 0.18,-0.182 0.191,-0.191C0.203,-0.201 0.213,-0.214 0.222,-0.229C0.231,-0.245 0.238,-0.263 0.243,-0.282C0.248,-0.301 0.25,-0.32 0.25,-0.34C0.25,-0.355 0.248,-0.369 0.245,-0.382C0.242,-0.396 0.236,-0.408 0.228,-0.419C0.223,-0.417 0.218,-0.417 0.214,-0.42L0.215,-0.42C0.21,-0.421 0.205,-0.423 0.201,-0.425C0.197,-0.428 0.193,-0.43 0.189,-0.433C0.183,-0.437 0.176,-0.441 0.17,-0.443C0.163,-0.446 0.156,-0.445 0.147,-0.44C0.136,-0.433 0.127,-0.424 0.119,-0.413C0.111,-0.402 0.104,-0.39 0.101,-0.378C0.095,-0.364 0.09,-0.349 0.086,-0.332C0.082,-0.314 0.08,-0.297 0.08,-0.28C0.08,-0.265 0.082,-0.25 0.086,-0.236C0.09,-0.222 0.097,-0.21 0.107,-0.199Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,164.552,70.1072)'%3E%3Cpath d='M0.084,-0.253C0.083,-0.253 0.082,-0.254 0.081,-0.255C0.082,-0.234 0.084,-0.214 0.087,-0.195C0.091,-0.176 0.096,-0.159 0.104,-0.142C0.112,-0.125 0.123,-0.108 0.136,-0.093C0.149,-0.077 0.165,-0.067 0.184,-0.062C0.195,-0.058 0.203,-0.057 0.208,-0.057C0.216,-0.057 0.222,-0.059 0.228,-0.063C0.234,-0.068 0.238,-0.074 0.242,-0.082C0.246,-0.089 0.249,-0.097 0.251,-0.107C0.254,-0.116 0.256,-0.126 0.258,-0.137C0.259,-0.145 0.262,-0.15 0.268,-0.154C0.273,-0.158 0.278,-0.16 0.284,-0.161C0.289,-0.161 0.295,-0.159 0.3,-0.156C0.305,-0.152 0.308,-0.146 0.31,-0.139C0.311,-0.133 0.312,-0.127 0.313,-0.122C0.313,-0.117 0.313,-0.111 0.313,-0.105C0.313,-0.088 0.311,-0.072 0.305,-0.059C0.299,-0.046 0.291,-0.035 0.281,-0.026C0.271,-0.017 0.259,-0.01 0.246,-0.006C0.232,-0.001 0.218,0.001 0.204,0.001C0.181,0.001 0.159,-0.004 0.137,-0.015C0.115,-0.025 0.097,-0.041 0.081,-0.063C0.062,-0.09 0.046,-0.123 0.036,-0.161C0.025,-0.199 0.02,-0.238 0.02,-0.278C0.02,-0.316 0.025,-0.353 0.035,-0.389C0.045,-0.424 0.061,-0.455 0.083,-0.479C0.098,-0.496 0.114,-0.509 0.132,-0.517C0.15,-0.525 0.168,-0.529 0.185,-0.529C0.202,-0.529 0.219,-0.526 0.236,-0.518C0.252,-0.511 0.267,-0.5 0.28,-0.487C0.293,-0.474 0.304,-0.459 0.313,-0.442C0.323,-0.425 0.328,-0.406 0.33,-0.386C0.332,-0.36 0.33,-0.337 0.323,-0.317C0.316,-0.297 0.306,-0.28 0.293,-0.267C0.281,-0.253 0.265,-0.243 0.248,-0.235C0.23,-0.228 0.211,-0.225 0.19,-0.225C0.174,-0.225 0.156,-0.227 0.138,-0.231C0.119,-0.236 0.102,-0.243 0.084,-0.253ZM0.104,-0.404C0.099,-0.387 0.094,-0.369 0.089,-0.349C0.085,-0.328 0.082,-0.308 0.081,-0.287C0.087,-0.292 0.092,-0.294 0.097,-0.294C0.104,-0.294 0.112,-0.293 0.12,-0.292C0.127,-0.29 0.135,-0.288 0.144,-0.287C0.154,-0.286 0.165,-0.284 0.175,-0.282C0.186,-0.28 0.196,-0.279 0.205,-0.279C0.223,-0.279 0.236,-0.283 0.244,-0.291C0.255,-0.301 0.262,-0.312 0.266,-0.325C0.27,-0.337 0.272,-0.35 0.272,-0.363C0.272,-0.371 0.271,-0.38 0.27,-0.389C0.263,-0.411 0.251,-0.43 0.234,-0.445C0.217,-0.46 0.2,-0.468 0.182,-0.468C0.166,-0.468 0.151,-0.463 0.138,-0.452C0.124,-0.442 0.113,-0.426 0.104,-0.404Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,170.802,70.1072)'%3E%3Cpath d='M0.319,-0.445C0.318,-0.438 0.314,-0.433 0.306,-0.43C0.299,-0.426 0.292,-0.427 0.287,-0.431C0.279,-0.437 0.273,-0.441 0.27,-0.443C0.267,-0.445 0.266,-0.446 0.266,-0.447C0.266,-0.447 0.266,-0.447 0.267,-0.446C0.268,-0.446 0.268,-0.446 0.267,-0.447C0.257,-0.456 0.247,-0.464 0.236,-0.47C0.226,-0.476 0.214,-0.476 0.201,-0.47L0.202,-0.47C0.188,-0.462 0.175,-0.454 0.163,-0.445C0.151,-0.436 0.14,-0.426 0.131,-0.414C0.115,-0.393 0.104,-0.371 0.096,-0.349C0.089,-0.327 0.085,-0.303 0.085,-0.275C0.085,-0.248 0.087,-0.219 0.09,-0.189C0.094,-0.16 0.103,-0.132 0.117,-0.108C0.121,-0.102 0.126,-0.095 0.133,-0.089C0.139,-0.082 0.146,-0.077 0.154,-0.072C0.162,-0.067 0.171,-0.063 0.18,-0.062C0.189,-0.06 0.198,-0.06 0.206,-0.062C0.226,-0.065 0.24,-0.075 0.247,-0.091C0.253,-0.107 0.257,-0.125 0.259,-0.144C0.259,-0.153 0.262,-0.16 0.268,-0.165C0.273,-0.17 0.28,-0.172 0.287,-0.172C0.295,-0.172 0.302,-0.169 0.309,-0.163C0.316,-0.157 0.319,-0.149 0.319,-0.139C0.318,-0.12 0.314,-0.103 0.308,-0.086C0.301,-0.069 0.292,-0.054 0.282,-0.041C0.271,-0.028 0.258,-0.018 0.244,-0.01C0.229,-0.002 0.213,0.002 0.195,0.002C0.186,0.002 0.177,0.001 0.167,-0.001C0.157,-0.004 0.147,-0.008 0.136,-0.014C0.115,-0.026 0.097,-0.042 0.083,-0.06C0.069,-0.079 0.058,-0.099 0.049,-0.121C0.041,-0.142 0.034,-0.165 0.031,-0.189C0.027,-0.214 0.025,-0.237 0.025,-0.26C0.025,-0.285 0.028,-0.309 0.032,-0.333C0.036,-0.356 0.043,-0.379 0.053,-0.4C0.063,-0.421 0.075,-0.441 0.09,-0.458C0.106,-0.476 0.124,-0.492 0.146,-0.506C0.158,-0.513 0.171,-0.519 0.186,-0.523C0.201,-0.528 0.216,-0.53 0.231,-0.53C0.243,-0.53 0.254,-0.529 0.265,-0.525C0.276,-0.522 0.285,-0.517 0.293,-0.51C0.302,-0.503 0.308,-0.495 0.313,-0.484C0.317,-0.474 0.319,-0.461 0.319,-0.446L0.319,-0.445Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,174.435,70.1072)'%3E%3Cpath d='M0.368,-0.379C0.371,-0.363 0.374,-0.345 0.376,-0.327C0.379,-0.308 0.38,-0.288 0.38,-0.268C0.38,-0.244 0.378,-0.221 0.375,-0.197C0.372,-0.174 0.366,-0.152 0.358,-0.13C0.351,-0.109 0.34,-0.09 0.327,-0.072C0.314,-0.054 0.298,-0.039 0.278,-0.027C0.262,-0.017 0.247,-0.009 0.232,-0.005C0.217,-0 0.203,0.002 0.19,0.002C0.164,0.002 0.14,-0.006 0.118,-0.022C0.097,-0.038 0.079,-0.059 0.064,-0.084C0.049,-0.11 0.038,-0.139 0.03,-0.172C0.022,-0.204 0.019,-0.237 0.019,-0.271C0.019,-0.295 0.021,-0.319 0.025,-0.343C0.029,-0.366 0.036,-0.388 0.045,-0.408C0.054,-0.428 0.066,-0.446 0.08,-0.462C0.094,-0.478 0.11,-0.49 0.129,-0.499C0.158,-0.519 0.186,-0.529 0.213,-0.529C0.231,-0.529 0.249,-0.525 0.266,-0.518C0.283,-0.51 0.298,-0.499 0.312,-0.486C0.325,-0.472 0.337,-0.457 0.347,-0.438C0.356,-0.42 0.364,-0.4 0.368,-0.379ZM0.256,-0.079C0.279,-0.101 0.295,-0.128 0.304,-0.162C0.314,-0.195 0.318,-0.229 0.318,-0.263C0.318,-0.276 0.318,-0.29 0.316,-0.302C0.315,-0.315 0.313,-0.327 0.311,-0.34C0.309,-0.349 0.306,-0.359 0.304,-0.37C0.301,-0.38 0.298,-0.391 0.294,-0.401C0.29,-0.411 0.285,-0.42 0.279,-0.429C0.273,-0.438 0.266,-0.445 0.258,-0.451C0.251,-0.456 0.245,-0.46 0.239,-0.462C0.233,-0.464 0.227,-0.465 0.222,-0.465C0.211,-0.465 0.201,-0.463 0.192,-0.459C0.182,-0.455 0.173,-0.451 0.164,-0.446L0.141,-0.435C0.139,-0.433 0.136,-0.432 0.134,-0.432C0.131,-0.431 0.129,-0.431 0.127,-0.432C0.109,-0.411 0.097,-0.387 0.089,-0.359C0.082,-0.331 0.078,-0.302 0.078,-0.273C0.078,-0.249 0.081,-0.225 0.086,-0.201C0.089,-0.186 0.093,-0.17 0.1,-0.152C0.106,-0.135 0.114,-0.118 0.124,-0.103C0.134,-0.088 0.145,-0.075 0.157,-0.064C0.17,-0.054 0.183,-0.049 0.197,-0.049C0.216,-0.049 0.236,-0.059 0.256,-0.079Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,178.497,70.1072)'%3E%3Cpath d='M0.372,-0.533C0.408,-0.537 0.437,-0.532 0.459,-0.517C0.482,-0.502 0.499,-0.48 0.512,-0.453C0.524,-0.426 0.532,-0.394 0.537,-0.359C0.541,-0.323 0.543,-0.288 0.543,-0.252C0.543,-0.228 0.542,-0.204 0.542,-0.182C0.541,-0.159 0.539,-0.138 0.538,-0.119C0.537,-0.105 0.537,-0.093 0.537,-0.081C0.536,-0.069 0.536,-0.059 0.536,-0.05C0.536,-0.04 0.533,-0.033 0.527,-0.028C0.521,-0.024 0.514,-0.021 0.507,-0.021C0.498,-0.021 0.49,-0.024 0.483,-0.03C0.476,-0.035 0.473,-0.044 0.473,-0.055C0.473,-0.067 0.473,-0.079 0.473,-0.091C0.473,-0.103 0.474,-0.116 0.475,-0.128C0.475,-0.142 0.476,-0.158 0.476,-0.175C0.476,-0.192 0.477,-0.207 0.477,-0.222C0.477,-0.248 0.476,-0.274 0.474,-0.302C0.473,-0.313 0.471,-0.328 0.468,-0.349C0.465,-0.369 0.46,-0.389 0.454,-0.408C0.447,-0.428 0.44,-0.445 0.43,-0.459C0.421,-0.474 0.409,-0.481 0.396,-0.481C0.388,-0.481 0.381,-0.479 0.374,-0.476C0.366,-0.472 0.358,-0.465 0.349,-0.456C0.338,-0.445 0.328,-0.432 0.321,-0.417C0.314,-0.403 0.308,-0.387 0.303,-0.37C0.307,-0.351 0.31,-0.332 0.312,-0.312C0.313,-0.292 0.313,-0.272 0.313,-0.252C0.313,-0.229 0.313,-0.207 0.311,-0.185C0.309,-0.163 0.308,-0.142 0.307,-0.12C0.305,-0.103 0.304,-0.086 0.304,-0.069C0.303,-0.053 0.302,-0.037 0.302,-0.021C0.302,-0.014 0.299,-0.009 0.292,-0.007C0.286,-0.004 0.28,-0.003 0.272,-0.003C0.265,-0.004 0.258,-0.006 0.252,-0.009C0.245,-0.013 0.242,-0.018 0.242,-0.024C0.242,-0.034 0.242,-0.044 0.241,-0.057C0.24,-0.069 0.239,-0.082 0.238,-0.097C0.236,-0.119 0.235,-0.143 0.233,-0.169C0.231,-0.195 0.23,-0.222 0.23,-0.249C0.23,-0.274 0.231,-0.298 0.233,-0.323C0.235,-0.347 0.239,-0.37 0.243,-0.392C0.241,-0.403 0.239,-0.413 0.235,-0.423C0.232,-0.433 0.228,-0.44 0.222,-0.446C0.204,-0.465 0.188,-0.474 0.174,-0.474C0.162,-0.474 0.151,-0.467 0.14,-0.455C0.129,-0.443 0.119,-0.429 0.111,-0.414C0.113,-0.408 0.113,-0.402 0.113,-0.395L0.113,-0.374C0.113,-0.364 0.113,-0.355 0.112,-0.345C0.112,-0.336 0.111,-0.327 0.11,-0.318C0.11,-0.314 0.109,-0.31 0.109,-0.306L0.109,-0.295C0.109,-0.287 0.108,-0.279 0.108,-0.271L0.108,-0.246C0.108,-0.207 0.106,-0.166 0.103,-0.124C0.1,-0.082 0.091,-0.043 0.075,-0.008C0.072,-0.003 0.068,0.001 0.063,0.003C0.057,0.005 0.052,0.006 0.046,0.005C0.041,0.004 0.036,0.002 0.032,-0.002C0.028,-0.006 0.025,-0.011 0.024,-0.019C0.023,-0.042 0.024,-0.066 0.026,-0.091C0.029,-0.116 0.032,-0.14 0.036,-0.164C0.039,-0.18 0.041,-0.195 0.043,-0.209C0.046,-0.224 0.048,-0.239 0.049,-0.254L0.049,-0.272C0.049,-0.28 0.049,-0.286 0.05,-0.291L0.052,-0.321C0.043,-0.326 0.039,-0.333 0.039,-0.342C0.04,-0.357 0.043,-0.375 0.05,-0.396C0.05,-0.396 0.05,-0.397 0.049,-0.397C0.049,-0.397 0.049,-0.398 0.049,-0.398L0.049,-0.402L0.045,-0.421C0.045,-0.424 0.045,-0.425 0.045,-0.427C0.043,-0.436 0.041,-0.445 0.04,-0.456C0.039,-0.466 0.039,-0.475 0.04,-0.484C0.041,-0.492 0.045,-0.498 0.051,-0.501C0.057,-0.505 0.064,-0.505 0.072,-0.501C0.082,-0.492 0.09,-0.483 0.095,-0.476C0.108,-0.491 0.122,-0.504 0.138,-0.514C0.153,-0.524 0.17,-0.529 0.187,-0.529C0.202,-0.529 0.217,-0.524 0.231,-0.514C0.245,-0.503 0.258,-0.487 0.27,-0.464C0.281,-0.483 0.294,-0.498 0.311,-0.511C0.327,-0.523 0.347,-0.531 0.372,-0.533Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,184.327,70.1072)'%3E%3Cpath d='M0.358,-0.257C0.36,-0.234 0.359,-0.21 0.355,-0.186C0.352,-0.162 0.346,-0.138 0.338,-0.115C0.329,-0.092 0.318,-0.071 0.304,-0.052C0.289,-0.032 0.272,-0.016 0.252,-0.003L0.253,-0.003C0.243,0.004 0.233,0.009 0.223,0.012C0.212,0.014 0.202,0.016 0.191,0.016C0.153,0.016 0.12,0 0.094,-0.03L0.094,-0.028C0.094,0.009 0.093,0.046 0.091,0.083C0.09,0.119 0.087,0.156 0.082,0.193C0.083,0.184 0.081,0.176 0.076,0.17C0.071,0.164 0.065,0.16 0.059,0.159C0.052,0.158 0.045,0.159 0.039,0.163C0.032,0.167 0.027,0.173 0.024,0.182C0.033,0.144 0.039,0.105 0.042,0.066C0.046,0.027 0.048,-0.011 0.048,-0.049C0.048,-0.082 0.047,-0.114 0.045,-0.146C0.044,-0.178 0.042,-0.21 0.04,-0.242C0.039,-0.266 0.037,-0.289 0.036,-0.313C0.035,-0.337 0.034,-0.36 0.033,-0.384C0.021,-0.396 0.02,-0.409 0.027,-0.423L0.027,-0.422C0.028,-0.426 0.03,-0.429 0.032,-0.433L0.032,-0.486C0.033,-0.492 0.035,-0.496 0.039,-0.499C0.043,-0.501 0.047,-0.503 0.052,-0.503C0.056,-0.504 0.061,-0.503 0.064,-0.5C0.068,-0.497 0.071,-0.493 0.071,-0.487C0.071,-0.484 0.072,-0.481 0.072,-0.479C0.087,-0.494 0.102,-0.506 0.119,-0.515C0.136,-0.524 0.154,-0.528 0.172,-0.528C0.194,-0.528 0.217,-0.52 0.241,-0.503C0.259,-0.488 0.275,-0.471 0.289,-0.452C0.303,-0.432 0.314,-0.412 0.324,-0.391C0.334,-0.369 0.342,-0.347 0.347,-0.324C0.353,-0.301 0.356,-0.279 0.358,-0.257ZM0.261,-0.087C0.275,-0.108 0.286,-0.132 0.293,-0.159C0.3,-0.185 0.304,-0.212 0.304,-0.239C0.304,-0.252 0.303,-0.266 0.301,-0.279L0.301,-0.278C0.299,-0.293 0.296,-0.308 0.292,-0.324C0.287,-0.34 0.282,-0.356 0.275,-0.372C0.268,-0.388 0.26,-0.402 0.251,-0.416C0.242,-0.43 0.231,-0.441 0.22,-0.451C0.202,-0.464 0.187,-0.47 0.173,-0.47C0.154,-0.47 0.137,-0.462 0.121,-0.446C0.105,-0.43 0.091,-0.412 0.078,-0.392L0.082,-0.331L0.082,-0.332C0.084,-0.295 0.086,-0.26 0.088,-0.227C0.09,-0.193 0.091,-0.159 0.093,-0.122C0.093,-0.122 0.095,-0.122 0.096,-0.122C0.098,-0.121 0.099,-0.121 0.1,-0.12C0.105,-0.115 0.11,-0.11 0.114,-0.104C0.118,-0.099 0.123,-0.094 0.128,-0.089C0.135,-0.079 0.143,-0.07 0.15,-0.063C0.158,-0.055 0.167,-0.049 0.177,-0.046C0.195,-0.041 0.211,-0.043 0.226,-0.052C0.24,-0.061 0.252,-0.073 0.261,-0.087Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,188.175,70.1072)'%3E%3Cpath d='M0.264,-0.509C0.27,-0.506 0.272,-0.5 0.272,-0.493C0.272,-0.486 0.271,-0.479 0.267,-0.472C0.263,-0.465 0.258,-0.459 0.252,-0.454C0.246,-0.45 0.24,-0.449 0.234,-0.451C0.225,-0.456 0.215,-0.458 0.204,-0.458C0.186,-0.458 0.171,-0.449 0.159,-0.431C0.147,-0.412 0.138,-0.389 0.132,-0.36C0.132,-0.351 0.133,-0.34 0.133,-0.33L0.133,-0.3C0.133,-0.277 0.132,-0.254 0.132,-0.23C0.131,-0.207 0.131,-0.184 0.13,-0.161C0.128,-0.117 0.127,-0.072 0.127,-0.025C0.126,-0.016 0.123,-0.009 0.117,-0.005C0.111,-0 0.104,0.002 0.097,0.002C0.09,0.002 0.083,-0 0.077,-0.005C0.07,-0.01 0.066,-0.016 0.064,-0.023C0.061,-0.038 0.058,-0.06 0.056,-0.087C0.054,-0.115 0.053,-0.146 0.053,-0.179C0.053,-0.194 0.053,-0.21 0.054,-0.227C0.055,-0.244 0.057,-0.262 0.059,-0.28C0.061,-0.298 0.063,-0.315 0.065,-0.333C0.067,-0.35 0.07,-0.366 0.072,-0.38C0.072,-0.391 0.071,-0.402 0.07,-0.412C0.069,-0.422 0.068,-0.431 0.066,-0.438C0.064,-0.446 0.063,-0.452 0.061,-0.457C0.059,-0.461 0.057,-0.462 0.055,-0.461C0.049,-0.459 0.044,-0.459 0.04,-0.46C0.035,-0.462 0.031,-0.465 0.027,-0.468C0.024,-0.472 0.022,-0.476 0.021,-0.481C0.021,-0.486 0.022,-0.491 0.026,-0.496C0.039,-0.513 0.052,-0.521 0.065,-0.521C0.076,-0.521 0.086,-0.517 0.093,-0.509C0.1,-0.5 0.106,-0.49 0.111,-0.477C0.122,-0.493 0.134,-0.507 0.147,-0.516C0.161,-0.526 0.177,-0.53 0.195,-0.53C0.217,-0.53 0.24,-0.523 0.264,-0.509Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,191.231,70.1072)'%3E%3Cpath d='M0.084,-0.253C0.083,-0.253 0.082,-0.254 0.081,-0.255C0.082,-0.234 0.084,-0.214 0.087,-0.195C0.091,-0.176 0.096,-0.159 0.104,-0.142C0.112,-0.125 0.123,-0.108 0.136,-0.093C0.149,-0.077 0.165,-0.067 0.184,-0.062C0.195,-0.058 0.203,-0.057 0.208,-0.057C0.216,-0.057 0.222,-0.059 0.228,-0.063C0.234,-0.068 0.238,-0.074 0.242,-0.082C0.246,-0.089 0.249,-0.097 0.251,-0.107C0.254,-0.116 0.256,-0.126 0.258,-0.137C0.259,-0.145 0.262,-0.15 0.268,-0.154C0.273,-0.158 0.278,-0.16 0.284,-0.161C0.289,-0.161 0.295,-0.159 0.3,-0.156C0.305,-0.152 0.308,-0.146 0.31,-0.139C0.311,-0.133 0.312,-0.127 0.313,-0.122C0.313,-0.117 0.313,-0.111 0.313,-0.105C0.313,-0.088 0.311,-0.072 0.305,-0.059C0.299,-0.046 0.291,-0.035 0.281,-0.026C0.271,-0.017 0.259,-0.01 0.246,-0.006C0.232,-0.001 0.218,0.001 0.204,0.001C0.181,0.001 0.159,-0.004 0.137,-0.015C0.115,-0.025 0.097,-0.041 0.081,-0.063C0.062,-0.09 0.046,-0.123 0.036,-0.161C0.025,-0.199 0.02,-0.238 0.02,-0.278C0.02,-0.316 0.025,-0.353 0.035,-0.389C0.045,-0.424 0.061,-0.455 0.083,-0.479C0.098,-0.496 0.114,-0.509 0.132,-0.517C0.15,-0.525 0.168,-0.529 0.185,-0.529C0.202,-0.529 0.219,-0.526 0.236,-0.518C0.252,-0.511 0.267,-0.5 0.28,-0.487C0.293,-0.474 0.304,-0.459 0.313,-0.442C0.323,-0.425 0.328,-0.406 0.33,-0.386C0.332,-0.36 0.33,-0.337 0.323,-0.317C0.316,-0.297 0.306,-0.28 0.293,-0.267C0.281,-0.253 0.265,-0.243 0.248,-0.235C0.23,-0.228 0.211,-0.225 0.19,-0.225C0.174,-0.225 0.156,-0.227 0.138,-0.231C0.119,-0.236 0.102,-0.243 0.084,-0.253ZM0.104,-0.404C0.099,-0.387 0.094,-0.369 0.089,-0.349C0.085,-0.328 0.082,-0.308 0.081,-0.287C0.087,-0.292 0.092,-0.294 0.097,-0.294C0.104,-0.294 0.112,-0.293 0.12,-0.292C0.127,-0.29 0.135,-0.288 0.144,-0.287C0.154,-0.286 0.165,-0.284 0.175,-0.282C0.186,-0.28 0.196,-0.279 0.205,-0.279C0.223,-0.279 0.236,-0.283 0.244,-0.291C0.255,-0.301 0.262,-0.312 0.266,-0.325C0.27,-0.337 0.272,-0.35 0.272,-0.363C0.272,-0.371 0.271,-0.38 0.27,-0.389C0.263,-0.411 0.251,-0.43 0.234,-0.445C0.217,-0.46 0.2,-0.468 0.182,-0.468C0.166,-0.468 0.151,-0.463 0.138,-0.452C0.124,-0.442 0.113,-0.426 0.104,-0.404Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,194.728,70.1072)'%3E%3Cpath d='M0.263,-0.454C0.265,-0.449 0.265,-0.444 0.263,-0.439C0.262,-0.434 0.259,-0.431 0.255,-0.428C0.251,-0.426 0.247,-0.425 0.242,-0.425C0.237,-0.425 0.232,-0.427 0.228,-0.432C0.215,-0.443 0.203,-0.452 0.191,-0.457C0.179,-0.462 0.167,-0.465 0.156,-0.465C0.136,-0.465 0.119,-0.458 0.105,-0.443C0.092,-0.429 0.085,-0.412 0.085,-0.393C0.085,-0.38 0.089,-0.366 0.096,-0.353C0.103,-0.34 0.114,-0.326 0.128,-0.313L0.157,-0.291C0.179,-0.274 0.2,-0.256 0.221,-0.238C0.242,-0.219 0.257,-0.196 0.267,-0.167L0.267,-0.168C0.27,-0.159 0.272,-0.151 0.273,-0.144C0.275,-0.136 0.275,-0.129 0.275,-0.122C0.275,-0.103 0.271,-0.086 0.263,-0.071C0.255,-0.056 0.244,-0.043 0.231,-0.032C0.218,-0.021 0.203,-0.013 0.187,-0.007C0.17,-0.001 0.152,0.002 0.135,0.002C0.095,0.002 0.062,-0.013 0.034,-0.042C0.029,-0.048 0.028,-0.054 0.03,-0.061C0.033,-0.068 0.037,-0.074 0.043,-0.08C0.049,-0.085 0.055,-0.089 0.063,-0.09C0.07,-0.092 0.076,-0.09 0.081,-0.085C0.089,-0.076 0.097,-0.069 0.107,-0.065C0.116,-0.061 0.126,-0.059 0.135,-0.059C0.145,-0.059 0.154,-0.061 0.163,-0.064C0.172,-0.068 0.18,-0.074 0.188,-0.081C0.195,-0.087 0.2,-0.095 0.205,-0.104C0.209,-0.113 0.211,-0.122 0.211,-0.132C0.211,-0.14 0.209,-0.147 0.207,-0.154C0.204,-0.161 0.2,-0.169 0.194,-0.177C0.185,-0.188 0.174,-0.199 0.16,-0.211C0.146,-0.223 0.133,-0.233 0.122,-0.241C0.119,-0.243 0.116,-0.245 0.114,-0.248C0.111,-0.251 0.109,-0.253 0.105,-0.255C0.094,-0.264 0.082,-0.274 0.071,-0.285C0.059,-0.296 0.05,-0.308 0.042,-0.322C0.033,-0.335 0.027,-0.349 0.023,-0.364C0.02,-0.379 0.02,-0.395 0.023,-0.412C0.027,-0.428 0.033,-0.444 0.042,-0.458C0.052,-0.472 0.063,-0.484 0.076,-0.494C0.089,-0.505 0.104,-0.513 0.119,-0.519C0.135,-0.524 0.15,-0.527 0.166,-0.527C0.187,-0.527 0.206,-0.522 0.223,-0.51C0.24,-0.499 0.254,-0.48 0.263,-0.453L0.263,-0.454Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,197.696,70.1072)'%3E%3Cpath d='M0.263,-0.454C0.265,-0.449 0.265,-0.444 0.263,-0.439C0.262,-0.434 0.259,-0.431 0.255,-0.428C0.251,-0.426 0.247,-0.425 0.242,-0.425C0.237,-0.425 0.232,-0.427 0.228,-0.432C0.215,-0.443 0.203,-0.452 0.191,-0.457C0.179,-0.462 0.167,-0.465 0.156,-0.465C0.136,-0.465 0.119,-0.458 0.105,-0.443C0.092,-0.429 0.085,-0.412 0.085,-0.393C0.085,-0.38 0.089,-0.366 0.096,-0.353C0.103,-0.34 0.114,-0.326 0.128,-0.313L0.157,-0.291C0.179,-0.274 0.2,-0.256 0.221,-0.238C0.242,-0.219 0.257,-0.196 0.267,-0.167L0.267,-0.168C0.27,-0.159 0.272,-0.151 0.273,-0.144C0.275,-0.136 0.275,-0.129 0.275,-0.122C0.275,-0.103 0.271,-0.086 0.263,-0.071C0.255,-0.056 0.244,-0.043 0.231,-0.032C0.218,-0.021 0.203,-0.013 0.187,-0.007C0.17,-0.001 0.152,0.002 0.135,0.002C0.095,0.002 0.062,-0.013 0.034,-0.042C0.029,-0.048 0.028,-0.054 0.03,-0.061C0.033,-0.068 0.037,-0.074 0.043,-0.08C0.049,-0.085 0.055,-0.089 0.063,-0.09C0.07,-0.092 0.076,-0.09 0.081,-0.085C0.089,-0.076 0.097,-0.069 0.107,-0.065C0.116,-0.061 0.126,-0.059 0.135,-0.059C0.145,-0.059 0.154,-0.061 0.163,-0.064C0.172,-0.068 0.18,-0.074 0.188,-0.081C0.195,-0.087 0.2,-0.095 0.205,-0.104C0.209,-0.113 0.211,-0.122 0.211,-0.132C0.211,-0.14 0.209,-0.147 0.207,-0.154C0.204,-0.161 0.2,-0.169 0.194,-0.177C0.185,-0.188 0.174,-0.199 0.16,-0.211C0.146,-0.223 0.133,-0.233 0.122,-0.241C0.119,-0.243 0.116,-0.245 0.114,-0.248C0.111,-0.251 0.109,-0.253 0.105,-0.255C0.094,-0.264 0.082,-0.274 0.071,-0.285C0.059,-0.296 0.05,-0.308 0.042,-0.322C0.033,-0.335 0.027,-0.349 0.023,-0.364C0.02,-0.379 0.02,-0.395 0.023,-0.412C0.027,-0.428 0.033,-0.444 0.042,-0.458C0.052,-0.472 0.063,-0.484 0.076,-0.494C0.089,-0.505 0.104,-0.513 0.119,-0.519C0.135,-0.524 0.15,-0.527 0.166,-0.527C0.187,-0.527 0.206,-0.522 0.223,-0.51C0.24,-0.499 0.254,-0.48 0.263,-0.453L0.263,-0.454Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,200.665,70.1072)'%3E%3Cpath d='M0.368,-0.379C0.371,-0.363 0.374,-0.345 0.376,-0.327C0.379,-0.308 0.38,-0.288 0.38,-0.268C0.38,-0.244 0.378,-0.221 0.375,-0.197C0.372,-0.174 0.366,-0.152 0.358,-0.13C0.351,-0.109 0.34,-0.09 0.327,-0.072C0.314,-0.054 0.298,-0.039 0.278,-0.027C0.262,-0.017 0.247,-0.009 0.232,-0.005C0.217,-0 0.203,0.002 0.19,0.002C0.164,0.002 0.14,-0.006 0.118,-0.022C0.097,-0.038 0.079,-0.059 0.064,-0.084C0.049,-0.11 0.038,-0.139 0.03,-0.172C0.022,-0.204 0.019,-0.237 0.019,-0.271C0.019,-0.295 0.021,-0.319 0.025,-0.343C0.029,-0.366 0.036,-0.388 0.045,-0.408C0.054,-0.428 0.066,-0.446 0.08,-0.462C0.094,-0.478 0.11,-0.49 0.129,-0.499C0.158,-0.519 0.186,-0.529 0.213,-0.529C0.231,-0.529 0.249,-0.525 0.266,-0.518C0.283,-0.51 0.298,-0.499 0.312,-0.486C0.325,-0.472 0.337,-0.457 0.347,-0.438C0.356,-0.42 0.364,-0.4 0.368,-0.379ZM0.256,-0.079C0.279,-0.101 0.295,-0.128 0.304,-0.162C0.314,-0.195 0.318,-0.229 0.318,-0.263C0.318,-0.276 0.318,-0.29 0.316,-0.302C0.315,-0.315 0.313,-0.327 0.311,-0.34C0.309,-0.349 0.306,-0.359 0.304,-0.37C0.301,-0.38 0.298,-0.391 0.294,-0.401C0.29,-0.411 0.285,-0.42 0.279,-0.429C0.273,-0.438 0.266,-0.445 0.258,-0.451C0.251,-0.456 0.245,-0.46 0.239,-0.462C0.233,-0.464 0.227,-0.465 0.222,-0.465C0.211,-0.465 0.201,-0.463 0.192,-0.459C0.182,-0.455 0.173,-0.451 0.164,-0.446L0.141,-0.435C0.139,-0.433 0.136,-0.432 0.134,-0.432C0.131,-0.431 0.129,-0.431 0.127,-0.432C0.109,-0.411 0.097,-0.387 0.089,-0.359C0.082,-0.331 0.078,-0.302 0.078,-0.273C0.078,-0.249 0.081,-0.225 0.086,-0.201C0.089,-0.186 0.093,-0.17 0.1,-0.152C0.106,-0.135 0.114,-0.118 0.124,-0.103C0.134,-0.088 0.145,-0.075 0.157,-0.064C0.17,-0.054 0.183,-0.049 0.197,-0.049C0.216,-0.049 0.236,-0.059 0.256,-0.079Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3Cg transform='matrix(10,0,0,10,204.728,70.1072)'%3E%3Cpath d='M0.264,-0.509C0.27,-0.506 0.272,-0.5 0.272,-0.493C0.272,-0.486 0.271,-0.479 0.267,-0.472C0.263,-0.465 0.258,-0.459 0.252,-0.454C0.246,-0.45 0.24,-0.449 0.234,-0.451C0.225,-0.456 0.215,-0.458 0.204,-0.458C0.186,-0.458 0.171,-0.449 0.159,-0.431C0.147,-0.412 0.138,-0.389 0.132,-0.36C0.132,-0.351 0.133,-0.34 0.133,-0.33L0.133,-0.3C0.133,-0.277 0.132,-0.254 0.132,-0.23C0.131,-0.207 0.131,-0.184 0.13,-0.161C0.128,-0.117 0.127,-0.072 0.127,-0.025C0.126,-0.016 0.123,-0.009 0.117,-0.005C0.111,-0 0.104,0.002 0.097,0.002C0.09,0.002 0.083,-0 0.077,-0.005C0.07,-0.01 0.066,-0.016 0.064,-0.023C0.061,-0.038 0.058,-0.06 0.056,-0.087C0.054,-0.115 0.053,-0.146 0.053,-0.179C0.053,-0.194 0.053,-0.21 0.054,-0.227C0.055,-0.244 0.057,-0.262 0.059,-0.28C0.061,-0.298 0.063,-0.315 0.065,-0.333C0.067,-0.35 0.07,-0.366 0.072,-0.38C0.072,-0.391 0.071,-0.402 0.07,-0.412C0.069,-0.422 0.068,-0.431 0.066,-0.438C0.064,-0.446 0.063,-0.452 0.061,-0.457C0.059,-0.461 0.057,-0.462 0.055,-0.461C0.049,-0.459 0.044,-0.459 0.04,-0.46C0.035,-0.462 0.031,-0.465 0.027,-0.468C0.024,-0.472 0.022,-0.476 0.021,-0.481C0.021,-0.486 0.022,-0.491 0.026,-0.496C0.039,-0.513 0.052,-0.521 0.065,-0.521C0.076,-0.521 0.086,-0.517 0.093,-0.509C0.1,-0.5 0.106,-0.49 0.111,-0.477C0.122,-0.493 0.134,-0.507 0.147,-0.516C0.161,-0.526 0.177,-0.53 0.195,-0.53C0.217,-0.53 0.24,-0.523 0.264,-0.509Z' style='fill-rule:nonzero;'/%3E%3C/g%3E%3C/g%3E%3Cg id='pappadam' transform='matrix(1.67916,0,0,1.67916,-19.9522,-20.1351)'%3E%3Cg id='color'%3E%3Ccircle cx='36' cy='36' r='23' style='fill:rgb(246,231,165);'/%3E%3Cpath d='M54.695,22.61C55.374,24.809 55.198,27.159 55.72,29.401C58.487,41.281 51.718,50.097 32.72,52.401C25.362,53.293 18.336,48.818 14.021,42.792C16.988,52.407 25.936,59.009 35.999,59.009C48.617,59.009 59,48.626 59,36.008C59,31.203 57.494,26.516 54.695,22.61Z' style='fill:rgb(169,142,97);fill-rule:nonzero;'/%3E%3C/g%3E%3Cg id='line'%3E%3Cpath d='M36.028,12C28.751,11.793 20.933,15.107 16.687,20.301C13.233,24.527 12.678,30.002 12.006,35.887C11.146,43.42 14.832,50.119 20.603,54.708C24.84,58.077 30.047,60.579 36.096,59.995C41.596,59.465 47.855,57.988 52.092,54.613C55.403,51.975 58.051,47.86 59.112,44.085C59.843,41.486 60.174,38.764 59.998,35.938C59.529,28.411 58.708,22.771 53.047,18.318C49.144,15.248 41.346,12.152 36.028,12ZM35.972,14C40.922,14.14 48.177,17.032 51.81,19.89C56.986,23.961 57.573,29.181 58.002,36.062C58.164,38.657 57.858,41.157 57.187,43.544C56.229,46.953 53.836,50.667 50.846,53.049C46.894,56.197 41.034,57.51 35.904,58.005C30.408,58.535 25.697,56.203 21.848,53.143C16.617,48.984 13.214,42.941 13.994,36.113C14.619,30.634 15.02,25.502 18.236,21.567C22.125,16.808 29.304,13.81 35.972,14Z'/%3E%3Cg%3E%3Cg transform='matrix(-0.124146,0.46332,-0.46332,-0.124146,50.5487,-2.10656)'%3E%3Cpath d='M50.137,22.723C50.137,20.036 52.318,17.855 55.005,17.855C57.691,17.855 59.872,20.036 59.872,22.723C59.872,23.854 60.79,24.771 61.921,24.771C63.052,24.771 63.969,23.854 63.969,22.723C63.969,17.775 59.952,13.758 55.005,13.758C50.057,13.758 46.04,17.775 46.04,22.723C46.04,23.854 46.958,24.771 48.088,24.771C49.219,24.771 50.137,23.854 50.137,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(0.081761,0.789168,-0.789168,0.081761,34.151,-12.9604)'%3E%3Cpath d='M49.327,22.723C49.327,19.589 51.871,17.045 55.005,17.045C58.138,17.045 60.682,19.589 60.682,22.723C60.682,23.406 61.237,23.961 61.921,23.961C62.604,23.961 63.159,23.406 63.159,22.723C63.159,18.222 59.505,14.568 55.005,14.568C50.504,14.568 46.85,18.222 46.85,22.723C46.85,23.406 47.405,23.961 48.088,23.961C48.772,23.961 49.327,23.406 49.327,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(0.277272,0.316219,-0.316219,0.277272,29.4007,7.69574)'%3E%3Cpath d='M50.425,22.723C50.425,20.195 52.477,18.143 55.005,18.143C57.532,18.143 59.584,20.195 59.584,22.723C59.584,24.012 60.631,25.059 61.921,25.059C63.21,25.059 64.257,24.012 64.257,22.723C64.257,17.616 60.111,13.47 55.005,13.47C49.898,13.47 45.752,17.616 45.752,22.723C45.752,24.012 46.799,25.059 48.088,25.059C49.378,25.059 50.425,24.012 50.425,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(-0.438121,-0.307036,0.307036,-0.438121,68.0244,68.2949)'%3E%3Cpath d='M49.925,22.723C49.925,19.919 52.201,17.643 55.005,17.643C57.808,17.643 60.084,19.919 60.084,22.723C60.084,23.737 60.907,24.56 61.921,24.56C62.935,24.56 63.758,23.737 63.758,22.723C63.758,17.892 59.836,13.97 55.005,13.97C50.174,13.97 46.252,17.892 46.252,22.723C46.252,23.737 47.075,24.56 48.088,24.56C49.102,24.56 49.925,23.737 49.925,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(-0.209862,0.213524,-0.213524,-0.209862,61.5276,15.4348)'%3E%3Cpath d='M51.37,22.723C51.37,20.717 52.999,19.089 55.005,19.089C57.01,19.089 58.639,20.717 58.639,22.723C58.639,24.534 60.109,26.005 61.921,26.005C63.732,26.005 65.203,24.534 65.203,22.723C65.203,17.094 60.633,12.524 55.005,12.524C49.376,12.524 44.806,17.094 44.806,22.723C44.806,24.534 46.277,26.005 48.088,26.005C49.9,26.005 51.37,24.534 51.37,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(-0.104501,0.390004,-0.390004,-0.104501,38.51,26.4543)'%3E%3Cpath d='M50.522,22.723C50.522,20.249 52.531,18.24 55.005,18.24C57.479,18.24 59.487,20.249 59.487,22.723C59.487,24.066 60.578,25.157 61.921,25.157C63.264,25.157 64.355,24.066 64.355,22.723C64.355,17.562 60.165,13.373 55.005,13.373C49.844,13.373 45.655,17.562 45.655,22.723C45.655,24.066 46.745,25.157 48.088,25.157C49.432,25.157 50.522,24.066 50.522,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(-0.200853,0.145991,-0.145991,-0.200853,47.4251,35.3069)'%3E%3Cpath d='M52.046,22.723C52.046,21.09 53.372,19.764 55.005,19.764C56.638,19.764 57.964,21.09 57.964,22.723C57.964,24.907 59.737,26.68 61.921,26.68C64.105,26.68 65.878,24.907 65.878,22.723C65.878,16.722 61.006,11.849 55.005,11.849C49.003,11.849 44.131,16.722 44.131,22.723C44.131,24.907 45.904,26.68 48.088,26.68C50.272,26.68 52.046,24.907 52.046,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(0.328565,-0.71718,0.71718,0.328565,5.18494,82.5899)'%3E%3Cpath d='M49.334,22.723C49.334,19.593 51.875,17.052 55.005,17.052C58.134,17.052 60.675,19.593 60.675,22.723C60.675,23.41 61.233,23.969 61.921,23.969C62.608,23.969 63.167,23.41 63.167,22.723C63.167,18.218 59.509,14.561 55.005,14.561C50.5,14.561 46.843,18.218 46.843,22.723C46.843,23.41 47.401,23.969 48.088,23.969C48.776,23.969 49.334,23.41 49.334,22.723Z'/%3E%3C/g%3E%3Cg transform='matrix(-0.387801,0.297417,-0.297417,-0.387801,78.4477,23.4791)'%3E%3Cpath d='M50.099,22.723C50.099,20.015 52.297,17.817 55.005,17.817C57.712,17.817 59.91,20.015 59.91,22.723C59.91,23.833 60.811,24.734 61.921,24.734C63.031,24.734 63.932,23.833 63.932,22.723C63.932,17.796 59.932,13.796 55.005,13.796C50.078,13.796 46.078,17.796 46.078,22.723C46.078,23.833 46.979,24.734 48.088,24.734C49.198,24.734 50.099,23.833 50.099,22.723Z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
                href: "https://www.digitalmalayali.in/",
                alt: "Pappadam",
                width: "539",
                height: "162"
            }))), p("div", {
                class: Y
            }, n && p("svg", {
                class: "_blob-svg_19rbd_105 abs-fill",
                viewBox: "-1.25 -1.25 2.5 2.5",
                preserveAspectRatio: "xMidYMid slice"
            }, te.map(e => p("path", {
                d: e.map((t, n) => {
                    const i = n === e.length - 1 ? 0 : n + 1;
                    let o = "";
                    return 0 === n && (o += `M${t[2]} ${t[3]}`), o + `C${t[4]} ${t[5]} ${e[i][0]} ${e[i][1]} ${e[i][2]} ${e[i][3]}`
                }).join("")
            }))), p("div", {
                class: "_load-img-content_19rbd_127",
                style: {
                    visibility: ""
                }
            }, p("button", {
                class: "_load-btn_19rbd_161 unbutton",
                onClick: this.onOpenClick
            }, p("svg", {
                viewBox: "0 0 24 24",
                class: "_load-icon_19rbd_169"
            }, p("path", {
                d: "M19 7v3h-2V7h-3V5h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"
            }))), p("div", null, p("span", {
                class: "_drop-text_19rbd_711"
            }, "Drop "), "OR", " ", re ? p("button", {
                class: "_paste-btn_19rbd_185 unbutton",
                onClick: this.onPasteClick
            }, "Paste") : "Paste")))), p("div", {
                class: "_demos-container_19rbd_199"
            }, p("svg", {
                viewBox: "0 0 1920 140",
                class: G
            }, p("path", {
                d: "M1920 0l-107 28c-106 29-320 85-533 93-213 7-427-36-640-50s-427 0-533 7L0 85v171h1920z",
                class: "_sub-wave_19rbd_233"
            }), p("path", {
                d: "M0 129l64-26c64-27 192-81 320-75 128 5 256 69 384 64 128-6 256-80 384-91s256 43 384 70c128 26 256 26 320 26h64v96H0z",
                class: "_main-wave_19rbd_225"
            })), p("div", {
                class: "_content-padding_19rbd_473"
            }, p("p", {
                class: "_demo-title_19rbd_593"
            }, "മടിച്ചുനിൽക്കാതെ കടന്നുവരൂ, ", p("strong", null, "ഇതിലൊരെണ്ണത്തെ ‘പഞ്ഞിക്കിടൂ’"), ":"), p("ul", {
                class: "_demos_19rbd_199"
            }, ie.map((t, n) => p("li", null, p("button", {
                class: "unbutton",
                onClick: e => this.onDemoClick(n, e)
            }, p("div", null, p("div", {
                class: "_demo-icon-container_19rbd_665"
            }, p("img", {
                class: "_demo-icon_19rbd_665",
                src: t.iconUrl,
                alt: t.description
            }), e === n && p("div", {
                class: "_demo-loader_19rbd_685 abs-fill"
            }, p("loading-spinner", null))), p("div", {
                class: "_demo-size_19rbd_647"
            }, t.size)))))))), p("div", {
                class: "_bottom-wave_19rbd_241"
            }, p("svg", {
                viewBox: "0 0 1920 79",
                class: G
            }, p("path", {
                d: "M0 59l64-11c64-11 192-34 320-43s256-5 384 4 256 23 384 34 256 21 384 14 256-30 320-41l64-11v94H0z",
                class: "_info-wave_19rbd_437"
            }))), p("section", {
                class: W
            }, p("div", {
                class: H
            }, p(ne, null, p("div", {
                class: R
            }, p("div", {
                class: K
            }, p("h2", {
                class: Z
            }, "സുന്ദരം"), p("p", {
                class: J
            }, "വലിപ്പം കുറവുള്ള ഇമേജ് ഫയലുകൾ ഠപ്പേന്ന് ലോഡാവും. സൈസ് തുച്ഛം ഗുണം മെച്ചം എന്ന ലൈനാണ് ‘പപ്പടത്തിന്റേത്’.")), p("div", {
                class: X
            }, p("img", {
                class: $,
                src: "/img/small-db1eae6f.svg",
                alt: "silhouette of a large 2 megabyte image shrunk into a smaller 82 kilobyte image",
                width: "536",
                height: "522"
            })))))), p("section", {
                class: W
            }, p("div", {
                class: H
            }, p(ne, null, p("div", {
                class: R
            }, p("div", {
                class: K
            }, p("h2", {
                class: Z
            }, "ലളിതം"), p("p", {
                class: J
            }, "ഫയൽ ഇട്ട്, മാറ്റങ്ങളൊക്കെ നോക്കി, അങ്ങ്ട് സേവ് ചെയ്യുക - പരിപാടി കഴിഞ്ഞു! കൗതുകം കൂടുതലാണോ? സെറ്റിങ്സിലെ കുന്ത്രാണ്ടങ്ങളിലൊക്കെ ഒന്ന് പിടിച്ചും തിരിച്ചും നോക്കാം.")), p("div", {
                class: X
            }, p("img", {
                class: $,
                src: "/img/simple-258b6ed5.svg",
                alt: "grid of multiple images",
                width: "538",
                height: "384"
            })))))), p("section", {
                class: W
            }, p("div", {
                class: H
            }, p(ne, null, p("div", {
                class: R
            }, p("div", {
                class: K
            }, p("h2", {
                class: Z
            }, "സുരക്ഷിതം"), p("p", {
                class: J
            }, "സ്വകാര്യതയെപ്പറ്റി ടെൻഷനൊന്നും വേണ്ടാ! കാരണം, ഇമേജ് ഫയലുകൾ നിങ്ങളുടെ ഡിവൈസിൽ തന്നെയാണ്, എങ്ങോട്ടും അപ്‌ലോഡാകുന്നില്ല! അതായത് ‘പപ്പടം’ തനി ലോക്കലാണെന്ന്. ഇതിപ്പൊ ലാഭായല്ലോ!")), p("div", {
                class: X
            }, p("img", {
                class: $,
                src: "/img/secure-a66bbdfe.svg",
                alt: "silhouette of a cloud with a 'no' symbol on top",
                width: "498",
                height: "333"
            })))))), p("footer", {
                class: "_footer_19rbd_445"
            }, p("div", {
                class: "_footer-container_19rbd_455"
            }, p("svg", {
                viewBox: "0 0 1920 79",
                class: G
            }, p("path", {
                d: "M0 59l64-11c64-11 192-34 320-43s256-5 384 4 256 23 384 34 256 21 384 14 256-30 320-41l64-11v94H0z",
                class: "_footer-wave_19rbd_465"
            })), p("div", {
                class: "_footer-padding_19rbd_481"
            }, p("footer", {
                class: "_footer-items_19rbd_489"
            }, p("a", {
                class: ee,
                href: "https://www.digitalmalayali.in",
                target: "_blank"
            }, "ഡിജിറ്റൽ മലയാളി"), p("a", {
                class: ee,
                href: "https://github.com/digitalmalayali/pappadam#%E0%B4%B8%E0%B5%8D%E0%B4%B5%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B5%8D%E0%B4%AF%E0%B4%A4-"
            }, "സ്വകാര്യത"), p("a", {
                class: "_footer-link-with-logo_19rbd_529 _footer-link_19rbd_519",
                href: "https://github.com/digitalmalayali/pappadam"
            }, p("img", {
                src: "/img/github-logo-eaea4a88.svg",
                alt: "",
                width: "10",
                height: "10"
            }), "ഗിറ്റ്ഹബ്ബ്"))))), t && p("button", {
                class: "_install-btn_19rbd_567 unbutton",
                onClick: this.onInstallClick
            }, "Install"))
        }
    }
    const le = "/editor",
        ce = e("./Compress-0ac4f2d5"),
        _e = e("./sw-bridge-113d10b4");

    function de() {
        window.history.back()
    }
    class pe extends f {
        constructor() {
            super(), this.state = {
                awaitingShareTarget: new URL(location.href).searchParams.has("share-target"),
                isEditorOpen: !1,
                file: void 0,
                Compress: void 0
            }, this.onFileDrop = ({
                files: e
            }) => {
                if (!e || 0 === e.length) return;
                const t = e[0];
                this.openEditor(), this.setState({
                    file: t
                })
            }, this.onIntroPickFile = e => {
                this.openEditor(), this.setState({
                    file: e
                })
            }, this.showSnack = (e, t = {}) => {
                if (!this.snackbar) throw Error("Snackbar missing");
                return this.snackbar.showSnackbar(e, t)
            }, this.onPopState = () => {
                this.setState({
                    isEditorOpen: location.pathname === le
                })
            }, this.openEditor = () => {
                if (this.state.isEditorOpen) return;
                const e = new URL(location.href);
                e.pathname = le, history.pushState(null, "", e.href), this.setState({
                    isEditorOpen: !0
                })
            }, ce.then(e => {
                this.setState({
                    Compress: e.default
                })
            }).catch(() => {
                this.showSnack("Failed to load app")
            }), _e.then(async ({
                offliner: e,
                getSharedImage: t
            }) => {
                if (e(this.showSnack), !this.state.awaitingShareTarget) return;
                const n = await t();
                history.replaceState("", "", "/"), this.openEditor(), this.setState({
                    file: n,
                    awaitingShareTarget: !1
                })
            }), document.body.addEventListener("gesturestart", e => {
                e.preventDefault()
            }), window.addEventListener("popstate", this.onPopState)
        }
        render({ }, {
            file: e,
            isEditorOpen: t,
            Compress: n,
            awaitingShareTarget: i
        }) {
            const o = i || t && !n;
            return p("div", {
                class: "_app_13ky7_1"
            }, p("file-drop", {
                onfiledrop: this.onFileDrop,
                class: "_drop_13ky7_21"
            }, o ? p("loading-spinner", {
                class: "_app-loader_13ky7_121"
            }) : t ? n && p(n, {
                file: e,
                showSnack: this.showSnack,
                onBack: de
            }) : p(ae, {
                onFile: this.onIntroPickFile,
                showSnack: this.showSnack
            }), p("snack-bar", {
                ref: M(this, "snackbar")
            })))
        }
    }
    const he = document.getElementById("app");
    !async function () {
        ! function (e, t, i) {
            var o, s, c;
            n.__ && n.__(e, t), s = (o = i === r) ? null : i && i.__k || t.__k, e = p(u, null, [e]), c = [], C(t, (o ? t : i || t).__k = e, s || a, a, void 0 !== t.ownerSVGElement, i && !o ? [i] : s ? null : t.childNodes.length ? l.slice.call(t.childNodes) : null, c, i || a, o), A(c, e)
        }(p(pe, null), he)
    }();
    t.appendCss = P, t.d = f, t.h = p, t.linkRef = M, t.loadImg = Y, t.p = u, t.startBlobs = te, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));