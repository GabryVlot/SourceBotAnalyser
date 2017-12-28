/*!https://cache11.stubhubstatic.com/cms/content-common/codelicense/codelicense.txt*/

//! license : MIT

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

function getGlobal() {
  return function() {
    return this.dust
  }.call(null)
}

function toObject(e) {
  if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e)
}

function shouldUseNative() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
    for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
    if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
        return t[e]
      }).join("")) return !1;
    var o = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(e) {
      o[e] = e
    }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
  } catch (e) {
    return !1
  }
}
var requirejs, require, define;
! function(global, setTimeout) {
  function commentReplace(e, t) {
    return t || ""
  }

  function isFunction(e) {
    return "[object Function]" === ostring.call(e)
  }

  function isArray(e) {
    return "[object Array]" === ostring.call(e)
  }

  function each(e, t) {
    if (e) {
      var n;
      for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
    }
  }

  function eachReverse(e, t) {
    if (e) {
      var n;
      for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
    }
  }

  function hasProp(e, t) {
    return hasOwn.call(e, t)
  }

  function getOwn(e, t) {
    return hasProp(e, t) && e[t]
  }

  function eachProp(e, t) {
    var n;
    for (n in e)
      if (hasProp(e, n) && t(e[n], n)) break
  }

  function mixin(e, t, n, o) {
    return t && eachProp(t, function(t, i) {
      !n && hasProp(e, i) || (!o || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[i] = t : (e[i] || (e[i] = {}), mixin(e[i], t, n, o)))
    }), e
  }

  function bind(e, t) {
    return function() {
      return t.apply(e, arguments)
    }
  }

  function scripts() {
    return document.getElementsByTagName("script")
  }

  function defaultOnError(e) {
    throw e
  }

  function getGlobal(e) {
    if (!e) return e;
    var t = global;
    return each(e.split("."), function(e) {
      t = t[e]
    }), t
  }

  function makeError(e, t, n, o) {
    var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
    return i.requireType = e, i.requireModules = o, n && (i.originalError = n), i
  }

  function newContext(e) {
    function t(e) {
      var t, n;
      for (t = 0; t < e.length; t++)
        if ("." === (n = e[t])) e.splice(t, 1), t -= 1;
        else if (".." === n) {
        if (0 === t || 1 === t && ".." === e[2] || ".." === e[t - 1]) continue;
        t > 0 && (e.splice(t - 1, 2), t -= 2)
      }
    }

    function n(e, n, o) {
      var i, r, c, a, s, u, p, l, d, M, f, h = n && n.split("/"),
        b = L.map,
        A = b && b["*"];
      if (e && (e = e.split("/"), u = e.length - 1, L.nodeIdCompat && jsSuffixRegExp.test(e[u]) && (e[u] = e[u].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && h && (f = h.slice(0, h.length - 1), e = f.concat(e)), t(e), e = e.join("/")), o && b && (h || A)) {
        r = e.split("/");
        e: for (c = r.length; c > 0; c -= 1) {
          if (s = r.slice(0, c).join("/"), h)
            for (a = h.length; a > 0; a -= 1)
              if ((i = getOwn(b, h.slice(0, a).join("/"))) && (i = getOwn(i, s))) {
                p = i, l = c;
                break e
              }!d && A && getOwn(A, s) && (d = getOwn(A, s), M = c)
        }!p && d && (p = d, l = M), p && (r.splice(0, l, p), e = r.join("/"))
      }
      return getOwn(L.pkgs, e) || e
    }

    function o(e) {
      isBrowser && each(scripts(), function(t) {
        if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === g.contextName) return t.parentNode.removeChild(t), !0
      })
    }

    function i(e) {
      var t = getOwn(L.paths, e);
      if (t && isArray(t) && t.length > 1) return t.shift(), g.require.undef(e), g.makeRequire(null, {
        skipMap: !0
      })([e]), !0
    }

    function r(e) {
      var t, n = e ? e.indexOf("!") : -1;
      return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
    }

    function c(e, t, o, i) {
      var c, a, s, u, p = null,
        l = t ? t.name : null,
        d = e,
        M = !0,
        f = "";
      return e || (M = !1, e = "_@r" + (B += 1)), u = r(e), p = u[0], e = u[1], p && (p = n(p, l, i), a = getOwn(_, p)), e && (p ? f = a && a.normalize ? a.normalize(e, function(e) {
        return n(e, l, i)
      }) : -1 === e.indexOf("!") ? n(e, l, i) : e : (f = n(e, l, i), u = r(f), p = u[0], f = u[1], o = !0, c = g.nameToUrl(f))), s = !p || a || o ? "" : "_unnormalized" + (X += 1), {
        prefix: p,
        name: f,
        parentMap: t,
        unnormalized: !!s,
        url: c,
        originalName: d,
        isDefine: M,
        id: (p ? p + "!" + f : f) + s
      }
    }

    function a(e) {
      var t = e.id,
        n = getOwn(O, t);
      return n || (n = O[t] = new g.Module(e)), n
    }

    function s(e, t, n) {
      var o = e.id,
        i = getOwn(O, o);
      !hasProp(_, o) || i && !i.defineEmitComplete ? (i = a(e), i.error && "error" === t ? n(i.error) : i.on(t, n)) : "defined" === t && n(_[o])
    }

    function u(e, t) {
      var n = e.requireModules,
        o = !1;
      t ? t(e) : (each(n, function(t) {
        var n = getOwn(O, t);
        n && (n.error = e, n.events.error && (o = !0, n.emit("error", e)))
      }), o || req.onError(e))
    }

    function p() {
      globalDefQueue.length && (each(globalDefQueue, function(e) {
        var t = e[0];
        "string" == typeof t && (g.defQueueMap[t] = !0), q.push(e)
      }), globalDefQueue = [])
    }

    function l(e) {
      delete O[e], delete T[e]
    }

    function d(e, t, n) {
      var o = e.map.id;
      e.error ? e.emit("error", e.error) : (t[o] = !0, each(e.depMaps, function(o, i) {
        var r = o.id,
          c = getOwn(O, r);
        !c || e.depMatched[i] || n[r] || (getOwn(t, r) ? (e.defineDep(i, _[r]), e.check()) : d(c, t, n))
      }), n[o] = !0)
    }

    function M() {
      var e, t, n = 1e3 * L.waitSeconds,
        r = n && g.startTime + n < (new Date).getTime(),
        c = [],
        a = [],
        s = !1,
        p = !0;
      if (!z) {
        if (z = !0, eachProp(T, function(e) {
            var n = e.map,
              u = n.id;
            if (e.enabled && (n.isDefine || a.push(e), !e.error))
              if (!e.inited && r) i(u) ? (t = !0, s = !0) : (c.push(u), o(u));
              else if (!e.inited && e.fetched && n.isDefine && (s = !0, !n.prefix)) return p = !1
          }), r && c.length) return e = makeError("timeout", "Load timeout for modules: " + c, null, c), e.contextName = g.contextName, u(e);
        p && each(a, function(e) {
          d(e, {}, {})
        }), r && !t || !s || !isBrowser && !isWebWorker || v || (v = setTimeout(function() {
          v = 0, M()
        }, 50)), z = !1
      }
    }

    function f(e) {
      hasProp(_, e[0]) || a(c(e[0], null, !0)).init(e[1], e[2])
    }

    function h(e, t, n, o) {
      e.detachEvent && !isOpera ? o && e.detachEvent(o, t) : e.removeEventListener(n, t, !1)
    }

    function b(e) {
      var t = e.currentTarget || e.srcElement;
      return h(t, g.onScriptLoad, "load", "onreadystatechange"), h(t, g.onScriptError, "error"), {
        node: t,
        id: t && t.getAttribute("data-requiremodule")
      }
    }

    function A() {
      var e;
      for (p(); q.length;) {
        if (e = q.shift(), null === e[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
        f(e)
      }
      g.defQueueMap = {}
    }
    var z, m, g, y, v, L = {
        waitSeconds: 7,
        baseUrl: "./",
        paths: {},
        bundles: {},
        pkgs: {},
        shim: {},
        config: {}
      },
      O = {},
      T = {},
      N = {},
      q = [],
      _ = {},
      W = {},
      S = {},
      B = 1,
      X = 1;
    return y = {
      require: function(e) {
        return e.require ? e.require : e.require = g.makeRequire(e.map)
      },
      exports: function(e) {
        if (e.usingExports = !0, e.map.isDefine) return e.exports ? _[e.map.id] = e.exports : e.exports = _[e.map.id] = {}
      },
      module: function(e) {
        return e.module ? e.module : e.module = {
          id: e.map.id,
          uri: e.map.url,
          config: function() {
            return getOwn(L.config, e.map.id) || {}
          },
          exports: e.exports || (e.exports = {})
        }
      }
    }, m = function(e) {
      this.events = getOwn(N, e.id) || {}, this.map = e, this.shim = getOwn(L.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
    }, m.prototype = {
      init: function(e, t, n, o) {
        o = o || {}, this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
          this.emit("error", e)
        })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = o.ignore, o.enabled || this.enabled ? this.enable() : this.check())
      },
      defineDep: function(e, t) {
        this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
      },
      fetch: function() {
        if (!this.fetched) {
          this.fetched = !0, g.startTime = (new Date).getTime();
          var e = this.map;
          return this.shim ? void g.makeRequire(this.map, {
            enableBuildCallback: !0
          })(this.shim.deps || [], bind(this, function() {
            return e.prefix ? this.callPlugin() : this.load()
          })) : e.prefix ? this.callPlugin() : this.load()
        }
      },
      load: function() {
        var e = this.map.url;
        W[e] || (W[e] = !0, g.load(this.map.id, e))
      },
      check: function() {
        if (this.enabled && !this.enabling) {
          var e, t, n = this.map.id,
            o = this.depExports,
            i = this.exports,
            r = this.factory;
          if (this.inited) {
            if (this.error) this.emit("error", this.error);
            else if (!this.defining) {
              if (this.defining = !0, this.depCount < 1 && !this.defined) {
                if (isFunction(r)) {
                  if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                    i = g.execCb(n, r, o, i)
                  } catch (t) {
                    e = t
                  } else i = g.execCb(n, r, o, i);
                  if (this.map.isDefine && void 0 === i && (t = this.module, t ? i = t.exports : this.usingExports && (i = this.exports)), e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", u(this.error = e)
                } else i = r;
                if (this.exports = i, this.map.isDefine && !this.ignore && (_[n] = i, req.onResourceLoad)) {
                  var c = [];
                  each(this.depMaps, function(e) {
                    c.push(e.normalizedMap || e)
                  }), req.onResourceLoad(g, this.map, c)
                }
                l(n), this.defined = !0
              }
              this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
            }
          } else hasProp(g.defQueueMap, n) || this.fetch()
        }
      },
      callPlugin: function() {
        var e = this.map,
          t = e.id,
          o = c(e.prefix);
        this.depMaps.push(o), s(o, "defined", bind(this, function(o) {
          var i, r, p, d = getOwn(S, this.map.id),
            M = this.map.name,
            f = this.map.parentMap ? this.map.parentMap.name : null,
            h = g.makeRequire(e.parentMap, {
              enableBuildCallback: !0
            });
          return this.map.unnormalized ? (o.normalize && (M = o.normalize(M, function(e) {
            return n(e, f, !0)
          }) || ""), r = c(e.prefix + "!" + M, this.map.parentMap), s(r, "defined", bind(this, function(e) {
            this.map.normalizedMap = r, this.init([], function() {
              return e
            }, null, {
              enabled: !0,
              ignore: !0
            })
          })), void((p = getOwn(O, r.id)) && (this.depMaps.push(r), this.events.error && p.on("error", bind(this, function(e) {
            this.emit("error", e)
          })), p.enable()))) : d ? (this.map.url = g.nameToUrl(d), void this.load()) : (i = bind(this, function(e) {
            this.init([], function() {
              return e
            }, null, {
              enabled: !0
            })
          }), i.error = bind(this, function(e) {
            this.inited = !0, this.error = e, e.requireModules = [t], eachProp(O, function(e) {
              0 === e.map.id.indexOf(t + "_unnormalized") && l(e.map.id)
            }), u(e)
          }), i.fromText = bind(this, function(n, o) {
            var r = e.name,
              s = c(r),
              p = useInteractive;
            o && (n = o), p && (useInteractive = !1), a(s), hasProp(L.config, t) && (L.config[r] = L.config[t]);
            try {
              req.exec(n)
            } catch (e) {
              return u(makeError("fromtexteval", "fromText eval for " + t + " failed: " + e, e, [t]))
            }
            p && (useInteractive = !0), this.depMaps.push(s), g.completeLoad(r), h([r], i)
          }), void o.load(e.name, h, i, L))
        })), g.enable(o, this), this.pluginMaps[o.id] = o
      },
      enable: function() {
        T[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
          var n, o, i;
          if ("string" == typeof e) {
            if (e = c(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, i = getOwn(y, e.id)) return void(this.depExports[t] = i(this));
            this.depCount += 1, s(e, "defined", bind(this, function(e) {
              this.undefed || (this.defineDep(t, e), this.check())
            })), this.errback ? s(e, "error", bind(this, this.errback)) : this.events.error && s(e, "error", bind(this, function(e) {
              this.emit("error", e)
            }))
          }
          n = e.id, o = O[n], hasProp(y, n) || !o || o.enabled || g.enable(e, this)
        })), eachProp(this.pluginMaps, bind(this, function(e) {
          var t = getOwn(O, e.id);
          t && !t.enabled && g.enable(e, this)
        })), this.enabling = !1, this.check()
      },
      on: function(e, t) {
        var n = this.events[e];
        n || (n = this.events[e] = []), n.push(t)
      },
      emit: function(e, t) {
        each(this.events[e], function(e) {
          e(t)
        }), "error" === e && delete this.events[e]
      }
    }, g = {
      config: L,
      contextName: e,
      registry: O,
      defined: _,
      urlFetched: W,
      defQueue: q,
      defQueueMap: {},
      Module: m,
      makeModuleMap: c,
      nextTick: req.nextTick,
      onError: u,
      configure: function(e) {
        if (e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/"), "string" == typeof e.urlArgs) {
          var t = e.urlArgs;
          e.urlArgs = function(e, n) {
            return (-1 === n.indexOf("?") ? "?" : "&") + t
          }
        }
        var n = L.shim,
          o = {
            paths: !0,
            bundles: !0,
            config: !0,
            map: !0
          };
        eachProp(e, function(e, t) {
          o[t] ? (L[t] || (L[t] = {}), mixin(L[t], e, !0, !0)) : L[t] = e
        }), e.bundles && eachProp(e.bundles, function(e, t) {
          each(e, function(e) {
            e !== t && (S[e] = t)
          })
        }), e.shim && (eachProp(e.shim, function(e, t) {
          isArray(e) && (e = {
            deps: e
          }), !e.exports && !e.init || e.exportsFn || (e.exportsFn = g.makeShimExports(e)), n[t] = e
        }), L.shim = n), e.packages && each(e.packages, function(e) {
          var t, n;
          e = "string" == typeof e ? {
            name: e
          } : e, n = e.name, t = e.location, t && (L.paths[n] = e.location), L.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
        }), eachProp(O, function(e, t) {
          e.inited || e.map.unnormalized || (e.map = c(t, null, !0))
        }), (e.deps || e.callback) && g.require(e.deps || [], e.callback)
      },
      makeShimExports: function(e) {
        function t() {
          var t;
          return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
        }
        return t
      },
      makeRequire: function(t, i) {
        function r(n, o, s) {
          var p, l, d;
          return i.enableBuildCallback && o && isFunction(o) && (o.__requireJsBuild = !0), "string" == typeof n ? isFunction(o) ? u(makeError("requireargs", "Invalid require call"), s) : t && hasProp(y, n) ? y[n](O[t.id]) : req.get ? req.get(g, n, t, r) : (l = c(n, t, !1, !0), p = l.id, hasProp(_, p) ? _[p] : u(makeError("notloaded", 'Module name "' + p + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (A(), g.nextTick(function() {
            A(), d = a(c(null, t)), d.skipMap = i.skipMap, d.init(n, o, s, {
              enabled: !0
            }), M()
          }), r)
        }
        return i = i || {}, mixin(r, {
          isBrowser: isBrowser,
          toUrl: function(e) {
            var o, i = e.lastIndexOf("."),
              r = e.split("/")[0],
              c = "." === r || ".." === r;
            return -1 !== i && (!c || i > 1) && (o = e.substring(i, e.length), e = e.substring(0, i)), g.nameToUrl(n(e, t && t.id, !0), o, !0)
          },
          defined: function(e) {
            return hasProp(_, c(e, t, !1, !0).id)
          },
          specified: function(e) {
            return e = c(e, t, !1, !0).id, hasProp(_, e) || hasProp(O, e)
          }
        }), t || (r.undef = function(e) {
          p();
          var n = c(e, t, !0),
            i = getOwn(O, e);
          i.undefed = !0, o(e), delete _[e], delete W[n.url], delete N[e], eachReverse(q, function(t, n) {
            t[0] === e && q.splice(n, 1)
          }), delete g.defQueueMap[e], i && (i.events.defined && (N[e] = i.events), l(e))
        }), r
      },
      enable: function(e) {
        getOwn(O, e.id) && a(e).enable()
      },
      completeLoad: function(e) {
        var t, n, o, r = getOwn(L.shim, e) || {},
          c = r.exports;
        for (p(); q.length;) {
          if (n = q.shift(), null === n[0]) {
            if (n[0] = e, t) break;
            t = !0
          } else n[0] === e && (t = !0);
          f(n)
        }
        if (g.defQueueMap = {}, o = getOwn(O, e), !t && !hasProp(_, e) && o && !o.inited) {
          if (!(!L.enforceDefine || c && getGlobal(c))) return i(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
          f([e, r.deps || [], r.exportsFn])
        }
        M()
      },
      nameToUrl: function(e, t, n) {
        var o, i, r, c, a, s, u, p = getOwn(L.pkgs, e);
        if (p && (e = p), u = getOwn(S, e)) return g.nameToUrl(u, t, n);
        if (req.jsExtRegExp.test(e)) a = e + (t || "");
        else {
          for (o = L.paths, i = e.split("/"), r = i.length; r > 0; r -= 1)
            if (c = i.slice(0, r).join("/"), s = getOwn(o, c)) {
              isArray(s) && (s = s[0]), i.splice(0, r, s);
              break
            }
          a = i.join("/"), a += t || (/^data\:|^blob\:|\?/.test(a) || n ? "" : ".js"), a = ("/" === a.charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "" : L.baseUrl) + a
        }
        return L.urlArgs && !/^blob\:/.test(a) ? a + L.urlArgs(e, a) : a
      },
      load: function(e, t) {
        req.load(g, e, t)
      },
      execCb: function(e, t, n, o) {
        return t.apply(o, n)
      },
      onScriptLoad: function(e) {
        if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
          interactiveScript = null;
          var t = b(e);
          g.completeLoad(t.id)
        }
      },
      onScriptError: function(e) {
        var t = b(e);
        if (!i(t.id)) {
          var n = [];
          return eachProp(O, function(e, o) {
            0 !== o.indexOf("_@r") && each(e.depMaps, function(e) {
              if (e.id === t.id) return n.push(o), !0
            })
          }), u(makeError("scripterror", 'Script error for "' + t.id + (n.length ? '", needed by: ' + n.join(", ") : '"'), e, [t.id]))
        }
      }
    }, g.require = g.makeRequire(), g
  }

  function getInteractiveScript() {
    return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(e) {
      if ("interactive" === e.readyState) return interactiveScript = e
    }), interactiveScript)
  }
  var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.3.2",
    commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
    defContextName = "_",
    isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
  if (void 0 === define) {
    if (void 0 !== requirejs) {
      if (isFunction(requirejs)) return;
      cfg = requirejs, requirejs = void 0
    }
    void 0 === require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(e, t, n, o) {
      var i, r, c = defContextName;
      return isArray(e) || "string" == typeof e || (r = e, isArray(t) ? (e = t, t = n, n = o) : e = []), r && r.context && (c = r.context), i = getOwn(contexts, c), i || (i = contexts[c] = req.s.newContext(c)), r && i.configure(r), i.require(e, t, n)
    }, req.config = function(e) {
      return req(e)
    }, req.nextTick = void 0 !== setTimeout ? function(e) {
      setTimeout(e, 4)
    } : function(e) {
      e()
    }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
      contexts: contexts,
      newContext: newContext
    }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
      req[e] = function() {
        var t = contexts[defContextName];
        return t.require[e].apply(t, arguments)
      }
    }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], (baseElement = document.getElementsByTagName("base")[0]) && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
      var o = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
      return o.type = e.scriptType || "text/javascript", o.charset = "utf-8", o.async = !0, o
    }, req.load = function(e, t, n) {
      var o, i = e && e.config || {};
      if (isBrowser) return o = req.createNode(i, t, n), o.setAttribute("data-requirecontext", e.contextName), o.setAttribute("data-requiremodule", t), !o.attachEvent || o.attachEvent.toString && o.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (o.addEventListener("load", e.onScriptLoad, !1), o.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, o.attachEvent("onreadystatechange", e.onScriptLoad)), o.src = n, i.onNodeCreated && i.onNodeCreated(o, i, t, n), currentlyAddingScript = o, baseElement ? head.insertBefore(o, baseElement) : head.appendChild(o), currentlyAddingScript = null, o;
      if (isWebWorker) try {
        setTimeout(function() {}, 0), importScripts(n), e.completeLoad(t)
      } catch (o) {
        e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, o, [t]))
      }
    }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
      if (head || (head = e.parentNode), dataMain = e.getAttribute("data-main")) return mainScript = dataMain, cfg.baseUrl || -1 !== mainScript.indexOf("!") || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
    }), define = function(e, t, n) {
      var o, i;
      "string" != typeof e && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, commentReplace).replace(cjsRequireRegExp, function(e, n) {
        t.push(n)
      }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (o = currentlyAddingScript || getInteractiveScript()) && (e || (e = o.getAttribute("data-requiremodule")), i = contexts[o.getAttribute("data-requirecontext")]), i ? (i.defQueue.push([e, t, n]), i.defQueueMap[e] = !0) : globalDefQueue.push([e, t, n])
    }, define.amd = {
      jQuery: !0
    }, req.exec = function(text) {
      return eval(text)
    }, req(cfg)
  }
}(this, "undefined" == typeof setTimeout ? void 0 : setTimeout), define("require_js", function() {}),
  function() {
    function e(e) {
      function t(t, n, o, i, r, c) {
        for (; r >= 0 && c > r; r += e) {
          var a = i ? i[r] : r;
          o = n(o, t[a], a, t)
        }
        return o
      }
      return function(n, o, i, r) {
        o = m(o, r, 4);
        var c = !N(n) && z.keys(n),
          a = (c || n).length,
          s = e > 0 ? 0 : a - 1;
        return arguments.length < 3 && (i = n[c ? c[s] : s], s += e), t(n, o, i, c, s, a)
      }
    }

    function t(e) {
      return function(t, n, o) {
        n = g(n, o);
        for (var i = T(t), r = e > 0 ? 0 : i - 1; r >= 0 && i > r; r += e)
          if (n(t[r], r, t)) return r;
        return -1
      }
    }

    function n(e, t, n) {
      return function(o, i, r) {
        var c = 0,
          a = T(o);
        if ("number" == typeof r) e > 0 ? c = r >= 0 ? r : Math.max(r + a, c) : a = r >= 0 ? Math.min(r + 1, a) : r + a + 1;
        else if (n && r && a) return r = n(o, i), o[r] === i ? r : -1;
        if (i !== i) return r = t(p.call(o, c, a), z.isNaN), r >= 0 ? r + c : -1;
        for (r = e > 0 ? c : a - 1; r >= 0 && a > r; r += e)
          if (o[r] === i) return r;
        return -1
      }
    }

    function o(e, t) {
      var n = B.length,
        o = e.constructor,
        i = z.isFunction(o) && o.prototype || a,
        r = "constructor";
      for (z.has(e, r) && !z.contains(t, r) && t.push(r); n--;)(r = B[n]) in e && e[r] !== i[r] && !z.contains(t, r) && t.push(r)
    }
    var i = this,
      r = i._,
      c = Array.prototype,
      a = Object.prototype,
      s = Function.prototype,
      u = c.push,
      p = c.slice,
      l = a.toString,
      d = a.hasOwnProperty,
      M = Array.isArray,
      f = Object.keys,
      h = s.bind,
      b = Object.create,
      A = function() {},
      z = function(e) {
        return e instanceof z ? e : this instanceof z ? void(this._wrapped = e) : new z(e)
      };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = z), exports._ = z) : i._ = z, z.VERSION = "1.8.3";
    var m = function(e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
              return e.call(t, n)
            };
          case 2:
            return function(n, o) {
              return e.call(t, n, o)
            };
          case 3:
            return function(n, o, i) {
              return e.call(t, n, o, i)
            };
          case 4:
            return function(n, o, i, r) {
              return e.call(t, n, o, i, r)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      },
      g = function(e, t, n) {
        return null == e ? z.identity : z.isFunction(e) ? m(e, t, n) : z.isObject(e) ? z.matcher(e) : z.property(e)
      };
    z.iteratee = function(e, t) {
      return g(e, t, 1 / 0)
    };
    var y = function(e, t) {
        return function(n) {
          var o = arguments.length;
          if (2 > o || null == n) return n;
          for (var i = 1; o > i; i++)
            for (var r = arguments[i], c = e(r), a = c.length, s = 0; a > s; s++) {
              var u = c[s];
              t && void 0 !== n[u] || (n[u] = r[u])
            }
          return n
        }
      },
      v = function(e) {
        if (!z.isObject(e)) return {};
        if (b) return b(e);
        A.prototype = e;
        var t = new A;
        return A.prototype = null, t
      },
      L = function(e) {
        return function(t) {
          return null == t ? void 0 : t[e]
        }
      },
      O = Math.pow(2, 53) - 1,
      T = L("length"),
      N = function(e) {
        var t = T(e);
        return "number" == typeof t && t >= 0 && O >= t
      };
    z.each = z.forEach = function(e, t, n) {
      t = m(t, n);
      var o, i;
      if (N(e))
        for (o = 0, i = e.length; i > o; o++) t(e[o], o, e);
      else {
        var r = z.keys(e);
        for (o = 0, i = r.length; i > o; o++) t(e[r[o]], r[o], e)
      }
      return e
    }, z.map = z.collect = function(e, t, n) {
      t = g(t, n);
      for (var o = !N(e) && z.keys(e), i = (o || e).length, r = Array(i), c = 0; i > c; c++) {
        var a = o ? o[c] : c;
        r[c] = t(e[a], a, e)
      }
      return r
    }, z.reduce = z.foldl = z.inject = e(1), z.reduceRight = z.foldr = e(-1), z.find = z.detect = function(e, t, n) {
      var o;
      return o = N(e) ? z.findIndex(e, t, n) : z.findKey(e, t, n), void 0 !== o && -1 !== o ? e[o] : void 0
    }, z.filter = z.select = function(e, t, n) {
      var o = [];
      return t = g(t, n), z.each(e, function(e, n, i) {
        t(e, n, i) && o.push(e)
      }), o
    }, z.reject = function(e, t, n) {
      return z.filter(e, z.negate(g(t)), n)
    }, z.every = z.all = function(e, t, n) {
      t = g(t, n);
      for (var o = !N(e) && z.keys(e), i = (o || e).length, r = 0; i > r; r++) {
        var c = o ? o[r] : r;
        if (!t(e[c], c, e)) return !1
      }
      return !0
    }, z.some = z.any = function(e, t, n) {
      t = g(t, n);
      for (var o = !N(e) && z.keys(e), i = (o || e).length, r = 0; i > r; r++) {
        var c = o ? o[r] : r;
        if (t(e[c], c, e)) return !0
      }
      return !1
    }, z.contains = z.includes = z.include = function(e, t, n, o) {
      return N(e) || (e = z.values(e)), ("number" != typeof n || o) && (n = 0), z.indexOf(e, t, n) >= 0
    }, z.invoke = function(e, t) {
      var n = p.call(arguments, 2),
        o = z.isFunction(t);
      return z.map(e, function(e) {
        var i = o ? t : e[t];
        return null == i ? i : i.apply(e, n)
      })
    }, z.pluck = function(e, t) {
      return z.map(e, z.property(t))
    }, z.where = function(e, t) {
      return z.filter(e, z.matcher(t))
    }, z.findWhere = function(e, t) {
      return z.find(e, z.matcher(t))
    }, z.max = function(e, t, n) {
      var o, i, r = -1 / 0,
        c = -1 / 0;
      if (null == t && null != e) {
        e = N(e) ? e : z.values(e);
        for (var a = 0, s = e.length; s > a; a++)(o = e[a]) > r && (r = o)
      } else t = g(t, n), z.each(e, function(e, n, o) {
        ((i = t(e, n, o)) > c || i === -1 / 0 && r === -1 / 0) && (r = e, c = i)
      });
      return r
    }, z.min = function(e, t, n) {
      var o, i, r = 1 / 0,
        c = 1 / 0;
      if (null == t && null != e) {
        e = N(e) ? e : z.values(e);
        for (var a = 0, s = e.length; s > a; a++) o = e[a], r > o && (r = o)
      } else t = g(t, n), z.each(e, function(e, n, o) {
        i = t(e, n, o), (c > i || 1 / 0 === i && 1 / 0 === r) && (r = e, c = i)
      });
      return r
    }, z.shuffle = function(e) {
      for (var t, n = N(e) ? e : z.values(e), o = n.length, i = Array(o), r = 0; o > r; r++) t = z.random(0, r), t !== r && (i[r] = i[t]), i[t] = n[r];
      return i
    }, z.sample = function(e, t, n) {
      return null == t || n ? (N(e) || (e = z.values(e)), e[z.random(e.length - 1)]) : z.shuffle(e).slice(0, Math.max(0, t))
    }, z.sortBy = function(e, t, n) {
      return t = g(t, n), z.pluck(z.map(e, function(e, n, o) {
        return {
          value: e,
          index: n,
          criteria: t(e, n, o)
        }
      }).sort(function(e, t) {
        var n = e.criteria,
          o = t.criteria;
        if (n !== o) {
          if (n > o || void 0 === n) return 1;
          if (o > n || void 0 === o) return -1
        }
        return e.index - t.index
      }), "value")
    };
    var q = function(e) {
      return function(t, n, o) {
        var i = {};
        return n = g(n, o), z.each(t, function(o, r) {
          var c = n(o, r, t);
          e(i, o, c)
        }), i
      }
    };
    z.groupBy = q(function(e, t, n) {
      z.has(e, n) ? e[n].push(t) : e[n] = [t]
    }), z.indexBy = q(function(e, t, n) {
      e[n] = t
    }), z.countBy = q(function(e, t, n) {
      z.has(e, n) ? e[n]++ : e[n] = 1
    }), z.toArray = function(e) {
      return e ? z.isArray(e) ? p.call(e) : N(e) ? z.map(e, z.identity) : z.values(e) : []
    }, z.size = function(e) {
      return null == e ? 0 : N(e) ? e.length : z.keys(e).length
    }, z.partition = function(e, t, n) {
      t = g(t, n);
      var o = [],
        i = [];
      return z.each(e, function(e, n, r) {
        (t(e, n, r) ? o : i).push(e)
      }), [o, i]
    }, z.first = z.head = z.take = function(e, t, n) {
      return null == e ? void 0 : null == t || n ? e[0] : z.initial(e, e.length - t)
    }, z.initial = function(e, t, n) {
      return p.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
    }, z.last = function(e, t, n) {
      return null == e ? void 0 : null == t || n ? e[e.length - 1] : z.rest(e, Math.max(0, e.length - t))
    }, z.rest = z.tail = z.drop = function(e, t, n) {
      return p.call(e, null == t || n ? 1 : t)
    }, z.compact = function(e) {
      return z.filter(e, z.identity)
    };
    var _ = function(e, t, n, o) {
      for (var i = [], r = 0, c = o || 0, a = T(e); a > c; c++) {
        var s = e[c];
        if (N(s) && (z.isArray(s) || z.isArguments(s))) {
          t || (s = _(s, t, n));
          var u = 0,
            p = s.length;
          for (i.length += p; p > u;) i[r++] = s[u++]
        } else n || (i[r++] = s)
      }
      return i
    };
    z.flatten = function(e, t) {
      return _(e, t, !1)
    }, z.without = function(e) {
      return z.difference(e, p.call(arguments, 1))
    }, z.uniq = z.unique = function(e, t, n, o) {
      z.isBoolean(t) || (o = n, n = t, t = !1), null != n && (n = g(n, o));
      for (var i = [], r = [], c = 0, a = T(e); a > c; c++) {
        var s = e[c],
          u = n ? n(s, c, e) : s;
        t ? (c && r === u || i.push(s), r = u) : n ? z.contains(r, u) || (r.push(u), i.push(s)) : z.contains(i, s) || i.push(s)
      }
      return i
    }, z.union = function() {
      return z.uniq(_(arguments, !0, !0))
    }, z.intersection = function(e) {
      for (var t = [], n = arguments.length, o = 0, i = T(e); i > o; o++) {
        var r = e[o];
        if (!z.contains(t, r)) {
          for (var c = 1; n > c && z.contains(arguments[c], r); c++);
          c === n && t.push(r)
        }
      }
      return t
    }, z.difference = function(e) {
      var t = _(arguments, !0, !0, 1);
      return z.filter(e, function(e) {
        return !z.contains(t, e)
      })
    }, z.zip = function() {
      return z.unzip(arguments)
    }, z.unzip = function(e) {
      for (var t = e && z.max(e, T).length || 0, n = Array(t), o = 0; t > o; o++) n[o] = z.pluck(e, o);
      return n
    }, z.object = function(e, t) {
      for (var n = {}, o = 0, i = T(e); i > o; o++) t ? n[e[o]] = t[o] : n[e[o][0]] = e[o][1];
      return n
    }, z.findIndex = t(1), z.findLastIndex = t(-1), z.sortedIndex = function(e, t, n, o) {
      n = g(n, o, 1);
      for (var i = n(t), r = 0, c = T(e); c > r;) {
        var a = Math.floor((r + c) / 2);
        n(e[a]) < i ? r = a + 1 : c = a
      }
      return r
    }, z.indexOf = n(1, z.findIndex, z.sortedIndex), z.lastIndexOf = n(-1, z.findLastIndex), z.range = function(e, t, n) {
      null == t && (t = e || 0, e = 0), n = n || 1;
      for (var o = Math.max(Math.ceil((t - e) / n), 0), i = Array(o), r = 0; o > r; r++, e += n) i[r] = e;
      return i
    };
    var W = function(e, t, n, o, i) {
      if (!(o instanceof t)) return e.apply(n, i);
      var r = v(e.prototype),
        c = e.apply(r, i);
      return z.isObject(c) ? c : r
    };
    z.bind = function(e, t) {
      if (h && e.bind === h) return h.apply(e, p.call(arguments, 1));
      if (!z.isFunction(e)) throw new TypeError("Bind must be called on a function");
      var n = p.call(arguments, 2),
        o = function() {
          return W(e, o, t, this, n.concat(p.call(arguments)))
        };
      return o
    }, z.partial = function(e) {
      var t = p.call(arguments, 1),
        n = function() {
          for (var o = 0, i = t.length, r = Array(i), c = 0; i > c; c++) r[c] = t[c] === z ? arguments[o++] : t[c];
          for (; o < arguments.length;) r.push(arguments[o++]);
          return W(e, n, this, this, r)
        };
      return n
    }, z.bindAll = function(e) {
      var t, n, o = arguments.length;
      if (1 >= o) throw new Error("bindAll must be passed function names");
      for (t = 1; o > t; t++) n = arguments[t], e[n] = z.bind(e[n], e);
      return e
    }, z.memoize = function(e, t) {
      var n = function(o) {
        var i = n.cache,
          r = "" + (t ? t.apply(this, arguments) : o);
        return z.has(i, r) || (i[r] = e.apply(this, arguments)), i[r]
      };
      return n.cache = {}, n
    }, z.delay = function(e, t) {
      var n = p.call(arguments, 2);
      return setTimeout(function() {
        return e.apply(null, n)
      }, t)
    }, z.defer = z.partial(z.delay, z, 1), z.throttle = function(e, t, n) {
      var o, i, r, c = null,
        a = 0;
      n || (n = {});
      var s = function() {
        a = !1 === n.leading ? 0 : z.now(), c = null, r = e.apply(o, i), c || (o = i = null)
      };
      return function() {
        var u = z.now();
        a || !1 !== n.leading || (a = u);
        var p = t - (u - a);
        return o = this, i = arguments, 0 >= p || p > t ? (c && (clearTimeout(c), c = null), a = u, r = e.apply(o, i), c || (o = i = null)) : c || !1 === n.trailing || (c = setTimeout(s, p)), r
      }
    }, z.debounce = function(e, t, n) {
      var o, i, r, c, a, s = function() {
        var u = z.now() - c;
        t > u && u >= 0 ? o = setTimeout(s, t - u) : (o = null, n || (a = e.apply(r, i), o || (r = i = null)))
      };
      return function() {
        r = this, i = arguments, c = z.now();
        var u = n && !o;
        return o || (o = setTimeout(s, t)), u && (a = e.apply(r, i), r = i = null), a
      }
    }, z.wrap = function(e, t) {
      return z.partial(t, e)
    }, z.negate = function(e) {
      return function() {
        return !e.apply(this, arguments)
      }
    }, z.compose = function() {
      var e = arguments,
        t = e.length - 1;
      return function() {
        for (var n = t, o = e[t].apply(this, arguments); n--;) o = e[n].call(this, o);
        return o
      }
    }, z.after = function(e, t) {
      return function() {
        return --e < 1 ? t.apply(this, arguments) : void 0
      }
    }, z.before = function(e, t) {
      var n;
      return function() {
        return --e > 0 && (n = t.apply(this, arguments)), 1 >= e && (t = null), n
      }
    }, z.once = z.partial(z.before, 2);
    var S = !{
        toString: null
      }.propertyIsEnumerable("toString"),
      B = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    z.keys = function(e) {
      if (!z.isObject(e)) return [];
      if (f) return f(e);
      var t = [];
      for (var n in e) z.has(e, n) && t.push(n);
      return S && o(e, t), t
    }, z.allKeys = function(e) {
      if (!z.isObject(e)) return [];
      var t = [];
      for (var n in e) t.push(n);
      return S && o(e, t), t
    }, z.values = function(e) {
      for (var t = z.keys(e), n = t.length, o = Array(n), i = 0; n > i; i++) o[i] = e[t[i]];
      return o
    }, z.mapObject = function(e, t, n) {
      t = g(t, n);
      for (var o, i = z.keys(e), r = i.length, c = {}, a = 0; r > a; a++) o = i[a], c[o] = t(e[o], o, e);
      return c
    }, z.pairs = function(e) {
      for (var t = z.keys(e), n = t.length, o = Array(n), i = 0; n > i; i++) o[i] = [t[i], e[t[i]]];
      return o
    }, z.invert = function(e) {
      for (var t = {}, n = z.keys(e), o = 0, i = n.length; i > o; o++) t[e[n[o]]] = n[o];
      return t
    }, z.functions = z.methods = function(e) {
      var t = [];
      for (var n in e) z.isFunction(e[n]) && t.push(n);
      return t.sort()
    }, z.extend = y(z.allKeys), z.extendOwn = z.assign = y(z.keys), z.findKey = function(e, t, n) {
      t = g(t, n);
      for (var o, i = z.keys(e), r = 0, c = i.length; c > r; r++)
        if (o = i[r], t(e[o], o, e)) return o
    }, z.pick = function(e, t, n) {
      var o, i, r = {},
        c = e;
      if (null == c) return r;
      z.isFunction(t) ? (i = z.allKeys(c), o = m(t, n)) : (i = _(arguments, !1, !1, 1), o = function(e, t, n) {
        return t in n
      }, c = Object(c));
      for (var a = 0, s = i.length; s > a; a++) {
        var u = i[a],
          p = c[u];
        o(p, u, c) && (r[u] = p)
      }
      return r
    }, z.omit = function(e, t, n) {
      if (z.isFunction(t)) t = z.negate(t);
      else {
        var o = z.map(_(arguments, !1, !1, 1), String);
        t = function(e, t) {
          return !z.contains(o, t)
        }
      }
      return z.pick(e, t, n)
    }, z.defaults = y(z.allKeys, !0), z.create = function(e, t) {
      var n = v(e);
      return t && z.extendOwn(n, t), n
    }, z.clone = function(e) {
      return z.isObject(e) ? z.isArray(e) ? e.slice() : z.extend({}, e) : e
    }, z.tap = function(e, t) {
      return t(e), e
    }, z.isMatch = function(e, t) {
      var n = z.keys(t),
        o = n.length;
      if (null == e) return !o;
      for (var i = Object(e), r = 0; o > r; r++) {
        var c = n[r];
        if (t[c] !== i[c] || !(c in i)) return !1
      }
      return !0
    };
    var X = function(e, t, n, o) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof z && (e = e._wrapped), t instanceof z && (t = t._wrapped);
      var i = l.call(e);
      if (i !== l.call(t)) return !1;
      switch (i) {
        case "[object RegExp]":
        case "[object String]":
          return "" + e == "" + t;
        case "[object Number]":
          return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
        case "[object Date]":
        case "[object Boolean]":
          return +e == +t
      }
      var r = "[object Array]" === i;
      if (!r) {
        if ("object" != typeof e || "object" != typeof t) return !1;
        var c = e.constructor,
          a = t.constructor;
        if (c !== a && !(z.isFunction(c) && c instanceof c && z.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
      }
      n = n || [], o = o || [];
      for (var s = n.length; s--;)
        if (n[s] === e) return o[s] === t;
      if (n.push(e), o.push(t), r) {
        if ((s = e.length) !== t.length) return !1;
        for (; s--;)
          if (!X(e[s], t[s], n, o)) return !1
      } else {
        var u, p = z.keys(e);
        if (s = p.length, z.keys(t).length !== s) return !1;
        for (; s--;)
          if (u = p[s], !z.has(t, u) || !X(e[u], t[u], n, o)) return !1
      }
      return n.pop(), o.pop(), !0
    };
    z.isEqual = function(e, t) {
        return X(e, t)
      }, z.isEmpty = function(e) {
        return null == e || (N(e) && (z.isArray(e) || z.isString(e) || z.isArguments(e)) ? 0 === e.length : 0 === z.keys(e).length)
      }, z.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
      }, z.isArray = M || function(e) {
        return "[object Array]" === l.call(e)
      }, z.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
      }, z.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
        z["is" + e] = function(t) {
          return l.call(t) === "[object " + e + "]"
        }
      }), z.isArguments(arguments) || (z.isArguments = function(e) {
        return z.has(e, "callee")
      }), "function" != typeof /./ && "object" != typeof Int8Array && (z.isFunction = function(e) {
        return "function" == typeof e || !1
      }), z.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
      }, z.isNaN = function(e) {
        return z.isNumber(e) && e !== +e
      }, z.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === l.call(e)
      }, z.isNull = function(e) {
        return null === e
      }, z.isUndefined = function(e) {
        return void 0 === e
      }, z.has = function(e, t) {
        return null != e && d.call(e, t)
      }, z.noConflict = function() {
        return i._ = r, this
      }, z.identity = function(e) {
        return e
      }, z.constant = function(e) {
        return function() {
          return e
        }
      }, z.noop = function() {}, z.property = L, z.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
          return e[t]
        }
      }, z.matcher = z.matches = function(e) {
        return e = z.extendOwn({}, e),
          function(t) {
            return z.isMatch(t, e)
          }
      }, z.times = function(e, t, n) {
        var o = Array(Math.max(0, e));
        t = m(t, n, 1);
        for (var i = 0; e > i; i++) o[i] = t(i);
        return o
      }, z.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
      },
      z.now = Date.now || function() {
        return (new Date).getTime()
      };
    var C = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      },
      E = z.invert(C),
      w = function(e) {
        var t = function(t) {
            return e[t]
          },
          n = "(?:" + z.keys(e).join("|") + ")",
          o = RegExp(n),
          i = RegExp(n, "g");
        return function(e) {
          return e = null == e ? "" : "" + e, o.test(e) ? e.replace(i, t) : e
        }
      };
    z.escape = w(C), z.unescape = w(E), z.result = function(e, t, n) {
      var o = null == e ? void 0 : e[t];
      return void 0 === o && (o = n), z.isFunction(o) ? o.call(e) : o
    };
    var x = 0;
    z.uniqueId = function(e) {
      var t = ++x + "";
      return e ? e + t : t
    }, z.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g
    };
    var k = /(.)^/,
      D = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
      },
      R = /\\|'|\r|\n|\u2028|\u2029/g,
      P = function(e) {
        return "\\" + D[e]
      };
    z.template = function(e, t, n) {
      !t && n && (t = n), t = z.defaults({}, t, z.templateSettings);
      var o = RegExp([(t.escape || k).source, (t.interpolate || k).source, (t.evaluate || k).source].join("|") + "|$", "g"),
        i = 0,
        r = "__p+='";
      e.replace(o, function(t, n, o, c, a) {
        return r += e.slice(i, a).replace(R, P), i = a + t.length, n ? r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : o ? r += "'+\n((__t=(" + o + "))==null?'':__t)+\n'" : c && (r += "';\n" + c + "\n__p+='"), t
      }), r += "';\n", t.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
      try {
        var c = new Function(t.variable || "obj", "_", r)
      } catch (e) {
        throw e.source = r, e
      }
      var a = function(e) {
        return c.call(this, e, z)
      };
      return a.source = "function(" + (t.variable || "obj") + "){\n" + r + "}", a
    }, z.chain = function(e) {
      var t = z(e);
      return t._chain = !0, t
    };
    var j = function(e, t) {
      return e._chain ? z(t).chain() : t
    };
    z.mixin = function(e) {
      z.each(z.functions(e), function(t) {
        var n = z[t] = e[t];
        z.prototype[t] = function() {
          var e = [this._wrapped];
          return u.apply(e, arguments), j(this, n.apply(z, e))
        }
      })
    }, z.mixin(z), z.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
      var t = c[e];
      z.prototype[e] = function() {
        var n = this._wrapped;
        return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], j(this, n)
      }
    }), z.each(["concat", "join", "slice"], function(e) {
      var t = c[e];
      z.prototype[e] = function() {
        return j(this, t.apply(this._wrapped, arguments))
      }
    }), z.prototype.value = function() {
      return this._wrapped
    }, z.prototype.valueOf = z.prototype.toJSON = z.prototype.value, z.prototype.toString = function() {
      return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
      return z
    })
  }.call(this),
  function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return t(e)
    } : t(e)
  }("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
      var t = !!e && "length" in e && e.length,
        n = re.type(e);
      return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t, n) {
      if (re.isFunction(t)) return re.grep(e, function(e, o) {
        return !!t.call(e, o, e) !== n
      });
      if (t.nodeType) return re.grep(e, function(e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (he.test(t)) return re.filter(t, e, n);
        t = re.filter(t, e)
      }
      return re.grep(e, function(e) {
        return Z.call(t, e) > -1 !== n
      })
    }

    function i(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function r(e) {
      var t = {};
      return re.each(e.match(ge) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function c() {
      J.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), re.ready()
    }

    function a() {
      this.expando = re.expando + a.uid++
    }

    function s(e, t, n) {
      var o;
      if (void 0 === n && 1 === e.nodeType)
        if (o = "data-" + t.replace(qe, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ne.test(n) ? re.parseJSON(n) : n)
          } catch (e) {}
          Te.set(e, t, n)
        } else n = void 0;
      return n
    }

    function u(e, t, n, o) {
      var i, r = 1,
        c = 20,
        a = o ? function() {
          return o.cur()
        } : function() {
          return re.css(e, t, "")
        },
        s = a(),
        u = n && n[3] || (re.cssNumber[t] ? "" : "px"),
        p = (re.cssNumber[t] || "px" !== u && +s) && We.exec(re.css(e, t));
      if (p && p[3] !== u) {
        u = u || p[3], n = n || [], p = +s || 1;
        do {
          r = r || ".5", p /= r, re.style(e, t, p + u)
        } while (r !== (r = a() / s) && 1 !== r && --c)
      }
      return n && (p = +p || +s || 0, i = n[1] ? p + (n[1] + 1) * n[2] : +n[2], o && (o.unit = u, o.start = p, o.end = i)), i
    }

    function p(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
    }

    function l(e, t) {
      for (var n = 0, o = e.length; o > n; n++) Oe.set(e[n], "globalEval", !t || Oe.get(t[n], "globalEval"))
    }

    function d(e, t, n, o, i) {
      for (var r, c, a, s, u, d, M = t.createDocumentFragment(), f = [], h = 0, b = e.length; b > h; h++)
        if ((r = e[h]) || 0 === r)
          if ("object" === re.type(r)) re.merge(f, r.nodeType ? [r] : r);
          else if (xe.test(r)) {
        for (c = c || M.appendChild(t.createElement("div")), a = (Ce.exec(r) || ["", ""])[1].toLowerCase(), s = we[a] || we._default, c.innerHTML = s[1] + re.htmlPrefilter(r) + s[2], d = s[0]; d--;) c = c.lastChild;
        re.merge(f, c.childNodes), c = M.firstChild, c.textContent = ""
      } else f.push(t.createTextNode(r));
      for (M.textContent = "", h = 0; r = f[h++];)
        if (o && re.inArray(r, o) > -1) i && i.push(r);
        else if (u = re.contains(r.ownerDocument, r), c = p(M.appendChild(r), "script"), u && l(c), n)
        for (d = 0; r = c[d++];) Ee.test(r.type || "") && n.push(r);
      return M
    }

    function M() {
      return !0
    }

    function f() {
      return !1
    }

    function h() {
      try {
        return J.activeElement
      } catch (e) {}
    }

    function b(e, t, n, o, i, r) {
      var c, a;
      if ("object" == typeof t) {
        "string" != typeof n && (o = o || n, n = void 0);
        for (a in t) b(e, a, n, o, t[a], r);
        return e
      }
      if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ("string" == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = f;
      else if (!i) return e;
      return 1 === r && (c = i, i = function(e) {
        return re().off(e), c.apply(this, arguments)
      }, i.guid = c.guid || (c.guid = re.guid++)), e.each(function() {
        re.event.add(this, t, i, o, n)
      })
    }

    function A(e, t) {
      return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function z(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function m(e) {
      var t = Ie.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function g(e, t) {
      var n, o, i, r, c, a, s, u;
      if (1 === t.nodeType) {
        if (Oe.hasData(e) && (r = Oe.access(e), c = Oe.set(t, r), u = r.events)) {
          delete c.handle, c.events = {};
          for (i in u)
            for (n = 0, o = u[i].length; o > n; n++) re.event.add(t, i, u[i][n])
        }
        Te.hasData(e) && (a = Te.access(e), s = re.extend({}, a), Te.set(t, s))
      }
    }

    function y(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Xe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function v(e, t, n, o) {
      t = Q.apply([], t);
      var i, r, c, a, s, u, l = 0,
        M = e.length,
        f = M - 1,
        h = t[0],
        b = re.isFunction(h);
      if (b || M > 1 && "string" == typeof h && !oe.checkClone && He.test(h)) return e.each(function(i) {
        var r = e.eq(i);
        b && (t[0] = h.call(this, i, r.html())), v(r, t, n, o)
      });
      if (M && (i = d(t, e[0].ownerDocument, !1, e, o), r = i.firstChild, 1 === i.childNodes.length && (i = r), r || o)) {
        for (c = re.map(p(i, "script"), z), a = c.length; M > l; l++) s = i, l !== f && (s = re.clone(s, !0, !0), a && re.merge(c, p(s, "script"))), n.call(e[l], s, l);
        if (a)
          for (u = c[c.length - 1].ownerDocument, re.map(c, m), l = 0; a > l; l++) s = c[l], Ee.test(s.type || "") && !Oe.access(s, "globalEval") && re.contains(u, s) && (s.src ? re._evalUrl && re._evalUrl(s.src) : re.globalEval(s.textContent.replace(Ye, "")))
      }
      return e
    }

    function L(e, t, n) {
      for (var o, i = t ? re.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || re.cleanData(p(o)), o.parentNode && (n && re.contains(o.ownerDocument, o) && l(p(o, "script")), o.parentNode.removeChild(o));
      return e
    }

    function O(e, t) {
      var n = re(t.createElement(e)).appendTo(t.body),
        o = re.css(n[0], "display");
      return n.detach(), o
    }

    function T(e) {
      var t = J,
        n = Ue[e];
      return n || (n = O(e, t), "none" !== n && n || (Fe = (Fe || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Fe[0].contentDocument, t.write(), t.close(), n = O(e, t), Fe.detach()), Ue[e] = n), n
    }

    function N(e, t, n) {
      var o, i, r, c, a = e.style;
      return n = n || Je(e), c = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== c && void 0 !== c || re.contains(e.ownerDocument, e) || (c = re.style(e, t)), n && !oe.pixelMarginRight() && Ve.test(c) && Ge.test(t) && (o = a.width, i = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = c, c = n.width, a.width = o, a.minWidth = i, a.maxWidth = r), void 0 !== c ? c + "" : c
    }

    function q(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function _(e) {
      if (e in nt) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;)
        if ((e = tt[n] + t) in nt) return e
    }

    function W(e, t, n) {
      var o = We.exec(t);
      return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }

    function S(e, t, n, o, i) {
      for (var r = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0, c = 0; 4 > r; r += 2) "margin" === n && (c += re.css(e, n + Se[r], !0, i)), o ? ("content" === n && (c -= re.css(e, "padding" + Se[r], !0, i)), "margin" !== n && (c -= re.css(e, "border" + Se[r] + "Width", !0, i))) : (c += re.css(e, "padding" + Se[r], !0, i), "padding" !== n && (c += re.css(e, "border" + Se[r] + "Width", !0, i)));
      return c
    }

    function B(e, t, n) {
      var o = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        r = Je(e),
        c = "border-box" === re.css(e, "boxSizing", !1, r);
      if (0 >= i || null == i) {
        if (i = N(e, t, r), (0 > i || null == i) && (i = e.style[t]), Ve.test(i)) return i;
        o = c && (oe.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
      }
      return i + S(e, t, n || (c ? "border" : "content"), o, r) + "px"
    }

    function X(e, t) {
      for (var n, o, i, r = [], c = 0, a = e.length; a > c; c++) o = e[c], o.style && (r[c] = Oe.get(o, "olddisplay"), n = o.style.display, t ? (r[c] || "none" !== n || (o.style.display = ""), "" === o.style.display && Be(o) && (r[c] = Oe.access(o, "olddisplay", T(o.nodeName)))) : (i = Be(o), "none" === n && i || Oe.set(o, "olddisplay", i ? n : re.css(o, "display"))));
      for (c = 0; a > c; c++) o = e[c], o.style && (t && "none" !== o.style.display && "" !== o.style.display || (o.style.display = t ? r[c] || "" : "none"));
      return e
    }

    function C(e, t, n, o, i) {
      return new C.prototype.init(e, t, n, o, i)
    }

    function E() {
      return e.setTimeout(function() {
        ot = void 0
      }), ot = re.now()
    }

    function w(e, t) {
      var n, o = 0,
        i = {
          height: e
        };
      for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Se[o], i["margin" + n] = i["padding" + n] = e;
      return t && (i.opacity = i.width = e), i
    }

    function x(e, t, n) {
      for (var o, i = (R.tweeners[t] || []).concat(R.tweeners["*"]), r = 0, c = i.length; c > r; r++)
        if (o = i[r].call(n, t, e)) return o
    }

    function k(e, t, n) {
      var o, i, r, c, a, s, u, p = this,
        l = {},
        d = e.style,
        M = e.nodeType && Be(e),
        f = Oe.get(e, "fxshow");
      n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
        a.unqueued || s()
      }), a.unqueued++, p.always(function() {
        p.always(function() {
          a.unqueued--, re.queue(e, "fx").length || a.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = re.css(e, "display"), "inline" === ("none" === u ? Oe.get(e, "olddisplay") || T(e.nodeName) : u) && "none" === re.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always(function() {
        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
      }));
      for (o in t)
        if (i = t[o], rt.exec(i)) {
          if (delete t[o], r = r || "toggle" === i, i === (M ? "hide" : "show")) {
            if ("show" !== i || !f || void 0 === f[o]) continue;
            M = !0
          }
          l[o] = f && f[o] || re.style(e, o)
        } else u = void 0;
      if (re.isEmptyObject(l)) "inline" === ("none" === u ? T(e.nodeName) : u) && (d.display = u);
      else {
        f ? "hidden" in f && (M = f.hidden) : f = Oe.access(e, "fxshow", {}), r && (f.hidden = !M), M ? re(e).show() : p.done(function() {
          re(e).hide()
        }), p.done(function() {
          var t;
          Oe.remove(e, "fxshow");
          for (t in l) re.style(e, t, l[t])
        });
        for (o in l) c = x(M ? f[o] : 0, o, p), o in f || (f[o] = c.start, M && (c.end = c.start, c.start = "width" === o || "height" === o ? 1 : 0))
      }
    }

    function D(e, t) {
      var n, o, i, r, c;
      for (n in e)
        if (o = re.camelCase(n), i = t[o], r = e[n], re.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (c = re.cssHooks[o]) && "expand" in c) {
          r = c.expand(r), delete e[o];
          for (n in r) n in e || (e[n] = r[n], t[n] = i)
        } else t[o] = i
    }

    function R(e, t, n) {
      var o, i, r = 0,
        c = R.prefilters.length,
        a = re.Deferred().always(function() {
          delete s.elem
        }),
        s = function() {
          if (i) return !1;
          for (var t = ot || E(), n = Math.max(0, u.startTime + u.duration - t), o = n / u.duration || 0, r = 1 - o, c = 0, s = u.tweens.length; s > c; c++) u.tweens[c].run(r);
          return a.notifyWith(e, [u, r, n]), 1 > r && s ? n : (a.resolveWith(e, [u]), !1)
        },
        u = a.promise({
          elem: e,
          props: re.extend({}, t),
          opts: re.extend(!0, {
            specialEasing: {},
            easing: re.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: ot || E(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var o = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(o), o
          },
          stop: function(t) {
            var n = 0,
              o = t ? u.tweens.length : 0;
            if (i) return this;
            for (i = !0; o > n; n++) u.tweens[n].run(1);
            return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
          }
        }),
        p = u.props;
      for (D(p, u.opts.specialEasing); c > r; r++)
        if (o = R.prefilters[r].call(u, e, p, u.opts)) return re.isFunction(o.stop) && (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(o.stop, o)), o;
      return re.map(p, x, u), re.isFunction(u.opts.start) && u.opts.start.call(e, u), re.fx.timer(re.extend(s, {
        elem: e,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function P(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function j(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var o, i = 0,
          r = t.toLowerCase().match(ge) || [];
        if (re.isFunction(n))
          for (; o = r[i++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
      }
    }

    function H(e, t, n, o) {
      function i(a) {
        var s;
        return r[a] = !0, re.each(e[a] || [], function(e, a) {
          var u = a(t, n, o);
          return "string" != typeof u || c || r[u] ? c ? !(s = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
        }), s
      }
      var r = {},
        c = e === Tt;
      return i(t.dataTypes[0]) || !r["*"] && i("*")
    }

    function I(e, t) {
      var n, o, i = re.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((i[n] ? e : o || (o = {}))[n] = t[n]);
      return o && re.extend(!0, e, o), e
    }

    function Y(e, t, n) {
      for (var o, i, r, c, a = e.contents, s = e.dataTypes;
        "*" === s[0];) s.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
      if (o)
        for (i in a)
          if (a[i] && a[i].test(o)) {
            s.unshift(i);
            break
          }
      if (s[0] in n) r = s[0];
      else {
        for (i in n) {
          if (!s[0] || e.converters[i + " " + s[0]]) {
            r = i;
            break
          }
          c || (c = i)
        }
        r = r || c
      }
      return r ? (r !== s[0] && s.unshift(r), n[r]) : void 0
    }

    function F(e, t, n, o) {
      var i, r, c, a, s, u = {},
        p = e.dataTypes.slice();
      if (p[1])
        for (c in e.converters) u[c.toLowerCase()] = e.converters[c];
      for (r = p.shift(); r;)
        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !s && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = r, r = p.shift())
          if ("*" === r) r = s;
          else if ("*" !== s && s !== r) {
        if (!(c = u[s + " " + r] || u["* " + r]))
          for (i in u)
            if (a = i.split(" "), a[1] === r && (c = u[s + " " + a[0]] || u["* " + a[0]])) {
              !0 === c ? c = u[i] : !0 !== u[i] && (r = a[0], p.unshift(a[1]));
              break
            }
        if (!0 !== c)
          if (c && e.throws) t = c(t);
          else try {
            t = c(t)
          } catch (e) {
            return {
              state: "parsererror",
              error: c ? e : "No conversion from " + s + " to " + r
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function U(e, t, n, o) {
      var i;
      if (re.isArray(t)) re.each(t, function(t, i) {
        n || Wt.test(e) ? o(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, o)
      });
      else if (n || "object" !== re.type(t)) o(e, t);
      else
        for (i in t) U(e + "[" + i + "]", t[i], n, o)
    }

    function G(e) {
      return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var V = [],
      J = e.document,
      K = V.slice,
      Q = V.concat,
      $ = V.push,
      Z = V.indexOf,
      ee = {},
      te = ee.toString,
      ne = ee.hasOwnProperty,
      oe = {},
      ie = "2.2.4",
      re = function(e, t) {
        return new re.fn.init(e, t)
      },
      ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ae = /^-ms-/,
      se = /-([\da-z])/gi,
      ue = function(e, t) {
        return t.toUpperCase()
      };
    re.fn = re.prototype = {
      jquery: ie,
      constructor: re,
      selector: "",
      length: 0,
      toArray: function() {
        return K.call(this)
      },
      get: function(e) {
        return null != e ? 0 > e ? this[e + this.length] : this[e] : K.call(this)
      },
      pushStack: function(e) {
        var t = re.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e) {
        return re.each(this, e)
      },
      map: function(e) {
        return this.pushStack(re.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(K.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: $,
      sort: V.sort,
      splice: V.splice
    }, re.extend = re.fn.extend = function() {
      var e, t, n, o, i, r, c = arguments[0] || {},
        a = 1,
        s = arguments.length,
        u = !1;
      for ("boolean" == typeof c && (u = c, c = arguments[a] || {}, a++), "object" == typeof c || re.isFunction(c) || (c = {}), a === s && (c = this, a--); s > a; a++)
        if (null != (e = arguments[a]))
          for (t in e) n = c[t], o = e[t], c !== o && (u && o && (re.isPlainObject(o) || (i = re.isArray(o))) ? (i ? (i = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, c[t] = re.extend(u, r, o)) : void 0 !== o && (c[t] = o));
      return c
    }, re.extend({
      expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === re.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isPlainObject: function(e) {
        var t;
        if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
        if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
        for (t in e);
        return void 0 === t || ne.call(e, t)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        var t, n = eval;
        (e = re.trim(e)) && (1 === e.indexOf("use strict") ? (t = J.createElement("script"), t.text = e, J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
        return e.replace(ae, "ms-").replace(se, ue)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
        var o, i = 0;
        if (n(e))
          for (o = e.length; o > i && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ce, "")
      },
      makeArray: function(e, t) {
        var o = t || [];
        return null != e && (n(Object(e)) ? re.merge(o, "string" == typeof e ? [e] : e) : $.call(o, e)), o
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : Z.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, o = 0, i = e.length; n > o; o++) e[i++] = t[o];
        return e.length = i, e
      },
      grep: function(e, t, n) {
        for (var o = [], i = 0, r = e.length, c = !n; r > i; i++) !t(e[i], i) !== c && o.push(e[i]);
        return o
      },
      map: function(e, t, o) {
        var i, r, c = 0,
          a = [];
        if (n(e))
          for (i = e.length; i > c; c++) null != (r = t(e[c], c, o)) && a.push(r);
        else
          for (c in e) null != (r = t(e[c], c, o)) && a.push(r);
        return Q.apply([], a)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, o, i;
        return "string" == typeof t && (n = e[t], t = e, e = n), re.isFunction(e) ? (o = K.call(arguments, 2), i = function() {
          return e.apply(t || this, o.concat(K.call(arguments)))
        }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
      },
      now: Date.now,
      support: oe
    }), "function" == typeof Symbol && (re.fn[Symbol.iterator] = V[Symbol.iterator]), re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      ee["[object " + t + "]"] = t.toLowerCase()
    });
    var pe = function(e) {
      function t(e, t, n, o) {
        var i, r, c, a, u, l, d, M, f = t && t.ownerDocument,
          h = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
        if (!o && ((t ? t.ownerDocument || t : D) !== S && W(t), t = t || S, X)) {
          if (11 !== h && (l = he.exec(e)))
            if (i = l[1]) {
              if (9 === h) {
                if (!(c = t.getElementById(i))) return n;
                if (c.id === i) return n.push(c), n
              } else if (f && (c = f.getElementById(i)) && x(t, c) && c.id === i) return n.push(c), n
            } else {
              if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
              if ((i = l[3]) && m.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n
            }
          if (m.qsa && !I[e + " "] && (!C || !C.test(e))) {
            if (1 !== h) f = t, M = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((a = t.getAttribute("id")) ? a = a.replace(Ae, "\\$&") : t.setAttribute("id", a = k), d = L(e), r = d.length, u = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) d[r] = u + " " + p(d[r]);
              M = d.join(","), f = be.test(e) && s(t.parentNode) || t
            }
            if (M) try {
              return K.apply(n, f.querySelectorAll(M)), n
            } catch (e) {} finally {
              a === k && t.removeAttribute("id")
            }
          }
        }
        return T(e.replace(re, "$1"), t, n, o)
      }

      function n() {
        function e(n, o) {
          return t.push(n + " ") > g.cacheLength && delete e[t.shift()], e[n + " "] = o
        }
        var t = [];
        return e
      }

      function o(e) {
        return e[k] = !0, e
      }

      function i(e) {
        var t = S.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function r(e, t) {
        for (var n = e.split("|"), o = n.length; o--;) g.attrHandle[n[o]] = t
      }

      function c(e, t) {
        var n = t && e,
          o = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || F) - (~e.sourceIndex || F);
        if (o) return o;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function a(e) {
        return o(function(t) {
          return t = +t, o(function(n, o) {
            for (var i, r = e([], n.length, t), c = r.length; c--;) n[i = r[c]] && (n[i] = !(o[i] = n[i]))
          })
        })
      }

      function s(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }

      function u() {}

      function p(e) {
        for (var t = 0, n = e.length, o = ""; n > t; t++) o += e[t].value;
        return o
      }

      function l(e, t, n) {
        var o = t.dir,
          i = n && "parentNode" === o,
          r = P++;
        return t.first ? function(t, n, r) {
          for (; t = t[o];)
            if (1 === t.nodeType || i) return e(t, n, r)
        } : function(t, n, c) {
          var a, s, u, p = [R, r];
          if (c) {
            for (; t = t[o];)
              if ((1 === t.nodeType || i) && e(t, n, c)) return !0
          } else
            for (; t = t[o];)
              if (1 === t.nodeType || i) {
                if (u = t[k] || (t[k] = {}), s = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = s[o]) && a[0] === R && a[1] === r) return p[2] = a[2];
                if (s[o] = p, p[2] = e(t, n, c)) return !0
              }
        }
      }

      function d(e) {
        return e.length > 1 ? function(t, n, o) {
          for (var i = e.length; i--;)
            if (!e[i](t, n, o)) return !1;
          return !0
        } : e[0]
      }

      function M(e, n, o) {
        for (var i = 0, r = n.length; r > i; i++) t(e, n[i], o);
        return o
      }

      function f(e, t, n, o, i) {
        for (var r, c = [], a = 0, s = e.length, u = null != t; s > a; a++)(r = e[a]) && (n && !n(r, o, i) || (c.push(r), u && t.push(a)));
        return c
      }

      function h(e, t, n, i, r, c) {
        return i && !i[k] && (i = h(i)), r && !r[k] && (r = h(r, c)), o(function(o, c, a, s) {
          var u, p, l, d = [],
            h = [],
            b = c.length,
            A = o || M(t || "*", a.nodeType ? [a] : a, []),
            z = !e || !o && t ? A : f(A, d, e, a, s),
            m = n ? r || (o ? e : b || i) ? [] : c : z;
          if (n && n(z, m, a, s), i)
            for (u = f(m, h), i(u, [], a, s), p = u.length; p--;)(l = u[p]) && (m[h[p]] = !(z[h[p]] = l));
          if (o) {
            if (r || e) {
              if (r) {
                for (u = [], p = m.length; p--;)(l = m[p]) && u.push(z[p] = l);
                r(null, m = [], u, s)
              }
              for (p = m.length; p--;)(l = m[p]) && (u = r ? $(o, l) : d[p]) > -1 && (o[u] = !(c[u] = l))
            }
          } else m = f(m === c ? m.splice(b, m.length) : m), r ? r(null, c, m, s) : K.apply(c, m)
        })
      }

      function b(e) {
        for (var t, n, o, i = e.length, r = g.relative[e[0].type], c = r || g.relative[" "], a = r ? 1 : 0, s = l(function(e) {
            return e === t
          }, c, !0), u = l(function(e) {
            return $(t, e) > -1
          }, c, !0), M = [function(e, n, o) {
            var i = !r && (o || n !== N) || ((t = n).nodeType ? s(e, n, o) : u(e, n, o));
            return t = null, i
          }]; i > a; a++)
          if (n = g.relative[e[a].type]) M = [l(d(M), n)];
          else {
            if (n = g.filter[e[a].type].apply(null, e[a].matches), n[k]) {
              for (o = ++a; i > o && !g.relative[e[o].type]; o++);
              return h(a > 1 && d(M), a > 1 && p(e.slice(0, a - 1).concat({
                value: " " === e[a - 2].type ? "*" : ""
              })).replace(re, "$1"), n, o > a && b(e.slice(a, o)), i > o && b(e = e.slice(o)), i > o && p(e))
            }
            M.push(n)
          }
        return d(M)
      }

      function A(e, n) {
        var i = n.length > 0,
          r = e.length > 0,
          c = function(o, c, a, s, u) {
            var p, l, d, M = 0,
              h = "0",
              b = o && [],
              A = [],
              z = N,
              m = o || r && g.find.TAG("*", u),
              y = R += null == z ? 1 : Math.random() || .1,
              v = m.length;
            for (u && (N = c === S || c || u); h !== v && null != (p = m[h]); h++) {
              if (r && p) {
                for (l = 0, c || p.ownerDocument === S || (W(p), a = !X); d = e[l++];)
                  if (d(p, c || S, a)) {
                    s.push(p);
                    break
                  }
                u && (R = y)
              }
              i && ((p = !d && p) && M--, o && b.push(p))
            }
            if (M += h, i && h !== M) {
              for (l = 0; d = n[l++];) d(b, A, c, a);
              if (o) {
                if (M > 0)
                  for (; h--;) b[h] || A[h] || (A[h] = V.call(s));
                A = f(A)
              }
              K.apply(s, A), u && !o && A.length > 0 && M + n.length > 1 && t.uniqueSort(s)
            }
            return u && (R = y, N = z), b
          };
        return i ? o(c) : c
      }
      var z, m, g, y, v, L, O, T, N, q, _, W, S, B, X, C, E, w, x, k = "sizzle" + 1 * new Date,
        D = e.document,
        R = 0,
        P = 0,
        j = n(),
        H = n(),
        I = n(),
        Y = function(e, t) {
          return e === t && (_ = !0), 0
        },
        F = 1 << 31,
        U = {}.hasOwnProperty,
        G = [],
        V = G.pop,
        J = G.push,
        K = G.push,
        Q = G.slice,
        $ = function(e, t) {
          for (var n = 0, o = e.length; o > n; n++)
            if (e[n] === t) return n;
          return -1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        oe = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        ie = new RegExp(ee + "+", "g"),
        re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        ce = new RegExp("^" + ee + "*," + ee + "*"),
        ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        se = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ue = new RegExp(oe),
        pe = new RegExp("^" + te + "$"),
        le = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + oe),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Z + ")$", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        de = /^(?:input|select|textarea|button)$/i,
        Me = /^h\d$/i,
        fe = /^[^{]+\{\s*\[native \w/,
        he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        be = /[+~]/,
        Ae = /'|\\/g,
        ze = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        me = function(e, t, n) {
          var o = "0x" + t - 65536;
          return o !== o || n ? t : 0 > o ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
        },
        ge = function() {
          W()
        };
      try {
        K.apply(G = Q.call(D.childNodes), D.childNodes), G[D.childNodes.length].nodeType
      } catch (e) {
        K = {
          apply: G.length ? function(e, t) {
            J.apply(e, Q.call(t))
          } : function(e, t) {
            for (var n = e.length, o = 0; e[n++] = t[o++];);
            e.length = n - 1
          }
        }
      }
      m = t.support = {}, v = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, W = t.setDocument = function(e) {
        var t, n, o = e ? e.ownerDocument || e : D;
        return o !== S && 9 === o.nodeType && o.documentElement ? (S = o, B = S.documentElement, X = !v(S), (n = S.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ge, !1) : n.attachEvent && n.attachEvent("onunload", ge)), m.attributes = i(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), m.getElementsByTagName = i(function(e) {
          return e.appendChild(S.createComment("")), !e.getElementsByTagName("*").length
        }), m.getElementsByClassName = fe.test(S.getElementsByClassName), m.getById = i(function(e) {
          return B.appendChild(e).id = k, !S.getElementsByName || !S.getElementsByName(k).length
        }), m.getById ? (g.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && X) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }, g.filter.ID = function(e) {
          var t = e.replace(ze, me);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete g.find.ID, g.filter.ID = function(e) {
          var t = e.replace(ze, me);
          return function(e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), g.find.TAG = m.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : m.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, o = [],
            i = 0,
            r = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = r[i++];) 1 === n.nodeType && o.push(n);
            return o
          }
          return r
        }, g.find.CLASS = m.getElementsByClassName && function(e, t) {
          return void 0 !== t.getElementsByClassName && X ? t.getElementsByClassName(e) : void 0
        }, E = [], C = [], (m.qsa = fe.test(S.querySelectorAll)) && (i(function(e) {
          B.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && C.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || C.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + k + "-]").length || C.push("~="), e.querySelectorAll(":checked").length || C.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || C.push(".#.+[+~]")
        }), i(function(e) {
          var t = S.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && C.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || C.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), C.push(",.*:")
        })), (m.matchesSelector = fe.test(w = B.matches || B.webkitMatchesSelector || B.mozMatchesSelector || B.oMatchesSelector || B.msMatchesSelector)) && i(function(e) {
          m.disconnectedMatch = w.call(e, "div"), w.call(e, "[s!='']:x"), E.push("!=", oe)
        }), C = C.length && new RegExp(C.join("|")), E = E.length && new RegExp(E.join("|")), t = fe.test(B.compareDocumentPosition), x = t || fe.test(B.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            o = t && t.parentNode;
          return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, Y = t ? function(e, t) {
          if (e === t) return _ = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !m.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === D && x(D, e) ? -1 : t === S || t.ownerDocument === D && x(D, t) ? 1 : q ? $(q, e) - $(q, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return _ = !0, 0;
          var n, o = 0,
            i = e.parentNode,
            r = t.parentNode,
            a = [e],
            s = [t];
          if (!i || !r) return e === S ? -1 : t === S ? 1 : i ? -1 : r ? 1 : q ? $(q, e) - $(q, t) : 0;
          if (i === r) return c(e, t);
          for (n = e; n = n.parentNode;) a.unshift(n);
          for (n = t; n = n.parentNode;) s.unshift(n);
          for (; a[o] === s[o];) o++;
          return o ? c(a[o], s[o]) : a[o] === D ? -1 : s[o] === D ? 1 : 0
        }, S) : S
      }, t.matches = function(e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== S && W(e), n = n.replace(se, "='$1']"), m.matchesSelector && X && !I[n + " "] && (!E || !E.test(n)) && (!C || !C.test(n))) try {
          var o = w.call(e, n);
          if (o || m.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
        } catch (e) {}
        return t(n, S, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== S && W(e), x(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== S && W(e);
        var n = g.attrHandle[t.toLowerCase()],
          o = n && U.call(g.attrHandle, t.toLowerCase()) ? n(e, t, !X) : void 0;
        return void 0 !== o ? o : m.attributes || !X ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, n = [],
          o = 0,
          i = 0;
        if (_ = !m.detectDuplicates, q = !m.sortStable && e.slice(0), e.sort(Y), _) {
          for (; t = e[i++];) t === e[i] && (o = n.push(i));
          for (; o--;) e.splice(n[o], 1)
        }
        return q = null, e
      }, y = t.getText = function(e) {
        var t, n = "",
          o = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += y(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else
          for (; t = e[o++];) n += y(t);
        return n
      }, g = t.selectors = {
        cacheLength: 50,
        createPseudo: o,
        match: le,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ze, me), e[3] = (e[3] || e[4] || e[5] || "").replace(ze, me), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return le.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = L(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(ze, me).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = j[e + " "];
            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && j(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, o) {
            return function(i) {
              var r = t.attr(i, e);
              return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === o : "!=" === n ? r !== o : "^=" === n ? o && 0 === r.indexOf(o) : "*=" === n ? o && r.indexOf(o) > -1 : "$=" === n ? o && r.slice(-o.length) === o : "~=" === n ? (" " + r.replace(ie, " ") + " ").indexOf(o) > -1 : "|=" === n && (r === o || r.slice(0, o.length + 1) === o + "-"))
            }
          },
          CHILD: function(e, t, n, o, i) {
            var r = "nth" !== e.slice(0, 3),
              c = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === o && 0 === i ? function(e) {
              return !!e.parentNode
            } : function(t, n, s) {
              var u, p, l, d, M, f, h = r !== c ? "nextSibling" : "previousSibling",
                b = t.parentNode,
                A = a && t.nodeName.toLowerCase(),
                z = !s && !a,
                m = !1;
              if (b) {
                if (r) {
                  for (; h;) {
                    for (d = t; d = d[h];)
                      if (a ? d.nodeName.toLowerCase() === A : 1 === d.nodeType) return !1;
                    f = h = "only" === e && !f && "nextSibling"
                  }
                  return !0
                }
                if (f = [c ? b.firstChild : b.lastChild], c && z) {
                  for (d = b, l = d[k] || (d[k] = {}), p = l[d.uniqueID] || (l[d.uniqueID] = {}), u = p[e] || [], M = u[0] === R && u[1], m = M && u[2], d = M && b.childNodes[M]; d = ++M && d && d[h] || (m = M = 0) || f.pop();)
                    if (1 === d.nodeType && ++m && d === t) {
                      p[e] = [R, M, m];
                      break
                    }
                } else if (z && (d = t, l = d[k] || (d[k] = {}), p = l[d.uniqueID] || (l[d.uniqueID] = {}), u = p[e] || [], M = u[0] === R && u[1], m = M), !1 === m)
                  for (;
                    (d = ++M && d && d[h] || (m = M = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== A : 1 !== d.nodeType) || !++m || (z && (l = d[k] || (d[k] = {}), p = l[d.uniqueID] || (l[d.uniqueID] = {}), p[e] = [R, m]), d !== t)););
                return (m -= i) === o || m % o == 0 && m / o >= 0
              }
            }
          },
          PSEUDO: function(e, n) {
            var i, r = g.pseudos[e] || g.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return r[k] ? r(n) : r.length > 1 ? (i = [e, e, "", n], g.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, t) {
              for (var o, i = r(e, n), c = i.length; c--;) o = $(e, i[c]), e[o] = !(t[o] = i[c])
            }) : function(e) {
              return r(e, 0, i)
            }) : r
          }
        },
        pseudos: {
          not: o(function(e) {
            var t = [],
              n = [],
              i = O(e.replace(re, "$1"));
            return i[k] ? o(function(e, t, n, o) {
              for (var r, c = i(e, null, o, []), a = e.length; a--;)(r = c[a]) && (e[a] = !(t[a] = r))
            }) : function(e, o, r) {
              return t[0] = e, i(t, null, r, n), t[0] = null, !n.pop()
            }
          }),
          has: o(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: o(function(e) {
            return e = e.replace(ze, me),
              function(t) {
                return (t.textContent || t.innerText || y(t)).indexOf(e) > -1
              }
          }),
          lang: o(function(e) {
            return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ze, me).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = X ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === B
          },
          focus: function(e) {
            return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return !1 === e.disabled
          },
          disabled: function(e) {
            return !0 === e.disabled
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !g.pseudos.empty(e)
          },
          header: function(e) {
            return Me.test(e.nodeName)
          },
          input: function(e) {
            return de.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: a(function() {
            return [0]
          }),
          last: a(function(e, t) {
            return [t - 1]
          }),
          eq: a(function(e, t, n) {
            return [0 > n ? n + t : n]
          }),
          even: a(function(e, t) {
            for (var n = 0; t > n; n += 2) e.push(n);
            return e
          }),
          odd: a(function(e, t) {
            for (var n = 1; t > n; n += 2) e.push(n);
            return e
          }),
          lt: a(function(e, t, n) {
            for (var o = 0 > n ? n + t : n; --o >= 0;) e.push(o);
            return e
          }),
          gt: a(function(e, t, n) {
            for (var o = 0 > n ? n + t : n; ++o < t;) e.push(o);
            return e
          })
        }
      }, g.pseudos.nth = g.pseudos.eq;
      for (z in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) g.pseudos[z] = function(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(z);
      for (z in {
          submit: !0,
          reset: !0
        }) g.pseudos[z] = function(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }(z);
      return u.prototype = g.filters = g.pseudos, g.setFilters = new u, L = t.tokenize = function(e, n) {
        var o, i, r, c, a, s, u, p = H[e + " "];
        if (p) return n ? 0 : p.slice(0);
        for (a = e, s = [], u = g.preFilter; a;) {
          o && !(i = ce.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), o = !1, (i = ae.exec(a)) && (o = i.shift(), r.push({
            value: o,
            type: i[0].replace(re, " ")
          }), a = a.slice(o.length));
          for (c in g.filter) !(i = le[c].exec(a)) || u[c] && !(i = u[c](i)) || (o = i.shift(), r.push({
            value: o,
            type: c,
            matches: i
          }), a = a.slice(o.length));
          if (!o) break
        }
        return n ? a.length : a ? t.error(e) : H(e, s).slice(0)
      }, O = t.compile = function(e, t) {
        var n, o = [],
          i = [],
          r = I[e + " "];
        if (!r) {
          for (t || (t = L(e)), n = t.length; n--;) r = b(t[n]), r[k] ? o.push(r) : i.push(r);
          r = I(e, A(i, o)), r.selector = e
        }
        return r
      }, T = t.select = function(e, t, n, o) {
        var i, r, c, a, u, l = "function" == typeof e && e,
          d = !o && L(e = l.selector || e);
        if (n = n || [], 1 === d.length) {
          if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (c = r[0]).type && m.getById && 9 === t.nodeType && X && g.relative[r[1].type]) {
            if (!(t = (g.find.ID(c.matches[0].replace(ze, me), t) || [])[0])) return n;
            l && (t = t.parentNode), e = e.slice(r.shift().value.length)
          }
          for (i = le.needsContext.test(e) ? 0 : r.length; i-- && (c = r[i], !g.relative[a = c.type]);)
            if ((u = g.find[a]) && (o = u(c.matches[0].replace(ze, me), be.test(r[0].type) && s(t.parentNode) || t))) {
              if (r.splice(i, 1), !(e = o.length && p(r))) return K.apply(n, o), n;
              break
            }
        }
        return (l || O(e, d))(o, t, !X, n, !t || be.test(e) && s(t.parentNode) || t), n
      }, m.sortStable = k.split("").sort(Y).join("") === k, m.detectDuplicates = !!_, W(), m.sortDetached = i(function(e) {
        return 1 & e.compareDocumentPosition(S.createElement("div"))
      }), i(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || r("type|href|height|width", function(e, t, n) {
        return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), m.attributes && i(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || r("value", function(e, t, n) {
        return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
      }), i(function(e) {
        return null == e.getAttribute("disabled")
      }) || r(Z, function(e, t, n) {
        var o;
        return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
      }), t
    }(e);
    re.find = pe, re.expr = pe.selectors, re.expr[":"] = re.expr.pseudos, re.uniqueSort = re.unique = pe.uniqueSort, re.text = pe.getText, re.isXMLDoc = pe.isXML, re.contains = pe.contains;
    var le = function(e, t, n) {
        for (var o = [], i = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (i && re(e).is(n)) break;
            o.push(e)
          }
        return o
      },
      de = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      Me = re.expr.match.needsContext,
      fe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      he = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
      var o = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? re.find.matchesSelector(o, e) ? [o] : [] : re.find.matches(e, re.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, re.fn.extend({
      find: function(e) {
        var t, n = this.length,
          o = [],
          i = this;
        if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
          for (t = 0; n > t; t++)
            if (re.contains(i[t], this)) return !0
        }));
        for (t = 0; n > t; t++) re.find(e, i[t], o);
        return o = this.pushStack(n > 1 ? re.unique(o) : o), o.selector = this.selector ? this.selector + " " + e : e, o
      },
      filter: function(e) {
        return this.pushStack(o(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(o(this, e || [], !0))
      },
      is: function(e) {
        return !!o(this, "string" == typeof e && Me.test(e) ? re(e) : e || [], !1).length
      }
    });
    var be, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (re.fn.init = function(e, t, n) {
      var o, i;
      if (!e) return this;
      if (n = n || be, "string" == typeof e) {
        if (!(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ae.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (o[1]) {
          if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : J, !0)), fe.test(o[1]) && re.isPlainObject(t))
            for (o in t) re.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
          return this
        }
        return i = J.getElementById(o[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = J, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
    }).prototype = re.fn, be = re(J);
    var ze = /^(?:parents|prev(?:Until|All))/,
      me = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    re.fn.extend({
      has: function(e) {
        var t = re(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; n > e; e++)
            if (re.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        for (var n, o = 0, i = this.length, r = [], c = Me.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; i > o; o++)
          for (n = this[o]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (c ? c.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
              r.push(n);
              break
            }
        return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
      },
      index: function(e) {
        return e ? "string" == typeof e ? Z.call(re(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), re.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return le(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return le(e, "parentNode", n)
      },
      next: function(e) {
        return i(e, "nextSibling")
      },
      prev: function(e) {
        return i(e, "previousSibling")
      },
      nextAll: function(e) {
        return le(e, "nextSibling")
      },
      prevAll: function(e) {
        return le(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return le(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return le(e, "previousSibling", n)
      },
      siblings: function(e) {
        return de((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return de(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || re.merge([], e.childNodes)
      }
    }, function(e, t) {
      re.fn[e] = function(n, o) {
        var i = re.map(this, t, n);
        return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (i = re.filter(o, i)), this.length > 1 && (me[e] || re.uniqueSort(i), ze.test(e) && i.reverse()), this.pushStack(i)
      }
    });
    var ge = /\S+/g;
    re.Callbacks = function(e) {
      e = "string" == typeof e ? r(e) : re.extend({}, e);
      var t, n, o, i, c = [],
        a = [],
        s = -1,
        u = function() {
          for (i = e.once, o = t = !0; a.length; s = -1)
            for (n = a.shift(); ++s < c.length;) !1 === c[s].apply(n[0], n[1]) && e.stopOnFalse && (s = c.length, n = !1);
          e.memory || (n = !1), t = !1, i && (c = n ? [] : "")
        },
        p = {
          add: function() {
            return c && (n && !t && (s = c.length - 1, a.push(n)), function t(n) {
              re.each(n, function(n, o) {
                re.isFunction(o) ? e.unique && p.has(o) || c.push(o) : o && o.length && "string" !== re.type(o) && t(o)
              })
            }(arguments), n && !t && u()), this
          },
          remove: function() {
            return re.each(arguments, function(e, t) {
              for (var n;
                (n = re.inArray(t, c, n)) > -1;) c.splice(n, 1), s >= n && s--
            }), this
          },
          has: function(e) {
            return e ? re.inArray(e, c) > -1 : c.length > 0
          },
          empty: function() {
            return c && (c = []), this
          },
          disable: function() {
            return i = a = [], c = n = "", this
          },
          disabled: function() {
            return !c
          },
          lock: function() {
            return i = a = [], n || (c = n = ""), this
          },
          locked: function() {
            return !!i
          },
          fireWith: function(e, n) {
            return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
          },
          fire: function() {
            return p.fireWith(this, arguments), this
          },
          fired: function() {
            return !!o
          }
        };
      return p
    }, re.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", re.Callbacks("once memory"), "resolved"],
            ["reject", "fail", re.Callbacks("once memory"), "rejected"],
            ["notify", "progress", re.Callbacks("memory")]
          ],
          n = "pending",
          o = {
            state: function() {
              return n
            },
            always: function() {
              return i.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return re.Deferred(function(n) {
                re.each(t, function(t, r) {
                  var c = re.isFunction(e[t]) && e[t];
                  i[r[1]](function() {
                    var e = c && c.apply(this, arguments);
                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === o ? n.promise() : this, c ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? re.extend(e, o) : o
            }
          },
          i = {};
        return o.pipe = o.then, re.each(t, function(e, r) {
          var c = r[2],
            a = r[3];
          o[r[1]] = c.add, a && c.add(function() {
            n = a
          }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function() {
            return i[r[0] + "With"](this === i ? o : this, arguments), this
          }, i[r[0] + "With"] = c.fireWith
        }), o.promise(i), e && e.call(i, i), i
      },
      when: function(e) {
        var t, n, o, i = 0,
          r = K.call(arguments),
          c = r.length,
          a = 1 !== c || e && re.isFunction(e.promise) ? c : 0,
          s = 1 === a ? e : re.Deferred(),
          u = function(e, n, o) {
            return function(i) {
              n[e] = this, o[e] = arguments.length > 1 ? K.call(arguments) : i, o === t ? s.notifyWith(n, o) : --a || s.resolveWith(n, o)
            }
          };
        if (c > 1)
          for (t = new Array(c), n = new Array(c), o = new Array(c); c > i; i++) r[i] && re.isFunction(r[i].promise) ? r[i].promise().progress(u(i, n, t)).done(u(i, o, r)).fail(s.reject) : --a;
        return a || s.resolveWith(o, r), s.promise()
      }
    });
    var ye;
    re.fn.ready = function(e) {
      return re.ready.promise().done(e), this
    }, re.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? re.readyWait++ : re.ready(!0)
      },
      ready: function(e) {
        (!0 === e ? --re.readyWait : re.isReady) || (re.isReady = !0, !0 !== e && --re.readyWait > 0 || (ye.resolveWith(J, [re]), re.fn.triggerHandler && (re(J).triggerHandler("ready"), re(J).off("ready"))))
      }
    }), re.ready.promise = function(t) {
      return ye || (ye = re.Deferred(), "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? e.setTimeout(re.ready) : (J.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c))), ye.promise(t)
    }, re.ready.promise();
    var ve = function(e, t, n, o, i, r, c) {
        var a = 0,
          s = e.length,
          u = null == n;
        if ("object" === re.type(n)) {
          i = !0;
          for (a in n) ve(e, t, a, n[a], !0, r, c)
        } else if (void 0 !== o && (i = !0, re.isFunction(o) || (c = !0), u && (c ? (t.call(e, o), t = null) : (u = t, t = function(e, t, n) {
            return u.call(re(e), n)
          })), t))
          for (; s > a; a++) t(e[a], n, c ? o : o.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : s ? t(e[0], n) : r
      },
      Le = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
    a.uid = 1, a.prototype = {
      register: function(e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      },
      cache: function(e) {
        if (!Le(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, Le(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var o, i = this.cache(e);
        if ("string" == typeof t) i[t] = n;
        else
          for (o in t) i[o] = t[o];
        return i
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      },
      access: function(e, t, n) {
        var o;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (o = this.get(e, t), void 0 !== o ? o : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, o, i, r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 === t) this.register(e);
          else {
            re.isArray(t) ? o = t.concat(t.map(re.camelCase)) : (i = re.camelCase(t), t in r ? o = [t, i] : (o = i, o = o in r ? [o] : o.match(ge) || [])), n = o.length;
            for (; n--;) delete r[o[n]]
          }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !re.isEmptyObject(t)
      }
    };
    var Oe = new a,
      Te = new a,
      Ne = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      qe = /[A-Z]/g;
    re.extend({
      hasData: function(e) {
        return Te.hasData(e) || Oe.hasData(e)
      },
      data: function(e, t, n) {
        return Te.access(e, t, n)
      },
      removeData: function(e, t) {
        Te.remove(e, t)
      },
      _data: function(e, t, n) {
        return Oe.access(e, t, n)
      },
      _removeData: function(e, t) {
        Oe.remove(e, t)
      }
    }), re.fn.extend({
      data: function(e, t) {
        var n, o, i, r = this[0],
          c = r && r.attributes;
        if (void 0 === e) {
          if (this.length && (i = Te.get(r), 1 === r.nodeType && !Oe.get(r, "hasDataAttrs"))) {
            for (n = c.length; n--;) c[n] && (o = c[n].name, 0 === o.indexOf("data-") && (o = re.camelCase(o.slice(5)), s(r, o, i[o])));
            Oe.set(r, "hasDataAttrs", !0)
          }
          return i
        }
        return "object" == typeof e ? this.each(function() {
          Te.set(this, e)
        }) : ve(this, function(t) {
          var n, o;
          if (r && void 0 === t) {
            if (void 0 !== (n = Te.get(r, e) || Te.get(r, e.replace(qe, "-$&").toLowerCase()))) return n;
            if (o = re.camelCase(e), void 0 !== (n = Te.get(r, o))) return n;
            if (void 0 !== (n = s(r, o, void 0))) return n
          } else o = re.camelCase(e), this.each(function() {
            var n = Te.get(this, o);
            Te.set(this, o, t), e.indexOf("-") > -1 && void 0 !== n && Te.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          Te.remove(this, e)
        })
      }
    }), re.extend({
      queue: function(e, t, n) {
        var o;
        return e ? (t = (t || "fx") + "queue", o = Oe.get(e, t), n && (!o || re.isArray(n) ? o = Oe.access(e, t, re.makeArray(n)) : o.push(n)), o || []) : void 0
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = re.queue(e, t),
          o = n.length,
          i = n.shift(),
          r = re._queueHooks(e, t),
          c = function() {
            re.dequeue(e, t)
          };
        "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, c, r)), !o && r && r.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Oe.get(e, n) || Oe.access(e, n, {
          empty: re.Callbacks("once memory").add(function() {
            Oe.remove(e, [t + "queue", n])
          })
        })
      }
    }), re.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = re.queue(this, e, t);
          re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          re.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, o = 1,
          i = re.Deferred(),
          r = this,
          c = this.length,
          a = function() {
            --o || i.resolveWith(r, [r])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; c--;)(n = Oe.get(r[c], e + "queueHooks")) && n.empty && (o++, n.empty.add(a));
        return a(), i.promise(t)
      }
    });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      We = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
      Se = ["Top", "Right", "Bottom", "Left"],
      Be = function(e, t) {
        return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
      },
      Xe = /^(?:checkbox|radio)$/i,
      Ce = /<([\w:-]+)/,
      Ee = /^$|\/(?:java|ecma)script/i,
      we = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    we.optgroup = we.option, we.tbody = we.tfoot = we.colgroup = we.caption = we.thead, we.th = we.td;
    var xe = /<|&#?\w+;/;
    ! function() {
      var e = J.createDocumentFragment(),
        t = e.appendChild(J.createElement("div")),
        n = J.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), oe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", oe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = /^key/,
      De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Re = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
      global: {},
      add: function(e, t, n, o, i) {
        var r, c, a, s, u, p, l, d, M, f, h, b = Oe.get(e);
        if (b)
          for (n.handler && (r = n, n = r.handler, i = r.selector), n.guid || (n.guid = re.guid++), (s = b.events) || (s = b.events = {}), (c = b.handle) || (c = b.handle = function(t) {
              return void 0 !== re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(ge) || [""], u = t.length; u--;) a = Re.exec(t[u]) || [], M = h = a[1], f = (a[2] || "").split(".").sort(), M && (l = re.event.special[M] || {}, M = (i ? l.delegateType : l.bindType) || M, l = re.event.special[M] || {}, p = re.extend({
            type: M,
            origType: h,
            data: o,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && re.expr.match.needsContext.test(i),
            namespace: f.join(".")
          }, r), (d = s[M]) || (d = s[M] = [], d.delegateCount = 0, l.setup && !1 !== l.setup.call(e, o, f, c) || e.addEventListener && e.addEventListener(M, c)), l.add && (l.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, p) : d.push(p), re.event.global[M] = !0)
      },
      remove: function(e, t, n, o, i) {
        var r, c, a, s, u, p, l, d, M, f, h, b = Oe.hasData(e) && Oe.get(e);
        if (b && (s = b.events)) {
          for (t = (t || "").match(ge) || [""], u = t.length; u--;)
            if (a = Re.exec(t[u]) || [], M = h = a[1], f = (a[2] || "").split(".").sort(), M) {
              for (l = re.event.special[M] || {}, M = (o ? l.delegateType : l.bindType) || M, d = s[M] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = r = d.length; r--;) p = d[r], !i && h !== p.origType || n && n.guid !== p.guid || a && !a.test(p.namespace) || o && o !== p.selector && ("**" !== o || !p.selector) || (d.splice(r, 1), p.selector && d.delegateCount--, l.remove && l.remove.call(e, p));
              c && !d.length && (l.teardown && !1 !== l.teardown.call(e, f, b.handle) || re.removeEvent(e, M, b.handle), delete s[M])
            } else
              for (M in s) re.event.remove(e, M + t[u], n, o, !0);
          re.isEmptyObject(s) && Oe.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        e = re.event.fix(e);
        var t, n, o, i, r, c = [],
          a = K.call(arguments),
          s = (Oe.get(this, "events") || {})[e.type] || [],
          u = re.event.special[e.type] || {};
        if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
          for (c = re.event.handlers.call(this, e, s), t = 0;
            (i = c[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = i.elem, n = 0;
              (r = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (o = ((re.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, a)) && !1 === (e.result = o) && (e.preventDefault(), e.stopPropagation()));
          return u.postDispatch && u.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var n, o, i, r, c = [],
          a = t.delegateCount,
          s = e.target;
        if (a && s.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
          for (; s !== this; s = s.parentNode || this)
            if (1 === s.nodeType && (!0 !== s.disabled || "click" !== e.type)) {
              for (o = [], n = 0; a > n; n++) r = t[n], i = r.selector + " ", void 0 === o[i] && (o[i] = r.needsContext ? re(i, this).index(s) > -1 : re.find(i, this, null, [s]).length), o[i] && o.push(r);
              o.length && c.push({
                elem: s,
                handlers: o
              })
            }
        return a < t.length && c.push({
          elem: this,
          handlers: t.slice(a)
        }), c
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var n, o, i, r = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J, o = n.documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[re.expando]) return e;
        var t, n, o, i = e.type,
          r = e,
          c = this.fixHooks[i];
        for (c || (this.fixHooks[i] = c = De.test(i) ? this.mouseHooks : ke.test(i) ? this.keyHooks : {}), o = c.props ? this.props.concat(c.props) : this.props, e = new re.Event(r), t = o.length; t--;) n = o[t], e[n] = r[n];
        return e.target || (e.target = J), 3 === e.target.nodeType && (e.target = e.target.parentNode), c.filter ? c.filter(e, r) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            return this !== h() && this.focus ? (this.focus(), !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === h() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
          },
          _default: function(e) {
            return re.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, re.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function(e, t) {
      return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? M : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
      constructor: re.Event,
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = M, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = M, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = M, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, re.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      re.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, o = this,
            i = e.relatedTarget,
            r = e.handleObj;
          return i && (i === o || re.contains(o, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), re.fn.extend({
      on: function(e, t, n, o) {
        return b(this, e, t, n, o)
      },
      one: function(e, t, n, o) {
        return b(this, e, t, n, o, 1)
      },
      off: function(e, t, n) {
        var o, i;
        if (e && e.preventDefault && e.handleObj) return o = e.handleObj, re(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = f), this.each(function() {
          re.event.remove(this, e, n, t)
        })
      }
    });
    var Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      je = /<script|<style|<link/i,
      He = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ie = /^true\/(.*)/,
      Ye = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
      htmlPrefilter: function(e) {
        return e.replace(Pe, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var o, i, r, c, a = e.cloneNode(!0),
          s = re.contains(e.ownerDocument, e);
        if (!(oe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
          for (c = p(a), r = p(e), o = 0, i = r.length; i > o; o++) y(r[o], c[o]);
        if (t)
          if (n)
            for (r = r || p(e), c = c || p(a), o = 0, i = r.length; i > o; o++) g(r[o], c[o]);
          else g(e, a);
        return c = p(a, "script"), c.length > 0 && l(c, !s && p(e, "script")), a
      },
      cleanData: function(e) {
        for (var t, n, o, i = re.event.special, r = 0; void 0 !== (n = e[r]); r++)
          if (Le(n)) {
            if (t = n[Oe.expando]) {
              if (t.events)
                for (o in t.events) i[o] ? re.event.remove(n, o) : re.removeEvent(n, o, t.handle);
              n[Oe.expando] = void 0
            }
            n[Te.expando] && (n[Te.expando] = void 0)
          }
      }
    }), re.fn.extend({
      domManip: v,
      detach: function(e) {
        return L(this, e, !0)
      },
      remove: function(e) {
        return L(this, e)
      },
      text: function(e) {
        return ve(this, function(e) {
          return void 0 === e ? re.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return v(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            A(this, e).appendChild(e)
          }
        })
      },
      prepend: function() {
        return v(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = A(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return v(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return v(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(p(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return re.clone(this, e, t)
        })
      },
      html: function(e) {
        return ve(this, function(e) {
          var t = this[0] || {},
            n = 0,
            o = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !je.test(e) && !we[(Ce.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = re.htmlPrefilter(e);
            try {
              for (; o > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(p(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return v(this, arguments, function(t) {
          var n = this.parentNode;
          re.inArray(this, e) < 0 && (re.cleanData(p(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), re.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      re.fn[e] = function(e) {
        for (var n, o = [], i = re(e), r = i.length - 1, c = 0; r >= c; c++) n = c === r ? this : this.clone(!0), re(i[c])[t](n), $.apply(o, n.get());
        return this.pushStack(o)
      }
    });
    var Fe, Ue = {
        HTML: "block",
        BODY: "block"
      },
      Ge = /^margin/,
      Ve = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
      Je = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
      },
      Ke = function(e, t, n, o) {
        var i, r, c = {};
        for (r in t) c[r] = e.style[r], e.style[r] = t[r];
        i = n.apply(e, o || []);
        for (r in t) e.style[r] = c[r];
        return i
      },
      Qe = J.documentElement;
    ! function() {
      function t() {
        a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Qe.appendChild(c);
        var t = e.getComputedStyle(a);
        n = "1%" !== t.top, r = "2px" === t.marginLeft, o = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Qe.removeChild(c)
      }
      var n, o, i, r, c = J.createElement("div"),
        a = J.createElement("div");
      a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", oe.clearCloneStyle = "content-box" === a.style.backgroundClip, c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.appendChild(a), re.extend(oe, {
        pixelPosition: function() {
          return t(), n
        },
        boxSizingReliable: function() {
          return null == o && t(), o
        },
        pixelMarginRight: function() {
          return null == o && t(), i
        },
        reliableMarginLeft: function() {
          return null == o && t(), r
        },
        reliableMarginRight: function() {
          var t, n = a.appendChild(J.createElement("div"));
          return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Qe.appendChild(c), t = !parseFloat(e.getComputedStyle(n).marginRight), Qe.removeChild(c), a.removeChild(n), t
        }
      }))
    }();
    var $e = /^(none|table(?!-c[ea]).+)/,
      Ze = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      et = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      tt = ["Webkit", "O", "Moz", "ms"],
      nt = J.createElement("div").style;
    re.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = N(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: "cssFloat"
      },
      style: function(e, t, n, o) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var i, r, c, a = re.camelCase(t),
            s = e.style;
          return t = re.cssProps[a] || (re.cssProps[a] = _(a) || a), c = re.cssHooks[t] || re.cssHooks[a], void 0 === n ? c && "get" in c && void 0 !== (i = c.get(e, !1, o)) ? i : s[t] : (r = typeof n, "string" === r && (i = We.exec(n)) && i[1] && (n = u(e, t, i), r = "number"), void(null != n && n === n && ("number" === r && (n += i && i[3] || (re.cssNumber[a] ? "" : "px")), oe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), c && "set" in c && void 0 === (n = c.set(e, n, o)) || (s[t] = n))))
        }
      },
      css: function(e, t, n, o) {
        var i, r, c, a = re.camelCase(t);
        return t = re.cssProps[a] || (re.cssProps[a] = _(a) || a), c = re.cssHooks[t] || re.cssHooks[a], c && "get" in c && (i = c.get(e, !0, n)), void 0 === i && (i = N(e, t, o)), "normal" === i && t in et && (i = et[t]), "" === n || n ? (r = parseFloat(i), !0 === n || isFinite(r) ? r || 0 : i) : i
      }
    }), re.each(["height", "width"], function(e, t) {
      re.cssHooks[t] = {
        get: function(e, n, o) {
          return n ? $e.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, Ze, function() {
            return B(e, t, o)
          }) : B(e, t, o) : void 0
        },
        set: function(e, n, o) {
          var i, r = o && Je(e),
            c = o && S(e, t, o, "border-box" === re.css(e, "boxSizing", !1, r), r);
          return c && (i = We.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = re.css(e, t)), W(e, n, c)
        }
      }
    }), re.cssHooks.marginLeft = q(oe.reliableMarginLeft, function(e, t) {
      return t ? (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px" : void 0
    }), re.cssHooks.marginRight = q(oe.reliableMarginRight, function(e, t) {
      return t ? Ke(e, {
        display: "inline-block"
      }, N, [e, "marginRight"]) : void 0
    }), re.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      re.cssHooks[e + t] = {
        expand: function(n) {
          for (var o = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > o; o++) i[e + Se[o] + t] = r[o] || r[o - 2] || r[0];
          return i
        }
      }, Ge.test(e) || (re.cssHooks[e + t].set = W)
    }), re.fn.extend({
      css: function(e, t) {
        return ve(this, function(e, t, n) {
          var o, i, r = {},
            c = 0;
          if (re.isArray(t)) {
            for (o = Je(e), i = t.length; i > c; c++) r[t[c]] = re.css(e, t[c], !1, o);
            return r
          }
          return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return X(this, !0)
      },
      hide: function() {
        return X(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Be(this) ? re(this).show() : re(this).hide()
        })
      }
    }), re.Tween = C, C.prototype = {
      constructor: C,
      init: function(e, t, n, o, i, r) {
        this.elem = e, this.prop = n, this.easing = i || re.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (re.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = C.propHooks[this.prop];
        return e && e.get ? e.get(this) : C.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = C.propHooks[this.prop];
        return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : C.propHooks._default.set(this), this
      }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        },
        set: function(e) {
          re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, re.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, re.fx = C.prototype.init, re.fx.step = {};
    var ot, it, rt = /^(?:toggle|show|hide)$/,
      ct = /queueHooks$/;
    re.Animation = re.extend(R, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return u(n.elem, e, We.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          re.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(ge);
          for (var n, o = 0, i = e.length; i > o; o++) n = e[o], R.tweeners[n] = R.tweeners[n] || [], R.tweeners[n].unshift(t)
        },
        prefilters: [k],
        prefilter: function(e, t) {
          t ? R.prefilters.unshift(e) : R.prefilters.push(e)
        }
      }), re.speed = function(e, t, n) {
        var o = e && "object" == typeof e ? re.extend({}, e) : {
          complete: n || !n && t || re.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !re.isFunction(t) && t
        };
        return o.duration = re.fx.off ? 0 : "number" == typeof o.duration ? o.duration : o.duration in re.fx.speeds ? re.fx.speeds[o.duration] : re.fx.speeds._default, null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
          re.isFunction(o.old) && o.old.call(this), o.queue && re.dequeue(this, o.queue)
        }, o
      }, re.fn.extend({
        fadeTo: function(e, t, n, o) {
          return this.filter(Be).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, o)
        },
        animate: function(e, t, n, o) {
          var i = re.isEmptyObject(e),
            r = re.speed(t, n, o),
            c = function() {
              var t = R(this, re.extend({}, e), r);
              (i || Oe.get(this, "finish")) && t.stop(!0)
            };
          return c.finish = c, i || !1 === r.queue ? this.each(c) : this.queue(r.queue, c)
        },
        stop: function(e, t, n) {
          var o = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              i = null != e && e + "queueHooks",
              r = re.timers,
              c = Oe.get(this);
            if (i) c[i] && c[i].stop && o(c[i]);
            else
              for (i in c) c[i] && c[i].stop && ct.test(i) && o(c[i]);
            for (i = r.length; i--;) r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
            !t && n || re.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, n = Oe.get(this),
              o = n[e + "queue"],
              i = n[e + "queueHooks"],
              r = re.timers,
              c = o ? o.length : 0;
            for (n.finish = !0, re.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
            for (t = 0; c > t; t++) o[t] && o[t].finish && o[t].finish.call(this);
            delete n.finish
          })
        }
      }), re.each(["toggle", "show", "hide"], function(e, t) {
        var n = re.fn[t];
        re.fn[t] = function(e, o, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(w(t, !0), e, o, i)
        }
      }), re.each({
        slideDown: w("show"),
        slideUp: w("hide"),
        slideToggle: w("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        re.fn[e] = function(e, n, o) {
          return this.animate(t, e, n, o)
        }
      }), re.timers = [], re.fx.tick = function() {
        var e, t = 0,
          n = re.timers;
        for (ot = re.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || re.fx.stop(), ot = void 0
      }, re.fx.timer = function(e) {
        re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
      }, re.fx.interval = 13, re.fx.start = function() {
        it || (it = e.setInterval(re.fx.tick, re.fx.interval))
      }, re.fx.stop = function() {
        e.clearInterval(it), it = null
      }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, re.fn.delay = function(t, n) {
        return t = re.fx ? re.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, o) {
          var i = e.setTimeout(n, t);
          o.stop = function() {
            e.clearTimeout(i)
          }
        })
      },
      function() {
        var e = J.createElement("input"),
          t = J.createElement("select"),
          n = t.appendChild(J.createElement("option"));
        e.type = "checkbox", oe.checkOn = "" !== e.value, oe.optSelected = n.selected, t.disabled = !0, oe.optDisabled = !n.disabled, e = J.createElement("input"), e.value = "t", e.type = "radio", oe.radioValue = "t" === e.value
      }();
    var at, st = re.expr.attrHandle;
    re.fn.extend({
      attr: function(e, t) {
        return ve(this, re.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          re.removeAttr(this, e)
        })
      }
    }), re.extend({
      attr: function(e, t, n) {
        var o, i, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = re.find.attr(e, t), null == o ? void 0 : o))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!oe.radioValue && "radio" === t && re.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, o, i = 0,
          r = t && t.match(ge);
        if (r && 1 === e.nodeType)
          for (; n = r[i++];) o = re.propFix[n] || n, re.expr.match.bool.test(n) && (e[o] = !1), e.removeAttribute(n)
      }
    }), at = {
      set: function(e, t, n) {
        return !1 === t ? re.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = st[t] || re.find.attr;
      st[t] = function(e, t, o) {
        var i, r;
        return o || (r = st[t], st[t] = i, i = null != n(e, t, o) ? t.toLowerCase() : null, st[t] = r), i
      }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
      pt = /^(?:a|area)$/i;
    re.fn.extend({
      prop: function(e, t) {
        return ve(this, re.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[re.propFix[e] || e]
        })
      }
    }), re.extend({
      prop: function(e, t, n) {
        var o, i, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, i = re.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = re.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : ut.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), oe.optSelected || (re.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      re.propFix[this.toLowerCase()] = this
    });
    var lt = /[\t\r\n\f]/g;
    re.fn.extend({
      addClass: function(e) {
        var t, n, o, i, r, c, a, s = 0;
        if (re.isFunction(e)) return this.each(function(t) {
          re(this).addClass(e.call(this, t, P(this)))
        });
        if ("string" == typeof e && e)
          for (t = e.match(ge) || []; n = this[s++];)
            if (i = P(n), o = 1 === n.nodeType && (" " + i + " ").replace(lt, " ")) {
              for (c = 0; r = t[c++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
              a = re.trim(o), i !== a && n.setAttribute("class", a)
            }
        return this
      },
      removeClass: function(e) {
        var t, n, o, i, r, c, a, s = 0;
        if (re.isFunction(e)) return this.each(function(t) {
          re(this).removeClass(e.call(this, t, P(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(ge) || []; n = this[s++];)
            if (i = P(n), o = 1 === n.nodeType && (" " + i + " ").replace(lt, " ")) {
              for (c = 0; r = t[c++];)
                for (; o.indexOf(" " + r + " ") > -1;) o = o.replace(" " + r + " ", " ");
              a = re.trim(o), i !== a && n.setAttribute("class", a)
            }
        return this
      },
      toggleClass: function(e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
          re(this).toggleClass(e.call(this, n, P(this), t), t)
        }) : this.each(function() {
          var t, o, i, r;
          if ("string" === n)
            for (o = 0, i = re(this), r = e.match(ge) || []; t = r[o++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
          else void 0 !== e && "boolean" !== n || (t = P(this), t && Oe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Oe.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, o = 0;
        for (t = " " + e + " "; n = this[o++];)
          if (1 === n.nodeType && (" " + P(n) + " ").replace(lt, " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var dt = /\r/g,
      Mt = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
      val: function(e) {
        var t, n, o, i = this[0];
        return arguments.length ? (o = re.isFunction(e), this.each(function(n) {
          var i;
          1 === this.nodeType && (i = o ? e.call(this, n, re(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : re.isArray(i) && (i = re.map(i, function(e) {
            return null == e ? "" : e + ""
          })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
        })) : i ? (t = re.valHooks[i.type] || re.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)) : void 0
      }
    }), re.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = re.find.attr(e, "value");
            return null != t ? t : re.trim(re.text(e)).replace(Mt, " ")
          }
        },
        select: {
          get: function(e) {
            for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, c = r ? null : [], a = r ? i + 1 : o.length, s = 0 > i ? a : r ? i : 0; a > s; s++)
              if (n = o[s], (n.selected || s === i) && (oe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                if (t = re(n).val(), r) return t;
                c.push(t)
              }
            return c
          },
          set: function(e, t) {
            for (var n, o, i = e.options, r = re.makeArray(t), c = i.length; c--;) o = i[c], (o.selected = re.inArray(re.valHooks.option.get(o), r) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), r
          }
        }
      }
    }), re.each(["radio", "checkbox"], function() {
      re.valHooks[this] = {
        set: function(e, t) {
          return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
        }
      }, oe.checkOn || (re.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
      trigger: function(t, n, o, i) {
        var r, c, a, s, u, p, l, d = [o || J],
          M = ne.call(t, "type") ? t.type : t,
          f = ne.call(t, "namespace") ? t.namespace.split(".") : [];
        if (c = a = o = o || J, 3 !== o.nodeType && 8 !== o.nodeType && !ft.test(M + re.event.triggered) && (M.indexOf(".") > -1 && (f = M.split("."), M = f.shift(), f.sort()), u = M.indexOf(":") < 0 && "on" + M, t = t[re.expando] ? t : new re.Event(M, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : re.makeArray(n, [t]), l = re.event.special[M] || {}, i || !l.trigger || !1 !== l.trigger.apply(o, n))) {
          if (!i && !l.noBubble && !re.isWindow(o)) {
            for (s = l.delegateType || M, ft.test(s + M) || (c = c.parentNode); c; c = c.parentNode) d.push(c), a = c;
            a === (o.ownerDocument || J) && d.push(a.defaultView || a.parentWindow || e)
          }
          for (r = 0;
            (c = d[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? s : l.bindType || M, p = (Oe.get(c, "events") || {})[t.type] && Oe.get(c, "handle"), p && p.apply(c, n), (p = u && c[u]) && p.apply && Le(c) && (t.result = p.apply(c, n), !1 === t.result && t.preventDefault());
          return t.type = M, i || t.isDefaultPrevented() || l._default && !1 !== l._default.apply(d.pop(), n) || !Le(o) || u && re.isFunction(o[M]) && !re.isWindow(o) && (a = o[u], a && (o[u] = null), re.event.triggered = M, o[M](), re.event.triggered = void 0, a && (o[u] = a)), t.result
        }
      },
      simulate: function(e, t, n) {
        var o = re.extend(new re.Event, n, {
          type: e,
          isSimulated: !0
        });
        re.event.trigger(o, null, t)
      }
    }), re.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          re.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        return n ? re.event.trigger(e, t, n, !0) : void 0
      }
    }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      re.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), re.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), oe.focusin = "onfocusin" in e, oe.focusin || re.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        re.event.simulate(t, e.target, re.event.fix(e))
      };
      re.event.special[t] = {
        setup: function() {
          var o = this.ownerDocument || this,
            i = Oe.access(o, t);
          i || o.addEventListener(e, n, !0), Oe.access(o, t, (i || 0) + 1)
        },
        teardown: function() {
          var o = this.ownerDocument || this,
            i = Oe.access(o, t) - 1;
          i ? Oe.access(o, t, i) : (o.removeEventListener(e, n, !0), Oe.remove(o, t))
        }
      }
    });
    var ht = e.location,
      bt = re.now(),
      At = /\?/;
    re.parseJSON = function(e) {
      return JSON.parse(e + "")
    }, re.parseXML = function(t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = (new e.DOMParser).parseFromString(t, "text/xml")
      } catch (e) {
        n = void 0
      }
      return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
    };
    var zt = /#.*$/,
      mt = /([?&])_=[^&]*/,
      gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      yt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      vt = /^(?:GET|HEAD)$/,
      Lt = /^\/\//,
      Ot = {},
      Tt = {},
      Nt = "*/".concat("*"),
      qt = J.createElement("a");
    qt.href = ht.href, re.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ht.href,
        type: "GET",
        isLocal: yt.test(ht.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": re.parseJSON,
          "text xml": re.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? I(I(e, re.ajaxSettings), t) : I(re.ajaxSettings, e)
      },
      ajaxPrefilter: j(Ot),
      ajaxTransport: j(Tt),
      ajax: function(t, n) {
        function o(t, n, o, a) {
          var u, l, z, m, y, L = n;
          2 !== g && (g = 2, s && e.clearTimeout(s), i = void 0, c = a || "", v.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, o && (m = Y(d, v, o)), m = F(d, m, v, u), u ? (d.ifModified && (y = v.getResponseHeader("Last-Modified"), y && (re.lastModified[r] = y), (y = v.getResponseHeader("etag")) && (re.etag[r] = y)), 204 === t || "HEAD" === d.type ? L = "nocontent" : 304 === t ? L = "notmodified" : (L = m.state, l = m.data, z = m.error, u = !z)) : (z = L, !t && L || (L = "error", 0 > t && (t = 0))), v.status = t, v.statusText = (n || L) + "", u ? h.resolveWith(M, [l, L, v]) : h.rejectWith(M, [v, L, z]), v.statusCode(A), A = void 0, p && f.trigger(u ? "ajaxSuccess" : "ajaxError", [v, d, u ? l : z]), b.fireWith(M, [v, L]), p && (f.trigger("ajaxComplete", [v, d]), --re.active || re.event.trigger("ajaxStop")))
        }
        "object" == typeof t && (n = t, t = void 0), n = n || {};
        var i, r, c, a, s, u, p, l, d = re.ajaxSetup({}, n),
          M = d.context || d,
          f = d.context && (M.nodeType || M.jquery) ? re(M) : re.event,
          h = re.Deferred(),
          b = re.Callbacks("once memory"),
          A = d.statusCode || {},
          z = {},
          m = {},
          g = 0,
          y = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === g) {
                if (!a)
                  for (a = {}; t = gt.exec(c);) a[t[1].toLowerCase()] = t[2];
                t = a[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === g ? c : null
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return g || (e = m[n] = m[n] || e, z[e] = t), this
            },
            overrideMimeType: function(e) {
              return g || (d.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (2 > g)
                  for (t in e) A[t] = [A[t], e[t]];
                else v.always(e[v.status]);
              return this
            },
            abort: function(e) {
              var t = e || y;
              return i && i.abort(t), o(0, t), this
            }
          };
        if (h.promise(v).complete = b.add, v.success = v.done, v.error = v.fail, d.url = ((t || d.url || ht.href) + "").replace(zt, "").replace(Lt, ht.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = re.trim(d.dataType || "*").toLowerCase().match(ge) || [""], null == d.crossDomain) {
          u = J.createElement("a");
          try {
            u.href = d.url, u.href = u.href, d.crossDomain = qt.protocol + "//" + qt.host != u.protocol + "//" + u.host
          } catch (e) {
            d.crossDomain = !0
          }
        }
        if (d.data && d.processData && "string" != typeof d.data && (d.data = re.param(d.data, d.traditional)), H(Ot, d, n, v), 2 === g) return v;
        p = re.event && d.global, p && 0 == re.active++ && re.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !vt.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (At.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = mt.test(r) ? r.replace(mt, "$1_=" + bt++) : r + (At.test(r) ? "&" : "?") + "_=" + bt++)), d.ifModified && (re.lastModified[r] && v.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && v.setRequestHeader("If-None-Match", re.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && v.setRequestHeader("Content-Type", d.contentType), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Nt + "; q=0.01" : "") : d.accepts["*"]);
        for (l in d.headers) v.setRequestHeader(l, d.headers[l]);
        if (d.beforeSend && (!1 === d.beforeSend.call(M, v, d) || 2 === g)) return v.abort();
        y = "abort";
        for (l in {
            success: 1,
            error: 1,
            complete: 1
          }) v[l](d[l]);
        if (i = H(Tt, d, n, v)) {
          if (v.readyState = 1, p && f.trigger("ajaxSend", [v, d]), 2 === g) return v;
          d.async && d.timeout > 0 && (s = e.setTimeout(function() {
            v.abort("timeout")
          }, d.timeout));
          try {
            g = 1, i.send(z, o)
          } catch (e) {
            if (!(2 > g)) throw e;
            o(-1, e)
          }
        } else o(-1, "No Transport");
        return v
      },
      getJSON: function(e, t, n) {
        return re.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return re.get(e, void 0, t, "script")
      }
    }), re.each(["get", "post"], function(e, t) {
      re[t] = function(e, n, o, i) {
        return re.isFunction(n) && (i = i || o, o = n, n = void 0), re.ajax(re.extend({
          url: e,
          type: t,
          dataType: i,
          data: n,
          success: o
        }, re.isPlainObject(e) && e))
      }
    }), re._evalUrl = function(e) {
      return re.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    }, re.fn.extend({
      wrapAll: function(e) {
        var t;
        return re.isFunction(e) ? this.each(function(t) {
          re(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      },
      wrapInner: function(e) {
        return re.isFunction(e) ? this.each(function(t) {
          re(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = re(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = re.isFunction(e);
        return this.each(function(n) {
          re(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
        }).end()
      }
    }), re.expr.filters.hidden = function(e) {
      return !re.expr.filters.visible(e)
    }, re.expr.filters.visible = function(e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var _t = /%20/g,
      Wt = /\[\]$/,
      St = /\r?\n/g,
      Bt = /^(?:submit|button|image|reset|file)$/i,
      Xt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
      var n, o = [],
        i = function(e, t) {
          t = re.isFunction(t) ? t() : null == t ? "" : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
        i(this.name, this.value)
      });
      else
        for (n in e) U(n, e[n], t, i);
      return o.join("&").replace(_t, "+")
    }, re.fn.extend({
      serialize: function() {
        return re.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = re.prop(this, "elements");
          return e ? re.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !re(this).is(":disabled") && Xt.test(this.nodeName) && !Bt.test(e) && (this.checked || !Xe.test(e))
        }).map(function(e, t) {
          var n = re(this).val();
          return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(St, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(St, "\r\n")
          }
        }).get()
      }
    }), re.ajaxSettings.xhr = function() {
      try {
        return new e.XMLHttpRequest
      } catch (e) {}
    };
    var Ct = {
        0: 200,
        1223: 204
      },
      Et = re.ajaxSettings.xhr();
    oe.cors = !!Et && "withCredentials" in Et, oe.ajax = Et = !!Et, re.ajaxTransport(function(t) {
      var n, o;
      return oe.cors || Et && !t.crossDomain ? {
        send: function(i, r) {
          var c, a = t.xhr();
          if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
            for (c in t.xhrFields) a[c] = t.xhrFields[c];
          t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
          for (c in i) a.setRequestHeader(c, i[c]);
          n = function(e) {
            return function() {
              n && (n = o = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Ct[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                binary: a.response
              } : {
                text: a.responseText
              }, a.getAllResponseHeaders()))
            }
          }, a.onload = n(), o = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = o : a.onreadystatechange = function() {
            4 === a.readyState && e.setTimeout(function() {
              n && o()
            })
          }, n = n("abort");
          try {
            a.send(t.hasContent && t.data || null)
          } catch (e) {
            if (n) throw e
          }
        },
        abort: function() {
          n && n()
        }
      } : void 0
    }), re.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return re.globalEval(e), e
        }
      }
    }), re.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), re.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(o, i) {
            t = re("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
            }), J.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var wt = [],
      xt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = wt.pop() || re.expando + "_" + bt++;
        return this[e] = !0, e
      }
    }), re.ajaxPrefilter("json jsonp", function(t, n, o) {
      var i, r, c, a = !1 !== t.jsonp && (xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && xt.test(t.data) && "data");
      return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(xt, "$1" + i) : !1 !== t.jsonp && (t.url += (At.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
        return c || re.error(i + " was not called"), c[0]
      }, t.dataTypes[0] = "json", r = e[i], e[i] = function() {
        c = arguments
      }, o.always(function() {
        void 0 === r ? re(e).removeProp(i) : e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, wt.push(i)), c && re.isFunction(r) && r(c[0]), c = r = void 0
      }), "script") : void 0
    }), re.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || J;
      var o = fe.exec(e),
        i = !n && [];
      return o ? [t.createElement(o[1])] : (o = d([e], t, i), i && i.length && re(i).remove(), re.merge([], o.childNodes))
    };
    var kt = re.fn.load;
    re.fn.load = function(e, t, n) {
      if ("string" != typeof e && kt) return kt.apply(this, arguments);
      var o, i, r, c = this,
        a = e.indexOf(" ");
      return a > -1 && (o = re.trim(e.slice(a)), e = e.slice(0, a)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), c.length > 0 && re.ajax({
        url: e,
        type: i || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        r = arguments, c.html(o ? re("<div>").append(re.parseHTML(e)).find(o) : e)
      }).always(n && function(e, t) {
        c.each(function() {
          n.apply(this, r || [e.responseText, t, e])
        })
      }), this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      re.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), re.expr.filters.animated = function(e) {
      return re.grep(re.timers, function(t) {
        return e === t.elem
      }).length
    }, re.offset = {
      setOffset: function(e, t, n) {
        var o, i, r, c, a, s, u, p = re.css(e, "position"),
          l = re(e),
          d = {};
        "static" === p && (e.style.position = "relative"), a = l.offset(), r = re.css(e, "top"), s = re.css(e, "left"), u = ("absolute" === p || "fixed" === p) && (r + s).indexOf("auto") > -1, u ? (o = l.position(), c = o.top, i = o.left) : (c = parseFloat(r) || 0, i = parseFloat(s) || 0), re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))), null != t.top && (d.top = t.top - a.top + c), null != t.left && (d.left = t.left - a.left + i), "using" in t ? t.using.call(e, d) : l.css(d)
      }
    }, re.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          re.offset.setOffset(this, e, t)
        });
        var t, n, o = this[0],
          i = {
            top: 0,
            left: 0
          },
          r = o && o.ownerDocument;
        return r ? (t = r.documentElement, re.contains(t, o) ? (i = o.getBoundingClientRect(), n = G(r), {
          top: i.top + n.pageYOffset - t.clientTop,
          left: i.left + n.pageXOffset - t.clientLeft
        }) : i) : void 0
      },
      position: function() {
        if (this[0]) {
          var e, t, n = this[0],
            o = {
              top: 0,
              left: 0
            };
          return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (o = e.offset()), o.top += re.css(e[0], "borderTopWidth", !0), o.left += re.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - o.top - re.css(n, "marginTop", !0),
            left: t.left - o.left - re.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
          return e || Qe
        })
      }
    }), re.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      re.fn[e] = function(o) {
        return ve(this, function(e, o, i) {
          var r = G(e);
          return void 0 === i ? r ? r[t] : e[o] : void(r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : e[o] = i)
        }, e, o, arguments.length)
      }
    }), re.each(["top", "left"], function(e, t) {
      re.cssHooks[t] = q(oe.pixelPosition, function(e, n) {
        return n ? (n = N(e, t), Ve.test(n) ? re(e).position()[t] + "px" : n) : void 0
      })
    }), re.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      re.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, o) {
        re.fn[o] = function(o, i) {
          var r = arguments.length && (n || "boolean" != typeof o),
            c = n || (!0 === o || !0 === i ? "margin" : "border");
          return ve(this, function(t, n, o) {
            var i;
            return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? re.css(t, n, c) : re.style(t, n, o, c)
          }, t, r ? o : void 0, r, null)
        }
      })
    }), re.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, o) {
        return this.on(t, e, n, o)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      size: function() {
        return this.length
      }
    }), re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
      return re
    });
    var Dt = e.jQuery,
      Rt = e.$;
    return re.noConflict = function(t) {
      return e.$ === re && (e.$ = Rt), t && e.jQuery === re && (e.jQuery = Dt), re
    }, t || (e.jQuery = e.$ = re), re
  }),
  function() {
    var e, t = this,
      n = t.Backbone,
      o = [],
      i = o.slice;
    e = "undefined" != typeof exports ? exports : t.Backbone = {}, e.VERSION = "1.1.0";
    var r = t._;
    r || void 0 === require || (r = require("underscore")), e.$ = t.jQuery || t.Zepto || t.ender || t.$, e.noConflict = function() {
      return t.Backbone = n, this
    }, e.emulateHTTP = !1, e.emulateJSON = !1;
    var c = e.Events = {
        on: function(e, t, n) {
          return s(this, "on", e, [t, n]) && t ? (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
            callback: t,
            context: n,
            ctx: n || this
          }), this) : this
        },
        once: function(e, t, n) {
          if (!s(this, "once", e, [t, n]) || !t) return this;
          var o = this,
            i = r.once(function() {
              o.off(e, i), t.apply(this, arguments)
            });
          return i._callback = t, this.on(e, i, n)
        },
        off: function(e, t, n) {
          var o, i, c, a, u, p, l, d;
          if (!this._events || !s(this, "off", e, [t, n])) return this;
          if (!e && !t && !n) return this._events = {}, this;
          for (a = e ? [e] : r.keys(this._events), u = 0, p = a.length; u < p; u++)
            if (e = a[u], c = this._events[e]) {
              if (this._events[e] = o = [], t || n)
                for (l = 0, d = c.length; l < d; l++) i = c[l], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && o.push(i);
              o.length || delete this._events[e]
            }
          return this
        },
        trigger: function(e) {
          if (!this._events) return this;
          var t = i.call(arguments, 1);
          if (!s(this, "trigger", e, t)) return this;
          var n = this._events[e],
            o = this._events.all;
          return n && u(n, t), o && u(o, arguments), this
        },
        stopListening: function(e, t, n) {
          var o = this._listeningTo;
          if (!o) return this;
          var i = !t && !n;
          n || "object" != typeof t || (n = this), e && ((o = {})[e._listenId] = e);
          for (var c in o) e = o[c], e.off(t, n, this), (i || r.isEmpty(e._events)) && delete this._listeningTo[c];
          return this
        }
      },
      a = /\s+/,
      s = function(e, t, n, o) {
        if (!n) return !0;
        if ("object" == typeof n) {
          for (var i in n) e[t].apply(e, [i, n[i]].concat(o));
          return !1
        }
        if (a.test(n)) {
          for (var r = n.split(a), c = 0, s = r.length; c < s; c++) e[t].apply(e, [r[c]].concat(o));
          return !1
        }
        return !0
      },
      u = function(e, t) {
        var n, o = -1,
          i = e.length,
          r = t[0],
          c = t[1],
          a = t[2];
        switch (t.length) {
          case 0:
            for (; ++o < i;)(n = e[o]).callback.call(n.ctx);
            return;
          case 1:
            for (; ++o < i;)(n = e[o]).callback.call(n.ctx, r);
            return;
          case 2:
            for (; ++o < i;)(n = e[o]).callback.call(n.ctx, r, c);
            return;
          case 3:
            for (; ++o < i;)(n = e[o]).callback.call(n.ctx, r, c, a);
            return;
          default:
            for (; ++o < i;)(n = e[o]).callback.apply(n.ctx, t)
        }
      },
      p = {
        listenTo: "on",
        listenToOnce: "once"
      };
    r.each(p, function(e, t) {
      c[t] = function(t, n, o) {
        return (this._listeningTo || (this._listeningTo = {}))[t._listenId || (t._listenId = r.uniqueId("l"))] = t, o || "object" != typeof n || (o = this), t[e](n, o, this), this
      }
    }), c.bind = c.on, c.unbind = c.off, r.extend(e, c);
    var l = e.Model = function(e, t) {
      var n = e || {};
      t || (t = {}), this.cid = r.uniqueId("c"), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (n = this.parse(n, t) || {}), n = r.defaults({}, n, r.result(this, "defaults")), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
    };
    r.extend(l.prototype, c, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      initialize: function() {},
      toJSON: function(e) {
        return r.clone(this.attributes)
      },
      sync: function() {
        return e.sync.apply(this, arguments)
      },
      get: function(e) {
        return this.attributes[e]
      },
      escape: function(e) {
        return r.escape(this.get(e))
      },
      has: function(e) {
        return null != this.get(e)
      },
      set: function(e, t, n) {
        var o, i, c, a, s, u, p, l;
        if (null == e) return this;
        if ("object" == typeof e ? (i = e, n = t) : (i = {})[e] = t, n || (n = {}), !this._validate(i, n)) return !1;
        c = n.unset, s = n.silent, a = [], u = this._changing, this._changing = !0, u || (this._previousAttributes = r.clone(this.attributes), this.changed = {}), l = this.attributes, p = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
        for (o in i) t = i[o], r.isEqual(l[o], t) || a.push(o), r.isEqual(p[o], t) ? delete this.changed[o] : this.changed[o] = t, c ? delete l[o] : l[o] = t;
        if (!s) {
          a.length && (this._pending = !0);
          for (var d = 0, M = a.length; d < M; d++) this.trigger("change:" + a[d], this, l[a[d]], n)
        }
        if (u) return this;
        if (!s)
          for (; this._pending;) this._pending = !1, this.trigger("change", this, n);
        return this._pending = !1, this._changing = !1, this
      },
      unset: function(e, t) {
        return this.set(e, void 0, r.extend({}, t, {
          unset: !0
        }))
      },
      clear: function(e) {
        var t = {};
        for (var n in this.attributes) t[n] = void 0;
        return this.set(t, r.extend({}, e, {
          unset: !0
        }))
      },
      hasChanged: function(e) {
        return null == e ? !r.isEmpty(this.changed) : r.has(this.changed, e)
      },
      changedAttributes: function(e) {
        if (!e) return !!this.hasChanged() && r.clone(this.changed);
        var t, n = !1,
          o = this._changing ? this._previousAttributes : this.attributes;
        for (var i in e) r.isEqual(o[i], t = e[i]) || ((n || (n = {}))[i] = t);
        return n
      },
      previous: function(e) {
        return null != e && this._previousAttributes ? this._previousAttributes[e] : null
      },
      previousAttributes: function() {
        return r.clone(this._previousAttributes)
      },
      fetch: function(e) {
        e = e ? r.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
        var t = this,
          n = e.success;
        return e.success = function(o) {
          if (!t.set(t.parse(o, e), e)) return !1;
          n && n(t, o, e), t.trigger("sync", t, o, e)
        }, x(this, e), this.sync("read", this, e)
      },
      save: function(e, t, n) {
        var o, i, c, a = this.attributes;
        if (null == e || "object" == typeof e ? (o = e, n = t) : (o = {})[e] = t, n = r.extend({
            validate: !0
          }, n), o && !n.wait) {
          if (!this.set(o, n)) return !1
        } else if (!this._validate(o, n)) return !1;
        o && n.wait && (this.attributes = r.extend({}, a, o)), void 0 === n.parse && (n.parse = !0);
        var s = this,
          u = n.success;
        return n.success = function(e) {
          s.attributes = a;
          var t = s.parse(e, n);
          if (n.wait && (t = r.extend(o || {}, t)), r.isObject(t) && !s.set(t, n)) return !1;
          u && u(s, e, n), s.trigger("sync", s, e, n)
        }, x(this, n), i = this.isNew() ? "create" : n.patch ? "patch" : "update", "patch" === i && (n.attrs = o), c = this.sync(i, this, n), o && n.wait && (this.attributes = a), c
      },
      destroy: function(e) {
        e = e ? r.clone(e) : {};
        var t = this,
          n = e.success,
          o = function() {
            t.trigger("destroy", t, t.collection, e)
          };
        if (e.success = function(i) {
            (e.wait || t.isNew()) && o(), n && n(t, i, e), t.isNew() || t.trigger("sync", t, i, e)
          }, this.isNew()) return e.success(), !1;
        x(this, e);
        var i = this.sync("delete", this, e);
        return e.wait || o(), i
      },
      url: function() {
        var e = r.result(this, "urlRoot") || r.result(this.collection, "url") || w();
        return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
      },
      parse: function(e, t) {
        return e
      },
      clone: function() {
        return new this.constructor(this.attributes)
      },
      isNew: function() {
        return null == this.id
      },
      isValid: function(e) {
        return this._validate({}, r.extend(e || {}, {
          validate: !0
        }))
      },
      _validate: function(e, t) {
        if (!t.validate || !this.validate) return !0;
        e = r.extend({}, this.attributes, e);
        var n = this.validationError = this.validate(e, t) || null;
        return !n || (this.trigger("invalid", this, n, r.extend(t, {
          validationError: n
        })), !1)
      }
    });
    var d = ["keys", "values", "pairs", "invert", "pick", "omit"];
    r.each(d, function(e) {
      l.prototype[e] = function() {
        var t = i.call(arguments);
        return t.unshift(this.attributes), r[e].apply(r, t)
      }
    });
    var M = e.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, r.extend({
          silent: !0
        }, t))
      },
      f = {
        add: !0,
        remove: !0,
        merge: !0
      },
      h = {
        add: !0,
        remove: !1
      };
    r.extend(M.prototype, c, {
      model: l,
      initialize: function() {},
      toJSON: function(e) {
        return this.map(function(t) {
          return t.toJSON(e)
        })
      },
      sync: function() {
        return e.sync.apply(this, arguments)
      },
      add: function(e, t) {
        return this.set(e, r.extend({
          merge: !1
        }, t, h))
      },
      remove: function(e, t) {
        var n = !r.isArray(e);
        e = n ? [e] : r.clone(e), t || (t = {});
        var o, i, c, a;
        for (o = 0, i = e.length; o < i; o++)(a = e[o] = this.get(e[o])) && (delete this._byId[a.id], delete this._byId[a.cid], c = this.indexOf(a), this.models.splice(c, 1), this.length--, t.silent || (t.index = c, a.trigger("remove", a, this, t)), this._removeReference(a));
        return n ? e[0] : e
      },
      set: function(e, t) {
        t = r.defaults({}, t, f), t.parse && (e = this.parse(e, t));
        var n = !r.isArray(e);
        e = n ? e ? [e] : [] : r.clone(e);
        var o, i, c, a, s, u, p, d = t.at,
          M = this.model,
          h = this.comparator && null == d && !1 !== t.sort,
          b = r.isString(this.comparator) ? this.comparator : null,
          A = [],
          z = [],
          m = {},
          g = t.add,
          y = t.merge,
          v = t.remove,
          L = !(h || !g || !v) && [];
        for (o = 0, i = e.length; o < i; o++) {
          if (s = e[o], c = s instanceof l ? a = s : s[M.prototype.idAttribute],
            u = this.get(c)) v && (m[u.cid] = !0), y && (s = s === a ? a.attributes : s, t.parse && (s = u.parse(s, t)), u.set(s, t), h && !p && u.hasChanged(b) && (p = !0)), e[o] = u;
          else if (g) {
            if (!(a = e[o] = this._prepareModel(s, t))) continue;
            A.push(a), a.on("all", this._onModelEvent, this), this._byId[a.cid] = a, null != a.id && (this._byId[a.id] = a)
          }
          L && L.push(u || a)
        }
        if (v) {
          for (o = 0, i = this.length; o < i; ++o) m[(a = this.models[o]).cid] || z.push(a);
          z.length && this.remove(z, t)
        }
        if (A.length || L && L.length)
          if (h && (p = !0), this.length += A.length, null != d)
            for (o = 0, i = A.length; o < i; o++) this.models.splice(d + o, 0, A[o]);
          else {
            L && (this.models.length = 0);
            var O = L || A;
            for (o = 0, i = O.length; o < i; o++) this.models.push(O[o])
          }
        if (p && this.sort({
            silent: !0
          }), !t.silent) {
          for (o = 0, i = A.length; o < i; o++)(a = A[o]).trigger("add", a, this, t);
          (p || L && L.length) && this.trigger("sort", this, t)
        }
        return n ? e[0] : e
      },
      reset: function(e, t) {
        t || (t = {});
        for (var n = 0, o = this.models.length; n < o; n++) this._removeReference(this.models[n]);
        return t.previousModels = this.models, this._reset(), e = this.add(e, r.extend({
          silent: !0
        }, t)), t.silent || this.trigger("reset", this, t), e
      },
      push: function(e, t) {
        return this.add(e, r.extend({
          at: this.length
        }, t))
      },
      pop: function(e) {
        var t = this.at(this.length - 1);
        return this.remove(t, e), t
      },
      unshift: function(e, t) {
        return this.add(e, r.extend({
          at: 0
        }, t))
      },
      shift: function(e) {
        var t = this.at(0);
        return this.remove(t, e), t
      },
      slice: function() {
        return i.apply(this.models, arguments)
      },
      get: function(e) {
        if (null != e) return this._byId[e.id] || this._byId[e.cid] || this._byId[e]
      },
      at: function(e) {
        return this.models[e]
      },
      where: function(e, t) {
        return r.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
          for (var n in e)
            if (e[n] !== t.get(n)) return !1;
          return !0
        })
      },
      findWhere: function(e) {
        return this.where(e, !0)
      },
      sort: function(e) {
        if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
        return e || (e = {}), r.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(r.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
      },
      pluck: function(e) {
        return r.invoke(this.models, "get", e)
      },
      fetch: function(e) {
        e = e ? r.clone(e) : {}, void 0 === e.parse && (e.parse = !0);
        var t = e.success,
          n = this;
        return e.success = function(o) {
          var i = e.reset ? "reset" : "set";
          n[i](o, e), t && t(n, o, e), n.trigger("sync", n, o, e)
        }, x(this, e), this.sync("read", this, e)
      },
      create: function(e, t) {
        if (t = t ? r.clone(t) : {}, !(e = this._prepareModel(e, t))) return !1;
        t.wait || this.add(e, t);
        var n = this,
          o = t.success;
        return t.success = function(e, t, i) {
          i.wait && n.add(e, i), o && o(e, t, i)
        }, e.save(null, t), e
      },
      parse: function(e, t) {
        return e
      },
      clone: function() {
        return new this.constructor(this.models)
      },
      _reset: function() {
        this.length = 0, this.models = [], this._byId = {}
      },
      _prepareModel: function(e, t) {
        if (e instanceof l) return e.collection || (e.collection = this), e;
        t = t ? r.clone(t) : {}, t.collection = this;
        var n = new this.model(e, t);
        return n.validationError ? (this.trigger("invalid", this, n.validationError, t), !1) : n
      },
      _removeReference: function(e) {
        this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
      },
      _onModelEvent: function(e, t, n, o) {
        ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, o), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
      }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    r.each(b, function(e) {
      M.prototype[e] = function() {
        var t = i.call(arguments);
        return t.unshift(this.models), r[e].apply(r, t)
      }
    });
    var A = ["groupBy", "countBy", "sortBy"];
    r.each(A, function(e) {
      M.prototype[e] = function(t, n) {
        var o = r.isFunction(t) ? t : function(e) {
          return e.get(t)
        };
        return r[e](this.models, o, n)
      }
    });
    var z = e.View = function(e) {
        this.cid = r.uniqueId("view"), e || (e = {}), r.extend(this, r.pick(e, g)), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
      },
      m = /^(\S+)\s*(.*)$/,
      g = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    r.extend(z.prototype, c, {
      tagName: "div",
      $: function(e) {
        return this.$el.find(e)
      },
      initialize: function() {},
      render: function() {
        return this
      },
      remove: function() {
        return this.$el.remove(), this.stopListening(), this
      },
      setElement: function(t, n) {
        return this.$el && this.undelegateEvents(), this.$el = t instanceof e.$ ? t : e.$(t), this.el = this.$el[0], !1 !== n && this.delegateEvents(), this
      },
      delegateEvents: function(e) {
        if (!e && !(e = r.result(this, "events"))) return this;
        this.undelegateEvents();
        for (var t in e) {
          var n = e[t];
          if (r.isFunction(n) || (n = this[e[t]]), n) {
            var o = t.match(m),
              i = o[1],
              c = o[2];
            n = r.bind(n, this), i += ".delegateEvents" + this.cid, "" === c ? this.$el.on(i, n) : this.$el.on(i, c, n)
          }
        }
        return this
      },
      undelegateEvents: function() {
        return this.$el.off(".delegateEvents" + this.cid), this
      },
      _ensureElement: function() {
        if (this.el) this.setElement(r.result(this, "el"), !1);
        else {
          var t = r.extend({}, r.result(this, "attributes"));
          this.id && (t.id = r.result(this, "id")), this.className && (t.class = r.result(this, "className"));
          var n = e.$("<" + r.result(this, "tagName") + ">").attr(t);
          this.setElement(n, !1)
        }
      }
    }), e.sync = function(t, n, o) {
      var i = v[t];
      r.defaults(o || (o = {}), {
        emulateHTTP: e.emulateHTTP,
        emulateJSON: e.emulateJSON
      });
      var c = {
        type: i,
        dataType: "json"
      };
      if (o.url || (c.url = r.result(n, "url") || w()), null != o.data || !n || "create" !== t && "update" !== t && "patch" !== t || (c.contentType = "application/json", c.data = JSON.stringify(o.attrs || n.toJSON(o))), o.emulateJSON && (c.contentType = "application/x-www-form-urlencoded", c.data = c.data ? {
          model: c.data
        } : {}), o.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
        c.type = "POST", o.emulateJSON && (c.data._method = i);
        var a = o.beforeSend;
        o.beforeSend = function(e) {
          if (e.setRequestHeader("X-HTTP-Method-Override", i), a) return a.apply(this, arguments)
        }
      }
      "GET" === c.type || o.emulateJSON || (c.processData = !1), "PATCH" === c.type && y && (c.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP")
      });
      var s = o.xhr = e.ajax(r.extend(c, o));
      return n.trigger("request", n, s, o), s
    };
    var y = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
      v = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
      };
    e.ajax = function() {
      return e.$.ajax.apply(e.$, arguments)
    };
    var L = e.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
      },
      O = /\((.*?)\)/g,
      T = /(\(\?)?:\w+/g,
      N = /\*\w+/g,
      q = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    r.extend(L.prototype, c, {
      initialize: function() {},
      route: function(t, n, o) {
        r.isRegExp(t) || (t = this._routeToRegExp(t)), r.isFunction(n) && (o = n, n = ""), o || (o = this[n]);
        var i = this;
        return e.history.route(t, function(r) {
          var c = i._extractParameters(t, r);
          o && o.apply(i, c), i.trigger.apply(i, ["route:" + n].concat(c)), i.trigger("route", n, c), e.history.trigger("route", i, n, c)
        }), this
      },
      navigate: function(t, n) {
        return e.history.navigate(t, n), this
      },
      _bindRoutes: function() {
        if (this.routes) {
          this.routes = r.result(this, "routes");
          for (var e, t = r.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
        }
      },
      _routeToRegExp: function(e) {
        return e = e.replace(q, "\\$&").replace(O, "(?:$1)?").replace(T, function(e, t) {
          return t ? e : "([^/]+)"
        }).replace(N, "(.*?)"), new RegExp("^" + e + "$")
      },
      _extractParameters: function(e, t) {
        var n = e.exec(t).slice(1);
        return r.map(n, function(e) {
          return e ? decodeURIComponent(e) : null
        })
      }
    });
    var _ = e.History = function() {
        this.handlers = [], r.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
      },
      W = /^[#\/]|\s+$/g,
      S = /^\/+|\/+$/g,
      B = /msie [\w.]+/,
      X = /\/$/,
      C = /[?#].*$/;
    _.started = !1, r.extend(_.prototype, c, {
      interval: 50,
      getHash: function(e) {
        var t = (e || this).location.href.match(/#(.*)$/);
        return t ? t[1] : ""
      },
      getFragment: function(e, t) {
        if (null == e)
          if (this._hasPushState || !this._wantsHashChange || t) {
            e = this.location.pathname;
            var n = this.root.replace(X, "");
            e.indexOf(n) || (e = e.slice(n.length))
          } else e = this.getHash();
        return e.replace(W, "")
      },
      start: function(t) {
        if (_.started) throw new Error("Backbone.history has already been started");
        _.started = !0, this.options = r.extend({
          root: "/"
        }, this.options, t), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
        var n = this.getFragment(),
          o = document.documentMode,
          i = B.exec(navigator.userAgent.toLowerCase()) && (!o || o <= 7);
        this.root = ("/" + this.root + "/").replace(S, "/"), i && this._wantsHashChange && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(n)), this._hasPushState ? e.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !i ? e.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = n;
        var c = this.location,
          a = c.pathname.replace(/[^\/]$/, "$&/") === this.root;
        if (this._wantsHashChange && this._wantsPushState) {
          if (!this._hasPushState && !a) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
          this._hasPushState && a && c.hash && (this.fragment = this.getHash().replace(W, ""), this.history.replaceState({}, document.title, this.root + this.fragment + c.search))
        }
        if (!this.options.silent) return this.loadUrl()
      },
      stop: function() {
        e.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), _.started = !1
      },
      route: function(e, t) {
        this.handlers.unshift({
          route: e,
          callback: t
        })
      },
      checkUrl: function(e) {
        var t = this.getFragment();
        if (t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment) return !1;
        this.iframe && this.navigate(t), this.loadUrl()
      },
      loadUrl: function(e) {
        return e = this.fragment = this.getFragment(e), r.any(this.handlers, function(t) {
          if (t.route.test(e)) return t.callback(e), !0
        })
      },
      navigate: function(e, t) {
        if (!_.started) return !1;
        t && !0 !== t || (t = {
          trigger: !!t
        });
        var n = this.root + (e = this.getFragment(e || ""));
        if (e = e.replace(C, ""), this.fragment !== e) {
          if (this.fragment = e, "" === e && "/" !== n && (n = n.slice(0, -1)), this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
          else {
            if (!this._wantsHashChange) return this.location.assign(n);
            this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
          }
          return t.trigger ? this.loadUrl(e) : void 0
        }
      },
      _updateHash: function(e, t, n) {
        if (n) {
          var o = e.href.replace(/(javascript:|#).*$/, "");
          e.replace(o + "#" + t)
        } else e.hash = "#" + t
      }
    }), e.history = new _;
    var E = function(e, t) {
      var n, o = this;
      n = e && r.has(e, "constructor") ? e.constructor : function() {
        return o.apply(this, arguments)
      }, r.extend(n, o, t);
      var i = function() {
        this.constructor = n
      };
      return i.prototype = o.prototype, n.prototype = new i, e && r.extend(n.prototype, e), n.__super__ = o.prototype, n
    };
    l.extend = M.extend = L.extend = z.extend = _.extend = E;
    var w = function() {
        throw new Error('A "url" property or function must be specified')
      },
      x = function(e, t) {
        var n = t.error;
        t.error = function(o) {
          n && n(e, o, t), e.trigger("error", e, o, t)
        }
      }
  }.call(this), define("backbone", ["underscore", "jquery"], function(e) {
    return function() {
      return e.Backbone
    }
  }(this));
var dust = {};
! function(dust) {
  function Context(e, t, n, o) {
    this.stack = e, this.global = t, this.blocks = n, this.templateName = o
  }

  function Stack(e, t, n, o) {
    this.tail = t, this.isObject = e && "object" == typeof e, this.head = e, this.index = n, this.of = o
  }

  function Stub(e) {
    this.head = new Chunk(this), this.callback = e, this.out = ""
  }

  function Stream() {
    this.head = new Chunk(this)
  }

  function Chunk(e, t, n) {
    this.root = e, this.next = t, this.data = [], this.flushable = !1, this.taps = n
  }

  function Tap(e, t) {
    this.head = e, this.tail = t
  }
  if (dust) {
    var ERROR = "ERROR",
      WARN = "WARN",
      INFO = "INFO",
      DEBUG = "DEBUG",
      levels = [DEBUG, INFO, WARN, ERROR],
      EMPTY_FUNC = function() {},
      logger = EMPTY_FUNC;
    dust.isDebug = !1, dust.debugLevel = INFO, "undefined" != typeof window && window && window.console && window.console.log ? logger = window.console.log : "undefined" != typeof console && console && console.log && (logger = console.log), dust.log = function(e, t) {
      t = t || INFO, dust.isDebug && levels.indexOf(t) >= levels.indexOf(dust.debugLevel) && (dust.logQueue || (dust.logQueue = []), dust.logQueue.push({
        message: e,
        type: t
      }), logger.call(console || window.console, "[DUST " + t + "]: " + e))
    }, dust.onError = function(e, t) {
      if (dust.log(e.message || e, ERROR), dust.isDebug) throw e;
      return t
    }, dust.helpers = {}, dust.cache = {}, dust.register = function(e, t) {
      e && (dust.cache[e] = t)
    }, dust.render = function(e, t, n) {
      var o = new Stub(n).head;
      try {
        dust.load(e, o, Context.wrap(t, e)).end()
      } catch (e) {
        dust.onError(e, o)
      }
    }, dust.stream = function(e, t) {
      var n = new Stream;
      return dust.nextTick(function() {
        try {
          dust.load(e, n.head, Context.wrap(t, e)).end()
        } catch (e) {
          dust.onError(e, n.head)
        }
      }), n
    }, dust.renderSource = function(e, t, n) {
      return dust.compileFn(e)(t, n)
    }, dust.compileFn = function(e, t) {
      var n = dust.loadSource(dust.compile(e, t));
      return function(e, o) {
        var i = o ? new Stub(o) : new Stream;
        return dust.nextTick(function() {
          "function" == typeof n ? n(i.head, Context.wrap(e, t)).end() : dust.onError(new Error("Template [" + t + "] cannot be resolved to a Dust function"))
        }), i
      }
    }, dust.load = function(e, t, n) {
      var o = dust.cache[e];
      return o ? o(t, n) : dust.onLoad ? t.map(function(t) {
        dust.onLoad(e, function(o, i) {
          if (o) return t.setError(o);
          dust.cache[e] || dust.loadSource(dust.compile(i, e)), dust.cache[e](t, n).end()
        })
      }) : t.setError(new Error("Template Not Found: " + e))
    }, dust.loadSource = function(source, path) {
      return eval(source)
    }, Array.isArray ? dust.isArray = Array.isArray : dust.isArray = function(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }, dust.nextTick = function() {
      return "undefined" != typeof process ? process.nextTick : function(e) {
        setTimeout(e, 0)
      }
    }(), dust.isEmpty = function(e) {
      return !(!dust.isArray(e) || e.length) || 0 !== e && !e
    }, dust.filter = function(e, t, n) {
      if (n)
        for (var o = 0, i = n.length; o < i; o++) {
          var r = n[o];
          "s" === r ? (t = null, dust.log("Using unescape filter on [" + e + "]", DEBUG)) : "function" == typeof dust.filters[r] ? e = dust.filters[r](e) : dust.onError(new Error("Invalid filter [" + r + "]"))
        }
      return t && (e = dust.filters[t](e)), e
    }, dust.filters = {
      h: function(e) {
        return dust.escapeHtml(e)
      },
      j: function(e) {
        return dust.escapeJs(e)
      },
      u: encodeURI,
      uc: encodeURIComponent,
      js: function(e) {
        return JSON ? JSON.stringify(e) : (dust.log("JSON is undefined.  JSON stringify has not been used on [" + e + "]", WARN), e)
      },
      jp: function(e) {
        return JSON ? JSON.parse(e) : (dust.log("JSON is undefined.  JSON parse has not been used on [" + e + "]", WARN), e)
      }
    }, dust.makeBase = function(e) {
      return new Context(new Stack, e)
    }, Context.wrap = function(e, t) {
      return e instanceof Context ? e : new Context(new Stack(e), {}, null, t)
    }, Context.prototype.get = function(e, t) {
      return "string" == typeof e && ("." === e[0] && (t = !0, e = e.substr(1)), e = e.split(".")), this._get(t, e)
    }, Context.prototype._get = function(e, t) {
      var n, o, i, r, c = this.stack,
        a = 1;
      if (dust.log("Searching for reference [{" + t.join(".") + "}] in template [" + this.getTemplateName() + "]", DEBUG), o = t[0], i = t.length, e && 0 === i) r = c, c = c.head;
      else {
        if (e) c = c.head[o];
        else {
          for (; c && (!c.isObject || (r = c.head, void 0 === (n = c.head[o])));) c = c.tail;
          c = void 0 !== n ? n : this.global ? this.global[o] : void 0
        }
        for (; c && a < i;) r = c, c = c[t[a]], a++
      }
      if ("function" == typeof c) {
        var s = function() {
          return c.apply(r, arguments)
        };
        return s.isFunction = !0, s
      }
      return void 0 === c && dust.log("Cannot find the value for reference [{" + t.join(".") + "}] in template [" + this.getTemplateName() + "]"), c
    }, Context.prototype.getPath = function(e, t) {
      return this._get(e, t)
    }, Context.prototype.push = function(e, t, n) {
      return new Context(new Stack(e, this.stack, t, n), this.global, this.blocks, this.getTemplateName())
    }, Context.prototype.rebase = function(e) {
      return new Context(new Stack(e), this.global, this.blocks, this.getTemplateName())
    }, Context.prototype.current = function() {
      return this.stack.head
    }, Context.prototype.getBlock = function(e, t, n) {
      if ("function" == typeof e) {
        e = e(new Chunk, this).data.join("")
      }
      var o = this.blocks;
      if (!o) return void dust.log("No blocks for context[{" + e + "}] in template [" + this.getTemplateName() + "]", DEBUG);
      for (var i, r = o.length; r--;)
        if (i = o[r][e]) return i
    }, Context.prototype.shiftBlocks = function(e) {
      var t, n = this.blocks;
      return e ? (t = n ? n.concat([e]) : [e], new Context(this.stack, this.global, t, this.getTemplateName())) : this
    }, Context.prototype.getTemplateName = function() {
      return this.templateName
    }, Stub.prototype.flush = function() {
      for (var e = this.head; e;) {
        if (!e.flushable) return e.error ? (this.callback(e.error), dust.onError(new Error("Chunk error [" + e.error + "] thrown. Ceasing to render this template.")), void(this.flush = EMPTY_FUNC)) : void 0;
        this.out += e.data.join(""), e = e.next, this.head = e
      }
      this.callback(null, this.out)
    }, Stream.prototype.flush = function() {
      for (var e = this.head; e;) {
        if (!e.flushable) return e.error ? (this.emit("error", e.error), dust.onError(new Error("Chunk error [" + e.error + "] thrown. Ceasing to render this template.")), void(this.flush = EMPTY_FUNC)) : void 0;
        this.emit("data", e.data.join("")), e = e.next, this.head = e
      }
      this.emit("end")
    }, Stream.prototype.emit = function(e, t) {
      if (!this.events) return dust.log("No events to emit", INFO), !1;
      var n = this.events[e];
      if (!n) return dust.log("Event type [" + e + "] does not exist", WARN), !1;
      if ("function" == typeof n) n(t);
      else if (dust.isArray(n))
        for (var o = n.slice(0), i = 0, r = o.length; i < r; i++) o[i](t);
      else dust.onError(new Error("Event Handler [" + n + "] is not of a type that is handled by emit"))
    }, Stream.prototype.on = function(e, t) {
      return this.events || (this.events = {}), this.events[e] ? "function" == typeof this.events[e] ? this.events[e] = [this.events[e], t] : this.events[e].push(t) : (dust.log("Event type [" + e + "] does not exist. Using just the specified callback.", WARN), t ? this.events[e] = t : dust.log("Callback for type [" + e + "] does not exist. Listener not registered.", WARN)), this
    }, Stream.prototype.pipe = function(e) {
      return this.on("data", function(t) {
        try {
          e.write(t, "utf8")
        } catch (t) {
          dust.onError(t, e.head)
        }
      }).on("end", function() {
        try {
          return e.end()
        } catch (t) {
          dust.onError(t, e.head)
        }
      }).on("error", function(t) {
        e.error(t)
      }), this
    }, Chunk.prototype.write = function(e) {
      var t = this.taps;
      return t && (e = t.go(e)), this.data.push(e), this
    }, Chunk.prototype.end = function(e) {
      return e && this.write(e), this.flushable = !0, this.root.flush(), this
    }, Chunk.prototype.map = function(e) {
      var t = new Chunk(this.root, this.next, this.taps),
        n = new Chunk(this.root, t, this.taps);
      return this.next = n, this.flushable = !0, e(n), t
    }, Chunk.prototype.tap = function(e) {
      var t = this.taps;
      return this.taps = t ? t.push(e) : new Tap(e), this
    }, Chunk.prototype.untap = function() {
      return this.taps = this.taps.tail, this
    }, Chunk.prototype.render = function(e, t) {
      return e(this, t)
    }, Chunk.prototype.reference = function(e, t, n, o) {
      return "function" == typeof e && (e.isFunction = !0, (e = e.apply(t.current(), [this, t, null, {
        auto: n,
        filters: o
      }])) instanceof Chunk) ? e : dust.isEmpty(e) ? this : this.write(dust.filter(e, n, o))
    }, Chunk.prototype.section = function(e, t, n, o) {
      if ("function" == typeof e && (e = e.apply(t.current(), [this, t, n, o])) instanceof Chunk) return e;
      var i = n.block,
        r = n.else;
      if (o && (t = t.push(o)), dust.isArray(e)) {
        if (i) {
          var c = e.length,
            a = this;
          if (c > 0) {
            t.stack.head && (t.stack.head.$len = c);
            for (var s = 0; s < c; s++) t.stack.head && (t.stack.head.$idx = s), a = i(a, t.push(e[s], s, c));
            return t.stack.head && (t.stack.head.$idx = void 0, t.stack.head.$len = void 0), a
          }
          if (r) return r(this, t)
        }
      } else if (!0 === e) {
        if (i) return i(this, t)
      } else if (e || 0 === e) {
        if (i) return i(this, t.push(e))
      } else if (r) return r(this, t);
      return dust.log("Not rendering section (#) block in template [" + t.getTemplateName() + "], because above key was not found", DEBUG), this
    }, Chunk.prototype.exists = function(e, t, n) {
      var o = n.block,
        i = n.else;
      if (dust.isEmpty(e)) {
        if (i) return i(this, t)
      } else if (o) return o(this, t);
      return dust.log("Not rendering exists (?) block in template [" + t.getTemplateName() + "], because above key was not found", DEBUG), this
    }, Chunk.prototype.notexists = function(e, t, n) {
      var o = n.block,
        i = n.else;
      if (dust.isEmpty(e)) {
        if (o) return o(this, t)
      } else if (i) return i(this, t);
      return dust.log("Not rendering not exists (^) block check in template [" + t.getTemplateName() + "], because above key was found", DEBUG), this
    }, Chunk.prototype.block = function(e, t, n) {
      var o = n.block;
      return e && (o = e), o ? o(this, t) : this
    }, Chunk.prototype.partial = function(e, t, n) {
      var o;
      o = dust.makeBase(t.global), o.blocks = t.blocks, t.stack && t.stack.tail && (o.stack = t.stack.tail), n && (o = o.push(n)), "string" == typeof e && (o.templateName = e), o = o.push(t.stack.head);
      return "function" == typeof e ? this.capture(e, o, function(e, t) {
        o.templateName = o.templateName || e, dust.load(e, t, o).end()
      }) : dust.load(e, this, o)
    }, Chunk.prototype.helper = function(e, t, n, o) {
      var i = this;
      try {
        return dust.helpers[e] ? dust.helpers[e](i, t, n, o) : dust.onError(new Error("Invalid helper [" + e + "]"), i)
      } catch (e) {
        return dust.onError(e, i)
      }
    }, Chunk.prototype.capture = function(e, t, n) {
      return this.map(function(o) {
        var i = new Stub(function(e, t) {
          e ? o.setError(e) : n(t, o)
        });
        e(i.head, t).end()
      })
    }, Chunk.prototype.setError = function(e) {
      return this.error = e, this.root.flush(), this
    }, Tap.prototype.push = function(e) {
      return new Tap(e, this)
    }, Tap.prototype.go = function(e) {
      for (var t = this; t;) e = t.head(e), t = t.tail;
      return e
    };
    var HCHARS = new RegExp(/[&<>\"\']/),
      AMP = /&/g,
      LT = /</g,
      GT = />/g,
      QUOT = /\"/g,
      SQUOT = /\'/g;
    dust.escapeHtml = function(e) {
      return "string" == typeof e && HCHARS.test(e) ? e.replace(AMP, "&amp;").replace(LT, "&lt;").replace(GT, "&gt;").replace(QUOT, "&quot;").replace(SQUOT, "&#39;") : e
    };
    var BS = /\\/g,
      FS = /\//g,
      CR = /\r/g,
      LS = /\u2028/g,
      PS = /\u2029/g,
      NL = /\n/g,
      LF = /\f/g,
      SQ = /'/g,
      DQ = /"/g,
      TB = /\t/g;
    dust.escapeJs = function(e) {
      return "string" == typeof e ? e.replace(BS, "\\\\").replace(FS, "\\/").replace(DQ, '\\"').replace(SQ, "\\'").replace(CR, "\\r").replace(LS, "\\u2028").replace(PS, "\\u2029").replace(NL, "\\n").replace(LF, "\\f").replace(TB, "\\t") : e
    }
  }
}(dust), "undefined" != typeof exports && ("undefined" != typeof process && require("./server")(dust), module.exports = dust), define("dust", function(e) {
    return function() {
      return e.dust
    }
  }(this)), define("dust", function() {}),
  function(e, t) {
    if ("function" == typeof define && define.amd) define("backbone_associations", ["underscore", "backbone"], function(n, o) {
      return t(e, o, n)
    });
    else if ("undefined" != typeof exports) {
      var n = require("underscore"),
        o = require("backbone");
      t(e, o, n), "undefined" != typeof module && module.exports && (module.exports = o), exports = o
    } else t(e, e.Backbone, e._)
  }(this, function(e, t, n) {
    var o, i, r, c, a, s, u, p, l, d, M, f = {};
    o = t.Model, i = t.Collection, r = o.prototype, a = i.prototype, c = t.Events, t.Associations = {
      VERSION: "0.6.2"
    }, t.Associations.scopes = [];
    var h = function() {
        return l
      },
      b = function(e) {
        (!n.isString(e) || 1 > n.size(e)) && (e = "."), l = e, u = RegExp("[\\" + l + "\\[\\]]+", "g"), p = RegExp("[^\\" + l + "\\[\\]]+", "g")
      };
    try {
      Object.defineProperty(t.Associations, "SEPARATOR", {
        enumerable: !0,
        get: h,
        set: b
      })
    } catch (e) {}
    t.Associations.Many = t.Many = "Many", t.Associations.One = t.One = "One", t.Associations.Self = t.Self = "Self", t.Associations.SEPARATOR = ".", t.Associations.getSeparator = h, t.Associations.setSeparator = b, t.Associations.EVENTS_BUBBLE = !0, t.Associations.EVENTS_WILDCARD = !0, t.Associations.EVENTS_NC = !1, b(), s = t.AssociatedModel = t.Associations.AssociatedModel = o.extend({
      relations: void 0,
      _proxyCalls: void 0,
      constructor: function(e, t) {
        t && t.__parents__ && (this.parents = [t.__parents__]), o.apply(this, arguments)
      },
      on: function(e, o, i) {
        var r = c.on.apply(this, arguments);
        if (t.Associations.EVENTS_NC) return r;
        var a = /\s+/;
        return n.isString(e) && e && !a.test(e) && o && (a = z(e)) && (f[a] = void 0 === f[a] ? 1 : f[a] + 1), r
      },
      off: function(e, o, i) {
        if (t.Associations.EVENTS_NC) return c.off.apply(this, arguments);
        var r = /\s+/,
          a = this._events,
          s = {},
          u = a ? n.keys(a) : [],
          p = !e && !o && !i,
          l = n.isString(e) && !r.test(e);
        if (p || l)
          for (var r = 0, d = u.length; r < d; r++) s[u[r]] = a[u[r]] ? a[u[r]].length : 0;
        var M = c.off.apply(this, arguments);
        if (p || l)
          for (r = 0, d = u.length; r < d; r++)(p = z(u[r])) && (f[p] = a[u[r]] ? f[p] - (s[u[r]] - a[u[r]].length) : f[p] - s[u[r]]);
        return M
      },
      get: function(e) {
        var t = this.__attributes__,
          n = r.get.call(this, e),
          t = t ? y(n) ? n : t[e] : n;
        return y(t) ? t : this._getAttr.apply(this, arguments)
      },
      set: function(e, t, o) {
        var i;
        return n.isObject(e) || null == e ? (i = e, o = t) : (i = {}, i[e] = t), e = this._set(i, o), this._processPendingEvents(), e
      },
      _set: function(e, t) {
        var i, r, c, a, s = this;
        if (!e) return this;
        this.__attributes__ = e;
        for (i in e)
          if (r || (r = {}), i.match(u)) {
            var p = A(i);
            a = n.initial(p), p = p[p.length - 1], a = this.get(a), a instanceof o && (a = r[a.cid] || (r[a.cid] = {
              model: a,
              data: {}
            }), a.data[p] = e[i])
          } else a = r[this.cid] || (r[this.cid] = {
            model: this,
            data: {}
          }), a.data[i] = e[i];
        if (r)
          for (c in r) a = r[c], this._setAttr.call(a.model, a.data, t) || (s = !1);
        else s = this._setAttr.call(this, e, t);
        return delete this.__attributes__, s
      },
      _setAttr: function(c, a) {
        var s;
        if (a || (a = {}), a.unset)
          for (s in c) c[s] = void 0;
        return this.parents = this.parents || [], this.relations && n.each(this.relations, function(r) {
          var s, u, p = r.key,
            l = r.scope || e,
            d = this._transformRelatedModel(r, c),
            M = this._transformCollectionType(r, d, c),
            f = n.isString(r.map) ? m(r.map, l) : r.map,
            h = this.attributes[p],
            b = h && h.idAttribute,
            A = !1;
          if (s = r.options ? n.extend({}, r.options, a) : a, c[p]) {
            if (l = n.result(c, p), l = f ? f.call(this, l, M || d) : l, y(l))
              if (r.type === t.Many) h ? (h._deferEvents = !0, h[s.reset ? "reset" : "set"](l instanceof i ? l.models : l, s), d = h) : (A = !0, l instanceof i ? d = l : (d = this._createCollection(M || i, r.collectionOptions || (d ? {
                model: d
              } : {})), d[s.reset ? "reset" : "set"](l, s)));
              else {
                if (r.type !== t.One) throw Error("type attribute must be specified and have the values Backbone.One or Backbone.Many");
                r = l instanceof o ? l.attributes.hasOwnProperty(b) : l.hasOwnProperty(b), M = l instanceof o ? l.attributes[b] : l[b], h && r && h.attributes[b] === M ? (h._deferEvents = !0, h._set(l instanceof o ? l.attributes : l, s), d = h) : (A = !0, l instanceof o ? d = l : (s.__parents__ = this, d = new d(l, s), delete s.__parents__))
              }
            else d = l;
            u = c[p] = d, (A || u && !u._proxyCallback) && (u._proxyCallback || (u._proxyCallback = function() {
              return t.Associations.EVENTS_BUBBLE && this._bubbleEvent.call(this, p, u, arguments)
            }), u.on("all", u._proxyCallback, this))
          }
          c.hasOwnProperty(p) && this._setupParents(c[p], this.attributes[p])
        }, this), r.set.call(this, c, a)
      },
      _bubbleEvent: function(e, n, r) {
        var c, a = r[0].split(":"),
          s = a[0],
          u = "nested-change" == r[0],
          p = "change" === s,
          h = r[1],
          b = -1,
          A = n._proxyCalls,
          a = a[1],
          m = !a || -1 == a.indexOf(l);
        if (!u && (m && (M = z(r[0]) || e), t.Associations.EVENTS_NC || f[M])) return t.Associations.EVENTS_WILDCARD && /\[\*\]/g.test(a) ? this : (n instanceof i && (p || a) && (b = n.indexOf(d || h)), this instanceof o && (d = this), a = e + (-1 !== b && (p || a) ? "[" + b + "]" : "") + (a ? l + a : ""), t.Associations.EVENTS_WILDCARD && (c = a.replace(/\[\d+\]/g, "[*]")), u = [], u.push.apply(u, r), u[0] = s + ":" + a, t.Associations.EVENTS_WILDCARD && a !== c && (u[0] = u[0] + " " + s + ":" + c), A = n._proxyCalls = A || {}, this._isEventAvailable.call(this, A, a) ? this : (A[a] = !0, p && (this._previousAttributes[e] = n._previousAttributes, this.changed[e] = n), this.trigger.apply(this, u), t.Associations.EVENTS_NC && p && this.get(a) != r[2] && (e = ["nested-change", a, r[1]], r[2] && e.push(r[2]), this.trigger.apply(this, e)), A && a && delete A[a], d = void 0, this))
      },
      _isEventAvailable: function(e, t) {
        return n.find(e, function(e, n) {
          return -1 !== t.indexOf(n, t.length - n.length)
        })
      },
      _setupParents: function(e, t) {
        e && (e.parents = e.parents || [], -1 == n.indexOf(e.parents, this) && e.parents.push(this)), t && 0 < t.parents.length && t != e && (t.parents = n.difference(t.parents, [this]), t._proxyCallback && t.off("all", t._proxyCallback, this))
      },
      _createCollection: function(e, t) {
        var t = n.defaults(t, {
            model: e.model
          }),
          o = new e([], n.isFunction(t) ? t.call(this) : t);
        return o.parents = [this], o
      },
      _processPendingEvents: function() {
        this._processedEvents || (this._processedEvents = !0, this._deferEvents = !1, n.each(this._pendingEvents, function(e) {
          e.c.trigger.apply(e.c, e.a)
        }), this._pendingEvents = [], n.each(this.relations, function(e) {
          (e = this.attributes[e.key]) && e._processPendingEvents && e._processPendingEvents()
        }, this), delete this._processedEvents)
      },
      _transformRelatedModel: function(i, r) {
        var c = i.relatedModel,
          a = i.scope || e;
        if (c && !(c.prototype instanceof o) && (c = n.isFunction(c) ? c.call(this, i, r) : c), c && n.isString(c) && (c = c === t.Self ? this.constructor : m(c, a)), i.type === t.One) {
          if (!c) throw Error("specify a relatedModel for Backbone.One type");
          if (!(c.prototype instanceof t.Model)) throw Error("specify an AssociatedModel or Backbone.Model for Backbone.One type")
        }
        return c
      },
      _transformCollectionType: function(r, c, a) {
        var s = r.collectionType,
          u = r.scope || e;
        if (s && n.isFunction(s) && s.prototype instanceof o) throw Error("type is of Backbone.Model. Specify derivatives of Backbone.Collection");
        if (s && !(s.prototype instanceof i) && (s = n.isFunction(s) ? s.call(this, r, a) : s), s && n.isString(s) && (s = m(s, u)), s && !s.prototype instanceof i) throw Error("collectionType must inherit from Backbone.Collection");
        if (r.type === t.Many && !c && !s) throw Error("specify either a relatedModel or collectionType");
        return s
      },
      trigger: function(e) {
        this._deferEvents ? (this._pendingEvents = this._pendingEvents || [], this._pendingEvents.push({
          c: this,
          a: arguments
        })) : r.trigger.apply(this, arguments)
      },
      toJSON: function(e) {
        var t, o = {};
        return o[this.idAttribute] = this.id, this.visited || (this.visited = !0, o = r.toJSON.apply(this, arguments), e && e.serialize_keys && (o = n.pick(o, e.serialize_keys)), this.relations && n.each(this.relations, function(i) {
          var r = i.key,
            c = i.remoteKey,
            a = this.attributes[r],
            s = !i.isTransient,
            i = i.serialize || [],
            u = n.clone(e);
          delete o[r], s && (i.length && (u ? u.serialize_keys = i : u = {
            serialize_keys: i
          }), t = a && a.toJSON ? a.toJSON(u) : a, o[c || r] = n.isArray(t) ? n.compact(t) : t)
        }, this), delete this.visited), o
      },
      clone: function(e) {
        return new this.constructor(this.toJSON(e))
      },
      cleanup: function(e) {
        e = e || {}, n.each(this.relations, function(e) {
          (e = this.attributes[e.key]) && (e._proxyCallback && e.off("all", e._proxyCallback, this), e.parents = n.difference(e.parents, [this]))
        }, this), !e.listen && this.off()
      },
      destroy: function(e) {
        var e = e ? n.clone(e) : {},
          e = n.defaults(e, {
            remove_references: !0,
            listen: !0
          }),
          t = this;
        if (e.remove_references && e.wait) {
          var o = e.success;
          e.success = function(n) {
            o && o(t, n, e), t.cleanup(e)
          }
        }
        var i = r.destroy.apply(this, [e]);
        return e.remove_references && !e.wait && t.cleanup(e), i
      },
      _getAttr: function(e) {
        var t, o, r = this,
          c = this.__attributes__,
          e = A(e);
        if (!(1 > n.size(e))) {
          for (o = 0; o < e.length && (t = e[o], r); o++) r = r instanceof i ? isNaN(t) ? void 0 : r.at(t) : c ? y(r.attributes[t]) ? r.attributes[t] : c[t] : r.attributes[t];
          return r
        }
      }
    });
    var A = function(e) {
        return "" === e ? [""] : n.isString(e) ? e.match(p) : e || []
      },
      z = function(e) {
        return e ? (e = e.split(":"), 1 < e.length ? (e = e[e.length - 1], e = e.split(l), 1 < e.length ? e[e.length - 1].split("[")[0] : e[0].split("[")[0]) : "") : e
      },
      m = function(e, o) {
        var i, r = [o];
        r.push.apply(r, t.Associations.scopes);
        for (var c, a = 0, s = r.length; a < s && (!(c = r[a]) || !(i = n.reduce(e.split(l), function(e, t) {
            return e[t]
          }, c))); ++a);
        return i
      },
      g = function(e, t, o) {
        var i, r;
        return n.find(e, function(e) {
          if (i = n.find(e.relations, function(n) {
              return e.get(n.key) === t
            }, this)) return r = e, !0
        }, this), i && i.map ? i.map.call(r, o, t) : o
      },
      y = function(e) {
        return !n.isUndefined(e) && !n.isNull(e)
      },
      v = {};
    return n.each(["set", "remove", "reset"], function(e) {
      v[e] = i.prototype[e], a[e] = function(t, n) {
        return this.model.prototype instanceof s && this.parents && (arguments[0] = g(this.parents, this, t)), v[e].apply(this, arguments)
      }
    }), v.trigger = a.trigger, a.trigger = function(e) {
      this._deferEvents ? (this._pendingEvents = this._pendingEvents || [], this._pendingEvents.push({
        c: this,
        a: arguments
      })) : v.trigger.apply(this, arguments)
    }, a._processPendingEvents = s.prototype._processPendingEvents, a.on = s.prototype.on, a.off = s.prototype.off, t
  }),
  function(dust) {
    function isSelect(e) {
      var t = e.current();
      return "object" == typeof t && !0 === t.isSelect
    }

    function jsonFilter(e, t) {
      return "function" == typeof t ? t.toString().replace(/(^\s+|\s+$)/gm, "").replace(/\n/gm, "").replace(/,\s*/gm, ", ").replace(/\)\{/gm, ") {") : t
    }

    function filter(e, t, n, o, i) {
      o = o || {};
      var r, c, a = n.block,
        s = o.filterOpType || "";
      if (void 0 !== o.key) r = dust.helpers.tap(o.key, e, t);
      else {
        if (!isSelect(t)) return _console.log("No key specified for filter in:" + s + " helper "), e;
        r = t.current().selectKey, t.current().isResolved && (i = function() {
          return !1
        })
      }
      return c = dust.helpers.tap(o.value, e, t), i(coerce(c, o.type, t), coerce(r, o.type, t)) ? (isSelect(t) && (t.current().isResolved = !0), a ? e.render(a, t) : (_console.log("Missing body block in the " + s + " helper "), e)) : n.else ? e.render(n.else, t) : e
    }

    function coerce(e, t, n) {
      if (e) switch (t || typeof e) {
        case "number":
          return +e;
        case "string":
          return String(e);
        case "boolean":
          return e = "false" !== e && e, Boolean(e);
        case "date":
          return new Date(e);
        case "context":
          return n.get(e)
      }
      return e
    }
    var _console = "undefined" != typeof console ? console : {
        log: function() {}
      },
      helpers = {
        tap: function(e, t, n) {
          var o = e;
          return "function" == typeof e && (!0 === e.isFunction ? o = e() : (o = "", t.tap(function(e) {
            return o += e, ""
          }).render(e, n).untap(), "" === o && (o = !1))), o
        },
        sep: function(e, t, n) {
          var o = n.block;
          return t.stack.index === t.stack.of - 1 ? e : o ? n.block(e, t) : e
        },
        idx: function(e, t, n) {
          return n.block ? n.block(e, t.push(t.stack.index)) : e
        },
        contextDump: function(e, t, n, o) {
          var i, r = o || {},
            c = r.to || "output",
            a = r.key || "current";
          return c = dust.helpers.tap(c, e, t), a = dust.helpers.tap(a, e, t), i = "full" === a ? JSON.stringify(t.stack, jsonFilter, 2) : JSON.stringify(t.stack.head, jsonFilter, 2), "console" === c ? (_console.log(i), e) : e.write(i)
        },
        if: function(chunk, context, bodies, params) {
          var body = bodies.block,
            skip = bodies.else;
          if (params && params.cond) {
            var cond = params.cond;
            if (cond = dust.helpers.tap(cond, chunk, context), eval(cond)) return body ? chunk.render(bodies.block, context) : (_console.log("Missing body block in the if helper!"), chunk);
            if (skip) return chunk.render(bodies.else, context)
          } else _console.log("No condition given in the if helper!");
          return chunk
        },
        math: function(e, t, n, o) {
          if (o && void 0 !== o.key && o.method) {
            var i = o.key,
              r = o.method,
              c = o.operand,
              a = o.round,
              s = null;
            switch (i = dust.helpers.tap(i, e, t), c = dust.helpers.tap(c, e, t), r) {
              case "mod":
                0 !== c && -0 !== c || _console.log("operand for divide operation is 0/-0: expect Nan!"), s = parseFloat(i) % parseFloat(c);
                break;
              case "add":
                s = parseFloat(i) + parseFloat(c);
                break;
              case "subtract":
                s = parseFloat(i) - parseFloat(c);
                break;
              case "multiply":
                s = parseFloat(i) * parseFloat(c);
                break;
              case "divide":
                0 !== c && -0 !== c || _console.log("operand for divide operation is 0/-0: expect Nan/Infinity!"), s = parseFloat(i) / parseFloat(c);
                break;
              case "ceil":
                s = Math.ceil(parseFloat(i));
                break;
              case "floor":
                s = Math.floor(parseFloat(i));
                break;
              case "round":
                s = Math.round(parseFloat(i));
                break;
              case "abs":
                s = Math.abs(parseFloat(i));
                break;
              default:
                _console.log("method passed is not supported")
            }
            return null !== s ? (a && (s = Math.round(s)), n && n.block ? e.render(n.block, t.push({
              isSelect: !0,
              isResolved: !1,
              selectKey: s
            })) : e.write(s)) : e
          }
          return _console.log("Key is a required parameter for math helper along with method/operand!"), e
        },
        select: function(e, t, n, o) {
          var i = n.block;
          if (o && void 0 !== o.key) {
            var r = dust.helpers.tap(o.key, e, t);
            return i ? e.render(n.block, t.push({
              isSelect: !0,
              isResolved: !1,
              selectKey: r
            })) : (_console.log("Missing body block in the select helper "), e)
          }
          return _console.log("No key given in the select helper!"), e
        },
        eq: function(e, t, n, o) {
          return o && (o.filterOpType = "eq"), filter(e, t, n, o, function(e, t) {
            return t === e
          })
        },
        ne: function(e, t, n, o) {
          return o ? (o.filterOpType = "ne", filter(e, t, n, o, function(e, t) {
            return t !== e
          })) : e
        },
        lt: function(e, t, n, o) {
          if (o) return o.filterOpType = "lt", filter(e, t, n, o, function(e, t) {
            return t < e
          })
        },
        lte: function(e, t, n, o) {
          return o ? (o.filterOpType = "lte", filter(e, t, n, o, function(e, t) {
            return t <= e
          })) : e
        },
        gt: function(e, t, n, o) {
          return o ? (o.filterOpType = "gt", filter(e, t, n, o, function(e, t) {
            return t > e
          })) : e
        },
        gte: function(e, t, n, o) {
          return o ? (o.filterOpType = "gte", filter(e, t, n, o, function(e, t) {
            return t >= e
          })) : e
        },
        default: function(e, t, n, o) {
          return o && (o.filterOpType = "default"), filter(e, t, n, o, function(e, t) {
            return !0
          })
        },
        size: function(e, t, n, o) {
          var i, r, c, a = 0;
          if (o = o || {}, (i = o.key) && !0 !== i)
            if (dust.isArray(i)) a = i.length;
            else if (!isNaN(parseFloat(i)) && isFinite(i)) a = i;
          else if ("object" == typeof i) {
            r = 0;
            for (c in i) Object.hasOwnProperty.call(i, c) && r++;
            a = r
          } else a = (i + "").length;
          else a = 0;
          return e.write(a)
        }
      };
    dust.helpers = helpers
  }("undefined" != typeof exports ? module.exports = require("dustjs-linkedin") : dust), define("dust_helpers", ["dust"], function(e) {
    return function() {
      return e.dust.helpers
    }
  }(this)), require(["backbone", "dust", "backbone_associations", "dust_helpers"], function() {}), define("vendor", [], function() {}), "undefined" == typeof console && (zz = function() {}, console = {
    log: zz,
    debug: zz,
    info: zz,
    warn: zz,
    error: zz,
    assert: zz,
    clear: zz,
    trace: zz
  }), define("utils", ["jquery", "underscore", "backbone"], function(e, t, n) {
    "use strict";
    var o = {};
    return o.indexOf = [].indexOf || function(e) {
      for (var t = 0, n = this.length; t < n; t++)
        if (t in this && this[t] === e) return t;
      return -1
    }, o.hasProp = {}.hasOwnProperty, o.extend = n.Model.extend, o.bind = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    }, o.slice = [].slice, o.isUndefOrNull = function(e, n) {
      var i = 2 == t.toArray(arguments).length;
      return !(!i || !o.isUndefOrNull(n)) || (i && (e = n[e]), void 0 === e || null === e)
    }, o.propertyDescriptors = function() {
      var e;
      if ("function" != typeof Object.defineProperty || "function" != typeof Object.defineProperties) return !1;
      try {
        return e = {}, Object.defineProperty(e, "foo", {
          value: "bar"
        }), "bar" === e.foo
      } catch (e) {
        return !1
      }
    }(), o.readonly = function() {
      var e;
      return o.propertyDescriptors ? (e = {
        writable: !1,
        enumerable: !0,
        configurable: !1
      }, function() {
        var t, n, i, r, c;
        for (t = arguments[0], i = 2 <= arguments.length ? o.slice.call(arguments, 1) : [], r = 0, c = i.length; r < c; r++) n = i[r], e.value = t[n], Object.defineProperty(t, n, e);
        return !0
      }) : function() {
        return !1
      }
    }(), o.getPrototypeChain = function(e) {
      var t;
      for (t = [e]; e = null != e.constructor ? e.constructor.__super__ : void 0;) t.push(e);
      return t
    }, o.getAllPropertyVersions = function(e, n) {
      return t(o.getPrototypeChain(e)).chain().pluck(n).compact().uniq().value().reverse()
    }, o.upcase = function(e) {
      return e.charAt(0).toUpperCase() + e.substring(1)
    }, o.underscorize = function(e) {
      return e.replace(/[A-Z]/g, function(e, t) {
        return (0 !== t ? "_" : "") + e.toLowerCase()
      })
    }, o.escapeRegExp = function(e) {
      return String(e || "").replace(/([.*+?\^=!:${}()|\[\]\/\\])/g, "\\$1")
    }, o.replaceVars = function(e, n) {
      var o = t.templateSettings.interpolate;
      t.templateSettings.interpolate = /{([\s\S]+?)}/g;
      try {
        e = t.template(e, n)
      } catch (e) {}
      return t.templateSettings.interpolate = o, e
    }, o.modifierKeyPressed = function(e) {
      return e.shiftKey || e.altKey || e.ctrlKey || e.metaKey
    }, o.getOption = function(e, t, n) {
      if (e && t) {
        return n = n || e.options, n && t in n && void 0 !== n[t] ? n[t] : e[t]
      }
    }, o.getSetOptions = function(e, n, i, r) {
      var c = r || this;
      t.each(o.toArray(n), function(t) {
        var n = o.getOption(e, t, i);
        void 0 !== n && (c[t] = n)
      })
    }, o.toArray = function(e) {
      return t.isArray(e) ? e : [e]
    }, o.promisify = function(e, t) {
      return function() {
        var n = o.deferred(),
          i = Array.prototype.slice.call(arguments);
        return i.push(function(e, t) {
          return null !== e ? n.reject(e) : n.resolve(t)
        }), e.apply(t || this, i), n.promise()
      }
    }, o.isPromise = function(e) {
      return e && "function" == typeof e.promise && "function" == typeof e.done
    }, o.deferred = function() {
      return new e.Deferred
    }, o.resolvedPromise = function() {
      var e = o.deferred(),
        n = e.promise(),
        i = arguments,
        r = this;
      return t.defer(function() {
        e.resolve.apply(r, i)
      }), n
    }, o.rejectedPromise = function() {
      var e = o.deferred(),
        n = e.promise(),
        i = arguments,
        r = this;
      return t.defer(function() {
        e.reject.apply(r, i)
      }), n
    }, o.execAsync = function(e) {
      return t.defer(e)
    }, "function" == typeof Object.seal && Object.seal(o), o
  }), define("storage", ["underscore", "module"], function(e, t) {
    "use strict";
    var n, o, i = t.config().fallbackToCookie || !1,
      r = t.config().clearExpiredLocal || !0,
      c = t.config().clearExpiredSession || !0;
    try {
      n = window.localStorage, o = window.sessionStorage
    } catch (e) {}
    var a = {
      fallbackToCookie: i,
      memoryStore: {
        _sessionStorage: {},
        _localStorage: {}
      }
    };
    try {
      o.removeItem("TEST"), o.setItem("TEST", "1"), o.removeItem("TEST"), a.supportsSessionStorage = !0
    } catch (e) {
      a.supportsSessionStorage = !1
    }
    try {
      n.removeItem("TEST"), n.setItem("TEST", "1"), n.removeItem("TEST"), a.supportsLocalStorage = !0
    } catch (e) {
      a.supportsLocalStorage = !1
    }
    return a.supportsDaStorage = a.supportsSessionStorage && a.supportsLocalStorage, a.setInCookie = function(e, t, n, o, i, r, c) {
      var a, s = void 0 !== o ? o : 8760,
        u = new Date,
        p = i ? "; Domain=" + i : "",
        l = r ? "; Path=" + r : "; Path=/",
        d = c ? "; secure" : "";
      u.setTime(u.getTime() + 60 * s * 60 * 1e3), a = n ? "" : "; Expires=" + u.toGMTString(), document.cookie = e + "=" + t + p + a + l + d
    }, a.getFromCookie = function(e) {
      if (document.cookie)
        for (var t = e + "=", n = document.cookie.split(";"), o = 0, i = n.length; o < i; o++) {
          for (var r = n[o];
            " " === r.charAt(0);) r = r.substring(1, r.length);
          if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
        }
      return null
    }, a.eraseCookie = function(e) {
      a.setInCookie(e, "", !0)
    }, a.expireCookie = function(e, t) {
      a.setInCookie(e, "", !1, -1e3, t), t.match(/\.[^.]+\.[^.]+\./) && a.setInCookie(e, "", !1, -1e3, t.replace(/\.[^.]+/, ""))
    }, a.setItem = function(e, t, n, o) {
      var i, r = !1,
        c = this._getDaStorage(n),
        s = (new Date).getTime();
      if (null == t && this.removeItem(e, n, c), i = {
          _data_: t,
          _ts_: s
        }, o && (i._exp_ = s + o), "undefined" != typeof JSON) {
        var u = JSON.stringify(i).replace(/\"/g, "^^");
        this._shouldUseCookie(n) ? a.setInCookie(e, u) : (this.clearExpired(n), void 0 !== c.setItem && "undefined" !== c.removeItem ? (c.removeItem(e), c.setItem(e, u)) : c[e] = u), r = !0
      }
      return r
    }, a.getItem = function(e, t, n) {
      var o, i;
      return n = n || this._getDaStorage(t), i = this._shouldUseCookie(t) ? a.getFromCookie(e) : void 0 !== n.getItem ? n.getItem(e) : n[e], "undefined" != typeof JSON && void 0 !== i && null !== i ? -1 !== i.indexOf("^^_ts_^^") ? (o = JSON.parse(i.replace(/\^\^/g, '"')), o._exp_ && (new Date).getTime() > o._exp_ && (o = null, this.removeItem(e, t, n))) : o = i : o = null, o ? o._data_ : o
    }, a.getKey = function(t, n, o) {
      return o = o || this._getDaStorage(n), o.key ? o.key(t) : e.map(o, function(e, t) {
        return t
      })[t]
    }, a.getLength = function(t, n) {
      return n = n || this._getDaStorage(t), void 0 !== n.length ? n.length : e.size(n)
    }, a.removeItem = function(e, t, n) {
      n = n || this._getDaStorage(t), n.removeItem ? n.removeItem(e) : delete n[e]
    }, a.clear = function(e) {
      var t = this._getDaStorage(e);
      t.clear ? t.clear() : "local" === e || "session" === e ? this.memoryStore["_" + e + "Storage"] = {} : this.memoryStore = {}
    }, a.clearExpired = function(e) {
      for (var t = this._getDaStorage(e), n = this.getLength(e, t), o = n; o; o--) this.getItem(this.getKey(o - 1, e, t), e, t)
    }, a.clearNamespaced = function(e, t) {
      var n = this._getDaStorage(t),
        o = this.getLength(t, n);
      e = (e + ":").replace(/::/g, ":");
      for (var i = o; i; i--) {
        var r = this.getKey(i - 1, t, n);
        0 === r.indexOf(e) && this.removeItem(r, t, n)
      }
    }, a._shouldUseCookie = function(e) {
      return "cookie" === e || !this._hasSupportedStorageType(e) && this.fallbackToCookie
    }, a._getDaStorage = function(e) {
      switch (e) {
        case "local":
          return this._hasSupportedStorageType(e) ? n : this.memoryStore._localStorage;
        case "session":
          return this._hasSupportedStorageType(e) ? o : this.memoryStore._sessionStorage;
        case "memory":
          return this.memoryStore
      }
    }, a._hasSupportedStorageType = function(e) {
      return "local" === e && this.supportsLocalStorage || "session" === e && this.supportsSessionStorage
    }, a.setLocalItem = function(e, t, n) {
      return a.setItem(e, t, "local", n)
    }, a.getLocalItem = function(e) {
      return a.getItem(e, "local")
    }, a.getLocalKey = function(e) {
      return a.getKey(e, "local")
    }, a.getLocalLength = function() {
      return a.getLength("local")
    }, a.removeLocalItem = function(e) {
      return a.removeItem(e, "local")
    }, a.clearLocal = function() {
      return a.clear("local")
    }, a.clearLocalExpired = function() {
      return a.clearExpired("local")
    }, a.clearLocalNamespaced = function(e) {
      return a.clearNamespaced(e, "local")
    }, a.setSessionItem = function(e, t, n) {
      return a.setItem(e, t, "session", n)
    }, a.getSessionItem = function(e) {
      return a.getItem(e, "session")
    }, a.getSessionKey = function(e) {
      return a.getKey(e, "session")
    }, a.getSessionLength = function() {
      return a.getLength("session")
    }, a.removeSessionItem = function(e) {
      return a.removeItem(e, "session")
    }, a.clearSession = function() {
      return a.clear("session")
    }, a.clearSessionExpired = function() {
      return a.clearExpired("session")
    }, a.clearSessionNamespaced = function(e) {
      return a.clearNamespaced(e, "session")
    }, r && a.clearExpired("local"), c && a.clearExpired("session"), a
  }), define("cache", ["underscore", "utils", "storage"], function(e, t, n) {
    "use strict";
    return function() {
      function o(n) {
        return this.options = n || {}, this.cid = e.uniqueId("fc"), t.getSetOptions(this.defaults, ["expires", "type", "namespace"], n, this), "session" !== n.type || n.expires || (this.expires = c), (this.expires || 0 === this.expires) && this.type && this.namespace ? e.contains(r, this.namespace) && !e.contains(i, this.namespace) ? void(this.invalid = !0) : (this.initialize.apply(this, arguments), e.contains(r, this.namespace) || r.push(this.namespace), void("function" == typeof Object.freeze && Object.freeze(this))) : void(this.invalid = !0)
      }
      var i = ["global", "app", "page", "mediator", "model", "collection"],
        r = [];
      o.extend = t.extend;
      var c = 6048e5;
      return o.prototype.defaults = {
        expires: 6e5,
        type: "local",
        namespace: ""
      }, o.prototype.objectType = "Cache", o.prototype.initialize = function() {}, o.prototype._cacheNamespace = function() {
        return "cache:" + this.type + ":" + this.namespace + ":"
      }, o.prototype._cacheKey = function(e) {
        return this._cacheNamespace() + e
      }, o.prototype.set = function(e, t) {
        this.invalid || t && e && n.setItem(this._cacheKey(e), t, this.type, this.expires)
      }, o.prototype.get = function(e) {
        return n.getItem(this._cacheKey(e), this.type)
      }, o.prototype.remove = function(e) {
        n.removeItem(this._cacheKey(e), this.type)
      }, o.prototype.clear = function() {
        n.clearNamespaced(this._cacheNamespace(), this.type)
      }, o.prototype.release = function() {
        this.clear(), this.unlockNamespace()
      }, o.prototype.unlockNamespace = function() {
        r = e.without(r, this.namespace)
      }, o
    }()
  }), define("mediator", ["jquery", "underscore", "backbone", "cache", "utils"], function(e, t, n, o, i) {
    "use strict";
    var r = {};
    r._callbacks = null, t.extend(r, n.Events), r.subscribeEvent = function(e, t) {
      return r.off(e, t, this), r.on(e, t, this)
    }, r.unsubscribeEvent = function(e, t) {
      return r.off(e, t, this)
    }, r.unsubscribeAllEvents = function() {
      return r.off(null, null, this)
    }, r.publishEvent = function() {
      var e, t;
      return t = arguments[0], e = 2 <= arguments.length ? i.slice.call(arguments, 1) : [], r.trigger.apply(r, [t].concat(i.slice.call(e)))
    };
    var c = function(e, n, o, i) {
        if (i && i.split) {
          var r = i.split(/\s+/);
          t.each(r, function(t) {
            var i = e[t];
            if (!i) throw new Error("Method '" + t + "' was configured as an event handler, but does not exist.");
            e.listenTo(n, o, i)
          })
        }
      },
      a = function(e, t, n, o) {
        e.listenTo(t, n, o)
      },
      s = function(e, n, o, i) {
        if (i && i.split) {
          var r = i.split(/\s+/);
          t.each(r, function(t) {
            var i = e[i];
            e.stopListening(n, o, i)
          })
        }
      },
      u = function(e, t, n, o) {
        e.stopListening(t, n, o)
      },
      p = function(e, n, o, i, r) {
        n && o && (t.isFunction(o) && (o = o.call(e)), t.each(o, function(o, c) {
          t.isFunction(o) ? i(e, n, c, o) : r(e, n, c, o)
        }))
      };
    r.bindEntityEvents = function(e, t, n) {
      p(e, t, n, a, c)
    }, r.unbindEntityEvents = function(e, t, n) {
      p(e, t, n, u, s)
    }, r.cacheKey = function() {
      return t.result(this, "url") || t.result(this, "_cacheKey")
    }, r.setCacheKey = function(e) {
      this._cacheKey = e
    }, r._cacheNamespace = "mediator", r.hasCache = function() {
      return !(!this.cache || "Cache" !== this.cache.objectType)
    }, r.initCache = function(e, n) {
      if (e = e || {}, !e.cache && n && (e.cache = e), n && (this.cache && this.cache.release && this.cache.release(), this.cache = !0), i.getSetOptions(this, ["cache"], e, this), this.cache && "Cache" !== this.cache.objectType) {
        var r = {
            namespace: t.result(this, "_cacheNamespace")
          },
          c = !0 === this.cache ? r : t.extend(r, this.cache);
        this.cache = new o(c)
      }
    }, r.storeInCache = function(e, t) {
      this.cache && this.cache.set && this.cache.set(e, t)
    }, r.retrieveFromCache = function(e) {
      if (this.cache && this.cache.get) return this.cache.get(e)
    }, r.removeFromCache = function(e) {
      if (this.cache && this.cache.remove) return this.cache.remove(e)
    }, r.setFromCache = function(e) {
      if (this.set) return this.set(this.retrieveFromCache(e))
    }, r.clearCache = function() {
      if (this.cache && this.cache.clear) return this.cache.clear()
    }, r.releaseCache = function() {
      if (this.cache && this.cache.release) return this.cache.release()
    }, r.unlockCacheNamespace = function() {
      if (this.cache && this.cache.unlockNamespace) return this.cache.unlockNamespace()
    };
    var l;
    return r.initGlobalCache = function() {
      var e = {
        expires: 31536e6,
        type: "local",
        namespace: "global"
      };
      return void 0 === l && (l = new o(e)), l
    }, r.storeInGlobalCache = function(e, t) {
      void 0 === l && this.initGlobalCache(), l && l.set && l.set(e, t)
    }, r.retrieveFromGlobalCache = function(e) {
      if (l && l.get) return l.get(e)
    }, r.clearGlobalCache = function() {
      if (l && l.clear) return l.clear()
    }, r.cachableSync = function(e) {
      return function(t, n, o) {
        var r, c, a = this.cacheKey(),
          s = this;
        return this.ignoreCacheOnce || (r = this.retrieveFromCache(a)), r ? (this.trigger("request", this, c, o), c = i.resolvedPromise(r, "success", {
          cacheKey: a,
          fromCache: !0
        }), c.responseText = r, c.readyState = 4, c.status = 304, c.statusText = "OK", o.success.call(this, r), this.fetchedFromCache = !0) : (delete this.fetchedFromCache, c = e.prototype.sync.call(this, t, n, o), c.done(function(e) {
          s.cache ? (s.storeInCache(a, e), s.storedInCache = !0) : s.storedInCache = !1, s.ignoreCacheOnce && delete s.ignoreCacheOnce
        })), c
      }
    }, r._boundObjects = {}, r.registerObject = function(e, t) {
      void 0 === r._boundObjects[e] && (r._boundObjects[e] = t)
    }, r.bindObject = function(e) {
      function t(e) {
        void 0 === n.prototype[c] && (n.prototype[c] = {}), 0 === c.indexOf("sub") ? n.prototype[c][i] = e : n.prototype[c] = e, r._boundObjects[i] = e
      }
      var n = e.targetObj,
        o = e.boundObj,
        i = e.boundObjName,
        c = e.targetPropName;
      o = o || r._boundObjects[i], void 0 === o ? r.subscribeEvent(i + ":instanceCreated", t) : t(o)
    }, r.bindGlobalModel = function(e) {
      void 0 === e.targetPropName && (e.targetPropName = "subModels"), r.bindObject(e)
    }, r.bindGlobalCollection = function(e) {
      void 0 === e.targetPropName && (e.targetPropName = "subCollections"), r.bindObject(e)
    }, r.seal = function() {
      if (i.propertyDescriptors && Object.seal) return Object.seal(r)
    }, i.readonly(r, "seal"), r
  }), define("app_layout", ["jquery", "underscore", "backbone", "utils", "mediator"], function(e, t, n, o, i) {
    "use strict";
    return function() {
      function r(e) {
        return this.openLink = o.bind(this.openLink, this), null == e && (e = {}), this.title = e.title, this.settings = t(e).defaults({
          titleTemplate: t.template("<%= subtitle %> – <%= title %>"),
          openExternalToBlank: !1,
          routeLinks: "a, .go-to",
          skipRouting: ".norouting",
          hideOldView: !1,
          hiddenClass: "hidden",
          abortLink: null,
          scrollTo: [0, 0]
        }), this.subscribeEvent("beforeControllerDispose", this.hideOldView), this.subscribeEvent("startupController", this.showNewView), this.subscribeEvent("registerAppEvents", this.delegateEvents), this.subscribeEvent("!adjustTitle", this.adjustTitle), this.settings.routeLinks && this.startLinkRouting(), this.initialize.apply(this, arguments), this.delegateEvents()
      }
      return r.extend = o.extend, t(r.prototype).extend(i), r.prototype.title = "", r.prototype.events = {}, r.prototype.el = document, r.prototype.$el = e(document), r.prototype.cid = "AppLayout", r.prototype.objectType = "AppLayout", r.prototype.initialize = function(e) {}, r.prototype._addEvents = function(e, t) {
        for (var n in e)(void 0 === this.events[n] || t) && (this.events[n] = e[n])
      }, r.prototype._delegateEvents = n.View.prototype.delegateEvents, r.prototype.delegateEvents = function(e, t) {
        e && this._addEvents(e, t), this._delegateEvents()
      }, r.prototype.undelegateEvents = n.View.prototype.undelegateEvents, r.prototype.hideOldView = function(e) {
        var t, n;
        if (t = this.settings.scrollTo, t && window.scrollTo(t[0], t[1]), (n = e.view) && !n.disposed && this.settings.hideOldView) return n.$el.addClass(this.settings.hiddenClass)
      }, r.prototype.showNewView = function(e) {
        var t;
        if ((t = e.controller.view) && this.settings.hideOldView) return t.$el.removeClass(this.settings.hiddenClass)
      }, r.prototype.adjustTitle = function(e) {
        var t;
        return null == e && (e = ""), t = this.settings.titleTemplate({
          title: this.title,
          subtitle: e
        }), window.setTimeout(function() {
          return document.title = t, t
        }, 50)
      }, r.prototype.startLinkRouting = function() {
        if (this.settings.routeLinks) return e(document).on("click", this.settings.routeLinks, this.openLink)
      }, r.prototype.stopLinkRouting = function() {
        if (this.settings.routeLinks) return e(document).off("click", this.settings.routeLinks)
      }, r.prototype.openLink = function(t) {
        var n, i, r, c, a, s, u, p, l, d, M, f, h, b;
        if (!o.modifierKeyPressed(t) && (r = t.currentTarget, n = e(r), a = "A" === r.nodeName, null !== (c = n.attr("href") || n.data("href") || null) && void 0 !== c && "" !== c && "#" !== c.charAt(0) && !(a && ("_blank" === n.attr("target") || "external" === n.attr("rel") || "http:" !== (M = r.protocol) && "https:" !== M && "file:" !== M) || (l = r.skipRouting || this.settings.skipRouting, "function" === (d = typeof l) && l(c, r) || "string" === d && n.is(l))))) {
          if (!(!a || (f = r.hostname) === location.hostname || "" === f)) return void(this.settings.openExternalToBlank && (t.preventDefault(), window.open(r.href)));
          if (a ? (u = r.pathname, p = r.search.substring(1), "/" !== u.charAt(0) && (u = "/" + u)) : (h = c.split("?"), u = h[0], p = h[1], null == p && (p = "")), s = {
              queryString: p
            }, i = function(e) {
              e ? t.preventDefault() : a || (location.href = u)
            }, b = r.abortLink || this.settings.abortLink) {
            t.preventDefault();
            var A = this;
            b(c, r).done(function(e) {
              "boolean" == typeof e && e || A.publishEvent("!router:route", u, s, i)
            }).fail(function() {})
          } else this.publishEvent("!router:route", u, s, i)
        }
      }, r.prototype.disposed = !1, r.prototype.dispose = function() {
        if (!this.disposed) return this.stopLinkRouting(), this.unsubscribeAllEvents(), this.undelegateEvents(), delete this.title, this.events = {}, this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
      }, r
    }()
  }), define("dispatcher", ["jquery", "underscore", "backbone", "utils", "mediator", "require"], function(e, t, n, o, i, r) {
    "use strict";
    return function() {
      function e(e) {
        null == e && (e = {}), this.settings = t(e).defaults({
          controllerPath: "controllers/",
          controllerSuffix: "_controller",
          startAction: "start"
        }), this.initialize.apply(this, arguments), this.subscribeEvent("matchRoute", this.matchRouteHandler)
      }
      return e.extend = o.extend, t(e.prototype).extend(i), e.prototype.objectType = "Dispatcher", e.prototype.previousControllerName = null, e.prototype.currentControllerName = null, e.prototype.currentController = null, e.prototype.currentAction = null, e.prototype.currentParams = null, e.prototype.url = null, e.prototype.initialize = function(e) {}, e.prototype.matchRouteHandler = function(e, t, n) {
        return this.startupController(e.controller, e.action, t, n)
      }, e.prototype.startupController = function(e, n, o, i) {
        var r = this;
        if (null == n && (n = this.settings.startAction), o = o ? t.clone(o) : {}, i = i ? t.clone(i) : {}, !1 !== i.changeURL && (i.changeURL = !0), !0 !== i.forceStartup && (i.forceStartup = !1), i.forceStartup || this.currentControllerName !== e || this.currentAction !== n || this.url !== i.path || this.currentParams && !t(o).isEqual(this.currentParams)) return this.loadController(e, function(t) {
          return r.controllerLoaded(e, n, o, i, t)
        })
      }, e.prototype.loadController = function(e, t) {
        var n, i;
        return n = o.underscorize(e) + this.settings.controllerSuffix, i = this.settings.controllerPath + n, (void 0 !== define && null !== define ? define.amd : void 0) ? r([i], t) : t(r(i))
      }, e.prototype.controllerLoaded = function(e, t, n, o, i) {
        var r, c;
        return r = new i(n, o), c = r.beforeAction ? "executeBeforeActions" : "executeAction", this[c](r, e, t, n, o)
      }, e.prototype.executeAction = function(e, t, n, o, i) {
        var r, c;
        if (c = this.currentControllerName || null, r = this.currentController || null, this.previousControllerName = c, r && (this.publishEvent("beforeControllerDispose", r), r.dispose(o, t)), i.previousControllerName = c, e[n](o, i), !e.redirected) return this.currentControllerName = t, this.currentController = e, this.currentAction = n, this.currentParams = o, this.adjustURL(o, i), this.publishEvent("startupController", {
          previousControllerName: this.previousControllerName,
          controller: this.currentController,
          controllerName: this.currentControllerName,
          params: this.currentParams,
          options: i
        })
      }, e.prototype.executeBeforeActions = function(e, t, n, i, r) {
        var c, a, s, u, p, l, d, M, f, h = this;
        for (u = [], a = arguments, f = o.getAllPropertyVersions(e, "beforeAction"), d = 0, M = f.length; d < M; d++) {
          c = f[d];
          for (p in c)
            if (s = c[p], p === n || new RegExp("^" + p + "$").test(n)) {
              if ("string" == typeof s && (s = e[s]), "function" != typeof s) throw new Error("Controller#executeBeforeActions: " + s + " is not a valid beforeAction method for " + p + ".");
              u.push(s)
            }
        }
        return (l = function(t, n) {
          if (null == n && (n = null), !e.redirected) return t ? (n = t.call(e, i, r, n), n && "function" == typeof n.then ? n.then(function(t) {
            if (!h.currentController || e === h.currentController) return l(u.shift(), t)
          }) : l(u.shift(), n)) : void h.executeAction.apply(h, a)
        })(u.shift())
      }, e.prototype.adjustURL = function(e, t) {
        var n;
        if (null != t.path) return n = t.path + (t.queryString ? "?" + t.queryString : ""), t.changeURL && this.publishEvent("!router:changeURL", n, t), this.url = n, n
      }, e.prototype.disposed = !1, e.prototype.dispose = function() {
        if (!this.disposed) return this.unsubscribeAllEvents(), this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
      }, e
    }()
  }), define("controller", ["jquery", "underscore", "backbone", "utils", "mediator"], function(e, t, n, o, i) {
    "use strict";
    return function() {
      function e(e, n) {
        var o = t.extend({}, n);
        o.urlParams = e, this.cid = t.uniqueId("fctrl"), this.req = o, this.initialize.apply(this, arguments), this.subscribeEvent("app:i18n:updated", this.i18nUpdated)
      }
      return e.extend = o.extend, t(e.prototype).extend(i), e.prototype.view = null, e.prototype.redirected = !1, e.prototype.objectType = "Controller", e.prototype.initialize = function() {}, e.prototype.start = function() {
        "function" == typeof this.beforeStart && this.beforeStart(), this.show()
      }, e.prototype.show = function() {
        "function" == typeof this.beforeShow && this.beforeShow(), this.publishEvent("contentContainer:show", this.view)
      }, e.prototype.update = function() {
        "function" == typeof this.beforeUpdate && this.beforeUpdate(), this.start()
      }, e.prototype.adjustTitle = function(e) {
        return this.publishEvent("!adjustTitle", e)
      }, e.prototype.redirectTo = function(e, t) {
        return null == t && (t = {}), this.redirected = !0, this.publishEvent("!router:route", e, t, function(e) {
          if (!e) throw new Error("Controller#redirectTo: no route matched")
        })
      }, e.prototype.redirectToRoute = function(e, t, n) {
        return this.redirected = !0, this.publishEvent("!router:routeByName", e, t, n, function(e) {
          if (!e) throw new Error("Controller#redirectToRoute: no route matched")
        })
      }, e.prototype.i18nUpdated = function() {
        this.update()
      }, e.prototype.disposed = !1, e.prototype.dispose = function() {
        var e, t, n, i, r;
        if ("function" == typeof this.beforeDispose && this.beforeDispose(), !this.disposed) {
          for (t in this) o.hasProp.call(this, t) && (e = this[t]) && "function" == typeof e.dispose && (e.dispose(), delete this[t]);
          for (this.unsubscribeAllEvents(), this.stopListening(), n = ["redirected"], i = 0, r = n.length; i < r; i++) t = n[i], delete this[t];
          return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
        }
      }, e
    }()
  }), define("route", ["jquery", "underscore", "backbone", "utils", "mediator", "controller"], function(e, t, n, o, i, r) {
    "use strict";
    return function() {
      function e(e, n, i, c) {
        if (this.pattern = e, this.controller = n, this.action = i, this.handler = o.bind(this.handler, this), this.addParamName = o.bind(this.addParamName, this), this.options = c ? t.clone(c) : {}, null != this.options.name && (this.name = this.options.name), this.paramNames = [], t(r.prototype).has(this.action) && !t.contains(u, this.action)) throw new Error("Route: You should not use existing controller properties as action names");
        this.createRegExp()
      }
      var n, c, a, s, u;
      return e.extend = o.extend, t(e.prototype).extend(i), s = ["path", "changeURL"], u = ["start", "show", "update"], n = /[\-\[\]{}()+?.,\\\^$|#\s]/g, c = "&", a = "=", e.prototype.objectType = "Route", e.prototype.reverse = function(e) {
        var n, o, i, r, c, a, s, u;
        if (r = this.pattern, t.isRegExp(r)) return !1;
        if (i = "Route#reverse: Not enough parameters to reverse", t.isArray(e)) {
          if (e.length < this.paramNames.length) throw new Error(i);
          n = 0, r = r.replace(/[:*][^\/\?]+/g, function(t) {
            var o;
            return o = e[n], n += 1, o
          })
        } else
          for (u = this.paramNames, a = 0, s = u.length; a < s; a++) {
            if (o = u[a], void 0 === (c = e[o])) throw new Error(i);
            r = r.replace(new RegExp("[:*]" + o, "g"), c)
          }
        return !!this.test(r) && r
      }, e.prototype.createRegExp = function() {
        var e;
        return t.isRegExp(this.pattern) ? (this.regExp = this.pattern, void(t.isArray(this.options.names) && (this.paramNames = this.options.names))) : (e = this.pattern.replace(n, "\\$&").replace(/(?::|\*)(\w+)/g, this.addParamName), this.regExp = new RegExp("^" + e + "(?=\\?|$)"), this.regExp)
      }, e.prototype.addParamName = function(e, n) {
        if (t(s).include(n)) throw new Error("Route#addParamName: parameter name " + n + " is reserved");
        return this.paramNames.push(n), ":" === e.charAt(0) ? "([^/?]+)" : "(.*?)"
      }, e.prototype.test = function(e) {
        var t, n, i, r;
        if (!this.regExp.test(e)) return !1;
        if (n = this.options.constraints) {
          r = this.extractParams(e);
          for (i in n)
            if (o.hasProp.call(n, i) && (t = n[i], !t.test(r[i]))) return !1
        }
        return !0
      }, e.prototype.handler = function(e, n) {
        var o, i, r;
        return n = n ? t.clone(n) : {}, n.routeParams = this.options, i = null != (r = n.queryString) ? r : this.getCurrentQueryString(), o = this.buildParams(e, i), n.path = e, this.publishEvent("matchRoute", this, o, n)
      }, e.prototype.getCurrentQueryString = function() {
        return location.search.substring(1)
      }, e.prototype.buildParams = function(e, n) {
        return t.extend({}, this.extractQueryParams(n), this.extractParams(e), this.options.params)
      }, e.prototype.extractParams = function(e) {
        var t, n, o, i, r, c, a, s;
        for (r = {}, o = this.regExp.exec(e), s = o.slice(1), t = c = 0, a = s.length; c < a; t = ++c) n = s[t], i = this.paramNames.length ? this.paramNames[t] : t, r[i] = n;
        return r
      }, e.prototype.extractQueryParams = function(e) {
        var t, n, o, i, r, s, u, p, l;
        if (r = {}, !e) return r;
        for (i = e.split(c), u = 0, p = i.length; u < p; u++) o = i[u], o.length && (l = o.split(a), n = l[0], s = l[1], n.length && (n = decodeURIComponent(n), s = decodeURIComponent(s), t = r[n], t ? t.push ? t.push(s) : r[n] = [t, s] : r[n] = s));
        return r
      }, e
    }()
  }), define("router", ["jquery", "underscore", "backbone", "utils", "mediator", "route"], function(e, t, n, o, i, r) {
    "use strict";
    return function() {
      function e(e) {
        this.options = null != e ? e : {}, this.route = o.bind(this.route, this), this.match = o.bind(this.match, this), t(this.options).defaults({
          pushState: !0,
          root: "/"
        }), this.removeRoot = new RegExp("^" + o.escapeRegExp(this.options.root) + "(#)?"), this.subscribeEvent("!router:route", this.routeHandler), this.subscribeEvent("!router:routeByName", this.routeByNameHandler), this.subscribeEvent("!router:reverse", this.reverseHandler), this.subscribeEvent("!router:changeURL", this.changeURLHandler), this.subscribeEvent("app:navigate", this.changeURLHandler), this.createHistory()
      }
      return e.extend = o.extend, t(e.prototype).extend(i), e.prototype.objectType = "Router", e.prototype.start = function() {
        this.startHistory()
      }, e.prototype.createHistory = function() {
        return n.history || (n.history = new n.History)
      }, e.prototype.startHistory = function() {
        return n.history.start(this.options)
      }, e.prototype.stopHistory = function() {
        if (n.History.started) return n.history.stop()
      }, e.prototype.deleteHistory = function() {
        this.stopHistory(), delete n.history
      }, e.prototype.match = function(e, t, o) {
        var i, c, a, s;
        if (null == o && (o = {}), 2 === arguments.length && "object" == typeof t) {
          if (o = t, c = o.controller, i = o.action, !c || !i) throw new Error("Router#match must receive either target or options.controller & options.action")
        } else {
          if (c = o.controller, i = o.action, c || i) throw new Error("Router#match cannot use both target and options.controller / action");
          s = t.split("#"), c = s[0], i = s[1]
        }
        return a = new r(e, c, i, o), n.history.handlers.push({
          route: a,
          callback: a.handler
        }), a
      }, e.prototype.route = function(e, o) {
        var i, r, c, a;
        if (o = o ? t.clone(o) : {}, t(o).defaults({
            changeURL: !0
          }), e = e.replace(this.removeRoot, ""), void 0 === n.history);
        else
          for (a = n.history.handlers, r = 0, c = a.length; r < c; r++)
            if (i = a[r], i.route.test(e)) return i.callback(e, o), !0;
        return !1
      }, e.prototype.routeHandler = function(e, t, n) {
        var o;
        return 2 === arguments.length && "function" == typeof t && (n = t, t = {}), o = this.route(e, t), "function" == typeof n ? n(o) : void 0
      }, e.prototype.routeByNameHandler = function(e, t, n, o) {
        var i, r;
        return 3 === arguments.length && "function" == typeof n && (o = n, n = {}), i = this.reverse(e, t), "string" == typeof i ? (r = this.route(i, n), "function" == typeof o ? o(r) : void 0) : "function" == typeof o ? o(!1) : void 0
      }, e.prototype.reverse = function(e, t) {
        var o, i, r, c, a;
        for (a = n.history.handlers, r = 0, c = a.length; r < c; r++)
          if (o = a[r], o.route.name === e && !1 !== (i = o.route.reverse(t))) return i;
        return !1
      }, e.prototype.reverseHandler = function(e, t, n) {
        return n(this.reverse(e, t))
      }, e.prototype.changeURL = function(e, t) {
        var o;
        return !0 === t ? o = !0 : (null == t && (t = {}), o = {
          trigger: !0 === t.trigger,
          replace: !0 === t.replace
        }), n.history.navigate(e, o)
      }, e.prototype.changeURLHandler = function(e, t) {
        return this.changeURL(e, t)
      }, e.prototype.disposed = !1, e.prototype.dispose = function() {
        if (!this.disposed) return this.stopHistory(), delete n.history, this.unsubscribeAllEvents(), this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
      }, e
    }()
  }), define("mixins", ["underscore"], function(e) {
    "use strict";
    var t, n, o, i, r, c, a = [].slice;
    o = function(t) {
      var n, i;
      return !e.isObject(t) || e.isFunction(t) ? t : e.isDate(t) ? new Date(t.getTime()) : e.isRegExp(t) ? new RegExp(t.source, t.toString().replace(/.*\//, "")) : (i = e.isArray(t || e.isArguments(t)), n = function(e, t, n) {
        return i ? e.push(o(t)) : e[n] = o(t), e
      }, e.reduce(t, n, i ? [] : {}))
    }, c = function(t) {
      return (t.prototype === {}.prototype || t.prototype === Object.prototype) && e.isObject(t) && !e.isArray(t) && !e.isFunction(t) && !e.isDate(t) && !e.isRegExp(t) && !e.isArguments(t)
    }, n = function(t) {
      return void 0 === t ? {} : e.filter(e.keys(t), function(e) {
        return c(t[e])
      })
    }, t = function(t) {
      return void 0 === t ? [] : e.filter(e.keys(t), function(n) {
        return e.isArray(t[n])
      })
    }, r = function(o, i, c) {
      var a, s, u, p, l, d, M, f, h, b;
      if (null == c && (c = 20), c <= 0) return e.extend(o, i);
      for (d = e.intersection(n(o), n(i)), s = function(e) {
          return i[e] = r(o[e], i[e], c - 1)
        }, M = 0, h = d.length; M < h; M++) l = d[M], s(l);
      for (p = e.intersection(t(o), t(i)), a = function(t) {
          return i[t] = e.union(o[t], i[t])
        }, f = 0, b = p.length; f < b; f++) u = p[f], a(u);
      return e.extend(o, i)
    }, i = function() {
      var t, n, i, c;
      if (i = 2 <= arguments.length ? a.call(arguments, 0, c = arguments.length - 1) : c = 0, n = arguments[c++], e.isNumber(n) || (i.push(n), n = 20), i.length <= 1) return i[0];
      if (n <= 0) return e.extend.apply(this, i);
      for (t = i.shift(); i.length > 0;) t = r(t, o(i.shift()), n);
      return t
    }, e.mixin({
      deepClone: o,
      isBasicObject: c,
      basicObjects: n,
      arrays: t,
      deepExtend: i
    })
  }),
  define("application", ["jquery", "underscore", "backbone", "utils", "mediator", "dispatcher", "router", "app_layout", "module", "mixins"], function(e, t, n, o, i, r, c, a, s) {
    "use strict";
    return function() {
      function n() {
        t.bindAll(this, "_setUserPref", "_getUserPrefs"), this.cid = t.uniqueId("fapp"), this.subscribeEvent("app:i18n:set", this.i18n().set), this.subscribeEvent("app:i18n:change", this.i18n().change), this.subscribeEvent("app:addStartMethod", this.addStartMethod), this.subscribeEvent("app:addStartPromise", this.addStartPromise)
      }
      var u = s.config().controllersPath || "controllers/",
        p = s.config().setGlobalI18nSettings || !1,
        l = s.config().useHeaderToSetLocale || !1,
        d = s.config().localeTypeName || "locale";
      return n.prototype.objectType = "Application", n.extend = o.extend, t(n.prototype).extend(i), n.prototype.startupCallbacks = e.Callbacks(), n.prototype.startupPromises = [], n.prototype.dispatcher = null, n.prototype.appLayout = null, n.prototype.router = null, n.prototype.initialize = function() {}, n.prototype.initAll = function(e, t) {
        this.initCache({
          expires: 432e5,
          type: "local",
          namespace: "fapp"
        }, !0), t = t || {}, this.initGlobalCache(), this.initI18n(t.i18n), this.publishEvent("app:init:start", this._i18n), this.initAppLayout(t.appLayout || {}), this.initPageControllers(t.pageControllers || {}), this.initDispatcher(t.dispatcher || {}), this.initRouter(e, t.router || {}), this.publishEvent("app:init:done", this._i18n)
      }, n.prototype.addStartMethod = function(e) {
        this.startupCallbacks.add(e)
      }, n.prototype.addStartPromise = function(e) {
        this.startupPromises.push(e)
      }, n.prototype.start = function(t) {
        var n = this,
          i = o.deferred(),
          r = i.promise(),
          c = function(e) {
            n.startupCallbacks.fire(e, this), n.router.start(), n.trigger("start", e)
          };
        return this.startupPromises.length > 0 ? e.when.apply(e, this.startupPromises).then(function() {
          c(t), i.resolve.apply(n, t)
        }, function() {
          n.startupFail(t, c), i.reject.apply(n, t)
        }) : (c(t), i.resolve.apply(n, t)), r
      }, n.prototype.startupFail = function(e, t) {
        t(e)
      }, n.prototype.reStart = function(e) {
        return this.start(e)
      }, n.prototype.initDispatcher = function(e) {
        return e = t.extend({
          controllerPath: u
        }, e), this.dispatcher = e.Dispatcher ? new e.Dispatcher(e) : new r(e), this.dispatcher
      }, n.prototype.initAppLayout = function(e) {
        return null == e && (e = {}), null == e.title && (e.title = this.title), this.appLayout = e.AppLayout ? new e.AppLayout(e) : new a(e), this.appLayout
      }, n.prototype.initRouter = function(e, t) {
        return this.router = t.Router ? new t.Router(t) : new c(t), "function" == typeof e && e(this.router.match), this.router
      }, n.prototype.initPageControllers = function() {}, n.prototype.i18nDefaults = function(e) {
        return e
      }, n.prototype.initI18n = function(e, n) {
        if (n && (void 0 !== n.setGlobalI18nSettings && (p = n.setGlobalI18nSettings), void 0 !== n.useHeaderToSetLocale && (l = n.useHeaderToSetLocale), void 0 !== n.localeTypeName && (d = n.localeTypeName)), this._setGlobalI18nSettings = p, e = this.i18nDefaults(e)) {
          var o = this;
          this.storeInGlobalCache("i18n", e), t.each(e, function(e, t) {
            o.i18n().init(t, e.value, e.replaceUserPref)
          })
        }
      }, n.prototype._userPrefs = {}, n.prototype._setUserPref = function(e, t) {
        this._userPrefs = this._userPrefs || {}, this._userPrefs[e] = t, this.storeInCache("userPrefs", this._userPrefs)
      }, n.prototype._getUserPrefs = function(e) {
        return this._userPrefs = this.retrieveFromCache("userPrefs"), e && this._userPrefs ? this._userPrefs[e] : this._userPrefs
      }, n.prototype._i18n = {}, n.prototype.i18n = function() {
        var t = this;
        return {
          init: function(e, n, o) {
            var i = o ? n : t._getUserPrefs(e) || n;
            i && (t._i18n[e] = i, t.i18n().set(e, i), i !== n && t.i18n().updateGlobalCache(e, i))
          },
          set: function(n, o) {
            if (void 0 === t._i18n[n] && t.i18n().updateGlobalCache(n, o), t._i18n[n] = o, t._setUserPref(n, o), t["i18n_set_" + n] && "function" == typeof t["i18n_set_" + n]) t["i18n_set_" + n](o);
            else if (p)
              if (n === d && l) e.ajaxSetup({
                headers: {
                  "Accept-Language": o
                }
              });
              else {
                var i = {};
                i[n] = o, e.ajaxSetup({
                  data: i
                })
              }
          },
          change: function(e, n) {
            t.i18n().set(e, n), t.i18n().updateGlobalCache(e, n), t.publishEvent("app:i18n:updated", e, n)
          },
          updateGlobalCache: function(e, n) {
            var o = t.retrieveFromGlobalCache("i18n");
            void 0 === o[e] && (o[e] = {}), o[e].value = n, t.storeInGlobalCache("i18n", o)
          }
        }
      }, n.prototype.disposed = !1, n.prototype.dispose = function() {
        this.unsubscribeAllEvents(), this.off(), this.stopListening(), this.releaseCache();
        var e, t, n, o;
        if (!this.disposed) {
          for (this.router && "function" == typeof this.router.deleteHistory && this.router.deleteHistory(), t = ["dispatcher", "appLayout", "router"], n = 0, o = t.length; n < o; n++) e = t[n], this[e] && this[e].dispose && this[e].dispose(), delete this[e];
          this.disposed = !0
        }
      }, n
    }()
  }), define("base_model", ["jquery", "underscore", "backbone", "utils", "mediator", "backbone_associations"], function(e, t, n, o, i) {
    "use strict";
    var r = n.AssociatedModel || n.Model,
      c = r.extend({
        constructor: function(e, n) {
          n = n || {}, t.bindAll(this, "fetchDone", "fetchFail", "fetchProgress"), !n.url && this.url && (n.url = this.url), this.initCache(n), this.urlParams = o.getOption(this, "urlParams", n), this.urlHeaders = o.getOption(this, "urlHeaders", n), this.i18n = o.getOption(this, "i18n", n);
          var i = ["url", "urlRoot", "collection"];
          t.extend(this, t.pick(n, i)), r.prototype.constructor.call(this, e, n), this.i18n && !this.collection && (this.initI18n(), this.subscribeEvent("app:i18n:updated", this.i18nUpdated))
        }
      });
    return c.prototype.objectType = "BaseModel", t(c.prototype).extend(i), c.extend = o.extend, c.prototype._cacheNamespace = "model", c.prototype.sync = i.cachableSync(r), c.prototype.fetch = function(e) {
      return t.result(this, "url") || t.result(this, "urlRoot") ? (this.fetchOptions = e, this.urlParams && (e = e || {}, e.data = t.extend({}, this.urlParams, e.data)), this.urlHeaders && (e = e || {}, e.headers = t.extend({}, this.urlHeaders, e.headers)), e = this.setI18nData(e), this.fetchStatus = "start", this.fetched = !1, this.fetchPromise = r.prototype.fetch.call(this, e)) : this.fetchPromise = o.resolvedPromise(), this.fetchPromise.cacheKey = this.cacheKey(), this.fetchPromise.then(this.fetchDone, this.fetchFail, this.fetchProgress), this.fetchPromise
    }, c.prototype.fetchDone = function(e, t, n) {
      this.fetched = !0, this.fetchStatus = t, this.afterFetch(e, t, n)
    }, c.prototype.fetchFail = function(e, t, n) {
      this.fetchStatus = t
    }, c.prototype.fetchProgress = function() {
      this.fetchStatus = "progress"
    }, c.prototype.afterFetch = function(e, t, n) {}, c.prototype.setSilent = function(e, n, o) {
      return "object" == typeof e ? (o = n, this.set(e, t.extend({
        silent: !0
      }, o))) : this.set(e, n, t.extend({
        silent: !0
      }, o))
    }, c.prototype.getAttributes = function() {
      return this.attributes
    }, c.prototype.modifyJSON = function(e) {
      return e
    }, c.prototype.toJSON = function(e) {
      var t = r.prototype.toJSON.apply(this, arguments);
      return t = this.modifyJSON(t)
    }, c.prototype.initI18n = function() {
      var e = this.retrieveFromGlobalCache("i18n"),
        n = this;
      e && t.each(e, function(e, o) {
        void 0 === n.i18n[o] ? (n.i18n[o] = {}, n.i18n[o].ignoreUpdates = !0) : n.i18n[o] = t.extend({}, e, n.i18n[o])
      })
    }, c.prototype.i18nUpdated = function(e, t) {
      this.i18n && this.i18n[e] && !this.i18n[e].ignoreUpdates && (this.i18n._updated = e, this.i18n[e].value = t, this.i18n[e].bustCacheOnChange && (this.ignoreCacheOnce = !0), this.i18n[e].fetchSelfOnChange && this.fetch(this.fetchOptions))
    }, c.prototype.setI18nData = function(e) {
      if (e = e || {}, this.i18n) {
        var n = {};
        t.each(this.i18n, function(e, t) {
          n[t] = e.value
        }), e.data = t.extend({}, e.data, n)
      }
      return e
    }, c.prototype.disposed = !1, c.prototype.dispose = function() {
      var e, n, o, i;
      if (!this.disposed) {
        for (this.trigger("dispose", this), this.unsubscribeAllEvents(), this.off(), this.stopListening(), "function" == typeof this.reject && this.reject(), this.cleanup && (this.cleanup(), t.each(this.relations, function(e) {
            var t = this.attributes[e.key];
            t.dispose && t.dispose()
          }, this)), this.unlockCacheNamespace(), this.clear(), n = ["collection", "attributes", "changed", "i18n", "_escapedAttributes", "_previousAttributes", "_silent", "_pending", "_callbacks"], o = 0, i = n.length; o < i; o++) e = n[o], delete this[e];
        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
      }
    }, c
  }), define("base_collection", ["jquery", "underscore", "backbone", "utils", "mediator", "base_model"], function(e, t, n, o, i, r) {
    "use strict";
    var c = n.Collection.extend({
      constructor: function(e, i) {
        i = i || {}, t.bindAll(this, "fetchDone", "fetchFail", "fetchProgress"), !i.url && this.url && (i.url = this.url), !i.model && this.model && (i.model = this.model), this.initCache(i), this.urlParams = o.getOption(this, "urlParams", i), this.urlHeaders = o.getOption(this, "urlHeaders", i), this.i18n = o.getOption(this, "i18n", i), i.url && (this.url = i.url), n.Collection.prototype.constructor.call(this, e, i), void 0 === this.cid && (this.cid = t.uniqueId("coll")), this.i18n && (this.initI18n(), this.subscribeEvent("app:i18n:updated", this.i18nUpdated))
      }
    });
    return c.prototype.objectType = "BaseCollection", t(c.prototype).extend(i), c.extend = o.extend, c.prototype._cacheNamespace = "collection", c.prototype.model = r, c.prototype.sync = i.cachableSync(n.Collection), c.prototype.fetch = function(e) {
      return this.urlParams && (e = e || {}, e.data = t.extend({}, this.urlParams, e.data)), this.urlHeaders && (e = e || {}, e.headers = t.extend({}, this.urlHeaders, e.headers)), e = this.setI18nData(e), this.fetchStatus = "start", this.fetched = !1, this.fetchPromise = n.Collection.prototype.fetch.call(this, e), this.fetchPromise.cacheKey = this.cacheKey(), this.fetchPromise.then(this.fetchDone, this.fetchFail, this.fetchProgress), this.fetchPromise
    }, c.prototype.fetchDone = function(e, t, n) {
      this.fetched = !0, this.fetchStatus = t, this.afterFetch(e, t, n)
    }, c.prototype.fetchFail = function(e, t, n) {
      this.fetchStatus = t
    }, c.prototype.fetchProgress = function() {
      this.fetchStatus = "progress"
    }, c.prototype.afterFetch = function() {}, c.prototype.modifyJSON = function(e) {
      return e
    }, c.prototype.toJSON = function(e) {
      var t = n.Collection.prototype.toJSON.apply(this, arguments);
      return t = this.modifyJSON(t)
    }, c.prototype.initI18n = function() {
      var e = this.retrieveFromGlobalCache("i18n"),
        n = this;
      e && t.each(e, function(e, o) {
        void 0 === n.i18n[o] ? (n.i18n[o] = {}, n.i18n[o].ignoreUpdates = !0) : n.i18n[o] = t.extend({}, e, n.i18n[o])
      })
    }, c.prototype.i18nUpdated = function(e, t) {
      this.i18n && this.i18n[e] && !this.i18n[e].ignoreUpdates && (this.i18n._updated = e, this.i18n[e].value = t, this.i18n[e].bustCacheOnChange && (this.ignoreCacheOnce = !0), this.i18n[e].fetchSelfOnChange && this.fetch())
    }, c.prototype.setI18nData = function(e) {
      if (e = e || {}, this.i18n) {
        var n = {};
        t.each(this.i18n, function(e, t) {
          n[t] = e.value
        }), e.data = t.extend({}, e.data, n)
      }
      return e
    }, c.prototype.disposed = !1, c.prototype.dispose = function() {
      var e, t, n, o;
      if (!this.disposed) {
        for (this.trigger("dispose", this), this.reset([], {
            silent: !0
          }), this.unsubscribeAllEvents(), this.off(), this.stopListening(), "function" == typeof this.reject && this.reject(), t = ["model", "models", "_byId", "_byCid", "_callbacks"], n = 0, o = t.length; n < o; n++) e = t[n], this[e] && this[e].dispose && this[e].dispose(), delete this[e];
        return this.disposed = !0, "function" == typeof Object.freeze ? Object.freeze(this) : void 0
      }
    }, c
  }), define("dust_helpers_supplement", ["dust", "dust_helpers"], function(e) {
    "use strict";

    function t(e) {
      var t, a, s, u, p, l, d, M, f, h = {
          "((": 1,
          "))": 1,
          "!!": 1,
          "<!": 1,
          ">!": 1,
          ">=!": 1,
          "<=!": 1,
          "==!": 1,
          "!=!": 1,
          "&&!": 1,
          "||!": 1,
          "]&&": 1,
          "]||": 1,
          "]>": 1,
          "]<": 1,
          "]<=": 1,
          "]>=": 1,
          "]==": 1,
          "]!=": 1,
          "].": 1,
          "[(": 1,
          "])": 1,
          ")&&": 1,
          ")||": 1,
          ")>": 1,
          ")<": 1,
          ")<=": 1,
          ")>=": 1,
          ")==": 1,
          ")!=": 1,
          ")!": 1,
          ")]": 1,
          "]]": 1,
          "&&(": 1,
          "||(": 1,
          ">'": 1,
          "<(": 1,
          "<=(": 1,
          ">=(": 1,
          "==(": 1,
          "!=(": 1,
          "!(": 1
        },
        b = [],
        A = 0;
      if (Le[e]) return Le[e];
      for (; A < e.length;)
        if (s = A, u = e[A], (a = e.charCodeAt(A)) === U || a === G) A++;
        else if (a === J || a === $) {
        for (p = O, t = u, A++; A < e.length && (e.charCodeAt(A) === fe && A++, t += e[A], e.charCodeAt(A) !== a);) A++;
        t.charCodeAt(t.length - 1) !== a && (p = _, t = '"Unclosed string constant"'), n(b, p, t.slice(1, t.length - 1)), A++
      } else if (a >= ie && a <= re || a === ne || a === oe && e.charCodeAt(A + 1) >= ie && e.charCodeAt(A + 1) <= re) {
        if (a === ie && e.charCodeAt(A + 1) === me || e.charCodeAt(A + 1) === le) {
          for (; ++A < e.length && L.test(e[A + 1]););
          f = parseInt(e.slice(s, A + 1), 16), n(b, T, f)
        } else {
          if (a !== oe) A = r(e, A), e.charCodeAt(A + 1) === oe && (A += 1);
          else if (e.charCodeAt(A + 1) === oe) {
            n(b, _, "Consecutive periods invalid" + e);
            break
          }
          A = r(e, A), e.charCodeAt(A + 1) !== ze && e.charCodeAt(A + 1) !== pe || (A = c(e, A)), f = parseFloat(e.slice(s, A + 1)), n(b, T, f)
        }
        A++
      } else {
        if (e.charCodeAt(A) === oe) {
          n(b, oe, "."), A++;
          continue
        }
        if (l = i(e.charCodeAt(A), e.charCodeAt(A + 1))) p = N, A += l[1], d = "", b.length > 0 && (M = b[b.length - 1], M.type === N && (d = Y[M.value] + Y[l[0]], h[d] || (l[0] = "Invalid expression, consecutive operators " + d + " in " + e, l[2] = 0, p = _))), n(b, p, l[0], l[2]);
        else {
          for (t = ""; A < e.length;) {
            if (!o(e.charCodeAt(A))) {
              A--;
              break
            }
            t += e[A++]
          }
          if (!t.length) return n(b, _, "Invalid Expression near " + e[A] + e[A + 1]), b;
          n(b, q, t), A++
        }
      }
      var z = b[b.length - 1];
      return z.type === N && z.value !== P && z.value !== H && n(b, _, "Invalid expression, ended with an operator:" + e), Le[e] || (Oe[Te] = e, Le[e] = b, Te = (Te + 1) % ve, Oe[Te] && delete Le[Oe[Te]]), b
    }

    function n(e, t, n, o) {
      e.push({
        type: t,
        value: n,
        priority: o
      })
    }

    function o(e) {
      return e >= Ae && e <= ge || (e >= ue && e <= de || (e >= ie && e <= re || (e === be || (e === K || void 0))))
    }

    function i(e, t) {
      return e === ae && t === ae ? [X, 2, 30] : e === V ? t === ae ? [C, 2, 30] : [D, 1, 50] : e === ce ? t === ae ? [x, 2, 40] : [E, 1, 40] : e === se ? t === ae ? [k, 2, 40] : [w, 1, 40] : e === Q && t === Q ? [B, 2, 20] : e === ye && t === ye ? [S, 2, 10] : e === Me ? [j, 1, 5] : e === he ? [H, 1, 0] : e === Z ? [R, 1, 5] : e === ee ? [P, 1, 0] : void 0
    }

    function r(e, t) {
      for (; t < e.length && e.charCodeAt(t + 1) >= ie && e.charCodeAt(t + 1) <= re;) t += 1;
      return t
    }

    function c(e, t) {
      return e.charCodeAt(++t + 1) !== te && e.charCodeAt(t + 1) !== ne || (t += 1), t = r(e, t)
    }

    function a(e, t, n) {
      for (var o, i = [], r = [], c = [], a = 0; a < e.length;)
        if (o = e[a], o.type !== q && o.type !== oe) {
          if (a++, o.type === N) p(i, r, o);
          else if (o.type === T) r.push(o.value);
          else if (o.type === O) r.push(o.value);
          else if (o.type === _) throw i.length = 0, r.length = 0, o.value
        } else a = s(e, a, n, t, c), r.push(l(c, n)), c.length = 0;
      for (; i.length > 0;) {
        if (o = i[i.length - 1], i.length >= 1 && 0 === r.length) throw "Invalid expression - too few operands:" + t;
        if (o.value === P || o.value === R) throw "Unbalanced parentheses: " + t;
        if (o.value === H || o.value === j) throw "Unbalanced brackets:" + t;
        p(i, r, {
          type: W,
          value: I,
          priority: -9999
        })
      }
      if (r.length > 1) throw "Invalid expression - excess operands:" + t;
      return r.pop()
    }

    function s(e, t, n, o, i) {
      var r, c;
      for (e[t].type === oe && (i.push(""), t++, c = !0); t < e.length;)
        if (r = e[t], t++, r.type === q) i.push(r.value), c = !1;
        else if (r.type === oe) {
        if (c) throw "Consecutive dots in paths are invalid" + o;
        c = !0
      } else {
        if (r.type !== N || r.value !== j) {
          if (c && i.length > 1) throw "Path ending with . is invalid - " + o;
          return t - 1
        }
        t = u(e, t, o, n, i), c = !1
      }
      if (c) throw "Path ending with . is invalid: " + o;
      return t
    }

    function u(e, t, n, o, i) {
      for (var r, c = 1, s = t; s++;) {
        if (s >= e.length) throw "Unbalanced subscript brackets:" + n;
        if (e[s].value === j ? c++ : e[s].value === H && c--, 0 === c) return r = a(e.slice(t, s), n, o), i.push(r), s + 1
      }
    }

    function p(e, t, n) {
      var o, i, r, c, a, s;
      if (s = n.priority, e.length > 0) {
        if (n.value === R || n.value === j || n.value === D) return void e.push(n);
        for (o = e[e.length - 1]; o && s <= o.priority;) {
          if (n.value === P && o.value === R) return void e.pop();
          if (!(r = F[o.value])) throw "Invalid expression format";
          i = e.pop(), o = e[e.length - 1], a = t.pop(), c = i.value === D ? a : t.pop(), t.push(r(c, a))
        }
      }
      n.type !== W && e.push(n)
    }

    function l(e, t) {
      return 1 === e.length && 0 !== e[0].length ? t.get(e[0]) : 0 === e[0].length ? t.getPath(!0, e.slice(1)) : t.getPath(!1, e)
    }

    function d(e, t) {
      return e < t
    }

    function M(e, t) {
      return e > t
    }

    function f(e, t) {
      return e <= t
    }

    function h(e, t) {
      return e >= t
    }

    function b(e, t) {
      return e === t
    }

    function A(e, t) {
      return e !== t
    }

    function z(e, t) {
      return e && t
    }

    function m(e, t) {
      return e || t
    }

    function g(e) {
      return !e
    }
    var y = function(e, t, n, o) {
        var i, r, c, a = {},
          s = t,
          u = e.data;
        o && (s = t.push(o));
        for (r in n)
          if ("block" !== r) {
            e.data = [];
            try {
              c = n[r](e, s).data.join(""), i = JSON.parse(c)
            } catch (e) {
              i = c
            }
            a[r] = i
          }
        return e.data = u, n.block(e, s.push(a))
      },
      v = function(n, o, i, r) {
        var c, s, u = i.block,
          p = i.else;
        if (r) {
          if (r.test) {
            s = r.test, "string" != typeof s && (s = e.helpers.tap(r.test, n, o));
            var l = t(s);
            try {
              c = a(l, s, o)
            } catch (e) {
              return n
            }
          } else if (r.cond) {
            e.helpers.tap(r.cond, n, o)
          }
          if (c) return u ? n.render(i.block, o) : n;
          if (p) return n.render(i.else, o)
        }
        return n
      },
      L = new RegExp("[0-9A-Fa-f]"),
      O = 0,
      T = 1,
      N = 2,
      q = 3,
      _ = 4,
      W = 5,
      S = 0,
      B = 1,
      X = 2,
      C = 3,
      E = 4,
      w = 5,
      x = 6,
      k = 7,
      D = 8,
      R = 9,
      P = 10,
      j = 11,
      H = 12,
      I = 13,
      Y = ["||", "&&", "==", "!=", "<", ">", "<=", ">=", "!", "(", ")", "[", "]", "end"],
      F = [m, z, b, A, d, M, f, h, g],
      U = 32,
      G = 9,
      V = 33,
      J = 34,
      K = 36,
      Q = 38,
      $ = 39,
      Z = 40,
      ee = 41,
      te = 43,
      ne = 45,
      oe = 46,
      ie = 48,
      re = 57,
      ce = 60,
      ae = 61,
      se = 62,
      ue = 65,
      pe = 69,
      le = 88,
      de = 90,
      Me = 91,
      fe = 92,
      he = 93,
      be = 95,
      Ae = 97,
      ze = 101,
      me = 120,
      ge = 122,
      ye = 124,
      ve = 8,
      Le = {},
      Oe = new Array(ve),
      Te = 0;
    e.helpers && (e.helpers.provide = y, e.helpers.if = v)
  }), define("format_constants_model", ["underscore", "base_model", "module", "mediator", "utils"], function(e, t, n, o, i) {
    "use strict";

    function r(e) {
      e = e || {}, l = e && e.url || l, u = e || u;
      var t = {
          dataType: "jsonp",
          jsonp: "_jsonp"
        },
        n = {
          cache: !0,
          dataType: "jsonp",
          jsonpCallback: "formatConstants"
        },
        o = /\.js$|\.jsonp$/.test(l);
      return u.fetchOptions ? u.fetchOptions : u.jsonp ? t : o ? n : {}
    }

    function c(e, t) {
      var n = M.prototype._singleton,
        i = e && e.locale;
      return n || (n = new M(i, t), M.prototype._singleton = n, delete M.prototype.disposed, o.registerObject("FormatConstantsModel", n), o.publishEvent("FormatConstantsModel:instanceCreated", n)), o.publishEvent("FormatConstantsModel:instanceAvailable", n), n
    }
    var a, s, u = n.config() || {},
      p = u.url,
      l = p || "/api/v1/resources/format_constants.json",
      d = void 0 === p,
      M = t.extend({
        initialize: function(e, t) {
          s = t && r(t) || s, void 0 !== a && (null == e || d && "en-US" == e) ? (this.set(this.parse(a)), this.fetchPromise = i.resolvedPromise(), this.fetchDone(a)) : (this.i18n.locale.value = e, this.fetchPromise = this.fetch(s)), o.publishEvent("app:addStartPromise", this.fetchPromise)
        },
        cache: {
          expires: 432e5,
          type: "local",
          namespace: "fmcst"
        },
        i18n: {
          locale: {
            bustCacheOnChange: !0,
            fetchSelfOnChange: !0
          }
        },
        parse: function(t, n) {
          var o = {};
          return e.each(t, function(e, t) {
            t = t.replace(/\./g, "_"), o[t] = e
          }), o
        },
        afterFetch: function(e, t, n) {
          this.publishEvent("formatter:setAttributes", this.attributes)
        },
        url: l,
        dispose: function(e) {
          e && e.force && (t.prototype.dispose.apply(this, arguments), delete M.prototype._singleton, this.clearCache())
        }
      });
    return a = {
      locale: "en-US",
      date_label_monthNames: "January,February,March,April,May,June,July,August,September,October,November,December",
      date_label_monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
      date_label_dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
      date_label_dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat",
      date_label_dayNamesMin: "S,M,T,W,T,F,S",
      date_label_firstDay: "0",
      date_format_input: "MM/dd/yy",
      date_format_short: "MM/dd/yyyy",
      date_format_medium: "EEE, MMM d",
      date_format_medium_expanded: "EEE, MMM d, yyyy",
      date_format_full: "EEEE, M/d/yyyy",
      date_format_expanded: "EEEE, MMMM d, yyyy",
      date_format_month_day: "MM/dd",
      date_format_year: "yyyy",
      date_format_year_short: "yy",
      date_format_month: "MMMM",
      date_format_month_short: "MMM",
      date_format_weekday: "EEEE",
      date_format_weekday_short: "EEE",
      date_format_day: "d",
      date_format_day_full: "dd",
      time_format: "h:mm a",
      time_format_zone: "h:mm a z",
      time_label_am: "am",
      time_label_pm: "pm",
      money_format: "CS###GS###GS###GS###DS00",
      money_format_full: "CS###GS###GS###GS###DS00 CC",
      money_format_symbol: "CS",
      money_format_value: "###GS###GS###GS###DS00",
      "money_format-style1": 'CS<span class="price_value">###GS###GS###GS###DS00</span>',
      "money_format_full-style1": 'CS<span class="price_value">###GS###GS###GS###DS00</span> CC',
      money_currency_code: "USD",
      money_currency_symbol: "$",
      number_format: "###GS###GS###GS###DS###",
      number_label_decimal_separator: ".",
      number_label_grouping_separator: ",",
      number_label_zero_character: "0",
      truncate_character: "…",
      truncate_cssClass: "trunc"
    }, o.subscribeEvent("app:init:start", c), M.prototype._singleton
  }), define("utils_format", ["underscore", "mediator", "format_constants_model", "module"], function(e, t, n, o) {
    "use strict";

    function i(e) {
      e && e.fetchPromise ? e.fetchPromise.done(function(n) {
        r(e.attributes), t.subscribeEvent("formatter:setAttributes", r)
      }) : (X = {}, B = {})
    }

    function r(e) {
      X = e;
      var n = X;
      t.publishEvent("formatter:formatsChanged", X), B = {
        firstDay: n && n.date_label_firstDay,
        monthNames: n && n.date_label_monthNames && n.date_label_monthNames.split(","),
        monthNamesShort: n && n.date_label_monthNamesShort && n.date_label_monthNamesShort.split(","),
        dayNames: n && n.date_label_dayNames && n.date_label_dayNames.split(","),
        dayNamesShort: n && n.date_label_dayNamesShort && n.date_label_dayNamesShort.split(","),
        dayNamesMin: n && n.date_label_dayNamesMin && n.date_label_dayNamesMin.split(","),
        time: n && [n.time_label_am, n.time_label_pm],
        decimalSeparator: n && n.number_label_decimal_separator,
        groupingSeparator: n && n.number_label_grouping_separator,
        zeroCharacter: n && n.number_label_zero_character,
        truncateCharacter: n && n.truncate_character,
        truncateCssClass: n && n.truncate_cssClass,
        currencyCode: n && n.money_currency_code,
        currencySymbol: n && n.money_currency_symbol
      }
    }

    function c(e, t) {
      var n = B[e];
      return n ? null != t ? B[e][t] : n : ""
    }

    function a(e, t, n) {
      return X[e + "_format" + (t ? "_" + t : "") + (n ? "-" + n : "")]
    }

    function s(e, t) {
      if (e) {
        var n = e.match(/[^T]*/)[0].split("-"),
          o = 1 * n[1] - 1;
        return p(new Date(n[0], o, n[2]), t)
      }
      return ""
    }

    function u(e, t) {
      var n = e.toString(),
        o = n.length,
        i = "";
      if (t > o)
        for (var r = o; r < t; r++) i += "0";
      return i + n
    }

    function p(e, t) {
      var n = "";
      if (e.constructor === Date && t) {
        var o = t.length,
          i = e.getFullYear(),
          r = e.getMonth(),
          a = e.getDay(),
          s = 0,
          p = ["" + e.getFullYear(), "" + (r + 1), "" + e.getDate()];
        for (s = 0; s < o; s++) {
          switch (function(e) {
            for (var n = e, i = !0; i;) s + 1 < o && t.charAt(s + 1) === e ? (n += e, s++) : i = !1;
            return n
          }(t.charAt(s))) {
            case "d":
              n += p[2].replace(/^0/, "");
              break;
            case "dd":
              n += u(p[2], 2);
              break;
            case "M":
              n += p[1].replace(/^0/, "");
              break;
            case "MM":
              n += u(p[1], 2);
              break;
            case "MMM":
              n += c("monthNamesShort", r);
              break;
            case "MMMM":
              n += c("monthNames", r);
              break;
            case "yy":
              n += p[0].substring(2);
              break;
            case "yyy":
              (new Date).getFullYear() !== i ? n += p[0].substring(2) : n = n.substring(0, n.lastIndexOf(","));
              break;
            case "yyyy":
              n += p[0];
              break;
            case "yyyyy":
              (new Date).getFullYear() !== i ? n += p[0] : n = n.substring(0, n.lastIndexOf(","));
              break;
            case "EE":
              n += c("dayNamesMin", a);
              break;
            case "EEE":
              n += c("dayNamesShort", a);
              break;
            case "EEEE":
              n += c("dayNames", a);
              break;
            default:
              n += t.charAt(s)
          }
        }
        return n
      }
      return n
    }

    function l(e, t) {
      if (e) {
        var n = 1 + e.indexOf("T"),
          o = e.substr(n),
          i = e.substr(n, 2),
          r = e.substr(n + 3, 2),
          a = e.substr(n + 6, 2),
          s = (o.indexOf("-") + 1 || o.indexOf("+") + 1 || o.indexOf("Z") + 1) - 1,
          u = (-1 === s || s > 9) && 9 < o.length ? e.substr(n + 9, 3) : "000",
          p = (o.substr(s), i <= 12 ? 0 === i ? 12 : i - 0 : i - 12),
          l = t.length,
          d = 0,
          M = "";
        for (d = 0; d < l; d++) {
          switch (function(e) {
            for (var n = e, o = !0; o;) d + 1 < l && t.charAt(d + 1) === e ? (n += e, d++) : o = !1;
            return n
          }(t.charAt(d))) {
            case "h":
              M += p;
              break;
            case "HH":
              M += i - 0;
              break;
            case "mm":
              M += r;
              break;
            case "ss":
              M += a;
              break;
            case "SSS":
              M += u;
              break;
            case "a":
              M += i < 12 ? c("time", 0) : c("time", 1);
              break;
            case "z":
              M += "??";
              break;
            default:
              M += t.charAt(d)
          }
        }
        return M
      }
      return ""
    }

    function d(t, n, o) {
      var i = ["round", "ceil", "floor"],
        r = "CS" === n;
      if (o && o.math && e.contains(i, o.math) && (n = n.replace(/DS[#0]+/g, ""), t = Math[o.math](t)), o && o.currency) {
        var c = o.currency;
        n = n.replace(/CS/g, S[c]), n = n.replace(/CC/g, c)
      } else n = n.replace(/CS/g, B.currencySymbol), n = n.replace(/CC/g, B.currencyCode);
      return r ? n : M(t, n, 2)
    }

    function M(e, t, n) {
      return null == typeof e ? "" : _(e, t, n)
    }

    function f(e, t, n) {
      var o = t;
      switch (e) {
        case "truncate":
          o = O(t, n);
          break;
        case "replace":
          o = T(t, n);
          break;
        case "trim":
          o = h(t);
          break;
        case "fullTrim":
          o = b(t);
          break;
        case "scrub":
          o = A(t);
          break;
        case "xssEncode":
          o = z(t);
          break;
        case "reverse":
          o = m(t, n);
          break;
        case "capitalize":
          o = g(t);
          break;
        case "capitalizeAll":
          o = y(t);
          break;
        case "underscore":
          o = L(t);
          break;
        case "encodeURI":
          o = N(t, n);
          break;
        case "encodeURIComponent":
          o = q(t, n);
          break;
        case "toggle":
          o = v(t, n);
          break;
        default:
          o = t
      }
      return o
    }

    function h(e) {
      return "string" != typeof e ? e : e.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "")
    }

    function b(e) {
      return "string" != typeof e ? e : h(e).replace(/\s+/g, " ")
    }

    function A(e) {
      return "string" != typeof e ? e : b(e).replace(/["()<>{}\[\]\*]/g, "")
    }

    function z(e) {
      return "string" != typeof e ? e : e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function m(e, t) {
      if ("string" != typeof e) return e;
      var n, o = "",
        i = (t || {}).splitstr;
      void 0 === i && (i = " "), n = e.split(i);
      for (var r = n.length; r > 0; r--) o += n[r - 1] + (r - 1 > 0 ? i : "");
      return o
    }

    function g(e) {
      return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.substring(1)
    }

    function y(e) {
      if ("string" != typeof e) return e;
      for (var t = "", n = e.split(" "), o = 0, i = n.length; o < i; o++) t += g(n[o]), o < i - 1 && (t += " ");
      return t
    }

    function v(e, t) {
      if ("string" == typeof e && t && t.substr1 && t.substr2) {
        var n = t.substr1,
          o = t.substr2;
        return -1 !== e.indexOf(n) ? e.replace(n, o) : e.replace(o, n)
      }
      return e
    }

    function L(e) {
      return "string" != typeof e ? e : A(e).replace(/ /g, "_").replace(/[A-Z]/g, function(e, t) {
        return (0 !== t ? "_" : "") + e.toLowerCase()
      })
    }

    function O(e, t) {
      if ("string" != typeof e) return e;
      var n = e;
      if (e && e.length && t && t.length) {
        var o = 1 * t.length,
          i = t.trChar || c("truncateCharacter"),
          r = t.cssClass || c("truncateCssClass"),
          a = t.fullAttr || !1;
        e.length > o && (a = a ? " " + a + '="' + e + '"' : "", n = '<span class="' + r + '"' + a + ">" + e.substr(0, o) + i + "</span>")
      }
      return n
    }

    function T(e, t) {
      if ("string" != typeof e) return e;
      var n = e;
      if (t && t.substr && t.newsubstr && (n = n.replace(t.substr, t.newsubstr)), t && t.regexp && t.newsubstr) {
        var o = t.flags || "g";
        n = n.replace(new RegExp(t.regexp, o), t.newsubstr)
      }
      return n
    }

    function N(e, t) {
      if ("string" != typeof e) return e;
      var n = encodeURI(e);
      return t && t.allowSquareBrackets && (n = n.replace(/%5B/g, "[").replace(/%5D/g, "]")), n
    }

    function q(e, t) {
      return "string" != typeof e ? e : encodeURIComponent(e)
    }

    function _(e, t, n, o, i, r) {
      var a, s = ("" + e).split("."),
        u = s[0],
        p = s[1] || 0;
      t = t.replace(/GS/g, ","), t = t.replace(/DS/g, ".");
      var l, d, M, f = t.split("."),
        h = f[0],
        b = f[1],
        A = "",
        z = u.length,
        m = h.length;
      for (i = i || c("groupingSeparator") || "", o = o || c("decimalSeparator") || ".", r = r || c("zeroCharacter") || "0", b && -1 !== b.indexOf("0") && (p += "0000000000000"), d = m, M = z; d; d--) l = h.charAt(d - 1), "#" === l || "0" === l ? (a = M > 0 || "#" === l ? u.charAt(M - 1) : l, A = a + A, M -= 1) : "," === l && M > 0 ? A = i + A : "," !== l && (A = l + A);
      if (p)
        for (A += o, d = 1, M = p.length; d <= M; d++) l = b.charAt(d - 1), A += "#" === l || "0" === l ? p.charAt(d - 1) : l;
      return A
    }

    function W(e, t, n) {
      var o = t;
      switch (void 0 === e && (e = "json"), e) {
        case "json":
          o = JSON.stringify(t);
          break;
        default:
          o = t
      }
      return o
    }
    var S = o.config().currencyMap || {
      USD: "$",
      CAD: "$",
      GBP: "£",
      EUR: "€"
    };
    n && n.fetchPromise ? i(n) : t.subscribeEvent("FormatConstantsModel:instanceCreated", i);
    var B = {},
      X = {};
    return function(e, t, n, o) {
      var i, r = t.split("."),
        c = r[0],
        u = r[1],
        p = o && o.substyle;
      switch (n || (n = a(c, u, p)), c) {
        case "date":
          i = s(e, n);
          break;
        case "time":
          i = l(e, n);
          break;
        case "money":
          i = d(e, n, o);
          break;
        case "number":
          i = M(e, n);
          break;
        case "string":
          i = f(u, e, o);
          break;
        case "code":
          i = W(u, e, o);
          break;
        default:
          i = e
      }
      return i
    }
  }), define("dust_helpers_format", ["underscore", "utils_format", "dust", "dust_helpers"], function(e, t, n) {
    "use strict";
    var o = function(o, i, r, c) {
      var a, s = c.style,
        u = c.pattern,
        p = c.value,
        l = e.omit(c, ["style", "pattern", "value"]);
      return s && (s = n.helpers.tap(s, o, i)), u && (u = n.helpers.tap(u, o, i)), p = n.helpers.tap(p, o, i), a = t(p, s, u, l), o.write(a), o
    };
    n.helpers && (n.helpers.format || (n.helpers.format = o))
  }), define("dust_renderer", ["jquery", "underscore", "module", "dust", "dust_helpers", "dust_helpers_supplement", "dust_helpers_format"], function(e, t, n, o) {
    "use strict";
    var i = n.config().templatesPath || "/templates",
      r = n.config().globalContextModule,
      c = {
        gc: r ? require(r) : {}
      },
      a = {},
      s = {},
      u = [],
      p = {},
      l = {};
    return function() {
      function n() {
        function n(e) {
          var n = c.call(arguments, 1);
          t.each(s[e], function(e) {
            e.apply(null, n)
          }), delete s[e]
        }
        var r = i + "/%s.js";
        s = this.requestQueue = {};
        var c = Array.prototype.slice;
        this._mainTemplates = u, this._mapPartialsToMain = p, this._mapMainToPartials = l;
        var a = this.getLoadOptions,
          d = o.load;
        o.load = function(e, n, o) {
          if (!t.contains(u, e)) {
            var i = o.stack.head.__tmpl_id || o.stack.tail.head && o.stack.tail.head.__tmpl_id;
            void 0 === p[i] && (p[i] = []), t.contains(p[i], e) || p[i].push(e), l[e] = i
          }
          return d(e, n, o)
        }, o.onLoad = function(o, i) {
          function c(e) {
            try {
              n(o, null, e)
            } catch (e) {
              u(null, null, e)
            }
          }

          function u(e, t, i) {
            n(o, i)
          }
          var p = s.hasOwnProperty(o) ? s[o] : s[o] = [],
            l = null;
          p.push(i), p.length > 1 || (l = {
            url: r.replace("%s", o),
            dataType: "script",
            cache: !0
          }, l = t.extend(l, a(o)), e.ajax(l).done(c).fail(u))
        }, o.compile = function(e, t) {
          throw "no compiled version of template '" + t + "' can be found (most likely a configuration issue)"
        }
      }
      return n.prototype.render = function(t, n, o) {
        var i = new e.Deferred;
        return this._doRender(t, n, function(e, n) {
          if (e) return i.reject(e);
          i.resolve(n, t, o)
        }), i.promise()
      }, n.prototype._doRender = function(e, n, i) {
        t.contains(u, e) || u.push(e), o.render(e, t.extend({}, c, n), i)
      }, n.prototype.bustCache = function(e) {
        delete s[e], delete o.cache[e], p[e] && t.each(p[e], function(e) {
          delete o.cache[e]
        })
      }, n.prototype.setLoadOptions = function(e, n) {
        a[e] = n, this._loadOptions = t.extend({}, a)
      }, n.prototype.getLoadOptions = function(e) {
        var t;
        if (l[e]) {
          var n = l[e];
          t = a[n]
        } else t = a[e];
        return t
      }, n.prototype.clearTemplateMaps = function() {
        u = this._mainTemplates = [], p = this._mapPartialsToMain = {}, l = this._mapMainToPartials = {}
      }, n
    }()
  }), define("base_view", ["jquery", "underscore", "backbone", "utils", "mediator", "dust_renderer", "base_model", "base_collection"], function(e, t, n, o, i, r, c, a) {
    "use strict";
    if (void 0 === t.deepExtend) throw new Error("_.deepExtend is undefined - requires underscore mixin");
    var s = n.View.extend({
      constructor: function(e) {
        this.options = e, t.bindAll(this, "render", "renderDone", "renderFail", "renderAlways", "renderProgress", "beforeRender", "afterRender", "resolveInitDeferred", "renderSubViews");
        var i = this.el;
        e && e.el && (i = e.el), this.elSelector = i, this.setPropsBeforeInitialize(e), this._initializedSubs = !1, n.View.prototype.constructor.apply(this, arguments), this.setPropsAfterInitialize(), this._initAllSubs(), this._delegateEvents(this.model, this.subModels, this.modelEvents, this.appliedModelEvents), this._delegateEvents(this.collection, this.subCollections, this.collectionEvents, this.appliedCollectionEvents), this.el || o.getOption(this, "allowElRemoval") || (this.el = i, this.isElUnset = !0, this.hasUnsetElAtInit = !0), !1 !== this.i18n && (this.initI18n(), this.subscribeEvent("app:i18n:updated", this.i18nUpdated)), this.fetchOnInitialize && (this.fetchDataPromise = this.fetchData())
      }
    });
    return s.prototype.objectType = "BaseView", t(s.prototype).extend(i), s.prototype.setPropsBeforeInitialize = function(e) {
      t.extend(this, e && e.viewMethods), this.modelEvents = o.getOption(this, "modelEvents", e), this.collectionEvents = o.getOption(this, "collectionEvents", e), this.collectionName = o.getOption(this, "collectionName", e) || "items", this.shouldDisposeModel = !1 !== o.getOption(this, "shouldDisposeModel", e), this.bustCacheOnLocaleChange = !1 !== o.getOption(this, "bustCacheOnLocaleChange", e), this.fetchOnInitialize = !1 !== o.getOption(this, "fetchOnInitialize", e), this.fetchOnRender = !0 === o.getOption(this, "fetchOnRender", e), this.skipRenderOnBootstrap = !1 !== o.getOption(this, "skipRenderOnBootstrap", e)
    }, s.prototype.setPropsAfterInitialize = function() {
      this.context = o.getOption(this, "context"), this.omitWrapper = o.getOption(this, "omitWrapper"), this.alwaysOnlyRewrap = o.getOption(this, "alwaysOnlyRewrap"), this.keepContainer = !!o.getOption(this, "el") && !o.getOption(this, "forceRemove"), this.renderCondition = o.getOption(this, "renderCondition"), this.initRenderDeferred = new e.Deferred, this.renderPromise = this.initRenderDeferred.promise(), this.renderCounter = 0
    }, s.prototype.initialize = function() {}, s.prototype.fetchData = function() {}, s.prototype.update = function(e) {
      return this.fetchOnRenderOnce = !0, this.render(e)
    }, s.prototype.renderer = new r, s.prototype.getTemplate = function() {
      return o.getOption(this, "template")
    }, s.prototype.render = function(n, i) {
      var r, c, a = this.renderer,
        s = this.getTemplate();
      if (0 === this.renderCounter ? this.isBootstrapped = this.container ? this.container.isBootstrapped : e(this.el).data("bootstrap") : this.isBootstrapped = !1, "function" == typeof this.renderCondition && (this.renderConditionPromise = this.renderCondition()), (this.fetchOnRender || this.fetchOnRenderOnce) && (this.fetchDataPromise = this.fetchData(), this.fetchOnRenderOnce && (this.fetchOnRenderOnce = !1)), this.disposed && !this.keepContainer) c = o.rejectedPromise(n);
      else if (s)
        if (this.isBootstrapped && this.skipRenderOnBootstrap) this.container && this.setElement(this.container.$el[0].firstChild), c = o.resolvedPromise(n);
        else {
          if (this.isElUnset || this.renderCounter > 0) {
            var u = this.el;
            this.renderCounter > 0 && (this.empty(), delete this.$el), this.setElement(this.elSelector || this.el), void 0 === this.el ? (this.el = u, this.parentView && this.parentView.$el && (this.$el = this.parentView.$el.find(this.el), this.setElement(this.$el), void 0 === this.el ? this.el = u : this.isElUnset = !1)) : this.isElUnset = !1
          }
          var p = this,
            l = o.isPromise(this.fetchDataPromise) && this.fetchDataPromise || this.model && this.model.fetchPromise || this.collection && this.collection.fetchPromise,
            d = function() {
              return r = t.extend({
                __tmpl_id: s
              }, p.serializeData()), p.trigger("before:render"), p.beforeRender(s, r, n), a.render(s, r, n)
            },
            M = function() {
              return l ? l.then(d, d) : d()
            };
          c = this.renderConditionPromise ? this.renderConditionPromise.then(M) : M()
        }
      else c = o.resolvedPromise(n);
      return this.renderPromise = c.then(this.renderDone, this.renderFail, this.renderProgress), this.renderPromise
    }, s.prototype.enhanceData = function(e) {
      return e
    }, s.prototype.serializeData = function() {
      var e;
      if (e = 0 === this.renderCounter ? o.getOption(this, "model") || o.getOption(this, "collection") || {} : this.model || this.collection, e && e.toJSON && (e = e.toJSON()), this.collection) {
        var n = e;
        e = {}, e[this.collectionName] = n
      }
      return this.subModels && t.each(this.subModels, function(n, o) {
        var i = n.toJSON ? n.toJSON() : n;
        e = t.extend({}, e, i)
      }), this.subCollections && t.each(this.subCollections, function(t, n) {
        var o = t.toJSON ? t.toJSON() : t;
        e[n], e[n] = o
      }), this.context && (e = t.extend(e || {}, t.result(this, "context"))), e = this.enhanceData(e)
    }, s.prototype.placeInTarget = function(e, t) {
      var n = document && document.activeElement && document.activeElement.id;
      e.empty().append(t), n && document.getElementById(n) && document.getElementById(n).focus()
    }, s.prototype.processContent = function(e) {
      e && (this.omitWrapper && 0 === this.renderCounter || this.alwaysOnlyRewrap ? this.rewrap(e) : this.omitWrapper ? (this.$containerEl = this.$el.parent(), this.rewrap(e), this.placeInTarget(this.$containerEl, this.$el)) : this.placeInTarget(this.$el, e))
    }, s.prototype.renderDone = function(e, t, n) {
      return this.processContent(e), this.rendered = !0, this.disposed = !1, this.renderCounter++, this.bindUIElements(), n && n.omitResolveInitDeferred || this.resolveInitDeferred(), this.trigger("after:render"), this.afterRender(n), null != this.subViews ? this.renderSubViews() : o.resolvedPromise.call(this, n)
    }, s.prototype.resolveInitDeferred = function() {
      this.initRenderDeferred && "pending" === this.initRenderDeferred.state() && this.initRenderDeferred.resolve()
    }, s.prototype.beforeRender = function(e, t, n) {}, s.prototype.afterRender = function(e) {}, s.prototype.rewrap = function(n, o) {
      return o || (o = this.$el), o = e(n), this.setElement(o), this.id && o.attr("id", t.result(this, "id")), this.className && o.addClass(t.result(this, "className")), o
    }, s.prototype.renderAlways = function() {}, s.prototype.renderProgress = function() {}, s.prototype.renderFail = function(e, t) {
      return o.rejectedPromise.call(this, e, t)
    }, s.prototype.configureTriggers = function() {
      if (this.triggers) {
        var e = this,
          n = {},
          o = t.result(this, "triggers");
        return t.each(o, function(t, o) {
          n[o] = function(n) {
            n && n.preventDefault && n.preventDefault(), n && n.stopPropagation && n.stopPropagation(), e.trigger(t, {
              view: e
            })
          }
        }), n
      }
    }, s.prototype.delegateEvents = function(e) {
      this._delegateDOMEvents(e), this._initializedSubs && (this._delegateEvents(this.model, this.subModels, this.modelEvents, this.appliedModelEvents), this._delegateEvents(this.collection, this.subCollections, this.collectionEvents, this.appliedCollectionEvents))
    }, s.prototype._getParentEvents = function(e, n) {
      return t.filter(e, function(e) {
        return void 0 === typeof n[e]
      })
    }, s.prototype._delegateEvents = function(e, n, o, r) {
      (e || n) && o && !t.isEqual(o, r) && (n ? this._getParentEvents(o, n) : o, i.bindEntityEvents(this, e, o), n && t.each(n, function(e, t) {
        i.bindEntityEvents(this, e, o[t])
      }, this), r = t.extend(r || {}, o))
    }, s.prototype._delegateDOMEvents = function(e) {
      e = e || this.events, t.isFunction(e) && (e = e.call(this));
      var o = {},
        i = this.configureTriggers();
      t.extend(o, e, i), n.View.prototype.delegateEvents.call(this, o)
    }, s.prototype.undelegateEvents = function() {
      n.View.prototype.undelegateEvents.apply(this, arguments), this._undelegateEvents(this.model, this.subModels, this.modelEvents, this.appliedModelEvents), this._undelegateEvents(this.collection, this.subCollections, this.collectionEvents, this.appliedCollectionEvents), this.nonUiEventsBound = !1
    }, s.prototype._undelegateEvents = function(e, n, o, r) {
      (e || n) && o && (n ? this._getParentEvents(o, n) : o, i.unbindEntityEvents(this, e, o), n && t.each(n, function(e, t) {
        i.unbindEntityEvents(this, e, o[t])
      }, this), r = t.extend(r || {}, o)), r = null
    }, s.prototype.empty = function() {
      return this.$el.empty(), this.stopListening(), this
    }, s.prototype._initAllSubs = function() {
      this.subViews = o.getOption(this, "subViews"), this.subModels = o.getOption(this, "subModels"), this.subCollections = o.getOption(this, "subCollections"), this._initSubs("View"), this._initSubs("Model"), this._initSubs("Collection"), this._initializedSubs = !0
    }, s.prototype._initSubs = function(e) {
      var n = "sub" + e + "s";
      if (null != this[n]) {
        var o = this;
        t.each(this[n], function(t, n) {
          o._initSub(t, n, e)
        })
      }
    }, s.prototype._initSub = function(e, n, o) {
      var i = this,
        r = "sub" + o + "s";
      if (e instanceof s && "BaseView" !== e.objectType || "ViewContainer" === e.objectType || "Layout" === e.objectType || e instanceof c && "BaseModel" !== e.objectType || e instanceof a && "BaseCollection" !== e.objectType) delete i[r][n];
      else {
        switch (o) {
          case "View":
            e = e instanceof s ? e : new s(e), e.parentView = i, i.model && (e.subModels = t.extend({}, e.subModels, {
              parentModel: i.model
            })), i.collection && (e.subCollections = t.extend({}, e.subCollections, {
              parentCollection: i.collection
            }));
            break;
          case "Model":
            e = e instanceof c ? e : new c(e);
            break;
          case "Collection":
            e = e instanceof a ? e : new a(e)
        }
        i[r][n] = e
      }
    }, s.prototype.addSubView = function(e, t, n, i) {
      "string" == typeof t && (i = n, n = t, t = void 0), this._initSub(e, n, "View");
      return i && !i.render ? o.resolvedPromise.call(this, t) : this.subViews[n].render(t)
    }, s.prototype.renderSubViews = function() {
      if (null != this.subViews) {
        var n = (this.cid, this.elSelector, []);
        return t.each(this.subViews, function(e, t) {
          n.push(e.render())
        }), e.when.apply(e, n)
      }
    }, s.prototype.initI18n = function() {
      var e = this.retrieveFromGlobalCache("i18n");
      if (e) {
        var n = t.deepExtend({}, e, this.i18n);
        t.each(n, function(e, t) {
          void 0 === n[t].forceTemplateFetchOnChange && (n[t].forceTemplateFetchOnChange = !0), void 0 === n[t].forceRenderOnChange && (n[t].forceRenderOnChange = !0)
        }), this.i18n = n
      }
      this.setTemplateLoadOptions()
    }, s.prototype.i18nUpdated = function(e, t) {
      this.i18n && this.i18n[e] && !this.i18n[e].ignoreUpdates && (this.i18n._updated = e, this.i18n[e].value = t, this.i18n[e].forceTemplateFetchOnChange && (this.bustTemplateCache(), this.setTemplateLoadOptions(), this.setForcedRenderOptions()), this.i18n[e].forceRenderOnChange && this.setForcedRenderOptions())
    }, s.prototype.setI18nData = function(e) {
      if (e = e || {}, this.i18n) {
        var n = {};
        t.each(this.i18n, function(e, t) {
          e.forceTemplateFetchOnChange && (n[t] = e.value)
        }), e.data = t.extend({}, e.data, n)
      }
      return e
    }, s.prototype.setForcedRenderOptions = function() {
      this.rendered = !1, this.fetchOnRenderOnce = !0, this.isBootstrapped = !1
    }, s.prototype.bustTemplateCache = function() {
      this.renderer.bustCache(this.getTemplate())
    }, s.prototype.setTemplateLoadOptions = function(e) {
      this.renderer.setLoadOptions(this.getTemplate(), this.setI18nData(e))
    }, s.prototype.disposeSubs = function(e) {
      var n = e ? this["sub" + e + "s"] : t.extend({}, this.subViews, this.subModels, this.subCollections);
      t.each(n, function(e, t) {
        "parentModel" !== t && e.dispose()
      })
    }, s.prototype.removeSubsReferences = function(e) {
      e ? this["sub" + e + "s"] = void 0 : (this.subViews = void 0, this.subModels = void 0, this.subCollections = void 0)
    }, s.prototype.disposed = !1, s.prototype.disable = function() {
      this.dispose({
        keepContent: !0
      })
    }, s.prototype.dispose = function(e) {
      if (!this.disposed) {
        !1 !== this.trigger("before:dispose") && (this.disposeSubs(), this.removeSubsReferences(), this.unsubscribeAllEvents(), this.off(), this.stopListening(), this.undelegateEvents(), this.trigger("dispose"), e && e.keepContent || (this.keepContainer ? this.empty() : this.remove()), this.disposed = !0, this.rendered = !1, this.shouldDisposeModel && (this.model && this.model.dispose && this.model.dispose(), this.collection && this.collection.dispose && this.collection.dispose()), this.trigger("after:dispose"))
      }
    }, s.prototype.detached = !1, s.prototype.detachContents = function() {
      return this.$contents = this.$el.contents().detach(), this.detached = !0, this
    }, s.prototype.attachContents = function() {
      if (this.detached) return this.$el.append(this.$contents), this.detached = !1, this
    }, s.prototype.bindUIElements = function() {
      if (o.getOption(this, "uiEl")) {
        var e = this;
        this.uiElSelectors || (this.uiElSelectors = o.getOption(this, "uiEl")), this.uiEl = {}, t.each(t.keys(this.uiElSelectors), function(t) {
          var n = e.uiElSelectors[t];
          e.uiEl[t] = e.$(n)
        })
      }
    }, s
  }), define("view_container", ["jquery", "underscore", "utils", "mediator"], function(e, t, n, o) {
    "use strict";
    return function() {
      function i(o) {
        if (this.options = o || {}, this.cid = t.uniqueId("fvc"), this.el = n.getOption(this, "el"), this.isPageViewContainer = n.getOption(this, "isPageViewContainer"), !this.el) {
          var i = new Error("An 'el' must be specified for a ViewContainer.");
          throw i.name = "NoElError", i
        }
        this.ensureEl(), this.isBootstrapped = e(this.el).data("bootstrap"), t.bindAll(this, "renderDone", "renderFail", "renderAlways", "renderProgress");
        var r = n.getOption(this, "view");
        r && this.associateView(r), this.initRenderDeferred = new e.Deferred, this.renderPromise = this.initRenderDeferred.promise();
        var c = Array.prototype.slice.apply(arguments);
        this.initialize.apply(this, c), this.isPageViewContainer && this.subscribeEvent("contentContainer:show", this.showHandler)
      }
      return i.extend = n.extend, t(i.prototype).extend(o), i.prototype.objectType = "ViewContainer", i.prototype.initialize = function() {}, i.prototype.render = function(t, n) {
        var o;
        if (this.ensureEl(), t ? !this.isBootstrapped && this.currentView && t.cid !== this.currentView.cid && this.disposeView() : t = this.currentView || this.newView, this.newView = t, t) t.container = this, this.beforeRender(t, n), o = t.render.call(t, n);
        else {
          var i = new e.Deferred;
          o = i.promise(), i.resolve()
        }
        return this.renderPromise = o.then(this.renderDone, this.renderFail, this.renderProgress), this.renderPromise
      }, i.prototype.renderDone = function(e) {
        var t, o = this.newView;
        return o && o.rendered ? this.isBootstrapped ? (t = n.resolvedPromise.call(this, e), this.isBootstrapped = !1) : t = this.show(o) : t = n.resolvedPromise.call(this, e), this.currentView = o, this.newView = null, this.afterRender(e), t.always(this.resolveInitDeferred), t
      }, i.prototype.renderFail = function(e, t) {
        return n.rejectedPromise.call(this, e, t)
      }, i.prototype.renderAlways = function() {}, i.prototype.renderProgress = function() {}, i.prototype.beforeRender = function(e, t) {}, i.prototype.afterRender = function(e) {}, i.prototype.resolveInitDeferred = function() {
        this.initRenderDeferred && "pending" === this.initRenderDeferred.state() && this.initRenderDeferred.resolve()
      }, i.prototype.ensureEl = function() {
        this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
      }, i.prototype.getEl = function(t) {
        return e(t)
      }, i.prototype.placeInTarget = function(e, t) {
        e.empty().append(t)
      }, i.prototype.associateView = function(e) {
        this.currentView = e
      }, i.prototype.show = function(e, t) {
        var o;
        return e.rendered ? (this.placeInTarget(this.$el, e.el), o = n.resolvedPromise.call(this, t)) : o = this.render(e, t), o
      }, i.prototype.showHandler = function(e, t) {
        this.show(e, t)
      }, i.prototype.disposeView = function() {
        var e = this.currentView;
        this.$el.empty(), e && !e.disposed && (e.dispose && e.dispose(), delete this.currentView, delete this.newView)
      }, i.prototype.dispose = function() {
        this.disposeView(), this.disposed = !0
      }, i
    }()
  }), define("layout", ["jquery", "underscore", "utils", "mediator", "base_view", "view_container"], function(e, t, n, o, i, r) {
    "use strict";
    var c = i.extend({
      constructor: function() {
        i.prototype.constructor.apply(this, arguments), t.bindAll(this, "render", "renderDone", "renderFail", "renderAlways", "renderDependents"), this.isRenderable = !!n.getOption(this, "template"), this.initDependents()
      }
    });
    return c.prototype.objectType = "Layout", c.prototype.initDependents = function() {
      var e = n.getOption(this, "viewContainers"),
        o = n.getOption(this, "views");
      this.viewContainers || (this.viewContainers = {}), this.views || (this.views = {});
      var c = this;
      t.each(e, function(e, t) {
        c.viewContainers[t] = e instanceof r ? e : new r(e), c.viewContainers[t].parentView = c
      }), t.each(o, function(e, t) {
        c.views[t] = e instanceof i ? e : new i(e), c.views[t].parentView = c
      })
    }, c.prototype.render = function() {
      var t;
      if (this.isRenderable) t = i.prototype.render.apply(this, arguments), this.renderPromise = t;
      else {
        var n = new e.Deferred;
        t = n.promise(), n.resolve(), this.renderPromise = t.then(this.renderDone, this.renderFail, this.renderProgress)
      }
      return this.renderPromise
    }, c.prototype.renderDone = function(n, o, r) {
      this.isRenderable && (r = t.extend({}, r, {
        omitResolveInitDeferred: !0
      }), i.prototype.renderDone.call(this, n, o, r));
      var c = new e.Deferred,
        a = this.renderDependents();
      return a.done(c.resolve).fail(c.reject).always(this.resolveInitDeferred), this.dependentsRenderPromise = a, c.promise()
    }, c.prototype.dispose = function() {
      if (!this.disposed) {
        this.disposeDependents(), this.removeDependentReferences();
        var e = Array.prototype.slice.apply(arguments);
        i.prototype.dispose.apply(this, e)
      }
    }, c.prototype.renderDependents = function() {
      var n = (this.cid, []);
      return t.each(this.viewContainers, function(e, t) {
        n.push(e.render())
      }), t.each(this.views, function(e, t) {
        n.push(e.render())
      }), e.when.apply(e, n)
    }, c.prototype.disposeDependents = function() {
      t.each(this.viewContainers, function(e, t) {
        e.dispose()
      }), t.each(this.views, function(e, t) {
        e.dispose()
      })
    }, c.prototype.removeDependentReferences = function() {
      var e = this;
      t.each(this.viewContainers, function(t, n) {
        delete e[n]
      }), t.each(this.views, function(t, n) {
        delete e[n]
      }), this.viewContainers = {}, this.views = {}
    }, c
  }), define("utils_date", [], function() {
    "use strict";
    var e = {};
    return e.padZeros = function(e, t) {
      var n = e.toString(),
        o = n.length,
        i = "";
      if (t > o)
        for (var r = o; r < t; r++) i += "0";
      return i + n
    }, e.yyyymmdd = function(e) {
      return e.getFullYear() + "-" + this.padZeros(e.getMonth() + 1, 2) + "-" + this.padZeros(e.getDate(), 2)
    }, e.yyyymmddhhmmss = function(e) {
      return e.getFullYear() + "-" + this.padZeros(e.getMonth() + 1, 2) + "-" + this.padZeros(e.getDate(), 2) + "T" + this.padZeros(e.getHours(), 2) + ":" + this.padZeros(e.getMinutes(), 2) + ":" + this.padZeros(e.getSeconds(), 2) + "Z"
    }, e.getLocalTimeFromUTC = function(e) {
      var t = this.getDate(e),
        n = t.getTimezoneOffset();
      return t.setMinutes(t.getMinutes() - n), this.yyyymmddhhmmss(t)
    }, e.getDate = function(e) {
      var t = e.match(/[^T]*/)[0].split("-"),
        n = (e.match(/T[^Zz\-\+]*/) || ["00:00:000"])[0].substr(1).split(":");
      return new Date(t[0], t[1] - 1, t[2], n[0], n[1], n[2])
    }, e.today = function() {
      return this.yyyymmdd(new Date)
    }, e.now = function() {
      var e = new Date;
      return this.yyyymmdd(e) + "T" + this.padZeros(e.getHours(), 2) + ":" + this.padZeros(e.getMinutes(), 2) + ":" + this.padZeros(e.getSeconds(), 2) + "Z"
    }, e.addDays = function(e, t) {
      var n = e.match(/[^T]*/)[0].split("-"),
        o = new Date(n[0], n[1] - 1, n[2]);
      return o.setDate(o.getDate() + 1 * t), this.yyyymmdd(o)
    }, e.addMonths = function(e, t) {
      var n = e.match(/[^T]*/)[0].split("-"),
        o = new Date(n[0], n[1] - 1, n[2]);
      return o.setMonth(o.getMonth() + 1 * t), this.yyyymmdd(o)
    }, e.nextWeekDay = function(e, t, n) {
      var o, i = new Date,
        r = (14 + e - i.getDay()) % 7;
      return "number" != typeof t && (n = t, t = 0), o = void 0 === n || !n, 0 === r && o && (r = 7), void 0 !== t && (r += 7 * t), this.addDays(this.yyyymmdd(i), r)
    }, e
  }), define("form_binding", ["base_model", "base_view", "underscore", "jquery"], function(e, t, n, o) {
    "use strict";

    function i(e, t) {
      var n = e.type,
        o = e.tagName.toLowerCase();
      if (void 0 === t && (t = !0), t && (e.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !e.checked || ("submit" == n || "image" == n) && e.form && e.form.clk != e || "select" == o && -1 == e.selectedIndex)) return null;
      if ("select" == o) {
        var i = e.selectedIndex;
        if (i < 0) return null;
        for (var r = [], c = e.options, a = "select-one" == n, s = a ? i + 1 : c.length, u = a ? i : 0; u < s; u++) {
          var p = c[u];
          if (p.selected || p.checked) {
            var l = p.value;
            if (l || (l = p.attributes && p.attributes.value && !p.attributes.value.specified ? p.text : p.value), a) return l;
            r.push(l)
          }
        }
        return r
      }
      return e.value
    }
    var r = {
      apiError: "API error"
    };
    e.prototype.validate = function() {
      var e = {},
        t = this.toValidate;
      for (var o in this.validators)
        if (n.has(this.validators, o) && (!t || t && t[o])) {
          var i = this.validators[o](this.get(o));
          !1 === i.isValid && (e[o] = i.message)
        }
      if (this.relations && n.each(this.relations, function(o) {
          var i = o.key,
            r = this.attributes[i],
            c = t ? t[i] : void 0;
          r && r.validators ? (r.toValidate = c ? n.extend(r.toValidate || {}, c) : r.toValidate, e = n.extend(e, r.validate())) : r && r.models && n.each(r.models, function(t) {
            t.toValidate = c ? n.extend(t.toValidate || {}, c) : t.toValidate, e = n.extend(e, t.validate())
          })
        }, this), n.size(e) > 0) return e
    }, e.prototype.validator = function(e, t) {
      return e ? {
        isValid: !0
      } : {
        isValid: !1,
        message: t
      }
    }, e.prototype.validateAttribute = function(e) {
      return this.validators[e] ? this.validators[e](this.get(e)) : {
        isValid: !0
      }
    }, t.prototype.clearMsg = function() {
      this._msgShown && this.uiEl && this.uiEl.$msgTarget && this.uiEl.$msgTarget.addClass("hidden"), this._msgShown = !1
    }, t.prototype.showMsg = function(e, t) {
      if (this.clearMsg(), this.uiEl && this.uiEl["$" + e + "MsgTarget"]) {
        if ("error" === e) {
          if ("string" != typeof t) {
            var n = t;
            t = "";
            for (var o in n) "" !== t && (t += " "), t += n[o]
          }
          this.uiEl.$errorReasonTarget.text(t)
        }
        this.uiEl["$" + e + "MsgTarget"].removeClass("hidden"), this._msgShown = !0
      }
    }, t.prototype.onChange = function(e) {
      var t = {};
      if (this.clearMsg(), e && e.target) {
        var n = e.target;
        t[n.name] = i(n)
      }
      this.model && this.model.set(t)
    }, t.prototype.onSave = function() {
      var e = this,
        t = new o.Deferred,
        n = t.promise();
      if (this.model) {
        var i = this.model.isNew();
        this.model.save(null, {
          success: function(n) {
            n.attributes.error ? (e.showMsg("error", n.attributes.error.err), t.resolve(!0), e.model.unset("error", {
              silent: !0
            })) : (i ? e.showMsg("save") : e.showMsg("update"), t.resolve(!1))
          },
          error: function() {
            e.showMsg("error", r.apiError), t.resolve(!0)
          }
        }) || (e.showMsg("error", e.model.validationError), t.resolve(!0))
      }
      return n
    }, t.prototype.onDelete = function() {
      var e = this;
      return this.model && this.model.destroy({
        success: function() {
          e.showMsg("delete"), e.publishEvent("submit:success", e.model.cid)
        },
        error: function() {
          e.showMsg("error", r.apiError), e.publishEvent("submit:error", e.model.cid)
        }
      }), !1
    }, t.prototype.onSubmit = function() {
      return !1
    }
  }), define("foobunny", ["app_layout", "application", "base_collection", "base_model", "base_view", "cache", "controller", "dispatcher", "dust_renderer", "layout", "mediator", "route", "router", "storage", "utils", "utils_date", "view_container", "dust_helpers_supplement", "dust_helpers_format", "form_binding"], function(e, t, n, o, i, r, c, a, s, u, p, l, d, M, f, h, b) {
    "use strict";
    return {
      version: "0.7.2",
      AppLayout: e,
      Application: t,
      BaseCollection: n,
      BaseModel: o,
      BaseView: i,
      Cache: r,
      Controller: c,
      Dispatcher: a,
      DustRenderer: s,
      Layout: u,
      mediator: p,
      Route: l,
      Router: d,
      storage: M,
      utils: f,
      utilsDate: h,
      ViewContainer: b
    }
  }),
  function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("moment", t) : e.moment = t()
  }(this, function() {
    "use strict";

    function e() {
      return jn.apply(null, arguments)
    }

    function t(e) {
      return "[object Array]" === Object.prototype.toString.call(e)
    }

    function n(e) {
      return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }

    function o(e, t) {
      var n, o = [];
      for (n = 0; n < e.length; ++n) o.push(t(e[n], n));
      return o
    }

    function i(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }

    function r(e, t) {
      for (var n in t) i(t, n) && (e[n] = t[n]);
      return i(t, "toString") && (e.toString = t.toString), i(t, "valueOf") && (e.valueOf = t.valueOf), e
    }

    function c(e, t, n, o) {
      return qe(e, t, n, o, !0).utc()
    }

    function a() {
      return {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1
      }
    }

    function s(e) {
      return null == e._pf && (e._pf = a()), e._pf
    }

    function u(e) {
      if (null == e._isValid) {
        var t = s(e);
        e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
      }
      return e._isValid
    }

    function p(e) {
      var t = c(NaN);
      return null != e ? r(s(t), e) : s(t).userInvalidated = !0, t
    }

    function l(e, t) {
      var n, o, i;
      if (void 0 !== t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), void 0 !== t._i && (e._i = t._i), void 0 !== t._f && (e._f = t._f), void 0 !== t._l && (e._l = t._l), void 0 !== t._strict && (e._strict = t._strict), void 0 !== t._tzm && (e._tzm = t._tzm), void 0 !== t._isUTC && (e._isUTC = t._isUTC), void 0 !== t._offset && (e._offset = t._offset), void 0 !== t._pf && (e._pf = s(t)), void 0 !== t._locale && (e._locale = t._locale), In.length > 0)
        for (n in In) o = In[n], void 0 !== (i = t[o]) && (e[o] = i);
      return e
    }

    function d(t) {
      l(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), !1 === Yn && (Yn = !0, e.updateOffset(this), Yn = !1)
    }

    function M(e) {
      return e instanceof d || null != e && null != e._isAMomentObject
    }

    function f(e) {
      return e < 0 ? Math.ceil(e) : Math.floor(e)
    }

    function h(e) {
      var t = +e,
        n = 0;
      return 0 !== t && isFinite(t) && (n = f(t)), n
    }

    function b(e, t, n) {
      var o, i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        c = 0;
      for (o = 0; o < i; o++)(n && e[o] !== t[o] || !n && h(e[o]) !== h(t[o])) && c++;
      return c + r
    }

    function A() {}

    function z(e) {
      return e ? e.toLowerCase().replace("_", "-") : e
    }

    function m(e) {
      for (var t, n, o, i, r = 0; r < e.length;) {
        for (i = z(e[r]).split("-"), t = i.length, n = z(e[r + 1]), n = n ? n.split("-") : null; t > 0;) {
          if (o = g(i.slice(0, t).join("-"))) return o;
          if (n && n.length >= t && b(i, n, !0) >= t - 1) break;
          t--
        }
        r++
      }
      return null
    }

    function g(e) {
      var t = null;
      if (!Fn[e] && "undefined" != typeof module && module && module.exports) try {
        t = Hn._abbr, require("./locale/" + e), y(t)
      } catch (e) {}
      return Fn[e]
    }

    function y(e, t) {
      var n;
      return e && (n = void 0 === t ? L(e) : v(e, t)) && (Hn = n), Hn._abbr
    }

    function v(e, t) {
      return null !== t ? (t.abbr = e, Fn[e] = Fn[e] || new A, Fn[e].set(t), y(e), Fn[e]) : (delete Fn[e], null)
    }

    function L(e) {
      var n;
      if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return Hn;
      if (!t(e)) {
        if (n = g(e)) return n;
        e = [e]
      }
      return m(e)
    }

    function O(e, t) {
      var n = e.toLowerCase();
      Un[n] = Un[n + "s"] = Un[t] = e
    }

    function T(e) {
      return "string" == typeof e ? Un[e] || Un[e.toLowerCase()] : void 0
    }

    function N(e) {
      var t, n, o = {};
      for (n in e) i(e, n) && (t = T(n)) && (o[t] = e[n]);
      return o
    }

    function q(t, n) {
      return function(o) {
        return null != o ? (W(this, t, o), e.updateOffset(this, n), this) : _(this, t)
      }
    }

    function _(e, t) {
      return e._d["get" + (e._isUTC ? "UTC" : "") + t]()
    }

    function W(e, t, n) {
      return e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }

    function S(e, t) {
      var n;
      if ("object" == typeof e)
        for (n in e) this.set(n, e[n]);
      else if (e = T(e), "function" == typeof this[e]) return this[e](t);
      return this
    }

    function B(e, t, n) {
      var o = "" + Math.abs(e),
        i = t - o.length;
      return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + o
    }

    function X(e, t, n, o) {
      var i = o;
      "string" == typeof o && (i = function() {
        return this[o]()
      }), e && (Kn[e] = i), t && (Kn[t[0]] = function() {
        return B(i.apply(this, arguments), t[1], t[2])
      }), n && (Kn[n] = function() {
        return this.localeData().ordinal(i.apply(this, arguments), e)
      })
    }

    function C(e) {
      return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }

    function E(e) {
      var t, n, o = e.match(Gn);
      for (t = 0, n = o.length; t < n; t++) Kn[o[t]] ? o[t] = Kn[o[t]] : o[t] = C(o[t]);
      return function(i) {
        var r = "";
        for (t = 0; t < n; t++) r += o[t] instanceof Function ? o[t].call(i, e) : o[t];
        return r
      }
    }

    function w(e, t) {
      return e.isValid() ? (t = x(t, e.localeData()), Jn[t] = Jn[t] || E(t), Jn[t](e)) : e.localeData().invalidDate()
    }

    function x(e, t) {
      function n(e) {
        return t.longDateFormat(e) || e
      }
      var o = 5;
      for (Vn.lastIndex = 0; o >= 0 && Vn.test(e);) e = e.replace(Vn, n), Vn.lastIndex = 0, o -= 1;
      return e
    }

    function k(e) {
      return "function" == typeof e && "[object Function]" === Object.prototype.toString.call(e)
    }

    function D(e, t, n) {
      lo[e] = k(t) ? t : function(e) {
        return e && n ? n : t
      }
    }

    function R(e, t) {
      return i(lo, e) ? lo[e](t._strict, t._locale) : new RegExp(P(e))
    }

    function P(e) {
      return e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, o, i) {
        return t || n || o || i
      }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function j(e, t) {
      var n, o = t;
      for ("string" == typeof e && (e = [e]), "number" == typeof t && (o = function(e, n) {
          n[t] = h(e)
        }), n = 0; n < e.length; n++) Mo[e[n]] = o
    }

    function H(e, t) {
      j(e, function(e, n, o, i) {
        o._w = o._w || {}, t(e, o._w, o, i)
      })
    }

    function I(e, t, n) {
      null != t && i(Mo, e) && Mo[e](t, n._a, n, e)
    }

    function Y(e, t) {
      return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }

    function F(e) {
      return this._months[e.month()]
    }

    function U(e) {
      return this._monthsShort[e.month()]
    }

    function G(e, t, n) {
      var o, i, r;
      for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
        if (i = c([2e3, o]), n && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[o] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[o] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[o].test(e)) return o;
        if (n && "MMM" === t && this._shortMonthsParse[o].test(e)) return o;
        if (!n && this._monthsParse[o].test(e)) return o
      }
    }

    function V(e, t) {
      var n;
      return "string" == typeof t && "number" != typeof(t = e.localeData().monthsParse(t)) ? e : (n = Math.min(e.date(), Y(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e)
    }

    function J(t) {
      return null != t ? (V(this, t), e.updateOffset(this, !0), this) : _(this, "Month")
    }

    function K() {
      return Y(this.year(), this.month())
    }

    function Q(e) {
      var t, n = e._a;
      return n && -2 === s(e).overflow && (t = n[ho] < 0 || n[ho] > 11 ? ho : n[bo] < 1 || n[bo] > Y(n[fo], n[ho]) ? bo : n[Ao] < 0 || n[Ao] > 24 || 24 === n[Ao] && (0 !== n[zo] || 0 !== n[mo] || 0 !== n[go]) ? Ao : n[zo] < 0 || n[zo] > 59 ? zo : n[mo] < 0 || n[mo] > 59 ? mo : n[go] < 0 || n[go] > 999 ? go : -1, s(e)._overflowDayOfYear && (t < fo || t > bo) && (t = bo), s(e).overflow = t), e
    }

    function $(t) {
      !1 === e.suppressDeprecationWarnings && "undefined" != typeof console && console.warn
    }

    function Z(e, t) {
      var n = !0;
      return r(function() {
        return n && ($(e + "\n" + (new Error).stack), n = !1), t.apply(this, arguments)
      }, t)
    }

    function ee(e, t) {
      Lo[e] || ($(t), Lo[e] = !0)
    }

    function te(e) {
      var t, n, o = e._i,
        i = Oo.exec(o);
      if (i) {
        for (s(e).iso = !0, t = 0, n = To.length; t < n; t++)
          if (To[t][1].exec(o)) {
            e._f = To[t][0];
            break
          }
        for (t = 0, n = No.length; t < n; t++)
          if (No[t][1].exec(o)) {
            e._f += (i[6] || " ") + No[t][0];
            break
          }
        o.match(so) && (e._f += "Z"), ge(e)
      } else e._isValid = !1
    }

    function ne(t) {
      var n = qo.exec(t._i);
      if (null !== n) return void(t._d = new Date(+n[1]));
      te(t), !1 === t._isValid && (delete t._isValid, e.createFromInputFallback(t))
    }

    function oe(e, t, n, o, i, r, c) {
      var a = new Date(e, t, n, o, i, r, c);
      return e < 1970 && a.setFullYear(e), a
    }

    function ie(e) {
      var t = new Date(Date.UTC.apply(null, arguments));
      return e < 1970 && t.setUTCFullYear(e), t
    }

    function re(e) {
      return ce(e) ? 366 : 365
    }

    function ce(e) {
      return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }

    function ae() {
      return ce(this.year())
    }

    function se(e, t, n) {
      var o, i = n - t,
        r = n - e.day();
      return r > i && (r -= 7), r < i - 7 && (r += 7), o = _e(e).add(r, "d"), {
        week: Math.ceil(o.dayOfYear() / 7),
        year: o.year()
      }
    }

    function ue(e) {
      return se(e, this._week.dow, this._week.doy).week
    }

    function pe() {
      return this._week.dow
    }

    function le() {
      return this._week.doy
    }

    function de(e) {
      var t = this.localeData().week(this);
      return null == e ? t : this.add(7 * (e - t), "d")
    }

    function Me(e) {
      var t = se(this, 1, 4).week;
      return null == e ? t : this.add(7 * (e - t), "d")
    }

    function fe(e, t, n, o, i) {
      var r, c = 6 + i - o,
        a = ie(e, 0, 1 + c),
        s = a.getUTCDay();
      return s < i && (s += 7), n = null != n ? 1 * n : i, r = 1 + c + 7 * (t - 1) - s + n, {
        year: r > 0 ? e : e - 1,
        dayOfYear: r > 0 ? r : re(e - 1) + r
      }
    }

    function he(e) {
      var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
      return null == e ? t : this.add(e - t, "d")
    }

    function be(e, t, n) {
      return null != e ? e : null != t ? t : n
    }

    function Ae(e) {
      var t = new Date;
      return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
    }

    function ze(e) {
      var t, n, o, i, r = [];
      if (!e._d) {
        for (o = Ae(e), e._w && null == e._a[bo] && null == e._a[ho] && me(e), e._dayOfYear && (i = be(e._a[fo], o[fo]), e._dayOfYear > re(i) && (s(e)._overflowDayOfYear = !0), n = ie(i, 0, e._dayOfYear), e._a[ho] = n.getUTCMonth(), e._a[bo] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = o[t];
        for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
        24 === e._a[Ao] && 0 === e._a[zo] && 0 === e._a[mo] && 0 === e._a[go] && (e._nextDay = !0, e._a[Ao] = 0), e._d = (e._useUTC ? ie : oe).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ao] = 24)
      }
    }

    function me(e) {
      var t, n, o, i, r, c, a;
      t = e._w, null != t.GG || null != t.W || null != t.E ? (r = 1, c = 4, n = be(t.GG, e._a[fo], se(_e(), 1, 4).year), o = be(t.W, 1), i = be(t.E, 1)) : (r = e._locale._week.dow, c = e._locale._week.doy, n = be(t.gg, e._a[fo], se(_e(), r, c).year), o = be(t.w, 1), null != t.d ? (i = t.d) < r && ++o : i = null != t.e ? t.e + r : r), a = fe(n, o, i, c, r), e._a[fo] = a.year, e._dayOfYear = a.dayOfYear
    }

    function ge(t) {
      if (t._f === e.ISO_8601) return void te(t);
      t._a = [], s(t).empty = !0;
      var n, o, i, r, c, a = "" + t._i,
        u = a.length,
        p = 0;
      for (i = x(t._f, t._locale).match(Gn) || [], n = 0; n < i.length; n++) r = i[n], o = (a.match(R(r, t)) || [])[0], o && (c = a.substr(0, a.indexOf(o)), c.length > 0 && s(t).unusedInput.push(c), a = a.slice(a.indexOf(o) + o.length), p += o.length), Kn[r] ? (o ? s(t).empty = !1 : s(t).unusedTokens.push(r), I(r, o, t)) : t._strict && !o && s(t).unusedTokens.push(r);
      s(t).charsLeftOver = u - p, a.length > 0 && s(t).unusedInput.push(a), !0 === s(t).bigHour && t._a[Ao] <= 12 && t._a[Ao] > 0 && (s(t).bigHour = void 0), t._a[Ao] = ye(t._locale, t._a[Ao], t._meridiem), ze(t), Q(t)
    }

    function ye(e, t, n) {
      var o;
      return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (o = e.isPM(n), o && t < 12 && (t += 12), o || 12 !== t || (t = 0), t) : t
    }

    function ve(e) {
      var t, n, o, i, c;
      if (0 === e._f.length) return s(e).invalidFormat = !0, void(e._d = new Date(NaN));
      for (i = 0; i < e._f.length; i++) c = 0, t = l({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ge(t), u(t) && (c += s(t).charsLeftOver, c += 10 * s(t).unusedTokens.length, s(t).score = c, (null == o || c < o) && (o = c, n = t));
      r(e, n || t)
    }

    function Le(e) {
      if (!e._d) {
        var t = N(e._i);
        e._a = [t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], ze(e)
      }
    }

    function Oe(e) {
      var t = new d(Q(Te(e)));
      return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
    }

    function Te(e) {
      var o = e._i,
        i = e._f;
      return e._locale = e._locale || L(e._l), null === o || void 0 === i && "" === o ? p({
        nullInput: !0
      }) : ("string" == typeof o && (e._i = o = e._locale.preparse(o)), M(o) ? new d(Q(o)) : (t(i) ? ve(e) : i ? ge(e) : n(o) ? e._d = o : Ne(e), e))
    }

    function Ne(i) {
      var r = i._i;
      void 0 === r ? i._d = new Date : n(r) ? i._d = new Date(+r) : "string" == typeof r ? ne(i) : t(r) ? (i._a = o(r.slice(0), function(e) {
        return parseInt(e, 10)
      }), ze(i)) : "object" == typeof r ? Le(i) : "number" == typeof r ? i._d = new Date(r) : e.createFromInputFallback(i)
    }

    function qe(e, t, n, o, i) {
      var r = {};
      return "boolean" == typeof n && (o = n, n = void 0), r._isAMomentObject = !0, r._useUTC = r._isUTC = i, r._l = n, r._i = e, r._f = t, r._strict = o, Oe(r)
    }

    function _e(e, t, n, o) {
      return qe(e, t, n, o, !1)
    }

    function We(e, n) {
      var o, i;
      if (1 === n.length && t(n[0]) && (n = n[0]), !n.length) return _e();
      for (o = n[0], i = 1; i < n.length; ++i) n[i].isValid() && !n[i][e](o) || (o = n[i]);
      return o
    }

    function Se() {
      return We("isBefore", [].slice.call(arguments, 0))
    }

    function Be() {
      return We("isAfter", [].slice.call(arguments, 0))
    }

    function Xe(e) {
      var t = N(e),
        n = t.year || 0,
        o = t.quarter || 0,
        i = t.month || 0,
        r = t.week || 0,
        c = t.day || 0,
        a = t.hour || 0,
        s = t.minute || 0,
        u = t.second || 0,
        p = t.millisecond || 0;
      this._milliseconds = +p + 1e3 * u + 6e4 * s + 36e5 * a, this._days = +c + 7 * r, this._months = +i + 3 * o + 12 * n, this._data = {}, this._locale = L(), this._bubble()
    }

    function Ce(e) {
      return e instanceof Xe
    }

    function Ee(e, t) {
      X(e, 0, 0, function() {
        var e = this.utcOffset(),
          n = "+";
        return e < 0 && (e = -e, n = "-"), n + B(~~(e / 60), 2) + t + B(~~e % 60, 2)
      })
    }

    function we(e) {
      var t = (e || "").match(so) || [],
        n = t[t.length - 1] || [],
        o = (n + "").match(Xo) || ["-", 0, 0],
        i = 60 * o[1] + h(o[2]);
      return "+" === o[0] ? i : -i
    }

    function xe(t, o) {
      var i, r;
      return o._isUTC ? (i = o.clone(), r = (M(t) || n(t) ? +t : +_e(t)) - +i, i._d.setTime(+i._d + r), e.updateOffset(i, !1), i) : _e(t).local()
    }

    function ke(e) {
      return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }

    function De(t, n) {
      var o, i = this._offset || 0;
      return null != t ? ("string" == typeof t && (t = we(t)), Math.abs(t) < 16 && (t *= 60), !this._isUTC && n && (o = ke(this)), this._offset = t, this._isUTC = !0, null != o && this.add(o, "m"), i !== t && (!n || this._changeInProgress ? et(this, Je(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : ke(this)
    }

    function Re(e, t) {
      return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
    }

    function Pe(e) {
      return this.utcOffset(0, e)
    }

    function je(e) {
      return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ke(this), "m")), this
    }

    function He() {
      return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(we(this._i)), this
    }

    function Ie(e) {
      return e = e ? _e(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0
    }

    function Ye() {
      return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Fe() {
      if (void 0 !== this._isDSTShifted) return this._isDSTShifted;
      var e = {};
      if (l(e, this), e = Te(e), e._a) {
        var t = e._isUTC ? c(e._a) : _e(e._a);
        this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
      } else this._isDSTShifted = !1;
      return this._isDSTShifted
    }

    function Ue() {
      return !this._isUTC
    }

    function Ge() {
      return this._isUTC
    }

    function Ve() {
      return this._isUTC && 0 === this._offset
    }

    function Je(e, t) {
      var n, o, r, c = e,
        a = null;
      return Ce(e) ? c = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
      } : "number" == typeof e ? (c = {}, t ? c[t] = e : c.milliseconds = e) : (a = Co.exec(e)) ? (n = "-" === a[1] ? -1 : 1, c = {
        y: 0,
        d: h(a[bo]) * n,
        h: h(a[Ao]) * n,
        m: h(a[zo]) * n,
        s: h(a[mo]) * n,
        ms: h(a[go]) * n
      }) : (a = Eo.exec(e)) ? (n = "-" === a[1] ? -1 : 1, c = {
        y: Ke(a[2], n),
        M: Ke(a[3], n),
        d: Ke(a[4], n),
        h: Ke(a[5], n),
        m: Ke(a[6], n),
        s: Ke(a[7], n),
        w: Ke(a[8], n)
      }) : null == c ? c = {} : "object" == typeof c && ("from" in c || "to" in c) && (r = $e(_e(c.from), _e(c.to)), c = {}, c.ms = r.milliseconds, c.M = r.months), o = new Xe(c), Ce(e) && i(e, "_locale") && (o._locale = e._locale), o
    }

    function Ke(e, t) {
      var n = e && parseFloat(e.replace(",", "."));
      return (isNaN(n) ? 0 : n) * t
    }

    function Qe(e, t) {
      var n = {
        milliseconds: 0,
        months: 0
      };
      return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
    }

    function $e(e, t) {
      var n;
      return t = xe(t, e), e.isBefore(t) ? n = Qe(e, t) : (n = Qe(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n
    }

    function Ze(e, t) {
      return function(n, o) {
        var i, r;
        return null === o || isNaN(+o) || (ee(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), r = n, n = o, o = r), n = "string" == typeof n ? +n : n, i = Je(n, o), et(this, i, e), this
      }
    }

    function et(t, n, o, i) {
      var r = n._milliseconds,
        c = n._days,
        a = n._months;
      i = null == i || i, r && t._d.setTime(+t._d + r * o), c && W(t, "Date", _(t, "Date") + c * o), a && V(t, _(t, "Month") + a * o), i && e.updateOffset(t, c || a)
    }

    function tt(e, t) {
      var n = e || _e(),
        o = xe(n, this).startOf("day"),
        i = this.diff(o, "days", !0),
        r = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse";
      return this.format(t && t[r] || this.localeData().calendar(r, this, _e(n)))
    }

    function nt() {
      return new d(this)
    }

    function ot(e, t) {
      return t = T(void 0 !== t ? t : "millisecond"), "millisecond" === t ? (e = M(e) ? e : _e(e), +this > +e) : (M(e) ? +e : +_e(e)) < +this.clone().startOf(t)
    }

    function it(e, t) {
      var n;
      return t = T(void 0 !== t ? t : "millisecond"), "millisecond" === t ? (e = M(e) ? e : _e(e), +this < +e) : (n = M(e) ? +e : +_e(e), +this.clone().endOf(t) < n)
    }

    function rt(e, t, n) {
      return this.isAfter(e, n) && this.isBefore(t, n)
    }

    function ct(e, t) {
      var n;
      return t = T(t || "millisecond"), "millisecond" === t ? (e = M(e) ? e : _e(e), +this == +e) : (n = +_e(e), +this.clone().startOf(t) <= n && n <= +this.clone().endOf(t))
    }

    function at(e, t, n) {
      var o, i, r = xe(e, this),
        c = 6e4 * (r.utcOffset() - this.utcOffset());
      return t = T(t), "year" === t || "month" === t || "quarter" === t ? (i = st(this, r), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (o = this - r, i = "second" === t ? o / 1e3 : "minute" === t ? o / 6e4 : "hour" === t ? o / 36e5 : "day" === t ? (o - c) / 864e5 : "week" === t ? (o - c) / 6048e5 : o), n ? i : f(i)
    }

    function st(e, t) {
      var n, o, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        r = e.clone().add(i, "months");
      return t - r < 0 ? (n = e.clone().add(i - 1, "months"), o = (t - r) / (r - n)) : (n = e.clone().add(i + 1, "months"), o = (t - r) / (n - r)), -(i + o)
    }

    function ut() {
      return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function pt() {
      var e = this.clone().utc();
      return 0 < e.year() && e.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : w(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : w(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function lt(t) {
      var n = w(this, t || e.defaultFormat);
      return this.localeData().postformat(n)
    }

    function dt(e, t) {
      return this.isValid() ? Je({
        to: this,
        from: e
      }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function Mt(e) {
      return this.from(_e(), e)
    }

    function ft(e, t) {
      return this.isValid() ? Je({
        from: this,
        to: e
      }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function ht(e) {
      return this.to(_e(), e)
    }

    function bt(e) {
      var t;
      return void 0 === e ? this._locale._abbr : (t = L(e), null != t && (this._locale = t), this)
    }

    function At() {
      return this._locale
    }

    function zt(e) {
      switch (e = T(e)) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0)
      }
      return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function mt(e) {
      return e = T(e), void 0 === e || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
    }

    function gt() {
      return +this._d - 6e4 * (this._offset || 0)
    }

    function yt() {
      return Math.floor(+this / 1e3)
    }

    function vt() {
      return this._offset ? new Date(+this) : this._d
    }

    function Lt() {
      var e = this;
      return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }

    function Ot() {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
      }
    }

    function Tt() {
      return u(this)
    }

    function Nt() {
      return r({}, s(this))
    }

    function qt() {
      return s(this).overflow
    }

    function _t(e, t) {
      X(0, [e, e.length], 0, t)
    }

    function Wt(e, t, n) {
      return se(_e([e, 11, 31 + t - n]), t, n).week
    }

    function St(e) {
      var t = se(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
      return null == e ? t : this.add(e - t, "y")
    }

    function Bt(e) {
      var t = se(this, 1, 4).year;
      return null == e ? t : this.add(e - t, "y")
    }

    function Xt() {
      return Wt(this.year(), 1, 4)
    }

    function Ct() {
      var e = this.localeData()._week;
      return Wt(this.year(), e.dow, e.doy)
    }

    function Et(e) {
      return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }

    function wt(e, t) {
      return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
    }

    function xt(e) {
      return this._weekdays[e.day()]
    }

    function kt(e) {
      return this._weekdaysShort[e.day()]
    }

    function Dt(e) {
      return this._weekdaysMin[e.day()]
    }

    function Rt(e) {
      var t, n, o;
      for (this._weekdaysParse = this._weekdaysParse || [], t = 0; t < 7; t++)
        if (this._weekdaysParse[t] || (n = _e([2e3, 1]).day(t), o = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[t] = new RegExp(o.replace(".", ""), "i")), this._weekdaysParse[t].test(e)) return t
    }

    function Pt(e) {
      var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != e ? (e = wt(e, this.localeData()), this.add(e - t, "d")) : t
    }

    function jt(e) {
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d")
    }

    function Ht(e) {
      return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
    }

    function It(e, t) {
      X(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
      })
    }

    function Yt(e, t) {
      return t._meridiemParse
    }

    function Ft(e) {
      return "p" === (e + "").toLowerCase().charAt(0)
    }

    function Ut(e, t, n) {
      return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function Gt(e, t) {
      t[go] = h(1e3 * ("0." + e))
    }

    function Vt() {
      return this._isUTC ? "UTC" : ""
    }

    function Jt() {
      return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Kt(e) {
      return _e(1e3 * e)
    }

    function Qt() {
      return _e.apply(null, arguments).parseZone()
    }

    function $t(e, t, n) {
      var o = this._calendar[e];
      return "function" == typeof o ? o.call(t, n) : o
    }

    function Zt(e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
        return e.slice(1)
      }), this._longDateFormat[e])
    }

    function en() {
      return this._invalidDate
    }

    function tn(e) {
      return this._ordinal.replace("%d", e)
    }

    function nn(e) {
      return e
    }

    function on(e, t, n, o) {
      var i = this._relativeTime[n];
      return "function" == typeof i ? i(e, t, n, o) : i.replace(/%d/i, e)
    }

    function rn(e, t) {
      var n = this._relativeTime[e > 0 ? "future" : "past"];
      return "function" == typeof n ? n(t) : n.replace(/%s/i, t)
    }

    function cn(e) {
      var t, n;
      for (n in e) t = e[n], "function" == typeof t ? this[n] = t : this["_" + n] = t;
      this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function an(e, t, n, o) {
      var i = L(),
        r = c().set(o, t);
      return i[n](r, e)
    }

    function sn(e, t, n, o, i) {
      if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return an(e, t, n, i);
      var r, c = [];
      for (r = 0; r < o; r++) c[r] = an(e, r, n, i);
      return c
    }

    function un(e, t) {
      return sn(e, t, "months", 12, "month")
    }

    function pn(e, t) {
      return sn(e, t, "monthsShort", 12, "month")
    }

    function ln(e, t) {
      return sn(e, t, "weekdays", 7, "day")
    }

    function dn(e, t) {
      return sn(e, t, "weekdaysShort", 7, "day")
    }

    function Mn(e, t) {
      return sn(e, t, "weekdaysMin", 7, "day")
    }

    function fn() {
      var e = this._data;
      return this._milliseconds = ti(this._milliseconds), this._days = ti(this._days), this._months = ti(this._months), e.milliseconds = ti(e.milliseconds), e.seconds = ti(e.seconds), e.minutes = ti(e.minutes), e.hours = ti(e.hours), e.months = ti(e.months), e.years = ti(e.years), this
    }

    function hn(e, t, n, o) {
      var i = Je(t, n);
      return e._milliseconds += o * i._milliseconds, e._days += o * i._days, e._months += o * i._months, e._bubble()
    }

    function bn(e, t) {
      return hn(this, e, t, 1)
    }

    function An(e, t) {
      return hn(this, e, t, -1)
    }

    function zn(e) {
      return e < 0 ? Math.floor(e) : Math.ceil(e)
    }

    function mn() {
      var e, t, n, o, i, r = this._milliseconds,
        c = this._days,
        a = this._months,
        s = this._data;
      return r >= 0 && c >= 0 && a >= 0 || r <= 0 && c <= 0 && a <= 0 || (r += 864e5 * zn(yn(a) + c), c = 0, a = 0), s.milliseconds = r % 1e3, e = f(r / 1e3), s.seconds = e % 60, t = f(e / 60), s.minutes = t % 60, n = f(t / 60), s.hours = n % 24, c += f(n / 24), i = f(gn(c)), a += i, c -= zn(yn(i)), o = f(a / 12), a %= 12, s.days = c, s.months = a, s.years = o, this
    }

    function gn(e) {
      return 4800 * e / 146097
    }

    function yn(e) {
      return 146097 * e / 4800
    }

    function vn(e) {
      var t, n, o = this._milliseconds;
      if ("month" === (e = T(e)) || "year" === e) return t = this._days + o / 864e5, n = this._months + gn(t), "month" === e ? n : n / 12;
      switch (t = this._days + Math.round(yn(this._months)), e) {
        case "week":
          return t / 7 + o / 6048e5;
        case "day":
          return t + o / 864e5;
        case "hour":
          return 24 * t + o / 36e5;
        case "minute":
          return 1440 * t + o / 6e4;
        case "second":
          return 86400 * t + o / 1e3;
        case "millisecond":
          return Math.floor(864e5 * t) + o;
        default:
          throw new Error("Unknown unit " + e)
      }
    }

    function Ln() {
      return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * h(this._months / 12)
    }

    function On(e) {
      return function() {
        return this.as(e)
      }
    }

    function Tn(e) {
      return e = T(e), this[e + "s"]()
    }

    function Nn(e) {
      return function() {
        return this._data[e]
      }
    }

    function qn() {
      return f(this.days() / 7)
    }

    function _n(e, t, n, o, i) {
      return i.relativeTime(t || 1, !!n, e, o)
    }

    function Wn(e, t, n) {
      var o = Je(e).abs(),
        i = Ai(o.as("s")),
        r = Ai(o.as("m")),
        c = Ai(o.as("h")),
        a = Ai(o.as("d")),
        s = Ai(o.as("M")),
        u = Ai(o.as("y")),
        p = i < zi.s && ["s", i] || 1 === r && ["m"] || r < zi.m && ["mm", r] || 1 === c && ["h"] || c < zi.h && ["hh", c] || 1 === a && ["d"] || a < zi.d && ["dd", a] || 1 === s && ["M"] || s < zi.M && ["MM", s] || 1 === u && ["y"] || ["yy", u];
      return p[2] = t, p[3] = +e > 0, p[4] = n, _n.apply(null, p)
    }

    function Sn(e, t) {
      return void 0 !== zi[e] && (void 0 === t ? zi[e] : (zi[e] = t, !0))
    }

    function Bn(e) {
      var t = this.localeData(),
        n = Wn(this, !e, t);
      return e && (n = t.pastFuture(+this, n)), t.postformat(n)
    }

    function Xn() {
      var e, t, n, o = mi(this._milliseconds) / 1e3,
        i = mi(this._days),
        r = mi(this._months);
      e = f(o / 60), t = f(e / 60), o %= 60, e %= 60, n = f(r / 12), r %= 12;
      var c = n,
        a = r,
        s = i,
        u = t,
        p = e,
        l = o,
        d = this.asSeconds();
      return d ? (d < 0 ? "-" : "") + "P" + (c ? c + "Y" : "") + (a ? a + "M" : "") + (s ? s + "D" : "") + (u || p || l ? "T" : "") + (u ? u + "H" : "") + (p ? p + "M" : "") + (l ? l + "S" : "") : "P0D"
    }

    function Cn(e, t, n, o) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }

    function En(e, t, n, o) {
      var i = {
        m: ["eine Minute", "einer Minute"],
        h: ["eine Stunde", "einer Stunde"],
        d: ["ein Tag", "einem Tag"],
        dd: [e + " Tage", e + " Tagen"],
        M: ["ein Monat", "einem Monat"],
        MM: [e + " Monate", e + " Monaten"],
        y: ["ein Jahr", "einem Jahr"],
        yy: [e + " Jahre", e + " Jahren"]
      };
      return t ? i[n][0] : i[n][1]
    }

    function wn(e, t, n, o) {
      var i = "";
      switch (n) {
        case "s":
          return o ? "muutaman sekunnin" : "muutama sekunti";
        case "m":
          return o ? "minuutin" : "minuutti";
        case "mm":
          i = o ? "minuutin" : "minuuttia";
          break;
        case "h":
          return o ? "tunnin" : "tunti";
        case "hh":
          i = o ? "tunnin" : "tuntia";
          break;
        case "d":
          return o ? "päivän" : "päivä";
        case "dd":
          i = o ? "päivän" : "päivää";
          break;
        case "M":
          return o ? "kuukauden" : "kuukausi";
        case "MM":
          i = o ? "kuukauden" : "kuukautta";
          break;
        case "y":
          return o ? "vuoden" : "vuosi";
        case "yy":
          i = o ? "vuoden" : "vuotta"
      }
      return i = xn(e, o) + " " + i
    }

    function xn(e, t) {
      return e < 10 ? t ? qi[e] : Ni[e] : e
    }

    function kn(e) {
      return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1
    }

    function Dn(e, t, n) {
      var o = e + " ";
      switch (n) {
        case "m":
          return t ? "minuta" : "minutę";
        case "mm":
          return o + (kn(e) ? "minuty" : "minut");
        case "h":
          return t ? "godzina" : "godzinę";
        case "hh":
          return o + (kn(e) ? "godziny" : "godzin");
        case "MM":
          return o + (kn(e) ? "miesiące" : "miesięcy");
        case "yy":
          return o + (kn(e) ? "lata" : "lat")
      }
    }

    function Rn(e) {
      return e > 1 && e < 5 && 1 != ~~(e / 10)
    }

    function Pn(e, t, n, o) {
      var i = e + " ";
      switch (n) {
        case "s":
          return t || o ? "pár sekund" : "pár sekundami";
        case "m":
          return t ? "minuta" : o ? "minutu" : "minutou";
        case "mm":
          return t || o ? i + (Rn(e) ? "minuty" : "minut") : i + "minutami";
        case "h":
          return t ? "hodina" : o ? "hodinu" : "hodinou";
        case "hh":
          return t || o ? i + (Rn(e) ? "hodiny" : "hodin") : i + "hodinami";
        case "d":
          return t || o ? "den" : "dnem";
        case "dd":
          return t || o ? i + (Rn(e) ? "dny" : "dní") : i + "dny";
        case "M":
          return t || o ? "měsíc" : "měsícem";
        case "MM":
          return t || o ? i + (Rn(e) ? "měsíce" : "měsíců") : i + "měsíci";
        case "y":
          return t || o ? "rok" : "rokem";
        case "yy":
          return t || o ? i + (Rn(e) ? "roky" : "let") : i + "lety"
      }
    }
    var jn, Hn, In = e.momentProperties = [],
      Yn = !1,
      Fn = {},
      Un = {},
      Gn = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      Vn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      Jn = {},
      Kn = {},
      Qn = /\d/,
      $n = /\d\d/,
      Zn = /\d{3}/,
      eo = /\d{4}/,
      to = /[+-]?\d{6}/,
      no = /\d\d?/,
      oo = /\d{1,3}/,
      io = /\d{1,4}/,
      ro = /[+-]?\d{1,6}/,
      co = /\d+/,
      ao = /[+-]?\d+/,
      so = /Z|[+-]\d\d:?\d\d/gi,
      uo = /[+-]?\d+(\.\d{1,3})?/,
      po = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
      lo = {},
      Mo = {},
      fo = 0,
      ho = 1,
      bo = 2,
      Ao = 3,
      zo = 4,
      mo = 5,
      go = 6;
    X("M", ["MM", 2], "Mo", function() {
      return this.month() + 1
    }), X("MMM", 0, 0, function(e) {
      return this.localeData().monthsShort(this, e)
    }), X("MMMM", 0, 0, function(e) {
      return this.localeData().months(this, e)
    }), O("month", "M"), D("M", no), D("MM", no, $n), D("MMM", po), D("MMMM", po), j(["M", "MM"], function(e, t) {
      t[ho] = h(e) - 1
    }), j(["MMM", "MMMM"], function(e, t, n, o) {
      var i = n._locale.monthsParse(e, o, n._strict);
      null != i ? t[ho] = i : s(n).invalidMonth = e
    });
    var yo = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      vo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
      Lo = {};
    e.suppressDeprecationWarnings = !1;
    var Oo = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      To = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
        ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
        ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d{2}/],
        ["YYYY-DDD", /\d{4}-\d{3}/]
      ],
      No = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
      ],
      qo = /^\/?Date\((\-?\d+)/i;
    e.createFromInputFallback = Z("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }), X(0, ["YY", 2], 0, function() {
      return this.year() % 100
    }), X(0, ["YYYY", 4], 0, "year"), X(0, ["YYYYY", 5], 0, "year"), X(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), D("Y", ao), D("YY", no, $n), D("YYYY", io, eo), D("YYYYY", ro, to), D("YYYYYY", ro, to), j(["YYYYY", "YYYYYY"], fo), j("YYYY", function(t, n) {
      n[fo] = 2 === t.length ? e.parseTwoDigitYear(t) : h(t)
    }), j("YY", function(t, n) {
      n[fo] = e.parseTwoDigitYear(t)
    }), e.parseTwoDigitYear = function(e) {
      return h(e) + (h(e) > 68 ? 1900 : 2e3)
    };
    var _o = q("FullYear", !1);
    X("w", ["ww", 2], "wo", "week"), X("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), D("w", no), D("ww", no, $n), D("W", no), D("WW", no, $n), H(["w", "ww", "W", "WW"], function(e, t, n, o) {
      t[o.substr(0, 1)] = h(e)
    });
    var Wo = {
      dow: 0,
      doy: 6
    };
    X("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), D("DDD", oo), D("DDDD", Zn), j(["DDD", "DDDD"], function(e, t, n) {
      n._dayOfYear = h(e)
    }), e.ISO_8601 = function() {};
    var So = Z("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var e = _e.apply(null, arguments);
        return e < this ? this : e
      }),
      Bo = Z("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var e = _e.apply(null, arguments);
        return e > this ? this : e
      });
    Ee("Z", ":"), Ee("ZZ", ""), D("Z", so), D("ZZ", so), j(["Z", "ZZ"], function(e, t, n) {
      n._useUTC = !0, n._tzm = we(e)
    });
    var Xo = /([\+\-]|\d\d)/gi;
    e.updateOffset = function() {};
    var Co = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
      Eo = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    Je.fn = Xe.prototype;
    var wo = Ze(1, "add"),
      xo = Ze(-1, "subtract");
    e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var ko = Z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
      return void 0 === e ? this.localeData() : this.locale(e)
    });
    X(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100
    }), X(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100
    }), _t("gggg", "weekYear"), _t("ggggg", "weekYear"), _t("GGGG", "isoWeekYear"), _t("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), D("G", ao), D("g", ao), D("GG", no, $n), D("gg", no, $n), D("GGGG", io, eo), D("gggg", io, eo), D("GGGGG", ro, to), D("ggggg", ro, to), H(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, o) {
      t[o.substr(0, 2)] = h(e)
    }), H(["gg", "GG"], function(t, n, o, i) {
      n[i] = e.parseTwoDigitYear(t)
    }), X("Q", 0, 0, "quarter"), O("quarter", "Q"), D("Q", Qn), j("Q", function(e, t) {
      t[ho] = 3 * (h(e) - 1)
    }), X("D", ["DD", 2], "Do", "date"), O("date", "D"), D("D", no), D("DD", no, $n), D("Do", function(e, t) {
      return e ? t._ordinalParse : t._ordinalParseLenient
    }), j(["D", "DD"], bo), j("Do", function(e, t) {
      t[bo] = h(e.match(no)[0], 10)
    });
    var Do = q("Date", !0);
    X("d", 0, "do", "day"), X("dd", 0, 0, function(e) {
      return this.localeData().weekdaysMin(this, e)
    }), X("ddd", 0, 0, function(e) {
      return this.localeData().weekdaysShort(this, e)
    }), X("dddd", 0, 0, function(e) {
      return this.localeData().weekdays(this, e)
    }), X("e", 0, 0, "weekday"), X("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), D("d", no), D("e", no), D("E", no), D("dd", po), D("ddd", po), D("dddd", po), H(["dd", "ddd", "dddd"], function(e, t, n) {
      var o = n._locale.weekdaysParse(e);
      null != o ? t.d = o : s(n).invalidWeekday = e
    }), H(["d", "e", "E"], function(e, t, n, o) {
      t[o] = h(e)
    });
    var Ro = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      Po = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      jo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    X("H", ["HH", 2], 0, "hour"), X("h", ["hh", 2], 0, function() {
      return this.hours() % 12 || 12
    }), It("a", !0), It("A", !1), O("hour", "h"), D("a", Yt), D("A", Yt), D("H", no), D("h", no), D("HH", no, $n), D("hh", no, $n), j(["H", "HH"], Ao), j(["a", "A"], function(e, t, n) {
      n._isPm = n._locale.isPM(e), n._meridiem = e
    }), j(["h", "hh"], function(e, t, n) {
      t[Ao] = h(e), s(n).bigHour = !0
    });
    var Ho = /[ap]\.?m?\.?/i,
      Io = q("Hours", !0);
    X("m", ["mm", 2], 0, "minute"), O("minute", "m"), D("m", no), D("mm", no, $n), j(["m", "mm"], zo);
    var Yo = q("Minutes", !1);
    X("s", ["ss", 2], 0, "second"), O("second", "s"), D("s", no), D("ss", no, $n), j(["s", "ss"], mo);
    var Fo = q("Seconds", !1);
    X("S", 0, 0, function() {
      return ~~(this.millisecond() / 100)
    }), X(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10)
    }), X(0, ["SSS", 3], 0, "millisecond"), X(0, ["SSSS", 4], 0, function() {
      return 10 * this.millisecond()
    }), X(0, ["SSSSS", 5], 0, function() {
      return 100 * this.millisecond()
    }), X(0, ["SSSSSS", 6], 0, function() {
      return 1e3 * this.millisecond()
    }), X(0, ["SSSSSSS", 7], 0, function() {
      return 1e4 * this.millisecond()
    }), X(0, ["SSSSSSSS", 8], 0, function() {
      return 1e5 * this.millisecond()
    }), X(0, ["SSSSSSSSS", 9], 0, function() {
      return 1e6 * this.millisecond()
    }), O("millisecond", "ms"), D("S", oo, Qn), D("SS", oo, $n), D("SSS", oo, Zn);
    var Uo;
    for (Uo = "SSSS"; Uo.length <= 9; Uo += "S") D(Uo, co);
    for (Uo = "S"; Uo.length <= 9; Uo += "S") j(Uo, Gt);
    var Go = q("Milliseconds", !1);
    X("z", 0, 0, "zoneAbbr"), X("zz", 0, 0, "zoneName");
    var Vo = d.prototype;
    Vo.add = wo, Vo.calendar = tt, Vo.clone = nt, Vo.diff = at, Vo.endOf = mt, Vo.format = lt, Vo.from = dt, Vo.fromNow = Mt, Vo.to = ft, Vo.toNow = ht, Vo.get = S, Vo.invalidAt = qt, Vo.isAfter = ot, Vo.isBefore = it, Vo.isBetween = rt, Vo.isSame = ct, Vo.isValid = Tt, Vo.lang = ko, Vo.locale = bt, Vo.localeData = At, Vo.max = Bo, Vo.min = So, Vo.parsingFlags = Nt, Vo.set = S, Vo.startOf = zt, Vo.subtract = xo, Vo.toArray = Lt, Vo.toObject = Ot, Vo.toDate = vt, Vo.toISOString = pt, Vo.toJSON = pt, Vo.toString = ut, Vo.unix = yt, Vo.valueOf = gt, Vo.year = _o, Vo.isLeapYear = ae, Vo.weekYear = St, Vo.isoWeekYear = Bt, Vo.quarter = Vo.quarters = Et, Vo.month = J, Vo.daysInMonth = K, Vo.week = Vo.weeks = de, Vo.isoWeek = Vo.isoWeeks = Me, Vo.weeksInYear = Ct, Vo.isoWeeksInYear = Xt, Vo.date = Do, Vo.day = Vo.days = Pt, Vo.weekday = jt, Vo.isoWeekday = Ht, Vo.dayOfYear = he, Vo.hour = Vo.hours = Io, Vo.minute = Vo.minutes = Yo, Vo.second = Vo.seconds = Fo, Vo.millisecond = Vo.milliseconds = Go, Vo.utcOffset = De, Vo.utc = Pe, Vo.local = je, Vo.parseZone = He, Vo.hasAlignedHourOffset = Ie, Vo.isDST = Ye, Vo.isDSTShifted = Fe, Vo.isLocal = Ue, Vo.isUtcOffset = Ge, Vo.isUtc = Ve, Vo.isUTC = Ve, Vo.zoneAbbr = Vt, Vo.zoneName = Jt, Vo.dates = Z("dates accessor is deprecated. Use date instead.", Do), Vo.months = Z("months accessor is deprecated. Use month instead", J), Vo.years = Z("years accessor is deprecated. Use year instead", _o), Vo.zone = Z("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Re);
    var Jo = Vo,
      Ko = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      Qo = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      $o = /\d{1,2}/,
      Zo = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      ei = A.prototype;
    ei._calendar = Ko, ei.calendar = $t, ei._longDateFormat = Qo, ei.longDateFormat = Zt, ei._invalidDate = "Invalid date", ei.invalidDate = en, ei._ordinal = "%d", ei.ordinal = tn, ei._ordinalParse = $o, ei.preparse = nn, ei.postformat = nn, ei._relativeTime = Zo, ei.relativeTime = on, ei.pastFuture = rn, ei.set = cn, ei.months = F, ei._months = yo, ei.monthsShort = U, ei._monthsShort = vo, ei.monthsParse = G, ei.week = ue, ei._week = Wo, ei.firstDayOfYear = le, ei.firstDayOfWeek = pe, ei.weekdays = xt, ei._weekdays = Ro, ei.weekdaysMin = Dt, ei._weekdaysMin = jo, ei.weekdaysShort = kt, ei._weekdaysShort = Po, ei.weekdaysParse = Rt, ei.isPM = Ft, ei._meridiemParse = Ho, ei.meridiem = Ut, y("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(e) {
        var t = e % 10;
        return e + (1 === h(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
      }
    }), e.lang = Z("moment.lang is deprecated. Use moment.locale instead.", y), e.langData = Z("moment.langData is deprecated. Use moment.localeData instead.", L);
    var ti = Math.abs,
      ni = On("ms"),
      oi = On("s"),
      ii = On("m"),
      ri = On("h"),
      ci = On("d"),
      ai = On("w"),
      si = On("M"),
      ui = On("y"),
      pi = Nn("milliseconds"),
      li = Nn("seconds"),
      di = Nn("minutes"),
      Mi = Nn("hours"),
      fi = Nn("days"),
      hi = Nn("months"),
      bi = Nn("years"),
      Ai = Math.round,
      zi = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
      },
      mi = Math.abs,
      gi = Xe.prototype;
    gi.abs = fn, gi.add = bn, gi.subtract = An, gi.as = vn, gi.asMilliseconds = ni, gi.asSeconds = oi, gi.asMinutes = ii, gi.asHours = ri, gi.asDays = ci, gi.asWeeks = ai, gi.asMonths = si, gi.asYears = ui, gi.valueOf = Ln, gi._bubble = mn, gi.get = Tn, gi.milliseconds = pi, gi.seconds = li, gi.minutes = di, gi.hours = Mi, gi.days = fi, gi.weeks = qn, gi.months = hi, gi.years = bi, gi.humanize = Bn, gi.toISOString = Xn, gi.toString = Xn, gi.toJSON = Xn, gi.locale = bt, gi.localeData = At, gi.toIsoString = Z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Xn), gi.lang = ko, X("X", 0, 0, "unix"), X("x", 0, 0, "valueOf"), D("x", ao), D("X", uo), j("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
      }), j("x", function(e, t, n) {
        n._d = new Date(h(e))
      }), e.version = "2.10.6",
      function(e) {
        jn = e
      }(_e), e.fn = Jo, e.min = Se, e.max = Be, e.utc = c, e.unix = Kt, e.months = un, e.isDate = n, e.locale = y, e.invalid = p, e.duration = Je, e.isMoment = M, e.weekdays = ln, e.parseZone = Qt, e.localeData = L, e.isDuration = Ce, e.monthsShort = pn, e.weekdaysMin = Mn, e.defineLocale = v, e.weekdaysShort = dn, e.normalizeUnits = T, e.relativeTimeThreshold = Sn;
    var yi = e,
      vi = (yi.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[Morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[Gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          m: Cn,
          mm: "%d Minuten",
          h: Cn,
          hh: "%d Stunden",
          d: Cn,
          dd: Cn,
          M: Cn,
          MM: Cn,
          y: Cn,
          yy: Cn
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        },
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd'hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal: function(e) {
          return e + (1 === e ? "er" : "")
        },
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd'hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e) {
          return e + (1 === e ? "er" : "e")
        }
      }), "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_")),
      Li = "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split("_"),
      Oi = (yi.defineLocale("es", {
        months: "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
        monthsShort: function(e, t) {
          return /-MMM-/.test(t) ? Li[e.month()] : vi[e.month()]
        },
        weekdays: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
        weekdaysShort: "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
        weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextDay: function() {
            return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          nextWeek: function() {
            return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastDay: function() {
            return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          lastWeek: function() {
            return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un día",
          dd: "%d días",
          M: "un mes",
          MM: "%d meses",
          y: "un año",
          yy: "%d años"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hoje às] LT",
          nextDay: "[Amanhã às] LT",
          nextWeek: "dddd [às] LT",
          lastDay: "[Ontem às] LT",
          lastWeek: function() {
            return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "há %s",
          s: "segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          M: "um mês",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Oggi alle] LT",
          nextDay: "[Domani alle] LT",
          nextWeek: "dddd [alle] LT",
          lastDay: "[Ieri alle] LT",
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return "[la scorsa] dddd [alle] LT";
              default:
                return "[lo scorso] dddd [alle] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: function(e) {
            return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
          },
          past: "%s fa",
          s: "alcuni secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
          dow: 1,
          doy: 4
        }
      }), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
      Ti = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
      Ni = (yi.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(e, t) {
          return /-MMM-/.test(t) ? Ti[e.month()] : Oi[e.month()]
        },
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          m: "één minuut",
          mm: "%d minuten",
          h: "één uur",
          hh: "%d uur",
          d: "één dag",
          dd: "%d dagen",
          M: "één maand",
          MM: "%d maanden",
          y: "één jaar",
          yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
          return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
        },
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[Morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[Gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          m: En,
          mm: "%d Minuten",
          h: En,
          hh: "%d Stunden",
          d: En,
          dd: En,
          M: En,
          MM: En,
          y: En,
          yy: En
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      }), "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),
      qi = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", Ni[7], Ni[8], Ni[9]],
      _i = (yi.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
          LT: "HH.mm",
          LTS: "HH.mm.ss",
          L: "DD.MM.YYYY",
          LL: "Do MMMM[ta] YYYY",
          LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
          LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
          l: "D.M.YYYY",
          ll: "Do MMM YYYY",
          lll: "Do MMM YYYY, [klo] HH.mm",
          llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
          sameDay: "[tänään] [klo] LT",
          nextDay: "[huomenna] [klo] LT",
          nextWeek: "dddd [klo] LT",
          lastDay: "[eilen] [klo] LT",
          lastWeek: "[viime] dddd[na] [klo] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "%s päästä",
          past: "%s sitten",
          s: wn,
          m: wn,
          mm: wn,
          h: wn,
          hh: wn,
          d: wn,
          dd: wn,
          M: wn,
          MM: wn,
          y: wn,
          yy: wn
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      }), "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),
      Wi = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),
      Si = (yi.defineLocale("pl", {
        months: function(e, t) {
          return "" === t ? "(" + Wi[e.month()] + "|" + _i[e.month()] + ")" : /D MMMM/.test(t) ? Wi[e.month()] : _i[e.month()]
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
        weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Dziś o] LT",
          nextDay: "[Jutro o] LT",
          nextWeek: "[W] dddd [o] LT",
          lastDay: "[Wczoraj o] LT",
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return "[W zeszłą niedzielę o] LT";
              case 3:
                return "[W zeszłą środę o] LT";
              case 6:
                return "[W zeszłą sobotę o] LT";
              default:
                return "[W zeszły] dddd [o] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          m: Dn,
          mm: Dn,
          h: Dn,
          hh: Dn,
          d: "1 dzień",
          dd: "%d dni",
          M: "miesiąc",
          MM: Dn,
          y: "rok",
          yy: Dn
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY-MM-DD",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Idag] LT",
          nextDay: "[Imorgon] LT",
          lastDay: "[Igår] LT",
          nextWeek: "[På] dddd LT",
          lastWeek: "[I] dddd[s] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "för %s sedan",
          s: "några sekunder",
          m: "en minut",
          mm: "%d minuter",
          h: "en timme",
          hh: "%d timmar",
          d: "en dag",
          dd: "%d dagar",
          M: "en månad",
          MM: "%d månader",
          y: "ett år",
          yy: "%d år"
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal: function(e) {
          var t = e % 10;
          return e + (1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e")
        },
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[I dag kl.] LT",
          nextDay: "[I morgen kl.] LT",
          nextWeek: "dddd [kl.] LT",
          lastDay: "[I går kl.] LT",
          lastWeek: "[sidste] dddd [kl] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "om %s",
          past: "%s siden",
          s: "få sekunder",
          m: "et minut",
          mm: "%d minutter",
          h: "en time",
          hh: "%d timer",
          d: "en dag",
          dd: "%d dage",
          M: "en måned",
          MM: "%d måneder",
          y: "et år",
          yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      }), "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),
      Bi = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
      Xi = (yi.defineLocale("cs", {
        months: Si,
        monthsShort: Bi,
        monthsParse: function(e, t) {
          var n, o = [];
          for (n = 0; n < 12; n++) o[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
          return o
        }(Si, Bi),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY H:mm",
          LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
          sameDay: "[dnes v] LT",
          nextDay: "[zítra v] LT",
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return "[v neděli v] LT";
              case 1:
              case 2:
                return "[v] dddd [v] LT";
              case 3:
                return "[ve středu v] LT";
              case 4:
                return "[ve čtvrtek v] LT";
              case 5:
                return "[v pátek v] LT";
              case 6:
                return "[v sobotu v] LT"
            }
          },
          lastDay: "[včera v] LT",
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return "[minulou neděli v] LT";
              case 1:
              case 2:
                return "[minulé] dddd [v] LT";
              case 3:
                return "[minulou středu v] LT";
              case 4:
              case 5:
                return "[minulý] dddd [v] LT";
              case 6:
                return "[minulou sobotu v] LT"
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "před %s",
          s: Pn,
          m: Pn,
          mm: Pn,
          h: Pn,
          hh: Pn,
          d: Pn,
          dd: Pn,
          M: Pn,
          MM: Pn,
          y: Pn,
          yy: Pn
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      }), yi.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function(e, t) {
          return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function(e, t, n) {
          return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        },
        isPM: function(e) {
          return "μ" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
          LT: "h:mm A",
          LTS: "h:mm:ss A",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY h:mm A",
          LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
          sameDay: "[Σήμερα {}] LT",
          nextDay: "[Αύριο {}] LT",
          nextWeek: "dddd [{}] LT",
          lastDay: "[Χθες {}] LT",
          lastWeek: function() {
            switch (this.day()) {
              case 6:
                return "[το προηγούμενο] dddd [{}] LT";
              default:
                return "[την προηγούμενη] dddd [{}] LT"
            }
          },
          sameElse: "L"
        },
        calendar: function(e, t) {
          var n = this._calendarEl[e],
            o = t && t.hours();
          return "function" == typeof n && (n = n.apply(t)), n.replace("{}", o % 12 == 1 ? "στη" : "στις")
        },
        relativeTime: {
          future: "σε %s",
          past: "%s πριν",
          s: "λίγα δευτερόλεπτα",
          m: "ένα λεπτό",
          mm: "%d λεπτά",
          h: "μία ώρα",
          hh: "%d ώρες",
          d: "μία μέρα",
          dd: "%d μέρες",
          M: "ένας μήνας",
          MM: "%d μήνες",
          y: "ένας χρόνος",
          yy: "%d χρόνια"
        },
        ordinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
          dow: 1,
          doy: 4
        }
      }), yi);
    return Xi.locale("en"), Xi
  }),
  function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("moment-timezone", ["moment"], t) : "object" == typeof module && module.exports ? module.exports = t(require("moment")) : t(e.moment)
  }(this, function(e) {
    "use strict";

    function t(e) {
      return e > 96 ? e - 87 : e > 64 ? e - 29 : e - 48
    }

    function n(e) {
      var n, o = 0,
        i = e.split("."),
        r = i[0],
        c = i[1] || "",
        a = 1,
        s = 0,
        u = 1;
      for (45 === e.charCodeAt(0) && (o = 1, u = -1), o; o < r.length; o++) n = t(r.charCodeAt(o)), s = 60 * s + n;
      for (o = 0; o < c.length; o++) a /= 60, n = t(c.charCodeAt(o)), s += n * a;
      return s * u
    }

    function o(e) {
      for (var t = 0; t < e.length; t++) e[t] = n(e[t])
    }

    function i(e, t) {
      for (var n = 0; n < t; n++) e[n] = Math.round((e[n - 1] || 0) + 6e4 * e[n]);
      e[t - 1] = 1 / 0
    }

    function r(e, t) {
      var n, o = [];
      for (n = 0; n < t.length; n++) o[n] = e[t[n]];
      return o
    }

    function c(e) {
      var t = e.split("|"),
        n = t[2].split(" "),
        c = t[3].split(""),
        a = t[4].split(" ");
      return o(n), o(c), o(a), i(a, c.length), {
        name: t[0],
        abbrs: r(t[1].split(" "), c),
        offsets: r(n, c),
        untils: a,
        population: 0 | t[5]
      }
    }

    function a(e) {
      e && this._set(c(e))
    }

    function s(e) {
      var t = e.toTimeString(),
        n = t.match(/\([a-z ]+\)/i);
      n && n[0] ? (n = n[0].match(/[A-Z]/g), n = n ? n.join("") : void 0) : (n = t.match(/[A-Z]{3,5}/g), n = n ? n[0] : void 0), "GMT" === n && (n = void 0), this.at = +e, this.abbr = n, this.offset = e.getTimezoneOffset()
    }

    function u(e) {
      this.zone = e, this.offsetScore = 0, this.abbrScore = 0
    }

    function p(e, t) {
      for (var n, o; o = 6e4 * ((t.at - e.at) / 12e4 | 0);) n = new s(new Date(e.at + o)), n.offset === e.offset ? e = n : t = n;
      return e
    }

    function l() {
      var e, t, n, o = (new Date).getFullYear() - 2,
        i = new s(new Date(o, 0, 1)),
        r = [i];
      for (n = 1; n < 48; n++) t = new s(new Date(o, n, 1)), t.offset !== i.offset && (e = p(i, t), r.push(e), r.push(new s(new Date(e.at + 6e4)))), i = t;
      for (n = 0; n < 4; n++) r.push(new s(new Date(o + n, 0, 1))), r.push(new s(new Date(o + n, 6, 1)));
      return r
    }

    function d(e, t) {
      return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : t.zone.population - e.zone.population
    }

    function M(e, t) {
      var n, i;
      for (o(t), n = 0; n < t.length; n++) i = t[n], X[i] = X[i] || {}, X[i][e] = !0
    }

    function f(e) {
      var t, n, o, i = e.length,
        r = {},
        c = [];
      for (t = 0; t < i; t++) {
        o = X[e[t].offset] || {};
        for (n in o) o.hasOwnProperty(n) && (r[n] = !0)
      }
      for (t in r) r.hasOwnProperty(t) && c.push(B[t]);
      return c
    }

    function h() {
      try {
        var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (e) {
          var t = B[A(e)];
          if (t) return t;
          T("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
        }
      } catch (e) {}
      var n, o, i, r = l(),
        c = r.length,
        a = f(r),
        s = [];
      for (o = 0; o < a.length; o++) {
        for (n = new u(m(a[o]), c), i = 0; i < c; i++) n.scoreOffsetAt(r[i]);
        s.push(n)
      }
      return s.sort(d), s.length > 0 ? s[0].zone.name : void 0
    }

    function b(e) {
      return _ && !e || (_ = h()), _
    }

    function A(e) {
      return (e || "").toLowerCase().replace(/\//g, "_")
    }

    function z(e) {
      var t, n, o, i;
      for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) o = e[t].split("|"), n = o[0], i = A(n), W[i] = e[t], B[i] = n, o[5] && M(i, o[2].split(" "))
    }

    function m(e, t) {
      e = A(e);
      var n, o = W[e];
      return o instanceof a ? o : "string" == typeof o ? (o = new a(o), W[e] = o, o) : S[e] && t !== m && (n = m(S[e], m)) ? (o = W[e] = new a, o._set(n), o.name = B[e], o) : null
    }

    function g() {
      var e, t = [];
      for (e in B) B.hasOwnProperty(e) && (W[e] || W[S[e]]) && B[e] && t.push(B[e]);
      return t.sort()
    }

    function y(e) {
      var t, n, o, i;
      for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) n = e[t].split("|"), o = A(n[0]), i = A(n[1]), S[o] = i, B[o] = n[0], S[i] = o, B[i] = n[1]
    }

    function v(e) {
      z(e.zones), y(e.links), N.dataVersion = e.version
    }

    function L(e) {
      return L.didShowError || (L.didShowError = !0, T("moment.tz.zoneExists('" + e + "') has been deprecated in favor of !moment.tz.zone('" + e + "')")), !!m(e)
    }

    function O(e) {
      return !(!e._a || void 0 !== e._tzm)
    }

    function T(e) {
      "undefined" != typeof console && console.error
    }

    function N(t) {
      var n = Array.prototype.slice.call(arguments, 0, -1),
        o = arguments[arguments.length - 1],
        i = m(o),
        r = e.utc.apply(null, n);
      return i && !e.isMoment(t) && O(r) && r.add(i.parse(r), "minutes"), r.tz(o), r
    }

    function q(e) {
      return function() {
        return this._z ? this._z.abbr(this) : e.call(this)
      }
    }
    if (void 0 !== e.tz) return T("Moment Timezone " + e.tz.version + " was already loaded " + (e.tz.dataVersion ? "with data from " : "without any data") + e.tz.dataVersion), e;
    var _, W = {},
      S = {},
      B = {},
      X = {},
      C = e.version.split("."),
      E = +C[0],
      w = +C[1];
    (E < 2 || 2 === E && w < 6) && T("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), a.prototype = {
      _set: function(e) {
        this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
      },
      _index: function(e) {
        var t, n = +e,
          o = this.untils;
        for (t = 0; t < o.length; t++)
          if (n < o[t]) return t
      },
      parse: function(e) {
        var t, n, o, i, r = +e,
          c = this.offsets,
          a = this.untils,
          s = a.length - 1;
        for (i = 0; i < s; i++)
          if (t = c[i], n = c[i + 1], o = c[i ? i - 1 : i], t < n && N.moveAmbiguousForward ? t = n : t > o && N.moveInvalidForward && (t = o), r < a[i] - 6e4 * t) return c[i];
        return c[s]
      },
      abbr: function(e) {
        return this.abbrs[this._index(e)]
      },
      offset: function(e) {
        return this.offsets[this._index(e)]
      }
    }, u.prototype.scoreOffsetAt = function(e) {
      this.offsetScore += Math.abs(this.zone.offset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
    }, N.version = "0.5.9", N.dataVersion = "", N._zones = W, N._links = S, N._names = B, N.add = z, N.link = y, N.load = v, N.zone = m, N.zoneExists = L, N.guess = b, N.names = g, N.Zone = a, N.unpack = c, N.unpackBase60 = n, N.needsOffset = O, N.moveInvalidForward = !0, N.moveAmbiguousForward = !1;
    var x = e.fn;
    e.tz = N, e.defaultZone = null, e.updateOffset = function(t, n) {
      var o, i = e.defaultZone;
      void 0 === t._z && (i && O(t) && !t._isUTC && (t._d = e.utc(t._a)._d, t.utc().add(i.parse(t), "minutes")), t._z = i), t._z && (o = t._z.offset(t), Math.abs(o) < 16 && (o /= 60), void 0 !== t.utcOffset ? t.utcOffset(-o, n) : t.zone(o, n))
    }, x.tz = function(t) {
      return t ? (this._z = m(t), this._z ? e.updateOffset(this) : T("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0
    }, x.zoneName = q(x.zoneName), x.zoneAbbr = q(x.zoneAbbr), x.utc = function(e) {
      return function() {
        return this._z = null, e.apply(this, arguments)
      }
    }(x.utc), e.tz.setDefault = function(t) {
      return (E < 2 || 2 === E && w < 9) && T("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? m(t) : null, e
    };
    var k = e.momentProperties;
    return "[object Array]" === Object.prototype.toString.call(k) ? (k.push("_z"), k.push("_a")) : k && (k._z = null), v({
      version: "2016i",
      zones: ["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5", "Africa/Accra|LMT GMT GHST|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5", "Africa/Nairobi|LMT EAT BEAT BEAUT|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5", "Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5", "Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6", "Africa/Bissau|LMT WAT GMT|12.k 10 0|012|-2ldWV.E 2xonV.E|39e4", "Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5", "Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6", "Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5", "Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1y7p0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3", "Africa/El_Aaiun|LMT WAT WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4", "Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5", "Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|01212121212121212121212121212121213|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|51e5", "Africa/Monrovia|MMT LRT GMT|H.8 I.u 0|012|-23Lzg.Q 29s01.m|11e5", "Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5", "Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5", "Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5", "Africa/Windhoek|SWAT SAST SAST CAT WAT WAST|-1u -20 -30 -20 -10 -20|012134545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2GJdu 1Ajdu 1cL0 1SqL0 9NA0 11D0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0|32e4", "America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326", "America/Anchorage|CAT CAWT CAPT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4", "America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3", "America/Araguaina|LMT BRT BRST|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4", "America/Argentina/Buenos_Aires|CMT ART ARST ART ARST|4g.M 40 30 30 20|0121212121212121212121212121212121212121213434343434343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0", "America/Argentina/Catamarca|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Cordoba|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343454343234343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0 1qN0 WL0", "America/Argentina/Jujuy|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 g0p0 10M0 j3c0 uL0", "America/Argentina/La_Rioja|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Mendoza|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|0121212121212121212121212121212121212121213434345656543235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 g0p0 10M0 agM0 Op0 7TX0 uL0", "America/Argentina/Rio_Gallegos|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ako0 7B0 8zb0 uL0", "America/Argentina/Salta|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434543432343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 j3c0 uL0", "America/Argentina/San_Juan|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|01212121212121212121212121212121212121212134343434534343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 g0p0 10M0 ak00 m10 8lb0 uL0", "America/Argentina/San_Luis|CMT ART ARST ART ARST WART WARST|4g.M 40 30 30 20 40 30|01212121212121212121212121212121212121212134343456536353465653|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 kin0 10M0 ak00 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0", "America/Argentina/Tucuman|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|012121212121212121212121212121212121212121343434345434323534343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 g0p0 10M0 ako0 4N0 8BX0 uL0 1qN0 WL0", "America/Argentina/Ushuaia|CMT ART ARST ART ARST WART|4g.M 40 30 30 20 40|0121212121212121212121212121212121212121213434343434343235343|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 g0p0 10M0 ajA0 8p0 8zb0 uL0", "America/Curacao|LMT ANT AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4", "America/Asuncion|AMT PYT PYT PYST|3O.E 40 30 30|012131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5", "America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2", "America/Bahia|LMT BRT BRST|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5", "America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3", "America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4", "America/Belem|LMT BRT BRST|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5", "America/Belize|LMT CST CHDT CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3", "America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2", "America/Boa_Vista|LMT AMT AMST|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2", "America/Bogota|BMT COT COST|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5", "America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4", "America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2", "America/Campo_Grande|LMT AMT AMST|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|77e4", "America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|CMT VET VET|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5", "America/Cayenne|LMT GFT GFT|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3", "America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5", "America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4", "America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5", "America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2", "America/Cuiaba|LMT AMT AMST|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|54e4", "America/Danmarkshavn|LMT WGT WGST GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8", "America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2", "America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3", "America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5", "America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|01234252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 Jy10 SL0 dnB0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5", "America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5", "America/Eirunepe|LMT ACT ACST AMT|4D.s 50 40 40|0121212121212121212121212121212131|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3", "America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5", "America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5", "America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Fortaleza|LMT BRT BRST|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5", "America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "America/Godthab|LMT WGT WGST|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3", "America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2", "America/Grand_Turk|KMT EST EDT AST|57.b 50 40 40|0121212121212121212121212121212121212121212121212121212121212121212121212123|-2l1uQ.N 2HHBQ.N 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2", "America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5", "America/Guayaquil|QMT ECT|5e 50|01|-1yVSK|27e5", "America/Guyana|LMT GBGT GYT GYT GYT|3Q.E 3J 3J 30 40|01234|-2dvU7.k 24JzQ.k mlc0 Bxbf|80e4", "America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4", "America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5", "America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4", "America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2", "America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2", "America/Jamaica|KMT EST EDT|57.b 50 40|0121212121212121212121|-2l1uQ.N 2uM1Q.N 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4", "America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3", "America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/La_Paz|CMT BOST BOT|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5", "America/Lima|LMT PET PEST|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6", "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6", "America/Maceio|LMT BRT BRST|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4", "America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5", "America/Manaus|LMT AMT AMST|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5", "America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4", "America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4", "America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4", "America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2", "America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5", "America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6", "America/Miquelon|LMT AST PMST PMDT|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2", "America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3", "America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5", "America/Montevideo|MMT UYT UYHST UYST UYT UYHST|3I.I 3u 30 20 30 2u|012121212121212121212121213434343434345454543453434343434343434343434343434343434343434|-20UIf.g 8jzJ.g 1cLu 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1qMu WLu 1qMu 11zu 1o0u 11zu NAu 11bu 2iMu zWu Dq10 19X0 pd0 jz0 cm10 19X0 1fB0 1on0 11d0 1oL0 1nB0 1fzu 1aou 1fzu 1aou 1fzu 3nAu Jb0 3MN0 1SLu 4jzu 2PB0 Lb0 3Dd0 1pb0 ixd0 An0 1MN0 An0 1wp0 On0 1wp0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5", "America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4", "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6", "America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2", "America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2", "America/Noronha|LMT FNT FNST|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2", "America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2", "America/Paramaribo|LMT PMT PMT NEGT SRT SRT|3E.E 3E.Q 3E.A 3u 3u 30|012345|-2nDUj.k Wqo0.c qanX.I 1dmLN.o lzc0|24e4", "America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5", "America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Rio_Branco|LMT ACT ACST AMT|4v.c 50 40 40|01212121212121212121212121212131|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4", "America/Porto_Velho|LMT AMT AMST|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4", "America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5", "America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842", "America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2", "America/Recife|LMT BRT BRST|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5", "America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4", "America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229", "America/Santarem|LMT AMT AMST BRT|3C.M 40 30 30|0121212121212121212121212121213|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4", "America/Santiago|SMT CLT CLT CLST CLST|4G.K 50 40 40 30|010203131313131212421242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5", "America/Santo_Domingo|SDMT EST EDT EHDT AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5", "America/Sao_Paulo|LMT BRT BRST|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10 Lz0 1C10 On0 1zd0 Rb0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0|20e6", "America/Scoresbysund|LMT CGT CGST EGST EGT|1r.Q 20 10 0 10|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452", "America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2", "America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3", "America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5", "America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656", "America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4", "America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5", "America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3", "America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4", "America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642", "America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3", "Antarctica/Casey|-00 +08 +11|0 -80 -b0|0121212|-2q00 1DjS0 T90 40P0 KL0 blz0|10", "Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70", "Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80", "Antarctica/Macquarie|AEST AEDT -00 MIST|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1", "Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60", "Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5", "Antarctica/Palmer|-00 ARST ART ART ARST CLT CLST|0 30 40 30 20 40 30|0121212121234356565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|40", "Antarctica/Rothera|-00 -03|0 30|01|gOo0|130", "Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20", "Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40", "Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25", "Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4", "Asia/Riyadh|LMT AST|-36.Q -30|01|-TvD6.Q|57e5", "Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5", "Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5", "Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3", "Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4", "Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4", "Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4", "Asia/Baghdad|BMT AST ADT|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5", "Asia/Qatar|LMT GST AST|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4", "Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|BMT ICT|-6G.4 -70|01|-218SG.4|15e6", "Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5", "Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4", "Asia/Brunei|LMT BNT BNT|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4", "Asia/Kolkata|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0|15e6", "Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4", "Asia/Choibalsan|LMT ULAT ULAT CHOST CHOT CHOT CHOST|-7C -70 -80 -a0 -90 -80 -90|0123434343434343434343434343434343434343434343456565656565656565656565656565656565656565656565|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3", "Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6", "Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5", "Asia/Dhaka|HMT BURT IST DACT BDT BDST|-5R.k -6u -5u -60 -60 -70|01213454|-18LFR.k 1unn.k HB0 m6n0 LqMu 1x6n0 1i00|16e6", "Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5", "Asia/Dili|LMT TLT JST TLT WITA|-8m.k -80 -90 -90 -80|012343|-2le8m.k 1dnXm.k 8HA0 1ew00 Xld0|19e4", "Asia/Dubai|LMT GST|-3F.c -40|01|-21JfF.c|39e5", "Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4", "Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212123|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0", "Asia/Gaza|EET EET EEST IST IDT|-20 -30 -30 -20 -30|010101010102020202020202020202023434343434343434343434343430202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5", "Asia/Hebron|EET EET EEST IST IDT|-20 -30 -30 -20 -30|01010101010202020202020202020202343434343434343434343434343020202020202020202020202020202020202020202020202020202020202020202020202020202020202020|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4", "Asia/Ho_Chi_Minh|LMT PLMT ICT IDT JST|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5", "Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5", "Asia/Hovd|LMT HOVT HOVT HOVST|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|BMT JAVT WIB JST WIB WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6", "Asia/Jayapura|LMT WIT ACST|-9m.M -90 -9u|0121|-1uu9m.M sMMm.M L4nu|26e4", "Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4", "Asia/Kabul|AFT AFT|-40 -4u|01|-10Qs0|46e5", "Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4", "Asia/Karachi|LMT IST IST KART PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6", "Asia/Urumqi|LMT XJT|-5O.k -60|01|-1GgtO.k|32e5", "Asia/Kathmandu|LMT IST NPT|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5", "Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2", "Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Asia/Kuala_Lumpur|SMT MALT MALST MALT MALT JST MYT|-6T.p -70 -7k -7k -7u -90 -80|01234546|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu 1so1u|71e5", "Asia/Kuching|LMT BORT BORT BORTST JST MYT|-7l.k -7u -80 -8k -90 -80|01232323232323232425|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0 1so10|13e4", "Asia/Macau|LMT MOT MOST CST|-7y.k -80 -90 -80|0121212121212121212121212121212121212121213|-2le7y.k 1XO34.k 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0 KEp0|57e4", "Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3", "Asia/Makassar|LMT MMT WITA JST|-7V.A -7V.A -80 -90|01232|-21JjV.A vfc0 myLV.A 8ML0|15e5", "Asia/Manila|PHT PHST JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6", "Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4", "Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4", "Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5", "Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5", "Asia/Oral|LMT +04 +05 +06|-3p.o -40 -50 -60|01232323232323232121212121212121212121212121212|-1Pc3p.o eUnp.o 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4", "Asia/Pontianak|LMT PMT WIB JST WIB WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4", "Asia/Pyongyang|LMT KST JCST JST KST|-8n -8u -90 -90 -90|012341|-2um8n 97XR 12FXu jdA0 2Onc0|29e5", "Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4", "Asia/Rangoon|RMT BURT JST MMT|-6o.E -6u -90 -6u|0123|-21Jio.E SmnS.E 7j9u|48e5", "Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4", "Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4", "Asia/Seoul|LMT KST JCST JST KST KDT KDT|-8r.Q -8u -90 -90 -90 -9u -a0|01234151515151515146464|-2um8r.Q 97XV.Q 12FXu jjA0 kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6", "Asia/Singapore|SMT MALT MALST MALT MALT JST SGT SGT|-6T.p -70 -7k -7k -7u -90 -7u -80|012345467|-2Bg6T.p 17anT.p 7hXE dM00 17bO 8Fyu Mspu DTA0|56e5", "Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2", "Asia/Taipei|JWST JST CST CDT|-80 -90 -80 -90|01232323232323232323232323232323232323232|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5", "Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5", "Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5", "Asia/Tehran|LMT TMT IRST IRST IRDT IRDT|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6", "Asia/Thimphu|LMT IST BTT|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3", "Asia/Tokyo|JCST JST JDT|-90 -90 -a0|0121212121|-1iw90 pKq0 QL0 1lB0 13X0 1zB0 NX0 1zB0 NX0|38e6", "Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5", "Asia/Ulaanbaatar|LMT ULAT ULAT ULAST|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5", "Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2", "Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4", "Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4", "Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5", "Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5", "Atlantic/Azores|HMT AZOT AZOST AZOMT AZOT AZOST WET|1S.w 20 10 0 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545456545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldW5.s aPX5.s Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4", "Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3", "Atlantic/Canary|LMT CANT WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Atlantic/Cape_Verde|LMT CVT CVST CVT|1y.4 20 10 10|01213|-2xomp.U 1qOMp.U 7zX0 1djf0|50e4", "Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3", "Atlantic/Madeira|FMT MADT MADST MADMT WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldWQ.o aPWQ.o Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4", "Atlantic/Reykjavik|LMT IST ISST GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4", "Atlantic/South_Georgia|GST|20|0||30", "Atlantic/Stanley|SMT FKT FKST FKT FKST|3P.o 40 30 30 20|0121212121212134343212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 U10 1qM0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2", "Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5", "Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3", "Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746", "Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4", "Australia/Eucla|ACWST ACWDT|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368", "Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4", "Australia/Lord_Howe|AEST LHST LHDT LHDT|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10", "Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5", "Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5", "CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Easter|EMT EAST EASST EAST EASST|7h.s 70 60 60 50|0121212121212121212121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2", "EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "EST|EST|50|0|", "EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g5X0 14p0 1wn0 17d0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Etc/GMT+0|GMT|0|0|", "Etc/GMT+1|-01|10|0|", "Etc/GMT+10|-10|a0|0|", "Etc/GMT+11|-11|b0|0|", "Etc/GMT+12|-12|c0|0|", "Etc/GMT+2|-02|20|0|", "Etc/GMT+3|-03|30|0|", "Etc/GMT+4|-04|40|0|", "Etc/GMT+5|-05|50|0|", "Etc/GMT+6|-06|60|0|", "Etc/GMT+7|-07|70|0|", "Etc/GMT+8|-08|80|0|", "Etc/GMT+9|-09|90|0|", "Etc/GMT-1|+01|-10|0|", "Etc/GMT-10|+10|-a0|0|", "Etc/GMT-11|+11|-b0|0|", "Etc/GMT-12|+12|-c0|0|", "Etc/GMT-13|+13|-d0|0|", "Etc/GMT-14|+14|-e0|0|", "Etc/GMT-2|+02|-20|0|", "Etc/GMT-3|+03|-30|0|", "Etc/GMT-4|+04|-40|0|", "Etc/GMT-5|+05|-50|0|", "Etc/GMT-6|+06|-60|0|", "Etc/GMT-7|+07|-70|0|", "Etc/GMT-8|+08|-80|0|", "Etc/GMT-9|+09|-90|0|", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Amsterdam|AMT NST NEST NET CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5", "Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3", "Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5", "Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6", "Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5", "Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 16M0 1lc0 1tA0 17A0 11c0 1io0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5", "Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5", "Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5", "Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4", "Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4", "Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3", "Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4", "Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5", "Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4", "Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ldXn.f aPWn.f Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5", "Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|01010101010101010101010121212121234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-28dd0 11A0 1go0 19A0 1co0 1dA0 b1A0 18o0 3I00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 iyo0 Rc0 18o0 1hc0 1io0 1a00 14o0 5aL0 MM0 1vc0 17A0 1i00 1bc0 1eo0 17d0 1in0 17A0 6hA0 10N0 XIL0 1a10 1in0 17d0 19X0 1cN0 1fz0 1a10 1fX0 1cp0 1cO0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5", "Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5", "Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3", "Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6", "Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6", "Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4", "Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5", "Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5", "Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5", "Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5", "Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4", "Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4", "Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0", "Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4", "Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5", "Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4", "Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5", "Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5", "Europe/Zaporozhye|CUT EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4", "HST|HST|a0|0|", "Indian/Chagos|LMT IOT IOT|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2", "Indian/Christmas|CXT|-70|0||21e2", "Indian/Cocos|CCT|-6u|0||596", "Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130", "Indian/Mahe|LMT SCT|-3F.M -40|01|-2yO3F.M|79e3", "Indian/Maldives|MMT MVT|-4S -50|01|-olgS|35e4", "Indian/Mauritius|LMT MUT MUST|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4", "Indian/Reunion|LMT RET|-3F.Q -40|01|-2mDDF.Q|84e4", "Pacific/Kwajalein|MHT KWAT MHT|-b0 c0 -c0|012|-AX0 W9X0|14e3", "MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00", "MST|MST|70|0|", "MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Chatham|CHAST CHAST CHADT|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600", "PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0", "Pacific/Apia|LMT WSST SST SDT WSDT WSST|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|PGT JST BST|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4", "Pacific/Chuuk|CHUT|-a0|0||49e3", "Pacific/Efate|LMT VUT VUST|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3", "Pacific/Enderbury|PHOT PHOT PHOT|c0 b0 -d0|012|nIc0 B8n0|1", "Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483", "Pacific/Fiji|LMT FJT FJST|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|88e4", "Pacific/Funafuti|TVT|-c0|0||45e2", "Pacific/Galapagos|LMT ECT GALT|5W.o 50 60|012|-1yVS1.A 2dTz1.A|25e3", "Pacific/Gambier|LMT GAMT|8X.M 90|01|-2jof0.c|125", "Pacific/Guadalcanal|LMT SBT|-aD.M -b0|01|-2joyD.M|11e4", "Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4", "Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4", "Pacific/Kiritimati|LINT LINT LINT|aE a0 -e0|012|nIaE B8nk|51e2", "Pacific/Kosrae|KOST KOST|-b0 -c0|010|-AX0 1bdz0|66e2", "Pacific/Majuro|MHT MHT|-b0 -c0|01|-AX0|28e3", "Pacific/Marquesas|LMT MART|9i 9u|01|-2joeG|86e2", "Pacific/Pago_Pago|LMT NST BST SST|bm.M b0 b0 b0|0123|-2nDMB.c 2gVzB.c EyM0|37e2", "Pacific/Nauru|LMT NRT JST NRT|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3", "Pacific/Niue|NUT NUT NUT|bk bu b0|012|-KfME 17y0a|12e2", "Pacific/Norfolk|NMT NFT NFST NFT|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4", "Pacific/Noumea|LMT NCT NCST|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3", "Pacific/Palau|PWT|-90|0||21e3", "Pacific/Pitcairn|PNT PST|8u 80|01|18Vku|56", "Pacific/Pohnpei|PONT|-b0|0||34e3", "Pacific/Port_Moresby|PGT|-a0|0||25e4", "Pacific/Rarotonga|CKT CKHST CKT|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3", "Pacific/Tahiti|LMT TAHT|9W.g a0|01|-2joe1.I|18e4", "Pacific/Tarawa|GILT|-c0|0||29e3", "Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121212121212121212121212121212121212121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0 uM0|75e3", "Pacific/Wake|WAKT|-c0|0||16e3", "Pacific/Wallis|WFT|-c0|0||94", "WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],
      links: ["Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Sao_Tome", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Cairo|Egypt", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Khartoum|Africa/Juba", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|US/Alaska", "America/Argentina/Buenos_Aires|America/Buenos_Aires", "America/Argentina/Catamarca|America/Argentina/ComodRivadavia", "America/Argentina/Catamarca|America/Catamarca", "America/Argentina/Cordoba|America/Cordoba", "America/Argentina/Cordoba|America/Rosario", "America/Argentina/Jujuy|America/Jujuy", "America/Argentina/Mendoza|America/Mendoza", "America/Atikokan|America/Coral_Harbour", "America/Chicago|US/Central", "America/Curacao|America/Aruba", "America/Curacao|America/Kralendijk", "America/Curacao|America/Lower_Princes", "America/Denver|America/Shiprock", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Detroit|US/Michigan", "America/Edmonton|Canada/Mountain", "America/Fort_Wayne|America/Indiana/Indianapolis", "America/Fort_Wayne|America/Indianapolis", "America/Fort_Wayne|US/East-Indiana", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/Indiana/Knox|America/Knox_IN", "America/Indiana/Knox|US/Indiana-Starke", "America/Jamaica|Jamaica", "America/Kentucky/Louisville|America/Louisville", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Manaus|Brazil/West", "America/Mazatlan|Mexico/BajaSur", "America/Mexico_City|Mexico/General", "America/New_York|US/Eastern", "America/Noronha|Brazil/DeNoronha", "America/Panama|America/Cayman", "America/Phoenix|US/Arizona", "America/Port_of_Spain|America/Anguilla", "America/Port_of_Spain|America/Antigua", "America/Port_of_Spain|America/Dominica", "America/Port_of_Spain|America/Grenada", "America/Port_of_Spain|America/Guadeloupe", "America/Port_of_Spain|America/Marigot", "America/Port_of_Spain|America/Montserrat", "America/Port_of_Spain|America/St_Barthelemy", "America/Port_of_Spain|America/St_Kitts", "America/Port_of_Spain|America/St_Lucia", "America/Port_of_Spain|America/St_Thomas", "America/Port_of_Spain|America/St_Vincent", "America/Port_of_Spain|America/Tortola", "America/Port_of_Spain|America/Virgin", "America/Regina|Canada/East-Saskatchewan", "America/Regina|Canada/Saskatchewan", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "America/Tijuana|America/Ensenada", "America/Tijuana|America/Santa_Isabel", "America/Tijuana|Mexico/BajaNorte", "America/Toronto|America/Montreal", "America/Toronto|Canada/Eastern", "America/Vancouver|Canada/Pacific", "America/Whitehorse|Canada/Yukon", "America/Winnipeg|Canada/Central", "Asia/Ashgabat|Asia/Ashkhabad", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Vientiane", "Asia/Dhaka|Asia/Dacca", "Asia/Dubai|Asia/Muscat", "Asia/Ho_Chi_Minh|Asia/Saigon", "Asia/Hong_Kong|Hongkong", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Macau|Asia/Macao", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Nicosia|Europe/Nicosia", "Asia/Qatar|Asia/Bahrain", "Asia/Rangoon|Asia/Yangon", "Asia/Riyadh|Asia/Aden", "Asia/Riyadh|Asia/Kuwait", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|PRC", "Asia/Singapore|Singapore", "Asia/Taipei|ROC", "Asia/Tehran|Iran", "Asia/Thimphu|Asia/Thimbu", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Urumqi|Asia/Kashgar", "Atlantic/Faroe|Atlantic/Faeroe", "Atlantic/Reykjavik|Iceland", "Australia/Adelaide|Australia/South", "Australia/Brisbane|Australia/Queensland", "Australia/Broken_Hill|Australia/Yancowinna", "Australia/Darwin|Australia/North", "Australia/Hobart|Australia/Tasmania", "Australia/Lord_Howe|Australia/LHI", "Australia/Melbourne|Australia/Victoria", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/NSW", "Etc/GMT+0|Etc/GMT", "Etc/GMT+0|Etc/GMT-0", "Etc/GMT+0|Etc/GMT0", "Etc/GMT+0|Etc/Greenwich", "Etc/GMT+0|GMT", "Etc/GMT+0|GMT+0", "Etc/GMT+0|GMT-0", "Etc/GMT+0|GMT0", "Etc/GMT+0|Greenwich", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Belgrade|Europe/Ljubljana", "Europe/Belgrade|Europe/Podgorica", "Europe/Belgrade|Europe/Sarajevo", "Europe/Belgrade|Europe/Skopje", "Europe/Belgrade|Europe/Zagreb", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Helsinki|Europe/Mariehamn", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Portugal", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Oslo|Arctic/Longyearbyen", "Europe/Oslo|Atlantic/Jan_Mayen", "Europe/Prague|Europe/Bratislava", "Europe/Rome|Europe/San_Marino", "Europe/Rome|Europe/Vatican", "Europe/Warsaw|Poland", "Europe/Zurich|Europe/Busingen", "Europe/Zurich|Europe/Vaduz", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Chuuk|Pacific/Truk", "Pacific/Chuuk|Pacific/Yap", "Pacific/Easter|Chile/EasterIsland", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kwajalein|Kwajalein", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pohnpei|Pacific/Ponape"]
    }), e
  }),
  function(e, t) {
    function n(e, t, n) {
      var o = e.children(),
        i = !1;
      e.empty();
      for (var c = 0, a = o.length; c < a; c++) {
        var s = o.eq(c);
        if (e.append(s), n && e.append(n), r(e, t)) {
          s.remove(), i = !0;
          break
        }
        n && n.detach()
      }
      return i
    }

    function o(t, n, c, a, s) {
      var u = !1;
      return t.contents().detach().each(function() {
        var p = this,
          l = e(p);
        if (void 0 === p) return !0;
        if (l.is("script, .dotdotdot-keep")) t.append(l);
        else {
          if (u) return !0;
          t.append(l), !s || l.is(a.after) || l.find(a.after).length || t[t.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](s), r(c, a) && (u = 3 == p.nodeType ? i(l, n, c, a, s) : o(l, n, c, a, s)), u || s && s.detach()
        }
      }), n.addClass("is-truncated"), u
    }

    function i(t, n, o, i, a) {
      var p = t[0];
      if (!p) return !1;
      var d = u(p),
        M = -1 !== d.indexOf(" ") ? " " : "　",
        f = "letter" == i.wrap ? "" : M,
        h = d.split(f),
        b = -1,
        A = -1,
        z = 0,
        m = h.length - 1;
      for (i.fallbackToLetter && 0 == z && 0 == m && (f = "", h = d.split(f), m = h.length - 1); z <= m && (0 != z || 0 != m);) {
        var g = Math.floor((z + m) / 2);
        if (g == A) break;
        A = g, s(p, h.slice(0, A + 1).join(f) + i.ellipsis), o.children().each(function() {
          e(this).toggle().toggle()
        }), r(o, i) ? (m = A, i.fallbackToLetter && 0 == z && 0 == m && (f = "", h = h[0].split(f), b = -1, A = -1, z = 0, m = h.length - 1)) : (b = A, z = A)
      }
      if (-1 == b || 1 == h.length && 0 == h[0].length) {
        var y = t.parent();
        t.detach();
        var v = a && a.closest(y).length ? a.length : 0;
        if (y.contents().length > v ? p = l(y.contents().eq(-1 - v), n) : (p = l(y, n, !0), v || y.detach()), p && (d = c(u(p), i), s(p, d), v && a)) {
          var L = a.parent();
          e(p).parent().append(a), e.trim(L.html()) || L.remove()
        }
      } else d = c(h.slice(0, b + 1).join(f), i), s(p, d);
      return !0
    }

    function r(e, t) {
      return e.innerHeight() > t.maxHeight
    }

    function c(t, n) {
      for (; e.inArray(t.slice(-1), n.lastCharacter.remove) > -1;) t = t.slice(0, -1);
      return e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 && (t += n.ellipsis), t
    }

    function a(e) {
      return {
        width: e.innerWidth(),
        height: e.innerHeight()
      }
    }

    function s(e, t) {
      e.innerText ? e.innerText = t : e.nodeValue ? e.nodeValue = t : e.textContent && (e.textContent = t)
    }

    function u(e) {
      return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ""
    }

    function p(e) {
      do {
        e = e.previousSibling
      } while (e && 1 !== e.nodeType && 3 !== e.nodeType);
      return e
    }

    function l(t, n, o) {
      var i, r = t && t[0];
      if (r) {
        if (!o) {
          if (3 === r.nodeType) return r;
          if (e.trim(t.text())) return l(t.contents().last(), n)
        }
        for (i = p(r); !i;) {
          if (t = t.parent(), t.is(n) || !t.length) return !1;
          i = p(t[0])
        }
        if (i) return l(e(i), n)
      }
      return !1
    }

    function d(t, n) {
      return !!t && ("string" == typeof t ? (t = e(t, n), !!t.length && t) : !!t.jquery && t)
    }

    function M(e) {
      for (var t = e.innerHeight(), n = ["paddingTop", "paddingBottom"], o = 0, i = n.length; o < i; o++) {
        var r = parseInt(e.css(n[o]), 10);
        isNaN(r) && (r = 0), t -= r
      }
      return t
    }
    if (!e.fn.dotdotdot) {
      e.fn.dotdotdot = function(t) {
        if (0 == this.length) return e.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
        if (this.length > 1) return this.each(function() {
          e(this).dotdotdot(t)
        });
        var i = this,
          c = i.contents();
        i.data("dotdotdot") && i.trigger("destroy.dot"), i.data("dotdotdot-style", i.attr("style") || ""), i.css("word-wrap", "break-word"), "nowrap" === i.css("white-space") && i.css("white-space", "normal"), i.bind_events = function() {
          return i.bind("update.dot", function(t, a) {
            switch (i.removeClass("is-truncated"), t.preventDefault(), t.stopPropagation(), typeof s.height) {
              case "number":
                s.maxHeight = s.height;
                break;
              case "function":
                s.maxHeight = s.height.call(i[0]);
                break;
              default:
                s.maxHeight = M(i)
            }
            s.maxHeight += s.tolerance, void 0 !== a && (("string" == typeof a || "nodeType" in a && 1 === a.nodeType) && (a = e("<div />").append(a).contents()), a instanceof e && (c = a)), h = i.wrapInner('<div class="dotdotdot" />').children(), h.contents().detach().end().append(c.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
              height: "auto",
              width: "auto",
              border: "none",
              padding: 0,
              margin: 0
            });
            var p = !1,
              l = !1;
            return u.afterElement && (p = u.afterElement.clone(!0), p.show(), u.afterElement.detach()), r(h, s) && (l = "children" == s.wrap ? n(h, s, p) : o(h, i, h, s, p)), h.replaceWith(h.contents()), h = null, e.isFunction(s.callback) && s.callback.call(i[0], l, c), u.isTruncated = l, l
          }).bind("isTruncated.dot", function(e, t) {
            return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(i[0], u.isTruncated), u.isTruncated
          }).bind("originalContent.dot", function(e, t) {
            return e.preventDefault(), e.stopPropagation(), "function" == typeof t && t.call(i[0], c), c
          }).bind("destroy.dot", function(e) {
            e.preventDefault(), e.stopPropagation(), i.unwatch().unbind_events().contents().detach().end().append(c).attr("style", i.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1)
          }), i
        }, i.unbind_events = function() {
          return i.unbind(".dot"), i
        }, i.watch = function() {
          if (i.unwatch(), "window" == s.watch) {
            var t = e(window),
              n = t.width(),
              o = t.height();
            t.bind("resize.dot" + u.dotId, function() {
              n == t.width() && o == t.height() && s.windowResizeFix || (n = t.width(), o = t.height(), l && clearInterval(l), l = setTimeout(function() {
                i.trigger("update.dot")
              }, 100))
            })
          } else p = a(i), l = setInterval(function() {
            if (i.is(":visible")) {
              var e = a(i);
              p.width == e.width && p.height == e.height || (i.trigger("update.dot"), p = e)
            }
          }, 500);
          return i
        }, i.unwatch = function() {
          return e(window).unbind("resize.dot" + u.dotId), l && clearInterval(l), i
        };
        var s = e.extend(!0, {}, e.fn.dotdotdot.defaults, t),
          u = {},
          p = {},
          l = null,
          h = null;
        return s.lastCharacter.remove instanceof Array || (s.lastCharacter.remove = e.fn.dotdotdot.defaultArrays.lastCharacter.remove), s.lastCharacter.noEllipsis instanceof Array || (s.lastCharacter.noEllipsis = e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), u.afterElement = d(s.after, i), u.isTruncated = !1, u.dotId = f++, i.data("dotdotdot", !0).bind_events().trigger("update.dot"), s.watch && i.watch(), i
      }, e.fn.dotdotdot.defaults = {
        ellipsis: "... ",
        wrap: "word",
        fallbackToLetter: !0,
        lastCharacter: {},
        tolerance: 0,
        callback: null,
        after: null,
        height: null,
        watch: !1,
        windowResizeFix: !0
      }, e.fn.dotdotdot.defaultArrays = {
        lastCharacter: {
          remove: [" ", "　", ",", ";", ".", "!", "?"],
          noEllipsis: []
        }
      }, e.fn.dotdotdot.debug = function(e) {};
      var f = 1,
        h = e.fn.html;
      e.fn.html = function(t) {
        return void 0 != t && !e.isFunction(t) && this.data("dotdotdot") ? this.trigger("update", [t]) : h.apply(this, arguments)
      };
      var b = e.fn.text;
      e.fn.text = function(t) {
        return void 0 != t && !e.isFunction(t) && this.data("dotdotdot") ? (t = e("<div />").text(t).html(), this.trigger("update", [t])) : b.apply(this, arguments)
      }
    }
  }(jQuery), jQuery(document).ready(function(e) {
    e(".dot-ellipsis").each(function() {
      var t = e(this).hasClass("dot-resize-update"),
        n = e(this).hasClass("dot-timer-update"),
        o = 0,
        i = e(this).attr("class").split(/\s+/);
      e.each(i, function(e, t) {
        var n = t.match(/^dot-height-(\d+)$/);
        null !== n && (o = Number(n[1]))
      });
      var r = new Object;
      n && (r.watch = !0), t && (r.watch = "window"), o > 0 && (r.height = o), e(this).dotdotdot(r)
    })
  }), jQuery(window).on("load", function() {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
  }), define("dotdotdot", function() {