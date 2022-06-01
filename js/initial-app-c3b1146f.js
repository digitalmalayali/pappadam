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
define(["require", "exports"], (function(e, t) {
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
        for (var e; b.__r = i.length;) e = i.sort((function(e, t) {
            return e.__v.__b - t.__v.__b
        })), i = [], e.some((function(e) {
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
                    null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, k), null != p.componentDidUpdate && p.__h.push((function() {
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
        n.__c && n.__c(t, e), e.some((function(t) {
            try {
                e = t.__h, t.__h = [], e.some((function(e) {
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
            }(function(e, t, n, i, o) {
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
        __e: function(e, t) {
            for (var n, i, o, s = t.__h; t = t.__;)
                if ((n = t.__c) && !n.__) try {
                    if ((i = n.constructor) && null != i.getDerivedStateFromError && (n.setState(i.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o) return t.__h = s, n.__E = n
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, f.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this.__h.push(t), v(this))
    }, f.prototype.forceUpdate = function(e) {
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
            super(e, t), this instanceof(n = T) || Object.setPrototypeOf(this, n.prototype), this._files = t.files, this._action = t.action
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
                    if (!o.isIntersecting) return t = !0, void(e.style.opacity = "0");
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
            filename: "photo.jpg",
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
                    }), this.props.showSnack("Couldn't fetch demo image")
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
                const t = await async function(e) {
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
        render({}, {
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
            }, p("img", {
                class: "_logo_19rbd_71",
                src: "/img/pappadam_logo.svg",
                alt: "Pappadam",
                width: "539",
                height: "162"
            })), p("div", {
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
                alt: "silhouette of a large 1.4 megabyte image shrunk into a smaller 80 kilobyte image",
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
                alt: "grid of multiple shrunk images displaying various options",
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
                href: "https://www.digitalmalayali.in"
            }, "ഡിജിറ്റൽ മലയാളി"),p("a", {
                class: ee,
                href: "https://github.com/digitalmalayali/pappadam#%E0%B4%B8%E0%B5%8D%E0%B4%B5%E0%B4%95%E0%B4%BE%E0%B4%B0%E0%B5%8D%E0%B4%AF%E0%B4%A4-"
            }, "സ്വകാര്യത"), p("a", {
                class: ee,
                href: "https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli"
            }, "Squoosh CLI"), p("a", {
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
        render({}, {
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
    !async function() {
        ! function(e, t, i) {
            var o, s, c;
            n.__ && n.__(e, t), s = (o = i === r) ? null : i && i.__k || t.__k, e = p(u, null, [e]), c = [], C(t, (o ? t : i || t).__k = e, s || a, a, void 0 !== t.ownerSVGElement, i && !o ? [i] : s ? null : t.childNodes.length ? l.slice.call(t.childNodes) : null, c, i || a, o), A(c, e)
        }(p(pe, null), he)
    }();
    t.appendCss = P, t.d = f, t.h = p, t.linkRef = M, t.loadImg = Y, t.p = u, t.startBlobs = te, Object.defineProperty(t, "__esModule", {
        value: !0
    })
}));