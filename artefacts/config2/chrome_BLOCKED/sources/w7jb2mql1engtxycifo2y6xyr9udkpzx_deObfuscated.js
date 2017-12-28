window._roost || (window._roost = []), _roost.init || ! function(t) {
  function e(t) {
    var e = document.createElement("iframe")
    e.style.display = "none", e.src = t, document.body.appendChild(e)
  }

  function o(t) {}

  function s(t, e) {
    var o = document.createElement("iframe")
    o.style.display = "none"
    var i = !1
    o.onload = function() {
      i = !0
    }, setTimeout(function() {
      if (!i && e) {
        var t = "Roost: " + e
        P._debugLog(t)
      }
    }, 5e3), o.src = t, document.body.appendChild(o)
  }

  function r() {
    "undefined" != typeof twttr && "undefined" != typeof twttr.events && "undefined" != typeof twttr.events.bind && twttr.events.bind("tweet", function(t) {
      P.push(["social_action", "TWEET"])
    }), "undefined" != typeof FB && "undefined" != typeof FB.Event && "undefined" != typeof FB.Event.subscribe && (FB.Event.subscribe("edge.create", function(t) {
      P.push(["social_action", "FB_LIKE"])
    }), FB.Event.subscribe("edge.remove", function(t) {
      P.push(["social_action", "FB_UNLIKE"])
    }), FB.Event.subscribe("comment.create", function(t) {
      P.push(["social_action", "FB_COMMENT"])
    }), FB.Event.subscribe("comment.remove", function(t) {
      P.push(["social_action", "FB_UNCOMMENT"])
    }), FB.Event.subscribe("message.send", function(t) {
      P.push(["social_action", "FB_SHARE"])
    }))
  }

  function n(t) {
    for (var e = [], o = 0; o < _roost.length; o++) _roost[o].length && _roost[o][0] == t ? P.push(_roost[o]) : e.push(_roost[o])
    _roost = e
  }

  function a(e) {
    l({
      url: _.pingHost + "/ping",
      vars: {
        appKey: _.appKey,
        referrer: encodeURIComponent((document.referrer + "").split("'").join("%27")),
        page: encodeURIComponent((t.location + "").split("'").join("%27")),
        action: "log",
        details: e ? JSON.stringify(e) : "",
        rdt: _.rdt
      }
    })
  }

  function l(t) {
    t = t || {}, t.url = t.url || null, t.vars = t.vars || {}, t.error = t.error || function() {}, t.success = t.success || function() {}
    var e = []
    for (var o in t.vars) e.push(o + "=" + encodeURIComponent(t.vars[o]))
    var i = e.join("&")
    if (t.url) {
      var s = t.url + "?" + i,
        r = new Image
      t.error && (r.onerror = t.error), t.success && (r.onload = t.success), r.src = s
    }
  }

  function d(t) {
    _[t[0]] = "undefined" == typeof t[1] ? _[t[0]] : t[1]
  }

  function p(t) {
    var e = "undefined" == typeof t[1] ? _[t[0]] : t[1]
    _.onload.push(e), _.onloadData && e(_.onloadData)
  }

  function c(t) {
    var e = "undefined" == typeof t[1] ? _[t[0]] : t[1]
    _.onresult.push(e), _.onresultData && e(_.onresultData)
  }

  function g(t) {
    return t && t.length > 0
  }

  function u(t) {
    return t && 0 === t.indexOf(G) ? t.slice(G.length) : t
  }

  function m(t, e) {
    for (var o = "", i = 0; e > i; i++) o += t
    return o
  }

  function h(t) {
    return !t || t && 0 === t.length
  }

  function b(t, e) {
    for (var o in e) e.hasOwnProperty(o) && ("object" == typeof e[o] ? (t[o] || (t[o] = {}), t[o] = b(t[o], e[o])) : t[o] = e[o])
    return t
  }

  function f(t) {
    return function(e) {
      return _.appKey ? void t(e) : !1
    }
  }

  function x(t, e, o, i) {
    o || (o = 0)
    var s = new Date
    s.setTime(s.getTime() + 24 * o * 60 * 60 * 1e3)
    var r = escape(e) + (null == o || 0 == o ? "" : "; expires=" + s.toGMTString()) + "; " + (i ? " domain=." + i + "; " : "") + " path=/"
    document.cookie = t + "=" + r
  }

  function w(t) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(t + "="), -1 != c_start) ? (c_start = c_start + t.length + 1, c_end = document.cookie.indexOf(";", c_start), -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : ""
  }

  function v(t, e, o) {
    var s = function(t, e, o) {
        return m("	", o) + t + ": " + e + ";\n"
      },
      r = function(t, e, o) {
        var i = m("	", o) + t + " {\n"
        return i += v(e, o + 1), i += m("	", o) + "}\n"
      },
      n = ""
    if ("undefined" == typeof e && (e = 0), "undefined" == typeof o && (o = !1), t.attributes)
      for (i in t.attributes) {
        var a = t.attributes[i]
        if (a instanceof Array)
          for (var l = 0; l < a.length; l++) n += s(i, a[l], e)
        else n += s(i, a, e)
      }
    if (t.children) {
      var d = !0
      for (i in t.children) o && !d ? n += "\n" : d = !1, n += r(i, t.children[i], e)
    }
    return n
  }

  function k(t) {
    return t && t.origin ? -1 == M.indexOf(t.origin) ? void P._debugLog("Skipping Roost processing message based on origin: " + t.origin, t.data) : void y(t) : void 0
  }

  function y(t) {
    P._debugLog("Processing event: ", t.origin, t.data)
    try {
      var e = JSON.parse(t.data)
    } catch (o) {
      return void P._debugLog("Got invalid JSON string for event: ", t.data)
    }
    e.type && ("load" == e.type ? (_.enabled = e.enabled, _.tags = e.tags, _.alias = e.alias, _.notifications = e.notifications, _.properties = e.properties, _.latLong = e.latLong, V.postPageview(!1)) : "check" == e.type ? (_.rdt = u(e.deviceToken), _.denied = e.denied, V.checkComplete()) : "config" == e.type ? (_.configName = e.configName, _.websiteDomain = e.websiteDomain, _.serviceWorkerHostPath = e.serviceWorkerHostPath, _.safariWebsitePushID = e.safariWebsitePushID, _.usePromptKit = e.usePromptKit, _.usePromptKitBell = e.usePromptKitBell, _.serviceWorkerRelativePath = e.serviceWorkerRelativePath, _.manifestRelativePath = e.manifestRelativePath, _.cnameHostname = e.cnameHostname, _.poweredBySubdomain = e.poweredBySubdomain, _.pkSettings = b(b(S, e.pkSettings), _.bellopts), V.postConfig()) : "emailregistered" == e.type && (P._debugLog("processMessage called for email"), tt.emailUI.handleResponse(e.success)))
  }

  function C() {
    if (!window._roostLoaded) {
      if (window._roostLoaded = !0, g(w("roost-queryparams"))) {
        var e = t.document.createElement("script")
        return e.type = "text/javascript", e.src = "//cdn.goroost.com/roostjs/" + _.appKey + "?" + w("roost-queryparams"), e.async = "async", void t.document.body.appendChild(e)
      }
      "true" == w("roost-debug") ? (_.logging = !0, P._debugLog = window.console.log.bind(window.console)) : P._debugLog = function() {}, window && window.addEventListener && window.addEventListener("message", k, !1), r(), n("experimental"), n("chrome"), n("safari"), n("firefox"), n("host"), n("bellopts"), V.preConfig()
    }
  }
  var _ = {
      autoprompt: !0,
      appKey: "w7jb2mql1engtxycifo2y6xyr9udkpzx",
      experimental: !1,
      chrome: !0,
      safari: !0,
      firefox: !0,
      host: "https://go.goroost.com",
      nodeHost: "https://dashboard.goroost.com",
      pageConfigHost: "https://pageconfig.goroost.com",
      pageViewHost: "https://pageview.goroost.com",
      pingHost: "https://ping.goroost.com",
      onload: [],
      onresult: [],
      onloadData: null,
      onresultData: null,
      rdt: null,
      rid: null,
      tags: null,
      properties: null,
      latLong: null,
      alias: null,
      notifications: [],
      unreadNoteCount: 0,
      enabled: !0,
      initFunction: null,
      idFunction: null,
      configName: null,
      websiteDomain: null,
      serviceWorkerHostPath: null,
      safariWebsitePushID: null,
      usePromptKit: !1,
      usePromptKitBell: !1,
      serviceWorkerRelativePath: null,
      manifestRelativePath: null,
      cnameHostname: null,
      denied: !1,
      reprompt: !1,
      debugging: !1,
      bellopts: {},
      pkSettings: {},
      poweredBySubdomain: null,
      bellInitialized: !1
    },
    S = {
      height: "60px",
      width: "60px",
      lgMobileHeight: "60px",
      lgMobileWidth: "60px",
      smMobileHeight: "48px",
      smMobileWidth: "48px",
      zIndex: 1e6,
      bellColor: "#FFF",
      bgColor: "#3b3b3b",
      absolute: !0,
      circular: !0,
      navId: "header",
      showUnread: "count",
      unreadBackgroundColor: "#e25351",
      unreadTextColor: "#FFF",
      share: !0,
      left: !1,
      top: !1,
      showBell: !0,
      bellCustomStyles: {},
      notificationCenterCustomStyles: {},
      coachmarks: !0,
      onPageNotification: !1,
      pkOptinMethod: "flyout",
      pkDontSend: !1,
      offset: {
        right: 0,
        left: 0,
        bottom: 0,
        top: 0
      },
      mobileOffset: {
        right: null,
        left: null,
        bottom: null,
        top: null
      },
      email: !1,
      settingsForAll: !1,
      regOnlyBell: !1,
      pkColors: {
        button: "#1982df",
        dontSend: "#1982df"
      },
      fadeOnScroll: {
        enabled: !1,
        mobileOnly: !1
      },
      useTimestamp: !1,
      promptOnScroll: {
        enabled: !1,
        distance: null
      },
      hideTitle: !1,
      customPK: {
        title: !1,
        logo: !1,
        deviceImage: !0
      },
      noteCenterOptIn: {
        useDeviceImage: !0,
        useLogo: !1
      },
      notesInNewWindow: !1,
      promptkitPage: {
        bgColor: "rgba(0, 0, 0, 0.7)",
        bgImage: null,
        bgBlur: "5px",
        checkmarkColor: "#18BD8C",
        useLogoSquare: !1,
        backLink: !1
      },
      bellOnSupportedBrowsers: !1,
      hideAttribution: !1,
      flyoutDaysRepeatInterval: 7,
      urlSegmentation: !1,
      urlSegmentationBlacklist: [],
      text: {
        noteTab: "Notifications",
        settingsTab: "Settings",
        coachmark: null,
        noNotes: "No new notifications",
        flyout: {
          button: "Subscribe",
          headline: "$SITE",
          title: "Notifications from $SITE",
          message: "Get top stories sent right to your device!",
          callout: "Notifications from $SITE",
          dontSend: "Don't send"
        },
        noteCenterOptin: {
          title: "$SITE Notifications",
          body: "Get stories like the one below sent right to your desktop",
          button: "Subscribe",
          decline: "No Thanks"
        },
        subscriptionBox: "Enable Notifications",
        unsubConfirmation: "You've been unsubscribed",
        clear: "Clear All",
        prompt: {
          confirmMessage: 'Click "Allow" to start receiving desktop notifications from $SITE.',
          button: "Subscribe",
          thanksMessage: "Thanks for subscribing!"
        }
      }
    },
    N = !!window.PushManager || !!navigator.push,
    E = !!window.Notification,
    I = !!navigator.serviceWorker,
    A = window.chrome,
    z = window.navigator.vendor
  A = null !== A && void 0 !== A && "Google Inc." === z ? !0 : !1
  var B = N && E && I,
    L = !1; - 1 !== window.navigator.userAgent.indexOf("Firefox") && (L = !0)
  var F, T = [],
    P = {
      init: !0,
      push: function() {
        for (var e = 0; e < arguments.length; e++) {
          var o = arguments[e]
          o && o.length && q["" + o[0].toLowerCase()] ? q[o[0].toLowerCase()](o) : t.console.log("Invalid command: ", o)
        }
      },
      getCookie: w,
      setCookie: x,
      promptable: function() {
        return P._debugLog("promptable", g(_.rdt), _.denied, P.supportedBrowser()), g(_.rdt) || _.denied ? !1 : P.supportedBrowser()
      },
      supportedBrowser: function() {
        return "undefined" != typeof window.safari && "undefined" != typeof window.safari.pushNotification ? !0 : _.usePromptKit && (A || L) ? !0 : B ? !0 : !1
      },
      supportedHost: function() {
        return -1 == window.location.href.indexOf("localhost") && "https:" !== location.protocol ? !1 : document.domain != _.websiteDomain && "*" !== _.websiteDomain ? !1 : !0
      },
      prompt: function() {
        F.prompt()
      },
      register: function() {
        F.register()
      },
      promptKitRedirect: function() {
        F.register()
      },
      openNoteCenter: function() {
        o("bellclick"), tt.paneUI.show(), P._removeClass(tt.roostNodes.wrapper, tt.roostClasses.coachmarks), tt.baseUI.postRenderStyles()
      },
      showBell: function() {
        if (o("bellview"), !_.pkSettings.bellOnSupportedBrowsers || _roost.isSupportedBrowser() && isLoggedIn()) {
          if (P._isIELessThanNine(window)) return void console.log("Roost: Not showing bell on Internet Explorer versions less than 9")
          tt.show(), P._removeClass(P._getElById("goroostcom-bell"), "hide-bell")
        }
      },
      hideBell: function() {
        P._addClass(P._getElById("goroostcom-bell"), "hide-bell")
      },
      restartBell: function() {
        tt.restart()
      },
      _fireRoostCallback: function(t) {
        _.onresultData = t, window._roostCallback && "function" == typeof window._roostCallback && window._roostCallback(t)
        for (var e = 0; e < _.onresult.length; e++) {
          var o = _.onresult[e]
          o && "function" == typeof o && o(_.onresultData)
        }
      },
      _isAutoPrompt: function() {
        return _.autoprompt
      },
      _isEnabled: function() {
        return _.enabled
      },
      _getTags: function() {
        return _.tags
      },
      _getAlias: function() {
        return _.alias
      },
      _getRID: function() {
        return _.rid
      },
      _getProperties: function() {
        return _.properties
      },
      _getLatLong: function() {
        return _.latLong
      },
      _domain: function() {
        var t = location.host,
          e = location.host.split(".").reverse()
        return e.length > 1 && -1 == t.indexOf("blogger.com") && (t = e[1] + "." + e[0]), t = t.split(":")[0]
      },
      _cookiesEnabled: function() {
        var t = "cc" + Math.random(),
          e = !1
        return _roost.setCookie(t, "true"), _roost.getCookie(t) && (e = !0), _roost.setCookie(t, "", -1), e
      },
      _removeClass: function(t, e) {
        P._hasClass(t, e) && P._toggleClass(t, e)
      },
      _addClass: function(t, e) {
        P._hasClass(t, e) || P._toggleClass(t, e)
      },
      _restartBell: function() {
        tt.restart()
      },
      _getTextWidth: function(t, e) {
        var o = P._getTextWidth.canvas || (P._getTextWidth.canvas = document.createElement("canvas")),
          i = o.getContext("2d")
        i.font = "normal " + e + "px helvetica neue"
        var s = i.measureText(t)
        return s.width
      },
      _getFontSize: function(t) {
        var e = window.getComputedStyle(t, null).getPropertyValue("font-size")
        return parseFloat(e)
      },
      _getStyleWidth: function(t) {
        var e = window.getComputedStyle(t, null).getPropertyValue("width")
        return parseFloat(e)
      },
      _getScrollDistance: function() {
        return document.all ? iebody.scrollTop : t.pageYOffset
      },
      _toggleClass: function(t, e) {
        if (!t) return void P._debugLog("Element not found", (new Error).stack)
        if (t.classList) t.classList.toggle(e)
        else {
          for (var o = t.className.split(" "), i = -1, s = o.length; s--;) o[s] === e && (i = s)
          i > -1 ? o.splice(i, 1) : o.push(e), t.className = o.join(" ")
        }
      },
      _isIELessThanNine: function(t) {
        return window.attachEvent && !window.addEventListener
      },
      _isSmallScreen: function(t) {
        return t.screen.width <= 770
      },
      _isMediumScreen: function(t) {
        return t.screen.width > 770 && t.screen.width <= 1025
      },
      _hasClass: function(t, e) {
        return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : void P._debugLog("Element not found", (new Error).stack)
      },
      _getElById: function(t) {
        return document.getElementById(t)
      },
      _deepCopy: function(t, e) {
        for (var o in e) "object" == typeof e[o] && null !== e[o] ? (t[o] = t[o] || {}, arguments.callee(t[o], e[o])) : t[o] = e[o]
        return t
      },
      _promptMinVisits: function() {
        if (_.minvisits > -1) {
          if (!_roost._cookiesEnabled()) return !1
          var t = "_r_visits",
            e = _roost.getCookie(t)
          return e ? e++ : e = 1, _roost.setCookie(t, e, 30), _.minvisits <= e
        }
        return !1
      },
      _enqueue: function(t) {
        T.push(t), 1 == T.length && P._processQueue()
      },
      _processQueue: function() {
        if (T.length) {
          var t = T[0]
          t()
        }
      },
      _workFinished: function() {
        T.length && (T.shift(), P._processQueue())
      },
      _state: function() {
        var t = {
          appKey: _.appKey,
          rdt: _.rdt,
          serviceWorker: {
            hasPush: N,
            hasNotification: E,
            hasServiceWorker: I,
            supportsSWPush: B
          },
          cookies: {
            banner: tt.bannerCookie.get(),
            flyout: tt.flyoutCookie.get(),
            noteCenterOpen: tt.paneCookie.get(),
            notesRead: tt.readCookie.get()
          }
        }
        console.log("Roost: STATE: ", t)
      },
      _resetCookies: function() {
        for (var t = ["roost-isopen", "roost-nothanks", "roost-flyout", "roost-notes-read", "_rpkd", "_r_visits"], e = 0; e < t.length; e++) document.cookie = t[e] + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        console.log("Roost: Cookies Cleared: ", t)
      },
      _deviceInfo: function() {
        var e = "https://dashboard.goroost.com/dashboard/deviceinfo/" + encodeURIComponent(_.rdt) + "/" + encodeURIComponent(_.appKey)
        t.location = e
      }
    },
    M = [_.host, "https://" + document.domain, "http://192.168.0.7:8081", "http://localhost:8081", "http://localhost:9000", "http://localhost:8000", "http://localhost:8040", "http://localhost:8050", "http://go.goroost.com", "https://go.goroost.com", "http://cdn.goroost.com", "https://cdn.goroost.com", "http://dashboard.goroost.com", "https://dashboard.goroost.com", "http://pageconfig.goroost.com", "https://pageconfig.goroost.com", "http://pageview.goroost.com", "https://pageview.goroost.com", "http://ping.goroost.com", "https://ping.goroost.com"],
    O = f(function(t) {
      for (var e = [], o = 1; o < t.length; o++) e.push(t[o])
      var i = t[0]
      if ("tags" == i || "segments" == i) _.tags = e
      else if ("segments_add" == i) _.tags ? _.tags = _.tags.concat(e) : _.tags = e
      else if ("segments_clear" == i) _.tags && (_.tags = [])
      else if ("segments_remove" == i && _.tags) {
        for (var s = 0; s < e.length; s++) {
          var r = e[s],
            n = _.tags.indexOf(r)
          n > -1 && _.tags.splice(n, 1)
        }
        _.tags = _.tags.concat(e)
      }
      P._enqueue(function() {
        _.rdt ? l({
          url: _.pingHost + "/ping",
          vars: {
            action: i,
            appKey: _.appKey,
            tags: JSON.stringify(e),
            rdt: _.rdt
          },
          success: P._workFinished
        }) : P._workFinished()
      })
    }),
    R = f(function(t) {
      var e = null
      t && 2 == t.length && (e = t[1])
      var o = t[0]
      "alias" == o ? _.alias = e : "alias_clear" == o && (_.alias = null), P._enqueue(function() {
        _.rdt ? l({
          url: _.pingHost + "/ping",
          vars: {
            action: t[0],
            appKey: _.appKey,
            alias: e,
            rdt: _.rdt
          },
          success: P._workFinished
        }) : P._workFinished()
      })
    }),
    K = f(function(t) {
      var e = t[0],
        o = "",
        i = _.properties
      if ("properties" == e) {
        var s = {}
        if (o = t[1], !U(o)) return P._debugLog("Invalid properties JSON received:", o), void P._workFinished()
        o = JSON.parse(o)
        for (var r in o) s[r] = W(D(o[r]))
        i = s
      } else if ("properties_add" == e) {
        if (o = t[1], !U(o)) return P._debugLog("Invalid properties JSON received:", o), void P._workFinished()
        if (o = JSON.parse(o), i)
          for (var r in o) i.hasOwnProperty(r) ? i[r] = W(i[r].concat(o[r])) : i[r] = W(D(o[r]))
        else
          for (var r in o) i[r] = W(D(o[r]))
      } else if ("properties_clear" == e) i = {}
      else if ("properties_remove" == e) {
        var n = t[1]
        if (!U(n)) return P._debugLog("Invalid properties JSON received:", n), void P._workFinished()
        n = JSON.parse(n)
        for (var r in n)
          if (i.hasOwnProperty(r)) {
            if (Array.isArray(n[r]))
              for (var a = 0; a < n[r].length; a++) i[r].indexOf(n[r][a] > -1) && i[r].splice(i[r].indexOf(n[r][a]), 1)
            else Array.isArray(n[r]) || i[r].indexOf(n[r] > -1) && i[r].splice(i[r].indexOf(n[r]), 1)
            0 == i[r].length && delete i[r], (0 == n[r].length || "" === n[r]) && delete i[r]
          }
      }
      _.properties = i, P._enqueue(function() {
        _.rdt ? l({
          url: _.pingHost + "/ping",
          vars: {
            action: "properties",
            appKey: _.appKey,
            properties: JSON.stringify(i),
            rdt: _.rdt
          },
          success: P._workFinished
        }) : P._workFinished()
      })
    }),
    D = function(t) {
      return Array.isArray(t) ? t : [t]
    },
    W = function(t) {
      for (var e = t.concat(), o = 0; o < e.length; ++o)
        for (var i = o + 1; i < e.length; ++i) e[o] === e[i] && e.splice(i--, 1)
      return e
    },
    U = function(t) {
      try {
        JSON.parse(t)
      } catch (e) {
        return !1
      }
      return !0
    },
    H = f(function(t) {
      var e = t[0],
        o = [],
        i = _.latLong
      if ("latlong" == e) return console.log("can not SET latLong -- use latlong_add instead"), void P._workFinished()
      if ("latlong_add" == e) {
        if (o = t[1], !J(o)) return void P._workFinished()
        i.push(o)
      } else {
        if ("latlong_clear" == e) return console.log("can not CLEAR latLong -- use latlong_remove instead"), void P._workFinished()
        if ("latlong_remove" == e) {
          var s = t[1]
          if (void 0 === i[s]) return void P._workFinished()
          i.splice(s, 1)
        }
      }
      _.latLong = i
      var r = JSON.stringify(_.latLong)
      P._enqueue(function() {
        _.rdt ? l({
          url: _.pingHost + "/ping",
          vars: {
            action: "latlong",
            appKey: _.appKey,
            latLong: r,
            rdt: _.rdt
          },
          success: P._workFinished
        }) : P._workFinished()
      })
    }),
    J = function(t) {
      if (2 !== t.length) return !1
      for (var e = 0; 2 > e; e++)
        if ("number" != typeof t[e]) return !1
      return !0
    },
    q = {
      appKey: function() {},
      onload: p,
      onresult: c,
      host: d,
      experimental: d,
      chrome: d,
      firefox: d,
      bellopts: d,
      safari: d,
      minvisits: d,
      tags: O,
      segments: O,
      segments_add: O,
      segments_remove: O,
      segments_clear: O,
      alias: R,
      alias_clear: R,
      properties: K,
      properties_add: K,
      properties_remove: K,
      properties_clear: K,
      latlong: H,
      latlong_add: H,
      latlong_remove: H,
      latlong_clear: H,
      autoprompt: d,
      prompt: function() {
        _roost.prompt && _roost.prompt()
      },
      log: function(t) {
        a(t[1])
      },
      social_action: f(function(t) {
        l({
          url: _.pingHost + "/ping",
          vars: {
            action: "socialAction",
            appKey: _.appKey,
            useraction: t[1],
            rdt: _.rdt
          }
        })
      }),
      enable: f(function(t) {
        P._enqueue(function() {
          l({
            url: _.pingHost + "/ping",
            vars: {
              action: "enable",
              appKey: _.appKey,
              enable: t[1],
              rdt: _.rdt
            },
            success: P._workFinished
          })
        })
      })
    },
    G = "https://android.googleapis.com/gcm/send/",
    V = {
      preConfig: function() {
        P._debugLog("#STAGE: preConfig"), V.config()
      },
      config: function() {
        P._debugLog("#STAGE: config"), e(_.pageConfigHost + "/pageconfig?appKey=" + encodeURIComponent(_.appKey) + "&url=" + encodeURIComponent(document.URL))
      },
      postConfig: function() {
        P._debugLog("#STAGE: postConfig"), P._debugLog("hasPush", N, "hasNotification", E, "hasServiceWorker", I, "supportsSWPush", B), _.usePromptKit ? _.safari && window && "undefined" != typeof window.safari ? F = Q.safariPromptKit : (_.chrome && A || _.firefox && L) && (F = Q.chromePromptKit) : _.safari && window && "undefined" != typeof window.safari ? F = Q.safari : B && ("vxutzmlpw56gxubzi60plwtf6f9bus8t" == _.appKey ? F = _.chrome && A || _.firefox && L ? Q.serviceWorkers : Q.serviceWorkers : "https:" != window.location.protocol && -1 == document.domain.indexOf("localhost") ? console.log("Roost Error: Domain must use HTTPS to use Roost for Chrome.") : F = _.chrome && A || _.firefox && L ? Q.serviceWorkers : Q.serviceWorkers), F ? F.check() : V.checkComplete()
      },
      checkComplete: function() {
        P._debugLog("#STAGE: checkComplete"), V.prePageview()
      },
      prePageview: function() {
        P._debugLog("#STAGE: prePageview"), V.pageview()
      },
      pageview: function() {
        P._debugLog("#STAGE: pageview"), e(_.pageViewHost + "/pageview?rdt=" + encodeURIComponent(_.rdt) + "&rid=" + encodeURIComponent(_.rid) + "&appKey=" + encodeURIComponent(_.appKey) + "&url=" + encodeURIComponent(document.URL) + "&referrer=" + encodeURIComponent(document.referrer))
      },
      postPageview: function(t) {
        P._debugLog("#STAGE: postPageview")
        for (var e = 0; e < _roost.length; e++) P.push(_roost[e])
        _roost = P, _roost._o = _, _.usePromptKitBell && ("undefined" != typeof tt ? (tt.init.DOM(), tt.updateCount(), _.pkSettings.showBell && P.showBell()) : P._debugLog("Roost: Not showing bell as RoostJS was flagged to not include it.")), V.onload(t)
      },
      onload: function(t) {
        P._debugLog("#STAGE: onload"), _.onloadData = {
          promptable: _roost.promptable()
        }
        for (var e = 0; e < _.onload.length; e++) {
          var o = _.onload[e]
          o && "function" == typeof o && o(_.onloadData)
        }
        t || V.prePrompt()
      },
      prePrompt: function() {
        P._debugLog("#STAGE: prePrompt"), V.prompt()
      },
      prompt: function() {
        if (P._debugLog("#STAGE: prompt"), !F) return void console.log("Roost: No supported implementation, cannot prompt.")
        var t = _roost._promptMinVisits(),
          e = _roost._isAutoPrompt()
        P._debugLog("prompt", e, t), (e || t || _.reprompt) && !_.pkSettings.promptOnScroll.enabled ? F.prompt() : (g(_.rdt) || _.denied) && V.onresult(!1, g(_.rdt))
      },
      onresult: function(t, e) {
        P._debugLog("#STAGE: onresult"), _roost._fireRoostCallback({
          firstTime: t,
          deviceToken: _.rdt,
          registered: e,
          denied: _.denied,
          enabled: _roost._isEnabled(),
          tags: _roost._getTags(),
          alias: _roost._getAlias(),
          properties: _roost._getProperties(),
          latLong: _roost._getLatLong()
        }), _.usePromptKitBell && t && _.pkSettings.showBell && "undefined" != typeof tt && tt.restart(), P._debugLog("#STAGE: done loading!")
      }
    },
    Q = {
      safari: {
        check: function() {
          var t = window.safari.pushNotification.permission(_.safariWebsitePushID)
          "granted" === t.permission ? _.rdt = t.deviceToken : "denied" === t.permission && (_.denied = !0), V.checkComplete()
        },
        register: function() {
          Q.safari.prompt()
        },
        prompt: function() {
          var t = window.safari.pushNotification.permission(_.safariWebsitePushID)
          if ("default" === t.permission) {
            Q.safari.internal.watchPrompt = setInterval(function() {
              var t = window.safari.pushNotification.permission(_.safariWebsitePushID)
              "granted" != t.permission || Q.safari.internal.firedCallback || (Q.safari.internal.firedCallback = !0, V.onresult(!0, "denied" != t.permission)), "denied" === t.permission && (Q.safari.internal.firedCallback = !0, _.denied = !0, V.onresult(!0, "denied" != t.permission)), Q.safari.internal.firedCallback && clearInterval(Q.safari.internal.watchPrompt)
            }, 1e3)
            var e = {
              tags: Y.getTags(),
              alias: _roost._getAlias(),
              properties: _roost._getProperties()
            }
            window.safari.pushNotification.requestPermission("https://go.goroost.com/register/native/safari/" + _.appKey, _.safariWebsitePushID, {
              website: encodeURIComponent(location.href),
              data: JSON.stringify(e)
            }, Q.safari.internal.safariCallback)
          } else "granted" == t.permission ? V.onresult(!1, !0) : V.onresult(!1, !1)
        },
        internal: {
          firedCallback: !1,
          watchPrompt: null,
          safariCallback: function(t) {
            Q.safari.internal.watchPrompt && (clearInterval(Q.safari.internal.watchPrompt), Q.safari.internal.watchPrompt = null), _.rdt = t.deviceToken, Q.safari.internal.firedCallback || ("denied" === t.permission && (_.denied = !0), Q.safari.internal.firedCallback = !0, V.onresult(!0, "denied" != t.permission))
          }
        }
      },
      serviceWorkers: {
        check: function() {
          function t(t) {
            var e = null
            if (t instanceof Array) {
              if (0 == t.length) return console.log("Roost Error: Could not get a handle to our ServiceWorker."), V.checkComplete(), void(_.reprompt = !0)
              var o = _.serviceWorkerRelativePath.length > 0 ? _.serviceWorkerRelativePath : "/roost_worker.js"
              for (i = 0; i < t.length; i++)
                if (t[i].active.scriptURL.indexOf(o) > -1) {
                  e = t[i]
                  break
                }
            }
            return e ? void e.pushManager.getSubscription().then(function(t) {
              if (t) {
                var e = null
                e = "subscriptionId" in t ? t.subscriptionId : t.endpoint, _.rdt = u(e)
              }
              V.checkComplete()
            }) : (console.log("Roost Error: Could not get a handle to our ServiceWorker."), V.checkComplete(), void(_.reprompt = !0))
          }

          function e(t) {
            console.log("Roost Error: Could not access serviceworker: ", t), V.checkComplete()
          }
          var o = document.createElement("link")
          o.rel = "manifest", o.href = Q.serviceWorkers.internal.manifestPath(), document.head.appendChild(o), "granted" === Notification.permission ? "function" == typeof navigator.serviceWorker.getRegistrations ? navigator.serviceWorker.getRegistrations().then(t, e) : navigator.serviceWorker.ready.then(t, e) : "denied" === Notification.permission ? (_.denied = !0, V.checkComplete()) : V.checkComplete()
        },
        register: function() {
          Q.serviceWorkers.prompt()
        },
        prompt: function() {
          var t = Y.getTags(),
            o = _roost._getAlias(),
            i = _roost._getProperties(),
            r = "&appKey=" + _.appKey
          o && (r += "&alias=" + encodeURIComponent(o))
          for (var n = 0; n < t.length; n++) {
            var a = t[n]
            r += "&tag=" + encodeURIComponent(a)
          }
          if (i && (r += "&properties=" + encodeURIComponent(JSON.stringify(i))), r += "&firstTime=true&secure=true", -1 == window.location.href.indexOf("localhost") && "https:" !== location.protocol) return void console.log("Roost: Chrome requires the page to be SSL or localhost to support push.")
          if (!g(Q.serviceWorkers.internal.swPath())) return void console.log("Roost Error: Config has no supported Chrome registration methods.")
          if ("https:" != window.location.protocol && -1 == document.domain.indexOf("localhost")) return void console.log("Roost Error: Domain must use HTTPS to use Roost for Chrome.")
          if ("*" != _.websiteDomain && document.domain != _.websiteDomain) return void console.log("Roost Error: Domains do not match and Chrome push can only support a single config / domain, this site is currently configured for: " + _.websiteDomain + " and document.domain is returning: " + document.domain)
          var l = Q.serviceWorkers.internal.swPath(),
            d = "Files to support chrome registrations are not installed correctly on this domain: " + l
          s(l, d), e(_.host + "/api/frame/register?prompt=true&appKey=" + _.appKey), Notification.requestPermission(function(t) {
            if (_.logging && console.log("ROOST: Notification.requestPermission result.", t), "granted" === t) {
              var e = Q.serviceWorkers.internal.swPath(),
                o = Q.serviceWorkers.internal.swScope()
              navigator.serviceWorker.register(e, {
                scope: o
              }).then(function(t) {
                var e
                t.installing ? e = t.installing : t.waiting ? e = t.waiting : t.active && (e = t.active), e && ("activated" === e.state && Q.serviceWorkers.subscribe(t, r), e.addEventListener("statechange", function(e) {
                  "activated" === e.target.state && Q.serviceWorkers.subscribe(t, r)
                }))
              }, function(t) {
                console.log("Roost Error: Could not register service worker.  Validate correct file installed: " + e, t)
              })
            } else "denied" === t ? (_.denied = !0, _.rdt = null, _.enabled = !1, V.onresult(!1, g(_.rdt))) : (_.enabled = !1, _.rdt = null, V.onresult(!1, g(_.rdt)))
          })
        },
        subscribe: function(t, o) {
          t.pushManager.subscribe({
            userVisibleOnly: !0
          }).then(function(t) {
            _.logging && console.log("ROOST: registered", t)
            var i = null,
              s = null,
              r = null "subscriptionId" in t ? (i = t.subscriptionId, r = _.host + "/api/frame/register?deviceToken=" + encodeURIComponent(i) + o) : (i = t.endpoint, s = t, r = _.host + "/api/frame/register?deviceToken=" + encodeURIComponent(i) + "&subscription=" + encodeURIComponent(JSON.stringify(s)) + o),
              e(r), _.rdt = u(i),
              _.enabled = !0,
              V.onresult(!0, g(_.rdt))
          }, function(t) {
            console.log(t)
          })
        },
        internal: {
          swPath: function() {
            return g(_.serviceWorkerRelativePath) ? _.serviceWorkerRelativePath : Q.serviceWorkers.internal.swScope() + "roost_worker.js"
          },
          swHostPath: function() {
            return g(_.serviceWorkerHostPath) ? _.serviceWorkerHostPath : Q.serviceWorkers.internal.swScope() + "roost.html"
          },
          manifestPath: function() {
            return g(_.manifestRelativePath) ? _.manifestRelativePath : Q.serviceWorkers.internal.swScope() + "roost_manifest.json"
          },
          swScope: function() {
            if (g(_.serviceWorkerRelativePath)) {
              var t = _.serviceWorkerRelativePath
              return t && -1 != t.indexOf("/") ? t.substring(0, t.lastIndexOf("/")) + "/" : "/"
            }
            var e = _.serviceWorkerHostPath
            return e && -1 != e.indexOf("/") ? e.substring(0, e.lastIndexOf("/")) + "/" : "/"
          }
        }
      },
      safariPromptKit: {
        check: function() {
          e(Q.promptKit.internal.pkDomain() + "/promptkit.html?appKey=" + _.appKey + "#safaricheck")
          var t = window.safari.pushNotification.permission(_.safariWebsitePushID)
          "granted" == t.permission ? Q.promptKit.internal.postState(t.deviceToken, !1) : "default" == t.permission ? Q.promptKit.internal.postState(null, !1) : Q.promptKit.internal.postState(null, !0)
        },
        register: function() {
          Q.safariPromptKit.prompt()
        },
        prompt: function() {
          var t = window.safari.pushNotification.permission(_.safariWebsitePushID)
          if ("default" == t.permission) {
            Q.safariPromptKit.internal.watchPrompt = setInterval(function() {
              var t = window.safari.pushNotification.permission(_.safariWebsitePushID)
              "granted" != t.permission && "denied" != t.permission || Q.safariPromptKit.internal.firedCallback || Q.safariPromptKit.internal.safariCallback(t), Q.safariPromptKit.internal.firedCallback && clearInterval(Q.safariPromptKit.internal.watchPrompt)
            }, 1e3)
            var e = {
              tags: Y.getTags(),
              alias: _roost._getAlias(),
              properties: _roost._getProperties()
            }
            window.safari.pushNotification.requestPermission("https://go.goroost.com/register/native/safari/" + _.appKey, _.safariWebsitePushID, {
              website: encodeURIComponent(location.href),
              data: JSON.stringify(e)
            }, Q.safariPromptKit.internal.safariCallback)
          }
        },
        internal: {
          firedCallback: !1,
          watchPrompt: null,
          safariCallback: function(t) {
            e("granted" == t.permission ? Q.promptKit.internal.pkDomain() + "/promptkit.html?appKey=" + _.appKey + "#safariaccept" : Q.promptKit.internal.pkDomain() + "/promptkit.html?appKey=" + _.appKey + "#safarireject"), Q.safariPromptKit.internal.firedCallback = !0
          }
        }
      },
      chromePromptKit: {
        check: function() {
          s(Q.promptKit.internal.pkDomain() + "/promptkit.html?appKey=" + _.appKey + "#check", "Could not check promptKit registration via iframe.")
        },
        register: function() {
          window.location.href = Q.promptKit.internal.pkDomain() + "/promptkit.html?appKey=" + _.appKey + "#register"
        },
        prompt: function() {
          switch (_.pkSettings.pkOptinMethod) {
            case "flyout":
              tt.showPromptKit()
              break
            case "none":
              break
            default:
              console.log("Invalid pkOptinMethod, no prompt set. Valid options are: 'flyout', 'none'")
          }
        }
      },
      promptKit: {
        register: function() {
          window.location.href = Q.promptKit.internal.pkDomain() + "/promptkit.html?appKey=" + _.appKey + "#register"
        },
        internal: {
          pkDomain: function() {
            if (g(_.poweredBySubdomain)) {
              var t = "https://" + _.poweredBySubdomain + ".poweredby.goroost.com"
              return M.push(t), t
            }
            if (g(_.cnameHostname)) {
              var t = "https://" + _.cnameHostname
              return M.push(t), t
            }
            var e = document.domain.split(".")
            if (!(e.length < 2)) {
              var o = "https://push." + e[e.length - 2] + "." + e[e.length - 1]
              return M.push(o), o
            }
          },
          postState: function(t, e) {
            var o = {
              data: JSON.stringify({
                type: "check",
                deviceToken: t,
                denied: e
              })
            }
            y(o, "*")
          }
        }
      }
    },
    Y = {
      getTags: function() {
        var t = _roost._getTags()
        if (!_.pkSettings.urlSegmentation) return t
        for (var e = document.location.href.split(document.location.host)[1], o = e.split("/").slice(1), i = 0; i < o.length; i++) - 1 === _.pkSettings.urlSegmentationBlacklist.indexOf(o[i]) && t.push(o[i])
        return t
      }
    },
    j = {
      notificationsTitle: "",
      appKey: "",
      siteName: "",
      promptMessage: "Get top stories sent right to your device!",
      promptCTA: "Subscribe",
      dontSend: "Don't send",
      buttonColor: "#1982df",
      dontSendColor: "#1982df",
      buttonHover: "#2d9bfc",
      promptStyles: "",
      promptDelay: 7,
      promptThreshold: 35,
      qualifyOnLoad: function() {
        var t = P._getElById("roost-qualify-outer")
        t || (j.addQualifyDiv(), tt.generateCSS(), j.adjustQualifyForPlatform())
      },
      addQualifyDiv: function() {
        var e = '<div id="roost-qualify-outer" class="roost-reset">'
        e += '<div id="roost-modal"></div>', e += '<div id="roost-wrapper">', e += '<div id="roost-slide-out-header">', _.pkSettings.customPK.title && (e += '<div id="roost-slide-out-headline">' + j.notificationsTitle + "</div>"), e += '<div id="roost-qualify-dismiss"><a id="roost-x"><img src="//s3.amazonaws.com/roost/promptkit/roost-x-gray.png" /></a></div>', _.pkSettings.customPK.title && (e += "<hr />"), e += "</div>", _.pkSettings.customPK.logo && (e += '<div id="roost-slide-out-logo"><img src="' + _.host + "/api/browser/logo?size=100&direct=true&appKey=" + _.appKey + '" /></div>'), e += '<div id="roost-slide-out-banner">', e += '<div id="roost-slide-out-slug">' + j.siteName + "</div>", e += '<div id="roost-slide-out-desc">' + j.promptMessage + "</div>", e += '<div id="roost-subscribe-button">' + j.promptCTA + "</div>", _.pkSettings.pkDontSend && (e += '<div id="roost-slide-out-dontsend">' + j.dontSend + "</div>"), e += "</div>", _.pkSettings.customPK.deviceImage && (e += '<div id="roost-slide-out-device"></div>'), e += "</div>", e += "</div>"
        var o = t.document.createElement("div")
        o.innerHTML = e, t.document.getElementsByTagName("body")[0].appendChild(o), P._getElById("roost-qualify-dismiss").addEventListener("click", function(t) {
          j.declineQualifier()
        }), _.pkSettings.pkDontSend && P._getElById("roost-slide-out-dontsend").addEventListener("click", function(t) {
          j.declineQualifier()
        }), P._getElById("roost-subscribe-button").addEventListener("click", function(t) {
          P.register(), j.declineQualifier()
        })
      },
      adjustQualifyForPlatform: function() {
        -1 !== navigator.platform.toLowerCase().indexOf("win") && t.document.getElementById("roost-slide-out-device") && (t.document.getElementById("roost-slide-out-device").style.backgroundImage = "url(https://s3.amazonaws.com/roost/promptkit/laptop-windows.png)"), tt.compensateTextLength()
      },
      showQualifier: function(t) {
        var e = P._getElById("roost-qualify-outer")
        t && j.canShowQualifier() && e || (t = !1)
        var o = P._getElById("roost-wrapper"),
          i = Number(_.pkSettings.zIndex) + 1e3
        o.style.zIndex = String(i), e.style.display = t ? "block" : "none"
      },
      declineQualifier: function() {
        t.document.getElementById("roost-wrapper").style.right = "-5px", P._getElById("roost-wrapper").style.right = "-5px", P._addClass(P._getElById("roost-wrapper"), "roost-wrapper-dismissed"), P._addClass(P._getElById("roost-modal"), "roost-wrapper-dismissed")
        var e = new Date
        e.setDate(e.getDate() + j.promptDelay)
        var o = 86400 * j.promptDelay
        t.document.cookie = "_rpkd=1; path=/; expires=" + e + "; max-age=" + o, j.showQualifier(!1)
      },
      clearDecline: function() {
        t.document.cookie = "_rpkd=; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0"
      },
      promptForRoost: function() {
        P._addClass(P._getElById("roost-wrapper"), "roost-wrapper-dismissed"), P._addClass(P._getElById("roost-modal"), "roost-wrapper-dismissed"), P.register()
      },
      canShowQualifier: function() {
        if (P._cookiesEnabled()) {
          var t = P.getCookie("_rpkd")
          return t.length > 0 ? !1 : !0
        }
        var e = Math.floor(100 * Math.random())
        return e >= j.promptThreshold ? !1 : !0
      },
      init: function() {
        _.pkSettings.text.flyout.title = _.pkSettings.text.flyout.title.replace("$SITE", _.configName), _.pkSettings.text.flyout.headline = _.pkSettings.text.flyout.headline.replace("$SITE", _.configName), _.pkSettings.text.flyout.callout = _.pkSettings.text.flyout.callout.replace("$SITE", _.configName), j.notificationsTitle = _.pkSettings.text.flyout.title, j.siteName = _.pkSettings.text.flyout.callout, j.promptCTA = _.pkSettings.text.flyout.button, j.promptMessage = _.pkSettings.text.flyout.message, j.dontSend = _.pkSettings.text.flyout.dontSend, j.buttonColor = _.pkSettings.pkColors.button, j.dontSendColor = _.pkSettings.pkColors.dontSend, j.appKey = _.appKey, j.promptDelay = _.pkSettings.flyoutDaysRepeatInterval, j.qualifyOnLoad(), j.showQualifier(!0)
      }
    },
    $ = t.document,
    Z = ($.documentElement, $.getElementsByTagName("body")[0], '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 40 40" style="enable-background:new 0 0 40 40;" xml:space="preserve" id="roost-bell"> <style type="text/css"> .st1 { display:none;} .st2 { display:inline;} .st3 { fill: none;stroke:#A7A9AB;stroke-width:5.000000e-02;stroke-miterlimit:10;stroke-dasharray:0.1001,0.1001;} .st4 { display:inline;fill:none;stroke:#A7A9AB;stroke-width:5.000000e-02;stroke-miterlimit:10;stroke-dasharray:0.1;} </style> <g id="Layer_3"> <g> <path class="st0" d="M28,21.7c0-2.5-1.1-5.4-3.1-7.6c-1.9-2.1-3.4-1.9-3.4-3.6C21.5,9.7,20.8,9,20,9s-1.5,0.7-1.5,1.5c0,1.6-1.6,1.4-3.4,3.6c-2,2.2-3.1,5.1-3.1,7.6c0,2.7-2,2.5-2,4.3c0,2.5,3.9,4,10,4s10-1.5,10-4C30,24.2,28,24.4,28,21.7z"/> <path class="st0" d="M22.5,30.9C21.6,31,21,31,20,31s-1.6,0-2.5-0.1c-0.1,0-0.2,0.1-0.2,0.2S18,33,20,33s2.8-1.7,2.8-1.9S22.6,30.9,22.5,30.9z"/> </g> </g> <g id="Circles" class="st1"> <g class="st2"> <circle class="st3" cx="20" cy="30" r="3"/> </g> <circle class="st4" cx="28" cy="26" r="2"/> <circle class="st4" cx="12" cy="26" r="2"/> <circle class="st4" cx="20" cy="10.5" r="1.5"/> <circle class="st4" cx="20" cy="19" r="7"/> <circle class="st4" cx="17.5" cy="31.1" r="0.2"/> <circle class="st4" cx="22.5" cy="31.1" r="0.3"/> </g> </svg> <p id="roost-bubble-count"></p>'),
    X = '<div id="roost-overlay"></div> <div id="roost-notifications-head"> <!-- CLOSE ICON --><div id="roost-close-pane"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="11" height="11" viewBox="0 0 11 11" id="roost-close"> <path d="M11.001,9.625 C11.001,9.625 9.625,11.001 9.625,11.001 C9.625,11.001 5.500,6.875 5.500,6.875 C5.500,6.875 1.375,11.001 1.375,11.001 C1.375,11.001 -0.001,9.625 -0.001,9.625 C-0.001,9.625 4.125,5.500 4.125,5.500 C4.125,5.500 -0.001,1.375 -0.001,1.375 C-0.001,1.375 1.375,-0.001 1.375,-0.001 C1.375,-0.001 5.500,4.125 5.500,4.125 C5.500,4.125 9.625,-0.001 9.625,-0.001 C9.625,-0.001 11.001,1.375 11.001,1.375 C11.001,1.375 6.875,5.500 6.875,5.500 C6.875,5.500 11.001,9.625 11.001,9.625 Z" id="path-1" class="cls-2" fill-rule="evenodd"/> </svg></div> <!-- NOTIFICATION TITLE --> <p id="roost-notifications-title">Notifications</p> <p id="roost-gear">Settings</p> </div> <!-- SETTINGS MENU --> <div id="roost-settings"> <input type="checkbox" id="roost-disable"/> <p id="roost-disable-text">Send me desktop notifications</p>  <p id="roost-email-text" class="roost-hide">Send me notifications via email</p><div id="roost-email-input-wrapper" class="roost-hide"> <input type="text" id="roost-email-input"/> <button id="roost-email-submit">Submit</button> </div><p id="roost-email-success" class="roost-hide">Thanks! Check your email soon.</p><p id="roost-email-failure" class="roost-hide">There was an issue registering your email address. Is your email entered correctly?</p> <p id="roost-disable-confirmation" class="roost-hide">You&apos;ve been unsubscribed.</p><p id="roost-enable-confirmation" class="roost-hide">You&apos;ve been subscribed. Enjoy!</p> <div id="roost-spinner"></div> </div> <!-- NOTIFICATION LIST--> <ul id="roost-data"> </ul> <!-- CLEAR ALL --> <p id="roost-clear-all">Clear all</p><!-- SHARE ICON --><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="11" height="12" viewBox="0 0 11 12" id="roost-share-template"> <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMBAMAAABGh1qtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEWUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJT///95LpK7AAAADXRSTlMASeYq+OcUleuY5EqWN52rBAAAAAFiS0dEDm+9ME8AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA/SURBVAjXY2BgYGBUEgCSDEx3FUCUyd0AIJneGbWBQUizPQHI1r1iwICgtq4ECwKV9ED0mUD0MYH1MXBHbQAATRQO8Wsew14AAAAASUVORK5CYII=" width="11" height="12"/> </svg><!-- FACEBOOK ICON --><svg xmlns="http://www.w3.org/2000/svg" id="roost-shareicon-fb" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="32" height="32" viewBox="0 0 32 32">  <path d="M30.234,0.000 C30.234,0.000 1.766,0.000 1.766,0.000 C0.791,0.000 0.000,0.791 0.000,1.766 C0.000,1.766 0.000,30.234 0.000,30.234 C0.000,31.209 0.791,32.000 1.766,32.000 C1.766,32.000 17.092,32.000 17.092,32.000 C17.092,32.000 17.092,19.608 17.092,19.608 C17.092,19.608 12.922,19.608 12.922,19.608 C12.922,19.608 12.922,14.779 12.922,14.779 C12.922,14.779 17.092,14.779 17.092,14.779 C17.092,14.779 17.092,11.217 17.092,11.217 C17.092,7.084 19.616,4.833 23.304,4.833 C25.070,4.833 26.588,4.965 27.030,5.023 C27.030,5.023 27.030,9.343 27.030,9.343 C27.030,9.343 24.473,9.344 24.473,9.344 C22.468,9.344 22.079,10.297 22.079,11.695 C22.079,11.695 22.079,14.779 22.079,14.779 C22.079,14.779 26.862,14.779 26.862,14.779 C26.862,14.779 26.239,19.608 26.239,19.608 C26.239,19.608 22.079,19.608 22.079,19.608 C22.079,19.608 22.079,32.000 22.079,32.000 C22.079,32.000 30.234,32.000 30.234,32.000 C31.209,32.000 32.000,31.209 32.000,30.234 C32.000,30.234 32.000,1.766 32.000,1.766 C32.000,0.791 31.209,0.000 30.234,0.000 Z" id="path-1" class="cls-2" fill-rule="evenodd"/> </svg> <!-- TWITTER ICON --> <svg xmlns="http://www.w3.org/2000/svg" id="roost-shareicon-twitter" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="32" height="32" viewBox="0 0 32 32"> <path d="M30.000,32.000 C30.000,32.000 2.000,32.000 2.000,32.000 C0.895,32.000 -0.000,31.105 -0.000,30.000 C-0.000,30.000 -0.000,2.000 -0.000,2.000 C-0.000,0.895 0.895,0.000 2.000,0.000 C2.000,0.000 30.000,0.000 30.000,0.000 C31.105,0.000 32.000,0.895 32.000,2.000 C32.000,2.000 32.000,30.000 32.000,30.000 C32.000,31.105 31.105,32.000 30.000,32.000 ZM26.829,7.195 C25.968,7.724 25.015,8.108 24.000,8.315 C23.187,7.418 22.029,6.857 20.748,6.857 C18.288,6.857 16.293,8.924 16.293,11.473 C16.293,11.835 16.332,12.187 16.408,12.525 C12.706,12.333 9.423,10.495 7.226,7.702 C6.842,8.384 6.623,9.177 6.623,10.023 C6.623,11.624 7.409,13.037 8.604,13.865 C7.874,13.841 7.187,13.633 6.587,13.288 C6.586,13.307 6.586,13.326 6.586,13.346 C6.586,15.582 8.122,17.448 10.160,17.872 C9.786,17.978 9.392,18.034 8.986,18.034 C8.699,18.034 8.420,18.005 8.148,17.951 C8.715,19.785 10.360,21.120 12.310,21.157 C10.785,22.395 8.864,23.133 6.777,23.133 C6.417,23.133 6.063,23.112 5.714,23.069 C7.686,24.379 10.027,25.143 12.543,25.143 C20.738,25.143 25.219,18.109 25.219,12.009 C25.219,11.808 25.214,11.609 25.206,11.411 C26.076,10.760 26.831,9.947 27.429,9.022 C26.630,9.389 25.771,9.637 24.870,9.749 C25.790,9.177 26.496,8.273 26.829,7.195 Z" id="path-1" class="cls-2" fill-rule="evenodd"/> </svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="7" height="14" viewBox="0 0 7 14" id="roost-banner-arrow"> <defs> <style> .cls-2 {fill: #3b3b3b; opacity: 0.6; } </style> </defs> <path d="M7.012,7.420 C7.012,7.420 1.420,14.012 1.420,14.012 C1.420,14.012 -0.012,12.580 -0.012,12.580 C-0.012,12.580 3.875,7.000 3.875,7.000 C3.875,7.000 -0.012,1.420 -0.012,1.420 C-0.012,1.420 1.420,-0.012 1.420,-0.012 C1.420,-0.012 7.012,6.580 7.012,6.580 C7.012,6.580 6.300,7.000 6.300,7.000 C6.300,7.000 7.012,7.420 7.012,7.420 Z" id="path-1" class="cls-2" fill-rule="evenodd"/> </svg><!-- BRANDING --><p id="roost-branding">Powered by <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="62" height="35" viewBox="0 0 62 35" id="roost-brand-logo"> <path d="M61.968,10.987 C61.524,12.545 60.338,12.825 58.148,13.077 C57.200,15.330 56.462,17.635 56.012,20.841 C55.493,24.541 57.441,23.891 57.779,23.607 C57.972,23.446 58.291,23.495 58.458,23.689 C58.819,24.106 58.425,26.332 56.235,26.332 C53.291,26.332 53.025,22.446 53.616,18.395 C53.004,18.745 52.141,19.121 50.935,19.456 C51.380,20.062 51.684,20.757 51.684,21.525 C51.684,24.104 49.449,26.343 45.625,26.343 C42.963,26.343 41.107,25.166 41.107,23.195 C41.107,21.132 43.008,19.194 46.860,18.762 C47.012,18.745 47.161,18.727 47.307,18.708 C46.379,18.235 44.977,17.567 44.752,16.380 C43.874,16.726 42.198,17.144 39.593,16.849 C41.037,23.582 37.046,26.334 33.609,26.334 C30.839,26.334 29.133,25.084 29.133,22.020 C29.133,20.515 29.928,18.395 31.156,16.626 C30.261,16.878 29.044,17.029 27.452,16.849 C28.897,23.582 24.906,26.334 21.469,26.334 C18.699,26.334 16.992,25.084 16.992,22.020 C16.992,18.955 20.295,13.331 23.826,13.331 C25.084,13.331 25.829,14.033 26.388,14.569 C27.021,15.177 30.770,15.936 33.353,14.296 C33.353,14.296 33.353,14.298 33.353,14.298 C34.175,13.699 35.063,13.331 35.966,13.331 C37.225,13.331 37.969,14.033 38.529,14.569 C39.155,15.170 43.337,15.924 45.440,14.373 C46.127,13.694 47.229,13.331 48.411,13.331 C51.044,13.331 50.199,16.813 47.466,16.813 C47.466,16.813 48.660,17.337 49.777,18.259 C53.211,17.419 54.022,16.143 54.022,16.143 C54.022,16.143 54.022,16.144 54.022,16.144 C54.197,15.329 54.467,14.351 54.777,13.334 C52.769,13.363 51.723,13.051 51.723,12.442 C51.723,11.654 53.620,11.245 55.545,10.958 C56.328,8.645 57.101,6.620 57.198,6.370 C57.416,5.808 60.676,5.108 61.019,5.108 C61.335,5.108 61.610,5.458 61.461,5.802 C60.701,7.564 59.987,9.051 59.335,10.440 C60.935,10.243 62.188,10.212 61.968,10.987 ZM23.751,16.141 C21.741,16.141 20.370,19.211 20.370,20.659 C20.370,21.595 20.892,22.789 22.457,22.789 C24.436,22.789 25.539,20.884 25.633,19.432 C25.761,17.452 24.886,16.141 23.751,16.141 ZM35.892,16.141 C33.881,16.141 32.511,19.211 32.511,20.659 C32.511,21.595 33.033,22.789 34.598,22.789 C36.577,22.789 37.679,20.884 37.773,19.432 C37.902,17.452 37.027,16.141 35.892,16.141 ZM49.077,19.877 C48.915,19.907 48.748,19.935 48.577,19.963 C46.978,20.225 44.876,20.357 44.787,22.025 C44.748,22.766 45.444,23.517 46.592,23.517 C48.277,23.517 49.639,22.591 49.639,21.229 C49.639,20.682 49.436,20.253 49.077,19.877 ZM10.830,18.686 C13.582,26.684 17.002,28.365 20.641,28.365 C24.281,28.365 25.882,26.674 26.531,26.674 C26.749,26.674 26.945,26.821 27.033,27.087 C27.743,29.241 25.582,34.598 19.500,33.955 C13.397,33.311 9.406,24.706 7.989,20.461 C7.177,24.003 5.403,26.682 2.692,26.682 C1.463,26.682 0.004,25.654 0.004,23.781 C0.004,21.522 2.103,20.602 3.963,19.573 C4.886,19.063 5.561,18.481 5.561,17.874 C5.561,17.288 5.059,17.030 4.727,17.030 C3.942,17.030 3.109,17.350 1.924,17.738 C1.761,17.791 1.589,17.825 1.399,17.675 C0.845,17.299 1.680,15.032 3.893,14.178 C5.089,13.716 8.151,13.090 10.191,17.150 C11.990,15.764 17.326,11.381 17.326,8.183 C17.326,4.026 10.961,6.515 8.768,7.806 C3.566,10.870 3.199,12.859 2.400,12.859 C1.562,12.859 1.656,10.866 1.720,10.364 C2.220,6.435 4.900,2.167 7.953,2.167 C9.336,2.167 9.575,3.012 9.575,3.012 C9.575,3.012 11.274,-0.009 14.640,-0.009 C16.699,-0.009 16.040,1.656 16.040,1.656 C16.040,1.656 17.075,0.996 18.859,0.996 C20.644,0.996 22.350,2.527 20.371,4.367 C20.371,4.367 22.695,4.599 22.695,7.129 C22.695,13.546 12.957,17.828 10.830,18.686 Z" id="path-1" class="cls-2" fill-rule="evenodd"/> </svg></p>',
    tt = {
      roostNodes: {},
      roostClasses: {
        expandNotes: "roost-notes-visible",
        expandIndicator: "roost-expanded",
        showSettings: "roost-settings-visible",
        confirmDisable: "roost-show-disconfirmation",
        shrinkWrapper: "roost-settings-active",
        showSpinner: "show-roost-spinner",
        hide: "roost-hide",
        visible: "roost-visible",
        coachmarks: "show-coachmarks",
        coachStartAnimation: "animate-coachmarks-start",
        coachEndAnimation: "animate-coachmarks-end",
        coachWidthAnimation: "animate-coachmarks-width",
        noImage: "roost-list-noimage",
        unsubbedNotes: "roost-notes-unsub",
        unsubbedBell: "roost-bell-unsub",
        inlineWrapper: "roost-inline",
        squareWrapper: "roost-no-circle",
        left: "roost-wrapper-left",
        top: "roost-wrapper-top",
        share: "roost-share-active",
        miniBubble: "roost-bubble-mini"
      },
      showPromptKit: function() {
        P._debugLog("showPromptKit", P.promptable(), _.usePromptKit), P.promptable() && _.usePromptKit && j.init()
      },
      init: {
        DOM: function() {
          var e = document.getElementsByTagName("body")[0],
            o = P._getElById("goroostcom-bell")
          o ? (o.style.display = "none", o.innerHTML = Z) : _.pkSettings.absolute ? (o = t.document.createElement("div"), o.style.display = "none", o.setAttribute("id", "goroostcom-bell"), o.innerHTML = Z, _.pkSettings.left && P._addClass(o, tt.roostClasses.left), _.pkSettings.top && P._addClass(o, tt.roostClasses.top), !_.pkSettings.regOnlyBell || _.pkSettings.regOnlyBell && g(_.rdt) ? e.appendChild(o) : (P._addClass(o, "roost-hide"), e.appendChild(o))) : console.log("Roost: No Roost Bell div found, please set absolute: true in the parameters, or place this div where you want the roost bell to show: <div id='goroostcom-bell' style='display:none;'></div>")
          var i = t.document.createElement("div")
          i.style.display = "none", i.setAttribute("id", "goroostcom-notifications"), i.innerHTML = X, e.appendChild(i)
          var s = P._getElById("roost-notifications-title"),
            r = P._getElById("roost-gear"),
            n = P._getElById("roost-disable-text"),
            a = P._getElById("roost-disable-confirmation"),
            l = P._getElById("roost-clear-all")
          s.textContent = _.pkSettings.text.noteTab, r.textContent = _.pkSettings.text.settingsTab, n.textContent = _.pkSettings.text.subscriptionBox, a.textContent = _.pkSettings.text.unsubConfirmation, l.textContent = _.pkSettings.text.clear, tt.init.generateRoostNodes()
        },
        generateRoostNodes: function() {
          tt.roostNodes = {
            wrapper: P._getElById("goroostcom-bell"),
            bell: P._getElById("roost-bell"),
            bubble: P._getElById("roost-bubble-count"),
            notes: P._getElById("goroostcom-notifications"),
            noteOverlay: P._getElById("roost-overlay"),
            noteList: P._getElById("roost-data"),
            gear: P._getElById("roost-gear"),
            settings: P._getElById("roost-settings"),
            disableText: P._getElById("roost-disable-text"),
            disable: P._getElById("roost-disable"),
            noteDate: P._getElById("roost-date"),
            head: P._getElById("roost-notifications-head"),
            title: P._getElById("roost-notifications-title"),
            spinner: P._getElById("roost-spinner"),
            disableConfirmation: P._getElById("roost-disable-confirmation"),
            brand: P._getElById("roost-branding"),
            clearAll: P._getElById("roost-clear-all"),
            close: P._getElById("roost-close"),
            closeWrapper: P._getElById("roost-close-pane"),
            share: P._getElById("roost-share-template"),
            twitterIcon: P._getElById("roost-shareicon-twitter"),
            twitterButton: P._getElById("roost-tweet-btn"),
            fbIcon: P._getElById("roost-shareicon-fb"),
            fbButton: P._getElById("roost-fb-btn")
          }
        },
        oneOff: function() {
          var t = {
            isConfig: function() {
              return "rp9q0v6rpgw65sa1f34f6o6f5jtnwoh3" == _.appKey
            }(),
            segments: [{
              display: "Breaking News",
              tagName: "BreakingNews"
            }]
          }
          t.isConfig && tt.settingsUI.segmentSelection(t.segments)
        },
        coachmarks: function() {
          if (_.pkSettings.absolute && _.pkSettings.coachmarks && tt.countNotes() > 0) {
            var t = tt.flyoutCookie.get()
            "false" == t && tt.animateCoachmarks()
          }
        },
        email: function() {
          if (_.pkSettings.email) {
            var t = P._getElById("roost-email-text"),
              e = P._getElById("roost-email-input-wrapper")
            P._removeClass(t, "roost-hide"), P._removeClass(e, "roost-hide")
          }
        },
        cookies: function() {
          h(_.rdt) && tt.readCookie.init(), tt.paneCookie.init(), tt.flyoutCookie.init(), tt.notifications.populateAll(tt.roostNodes.noteList), tt.eventHandlers.preventPropagation()
        },
        state: function() {
          h(_.rdt) ? tt.baseUI.unsub() : tt.roostNodes.disable.checked = _.enabled, h(_.rdt) && P.promptable() && _.usePromptKit && !_.denied && (tt.promptAd.init(), tt.promptAd.check() ? tt.baseUI.unsubPrompt() : P._debugLog("Prompt has been dismissed"))
        },
        styles: function() {
          tt.baseUI.applyStyles(), tt.eventHandlers.base(), tt.baseUI.postRenderStyles()
        }
      },
      show: function() {
        _.bellInitialized || (tt.init.cookies(), tt.init.state(), tt.init.styles(), tt.init.oneOff(), tt.init.coachmarks(), tt.init.email(), tt.compensateTextLength(), _.bellInitialized = !0)
      },
      subOnMain: function() {
        P._addClass(tt.roostNodes.noteList, "roost-subonmain-list")
        var e = {
          wrapper: t.document.createElement("div"),
          box: t.document.createElement("input"),
          text: t.document.createElement("p")
        }
        e.wrapper.setAttribute("id", "roost-subonmain-wrapper"), e.box.setAttribute("id", "roost-subonmain-box"), e.text.setAttribute("id", "roost-subonmain-text"), e.box.setAttribute("type", "checkbox"), e.box.checked = !1, e.text.textContent = _.pkSettings.text.subscriptionBox, e.box.checked = !1, e.text.addEventListener("click", function(t) {
          P.register(), P._addClass(e.wrapper, "roost-hide")
        }), e.box.addEventListener("click", function(t) {
          P.register(), P._addClass(e.wrapper, "roost-hide")
        }), e.wrapper.appendChild(e.box), e.wrapper.appendChild(e.text), tt.roostNodes.notes.insertBefore(e.wrapper, tt.roostNodes.noteList)
      },
      animateCoachmarks: function() {
        P._addClass(tt.roostNodes.wrapper, tt.roostClasses.coachStartAnimation), setTimeout(function() {
          P._addClass(tt.roostNodes.wrapper, tt.roostClasses.coachEndAnimation)
        }, 100), setTimeout(function() {
          P._removeClass(tt.roostNodes.wrapper, tt.roostClasses.coachEndAnimation)
        }, 4100), setTimeout(function() {
          P._addClass(tt.roostNodes.wrapper, tt.roostClasses.coachWidthAnimation), tt.flyoutCookie.set("true")
        }, 4110)
      },
      destroy: function() {
        var t = tt.roostNodes.notes
        if (t && t.parentNode && t.parentNode.removeChild(t), _.pkSettings.absolute) {
          var e = tt.roostNodes.wrapper
          e && e.parentNode && e.parentNode.removeChild(e)
        }
        _.bellInitialized = !1
      },
      restart: function() {
        tt.destroy(), tt.init.DOM(), tt.show()
      },
      subscribe: function() {
        tt.restart()
      },
      countSvg: {
        1: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5C38.5,34.7,34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M31,33.5h-1.4V29h-1.8v-1.1c1,0,1.9-0.3,2-1.4H31V33.5z"/> </g> </svg>',
        2: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5C38.5,34.7,34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M27.6,29.3c0-1.6,0.9-2.8,2.5-2.8c1.3,0,2.4,0.8,2.4,2.2c0,1-0.6,1.6-1.2,2.1c-0.7,0.5-1.5,0.9-2,1.6h3.3v1.2 h-5.1c0-1.6,1-2.3,2.2-3.1c0.6-0.4,1.5-0.8,1.5-1.7c0-0.7-0.4-1.1-1-1.1c-0.8,0-1.1,0.9-1.1,1.6H27.6z"/> </g> </svg>',
        3: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5c0-4.7,3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5C38.5,34.7,34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M29.5,29.3c0.6,0,1.5-0.1,1.5-0.9c0-0.6-0.5-0.9-1-0.9c-0.7,0-1.1,0.5-1.1,1.2h-1.3c0-1.4,1-2.4,2.4-2.4 c1.1,0,2.3,0.7,2.3,1.9c0,0.7-0.3,1.2-1,1.4v0c0.8,0.2,1.2,0.8,1.2,1.6c0,1.5-1.2,2.3-2.6,2.3c-1.6,0-2.6-0.9-2.6-2.5h1.3 c0,0.8,0.4,1.4,1.2,1.4c0.6,0,1.1-0.4,1.1-1.1c0-1.1-0.9-1-1.6-1V29.3z"/> </g> </svg>',
        4: '<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M30.1,31.9h-3v-1.3l3-4.1h1.3v4.2h0.9v1.2h-0.9v1.6h-1.3V31.9z M30.1,28.3L30.1,28.3l-1.8,2.4h1.8V28.3z"/> </g> </svg>',
        5: '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M32.2,27.6h-2.9l-0.3,1.6l0,0c0.4-0.4,0.8-0.5,1.4-0.5c1.4,0,2.2,1.1,2.2,2.4c0,1.4-1.2,2.5-2.6,2.5 c-1.4,0-2.6-0.8-2.6-2.2h1.4c0.1,0.6,0.5,1,1.1,1c0.7,0,1.2-0.7,1.2-1.3c0-0.7-0.5-1.3-1.2-1.3c-0.5,0-0.8,0.2-1.1,0.6h-1.3 l0.7-3.9h3.9V27.6z"/> </g> </svg><?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M32.2,27.6h-2.9l-0.3,1.6l0,0c0.4-0.4,0.8-0.5,1.4-0.5c1.4,0,2.2,1.1,2.2,2.4c0,1.4-1.2,2.5-2.6,2.5 c-1.4,0-2.6-0.8-2.6-2.2h1.4c0.1,0.6,0.5,1,1.1,1c0.7,0,1.2-0.7,1.2-1.3c0-0.7-0.5-1.3-1.2-1.3c-0.5,0-0.8,0.2-1.1,0.6h-1.3 l0.7-3.9h3.9V27.6z"/> </g> </svg>',
        6: '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M31.1,28.3c-0.1-0.5-0.5-0.9-0.9-0.9c-1,0-1.3,1.3-1.3,2.1l0,0c0.4-0.5,0.9-0.8,1.6-0.8c0.6,0,1.2,0.3,1.6,0.7 c0.4,0.4,0.5,1,0.5,1.6c0,1.4-1,2.6-2.4,2.6c-2.1,0-2.7-1.8-2.7-3.6c0-1.7,0.8-3.7,2.7-3.7c1.2,0,2.1,0.7,2.3,1.9H31.1z M29,31.2 c0,0.6,0.4,1.3,1.1,1.3c0.7,0,1.1-0.7,1.1-1.3c0-0.7-0.3-1.3-1.1-1.3C29.3,29.9,29,30.5,29,31.2z"/> </g> </svg>',
        7: '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M28.9,31.7c0.1,0.5,0.5,0.9,0.9,0.9c1,0,1.3-1.3,1.3-2.1l0,0c-0.4,0.5-0.9,0.8-1.6,0.8c-0.6,0-1.2-0.3-1.6-0.7 c-0.4-0.4-0.5-1-0.5-1.6c0-1.4,1-2.6,2.4-2.6c2.1,0,2.7,1.8,2.7,3.6c0,1.7-0.8,3.7-2.7,3.7c-1.2,0-2.1-0.7-2.3-1.9H28.9z M31,28.8 c0-0.6-0.4-1.3-1.1-1.3c-0.7,0-1.1,0.7-1.1,1.3c0,0.7,0.3,1.3,1.1,1.3C30.7,30.1,31,29.5,31,28.8z"/> </g> </svg>',
        8: '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5s8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M30,26.4c1.7,0,2.3,1.2,2.3,1.9c0,0.7-0.4,1.2-1,1.5v0c0.8,0.2,1.3,0.8,1.3,1.7c0,1.5-1.3,2.2-2.6,2.2 c-1.3,0-2.7-0.7-2.7-2.2c0-0.9,0.5-1.5,1.3-1.7v0c-0.7-0.2-1-0.7-1-1.4C27.7,27,28.9,26.4,30,26.4z M30,32.6c0.7,0,1.2-0.5,1.2-1.2 c0-0.7-0.5-1.1-1.2-1.1c-0.7,0-1.2,0.4-1.2,1.1C28.8,32.1,29.3,32.6,30,32.6z M30,29.3c0.6,0,1-0.3,1-0.9c0-0.4-0.2-1-1-1 c-0.6,0-1.1,0.3-1.1,1C28.9,29,29.4,29.3,30,29.3z"/> </g> </svg>',
        9: '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M32.4,27.8c-1.5,1.3-2.3,3.9-2.3,5.8h-1.5c0.2-2.1,1-4.1,2.3-5.7h-3.3v-1.3h4.8V27.8z"/> </g> </svg>',
        10: '<?xml version="1.0" encoding="utf-8"?> <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="60px" height="60px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"> <style type="text/css"> .st0{fill:#E25351;} .st1{fill:#3B3B3B;} .st2{fill:#FFFFFF;} </style> <g> <path class="st0" d="M30,38.5c-4.7,0-8.5-3.8-8.5-8.5s3.8-8.5,8.5-8.5c4.7,0,8.5,3.8,8.5,8.5S34.7,38.5,30,38.5z"/> <path class="st1" d="M30,22c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S25.6,22,30,22 M30,21c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S35,21,30,21 L30,21z"/> </g> <g> <path class="st2" d="M26.9,31.7c0.1,0.5,0.5,0.9,0.9,0.9c1,0,1.3-1.3,1.3-2.1l0,0c-0.4,0.5-0.9,0.8-1.6,0.8c-0.6,0-1.2-0.3-1.6-0.7 c-0.4-0.4-0.5-1-0.5-1.6c0-1.4,1-2.6,2.4-2.6c2.1,0,2.7,1.8,2.7,3.6c0,1.7-0.8,3.7-2.7,3.7c-1.2,0-2.1-0.7-2.3-1.9H26.9z M29,28.8 c0-0.6-0.4-1.3-1.1-1.3c-0.7,0-1.1,0.7-1.1,1.3c0,0.7,0.3,1.3,1.1,1.3C28.7,30.1,29,29.5,29,28.8z"/> <path class="st2" d="M33.6,29.6h1.6v0.9h-1.6V32h-0.9v-1.6h-1.6v-0.9h1.6V28h0.9V29.6z"/> </g> </svg>'
      },
      banner: {
        init: function() {
          if (!P._getElById("roost-banner")) {
            var e = document.getElementsByTagName("body")[0],
              i = t.document.createElement("div"),
              s = t.document.createElement("div"),
              r = t.document.createElement("div"),
              n = t.document.createElement("p"),
              a = t.document.createElement("p"),
              l = t.document.createElement("button"),
              d = t.document.createElement("p"),
              p = t.document.createElement("p"),
              c = P._getElById("roost-banner-arrow").cloneNode(!0),
              g = t.document.createElement("img")
            c.setAttribute("class", "roost-show-arrow"), i.setAttribute("id", "roost-banner"), s.setAttribute("id", "roost-banner-left"), r.setAttribute("id", "roost-banner-right"), n.setAttribute("id", "roost-banner-title"), a.setAttribute("id", "roost-banner-subtitle"), l.setAttribute("id", "roost-banner-btn"), d.setAttribute("id", "roost-banner-belltext"), p.setAttribute("id", "roost-banner-dismisstext"), g.setAttribute("id", "roost-banner-logo"), n.textContent = "Push Notifications for You", a.textContent = "Get top stories sent right to your desktop", l.textContent = "Subscribe", p.textContent = "No thanks", d.textContent = "Or, check out hot stories right here!", g.src = _.host + "/api/browser/logo?size=100&direct=true&appKey=" + _.appKey, r.appendChild(d), r.appendChild(c), s.appendChild(g), s.appendChild(n), s.appendChild(a), s.appendChild(l), s.appendChild(p), i.appendChild(s), i.appendChild(r), p.addEventListener("click", function(t) {
              t.stopPropagation(), o("nothanks"), tt.banner.hide(), tt.bannerCookie.set("true")
            }), l.addEventListener("click", function(t) {
              t.stopPropagation(), P.register(), tt.banner.hide()
            }), e.appendChild(i)
          }
        },
        hide: function() {
          var t = P._getElById("roost-banner")
          P._addClass(t, "roost-banner-dismiss"), t.parentNode.removeChild(t)
        }
      },
      paneUI: {
        show: function() {
          P._getElById("roost-banner") && tt.banner.hide(), tt.roostNodes.notes.style.display = "block", P._toggleClass(tt.roostNodes.notes, tt.roostClasses.expandNotes), P._toggleClass(tt.roostNodes.wrapper, tt.roostClasses.expandIndicator), P._hasClass(tt.roostNodes.settings, tt.roostClasses.showSettings) && (P._toggleClass(tt.roostNodes.settings, tt.roostClasses.showSettings), P._toggleClass(tt.roostNodes.noteList, tt.roostClasses.hide)), P._removeClass(tt.roostNodes.notes, tt.roostClasses.shrinkWrapper), tt.roostNodes.notes.style.bottom = String(-1 * tt.roostNodes.notes.getBoundingClientRect().height) + "px", tt.paneCookie.set("true")
        },
        hide: function() {
          P._hasClass(tt.roostNodes.settings, tt.roostClasses.showSettings) && (P._toggleClass(tt.roostNodes.settings, tt.roostClasses.showSettings), P._toggleClass(tt.roostNodes.noteList, tt.roostClasses.hide)), P._removeClass(tt.roostNodes.disable, tt.roostClasses.hide), P._removeClass(tt.roostNodes.disableText, tt.roostClasses.hide), P._removeClass(tt.roostNodes.spinner, tt.roostClasses.showSpinner), P._removeClass(tt.roostNodes.notes, tt.roostClasses.expandNotes), P._removeClass(tt.roostNodes.notes, tt.roostClasses.shrinkWrapper), P._removeClass(tt.roostNodes.wrapper, tt.roostClasses.expandIndicator), tt.paneCookie.set("false")
        }
      },
      notifications: {
        populateAll: function(t) {
          var e = _.notifications
          if (tt.readCookie.removeStale(e), e && e.length)
            for (var o = 0; o < e.length; o++) ! function(e) {
              if (h(_.rdt)) {
                var o = tt.readCookie.check(e)
                o || tt.notifications.populateSingle(t, e)
              } else tt.notifications.populateSingle(t, e)
            }(e[o])
          else tt.emptyNotifications()
          tt.updateCount()
        },
        populateSingle: function(e, o, i) {
          if (o.read !== !0) {
            var s = {
              li: t.document.createElement("li"),
              title: t.document.createElement("p"),
              time: t.document.createElement("p"),
              share: {
                wrapper: t.document.createElement("div"),
                twitter: tt.roostNodes.twitterIcon.cloneNode(!0),
                fb: tt.roostNodes.fbIcon.cloneNode(!0),
                mainIcon: tt.roostNodes.share.cloneNode(!0)
              },
              customTitle: t.document.createElement("p"),
              customImg: t.document.createElement("img")
            }
            tt.singleNoteUI.note(s, o), _.pkSettings.share && (s = tt.singleNoteUI.share(s, o)), i ? e.insertBefore(s.li, e.firstChild) : e.appendChild(s.li)
          }
        },
        removeSingle: function(t) {
          var i = t.split("-"),
            s = Number(i[i.length - 1]),
            r = P._getElById(t)
          P._addClass(r, "dismissing"), setTimeout(function() {
            r.parentNode.removeChild(r)
          }, 500)
          for (var n = 0; n < _.notifications.length; n++) {
            var a = _.notifications[n]
            if (a.roost_note_id === s) {
              P._debugLog("Clearing notification with ID: ", a.roost_note_id), g(_.rdt) && e(_.host + "/api/browser/clear/" + a.roost_note_id + "/" + a.roost_send_id), h(_.rdt) && tt.readCookie.add(a.roost_note_id), _.notifications.splice(n, 1)
              break
            }
          }
          o("clearsinglenote"), tt.updateCount()
        },
        clearAll: function() {
          for (var e = t.document.getElementsByClassName("roost-notification"), i = 0; i < e.length; i++) ! function(t) {
            tt.notifications.removeSingle(t.id)
          }(e[i])
          _.notifications = [], o("clearallnotes"), tt.updateCount()
        }
      },
      resizeTextNodeWithBreaks: function(t, e, o) {
        if (t)
          for (var i = t.innerHTML.split(o), s = 0; s < i.length; s++) tt.resizeTextSection(t, i[s], e)
      },
      resizeTextSection: function(t, e, o) {
        var i = P._getFontSize(t)
        if (!(10 >= i)) {
          var s = parseInt(P._getTextWidth(e, i)) + 7
          s >= o && (t.style.fontSize = i - 1 + "px", tt.resizeTextSection(t, e, o))
        }
      },
      resizeTextNode: function(t, e, o) {
        if (t) {
          var i = P._getFontSize(t),
            s = t.textContent;
          ("roost-notifications-title" == t.getAttribute("id") || "roost-gear" == t.getAttribute("id") || "roost-clear-all" == t.getAttribute("id")) && (s = t.textContent.toUpperCase())
          var r = P._getTextWidth(s, i),
            n = o > 1 ? 25 : 0
          r = parseInt(r + 7), 10 >= i || (r = Math.ceil(r / o) + n, r >= e && (t.style.fontSize = i - 1 + "px", tt.resizeTextNode(t, e, o)))
        }
      },
      compensateTextLength: function() {
        for (var t = [{
            id: "roost-notifications-title",
            width: 145
          }, {
            id: "roost-gear",
            width: 110
          }, {
            id: "roost-clear-all",
            width: 150
          }, {
            id: "roost-slide-out-headline",
            width: 320
          }, {
            id: "roost-slide-out-slug",
            width: 250
          }, {
            id: "roost-slide-out-desc",
            width: 350
          }, {
            id: "roost-subscribe-button",
            width: 145
          }, {
            id: "roost-bellprompt-title",
            width: 200,
            lines: 2
          }, {
            id: "roost-bellprompt-body",
            width: 210,
            lines: 3
          }, {
            id: "roost-bellprompt-btn",
            width: 90
          }, {
            id: "roost-bellprompt-decline",
            width: 80
          }], e = ["<br>", "<br/>", "<br />"], o = 0; o < t.length; o++) {
          var i = P._getElById(t[o].id)
          if (i) {
            for (var s = t[o].width, r = t[o].hasOwnProperty("lines") ? t[o].lines : 1, n = null, a = 0; a < e.length; a++) {
              var l = e[a]
              if (i.innerHTML.indexOf(l) > -1) {
                n = l
                break
              }
            }
            n ? tt.resizeTextNodeWithBreaks(i, s, n) : tt.resizeTextNode(i, s, r)
          }
        }
        for (var d = [
            ["roost-notifications-title", "roost-gear"]
          ], p = 0; p < d.length; p++) {
          for (var c, g, u, m = 0; m < d[p].length; m++) u = P._getElById(d[p][m]), u && (g = P._getFontSize(u), 0 == m ? c = g : c > g && (c = g))
          for (var h = 0; h < d[p].length; h++) u && (u = P._getElById(d[p][h]), u.style.fontSize = c + "px")
        }
      },
      generateCSS: function() {
        var e, o = tt.countNotes()
        o > 1 || 1 > o ? e = "updates" : 1 == o && (e = "update")
        var i = P._deepCopy({}, et)
        if (i.children["#roost-subscribe-button"].attributes["background-color"] = _.pkSettings.pkColors.dontSend, i.children["#roost-slide-out-dontsend"].attributes.color = _.pkSettings.pkColors.dontSend, _.pkSettings.text.coachmark ? i.children["#goroostcom-bell.show-coachmarks::after, #goroostcom-bell.animate-coachmarks-start::after"].attributes.content = "'" + _.pkSettings.text.coachmark + "'" : i.children["#goroostcom-bell.show-coachmarks::after, #goroostcom-bell.animate-coachmarks-start::after"].attributes.content = "'" + o + " new " + e + " for you'", i.children["#goroostcom-bell.show-coachmarks::after, #goroostcom-bell.animate-coachmarks-start::after"].attributes.background = _.pkSettings.bgColor, i.children["#goroostcom-bell.show-coachmarks::before, #goroostcom-bell.animate-coachmarks-start::before"].attributes["border-left-color"] = _.pkSettings.bgColor, i.children["#goroostcom-bell.show-coachmarks::after, #goroostcom-bell.animate-coachmarks-start::after"].attributes["border-left-color"] = _.pkSettings.bgColor, i.children["#roost-bell *"].attributes.fill = _.pkSettings.bellColor + " !important", i.children["#roost-browsernote-wrapper"].attributes["z-index"] = _.pkSettings.zIndex + 2e3, _.pkSettings.left) {
          var s = i.children["#goroostcom-bell.roost-wrapper-left"].attributes.left
          s = Number(s.slice(0, s.length - 2)), s += P._isSmallScreen(window) && null !== _.pkSettings.mobileOffset.left ? _.pkSettings.mobileOffset.left : _.pkSettings.offset.left, i.children["#goroostcom-bell.roost-wrapper-left"].attributes.left = s + "px", i.children["@media (max-width: 770px)"].children["div#goroostcom-bell"].attributes.right = "initial", i.children["@media (max-width: 770px)"].children["div#goroostcom-bell"].attributes.left = s + "px"
        } else {
          var r = i.children["#goroostcom-bell"].attributes.right
          r = Number(r.slice(0, r.length - 2)), r += P._isSmallScreen(window) && null !== _.pkSettings.mobileOffset.right ? _.pkSettings.mobileOffset.right : _.pkSettings.offset.right, i.children["#goroostcom-bell"].attributes.right = r + "px", i.children["@media (max-width: 770px)"].children["div#goroostcom-bell"].attributes.right = r + "px"
        }
        if (_.pkSettings.top) {
          var n = i.children["#goroostcom-bell.roost-wrapper-top"].attributes.top
          n = Number(n.slice(0, n.length - 2)), n += P._isSmallScreen(window) && null !== _.pkSettings.mobileOffset.top ? _.pkSettings.mobileOffset.top : _.pkSettings.offset.top, i.children["#goroostcom-bell.roost-wrapper-top"].attributes.top = n + "px", i.children["@media (max-width: 770px)"].children["div#goroostcom-bell"].attributes.bottom = "initial", i.children["@media (max-width: 770px)"].children["div#goroostcom-bell"].attributes.top = n + "px"
        } else {
          var a = i.children["#goroostcom-bell"].attributes.bottom
          a = Number(a.slice(0, a.length - 2)), a += P._isSmallScreen(window) && null !== _.pkSettings.mobileOffset.bottom ? _.pkSettings.mobileOffset.bottom : _.pkSettings.offset.bottom, i.children["#goroostcom-bell"].attributes.bottom = a + "px", i.children["@media (max-width: 770px)"].children["div#goroostcom-bell"].attributes.bottom = a + "px"
        }
        _.pkSettings.hideTitle && (i.children["#roost-data li p.roost-notification-timestamp"].attributes["margin-top"] = "10px", i.children["#roost-data li p.roost-custom-title~p:first-of-type"].attributes["line-height"] = "135%"), _.pkSettings.hideAttribution && (i.children["#roost-branding"].attributes.display = "none"), i.children["svg#Icons .st0"].attributes.fill = _.pkSettings.unreadBackgroundColor, i.children["svg#Icons .st2"].attributes.fill = _.pkSettings.unreadTextColor
        var l = v(i),
          d = t.document.createElement("style")
        d.innerHTML = l
        var p = document.head || document.getElementsByTagName("head")[0]
        p.appendChild(d)
      },
      readCookie: {
        get: function() {
          return P.getCookie("roost-notes-read")
        },
        set: function(t) {
          P.setCookie("roost-notes-read", t, 365)
        },
        init: function() {
          var t = this.get()
          if (!t || !t.length) {
            var e = JSON.stringify({
              data: []
            })
            this.set(e)
          }
        },
        add: function(t) {
          var e = JSON.parse(this.get())
          e = e.data, e.push(t), e = JSON.stringify({
            data: e
          }), this.set(e)
        },
        check: function(t) {
          var e = this.get()
          if (e.length) {
            var o = JSON.parse(this.get())
            return o = o.data, o.indexOf(t.roost_note_id) > -1
          }
          return !1
        },
        removeStale: function(t) {
          var e = this.get()
          if (e.length) {
            var o = JSON.parse(e)
            o = o.data
            for (var i = 0; i < o.length; i++) {
              var s = t.indexOf(o[i])
              s > -1 && t.splice(s, 1)
            }
            o = JSON.stringify({
              data: o
            }), this.set(o)
          }
        }
      },
      paneCookie: {
        get: function() {
          return P.getCookie("roost-isopen")
        },
        set: function(t) {
          P.setCookie("roost-isopen", t, 365)
        },
        init: function() {
          var e = this.get()
          e && e.length ? "true" == e && (P._isSmallScreen(t) || (tt.paneUI.show(), o("autoshow"))) : this.set("false")
        }
      },
      bannerCookie: {
        get: function() {
          return P.getCookie("roost-nothanks")
        },
        set: function(t) {
          P.setCookie("roost-nothanks", t, 365)
        },
        init: function() {
          var t = this.get()
          t && t.length || this.set("false")
        }
      },
      flyoutCookie: {
        get: function() {
          return P.getCookie("roost-flyout")
        },
        set: function(t) {
          P.setCookie("roost-flyout", t, .02)
        },
        init: function() {
          var t = this.get()
          t && t.length || this.set("false")
        }
      },
      settingsUI: {
        disable: function() {
          h(_.rdt) ? P.register() : (P._debugLog("calling _roost.push(['enable', " + tt.roostNodes.disable.checked + "])"), _roost.push(["enable", tt.roostNodes.disable.checked])), P._toggleClass(tt.roostNodes.spinner, tt.roostClasses.showSpinner), setTimeout(function() {
            P._toggleClass(tt.roostNodes.spinner, tt.roostClasses.showSpinner)
          }, 2e3)
        },
        segmentSelection: function(e) {
          var o = t.document.createElement("ul")
          o.setAttribute("id", "roost-segments-list")
          var i = t.document.createElement("p")
          i.setAttribute("id", "roost-segments-head"), i.textContent = "Only receive notifications about"
          for (var s = 0; s < e.length; s++) ! function(e) {
            var i = t.document.createElement("li"),
              r = t.document.createElement("input"),
              n = t.document.createElement("p")
            r.setAttribute("type", "checkbox"), r.setAttribute("id", "roost-segment-select-" + s), r.setAttribute("class", "roost-segment-select"), i.addEventListener("click", function(t) {
              var o = _.tags.indexOf(e.tagName); - 1 == o ? (r.setAttribute("checked", "checked"), r.checked = !0, O(["segments_add", e.tagName])) : (r.removeAttribute("checked"), r.checked = !1, O(["segments_remove", e.tagName]))
            })
            var a = _.tags.indexOf(e.tagName) > -1
            r.checked = a, n.setAttribute("id", "roost-segment-label-" + s), n.setAttribute("class", "roost-segment-label"), n.textContent = e.display, i.setAttribute("id", "roost-segment-" + s), i.setAttribute("class", "roost-segment"), i.appendChild(r), i.appendChild(n), o.appendChild(i)
          }(e[s])
          tt.roostNodes.settings.appendChild(i), tt.roostNodes.settings.appendChild(o)
        }
      },
      baseUI: {
        applyStyles: function() {
          tt.roostNodes.wrapper.style.display = "block", P._isSmallScreen(t) ? (tt.roostNodes.wrapper.style.width = _.pkSettings.smMobileWidth, tt.roostNodes.wrapper.style.height = _.pkSettings.smMobileHeight) : P._isMediumScreen(t) ? (tt.roostNodes.wrapper.style.width = _.pkSettings.lgMobileWidth, tt.roostNodes.wrapper.style.height = _.pkSettings.lgMobileHeight) : (tt.roostNodes.wrapper.style.width = _.pkSettings.width, tt.roostNodes.wrapper.style.height = _.pkSettings.height), tt.roostNodes.wrapper.style.zIndex = _.pkSettings.zIndex, tt.roostNodes.wrapper.style.background = _.pkSettings.bgColor, tt.roostNodes.bell.style.fill = _.pkSettings.bellColor, tt.roostNodes.notes.style.zIndex = _.pkSettings.zIndex + 1e3, tt.roostNodes.bubble.style.borderColor = _.pkSettings.bgColor, tt.roostNodes.bubble.style.background = _.pkSettings.unreadBackgroundColor, tt.roostNodes.bubble.style.color = _.pkSettings.unreadTextColor
          var e = Math.floor(.32 * Number(_.pkSettings.height.substring(0, _.pkSettings.height.length - 2))) - 4
          tt.roostNodes.bubble.style.lineHeight = String(e) + "px", "count" == _.pkSettings.showUnread ? (P._toggleClass(tt.roostNodes.bubble, tt.roostClasses.fullBubble), P._toggleClass(tt.roostNodes.bubble, "roost-bubble-svg")) : "dot" == _.pkSettings.showUnread ? P._toggleClass(tt.roostNodes.bubble, tt.roostClasses.miniBubble) : "none" == _.pkSettings.showUnread && P._toggleClass(tt.roostNodes.bubble, tt.roostClasses.hide), _.pkSettings.absolute || P._addClass(tt.roostNodes.wrapper, tt.roostClasses.inlineWrapper), _.pkSettings.circular || P._addClass(tt.roostNodes.wrapper, tt.roostClasses.squareWrapper), _.pkSettings.absolute || _.pkSettings.circular || P._addClass(tt.roostNodes.wrapper, "roost-inlinecircle"), tt.generateCSS()
        },
        postRenderStyles: function() {
          var t = P._getElById("roost-bellprompt"),
            e = P._getElById("roost-data")
          t && e && (e.style.paddingTop = t.clientHeight + "px")
        },
        unsub: function() {
          _.pkSettings.settingsForAll || P._addClass(tt.roostNodes.gear, tt.roostClasses.hide)
        },
        unsubPrompt: function() {
          var e = t.document.createElement("img"),
            o = t.document.createElement("div"),
            i = t.document.createElement("p"),
            s = t.document.createElement("p"),
            r = t.document.createElement("p"),
            n = t.document.createElement("button")
          if (e.setAttribute("id", "roost-bellprompt-image"), _.pkSettings.noteCenterOptIn.useDeviceImage && e.setAttribute("src", "//cdn.goroost.com/images/bell/laptop.png"), _.pkSettings.noteCenterOptIn.useLogo) {
            var a = "https://dashboard.goroost.com/api/device/logo?size=160&appKey=",
              l = a + _.appKey
            e.setAttribute("src", l), e.setAttribute("class", "roost-bellprompt-logo"), o.setAttribute("class", "roost-bellprompt-containslogo")
          }
          i.setAttribute("id", "roost-bellprompt-title"), i.setAttribute("class", "roost-bellprompt-text"), s.setAttribute("id", "roost-bellprompt-body"), s.setAttribute("class", "roost-bellprompt-text"), n.setAttribute("id", "roost-bellprompt-btn"), r.setAttribute("id", "roost-bellprompt-decline"), o.setAttribute("id", "roost-bellprompt")
          var d = _.pkSettings.text.noteCenterOptin.title.replace("$SITE", _.configName),
            p = _.pkSettings.text.noteCenterOptin.button.replace("$SITE", _.configName),
            c = _.pkSettings.text.noteCenterOptin.body.replace("$SITE", _.configName),
            g = _.pkSettings.text.noteCenterOptin.decline.replace("$SITE", _.configName)
          i.textContent = d, n.textContent = p, r.textContent = g, s.textContent = c, n.addEventListener("click", function(t) {
            t.stopPropagation(), P.register()
          }), r.addEventListener("click", function(t) {
            t.stopPropagation(), tt.promptAd.dismiss()
            var e = P._getElById("roost-bellprompt")
            tt.roostNodes.noteList.style.paddingTop = "0px", P._addClass(e, tt.roostClasses.hide), P._toggleClass(tt.roostNodes.notes, tt.roostClasses.unsubbedNotes)
          }), o.appendChild(i), o.appendChild(s), o.appendChild(n), o.appendChild(r), o.appendChild(e), tt.roostNodes.notes.appendChild(o), P._toggleClass(tt.roostNodes.notes, tt.roostClasses.unsubbedNotes), P._toggleClass(tt.roostNodes.wrapper, tt.roostClasses.unsubbedBell)
        }
      },
      singleNoteUI: {
        note: function(e, i) {
          if (e.title.textContent = i.body, e.customTitle.textContent = i.title, _.pkSettings.useTimestamp) {
            var s = (new Date).getTime(),
              r = s - i.time_offset_ms,
              n = new Date(r),
              a = n.toLocaleString(t.navigator.language, {
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
              })
            e.time.textContent = a
          } else e.time.textContent = i.time_offset
          if (i.has_image) {
            var l = _.host + "/api/browser/logo?size=100&direct=true&appKey=" + _.appKey + "&noteID=" + i.roost_note_id
            e.customImg.setAttribute("class", "roost-note-img"), e.customImg.setAttribute("src", l), e.li.setAttribute("class", "roost-notification")
          } else e.li.setAttribute("class", "roost-notification roost-list-noimage")
          e.li.setAttribute("id", "roost-notification-" + i.roost_note_id), e.customTitle.setAttribute("class", "roost-custom-title"), e.time.setAttribute("class", "roost-notification-timestamp"), _.pkSettings.hideTitle || e.li.appendChild(e.customTitle), e.li.appendChild(e.title), e.li.appendChild(e.customImg), e.li.appendChild(e.time)
          var d = t.document.createElement("button")
          return d.setAttribute("class", "roost-view-btn"), d.textContent = "Open", e.li.addEventListener("click", function(t) {
            t.stopPropagation(), o("storyclick")
            var e = "roost-notification-" + i.roost_note_id
            tt.notifications.removeSingle(e), tt.singleNoteUI.noteClick(i)
          }), tt.eventHandlers.singleNote(e.li), i
        },
        noteClick: function(t) {
          var e
          t.newQueue ? (e = "http://pipeline.goroost.com/push/redirect?noteID=" + t.roost_note_id, e += _.rdt ? "&rdt=" + _.rdt : "&rdt=null") : (e = "https://go.goroost.com/note/" + t.roost_note_id, (t.roost_send_id || 0 == t.roost_send_id) && (e += "/" + t.roost_send_id)), _.pkSettings.notesInNewWindow ? window.open(e, "_blank") : window.location.href = e
        },
        share: function(t, e) {
          var i = e.url + "?share=true"
          return t.share.wrapper.setAttribute("id", "roost-share-wrapper"), t.share.fb.setAttribute("id", "roost-share-fb"), t.share.twitter.setAttribute("id", "roost-share-twitter"), t.share.wrapper.appendChild(t.share.fb), t.share.wrapper.appendChild(t.share.twitter), t.li.appendChild(t.share.wrapper), t.share.twitter.addEventListener("click", function(e) {
            e.stopPropagation(), P._removeClass(t, tt.roostClasses.share), tt.twitShare(i, 520, 350), o("shareclick")
          }), t.share.fb.addEventListener("click", function(s) {
            s.stopPropagation(), P._removeClass(t, tt.roostClasses.share), tt.fbShare(i, "TITLE", e.title, null, 520, 350), o("shareclick")
          }), t.share.mainIcon.setAttribute("id", "roost-note-share-" + e.roost_note_id), t.share.mainIcon.setAttribute("class", "roost-note-share"), t.share.mainIcon.addEventListener("click", function(e) {
            e.stopPropagation(), P._toggleClass(t.li, tt.roostClasses.share)
          }), t.li.appendChild(t.share.mainIcon), t
        }
      },
      emailUI: {
        subscribeURL: function() {
          return "http://localhost:9000/registeremail?appKey=" + _.appKey
        },
        submit: function(t) {
          P._toggleClass(tt.roostNodes.spinner, tt.roostClasses.showSpinner)
          var o = tt.emailUI.subscribeURL()
          o = o + "&email=" + encodeURIComponent(t), e(o)
        },
        handleResponse: function(t) {
          P._toggleClass(tt.roostNodes.spinner, tt.roostClasses.showSpinner)
          var e "true" == String(t) ? (e = P._getElById("roost-email-success"), P._removeClass(e, "roost-hide")) : (e = P._getElById("roost-email-failure"), P._removeClass(e, "roost-hide")), setTimeout(function() {
            P._debugLog("adding roost-hide to", e), P._addClass(e, "roost-hide")
          }, 3e3)
        }
      },
      eventHandlers: {
        allNotes: function() {
          var e = t.document.getElementsByClassName("roost-notification")
          if (!P._isSmallScreen(t)) {
            var o = tt.roostNodes.close.cloneNode(!0)
            o.setAttribute("id", "roost-note-dismiss"), o.addEventListener("click", function(t) {
              t.stopPropagation(), tt.notifications.removeSingle(o.parentNode.id)
            })
          }
          for (var i = 0; i < e.length; i++) ! function(e) {
            P._isSmallScreen(t) || e.addEventListener("mouseenter", function(t) {
              e.appendChild(o), setTimeout(function() {
                P._addClass(o, "dismiss-fadein")
              }, 50)
            }), e.addEventListener("mouseleave", function(i) {
              P._isSmallScreen(t) || (P._removeClass(o, "dismiss-fadein"), e.removeChild(o)), _.pkSettings.share && P._removeClass(e, tt.roostClasses.share)
            }), e.addEventListener("touchstart", function(t) {
              t.stopPropagation(), tt.eventHandlers.touch.handleStart(t)
            }), e.addEventListener("touchmove", function(t) {
              t.stopPropagation(), tt.eventHandlers.touch.handleDirection(t, e)
            }), e.addEventListener("touchend", function(t) {
              t.stopPropagation(), tt.eventHandlers.touch.handleStop(t, e)
            })
          }(e[i])
        },
        singleNote: function(e) {
          if (!P._isSmallScreen(t)) {
            var o = tt.roostNodes.close.cloneNode(!0)
            o.setAttribute("id", "roost-note-dismiss"), o.addEventListener("click", function(t) {
              t.stopPropagation(), tt.notifications.removeSingle(o.parentNode.id)
            })
          }
          P._isSmallScreen(t) || e.addEventListener("mouseenter", function(t) {
            e.appendChild(o), setTimeout(function() {
              P._addClass(o, "dismiss-fadein")
            }, 50)
          }), e.addEventListener("mouseleave", function(i) {
            P._isSmallScreen(t) || (P._removeClass(o, "dismiss-fadein"), e.removeChild(o)), _.pkSettings.share && P._removeClass(e, tt.roostClasses.share)
          }), e.addEventListener("touchstart", function(t) {
            t.stopPropagation(), tt.eventHandlers.touch.handleStart(t)
          }), e.addEventListener("touchmove", function(t) {
            t.stopPropagation(), tt.eventHandlers.touch.handleDirection(t, e)
          }), e.addEventListener("touchend", function(t) {
            t.stopPropagation(), tt.eventHandlers.touch.handleStop(t, e)
          })
        },
        base: function() {
          if (_.pkSettings.settingsForAll ? tt.roostNodes.gear.addEventListener("click", function(t) {
              t.stopPropagation(), o("setting"), P._toggleClass(tt.roostNodes.settings, tt.roostClasses.showSettings), P._toggleClass(tt.roostNodes.noteList, tt.roostClasses.hide), P._toggleClass(tt.roostNodes.notes, tt.roostClasses.shrinkWrapper), tt.roostNodes.notes.style.bottom = String(-1 * tt.roostNodes.notes.getBoundingClientRect().height) + "px"
            }) : g(_.rdt) && tt.roostNodes.gear.addEventListener("click", function(t) {
              t.stopPropagation(), o("setting"), P._toggleClass(tt.roostNodes.settings, tt.roostClasses.showSettings), P._toggleClass(tt.roostNodes.noteList, tt.roostClasses.hide), P._toggleClass(tt.roostNodes.notes, tt.roostClasses.shrinkWrapper), tt.roostNodes.notes.style.bottom = String(-1 * tt.roostNodes.notes.getBoundingClientRect().height) + "px"
            }), tt.roostNodes.notes.addEventListener("touchmove", function(t) {
              t.stopPropagation()
            }), tt.roostNodes.wrapper.addEventListener("click", function(t) {
              P.openNoteCenter()
            }), tt.roostNodes.bell.addEventListener("click", function(t) {
              P.openNoteCenter()
            }), tt.roostNodes.bubble.addEventListener("click", function(t) {
              P.openNoteCenter()
            }), tt.roostNodes.title.addEventListener("click", function(t) {
              t.stopPropagation(), P._removeClass(tt.roostNodes.settings, tt.roostClasses.showSettings), P._removeClass(tt.roostNodes.noteList, tt.roostClasses.hide), P._removeClass(tt.roostNodes.notes, tt.roostClasses.shrinkWrapper), tt.roostNodes.notes.style.bottom = String(-1 * tt.roostNodes.notes.getBoundingClientRect().height) + "px"
            }), tt.roostNodes.clearAll.addEventListener("click", function(t) {
              t.stopPropagation(), tt.notifications.clearAll()
            }), tt.roostNodes.disable.addEventListener("click", function(t) {
              tt.settingsUI.disable()
            }), tt.roostNodes.disableText.addEventListener("click", function(t) {
              tt.roostNodes.disable.checked = !tt.roostNodes.disable.checked, tt.settingsUI.disable()
            }), tt.roostNodes.closeWrapper.addEventListener("click", function(t) {
              o("xclicked"), tt.paneUI.hide()
            }), tt.roostNodes.close.addEventListener("click", function(t) {
              o("xclicked"), tt.paneUI.hide()
            }), tt.roostNodes.brand.addEventListener("click", function(t) {
              t.stopPropagation(), o("attribution"), window.open("https://goroost.com", "_blank")
            }), (_.pkSettings.fadeOnScroll.enabled || _.pkSettings.promptOnScroll.enabled) && t.addEventListener("scroll", function(e) {
              if (_.pkSettings.fadeOnScroll.enabled && (_.pkSettings.fadeOnScroll.mobileOnly && !P._isSmallScreen(t) || P._hasClass(tt.roostNodes.wrapper, "roost-bell-fadeout") || (P._addClass(tt.roostNodes.wrapper, "roost-bell-fadeout"), setTimeout(function() {
                  P._removeClass(tt.roostNodes.wrapper, "roost-bell-fadeout")
                }, 2e3))), _.pkSettings.promptOnScroll.enabled) {
                var o = P._getScrollDistance()
                o >= _.pkSettings.promptOnScroll.distance && !_.denied && h(_.rdt) && P.prompt()
              }
            }), _.pkSettings.email) {
            var e = P._getElById("roost-email-submit"),
              i = P._getElById("roost-email-input")
            e.addEventListener("click", function(t) {
              t.stopPropagation()
              var e = i.value
              tt.emailUI.submit(e)
            }), i.addEventListener("keydown", function(t) {
              if (13 == t.keyCode) {
                var e = i.value
                tt.emailUI.submit(e)
              }
            })
          }
        },
        preventPropagation: function() {
          for (var t in tt.roostNodes) ! function(t) {
            t && t.addEventListener("click", function(t) {
              t.stopPropagation()
            })
          }(tt.roostNodes[t])
        },
        touch: {
          xDown: null,
          yDown: null,
          isRight: !1,
          handleStart: function(t) {
            this.xDown = t.touches[0].clientX, this.yDown = t.touches[0].clientY
          },
          handleDirection: function(t, e) {
            if (this.xDown && this.yDown) {
              var o = t.touches[0].clientX,
                i = t.touches[0].clientY,
                s = this.xDown - o,
                r = this.yDown - i
              Math.abs(s) > Math.abs(r) && (s > 0 || (e.style.marginLeft = String(-1 * s) + "px", e.style.marginRight = String(s) + "px", P._addClass(e, "roost-dragging"), this.isRight = !0))
            }
          },
          handleStop: function(t, e) {
            e.style.marginLeft = "0px", e.style.marginRight = "0px", P._removeClass(e, "roost-dragging"), this.isRight && tt.notifications.removeSingle(e.id), this.isRight = !1
          }
        }
      },
      fbShare: function(t, e, o, i, s, r) {
        var n = screen.height / 2 - r / 2,
          a = screen.width / 2 - s / 2
        window.open("http://www.facebook.com/sharer.php?s=100&p[title]=" + e + "&p[summary]=" + o + "&p[url]=" + t + "&p[images][0]=" + i, "sharer", "top=" + n + ",left=" + a + ",toolbar=0,status=0,width=" + s + ",height=" + r)
      },
      twitShare: function(t, e, o) {
        var i = screen.height / 2 - o / 2,
          s = screen.width / 2 - e / 2,
          r = "https://twitter.com/home?status=" + t
        window.open(r, "sharer", "top=" + i + ",left=" + s + ",toolbar=0,status=0,width=" + e + ",height=" + o)
      },
      countNotes: function() {
        var t = 0
        if (g(_.rdt)) t = _.notifications.length
        else
          for (var e = 0; e < _.notifications.length; e++) {
            var o = tt.readCookie.check(_.notifications[e])
            o || t++
          }
        return t
      },
      updateCount: function() {
        var t = tt.countNotes()
        _.unreadNoteCount = t, P._removeClass(tt.roostNodes.bubble, tt.roostClasses.hide), 9 >= t && t > 0 ? tt.roostNodes.bubble.innerHTML = tt.countSvg[t] : t > 9 ? tt.roostNodes.bubble.innerHTML = tt.countSvg[10] : (P._addClass(tt.roostNodes.bubble, tt.roostClasses.hide), tt.emptyNotifications())
      },
      promptAd: {
        init: function() {
          P.getCookie("roost-show-prompt") || P.setCookie("roost-show-prompt", "true", 365)
        },
        dismiss: function() {
          P.setCookie("roost-show-prompt", "false", 365)
        },
        check: function() {
          return "true" === P.getCookie("roost-show-prompt")
        }
      },
      emptyNotifications: function() {
        if (!P._getElById("roost-empty-wrapper")) {
          var e = P._getElById("roost-bell").cloneNode(!0),
            o = t.document.createElement("p"),
            i = t.document.createElement("div")
          o.setAttribute("id", "roost-empty-message"), o.textContent = _.pkSettings.text.noNotes, e.setAttribute("id", "roost-empty-bell"), i.setAttribute("id", "roost-empty-wrapper"), i.appendChild(e), i.appendChild(o), tt.roostNodes.notes.appendChild(i), P._addClass(tt.roostNodes.notes, "roost-empty-notifications")
        }
      },
      showNotifications: function() {
        P._toggleClass(tt.roostNodes.notes, tt.roostClasses.expandNotes)
      }
    },
    et = {
      children: {
        "#goroostcom-notifications p, #goroostcom-notifications li, #goroostcom-notifications span, #goroostcom-notifications h1, #goroostcom-notifications h2, #roost-notficiations h3": {
          attributes: {
            "-webkit-touch-callout": "none",
            "-webkit-user-select": "none",
            "-khtml-user-select": "none",
            "-moz-user-select": "none",
            "-ms-user-select": "none",
            "user-select": "none"
          }
        },
        "#goroostcom-bell p, #goroostcom-notifications p, #goroostcom-notifications button": {
          attributes: {
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif'
          }
        },
        "#roost-bellprompt p": {
          attributes: {
            "line-height": "100%"
          }
        },
        "#goroostcom-bell": {
          attributes: {
            position: "fixed",
            right: "25px",
            bottom: "25px",
            "border-radius": "50%",
            cursor: "pointer",
            "-webkit-box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            "-moz-box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            "box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            transition: "1000ms opacity linear, 0ms border-radius linear",
            "-o-transition": "1000ms opacity linear, 0ms border-radius linear",
            "-ms-transition": "1000ms opacity linear, 0ms border-radius linear",
            "-moz-transition": "1000ms opacity linear, 0ms border-radius linear",
            "-webkit-transition": "1000ms opacity linear, 0ms border-radius linear",
            "text-align": "left !important"
          }
        },
        "#goroostcom-bell.hide-bell": {
          attributes: {
            display: "none !important"
          }
        },
        "#goroostcom-bell.roost-bell-fadeout": {
          attributes: {
            opacity: "0",
            transition: "1000ms opacity linear",
            "-o-transition": "1000ms opacity linear",
            "-ms-transition": "1000ms opacity linear",
            "-moz-transition": "1000ms opacity linear",
            "-webkit-transition": "1000ms opacity linear"
          }
        },
        "#goroostcom-bell *": {
          attributes: {
            "box-sizing": "border-box",
            "-webkit-box-sizing": "border-box"
          }
        },
        "#goroostcom-bell:hover #roost-bell": {
          attributes: {
            "-webkit-animation": "wiggle 0.25s ease-in 2",
            "-moz-animation": "wiggle 0.25s ease-in 2",
            animation: "wiggle 0.25s ease-in 2"
          }
        },
        "#roost-bell.roost-wiggle": {
          attributes: {
            "-webkit-animation": "wiggle 0.25s ease-in 2",
            "-moz-animation": "wiggle 0.25s ease-in 2",
            animation: "wiggle 0.25s ease-in 2"
          }
        },
        "#goroostcom-bell.roost-inline": {
          attributes: {
            position: "relative",
            display: "inline-block",
            "vertical-align": "bottom",
            "-webkit-box-shadow": "none",
            "-moz-box-shadow": "none",
            "box-shadow": "none",
            bottom: "0",
            right: "0",
            overflow: "hidden"
          }
        },
        "#goroostcom-bell.roost-no-circle": {
          attributes: {
            "border-radius": "0"
          }
        },
        "#goroostcom-bell.show-coachmarks::after, #goroostcom-bell.animate-coachmarks-start::after": {
          attributes: {
            content: "'Get notifications from " + _.configName + "'",
            position: "absolute",
            left: "-184px",
            top: "50%",
            "margin-top": "-17px",
            overflow: "hidden",
            background: "#3b3b3b",
            "border-radius": "5px",
            height: "35px",
            "line-height": "35px",
            color: "#fff",
            "font-size": "14px",
            "text-align": "center",
            "white-space": "nowrap",
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            "-webkit-box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            "-moz-box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            "box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)"
          }
        },
        "#goroostcom-bell.show-coachmarks::before, #goroostcom-bell.animate-coachmarks-start::before": {
          attributes: {
            content: "''",
            position: "absolute",
            left: "-12px",
            top: "50%",
            "margin-top": "-7px",
            width: "0",
            height: "0",
            "border-left": "8px solid #3b3b3b",
            "border-top": "8px solid transparent",
            "border-bottom": "8px solid transparent"
          }
        },
        "#goroostcom-bell.animate-coachmarks-start::after, #goroostcom-bell.animate-coachmarks-start::before": {
          attributes: {
            width: "0",
            opacity: "0",
            left: "0",
            "z-index": "-1",
            transition: "200ms all linear",
            "-o-transition": "200ms all linear",
            "-ms-transition": "200ms all linear",
            "-moz-transition": "200ms all linear",
            "-webkit-transition": "200ms all linear"
          }
        },
        "#goroostcom-bell.animate-coachmarks-end::after, #goroostcom-bell.animate-coachmarks-end::before": {
          attributes: {
            width: "175px",
            opacity: "1",
            left: "-184px",
            "z-index": "20",
            transition: "200ms all linear",
            "-o-transition": "200ms all linear",
            "-ms-transition": "200ms all linear",
            "-moz-transition": "200ms all linear",
            "-webkit-transition": "200ms all linear"
          }
        },
        "#goroostcom-bell.animate-coachmarks-end::before": {
          attributes: {
            left: "-12px"
          }
        },
        "#goroostcom-bell.animate-coachmarks-width::after": {
          attributes: {
            width: "0",
            transition: "190ms all linear",
            "-o-transition": "190ms all linear",
            "-ms-transition": "190ms all linear",
            "-moz-transition": "190ms all linear",
            "-webkit-transition": "190ms all linear"
          }
        },
        "#goroostcom-bell.animate-coachmarks-width::before": {
          display: "none"
        },
        "#roost-bell": {
          attributes: {
            width: "70%",
            height: "70%",
            margin: "15% 0 0 15%",
            cursor: "pointer !important"
          }
        },
        "#roost-bell *": {
          attributes: {
            fill: "#FFF"
          }
        },
        "#goroostcom-bell.roost-inlinecircle #roost-bell": {
          attributes: {
            width: "125%",
            height: "125%",
            margin: "-15% 0 0 -12.5%"
          }
        },
        "#goroostcom-bell.roost-wrapper-left": {
          attributes: {
            right: "initial",
            left: "25px"
          }
        },
        "#goroostcom-bell.roost-wrapper-top": {
          attributes: {
            bottom: "initial",
            top: "25px"
          }
        },
        "#goroostcom-bell.roost-wrapper-left.show-coachmarks::before, #goroostcom-bell.roost-wrapper-left.animate-coachmarks-start::before": {
          attributes: {
            left: "initial",
            right: "-12px",
            "border-left-style": "hidden",
            "border-right": "8px solid #3b3b3b",
            "border-top": "8px solid transparent",
            "border-bottom": "8px solid transparent"
          }
        },
        "#goroostcom-bell.roost-wrapper-left.animate-coachmarks-start::after, #goroostcom-bell.roost-wrapper-left.animate-coachmarks-start::before": {
          attributes: {
            left: "initial",
            right: "0"
          }
        },
        "#goroostcom-bell.roost-wrapper-left.animate-coachmarks-end::after, #goroostcom-bell.roost-wrapper-left.animate-coachmarks-end::before": {
          attributes: {
            left: "initial",
            right: "-184px"
          }
        },
        "#goroostcom-bell.roost-wrapper-left.animate-coachmarks-end::before": {
          attributes: {
            left: "initial",
            right: "-12px"
          }
        },
        "#roost-bubble": {
          attributes: {
            position: "absolute",
            top: "20px",
            right: "7px",
            cursor: "pointer !important"
          }
        },
        "#roost-bubble-count": {
          attributes: {
            position: "absolute",
            "font-size": "8px",
            "z-index": "4",
            right: "18%",
            top: "0%",
            "font-weight": "600",
            "border-radius": "50%",
            border: "2px solid #3b3b3b",
            "line-height": "8px",
            height: "35%",
            width: "35%",
            "text-align": "center",
            "margin-top": "7px"
          }
        },
        "#roost-bubble-count.roost-bubble-svg": {
          attributes: {
            "background-color": "transparent !important",
            "border-style": "hidden"
          }
        },
        "#roost-prompt p": {
          attributes: {
            "font-size": "3.5vh",
            "text-align": "center",
            margin: "30% 0 0 0"
          }
        },
        "#goroostcom-notifications": {
          attributes: {
            width: "100%",
            "max-width": "400px",
            height: "100vh !important",
            position: "fixed",
            right: "-400px",
            top: "0px",
            bottom: "0px !important",
            "z-index": "5",
            overflow: "hidden",
            background: "#fcfcfc",
            transition: "100ms right ease-in",
            "-o-transition": "100ms right ease-in",
            "-ms-transition": "100ms right ease-in",
            "-moz-transition": "100ms right ease-in",
            "-webkit-transition": "100ms right ease-in"
          }
        },
        "#goroostcom-notifications *": {
          attributes: {
            "box-sizing": "border-box",
            "-webkit-box-sizing": "border-box"
          }
        },
        "#roost-overlay": {
          attributes: {
            width: "100%",
            height: "15%",
            position: "absolute",
            left: "0",
            bottom: "0",
            "background-image": "-webkit-gradient(linear, left bottom, left top, from(rgba(245,245,245,0.95)), to(rgba(245,245,245,0.0)), color-stop(.55,rgba(245,245,245,1)))",
            "z-index": "10",
            "pointer-events": "none"
          }
        },
        "#goroostcom-notifications.roost-notes-visible": {
          attributes: {
            display: "block",
            bottom: "0px !important",
            width: "100%",
            "max-width": "400px",
            height: "100vh",
            right: "0",
            border: "1px solid #ebebeb",
            transition: "100ms right ease-in",
            "-o-transition": "100ms right ease-in",
            "-ms-transition": "100ms right ease-in",
            "-moz-transition": "100ms right ease-in",
            "-webkit-transition": "100ms right ease-in"
          }
        },
        "#roost-notifications-head": {
          attributes: {
            width: "100%",
            height: "60px",
            "border-bottom": "1px solid #cfcfcf",
            "text-align": "left !important"
          }
        },
        "#roost-notifications-title": {
          attributes: {
            "line-height": "58px",
            margin: "0 0 0 0",
            "font-size": "14px",
            "font-weight": "500",
            "text-transform": "uppercase",
            color: "#424242",
            "text-align": "center",
            width: "145px",
            display: "inline-block !important",
            cursor: "pointer !important",
            "border-bottom": "3px solid #424242"
          }
        },
        ".roost-settings-active #roost-notifications-title": {
          attributes: {
            "border-bottom-style": "hidden",
            color: "#949494"
          }
        },
        "#roost-data": {
          attributes: {
            padding: "0 0 100px 0",
            margin: "0",
            "list-style-type": "none",
            height: "calc(100% - 80px)",
            overflow: "scroll",
            position: "relative",
            "-ms-overflow-style": "none"
          }
        },
        "#roost-data::-webkit-scrollbar": {
          attributes: {
            width: "0px !important"
          }
        },
        "#roost-data li": {
          attributes: {
            margin: "0",
            "min-height": "75px",
            position: "relative",
            cursor: "pointer",
            padding: "18px 125px 18px 20px",
            background: "none",
            "box-sizing": "border-box",
            "-webkit-box-sizing": "border-box",
            "list-style-type": "none",
            "text-align": "left !important"
          }
        },
        "#roost-data li::after": {
          attributes: {
            content: "''",
            background: "#cfcfcf",
            position: "absolute",
            bottom: "0",
            left: "50%",
            width: "90%",
            height: "1px",
            margin: "0 0 0 -45%"
          }
        },
        "#roost-data li.dismissing": {
          attributes: {
            overflow: "hidden",
            margin: "0 -400px 0 400px !important",
            "-moz-transition": "margin-left 250ms linear, margin-right 250ms linear",
            "-ms-transition": "margin-left 250ms linear, margin-right 250ms linear",
            "-o-transition": "margin-left 250ms linear, margin-right 250ms linear",
            transition: "margin-left 250ms linear, margin-right 250ms linear"
          }
        },
        "#roost-data li.roost-dragging": {
          attributes: {
            "border-left": "1px solid #cbcbcb",
            "-webkit-box-shadow": "-10px 0px 20px -6px rgba(59,59,59,0.4)",
            "-moz-box-shadow": "-10px 0px 20px -6px rgba(59,59,59,0.4)",
            "box-shadow": "-10px 0px 20px -6px rgba(59,59,59,0.4)"
          }
        },
        "#roost-data li.roost-list-noimage": {
          attributes: {
            "padding-right": "53px"
          }
        },
        "#roost-data li.roost-list-noimage img": {
          attributes: {
            display: "none"
          }
        },
        "#roost-data li p": {
          attributes: {
            "font-size": "12px",
            "font-weight": "400",
            "letter-spacing": "0.25px",
            color: "#666",
            margin: "0",
            "line-height": "14px",
            cursor: "pointer",
            "max-height": "28px",
            overflow: "hidden"
          }
        },
        "#roost-data li p.roost-custom-title": {
          attributes: {
            "font-size": "13px",
            "font-weight": "500",
            "line-height": "18px",
            color: "#424242",
            "-webkit-text-stroke": "0.5px",
            height: "18px"
          }
        },
        "#roost-data li p.roost-custom-title~p:first-of-type": {
          attributes: {}
        },
        "#roost-data li p#roost-date": {
          attributes: {
            "font-size": "12px",
            color: "#FFF",
            background: "#a0a0a0",
            "line-height": "18px",
            width: "90px",
            padding: "0 0 0 5px"
          }
        },
        "#roost-settings": {
          attributes: {
            position: "absolute",
            width: "100%",
            "max-width": "400px",
            height: "100px",
            right: "0",
            display: "none",
            padding: "25px 0 0 0",
            "z-index": "5",
            "text-align": "center"
          }
        },
        "#roost-close-pane": {
          attributes: {
            cursor: "pointer !important",
            width: "60px",
            height: "60px",
            position: "absolute",
            right: "0",
            top: "0"
          }
        },
        "#roost-close": {
          attributes: {
            position: "absolute",
            right: "25px",
            top: "25px",
            fill: "#949494"
          }
        },
        "#roost-note-dismiss": {
          attributes: {
            cursor: "pointer !important",
            margin: "0",
            position: "absolute",
            right: "22px",
            top: "15px",
            width: "9px",
            height: "9px",
            fill: "#949494",
            opacity: "0"
          }
        },
        "#roost-note-dismiss.dismiss-fadein": {
          attributes: {
            opacity: "1",
            "-webkit-transition": "opacity 100ms ease-out",
            "-moz-transition": "opacity 100ms ease-out",
            "-ms-transition": "opacity 100ms ease-out",
            "-o-transition": "opacity 100ms ease-out",
            transition: "opacity 100ms ease-out"
          }
        },
        ".roost-note-share": {
          attributes: {
            width: "13px",
            height: "13px",
            position: "absolute",
            right: "20px",
            top: "50%",
            margin: "-6px 0 0 0",
            fill: "#dadada",
            opacity: "0.3"
          }
        },
        "#roost-gear": {
          attributes: {
            display: "inline-block",
            width: "110px",
            margin: "0",
            "line-height": "58px",
            "font-size": "14px",
            "font-weight": "500",
            "text-transform": "uppercase",
            color: "#949494",
            "text-align": "center",
            cursor: "pointer !important",
            "border-bottom-style": "hidden"
          }
        },
        "#roost-data li:hover .roost-note-share": {
          attributes: {
            opacity: "1",
            "-webkit-transition": "opacity 110ms ease-out",
            "-moz-transition": "opacity 110ms ease-out",
            "-ms-transition": "opacity 110ms ease-out",
            "-o-transition": "opacity 110ms ease-out",
            transition: "opacity 110ms ease-out"
          }
        },
        ".roost-settings-active #roost-gear": {
          attributes: {
            "border-bottom": "3px solid #424242",
            color: "#424242"
          }
        },
        "#roost-settings.roost-settings-visible": {
          attributes: {
            display: "block"
          }
        },
        "#roost-settings.roost-settings-visible #roost-empty-wrapper": {
          attributes: {
            display: "none"
          }
        },
        "#roost-settings input, #roost-settings p": {
          attributes: {
            display: "inline-block",
            "vertical-align": "middle",
            margin: "0 15px",
            "line-height": "60px",
            cursor: "pointer",
            color: "#666",
            "font-size": "14px"
          }
        },
        "#roost-settings p#roost-disable-confirmation, #roost-settings p#roost-enable-confirmation": {
          attributes: {
            width: "90%",
            "text-align": "center",
            cursor: "default"
          }
        },
        "#roost-settings p#roost-disable-text": {
          attributes: {
            "max-width": "75%",
            "line-height": "120%"
          }
        },
        "#roost-settings input": {
          attributes: {
            margin: "0",
            width: "12px"
          }
        },
        "#roost-settings input#roost-disable": {
          attributes: {
            "-moz-appearance": "checkbox",
            "-webkit-appearance": "checkbox"
          }
        },
        "@-webkit-keyframes wiggle": {
          children: {
            "0%": {
              attributes: {
                "-webkit-transform": "rotate(0deg)"
              }
            },
            "25%": {
              attributes: {
                "-webkit-transform": "rotate(10deg)"
              }
            },
            "50%": {
              attributes: {
                "-webkit-transform": "rotate(0deg)"
              }
            },
            "75%": {
              attributes: {
                "-webkit-transform": "rotate(-10deg)"
              }
            },
            "100%": {
              attributes: {
                "-webkit-transform": "rotate(0deg)"
              }
            }
          }
        },
        "@-moz-keyframes wiggle": {
          children: {
            "0%": {
              attributes: {
                "-moz-transform": "rotate(0deg)"
              }
            },
            "25%": {
              attributes: {
                "-moz-transform": "rotate(10deg)"
              }
            },
            "50%": {
              attributes: {
                "-moz-transform": "rotate(0deg)"
              }
            },
            "75%": {
              attributes: {
                "-moz-transform": "rotate(-10deg)"
              }
            },
            "100%": {
              attributes: {
                "-moz-transform": "rotate(0deg)"
              }
            }
          }
        },
        "@keyframes wiggle": {
          children: {
            "0%": {
              attributes: {
                transform: "rotate(0deg)"
              }
            },
            "25%": {
              attributes: {
                transform: "rotate(10deg)"
              }
            },
            "50%": {
              attributes: {
                transform: "rotate(0deg)"
              }
            },
            "75%": {
              attributes: {
                transform: "rotate(-10deg)"
              }
            },
            "100%": {
              attributes: {
                transform: "rotate(0deg)"
              }
            }
          }
        },
        ".roost-note-img": {
          attributes: {
            position: "absolute",
            right: "48px",
            bottom: "50%",
            "margin-bottom": "-28px",
            width: "56px",
            height: "56px"
          }
        },
        "#roost-empty-wrapper": {
          attributes: {
            "text-align": "center",
            "min-width": "150px",
            "min-height": "100px",
            position: "absolute",
            left: "50%",
            top: "50%",
            "-webkit-transform": "translate(-50%, -50%)",
            "-moz-transform": "translate(-50%, -50%)",
            "-ms-transform": "translate(-50%, -50%)",
            "-o-transform": "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)"
          }
        },
        "#roost-empty-bell": {
          attributes: {
            fill: "rgb(205,205,205) !important",
            width: "80px",
            height: "80px"
          }
        },
        "#roost-empty-message": {
          attributes: {
            "font-size": "14px",
            color: "rgb(185,185,185)",
            width: "300px"
          }
        },
        "#roost-branding": {
          attributes: {
            "text-align": "center",
            "font-size": "14px",
            color: "#a9a9a9",
            position: "absolute",
            left: "0",
            bottom: "5px",
            width: "100%",
            "z-index": "-1",
            "font-weight": "600",
            opacity: "0"
          }
        },
        "#roost-brand-logo": {
          attributes: {
            "vertical-align": "middle",
            width: "45px",
            margin: "0 0 0 3px",
            fill: "#a9a9a9"
          }
        },
        "#roost-spinner": {
          attributes: {
            width: "40px",
            height: "40px",
            "border-radius": "50%",
            "box-shadow": "2px 2px 0 0 #a9a9a9",
            position: "absolute",
            left: "50%",
            top: "220px",
            margin: "-20px 0 0 -20px",
            "z-index": "-1",
            visibility: "hidden"
          }
        },
        "#roost-clear-all": {
          attributes: {
            position: "absolute",
            left: "50%",
            bottom: "10px",
            "font-size": "14px",
            "font-weight": "600",
            color: "#666",
            "z-index": "10",
            cursor: "pointer",
            "text-transform": "uppercase",
            "-webkit-transform": "translateX(-50%)",
            "-moz-transform": "translateX(-50%)",
            "-ms-transform": "translateX(-50%)",
            "-o-transform": "translateX(-50%)",
            transform: "translateX(-50%)"
          }
        },
        ".roost-empty-notifications #roost-clear-all": {
          attributes: {
            visibility: "hidden"
          }
        },
        ".roost-settings-active #roost-clear-all": {
          attributes: {
            visibility: "hidden"
          }
        },
        ".roost-settings-active #roost-branding": {
          attributes: {
            opacity: "1",
            "z-index": "10",
            cursor: "pointer"
          }
        },
        ".roost-settings-active #roost-empty-wrapper": {
          attributes: {
            display: "none"
          }
        },
        "#roost-spinner.show-roost-spinner": {
          attributes: {
            animation: "1s spin infinite linear",
            "z-index": "10",
            visibility: "visible"
          }
        },
        "@keyframes spin": {
          children: {
            from: {
              attributes: {
                transform: "rotate(0deg)"
              }
            },
            to: {
              attributes: {
                transform: "rotate(360deg);"
              }
            }
          },
          attributes: {}
        },
        ".roost-hide": {
          attributes: {
            display: "none !important"
          }
        },
        ".roost-visible": {
          attributes: {
            opacity: "1.0 !important"
          }
        },
        ".roost-notes-unsub": {
          attributes: {
            overflow: "visible !important"
          }
        },
        ".roost-notes-unsub #roost-settings.roost-settings-visible ~ #roost-bellprompt": {
          attributes: {
            display: "none"
          }
        },
        "#goroostcom-notifications #roost-bellprompt": {
          attributes: {
            background: "#e6e6e6",
            position: "absolute",
            left: "0",
            top: "60px",
            width: "100%",
            padding: "0 0 0 180px",
            "border-bottom": "1px solid #cfcfcf"
          }
        },
        "#goroostcom-notifications #roost-bellprompt-image": {
          attributes: {
            width: "auto",
            height: "110px",
            position: "absolute",
            left: "0",
            top: "20px"
          }
        },
        "#goroostcom-notifications .roost-bellprompt-text": {
          attributes: {
            "font-size": "18px",
            color: "#3b3b3b",
            "text-align": "left",
            "font-weight": "400"
          }
        },
        "#goroostcom-notifications #roost-bellprompt-title": {
          attributes: {
            "text-align": "left",
            margin: "28px 0 15px 0",
            "font-weight": 600,
            "line-height": "120%"
          }
        },
        "#goroostcom-notifications #roost-bellprompt-body, #goroostcom-notifications #roost-bellprompt-body-2": {
          attributes: {
            "text-align": "left",
            "font-size": "14px",
            "font-weight": "300",
            "line-height": "130%",
            margin: "0 30px 0 0"
          }
        },
        "#roost-bellprompt-body-2": {
          attributes: {
            margin: "5px 0"
          }
        },
        "#roost-bellprompt-btn": {
          attributes: {
            "text-align": "center",
            width: "120px",
            height: "35px",
            "font-size": "14px",
            "line-height": "32px",
            color: "#fff",
            background: "#686868",
            border: "none",
            "border-radius": "3px",
            margin: "15px 0 20px 0",
            cursor: "pointer",
            padding: "0",
            "text-transform": "none",
            display: "inline-block"
          }
        },
        "#roost-bellprompt-btn:hover": {
          attributes: {
            opacity: "0.85",
            "-webkit-transition": "opacity 100ms ease-out",
            "-moz-transition": "opacity 100ms ease-out",
            "-ms-transition": "opacity 100ms ease-out",
            "-o-transition": "opacity 100ms ease-out",
            transition: "opacity 100ms ease-out"
          }
        },
        "#roost-bellprompt-decline": {
          attributes: {
            "font-size": "11px",
            display: "inline-block",
            cursor: "pointer !important",
            "margin-left": "20px",
            color: "#3b3b3b"
          }
        },
        "#goroostcom-notifications #roost-bellprompt-image.roost-bellprompt-logo": {
          attributes: {
            width: "60px",
            height: "60px",
            left: "25px"
          }
        },
        "#goroostcom-notifications #roost-bellprompt.roost-bellprompt-containslogo": {
          attributes: {
            "padding-left": "110px"
          }
        },
        "#roost-share-template": {
          attributes: {
            position: "absolute",
            right: "0",
            bottom: "0",
            visibility: "hidden"
          }
        },
        "#roost-segments-list": {
          attributes: {
            "list-style-type": "none",
            margin: "0"
          }
        },
        ".roost-segment": {
          attributes: {
            height: "40px"
          }
        },
        "#roost-segments-head": {
          attributes: {
            "text-transform": "uppercase",
            "font-size": "12px !important",
            "line-height": "20px !important",
            margin: "25px 15px 0px 15px !important",
            "padding-top": "25px",
            "border-top": "1px solid #CFCFCF",
            width: "370px",
            "text-align": "center"
          }
        },
        "#roost-shareicon-fb, #roost-shareicon-twitter": {
          attributes: {
            position: "absolute",
            right: "0",
            bottom: "0",
            visibility: "hidden"
          }
        },
        "#roost-share-wrapper": {
          attributes: {
            position: "absolute",
            width: "102px",
            height: "0px",
            right: "0",
            bottom: "-35px",
            background: "#FFF",
            overflow: "hidden",
            "z-index": "11",
            "-webkit-box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            "-moz-box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)",
            "box-shadow": "2px 2px 5px 0px rgba(0,0,0,0.3)"
          }
        },
        ".roost-share-active #roost-share-wrapper": {
          attributes: {
            padding: "10px",
            height: "55px",
            border: "1px solid #a9a9a9",
            "border-radius": "5px"
          }
        },
        "#roost-share-fb, #roost-share-twitter": {
          attributes: {
            width: "35px",
            height: "35px",
            display: "inline-block",
            visibility: "hidden",
            "float": "right",
            cursor: "pointer",
            fill: "#55acee"
          }
        },
        "#roost-share-fb": {
          attributes: {
            margin: "0 0 0 10px",
            fill: "#3b5998"
          }
        },
        ".roost-share-active #roost-share-fb, .roost-share-active #roost-share-twitter": {
          attributes: {
            visibility: "visible"
          }
        },
        "#goroostcom-notifications.roost-notes-unsub": {
          attributes: {
            top: "initial",
            bottom: "0"
          }
        },
        ".roost-view-btn": {
          attributes: {
            position: "absolute",
            right: "10px",
            top: "50%",
            "margin-top": "-15px",
            height: "30px",
            background: "none",
            border: "1px solid #3b3b3b",
            "border-radius": "5px",
            cursor: "pointer !important",
            "font-weight": "600",
            opacity: "0.7",
            color: "#3b3b3b",
            padding: "0",
            "text-transform": "none",
            "font-size": "12px",
            "letter-spacing": "0",
            width: "45px"
          }
        },
        "#roost-data li:hover .roost-view-btn": {
          attributes: {
            background: "#3b3b3b",
            color: "#FFF",
            opacity: "0.9",
            "-webkit-transition": "all 100ms ease-out",
            "-moz-transition": "all 100ms ease-out",
            "-ms-transition": "all 100ms ease-out",
            "-o-transition": "all 100ms ease-out",
            transition: "all 100ms ease-out"
          }
        },
        "#roost-banner": {
          attributes: {
            position: "fixed",
            bottom: "0",
            right: "0",
            width: "755px",
            height: "95px",
            background: "#FFF",
            "border-top-left-radius": "8px",
            "-webkit-box-shadow": "0px -2px 8px 0px rgba(0,0,0,0.2)",
            "-moz-box-shadow": "0px -2px 8px 0px rgba(0,0,0,0.2)",
            "box-shadow": "0px -2px 8px 0px rgba(0,0,0,0.2)"
          }
        },
        "#roost-banner-left": {
          attributes: {
            width: "66%",
            "float": "left",
            background: "#f5f5f5",
            position: "relative",
            "box-sizing": "border-box",
            height: "100%",
            padding: "25px",
            "padding-left": "95px",
            "border-top-left-radius": "8px"
          }
        },
        "#roost-banner-right": {
          attributes: {
            width: "33%",
            height: "100%",
            "float": "left",
            position: "relative",
            "box-sizing": "border-box",
            padding: "25px"
          }
        },
        "#roost-banner-title": {
          attributes: {
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            "font-size": "18px",
            margin: "0",
            "font-weight": "500"
          }
        },
        "#roost-banner-subtitle": {
          attributes: {
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            margin: "0",
            "margin-top": "5px",
            "font-size": "13px"
          }
        },
        "#roost-banner-btn": {
          attributes: {
            position: "absolute",
            right: "25px",
            top: "25px",
            color: "#FFF",
            border: "none",
            background: "#3b3b3b",
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            "font-weight": "500",
            "font-size": "15px",
            width: "100px",
            "border-radius": "5px",
            height: "45px",
            cursor: "pointer"
          }
        },
        "#roost-banner-btn:hover": {
          opacity: "0.9",
          "-webkit-transition": "all 100ms ease-out",
          "-moz-transition": "all 100ms ease-out",
          "-ms-transition": "all 100ms ease-out",
          "-o-transition": "all 100ms ease-out",
          transition: "all 100ms ease-out"
        },
        "#roost-banner-dismisstext": {
          attributes: {
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            position: "absolute",
            right: "50px",
            bottom: "5px",
            margin: "0",
            cursor: "pointer",
            "font-size": "11px"
          }
        },
        "#roost-banner-belltext": {
          attributes: {
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            "font-weight": "300",
            "font-size": "14px",
            color: "#898989",
            width: "120px",
            "margin-top": "5px"
          }
        },
        "#roost-banner-arrow": {
          attributes: {
            visibility: "hidden",
            "z-index": "-1"
          }
        },
        "#roost-banner-arrow.roost-show-arrow": {
          attributes: {
            visibility: "visible",
            "z-index": "20",
            fill: "#898989",
            position: "absolute",
            right: "80px",
            top: "40px"
          }
        },
        "#roost-banner-logo": {
          attributes: {
            width: "45px",
            height: "45px",
            position: "absolute",
            left: "25px",
            top: "25px"
          }
        },
        "#roost-wrapper": {
          attributes: {
            "z-index": "1000000"
          }
        },
        "#roost-branding:hover": {
          attributes: {
            color: "#e25351",
            "-webkit-transition": "color 200ms ease-out",
            "-moz-transition": "color 200ms ease-out",
            "-ms-transition": "color 200ms ease-out",
            "-o-transition": "color 200ms ease-out",
            transition: "color 200ms ease-out"
          }
        },
        "#roost-branding:hover #roost-brand-logo *": {
          attributes: {
            fill: "#e25351",
            opacity: "1.0",
            "-webkit-transition": "all 200ms ease-out",
            "-moz-transition": "all 200ms ease-out",
            "-ms-transition": "all 200ms ease-out",
            "-o-transition": "all 200ms ease-out",
            transition: "all 200ms ease-out"
          }
        },
        "#roost-share-fb:hover *": {
          attributes: {
            fill: "#3b5998",
            opacity: "1",
            "-webkit-transition": "all 100ms ease-out",
            "-moz-transition": "all 100ms ease-out",
            "-ms-transition": "all 100ms ease-out",
            "-o-transition": "all 100ms ease-out",
            transition: "all 100ms ease-out"
          }
        },
        "#roost-share-twitter:hover *": {
          attributes: {
            fill: "#55acee",
            opacity: "1",
            "-webkit-transition": "all 100ms ease-out",
            "-moz-transition": "all 100ms ease-out",
            "-ms-transition": "all 100ms ease-out",
            "-o-transition": "all 100ms ease-out",
            transition: "all 100ms ease-out"
          }
        },
        "#roost-data li p.roost-notification-timestamp": {
          attributes: {
            color: "#888888",
            "font-size": "11px",
            "margin-top": "2px"
          }
        },
        "#roost-slide-out-desc": {
          attributes: {
            "text-align": "center"
          }
        },
        "#roost-browsernote-wrapper": {
          attributes: {
            height: "80px",
            width: "360px",
            position: "absolute",
            right: "-380px",
            top: "10px",
            background: "#FFF",
            cursor: "pointer",
            "-webkit-box-shadow": "0px 0px 5px 1px rgba(0,0,0,0.3)",
            "-moz-box-shadow": "0px 0px 5px 1px rgba(0,0,0,0.3)",
            "box-shadow": "0px 0px 5px 1px rgba(0,0,0,0.3)",
            "-webkit-transition": "right 250ms linear",
            "-moz-transition": "right 250ms linear",
            "-ms-transition": "right 250ms linear",
            "-o-transition": "right 250ms linear",
            transition: "right 250ms linear"
          }
        },
        "#roost-browsernote-wrapper.roost-browsernote-visible": {
          attributes: {
            right: "10px",
            "-webkit-transition": "right 250ms linear",
            "-moz-transition": "right 250ms linear",
            "-ms-transition": "right 250ms linear",
            "-o-transition": "right 250ms linear",
            transition: "right 250ms linear"
          }
        },
        "#roost-browsernote-wrapper p": {
          attributes: {
            "font-family": "Helvetica Neue",
            margin: "0",
            "line-height": "25px",
            "font-size": "12px",
            "margin-left": "90px"
          }
        },
        "#roost-browsernote-wrapper p#roost-browsernote-title": {
          attributes: {
            "font-size": "14px",
            "margin-top": "5px"
          }
        },
        "#roost-browsernote-wrapper p#roost-browsernote-body": {
          attributes: {
            "letter-spacing": "0.5px",
            "line-height": "110%",
            "max-height": "27px",
            "margin-right": "25px",
            overflow: "hidden"
          }
        },
        "#roost-browsernote-wrapper img": {
          attributes: {
            "float": "left",
            height: "100%",
            width: "auto"
          }
        },
        "#roost-browsernote-close-wrapper": {
          attributes: {
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "5px",
            right: "5px",
            cursor: "pointer",
            "text-align": "center",
            "border-radius": "50%"
          }
        },
        "#roost-browsernote-close": {
          attributes: {
            height: "40%",
            width: "70%"
          }
        },
        "#roost-browsernote-close-wrapper.roost-browsernote-click": {
          attributes: {
            background: "#616161"
          }
        },
        "#roost-browsernote-close-wrapper.roost-browsernote-click svg *": {
          attributes: {
            fill: "#FFF"
          }
        },
        "svg#Icons": {
          attributes: {
            position: "absolute",
            top: "50%",
            right: "50%",
            "margin-top": "-30px",
            "margin-right": "-30px"
          }
        },
        "svg#Icons .st0": {
          attributes: {
            fill: "rgb(226, 83, 81)"
          }
        },
        "svg#Icons .st2": {
          attributes: {
            fill: "#FFF"
          }
        },
        ".roost-bubble-mini svg#Icons": {
          attributes: {
            display: "none"
          }
        },
        "#roost-settings p#roost-email-text": {
          attributes: {
            display: "block",
            "text-align": "center",
            cursor: "default",
            "margin-top": "25px",
            "border-top": "1px solid #CFCFCF"
          }
        },
        "#roost-settings input#roost-email-input": {
          attributes: {
            width: "175px",
            height: "35px",
            "line-height": "35px",
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            "font-size": "13px",
            "padding-left": "8px",
            cursor: "text"
          }
        },
        "#roost-settings button#roost-email-submit": {
          attributes: {
            background: "none",
            outline: "none",
            border: "1px solid #949494",
            "font-size": "13px",
            padding: "8px",
            "border-radius": "3px",
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            color: "#000",
            cursor: "pointer"
          }
        },
        "#roost-settings button#roost-email-submit:hover": {
          attributes: {
            background: "#949494",
            color: "#FFF",
            "-webkit-transition": "right 250ms linear",
            "-moz-transition": "right 250ms linear",
            "-ms-transition": "right 250ms linear",
            "-o-transition": "right 250ms linear",
            transition: "right 250ms linear"
          }
        },
        "#roost-settings p#roost-email-success": {
          attributes: {
            display: "block",
            "text-align": "center",
            "font-size": "14px"
          }
        },
        "#roost-browsernote-overflow": {
          attributes: {
            position: "absolute",
            right: "0",
            top: "0",
            width: "380px",
            height: "100px",
            overflow: "hidden"
          }
        },
        "#roost-settings p#roost-email-failure, #roost-settings p#roost-email-success": {
          attributes: {
            "text-align": "center",
            width: "300px",
            margin: "30px auto 0px auto",
            display: "block",
            "line-height": "120%",
            "margin-top": "30px",
            "font-weight": "600"
          }
        },
        "#roost-subonmain-wrapper": {
          attributes: {
            "background-color": "#D8D8D8",
            padding: "12px 0px 0px 20px",
            height: "45px"
          }
        },
        "#roost-subonmain-box": {
          attributes: {
            "margin-right": "5px",
            "vertical-align": "middle"
          }
        },
        "#roost-subonmain-text": {
          attributes: {
            display: "inline-block",
            "vertical-align": "middle",
            "font-size": "12px",
            margin: "0"
          }
        },
        "#roost-settings.roost-settings-visible ~ #roost-subonmain-wrapper": {
          attributes: {
            display: "none"
          }
        },
        "#roost-empty-bell .st0": {
          attributes: {
            fill: "#CDCDCD"
          }
        },
        "#roost-modal": {
          attributes: {
            display: "none"
          }
        },
        "#roost-wrapper": {
          attributes: {
            position: "fixed",
            top: "0",
            right: "-405px",
            height: "100%",
            width: "405px",
            "font-family": '"Helvetica", "Roboto-Regular", "Arial", sans-serif',
            color: "#666",
            "text-align": "center",
            "background-color": "rgba(255, 255, 255, 0.98)",
            "box-shadow": "-1px 2px 5px rgba(0, 0, 0, 0.4)",
            "-webkit-animation": "roost-slide-in 0.75s forwards",
            "-webkit-animation-delay": "2s",
            "-moz-animation": "roost-slide-in 0.75s forwards",
            "-moz-animation-delay": "2s",
            animation: "roost-slide-in 0.75s forwards",
            "animation-delay": "2s"
          }
        },
        "#roost-wrapper.roost-wrapper-dismissed": {
          attributes: {
            "-webkit-animation": "roost-slide-out 0.5s forwards",
            "-moz-animation": "roost-slide-out 0.5s forwards",
            animation: "roost-slide-out 0.5s forwards"
          }
        },
        "#roost-slide-out-header": {
          attributes: {
            height: "60px",
            position: "relative"
          }
        },
        "#roost-slide-out-header hr": {
          attributes: {
            width: "90px",
            height: "1px",
            position: "absolute",
            "background-color": "#d6d6d6",
            bottom: "0",
            left: "0",
            right: "0",
            margin: "0 auto",
            padding: "0",
            border: "none"
          }
        },
        "#roost-slide-out-headline": {
          attributes: {
            position: "relative",
            top: "25px",
            "font-size": "14px",
            "font-weight": "400",
            "text-align": "center",
            "text-transform": "uppercase",
            width: "calc(100% - 90px)",
            margin: "0 auto"
          }
        },
        "#roost-qualify-dismiss": {
          attributes: {
            position: "absolute",
            right: "18px",
            top: "24px"
          }
        },
        "#roost-slide-out-slug": {
          attributes: {
            "text-align": "center",
            "margin-top": "30px",
            "font-size": "19px",
            "font-weight": "600",
            width: "280px",
            "margin-left": "auto",
            "margin-right": "auto",
            "line-height": "25px"
          }
        },
        "#roost-slide-out-desc": {
          attributes: {
            width: "280px",
            "font-size": "16px",
            "line-height": "22px",
            margin: "20px auto 0 auto",
            color: "#808084"
          }
        },
        "#roost-subscribe-button": {
          attributes: {
            width: "146px",
            height: "45px",
            "line-height": "45px",
            margin: "30px auto 0",
            "text-align": "center",
            color: "#fff",
            "font-size": "15px",
            "font-weight": "400",
            "background-color": "#1982de",
            "border-radius": "10px",
            cursor: "pointer",
            "box-sizing": "content-box",
            padding: "0 15px"
          }
        },
        "#roost-slide-out-device": {
          attributes: {
            width: "333px",
            height: "422px",
            "margin-top": "66px",
            "background-image": "url(https://s3.amazonaws.com/roost/promptkit/laptop.png)",
            "background-size": "cover",
            "background-repeat": "no-repeat"
          }
        },
        "#roost-x": {
          attributes: {
            cursor: "pointer"
          }
        },
        "#roost-x img": {
          attributes: {
            width: "13px"
          }
        },
        "@-webkit-keyframes roost-slide-in": {
          children: {
            "0%": {
              attributes: {
                right: "-405px"
              }
            },
            "95%": {
              attributes: {
                right: "-3px"
              }
            },
            "100%": {
              attributes: {
                right: "-5px"
              }
            }
          }
        },
        "@-moz-keyframes roost-slide-in": {
          children: {
            "0%": {
              attributes: {
                right: "-405px"
              }
            },
            "95%": {
              attributes: {
                right: "-3px"
              }
            },
            "100%": {
              attributes: {
                right: "-5px"
              }
            }
          }
        },
        "@keyframes roost-slide-in": {
          children: {
            "0%": {
              attributes: {
                right: "-405px"
              }
            },
            "95%": {
              attributes: {
                right: "-3px"
              }
            },
            "100%": {
              attributes: {
                right: "-5px"
              }
            }
          }
        },
        "@-webkit-keyframes roost-slide-out": {
          children: {
            "0%": {
              attributes: {
                right: "-5px"
              }
            },
            "5%": {
              attributes: {
                right: "-3px"
              }
            },
            "100%": {
              attributes: {
                right: "-405px"
              }
            }
          }
        },
        "@-moz-keyframes roost-slide-out": {
          children: {
            "0%": {
              attributes: {
                right: "-5px"
              }
            },
            "5%": {
              attributes: {
                right: "-3px"
              }
            },
            "100%": {
              attributes: {
                right: "-405px"
              }
            }
          }
        },
        "@keyframes roost-slide-out": {
          children: {
            "0%": {
              attributes: {
                right: "-5px"
              }
            },
            "5%": {
              attributes: {
                right: "-3px"
              }
            },
            "100%": {
              attributes: {
                right: "-405px"
              }
            }
          }
        },
        "#roost-reset": {
          attributes: {
            "backface-visibility": "visible",
            background: "0",
            "background-clip": "border-box",
            "background-color": "transparent",
            "background-image": "none",
            "background-origin": "padding-box",
            "background-position": "0 0",
            "background-position-x": "0",
            "background-position-y": "0",
            "background-repeat": "repeat",
            "background-size": "auto auto",
            border: "0",
            "border-style": "none",
            "border-width": "medium",
            "border-color": "inherit",
            "border-bottom": "0",
            "border-bottom-color": "inherit",
            "border-bottom-left-radius": "0",
            "border-bottom-right-radius": "0",
            "border-bottom-style": "none",
            "border-bottom-width": "medium",
            "border-collapse": "separate",
            "border-image": "none",
            "border-left": "0",
            "border-left-color": "inherit",
            "border-left-style": "none",
            "border-left-width": "medium",
            "border-radius": "0",
            "border-right": "0",
            "border-right-color": "inherit",
            "border-right-style": "none",
            "border-right-width": "medium",
            "border-spacing": "0",
            "border-top": "0",
            "border-top-color": "inherit",
            "border-top-left-radius": "0",
            "border-top-right-radius": "0",
            "border-top-style": "none",
            "border-top-width": "medium",
            "box-shadow": "none",
            "box-sizing": "content-box",
            "caption-side": "top",
            clear: "none",
            clip: "auto",
            color: "inherit",
            columns: "auto",
            "column-count": "auto",
            "column-fill": "balance",
            "column-gap": "normal",
            "column-rule": "medium none currentColor",
            "column-rule-color": "currentColor",
            "column-rule-style": "none",
            "column-rule-width": "none",
            "column-span": "1",
            "column-width": "auto",
            content: "normal",
            "counter-increment": "none",
            "counter-reset": "none",
            cursor: "auto",
            direction: "ltr",
            display: "inline",
            "empty-cells": "show",
            "float": "none",
            height: "auto",
            hyphens: "none",
            left: "auto",
            "letter-spacing": "normal",
            "line-height": "normal",
            "list-style": "none",
            "list-style-image": "none",
            "list-style-position": "outside",
            "list-style-type": "disc",
            "max-height": "none",
            "max-width": "none",
            "min-height": "0",
            "min-width": "0",
            opacity: "1",
            orphans: "0",
            outline: "0",
            "outline-color": "invert",
            "outline-style": "none",
            "outline-width": "medium",
            overflow: "visible",
            "overflow-x": "visible",
            "overflow-y": "visible",
            "page-break-after": "auto",
            "page-break-before": "auto",
            "page-break-inside": "auto",
            perspective: "none",
            "perspective-origin": "50% 50%",
            position: "static",
            quotes: "'C' 'D' '8' '9'",
            right: "auto",
            "tab-size": "8",
            "table-layout": "auto",
            "text-align": "inherit",
            "text-align-last": "auto",
            "text-decoration": "none",
            "text-decoration-color": "inherit",
            "text-decoration-line": "none",
            "text-decoration-style": "solid",
            "text-indent": "0",
            "text-shadow": "none",
            "text-transform": "none",
            top: "auto",
            transform: "none",
            "transform-style": "flat",
            transition: "none",
            "transition-delay": "0s",
            "transition-duration": "0s",
            "transition-property": "none",
            "transition-timing-function": "ease",
            "unicode-bidi": "normal",
            "vertical-align": "baseline",
            visibility: "visible",
            "white-space": "normal",
            widows: "0",
            "word-spacing": "normal",
            "z-index": "auto"
          }
        },
        "#roost-slide-out-dontsend": {
          attributes: {
            "font-size": "14px",
            "margin-bottom": "40px",
            "font-weight": "600",
            "padding-top": "25px",
            cursor: "pointer",
            color: "#1982de"
          }
        },
        "@media screen and (max-device-width: 640px) and (orientation: portrait)": {
          children: {
            "#roost-wrapper": {
              attributes: {
                width: "86%",
                right: "-86%",
                "box-shadow": "none"
              }
            },
            "#roost-modal": {
              attributes: {
                display: "block",
                opacity: "0",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                "background-color": "rgba(0, 0, 0, 0.5)",
                "-webkit-animation": "roost-fade-in 0.75s forwards",
                "-webkit-animation-delay": "2s",
                "-moz-animation": "roost-fade-in 0.75s forwards",
                "-moz-animation-delay": "2s",
                animation: "roost-fade-in 0.75s forwards",
                "animation-delay": "2s"
              }
            },
            "#roost-modal.roost-wrapper-dismissed": {
              attributes: {
                "-webkit-animation": "roost-fade-out 0.5s forwards",
                "-moz-animation": "roost-fade-out 0.5s forwards",
                animation: "roost-fade-out 0.5s forwards"
              }
            },
            "#roost-slide-out-header": {
              attributes: {
                height: "10%"
              }
            },
            "#roost-slide-out-headline": {
              attributes: {
                top: "25%",
                "font-size": "13px"
              }
            },
            "#roost-qualify-dismiss": {
              attributes: {
                right: "8%",
                top: "27%"
              }
            },
            "#roost-x img": {
              attributes: {
                width: "15px"
              }
            },
            "#roost-slide-out-header hr": {
              attributes: {
                width: "20%",
                height: "4%"
              }
            },
            "#roost-slide-out-slug": {
              attributes: {
                "margin-top": "10%",
                "font-size": "16px"
              }
            },
            "#roost-slide-out-desc": {
              attributes: {
                "margin-top": "1%",
                "font-size": "14px"
              }
            },
            "#roost-subscribe-button": {
              attributes: {
                width: "50%",
                height: "45px",
                margin: "10% auto",
                "font-size": "14px",
                "border-radius": "10px"
              }
            },
            "#roost-slide-out-device": {
              attributes: {
                width: "100%",
                height: "284px",
                "margin-top": "0",
                "background-image": "url(https://s3.amazonaws.com/roost/promptkit/mobile-phone.png"
              }
            },
            "@-webkit-keyframes roost-slide-in": {
              children: {
                "0%": {
                  attributes: {
                    right: "-86%"
                  }
                },
                "95%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-2%"
                  }
                }
              }
            },
            "@-moz-keyframes roost-slide-in": {
              children: {
                "0%": {
                  attributes: {
                    right: "-86%"
                  }
                },
                "95%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-2%"
                  }
                }
              }
            },
            "@keyframes roost-slide-in": {
              children: {
                "0%": {
                  attributes: {
                    right: "-86%"
                  }
                },
                "95%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-2%"
                  }
                }
              }
            },
            "@-webkit-keyframes roost-slide-out": {
              children: {
                "0%": {
                  attributes: {
                    right: "-2%"
                  }
                },
                "5%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-86%"
                  }
                }
              }
            },
            "@-moz-keyframes roost-slide-out": {
              children: {
                "0%": {
                  attributes: {
                    right: "-2%"
                  }
                },
                "5%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-86%"
                  }
                }
              }
            },
            "@keyframes roost-slide-out": {
              children: {
                "0%": {
                  attributes: {
                    right: "-2%"
                  }
                },
                "5%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-86%"
                  }
                }
              }
            },
            "@-webkit-keyframes roost-fade-in": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "0"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "1"
                  }
                }
              }
            },
            "@-moz-keyframes roost-fade-in": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "0"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "1"
                  }
                }
              }
            },
            "@keyframes roost-fade-in": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "0"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "1"
                  }
                }
              }
            },
            "@-webkit-keyframes roost-fade-out": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "1"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "0"
                  }
                }
              }
            },
            "@-moz-keyframes roost-fade-out": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "1"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "0"
                  }
                }
              }
            },
            "@keyframes roost-fade-out": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "1"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "0"
                  }
                }
              }
            }
          },
          attributes: {}
        },
        "@media screen and (max-device-height: 640px) and (orientation: landscape)": {
          children: {
            "#roost-wrapper": {
              attributes: {
                width: "86%",
                right: "-86%",
                "box-shadow": "none",
                "text-align": "left"
              }
            },
            "#roost-modal": {
              attributes: {
                display: "block",
                opacity: "0",
                width: "100%",
                height: "100%",
                position: "fixed",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                "background-color": "rgba(0, 0, 0, 0.5)",
                "-webkit-animation": "roost-fade-in 0.75s forwards",
                "-webkit-animation-delay": "2s",
                "-moz-animation": "roost-fade-in 0.75s forwards",
                "-moz-animation-delay": "2s",
                animation: "roost-fade-in 0.75s forwards",
                "animation-delay": "2s"
              }
            },
            "#roost-modal.roost-wrapper-dismissed": {
              attributes: {
                "-webkit-animation": "roost-fade-out 0.5s forwards",
                "-moz-animation": "roost-fade-out 0.5s forwards",
                animation: "roost-fade-out 0.5s forwards"
              }
            },
            "#roost-slide-out-header": {
              attributes: {
                height: "20%"
              }
            },
            "#roost-slide-out-headline": {
              attributes: {
                top: "28%",
                "font-size": "16px",
                "padding-left": "5%"
              }
            },
            "#roost-qualify-dismiss": {
              attributes: {
                right: "5%",
                top: "24%"
              }
            },
            "#roost-x img": {
              attributes: {
                width: "15px"
              }
            },
            "#roost-slide-out-header hr": {
              attributes: {
                width: "90%",
                height: "2%"
              }
            },
            "#roost-slide-out-banner": {
              attributes: {
                "text-align": "left",
                "padding-left": "5%"
              }
            },
            "#roost-slide-out-slug": {
              attributes: {
                "margin-top": "3%",
                "font-size": "19px"
              }
            },
            "#roost-slide-out-desc": {
              attributes: {
                "margin-top": "2%",
                "margin-bottom": "4%",
                "font-size": "15px"
              }
            },
            "#roost-subscribe-button": {
              attributes: {
                "line-height": "19px",
                width: "33%",
                height: "33px",
                margin: "0",
                "padding-top": "16px",
                "font-size": "14px",
                "border-radius": "10px",
                "text-align": "center",
                position: "relative",
                "z-index": "20"
              }
            },
            "#roost-slide-out-device": {
              width: "86%",
              height: "142%",
              position: "absolute",
              right: "-2%",
              bottom: "-82%",
              "background-size": "contain",
              "background-image": "url(https://s3.amazonaws.com/roost/promptkit/mobile-phone.png",
              "z-index": "10"
            },
            "@-webkit-keyframes roost-slide-in": {
              children: {
                "0%": {
                  attributes: {
                    right: "-86%"
                  }
                },
                "95%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-2%"
                  }
                }
              }
            },
            "@-moz-keyframes roost-slide-in": {
              children: {
                "0%": {
                  attributes: {
                    right: "-86%"
                  }
                },
                "95%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-2%"
                  }
                }
              }
            },
            "@keyframes roost-slide-in": {
              children: {
                "0%": {
                  attributes: {
                    right: "-86%"
                  }
                },
                "95%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-2%"
                  }
                }
              }
            },
            "@-webkit-keyframes roost-slide-out": {
              children: {
                "0%": {
                  attributes: {
                    right: "-2%"
                  }
                },
                "5%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-86%"
                  }
                }
              }
            },
            "@-moz-keyframes roost-slide-out": {
              children: {
                "0%": {
                  attributes: {
                    right: "-2%"
                  }
                },
                "5%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-86%"
                  }
                }
              }
            },
            "@keyframes roost-slide-out": {
              children: {
                "0%": {
                  attributes: {
                    right: "-2%"
                  }
                },
                "5%": {
                  attributes: {
                    right: "-1%"
                  }
                },
                "100%": {
                  attributes: {
                    right: "-86%"
                  }
                }
              }
            },
            "@-webkit-keyframes roost-fade-in": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "0"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "1"
                  }
                }
              }
            },
            "@-moz-keyframes roost-fade-in": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "0"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "1"
                  }
                }
              }
            },
            "@keyframes roost-fade-in": {
              children: {
                "0%": {
                  attributes: {
                    opacity: "0"
                  }
                },
                "100%": {
                  attributes: {
                    opacity: "1"
                  }
                }
              }
            },
            "@-webkit-keyframes roost-fade-out": {
              children: {
                "0%": {
                  opacity: "1"
                },
                "100%": {
                  opacity: "0"
                }
              }
            },
            "@-moz-keyframes roost-fade-out": {
              children: {
                "0%": {
                  opacity: "1"
                },
                "100%": {
                  opacity: "0"
                }
              }
            },
            "@keyframes roost-fade-out": {
              children: {
                "0%": {
                  opacity: "1"
                },
                "100%": {
                  opacity: "0"
                }
              }
            }
          },
          attributes: {}
        },
        "@media (max-width: 770px)": {
          children: {
            "div#goroostcom-bell": {
              attributes: {
                right: "15px",
                bottom: "15px",
                width: "50px",
                height: "50px"
              }
            },
            "#roost-bell": {
              width: "71%",
              height: "71%",
              margin: "14% 0 0 14%"
            },
            "#roost-bubble-count": {
              attributes: {
                right: "15%",
                width: "35%",
                height: "35%"
              }
            },
            "#goroostcom-notifications.roost-notes-visible": {
              attributes: {
                width: "90%"
              }
            },
            "#roost-settings": {
              attributes: {
                width: "100%",
                "text-align": "center"
              }
            },
            "#roost-settings input": {
              attributes: {
                margin: "0"
              }
            },
            "#roost-note-dismiss": {
              attributes: {
                display: "none"
              }
            },
            "#roost-data li .roost-note-share": {
              attributes: {
                opacity: "1"
              }
            },
            "#goroostcom-notifications #roost-bellprompt": {
              attributes: {
                "padding-left": "130px",
                overflow: "hidden"
              }
            },
            "#goroostcom-notifications #roost-bellprompt-image": {
              attributes: {
                left: "-50px"
              }
            }
          },
          attributes: {}
        }
      },
      attributes: {}
    }
  "interactive" === document.readyState || "complete" === document.readyState ? C() : document.addEventListener ? window.addEventListener("load", C) : document.attachEvent("onload", C)
}(window)