(function() {
  dust.register("adComponent", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"adComponent\"><div id=\"").reference(ctx._get(false, ["elementID"]), ctx, "h").write("\"></div></div>");
  }
  return body_0;
})();
if (define("common-adComponent", ["foobunny", "component", "adComponent-view"], function(a, b, c) {
    "use strict";
    var d = b.extend({
      init: function() {
        this.view = new c(this.options)
      },
      render: function() {
        this.isAppReady() ? this.view.render() : this.delayViewRender()
      },
      isAppReady: function() {
        return 1 === SH.appReady
      },
      delayViewRender: function() {
        var b = {},
          c = this;
        _.extend(b, a.mediator), b.once("common:ux-ready-complete", function() {
          c.view.render()
        })
      },
      dispose: function() {
        this.view.dispose()
      }
    });
    return d
  }), define("adComponent-helper", ["adProperties-model"], function(a) {
    "use strict";
    var b = {
      getPropertiesModel: function() {
        return new a
      },
      getAllFormatNames: function() {
        var a = this.getAllFormats(),
          b = [];
        for (var c in a) b.push(c);
        return b
      },
      getAllFormats: function() {
        var a = this.getPropertiesModel();
        return a.attributes.formats
      },
      getDimensions: function(a) {
        var b = this.getAllFormats();
        if (b[a]) return b[a].dimensions
      },
      getWidth: function(a) {
        var b = this.getAllFormats();
        if (b[a]) return b[a].dimensions[0]
      },
      getHeight: function(a) {
        var b = this.getAllFormats();
        if (b[a]) return b[a].dimensions[1]
      },
      getFormatId: function(a) {
        var b = this.getAllFormats();
        if (b[a]) return b[a].formatId
      },
      getQueryArgumentFromUrl: function(a, b) {
        for (var c = a.substring(a.indexOf("?") + 1), d = c.split("&"), e = 0; e < d.length; e++) {
          var f = d[e].split("=");
          if (f[0] === b) return f[1]
        }
        return ""
      },
      getProtocol: function(a) {
        return a.protocol.substring(0, a.protocol.length - 1)
      },
      getURL: function(a) {
        return a.completeUrl
      },
      getEnv: function() {
        var a = window.location.host;
        return a.indexOf("stubhub") > -1 || a.indexOf("slce") > -1 ? "prod" : "test"
      },
      getResponseOptions: function(a) {
        var b = a.performers || a.events || a.categories || a.groupings || a.eventgroupings || a.recommendations;
        return b
      },
      isCategoriesEmpty: function(a) {
        return _.isEmpty(a.categories)
      },
      getCategories: function(a) {
        return this.isCategoriesEmpty(a) ? [] : a.categories
      },
      isAncestorCategoriesEmpty: function(a) {
        return !a.ancestors || _.isEmpty(a.ancestors.categories)
      },
      getAncestorCategories: function(a) {
        return this.isAncestorCategoriesEmpty(a) ? [] : a.ancestors.categories
      },
      isAncestorGroupingsEmpty: function(a) {
        return !a.ancestors || _.isEmpty(a.ancestors.groupings)
      },
      getAncestorGroupings: function(a) {
        return this.isAncestorGroupingsEmpty(a) ? [] : a.ancestors.groupings
      },
      getCategoryID: function(a) {
        return this.isAncestorCategoriesEmpty(a) ? "" : this.getAncestorCategories(a)[0].id
      },
      getGenreAncestors: function(a) {
        var b = this.getAncestorCategories(a).concat(this.getAncestorGroupings(a));
        return b
      },
      getGenreID: function(a) {
        return a.id || ""
      },
      getGenreParentID: function(a) {
        var b = this.getGenreAncestors(a),
          c = b.length;
        return c > 0 ? b[c - 1].id : ""
      },
      getGenreGrandParentID: function(a) {
        var b = this.getGenreAncestors(a),
          c = b.length;
        return c > 1 ? b[c - 2].id : ""
      },
      getArtistPrimaryStyle: function(a) {
        for (var b = this.getCategories(a), c = b.length - 1; c >= 0; c--) {
          var d = b[c].relationshipType;
          if ("PRIMARY_STYLE" === d) return b[c].id
        }
        return ""
      }
    };
    return b
  }), define("adProvider-factory", ["foobunny", "application_helper", "adComponent-helper"], function(a, b, c) {
    "use strict";
    var d = {
        createProvider: function(a) {
          var b, c = a.provider;
          return c && "" !== c.trim() && "DFP" !== c ? "AdSense" === c && (b = new h(a)) : b = new g(a), b
        }
      },
      e = a.BaseView.extend({
        initialize: function(b) {
          var c = this;
          this.model = new f(this.getProviderURL()), this.model.afterFetch = function() {
            c.dataDeferred.resolve(), c.loadAdConfig()
          }, this.model.fetchFail = function() {
            c.dataDeferred.resolve()
          }, this.dataDeferred = a.utils.deferred();
          var d = b.properties.getAttributes().formats;
          this.format = d[this.options.format];
          var e = this.options.formatUnit || 1;
          if (isNaN(e) && (e = parseInt(e)), this.format) {
            var g = this.format.units.length,
              h = e % g;
            this.unit = this.format.units[0 === h ? g - 1 : h - 1]
          }
          this.options = b
        },
        render: function() {
          this.model.fetch({
            dataType: "script",
            cache: !0
          })
        },
        renderCondition: function() {
          return this.dataDeferred.promise()
        },
        commonTargetingConfig: function() {
          var a = SH.globalProperties,
            b = {};
          if (!a) return b;
          b.protocol = [c.getProtocol(a)], b.pageUrl = [c.getURL(a)], b.env = [c.getEnv(a)];
          var d = a ? a.APIResponses : void 0;
          if (!d) return b;
          var e = c.getResponseOptions(d);
          return e ? (b.categoryId = [c.getCategoryID(e)], b.genreId = [c.getGenreID(e) || ""], b.genreParentId = [c.getGenreParentID(e) || ""], b.genreGrandParentId = [c.getGenreGrandParentID(e) || ""], b.artistPrimaryStyle = [c.getArtistPrimaryStyle(e) || ""], b.venueId = [e.venueId || ""], b.userStatus = [e.userStatus || e.status || "guestuser"], b.searchStr = [e.searchQry || ""], b) : b
        }
      }),
      f = a.BaseModel.extend({
        initialize: function(a) {
          this.url = a
        }
      }),
      g = e.extend({
        localizeURL: function() {
          var a = SH.country.toUpperCase(),
            b = this.unit.url.split("/"),
            c = b[b.length - 1],
            d = ("US" !== a ? a + "_" : "") + c;
          this.unit.url = this.unit.url.replace(c, d)
        },
        loadAdConfig: function() {
          var a = window.googletag || {};
          if (a.cmd = a.cmd || {}, this.unit) {
            this.localizeURL();
            var c = this;
            b.pollProperty(a, "apiReady", function() {
              c.processAPI()
            }, function() {
              if (!a.apiReady || !a.pubads) return void c.publishEvent("AdComponent:renderIncomplete", {
                el: c.unit.el,
                url: c.unit.url,
                formatUnit: c.options.formatUnit
              })
            }, !0, 1e4)
          }
        },
        attachOSIDTargeting: function(a) {
          var b = a.pageUrl;
          b ? a.pageUrl instanceof Array && (b = a.pageUrl[0]) : b = window.location.href;
          var d = c.getQueryArgumentFromUrl(b, "osid");
          return a.osid = d, a
        },
        processAPI: function() {
          var a = window.googletag || {};
          a.cmd = a.cmd || {};
          var b = this.options.targetConfig,
            c = this.commonTargetingConfig();
          b = _.extend(c, b), b = this.attachOSIDTargeting(b), b && $.each(b, function(b, c) {
            a.pubads().setTargeting(b, c)
          }), document.referrer && a.pubads().setTargeting("referrerUrl", document.referrer);
          var d = this;
          if (a.cmd) {
            var e = this.options.reset;
            e || a.pubads().addEventListener("slotRenderEnded", function(a) {
              var b = a.slot.getSlotElementId();
              b === d.unit.el && d.publishEvent("AdComponent:slotRenderComplete", {
                el: d.unit.el,
                url: d.unit.url,
                formatUnit: d.options.formatUnit
              })
            }), a.cmd.push(function() {
              var b, c = "background skin" === d.options.format;
              b = c ? a.defineOutOfPageSlot(d.unit.url, d.unit.el) : a.defineSlot(d.unit.url, [d.format.dimensions, [300, 600]], d.unit.el), b && b.addService(a.pubads()), b && !c && (b.setCollapseEmptyDiv(!0, !0), a.pubads().enableSingleRequest()), a.enableServices(), a.display(d.unit.el), d.publishEvent("AdComponent:renderComplete", {
                el: d.unit.el,
                url: d.unit.url,
                formatUnit: d.options.formatUnit
              })
            })
          }
        },
        getProviderURL: function() {
          return this.options.useLite ? "//www.googletagservices.com/tag/js/gpt_light_test.js" : "//www.googletagservices.com/tag/js/gpt.js"
        }
      }),
      h = e.extend({
        loadAdConfig: function() {
          var a = {
              pubId: "partner-ebay-stubhub",
              query: "nuts",
              hl: "en",
              offerExtension: !0,
              instantPreviews: !0,
              location: !0,
              plusOnes: !0,
              sellerRatings: !0,
              siteLinks: !0
            },
            b = {
              container: this.unit.el,
              number: 3,
              width: this.format.dimensions[0],
              height: this.format.dimensions[1],
              colorDomainLink: "#0000FF",
              noTitleUnderline: !0,
              fontSizeAttribution: 14,
              colorAttribution: "#000000",
              longerHeadlines: !0,
              detailedAttribution: !0
            },
            c = window._googCsa;
          c("ads", a, b)
        },
        getProviderURL: function() {
          return "//www.google.com/adsense/search/async-ads.js"
        }
      });
    return d
  }), define("adComponent-model", ["foobunny"], function(a) {
    "use strict";
    var b = a.BaseModel.extend({
      defaults: {
        elementID: ""
      },
      initialize: function() {}
    });
    return b
  }), define("adProperties-model", ["foobunny"], function(a) {
    "use strict";
    var b = a.BaseModel.extend({
      defaults: {
        formats: {
          "mobile leaderboard": {
            units: [{
              url: "/9494403/StubHub_Unified_320x50"
            }, {
              url: "/9494403/StubHub_Unified_320x50_unit2"
            }],
            formatId: "9494403-100",
            dimensions: [320, 50]
          },
          leaderboard: {
            units: [{
              url: "/9494403/StubHub_Unified_728x90"
            }, {
              url: "/9494403/StubHub_Unified_728x90_unit2"
            }],
            formatId: "9494403-101",
            dimensions: [728, 90]
          },
          "super leaderboard": {
            units: [{
              url: "/9494403/StubHub_Unified_970x90"
            }],
            formatId: "9494403-102",
            dimensions: [970, 90]
          },
          "medium rectangle": {
            units: [{
              url: "/9494403/StubHub_Unified_300x250"
            }, {
              url: "/9494403/StubHub_Unified_300x250_unit2"
            }, {
              url: "/9494403/StubHub_Unified_300x250_unit3"
            }],
            formatId: "9494403-200",
            dimensions: [300, 250]
          },
          "background skin": {
            units: [{
              url: "/9494403/StubHub_Unified_Skin_1x1"
            }],
            formatId: "9494403-300",
            dimensions: [1, 1]
          }
        }
      }
    });
    return b
  }), define("adComponent-view", ["underscore", "foobunny", "adComponent-model", "adProperties-model", "adProvider-factory", "adComponent-helper"], function(a, b, c, d, e, f) {
    "use strict";
    var g = b.BaseView.extend({
      template: "adComponent",
      initialize: function(b) {
        this.options = b, this.model = new c(b), this.options.model = this.model, this.properties = new d(b), this.options.properties = this.properties, $(window).on("resize", a.bind(this.onResizeWindow, this)), this.currentWidth = document.documentElement.clientWidth, this.previousWidth = this.currentWidth, this.generateBreakPointsMap(), this.modifyFormat()
      },
      afterRender: function() {
        this.provider.render()
      },
      onResizeWindow: function() {
        this.currentWidth = document.documentElement.clientWidth, this.resizeWindow = !0, this.modifyFormat(), this.previousWidth = this.currentWidth
      },
      generateBreakPointsMap: function() {
        var a = f.getAllFormatNames();
        this.breakPoints = [], this.breakPointMap = {};
        var b = this.options.format;
        for (var c in a) {
          var d = a[c];
          if (d === b || this.options[d]) {
            var e = f.getWidth(d);
            this.breakPoints.push(e), this.breakPointMap[e] = d
          }
        }
        this.breakPoints.sort()
      },
      modifyFormat: function() {
        var a = this.fetchIndex(this.currentWidth),
          b = this.fetchIndex(this.previousWidth);
        this.resizeWindow ? a !== b && a !== -1 && (this.options.format = this.breakPointMap[this.breakPoints[a]], this.configureAdProvider(), this.render()) : (this.options.format = this.breakPointMap[this.breakPoints[a]], this.configureAdProvider())
      },
      fetchIndex: function(a) {
        var b = this.breakPoints.length;
        if (a <= this.breakPoints[0]) return 0;
        if (a >= this.breakPoints[b - 1]) return b - 1;
        for (var c = 0; c < b; c++) {
          if (c === b - 1) return c;
          if (a > this.breakPoints[c] && a <= this.breakPoints[c + 1]) return c
        }
        return -1
      },
      configureAdProvider: function() {
        this.provider = new e.createProvider(this.options), this.provider.unit && (this.model.attributes || (this.model = new c), this.provider.unit.el = this.generateUniqueId(), this.model.attributes.elementID = this.provider.unit.el)
      },
      generateUniqueId: function() {
        var a = f.getFormatId(this.options.format);
        return "div-gpt-ad-" + a + "-" + (this.options.formatUnit || 1)
      }
    });
    return g
  }), require(["sh_global_registry"], function(a) {
    if (a.getFeatureValue("gs.features." + a.getSiteId() + ".common.showProactiveChat", "boolean")) {
      window.ATGSvcs = {
        eeid: +SH.chat.eeid
      };
      var b = window.location.protocol;
      require([b + "//static.atgsvcs.com/js/atgsvcs.js"], function() {
        ATGSvcs.start(), ATGSvcs.setEEID(SH.chat.eeid), require([b + "//stubhub.custhelp.com/rnt/rnw/javascript/vs/1/vsapi.js", b + "//stubhub.custhelp.com/vs/1/vsopts.js"], function() {
          var a = {
            eeOffered: function(a) {
              a.rule && "block" === $("#common-chat-osc-invitation").css("display") && require(["common-chat"], function(a) {
                var b = new a({
                  element: "#common-chat-sh-container",
                  attributes: {
                    "chat-placeholder": "Chat for events..."
                  }
                });
                b.render()
              })
            }
          };
          ATGSvcs.eventSubscribe({
            eeOffered: function(b, c) {
              a.eeOffered(c)
            }
          })
        })
      })
    }
  }), require(["sh_tns_util"], function(a) {
    a.isLoginRequired() || a.setBrowserRecon()
  }), SH.uservoice && SH.uservoice.forumId && (UserVoice = window.UserVoice || [], function() {
    var a = document.createElement("script");
    a.type = "text/javascript", a.async = !0, a.src = "//widget.uservoice.com/WFFuSp01RTP9g0jTO7oRA.js";
    var b = document.getElementsByTagName("script")[0];
    b.parentNode.insertBefore(a, b)
  }(), UserVoice.push(["set", {
    target: "#header-help",
    position: "left",
    height: "325px",
    width: "100%",
    forum_id: SH.uservoice.forumId,
    strings: {
      post_suggestion_success_body: "We take your feedback to heart."
    }
  }]), SH.globalProperties && SH.globalProperties.userGuid && SH.globalProperties.shVisitorId && UserVoice.push(["identify", {
    id: SH.globalProperties.userGuid,
    shVisitorId: SH.globalProperties.shVisitorId
  }])), define(["global_context", "common-utils"], function(a, b) {
    "use strict";
    var c, d, e = {};
    ({
      pageType: "",
      categoryId: "",
      genreId: "",
      genreParentId: "",
      genreGrandParentId: "",
      pageUrl: location.url,
      userGeoDetected: "",
      venueId: "",
      userStatus: "guestuser",
      artistPrimaryStyle: "",
      protocol: "",
      referrerUrl: document.referrer
    });
    return e.collection = {
      ad320x50: {
        url: "/9494403/StubHub_Unified_320x50",
        dimensions: [320, 50],
        el: "div-gpt-ad-1408465333913-1"
      },
      ad300x250: {
        url: "/9494403/StubHub_Unified_300x250",
        dimensions: [300, 250],
        el: "div-gpt-ad-1408465196098-0"
      },
      ad728x90: {
        url: "/9494403/StubHub_Unified_728x90",
        dimensions: [728, 90],
        el: "div-gpt-ad-1411358451931-0"
      }
    }, c = {
      performer: {
        formfactor2: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        },
        formfactor4: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        }
      },
      venue: {
        formfactor2: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        },
        formfactor4: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        }
      },
      homepage: {
        formfactor2: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        },
        formfactor4: {
          adSlot1: e.collection.ad728x90,
          adSlot2: e.collection.ad300x250
        }
      },
      eventpage: {
        formfactor2: {
          adSlot1: e.collection.ad300x250
        },
        formfactor4: {
          adSlot1: e.collection.ad728x90
        }
      },
      browse: {
        formfactor2: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        },
        formfactor4: {
          adSlot1: e.collection.ad320x50,
          adSlot2: e.collection.ad300x250
        }
      }
    }, e.setTargetingConfig = function(a) {
      this.targetingConfig = a
    }, e.clearTargeting = function() {
      for (var a in this.targetingConfig) googletag.pubads().clearTargeting(a)
    }, e.initialize = function(a) {
      var b = $.ajax({
        type: "GET",
        url: "//www.googletagservices.com/tag/js/gpt.js",
        dataType: "script",
        cache: !0,
        error: function() {}
      });
      b.then(function() {
        $(document).ready(function() {
          a()
        })
      })
    }, e.getFormFactor = function() {
      var a = b.getFormFactor() <= 2 ? 2 : 4;
      return a
    }, e.refreshSlot = function(a, b) {
      window.adSlots = window.adSlots || {};
      var d = e.getFormFactor(),
        f = c[a.toString()]["formfactor" + d];
      for (var g in f) {
        var h = f[g].el,
          i = g,
          j = window.adSlots[h];
        i === b && j && ($("div." + i).html("<div id='" + h + "'></div>"), googletag.pubads().refresh([j]))
      }
    }, e.loadAdConfig = function(a, b, f) {
      var g = e.getFormFactor(),
        h = window.googletag || {},
        i = this.targetingConfig;
      h.cmd = h.cmd || {}, window.adSlots = window.adSlots || {}, d = c[a.toString()]["formfactor" + g];
      for (var j in d) {
        var k = d[j],
          l = j;
        e.clearTargeting(), $("div." + l).html("<div id='" + k.el + "'></div>")
      }
      i && $.each(i, function(a, b) {
        h.pubads().setTargeting(a, b)
      }), document.referrer && h.pubads().setTargeting("referrerUrl", document.referrer), h.pubads().setTargeting("env", "prod"), h.cmd && h.cmd.push(function() {
        h.pubads() && h.pubads().clear();
        for (var a in d) {
          var b = d[a],
            c = b.el,
            e = h.defineSlot(b.url, b.dimensions, c);
          e && (window.adSlots = window.adSlots || {}, window.adSlots[c] = e, e.addService(h.pubads()).setCollapseEmptyDiv(!0, !0), h.pubads().enableSingleRequest(), h.enableServices(), h.display(c))
        }
        h.pubads().addEventListener("slotRenderEnded", function(a) {
          var b, c = a.slot.getSlotId().getDomId();
          for (var e in d) {
            var g = d[e];
            c === g.el && (b = g.adplacement)
          }
          f && f(b)
        })
      })
    }, e
  }), function(a) {
    var b = document,
      c = b.createElement("script"),
      d = b.head || b.getElementsByTagName("head")[0],
      e = "fsReady",
      f = {
        src: SH.icmsServer + "/content-common/foresee_assets/gateway.min.js",
        type: "text/javascript",
        async: "true",
        "data-vendor": "fs",
        "data-mode": "selfhost",
        "data-environment": window.location.host.indexOf("stubhub") > -1 ? "production" : "staging",
        "data-hasssl": "true",
        "data-client": "stubhub",
        "data-codelocation": SH.icmsServer + "/content-common/foresee_assets/code/19.3.3-v.2/",
        "data-isselfhosted": "true",
        "data-product-assets": SH.icmsServer + "/content-common/foresee_assets/product_assets/",
        "data-role": "gateway"
      };
    for (var g in f) c.setAttribute(g, f[g]);
    d.appendChild(c), a[e] = function() {
      var b = "__" + e + "_stk__";
      a[b] = a[b] || [], a[b].push(arguments)
    }
  }(window), window.location.search.indexOf("hideGTM=true") === -1 && window.location.search.indexOf("pxy_app") === -1 && document.referrer.indexOf("pxy_app") === -1 && "object" != typeof google_tag_manager) {
  var env = location.host.indexOf("stubhub") !== -1 ? "prod" : "dev",
    region = "en-us" == SH.locale || "fr-ca" == SH.locale ? "noram" : "intl";
  if (SH.GTM && SH.GTM[region] && SH.GTM[region][env]) {
    var gtmID = SH.GTM[region][env];
    ! function(a, b, c, d, e) {
      a[d] = a[d] || [], a[d].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
      });
      var f = b.getElementsByTagName(c)[0],
        g = b.createElement(c),
        h = "dataLayer" !== d ? "&l=" + d : "";
      g.async = !0, g.src = "//www.googletagmanager.com/gtm.js?id=" + e + h, f.parentNode.insertBefore(g, f)
    }(window, document, "script", "dataLayer", gtmID)
  }
}! function(a, b, c) {
  var d = location.host.indexOf("stubhub") !== -1 ? "prod" : "dev";
  if (SH.roostKey && SH.roostKey[d]) {
    var e = b.getElementsByTagName(c)[0],
      f = b.createElement(c);
    f.async = !0, f.src = "//cdn.goroost.com/roostjs/" + SH.roostKey[d], e.parentNode.insertBefore(f, e)
  }
}(window, document, "script"),
function() {
  for (var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
      if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
      a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }, l = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this, ba = ["String", "prototype", "includes"], ca = 0; ca < ba.length - 1; ca++) {
    var da = ba[ca];
    da in l || (l[da] = {}), l = l[da]
  }
  var ea = ba[ba.length - 1],
    fa = l[ea],
    ga = fa ? fa : function(a, b) {
      if (null == this) throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return -1 !== (this + "").indexOf(a, b || 0)
    };
  ga != fa && null != ga && aa(l, ea, {
    configurable: !0,
    writable: !0,
    value: ga
  });

  function ha(a) {
    var b = typeof a;
    if ("object" == b) {
      if (!a) return "null";
      if (a instanceof Array) return "array";
      if (a instanceof Object) return b;
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) return "object";
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
  }

  function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
  }

  function ja(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var c = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(c, d), a.apply(b, c)
      }
    }
    return function() {
      return a.apply(b, arguments)
    }
  }

  function ka(a, b, c) {
    return ka = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja, ka.apply(null, arguments)
  }

  function la(a) {
    return !/^\s*$/.test(a) && /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
  }

  function ma(a) {
    if (a = String(a), la(a)) try {
      return eval("(" + a + ")")
    } catch (b) {}
    throw Error("Invalid JSON string: " + a)
  }

  function n(a) {
    var b = [];
    return na(new oa, a, b), b.join("")
  }

  function oa() {}

  function na(a, b, c) {
    if (null == b) c.push("null");
    else {
      if ("object" == typeof b) {
        if ("array" == ha(b)) {
          var d = b;
          b = d.length, c.push("[");
          for (var e = "", f = 0; f < b; f++) c.push(e), na(a, d[f], c), e = ",";
          return void c.push("]")
        }
        if (!(b instanceof String || b instanceof Number || b instanceof Boolean)) {
          c.push("{"), e = "";
          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), pa(d, c), c.push(":"), na(a, f, c), e = ","));
          return void c.push("}")
        }
        b = b.valueOf()
      }
      switch (typeof b) {
        case "string":
          pa(b, c);
          break;
        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;
        case "boolean":
          c.push(String(b));
          break;
        case "function":
          c.push("null");
          break;
        default:
          throw Error("Unknown type: " + typeof b)
      }
    }
  }
  var qa = {
      '"': '\\"',
      "\\": "\\\\",
      "/": "\\/",
      "\b": "\\b",
      "\f": "\\f",
      "\n": "\\n",
      "\r": "\\r",
      "\t": "\\t",
      "\x0B": "\\u000b"
    },
    ra = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

  function pa(a, b) {
    b.push('"', a.replace(ra, function(a) {
      var b = qa[a];
      return b || (b = "\\u" + (65536 | a.charCodeAt(0)).toString(16).substr(1), qa[a] = b), b
    }), '"')
  }

  function q(a) {
    a = String(a);
    try {
      return JSON.parse(a)
    } catch (b) {}
    throw Error("Invalid JSON string: " + a)
  }

  function t(a) {
    try {
      return "object" == typeof JSON && "function" == typeof JSON.stringify ? JSON.stringify(a) : n(a)
    } catch (b) {}
    throw Error("Could not stringify object")
  }

  function sa() {
    function a() {
      b.length && b[0](function() {
        b.shift(), a()
      })
    }
    var b = [];
    return function(c) {
      b.push(c), 1 === b.length && a()
    }
  }

  function u(a, b, c) {
    return a = a.replace(/\$(\d)/g, function(a, c) {
      return b[parseInt(c, 10) - 1]
    }), c && (a += "\n Failure Code:" + c), a
  }

  function ta(a) {
    return {
      data: a.data || "",
      data_parsed: a.data_parsed || {},
      has_app: a.has_app || null,
      identity: a.identity || null,
      referring_identity: a.referring_identity || null,
      referring_link: a.referring_link || null
    }
  }

  function ua(a) {
    var b = /^\$journeys_\S+$/,
      c = a.data,
      d = {};
    if (!c) return {};
    switch (typeof c) {
      case "string":
        try {
          c = q(c)
        } catch (e) {
          c = ma(c)
        }
        break;
      case "object":
        break;
      default:
        c = {}
    }
    return Object.keys(c).forEach(function(a) {
      b.test(a) && (d[a] = c[a])
    }), d
  }

  function va() {
    var a;
    return a = "_branch_view_id".replace(/[\[\]]/g, "\\$&"), (a = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)").exec(String(window.location))) && a[2] ? decodeURIComponent(a[2].replace(/\+/g, " ")) : ""
  }

  function wa(a) {
    a.source = "web-sdk";
    var b = a.data;
    switch (typeof b) {
      case "string":
        try {
          b = q(b)
        } catch (c) {
          b = ma(b)
        }
        break;
      case "object":
        break;
      default:
        b = {}
    }
    b.$canonical_url || (b.$canonical_url = String(window.location)), b.$og_title || (b.$og_title = v("title")), b.$og_description || (b.$og_description = v("description")), b.$og_image_url || (b.$og_image_url = v("image")), b.$og_video || (b.$og_video = v("video")), "string" == typeof b.$desktop_url && (b.$desktop_url = b.$desktop_url.replace(/#r:[a-z0-9-_]+$/i, "").replace(/([\?\&]_branch_match_id=\d+)/, ""));
    try {
      q(b)
    } catch (c) {
      b = n(b)
    }
    return a.data = b, a
  }

  function xa(a) {
    return a ? a.substring(a.lastIndexOf("/") + 1, a.length) : null
  }

  function w(a, b) {
    if (a && "object" == typeof a || (a = {}), !b || "object" != typeof b) return a;
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
    return a
  }

  function ya() {
    try {
      var a = window.location.hash.match(/r:([^&]*)/);
      if (a && 1 <= a.length) return a[1]
    } catch (b) {}
  }

  function x() {
    var a = navigator.userAgent;
    return a.match(/android/i) ? "android" : a.match(/ipad/i) ? "ipad" : a.match(/i(os|p(hone|od))/i) ? "ios" : a.match(/\(BB[1-9][0-9]*\;/i) ? "blackberry" : a.match(/Windows Phone/i) ? "windows_phone" : !!(a.match(/Kindle/i) || a.match(/Silk/i) || a.match(/KFTT/i) || a.match(/KFOT/i) || a.match(/KFJWA/i) || a.match(/KFJWI/i) || a.match(/KFSOWI/i) || a.match(/KFTHWA/i) || a.match(/KFTHWI/i) || a.match(/KFAPWA/i) || a.match(/KFAPWI/i)) && "kindle"
  }

  function za() {
    var a, b = navigator.userAgent;
    if (/^((?!chrome|android|crios|fxios).)*safari/i.test(b)) a: {
      var c;
      if (c = 11, (b = /version\/([^ ]*)/i.exec(b)) && b[1]) try {
        if (parseFloat(b[1]) >= c) {
          a = !0;
          break a
        }
      } catch (d) {}
      a = !1
    }
    else a = !1;
    return a
  }

  function Aa() {
    try {
      var a = window.location.search.substring(1).match(/_branch_match_id=([^&]*)/);
      if (a && 1 <= a.length) return a[1]
    } catch (b) {}
  }

  function Ba(a) {
    return a.replace(/(\-\w)/g, function(a) {
      return a[1].toUpperCase()
    })
  }

  function Ca(a) {
    var b, c, d, e, f, g, h = "",
      i = 0;
    for (a = a.replace(/\r\n/g, "\n"), c = "", d = 0; d < a.length; d++) e = a.charCodeAt(d), 128 > e ? c += String.fromCharCode(e) : (127 < e && 2048 > e ? c += String.fromCharCode(e >> 6 | 192) : (c += String.fromCharCode(e >> 12 | 224), c += String.fromCharCode(e >> 6 & 63 | 128)), c += String.fromCharCode(63 & e | 128));
    for (a = c; i < a.length;) b = a.charCodeAt(i++), c = a.charCodeAt(i++), d = a.charCodeAt(i++), e = b >> 2, b = (3 & b) << 4 | c >> 4, f = (15 & c) << 2 | d >> 6, g = 63 & d, isNaN(c) ? g = f = 64 : isNaN(d) && (g = 64), h = h + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(g);
    return h
  }

  function Da(a, b, c) {
    "function" == typeof a.addEventListener ? a.addEventListener(b, c, void 0) : "function" == typeof a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
  }

  function Ea(a) {
    return a ? (-1 < a.indexOf("://") && (a = a.split("://")[1]), a.substring(a.indexOf("/") + 1)) : null
  }

  function Fa(a) {
    return a ? (-1 < a.indexOf("://") ? a = a.split("://")[1] : "/" === a.charAt(0) && (a = a.slice(1)), a) : null
  }

  function v(a) {
    var b;
    return a = String(a), b = b || null, (a = document.querySelector('meta[property="og:' + a + '"]')) && a.content && (b = a.content), b
  }

  function Ga() {
    for (var a = {}, b = document.getElementsByTagName("meta"), c = 0; c < b.length; c++)
      if ((b[c].getAttribute("name") || b[c].getAttribute("property")) && b[c].getAttribute("content")) {
        var d = b[c].getAttribute("name"),
          e = b[c].getAttribute("property"),
          d = d || e;
        "al:ios:url" === d ? a.$ios_deeplink_path = Fa(b[c].getAttribute("content")) : "al:android:url" === d ? a.$android_deeplink_path = Fa(b[c].getAttribute("content")) : (d = d.split(":"), 3 === d.length && "branch" === d[0] && "deeplink" === d[1] && (a[d[2]] = b[c].getAttribute("content")))
      }
    return a
  }

  function Ha() {
    var a;
    try {
      a = (navigator.language || navigator.browserLanguage || "en").split(/[^a-z^A-Z0-9-]/).shift().toLowerCase()
    } catch (b) {
      a = "en"
    }
    return a
  }

  function Ia(a, b) {
    var c = [];
    return b.forEach(function(b) {
      -1 === a.indexOf(b) && c.push(b)
    }), c
  }
  var Ja = ["purchase"],
    y = {
      missingPurchaseEvent: "event name is either missing, of the wrong type or not valid. Please specify 'purchase' as the event name.",
      missingCommerceData: "commerce_data is either missing, of the wrong type or empty. Please ensure that commerce_data is constructed correctly.",
      invalidKeysForRoot: "Please remove the following keys from the root of commerce_data: ",
      invalidKeysForProducts: "Please remove the following keys from commerce_data.products: ",
      invalidProductListType: "commerce_data.products must be an array of objects",
      invalidProductType: "Each product in the products list must be an object"
    };

  function Ka(a) {
    var b = "sku name price quantity brand category variant".split(" "),
      c = Ia("common type transaction_id currency revenue revenue_in_usd exchange_rate shipping tax coupon affiliation persona products".split(" "), Object.keys(a));
    if (c.length) return y.invalidKeysForRoot + c.join(", ");
    var d, e = [];
    if (a.hasOwnProperty("products")) {
      if (!Array.isArray(a.products)) return y.invalidProductListType;
      if (a.products.forEach(function(a) {
          "object" != typeof a && (d = y.invalidProductType), e = e.concat(Ia(b, Object.keys(a)))
        }), d) return d;
      if (e.length) return y.invalidKeysForProducts + e.join(", ")
    }
    return null
  }

  function La(a, b) {
    if (!a || "string" != typeof a || -1 === Ja.indexOf(a.toLowerCase())) return y.missingPurchaseEvent;
    if (!b || "object" != typeof b || !Object.keys(b).length) return y.missingCommerceData;
    var c = Ka(b);
    return c ? c : null
  }

  function z(a) {
    return "string" != typeof a ? null : a.replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function A(a, b, c) {
    if (c) {
      if ("object" == typeof c && !Object.keys(c).length) return a;
      a[b] = c
    }
    return a
  }

  function Ma() {
    var a, b = {};
    return a = {}, a = A(a, "$og_title", v("title")), a = A(a, "$og_description", v("description")), a = A(a, "$og_image_url", v("image")), a = (a = A(a, "$og_video", v("video"))) && 0 < Object.keys(a).length ? a : null, b = A(b, "og_data", a), b = A(b, "hosted_deeplink_data", Ga()), a = document.getElementsByTagName("title"), b = A(b, "title", 0 < a.length ? a[0].innerText : null), a = document.querySelector('meta[name="description"]'), b = A(b, "description", a && a.content ? a.content : null), a = document.querySelector('link[rel="canonical"]'), (b = A(b, "canonical_url", a && a.href ? a.href : null)) && 0 < Object.keys(b).length ? b : null
  }

  function B(a, b) {
    return function(c, d, e) {
      if ("number" == typeof e || e)
        if (0 === b) {
          if ("object" != typeof e) return u("API request $1, parameter $2 is not $3", [c, d, "an object"])
        } else if (3 === b) {
        if (!(e instanceof Array)) return u("API request $1, parameter $2 is not $3", [c, d, "an array"])
      } else if (2 === b) {
        if ("number" != typeof e) return u("API request $1, parameter $2 is not $3", [c, d, "a number"])
      } else if (4 === b) {
        if ("boolean" != typeof e) return u("API request $1, parameter $2 is not $3", [c, d, "a boolean"])
      } else {
        if ("string" != typeof e) return u("API request $1, parameter $2 is not $3", [c, d, "a string"]);
        if (1 !== b && !b.test(e)) return u("API request $1, parameter $2 is not $3", [c, d, "in the proper format"])
      } else if (a) return u("API request $1 missing parameter $2", [c, d]);
      return !1
    }
  }
  var C = /^[0-9]{15,20}$/;

  function D(a) {
    return w(a, {
      browser_fingerprint_id: B(!0, C),
      identity_id: B(!0, C),
      sdk: B(!0, 1),
      session_id: B(!0, C)
    })
  }
  var Na = {
      destination: "https://api.branch.io",
      endpoint: "/v1/open",
      method: "POST",
      a: {
        browser_fingerprint_id: B(!1, C),
        alternative_browser_fingerprint_id: B(!1, C),
        identity_id: B(!1, C),
        link_identifier: B(!1, 1),
        sdk: B(!1, 1),
        options: B(!1, 0),
        initial_referrer: B(!1, 1)
      }
    },
    Oa = {
      destination: "https://app.link",
      endpoint: "/_r",
      method: "GET",
      U: !0,
      a: {
        sdk: B(!0, 1),
        _t: B(!1, C),
        branch_key: B(!0, 1)
      }
    },
    Pa = {
      destination: "",
      endpoint: "",
      method: "GET",
      f: {
        link_url: B(!0, 1)
      },
      a: {
        click: B(!0, 1)
      }
    },
    Qa = {
      destination: "https://bnc.lt",
      endpoint: "/c",
      method: "POST",
      f: {
        link_url: B(!0, 1)
      },
      a: {
        sdk: B(!1, 1),
        phone: B(!0, 1)
      }
    },
    Ra = {
      destination: "https://api.branch.io",
      endpoint: "/v1/referralcode",
      method: "POST",
      a: D({
        amount: B(!0, 2),
        bucket: B(!1, 1),
        calculation_type: B(!0, 2),
        creation_source: B(!0, 2),
        expiration: B(!1, 1),
        location: B(!0, 2),
        prefix: B(!1, 1),
        type: B(!0, 1)
      })
    },
    Sa = {
      destination: "https://api.branch.io",
      endpoint: "/v1/referralcode",
      method: "POST",
      f: {
        code: B(!0, 1)
      },
      a: D({})
    },
    Ta = {
      destination: "https://api.branch.io",
      endpoint: "/v1/applycode",
      method: "POST",
      f: {
        code: B(!0, 1)
      },
      a: D({})
    },
    Ua = {
      destination: "https://api.branch.io",
      endpoint: "/v1/logout",
      method: "POST",
      a: D({
        session_id: B(!0, C)
      })
    },
    Va = {
      destination: "https://api.branch.io",
      endpoint: "/v1/profile",
      method: "POST",
      a: D({
        identity_id: B(!0, C),
        identity: B(!0, 1)
      })
    },
    Wa = {
      destination: "https://api.branch.io",
      endpoint: "/v1/referrals",
      method: "GET",
      f: {
        identity_id: B(!0, C)
      },
      a: D({})
    },
    Xa = {
      destination: "https://api.branch.io",
      endpoint: "/v1/credithistory",
      method: "GET",
      a: D({
        begin_after_id: B(!1, C),
        bucket: B(!1, 1),
        direction: B(!1, 2),
        length: B(!1, 2),
        link_click_id: B(!1, C)
      })
    },
    Ya = {
      destination: "https://api.branch.io",
      endpoint: "/v1/credits",
      method: "GET",
      a: D({
        branch_key: B(!0, 1),
        identity: B(!0, 1)
      })
    },
    Za = {
      destination: "https://api.branch.io",
      endpoint: "/v1/redeem",
      method: "POST",
      a: D({
        amount: B(!0, 2),
        bucket: B(!0, 1),
        identity_id: B(!0, C)
      })
    },
    $a = {
      destination: "https://api.branch.io",
      endpoint: "/v1/url",
      method: "POST",
      va: "obj",
      a: D({
        alias: B(!1, 1),
        campaign: B(!1, 1),
        channel: B(!1, 1),
        data: B(!1, 1),
        feature: B(!1, 1),
        identity_id: B(!0, C),
        stage: B(!1, 1),
        tags: B(!1, 3),
        type: B(!1, 2),
        source: B(!1, 1)
      })
    },
    ab = {
      destination: "https://api.branch.io",
      endpoint: "/v1/deepview",
      U: !0,
      method: "POST",
      a: D({
        campaign: B(!1, 1),
        _t: B(!1, C),
        channel: B(!1, 1),
        data: B(!0, 1),
        feature: B(!1, 1),
        link_click_id: B(!1, 1),
        open_app: B(!1, 4),
        append_deeplink_path: B(!1, 4),
        stage: B(!1, 1),
        tags: B(!1, 3),
        deepview_type: B(!0, 1),
        source: B(!0, 1)
      })
    },
    bb = {
      destination: "https://api.branch.io",
      endpoint: "/v1/has-app",
      method: "GET",
      a: {
        browser_fingerprint_id: B(!0, C)
      }
    },
    cb = {
      destination: "https://api.branch.io",
      endpoint: "/v1/event",
      method: "POST",
      a: D({
        event: B(!0, 1),
        metadata: B(!0, 0),
        initial_referrer: B(!1, 1)
      })
    },
    db = {
      destination: "https://api.branch.io",
      endpoint: "/v1/event",
      method: "POST",
      a: D({
        event: B(!0, 1),
        metadata: B(!1, 0),
        initial_referrer: B(!1, 1),
        commerce_data: B(!0, 0)
      })
    };

  function E(a) {
    for (var b = 0; b < a.length; b++) {
      var c = this[a[b]],
        c = "function" == typeof c ? c() : c;
      if (c.isEnabled()) return c.s = {}, c
    }
  }

  function G(a) {
    return "branch_session" === a || "branch_session_first" === a ? a : "BRANCH_WEBSDK_KEY" + a
  }

  function eb(a) {
    return "true" === a || "false" !== a && a
  }

  function fb(a) {
    var b;
    try {
      b = a && localStorage ? localStorage : sessionStorage
    } catch (c) {
      return {
        isEnabled: function() {
          return !1
        }
      }
    }
    return {
      getAll: function() {
        if ("undefined" == typeof b) return null;
        var a, c = null;
        for (a in b) a.indexOf("BRANCH_WEBSDK_KEY") || (null === c && (c = {}), c[a.replace("BRANCH_WEBSDK_KEY", "")] = eb(b.getItem(a)));
        return c
      },
      get: function(a, c) {
        return eb(c && localStorage ? localStorage.getItem(G(a)) : b.getItem(G(a)))
      },
      set: function(a, c, d) {
        d && localStorage ? localStorage.setItem(G(a), c) : b.setItem(G(a), c)
      },
      remove: function(a, c) {
        c && localStorage ? localStorage.removeItem(G(a)) : b.removeItem(G(a))
      },
      clear: function() {
        Object.keys(b).forEach(function(a) {
          a.indexOf("BRANCH_WEBSDK_KEY") || b.removeItem(a)
        })
      },
      isEnabled: function() {
        try {
          return b.setItem("test", ""), b.removeItem("test"), !0
        } catch (a) {
          return !1
        }
      }
    }
  }
  E.prototype.local = function() {
    return fb(!0)
  }, E.prototype.session = function() {
    return fb(!1)
  };

  function hb(a) {
    return {
      getAll: function() {
        for (var a = document.cookie.split(";"), b = {}, c = 0; c < a.length; c++) {
          var d = a[c].replace(" ", ""),
            d = d.substring(0, d.length); - 1 !== d.indexOf("BRANCH_WEBSDK_KEY") && (d = d.split("="), b[d[0].replace("BRANCH_WEBSDK_KEY", "")] = eb(d[1]))
        }
        return b
      },
      get: function(a) {
        a = G(a) + "=";
        for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
          var d = b[c],
            d = d.substring(1, d.length);
          if (!d.indexOf(a)) return eb(d.substring(a.length, d.length))
        }
        return null
      },
      set: function(b, c) {
        var d = G(b),
          e = "";
        a && (e = new Date, e.setTime(e.getTime() + 31536e6), e = "; branch_expiration_date=" + e.toGMTString() + "; expires=" + e.toGMTString()), document.cookie = d + "=" + c + e + "; path=/"
      },
      remove: function(a) {
        document.cookie = G(a) + "=; expires=; path=/";
      },
      clear: function() {
        function b(a) {
          document.cookie = a.substring(0, a.indexOf("=")) + "=;expires=-1;path=/"
        }
        for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
          var e = c[d],
            e = e.substring(1, e.length); - 1 !== e.indexOf("BRANCH_WEBSDK_KEY") && (a || -1 !== e.indexOf("branch_expiration_date=") ? a && 0 < e.indexOf("branch_expiration_date=") && b(e) : b(e))
        }
      },
      isEnabled: function() {
        return navigator.cookieEnabled
      }
    }
  }
  E.prototype.cookie = function() {
    return hb(!1)
  }, E.prototype.permcookie = function() {
    return hb(!0)
  }, E.prototype.pojo = {
    getAll: function() {
      return this.s
    },
    get: function(a) {
      return this.s[a] || null
    },
    set: function(a, b) {
      this.s[a] = b
    },
    remove: function(a) {
      delete this.s[a]
    },
    clear: function() {
      this.s = {}
    },
    isEnabled: function() {
      return !0
    }
  };

  function H(a, b) {
    try {
      return q(a.get(b ? "branch_session_first" : "branch_session", b)) || null
    } catch (c) {
      return null
    }
  }

  function ib(a, b, c) {
    a.set("branch_session", n(b)), c && a.set("branch_session_first", n(b), !0)
  }

  function jb(a, b) {
    if (b) {
      var c = H(a) || {},
        c = w(c, b);
      a.set("branch_session", n(c))
    }
  }

  function kb() {}
  kb.prototype.g = 0;

  function lb(a, b, c) {
    if ("undefined" == typeof b) return "";
    var d = [];
    if (b instanceof Array) {
      for (a = 0; a < b.length; a++) d.push(encodeURIComponent(c) + "=" + encodeURIComponent(b[a]));
      return d.join("&")
    }
    for (var e in b) b.hasOwnProperty(e) && (b[e] instanceof Array || "object" == typeof b[e] ? d.push(lb(a, b[e], c ? c + "." + e : e)) : d.push(encodeURIComponent(c ? c + "." + e : e) + "=" + encodeURIComponent(b[e])));
    return d.join("&")
  }

  function mb(a, b, c) {
    function d(a, c) {
      if ("undefined" == typeof c && (c = {}), a.branch_key && i.test(a.branch_key)) return c.branch_key = a.branch_key, c;
      if (a.app_id && h.test(a.app_id)) return c.app_id = a.app_id, c;
      throw Error(u("API request $1 missing parameter $2", [b.endpoint, "branch_key or app_id"]))
    }
    var e, f, g = b.destination + b.endpoint,
      h = /^[0-9]{15,20}$/,
      i = /key_(live|test)_[A-Za-z0-9]{32}/;
    if ("/v1/has-app" === b.endpoint) try {
      b.f = d(c, b.f)
    } catch (j) {
      return {
        error: j.message
      }
    }
    if ("undefined" != typeof b.f)
      for (e in b.f)
        if (b.f.hasOwnProperty(e)) {
          if (f = "function" == typeof b.f[e] ? b.f[e](b.endpoint, e, c[e]) : f) return {
            error: f
          };
          g += "/" + c[e]
        }
    var k = {};
    if ("undefined" != typeof b.a)
      for (e in b.a)
        if (b.a.hasOwnProperty(e)) {
          if (f = b.a[e](b.endpoint, e, c[e])) return {
            error: f
          };
          f = c[e], "undefined" != typeof f && "" !== f && null !== f && (k[e] = f)
        }
    if ("POST" === b.method || "/v1/credithistory" === b.endpoint) try {
      c = d(c, k)
    } catch (j) {
      return {
        error: j.message
      }
    }
    return "/v1/event" === b.endpoint && (k.metadata = t(k.metadata || {}), k.hasOwnProperty("commerce_data") && (k.commerce_data = t(k.commerce_data || {}))), "/v1/open" === b.endpoint && (k.options = t(k.options || {})), {
      data: lb(a, k, ""),
      url: g.replace(/^\//, "")
    }
  }

  function ob(a, b, c) {
    var d = document.createElement("script");
    d.type = "text/javascript", d.async = !0, d.src = a, a = document.getElementsByTagName("head"), !a || 1 > a.length ? "function" == typeof b && b() : (a[0].appendChild(d), "function" == typeof b && Da(d, "error", b), "function" == typeof c && Da(d, "load", c))
  }

  function pb(a, b, c, d, e) {
    var f = "branch_callback__" + a.g++;
    a = 0 <= b.indexOf("branch.io") ? "&data=" : "&post_data=", c = "POST" === d ? encodeURIComponent(Ca(n(c))) : "";
    var g = window.setTimeout(function() {
      window[f] = function() {}, e(Error("Request timed out"), null, 504)
    }, 5e3);
    window[f] = function(a) {
      window.clearTimeout(g), e(null, a)
    }, ob(b + (0 > b.indexOf("?") ? "?" : "") + (c ? a + c : "") + (0 <= b.indexOf("/c/") ? "&click=1" : "") + "&callback=" + f, function() {
      e(Error("Request blocked by client, probably adblock"), null)
    }, function() {
      try {
        "function" == typeof this.remove ? this.remove() : this.parentNode.removeChild(this)
      } catch (a) {}
      delete window[f]
    })
  }

  function qb(a, b, c, d, e, f, g) {
    var h = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    h.ontimeout = function() {
      f(Error("Request timed out"), null, 504)
    }, h.onerror = function(a) {
      f(Error(a.error || "Error in API: " + h.status), null, h.status)
    }, h.onreadystatechange = function() {
      var a;
      if (4 === h.readyState)
        if (200 === h.status) {
          if (g) a = h.responseText;
          else try {
            a = q(h.responseText)
          } catch (b) {
            a = {}
          }
          f(null, a, h.status)
        } else 402 === h.status ? f(Error("Not enough credits to redeem."), null, h.status) : "4" !== h.status.toString().substring(0, 1) && "5" !== h.status.toString().substring(0, 1) || f(Error("Error in API: " + h.status), null, h.status)
    };
    try {
      h.open(d, b, !0), h.timeout = 5e3, h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h.send(c)
    } catch (i) {
      e.set("use_jsonp", !0), pb(a, b, c, d, f)
    }
  }

  function rb(a, b, c, d, e) {
    function f() {
      d.get("use_jsonp") || b.U ? pb(a, i, c, b.method, g) : qb(a, i, j, b.method, d, g)
    }

    function g(a, b, c) {
      a && 0 < k && "5" === (c || "").toString().substring(0, 1) ? (k--, window.setTimeout(function() {
        f()
      }, 200)) : e(a, b)
    }
    var h = mb(a, b, c);
    if (h.error) return e(Error(t({
      message: h.error,
      endpoint: b.endpoint,
      data: c
    })));
    var i, j = "";
    "GET" === b.method ? i = h.url + "?" + h.data : (i = h.url, j = h.data);
    var k = 2;
    f()
  }

  function I(a) {
    a && a.parentNode.removeChild(a)
  }

  function sb(a, b) {
    a && !a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)")) && (a.className += " " + b)
  }

  function tb(a) {
    var b = document.body;
    b && b.className.match(new RegExp("(\\s|^)" + a + "(\\s|$)")) && (b.className = b.className.replace(new RegExp("(\\s|^)" + a + "(\\s|$)"), " "))
  }

  function ub(a) {
    var b = new Date;
    return b.setDate(b.getDate() + a)
  }

  function vb(a) {
    return document.body.currentStyle ? document.body.currentStyle[Ba(a)] : window.getComputedStyle(document.body).getPropertyValue(a)
  }

  function wb(a) {
    function b(a) {
      function c() {
        return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100
      }

      function d() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 100
      }
      if (!a) return 0;
      var e = a.replace(/[0-9,\.]/g, "");
      a = a.match(/\d+/g);
      var f = parseInt(0 < a.length ? a[0] : "0", 10);
      return parseInt({
        px: function(a) {
          return a
        },
        em: function(a) {
          return document.body.currentStyle ? a * b(document.body.currentStyle.fontSize) : a * parseFloat(window.getComputedStyle(document.body).fontSize)
        },
        rem: function(a) {
          return document.documentElement.currentStyle ? a * b(document.documentElement.currentStyle.fontSize) : a * parseFloat(window.getComputedStyle(document.documentElement).fontSize)
        },
        vw: function(a) {
          return a * d()
        },
        vh: function(a) {
          return a * c()
        },
        vmin: function(a) {
          return a * Math.min(c(), d())
        },
        vmax: function(a) {
          return a * Math.max(c(), d())
        },
        "%": function() {
          return document.body.clientWidth / 100 * f
        }
      }[e](f), 10)
    }
    return (b("76px") + b(a)).toString() + "px"
  }

  function xb(a, b) {
    var c = a.get("hideBanner", !0);
    if (b.ia && navigator && Number(navigator.doNotTrack)) return !1;
    try {
      "string" == typeof c && (c = q(c))
    } catch (d) {
      c = !1
    }
    var c = "number" == typeof c ? new Date >= new Date(c) : !c,
      e = b.F;
    return "number" == typeof e && (e = !1), !document.getElementById("branch-banner") && !document.getElementById("branch-banner-iframe") && (c || e) && (b.ka && !x() || b.I && "android" === x() || b.la && "ipad" === x() || b.M && "ios" === x() || b.J && "blackberry" === x() || b.L && "windows_phone" === x() || b.K && "kindle" === x())
  }

  function yb(a, b) {
    return "#branch-banner-iframe { position: " + ("top" !== b || a ? "fixed" : "absolute") + "; }\n"
  }

  function zb(a, b) {
    var c = ".branch-banner-is-active { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner { width:100%; z-index: 99999; font-family: Helvetica Neue, Sans-serif; -webkit-font-smoothing: antialiased; -webkit-user-select: none; -moz-user-select: none; user-select: none; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n#branch-banner .button{ border: 1px solid " + (a.buttonBorderColor || ("dark" === a.theme ? "transparent" : "#ccc")) + "; background: " + (a.buttonBackgroundColor || "#fff") + "; color: " + (a.buttonFontColor || "#000") + "; cursor: pointer; margin-top: 0px; font-size: 14px; display: inline-block; margin-left: 5px; font-weight: 400; text-decoration: none;  border-radius: 4px; padding: 6px 12px; transition: all .2s ease;}\n#branch-banner .button:hover {  border: 1px solid " + (a.buttonBorderColorHover || ("dark" === a.theme ? "transparent" : "#BABABA")) + "; background: " + (a.buttonBackgroundColorHover || "#E0E0E0") + "; color: " + (a.buttonFontColorHover || "#000") + ";}\n#branch-banner .button:focus { outline: none; }\n#branch-banner * { margin-right: 4px; position: relative; line-height: 1.2em; }\n#branch-banner-close { font-weight: 400; cursor: pointer; float: left; z-index: 2;padding: 0 5px 0 5px; margin-right: 0; }\n#branch-banner .content { width:100%; overflow: hidden; height: 76px; background: rgba(255, 255, 255, 0.95); color: #333; " + ("top" === a.position ? "border-bottom" : "border-top") + ': 1px solid #ddd; }\n#branch-banner-close { color: #000; font-size: 24px; top: 14px; opacity: .5; transition: opacity .3s ease; }\n#branch-banner-close:hover { opacity: 1; }\n#branch-banner .title { font-size: 18px; font-weight:bold; color: #555; }\n#branch-banner .description { font-size: 12px; font-weight: normal; color: #777; max-height: 30px; overflow: hidden; }\n#branch-banner .icon { float: left; padding-bottom: 40px; margin-right: 10px; margin-left: 5px; }\n#branch-banner .icon img { width: 63px; height: 63px; margin-right: 0; }\n#branch-banner .reviews { font-size:13px; margin: 1px 0 3px 0; color: #777; }\n#branch-banner .reviews .star { display:inline-block; position: relative; margin-right:0; }\n#branch-banner .reviews .star span { display: inline-block; margin-right: 0; color: #555; position: absolute; top: 0; left: 0; }\n#branch-banner .reviews .review-count { font-size:10px; }\n#branch-banner .reviews .star .half { width: 50%; overflow: hidden; display: block; }\n#branch-banner .content .left { padding: 6px 5px 6px 5px; }\n#branch-banner .vertically-align-middle { top: 50%; transform: translateY(-50%); -webkit-transform: translateY(-50%); -ms-transform: translateY(-50%); }\n#branch-banner .details > * { display: block; }\n#branch-banner .content .left { height: 63px; }\n#branch-banner .content .right { float: right; height: 63px; margin-bottom: 50px; padding-top: 22px; z-index: 1; }\n#branch-banner .right > div { float: left; }\n#branch-banner-action { top: 17px; }\n#branch-banner .content:after { content: ""; position: absolute; left: 0; right: 0; top: 100%; height: 1px; background: rgba(0, 0, 0, 0.2); }\n#branch-banner .theme-dark.content { background: rgba(51, 51, 51, 0.95); }\n#branch-banner .theme-dark #branch-banner-close{ color: #fff; text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .details { text-shadow: 0 1px 1px rgba(0, 0, 0, .15); }\n#branch-banner .theme-dark .title { color: #fff; }\n#branch-banner .theme-dark .description { color: #fff; }\n#branch-banner .theme-dark .reviews { color: #888; }\n#branch-banner .theme-dark .reviews .star span{ color: #fff; }\n#branch-banner .theme-dark .reviews .review-count{ color: #fff; }\n',
      d = x();
    "ios" !== d && "ipad" !== d || !a.M ? "android" === d && a.I ? c += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n#branch-banner #branch-banner-close,#branch-banner .theme-dark #branch-banner-close { height:17px; width: 17px; text-align: center; font-size: 15px; top: 24px;  border-radius:14px; border:0; line-height:14px; color:#b1b1b3; background:#efefef; padding: 0; opacity: 1; }\n#branch-banner .button { top: 0; text-decoration:none; border-bottom: 3px solid #A4C639; padding: 0 10px; height: 24px; line-height: 24px; text-align: center; color: #fff; margin-top: 2px;  font-weight: bold; background-color: #A4C639; border-radius: 5px; }\n#branch-banner .button:hover { border-bottom:3px solid #8c9c29; background-color: #c1d739; }\n" : "blackberry" === d && a.J ? c += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : "windows_phone" === d && a.L ? c += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : "kindle" === d && a.K ? c += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n" : (c += "#branch-banner { position: fixed; min-width: 600px; }\n#branch-sms-block * { vertical-align: bottom; font-size: 15px; }\n#branch-sms-block { display: inline-block; }\n#branch-banner input{ border: 1px solid #ccc;  font-weight: 400;  border-radius: 4px; height: 30px; padding: 5px 7px 4px; width: 145px; font-size: 14px;}\n#branch-banner input:focus { outline: none; }\n#branch-banner input.error { color: rgb(194, 0, 0); border-color: rgb(194, 0, 0); }\n#branch-banner .branch-icon-wrapper { width:25px; height: 25px; vertical-align: middle; display: inline-block; margin-top: -18px; }\n@keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n@-webkit-keyframes branch-spinner { 0% { transform: rotate(0deg); -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); } 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); } }\n#branch-spinner { -webkit-animation: branch-spinner 1s ease-in-out infinite; animation: branch-spinner 1s ease-in-out infinite; transition: all 0.7s ease-in-out; border:2px solid #ddd; border-bottom-color:#428bca; width:80%; height:80%; border-radius:50%; -webkit-font-smoothing: antialiased !important; }\n#branch-banner .theme-dark input { border-color: transparent; }\n", c = window.ActiveXObject ? c + "#branch-banner .checkmark { color: #428bca; font-size: 22px; }\n" : c + "#branch-banner .checkmark { stroke: #428bca; stroke-dashoffset: 745.74853515625; stroke-dasharray: 745.74853515625; -webkit-animation: dash 2s ease-out forwards; animation: dash 2s ease-out forwards; }\n@-webkit-keyframes dash { 0% { stroke-dashoffset: 745.748535 15625; } 100% { stroke-dashoffset: 0; } }\n@keyframes dash { 0% { stroke-dashoffset: 745.74853515625; } 100% { stroke-dashoffset: 0; } }\n") : c += "#branch-banner { position: absolute; }\n#branch-banner .content .left .details .title { font-size: 12px; }\n#branch-mobile-action { white-space: nowrap; }\n#branch-banner .content .left .details .description { font-size: 11px; font-weight: normal; }\n@media only screen and (min-device-width: 320px) and (max-device-width: 350px) { #branch-banner .content .right { max-width: 120px; } }\n@media only screen and (min-device-width: 351px) and (max-device-width: 400px) and (orientation: landscape) { #branch-banner .content .right { max-width: 150px; } }\n@media only screen and (min-device-width: 401px) and (max-device-width: 480px) and (orientation: landscape) { #branch-banner .content .right { max-width: 180px; } }\n", c += a.$, a.w && (c += "body { margin: 0; }\n", d = document.createElement("style"), d.type = "text/css", d.id = "branch-iframe-css", d.innerHTML = "body { -webkit-transition: all 0.375s ease; transition: all 00.375s ease; }\n#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: 76px; z-index: 99999; -webkit-transition: all 0.25s ease; transition: all 00.25s ease; }\n" + (x() ? yb(a.ea, a.position) : yb(a.aa, a.position)), (document.head || document.getElementsByTagName("head")[0]).appendChild(d)), d = document.createElement("style"), d.type = "text/css", d.id = "branch-css", d.innerHTML = c, c = a.w ? b.contentWindow.document : document, (c = c.head || c.getElementsByTagName("head")[0]) && "function" == typeof c.appendChild && c.appendChild(d), "top" === a.position ? b.style.top = "-76px" : "bottom" === a.position && (b.style.bottom = "-76px")
  }

  function Ab(a, b) {
    var c;
    if (a.u || a.G) {
      if (a.u) {
        c = "";
        for (var d = 0; 5 > d; d++) c += '<span class="star"><svg class="star" fill="#555555" height="12" viewBox="3 2 20 19" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="star">☆</span></foreignObject></svg>', a.u > d && (c += d + 1 > a.u && a.u % 1 ? '<span class="half"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 0h24v24H0V0z" id="a"/></defs><clipPath id="b"><use overflow="visible" xlink:href="#a"/></clipPath><path clip-path="url(#b)" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg><foreignObject display="none"><span class="half">★</span></foreignObject></span>' : '<span class="full"><svg fill="#555555" height="12" viewBox="3 2 20 19" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/><path d="M0 0h24v24H0z" fill="none"/><foreignObject display="none"><span class="full">★</span></foreignObject></svg> </span>'), c += "</span>";
        c = '<span class="stars">' + c + "</span>"
      } else c = "";
      c = '<div class="reviews">' + c + (a.G ? '<span class="review-count">' + a.G + "</span>" : "") + "</div>"
    } else c = "";
    return '<div class="content' + (a.theme ? " theme-" + a.theme : "") + '"><div class="right">' + b + '</div><div class="left">' + (a.ba ? "" : '<div id="branch-banner-close" class="branch-animation" aria-label="Close">&times;</div>') + '<div class="icon"><img src="' + a.icon + '" alt="Application icon"></div><div class="details vertically-align-middle"><div class="title">' + a.title + "</div>" + c + '<div class="description">' + a.description + "</div></div></div></div>"
  }

  function Bb(a, b) {
    var c = '<div id="branch-sms-form-container">' + (x() ? '<a id="branch-mobile-action" class="button" href="#" target="_parent">' + ((H(b) || {}).has_app ? a.fa : a.ca) + "</a>" : '<div class="branch-icon-wrapper" id="branch-loader-wrapper" style="opacity: 0;"><div id="branch-spinner"></div></div><div id="branch-sms-block"><form id="sms-form"><input type="phone" aria-label="Enter phone number" class="branch-animation" name="branch-sms-phone" id="branch-sms-phone" placeholder="' + a.ha + '"><button type="submit" id="branch-sms-send" class="branch-animation button">' + a.ja + "</button></form></div>") + "</div>";
    if (a.w) {
      var d = document.createElement("iframe");
      d.src = "about:blank", d.style.overflow = "hidden", d.scrolling = "no", d.id = "branch-banner-iframe", d.className = "branch-animation", document.body.appendChild(d);
      var e = x(),
        c = '<html><head></head><body class="' + ("ios" === e || "ipad" === e ? "branch-banner-ios" : "android" === e ? "branch-banner-android" : "branch-banner-desktop") + '"><div id="branch-banner" class="branch-animation">' + Ab(a, c) + "</body></html>";
      d.contentWindow.document.open(), d.contentWindow.document.write(c), d.contentWindow.document.close()
    } else d = document.createElement("div"), d.id = "branch-banner", d.className = "branch-animation", d.innerHTML = Ab(a, c), document.body.appendChild(d);
    return c = d
  }

  function Cb(a, b, c, d) {
    function e() {
      g(), j.style.background = "#FFD4D4", i.className = "error", setTimeout(function() {
        j.style.background = "#FFFFFF", i.className = ""
      }, 2e3)
    }

    function f() {
      h = a.createElement("div"), h.className = "branch-icon-wrapper", h.id = "branch-checkmark", h.style = "opacity: 0;", h.innerHTML = window.ActiveXObject ? '<span class="checkmark">&#x2713;</span>' : '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 98.5 98.5" enable-background="new 0 0 98.5 98.5" xml:space="preserve"><path class="checkmark" fill="none" stroke-width="8" stroke-miterlimit="10" d="M81.7,17.8C73.5,9.3,62,4,49.2,4C24.3,4,4,24.3,4,49.2s20.3,45.2,45.2,45.2s45.2-20.3,45.2-45.2c0-8.6-2.4-16.6-6.5-23.4l0,0L45.6,68.2L24.7,47.3"/></svg>', l.appendChild(h), j.style.opacity = "0", i.style.opacity = "0", k.style.opacity = "0", setTimeout(function() {
        h.style.opacity = "1"
      }, 20), i.value = ""
    }

    function g() {
      j.removeAttribute("disabled"), i.removeAttribute("disabled"), j.style.opacity = "1", i.style.opacity = "1", k.style.opacity = "0"
    }
    var h, i = a.getElementById("branch-sms-phone"),
      j = a.getElementById("branch-sms-send"),
      k = a.getElementById("branch-loader-wrapper"),
      l = a.getElementById("branch-sms-form-container");
    if (i) {
      var m = i.value;
      /^\d{7,}$/.test(m.replace(/[\s()+\-\.]|ext/gi, "")) ? (J(b, "willSendBannerSMS"), j.setAttribute("disabled", ""), i.setAttribute("disabled", ""), j.style.opacity = ".4", i.style.opacity = ".4", k.style.opacity = "1", i.className = "", b.sendSMS(m, d, c, function(a) {
        a ? (J(b, "sendBannerSMSError"), e()) : (J(b, "didSendBannerSMS"), f(), setTimeout(function() {
          l.removeChild(h), g()
        }, 3e3))
      })) : e()
    }
  }

  function Db(a, b, c, d) {
    function e(a, c) {
      "function" == typeof a && (c = a, a = {}), a = a || {}, "top" === b.position ? g.style.top = "-76px" : "bottom" === b.position && (g.style.bottom = "-76px"), "number" == typeof b.F ? d.set("hideBanner", ub(b.F), !0) : d.set("hideBanner", !0, !0), a.T ? ("top" === b.position ? document.body.style.marginTop = j : "bottom" === b.position && (document.body.style.marginBottom = l), tb("branch-banner-is-active"), I(g), I(document.getElementById("branch-css")), c()) : (setTimeout(function() {
        I(g), I(document.getElementById("branch-css")), c()
      }, 270), setTimeout(function() {
        "top" === b.position ? document.body.style.marginTop = j : "bottom" === b.position && (document.body.style.marginBottom = l), tb("branch-banner-is-active")
      }, 20))
    }

    function f() {
      "top" === b.position ? g.style.top = "0" : "bottom" === b.position && (g.style.bottom = "0"), J(a, "didShowBanner")
    }
    if (!xb(d, b)) return J(a, "willNotShowBanner"), null;
    J(a, "willShowBanner");
    var g = Bb(b, d);
    zb(b, g), c.channel = c.channel || "app banner";
    var h = b.w ? g.contentWindow.document : document;
    if (x()) {
      b.open_app = b.ga, b.append_deeplink_path = b.Z, b.make_new_link = b.da, b.deepview_type = "banner", a.deepview(c, b);
      var i = h.getElementById("branch-mobile-action");
      i && (i.onclick = function(b) {
        b.preventDefault(), a.deepviewCta()
      })
    } else h.getElementById("sms-form") ? h.getElementById("sms-form").addEventListener("submit", function(d) {
      d.preventDefault(), Cb(h, a, b, c)
    }) : g.onload = function() {
      h = g.contentWindow.document, h.getElementById("sms-form") && h.getElementById("sms-form").addEventListener("submit", function(d) {
        d.preventDefault(), Cb(h, a, b, c)
      })
    };
    var i = vb("margin-top"),
      j = document.body.style.marginTop,
      k = vb("margin-bottom"),
      l = document.body.style.marginBottom,
      m = h.getElementById("branch-banner-close");
    return m && (m.onclick = function(b) {
      b.preventDefault(), J(a, "willCloseBanner"), e({}, function() {
        J(a, "didCloseBanner")
      })
    }), sb(document.body, "branch-banner-is-active"), "top" === b.position ? document.body.style.marginTop = wb(i) : "bottom" === b.position && (document.body.style.marginBottom = wb(k)), b.T ? f() : setTimeout(f, 20), e
  }
  var Eb, K = "top",
    L = "absolute",
    M = "76px",
    N = !1,
    Fb = !1,
    O = [],
    Gb = window.innerHeight,
    Hb = window.innerWidth;
  window.innerHeight < window.innerWidth && (Gb = window.innerWidth, Hb = window.innerHeight);
  var Ib = 0,
    Jb = 0,
    Kb = /<script type="application\/json">((.|\s)*?)<\/script>/,
    Lb = /<script type="text\/javascript">((.|\s)*?)<\/script>/,
    Mb = /<style type="text\/css" id="branch-css">((.|\s)*?)<\/style>/,
    Nb = /#branch-banner-spacer {((.|\s)*?)}/,
    Ob = /margin-bottom: (.*?);/,
    Pb = /<script id="journeyLinkData" type="application\/json">((.|\s)*?)<\/script>/,
    P = null,
    Qb = null,
    Rb = !1,
    Q = !1,
    Sb = !1,
    R = !1,
    Tb = !1,
    Ub = "",
    S = [],
    T = null;

  function Vb(a) {
    if (a = a.match(Kb)) return q(a[1])
  }

  function Wb() {
    var a = document.createElement("style");
    a.type = "text/css", a.id = "branch-iframe-css", Ib = vb("margin-top");
    var b = +Ib.slice(0, -2);
    Jb = vb("margin-bottom");
    var c = +Jb.slice(0, -2),
      d = +M.slice(0, -2);
    "top" === K ? document.body.style.marginTop = (+d + b).toString() + "px" : "bottom" === K && (document.body.style.marginBottom = (+d + c).toString() + "px"), 0 < O.length && O.forEach(function(a) {
      var b, c = window.getComputedStyle(a);
      c && (b = N && "fixed" === c.getPropertyValue("position")), b || (a.style.marginTop = M)
    }), "top" === Ub && Ub !== K && Tb && S && 0 < S.length && S.forEach(function(a) {
      a.style.marginTop = 0
    }), Tb = !1, Ub = "", S = [], R = !1, a.innerHTML = Xb(), document.head.appendChild(a)
  }

  function Xb() {
    var a = "",
      b = "";
    return document.body.style.transition = "", document.getElementById("branch-banner-iframe") && (document.getElementById("branch-banner-iframe").style.transition = ""), Sb || (a = "body { -webkit-transition: all 0.375s ease; }\n", document.body.style.transition = "all 00.375s ease", b = "-webkit-transition: all 0.25s ease; transition: all 00.25s ease;"), (a ? a : "") + ("#branch-banner-iframe { box-shadow: 0 0 5px rgba(0, 0, 0, .35); width: 1px; min-width:100%; left: 0; right: 0; border: 0; height: " + M + "; z-index: 99999; " + b + " }\n#branch-banner-iframe { position: " + L + "; }\n@media only screen and (orientation: landscape) { body { " + ("top" === K ? "margin-top: " : "margin-bottom: ") + (N ? Hb + "px" : M) + "; }\n#branch-banner-iframe { height: " + (N ? Hb + "px" : M) + "; }")
  }

  function Yb(a) {
    sb(document.body, "branch-banner-is-active"), N && "fixed" === L && sb(document.body, "branch-banner-no-scroll"), setTimeout(function() {
      "top" === K ? a.style.top = "0" : "bottom" === K && (a.style.bottom = "0"), J(P, "didShowJourney", T), Rb = !0
    }, 20)
  }

  function Zb(a) {
    var b = 7;
    return (a = a.match(Kb)) && (a = q(a[1]) || {}, "number" == typeof a.dismissPeriod && (b = a.dismissPeriod)), -1 === b || ub(b)
  }

  function $b(a, b, c, d, e) {
    if (Qb = d, c && d) {
      var f = d.contentWindow.document;
      Array.prototype.forEach.call(f.querySelectorAll("#branch-mobile-action"), function(a) {
        a.addEventListener("click", function() {
          J(P, "didClickJourneyCTA", T), R = !0, c(), ac(d)
        })
      });
      var g = f.querySelectorAll(".branch-banner-continue");
      Array.prototype.forEach.call(g, function(c) {
        c.addEventListener("click", function() {
          J(P, "didClickJourneyContinue", T), R = !0, ac(d), b.set("hideBanner" + a.id, e, !0)
        })
      }), g = f.querySelectorAll(".branch-banner-close"), Array.prototype.forEach.call(g, function(c) {
        c.addEventListener("click", function() {
          J(P, "didClickJourneyClose", T), R = !0, ac(d), b.set("hideBanner" + a.id, e, !0)
        })
      })
    }
  }

  function ac(a) {
    if (Sb && !Q) {
      document.body.style.transition = "all 00.375s ease", document.getElementById("branch-banner-iframe").style.transition = "all 00.25s ease";
      var b = document.getElementById("branch-iframe-css").innerHTML + "\n";
      document.getElementById("branch-iframe-css").innerHTML = "", document.getElementById("branch-iframe-css").innerHTML = b + "body { -webkit-transition: all 0.375s ease; }\n#branch-banner-iframe { -webkit-transition: all 0.25s ease; }\n"
    }
    "top" === K ? a.style.top = "-" + M : "bottom" === K && (a.style.bottom = "-" + M), J(P, "willCloseJourney", T), setTimeout(function() {
      I(a), I(document.getElementById("branch-css")), I(document.getElementById("branch-iframe-css")), I(document.getElementById("branch-journey-cta")), (!Q || R) && O && 0 < O.length ? O.forEach(function(a) {
        a.style.marginTop = 0
      }) : (Tb = Q, Ub = K, S = O), "top" === K ? document.body.style.marginTop = Ib : "bottom" === K && (document.body.style.marginBottom = Jb), tb("branch-banner-is-active"), tb("branch-banner-no-scroll"), J(P, "didCloseJourney", T), Rb = !1
    }, Q ? 0 : 270)
  }
  var bc = 1;

  function cc(a, b) {
    var c = {
        banner_id: Eb
      },
      d = a.match(Pb);
    if (d) {
      var e = d[1],
        d = "";
      try {
        d = q(e)
      } catch (f) {}
      if (d) {
        var e = d.journey_link_data,
          g = ["browser_fingerprint_id", "app_id", "source", "open_app", "link_click_id"];
        if (e && "object" == typeof e && !Array.isArray(e) && 0 < Object.keys(e).length && g && Array.isArray(g) && 0 < g.length)
          for (var h in e) e.hasOwnProperty(h) && -1 < g.indexOf(h) && delete e[h];
        c = w(c, d)
      }
    }
    if (T = c, J(P, "willShowJourney", T), c = b ? "OPEN" : "GET", h = a, (d = Vb(h)) && d.bannerHeight && d.position && d.sticky ? (M = d.bannerHeight, K = d.position, L = d.sticky) : (h = h.match(Nb)) ? (K = "top", (h = h[1].match(Ob)) && (M = h[1]), L = "absolute") : (K = "bottom", L = "fixed"), -1 === M.indexOf("vh") && -1 === M.indexOf("%") || (h = M.indexOf("vh") ? M.slice(0, -2) : M.slice(0, -1), M = h / 100 * Gb + "px", 100 > h ? Fb = !0 : N = !0), h = Vb(a)) {
      var i;
      if (b && h && h.ctaText && h.ctaText.has_app ? i = h.ctaText.has_app : h && h.ctaText && h.ctaText.no_app && (i = h.ctaText.no_app), c = i, O = [], h && h.injectorSelector && (i = document.querySelectorAll(h.injectorSelector)))
        for (h = 0; h < i.length; h++) O.push(i[h].parentElement)
    }
    i = (i = a.match(Mb)) ? i[1] : void 0, (h = a.match(Lb)) && (h = h[1], d = document.createElement("script"), d.id = "branch-journey-cta", d.innerHTML = h, document.body.appendChild(d)), h = a;
    var d = h.match(Kb),
      e = h.match(Lb),
      g = h.match(Mb),
      j = h.match(Pb);
    if (d && (h = h.replace(Kb, "")), e && (h = h.replace(Lb, "")), g && (h = h.replace(Mb, "")), j && (h = h.replace(Pb, "")), a = h, h = document.createElement("iframe"), h.src = "about:blank", h.style.overflow = "hidden", h.scrolling = "no", h.id = "branch-banner-iframe", h.className = "branch-animation", document.body.appendChild(h), d = x(), d = '<html><head></head><body class="' + ("ios" === d || "ipad" === d ? "branch-banner-ios" : "android" === d ? "branch-banner-android" : "branch-banner-desktop") + '">' + a + "</body></html>", h.contentWindow.document.open(), h.contentWindow.document.write(d), h.contentWindow.document.close(), Wb(), d = document.createElement("style"), d.type = "text/css", d.id = "branch-css", d.innerHTML = i, i = h.contentWindow.document, i.head.appendChild(d), Fb || N) {
      var k = i.getElementsByClassName("branch-banner-content")[0];
      k && (k.style.height = M)
    }
    "top" === K ? h.style.top = "-" + M : "bottom" === K && (h.style.bottom = "-" + M);
    try {
      var k = i.getElementsByClassName("branch-banner-content")[0],
        l = window.getComputedStyle(k).getPropertyValue("background-color").split(", ");
      l[3] && !parseFloat(l[3]) && (h.style.boxShadow = "none")
    } catch (f) {}
    return h.contentWindow.document.getElementById("branch-mobile-action").innerHTML = c, Yb(h), h
  }

  function dc(a, b, c, d, e, f, g) {
    if (!(document.getElementById("branch-banner") || document.getElementById("branch-banner-iframe") || document.getElementById("branch-banner-container"))) {
      P = g;
      var h = null,
        i = null;
      c = c || {}, c.feature = "journeys", c = wa(c), (g = document.getElementById("branch-iframe-css")) && g.parentElement.removeChild(g);
      var j = document.createElement("div");
      if (j.id = "branch-banner", document.body.insertBefore(j, null), sb(j, "branch-banner-is-active"), b.html) cc(b.html, e);
      else if (b.url) {
        var k = "branch_view_callback__" + bc++;
        c = encodeURIComponent(Ca(n(c))), g = b.url + "&callback=" + k, g += "&_lan=" + (P.ma || Ha()), qb(a, g + ("&data=" + c), {}, "GET", {}, function(a, c) {
          var g = !1;
          if (!a && c) {
            var l = f ? 0 : Zb(c),
              m = window.setTimeout(function() {
                window[k] = function() {}
              }, 5e3);
            if (window[k] = function(a) {
                window.clearTimeout(m), g || (i = a, $b(b, d, i, h, l))
              }, h = cc(c, e), null === h) return void(g = !0);
            $b(b, d, i, h, l)
          }
          document.body.removeChild(j)
        }, !0)
      }
    }
  }

  function ec(a, b) {
    var c = b.b.get("hideBanner" + a.id, !0);
    return !0 === c || c > Date.now() || (b.b.remove("hideBanner" + a.id, !0), !1)
  }

  function fc(a, b, c, d, e) {
    e.m = !!c.branch_view_enabled, e.b.set("branch_view_enabled", e.m);
    var f = null,
      g = null,
      h = null,
      i = null,
      j = null,
      k = !1,
      l = !1,
      m = !1;
    d && (f = d.branch_view_id || null, g = d.no_journeys || null,
      e.ma = d.user_language || Ha(), Sb = d.disable_entry_animation || !1, Q = d.disable_exit_animation || !1, l = d.make_new_link || !1, m = d.open_app || !1), (f = f || va() || null) && x() && (k = !0, i = {
      id: f,
      ua: -1,
      url: "https://api.branch.io/v1/branchview/" + a + "/" + f + "?_a=audience_rule_id&_t=" + b.D
    }), !i && c.hasOwnProperty("branch_view_data") && (i = c.branch_view_data, h = ec(i, e)), !i || h || g ? J(e, "willNotShowJourney") : (Eb = i.id, e.renderQueue(function() {
      var a = l,
        c = m,
        d = e.A || {};
      d.data || (d.data = {}), a = a ? null : xa(gc(e)), d.data = w(Ga(), d.data), d.data = w(ua(H(e.b) || {}), d.data), d.data = a ? w({
        link_click_id: a
      }, d.data) : d.data, j = d = w({
        open_app: c
      }, d), dc(e.N, i, j, e.b, b.has_app, k, e)
    }))
  }
  var V = {
      androidAppIndexingTagsPresent: !1,
      iosAppIndexingTagsPresent: !1,
      androidDetailsComplete: !1,
      iosDetailsComplete: !1
    },
    W = {};

  function hc(a) {
    var b;
    "android" === a && V.androidDetailsComplete && (b = "android-app://" + W.androidPackageName + "/" + W.androidURL, b = ic(b), jc(b)), "ios" === a && V.iosDetailsComplete && (b = "ios-app://" + W.iosAppId + "/" + W.iosURL, b = ic(b), jc(b))
  }

  function ic(a) {
    var b = {
      "~channel": "Firebase App Indexing",
      "~feature": "Auto App Indexing",
      $canonical_url: String(window.location)
    };
    if ("object" == typeof W.data)
      for (var c in W.data) W.data.hasOwnProperty(c) && !b.hasOwnProperty(c) && (b[c] = W.data[c]);
    return a + (-1 < a.indexOf("?") ? "&" : "?") + "link_click_id=a-" + btoa(t(b))
  }

  function jc(a) {
    var b = document.createElement("link");
    b.setAttribute("rel", "alternate"), b.setAttribute("href", a), document.head.appendChild(b)
  }

  function kc(a) {
    "android" === a && "string" == typeof W.androidPackageName && "string" == typeof W.androidURL && (V.androidDetailsComplete = !0, hc("android")), "ios" === a && "string" == typeof W.iosAppId && "string" == typeof W.iosURL && (V.iosDetailsComplete = !0, hc("ios"))
  }

  function lc(a) {
    for (var b = document.getElementsByTagName("meta"), c = 0; c < b.length; c++) {
      var d = b[c];
      "ios" === a && "al:ios:app_store_id" === d.getAttribute("property") && (W.iosAppId = d.getAttribute("content")), "ios" === a && "al:ios:url" === d.getAttribute("property") && (W.iosURL = d.getAttribute("content").replace("://", "/")), "android" === a && "al:android:package" === d.getAttribute("property") && (W.androidPackageName = d.getAttribute("content")), "android" === a && "al:android:url" === d.getAttribute("property") && (W.androidURL = d.getAttribute("content").replace("://", "/"))
    }
    kc(a)
  }
  var mc;

  function X(a, b, c) {
    return function() {
      var d, e, f = this,
        g = arguments[arguments.length - 1];
      a && "function" == typeof g ? (d = Array.prototype.slice.call(arguments, 0, arguments.length - 1) || [], e = g) : (e = function() {}, d = Array.prototype.slice.call(arguments)), f.X(function(g) {
        function h(b, c) {
          try {
            if (b && !a) throw b;
            1 === a ? e(b) : 2 === a && e(b, c)
          } finally {
            g()
          }
        }
        if (!c) {
          if (1 === f.j) return h(Error(u("Branch SDK initialization pending and a Branch method was called outside of the queue order")), null);
          if (2 === f.j) return h(Error(u("Branch SDK initialization failed, so further methods cannot be called", f.h, f.l)), null);
          if (0 === f.j || !f.j) return h(Error(u("Branch SDK not initialized")), null)
        }
        d.unshift(h), b.apply(f, d)
      })
    }
  }

  function Y() {
    return this instanceof Y ? (this.X = sa(), this.b = new E(["session", "cookie", "pojo"]), this.N = new kb, this.g = [], this.P = "web2.26.1", this.h = this.j = 0, void(this.l = null)) : (mc || (mc = new Y), mc)
  }
  Y.prototype.c = function(a, b, c) {
    return this.O && (b.app_id = this.O), this.i && (b.branch_key = this.i), (a.a && a.a.session_id || a.f && a.f.session_id) && this.H && (b.session_id = this.H), (a.a && a.a.identity_id || a.f && a.f.identity_id) && this.v && (b.identity_id = this.v), (a.a && a.a.link_click_id || a.f && a.f.link_click_id) && this.V && (b.link_click_id = this.V), (a.a && a.a.sdk || a.f && a.f.sdk) && this.P && (b.sdk = this.P), (a.a && a.a.browser_fingerprint_id || a.f && a.f.browser_fingerprint_id) && this.D && (b.browser_fingerprint_id = this.D), rb(this.N, a, b, this.b, function(a, b) {
      c(a, b)
    })
  };

  function gc(a) {
    var b = H(a.b);
    return (b = b && b.referring_link) ? b : (a = a.b.get("click_id")) ? "https://bnc.lt/c/" + a : null
  }

  function J(a, b, c) {
    for (var d = 0; d < a.g.length; d++) a.g[d].event && a.g[d].event !== b || a.g[d].listener(b, c)
  }
  Y.prototype.init = X(2, function(a, b, c) {
    function d() {
      var a, b;
      "undefined" != typeof document.hidden ? (a = "hidden", b = "visibilitychange") : "undefined" != typeof document.mozHidden ? (a = "mozHidden", b = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (a = "msHidden", b = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (a = "webkitHidden", b = "webkitvisibilitychange"), b && document.addEventListener(b, function() {
        document[a] || (g(null), "function" == typeof i.C && i.C())
      }, !1)
    }

    function e(d, e) {
      if (e && (e = h(e), ib(i.b, e, m), i.j = 3, e.data_parsed = e.data && 0 !== e.data.length ? q(e.data) : {}), d) return i.j = 2, i.h || (i.h = 1, i.l = d.message), a(d, e && ta(e));
      var g = Ma();
      i.c(cb, {
        event: "pageview",
        metadata: w({
          url: k,
          user_agent: navigator.userAgent,
          language: navigator.language,
          page_has_microdata: f(),
          screen_width: screen.width || -1,
          screen_height: screen.height || -1
        }, g || {}),
        initial_referrer: document.referrer
      }, function(d, f) {
        d || "object" != typeof f || fc(b, e, f, c, i);
        try {
          a(d, e && ta(e))
        } catch (g) {} finally {
          i.renderFinalize()
        }
      })
    }

    function f() {
      var a = !1;
      try {
        a = !!(document.querySelectorAll('*[itemtype^="http://schema.org"]') || []).length
      } catch (b) {
        a = !1
      }
      return a
    }

    function g(a) {
      var b = {
          sdk: "2.26.1",
          branch_key: i.i
        },
        c = H(i.b) || {},
        d = H(i.b, !0) || {};
      d.browser_fingerprint_id && (b._t = d.browser_fingerprint_id), za() || i.c(Oa, b, function(a, b) {
        a && (i.h = 3, i.l = a.message), b && (c.browser_fingerprint_id = b)
      }), i.c(bb, {
        browser_fingerprint_id: c.browser_fingerprint_id
      }, function(b, d) {
        b && (i.h = 4, i.l = b.message), b || !d || c.has_app || (c.has_app = !0, jb(i.b, c), J(i, "didDownloadApp")), a && a(null, c)
      })
    }

    function h(a) {
      if (a.link_click_id && (i.V = a.link_click_id.toString()), a.session_id && (i.H = a.session_id.toString()), a.identity_id && (i.v = a.identity_id.toString()), a.link && (i.W = a.link), a.referring_link) {
        var b = a.referring_link;
        a.referring_link = b ? "http" !== b.substring(0, 4) ? "https://bnc.lt" + b : b : null
      }
      return !a.click_id && a.referring_link && (a.click_id = xa(a.referring_link)), i.D = a.browser_fingerprint_id, a
    }
    var i = this;
    i.j = 1, -1 < b.indexOf("key_") ? i.i = b : i.O = b, c = c && "function" == typeof c ? {} : c;
    var j = H(i.b),
      k = c && c.url || String(window.location),
      l = (c && "undefined" != typeof c.branch_match_id && null !== c.branch_match_id ? c.branch_match_id : null) || Aa() || ya(),
      m = !j || !j.identity_id;
    if (i.m = !!i.b.get("branch_view_enabled"), j && j.session_id && !l) jb(i.b, {
      data: ""
    }), d(), g(e);
    else {
      var j = {
          sdk: "2.26.1",
          branch_key: i.i
        },
        n = H(i.b, !0) || {};
      n.browser_fingerprint_id && (j._t = n.browser_fingerprint_id), za() ? i.c(Na, {
        link_identifier: l,
        browser_fingerprint_id: l || n.browser_fingerprint_id,
        alternative_browser_fingerprint_id: n.browser_fingerprint_id,
        options: c,
        initial_referrer: document.referrer
      }, function(a, b) {
        a && (i.h = 2, i.l = a.message), a || "object" != typeof b || (i.m = !!b.branch_view_enabled, i.b.set("branch_view_enabled", i.m), l && (b.click_id = l)), d(), e(a, b)
      }) : i.c(Oa, j, function(a, b) {
        return a ? (i.h = 3, i.l = a.message, e(a, null)) : void i.c(Na, {
          link_identifier: l,
          browser_fingerprint_id: l || b,
          alternative_browser_fingerprint_id: n.browser_fingerprint_id,
          options: c,
          initial_referrer: document.referrer
        }, function(a, b) {
          a && (i.h = 2, i.l = a.message), a || "object" != typeof b || (i.m = !!b.branch_view_enabled, i.b.set("branch_view_enabled", i.m), l && (b.click_id = l)), d(), e(a, b)
        })
      })
    }
  }, !0), Y.prototype.renderQueue = X(0, function(a, b) {
    this.Y ? b() : (this.o = this.o || [], this.o.push(b)), a(null, null)
  }), Y.prototype.renderFinalize = X(2, function(a) {
    this.o && 0 < this.o.length && (this.o.forEach(function(a) {
      a.call(this)
    }), delete this.o), this.Y = !0, a(null, null)
  }), Y.prototype.data = X(2, function(a) {
    var b = ta(H(this.b));
    b.referring_link = gc(this), b.data_parsed = b.data && 0 !== b.data.length ? q(b.data) : {}, a(null, b)
  }), Y.prototype.first = X(2, function(a) {
    a(null, ta(H(this.b, !0)))
  }), Y.prototype.setIdentity = X(2, function(a, b) {
    var c = this;
    this.c(Va, {
      identity: b
    }, function(d, e) {
      d && a(d), e = e || {}, c.v = e.identity_id ? e.identity_id.toString() : null, c.W = e.link, c.S = b, e.referring_data_parsed = e.referring_data ? q(e.referring_data) : null, jb(c.b, e), a(null, e)
    })
  }), Y.prototype.logout = X(1, function(a) {
    var b = this;
    this.c(Ua, {}, function(c, d) {
      c && a(c), d = d || {}, d = {
        data_parsed: null,
        data: null,
        referring_link: null,
        click_id: null,
        link_click_id: null,
        identity: null,
        session_id: d.session_id,
        identity_id: d.identity_id,
        link: d.link,
        device_fingerprint_id: b.ta || null
      }, b.W = d.link, b.H = d.session_id, b.v = d.identity_id, b.S = d.identity, jb(b.b, d), a(null)
    })
  }), Y.prototype.track = X(1, function(a, b, c, d) {
    var e = this;
    c = c || {}, d = d || {}, e.c(cb, {
      event: b,
      metadata: w({
        url: document.URL,
        user_agent: navigator.userAgent,
        language: navigator.language
      }, c),
      initial_referrer: document.referrer
    }, function(c, f) {
      c || "object" != typeof f || "pageview" !== b || fc(e.i, H(e.b), f, d, e), "function" == typeof a && a.apply(this, arguments)
    })
  }), Y.prototype.link = X(2, function(a, b) {
    this.c($a, wa(b), function(b, c) {
      a(b, c && c.url)
    })
  }), Y.prototype.sendSMS = X(1, function(a, b, c, d) {
    function e(c) {
      f.c(Qa, {
        link_url: c,
        phone: b
      }, function(b) {
        a(b || null)
      })
    }
    var f = this;
    "function" == typeof d ? d = {} : "undefined" != typeof d && null !== d || (d = {}), d.make_new_link = d.make_new_link || !1, c.channel && "app banner" !== c.channel || (c.channel = "sms");
    var g = gc(f);
    g && !d.make_new_link ? e(g.substring(g.lastIndexOf("/") + 1, g.length)) : f.c($a, wa(c), function(b, c) {
      if (b) return a(b);
      var d = c.url;
      /(bnc.lt\/|app\.link\/)/.test(d) || (d = "https://bnc.lt/" + Ea(d)), f.c(Pa, {
        link_url: d,
        click: "click"
      }, function(b, c) {
        return b ? a(b) : void e(c.click_id)
      })
    })
  }), Y.prototype.deepview = X(1, function(a, b, c) {
    var d = this;
    c || (c = {}), c.deepview_type = "undefined" == typeof c.deepview_type ? "deepview" : "banner", b.data = w(Ga(), b.data);
    var e, f = "https://bnc.lt/a/" + d.i,
      g = !0;
    for (e in b) b.hasOwnProperty(e) && "data" !== e && (g ? (f += "?", g = !1) : f += "&", f += encodeURIComponent(e) + "=" + encodeURIComponent(b[e]));
    b = wa(b), (c.open_app || null === c.open_app || "undefined" == typeof c.open_app) && (b.open_app = !0), b.append_deeplink_path = !!c.append_deeplink_path, b.deepview_type = c.deepview_type, (g = gc(d)) && !c.make_new_link && (b.link_click_id = g.substring(g.lastIndexOf("/") + 1, g.length)), b.banner_options = c, d.C = ka(this.c, d, ab, b, function(b, c) {
      return b ? (d.B = function() {
        window.location = f
      }, a(b)) : ("function" == typeof c && (d.B = c), void a(null))
    }), d.C()
  }), Y.prototype.deepviewCta = X(1, function(a) {
    if ("undefined" == typeof this.B) throw Error("Cannot call Deepview CTA, please call branch.deepview() first.");
    window.event && (window.event.preventDefault ? window.event.preventDefault() : window.event.returnValue = !1), J(this, "didDeepviewCTA"), this.B(), a()
  }), Y.prototype.referrals = X(2, function(a) {
    this.c(Wa, {}, a)
  }), Y.prototype.getCode = X(2, function(a, b) {
    b.type = "credit", b.creation_source = b.creation_source || 2, this.c(Ra, b, a)
  }), Y.prototype.validateCode = X(1, function(a, b) {
    this.c(Sa, {
      code: b
    }, a)
  }), Y.prototype.applyCode = X(1, function(a, b) {
    this.c(Ta, {
      code: b
    }, a)
  }), Y.prototype.credits = X(2, function(a) {
    this.c(Ya, {
      branch_key: this.i,
      identity: this.S
    }, a)
  }), Y.prototype.creditHistory = X(2, function(a, b) {
    this.c(Xa, b || {}, a)
  }), Y.prototype.redeem = X(1, function(a, b, c) {
    this.c(Za, {
      amount: b,
      bucket: c
    }, function(b) {
      a(b || null)
    })
  }), Y.prototype.addListener = function(a, b) {
    "function" == typeof a && void 0 === b && (b = a), b && this.g.push({
      listener: b,
      event: a || null
    })
  }, Y.prototype.removeListener = function(a) {
    a && (this.g = this.g.filter(function(b) {
      if (b.listener !== a) return b
    }))
  };

  function nc(a, b, c) {
    c = c || {};
    try {
      a.A = q(t(c))
    } finally {
      a.A = a.A || {}
    }
    b()
  }
  Y.prototype.setBranchViewData = X(1, function(a, b) {
    nc.call(null, this, a, b)
  }), Y.prototype.closeJourney = X(1, function(a) {
    var b = this;
    b.renderQueue(function() {
      return Qb && Rb ? (J(b, "didCallJourneyClose", T), void ac(Qb)) : a("Journey already dismissed.")
    }), a()
  }), Y.prototype.banner = X(1, function(a, b, c) {
    c = c || {}, nc.call(null, this, function() {}, c), "undefined" == typeof b.showAgain && "undefined" != typeof b.forgetHide && (b.showAgain = b.forgetHide);
    var d = {
      icon: z(b.icon) || "",
      title: z(b.title) || "",
      description: z(b.description) || "",
      G: "number" == typeof b.reviewCount && 0 < b.reviewCount ? Math.floor(b.reviewCount) : null,
      u: "number" == typeof b.rating && 5 >= b.rating && 0 < b.rating ? Math.round(2 * b.rating) / 2 : null,
      fa: z(b.openAppButtonText) || "View in app",
      ca: z(b.downloadAppButtonText) || "Download App",
      ja: z(b.sendLinkText) || "Send Link",
      ha: z(b.phonePreviewText) || "(999) 999-9999",
      w: "undefined" == typeof b.iframe || b.iframe,
      M: "undefined" == typeof b.showiOS || b.showiOS,
      la: "undefined" == typeof b.showiPad || b.showiPad,
      I: "undefined" == typeof b.showAndroid || b.showAndroid,
      J: "undefined" == typeof b.showBlackberry || b.showBlackberry,
      L: "undefined" == typeof b.showWindowsPhone || b.showWindowsPhone,
      K: "undefined" == typeof b.showKindle || b.showKindle,
      ka: "undefined" == typeof b.showDesktop || b.showDesktop,
      ba: !!b.disableHide,
      F: "number" == typeof b.forgetHide ? b.forgetHide : !!b.forgetHide,
      ia: "undefined" != typeof b.respectDNT && b.respectDNT,
      position: b.position || "top",
      $: b.customCSS || "",
      ea: "undefined" != typeof b.mobileSticky && b.mobileSticky,
      aa: "undefined" == typeof b.desktopSticky || b.desktopSticky,
      pa: b.buttonBorderColor || "",
      na: b.buttonBackgroundColor || "",
      ra: b.buttonFontColor || "",
      qa: b.buttonBorderColorHover || "",
      oa: b.buttonBackgroundColorHover || "",
      sa: b.buttonFontColorHover || "",
      da: !!b.make_new_link,
      ga: !!b.open_app,
      T: !!b.immediate,
      Z: !!b.append_deeplink_path
    };
    "undefined" != typeof b.showMobile && (d.M = b.showMobile, d.I = b.showMobile, d.J = b.showMobile, d.L = b.showMobile, d.K = b.showMobile), c.data = w(Ga(), c.data);
    var e = this;
    e.renderQueue(function() {
      e.R = Db(e, d, c, e.b)
    }), a()
  }), Y.prototype.closeBanner = X(0, function(a) {
    var b = this;
    b.renderQueue(function() {
      b.R && (J(b, "willCloseBanner"), b.R(function() {
        J(b, "didCloseBanner")
      }))
    }), a()
  }), Y.prototype.autoAppIndex = X(1, function(a, b) {
    b = b || {};
    var c = document.getElementsByTagName("link"),
      d = c.length;
    if (d)
      for (var e = 0; e < d; e++) {
        var f = c[e],
          g = f.href;
        g && (g.includes("ios-app") && (V.iosAppIndexingTagsPresent = !0, f.setAttribute("href", ic(g))), g.includes("android-app") && (V.androidAppIndexingTagsPresent = !0, f.setAttribute("href", ic(g))))
      }
    W = b, V.androidAppIndexingTagsPresent || (kc("android"), V.androidDetailsComplete || lc("android")), V.iosAppIndexingTagsPresent || (kc("ios"), V.iosDetailsComplete || lc("ios")), a(V.iosDetailsComplete || V.androidDetailsComplete ? null : "Firebase App Indexing tags were not added to your webpage. Please check your configuration.")
  }), Y.prototype.trackCommerceEvent = X(1, function(a, b, c, d) {
    var e = this;
    e.renderQueue(function() {
      var f = La(b, c);
      return f ? a(Error(f)) : void e.c(db, {
        event: b,
        metadata: w({
          url: document.URL,
          user_agent: navigator.userAgent,
          language: navigator.language
        }, d || {}),
        initial_referrer: document.referrer,
        commerce_data: c
      }, function(b) {
        a(b || null)
      })
    }), a()
  });
  var Z = new Y;
  if (window.branch && window.branch._q)
    for (var oc = window.branch._q, pc = 0; pc < oc.length; pc++) {
      var qc = oc[pc];
      Z[qc[0]].apply(Z, qc[1])
    }
  "function" == typeof define && define.amd ? define("branch", function() {
    return Z
  }) : "object" == typeof exports && (module.exports = Z), window && (window.branch = Z)
}();
var banner_type_value, var2BannerTracking, multiBannerOn, branch_banner_type_listener = function(a, b) {
    var c = b && b.journey_link_data,
      d = c.tags,
      e = c.data;
    banner_type_value = d && d[0], var2BannerTracking = "var2Tracking" === (d && d[1]), multiBannerOn = e && e.var1, banner_type_value || (banner_type_value = b && b.banner_id), branch.setBranchViewData({
      channel: "Mobile Web",
      data: {
        url: window.location.href,
        sub2: visitor && visitor.getMarketingCloudVisitorID(visitor.marketingCloudOrgID),
        sub1: banner_type_value
      }
    })
  },
  branch_listener = function() {
    var a, b, c, d, e, f = document.getElementById("branch-banner-iframe"),
      g = {};
    f && (d = f ? f.clientHeight : 0, e = f.contentDocument ? f.contentDocument : f.contentWindow.document, d > 200 ? (g = {
      prop61: "UE: Branch: " + banner_type_value + ": Page view",
      prop62: "UE: Branch: " + banner_type_value,
      prop63: "UE: Branch",
      prop11: SH.OMN.pageType
    }, var2BannerTracking && (g.prop61 = "UE: Branch: " + banner_type_value + ": Page view from Variant 1"), s.track(g), a = e.getElementById("branch-banner-close2"), a && a.addEventListener("click", function() {
      g = {
        prop61: "UE: Branch: " + banner_type_value + ": Continue to mWeb",
        prop62: "UE: Branch: " + banner_type_value,
        prop63: "UE: Branch",
        prop11: SH.OMN.pageType
      }, s.track(g)
    })) : d > 0 && (multiBannerOn && branch.track("did_show_variant_1"), g = {
      prop61: "UE: Branch: " + banner_type_value + ": Small Banner",
      prop62: "UE: Branch: " + banner_type_value,
      prop63: "UE: Branch",
      prop11: SH.OMN.pageType
    }, var2BannerTracking && (g.prop61 = "UE: Branch: " + banner_type_value + ": Small Banner from Variant 1"), s.track(g)), c = e.getElementById("branch-mobile-action"), b = e.getElementById("branch-banner-close1"), c && c.addEventListener("click", function() {
      g = {
        prop61: "UE: Branch: " + banner_type_value + ": App Download",
        prop62: "UE: Branch: " + banner_type_value,
        prop63: "UE: Branch",
        prop11: SH.OMN.pageType
      }, s.track(g)
    }), b && b.addEventListener("click", function() {
      g = {
        prop61: "UE: Branch: " + banner_type_value + ": Close Banner",
        prop62: "UE: Branch: " + banner_type_value,
        prop63: "UE: Branch",
        prop11: SH.OMN.pageType
      }, s.track(g)
    }))
  };
branch.addListener("willShowJourney", branch_banner_type_listener), branch.addListener("didShowJourney", branch_listener), branch.init("key_live_mofJnVNrG5BnZd6bjompgipgxCl6aZuh", {
  open_app: !0,
  user_language: SH.locale
}, function(a, b) {});