/***************************************
 * @preserve
 * ForeSee Web SDK: Utils Library
 * Built May 12, 17 14:02:42
 * Code version: 19.3.3-v.2
 * Template version: 19.3.3-v.2
 ***************************************/
_fsDefine(["require", "fs"], function(t, e) {
  function r(t, e) {
    var r = (65535 & t) + (65535 & e);
    return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r
  }

  function i(t, e) {
    return t << e | t >>> 32 - e
  }

  function n(t, e, n, s, a, o) {
    return r(i(r(r(e, t), r(s, o)), a), n)
  }

  function a(t, e, r, i, s, a, o) {
    return n(e & r | ~e & i, t, e, s, a, o)
  }

  function o(t, e, r, i, s, a, o) {
    return n(e & i | r & ~i, t, e, s, a, o)
  }

  function h(t, e, r, i, s, a, o) {
    return n(e ^ r ^ i, t, e, s, a, o)
  }

  function f(t, e, r, i, s, a, o) {
    return n(r ^ (e | ~i), t, e, s, a, o)
  }

  function u(t, e) {
    t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
    var i, n, s, u, l, c = 1732584193,
      p = -271733879,
      d = -1732584194,
      g = 271733878;
    for (i = 0; i < t.length; i += 16) n = c, s = p, u = d, l = g, c = a(c, p, d, g, t[i], 7, -680876936), g = a(g, c, p, d, t[i + 1], 12, -389564586), d = a(d, g, c, p, t[i + 2], 17, 606105819), p = a(p, d, g, c, t[i + 3], 22, -1044525330), c = a(c, p, d, g, t[i + 4], 7, -176418897), g = a(g, c, p, d, t[i + 5], 12, 1200080426), d = a(d, g, c, p, t[i + 6], 17, -1473231341), p = a(p, d, g, c, t[i + 7], 22, -45705983), c = a(c, p, d, g, t[i + 8], 7, 1770035416), g = a(g, c, p, d, t[i + 9], 12, -1958414417), d = a(d, g, c, p, t[i + 10], 17, -42063), p = a(p, d, g, c, t[i + 11], 22, -1990404162), c = a(c, p, d, g, t[i + 12], 7, 1804603682), g = a(g, c, p, d, t[i + 13], 12, -40341101), d = a(d, g, c, p, t[i + 14], 17, -1502002290), p = a(p, d, g, c, t[i + 15], 22, 1236535329), c = o(c, p, d, g, t[i + 1], 5, -165796510), g = o(g, c, p, d, t[i + 6], 9, -1069501632), d = o(d, g, c, p, t[i + 11], 14, 643717713), p = o(p, d, g, c, t[i], 20, -373897302), c = o(c, p, d, g, t[i + 5], 5, -701558691), g = o(g, c, p, d, t[i + 10], 9, 38016083), d = o(d, g, c, p, t[i + 15], 14, -660478335), p = o(p, d, g, c, t[i + 4], 20, -405537848), c = o(c, p, d, g, t[i + 9], 5, 568446438), g = o(g, c, p, d, t[i + 14], 9, -1019803690), d = o(d, g, c, p, t[i + 3], 14, -187363961), p = o(p, d, g, c, t[i + 8], 20, 1163531501), c = o(c, p, d, g, t[i + 13], 5, -1444681467), g = o(g, c, p, d, t[i + 2], 9, -51403784), d = o(d, g, c, p, t[i + 7], 14, 1735328473), p = o(p, d, g, c, t[i + 12], 20, -1926607734), c = h(c, p, d, g, t[i + 5], 4, -378558), g = h(g, c, p, d, t[i + 8], 11, -2022574463), d = h(d, g, c, p, t[i + 11], 16, 1839030562), p = h(p, d, g, c, t[i + 14], 23, -35309556), c = h(c, p, d, g, t[i + 1], 4, -1530992060), g = h(g, c, p, d, t[i + 4], 11, 1272893353), d = h(d, g, c, p, t[i + 7], 16, -155497632), p = h(p, d, g, c, t[i + 10], 23, -1094730640), c = h(c, p, d, g, t[i + 13], 4, 681279174), g = h(g, c, p, d, t[i], 11, -358537222), d = h(d, g, c, p, t[i + 3], 16, -722521979), p = h(p, d, g, c, t[i + 6], 23, 76029189), c = h(c, p, d, g, t[i + 9], 4, -640364487), g = h(g, c, p, d, t[i + 12], 11, -421815835), d = h(d, g, c, p, t[i + 15], 16, 530742520), p = h(p, d, g, c, t[i + 2], 23, -995338651), c = f(c, p, d, g, t[i], 6, -198630844), g = f(g, c, p, d, t[i + 7], 10, 1126891415), d = f(d, g, c, p, t[i + 14], 15, -1416354905), p = f(p, d, g, c, t[i + 5], 21, -57434055), c = f(c, p, d, g, t[i + 12], 6, 1700485571), g = f(g, c, p, d, t[i + 3], 10, -1894986606), d = f(d, g, c, p, t[i + 10], 15, -1051523), p = f(p, d, g, c, t[i + 1], 21, -2054922799), c = f(c, p, d, g, t[i + 8], 6, 1873313359), g = f(g, c, p, d, t[i + 15], 10, -30611744), d = f(d, g, c, p, t[i + 6], 15, -1560198380), p = f(p, d, g, c, t[i + 13], 21, 1309151649), c = f(c, p, d, g, t[i + 4], 6, -145523070), g = f(g, c, p, d, t[i + 11], 10, -1120210379), d = f(d, g, c, p, t[i + 2], 15, 718787259), p = f(p, d, g, c, t[i + 9], 21, -343485551), c = r(c, n), p = r(p, s), d = r(d, u), g = r(g, l);
    return [c, p, d, g]
  }

  function c(t) {
    var e, r = "";
    for (e = 0; e < 32 * t.length; e += 8) r += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return r
  }

  function p(t) {
    var e, r = [];
    for (r[(t.length >> 2) - 1] = void 0, e = 0; e < r.length; e += 1) r[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8) r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return r
  }

  function d(t) {
    return c(u(p(t), 8 * t.length))
  }

  function g(t, e) {
    var r, i, n = p(t),
      s = [],
      a = [];
    for (s[15] = a[15] = void 0, n.length > 16 && (n = u(n, 8 * t.length)), r = 0; r < 16; r += 1) s[r] = 909522486 ^ n[r], a[r] = 1549556828 ^ n[r];
    return i = u(s.concat(p(e)), 512 + 8 * e.length), c(u(a.concat(i), 640))
  }

  function y(t) {
    var e, r, i = "0123456789abcdef",
      n = "";
    for (r = 0; r < t.length; r += 1) e = t.charCodeAt(r), n += i.charAt(e >>> 4 & 15) + i.charAt(15 & e);
    return n
  }

  function w(t) {
    return decodeURIComponent(e.enc(t))
  }

  function b(t) {
    return d(w(t))
  }

  function m(t) {
    return y(b(t))
  }

  function v(t, e) {
    return g(w(t), w(e))
  }

  function x(t, e) {
    return y(v(t, e))
  }
  var _ = "undefined" != typeof Uint8Array,
    S = window,
    B = {
      siteKey: "global"
    };
  if (e && e.home && (e.home.indexOf("production") > -1 || e.home.indexOf("staging") > -1)) {
    var k;
    k = e.home.indexOf("production") > -1 ? e.home.split("production")[0] : e.home.split("staging")[0], k.indexOf("//") > -1 && (k = k.split("//")[1]), k = k.replace(/\\/g, "/").split("/"), k.length >= 3 && (k = e.toLowerCase(k[1])), k && k.length > 1 && (B.siteKey = k)
  }
  B.getSize = function(t) {
    var e = 0,
      r = 0,
      i = t.document,
      n = i.documentElement;
    return "number" == typeof t.innerWidth ? (e = t.innerWidth, r = t.innerHeight) : n && (n.clientWidth || n.clientHeight) ? (e = n.clientWidth, r = n.clientHeight) : i.body && (i.body.clientWidth || i.body.clientHeight) && (e = i.body.clientWidth, r = i.body.clientHeight), {
      w: e,
      h: r
    }
  }, B.getScroll = function(t) {
    var e = 0,
      r = 0,
      i = t.document,
      n = i.documentElement;
    return "number" == typeof t.pageYOffset ? (r = t.pageYOffset, e = t.pageXOffset) : i.body && (i.body.scrollLeft || i.body.scrollTop) ? (r = i.body.scrollTop, e = i.body.scrollLeft) : n && (n.scrollLeft || n.scrollTop) && (r = n.scrollTop, e = n.scrollLeft), {
      x: e,
      y: r
    }
  }, B.setScroll = function(t, e, r) {
    t.scrollTo(e, r)
  }, B.getScreenResolution = function() {
    var t = window.screen;
    return e.isDefined(t) && e.isDefined(t.width) && "number" == typeof t.width ? {
      w: t.width,
      h: t.height
    } : {
      w: 0,
      h: 0
    }
  }, B.getFrameWindow = function(t) {
    var e;
    return t && t.contentWindow ? e = t.contentWindow : t && t.contentDocument && t.contentDocument.defaultView && (e = t.contentDocument.defaultView), e && e != e.top ? e : null
  }, B.escapeRegExp = function(t) {
    return (t || "").toString().replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
  }, B.trim = function(t) {
    return (t || "").toString().replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "")
  }, B.stripHTML = function(t) {
    return (t || "").replace(/(<([^>]+)>)/gi, "")
  }, B.merge = function() {
    var t, r, i, n, s, a = {},
      o = arguments;
    for (t = 0, r = o.length; t < r; t++)
      if (s = o[t], e.isPlainObject(s))
        for (var h in s) i = s[h], n = a[h], a[h] = n && e.isPlainObject(i) && e.isPlainObject(n) ? B.merge(n, i) : B.unlink(i);
    return a
  }, B.unlink = function(t) {
    var r, i;
    if (e.isPlainObject(t)) {
      r = {};
      for (var n in t) r[n] = B.unlink(t[n])
    } else if (e.isArray(t))
      for (r = [], i = 0, l = t.length; i < l; i++) r[i] = B.unlink(t[i]);
    else r = t;
    return r
  };
  var T = {};
  B.preventDefault = function(t) {
    t && t.preventDefault ? t.preventDefault() : window.event && window.event.returnValue ? window.eventReturnValue = !1 : t.returnValue = !1
  };
  var R = [],
    I = function(t) {
      var e = "default";
      if (t.indexOf(":") > -1) {
        var r = t.split(":");
        e = r[0], t = r[1]
      }
      return T[e] || (T[e] = {}), T[e][t] || (T[e][t] = []), {
        ns: e,
        en: t
      }
    };
  B.Bind = function(t, r, i, n) {
    if (t && r) {
      r = e.toLowerCase(r);
      var s = I(r);
      if (T[s.ns][s.en].push({
          elem: t,
          cb: i,
          ub: !!n
        }), r.indexOf("unload") > -1) return void R.push(i);
      "propertychange" != s.en && t.addEventListener ? t.addEventListener(s.en, i, !n) : t.attachEvent && t.attachEvent("on" + s.en, i)
    }
  }, B.BindOnce = function(t, e, r) {
    if (t && e) {
      var i = I(e);
      if (t["_acsEvent" + i.en]) return;
      t["_acsEvent" + i.en] = !0, B.Bind(t, e, r)
    }
  };
  var E = function(t, e, r, i) {
    e && (e.parentNode || e.window || 9 == e.nodeType) && ("propertychange" != t && e.removeEventListener ? e.removeEventListener(t, r, !i) : e.detachEvent && e.detachEvent("on" + t, r))
  };
  B.Unbind = function(t, e, r, i) {
    var n, s, a, o;
    if (e && e.indexOf("unload") > -1) {
      for (o = 0; o < R.length; o++)
        if (R[o] == r) {
          R.splice(o, 1);
          break
        }
    } else if (0 === arguments.length)
      for (var h in T) B.Unbind(h + ":*"), delete T[h];
    else if ("string" == typeof t)
      if (n = I(t), "default" == n.ns) {
        for (var f in T)
          if (T.hasOwnProperty(f)) {
            s = T[f];
            for (var u in s)
              if (s.hasOwnProperty(u) && (u == n.en || "*" == n.en))
                for (o = 0; o < s[u].length; o++) a = s[u][o], E(u, a.elem, a.cb, a.ub), s[u].splice(o--, 1)
          }
      } else {
        s = T[n.ns];
        for (var l in s)
          if (s.hasOwnProperty(l) && (l == n.en || "*" == n.en))
            for (o = 0; o < s[l].length; o++) a = s[l][o], E(l, a.elem, a.cb, a.ub), s[l].splice(o--, 1)
      }
    else if (t && !e) {
      for (var c in T)
        if (T.hasOwnProperty(c)) {
          s = T[c];
          for (var p in s)
            if (s.hasOwnProperty(p))
              for (o = 0; o < s[p].length; o++) a = s[p][o], a.elem === t && (E(p, a.elem, a.cb, a.ub), s[p].splice(o--, 1))
        }
    } else if (t && e)
      if (n = I(e), "default" == n.ns) {
        for (var d in T)
          if (T.hasOwnProperty(d)) {
            s = T[d];
            for (var g in s)
              if (s.hasOwnProperty(g) && (g == n.en || "*" == n.en))
                for (o = 0; o < s[g].length; o++) a = s[g][o], a.elem === t && (E(g, a.elem, r || a.cb, a.ub), s[g].splice(o--, 1))
          }
      } else {
        n = I(e), s = T[n.ns];
        for (var y in s)
          if (s.hasOwnProperty(y) && (y == n.en || "*" == n.en))
            for (o = 0; o < s[y].length; o++) a = s[y][o], a.elem === t && (E(y, a.elem, r || a.cb, a.ub), s[y].splice(o--, 1))
      }
  };
  var A = !1;
  if (B.preventUnloadFlag = !1, B._preventUnloadFor = function(t) {
      A = !0, setTimeout(function() {
        A = !1
      }, t)
    }, B.HandleUnload = function() {
      if (!A && !B.preventUnloadFlag) {
        for (var t = R.length - 1; t >= 0; t--) try {
          R[t].call()
        } catch (t) {}
        e.dispose(R), B.Unbind()
      }
    }, document.addEventListener ? (window.addEventListener("beforeunload", B.HandleUnload, !0), window.addEventListener("pagehide", B.HandleUnload, !0), document.addEventListener("unload", B.HandleUnload, !0)) : document.attachEvent && window.attachEvent("onunload", B.HandleUnload), B.FSEvent = function() {
      this.id = "_" + Math.round(99999 * Math.random()), this.subscriptions = [], this.didFire = !1
    }, B.FSEvent.prototype.subscribe = function(t, e, r) {
      return this.subscriptions.push({
        once: !!e,
        cb: t
      }), r && this.didFire && (this.prevArgs ? this.fire.apply(this, this.prevArgs) : this.fire()), {
        unsubscribe: function(t, e) {
          return function() {
            t.unsubscribe(e)
          }
        }(this, t)
      }
    }, B.FSEvent.prototype.unsubscribe = function(t) {
      for (var e = 0; e < this.subscriptions.length; e++) this.subscriptions[e].cb == t && (this.subscriptions.splice(e, 1), e--)
    }, B.FSEvent.prototype.unsubscribeAll = function() {
      this.subscriptions = []
    }, B.FSEvent.prototype.fire = function() {
      this.didFire = !0, this.prevArgs = arguments;
      for (var t = 0; t < this.subscriptions.length; t++) {
        var e = this.subscriptions[t];
        e.once && this.subscriptions.splice(t--, 1), e.cb.apply(this, arguments)
      }
    }, B.pageNavEvent = new B.FSEvent, B.honorNavigationEvents = !0, history && history.pushState) {
    window.addEventListener("popstate", function(t) {
      !A && B.honorNavigationEvents && B.pageNavEvent.fire()
    });
    var C = history.pushState;
    history.pushState = function() {
      C.apply(history, arguments), !A && B.honorNavigationEvents && B.pageNavEvent.fire()
    }
  }
  B.md5 = function(t, e, r) {
    return e ? r ? v(e, t) : x(e, t) : r ? b(t) : m(t)
  }, _fsNormalizeUrl = e.makeURI;
  var O = function(t) {
    this.browser = t, this.sig = "not detected", this.ready = new B.FSEvent, this._detect()
  };
  O.prototype._detect = function() {
    var t = e.proxy(function(t) {
      this.sig = t, this.ready.fire(t)
    }, this);
    if (q.has()) return void q.uid(t);
    if (X.has()) return void X.uid(t);
    var r, i = [],
      n = navigator,
      s = this.browser;
    if (S != S.top) {
      var a = location.search.match(/uid=([\d\w]*)/i);
      a && a[1] && (r = a[1])
    }
    r && "not detected" != r || !s.supportsLocalStorage || (r = localStorage.getItem("_fsrFP_")), r || (i = B.trim(navigator.userAgent.replace(/[0-9\.\/\\\(\);_\-]*/gi, "")).split(" "), i.push(n.language || ""), i.push(n.hardwareConcurrency || ""), i.push(n.platform || ""), i.push(n.vendor || ""), i.push(n.appName || ""), i.push(n.maxTouchPoints || ""), i.push(n.doNotTrack || "false"), i.push(s.os.name || "false"), i.push(s.os.version || "false"), i.push(this._getCanvasPrint()), r = B.md5(i.join("")), this.sig = r, s.supportsLocalStorage && localStorage.setItem("_fsrFP_", r)), e.nextTick(function() {
      t(r)
    })
  }, O.prototype._getCanvasPrint = function() {
    try {
      var t = document.createElement("canvas"),
        e = t.getContext("2d"),
        r = "ForeSee,CloudUser <canvas> 1.0";
      return t.width = 250, t.height = 30, e.textBaseline = "top", e.font = "14px 'Arial'", e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(125, 1, 62, 20), e.fillStyle = "#069", e.fillText(r, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.fillText(r, 4, 17), t.toDataURL()
    } catch (t) {
      return "nocanvas"
    }
  }, B.Fingerprint = O;
  var L = function(t) {
    this.browser = t, this.ready = new B.FSEvent, t.isIE && t.browser.version < 11 && "https:" != location.protocol ? (this.fstg = new B.Frame(t), e.nextTick(e.proxy(function() {
      this.fstg.ready.subscribe(e.proxy(function() {
        this.ready.fire()
      }, this), !0, !0)
    }, this))) : (this.ajax = new B.AjaxTransport, e.nextTick(e.proxy(function() {
      this.ready.fire()
    }, this)))
  };
  L.prototype.send = function(t) {
    this.ready.subscribe(e.proxy(function() {
      if (this.ajax) this.ajax.send(t);
      else {
        var r = e.ext({
          method: "GET",
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          success: function() {},
          failure: function() {}
        }, t);
        this.fstg.ajax(r.method, r.url, r.data, function(t) {
          return function(e, r) {
            e ? t.success(r) : t.failure(r)
          }
        }(r), !e.isDefined(t.skipEncode) || !!t.skipEncode, r.contentType)
      }
    }, this), !0, !0)
  }, L.prototype.dispose = function() {
    this.ajax && this.ajax.dispose()
  }, B.CORS = L;
  var D;
  B.Frame = function(t) {
    this.frameId = "_fsCtrlFr";
    var r = _fsNormalizeUrl("$fs.frame.html?d=" + e.enc(document.domain) + "&_cv_=" + e.enc(e.config.codeVer) + "&_vt_=" + e.enc(e.tagVersion)) + "&uid=" + e.enc(t.fp || "");
    e.hasSSL && ("//" == r.substr(0, 2) ? r = "https:" + r : "http" != r.substr(0, 4) && /^\//.test(r) && (r = "https://" + S.location.host + r)), this.isSSL = e.toLowerCase(r).indexOf("https") > -1, "localhost" === S.location.hostname ? r = r.replace(/:8080/gi, ":443") : this.isSSL && (r = r.replace(/:[0-9]+/gi, "")), this.iframeSrc = r, D || (D = new B.FSEvent), this.ready = D, this.trackerReady = new B.FSEvent, this._ajaxCalls = {}, this._ensureFrame(), B.Bind(window, "message", e.proxy(function(t) {
      this._onMessage(t)
    }, this))
  }, B.Frame.prototype._ensureFrame = function() {
    if (this._iframeElement = document.getElementById(this.frameId), !this._iframeElement) {
      var t = document.createElement("iframe");
      t.src = this.iframeSrc, t.id = this.frameId, t.className = "_FSFRAME_", t._csrf = !0, t.style.display = "none", t.setAttribute("title", "ForeSee Control Frame"), t.setAttribute("_fsrB", !0), document && document.body && document.body.appendChild(t), this._iframeElement = t, this.ready.didFire && (this.ready = new B.FSEvent)
    }
  }, B.Frame.prototype._postMessage = function(t, r) {
    this._ensureFrame();
    var i = JSON.stringify({
        src: "fstop",
        method: t,
        params: r || {}
      }),
      n = e.proxy(function() {
        this._iframeElement.contentWindow.postMessage(i, "*")
      }, this);
    this.ready.didFire ? n() : this.ready.subscribe(n)
  }, B.Frame.prototype._onMessage = function(t) {
    var e;
    if (t.data && -1 != (t.data + "").indexOf("frame")) {
      try {
        e = JSON.parse(t.data)
      } catch (t) {
        return
      }
      if ("fsframe" == e.src) switch (this.ready.didFire || this.ready.fire(), e.method) {
        case "ajaxreturn":
          var r = e.params.params.ajaxid;
          this._ajaxCalls[r] && this._ajaxCalls[r].cb && (this._ajaxCalls[r].cb(!!e.params.success, e.params.res || ""), delete this._ajaxCalls[r]);
          break;
        case "trackerready":
          this.trackerReady.didFire || this.trackerReady.fire();
          break;
        case "securityerror":
          this._3pDisabled = __3pDataDisabled = !0
      }
    }
  }, B.Frame.prototype.ajax = function(t, e, r, i, n, s) {
    var a = "_" + Math.round(99999999 * Math.random());
    return n = !!n, s = s || "application/x-www-form-urlencoded", this._ajaxCalls[a] = {
      payload: {
        method: t,
        url: e,
        data: r,
        ajaxid: a,
        skipencode: n,
        contenttype: s
      },
      cb: i
    }, this._postMessage("ajax", this._ajaxCalls[a].payload)
  }, B.Frame.prototype.broadcast = function(t, e, r) {
    return this._postMessage("broadcast", {
      key: t,
      value: e,
      x: r
    })
  }, B.INT = {}, B.testSameDomain = function(t, r) {
    var i = document.createElement("a");
    i.href = location.href;
    var n = i.hostname,
      s = i.protocol;
    i.href = t;
    var a = i.hostname || n,
      o = 0 === i.protocol.indexOf("http") ? i.protocol : s;
    i.href = r;
    var h = i.hostname || n,
      f = 0 === i.protocol.indexOf("http") ? i.protocol : s;
    return e.toLowerCase(a) == e.toLowerCase(h) && e.toLowerCase(o) == e.toLowerCase(f)
  }, B.addParameterToURL = function(t, e) {
    return t += (t.split("?")[1] ? "&" : "?") + e
  }, B.hash = function(t) {
    var e = t.split("_");
    return 3 * e[0] + 1357 + "" + (9 * e[1] + 58)
  }, B.hashCode = function(t) {
    var e, r = 0,
      i = "";
    if (0 === t.length) return r;
    for (e = 0; e < t.length; e++) i = t.charCodeAt(e), r = (r << 5) - r + i, r &= r;
    return r
  }, B.testAgainstSearch = function(t, r) {
    if (t instanceof RegExp) return t.test(r);
    if (-1 == t.indexOf("*") && -1 == t.indexOf("//") && "" !== t.trim()) return r.indexOf(t) > -1;
    var i, n, s;
    if (t = e.toLowerCase(t.replace(/^\s+|\s+$/g, "").replace(/[\*]{2,}/g, "*")), r = e.toLowerCase(r), "*" == t) return !0;
    for (n = []; t.indexOf("*") > -1;) t.indexOf("*") > 0 && n.push(t.substr(0, t.indexOf("*"))), n.push("*"), t = t.substr(t.indexOf("*") + 1);
    for (t.length > 0 && n.push(t), i = 0 !== n.length, s = 0; s < n.length; s++)
      if ("*" == (t = n[s])) {
        if (n.length > s + 1) {
          if (s++, -1 == r.indexOf(n[s])) {
            i = !1;
            break
          }
          r = r.substr(r.indexOf(n[s]) + n[s].length)
        }
        if (s == n.length - 1 && "*" !== n[s] && r != n[s] && r != n[s] + "/" && n[s] != r + "/" && r.length > 0 && "/" != r) {
          i = !1;
          break
        }
      } else {
        if (r.substr(0, t.length) != t && r != t + "/" && t != r + "/") {
          i = !1;
          break
        }
        if (r = r.substr(t.length), s == n.length - 1 && r.length > 0 && "/" != r) {
          i = !1;
          break
        }
      }
    return !!i
  }, B.getRootDomain = function(t) {
    t = e.toLowerCase(t || document.domain).replace("https://", "").replace("http://", "");
    for (var r, i = ["/", "?", ":"], n = i.length, s = 0; s < n; s++)(r = t.indexOf(i[s])) > -1 && (t = t.substr(0, r));
    if (t.indexOf("localhost") > -1 || 0 === t.replace(/[0-9\.]/g, "").length) return t;
    var a = t.split("."),
      o = a.length;
    return o > 2 && (function(t) {
      return ["com", "co", "org", "gov", "edu", "net"].indexOf(t) > -1
    }(a[o - 2]) || function(t) {
      return t.indexOf("qc.ca") > -1
    }(t)) ? a[o - 3] + "." + a[o - 2] + "." + a[o - 1] : o > 1 ? a[o - 2] + "." + a[o - 1] : t
  }, B.storageTypes = {
    CK: "COOKIE",
    MC: "MICROCOOKIE",
    CL: "COOKIELESS",
    DS: "DOMSTORAGE"
  }, B.persistDataType = {
    GENERAL: "GENERAL",
    TRACKER: "TRACKER"
  };
  var N = function(t, r) {
    var i = B.storageTypes,
      n = this.pers = e.config.storage.toUpperCase(),
      s = new Date,
      a = {
        path: "/",
        domain: B.getRootDomain(),
        secure: !1,
        encode: !0,
        expires: new Date(s.getFullYear() + 20, s.getMonth(), s.getDate()).toGMTString()
      };
    e.ext(this, {
      _storageKey: "_4c_",
      isReady: !1,
      _healthyServices: ["brain"],
      _lastMaint: B.now(),
      _lastSave: B.now(),
      _lastSync: B.now(),
      defaultExpire: 7776e6,
      ready: new B.FSEvent,
      onCommit: new B.FSEvent,
      onSync: new B.FSEvent,
      maxExpire: -1,
      _data: {
        when: B.now(),
        keys: {}
      },
      _keyEvents: {},
      isStale: !1,
      _cThreshold: 2e3,
      _updateTimeout: 6e4,
      isSyncing: !1,
      _serverFails: 0
    }), this.browser = t, t.ready.subscribe(e.proxy(function() {
      t.supportsLocalStorage || n != i.DS ? t.isMobile && n == i.CL && (n = i.MC) : n = i.CK, n == i.CK ? (this.ckie = new B.Cookie(a), this.fr = new B.Frame(t)) : n == i.MC ? (this.ckie = new B.Cookie(a), this.uid = r || this.ckie.get(this._storageKey + "mc_"), this.uid && (this.uid.length > 64 || this.uid.indexOf("{") > -1) && (this.uid = B.generateGUID(), this.ckie.set(this._storageKey + "mc_", this.uid)), this.uid || (this.uid = B.generateGUID(), this.ckie.set(this._storageKey + "mc_", this.uid)), this.cors = new B.CORS(t)) : n == i.CL ? (this.uid = r || t.fp, this.cors = new B.CORS(t)) : n == i.DS && (this._cThreshold = 500, this._updateTimeout = 1e4), this._sync(e.proxy(function() {
        this.get("rid") || (this.uid = this.uid || B.generateGUID(), this.set("rid", this.uid)), this.uid = this.get("rid"), this.setUpdateInterval(this._updateTimeout), this.pers != B.storageTypes.CK && this.pers != B.storageTypes.DS || this._maint(!0), this.fr ? this.fr.ready.subscribe(e.proxy(function() {
          this.ready.fire(this)
        }, this), !0, !0) : this.ready.fire(this)
      }, this))
    }, this), !0, !0), B.Bind(window, "unload", e.proxy(function() {
      this.save(!0)
    }, this))
  };
  N.prototype.upgradeOldStorage = function(r) {
    for (var i = this.ckie, n = ["fsr.r", "fsr.s", "_fsspl_", "fsr.t", "acs.t"], s = !1, a = 0; a < n.length; a++)
      if (i.get(n[a])) {
        s = !0;
        break
      }
    s ? t([e.makeURI("$fs.storageupgrade.js")], e.proxy(function(t) {
      t(this, i, r)
    }, this)) : e.nextTick(r)
  }, N.prototype.watchForChanges = function(t, r, i, n) {
    e.isArray(t) || (t = [t]);
    for (var s = 0; s < t.length; s++) {
      var a = t[s];
      this._keyEvents[a] || (this._keyEvents[a] = new B.FSEvent), this._keyEvents[a].subscribe(r, i, n)
    }
  }, N.prototype.setUpdateInterval = function(t) {
    this._updateTimeout = t, this._updateInterval && clearInterval(this._updateInterval), this._updateInterval = setInterval(e.proxy(function() {
      B.now() - this._lastSync > t && this._sync()
    }, this), Math.min(t / 2, 5e3))
  }, N.prototype._sync = function(t) {
    if (!this.isSyncing) {
      this.isSyncing = !0, t = t || function() {};
      var r, i;
      if (this.pers == B.storageTypes.CK) {
        if (r = this.ckie.get(this._storageKey)) return r = z.decompress(r), this._lastSync = B.now(), i = JSON.parse(r), this._fireChangeEvents(i.keys), i.keys = i.keys || {}, this._data = i, this.onSync.fire(this), this.isSyncing = !1, void e.nextTick(t);
        this.isSyncing = !1, e.nextTick(t)
      } else if (this.pers == B.storageTypes.DS) {
        if (r = localStorage.getItem(this._storageKey)) {
          if (r = z.decompress(r), this._lastSync = B.now(), i = JSON.parse(r), i.keys = i.keys || {}, this._fireChangeEvents(i.keys), this._data = i, e.nextTick(e.proxy(function() {
              this.onSync.fire(this)
            }, this)), B.now() - this._data.when < 3e5) return this.isSyncing = !1, void e.nextTick(t);
          this._lastSync = B.now(), this._data = {
            when: B.now(),
            keys: {}
          }
        }
        this.isSyncing = !1, e.nextTick(t)
      } else {
        if (this._serverFails > 5) return;
        B.Healthy(this.browser, this._healthyServices, e.proxy(function() {
          this.cors.send({
            method: "GET",
            url: e.config.brainUrl + "/state/" + B.siteKey + "/" + this.uid,
            success: e.proxy(function(r) {
              this._lastSync = B.now();
              var i = JSON.parse(r);
              this._fireChangeEvents(i.keys), this._data = i, this.isSyncing = !1, e.nextTick(e.proxy(function() {
                this.onSync.fire(this)
              }, this)), t()
            }, this),
            failure: function() {
              this._lastSync = B.now(), this.isSyncing = !1, this._serverFails++
            }
          })
        }, this))
      }
    }
  }, N.prototype._fireChangeEvents = function(t) {
    var r = this;
    for (var i in t)(!this._data.keys[i] || this._data.keys[i].t < t[i].t) && (this._keyEvents[i] || (this._keyEvents[i] = new B.FSEvent), e.nextTick(function(e) {
      return function() {
        r._keyEvents[e].fire(e, r._data.keys[e], t[e].v)
      }
    }(i)))
  }, N.prototype.save = function(t) {
    if (t) this._commit();
    else {
      var r = B.now();
      !this._svT && this.isStale && (this._svT = setTimeout(e.proxy(this._commit, this), Math.max(0, this._cThreshold - (r - this._lastSave))))
    }
  }, N.prototype._commit = function() {
    clearTimeout(this._svT), this._svT = null, this._lastSave = B.now(), this._data.when = this._lastSave;
    var t = "";
    try {
      t = JSON.stringify(this._data)
    } catch (t) {
      return
    }
    if (this.pers == B.storageTypes.CK) {
      var r = e.ext({}, this._data);
      for (var i in r.keys) delete r.keys[i].t;
      t = JSON.stringify(r), this.ckie.set(this._storageKey, z.compress(t)), this.onCommit.fire(this._data)
    } else if (this.pers == B.storageTypes.DS) localStorage.setItem(this._storageKey, z.compress(t)), this.onCommit.fire(this._data);
    else {
      if (this._serverFails > 5) return;
      B.Healthy(this.browser, this._healthyServices, e.proxy(function() {
        this.cors.send({
          method: "POST",
          url: e.config.brainUrl + "/state/" + B.siteKey + "/" + this.uid,
          data: this._data,
          contentType: "application/json",
          success: e.proxy(function(t) {
            this._lastSync = B.now(), this._data = JSON.parse(t), this.onCommit.fire(this._data)
          }, this),
          failure: e.proxy(function() {
            this._serverFails++
          }, this)
        })
      }, this))
    }
    this.isStale = !1
  }, N.prototype._maint = function(t) {
    var e, r = B.now(),
      i = this._data.keys,
      n = !1;
    if (r - this._lastMaint > 5e3 || t) {
      for (var s in i) e = i[s], r > e.x && (delete i[s], n = !0);
      this._lastMaint = r
    }!n || this.pers != B.storageTypes.CK && this.pers != B.storageTypes.DS || this._commit()
  }, N.prototype.set = function(t, r, i, n, s, a) {
    this._data.keys || (this._data.keys = {});
    var o = this._data.keys[t],
      h = B.now(),
      f = null;
    if (s || (s = B.persistDataType.GENERAL), i)
      if ("number" == typeof i) f = i, this.maxExpire > 0 && this.maxExpire < i && (f = i = this.maxExpire), i = h + i;
      else if (i instanceof Date && (i = i.getTime() + i, this.maxExpire > 0)) {
      var u = i - h;
      u > this.maxExpire && (f = i = this.maxExpire, i = h + i)
    }
    if (this.pers != B.storageTypes.CK && this.pers != B.storageTypes.DS || s != B.persistDataType.TRACKER) {
      if (o) {
        var l = {};
        l[t] = {
          v: r,
          x: i || o.x,
          t: h
        }, this._fireChangeEvents(l), o.v = r, o.x = i || o.x, f && (o.ttl = f), o.t = h
      } else {
        var c = {};
        c[t] = {
          v: r,
          x: i || this.defaultExpire + h,
          t: h
        }, f && (c[t].ttl = f), this._fireChangeEvents(c), this._data.keys[t] = c[t]
      }
      this.isStale = !0, a && this.onCommit.subscribe(a, !0, !1), this._maint(), this.save(!!n)
    } else this.fr && this.fr.trackerReady.subscribe(e.proxy(function() {
      this.fr.broadcast(t, r, i)
    }, this), !0, !0)
  }, N.prototype.get = function(t) {
    if (e.isArray(t)) {
      for (var r = {}, i = 0; i < t.length; i++) r[t[i]] = this.get(t[i]);
      return r
    }
    return this._maint(), this._data.keys || (this._data.keys = {}), (this._data.keys[t] || {
      v: null
    }).v
  }, N.prototype.all = function() {
    return this._data.keys
  }, N.prototype.erase = function(t, r, i) {
    if (e.isArray(t))
      for (var n = 0; n < t.length; n++) this.erase(t[n]);
    else this._maint(), delete this._data.keys[t], r && this.onCommit.subscribe(r, !0, !1), this.pers == B.storageTypes.CL || this.pers == B.storageTypes.MC ? B.Healthy(this.browser, this._healthyServices, e.proxy(function() {
      this.cors.send({
        method: "DELETE",
        url: e.config.brainUrl + "/state/" + B.siteKey + "/" + this.uid + "/" + e.enc(t),
        contentType: "application/json",
        success: e.proxy(function(t) {
          this._lastSync = B.now(), this.onCommit.fire(this._data)
        }, this),
        failure: e.proxy(function() {
          this._serverFails++
        }, this)
      })
    }, this)) : this.save(!!i)
  }, N.prototype.reset = function(t) {
    if (this._data.keys = {}, t && this.onCommit.subscribe(t, !0, !1), this.pers == B.storageTypes.CK) {
      if (this.ckie.kill(this._storageKey), localStorage && e.supportsDomStorage)
        for (var r in localStorage) /^(_fsr|__fsFr)/.test(r) && localStorage.removeItem(r);
      this.onCommit.fire()
    } else this.pers == B.storageTypes.DS ? (localStorage.removeItem(this._storageKey), this.onCommit.fire()) : B.Healthy(this.browser, this._healthyServices, e.proxy(function() {
      this.cors.send({
        method: "DELETE",
        url: e.config.brainUrl + "/state/" + B.siteKey + "/" + this.uid,
        success: e.proxy(function() {
          this._lastSync = B.now() - 1e4, this.onCommit.fire()
        }, this),
        failure: e.proxy(function() {
          this._serverFails++
        }, this)
      })
    }, this))
  }, N.prototype.setMaxKeyExpiration = function(t) {
    this.maxExpire = this.defaultExpire = t;
    var e, r = B.now(),
      i = this._data.keys;
    for (var n in i) {
      e = i[n];
      var s = e.x - r;
      (s > t || e.ttl > t) && (e.ttl = t, e.x && (e.x -= s - t))
    }
    this.save(!0)
  }, N.prototype.getMaxKeyExpiration = function() {
    var t = B.now(),
      e = this._data.keys,
      r = 0;
    for (var i in e) r = Math.max(r, e[i].x - t);
    return r
  };
  var F;
  B.getGlobalStore = function(t, e) {
    return F || (F = new N(t, e)), F
  }, B.FULL_DAY = 864e5, B.now = function() {
    return +new Date
  }, B.startTime = B.now(), B.AjaxTransport = function(t) {
    var r = {
      method: "POST",
      data: {},
      contentType: "application/x-www-form-urlencoded",
      success: function() {},
      failure: function() {}
    };
    this.options = e.ext(r, t)
  }, B.AjaxTransport.prototype.send = function(t) {
    var r = e.ext({}, this.options, t || {});
    window.XDomainRequest && -1 == window.navigator.userAgent.indexOf("MSIE 10") ? this._sendViaXDR(r) : window.XMLHttpRequest && this._sendViaXHR(r), r = null
  }, B.AjaxTransport.prototype.dispose = function() {
    e.dispose(this.options)
  }, B.AjaxTransport.isSupported = function() {
    return !0
  }, B.AjaxTransport.initialize = function(t) {
    t.call(B.AjaxTransport)
  }, B.AjaxTransport.prototype._sendViaXHR = function(t) {
    var r = new window.XMLHttpRequest,
      i = t.contentType ? e.toLowerCase(t.contentType).indexOf("json") > -1 ? "application/json; charset=utf-8" : t.contentType : "application/x-www-form-urlencoded",
      n = e.toLowerCase(i).indexOf("json") > -1,
      s = n ? "GET" == t.method ? e.enc(JSON.stringify(t.data)) : JSON.stringify(t.data) : e.isDefined(t.skipEncode) && !0 === t.skipEncode ? t.data : e.toQueryString(t.data),
      a = t.url;
    t.failure = t.failure || function() {}, "GET" == t.method && s && s.length > 0 && (a.indexOf("?") > -1 ? a += "&" : a += "?", a += s);
    try {
      r.open(t.method, a, !0)
    } catch (t) {
      return
    }
    r.setRequestHeader("Accept", "*/*"), r.setRequestHeader("Content-Type", i), r.timeout = t.timeout || 0, r.onreadystatechange = function(t, e) {
      return function() {
        4 == e.readyState && 200 == e.status ? t.success && t.success.apply(t, [e.responseText]) : 4 == e.readyState && 200 != e.status && t.failure && t.failure.apply(t, [e.responseText])
      }
    }(t, r), r.send(s)
  }, B.AjaxTransport.prototype._sendViaXDR = function(t) {
    var r = e.isDefined(t.skipEncode) && !0 === t.skipEncode && "GET" !== t.method.toUpperCase() ? t.data : e.toQueryString(t.data, null, !1),
      i = t.url;
    t.failure = t.failure || function() {}, "GET" == t.method && r && r.length > 0 && (r = r.replace("?", ""), i.indexOf("?") > -1 ? i += "&" : i += "?", i += r);
    var n = new window.XDomainRequest;
    n.onerror = t.failure || function() {}, n.ontimeout = t.failure || function() {}, n.onprogress = function() {}, n.onload = function(t, e) {
      return function() {
        e.success(t.responseText), t = null, e = null
      }
    }(n, t), n.timeout = 6e4;
    try {
      n.open(t.method, i)
    } catch (e) {
      return void(t.failure && t.failure(e))
    }
    e.nextTick(function() {
      r ? (e.isString(r) || (r = JSON.stringify(r)), n.send(r)) : n.send()
    })
  };
  var U = {
    Util: {
      stringToByteArray: function(t) {
        var e, r, i = t.split("");
        for (e = 0, r = i.length; e < r; e++) i[e] = (255 & i[e].charCodeAt(0)) >>> 0;
        return i
      }
    }
  };
  U.CompressionMethod = {
    DEFLATE: 8,
    RESERVED: 15
  }, U.BitStream = function(t, e) {
    if (this.index = "number" == typeof e ? e : 0, this.bitindex = 0, this.buffer = t instanceof(_ ? Uint8Array : Array) ? t : new(_ ? Uint8Array : Array)(U.BitStream.DefaultBlockSize), 2 * this.buffer.length <= this.index) throw new Error("invalid index");
    this.buffer.length <= this.index && this.expandBuffer()
  }, U.BitStream.DefaultBlockSize = 32768, U.BitStream.prototype.expandBuffer = function() {
    var t, e = this.buffer,
      r = e.length,
      i = new(_ ? Uint8Array : Array)(r << 1);
    if (_) i.set(e);
    else
      for (t = 0; t < r; ++t) i[t] = e[t];
    return this.buffer = i
  }, U.BitStream.prototype.writeBits = function(t, e, r) {
    var i, n = this.buffer,
      s = this.index,
      a = this.bitindex,
      o = n[s];
    if (r && e > 1 && (t = e > 8 ? function(t) {
        return U.BitStream.ReverseTable[255 & t] << 24 | U.BitStream.ReverseTable[t >>> 8 & 255] << 16 | U.BitStream.ReverseTable[t >>> 16 & 255] << 8 | U.BitStream.ReverseTable[t >>> 24 & 255]
      }(t) >> 32 - e : U.BitStream.ReverseTable[t] >> 8 - e), e + a < 8) o = o << e | t, a += e;
    else
      for (i = 0; i < e; ++i) o = o << 1 | t >> e - i - 1 & 1, 8 == ++a && (a = 0, n[s++] = U.BitStream.ReverseTable[o], o = 0, s === n.length && (n = this.expandBuffer()));
    n[s] = o, this.buffer = n, this.bitindex = a, this.index = s
  }, U.BitStream.prototype.finish = function() {
    var t, e = this.buffer,
      r = this.index;
    return this.bitindex > 0 && (e[r] <<= 8 - this.bitindex, e[r] = U.BitStream.ReverseTable[e[r]], r++), _ ? t = e.subarray(0, r) : (e.length = r, t = e), t
  }, U.BitStream.ReverseTable = function(t) {
    return t
  }(function() {
    var t, e = new(_ ? Uint8Array : Array)(256);
    for (t = 0; t < 256; ++t) e[t] = function(t) {
      var e = t,
        r = 7;
      for (t >>>= 1; t; t >>>= 1) e <<= 1, e |= 1 & t, --r;
      return (e << r & 255) >>> 0
    }(t);
    return e
  }()), U.Huffman = {}, U.Huffman.buildHuffmanTable = function(t) {
    var e, r, i, n, s, a, o, h, f, u, l, c = t.length,
      p = 0,
      d = Number.POSITIVE_INFINITY;
    for (h = 0, f = c; h < f; ++h) t[h] > p && (p = t[h]), t[h] < d && (d = t[h]);
    for (e = 1 << p, r = new(_ ? Uint32Array : Array)(e), i = 1, n = 0, s = 2; i <= p;) {
      for (h = 0; h < c; ++h)
        if (t[h] === i) {
          for (a = 0, o = n, u = 0; u < i; ++u) a = a << 1 | 1 & o, o >>= 1;
          for (l = i << 16 | h, u = a; u < e; u += s) r[u] = l;
          ++n
        }++i, n <<= 1, s <<= 1
    }
    return [r, p, d]
  }, U.Heap = function(t) {
    this.buffer = new(_ ? Uint16Array : Array)(2 * t), this.length = 0
  }, U.Heap.prototype.getParent = function(t) {
    return 2 * ((t - 2) / 4 | 0)
  }, U.Heap.prototype.getChild = function(t) {
    return 2 * t + 2
  }, U.Heap.prototype.push = function(t, e) {
    var r, i, n, s = this.buffer;
    for (r = this.length, s[this.length++] = e, s[this.length++] = t; r > 0 && (i = this.getParent(r), s[r] > s[i]);) n = s[r], s[r] = s[i], s[i] = n, n = s[r + 1], s[r + 1] = s[i + 1], s[i + 1] = n, r = i;
    return this.length
  }, U.Heap.prototype.pop = function() {
    var t, e, r, i, n, s = this.buffer;
    for (e = s[0], t = s[1], this.length -= 2, s[0] = s[this.length], s[1] = s[this.length + 1], n = 0;;) {
      if ((i = this.getChild(n)) >= this.length) break;
      if (i + 2 < this.length && s[i + 2] > s[i] && (i += 2), !(s[i] > s[n])) break;
      r = s[n], s[n] = s[i], s[i] = r, r = s[n + 1], s[n + 1] = s[i + 1], s[i + 1] = r, n = i
    }
    return {
      index: t,
      value: e,
      length: this.length
    }
  }, U.RawDeflate = function(t, e) {
    this.compressionType = U.RawDeflate.CompressionType.DYNAMIC, this.lazy = 0, this.freqsLitLen, this.freqsDist, this.input = _ && t instanceof Array ? new Uint8Array(t) : t, this.output, this.op = 0, e && (e.lazy && (this.lazy = e.lazy), "number" == typeof e.compressionType && (this.compressionType = e.compressionType), e.outputBuffer && (this.output = _ && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), "number" == typeof e.outputIndex && (this.op = e.outputIndex)), this.output || (this.output = new(_ ? Uint8Array : Array)(32768))
  }, U.RawDeflate.CompressionType = {
    NONE: 0,
    FIXED: 1,
    DYNAMIC: 2,
    RESERVED: 3
  }, U.RawDeflate.Lz77MinLength = 3, U.RawDeflate.Lz77MaxLength = 258, U.RawDeflate.WindowSize = 32768, U.RawDeflate.MaxCodeLength = 16, U.RawDeflate.HUFMAX = 286, U.RawDeflate.FixedHuffmanTable = function() {
    var t, e = [];
    for (t = 0; t < 288; t++) switch (!0) {
      case t <= 143:
        e.push([t + 48, 8]);
        break;
      case t <= 255:
        e.push([t - 144 + 400, 9]);
        break;
      case t <= 279:
        e.push([t - 256 + 0, 7]);
        break;
      case t <= 287:
        e.push([t - 280 + 192, 8]);
        break;
      default:
        throw "invalid literal: " + t
    }
    return e
  }(), U.RawDeflate.prototype.compress = function() {
    var t, e, r, i = this.input;
    switch (this.compressionType) {
      case U.RawDeflate.CompressionType.NONE:
        for (e = 0, r = i.length; e < r;) t = _ ? i.subarray(e, e + 65535) : i.slice(e, e + 65535), e += t.length, this.makeNocompressBlock(t, e === r);
        break;
      case U.RawDeflate.CompressionType.FIXED:
        this.output = this.makeFixedHuffmanBlock(i, !0), this.op = this.output.length;
        break;
      case U.RawDeflate.CompressionType.DYNAMIC:
        this.output = this.makeDynamicHuffmanBlock(i, !0), this.op = this.output.length;
        break;
      default:
        throw "invalid compression type"
    }
    return this.output
  }, U.RawDeflate.prototype.makeNocompressBlock = function(t, e) {
    var r, i, n, s, a, o, h = this.output,
      f = this.op;
    if (_) {
      for (h = new Uint8Array(this.output.buffer); h.length <= f + t.length + 5;) h = new Uint8Array(h.length << 1);
      h.set(this.output)
    }
    if (r = e ? 1 : 0, i = U.RawDeflate.CompressionType.NONE, h[f++] = r | i << 1, n = t.length, s = 65536 + ~n & 65535, h[f++] = 255 & n, h[f++] = n >>> 8 & 255, h[f++] = 255 & s, h[f++] = s >>> 8 & 255, _) h.set(t, f), f += t.length, h = h.subarray(0, f);
    else {
      for (a = 0, o = t.length; a < o; ++a) h[f++] = t[a];
      h.length = f
    }
    return this.op = f, this.output = h, h
  }, U.RawDeflate.prototype.makeFixedHuffmanBlock = function(t, e) {
    var r, i, n, s = new U.BitStream(_ ? new Uint8Array(this.output.buffer) : this.output, this.op);
    return r = e ? 1 : 0, i = U.RawDeflate.CompressionType.FIXED, s.writeBits(r, 1, !0), s.writeBits(i, 2, !0), n = this.lz77(t), this.fixedHuffman(n, s), s.finish()
  }, U.RawDeflate.prototype.makeDynamicHuffmanBlock = function(t, e) {
    var r, i, n, s, a, o, h, f, u, l, c, p, d, g, y, w, b, m = new U.BitStream(_ ? new Uint8Array(this.output.buffer) : this.output, this.op),
      v = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      x = new Array(19);
    for (r = e ? 1 : 0, i = U.RawDeflate.CompressionType.DYNAMIC, m.writeBits(r, 1, !0), m.writeBits(i, 2, !0), n = this.lz77(t), h = this.getLengths_(this.freqsLitLen, 15), f = this.getCodesFromLengths_(h), u = this.getLengths_(this.freqsDist, 7), l = this.getCodesFromLengths_(u),
      s = 286; s > 257 && 0 === h[s - 1]; s--);
    for (a = 30; a > 1 && 0 === u[a - 1]; a--);
    for (c = this.getTreeSymbols_(s, h, a, u), p = this.getLengths_(c.freqs, 7), w = 0; w < 19; w++) x[w] = p[v[w]];
    for (o = 19; o > 4 && 0 === x[o - 1]; o--);
    for (d = this.getCodesFromLengths_(p), m.writeBits(s - 257, 5, !0), m.writeBits(a - 1, 5, !0), m.writeBits(o - 4, 4, !0), w = 0; w < o; w++) m.writeBits(x[w], 3, !0);
    for (w = 0, b = c.codes.length; w < b; w++)
      if (g = c.codes[w], m.writeBits(d[g], p[g], !0), g >= 16) {
        switch (w++, g) {
          case 16:
            y = 2;
            break;
          case 17:
            y = 3;
            break;
          case 18:
            y = 7;
            break;
          default:
            throw "invalid code: " + g
        }
        m.writeBits(c.codes[w], y, !0)
      }
    return this.dynamicHuffman(n, [f, h], [l, u], m), m.finish()
  }, U.RawDeflate.prototype.dynamicHuffman = function(t, e, r, i) {
    var n, s, a, o, h, f, u, l;
    for (h = e[0], f = e[1], u = r[0], l = r[1], n = 0, s = t.length; n < s; ++n)
      if (a = t[n], i.writeBits(h[a], f[a], !0), a > 256) i.writeBits(t[++n], t[++n], !0), o = t[++n], i.writeBits(u[o], l[o], !0), i.writeBits(t[++n], t[++n], !0);
      else if (256 === a) break;
    return i
  }, U.RawDeflate.prototype.fixedHuffman = function(t, e) {
    var r, i, n;
    for (r = 0, i = t.length; r < i; r++)
      if (n = t[r], U.BitStream.prototype.writeBits.apply(e, U.RawDeflate.FixedHuffmanTable[n]), n > 256) e.writeBits(t[++r], t[++r], !0), e.writeBits(t[++r], 5), e.writeBits(t[++r], t[++r], !0);
      else if (256 === n) break;
    return e
  }, U.RawDeflate.Lz77Match = function(t, e) {
    this.length = t, this.backwardDistance = e
  }, U.RawDeflate.Lz77Match.LengthCodeTable = function(t) {
    return _ ? new Uint32Array(t) : t
  }(function() {
    var t, e, r = [];
    for (t = 3; t <= 258; t++) e = function(t) {
      switch (!0) {
        case 3 === t:
          return [257, t - 3, 0];
        case 4 === t:
          return [258, t - 4, 0];
        case 5 === t:
          return [259, t - 5, 0];
        case 6 === t:
          return [260, t - 6, 0];
        case 7 === t:
          return [261, t - 7, 0];
        case 8 === t:
          return [262, t - 8, 0];
        case 9 === t:
          return [263, t - 9, 0];
        case 10 === t:
          return [264, t - 10, 0];
        case t <= 12:
          return [265, t - 11, 1];
        case t <= 14:
          return [266, t - 13, 1];
        case t <= 16:
          return [267, t - 15, 1];
        case t <= 18:
          return [268, t - 17, 1];
        case t <= 22:
          return [269, t - 19, 2];
        case t <= 26:
          return [270, t - 23, 2];
        case t <= 30:
          return [271, t - 27, 2];
        case t <= 34:
          return [272, t - 31, 2];
        case t <= 42:
          return [273, t - 35, 3];
        case t <= 50:
          return [274, t - 43, 3];
        case t <= 58:
          return [275, t - 51, 3];
        case t <= 66:
          return [276, t - 59, 3];
        case t <= 82:
          return [277, t - 67, 4];
        case t <= 98:
          return [278, t - 83, 4];
        case t <= 114:
          return [279, t - 99, 4];
        case t <= 130:
          return [280, t - 115, 4];
        case t <= 162:
          return [281, t - 131, 5];
        case t <= 194:
          return [282, t - 163, 5];
        case t <= 226:
          return [283, t - 195, 5];
        case t <= 257:
          return [284, t - 227, 5];
        case 258 === t:
          return [285, t - 258, 0];
        default:
          throw "invalid length: " + t
      }
    }(t), r[t] = e[2] << 24 | e[1] << 16 | e[0];
    return r
  }()), U.RawDeflate.Lz77Match.prototype.getDistanceCode_ = function(t) {
    var e;
    switch (!0) {
      case 1 === t:
        e = [0, t - 1, 0];
        break;
      case 2 === t:
        e = [1, t - 2, 0];
        break;
      case 3 === t:
        e = [2, t - 3, 0];
        break;
      case 4 === t:
        e = [3, t - 4, 0];
        break;
      case t <= 6:
        e = [4, t - 5, 1];
        break;
      case t <= 8:
        e = [5, t - 7, 1];
        break;
      case t <= 12:
        e = [6, t - 9, 2];
        break;
      case t <= 16:
        e = [7, t - 13, 2];
        break;
      case t <= 24:
        e = [8, t - 17, 3];
        break;
      case t <= 32:
        e = [9, t - 25, 3];
        break;
      case t <= 48:
        e = [10, t - 33, 4];
        break;
      case t <= 64:
        e = [11, t - 49, 4];
        break;
      case t <= 96:
        e = [12, t - 65, 5];
        break;
      case t <= 128:
        e = [13, t - 97, 5];
        break;
      case t <= 192:
        e = [14, t - 129, 6];
        break;
      case t <= 256:
        e = [15, t - 193, 6];
        break;
      case t <= 384:
        e = [16, t - 257, 7];
        break;
      case t <= 512:
        e = [17, t - 385, 7];
        break;
      case t <= 768:
        e = [18, t - 513, 8];
        break;
      case t <= 1024:
        e = [19, t - 769, 8];
        break;
      case t <= 1536:
        e = [20, t - 1025, 9];
        break;
      case t <= 2048:
        e = [21, t - 1537, 9];
        break;
      case t <= 3072:
        e = [22, t - 2049, 10];
        break;
      case t <= 4096:
        e = [23, t - 3073, 10];
        break;
      case t <= 6144:
        e = [24, t - 4097, 11];
        break;
      case t <= 8192:
        e = [25, t - 6145, 11];
        break;
      case t <= 12288:
        e = [26, t - 8193, 12];
        break;
      case t <= 16384:
        e = [27, t - 12289, 12];
        break;
      case t <= 24576:
        e = [28, t - 16385, 13];
        break;
      case t <= 32768:
        e = [29, t - 24577, 13];
        break;
      default:
        throw "invalid distance"
    }
    return e
  }, U.RawDeflate.Lz77Match.prototype.toLz77Array = function() {
    var t, e = this.length,
      r = this.backwardDistance,
      i = [],
      n = 0;
    return t = U.RawDeflate.Lz77Match.LengthCodeTable[e], i[n++] = 65535 & t, i[n++] = t >> 16 & 255, i[n++] = t >> 24, t = this.getDistanceCode_(r), i[n++] = t[0], i[n++] = t[1], i[n++] = t[2], i
  }, U.RawDeflate.prototype.lz77 = function(t) {
    function e(t, e) {
      var r, i, n = t.toLz77Array();
      for (r = 0, i = n.length; r < i; ++r) p[d++] = n[r];
      y[n[0]]++, w[n[3]]++, g = t.length + e - 1, f = null
    }
    var r, i, n, s, a, o, h, f, u, l = {},
      c = U.RawDeflate.WindowSize,
      p = _ ? new Uint16Array(2 * t.length) : [],
      d = 0,
      g = 0,
      y = new(_ ? Uint32Array : Array)(286),
      w = new(_ ? Uint32Array : Array)(30),
      b = this.lazy;
    if (!_) {
      for (n = 0; n <= 285;) y[n++] = 0;
      for (n = 0; n <= 29;) w[n++] = 0
    }
    for (y[256] = 1, r = 0, i = t.length; r < i; ++r) {
      for (a = 0, n = 0, s = U.RawDeflate.Lz77MinLength; n < s && r + n !== i; ++n) a = a << 8 | t[r + n];
      if (void 0 === l[a] && (l[a] = []), o = l[a], g-- > 0) o.push(r);
      else {
        for (; o.length > 0 && r - o[0] > c;) o.shift();
        if (r + U.RawDeflate.Lz77MinLength >= i) {
          for (f && e(f, -1), n = 0, s = i - r; n < s; ++n) u = t[r + n], p[d++] = u, ++y[u];
          break
        }
        o.length > 0 ? (h = this.searchLongestMatch_(t, r, o), f ? f.length < h.length ? (u = t[r - 1], p[d++] = u, ++y[u], e(h, 0)) : e(f, -1) : h.length < b ? f = h : e(h, 0)) : f ? e(f, -1) : (u = t[r], p[d++] = u, ++y[u]), o.push(r)
      }
    }
    return p[d++] = 256, y[256]++, this.freqsLitLen = y, this.freqsDist = w, _ ? p.subarray(0, d) : p
  }, U.RawDeflate.prototype.searchLongestMatch_ = function(t, e, r) {
    var i, n, s, a, o, h, f = 0,
      u = t.length;
    t: for (a = 0, h = r.length; a < h; a++) {
      if (i = r[h - a - 1], s = U.RawDeflate.Lz77MinLength, f > U.RawDeflate.Lz77MinLength) {
        for (o = f; o > U.RawDeflate.Lz77MinLength; o--)
          if (t[i + o - 1] !== t[e + o - 1]) continue t;
        s = f
      }
      for (; s < U.RawDeflate.Lz77MaxLength && e + s < u && t[i + s] === t[e + s];) ++s;
      if (s > f && (n = i, f = s), s === U.RawDeflate.Lz77MaxLength) break
    }
    return new U.RawDeflate.Lz77Match(f, e - n)
  }, U.RawDeflate.prototype.getTreeSymbols_ = function(t, e, r, i) {
    var n, s, a, o, h, f, u = new(_ ? Uint32Array : Array)(t + r),
      l = new(_ ? Uint32Array : Array)(316),
      c = new(_ ? Uint8Array : Array)(19);
    for (s = 0, n = 0; n < t; n++) u[s++] = e[n];
    for (n = 0; n < r; n++) u[s++] = i[n];
    if (!_)
      for (n = 0, o = c.length; n < o; ++n) c[n] = 0;
    for (h = 0, n = 0, o = u.length; n < o; n += s) {
      for (s = 1; n + s < o && u[n + s] === u[n]; ++s);
      if (a = s, 0 === u[n])
        if (a < 3)
          for (; a-- > 0;) l[h++] = 0, c[0]++;
        else
          for (; a > 0;) f = a < 138 ? a : 138, f > a - 3 && f < a && (f = a - 3), f <= 10 ? (l[h++] = 17, l[h++] = f - 3, c[17]++) : (l[h++] = 18, l[h++] = f - 11, c[18]++), a -= f;
      else if (l[h++] = u[n], c[u[n]]++, --a < 3)
        for (; a-- > 0;) l[h++] = u[n], c[u[n]]++;
      else
        for (; a > 0;) f = a < 6 ? a : 6, f > a - 3 && f < a && (f = a - 3), l[h++] = 16, l[h++] = f - 3, c[16]++, a -= f
    }
    return {
      codes: _ ? l.subarray(0, h) : l.slice(0, h),
      freqs: c
    }
  }, U.RawDeflate.prototype.getLengths_ = function(t, e) {
    var r, i, n, s, a, o = t.length,
      h = new U.Heap(2 * U.RawDeflate.HUFMAX),
      f = new(_ ? Uint8Array : Array)(o);
    if (!_)
      for (s = 0; s < o; s++) f[s] = 0;
    for (s = 0; s < o; ++s) t[s] > 0 && h.push(s, t[s]);
    if (r = new Array(h.length / 2), i = new(_ ? Uint32Array : Array)(h.length / 2), 1 === r.length) return f[h.pop().index] = 1, f;
    for (s = 0, a = h.length / 2; s < a; ++s) r[s] = h.pop(), i[s] = r[s].value;
    for (n = this.reversePackageMerge_(i, i.length, e), s = 0, a = r.length; s < a; ++s) f[r[s].index] = n[s];
    return f
  }, U.RawDeflate.prototype.reversePackageMerge_ = function(t, e, r) {
    function i(t) {
      var r = p[t][d[t]];
      r === e ? (i(t + 1), i(t + 1)) : --l[r], ++d[t]
    }
    var n, s, a, o, h, f = new(_ ? Uint16Array : Array)(r),
      u = new(_ ? Uint8Array : Array)(r),
      l = new(_ ? Uint8Array : Array)(e),
      c = new Array(r),
      p = new Array(r),
      d = new Array(r),
      g = (1 << r) - e,
      y = 1 << r - 1;
    for (f[r - 1] = e, s = 0; s < r; ++s) g < y ? u[s] = 0 : (u[s] = 1, g -= y), g <<= 1, f[r - 2 - s] = (f[r - 1 - s] / 2 | 0) + e;
    for (f[0] = u[0], c[0] = new Array(f[0]), p[0] = new Array(f[0]), s = 1; s < r; ++s) f[s] > 2 * f[s - 1] + u[s] && (f[s] = 2 * f[s - 1] + u[s]), c[s] = new Array(f[s]), p[s] = new Array(f[s]);
    for (n = 0; n < e; ++n) l[n] = r;
    for (a = 0; a < f[r - 1]; ++a) c[r - 1][a] = t[a], p[r - 1][a] = a;
    for (n = 0; n < r; ++n) d[n] = 0;
    for (1 === u[r - 1] && (--l[0], ++d[r - 1]), s = r - 2; s >= 0; --s) {
      for (n = 0, o = 0, h = d[s + 1], a = 0; a < f[s]; a++) o = c[s + 1][h] + c[s + 1][h + 1], o > t[n] ? (c[s][a] = o, p[s][a] = e, h += 2) : (c[s][a] = t[n], p[s][a] = n, ++n);
      d[s] = 0, 1 === u[s] && i(s)
    }
    return l
  }, U.RawDeflate.prototype.getCodesFromLengths_ = function(t) {
    var e, r, i, n, s = new(_ ? Uint16Array : Array)(t.length),
      a = [],
      o = [],
      h = 0;
    for (e = 0, r = t.length; e < r; e++) a[t[e]] = 1 + (0 | a[t[e]]);
    for (e = 1, r = U.RawDeflate.MaxCodeLength; e <= r; e++) o[e] = h, h += 0 | a[e], h <<= 1;
    for (e = 0, r = t.length; e < r; e++)
      for (h = o[t[e]], o[t[e]] += 1, s[e] = 0, i = 0, n = t[e]; i < n; i++) s[e] = s[e] << 1 | 1 & h, h >>>= 1;
    return s
  };
  var M = U.Huffman.buildHuffmanTable;
  U.RawInflate = function(t, e) {
    switch (this.buffer, this.blocks = [], this.bufferSize = ZLIB_RAW_INFLATE_BUFFER_SIZE, this.totalpos = 0, this.ip = 0, this.bitsbuf = 0, this.bitsbuflen = 0, this.input = _ ? new Uint8Array(t) : t, this.output, this.op, this.bfinal = !1, this.bufferType = U.RawInflate.BufferType.ADAPTIVE, this.resize = !1, this.prev, !e && (e = {}) || (e.index && (this.ip = e.index), e.bufferSize && (this.bufferSize = e.bufferSize), e.bufferType && (this.bufferType = e.bufferType), e.resize && (this.resize = e.resize)), this.bufferType) {
      case U.RawInflate.BufferType.BLOCK:
        this.op = U.RawInflate.MaxBackwardLength, this.output = new(_ ? Uint8Array : Array)(U.RawInflate.MaxBackwardLength + this.bufferSize + U.RawInflate.MaxCopyLength);
        break;
      case U.RawInflate.BufferType.ADAPTIVE:
        this.op = 0, this.output = new(_ ? Uint8Array : Array)(this.bufferSize), this.expandBuffer = this.expandBufferAdaptive, this.concatBuffer = this.concatBufferDynamic, this.decodeHuffman = this.decodeHuffmanAdaptive;
        break;
      default:
        throw new Error("invalid inflate mode")
    }
  }, U.RawInflate.BufferType = {
    BLOCK: 0,
    ADAPTIVE: 1
  }, U.RawInflate.prototype.decompress = function() {
    for (; !this.bfinal;) this.parseBlock();
    return this.concatBuffer()
  }, U.RawInflate.MaxBackwardLength = 32768, U.RawInflate.MaxCopyLength = 258, U.RawInflate.Order = function(t) {
    return _ ? new Uint16Array(t) : t
  }([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), U.RawInflate.LengthCodeTable = function(t) {
    return _ ? new Uint16Array(t) : t
  }([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258]), U.RawInflate.LengthExtraTable = function(t) {
    return _ ? new Uint8Array(t) : t
  }([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0]), U.RawInflate.DistCodeTable = function(t) {
    return _ ? new Uint16Array(t) : t
  }([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]), U.RawInflate.DistExtraTable = function(t) {
    return _ ? new Uint8Array(t) : t
  }([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), U.RawInflate.FixedLiteralLengthTable = function(t) {
    return t
  }(function() {
    var t, e, r = new(_ ? Uint8Array : Array)(288);
    for (t = 0, e = r.length; t < e; ++t) r[t] = t <= 143 ? 8 : t <= 255 ? 9 : t <= 279 ? 7 : 8;
    return M(r)
  }()), U.RawInflate.FixedDistanceTable = function(t) {
    return t
  }(function() {
    var t, e, r = new(_ ? Uint8Array : Array)(30);
    for (t = 0, e = r.length; t < e; ++t) r[t] = 5;
    return M(r)
  }()), U.RawInflate.prototype.parseBlock = function() {
    var t = this.readBits(3);
    switch (1 & t && (this.bfinal = !0), t >>>= 1) {
      case 0:
        this.parseUncompressedBlock();
        break;
      case 1:
        this.parseFixedHuffmanBlock();
        break;
      case 2:
        this.parseDynamicHuffmanBlock();
        break;
      default:
        throw new Error("unknown BTYPE: " + t)
    }
  }, U.RawInflate.prototype.readBits = function(t) {
    for (var e, r = this.bitsbuf, i = this.bitsbuflen, n = this.input, s = this.ip, a = n.length; i < t;) {
      if (s >= a) throw new Error("input buffer is broken");
      r |= n[s++] << i, i += 8
    }
    return e = r & (1 << t) - 1, r >>>= t, i -= t, this.bitsbuf = r, this.bitsbuflen = i, this.ip = s, e
  }, U.RawInflate.prototype.readCodeByTable = function(t) {
    for (var e, r, i = this.bitsbuf, n = this.bitsbuflen, s = this.input, a = this.ip, o = s.length, h = t[0], f = t[1]; n < f && !(a >= o);) i |= s[a++] << n, n += 8;
    return e = h[i & (1 << f) - 1], r = e >>> 16, this.bitsbuf = i >> r, this.bitsbuflen = n - r, this.ip = a, 65535 & e
  }, U.RawInflate.prototype.parseUncompressedBlock = function() {
    var t, e, r, i = this.input,
      n = this.ip,
      s = this.output,
      a = this.op,
      o = i.length,
      h = s.length;
    if (this.bitsbuf = 0, this.bitsbuflen = 0, n + 1 >= o) throw new Error("invalid uncompressed block header: LEN");
    if (t = i[n++] | i[n++] << 8, n + 1 >= o) throw new Error("invalid uncompressed block header: NLEN");
    if (e = i[n++] | i[n++] << 8, t === ~e) throw new Error("invalid uncompressed block header: length verify");
    if (n + t > i.length) throw new Error("input buffer is broken");
    switch (this.bufferType) {
      case U.RawInflate.BufferType.BLOCK:
        for (; a + t > s.length;) {
          if (r = h - a, t -= r, _) s.set(i.subarray(n, n + r), a), a += r, n += r;
          else
            for (; r--;) s[a++] = i[n++];
          this.op = a, s = this.expandBuffer(), a = this.op
        }
        break;
      case U.RawInflate.BufferType.ADAPTIVE:
        for (; a + t > s.length;) s = this.expandBuffer({
          fixRatio: 2
        });
        break;
      default:
        throw new Error("invalid inflate mode")
    }
    if (_) s.set(i.subarray(n, n + t), a), a += t, n += t;
    else
      for (; t--;) s[a++] = i[n++];
    this.ip = n, this.op = a, this.output = s
  }, U.RawInflate.prototype.parseFixedHuffmanBlock = function() {
    this.decodeHuffman(U.RawInflate.FixedLiteralLengthTable, U.RawInflate.FixedDistanceTable)
  }, U.RawInflate.prototype.parseDynamicHuffmanBlock = function() {
    function t(t, e, r) {
      var i, n, s, a = this.prev;
      for (s = 0; s < t;) switch (i = this.readCodeByTable(e)) {
        case 16:
          for (n = 3 + this.readBits(2); n--;) r[s++] = a;
          break;
        case 17:
          for (n = 3 + this.readBits(3); n--;) r[s++] = 0;
          a = 0;
          break;
        case 18:
          for (n = 11 + this.readBits(7); n--;) r[s++] = 0;
          a = 0;
          break;
        default:
          r[s++] = i, a = i
      }
      return this.prev = a, r
    }
    var e, r, i, n, s = this.readBits(5) + 257,
      a = this.readBits(5) + 1,
      o = this.readBits(4) + 4,
      h = new(_ ? Uint8Array : Array)(U.RawInflate.Order.length);
    for (n = 0; n < o; ++n) h[U.RawInflate.Order[n]] = this.readBits(3);
    if (!_)
      for (n = o, o = h.length; n < o; ++n) h[U.RawInflate.Order[n]] = 0;
    e = M(h), r = new(_ ? Uint8Array : Array)(s), i = new(_ ? Uint8Array : Array)(a), this.prev = 0, this.decodeHuffman(M(t.call(this, s, e, r)), M(t.call(this, a, e, i)))
  }, U.RawInflate.prototype.decodeHuffman = function(t, e) {
    var r = this.output,
      i = this.op;
    this.currentLitlenTable = t;
    for (var n, s, a, o, h = r.length - U.RawInflate.MaxCopyLength; 256 !== (n = this.readCodeByTable(t));)
      if (n < 256) i >= h && (this.op = i, r = this.expandBuffer(), i = this.op), r[i++] = n;
      else
        for (s = n - 257, o = U.RawInflate.LengthCodeTable[s], U.RawInflate.LengthExtraTable[s] > 0 && (o += this.readBits(U.RawInflate.LengthExtraTable[s])), n = this.readCodeByTable(e), a = U.RawInflate.DistCodeTable[n], U.RawInflate.DistExtraTable[n] > 0 && (a += this.readBits(U.RawInflate.DistExtraTable[n])), i >= h && (this.op = i, r = this.expandBuffer(), i = this.op); o--;) r[i] = r[i++ - a];
    for (; this.bitsbuflen >= 8;) this.bitsbuflen -= 8, this.ip--;
    this.op = i
  }, U.RawInflate.prototype.decodeHuffmanAdaptive = function(t, e) {
    var r = this.output,
      i = this.op;
    this.currentLitlenTable = t;
    for (var n, s, a, o, h = r.length; 256 !== (n = this.readCodeByTable(t));)
      if (n < 256) i >= h && (r = this.expandBuffer(), h = r.length), r[i++] = n;
      else
        for (s = n - 257, o = U.RawInflate.LengthCodeTable[s], U.RawInflate.LengthExtraTable[s] > 0 && (o += this.readBits(U.RawInflate.LengthExtraTable[s])), n = this.readCodeByTable(e), a = U.RawInflate.DistCodeTable[n], U.RawInflate.DistExtraTable[n] > 0 && (a += this.readBits(U.RawInflate.DistExtraTable[n])), i + o > h && (r = this.expandBuffer(), h = r.length); o--;) r[i] = r[i++ - a];
    for (; this.bitsbuflen >= 8;) this.bitsbuflen -= 8, this.ip--;
    this.op = i
  }, U.RawInflate.prototype.expandBuffer = function(t) {
    var e, r, i = new(_ ? Uint8Array : Array)(this.op - U.RawInflate.MaxBackwardLength),
      n = this.op - U.RawInflate.MaxBackwardLength,
      s = this.output;
    if (_) i.set(s.subarray(U.RawInflate.MaxBackwardLength, i.length));
    else
      for (e = 0, r = i.length; e < r; ++e) i[e] = s[e + U.RawInflate.MaxBackwardLength];
    if (this.blocks.push(i), this.totalpos += i.length, _) s.set(s.subarray(n, n + U.RawInflate.MaxBackwardLength));
    else
      for (e = 0; e < U.RawInflate.MaxBackwardLength; ++e) s[e] = s[n + e];
    return this.op = U.RawInflate.MaxBackwardLength, s
  }, U.RawInflate.prototype.expandBufferAdaptive = function(t) {
    var e, r, i, n, s = this.input.length / this.ip + 1 | 0,
      a = this.input,
      o = this.output;
    return t && ("number" == typeof t.fixRatio && (s = t.fixRatio), "number" == typeof t.addRatio && (s += t.addRatio)), s < 2 ? (r = (a.length - this.ip) / this.currentLitlenTable[2], n = r / 2 * 258 | 0, i = n < o.length ? o.length + n : o.length << 1) : i = o.length * s, _ ? (e = new Uint8Array(i), e.set(o)) : e = o, this.output = e, this.output
  }, U.RawInflate.prototype.concatBuffer = function() {
    var t, e, r, i, n, s = 0,
      a = this.totalpos + (this.op - U.RawInflate.MaxBackwardLength),
      o = this.output,
      h = this.blocks,
      f = new(_ ? Uint8Array : Array)(a);
    if (0 === h.length) return _ ? this.output.subarray(U.RawInflate.MaxBackwardLength, this.op) : this.output.slice(U.RawInflate.MaxBackwardLength, this.op);
    for (e = 0, r = h.length; e < r; ++e)
      for (t = h[e], i = 0, n = t.length; i < n; ++i) f[s++] = t[i];
    for (e = U.RawInflate.MaxBackwardLength, r = this.op; e < r; ++e) f[s++] = o[e];
    return this.blocks = [], this.buffer = f, this.buffer
  }, U.RawInflate.prototype.concatBufferDynamic = function() {
    var t, e = this.op;
    return _ ? this.resize ? (t = new Uint8Array(e), t.set(this.output.subarray(0, e))) : t = this.output.subarray(0, e) : (this.output.length > e && (this.output.length = e), t = this.output), this.buffer = t, this.buffer
  }, U.RawInflate = function(t, e) {
    switch (this.buffer, this.blocks = [], this.bufferSize = 32768, this.totalpos = 0, this.ip = 0, this.bitsbuf = 0, this.bitsbuflen = 0, this.input = _ ? new Uint8Array(t) : t, this.output, this.op, this.bfinal = !1, this.bufferType = U.RawInflate.BufferType.ADAPTIVE, this.resize = !1, this.prev, !e && (e = {}) || (e.index && (this.ip = e.index), e.bufferSize && (this.bufferSize = e.bufferSize), e.bufferType && (this.bufferType = e.bufferType), e.resize && (this.resize = e.resize)), this.bufferType) {
      case U.RawInflate.BufferType.BLOCK:
        this.op = U.RawInflate.MaxBackwardLength, this.output = new(_ ? Uint8Array : Array)(U.RawInflate.MaxBackwardLength + this.bufferSize + U.RawInflate.MaxCopyLength);
        break;
      case U.RawInflate.BufferType.ADAPTIVE:
        this.op = 0, this.output = new(_ ? Uint8Array : Array)(this.bufferSize), this.expandBuffer = this.expandBufferAdaptive, this.concatBuffer = this.concatBufferDynamic, this.decodeHuffman = this.decodeHuffmanAdaptive
    }
  }, U.RawInflate.BufferType = {
    BLOCK: 0,
    ADAPTIVE: 1
  }, U.RawInflate.prototype.decompress = function() {
    for (; !this.bfinal;) this.parseBlock();
    return this.concatBuffer()
  }, U.RawInflate.MaxBackwardLength = 32768, U.RawInflate.MaxCopyLength = 258, U.RawInflate.Order = function(t) {
    return _ ? new Uint16Array(t) : t
  }([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), U.RawInflate.LengthCodeTable = function(t) {
    return _ ? new Uint16Array(t) : t
  }([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258]), U.RawInflate.LengthExtraTable = function(t) {
    return _ ? new Uint8Array(t) : t
  }([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0]), U.RawInflate.DistCodeTable = function(t) {
    return _ ? new Uint16Array(t) : t
  }([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]), U.RawInflate.DistExtraTable = function(t) {
    return _ ? new Uint8Array(t) : t
  }([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]), U.RawInflate.FixedLiteralLengthTable = function(t) {
    return t
  }(function() {
    var t, e, r = new(_ ? Uint8Array : Array)(288);
    for (t = 0, e = r.length; t < e; ++t) r[t] = t <= 143 ? 8 : t <= 255 ? 9 : t <= 279 ? 7 : 8;
    return M(r)
  }()), U.RawInflate.FixedDistanceTable = function(t) {
    return t
  }(function() {
    var t, e, r = new(_ ? Uint8Array : Array)(30);
    for (t = 0, e = r.length; t < e; ++t) r[t] = 5;
    return M(r)
  }()), U.RawInflate.prototype.parseBlock = function() {
    var t = this.readBits(3);
    switch (1 & t && (this.bfinal = !0), t >>>= 1) {
      case 0:
        this.parseUncompressedBlock();
        break;
      case 1:
        this.parseFixedHuffmanBlock();
        break;
      case 2:
        this.parseDynamicHuffmanBlock();
        break;
      default:
        throw new Error("unknown BTYPE: " + t)
    }
  }, U.RawInflate.prototype.readBits = function(t) {
    for (var e, r = this.bitsbuf, i = this.bitsbuflen, n = this.input, s = this.ip, a = n.length; i < t;) {
      if (s >= a) throw new Error("input buffer is broken");
      r |= n[s++] << i, i += 8
    }
    return e = r & (1 << t) - 1, r >>>= t, i -= t, this.bitsbuf = r, this.bitsbuflen = i, this.ip = s, e
  }, U.RawInflate.prototype.readCodeByTable = function(t) {
    for (var e, r, i = this.bitsbuf, n = this.bitsbuflen, s = this.input, a = this.ip, o = s.length, h = t[0], f = t[1]; n < f && !(a >= o);) i |= s[a++] << n, n += 8;
    return e = h[i & (1 << f) - 1], r = e >>> 16, this.bitsbuf = i >> r, this.bitsbuflen = n - r, this.ip = a, 65535 & e
  }, U.RawInflate.prototype.parseUncompressedBlock = function() {
    var t, e, r, i = this.input,
      n = this.ip,
      s = this.output,
      a = this.op,
      o = i.length,
      h = s.length;
    if (this.bitsbuf = 0, this.bitsbuflen = 0, n + 1 >= o) throw new Error("invalid uncompressed block header: LEN");
    if (t = i[n++] | i[n++] << 8, n + 1 >= o) throw new Error("invalid uncompressed block header: NLEN");
    if (e = i[n++] | i[n++] << 8, t === ~e) throw new Error("invalid uncompressed block header: length verify");
    if (n + t > i.length) throw new Error("input buffer is broken");
    switch (this.bufferType) {
      case U.RawInflate.BufferType.BLOCK:
        for (; a + t > s.length;) {
          if (r = h - a, t -= r, _) s.set(i.subarray(n, n + r), a), a += r, n += r;
          else
            for (; r--;) s[a++] = i[n++];
          this.op = a, s = this.expandBuffer(), a = this.op
        }
        break;
      case U.RawInflate.BufferType.ADAPTIVE:
        for (; a + t > s.length;) s = this.expandBuffer({
          fixRatio: 2
        });
        break;
      default:
        throw new Error("invalid inflate mode")
    }
    if (_) s.set(i.subarray(n, n + t), a), a += t, n += t;
    else
      for (; t--;) s[a++] = i[n++];
    this.ip = n, this.op = a, this.output = s
  }, U.RawInflate.prototype.parseFixedHuffmanBlock = function() {
    this.decodeHuffman(U.RawInflate.FixedLiteralLengthTable, U.RawInflate.FixedDistanceTable)
  }, U.RawInflate.prototype.parseDynamicHuffmanBlock = function() {
    function t(t, e, r) {
      var i, n, s, a = this.prev;
      for (s = 0; s < t;) switch (i = this.readCodeByTable(e)) {
        case 16:
          for (n = 3 + this.readBits(2); n--;) r[s++] = a;
          break;
        case 17:
          for (n = 3 + this.readBits(3); n--;) r[s++] = 0;
          a = 0;
          break;
        case 18:
          for (n = 11 + this.readBits(7); n--;) r[s++] = 0;
          a = 0;
          break;
        default:
          r[s++] = i, a = i
      }
      return this.prev = a, r
    }
    var e, r, i, n, s = this.readBits(5) + 257,
      a = this.readBits(5) + 1,
      o = this.readBits(4) + 4,
      h = new(_ ? Uint8Array : Array)(U.RawInflate.Order.length);
    for (n = 0; n < o; ++n) h[U.RawInflate.Order[n]] = this.readBits(3);
    if (!_)
      for (n = o, o = h.length; n < o; ++n) h[U.RawInflate.Order[n]] = 0;
    e = M(h), r = new(_ ? Uint8Array : Array)(s), i = new(_ ? Uint8Array : Array)(a), this.prev = 0, this.decodeHuffman(M(t.call(this, s, e, r)), M(t.call(this, a, e, i)))
  }, U.RawInflate.prototype.decodeHuffman = function(t, e) {
    var r = this.output,
      i = this.op;
    this.currentLitlenTable = t;
    for (var n, s, a, o, h = r.length - U.RawInflate.MaxCopyLength; 256 !== (n = this.readCodeByTable(t));)
      if (n < 256) i >= h && (this.op = i, r = this.expandBuffer(), i = this.op), r[i++] = n;
      else
        for (s = n - 257, o = U.RawInflate.LengthCodeTable[s], U.RawInflate.LengthExtraTable[s] > 0 && (o += this.readBits(U.RawInflate.LengthExtraTable[s])), n = this.readCodeByTable(e), a = U.RawInflate.DistCodeTable[n], U.RawInflate.DistExtraTable[n] > 0 && (a += this.readBits(U.RawInflate.DistExtraTable[n])), i >= h && (this.op = i, r = this.expandBuffer(), i = this.op); o--;) r[i] = r[i++ - a];
    for (; this.bitsbuflen >= 8;) this.bitsbuflen -= 8, this.ip--;
    this.op = i
  }, U.RawInflate.prototype.decodeHuffmanAdaptive = function(t, e) {
    var r = this.output,
      i = this.op;
    this.currentLitlenTable = t;
    for (var n, s, a, o, h = r.length; 256 !== (n = this.readCodeByTable(t));)
      if (n < 256) i >= h && (r = this.expandBuffer(), h = r.length), r[i++] = n;
      else
        for (s = n - 257, o = U.RawInflate.LengthCodeTable[s], U.RawInflate.LengthExtraTable[s] > 0 && (o += this.readBits(U.RawInflate.LengthExtraTable[s])), n = this.readCodeByTable(e), a = U.RawInflate.DistCodeTable[n], U.RawInflate.DistExtraTable[n] > 0 && (a += this.readBits(U.RawInflate.DistExtraTable[n])), i + o > h && (r = this.expandBuffer(), h = r.length); o--;) r[i] = r[i++ - a];
    for (; this.bitsbuflen >= 8;) this.bitsbuflen -= 8, this.ip--;
    this.op = i
  }, U.RawInflate.prototype.expandBuffer = function(t) {
    var e, r, i = new(_ ? Uint8Array : Array)(this.op - U.RawInflate.MaxBackwardLength),
      n = this.op - U.RawInflate.MaxBackwardLength,
      s = this.output;
    if (_) i.set(s.subarray(U.RawInflate.MaxBackwardLength, i.length));
    else
      for (e = 0, r = i.length; e < r; ++e) i[e] = s[e + U.RawInflate.MaxBackwardLength];
    if (this.blocks.push(i), this.totalpos += i.length, _) s.set(s.subarray(n, n + U.RawInflate.MaxBackwardLength));
    else
      for (e = 0; e < U.RawInflate.MaxBackwardLength; ++e) s[e] = s[n + e];
    return this.op = U.RawInflate.MaxBackwardLength, s
  }, U.RawInflate.prototype.expandBufferAdaptive = function(t) {
    var e, r, i, n, s = this.input.length / this.ip + 1 | 0,
      a = this.input,
      o = this.output;
    return t && ("number" == typeof t.fixRatio && (s = t.fixRatio), "number" == typeof t.addRatio && (s += t.addRatio)), s < 2 ? (r = (a.length - this.ip) / this.currentLitlenTable[2], n = r / 2 * 258 | 0, i = n < o.length ? o.length + n : o.length << 1) : i = o.length * s, _ ? (e = new Uint8Array(i), e.set(o)) : e = o, this.output = e, this.output
  }, U.RawInflate.prototype.concatBuffer = function() {
    var t, e, r, i, n, s = 0,
      a = this.totalpos + (this.op - U.RawInflate.MaxBackwardLength),
      o = this.output,
      h = this.blocks,
      f = new(_ ? Uint8Array : Array)(a);
    if (0 === h.length) return _ ? this.output.subarray(U.RawInflate.MaxBackwardLength, this.op) : this.output.slice(U.RawInflate.MaxBackwardLength, this.op);
    for (e = 0, r = h.length; e < r; ++e)
      for (t = h[e], i = 0, n = t.length; i < n; ++i) f[s++] = t[i];
    for (e = U.RawInflate.MaxBackwardLength, r = this.op; e < r; ++e) f[s++] = o[e];
    return this.blocks = [], this.buffer = f, this.buffer
  }, U.RawInflate.prototype.concatBufferDynamic = function() {
    var t, e = this.op;
    return _ ? this.resize ? (t = new Uint8Array(e), t.set(this.output.subarray(0, e))) : t = this.output.subarray(0, e) : (this.output.length > e && (this.output.length = e), t = this.output), this.buffer = t, this.buffer
  };
  var j = function(t, e) {
    this.loadSuccess = new B.FSEvent, this.loadFailure = new B.FSEvent, this.st = document.createElement("script"), this.st.type = "text/javascript", this.st.src = t, e && (this.st.id = e), this.br = new B.Browser, void 0 !== this.st.addEventListener ? this._loadOnOthers() : void 0 !== this.st.attachEvent && this._loadOnIE()
  };
  if (j.prototype._loadOnIE = function() {
      var t = this,
        e = this.st;
      e.onreadystatechange = function() {
        3 == e.readyState && (e.onreadystatechange = function() {
          t.loadSuccess.fire(e.src), t.loadFailure = null
        }, t.loadFailure && t.loadFailure.fire(e.src))
      }, document.body.appendChild(e)
    }, j.prototype._loadOnOthers = function() {
      this.st.addEventListener("load", e.proxy(function() {
        this.loadSuccess.fire(this.st.src)
      }, this), !1), this.st.addEventListener("error", e.proxy(function() {
        this.loadFailure.fire(this.st.src)
      }, this), !1), document.body.appendChild(this.st)
    }, !window.btoa) {
    var P = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      H = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    window.btoa = function(t) {
      var e, r, i, n, s, a;
      for (i = t.length, r = 0, e = ""; i > r;) {
        if (n = 255 & t.charCodeAt(r++), r == i) {
          e += P.charAt(n >> 2), e += P.charAt((3 & n) << 4), e += "==";
          break
        }
        if (s = t.charCodeAt(r++), r == i) {
          e += P.charAt(n >> 2), e += P.charAt((3 & n) << 4 | (240 & s) >> 4), e += P.charAt((15 & s) << 2), e += "=";
          break
        }
        a = t.charCodeAt(r++), e += P.charAt(n >> 2), e += P.charAt((3 & n) << 4 | (240 & s) >> 4), e += P.charAt((15 & s) << 2 | (192 & a) >> 6), e += P.charAt(63 & a)
      }
      return e
    }, window.atob = function(t) {
      var e, r, i, n, s, a, o;
      for (a = t.length, s = 0, o = ""; a > s;) {
        do {
          e = H[255 & t.charCodeAt(s++)]
        } while (a > s && -1 == e);
        if (-1 == e) break;
        do {
          r = H[255 & t.charCodeAt(s++)]
        } while (a > s && -1 == r);
        if (-1 == r) break;
        o += String.fromCharCode(e << 2 | (48 & r) >> 4);
        do {
          if (61 == (i = 255 & t.charCodeAt(s++))) return o;
          i = H[i]
        } while (a > s && -1 == i);
        if (-1 == i) break;
        o += String.fromCharCode((15 & r) << 4 | (60 & i) >> 2);
        do {
          if (61 == (n = 255 & t.charCodeAt(s++))) return o;
          n = H[n]
        } while (a > s && -1 == n);
        if (-1 == n) break;
        o += String.fromCharCode((3 & i) << 6 | n)
      }
      return o
    }
  }
  B.b64EncodeUnicode = function(t) {
    return btoa(e.enc(t).replace(/%([0-9A-F]{2})/g, function(t, e) {
      return String.fromCharCode("0x" + e)
    }))
  }, B.b64DecodeUnicode = function(t) {
    return decodeURIComponent(Array.prototype.map.call(atob(t).split(""), function(t) {
      return "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
    }).join(""))
  }, B.Async = function(t, e, r) {
    this.isParallel = !!t, this._queue = [], this.success = e, this.fail = r, this.isPending = !0
  }, B.Async.prototype.enqueue = function(t) {
    this._queue.push({
      fn: t,
      resolved: !1
    }), (this.isParallel || 1 == this._queue.length) && t.apply(this, [{
      resolve: e.proxy(function() {
        e.nextTick(e.proxy(function() {
          this.ctx.resolve(this.cb)
        }, this))
      }, {
        cb: t,
        ctx: this
      }),
      error: e.proxy(function() {
        this.ctx.error(this.cb)
      }, {
        cb: t,
        ctx: this
      })
    }])
  }, B.Async.prototype.resolve = function(t) {
    if (this.isPending) {
      if (!t) throw new Error("Missing caller argument.");
      var r, i, n = !1;
      for (r = 0; r < this._queue.length; r++) i = this._queue[r], i.fn === t ? i.resolved = !0 : i.resolved || (n = !0);
      if (!this.isParallel && n) {
        var s;
        for (r = 0; r < this._queue.length; r++)
          if (i = this._queue[r], !1 === i.resolved) {
            s = i;
            break
          }
        if (s) return void s.fn.apply(this, [{
          resolve: e.proxy(function() {
            this.ctx.resolve(this.cb)
          }, {
            cb: s.fn,
            ctx: this
          }),
          error: e.proxy(function() {
            this.ctx.error(this.cb)
          }, {
            cb: s.fn,
            ctx: this
          })
        }])
      }
      n || (this.isPending = !1, this.success.call(this))
    }
  }, B.Async.prototype.error = function() {
    this.isPending = !1, this.fail && this.fail.call(this)
  }, e.nextTick = function(t) {
    setTimeout(t || function() {}, 0)
  }, B.Browser = function(t) {
    var r = this,
      i = t || navigator.userAgent;
    e.ext(r, {
      agent: i,
      os: {
        name: "",
        version: 0
      },
      browser: {
        name: "",
        version: 0,
        actualVersion: 0
      },
      isMobile: /iphone|ipad|ipod|android|kindle|silk|bntv|nook|blackberry|playbook|mini|windows\sce|windows\sphone|palm|bb10/i.test(i) || !!window.orientation,
      isTablet: /ipad|playbook|nook|bntv/i.test(i),
      isWinPhone: /Windows Phone/i.test(i),
      fp: "",
      supportsLocalStorage: !1,
      supportsPostMessage: !!window.postMessage,
      isIE: !1,
      isZoomable: !0,
      supportsSVG: document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"),
      isReady: !1,
      ready: new B.FSEvent,
      _internalReady: new B.FSEvent,
      isIos: !1,
      servUrl: location.protocol + "//device.4seeresults.com/detect?accessToken="
    });
    try {
      localStorage && (localStorage.setItem("a", "b"), r.supportsLocalStorage = !0)
    } catch (t) {}
    r._internalReady.subscribe(function() {
      r.fp = new O(r), r.fp.ready.subscribe(function() {
        r.fp = r.fp.sig, r.ready.fire(r)
      }, !0, !0)
    }), r.isMobile && /iphone|ipad|ipod/i.test(i) && !r.isWinPhone && (r.isIos = !0);
    var n = function(t) {
        return e.toLowerCase(i).indexOf(e.toLowerCase(t)) > -1
      },
      s = function(t, e) {
        return "IE" != t ? e : e > 6 && e < 10 ? n("Trident") || 7 != e ? n("Trident/5.0") && e <= 9 ? 9 : n("Trident/4.0") && e < 9 ? n("WOW64") ? 8 : 7 == e ? e : 8 : e : 7 : e
      },
      a = function(t, r) {
        return r ? n("Windows Phone") ? "Winphone" : n("iPod") ? "iPod" : n("iPad") ? "iPad" : n("iPhone") ? "iPhone" : (n("blackberry") || n("playbook") || n("BB10")) && n("applewebkit") ? "Blackberry" : n("Kindle") || n("Silk") ? "Kindle" : n("BNTV") || n("Nook") ? "Nook" : n("Android") ? "Android" : e.isDefined(window.orientation) ? "Mobile" : "Other" : n("Windows") ? "Windows" : n("OS X") ? "Mac" : n("Linux") || n("Googlebot") ? "Linux" : n("Mac") ? "Mac" : void 0
      },
      o = function(t, e) {
        for (; t >= e;) t /= 10;
        return t
      },
      h = function(t, r) {
        var i, s, a, h, f, u;
        return n("windows phone") || !n("ipad") && !n("iphone") ? n("googlebot") ? 1 : n("mac os x") ? (i = /OS X ([0-9_]*)/gi.exec(t), s = i[1].split("_"), a = parseInt(s[0]), f = parseInt(s[1]), u = parseInt(s[2]), f += o(u, 1), a + o(f, 1)) : n("Windows NT") ? (i = /Windows NT ([0-9\.]*)/gi.exec(t), s = i[1].split("."), a = parseInt(s[0]), f = parseInt(s[1]), a + o(f, 1)) : (i = t.match(/Windows Phone OS[\/\s](\d+\.?\d+)/) || t.match(/Windows Phone[\/\s](\d+\.?\d+)/) || t.match(/Android[\/\s](\d+\.?\d+)/), a = e.isDefined(i) ? i[1] : 1, h = parseFloat(a), !isNaN(h) && h > 0 ? h : a) : (i = /OS ([0-9_]*) like/gi.exec(t), s = i[1].split("_"), a = parseInt(s[0]), f = parseInt(s[1]), a + o(f, 1))
      },
      f = function() {
        if ("Winphone" != r.os.name) {
          var t = document.querySelectorAll("head meta[name=viewport],head meta[name=VIEWPORT],head meta[name=Viewport]") || [];
          if (e.isArray(t) || (t = [t]), t.length > 0) {
            for (var i = function(t, e) {
                var r = new RegExp("[\\w\\W]*" + e + "[\\s]*=[\\s]*([^\\s,;]*)[\\w\\W]*", "i");
                return t ? t.match(r) : null
              }, n = 0; n < t.length; n++) {
              var s = t[n].content,
                a = i(s, "user-scalable"),
                o = i(s, "initial-scale"),
                h = i(s, "maximum-scale");
              if (a && a.length > 1 && ("0" == a[1] || "no" == e.toLowerCase(a[1]))) return !1;
              if (o && h) return !(o.length > 1 && h.length > 1 && 1 == parseFloat(o[1]) && 1 == parseFloat(h[1]))
            }
            return !0
          }
          return !0
        }
        return !1
      },
      u = B._getBrowserNameAndVersion(i),
      l = function() {
        r.browser.name = u.name, r.browser.version = u.version, r.browser.actualVersion = s(r.browser.name, r.browser.version), r.os.name = a(0, r.isMobile), r.os.version = h(i, r.isMobile)
      },
      c = function() {
        r.isZoomable = f(), r.isReady = !0, r._internalReady.fire()
      },
      p = function() {
        l()
      };
    if (r.isMobile)
      if (r.isIos || "" === r.servUrl || r.isTablet || r.isWinPhone) p(), c();
      else {
        var d, g = function(t) {
            var e = JSON.parse(t);
            r.browser.name = e.browser.name, r.browser.version = r.browser.actualVersion = e.browser.version, r.os.name = e.os.name, r.os.version = e.os.version, r.isMobile = e.isMobile, r.isTablet = e.isTablet, c()
          },
          y = this.supportsLocalStorage;
        if (y && !t && (d = sessionStorage.getItem("ACS_BROWSER")), d) g(d);
        else {
          var w = function(t) {
              y && sessionStorage.setItem("ACS_BROWSER", t), g(t)
            },
            b = function() {
              p(), c()
            },
            m = function() {
              var t = new Date,
                e = t.getFullYear().toString(),
                r = (t.getMonth() + 1).toString(),
                i = t.getDate().toString();
              return e + (r[1] ? r : "0" + r[0]) + (i[1] ? i : "0" + i[0])
            },
            v = {
              method: "GET",
              url: r.servUrl + function() {
                var t = m() + "ForeSee" + (location.origin || "null");
                return B.hashCode(t)
              }() + "&ua=" + i,
              type: "*/*",
              contentType: "application/x-www-form-urlencoded",
              success: w,
              failure: b
            };
          new B.AjaxTransport(v, !0).send()
        }
      }
    else l(), r.isReady = !0, r.isIE = "IE" == r.browser.name, r._internalReady.fire()
  }, B._getBrowserNameAndVersion = function(t) {
    var e, r, i = "Unknown";
    return null !== (r = t.match(/Opera[\/\s](\d+\.\d+)/)) ? i = "Opera" : null !== (r = t.match(/Edge\/([0-9\.]*)/)) ? i = "IE" : null !== (r = t.match(/opr[\/\s](\d+\.\d+)/i)) ? i = "Opera" : null !== (r = t.match(/Windows Phone[\/\s](\d+\.\d+)/)) ? i = "IEMobile" : null !== (r = t.match(/MSIE (\d+\.\d+)/)) ? i = "IE" : null !== (r = t.match(/Navigator[\/\s](\d+\.\d+)/)) ? i = "Netscape" : null !== (r = t.match(/Chrome[\/\s](\d+\.\d+)/)) ? i = "Chrome" : null !== (r = t.match(/Version\/([0-9\.]*)[\w\W]*Safari/i)) ? i = "Safari" : null !== (r = t.match(/Firefox[\/\s](\d+\.\d+)/)) ? i = "Firefox" : null !== (r = t.match(/googlebot/gi)) ? (i = "Chrome", e = 44) : Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject && (i = "IE", e = 11), {
      name: i,
      version: e || (null !== r ? parseFloat(r[1]) : void 0)
    }
  }, B.sign = function(t) {
    var r = (new Date).getTime(),
      i = t.substr(t.indexOf("/rec/")),
      n = B.md5((i + r).toString());
    return -1 == t.indexOf("?") ? t += "?" : t += "&", t + "token=" + r + "&sig=" + e.enc(n)
  };
  var z = {
    byteArrayToString: function(t) {
      for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
      return e
    },
    stringToByteArray: function(t) {
      for (var e = [], r = 0; r < t.length; r++) e[e.length] = t.charCodeAt(r);
      return e
    },
    _utf8_encode: function(t) {
      for (var e = "", r = 0; r < t.length; r++) {
        var i = t.charCodeAt(r);
        i < 128 ? e += String.fromCharCode(i) : i > 127 && i < 2048 ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
      }
      return e
    },
    compress: function(t) {
      var e = z._utf8_encode(t),
        r = z.stringToByteArray(e),
        i = new U.RawDeflate(r, {
          compressionType: 2
        }).compress();
      return btoa(z.byteArrayToString(i))
    },
    fragmentAndCompress: function(t, e) {
      e = e || 1e5;
      for (var r = "", i = parseInt(t.length / e) + 1, n = 0; n < i; n++) {
        r += "_CMP_" + z.compress(t.substring(n * e, (n + 1) * e))
      }
      return r
    },
    decompress: function(t) {
      var e = z.stringToByteArray(atob(t)),
        r = new U.RawInflate(e, {
          index: 0,
          bufferSize: 41152,
          bufferType: U.RawInflate.BufferType.ADAPTIVE,
          resize: !0
        });
      return z.byteArrayToString(r.decompress())
    }
  };
  B.Compress = z, window.__fsJSONPCBr = {}, window.__fsJSONPCB = e.proxy(function(t) {
    if (t) {
      var e = t.filename,
        r = atob(t.contents);
      window.__fsJSONPCBr[e] && window.__fsJSONPCBr[e].fire(r)
    }
  }, this), B.JSONP = function(t) {
    this._expireTimeout = null, this._networkError = new B.FSEvent, this.opts = e.ext({
      success: function() {},
      failure: function() {},
      timeout: 5e3
    }, t)
  }, B.JSONP.prototype.get = function(t, r) {
    var i = t.indexOf("?") > -1 ? t.substr(t.indexOf("?") + 1) : "",
      n = t.substr(0, t.lastIndexOf("/") + 1),
      s = t.substr(t.lastIndexOf("/") + 1),
      a = window.__fsJSONPCBr;
    this._expireTimeout = setTimeout(e.proxy(function() {
      this._networkError.fire({
        type: "timedout"
      })
    }, this), this.opts.timeout), s.indexOf("?") > -1 && (s = s.substr(0, s.indexOf("?")));
    var o = (r || "") + s;
    if (!a[o]) {
      a[o] = new B.FSEvent;
      var h = n + s.substr(0, s.lastIndexOf(".")) + "___" + s.substr(s.lastIndexOf(".") + 1) + ".js" + (i.length > 0 ? "?" + i : ""),
        f = new j(h, "_fscl" + o);
      f.loadFailure.subscribe(e.proxy(function() {
        this.el.parentNode.removeChild(this.el), this.ctx._networkError.fire({
          type: "internalserror"
        })
      }, {
        ctx: this,
        el: f.st
      }))
    }
    a[o].subscribe(e.proxy(function(t) {
      this.ctx.opts.success(t), clearTimeout(this.ctx._expireTimeout);
      var e = document.getElementById(this.tgId);
      e && e.parentNode.removeChild(e)
    }, {
      ctx: this,
      tgId: "_fscl" + o
    }), !0, !0), this._networkError.subscribe(e.proxy(function(t) {
      this.opts.failure(t), a[o].unsubscribeAll()
    }, this), !0, !0)
  }, B.generateGUID = function() {
    return B.md5(B.now() + "" + navigator.userAgent + window.location + (new Date).getTimezoneOffset() + Math.random())
  }, B.Journey = function(t, r, i, n, s) {
    this.threshold = s || 400, this.browser = n, e.isString(r) || (r = ""), this.cors = new B.AjaxTransport;
    var a = e.config.analyticsUrl;
    a = a.indexOf("https:") > -1 ? a.replace("https:", location.protocol) : a.replace("http:", location.protocol), this.url = a, this.data = {
      customerId: t,
      appId: r,
      userId: i || "0000-0000-0000-0000-0000",
      deviceProfile: {
        fs_timezone: (new Date).getTimezoneOffset(),
        fs_os: n.os.name,
        fs_osver: n.os.version,
        fs_browser: n.browser.name,
        fs_browserver: n.browser.version
      },
      events: []
    }
  }, B.Journey.prototype._send = function() {
    this._svT = null, this.data.events.length > 0 && B.Healthy(this.browser, ["events"], e.proxy(function() {
      this.cors.send({
        url: this.url,
        contentType: "application/json",
        data: this.data,
        method: "POST",
        success: e.proxy(function() {
          this.data.events = []
        }, this)
      })
    }, this))
  }, B.Journey.prototype.setKey = function(t, r) {
    return !!e.isObject(r) && (this.data[t] = r, this.data.events.length || this.addEventString("fs_setKey"), !0)
  }, B.Journey.prototype.addEvent = function(t) {
    var e = typeof t;
    switch (e) {
      case "string":
        this.addEventString(t);
        break;
      case "object":
        this.addEventObj(t);
        break;
      default:
        console.error("ForeSee: event is not a valid type: ", e)
    }
  }, B.Journey.prototype.addEventObj = function(t) {
    if (t.timestamp || (t.timestamp = (new Date).toISOString()), !(t.name && t.name.length > 0 && J("properties", t) && J("metrics", t) && J("data", t))) return void console.error("ForeSee: Invalid Event. For proper usage, please refer to http://developer.foresee.com/docs-articles/foresee-hosted-code/calling-api-methods/event-logging/");
    t.properties || (t.properties = {}), t.properties.fs_pageUrl || (t.properties.fs_pageUrl = [location.href]), this.data.events.push(t), W(this)
  }, B.Journey.prototype.addEventString = function(t) {
    this.data.events.push({
      name: t,
      timestamp: (new Date).toISOString(),
      properties: {
        fs_pageUrl: [location.href]
      }
    }), W(this)
  };
  var W = function(t, r) {
      r ? t._send(!0) : t._svT || (t._svT = setTimeout(e.proxy(function() {
        t._send(!0)
      }, t), t.threshold))
    },
    J = function(t, r) {
      var i;
      switch (t) {
        case "properties":
          if (r.properties)
            for (i in r.properties)
              if (!e.isArray(r.properties[i])) return console.error("ForeSee: Invalid properties"), !1;
          break;
        case "metrics":
          if (r.metrics)
            for (i in r.metrics)
              if (!B.isNumeric(r.metrics[i])) return console.error("ForeSee: Invalid metrics"), !1
      }
      return !0
    };
  B.ImageTransport = function(t) {
    var r = {
      data: {},
      success: function() {},
      failure: function() {}
    };
    this.options = e.ext(r, t)
  }, B.ImageTransport.prototype.send = function(t) {
    var r = e.ext(this.options, t),
      i = new Image;
    i.onerror = r.failure, i.onload = function() {
      r.success({
        width: i.width,
        height: i.height
      })
    }, i.src = e.toQueryString(r.data, r.url, !1)
  };
  var K, G, V = function(t, r, i) {
    for (var n = [], s = [], a = [], o = 0; o < t.length; o++) {
      var h = K.info[t[o]];
      h && !0 !== h.up ? a.push(t[o]) : (n.push(e.ext({}, h)), s.push(t[o]))
    }
    a.length > 0 ? i(a) : r(n)
  };
  B.Healthy = function(t, r, i, n) {
    if (e.isArray(r) || (r = [r]), i = i || function() {}, n = n || function() {}, !K && t.supportsLocalStorage) {
      var s = localStorage.getItem("_fsrHealthStatus");
      K = s ? JSON.parse(s) : {}
    }
    K && K.last && B.now() - K.last < 6e4 ? e.nextTick(function() {
      V(r, i, n)
    }) : (G || (G = new B.AjaxTransport), G.send({
      method: "GET",
      url: location.protocol + "//health.foresee.com",
      timeout: 1e4,
      failure: e.proxy(function() {
        n(r)
      }, this),
      success: e.proxy(function(i) {
        e.isString(i) && i.length > 3 ? (K = {
          last: B.now(),
          info: JSON.parse(i)
        }, t.supportsLocalStorage && localStorage.setItem("_fsrHealthStatus", JSON.stringify(K)), V(r, this.s, this.f)) : n(r)
      }, {
        deps: r,
        s: i,
        f: n
      })
    }))
  }, B.HealthStatus = function(t, r, i) {
    var n = function(t, r) {
      return function() {
        for (var r = {}, n = 0; n < t.length; n++) {
          var s = {
            up: !1
          };
          K && K.info && K.info[t[n]] && (s = e.ext({}, K.info[t[n]])), r[t[n]] = s
        }
        i(r)
      }
    }(r);
    B.Healthy(t, r, n, n)
  }, B.imgInfo = function(t, r) {
    var i = function() {};
    r = r || i;
    var n = new Image;
    n.onload = function() {
      r(n.width, n.height)
    }, n.onerror = function() {}, t.indexOf("//") > -1 ? n.src = t : n.src = e.makeURI("$" + t), n.width && (n.onload = n.onerror = i, r(n.width, n.height))
  }, B.getHashParm = function(t) {
    var r = window.location.hash.toString();
    if (r && r.length > 0)
      for (var i = r.split("&"), n = 0; n < i.length; n++) {
        var s = i[n].split("="),
          a = e.toLowerCase(s[0]).trim();
        if (a == e.toLowerCase(t)) {
          if (s.length > 1) return decodeURIComponent(s[1]);
          break
        }
      }
  }, B.compile = function(t) {
    return new [].constructor.constructor("var v = ''; try { v = " + t + "} catch(err) {}return v;").call(window)
  }, B.dedupe = function(t) {
    var e, r;
    for (e = t.length - 1; e >= 0; e--)
      for (r = e - 1; r >= 0; r--) t[r] == t[e] && t.splice(e, 1);
    return t
  }, B.arrayIndexOf = function(t, e) {
    for (var r in e)
      if (e[r] === t) return r;
    return -1
  }, B.inArray = function(t, e) {
    return -1 != B.arrayIndexOf(t, e)
  }, B.randomRange = function(t, e) {
    return t + Math.random() * (e - t)
  }, B.isNumeric = function(t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
  }, B.products = {}, B.productArr = [], B.registerProduct = function(t, e) {
    e = e || {}, B.products[t] = e, B.productArr.push(t)
  };
  var q = {
    has: function() {
      return "function" == typeof window.ga
    },
    uid: function(t) {
      var r = e.nextTick;
      q.has() ? ga(function(e) {
        r(function() {
          if (e) t(e.get("clientId"));
          else try {
            t(ga.getAll()[0].get("clientId"))
          } catch (e) {
            t()
          }
        })
      }) : r(function() {
        t()
      })
    }
  };
  B.INT.GA = q;
  var X = {
    _id: "",
    has: function() {
      try {
        return !!(window.s && e.isFunction(s.c_r) && s.c_r("s_vi").indexOf("[CE]") > -1)
      } catch (t) {
        return !1
      }
    },
    uid: function(t) {
      var r = e.nextTick;
      r(X.has() ? function() {
        t(s.c_r("s_vi").split("|")[1].split("[")[0])
      } : function() {
        t()
      })
    },
    beacon: function() {
      function t(t, e) {
        for (var r = "", i = e.split("&"), n = 0; n < i.length; n++)
          for (var s = i[n].split("="), a = 0; a < t.length; a++)
            if (t[a] == s[0]) {
              r += s[0] + "=" + s[1] + "&";
              break
            }
        return "&" == r.substr(r.length - 1) && (r = r.substr(0, r.length - 1)), r
      }
      var e, r, i, n, a = ["AQB", "mid", "aid", "vid", "fid", "AQE"],
        o = "";
      for (var h in window)
        if ("s_i_" == h.substring(0, 4) && window[h].src && (e = window[h].src, e.indexOf("/b/ss/") >= 0)) {
          o = e;
          break
        }
      if (!o && window.document.images)
        for (var f = 0; f < window.document.images.length; f++)
          if (e = window.document.images[f].src, e.indexOf("/b/ss/") >= 0) {
            o = e;
            break
          }
      r = o.substring(0, o.indexOf("?")), i = o.substring(o.indexOf("?") + 1), n = t(a, i), window.s && s.trackingServerSecure && (r = "https://" + s.trackingServerSecure + o.substring(o.indexOf("/b/ss/"), o.indexOf("?")), i = o.substring(o.indexOf("?") + 1), n = t(a, i));
      var u = r + "?" + n;
      return u.length < 3 && (u = null), u
    }
  };
  return B.INT.OM = X, B.addClass = function(t, r) {
    var i, n, s, a;
    for (e.isDefined(t.length) || (t = [t]), i = 0, n = t.length; i < n; i++) s = t[i], B.isElement(s) && (a = s.className || "", new RegExp("\\b" + r + "\\b").test(a) || (s.className = ("" === a ? "" : a + " ") + r))
  }, B.removeClass = function(t, r) {
    var i, n, s;
    for (e.isDefined(t.length) || (t = [t]), i = 0, n = t.length; i < n; i++) s = t[i], B.isElement(s) && s.className && (s.className = s.className.replace(new RegExp("(\\s|^)" + r + "(\\s|$)"), " ").replace(/^\s+|\s+$/g, ""))
  }, B.hasClass = function(t, e) {
    return B.isElement(t) && t.className.indexOf(e) > -1
  }, B.css = function(t, r, i) {
    if (t) {
      e.isDefined(t.length) || (t = [t]);
      for (var n = 0; n < t.length; n++)
        for (var s in r) s && (-1 == "zIndex".indexOf(s) && "number" == typeof r[s] && "opacity" != s && (r[s] += "px"), i ? t[n].style.cssText += ";" + s + ":" + r[s] + " !important" : t[n].style[s] = r[s])
    }
    return t
  }, B.attr = function(t, r) {
    if (t) {
      e.isDefined(t.length) || (t = [t]);
      for (var i = 0; i < t.length; i++)
        for (var n in r) t[i].setAttribute(n, r[n])
    }
    return t
  }, B.restrictFocus = function(t) {
    for (var e = document.querySelectorAll("a, input[type=text], textarea, button, input[type=radio], select, *[tabIndex]", t).sort(function(t, e) {
        return parseInt(t.tabIndex) > parseInt(e.tabIndex)
      }), r = 0; r < e.length; r++) {
      var i = e[r];
      B.Unbind(i, "keydown"), B.Bind(i, "keydown", function(t) {
        return function(e) {
          var r, i;
          if (9 === e.keyCode)
            for (r = 0; r < t.length; r++)
              if (t[r] === e.target) {
                if (e.preventDefault ? e.preventDefault() : e.returnValue = !1, i = r, e.shiftKey)
                  do {
                    i = 0 === i ? t.length - 1 : i - 1
                  } while ((t[i].offsetLeft <= 0 || t[i].tabIndex < 0) && i != r);
                else
                  do {
                    i = (i + 1) % t.length
                  } while ((t[i].offsetLeft <= 0 || t[i].tabIndex < 0) && i != r);
                t[i].focus();
                break
              }
        }
      }(e))
    }
  }, B.hideAll = function(t) {
    var e, r = document.body.querySelectorAll("*");
    for (e = 0; e < r.length; e++) B.css(r[e], {
      display: "none"
    })
  }, B.elindex = function(t) {
    for (var e, r = t.parentNode.childNodes, i = 0, n = 0;
      (e = r.item(i++)) && e != t;) 1 == e.nodeType && n++;
    return n
  }, B.isElement = function(t) {
    return t && t.nodeType && (1 == t.nodeType || 11 == t.nodeType || 9 == t.nodeType)
  }, B.Cookie = function(t) {
    this.opts = t || {}
  }, B.Cookie.prototype.set = function(t, r, i) {
    var n, s = this.opts;
    i && (s = e.ext({}, s, i)), r = e.isDefined(s.encode) ? e.enc(r) : r, t = e.enc(t), "localhost" == s.domain && delete s.domain;
    for (var a in s)
      if (s[a]) switch (n = s[a], r += ";" + ("duration" == a ? "expires" : a), a) {
        case "expires":
          r += "=" + (e.isDate(n) ? n.toGMTString() : n) + ";";
          break;
        case "duration":
          r += "=" + new Date(B.now() + n * B.FULL_DAY).toGMTString() + ";";
          break;
        default:
          r += "=" + n
      }
    document.cookie = t + "=" + r
  }, B.Cookie.prototype.get = function(t) {
    var e = document.cookie.match("(?:^|;)\\s*" + B.escapeRegExp(t) + "=([^;]*)");
    return e ? decodeURIComponent(e[1]) : null
  }, B.Cookie.prototype.kill = function(t) {
    var e = new Date;
    e.setTime(e.getTime() - 9999), this.set(t, "", {
      expires: e
    })
  }, B.CPPS = function(t, e) {
    this.gs = t, this.onSet = new B.FSEvent, this._blCPP = [], this.exp = e || 864e5
  }, B.CPPS.prototype = {
    addToBlacklist: function(t) {
      t = t || [];
      var e = this.all();
      this._blCPP = this._blCPP.concat(t);
      for (var r = 0; r < t.length; r++) delete e[t[r]];
      this.gs.set("cp", e)
    },
    set: function(t, e) {
      if (-1 == this._blCPP.indexOf(t)) {
        var r = this.all();
        r[t] = e + "", this.gs.set("cp", r, this.exp), this.onSet.fire(t, e)
      }
    },
    get: function(t) {
      return this.all()[t]
    },
    all: function() {
      return this.gs.get("cp") || {}
    },
    toQueryString: function() {
      var t = [],
        r = this.all();
      for (var i in r) t.push("cpp[" + e.enc(i) + "]=" + e.enc(r[i]));
      return t.join("&")
    },
    erase: function(t) {
      var e = this.all();
      delete e[t], this.gs.set("cp", e)
    },
    save: function() {
      this.gs.save()
    },
    append: function(t, e, r) {
      var i, n, s, a = this.gs.get("cp") || {}; - 1 == this._blCPP.indexOf(t) && (a[t] = (a[t] || "") + "," + e, r && (i = a[t].split(","), n = i.length - 1, s = i.length > r ? i.length - r : 0, a[t] = i.splice(s, n - s + 1).join()), this.gs.set("cp", a))
    }
  }, B.DomStorage = function(t, r, i, n) {
    this.isLocal = !!i, t || (t = "STORAGE"), this.guid = "FSR_" + t.replace(/[- _.&]/g, "").toUpperCase(), this.StorageFull = new B.FSEvent, this.storageLimit = 45e5, this.kill(), this.sync(), e.isDefined(r) && !r || setTimeout(e.proxy(function() {
      B.Bind(window, "unload", e.proxy(function() {
        this.commit()
      }, this))
    }, this), 100)
  }, B.DomStorage.prototype.testStorageLimit = function() {
    return this.storageBytesObj + this.storageBytesBlob >= this.storageLimit && (this.StorageFull.fire(this), !0)
  }, B.DomStorage.prototype.dispose = function(t) {
    this._data_obj[t] && (delete this._data_obj[t], this.storageBytesObj = JSON.stringify(this._data_obj).length)
  }, B.DomStorage.prototype.kill = function() {
    this.storageBytesObj = 0, this.storageBytesBlob = 0, this._data_obj = {}, this._data_blob = "", this.isNewStorage = !0
  }, B.DomStorage.prototype.get = function(t) {
    return this._data_obj[t]
  }, B.DomStorage.prototype.getBlob = function() {
    return this._data_blob
  }, B.DomStorage.prototype.erase = function(t) {
    delete this._data_obj[t], this.storageBytesObj = JSON.stringify(this._data_obj).length, this.isNewStorage = !1, this.testStorageLimit()
  }, B.DomStorage.prototype.set = function(t, e) {
    e && (this._data_obj[t] = e, this.storageBytesObj = JSON.stringify(this._data_obj).length, this.isNewStorage = !1, this.testStorageLimit())
  }, B.DomStorage.prototype.setBlob = function(t) {
    this._data_blob = t, this.storageBytesBlob = this._data_blob.length, this.isNewStorage = !1, this.testStorageLimit()
  }, B.DomStorage.prototype.isNew = function() {
    var t;
    return window.opener && !this.get("isNew") && (t = !0, this.set("isNew", t)), t || this.isNewStorage
  }, B.DomStorage.initialize = function(t) {
    t.apply(B.DomStorage)
  }, B.DomStorage.isSupported = function() {
    return !!localStorage
  }, B.DomStorage.prototype.sync = function() {
    var t;
    try {
      t = localStorage.getObject(this.guid + "_OBJ"), t && t.length > 0 && (this._data_obj = JSON.parse(t), this.storageBytesObj = t.length, this.isNewStorage = !1)
    } catch (t) {}
    try {
      t = localStorage.getObject(this.guid + "_BLOB"), t && t.length > 0 && (this._data_blob = t, this.storageBytesBlob = t.length, this.isNewStorage = !1)
    } catch (t) {}
  }, B.DomStorage.prototype.commit = function() {
    try {
      localStorage.setItem(this.guid + "_OBJ", JSON.stringify(this._data_obj)), localStorage.setItem(this.guid + "_BLOB", this._data_blob)
    } catch (t) {}
  }, B.WindowStorage = function(t, r) {
    t || (t = "STORAGE"), this.guid = "FSR_" + t.replace(/[- _.&]/g, "").toUpperCase(), this.storageLimit = 5e6, this.StorageFull = new B.FSEvent, this.kill(), this.sync(), e.isDefined(r) && !r || setTimeout(e.proxy(function() {
      B.Bind(window, "unload", e.proxy(function() {
        this.commit()
      }, this))
    }, this), 100)
  }, B.WindowStorage.prototype.testStorageLimit = function() {
    return this.storageBytesObj + this.storageBytesBlob >= this.storageLimit && (this.StorageFull.fire(this), !0)
  }, B.WindowStorage.prototype.dispose = function(t) {
    this._data_obj[t] && (delete this._data_obj[t], this.storageBytesObj = JSON.stringify(this._data_obj).length)
  }, B.WindowStorage.prototype.kill = function() {
    this.storageBytesObj = 0, this.storageBytesBlob = 0, this._data_obj = {}, this._data_blob = "", this.isNewStorage = !0
  }, B.WindowStorage.prototype.get = function(t) {
    return this._data_obj[t]
  }, B.WindowStorage.prototype.getBlob = function() {
    return this._data_blob
  }, B.WindowStorage.prototype.erase = function(t) {
    delete this._data_obj[t], this.storageBytesObj = JSON.stringify(this._data_obj).length, this.isNewStorage = !1, this.testStorageLimit()
  }, B.WindowStorage.prototype.set = function(t, e) {
    e && (this._data_obj[t] = e, this.storageBytesObj = JSON.stringify(this._data_obj).length, this.isNewStorage = !1, this.testStorageLimit())
  }, B.WindowStorage.prototype.setBlob = function(t) {
    this._data_blob = t, this.storageBytesBlob = this._data_blob.length, this.isNewStorage = !1, this.testStorageLimit()
  }, B.WindowStorage.prototype.isNew = function() {
    return this.isNewStorage
  }, B.WindowStorage.initialize = function(t) {
    t.apply(B.WindowStorage)
  }, B.WindowStorage.isSupported = function() {
    return !0
  }, B.WindowStorage.prototype.sync = function() {
    var t = B.nameBackup || window.name || "",
      e = this.guid + "_",
      r = "",
      i = t.indexOf(e + "BEGIN_OBJ");
    i > -1 && (r = t.substr(i + (e + "BEGIN_OBJ").length, t.indexOf(e + "END_OBJ") - (i + (e + "BEGIN_OBJ").length)));
    try {
      r.length > 0 && (this._data_obj = JSON.parse(r), this.storageBytesObj = r.length, this.isNewStorage = !1)
    } catch (t) {}
    r = "", (i = t.indexOf(e + "BEGIN_BLOB")) > -1 && (r = t.substr(i + (e + "BEGIN_BLOB").length, t.indexOf(e + "END_BLOB") - (i + (e + "BEGIN_BLOB").length)));
    try {
      r.length > 0 && (this._data_blob = r, this.storageBytesBlob = r.length, this.isNewStorage = !1)
    } catch (t) {}
  }, B.WindowStorage.prototype.commit = function() {
    var t = window.name;
    e.isDefined(t) || (t = "");
    var r = this.guid + "_",
      i = t.indexOf(r + "BEGIN_OBJ"),
      n = JSON.stringify(this._data_obj),
      s = r + "BEGIN_OBJ" + n + r + "END_OBJ";
    i > -1 ? t = t.substr(0, i) + s + t.substr(t.indexOf(r + "END_OBJ") + (r + "END_OBJ").length) : t += s, i = t.indexOf(r + "BEGIN_BLOB"), s = r + "BEGIN_BLOB" + this._data_blob + r + "END_BLOB", i > -1 ? t = t.substr(0, i) + s + t.substr(t.indexOf(r + "END_BLOB") + (r + "END_BLOB").length) : t += s, window.name = B.nameBackup = t, this.storageBytes = window.name.length
  }, B.nameBackup = window.name, B
});