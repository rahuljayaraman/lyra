/*
 * -----------------------------------------------------------------------------
 * GENERATED FILE - DO NOT EDIT!
 * This file has been compiled using the Snowball stemmer generator.
 * Don't edit this file directly.
 * -----------------------------------------------------------------------------
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "stemmer", {
    enumerable: true,
    get: function() {
        return stemmer;
    }
});
var g = !0, p = !1;
function C() {
    this.p = function(k) {
        this.j = k;
        this.cursor = 0;
        this.a = this.j.length;
        this.f = 0;
        this.c = this.cursor;
        this.d = this.a;
    };
    this.z = function() {
        return this.j;
    };
    this.w = function(k) {
        this.j = k.j;
        this.cursor = k.cursor;
        this.a = k.a;
        this.f = k.f;
        this.c = k.c;
        this.d = k.d;
    };
    this.i = function(k, l, h) {
        if (this.cursor >= this.a) return p;
        var c = this.j.charCodeAt(this.cursor);
        if (c > h || c < l) return p;
        c -= l;
        if (0 == (k[c >>> 3] & 1 << (c & 7))) return p;
        this.cursor++;
        return g;
    };
    this.n = function(k, l, h) {
        if (this.cursor <= this.f) return p;
        var c = this.j.charCodeAt(this.cursor - 1);
        if (c > h || c < l) return p;
        c -= l;
        if (0 == (k[c >>> 3] & 1 << (c & 7))) return p;
        this.cursor--;
        return g;
    };
    this.k = function(k, l, h) {
        if (this.cursor >= this.a) return p;
        var c = this.j.charCodeAt(this.cursor);
        if (c > h || c < l) return this.cursor++, g;
        c -= l;
        return 0 == (k[c >>> 3] & 1 << (c & 7)) ? (this.cursor++, g) : p;
    };
    this.q = function(k, l, h) {
        if (this.cursor <= this.f) return p;
        var c = this.j.charCodeAt(this.cursor - 1);
        if (c > h || c < l) return this.cursor--, g;
        c -= l;
        return 0 == (k[c >>> 3] & 1 << (c & 7)) ? (this.cursor--, g) : p;
    };
    this.m = function(k) {
        if (this.a - this.cursor < k.length || this.j.slice(this.cursor, this.cursor + k.length) != k) return p;
        this.cursor += k.length;
        return g;
    };
    this.g = function(k) {
        if (this.cursor - this.f < k.length || this.j.slice(this.cursor - k.length, this.cursor) != k) return p;
        this.cursor -= k.length;
        return g;
    };
    this.o = function(k) {
        for(var l = 0, h = k.length, c = this.cursor, a = this.a, d = 0, n = 0, v = p;;){
            var b = l + (h - l >>> 1), f = 0, q = d < n ? d : n, t = k[b], s;
            for(s = q; s < t[0].length; s++){
                if (c + q == a) {
                    f = -1;
                    break;
                }
                f = this.j.charCodeAt(c + q) - t[0].charCodeAt(s);
                if (0 != f) break;
                q++;
            }
            0 > f ? (h = b, n = q) : (l = b, d = q);
            if (1 >= h - l) {
                if (0 < l) break;
                if (h == l) break;
                if (v) break;
                v = g;
            }
        }
        for(;;){
            t = k[l];
            if (d >= t[0].length) {
                this.cursor = c + t[0].length;
                if (4 > t.length) return t[2];
                l = t[3](this);
                this.cursor = c + t[0].length;
                if (l) return t[2];
            }
            l = t[1];
            if (0 > l) return 0;
        }
    };
    this.h = function(k) {
        for(var l = 0, h = k.length, c = this.cursor, a = this.f, d = 0, n = 0, v = p;;){
            var b = l + (h - l >> 1), f = 0, q = d < n ? d : n, t = k[b], s;
            for(s = t[0].length - 1 - q; 0 <= s; s--){
                if (c - q == a) {
                    f = -1;
                    break;
                }
                f = this.j.charCodeAt(c - 1 - q) - t[0].charCodeAt(s);
                if (0 != f) break;
                q++;
            }
            0 > f ? (h = b, n = q) : (l = b, d = q);
            if (1 >= h - l) {
                if (0 < l) break;
                if (h == l) break;
                if (v) break;
                v = g;
            }
        }
        for(;;){
            t = k[l];
            if (d >= t[0].length) {
                this.cursor = c - t[0].length;
                if (4 > t.length) return t[2];
                l = t[3](this);
                this.cursor = c - t[0].length;
                if (l) return t[2];
            }
            l = t[1];
            if (0 > l) return 0;
        }
    };
    this.s = function(k, l, h) {
        var c = h.length - (l - k);
        this.j = this.j.slice(0, k) + h + this.j.slice(l);
        this.a += c;
        this.cursor >= l ? this.cursor += c : this.cursor > k && (this.cursor = k);
        return c;
    };
    this.t = function() {
        return 0 > this.c || this.c > this.d || this.d > this.a || this.a > this.j.length ? p : g;
    };
    this.b = function(k) {
        var l = p;
        this.t() && (this.s(this.c, this.d, k), l = g);
        return l;
    };
    this.e = function() {
        return this.b("");
    };
    this.r = function(k, l, h) {
        l = this.s(k, l, h);
        k <= this.c && (this.c += l);
        k <= this.d && (this.d += l);
    };
    this.u = function() {
        var k = "";
        this.t() && (k = this.j.slice(this.c, this.d));
        return k;
    };
    this.v = function() {
        return this.j.slice(0, this.a);
    };
}
function stem() {
    var k = function k() {
        for(var b;;){
            var c = a.a - a.cursor;
            a: if (a.d = a.cursor, b = a.h(d), 0 != b) {
                a.c = a.cursor;
                switch(b){
                    case 1:
                        if (!a.b("α")) return;
                        break;
                    case 2:
                        if (!a.b("β")) return;
                        break;
                    case 3:
                        if (!a.b("γ")) return;
                        break;
                    case 4:
                        if (!a.b("δ")) return;
                        break;
                    case 5:
                        if (!a.b("ε")) return;
                        break;
                    case 6:
                        if (!a.b("ζ")) return;
                        break;
                    case 7:
                        if (!a.b("η")) return;
                        break;
                    case 8:
                        if (!a.b("θ")) return;
                        break;
                    case 9:
                        if (!a.b("ι")) return;
                        break;
                    case 10:
                        if (!a.b("κ")) return;
                        break;
                    case 11:
                        if (!a.b("λ")) return;
                        break;
                    case 12:
                        if (!a.b("μ")) return;
                        break;
                    case 13:
                        if (!a.b("ν")) return;
                        break;
                    case 14:
                        if (!a.b("ξ")) return;
                        break;
                    case 15:
                        if (!a.b("ο")) return;
                        break;
                    case 16:
                        if (!a.b("π")) return;
                        break;
                    case 17:
                        if (!a.b("ρ")) return;
                        break;
                    case 18:
                        if (!a.b("σ")) return;
                        break;
                    case 19:
                        if (!a.b("τ")) return;
                        break;
                    case 20:
                        if (!a.b("υ")) return;
                        break;
                    case 21:
                        if (!a.b("φ")) return;
                        break;
                    case 22:
                        if (!a.b("χ")) return;
                        break;
                    case 23:
                        if (!a.b("ψ")) return;
                        break;
                    case 24:
                        if (!a.b("ω")) return;
                        break;
                    case 25:
                        if (a.cursor <= a.f) break a;
                        a.cursor--;
                }
                continue;
            }
            a.cursor = a.a - c;
            break;
        }
    };
    var l = function l() {
        var b;
        a.d = a.cursor;
        b = a.h(n);
        if (0 != b) {
            a.c = a.cursor;
            switch(b){
                case 1:
                    if (!a.b("φα")) return;
                    break;
                case 2:
                    if (!a.b("σκα")) return;
                    break;
                case 3:
                    if (!a.b("ολο")) return;
                    break;
                case 4:
                    if (!a.b("σο")) return;
                    break;
                case 5:
                    if (!a.b("τατο")) return;
                    break;
                case 6:
                    if (!a.b("κρε")) return;
                    break;
                case 7:
                    if (!a.b("περ")) return;
                    break;
                case 8:
                    if (!a.b("τερ")) return;
                    break;
                case 9:
                    if (!a.b("φω")) return;
                    break;
                case 10:
                    if (!a.b("καθεστ")) return;
                    break;
                case 11:
                    if (!a.b("γεγον")) return;
            }
            B = p;
        }
    };
    var h = function h() {
        var b = a.a - a.cursor;
        a.d = a.cursor;
        if (0 != a.h(ca)) {
            a.c = a.cursor;
            if (!a.e()) return;
            B = p;
            a.d = a.cursor;
            a.c = a.cursor;
            if (0 != a.h(ba) && !(a.cursor > a.f) && !a.b("αγαν")) return;
        }
        a.cursor = a.a - b;
        a.d = a.cursor;
        if (a.g("ανε") && (a.c = a.cursor, a.e())) {
            B = p;
            a: {
                b = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (a.n(ha, 945, 969)) {
                    if (!a.b("αν")) return;
                    break a;
                }
                a.cursor = a.a - b;
                a.d = a.cursor;
            }
            a.c = a.cursor;
            0 == a.h(F) || a.cursor > a.f || a.b("αν");
        }
    };
    var c = function c() {
        var b = a.a - a.cursor;
        a.d = a.cursor;
        if (0 != a.h(W)) {
            a.c = a.cursor;
            if (!a.e()) return;
            B = p;
        }
        a.cursor = a.a - b;
        a.d = a.cursor;
        if (a.g("ετε") && (a.c = a.cursor, a.e())) {
            B = p;
            a: {
                b = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (a.n(ha, 945, 969)) {
                    if (!a.b("ετ")) return;
                    break a;
                }
                a.cursor = a.a - b;
                a.d = a.cursor;
                a.c = a.cursor;
                if (0 != a.h(da)) {
                    if (!a.b("ετ")) return;
                    break a;
                }
                a.cursor = a.a - b;
                a.d = a.cursor;
            }
            a.c = a.cursor;
            0 == a.h(ea) || a.cursor > a.f || a.b("ετ");
        }
    };
    var a = new C(), d = [
        [
            "",
            -1,
            25
        ],
        [
            "Ά",
            0,
            1
        ],
        [
            "Έ",
            0,
            5
        ],
        [
            "Ή",
            0,
            7
        ],
        [
            "Ί",
            0,
            9
        ],
        [
            "Ό",
            0,
            15
        ],
        [
            "Ύ",
            0,
            20
        ],
        [
            "Ώ",
            0,
            24
        ],
        [
            "ΐ",
            0,
            7
        ],
        [
            "Α",
            0,
            1
        ],
        [
            "Β",
            0,
            2
        ],
        [
            "Γ",
            0,
            3
        ],
        [
            "Δ",
            0,
            4
        ],
        [
            "Ε",
            0,
            5
        ],
        [
            "Ζ",
            0,
            6
        ],
        [
            "Η",
            0,
            7
        ],
        [
            "Θ",
            0,
            8
        ],
        [
            "Ι",
            0,
            9
        ],
        [
            "Κ",
            0,
            10
        ],
        [
            "Λ",
            0,
            11
        ],
        [
            "Μ",
            0,
            12
        ],
        [
            "Ν",
            0,
            13
        ],
        [
            "Ξ",
            0,
            14
        ],
        [
            "Ο",
            0,
            15
        ],
        [
            "Π",
            0,
            16
        ],
        [
            "Ρ",
            0,
            17
        ],
        [
            "Σ",
            0,
            18
        ],
        [
            "Τ",
            0,
            19
        ],
        [
            "Υ",
            0,
            20
        ],
        [
            "Φ",
            0,
            21
        ],
        [
            "Χ",
            0,
            22
        ],
        [
            "Ψ",
            0,
            23
        ],
        [
            "Ω",
            0,
            24
        ],
        [
            "Ϊ",
            0,
            9
        ],
        [
            "Ϋ",
            0,
            20
        ],
        [
            "ά",
            0,
            1
        ],
        [
            "έ",
            0,
            5
        ],
        [
            "ή",
            0,
            7
        ],
        [
            "ί",
            0,
            9
        ],
        [
            "ΰ",
            0,
            20
        ],
        [
            "ς",
            0,
            18
        ],
        [
            "ϊ",
            0,
            7
        ],
        [
            "ϋ",
            0,
            20
        ],
        [
            "ό",
            0,
            15
        ],
        [
            "ύ",
            0,
            20
        ],
        [
            "ώ",
            0,
            24
        ]
    ], n = [
        [
            "σκαγια",
            -1,
            2
        ],
        [
            "φαγια",
            -1,
            1
        ],
        [
            "ολογια",
            -1,
            3
        ],
        [
            "σογια",
            -1,
            4
        ],
        [
            "τατογια",
            -1,
            5
        ],
        [
            "κρεατα",
            -1,
            6
        ],
        [
            "περατα",
            -1,
            7
        ],
        [
            "τερατα",
            -1,
            8
        ],
        [
            "γεγονοτα",
            -1,
            11
        ],
        [
            "καθεστωτα",
            -1,
            10
        ],
        [
            "φωτα",
            -1,
            9
        ],
        [
            "περατη",
            -1,
            7
        ],
        [
            "σκαγιων",
            -1,
            2
        ],
        [
            "φαγιων",
            -1,
            1
        ],
        [
            "ολογιων",
            -1,
            3
        ],
        [
            "σογιων",
            -1,
            4
        ],
        [
            "τατογιων",
            -1,
            5
        ],
        [
            "κρεατων",
            -1,
            6
        ],
        [
            "περατων",
            -1,
            7
        ],
        [
            "τερατων",
            -1,
            8
        ],
        [
            "γεγονοτων",
            -1,
            11
        ],
        [
            "καθεστωτων",
            -1,
            10
        ],
        [
            "φωτων",
            -1,
            9
        ],
        [
            "κρεασ",
            -1,
            6
        ],
        [
            "περασ",
            -1,
            7
        ],
        [
            "τερασ",
            -1,
            8
        ],
        [
            "γεγονοσ",
            -1,
            11
        ],
        [
            "κρεατοσ",
            -1,
            6
        ],
        [
            "περατοσ",
            -1,
            7
        ],
        [
            "τερατοσ",
            -1,
            8
        ],
        [
            "γεγονοτοσ",
            -1,
            11
        ],
        [
            "καθεστωτοσ",
            -1,
            10
        ],
        [
            "φωτοσ",
            -1,
            9
        ],
        [
            "καθεστωσ",
            -1,
            10
        ],
        [
            "φωσ",
            -1,
            9
        ],
        [
            "σκαγιου",
            -1,
            2
        ],
        [
            "φαγιου",
            -1,
            1
        ],
        [
            "ολογιου",
            -1,
            3
        ],
        [
            "σογιου",
            -1,
            4
        ],
        [
            "τατογιου",
            -1,
            5
        ]
    ], v = [
        [
            "πα",
            -1,
            1
        ],
        [
            "ξαναπα",
            0,
            1
        ],
        [
            "επα",
            0,
            1
        ],
        [
            "περιπα",
            0,
            1
        ],
        [
            "αναμπα",
            0,
            1
        ],
        [
            "εμπα",
            0,
            1
        ],
        [
            "β",
            -1,
            2
        ],
        [
            "δανε",
            -1,
            1
        ],
        [
            "βαθυρι",
            -1,
            2
        ],
        [
            "βαρκ",
            -1,
            2
        ],
        [
            "μαρκ",
            -1,
            2
        ],
        [
            "λ",
            -1,
            2
        ],
        [
            "μ",
            -1,
            2
        ],
        [
            "κορν",
            -1,
            2
        ],
        [
            "αθρο",
            -1,
            1
        ],
        [
            "συναθρο",
            14,
            1
        ],
        [
            "π",
            -1,
            2
        ],
        [
            "ιμπ",
            16,
            2
        ],
        [
            "ρ",
            -1,
            2
        ],
        [
            "μαρ",
            18,
            2
        ],
        [
            "αμπαρ",
            18,
            2
        ],
        [
            "γκρ",
            18,
            2
        ],
        [
            "βολβορ",
            18,
            2
        ],
        [
            "γλυκορ",
            18,
            2
        ],
        [
            "πιπερορ",
            18,
            2
        ],
        [
            "πρ",
            18,
            2
        ],
        [
            "μπρ",
            25,
            2
        ],
        [
            "αρρ",
            18,
            2
        ],
        [
            "γλυκυρ",
            18,
            2
        ],
        [
            "πολυρ",
            18,
            2
        ],
        [
            "λου",
            -1,
            2
        ]
    ], b = [
        [
            "ιζα",
            -1,
            1
        ],
        [
            "ιζε",
            -1,
            1
        ],
        [
            "ιζαμε",
            -1,
            1
        ],
        [
            "ιζουμε",
            -1,
            1
        ],
        [
            "ιζανε",
            -1,
            1
        ],
        [
            "ιζουνε",
            -1,
            1
        ],
        [
            "ιζατε",
            -1,
            1
        ],
        [
            "ιζετε",
            -1,
            1
        ],
        [
            "ιζει",
            -1,
            1
        ],
        [
            "ιζαν",
            -1,
            1
        ],
        [
            "ιζουν",
            -1,
            1
        ],
        [
            "ιζεσ",
            -1,
            1
        ],
        [
            "ιζεισ",
            -1,
            1
        ],
        [
            "ιζω",
            -1,
            1
        ]
    ], f = [
        [
            "βι",
            -1,
            1
        ],
        [
            "λι",
            -1,
            1
        ],
        [
            "αλ",
            -1,
            1
        ],
        [
            "εν",
            -1,
            1
        ],
        [
            "σ",
            -1,
            1
        ],
        [
            "χ",
            -1,
            1
        ],
        [
            "υψ",
            -1,
            1
        ],
        [
            "ζω",
            -1,
            1
        ]
    ], q = [
        [
            "ωθηκα",
            -1,
            1
        ],
        [
            "ωθηκε",
            -1,
            1
        ],
        [
            "ωθηκαμε",
            -1,
            1
        ],
        [
            "ωθηκανε",
            -1,
            1
        ],
        [
            "ωθηκατε",
            -1,
            1
        ],
        [
            "ωθηκαν",
            -1,
            1
        ],
        [
            "ωθηκεσ",
            -1,
            1
        ]
    ], t = [
        [
            "ξαναπα",
            -1,
            1
        ],
        [
            "επα",
            -1,
            1
        ],
        [
            "περιπα",
            -1,
            1
        ],
        [
            "αναμπα",
            -1,
            1
        ],
        [
            "εμπα",
            -1,
            1
        ],
        [
            "χαρτοπα",
            -1,
            1
        ],
        [
            "εξαρχα",
            -1,
            1
        ],
        [
            "γε",
            -1,
            2
        ],
        [
            "γκε",
            -1,
            2
        ],
        [
            "κλε",
            -1,
            1
        ],
        [
            "εκλε",
            9,
            1
        ],
        [
            "απεκλε",
            10,
            1
        ],
        [
            "αποκλε",
            9,
            1
        ],
        [
            "εσωκλε",
            9,
            1
        ],
        [
            "δανε",
            -1,
            1
        ],
        [
            "πε",
            -1,
            1
        ],
        [
            "επε",
            15,
            1
        ],
        [
            "μετεπε",
            16,
            1
        ],
        [
            "εσε",
            -1,
            1
        ],
        [
            "γκ",
            -1,
            2
        ],
        [
            "μ",
            -1,
            2
        ],
        [
            "πουκαμ",
            20,
            2
        ],
        [
            "κομ",
            20,
            2
        ],
        [
            "αν",
            -1,
            2
        ],
        [
            "ολο",
            -1,
            2
        ],
        [
            "αθρο",
            -1,
            1
        ],
        [
            "συναθρο",
            25,
            1
        ],
        [
            "π",
            -1,
            2
        ],
        [
            "λαρ",
            -1,
            2
        ],
        [
            "δημοκρατ",
            -1,
            2
        ],
        [
            "αφ",
            -1,
            2
        ],
        [
            "γιγαντοαφ",
            30,
            2
        ]
    ], s = [
        [
            "ισα",
            -1,
            1
        ],
        [
            "ισαμε",
            -1,
            1
        ],
        [
            "ισανε",
            -1,
            1
        ],
        [
            "ισε",
            -1,
            1
        ],
        [
            "ισατε",
            -1,
            1
        ],
        [
            "ισαν",
            -1,
            1
        ],
        [
            "ισεσ",
            -1,
            1
        ]
    ], r = [
        [
            "ξαναπα",
            -1,
            1
        ],
        [
            "επα",
            -1,
            1
        ],
        [
            "περιπα",
            -1,
            1
        ],
        [
            "αναμπα",
            -1,
            1
        ],
        [
            "εμπα",
            -1,
            1
        ],
        [
            "χαρτοπα",
            -1,
            1
        ],
        [
            "εξαρχα",
            -1,
            1
        ],
        [
            "κλε",
            -1,
            1
        ],
        [
            "εκλε",
            7,
            1
        ],
        [
            "απεκλε",
            8,
            1
        ],
        [
            "αποκλε",
            7,
            1
        ],
        [
            "εσωκλε",
            7,
            1
        ],
        [
            "δανε",
            -1,
            1
        ],
        [
            "πε",
            -1,
            1
        ],
        [
            "επε",
            13,
            1
        ],
        [
            "μετεπε",
            14,
            1
        ],
        [
            "εσε",
            -1,
            1
        ],
        [
            "αθρο",
            -1,
            1
        ],
        [
            "συναθρο",
            17,
            1
        ]
    ], m = [
        [
            "ισουμε",
            -1,
            1
        ],
        [
            "ισουνε",
            -1,
            1
        ],
        [
            "ισετε",
            -1,
            1
        ],
        [
            "ισει",
            -1,
            1
        ],
        [
            "ισουν",
            -1,
            1
        ],
        [
            "ισεισ",
            -1,
            1
        ],
        [
            "ισω",
            -1,
            1
        ]
    ], w = [
        [
            "ατα",
            -1,
            2
        ],
        [
            "φα",
            -1,
            2
        ],
        [
            "ηφα",
            1,
            2
        ],
        [
            "μεγ",
            -1,
            2
        ],
        [
            "λυγ",
            -1,
            2
        ],
        [
            "ηδ",
            -1,
            2
        ],
        [
            "κλε",
            -1,
            1
        ],
        [
            "εσωκλε",
            6,
            1
        ],
        [
            "πλε",
            -1,
            1
        ],
        [
            "δανε",
            -1,
            1
        ],
        [
            "σε",
            -1,
            1
        ],
        [
            "ασε",
            10,
            1
        ],
        [
            "καθ",
            -1,
            2
        ],
        [
            "εχθ",
            -1,
            2
        ],
        [
            "κακ",
            -1,
            2
        ],
        [
            "μακ",
            -1,
            2
        ],
        [
            "σκ",
            -1,
            2
        ],
        [
            "φιλ",
            -1,
            2
        ],
        [
            "κυλ",
            -1,
            2
        ],
        [
            "μ",
            -1,
            2
        ],
        [
            "γεμ",
            19,
            2
        ],
        [
            "αχν",
            -1,
            2
        ],
        [
            "συναθρο",
            -1,
            1
        ],
        [
            "π",
            -1,
            2
        ],
        [
            "απ",
            23,
            2
        ],
        [
            "εμπ",
            23,
            2
        ],
        [
            "ευπ",
            23,
            2
        ],
        [
            "αρ",
            -1,
            2
        ],
        [
            "αορ",
            -1,
            2
        ],
        [
            "γυρ",
            -1,
            2
        ],
        [
            "χρ",
            -1,
            2
        ],
        [
            "χωρ",
            -1,
            2
        ],
        [
            "κτ",
            -1,
            2
        ],
        [
            "ακτ",
            32,
            2
        ],
        [
            "χτ",
            -1,
            2
        ],
        [
            "αχτ",
            34,
            2
        ],
        [
            "ταχ",
            -1,
            2
        ],
        [
            "σχ",
            -1,
            2
        ],
        [
            "ασχ",
            37,
            2
        ],
        [
            "υψ",
            -1,
            2
        ]
    ], u = [
        [
            "ιστα",
            -1,
            1
        ],
        [
            "ιστε",
            -1,
            1
        ],
        [
            "ιστη",
            -1,
            1
        ],
        [
            "ιστοι",
            -1,
            1
        ],
        [
            "ιστων",
            -1,
            1
        ],
        [
            "ιστο",
            -1,
            1
        ],
        [
            "ιστεσ",
            -1,
            1
        ],
        [
            "ιστησ",
            -1,
            1
        ],
        [
            "ιστοσ",
            -1,
            1
        ],
        [
            "ιστουσ",
            -1,
            1
        ],
        [
            "ιστου",
            -1,
            1
        ]
    ], y = [
        [
            "εγκλε",
            -1,
            1
        ],
        [
            "αποκλε",
            -1,
            1
        ],
        [
            "δανε",
            -1,
            2
        ],
        [
            "αντιδανε",
            2,
            2
        ],
        [
            "σε",
            -1,
            1
        ],
        [
            "μετασε",
            4,
            1
        ],
        [
            "μικροσε",
            4,
            1
        ]
    ], z = [
        [
            "ατομικ",
            -1,
            2
        ],
        [
            "εθνικ",
            -1,
            4
        ],
        [
            "τοπικ",
            -1,
            7
        ],
        [
            "εκλεκτικ",
            -1,
            5
        ],
        [
            "σκεπτικ",
            -1,
            6
        ],
        [
            "γνωστικ",
            -1,
            3
        ],
        [
            "αγνωστικ",
            5,
            1
        ],
        [
            "αλεξανδριν",
            -1,
            8
        ],
        [
            "θεατριν",
            -1,
            10
        ],
        [
            "βυζαντιν",
            -1,
            9
        ]
    ], e = [
        [
            "ισμοι",
            -1,
            1
        ],
        [
            "ισμων",
            -1,
            1
        ],
        [
            "ισμο",
            -1,
            1
        ],
        [
            "ισμοσ",
            -1,
            1
        ],
        [
            "ισμουσ",
            -1,
            1
        ],
        [
            "ισμου",
            -1,
            1
        ]
    ], A = [
        [
            "σ",
            -1,
            1
        ],
        [
            "χ",
            -1,
            1
        ]
    ], H = [
        [
            "ουδακια",
            -1,
            1
        ],
        [
            "αρακια",
            -1,
            1
        ],
        [
            "ουδακι",
            -1,
            1
        ],
        [
            "αρακι",
            -1,
            1
        ]
    ], G = [
        [
            "β",
            -1,
            2
        ],
        [
            "βαμβ",
            0,
            1
        ],
        [
            "σλοβ",
            0,
            1
        ],
        [
            "τσεχοσλοβ",
            2,
            1
        ],
        [
            "καρδ",
            -1,
            2
        ],
        [
            "ζ",
            -1,
            2
        ],
        [
            "τζ",
            5,
            1
        ],
        [
            "κ",
            -1,
            1
        ],
        [
            "καπακ",
            7,
            1
        ],
        [
            "σοκ",
            7,
            1
        ],
        [
            "σκ",
            7,
            1
        ],
        [
            "βαλ",
            -1,
            2
        ],
        [
            "μαλ",
            -1,
            1
        ],
        [
            "γλ",
            -1,
            2
        ],
        [
            "τριπολ",
            -1,
            2
        ],
        [
            "πλ",
            -1,
            1
        ],
        [
            "λουλ",
            -1,
            1
        ],
        [
            "φυλ",
            -1,
            1
        ],
        [
            "καιμ",
            -1,
            1
        ],
        [
            "κλιμ",
            -1,
            1
        ],
        [
            "φαρμ",
            -1,
            1
        ],
        [
            "γιαν",
            -1,
            2
        ],
        [
            "σπαν",
            -1,
            1
        ],
        [
            "ηγουμεν",
            -1,
            2
        ],
        [
            "κον",
            -1,
            1
        ],
        [
            "μακρυν",
            -1,
            2
        ],
        [
            "π",
            -1,
            2
        ],
        [
            "κατραπ",
            26,
            1
        ],
        [
            "ρ",
            -1,
            1
        ],
        [
            "βρ",
            28,
            1
        ],
        [
            "λαβρ",
            29,
            1
        ],
        [
            "αμβρ",
            29,
            1
        ],
        [
            "μερ",
            28,
            1
        ],
        [
            "πατερ",
            28,
            2
        ],
        [
            "ανθρ",
            28,
            1
        ],
        [
            "κορ",
            28,
            1
        ],
        [
            "σ",
            -1,
            1
        ],
        [
            "ναγκασ",
            36,
            1
        ],
        [
            "τοσ",
            36,
            2
        ],
        [
            "μουστ",
            -1,
            1
        ],
        [
            "ρυ",
            -1,
            1
        ],
        [
            "φ",
            -1,
            1
        ],
        [
            "σφ",
            41,
            1
        ],
        [
            "αλισφ",
            42,
            1
        ],
        [
            "νυφ",
            41,
            2
        ],
        [
            "χ",
            -1,
            1
        ]
    ], E = [
        [
            "ακια",
            -1,
            1
        ],
        [
            "αρακια",
            0,
            1
        ],
        [
            "ιτσα",
            -1,
            1
        ],
        [
            "ακι",
            -1,
            1
        ],
        [
            "αρακι",
            3,
            1
        ],
        [
            "ιτσων",
            -1,
            1
        ],
        [
            "ιτσασ",
            -1,
            1
        ],
        [
            "ιτσεσ",
            -1,
            1
        ]
    ], x = [
        [
            "ψαλ",
            -1,
            1
        ],
        [
            "αιφν",
            -1,
            1
        ],
        [
            "ολο",
            -1,
            1
        ],
        [
            "ιρ",
            -1,
            1
        ]
    ], O = [
        [
            "ε",
            -1,
            1
        ],
        [
            "παιχν",
            -1,
            1
        ]
    ], N = [
        [
            "ιδια",
            -1,
            1
        ],
        [
            "ιδιων",
            -1,
            1
        ],
        [
            "ιδιο",
            -1,
            1
        ]
    ], M = [
        [
            "ιβ",
            -1,
            1
        ],
        [
            "δ",
            -1,
            1
        ],
        [
            "φραγκ",
            -1,
            1
        ],
        [
            "λυκ",
            -1,
            1
        ],
        [
            "οβελ",
            -1,
            1
        ],
        [
            "μην",
            -1,
            1
        ],
        [
            "ρ",
            -1,
            1
        ]
    ], P = [
        [
            "ισκε",
            -1,
            1
        ],
        [
            "ισκο",
            -1,
            1
        ],
        [
            "ισκοσ",
            -1,
            1
        ],
        [
            "ισκου",
            -1,
            1
        ]
    ], Q = [
        [
            "αδων",
            -1,
            1
        ],
        [
            "αδεσ",
            -1,
            1
        ]
    ], T = [
        [
            "γιαγι",
            -1,
            -1
        ],
        [
            "θει",
            -1,
            -1
        ],
        [
            "οκ",
            -1,
            -1
        ],
        [
            "μαμ",
            -1,
            -1
        ],
        [
            "μαν",
            -1,
            -1
        ],
        [
            "μπαμπ",
            -1,
            -1
        ],
        [
            "πεθερ",
            -1,
            -1
        ],
        [
            "πατερ",
            -1,
            -1
        ],
        [
            "κυρ",
            -1,
            -1
        ],
        [
            "νταντ",
            -1,
            -1
        ]
    ], U = [
        [
            "εδων",
            -1,
            1
        ],
        [
            "εδεσ",
            -1,
            1
        ]
    ], R = [
        [
            "μιλ",
            -1,
            1
        ],
        [
            "δαπ",
            -1,
            1
        ],
        [
            "γηπ",
            -1,
            1
        ],
        [
            "ιπ",
            -1,
            1
        ],
        [
            "εμπ",
            -1,
            1
        ],
        [
            "οπ",
            -1,
            1
        ],
        [
            "κρασπ",
            -1,
            1
        ],
        [
            "υπ",
            -1,
            1
        ]
    ], S = [
        [
            "ουδων",
            -1,
            1
        ],
        [
            "ουδεσ",
            -1,
            1
        ]
    ], V = [
        [
            "τραγ",
            -1,
            1
        ],
        [
            "φε",
            -1,
            1
        ],
        [
            "καλιακ",
            -1,
            1
        ],
        [
            "αρκ",
            -1,
            1
        ],
        [
            "σκ",
            -1,
            1
        ],
        [
            "πεταλ",
            -1,
            1
        ],
        [
            "βελ",
            -1,
            1
        ],
        [
            "λουλ",
            -1,
            1
        ],
        [
            "φλ",
            -1,
            1
        ],
        [
            "χν",
            -1,
            1
        ],
        [
            "πλεξ",
            -1,
            1
        ],
        [
            "σπ",
            -1,
            1
        ],
        [
            "φρ",
            -1,
            1
        ],
        [
            "σ",
            -1,
            1
        ],
        [
            "λιχ",
            -1,
            1
        ]
    ], I = [
        [
            "εων",
            -1,
            1
        ],
        [
            "εωσ",
            -1,
            1
        ]
    ], D = [
        [
            "δ",
            -1,
            1
        ],
        [
            "ιδ",
            0,
            1
        ],
        [
            "θ",
            -1,
            1
        ],
        [
            "γαλ",
            -1,
            1
        ],
        [
            "ελ",
            -1,
            1
        ],
        [
            "ν",
            -1,
            1
        ],
        [
            "π",
            -1,
            1
        ],
        [
            "παρ",
            -1,
            1
        ]
    ], L = [
        [
            "ια",
            -1,
            1
        ],
        [
            "ιων",
            -1,
            1
        ],
        [
            "ιου",
            -1,
            1
        ]
    ], J = [
        [
            "ικα",
            -1,
            1
        ],
        [
            "ικων",
            -1,
            1
        ],
        [
            "ικο",
            -1,
            1
        ],
        [
            "ικου",
            -1,
            1
        ]
    ], K = [
        [
            "αδ",
            -1,
            1
        ],
        [
            "συναδ",
            0,
            1
        ],
        [
            "καταδ",
            0,
            1
        ],
        [
            "αντιδ",
            -1,
            1
        ],
        [
            "ενδ",
            -1,
            1
        ],
        [
            "φυλοδ",
            -1,
            1
        ],
        [
            "υποδ",
            -1,
            1
        ],
        [
            "πρωτοδ",
            -1,
            1
        ],
        [
            "εξωδ",
            -1,
            1
        ],
        [
            "ηθ",
            -1,
            1
        ],
        [
            "ανηθ",
            9,
            1
        ],
        [
            "ξικ",
            -1,
            1
        ],
        [
            "αλ",
            -1,
            1
        ],
        [
            "αμμοχαλ",
            12,
            1
        ],
        [
            "συνομηλ",
            -1,
            1
        ],
        [
            "μπολ",
            -1,
            1
        ],
        [
            "μουλ",
            -1,
            1
        ],
        [
            "τσαμ",
            -1,
            1
        ],
        [
            "βρωμ",
            -1,
            1
        ],
        [
            "αμαν",
            -1,
            1
        ],
        [
            "μπαν",
            -1,
            1
        ],
        [
            "καλλιν",
            -1,
            1
        ],
        [
            "ποστελν",
            -1,
            1
        ],
        [
            "φιλον",
            -1,
            1
        ],
        [
            "καλπ",
            -1,
            1
        ],
        [
            "γερ",
            -1,
            1
        ],
        [
            "χασ",
            -1,
            1
        ],
        [
            "μποσ",
            -1,
            1
        ],
        [
            "πλιατσ",
            -1,
            1
        ],
        [
            "πετσ",
            -1,
            1
        ],
        [
            "πιτσ",
            -1,
            1
        ],
        [
            "φυσ",
            -1,
            1
        ],
        [
            "μπαγιατ",
            -1,
            1
        ],
        [
            "νιτ",
            -1,
            1
        ],
        [
            "πικαντ",
            -1,
            1
        ],
        [
            "σερτ",
            -1,
            1
        ]
    ], $ = [
        [
            "αγαμε",
            -1,
            1
        ],
        [
            "ηκαμε",
            -1,
            1
        ],
        [
            "ηθηκαμε",
            1,
            1
        ],
        [
            "ησαμε",
            -1,
            1
        ],
        [
            "ουσαμε",
            -1,
            1
        ]
    ], aa = [
        [
            "βουβ",
            -1,
            1
        ],
        [
            "ξεθ",
            -1,
            1
        ],
        [
            "πεθ",
            -1,
            1
        ],
        [
            "αποθ",
            -1,
            1
        ],
        [
            "αποκ",
            -1,
            1
        ],
        [
            "ουλ",
            -1,
            1
        ],
        [
            "αναπ",
            -1,
            1
        ],
        [
            "πικρ",
            -1,
            1
        ],
        [
            "ποτ",
            -1,
            1
        ],
        [
            "αποστ",
            -1,
            1
        ],
        [
            "χ",
            -1,
            1
        ],
        [
            "σιχ",
            10,
            1
        ]
    ], ba = [
        [
            "τρ",
            -1,
            1
        ],
        [
            "τσ",
            -1,
            1
        ]
    ], ca = [
        [
            "αγανε",
            -1,
            1
        ],
        [
            "ηκανε",
            -1,
            1
        ],
        [
            "ηθηκανε",
            1,
            1
        ],
        [
            "ησανε",
            -1,
            1
        ],
        [
            "ουσανε",
            -1,
            1
        ],
        [
            "οντανε",
            -1,
            1
        ],
        [
            "ιοντανε",
            5,
            1
        ],
        [
            "ουντανε",
            -1,
            1
        ],
        [
            "ιουντανε",
            7,
            1
        ],
        [
            "οτανε",
            -1,
            1
        ],
        [
            "ιοτανε",
            9,
            1
        ]
    ], F = [
        [
            "ταβ",
            -1,
            1
        ],
        [
            "νταβ",
            0,
            1
        ],
        [
            "ψηλοταβ",
            0,
            1
        ],
        [
            "λιβ",
            -1,
            1
        ],
        [
            "κλιβ",
            3,
            1
        ],
        [
            "ξηροκλιβ",
            4,
            1
        ],
        [
            "γ",
            -1,
            1
        ],
        [
            "αγ",
            6,
            1
        ],
        [
            "τραγ",
            7,
            1
        ],
        [
            "τσαγ",
            7,
            1
        ],
        [
            "αθιγγ",
            6,
            1
        ],
        [
            "τσιγγ",
            6,
            1
        ],
        [
            "ατσιγγ",
            11,
            1
        ],
        [
            "στεγ",
            6,
            1
        ],
        [
            "απηγ",
            6,
            1
        ],
        [
            "σιγ",
            6,
            1
        ],
        [
            "ανοργ",
            6,
            1
        ],
        [
            "ενοργ",
            6,
            1
        ],
        [
            "καλπουζ",
            -1,
            1
        ],
        [
            "θ",
            -1,
            1
        ],
        [
            "μωαμεθ",
            19,
            1
        ],
        [
            "πιθ",
            19,
            1
        ],
        [
            "απιθ",
            21,
            1
        ],
        [
            "δεκ",
            -1,
            1
        ],
        [
            "πελεκ",
            -1,
            1
        ],
        [
            "ικ",
            -1,
            1
        ],
        [
            "ανικ",
            25,
            1
        ],
        [
            "βουλκ",
            -1,
            1
        ],
        [
            "βασκ",
            -1,
            1
        ],
        [
            "βραχυκ",
            -1,
            1
        ],
        [
            "γαλ",
            -1,
            1
        ],
        [
            "καταγαλ",
            30,
            1
        ],
        [
            "ολογαλ",
            30,
            1
        ],
        [
            "βαθυγαλ",
            30,
            1
        ],
        [
            "μελ",
            -1,
            1
        ],
        [
            "καστελ",
            -1,
            1
        ],
        [
            "πορτολ",
            -1,
            1
        ],
        [
            "πλ",
            -1,
            1
        ],
        [
            "διπλ",
            37,
            1
        ],
        [
            "λαοπλ",
            37,
            1
        ],
        [
            "ψυχοπλ",
            37,
            1
        ],
        [
            "ουλ",
            -1,
            1
        ],
        [
            "μ",
            -1,
            1
        ],
        [
            "ολιγοδαμ",
            42,
            1
        ],
        [
            "μουσουλμ",
            42,
            1
        ],
        [
            "δραδουμ",
            42,
            1
        ],
        [
            "βραχμ",
            42,
            1
        ],
        [
            "ν",
            -1,
            1
        ],
        [
            "αμερικαν",
            47,
            1
        ],
        [
            "π",
            -1,
            1
        ],
        [
            "αδαπ",
            49,
            1
        ],
        [
            "χαμηλοδαπ",
            49,
            1
        ],
        [
            "πολυδαπ",
            49,
            1
        ],
        [
            "κοπ",
            49,
            1
        ],
        [
            "υποκοπ",
            53,
            1
        ],
        [
            "τσοπ",
            49,
            1
        ],
        [
            "σπ",
            49,
            1
        ],
        [
            "ερ",
            -1,
            1
        ],
        [
            "γερ",
            57,
            1
        ],
        [
            "βετερ",
            57,
            1
        ],
        [
            "λουθηρ",
            -1,
            1
        ],
        [
            "κορμορ",
            -1,
            1
        ],
        [
            "περιτρ",
            -1,
            1
        ],
        [
            "ουρ",
            -1,
            1
        ],
        [
            "σ",
            -1,
            1
        ],
        [
            "βασ",
            64,
            1
        ],
        [
            "πολισ",
            64,
            1
        ],
        [
            "σαρακατσ",
            64,
            1
        ],
        [
            "θυσ",
            64,
            1
        ],
        [
            "διατ",
            -1,
            1
        ],
        [
            "πλατ",
            -1,
            1
        ],
        [
            "τσαρλατ",
            -1,
            1
        ],
        [
            "τετ",
            -1,
            1
        ],
        [
            "πουριτ",
            -1,
            1
        ],
        [
            "σουλτ",
            -1,
            1
        ],
        [
            "μαιντ",
            -1,
            1
        ],
        [
            "ζωντ",
            -1,
            1
        ],
        [
            "καστ",
            -1,
            1
        ],
        [
            "φ",
            -1,
            1
        ],
        [
            "διαφ",
            78,
            1
        ],
        [
            "στεφ",
            78,
            1
        ],
        [
            "φωτοστεφ",
            80,
            1
        ],
        [
            "περηφ",
            78,
            1
        ],
        [
            "υπερηφ",
            82,
            1
        ],
        [
            "κοιλαρφ",
            78,
            1
        ],
        [
            "πενταρφ",
            78,
            1
        ],
        [
            "ορφ",
            78,
            1
        ],
        [
            "χ",
            -1,
            1
        ],
        [
            "αμηχ",
            87,
            1
        ],
        [
            "βιομηχ",
            87,
            1
        ],
        [
            "μεγλοβιομηχ",
            89,
            1
        ],
        [
            "καπνοβιομηχ",
            89,
            1
        ],
        [
            "μικροβιομηχ",
            89,
            1
        ],
        [
            "πολυμηχ",
            87,
            1
        ],
        [
            "λιχ",
            87,
            1
        ]
    ], W = [
        [
            "ησετε",
            -1,
            1
        ]
    ], da = [
        [
            "ενδ",
            -1,
            1
        ],
        [
            "συνδ",
            -1,
            1
        ],
        [
            "οδ",
            -1,
            1
        ],
        [
            "διαθ",
            -1,
            1
        ],
        [
            "καθ",
            -1,
            1
        ],
        [
            "ραθ",
            -1,
            1
        ],
        [
            "ταθ",
            -1,
            1
        ],
        [
            "τιθ",
            -1,
            1
        ],
        [
            "εκθ",
            -1,
            1
        ],
        [
            "ενθ",
            -1,
            1
        ],
        [
            "συνθ",
            -1,
            1
        ],
        [
            "ροθ",
            -1,
            1
        ],
        [
            "υπερθ",
            -1,
            1
        ],
        [
            "σθ",
            -1,
            1
        ],
        [
            "ευθ",
            -1,
            1
        ],
        [
            "αρκ",
            -1,
            1
        ],
        [
            "ωφελ",
            -1,
            1
        ],
        [
            "βολ",
            -1,
            1
        ],
        [
            "αιν",
            -1,
            1
        ],
        [
            "πον",
            -1,
            1
        ],
        [
            "ρον",
            -1,
            1
        ],
        [
            "συν",
            -1,
            1
        ],
        [
            "βαρ",
            -1,
            1
        ],
        [
            "βρ",
            -1,
            1
        ],
        [
            "αιρ",
            -1,
            1
        ],
        [
            "φορ",
            -1,
            1
        ],
        [
            "ευρ",
            -1,
            1
        ],
        [
            "πυρ",
            -1,
            1
        ],
        [
            "χωρ",
            -1,
            1
        ],
        [
            "νετ",
            -1,
            1
        ],
        [
            "σχ",
            -1,
            1
        ]
    ], ea = [
        [
            "παγ",
            -1,
            1
        ],
        [
            "δ",
            -1,
            1
        ],
        [
            "αδ",
            1,
            1
        ],
        [
            "θ",
            -1,
            1
        ],
        [
            "αθ",
            3,
            1
        ],
        [
            "τοκ",
            -1,
            1
        ],
        [
            "σκ",
            -1,
            1
        ],
        [
            "παρακαλ",
            -1,
            1
        ],
        [
            "σκελ",
            -1,
            1
        ],
        [
            "απλ",
            -1,
            1
        ],
        [
            "εμ",
            -1,
            1
        ],
        [
            "αν",
            -1,
            1
        ],
        [
            "βεν",
            -1,
            1
        ],
        [
            "βαρον",
            -1,
            1
        ],
        [
            "κοπ",
            -1,
            1
        ],
        [
            "σερπ",
            -1,
            1
        ],
        [
            "αβαρ",
            -1,
            1
        ],
        [
            "εναρ",
            -1,
            1
        ],
        [
            "αβρ",
            -1,
            1
        ],
        [
            "μπορ",
            -1,
            1
        ],
        [
            "θαρρ",
            -1,
            1
        ],
        [
            "ντρ",
            -1,
            1
        ],
        [
            "υ",
            -1,
            1
        ],
        [
            "νιφ",
            -1,
            1
        ],
        [
            "συρφ",
            -1,
            1
        ]
    ], fa = [
        [
            "οντασ",
            -1,
            1
        ],
        [
            "ωντασ",
            -1,
            1
        ]
    ], ga = [
        [
            "ομαστε",
            -1,
            1
        ],
        [
            "ιομαστε",
            0,
            1
        ]
    ], Y = [
        [
            "π",
            -1,
            1
        ],
        [
            "απ",
            0,
            1
        ],
        [
            "ακαταπ",
            1,
            1
        ],
        [
            "συμπ",
            0,
            1
        ],
        [
            "ασυμπ",
            3,
            1
        ],
        [
            "αμεταμφ",
            -1,
            1
        ]
    ], Z = [
        [
            "ζ",
            -1,
            1
        ],
        [
            "αλ",
            -1,
            1
        ],
        [
            "παρακαλ",
            1,
            1
        ],
        [
            "εκτελ",
            -1,
            1
        ],
        [
            "μ",
            -1,
            1
        ],
        [
            "ξ",
            -1,
            1
        ],
        [
            "προ",
            -1,
            1
        ],
        [
            "αρ",
            -1,
            1
        ],
        [
            "νισ",
            -1,
            1
        ]
    ], X = [
        [
            "ηθηκα",
            -1,
            1
        ],
        [
            "ηθηκε",
            -1,
            1
        ],
        [
            "ηθηκεσ",
            -1,
            1
        ]
    ], ja = [
        [
            "πιθ",
            -1,
            1
        ],
        [
            "οθ",
            -1,
            1
        ],
        [
            "ναρθ",
            -1,
            1
        ],
        [
            "σκουλ",
            -1,
            1
        ],
        [
            "σκωλ",
            -1,
            1
        ],
        [
            "σφ",
            -1,
            1
        ]
    ], ka = [
        [
            "θ",
            -1,
            1
        ],
        [
            "διαθ",
            0,
            1
        ],
        [
            "παρακαταθ",
            0,
            1
        ],
        [
            "συνθ",
            0,
            1
        ],
        [
            "προσθ",
            0,
            1
        ]
    ], la = [
        [
            "ηκα",
            -1,
            1
        ],
        [
            "ηκε",
            -1,
            1
        ],
        [
            "ηκεσ",
            -1,
            1
        ]
    ], ma = [
        [
            "φαγ",
            -1,
            1
        ],
        [
            "ληγ",
            -1,
            1
        ],
        [
            "φρυδ",
            -1,
            1
        ],
        [
            "μαντιλ",
            -1,
            1
        ],
        [
            "μαλλ",
            -1,
            1
        ],
        [
            "ομ",
            -1,
            1
        ],
        [
            "βλεπ",
            -1,
            1
        ],
        [
            "ποδαρ",
            -1,
            1
        ],
        [
            "κυματ",
            -1,
            1
        ],
        [
            "πρωτ",
            -1,
            1
        ],
        [
            "λαχ",
            -1,
            1
        ],
        [
            "πανταχ",
            -1,
            1
        ]
    ], na = [
        [
            "τσα",
            -1,
            1
        ],
        [
            "χαδ",
            -1,
            1
        ],
        [
            "μεδ",
            -1,
            1
        ],
        [
            "λαμπιδ",
            -1,
            1
        ],
        [
            "δε",
            -1,
            1
        ],
        [
            "πλε",
            -1,
            1
        ],
        [
            "μεσαζ",
            -1,
            1
        ],
        [
            "δεσποζ",
            -1,
            1
        ],
        [
            "αιθ",
            -1,
            1
        ],
        [
            "φαρμακ",
            -1,
            1
        ],
        [
            "αγκ",
            -1,
            1
        ],
        [
            "ανηκ",
            -1,
            1
        ],
        [
            "λ",
            -1,
            1
        ],
        [
            "μ",
            -1,
            1
        ],
        [
            "αμ",
            13,
            1
        ],
        [
            "βρομ",
            13,
            1
        ],
        [
            "υποτειν",
            -1,
            1
        ],
        [
            "εκλιπ",
            -1,
            1
        ],
        [
            "ρ",
            -1,
            1
        ],
        [
            "ενδιαφερ",
            18,
            1
        ],
        [
            "αναρρ",
            18,
            1
        ],
        [
            "πατ",
            -1,
            1
        ],
        [
            "καθαρευ",
            -1,
            1
        ],
        [
            "δευτερευ",
            -1,
            1
        ],
        [
            "λεχ",
            -1,
            1
        ]
    ], oa = [
        [
            "ουσα",
            -1,
            1
        ],
        [
            "ουσε",
            -1,
            1
        ],
        [
            "ουσεσ",
            -1,
            1
        ]
    ], pa = [
        [
            "πελ",
            -1,
            1
        ],
        [
            "λλ",
            -1,
            1
        ],
        [
            "σμην",
            -1,
            1
        ],
        [
            "ρπ",
            -1,
            1
        ],
        [
            "πρ",
            -1,
            1
        ],
        [
            "φρ",
            -1,
            1
        ],
        [
            "χορτ",
            -1,
            1
        ],
        [
            "οφ",
            -1,
            1
        ],
        [
            "ψοφ",
            7,
            -1
        ],
        [
            "σφ",
            -1,
            1
        ],
        [
            "λοχ",
            -1,
            1
        ],
        [
            "ναυλοχ",
            10,
            -1
        ]
    ], qa = [
        [
            "αμαλλι",
            -1,
            1
        ],
        [
            "λ",
            -1,
            1
        ],
        [
            "αμαλ",
            1,
            1
        ],
        [
            "μ",
            -1,
            1
        ],
        [
            "ουλαμ",
            3,
            1
        ],
        [
            "εν",
            -1,
            1
        ],
        [
            "δερβεν",
            5,
            1
        ],
        [
            "π",
            -1,
            1
        ],
        [
            "αειπ",
            7,
            1
        ],
        [
            "αρτιπ",
            7,
            1
        ],
        [
            "συμπ",
            7,
            1
        ],
        [
            "νεοπ",
            7,
            1
        ],
        [
            "κροκαλοπ",
            7,
            1
        ],
        [
            "ολοπ",
            7,
            1
        ],
        [
            "προσωποπ",
            7,
            1
        ],
        [
            "σιδηροπ",
            7,
            1
        ],
        [
            "δροσοπ",
            7,
            1
        ],
        [
            "ασπ",
            7,
            1
        ],
        [
            "ανυπ",
            7,
            1
        ],
        [
            "ρ",
            -1,
            1
        ],
        [
            "ασπαρ",
            19,
            1
        ],
        [
            "χαρ",
            19,
            1
        ],
        [
            "αχαρ",
            21,
            1
        ],
        [
            "απερ",
            19,
            1
        ],
        [
            "τρ",
            19,
            1
        ],
        [
            "ουρ",
            19,
            1
        ],
        [
            "τ",
            -1,
            1
        ],
        [
            "διατ",
            26,
            1
        ],
        [
            "επιτ",
            26,
            1
        ],
        [
            "συντ",
            26,
            1
        ],
        [
            "ομοτ",
            26,
            1
        ],
        [
            "νομοτ",
            30,
            1
        ],
        [
            "αποτ",
            26,
            1
        ],
        [
            "υποτ",
            26,
            1
        ],
        [
            "αβαστ",
            26,
            1
        ],
        [
            "αιμοστ",
            26,
            1
        ],
        [
            "προστ",
            26,
            1
        ],
        [
            "ανυστ",
            26,
            1
        ],
        [
            "ναυ",
            -1,
            1
        ],
        [
            "αφ",
            -1,
            1
        ],
        [
            "ξεφ",
            -1,
            1
        ],
        [
            "αδηφ",
            -1,
            1
        ],
        [
            "παμφ",
            -1,
            1
        ],
        [
            "πολυφ",
            -1,
            1
        ]
    ], ra = [
        [
            "αγα",
            -1,
            1
        ],
        [
            "αγε",
            -1,
            1
        ],
        [
            "αγεσ",
            -1,
            1
        ]
    ], sa = [
        [
            "ησα",
            -1,
            1
        ],
        [
            "ησε",
            -1,
            1
        ],
        [
            "ησου",
            -1,
            1
        ]
    ], ta = [
        [
            "ν",
            -1,
            1
        ],
        [
            "δωδεκαν",
            0,
            1
        ],
        [
            "επταν",
            0,
            1
        ],
        [
            "μεγαλον",
            0,
            1
        ],
        [
            "ερημον",
            0,
            1
        ],
        [
            "χερσον",
            0,
            1
        ]
    ], ua = [
        [
            "ηστε",
            -1,
            1
        ]
    ], va = [
        [
            "σβ",
            -1,
            1
        ],
        [
            "ασβ",
            0,
            1
        ],
        [
            "απλ",
            -1,
            1
        ],
        [
            "αειμν",
            -1,
            1
        ],
        [
            "χρ",
            -1,
            1
        ],
        [
            "αχρ",
            4,
            1
        ],
        [
            "κοινοχρ",
            4,
            1
        ],
        [
            "δυσχρ",
            4,
            1
        ],
        [
            "ευχρ",
            4,
            1
        ],
        [
            "παλιμψ",
            -1,
            1
        ]
    ], wa = [
        [
            "ουνε",
            -1,
            1
        ],
        [
            "ηθουνε",
            0,
            1
        ],
        [
            "ησουνε",
            0,
            1
        ]
    ], xa = [
        [
            "σπι",
            -1,
            1
        ],
        [
            "ν",
            -1,
            1
        ],
        [
            "εξων",
            1,
            1
        ],
        [
            "ρ",
            -1,
            1
        ],
        [
            "στραβομουτσ",
            -1,
            1
        ],
        [
            "κακομουτσ",
            -1,
            1
        ]
    ], ya = [
        [
            "ουμε",
            -1,
            1
        ],
        [
            "ηθουμε",
            0,
            1
        ],
        [
            "ησουμε",
            0,
            1
        ]
    ], za = [
        [
            "αζ",
            -1,
            1
        ],
        [
            "ωριοπλ",
            -1,
            1
        ],
        [
            "ασουσ",
            -1,
            1
        ],
        [
            "παρασουσ",
            2,
            1
        ],
        [
            "αλλοσουσ",
            -1,
            1
        ],
        [
            "φ",
            -1,
            1
        ],
        [
            "χ",
            -1,
            1
        ]
    ], Aa = [
        [
            "ματα",
            -1,
            1
        ],
        [
            "ματων",
            -1,
            1
        ],
        [
            "ματοσ",
            -1,
            1
        ]
    ], Ba = [
        [
            "α",
            -1,
            1
        ],
        [
            "ιουμα",
            0,
            1
        ],
        [
            "ομουνα",
            0,
            1
        ],
        [
            "ιομουνα",
            2,
            1
        ],
        [
            "οσουνα",
            0,
            1
        ],
        [
            "ιοσουνα",
            4,
            1
        ],
        [
            "ε",
            -1,
            1
        ],
        [
            "αγατε",
            6,
            1
        ],
        [
            "ηκατε",
            6,
            1
        ],
        [
            "ηθηκατε",
            8,
            1
        ],
        [
            "ησατε",
            6,
            1
        ],
        [
            "ουσατε",
            6,
            1
        ],
        [
            "ειτε",
            6,
            1
        ],
        [
            "ηθειτε",
            12,
            1
        ],
        [
            "ιεμαστε",
            6,
            1
        ],
        [
            "ουμαστε",
            6,
            1
        ],
        [
            "ιουμαστε",
            15,
            1
        ],
        [
            "ιεσαστε",
            6,
            1
        ],
        [
            "οσαστε",
            6,
            1
        ],
        [
            "ιοσαστε",
            18,
            1
        ],
        [
            "η",
            -1,
            1
        ],
        [
            "ι",
            -1,
            1
        ],
        [
            "αμαι",
            21,
            1
        ],
        [
            "ιεμαι",
            21,
            1
        ],
        [
            "ομαι",
            21,
            1
        ],
        [
            "ουμαι",
            21,
            1
        ],
        [
            "ασαι",
            21,
            1
        ],
        [
            "εσαι",
            21,
            1
        ],
        [
            "ιεσαι",
            27,
            1
        ],
        [
            "αται",
            21,
            1
        ],
        [
            "εται",
            21,
            1
        ],
        [
            "ιεται",
            30,
            1
        ],
        [
            "ονται",
            21,
            1
        ],
        [
            "ουνται",
            21,
            1
        ],
        [
            "ιουνται",
            33,
            1
        ],
        [
            "ει",
            21,
            1
        ],
        [
            "αει",
            35,
            1
        ],
        [
            "ηθει",
            35,
            1
        ],
        [
            "ησει",
            35,
            1
        ],
        [
            "οι",
            21,
            1
        ],
        [
            "αν",
            -1,
            1
        ],
        [
            "αγαν",
            40,
            1
        ],
        [
            "ηκαν",
            40,
            1
        ],
        [
            "ηθηκαν",
            42,
            1
        ],
        [
            "ησαν",
            40,
            1
        ],
        [
            "ουσαν",
            40,
            1
        ],
        [
            "οντουσαν",
            45,
            1
        ],
        [
            "ιοντουσαν",
            46,
            1
        ],
        [
            "ονταν",
            40,
            1
        ],
        [
            "ιονταν",
            48,
            1
        ],
        [
            "ουνταν",
            40,
            1
        ],
        [
            "ιουνταν",
            50,
            1
        ],
        [
            "οταν",
            40,
            1
        ],
        [
            "ιοταν",
            52,
            1
        ],
        [
            "ομασταν",
            40,
            1
        ],
        [
            "ιομασταν",
            54,
            1
        ],
        [
            "οσασταν",
            40,
            1
        ],
        [
            "ιοσασταν",
            56,
            1
        ],
        [
            "ουν",
            -1,
            1
        ],
        [
            "ηθουν",
            58,
            1
        ],
        [
            "ομουν",
            58,
            1
        ],
        [
            "ιομουν",
            60,
            1
        ],
        [
            "ησουν",
            58,
            1
        ],
        [
            "οσουν",
            58,
            1
        ],
        [
            "ιοσουν",
            63,
            1
        ],
        [
            "ων",
            -1,
            1
        ],
        [
            "ηδων",
            65,
            1
        ],
        [
            "ο",
            -1,
            1
        ],
        [
            "ασ",
            -1,
            1
        ],
        [
            "εσ",
            -1,
            1
        ],
        [
            "ηδεσ",
            69,
            1
        ],
        [
            "ησεσ",
            69,
            1
        ],
        [
            "ησ",
            -1,
            1
        ],
        [
            "εισ",
            -1,
            1
        ],
        [
            "ηθεισ",
            73,
            1
        ],
        [
            "οσ",
            -1,
            1
        ],
        [
            "υσ",
            -1,
            1
        ],
        [
            "ουσ",
            76,
            1
        ],
        [
            "υ",
            -1,
            1
        ],
        [
            "ου",
            78,
            1
        ],
        [
            "ω",
            -1,
            1
        ],
        [
            "αω",
            80,
            1
        ],
        [
            "ηθω",
            80,
            1
        ],
        [
            "ησω",
            80,
            1
        ]
    ], Ca = [
        [
            "οτερ",
            -1,
            1
        ],
        [
            "εστερ",
            -1,
            1
        ],
        [
            "υτερ",
            -1,
            1
        ],
        [
            "ωτερ",
            -1,
            1
        ],
        [
            "οτατ",
            -1,
            1
        ],
        [
            "εστατ",
            -1,
            1
        ],
        [
            "υτατ",
            -1,
            1
        ],
        [
            "ωτατ",
            -1,
            1
        ]
    ], ia = [
        81,
        65,
        16,
        1
    ], ha = [
        81,
        65,
        0,
        1
    ], B = p;
    this.l = function() {
        a.f = a.cursor;
        a.cursor = a.a;
        var d = a.a - a.cursor;
        k();
        a.cursor = a.a - d;
        if (!(3 <= a.j.length)) return p;
        B = g;
        d = a.a - a.cursor;
        l();
        a.cursor = a.a - d;
        var d = a.a - a.cursor, n;
        a.d = a.cursor;
        if (0 != a.h(b) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, n = a.h(v), !(0 == n || a.cursor > a.f)))) switch(n){
            case 1:
                if (!a.b("ι")) break;
                break;
            case 2:
                a.b("ιζ");
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(q) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(f) || a.cursor > a.f || a.b("ων")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(s) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                n = a.a - a.cursor;
                if (a.g("ισα") && !(a.cursor > a.f)) {
                    if (!a.b("ισ")) break a;
                    break b;
                }
                a.cursor = a.a - n;
                a.d = a.cursor;
                a.c = a.cursor;
                n = a.h(t);
                if (!(0 == n || a.cursor > a.f)) switch(n){
                    case 1:
                        if (!a.b("ι")) break;
                        break;
                    case 2:
                        a.b("ισ");
                }
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(m) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(r) || a.cursor > a.f || a.b("ι")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        if (0 != a.h(u) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, n = a.h(w), !(0 == n || a.cursor > a.f)))) switch(n){
            case 1:
                if (!a.b("ι")) break;
                break;
            case 2:
                a.b("ιστ");
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(e) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                var F = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                n = a.h(y);
                if (0 != n && !(a.cursor > a.f)) {
                    switch(n){
                        case 1:
                            if (!a.b("ισμ")) break a;
                            break;
                        case 2:
                            if (!a.b("ι")) break a;
                    }
                    break b;
                }
                a.cursor = a.a - F;
                a.d = a.cursor;
                n = a.h(z);
                if (0 != n) switch(a.c = a.cursor, n){
                    case 1:
                        if (!a.b("αγνωστ")) break;
                        break;
                    case 2:
                        if (!a.b("ατομ")) break;
                        break;
                    case 3:
                        if (!a.b("γνωστ")) break;
                        break;
                    case 4:
                        if (!a.b("εθν")) break;
                        break;
                    case 5:
                        if (!a.b("εκλεκτ")) break;
                        break;
                    case 6:
                        if (!a.b("σκεπτ")) break;
                        break;
                    case 7:
                        if (!a.b("τοπ")) break;
                        break;
                    case 8:
                        if (!a.b("αλεξανδρ")) break;
                        break;
                    case 9:
                        if (!a.b("βυζαντ")) break;
                        break;
                    case 10:
                        a.b("θεατρ");
                }
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(H) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(A) || a.cursor > a.f || a.b("αρακ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(E) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                F = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                n = a.h(G);
                if (0 != n && !(a.cursor > a.f)) {
                    switch(n){
                        case 1:
                            if (!a.b("ακ")) break a;
                            break;
                        case 2:
                            if (!a.b("ιτσ")) break a;
                    }
                    break b;
                }
                a.cursor = a.a - F;
                a.d = a.cursor;
                a.c = a.cursor;
                !a.g("κορ") || a.b("ιτσ");
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(N) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                n = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (0 != a.h(x) && !(a.cursor > a.f)) {
                    if (!a.b("ιδ")) break a;
                    break b;
                }
                a.cursor = a.a - n;
                a.d = a.cursor;
                a.c = a.cursor;
                0 == a.h(O) || a.b("ιδ");
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(P) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(M) || a.cursor > a.f || a.b("ισκ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(Q) && (a.c = a.cursor, a.e())) {
            n = a.a - a.cursor;
            if (0 != a.h(T)) break a;
            a.cursor = a.a - n;
            n = a.cursor;
            a.r(a.cursor, a.cursor, "αδ");
            a.cursor = n;
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(U) && (a.c = a.cursor, a.e() && (a.d = a.cursor, a.c = a.cursor, 0 == a.h(R) || a.b("εδ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(S) && (a.c = a.cursor, a.e() && (a.d = a.cursor, a.c = a.cursor, 0 == a.h(V) || a.b("ουδ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(I) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(D) || a.cursor > a.f || a.b("ε")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(L) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, !a.n(ia, 945, 969) || a.b("ι")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(J) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                n = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (a.n(ia, 945, 969)) {
                    if (!a.b("ικ")) break a;
                    break b;
                }
                a.cursor = a.a - n;
                a.d = a.cursor;
            }
            a.c = a.cursor;
            0 == a.h(K) || a.cursor > a.f || a.b("ικ");
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: {
            n = a.a - a.cursor;
            if (a.g("αγαμε") && !(a.cursor > a.f) && !a.b("αγαμ")) break a;
            a.cursor = a.a - n;
            n = a.a - a.cursor;
            a.d = a.cursor;
            if (0 != a.h($)) {
                a.c = a.cursor;
                if (!a.e()) break a;
                B = p;
            }
            a.cursor = a.a - n;
            a.d = a.cursor;
            a.g("αμε") && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(aa) || a.cursor > a.f || a.b("αμ")));
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        h();
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        c();
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(fa) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                n = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (a.g("αρχ") && !(a.cursor > a.f)) {
                    if (!a.b("οντ")) break a;
                    break b;
                }
                a.cursor = a.a - n;
                a.d = a.cursor;
                a.c = a.cursor;
                !a.g("κρε") || a.b("ωντ");
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(ga) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, !a.g("ον") || a.cursor > a.f || a.b("ομαστ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: {
            n = a.a - a.cursor;
            a.d = a.cursor;
            if (a.g("ιεστε")) {
                a.c = a.cursor;
                if (!a.e()) break a;
                B = p;
                a.d = a.cursor;
                a.c = a.cursor;
                if (0 != a.h(Y) && !(a.cursor > a.f) && !a.b("ιεστ")) break a;
            }
            a.cursor = a.a - n;
            a.d = a.cursor;
            a.g("εστε") && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(Z) || a.cursor > a.f || a.b("ιεστ")));
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: {
            n = a.a - a.cursor;
            a.d = a.cursor;
            if (0 != a.h(X)) {
                a.c = a.cursor;
                if (!a.e()) break a;
                B = p;
            }
            a.cursor = a.a - n;
            a.d = a.cursor;
            if (0 != a.h(la) && (a.c = a.cursor, a.e())) {
                B = p;
                b: {
                    n = a.a - a.cursor;
                    a.d = a.cursor;
                    a.c = a.cursor;
                    if (0 != a.h(ja)) {
                        if (!a.b("ηκ")) break a;
                        break b;
                    }
                    a.cursor = a.a - n;
                    a.d = a.cursor;
                    a.c = a.cursor;
                    0 == a.h(ka) || a.cursor > a.f || a.b("ηκ");
                }
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(oa) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                n = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (0 != a.h(ma)) {
                    if (!a.b("ουσ")) break a;
                    break b;
                }
                a.cursor = a.a - n;
                a.d = a.cursor;
                a.c = a.cursor;
                0 == a.h(na) || a.cursor > a.f || a.b("ουσ");
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(sa) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(ta) || a.cursor > a.f || a.b("ησ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: if (a.d = a.cursor, 0 != a.h(ra) && (a.c = a.cursor, a.e())) {
            B = p;
            b: {
                n = a.a - a.cursor;
                a.d = a.cursor;
                a.c = a.cursor;
                if (a.g("κολλ")) {
                    if (!a.b("αγ")) break a;
                    break b;
                }
                a.cursor = a.a - n;
                c: {
                    F = a.a - a.cursor;
                    a.d = a.cursor;
                    a.c = a.cursor;
                    n = a.h(pa);
                    if (0 != n) {
                        switch(n){
                            case 1:
                                if (!a.b("αγ")) break a;
                        }
                        break c;
                    }
                    a.cursor = a.a - F;
                    a.d = a.cursor;
                    a.c = a.cursor;
                    0 == a.h(qa) || a.cursor > a.f || a.b("αγ");
                }
            }
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(ua) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(va) || a.cursor > a.f || a.b("ηστ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(wa) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(xa) || a.cursor > a.f || a.b("ουν")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(ya) && (a.c = a.cursor, a.e() && (B = p, a.d = a.cursor, a.c = a.cursor, 0 == a.h(za) || a.cursor > a.f || a.b("ουμ")));
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a: {
            n = a.a - a.cursor;
            a.d = a.cursor;
            if (0 != a.h(Aa) && (a.c = a.cursor, !a.b("μα"))) break a;
            a.cursor = a.a - n;
            B && (a.d = a.cursor, 0 != a.h(Ba) && (a.c = a.cursor, a.e()));
        }
        a.cursor = a.a - d;
        d = a.a - a.cursor;
        a.d = a.cursor;
        0 != a.h(Ca) && (a.c = a.cursor, a.e());
        a.cursor = a.a - d;
        a.cursor = a.f;
        return g;
    };
    this.stemWord = function(b) {
        a.p(b);
        this.l();
        return a.j;
    };
}
var stemmerInstance = new stem();
function stemmer(word) {
    return stemmerInstance.stemWord(word);
}
