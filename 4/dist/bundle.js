!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            o,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    "use strict";
    n.r(t);
    function o() {
      document.getElementById("app").innerHTML =
        "Тетерина Елизавета Ильинична M3406";
    }
    function r() {
      return (async function (e) {
        let t = await fetch(e);
        if (t.ok) {
          let e = await t.json(),
            n = "<span><h3>Имя:</h3>" + e.name + "</span>",
            o = [];
          o = "<span><p><h3>Способности: </h3></p>";
          for (let t = 0; t < e.abilities.length; t++) {
            let [n] = await Promise.all([fetch(e.abilities[t].ability.url)]);
            if (n.ok) {
              let e = await n.json();
              o +=
                "<p><h4>Способность: " +
                e.name +
                "</h4>" +
                e.effect_entries[1].effect +
                "</p>";
            }
          }
          (o += "</span>"), console.log(e.sprites);
          let r =
            "<span id='poke-img'><img src='" +
            e.sprites.front_default +
            "'><img src='" +
            e.sprites.back_default +
            "'></span>";
          document.getElementById("app").innerHTML =
            "<span id='poke-text'>" + n + o + "</span>" + r;
        }
      })("https://pokeapi.co/api/v2/pokemon/slowpoke");
    }
    onload = function () {
      (document.getElementById("name").onclick = o),
        (document.getElementById("pokemon").onclick = r);
    };
  },
]);
