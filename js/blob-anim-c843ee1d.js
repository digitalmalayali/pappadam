define(["exports", "./initial-app-c3b1146f"], (function(t, e) {
    const a = .25;

    function o(t) {
        const e = Math.random() * a,
            o = Math.random() * Math.PI * 2,
            i = Math.sin(o) * e,
            n = Math.cos(o) * e;
        return [t[0] + i, t[1] + n, t[2] + i, t[3] + n, t[4] + i, t[5] + n]
    }

    function i(t) {
        return t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
    }
    const n = (t, e) => Math.random() * (e - t) + t,
        s = [
            [-.304, -1, 0, -1, .304, -1],
            [.592, -.861, .782, -.623, .972, -.386],
            [1.043, -.074, .975, .223, .907, .519],
            [.708, .769, .434, .901, .16, 1.033],
            [-.16, 1.033, -.434, .901, -.708, .769],
            [-.907, .519, -.975, .223, -1.043, -.074],
            [-.972, -.386, -.782, -.623, -.592, -.861]
        ];
    class r {
        constructor(t, {
            startPoints: e = t.map(t => o(t)),
            minDuration: a = 4e3,
            maxDuration: i = 11e3
        } = {}) {
            this.points = e, this.minDuration = a, this.maxDuration = i, this.animStates = t.map((t, s) => ({
                basePoint: t,
                pos: 0,
                duration: n(a, i),
                startPoint: e[s],
                endPoint: o(t)
            }))
        }
        advance(t) {
            this.points = this.animStates.map(e => {
                e.pos += t / e.duration, e.pos >= 1 && (e.startPoint = e.endPoint, e.pos = 0, e.duration = n(this.minDuration, this.maxDuration), e.endPoint = o(e.basePoint));
                const a = i(e.pos);
                return e.startPoint.map((t, o) => (e.endPoint[o] - t) * a + t)
            })
        }
        draw(t) {
            const e = this.points;
            t.beginPath(), t.moveTo(e[0][2], e[0][3]);
            for (let a = 0; a < e.length; a++) {
                const o = a === e.length - 1 ? 0 : a + 1;
                t.bezierCurveTo(e[a][4], e[a][5], e[o][0], e[o][1], e[o][2], e[o][3])
            }
            t.closePath(), t.fill()
        }
    }
    class h {
        constructor() {
            this.rotatePos = 0, this.blobs = Array.from({
                length: 4
            }, (t, a) => new r(s, {
                startPoints: e.startBlobs[a]
            }))
        }
        advance(t) {
            this.rotatePos = (this.rotatePos + t / 12e4) % 1;
            for (const e of this.blobs) e.advance(t)
        }
        draw(t, e, a, o) {
            t.save(), t.translate(e, a), t.scale(o, o), t.rotate(2 * Math.PI * this.rotatePos);
            for (const e of this.blobs) e.draw(t);
            t.restore()
        }
    }
    const l = .0015;
    class c {
        constructor(t) {
            this.bgBlobs = [], this.overallAlphaPos = 0;
            const e = Math.round(t.width * t.height * 25e-6);
            this.bgBlobs = Array.from({
                length: e
            }, () => {
                const e = 0 === (a = Math.random()) ? 0 : Math.pow(2, 10 * a - 10);
                var a;
                return {
                    blob: new r(s, {
                        minDuration: 2e3,
                        maxDuration: 5e3
                    }),
                    velocity: .0055 * (1 - e) + l,
                    alpha: Math.random() ** 3 * (.8 - .2) + .2,
                    alphaMultiplier: 1,
                    spinTime: n(2e4, 6e4),
                    rotatePos: 0,
                    radius: 53 * e + 7,
                    x: Math.random() * t.width,
                    y: Math.random() * t.height
                }
            })
        }
        advance(t, e, a, o, i) {
            1 !== this.overallAlphaPos && (this.overallAlphaPos = Math.min(1, this.overallAlphaPos + t / 2e3));
            for (const n of this.bgBlobs) {
                n.blob.advance(t);
                let s = Math.hypot(n.x - a, n.y - o);
                if (n.rotatePos = (n.rotatePos + t / n.spinTime) % 1, s < 10) switch (Math.floor(4 * Math.random())) {
                    case 0:
                        n.x = Math.random() * e.width, n.y = -1.25 * n.radius;
                        break;
                    case 1:
                        n.x = -1.25 * n.radius, n.y = Math.random() * e.height;
                        break;
                    case 2:
                        n.x = Math.random() * e.width, n.y = e.height + 1.25 * n.radius;
                        break;
                    case 3:
                        n.x = e.width + 1.25 * n.radius, n.y = Math.random() * e.height
                }
                s = Math.hypot(n.x - a, n.y - o);
                const r = (s > 300 ? n.velocity : (14 * (1 - s / 300) + 1) * n.velocity) * t,
                    h = Math.atan2(a - n.x, o - n.y),
                    l = Math.sin(h) * r,
                    c = Math.cos(h) * r;
                n.x += l, n.y += c, n.alphaMultiplier = Math.min(s / i, 1)
            }
        }
        draw(t) {
            const e = i(this.overallAlphaPos);
            for (const a of this.bgBlobs) t.save(), t.globalAlpha = a.alpha * a.alphaMultiplier * e, t.translate(a.x, a.y), t.scale(a.radius, a.radius), t.rotate(2 * Math.PI * a.rotatePos), a.blob.draw(t), t.restore()
        }
    }
    t.startBlobAnim = function(t) {
        let a;
        const o = t.getContext("2d"),
            i = new h;
        let n;
        const s = document.querySelector("." + e.loadImg);
        let r = document.hasFocus(),
            l = r ? 1 : 0,
            d = !0;
        const u = () => {
                "visible" === document.visibilityState && (a = performance.now())
            },
            m = () => {
                r = !0, d || M()
            },
            b = () => {
                r = !1
            },
            p = new ResizeObserver(() => {
                d || v(0)
            });

        function v(e) {
            const a = t.getBoundingClientRect();
            t.width = a.width * devicePixelRatio, t.height = a.height * devicePixelRatio;
            const r = s.getBoundingClientRect(),
                h = getComputedStyle(t),
                l = h.getPropertyValue("--blob-pink"),
                d = r.left - a.left + r.width / 2,
                u = r.top - a.top + r.height / 2,
                m = r.height / 2 / 1.25;
            o.scale(devicePixelRatio, devicePixelRatio), n || (n = new c(a)), n.advance(e, a, d, u, m), i.advance(e), o.globalAlpha = Number(h.getPropertyValue("--center-blob-opacity")), o.fillStyle = l, n.draw(o), i.draw(o, d, u, m)
        }

        function P(e) {
            if (!t.isConnected) return removeEventListener("focus", m), removeEventListener("blur", b), p.disconnect(), void document.removeEventListener("visibilitychange", u);
            if (r) 1 !== l && (l = Math.min(1, l + .01));
            else if (l = Math.max(0, l - .01), 0 === l) return void(d = !1);
            const o = (e - a) * l;
            a = e, v(o), requestAnimationFrame(P)
        }

        function M() {
            d = !0, requestAnimationFrame(t => {
                a = t, P(t)
            })
        }
        p.observe(t), addEventListener("focus", m), addEventListener("blur", b), document.addEventListener("visibilitychange", u), M()
    }
}));