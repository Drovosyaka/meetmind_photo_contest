/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/ 774:
        /***/ ((module) => {

            !function (e, t) {
                true ? module.exports = t() : 0;
            }(window, function () {
                return function (e) {
                    var t = {};

                    function n(a) {
                        if (t[a]) return t[a].exports;
                        var r = t[a] = {
                            i: a,
                            l: !1,
                            exports: {}
                        };
                        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
                    }

                    return n.m = e, n.c = t, n.d = function (e, t, a) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: a
                        });
                    }, n.r = function (e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function (e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var a = Object.create(null);
                        if (n.r(a), Object.defineProperty(a, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function (t) {
                            return e[t];
                        }.bind(null, r));
                        return a;
                    }, n.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default;
                        } : function () {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 0);
                }([function (e, t, n) {
                    "use strict";

                    n.r(t);
                    var a = [],
                        r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        o = {
                            t: "top",
                            r: "right",
                            b: "bottom",
                            l: "left",
                            c: "centered"
                        };

                    function s() {
                    }

                    var l = ["click", "focusin", "keydown", "input"];

                    function d(e) {
                        l.forEach(function (t) {
                            e.addEventListener(t, e === document ? L : Y);
                        });
                    }

                    function c(e) {
                        return Array.isArray(e) ? e.map(c) : "[object Object]" === x(e) ? Object.keys(e).reduce(function (t, n) {
                            return t[n] = c(e[n]), t;
                        }, {}) : e;
                    }

                    function u(e, t) {
                        var n = e.calendar.querySelector(".qs-overlay"),
                            a = n && !n.classList.contains("qs-hidden");
                        t = t || new Date(e.currentYear, e.currentMonth), e.calendar.innerHTML = [h(t, e, a), f(t, e, a), v(e, a)].join(""), a && window.requestAnimationFrame(function () {
                            M(!0, e);
                        });
                    }

                    function h(e, t, n) {
                        return ['<div class="qs-controls' + (n ? " qs-blur" : "") + '">', '<div class="qs-arrow qs-left"></div>', '<div class="qs-month-year">', '<span class="qs-month">' + t.months[e.getMonth()] + "</span>", '<span class="qs-year">' + e.getFullYear() + "</span>", "</div>", '<div class="qs-arrow qs-right"></div>', "</div>"].join("");
                    }

                    function f(e, t, n) {
                        var a = t.currentMonth,
                            r = t.currentYear,
                            i = t.dateSelected,
                            o = t.maxDate,
                            s = t.minDate,
                            l = t.showAllDates,
                            d = t.days,
                            c = t.disabledDates,
                            u = t.startDay,
                            h = t.weekendIndices,
                            f = t.events,
                            v = t.getRange ? t.getRange() : {},
                            m = +v.start,
                            y = +v.end,
                            p = g(new Date(e).setDate(1)),
                            w = p.getDay() - u,
                            D = w < 0 ? 7 : 0;
                        p.setMonth(p.getMonth() + 1), p.setDate(0);
                        var b = p.getDate(),
                            q = [],
                            S = D + 7 * ((w + b) / 7 | 0);
                        S += (w + b) % 7 ? 7 : 0;

                        for (var M = 1; M <= S; M++) {
                            var E = (M - 1) % 7,
                                x = d[E],
                                C = M - (w >= 0 ? w : 7 + w),
                                L = new Date(r, a, C),
                                Y = f[+L],
                                j = C < 1 || C > b,
                                P = j ? C < 1 ? -1 : 1 : 0,
                                k = j && !l,
                                O = k ? "" : L.getDate(),
                                N = +L == +i,
                                _ = E === h[0] || E === h[1],
                                I = m !== y,
                                A = "qs-square " + x;

                            Y && !k && (A += " qs-event"), j && (A += " qs-outside-current-month"), !l && j || (A += " qs-num"), N && (A += " qs-active"), (c[+L] || t.disabler(L) || _ && t.noWeekends || s && +L < +s || o && +L > +o) && !k && (A += " qs-disabled"), +g(new Date()) == +L && (A += " qs-current"), +L === m && y && I && (A += " qs-range-start"), +L > m && +L < y && (A += " qs-range-middle"), +L === y && m && I && (A += " qs-range-end"), k && (A += " qs-empty", O = ""), q.push('<div class="' + A + '" data-direction="' + P + '">' + O + "</div>");
                        }

                        var R = d.map(function (e) {
                            return '<div class="qs-square qs-day">' + e + "</div>";
                        }).concat(q);
                        return R.unshift('<div class="qs-squares' + (n ? " qs-blur" : "") + '">'), R.push("</div>"), R.join("");
                    }

                    function v(e, t) {
                        var n = e.overlayPlaceholder,
                            a = e.overlayButton;
                        return ['<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">', "<div>", '<input class="qs-overlay-year" placeholder="' + n + '" inputmode="numeric" />', '<div class="qs-close">&#10005;</div>', "</div>", '<div class="qs-overlay-month-container">' + e.overlayMonths.map(function (e, t) {
                            return '<div class="qs-overlay-month" data-month-num="' + t + '">' + e + "</div>";
                        }).join("") + "</div>", '<div class="qs-submit qs-disabled">' + a + "</div>", "</div>"].join("");
                    }

                    function m(e, t, n) {
                        var a = t.el,
                            r = t.calendar.querySelector(".qs-active"),
                            i = e.textContent,
                            o = t.sibling;
                        (a.disabled || a.readOnly) && t.respectDisabledReadOnly || (t.dateSelected = n ? void 0 : new Date(t.currentYear, t.currentMonth, i), r && r.classList.remove("qs-active"), n || e.classList.add("qs-active"), p(a, t, n), n || q(t), o && (y({
                            instance: t,
                            deselect: n
                        }), t.first && !o.dateSelected && (o.currentYear = t.currentYear, o.currentMonth = t.currentMonth, o.currentMonthName = t.currentMonthName), u(t), u(o)), t.onSelect(t, n ? void 0 : new Date(t.dateSelected)));
                    }

                    function y(e) {
                        var t = e.instance.first ? e.instance : e.instance.sibling,
                            n = t.sibling;
                        t === e.instance ? e.deselect ? (t.minDate = t.originalMinDate, n.minDate = n.originalMinDate) : n.minDate = t.dateSelected : e.deselect ? (n.maxDate = n.originalMaxDate, t.maxDate = t.originalMaxDate) : t.maxDate = n.dateSelected;
                    }

                    function p(e, t, n) {
                        if (!t.nonInput) return n ? e.value = "" : t.formatter !== s ? t.formatter(e, t.dateSelected, t) : void (e.value = t.dateSelected.toDateString());
                    }

                    function w(e, t, n, a) {
                        n || a ? (n && (t.currentYear = +n), a && (t.currentMonth = +a)) : (t.currentMonth += e.contains("qs-right") ? 1 : -1, 12 === t.currentMonth ? (t.currentMonth = 0, t.currentYear++) : -1 === t.currentMonth && (t.currentMonth = 11, t.currentYear--)), t.currentMonthName = t.months[t.currentMonth], u(t), t.onMonthChange(t);
                    }

                    function D(e) {
                        if (!e.noPosition) {
                            var t = e.position.top,
                                n = e.position.right;
                            if (e.position.centered) return e.calendarContainer.classList.add("qs-centered");
                            var a = e.positionedEl.getBoundingClientRect(),
                                r = e.el.getBoundingClientRect(),
                                i = e.calendarContainer.getBoundingClientRect(),
                                o = r.top - a.top + (t ? -1 * i.height : r.height) + "px",
                                s = r.left - a.left + (n ? r.width - i.width : 0) + "px";
                            e.calendarContainer.style.setProperty("top", o), e.calendarContainer.style.setProperty("left", s);
                        }
                    }

                    function b(e) {
                        return "[object Date]" === x(e) && "Invalid Date" !== e.toString();
                    }

                    function g(e) {
                        if (b(e) || "number" == typeof e && !isNaN(e)) {
                            var t = new Date(+e);
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                        }
                    }

                    function q(e) {
                        e.disabled || !e.calendarContainer.classList.contains("qs-hidden") && !e.alwaysShow && ("overlay" !== e.defaultView && M(!0, e), e.calendarContainer.classList.add("qs-hidden"), e.onHide(e));
                    }

                    function S(e) {
                        e.disabled || (e.calendarContainer.classList.remove("qs-hidden"), "overlay" === e.defaultView && M(!1, e), D(e), e.onShow(e));
                    }

                    function M(e, t) {
                        var n = t.calendar,
                            a = n.querySelector(".qs-overlay"),
                            r = a.querySelector(".qs-overlay-year"),
                            i = n.querySelector(".qs-controls"),
                            o = n.querySelector(".qs-squares");
                        e ? (a.classList.add("qs-hidden"), i.classList.remove("qs-blur"), o.classList.remove("qs-blur"), r.value = "") : (a.classList.remove("qs-hidden"), i.classList.add("qs-blur"), o.classList.add("qs-blur"), r.focus());
                    }

                    function E(e, t, n, a) {
                        var r = isNaN(+new Date().setFullYear(t.value || void 0)),
                            i = r ? null : t.value;
                        if (13 === e.which || 13 === e.keyCode || "click" === e.type) a ? w(null, n, i, a) : r || t.classList.contains("qs-disabled") || w(null, n, i); else if (n.calendar.contains(t)) {
                            n.calendar.querySelector(".qs-submit").classList[r ? "add" : "remove"]("qs-disabled");
                        }
                    }

                    function x(e) {
                        return {}.toString.call(e);
                    }

                    function C(e) {
                        a.forEach(function (t) {
                            t !== e && q(t);
                        });
                    }

                    function L(e) {
                        if (!e.__qs_shadow_dom) {
                            var t = e.which || e.keyCode,
                                n = e.type,
                                r = e.target,
                                o = r.classList,
                                s = a.filter(function (e) {
                                    return e.calendar.contains(r) || e.el === r;
                                })[0],
                                l = s && s.calendar.contains(r);
                            if (!(s && s.isMobile && s.disableMobile)) if ("click" === n) {
                                if (!s) return a.forEach(q);
                                if (s.disabled) return;
                                var d = s.calendar,
                                    c = s.calendarContainer,
                                    h = s.disableYearOverlay,
                                    f = s.nonInput,
                                    v = d.querySelector(".qs-overlay-year"),
                                    y = !!d.querySelector(".qs-hidden"),
                                    p = d.querySelector(".qs-month-year").contains(r),
                                    D = r.dataset.monthNum;
                                if (s.noPosition && !l) (c.classList.contains("qs-hidden") ? S : q)(s); else if (o.contains("qs-arrow")) w(o, s); else if (p || o.contains("qs-close")) h || M(!y, s); else if (D) E(e, v, s, D); else {
                                    if (o.contains("qs-disabled")) return;

                                    if (o.contains("qs-num")) {
                                        var b = r.textContent,
                                            g = +r.dataset.direction,
                                            x = new Date(s.currentYear, s.currentMonth + g, b);

                                        if (g) {
                                            s.currentYear = x.getFullYear(), s.currentMonth = x.getMonth(), s.currentMonthName = i[s.currentMonth], u(s);

                                            for (var L, Y = s.calendar.querySelectorAll('[data-direction="0"]'), j = 0; !L;) {
                                                var P = Y[j];
                                                P.textContent === b && (L = P), j++;
                                            }

                                            r = L;
                                        }

                                        return void (+x == +s.dateSelected ? m(r, s, !0) : r.classList.contains("qs-disabled") || m(r, s));
                                    }

                                    o.contains("qs-submit") ? E(e, v, s) : f && r === s.el && (S(s), C(s));
                                }
                            } else if ("focusin" === n && s) S(s), C(s); else if ("keydown" === n && 9 === t && s) q(s); else if ("keydown" === n && s && !s.disabled) {
                                var k = !s.calendar.querySelector(".qs-overlay").classList.contains("qs-hidden");
                                13 === t && k && l ? E(e, r, s) : 27 === t && k && l && M(!0, s);
                            } else if ("input" === n) {
                                if (!s || !s.calendar.contains(r)) return;
                                var O = s.calendar.querySelector(".qs-submit"),
                                    N = r.value.split("").reduce(function (e, t) {
                                        return e || "0" !== t ? e + (t.match(/[0-9]/) ? t : "") : "";
                                    }, "").slice(0, 4);
                                r.value = N, O.classList[4 === N.length ? "remove" : "add"]("qs-disabled");
                            }
                        }
                    }

                    function Y(e) {
                        L(e), e.__qs_shadow_dom = !0;
                    }

                    function j(e, t) {
                        l.forEach(function (n) {
                            e.removeEventListener(n, t);
                        });
                    }

                    function P() {
                        S(this);
                    }

                    function k() {
                        q(this);
                    }

                    function O(e, t) {
                        var n = g(e),
                            a = this.currentYear,
                            r = this.currentMonth,
                            i = this.sibling;
                        if (null == e) return this.dateSelected = void 0, p(this.el, this, !0), i && (y({
                            instance: this,
                            deselect: !0
                        }), u(i)), u(this), this;
                        if (!b(e)) throw new Error("`setDate` needs a JavaScript Date object.");
                        if (this.disabledDates[+n] || n < this.minDate || n > this.maxDate) throw new Error("You can't manually set a date that's disabled.");
                        this.dateSelected = n, t && (this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), this.currentMonthName = this.months[n.getMonth()]), p(this.el, this), i && (y({
                            instance: this
                        }), u(i));
                        var o = a === n.getFullYear() && r === n.getMonth();
                        return o || t ? u(this, n) : o || u(this, new Date(a, r, 1)), this;
                    }

                    function N(e) {
                        return I(this, e, !0);
                    }

                    function _(e) {
                        return I(this, e);
                    }

                    function I(e, t, n) {
                        var a = e.dateSelected,
                            r = e.first,
                            i = e.sibling,
                            o = e.minDate,
                            s = e.maxDate,
                            l = g(t),
                            d = n ? "Min" : "Max";

                        function c() {
                            return "original" + d + "Date";
                        }

                        function h() {
                            return d.toLowerCase() + "Date";
                        }

                        function f() {
                            return "set" + d;
                        }

                        function v() {
                            throw new Error("Out-of-range date passed to " + f());
                        }

                        if (null == t) e[c()] = void 0, i ? (i[c()] = void 0, n ? (r && !a || !r && !i.dateSelected) && (e.minDate = void 0, i.minDate = void 0) : (r && !i.dateSelected || !r && !a) && (e.maxDate = void 0, i.maxDate = void 0)) : e[h()] = void 0; else {
                            if (!b(t)) throw new Error("Invalid date passed to " + f());
                            i ? ((r && n && l > (a || s) || r && !n && l < (i.dateSelected || o) || !r && n && l > (i.dateSelected || s) || !r && !n && l < (a || o)) && v(), e[c()] = l, i[c()] = l, (n && (r && !a || !r && !i.dateSelected) || !n && (r && !i.dateSelected || !r && !a)) && (e[h()] = l, i[h()] = l)) : ((n && l > (a || s) || !n && l < (a || o)) && v(), e[h()] = l);
                        }
                        return i && u(i), u(e), e;
                    }

                    function A() {
                        var e = this.first ? this : this.sibling,
                            t = e.sibling;
                        return {
                            start: e.dateSelected,
                            end: t.dateSelected
                        };
                    }

                    function R() {
                        var e = this.shadowDom,
                            t = this.positionedEl,
                            n = this.calendarContainer,
                            r = this.sibling,
                            i = this;
                        this.inlinePosition && (a.some(function (e) {
                            return e !== i && e.positionedEl === t;
                        }) || t.style.setProperty("position", null));
                        n.remove(), a = a.filter(function (e) {
                            return e !== i;
                        }), r && delete r.sibling, a.length || j(document, L);
                        var o = a.some(function (t) {
                            return t.shadowDom === e;
                        });

                        for (var s in e && !o && j(e, Y), this) delete this[s];

                        a.length || l.forEach(function (e) {
                            document.removeEventListener(e, L);
                        });
                    }

                    function F(e, t) {
                        var n = new Date(e);
                        if (!b(n)) throw new Error("Invalid date passed to `navigate`");
                        this.currentYear = n.getFullYear(), this.currentMonth = n.getMonth(), u(this), t && this.onMonthChange(this);
                    }

                    function B() {
                        var e = !this.calendarContainer.classList.contains("qs-hidden"),
                            t = !this.calendarContainer.querySelector(".qs-overlay").classList.contains("qs-hidden");
                        e && M(t, this);
                    }

                    t.default = function (e, t) {
                        var n = function (e, t) {
                            var n,
                                l,
                                d = function (e) {
                                    var t = c(e);
                                    t.events && (t.events = t.events.reduce(function (e, t) {
                                        if (!b(t)) throw new Error('"options.events" must only contain valid JavaScript Date objects.');
                                        return e[+g(t)] = !0, e;
                                    }, {}));
                                    ["startDate", "dateSelected", "minDate", "maxDate"].forEach(function (e) {
                                        var n = t[e];
                                        if (n && !b(n)) throw new Error('"options.' + e + '" needs to be a valid JavaScript Date object.');
                                        t[e] = g(n);
                                    });
                                    var n = t.position,
                                        i = t.maxDate,
                                        l = t.minDate,
                                        d = t.dateSelected,
                                        u = t.overlayPlaceholder,
                                        h = t.overlayButton,
                                        f = t.startDay,
                                        v = t.id;
                                    if (t.startDate = g(t.startDate || d || new Date()), t.disabledDates = (t.disabledDates || []).reduce(function (e, t) {
                                        var n = +g(t);
                                        if (!b(t)) throw new Error('You supplied an invalid date to "options.disabledDates".');
                                        if (n === +g(d)) throw new Error('"disabledDates" cannot contain the same date as "dateSelected".');
                                        return e[n] = 1, e;
                                    }, {}), t.hasOwnProperty("id") && null == v) throw new Error("`id` cannot be `null` or `undefined`");

                                    if (null != v) {
                                        var m = a.filter(function (e) {
                                            return e.id === v;
                                        });
                                        if (m.length > 1) throw new Error("Only two datepickers can share an id.");
                                        m.length ? (t.second = !0, t.sibling = m[0]) : t.first = !0;
                                    }

                                    var y = ["tr", "tl", "br", "bl", "c"].some(function (e) {
                                        return n === e;
                                    });
                                    if (n && !y) throw new Error('"options.position" must be one of the following: tl, tr, bl, br, or c.');

                                    function p(e) {
                                        throw new Error('"dateSelected" in options is ' + (e ? "less" : "greater") + ' than "' + (e || "max") + 'Date".');
                                    }

                                    if (t.position = function (e) {
                                        var t = e[0],
                                            n = e[1],
                                            a = {};
                                        a[o[t]] = 1, n && (a[o[n]] = 1);
                                        return a;
                                    }(n || "bl"), i < l) throw new Error('"maxDate" in options is less than "minDate".');
                                    d && (l > d && p("min"), i < d && p());

                                    if (["onSelect", "onShow", "onHide", "onMonthChange", "formatter", "disabler"].forEach(function (e) {
                                        "function" != typeof t[e] && (t[e] = s);
                                    }), ["customDays", "customMonths", "customOverlayMonths"].forEach(function (e, n) {
                                        var a = t[e],
                                            r = n ? 12 : 7;

                                        if (a) {
                                            if (!Array.isArray(a) || a.length !== r || a.some(function (e) {
                                                return "string" != typeof e;
                                            })) throw new Error('"' + e + '" must be an array with ' + r + " strings.");
                                            t[n ? n < 2 ? "months" : "overlayMonths" : "days"] = a;
                                        }
                                    }), f && f > 0 && f < 7) {
                                        var w = (t.customDays || r).slice(),
                                            D = w.splice(0, f);
                                        t.customDays = w.concat(D), t.startDay = +f, t.weekendIndices = [w.length - 1, w.length];
                                    } else t.startDay = 0, t.weekendIndices = [6, 0];

                                    "string" != typeof u && delete t.overlayPlaceholder;
                                    "string" != typeof h && delete t.overlayButton;
                                    var q = t.defaultView;
                                    if (q && "calendar" !== q && "overlay" !== q) throw new Error('options.defaultView must either be "calendar" or "overlay".');
                                    return t.defaultView = q || "calendar", t;
                                }(t || {
                                    startDate: g(new Date()),
                                    position: "bl",
                                    defaultView: "calendar"
                                }),
                                u = e;

                            if ("string" == typeof u) u = "#" === u[0] ? document.getElementById(u.slice(1)) : document.querySelector(u); else {
                                if ("[object ShadowRoot]" === x(u)) throw new Error("Using a shadow DOM as your selector is not supported.");

                                for (var h, f = u.parentNode; !h;) {
                                    var v = x(f);
                                    "[object HTMLDocument]" === v ? h = !0 : "[object ShadowRoot]" === v ? (h = !0, n = f, l = f.host) : f = f.parentNode;
                                }
                            }
                            if (!u) throw new Error("No selector / element found.");
                            if (a.some(function (e) {
                                return e.el === u;
                            })) throw new Error("A datepicker already exists on that element.");
                            var m = u === document.body,
                                y = n ? u.parentElement || n : m ? document.body : u.parentElement,
                                w = n ? u.parentElement || l : y,
                                D = document.createElement("div"),
                                q = document.createElement("div");
                            D.className = "qs-datepicker-container qs-hidden", q.className = "qs-datepicker";
                            var M = {
                                shadowDom: n,
                                customElement: l,
                                positionedEl: w,
                                el: u,
                                parent: y,
                                nonInput: "INPUT" !== u.nodeName,
                                noPosition: m,
                                position: !m && d.position,
                                startDate: d.startDate,
                                dateSelected: d.dateSelected,
                                disabledDates: d.disabledDates,
                                minDate: d.minDate,
                                maxDate: d.maxDate,
                                noWeekends: !!d.noWeekends,
                                weekendIndices: d.weekendIndices,
                                calendarContainer: D,
                                calendar: q,
                                currentMonth: (d.startDate || d.dateSelected).getMonth(),
                                currentMonthName: (d.months || i)[(d.startDate || d.dateSelected).getMonth()],
                                currentYear: (d.startDate || d.dateSelected).getFullYear(),
                                events: d.events || {},
                                defaultView: d.defaultView,
                                setDate: O,
                                remove: R,
                                setMin: N,
                                setMax: _,
                                show: P,
                                hide: k,
                                navigate: F,
                                toggleOverlay: B,
                                onSelect: d.onSelect,
                                onShow: d.onShow,
                                onHide: d.onHide,
                                onMonthChange: d.onMonthChange,
                                formatter: d.formatter,
                                disabler: d.disabler,
                                months: d.months || i,
                                days: d.customDays || r,
                                startDay: d.startDay,
                                overlayMonths: d.overlayMonths || (d.months || i).map(function (e) {
                                    return e.slice(0, 3);
                                }),
                                overlayPlaceholder: d.overlayPlaceholder || "4-digit year",
                                overlayButton: d.overlayButton || "Submit",
                                disableYearOverlay: !!d.disableYearOverlay,
                                disableMobile: !!d.disableMobile,
                                isMobile: "ontouchstart" in window,
                                alwaysShow: !!d.alwaysShow,
                                id: d.id,
                                showAllDates: !!d.showAllDates,
                                respectDisabledReadOnly: !!d.respectDisabledReadOnly,
                                first: d.first,
                                second: d.second
                            };

                            if (d.sibling) {
                                var E = d.sibling,
                                    C = M,
                                    L = E.minDate || C.minDate,
                                    Y = E.maxDate || C.maxDate;
                                C.sibling = E, E.sibling = C, E.minDate = L, E.maxDate = Y, C.minDate = L, C.maxDate = Y, E.originalMinDate = L, E.originalMaxDate = Y, C.originalMinDate = L, C.originalMaxDate = Y, E.getRange = A, C.getRange = A;
                            }

                            d.dateSelected && p(u, M);
                            var j = getComputedStyle(w).position;
                            m || j && "static" !== j || (M.inlinePosition = !0, w.style.setProperty("position", "relative"));
                            var I = a.filter(function (e) {
                                return e.positionedEl === M.positionedEl;
                            });
                            I.some(function (e) {
                                return e.inlinePosition;
                            }) && (M.inlinePosition = !0, I.forEach(function (e) {
                                e.inlinePosition = !0;
                            }));
                            D.appendChild(q), y.appendChild(D), M.alwaysShow && S(M);
                            return M;
                        }(e, t);

                        if (a.length || d(document), n.shadowDom && (a.some(function (e) {
                            return e.shadowDom === n.shadowDom;
                        }) || d(n.shadowDom)), a.push(n), n.second) {
                            var l = n.sibling;
                            y({
                                instance: n,
                                deselect: !n.dateSelected
                            }), y({
                                instance: l,
                                deselect: !l.dateSelected
                            }), u(l);
                        }

                        return u(n, n.startDate || n.dateSelected), n.alwaysShow && D(n), n;
                    };
                }]).default;
            });

            /***/
        }),

        /***/ 452:
        /***/ (() => {

// extracted by mini-css-extract-plugin

            /***/
        }),

        /***/ 540:
        /***/ (() => {

// extracted by mini-css-extract-plugin

            /***/
        }),

        /***/ 906:
        /***/ (() => {

// extracted by mini-css-extract-plugin

            /***/
        }),

        /***/ 271:
        /***/ (() => {

// extracted by mini-css-extract-plugin

            /***/
        }),

        /***/ 379:
        /***/ ((module) => {

            "use strict";


            var stylesInDOM = [];

            function getIndexByIdentifier(identifier) {
                var result = -1;

                for (var i = 0; i < stylesInDOM.length; i++) {
                    if (stylesInDOM[i].identifier === identifier) {
                        result = i;
                        break;
                    }
                }

                return result;
            }

            function modulesToDom(list, options) {
                var idCountMap = {};
                var identifiers = [];

                for (var i = 0; i < list.length; i++) {
                    var item = list[i];
                    var id = options.base ? item[0] + options.base : item[0];
                    var count = idCountMap[id] || 0;
                    var identifier = "".concat(id, " ").concat(count);
                    idCountMap[id] = count + 1;
                    var indexByIdentifier = getIndexByIdentifier(identifier);
                    var obj = {
                        css: item[1],
                        media: item[2],
                        sourceMap: item[3],
                        supports: item[4],
                        layer: item[5]
                    };

                    if (indexByIdentifier !== -1) {
                        stylesInDOM[indexByIdentifier].references++;
                        stylesInDOM[indexByIdentifier].updater(obj);
                    } else {
                        var updater = addElementStyle(obj, options);
                        options.byIndex = i;
                        stylesInDOM.splice(i, 0, {
                            identifier: identifier,
                            updater: updater,
                            references: 1
                        });
                    }

                    identifiers.push(identifier);
                }

                return identifiers;
            }

            function addElementStyle(obj, options) {
                var api = options.domAPI(options);
                api.update(obj);

                var updater = function updater(newObj) {
                    if (newObj) {
                        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
                            return;
                        }

                        api.update(obj = newObj);
                    } else {
                        api.remove();
                    }
                };

                return updater;
            }

            module.exports = function (list, options) {
                options = options || {};
                list = list || [];
                var lastIdentifiers = modulesToDom(list, options);
                return function update(newList) {
                    newList = newList || [];

                    for (var i = 0; i < lastIdentifiers.length; i++) {
                        var identifier = lastIdentifiers[i];
                        var index = getIndexByIdentifier(identifier);
                        stylesInDOM[index].references--;
                    }

                    var newLastIdentifiers = modulesToDom(newList, options);

                    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
                        var _identifier = lastIdentifiers[_i];

                        var _index = getIndexByIdentifier(_identifier);

                        if (stylesInDOM[_index].references === 0) {
                            stylesInDOM[_index].updater();

                            stylesInDOM.splice(_index, 1);
                        }
                    }

                    lastIdentifiers = newLastIdentifiers;
                };
            };

            /***/
        }),

        /***/ 569:
        /***/ ((module) => {

            "use strict";


            var memo = {};

            /* istanbul ignore next  */

            function getTarget(target) {
                if (typeof memo[target] === "undefined") {
                    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

                    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
                        try {
                            // This will throw an exception if access to iframe is blocked
                            // due to cross-origin restrictions
                            styleTarget = styleTarget.contentDocument.head;
                        } catch (e) {
                            // istanbul ignore next
                            styleTarget = null;
                        }
                    }

                    memo[target] = styleTarget;
                }

                return memo[target];
            }

            /* istanbul ignore next  */


            function insertBySelector(insert, style) {
                var target = getTarget(insert);

                if (!target) {
                    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                }

                target.appendChild(style);
            }

            module.exports = insertBySelector;

            /***/
        }),

        /***/ 216:
        /***/ ((module) => {

            "use strict";


            /* istanbul ignore next  */
            function insertStyleElement(options) {
                var element = document.createElement("style");
                options.setAttributes(element, options.attributes);
                options.insert(element, options.options);
                return element;
            }

            module.exports = insertStyleElement;

            /***/
        }),

        /***/ 565:
        /***/ ((module, __unused_webpack_exports, __webpack_require__) => {

            "use strict";


            /* istanbul ignore next  */
            function setAttributesWithoutAttributes(styleElement) {
                var nonce = true ? __webpack_require__.nc : 0;

                if (nonce) {
                    styleElement.setAttribute("nonce", nonce);
                }
            }

            module.exports = setAttributesWithoutAttributes;

            /***/
        }),

        /***/ 795:
        /***/ ((module) => {

            "use strict";


            /* istanbul ignore next  */
            function apply(styleElement, options, obj) {
                var css = "";

                if (obj.supports) {
                    css += "@supports (".concat(obj.supports, ") {");
                }

                if (obj.media) {
                    css += "@media ".concat(obj.media, " {");
                }

                var needLayer = typeof obj.layer !== "undefined";

                if (needLayer) {
                    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
                }

                css += obj.css;

                if (needLayer) {
                    css += "}";
                }

                if (obj.media) {
                    css += "}";
                }

                if (obj.supports) {
                    css += "}";
                }

                var sourceMap = obj.sourceMap;

                if (sourceMap && typeof btoa !== "undefined") {
                    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
                } // For old IE

                /* istanbul ignore if  */


                options.styleTagTransform(css, styleElement, options.options);
            }

            function removeStyleElement(styleElement) {
                // istanbul ignore if
                if (styleElement.parentNode === null) {
                    return false;
                }

                styleElement.parentNode.removeChild(styleElement);
            }

            /* istanbul ignore next  */


            function domAPI(options) {
                var styleElement = options.insertStyleElement(options);
                return {
                    update: function update(obj) {
                        apply(styleElement, options, obj);
                    },
                    remove: function remove() {
                        removeStyleElement(styleElement);
                    }
                };
            }

            module.exports = domAPI;

            /***/
        }),

        /***/ 589:
        /***/ ((module) => {

            "use strict";


            /* istanbul ignore next  */
            function styleTagTransform(css, styleElement) {
                if (styleElement.styleSheet) {
                    styleElement.styleSheet.cssText = css;
                } else {
                    while (styleElement.firstChild) {
                        styleElement.removeChild(styleElement.firstChild);
                    }

                    styleElement.appendChild(document.createTextNode(css));
                }
            }

            module.exports = styleTagTransform;

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ 	// The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ 		// Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/            exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /************************************************************************/
    /******/ 	/* webpack/runtime/compat get default export */
    /******/
    (() => {
        /******/ 		// getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ?
                /******/                () => (module['default']) :
                /******/                () => (module);
            /******/
            __webpack_require__.d(getter, {a: getter});
            /******/
            return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ 		// define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, {enumerable: true, get: definition[key]});
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
    (() => {
        "use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
        var injectStylesIntoStyleTag = __webpack_require__(379);
        var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
        var styleDomAPI = __webpack_require__(795);
        var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
        var insertBySelector = __webpack_require__(569);
        var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
        var setAttributesWithoutAttributes = __webpack_require__(565);
        var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
        var insertStyleElement = __webpack_require__(216);
        var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
        var styleTagTransform = __webpack_require__(589);
        var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[4].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/swiper/swiper-bundle.min.css
        var swiper_bundle_min = __webpack_require__(906);
        var swiper_bundle_min_default = /*#__PURE__*/__webpack_require__.n(swiper_bundle_min);
        ;// CONCATENATED MODULE: ./node_modules/swiper/swiper-bundle.min.css


        var options = {};

        options.styleTagTransform = (styleTagTransform_default());
        options.setAttributes = (setAttributesWithoutAttributes_default());

        options.insert = insertBySelector_default().bind(null, "head");

        options.domAPI = (styleDomAPI_default());
        options.insertStyleElement = (insertStyleElement_default());

        var update = injectStylesIntoStyleTag_default()((swiper_bundle_min_default()), options);


        /* harmony default export */
        const swiper_swiper_bundle_min = ((swiper_bundle_min_default()) && (swiper_bundle_min_default()).locals ? (swiper_bundle_min_default()).locals : undefined);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[4].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/lightgallery/css/lightgallery-bundle.css
        var lightgallery_bundle = __webpack_require__(540);
        var lightgallery_bundle_default = /*#__PURE__*/__webpack_require__.n(lightgallery_bundle);
        ;// CONCATENATED MODULE: ./node_modules/lightgallery/css/lightgallery-bundle.css


        var lightgallery_bundle_options = {};

        lightgallery_bundle_options.styleTagTransform = (styleTagTransform_default());
        lightgallery_bundle_options.setAttributes = (setAttributesWithoutAttributes_default());

        lightgallery_bundle_options.insert = insertBySelector_default().bind(null, "head");

        lightgallery_bundle_options.domAPI = (styleDomAPI_default());
        lightgallery_bundle_options.insertStyleElement = (insertStyleElement_default());

        var lightgallery_bundle_update = injectStylesIntoStyleTag_default()((lightgallery_bundle_default()), lightgallery_bundle_options);


        /* harmony default export */
        const css_lightgallery_bundle = ((lightgallery_bundle_default()) && (lightgallery_bundle_default()).locals ? (lightgallery_bundle_default()).locals : undefined);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[4].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/css/style.css
        var style = __webpack_require__(271);
        var style_default = /*#__PURE__*/__webpack_require__.n(style);
        ;// CONCATENATED MODULE: ./src/css/style.css


        var style_options = {};

        style_options.styleTagTransform = (styleTagTransform_default());
        style_options.setAttributes = (setAttributesWithoutAttributes_default());

        style_options.insert = insertBySelector_default().bind(null, "head");

        style_options.domAPI = (styleDomAPI_default());
        style_options.insertStyleElement = (insertStyleElement_default());

        var style_update = injectStylesIntoStyleTag_default()((style_default()), style_options);


        /* harmony default export */
        const css_style = ((style_default()) && (style_default()).locals ? (style_default()).locals : undefined);

// EXTERNAL MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[4].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./node_modules/js-datepicker/dist/datepicker.min.css
        var datepicker_min = __webpack_require__(452);
        var datepicker_min_default = /*#__PURE__*/__webpack_require__.n(datepicker_min);
        ;// CONCATENATED MODULE: ./node_modules/js-datepicker/dist/datepicker.min.css


        var datepicker_min_options = {};

        datepicker_min_options.styleTagTransform = (styleTagTransform_default());
        datepicker_min_options.setAttributes = (setAttributesWithoutAttributes_default());

        datepicker_min_options.insert = insertBySelector_default().bind(null, "head");

        datepicker_min_options.domAPI = (styleDomAPI_default());
        datepicker_min_options.insertStyleElement = (insertStyleElement_default());

        var datepicker_min_update = injectStylesIntoStyleTag_default()((datepicker_min_default()), datepicker_min_options);


        /* harmony default export */
        const dist_datepicker_min = ((datepicker_min_default()) && (datepicker_min_default()).locals ? (datepicker_min_default()).locals : undefined);

        ;// CONCATENATED MODULE: ./node_modules/ssr-window/ssr-window.esm.js
        /**
         * SSR Window 4.0.2
         * Better handling for window object in SSR environment
         * https://github.com/nolimits4web/ssr-window
         *
         * Copyright 2021, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: December 13, 2021
         */

        /* eslint-disable no-param-reassign */
        function isObject(obj) {
            return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
        }

        function extend(target = {}, src = {}) {
            Object.keys(src).forEach(key => {
                if (typeof target[key] === 'undefined') target[key] = src[key]; else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
                    extend(target[key], src[key]);
                }
            });
        }

        const ssrDocument = {
            body: {},

            addEventListener() {
            },

            removeEventListener() {
            },

            activeElement: {
                blur() {
                },

                nodeName: ''
            },

            querySelector() {
                return null;
            },

            querySelectorAll() {
                return [];
            },

            getElementById() {
                return null;
            },

            createEvent() {
                return {
                    initEvent() {
                    }

                };
            },

            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},

                    setAttribute() {
                    },

                    getElementsByTagName() {
                        return [];
                    }

                };
            },

            createElementNS() {
                return {};
            },

            importNode() {
                return null;
            },

            location: {
                hash: '',
                host: '',
                hostname: '',
                href: '',
                origin: '',
                pathname: '',
                protocol: '',
                search: ''
            }
        };

        function getDocument() {
            const doc = typeof document !== 'undefined' ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }

        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ''
            },
            location: {
                hash: '',
                host: '',
                hostname: '',
                href: '',
                origin: '',
                pathname: '',
                protocol: '',
                search: ''
            },
            history: {
                replaceState() {
                },

                pushState() {
                },

                go() {
                },

                back() {
                }

            },
            CustomEvent: function CustomEvent() {
                return this;
            },

            addEventListener() {
            },

            removeEventListener() {
            },

            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return '';
                    }

                };
            },

            Image() {
            },

            Date() {
            },

            screen: {},

            setTimeout() {
            },

            clearTimeout() {
            },

            matchMedia() {
                return {};
            },

            requestAnimationFrame(callback) {
                if (typeof setTimeout === 'undefined') {
                    callback();
                    return null;
                }

                return setTimeout(callback, 0);
            },

            cancelAnimationFrame(id) {
                if (typeof setTimeout === 'undefined') {
                    return;
                }

                clearTimeout(id);
            }

        };

        function ssr_window_esm_getWindow() {
            const win = typeof window !== 'undefined' ? window : {};
            extend(win, ssrWindow);
            return win;
        }


        ;// CONCATENATED MODULE: ./node_modules/dom7/dom7.esm.js
        /**
         * Dom7 4.0.4
         * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
         * https://framework7.io/docs/dom7.html
         *
         * Copyright 2022, Vladimir Kharlampidi
         *
         * Licensed under MIT
         *
         * Released on: January 11, 2022
         */

        /* eslint-disable no-proto */

        function makeReactive(obj) {
            const proto = obj.__proto__;
            Object.defineProperty(obj, '__proto__', {
                get() {
                    return proto;
                },

                set(value) {
                    proto.__proto__ = value;
                }

            });
        }

        class Dom7 extends Array {
            constructor(items) {
                if (typeof items === 'number') {
                    super(items);
                } else {
                    super(...(items || []));
                    makeReactive(this);
                }
            }

        }

        function arrayFlat(arr = []) {
            const res = [];
            arr.forEach(el => {
                if (Array.isArray(el)) {
                    res.push(...arrayFlat(el));
                } else {
                    res.push(el);
                }
            });
            return res;
        }

        function arrayFilter(arr, callback) {
            return Array.prototype.filter.call(arr, callback);
        }

        function arrayUnique(arr) {
            const uniqueArray = [];

            for (let i = 0; i < arr.length; i += 1) {
                if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
            }

            return uniqueArray;
        }

        function toCamelCase(string) {
            return string.toLowerCase().replace(/-(.)/g, (match, group) => group.toUpperCase());
        } // eslint-disable-next-line


        function qsa(selector, context) {
            if (typeof selector !== 'string') {
                return [selector];
            }

            const a = [];
            const res = context.querySelectorAll(selector);

            for (let i = 0; i < res.length; i += 1) {
                a.push(res[i]);
            }

            return a;
        }

        function $(selector, context) {
            const window = ssr_window_esm_getWindow();
            const document = getDocument();
            let arr = [];

            if (!context && selector instanceof Dom7) {
                return selector;
            }

            if (!selector) {
                return new Dom7(arr);
            }

            if (typeof selector === 'string') {
                const html = selector.trim();

                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    let toCreate = 'div';
                    if (html.indexOf('<li') === 0) toCreate = 'ul';
                    if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                    if (html.indexOf('<tbody') === 0) toCreate = 'table';
                    if (html.indexOf('<option') === 0) toCreate = 'select';
                    const tempParent = document.createElement(toCreate);
                    tempParent.innerHTML = html;

                    for (let i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    arr = qsa(selector.trim(), context || document);
                } // arr = qsa(selector, document);

            } else if (selector.nodeType || selector === window || selector === document) {
                arr.push(selector);
            } else if (Array.isArray(selector)) {
                if (selector instanceof Dom7) return selector;
                arr = selector;
            }

            return new Dom7(arrayUnique(arr));
        }

        $.fn = Dom7.prototype; // eslint-disable-next-line

        function addClass(...classes) {
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            this.forEach(el => {
                el.classList.add(...classNames);
            });
            return this;
        }

        function removeClass(...classes) {
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            this.forEach(el => {
                el.classList.remove(...classNames);
            });
            return this;
        }

        function toggleClass(...classes) {
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            this.forEach(el => {
                classNames.forEach(className => {
                    el.classList.toggle(className);
                });
            });
        }

        function hasClass(...classes) {
            const classNames = arrayFlat(classes.map(c => c.split(' ')));
            return arrayFilter(this, el => {
                return classNames.filter(className => el.classList.contains(className)).length > 0;
            }).length > 0;
        }

        function attr(attrs, value) {
            if (arguments.length === 1 && typeof attrs === 'string') {
                // Get attr
                if (this[0]) return this[0].getAttribute(attrs);
                return undefined;
            } // Set attrs


            for (let i = 0; i < this.length; i += 1) {
                if (arguments.length === 2) {
                    // String
                    this[i].setAttribute(attrs, value);
                } else {
                    // Object
                    for (const attrName in attrs) {
                        this[i][attrName] = attrs[attrName];
                        this[i].setAttribute(attrName, attrs[attrName]);
                    }
                }
            }

            return this;
        }

        function removeAttr(attr) {
            for (let i = 0; i < this.length; i += 1) {
                this[i].removeAttribute(attr);
            }

            return this;
        }

        function prop(props, value) {
            if (arguments.length === 1 && typeof props === 'string') {
                // Get prop
                if (this[0]) return this[0][props];
            } else {
                // Set props
                for (let i = 0; i < this.length; i += 1) {
                    if (arguments.length === 2) {
                        // String
                        this[i][props] = value;
                    } else {
                        // Object
                        for (const propName in props) {
                            this[i][propName] = props[propName];
                        }
                    }
                }

                return this;
            }

            return this;
        }

        function data(key, value) {
            let el;

            if (typeof value === 'undefined') {
                el = this[0];
                if (!el) return undefined; // Get value

                if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
                    return el.dom7ElementDataStorage[key];
                }

                const dataKey = el.getAttribute(`data-${key}`);

                if (dataKey) {
                    return dataKey;
                }

                return undefined;
            } // Set value


            for (let i = 0; i < this.length; i += 1) {
                el = this[i];
                if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                el.dom7ElementDataStorage[key] = value;
            }

            return this;
        }

        function removeData(key) {
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
                    el.dom7ElementDataStorage[key] = null;
                    delete el.dom7ElementDataStorage[key];
                }
            }
        }

        function dataset() {
            const el = this[0];
            if (!el) return undefined;
            const dataset = {}; // eslint-disable-line

            if (el.dataset) {
                for (const dataKey in el.dataset) {
                    dataset[dataKey] = el.dataset[dataKey];
                }
            } else {
                for (let i = 0; i < el.attributes.length; i += 1) {
                    const attr = el.attributes[i];

                    if (attr.name.indexOf('data-') >= 0) {
                        dataset[toCamelCase(attr.name.split('data-')[1])] = attr.value;
                    }
                }
            }

            for (const key in dataset) {
                if (dataset[key] === 'false') dataset[key] = false; else if (dataset[key] === 'true') dataset[key] = true; else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] *= 1;
            }

            return dataset;
        }

        function val(value) {
            if (typeof value === 'undefined') {
                // get value
                const el = this[0];
                if (!el) return undefined;

                if (el.multiple && el.nodeName.toLowerCase() === 'select') {
                    const values = [];

                    for (let i = 0; i < el.selectedOptions.length; i += 1) {
                        values.push(el.selectedOptions[i].value);
                    }

                    return values;
                }

                return el.value;
            } // set value


            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (Array.isArray(value) && el.multiple && el.nodeName.toLowerCase() === 'select') {
                    for (let j = 0; j < el.options.length; j += 1) {
                        el.options[j].selected = value.indexOf(el.options[j].value) >= 0;
                    }
                } else {
                    el.value = value;
                }
            }

            return this;
        }

        function value(value) {
            return this.val(value);
        }

        function transform(transform) {
            for (let i = 0; i < this.length; i += 1) {
                this[i].style.transform = transform;
            }

            return this;
        }

        function transition(duration) {
            for (let i = 0; i < this.length; i += 1) {
                this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
            }

            return this;
        }

        function on(...args) {
            let [eventType, targetSelector, listener, capture] = args;

            if (typeof args[1] === 'function') {
                [eventType, listener, capture] = args;
                targetSelector = undefined;
            }

            if (!capture) capture = false;

            function handleLiveEvent(e) {
                const target = e.target;
                if (!target) return;
                const eventData = e.target.dom7EventData || [];

                if (eventData.indexOf(e) < 0) {
                    eventData.unshift(e);
                }

                if ($(target).is(targetSelector)) listener.apply(target, eventData); else {
                    const parents = $(target).parents(); // eslint-disable-line

                    for (let k = 0; k < parents.length; k += 1) {
                        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
                    }
                }
            }

            function handleEvent(e) {
                const eventData = e && e.target ? e.target.dom7EventData || [] : [];

                if (eventData.indexOf(e) < 0) {
                    eventData.unshift(e);
                }

                listener.apply(this, eventData);
            }

            const events = eventType.split(' ');
            let j;

            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (!targetSelector) {
                    for (j = 0; j < events.length; j += 1) {
                        const event = events[j];
                        if (!el.dom7Listeners) el.dom7Listeners = {};
                        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
                        el.dom7Listeners[event].push({
                            listener,
                            proxyListener: handleEvent
                        });
                        el.addEventListener(event, handleEvent, capture);
                    }
                } else {
                    // Live events
                    for (j = 0; j < events.length; j += 1) {
                        const event = events[j];
                        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
                        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
                        el.dom7LiveListeners[event].push({
                            listener,
                            proxyListener: handleLiveEvent
                        });
                        el.addEventListener(event, handleLiveEvent, capture);
                    }
                }
            }

            return this;
        }

        function off(...args) {
            let [eventType, targetSelector, listener, capture] = args;

            if (typeof args[1] === 'function') {
                [eventType, listener, capture] = args;
                targetSelector = undefined;
            }

            if (!capture) capture = false;
            const events = eventType.split(' ');

            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];

                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];
                    let handlers;

                    if (!targetSelector && el.dom7Listeners) {
                        handlers = el.dom7Listeners[event];
                    } else if (targetSelector && el.dom7LiveListeners) {
                        handlers = el.dom7LiveListeners[event];
                    }

                    if (handlers && handlers.length) {
                        for (let k = handlers.length - 1; k >= 0; k -= 1) {
                            const handler = handlers[k];

                            if (listener && handler.listener === listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (!listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            }
                        }
                    }
                }
            }

            return this;
        }

        function once(...args) {
            const dom = this;
            let [eventName, targetSelector, listener, capture] = args;

            if (typeof args[1] === 'function') {
                [eventName, listener, capture] = args;
                targetSelector = undefined;
            }

            function onceHandler(...eventArgs) {
                listener.apply(this, eventArgs);
                dom.off(eventName, targetSelector, onceHandler, capture);

                if (onceHandler.dom7proxy) {
                    delete onceHandler.dom7proxy;
                }
            }

            onceHandler.dom7proxy = listener;
            return dom.on(eventName, targetSelector, onceHandler, capture);
        }

        function trigger(...args) {
            const window = ssr_window_esm_getWindow();
            const events = args[0].split(' ');
            const eventData = args[1];

            for (let i = 0; i < events.length; i += 1) {
                const event = events[i];

                for (let j = 0; j < this.length; j += 1) {
                    const el = this[j];

                    if (window.CustomEvent) {
                        const evt = new window.CustomEvent(event, {
                            detail: eventData,
                            bubbles: true,
                            cancelable: true
                        });
                        el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
                        el.dispatchEvent(evt);
                        el.dom7EventData = [];
                        delete el.dom7EventData;
                    }
                }
            }

            return this;
        }

        function transitionEnd(callback) {
            const dom = this;

            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off('transitionend', fireCallBack);
            }

            if (callback) {
                dom.on('transitionend', fireCallBack);
            }

            return this;
        }

        function animationEnd(callback) {
            const dom = this;

            function fireCallBack(e) {
                if (e.target !== this) return;
                callback.call(this, e);
                dom.off('animationend', fireCallBack);
            }

            if (callback) {
                dom.on('animationend', fireCallBack);
            }

            return this;
        }

        function width() {
            const window = getWindow();

            if (this[0] === window) {
                return window.innerWidth;
            }

            if (this.length > 0) {
                return parseFloat(this.css('width'));
            }

            return null;
        }

        function dom7_esm_outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
                }

                return this[0].offsetWidth;
            }

            return null;
        }

        function height() {
            const window = getWindow();

            if (this[0] === window) {
                return window.innerHeight;
            }

            if (this.length > 0) {
                return parseFloat(this.css('height'));
            }

            return null;
        }

        function dom7_esm_outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) {
                    const styles = this.styles();
                    return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
                }

                return this[0].offsetHeight;
            }

            return null;
        }

        function offset() {
            if (this.length > 0) {
                const window = ssr_window_esm_getWindow();
                const document = getDocument();
                const el = this[0];
                const box = el.getBoundingClientRect();
                const body = document.body;
                const clientTop = el.clientTop || body.clientTop || 0;
                const clientLeft = el.clientLeft || body.clientLeft || 0;
                const scrollTop = el === window ? window.scrollY : el.scrollTop;
                const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
                return {
                    top: box.top + scrollTop - clientTop,
                    left: box.left + scrollLeft - clientLeft
                };
            }

            return null;
        }

        function hide() {
            for (let i = 0; i < this.length; i += 1) {
                this[i].style.display = 'none';
            }

            return this;
        }

        function show() {
            const window = getWindow();

            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (el.style.display === 'none') {
                    el.style.display = '';
                }

                if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') {
                    // Still not visible
                    el.style.display = 'block';
                }
            }

            return this;
        }

        function styles() {
            const window = ssr_window_esm_getWindow();
            if (this[0]) return window.getComputedStyle(this[0], null);
            return {};
        }

        function css(props, value) {
            const window = ssr_window_esm_getWindow();
            let i;

            if (arguments.length === 1) {
                if (typeof props === 'string') {
                    // .css('width')
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                } else {
                    // .css({ width: '100px' })
                    for (i = 0; i < this.length; i += 1) {
                        for (const prop in props) {
                            this[i].style[prop] = props[prop];
                        }
                    }

                    return this;
                }
            }

            if (arguments.length === 2 && typeof props === 'string') {
                // .css('width', '100px')
                for (i = 0; i < this.length; i += 1) {
                    this[i].style[props] = value;
                }

                return this;
            }

            return this;
        }

        function each(callback) {
            if (!callback) return this;
            this.forEach((el, index) => {
                callback.apply(el, [el, index]);
            });
            return this;
        }

        function filter(callback) {
            const result = arrayFilter(this, callback);
            return $(result);
        }

        function html(html) {
            if (typeof html === 'undefined') {
                return this[0] ? this[0].innerHTML : null;
            }

            for (let i = 0; i < this.length; i += 1) {
                this[i].innerHTML = html;
            }

            return this;
        }

        function dom7_esm_text(text) {
            if (typeof text === 'undefined') {
                return this[0] ? this[0].textContent.trim() : null;
            }

            for (let i = 0; i < this.length; i += 1) {
                this[i].textContent = text;
            }

            return this;
        }

        function is(selector) {
            const window = ssr_window_esm_getWindow();
            const document = getDocument();
            const el = this[0];
            let compareWith;
            let i;
            if (!el || typeof selector === 'undefined') return false;

            if (typeof selector === 'string') {
                if (el.matches) return el.matches(selector);
                if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
                if (el.msMatchesSelector) return el.msMatchesSelector(selector);
                compareWith = $(selector);

                for (i = 0; i < compareWith.length; i += 1) {
                    if (compareWith[i] === el) return true;
                }

                return false;
            }

            if (selector === document) {
                return el === document;
            }

            if (selector === window) {
                return el === window;
            }

            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [selector] : selector;

                for (i = 0; i < compareWith.length; i += 1) {
                    if (compareWith[i] === el) return true;
                }

                return false;
            }

            return false;
        }

        function index() {
            let child = this[0];
            let i;

            if (child) {
                i = 0; // eslint-disable-next-line

                while ((child = child.previousSibling) !== null) {
                    if (child.nodeType === 1) i += 1;
                }

                return i;
            }

            return undefined;
        }

        function eq(index) {
            if (typeof index === 'undefined') return this;
            const length = this.length;

            if (index > length - 1) {
                return $([]);
            }

            if (index < 0) {
                const returnIndex = length + index;
                if (returnIndex < 0) return $([]);
                return $([this[returnIndex]]);
            }

            return $([this[index]]);
        }

        function append(...els) {
            let newChild;
            const document = getDocument();

            for (let k = 0; k < els.length; k += 1) {
                newChild = els[k];

                for (let i = 0; i < this.length; i += 1) {
                    if (typeof newChild === 'string') {
                        const tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;

                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    } else if (newChild instanceof Dom7) {
                        for (let j = 0; j < newChild.length; j += 1) {
                            this[i].appendChild(newChild[j]);
                        }
                    } else {
                        this[i].appendChild(newChild);
                    }
                }
            }

            return this;
        }

        function appendTo(parent) {
            $(parent).append(this);
            return this;
        }

        function prepend(newChild) {
            const document = getDocument();
            let i;
            let j;

            for (i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = newChild;

                    for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                    }
                } else if (newChild instanceof Dom7) {
                    for (j = 0; j < newChild.length; j += 1) {
                        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                    }
                } else {
                    this[i].insertBefore(newChild, this[i].childNodes[0]);
                }
            }

            return this;
        }

        function prependTo(parent) {
            $(parent).prepend(this);
            return this;
        }

        function insertBefore(selector) {
            const before = $(selector);

            for (let i = 0; i < this.length; i += 1) {
                if (before.length === 1) {
                    before[0].parentNode.insertBefore(this[i], before[0]);
                } else if (before.length > 1) {
                    for (let j = 0; j < before.length; j += 1) {
                        before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                    }
                }
            }
        }

        function insertAfter(selector) {
            const after = $(selector);

            for (let i = 0; i < this.length; i += 1) {
                if (after.length === 1) {
                    after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                } else if (after.length > 1) {
                    for (let j = 0; j < after.length; j += 1) {
                        after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                    }
                }
            }
        }

        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                        return $([this[0].nextElementSibling]);
                    }

                    return $([]);
                }

                if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
                return $([]);
            }

            return $([]);
        }

        function nextAll(selector) {
            const nextEls = [];
            let el = this[0];
            if (!el) return $([]);

            while (el.nextElementSibling) {
                const next = el.nextElementSibling; // eslint-disable-line

                if (selector) {
                    if ($(next).is(selector)) nextEls.push(next);
                } else nextEls.push(next);

                el = next;
            }

            return $(nextEls);
        }

        function prev(selector) {
            if (this.length > 0) {
                const el = this[0];

                if (selector) {
                    if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                        return $([el.previousElementSibling]);
                    }

                    return $([]);
                }

                if (el.previousElementSibling) return $([el.previousElementSibling]);
                return $([]);
            }

            return $([]);
        }

        function prevAll(selector) {
            const prevEls = [];
            let el = this[0];
            if (!el) return $([]);

            while (el.previousElementSibling) {
                const prev = el.previousElementSibling; // eslint-disable-line

                if (selector) {
                    if ($(prev).is(selector)) prevEls.push(prev);
                } else prevEls.push(prev);

                el = prev;
            }

            return $(prevEls);
        }

        function siblings(selector) {
            return this.nextAll(selector).add(this.prevAll(selector));
        }

        function dom7_esm_parent(selector) {
            const parents = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
                if (this[i].parentNode !== null) {
                    if (selector) {
                        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    } else {
                        parents.push(this[i].parentNode);
                    }
                }
            }

            return $(parents);
        }

        function parents(selector) {
            const parents = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
                let parent = this[i].parentNode; // eslint-disable-line

                while (parent) {
                    if (selector) {
                        if ($(parent).is(selector)) parents.push(parent);
                    } else {
                        parents.push(parent);
                    }

                    parent = parent.parentNode;
                }
            }

            return $(parents);
        }

        function closest(selector) {
            let closest = this; // eslint-disable-line

            if (typeof selector === 'undefined') {
                return $([]);
            }

            if (!closest.is(selector)) {
                closest = closest.parents(selector).eq(0);
            }

            return closest;
        }

        function find(selector) {
            const foundElements = [];

            for (let i = 0; i < this.length; i += 1) {
                const found = this[i].querySelectorAll(selector);

                for (let j = 0; j < found.length; j += 1) {
                    foundElements.push(found[j]);
                }
            }

            return $(foundElements);
        }

        function children(selector) {
            const children = []; // eslint-disable-line

            for (let i = 0; i < this.length; i += 1) {
                const childNodes = this[i].children;

                for (let j = 0; j < childNodes.length; j += 1) {
                    if (!selector || $(childNodes[j]).is(selector)) {
                        children.push(childNodes[j]);
                    }
                }
            }

            return $(children);
        }

        function remove() {
            for (let i = 0; i < this.length; i += 1) {
                if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
            }

            return this;
        }

        function detach() {
            return this.remove();
        }

        function add(...els) {
            const dom = this;
            let i;
            let j;

            for (i = 0; i < els.length; i += 1) {
                const toAdd = $(els[i]);

                for (j = 0; j < toAdd.length; j += 1) {
                    dom.push(toAdd[j]);
                }
            }

            return dom;
        }

        function empty() {
            for (let i = 0; i < this.length; i += 1) {
                const el = this[i];

                if (el.nodeType === 1) {
                    for (let j = 0; j < el.childNodes.length; j += 1) {
                        if (el.childNodes[j].parentNode) {
                            el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
                        }
                    }

                    el.textContent = '';
                }
            }

            return this;
        } // eslint-disable-next-line


        function scrollTo(...args) {
            const window = getWindow();
            let [left, top, duration, easing, callback] = args;

            if (args.length === 4 && typeof easing === 'function') {
                callback = easing;
                [left, top, duration, callback, easing] = args;
            }

            if (typeof easing === 'undefined') easing = 'swing';
            return this.each(function animate() {
                const el = this;
                let currentTop;
                let currentLeft;
                let maxTop;
                let maxLeft;
                let newTop;
                let newLeft;
                let scrollTop; // eslint-disable-line

                let scrollLeft; // eslint-disable-line

                let animateTop = top > 0 || top === 0;
                let animateLeft = left > 0 || left === 0;

                if (typeof easing === 'undefined') {
                    easing = 'swing';
                }

                if (animateTop) {
                    currentTop = el.scrollTop;

                    if (!duration) {
                        el.scrollTop = top;
                    }
                }

                if (animateLeft) {
                    currentLeft = el.scrollLeft;

                    if (!duration) {
                        el.scrollLeft = left;
                    }
                }

                if (!duration) return;

                if (animateTop) {
                    maxTop = el.scrollHeight - el.offsetHeight;
                    newTop = Math.max(Math.min(top, maxTop), 0);
                }

                if (animateLeft) {
                    maxLeft = el.scrollWidth - el.offsetWidth;
                    newLeft = Math.max(Math.min(left, maxLeft), 0);
                }

                let startTime = null;
                if (animateTop && newTop === currentTop) animateTop = false;
                if (animateLeft && newLeft === currentLeft) animateLeft = false;

                function render(time = new Date().getTime()) {
                    if (startTime === null) {
                        startTime = time;
                    }

                    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                    const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
                    let done;
                    if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
                    if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);

                    if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                        el.scrollTop = newTop;
                        done = true;
                    }

                    if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                        el.scrollTop = newTop;
                        done = true;
                    }

                    if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                        el.scrollLeft = newLeft;
                        done = true;
                    }

                    if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                        el.scrollLeft = newLeft;
                        done = true;
                    }

                    if (done) {
                        if (callback) callback();
                        return;
                    }

                    if (animateTop) el.scrollTop = scrollTop;
                    if (animateLeft) el.scrollLeft = scrollLeft;
                    window.requestAnimationFrame(render);
                }

                window.requestAnimationFrame(render);
            });
        } // scrollTop(top, duration, easing, callback) {


        function scrollTop(...args) {
            let [top, duration, easing, callback] = args;

            if (args.length === 3 && typeof easing === 'function') {
                [top, duration, callback, easing] = args;
            }

            const dom = this;

            if (typeof top === 'undefined') {
                if (dom.length > 0) return dom[0].scrollTop;
                return null;
            }

            return dom.scrollTo(undefined, top, duration, easing, callback);
        }

        function scrollLeft(...args) {
            let [left, duration, easing, callback] = args;

            if (args.length === 3 && typeof easing === 'function') {
                [left, duration, callback, easing] = args;
            }

            const dom = this;

            if (typeof left === 'undefined') {
                if (dom.length > 0) return dom[0].scrollLeft;
                return null;
            }

            return dom.scrollTo(left, undefined, duration, easing, callback);
        } // eslint-disable-next-line


        function animate(initialProps, initialParams) {
            const window = getWindow();
            const els = this;
            const a = {
                props: Object.assign({}, initialProps),
                params: Object.assign({
                    duration: 300,
                    easing: 'swing' // or 'linear'

                    /* Callbacks
      begin(elements)
      complete(elements)
      progress(elements, complete, remaining, start, tweenValue)
      */

                }, initialParams),
                elements: els,
                animating: false,
                que: [],

                easingProgress(easing, progress) {
                    if (easing === 'swing') {
                        return 0.5 - Math.cos(progress * Math.PI) / 2;
                    }

                    if (typeof easing === 'function') {
                        return easing(progress);
                    }

                    return progress;
                },

                stop() {
                    if (a.frameId) {
                        window.cancelAnimationFrame(a.frameId);
                    }

                    a.animating = false;
                    a.elements.each(el => {
                        const element = el;
                        delete element.dom7AnimateInstance;
                    });
                    a.que = [];
                },

                done(complete) {
                    a.animating = false;
                    a.elements.each(el => {
                        const element = el;
                        delete element.dom7AnimateInstance;
                    });
                    if (complete) complete(els);

                    if (a.que.length > 0) {
                        const que = a.que.shift();
                        a.animate(que[0], que[1]);
                    }
                },

                animate(props, params) {
                    if (a.animating) {
                        a.que.push([props, params]);
                        return a;
                    }

                    const elements = []; // Define & Cache Initials & Units

                    a.elements.each((el, index) => {
                        let initialFullValue;
                        let initialValue;
                        let unit;
                        let finalValue;
                        let finalFullValue;
                        if (!el.dom7AnimateInstance) a.elements[index].dom7AnimateInstance = a;
                        elements[index] = {
                            container: el
                        };
                        Object.keys(props).forEach(prop => {
                            initialFullValue = window.getComputedStyle(el, null).getPropertyValue(prop).replace(',', '.');
                            initialValue = parseFloat(initialFullValue);
                            unit = initialFullValue.replace(initialValue, '');
                            finalValue = parseFloat(props[prop]);
                            finalFullValue = props[prop] + unit;
                            elements[index][prop] = {
                                initialFullValue,
                                initialValue,
                                unit,
                                finalValue,
                                finalFullValue,
                                currentValue: initialValue
                            };
                        });
                    });
                    let startTime = null;
                    let time;
                    let elementsDone = 0;
                    let propsDone = 0;
                    let done;
                    let began = false;
                    a.animating = true;

                    function render() {
                        time = new Date().getTime();
                        let progress;
                        let easeProgress; // let el;

                        if (!began) {
                            began = true;
                            if (params.begin) params.begin(els);
                        }

                        if (startTime === null) {
                            startTime = time;
                        }

                        if (params.progress) {
                            // eslint-disable-next-line
                            params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                        }

                        elements.forEach(element => {
                            const el = element;
                            if (done || el.done) return;
                            Object.keys(props).forEach(prop => {
                                if (done || el.done) return;
                                progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                                easeProgress = a.easingProgress(params.easing, progress);
                                const {
                                    initialValue,
                                    finalValue,
                                    unit
                                } = el[prop];
                                el[prop].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                                const currentValue = el[prop].currentValue;

                                if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                                    el.container.style[prop] = finalValue + unit;
                                    propsDone += 1;

                                    if (propsDone === Object.keys(props).length) {
                                        el.done = true;
                                        elementsDone += 1;
                                    }

                                    if (elementsDone === elements.length) {
                                        done = true;
                                    }
                                }

                                if (done) {
                                    a.done(params.complete);
                                    return;
                                }

                                el.container.style[prop] = currentValue + unit;
                            });
                        });
                        if (done) return; // Then call

                        a.frameId = window.requestAnimationFrame(render);
                    }

                    a.frameId = window.requestAnimationFrame(render);
                    return a;
                }

            };

            if (a.elements.length === 0) {
                return els;
            }

            let animateInstance;

            for (let i = 0; i < a.elements.length; i += 1) {
                if (a.elements[i].dom7AnimateInstance) {
                    animateInstance = a.elements[i].dom7AnimateInstance;
                } else a.elements[i].dom7AnimateInstance = a;
            }

            if (!animateInstance) {
                animateInstance = a;
            }

            if (initialProps === 'stop') {
                animateInstance.stop();
            } else {
                animateInstance.animate(a.props, a.params);
            }

            return els;
        }

        function stop() {
            const els = this;

            for (let i = 0; i < els.length; i += 1) {
                if (els[i].dom7AnimateInstance) {
                    els[i].dom7AnimateInstance.stop();
                }
            }
        }

        const noTrigger = 'resize scroll'.split(' ');

        function shortcut(name) {
            function eventHandler(...args) {
                if (typeof args[0] === 'undefined') {
                    for (let i = 0; i < this.length; i += 1) {
                        if (noTrigger.indexOf(name) < 0) {
                            if (name in this[i]) this[i][name](); else {
                                $(this[i]).trigger(name);
                            }
                        }
                    }

                    return this;
                }

                return this.on(name, ...args);
            }

            return eventHandler;
        }

        const click = shortcut('click');
        const dom7_esm_blur = shortcut('blur');
        const dom7_esm_focus = shortcut('focus');
        const focusin = shortcut('focusin');
        const focusout = shortcut('focusout');
        const keyup = shortcut('keyup');
        const keydown = shortcut('keydown');
        const keypress = shortcut('keypress');
        const dom7_esm_submit = shortcut('submit');
        const change = shortcut('change');
        const mousedown = shortcut('mousedown');
        const mousemove = shortcut('mousemove');
        const mouseup = shortcut('mouseup');
        const mouseenter = shortcut('mouseenter');
        const mouseleave = shortcut('mouseleave');
        const mouseout = shortcut('mouseout');
        const mouseover = shortcut('mouseover');
        const touchstart = shortcut('touchstart');
        const touchend = shortcut('touchend');
        const touchmove = shortcut('touchmove');
        const resize = shortcut('resize');
        const dom7_esm_scroll = shortcut('scroll');
        /* harmony default export */
        const dom7_esm = ((/* unused pure expression or super */ null && ($)));

        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/dom.js

        const Methods = {
            addClass: addClass,
            removeClass: removeClass,
            hasClass: hasClass,
            toggleClass: toggleClass,
            attr: attr,
            removeAttr: removeAttr,
            transform: transform,
            transition: transition,
            on: on,
            off: off,
            trigger: trigger,
            transitionEnd: transitionEnd,
            outerWidth: dom7_esm_outerWidth,
            outerHeight: dom7_esm_outerHeight,
            styles: styles,
            offset: offset,
            css: css,
            each: each,
            html: html,
            text: dom7_esm_text,
            is: is,
            index: index,
            eq: eq,
            append: append,
            prepend: prepend,
            next: next,
            nextAll: nextAll,
            prev: prev,
            prevAll: prevAll,
            parent: dom7_esm_parent,
            parents: parents,
            closest: closest,
            find: find,
            children: children,
            filter: filter,
            remove: remove
        };
        Object.keys(Methods).forEach(methodName => {
            Object.defineProperty($.fn, methodName, {
                value: Methods[methodName],
                writable: true
            });
        });
        /* harmony default export */
        const dom = ($);
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/utils.js


        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach(key => {
                try {
                    object[key] = null;
                } catch (e) {// no getter for object
                }

                try {
                    delete object[key];
                } catch (e) {// something got wrong
                }
            });
        }

        function nextTick(callback, delay) {
            if (delay === void 0) {
                delay = 0;
            }

            return setTimeout(callback, delay);
        }

        function now() {
            return Date.now();
        }

        function utils_getComputedStyle(el) {
            const window = ssr_window_esm_getWindow();
            let style;

            if (window.getComputedStyle) {
                style = window.getComputedStyle(el, null);
            }

            if (!style && el.currentStyle) {
                style = el.currentStyle;
            }

            if (!style) {
                style = el.style;
            }

            return style;
        }

        function getTranslate(el, axis) {
            if (axis === void 0) {
                axis = 'x';
            }

            const window = ssr_window_esm_getWindow();
            let matrix;
            let curTransform;
            let transformMatrix;
            const curStyle = utils_getComputedStyle(el, null);

            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;

                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
                } // Some old versions of Webkit choke when 'none' is passed; pass
                // empty string instead in this case


                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                // Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
                else curTransform = parseFloat(matrix[4]);
            }

            if (axis === 'y') {
                // Latest Chrome and webkits Fix
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
                else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
                else curTransform = parseFloat(matrix[5]);
            }

            return curTransform || 0;
        }

        function utils_isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
        }

        function isNode(node) {
            // eslint-disable-next-line
            if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
                return node instanceof HTMLElement;
            }

            return node && (node.nodeType === 1 || node.nodeType === 11);
        }

        function utils_extend() {
            const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
            const noExtend = ['__proto__', 'constructor', 'prototype'];

            for (let i = 1; i < arguments.length; i += 1) {
                const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

                if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                    const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

                    for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        const nextKey = keysArray[nextIndex];
                        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                        if (desc !== undefined && desc.enumerable) {
                            if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                                if (nextSource[nextKey].__swiper__) {
                                    to[nextKey] = nextSource[nextKey];
                                } else {
                                    utils_extend(to[nextKey], nextSource[nextKey]);
                                }
                            } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                                to[nextKey] = {};

                                if (nextSource[nextKey].__swiper__) {
                                    to[nextKey] = nextSource[nextKey];
                                } else {
                                    utils_extend(to[nextKey], nextSource[nextKey]);
                                }
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }

            return to;
        }

        function setCSSProperty(el, varName, varValue) {
            el.style.setProperty(varName, varValue);
        }

        function animateCSSModeScroll(_ref) {
            let {
                swiper,
                targetPosition,
                side
            } = _ref;
            const window = ssr_window_esm_getWindow();
            const startPosition = -swiper.translate;
            let startTime = null;
            let time;
            const duration = swiper.params.speed;
            swiper.wrapperEl.style.scrollSnapType = 'none';
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            const dir = targetPosition > startPosition ? 'next' : 'prev';

            const isOutOfBound = (current, target) => {
                return dir === 'next' && current >= target || dir === 'prev' && current <= target;
            };

            const animate = () => {
                time = new Date().getTime();

                if (startTime === null) {
                    startTime = time;
                }

                const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
                let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

                if (isOutOfBound(currentPosition, targetPosition)) {
                    currentPosition = targetPosition;
                }

                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });

                if (isOutOfBound(currentPosition, targetPosition)) {
                    swiper.wrapperEl.style.overflow = 'hidden';
                    swiper.wrapperEl.style.scrollSnapType = '';
                    setTimeout(() => {
                        swiper.wrapperEl.style.overflow = '';
                        swiper.wrapperEl.scrollTo({
                            [side]: currentPosition
                        });
                    });
                    window.cancelAnimationFrame(swiper.cssModeFrameID);
                    return;
                }

                swiper.cssModeFrameID = window.requestAnimationFrame(animate);
            };

            animate();
        }


        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-support.js

        let support;

        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = getDocument();
            return {
                smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
                touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
                passiveListener: function checkPassiveListener() {
                    let supportsPassive = false;

                    try {
                        const opts = Object.defineProperty({}, 'passive', {
                            // eslint-disable-next-line
                            get() {
                                supportsPassive = true;
                            }

                        });
                        window.addEventListener('testPassiveListener', null, opts);
                    } catch (e) {// No support
                    }

                    return supportsPassive;
                }(),
                gestures: function checkGestures() {
                    return 'ongesturestart' in window;
                }()
            };
        }

        function getSupport() {
            if (!support) {
                support = calcSupport();
            }

            return support;
        }


        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-device.js


        let deviceCached;

        function calcDevice(_temp) {
            let {
                userAgent
            } = _temp === void 0 ? {} : _temp;
            const support = getSupport();
            const window = ssr_window_esm_getWindow();
            const platform = window.navigator.platform;
            const ua = userAgent || window.navigator.userAgent;
            const device = {
                ios: false,
                android: false
            };
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;
            const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

            let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            const windows = platform === 'Win32';
            let macos = platform === 'MacIntel'; // iPadOs 13 fix

            const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

            if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
                ipad = ua.match(/(Version)\/([\d.]+)/);
                if (!ipad) ipad = [0, 1, '13_0_0'];
                macos = false;
            } // Android


            if (android && !windows) {
                device.os = 'android';
                device.android = true;
            }

            if (ipad || iphone || ipod) {
                device.os = 'ios';
                device.ios = true;
            } // Export object


            return device;
        }

        function getDevice(overrides) {
            if (overrides === void 0) {
                overrides = {};
            }

            if (!deviceCached) {
                deviceCached = calcDevice(overrides);
            }

            return deviceCached;
        }


        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/get-browser.js

        let browser;

        function calcBrowser() {
            const window = ssr_window_esm_getWindow();

            function isSafari() {
                const ua = window.navigator.userAgent.toLowerCase();
                return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
            }

            return {
                isSafari: isSafari(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
            };
        }

        function getBrowser() {
            if (!browser) {
                browser = calcBrowser();
            }

            return browser;
        }


        ;// CONCATENATED MODULE: ./node_modules/swiper/core/modules/resize/resize.js

        function Resize(_ref) {
            let {
                swiper,
                on,
                emit
            } = _ref;
            const window = ssr_window_esm_getWindow();
            let observer = null;
            let animationFrame = null;

            const resizeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit('beforeResize');
                emit('resize');
            };

            const createObserver = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                observer = new ResizeObserver(entries => {
                    animationFrame = window.requestAnimationFrame(() => {
                        const {
                            width,
                            height
                        } = swiper;
                        let newWidth = width;
                        let newHeight = height;
                        entries.forEach(_ref2 => {
                            let {
                                contentBoxSize,
                                contentRect,
                                target
                            } = _ref2;
                            if (target && target !== swiper.el) return;
                            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                        });

                        if (newWidth !== width || newHeight !== height) {
                            resizeHandler();
                        }
                    });
                });
                observer.observe(swiper.el);
            };

            const removeObserver = () => {
                if (animationFrame) {
                    window.cancelAnimationFrame(animationFrame);
                }

                if (observer && observer.unobserve && swiper.el) {
                    observer.unobserve(swiper.el);
                    observer = null;
                }
            };

            const orientationChangeHandler = () => {
                if (!swiper || swiper.destroyed || !swiper.initialized) return;
                emit('orientationchange');
            };

            on('init', () => {
                if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
                    createObserver();
                    return;
                }

                window.addEventListener('resize', resizeHandler);
                window.addEventListener('orientationchange', orientationChangeHandler);
            });
            on('destroy', () => {
                removeObserver();
                window.removeEventListener('resize', resizeHandler);
                window.removeEventListener('orientationchange', orientationChangeHandler);
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/modules/observer/observer.js

        function Observer(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            const observers = [];
            const window = ssr_window_esm_getWindow();

            const attach = function (target, options) {
                if (options === void 0) {
                    options = {};
                }

                const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
                const observer = new ObserverFunc(mutations => {
                    // The observerUpdate event should only be triggered
                    // once despite the number of mutations.  Additional
                    // triggers are redundant and are very costly
                    if (mutations.length === 1) {
                        emit('observerUpdate', mutations[0]);
                        return;
                    }

                    const observerUpdate = function observerUpdate() {
                        emit('observerUpdate', mutations[0]);
                    };

                    if (window.requestAnimationFrame) {
                        window.requestAnimationFrame(observerUpdate);
                    } else {
                        window.setTimeout(observerUpdate, 0);
                    }
                });
                observer.observe(target, {
                    attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                    childList: typeof options.childList === 'undefined' ? true : options.childList,
                    characterData: typeof options.characterData === 'undefined' ? true : options.characterData
                });
                observers.push(observer);
            };

            const init = () => {
                if (!swiper.params.observer) return;

                if (swiper.params.observeParents) {
                    const containerParents = swiper.$el.parents();

                    for (let i = 0; i < containerParents.length; i += 1) {
                        attach(containerParents[i]);
                    }
                } // Observe container


                attach(swiper.$el[0], {
                    childList: swiper.params.observeSlideChildren
                }); // Observe wrapper

                attach(swiper.$wrapperEl[0], {
                    attributes: false
                });
            };

            const destroy = () => {
                observers.forEach(observer => {
                    observer.disconnect();
                });
                observers.splice(0, observers.length);
            };

            extendParams({
                observer: false,
                observeParents: false,
                observeSlideChildren: false
            });
            on('init', init);
            on('destroy', destroy);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events-emitter.js
        /* eslint-disable no-underscore-dangle */
        /* harmony default export */
        const events_emitter = ({
            on(events, handler, priority) {
                const self = this;
                if (typeof handler !== 'function') return self;
                const method = priority ? 'unshift' : 'push';
                events.split(' ').forEach(event => {
                    if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                    self.eventsListeners[event][method](handler);
                });
                return self;
            },

            once(events, handler, priority) {
                const self = this;
                if (typeof handler !== 'function') return self;

                function onceHandler() {
                    self.off(events, onceHandler);

                    if (onceHandler.__emitterProxy) {
                        delete onceHandler.__emitterProxy;
                    }

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    handler.apply(self, args);
                }

                onceHandler.__emitterProxy = handler;
                return self.on(events, onceHandler, priority);
            },

            onAny(handler, priority) {
                const self = this;
                if (typeof handler !== 'function') return self;
                const method = priority ? 'unshift' : 'push';

                if (self.eventsAnyListeners.indexOf(handler) < 0) {
                    self.eventsAnyListeners[method](handler);
                }

                return self;
            },

            offAny(handler) {
                const self = this;
                if (!self.eventsAnyListeners) return self;
                const index = self.eventsAnyListeners.indexOf(handler);

                if (index >= 0) {
                    self.eventsAnyListeners.splice(index, 1);
                }

                return self;
            },

            off(events, handler) {
                const self = this;
                if (!self.eventsListeners) return self;
                events.split(' ').forEach(event => {
                    if (typeof handler === 'undefined') {
                        self.eventsListeners[event] = [];
                    } else if (self.eventsListeners[event]) {
                        self.eventsListeners[event].forEach((eventHandler, index) => {
                            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                                self.eventsListeners[event].splice(index, 1);
                            }
                        });
                    }
                });
                return self;
            },

            emit() {
                const self = this;
                if (!self.eventsListeners) return self;
                let events;
                let data;
                let context;

                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }

                if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                    events = args[0];
                    data = args.slice(1, args.length);
                    context = self;
                } else {
                    events = args[0].events;
                    data = args[0].data;
                    context = args[0].context || self;
                }

                data.unshift(context);
                const eventsArray = Array.isArray(events) ? events : events.split(' ');
                eventsArray.forEach(event => {
                    if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                        self.eventsAnyListeners.forEach(eventHandler => {
                            eventHandler.apply(context, [event, ...data]);
                        });
                    }

                    if (self.eventsListeners && self.eventsListeners[event]) {
                        self.eventsListeners[event].forEach(eventHandler => {
                            eventHandler.apply(context, data);
                        });
                    }
                });
                return self;
            }

        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSize.js
        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const $el = swiper.$el;

            if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
                width = swiper.params.width;
            } else {
                width = $el[0].clientWidth;
            }

            if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
                height = swiper.params.height;
            } else {
                height = $el[0].clientHeight;
            }

            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
                return;
            } // Subtract paddings


            width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
            height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlides.js

        function updateSlides() {
            const swiper = this;

            function getDirectionLabel(property) {
                if (swiper.isHorizontal()) {
                    return property;
                } // prettier-ignore


                return {
                    'width': 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    'marginRight': 'marginBottom'
                }[property];
            }

            function getDirectionPropertyValue(node, label) {
                return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
            }

            const params = swiper.params;
            const {
                $wrapperEl,
                size: swiperSize,
                rtlTranslate: rtl,
                wrongRTL
            } = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
            const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            let snapGrid = [];
            const slidesGrid = [];
            const slidesSizesGrid = [];
            let offsetBefore = params.slidesOffsetBefore;

            if (typeof offsetBefore === 'function') {
                offsetBefore = params.slidesOffsetBefore.call(swiper);
            }

            let offsetAfter = params.slidesOffsetAfter;

            if (typeof offsetAfter === 'function') {
                offsetAfter = params.slidesOffsetAfter.call(swiper);
            }

            const previousSnapGridLength = swiper.snapGrid.length;
            const previousSlidesGridLength = swiper.slidesGrid.length;
            let spaceBetween = params.spaceBetween;
            let slidePosition = -offsetBefore;
            let prevSlideSize = 0;
            let index = 0;

            if (typeof swiperSize === 'undefined') {
                return;
            }

            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
            }

            swiper.virtualSize = -spaceBetween; // reset margins

            if (rtl) slides.css({
                marginLeft: '',
                marginBottom: '',
                marginTop: ''
            }); else slides.css({
                marginRight: '',
                marginBottom: '',
                marginTop: ''
            }); // reset cssMode offsets

            if (params.centeredSlides && params.cssMode) {
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
            }

            const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

            if (gridEnabled) {
                swiper.grid.initSlides(slidesLength);
            } // Calc slides


            let slideSize;
            const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
                return typeof params.breakpoints[key].slidesPerView !== 'undefined';
            }).length > 0;

            for (let i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                const slide = slides.eq(i);

                if (gridEnabled) {
                    swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
                }

                if (slide.css('display') === 'none') continue; // eslint-disable-line

                if (params.slidesPerView === 'auto') {
                    if (shouldResetSlideSize) {
                        slides[i].style[getDirectionLabel('width')] = ``;
                    }

                    const slideStyles = getComputedStyle(slide[0]);
                    const currentTransform = slide[0].style.transform;
                    const currentWebKitTransform = slide[0].style.webkitTransform;

                    if (currentTransform) {
                        slide[0].style.transform = 'none';
                    }

                    if (currentWebKitTransform) {
                        slide[0].style.webkitTransform = 'none';
                    }

                    if (params.roundLengths) {
                        slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                    } else {
                        // eslint-disable-next-line
                        const width = getDirectionPropertyValue(slideStyles, 'width');
                        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                        const boxSizing = slideStyles.getPropertyValue('box-sizing');

                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            const {
                                clientWidth,
                                offsetWidth
                            } = slide[0];
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                        }
                    }

                    if (currentTransform) {
                        slide[0].style.transform = currentTransform;
                    }

                    if (currentWebKitTransform) {
                        slide[0].style.webkitTransform = currentWebKitTransform;
                    }

                    if (params.roundLengths) slideSize = Math.floor(slideSize);
                } else {
                    slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                    if (params.roundLengths) slideSize = Math.floor(slideSize);

                    if (slides[i]) {
                        slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
                    }
                }

                if (slides[i]) {
                    slides[i].swiperSlideSize = slideSize;
                }

                slidesSizesGrid.push(slideSize);

                if (params.centeredSlides) {
                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                    if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }

                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }

            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

            if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
                $wrapperEl.css({
                    width: `${swiper.virtualSize + params.spaceBetween}px`
                });
            }

            if (params.setWrapperSize) {
                $wrapperEl.css({
                    [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
                });
            }

            if (gridEnabled) {
                swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
            } // Remove last grid elements depending on width


            if (!params.centeredSlides) {
                const newSlidesGrid = [];

                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

                    if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                        newSlidesGrid.push(slidesGridItem);
                    }
                }

                snapGrid = newSlidesGrid;

                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                    snapGrid.push(swiper.virtualSize - swiperSize);
                }
            }

            if (snapGrid.length === 0) snapGrid = [0];

            if (params.spaceBetween !== 0) {
                const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
                slides.filter((_, slideIndex) => {
                    if (!params.cssMode) return true;

                    if (slideIndex === slides.length - 1) {
                        return false;
                    }

                    return true;
                }).css({
                    [key]: `${spaceBetween}px`
                });
            }

            if (params.centeredSlides && params.centeredSlidesBounds) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach(slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                });
                allSlidesSize -= params.spaceBetween;
                const maxSnap = allSlidesSize - swiperSize;
                snapGrid = snapGrid.map(snap => {
                    if (snap < 0) return -offsetBefore;
                    if (snap > maxSnap) return maxSnap + offsetAfter;
                    return snap;
                });
            }

            if (params.centerInsufficientSlides) {
                let allSlidesSize = 0;
                slidesSizesGrid.forEach(slideSizeValue => {
                    allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
                });
                allSlidesSize -= params.spaceBetween;

                if (allSlidesSize < swiperSize) {
                    const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                    snapGrid.forEach((snap, snapIndex) => {
                        snapGrid[snapIndex] = snap - allSlidesOffset;
                    });
                    slidesGrid.forEach((snap, snapIndex) => {
                        slidesGrid[snapIndex] = snap + allSlidesOffset;
                    });
                }
            }

            Object.assign(swiper, {
                slides,
                snapGrid,
                slidesGrid,
                slidesSizesGrid
            });

            if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
                setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
                const addToSnapGrid = -swiper.snapGrid[0];
                const addToSlidesGrid = -swiper.slidesGrid[0];
                swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
                swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
            }

            if (slidesLength !== previousSlidesLength) {
                swiper.emit('slidesLengthChange');
            }

            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                swiper.emit('snapGridLengthChange');
            }

            if (slidesGrid.length !== previousSlidesGridLength) {
                swiper.emit('slidesGridLengthChange');
            }

            if (params.watchSlidesProgress) {
                swiper.updateSlidesOffset();
            }

            if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) {
                    swiper.$el.removeClass(backFaceHiddenClass);
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateAutoHeight.js
        function updateAutoHeight(speed) {
            const swiper = this;
            const activeSlides = [];
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let newHeight = 0;
            let i;

            if (typeof speed === 'number') {
                swiper.setTransition(speed);
            } else if (speed === true) {
                swiper.setTransition(swiper.params.speed);
            }

            const getSlideByIndex = index => {
                if (isVirtual) {
                    return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
                }

                return swiper.slides.eq(index)[0];
            }; // Find slides currently in view


            if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
                if (swiper.params.centeredSlides) {
                    swiper.visibleSlides.each(slide => {
                        activeSlides.push(slide);
                    });
                } else {
                    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                        const index = swiper.activeIndex + i;
                        if (index > swiper.slides.length && !isVirtual) break;
                        activeSlides.push(getSlideByIndex(index));
                    }
                }
            } else {
                activeSlides.push(getSlideByIndex(swiper.activeIndex));
            } // Find new height from highest slide in view


            for (i = 0; i < activeSlides.length; i += 1) {
                if (typeof activeSlides[i] !== 'undefined') {
                    const height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            } // Update Height


            if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesOffset.js
        function updateSlidesOffset() {
            const swiper = this;
            const slides = swiper.slides;

            for (let i = 0; i < slides.length; i += 1) {
                slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesProgress.js

        function updateSlidesProgress(translate) {
            if (translate === void 0) {
                translate = this && this.translate || 0;
            }

            const swiper = this;
            const params = swiper.params;
            const {
                slides,
                rtlTranslate: rtl,
                snapGrid
            } = swiper;
            if (slides.length === 0) return;
            if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
            let offsetCenter = -translate;
            if (rtl) offsetCenter = translate; // Visible Slides

            slides.removeClass(params.slideVisibleClass);
            swiper.visibleSlidesIndexes = [];
            swiper.visibleSlides = [];

            for (let i = 0; i < slides.length; i += 1) {
                const slide = slides[i];
                let slideOffset = slide.swiperSlideOffset;

                if (params.cssMode && params.centeredSlides) {
                    slideOffset -= slides[0].swiperSlideOffset;
                }

                const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                const slideBefore = -(offsetCenter - slideOffset);
                const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }

                slide.progress = rtl ? -slideProgress : slideProgress;
                slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
            }

            swiper.visibleSlides = dom(swiper.visibleSlides);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateProgress.js
        function updateProgress(translate) {
            const swiper = this;

            if (typeof translate === 'undefined') {
                const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

                translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
            }

            const params = swiper.params;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            let {
                progress,
                isBeginning,
                isEnd
            } = swiper;
            const wasBeginning = isBeginning;
            const wasEnd = isEnd;

            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / translatesDiff;
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }

            Object.assign(swiper, {
                progress,
                isBeginning,
                isEnd
            });
            if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

            if (isBeginning && !wasBeginning) {
                swiper.emit('reachBeginning toEdge');
            }

            if (isEnd && !wasEnd) {
                swiper.emit('reachEnd toEdge');
            }

            if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
                swiper.emit('fromEdge');
            }

            swiper.emit('progress', progress);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateSlidesClasses.js
        function updateSlidesClasses() {
            const swiper = this;
            const {
                slides,
                params,
                $wrapperEl,
                activeIndex,
                realIndex
            } = swiper;
            const isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
            let activeSlide;

            if (isVirtual) {
                activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
            } else {
                activeSlide = slides.eq(activeIndex);
            } // Active classes


            activeSlide.addClass(params.slideActiveClass);

            if (params.loop) {
                // Duplicate to all looped slides
                if (activeSlide.hasClass(params.slideDuplicateClass)) {
                    $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
                } else {
                    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
                }
            } // Next Slide


            let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

            if (params.loop && nextSlide.length === 0) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            } // Prev Slide


            let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

            if (params.loop && prevSlide.length === 0) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }

            if (params.loop) {
                // Duplicate to all looped slides
                if (nextSlide.hasClass(params.slideDuplicateClass)) {
                    $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
                } else {
                    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
                }

                if (prevSlide.hasClass(params.slideDuplicateClass)) {
                    $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
                } else {
                    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
                }
            }

            swiper.emitSlidesClasses();
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateActiveIndex.js
        function updateActiveIndex(newActiveIndex) {
            const swiper = this;
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            const {
                slidesGrid,
                snapGrid,
                params,
                activeIndex: previousIndex,
                realIndex: previousRealIndex,
                snapIndex: previousSnapIndex
            } = swiper;
            let activeIndex = newActiveIndex;
            let snapIndex;

            if (typeof activeIndex === 'undefined') {
                for (let i = 0; i < slidesGrid.length; i += 1) {
                    if (typeof slidesGrid[i + 1] !== 'undefined') {
                        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                            activeIndex = i;
                        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                            activeIndex = i + 1;
                        }
                    } else if (translate >= slidesGrid[i]) {
                        activeIndex = i;
                    }
                } // Normalize slideIndex


                if (params.normalizeSlideIndex) {
                    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
                }
            }

            if (snapGrid.indexOf(translate) >= 0) {
                snapIndex = snapGrid.indexOf(translate);
            } else {
                const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
                snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
            }

            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit('snapIndexChange');
                }

                return;
            } // Get real index


            const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
            Object.assign(swiper, {
                snapIndex,
                realIndex,
                previousIndex,
                activeIndex
            });
            swiper.emit('activeIndexChange');
            swiper.emit('snapIndexChange');

            if (previousRealIndex !== realIndex) {
                swiper.emit('realIndexChange');
            }

            if (swiper.initialized || swiper.params.runCallbacksOnInit) {
                swiper.emit('slideChange');
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/updateClickedSlide.js

        function updateClickedSlide(e) {
            const swiper = this;
            const params = swiper.params;
            const slide = dom(e).closest(`.${params.slideClass}`)[0];
            let slideFound = false;
            let slideIndex;

            if (slide) {
                for (let i = 0; i < swiper.slides.length; i += 1) {
                    if (swiper.slides[i] === slide) {
                        slideFound = true;
                        slideIndex = i;
                        break;
                    }
                }
            }

            if (slide && slideFound) {
                swiper.clickedSlide = slide;

                if (swiper.virtual && swiper.params.virtual.enabled) {
                    swiper.clickedIndex = parseInt(dom(slide).attr('data-swiper-slide-index'), 10);
                } else {
                    swiper.clickedIndex = slideIndex;
                }
            } else {
                swiper.clickedSlide = undefined;
                swiper.clickedIndex = undefined;
                return;
            }

            if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
                swiper.slideToClickedSlide();
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/update/index.js


        /* harmony default export */
        const core_update = ({
            updateSize: updateSize,
            updateSlides: updateSlides,
            updateAutoHeight: updateAutoHeight,
            updateSlidesOffset: updateSlidesOffset,
            updateSlidesProgress: updateSlidesProgress,
            updateProgress: updateProgress,
            updateSlidesClasses: updateSlidesClasses,
            updateActiveIndex: updateActiveIndex,
            updateClickedSlide: updateClickedSlide
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/getTranslate.js

        function getSwiperTranslate(axis) {
            if (axis === void 0) {
                axis = this.isHorizontal() ? 'x' : 'y';
            }

            const swiper = this;
            const {
                params,
                rtlTranslate: rtl,
                translate,
                $wrapperEl
            } = swiper;

            if (params.virtualTranslate) {
                return rtl ? -translate : translate;
            }

            if (params.cssMode) {
                return translate;
            }

            let currentTranslate = getTranslate($wrapperEl[0], axis);
            if (rtl) currentTranslate = -currentTranslate;
            return currentTranslate || 0;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/setTranslate.js
        function setTranslate(translate, byController) {
            const swiper = this;
            const {
                rtlTranslate: rtl,
                params,
                $wrapperEl,
                wrapperEl,
                progress
            } = swiper;
            let x = 0;
            let y = 0;
            const z = 0;

            if (swiper.isHorizontal()) {
                x = rtl ? -translate : translate;
            } else {
                y = translate;
            }

            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }

            if (params.cssMode) {
                wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
            } else if (!params.virtualTranslate) {
                $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
            }

            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

            if (translatesDiff === 0) {
                newProgress = 0;
            } else {
                newProgress = (translate - swiper.minTranslate()) / translatesDiff;
            }

            if (newProgress !== progress) {
                swiper.updateProgress(translate);
            }

            swiper.emit('setTranslate', swiper.translate, byController);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/minTranslate.js
        function minTranslate() {
            return -this.snapGrid[0];
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/maxTranslate.js
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/translateTo.js

        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) {
                translate = 0;
            }

            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            if (translateBounds === void 0) {
                translateBounds = true;
            }

            const swiper = this;
            const {
                params,
                wrapperEl
            } = swiper;

            if (swiper.animating && params.preventInteractionOnTransition) {
                return false;
            }

            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate; // Update progress

            swiper.updateProgress(newTranslate);

            if (params.cssMode) {
                const isH = swiper.isHorizontal();

                if (speed === 0) {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? 'left' : 'top'
                        });
                        return true;
                    }

                    wrapperEl.scrollTo({
                        [isH ? 'left' : 'top']: -newTranslate,
                        behavior: 'smooth'
                    });
                }

                return true;
            }

            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);

                if (runCallbacks) {
                    swiper.emit('beforeTransitionStart', speed, internal);
                    swiper.emit('transitionEnd');
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);

                if (runCallbacks) {
                    swiper.emit('beforeTransitionStart', speed, internal);
                    swiper.emit('transitionStart');
                }

                if (!swiper.animating) {
                    swiper.animating = true;

                    if (!swiper.onTranslateToWrapperTransitionEnd) {
                        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                            if (!swiper || swiper.destroyed) return;
                            if (e.target !== this) return;
                            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                            swiper.onTranslateToWrapperTransitionEnd = null;
                            delete swiper.onTranslateToWrapperTransitionEnd;

                            if (runCallbacks) {
                                swiper.emit('transitionEnd');
                            }
                        };
                    }

                    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                }
            }

            return true;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/translate/index.js


        /* harmony default export */
        const translate = ({
            getTranslate: getSwiperTranslate,
            setTranslate: setTranslate,
            minTranslate: minTranslate,
            maxTranslate: maxTranslate,
            translateTo: translateTo
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/setTransition.js
        function setTransition(duration, byController) {
            const swiper = this;

            if (!swiper.params.cssMode) {
                swiper.$wrapperEl.transition(duration);
            }

            swiper.emit('setTransition', duration, byController);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEmit.js
        function transitionEmit(_ref) {
            let {
                swiper,
                runCallbacks,
                direction,
                step
            } = _ref;
            const {
                activeIndex,
                previousIndex
            } = swiper;
            let dir = direction;

            if (!dir) {
                if (activeIndex > previousIndex) dir = 'next'; else if (activeIndex < previousIndex) dir = 'prev'; else dir = 'reset';
            }

            swiper.emit(`transition${step}`);

            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === 'reset') {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }

                swiper.emit(`slideChangeTransition${step}`);

                if (dir === 'next') {
                    swiper.emit(`slideNextTransition${step}`);
                } else {
                    swiper.emit(`slidePrevTransition${step}`);
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionStart.js

        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            const swiper = this;
            const {
                params
            } = swiper;
            if (params.cssMode) return;

            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }

            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: 'Start'
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/transitionEnd.js

        function transitionEnd_transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            const swiper = this;
            const {
                params
            } = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: 'End'
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/transition/index.js


        /* harmony default export */
        const core_transition = ({
            setTransition: setTransition,
            transitionStart: transitionStart,
            transitionEnd: transitionEnd_transitionEnd
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideTo.js

        function slideTo(index, speed, runCallbacks, internal, initial) {
            if (index === void 0) {
                index = 0;
            }

            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            if (typeof index !== 'number' && typeof index !== 'string') {
                throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
            }

            if (typeof index === 'string') {
                /**
                 * The `index` argument converted from `string` to `number`.
                 * @type {number}
                 */
                const indexAsNumber = parseInt(index, 10);
                /**
                 * Determines whether the `index` argument is a valid `number`
                 * after being converted from the `string` type.
                 * @type {boolean}
                 */

                const isValidNumber = isFinite(indexAsNumber);

                if (!isValidNumber) {
                    throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
                } // Knowing that the converted `index` is a valid number,
                // we can update the original argument's value.


                index = indexAsNumber;
            }

            const swiper = this;
            let slideIndex = index;
            if (slideIndex < 0) slideIndex = 0;
            const {
                params,
                snapGrid,
                slidesGrid,
                previousIndex,
                activeIndex,
                rtlTranslate: rtl,
                wrapperEl,
                enabled
            } = swiper;

            if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
                return false;
            }

            const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
            let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
                swiper.emit('beforeSlideChangeStart');
            }

            const translate = -snapGrid[snapIndex]; // Update progress

            swiper.updateProgress(translate); // Normalize slideIndex

            if (params.normalizeSlideIndex) {
                for (let i = 0; i < slidesGrid.length; i += 1) {
                    const normalizedTranslate = -Math.floor(translate * 100);
                    const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                    const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

                    if (typeof slidesGrid[i + 1] !== 'undefined') {
                        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                            slideIndex = i;
                        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                            slideIndex = i + 1;
                        }
                    } else if (normalizedTranslate >= normalizedGrid) {
                        slideIndex = i;
                    }
                }
            } // Directions locks


            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                    return false;
                }

                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                    if ((activeIndex || 0) !== slideIndex) return false;
                }
            }

            let direction;
            if (slideIndex > activeIndex) direction = 'next'; else if (slideIndex < activeIndex) direction = 'prev'; else direction = 'reset'; // Update Index

            if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
                swiper.updateActiveIndex(slideIndex); // Update Height

                if (params.autoHeight) {
                    swiper.updateAutoHeight();
                }

                swiper.updateSlidesClasses();

                if (params.effect !== 'slide') {
                    swiper.setTranslate(translate);
                }

                if (direction !== 'reset') {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }

                return false;
            }

            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                const t = rtl ? translate : -translate;

                if (speed === 0) {
                    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

                    if (isVirtual) {
                        swiper.wrapperEl.style.scrollSnapType = 'none';
                        swiper._immediateVirtual = true;
                    }

                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

                    if (isVirtual) {
                        requestAnimationFrame(() => {
                            swiper.wrapperEl.style.scrollSnapType = '';
                            swiper._swiperImmediateVirtual = false;
                        });
                    }
                } else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: t,
                            side: isH ? 'left' : 'top'
                        });
                        return true;
                    }

                    wrapperEl.scrollTo({
                        [isH ? 'left' : 'top']: t,
                        behavior: 'smooth'
                    });
                }

                return true;
            }

            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);

            if (speed === 0) {
                swiper.transitionEnd(runCallbacks, direction);
            } else if (!swiper.animating) {
                swiper.animating = true;

                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }

                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }

            return true;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToLoop.js
        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) {
                index = 0;
            }

            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            const swiper = this;
            let newIndex = index;

            if (swiper.params.loop) {
                newIndex += swiper.loopedSlides;
            }

            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideNext.js
        /* eslint no-unused-vars: "off" */
        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            const swiper = this;
            const {
                animating,
                enabled,
                params
            } = swiper;
            if (!enabled) return swiper;
            let perGroup = params.slidesPerGroup;

            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
            }

            const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix(); // eslint-disable-next-line

                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }

            if (params.rewind && swiper.isEnd) {
                return swiper.slideTo(0, speed, runCallbacks, internal);
            }

            return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slidePrev.js
        /* eslint no-unused-vars: "off" */
        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            const swiper = this;
            const {
                params,
                animating,
                snapGrid,
                slidesGrid,
                rtlTranslate,
                enabled
            } = swiper;
            if (!enabled) return swiper;

            if (params.loop) {
                if (animating && params.loopPreventsSlide) return false;
                swiper.loopFix(); // eslint-disable-next-line

                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }

            const translate = rtlTranslate ? swiper.translate : -swiper.translate;

            function normalize(val) {
                if (val < 0) return -Math.floor(Math.abs(val));
                return Math.floor(val);
            }

            const normalizedTranslate = normalize(translate);
            const normalizedSnapGrid = snapGrid.map(val => normalize(val));
            let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

            if (typeof prevSnap === 'undefined' && params.cssMode) {
                let prevSnapIndex;
                snapGrid.forEach((snap, snapIndex) => {
                    if (normalizedTranslate >= snap) {
                        // prevSnap = snap;
                        prevSnapIndex = snapIndex;
                    }
                });

                if (typeof prevSnapIndex !== 'undefined') {
                    prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
                }
            }

            let prevIndex = 0;

            if (typeof prevSnap !== 'undefined') {
                prevIndex = slidesGrid.indexOf(prevSnap);
                if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

                if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                    prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                    prevIndex = Math.max(prevIndex, 0);
                }
            }

            if (params.rewind && swiper.isBeginning) {
                const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
            }

            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideReset.js
        /* eslint no-unused-vars: "off" */
        function slideReset(speed, runCallbacks, internal) {
            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            const swiper = this;
            return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClosest.js
        /* eslint no-unused-vars: "off" */
        function slideToClosest(speed, runCallbacks, internal, threshold) {
            if (speed === void 0) {
                speed = this.params.speed;
            }

            if (runCallbacks === void 0) {
                runCallbacks = true;
            }

            if (threshold === void 0) {
                threshold = 0.5;
            }

            const swiper = this;
            let index = swiper.activeIndex;
            const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
            const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
            const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

            if (translate >= swiper.snapGrid[snapIndex]) {
                // The current translate is on or after the current snap index, so the choice
                // is between the current index and the one after it.
                const currentSnap = swiper.snapGrid[snapIndex];
                const nextSnap = swiper.snapGrid[snapIndex + 1];

                if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                    index += swiper.params.slidesPerGroup;
                }
            } else {
                // The current translate is before the current snap index, so the choice
                // is between the current index and the one before it.
                const prevSnap = swiper.snapGrid[snapIndex - 1];
                const currentSnap = swiper.snapGrid[snapIndex];

                if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
                    index -= swiper.params.slidesPerGroup;
                }
            }

            index = Math.max(index, 0);
            index = Math.min(index, swiper.slidesGrid.length - 1);
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/slideToClickedSlide.js


        function slideToClickedSlide() {
            const swiper = this;
            const {
                params,
                $wrapperEl
            } = swiper;
            const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            let slideToIndex = swiper.clickedIndex;
            let realIndex;

            if (params.loop) {
                if (swiper.animating) return;
                realIndex = parseInt(dom(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

                if (params.centeredSlides) {
                    if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                        swiper.loopFix();
                        slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                        nextTick(() => {
                            swiper.slideTo(slideToIndex);
                        });
                    } else {
                        swiper.slideTo(slideToIndex);
                    }
                } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                    nextTick(() => {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else {
                swiper.slideTo(slideToIndex);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/slide/index.js


        /* harmony default export */
        const slide = ({
            slideTo: slideTo,
            slideToLoop: slideToLoop,
            slideNext: slideNext,
            slidePrev: slidePrev,
            slideReset: slideReset,
            slideToClosest: slideToClosest,
            slideToClickedSlide: slideToClickedSlide
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopCreate.js


        function loopCreate() {
            const swiper = this;
            const document = getDocument();
            const {
                params,
                $wrapperEl
            } = swiper; // Remove duplicated slides

            const $selector = $wrapperEl.children().length > 0 ? dom($wrapperEl.children()[0].parentNode) : $wrapperEl;
            $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
            let slides = $selector.children(`.${params.slideClass}`);

            if (params.loopFillGroupWithBlank) {
                const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (let i = 0; i < blankSlidesNum; i += 1) {
                        const blankNode = dom(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                        $selector.append(blankNode);
                    }

                    slides = $selector.children(`.${params.slideClass}`);
                }
            }

            if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
            swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
            swiper.loopedSlides += params.loopAdditionalSlides;

            if (swiper.loopedSlides > slides.length) {
                swiper.loopedSlides = slides.length;
            }

            const prependSlides = [];
            const appendSlides = [];
            slides.each((el, index) => {
                const slide = dom(el);

                if (index < swiper.loopedSlides) {
                    appendSlides.push(el);
                }

                if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                    prependSlides.push(el);
                }

                slide.attr('data-swiper-slide-index', index);
            });

            for (let i = 0; i < appendSlides.length; i += 1) {
                $selector.append(dom(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            }

            for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
                $selector.prepend(dom(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopFix.js
        function loopFix() {
            const swiper = this;
            swiper.emit('beforeLoopFix');
            const {
                activeIndex,
                slides,
                loopedSlides,
                allowSlidePrev,
                allowSlideNext,
                snapGrid,
                rtlTranslate: rtl
            } = swiper;
            let newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            const snapTranslate = -snapGrid[activeIndex];
            const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

            if (activeIndex < loopedSlides) {
                newIndex = slides.length - loopedSlides * 3 + activeIndex;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);

                if (slideChanged && diff !== 0) {
                    swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                }
            } else if (activeIndex >= slides.length - loopedSlides) {
                // Fix For Positive Oversliding
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                const slideChanged = swiper.slideTo(newIndex, 0, false, true);

                if (slideChanged && diff !== 0) {
                    swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
                }
            }

            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/loopDestroy.js
        function loopDestroy() {
            const swiper = this;
            const {
                $wrapperEl,
                params,
                slides
            } = swiper;
            $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
            slides.removeAttr('data-swiper-slide-index');
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/loop/index.js


        /* harmony default export */
        const loop = ({
            loopCreate: loopCreate,
            loopFix: loopFix,
            loopDestroy: loopDestroy
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/setGrabCursor.js
        function setGrabCursor(moving) {
            const swiper = this;
            if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
            el.style.cursor = 'move';
            el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            el.style.cursor = moving ? 'grabbing' : 'grab';
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/unsetGrabCursor.js
        function unsetGrabCursor() {
            const swiper = this;

            if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
                return;
            }

            swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/grab-cursor/index.js


        /* harmony default export */
        const grab_cursor = ({
            setGrabCursor: setGrabCursor,
            unsetGrabCursor: unsetGrabCursor
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchStart.js


        // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd

        function closestElement(selector, base) {
            if (base === void 0) {
                base = this;
            }

            function __closestFrom(el) {
                if (!el || el === getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                return found || __closestFrom(el.getRootNode().host);
            }

            return __closestFrom(base);
        }

        function onTouchStart(event) {
            const swiper = this;
            const document = getDocument();
            const window = ssr_window_esm_getWindow();
            const data = swiper.touchEventsData;
            const {
                params,
                touches,
                enabled
            } = swiper;
            if (!enabled) return;

            if (swiper.animating && params.preventInteractionOnTransition) {
                return;
            }

            if (!swiper.animating && params.cssMode && params.loop) {
                swiper.loopFix();
            }

            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let $targetEl = dom(e.target);

            if (params.touchEventsTarget === 'wrapper') {
                if (!$targetEl.closest(swiper.wrapperEl).length) return;
            }

            data.isTouchEvent = e.type === 'touchstart';
            if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
            if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return; // change target el for shadow root component

            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

            if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
                $targetEl = dom(event.path[0]);
            }

            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
                swiper.allowClick = true;
                return;
            }

            if (params.swipeHandler) {
                if (!$targetEl.closest(params.swipeHandler)[0]) return;
            }

            touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

            const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === 'prevent') {
                    event.preventDefault();
                } else {
                    return;
                }
            }

            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: undefined,
                startMoving: undefined
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = undefined;
            if (params.threshold > 0) data.allowThresholdMove = false;

            if (e.type !== 'touchstart') {
                let preventDefault = true;

                if ($targetEl.is(data.focusableElements)) {
                    preventDefault = false;

                    if ($targetEl[0].nodeName === 'SELECT') {
                        data.isTouched = false;
                    }
                }

                if (document.activeElement && dom(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
                    document.activeElement.blur();
                }

                const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

                if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
                    e.preventDefault();
                }
            }

            if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
                swiper.freeMode.onTouchStart();
            }

            swiper.emit('touchStart', e);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchMove.js


        function onTouchMove(event) {
            const document = getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {
                params,
                touches,
                rtlTranslate: rtl,
                enabled
            } = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;

            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) {
                    swiper.emit('touchMoveOpposite', e);
                }

                return;
            }

            if (data.isTouchEvent && e.type !== 'touchmove') return;
            const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
            const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
            const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }

            if (!swiper.allowTouchMove) {
                if (!dom(e.target).is(data.focusableElements)) {
                    swiper.allowClick = false;
                }

                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = now();
                }

                return;
            }

            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
                if (swiper.isVertical()) {
                    // Vertical
                    if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                        data.isTouched = false;
                        data.isMoved = false;
                        return;
                    }
                } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
                    return;
                }
            }

            if (data.isTouchEvent && document.activeElement) {
                if (e.target === document.activeElement && dom(e.target).is(data.focusableElements)) {
                    data.isMoved = true;
                    swiper.allowClick = false;
                    return;
                }
            }

            if (data.allowTouchCallbacks) {
                swiper.emit('touchMove', e);
            }

            if (e.targetTouches && e.targetTouches.length > 1) return;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

            if (typeof data.isScrolling === 'undefined') {
                let touchAngle;

                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                    data.isScrolling = false;
                } else {
                    // eslint-disable-next-line
                    if (diffX * diffX + diffY * diffY >= 25) {
                        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                    }
                }
            }

            if (data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }

            if (typeof data.startMoving === 'undefined') {
                if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                    data.startMoving = true;
                }
            }

            if (data.isScrolling) {
                data.isTouched = false;
                return;
            }

            if (!data.startMoving) {
                return;
            }

            swiper.allowClick = false;

            if (!params.cssMode && e.cancelable) {
                e.preventDefault();
            }

            if (params.touchMoveStopPropagation && !params.nested) {
                e.stopPropagation();
            }

            if (!data.isMoved) {
                if (params.loop && !params.cssMode) {
                    swiper.loopFix();
                }

                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);

                if (swiper.animating) {
                    swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
                }

                data.allowMomentumBounce = false; // Grab Cursor

                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                    swiper.setGrabCursor(true);
                }

                swiper.emit('sliderFirstMove', e);
            }

            swiper.emit('sliderMove', e);
            data.isMoved = true;
            let diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) diff = -diff;
            swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;

            if (params.touchReleaseOnEdges) {
                resistanceRatio = 0;
            }

            if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
            } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
            }

            if (disableParentSwiper) {
                e.preventedByNestedSwiper = true;
            } // Directions locks


            if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
                data.currentTranslate = data.startTranslate;
            }

            if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
                data.currentTranslate = data.startTranslate;
            }

            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
                data.currentTranslate = data.startTranslate;
            } // Threshold


            if (params.threshold > 0) {
                if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = true;
                        touches.startX = touches.currentX;
                        touches.startY = touches.currentY;
                        data.currentTranslate = data.startTranslate;
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return;
                    }
                } else {
                    data.currentTranslate = data.startTranslate;
                    return;
                }
            }

            if (!params.followFinger || params.cssMode) return; // Update active index in free mode

            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
                swiper.freeMode.onTouchMove();
            } // Update progress


            swiper.updateProgress(data.currentTranslate); // Update translate

            swiper.setTranslate(data.currentTranslate);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onTouchEnd.js

        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            const {
                params,
                touches,
                rtlTranslate: rtl,
                slidesGrid,
                enabled
            } = swiper;
            if (!enabled) return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;

            if (data.allowTouchCallbacks) {
                swiper.emit('touchEnd', e);
            }

            data.allowTouchCallbacks = false;

            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) {
                    swiper.setGrabCursor(false);
                }

                data.isMoved = false;
                data.startMoving = false;
                return;
            } // Return Grab Cursor


            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(false);
            } // Time diff


            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
                swiper.emit('tap click', e);

                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                    swiper.emit('doubleTap doubleClick', e);
                }
            }

            data.lastClickTime = now();
            nextTick(() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            });

            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }

            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;

            if (params.followFinger) {
                currentPos = rtl ? swiper.translate : -swiper.translate;
            } else {
                currentPos = -data.currentTranslate;
            }

            if (params.cssMode) {
                return;
            }

            if (swiper.params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            } // Find current slide


            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];

            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

                if (typeof slidesGrid[i + increment] !== 'undefined') {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }

            let rewindFirstIndex = null;
            let rewindLastIndex = null;

            if (params.rewind) {
                if (swiper.isBeginning) {
                    rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
                } else if (swiper.isEnd) {
                    rewindFirstIndex = 0;
                }
            } // Find current slide size


            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

            if (timeDiff > params.longSwipesMs) {
                // Long touches
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }

                if (swiper.swipeDirection === 'next') {
                    if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                }

                if (swiper.swipeDirection === 'prev') {
                    if (ratio > 1 - params.longSwipesRatio) {
                        swiper.slideTo(stopIndex + increment);
                    } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                        swiper.slideTo(rewindLastIndex);
                    } else {
                        swiper.slideTo(stopIndex);
                    }
                }
            } else {
                // Short swipes
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }

                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === 'next') {
                        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    }

                    if (swiper.swipeDirection === 'prev') {
                        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                    }
                } else if (e.target === swiper.navigation.nextEl) {
                    swiper.slideTo(stopIndex + increment);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onResize.js
        function onResize() {
            const swiper = this;
            const {
                params,
                el
            } = swiper;
            if (el && el.offsetWidth === 0) return; // Breakpoints

            if (params.breakpoints) {
                swiper.setBreakpoint();
            } // Save locks


            const {
                allowSlideNext,
                allowSlidePrev,
                snapGrid
            } = swiper; // Disable locks on resize

            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateSlidesClasses();

            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
                swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }

            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                swiper.autoplay.run();
            } // Return locks after resize


            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;

            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onClick.js
        function onClick(e) {
            const swiper = this;
            if (!swiper.enabled) return;

            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) e.preventDefault();

                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/onScroll.js
        function onScroll() {
            const swiper = this;
            const {
                wrapperEl,
                rtlTranslate,
                enabled
            } = swiper;
            if (!enabled) return;
            swiper.previousTranslate = swiper.translate;

            if (swiper.isHorizontal()) {
                swiper.translate = -wrapperEl.scrollLeft;
            } else {
                swiper.translate = -wrapperEl.scrollTop;
            } // eslint-disable-next-line


            if (swiper.translate === -0) swiper.translate = 0;
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            let newProgress;
            const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

            if (translatesDiff === 0) {
                newProgress = 0;
            } else {
                newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
            }

            if (newProgress !== swiper.progress) {
                swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
            }

            swiper.emit('setTranslate', swiper.translate, false);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/events/index.js


        let dummyEventAttached = false;

        function dummyEventListener() {
        }

        const events = (swiper, method) => {
            const document = getDocument();
            const {
                params,
                touchEvents,
                el,
                wrapperEl,
                device,
                support
            } = swiper;
            const capture = !!params.nested;
            const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            const swiperMethod = method; // Touch Events

            if (!support.touch) {
                el[domMethod](touchEvents.start, swiper.onTouchStart, false);
                document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
                document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
            } else {
                const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
                el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
                    passive: false,
                    capture
                } : capture);
                el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

                if (touchEvents.cancel) {
                    el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
                }
            } // Prevent Links Clicks


            if (params.preventClicks || params.preventClicksPropagation) {
                el[domMethod]('click', swiper.onClick, true);
            }

            if (params.cssMode) {
                wrapperEl[domMethod]('scroll', swiper.onScroll);
            } // Resize handler


            if (params.updateOnWindowResize) {
                swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
            } else {
                swiper[swiperMethod]('observerUpdate', onResize, true);
            }
        };

        function attachEvents() {
            const swiper = this;
            const document = getDocument();
            const {
                params,
                support
            } = swiper;
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);

            if (params.cssMode) {
                swiper.onScroll = onScroll.bind(swiper);
            }

            swiper.onClick = onClick.bind(swiper);

            if (support.touch && !dummyEventAttached) {
                document.addEventListener('touchstart', dummyEventListener);
                dummyEventAttached = true;
            }

            events(swiper, 'on');
        }

        function detachEvents() {
            const swiper = this;
            events(swiper, 'off');
        }

        /* harmony default export */
        const core_events = ({
            attachEvents,
            detachEvents
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/setBreakpoint.js


        const isGridEnabled = (swiper, params) => {
            return swiper.grid && params.grid && params.grid.rows > 1;
        };

        function setBreakpoint() {
            const swiper = this;
            const {
                activeIndex,
                initialized,
                loopedSlides = 0,
                params,
                $el
            } = swiper;
            const breakpoints = params.breakpoints;
            if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

            const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
            if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
            const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            const breakpointParams = breakpointOnlyParams || swiper.originalParams;
            const wasMultiRow = isGridEnabled(swiper, params);
            const isMultiRow = isGridEnabled(swiper, breakpointParams);
            const wasEnabled = params.enabled;

            if (wasMultiRow && !isMultiRow) {
                $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                $el.addClass(`${params.containerModifierClass}grid`);

                if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
                    $el.addClass(`${params.containerModifierClass}grid-column`);
                }

                swiper.emitContainerClasses();
            }

            const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

            if (directionChanged && initialized) {
                swiper.changeDirection();
            }

            utils_extend(swiper.params, breakpointParams);
            const isEnabled = swiper.params.enabled;
            Object.assign(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev
            });

            if (wasEnabled && !isEnabled) {
                swiper.disable();
            } else if (!wasEnabled && isEnabled) {
                swiper.enable();
            }

            swiper.currentBreakpoint = breakpoint;
            swiper.emit('_beforeBreakpoint', breakpointParams);

            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
            }

            swiper.emit('breakpoint', breakpointParams);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/getBreakpoint.js

        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) {
                base = 'window';
            }

            if (!breakpoints || base === 'container' && !containerEl) return undefined;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map(point => {
                if (typeof point === 'string' && point.indexOf('@') === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }

                return {
                    value: point,
                    point
                };
            });
            points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

            for (let i = 0; i < points.length; i += 1) {
                const {
                    point,
                    value
                } = points[i];

                if (base === 'window') {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                        breakpoint = point;
                    }
                } else if (value <= containerEl.clientWidth) {
                    breakpoint = point;
                }
            }

            return breakpoint || 'max';
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/breakpoints/index.js


        /* harmony default export */
        const breakpoints = ({
            setBreakpoint: setBreakpoint,
            getBreakpoint: getBreakpoint
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/addClasses.js
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach(item => {
                if (typeof item === 'object') {
                    Object.keys(item).forEach(classNames => {
                        if (item[classNames]) {
                            resultClasses.push(prefix + classNames);
                        }
                    });
                } else if (typeof item === 'string') {
                    resultClasses.push(prefix + item);
                }
            });
            return resultClasses;
        }

        function addClasses() {
            const swiper = this;
            const {
                classNames,
                params,
                rtl,
                $el,
                device,
                support
            } = swiper; // prettier-ignore

            const suffixes = prepareClasses(['initialized', params.direction, {
                'pointer-events': !support.touch
            }, {
                'free-mode': swiper.params.freeMode && params.freeMode.enabled
            }, {
                'autoheight': params.autoHeight
            }, {
                'rtl': rtl
            }, {
                'grid': params.grid && params.grid.rows > 1
            }, {
                'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
            }, {
                'android': device.android
            }, {
                'ios': device.ios
            }, {
                'css-mode': params.cssMode
            }, {
                'centered': params.cssMode && params.centeredSlides
            }], params.containerModifierClass);
            classNames.push(...suffixes);
            $el.addClass([...classNames].join(' '));
            swiper.emitContainerClasses();
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/removeClasses.js
        function removeClasses() {
            const swiper = this;
            const {
                $el,
                classNames
            } = swiper;
            $el.removeClass(classNames.join(' '));
            swiper.emitContainerClasses();
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/classes/index.js


        /* harmony default export */
        const classes = ({
            addClasses: addClasses,
            removeClasses: removeClasses
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/images/loadImage.js


        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            const window = ssr_window_esm_getWindow();
            let image;

            function onReady() {
                if (callback) callback();
            }

            const isPicture = dom(imageEl).parent('picture')[0];

            if (!isPicture && (!imageEl.complete || !checkForComplete)) {
                if (src) {
                    image = new window.Image();
                    image.onload = onReady;
                    image.onerror = onReady;

                    if (sizes) {
                        image.sizes = sizes;
                    }

                    if (srcset) {
                        image.srcset = srcset;
                    }

                    if (src) {
                        image.src = src;
                    }
                } else {
                    onReady();
                }
            } else {
                // image already loaded...
                onReady();
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/images/preloadImages.js
        function preloadImages() {
            const swiper = this;
            swiper.imagesToLoad = swiper.$el.find('img');

            function onReady() {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
                if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) swiper.update();
                    swiper.emit('imagesReady');
                }
            }

            for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
                const imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/images/index.js


        /* harmony default export */
        const core_images = ({
            loadImage: loadImage,
            preloadImages: preloadImages
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/check-overflow/index.js
        function checkOverflow() {
            const swiper = this;
            const {
                isLocked: wasLocked,
                params
            } = swiper;
            const {
                slidesOffsetBefore
            } = params;

            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else {
                swiper.isLocked = swiper.snapGrid.length === 1;
            }

            if (params.allowSlideNext === true) {
                swiper.allowSlideNext = !swiper.isLocked;
            }

            if (params.allowSlidePrev === true) {
                swiper.allowSlidePrev = !swiper.isLocked;
            }

            if (wasLocked && wasLocked !== swiper.isLocked) {
                swiper.isEnd = false;
            }

            if (wasLocked !== swiper.isLocked) {
                swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
            }
        }

        /* harmony default export */
        const check_overflow = ({
            checkOverflow
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/defaults.js
        /* harmony default export */
        const defaults = ({
            init: true,
            direction: 'horizontal',
            touchEventsTarget: 'wrapper',
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            enabled: true,
            focusableElements: 'input, select, option, textarea, button, video, label',
            // Overrides
            width: null,
            height: null,
            //
            preventInteractionOnTransition: false,
            // ssr
            userAgent: null,
            url: null,
            // To support iOS's swipe-to-go-back gesture (when being used in-app).
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            // Autoheight
            autoHeight: false,
            // Set wrapper width
            setWrapperSize: false,
            // Virtual Translate
            virtualTranslate: false,
            // Effects
            effect: 'slide',
            // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
            // Breakpoints
            breakpoints: undefined,
            breakpointsBase: 'window',
            // Slides grid
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            // in px
            slidesOffsetAfter: 0,
            // in px
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            // Disable swiper and hide navigation when container not overflow
            watchOverflow: true,
            // Round length
            roundLengths: false,
            // Touches
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 0,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            // Unique Navigation Elements
            uniqueNavElements: true,
            // Resistance
            resistance: true,
            resistanceRatio: 0.85,
            // Progress
            watchSlidesProgress: false,
            // Cursor
            grabCursor: false,
            // Clicks
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            // Images
            preloadImages: true,
            updateOnImagesReady: true,
            // loop
            loop: false,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: false,
            loopPreventsSlide: true,
            // rewind
            rewind: false,
            // Swiping/no swiping
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            // '.swipe-handler',
            noSwiping: true,
            noSwipingClass: 'swiper-no-swiping',
            noSwipingSelector: null,
            // Passive Listeners
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            // NS
            containerModifierClass: 'swiper-',
            // NEW
            slideClass: 'swiper-slide',
            slideBlankClass: 'swiper-slide-invisible-blank',
            slideActiveClass: 'swiper-slide-active',
            slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
            slideVisibleClass: 'swiper-slide-visible',
            slideDuplicateClass: 'swiper-slide-duplicate',
            slideNextClass: 'swiper-slide-next',
            slideDuplicateNextClass: 'swiper-slide-duplicate-next',
            slidePrevClass: 'swiper-slide-prev',
            slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
            wrapperClass: 'swiper-wrapper',
            // Callbacks
            runCallbacksOnInit: true,
            // Internals
            _emitClasses: false
        });
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/moduleExtendParams.js

        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) {
                    obj = {};
                }

                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];

                if (typeof moduleParams !== 'object' || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }

                if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
                    params[moduleParamName] = {
                        auto: true
                    };
                }

                if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }

                if (params[moduleParamName] === true) {
                    params[moduleParamName] = {
                        enabled: true
                    };
                }

                if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                    params[moduleParamName].enabled = true;
                }

                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/core/core.js
        /* eslint no-param-reassign: "off" */


        const prototypes = {
            eventsEmitter: events_emitter,
            update: core_update,
            translate: translate,
            transition: core_transition,
            slide: slide,
            loop: loop,
            grabCursor: grab_cursor,
            events: core_events,
            breakpoints: breakpoints,
            checkOverflow: check_overflow,
            classes: classes,
            images: core_images
        };
        const extendedDefaults = {};

        class core_Swiper {
            constructor() {
                let el;
                let params;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }

                if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
                    params = args[0];
                } else {
                    [el, params] = args;
                }

                if (!params) params = {};
                params = utils_extend({}, params);
                if (el && !params.el) params.el = el;

                if (params.el && dom(params.el).length > 1) {
                    const swipers = [];
                    dom(params.el).each(containerEl => {
                        const newParams = utils_extend({}, params, {
                            el: containerEl
                        });
                        swipers.push(new core_Swiper(newParams));
                    });
                    return swipers;
                } // Swiper Instance


                const swiper = this;
                swiper.__swiper__ = true;
                swiper.support = getSupport();
                swiper.device = getDevice({
                    userAgent: params.userAgent
                });
                swiper.browser = getBrowser();
                swiper.eventsListeners = {};
                swiper.eventsAnyListeners = [];
                swiper.modules = [...swiper.__modules__];

                if (params.modules && Array.isArray(params.modules)) {
                    swiper.modules.push(...params.modules);
                }

                const allModulesParams = {};
                swiper.modules.forEach(mod => {
                    mod({
                        swiper,
                        extendParams: moduleExtendParams(params, allModulesParams),
                        on: swiper.on.bind(swiper),
                        once: swiper.once.bind(swiper),
                        off: swiper.off.bind(swiper),
                        emit: swiper.emit.bind(swiper)
                    });
                }); // Extend defaults with modules params

                const swiperParams = utils_extend({}, defaults, allModulesParams); // Extend defaults with passed params

                swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = utils_extend({}, swiper.params);
                swiper.passedParams = utils_extend({}, params); // add event listeners

                if (swiper.params && swiper.params.on) {
                    Object.keys(swiper.params.on).forEach(eventName => {
                        swiper.on(eventName, swiper.params.on[eventName]);
                    });
                }

                if (swiper.params && swiper.params.onAny) {
                    swiper.onAny(swiper.params.onAny);
                } // Save Dom lib


                swiper.$ = dom; // Extend Swiper

                Object.assign(swiper, {
                    enabled: swiper.params.enabled,
                    el,
                    // Classes
                    classNames: [],
                    // Slides
                    slides: dom(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],

                    // isDirection
                    isHorizontal() {
                        return swiper.params.direction === 'horizontal';
                    },

                    isVertical() {
                        return swiper.params.direction === 'vertical';
                    },

                    // Indexes
                    activeIndex: 0,
                    realIndex: 0,
                    //
                    isBeginning: true,
                    isEnd: false,
                    // Props
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    // Locks
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    // Touch Events
                    touchEvents: function touchEvents() {
                        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
                        const desktop = ['pointerdown', 'pointermove', 'pointerup'];
                        swiper.touchEventsTouch = {
                            start: touch[0],
                            move: touch[1],
                            end: touch[2],
                            cancel: touch[3]
                        };
                        swiper.touchEventsDesktop = {
                            start: desktop[0],
                            move: desktop[1],
                            end: desktop[2]
                        };
                        return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }(),
                    touchEventsData: {
                        isTouched: undefined,
                        isMoved: undefined,
                        allowTouchCallbacks: undefined,
                        touchStartTime: undefined,
                        isScrolling: undefined,
                        currentTranslate: undefined,
                        startTranslate: undefined,
                        allowThresholdMove: undefined,
                        // Form elements to match
                        focusableElements: swiper.params.focusableElements,
                        // Last click time
                        lastClickTime: now(),
                        clickTimeout: undefined,
                        // Velocities
                        velocities: [],
                        allowMomentumBounce: undefined,
                        isTouchEvent: undefined,
                        startMoving: undefined
                    },
                    // Clicks
                    allowClick: true,
                    // Touches
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    // Images
                    imagesToLoad: [],
                    imagesLoaded: 0
                });
                swiper.emit('_swiper'); // Init

                if (swiper.params.init) {
                    swiper.init();
                } // Return app instance


                return swiper;
            }

            enable() {
                const swiper = this;
                if (swiper.enabled) return;
                swiper.enabled = true;

                if (swiper.params.grabCursor) {
                    swiper.setGrabCursor();
                }

                swiper.emit('enable');
            }

            disable() {
                const swiper = this;
                if (!swiper.enabled) return;
                swiper.enabled = false;

                if (swiper.params.grabCursor) {
                    swiper.unsetGrabCursor();
                }

                swiper.emit('disable');
            }

            setProgress(progress, speed) {
                const swiper = this;
                progress = Math.min(Math.max(progress, 0), 1);
                const min = swiper.minTranslate();
                const max = swiper.maxTranslate();
                const current = (max - min) * progress + min;
                swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            emitContainerClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const cls = swiper.el.className.split(' ').filter(className => {
                    return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
                });
                swiper.emit('_containerClasses', cls.join(' '));
            }

            getSlideClasses(slideEl) {
                const swiper = this;
                return slideEl.className.split(' ').filter(className => {
                    return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
                }).join(' ');
            }

            emitSlidesClasses() {
                const swiper = this;
                if (!swiper.params._emitClasses || !swiper.el) return;
                const updates = [];
                swiper.slides.each(slideEl => {
                    const classNames = swiper.getSlideClasses(slideEl);
                    updates.push({
                        slideEl,
                        classNames
                    });
                    swiper.emit('_slideClass', slideEl, classNames);
                });
                swiper.emit('_slideClasses', updates);
            }

            slidesPerViewDynamic(view, exact) {
                if (view === void 0) {
                    view = 'current';
                }

                if (exact === void 0) {
                    exact = false;
                }

                const swiper = this;
                const {
                    params,
                    slides,
                    slidesGrid,
                    slidesSizesGrid,
                    size: swiperSize,
                    activeIndex
                } = swiper;
                let spv = 1;

                if (params.centeredSlides) {
                    let slideSize = slides[activeIndex].swiperSlideSize;
                    let breakLoop;

                    for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    }

                    for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) breakLoop = true;
                        }
                    }
                } else {
                    // eslint-disable-next-line
                    if (view === 'current') {
                        for (let i = activeIndex + 1; i < slides.length; i += 1) {
                            const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

                            if (slideInView) {
                                spv += 1;
                            }
                        }
                    } else {
                        // previous
                        for (let i = activeIndex - 1; i >= 0; i -= 1) {
                            const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

                            if (slideInView) {
                                spv += 1;
                            }
                        }
                    }
                }

                return spv;
            }

            update() {
                const swiper = this;
                if (!swiper || swiper.destroyed) return;
                const {
                    snapGrid,
                    params
                } = swiper; // Breakpoints

                if (params.breakpoints) {
                    swiper.setBreakpoint();
                }

                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();

                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }

                let translated;

                if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
                    setTranslate();

                    if (swiper.params.autoHeight) {
                        swiper.updateAutoHeight();
                    }
                } else {
                    if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                    } else {
                        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    }

                    if (!translated) {
                        setTranslate();
                    }
                }

                if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                    swiper.checkOverflow();
                }

                swiper.emit('update');
            }

            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) {
                    needUpdate = true;
                }

                const swiper = this;
                const currentDirection = swiper.params.direction;

                if (!newDirection) {
                    // eslint-disable-next-line
                    newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
                }

                if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                    return swiper;
                }

                swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.each(slideEl => {
                    if (newDirection === 'vertical') {
                        slideEl.style.width = '';
                    } else {
                        slideEl.style.height = '';
                    }
                });
                swiper.emit('changeDirection');
                if (needUpdate) swiper.update();
                return swiper;
            }

            mount(el) {
                const swiper = this;
                if (swiper.mounted) return true; // Find el

                const $el = dom(el || swiper.params.el);
                el = $el[0];

                if (!el) {
                    return false;
                }

                el.swiper = swiper;

                const getWrapperSelector = () => {
                    return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
                };

                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = dom(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

                        res.children = options => $el.children(options);

                        return res;
                    }

                    return $el.children(getWrapperSelector());
                }; // Find Wrapper


                let $wrapperEl = getWrapper();

                if ($wrapperEl.length === 0 && swiper.params.createElements) {
                    const document = getDocument();
                    const wrapper = document.createElement('div');
                    $wrapperEl = dom(wrapper);
                    wrapper.className = swiper.params.wrapperClass;
                    $el.append(wrapper);
                    $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
                        $wrapperEl.append(slideEl);
                    });
                }

                Object.assign(swiper, {
                    $el,
                    el,
                    $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    mounted: true,
                    // RTL
                    rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
                    rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                    wrongRTL: $wrapperEl.css('display') === '-webkit-box'
                });
                return true;
            }

            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit('beforeInit'); // Set breakpoint

                if (swiper.params.breakpoints) {
                    swiper.setBreakpoint();
                } // Add Classes


                swiper.addClasses(); // Create loop

                if (swiper.params.loop) {
                    swiper.loopCreate();
                } // Update size


                swiper.updateSize(); // Update slides

                swiper.updateSlides();

                if (swiper.params.watchOverflow) {
                    swiper.checkOverflow();
                } // Set Grab Cursor


                if (swiper.params.grabCursor && swiper.enabled) {
                    swiper.setGrabCursor();
                }

                if (swiper.params.preloadImages) {
                    swiper.preloadImages();
                } // Slide To Initial Slide


                if (swiper.params.loop) {
                    swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
                } else {
                    swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                } // Attach events


                swiper.attachEvents(); // Init Flag

                swiper.initialized = true; // Emit

                swiper.emit('init');
                swiper.emit('afterInit');
                return swiper;
            }

            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) {
                    deleteInstance = true;
                }

                if (cleanStyles === void 0) {
                    cleanStyles = true;
                }

                const swiper = this;
                const {
                    params,
                    $el,
                    $wrapperEl,
                    slides
                } = swiper;

                if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                    return null;
                }

                swiper.emit('beforeDestroy'); // Init Flag

                swiper.initialized = false; // Detach events

                swiper.detachEvents(); // Destroy loop

                if (params.loop) {
                    swiper.loopDestroy();
                } // Cleanup styles


                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr('style');
                    $wrapperEl.removeAttr('style');

                    if (slides && slides.length) {
                        slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
                    }
                }

                swiper.emit('destroy'); // Detach emitter events

                Object.keys(swiper.eventsListeners).forEach(eventName => {
                    swiper.off(eventName);
                });

                if (deleteInstance !== false) {
                    swiper.$el[0].swiper = null;
                    deleteProps(swiper);
                }

                swiper.destroyed = true;
                return null;
            }

            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }

            static get extendedDefaults() {
                return extendedDefaults;
            }

            static get defaults() {
                return defaults;
            }

            static installModule(mod) {
                if (!core_Swiper.prototype.__modules__) core_Swiper.prototype.__modules__ = [];
                const modules = core_Swiper.prototype.__modules__;

                if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
                    modules.push(mod);
                }
            }

            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach(m => core_Swiper.installModule(m));
                    return core_Swiper;
                }

                core_Swiper.installModule(module);
                return core_Swiper;
            }

        }

        Object.keys(prototypes).forEach(prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
                core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            });
        });
        core_Swiper.use([Resize, Observer]);
        /* harmony default export */
        const core = (core_Swiper);
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/virtual/virtual.js


        function Virtual(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            extendParams({
                virtual: {
                    enabled: false,
                    slides: [],
                    cache: true,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: true,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            });
            let cssModeTimeout;
            swiper.virtual = {
                cache: {},
                from: undefined,
                to: undefined,
                slides: [],
                offset: 0,
                slidesGrid: []
            };

            function renderSlide(slide, index) {
                const params = swiper.params.virtual;

                if (params.cache && swiper.virtual.cache[index]) {
                    return swiper.virtual.cache[index];
                }

                const $slideEl = params.renderSlide ? dom(params.renderSlide.call(swiper, slide, index)) : dom(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
                if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
                if (params.cache) swiper.virtual.cache[index] = $slideEl;
                return $slideEl;
            }

            function update(force) {
                const {
                    slidesPerView,
                    slidesPerGroup,
                    centeredSlides
                } = swiper.params;
                const {
                    addSlidesBefore,
                    addSlidesAfter
                } = swiper.params.virtual;
                const {
                    from: previousFrom,
                    to: previousTo,
                    slides,
                    slidesGrid: previousSlidesGrid,
                    offset: previousOffset
                } = swiper.virtual;

                if (!swiper.params.cssMode) {
                    swiper.updateActiveIndex();
                }

                const activeIndex = swiper.activeIndex || 0;
                let offsetProp;
                if (swiper.rtlTranslate) offsetProp = 'right'; else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
                let slidesAfter;
                let slidesBefore;

                if (centeredSlides) {
                    slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                    slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                } else {
                    slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                    slidesBefore = slidesPerGroup + addSlidesBefore;
                }

                const from = Math.max((activeIndex || 0) - slidesBefore, 0);
                const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
                const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
                Object.assign(swiper.virtual, {
                    from,
                    to,
                    offset,
                    slidesGrid: swiper.slidesGrid
                });

                function onRendered() {
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();

                    if (swiper.lazy && swiper.params.lazy.enabled) {
                        swiper.lazy.load();
                    }

                    emit('virtualUpdate');
                }

                if (previousFrom === from && previousTo === to && !force) {
                    if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                        swiper.slides.css(offsetProp, `${offset}px`);
                    }

                    swiper.updateProgress();
                    emit('virtualUpdate');
                    return;
                }

                if (swiper.params.virtual.renderExternal) {
                    swiper.params.virtual.renderExternal.call(swiper, {
                        offset,
                        from,
                        to,
                        slides: function getSlides() {
                            const slidesToRender = [];

                            for (let i = from; i <= to; i += 1) {
                                slidesToRender.push(slides[i]);
                            }

                            return slidesToRender;
                        }()
                    });

                    if (swiper.params.virtual.renderExternalUpdate) {
                        onRendered();
                    } else {
                        emit('virtualUpdate');
                    }

                    return;
                }

                const prependIndexes = [];
                const appendIndexes = [];

                if (force) {
                    swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
                } else {
                    for (let i = previousFrom; i <= previousTo; i += 1) {
                        if (i < from || i > to) {
                            swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
                        }
                    }
                }

                for (let i = 0; i < slides.length; i += 1) {
                    if (i >= from && i <= to) {
                        if (typeof previousTo === 'undefined' || force) {
                            appendIndexes.push(i);
                        } else {
                            if (i > previousTo) appendIndexes.push(i);
                            if (i < previousFrom) prependIndexes.push(i);
                        }
                    }
                }

                appendIndexes.forEach(index => {
                    swiper.$wrapperEl.append(renderSlide(slides[index], index));
                });
                prependIndexes.sort((a, b) => b - a).forEach(index => {
                    swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
                });
                swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
                onRendered();
            }

            function appendSlide(slides) {
                if (typeof slides === 'object' && 'length' in slides) {
                    for (let i = 0; i < slides.length; i += 1) {
                        if (slides[i]) swiper.virtual.slides.push(slides[i]);
                    }
                } else {
                    swiper.virtual.slides.push(slides);
                }

                update(true);
            }

            function prependSlide(slides) {
                const activeIndex = swiper.activeIndex;
                let newActiveIndex = activeIndex + 1;
                let numberOfNewSlides = 1;

                if (Array.isArray(slides)) {
                    for (let i = 0; i < slides.length; i += 1) {
                        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                    }

                    newActiveIndex = activeIndex + slides.length;
                    numberOfNewSlides = slides.length;
                } else {
                    swiper.virtual.slides.unshift(slides);
                }

                if (swiper.params.virtual.cache) {
                    const cache = swiper.virtual.cache;
                    const newCache = {};
                    Object.keys(cache).forEach(cachedIndex => {
                        const $cachedEl = cache[cachedIndex];
                        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

                        if (cachedElIndex) {
                            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                        }

                        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
                    });
                    swiper.virtual.cache = newCache;
                }

                update(true);
                swiper.slideTo(newActiveIndex, 0);
            }

            function removeSlide(slidesIndexes) {
                if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
                let activeIndex = swiper.activeIndex;

                if (Array.isArray(slidesIndexes)) {
                    for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                        swiper.virtual.slides.splice(slidesIndexes[i], 1);

                        if (swiper.params.virtual.cache) {
                            delete swiper.virtual.cache[slidesIndexes[i]];
                        }

                        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                        activeIndex = Math.max(activeIndex, 0);
                    }
                } else {
                    swiper.virtual.slides.splice(slidesIndexes, 1);

                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes];
                    }

                    if (slidesIndexes < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }

                update(true);
                swiper.slideTo(activeIndex, 0);
            }

            function removeAllSlides() {
                swiper.virtual.slides = [];

                if (swiper.params.virtual.cache) {
                    swiper.virtual.cache = {};
                }

                update(true);
                swiper.slideTo(0, 0);
            }

            on('beforeInit', () => {
                if (!swiper.params.virtual.enabled) return;
                swiper.virtual.slides = swiper.params.virtual.slides;
                swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;

                if (!swiper.params.initialSlide) {
                    update();
                }
            });
            on('setTranslate', () => {
                if (!swiper.params.virtual.enabled) return;

                if (swiper.params.cssMode && !swiper._immediateVirtual) {
                    clearTimeout(cssModeTimeout);
                    cssModeTimeout = setTimeout(() => {
                        update();
                    }, 100);
                } else {
                    update();
                }
            });
            on('init update resize', () => {
                if (!swiper.params.virtual.enabled) return;

                if (swiper.params.cssMode) {
                    setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
                }
            });
            Object.assign(swiper.virtual, {
                appendSlide,
                prependSlide,
                removeSlide,
                removeAllSlides,
                update
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/keyboard/keyboard.js
        /* eslint-disable consistent-return */


        function Keyboard(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            const document = getDocument();
            const window = ssr_window_esm_getWindow();
            swiper.keyboard = {
                enabled: false
            };
            extendParams({
                keyboard: {
                    enabled: false,
                    onlyInViewport: true,
                    pageUpDown: true
                }
            });

            function handle(event) {
                if (!swiper.enabled) return;
                const {
                    rtlTranslate: rtl
                } = swiper;
                let e = event;
                if (e.originalEvent) e = e.originalEvent; // jquery fix

                const kc = e.keyCode || e.charCode;
                const pageUpDown = swiper.params.keyboard.pageUpDown;
                const isPageUp = pageUpDown && kc === 33;
                const isPageDown = pageUpDown && kc === 34;
                const isArrowLeft = kc === 37;
                const isArrowRight = kc === 39;
                const isArrowUp = kc === 38;
                const isArrowDown = kc === 40; // Directions locks

                if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                    return false;
                }

                if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                    return false;
                }

                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                    return undefined;
                }

                if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
                    return undefined;
                }

                if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                    let inView = false; // Check that swiper should be inside of visible area of window

                    if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
                        return undefined;
                    }

                    const $el = swiper.$el;
                    const swiperWidth = $el[0].clientWidth;
                    const swiperHeight = $el[0].clientHeight;
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;
                    const swiperOffset = swiper.$el.offset();
                    if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                    const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

                    for (let i = 0; i < swiperCoord.length; i += 1) {
                        const point = swiperCoord[i];

                        if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                            inView = true;
                        }
                    }

                    if (!inView) return undefined;
                }

                if (swiper.isHorizontal()) {
                    if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                        if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    }

                    if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                    if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
                } else {
                    if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                        if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                    }

                    if (isPageDown || isArrowDown) swiper.slideNext();
                    if (isPageUp || isArrowUp) swiper.slidePrev();
                }

                emit('keyPress', kc);
                return undefined;
            }

            function enable() {
                if (swiper.keyboard.enabled) return;
                dom(document).on('keydown', handle);
                swiper.keyboard.enabled = true;
            }

            function disable() {
                if (!swiper.keyboard.enabled) return;
                dom(document).off('keydown', handle);
                swiper.keyboard.enabled = false;
            }

            on('init', () => {
                if (swiper.params.keyboard.enabled) {
                    enable();
                }
            });
            on('destroy', () => {
                if (swiper.keyboard.enabled) {
                    disable();
                }
            });
            Object.assign(swiper.keyboard, {
                enable,
                disable
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/mousewheel/mousewheel.js
        /* eslint-disable consistent-return */


        function Mousewheel(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            const window = ssr_window_esm_getWindow();
            extendParams({
                mousewheel: {
                    enabled: false,
                    releaseOnEdges: false,
                    invert: false,
                    forceToAxis: false,
                    sensitivity: 1,
                    eventsTarget: 'container',
                    thresholdDelta: null,
                    thresholdTime: null
                }
            });
            swiper.mousewheel = {
                enabled: false
            };
            let timeout;
            let lastScrollTime = now();
            let lastEventBeforeSnap;
            const recentWheelEvents = [];

            function normalize(e) {
                // Reasonable defaults
                const PIXEL_STEP = 10;
                const LINE_HEIGHT = 40;
                const PAGE_HEIGHT = 800;
                let sX = 0;
                let sY = 0; // spinX, spinY

                let pX = 0;
                let pY = 0; // pixelX, pixelY
                // Legacy

                if ('detail' in e) {
                    sY = e.detail;
                }

                if ('wheelDelta' in e) {
                    sY = -e.wheelDelta / 120;
                }

                if ('wheelDeltaY' in e) {
                    sY = -e.wheelDeltaY / 120;
                }

                if ('wheelDeltaX' in e) {
                    sX = -e.wheelDeltaX / 120;
                } // side scrolling on FF with DOMMouseScroll


                if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                    sX = sY;
                    sY = 0;
                }

                pX = sX * PIXEL_STEP;
                pY = sY * PIXEL_STEP;

                if ('deltaY' in e) {
                    pY = e.deltaY;
                }

                if ('deltaX' in e) {
                    pX = e.deltaX;
                }

                if (e.shiftKey && !pX) {
                    // if user scrolls with shift he wants horizontal scroll
                    pX = pY;
                    pY = 0;
                }

                if ((pX || pY) && e.deltaMode) {
                    if (e.deltaMode === 1) {
                        // delta in LINE units
                        pX *= LINE_HEIGHT;
                        pY *= LINE_HEIGHT;
                    } else {
                        // delta in PAGE units
                        pX *= PAGE_HEIGHT;
                        pY *= PAGE_HEIGHT;
                    }
                } // Fall-back if spin cannot be determined


                if (pX && !sX) {
                    sX = pX < 1 ? -1 : 1;
                }

                if (pY && !sY) {
                    sY = pY < 1 ? -1 : 1;
                }

                return {
                    spinX: sX,
                    spinY: sY,
                    pixelX: pX,
                    pixelY: pY
                };
            }

            function handleMouseEnter() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = true;
            }

            function handleMouseLeave() {
                if (!swiper.enabled) return;
                swiper.mouseEntered = false;
            }

            function animateSlider(newEvent) {
                if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
                    // Prevent if delta of wheel scroll delta is below configured threshold
                    return false;
                }

                if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
                    // Prevent if time between scrolls is below configured threshold
                    return false;
                } // If the movement is NOT big enough and
                // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
                //   Don't go any further (avoid insignificant scroll movement).


                if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
                    // Return false as a default
                    return true;
                } // If user is scrolling towards the end:
                //   If the slider hasn't hit the latest slide or
                //   if the slider is a loop and
                //   if the slider isn't moving right now:
                //     Go to next slide and
                //     emit a scroll event.
                // Else (the user is scrolling towards the beginning) and
                // if the slider hasn't hit the first slide or
                // if the slider is a loop and
                // if the slider isn't moving right now:
                //   Go to prev slide and
                //   emit a scroll event.


                if (newEvent.direction < 0) {
                    if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                        swiper.slideNext();
                        emit('scroll', newEvent.raw);
                    }
                } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                    swiper.slidePrev();
                    emit('scroll', newEvent.raw);
                } // If you got here is because an animation has been triggered so store the current time


                lastScrollTime = new window.Date().getTime(); // Return false as a default

                return false;
            }

            function releaseScroll(newEvent) {
                const params = swiper.params.mousewheel;

                if (newEvent.direction < 0) {
                    if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                        // Return true to animate scroll on edges
                        return true;
                    }
                } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }

                return false;
            }

            function handle(event) {
                let e = event;
                let disableParentSwiper = true;
                if (!swiper.enabled) return;
                const params = swiper.params.mousewheel;

                if (swiper.params.cssMode) {
                    e.preventDefault();
                }

                let target = swiper.$el;

                if (swiper.params.mousewheel.eventsTarget !== 'container') {
                    target = dom(swiper.params.mousewheel.eventsTarget);
                }

                if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
                if (e.originalEvent) e = e.originalEvent; // jquery fix

                let delta = 0;
                const rtlFactor = swiper.rtlTranslate ? -1 : 1;
                const data = normalize(e);

                if (params.forceToAxis) {
                    if (swiper.isHorizontal()) {
                        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor; else return true;
                    } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY; else return true;
                } else {
                    delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
                }

                if (delta === 0) return true;
                if (params.invert) delta = -delta; // Get the scroll positions

                let positions = swiper.getTranslate() + delta * params.sensitivity;
                if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
                if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
                //     the disableParentSwiper will be true.
                // When loop is false:
                //     if the scroll positions is not on edge,
                //     then the disableParentSwiper will be true.
                //     if the scroll on edge positions,
                //     then the disableParentSwiper will be false.

                disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
                if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

                if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                    // Register the new event in a variable which stores the relevant data
                    const newEvent = {
                        time: now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta),
                        raw: event
                    }; // Keep the most recent events

                    if (recentWheelEvents.length >= 2) {
                        recentWheelEvents.shift(); // only store the last N events
                    }

                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
                    //   If direction has changed or
                    //   if the scroll is quicker than the previous one:
                    //     Animate the slider.
                    // Else (this is the first time the wheel is moved):
                    //     Animate the slider.

                    if (prevEvent) {
                        if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                            animateSlider(newEvent);
                        }
                    } else {
                        animateSlider(newEvent);
                    } // If it's time to release the scroll:
                    //   Return now so you don't hit the preventDefault.


                    if (releaseScroll(newEvent)) {
                        return true;
                    }
                } else {
                    // Freemode or scrollContainer:
                    // If we recently snapped after a momentum scroll, then ignore wheel events
                    // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                    // or if it's a new scroll (larger delta or inverse sign as last event before
                    // an end-of-momentum snap).
                    const newEvent = {
                        time: now(),
                        delta: Math.abs(delta),
                        direction: Math.sign(delta)
                    };
                    const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

                    if (!ignoreWheelEvents) {
                        lastEventBeforeSnap = undefined;

                        if (swiper.params.loop) {
                            swiper.loopFix();
                        }

                        let position = swiper.getTranslate() + delta * params.sensitivity;
                        const wasBeginning = swiper.isBeginning;
                        const wasEnd = swiper.isEnd;
                        if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                        if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                        swiper.setTransition(0);
                        swiper.setTranslate(position);
                        swiper.updateProgress();
                        swiper.updateActiveIndex();
                        swiper.updateSlidesClasses();

                        if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                            swiper.updateSlidesClasses();
                        }

                        if (swiper.params.freeMode.sticky) {
                            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                            // the end of a momentum scroll by storing recent (N=15?) wheel events.
                            // 1. do all N events have decreasing or same (absolute value) delta?
                            // 2. did all N events arrive in the last M (M=500?) msecs?
                            // 3. does the earliest event have an (absolute value) delta that's
                            //    at least P (P=1?) larger than the most recent event's delta?
                            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                            // Snap immediately and ignore remaining wheel events in this scroll.
                            // See comment above for "remaining wheel events in this scroll" determination.
                            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                            clearTimeout(timeout);
                            timeout = undefined;

                            if (recentWheelEvents.length >= 15) {
                                recentWheelEvents.shift(); // only store the last N events
                            }

                            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                            const firstEvent = recentWheelEvents[0];
                            recentWheelEvents.push(newEvent);

                            if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                                recentWheelEvents.splice(0);
                            } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                                // We're at the end of the deceleration of a momentum scroll, so there's no need
                                // to wait for more events. Snap ASAP on the next tick.
                                // Also, because there's some remaining momentum we'll bias the snap in the
                                // direction of the ongoing scroll because it's better UX for the scroll to snap
                                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                                // if it's already scrolled more than 20% in the current direction, keep going.
                                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                timeout = nextTick(() => {
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 0); // no delay; move on next tick
                            }

                            if (!timeout) {
                                // if we get here, then we haven't detected the end of a momentum scroll, so
                                // we'll consider a scroll "complete" when there haven't been any wheel events
                                // for 500ms.
                                timeout = nextTick(() => {
                                    const snapToThreshold = 0.5;
                                    lastEventBeforeSnap = newEvent;
                                    recentWheelEvents.splice(0);
                                    swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                                }, 500);
                            }
                        } // Emit event


                        if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

                        if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

                        if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
                    }
                }

                if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                return false;
            }

            function events(method) {
                let target = swiper.$el;

                if (swiper.params.mousewheel.eventsTarget !== 'container') {
                    target = dom(swiper.params.mousewheel.eventsTarget);
                }

                target[method]('mouseenter', handleMouseEnter);
                target[method]('mouseleave', handleMouseLeave);
                target[method]('wheel', handle);
            }

            function enable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.removeEventListener('wheel', handle);
                    return true;
                }

                if (swiper.mousewheel.enabled) return false;
                events('on');
                swiper.mousewheel.enabled = true;
                return true;
            }

            function disable() {
                if (swiper.params.cssMode) {
                    swiper.wrapperEl.addEventListener(event, handle);
                    return true;
                }

                if (!swiper.mousewheel.enabled) return false;
                events('off');
                swiper.mousewheel.enabled = false;
                return true;
            }

            on('init', () => {
                if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                    disable();
                }

                if (swiper.params.mousewheel.enabled) enable();
            });
            on('destroy', () => {
                if (swiper.params.cssMode) {
                    enable();
                }

                if (swiper.mousewheel.enabled) disable();
            });
            Object.assign(swiper.mousewheel, {
                enable,
                disable
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/create-element-if-not-defined.js

        function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
            const document = getDocument();

            if (swiper.params.createElements) {
                Object.keys(checkProps).forEach(key => {
                    if (!params[key] && params.auto === true) {
                        let element = swiper.$el.children(`.${checkProps[key]}`)[0];

                        if (!element) {
                            element = document.createElement('div');
                            element.className = checkProps[key];
                            swiper.$el.append(element);
                        }

                        params[key] = element;
                        originalParams[key] = element;
                    }
                });
            }

            return params;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/navigation/navigation.js


        function Navigation(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            extendParams({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: false,
                    disabledClass: 'swiper-button-disabled',
                    hiddenClass: 'swiper-button-hidden',
                    lockClass: 'swiper-button-lock'
                }
            });
            swiper.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            };

            function getEl(el) {
                let $el;

                if (el) {
                    $el = dom(el);

                    if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
                        $el = swiper.$el.find(el);
                    }
                }

                return $el;
            }

            function toggleEl($el, disabled) {
                const params = swiper.params.navigation;

                if ($el && $el.length > 0) {
                    $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
                    if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

                    if (swiper.params.watchOverflow && swiper.enabled) {
                        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                    }
                }
            }

            function update() {
                // Update Navigation Buttons
                if (swiper.params.loop) return;
                const {
                    $nextEl,
                    $prevEl
                } = swiper.navigation;
                toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
                toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
            }

            function onPrevClick(e) {
                e.preventDefault();
                if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slidePrev();
            }

            function onNextClick(e) {
                e.preventDefault();
                if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
                swiper.slideNext();
            }

            function init() {
                const params = swiper.params.navigation;
                swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                    nextEl: 'swiper-button-next',
                    prevEl: 'swiper-button-prev'
                });
                if (!(params.nextEl || params.prevEl)) return;
                const $nextEl = getEl(params.nextEl);
                const $prevEl = getEl(params.prevEl);

                if ($nextEl && $nextEl.length > 0) {
                    $nextEl.on('click', onNextClick);
                }

                if ($prevEl && $prevEl.length > 0) {
                    $prevEl.on('click', onPrevClick);
                }

                Object.assign(swiper.navigation, {
                    $nextEl,
                    nextEl: $nextEl && $nextEl[0],
                    $prevEl,
                    prevEl: $prevEl && $prevEl[0]
                });

                if (!swiper.enabled) {
                    if ($nextEl) $nextEl.addClass(params.lockClass);
                    if ($prevEl) $prevEl.addClass(params.lockClass);
                }
            }

            function destroy() {
                const {
                    $nextEl,
                    $prevEl
                } = swiper.navigation;

                if ($nextEl && $nextEl.length) {
                    $nextEl.off('click', onNextClick);
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }

                if ($prevEl && $prevEl.length) {
                    $prevEl.off('click', onPrevClick);
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            }

            on('init', () => {
                init();
                update();
            });
            on('toEdge fromEdge lock unlock', () => {
                update();
            });
            on('destroy', () => {
                destroy();
            });
            on('enable disable', () => {
                const {
                    $nextEl,
                    $prevEl
                } = swiper.navigation;

                if ($nextEl) {
                    $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
                }

                if ($prevEl) {
                    $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
                }
            });
            on('click', (_s, e) => {
                const {
                    $nextEl,
                    $prevEl
                } = swiper.navigation;
                const targetEl = e.target;

                if (swiper.params.navigation.hideOnClick && !dom(targetEl).is($prevEl) && !dom(targetEl).is($nextEl)) {
                    if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                    let isHidden;

                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }

                    if (isHidden === true) {
                        emit('navigationShow');
                    } else {
                        emit('navigationHide');
                    }

                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }

                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            });
            Object.assign(swiper.navigation, {
                update,
                init,
                destroy
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/classes-to-selector.js
        function classesToSelector(classes) {
            if (classes === void 0) {
                classes = '';
            }

            return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
                .replace(/ /g, '.')}`;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/pagination/pagination.js


        function Pagination(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            const pfx = 'swiper-pagination';
            extendParams({
                pagination: {
                    el: null,
                    bulletElement: 'span',
                    clickable: false,
                    hideOnClick: false,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: false,
                    type: 'bullets',
                    // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                    dynamicBullets: false,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: number => number,
                    formatFractionTotal: number => number,
                    bulletClass: `${pfx}-bullet`,
                    bulletActiveClass: `${pfx}-bullet-active`,
                    modifierClass: `${pfx}-`,
                    currentClass: `${pfx}-current`,
                    totalClass: `${pfx}-total`,
                    hiddenClass: `${pfx}-hidden`,
                    progressbarFillClass: `${pfx}-progressbar-fill`,
                    progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                    clickableClass: `${pfx}-clickable`,
                    lockClass: `${pfx}-lock`,
                    horizontalClass: `${pfx}-horizontal`,
                    verticalClass: `${pfx}-vertical`
                }
            });
            swiper.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let bulletSize;
            let dynamicBulletIndex = 0;

            function isPaginationDisabled() {
                return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
            }

            function setSideBullets($bulletEl, position) {
                const {
                    bulletActiveClass
                } = swiper.params.pagination;
                $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
            }

            function update() {
                // Render || Update Pagination bullets/items
                const rtl = swiper.rtl;
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el; // Current/Total

                let current;
                const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

                    if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
                        current -= slidesLength - swiper.loopedSlides * 2;
                    }

                    if (current > total - 1) current -= total;
                    if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
                } else if (typeof swiper.snapIndex !== 'undefined') {
                    current = swiper.snapIndex;
                } else {
                    current = swiper.activeIndex || 0;
                } // Types


                if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    const bullets = swiper.pagination.bullets;
                    let firstIndex;
                    let lastIndex;
                    let midIndex;

                    if (params.dynamicBullets) {
                        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

                        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                            dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

                            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                                dynamicBulletIndex = params.dynamicMainBullets - 1;
                            } else if (dynamicBulletIndex < 0) {
                                dynamicBulletIndex = 0;
                            }
                        }

                        firstIndex = Math.max(current - dynamicBulletIndex, 0);
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }

                    bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

                    if ($el.length > 1) {
                        bullets.each(bullet => {
                            const $bullet = dom(bullet);
                            const bulletIndex = $bullet.index();

                            if (bulletIndex === current) {
                                $bullet.addClass(params.bulletActiveClass);
                            }

                            if (params.dynamicBullets) {
                                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                    $bullet.addClass(`${params.bulletActiveClass}-main`);
                                }

                                if (bulletIndex === firstIndex) {
                                    setSideBullets($bullet, 'prev');
                                }

                                if (bulletIndex === lastIndex) {
                                    setSideBullets($bullet, 'next');
                                }
                            }
                        });
                    } else {
                        const $bullet = bullets.eq(current);
                        const bulletIndex = $bullet.index();
                        $bullet.addClass(params.bulletActiveClass);

                        if (params.dynamicBullets) {
                            const $firstDisplayedBullet = bullets.eq(firstIndex);
                            const $lastDisplayedBullet = bullets.eq(lastIndex);

                            for (let i = firstIndex; i <= lastIndex; i += 1) {
                                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                            }

                            if (swiper.params.loop) {
                                if (bulletIndex >= bullets.length) {
                                    for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                                        bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                                    }

                                    bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                                } else {
                                    setSideBullets($firstDisplayedBullet, 'prev');
                                    setSideBullets($lastDisplayedBullet, 'next');
                                }
                            } else {
                                setSideBullets($firstDisplayedBullet, 'prev');
                                setSideBullets($lastDisplayedBullet, 'next');
                            }
                        }
                    }

                    if (params.dynamicBullets) {
                        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                        const offsetProp = rtl ? 'right' : 'left';
                        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
                    }
                }

                if (params.type === 'fraction') {
                    $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
                    $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
                }

                if (params.type === 'progressbar') {
                    let progressbarDirection;

                    if (params.progressbarOpposite) {
                        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                    } else {
                        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                    }

                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;

                    if (progressbarDirection === 'horizontal') {
                        scaleX = scale;
                    } else {
                        scaleY = scale;
                    }

                    $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
                }

                if (params.type === 'custom' && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    emit('paginationRender', $el[0]);
                } else {
                    emit('paginationUpdate', $el[0]);
                }

                if (swiper.params.watchOverflow && swiper.enabled) {
                    $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                }
            }

            function render() {
                // Render Container
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                const $el = swiper.pagination.$el;
                let paginationHTML = '';

                if (params.type === 'bullets') {
                    let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

                    if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
                        numberOfBullets = slidesLength;
                    }

                    for (let i = 0; i < numberOfBullets; i += 1) {
                        if (params.renderBullet) {
                            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                        } else {
                            paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
                        }
                    }

                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
                }

                if (params.type === 'fraction') {
                    if (params.renderFraction) {
                        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                    } else {
                        paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
                    }

                    $el.html(paginationHTML);
                }

                if (params.type === 'progressbar') {
                    if (params.renderProgressbar) {
                        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                    } else {
                        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                    }

                    $el.html(paginationHTML);
                }

                if (params.type !== 'custom') {
                    emit('paginationRender', swiper.pagination.$el[0]);
                }
            }

            function init() {
                swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                    el: 'swiper-pagination'
                });
                const params = swiper.params.pagination;
                if (!params.el) return;
                let $el = dom(params.el);
                if ($el.length === 0) return;

                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
                    $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

                    if ($el.length > 1) {
                        $el = $el.filter(el => {
                            if (dom(el).parents('.swiper')[0] !== swiper.el) return false;
                            return true;
                        });
                    }
                }

                if (params.type === 'bullets' && params.clickable) {
                    $el.addClass(params.clickableClass);
                }

                $el.addClass(params.modifierClass + params.type);
                $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

                if (params.type === 'bullets' && params.dynamicBullets) {
                    $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;

                    if (params.dynamicMainBullets < 1) {
                        params.dynamicMainBullets = 1;
                    }
                }

                if (params.type === 'progressbar' && params.progressbarOpposite) {
                    $el.addClass(params.progressbarOppositeClass);
                }

                if (params.clickable) {
                    $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
                        e.preventDefault();
                        let index = dom(this).index() * swiper.params.slidesPerGroup;
                        if (swiper.params.loop) index += swiper.loopedSlides;
                        swiper.slideTo(index);
                    });
                }

                Object.assign(swiper.pagination, {
                    $el,
                    el: $el[0]
                });

                if (!swiper.enabled) {
                    $el.addClass(params.lockClass);
                }
            }

            function destroy() {
                const params = swiper.params.pagination;
                if (isPaginationDisabled()) return;
                const $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

                if (params.clickable) {
                    $el.off('click', classesToSelector(params.bulletClass));
                }
            }

            on('init', () => {
                init();
                render();
                update();
            });
            on('activeIndexChange', () => {
                if (swiper.params.loop) {
                    update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    update();
                }
            });
            on('snapIndexChange', () => {
                if (!swiper.params.loop) {
                    update();
                }
            });
            on('slidesLengthChange', () => {
                if (swiper.params.loop) {
                    render();
                    update();
                }
            });
            on('snapGridLengthChange', () => {
                if (!swiper.params.loop) {
                    render();
                    update();
                }
            });
            on('destroy', () => {
                destroy();
            });
            on('enable disable', () => {
                const {
                    $el
                } = swiper.pagination;

                if ($el) {
                    $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
                }
            });
            on('lock unlock', () => {
                update();
            });
            on('click', (_s, e) => {
                const targetEl = e.target;
                const {
                    $el
                } = swiper.pagination;

                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !dom(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
                    if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                    const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

                    if (isHidden === true) {
                        emit('paginationShow');
                    } else {
                        emit('paginationHide');
                    }

                    $el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            });
            Object.assign(swiper.pagination, {
                render,
                update,
                init,
                destroy
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/scrollbar/scrollbar.js


        function Scrollbar(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            const document = getDocument();
            let isTouched = false;
            let timeout = null;
            let dragTimeout = null;
            let dragStartPos;
            let dragSize;
            let trackSize;
            let divider;
            extendParams({
                scrollbar: {
                    el: null,
                    dragSize: 'auto',
                    hide: false,
                    draggable: false,
                    snapOnRelease: true,
                    lockClass: 'swiper-scrollbar-lock',
                    dragClass: 'swiper-scrollbar-drag'
                }
            });
            swiper.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            };

            function setTranslate() {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                const {
                    scrollbar,
                    rtlTranslate: rtl,
                    progress
                } = swiper;
                const {
                    $dragEl,
                    $el
                } = scrollbar;
                const params = swiper.params.scrollbar;
                let newSize = dragSize;
                let newPos = (trackSize - dragSize) * progress;

                if (rtl) {
                    newPos = -newPos;

                    if (newPos > 0) {
                        newSize = dragSize - newPos;
                        newPos = 0;
                    } else if (-newPos + dragSize > trackSize) {
                        newSize = trackSize + newPos;
                    }
                } else if (newPos < 0) {
                    newSize = dragSize + newPos;
                    newPos = 0;
                } else if (newPos + dragSize > trackSize) {
                    newSize = trackSize - newPos;
                }

                if (swiper.isHorizontal()) {
                    $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
                    $dragEl[0].style.width = `${newSize}px`;
                } else {
                    $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
                    $dragEl[0].style.height = `${newSize}px`;
                }

                if (params.hide) {
                    clearTimeout(timeout);
                    $el[0].style.opacity = 1;
                    timeout = setTimeout(() => {
                        $el[0].style.opacity = 0;
                        $el.transition(400);
                    }, 1000);
                }
            }

            function setTransition(duration) {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                swiper.scrollbar.$dragEl.transition(duration);
            }

            function updateSize() {
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
                const {
                    scrollbar
                } = swiper;
                const {
                    $dragEl,
                    $el
                } = scrollbar;
                $dragEl[0].style.width = '';
                $dragEl[0].style.height = '';
                trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
                divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

                if (swiper.params.scrollbar.dragSize === 'auto') {
                    dragSize = trackSize * divider;
                } else {
                    dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
                }

                if (swiper.isHorizontal()) {
                    $dragEl[0].style.width = `${dragSize}px`;
                } else {
                    $dragEl[0].style.height = `${dragSize}px`;
                }

                if (divider >= 1) {
                    $el[0].style.display = 'none';
                } else {
                    $el[0].style.display = '';
                }

                if (swiper.params.scrollbar.hide) {
                    $el[0].style.opacity = 0;
                }

                if (swiper.params.watchOverflow && swiper.enabled) {
                    scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
                }
            }

            function getPointerPosition(e) {
                if (swiper.isHorizontal()) {
                    return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
                }

                return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
            }

            function setDragPosition(e) {
                const {
                    scrollbar,
                    rtlTranslate: rtl
                } = swiper;
                const {
                    $el
                } = scrollbar;
                let positionRatio;
                positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
                positionRatio = Math.max(Math.min(positionRatio, 1), 0);

                if (rtl) {
                    positionRatio = 1 - positionRatio;
                }

                const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
                swiper.updateProgress(position);
                swiper.setTranslate(position);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }

            function onDragStart(e) {
                const params = swiper.params.scrollbar;
                const {
                    scrollbar,
                    $wrapperEl
                } = swiper;
                const {
                    $el,
                    $dragEl
                } = scrollbar;
                isTouched = true;
                dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
                e.preventDefault();
                e.stopPropagation();
                $wrapperEl.transition(100);
                $dragEl.transition(100);
                setDragPosition(e);
                clearTimeout(dragTimeout);
                $el.transition(0);

                if (params.hide) {
                    $el.css('opacity', 1);
                }

                if (swiper.params.cssMode) {
                    swiper.$wrapperEl.css('scroll-snap-type', 'none');
                }

                emit('scrollbarDragStart', e);
            }

            function onDragMove(e) {
                const {
                    scrollbar,
                    $wrapperEl
                } = swiper;
                const {
                    $el,
                    $dragEl
                } = scrollbar;
                if (!isTouched) return;
                if (e.preventDefault) e.preventDefault(); else e.returnValue = false;
                setDragPosition(e);
                $wrapperEl.transition(0);
                $el.transition(0);
                $dragEl.transition(0);
                emit('scrollbarDragMove', e);
            }

            function onDragEnd(e) {
                const params = swiper.params.scrollbar;
                const {
                    scrollbar,
                    $wrapperEl
                } = swiper;
                const {
                    $el
                } = scrollbar;
                if (!isTouched) return;
                isTouched = false;

                if (swiper.params.cssMode) {
                    swiper.$wrapperEl.css('scroll-snap-type', '');
                    $wrapperEl.transition('');
                }

                if (params.hide) {
                    clearTimeout(dragTimeout);
                    dragTimeout = nextTick(() => {
                        $el.css('opacity', 0);
                        $el.transition(400);
                    }, 1000);
                }

                emit('scrollbarDragEnd', e);

                if (params.snapOnRelease) {
                    swiper.slideToClosest();
                }
            }

            function events(method) {
                const {
                    scrollbar,
                    touchEventsTouch,
                    touchEventsDesktop,
                    params,
                    support
                } = swiper;
                const $el = scrollbar.$el;
                const target = $el[0];
                const activeListener = support.passiveListener && params.passiveListeners ? {
                    passive: false,
                    capture: false
                } : false;
                const passiveListener = support.passiveListener && params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                if (!target) return;
                const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

                if (!support.touch) {
                    target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
                    document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
                    document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
                } else {
                    target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
                    target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
                    target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
                }
            }

            function enableDraggable() {
                if (!swiper.params.scrollbar.el) return;
                events('on');
            }

            function disableDraggable() {
                if (!swiper.params.scrollbar.el) return;
                events('off');
            }

            function init() {
                const {
                    scrollbar,
                    $el: $swiperEl
                } = swiper;
                swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                    el: 'swiper-scrollbar'
                });
                const params = swiper.params.scrollbar;
                if (!params.el) return;
                let $el = dom(params.el);

                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                    $el = $swiperEl.find(params.el);
                }

                let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

                if ($dragEl.length === 0) {
                    $dragEl = dom(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
                    $el.append($dragEl);
                }

                Object.assign(scrollbar, {
                    $el,
                    el: $el[0],
                    $dragEl,
                    dragEl: $dragEl[0]
                });

                if (params.draggable) {
                    enableDraggable();
                }

                if ($el) {
                    $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
                }
            }

            function destroy() {
                disableDraggable();
            }

            on('init', () => {
                init();
                updateSize();
                setTranslate();
            });
            on('update resize observerUpdate lock unlock', () => {
                updateSize();
            });
            on('setTranslate', () => {
                setTranslate();
            });
            on('setTransition', (_s, duration) => {
                setTransition(duration);
            });
            on('enable disable', () => {
                const {
                    $el
                } = swiper.scrollbar;

                if ($el) {
                    $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
                }
            });
            on('destroy', () => {
                destroy();
            });
            Object.assign(swiper.scrollbar, {
                updateSize,
                setTranslate,
                init,
                destroy
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/parallax/parallax.js

        function Parallax(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                parallax: {
                    enabled: false
                }
            });

            const setTransform = (el, progress) => {
                const {
                    rtl
                } = swiper;
                const $el = dom(el);
                const rtlFactor = rtl ? -1 : 1;
                const p = $el.attr('data-swiper-parallax') || '0';
                let x = $el.attr('data-swiper-parallax-x');
                let y = $el.attr('data-swiper-parallax-y');
                const scale = $el.attr('data-swiper-parallax-scale');
                const opacity = $el.attr('data-swiper-parallax-opacity');

                if (x || y) {
                    x = x || '0';
                    y = y || '0';
                } else if (swiper.isHorizontal()) {
                    x = p;
                    y = '0';
                } else {
                    y = p;
                    x = '0';
                }

                if (x.indexOf('%') >= 0) {
                    x = `${parseInt(x, 10) * progress * rtlFactor}%`;
                } else {
                    x = `${x * progress * rtlFactor}px`;
                }

                if (y.indexOf('%') >= 0) {
                    y = `${parseInt(y, 10) * progress}%`;
                } else {
                    y = `${y * progress}px`;
                }

                if (typeof opacity !== 'undefined' && opacity !== null) {
                    const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                    $el[0].style.opacity = currentOpacity;
                }

                if (typeof scale === 'undefined' || scale === null) {
                    $el.transform(`translate3d(${x}, ${y}, 0px)`);
                } else {
                    const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                    $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
                }
            };

            const setTranslate = () => {
                const {
                    $el,
                    slides,
                    progress,
                    snapGrid
                } = swiper;
                $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
                    setTransform(el, progress);
                });
                slides.each((slideEl, slideIndex) => {
                    let slideProgress = slideEl.progress;

                    if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                        slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                    }

                    slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                    dom(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
                        setTransform(el, slideProgress);
                    });
                });
            };

            const setTransition = function (duration) {
                if (duration === void 0) {
                    duration = swiper.params.speed;
                }

                const {
                    $el
                } = swiper;
                $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
                    const $parallaxEl = dom(parallaxEl);
                    let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) parallaxDuration = 0;
                    $parallaxEl.transition(parallaxDuration);
                });
            };

            on('beforeInit', () => {
                if (!swiper.params.parallax.enabled) return;
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            });
            on('init', () => {
                if (!swiper.params.parallax.enabled) return;
                setTranslate();
            });
            on('setTranslate', () => {
                if (!swiper.params.parallax.enabled) return;
                setTranslate();
            });
            on('setTransition', (_swiper, duration) => {
                if (!swiper.params.parallax.enabled) return;
                setTransition(duration);
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/zoom/zoom.js


        function Zoom(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            const window = ssr_window_esm_getWindow();
            extendParams({
                zoom: {
                    enabled: false,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: true,
                    containerClass: 'swiper-zoom-container',
                    zoomedSlideClass: 'swiper-slide-zoomed'
                }
            });
            swiper.zoom = {
                enabled: false
            };
            let currentScale = 1;
            let isScaling = false;
            let gesturesEnabled;
            let fakeGestureTouched;
            let fakeGestureMoved;
            const gesture = {
                $slideEl: undefined,
                slideWidth: undefined,
                slideHeight: undefined,
                $imageEl: undefined,
                $imageWrapEl: undefined,
                maxRatio: 3
            };
            const image = {
                isTouched: undefined,
                isMoved: undefined,
                currentX: undefined,
                currentY: undefined,
                minX: undefined,
                minY: undefined,
                maxX: undefined,
                maxY: undefined,
                width: undefined,
                height: undefined,
                startX: undefined,
                startY: undefined,
                touchesStart: {},
                touchesCurrent: {}
            };
            const velocity = {
                x: undefined,
                y: undefined,
                prevPositionX: undefined,
                prevPositionY: undefined,
                prevTime: undefined
            };
            let scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get() {
                    return scale;
                },

                set(value) {
                    if (scale !== value) {
                        const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                        const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                        emit('zoomChange', value, imageEl, slideEl);
                    }

                    scale = value;
                }

            });

            function getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) return 1;
                const x1 = e.targetTouches[0].pageX;
                const y1 = e.targetTouches[0].pageY;
                const x2 = e.targetTouches[1].pageX;
                const y2 = e.targetTouches[1].pageY;
                const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                return distance;
            } // Events


            function onGestureStart(e) {
                const support = swiper.support;
                const params = swiper.params.zoom;
                fakeGestureTouched = false;
                fakeGestureMoved = false;

                if (!support.gestures) {
                    if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
                        return;
                    }

                    fakeGestureTouched = true;
                    gesture.scaleStart = getDistanceBetweenTouches(e);
                }

                if (!gesture.$slideEl || !gesture.$slideEl.length) {
                    gesture.$slideEl = dom(e.target).closest(`.${swiper.params.slideClass}`);
                    if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                    gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                    if (gesture.$imageWrapEl.length === 0) {
                        gesture.$imageEl = undefined;
                        return;
                    }
                }

                if (gesture.$imageEl) {
                    gesture.$imageEl.transition(0);
                }

                isScaling = true;
            }

            function onGestureChange(e) {
                const support = swiper.support;
                const params = swiper.params.zoom;
                const zoom = swiper.zoom;

                if (!support.gestures) {
                    if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
                        return;
                    }

                    fakeGestureMoved = true;
                    gesture.scaleMove = getDistanceBetweenTouches(e);
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                    if (e.type === 'gesturechange') onGestureStart(e);
                    return;
                }

                if (support.gestures) {
                    zoom.scale = e.scale * currentScale;
                } else {
                    zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
                }

                if (zoom.scale > gesture.maxRatio) {
                    zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
                }

                if (zoom.scale < params.minRatio) {
                    zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
                }

                gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            }

            function onGestureEnd(e) {
                const device = swiper.device;
                const support = swiper.support;
                const params = swiper.params.zoom;
                const zoom = swiper.zoom;

                if (!support.gestures) {
                    if (!fakeGestureTouched || !fakeGestureMoved) {
                        return;
                    }

                    if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
                        return;
                    }

                    fakeGestureTouched = false;
                    fakeGestureMoved = false;
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
                gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
                currentScale = zoom.scale;
                isScaling = false;
                if (zoom.scale === 1) gesture.$slideEl = undefined;
            }

            function onTouchStart(e) {
                const device = swiper.device;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                if (image.isTouched) return;
                if (device.android && e.cancelable) e.preventDefault();
                image.isTouched = true;
                image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            }

            function onTouchMove(e) {
                const zoom = swiper.zoom;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
                swiper.allowClick = false;
                if (!image.isTouched || !gesture.$slideEl) return;

                if (!image.isMoved) {
                    image.width = gesture.$imageEl[0].offsetWidth;
                    image.height = gesture.$imageEl[0].offsetHeight;
                    image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                    image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                    gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                    gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                    gesture.$imageWrapEl.transition(0);
                } // Define if we need image drag


                const scaledWidth = image.width * zoom.scale;
                const scaledHeight = image.height * zoom.scale;
                if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
                image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                image.maxX = -image.minX;
                image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                image.maxY = -image.minY;
                image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

                if (!image.isMoved && !isScaling) {
                    if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                        image.isTouched = false;
                        return;
                    }

                    if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                        image.isTouched = false;
                        return;
                    }
                }

                if (e.cancelable) {
                    e.preventDefault();
                }

                e.stopPropagation();
                image.isMoved = true;
                image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
                image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

                if (image.currentX < image.minX) {
                    image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
                }

                if (image.currentX > image.maxX) {
                    image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
                }

                if (image.currentY < image.minY) {
                    image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
                }

                if (image.currentY > image.maxY) {
                    image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
                } // Velocity


                if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
                if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
                if (!velocity.prevTime) velocity.prevTime = Date.now();
                velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
                velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
                if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
                if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
                velocity.prevPositionX = image.touchesCurrent.x;
                velocity.prevPositionY = image.touchesCurrent.y;
                velocity.prevTime = Date.now();
                gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            }

            function onTouchEnd() {
                const zoom = swiper.zoom;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

                if (!image.isTouched || !image.isMoved) {
                    image.isTouched = false;
                    image.isMoved = false;
                    return;
                }

                image.isTouched = false;
                image.isMoved = false;
                let momentumDurationX = 300;
                let momentumDurationY = 300;
                const momentumDistanceX = velocity.x * momentumDurationX;
                const newPositionX = image.currentX + momentumDistanceX;
                const momentumDistanceY = velocity.y * momentumDurationY;
                const newPositionY = image.currentY + momentumDistanceY; // Fix duration

                if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
                if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
                const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
                image.currentX = newPositionX;
                image.currentY = newPositionY; // Define if we need image drag

                const scaledWidth = image.width * zoom.scale;
                const scaledHeight = image.height * zoom.scale;
                image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
                image.maxX = -image.minX;
                image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
                image.maxY = -image.minY;
                image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
                image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
                gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
            }

            function onTransitionEnd() {
                const zoom = swiper.zoom;

                if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                    if (gesture.$imageEl) {
                        gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                    }

                    if (gesture.$imageWrapEl) {
                        gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                    }

                    zoom.scale = 1;
                    currentScale = 1;
                    gesture.$slideEl = undefined;
                    gesture.$imageEl = undefined;
                    gesture.$imageWrapEl = undefined;
                }
            }

            function zoomIn(e) {
                const zoom = swiper.zoom;
                const params = swiper.params.zoom;

                if (!gesture.$slideEl) {
                    if (e && e.target) {
                        gesture.$slideEl = dom(e.target).closest(`.${swiper.params.slideClass}`);
                    }

                    if (!gesture.$slideEl) {
                        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                            gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                        } else {
                            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                        }
                    }

                    gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

                if (swiper.params.cssMode) {
                    swiper.wrapperEl.style.overflow = 'hidden';
                    swiper.wrapperEl.style.touchAction = 'none';
                }

                gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
                let touchX;
                let touchY;
                let offsetX;
                let offsetY;
                let diffX;
                let diffY;
                let translateX;
                let translateY;
                let imageWidth;
                let imageHeight;
                let scaledWidth;
                let scaledHeight;
                let translateMinX;
                let translateMinY;
                let translateMaxX;
                let translateMaxY;
                let slideWidth;
                let slideHeight;

                if (typeof image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                } else {
                    touchX = image.touchesStart.x;
                    touchY = image.touchesStart.y;
                }

                zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

                if (e) {
                    slideWidth = gesture.$slideEl[0].offsetWidth;
                    slideHeight = gesture.$slideEl[0].offsetHeight;
                    offsetX = gesture.$slideEl.offset().left + window.scrollX;
                    offsetY = gesture.$slideEl.offset().top + window.scrollY;
                    diffX = offsetX + slideWidth / 2 - touchX;
                    diffY = offsetY + slideHeight / 2 - touchY;
                    imageWidth = gesture.$imageEl[0].offsetWidth;
                    imageHeight = gesture.$imageEl[0].offsetHeight;
                    scaledWidth = imageWidth * zoom.scale;
                    scaledHeight = imageHeight * zoom.scale;
                    translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                    translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                    translateMaxX = -translateMinX;
                    translateMaxY = -translateMinY;
                    translateX = diffX * zoom.scale;
                    translateY = diffY * zoom.scale;

                    if (translateX < translateMinX) {
                        translateX = translateMinX;
                    }

                    if (translateX > translateMaxX) {
                        translateX = translateMaxX;
                    }

                    if (translateY < translateMinY) {
                        translateY = translateMinY;
                    }

                    if (translateY > translateMaxY) {
                        translateY = translateMaxY;
                    }
                } else {
                    translateX = 0;
                    translateY = 0;
                }

                gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
                gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
            }

            function zoomOut() {
                const zoom = swiper.zoom;
                const params = swiper.params.zoom;

                if (!gesture.$slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                        gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                    } else {
                        gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                    }

                    gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
                    gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
                }

                if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

                if (swiper.params.cssMode) {
                    swiper.wrapperEl.style.overflow = '';
                    swiper.wrapperEl.style.touchAction = '';
                }

                zoom.scale = 1;
                currentScale = 1;
                gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
                gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
                gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
                gesture.$slideEl = undefined;
            } // Toggle Zoom


            function zoomToggle(e) {
                const zoom = swiper.zoom;

                if (zoom.scale && zoom.scale !== 1) {
                    // Zoom Out
                    zoomOut();
                } else {
                    // Zoom In
                    zoomIn(e);
                }
            }

            function getListeners() {
                const support = swiper.support;
                const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;
                const activeListenerWithCapture = support.passiveListener ? {
                    passive: false,
                    capture: true
                } : true;
                return {
                    passiveListener,
                    activeListenerWithCapture
                };
            }

            function getSlideSelector() {
                return `.${swiper.params.slideClass}`;
            }

            function toggleGestures(method) {
                const {
                    passiveListener
                } = getListeners();
                const slideSelector = getSlideSelector();
                swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
                swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
                swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
            }

            function enableGestures() {
                if (gesturesEnabled) return;
                gesturesEnabled = true;
                toggleGestures('on');
            }

            function disableGestures() {
                if (!gesturesEnabled) return;
                gesturesEnabled = false;
                toggleGestures('off');
            } // Attach/Detach Events


            function enable() {
                const zoom = swiper.zoom;
                if (zoom.enabled) return;
                zoom.enabled = true;
                const support = swiper.support;
                const {
                    passiveListener,
                    activeListenerWithCapture
                } = getListeners();
                const slideSelector = getSlideSelector(); // Scale image

                if (support.gestures) {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

                    if (swiper.touchEvents.cancel) {
                        swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                    }
                } // Move image


                swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
            }

            function disable() {
                const zoom = swiper.zoom;
                if (!zoom.enabled) return;
                const support = swiper.support;
                zoom.enabled = false;
                const {
                    passiveListener,
                    activeListenerWithCapture
                } = getListeners();
                const slideSelector = getSlideSelector(); // Scale image

                if (support.gestures) {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

                    if (swiper.touchEvents.cancel) {
                        swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
                    }
                } // Move image


                swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
            }

            on('init', () => {
                if (swiper.params.zoom.enabled) {
                    enable();
                }
            });
            on('destroy', () => {
                disable();
            });
            on('touchStart', (_s, e) => {
                if (!swiper.zoom.enabled) return;
                onTouchStart(e);
            });
            on('touchEnd', (_s, e) => {
                if (!swiper.zoom.enabled) return;
                onTouchEnd(e);
            });
            on('doubleTap', (_s, e) => {
                if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    zoomToggle(e);
                }
            });
            on('transitionEnd', () => {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    onTransitionEnd();
                }
            });
            on('slideChange', () => {
                if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                    onTransitionEnd();
                }
            });
            Object.assign(swiper.zoom, {
                enable,
                disable,
                in: zoomIn,
                out: zoomOut,
                toggle: zoomToggle
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/lazy/lazy.js


        function Lazy(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            extendParams({
                lazy: {
                    checkInView: false,
                    enabled: false,
                    loadPrevNext: false,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: false,
                    scrollingElement: '',
                    elementClass: 'swiper-lazy',
                    loadingClass: 'swiper-lazy-loading',
                    loadedClass: 'swiper-lazy-loaded',
                    preloaderClass: 'swiper-lazy-preloader'
                }
            });
            swiper.lazy = {};
            let scrollHandlerAttached = false;
            let initialImageLoaded = false;

            function loadInSlide(index, loadInDuplicate) {
                if (loadInDuplicate === void 0) {
                    loadInDuplicate = true;
                }

                const params = swiper.params.lazy;
                if (typeof index === 'undefined') return;
                if (swiper.slides.length === 0) return;
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
                const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

                if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                    $images.push($slideEl[0]);
                }

                if ($images.length === 0) return;
                $images.each(imageEl => {
                    const $imageEl = dom(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    const background = $imageEl.attr('data-background');
                    const src = $imageEl.attr('data-src');
                    const srcset = $imageEl.attr('data-srcset');
                    const sizes = $imageEl.attr('data-sizes');
                    const $pictureEl = $imageEl.parent('picture');
                    swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
                        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

                        if (background) {
                            $imageEl.css('background-image', `url("${background}")`);
                            $imageEl.removeAttr('data-background');
                        } else {
                            if (srcset) {
                                $imageEl.attr('srcset', srcset);
                                $imageEl.removeAttr('data-srcset');
                            }

                            if (sizes) {
                                $imageEl.attr('sizes', sizes);
                                $imageEl.removeAttr('data-sizes');
                            }

                            if ($pictureEl.length) {
                                $pictureEl.children('source').each(sourceEl => {
                                    const $source = dom(sourceEl);

                                    if ($source.attr('data-srcset')) {
                                        $source.attr('srcset', $source.attr('data-srcset'));
                                        $source.removeAttr('data-srcset');
                                    }
                                });
                            }

                            if (src) {
                                $imageEl.attr('src', src);
                                $imageEl.removeAttr('data-src');
                            }
                        }

                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find(`.${params.preloaderClass}`).remove();

                        if (swiper.params.loop && loadInDuplicate) {
                            const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                                loadInSlide(originalSlide.index(), false);
                            } else {
                                const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                                loadInSlide(duplicatedSlide.index(), false);
                            }
                        }

                        emit('lazyImageReady', $slideEl[0], $imageEl[0]);

                        if (swiper.params.autoHeight) {
                            swiper.updateAutoHeight();
                        }
                    });
                    emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
                });
            }

            function load() {
                const {
                    $wrapperEl,
                    params: swiperParams,
                    slides,
                    activeIndex
                } = swiper;
                const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                const params = swiperParams.lazy;
                let slidesPerView = swiperParams.slidesPerView;

                if (slidesPerView === 'auto') {
                    slidesPerView = 0;
                }

                function slideExist(index) {
                    if (isVirtual) {
                        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
                            return true;
                        }
                    } else if (slides[index]) return true;

                    return false;
                }

                function slideIndex(slideEl) {
                    if (isVirtual) {
                        return dom(slideEl).attr('data-swiper-slide-index');
                    }

                    return dom(slideEl).index();
                }

                if (!initialImageLoaded) initialImageLoaded = true;

                if (swiper.params.watchSlidesProgress) {
                    $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
                        const index = isVirtual ? dom(slideEl).attr('data-swiper-slide-index') : dom(slideEl).index();
                        loadInSlide(index);
                    });
                } else if (slidesPerView > 1) {
                    for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                        if (slideExist(i)) loadInSlide(i);
                    }
                } else {
                    loadInSlide(activeIndex);
                }

                if (params.loadPrevNext) {
                    if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                        const amount = params.loadPrevNextAmount;
                        const spv = slidesPerView;
                        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

                        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
                            if (slideExist(i)) loadInSlide(i);
                        } // Prev Slides


                        for (let i = minIndex; i < activeIndex; i += 1) {
                            if (slideExist(i)) loadInSlide(i);
                        }
                    } else {
                        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                        if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                        if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
                    }
                }
            }

            function checkInViewOnLoad() {
                const window = ssr_window_esm_getWindow();
                if (!swiper || swiper.destroyed) return;
                const $scrollElement = swiper.params.lazy.scrollingElement ? dom(swiper.params.lazy.scrollingElement) : dom(window);
                const isWindow = $scrollElement[0] === window;
                const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
                const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
                const swiperOffset = swiper.$el.offset();
                const {
                    rtlTranslate: rtl
                } = swiper;
                let inView = false;
                if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
                const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];

                    if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

                        inView = true;
                    }
                }

                const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
                    passive: true,
                    capture: false
                } : false;

                if (inView) {
                    load();
                    $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
                } else if (!scrollHandlerAttached) {
                    scrollHandlerAttached = true;
                    $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
                }
            }

            on('beforeInit', () => {
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            });
            on('init', () => {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.checkInView) {
                        checkInViewOnLoad();
                    } else {
                        load();
                    }
                }
            });
            on('scroll', () => {
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
                    load();
                }
            });
            on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.checkInView) {
                        checkInViewOnLoad();
                    } else {
                        load();
                    }
                }
            });
            on('transitionStart', () => {
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                        if (swiper.params.lazy.checkInView) {
                            checkInViewOnLoad();
                        } else {
                            load();
                        }
                    }
                }
            });
            on('transitionEnd', () => {
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    if (swiper.params.lazy.checkInView) {
                        checkInViewOnLoad();
                    } else {
                        load();
                    }
                }
            });
            on('slideChange', () => {
                const {
                    lazy,
                    cssMode,
                    watchSlidesProgress,
                    touchReleaseOnEdges,
                    resistanceRatio
                } = swiper.params;

                if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
                    load();
                }
            });
            Object.assign(swiper.lazy, {
                load,
                loadInSlide
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/controller/controller.js
        /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

        function Controller(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                controller: {
                    control: undefined,
                    inverse: false,
                    by: 'slide' // or 'container'

                }
            });
            swiper.controller = {
                control: undefined
            };

            function LinearSpline(x, y) {
                const binarySearch = function search() {
                    let maxIndex;
                    let minIndex;
                    let guess;
                    return (array, val) => {
                        minIndex = -1;
                        maxIndex = array.length;

                        while (maxIndex - minIndex > 1) {
                            guess = maxIndex + minIndex >> 1;

                            if (array[guess] <= val) {
                                minIndex = guess;
                            } else {
                                maxIndex = guess;
                            }
                        }

                        return maxIndex;
                    };
                }();

                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
                // (x1,y1) is the known point before given value,
                // (x3,y3) is the known point after given value.

                let i1;
                let i3;

                this.interpolate = function interpolate(x2) {
                    if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

                    return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
                };

                return this;
            } // xxx: for now i will just save one spline function to to


            function getInterpolateFunction(c) {
                if (!swiper.controller.spline) {
                    swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
                }
            }

            function setTranslate(_t, byController) {
                const controlled = swiper.controller.control;
                let multiplier;
                let controlledTranslate;
                const Swiper = swiper.constructor;

                function setControlledTranslate(c) {
                    // this will create an Interpolate function based on the snapGrids
                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
                    // it makes sense to create this only once and recall it for the interpolation
                    // the function does a lot of value caching for performance
                    const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

                    if (swiper.params.controller.by === 'slide') {
                        getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                        // but it did not work out

                        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                    }

                    if (!controlledTranslate || swiper.params.controller.by === 'container') {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                        controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                    }

                    if (swiper.params.controller.inverse) {
                        controlledTranslate = c.maxTranslate() - controlledTranslate;
                    }

                    c.updateProgress(controlledTranslate);
                    c.setTranslate(controlledTranslate, swiper);
                    c.updateActiveIndex();
                    c.updateSlidesClasses();
                }

                if (Array.isArray(controlled)) {
                    for (let i = 0; i < controlled.length; i += 1) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTranslate(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTranslate(controlled);
                }
            }

            function setTransition(duration, byController) {
                const Swiper = swiper.constructor;
                const controlled = swiper.controller.control;
                let i;

                function setControlledTransition(c) {
                    c.setTransition(duration, swiper);

                    if (duration !== 0) {
                        c.transitionStart();

                        if (c.params.autoHeight) {
                            nextTick(() => {
                                c.updateAutoHeight();
                            });
                        }

                        c.$wrapperEl.transitionEnd(() => {
                            if (!controlled) return;

                            if (c.params.loop && swiper.params.controller.by === 'slide') {
                                c.loopFix();
                            }

                            c.transitionEnd();
                        });
                    }
                }

                if (Array.isArray(controlled)) {
                    for (i = 0; i < controlled.length; i += 1) {
                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                            setControlledTransition(controlled[i]);
                        }
                    }
                } else if (controlled instanceof Swiper && byController !== controlled) {
                    setControlledTransition(controlled);
                }
            }

            function removeSpline() {
                if (!swiper.controller.control) return;

                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            }

            on('beforeInit', () => {
                swiper.controller.control = swiper.params.controller.control;
            });
            on('update', () => {
                removeSpline();
            });
            on('resize', () => {
                removeSpline();
            });
            on('observerUpdate', () => {
                removeSpline();
            });
            on('setTranslate', (_s, translate, byController) => {
                if (!swiper.controller.control) return;
                swiper.controller.setTranslate(translate, byController);
            });
            on('setTransition', (_s, duration, byController) => {
                if (!swiper.controller.control) return;
                swiper.controller.setTransition(duration, byController);
            });
            Object.assign(swiper.controller, {
                setTranslate,
                setTransition
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/a11y/a11y.js


        function A11y(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                a11y: {
                    enabled: true,
                    notificationClass: 'swiper-notification',
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                    paginationBulletMessage: 'Go to slide {{index}}',
                    slideLabelMessage: '{{index}} / {{slidesLength}}',
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: 'group'
                }
            });
            let liveRegion = null;

            function notify(message) {
                const notification = liveRegion;
                if (notification.length === 0) return;
                notification.html('');
                notification.html(message);
            }

            function getRandomNumber(size) {
                if (size === void 0) {
                    size = 16;
                }

                const randomChar = () => Math.round(16 * Math.random()).toString(16);

                return 'x'.repeat(size).replace(/x/g, randomChar);
            }

            function makeElFocusable($el) {
                $el.attr('tabIndex', '0');
            }

            function makeElNotFocusable($el) {
                $el.attr('tabIndex', '-1');
            }

            function addElRole($el, role) {
                $el.attr('role', role);
            }

            function addElRoleDescription($el, description) {
                $el.attr('aria-roledescription', description);
            }

            function addElControls($el, controls) {
                $el.attr('aria-controls', controls);
            }

            function addElLabel($el, label) {
                $el.attr('aria-label', label);
            }

            function addElId($el, id) {
                $el.attr('id', id);
            }

            function addElLive($el, live) {
                $el.attr('aria-live', live);
            }

            function disableEl($el) {
                $el.attr('aria-disabled', true);
            }

            function enableEl($el) {
                $el.attr('aria-disabled', false);
            }

            function onEnterOrSpaceKey(e) {
                if (e.keyCode !== 13 && e.keyCode !== 32) return;
                const params = swiper.params.a11y;
                const $targetEl = dom(e.target);

                if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                    if (!(swiper.isEnd && !swiper.params.loop)) {
                        swiper.slideNext();
                    }

                    if (swiper.isEnd) {
                        notify(params.lastSlideMessage);
                    } else {
                        notify(params.nextSlideMessage);
                    }
                }

                if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) {
                        swiper.slidePrev();
                    }

                    if (swiper.isBeginning) {
                        notify(params.firstSlideMessage);
                    } else {
                        notify(params.prevSlideMessage);
                    }
                }

                if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
                    $targetEl[0].click();
                }
            }

            function updateNavigation() {
                if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
                const {
                    $nextEl,
                    $prevEl
                } = swiper.navigation;

                if ($prevEl && $prevEl.length > 0) {
                    if (swiper.isBeginning) {
                        disableEl($prevEl);
                        makeElNotFocusable($prevEl);
                    } else {
                        enableEl($prevEl);
                        makeElFocusable($prevEl);
                    }
                }

                if ($nextEl && $nextEl.length > 0) {
                    if (swiper.isEnd) {
                        disableEl($nextEl);
                        makeElNotFocusable($nextEl);
                    } else {
                        enableEl($nextEl);
                        makeElFocusable($nextEl);
                    }
                }
            }

            function hasPagination() {
                return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
            }

            function hasClickablePagination() {
                return hasPagination() && swiper.params.pagination.clickable;
            }

            function updatePagination() {
                const params = swiper.params.a11y;
                if (!hasPagination()) return;
                swiper.pagination.bullets.each(bulletEl => {
                    const $bulletEl = dom(bulletEl);

                    if (swiper.params.pagination.clickable) {
                        makeElFocusable($bulletEl);

                        if (!swiper.params.pagination.renderBullet) {
                            addElRole($bulletEl, 'button');
                            addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                        }
                    }

                    if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
                        $bulletEl.attr('aria-current', 'true');
                    } else {
                        $bulletEl.removeAttr('aria-current');
                    }
                });
            }

            const initNavEl = ($el, wrapperId, message) => {
                makeElFocusable($el);

                if ($el[0].tagName !== 'BUTTON') {
                    addElRole($el, 'button');
                    $el.on('keydown', onEnterOrSpaceKey);
                }

                addElLabel($el, message);
                addElControls($el, wrapperId);
            };

            const handleFocus = e => {
                const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
                if (!slideEl || !swiper.slides.includes(slideEl)) return;
                const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
                const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
                if (isActive || isVisible) return;
                swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
            };

            function init() {
                const params = swiper.params.a11y;
                swiper.$el.append(liveRegion); // Container

                const $containerEl = swiper.$el;

                if (params.containerRoleDescriptionMessage) {
                    addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
                }

                if (params.containerMessage) {
                    addElLabel($containerEl, params.containerMessage);
                } // Wrapper


                const $wrapperEl = swiper.$wrapperEl;
                const wrapperId = $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
                const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
                addElId($wrapperEl, wrapperId);
                addElLive($wrapperEl, live); // Slide

                if (params.itemRoleDescriptionMessage) {
                    addElRoleDescription(dom(swiper.slides), params.itemRoleDescriptionMessage);
                }

                addElRole(dom(swiper.slides), params.slideRole);
                const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;
                swiper.slides.each((slideEl, index) => {
                    const $slideEl = dom(slideEl);
                    const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel($slideEl, ariaLabelMessage);
                }); // Navigation

                let $nextEl;
                let $prevEl;

                if (swiper.navigation && swiper.navigation.$nextEl) {
                    $nextEl = swiper.navigation.$nextEl;
                }

                if (swiper.navigation && swiper.navigation.$prevEl) {
                    $prevEl = swiper.navigation.$prevEl;
                }

                if ($nextEl && $nextEl.length) {
                    initNavEl($nextEl, wrapperId, params.nextSlideMessage);
                }

                if ($prevEl && $prevEl.length) {
                    initNavEl($prevEl, wrapperId, params.prevSlideMessage);
                } // Pagination


                if (hasClickablePagination()) {
                    swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
                } // Tab focus


                swiper.$el.on('focus', handleFocus, true);
            }

            function destroy() {
                if (liveRegion && liveRegion.length > 0) liveRegion.remove();
                let $nextEl;
                let $prevEl;

                if (swiper.navigation && swiper.navigation.$nextEl) {
                    $nextEl = swiper.navigation.$nextEl;
                }

                if (swiper.navigation && swiper.navigation.$prevEl) {
                    $prevEl = swiper.navigation.$prevEl;
                }

                if ($nextEl) {
                    $nextEl.off('keydown', onEnterOrSpaceKey);
                }

                if ($prevEl) {
                    $prevEl.off('keydown', onEnterOrSpaceKey);
                } // Pagination


                if (hasClickablePagination()) {
                    swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
                } // Tab focus


                swiper.$el.off('focus', handleFocus, true);
            }

            on('beforeInit', () => {
                liveRegion = dom(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            });
            on('afterInit', () => {
                if (!swiper.params.a11y.enabled) return;
                init();
            });
            on('fromEdge toEdge afterInit lock unlock', () => {
                if (!swiper.params.a11y.enabled) return;
                updateNavigation();
            });
            on('paginationUpdate', () => {
                if (!swiper.params.a11y.enabled) return;
                updatePagination();
            });
            on('destroy', () => {
                if (!swiper.params.a11y.enabled) return;
                destroy();
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/history/history.js

        function History(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                history: {
                    enabled: false,
                    root: '',
                    replaceState: false,
                    key: 'slides'
                }
            });
            let initialized = false;
            let paths = {};

            const slugify = text => {
                return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
            };

            const getPathValues = urlOverride => {
                const window = ssr_window_esm_getWindow();
                let location;

                if (urlOverride) {
                    location = new URL(urlOverride);
                } else {
                    location = window.location;
                }

                const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
                const total = pathArray.length;
                const key = pathArray[total - 2];
                const value = pathArray[total - 1];
                return {
                    key,
                    value
                };
            };

            const setHistory = (key, index) => {
                const window = ssr_window_esm_getWindow();
                if (!initialized || !swiper.params.history.enabled) return;
                let location;

                if (swiper.params.url) {
                    location = new URL(swiper.params.url);
                } else {
                    location = window.location;
                }

                const slide = swiper.slides.eq(index);
                let value = slugify(slide.attr('data-history'));

                if (swiper.params.history.root.length > 0) {
                    let root = swiper.params.history.root;
                    if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                    value = `${root}/${key}/${value}`;
                } else if (!location.pathname.includes(key)) {
                    value = `${key}/${value}`;
                }

                const currentState = window.history.state;

                if (currentState && currentState.value === value) {
                    return;
                }

                if (swiper.params.history.replaceState) {
                    window.history.replaceState({
                        value
                    }, null, value);
                } else {
                    window.history.pushState({
                        value
                    }, null, value);
                }
            };

            const scrollToSlide = (speed, value, runCallbacks) => {
                if (value) {
                    for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                        const slide = swiper.slides.eq(i);
                        const slideHistory = slugify(slide.attr('data-history'));

                        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else {
                    swiper.slideTo(0, speed, runCallbacks);
                }
            };

            const setHistoryPopState = () => {
                paths = getPathValues(swiper.params.url);
                scrollToSlide(swiper.params.speed, swiper.paths.value, false);
            };

            const init = () => {
                const window = ssr_window_esm_getWindow();
                if (!swiper.params.history) return;

                if (!window.history || !window.history.pushState) {
                    swiper.params.history.enabled = false;
                    swiper.params.hashNavigation.enabled = true;
                    return;
                }

                initialized = true;
                paths = getPathValues(swiper.params.url);
                if (!paths.key && !paths.value) return;
                scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

                if (!swiper.params.history.replaceState) {
                    window.addEventListener('popstate', setHistoryPopState);
                }
            };

            const destroy = () => {
                const window = ssr_window_esm_getWindow();

                if (!swiper.params.history.replaceState) {
                    window.removeEventListener('popstate', setHistoryPopState);
                }
            };

            on('init', () => {
                if (swiper.params.history.enabled) {
                    init();
                }
            });
            on('destroy', () => {
                if (swiper.params.history.enabled) {
                    destroy();
                }
            });
            on('transitionEnd _freeModeNoMomentumRelease', () => {
                if (initialized) {
                    setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            });
            on('slideChange', () => {
                if (initialized && swiper.params.cssMode) {
                    setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/hash-navigation/hash-navigation.js


        function HashNavigation(_ref) {
            let {
                swiper,
                extendParams,
                emit,
                on
            } = _ref;
            let initialized = false;
            const document = getDocument();
            const window = ssr_window_esm_getWindow();
            extendParams({
                hashNavigation: {
                    enabled: false,
                    replaceState: false,
                    watchState: false
                }
            });

            const onHashChange = () => {
                emit('hashChange');
                const newHash = document.location.hash.replace('#', '');
                const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

                if (newHash !== activeSlideHash) {
                    const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
                    if (typeof newIndex === 'undefined') return;
                    swiper.slideTo(newIndex);
                }
            };

            const setHash = () => {
                if (!initialized || !swiper.params.hashNavigation.enabled) return;

                if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                    window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
                    emit('hashSet');
                } else {
                    const slide = swiper.slides.eq(swiper.activeIndex);
                    const hash = slide.attr('data-hash') || slide.attr('data-history');
                    document.location.hash = hash || '';
                    emit('hashSet');
                }
            };

            const init = () => {
                if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
                initialized = true;
                const hash = document.location.hash.replace('#', '');

                if (hash) {
                    const speed = 0;

                    for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                        const slide = swiper.slides.eq(i);
                        const slideHash = slide.attr('data-hash') || slide.attr('data-history');

                        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            const index = slide.index();
                            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                        }
                    }
                }

                if (swiper.params.hashNavigation.watchState) {
                    dom(window).on('hashchange', onHashChange);
                }
            };

            const destroy = () => {
                if (swiper.params.hashNavigation.watchState) {
                    dom(window).off('hashchange', onHashChange);
                }
            };

            on('init', () => {
                if (swiper.params.hashNavigation.enabled) {
                    init();
                }
            });
            on('destroy', () => {
                if (swiper.params.hashNavigation.enabled) {
                    destroy();
                }
            });
            on('transitionEnd _freeModeNoMomentumRelease', () => {
                if (initialized) {
                    setHash();
                }
            });
            on('slideChange', () => {
                if (initialized && swiper.params.cssMode) {
                    setHash();
                }
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/autoplay/autoplay.js
        /* eslint no-underscore-dangle: "off" */

        /* eslint no-use-before-define: "off" */


        function Autoplay(_ref) {
            let {
                swiper,
                extendParams,
                on,
                emit
            } = _ref;
            let timeout;
            swiper.autoplay = {
                running: false,
                paused: false
            };
            extendParams({
                autoplay: {
                    enabled: false,
                    delay: 3000,
                    waitForTransition: true,
                    disableOnInteraction: true,
                    stopOnLastSlide: false,
                    reverseDirection: false,
                    pauseOnMouseEnter: false
                }
            });

            function run() {
                const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                let delay = swiper.params.autoplay.delay;

                if ($activeSlideEl.attr('data-swiper-autoplay')) {
                    delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
                }

                clearTimeout(timeout);
                timeout = nextTick(() => {
                    let autoplayResult;

                    if (swiper.params.autoplay.reverseDirection) {
                        if (swiper.params.loop) {
                            swiper.loopFix();
                            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                            emit('autoplay');
                        } else if (!swiper.isBeginning) {
                            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                            emit('autoplay');
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                            emit('autoplay');
                        } else {
                            stop();
                        }
                    } else if (swiper.params.loop) {
                        swiper.loopFix();
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.isEnd) {
                        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                        emit('autoplay');
                    } else {
                        stop();
                    }

                    if (swiper.params.cssMode && swiper.autoplay.running) run(); else if (autoplayResult === false) {
                        run();
                    }
                }, delay);
            }

            function start() {
                if (typeof timeout !== 'undefined') return false;
                if (swiper.autoplay.running) return false;
                swiper.autoplay.running = true;
                emit('autoplayStart');
                run();
                return true;
            }

            function stop() {
                if (!swiper.autoplay.running) return false;
                if (typeof timeout === 'undefined') return false;

                if (timeout) {
                    clearTimeout(timeout);
                    timeout = undefined;
                }

                swiper.autoplay.running = false;
                emit('autoplayStop');
                return true;
            }

            function pause(speed) {
                if (!swiper.autoplay.running) return;
                if (swiper.autoplay.paused) return;
                if (timeout) clearTimeout(timeout);
                swiper.autoplay.paused = true;

                if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    run();
                } else {
                    ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
                    });
                }
            }

            function onVisibilityChange() {
                const document = getDocument();

                if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                    pause();
                }

                if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                    run();
                    swiper.autoplay.paused = false;
                }
            }

            function onTransitionEnd(e) {
                if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
                if (e.target !== swiper.$wrapperEl[0]) return;
                ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                });
                swiper.autoplay.paused = false;

                if (!swiper.autoplay.running) {
                    stop();
                } else {
                    run();
                }
            }

            function onMouseEnter() {
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                } else {
                    emit('autoplayPause');
                    pause();
                }

                ['transitionend', 'webkitTransitionEnd'].forEach(event => {
                    swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
                });
            }

            function onMouseLeave() {
                if (swiper.params.autoplay.disableOnInteraction) {
                    return;
                }

                swiper.autoplay.paused = false;
                emit('autoplayResume');
                run();
            }

            function attachMouseEvents() {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.$el.on('mouseenter', onMouseEnter);
                    swiper.$el.on('mouseleave', onMouseLeave);
                }
            }

            function detachMouseEvents() {
                swiper.$el.off('mouseenter', onMouseEnter);
                swiper.$el.off('mouseleave', onMouseLeave);
            }

            on('init', () => {
                if (swiper.params.autoplay.enabled) {
                    start();
                    const document = getDocument();
                    document.addEventListener('visibilitychange', onVisibilityChange);
                    attachMouseEvents();
                }
            });
            on('beforeTransitionStart', (_s, speed, internal) => {
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        stop();
                    }
                }
            });
            on('sliderFirstMove', () => {
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        stop();
                    } else {
                        pause();
                    }
                }
            });
            on('touchEnd', () => {
                if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
                    run();
                }
            });
            on('destroy', () => {
                detachMouseEvents();

                if (swiper.autoplay.running) {
                    stop();
                }

                const document = getDocument();
                document.removeEventListener('visibilitychange', onVisibilityChange);
            });
            Object.assign(swiper.autoplay, {
                pause,
                run,
                start,
                stop
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/thumbs/thumbs.js


        function Thumb(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: true,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: 'swiper-slide-thumb-active',
                    thumbsContainerClass: 'swiper-thumbs'
                }
            });
            let initialized = false;
            let swiperCreated = false;
            swiper.thumbs = {
                swiper: null
            };

            function onThumbClick() {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                const clickedIndex = thumbsSwiper.clickedIndex;
                const clickedSlide = thumbsSwiper.clickedSlide;
                if (clickedSlide && dom(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
                if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
                let slideToIndex;

                if (thumbsSwiper.params.loop) {
                    slideToIndex = parseInt(dom(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
                } else {
                    slideToIndex = clickedIndex;
                }

                if (swiper.params.loop) {
                    let currentIndex = swiper.activeIndex;

                    if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                        swiper.loopFix(); // eslint-disable-next-line

                        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                        currentIndex = swiper.activeIndex;
                    }

                    const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
                    if (typeof prevIndex === 'undefined') slideToIndex = nextIndex; else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex; else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex; else slideToIndex = prevIndex;
                }

                swiper.slideTo(slideToIndex);
            }

            function init() {
                const {
                    thumbs: thumbsParams
                } = swiper.params;
                if (initialized) return false;
                initialized = true;
                const SwiperClass = swiper.constructor;

                if (thumbsParams.swiper instanceof SwiperClass) {
                    swiper.thumbs.swiper = thumbsParams.swiper;
                    Object.assign(swiper.thumbs.swiper.originalParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    Object.assign(swiper.thumbs.swiper.params, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                } else if (utils_isObject(thumbsParams.swiper)) {
                    const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                    Object.assign(thumbsSwiperParams, {
                        watchSlidesProgress: true,
                        slideToClickedSlide: false
                    });
                    swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                    swiperCreated = true;
                }

                swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
                swiper.thumbs.swiper.on('tap', onThumbClick);
                return true;
            }

            function update(initial) {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
                const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
                const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

                if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                    let currentThumbsIndex = thumbsSwiper.activeIndex;
                    let newThumbsIndex;
                    let direction;

                    if (thumbsSwiper.params.loop) {
                        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                            thumbsSwiper.loopFix(); // eslint-disable-next-line

                            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                            currentThumbsIndex = thumbsSwiper.activeIndex;
                        } // Find actual thumbs index to slide to


                        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

                        if (typeof prevThumbsIndex === 'undefined') {
                            newThumbsIndex = nextThumbsIndex;
                        } else if (typeof nextThumbsIndex === 'undefined') {
                            newThumbsIndex = prevThumbsIndex;
                        } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                            newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                        } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                            newThumbsIndex = nextThumbsIndex;
                        } else {
                            newThumbsIndex = prevThumbsIndex;
                        }

                        direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                    } else {
                        newThumbsIndex = swiper.realIndex;
                        direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                    }

                    if (useOffset) {
                        newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                    }

                    if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                        if (thumbsSwiper.params.centeredSlides) {
                            if (newThumbsIndex > currentThumbsIndex) {
                                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                            } else {
                                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                            }
                        } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) {// newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                        }

                        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                    }
                } // Activate thumbs


                let thumbsToActivate = 1;
                const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

                if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                    thumbsToActivate = swiper.params.slidesPerView;
                }

                if (!swiper.params.thumbs.multipleActiveThumbs) {
                    thumbsToActivate = 1;
                }

                thumbsToActivate = Math.floor(thumbsToActivate);
                thumbsSwiper.slides.removeClass(thumbActiveClass);

                if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                    for (let i = 0; i < thumbsToActivate; i += 1) {
                        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
                    }
                } else {
                    for (let i = 0; i < thumbsToActivate; i += 1) {
                        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
                    }
                }
            }

            on('beforeInit', () => {
                const {
                    thumbs
                } = swiper.params;
                if (!thumbs || !thumbs.swiper) return;
                init();
                update(true);
            });
            on('slideChange update resize observerUpdate', () => {
                if (!swiper.thumbs.swiper) return;
                update();
            });
            on('setTransition', (_s, duration) => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;
                thumbsSwiper.setTransition(duration);
            });
            on('beforeDestroy', () => {
                const thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) return;

                if (swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            });
            Object.assign(swiper.thumbs, {
                init,
                update
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/free-mode/free-mode.js

        function freeMode(_ref) {
            let {
                swiper,
                extendParams,
                emit,
                once
            } = _ref;
            extendParams({
                freeMode: {
                    enabled: false,
                    momentum: true,
                    momentumRatio: 1,
                    momentumBounce: true,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: false,
                    minimumVelocity: 0.02
                }
            });

            function onTouchStart() {
                const translate = swiper.getTranslate();
                swiper.setTranslate(translate);
                swiper.setTransition(0);
                swiper.touchEventsData.velocities.length = 0;
                swiper.freeMode.onTouchEnd({
                    currentPos: swiper.rtl ? swiper.translate : -swiper.translate
                });
            }

            function onTouchMove() {
                const {
                    touchEventsData: data,
                    touches
                } = swiper; // Velocity

                if (data.velocities.length === 0) {
                    data.velocities.push({
                        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                        time: data.touchStartTime
                    });
                }

                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                    time: now()
                });
            }

            function onTouchEnd(_ref2) {
                let {
                    currentPos
                } = _ref2;
                const {
                    params,
                    $wrapperEl,
                    rtlTranslate: rtl,
                    snapGrid,
                    touchEventsData: data
                } = swiper; // Time diff

                const touchEndTime = now();
                const timeDiff = touchEndTime - data.touchStartTime;

                if (currentPos < -swiper.minTranslate()) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }

                if (currentPos > -swiper.maxTranslate()) {
                    if (swiper.slides.length < snapGrid.length) {
                        swiper.slideTo(snapGrid.length - 1);
                    } else {
                        swiper.slideTo(swiper.slides.length - 1);
                    }

                    return;
                }

                if (params.freeMode.momentum) {
                    if (data.velocities.length > 1) {
                        const lastMoveEvent = data.velocities.pop();
                        const velocityEvent = data.velocities.pop();
                        const distance = lastMoveEvent.position - velocityEvent.position;
                        const time = lastMoveEvent.time - velocityEvent.time;
                        swiper.velocity = distance / time;
                        swiper.velocity /= 2;

                        if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                            swiper.velocity = 0;
                        } // this implies that the user stopped moving a finger then released.
                        // There would be no events with distance zero, so the last event is stale.


                        if (time > 150 || now() - lastMoveEvent.time > 300) {
                            swiper.velocity = 0;
                        }
                    } else {
                        swiper.velocity = 0;
                    }

                    swiper.velocity *= params.freeMode.momentumVelocityRatio;
                    data.velocities.length = 0;
                    let momentumDuration = 1000 * params.freeMode.momentumRatio;
                    const momentumDistance = swiper.velocity * momentumDuration;
                    let newPosition = swiper.translate + momentumDistance;
                    if (rtl) newPosition = -newPosition;
                    let doBounce = false;
                    let afterBouncePosition;
                    const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                    let needsLoopFix;

                    if (newPosition < swiper.maxTranslate()) {
                        if (params.freeMode.momentumBounce) {
                            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                                newPosition = swiper.maxTranslate() - bounceAmount;
                            }

                            afterBouncePosition = swiper.maxTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else {
                            newPosition = swiper.maxTranslate();
                        }

                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (newPosition > swiper.minTranslate()) {
                        if (params.freeMode.momentumBounce) {
                            if (newPosition - swiper.minTranslate() > bounceAmount) {
                                newPosition = swiper.minTranslate() + bounceAmount;
                            }

                            afterBouncePosition = swiper.minTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else {
                            newPosition = swiper.minTranslate();
                        }

                        if (params.loop && params.centeredSlides) needsLoopFix = true;
                    } else if (params.freeMode.sticky) {
                        let nextSlide;

                        for (let j = 0; j < snapGrid.length; j += 1) {
                            if (snapGrid[j] > -newPosition) {
                                nextSlide = j;
                                break;
                            }
                        }

                        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                            newPosition = snapGrid[nextSlide];
                        } else {
                            newPosition = snapGrid[nextSlide - 1];
                        }

                        newPosition = -newPosition;
                    }

                    if (needsLoopFix) {
                        once('transitionEnd', () => {
                            swiper.loopFix();
                        });
                    } // Fix duration


                    if (swiper.velocity !== 0) {
                        if (rtl) {
                            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                        } else {
                            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                        }

                        if (params.freeMode.sticky) {
                            // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                            // It's easy to see this when simulating touch with mouse events. To fix this,
                            // limit single-slide swipes to the default slide duration. This also has the
                            // nice side effect of matching slide speed if the user stopped moving before
                            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                            // For faster swipes, also apply limits (albeit higher ones).
                            const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                            const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

                            if (moveDistance < currentSlideSize) {
                                momentumDuration = params.speed;
                            } else if (moveDistance < 2 * currentSlideSize) {
                                momentumDuration = params.speed * 1.5;
                            } else {
                                momentumDuration = params.speed * 2.5;
                            }
                        }
                    } else if (params.freeMode.sticky) {
                        swiper.slideToClosest();
                        return;
                    }

                    if (params.freeMode.momentumBounce && doBounce) {
                        swiper.updateProgress(afterBouncePosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(() => {
                            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                            emit('momentumBounce');
                            swiper.setTransition(params.speed);
                            setTimeout(() => {
                                swiper.setTranslate(afterBouncePosition);
                                $wrapperEl.transitionEnd(() => {
                                    if (!swiper || swiper.destroyed) return;
                                    swiper.transitionEnd();
                                });
                            }, 0);
                        });
                    } else if (swiper.velocity) {
                        emit('_freeModeNoMomentumRelease');
                        swiper.updateProgress(newPosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);

                        if (!swiper.animating) {
                            swiper.animating = true;
                            $wrapperEl.transitionEnd(() => {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }
                    } else {
                        swiper.updateProgress(newPosition);
                    }

                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                } else if (params.freeMode) {
                    emit('_freeModeNoMomentumRelease');
                }

                if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
            }

            Object.assign(swiper, {
                freeMode: {
                    onTouchStart,
                    onTouchMove,
                    onTouchEnd
                }
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/grid/grid.js
        function Grid(_ref) {
            let {
                swiper,
                extendParams
            } = _ref;
            extendParams({
                grid: {
                    rows: 1,
                    fill: 'column'
                }
            });
            let slidesNumberEvenToRows;
            let slidesPerRow;
            let numFullColumns;

            const initSlides = slidesLength => {
                const {
                    slidesPerView
                } = swiper.params;
                const {
                    rows,
                    fill
                } = swiper.params.grid;
                slidesPerRow = slidesNumberEvenToRows / rows;
                numFullColumns = Math.floor(slidesLength / rows);

                if (Math.floor(slidesLength / rows) === slidesLength / rows) {
                    slidesNumberEvenToRows = slidesLength;
                } else {
                    slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
                }

                if (slidesPerView !== 'auto' && fill === 'row') {
                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
                }
            };

            const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
                const {
                    slidesPerGroup,
                    spaceBetween
                } = swiper.params;
                const {
                    rows,
                    fill
                } = swiper.params.grid; // Set slides order

                let newSlideOrderIndex;
                let column;
                let row;

                if (fill === 'row' && slidesPerGroup > 1) {
                    const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                    const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                    const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                    row = Math.floor(slideIndexInGroup / columnsInGroup);
                    column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                    newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                    slide.css({
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex
                    });
                } else if (fill === 'column') {
                    column = Math.floor(i / rows);
                    row = i - column * rows;

                    if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                        row += 1;

                        if (row >= rows) {
                            row = 0;
                            column += 1;
                        }
                    }
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - row * slidesPerRow;
                }

                slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
            };

            const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
                const {
                    spaceBetween,
                    centeredSlides,
                    roundLengths
                } = swiper.params;
                const {
                    rows
                } = swiper.params.grid;
                swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
                swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
                swiper.$wrapperEl.css({
                    [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
                });

                if (centeredSlides) {
                    snapGrid.splice(0, snapGrid.length);
                    const newSlidesGrid = [];

                    for (let i = 0; i < snapGrid.length; i += 1) {
                        let slidesGridItem = snapGrid[i];
                        if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                    }

                    snapGrid.push(...newSlidesGrid);
                }
            };

            swiper.grid = {
                initSlides,
                updateSlide,
                updateWrapperSize
            };
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation/methods/appendSlide.js
        function appendSlide(slides) {
            const swiper = this;
            const {
                $wrapperEl,
                params
            } = swiper;

            if (params.loop) {
                swiper.loopDestroy();
            }

            if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) $wrapperEl.append(slides[i]);
                }
            } else {
                $wrapperEl.append(slides);
            }

            if (params.loop) {
                swiper.loopCreate();
            }

            if (!params.observer) {
                swiper.update();
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation/methods/prependSlide.js
        function prependSlide(slides) {
            const swiper = this;
            const {
                params,
                $wrapperEl,
                activeIndex
            } = swiper;

            if (params.loop) {
                swiper.loopDestroy();
            }

            let newActiveIndex = activeIndex + 1;

            if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) $wrapperEl.prepend(slides[i]);
                }

                newActiveIndex = activeIndex + slides.length;
            } else {
                $wrapperEl.prepend(slides);
            }

            if (params.loop) {
                swiper.loopCreate();
            }

            if (!params.observer) {
                swiper.update();
            }

            swiper.slideTo(newActiveIndex, 0, false);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation/methods/addSlide.js
        function addSlide(index, slides) {
            const swiper = this;
            const {
                $wrapperEl,
                params,
                activeIndex
            } = swiper;
            let activeIndexBuffer = activeIndex;

            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
            }

            const baseLength = swiper.slides.length;

            if (index <= 0) {
                swiper.prependSlide(slides);
                return;
            }

            if (index >= baseLength) {
                swiper.appendSlide(slides);
                return;
            }

            let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
            const slidesBuffer = [];

            for (let i = baseLength - 1; i >= index; i -= 1) {
                const currentSlide = swiper.slides.eq(i);
                currentSlide.remove();
                slidesBuffer.unshift(currentSlide);
            }

            if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) $wrapperEl.append(slides[i]);
                }

                newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
            } else {
                $wrapperEl.append(slides);
            }

            for (let i = 0; i < slidesBuffer.length; i += 1) {
                $wrapperEl.append(slidesBuffer[i]);
            }

            if (params.loop) {
                swiper.loopCreate();
            }

            if (!params.observer) {
                swiper.update();
            }

            if (params.loop) {
                swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
            } else {
                swiper.slideTo(newActiveIndex, 0, false);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation/methods/removeSlide.js
        function removeSlide(slidesIndexes) {
            const swiper = this;
            const {
                params,
                $wrapperEl,
                activeIndex
            } = swiper;
            let activeIndexBuffer = activeIndex;

            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
            }

            let newActiveIndex = activeIndexBuffer;
            let indexToRemove;

            if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
                for (let i = 0; i < slidesIndexes.length; i += 1) {
                    indexToRemove = slidesIndexes[i];
                    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                }

                newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
                indexToRemove = slidesIndexes;
                if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
                newActiveIndex = Math.max(newActiveIndex, 0);
            }

            if (params.loop) {
                swiper.loopCreate();
            }

            if (!params.observer) {
                swiper.update();
            }

            if (params.loop) {
                swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
            } else {
                swiper.slideTo(newActiveIndex, 0, false);
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation/methods/removeAllSlides.js
        function removeAllSlides() {
            const swiper = this;
            const slidesIndexes = [];

            for (let i = 0; i < swiper.slides.length; i += 1) {
                slidesIndexes.push(i);
            }

            swiper.removeSlide(slidesIndexes);
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/manipulation/manipulation.js


        function Manipulation(_ref) {
            let {
                swiper
            } = _ref;
            Object.assign(swiper, {
                appendSlide: appendSlide.bind(swiper),
                prependSlide: prependSlide.bind(swiper),
                addSlide: addSlide.bind(swiper),
                removeSlide: removeSlide.bind(swiper),
                removeAllSlides: removeAllSlides.bind(swiper)
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-init.js
        function effectInit(params) {
            const {
                effect,
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams,
                perspective
            } = params;
            on('beforeInit', () => {
                if (swiper.params.effect !== effect) return;
                swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

                if (perspective && perspective()) {
                    swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
                }

                const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
                Object.assign(swiper.params, overwriteParamsResult);
                Object.assign(swiper.originalParams, overwriteParamsResult);
            });
            on('setTranslate', () => {
                if (swiper.params.effect !== effect) return;
                setTranslate();
            });
            on('setTransition', (_s, duration) => {
                if (swiper.params.effect !== effect) return;
                setTransition(duration);
            });
            let requireUpdateOnVirtual;
            on('virtualUpdate', () => {
                if (!swiper.slides.length) {
                    requireUpdateOnVirtual = true;
                }

                requestAnimationFrame(() => {
                    if (requireUpdateOnVirtual && swiper.slides.length) {
                        setTranslate();
                        requireUpdateOnVirtual = false;
                    }
                });
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-target.js
        function effectTarget(effectParams, $slideEl) {
            if (effectParams.transformEl) {
                return $slideEl.find(effectParams.transformEl).css({
                    'backface-visibility': 'hidden',
                    '-webkit-backface-visibility': 'hidden'
                });
            }

            return $slideEl;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/effect-virtual-transition-end.js
        function effectVirtualTransitionEnd(_ref) {
            let {
                swiper,
                duration,
                transformEl,
                allSlides
            } = _ref;
            const {
                slides,
                activeIndex,
                $wrapperEl
            } = swiper;

            if (swiper.params.virtualTranslate && duration !== 0) {
                let eventTriggered = false;
                let $transitionEndTarget;

                if (allSlides) {
                    $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
                } else {
                    $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
                }

                $transitionEndTarget.transitionEnd(() => {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

                    for (let i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-fade/effect-fade.js


        function EffectFade(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                fadeEffect: {
                    crossFade: false,
                    transformEl: null
                }
            });

            const setTranslate = () => {
                const {
                    slides
                } = swiper;
                const params = swiper.params.fadeEffect;

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = swiper.slides.eq(i);
                    const offset = $slideEl[0].swiperSlideOffset;
                    let tx = -offset;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    let ty = 0;

                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }

                    const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.css({
                        opacity: slideOpacity
                    }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                }
            };

            const setTransition = duration => {
                const {
                    transformEl
                } = swiper.params.fadeEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl,
                    allSlides: true
                });
            };

            effectInit({
                effect: 'fade',
                swiper,
                on,
                setTranslate,
                setTransition,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cube/effect-cube.js


        function EffectCube(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            });

            const setTranslate = () => {
                const {
                    $el,
                    $wrapperEl,
                    slides,
                    width: swiperWidth,
                    height: swiperHeight,
                    rtlTranslate: rtl,
                    size: swiperSize,
                    browser
                } = swiper;
                const params = swiper.params.cubeEffect;
                const isHorizontal = swiper.isHorizontal();
                const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                let wrapperRotate = 0;
                let $cubeShadowEl;

                if (params.shadow) {
                    if (isHorizontal) {
                        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = dom('<div class="swiper-cube-shadow"></div>');
                            $wrapperEl.append($cubeShadowEl);
                        }

                        $cubeShadowEl.css({
                            height: `${swiperWidth}px`
                        });
                    } else {
                        $cubeShadowEl = $el.find('.swiper-cube-shadow');

                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = dom('<div class="swiper-cube-shadow"></div>');
                            $el.append($cubeShadowEl);
                        }
                    }
                }

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    let slideIndex = i;

                    if (isVirtual) {
                        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                    }

                    let slideAngle = slideIndex * 90;
                    let round = Math.floor(slideAngle / 360);

                    if (rtl) {
                        slideAngle = -slideAngle;
                        round = Math.floor(-slideAngle / 360);
                    }

                    const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    let tx = 0;
                    let ty = 0;
                    let tz = 0;

                    if (slideIndex % 4 === 0) {
                        tx = -round * 4 * swiperSize;
                        tz = 0;
                    } else if ((slideIndex - 1) % 4 === 0) {
                        tx = 0;
                        tz = -round * 4 * swiperSize;
                    } else if ((slideIndex - 2) % 4 === 0) {
                        tx = swiperSize + round * 4 * swiperSize;
                        tz = swiperSize;
                    } else if ((slideIndex - 3) % 4 === 0) {
                        tx = -swiperSize;
                        tz = 3 * swiperSize + swiperSize * 4 * round;
                    }

                    if (rtl) {
                        tx = -tx;
                    }

                    if (!isHorizontal) {
                        ty = tx;
                        tx = 0;
                    }

                    const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

                    if (progress <= 1 && progress > -1) {
                        wrapperRotate = slideIndex * 90 + progress * 90;
                        if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                    }

                    $slideEl.transform(transform);

                    if (params.slideShadows) {
                        // Set shadows
                        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                        if (shadowBefore.length === 0) {
                            shadowBefore = dom(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
                            $slideEl.append(shadowBefore);
                        }

                        if (shadowAfter.length === 0) {
                            shadowAfter = dom(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
                            $slideEl.append(shadowAfter);
                        }

                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }

                $wrapperEl.css({
                    '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
                    'transform-origin': `50% 50% -${swiperSize / 2}px`
                });

                if (params.shadow) {
                    if (isHorizontal) {
                        $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
                    } else {
                        const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                        const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                        const scale1 = params.shadowScale;
                        const scale2 = params.shadowScale / multiplier;
                        const offset = params.shadowOffset;
                        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
                    }
                }

                const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
                $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
            };

            const setTransition = duration => {
                const {
                    $el,
                    slides
                } = swiper;
                slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

                if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                    $el.find('.swiper-cube-shadow').transition(duration);
                }
            };

            effectInit({
                effect: 'cube',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true
                })
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/shared/create-shadow.js

        function createShadow(params, $slideEl, side) {
            const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
            const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
            let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

            if (!$shadowEl.length) {
                $shadowEl = dom(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
                $shadowContainer.append($shadowEl);
            }

            return $shadowEl;
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-flip/effect-flip.js


        function EffectFlip(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                flipEffect: {
                    slideShadows: true,
                    limitRotation: true,
                    transformEl: null
                }
            });

            const setTranslate = () => {
                const {
                    slides,
                    rtlTranslate: rtl
                } = swiper;
                const params = swiper.params.flipEffect;

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    let progress = $slideEl[0].progress;

                    if (swiper.params.flipEffect.limitRotation) {
                        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    }

                    const offset = $slideEl[0].swiperSlideOffset;
                    const rotate = -180 * progress;
                    let rotateY = rotate;
                    let rotateX = 0;
                    let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                    let ty = 0;

                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                        rotateX = -rotateY;
                        rotateY = 0;
                    } else if (rtl) {
                        rotateY = -rotateY;
                    }

                    $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

                    if (params.slideShadows) {
                        // Set shadows
                        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                        if (shadowBefore.length === 0) {
                            shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
                        }

                        if (shadowAfter.length === 0) {
                            shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
                        }

                        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
                        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }

                    const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform);
                }
            };

            const setTransition = duration => {
                const {
                    transformEl
                } = swiper.params.flipEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl
                });
            };

            effectInit({
                effect: 'flip',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js


        function EffectCoverflow(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: true,
                    transformEl: null
                }
            });

            const setTranslate = () => {
                const {
                    width: swiperWidth,
                    height: swiperHeight,
                    slides,
                    slidesSizesGrid
                } = swiper;
                const params = swiper.params.coverflowEffect;
                const isHorizontal = swiper.isHorizontal();
                const transform = swiper.translate;
                const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
                const rotate = isHorizontal ? params.rotate : -params.rotate;
                const translate = params.depth; // Each slide offset from center

                for (let i = 0, length = slides.length; i < length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideSize = slidesSizesGrid[i];
                    const slideOffset = $slideEl[0].swiperSlideOffset;
                    const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                    const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
                    let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                    let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

                    let translateZ = -translate * Math.abs(offsetMultiplier);
                    let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

                    if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                        stretch = parseFloat(params.stretch) / 100 * slideSize;
                    }

                    let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                    let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                    let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

                    if (Math.abs(translateX) < 0.001) translateX = 0;
                    if (Math.abs(translateY) < 0.001) translateY = 0;
                    if (Math.abs(translateZ) < 0.001) translateZ = 0;
                    if (Math.abs(rotateY) < 0.001) rotateY = 0;
                    if (Math.abs(rotateX) < 0.001) rotateX = 0;
                    if (Math.abs(scale) < 0.001) scale = 0;
                    const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(slideTransform);
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

                    if (params.slideShadows) {
                        // Set shadows
                        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

                        if ($shadowBeforeEl.length === 0) {
                            $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
                        }

                        if ($shadowAfterEl.length === 0) {
                            $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                        }

                        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                    }
                }
            };

            const setTransition = duration => {
                const {
                    transformEl
                } = swiper.params.coverflowEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            };

            effectInit({
                effect: 'coverflow',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    watchSlidesProgress: true
                })
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-creative/effect-creative.js


        function EffectCreative(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: false,
                    progressMultiplier: 1,
                    perspective: true,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    }
                }
            });

            const getTranslateValue = value => {
                if (typeof value === 'string') return value;
                return `${value}px`;
            };

            const setTranslate = () => {
                const {
                    slides,
                    $wrapperEl,
                    slidesSizesGrid
                } = swiper;
                const params = swiper.params.creativeEffect;
                const {
                    progressMultiplier: multiplier
                } = params;
                const isCenteredSlides = swiper.params.centeredSlides;

                if (isCenteredSlides) {
                    const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                    $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
                }

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideProgress = $slideEl[0].progress;
                    const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
                    let originalProgress = progress;

                    if (!isCenteredSlides) {
                        originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
                    }

                    const offset = $slideEl[0].swiperSlideOffset;
                    const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
                    const r = [0, 0, 0];
                    let custom = false;

                    if (!swiper.isHorizontal()) {
                        t[1] = t[0];
                        t[0] = 0;
                    }

                    let data = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };

                    if (progress < 0) {
                        data = params.next;
                        custom = true;
                    } else if (progress > 0) {
                        data = params.prev;
                        custom = true;
                    } // set translate


                    t.forEach((value, index) => {
                        t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                    }); // set rotates

                    r.forEach((value, index) => {
                        r[index] = data.rotate[index] * Math.abs(progress * multiplier);
                    });
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    const translateString = t.join(', ');
                    const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
                    const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                    const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                    const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

                    if (custom && data.shadow || !custom) {
                        let $shadowEl = $slideEl.children('.swiper-slide-shadow');

                        if ($shadowEl.length === 0 && data.shadow) {
                            $shadowEl = createShadow(params, $slideEl);
                        }

                        if ($shadowEl.length) {
                            const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                            $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                        }
                    }

                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform).css({
                        opacity: opacityString
                    });

                    if (data.origin) {
                        $targetEl.css('transform-origin', data.origin);
                    }
                }
            };

            const setTransition = duration => {
                const {
                    transformEl
                } = swiper.params.creativeEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl,
                    allSlides: true
                });
            };

            effectInit({
                effect: 'creative',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => swiper.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/modules/effect-cards/effect-cards.js


        function EffectCards(_ref) {
            let {
                swiper,
                extendParams,
                on
            } = _ref;
            extendParams({
                cardsEffect: {
                    slideShadows: true,
                    transformEl: null
                }
            });

            const setTranslate = () => {
                const {
                    slides,
                    activeIndex
                } = swiper;
                const params = swiper.params.cardsEffect;
                const {
                    startTranslate,
                    isTouched
                } = swiper.touchEventsData;
                const currentTranslate = swiper.translate;

                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = slides.eq(i);
                    const slideProgress = $slideEl[0].progress;
                    const progress = Math.min(Math.max(slideProgress, -4), 4);
                    let offset = $slideEl[0].swiperSlideOffset;

                    if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                        swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
                    }

                    if (swiper.params.centeredSlides && swiper.params.cssMode) {
                        offset -= slides[0].swiperSlideOffset;
                    }

                    let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                    let tY = 0;
                    const tZ = -100 * Math.abs(progress);
                    let scale = 1;
                    let rotate = -2 * progress;
                    let tXAdd = 8 - Math.abs(progress) * 0.75;
                    const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                    const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                    const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

                    if (isSwipeToNext || isSwipeToPrev) {
                        const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                        rotate += -28 * progress * subProgress;
                        scale += -0.5 * subProgress;
                        tXAdd += 96 * subProgress;
                        tY = `${-25 * subProgress * Math.abs(progress)}%`;
                    }

                    if (progress < 0) {
                        // next
                        tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
                    } else if (progress > 0) {
                        // prev
                        tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
                    } else {
                        tX = `${tX}px`;
                    }

                    if (!swiper.isHorizontal()) {
                        const prevY = tY;
                        tY = tX;
                        tX = prevY;
                    }

                    const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                    const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${rotate}deg)
        scale(${scaleString})
      `;

                    if (params.slideShadows) {
                        // Set shadows
                        let $shadowEl = $slideEl.find('.swiper-slide-shadow');

                        if ($shadowEl.length === 0) {
                            $shadowEl = createShadow(params, $slideEl);
                        }

                        if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                    }

                    $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                    const $targetEl = effectTarget(params, $slideEl);
                    $targetEl.transform(transform);
                }
            };

            const setTransition = duration => {
                const {
                    transformEl
                } = swiper.params.cardsEffect;
                const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
                $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
                effectVirtualTransitionEnd({
                    swiper,
                    duration,
                    transformEl
                });
            };

            effectInit({
                effect: 'cards',
                swiper,
                on,
                setTranslate,
                setTransition,
                perspective: () => true,
                overwriteParams: () => ({
                    watchSlidesProgress: true,
                    virtualTranslate: !swiper.params.cssMode
                })
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/swiper/swiper-bundle.esm.js
        /**
         * Swiper 8.0.7
         * Most modern mobile touch slider and framework with hardware accelerated transitions
         * https://swiperjs.com
         *
         * Copyright 2014-2022 Vladimir Kharlampidi
         *
         * Released under the MIT License
         *
         * Released on: March 4, 2022
         */

























            // Swiper Class

        const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
        core.use(modules);
        ;// CONCATENATED MODULE: ./src/js/servicesSlider.js

        function initServicesSlider() {
            const total = document.querySelector('.js-services-slider-total');
            const current = document.querySelector('.js-services-slider-current');

            const updateCounter = swiper => {
                if (!total || !current) {
                    return;
                }

                total.innerText = swiper.slides.length;
                current.innerText = swiper.realIndex + 1;
            };

            new core(".js-services-slider", {
                spaceBetween: 40,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.js-services-slider-next',
                    prevEl: '.js-services-slider-prev'
                },
                pagination: {
                    el: '.js-services-slider-scrollbar',
                    type: 'progressbar'
                },
                on: {
                    slideChange: updateCounter,
                    init: updateCounter
                }
            });
        }
        ;// CONCATENATED MODULE: ./src/js/mediaSlider.js

        function initMediaSlider() {
            new core(".js-media-slider", {
                spaceBetween: 40,
                slidesPerView: 2,
                loop: true,
                navigation: {
                    nextEl: '.js-media-slider-next',
                    prevEl: '.js-media-slider-prev'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 40
                    },
                    720: {
                        slidesPerView: 5,
                        spaceBetween: 15
                    },
                    521: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    220: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    }
                }
            });
        }
        ;// CONCATENATED MODULE: ./src/js/utils/helpers.js
        function isTouch() {
            try {
                document.createEvent('TouchEvent');
                return true;
            } catch (e) {
                return false;
            }
        }

        function isWindowSizeSmallerThen(size = 1020) {
            return document.body.offsetWidth < size;
        }

        function debounce(func, wait, immediate) {
            let timeout;
            return function executedFunction() {
                const context = this;
                const args = arguments;

                const later = function () {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };

                const callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
        ;
        ;// CONCATENATED MODULE: ./src/js/historyObserver.js

        function initHistoryObserver() {
            const historyItems = [...document.querySelectorAll('.js-history-item')];
            const historyYears = document.querySelector('.js-history-years');
            let moveFlag = false;
            let timeout = null;

            if (!historyItems || !historyYears) {
                return;
            }

            const historyYearsItems = [...historyYears.children];
            const currentYearElement = document.querySelector('.js-history-current');
            let prevIndex = 0;
            let currentIndex = 0;
            window.addEventListener('scroll', function () {
                if (moveFlag) {
                    return;
                }

                const thirdWindowHeight = window.innerHeight / 3;
                const windowScroll = window.scrollY;
                historyItems.forEach((item, index) => {
                    const offsetTop = item.getBoundingClientRect().top;
                    historyYearsItems[index].classList.remove('aboutCompanyHistory__contentYear--active');

                    if (offsetTop < thirdWindowHeight && offsetTop + item.clientHeight > thirdWindowHeight) {
                        currentYearElement.innerText = String(index + 1).padStart(2, '0');
                        historyYearsItems[index].classList.add('aboutCompanyHistory__contentYear--active');
                        currentIndex = index;
                    }
                });

                if (isWindowSizeSmallerThen() && currentIndex !== prevIndex) {
                    historyYears.scrollTo({
                        left: historyYearsItems[currentIndex].offsetLeft - 50,
                        behavior: 'smooth'
                    });
                    prevIndex = currentIndex;
                }

                if (windowScroll < historyItems[0].getBoundingClientRect().top + 50) {
                    historyYearsItems[0].classList.add('aboutCompanyHistory__contentYear--active');
                }

                if (historyItems[historyItems.length - 1].getBoundingClientRect().top < -historyItems[historyItems.length - 1].clientHeight * 0.7) {
                    historyYearsItems[historyItems.length - 1].classList.add('aboutCompanyHistory__contentYear--active');
                }
            });
            historyYearsItems.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    const id = link.getAttribute('href');
                    const element = document.querySelector(id);
                    window.scrollTo({
                        behavior: 'smooth',
                        top: element.getBoundingClientRect().top + window.scrollY + 5
                    });
                    moveFlag = true;
                    clearTimeout(timeout);
                    timeout = setTimeout(() => {
                        moveFlag = false;
                    }, 600);
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/classes/SlideToggle.js
        class SlideToggle {
            constructor(containerId, classname) {
                this.container = containerId && document.getElementById(containerId);
                this.classname = classname || 'active';
            }

            toggle() {
                if (!this.container) {
                    return;
                }

                if (!this.container.classList.contains(this.classname)) {
                    this.container.classList.add(this.classname);
                    this.container.style.height = 'auto';
                    const height = this.container.clientHeight + 'px';
                    this.container.style.height = '0px';
                    setTimeout(() => {
                        this.container.style.height = height;
                    }, 0);
                } else {
                    this.container.style.height = '0px';
                    this.container.addEventListener('transitionend', () => {
                        this.container.classList.remove(this.classname);
                    }, {
                        once: true
                    });
                }
            }

        }
        ;// CONCATENATED MODULE: ./src/js/footer.js


        function initFooter() {
            const footerToggles = document.querySelectorAll('.js-footer-slide');
            footerToggles.forEach(spoiler => {
                const SpoilerElement = new SlideToggle(spoiler.dataset.container, 'footer__links--active');
                spoiler.addEventListener('click', function () {
                    if (!isWindowSizeSmallerThen()) {
                        return;
                    }

                    spoiler.classList.toggle('footer__columnTitle--active');
                    SpoilerElement.toggle();
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/classes/Body.js
        let curTopPosition = 0;
        window.addEventListener('scroll', function() {
            curTopPosition = window.pageYOffset;
        });

        class Body {
            constructor() {
                this.scrollPosition = 0;
            }

            static fixBody() {
                const body = document.body;
                body.dataset.state = 'fixed';
                this.scrollPosition = curTopPosition;
                body.style.overflow = 'hidden';
                body.style.position = 'fixed';
                body.style.top = `-${this.scrollPosition}px`;
                body.style.width = '100%';
            }

            static releaseBody() {
                const body = document.body;
                body.dataset.state = 'released';
                body.style.removeProperty('overflow');
                body.style.removeProperty('position');
                body.style.removeProperty('top');
                body.style.removeProperty('width');
                window.scrollTo(0, this.scrollPosition);
            }

            static toggleBody() {
                document.body.dataset.state === 'fixed' ? this.releaseBody() : this.fixBody();
            }

        }
        ;// CONCATENATED MODULE: ./src/js/header.js


        function initHeader() {
            const menuButton = document.querySelector('.js-menu-button');
            menuButton.addEventListener('click', function () {
                const headerMenu = document.querySelector('.js-header-menu');
                menuButton.innerHTML = menuButton.innerHTML === "Меню" ? "Закрыть" : "Меню";
                headerMenu.classList.toggle('header__menu--active');
                Body.toggleBody();
            });
            toggleMobileMenu();
        }

        function toggleMobileMenu() {
            const mainMenuToggles = document.querySelectorAll('.js-menu-slide');
            mainMenuToggles.forEach(spoiler => {
                const SpoilerElement = new SlideToggle(spoiler.dataset.container, 'header__menuSubList--active');
                spoiler.addEventListener('click', function () {
                    if (!isWindowSizeSmallerThen()) {
                        return;
                    }

                    spoiler.classList.toggle('header__menuLinkItem--active');
                    SpoilerElement.toggle();
                });
            });
        } //header__menu--active
        ;// CONCATENATED MODULE: ./src/js/mainMediaSlider.js


        let swiperBigPhoto, swiperSmallPhotos;
        const breakpoint = window.matchMedia('(max-width: 1020px)');

        function initMainMediaSlider() {
            const bigPhotos = document.querySelector('.js-main-media-big-photos');
            const smallPhotos = document.querySelector('.js-main-media-small-photos');

            if (!bigPhotos && !smallPhotos) {
                return;
            }

            breakpoint.addListener(breakpointChecker);
            breakpointChecker();
        }

        function initSwipers() {
			
			
			
            swiperBigPhoto = new core('.js-main-media-big-photos', {
                slidesPerView: 'auto',
                spaceBetween: 40,
                loop: true,
                pagination: {
                    el: '.js-media-slider-scrollbar',
                    type: 'progressbar'
                }
            });
            swiperSmallPhotos = new core('.js-main-media-small-photos', {
                slidesPerView: 'auto',
                spaceBetween: 40,
				
                loop: true,
                navigation: {
                    nextEl: '.js-main-media-next',
                    prevEl: '.js-main-media-prev'
                },
				
            });
            swiperSmallPhotos.controller.control = swiperBigPhoto;
            swiperBigPhoto.controller.control = swiperSmallPhotos;
			
			
			
        }

        const breakpointChecker = function () {
            if (breakpoint.matches === true) {
                swiperBigPhoto && swiperBigPhoto.destroy(true, true);
                swiperSmallPhotos && swiperSmallPhotos.destroy(true, true);
            } else {
                return initSwipers();
            }
        };
        ;// CONCATENATED MODULE: ./src/js/museumGenerationsSlider.js

        function initMuseumGenerationsSlider() {
            const total = document.querySelector('.js-museum-slider-total');
            const current = document.querySelector('.js-museum-slider-current');

            const updateCounter = swiper => {
                if (!total || !current) {
                    return;
                }

                total.innerText = swiper.loopedSlides;
                current.innerText = swiper.realIndex + 1;
            };

            new core(".js-museum-slider", {
                spaceBetween: 40,
                slidesPerView: 'auto',
                initialSlide: 0,
                loop: true,
                navigation: {
                    nextEl: '.js-museum-slider-next',
                    prevEl: '.js-museum-slider-prev'
                },
                pagination: {
                    el: '.js-museum-slider-scrollbar',
                    type: 'progressbar'
                },
                on: {
                    slideChange: updateCounter,
                    init: updateCounter
                }
            });
        }
        ;// CONCATENATED MODULE: ./node_modules/lightgallery/lightgallery.es5.js
        /*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var __assign = function () {
            __assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];

                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }

                return t;
            };

            return __assign.apply(this, arguments);
        };

        function __spreadArrays() {
            for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

            for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

            return r;
        }

        /**
         * List of lightGallery events
         * All events should be documented here
         * Below interfaces are used to build the website documentations
         * */


        var lGEvents = {
            afterAppendSlide: 'lgAfterAppendSlide',
            init: 'lgInit',
            hasVideo: 'lgHasVideo',
            containerResize: 'lgContainerResize',
            updateSlides: 'lgUpdateSlides',
            afterAppendSubHtml: 'lgAfterAppendSubHtml',
            beforeOpen: 'lgBeforeOpen',
            afterOpen: 'lgAfterOpen',
            slideItemLoad: 'lgSlideItemLoad',
            beforeSlide: 'lgBeforeSlide',
            afterSlide: 'lgAfterSlide',
            posterClick: 'lgPosterClick',
            dragStart: 'lgDragStart',
            dragMove: 'lgDragMove',
            dragEnd: 'lgDragEnd',
            beforeNextSlide: 'lgBeforeNextSlide',
            beforePrevSlide: 'lgBeforePrevSlide',
            beforeClose: 'lgBeforeClose',
            afterClose: 'lgAfterClose',
            rotateLeft: 'lgRotateLeft',
            rotateRight: 'lgRotateRight',
            flipHorizontal: 'lgFlipHorizontal',
            flipVertical: 'lgFlipVertical',
            autoplay: 'lgAutoplay',
            autoplayStart: 'lgAutoplayStart',
            autoplayStop: 'lgAutoplayStop'
        };
        var lightGalleryCoreSettings = {
            mode: 'lg-slide',
            easing: 'ease',
            speed: 400,
            licenseKey: '0000-0000-000-0000',
            height: '100%',
            width: '100%',
            addClass: '',
            startClass: 'lg-start-zoom',
            backdropDuration: 300,
            container: '',
            startAnimationDuration: 400,
            zoomFromOrigin: true,
            hideBarsDelay: 0,
            showBarsAfter: 10000,
            slideDelay: 0,
            supportLegacyBrowser: true,
            allowMediaOverlap: false,
            videoMaxSize: '1280-720',
            loadYouTubePoster: true,
            defaultCaptionHeight: 0,
            ariaLabelledby: '',
            ariaDescribedby: '',
            closable: true,
            swipeToClose: true,
            closeOnTap: true,
            showCloseIcon: true,
            showMaximizeIcon: false,
            loop: true,
            escKey: true,
            keyPress: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: false,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: '.lg-sub-html',
            subHtmlSelectorRelative: false,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            selector: '',
            selectWithin: '',
            nextHtml: '',
            prevHtml: '',
            index: 0,
            iframeWidth: '100%',
            iframeHeight: '100%',
            iframeMaxWidth: '100%',
            iframeMaxHeight: '100%',
            download: true,
            counter: true,
            appendCounterTo: '.lg-toolbar',
            swipeThreshold: 50,
            enableSwipe: true,
            enableDrag: true,
            dynamic: false,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: '',
            isMobile: undefined,
            mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false
            },
            plugins: [],
            strings: {
                closeGallery: 'Close gallery',
                toggleMaximize: 'Toggle maximize',
                previousSlide: 'Previous slide',
                nextSlide: 'Next slide',
                download: 'Download',
                playVideo: 'Play video'
            }
        };

        function initLgPolyfills() {
            (function () {
                if (typeof window.CustomEvent === 'function') return false;

                function CustomEvent(event, params) {
                    params = params || {
                        bubbles: false,
                        cancelable: false,
                        detail: null
                    };
                    var evt = document.createEvent('CustomEvent');
                    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                    return evt;
                }

                window.CustomEvent = CustomEvent;
            })();

            (function () {
                if (!Element.prototype.matches) {
                    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
                }
            })();
        }

        var lgQuery =
            /** @class */
            function () {
                function lgQuery(selector) {
                    this.cssVenderPrefixes = ['TransitionDuration', 'TransitionTimingFunction', 'Transform', 'Transition'];
                    this.selector = this._getSelector(selector);
                    this.firstElement = this._getFirstEl();
                    return this;
                }

                lgQuery.generateUUID = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0,
                            v = c == 'x' ? r : r & 0x3 | 0x8;
                        return v.toString(16);
                    });
                };

                lgQuery.prototype._getSelector = function (selector, context) {
                    if (context === void 0) {
                        context = document;
                    }

                    if (typeof selector !== 'string') {
                        return selector;
                    }

                    context = context || document;
                    var fl = selector.substring(0, 1);

                    if (fl === '#') {
                        return context.querySelector(selector);
                    } else {
                        return context.querySelectorAll(selector);
                    }
                };

                lgQuery.prototype._each = function (func) {
                    if (!this.selector) {
                        return this;
                    }

                    if (this.selector.length !== undefined) {
                        [].forEach.call(this.selector, func);
                    } else {
                        func(this.selector, 0);
                    }

                    return this;
                };

                lgQuery.prototype._setCssVendorPrefix = function (el, cssProperty, value) {
                    // prettier-ignore
                    var property = cssProperty.replace(/-([a-z])/gi, function (s, group1) {
                        return group1.toUpperCase();
                    });

                    if (this.cssVenderPrefixes.indexOf(property) !== -1) {
                        el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
                        el.style['webkit' + property] = value;
                        el.style['moz' + property] = value;
                        el.style['ms' + property] = value;
                        el.style['o' + property] = value;
                    } else {
                        el.style[property] = value;
                    }
                };

                lgQuery.prototype._getFirstEl = function () {
                    if (this.selector && this.selector.length !== undefined) {
                        return this.selector[0];
                    } else {
                        return this.selector;
                    }
                };

                lgQuery.prototype.isEventMatched = function (event, eventName) {
                    var eventNamespace = eventName.split('.');
                    return event.split('.').filter(function (e) {
                        return e;
                    }).every(function (e) {
                        return eventNamespace.indexOf(e) !== -1;
                    });
                };

                lgQuery.prototype.attr = function (attr, value) {
                    if (value === undefined) {
                        if (!this.firstElement) {
                            return '';
                        }

                        return this.firstElement.getAttribute(attr);
                    }

                    this._each(function (el) {
                        el.setAttribute(attr, value);
                    });

                    return this;
                };

                lgQuery.prototype.find = function (selector) {
                    return $LG(this._getSelector(selector, this.selector));
                };

                lgQuery.prototype.first = function () {
                    if (this.selector && this.selector.length !== undefined) {
                        return $LG(this.selector[0]);
                    } else {
                        return $LG(this.selector);
                    }
                };

                lgQuery.prototype.eq = function (index) {
                    return $LG(this.selector[index]);
                };

                lgQuery.prototype.parent = function () {
                    return $LG(this.selector.parentElement);
                };

                lgQuery.prototype.get = function () {
                    return this._getFirstEl();
                };

                lgQuery.prototype.removeAttr = function (attributes) {
                    var attrs = attributes.split(' ');

                    this._each(function (el) {
                        attrs.forEach(function (attr) {
                            return el.removeAttribute(attr);
                        });
                    });

                    return this;
                };

                lgQuery.prototype.wrap = function (className) {
                    if (!this.firstElement) {
                        return this;
                    }

                    var wrapper = document.createElement('div');
                    wrapper.className = className;
                    this.firstElement.parentNode.insertBefore(wrapper, this.firstElement);
                    this.firstElement.parentNode.removeChild(this.firstElement);
                    wrapper.appendChild(this.firstElement);
                    return this;
                };

                lgQuery.prototype.addClass = function (classNames) {
                    if (classNames === void 0) {
                        classNames = '';
                    }

                    this._each(function (el) {
                        // IE doesn't support multiple arguments
                        classNames.split(' ').forEach(function (className) {
                            if (className) {
                                el.classList.add(className);
                            }
                        });
                    });

                    return this;
                };

                lgQuery.prototype.removeClass = function (classNames) {
                    this._each(function (el) {
                        // IE doesn't support multiple arguments
                        classNames.split(' ').forEach(function (className) {
                            if (className) {
                                el.classList.remove(className);
                            }
                        });
                    });

                    return this;
                };

                lgQuery.prototype.hasClass = function (className) {
                    if (!this.firstElement) {
                        return false;
                    }

                    return this.firstElement.classList.contains(className);
                };

                lgQuery.prototype.hasAttribute = function (attribute) {
                    if (!this.firstElement) {
                        return false;
                    }

                    return this.firstElement.hasAttribute(attribute);
                };

                lgQuery.prototype.toggleClass = function (className) {
                    if (!this.firstElement) {
                        return this;
                    }

                    if (this.hasClass(className)) {
                        this.removeClass(className);
                    } else {
                        this.addClass(className);
                    }

                    return this;
                };

                lgQuery.prototype.css = function (property, value) {
                    var _this = this;

                    this._each(function (el) {
                        _this._setCssVendorPrefix(el, property, value);
                    });

                    return this;
                }; // Need to pass separate namespaces for separate elements


                lgQuery.prototype.on = function (events, listener) {
                    var _this = this;

                    if (!this.selector) {
                        return this;
                    }

                    events.split(' ').forEach(function (event) {
                        if (!Array.isArray(lgQuery.eventListeners[event])) {
                            lgQuery.eventListeners[event] = [];
                        }

                        lgQuery.eventListeners[event].push(listener);

                        _this.selector.addEventListener(event.split('.')[0], listener);
                    });
                    return this;
                }; // @todo - test this


                lgQuery.prototype.once = function (event, listener) {
                    var _this = this;

                    this.on(event, function () {
                        _this.off(event);

                        listener(event);
                    });
                    return this;
                };

                lgQuery.prototype.off = function (event) {
                    var _this = this;

                    if (!this.selector) {
                        return this;
                    }

                    Object.keys(lgQuery.eventListeners).forEach(function (eventName) {
                        if (_this.isEventMatched(event, eventName)) {
                            lgQuery.eventListeners[eventName].forEach(function (listener) {
                                _this.selector.removeEventListener(eventName.split('.')[0], listener);
                            });
                            lgQuery.eventListeners[eventName] = [];
                        }
                    });
                    return this;
                };

                lgQuery.prototype.trigger = function (event, detail) {
                    if (!this.firstElement) {
                        return this;
                    }

                    var customEvent = new CustomEvent(event.split('.')[0], {
                        detail: detail || null
                    });
                    this.firstElement.dispatchEvent(customEvent);
                    return this;
                }; // Does not support IE


                lgQuery.prototype.load = function (url) {
                    var _this = this;

                    fetch(url).then(function (res) {
                        return res.text();
                    }).then(function (html) {
                        _this.selector.innerHTML = html;
                    });
                    return this;
                };

                lgQuery.prototype.html = function (html) {
                    if (html === undefined) {
                        if (!this.firstElement) {
                            return '';
                        }

                        return this.firstElement.innerHTML;
                    }

                    this._each(function (el) {
                        el.innerHTML = html;
                    });

                    return this;
                };

                lgQuery.prototype.append = function (html) {
                    this._each(function (el) {
                        if (typeof html === 'string') {
                            el.insertAdjacentHTML('beforeend', html);
                        } else {
                            el.appendChild(html);
                        }
                    });

                    return this;
                };

                lgQuery.prototype.prepend = function (html) {
                    this._each(function (el) {
                        el.insertAdjacentHTML('afterbegin', html);
                    });

                    return this;
                };

                lgQuery.prototype.remove = function () {
                    this._each(function (el) {
                        el.parentNode.removeChild(el);
                    });

                    return this;
                };

                lgQuery.prototype.empty = function () {
                    this._each(function (el) {
                        el.innerHTML = '';
                    });

                    return this;
                };

                lgQuery.prototype.scrollTop = function (scrollTop) {
                    if (scrollTop !== undefined) {
                        document.body.scrollTop = scrollTop;
                        document.documentElement.scrollTop = scrollTop;
                        return this;
                    } else {
                        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                    }
                };

                lgQuery.prototype.scrollLeft = function (scrollLeft) {
                    if (scrollLeft !== undefined) {
                        document.body.scrollLeft = scrollLeft;
                        document.documentElement.scrollLeft = scrollLeft;
                        return this;
                    } else {
                        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
                    }
                };

                lgQuery.prototype.offset = function () {
                    if (!this.firstElement) {
                        return {
                            left: 0,
                            top: 0
                        };
                    }

                    var rect = this.firstElement.getBoundingClientRect();
                    var bodyMarginLeft = $LG('body').style().marginLeft; // Minus body margin - https://stackoverflow.com/questions/30711548/is-getboundingclientrect-left-returning-a-wrong-value

                    return {
                        left: rect.left - parseFloat(bodyMarginLeft) + this.scrollLeft(),
                        top: rect.top + this.scrollTop()
                    };
                };

                lgQuery.prototype.style = function () {
                    if (!this.firstElement) {
                        return {};
                    }

                    return this.firstElement.currentStyle || window.getComputedStyle(this.firstElement);
                }; // Width without padding and border even if box-sizing is used.


                lgQuery.prototype.width = function () {
                    var style = this.style();
                    return this.firstElement.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
                }; // Height without padding and border even if box-sizing is used.


                lgQuery.prototype.height = function () {
                    var style = this.style();
                    return this.firstElement.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom);
                };

                lgQuery.eventListeners = {};
                return lgQuery;
            }();

        function $LG(selector) {
            initLgPolyfills();
            return new lgQuery(selector);
        }

        var defaultDynamicOptions = ['src', 'sources', 'subHtml', 'subHtmlUrl', 'html', 'video', 'poster', 'slideName', 'responsive', 'srcset', 'sizes', 'iframe', 'downloadUrl', 'download', 'width', 'facebookShareUrl', 'tweetText', 'iframeTitle', 'twitterShareUrl', 'pinterestShareUrl', 'pinterestText', 'fbHtml', 'disqusIdentifier', 'disqusUrl']; // Convert html data-attribute to camalcase

        function convertToData(attr) {
            // FInd a way for lgsize
            if (attr === 'href') {
                return 'src';
            }

            attr = attr.replace('data-', '');
            attr = attr.charAt(0).toLowerCase() + attr.slice(1);
            attr = attr.replace(/-([a-z])/g, function (g) {
                return g[1].toUpperCase();
            });
            return attr;
        }

        var utils = {
            /**
             * get possible width and height from the lgSize attribute. Used for ZoomFromOrigin option
             */
            getSize: function (el, container, spacing, defaultLgSize) {
                if (spacing === void 0) {
                    spacing = 0;
                }

                var LGel = $LG(el);
                var lgSize = LGel.attr('data-lg-size') || defaultLgSize;

                if (!lgSize) {
                    return;
                }

                var isResponsiveSizes = lgSize.split(','); // if at-least two viewport sizes are available

                if (isResponsiveSizes[1]) {
                    var wWidth = window.innerWidth;

                    for (var i = 0; i < isResponsiveSizes.length; i++) {
                        var size_1 = isResponsiveSizes[i];
                        var responsiveWidth = parseInt(size_1.split('-')[2], 10);

                        if (responsiveWidth > wWidth) {
                            lgSize = size_1;
                            break;
                        } // take last item as last option


                        if (i === isResponsiveSizes.length - 1) {
                            lgSize = size_1;
                        }
                    }
                }

                var size = lgSize.split('-');
                var width = parseInt(size[0], 10);
                var height = parseInt(size[1], 10);
                var cWidth = container.width();
                var cHeight = container.height() - spacing;
                var maxWidth = Math.min(cWidth, width);
                var maxHeight = Math.min(cHeight, height);
                var ratio = Math.min(maxWidth / width, maxHeight / height);
                return {
                    width: width * ratio,
                    height: height * ratio
                };
            },

            /**
             * @desc Get transform value based on the imageSize. Used for ZoomFromOrigin option
             * @param {jQuery Element}
             * @returns {String} Transform CSS string
             */
            getTransform: function (el, container, top, bottom, imageSize) {
                if (!imageSize) {
                    return;
                }

                var LGel = $LG(el).find('img').first();

                if (!LGel.get()) {
                    return;
                }

                var containerRect = container.get().getBoundingClientRect();
                var wWidth = containerRect.width; // using innerWidth to include mobile safari bottom bar

                var wHeight = container.height() - (top + bottom);
                var elWidth = LGel.width();
                var elHeight = LGel.height();
                var elStyle = LGel.style();
                var x = (wWidth - elWidth) / 2 - LGel.offset().left + (parseFloat(elStyle.paddingLeft) || 0) + (parseFloat(elStyle.borderLeft) || 0) + $LG(window).scrollLeft() + containerRect.left;
                var y = (wHeight - elHeight) / 2 - LGel.offset().top + (parseFloat(elStyle.paddingTop) || 0) + (parseFloat(elStyle.borderTop) || 0) + $LG(window).scrollTop() + top;
                var scX = elWidth / imageSize.width;
                var scY = elHeight / imageSize.height;
                var transform = 'translate3d(' + (x *= -1) + 'px, ' + (y *= -1) + 'px, 0) scale3d(' + scX + ', ' + scY + ', 1)';
                return transform;
            },
            getIframeMarkup: function (iframeWidth, iframeHeight, iframeMaxWidth, iframeMaxHeight, src, iframeTitle) {
                var title = iframeTitle ? 'title="' + iframeTitle + '"' : '';
                return "<div class=\"lg-video-cont lg-has-iframe\" style=\"width:" + iframeWidth + "; max-width:" + iframeMaxWidth + "; height: " + iframeHeight + "; max-height:" + iframeMaxHeight + "\">\n                    <iframe class=\"lg-object\" frameborder=\"0\" " + title + " src=\"" + src + "\"  allowfullscreen=\"true\"></iframe>\n                </div>";
            },
            getImgMarkup: function (index, src, altAttr, srcset, sizes, sources) {
                var srcsetAttr = srcset ? "srcset=\"" + srcset + "\"" : '';
                var sizesAttr = sizes ? "sizes=\"" + sizes + "\"" : '';
                var imgMarkup = "<img " + altAttr + " " + srcsetAttr + "  " + sizesAttr + " class=\"lg-object lg-image\" data-index=\"" + index + "\" src=\"" + src + "\" />";
                var sourceTag = '';

                if (sources) {
                    var sourceObj = typeof sources === 'string' ? JSON.parse(sources) : sources;
                    sourceTag = sourceObj.map(function (source) {
                        var attrs = '';
                        Object.keys(source).forEach(function (key) {
                            // Do not remove the first space as it is required to separate the attributes
                            attrs += " " + key + "=\"" + source[key] + "\"";
                        });
                        return "<source " + attrs + "></source>";
                    });
                }

                return "" + sourceTag + imgMarkup;
            },
            // Get src from responsive src
            getResponsiveSrc: function (srcItms) {
                var rsWidth = [];
                var rsSrc = [];
                var src = '';

                for (var i = 0; i < srcItms.length; i++) {
                    var _src = srcItms[i].split(' '); // Manage empty space


                    if (_src[0] === '') {
                        _src.splice(0, 1);
                    }

                    rsSrc.push(_src[0]);
                    rsWidth.push(_src[1]);
                }

                var wWidth = window.innerWidth;

                for (var j = 0; j < rsWidth.length; j++) {
                    if (parseInt(rsWidth[j], 10) > wWidth) {
                        src = rsSrc[j];
                        break;
                    }
                }

                return src;
            },
            isImageLoaded: function (img) {
                if (!img) return false; // During the onload event, IE correctly identifies any images that
                // weren’t downloaded as not complete. Others should too. Gecko-based
                // browsers act like NS4 in that they report this incorrectly.

                if (!img.complete) {
                    return false;
                } // However, they do have two very useful properties: naturalWidth and
                // naturalHeight. These give the true size of the image. If it failed
                // to load, either of these should be zero.


                if (img.naturalWidth === 0) {
                    return false;
                } // No other way of checking: assume it’s ok.


                return true;
            },
            getVideoPosterMarkup: function (_poster, dummyImg, videoContStyle, playVideoString, _isVideo) {
                var videoClass = '';

                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                return "<div class=\"lg-video-cont " + videoClass + "\" style=\"" + videoContStyle + "\">\n                <div class=\"lg-video-play-button\">\n                <svg\n                    viewBox=\"0 0 20 20\"\n                    preserveAspectRatio=\"xMidYMid\"\n                    focusable=\"false\"\n                    aria-labelledby=\"" + playVideoString + "\"\n                    role=\"img\"\n                    class=\"lg-video-play-icon\"\n                >\n                    <title>" + playVideoString + "</title>\n                    <polygon class=\"lg-video-play-icon-inner\" points=\"1,0 20,10 1,20\"></polygon>\n                </svg>\n                <svg class=\"lg-video-play-icon-bg\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle></svg>\n                <svg class=\"lg-video-play-icon-circle\" viewBox=\"0 0 50 50\" focusable=\"false\">\n                    <circle cx=\"50%\" cy=\"50%\" r=\"20\"></circle>\n                </svg>\n            </div>\n            " + (dummyImg || '') + "\n            <img class=\"lg-object lg-video-poster\" src=\"" + _poster + "\" />\n        </div>";
            },

            /**
             * @desc Create dynamic elements array from gallery items when dynamic option is false
             * It helps to avoid frequent DOM interaction
             * and avoid multiple checks for dynamic elments
             *
             * @returns {Array} dynamicEl
             */
            getDynamicOptions: function (items, extraProps, getCaptionFromTitleOrAlt, exThumbImage) {
                var dynamicElements = [];

                var availableDynamicOptions = __spreadArrays(defaultDynamicOptions, extraProps);

                [].forEach.call(items, function (item) {
                    var dynamicEl = {};

                    for (var i = 0; i < item.attributes.length; i++) {
                        var attr = item.attributes[i];

                        if (attr.specified) {
                            var dynamicAttr = convertToData(attr.name);
                            var label = '';

                            if (availableDynamicOptions.indexOf(dynamicAttr) > -1) {
                                label = dynamicAttr;
                            }

                            if (label) {
                                dynamicEl[label] = attr.value;
                            }
                        }
                    }

                    var currentItem = $LG(item);
                    var alt = currentItem.find('img').first().attr('alt');
                    var title = currentItem.attr('title');
                    var thumb = exThumbImage ? currentItem.attr(exThumbImage) : currentItem.find('img').first().attr('src');
                    dynamicEl.thumb = thumb;

                    if (getCaptionFromTitleOrAlt && !dynamicEl.subHtml) {
                        dynamicEl.subHtml = title || alt || '';
                    }

                    dynamicEl.alt = alt || title || '';
                    dynamicElements.push(dynamicEl);
                });
                return dynamicElements;
            },
            isMobile: function () {
                return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            },

            /**
             * @desc Check the given src is video
             * @param {String} src
             * @return {Object} video type
             * Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
             *
             * @todo - this information can be moved to dynamicEl to avoid frequent calls
             */
            isVideo: function (src, isHTML5VIdeo, index) {
                if (!src) {
                    if (isHTML5VIdeo) {
                        return {
                            html5: true
                        };
                    } else {
                        console.error('lightGallery :- data-src is not provided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/');
                        return;
                    }
                }

                var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i);
                var vimeo = src.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i);
                var wistia = src.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);

                if (youtube) {
                    return {
                        youtube: youtube
                    };
                } else if (vimeo) {
                    return {
                        vimeo: vimeo
                    };
                } else if (wistia) {
                    return {
                        wistia: wistia
                    };
                }
            }
        }; // @ref - https://stackoverflow.com/questions/3971841/how-to-resize-images-proportionally-keeping-the-aspect-ratio
// @ref - https://2ality.com/2017/04/setting-up-multi-platform-packages.html
// Unique id for each gallery

        var lgId = 0;

        var LightGallery =
            /** @class */
            function () {
                function LightGallery(element, options) {
                    this.lgOpened = false;
                    this.index = 0; // lightGallery modules

                    this.plugins = []; // false when lightGallery load first slide content;

                    this.lGalleryOn = false; // True when a slide animation is in progress

                    this.lgBusy = false;
                    this.currentItemsInDom = []; // Scroll top value before lightGallery is opened

                    this.prevScrollTop = 0;
                    this.isDummyImageRemoved = false;
                    this.dragOrSwipeEnabled = false;
                    this.mediaContainerPosition = {
                        top: 0,
                        bottom: 0
                    };

                    if (!element) {
                        return this;
                    }

                    lgId++;
                    this.lgId = lgId;
                    this.el = element;
                    this.LGel = $LG(element);
                    this.generateSettings(options);
                    this.buildModules(); // When using dynamic mode, ensure dynamicEl is an array

                    if (this.settings.dynamic && this.settings.dynamicEl !== undefined && !Array.isArray(this.settings.dynamicEl)) {
                        throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
                    }

                    this.galleryItems = this.getItems();
                    this.normalizeSettings(); // Gallery items

                    this.init();
                    this.validateLicense();
                    return this;
                }

                LightGallery.prototype.generateSettings = function (options) {
                    // lightGallery settings
                    this.settings = __assign(__assign({}, lightGalleryCoreSettings), options);

                    if (this.settings.isMobile && typeof this.settings.isMobile === 'function' ? this.settings.isMobile() : utils.isMobile()) {
                        var mobileSettings = __assign(__assign({}, this.settings.mobileSettings), this.settings.mobileSettings);

                        this.settings = __assign(__assign({}, this.settings), mobileSettings);
                    }
                };

                LightGallery.prototype.normalizeSettings = function () {
                    if (this.settings.slideEndAnimation) {
                        this.settings.hideControlOnEnd = false;
                    }

                    if (!this.settings.closable) {
                        this.settings.swipeToClose = false;
                    } // And reset it on close to get the correct value next time


                    this.zoomFromOrigin = this.settings.zoomFromOrigin; // At the moment, Zoom from image doesn't support dynamic options
                    // @todo add zoomFromOrigin support for dynamic images

                    if (this.settings.dynamic) {
                        this.zoomFromOrigin = false;
                    }

                    if (!this.settings.container) {
                        this.settings.container = document.body;
                    } // settings.preload should not be grater than $item.length


                    this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length);
                };

                LightGallery.prototype.init = function () {
                    var _this = this;

                    this.addSlideVideoInfo(this.galleryItems);
                    this.buildStructure();
                    this.LGel.trigger(lGEvents.init, {
                        instance: this
                    });

                    if (this.settings.keyPress) {
                        this.keyPress();
                    }

                    setTimeout(function () {
                        _this.enableDrag();

                        _this.enableSwipe();

                        _this.triggerPosterClick();
                    }, 50);
                    this.arrow();

                    if (this.settings.mousewheel) {
                        this.mousewheel();
                    }

                    if (!this.settings.dynamic) {
                        this.openGalleryOnItemClick();
                    }
                };

                LightGallery.prototype.openGalleryOnItemClick = function () {
                    var _this = this;

                    var _loop_1 = function (index) {
                        var element = this_1.items[index];
                        var $element = $LG(element); // Using different namespace for click because click event should not unbind if selector is same object('this')
                        // @todo manage all event listners - should have namespace that represent element

                        var uuid = lgQuery.generateUUID();
                        $element.attr('data-lg-id', uuid).on("click.lgcustom-item-" + uuid, function (e) {
                            e.preventDefault();
                            var currentItemIndex = _this.settings.index || index;

                            _this.openGallery(currentItemIndex, element);
                        });
                    };

                    var this_1 = this; // Using for loop instead of using bubbling as the items can be any html element.

                    for (var index = 0; index < this.items.length; index++) {
                        _loop_1(index);
                    }
                };
                /**
                 * Module constructor
                 * Modules are build incrementally.
                 * Gallery should be opened only once all the modules are initialized.
                 * use moduleBuildTimeout to make sure this
                 */


                LightGallery.prototype.buildModules = function () {
                    var _this = this;

                    this.settings.plugins.forEach(function (plugin) {
                        _this.plugins.push(new plugin(_this, $LG));
                    });
                };

                LightGallery.prototype.validateLicense = function () {
                    if (!this.settings.licenseKey) {
                        console.error('Please provide a valid license key');
                    } else if (this.settings.licenseKey === '0000-0000-000-0000') {
                        console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use");
                    }
                };

                LightGallery.prototype.getSlideItem = function (index) {
                    return $LG(this.getSlideItemId(index));
                };

                LightGallery.prototype.getSlideItemId = function (index) {
                    return "#lg-item-" + this.lgId + "-" + index;
                };

                LightGallery.prototype.getIdName = function (id) {
                    return id + "-" + this.lgId;
                };

                LightGallery.prototype.getElementById = function (id) {
                    return $LG("#" + this.getIdName(id));
                };

                LightGallery.prototype.manageSingleSlideClassName = function () {
                    if (this.galleryItems.length < 2) {
                        this.outer.addClass('lg-single-item');
                    } else {
                        this.outer.removeClass('lg-single-item');
                    }
                };

                LightGallery.prototype.buildStructure = function () {
                    var _this = this;

                    var container = this.$container && this.$container.get();

                    if (container) {
                        return;
                    }

                    var controls = '';
                    var subHtmlCont = ''; // Create controls

                    if (this.settings.controls) {
                        controls = "<button type=\"button\" id=\"" + this.getIdName('lg-prev') + "\" aria-label=\"" + this.settings.strings['previousSlide'] + "\" class=\"lg-prev lg-icon\"> " + this.settings.prevHtml + " </button>\n                <button type=\"button\" id=\"" + this.getIdName('lg-next') + "\" aria-label=\"" + this.settings.strings['nextSlide'] + "\" class=\"lg-next lg-icon\"> " + this.settings.nextHtml + " </button>";
                    }

                    if (this.settings.appendSubHtmlTo !== '.lg-item') {
                        subHtmlCont = '<div class="lg-sub-html" role="status" aria-live="polite"></div>';
                    }

                    var addClasses = '';

                    if (this.settings.allowMediaOverlap) {
                        // Do not remove space before last single quote
                        addClasses += 'lg-media-overlap ';
                    }

                    var ariaLabelledby = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : '';
                    var ariaDescribedby = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : '';
                    var containerClassName = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? 'lg-inline' : '');
                    var closeIcon = this.settings.closable && this.settings.showCloseIcon ? "<button type=\"button\" aria-label=\"" + this.settings.strings['closeGallery'] + "\" id=\"" + this.getIdName('lg-close') + "\" class=\"lg-close lg-icon\"></button>" : '';
                    var maximizeIcon = this.settings.showMaximizeIcon ? "<button type=\"button\" aria-label=\"" + this.settings.strings['toggleMaximize'] + "\" id=\"" + this.getIdName('lg-maximize') + "\" class=\"lg-maximize lg-icon\"></button>" : '';
                    var template = "\n        <div class=\"" + containerClassName + "\" id=\"" + this.getIdName('lg-container') + "\" tabindex=\"-1\" aria-modal=\"true\" " + ariaLabelledby + " " + ariaDescribedby + " role=\"dialog\"\n        >\n            <div id=\"" + this.getIdName('lg-backdrop') + "\" class=\"lg-backdrop\"></div>\n\n            <div id=\"" + this.getIdName('lg-outer') + "\" class=\"lg-outer lg-use-css3 lg-css3 lg-hide-items " + addClasses + " \">\n\n              <div id=\"" + this.getIdName('lg-content') + "\" class=\"lg-content\">\n                <div id=\"" + this.getIdName('lg-inner') + "\" class=\"lg-inner\">\n                </div>\n                " + controls + "\n              </div>\n                <div id=\"" + this.getIdName('lg-toolbar') + "\" class=\"lg-toolbar lg-group\">\n                    " + maximizeIcon + "\n                    " + closeIcon + "\n                    </div>\n                    " + (this.settings.appendSubHtmlTo === '.lg-outer' ? subHtmlCont : '') + "\n                <div id=\"" + this.getIdName('lg-components') + "\" class=\"lg-components\">\n                    " + (this.settings.appendSubHtmlTo === '.lg-sub-html' ? subHtmlCont : '') + "\n                </div>\n            </div>\n        </div>\n        ";
                    $LG(this.settings.container).append(template);

                    if (document.body !== this.settings.container) {
                        $LG(this.settings.container).css('position', 'relative');
                    }

                    this.outer = this.getElementById('lg-outer');
                    this.$lgComponents = this.getElementById('lg-components');
                    this.$backdrop = this.getElementById('lg-backdrop');
                    this.$container = this.getElementById('lg-container');
                    this.$inner = this.getElementById('lg-inner');
                    this.$content = this.getElementById('lg-content');
                    this.$toolbar = this.getElementById('lg-toolbar');
                    this.$backdrop.css('transition-duration', this.settings.backdropDuration + 'ms');
                    var outerClassNames = this.settings.mode + " ";
                    this.manageSingleSlideClassName();

                    if (this.settings.enableDrag) {
                        outerClassNames += 'lg-grab ';
                    }

                    this.outer.addClass(outerClassNames);
                    this.$inner.css('transition-timing-function', this.settings.easing);
                    this.$inner.css('transition-duration', this.settings.speed + 'ms');

                    if (this.settings.download) {
                        this.$toolbar.append("<a id=\"" + this.getIdName('lg-download') + "\" target=\"_blank\" rel=\"noopener\" aria-label=\"" + this.settings.strings['download'] + "\" download class=\"lg-download lg-icon\"></a>");
                    }

                    this.counter();
                    $LG(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, function () {
                        _this.refreshOnResize();
                    });
                    this.hideBars();
                    this.manageCloseGallery();
                    this.toggleMaximize();
                    this.initModules();
                };

                LightGallery.prototype.refreshOnResize = function () {
                    if (this.lgOpened) {
                        var currentGalleryItem = this.galleryItems[this.index];
                        var __slideVideoInfo = currentGalleryItem.__slideVideoInfo;
                        this.mediaContainerPosition = this.getMediaContainerPosition();
                        var _a = this.mediaContainerPosition,
                            top_1 = _a.top,
                            bottom = _a.bottom;
                        this.currentImageSize = utils.getSize(this.items[this.index], this.outer, top_1 + bottom, __slideVideoInfo && this.settings.videoMaxSize);

                        if (__slideVideoInfo) {
                            this.resizeVideoSlide(this.index, this.currentImageSize);
                        }

                        if (this.zoomFromOrigin && !this.isDummyImageRemoved) {
                            var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                            this.outer.find('.lg-current .lg-dummy-img').first().attr('style', imgStyle);
                        }

                        this.LGel.trigger(lGEvents.containerResize);
                    }
                };

                LightGallery.prototype.resizeVideoSlide = function (index, imageSize) {
                    var lgVideoStyle = this.getVideoContStyle(imageSize);
                    var currentSlide = this.getSlideItem(index);
                    currentSlide.find('.lg-video-cont').attr('style', lgVideoStyle);
                };
                /**
                 * Update slides dynamically.
                 * Add, edit or delete slides dynamically when lightGallery is opened.
                 * Modify the current gallery items and pass it via updateSlides method
                 * @note
                 * - Do not mutate existing lightGallery items directly.
                 * - Always pass new list of gallery items
                 * - You need to take care of thumbnails outside the gallery if any
                 * - user this method only if you want to update slides when the gallery is opened. Otherwise, use `refresh()` method.
                 * @param items Gallery items
                 * @param index After the update operation, which slide gallery should navigate to
                 * @category lGPublicMethods
                 * @example
                 * const plugin = lightGallery();
                 *
                 * // Adding slides dynamically
                 * let galleryItems = [
                 * // Access existing lightGallery items
                 * // galleryItems are automatically generated internally from the gallery HTML markup
                 * // or directly from galleryItems when dynamic gallery is used
                 *   ...plugin.galleryItems,
                 *     ...[
                 *       {
                 *         src: 'img/img-1.png',
                 *           thumb: 'img/thumb1.png',
                 *         },
                 *     ],
                 *   ];
                 *   plugin.updateSlides(
                 *     galleryItems,
                 *     plugin.index,
                 *   );
                 *
                 *
                 * // Remove slides dynamically
                 * galleryItems = JSON.parse(
                 *   JSON.stringify(updateSlideInstance.galleryItems),
                 * );
                 * galleryItems.shift();
                 * updateSlideInstance.updateSlides(galleryItems, 1);
                 * @see <a href="/demos/update-slides/">Demo</a>
                 */


                LightGallery.prototype.updateSlides = function (items, index) {
                    if (this.index > items.length - 1) {
                        this.index = items.length - 1;
                    }

                    if (items.length === 1) {
                        this.index = 0;
                    }

                    if (!items.length) {
                        this.closeGallery();
                        return;
                    }

                    var currentSrc = this.galleryItems[index].src;
                    this.galleryItems = items;
                    this.updateControls();
                    this.$inner.empty();
                    this.currentItemsInDom = [];
                    var _index = 0; // Find the current index based on source value of the slide

                    this.galleryItems.some(function (galleryItem, itemIndex) {
                        if (galleryItem.src === currentSrc) {
                            _index = itemIndex;
                            return true;
                        }

                        return false;
                    });
                    this.currentItemsInDom = this.organizeSlideItems(_index, -1);
                    this.loadContent(_index, true);
                    this.getSlideItem(_index).addClass('lg-current');
                    this.index = _index;
                    this.updateCurrentCounter(_index);
                    this.LGel.trigger(lGEvents.updateSlides);
                }; // Get gallery items based on multiple conditions


                LightGallery.prototype.getItems = function () {
                    // Gallery items
                    this.items = [];

                    if (!this.settings.dynamic) {
                        if (this.settings.selector === 'this') {
                            this.items.push(this.el);
                        } else if (this.settings.selector) {
                            if (typeof this.settings.selector === 'string') {
                                if (this.settings.selectWithin) {
                                    var selectWithin = $LG(this.settings.selectWithin);
                                    this.items = selectWithin.find(this.settings.selector).get();
                                } else {
                                    this.items = this.el.querySelectorAll(this.settings.selector);
                                }
                            } else {
                                this.items = this.settings.selector;
                            }
                        } else {
                            this.items = this.el.children;
                        }

                        return utils.getDynamicOptions(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage);
                    } else {
                        return this.settings.dynamicEl || [];
                    }
                };
                /**
                 * Open lightGallery.
                 * Open gallery with specific slide by passing index of the slide as parameter.
                 * @category lGPublicMethods
                 * @param {Number} index  - index of the slide
                 * @param {HTMLElement} element - Which image lightGallery should zoom from
                 *
                 * @example
                 * const $dynamicGallery = document.getElementById('dynamic-gallery-demo');
                 * const dynamicGallery = lightGallery($dynamicGallery, {
                 *     dynamic: true,
                 *     dynamicEl: [
                 *         {
                 *              src: 'img/1.jpg',
                 *              thumb: 'img/thumb-1.jpg',
                 *              subHtml: '<h4>Image 1 title</h4><p>Image 1 descriptions.</p>',
                 *         },
                 *         ...
                 *     ],
                 * });
                 * $dynamicGallery.addEventListener('click', function () {
                 *     // Starts with third item.(Optional).
                 *     // This is useful if you want use dynamic mode with
                 *     // custom thumbnails (thumbnails outside gallery),
                 *     dynamicGallery.openGallery(2);
                 * });
                 *
                 */


                LightGallery.prototype.openGallery = function (index, element) {
                    var _this = this;

                    if (index === void 0) {
                        index = this.settings.index;
                    } // prevent accidental double execution


                    if (this.lgOpened) return;
                    this.lgOpened = true;
                    this.outer.get().focus();
                    this.outer.removeClass('lg-hide-items'); // Add display block, but still has opacity 0

                    this.$container.addClass('lg-show');
                    var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, index);
                    this.currentItemsInDom = itemsToBeInsertedToDom;
                    var items = '';
                    itemsToBeInsertedToDom.forEach(function (item) {
                        items = items + ("<div id=\"" + item + "\" class=\"lg-item\"></div>");
                    });
                    this.$inner.append(items);
                    this.addHtml(index);
                    var transform = '';
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var _a = this.mediaContainerPosition,
                        top = _a.top,
                        bottom = _a.bottom;

                    if (!this.settings.allowMediaOverlap) {
                        this.setMediaContainerPosition(top, bottom);
                    }

                    var __slideVideoInfo = this.galleryItems[index].__slideVideoInfo;

                    if (this.zoomFromOrigin && element) {
                        this.currentImageSize = utils.getSize(element, this.outer, top + bottom, __slideVideoInfo && this.settings.videoMaxSize);
                        transform = utils.getTransform(element, this.outer, top, bottom, this.currentImageSize);
                    }

                    if (!this.zoomFromOrigin || !transform) {
                        this.outer.addClass(this.settings.startClass);
                        this.getSlideItem(index).removeClass('lg-complete');
                    }

                    var timeout = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                    setTimeout(function () {
                        _this.outer.addClass('lg-components-open');
                    }, timeout);
                    this.index = index;
                    this.LGel.trigger(lGEvents.beforeOpen); // add class lg-current to remove initial transition

                    this.getSlideItem(index).addClass('lg-current');
                    this.lGalleryOn = false; // Store the current scroll top value to scroll back after closing the gallery..

                    this.prevScrollTop = $LG(window).scrollTop();
                    setTimeout(function () {
                        // Need to check both zoomFromOrigin and transform values as we need to set set the
                        // default opening animation if user missed to add the lg-size attribute
                        if (_this.zoomFromOrigin && transform) {
                            var currentSlide_1 = _this.getSlideItem(index);

                            currentSlide_1.css('transform', transform);
                            setTimeout(function () {
                                currentSlide_1.addClass('lg-start-progress lg-start-end-progress').css('transition-duration', _this.settings.startAnimationDuration + 'ms');

                                _this.outer.addClass('lg-zoom-from-image');
                            });
                            setTimeout(function () {
                                currentSlide_1.css('transform', 'translate3d(0, 0, 0)');
                            }, 100);
                        }

                        setTimeout(function () {
                            _this.$backdrop.addClass('in');

                            _this.$container.addClass('lg-show-in');
                        }, 10); // lg-visible class resets gallery opacity to 1

                        if (!_this.zoomFromOrigin || !transform) {
                            setTimeout(function () {
                                _this.outer.addClass('lg-visible');
                            }, _this.settings.backdropDuration);
                        } // initiate slide function


                        _this.slide(index, false, false, false);

                        _this.LGel.trigger(lGEvents.afterOpen);
                    });

                    if (document.body === this.settings.container) {
                        $LG('html').addClass('lg-on');
                    }
                };
                /**
                 * Note - Changing the position of the media on every slide transition creates a flickering effect.
                 * Therefore, The height of the caption is calculated dynamically, only once based on the first slide caption.
                 * if you have dynamic captions for each media,
                 * you can provide an appropriate height for the captions via allowMediaOverlap option
                 */


                LightGallery.prototype.getMediaContainerPosition = function () {
                    if (this.settings.allowMediaOverlap) {
                        return {
                            top: 0,
                            bottom: 0
                        };
                    }

                    var top = this.$toolbar.get().clientHeight || 0;
                    var subHtml = this.outer.find('.lg-components .lg-sub-html').get();
                    var captionHeight = this.settings.defaultCaptionHeight || subHtml && subHtml.clientHeight || 0;
                    var thumbContainer = this.outer.find('.lg-thumb-outer').get();
                    var thumbHeight = thumbContainer ? thumbContainer.clientHeight : 0;
                    var bottom = thumbHeight + captionHeight;
                    return {
                        top: top,
                        bottom: bottom
                    };
                };

                LightGallery.prototype.setMediaContainerPosition = function (top, bottom) {
                    if (top === void 0) {
                        top = 0;
                    }

                    if (bottom === void 0) {
                        bottom = 0;
                    }

                    this.$content.css('top', top + 'px').css('bottom', bottom + 'px');
                };

                LightGallery.prototype.hideBars = function () {
                    var _this = this; // Hide controllers if mouse doesn't move for some period


                    setTimeout(function () {
                        _this.outer.removeClass('lg-hide-items');

                        if (_this.settings.hideBarsDelay > 0) {
                            _this.outer.on('mousemove.lg click.lg touchstart.lg', function () {
                                _this.outer.removeClass('lg-hide-items');

                                clearTimeout(_this.hideBarTimeout); // Timeout will be cleared on each slide movement also

                                _this.hideBarTimeout = setTimeout(function () {
                                    _this.outer.addClass('lg-hide-items');
                                }, _this.settings.hideBarsDelay);
                            });

                            _this.outer.trigger('mousemove.lg');
                        }
                    }, this.settings.showBarsAfter);
                };

                LightGallery.prototype.initPictureFill = function ($img) {
                    if (this.settings.supportLegacyBrowser) {
                        try {
                            picturefill({
                                elements: [$img.get()]
                            });
                        } catch (e) {
                            console.warn('lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.');
                        }
                    }
                };
                /**
                 *  @desc Create image counter
                 *  Ex: 1/10
                 */


                LightGallery.prototype.counter = function () {
                    if (this.settings.counter) {
                        var counterHtml = "<div class=\"lg-counter\" role=\"status\" aria-live=\"polite\">\n                <span id=\"" + this.getIdName('lg-counter-current') + "\" class=\"lg-counter-current\">" + (this.index + 1) + " </span> /\n                <span id=\"" + this.getIdName('lg-counter-all') + "\" class=\"lg-counter-all\">" + this.galleryItems.length + " </span></div>";
                        this.outer.find(this.settings.appendCounterTo).append(counterHtml);
                    }
                };
                /**
                 *  @desc add sub-html into the slide
                 *  @param {Number} index - index of the slide
                 */


                LightGallery.prototype.addHtml = function (index) {
                    var subHtml;
                    var subHtmlUrl;

                    if (this.galleryItems[index].subHtmlUrl) {
                        subHtmlUrl = this.galleryItems[index].subHtmlUrl;
                    } else {
                        subHtml = this.galleryItems[index].subHtml;
                    }

                    if (!subHtmlUrl) {
                        if (subHtml) {
                            // get first letter of sub-html
                            // if first letter starts with . or # get the html form the jQuery object
                            var fL = subHtml.substring(0, 1);

                            if (fL === '.' || fL === '#') {
                                if (this.settings.subHtmlSelectorRelative && !this.settings.dynamic) {
                                    subHtml = $LG(this.items).eq(index).find(subHtml).first().html();
                                } else {
                                    subHtml = $LG(subHtml).first().html();
                                }
                            }
                        } else {
                            subHtml = '';
                        }
                    }

                    if (this.settings.appendSubHtmlTo !== '.lg-item') {
                        if (subHtmlUrl) {
                            this.outer.find('.lg-sub-html').load(subHtmlUrl);
                        } else {
                            this.outer.find('.lg-sub-html').html(subHtml);
                        }
                    } else {
                        var currentSlide = $LG(this.getSlideItemId(index));

                        if (subHtmlUrl) {
                            currentSlide.load(subHtmlUrl);
                        } else {
                            currentSlide.append("<div class=\"lg-sub-html\">" + subHtml + "</div>");
                        }
                    } // Add lg-empty-html class if title doesn't exist


                    if (typeof subHtml !== 'undefined' && subHtml !== null) {
                        if (subHtml === '') {
                            this.outer.find(this.settings.appendSubHtmlTo).addClass('lg-empty-html');
                        } else {
                            this.outer.find(this.settings.appendSubHtmlTo).removeClass('lg-empty-html');
                        }
                    }

                    this.LGel.trigger(lGEvents.afterAppendSubHtml, {
                        index: index
                    });
                };
                /**
                 *  @desc Preload slides
                 *  @param {Number} index - index of the slide
                 * @todo preload not working for the first slide, Also, should work for the first and last slide as well
                 */


                LightGallery.prototype.preload = function (index) {
                    for (var i = 1; i <= this.settings.preload; i++) {
                        if (i >= this.galleryItems.length - index) {
                            break;
                        }

                        this.loadContent(index + i, false);
                    }

                    for (var j = 1; j <= this.settings.preload; j++) {
                        if (index - j < 0) {
                            break;
                        }

                        this.loadContent(index - j, false);
                    }
                };

                LightGallery.prototype.getDummyImgStyles = function (imageSize) {
                    if (!imageSize) return '';
                    return "width:" + imageSize.width + "px;\n                margin-left: -" + imageSize.width / 2 + "px;\n                margin-top: -" + imageSize.height / 2 + "px;\n                height:" + imageSize.height + "px";
                };

                LightGallery.prototype.getVideoContStyle = function (imageSize) {
                    if (!imageSize) return '';
                    return "width:" + imageSize.width + "px;\n                height:" + imageSize.height + "px";
                };

                LightGallery.prototype.getDummyImageContent = function ($currentSlide, index, alt) {
                    var $currentItem;

                    if (!this.settings.dynamic) {
                        $currentItem = $LG(this.items).eq(index);
                    }

                    if ($currentItem) {
                        var _dummyImgSrc = void 0;

                        if (!this.settings.exThumbImage) {
                            _dummyImgSrc = $currentItem.find('img').first().attr('src');
                        } else {
                            _dummyImgSrc = $currentItem.attr(this.settings.exThumbImage);
                        }

                        if (!_dummyImgSrc) return '';
                        var imgStyle = this.getDummyImgStyles(this.currentImageSize);
                        var dummyImgContent = "<img " + alt + " style=\"" + imgStyle + "\" class=\"lg-dummy-img\" src=\"" + _dummyImgSrc + "\" />";
                        $currentSlide.addClass('lg-first-slide');
                        this.outer.addClass('lg-first-slide-loading');
                        return dummyImgContent;
                    }

                    return '';
                };

                LightGallery.prototype.setImgMarkup = function (src, $currentSlide, index) {
                    var currentGalleryItem = this.galleryItems[index];
                    var alt = currentGalleryItem.alt,
                        srcset = currentGalleryItem.srcset,
                        sizes = currentGalleryItem.sizes,
                        sources = currentGalleryItem.sources; // Use the thumbnail as dummy image which will be resized to actual image size and
                    // displayed on top of actual image

                    var imgContent = '';
                    var altAttr = alt ? 'alt="' + alt + '"' : '';

                    if (this.isFirstSlideWithZoomAnimation()) {
                        imgContent = this.getDummyImageContent($currentSlide, index, altAttr);
                    } else {
                        imgContent = utils.getImgMarkup(index, src, altAttr, srcset, sizes, sources);
                    }

                    var imgMarkup = "<picture class=\"lg-img-wrap\"> " + imgContent + "</picture>";
                    $currentSlide.prepend(imgMarkup);
                };

                LightGallery.prototype.onSlideObjectLoad = function ($slide, isHTML5VideoWithoutPoster, onLoad, onError) {
                    var mediaObject = $slide.find('.lg-object').first();

                    if (utils.isImageLoaded(mediaObject.get()) || isHTML5VideoWithoutPoster) {
                        onLoad();
                    } else {
                        mediaObject.on('load.lg error.lg', function () {
                            onLoad && onLoad();
                        });
                        mediaObject.on('error.lg', function () {
                            onError && onError();
                        });
                    }
                };
                /**
                 *
                 * @param $el Current slide item
                 * @param index
                 * @param delay Delay is 0 except first time
                 * @param speed Speed is same as delay, except it is 0 if gallery is opened via hash plugin
                 * @param isFirstSlide
                 */


                LightGallery.prototype.onLgObjectLoad = function (currentSlide, index, delay, speed, isFirstSlide, isHTML5VideoWithoutPoster) {
                    var _this = this;

                    this.onSlideObjectLoad(currentSlide, isHTML5VideoWithoutPoster, function () {
                        _this.triggerSlideItemLoad(currentSlide, index, delay, speed, isFirstSlide);
                    }, function () {
                        currentSlide.addClass('lg-complete lg-complete_');
                        currentSlide.html('<span class="lg-error-msg">Oops... Failed to load content...</span>');
                    });
                };

                LightGallery.prototype.triggerSlideItemLoad = function ($currentSlide, index, delay, speed, isFirstSlide) {
                    var _this = this;

                    var currentGalleryItem = this.galleryItems[index]; // Adding delay for video slides without poster for better performance and user experience
                    // Videos should start playing once once the gallery is completely loaded

                    var _speed = isFirstSlide && this.getSlideType(currentGalleryItem) === 'video' && !currentGalleryItem.poster ? speed : 0;

                    setTimeout(function () {
                        $currentSlide.addClass('lg-complete lg-complete_');

                        _this.LGel.trigger(lGEvents.slideItemLoad, {
                            index: index,
                            delay: delay || 0,
                            isFirstSlide: isFirstSlide
                        });
                    }, _speed);
                };

                LightGallery.prototype.isFirstSlideWithZoomAnimation = function () {
                    return !!(!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize);
                }; // Add video slideInfo


                LightGallery.prototype.addSlideVideoInfo = function (items) {
                    var _this = this;

                    items.forEach(function (element, index) {
                        element.__slideVideoInfo = utils.isVideo(element.src, !!element.video, index);

                        if (element.__slideVideoInfo && _this.settings.loadYouTubePoster && !element.poster && element.__slideVideoInfo.youtube) {
                            element.poster = "//img.youtube.com/vi/" + element.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg";
                        }
                    });
                };
                /**
                 *  Load slide content into slide.
                 *  This is used to load content into slides that is not visible too
                 *  @param {Number} index - index of the slide.
                 *  @param {Boolean} rec - if true call loadcontent() function again.
                 */


                LightGallery.prototype.loadContent = function (index, rec) {
                    var _this = this;

                    var currentGalleryItem = this.galleryItems[index];
                    var $currentSlide = $LG(this.getSlideItemId(index));
                    var poster = currentGalleryItem.poster,
                        srcset = currentGalleryItem.srcset,
                        sizes = currentGalleryItem.sizes,
                        sources = currentGalleryItem.sources;
                    var src = currentGalleryItem.src;
                    var video = currentGalleryItem.video;

                    var _html5Video = video && typeof video === 'string' ? JSON.parse(video) : video;

                    if (currentGalleryItem.responsive) {
                        var srcDyItms = currentGalleryItem.responsive.split(',');
                        src = utils.getResponsiveSrc(srcDyItms) || src;
                    }

                    var videoInfo = currentGalleryItem.__slideVideoInfo;
                    var lgVideoStyle = '';
                    var iframe = !!currentGalleryItem.iframe;
                    var isFirstSlide = !this.lGalleryOn; // delay for adding complete class. it is 0 except first time.

                    var delay = 0;

                    if (isFirstSlide) {
                        if (this.zoomFromOrigin && this.currentImageSize) {
                            delay = this.settings.startAnimationDuration + 10;
                        } else {
                            delay = this.settings.backdropDuration + 10;
                        }
                    }

                    if (!$currentSlide.hasClass('lg-loaded')) {
                        if (videoInfo) {
                            var _a = this.mediaContainerPosition,
                                top_2 = _a.top,
                                bottom = _a.bottom;
                            var videoSize = utils.getSize(this.items[index], this.outer, top_2 + bottom, videoInfo && this.settings.videoMaxSize);
                            lgVideoStyle = this.getVideoContStyle(videoSize);
                        }

                        if (iframe) {
                            var markup = utils.getIframeMarkup(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, src, currentGalleryItem.iframeTitle);
                            $currentSlide.prepend(markup);
                        } else if (poster) {
                            var dummyImg = '';
                            var hasStartAnimation = isFirstSlide && this.zoomFromOrigin && this.currentImageSize;

                            if (hasStartAnimation) {
                                dummyImg = this.getDummyImageContent($currentSlide, index, '');
                            }

                            var markup = utils.getVideoPosterMarkup(poster, dummyImg || '', lgVideoStyle, this.settings.strings['playVideo'], videoInfo);
                            $currentSlide.prepend(markup);
                        } else if (videoInfo) {
                            var markup = "<div class=\"lg-video-cont \" style=\"" + lgVideoStyle + "\"></div>";
                            $currentSlide.prepend(markup);
                        } else {
                            this.setImgMarkup(src, $currentSlide, index);

                            if (srcset || sources) {
                                var $img = $currentSlide.find('.lg-object');
                                this.initPictureFill($img);
                            }
                        }

                        if (poster || videoInfo) {
                            this.LGel.trigger(lGEvents.hasVideo, {
                                index: index,
                                src: src,
                                html5Video: _html5Video,
                                hasPoster: !!poster
                            });
                        }

                        this.LGel.trigger(lGEvents.afterAppendSlide, {
                            index: index
                        });

                        if (this.lGalleryOn && this.settings.appendSubHtmlTo === '.lg-item') {
                            this.addHtml(index);
                        }
                    } // For first time add some delay for displaying the start animation.


                    var _speed = 0; // Do not change the delay value because it is required for zoom plugin.
                    // If gallery opened from direct url (hash) speed value should be 0

                    if (delay && !$LG(document.body).hasClass('lg-from-hash')) {
                        _speed = delay;
                    } // Only for first slide and zoomFromOrigin is enabled


                    if (this.isFirstSlideWithZoomAnimation()) {
                        setTimeout(function () {
                            $currentSlide.removeClass('lg-start-end-progress lg-start-progress').removeAttr('style');
                        }, this.settings.startAnimationDuration + 100);

                        if (!$currentSlide.hasClass('lg-loaded')) {
                            setTimeout(function () {
                                if (_this.getSlideType(currentGalleryItem) === 'image') {
                                    $currentSlide.find('.lg-img-wrap').append(utils.getImgMarkup(index, src, '', srcset, sizes, currentGalleryItem.sources));

                                    if (srcset || sources) {
                                        var $img = $currentSlide.find('.lg-object');

                                        _this.initPictureFill($img);
                                    }
                                }

                                if (_this.getSlideType(currentGalleryItem) === 'image' || _this.getSlideType(currentGalleryItem) === 'video' && poster) {
                                    _this.onLgObjectLoad($currentSlide, index, delay, _speed, true, false); // load remaining slides once the slide is completely loaded


                                    _this.onSlideObjectLoad($currentSlide, !!(videoInfo && videoInfo.html5 && !poster), function () {
                                        _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                                    }, function () {
                                        _this.loadContentOnFirstSlideLoad(index, $currentSlide, _speed);
                                    });
                                }
                            }, this.settings.startAnimationDuration + 100);
                        }
                    } // SLide content has been added to dom


                    $currentSlide.addClass('lg-loaded');

                    if (!this.isFirstSlideWithZoomAnimation() || this.getSlideType(currentGalleryItem) === 'video' && !poster) {
                        this.onLgObjectLoad($currentSlide, index, delay, _speed, isFirstSlide, !!(videoInfo && videoInfo.html5 && !poster));
                    } // When gallery is opened once content is loaded (second time) need to add lg-complete class for css styling


                    if ((!this.zoomFromOrigin || !this.currentImageSize) && $currentSlide.hasClass('lg-complete_') && !this.lGalleryOn) {
                        setTimeout(function () {
                            $currentSlide.addClass('lg-complete');
                        }, this.settings.backdropDuration);
                    } // Content loaded
                    // Need to set lGalleryOn before calling preload function


                    this.lGalleryOn = true;

                    if (rec === true) {
                        if (!$currentSlide.hasClass('lg-complete_')) {
                            $currentSlide.find('.lg-object').first().on('load.lg error.lg', function () {
                                _this.preload(index);
                            });
                        } else {
                            this.preload(index);
                        }
                    }
                };
                /**
                 * @desc Remove dummy image content and load next slides
                 * Called only for the first time if zoomFromOrigin animation is enabled
                 * @param index
                 * @param $currentSlide
                 * @param speed
                 */


                LightGallery.prototype.loadContentOnFirstSlideLoad = function (index, $currentSlide, speed) {
                    var _this = this;

                    setTimeout(function () {
                        $currentSlide.find('.lg-dummy-img').remove();
                        $currentSlide.removeClass('lg-first-slide');

                        _this.outer.removeClass('lg-first-slide-loading');

                        _this.isDummyImageRemoved = true;

                        _this.preload(index);
                    }, speed + 300);
                };

                LightGallery.prototype.getItemsToBeInsertedToDom = function (index, prevIndex, numberOfItems) {
                    var _this = this;

                    if (numberOfItems === void 0) {
                        numberOfItems = 0;
                    }

                    var itemsToBeInsertedToDom = []; // Minimum 2 items should be there

                    var possibleNumberOfItems = Math.max(numberOfItems, 3);
                    possibleNumberOfItems = Math.min(possibleNumberOfItems, this.galleryItems.length);
                    var prevIndexItem = "lg-item-" + this.lgId + "-" + prevIndex;

                    if (this.galleryItems.length <= 3) {
                        this.galleryItems.forEach(function (_element, index) {
                            itemsToBeInsertedToDom.push("lg-item-" + _this.lgId + "-" + index);
                        });
                        return itemsToBeInsertedToDom;
                    }

                    if (index < (this.galleryItems.length - 1) / 2) {
                        for (var idx = index; idx > index - possibleNumberOfItems / 2 && idx >= 0; idx--) {
                            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                        }

                        var numberOfExistingItems = itemsToBeInsertedToDom.length;

                        for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index + idx + 1));
                        }
                    } else {
                        for (var idx = index; idx <= this.galleryItems.length - 1 && idx < index + possibleNumberOfItems / 2; idx++) {
                            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + idx);
                        }

                        var numberOfExistingItems = itemsToBeInsertedToDom.length;

                        for (var idx = 0; idx < possibleNumberOfItems - numberOfExistingItems; idx++) {
                            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (index - idx - 1));
                        }
                    }

                    if (this.settings.loop) {
                        if (index === this.galleryItems.length - 1) {
                            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + 0);
                        } else if (index === 0) {
                            itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1));
                        }
                    }

                    if (itemsToBeInsertedToDom.indexOf(prevIndexItem) === -1) {
                        itemsToBeInsertedToDom.push("lg-item-" + this.lgId + "-" + prevIndex);
                    }

                    return itemsToBeInsertedToDom;
                };

                LightGallery.prototype.organizeSlideItems = function (index, prevIndex) {
                    var _this = this;

                    var itemsToBeInsertedToDom = this.getItemsToBeInsertedToDom(index, prevIndex, this.settings.numberOfSlideItemsInDom);
                    itemsToBeInsertedToDom.forEach(function (item) {
                        if (_this.currentItemsInDom.indexOf(item) === -1) {
                            _this.$inner.append("<div id=\"" + item + "\" class=\"lg-item\"></div>");
                        }
                    });
                    this.currentItemsInDom.forEach(function (item) {
                        if (itemsToBeInsertedToDom.indexOf(item) === -1) {
                            $LG("#" + item).remove();
                        }
                    });
                    return itemsToBeInsertedToDom;
                };
                /**
                 * Get previous index of the slide
                 */


                LightGallery.prototype.getPreviousSlideIndex = function () {
                    var prevIndex = 0;

                    try {
                        var currentItemId = this.outer.find('.lg-current').first().attr('id');
                        prevIndex = parseInt(currentItemId.split('-')[3]) || 0;
                    } catch (error) {
                        prevIndex = 0;
                    }

                    return prevIndex;
                };

                LightGallery.prototype.setDownloadValue = function (index) {
                    if (this.settings.download) {
                        var currentGalleryItem = this.galleryItems[index];
                        var hideDownloadBtn = currentGalleryItem.downloadUrl === false || currentGalleryItem.downloadUrl === 'false';

                        if (hideDownloadBtn) {
                            this.outer.addClass('lg-hide-download');
                        } else {
                            var $download = this.getElementById('lg-download');
                            this.outer.removeClass('lg-hide-download');
                            $download.attr('href', currentGalleryItem.downloadUrl || currentGalleryItem.src);

                            if (currentGalleryItem.download) {
                                $download.attr('download', currentGalleryItem.download);
                            }
                        }
                    }
                };

                LightGallery.prototype.makeSlideAnimation = function (direction, currentSlideItem, previousSlideItem) {
                    var _this = this;

                    if (this.lGalleryOn) {
                        previousSlideItem.addClass('lg-slide-progress');
                    }

                    setTimeout(function () {
                        // remove all transitions
                        _this.outer.addClass('lg-no-trans');

                        _this.outer.find('.lg-item').removeClass('lg-prev-slide lg-next-slide');

                        if (direction === 'prev') {
                            //prevslide
                            currentSlideItem.addClass('lg-prev-slide');
                            previousSlideItem.addClass('lg-next-slide');
                        } else {
                            // next slide
                            currentSlideItem.addClass('lg-next-slide');
                            previousSlideItem.addClass('lg-prev-slide');
                        } // give 50 ms for browser to add/remove class


                        setTimeout(function () {
                            _this.outer.find('.lg-item').removeClass('lg-current');

                            currentSlideItem.addClass('lg-current'); // reset all transitions

                            _this.outer.removeClass('lg-no-trans');
                        }, 50);
                    }, this.lGalleryOn ? this.settings.slideDelay : 0);
                };
                /**
                 * Goto a specific slide.
                 * @param {Number} index - index of the slide
                 * @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
                 * @param {Boolean} fromThumb - true if slide function called via thumbnail click
                 * @param {String} direction - Direction of the slide(next/prev)
                 * @category lGPublicMethods
                 * @example
                 *  const plugin = lightGallery();
                 *  // to go to 3rd slide
                 *  plugin.slide(2);
                 *
                 */


                LightGallery.prototype.slide = function (index, fromTouch, fromThumb, direction) {
                    var _this = this;

                    var prevIndex = this.getPreviousSlideIndex();
                    this.currentItemsInDom = this.organizeSlideItems(index, prevIndex); // Prevent multiple call, Required for hsh plugin

                    if (this.lGalleryOn && prevIndex === index) {
                        return;
                    }

                    var numberOfGalleryItems = this.galleryItems.length;

                    if (!this.lgBusy) {
                        if (this.settings.counter) {
                            this.updateCurrentCounter(index);
                        }

                        var currentSlideItem = this.getSlideItem(index);
                        var previousSlideItem_1 = this.getSlideItem(prevIndex);
                        var currentGalleryItem = this.galleryItems[index];
                        var videoInfo = currentGalleryItem.__slideVideoInfo;
                        this.outer.attr('data-lg-slide-type', this.getSlideType(currentGalleryItem));
                        this.setDownloadValue(index);

                        if (videoInfo) {
                            var _a = this.mediaContainerPosition,
                                top_3 = _a.top,
                                bottom = _a.bottom;
                            var videoSize = utils.getSize(this.items[index], this.outer, top_3 + bottom, videoInfo && this.settings.videoMaxSize);
                            this.resizeVideoSlide(index, videoSize);
                        }

                        this.LGel.trigger(lGEvents.beforeSlide, {
                            prevIndex: prevIndex,
                            index: index,
                            fromTouch: !!fromTouch,
                            fromThumb: !!fromThumb
                        });
                        this.lgBusy = true;
                        clearTimeout(this.hideBarTimeout);
                        this.arrowDisable(index);

                        if (!direction) {
                            if (index < prevIndex) {
                                direction = 'prev';
                            } else if (index > prevIndex) {
                                direction = 'next';
                            }
                        }

                        if (!fromTouch) {
                            this.makeSlideAnimation(direction, currentSlideItem, previousSlideItem_1);
                        } else {
                            this.outer.find('.lg-item').removeClass('lg-prev-slide lg-current lg-next-slide');
                            var touchPrev = void 0;
                            var touchNext = void 0;

                            if (numberOfGalleryItems > 2) {
                                touchPrev = index - 1;
                                touchNext = index + 1;

                                if (index === 0 && prevIndex === numberOfGalleryItems - 1) {
                                    // next slide
                                    touchNext = 0;
                                    touchPrev = numberOfGalleryItems - 1;
                                } else if (index === numberOfGalleryItems - 1 && prevIndex === 0) {
                                    // prev slide
                                    touchNext = 0;
                                    touchPrev = numberOfGalleryItems - 1;
                                }
                            } else {
                                touchPrev = 0;
                                touchNext = 1;
                            }

                            if (direction === 'prev') {
                                this.getSlideItem(touchNext).addClass('lg-next-slide');
                            } else {
                                this.getSlideItem(touchPrev).addClass('lg-prev-slide');
                            }

                            currentSlideItem.addClass('lg-current');
                        } // Do not put load content in set timeout as it needs to load immediately when the gallery is opened


                        if (!this.lGalleryOn) {
                            this.loadContent(index, true);
                        } else {
                            setTimeout(function () {
                                _this.loadContent(index, true); // Add title if this.settings.appendSubHtmlTo === lg-sub-html


                                if (_this.settings.appendSubHtmlTo !== '.lg-item') {
                                    _this.addHtml(index);
                                }
                            }, this.settings.speed + 50 + (fromTouch ? 0 : this.settings.slideDelay));
                        }

                        setTimeout(function () {
                            _this.lgBusy = false;
                            previousSlideItem_1.removeClass('lg-slide-progress');

                            _this.LGel.trigger(lGEvents.afterSlide, {
                                prevIndex: prevIndex,
                                index: index,
                                fromTouch: fromTouch,
                                fromThumb: fromThumb
                            });
                        }, (this.lGalleryOn ? this.settings.speed + 100 : 100) + (fromTouch ? 0 : this.settings.slideDelay));
                    }

                    this.index = index;
                };

                LightGallery.prototype.updateCurrentCounter = function (index) {
                    this.getElementById('lg-counter-current').html(index + 1 + '');
                };

                LightGallery.prototype.updateCounterTotal = function () {
                    this.getElementById('lg-counter-all').html(this.galleryItems.length + '');
                };

                LightGallery.prototype.getSlideType = function (item) {
                    if (item.__slideVideoInfo) {
                        return 'video';
                    } else if (item.iframe) {
                        return 'iframe';
                    } else {
                        return 'image';
                    }
                };

                LightGallery.prototype.touchMove = function (startCoords, endCoords, e) {
                    var distanceX = endCoords.pageX - startCoords.pageX;
                    var distanceY = endCoords.pageY - startCoords.pageY;
                    var allowSwipe = false;

                    if (this.swipeDirection) {
                        allowSwipe = true;
                    } else {
                        if (Math.abs(distanceX) > 15) {
                            this.swipeDirection = 'horizontal';
                            allowSwipe = true;
                        } else if (Math.abs(distanceY) > 15) {
                            this.swipeDirection = 'vertical';
                            allowSwipe = true;
                        }
                    }

                    if (!allowSwipe) {
                        return;
                    }

                    var $currentSlide = this.getSlideItem(this.index);

                    if (this.swipeDirection === 'horizontal') {
                        e === null || e === void 0 ? void 0 : e.preventDefault(); // reset opacity and transition duration

                        this.outer.addClass('lg-dragging'); // move current slide

                        this.setTranslate($currentSlide, distanceX, 0); // move next and prev slide with current slide

                        var width = $currentSlide.get().offsetWidth;
                        var slideWidthAmount = width * 15 / 100;
                        var gutter = slideWidthAmount - Math.abs(distanceX * 10 / 100);
                        this.setTranslate(this.outer.find('.lg-prev-slide').first(), -width + distanceX - gutter, 0);
                        this.setTranslate(this.outer.find('.lg-next-slide').first(), width + distanceX + gutter, 0);
                    } else if (this.swipeDirection === 'vertical') {
                        if (this.settings.swipeToClose) {
                            e === null || e === void 0 ? void 0 : e.preventDefault();
                            this.$container.addClass('lg-dragging-vertical');
                            var opacity = 1 - Math.abs(distanceY) / window.innerHeight;
                            this.$backdrop.css('opacity', opacity);
                            var scale = 1 - Math.abs(distanceY) / (window.innerWidth * 2);
                            this.setTranslate($currentSlide, 0, distanceY, scale, scale);

                            if (Math.abs(distanceY) > 100) {
                                this.outer.addClass('lg-hide-items').removeClass('lg-components-open');
                            }
                        }
                    }
                };

                LightGallery.prototype.touchEnd = function (endCoords, startCoords, event) {
                    var _this = this;

                    var distance; // keep slide animation for any mode while dragg/swipe

                    if (this.settings.mode !== 'lg-slide') {
                        this.outer.addClass('lg-slide');
                    } // set transition duration


                    setTimeout(function () {
                        _this.$container.removeClass('lg-dragging-vertical');

                        _this.outer.removeClass('lg-dragging lg-hide-items').addClass('lg-components-open');

                        var triggerClick = true;

                        if (_this.swipeDirection === 'horizontal') {
                            distance = endCoords.pageX - startCoords.pageX;
                            var distanceAbs = Math.abs(endCoords.pageX - startCoords.pageX);

                            if (distance < 0 && distanceAbs > _this.settings.swipeThreshold) {
                                _this.goToNextSlide(true);

                                triggerClick = false;
                            } else if (distance > 0 && distanceAbs > _this.settings.swipeThreshold) {
                                _this.goToPrevSlide(true);

                                triggerClick = false;
                            }
                        } else if (_this.swipeDirection === 'vertical') {
                            distance = Math.abs(endCoords.pageY - startCoords.pageY);

                            if (_this.settings.closable && _this.settings.swipeToClose && distance > 100) {
                                _this.closeGallery();

                                return;
                            } else {
                                _this.$backdrop.css('opacity', 1);
                            }
                        }

                        _this.outer.find('.lg-item').removeAttr('style');

                        if (triggerClick && Math.abs(endCoords.pageX - startCoords.pageX) < 5) {
                            // Trigger click if distance is less than 5 pix
                            var target = $LG(event.target);

                            if (_this.isPosterElement(target)) {
                                _this.LGel.trigger(lGEvents.posterClick);
                            }
                        }

                        _this.swipeDirection = undefined;
                    }); // remove slide class once drag/swipe is completed if mode is not slide

                    setTimeout(function () {
                        if (!_this.outer.hasClass('lg-dragging') && _this.settings.mode !== 'lg-slide') {
                            _this.outer.removeClass('lg-slide');
                        }
                    }, this.settings.speed + 100);
                };

                LightGallery.prototype.enableSwipe = function () {
                    var _this = this;

                    var startCoords = {};
                    var endCoords = {};
                    var isMoved = false;
                    var isSwiping = false;

                    if (this.settings.enableSwipe) {
                        this.$inner.on('touchstart.lg', function (e) {
                            _this.dragOrSwipeEnabled = true;

                            var $item = _this.getSlideItem(_this.index);

                            if (($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && !_this.outer.hasClass('lg-zoomed') && !_this.lgBusy && e.targetTouches.length === 1) {
                                isSwiping = true;
                                _this.touchAction = 'swipe';

                                _this.manageSwipeClass();

                                startCoords = {
                                    pageX: e.targetTouches[0].pageX,
                                    pageY: e.targetTouches[0].pageY
                                };
                            }
                        });
                        this.$inner.on('touchmove.lg', function (e) {
                            if (isSwiping && _this.touchAction === 'swipe' && e.targetTouches.length === 1) {
                                endCoords = {
                                    pageX: e.targetTouches[0].pageX,
                                    pageY: e.targetTouches[0].pageY
                                };

                                _this.touchMove(startCoords, endCoords, e);

                                isMoved = true;
                            }
                        });
                        this.$inner.on('touchend.lg', function (event) {
                            if (_this.touchAction === 'swipe') {
                                if (isMoved) {
                                    isMoved = false;

                                    _this.touchEnd(endCoords, startCoords, event);
                                } else if (isSwiping) {
                                    var target = $LG(event.target);

                                    if (_this.isPosterElement(target)) {
                                        _this.LGel.trigger(lGEvents.posterClick);
                                    }
                                }

                                _this.touchAction = undefined;
                                isSwiping = false;
                            }
                        });
                    }
                };

                LightGallery.prototype.enableDrag = function () {
                    var _this = this;

                    var startCoords = {};
                    var endCoords = {};
                    var isDraging = false;
                    var isMoved = false;

                    if (this.settings.enableDrag) {
                        this.outer.on('mousedown.lg', function (e) {
                            _this.dragOrSwipeEnabled = true;

                            var $item = _this.getSlideItem(_this.index);

                            if ($LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
                                if (!_this.outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                                    e.preventDefault();

                                    if (!_this.lgBusy) {
                                        _this.manageSwipeClass();

                                        startCoords = {
                                            pageX: e.pageX,
                                            pageY: e.pageY
                                        };
                                        isDraging = true; // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723

                                        _this.outer.get().scrollLeft += 1;
                                        _this.outer.get().scrollLeft -= 1; // *

                                        _this.outer.removeClass('lg-grab').addClass('lg-grabbing');

                                        _this.LGel.trigger(lGEvents.dragStart);
                                    }
                                }
                            }
                        });
                        $LG(window).on("mousemove.lg.global" + this.lgId, function (e) {
                            if (isDraging && _this.lgOpened) {
                                isMoved = true;
                                endCoords = {
                                    pageX: e.pageX,
                                    pageY: e.pageY
                                };

                                _this.touchMove(startCoords, endCoords);

                                _this.LGel.trigger(lGEvents.dragMove);
                            }
                        });
                        $LG(window).on("mouseup.lg.global" + this.lgId, function (event) {
                            if (!_this.lgOpened) {
                                return;
                            }

                            var target = $LG(event.target);

                            if (isMoved) {
                                isMoved = false;

                                _this.touchEnd(endCoords, startCoords, event);

                                _this.LGel.trigger(lGEvents.dragEnd);
                            } else if (_this.isPosterElement(target)) {
                                _this.LGel.trigger(lGEvents.posterClick);
                            } // Prevent execution on click


                            if (isDraging) {
                                isDraging = false;

                                _this.outer.removeClass('lg-grabbing').addClass('lg-grab');
                            }
                        });
                    }
                };

                LightGallery.prototype.triggerPosterClick = function () {
                    var _this = this;

                    this.$inner.on('click.lg', function (event) {
                        if (!_this.dragOrSwipeEnabled && _this.isPosterElement($LG(event.target))) {
                            _this.LGel.trigger(lGEvents.posterClick);
                        }
                    });
                };

                LightGallery.prototype.manageSwipeClass = function () {
                    var _touchNext = this.index + 1;

                    var _touchPrev = this.index - 1;

                    if (this.settings.loop && this.galleryItems.length > 2) {
                        if (this.index === 0) {
                            _touchPrev = this.galleryItems.length - 1;
                        } else if (this.index === this.galleryItems.length - 1) {
                            _touchNext = 0;
                        }
                    }

                    this.outer.find('.lg-item').removeClass('lg-next-slide lg-prev-slide');

                    if (_touchPrev > -1) {
                        this.getSlideItem(_touchPrev).addClass('lg-prev-slide');
                    }

                    this.getSlideItem(_touchNext).addClass('lg-next-slide');
                };
                /**
                 * Go to next slide
                 * @param {Boolean} fromTouch - true if slide function called via touch event
                 * @category lGPublicMethods
                 * @example
                 *  const plugin = lightGallery();
                 *  plugin.goToNextSlide();
                 * @see <a href="/demos/methods/">Demo</a>
                 */


                LightGallery.prototype.goToNextSlide = function (fromTouch) {
                    var _this = this;

                    var _loop = this.settings.loop;

                    if (fromTouch && this.galleryItems.length < 3) {
                        _loop = false;
                    }

                    if (!this.lgBusy) {
                        if (this.index + 1 < this.galleryItems.length) {
                            this.index++;
                            this.LGel.trigger(lGEvents.beforeNextSlide, {
                                index: this.index
                            });
                            this.slide(this.index, !!fromTouch, false, 'next');
                        } else {
                            if (_loop) {
                                this.index = 0;
                                this.LGel.trigger(lGEvents.beforeNextSlide, {
                                    index: this.index
                                });
                                this.slide(this.index, !!fromTouch, false, 'next');
                            } else if (this.settings.slideEndAnimation && !fromTouch) {
                                this.outer.addClass('lg-right-end');
                                setTimeout(function () {
                                    _this.outer.removeClass('lg-right-end');
                                }, 400);
                            }
                        }
                    }
                };
                /**
                 * Go to previous slides
                 * @param {Boolean} fromTouch - true if slide function called via touch event
                 * @category lGPublicMethods
                 * @example
                 *  const plugin = lightGallery({});
                 *  plugin.goToPrevSlide();
                 * @see <a href="/demos/methods/">Demo</a>
                 *
                 */


                LightGallery.prototype.goToPrevSlide = function (fromTouch) {
                    var _this = this;

                    var _loop = this.settings.loop;

                    if (fromTouch && this.galleryItems.length < 3) {
                        _loop = false;
                    }

                    if (!this.lgBusy) {
                        if (this.index > 0) {
                            this.index--;
                            this.LGel.trigger(lGEvents.beforePrevSlide, {
                                index: this.index,
                                fromTouch: fromTouch
                            });
                            this.slide(this.index, !!fromTouch, false, 'prev');
                        } else {
                            if (_loop) {
                                this.index = this.galleryItems.length - 1;
                                this.LGel.trigger(lGEvents.beforePrevSlide, {
                                    index: this.index,
                                    fromTouch: fromTouch
                                });
                                this.slide(this.index, !!fromTouch, false, 'prev');
                            } else if (this.settings.slideEndAnimation && !fromTouch) {
                                this.outer.addClass('lg-left-end');
                                setTimeout(function () {
                                    _this.outer.removeClass('lg-left-end');
                                }, 400);
                            }
                        }
                    }
                };

                LightGallery.prototype.keyPress = function () {
                    var _this = this;

                    $LG(window).on("keydown.lg.global" + this.lgId, function (e) {
                        if (_this.lgOpened && _this.settings.escKey === true && e.keyCode === 27) {
                            e.preventDefault();

                            if (_this.settings.allowMediaOverlap && _this.outer.hasClass('lg-can-toggle') && _this.outer.hasClass('lg-components-open')) {
                                _this.outer.removeClass('lg-components-open');
                            } else {
                                _this.closeGallery();
                            }
                        }

                        if (_this.lgOpened && _this.galleryItems.length > 1) {
                            if (e.keyCode === 37) {
                                e.preventDefault();

                                _this.goToPrevSlide();
                            }

                            if (e.keyCode === 39) {
                                e.preventDefault();

                                _this.goToNextSlide();
                            }
                        }
                    });
                };

                LightGallery.prototype.arrow = function () {
                    var _this = this;

                    this.getElementById('lg-prev').on('click.lg', function () {
                        _this.goToPrevSlide();
                    });
                    this.getElementById('lg-next').on('click.lg', function () {
                        _this.goToNextSlide();
                    });
                };

                LightGallery.prototype.arrowDisable = function (index) {
                    // Disable arrows if settings.hideControlOnEnd is true
                    if (!this.settings.loop && this.settings.hideControlOnEnd) {
                        var $prev = this.getElementById('lg-prev');
                        var $next = this.getElementById('lg-next');

                        if (index + 1 === this.galleryItems.length) {
                            $next.attr('disabled', 'disabled').addClass('disabled');
                        } else {
                            $next.removeAttr('disabled').removeClass('disabled');
                        }

                        if (index === 0) {
                            $prev.attr('disabled', 'disabled').addClass('disabled');
                        } else {
                            $prev.removeAttr('disabled').removeClass('disabled');
                        }
                    }
                };

                LightGallery.prototype.setTranslate = function ($el, xValue, yValue, scaleX, scaleY) {
                    if (scaleX === void 0) {
                        scaleX = 1;
                    }

                    if (scaleY === void 0) {
                        scaleY = 1;
                    }

                    $el.css('transform', 'translate3d(' + xValue + 'px, ' + yValue + 'px, 0px) scale3d(' + scaleX + ', ' + scaleY + ', 1)');
                };

                LightGallery.prototype.mousewheel = function () {
                    var _this = this;

                    var lastCall = 0;
                    this.outer.on('wheel.lg', function (e) {
                        if (!e.deltaY || _this.galleryItems.length < 2) {
                            return;
                        }

                        e.preventDefault();
                        var now = new Date().getTime();

                        if (now - lastCall < 1000) {
                            return;
                        }

                        lastCall = now;

                        if (e.deltaY > 0) {
                            _this.goToNextSlide();
                        } else if (e.deltaY < 0) {
                            _this.goToPrevSlide();
                        }
                    });
                };

                LightGallery.prototype.isSlideElement = function (target) {
                    return target.hasClass('lg-outer') || target.hasClass('lg-item') || target.hasClass('lg-img-wrap');
                };

                LightGallery.prototype.isPosterElement = function (target) {
                    var playButton = this.getSlideItem(this.index).find('.lg-video-play-button').get();
                    return target.hasClass('lg-video-poster') || target.hasClass('lg-video-play-button') || playButton && playButton.contains(target.get());
                };
                /**
                 * Maximize minimize inline gallery.
                 * @category lGPublicMethods
                 */


                LightGallery.prototype.toggleMaximize = function () {
                    var _this = this;

                    this.getElementById('lg-maximize').on('click.lg', function () {
                        _this.$container.toggleClass('lg-inline');

                        _this.refreshOnResize();
                    });
                };

                LightGallery.prototype.invalidateItems = function () {
                    for (var index = 0; index < this.items.length; index++) {
                        var element = this.items[index];
                        var $element = $LG(element);
                        $element.off("click.lgcustom-item-" + $element.attr('data-lg-id'));
                    }
                };

                LightGallery.prototype.manageCloseGallery = function () {
                    var _this = this;

                    if (!this.settings.closable) return;
                    var mousedown = false;
                    this.getElementById('lg-close').on('click.lg', function () {
                        _this.closeGallery();
                    });

                    if (this.settings.closeOnTap) {
                        // If you drag the slide and release outside gallery gets close on chrome
                        // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
                        this.outer.on('mousedown.lg', function (e) {
                            var target = $LG(e.target);

                            if (_this.isSlideElement(target)) {
                                mousedown = true;
                            } else {
                                mousedown = false;
                            }
                        });
                        this.outer.on('mousemove.lg', function () {
                            mousedown = false;
                        });
                        this.outer.on('mouseup.lg', function (e) {
                            var target = $LG(e.target);

                            if (_this.isSlideElement(target) && mousedown) {
                                if (!_this.outer.hasClass('lg-dragging')) {
                                    _this.closeGallery();
                                }
                            }
                        });
                    }
                };
                /**
                 * Close lightGallery if it is opened.
                 *
                 * @description If closable is false in the settings, you need to pass true via closeGallery method to force close gallery
                 * @return returns the estimated time to close gallery completely including the close animation duration
                 * @category lGPublicMethods
                 * @example
                 *  const plugin = lightGallery();
                 *  plugin.closeGallery();
                 *
                 */


                LightGallery.prototype.closeGallery = function (force) {
                    var _this = this;

                    if (!this.lgOpened || !this.settings.closable && !force) {
                        return 0;
                    }

                    this.LGel.trigger(lGEvents.beforeClose);
                    $LG(window).scrollTop(this.prevScrollTop);
                    var currentItem = this.items[this.index];
                    var transform;

                    if (this.zoomFromOrigin && currentItem) {
                        var _a = this.mediaContainerPosition,
                            top_4 = _a.top,
                            bottom = _a.bottom;
                        var _b = this.galleryItems[this.index],
                            __slideVideoInfo = _b.__slideVideoInfo,
                            poster = _b.poster;
                        var imageSize = utils.getSize(currentItem, this.outer, top_4 + bottom, __slideVideoInfo && poster && this.settings.videoMaxSize);
                        transform = utils.getTransform(currentItem, this.outer, top_4, bottom, imageSize);
                    }

                    if (this.zoomFromOrigin && transform) {
                        this.outer.addClass('lg-closing lg-zoom-from-image');
                        this.getSlideItem(this.index).addClass('lg-start-end-progress').css('transition-duration', this.settings.startAnimationDuration + 'ms').css('transform', transform);
                    } else {
                        this.outer.addClass('lg-hide-items'); // lg-zoom-from-image is used for setting the opacity to 1 if zoomFromOrigin is true
                        // If the closing item doesn't have the lg-size attribute, remove this class to avoid the closing css conflicts

                        this.outer.removeClass('lg-zoom-from-image');
                    } // Unbind all events added by lightGallery
                    // @todo
                    //this.$el.off('.lg.tm');


                    this.destroyModules();
                    this.lGalleryOn = false;
                    this.isDummyImageRemoved = false;
                    this.zoomFromOrigin = this.settings.zoomFromOrigin;
                    clearTimeout(this.hideBarTimeout);
                    this.hideBarTimeout = false;
                    $LG('html').removeClass('lg-on');
                    this.outer.removeClass('lg-visible lg-components-open'); // Resetting opacity to 0 isd required as  vertical swipe to close function adds inline opacity.

                    this.$backdrop.removeClass('in').css('opacity', 0);
                    var removeTimeout = this.zoomFromOrigin && transform ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                    this.$container.removeClass('lg-show-in'); // Once the closign animation is completed and gallery is invisible

                    setTimeout(function () {
                        if (_this.zoomFromOrigin && transform) {
                            _this.outer.removeClass('lg-zoom-from-image');
                        }

                        _this.$container.removeClass('lg-show'); // Need to remove inline opacity as it is used in the stylesheet as well


                        _this.$backdrop.removeAttr('style').css('transition-duration', _this.settings.backdropDuration + 'ms');

                        _this.outer.removeClass("lg-closing " + _this.settings.startClass);

                        _this.getSlideItem(_this.index).removeClass('lg-start-end-progress');

                        _this.$inner.empty();

                        if (_this.lgOpened) {
                            _this.LGel.trigger(lGEvents.afterClose, {
                                instance: _this
                            });
                        }

                        if (_this.outer.get()) {
                            _this.outer.get().blur();
                        }

                        _this.lgOpened = false;
                    }, removeTimeout + 100);
                    return removeTimeout + 100;
                };

                LightGallery.prototype.initModules = function () {
                    this.plugins.forEach(function (module) {
                        try {
                            module.init();
                        } catch (err) {
                            console.warn("lightGallery:- make sure lightGallery module is properly initiated");
                        }
                    });
                };

                LightGallery.prototype.destroyModules = function (destroy) {
                    this.plugins.forEach(function (module) {
                        try {
                            if (destroy) {
                                module.destroy();
                            } else {
                                module.closeGallery && module.closeGallery();
                            }
                        } catch (err) {
                            console.warn("lightGallery:- make sure lightGallery module is properly destroyed");
                        }
                    });
                };
                /**
                 * Refresh lightGallery with new set of children.
                 *
                 * @description This is useful to update the gallery when the child elements are changed without calling destroy method.
                 *
                 * If you are using dynamic mode, you can pass the modified array of dynamicEl as the first parameter to refresh the dynamic gallery
                 * @see <a href="/demos/dynamic-mode/">Demo</a>
                 * @category lGPublicMethods
                 * @example
                 *  const plugin = lightGallery();
                 *  // Delete or add children, then call
                 *  plugin.refresh();
                 *
                 */


                LightGallery.prototype.refresh = function (galleryItems) {
                    if (!this.settings.dynamic) {
                        this.invalidateItems();
                    }

                    if (galleryItems) {
                        this.galleryItems = galleryItems;
                    } else {
                        this.galleryItems = this.getItems();
                    }

                    this.updateControls();
                    this.openGalleryOnItemClick();
                    this.LGel.trigger(lGEvents.updateSlides);
                };

                LightGallery.prototype.updateControls = function () {
                    this.addSlideVideoInfo(this.galleryItems);
                    this.updateCounterTotal();
                    this.manageSingleSlideClassName();
                };
                /**
                 * Destroy lightGallery.
                 * Destroy lightGallery and its plugin instances completely
                 *
                 * @description This method also calls CloseGallery function internally. Returns the time takes to completely close and destroy the instance.
                 * In case if you want to re-initialize lightGallery right after destroying it, initialize it only once the destroy process is completed.
                 * You can use refresh method most of the times.
                 * @category lGPublicMethods
                 * @example
                 *  const plugin = lightGallery();
                 *  plugin.destroy();
                 *
                 */


                LightGallery.prototype.destroy = function () {
                    var _this = this;

                    var closeTimeout = this.closeGallery(true);
                    setTimeout(function () {
                        _this.destroyModules(true);

                        if (!_this.settings.dynamic) {
                            _this.invalidateItems();
                        }

                        $LG(window).off(".lg.global" + _this.lgId);

                        _this.LGel.off('.lg');

                        _this.$container.remove();
                    }, closeTimeout);
                    return closeTimeout;
                };

                return LightGallery;
            }();

        function lightGallery(el, options) {
            return new LightGallery(el, options);
        }

        /* harmony default export */
        const lightgallery_es5 = (lightGallery);
        ;// CONCATENATED MODULE: ./node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.es5.js
        /*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var lg_thumbnail_es5_assign = function () {
            lg_thumbnail_es5_assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];

                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }

                return t;
            };

            return lg_thumbnail_es5_assign.apply(this, arguments);
        };

        var thumbnailsSettings = {
            thumbnail: true,
            animateThumb: true,
            currentPagerPosition: 'middle',
            alignThumbnails: 'middle',
            thumbWidth: 100,
            thumbHeight: '80px',
            thumbMargin: 5,
            appendThumbnailsTo: '.lg-components',
            toggleThumb: false,
            enableThumbDrag: true,
            enableThumbSwipe: true,
            thumbnailSwipeThreshold: 10,
            loadYouTubeThumbnail: true,
            youTubeThumbSize: 1,
            thumbnailPluginStrings: {
                toggleThumbnails: 'Toggle thumbnails'
            }
        };
        /**
         * List of lightGallery events
         * All events should be documented here
         * Below interfaces are used to build the website documentations
         * */

        var lg_thumbnail_es5_lGEvents = {
            afterAppendSlide: 'lgAfterAppendSlide',
            init: 'lgInit',
            hasVideo: 'lgHasVideo',
            containerResize: 'lgContainerResize',
            updateSlides: 'lgUpdateSlides',
            afterAppendSubHtml: 'lgAfterAppendSubHtml',
            beforeOpen: 'lgBeforeOpen',
            afterOpen: 'lgAfterOpen',
            slideItemLoad: 'lgSlideItemLoad',
            beforeSlide: 'lgBeforeSlide',
            afterSlide: 'lgAfterSlide',
            posterClick: 'lgPosterClick',
            dragStart: 'lgDragStart',
            dragMove: 'lgDragMove',
            dragEnd: 'lgDragEnd',
            beforeNextSlide: 'lgBeforeNextSlide',
            beforePrevSlide: 'lgBeforePrevSlide',
            beforeClose: 'lgBeforeClose',
            afterClose: 'lgAfterClose',
            rotateLeft: 'lgRotateLeft',
            rotateRight: 'lgRotateRight',
            flipHorizontal: 'lgFlipHorizontal',
            flipVertical: 'lgFlipVertical',
            autoplay: 'lgAutoplay',
            autoplayStart: 'lgAutoplayStart',
            autoplayStop: 'lgAutoplayStop'
        };

        var Thumbnail =
            /** @class */
            function () {
                function Thumbnail(instance, $LG) {
                    this.thumbOuterWidth = 0;
                    this.thumbTotalWidth = 0;
                    this.translateX = 0;
                    this.thumbClickable = false; // get lightGallery core plugin instance

                    this.core = instance;
                    this.$LG = $LG;
                    return this;
                }

                Thumbnail.prototype.init = function () {
                    // extend module default settings with lightGallery core settings
                    this.settings = lg_thumbnail_es5_assign(lg_thumbnail_es5_assign({}, thumbnailsSettings), this.core.settings);
                    this.thumbOuterWidth = 0;
                    this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin); // Thumbnail animation value

                    this.translateX = 0;
                    this.setAnimateThumbStyles();

                    if (!this.core.settings.allowMediaOverlap) {
                        this.settings.toggleThumb = false;
                    }

                    if (this.settings.thumbnail) {
                        this.build();

                        if (this.settings.animateThumb) {
                            if (this.settings.enableThumbDrag) {
                                this.enableThumbDrag();
                            }

                            if (this.settings.enableThumbSwipe) {
                                this.enableThumbSwipe();
                            }

                            this.thumbClickable = false;
                        } else {
                            this.thumbClickable = true;
                        }

                        this.toggleThumbBar();
                        this.thumbKeyPress();
                    }
                };

                Thumbnail.prototype.build = function () {
                    var _this = this;

                    this.setThumbMarkup();
                    this.manageActiveClassOnSlideChange();
                    this.$lgThumb.first().on('click.lg touchend.lg', function (e) {
                        var $target = _this.$LG(e.target);

                        if (!$target.hasAttribute('data-lg-item-id')) {
                            return;
                        }

                        setTimeout(function () {
                            // In IE9 and bellow touch does not support
                            // Go to slide if browser does not support css transitions
                            if (_this.thumbClickable && !_this.core.lgBusy) {
                                var index = parseInt($target.attr('data-lg-item-id'));

                                _this.core.slide(index, false, true, false);
                            }
                        }, 50);
                    });
                    this.core.LGel.on(lg_thumbnail_es5_lGEvents.beforeSlide + ".thumb", function (event) {
                        var index = event.detail.index;

                        _this.animateThumb(index);
                    });
                    this.core.LGel.on(lg_thumbnail_es5_lGEvents.beforeOpen + ".thumb", function () {
                        _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
                    });
                    this.core.LGel.on(lg_thumbnail_es5_lGEvents.updateSlides + ".thumb", function () {
                        _this.rebuildThumbnails();
                    });
                    this.core.LGel.on(lg_thumbnail_es5_lGEvents.containerResize + ".thumb", function () {
                        if (!_this.core.lgOpened) return;
                        setTimeout(function () {
                            _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;

                            _this.animateThumb(_this.core.index);

                            _this.thumbOuterWidth = _this.core.outer.get().offsetWidth;
                        }, 50);
                    });
                };

                Thumbnail.prototype.setThumbMarkup = function () {
                    var thumbOuterClassNames = 'lg-thumb-outer ';

                    if (this.settings.alignThumbnails) {
                        thumbOuterClassNames += "lg-thumb-align-" + this.settings.alignThumbnails;
                    }

                    var html = "<div class=\"" + thumbOuterClassNames + "\">\n        <div class=\"lg-thumb lg-group\">\n        </div>\n        </div>";
                    this.core.outer.addClass('lg-has-thumb');

                    if (this.settings.appendThumbnailsTo === '.lg-components') {
                        this.core.$lgComponents.append(html);
                    } else {
                        this.core.outer.append(html);
                    }

                    this.$thumbOuter = this.core.outer.find('.lg-thumb-outer').first();
                    this.$lgThumb = this.core.outer.find('.lg-thumb').first();

                    if (this.settings.animateThumb) {
                        this.core.outer.find('.lg-thumb').css('transition-duration', this.core.settings.speed + 'ms').css('width', this.thumbTotalWidth + 'px').css('position', 'relative');
                    }

                    this.setThumbItemHtml(this.core.galleryItems);
                };

                Thumbnail.prototype.enableThumbDrag = function () {
                    var _this = this;

                    var thumbDragUtils = {
                        cords: {
                            startX: 0,
                            endX: 0
                        },
                        isMoved: false,
                        newTranslateX: 0,
                        startTime: new Date(),
                        endTime: new Date(),
                        touchMoveTime: 0
                    };
                    var isDragging = false;
                    this.$thumbOuter.addClass('lg-grab');
                    this.core.outer.find('.lg-thumb').first().on('mousedown.lg.thumb', function (e) {
                        if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                            // execute only on .lg-object
                            e.preventDefault();
                            thumbDragUtils.cords.startX = e.pageX;
                            thumbDragUtils.startTime = new Date();
                            _this.thumbClickable = false;
                            isDragging = true; // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723

                            _this.core.outer.get().scrollLeft += 1;
                            _this.core.outer.get().scrollLeft -= 1; // *

                            _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
                        }
                    });
                    this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, function (e) {
                        if (!_this.core.lgOpened) return;

                        if (isDragging) {
                            thumbDragUtils.cords.endX = e.pageX;
                            thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
                        }
                    });
                    this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, function () {
                        if (!_this.core.lgOpened) return;

                        if (thumbDragUtils.isMoved) {
                            thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
                        } else {
                            _this.thumbClickable = true;
                        }

                        if (isDragging) {
                            isDragging = false;

                            _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
                        }
                    });
                };

                Thumbnail.prototype.enableThumbSwipe = function () {
                    var _this = this;

                    var thumbDragUtils = {
                        cords: {
                            startX: 0,
                            endX: 0
                        },
                        isMoved: false,
                        newTranslateX: 0,
                        startTime: new Date(),
                        endTime: new Date(),
                        touchMoveTime: 0
                    };
                    this.$lgThumb.on('touchstart.lg', function (e) {
                        if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                            e.preventDefault();
                            thumbDragUtils.cords.startX = e.targetTouches[0].pageX;
                            _this.thumbClickable = false;
                            thumbDragUtils.startTime = new Date();
                        }
                    });
                    this.$lgThumb.on('touchmove.lg', function (e) {
                        if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                            e.preventDefault();
                            thumbDragUtils.cords.endX = e.targetTouches[0].pageX;
                            thumbDragUtils = _this.onThumbTouchMove(thumbDragUtils);
                        }
                    });
                    this.$lgThumb.on('touchend.lg', function () {
                        if (thumbDragUtils.isMoved) {
                            thumbDragUtils = _this.onThumbTouchEnd(thumbDragUtils);
                        } else {
                            _this.thumbClickable = true;
                        }
                    });
                }; // Rebuild thumbnails


                Thumbnail.prototype.rebuildThumbnails = function () {
                    var _this = this; // Remove transitions


                    this.$thumbOuter.addClass('lg-rebuilding-thumbnails');
                    setTimeout(function () {
                        _this.thumbTotalWidth = _this.core.galleryItems.length * (_this.settings.thumbWidth + _this.settings.thumbMargin);

                        _this.$lgThumb.css('width', _this.thumbTotalWidth + 'px');

                        _this.$lgThumb.empty();

                        _this.setThumbItemHtml(_this.core.galleryItems);

                        _this.animateThumb(_this.core.index);
                    }, 50);
                    setTimeout(function () {
                        _this.$thumbOuter.removeClass('lg-rebuilding-thumbnails');
                    }, 200);
                }; // @ts-check


                Thumbnail.prototype.setTranslate = function (value) {
                    this.$lgThumb.css('transform', 'translate3d(-' + value + 'px, 0px, 0px)');
                };

                Thumbnail.prototype.getPossibleTransformX = function (left) {
                    if (left > this.thumbTotalWidth - this.thumbOuterWidth) {
                        left = this.thumbTotalWidth - this.thumbOuterWidth;
                    }

                    if (left < 0) {
                        left = 0;
                    }

                    return left;
                };

                Thumbnail.prototype.animateThumb = function (index) {
                    this.$lgThumb.css('transition-duration', this.core.settings.speed + 'ms');

                    if (this.settings.animateThumb) {
                        var position = 0;

                        switch (this.settings.currentPagerPosition) {
                            case 'left':
                                position = 0;
                                break;

                            case 'middle':
                                position = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                                break;

                            case 'right':
                                position = this.thumbOuterWidth - this.settings.thumbWidth;
                        }

                        this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * index - 1 - position;

                        if (this.translateX > this.thumbTotalWidth - this.thumbOuterWidth) {
                            this.translateX = this.thumbTotalWidth - this.thumbOuterWidth;
                        }

                        if (this.translateX < 0) {
                            this.translateX = 0;
                        }

                        this.setTranslate(this.translateX);
                    }
                };

                Thumbnail.prototype.onThumbTouchMove = function (thumbDragUtils) {
                    thumbDragUtils.newTranslateX = this.translateX;
                    thumbDragUtils.isMoved = true;
                    thumbDragUtils.touchMoveTime = new Date().valueOf();
                    thumbDragUtils.newTranslateX -= thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
                    thumbDragUtils.newTranslateX = this.getPossibleTransformX(thumbDragUtils.newTranslateX); // move current slide

                    this.setTranslate(thumbDragUtils.newTranslateX);
                    this.$thumbOuter.addClass('lg-dragging');
                    return thumbDragUtils;
                };

                Thumbnail.prototype.onThumbTouchEnd = function (thumbDragUtils) {
                    thumbDragUtils.isMoved = false;
                    thumbDragUtils.endTime = new Date();
                    this.$thumbOuter.removeClass('lg-dragging');
                    var touchDuration = thumbDragUtils.endTime.valueOf() - thumbDragUtils.startTime.valueOf();
                    var distanceXnew = thumbDragUtils.cords.endX - thumbDragUtils.cords.startX;
                    var speedX = Math.abs(distanceXnew) / touchDuration; // Some magical numbers
                    // Can be improved

                    if (speedX > 0.15 && thumbDragUtils.endTime.valueOf() - thumbDragUtils.touchMoveTime < 30) {
                        speedX += 1;

                        if (speedX > 2) {
                            speedX += 1;
                        }

                        speedX = speedX + speedX * (Math.abs(distanceXnew) / this.thumbOuterWidth);
                        this.$lgThumb.css('transition-duration', Math.min(speedX - 1, 2) + 'settings');
                        distanceXnew = distanceXnew * speedX;
                        this.translateX = this.getPossibleTransformX(this.translateX - distanceXnew);
                        this.setTranslate(this.translateX);
                    } else {
                        this.translateX = thumbDragUtils.newTranslateX;
                    }

                    if (Math.abs(thumbDragUtils.cords.endX - thumbDragUtils.cords.startX) < this.settings.thumbnailSwipeThreshold) {
                        this.thumbClickable = true;
                    }

                    return thumbDragUtils;
                };

                Thumbnail.prototype.getThumbHtml = function (thumb, index) {
                    var slideVideoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
                    var thumbImg;

                    if (slideVideoInfo.youtube) {
                        if (this.settings.loadYouTubeThumbnail) {
                            thumbImg = '//img.youtube.com/vi/' + slideVideoInfo.youtube[1] + '/' + this.settings.youTubeThumbSize + '.jpg';
                        } else {
                            thumbImg = thumb;
                        }
                    } else {
                        thumbImg = thumb;
                    }

                    return "<div data-lg-item-id=\"" + index + "\" class=\"lg-thumb-item " + (index === this.core.index ? ' active' : '') + "\" \n        style=\"width:" + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + "px;\">\n            <img data-lg-item-id=\"" + index + "\" src=\"" + thumbImg + "\" />\n        </div>";
                };

                Thumbnail.prototype.getThumbItemHtml = function (items) {
                    var thumbList = '';

                    for (var i = 0; i < items.length; i++) {
                        thumbList += this.getThumbHtml(items[i].thumb, i);
                    }

                    return thumbList;
                };

                Thumbnail.prototype.setThumbItemHtml = function (items) {
                    var thumbList = this.getThumbItemHtml(items);
                    this.$lgThumb.html(thumbList);
                };

                Thumbnail.prototype.setAnimateThumbStyles = function () {
                    if (this.settings.animateThumb) {
                        this.core.outer.addClass('lg-animate-thumb');
                    }
                }; // Manage thumbnail active calss


                Thumbnail.prototype.manageActiveClassOnSlideChange = function () {
                    var _this = this; // manage active class for thumbnail


                    this.core.LGel.on(lg_thumbnail_es5_lGEvents.beforeSlide + ".thumb", function (event) {
                        var $thumb = _this.core.outer.find('.lg-thumb-item');

                        var index = event.detail.index;
                        $thumb.removeClass('active');
                        $thumb.eq(index).addClass('active');
                    });
                }; // Toggle thumbnail bar


                Thumbnail.prototype.toggleThumbBar = function () {
                    var _this = this;

                    if (this.settings.toggleThumb) {
                        this.core.outer.addClass('lg-can-toggle');
                        this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.thumbnailPluginStrings['toggleThumbnails'] + '" class="lg-toggle-thumb lg-icon"></button>');
                        this.core.outer.find('.lg-toggle-thumb').first().on('click.lg', function () {
                            _this.core.outer.toggleClass('lg-components-open');
                        });
                    }
                };

                Thumbnail.prototype.thumbKeyPress = function () {
                    var _this = this;

                    this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, function (e) {
                        if (!_this.core.lgOpened || !_this.settings.toggleThumb) return;

                        if (e.keyCode === 38) {
                            e.preventDefault();

                            _this.core.outer.addClass('lg-components-open');
                        } else if (e.keyCode === 40) {
                            e.preventDefault();

                            _this.core.outer.removeClass('lg-components-open');
                        }
                    });
                };

                Thumbnail.prototype.destroy = function () {
                    if (this.settings.thumbnail) {
                        this.$LG(window).off(".lg.thumb.global" + this.core.lgId);
                        this.core.LGel.off('.lg.thumb');
                        this.core.LGel.off('.thumb');
                        this.$thumbOuter.remove();
                        this.core.outer.removeClass('lg-has-thumb');
                    }
                };

                return Thumbnail;
            }();

        /* harmony default export */
        const lg_thumbnail_es5 = (Thumbnail);
        ;// CONCATENATED MODULE: ./node_modules/lightgallery/plugins/zoom/lg-zoom.es5.js
        /*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var lg_zoom_es5_assign = function () {
            lg_zoom_es5_assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];

                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }

                return t;
            };

            return lg_zoom_es5_assign.apply(this, arguments);
        };

        var zoomSettings = {
            scale: 1,
            zoom: true,
            actualSize: true,
            showZoomInOutIcons: false,
            actualSizeIcons: {
                zoomIn: 'lg-zoom-in',
                zoomOut: 'lg-zoom-out'
            },
            enableZoomAfter: 300,
            zoomPluginStrings: {
                zoomIn: 'Zoom in',
                zoomOut: 'Zoom out',
                viewActualSize: 'View actual size'
            }
        };
        /**
         * List of lightGallery events
         * All events should be documented here
         * Below interfaces are used to build the website documentations
         * */

        var lg_zoom_es5_lGEvents = {
            afterAppendSlide: 'lgAfterAppendSlide',
            init: 'lgInit',
            hasVideo: 'lgHasVideo',
            containerResize: 'lgContainerResize',
            updateSlides: 'lgUpdateSlides',
            afterAppendSubHtml: 'lgAfterAppendSubHtml',
            beforeOpen: 'lgBeforeOpen',
            afterOpen: 'lgAfterOpen',
            slideItemLoad: 'lgSlideItemLoad',
            beforeSlide: 'lgBeforeSlide',
            afterSlide: 'lgAfterSlide',
            posterClick: 'lgPosterClick',
            dragStart: 'lgDragStart',
            dragMove: 'lgDragMove',
            dragEnd: 'lgDragEnd',
            beforeNextSlide: 'lgBeforeNextSlide',
            beforePrevSlide: 'lgBeforePrevSlide',
            beforeClose: 'lgBeforeClose',
            afterClose: 'lgAfterClose',
            rotateLeft: 'lgRotateLeft',
            rotateRight: 'lgRotateRight',
            flipHorizontal: 'lgFlipHorizontal',
            flipVertical: 'lgFlipVertical',
            autoplay: 'lgAutoplay',
            autoplayStart: 'lgAutoplayStart',
            autoplayStop: 'lgAutoplayStop'
        };

        var lg_zoom_es5_Zoom =
            /** @class */
            function () {
                function Zoom(instance, $LG) {
                    // get lightGallery core plugin instance
                    this.core = instance;
                    this.$LG = $LG;
                    this.settings = lg_zoom_es5_assign(lg_zoom_es5_assign({}, zoomSettings), this.core.settings);
                    return this;
                } // Append Zoom controls. Actual size, Zoom-in, Zoom-out


                Zoom.prototype.buildTemplates = function () {
                    var zoomIcons = this.settings.showZoomInOutIcons ? "<button id=\"" + this.core.getIdName('lg-zoom-in') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-in lg-icon\"></button><button id=\"" + this.core.getIdName('lg-zoom-out') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['zoomIn'] + "\" class=\"lg-zoom-out lg-icon\"></button>" : '';

                    if (this.settings.actualSize) {
                        zoomIcons += "<button id=\"" + this.core.getIdName('lg-actual-size') + "\" type=\"button\" aria-label=\"" + this.settings.zoomPluginStrings['viewActualSize'] + "\" class=\"" + this.settings.actualSizeIcons.zoomIn + " lg-icon\"></button>";
                    }

                    this.core.outer.addClass('lg-use-transition-for-zoom');
                    this.core.$toolbar.first().append(zoomIcons);
                };
                /**
                 * @desc Enable zoom option only once the image is completely loaded
                 * If zoomFromOrigin is true, Zoom is enabled once the dummy image has been inserted
                 *
                 * Zoom styles are defined under lg-zoomable CSS class.
                 */


                Zoom.prototype.enableZoom = function (event) {
                    var _this = this; // delay will be 0 except first time


                    var _speed = this.settings.enableZoomAfter + event.detail.delay; // set _speed value 0 if gallery opened from direct url and if it is first slide


                    if (this.$LG('body').first().hasClass('lg-from-hash') && event.detail.delay) {
                        // will execute only once
                        _speed = 0;
                    } else {
                        // Remove lg-from-hash to enable starting animation.
                        this.$LG('body').first().removeClass('lg-from-hash');
                    }

                    this.zoomableTimeout = setTimeout(function () {
                        if (!_this.isImageSlide()) {
                            return;
                        }

                        _this.core.getSlideItem(event.detail.index).addClass('lg-zoomable');

                        if (event.detail.index === _this.core.index) {
                            _this.setZoomEssentials();
                        }
                    }, _speed + 30);
                };

                Zoom.prototype.enableZoomOnSlideItemLoad = function () {
                    // Add zoomable class
                    this.core.LGel.on(lg_zoom_es5_lGEvents.slideItemLoad + ".zoom", this.enableZoom.bind(this));
                };

                Zoom.prototype.getModifier = function (rotateValue, axis, el) {
                    var originalRotate = rotateValue;
                    rotateValue = Math.abs(rotateValue);
                    var transformValues = this.getCurrentTransform(el);

                    if (!transformValues) {
                        return 1;
                    }

                    var modifier = 1;

                    if (axis === 'X') {
                        var flipHorizontalValue = Math.sign(parseFloat(transformValues[0]));

                        if (rotateValue === 0 || rotateValue === 180) {
                            modifier = 1;
                        } else if (rotateValue === 90) {
                            if (originalRotate === -90 && flipHorizontalValue === 1 || originalRotate === 90 && flipHorizontalValue === -1) {
                                modifier = -1;
                            } else {
                                modifier = 1;
                            }
                        }

                        modifier = modifier * flipHorizontalValue;
                    } else {
                        var flipVerticalValue = Math.sign(parseFloat(transformValues[3]));

                        if (rotateValue === 0 || rotateValue === 180) {
                            modifier = 1;
                        } else if (rotateValue === 90) {
                            var sinX = parseFloat(transformValues[1]);
                            var sinMinusX = parseFloat(transformValues[2]);
                            modifier = Math.sign(sinX * sinMinusX * originalRotate * flipVerticalValue);
                        }

                        modifier = modifier * flipVerticalValue;
                    }

                    return modifier;
                };

                Zoom.prototype.getImageSize = function ($image, rotateValue, axis) {
                    var imageSizes = {
                        y: 'offsetHeight',
                        x: 'offsetWidth'
                    };

                    if (Math.abs(rotateValue) === 90) {
                        // Swap axis
                        if (axis === 'x') {
                            axis = 'y';
                        } else {
                            axis = 'x';
                        }
                    }

                    return $image[imageSizes[axis]];
                };

                Zoom.prototype.getDragCords = function (e, rotateValue) {
                    if (rotateValue === 90) {
                        return {
                            x: e.pageY,
                            y: e.pageX
                        };
                    } else {
                        return {
                            x: e.pageX,
                            y: e.pageY
                        };
                    }
                };

                Zoom.prototype.getSwipeCords = function (e, rotateValue) {
                    var x = e.targetTouches[0].pageX;
                    var y = e.targetTouches[0].pageY;

                    if (rotateValue === 90) {
                        return {
                            x: y,
                            y: x
                        };
                    } else {
                        return {
                            x: x,
                            y: y
                        };
                    }
                };

                Zoom.prototype.getDragAllowedAxises = function (rotateValue, scale) {
                    scale = scale || this.scale || 1;
                    var allowY = this.imageYSize * scale > this.containerRect.height;
                    var allowX = this.imageXSize * scale > this.containerRect.width;

                    if (rotateValue === 90) {
                        return {
                            allowX: allowY,
                            allowY: allowX
                        };
                    } else {
                        return {
                            allowX: allowX,
                            allowY: allowY
                        };
                    }
                };
                /**
                 *
                 * @param {Element} el
                 * @return matrix(cos(X), sin(X), -sin(X), cos(X), 0, 0);
                 * Get the current transform value
                 */


                Zoom.prototype.getCurrentTransform = function (el) {
                    if (!el) {
                        return;
                    }

                    var st = window.getComputedStyle(el, null);
                    var tm = st.getPropertyValue('-webkit-transform') || st.getPropertyValue('-moz-transform') || st.getPropertyValue('-ms-transform') || st.getPropertyValue('-o-transform') || st.getPropertyValue('transform') || 'none';

                    if (tm !== 'none') {
                        return tm.split('(')[1].split(')')[0].split(',');
                    }

                    return;
                };

                Zoom.prototype.getCurrentRotation = function (el) {
                    if (!el) {
                        return 0;
                    }

                    var values = this.getCurrentTransform(el);

                    if (values) {
                        return Math.round(Math.atan2(parseFloat(values[1]), parseFloat(values[0])) * (180 / Math.PI)); // If you want rotate in 360
                        //return (angle < 0 ? angle + 360 : angle);
                    }

                    return 0;
                };

                Zoom.prototype.setZoomEssentials = function () {
                    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
                    var rotateEl = this.core.getSlideItem(this.core.index).find('.lg-img-rotate').first().get();
                    this.rotateValue = this.getCurrentRotation(rotateEl);
                    this.imageYSize = this.getImageSize($image.get(), this.rotateValue, 'y');
                    this.imageXSize = this.getImageSize($image.get(), this.rotateValue, 'x');
                    this.containerRect = this.core.outer.get().getBoundingClientRect();
                    this.modifierX = this.getModifier(this.rotateValue, 'X', rotateEl);
                    this.modifierY = this.getModifier(this.rotateValue, 'Y', rotateEl);
                };
                /**
                 * @desc Image zoom
                 * Translate the wrap and scale the image to get better user experience
                 *
                 * @param {String} scale - Zoom decrement/increment value
                 */


                Zoom.prototype.zoomImage = function (scale) {
                    // Find offset manually to avoid issue after zoom
                    var offsetX = (this.containerRect.width - this.imageXSize) / 2 + this.containerRect.left;
                    var _a = this.core.mediaContainerPosition,
                        top = _a.top,
                        bottom = _a.bottom;
                    var topBottomSpacing = Math.abs(top - bottom) / 2;
                    var offsetY = (this.containerRect.height - this.imageYSize - topBottomSpacing * this.modifierX) / 2 + this.scrollTop + this.containerRect.top;
                    var originalX;
                    var originalY;

                    if (scale === 1) {
                        this.positionChanged = false;
                    }

                    var dragAllowedAxises = this.getDragAllowedAxises(Math.abs(this.rotateValue), scale);
                    var allowY = dragAllowedAxises.allowY,
                        allowX = dragAllowedAxises.allowX;

                    if (this.positionChanged) {
                        originalX = this.left / (this.scale - 1);
                        originalY = this.top / (this.scale - 1);
                        this.pageX = Math.abs(originalX) + offsetX;
                        this.pageY = Math.abs(originalY) + offsetY;
                        this.positionChanged = false;
                    }

                    var possibleSwipeCords = this.getPossibleSwipeDragCords(this.rotateValue, scale);

                    var _x = offsetX - this.pageX;

                    var _y = offsetY - this.pageY;

                    var x = (scale - 1) * _x;
                    var y = (scale - 1) * _y;

                    if (allowX) {
                        if (this.isBeyondPossibleLeft(x, possibleSwipeCords.minX)) {
                            x = possibleSwipeCords.minX;
                        } else if (this.isBeyondPossibleRight(x, possibleSwipeCords.maxX)) {
                            x = possibleSwipeCords.maxX;
                        }
                    } else {
                        if (scale > 1) {
                            if (x < possibleSwipeCords.minX) {
                                x = possibleSwipeCords.minX;
                            } else if (x > possibleSwipeCords.maxX) {
                                x = possibleSwipeCords.maxX;
                            }
                        }
                    }

                    if (allowY) {
                        if (this.isBeyondPossibleTop(y, possibleSwipeCords.minY)) {
                            y = possibleSwipeCords.minY;
                        } else if (this.isBeyondPossibleBottom(y, possibleSwipeCords.maxY)) {
                            y = possibleSwipeCords.maxY;
                        }
                    } else {
                        // If the translate value based on index of beyond the viewport, utilize the available space to prevent image being cut out
                        if (scale > 1) {
                            //If image goes beyond viewport top, use the minim possible translate value
                            if (y < possibleSwipeCords.minY) {
                                y = possibleSwipeCords.minY;
                            } else if (y > possibleSwipeCords.maxY) {
                                y = possibleSwipeCords.maxY;
                            }
                        }
                    }

                    this.setZoomStyles({
                        x: x,
                        y: y,
                        scale: scale
                    });
                };
                /**
                 * @desc apply scale3d to image and translate to image wrap
                 * @param {style} X,Y and scale
                 */


                Zoom.prototype.setZoomStyles = function (style) {
                    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
                    var $dummyImage = this.core.outer.find('.lg-current .lg-dummy-img').first();
                    var $imageWrap = $image.parent();
                    this.scale = style.scale;
                    $image.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
                    $dummyImage.css('transform', 'scale3d(' + style.scale + ', ' + style.scale + ', 1)');
                    var transform = 'translate3d(' + style.x + 'px, ' + style.y + 'px, 0)';
                    $imageWrap.css('transform', transform);
                    this.left = style.x;
                    this.top = style.y;
                };
                /**
                 * @param index - Index of the current slide
                 * @param event - event will be available only if the function is called on clicking/taping the imags
                 */


                Zoom.prototype.setActualSize = function (index, event) {
                    var _this = this; // Allow zoom only on image


                    if (!this.isImageSlide() || this.core.outer.hasClass('lg-first-slide-loading')) {
                        return;
                    }

                    var scale = this.getCurrentImageActualSizeScale();

                    if (this.core.outer.hasClass('lg-zoomed')) {
                        this.scale = 1;
                    } else {
                        this.scale = this.getScale(scale);
                    }

                    this.setPageCords(event);
                    this.beginZoom(this.scale);
                    this.zoomImage(this.scale);
                    setTimeout(function () {
                        _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
                    }, 10);
                };

                Zoom.prototype.getNaturalWidth = function (index) {
                    var $image = this.core.getSlideItem(index).find('.lg-image').first();
                    var naturalWidth = this.core.galleryItems[index].width;
                    return naturalWidth ? parseFloat(naturalWidth) : $image.get().naturalWidth;
                };

                Zoom.prototype.getActualSizeScale = function (naturalWidth, width) {
                    var _scale;

                    var scale;

                    if (naturalWidth > width) {
                        _scale = naturalWidth / width;
                        scale = _scale || 2;
                    } else {
                        scale = 1;
                    }

                    return scale;
                };

                Zoom.prototype.getCurrentImageActualSizeScale = function () {
                    var $image = this.core.getSlideItem(this.core.index).find('.lg-image').first();
                    var width = $image.get().offsetWidth;
                    var naturalWidth = this.getNaturalWidth(this.core.index) || width;
                    return this.getActualSizeScale(naturalWidth, width);
                };

                Zoom.prototype.getPageCords = function (event) {
                    var cords = {};

                    if (event) {
                        cords.x = event.pageX || event.targetTouches[0].pageX;
                        cords.y = event.pageY || event.targetTouches[0].pageY;
                    } else {
                        var containerRect = this.core.outer.get().getBoundingClientRect();
                        cords.x = containerRect.width / 2 + containerRect.left;
                        cords.y = containerRect.height / 2 + this.scrollTop + containerRect.top;
                    }

                    return cords;
                };

                Zoom.prototype.setPageCords = function (event) {
                    var pageCords = this.getPageCords(event);
                    this.pageX = pageCords.x;
                    this.pageY = pageCords.y;
                }; // If true, zoomed - in else zoomed out


                Zoom.prototype.beginZoom = function (scale) {
                    this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');

                    if (scale > 1) {
                        this.core.outer.addClass('lg-zoomed');
                        var $actualSize = this.core.getElementById('lg-actual-size');
                        $actualSize.removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut);
                    } else {
                        this.resetZoom();
                    }

                    return scale > 1;
                };

                Zoom.prototype.getScale = function (scale) {
                    var actualSizeScale = this.getCurrentImageActualSizeScale();

                    if (scale < 1) {
                        scale = 1;
                    } else if (scale > actualSizeScale) {
                        scale = actualSizeScale;
                    }

                    return scale;
                };

                Zoom.prototype.init = function () {
                    var _this = this;

                    if (!this.settings.zoom) {
                        return;
                    }

                    this.buildTemplates();
                    this.enableZoomOnSlideItemLoad();
                    var tapped = null;
                    this.core.outer.on('dblclick.lg', function (event) {
                        if (!_this.$LG(event.target).hasClass('lg-image')) {
                            return;
                        }

                        _this.setActualSize(_this.core.index, event);
                    });
                    this.core.outer.on('touchstart.lg', function (event) {
                        var $target = _this.$LG(event.target);

                        if (event.targetTouches.length === 1 && $target.hasClass('lg-image')) {
                            if (!tapped) {
                                tapped = setTimeout(function () {
                                    tapped = null;
                                }, 300);
                            } else {
                                clearTimeout(tapped);
                                tapped = null;
                                event.preventDefault();

                                _this.setActualSize(_this.core.index, event);
                            }
                        }
                    }); // Update zoom on resize and orientationchange

                    this.core.LGel.on(lg_zoom_es5_lGEvents.containerResize + ".zoom " + lg_zoom_es5_lGEvents.rotateRight + ".zoom " + lg_zoom_es5_lGEvents.rotateLeft + ".zoom " + lg_zoom_es5_lGEvents.flipHorizontal + ".zoom " + lg_zoom_es5_lGEvents.flipVertical + ".zoom", function () {
                        if (!_this.core.lgOpened || !_this.isImageSlide()) return;

                        _this.setPageCords();

                        _this.setZoomEssentials();

                        _this.zoomImage(_this.scale);
                    }); // Update zoom on resize and orientationchange

                    this.$LG(window).on("scroll.lg.zoom.global" + this.core.lgId, function () {
                        if (!_this.core.lgOpened) return;
                        _this.scrollTop = _this.$LG(window).scrollTop();
                    });
                    this.core.getElementById('lg-zoom-out').on('click.lg', function () {
                        if (_this.core.outer.find('.lg-current .lg-image').get()) {
                            _this.scale -= _this.settings.scale;
                            _this.scale = _this.getScale(_this.scale);

                            _this.beginZoom(_this.scale);

                            _this.zoomImage(_this.scale);
                        }
                    });
                    this.core.getElementById('lg-zoom-in').on('click.lg', function () {
                        _this.zoomIn();
                    });
                    this.core.getElementById('lg-actual-size').on('click.lg', function () {
                        _this.setActualSize(_this.core.index);
                    });
                    this.core.LGel.on(lg_zoom_es5_lGEvents.beforeOpen + ".zoom", function () {
                        _this.core.outer.find('.lg-item').removeClass('lg-zoomable');
                    });
                    this.core.LGel.on(lg_zoom_es5_lGEvents.afterOpen + ".zoom", function () {
                        _this.scrollTop = _this.$LG(window).scrollTop(); // Set the initial value center

                        _this.pageX = _this.core.outer.width() / 2;
                        _this.pageY = _this.core.outer.height() / 2 + _this.scrollTop;
                        _this.scale = 1;
                    }); // Reset zoom on slide change

                    this.core.LGel.on(lg_zoom_es5_lGEvents.afterSlide + ".zoom", function (event) {
                        var prevIndex = event.detail.prevIndex;
                        _this.scale = 1;
                        _this.positionChanged = false;

                        _this.resetZoom(prevIndex);

                        if (_this.isImageSlide()) {
                            _this.setZoomEssentials();
                        }
                    }); // Drag option after zoom

                    this.zoomDrag();
                    this.pinchZoom();
                    this.zoomSwipe(); // Store the zoomable timeout value just to clear it while closing

                    this.zoomableTimeout = false;
                    this.positionChanged = false;
                };

                Zoom.prototype.zoomIn = function (scale) {
                    // Allow zoom only on image
                    if (!this.isImageSlide()) {
                        return;
                    }

                    if (scale) {
                        this.scale = scale;
                    } else {
                        this.scale += this.settings.scale;
                    }

                    this.scale = this.getScale(this.scale);
                    this.beginZoom(this.scale);
                    this.zoomImage(this.scale);
                }; // Reset zoom effect


                Zoom.prototype.resetZoom = function (index) {
                    this.core.outer.removeClass('lg-zoomed lg-zoom-drag-transition');
                    var $actualSize = this.core.getElementById('lg-actual-size');
                    var $item = this.core.getSlideItem(index !== undefined ? index : this.core.index);
                    $actualSize.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn);
                    $item.find('.lg-img-wrap').first().removeAttr('style');
                    $item.find('.lg-image').first().removeAttr('style');
                    this.scale = 1;
                    this.left = 0;
                    this.top = 0; // Reset pagx pagy values to center

                    this.setPageCords();
                };

                Zoom.prototype.getTouchDistance = function (e) {
                    return Math.sqrt((e.targetTouches[0].pageX - e.targetTouches[1].pageX) * (e.targetTouches[0].pageX - e.targetTouches[1].pageX) + (e.targetTouches[0].pageY - e.targetTouches[1].pageY) * (e.targetTouches[0].pageY - e.targetTouches[1].pageY));
                };

                Zoom.prototype.pinchZoom = function () {
                    var _this = this;

                    var startDist = 0;
                    var pinchStarted = false;
                    var initScale = 1;
                    var $item = this.core.getSlideItem(this.core.index);
                    this.core.$inner.on('touchstart.lg', function (e) {
                        $item = _this.core.getSlideItem(_this.core.index);

                        if (!_this.isImageSlide()) {
                            return;
                        }

                        if (e.targetTouches.length === 2 && !_this.core.outer.hasClass('lg-first-slide-loading') && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
                            initScale = _this.scale || 1;

                            _this.core.outer.removeClass('lg-zoom-drag-transition lg-zoom-dragging');

                            _this.core.touchAction = 'pinch';
                            startDist = _this.getTouchDistance(e);
                        }
                    });
                    this.core.$inner.on('touchmove.lg', function (e) {
                        if (e.targetTouches.length === 2 && _this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
                            e.preventDefault();

                            var endDist = _this.getTouchDistance(e);

                            var distance = startDist - endDist;

                            if (!pinchStarted && Math.abs(distance) > 5) {
                                pinchStarted = true;
                            }

                            if (pinchStarted) {
                                _this.scale = Math.max(1, initScale + -distance * 0.008);

                                _this.zoomImage(_this.scale);
                            }
                        }
                    });
                    this.core.$inner.on('touchend.lg', function (e) {
                        if (_this.core.touchAction === 'pinch' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
                            pinchStarted = false;
                            startDist = 0;

                            if (_this.scale <= 1) {
                                _this.resetZoom();
                            } else {
                                _this.scale = _this.getScale(_this.scale);

                                _this.zoomImage(_this.scale);

                                _this.core.outer.addClass('lg-zoomed');
                            }

                            _this.core.touchAction = undefined;
                        }
                    });
                };

                Zoom.prototype.touchendZoom = function (startCoords, endCoords, allowX, allowY, touchDuration, rotateValue) {
                    var distanceXnew = endCoords.x - startCoords.x;
                    var distanceYnew = endCoords.y - startCoords.y;
                    var speedX = Math.abs(distanceXnew) / touchDuration + 1;
                    var speedY = Math.abs(distanceYnew) / touchDuration + 1;

                    if (speedX > 2) {
                        speedX += 1;
                    }

                    if (speedY > 2) {
                        speedY += 1;
                    }

                    distanceXnew = distanceXnew * speedX;
                    distanceYnew = distanceYnew * speedY;

                    var _LGel = this.core.getSlideItem(this.core.index).find('.lg-img-wrap').first();

                    var distance = {};
                    distance.x = this.left + distanceXnew * this.modifierX;
                    distance.y = this.top + distanceYnew * this.modifierY;
                    var possibleSwipeCords = this.getPossibleSwipeDragCords(rotateValue);

                    if (Math.abs(distanceXnew) > 15 || Math.abs(distanceYnew) > 15) {
                        if (allowY) {
                            if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
                                distance.y = possibleSwipeCords.minY;
                            } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
                                distance.y = possibleSwipeCords.maxY;
                            }
                        }

                        if (allowX) {
                            if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
                                distance.x = possibleSwipeCords.minX;
                            } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
                                distance.x = possibleSwipeCords.maxX;
                            }
                        }

                        if (allowY) {
                            this.top = distance.y;
                        } else {
                            distance.y = this.top;
                        }

                        if (allowX) {
                            this.left = distance.x;
                        } else {
                            distance.x = this.left;
                        }

                        this.setZoomSwipeStyles(_LGel, distance);
                        this.positionChanged = true;
                    }
                };

                Zoom.prototype.getZoomSwipeCords = function (startCoords, endCoords, allowX, allowY, possibleSwipeCords) {
                    var distance = {};

                    if (allowY) {
                        distance.y = this.top + (endCoords.y - startCoords.y) * this.modifierY;

                        if (this.isBeyondPossibleTop(distance.y, possibleSwipeCords.minY)) {
                            var diffMinY = possibleSwipeCords.minY - distance.y;
                            distance.y = possibleSwipeCords.minY - diffMinY / 6;
                        } else if (this.isBeyondPossibleBottom(distance.y, possibleSwipeCords.maxY)) {
                            var diffMaxY = distance.y - possibleSwipeCords.maxY;
                            distance.y = possibleSwipeCords.maxY + diffMaxY / 6;
                        }
                    } else {
                        distance.y = this.top;
                    }

                    if (allowX) {
                        distance.x = this.left + (endCoords.x - startCoords.x) * this.modifierX;

                        if (this.isBeyondPossibleLeft(distance.x, possibleSwipeCords.minX)) {
                            var diffMinX = possibleSwipeCords.minX - distance.x;
                            distance.x = possibleSwipeCords.minX - diffMinX / 6;
                        } else if (this.isBeyondPossibleRight(distance.x, possibleSwipeCords.maxX)) {
                            var difMaxX = distance.x - possibleSwipeCords.maxX;
                            distance.x = possibleSwipeCords.maxX + difMaxX / 6;
                        }
                    } else {
                        distance.x = this.left;
                    }

                    return distance;
                };

                Zoom.prototype.isBeyondPossibleLeft = function (x, minX) {
                    return x >= minX;
                };

                Zoom.prototype.isBeyondPossibleRight = function (x, maxX) {
                    return x <= maxX;
                };

                Zoom.prototype.isBeyondPossibleTop = function (y, minY) {
                    return y >= minY;
                };

                Zoom.prototype.isBeyondPossibleBottom = function (y, maxY) {
                    return y <= maxY;
                };

                Zoom.prototype.isImageSlide = function () {
                    var currentItem = this.core.galleryItems[this.core.index];
                    return this.core.getSlideType(currentItem) === 'image';
                };

                Zoom.prototype.getPossibleSwipeDragCords = function (rotateValue, scale) {
                    var dataScale = scale || this.scale || 1;
                    var elDataScale = Math.abs(dataScale);
                    var _a = this.core.mediaContainerPosition,
                        top = _a.top,
                        bottom = _a.bottom;
                    var topBottomSpacing = Math.abs(top - bottom) / 2;
                    var minY = (this.imageYSize - this.containerRect.height) / 2 + topBottomSpacing * this.modifierX;
                    var maxY = this.containerRect.height - this.imageYSize * elDataScale + minY;
                    var minX = (this.imageXSize - this.containerRect.width) / 2;
                    var maxX = this.containerRect.width - this.imageXSize * elDataScale + minX;
                    var possibleSwipeCords = {
                        minY: minY,
                        maxY: maxY,
                        minX: minX,
                        maxX: maxX
                    };

                    if (Math.abs(rotateValue) === 90) {
                        possibleSwipeCords = {
                            minY: minX,
                            maxY: maxX,
                            minX: minY,
                            maxX: maxY
                        };
                    }

                    return possibleSwipeCords;
                };

                Zoom.prototype.setZoomSwipeStyles = function (LGel, distance) {
                    LGel.css('transform', 'translate3d(' + distance.x + 'px, ' + distance.y + 'px, 0)');
                };

                Zoom.prototype.zoomSwipe = function () {
                    var _this = this;

                    var startCoords = {};
                    var endCoords = {};
                    var isMoved = false; // Allow x direction drag

                    var allowX = false; // Allow Y direction drag

                    var allowY = false;
                    var startTime = new Date();
                    var endTime = new Date();
                    var possibleSwipeCords;

                    var _LGel;

                    var $item = this.core.getSlideItem(this.core.index);
                    this.core.$inner.on('touchstart.lg', function (e) {
                        // Allow zoom only on image
                        if (!_this.isImageSlide()) {
                            return;
                        }

                        $item = _this.core.getSlideItem(_this.core.index);

                        if ((_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) && e.targetTouches.length === 1 && _this.core.outer.hasClass('lg-zoomed')) {
                            e.preventDefault();
                            startTime = new Date();
                            _this.core.touchAction = 'zoomSwipe';
                            _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();

                            var dragAllowedAxises = _this.getDragAllowedAxises(Math.abs(_this.rotateValue));

                            allowY = dragAllowedAxises.allowY;
                            allowX = dragAllowedAxises.allowX;

                            if (allowX || allowY) {
                                startCoords = _this.getSwipeCords(e, Math.abs(_this.rotateValue));
                            }

                            possibleSwipeCords = _this.getPossibleSwipeDragCords(_this.rotateValue); // reset opacity and transition duration

                            _this.core.outer.addClass('lg-zoom-dragging lg-zoom-drag-transition');
                        }
                    });
                    this.core.$inner.on('touchmove.lg', function (e) {
                        if (e.targetTouches.length === 1 && _this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
                            e.preventDefault();
                            _this.core.touchAction = 'zoomSwipe';
                            endCoords = _this.getSwipeCords(e, Math.abs(_this.rotateValue));

                            var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);

                            if (Math.abs(endCoords.x - startCoords.x) > 15 || Math.abs(endCoords.y - startCoords.y) > 15) {
                                isMoved = true;

                                _this.setZoomSwipeStyles(_LGel, distance);
                            }
                        }
                    });
                    this.core.$inner.on('touchend.lg', function (e) {
                        if (_this.core.touchAction === 'zoomSwipe' && (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target))) {
                            _this.core.touchAction = undefined;

                            _this.core.outer.removeClass('lg-zoom-dragging');

                            if (!isMoved) {
                                return;
                            }

                            isMoved = false;
                            endTime = new Date();
                            var touchDuration = endTime.valueOf() - startTime.valueOf();

                            _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, _this.rotateValue);
                        }
                    });
                };

                Zoom.prototype.zoomDrag = function () {
                    var _this = this;

                    var startCoords = {};
                    var endCoords = {};
                    var isDragging = false;
                    var isMoved = false; // Allow x direction drag

                    var allowX = false; // Allow Y direction drag

                    var allowY = false;
                    var startTime;
                    var endTime;
                    var possibleSwipeCords;

                    var _LGel;

                    this.core.outer.on('mousedown.lg.zoom', function (e) {
                        // Allow zoom only on image
                        if (!_this.isImageSlide()) {
                            return;
                        }

                        var $item = _this.core.getSlideItem(_this.core.index);

                        if (_this.$LG(e.target).hasClass('lg-item') || $item.get().contains(e.target)) {
                            startTime = new Date();
                            _LGel = _this.core.getSlideItem(_this.core.index).find('.lg-img-wrap').first();

                            var dragAllowedAxises = _this.getDragAllowedAxises(Math.abs(_this.rotateValue));

                            allowY = dragAllowedAxises.allowY;
                            allowX = dragAllowedAxises.allowX;

                            if (_this.core.outer.hasClass('lg-zoomed')) {
                                if (_this.$LG(e.target).hasClass('lg-object') && (allowX || allowY)) {
                                    e.preventDefault();
                                    startCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
                                    possibleSwipeCords = _this.getPossibleSwipeDragCords(_this.rotateValue);
                                    isDragging = true; // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723

                                    _this.core.outer.get().scrollLeft += 1;
                                    _this.core.outer.get().scrollLeft -= 1;

                                    _this.core.outer.removeClass('lg-grab').addClass('lg-grabbing lg-zoom-drag-transition lg-zoom-dragging'); // reset opacity and transition duration

                                }
                            }
                        }
                    });
                    this.$LG(window).on("mousemove.lg.zoom.global" + this.core.lgId, function (e) {
                        if (isDragging) {
                            isMoved = true;
                            endCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));

                            var distance = _this.getZoomSwipeCords(startCoords, endCoords, allowX, allowY, possibleSwipeCords);

                            _this.setZoomSwipeStyles(_LGel, distance);
                        }
                    });
                    this.$LG(window).on("mouseup.lg.zoom.global" + this.core.lgId, function (e) {
                        if (isDragging) {
                            endTime = new Date();
                            isDragging = false;

                            _this.core.outer.removeClass('lg-zoom-dragging'); // Fix for chrome mouse move on click


                            if (isMoved && (startCoords.x !== endCoords.x || startCoords.y !== endCoords.y)) {
                                endCoords = _this.getDragCords(e, Math.abs(_this.rotateValue));
                                var touchDuration = endTime.valueOf() - startTime.valueOf();

                                _this.touchendZoom(startCoords, endCoords, allowX, allowY, touchDuration, _this.rotateValue);
                            }

                            isMoved = false;
                        }

                        _this.core.outer.removeClass('lg-grabbing').addClass('lg-grab');
                    });
                };

                Zoom.prototype.closeGallery = function () {
                    this.resetZoom();
                };

                Zoom.prototype.destroy = function () {
                    // Unbind all events added by lightGallery zoom plugin
                    this.$LG(window).off(".lg.zoom.global" + this.core.lgId);
                    this.core.LGel.off('.lg.zoom');
                    this.core.LGel.off('.zoom');
                    clearTimeout(this.zoomableTimeout);
                    this.zoomableTimeout = false;
                };

                return Zoom;
            }();

        /* harmony default export */
        const lg_zoom_es5 = (lg_zoom_es5_Zoom);
        ;// CONCATENATED MODULE: ./node_modules/lightgallery/plugins/video/lg-video.es5.js
        /*!
 * lightgallery | 2.4.0 | January 29th 2022
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 */

        /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
        var lg_video_es5_assign = function () {
            lg_video_es5_assign = Object.assign || function __assign(t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];

                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }

                return t;
            };

            return lg_video_es5_assign.apply(this, arguments);
        };

        var videoSettings = {
            autoplayFirstVideo: true,
            youTubePlayerParams: false,
            vimeoPlayerParams: false,
            wistiaPlayerParams: false,
            gotoNextSlideOnVideoEnd: true,
            autoplayVideoOnSlide: false,
            videojs: false,
            videojsOptions: {}
        };
        /**
         * List of lightGallery events
         * All events should be documented here
         * Below interfaces are used to build the website documentations
         * */

        var lg_video_es5_lGEvents = {
            afterAppendSlide: 'lgAfterAppendSlide',
            init: 'lgInit',
            hasVideo: 'lgHasVideo',
            containerResize: 'lgContainerResize',
            updateSlides: 'lgUpdateSlides',
            afterAppendSubHtml: 'lgAfterAppendSubHtml',
            beforeOpen: 'lgBeforeOpen',
            afterOpen: 'lgAfterOpen',
            slideItemLoad: 'lgSlideItemLoad',
            beforeSlide: 'lgBeforeSlide',
            afterSlide: 'lgAfterSlide',
            posterClick: 'lgPosterClick',
            dragStart: 'lgDragStart',
            dragMove: 'lgDragMove',
            dragEnd: 'lgDragEnd',
            beforeNextSlide: 'lgBeforeNextSlide',
            beforePrevSlide: 'lgBeforePrevSlide',
            beforeClose: 'lgBeforeClose',
            afterClose: 'lgAfterClose',
            rotateLeft: 'lgRotateLeft',
            rotateRight: 'lgRotateRight',
            flipHorizontal: 'lgFlipHorizontal',
            flipVertical: 'lgFlipVertical',
            autoplay: 'lgAutoplay',
            autoplayStart: 'lgAutoplayStart',
            autoplayStop: 'lgAutoplayStop'
        };

        var param = function (obj) {
            return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
            }).join('&');
        };

        var getVimeoURLParams = function (defaultParams, videoInfo) {
            if (!videoInfo || !videoInfo.vimeo) return '';
            var urlParams = videoInfo.vimeo[2] || '';
            urlParams = urlParams[0] == '?' ? '&' + urlParams.slice(1) : urlParams || '';
            var defaultPlayerParams = defaultParams ? '&' + param(defaultParams) : ''; // For vimeo last parms gets priority if duplicates found

            var vimeoPlayerParams = "?autoplay=0&muted=1" + defaultPlayerParams + urlParams;
            return vimeoPlayerParams;
        };
        /**
         * Video module for lightGallery
         * Supports HTML5, YouTube, Vimeo, wistia videos
         *
         *
         * @ref Wistia
         * https://wistia.com/support/integrations/wordpress(How to get url)
         * https://wistia.com/support/developers/embed-options#using-embed-options
         * https://wistia.com/support/developers/player-api
         * https://wistia.com/support/developers/construct-an-embed-code
         * http://jsfiddle.net/xvnm7xLm/
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
         * https://wistia.com/support/embed-and-share/sharing-videos
         * https://private-sharing.wistia.com/medias/mwhrulrucj
         *
         * @ref Youtube
         * https://developers.google.com/youtube/player_parameters#enablejsapi
         * https://developers.google.com/youtube/iframe_api_reference
         * https://developer.chrome.com/blog/autoplay/#iframe-delegation
         *
         * @ref Vimeo
         * https://stackoverflow.com/questions/10488943/easy-way-to-get-vimeo-id-from-a-vimeo-url
         * https://vimeo.zendesk.com/hc/en-us/articles/360000121668-Starting-playback-at-a-specific-timecode
         * https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Using-Player-Parameters
         */


        var Video =
            /** @class */
            function () {
                function Video(instance) {
                    // get lightGallery core plugin instance
                    this.core = instance;
                    this.settings = lg_video_es5_assign(lg_video_es5_assign({}, videoSettings), this.core.settings);
                    return this;
                }

                Video.prototype.init = function () {
                    var _this = this;
                    /**
                     * Event triggered when video url found without poster
                     * Append video HTML
                     * Play if autoplayFirstVideo is true
                     */


                    this.core.LGel.on(lg_video_es5_lGEvents.hasVideo + ".video", this.onHasVideo.bind(this));
                    this.core.LGel.on(lg_video_es5_lGEvents.posterClick + ".video", function () {
                        var $el = _this.core.getSlideItem(_this.core.index);

                        _this.loadVideoOnPosterClick($el);
                    });
                    this.core.LGel.on(lg_video_es5_lGEvents.slideItemLoad + ".video", this.onSlideItemLoad.bind(this)); // @desc fired immediately before each slide transition.

                    this.core.LGel.on(lg_video_es5_lGEvents.beforeSlide + ".video", this.onBeforeSlide.bind(this)); // @desc fired immediately after each slide transition.

                    this.core.LGel.on(lg_video_es5_lGEvents.afterSlide + ".video", this.onAfterSlide.bind(this));
                };
                /**
                 * @desc Event triggered when a slide is completely loaded
                 *
                 * @param {Event} event - lightGalley custom event
                 */


                Video.prototype.onSlideItemLoad = function (event) {
                    var _this = this;

                    var _a = event.detail,
                        isFirstSlide = _a.isFirstSlide,
                        index = _a.index; // Should check the active slide as well as user may have moved to different slide before the first slide is loaded

                    if (this.settings.autoplayFirstVideo && isFirstSlide && index === this.core.index) {
                        // Delay is just for the transition effect on video load
                        setTimeout(function () {
                            _this.loadAndPlayVideo(index);
                        }, 200);
                    } // Should not call on first slide. should check only if the slide is active


                    if (!isFirstSlide && this.settings.autoplayVideoOnSlide && index === this.core.index) {
                        this.loadAndPlayVideo(index);
                    }
                };
                /**
                 * @desc Event triggered when video url or poster found
                 * Append video HTML is poster is not given
                 * Play if autoplayFirstVideo is true
                 *
                 * @param {Event} event - Javascript Event object.
                 */


                Video.prototype.onHasVideo = function (event) {
                    var _a = event.detail,
                        index = _a.index,
                        src = _a.src,
                        html5Video = _a.html5Video,
                        hasPoster = _a.hasPoster;

                    if (!hasPoster) {
                        // All functions are called separately if poster exist in loadVideoOnPosterClick function
                        this.appendVideos(this.core.getSlideItem(index), {
                            src: src,
                            addClass: 'lg-object',
                            index: index,
                            html5Video: html5Video
                        }); // Automatically navigate to next slide once video reaches the end.

                        this.gotoNextSlideOnVideoEnd(src, index);
                    }
                };
                /**
                 * @desc fired immediately before each slide transition.
                 * Pause the previous video
                 * Hide the download button if the slide contains YouTube, Vimeo, or Wistia videos.
                 *
                 * @param {Event} event - Javascript Event object.
                 * @param {number} prevIndex - Previous index of the slide.
                 * @param {number} index - Current index of the slide
                 */


                Video.prototype.onBeforeSlide = function (event) {
                    if (this.core.lGalleryOn) {
                        var prevIndex = event.detail.prevIndex;
                        this.pauseVideo(prevIndex);
                    }
                };
                /**
                 * @desc fired immediately after each slide transition.
                 * Play video if autoplayVideoOnSlide option is enabled.
                 *
                 * @param {Event} event - Javascript Event object.
                 * @param {number} prevIndex - Previous index of the slide.
                 * @param {number} index - Current index of the slide
                 * @todo should check on onSlideLoad as well if video is not loaded on after slide
                 */


                Video.prototype.onAfterSlide = function (event) {
                    var _this = this;

                    var _a = event.detail,
                        index = _a.index,
                        prevIndex = _a.prevIndex; // Do not call on first slide

                    var $slide = this.core.getSlideItem(index);

                    if (this.settings.autoplayVideoOnSlide && index !== prevIndex) {
                        if ($slide.hasClass('lg-complete')) {
                            setTimeout(function () {
                                _this.loadAndPlayVideo(index);
                            }, 100);
                        }
                    }
                };

                Video.prototype.loadAndPlayVideo = function (index) {
                    var $slide = this.core.getSlideItem(index);
                    var currentGalleryItem = this.core.galleryItems[index];

                    if (currentGalleryItem.poster) {
                        this.loadVideoOnPosterClick($slide, true);
                    } else {
                        this.playVideo(index);
                    }
                };
                /**
                 * Play HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
                 * @param {number} index - Index of the slide
                 */


                Video.prototype.playVideo = function (index) {
                    this.controlVideo(index, 'play');
                };
                /**
                 * Pause HTML5, Youtube, Vimeo or Wistia videos in a particular slide.
                 * @param {number} index - Index of the slide
                 */


                Video.prototype.pauseVideo = function (index) {
                    this.controlVideo(index, 'pause');
                };

                Video.prototype.getVideoHtml = function (src, addClass, index, html5Video) {
                    var video = '';
                    var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
                    var currentGalleryItem = this.core.galleryItems[index];
                    var videoTitle = currentGalleryItem.title || currentGalleryItem.alt;
                    videoTitle = videoTitle ? 'title="' + videoTitle + '"' : '';
                    var commonIframeProps = "allowtransparency=\"true\"\n            frameborder=\"0\"\n            scrolling=\"no\"\n            allowfullscreen\n            mozallowfullscreen\n            webkitallowfullscreen\n            oallowfullscreen\n            msallowfullscreen";

                    if (videoInfo.youtube) {
                        var videoId = 'lg-youtube' + index;
                        var slideUrlParams = videoInfo.youtube[2] ? videoInfo.youtube[2] + '&' : ''; // For youtube first parms gets priority if duplicates found

                        var youTubePlayerParams = "?" + slideUrlParams + "wmode=opaque&autoplay=0&mute=1&enablejsapi=1";
                        var playerParams = youTubePlayerParams + (this.settings.youTubePlayerParams ? '&' + param(this.settings.youTubePlayerParams) : '');
                        video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-youtube " + addClass + "\" " + videoTitle + " src=\"//www.youtube.com/embed/" + (videoInfo.youtube[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
                    } else if (videoInfo.vimeo) {
                        var videoId = 'lg-vimeo' + index;
                        var playerParams = getVimeoURLParams(this.settings.vimeoPlayerParams, videoInfo);
                        video = "<iframe allow=\"autoplay\" id=" + videoId + " class=\"lg-video-object lg-vimeo " + addClass + "\" " + videoTitle + " src=\"//player.vimeo.com/video/" + (videoInfo.vimeo[1] + playerParams) + "\" " + commonIframeProps + "></iframe>";
                    } else if (videoInfo.wistia) {
                        var wistiaId = 'lg-wistia' + index;
                        var playerParams = param(this.settings.wistiaPlayerParams);
                        playerParams = playerParams ? '?' + playerParams : '';
                        video = "<iframe allow=\"autoplay\" id=\"" + wistiaId + "\" src=\"//fast.wistia.net/embed/iframe/" + (videoInfo.wistia[4] + playerParams) + "\" " + videoTitle + " class=\"wistia_embed lg-video-object lg-wistia " + addClass + "\" name=\"wistia_embed\" " + commonIframeProps + "></iframe>";
                    } else if (videoInfo.html5) {
                        var html5VideoMarkup = '';

                        for (var i = 0; i < html5Video.source.length; i++) {
                            html5VideoMarkup += "<source src=\"" + html5Video.source[i].src + "\" type=\"" + html5Video.source[i].type + "\">";
                        }

                        if (html5Video.tracks) {
                            var _loop_1 = function (i) {
                                var trackAttributes = '';
                                var track = html5Video.tracks[i];
                                Object.keys(track || {}).forEach(function (key) {
                                    trackAttributes += key + "=\"" + track[key] + "\" ";
                                });
                                html5VideoMarkup += "<track " + trackAttributes + ">";
                            };

                            for (var i = 0; i < html5Video.tracks.length; i++) {
                                _loop_1(i);
                            }
                        }

                        var html5VideoAttrs_1 = '';
                        var videoAttributes_1 = html5Video.attributes || {};
                        Object.keys(videoAttributes_1 || {}).forEach(function (key) {
                            html5VideoAttrs_1 += key + "=\"" + videoAttributes_1[key] + "\" ";
                        });
                        video = "<video class=\"lg-video-object lg-html5 " + (this.settings.videojs ? 'video-js' : '') + "\" " + html5VideoAttrs_1 + ">\n                " + html5VideoMarkup + "\n                Your browser does not support HTML5 video.\n            </video>";
                    }

                    return video;
                };
                /**
                 * @desc - Append videos to the slide
                 *
                 * @param {HTMLElement} el - slide element
                 * @param {Object} videoParams - Video parameters, Contains src, class, index, htmlVideo
                 */


                Video.prototype.appendVideos = function (el, videoParams) {
                    var _a;

                    var videoHtml = this.getVideoHtml(videoParams.src, videoParams.addClass, videoParams.index, videoParams.html5Video);
                    el.find('.lg-video-cont').append(videoHtml);
                    var $videoElement = el.find('.lg-video-object').first();

                    if (videoParams.html5Video) {
                        $videoElement.on('mousedown.lg.video', function (e) {
                            e.stopPropagation();
                        });
                    }

                    if (this.settings.videojs && ((_a = this.core.galleryItems[videoParams.index].__slideVideoInfo) === null || _a === void 0 ? void 0 : _a.html5)) {
                        try {
                            return videojs($videoElement.get(), this.settings.videojsOptions);
                        } catch (e) {
                            console.error('lightGallery:- Make sure you have included videojs');
                        }
                    }
                };

                Video.prototype.gotoNextSlideOnVideoEnd = function (src, index) {
                    var _this = this;

                    var $videoElement = this.core.getSlideItem(index).find('.lg-video-object').first();
                    var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};

                    if (this.settings.gotoNextSlideOnVideoEnd) {
                        if (videoInfo.html5) {
                            $videoElement.on('ended', function () {
                                _this.core.goToNextSlide();
                            });
                        } else if (videoInfo.vimeo) {
                            try {
                                // https://github.com/vimeo/player.js/#ended
                                new Vimeo.Player($videoElement.get()).on('ended', function () {
                                    _this.core.goToNextSlide();
                                });
                            } catch (e) {
                                console.error('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
                            }
                        } else if (videoInfo.wistia) {
                            try {
                                window._wq = window._wq || []; // @todo Event is gettign triggered multiple times

                                window._wq.push({
                                    id: $videoElement.attr('id'),
                                    onReady: function (video) {
                                        video.bind('end', function () {
                                            _this.core.goToNextSlide();
                                        });
                                    }
                                });
                            } catch (e) {
                                console.error('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
                            }
                        }
                    }
                };

                Video.prototype.controlVideo = function (index, action) {
                    var $videoElement = this.core.getSlideItem(index).find('.lg-video-object').first();
                    var videoInfo = this.core.galleryItems[index].__slideVideoInfo || {};
                    if (!$videoElement.get()) return;

                    if (videoInfo.youtube) {
                        try {
                            $videoElement.get().contentWindow.postMessage("{\"event\":\"command\",\"func\":\"" + action + "Video\",\"args\":\"\"}", '*');
                        } catch (e) {
                            console.error("lightGallery:- " + e);
                        }
                    } else if (videoInfo.vimeo) {
                        try {
                            new Vimeo.Player($videoElement.get())[action]();
                        } catch (e) {
                            console.error('lightGallery:- Make sure you have included //github.com/vimeo/player.js');
                        }
                    } else if (videoInfo.html5) {
                        if (this.settings.videojs) {
                            try {
                                videojs($videoElement.get())[action]();
                            } catch (e) {
                                console.error('lightGallery:- Make sure you have included videojs');
                            }
                        } else {
                            $videoElement.get()[action]();
                        }
                    } else if (videoInfo.wistia) {
                        try {
                            window._wq = window._wq || []; // @todo Find a way to destroy wistia player instance

                            window._wq.push({
                                id: $videoElement.attr('id'),
                                onReady: function (video) {
                                    video[action]();
                                }
                            });
                        } catch (e) {
                            console.error('lightGallery:- Make sure you have included //fast.wistia.com/assets/external/E-v1.js');
                        }
                    }
                };

                Video.prototype.loadVideoOnPosterClick = function ($el, forcePlay) {
                    var _this = this; // check slide has poster


                    if (!$el.hasClass('lg-video-loaded')) {
                        // check already video element present
                        if (!$el.hasClass('lg-has-video')) {
                            $el.addClass('lg-has-video');

                            var _html = void 0;

                            var _src = this.core.galleryItems[this.core.index].src;
                            var video = this.core.galleryItems[this.core.index].video;

                            if (video) {
                                _html = typeof video === 'string' ? JSON.parse(video) : video;
                            }

                            var videoJsPlayer_1 = this.appendVideos($el, {
                                src: _src,
                                addClass: '',
                                index: this.core.index,
                                html5Video: _html
                            });
                            this.gotoNextSlideOnVideoEnd(_src, this.core.index);
                            var $tempImg = $el.find('.lg-object').first().get(); // @todo make sure it is working

                            $el.find('.lg-video-cont').first().append($tempImg);
                            $el.addClass('lg-video-loading');
                            videoJsPlayer_1 && videoJsPlayer_1.ready(function () {
                                videoJsPlayer_1.on('loadedmetadata', function () {
                                    _this.onVideoLoadAfterPosterClick($el, _this.core.index);
                                });
                            });
                            $el.find('.lg-video-object').first().on('load.lg error.lg loadedmetadata.lg', function () {
                                setTimeout(function () {
                                    _this.onVideoLoadAfterPosterClick($el, _this.core.index);
                                }, 50);
                            });
                        } else {
                            this.playVideo(this.core.index);
                        }
                    } else if (forcePlay) {
                        this.playVideo(this.core.index);
                    }
                };

                Video.prototype.onVideoLoadAfterPosterClick = function ($el, index) {
                    $el.addClass('lg-video-loaded');
                    this.playVideo(index);
                };

                Video.prototype.destroy = function () {
                    this.core.LGel.off('.lg.video');
                    this.core.LGel.off('.video');
                };

                return Video;
            }();

        /* harmony default export */
        const lg_video_es5 = (Video);
        ;// CONCATENATED MODULE: ./src/js/mediaGallery.js


        function initGallery() {
            const galleries = document.querySelectorAll('.js-open-gallery');
            galleries.forEach(function (gallery) {
                lightgallery_es5(gallery, {
                    plugins: [lg_zoom_es5, lg_thumbnail_es5, lg_video_es5],
                    speed: 500,
                    thumbnail: false,
                    download: false,
                    zoom: false,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                        controls: 1,
                        autoplay: 1
                    }
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/careerCorpCultureSlider.js

        function initCareerCormCultureSlider() {
            const total = document.querySelector('.js-culture-slider-total');
            const current = document.querySelector('.js-culture-slider-current');

            const updateCounter = swiper => {
                if (!total || !current) {
                    return;
                }

                total.innerText = swiper.loopedSlides;
                current.innerText = swiper.realIndex + 1;
            };

            new core(".js-culture-slider", {
                slidesPerView: 'auto',
                loop: true,
                navigation: {
                    nextEl: '.js-culture-slider-next',
                    prevEl: '.js-culture-slider-prev'
                },
                pagination: {
                    el: '.js-culture-slider-scrollbar',
                    type: 'progressbar'
                },
                on: {
                    slideChange: updateCounter,
                    init: updateCounter
                }
            });
        }
        ;// CONCATENATED MODULE: ./src/js/careerCorpEventsSlider.js

        function initCareerCorpEventsSlider() {
            const total = document.querySelector('.js-events-slider-total');
            const current = document.querySelector('.js-events-slider-current');

            const updateCounter = swiper => {
                if (!total || !current) {
                    return;
                }

                total.innerText = swiper.loopedSlides;
                current.innerText = swiper.realIndex + 1;
            };

            new core(".js-events-slider", {
                slidesPerView: 'auto',
                loop: true,
                navigation: {
                    nextEl: '.js-events-slider-next',
                    prevEl: '.js-events-slider-prev'
                },
                pagination: {
                    el: '.js-events-slider-scrollbar',
                    type: 'progressbar'
                },
                on: {
                    slideChange: updateCounter,
                    init: updateCounter
                }
            });
        }
        ;// CONCATENATED MODULE: ./src/js/aboutCertificatesSection.js


        function initAboutCertificatesSection() {
            initAboutCertificatesSlider();
            initAboutCertificatesGallery();
        }

        function initAboutCertificatesSlider() {
            if (!isWindowSizeSmallerThen(520)) {
                return;
            }

            const total = document.querySelector('.js-certificates-slider-total');
            const current = document.querySelector('.js-certificates-slider-current');

            const updateCounter = swiper => {
                if (!total || !current) {
                    return;
                }

                total.innerText = swiper.slides.length;
                current.innerText = swiper.realIndex + 1;
            };

            new core(".js-certificates-slider", {
                spaceBetween: 40,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: '.js-certificates-slider-next',
                    prevEl: '.js-certificates-slider-prev'
                },
                pagination: {
                    el: '.js-certificates-slider-scrollbar',
                    type: 'progressbar'
                },
                on: {
                    slideChange: updateCounter,
                    init: updateCounter
                }
            });
        }

        function initAboutCertificatesGallery() {
            const galleries = document.querySelectorAll('.js-certificates-gallery');
            galleries.forEach(function (gallery) {
                lightgallery_es5(gallery, {
                    plugins: [lg_zoom_es5, lg_thumbnail_es5],
                    speed: 500,
                    thumbnail: false,
                    download: false,
                    zoom: false,
                    controls: true
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/aboutShareholdersPanel.js

        function initAboutShareholdersPanel() {
            toggleMenu();
            toggleSearchPanel();
        }

        function toggleMenu() {
            const menuPanel = document.querySelector('.js-menu-panel');
            const menuPanelButton = document.querySelector('.js-menu-panel-button');
            const menuPanelItems = document.querySelector('.js-menu-panel-items');

            if (!menuPanelItems || !menuPanelButton || !menuPanel) {
                return;
            }

            menuPanelButton.addEventListener('click', function () {
                menuPanel.classList.toggle('navigationPanel__menuPanel--active');
                menuPanelItems.classList.toggle('navigationPanel__menuItems--active');
                menuPanelButton.classList.toggle('navigationPanel__menuOpenButton--active');
            });
        }

        function toggleSearchPanel() {
            if (isWindowSizeSmallerThen(1020)) {
                return;
            }

            const searchPanel = document.querySelector('.js-shareholders-panel-search');
            const openSearchPanel = document.querySelector('.js-search-open');
            const closeSearchPanel = document.querySelector('.js-search-close');

            if (!searchPanel || !openSearchPanel || !closeSearchPanel) {
                return;
            }

            openSearchPanel.addEventListener('click', function () {
                searchPanel.classList.add('navigationPanel--active');
            });
            closeSearchPanel.addEventListener('click', function () {
                searchPanel.classList.remove('navigationPanel--active');
            });
        }
        ;// CONCATENATED MODULE: ./src/js/mainBannerSlider.js

        function initMainBannerSlider() {
            const counter = document.querySelector('.js-banner-slider-counter');
            const moreLinks = document.querySelector('.js-banner-slider-more');
            const titles = document.querySelector('.js-banner-slider-title');
            const textTickers = document.querySelectorAll('.js-ticker-text');
            const bannerLink = document.querySelector('.js-banner-slider-link');

            const updateCounter = swiper => {
                if (!counter) {
                    return;
                }

                const currentSlideIndex = swiper.realIndex;
                const total = String(swiper.realIndex + 1).padStart(2, '0');
                const current = String(swiper.slides.length).padStart(2, '0');
                counter.innerHTML = `<span>${total}</span> – ${current}`;

                if (!moreLinks || !titles) {
                    return;
                }

                Array.from(moreLinks.children).forEach((link, i) => {
                    link.classList.toggle('mainBanner__topName--active', currentSlideIndex === i);
                });
                Array.from(titles.children).forEach((title, i) => {
                    title.classList.toggle('mainBanner__topCategory--active', currentSlideIndex === i);
                });
                const backgroundText = titles.children[currentSlideIndex].innerText;
                textTickers.forEach(text => {
                    text.innerText = backgroundText;
                });

                if (bannerLink) {
                    bannerLink.setAttribute('href', titles.children[currentSlideIndex].dataset.href);
                }
            };

            new core(".js-banner-slider", {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                pagination: {
                    el: '.js-banner-slider-progressbar',
                    type: 'progressbar'
                },
                navigation: {
                    nextEl: '.js-banner-slider-next',
                    prevEl: '.js-banner-slider-prev'
                },
                on: {
                    slideChange: updateCounter,
                    init: updateCounter
                }
            });
            const itemHover = document.querySelectorAll('.js-item-hover');
            const circleHovered = document.querySelector('.js-circle-hovered');
            const itemsImages = document.querySelectorAll('.js-img-hover');
            itemHover.forEach(function (item) {
                item.addEventListener('mouseenter', function () {
                    circleHovered.classList.add('mainBanner__contentCircle--active');
                    itemsImages.forEach(function (itemImg) {
                        itemImg.classList.add('mainBanner__contentItemImg--scale');
                    });
                });
                item.addEventListener('mouseleave', function () {
                    circleHovered.classList.remove('mainBanner__contentCircle--active');
                    itemsImages.forEach(function (itemImg) {
                        itemImg.classList.remove('mainBanner__contentItemImg--scale');
                    });
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/classes/Validator.js
        class Validator {
            constructor(form) {
                this.form = form;
                this.elements = [...this.form.querySelectorAll('[data-validation]')];
            }

            validate() {
                for (let input of this.elements) {
                    this.checkField(input, input.dataset.validation);
                }

                return this.checkForm();
            }

            checkForm() {
                return !this.elements.some(item => item.dataset.valid === 'false');
            }

            checkField(field, type) {
                switch (type) {
                    case 'checkbox':
                        field.dataset.valid = field.checked;
                        break;

                    case 'radio':
                        let name = field.getAttribute('name'),
                            radioButtons = [...document.querySelectorAll(`input[name="${name}"]`)];
                        field.dataset.valid = radioButtons.some(radio => radio.checked).toString();
                        break;

                    case 'relative':
                        let ids = field.dataset.relative.split(',');
                        field.dataset.valid = 'true';

                        for (let id of ids) {
                            let relativeField = document.getElementById(id);

                            if (relativeField.checked) {
                                field.dataset.valid = (relativeField.checked === !!field.value.length).toString();
                            }
                        }

                        break;

                    case 'required':
                        let minLength = !!field.getAttribute('minlength') ? field.getAttribute('minlength') : 2;
                        field.dataset.valid = (field.value.length >= minLength).toString();
                        break;

                    case 'phone':
                        let phonePattern = /^(\+7)?[\s]\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                            phoneTest = phonePattern.test(field.value);
                        field.dataset.valid = phoneTest.toString();
                        break;

                    case 'email':
                        let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            emailTest = emailPattern.test(field.value);
                        field.dataset.valid = emailTest.toString();
                        break;

                    case 'password':
                        let passwordPattern = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                            passwordTest = passwordPattern.test(field.value);
                        field.dataset.valid = passwordTest.toString();

                        if (this.passwordField && this.passwordField !== field.value) {
                            field.dataset.valid = 'false';
                            this.passwordField.dataset.valid = 'false';
                        }

                        this.passwordField = field;
                        break;
                }
            }

        }

// EXTERNAL MODULE: ./node_modules/js-datepicker/dist/datepicker.min.js
        var js_datepicker_dist_datepicker_min = __webpack_require__(774);
        var dist_datepicker_min_default = /*#__PURE__*/__webpack_require__.n(js_datepicker_dist_datepicker_min);
        ;// CONCATENATED MODULE: ./node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js
        function _typeof(obj) {
            "@babel/helpers - typeof";

            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }

        function _defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }

            return obj;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function");
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: true,
                    configurable: true
                }
            });
            Object.defineProperty(subClass, "prototype", {
                writable: false
            });
            if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
            };
            return _getPrototypeOf(o);
        }

        function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
            };

            return _setPrototypeOf(o, p);
        }

        function _isNativeReflectConstruct() {
            if (typeof Reflect === "undefined" || !Reflect.construct) return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === "function") return true;

            try {
                Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                }));
                return true;
            } catch (e) {
                return false;
            }
        }

        function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) return {};
            var target = {};
            var sourceKeys = Object.keys(source);
            var key, i;

            for (i = 0; i < sourceKeys.length; i++) {
                key = sourceKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                target[key] = source[key];
            }

            return target;
        }

        function _objectWithoutProperties(source, excluded) {
            if (source == null) return {};

            var target = _objectWithoutPropertiesLoose(source, excluded);

            var key, i;

            if (Object.getOwnPropertySymbols) {
                var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

                for (i = 0; i < sourceSymbolKeys.length; i++) {
                    key = sourceSymbolKeys[i];
                    if (excluded.indexOf(key) >= 0) continue;
                    if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                    target[key] = source[key];
                }
            }

            return target;
        }

        function _assertThisInitialized(self) {
            if (self === void 0) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return self;
        }

        function _possibleConstructorReturn(self, call) {
            if (call && (typeof call === "object" || typeof call === "function")) {
                return call;
            } else if (call !== void 0) {
                throw new TypeError("Derived constructors may only return object or undefined");
            }

            return _assertThisInitialized(self);
        }

        function _createSuper(Derived) {
            var hasNativeReflectConstruct = _isNativeReflectConstruct();

            return function _createSuperInternal() {
                var Super = _getPrototypeOf(Derived),
                    result;

                if (hasNativeReflectConstruct) {
                    var NewTarget = _getPrototypeOf(this).constructor;

                    result = Reflect.construct(Super, arguments, NewTarget);
                } else {
                    result = Super.apply(this, arguments);
                }

                return _possibleConstructorReturn(this, result);
            };
        }

        function _superPropBase(object, property) {
            while (!Object.prototype.hasOwnProperty.call(object, property)) {
                object = _getPrototypeOf(object);
                if (object === null) break;
            }

            return object;
        }

        function _get() {
            if (typeof Reflect !== "undefined" && Reflect.get) {
                _get = Reflect.get;
            } else {
                _get = function _get(target, property, receiver) {
                    var base = _superPropBase(target, property);

                    if (!base) return;
                    var desc = Object.getOwnPropertyDescriptor(base, property);

                    if (desc.get) {
                        return desc.get.call(arguments.length < 3 ? target : receiver);
                    }

                    return desc.value;
                };
            }

            return _get.apply(this, arguments);
        }

        function set(target, property, value, receiver) {
            if (typeof Reflect !== "undefined" && Reflect.set) {
                set = Reflect.set;
            } else {
                set = function set(target, property, value, receiver) {
                    var base = _superPropBase(target, property);

                    var desc;

                    if (base) {
                        desc = Object.getOwnPropertyDescriptor(base, property);

                        if (desc.set) {
                            desc.set.call(receiver, value);
                            return true;
                        } else if (!desc.writable) {
                            return false;
                        }
                    }

                    desc = Object.getOwnPropertyDescriptor(receiver, property);

                    if (desc) {
                        if (!desc.writable) {
                            return false;
                        }

                        desc.value = value;
                        Object.defineProperty(receiver, property, desc);
                    } else {
                        _defineProperty(receiver, property, value);
                    }

                    return true;
                };
            }

            return set(target, property, value, receiver);
        }

        function _set(target, property, value, receiver, isStrict) {
            var s = set(target, property, value, receiver || target);

            if (!s && isStrict) {
                throw new Error('failed to set property');
            }

            return value;
        }

        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }

        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }

        function _iterableToArrayLimit(arr, i) {
            var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

            if (_i == null) return;
            var _arr = [];
            var _n = true;
            var _d = false;

            var _s, _e;

            try {
                for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);

                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    if (!_n && _i["return"] != null) _i["return"]();
                } finally {
                    if (_d) throw _e;
                }
            }

            return _arr;
        }

        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }

        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;

            for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

            return arr2;
        }

        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/core/change-details.js

        /**
         Provides details of changing model value
         @param {Object} [details]
         @param {string} [details.inserted] - Inserted symbols
         @param {boolean} [details.skip] - Can skip chars
         @param {number} [details.removeCount] - Removed symbols count
         @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
         */

        var ChangeDetails = /*#__PURE__*/function () {
            /** Inserted symbols */

            /** Can skip chars */

            /** Additional offset if any changes occurred before tail */

            /** Raw inserted is used by dynamic mask */
            function ChangeDetails(details) {
                _classCallCheck(this, ChangeDetails);

                Object.assign(this, {
                    inserted: '',
                    rawInserted: '',
                    skip: false,
                    tailShift: 0
                }, details);
            }

            /**
             Aggregate changes
             @returns {ChangeDetails} `this`
             */


            _createClass(ChangeDetails, [{
                key: "aggregate",
                value: function aggregate(details) {
                    this.rawInserted += details.rawInserted;
                    this.skip = this.skip || details.skip;
                    this.inserted += details.inserted;
                    this.tailShift += details.tailShift;
                    return this;
                }
                /** Total offset considering all changes */

            }, {
                key: "offset",
                get: function get() {
                    return this.tailShift + this.inserted.length;
                }
            }]);

            return ChangeDetails;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/core/utils.js


        /** Checks if value is string */

        function isString(str) {
            return typeof str === 'string' || str instanceof String;
        }

        /**
         Direction
         @prop {string} NONE
         @prop {string} LEFT
         @prop {string} FORCE_LEFT
         @prop {string} RIGHT
         @prop {string} FORCE_RIGHT
         */


        var DIRECTION = {
            NONE: 'NONE',
            LEFT: 'LEFT',
            FORCE_LEFT: 'FORCE_LEFT',
            RIGHT: 'RIGHT',
            FORCE_RIGHT: 'FORCE_RIGHT'
        };

        /**
         Direction
         @enum {string}
         */

        /** Returns next char index in direction */

        function indexInDirection(pos, direction) {
            if (direction === DIRECTION.LEFT) --pos;
            return pos;
        }

        /** Returns next char position in direction */


        function posInDirection(pos, direction) {
            switch (direction) {
                case DIRECTION.LEFT:
                case DIRECTION.FORCE_LEFT:
                    return --pos;

                case DIRECTION.RIGHT:
                case DIRECTION.FORCE_RIGHT:
                    return ++pos;

                default:
                    return pos;
            }
        }

        /** */


        function forceDirection(direction) {
            switch (direction) {
                case DIRECTION.LEFT:
                    return DIRECTION.FORCE_LEFT;

                case DIRECTION.RIGHT:
                    return DIRECTION.FORCE_RIGHT;

                default:
                    return direction;
            }
        }

        /** Escapes regular expression control chars */


        function escapeRegExp(str) {
            return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
        }

        function normalizePrepare(prep) {
            return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
        } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes


        function objectIncludes(b, a) {
            if (a === b) return true;
            var arrA = Array.isArray(a),
                arrB = Array.isArray(b),
                i;

            if (arrA && arrB) {
                if (a.length != b.length) return false;

                for (i = 0; i < a.length; i++) {
                    if (!objectIncludes(a[i], b[i])) return false;
                }

                return true;
            }

            if (arrA != arrB) return false;

            if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
                var dateA = a instanceof Date,
                    dateB = b instanceof Date;
                if (dateA && dateB) return a.getTime() == b.getTime();
                if (dateA != dateB) return false;
                var regexpA = a instanceof RegExp,
                    regexpB = b instanceof RegExp;
                if (regexpA && regexpB) return a.toString() == b.toString();
                if (regexpA != regexpB) return false;
                var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

                for (i = 0; i < keys.length; i++) {
                    // $FlowFixMe ... ???
                    if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
                }

                for (i = 0; i < keys.length; i++) {
                    if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
                }

                return true;
            } else if (a && b && typeof a === 'function' && typeof b === 'function') {
                return a.toString() === b.toString();
            }

            return false;
        }

        /** Selection range */


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/core/action-details.js


        /** Provides details of changing input */

        var ActionDetails = /*#__PURE__*/function () {
            /** Current input value */

            /** Current cursor position */

            /** Old input value */

            /** Old selection */
            function ActionDetails(value, cursorPos, oldValue, oldSelection) {
                _classCallCheck(this, ActionDetails);

                this.value = value;
                this.cursorPos = cursorPos;
                this.oldValue = oldValue;
                this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

                while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
                    --this.oldSelection.start;
                }
            }

            /**
             Start changing position
             @readonly
             */


            _createClass(ActionDetails, [{
                key: "startChangePos",
                get: function get() {
                    return Math.min(this.cursorPos, this.oldSelection.start);
                }
                /**
                 Inserted symbols count
                 @readonly
                 */

            }, {
                key: "insertedCount",
                get: function get() {
                    return this.cursorPos - this.startChangePos;
                }
                /**
                 Inserted symbols
                 @readonly
                 */

            }, {
                key: "inserted",
                get: function get() {
                    return this.value.substr(this.startChangePos, this.insertedCount);
                }
                /**
                 Removed symbols count
                 @readonly
                 */

            }, {
                key: "removedCount",
                get: function get() {
                    // Math.max for opposite operation
                    return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
                        this.oldValue.length - this.value.length, 0);
                }
                /**
                 Removed symbols
                 @readonly
                 */

            }, {
                key: "removed",
                get: function get() {
                    return this.oldValue.substr(this.startChangePos, this.removedCount);
                }
                /**
                 Unchanged head symbols
                 @readonly
                 */

            }, {
                key: "head",
                get: function get() {
                    return this.value.substring(0, this.startChangePos);
                }
                /**
                 Unchanged tail symbols
                 @readonly
                 */

            }, {
                key: "tail",
                get: function get() {
                    return this.value.substring(this.startChangePos + this.insertedCount);
                }
                /**
                 Remove direction
                 @readonly
                 */

            }, {
                key: "removeDirection",
                get: function get() {
                    if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right

                    return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
                    this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
                }
            }]);

            return ActionDetails;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/core/continuous-tail-details.js

        /** Provides details of continuous extracted tail */

        var ContinuousTailDetails = /*#__PURE__*/function () {
            /** Tail value as string */

            /** Tail start position */

            /** Start position */
            function ContinuousTailDetails() {
                var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var stop = arguments.length > 2 ? arguments[2] : undefined;

                _classCallCheck(this, ContinuousTailDetails);

                this.value = value;
                this.from = from;
                this.stop = stop;
            }

            _createClass(ContinuousTailDetails, [{
                key: "toString",
                value: function toString() {
                    return this.value;
                }
            }, {
                key: "extend",
                value: function extend(tail) {
                    this.value += String(tail);
                }
            }, {
                key: "appendTo",
                value: function appendTo(masked) {
                    return masked.append(this.toString(), {
                        tail: true
                    }).aggregate(masked._appendPlaceholder());
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        value: this.value,
                        from: this.from,
                        stop: this.stop
                    };
                },
                set: function set(state) {
                    Object.assign(this, state);
                }
            }, {
                key: "unshift",
                value: function unshift(beforePos) {
                    if (!this.value.length || beforePos != null && this.from >= beforePos) return '';
                    var shiftChar = this.value[0];
                    this.value = this.value.slice(1);
                    return shiftChar;
                }
            }, {
                key: "shift",
                value: function shift() {
                    if (!this.value.length) return '';
                    var shiftChar = this.value[this.value.length - 1];
                    this.value = this.value.slice(0, -1);
                    return shiftChar;
                }
            }]);

            return ContinuousTailDetails;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/core/holder.js
        /**
         * Applies mask on element.
         * @constructor
         * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
         * @param {Object} opts - Custom mask options
         * @return {InputMask}
         */
        function IMask(el) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // currently available only for input-like elements

            return new IMask.InputMask(el, opts);
        }


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/base.js


        /** Supported mask type */

        /** Provides common masking stuff */

        var Masked = /*#__PURE__*/function () {
            // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

            /** @type {Mask} */

            /** */
            // $FlowFixMe no ideas

            /** Transforms value before mask processing */

            /** Validates if value is acceptable */

            /** Does additional processing in the end of editing */

            /** Format typed value to string */

            /** Parse strgin to get typed value */

            /** Enable characters overwriting */

            /** */

            /** */
            function Masked(opts) {
                _classCallCheck(this, Masked);

                this._value = '';

                this._update(Object.assign({}, Masked.DEFAULTS, opts));

                this.isInitialized = true;
            }

            /** Sets and applies new options */


            _createClass(Masked, [{
                key: "updateOptions",
                value: function updateOptions(opts) {
                    if (!Object.keys(opts).length) return; // $FlowFixMe

                    this.withValueRefresh(this._update.bind(this, opts));
                }
                /**
                 Sets new options
                 @protected
                 */

            }, {
                key: "_update",
                value: function _update(opts) {
                    Object.assign(this, opts);
                }
                /** Mask state */

            }, {
                key: "state",
                get: function get() {
                    return {
                        _value: this.value
                    };
                },
                set: function set(state) {
                    this._value = state._value;
                }
                /** Resets value */

            }, {
                key: "reset",
                value: function reset() {
                    this._value = '';
                }
                /** */

            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(value) {
                    this.resolve(value);
                }
                /** Resolve new value */

            }, {
                key: "resolve",
                value: function resolve(value) {
                    this.reset();
                    this.append(value, {
                        input: true
                    }, '');
                    this.doCommit();
                    return this.value;
                }
                /** */

            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.value;
                },
                set: function set(value) {
                    this.reset();
                    this.append(value, {}, '');
                    this.doCommit();
                }
                /** */

            }, {
                key: "typedValue",
                get: function get() {
                    return this.doParse(this.value);
                },
                set: function set(value) {
                    this.value = this.doFormat(value);
                }
                /** Value that includes raw user input */

            }, {
                key: "rawInputValue",
                get: function get() {
                    return this.extractInput(0, this.value.length, {
                        raw: true
                    });
                },
                set: function set(value) {
                    this.reset();
                    this.append(value, {
                        raw: true
                    }, '');
                    this.doCommit();
                }
                /** */

            }, {
                key: "isComplete",
                get: function get() {
                    return true;
                }
                /** */

            }, {
                key: "isFilled",
                get: function get() {
                    return this.isComplete;
                }
                /** Finds nearest input position in direction */

            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos, direction) {
                    return cursorPos;
                }
                /** Extracts value in range considering flags */

            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    return this.value.slice(fromPos, toPos);
                }
                /** Extracts tail in range */

            }, {
                key: "extractTail",
                value: function extractTail() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
                }
                /** Appends tail */
                // $FlowFixMe no ideas

            }, {
                key: "appendTail",
                value: function appendTail(tail) {
                    if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                    return tail.appendTo(this);
                }
                /** Appends char */

            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    if (!ch) return new ChangeDetails();
                    this._value += ch;
                    return new ChangeDetails({
                        inserted: ch,
                        rawInserted: ch
                    });
                }
                /** Appends char */

            }, {
                key: "_appendChar",
                value: function _appendChar(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var checkTail = arguments.length > 2 ? arguments[2] : undefined;
                    var consistentState = this.state;
                    var details;

                    var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));

                    var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

                    ch = _normalizePrepare2[0];
                    details = _normalizePrepare2[1];
                    details = details.aggregate(this._appendCharRaw(ch, flags));

                    if (details.inserted) {
                        var consistentTail;
                        var appended = this.doValidate(flags) !== false;

                        if (appended && checkTail != null) {
                            // validation ok, check tail
                            var beforeTailState = this.state;

                            if (this.overwrite === true) {
                                consistentTail = checkTail.state;
                                checkTail.unshift(this.value.length);
                            }

                            var tailDetails = this.appendTail(checkTail);
                            appended = tailDetails.rawInserted === checkTail.toString(); // not ok, try shift

                            if (!(appended && tailDetails.inserted) && this.overwrite === 'shift') {
                                this.state = beforeTailState;
                                consistentTail = checkTail.state;
                                checkTail.shift();
                                tailDetails = this.appendTail(checkTail);
                                appended = tailDetails.rawInserted === checkTail.toString();
                            } // if ok, rollback state after tail


                            if (appended && tailDetails.inserted) this.state = beforeTailState;
                        } // revert all if something went wrong


                        if (!appended) {
                            details = new ChangeDetails();
                            this.state = consistentState;
                            if (checkTail && consistentTail) checkTail.state = consistentTail;
                        }
                    }

                    return details;
                }
                /** Appends optional placeholder at end */

            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    return new ChangeDetails();
                }
                /** Appends optional eager placeholder at end */

            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    return new ChangeDetails();
                }
                /** Appends symbols considering flags */
                // $FlowFixMe no ideas

            }, {
                key: "append",
                value: function append(str, flags, tail) {
                    if (!isString(str)) throw new Error('value should be string');
                    var details = new ChangeDetails();
                    var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
                    if (flags && flags.tail) flags._beforeTailState = this.state;

                    for (var ci = 0; ci < str.length; ++ci) {
                        details.aggregate(this._appendChar(str[ci], flags, checkTail));
                    } // append tail but aggregate only tailShift


                    if (checkTail != null) {
                        details.tailShift += this.appendTail(checkTail).tailShift; // TODO it's a good idea to clear state after appending ends
                        // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
                        // this._resetBeforeTailState();
                    }

                    if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
                        details.aggregate(this._appendEager());
                    }

                    return details;
                }
                /** */

            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
                    return new ChangeDetails();
                }
                /** Calls function and reapplies current value */

            }, {
                key: "withValueRefresh",
                value: function withValueRefresh(fn) {
                    if (this._refreshing || !this.isInitialized) return fn();
                    this._refreshing = true;
                    var rawInput = this.rawInputValue;
                    var value = this.value;
                    var ret = fn();
                    this.rawInputValue = rawInput; // append lost trailing chars at end

                    if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
                        this.append(value.slice(this.value.length), {}, '');
                    }

                    delete this._refreshing;
                    return ret;
                }
                /** */

            }, {
                key: "runIsolated",
                value: function runIsolated(fn) {
                    if (this._isolated || !this.isInitialized) return fn(this);
                    this._isolated = true;
                    var state = this.state;
                    var ret = fn(this);
                    this.state = state;
                    delete this._isolated;
                    return ret;
                }
                /**
                 Prepares string before mask processing
                 @protected
                 */

            }, {
                key: "doPrepare",
                value: function doPrepare(str) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return this.prepare ? this.prepare(str, this, flags) : str;
                }
                /**
                 Validates if value is acceptable
                 @protected
                 */

            }, {
                key: "doValidate",
                value: function doValidate(flags) {
                    return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
                }
                /**
                 Does additional processing in the end of editing
                 @protected
                 */

            }, {
                key: "doCommit",
                value: function doCommit() {
                    if (this.commit) this.commit(this.value, this);
                }
                /** */

            }, {
                key: "doFormat",
                value: function doFormat(value) {
                    return this.format ? this.format(value, this) : value;
                }
                /** */

            }, {
                key: "doParse",
                value: function doParse(str) {
                    return this.parse ? this.parse(str, this) : str;
                }
                /** */

            }, {
                key: "splice",
                value: function splice(start, deleteCount, inserted, removeDirection) {
                    var tailPos = start + deleteCount;
                    var tail = this.extractTail(tailPos);
                    var oldRawValue;

                    if (this.eager) {
                        removeDirection = forceDirection(removeDirection);
                        oldRawValue = this.extractInput(0, tailPos, {
                            raw: true
                        });
                    }

                    var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
                    var details = new ChangeDetails({
                        tailShift: startChangePos - start // adjust tailShift if start was aligned

                    }).aggregate(this.remove(startChangePos));

                    if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
                        if (removeDirection === DIRECTION.FORCE_LEFT) {
                            var valLength;

                            while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
                                details.aggregate(new ChangeDetails({
                                    tailShift: -1
                                })).aggregate(this.remove(valLength - 1));
                            }
                        } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
                            tail.unshift();
                        }
                    }

                    return details.aggregate(this.append(inserted, {
                        input: true
                    }, tail));
                }
            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    return this.mask === mask;
                }
            }]);

            return Masked;
        }();

        Masked.DEFAULTS = {
            format: function format(v) {
                return v;
            },
            parse: function parse(v) {
                return v;
            }
        };
        IMask.Masked = Masked;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/factory.js


        /** Get Masked class by mask type */

        function maskedClass(mask) {
            if (mask == null) {
                throw new Error('mask property should be defined');
            } // $FlowFixMe


            if (mask instanceof RegExp) return IMask.MaskedRegExp; // $FlowFixMe

            if (isString(mask)) return IMask.MaskedPattern; // $FlowFixMe

            if (mask instanceof Date || mask === Date) return IMask.MaskedDate; // $FlowFixMe

            if (mask instanceof Number || typeof mask === 'number' || mask === Number) return IMask.MaskedNumber; // $FlowFixMe

            if (Array.isArray(mask) || mask === Array) return IMask.MaskedDynamic; // $FlowFixMe

            if (IMask.Masked && mask.prototype instanceof IMask.Masked) return mask; // $FlowFixMe

            if (mask instanceof IMask.Masked) return mask.constructor; // $FlowFixMe

            if (mask instanceof Function) return IMask.MaskedFunction;
            console.warn('Mask not found for mask', mask); // eslint-disable-line no-console
            // $FlowFixMe

            return IMask.Masked;
        }

        /** Creates new {@link Masked} depending on mask type */


        function createMask(opts) {
            // $FlowFixMe
            if (IMask.Masked && opts instanceof IMask.Masked) return opts;
            opts = Object.assign({}, opts);
            var mask = opts.mask; // $FlowFixMe

            if (IMask.Masked && mask instanceof IMask.Masked) return mask;
            var MaskedClass = maskedClass(mask);
            if (!MaskedClass) throw new Error('Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.');
            return new MaskedClass(opts);
        }

        IMask.createMask = createMask;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/input-definition.js


        var _excluded = ["mask"];
        var DEFAULT_INPUT_DEFINITIONS = {
            '0': /\d/,
            'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            // http://stackoverflow.com/a/22075070
            '*': /./
        };
        /** */

        var PatternInputDefinition = /*#__PURE__*/function () {
            /** */

            /** */

            /** */

            /** */

            /** */

            /** */

            /** */
            function PatternInputDefinition(opts) {
                _classCallCheck(this, PatternInputDefinition);

                var mask = opts.mask,
                    blockOpts = _objectWithoutProperties(opts, _excluded);

                this.masked = createMask({
                    mask: mask
                });
                Object.assign(this, blockOpts);
            }

            _createClass(PatternInputDefinition, [{
                key: "reset",
                value: function reset() {
                    this.isFilled = false;
                    this.masked.reset();
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                    if (fromPos === 0 && toPos >= 1) {
                        this.isFilled = false;
                        return this.masked.remove(fromPos, toPos);
                    }

                    return new ChangeDetails();
                }
            }, {
                key: "value",
                get: function get() {
                    return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : '');
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.masked.unmaskedValue;
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return Boolean(this.masked.value) || this.isOptional;
                }
            }, {
                key: "_appendChar",
                value: function _appendChar(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    if (this.isFilled) return new ChangeDetails();
                    var state = this.masked.state; // simulate input

                    var details = this.masked._appendChar(ch, flags);

                    if (details.inserted && this.doValidate(flags) === false) {
                        details.inserted = details.rawInserted = '';
                        this.masked.state = state;
                    }

                    if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
                        details.inserted = this.placeholderChar;
                    }

                    details.skip = !details.inserted && !this.isOptional;
                    this.isFilled = Boolean(details.inserted);
                    return details;
                }
            }, {
                key: "append",
                value: function append() {
                    var _this$masked; // TODO probably should be done via _appendChar


                    return (_this$masked = this.masked).append.apply(_this$masked, arguments);
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    var details = new ChangeDetails();
                    if (this.isFilled || this.isOptional) return details;
                    this.isFilled = true;
                    details.inserted = this.placeholderChar;
                    return details;
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    return new ChangeDetails();
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    var _this$masked2;

                    return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
                }
            }, {
                key: "appendTail",
                value: function appendTail() {
                    var _this$masked3;

                    return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 ? arguments[2] : undefined;
                    return this.masked.extractInput(fromPos, toPos, flags);
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos) {
                    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                    var minPos = 0;
                    var maxPos = this.value.length;
                    var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

                    switch (direction) {
                        case DIRECTION.LEFT:
                        case DIRECTION.FORCE_LEFT:
                            return this.isComplete ? boundPos : minPos;

                        case DIRECTION.RIGHT:
                        case DIRECTION.FORCE_RIGHT:
                            return this.isComplete ? boundPos : maxPos;

                        case DIRECTION.NONE:
                        default:
                            return boundPos;
                    }
                }
            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _this$masked4, _this$parent;

                    return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                    this.masked.doCommit();
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        masked: this.masked.state,
                        isFilled: this.isFilled
                    };
                },
                set: function set(state) {
                    this.masked.state = state.masked;
                    this.isFilled = state.isFilled;
                }
            }]);

            return PatternInputDefinition;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/fixed-definition.js


        var PatternFixedDefinition = /*#__PURE__*/function () {
            /** */

            /** */

            /** */

            /** */

            /** */

            /** */
            function PatternFixedDefinition(opts) {
                _classCallCheck(this, PatternFixedDefinition);

                Object.assign(this, opts);
                this._value = '';
                this.isFixed = true;
            }

            _createClass(PatternFixedDefinition, [{
                key: "value",
                get: function get() {
                    return this._value;
                }
            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.isUnmasking ? this.value : '';
                }
            }, {
                key: "reset",
                value: function reset() {
                    this._isRawInput = false;
                    this._value = '';
                }
            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                    this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
                    if (!this._value) this._isRawInput = false;
                    return new ChangeDetails();
                }
            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos) {
                    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                    var minPos = 0;
                    var maxPos = this._value.length;

                    switch (direction) {
                        case DIRECTION.LEFT:
                        case DIRECTION.FORCE_LEFT:
                            return minPos;

                        case DIRECTION.NONE:
                        case DIRECTION.RIGHT:
                        case DIRECTION.FORCE_RIGHT:
                        default:
                            return maxPos;
                    }
                }
            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
                    var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
                }
            }, {
                key: "isComplete",
                get: function get() {
                    return true;
                }
            }, {
                key: "isFilled",
                get: function get() {
                    return Boolean(this._value);
                }
            }, {
                key: "_appendChar",
                value: function _appendChar(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var details = new ChangeDetails();
                    if (this._value) return details;
                    var appended = this.char === ch;
                    var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
                    if (isResolved) details.rawInserted = this.char;
                    this._value = details.inserted = this.char;
                    this._isRawInput = isResolved && (flags.raw || flags.input);
                    return details;
                }
            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    return this._appendChar(this.char);
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    var details = new ChangeDetails();
                    if (this._value) return details;
                    this._value = details.inserted = this.char;
                    return details;
                }
            }, {
                key: "extractTail",
                value: function extractTail() {
                    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    return new ContinuousTailDetails('');
                } // $FlowFixMe no ideas

            }, {
                key: "appendTail",
                value: function appendTail(tail) {
                    if (isString(tail)) tail = new ContinuousTailDetails(String(tail));
                    return tail.appendTo(this);
                }
            }, {
                key: "append",
                value: function append(str, flags, tail) {
                    var details = this._appendChar(str[0], flags);

                    if (tail != null) {
                        details.tailShift += this.appendTail(tail).tailShift;
                    }

                    return details;
                }
            }, {
                key: "doCommit",
                value: function doCommit() {
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        _value: this._value,
                        _isRawInput: this._isRawInput
                    };
                },
                set: function set(state) {
                    Object.assign(this, state);
                }
            }]);

            return PatternFixedDefinition;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/chunk-tail-details.js


        var chunk_tail_details_excluded = ["chunks"];

        var ChunksTailDetails = /*#__PURE__*/function () {
            /** */
            function ChunksTailDetails() {
                var chunks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                _classCallCheck(this, ChunksTailDetails);

                this.chunks = chunks;
                this.from = from;
            }

            _createClass(ChunksTailDetails, [{
                key: "toString",
                value: function toString() {
                    return this.chunks.map(String).join('');
                } // $FlowFixMe no ideas

            }, {
                key: "extend",
                value: function extend(tailChunk) {
                    if (!String(tailChunk)) return;
                    if (isString(tailChunk)) tailChunk = new ContinuousTailDetails(String(tailChunk));
                    var lastChunk = this.chunks[this.chunks.length - 1];
                    var extendLast = lastChunk && ( // if stops are same or tail has no stop
                            lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
                        tailChunk.from === lastChunk.from + lastChunk.toString().length;

                    if (tailChunk instanceof ContinuousTailDetails) {
                        // check the ability to extend previous chunk
                        if (extendLast) {
                            // extend previous chunk
                            lastChunk.extend(tailChunk.toString());
                        } else {
                            // append new chunk
                            this.chunks.push(tailChunk);
                        }
                    } else if (tailChunk instanceof ChunksTailDetails) {
                        if (tailChunk.stop == null) {
                            // unwrap floating chunks to parent, keeping `from` pos
                            var firstTailChunk;

                            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
                                firstTailChunk = tailChunk.chunks.shift();
                                firstTailChunk.from += tailChunk.from;
                                this.extend(firstTailChunk);
                            }
                        } // if tail chunk still has value


                        if (tailChunk.toString()) {
                            // if chunks contains stops, then popup stop to container
                            tailChunk.stop = tailChunk.blockIndex;
                            this.chunks.push(tailChunk);
                        }
                    }
                }
            }, {
                key: "appendTo",
                value: function appendTo(masked) {
                    // $FlowFixMe
                    if (!(masked instanceof IMask.MaskedPattern)) {
                        var tail = new ContinuousTailDetails(this.toString());
                        return tail.appendTo(masked);
                    }

                    var details = new ChangeDetails();

                    for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
                        var chunk = this.chunks[ci];

                        var lastBlockIter = masked._mapPosToBlock(masked.value.length);

                        var stop = chunk.stop;
                        var chunkBlock = void 0;

                        if (stop != null && ( // if block not found or stop is behind lastBlock
                            !lastBlockIter || lastBlockIter.index <= stop)) {
                            if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                                masked._stops.indexOf(stop) >= 0) {
                                details.aggregate(masked._appendPlaceholder(stop));
                            }

                            chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
                        }

                        if (chunkBlock) {
                            var tailDetails = chunkBlock.appendTail(chunk);
                            tailDetails.skip = false; // always ignore skip, it will be set on last

                            details.aggregate(tailDetails);
                            masked._value += tailDetails.inserted; // get not inserted chars

                            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                            if (remainChars) details.aggregate(masked.append(remainChars, {
                                tail: true
                            }));
                        } else {
                            details.aggregate(masked.append(chunk.toString(), {
                                tail: true
                            }));
                        }
                    }

                    return details;
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        chunks: this.chunks.map(function (c) {
                            return c.state;
                        }),
                        from: this.from,
                        stop: this.stop,
                        blockIndex: this.blockIndex
                    };
                },
                set: function set(state) {
                    var chunks = state.chunks,
                        props = _objectWithoutProperties(state, chunk_tail_details_excluded);

                    Object.assign(this, props);
                    this.chunks = chunks.map(function (cstate) {
                        var chunk = "chunks" in cstate ? new ChunksTailDetails() : new ContinuousTailDetails(); // $FlowFixMe already checked above

                        chunk.state = cstate;
                        return chunk;
                    });
                }
            }, {
                key: "unshift",
                value: function unshift(beforePos) {
                    if (!this.chunks.length || beforePos != null && this.from >= beforePos) return '';
                    var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
                    var ci = 0;

                    while (ci < this.chunks.length) {
                        var chunk = this.chunks[ci];
                        var shiftChar = chunk.unshift(chunkShiftPos);

                        if (chunk.toString()) {
                            // chunk still contains value
                            // but not shifted - means no more available chars to shift
                            if (!shiftChar) break;
                            ++ci;
                        } else {
                            // clean if chunk has no value
                            this.chunks.splice(ci, 1);
                        }

                        if (shiftChar) return shiftChar;
                    }

                    return '';
                }
            }, {
                key: "shift",
                value: function shift() {
                    if (!this.chunks.length) return '';
                    var ci = this.chunks.length - 1;

                    while (0 <= ci) {
                        var chunk = this.chunks[ci];
                        var shiftChar = chunk.shift();

                        if (chunk.toString()) {
                            // chunk still contains value
                            // but not shifted - means no more available chars to shift
                            if (!shiftChar) break;
                            --ci;
                        } else {
                            // clean if chunk has no value
                            this.chunks.splice(ci, 1);
                        }

                        if (shiftChar) return shiftChar;
                    }

                    return '';
                }
            }]);

            return ChunksTailDetails;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern/cursor.js


        var PatternCursor = /*#__PURE__*/function () {
            function PatternCursor(masked, pos) {
                _classCallCheck(this, PatternCursor);

                this.masked = masked;
                this._log = [];

                var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? // first
                        {
                            index: 0,
                            offset: 0
                        } : // last
                        {
                            index: this.masked._blocks.length,
                            offset: 0
                        }),
                    offset = _ref.offset,
                    index = _ref.index;

                this.offset = offset;
                this.index = index;
                this.ok = false;
            }

            _createClass(PatternCursor, [{
                key: "block",
                get: function get() {
                    return this.masked._blocks[this.index];
                }
            }, {
                key: "pos",
                get: function get() {
                    return this.masked._blockStartPos(this.index) + this.offset;
                }
            }, {
                key: "state",
                get: function get() {
                    return {
                        index: this.index,
                        offset: this.offset,
                        ok: this.ok
                    };
                },
                set: function set(s) {
                    Object.assign(this, s);
                }
            }, {
                key: "pushState",
                value: function pushState() {
                    this._log.push(this.state);
                }
            }, {
                key: "popState",
                value: function popState() {
                    var s = this._log.pop();

                    this.state = s;
                    return s;
                }
            }, {
                key: "bindBlock",
                value: function bindBlock() {
                    if (this.block) return;

                    if (this.index < 0) {
                        this.index = 0;
                        this.offset = 0;
                    }

                    if (this.index >= this.masked._blocks.length) {
                        this.index = this.masked._blocks.length - 1;
                        this.offset = this.block.value.length;
                    }
                }
            }, {
                key: "_pushLeft",
                value: function _pushLeft(fn) {
                    this.pushState();

                    for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
                        var _this$block;

                        if (fn()) return this.ok = true;
                    }

                    return this.ok = false;
                }
            }, {
                key: "_pushRight",
                value: function _pushRight(fn) {
                    this.pushState();

                    for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
                        if (fn()) return this.ok = true;
                    }

                    return this.ok = false;
                }
            }, {
                key: "pushLeftBeforeFilled",
                value: function pushLeftBeforeFilled() {
                    var _this = this;

                    return this._pushLeft(function () {
                        if (_this.block.isFixed || !_this.block.value) return;
                        _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
                        if (_this.offset !== 0) return true;
                    });
                }
            }, {
                key: "pushLeftBeforeInput",
                value: function pushLeftBeforeInput() {
                    var _this2 = this; // cases:
                    // filled input: 00|
                    // optional empty input: 00[]|
                    // nested block: XX<[]>|


                    return this._pushLeft(function () {
                        if (_this2.block.isFixed) return;
                        _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
                        return true;
                    });
                }
            }, {
                key: "pushLeftBeforeRequired",
                value: function pushLeftBeforeRequired() {
                    var _this3 = this;

                    return this._pushLeft(function () {
                        if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value) return;
                        _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
                        return true;
                    });
                }
            }, {
                key: "pushRightBeforeFilled",
                value: function pushRightBeforeFilled() {
                    var _this4 = this;

                    return this._pushRight(function () {
                        if (_this4.block.isFixed || !_this4.block.value) return;
                        _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
                        if (_this4.offset !== _this4.block.value.length) return true;
                    });
                }
            }, {
                key: "pushRightBeforeInput",
                value: function pushRightBeforeInput() {
                    var _this5 = this;

                    return this._pushRight(function () {
                        if (_this5.block.isFixed) return; // const o = this.offset;

                        _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE); // HACK cases like (STILL DOES NOT WORK FOR NESTED)
                        // aa|X
                        // aa<X|[]>X_    - this will not work
                        // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;

                        return true;
                    });
                }
            }, {
                key: "pushRightBeforeRequired",
                value: function pushRightBeforeRequired() {
                    var _this6 = this;

                    return this._pushRight(function () {
                        if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value) return; // TODO check |[*]XX_

                        _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
                        return true;
                    });
                }
            }]);

            return PatternCursor;
        }();


        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/regexp.js


        /** Masking by RegExp */

        var MaskedRegExp = /*#__PURE__*/function (_Masked) {
            _inherits(MaskedRegExp, _Masked);

            var _super = _createSuper(MaskedRegExp);

            function MaskedRegExp() {
                _classCallCheck(this, MaskedRegExp);

                return _super.apply(this, arguments);
            }

            _createClass(MaskedRegExp, [{
                key: "_update",
                value:
                    /**
                     @override
                     @param {Object} opts
                     */
                    function _update(opts) {
                        if (opts.mask) opts.validate = function (value) {
                            return value.search(opts.mask) >= 0;
                        };

                        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
                    }
            }]);

            return MaskedRegExp;
        }(Masked);

        IMask.MaskedRegExp = MaskedRegExp;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pattern.js


        var pattern_excluded = ["_blocks"];
        /**
         Pattern mask
         @param {Object} opts
         @param {Object} opts.blocks
         @param {Object} opts.definitions
         @param {string} opts.placeholderChar
         @param {boolean} opts.lazy
         */

        var MaskedPattern = /*#__PURE__*/function (_Masked) {
            _inherits(MaskedPattern, _Masked);

            var _super = _createSuper(MaskedPattern);
            /** */

            /** */

            /** Single char for empty input */

            /** Show placeholder only when needed */


            function MaskedPattern() {
                var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                _classCallCheck(this, MaskedPattern); // TODO type $Shape<MaskedPatternOptions>={} does not work


                opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
                return _super.call(this, Object.assign({}, MaskedPattern.DEFAULTS, opts));
            }

            /**
             @override
             @param {Object} opts
             */


            _createClass(MaskedPattern, [{
                key: "_update",
                value: function _update() {
                    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    opts.definitions = Object.assign({}, this.definitions, opts.definitions);

                    _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

                    this._rebuildMask();
                }
                /** */

            }, {
                key: "_rebuildMask",
                value: function _rebuildMask() {
                    var _this = this;

                    var defs = this.definitions;
                    this._blocks = [];
                    this._stops = [];
                    this._maskedBlocks = {};
                    var pattern = this.mask;
                    if (!pattern || !defs) return;
                    var unmaskingBlock = false;
                    var optionalBlock = false;

                    for (var i = 0; i < pattern.length; ++i) {
                        if (this.blocks) {
                            var _ret = function () {
                                var p = pattern.slice(i);
                                var bNames = Object.keys(_this.blocks).filter(function (bName) {
                                    return p.indexOf(bName) === 0;
                                }); // order by key length

                                bNames.sort(function (a, b) {
                                    return b.length - a.length;
                                }); // use block name with max length

                                var bName = bNames[0];

                                if (bName) {
                                    // $FlowFixMe no ideas
                                    var maskedBlock = createMask(Object.assign({
                                        parent: _this,
                                        lazy: _this.lazy,
                                        eager: _this.eager,
                                        placeholderChar: _this.placeholderChar,
                                        overwrite: _this.overwrite
                                    }, _this.blocks[bName]));

                                    if (maskedBlock) {
                                        _this._blocks.push(maskedBlock); // store block index


                                        if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                                        _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                                    }

                                    i += bName.length - 1;
                                    return "continue";
                                }
                            }();

                            if (_ret === "continue") continue;
                        }

                        var char = pattern[i];
                        var isInput = (char in defs);

                        if (char === MaskedPattern.STOP_CHAR) {
                            this._stops.push(this._blocks.length);

                            continue;
                        }

                        if (char === '{' || char === '}') {
                            unmaskingBlock = !unmaskingBlock;
                            continue;
                        }

                        if (char === '[' || char === ']') {
                            optionalBlock = !optionalBlock;
                            continue;
                        }

                        if (char === MaskedPattern.ESCAPE_CHAR) {
                            ++i;
                            char = pattern[i];
                            if (!char) break;
                            isInput = false;
                        }

                        var def = isInput ? new PatternInputDefinition({
                            parent: this,
                            lazy: this.lazy,
                            eager: this.eager,
                            placeholderChar: this.placeholderChar,
                            mask: defs[char],
                            isOptional: optionalBlock
                        }) : new PatternFixedDefinition({
                            char: char,
                            eager: this.eager,
                            isUnmasking: unmaskingBlock
                        });

                        this._blocks.push(def);
                    }
                }
                /**
                 @override
                 */

            }, {
                key: "state",
                get: function get() {
                    return Object.assign({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
                        _blocks: this._blocks.map(function (b) {
                            return b.state;
                        })
                    });
                },
                set: function set(state) {
                    var _blocks = state._blocks,
                        maskedState = _objectWithoutProperties(state, pattern_excluded);

                    this._blocks.forEach(function (b, bi) {
                        return b.state = _blocks[bi];
                    });

                    _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "reset",
                value: function reset() {
                    _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

                    this._blocks.forEach(function (b) {
                        return b.reset();
                    });
                }
                /**
                 @override
                 */

            }, {
                key: "isComplete",
                get: function get() {
                    return this._blocks.every(function (b) {
                        return b.isComplete;
                    });
                }
                /**
                 @override
                 */

            }, {
                key: "isFilled",
                get: function get() {
                    return this._blocks.every(function (b) {
                        return b.isFilled;
                    });
                }
            }, {
                key: "isFixed",
                get: function get() {
                    return this._blocks.every(function (b) {
                        return b.isFixed;
                    });
                }
            }, {
                key: "isOptional",
                get: function get() {
                    return this._blocks.every(function (b) {
                        return b.isOptional;
                    });
                }
                /**
                 @override
                 */

            }, {
                key: "doCommit",
                value: function doCommit() {
                    this._blocks.forEach(function (b) {
                        return b.doCommit();
                    });

                    _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
                }
                /**
                 @override
                 */

            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this._blocks.reduce(function (str, b) {
                        return str += b.unmaskedValue;
                    }, '');
                },
                set: function set(unmaskedValue) {
                    _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "value",
                get: function get() {
                    // TODO return _value when not in change?
                    return this._blocks.reduce(function (str, b) {
                        return str += b.value;
                    }, '');
                },
                set: function set(value) {
                    _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "appendTail",
                value: function appendTail(tail) {
                    return _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
                }
                /**
                 @override
                 */

            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    var _this$_mapPosToBlock;

                    var details = new ChangeDetails();
                    var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
                    if (startBlockIndex == null) return details; // TODO test if it works for nested pattern masks

                    if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;

                    for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
                        var d = this._blocks[bi]._appendEager();

                        if (!d.inserted) break;
                        details.aggregate(d);
                    }

                    return details;
                }
                /**
                 @override
                 */

            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                    var blockIter = this._mapPosToBlock(this.value.length);

                    var details = new ChangeDetails();
                    if (!blockIter) return details;

                    for (var bi = blockIter.index; ; ++bi) {
                        var _flags$_beforeTailSta;

                        var _block = this._blocks[bi];
                        if (!_block) break;

                        var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
                            _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
                        }));

                        var skip = blockDetails.skip;
                        details.aggregate(blockDetails);
                        if (skip || blockDetails.rawInserted) break; // go next char
                    }

                    return details;
                }
                /**
                 @override
                 */

            }, {
                key: "extractTail",
                value: function extractTail() {
                    var _this2 = this;

                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    var chunkTail = new ChunksTailDetails();
                    if (fromPos === toPos) return chunkTail;

                    this._forEachBlocksInRange(fromPos, toPos, function (b, bi, bFromPos, bToPos) {
                        var blockChunk = b.extractTail(bFromPos, bToPos);
                        blockChunk.stop = _this2._findStopBefore(bi);
                        blockChunk.from = _this2._blockStartPos(bi);
                        if (blockChunk instanceof ChunksTailDetails) blockChunk.blockIndex = bi;
                        chunkTail.extend(blockChunk);
                    });

                    return chunkTail;
                }
                /**
                 @override
                 */

            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                    if (fromPos === toPos) return '';
                    var input = '';

                    this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
                        input += b.extractInput(fromPos, toPos, flags);
                    });

                    return input;
                }
            }, {
                key: "_findStopBefore",
                value: function _findStopBefore(blockIndex) {
                    var stopBefore;

                    for (var si = 0; si < this._stops.length; ++si) {
                        var stop = this._stops[si];
                        if (stop <= blockIndex) stopBefore = stop; else break;
                    }

                    return stopBefore;
                }
                /** Appends placeholder depending on laziness */

            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder(toBlockIndex) {
                    var _this3 = this;

                    var details = new ChangeDetails();
                    if (this.lazy && toBlockIndex == null) return details;

                    var startBlockIter = this._mapPosToBlock(this.value.length);

                    if (!startBlockIter) return details;
                    var startBlockIndex = startBlockIter.index;
                    var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

                    this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
                        if (!b.lazy || toBlockIndex != null) {
                            // $FlowFixMe `_blocks` may not be present
                            var args = b._blocks != null ? [b._blocks.length] : [];

                            var bDetails = b._appendPlaceholder.apply(b, args);

                            _this3._value += bDetails.inserted;
                            details.aggregate(bDetails);
                        }
                    });

                    return details;
                }
                /** Finds block in pos */

            }, {
                key: "_mapPosToBlock",
                value: function _mapPosToBlock(pos) {
                    var accVal = '';

                    for (var bi = 0; bi < this._blocks.length; ++bi) {
                        var _block2 = this._blocks[bi];
                        var blockStartPos = accVal.length;
                        accVal += _block2.value;

                        if (pos <= accVal.length) {
                            return {
                                index: bi,
                                offset: pos - blockStartPos
                            };
                        }
                    }
                }
                /** */

            }, {
                key: "_blockStartPos",
                value: function _blockStartPos(blockIndex) {
                    return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
                        return pos += b.value.length;
                    }, 0);
                }
                /** */

            }, {
                key: "_forEachBlocksInRange",
                value: function _forEachBlocksInRange(fromPos) {
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    var fn = arguments.length > 2 ? arguments[2] : undefined;

                    var fromBlockIter = this._mapPosToBlock(fromPos);

                    if (fromBlockIter) {
                        var toBlockIter = this._mapPosToBlock(toPos); // process first block


                        var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
                        var fromBlockStartPos = fromBlockIter.offset;
                        var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
                        fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);

                        if (toBlockIter && !isSameBlock) {
                            // process intermediate blocks
                            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
                                fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                            } // process last block


                            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
                        }
                    }
                }
                /**
                 @override
                 */

            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                    var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

                    this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
                        removeDetails.aggregate(b.remove(bFromPos, bToPos));
                    });

                    return removeDetails;
                }
                /**
                 @override
                 */

            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos) {
                    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
                    if (!this._blocks.length) return 0;
                    var cursor = new PatternCursor(this, cursorPos);

                    if (direction === DIRECTION.NONE) {
                        // -------------------------------------------------
                        // NONE should only go out from fixed to the right!
                        // -------------------------------------------------
                        if (cursor.pushRightBeforeInput()) return cursor.pos;
                        cursor.popState();
                        if (cursor.pushLeftBeforeInput()) return cursor.pos;
                        return this.value.length;
                    } // FORCE is only about a|* otherwise is 0


                    if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
                        // try to break fast when *|a
                        if (direction === DIRECTION.LEFT) {
                            cursor.pushRightBeforeFilled();
                            if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                            cursor.popState();
                        } // forward flow


                        cursor.pushLeftBeforeInput();
                        cursor.pushLeftBeforeRequired();
                        cursor.pushLeftBeforeFilled(); // backward flow

                        if (direction === DIRECTION.LEFT) {
                            cursor.pushRightBeforeInput();
                            cursor.pushRightBeforeRequired();
                            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                            cursor.popState();
                            if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                            cursor.popState();
                        }

                        if (cursor.ok) return cursor.pos;
                        if (direction === DIRECTION.FORCE_LEFT) return 0;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos; // cursor.popState();
                        // if (
                        //   cursor.pushRightBeforeInput() &&
                        //   // TODO HACK for lazy if has aligned left inside fixed and has came to the start - use start position
                        //   (!this.lazy || this.extractInput())
                        // ) return cursor.pos;

                        return 0;
                    }

                    if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
                        // forward flow
                        cursor.pushRightBeforeInput();
                        cursor.pushRightBeforeRequired();
                        if (cursor.pushRightBeforeFilled()) return cursor.pos;
                        if (direction === DIRECTION.FORCE_RIGHT) return this.value.length; // backward flow

                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        cursor.popState();
                        if (cursor.ok) return cursor.pos;
                        return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
                    }

                    return cursorPos;
                }
                /** Get block by name */

            }, {
                key: "maskedBlock",
                value: function maskedBlock(name) {
                    return this.maskedBlocks(name)[0];
                }
                /** Get all blocks by name */

            }, {
                key: "maskedBlocks",
                value: function maskedBlocks(name) {
                    var _this4 = this;

                    var indices = this._maskedBlocks[name];
                    if (!indices) return [];
                    return indices.map(function (gi) {
                        return _this4._blocks[gi];
                    });
                }
            }]);

            return MaskedPattern;
        }(Masked);

        MaskedPattern.DEFAULTS = {
            lazy: true,
            placeholderChar: '_'
        };
        MaskedPattern.STOP_CHAR = '`';
        MaskedPattern.ESCAPE_CHAR = '\\';
        MaskedPattern.InputDefinition = PatternInputDefinition;
        MaskedPattern.FixedDefinition = PatternFixedDefinition;
        IMask.MaskedPattern = MaskedPattern;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/range.js


        /** Pattern which accepts ranges */

        var MaskedRange = /*#__PURE__*/function (_MaskedPattern) {
            _inherits(MaskedRange, _MaskedPattern);

            var _super = _createSuper(MaskedRange);

            function MaskedRange() {
                _classCallCheck(this, MaskedRange);

                return _super.apply(this, arguments);
            }

            _createClass(MaskedRange, [{
                key: "_matchFrom",
                get:
                /**
                 Optionally sets max length of pattern.
                 Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
                 */

                /** Min bound */

                /** Max bound */

                    /** */
                    function get() {
                        return this.maxLength - String(this.from).length;
                    }
                /**
                 @override
                 */

            }, {
                key: "_update",
                value: function _update(opts) {
                    // TODO type
                    opts = Object.assign({
                        to: this.to || 0,
                        from: this.from || 0,
                        maxLength: this.maxLength || 0
                    }, opts);
                    var maxLength = String(opts.to).length;
                    if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
                    opts.maxLength = maxLength;
                    var fromStr = String(opts.from).padStart(maxLength, '0');
                    var toStr = String(opts.to).padStart(maxLength, '0');
                    var sameCharsCount = 0;

                    while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
                        ++sameCharsCount;
                    }

                    opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

                    _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
                }
                /**
                 @override
                 */

            }, {
                key: "isComplete",
                get: function get() {
                    return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
                }
            }, {
                key: "boundaries",
                value: function boundaries(str) {
                    var minstr = '';
                    var maxstr = '';

                    var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
                        _ref2 = _slicedToArray(_ref, 3),
                        placeholder = _ref2[1],
                        num = _ref2[2];

                    if (num) {
                        minstr = '0'.repeat(placeholder.length) + num;
                        maxstr = '9'.repeat(placeholder.length) + num;
                    }

                    minstr = minstr.padEnd(this.maxLength, '0');
                    maxstr = maxstr.padEnd(this.maxLength, '9');
                    return [minstr, maxstr];
                } // TODO str is a single char everytime

                /**
                 @override
                 */

            }, {
                key: "doPrepare",
                value: function doPrepare(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var details;

                    var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ''), flags));

                    var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);

                    ch = _normalizePrepare2[0];
                    details = _normalizePrepare2[1];
                    if (!this.autofix || !ch) return ch;
                    var fromStr = String(this.from).padStart(this.maxLength, '0');
                    var toStr = String(this.to).padStart(this.maxLength, '0');
                    var nextVal = this.value + ch;
                    if (nextVal.length > this.maxLength) return '';

                    var _this$boundaries = this.boundaries(nextVal),
                        _this$boundaries2 = _slicedToArray(_this$boundaries, 2),
                        minstr = _this$boundaries2[0],
                        maxstr = _this$boundaries2[1];

                    if (Number(maxstr) < this.from) return fromStr[nextVal.length - 1];

                    if (Number(minstr) > this.to) {
                        if (this.autofix === 'pad' && nextVal.length < this.maxLength) {
                            return ['', details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
                        }

                        return toStr[nextVal.length - 1];
                    }

                    return ch;
                }
                /**
                 @override
                 */

            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2;

                    var str = this.value;
                    var firstNonZero = str.search(/[^0]/);
                    if (firstNonZero === -1 && str.length <= this._matchFrom) return true;

                    var _this$boundaries3 = this.boundaries(str),
                        _this$boundaries4 = _slicedToArray(_this$boundaries3, 2),
                        minstr = _this$boundaries4[0],
                        maxstr = _this$boundaries4[1];

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
                }
            }]);

            return MaskedRange;
        }(MaskedPattern);

        IMask.MaskedRange = MaskedRange;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/date.js


        /** Date mask */

        var MaskedDate = /*#__PURE__*/function (_MaskedPattern) {
            _inherits(MaskedDate, _MaskedPattern);

            var _super = _createSuper(MaskedDate);
            /** Pattern mask for date according to {@link MaskedDate#format} */

            /** Start date */

            /** End date */

            /** */

            /**
             @param {Object} opts
             */


            function MaskedDate(opts) {
                _classCallCheck(this, MaskedDate);

                return _super.call(this, Object.assign({}, MaskedDate.DEFAULTS, opts));
            }

            /**
             @override
             */


            _createClass(MaskedDate, [{
                key: "_update",
                value: function _update(opts) {
                    if (opts.mask === Date) delete opts.mask;
                    if (opts.pattern) opts.mask = opts.pattern;
                    var blocks = opts.blocks;
                    opts.blocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

                    if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
                    if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

                    if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
                        opts.blocks.m.from = opts.min.getMonth() + 1;
                        opts.blocks.m.to = opts.max.getMonth() + 1;

                        if (opts.blocks.m.from === opts.blocks.m.to) {
                            opts.blocks.d.from = opts.min.getDate();
                            opts.blocks.d.to = opts.max.getDate();
                        }
                    }

                    Object.assign(opts.blocks, this.blocks, blocks); // add autofix

                    Object.keys(opts.blocks).forEach(function (bk) {
                        var b = opts.blocks[bk];
                        if (!('autofix' in b) && 'autofix' in opts) b.autofix = opts.autofix;
                    });

                    _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
                }
                /**
                 @override
                 */

            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2;

                    var date = this.date;

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
                }
                /** Checks if date is exists */

            }, {
                key: "isDateExist",
                value: function isDateExist(str) {
                    return this.format(this.parse(str, this), this).indexOf(str) >= 0;
                }
                /** Parsed Date */

            }, {
                key: "date",
                get: function get() {
                    return this.typedValue;
                },
                set: function set(date) {
                    this.typedValue = date;
                }
                /**
                 @override
                 */

            }, {
                key: "typedValue",
                get: function get() {
                    return this.isComplete ? _get(_getPrototypeOf(MaskedDate.prototype), "typedValue", this) : null;
                },
                set: function set(value) {
                    _set(_getPrototypeOf(MaskedDate.prototype), "typedValue", value, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    return mask === Date || _get(_getPrototypeOf(MaskedDate.prototype), "maskEquals", this).call(this, mask);
                }
            }]);

            return MaskedDate;
        }(MaskedPattern);

        MaskedDate.DEFAULTS = {
            pattern: 'd{.}`m{.}`Y',
            format: function format(date) {
                if (!date) return '';
                var day = String(date.getDate()).padStart(2, '0');
                var month = String(date.getMonth() + 1).padStart(2, '0');
                var year = date.getFullYear();
                return [day, month, year].join('.');
            },
            parse: function parse(str) {
                var _str$split = str.split('.'),
                    _str$split2 = _slicedToArray(_str$split, 3),
                    day = _str$split2[0],
                    month = _str$split2[1],
                    year = _str$split2[2];

                return new Date(year, month - 1, day);
            }
        };

        MaskedDate.GET_DEFAULT_BLOCKS = function () {
            return {
                d: {
                    mask: MaskedRange,
                    from: 1,
                    to: 31,
                    maxLength: 2
                },
                m: {
                    mask: MaskedRange,
                    from: 1,
                    to: 12,
                    maxLength: 2
                },
                Y: {
                    mask: MaskedRange,
                    from: 1900,
                    to: 9999
                }
            };
        };

        IMask.MaskedDate = MaskedDate;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/controls/mask-element.js


        /**
         Generic element API to use with mask
         @interface
         */

        var MaskElement = /*#__PURE__*/function () {
            function MaskElement() {
                _classCallCheck(this, MaskElement);
            }

            _createClass(MaskElement, [{
                key: "selectionStart",
                get:
                /** */

                /** */

                /** */

                    /** Safely returns selection start */
                    function get() {
                        var start;

                        try {
                            start = this._unsafeSelectionStart;
                        } catch (e) {
                        }

                        return start != null ? start : this.value.length;
                    }
                /** Safely returns selection end */

            }, {
                key: "selectionEnd",
                get: function get() {
                    var end;

                    try {
                        end = this._unsafeSelectionEnd;
                    } catch (e) {
                    }

                    return end != null ? end : this.value.length;
                }
                /** Safely sets element selection */

            }, {
                key: "select",
                value: function select(start, end) {
                    if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

                    try {
                        this._unsafeSelect(start, end);
                    } catch (e) {
                    }
                }
                /** Should be overriden in subclasses */

            }, {
                key: "_unsafeSelect",
                value: function _unsafeSelect(start, end) {
                }
                /** Should be overriden in subclasses */

            }, {
                key: "isActive",
                get: function get() {
                    return false;
                }
                /** Should be overriden in subclasses */

            }, {
                key: "bindEvents",
                value: function bindEvents(handlers) {
                }
                /** Should be overriden in subclasses */

            }, {
                key: "unbindEvents",
                value: function unbindEvents() {
                }
            }]);

            return MaskElement;
        }();

        IMask.MaskElement = MaskElement;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/controls/html-mask-element.js


        /** Bridge between HTMLElement and {@link Masked} */

        var HTMLMaskElement = /*#__PURE__*/function (_MaskElement) {
            _inherits(HTMLMaskElement, _MaskElement);

            var _super = _createSuper(HTMLMaskElement);
            /** Mapping between HTMLElement events and mask internal events */

            /** HTMLElement to use mask on */

            /**
             @param {HTMLInputElement|HTMLTextAreaElement} input
             */


            function HTMLMaskElement(input) {
                var _this;

                _classCallCheck(this, HTMLMaskElement);

                _this = _super.call(this);
                _this.input = input;
                _this._handlers = {};
                return _this;
            }

            /** */
            // $FlowFixMe https://github.com/facebook/flow/issues/2839


            _createClass(HTMLMaskElement, [{
                key: "rootElement",
                get: function get() {
                    var _this$input$getRootNo, _this$input$getRootNo2, _this$input;

                    return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
                }
                /**
                 Is element in focus
                 @readonly
                 */

            }, {
                key: "isActive",
                get: function get() {
                    //$FlowFixMe
                    return this.input === this.rootElement.activeElement;
                }
                /**
                 Returns HTMLElement selection start
                 @override
                 */

            }, {
                key: "_unsafeSelectionStart",
                get: function get() {
                    return this.input.selectionStart;
                }
                /**
                 Returns HTMLElement selection end
                 @override
                 */

            }, {
                key: "_unsafeSelectionEnd",
                get: function get() {
                    return this.input.selectionEnd;
                }
                /**
                 Sets HTMLElement selection
                 @override
                 */

            }, {
                key: "_unsafeSelect",
                value: function _unsafeSelect(start, end) {
                    this.input.setSelectionRange(start, end);
                }
                /**
                 HTMLElement value
                 @override
                 */

            }, {
                key: "value",
                get: function get() {
                    return this.input.value;
                },
                set: function set(value) {
                    this.input.value = value;
                }
                /**
                 Binds HTMLElement events to mask internal events
                 @override
                 */

            }, {
                key: "bindEvents",
                value: function bindEvents(handlers) {
                    var _this2 = this;

                    Object.keys(handlers).forEach(function (event) {
                        return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
                    });
                }
                /**
                 Unbinds HTMLElement events to mask internal events
                 @override
                 */

            }, {
                key: "unbindEvents",
                value: function unbindEvents() {
                    var _this3 = this;

                    Object.keys(this._handlers).forEach(function (event) {
                        return _this3._toggleEventHandler(event);
                    });
                }
                /** */

            }, {
                key: "_toggleEventHandler",
                value: function _toggleEventHandler(event, handler) {
                    if (this._handlers[event]) {
                        this.input.removeEventListener(event, this._handlers[event]);
                        delete this._handlers[event];
                    }

                    if (handler) {
                        this.input.addEventListener(event, handler);
                        this._handlers[event] = handler;
                    }
                }
            }]);

            return HTMLMaskElement;
        }(MaskElement);

        HTMLMaskElement.EVENTS_MAP = {
            selectionChange: 'keydown',
            input: 'input',
            drop: 'drop',
            click: 'click',
            focus: 'focus',
            commit: 'blur'
        };
        IMask.HTMLMaskElement = HTMLMaskElement;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/controls/html-contenteditable-mask-element.js


        var HTMLContenteditableMaskElement = /*#__PURE__*/function (_HTMLMaskElement) {
            _inherits(HTMLContenteditableMaskElement, _HTMLMaskElement);

            var _super = _createSuper(HTMLContenteditableMaskElement);

            function HTMLContenteditableMaskElement() {
                _classCallCheck(this, HTMLContenteditableMaskElement);

                return _super.apply(this, arguments);
            }

            _createClass(HTMLContenteditableMaskElement, [{
                key: "_unsafeSelectionStart",
                get:
                    /**
                     Returns HTMLElement selection start
                     @override
                     */
                    function get() {
                        var root = this.rootElement;
                        var selection = root.getSelection && root.getSelection();
                        var anchorOffset = selection && selection.anchorOffset;
                        var focusOffset = selection && selection.focusOffset;

                        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
                            return anchorOffset;
                        }

                        return focusOffset;
                    }
                /**
                 Returns HTMLElement selection end
                 @override
                 */

            }, {
                key: "_unsafeSelectionEnd",
                get: function get() {
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();
                    var anchorOffset = selection && selection.anchorOffset;
                    var focusOffset = selection && selection.focusOffset;

                    if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
                        return anchorOffset;
                    }

                    return focusOffset;
                }
                /**
                 Sets HTMLElement selection
                 @override
                 */

            }, {
                key: "_unsafeSelect",
                value: function _unsafeSelect(start, end) {
                    if (!this.rootElement.createRange) return;
                    var range = this.rootElement.createRange();
                    range.setStart(this.input.firstChild || this.input, start);
                    range.setEnd(this.input.lastChild || this.input, end);
                    var root = this.rootElement;
                    var selection = root.getSelection && root.getSelection();

                    if (selection) {
                        selection.removeAllRanges();
                        selection.addRange(range);
                    }
                }
                /**
                 HTMLElement value
                 @override
                 */

            }, {
                key: "value",
                get: function get() {
                    // $FlowFixMe
                    return this.input.textContent;
                },
                set: function set(value) {
                    this.input.textContent = value;
                }
            }]);

            return HTMLContenteditableMaskElement;
        }(HTMLMaskElement);

        IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/controls/input.js


        var input_excluded = ["mask"];
        /** Listens to element events and controls changes between element and {@link Masked} */

        var InputMask = /*#__PURE__*/function () {
            /**
             View element
             @readonly
             */

            /**
             Internal {@link Masked} model
             @readonly
             */

            /**
             @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
             @param {Object} opts
             */
            function InputMask(el, opts) {
                _classCallCheck(this, InputMask);

                this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA' ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
                this.masked = createMask(opts);
                this._listeners = {};
                this._value = '';
                this._unmaskedValue = '';
                this._saveSelection = this._saveSelection.bind(this);
                this._onInput = this._onInput.bind(this);
                this._onChange = this._onChange.bind(this);
                this._onDrop = this._onDrop.bind(this);
                this._onFocus = this._onFocus.bind(this);
                this._onClick = this._onClick.bind(this);
                this.alignCursor = this.alignCursor.bind(this);
                this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

                this._bindEvents(); // refresh


                this.updateValue();

                this._onChange();
            }

            /** Read or update mask */


            _createClass(InputMask, [{
                key: "mask",
                get: function get() {
                    return this.masked.mask;
                },
                set: function set(mask) {
                    if (this.maskEquals(mask)) return; // $FlowFixMe No ideas ... after update

                    if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
                        this.masked.updateOptions({
                            mask: mask
                        });
                        return;
                    }

                    var masked = createMask({
                        mask: mask
                    });
                    masked.unmaskedValue = this.masked.unmaskedValue;
                    this.masked = masked;
                }
                /** Raw value */

            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    var _this$masked;

                    return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
                }
            }, {
                key: "value",
                get: function get() {
                    return this._value;
                },
                set: function set(str) {
                    this.masked.value = str;
                    this.updateControl();
                    this.alignCursor();
                }
                /** Unmasked value */

            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this._unmaskedValue;
                },
                set: function set(str) {
                    this.masked.unmaskedValue = str;
                    this.updateControl();
                    this.alignCursor();
                }
                /** Typed unmasked value */

            }, {
                key: "typedValue",
                get: function get() {
                    return this.masked.typedValue;
                },
                set: function set(val) {
                    this.masked.typedValue = val;
                    this.updateControl();
                    this.alignCursor();
                }
                /**
                 Starts listening to element events
                 @protected
                 */

            }, {
                key: "_bindEvents",
                value: function _bindEvents() {
                    this.el.bindEvents({
                        selectionChange: this._saveSelection,
                        input: this._onInput,
                        drop: this._onDrop,
                        click: this._onClick,
                        focus: this._onFocus,
                        commit: this._onChange
                    });
                }
                /**
                 Stops listening to element events
                 @protected
                 */

            }, {
                key: "_unbindEvents",
                value: function _unbindEvents() {
                    if (this.el) this.el.unbindEvents();
                }
                /**
                 Fires custom event
                 @protected
                 */

            }, {
                key: "_fireEvent",
                value: function _fireEvent(ev) {
                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var listeners = this._listeners[ev];
                    if (!listeners) return;
                    listeners.forEach(function (l) {
                        return l.apply(void 0, args);
                    });
                }
                /**
                 Current selection start
                 @readonly
                 */

            }, {
                key: "selectionStart",
                get: function get() {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
                }
                /** Current cursor position */

            }, {
                key: "cursorPos",
                get: function get() {
                    return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
                },
                set: function set(pos) {
                    if (!this.el || !this.el.isActive) return;
                    this.el.select(pos, pos);

                    this._saveSelection();
                }
                /**
                 Stores current selection
                 @protected
                 */

            }, {
                key: "_saveSelection",
                value: function
                    /* ev */
                    _saveSelection() {
                    if (this.value !== this.el.value) {
                        console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
                    }

                    this._selection = {
                        start: this.selectionStart,
                        end: this.cursorPos
                    };
                }
                /** Syncronizes model value from view */

            }, {
                key: "updateValue",
                value: function updateValue() {
                    this.masked.value = this.el.value;
                    this._value = this.masked.value;
                }
                /** Syncronizes view from model value, fires change events */

            }, {
                key: "updateControl",
                value: function updateControl() {
                    var newUnmaskedValue = this.masked.unmaskedValue;
                    var newValue = this.masked.value;
                    var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
                    this._unmaskedValue = newUnmaskedValue;
                    this._value = newValue;
                    if (this.el.value !== newValue) this.el.value = newValue;
                    if (isChanged) this._fireChangeEvents();
                }
                /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

            }, {
                key: "updateOptions",
                value: function updateOptions(opts) {
                    var mask = opts.mask,
                        restOpts = _objectWithoutProperties(opts, input_excluded);

                    var updateMask = !this.maskEquals(mask);
                    var updateOpts = !objectIncludes(this.masked, restOpts);
                    if (updateMask) this.mask = mask;
                    if (updateOpts) this.masked.updateOptions(restOpts);
                    if (updateMask || updateOpts) this.updateControl();
                }
                /** Updates cursor */

            }, {
                key: "updateCursor",
                value: function updateCursor(cursorPos) {
                    if (cursorPos == null) return;
                    this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

                    this._delayUpdateCursor(cursorPos);
                }
                /**
                 Delays cursor update to support mobile browsers
                 @private
                 */

            }, {
                key: "_delayUpdateCursor",
                value: function _delayUpdateCursor(cursorPos) {
                    var _this = this;

                    this._abortUpdateCursor();

                    this._changingCursorPos = cursorPos;
                    this._cursorChanging = setTimeout(function () {
                        if (!_this.el) return; // if was destroyed

                        _this.cursorPos = _this._changingCursorPos;

                        _this._abortUpdateCursor();
                    }, 10);
                }
                /**
                 Fires custom events
                 @protected
                 */

            }, {
                key: "_fireChangeEvents",
                value: function _fireChangeEvents() {
                    this._fireEvent('accept', this._inputEvent);

                    if (this.masked.isComplete) this._fireEvent('complete', this._inputEvent);
                }
                /**
                 Aborts delayed cursor update
                 @private
                 */

            }, {
                key: "_abortUpdateCursor",
                value: function _abortUpdateCursor() {
                    if (this._cursorChanging) {
                        clearTimeout(this._cursorChanging);
                        delete this._cursorChanging;
                    }
                }
                /** Aligns cursor to nearest available position */

            }, {
                key: "alignCursor",
                value: function alignCursor() {
                    this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
                }
                /** Aligns cursor only if selection is empty */

            }, {
                key: "alignCursorFriendly",
                value: function alignCursorFriendly() {
                    if (this.selectionStart !== this.cursorPos) return; // skip if range is selected

                    this.alignCursor();
                }
                /** Adds listener on custom event */

            }, {
                key: "on",
                value: function on(ev, handler) {
                    if (!this._listeners[ev]) this._listeners[ev] = [];

                    this._listeners[ev].push(handler);

                    return this;
                }
                /** Removes custom event listener */

            }, {
                key: "off",
                value: function off(ev, handler) {
                    if (!this._listeners[ev]) return this;

                    if (!handler) {
                        delete this._listeners[ev];
                        return this;
                    }

                    var hIndex = this._listeners[ev].indexOf(handler);

                    if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
                    return this;
                }
                /** Handles view input event */

            }, {
                key: "_onInput",
                value: function _onInput(e) {
                    this._inputEvent = e;

                    this._abortUpdateCursor(); // fix strange IE behavior


                    if (!this._selection) return this.updateValue();
                    var details = new ActionDetails( // new state
                        this.el.value, this.cursorPos, // old state
                        this.value, this._selection);
                    var oldRawValue = this.masked.rawInputValue;
                    var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
                    // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

                    var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
                    var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
                    if (removeDirection !== DIRECTION.NONE) cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
                    this.updateControl();
                    this.updateCursor(cursorPos);
                    delete this._inputEvent;
                }
                /** Handles view change event and commits model value */

            }, {
                key: "_onChange",
                value: function _onChange() {
                    if (this.value !== this.el.value) {
                        this.updateValue();
                    }

                    this.masked.doCommit();
                    this.updateControl();

                    this._saveSelection();
                }
                /** Handles view drop event, prevents by default */

            }, {
                key: "_onDrop",
                value: function _onDrop(ev) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
                /** Restore last selection on focus */

            }, {
                key: "_onFocus",
                value: function _onFocus(ev) {
                    this.alignCursorFriendly();
                }
                /** Restore last selection on focus */

            }, {
                key: "_onClick",
                value: function _onClick(ev) {
                    this.alignCursorFriendly();
                }
                /** Unbind view events and removes element reference */

            }, {
                key: "destroy",
                value: function destroy() {
                    this._unbindEvents(); // $FlowFixMe why not do so?


                    this._listeners.length = 0; // $FlowFixMe

                    delete this.el;
                }
            }]);

            return InputMask;
        }();

        IMask.InputMask = InputMask;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/enum.js


        /** Pattern which validates enum values */

        var MaskedEnum = /*#__PURE__*/function (_MaskedPattern) {
            _inherits(MaskedEnum, _MaskedPattern);

            var _super = _createSuper(MaskedEnum);

            function MaskedEnum() {
                _classCallCheck(this, MaskedEnum);

                return _super.apply(this, arguments);
            }

            _createClass(MaskedEnum, [{
                key: "_update",
                value:
                    /**
                     @override
                     @param {Object} opts
                     */
                    function _update(opts) {
                        // TODO type
                        if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

                        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
                    }
                /**
                 @override
                 */

            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _this = this,
                        _get2;

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return this.enum.some(function (e) {
                        return e.indexOf(_this.unmaskedValue) >= 0;
                    }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
                }
            }]);

            return MaskedEnum;
        }(MaskedPattern);

        IMask.MaskedEnum = MaskedEnum;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/number.js


        /**
         Number mask
         @param {Object} opts
         @param {string} opts.radix - Single char
         @param {string} opts.thousandsSeparator - Single char
         @param {Array<string>} opts.mapToRadix - Array of single chars
         @param {number} opts.min
         @param {number} opts.max
         @param {number} opts.scale - Digits after point
         @param {boolean} opts.signed - Allow negative
         @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
         @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
         */

        var MaskedNumber = /*#__PURE__*/function (_Masked) {
            _inherits(MaskedNumber, _Masked);

            var _super = _createSuper(MaskedNumber);
            /** Single char */

            /** Single char */

            /** Array of single chars */

            /** */

            /** */

            /** Digits after point */

            /** */

            /** Flag to remove leading and trailing zeros in the end of editing */

            /** Flag to pad trailing zeros after point in the end of editing */


            function MaskedNumber(opts) {
                _classCallCheck(this, MaskedNumber);

                return _super.call(this, Object.assign({}, MaskedNumber.DEFAULTS, opts));
            }

            /**
             @override
             */


            _createClass(MaskedNumber, [{
                key: "_update",
                value: function _update(opts) {
                    _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

                    this._updateRegExps();
                }
                /** */

            }, {
                key: "_updateRegExps",
                value: function _updateRegExps() {
                    // use different regexp to process user input (more strict, input suffix) and tail shifting
                    var start = '^' + (this.allowNegative ? '[+|\\-]?' : '');
                    var midInput = '(0|([1-9]+\\d*))?';
                    var mid = '\\d*';
                    var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
                    this._numberRegExpInput = new RegExp(start + midInput + end);
                    this._numberRegExp = new RegExp(start + mid + end);
                    this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
                    this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
                }
                /** */

            }, {
                key: "_removeThousandsSeparators",
                value: function _removeThousandsSeparators(value) {
                    return value.replace(this._thousandsSeparatorRegExp, '');
                }
                /** */

            }, {
                key: "_insertThousandsSeparators",
                value: function _insertThousandsSeparators(value) {
                    // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
                    var parts = value.split(this.radix);
                    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
                    return parts.join(this.radix);
                }
                /**
                 @override
                 */

            }, {
                key: "doPrepare",
                value: function doPrepare(ch) {
                    var _get2;

                    ch = ch.replace(this._mapToRadixRegExp, this.radix);

                    var noSepCh = this._removeThousandsSeparators(ch);

                    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                        args[_key - 1] = arguments[_key];
                    }

                    var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))),
                        _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2),
                        prepCh = _normalizePrepare2[0],
                        details = _normalizePrepare2[1];

                    if (ch && !noSepCh) details.skip = true;
                    return [prepCh, details];
                }
                /** */

            }, {
                key: "_separatorsCount",
                value: function _separatorsCount(to) {
                    var extendOnSeparators = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var count = 0;

                    for (var pos = 0; pos < to; ++pos) {
                        if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
                            ++count;
                            if (extendOnSeparators) to += this.thousandsSeparator.length;
                        }
                    }

                    return count;
                }
                /** */

            }, {
                key: "_separatorsCountFromSlice",
                value: function _separatorsCountFromSlice() {
                    var slice = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;
                    return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
                }
                /**
                 @override
                 */

            }, {
                key: "extractInput",
                value: function extractInput() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
                    var flags = arguments.length > 2 ? arguments[2] : undefined;

                    var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);

                    var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);

                    fromPos = _this$_adjustRangeWit2[0];
                    toPos = _this$_adjustRangeWit2[1];
                    return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
                }
                /**
                 @override
                 */

            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);
                    var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                    var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);

                    this._value = this._removeThousandsSeparators(this.value);

                    var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

                    this._value = this._insertThousandsSeparators(this._value);
                    var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;

                    var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);

                    appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
                    appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
                    return appendDetails;
                }
                /** */

            }, {
                key: "_findSeparatorAround",
                value: function _findSeparatorAround(pos) {
                    if (this.thousandsSeparator) {
                        var searchFrom = pos - this.thousandsSeparator.length + 1;
                        var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
                        if (separatorPos <= pos) return separatorPos;
                    }

                    return -1;
                }
            }, {
                key: "_adjustRangeWithSeparators",
                value: function _adjustRangeWithSeparators(from, to) {
                    var separatorAroundFromPos = this._findSeparatorAround(from);

                    if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;

                    var separatorAroundToPos = this._findSeparatorAround(to);

                    if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
                    return [from, to];
                }
                /**
                 @override
                 */

            }, {
                key: "remove",
                value: function remove() {
                    var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                    var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

                    var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);

                    var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);

                    fromPos = _this$_adjustRangeWit4[0];
                    toPos = _this$_adjustRangeWit4[1];
                    var valueBeforePos = this.value.slice(0, fromPos);
                    var valueAfterPos = this.value.slice(toPos);

                    var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);

                    this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

                    var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);

                    return new ChangeDetails({
                        tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
                    });
                }
                /**
                 @override
                 */

            }, {
                key: "nearestInputPos",
                value: function nearestInputPos(cursorPos, direction) {
                    if (!this.thousandsSeparator) return cursorPos;

                    switch (direction) {
                        case DIRECTION.NONE:
                        case DIRECTION.LEFT:
                        case DIRECTION.FORCE_LEFT: {
                            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);

                            if (separatorAtLeftPos >= 0) {
                                var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;

                                if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                                    return separatorAtLeftPos;
                                }
                            }

                            break;
                        }

                        case DIRECTION.RIGHT:
                        case DIRECTION.FORCE_RIGHT: {
                            var separatorAtRightPos = this._findSeparatorAround(cursorPos);

                            if (separatorAtRightPos >= 0) {
                                return separatorAtRightPos + this.thousandsSeparator.length;
                            }
                        }
                    }

                    return cursorPos;
                }
                /**
                 @override
                 */

            }, {
                key: "doValidate",
                value: function doValidate(flags) {
                    var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

                    var valid = regexp.test(this._removeThousandsSeparators(this.value));

                    if (valid) {
                        // validate as number
                        var number = this.number;
                        valid = valid && !isNaN(number) && ( // check min bound for negative values
                            this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
                            this.max == null || this.max <= 0 || this.number <= this.max);
                    }

                    return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
                }
                /**
                 @override
                 */

            }, {
                key: "doCommit",
                value: function doCommit() {
                    if (this.value) {
                        var number = this.number;
                        var validnum = number; // check bounds

                        if (this.min != null) validnum = Math.max(validnum, this.min);
                        if (this.max != null) validnum = Math.min(validnum, this.max);
                        if (validnum !== number) this.unmaskedValue = String(validnum);
                        var formatted = this.value;
                        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
                        if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
                        this._value = formatted;
                    }

                    _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
                }
                /** */

            }, {
                key: "_normalizeZeros",
                value: function _normalizeZeros(value) {
                    var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


                    parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
                        return sign + num;
                    }); // add leading zero

                    if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

                    if (parts.length > 1) {
                        parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

                        if (!parts[1].length) parts.length = 1; // remove fractional
                    }

                    return this._insertThousandsSeparators(parts.join(this.radix));
                }
                /** */

            }, {
                key: "_padFractionalZeros",
                value: function _padFractionalZeros(value) {
                    if (!value) return value;
                    var parts = value.split(this.radix);
                    if (parts.length < 2) parts.push('');
                    parts[1] = parts[1].padEnd(this.scale, '0');
                    return parts.join(this.radix);
                }
                /**
                 @override
                 */

            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
                },
                set: function set(unmaskedValue) {
                    _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "typedValue",
                get: function get() {
                    return Number(this.unmaskedValue);
                },
                set: function set(n) {
                    _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", String(n), this, true);
                }
                /** Parsed Number */

            }, {
                key: "number",
                get: function get() {
                    return this.typedValue;
                },
                set: function set(number) {
                    this.typedValue = number;
                }
                /**
                 Is negative allowed
                 @readonly
                 */

            }, {
                key: "allowNegative",
                get: function get() {
                    return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
                }
            }]);

            return MaskedNumber;
        }(Masked);

        MaskedNumber.DEFAULTS = {
            radix: ',',
            thousandsSeparator: '',
            mapToRadix: ['.'],
            scale: 2,
            signed: false,
            normalizeZeros: true,
            padFractionalZeros: false
        };
        IMask.MaskedNumber = MaskedNumber;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/function.js


        /** Masking by custom Function */

        var MaskedFunction = /*#__PURE__*/function (_Masked) {
            _inherits(MaskedFunction, _Masked);

            var _super = _createSuper(MaskedFunction);

            function MaskedFunction() {
                _classCallCheck(this, MaskedFunction);

                return _super.apply(this, arguments);
            }

            _createClass(MaskedFunction, [{
                key: "_update",
                value:
                    /**
                     @override
                     @param {Object} opts
                     */
                    function _update(opts) {
                        if (opts.mask) opts.validate = opts.mask;

                        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
                    }
            }]);

            return MaskedFunction;
        }(Masked);

        IMask.MaskedFunction = MaskedFunction;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/dynamic.js


        var dynamic_excluded = ["compiledMasks", "currentMaskRef", "currentMask"];
        /** Dynamic mask for choosing apropriate mask in run-time */

        var MaskedDynamic = /*#__PURE__*/function (_Masked) {
            _inherits(MaskedDynamic, _Masked);

            var _super = _createSuper(MaskedDynamic);
            /** Currently chosen mask */

            /** Compliled {@link Masked} options */

            /** Chooses {@link Masked} depending on input value */

            /**
             @param {Object} opts
             */


            function MaskedDynamic(opts) {
                var _this;

                _classCallCheck(this, MaskedDynamic);

                _this = _super.call(this, Object.assign({}, MaskedDynamic.DEFAULTS, opts));
                _this.currentMask = null;
                return _this;
            }

            /**
             @override
             */


            _createClass(MaskedDynamic, [{
                key: "_update",
                value: function _update(opts) {
                    _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

                    if ('mask' in opts) {
                        // mask could be totally dynamic with only `dispatch` option
                        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
                            return createMask(m);
                        }) : [];
                    }
                }
                /**
                 @override
                 */

            }, {
                key: "_appendCharRaw",
                value: function _appendCharRaw(ch) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                    var details = this._applyDispatch(ch, flags);

                    if (this.currentMask) {
                        details.aggregate(this.currentMask._appendChar(ch, flags));
                    }

                    return details;
                }
            }, {
                key: "_applyDispatch",
                value: function _applyDispatch() {
                    var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
                    var inputValue = this.rawInputValue;
                    var insertValue = flags.tail && flags._beforeTailState != null ? // $FlowFixMe - tired to fight with type system
                        flags._beforeTailState._rawInputValue : inputValue;
                    var tailValue = inputValue.slice(insertValue.length);
                    var prevMask = this.currentMask;
                    var details = new ChangeDetails();
                    var prevMaskState = prevMask && prevMask.state; // clone flags to prevent overwriting `_beforeTailState`

                    this.currentMask = this.doDispatch(appended, Object.assign({}, flags)); // restore state after dispatch

                    if (this.currentMask) {
                        if (this.currentMask !== prevMask) {
                            // if mask changed reapply input
                            this.currentMask.reset();

                            if (insertValue) {
                                // $FlowFixMe - it's ok, we don't change current mask above
                                var d = this.currentMask.append(insertValue, {
                                    raw: true
                                });
                                details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                            }

                            if (tailValue) {
                                // $FlowFixMe - it's ok, we don't change current mask above
                                details.tailShift += this.currentMask.append(tailValue, {
                                    raw: true,
                                    tail: true
                                }).tailShift;
                            }
                        } else {
                            // Dispatch can do something bad with state, so
                            // restore prev mask state
                            this.currentMask.state = prevMaskState;
                        }
                    }

                    return details;
                }
            }, {
                key: "_appendPlaceholder",
                value: function _appendPlaceholder() {
                    var details = this._applyDispatch.apply(this, arguments);

                    if (this.currentMask) {
                        details.aggregate(this.currentMask._appendPlaceholder());
                    }

                    return details;
                }
                /**
                 @override
                 */

            }, {
                key: "_appendEager",
                value: function _appendEager() {
                    var details = this._applyDispatch.apply(this, arguments);

                    if (this.currentMask) {
                        details.aggregate(this.currentMask._appendEager());
                    }

                    return details;
                }
                /**
                 @override
                 */

            }, {
                key: "doDispatch",
                value: function doDispatch(appended) {
                    var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                    return this.dispatch(appended, this, flags);
                }
                /**
                 @override
                 */

            }, {
                key: "doValidate",
                value: function doValidate() {
                    var _get2, _this$currentMask;

                    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
                }
                /**
                 @override
                 */

            }, {
                key: "reset",
                value: function reset() {
                    var _this$currentMask2;

                    (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
                    this.compiledMasks.forEach(function (m) {
                        return m.reset();
                    });
                }
                /**
                 @override
                 */

            }, {
                key: "value",
                get: function get() {
                    return this.currentMask ? this.currentMask.value : '';
                },
                set: function set(value) {
                    _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "unmaskedValue",
                get: function get() {
                    return this.currentMask ? this.currentMask.unmaskedValue : '';
                },
                set: function set(unmaskedValue) {
                    _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "typedValue",
                get: function get() {
                    return this.currentMask ? this.currentMask.typedValue : '';
                } // probably typedValue should not be used with dynamic
                ,
                set: function set(value) {
                    var unmaskedValue = String(value); // double check it

                    if (this.currentMask) {
                        this.currentMask.typedValue = value;
                        unmaskedValue = this.currentMask.unmaskedValue;
                    }

                    this.unmaskedValue = unmaskedValue;
                }
                /**
                 @override
                 */

            }, {
                key: "isComplete",
                get: function get() {
                    var _this$currentMask3;

                    return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
                }
                /**
                 @override
                 */

            }, {
                key: "isFilled",
                get: function get() {
                    var _this$currentMask4;

                    return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
                }
                /**
                 @override
                 */

            }, {
                key: "remove",
                value: function remove() {
                    var details = new ChangeDetails();

                    if (this.currentMask) {
                        var _this$currentMask5;

                        details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)) // update with dispatch
                            .aggregate(this._applyDispatch());
                    }

                    return details;
                }
                /**
                 @override
                 */

            }, {
                key: "state",
                get: function get() {
                    return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
                        _rawInputValue: this.rawInputValue,
                        compiledMasks: this.compiledMasks.map(function (m) {
                            return m.state;
                        }),
                        currentMaskRef: this.currentMask,
                        currentMask: this.currentMask && this.currentMask.state
                    });
                },
                set: function set(state) {
                    var compiledMasks = state.compiledMasks,
                        currentMaskRef = state.currentMaskRef,
                        currentMask = state.currentMask,
                        maskedState = _objectWithoutProperties(state, dynamic_excluded);

                    this.compiledMasks.forEach(function (m, mi) {
                        return m.state = compiledMasks[mi];
                    });

                    if (currentMaskRef != null) {
                        this.currentMask = currentMaskRef;
                        this.currentMask.state = currentMask;
                    }

                    _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
                }
                /**
                 @override
                 */

            }, {
                key: "extractInput",
                value: function extractInput() {
                    var _this$currentMask6;

                    return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : '';
                }
                /**
                 @override
                 */

            }, {
                key: "extractTail",
                value: function extractTail() {
                    var _this$currentMask7, _get3;

                    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                        args[_key2] = arguments[_key2];
                    }

                    return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
                }
                /**
                 @override
                 */

            }, {
                key: "doCommit",
                value: function doCommit() {
                    if (this.currentMask) this.currentMask.doCommit();

                    _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
                }
                /**
                 @override
                 */

            }, {
                key: "nearestInputPos",
                value: function nearestInputPos() {
                    var _this$currentMask8, _get4;

                    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        args[_key3] = arguments[_key3];
                    }

                    return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
                }
            }, {
                key: "overwrite",
                get: function get() {
                    return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic.prototype), "overwrite", this);
                },
                set: function set(overwrite) {
                    console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
                }
            }, {
                key: "eager",
                get: function get() {
                    return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic.prototype), "eager", this);
                },
                set: function set(eager) {
                    console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
                }
                /**
                 @override
                 */

            }, {
                key: "maskEquals",
                value: function maskEquals(mask) {
                    return Array.isArray(mask) && this.compiledMasks.every(function (m, mi) {
                        var _mask$mi;

                        return m.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
                    });
                }
            }]);

            return MaskedDynamic;
        }(Masked);

        MaskedDynamic.DEFAULTS = {
            dispatch: function dispatch(appended, masked, flags) {
                if (!masked.compiledMasks.length) return;
                var inputValue = masked.rawInputValue; // simulate input

                var inputs = masked.compiledMasks.map(function (m, index) {
                    m.reset();
                    m.append(inputValue, {
                        raw: true
                    });
                    m.append(appended, flags);
                    var weight = m.rawInputValue.length;
                    return {
                        weight: weight,
                        index: index
                    };
                }); // pop masks with longer values first

                inputs.sort(function (i1, i2) {
                    return i2.weight - i1.weight;
                });
                return masked.compiledMasks[inputs[0].index];
            }
        };
        IMask.MaskedDynamic = MaskedDynamic;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/masked/pipe.js


        /** Mask pipe source and destination types */

        var PIPE_TYPE = {
            MASKED: 'value',
            UNMASKED: 'unmaskedValue',
            TYPED: 'typedValue'
        };

        /** Creates new pipe function depending on mask type, source and destination options */

        function createPipe(mask) {
            var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PIPE_TYPE.MASKED;
            var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : PIPE_TYPE.MASKED;
            var masked = createMask(mask);
            return function (value) {
                return masked.runIsolated(function (m) {
                    m[from] = value;
                    return m[to];
                });
            };
        }

        /** Pipes value through mask depending on mask type, source and destination options */


        function pipe(value) {
            for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                pipeArgs[_key - 1] = arguments[_key];
            }

            return createPipe.apply(void 0, pipeArgs)(value);
        }

        IMask.PIPE_TYPE = PIPE_TYPE;
        IMask.createPipe = createPipe;
        IMask.pipe = pipe;

        ;// CONCATENATED MODULE: ./node_modules/imask/esm/index.js


        try {
            globalThis.IMask = IMask;
        } catch (e) {
        }
        ;// CONCATENATED MODULE: ./src/js/forms.js


        function initForms() {
            const forms = document.querySelectorAll('form');

            if (forms.length === 0) {
                return;
            }

            forms.forEach(form => {
                form.validator = new Validator(form);
                form.addEventListener('submit', handleFormSubmit);
            });
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const form = e.currentTarget;
            const fd = new FormData(form);
            const submit = form.querySelector('input[type="submit"]');
            const url = form.getAttribute('action');

            if (!form || !url || !form.validator.validate()) {
                return;
            }

            fetch(url, {
                method: 'POST',
                body: fd
            }).then(response => response.json()).then(response => {
                if (response.success) {
                    submit.value = 'Отправлено';
                    submit.setAttribute('disabled', 'disabled');
                }
            });
        }

        function initDatepicker() {
            const datepickerEl = document.querySelectorAll('.js-datepicker');

            if (!datepickerEl) {
                return;
            }

            datepickerEl.forEach(function (datepickerItem) {
                dist_datepicker_min_default()(datepickerItem, {
                    formatter: (input, date, instance) => {
                        input.value = date.toLocaleDateString();
                    },
                    minDate: new Date(),
                    startDay: 1
                });
            });
        }

        function initInputMask() {
            const phoneInputs = document.querySelectorAll('input[type="tel"]');
            const timeInputs = document.querySelectorAll('.js-time-input');
            const dateInputs = document.querySelectorAll('.js-input-date');
            [...phoneInputs].forEach(input => {
                IMask(input, {
                    mask: '+{7} (000) 000-00-00'
                });
            });
            [...timeInputs].forEach(input => {
                IMask(input, {
                    mask: '00:00'
                });
            });
            [...dateInputs].forEach(input => {
                IMask(input, {
                    mask: Date,
                    min: new Date(1930, 0, 1),
                    max: new Date(2022, 0, 1),
                    lazy: true
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/museumHistorySlider.js
        function initMuseumHistorySlider() {
            const historyArrows = document.querySelectorAll('.js-museum-history-arrow');
            const historyYears = document.querySelectorAll('.js-museum-history-year');
            const historyItems = document.querySelectorAll('.js-museum-history-item');

            if (historyItems.length === 0 || historyYears.length === 0) {
                return;
            }

            let index = 0;
            historyArrows.forEach(function (arrow) {
                arrow.addEventListener('click', function (e) {
                    e.preventDefault();
                    const step = Number(arrow.dataset.step);
                    index = index + step;
                    historyArrows[0].classList.toggle('arrows__item--disabled', index === 0);
                    historyArrows[1].classList.toggle('arrows__item--disabled', index >= historyYears.length - 1);
                    toggleSlide(index);
                });
            });

            function toggleSlide(index) {
                historyYears.forEach(function (item, currentIndex) {
                    item.classList.toggle('museumHistory__year--active', index === currentIndex);
                });
                historyItems.forEach(function (item, currentIndex) {
                    item.classList.toggle('museumHistory__contentItem--active', index === currentIndex);
                });
            }

            historyYears.forEach(function (item, currentIndex) {
                item.addEventListener('click', function (e) {
                    e.preventDefault();
                    toggleSlide(currentIndex);
                });
            });
        }
        ;// CONCATENATED MODULE: ./src/js/mediaLoadMore.js
        function initMediaLoadMore() {
            const loadMoreForm = document.querySelector('.js-media-load-more-form');
            const loadMoreContainer = document.querySelector('.js-media-load-more-container');

            if (!loadMoreForm || !loadMoreContainer) {
                return;
            }

            loadMoreForm.addEventListener('submit', function (e) {
                e.preventDefault();
                const url = loadMoreForm.getAttribute('action');
                fetch(url, {
                    method: 'POST'
                }).then(response => response.json()).then(response => {
                    const {
                        images,
                        success
                    } = response;

                    if (!success || images.length < 6) {
                        loadMoreForm.remove();
                    } else {
                        loadMoreContainer.innerHTML += images.map(image => renderPhotoItem(image));
                    }
                }).catch(err => {
                    loadMoreForm.remove();
                });
            });
        }

        function renderPhotoItem(image) {
            return `<a href="${image.full}" class="mediaPhotoVideo__item">
            <img src="${image.thumbnail}"
                srcset="${image.thumbnail} 1x,
                        ${image.thumbnail2x} 2x"
                alt="photo" class="mediaPhotoVideo__itemImg">
          </a>`;
        }
        ;// CONCATENATED MODULE: ./src/js/mediaNewsPanel.js

        function initMediaNewsPanel() {
            mediaNewsPanel_toggleSearchPanel();
        }

        function mediaNewsPanel_toggleSearchPanel() {
            if (isWindowSizeSmallerThen(520)) {
                return;
            }

            const searchPanel = document.querySelector('.js-news-panel-search');
            const openSearchPanel = document.querySelector('.js-search-open');
            const closeSearchPanel = document.querySelector('.js-search-close');

            if (!searchPanel || !openSearchPanel || !closeSearchPanel) {
                return;
            }

            openSearchPanel.addEventListener('click', function () {
                searchPanel.classList.add('navigationPanel--active');
            });
            closeSearchPanel.addEventListener('click', function () {
                searchPanel.classList.remove('navigationPanel--active');
            });
        }
        ;// CONCATENATED MODULE: ./src/js/photoContest.js


        function initPhotoContest() {
            changePhotoCardsView();
            // toggleLike();
            openPhoto();
            rewardItemsToggle();
            initPhotoContestGallery();
        }

        let swiperContest;
        const viewSelectors = document.querySelectorAll('.js-view-selector-photo');
        const photoCards = document.querySelectorAll('.js-photo-cards');
        const rewardItems = document.querySelector('.js-items-wrapper');
        // const loadMoreContest = document.querySelector('.js-photo-contest-load-more-form');

        function changePhotoCardsView() {
            viewSelectors.forEach(function (item) {
                const columns = item.dataset.columns;
                item.addEventListener('click', function () {
                    photoContest_removeClasses();

                    // if (loadMoreContest.classList.contains('photoContestVoting__form--hidden')) {
                    //     loadMoreContest.classList.remove('photoContestVoting__form--hidden');
                    // }

                    item.classList.add('photoContestVoting__viewSelector--active');
                    photoCards[0].classList.add('photoContestVoting__cards--' + columns + 'photo');
                });
            });
        }

        function photoContest_removeClasses() {
            viewSelectors.forEach(function (item) {
                const columns = item.dataset.columns;
                item.classList.remove('photoContestVoting__viewSelector--active');
                photoCards.forEach(card => {
                    card.classList.remove('photoContestVoting__cards--' + columns + 'photo');
                });
            });
        }

        function toggleLike() {
            if (!photoCards) {
                return;
            }

            photoCards.forEach(card => {
                card.addEventListener('click', function (event) {

                    let target = event.target.closest('.photoCard__panelLikeIcon');

                    if (!card.contains(target)) {
                        return;
                    }

                    const item = event.target.closest('.photoCard');
                    let countHtml = item.querySelector('.js-like-counter');

                    if (target.classList.contains('photoCard__panelLikeIcon--active')) {
                        countHtml.innerHTML--;
                    } else {
                        countHtml.innerHTML++;
                    }

                    target.classList.toggle('photoCard__panelLikeIcon--active');
                });
            });
        }

        const pageContestVoting = document.querySelector('.js-photo-contest-voting');
        const pageContestVotingThirdStage = document.querySelector('.js-contest-third-stage');
        const pageContestRewarding = document.querySelector('.js-photo-contest-rewarding');

        function openPhoto() {
            if (!photoCards) {
                return;
            }

            photoCards.forEach(card => {
                card.addEventListener('click', function (event) {
                    let target = pageContestVoting || pageContestRewarding ? event.target.closest('.photoCard__panelZoom') : event.target.closest('.photoContestVoting__card');

                    if (!card.contains(target)) {
                        return;
                    }
                });
            });
        }

        function initPhotoContestGallery() {
            const galleries = document.querySelectorAll('.js-open-photo-contest-gallery');

            if (!galleries) {
                return;
            }

            let el = [];

            if (galleries.length > 1) {
                el = [document.querySelector('.js-photo-contest-rewarding')] || 0;
            } else {
                el = galleries;
            }

            el.forEach(function (gallery) {
                lightgallery_es5(gallery, {
                    selector: pageContestVoting || pageContestRewarding ? '.photoCard__panelZoom' : '.photoContestVoting__card',
                    plugins: [lg_zoom_es5, lg_thumbnail_es5, lg_video_es5],
                    speed: 500,
                    // licenseKey: '0000-0000-000-0000'
                    thumbnail: false,
                    download: false,
                    zoom: false,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0,
                        controls: 1,
                        autoplay: 1
                    }
                });
            });
        }

        function initSwiper() {
            swiperContest = new Swiper(".js-swiper-contest", {
                // spaceBetween: 0,
                slidesPerView: 'auto',
                // loop: true,
                navigation: {
                    nextEl: '.js-swiper-contest-next',
                    prevEl: '.js-swiper-contest-prev'
                }
            });
        }

        function rewardItemsToggle() {
            if (!rewardItems) {
                return;
            }

            rewardItems.addEventListener('click', function (e) {
                const target = event.target;
                const item = target.closest('.rewarding__itemHeading');

                if (!item) {
                    return;
                }

                const SpoilerElement = new SlideToggle(item.dataset.container, 'rewarding__itemContent--active');
                item.classList.toggle('rewarding__itemHeading--active');
                SpoilerElement.toggle();
            });
        }
        ;// CONCATENATED MODULE: ./src/js/modals.js

        function initModals() {
            const openModalLinks = document.querySelectorAll('.js-open-modal');
            const closeModalsLinks = document.querySelectorAll('.js-close-modals');
            const modalsContainer = document.querySelector('.js-modals');
            const searchString = new URLSearchParams(window.location.search);
            const modal = searchString.get('modal');

            if (modal) {
                openModal(modal);
            }

            if (!modalsContainer) {
                return;
            }

            closeModalsLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    closeModals();
                });
            });
            openModalLinks.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    closeModals();
                    const linkElement = e.currentTarget;
                    const modalId = (linkElement.dataset.modal || linkElement.getAttribute('href')).split('#').pop();
                    openModal(modalId);
                });
            });
            modalsContainer.addEventListener('click', function (e) {
                if (e.target.classList.contains('js-modals')) {
                    closeModals();
                }
            });
        }

        function openModal(modalId) {
            Body.fixBody();
            const modalsContainer = document.querySelector('.js-modals');
            const modal = document.getElementById(modalId);

            if (!modal) {
                return;
            }

            modal.classList.add('modals__item--active');
            modalsContainer.classList.add('modals--active');
        }

        function closeModals() {
            Body.releaseBody();
            const modalsContainer = document.querySelector('.js-modals');
            modalsContainer.classList.remove('modals--active');
            [...modalsContainer.children].forEach(modal => {
                modal.classList.remove('modals__item--active');
            });
        }
        ;// CONCATENATED MODULE: ./src/js/personalCard.js
        function initPersonalCard() {
            const menuButton = document.querySelector('.js-personal-burger');
            const personalCard = document.querySelector('.js-personal-card');

            if (!personalCard) {
                return;
            }

            menuButton.addEventListener('click', function () {
                menuButton.classList.toggle('personalCard__mobBurger--active');
                personalCard.classList.toggle('personalCard--active');
            });
        }
        ;// CONCATENATED MODULE: ./src/js/fileUpload.js
        function initFileUpload() {
            const fileInput = document.querySelector('.js-input-file');
            const photosWrapper = document.querySelector('.js-photos-wrapper');

            if (!fileInput) {
                return;
            }

            fileInput.addEventListener('change', handleChangeFileInput);

            function handleChangeFileInput(e) {
                const files = [...e.target.files];
                files.forEach(file => {
                    const reader = new FileReader();

                    reader.onload = e => {
                        const newImage = renderLoadedImg(e.target.result, file.name);
                        photosWrapper.innerHTML += newImage;
                    };

                    reader.readAsDataURL(file);
                });
            }

            function renderLoadedImg(url, name) {
                return `<div class="fileUpload__photoItem">
                    <img alt="Your image" src="${url}"/>
                    <div class="fileUpload__photoItemName">${name}</div>
                    <div class="fileUpload__photoItemProgress">100%</div>
                </div>`;
            }
        }
        ;// CONCATENATED MODULE: ./src/js/jury.js
        function initJury() {
            const popupJuryImg = document.querySelector('.js-popup-jury-img');
            const popupJuryName = document.querySelector('.js-popup-jury-name');
            const popupJuryPost = document.querySelector('.js-popup-jury-post');
            const popupJuryInfo = document.querySelector('.js-popup-jury-info');
            const juryItems = document.querySelector('.js-jury-items');

            if (!juryItems) {
                return;
            }

            juryItems.addEventListener('click', function (e) {
                e.preventDefault();
                const target = event.target;
                const item = target.closest('.jury__item');

                if (!item) {
                    return;
                }

                const juryName = item.querySelector('.jury__itemName').textContent;
                const juryPost = item.querySelector('.jury__itemPost').textContent;
                const juryInfo = item.querySelector('.jury__itemDescriptionItem').textContent;
                const juryImg = item.querySelector('.jury__itemCardImgItem').getAttribute('src');
                popupJuryName.innerText = juryName;
                popupJuryPost.innerText = juryPost;
                popupJuryInfo.innerText = juryInfo;
                popupJuryImg.setAttribute('src', juryImg);
                return false
            });
        }
        ;// CONCATENATED MODULE: ./src/js/mainMuseumHistory.js

        function initMainMuseumHistory() {
            const museumWrapper = document.querySelectorAll('.js-museum-wrapper');

            if (isWindowSizeSmallerThen()) {
                return;
            }

            museumWrapper.forEach(wrapper => {
                bindMouseMove(wrapper);
            });
        }

        function bindMouseMove(museumWrapper) {
            const museumButton = museumWrapper.querySelector('.js-museum-button');
            const halfWrapperWidth = museumWrapper.offsetWidth / 2;
            const halfWrapperHeight = museumWrapper.offsetHeight / 2;
            const museumButtonSize = museumButton.offsetWidth;
            museumButton.style.transform = 'translateX(-110px)';
            museumWrapper.addEventListener('mousemove', function (e) {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = Math.round(e.clientX - rect.left);
                const y = Math.round(e.clientY - rect.top);

                if (x > halfWrapperWidth * 2 - museumButtonSize / 2 || y > halfWrapperHeight * 2 - museumButtonSize / 2 || x < museumButtonSize / 2 || y < museumButtonSize / 2) {
                    return;
                }

                museumButton.style.transform = `translate(${x - halfWrapperWidth}px ,${y - halfWrapperHeight}px)`;
            });
            museumWrapper.addEventListener('mouseleave', function (e) {
                museumButton.style.transform = 'translateX(-110px)';
            });
        }
        ;// CONCATENATED MODULE: ./src/js/hoverLines.js
        function initHoverLines() {
            const hoverElements = document.querySelectorAll('.js-hover-lines');
            hoverElements.forEach(element => {
                createLines(element);
            });
        }

        function createLines(element) {
            const fontSizeStyle = window.getComputedStyle(element, null).getPropertyValue('font-size');
            const lineHeightStyle = window.getComputedStyle(element, null).getPropertyValue('line-height');
            const fontSize = parseFloat(fontSizeStyle);
            const lineHeight = parseFloat(lineHeightStyle);
            const lineHeightRatio = lineHeight / fontSize;
            const elementWidth = element.offsetWidth;
            const lines = element.innerText.replaceAll('\n', ' \n').split(' ');
            const lineSizes = getLineSizes(lines, elementWidth, fontSizeStyle, element);

            for (let i = 0; i < lineSizes.length; i++) {
                const lineElement = document.createElement('div');
                lineElement.classList.add('hoverLines__line');
                lineElement.style.top = `${(i + 1) * fontSize * lineHeightRatio}px`;
                lineElement.style.maxWidth = `${lineSizes[i]}px`;
                lineElement.style.transitionDelay = `${i * 50}ms`;
                element.appendChild(lineElement);
            }
        }

        function getLineSizes(words, width, fontSize, element) {
            let result = '';
            const tempDiv = document.createElement('div');
            tempDiv.classList.add('hoverLines__temp');
            tempDiv.style.fontSize = fontSize;
            element.appendChild(tempDiv);

            for (let word of words) {
                tempDiv.innerText += ' ' + word;

                if (tempDiv.offsetWidth >= width || word.includes('\n')) {
                    result += '|';
                    tempDiv.innerText = word.replace('\n', '');
                }

                result += ' ' + word;
            }

            const stringsArray = result.split('|').map(s => s.trim()).filter(Boolean);
            const resultSizes = stringsArray.map(string => {
                tempDiv.innerText = string;
                return tempDiv.offsetWidth;
            });
            tempDiv.remove();
            return resultSizes;
        }
        ;// CONCATENATED MODULE: ./src/index.js


        document.addEventListener('DOMContentLoaded', function () {
            initServicesSlider();
            initMediaSlider();
            initHistoryObserver();
            initFooter();
            initHeader();
            initMainMediaSlider();
            initMuseumGenerationsSlider();
            initCareerCormCultureSlider();
            initCareerCorpEventsSlider();
            initAboutCertificatesSection();
            initAboutShareholdersPanel();
            initMediaNewsPanel();
            initMainBannerSlider();
            // initForms();
            initDatepicker();
            initInputMask();
            initMediaLoadMore();
            initGallery();
            initMuseumHistorySlider();
            initPhotoContest();
            initModals();
            initPersonalCard();
            initFileUpload();
            initJury();
            initMainMuseumHistory();
            initHoverLines();
            setTimeout(initHoverLines, 1000);


            const cardPhotos = document.querySelectorAll('.photoContestVoting__card');

            document.addEventListener('click', function (e) {
                if (e.target.classList.contains('photoContestVoting__btnMore')) {
                    // setTimeout(initPhotoContest, 2000);
                }
            });
        });
    })();

    /******/
})()
;