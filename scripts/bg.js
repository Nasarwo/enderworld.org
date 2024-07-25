!(function () {
  "use strict";
  function e(e) {
    return Math.floor(255 * e);
  }
  function a(e) {
    return e > 36864
      ? 1
      : e > 25600
      ? 3
      : e > 16384
      ? 5
      : e > 9216
      ? 7
      : e > 4096
      ? 9
      : e > 1024
      ? 11
      : e > 576
      ? 13
      : e > 256
      ? 14
      : 15;
  }
  function n(a, n, r) {
    !(function (a, n, r, o, i, l) {
      var s = x;
      if (!(l <= 1)) {
        var c = l * l * f + l * d + v,
          u = 17 / l,
          p =
            (2 + l / 1.5) *
            (((performance.now() - I) % 8e5) / 8e5) *
            (g / t(l)),
          y = 4.5 - t(l) / 4;
        (p %= 64 * l),
          T.save(),
          T.setTransform(1, 0, 0, 1, 0, 0),
          T.scale(m, m),
          T.rotate(c),
          T.translate(-u, -p),
          T.scale(y, y);
        var P = (function (a, n, t, r) {
          (n = e(n)), (t = e(t)), (r = e(r));
          var o = a.src + n + "," + t + "," + r;
          if (o in F) return F[o];
          E.drawImage(a, 0, 0);
          for (
            var i = E.getImageData(0, 0, 256, 256),
              l = i.data,
              s = 0,
              c = l.length;
            s < c;
            s += 4
          )
            0 != l[s]
              ? ((l[s + 3] = l[s]), (l[s] = n), (l[s + 1] = t), (l[s + 2] = r))
              : (l[s + 3] = 0);
          E.putImageData(i, 0, 0);
          var u = new Image();
          return (u.src = b.toDataURL()), (F[o] = u), u;
        })(s, r, o, i);
        for (a = -w; a < w; a++)
          for (n = -w; n < w; n++)
            for (
              var C = -s.width / 2 + s.width * a,
                D = -s.height / 2 + s.width * n,
                S = 0;
              S < h;
              S++
            )
              T.drawImage(P, C, D);
        T.restore();
      }
    })(
      a,
      1,
      (0.5 * y.nextFloat() + 0.1) * n,
      (0.5 * y.nextFloat() + 0.4) * n,
      (0.5 * y.nextFloat() + 0.5) * n,
      r
    );
  }
  function t(e) {
    return 18 - e;
  }
  function r() {
    requestAnimationFrame(r);
    var e = performance.now() / 1e3,
      l = Math.min(e - P, 1);
    if (((P = e), D > 0)) {
      if ((C += l) < 1 / D) return;
      C -= 1 / D;
    }
    !(function () {
      T.save(),
        T.setTransform(1, 0, 0, 1, 0, 0),
        T.clearRect(0, 0, o, i),
        T.restore(),
        y.setSeed(p);
      var e = u ? a(253) + 1 : a(253),
        r = u ? 1 : 0.75;
      n(r, 0.15, 0);
      for (var l = 1; l < e; ++l) n(r, 2 / t(l), l);
    })();
  }
  var o,
    i,
    l = 65535,
    s = 57068,
    c = 58989,
    u = !1,
    f = 8642,
    d = 18,
    v = 0,
    g = 1e3,
    m = 2.5,
    w = 4,
    h = 1,
    p = 31100,
    y = new (function e(a) {
      function n(e) {
        (o = (e & l) ^ c),
          (r = ((e / 65536) & l) ^ s),
          (t = ((e / 4294967296) & l) ^ 5);
      }
      var t, r, o;
      !(function (e, a) {
        if (!(e instanceof a))
          throw new TypeError("Cannot call a class as a function");
      })(this, e);
      var i = {
        setSeed: n,
        nextFloat: function () {
          return (
            (a = r * c + o * s + ((e = o * c + 11) >>> 16)),
            (n = t * c + r * s + 5 * o + (a >>> 16)),
            (o = e &= l),
            ((65536 * (t = n &= l) + (r = a &= l)) >>> 8) / 16777216
          );
          var e, a, n;
        },
      };
      for (var u in i) i[u] = { value: i[u] };
      Object.defineProperties(this, i), n(a);
    })(p),
    I = performance.now(),
    x = new Image();
  (x.crossOrigin = "anonymous"), (x.src = "../img/end_portal.png");
  var F = {},
    b = document.createElement("canvas");
  (b.width = 256), (b.height = 256);
  var E = b.getContext("2d"),
    P = performance.now() / 1e3,
    C = 0,
    D = 0,
    S = document.getElementById("render"),
    T = S.getContext("2d");
  (window.onload = function () {
    (o = S.width = innerWidth),
      (i = S.height = innerHeight),
      (T.imageSmoothingEnabled = !1),
      requestAnimationFrame(r);
  }),
    (window.wallpaperPropertyListener = {
      applyUserProperties: function (e) {
        e.alpha && (h = e.alpha.value),
          e.randomseed && (p = e.randomseed.value),
          e.anglea && (f = e.anglea.value),
          e.angleb && (d = e.angleb.value),
          e.anglec && (v = e.anglec.value),
          e.speed && (g = e.speed.value),
          e.scale && (m = e.scale.value),
          e.drawahead && (w = e.drawahead.value),
          e.endgateway && (u = e.endgateway.value);
      },
      applyGeneralProperties: function (e) {
        e.fps && (D = e.fps);
      },
    });
})();
