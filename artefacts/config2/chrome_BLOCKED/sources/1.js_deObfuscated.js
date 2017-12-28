! function() {
  function t() {
    var t = (new Date).getTime(),
      e = Math.ceil(1e10 * Math.random());
    return "anon-" + t.toString() + "-" + e.toString()
  }

  function e(t) {
    function n(t) {
      for (var n = [], i = 0; i < t.length; i++) {
        var o = t[i];
        n.push(e(o))
      }
      return n.join("|")
    }

    function i(t) {
      var n = [];
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var a = t[i];
          "string" == typeof a && (a = e(a)), n.push([o(i), a].join(":"))
        }
      return n.join(",")
    }

    function o(t) {
      return t.replace(/[\|\,:]/g, " ")
    }
    return "[object Array]" === Object.prototype.toString.call(t) ? n(t) : "object" == typeof t ? i(t) : "string" == typeof t ? o(t) : t
  }

  function n(t) {
    return "string" == typeof t && t.length <= 64 && /^[\w\._-]+$/.test(t)
  }

  function i(t, e, n, i) {
    document.cookie = t + "=" + e + "; expires=" + new Date(n).toUTCString() + "; path=" + i + ";"
  }

  function o(t, e) {
    e = e || (new Date).getTime();
    var n = e + T,
      o = [t, e].join(":");
    i("_micpn", o, n, "/")
  }

  function a(t, e) {
    o(["esp", encodeURIComponent(t)].join("::"), e)
  }

  function r(t, e) {
    var n = (new Date).getTime() + D,
      o = [t, e].join("_");
    i("_mibhv", o, n, "/")
  }

  function s(t) {
    i(t, "", 0, "/")
  }

  function c(t) {
    return t && j.test(t)
  }

  function m(t) {
    return t.replace(/[^\w\.\-\@]/gi, "")
  }

  function p(t) {
    var e = /^(\w+?):(\d+)$/,
      n = t && t.match(e);
    return n && {
      key: n[1],
      timestamp: new Date(parseInt(n[2], 10))
    }
  }

  function u(t) {
    var e = /^esp::([^;:,\s]+):(\d+)/,
      n = t && t.match(e);
    return n && {
      key: decodeURIComponent(n[1]),
      timestamp: new Date(parseInt(n[2], 10))
    }
  }

  function h(t, e) {
    var n = /^(.+)_(\d+)$/,
      i = t && t.match(n);
    return i && {
      user: i[1],
      companyId: i[2],
      anonymous: c(i[1]),
      hasCookie: e
    }
  }

  function f(t) {
    var e = {};
    for (var n in t)
      if (t.hasOwnProperty(n))
        if ("function" == typeof t[n]) try {
          e[n] = t[n]()
        } catch (t) {
          e.jserror = t.toString(), z(t)
        } else e[n] = t[n];
    return e
  }

  function d(t, e) {
    t.attachEvent ? t.attachEvent("onclick", e) : t.addEventListener && t.addEventListener("click", e, !1)
  }

  function l() {
    for (var t in x) {
      var e = x[t],
        n = Sizzle(t)[0];
      if (x[t] = n, n && !e)
        for (var i in O[t]) d(n, O[t][i])
    }
  }

  function exists(t, e) {
    1 != arguments.length && "object" == typeof t || (e = t, t = document);
    var n = Sizzle(e, t)[0];
    return !!n
  }

  function attr(t, e, n) {
    try {
      "object" != typeof t && (n = e, e = t, t = document);
      var i = Sizzle(e, t)[0];
      return i ? n ? i.getAttribute(n) : i.innerHTML : null
    } catch (t) {
      return S(t.message + " for " + e + " -- " + n), null
    }
  }

  function queryParam(t) {
    return $[t]
  }

  function addEventToElement(t, e, n) {
    var i;
    if (i = e ? function() {
        window[P](t, f(e))
      } : function() {
        window[P](t)
      }, O[n] || (O[n] = {}), !O[n][t]) {
      O[n][t] = i;
      var o = x[n],
        a = Sizzle(n)[0];
      if (x[n] = a, a && !o)
        for (var r in O[n]) d(a, O[n][r]);
      else a && o && d(a, i)
    }
  }

  function g(t, page, e, n) {
    "object" != typeof page && (n = e, e = page, page = t.customData), page.categories = page.categories || [], page.categories.push({
      id: encodeURIComponent(e),
      url: encodeURIComponent(n)
    })
  }

  function regexRetrieve(t, e, n) {
    var i = e.match(t),
      o = i ? i[n] : "";
    return o || ""
  };
  for (var v = "", y = "", _ = "5167", w = "/p/cp/", I = "https://ssl.micpn.com", C = "MovableInkTrack", k = 864e5, T = 4 * k, D = 1095 * k, j = /^anon-\d{13}-\d{1,11}$/, U = document.getElementsByTagName("script"), b = 0; b < U.length; b++)
    if (U[b].src) {
      var K = U[b].src.match(/(\/\/.+)\/p\/js\/\d+/);
      K && (I = K[1])
    }
  var S = window.location.hash.match(/midebug/) ? function(t) {
      console.log(t)
    } : function() {},
    z = window.location.hash.match(/midebug/) ? function(t) {
      console.error(t)
    } : function() {},
    P = window[C] || "_miconv",
    E = window[P] || [],
    R = 1e3,
    F = 500;
  if (!E.initialized) {
    var O = {},
      x = {},
      A = E.q || window._miconv || [];
    A.length > 0 && S("Loading " + A.length + " queued events.");
    for (var $ = {}, L = window.location.search.substring(1), J = L.split("&"), b = 0; b < J.length; b++) {
      var M = J[b].split("="),
        q = M[0],
        B = (M[1] || "").replace(/\+/g, "%20");
      $[decodeURIComponent(q)] = decodeURIComponent(B)
    }
    var H = {};
    if ("" !== document.cookie)
      for (var N = document.cookie.split(";"), b = 0; b < N.length; b++) {
        var G = N[b].replace(/^\s+|\s+$/g, "").split("=");
        H[G[0]] = G[1]
      }
    String.prototype.trim || (String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    });
    var Q = function() {};
    Q.prototype.init = function() {
      var e = this;
      this.userIdentifier = t(), this.companyId = _, this.campaignKey = -1, this.campaignTimestamp = new Date, this.anonUserIdentifier = null, this.hasCookie = "false", this.products = [];
      var n = {
        local: h(H._mibhv, "host"),
        remote: h(y, "micpn"),
        campaign: p(H._micpn || v),
        espCampaign: u(H._micpn || v)
      };
      n.campaign && (this.campaignKey = n.campaign.key), n.espCampaign && (this.espKey = n.espCampaign.key);
      var i = n.campaign && n.campaign.timestamp || n.espCampaign && n.espCampaign.timestamp;
      if (i && (this.campaignTimestamp = i), "" !== H._micpn && "" !== v) {
        var r = p(H._micpn),
          s = p(v);
        r && s && r.timestamp < s.timestamp && (this.campaignKey = s.key, this.campaignTimestamp = s.timestamp, o(this.campaignKey, this.campaignTimestamp.getTime()));
        var c = u(H._micpn),
          f = u(v);
        c && f && c.timestamp < f.timestamp && (this.espKey = f.key, this.campaignTimestamp = f.timestamp, a(this.espKey, this.campaignTimestamp.getTime()))
      }
      var d;
      if (n.local && !n.local.anonymous ? d = n.local : n.remote && !n.remote.anonymous ? d = n.remote : n.local && n.local.anonymous ? d = n.local : n.remote && n.remote.anonymous && (d = n.remote), d && (this.userIdentifier = d.user, this.companyId = d.companyId, this.hasCookie = d.hasCookie), n.local && n.local.anonymous ? this.anonUserIdentifier = n.local.user : n.remote && n.remote.anonymous && (this.anonUserIdentifier = n.remote.user), this.customData = {
          params: {}
        }, this.executeCustomJs(), this.customData && "object" == typeof this.customData.params) {
        var g = this.customData.params;
        for (var w in g) g.hasOwnProperty(w) && g[w].length && ($[w] = g[w]);
        delete this.customData.params
      }
      $.mi_u && (this.userIdentifier = m($.mi_u)), $.mi_cmp && (this.campaignKey = m($.mi_cmp)), $.mi_ecmp && (this.espKey = $.mi_ecmp), this.sendPageEvents(), ($.mi_cmp || $.mi_ecmp) && this.push("click"), this.currentUrl = document.location.toString(), setInterval(function() {
        e.currentUrl != document.location.toString() && (e.currentUrl = document.location.toString(), e.customData = {
          params: {}
        }, e.executeCustomJs(), e.sendPageEvents())
      }, R), setInterval(l, F);
      for (var w = 0; w < A.length; w++) this.push(A[w]);
      S("Initialized miconv.")
    }, Q.prototype.setCompanyId = function(t) {
      this.companyId = t
    }, Q.prototype.sendPageEvents = function() {
      "conversion" == this.customData.type && this.push("conversion", this.customData), this.push("pageview", this.customData)
    }, Q.prototype.executeCustomJs = function() {
      var t = this,
        setCompanyId = t.setCompanyId.bind(t),
        addCategory = function addCategory(page, e, n) {
          g(t, page, e, n)
        };
      ! function(page) {
        try {} catch (t) {
          page.jserror = t.toString(), z(t)
        }
      }(this.customData)
    }, Q.prototype.push = function() {
      var t;
      if (t = "string" == typeof arguments[0] ? Array.prototype.slice.call(arguments, 0) : Array.prototype.slice.call(arguments[0], 0), "send" === t[0]) t.shift();
      else {
        if ("addProduct" === t[0]) return this.products.push(t[1]), void 0;
        if ("addPromo" === t[0]) return t[1] && (t[1].promo = !0), this.products.push(t[1]), void 0
      }
      var e = t[0];
      if (n(e)) {
        var i;
        i = void 0 === t[1] ? {
          amount: 0
        } : "string" == typeof t[1] || "number" == typeof t[1] ? {
          amount: t[1]
        } : t[1];
        var m = (i.amount || i.revenue || "").toString().replace(/[^0-9\.]/g, "");
        i.amount = parseFloat(m) || 0;
        var p = t[2],
          u = this.campaignTimestamp.getTime(),
          h = {
            t: (new Date).getTime(),
            mi_u: this.userIdentifier,
            mi_cid: this.companyId,
            page_title: document.title,
            referrer: document.referrer || document.referer,
            timezone_offset: (new Date).getTimezoneOffset(),
            event_type: e,
            conversion_id: p,
            cdate: u,
            ck: this.hasCookie,
            products: this.products.length ? this.products : null
          };
        this.espKey && (h.mi_ecmp = this.espKey), this.anonUserIdentifier && !c(this.userIdentifier) && (h.link = this.anonUserIdentifier);
        for (var f in i) i.hasOwnProperty(f) && (h[f] = i[f]);
        this.sendData(h), this.anonUserIdentifier = null, this.hasCookie = "host", r(this.userIdentifier, this.companyId), e.match(/^conver(sion|t)/) ? s("_micpn") : $.mi_cmp ? o($.mi_cmp) : $.mi_ecmp ? a($.mi_ecmp) : H._micpn || "" === v || (v.indexOf("esp::") >= 0 ? a(this.espKey, this.campaignTimestamp.getTime()) : o(this.campaignKey, this.campaignTimestamp.getTime()))
      }
    }, Q.prototype.sendData = function(t) {
      var n = [I, w, this.campaignKey, "/track.gif"].join(""),
        i = [];
      for (var o in t)
        if (t.hasOwnProperty(o) && t[o]) {
          var a = t[o];
          "string" != typeof a && (a = e(a));
          var r = [encodeURIComponent(o), encodeURIComponent(a)].join("=");
          i.push(r)
        }
      n += "?" + i.join("&"), S("Constructed URL: " + n), this.loadImage(n, function() {
        S("Pushed event: " + this.campaignKey + " : " + t.event_type + ", " + n)
      }, function() {
        S("Failed event: " + this.campaignKey + " : " + t.event_type + ", " + n)
      })
    }, Q.prototype.loadImage = function(t, e, n) {
      var i = new Image(1, 1);
      i.onload = function() {
        e(), i.onload = null
      }, i.onerror = function() {
        n(), i.onerror = null
      }, i.src = t
    }, Q.setup = function() {
      var t = new Q;
      window[P] = function() {
        t.push.apply(t, arguments)
      }, window[P].push = window[P], window[P].initialized = !0, t.init()
    }, Q.setup()
  }
}();