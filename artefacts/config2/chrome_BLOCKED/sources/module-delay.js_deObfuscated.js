define("common-adComponent", ["foobunny", "component", "adComponent-view"], function(a, b, c) {
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
}), define("homepage-tabs-component", ["component", "homepage-tabs-view", "underscore"], function(a, b, c) {
  "use strict";
  var d = a.extend({
    name: "hometabs",
    init: function() {
      var a = this;
      if (void 0 === a.options.element || void 0 === a.options.tabsList || void 0 === a.options.id) throw "element, tabsList & id is required parameter for tabs component";
      var d = {
        label: ""
      };
      "undefined" == typeof a.options.attributes && (a.options.attributes = {}), a.view = new b({
        el: a.options.element,
        tabsList: a.options.tabsList,
        selectedTab: a.options.selectedTab,
        id: a.options.id,
        attributes: c.defaults(a.options.attributes, d)
      })
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose()
    },
    changeTab: function(a) {
      return !!a && this.view.selectTab(a, $("#" + a))
    }
  });
  return d
}), define("homepage-tabs-view", ["foobunny"], function(a) {
  "use strict";
  var b = a.BaseView.extend({
    template: "homepage-tabs-component",
    events: {
      "click .tabsLink": "onClick"
    },
    collectionName: "tabs",
    initialize: function(b) {
      var c = b.tabsList || [];
      this.collection = new a.BaseCollection(c), this.selectedTab = b.selectedTab || "", this.id = b.id, this.noOfTabs = c.length
    },
    onClick: function(a) {
      a = a || window.event;
      var b = a.currentTarget || a.srcElement;
      3 === b.nodeType && (b = b.parentNode), b = $(b);
      var c = b.attr("id");
      this.selectTab(c, b)
    },
    selectTab: function(a, b) {
      if (a !== this.selectedTab) {
        var c = $("#" + a),
          d = $("#" + this.selectedTab);
        return d.prev().removeClass("noBorder"), c.prev().addClass("noBorder"), d.removeClass("selected"), c.addClass("selected"), this.selectedTab = a, this.publishEvent(this.id + ":tab:click", {
          tab: b,
          id: a
        }), !0
      }
      return !1
    },
    context: function() {
      return {
        selectedTab: this.selectedTab
      }
    }
  });
  return b
}), define("search-dropdown-selector", ["component", "i18n", "search-dropdown-selector-i18n-props", "search-dropdown-selector-view"], function(a, b, c, d) {
  "use strict";
  var e = a.extend({
    name: "DropdownSelector",
    el: ".dropdown-selector-component-container",
    init: function() {
      b.merge(c), this.options.el = this.options.el || this.el, this.options.contextElement && (this.options.el = this.options.contextElement + " " + this.options.el), this.view = new d(this.options)
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose()
    }
  });
  return e
}), define("dropdown_helper", ["foobunny"], function(a) {
  "use strict";
  var b = function() {
    function b(a) {
      var b = {
        type: "local",
        namespace: "component",
        expires: 15552e6
      };
      return SH && SH.appName && (b.namespace = b.namespace + "." + SH.appName), a && a.contextElement && (b.namespace = b.namespace + a.contextElement), b
    }

    function c(c) {
      var d, e;
      return e = b(c), d = new a.Cache(e), d.unlockNamespace(), d
    }

    function d(a) {
      var b;
      return b = c(a), b.unlockNamespace(), b.get("DropdownSelector")
    }

    function e(a) {
      var b;
      b = c(a), b.unlockNamespace(), b.set("DropdownSelector", {}), b = {}
    }
    return {
      getDropDownSelectorCache: c,
      getDropDownSelectorCacheContent: d,
      resetDropDownSelectorCacheContent: e
    }
  }();
  return b
}), define("search-dropdown-selector-model", ["foobunny", "underscore", "i18n"], function(a, b) {
  "use strict";
  var c = a.BaseModel.extend({
    defaults: {
      dropDownSelector: "hide",
      selectedOptionIndex: -1,
      highlightedOptionIndex: -1
    },
    initialize: function(a) {
      !a.defaultOption || !a.selectOptions || a.selectedOptionIndex >= 0 || (a.selectedOptionIndex = b.indexOf(a.selectOptions, a.defaultOption)), a.numSelectionOption = a.selectOptions.length, this.set(a)
    }
  });
  return c
}), define("search-dropdown-selector-view", ["foobunny", "search-dropdown-selector-model", "dropdown_helper", "underscore", "i18n", "sh_global_registry", "search-dropdown-selector-i18n-props"], function(a, b, c, d) {
  "use strict";
  var e = a.BaseView.extend({
    events: {
      "keydown .a-keydown-select-option": "onDropDownKeyDown",
      "click .a-click-show-options": "showDropdownSelector",
      "click li.a-click-option": "onDropdownOptionClick",
      "click .sh-close-action": "resetDropdownComponent",
      "mouseenter li.a-click-option": "highlightCurrentSelection",
      "mouseleave ul.select-options-list": "unHighlightCurrentSelection",
      "touchstart li.a-click-option": "handleDropDownTouchStart",
      "touchmove li.a-click-option": "handleDropDownTouchMove",
      "touchend li.a-click-option": "handleDropDownTouchEnd"
    },
    modelEvents: {
      change: "render"
    },
    uiEl: {
      $dropdownSelectorKeydown: ".a-keydown-select-option"
    },
    template: "search-dropdown-selector",
    initialize: function(a) {
      var c;
      this.contextElement = a.contextElement, a && a.dropDownConfig && (a.dropDownConfig.contextElement = a.contextElement), this.disableCache = a.disableCache, this.disableCache || (c = this.getDropDownSelectorCache(), !c || a && a.resetCache ? (a.dropDownConfig.defaultOption && (a.dropDownConfig.selectedOptionIndex = d.indexOf(a.dropDownConfig.selectOptions, a.dropDownConfig.defaultOption)), this.setDropDownSelectorCache(a.dropDownConfig)) : c && (a.dropDownConfig.selectedOptionIndex = c.selectedOptionIndex)), this.model = new b(a.dropDownConfig), this.$body = $("body")
    },
    getDropDownSelectorCache: function() {
      return this.dropDownSelectorCache || (this.dropDownSelectorCache = c.getDropDownSelectorCache({
        contextElement: this.contextElement
      })), this.dropDownSelectorCache.get("DropdownSelector")
    },
    setDropDownSelectorCache: function(a) {
      var b, e = ["instanceMetaData", "selectedOptionIndex"];
      a && !this.disableCache && (this.dropDownSelectorCache || (this.dropDownSelectorCache = c.getDropDownSelectorCache({
        contextElement: this.contextElement
      })), a = d.pick(a, e), b = this.getDropDownSelectorCache() || {}, a = d.extend(b, a), this.dropDownSelectorCache.set("DropdownSelector", a))
    },
    afterRender: function() {
      "show" === this.model.get("dropDownSelector") && this.focusDropdownSelector()
    },
    focusDropdownSelector: function() {
      this.uiEl.$dropdownSelectorKeydown.focus()
    },
    showDropdownSelector: function(a) {
      "show" !== this.model.get("dropDownSelector") && (a && a.stopPropagation(), this.model.set("dropDownSelector", "show"), this.bindBodyClickEvent())
    },
    onDropDownKeyDown: function(a) {
      switch (a.keyCode) {
        case 27:
          this.reset();
          break;
        case 40:
          a.preventDefault(), this.highlightNextSelection();
          break;
        case 38:
          a.preventDefault(), this.highlightPreviousSelection();
          break;
        case 13:
          a.preventDefault(), this.onEnterKeyDown()
      }
    },
    onEnterKeyDown: function() {
      var a = {};
      a.selectedOptionIndex = this.model.get("highlightedOptionIndex"), this.selectDropdownOption(a)
    },
    onDropdownOptionClick: function(a) {
      var b = {};
      a && a.currentTarget && (a.stopPropagation(), a.preventDefault(), b.selectedOptionIndex = parseInt(a.currentTarget.getAttribute("data-index")), this.selectDropdownOption(b))
    },
    selectDropdownOption: function(a) {
      var b, c;
      a && a.selectedOptionIndex >= 0 && a.selectedOptionIndex !== this.model.get("selectedOptionIndex") && (c = this.getOptionAtIndex(a.selectedOptionIndex), a.contextElement = this.contextElement, a.selectedOptionText = c, b = {
        selectedOptionIndex: a.selectedOptionIndex
      }, this.setDropDownSelectorCache(b), this.publishEvent("dropDownSelector:updatedOptionSelection", a)), this.reset(b)
    },
    getOptionAtIndex: function(a) {
      var b, c;
      return a >= 0 && (c = this.model.get("selectOptions"), b = c[a] || ""), b
    },
    highlightNextSelection: function() {
      var a = this.model.get("highlightedOptionIndex"),
        b = this.model.get("numSelectionOption");
      a++, a >= b && (a %= b), this.model.set("highlightedOptionIndex", a)
    },
    highlightPreviousSelection: function() {
      var a = this.model.get("highlightedOptionIndex"),
        b = this.model.get("numSelectionOption");
      a--, a < 0 && (a = b - 1), this.model.set("highlightedOptionIndex", a)
    },
    highlightCurrentSelection: function(a) {
      var b;
      a && a.currentTarget && (b = parseInt(a.currentTarget.getAttribute("data-index")), b !== this.model.get("highlightedOptionIndex") && this.model.set("highlightedOptionIndex", b))
    },
    unHighlightCurrentSelection: function() {
      this.model.set("highlightedOptionIndex", -1)
    },
    handleDropDownTouchStart: function() {
      this.isScrolled = !1
    },
    handleDropDownTouchMove: function() {
      this.isScrolled = !0
    },
    handleDropDownTouchEnd: function(a) {
      var b = {};
      !this.isScrolled && a && a.currentTarget && (a.stopPropagation(), a.preventDefault(), b.selectedOptionIndex = parseInt(a.currentTarget.getAttribute("data-index")), this.selectDropdownOption(b))
    },
    bindBodyClickEvent: function() {
      this.unBindBodyClickEvent(), this.$body.on("click." + this.elSelector, this.onAppClick.bind(this))
    },
    unBindBodyClickEvent: function() {
      this.$body.off("click." + this.elSelector)
    },
    onAppClick: function(a) {
      var b, c, d;
      d = $(a.target), b = d.closest(this.elSelector + " .dropdown-selected-option").length, c = d.closest(this.elSelector + " .dropdown-selector-options").length, b || c || this.reset()
    },
    resetDropdownComponent: function(a) {
      a && a.stopPropagation(), this.reset()
    },
    reset: function(a) {
      var b = {
        highlightedOptionIndex: -1,
        dropDownSelector: "hide"
      };
      a && $.extend(b, a), this.model.set(b), this.unBindBodyClickEvent()
    }
  });
  return e
});