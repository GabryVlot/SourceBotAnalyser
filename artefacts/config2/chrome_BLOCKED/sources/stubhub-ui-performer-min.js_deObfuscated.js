! function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var t;
    t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.StubHubUIJS = e()
  }
}(function() {
  return function e(t, n, r) {
    function o(i, s) {
      if (!n[i]) {
        if (!t[i]) {
          var u = "function" == typeof require && require;
          if (!s && u) return u(i, !0);
          if (a) return a(i, !0);
          var l = new Error("Cannot find module '" + i + "'");
          throw l.code = "MODULE_NOT_FOUND", l
        }
        var c = n[i] = {
          exports: {}
        };
        t[i][0].call(c.exports, function(e) {
          var n = t[i][1][e];
          return o(n ? n : e)
        }, c, c.exports, e, t, n, r)
      }
      return n[i].exports
    }
    for (var a = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);
    return o
  }({
    1: [function(e, t, n) {
      function r(e, t) {
        var n = E(e);
        for (var r in n) {
          var a = n[r];
          a && "" != a || delete n[r]
        }
        var i = n["url-query-mapping"];
        if (i) {
          var s = b(i);
          for (var r in s) n[r] = s[r]
        }
        var u = n["url-path-pattern"];
        if (u) {
          var c = y(u);
          for (var r in c) n[r] = c[r]
        }
        var p = v(n);
        if ("undefined" == typeof n.type || "" == n.type || null === n.type) return t(null, e);
        var f = n["watch-list"];
        if (f) {
          for (var h = {}, g = C(f), m = 0; m < g.length; m++) {
            var w = g[m];
            h[w] = j(".stubhub-watch-" + w)
          }
          return j(".stubhub-watch-button").on("click", function(t) {
            var r = {};
            for (var a in h) {
              var i = h[a];
              if (i && "function" == typeof i.val) {
                var s = i.prop("tagName").toLowerCase(),
                  u = null;
                if ("input" == s) {
                  var l = i.prop("type").toLowerCase();
                  if ("checkbox" == l || "radio" == l)
                    for (var c = 0; c < i.length; c++) {
                      var d = j(i[c]);
                      d.is(":checked") && (u = d.val())
                    } else u = i.val()
                } else "select" == s && (u = i.val() || null, u && Array.isArray(u) && u.length > 0 && (u = u.join(",")));
                null !== u && (r[a] = u)
              }
            }
            r.radius = p.radius || null;
            var f = v(r);
            for (var a in f) p[a] = f[a];
            return R.eventQuery(p, function(t, r) {
              var a = {
                data: n,
                query: p,
                results: r.results,
                tracking: n.track ? n.track.toUpperCase().split(":") : []
              };
              o(null, e, a, function(e, t) {})
            }), !1
          }), t(null, e)
        }
        if ("logo" == n.type) {
          var k = {
            data: n,
            query: p,
            tracking: n.track ? n.track.toUpperCase().split(":") : []
          };
          o(n.type, e, k, function(e, t) {}), t(null, e)
        } else if ("performer-card-list" == n.type) {
          var k = {
            data: n
          };
          o(n.type, e, k, function() {
            var r = j(".stubhub-ui-component-load-more a", e);
            r.on("click", function(t) {
              l(o, p, n, e, function(e, t) {})
            });
            var o = {
              extraPerformers: [],
              startIndex: 0,
              rowConfigurationIndex: 0
            };
            l(o, p, n, e, function(e, n) {
              t(e, n)
            })
          })
        } else {
          var T = "false" !== n.load && n.load !== !1;
          if (!T) return t(null, e);
          R.eventQuery(p, function(r, a) {
            if (r) return d(e, "error", {
              errorSource: "catalogQuery",
              error: r
            }), t(r, e);
            var i = {
              data: n,
              tracking: n.track ? n.track.toUpperCase().split(":") : [],
              query: p,
              results: a.results,
              numFound: a.numFound
            };
            if ("event-count" != n.type || p.performer || p["performer-id"]) return o(n.type, e, i, t), t(null, e);
            var s = {
              token: n.token
            };
            p.location && (s.location = p.location), R.getLocation(s, function(r, a) {
              return r && d(e, "error", {
                errorSource: "locationQuery",
                error: r
              }), a && (i.location = a.location), o(n.type, e, i, t), t(null, e)
            })
          })
        }
      }

      function o(e, t, n, r) {
        var o = null;
        if (e || (e = j(t).attr("data-type")), n.format = O, n.assets = I.assets, "custom" == e) i(j, t, function(e) {
          if (!e) throw new Error("missing custom template");
          o = I.functions.tmpl(e, n), a(j, !0, o, n.data, t), r(null, t)
        });
        else if ("performer-card-list" == e) {
          var s = I.defaultTemplates.performerCardList(n);
          a(j, !1, s, n.data, t), r(null, t)
        } else if ("performer-card-list-group" == e) {
          var u = I.defaultTemplates.performerCardListGroup(n),
            l = j(".stubhub-ui-component-group-container", t),
            c = j(u);
          l.append(c), r(null, c)
        } else {
          var d = m(e);
          if (!I.defaultTemplates[d]) throw new Error("invalid component type: " + e);
          o = I.defaultTemplates[d](n), a(j, !0, o, n.data, t), r(null, t)
        }
      }

      function a(e, t, n, r, o) {
        if (o.html(n || ""), o.attr("data-rendered", !0), t) {
          var a = r.link ? r.link : null;
          f(e, a, r, o)
        }
        return h(e, {}, o), o
      }

      function i(e, t, n) {
        var r = t.data("data-template");
        if (r) n(r);
        else {
          var o = e("script[type='text/template']", t),
            a = o.attr("src");
          a ? T(e, a, function(e, o) {
            o ? (r = o, t.data("data-template", r), n(r)) : n(null)
          }) : (r = e(o[0]).text(), t.data("data-template", r), n(r))
        }
      }

      function s(e, t) {
        var n = j(e),
          o = n.length,
          a = 0,
          i = {
            renderedComponents: [],
            errors: []
          };
        if (o > 0)
          for (var s = 0; o > s; s++) {
            var u = j(n[s]);
            r(u, function(e, n) {
              e ? i.errors.push(e) : i.renderedComponents.push(n), a++, a == o && (t(null, i), d(u, "rendered", i))
            })
          }
      }

      function u(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var r = e[n];
          if (t.push(r.id), t.length > 1) return !0
        }
        return !1
      }

      function l(e, t, n, r, a) {
        var i = {
            LS: 2,
            MM: 2,
            SL: 2,
            SSS: 3
          },
          s = n.rows ? C(n.rows, ",") : ["LS", "MM", "SL", "SSS"],
          l = j.extend({}, t);
        l.start = e.startIndex, R.recoQuery(l, function(t, l) {
          var p = j(".stubhub-ui-component-load-more a", r);
          if (t) return d(r, "error", {
            errorSource: "recoQuery",
            error: t
          }), p.css("display", "none"), a(t, r);
          if (l) {
            var f = l.results,
              h = [];
            f.length > 0 ? p.css("display", "block") : p.css("display", "none"), e.startIndex = e.startIndex + f.length, 0 !== e.extraPerformers.length && (f = e.extraPerformers.slice().concat(f), e.extraPerformers = []);
            for (var v = 0, g = e.rowConfigurationIndex || 0, m = 0; v < f.length; m++) {
              var y = s[g],
                b = i[y],
                w = {
                  type: y.toLowerCase(),
                  results: []
                };
              if (f.length - v < b && f.length > 2) {
                e.extraPerformers = f.slice(-1 * (f.length - v));
                break
              }
              for (var C = 0; b > C && v < f.length; C++) {
                var k = f[v];
                if (7033 != k.id)
                  if (k.images && 0 != k.images.length && k.link) {
                    var E = k.events;
                    k.multipleVenues = u(E), w.results.push(k), v++
                  } else C--, v++;
                else C--, v++
              }
              h[m] = w, g == s.length - 1 ? g = 0 : g++, e.rowConfigurationIndex = g
            }
            var T = {
              data: n,
              results: h
            };
            o("performer-card-list-group", r, T, c)
          }
          return a(null, r)
        })
      }

      function c(e, t) {
        j('.performer-card a[data-track="true"]', t).on("click", function(e) {
          var n = j(this),
            r = n.data("trackName"),
            o = n.data();
          delete o["data-track"], d(t.parent(), r, o)
        }), j(".performer-favorite a", t).on("click", function(e) {
          var n = j(this),
            r = n.data();
          n.toggleClass("on"), n.hasClass("on") ? r.open = !0 : r.open = !1, d(t.parent(), r.trackName, r), e.stopPropagation()
        }), j(".performer", t).on("click", function(e) {
          var n = j(this),
            r = n.parent(),
            o = n.data(),
            a = r.parent(),
            i = a.parent();
          j(".stubhub-ui-component-row.selected", i).not(a).removeClass("selected"), a.hasClass("selected") || a.addClass("selected");
          var s = 0,
            u = r,
            l = u.offset(),
            c = j(".performer-card.on");
          if (c.length > 0) var p = c.offset();
          if (c.length > 0 && l.top > p.top && (s = j(".event-list-container", c).height()), j(".performer-card.on", i).not(r).removeClass("on"), r.hasClass("on") && a.removeClass("selected"), r.toggleClass("on"), r.hasClass("on") ? o.open = !0 : o.open = !1, d(t.parent(), "card-action", o), j(window).width() > 640) {
            var f = n.offset(),
              h = f.top - 25 - s;
            j("html, body").animate({
              scrollTop: h + "px"
            }, 500, "swing")
          }
        }), j(".event-list-close", t).on("click", function() {
          var e = j(this),
            n = e.parent().parent().parent(),
            r = n.parent().parent(),
            o = e.data();
          j(".stubhub-ui-component-row.selected", r).removeClass("selected"), n.removeClass("on"), o.open = !1, d(t.parent(), "card-action", o)
        })
      }

      function d(e, t, n) {
        try {
          e.trigger("stubhub-visual-component:" + t, n)
        } catch (r) {}
      }

      function p(e, t, n, r) {
        var o = window,
          a = document,
          i = screen,
          s = void 0 != o.screenLeft ? o.screenLeft : i.left,
          u = void 0 != o.screenTop ? o.screenTop : i.top,
          l = o.innerWidth ? o.innerWidth : a.documentElement.clientWidth ? a.documentElement.clientWidth : i.width,
          c = o.innerHeight ? o.innerHeight : a.documentElement.clientHeight ? a.documentElement.clientHeight : i.height,
          d = l / 2 - n / 2 + s,
          p = c / 2 - r / 2 + u,
          f = o.open(e, t, "scrollbars=yes, width=" + n + ", height=" + r + ", top=" + p + ", left=" + d);
        o.focus && f.focus()
      }

      function f(e, t, n, r) {
        var o = [],
          a = !1;
        if ("event-list" == n.type || "event-count" == n.type || "logo" == n.type ? (o = e(".stubhub-link", r), a = !1) : (o = e(".event", r), a = !0), "interstitial" == t)
          for (var i = 0; i < o.length; i++) {
            var s = e(o[i]),
              u = s.data("url"),
              l = n["interstitial-url"],
              c = parseInt(n["interstitial-width"]),
              d = parseInt(n["interstitial-height"]);
            NaN == c && (c = 500), NaN == d && (d = 500), l && s.featherlight({
              iframe: l + "?redirect=" + encodeURIComponent(u),
              iframeWidth: c,
              iframeHeight: d
            })
          } else o.on("click", function(n) {
            var r = e(this),
              o = r.data("url") || r.attr("href");
            return "popup" == t ? p(o, null, S.components.popup.width, S.components.popup.height) : "new" == t ? (win = window.open(o, "_blank"), win.focus()) : location.href = o, !1
          });
        if (a) {
          var f = e(".event a", r);
          f.on("click", function(t) {
            return e(this).parents(".event").trigger("click"), t.stopPropagation(), !1
          })
        }
      }

      function h(e, t, n) {
        null !== t && 0 != Object.keys(t).length || (t = {
          lines: 2,
          ellipClass: "stubhub-ellipsis",
          responsive: !0
        }), e(S.components.content.longTextHandlingSelector, n).ellipsis(t)
      }

      function v(e) {
        var t = ["cb", "category-id", "sh-store", "visitor-id", "user-guid", "event-start-date", "event-end-date", "start", "point", "handlename", "token", "query", "performer", "performer-id", "venue-id", "location", "country", "radius", "filter", "id", "limit", "days", "sort", "sort-direction", "min-price", "max-price"],
          n = {};
        for (var r in e) - 1 !== t.indexOf(r) && ("location" == r ? n[r] = g(e.location, e.radius) : "filter" == r || "performer" == r || "watch" == r ? n[r] = C(e[r]) : n[r] = encodeURIComponent(e[r]));
        return n
      }

      function g(e, t) {
        var n = {};
        if (e)
          if (-1 !== e.indexOf(":")) n = k(e);
          else {
            var r = C(e);
            if (2 == r.length) {
              var o = r[0],
                a = r[1];
              isNaN(o) && isNaN(a) ? (n.city = o, n.state = a) : (n.latitude = o, n.longitude = a, n.radius = t || null)
            } else if (1 == r.length) {
              var o = r[0];
              isNaN(o) ? n.city = o : n.postalCode = o
            }
          }
        return Object.keys(n).length > 0 ? n : null
      }

      function m(e) {
        return e.replace(/-([a-z])/g, function(e) {
          return e[1].toUpperCase()
        })
      }

      function y(e) {
        var t = [],
          n = location.pathname,
          r = _.parse(e).exec(n);
        for (var o in r) {
          var a = r[o];
          a && (t[o] = decodeURIComponent(a))
        }
        return t
      }

      function b(e) {
        var t = [],
          n = w(e, ",", ":"),
          r = w(document.location.search.substring(1), "&", "=");
        for (var o in n) {
          var a = n[o],
            i = r[a];
          i && (t[o] = decodeURIComponent(i))
        }
        return t
      }

      function w(e, t, n) {
        for (var r = [], o = C(e, t), a = 0; a < o.length; a++) {
          var i = o[a],
            s = C(i, n),
            u = s[0],
            l = s[1];
          u && l && (r[u] = decodeURIComponent(l))
        }
        return r
      }

      function C(e, t) {
        if ("undefined" != typeof t && null != t || (t = ","), "string" == typeof e) {
          for (var n = e.split(t), r = 0; r < n.length; r++) {
            var o = n[r];
            n[r] = o.trim()
          }
          return n
        }
        return null
      }

      function k(e) {
        for (var t = {}, n = C(e, ","), r = 0; r < n.length; r++) {
          var o = C(n[r], ":"),
            a = o[0],
            i = o[1];
          t[a] = i
        }
        return t
      }

      function E(e) {
        var t = {},
          n = e && 1 == e.length ? e[0].attributes : null;
        if (n)
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              a = o.name;
            0 == a.indexOf("data-") && (t[a.substr(5)] = o.value)
          }
        return t
      }

      function T(e, t, n) {
        e.get(t, function(e) {}).done(function(e) {
          n(null, e)
        }).fail(function(e) {
          n(e)
        })
      }
      var I = e("./template-engine"),
        O = e("./formatter"),
        x = e("./query"),
        S = e("./configs/index"),
        _ = e("./route-parser"),
        R = new x,
        j = null;
      n.init = function(t, n) {
        if ("undefined" == typeof j) throw new Error("jQuery required for Stubhub Visual Components to render");
        j = t;
        var r = !1;
        e("./jquery-ellipsis")(j), e("./featherlight")(j), j.featherlight.autoBind = !1, s(S.components.selector, function() {
          "function" == typeof n && n.apply(j, arguments), r = !0
        })
      }, n.refresh = function() {
        var e = null,
          t = arguments.length,
          n = function() {};
        if (t > 0) {
          var r = arguments[t - 1];
          "string" == typeof r || "object" == typeof r ? e = r : "function" == typeof r && (n = r), 2 == t && (e = arguments[0])
        }
        e ? s(e, n) : s(S.components.selector, n)
      }, n.version = S.version
    }, {
      "./configs/index": 2,
      "./featherlight": 3,
      "./formatter": 4,
      "./jquery-ellipsis": 5,
      "./query": 7,
      "./route-parser": 8,
      "./template-engine": 9
    }],
    2: [function(e, t, n) {
      t.exports = {
        version: "0.5.22",
        externalServer: "https://api.stubhub.com",
        internalServer: "/shape",
        components: {
          selector: ".stubhub-ui-component",
          logoImage: "",
          popup: {
            width: 650,
            height: 500
          },
          content: {
            longTextHandlingSelector: ".multiline-ellipsis"
          }
        }
      }
    }, {}],
    3: [function(e, t, n) {
      t.exports = function(e) {
        "use strict";

        function t(e, n) {
          if (!(this instanceof t)) {
            var r = new t(e, n);
            return r.open(), r
          }
          this.id = t.id++, this.setup(e, n), this.chainCallbacks(t._callbackChain)
        }
        if ("undefined" == typeof e) return void("console" in window && window.console.info("Too much lightness, Featherlight needs jQuery."));
        var n = [],
          r = function(t) {
            return n = e.grep(n, function(e) {
              return e !== t && e.$instance.closest("body").length > 0
            })
          },
          o = function(e, t) {
            var n = {},
              r = new RegExp("^" + t + "([A-Z])(.*)");
            for (var o in e) {
              var a = o.match(r);
              if (a) {
                var i = (a[1] + a[2].replace(/([A-Z])/g, "-$1")).toLowerCase();
                n[i] = e[o]
              }
            }
            return n
          },
          a = {
            keyup: "onKeyUp",
            resize: "onResize"
          },
          i = function(n) {
            e.each(t.opened().reverse(), function() {
              return n.isDefaultPrevented() || !1 !== this[a[n.type]](n) ? void 0 : (n.preventDefault(), n.stopPropagation(), !1)
            })
          },
          s = function(n) {
            if (n !== t._globalHandlerInstalled) {
              t._globalHandlerInstalled = n;
              var r = e.map(a, function(e, n) {
                return n + "." + t.prototype.namespace
              }).join(" ");
              e(window)[n ? "on" : "off"](r, i)
            }
          };
        t.prototype = {
          constructor: t,
          namespace: "featherlight",
          targetAttr: "data-featherlight",
          variant: null,
          resetCss: !1,
          background: null,
          openTrigger: "click",
          closeTrigger: "click",
          filter: null,
          root: "body",
          openSpeed: 250,
          closeSpeed: 250,
          closeOnClick: "background",
          closeOnEsc: !0,
          closeIcon: "&#10005;",
          loading: "",
          persist: !1,
          otherClose: null,
          beforeOpen: e.noop,
          beforeContent: e.noop,
          beforeClose: e.noop,
          afterOpen: e.noop,
          afterContent: e.noop,
          afterClose: e.noop,
          onKeyUp: e.noop,
          onResize: e.noop,
          type: null,
          contentFilters: ["jquery", "image", "html", "ajax", "iframe", "text"],
          setup: function(t, n) {
            "object" != typeof t || t instanceof e != 0 || n || (n = t, t = void 0);
            var r = e.extend(this, n, {
                target: t
              }),
              o = r.resetCss ? r.namespace + "-reset" : r.namespace,
              a = e(r.background || ['<div class="' + o + "-loading " + o + '">', '<div class="' + o + '-content">', '<span class="' + o + "-close-icon " + r.namespace + '-close">', r.closeIcon, "</span>", '<div class="' + r.namespace + '-inner">' + r.loading + "</div>", "</div>", "</div>"].join("")),
              i = "." + r.namespace + "-close" + (r.otherClose ? "," + r.otherClose : "");
            return r.$instance = a.clone().addClass(r.variant), r.$instance.on(r.closeTrigger + "." + r.namespace, function(t) {
              var n = e(t.target);
              ("background" === r.closeOnClick && n.is("." + r.namespace) || "anywhere" === r.closeOnClick || n.closest(i).length) && (r.close(t), t.preventDefault())
            }), this
          },
          getContent: function() {
            if (this.persist !== !1 && this.$content) return this.$content;
            var t = this,
              n = this.constructor.contentFilters,
              r = function(e) {
                return t.$currentTarget && t.$currentTarget.attr(e)
              },
              o = r(t.targetAttr),
              a = t.target || o || "",
              i = n[t.type];
            if (!i && a in n && (i = n[a], a = t.target && o), a = a || r("href") || "", !i)
              for (var s in n) t[s] && (i = n[s], a = t[s]);
            if (!i) {
              var u = a;
              if (a = null, e.each(t.contentFilters, function() {
                  return i = n[this], i.test && (a = i.test(u)), !a && i.regex && u.match && u.match(i.regex) && (a = u), !a
                }), !a) return "console" in window && window.console.error("Featherlight: no content filter found " + (u ? ' for "' + u + '"' : " (no target specified)")), !1
            }
            return i.process.call(t, a)
          },
          setContent: function(t) {
            var n = this;
            return (t.is("iframe") || e("iframe", t).length > 0) && n.$instance.addClass(n.namespace + "-iframe"), n.$instance.removeClass(n.namespace + "-loading"), n.$instance.find("." + n.namespace + "-inner").not(t).slice(1).remove().end().replaceWith(e.contains(n.$instance[0], t[0]) ? "" : t), n.$content = t.addClass(n.namespace + "-inner"), n
          },
          open: function(t) {
            var r = this;
            if (r.$instance.hide().appendTo(r.root), !(t && t.isDefaultPrevented() || r.beforeOpen(t) === !1)) {
              t && t.preventDefault();
              var o = r.getContent();
              if (o) return n.push(r), s(!0), r.$instance.fadeIn(r.openSpeed), r.beforeContent(t), e.when(o).always(function(e) {
                r.setContent(e), r.afterContent(t)
              }).then(r.$instance.promise()).done(function() {
                r.afterOpen(t)
              })
            }
            return r.$instance.detach(), e.Deferred().reject().promise()
          },
          close: function(t) {
            var n = this,
              o = e.Deferred();
            return n.beforeClose(t) === !1 ? o.reject() : (0 === r(n).length && s(!1), n.$instance.fadeOut(n.closeSpeed, function() {
              n.$instance.detach(), n.afterClose(t), o.resolve()
            })), o.promise()
          },
          resize: function(e, t) {
            if (e && t) {
              this.$content.css("width", "").css("height", "");
              var n = Math.max(e / (parseInt(this.$content.parent().css("width"), 10) - 1), t / (parseInt(this.$content.parent().css("height"), 10) - 1));
              n > 1 && (n = t / Math.floor(t / n), this.$content.css("width", "" + e / n + "px").css("height", "" + t / n + "px"))
            }
          },
          chainCallbacks: function(t) {
            for (var n in t) this[n] = e.proxy(t[n], this, e.proxy(this[n], this))
          }
        }, e.extend(t, {
          id: 0,
          autoBind: "[data-featherlight]",
          defaults: t.prototype,
          contentFilters: {
            jquery: {
              regex: /^[#.]\w/,
              test: function(t) {
                return t instanceof e && t
              },
              process: function(t) {
                return this.persist !== !1 ? e(t) : e(t).clone(!0)
              }
            },
            image: {
              regex: /\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,
              process: function(t) {
                var n = this,
                  r = e.Deferred(),
                  o = new Image,
                  a = e('<img src="' + t + '" alt="" class="' + n.namespace + '-image" />');
                return o.onload = function() {
                  a.naturalWidth = o.width, a.naturalHeight = o.height, r.resolve(a)
                }, o.onerror = function() {
                  r.reject(a)
                }, o.src = t, r.promise()
              }
            },
            html: {
              regex: /^\s*<[\w!][^<]*>/,
              process: function(t) {
                return e(t)
              }
            },
            ajax: {
              regex: /./,
              process: function(t) {
                var n = e.Deferred(),
                  r = e("<div></div>").load(t, function(e, t) {
                    "error" !== t && n.resolve(r.contents()), n.fail()
                  });
                return n.promise()
              }
            },
            iframe: {
              process: function(t) {
                var n = new e.Deferred,
                  r = e("<iframe/>").hide().attr("src", t).css(o(this, "iframe")).on("load", function() {
                    n.resolve(r.show())
                  }).appendTo(this.$instance.find("." + this.namespace + "-content"));
                return n.promise()
              }
            },
            text: {
              process: function(t) {
                return e("<div>", {
                  text: t
                })
              }
            }
          },
          functionAttributes: ["beforeOpen", "afterOpen", "beforeContent", "afterContent", "beforeClose", "afterClose"],
          readElementConfig: function(t, n) {
            var r = this,
              o = new RegExp("^data-" + n + "-(.*)"),
              a = {};
            return t && t.attributes && e.each(t.attributes, function() {
              var t = this.name.match(o);
              if (t) {
                var n = this.value,
                  i = e.camelCase(t[1]);
                if (e.inArray(i, r.functionAttributes) >= 0) n = new Function(n);
                else try {
                  n = e.parseJSON(n)
                } catch (s) {}
                a[i] = n
              }
            }), a
          },
          extend: function(t, n) {
            var r = function() {
              this.constructor = t
            };
            return r.prototype = this.prototype, t.prototype = new r, t.__super__ = this.prototype, e.extend(t, this, n), t.defaults = t.prototype, t
          },
          attach: function(t, n, r) {
            var o = this;
            "object" != typeof n || n instanceof e != 0 || r || (r = n, n = void 0), r = e.extend({}, r);
            var a, i = r.namespace || o.defaults.namespace,
              s = e.extend({}, o.defaults, o.readElementConfig(t[0], i), r);
            return t.on(s.openTrigger + "." + s.namespace, s.filter, function(i) {
              var u = e.extend({
                  $source: t,
                  $currentTarget: e(this)
                }, o.readElementConfig(t[0], s.namespace), o.readElementConfig(this, s.namespace), r),
                l = a || e(this).data("featherlight-persisted") || new o(n, u);
              "shared" === l.persist ? a = l : l.persist !== !1 && e(this).data("featherlight-persisted", l), u.$currentTarget.blur(), l.open(i)
            }), t
          },
          current: function() {
            var e = this.opened();
            return e[e.length - 1] || null
          },
          opened: function() {
            var t = this;
            return r(), e.grep(n, function(e) {
              return e instanceof t
            })
          },
          close: function(e) {
            var t = this.current();
            return t ? t.close(e) : void 0
          },
          _onReady: function() {
            var t = this;
            t.autoBind && (e(t.autoBind).each(function() {
              t.attach(e(this))
            }), e(document).on("click", t.autoBind, function(n) {
              n.isDefaultPrevented() || "featherlight" === n.namespace || (n.preventDefault(), t.attach(e(n.currentTarget)), e(n.target).trigger("click.featherlight"))
            }))
          },
          _callbackChain: {
            onKeyUp: function(t, n) {
              return 27 === n.keyCode ? (this.closeOnEsc && e.featherlight.close(n), !1) : t(n)
            },
            onResize: function(e, t) {
              return this.resize(this.$content.naturalWidth, this.$content.naturalHeight), e(t)
            },
            afterContent: function(e, t) {
              var n = e(t);
              return this.onResize(t), n
            }
          }
        }), e.featherlight = t, e.fn.featherlight = function(e, n) {
          return t.attach(this, e, n)
        }, e(document).ready(function() {
          t._onReady()
        })
      }
    }, {}],
    4: [function(e, t, n) {
      t.exports = {
        number: function(e, t) {
          if ("undefined" != typeof e) {
            t && NaN != t && t >= 0 && (e = parseFloat(e + "").toFixed(t));
            for (var n = (e + "").split("."), r = n[0], o = n.length > 1 ? "." + n[1] : "", a = /(\d+)(\d{3})/; a.test(r);) r = r.replace(a, "$1,$2");
            return r + o
          }
          return e
        },
        date: function(e, t, n) {
          var r = new Date(e);
          if (n = n === !0, "undefined" == typeof t || "localedatetime" === t) return r.toLocaleString();
          if ("localedate" === t) return r.toLocaleDateString();
          if ("localetime" === t) return r.toLocaleTimeString();
          if ("date" === t) return r.toDateString();
          if ("time" === t) return r.toTimeString();
          var o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            i = {
              pad: function(e, t, n) {
                for (; e.length < n;) e = t + e;
                return e
              }
            },
            s = {
              YYYY: function(e) {
                return n ? e.getUTCFullYear() : e.getFullYear()
              },
              YY: function(e) {
                return (n ? e.getUTCFullYear() : e.getFullYear()).toFixed().substring(2)
              },
              MMMM: function(e) {
                return o[n ? e.getUTCMonth() : e.getMonth()]
              },
              MMM: function(e) {
                return o[n ? e.getUTCMonth() : e.getMonth()].substring(0, 3)
              },
              MM: function(e) {
                return i.pad(((n ? e.getUTCMonth() : e.getMonth()) + 1).toFixed(), "0", 2)
              },
              M: function(e) {
                return (n ? e.getUTCMonth() : e.getMonth()) + 1
              },
              DD: function(e) {
                return i.pad((n ? e.getUTCDate() : e.getDate()).toFixed(), "0", 2)
              },
              D: function(e) {
                return n ? e.getUTCDate() : e.getDate()
              },
              EEEE: function(e) {
                return a[n ? e.getUTCDay() : e.getDay()]
              },
              EEE: function(e) {
                return a[n ? e.getUTCDay() : e.getDay()].substring(0, 3)
              },
              E: function(e) {
                return n ? e.getUTCDay() : e.getDay()
              },
              HH: function(e) {
                return i.pad((n ? e.getUTCHours() : e.getHours()).toFixed(), "0", 2)
              },
              H: function(e) {
                return n ? e.getUTCHours() : e.getHours()
              },
              h: function(e) {
                var t = n ? e.getUTCHours() : e.getHours();
                return 13 > t ? 0 === t ? 12 : t : t - 12
              },
              mm: function(e) {
                return i.pad((n ? e.getUTCMinutes() : e.getMinutes()).toFixed(), "0", 2)
              },
              m: function(e) {
                return n ? e.getUTCMinutes() : e.getMinutes()
              },
              ss: function(e) {
                return i.pad((n ? e.getUTCSeconds() : e.getSeconds()).toFixed(), "0", 2)
              },
              s: function(e) {
                return n ? e.getUTCSeconds() : e.getSeconds()
              },
              SSS: function(e) {
                return i.pad((n ? e.getUTCMilliseconds() : e.getMilliseconds()).toFixed(), "0", 3)
              },
              S: function(e) {
                return n ? e.getUTCMilliseconds() : e.getMilliseconds()
              },
              a: function(e) {
                return (n ? e.getUTCHours() : e.getHours()) < 12 ? "am" : "pm"
              }
            };
          return t = t.replace(/[']+/g, ""), t = t.replace(/(\\)?(Y{2,4}|M{1,4}|D{1,2}|E{1,4}|H{1,2}|h|m{1,2}|s{1,2}|S{1,3}|a)/g, function(e, t, n) {
            return !t && s.hasOwnProperty(n) ? s[n](r) : n
          })
        }
      }
    }, {}],
    5: [function(e, t, n) {
      t.exports = function(e) {
        "use strict";

        function t(t, a) {
          function i() {
            y.text = y.$cont.text(), y.opts.ellipLineClass = y.opts.ellipClass + "-line", y.$el = e('<span class="' + y.opts.ellipClass + '" />'), y.$el.text(y.text), y.$cont.empty().append(y.$el), s()
          }

          function s() {
            return "number" == typeof y.opts.lines && y.opts.lines < 2 ? void y.$el.addClass(y.opts.ellipLineClass) : (v = y.$cont.height(), void("auto" === y.opts.lines && y.$el.prop("scrollHeight") <= v || c && (g = e.trim(l(y.text)).split(/\s+/), y.$el.html(r + g.join("</span> " + r) + "</span>"), y.$el.find("span").each(c), null != d && u(d))))
          }

          function u(e) {
            g[e] = '<span class="' + y.opts.ellipLineClass + '">' + g[e], g.push("</span>"), y.$el.html(g.join(" "))
          }

          function l(e) {
            return String(e).replace(/[&<>"'\/]/g, function(e) {
              return m[e]
            })
          }
          var c, d, p, f, h, v, g, m, y = this,
            b = 0,
            w = [];
          if (m = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#x27;",
              "`": "&#x60;"
            }, y.$cont = e(t), y.opts = e.extend({}, o, a), "auto" === y.opts.lines) {
            var C = function(t, n) {
              var r = e(n),
                o = r.position().top;
              return h = h || r.height(), o === f ? w[b].push(r) : (f = o, b += 1, w[b] = [r]), o + h > v ? (d = t - w[b - 1].length, !1) : void 0
            };
            c = C
          }
          if ("number" == typeof y.opts.lines && y.opts.lines > 1) {
            var k = function(t, n) {
              var r = e(n),
                o = r.position().top;
              return o !== f && (f = o, b += 1), b === y.opts.lines ? (d = t, !1) : void 0
            };
            c = k
          }
          if (y.opts.responsive) {
            var E = function() {
              w = [], b = 0, f = null, d = null, y.$el.html(l(y.text)), clearTimeout(p), p = setTimeout(s, 100)
            };
            e(window).on("resize." + n, E)
          }
          i()
        }
        var n = "ellipsis",
          r = '<span style="white-space: nowrap;">',
          o = {
            lines: "auto",
            ellipClass: "ellip",
            responsive: !1
          };
        e.fn[n] = function(r) {
          return this.each(function() {
            try {
              e(this).data(n, new t(this, r))
            } catch (o) {
              window.console && console.error(n + ": " + o)
            }
          })
        }
      }
    }, {}],
    6: [function(e, t, n) {
      function r(e) {
        a = e
      }
      var o = e("./component"),
        a = null;
      if ("function" == typeof requirejs) {
        var i = e("jquery");
        r(i)
      } else "undefined" == typeof a && "undefined" == typeof $ || r("undefined" != typeof JQuery ? a : $);
      t.exports = {
        version: o.version,
        init: function() {
          o.init(a)
        },
        refresh: o.refresh
      }
    }, {
      "./component": 1,
      jquery: void 0
    }],
    7: [function(e, t, n) {
      function r(e) {
        var t = e.match(/[^T]*/)[0].split("-"),
          n = e.match(/T[^Zz\-\+]*/)[0].substr(1).split(":"),
          r = new Date(t[0], t[1] - 1, t[2], n[0], n[1], n[2]);
        return r
      }

      function o(e) {
        var t = null,
          n = null;
        s() ? (t = l.internalServer, n = void 0) : (t = l.externalServer, n = e), u.initialize({
          server: t,
          token: n
        })
      }

      function a(e, t) {
        var n = new Date(e.valueOf());
        return n.setDate(n.getDate() + t), n
      }

      function i() {
        var e = document.domain;
        return e.substring(e.indexOf(".") + 1).toLowerCase()
      }

      function s() {
        var e = i(),
          t = ["stubhub.com", "stubhub.co.uk", "stubhub.de", "stubhub.fr", "stubhub.mx", "stubhub.pt"];
        return -1 !== t.indexOf(e) || /^slc(e|q)[0-9]+.(com|co.uk|de|fr|mx|pt)/.test(e)
      }
      var u = e("./../../tmp/@stubhub/partner-api/lib/index.js"),
        l = e("./configs/index");
      t.exports = function() {
        this.getLocation = function(e, t) {
          o(e.token);
          var n = (u.Query, {
            _format: "json",
            _: Date.now()
          });
          e.point ? n.point = e.point : e.location && e.location.latitude && e.location.longitude ? n.point = e.location.latitude + "," + e.location.longitude : n.ipDetect = !0, u.LocationQuery.find(n, function(e, n, r) {
            if (e) return t(e);
            var o = n && n.locations && n.locations.length > 0 ? n.locations[0] : null;
            return t(null, {
              location: o
            })
          })
        }, this.eventQuery = function(e, t) {
          o(e.token);
          var n = u.Query,
            i = n.eventQuery();
          if (e.cb && i.equalTo("ts", Date.now()), e.query && i.equalTo("q", e.query), i.equalTo("lang", !0), e.filter)
            for (var s = e.filter, l = 0; l < s.length; l++) {
              var c = s[l];
              if ("undefined" != typeof u.QueryParams[c]) {
                var c = u.QueryParams[c];
                c.setTo(i)
              } else if (-1 !== c.indexOf(":")) {
                var d = c.split(":"),
                  p = d[0].trim(),
                  f = d[1].trim();
                i.query[p] = f
              }
            }
          if (i.select(e.fields || "id,name,venue,eventUrl,eventDateLocal,eventDateUTC,performersCollection,imageUrl,ticketInfo"), e.id && i.equalTo("id", e.id), e.performer && i.equalTo("performerName", e.performer), e.limit && isNaN(e.limit) === !1) {
            var h = Number(e.limit);
            i.limit(h)
          }
          if (e.days)
            if (isNaN(e.days) === !1) {
              var v = Number(e.days),
                g = new Date,
                m = a(g, v);
              i.dateRange(g, m)
            } else {
              var y = decodedDays(e.days),
                b = y[0],
                m = y[0];
              b && m && i.dateRange(b, m)
            }
          if (e["min-price"]) {
            var w = Number(e["min-price"]) || null;
            w && i.equalTo("minPrice", w)
          }
          if (e["max-price"]) {
            var C = Number(e["max-price"]) || null;
            C && i.equalTo("maxPrice", C)
          }
          var k = e["venue-id"];
          if (k) i.equalTo("venueId", k);
          else {
            var E = !1,
              T = 25;
            if (e.location) {
              var I = !(!e.location["use-ip"] || "off" != e.location["use-ip"]);
              I ? E = !0 : e.location.city || e.location.state || e.location.postalCode || e.location.country ? (i.locateAt(e.location), E = !0) : e.location.longitude && e.location.latitude && (i.withInMiles([e.location.latitude, e.location.longitude], e.location.radius || T), E = !0)
            }
            if (E === !1) {
              var O = e.country || null;
              O && i.locateAt({
                country: O
              });
              var x = T;
              e.radius && (x = e.radius), u.QueryParams.CURRENT_LOCATION_WITHIN_MILES(x).setTo(i)
            }
          }
          if (e.sort) {
            var S = e["sort-direction"];
            S && (S = S.toLowerCase(), "asc" != S && "desc" != S && (S = void 0)), i.sort(e.sort, S)
          }
          var _ = e["performer-id"];
          _ && i.equalTo("performerId", _), i.find(function(n, o, a) {
            if (n) return t(n);
            for (var i = 0; i < o.length; i++) {
              for (var s = o[i], u = 0; u < s.images.length; u++) s.images[u].link = s.images[u].link.replace("s-l1600", "s-w500"), s.images[u].url = s.images[u].url.replace("s-l1600", "s-w500");
              s.date = r(s.localDate);
              for (var u = 0; u < s.performers.length; u++) {
                var l = s.performers[u];
                if (l.name == e.performer) {
                  s.performers = [l];
                  break
                }
              }
            }
            var c = {
              numFound: a.numFound,
              results: o
            };
            return t(null, c)
          })
        }, this.recoQuery = function(e, t) {
          o(e.token);
          var n = new u.RecoQuery;
          e.handlename && n.equalTo("handleName", e.handlename, !1), e.limit && n.equalTo("limit", e.limit, !1), e.point && n.equalTo("point", e.point, !1), e.start && n.equalTo("start", e.start, !1);
          var a = e["event-start-date"];
          a && n.equalTo("eventStartDate", decodeURIComponent(a), !1);
          var i = e["event-end-date"];
          i && n.equalTo("eventEndDate", decodeURIComponent(i), !1);
          var s = e["sh-store"];
          s && n.equalTo("shstore", decodeURIComponent(s), !1);
          var l = e["visitor-id"];
          l && n.equalTo("visitorId", decodeURIComponent(l), !1);
          var c = e["user-guid"];
          c && n.equalTo("userGuid", decodeURIComponent(c), !1);
          var d = e["category-id"];
          if (d && n.equalTo("categoryId", decodeURIComponent(d), !1), e.days) {
            var p = decodeURIComponent(e.days).split(",");
            n.equalTo("eventStartDate", p[0].trim(), !1), n.equalTo("eventEndDate", p[1].trim(), !1)
          }
          n.find(function(e, n, o) {
            if (e) return t(e);
            for (var a = 0; a < n.length; a++) {
              for (var i = n[a], s = 0; s < i.events.length; s++) {
                var u = i.events[s];
                u.date = r(u.localDate)
              }
              for (var s = 0; s < i.images.length; s++) i.images[s].link = i.images[s].link.replace("s-l1600", "s-l800"), i.images[s].url = i.images[s].url.replace("s-l1600", "s-l800");
              var l = i.link;
              l && (i.link = l.substr(l.indexOf("/")));
              for (var s = 0; s < i.events.length; s++) {
                var u = i.events[s],
                  c = u.link;
                c && (u.link = c.substr(c.indexOf("/")))
              }
            }
            var d = {
              numFound: n.length,
              results: n
            };
            return t(null, d)
          })
        }
      }
    }, {
      "./../../tmp/@stubhub/partner-api/lib/index.js": 12,
      "./configs/index": 2
    }],
    8: [function(e, t, n) {
      RouteParser = {
        _namedParam: /(:(\w+))/g,
        _splatParam: /\*/g,
        _groups: /\((.+)\)/g,
        _smash: /(\(|:\w+|\*)/g
      }, RouteParser.parse = function(e, t) {
        var n, r = [],
          o = 0,
          a = function(e) {
            return Object.prototype.toString.call(e).indexOf("RegExp") > 0
          };
        return t = t || {}, n = e, a(n) ? r = null : (r = n.match(RouteParser._smash), r = r ? r : [], r = r.map(function(e) {
          return "(" == e ? null : "*" == e ? o++ : e.substr(1)
        }), n = n.replace(/\)/g, ")?"), n = n.replace(/\?/g, "\\?"), n = n.replace(RouteParser._namedParam, function(e) {
          var n = t[e.substr(1)];
          return n ? a(n) ? (n += "", "(" + n.replace(/^\//, "").replace(/(\/\w*)$/, "") + ")") : "(" + n + ")" : "([^/]+)"
        }), n = n.replace(RouteParser._splatParam, "(.+)"), n = new RegExp("^" + n + "$")), {
          route: e,
          regex: n,
          exec: function(e) {
            var t = n.exec(e),
              o = {};
            return !!t && (t.slice(1).forEach(function(e, t) {
              r ? null !== r[t] && (o[r[t]] = void 0 === e ? null : e) : o[t] = void 0 === e ? null : e
            }), o)
          }
        }
      }, t.exports = RouteParser
    }, {}],
    9: [function(require, module, exports) {
      module.exports = {}, module.exports.defaultTemplates = {
        eventCount: function anonymous(obj) {
          var p = [];
          with(obj) {
            p.push('<div class="stubhub-component"> <div class="stubhub-event-count-component"> ');
            var gcid = "?GCID=CHOTHER-_-GEO" + (tracking[0] ? tracking[0] : "") + "-_-distVISCOMP-_-vrt" + (tracking[1] ? tracking[1] : "") + "-_-vrs1-_-type" + (tracking[2] ? tracking[2] : "") + "-_-pg" + (tracking[3] ? tracking[3] : "");
            p.push(" "), numFound > 0 ? (p.push(' <div class="stubhub-has-events stubhub-events"> '), location && location.city ? p.push(' <a target="_blank"class="stubhub-link stubhub-events-link"href="http://www.stubhub.com', gcid, "&lat_lon=", location.latitude, ",", location.longitude, '" ', data.rel ? 'rel="' + data.rel + '"' : "", '> <span class="stubhub-events-count">', format.number(numFound), '</span> <span class="stubhub-events-highlight">', location.city, '</span> events <span class="stubhub-events-available-on">available on</span> </a> ') : p.push(' <a target="_blank"class="stubhub-link stubhub-events-link"href="http://www.stubhub.com/performer/', results[0].performers[0].id, "", gcid, '" ', data.rel ? 'rel="' + data.rel + '"' : "", '> <span class="stubhub-events-count">', format.number(numFound), '</span> <span class="stubhub-events-highlight">', results[0].performers[0].name, '</span> events <span class="stubhub-events-available-on">available on</span> </a> '), p.push(' <a target="_blank"class="stubhub-link stubhub-logo-link"href="http://www.stubhub.com', gcid, '" ', data.rel ? 'rel="' + data.rel + '"' : "", '> <img width="50"class="stubhub-logo-image"src="', assets.logo, '"> </a> </div> ')) : p.push(' <div class="stubhub-no-events stubhub-events"> <a target="_blank"class="stubhub-link stubhub-events-link"href="http://www.stubhub.com', gcid, '">Find tickets on</a> <a target="_blank"class="stubhub-link stubhub-logo-link"href="http://www.stubhub.com', gcid, '" ', data.rel ? 'rel="' + data.rel + '"' : "", '> <img width="50"class="stubhub-logo-image"src="', assets.logo, '"> </a> </div> '), p.push(" </div></div>")
          }
          return p.join("")
        },
        eventFilter: function anonymous(obj) {
          var p = [];
          with(obj) {
            p.push('<div class="stubhub-component"> <div class="stubhub-event-filter-component"> <form name="stubhub-event-filter"> <fieldset> <label>Search</label> <input type="text"name="search"class="stubhub-event-filter-postal-code"placeholder="search"> </fieldset> <fieldset> <label>Location</label> <input type="text"name="location"class="stubhub-event-filter-postal-code"placeholder="location"> </fieldset> ');
            var categories = custom.categories;
            if (p.push(" "), categories && categories.length > 0) {
              p.push(' <fieldset> <label>Category</label> <select name="category"> ');
              for (var i = 0; i < categories.length; i++) p.push(' <option value="', categories[i].id, '">', categories[i].name, "</option> ");
              p.push(" </select> </fieldset> ")
            }
            p.push(' <fieldset> <label>Days</label> <input type="text"name="days"class="stubhub-event-filter-days"placeholder="days"> </fieldset> <fieldset> <button type="submit">Find Events</button> </fieldset> </form> </div></div>')
          }
          return p.join("")
        },
        eventList: function anonymous(obj) {
          var p = [];
          with(obj) {
            if (p.push('<div class="stubhub-component"> <div class="stubhub-list-event-component"> '), results.length > 0) {
              p.push(' <div class="landing-page-card"> <ul class="event-groupings-list"> ');
              for (var i = 0; i < results.length; i++) {
                p.push(" ");
                var result = results[i];
                p.push(" ");
                var url = "http://" + result.link + "?GCID=CHOTHER-_-GEO" + (tracking[0] ? tracking[0] : "") + "-_-distVISCOMP-_-vrt" + (tracking[1] ? tracking[1] : "") + "-_-vrs1-_-type" + (tracking[2] ? tracking[2] : "") + "-_-pg" + (tracking[3] ? tracking[3] : "") + "-_-pos" + (tracking[4] ? tracking[4] : "");
                p.push(' <li class="event-item"> <a class="event"href="', url, '"> <h4 class="event-heading"><span class="event-title">', result.name, '</span></h4> <div class="event-container"> <div class="event-details"> <div class="event-date-container"> <div class="event-date-box"> <div class="date-stamp-standard date-container"><span class="date-stamp-standard"><span class="date-divider-left"></span><span class="date-stamp-day"lang="en-us"> ', format.date(result.date, "EEE"), '</span><span class="date-stamp-month-dd">', format.date(result.date, "MMM D"), '</span></span> </div> </div> </div> <div class="event-details-container"> <div class="event-title-wrapper stubhub-ellipsis"><span class="event-title">', result.name, '</span></div> <div class="desc stubhub-ellipsis">', format.date(result.date, "h:mm"), ' <span class="meridiem">', format.date(result.date, "a"), '</span> - <span class="venue">', result.venue.name, "</span>, ", result.venue.city, ", ", result.venue.state, " </div> </div> </div> </div> </a> </li> ");
              }
              p.push(" </ul> </div> ")
            } else p.push(' <div class="no-events">No events found.</div> ');
            p.push(" </div></div>")
          }
          return p.join("")
        },
        landingPageCard: function anonymous(obj) {
          var p = [];
          with(obj) {
            if (p.push('<div class="stubhub-component"> <div class="stubhub-list-event-component"> '), results.length > 0) {
              p.push(' <div class="landing-page-card"> <ul class="event-groupings-list"> ');
              for (var i = 0; i < results.length; i++) {
                p.push(" ");
                var result = results[i];
                p.push(" ");
                var url = "http://" + result.link + "?GCID=CHOTHER-_-GEO" + (tracking[0] ? tracking[0] : "") + "-_-distVISCOMP-_-vrt" + (tracking[1] ? tracking[1] : "") + "-_-vrs1-_-type" + (tracking[2] ? tracking[2] : "") + "-_-pg" + (tracking[3] ? tracking[3] : "") + "-_-pos" + (tracking[4] ? tracking[4] : "");
                p.push(' <li class="event-item"> <a class="event"href="', url, '"> <h4 class="event-heading"><span class="event-title">', result.name, '</span></h4> <div class="event-container"> <div class="event-details"> <div class="event-date-container"> <div class="event-date-box"> <div class="date-stamp-standard date-container"><span class="date-stamp-standard"><span class="date-divider-left"></span><span class="date-stamp-day"lang="en-us"> ', format.date(result.date, "EEE"), '</span><span class="date-stamp-month-dd">', format.date(result.date, "MMM D"), '</span></span> </div> </div> </div> <div class="event-details-container"> <div class="event-title-wrapper stubhub-ellipsis"><span class="event-title">', result.name, '</span></div> <div class="desc stubhub-ellipsis">', format.date(result.date, "h:mm"), ' <span class="meridiem">', format.date(result.date, "a"), '</span> - <span class="venue">', result.venue.name, "</span>, ", result.venue.city, ", ", result.venue.state, " </div> </div> </div> </div> </a> </li> ")
              }
              p.push(" </ul> </div> ")
            } else p.push(' <div class="no-events">No events found.</div> ');
            p.push(" </div></div>")
          }
          return p.join("")
        },
        logo: function anonymous(obj) {
          var p = [];
          with(obj) {
            p.push('<div class="stubhub-component"> <div class="stubhub-logo-component"> ');
            var gcid = "?GCID=CHOTHER-_-GEO" + (tracking[0] ? tracking[0] : "") + "-_-distVISCOMP-_-vrt" + (tracking[1] ? tracking[1] : "") + "-_-vrs1-_-type" + (tracking[2] ? tracking[2] : "") + "-_-pg" + (tracking[3] ? tracking[3] : "");
            p.push(' <a class="stubhub-link stubhub-logo-link"href="http://www.stubhub.com', gcid, '" ', data.rel ? 'rel="' + data.rel + '"' : "", '> <img class="stubhub-logo-image"width="85"src="', assets.logo, '"> </a> </div></div>')
          }
          return p.join("")
        },
        performerCardList: function anonymous(obj) {
          var p = [];
          with(obj) p.push('<div class="stubhub-ui-component-main-container"> <div class="stubhub-ui-component-group-container"> </div> '), "false" != data["load-more"] && p.push(' <div class="stubhub-ui-component-load-more"> <a>See more events</a> </div> '), p.push("</div>");
          return p.join("")
        },
        performerCardListGroup: function anonymous(obj) {
          var p = [];
          with(obj) {
            p.push("");
            var rank = 1;
            p.push("");
            for (var i = 0; i < results.length; i++) {
              p.push(" ");
              var row = results[i];
              p.push(' <div class="stubhub-ui-component-row layout-', row.type, ' "> ');
              for (var j = 0; j < row.results.length; j++) {
                p.push(" ");
                var result = row.results[j];
                if (p.push(' <div class="performer-card"> <div class="performer"data-performer-card-rank="', rank, '"> <div class="performer-image"style="background-image: url(\'https:', result.images[0].link, '\')"> <div class="fadein"></div> <div class="performer-image-attribution">', result.images[0].credit, '</div> </div> <div class="performer-details"> <div class="performer-favorite ', "false" == data.favorites ? "hidden" : "", '"><a class="', result.isFollowed === !0 ? "on" : "", '"data-track-name="favorite-action"data-performer-id="', result.id, '"></a></div> <h3 class="performer-name">', result.name, '</h3> <div class="performer-date">', format.date(result.events[0].date, "MMM YYYY"), '</div> <div class="performer-location"> '), result.multipleVenues ? p.push(" Multiple venues ") : p.push(" ", result.events[0].venue.name, ", ", result.events[0].venue.city, ", ", result.events[0].venue.state, ", ", result.events[0].venue.country, " "), p.push(' </div> </div> <div class="triangle"></div> </div> '), result.events.length > 0) {
                  p.push(' <div class="event-list-spacer"></div> <div class="event-list-container"> <div class="event-list-box"> <h4 class="performer-name">', result.name, '</h4> <a class="event-list-close"data-performer-card-rank="', rank, '"><span>close</span></a> <ul class="event-list"> ');
                  for (var k = 0; k < result.events.length && 3 > k; k++) {
                    p.push(" ");
                    var event = result.events[k];
                    p.push(' <li class="event"> <a rel="external"class="event-grouping"data-track="true"href="', event.link, '"data-performer-card-rank="', rank, '"data-track-name="event-click"data-event-id="', event.id, '"data-event-rank="', k + 1, '"> <div class="event-date">', format.date(event.date, "EEE, MMM D, YYYY - h:mma"), '</div> <h5 class="event-title multiline-ellipsis">', event.name, '</h5> <div class="event-location multiline-ellipsis"> '), event.venue && p.push(" ", event.venue.name, ", ", event.venue.city, " ", event.venue.state, " "), p.push(" </div> </a> "), event.ticketInfo.total < 500 && p.push(' <div class="event-alert">Only ', event.ticketInfo.total, " ticket", 1 == event.ticketInfo.total ? "" : "s", " left</div> "), p.push(' <div class="see-all-events"><a rel="external"data-track="true"title="See more ', result.name, ' events"href="', result.link, '"data-track-name="see-all-events-click"data-performer-id="', result.id, '">See all events</a></div> </li> ')
                  }
                  p.push(" </ul> </div> </div> ")
                }
                p.push(" </div> "), rank++, p.push(" ")
              }
              p.push(" </div>")
            }
            p.push("")
          }
          return p.join("")
        }
      }, module.exports.functions = {
        tmpl: function(e, t) {
          var n = new Function("obj", "var p=[];with(obj){p.push('" + e.replace(/[\r\t\n]/g, "").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
          return t ? n(t) : n
        }
      }, module.exports.assets = {
        logo: "https://3-cache11.stubhubstatic.com/resources/shape/images/common-4.1.2/stubhub-logo-ticket-out-blue.svg"
      }
    }, {}],
    10: [function(e, t, n) {
      function r() {
        throw new Error("setTimeout has not been defined")
      }

      function o() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
        if (d === setTimeout) return setTimeout(e, 0);
        if ((d === r || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
        try {
          return d(e, 0)
        } catch (t) {
          try {
            return d.call(null, e, 0)
          } catch (t) {
            return d.call(this, e, 0)
          }
        }
      }

      function i(e) {
        if (p === clearTimeout) return clearTimeout(e);
        if ((p === o || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
        try {
          return p(e)
        } catch (t) {
          try {
            return p.call(null, e)
          } catch (t) {
            return p.call(this, e)
          }
        }
      }

      function s() {
        g && h && (g = !1, h.length ? v = h.concat(v) : m = -1, v.length && u())
      }

      function u() {
        if (!g) {
          var e = a(s);
          g = !0;
          for (var t = v.length; t;) {
            for (h = v, v = []; ++m < t;) h && h[m].run();
            m = -1, t = v.length
          }
          h = null, g = !1, i(e)
        }
      }

      function l(e, t) {
        this.fun = e, this.array = t
      }

      function c() {}
      var d, p, f = t.exports = {};
      ! function() {
        try {
          d = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
          d = r
        }
        try {
          p = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
          p = o
        }
      }();
      var h, v = [],
        g = !1,
        m = -1;
      f.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        v.push(new l(e, t)), 1 !== v.length || g || a(u)
      }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, f.listeners = function(e) {
        return []
      }, f.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, f.cwd = function() {
        return "/"
      }, f.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, f.umask = function() {
        return 0
      }
    }, {}],
    11: [function(e, t, n) {
      "use strict";

      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function o(e, t) {
        if (e = parseFloat(e), t = parseFloat(t), !a(e, t)) throw new Error("Invalid latitude or longitude");
        this.latitude = e, this.longitude = t
      }

      function a(e, t) {
        return !isNaN(e) && !isNaN(t) && e >= -90 && 90 >= e && t >= -180 && 180 >= t
      }
      var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        s = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        u = function() {
          function e() {
            r(this, e), this.latitude, this.longitude;
            var t = arguments.length;
            if (1 === t)
              if (arguments[0].constructor === Array) o.call(this, arguments[0][0], arguments[0][1]);
              else if ("object" == i(arguments[0])) o.call(this, arguments[0].latitude, arguments[0].longitude);
            else {
              if ("string" != typeof arguments[0]) throw new Error("Failed to initialize GeoPoint with " + arguments);
              var n = arguments[0].split(",");
              o.call(this, n[0], n[1])
            } else t >= 2 ? o.call(this, arguments[0], arguments[1]) : o.call(this, 0, 0)
          }
          return s(e, [{
            key: "toString",
            value: function() {
              return this.latitude + "," + this.longitude
            }
          }, {
            key: "toJSON",
            value: function() {
              return {
                latitude: this.latitude,
                longitude: this.longitude
              }
            }
          }]), e
        }();
      t.exports = u
    }, {}],
    12: [function(e, t, n) {
      (function(n) {
        "use strict";

        function r(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
          if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function a(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        var i, s = function() {
            function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
              }
            }
            return function(t, n, r) {
              return n && e(t.prototype, n), r && e(t, r), t
            }
          }(),
          u = e(n.env.JSON_REQUEST ? n.env.JSON_REQUEST : "./request"),
          l = !n.env.NO_GEO_CACHE,
          c = e("./geo"),
          d = e("./query"),
          p = e("./model"),
          f = function(e) {
            function t(e, n) {
              r(this, t);
              var a = o(this, Object.getPrototypeOf(t).call(this, e));
              return a._logger = n, a
            }
            return a(t, e), s(t, [{
              key: "find",
              value: function(e) {
                var n, r = this;
                n = "RecoEvent" === this.type ? "events" : "EnhancedPerformer" !== this.type ? this.type.toLowerCase() + "s" : "groups";
                var o = function() {
                  var o = {};
                  t.token && (o.Authorization = "Bearer " + t.token);
                  var a = {
                    url: t.server + r.toString(),
                    headers: o,
                    logger: r._logger,
                    json: !0
                  };
                  t.proxy && (a.proxy = t.proxy), u(a, function(t, o) {
                    if (t) return e(t);
                    var a = o[n],
                      i = [];
                    a && a.constructor === Array && (i = a.map(function(e) {
                      return new r.clazz(e)
                    })), e(t, i, o)
                  })
                };
                "current" === this.query.point ? y.get(r._logger, function(e, t) {
                  t ? r.withInMiles(t, parseInt(r.query.radius, 10)) : delete r.query.point, o()
                }) : o()
              }
            }, {
              key: "getCurrentGeo",
              value: function(e) {
                y.get(this._logger, e)
              }
            }], [{
              key: "eventQuery",
              value: function(e) {
                var n = new t("Event"),
                  r = [];
                return 1 === arguments.length ? e.constructor === Array ? r = e.filter(function(e) {
                  return e instanceof m
                }) : e instanceof m && r.push(e) : r = Array.prototype.filter.call(arguments, function(e) {
                  return e instanceof m
                }), r.forEach(function(e) {
                  return e.setTo(n)
                }), n
              }
            }]), t
          }(d),
          h = function(e) {
            function t(e) {
              return r(this, t), o(this, Object.getPrototypeOf(t).call(this, "EnhancedPerformer", e))
            }
            return a(t, e), t
          }(f),
          v = function(e) {
            function t(e) {
              return r(this, t), o(this, Object.getPrototypeOf(t).call(this, "RecoEvent", e))
            }
            return a(t, e), t
          }(f),
          g = function() {
            function e() {
              r(this, e)
            }
            return s(e, null, [{
              key: "find",
              value: function(e, t) {
                var n = {};
                f.token && (n.Authorization = "Bearer " + f.token);
                var r = e.logger;
                delete e.logger;
                var o = [];
                for (var a in e) o.push(a + "=" + e[a]);
                var i = {
                  url: f.server + "search/locations/v3/?" + o.join("&"),
                  headers: n,
                  json: !0,
                  logger: r
                };
                f.proxy && (i.proxy = f.proxy), u(i, t)
              }
            }]), e
          }(),
          m = function() {
            function e(t) {
              r(this, e), this.settings = t
            }
            return s(e, [{
              key: "setTo",
              value: function(e) {
                if (e instanceof f)
                  for (var t in this.settings) e.query[t] = this.settings[t]
              }
            }]), e
          }(),
          y = function() {
            function e() {
              r(this, e)
            }
            return s(e, null, [{
              key: "get",
              value: function(e, t) {
                return i && l ? t(null, i) : void g.find({
                  ipDetect: !0,
                  _format: "json",
                  _: Date.now(),
                  logger: e
                }, function(e, n) {
                  if (e) t(e);
                  else {
                    var r = n && n.locations,
                      o = r && r.length > 0 && r[0];
                    o.latitude && o.longitude ? (i = new c(o.latitude, o.longitude), t(null, i)) : t()
                  }
                })
              }
            }]), e
          }();
        t.exports = {
          GeoPoint: c,
          Event: p.Event,
          Performer: p.Performer,
          EnhancedPerformer: p.EnhancedPerformer,
          Venue: p.Venue,
          Query: f,
          LocationQuery: g,
          RecoQuery: h,
          EventRecoQuery: v,
          initialize: function(e) {
            var t = e.server,
              n = void 0 === t ? "https://api.stubhub.com" : t,
              r = e.token,
              o = e.proxy;
            f.token = r, f.server = n.replace(/\/$/, "") + "/", f.proxy = o
          },
          QueryParams: {
            SPORTS: new m({
              categoryId: 28
            }),
            BASKETBALL: new m({
              categoryId: 30
            }),
            NBA: new m({
              groupingId: 115
            }),
            WNBA: new m({
              groupingId: 116
            }),
            NCAA_BASKETBALL: new m({
              groupingId: 333
            }),
            NCAA_WOMEN_BASKETBALL: new m({
              groupingId: 10307
            }),
            NCAA_TOURNAMENT: new m({
              groupingId: 10993
            }),
            BASEBALL: new m({
              categoryId: 29
            }),
            MLB: new m({
              groupingId: 81
            }),
            NCAA_BASEBALL: new m({
              groupingId: 8148
            }),
            FIGHT: new m({
              categoryId: 7368
            }),
            UFC: new m({
              groupingId: 10207
            }),
            BOXING: new m({
              groupingId: 10949
            }),
            FOOTBALL: new m({
              categoryId: 31
            }),
            NFL: new m({
              groupingId: 121
            }),
            NCAA_FOOTBALL: new m({
              groupingId: 122
            }),
            HOCKEY: new m({
              categoryId: 32
            }),
            NHL: new m({
              groupingId: 144
            }),
            NCAA_HOCKEY: new m({
              groupingId: 3705
            }),
            SOCCER: new m({
              categoryId: 114
            }),
            MLS: new m({
              groupingId: 142
            }),
            NCAA_SOCCER: new m({
              groupingId: 385990
            }),
            WRESTLING: new m({
              categoryId: 113
            }),
            NCAA_WRESTLING: new m({
              groupingId: 7788
            }),
            CONCERTS: new m({
              categoryId: 1
            }),
            MUSIC_FESTIVAL: new m({
              categoryId: 490277
            }),
            ROCK_POP_HIPHOP: new m({
              categoryId: 441193
            }),
            JAZZ_BLUES_RNB: new m({
              categoryId: 441194
            }),
            COUNTRY_FOLK: new m({
              categoryId: 195487
            }),
            DANCE_ELECTRONICA: new m({
              categoryId: 195489
            }),
            VOCAL_PERFORMANCE: new m({
              categoryId: 229502
            }),
            RAP_HIPHOP: new m({
              categoryId: 195739
            }),
            BLUES: new m({
              categoryId: 209986
            }),
            RNB_SOUL: new m({
              categoryId: 195742
            }),
            JAZZ: new m({
              categoryId: 195737
            }),
            CLASSICAL_VOCAL: new m({
              categoryId: 178738
            }),
            POP: new m({
              categoryId: 195743
            }),
            REGGAE: new m({
              categoryId: 209739
            }),
            LATIN: new m({
              categoryId: 195486
            }),
            NEWAGE_SPIRITUAL: new m({
              categoryId: 195738
            }),
            ALTERNATIVE: new m({
              categoryId: 178737
            }),
            HARD_ROCK_METAL: new m({
              categoryId: 195736
            }),
            ROCK: new m({
              categoryId: 209736
            }),
            WORLD_NEWAGE: new m({
              categoryId: 195744
            }),
            THEATER_COMEDY: new m({
              categoryId: 174
            }),
            DANCE_BALLET: new m({
              categoryId: 176
            }),
            CLASSIC_MUSIC_OPERA: new m({
              categoryId: 178
            }),
            COMEDY: new m({
              categoryId: 209
            }),
            SORT_BY_DATE: new m({
              sort: "eventDateLocal asc"
            }),
            SORT_BY_POPULARITY: new m({
              sort: "popularity desc,eventDateLocal asc"
            }),
            HAS_TICKET: new m({
              minAvailableTickets: 1
            }),
            INCLUDE_PARKING: new m({
              parking: !0
            }),
            CURRENT_LOCATION: new m({
              point: "current",
              radius: 25
            }),
            CURRENT_LOCATION_WITHIN_MILES: function(e) {
              return new m({
                point: "current",
                radius: parseFloat(e, 10)
              })
            }
          }
        }
      }).call(this, e("_process"))
    }, {
      "./geo": 11,
      "./model": 13,
      "./query": 14,
      "./request": 15,
      _process: 10
    }],
    13: [function(e, t, n) {
      "use strict";

      function r(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }

      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function i(e) {
        var t = e.ticketInfo && e.ticketInfo.currencyCode,
          n = e.bobId,
          r = 0;
        if (3 === n || "EUR" === t) r = 2;
        else if (2 === n || "GBP" === t) r = 1;
        else {
          if (1 !== n && "USD" !== t) return s(e.venue);
          r = 0
        }
        return b[r]
      }

      function s(e) {
        var t = e && e.country,
          n = 0;
        switch (t) {
          case "FR":
            n = 3;
            break;
          case "DE":
            n = 2;
            break;
          case "GB":
          case "IE":
          case "AU":
          case "ES":
          case "NL":
          case "BE":
          case "CH":
          case "IT":
          case "SE":
            n = 1;
            break;
          case "US":
          case "CA":
            n = 0
        }
        return b[n]
      }

      function u(e, t) {
        return t ? e + "/" + t.replace(/^\//, "") : t
      }
      var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
        },
        c = function w(e) {
          var t = e.id,
            n = e.name,
            r = e.webURI,
            o = e.type;
          a(this, w), this.id = t, this.name = n, this.type = o, this.link = r
        },
        d = function(e) {
          function t(e) {
            var n = e.eventId,
              o = e.minPrice,
              i = e.maxPrice,
              s = e.totalTickets,
              u = e.currencyCode;
            a(this, t);
            var l = r(this, Object.getPrototypeOf(t).call(this));
            return l.eventId = n, l.min = o, l.max = i, l.total = s, l.currency = u, l
          }
          return o(t, e), t
        }(Object),
        p = function(e) {
          function t(e) {
            var n = e.url,
              o = e.height,
              i = e.width,
              s = e.source,
              u = e.credit;
            a(this, t);
            var l = r(this, Object.getPrototypeOf(t).call(this));
            return l.url = n, l.link = n.replace(/^http(s)?:/, ""), l.height = o, l.width = i, l.source = s, l.credit = u, l
          }
          return o(t, e), t
        }(Object),
        f = e("./geo"),
        h = function(e) {
          function t(e) {
            var n = e.id,
              o = e.name,
              i = e.latitude,
              c = e.longitude,
              d = e.timezone,
              p = e.address1,
              h = e.city,
              v = e.state,
              g = e.postalCode,
              m = e.country,
              y = e.webURI,
              b = e.address;
            a(this, t);
            var w = s({
              country: m
            });
            y = u(w, y);
            var C = r(this, Object.getPrototypeOf(t).call(this, {
              id: n,
              webURI: y,
              name: o,
              type: "Venue"
            }));
            return C.latitude = i, C.longitude = c, C.geo = void 0, C.latitude && C.longitude && (C.geo = new f(i, c)), C.timezone = d, C.address = p, C.city = h, C.state = v, C.postalCode = g, C.country = m, "object" == ("undefined" == typeof b ? "undefined" : l(b)) && (C.address = b.address1, C.city = b.city, C.state = b.state, C.postalCode = b.postalCode, C.country = b.country), C
          }
          return o(t, e), t
        }(c),
        v = function(e) {
          function t(e) {
            var n = e.id,
              o = e.name,
              i = e.webURI,
              s = e.type,
              l = void 0 === s ? "Performer" : s;
            return a(this, t), i = u(b[0], i), r(this, Object.getPrototypeOf(t).call(this, {
              id: n,
              name: o,
              type: l,
              webURI: i
            }))
          }
          return o(t, e), t
        }(c),
        g = function(e) {
          function t(e) {
            var n = e.id,
              o = e.name,
              i = e.webURI,
              s = e.count,
              u = e.events,
              l = void 0 === u ? [] : u,
              c = e.images,
              d = void 0 === c ? [] : c,
              f = e.isFollowed;
            a(this, t);
            var h = r(this, Object.getPrototypeOf(t).call(this, {
              id: n,
              name: o,
              type: "EnhancedPerformer",
              webURI: i
            }));
            return s = parseInt(s, 10) || 0, h.count = s, h.events, h.images, h.isFollowed = f || !1, l.constructor === Array ? h.events = l.map(function(e) {
              return new m(e)
            }) : h.events = [], d.constructor === Array ? h.images = d.map(function(e) {
              return new p(e)
            }) : h.images = [], h
          }
          return o(t, e), t
        }(v),
        m = function(e) {
          function t(e) {
            var n = e.id,
              o = e.name,
              s = e.eventDateLocal,
              l = e.eventDateUTC,
              c = e.dateLocal,
              f = e.dateUTC,
              g = e.venue,
              m = e.webURI,
              y = e.ticketInfo,
              b = e.performersCollection,
              w = void 0 === b ? [] : b,
              C = e.images,
              k = void 0 === C ? [] : C,
              E = e.distance,
              T = e.bobId;
            a(this, t);
            var I = i({
              ticketInfo: y,
              venue: g,
              bobId: T
            });
            m = u(I, m);
            var O = r(this, Object.getPrototypeOf(t).call(this, {
              id: n,
              name: o,
              webURI: m,
              type: "Event"
            }));
            g && (O.venue = new h(g)), O.performers = w.map(function(e) {
              return new v(e)
            }), y && (y.eventId = n, O.ticketInfo = new d(y)), O.images = k.map(function(e) {
              return new p(e)
            }), O.distance = E, O.date;
            var x = l || f;
            return x && (O.date = new Date(x.replace("0000", "00:00"))), O.localDate = s || c, O
          }
          return o(t, e), t
        }(c),
        y = function(e) {
          function t(e) {
            return a(this, t), e.webURI = e.eventUrl, e.venue && (e.venue.webURI = e.venue.venueUrl), e.performersCollection && e.performersCollection.length && e.performersCollection.forEach(function(e) {
              e.webURI = e.url
            }), r(this, Object.getPrototypeOf(t).call(this, e))
          }
          return o(t, e), t
        }(m);
      n.Event = m, n.RecoEvent = y, n.Performer = v, n.EnhancedPerformer = g, n.Venue = h;
      var b = ["www.stubhub.com", "www.stubhub.co.uk", "www.stubhub.de", "www.stubhub.fr"]
    }, {
      "./geo": 11
    }],
    14: [function(e, t, n) {
      "use strict";

      function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function o(e) {
        var t = [];
        for (var n in e) t.push(n + "=" + e[n]);
        return t.join("&")
      }

      function a(e) {
        if (e.constructor === Date) {
          var t = e.getUTCFullYear(),
            n = l(e.getUTCMonth() + 1),
            r = l(e.getUTCDate()),
            o = l(e.getUTCHours()),
            a = l(e.getUTCMinutes());
          return t + "-" + n + "-" + r + "T" + o + ":" + a
        }
        if ("string" == typeof e) {
          if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(e)) return e;
          if (/^\d{4}-\d{2}-\d{2}$/.test(e)) return e + "T00:00"
        }
        throw new Error("Invalid Date format, use Date object or yyyy-MM-ddTHH:mm")
      }

      function i(e) {
        if (e.constructor === Date) {
          var t = e.getFullYear(),
            n = l(e.getMonth() + 1),
            r = l(e.getDate()),
            o = l(e.getHours()),
            a = l(e.getMinutes());
          return t + "-" + n + "-" + r + "T" + o + ":" + a
        }
        if ("string" == typeof e) {
          if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(e)) return e;
          if (/^\d{4}-\d{2}-\d{2}$/.test(e)) return e + "T00:00"
        }
        throw new Error("Invalid Date format, use Date object or yyyy-MM-ddTHH:mm")
      }

      function s(e) {
        if (e.constructor === Date) {
          var t = e.getUTCFullYear(),
            n = l(e.getUTCMonth() + 1),
            r = l(e.getUTCDate());
          return t + "-" + n + "-" + r
        }
        if ("string" == typeof e && /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(e)) return e;
        throw new Error("Invalid Date format, use Date object or yyyy-MM-dd")
      }

      function u(e) {
        if (e.constructor === Date) {
          var t = e.getFullYear(),
            n = l(e.getMonth() + 1),
            r = l(e.getDate());
          return t + "-" + n + "-" + r
        }
        if ("string" == typeof e && /\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?/.test(e)) return e;
        throw new Error("Invalid Date format, use Date object or yyyy-MM-dd")
      }

      function l(e) {
        return e > 0 && 10 > e ? "0" + e : e
      }

      function c(e) {
        return "RecoEvent" === e ? "recommendations/core/v2/events" : "EnhancedPerformer" !== e ? "search/catalog/" + e.toLowerCase() + "s/v3" : "recommendations/core/v2/eventgroupings"
      }
      var d = function() {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
          }
          return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
          }
        }(),
        p = e("./model"),
        f = e("./geo"),
        h = {
          Event: ["popularity", "name", "eventDateLocal", "distance"],
          Venue: ["name", "distance"],
          Performer: ["name"]
        },
        v = function() {
          function e(t) {
            if (r(this, e), !t) throw new Error("Missing type information for the query");
            if ("string" != typeof t || !p[t]) throw new Error("Only Event|Venue|Performer is allowed as the type of query");
            this.type = t, this.clazz = p[t], "RecoEvent" === t ? this.query = {
              handleName: "default",
              minAvailableTickets: 1
            } : "EnhancedPerformer" !== t ? this.query = {
              sourceId: 1,
              ir: !0,
              units: "mi",
              parking: "false",
              start: 0,
              rows: 10
            } : this.query = {
              handleName: "default",
              minAvailableTickets: 1,
              maxEventsPerPerformer: 3
            }
          }
          return d(e, [{
            key: "select",
            value: function(e) {
              return this.query.fieldList = e, this
            }
          }, {
            key: "limit",
            value: function(e) {
              return "RecoEvent" === this.type ? this.query.limit = e : "EnhancedPerformer" !== this.type ? this.query.rows = e : this.query.limit = e, this
            }
          }, {
            key: "offset",
            value: function(e) {
              return "RecoEvent" === this.type ? this : ("EnhancedPerformer" !== this.type ? this.query.start = e : this.query.startIndex = e, this)
            }
          }, {
            key: "withInMiles",
            value: function(e) {
              var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
              return /event|venue|EnhancedPerformer/i.test(this.type) && (this.query.point = new f(e), this.query.radius = t), this
            }
          }, {
            key: "locateAt",
            value: function(e) {
              var t = e.city,
                n = e.state,
                r = e.country,
                o = e.postalCode;
              return "RecoEvent" === this.type ? this : (/event|venue/i.test(this.type) && (t && (this.query.city = t), n && (this.query.state = n), r && (this.query.country = r), o && (this.query.postalCode = o)), this)
            }
          }, {
            key: "equalTo",
            value: function(e, t) {
              var n = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
              return void 0 !== t && null !== t && "" !== t && (t.constructor === Array && (t = t.join('" |"')), "number" == typeof t || "boolean" == typeof t ? this.query[e] = t : n === !0 ? this.query[e] = '"' + t + '"' : this.query[e] = "" + t), this
            }
          }, {
            key: "contains",
            value: function(e, t) {
              return t && (t.constructor === Array && (t = t.join(" |")), this.query[e] = "" + t), this
            }
          }, {
            key: "notContains",
            value: function(e, t) {
              return t && (this.query[e] = "-" + t), this
            }
          }, {
            key: "notEqualTo",
            value: function(e, t) {
              return "boolean" == typeof t ? this.equalTo(e, !t) : (t && (this.query[e] = '-"' + t + '"'), this)
            }
          }, {
            key: "date",
            value: function(e) {
              return "Event" === this.type && e ? this.query.date = s(e) : "EnhancedPerformer" === this.type && e && (this.query.startDate = a(e)), this
            }
          }, {
            key: "dateRange",
            value: function(e, t) {
              if ("Event" === this.type) {
                if (!e || !t) throw new Error("Missing arguments");
                this.query.date = s(e) + " TO " + s(t)
              } else if ("EnhancedPerformer" === this.type || "RecoEvent" === this.type) {
                if (!e || !t) throw new Error("Missing arguments");
                this.query.startDate = a(e), this.query.endDate = a(t)
              }
              return this
            }
          }, {
            key: "localDate",
            value: function(e) {
              return e && ("Event" === this.type ? this.query.dateLocal = u(e) : "EnhancedPerformer" !== this.type && "RecoEvent" !== this.type || (this.query.startDate = i(e))), this
            }
          }, {
            key: "localDateRange",
            value: function(e, t) {
              if ("Event" === this.type) {
                if (!e || !t) throw new Error("Missing arguments");
                this.query.dateLocal = u(e) + " TO " + u(t)
              } else if ("EnhancedPerformer" === this.type || "RecoEvent" === this.type) {
                if (!e || !t) throw new Error("Missing arguments");
                this.query.startDate = i(e), this.query.endDate = i(t)
              }
              return this
            }
          }, {
            key: "hasTicket",
            value: function(e) {
              if ("Event" === this.type || "EnhancedPerformer" === this.type || "RecoEvent" === this.type) {
                var t = e ? 1 : 0;
                t ? this.query.minAvailableTickets = t : delete this.query.minAvailableTickets
              }
              return this
            }
          }, {
            key: "sort",
            value: function(e) {
              var t = arguments.length <= 1 || void 0 === arguments[1] ? "asc" : arguments[1];
              return h[this.type] && -1 !== h[this.type].indexOf(e) && (this.query.sort = e + " " + t), this
            }
          }, {
            key: "querystring",
            value: function() {
              return o(this.query)
            }
          }, {
            key: "toString",
            value: function() {
              return c(this.type) + "?" + o(this.query)
            }
          }]), e
        }();
      t.exports = v
    }, {
      "./geo": 11,
      "./model": 13
    }],
    15: [function(e, t, n) {
      (function(n) {
        "use strict";
        var r = e(n.env.REQUEST_MODULE ? n.env.REQUEST_MODULE : "./../../../browser-request/index.js");
        t.exports = function(e, t) {
          r({
            uri: e.url,
            json: !0,
            method: e.method || "GET",
            headers: e.headers
          }, function(e, n, r) {
            return e || 200 !== n.statusCode ? (e = e || new Error(r.description), e.status = n && n.statusCode, e.code = r && r.code, e.data = r, t(e)) : t(e, r)
          })
        }
      }).call(this, e("_process"))
    }, {
      "./../../../browser-request/index.js": 16,
      _process: 10
    }],
    16: [function(e, t, n) {
      function r(e, t) {
        if ("function" != typeof t) throw new Error("Bad callback given: " + t);
        if (!e) throw new Error("No options given");
        var n = e.onResponse;
        if (e = "string" == typeof e ? {
            uri: e
          } : JSON.parse(JSON.stringify(e)), e.onResponse = n, e.verbose && (r.log = i()), e.url && (e.uri = e.url, delete e.url), !e.uri && "" !== e.uri) throw new Error("options.uri is a required argument");
        if ("string" != typeof e.uri) throw new Error("options.uri must be a string");
        for (var s = ["proxy", "_redirectsFollowed", "maxRedirects", "followRedirect"], u = 0; u < s.length; u++)
          if (e[s[u]]) throw new Error("options." + s[u] + " is not supported");
        if (e.callback = t, e.method = e.method || "GET", e.headers = e.headers || {}, e.body = e.body || null, e.timeout = e.timeout || r.DEFAULT_TIMEOUT, e.headers.host) throw new Error("Options.headers.host is not supported");
        e.json && (e.headers.accept = e.headers.accept || "application/json", "GET" !== e.method && (e.headers["content-type"] = "application/json"), "boolean" != typeof e.json ? e.body = JSON.stringify(e.json) : "string" != typeof e.body && (e.body = JSON.stringify(e.body)));
        var c = function(e) {
          var t = [];
          for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
          return t.join("&")
        };
        if (e.qs) {
          var d = "string" == typeof e.qs ? e.qs : c(e.qs); - 1 !== e.uri.indexOf("?") ? e.uri = e.uri + "&" + d : e.uri = e.uri + "?" + d
        }
        var p = function(e) {
          var t = {};
          t.boundry = "-------------------------------" + Math.floor(1e9 * Math.random());
          var n = [];
          for (var r in e) e.hasOwnProperty(r) && n.push("--" + t.boundry + '\nContent-Disposition: form-data; name="' + r + '"\n\n' + e[r] + "\n");
          return n.push("--" + t.boundry + "--"), t.body = n.join(""), t.length = t.body.length, t.type = "multipart/form-data; boundary=" + t.boundry, t
        };
        if (e.form) {
          if ("string" == typeof e.form) throw "form name unsupported";
          if ("POST" === e.method) {
            var f = (e.encoding || "application/x-www-form-urlencoded").toLowerCase();
            switch (e.headers["content-type"] = f, f) {
              case "application/x-www-form-urlencoded":
                e.body = c(e.form).replace(/%20/g, "+");
                break;
              case "multipart/form-data":
                var h = p(e.form);
                e.body = h.body, e.headers["content-type"] = h.type;
                break;
              default:
                throw new Error("unsupported encoding:" + f)
            }
          }
        }
        return e.onResponse = e.onResponse || a, e.onResponse === !0 && (e.onResponse = t, e.callback = a), !e.headers.authorization && e.auth && (e.headers.authorization = "Basic " + l(e.auth.username + ":" + e.auth.password)), o(e)
      }

      function o(e) {
        function t() {
          l = !0;
          var t = new Error("ETIMEDOUT");
          return t.code = "ETIMEDOUT", t.duration = e.timeout, r.log.error("Timeout", {
            id: s._id,
            milliseconds: e.timeout
          }), e.callback(t, s)
        }

        function n(t) {
          if (l) return r.log.debug("Ignoring timed out state change", {
            state: s.readyState,
            id: s.id
          });
          if (r.log.debug("State change", {
              state: s.readyState,
              id: s.id,
              timed_out: l
            }), s.readyState === c.OPENED) {
            r.log.debug("Request started", {
              id: s.id
            });
            for (var n in e.headers) s.setRequestHeader(n, e.headers[n])
          } else s.readyState === c.HEADERS_RECEIVED ? o() : s.readyState === c.LOADING ? (o(), a()) : s.readyState === c.DONE && (o(), a(), i())
        }

        function o() {
          if (!v.response) {
            if (v.response = !0, r.log.debug("Got response", {
                id: s.id,
                status: s.status
              }), clearTimeout(s.timeoutTimer), s.statusCode = s.status, d && 0 == s.statusCode) {
              var t = new Error("CORS request rejected: " + e.uri);
              return t.cors = "rejected", v.loading = !0, v.end = !0, e.callback(t, s)
            }
            e.onResponse(null, s)
          }
        }

        function a() {
          v.loading || (v.loading = !0, r.log.debug("Response body loading", {
            id: s.id
          }))
        }

        function i() {
          if (!v.end) {
            if (v.end = !0, r.log.debug("Request done", {
                id: s.id
              }), s.body = s.responseText, e.json) try {
              s.body = JSON.parse(s.responseText)
            } catch (t) {
              return e.callback(t, s)
            }
            e.callback(null, s, s.body)
          }
        }
        var s = new c,
          l = !1,
          d = u(e.uri),
          f = "withCredentials" in s;
        if (p += 1, s.seq_id = p, s.id = p + ": " + e.method + " " + e.uri, s._id = s.id, d && !f) {
          var h = new Error("Browser does not support cross-origin request: " + e.uri);
          return h.cors = "unsupported", e.callback(h, s)
        }
        s.timeoutTimer = setTimeout(t, e.timeout);
        var v = {
          response: !1,
          loading: !1,
          end: !1
        };
        return s.onreadystatechange = n, s.open(e.method, e.uri, !0), d && (s.withCredentials = !!e.withCredentials), s.send(e.body), s
      }

      function a() {}

      function i() {
        var e, t, n = {},
          r = ["trace", "debug", "info", "warn", "error"];
        for (t = 0; t < r.length; t++) e = r[t], n[e] = a, "undefined" != typeof console && console && console[e] && (n[e] = s(console, e));
        return n
      }

      function s(e, t) {
        function n(n, r) {
          return "object" == typeof r && (n += " " + JSON.stringify(r)), e[t].call(e, n)
        }
        return n
      }

      function u(e) {
        var t, n = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;
        try {
          t = location.href
        } catch (r) {
          t = document.createElement("a"), t.href = "", t = t.href
        }
        var o = n.exec(t.toLowerCase()) || [],
          a = n.exec(e.toLowerCase()),
          i = !(!a || a[1] == o[1] && a[2] == o[2] && (a[3] || ("http:" === a[1] ? 80 : 443)) == (o[3] || ("http:" === o[1] ? 80 : 443)));
        return i
      }

      function l(e) {
        var t, n, r, o, a, i, s, u, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          c = 0,
          d = 0,
          p = "",
          f = [];
        if (!e) return e;
        do t = e.charCodeAt(c++), n = e.charCodeAt(c++), r = e.charCodeAt(c++), u = t << 16 | n << 8 | r, o = u >> 18 & 63, a = u >> 12 & 63, i = u >> 6 & 63, s = 63 & u, f[d++] = l.charAt(o) + l.charAt(a) + l.charAt(i) + l.charAt(s); while (c < e.length);
        switch (p = f.join(""), e.length % 3) {
          case 1:
            p = p.slice(0, -2) + "==";
            break;
          case 2:
            p = p.slice(0, -1) + "="
        }
        return p
      }
      var c = XMLHttpRequest;
      if (!c) throw new Error("missing XMLHttpRequest");
      r.log = {
        trace: a,
        debug: a,
        info: a,
        warn: a,
        error: a
      };
      var d = 18e4,
        p = 0;
      r.withCredentials = !1, r.DEFAULT_TIMEOUT = d, r.defaults = function(e, t) {
        var n = function(t) {
            var n = function(n, r) {
              n = "string" == typeof n ? {
                uri: n
              } : JSON.parse(JSON.stringify(n));
              for (var o in e) void 0 === n[o] && (n[o] = e[o]);
              return t(n, r)
            };
            return n
          },
          o = n(r);
        return o.get = n(r.get), o.post = n(r.post), o.put = n(r.put), o.head = n(r.head), o
      };
      var f = ["get", "put", "post", "head"];
      f.forEach(function(e) {
        var t = e.toUpperCase(),
          n = e.toLowerCase();
        r[n] = function(e) {
          "string" == typeof e ? e = {
            method: t,
            uri: e
          } : (e = JSON.parse(JSON.stringify(e)), e.method = t);
          var n = [e].concat(Array.prototype.slice.apply(arguments, [1]));
          return r.apply(this, n)
        }
      }), r.couch = function(e, t) {
        function n(e, n, r) {
          if (e) return t(e, n, r);
          if ((n.statusCode < 200 || n.statusCode > 299) && r.error) {
            e = new Error("CouchDB error: " + (r.error.reason || r.error.error));
            for (var o in r) e[o] = r[o];
            return t(e, n, r)
          }
          return t(e, n, r)
        }
        "string" == typeof e && (e = {
          uri: e
        }), e.json = !0, e.body && (e.json = e.body), delete e.body, t = t || a;
        var o = r(e, n);
        return o
      }, t.exports = r
    }, {}]
  }, {}, [6])(6)
});