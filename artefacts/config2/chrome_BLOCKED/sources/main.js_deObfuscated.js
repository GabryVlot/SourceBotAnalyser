define("routes", [], function() {
  "use strict";
  return function(e) {
    e(/([a-zA-Z0-9-_]+)\/(category)\/([0-9]+)\/?/, "columnLayout#start", {
      names: ["seo", "nodeType", "categoryId"],
      constraints: {
        categoryId: /^\d+$/
      }
    }), e("", "columnLayout"), e(/[a-zA-Z]{2,}/, "columnLayout")
  }
}), define("models/billboard_model", ["foobunny", "sh_global_registry", "homepage-logger-component"], function(e, t, i) {
  "use strict";
  return e.BaseModel.extend({
    url: function() {
      var e = "/shape/recommendations/core/v2/events?handleName=billboard",
        t = this.get("point");
      return t && (e += "&point=" + t), e
    },
    fetchFail: function() {
      i.log("BillboardApiError", {
        message: "Error while trying to fetch data from billboard handle reco api",
        file: "billboard_model.js",
        fn: "fetchFail",
        apiUrl: this.url()
      })
    },
    parseMarkdownRegex: function(e) {
      var t = /\*\*(.*?)\*\*/g;
      return e.replace(t, '<span class="highlight">$1</span>')
    },
    parse: function(e) {
      var t, i = {};
      return e && e.events && e.events[0] && (t = e.events[0], i.numFound = e.numFound, i.overlayTitle = this.parseMarkdownRegex(t.billboardAttributes.overlayTitle), i.overlaySubtitle = t.billboardAttributes.overlaySubtitle, i.redirectUrl = t.billboardAttributes.redirectURL, i.categoryType = t.categories[0].name, i.venueId = t.venue.id, i.performers = t.performers, i.eventId = t.id, t.categories && t.categories[1] && (i.subCategory = t.categories[1].name)), i
    }
  })
}), define("models/billboard_images_model", ["underscore", "foobunny", "sh_global_registry", "geolocation-helper", "homepage-logger-component"], function(e, t, i, o, r) {
  "use strict";
  return t.BaseModel.extend({
    url: function() {
      return "/shape/catalog/events/v3/" + this.urlParams.billboardEventId
    },
    fetchFail: function() {
      r.log("BillboardImagesApiError", {
        message: "Error while trying to fetch images from catalog api",
        file: "billboard_images_model.js",
        fn: "fetchFail",
        apiUrl: this.url()
      })
    },
    getRespectiveBillboardImagesFromArray: function(e) {
      var t, i, o, r = {};
      return e && e.length > 0 && (t = e[0], e[0].title && (o = e[0].title.split(";"), o.length > 1 && (r.redirectUrl = o[1]))), e.length > 1 ? (i = e[1], parseInt(t.width) > parseInt(i.width) ? (r.desktopImageUrl = t.urlSsl ? t.urlSsl : t.url, r.mobileImageUrl = i.urlSsl ? i.urlSsl : i.url) : (r.desktopImageUrl = i.urlSsl ? i.urlSsl : i.url, r.mobileImageUrl = t.urlSsl ? t.urlSsl : t.url)) : (r.desktopImageUrl = t.urlSsl ? t.urlSsl : t.url, r.mobileImageUrl = t.urlSsl ? t.urlSsl : t.url), r
    },
    parse: function(t) {
      var i, n = {},
        a = o.getGeolocationCountryCodeFromCache() || "US";
      return t && t.images && 2 === t.images.length ? n = this.getRespectiveBillboardImagesFromArray(t.images) : (i = e.filter(t.images, function(e) {
        return e.title && e.title.split(";")[0].toLowerCase() === a.toLowerCase()
      }), 2 === i.length ? n = this.getRespectiveBillboardImagesFromArray(i) : r.log("BillboardImagesApiError", {
        message: "Too many billboard images found for country code " + a,
        file: "billboard_images_model.js",
        fn: "parse",
        apiUrl: this.url()
      })), n
    }
  })
}), define("views/billboard_view", ["foobunny", "application_helper", "models/billboard_model", "models/billboard_images_model", "geolocation-helper", "homepage-logger-component"], function(e, t, i, o, r, n) {
  "use strict";
  return e.BaseView.extend({
    el: "#billboard-container",
    events: {
      click: "onBillboardClick"
    },
    modelEvents: {
      "change:desktopImageUrl": "displayBillboard"
    },
    initialize: function() {
      var e = r.getGeolocationCoordinatesFromCache() || !1;
      this.initializeBillboardModel(e), this.subscribeEvent("geolocation-filter:updatedCurrentLocation", this.onLocationUpdate)
    },
    onLocationUpdate: function(e) {
      this.initializeBillboardModel({
        point: e.point.latitude + "," + e.point.longitude
      })
    },
    initializeBillboardModel: function(e) {
      var t, r = this.onBillboardFetchSuccess.bind(this);
      this.model || (this.model = new i), this.billboardImagesModel || (this.billboardImagesModel = new o), e && this.model.set({
        point: e.point
      }), this.model.fetch().done(function() {
        t = this.model.get("eventId"), this.billboardImagesModel.urlParams = {
          billboardEventId: t
        }, this.billboardImagesModel.fetch().done(r)
      }.bind(this))
    },
    onBillboardFetchSuccess: function() {
      var e = this.billboardImagesModel.get("redirectUrl");
      e ? this.model.set({
        desktopImageUrl: this.billboardImagesModel.get("desktopImageUrl"),
        mobileImageUrl: this.billboardImagesModel.get("mobileImageUrl"),
        redirectUrl: e
      }) : this.model.set({
        desktopImageUrl: this.billboardImagesModel.get("desktopImageUrl"),
        mobileImageUrl: this.billboardImagesModel.get("mobileImageUrl")
      })
    },
    displayBillboard: function() {
      var e, t, i = this.model.get("desktopImageUrl"),
        o = this.model.get("mobileImageUrl"),
        r = window.innerWidth <= 639,
        a = this.model.get("numFound") > 0;
      i && o && a && (e = new Image, t = i, r ? (t = o, this.model.set({
        isMobile: "true"
      })) : this.model.set({
        isDesktop: "true"
      }), e.onload = function() {
        this.$el.removeClass("hidden"), this.render()
      }.bind(this), e.onerror = function() {
        this.$el.addClass("hidden"), n.log("BillboardImageLoadError", {
          message: "Error loading billboard image",
          image_url: t,
          isMobile: r
        }, 1)
      }.bind(this), e.src = t)
    },
    template: "homepage-" + window.SH.appVersion + "/billboard",
    onBillboardClick: function(e) {
      e.preventDefault(), e.stopPropagation();
      var i, o, r = this.model.get("redirectUrl");
      r.indexOf("GCID") >= 0 && (o = function(e, t) {
        return decodeURIComponent((new RegExp("[?|&]" + t + "=([^&;]+?)(&|#|;|$)").exec(e) || [, ""])[1].replace(/\+/g, "%20")) || null
      }(r, "GCID")), i = {
        appInteraction: SH.OMN.pageName + ": Billboard",
        appInteractionType: SH.OMN.pageName + ": Billboard",
        appInteractionPage: SH.OMN.pageName,
        filterType: o
      }, t.track(i, null, !1), this.sendRedirect(r, 300)
    },
    sendRedirect: function(e, t) {
      t ? setTimeout(function() {
        location.href = e
      }, t) : location.href = e
    }
  })
}), define("models/newhomenav_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({})
}), define("views/newhomenav_view", ["foobunny", "urlUtil", "application_helper", "sh_global_registry", "models/newhomenav_model", "sh_global_registry", "siema"], function(e, t, i, o, r, n, a) {
  var s, l;
  return e.BaseView.extend({
    el: "#homenav-new-container ",
    events: {
      "click .item": "redirectNav"
    },
    template: "homepage-" + window.SH.appVersion + "/newhomenav",
    initialize: function() {
      this.setPage(), this.setPageUrl(), this.isSmall = window.innerWidth >= 320 && window.innerWidth < 640, this.isMedium = window.innerWidth >= 640 && window.innerWidth < 960
    },
    setPage: function() {
      var e = t.url.href;
      e.indexOf("category/28") >= 0 ? (this.page = "sports", this.selectedId = "sports") : e.indexOf("category/174") >= 0 ? (this.page = "comedy", this.selectedId = "comedy") : e.indexOf("category/1") >= 0 ? (this.page = "concerts", this.selectedId = "music") : e.indexOf("globalevents") >= 0 ? (this.page = "globalevents", this.selectedId = "global-events") : (this.page = "home", this.selectedId = "home")
    },
    afterRender: function() {
      document.getElementById(this.selectedId).classList.add("selected-icon-caption-item"), document.getElementById(this.selectedId).classList.remove("icon-caption-item");
      var e = this.getGloablEventFeatureToggle();
      this.lastElement(e), (this.isSmall || this.isMedium) && this.carousel()
    },
    redirectNav: function(e) {
      var i = e.currentTarget.firstElementChild.href;
      t.redirect(t.formatUrl(i), 0, !1), this.setTracking(e)
    },
    lastElement: function(e) {
      var t = document.getElementById("carouselNav"),
        i = t.children.length;
      if (!e || "en-us" !== SH.locale && "en-gb" !== SH.locale) s = "#comedy-nav-item", l = i - 1, t.removeChild(t.childNodes[l]), document.getElementById("comedy-nav-item").style.marginRight = "0px";
      else {
        s = "#global-nav-item";
        for (var o = 0; o < t.childNodes.length; o++) t.childNodes[o].classList.remove("nav-item"), t.childNodes[o].classList.add("nav-item-five")
      }
    },
    getGloablEventFeatureToggle: function() {
      var e = n.getSiteId(),
        t = "gs.features." + e + ".homepage.globalevents";
      return n.getFeatureValue(t, "boolean")
    },
    carousel: function(e) {
      try {
        this.mySiema = new a({
          selector: ".siema",
          duration: 200,
          easing: "ease-in-out",
          perPage: {
            320: 2,
            640: 3,
            960: 4,
            1280: 5
          },
          startIndex: 0,
          threshold: 20,
          loop: !1
        })
      } catch (e) {}
    },
    setPageUrl: function() {
      this.model = new r, this.model.set("homeUrl", t.formatUrl("/")), this.model.set("sportsUrl", t.formatUrl("/sports-tickets/category/28/")), this.model.set("concertsUrl", t.formatUrl("/concert-tickets/category/1/")), this.model.set("theaterUrl", t.formatUrl("/theater-tickets/category/174/")), this.model.set("globalEventsUrl", t.formatUrl("/globalevents/"))
    },
    setTracking: function(e) {
      if (!e || (e.preventDefault(), e.stopPropagation(), 1 !== e.button)) {
        var t = void 0,
          o = this.page,
          r = e ? this.getSelectedItem(e) : this.getTouchSelectedItem(),
          n = this.getProp1(o);
        void 0 === window.s && i.initOmniture();
        t = {
          appInteraction: "UE: Discover: " + r,
          appInteractionType: "UE: Discover",
          appInteractionPage: n,
          pageType: n
        }, i.track(t, null, !1)
      }
    },
    getProp1: function(e) {
      return {
        home: "UE: Homepage",
        sports: "UE: Browse: Sports",
        concerts: "UE: Browse: Concerts",
        comedy: "UE: Browse: Theater",
        globalevents: "UE: Browse: Global events"
      }[e]
    },
    getSelectedItem: function(e) {
      var t = e.currentTarget ? e.currentTarget.classList : "";
      return t.contains("prevWrapper") ? selectedItem = "Scroll Left" : t.contains("nextWrapper") ? selectedItem = "Scroll Right" : t.contains("home") ? selectedItem = "Home" : t.contains("sports") ? selectedItem = "Sports" : t.contains("music") ? selectedItem = "Concerts" : t.contains("comedy") ? selectedItem = "Theater & Comedy" : selectedItem = "Global events"
    },
    getTouchSelectedItem: function() {
      return "next" === this.mySiema.getSlideDirection() ? selectedItem = "Swipe Right" : selectedItem = "Swipe Left"
    }
  })
}), define("models/citytile_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({})
}), define("views/citytile_view", ["foobunny", "urlUtil", "application_helper", "sh_global_registry", "models/citytile_model"], function(e, t, i, o, r) {
  return e.BaseView.extend({
    el: "#city-container",
    template: "homepage-" + window.SH.appVersion + "/citytile",
    events: {
      "click .city-image-wrapper": "imageRedirect",
      "click .city-caption": "captionRedirect"
    },
    initialize: function() {
      this.setPageUrl()
    },
    imageRedirect: function(e) {
      this.city = e.currentTarget.parentNode.nextElementSibling.textContent;
      var i = e.currentTarget.parentNode.href;
      t.redirect(t.formatUrl(i), 0, !1), this.setTracking(e)
    },
    captionRedirect: function(e) {
      this.city = e.currentTarget.textContent;
      var i = e.currentTarget.parentNode.getElementsByTagName("a")[0].href;
      t.redirect(t.formatUrl(i), 0, !1), this.setTracking(e)
    },
    setPageUrl: function() {
      this.model = new r, this.model.set("sanfranciscoUrl", t.formatUrl("/sanfrancisco/")), this.model.set("losangelesUrl", t.formatUrl("/losangeles/")), this.model.set("newyorkUrl", t.formatUrl("/newyork/")), this.model.set("londonUrl", t.formatUrl("/london/"))
    },
    setTracking: function(e) {
      e.preventDefault(), e.stopPropagation(), 1 !== e.button && (void 0 === window.s && i.initOmniture(), opt = {
        appInteraction: "UE: City : " + this.city,
        appInteractionType: "UE: City",
        appInteractionPage: SH.OMN.pageName,
        pageType: SH.OMN.pageName
      }, i.track(opt, null, !1))
    }
  })
}), define("models/hubpagetitle_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({
    defaults: {
      title: ""
    }
  })
}), define("views/hubpagetitle_view", ["foobunny", "i18n", "models/hubpagetitle_model"], function(e, t, i) {
  "use strict";
  return e.BaseView.extend({
    template: "homepage-" + SH.appVersion + "/hubpagetitle",
    modelEvents: {
      "change:title": function() {
        this.render()
      }
    },
    initialize: function() {
      this.model = new i, this.subscribeEvent("hp:setHubPageTitle", this.setHubPageTitle)
    },
    setHubPageTitle: function(e) {
      var i = "";
      e = parseInt(e), 28 === e ? i = t.get("homepage.hubpagetitleView.categoryTitle.sportsTickets") : 174 === e ? i = t.get("homepage.hubpagetitleView.categoryTitle.theaterTickets") : 1 === e ? i = t.get("homepage.hubpagetitleView.categoryTitle.concertTickets") : 209 === e && (i = t.get("homepage.hubpagetitleView.categoryTitle.comedyTickets")), this.model.set("title", i)
    }
  })
}), define("models/childlinks_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({
    url: "/shape/search/catalog/categories/v3?",
    parse: function(e) {
      return e.categories.forEach(function(e) {
        e.relWebURI = "/" + e.webURI
      }), e
    }
  })
}), define("models/seocontent_model", ["foobunny", "sh-hreflang", "sh_global_registry"], function(e, t, i) {
  "use strict";
  return e.BaseModel.extend({
    url: function() {
      return "/shape/catalog/categories/v3/" + this.catId + "?mode=internal"
    },
    initialize: function(e) {
      this.catId = e
    },
    setSEOURIs: function(e, o, r) {
      var n = i.getSiteId(),
        a = "gs.features." + n + ".browse.seo.seouris.enable",
        s = i.getFeatureValue(a, "boolean"),
        l = {
          category: 1,
          team: 28,
          theater: 174
        },
        d = this.getTypes().reduce(function(e, t) {
          return e || l[t] === o
        }, !1);
      if (s && d && e) {
        new t(e, r).render()
      }
    },
    getTypes: function() {
      var e = i.getSiteId(),
        t = "gs.features." + e + ".browse.seo.seouris.types",
        o = i.getFeatureValue(t, "string");
      return o ? o.split(/\s*,\s*/).map(function(e) {
        return e.toLowerCase()
      }) : []
    },
    parse: function(e) {
      return this.setSEOURIs(e.seoURIs, e.id, e.locale ? e.locale.substr(-2) : null), this.set("metaTitle", e.displayAttributes.title), this.set("metaDescription", e.seoMeta.metaDescription), this.set("canonicalUrl", window.location.protocol + "//" + window.location.host + "/" + e.webURI), this.set("bottomContentUrl", e.seoMeta.seoBottomContentUrl), this.set("catId", e.id), _.isEmpty(e.images) || (e.images[0].url ? this.set("imgUrl", e.images[0].url) : this.set("imgUrl", !1), e.images[0].width ? this.set("imgWidth", e.images[0].width) : this.set("imgWidth", !1), e.images[0].height ? this.set("imgHeight", e.images[0].height) : this.set("imgHeight", !1)), e
    }
  })
}), define("views/childlinks_view", ["foobunny", "i18n", "models/childlinks_model", "models/seocontent_model", "application_helper", "url-parser"], function(e, t, i, o, r, n) {
  "use strict";
  return e.BaseView.extend({
    el: "#childlinks-container",
    events: {
      "click .links div a": "setTracking"
    },
    template: "homepage-" + SH.appVersion + "/childlinks",
    initialize: function() {
      this.model = new i, this.subscribeEvent("hp:retrieveCategoryIdFromHubUrl", this.fetchChildLinks)
    },
    fetchChildLinks: function(e) {
      var i = {
        28: t.get("homepage.hubpagetitleView.categoryTitle.sportsTickets"),
        1: t.get("homepage.hubpagetitleView.categoryTitle.concertTickets"),
        174: t.get("homepage.hubpagetitleView.categoryTitle.theaterTickets"),
        209: t.get("homepage.hubpagetitleView.categoryTitle.comedyTickets")
      };
      this.model.set("title", i[e.categoryId]), this.model.urlParams = {
        parentId: e.categoryId,
        rows: 500,
        status: "active",
        sort: "name asc",
        fieldList: "name,id,url"
      }, this.model.fetch().done(function() {
        this.render()
      }.bind(this)), this.subscribeEvent("hp:cardsAddedToDom", this.displayChildLinks)
    },
    displayChildLinks: function() {
      $("#childlinks-container").removeClass("hide")
    },
    setTracking: function(e) {
      e.preventDefault(), e.stopPropagation();
      var t, i = $(e.currentTarget);
      t = {
        appInteraction: SH.OMN.pageName + ": Category Links",
        appInteractionType: SH.OMN.pageName + ": Category Links",
        appInteractionPage: SH.OMN.pageName
      }, r.track(t, null, !1);
      var o = i.attr("href") || i.attr("data-url");
      this.sendRedirect(o)
    },
    sendRedirect: function(e) {
      setTimeout(function() {
        n.redirect(e)
      }, 300)
    }
  })
}), define("views/bottomcontent_view", ["foobunny", "i18n", "models/seocontent_model", "application_helper"], function(e, t, i, o) {
  return e.BaseView.extend({
    el: "#bottomcontent-container",
    events: {
      "click #bottom-content-read-more": "showExtraContent"
    },
    template: "homepage-" + SH.appVersion + "/bottomcontent",
    initialize: function() {
      this.subscribeEvent("hp:retrieveCategoryIdFromHubUrl", this.getBottomContent), this.subscribeEvent("hp:cardsAddedToDom", this.displayBottomContent), this.dataDeferred = e.utils.deferred()
    },
    renderCondition: function() {
      return this.dataDeferred.promise()
    },
    getBottomContent: function(o) {
      this.catId = o.categoryId, this.model = new i(this.catId), this.model.fetchDone = function() {
        this.updateMetaTags(), this.subModels = {
          bottomContentModel: new e.BaseModel({}, {
            url: this.model.get("bottomContentUrl")
          })
        }, this.subModels.bottomContentModel.fetchDone = function(e) {
          this.dataDeferred.resolve();
          var i = e;
          this.model.set("topContent", i.slice(0, i.indexOf("</p>")) + '&nbsp<span id="bottom-content-read-more">' + t.get("homepage.bottomcontent.readmoretext") + "</span></p>"), this.model.set("extraContent", i.slice(i.indexOf("</p>") + 4)), this.render()
        }.bind(this), this.subModels.bottomContentModel.fetch({
          dataType: "html"
        })
      }.bind(this), this.model.fetch()
    },
    displayBottomContent: function() {
      $("#bottomcontent-container").removeClass("hidden")
    },
    showExtraContent: function() {
      $("#extra-bottom-content").removeClass("hidden"), $("#top-bottom-content span").addClass("hidden")
    },
    updateMetaTags: function() {
      var e, t = this.model.get("metaTitle"),
        i = this.model.get("metaDescription"),
        r = this.model.get("canonicalUrl"),
        n = this.model.get("imgUrl"),
        a = this.model.get("imgWidth"),
        s = this.model.get("imgHeight"),
        l = "stubhub://stubhub.com/?category_id=" + this.model.get("catId");
      window.setTimeout(function() {
        e = [{
          type: "title",
          content: t
        }, {
          type: "link",
          attribute: ["rel", "canonical"],
          contents: [
            ["href", r]
          ]
        }, {
          type: "meta",
          attribute: ["name", "description"],
          contents: [
            ["content", i]
          ]
        }, {
          type: "meta",
          attribute: ["property", "og:title"],
          contents: [
            ["content", t]
          ]
        }, {
          type: "meta",
          attribute: ["property", "og:description"],
          contents: [
            ["content", i]
          ]
        }, {
          type: "meta",
          attribute: ["property", "og:url"],
          contents: [
            ["content", r]
          ]
        }, {
          type: "meta",
          attribute: ["name", "twitter:title"],
          contents: [
            ["content", t]
          ]
        }, {
          type: "meta",
          attribute: ["name", "twitter:description"],
          contents: [
            ["content", i]
          ]
        }, {
          type: "meta",
          attribute: ["name", "twitter:app:url:iphone"],
          contents: [
            ["content", l + "&GCID=Twitter:Card:Hub"]
          ]
        }, {
          type: "meta",
          attribute: ["name", "twitter:app:url:ipad"],
          contents: [
            ["content", l + "&GCID=Twitter:Card:Hub"]
          ]
        }, {
          type: "meta",
          attribute: ["name", "twitter:app:url:googleplay"],
          contents: [
            ["content", l + "&GCID=Twitter:Card:Hub"]
          ]
        }, {
          type: "meta",
          attribute: ["property", "al:ios:url"],
          contents: [
            ["content", l + "&GCID=AppLinks:Hub"]
          ]
        }, {
          type: "meta",
          attribute: ["property", "al:android:url"],
          contents: [
            ["content", l + "&GCID=AppLinks:Hub"]
          ]
        }], n && (e.push({
          type: "meta",
          attribute: ["property", "og:image"],
          contents: [
            ["content", n]
          ]
        }), e.push({
          type: "meta",
          attribute: ["property", "twitter:image"],
          contents: [
            ["content", n]
          ]
        })), a && (e.push({
          type: "meta",
          attribute: ["property", "og:image:width"],
          contents: [
            ["content", a]
          ]
        }), e.push({
          type: "meta",
          attribute: ["property", "twitter:image:width"],
          contents: [
            ["content", a]
          ]
        })), s && (e.push({
          type: "meta",
          attribute: ["property", "og:image:height"],
          contents: [
            ["content", s]
          ]
        }), e.push({
          type: "meta",
          attribute: ["property", "twitter:image:height"],
          contents: [
            ["content", s]
          ]
        })), o.updateHeadTags(e)
      }, 0)
    }
  })
}), define("layouts/main_layout", ["foobunny", "i18n", "common-globalheader", "common-globalfooter", "common-banner", "views/billboard_view", "views/newhomenav_view", "views/citytile_view", "search-search-component", "homepage-recentlyviewed-component", "views/hubpagetitle_view", "views/childlinks_view", "views/bottomcontent_view", "search-geolocation-filter", "homepage-date-filter", "sh_global_registry", "common-login", "sh_mbox_util", "application_helper", "search-datepicker-component", "mbox-helper"], function(e, t, i, o, r, n, a, s, l, d, c, h, u, m, p, g, f, v, b, y, w) {
  "use strict";
  return e.Layout.extend({
    events: {
      click: "onAppClick"
    },
    onAppClick: function(e) {
      this.publishEvent("app:click", e)
    },
    initializeRVMbox: function() {
      this.mbox.HomeRV = new w({
        featureToggleSwitch: {
          name: "homepage.enableABTestRV",
          type: "boolean"
        },
        featureForceEnableSwitch: {
          name: "homepage.enableToggleRV",
          type: "boolean"
        },
        shParamName: "HomeRV",
        mboxName: "RV",
        params: {
          pageName: SH.appName
        },
        targetElementSelector: "#target-RV-mbox",
        successCallback: this.handlerecentlyViewed,
        errorCallback: this.handlerecentlyViewed,
        context: this
      }), this.mbox.HomeRV.start()
    },
    handleBillboard: function() {
      var e = g.getSiteId(),
        t = "gs.features." + e + "." + SH.appName + ".enableBillboard";
      (g.getFeatureValue(t, "boolean") || this.options && "true" === this.options.urlParams.showBillboard) && (this.views.billboardView = new n)
    },
    handleNewHomeNav: function() {
      var e = g.getSiteId(),
        t = "gs.features." + e + "." + SH.appName + ".hideNewHomeNav";
      g.getFeatureValue(t, "boolean") || (this.views.homenavView = new a, this.views.homenavView.render())
    },
    handleCityTile: function() {
      if ("en-us" === SH.locale || "en-gb" === SH.locale) {
        var e = g.getSiteId(),
          t = "gs.features." + e + "." + SH.appName + ".hideCityTile";
        g.getFeatureValue(t, "boolean") || (this.views.citytileView = new s, this.views.citytileView.render())
      }
    },
    initialize: function(e) {
      var t = f.getInstance({
        element: "#login-container",
        visibility: "false",
        attributes: {
          "include-fb-connect": !1,
          pageName: SH.HP_OMN.pageName
        }
      });
      this.mbox = {}, this.options = e, void 0 === SH.globalProperties && (SH.globalProperties = {}), SH.globalProperties.userGuid = t.session.getGUID(), this.views = {
        bannerView: new r({
          element: "#banner-container"
        }),
        headerView: new i({
          element: "#nav-container .nav",
          wrapImageWithH1: !e.isHubPage,
          loginInstance: t
        }),
        hubPageTitleView: new c({
          el: "#category-title-container"
        }),
        SearchComponent: new l({
          element: "#search-layout-container",
          pageName: SH.HP_OMN.pageName
        }),
        childlinksView: new h({
          el: "#childlinks-container"
        }),
        bottomContentView: new u({
          el: "#bottomcontent-container"
        })
      }, this.handleBillboard(), this.spinnerElement = document.getElementById("spinner-container"), this.subscribeEvent("layoutRender:completed", this.handleNewHomeNav), this.subscribeEvent("layoutRender:completed", this.initializeFilters), this.subscribeEvent("layoutRender:completed", this.handleCityTile), this.subscribeEvent("layoutRender:completed", this.initializeRVMbox), this.subscribeEvent("layoutRender:completed", this.hideSpinner), this.subscribeEvent("layoutRender:error", this.hideSpinner), this.subscribeEvent("app:render-ready", this.onAppRenderReady.bind(this)), this.render()
    },
    setPrerenderReady: function() {
      window.prerenderReady = !0
    },
    onAppRenderReady: function() {
      setTimeout(this.initializeFooter.bind(this), 500), setTimeout(this.setPrerenderReady.bind(this), 2e3)
    },
    initializeFooter: function() {
      this.views.footerView = new o({}), this.views.footerView.render()
    },
    handlerecentlyViewed: function() {
      var e = g.getSiteId(),
        t = "gs.features." + e + "." + SH.appName + ".enableToggleRV";
      !g.getFeatureValue(t, "boolean") && SH.mbox && void 0 !== SH.mbox.HomeRV && !0 === SH.mbox.HomeRV || "localhost" === document.location.hostname ? this.views.recentlyviewedComponent = new d({
        element: "#recentlyviewed-container-top"
      }) : this.views.recentlyviewedComponent = new d({
        element: "#recentlyviewed-container"
      }), this.views.recentlyviewedComponent.render()
    },
    initializeDateFilterABTest: function() {
      var e, t, i = this;
      !1 !== _.isEmpty(window.mboxCreate) && (e = "stubhub" === window.SH.targetHost, t = e ? "PROD_datefilter" : "DEV_datefilter", mboxDefine("target-datefilter-mbox", t), mboxUpdate(t, "pageName=" + SH.appName, "clientTime=" + (new Date).getTime()), b.pollProperty(SH.mbox, "showDateCalendar", i.initializeFilters, i.initializeFilters, void 0, 1e3, i))
    },
    initializeFilters: function() {
      var e, i = g.getSiteId(),
        o = "gs.features." + i + "." + SH.appName + ".hideDateMenu",
        r = "gs.features." + i + "." + SH.appName + ".dateFilter.setCalendar",
        n = g.getFeatureValue(o, "boolean"),
        a = g.getFeatureValue(r, "boolean"),
        s = a || !1,
        l = {
          labelNear: t.get("homepage.scripts.geolocation-filter.top-near.text"),
          labelIn: t.get("homepage.scripts.geolocation-filter.top-in.text")
        };
      void 0 !== this.options.urlParams.lat_lon && (l.coordinates = this.options.urlParams.lat_lon), this.views.geolocationFilterView = new m({
        element: "#geo-container",
        attributes: l
      }).view, this.views.geolocationFilterView.render(), n && $(".date-geo-border:last-child, #date-filter-container").addClass("hide"), n || (this.views.dateFilterView = new p({
        element: "#date-filter-container",
        showDateRangeSelector: s,
        updateBrowseCache: s
      }).view, void 0 !== this.options.urlParams.eventStartDate && void 0 !== this.options.urlParams.eventEndDate && (e = {
        element: ".container-date-calendar",
        pageName: this.options.pageName,
        isSubComponent: !0
      }, e.defaultValues = {
        eventStartDate: this.options.urlParams.eventStartDate,
        eventEndDate: this.options.urlParams.eventEndDate,
        isDateSelected: !0
      }, this.views.dateFilterView.subViews = {
        datepicker: new y(e).view
      }), this.views.dateFilterView.render())
    },
    hideSpinner: function() {
      this.spinnerElement.classList.add("hide")
    }
  })
}), define("controllers/page_controller", ["foobunny", "i18n", "application_helper", "date-stamp-dust-helper", "layouts/main_layout", "geolocation-helper", "homeapp-helper", "calendar-helper"], function(e, t, i, o, r, n, a, s) {
  "use strict";
  return e.Controller.extend({
    initialize: function() {
      this.publishEvent("module:globalcontextvars:apiresponseready", {}), SH.HP_OMN = {
        siteSections: "Homepage",
        pageName: "UE: Homepage",
        pageType: "UE: Homepage"
      }, _.bindAll(this, "start", "show"), this.adjustTitle(t.get("homepage.pageTitle")), this.view = new r({
        el: "#app-container",
        urlParams: this.getUrlParams()
      })
    },
    start: function() {
      this.show(), this.subscribeEvent("common:delay-load-complete", this.setHomePageTracking)
    },
    show: function() {
      this.view.render()
    },
    setHomePageTracking: function() {
      if (!this.getUrlParams().Ignore_Kiosk_traffic) {
        var e = {
          siteSections: SH.OMN.siteSections,
          pageType: SH.OMN.pageName,
          appInteraction: SH.OMN.pageName + ": Page view",
          appInteractionType: SH.OMN.pageName + ": Page view",
          appInteractionPage: SH.OMN.pageName,
          pageName: SH.OMN.pageName,
          reco_token: SH.OMN.reco_token,
          city: this.getProp10(),
          tntRecipeAndCampaignName: this.getProp18()
        };
        i.track(e, null, !0)
      }
    },
    getProp10: function() {
      return n.getGeolocationCityFromCache() ? n.getGeolocationCityFromCache() + ", " + n.getGeolocationStateCodeFromCache() : t.get("search.geolocation-filter.defaultLink.text")
    },
    getProp18: function() {
      var e, i, o = a.getDateFilterFromCache();
      if (o && o.prefDate && "custom_date_range" === o.prefDate) return e = s.formatISODateToLocaleDatePattern(o.eventStartDate, "YYYY-MM-DD"), i = s.formatISODateToLocaleDatePattern(o.eventEndDate, "YYYY-MM-DD"), e + " : " + i;
      if (o && o.prefDate) {
        return {
          "all-dates": t.get("homepage.date-filter.all-dates"),
          today: t.get("homepage.date-filter.today"),
          weekend: t.get("homepage.date-filter.weekend"),
          month: t.get("homepage.date-filter.month")
        }[o.prefDate]
      }
      return t.get("homepage.date-filter.default")
    },
    getUrlParams: function() {
      for (var e, t = window.location.search.substring(1), i = t.split("&"), o = {}, r = 0; r < i.length; r++) e = i[r].split("="), e.length > 0 && (o[e[0]] = e[1]);
      return o
    }
  })
}), define("app", ["foobunny", "routes", "i18n", "application_helper", "controllers/page_controller", "scriptsProps", "sh_global_registry", "templates-bundle", "common-globalContextVars"], function(e, t, i, o, r, n, a) {
  var s = new e.Application;
  return i.merge(n), s.i18nDefaults = function() {
    return {
      locale: {
        value: a.getDefaultLocale(),
        replaceUserPref: !0
      }
    }
  }, s.initialize = function() {
    s.initAll(t, {
      appLayout: {
        titleTemplate: _.template("<%= subtitle %>")
      }
    })
  }, s.initPageControllers = function() {
    this.pageController = new r, s.addStartMethod(this.pageController.start)
  }, s.getOptoutUrl = function() {
    return this.optoutUrl
  }, s.setOptoutUrl = function(e) {
    this.optoutUrl = e
  }, SH.appRenderReady = !1, s
}), require(["app"], function(e) {
  e.initialize(), e.start()
}), define("main", function() {}), define("models/column_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({
    defaults: {
      index: 1,
      height: 0
    }
  })
}), define("views/column_view", ["foobunny", "models/column_model", "application_helper"], function(e, t, i) {
  "use strict";
  var o = !1;
  return e.BaseView.extend({
    modelEvents: {},
    initialize: function(e) {
      this.model = new t({
        index: e.index,
        html: "",
        cards: []
      })
    },
    appendCard: function(e, t) {
      var i = this.model.get("html") + e.view.$el.html(),
        o = this.model.get("height") + e.model.get("height"),
        r = this.model.get("cards");
      r.push(e), this.model.set({
        height: o,
        html: i,
        cards: r
      }), t && this.$el.append(e.view.el)
    },
    renderColumn: function() {
      var e, t = this.model.get("cards"),
        i = [];
      for (e = 0; e < t.length; e++) i.push(t[e].view.el);
      this.$el.html(i)
    },
    onAdClick: function(e) {
      var t;
      e && e.id && (t = e.id.indexOf("unit2") > -1 ? 2 : 1);
      var o = {
        appInteraction: SH.OMN.pageName + ": DFP: Marketing " + t,
        appInteractionType: SH.OMN.pageName + ": DFP",
        appInteractionPage: SH.OMN.pageName,
        pageType: SH.OMN.pageName
      };
      i.track(o, null, !1)
    },
    afterRender: function() {
      o || (o = !0, setTimeout(function() {
        var e = document.querySelectorAll(".rectangleAdCard iframe");
        if (e && e.length > 0)
          for (var t = 0; t < e.length; t++) {
            var i = e[t].contentDocument,
              o = i.querySelector("img"),
              r = this.onAdClick.bind(this, e[t]);
            o.addEventListener("mouseup", r, !1)
          }
      }.bind(this), 5e3))
    }
  })
}), define("models/user_favorites_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({
    idAttribute: "entityId",
    initialize: function(t, i) {
      var o = i.guid || (i && i.collection ? i.collection.guid : void 0) || SH.globalProperties.userGuid;
      if (!o || "_null" === o) throw "UserFavoritesModel: Please provide GUID.";
      e.BaseModel.prototype.initialize.apply(this, arguments), this.guid = o
    },
    url: function() {
      return "/shape/recommendations/follows/v2/user/" + this.guid
    },
    toJSON: function() {
      return {
        follows: {
          followsList: [{
            entityId: this.get("entityId"),
            entityType: this.get("entityType"),
            action: this.get("action"),
            source: "UNIFIED",
            pageName: "HomePage",
            createdBy: "HomePage",
            updatedBy: "follow",
            relationshipSource: "SH"
          }]
        }
      }
    }
  })
}), define("models/cardlist_model", ["foobunny", "sh_image", "sh_global_registry", "homepage-logger-component", "application_helper"], function(e, t, i, o, r) {
  "use strict";
  return e.BaseModel.extend({
    initialize: function(e) {
      this.urlParams = {}, e.userGuid && (this.urlParams.userGuid = e.userGuid), e.visitorId && (this.urlParams.visitorId = e.visitorId)
    },
    fetchDone: function(t) {
      this.subModels = {
        recoPaginationModel: new e.BaseModel
      }, this.subModels.recoPaginationModel.set("recoGuid", t.recGuid)
    },
    fetchFail: function() {
      this.subModels = {
        recoPaginationModel: new e.BaseModel
      }, this.subModels.recoPaginationModel.set("recoGuid", null)
    },
    getUrl: function(e) {
      var t = r.isMobile() ? 6 : 12;
      return e ? "/shape/recommendations/core/v2/eventgroupings?handleName=unified_homepage&minAvailableTickets=1&maxEventsPerPerformer=3&limit=" + t : "/shape/search/catalog/events/v3/eventGroupings?sort=popularity&createdDate asc&fieldList=id,name,url,imageUrl,images,dateLocal,dateUTC,ticketInfo,displayAttributes,venue&profileName=reco&hidden=false&minAvailableTickets=1&radius=200&status=active |contingent&units=mi&eventRows=3&groupType=P&parking=false&mirror=false&dateExpansion=false&rows=" + t
    },
    parse: function(e) {
      var i = {
          "55cd8eb9888130c886583d91": "EVENT_FOLLOWS",
          "53fe691e50e4b45c676bbc43": "STUBHUB_FAVORITES",
          "54e32333a5d7de01f870d681": "RELATED_FAVORITES",
          "527d823128ad751fccdfb10c": "GEO_POPULAR"
        },
        r = [];
      if (e && e.groups) {
        this.publishEvent("module:globalcontextvars:apiresponseready", {
          APIName: "recommendations",
          data: e
        });
        for (var n = 0; n < e.groups.length; n++) {
          var a = e.groups[n],
            s = this.getCardType(a.count);
          if (a.cardType = s, a.sraid) {
            a.isFollowed = !1;
            var l = a.sraid,
              d = i[l];
            a.recommendationAlgorithm = d || null, "STUBHUB_FAVORITES" === d ? a.isFollowed = !0 : "GEO_POPULAR" === d && r.length < 3 && r.push({
              id: a.id,
              name: a.name,
              webURI: a.webURI
            })
          }
          if ("hero-card" !== s && "hero-card-2" !== s || (a.zoomImageUrl = t.getUrlFromCatalog(a.images, {
              size: {
                width: 500
              }
            })), a.performerUrl = a && a.webURI ? "/" + a.webURI : "/" + a.type + "/" + a.id + "/", a.events)
            for (var c = 0; c < a.events.length; c++) a.events[c].eventUrl = a.events[c].webURI || "event/" + a.events[c].id + "/";
          else o.log("CardWithNoEvents", {
            message: "The events attribute is non-existent",
            fn: "parse",
            file: "card_model.js",
            component: "Card",
            card_type: s,
            name: a.name,
            type: a.type,
            id: a.id
          }, 1)
        }
        this.publishEvent("searchView:storePopularEvents", r), SH.OMN.reco_token = e.impressionToken
      }
      return e
    },
    getCardType: function(e) {
      return e < 2 ? "hero-card" : 2 === e ? "hero-card-2" : e > 2 ? "list-card" : void 0
    },
    setCategoryId: function(e) {
      e && void 0 !== e && null !== e && (this.urlParams.categoryId = e)
    }
  })
}), define("views/column_layout_error_msg_view", ["foobunny"], function(e) {
  "use strict";
  return e.BaseView.extend({
    template: "homepage-" + SH.appVersion + "/column_layout_error_msg"
  })
}), define("models/loadmore_model", ["foobunny", "application_helper"], function(e, t) {
  "use strict";
  return e.BaseModel.extend({
    defaults: {
      start: t.isMobile() ? 6 : 12,
      rows: t.isMobile() ? 6 : 12,
      totalCount: 0,
      clickCount: 0
    }
  })
}), define("views/loadmore_view", ["foobunny", "i18n", "models/loadmore_model", "application_helper"], function(e, t, i, o) {
  return e.BaseView.extend({
    events: {
      "click .loadmore-button": "loadMoreButtonClick"
    },
    modelEvents: {
      "change:showButton": "render",
      "change:showSpinner": "render"
    },
    template: "homepage-" + SH.appVersion + "/loadmore",
    initialize: function() {
      this.model = new i, this.subscribeEvent("app:afterRenderDone", this.onLayoutRenderComplete), this.render()
    },
    onLayoutRenderComplete: function() {
      var e = this.model.get("totalCount"),
        t = this.model.get("start");
      this.model.set({
        showButton: t < e,
        showSpinner: !1
      })
    },
    loadMoreButtonClick: function() {
      var e = this.model.get("start"),
        t = this.model.get("rows"),
        i = this.model.get("clickCount");
      this.publishEvent("columnLayout:loadMore", {
        start: e
      }), this.model.set({
        start: e + t,
        showButton: !1,
        showSpinner: !0,
        clickCount: i + 1
      }), o.track({
        appInteractionPage: SH.OMN.pageName,
        appInteraction: SH.OMN.pageName + ": Explore: Load more: " + this.model.get("clickCount"),
        appInteractionType: SH.OMN.pageName + ": Explore"
      }, null, !1)
    }
  })
}), define("models/favorites_overlay_model", ["foobunny"], function(e) {
  "use strict";
  return e.BaseModel.extend({
    defaults: {
      showFavoritesOverlay: !1
    },
    initialize: function() {
      this.set({
        showFavoritesOverlay: this.defaults.showFavoritesOverlay
      })
    }
  })
}), define("views/favorites_overlay_view", ["foobunny", "i18n", "models/favorites_overlay_model", "sh_global_registry", "url-parser", "application_helper"], function(e, t, i, o, r, n) {
  var a, s = !1,
    l = !1;
  return e.BaseView.extend({
    template: "homepage-" + SH.appVersion + "/favorites_overlay",
    events: {
      "click #favorites-add-button": "hideFavoriteOverlay",
      "click .favorites-shadow": "hideFavoriteOverlay"
    },
    initialize: function() {
      this.model = new i, this.initializeFavoritesOverlayCache()
    },
    showFavoriteConfirmation: function(e) {
      (a = this.getFavoritesOverlayFromCache()) && "1" === a && (e.artist ? (this.model.set("artist", e.artist), s = !0, l = !1) : (l = !0, s = !1), this.model.set("entityType", e.entityType), this.model.set("showFavoritesOverlay", !0), this.render())
    },
    hideFavoriteOverlay: function() {
      this.model.set("showFavoritesOverlay", !1), this.render(), this.setTracking()
    },
    afterRender: function() {
      this.setDisableFavoritesOverlayInCache()
    },
    initializeFavoritesOverlayCache: function() {
      var t;
      this.favoritesOverlayCache = new e.Cache({
        type: "local",
        namespace: "app",
        expires: 15552e6
      }), null === (t = this.getFavoritesOverlayFromCache()) && this.favoritesOverlayCache.set("enableFavoritesOverlay", "1")
    },
    setDisableFavoritesOverlayInCache: function() {
      this.favoritesOverlayCache.set("enableFavoritesOverlay", "0")
    },
    getFavoritesOverlayFromCache: function() {
      return this.favoritesOverlayCache.get("enableFavoritesOverlay")
    },
    context: function() {
      return {
        uiEnable: {
          addPerformer: s,
          addEventName: l
        }
      }
    },
    setTracking: function() {
      var e = "performer" === this.model.get("entityType") ? "Performer" : "Event",
        t = {
          pageType: SH.OMN.pageName,
          appInteraction: "click: Close",
          appInteractionType: "Favorite: Overlay " + e,
          appInteractionPage: SH.OMN.pageName,
          pageName: SH.OMN.pageName
        };
      n.track(t, null, !1)
    }
  })
}), define("layouts/column_layout", ["underscore", "foobunny", "views/column_view", "homepage-card-component", "models/user_favorites_model", "models/cardlist_model", "sh_global_registry", "views/column_layout_error_msg_view", "views/loadmore_view", "views/favorites_overlay_view", "homepage-logger-component", "sh_mbox_util", "geolocation-helper", "urlUtil", "homeapp-helper", "application_helper"], function(e, t, i, o, r, n, a, s, l, d, c, h, u, m, p, g) {
  "use strict";
  var f, v, b, y = new Date(1, 1, 2e3, 12, 0, 0),
    w = !1,
    C = window.innerWidth,
    S = 1,
    E = [],
    I = [],
    T = null,
    _ = [],
    H = null,
    P = g.isMobile() ? 6 : 12,
    k = window.SH || {},
    x = !1;
  return t.Layout.extend({
    initializeRecoABTest: function() {
      h.MboxInit({
        pageName: "home"
      }, k.mbox, "RecoCategorization", this.parseMboxResponse, this.parseMboxResponse, void 0, 500, this)
    },
    parseMboxResponse: function() {
      k.mbox && k.mbox.recoBucket, this.mBoxDeferred.resolve()
    },
    fetchOnInitialize: !1,
    initialize: function(t) {
      var o = a.getSiteId(),
        r = "gs.features." + o + ".common.hideGeoLocation",
        s = "gs.features." + o + ".homepageapp.enableRecoABTest",
        c = a.getFeatureValue(r, "boolean"),
        h = a.getFeatureValue(s, "boolean"),
        m = t && t.args && (t.args.allDates || t.args.eventStartDate) ? t.args : p.getDateFilterFromCache();
      if (this.mboxUrgencyDeferred = $.Deferred(), v = p.getUserGuid(), b = p.getVisitorId(), this.model = new n({
          rows: P,
          userGuid: k.globalProperties.userGuid || v,
          visitorId: b
        }), this.subscribeEvent({
          "hp:saveFavoriteToFollowsApi": this.postFavorite.bind(this),
          "hp:showColumnLayout": this.showColumnLayout.bind(this),
          "hp:hideColumnLayout": this.hideColumnLayout.bind(this)
        }), this.subscribeEvent("app:afterRenderDone", function() {
          window.setTimeout(e.bind(function() {
            this.publishEvent("card:renderHeroImage")
          }, this), 1)
        }), this.subscribeEvent("app:afterRenderDone", this.renderAdCards), t && void 0 !== t.categoryId && (this.model.setCategoryId(t.categoryId), this.publishEvent("hp:setHubPageTitle", t.categoryId)), $(window).on({
          resize: e.bind(this.onResizeWindow, this),
          scroll: e.throttle(function() {
            this.publishEvent("card:renderHeroImage")
          }.bind(this), 300)
        }), !c)
        if (t && t.args && t.args.point) this.model.urlParams.point = t.args.point.latitude.toString() + "," + t.args.point.longitude.toString();
        else {
          var g = u.getGeolocationCoordinatesFromCache();
          g && (this.model.urlParams.point = g.point)
        }
      m && (m.allDates ? (delete this.model.urlParams.eventStartDate, delete this.model.urlParams.eventEndDate) : (this.model.urlParams.eventStartDate = m.eventStartDate, this.model.urlParams.eventEndDate = m.eventEndDate)), C < 640 ? S = 1 : C >= 640 && C < 960 ? S = 2 : C >= 960 && (S = 3), this.subscribeEvent("AdComponent:renderIncomplete", function(e) {
        var t = $("#boxAdCard" + (e.formatUnit - 1));
        t.removeClass("rectangleAdCard"), t.find(".adComponent").removeClass("adComponent")
      }), this.subscribeEvent("AdComponent:slotRenderComplete", function(e) {
        $("#boxAdCard" + (e.formatUnit - 1)).addClass("no-ad-blocker")
      }), this.mBoxDeferred = $.Deferred(), h ? this.initializeRecoABTest() : this.mBoxDeferred.resolve(), this.mBoxDeferred.done(function() {
        "undefined" !== k.mbox.recoBucket && null !== k.mbox.recoBucket && (this.model.urlParams.bucket = k.mbox.recoBucket), this.fetchData(!0)
      }.bind(this)), this.views = {
        col1: new i({
          el: ".col-1",
          index: 1
        }),
        col2: new i({
          el: ".col-2",
          index: 2
        }),
        col3: new i({
          el: ".col-3",
          index: 3
        })
      }, this.subViews = {
        loadmoreView: new l({
          el: "#loadmore-container"
        }),
        favoritesOverlayView: new d({
          el: "#favorites-overlay-container"
        })
      }, this.subViews.loadmoreView.model.set({
        start: P,
        rows: P
      })
    },
    showColumnLayout: function() {
      this.el.classList.contains("hidden-for-mobile") && (this.el.classList.remove("hidden-for-mobile"), this.handleSearchBlur())
    },
    hideColumnLayout: function() {
      this.el.classList.contains("hidden-for-mobile") || (this.el.classList.add("hidden-for-mobile"), this.handleSearchFocus())
    },
    handleSearchFocus: function() {
      $("#billboard-container").find(".billboard").addClass("hidden-billboard"), this.publishEvent("searchView:focused")
    },
    handleSearchBlur: function() {
      $("#billboard-container").find(".billboard").removeClass("hidden-billboard"), this.publishEvent("searchView:blurred")
    },
    postFavorite: function(e, t) {
      e && !0 === e.action ? this.addFavorite(e, t) : e && !1 === e.action && this.removeFavorite(e, t)
    },
    addFavorite: function(e, t) {
      var i = null,
        o = e.entityType;
      t && t.artist && (i = t.artist);
      var n = new r(e, {
        guid: k.globalProperties.userGuid
      });
      n.set("action", "FOLLOW"), n.save({}, {
        dataType: "text"
      }).then(function() {
        this.publishEvent("hp:showFavoriteConfirmation", {
          artist: i,
          entityType: o
        })
      }.bind(this), function() {
        c.log("FollowsApiError", {
          _message: "Error while trying to add favorite",
          _entityType: o,
          _entityId: e.entityId,
          _apiUrl: n.url()
        }, 1)
      }.bind(this))
    },
    removeFavorite: function(e) {
      var t = new r(e, {
        guid: k.globalProperties.userGuid
      });
      t.set("action", "UNFOLLOW"), t.save({}, {
        dataType: "text"
      }).then(function() {}.bind(this), function() {
        c.log("FollowsApiError", {
          _message: "Error while trying to remove favorite",
          _entityType: e.entityType,
          _entityId: e.entityId,
          _apiUrl: t.url()
        }, 1)
      }.bind(this))
    },
    dispose: function() {
      this.disposeCurrentCards(), this.emptyColumns()
    },
    displayZeroResultsErrMsg: function() {
      var e = u.getGeolocationCoordinatesFromCache();
      this.columnLayoutErrorMsg = new s({
        el: ".error-msg-container"
      }), this.columnLayoutErrorMsg.render(), e ? ($(".error-msg-container").removeClass("hide"), $(".error-msg-text.two").removeClass("hide")) : ($(".error-msg-container").removeClass("hide"), $(".error-msg-text.three").removeClass("hide"))
    },
    disposeCurrentCards: function() {
      for (var e = 0; e < E.length; e++) E[e].dispose();
      E = []
    },
    loadMoreApiCall: function(e) {
      e.start && (this.model.urlParams.start = e.start, this.fetchData(!1))
    },
    makeNewEventsGroupingApiCall: function(e) {
      var t = g.isMobile() ? 6 : 12;
      this.model.subModels && this.model.subModels.recoPaginationModel && (this.model.urlParams.recGuid = this.model.subModels.recoPaginationModel.get("recoGuid")), e.allDates && (delete this.model.urlParams.eventStartDate, delete this.model.urlParams.eventEndDate, delete this.model.urlParams.recGuid, this.model.urlParams.start = 0, x = !0, this.subViews.loadmoreView.model.set("start", t), this.fetchData(!0)), e.eventStartDate && (this.model.urlParams.eventStartDate = e.eventStartDate, this.model.urlParams.eventEndDate = e.eventEndDate, delete this.model.urlParams.recGuid, this.model.urlParams.start = 0, this.subViews.loadmoreView.model.set("start", t), x = !0, this.fetchData(!0)), e.point && (this.model.urlParams.point = e.point.latitude.toString() + "," + e.point.longitude.toString(), this.model.urlParams.start = 0, x = !0, delete this.model.urlParams.recGuid, this.subViews.loadmoreView.model.set("start", t), this.fetchData(!0)), e.start && (this.model.urlParams.start = e.start, this.fetchData(!1))
    },
    renderLayout: function() {
      this.render().done(e.bind(function() {
        this.distributeCardsToColumns(), this.publishEvent("app:afterRenderDone")
      }, this))
    },
    fetchData: function(e) {
      var t = !e;
      return H ? H.then(function() {
        return x ? this.callRecoGroupingApi(e, t) : this.callCatalogGroupingApi(e, t)
      }.bind(this), function(e) {
        this.errorOnFetchData(e, t)
      }.bind(this)) : H = this.callRecoGroupingApi(e, t), H
    },
    callRecoGroupingApi: function(e, t) {
      this.model.url = this.model.getUrl(!0);
      var i = this.model.fetch();
      return i.then(function() {
        return this.publishEvent("recogroupingapi:success"), x = !0, this.resetCardView(e), this.successfulFetchData(t)
      }.bind(this), function() {
        this.errorOnFetchForRecoEventGrouping(t), x && t ? this.errorOnLoadMore() : this.callCatalogGroupingApi(e, t)
      }.bind(this)), i
    },
    callCatalogGroupingApi: function(e, t) {
      this.model.url = this.model.getUrl(!1);
      var i = this.model.fetch();
      return H = i, i.then(function() {
        return this.publishEvent("recogroupingapi:success"), x = !1, this.resetCardView(e), this.successfulFetchData(t)
      }.bind(this), function(e) {
        this.errorOnFetchData(e, t)
      }.bind(this)), i
    },
    resetCardView: function(e) {
      e && (this.disposeCurrentCards(), this.emptyColumns())
    },
    errorOnFetchForRecoEventGrouping: function(e) {
      if (!1 === e) var t = "RecommendationApiError";
      else t = "RecommendationApiLoadMoreError";
      c.log(t, {
        _message: "Error while trying to fetch data from reco api",
        fn: "fetchFail",
        file: "cardlist_model.js",
        _apiUrl: this.model.url
      }, 1)
    },
    errorOnLoadMore: function() {
      this.subViews.loadmoreView.model.set({
        showButton: !1,
        showSpinner: !1
      })
    },
    successfulFetchData: function(e) {
      I = [];
      var t, i = this.model.get("groups"),
        r = this.model.get("totalCount");
      if (this.subViews.loadmoreView.model.set("totalCount", r), !(i.length <= 0)) return $(".error-msg-container").addClass("hide"), i.forEach(function(i) {
        i.lazyLoadHeroImage = !0, i.showTicketsLeftWhenLessThan = 500, i.tixLeft = i.showTicketsLeftWhenLessThan, t = new o({
          render: !1,
          attributes: i,
          showPersonalizedRecoExp: !0
        }), !0 === t.isValid() && (E.push(t), e && I.push(t))
      }), this.renderEachCard();
      this.displayZeroResultsErrMsg(), this.renderLayout()
    },
    errorOnFetchData: function(e, t) {
      H = null, !1 === t ? (this.columnLayoutErrorMsg = new s({
        el: ".error-msg-container"
      }), this.columnLayoutErrorMsg.render(), this.publishEvent("recogroupingapi:fail"), this.columnLayoutErrorMsg.$el.removeClass("hide"), this.columnLayoutErrorMsg.$el.find(".error-msg-text.one").removeClass("hide"), this.errorOnLoadMore(), c.log("CatalogEventGroupingError", {
        _message: "Error while trying to fetch data from catalog Eventgrouping api",
        fn: "fetchFail",
        file: "cardlist_model.js",
        _apiUrl: this.model.url
      }, 1)) : (this.errorOnLoadMore(), c.log("CatalogEventGroupingLoadmoreError", {
        _message: "Error while trying to fetch data from catalog Eventgrouping api",
        fn: "fetchFail",
        file: "cardlist_model.js",
        _apiUrl: this.model.url
      }, 1)), this.publishEvent("layoutRender:error")
    },
    getBoxAdCard: function(e) {
      return T = new o({
        render: !1,
        attributes: {
          index: e,
          cardType: "ad-card",
          el: "#boxAdCard" + e,
          format: "medium rectangle",
          formatUnit: e + 1
        }
      })
    },
    removeAdCard: function(e) {
      E[e] && E[e].options && E[e].options.attributes && "ad-card" === E[e].options.attributes.cardType && E.splice(e, 1)
    },
    removeAllAdCards: function() {
      for (var e = 0; e < _.length; e++) this.removeAdCard(_[e] - e);
      _ = []
    },
    renderEachCard: function() {
      var e = this,
        t = [],
        i = [];
      if (0 === I.length) {
        var o, r = Math.min(this.model.get("groups").length, P);
        if (this.removeAllAdCards(), o = 3 === S ? 2 : 2 === S ? 1 : 4, a.getDefaultLocale() !== k.locale && (k.isAdBlockOff = !1), !0 === k.isAdBlockOff)
          for (var n = 0, s = 0; s <= r; s++) s === o && (E.splice(o, 0, this.getBoxAdCard(n)), _.push(o), o += 6, n += 1);
        i = E
      } else i = I;
      for (var l = 0; l < i.length; l++) {
        i[l].view.subscribeEvent("card:renderHeroImage", function() {
          this.renderHeroImage()
        });
        var d = i[l].render();
        t.push(d)
      }
      var c = $.when.apply($, t);
      return c.done(function() {
        e.renderLayout()
      }), c
    },
    getColumnByIndex: function(t) {
      var i = !1;
      return e.each(this.views, function(e) {
        e.model.get("index") === t && (i = e)
      }), i
    },
    getNextColumnView: function() {
      return 1 === S ? this.getColumnByIndex(1) : 2 === S ? e.min([this.getColumnByIndex(1), this.getColumnByIndex(2)], function(e) {
        return e.model.get("height")
      }) : 3 === S ? e.min([this.getColumnByIndex(1), this.getColumnByIndex(2), this.getColumnByIndex(3)], function(e) {
        return e.model.get("height")
      }) : void 0
    },
    emptyColumns: function() {
      this.views.col1.model.set({
        html: "",
        height: 0,
        cards: []
      }), this.views.col2.model.set({
        html: "",
        height: 0,
        cards: []
      }), this.views.col3.model.set({
        html: "",
        height: 0,
        cards: []
      }), this.views.col1.renderColumn(), this.views.col2.renderColumn(), this.views.col3.renderColumn()
    },
    distributeCardsToColumns: function() {
      var e, t, i = !1;
      I.length > 0 ? (t = I, i = !0) : t = E;
      for (var o = 0; o < t.length; o++)(e = this.getNextColumnView()) && e.appendCard(t[o], i);
      i || this.renderColumns(), this.publishEvent("hp:cardsAddedToDom"), I = []
    },
    renderColumns: function() {
      this.views.col1.renderColumn(), this.views.col2.renderColumn(), this.views.col3.renderColumn()
    },
    renderAdCards: function() {
      require(["common-delay"], function() {
        require(["common-adComponent"], function(e) {
          for (var t, i = this.options.categoryId ? "hubpage" : "homepage", o = {
              pageType: i,
              categoryId: this.options.categoryId || "",
              pageUrl: window.location.href,
              protocol: window.location.protocol.substring(0, window.location.protocol.length - 1)
            }, r = 0; r < _.length; r++) t = new e({
            el: "#boxAdCard" + r,
            format: "medium rectangle",
            formatUnit: r + 1,
            provider: "DFP",
            targetConfig: o
          }), t.render()
        }.bind(this))
      }.bind(this))
    },
    didReflow1ColTo2Col: function() {
      return C < 640 && f >= 640 && f < 960
    },
    didReflow1ColTo3Col: function() {
      return C < 640 && f >= 960
    },
    didReflow2ColTo3Col: function() {
      return C < 960 && C > 640 && f >= 960
    },
    didReflow2ColTo1Col: function() {
      return C >= 640 && C < 960 && f < 640
    },
    didReflow3ColTo2Col: function() {
      return C >= 960 && f < 960 && f > 640
    },
    didReflow3ColTo1Col: function() {
      return C >= 960 && f < 640
    },
    reshuffleLayout: function() {
      var e = !1;
      this.didReflow1ColTo2Col() ? (S = 2, e = !0) : this.didReflow1ColTo3Col() ? (S = 3, e = !0) : this.didReflow2ColTo3Col() ? (S = 3, e = !0) : this.didReflow2ColTo1Col() ? (S = 1, e = !0) : this.didReflow3ColTo1Col() ? (S = 1, e = !0) : this.didReflow3ColTo2Col() && (S = 2, e = !0), e && (this.emptyColumns(), this.renderEachCard()), C = f
    },
    onResizeWindow: function() {
      y = new Date, !1 === w && (w = setTimeout(e.bind(this.onResizeEnd, this), 200))
    },
    onResizeEnd: function() {
      new Date - y < 200 ? (clearTimeout(w), w = setTimeout(e.bind(this.onResizeEnd, this), 200)) : (clearTimeout(w), f = window.innerWidth, w = !1, this.reshuffleLayout(), this.publishEvent("layout:resized"))
    }
  })
}), define("helpers/header_helper", [], function() {
  "use strict";
  return function() {
    function e(e) {
      var t = "",
        i = "",
        o = "",
        r = "",
        n = $("head");
      e && _.each(e, function(e) {
        e && (_.each(e.attributes, function(e) {
          i = Object.keys(e).toString(), o = e[i], r += "[" + i + '="' + o + '"]'
        }), t = n.find(e.type + r), t && 0 === t.length && (t = $("<" + e.type + "></" + e.type + ">"), _.each(e.attributes, function(e) {
          i = Object.keys(e).toString(), o = e[i], t.attr(i, o)
        }), n.append(t)), e.value && t.html(e.value))
      })
    }
    return {
      upsertHeadTags: e
    }
  }()
}), define("controllers/column_layout_controller", ["foobunny", "app", "i18n", "layouts/column_layout", "helpers/header_helper", "application_helper", "performer-card", "mbox-helper", "application_helper", "homepage-performer-card-helper", "homeapp-helper", "geolocation-helper", "sh_global_registry", "sh-hreflang"], function(e, t, i, o, r, n, a, s, l, d, c, h, u, m) {
  "use strict";
  var p = !1,
    g = !1;
  return e.Controller.extend({
    show: function() {
      this.view.render()
    },
    start: function() {
      var e = window.SH;
      if (e.OMN = {}, this.eventSubscriber(), this.mbox = {}, this.initializePerformerCardtest(), this.subscribeEvent("app:render-ready", this.updateHomePageMetaTags), this.subscribeEvent("app:render-ready", this.appRenderReady), this.catgoryId = this.req.urlParams.categoryId || null, null !== this.catgoryId && void 0 !== this.catgoryId) {
        e.OMN = e.HUB_OMN;
        var i = parseInt(this.catgoryId),
          o = 28 === i ? "Sports" : 174 === i ? "Theater" : "Concert";
        e.OMN.category = o, e.OMN.pageName = e.OMN.pageName + ": " + o, e.OMN.pageType = e.OMN.pageName, this.publishEvent("hp:retrieveCategoryIdFromHubUrl", {
          categoryId: this.catgoryId
        }), t.setOptoutUrl("http://www." + e.targetHost + ".com/?genre_id=" + this.catgoryId + "&ucOptOut=true")
      } else this.req.path ? t.setOptoutUrl("http://www." + e.targetHost + ".com/" + this.req.path) : (this.publishEvent("hp:loadHomepage"), e.OMN = e.HP_OMN, t.setOptoutUrl("http://www." + e.targetHost + ".com/?ucOptOut=true"))
    },
    subscribeEventsForPerformerCard: function() {
      $("#performer-card-widget").on("stubhub-visual-component:rendered", function(e, t) {
        t && t.errors && 0 === t.errors.length && (this.hideErrorMessage(), document.getElementById("performer-card-widget").style.display = "block", this.view && this.view.$el.addClass("hidden")), this.afterRenderDone(), this.hideLoadMore()
      }.bind(this)), $(document.body).on("stubhub-visual-component:favorite-action", d.handleFavorites), $("#performer-card-widget").on("stubhub-visual-component:card-action", d.trackCardAction), $("#performer-card-widget").on("stubhub-visual-component:event-click", d.trackEventClick), $("#performer-card-widget").on("stubhub-visual-component:see-all-events-click", function(e, t) {
        var i = {
          pageType: SH.OMN.pageName,
          appInteraction: "UE: Performer Card: See all events",
          appInteractionType: "Type UE: Performer Card",
          appInteractionPage: SH.OMN.pageName,
          pageName: SH.OMN.pageName
        };
        l.track(i, null, !1)
      }), $("#performer-card-widget").on("stubhub-visual-component:error", function(e, t) {
        var i = {
          allDates: !0
        };
        this.showOldCardView(i)
      }.bind(this))
    },
    eventSubscriber: function() {
      this.subscribeEvent("date-filter:updateDateRange", this.switchCardView), this.subscribeEvent("geolocation-filter:updatedCurrentLocation", this.switchCardView), this.subscribeEvent("columnLayout:loadMore", this.loadMore), this.subscribeEvent("recogroupingapi:success", this.hideErrorMessage), this.subscribeEvent("recogroupingapi:success", this.showOldHidePC), this.subscribeEvent("recogroupingapi:fail", this.hideOldHidePC)
    },
    hideErrorMessage: function() {
      this.view && this.view.columnLayoutErrorMsg && this.view.columnLayoutErrorMsg.$el.addClass("hide")
    },
    switchCardView: function(e) {
      var t = this.isEventStartDate(e);
      SH.mbox && void 0 !== SH.mbox.performerCard && !0 === SH.mbox.performerCard && !t && "fr-ca" !== SH.locale ? (this.showPerformerCardView(e), document.getElementById("category-title-container").style.display = "none", g || (g = !0, this.subscribeEventsForPerformerCard())) : (this.showOldCardView(e), document.getElementById("category-title-container").style.display = "block")
    },
    loadMore: function(e) {
      this.view && this.view.loadMoreApiCall(e)
    },
    showOldCardView: function(e) {
      this.view ? this.view.makeNewEventsGroupingApiCall(e) : this.initColumnLayout(e)
    },
    showPerformerCardView: function(e) {
      this.initializePerformerCard(e)
    },
    hideLoadMore: function() {
      this.view && this.view.subViews && this.view.subViews.loadmoreView.model.set({
        showButton: !1
      })
    },
    isEventStartDate: function(e) {
      var t = c.getDateFilterFromCache();
      return !!(e && e.eventStartDate || t && t.eventStartDate)
    },
    showOldHidePC: function() {
      this.view.$el.removeClass("hidden");
      var e = document.getElementById("performer-card-widget");
      e && (e.style.display = "none")
    },
    hideOldHidePC: function() {
      this.view.$el.addClass("hidden");
      var e = document.getElementById("performer-card-widget");
      e && (e.style.display = "none")
    },
    afterRenderDone: function() {
      p || (p = !0, this.loadDelayModule(), this.publishEvent("app:render-ready"))
    },
    initColumnLayout: function(e) {
      this.view = new o({
        el: ".sh-column-layout",
        categoryId: this.req.urlParams.categoryId,
        params: this.req.urlParams,
        args: e
      }), this.view.renderPromise.done(function() {
        this.afterRenderDone()
      }.bind(this))
    },
    initializePerformerCardtest: function() {
      SH.mbox.performerCard = {}, "localhost" === document.location.hostname || this.req && "true" === this.req.urlParams.performerCard ? (SH.mbox.performerCard = !0, this.switchCardView()) : this.req && "false" === this.req.urlParams.performerCard ? (SH.mbox.performerCard = !1, this.switchCardView()) : this.initializeperformerCardABTest()
    },
    initializeperformerCardABTest: function() {
      var e = this.mbox && this.mbox.performerCard;
      e = new s({
        featureToggleSwitch: {
          name: "homepage.enableABtestPC",
          type: "boolean"
        },
        featureForceEnableSwitch: {
          name: "homepage.enableTogglePC",
          type: "boolean"
        },
        shParamName: "performerCard",
        mboxName: "performerCard",
        params: {
          pageName: SH.appName
        },
        targetElementSelector: "#target-performerCard-mbox",
        successCallback: this.switchCardView,
        errorCallback: this.switchCardView,
        context: this
      }), e.start()
    },
    initializePerformerCard: function(e) {
      this.setPCWidgetDataAttr(e), a && a.init()
    },
    setPCWidgetDataAttr: function(e) {
      var t = document.getElementById("performer-card-widget"),
        i = c.getUserGuid(),
        o = c.getVisitorId(),
        r = u.getSiteId(),
        n = this.req.urlParams.categoryId;
      this.setGeolocationForPC(e, t), t.setAttribute("data-limit", 7), i && t.setAttribute("data-user-guid", i), o && t.setAttribute("data-visitor-id", o), r && t.setAttribute("data-sh-store", r), n && t.setAttribute("data-category-id", n)
    },
    setGeolocationForPC: function(e, t) {
      if (e && e.point) {
        var i = e.point.latitude.toString() + "," + e.point.longitude.toString();
        t.setAttribute("data-point", i)
      } else {
        var o = h.getGeolocationCoordinatesFromCache();
        o && o.point && t.setAttribute("data-point", o.point)
      }
    },
    loadDelayModule: function() {
      var e = this;
      require(["module-delay"], function(e) {
        var t = document.createElement("link"),
          i = SH.app.staticHost + "/resources/shape/styles/" + SH.appName + "-" + SH.appVersion;
        t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), SH.brandName && SH.brandName.length > 0 ? t.setAttribute("href", i + "/module-delay." + SH.brandName + ".css") : t.setAttribute("href", i + "/module-delay.css"), void 0 !== t && document.head.appendChild(t)
      });
      var t = "gs.features." + u.getSiteId() + ".common.seasonskins.config";
      (u.getFeatureValue(t, "boolean") || this.req && this.req.urlParams && this.req.urlParams.seasonalSkin) && (this.loadDelayModuleCssBundle(), require(["module-seasonal"], function() {
        e.seasonalSkinsHandler()
      }))
    },
    loadDelayModuleCssBundle: function() {
      if (!document.getElementById("module-seasonal")) {
        var e = document.getElementsByTagName("head")[0],
          t = document.createElement("link"),
          i = SH.brandName || "",
          o = "module-seasonal.css";
        t.id = "module-seasonal", t.rel = "stylesheet", t.type = "text/css", i && (o = "module-seasonal." + i + ".css"), t.href = SH.configBaseUrl + "/resources/shape/styles/" + SH.appFolder + "/" + o, e.appendChild(t)
      }
    },
    seasonalSkinsHandler: function() {
      require(["seasonal-skins"], function(e) {
        new e({
          skinName: "snow"
        }).render()
      })
    },
    appRenderReady: function() {
      SH.appRenderReady = !0, this.publishEvent("layoutRender:completed")
    },
    updateHomePageMetaTags: function() {
      if (null === this.catgoryId || void 0 === this.catgoryId) {
        var e, t = i.get("homepage.pageTitle"),
          o = window.location.protocol + "//" + window.location.host + "/",
          a = i.get("homepage.description"),
          s = this.getSEOScriptTag(),
          l = u.getSiteId(),
          d = "gs.features." + l + "." + SH.appName + ".enableHreflang";
        if (u.getFeatureValue(d, "boolean")) {
          (new m).render()
        }
        r.upsertHeadTags(s), window.setTimeout(function() {
          e = [{
            type: "title",
            content: t
          }, {
            type: "meta",
            attribute: ["name", "description"],
            contents: [
              ["content", a]
            ]
          }, {
            type: "meta",
            attribute: ["property", "og:description"],
            contents: [
              ["content", a]
            ]
          }, {
            type: "meta",
            attribute: ["property", "og:url"],
            contents: [
              ["content", o]
            ]
          }, {
            type: "link",
            attribute: ["rel", "canonical"],
            contents: [
              ["href", o]
            ]
          }, {
            type: "link",
            attribute: ["rel", "alternate"],
            contents: [
              ["href", "android-app://com.stubhub/stubhub/stubhub.com/?homescreen&amp;GCID=search-deeplink:Home"]
            ]
          }], n.updateHeadTags(e)
        }, 0)
      }
    },
    getSEOScriptTag: function() {
      var e = window.location.protocol + "//" + window.location.host + "/",
        t = JSON.stringify({}),
        i = {};
      return i["@context"] = "http://schema.org", i["@type"] = "WebSite", i.url = e, i.potentialAction = {}, i.potentialAction["@type"] = "SearchAction", i.potentialAction.target = e + "find/s/?q={search_term}", i.potentialAction["query-input"] = "required name=search_term", t = JSON.stringify(i), [{
        type: "script",
        attributes: [{
          type: "application/ld+json"
        }],
        value: t
      }]
    }
  })
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
  return typeof e
} : function(e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
};
! function(e, t) {
  "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) ? module.exports = t(): "function" == typeof define && define.amd ? define("Siema", [], t) : "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports.Siema = t() : e.Siema = t()
}(void 0, function() {
  return function(e) {
    function t(o) {
      if (i[o]) return i[o].exports;
      var r = i[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.i = function(e) {
      return e
    }, t.d = function(e, i, o) {
      t.o(e, i) || Object.defineProperty(e, i, {
        configurable: !1,
        enumerable: !0,
        get: o
      })
    }, t.n = function(e) {
      var i = e && e.__esModule ? function() {
        return e.default
      } : function() {
        return e
      };
      return t.d(i, "a", i), i
    }, t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 0)
  }([function(e, t, i) {
    "use strict";

    function o(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function(e) {
        return void 0 === e ? "undefined" : _typeof(e)
      } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : _typeof(e)
      },
      n = function() {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }
        return function(t, i, o) {
          return i && e(t.prototype, i), o && e(t, o), t
        }
      }(),
      a = function() {
        function e(t) {
          var i = this;
          o(this, e), this.config = e.mergeSettings(t), this.selector = "string" == typeof this.config.selector ? document.querySelector(this.config.selector) : this.config.selector, this.selectorWidth = this.selector.getBoundingClientRect().width, this.innerElements = [].slice.call(this.selector.children), this.currentSlide = this.config.startIndex, this.transformProperty = e.webkitOrNot(), ["resizeHandler", "touchstartHandler", "touchendHandler", "touchmoveHandler", "mousedownHandler", "mouseupHandler", "mouseleaveHandler", "mousemoveHandler"].forEach(function(e) {
            i[e] = i[e].bind(i)
          }), this.init()
        }
        return n(e, [{
          key: "init",
          value: function() {
            if (window.addEventListener("resize", this.resizeHandler), this.config.draggable && (this.pointerDown = !1, this.drag = {
                startX: 0,
                endX: 0,
                startY: 0,
                letItGo: null
              }, this.selector.addEventListener("touchstart", this.touchstartHandler), this.selector.addEventListener("touchend", this.touchendHandler), this.selector.addEventListener("touchmove", this.touchmoveHandler, {
                passive: !0
              }), this.selector.addEventListener("mousedown", this.mousedownHandler), this.selector.addEventListener("mouseup", this.mouseupHandler), this.selector.addEventListener("mouseleave", this.mouseleaveHandler), this.selector.addEventListener("mousemove", this.mousemoveHandler)), null === this.selector) throw new Error("Something wrong with your selector 😭");
            this.resolveSlidesNumber(), this.selector.style.overflow = "hidden", this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
            for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
              var i = document.createElement("div");
              i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i)
            }
            this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent(), this.config.onInit.call(this)
          }
        }, {
          key: "resolveSlidesNumber",
          value: function() {
            if ("number" == typeof this.config.perPage) this.perPage = this.config.perPage;
            else if ("object" === r(this.config.perPage)) {
              this.perPage = 1;
              for (var e in this.config.perPage) window.innerWidth >= e && (this.perPage = this.config.perPage[e])
            }
          }
        }, {
          key: "prev",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1],
              i = this.currentSlide;
            0 === this.currentSlide && this.config.loop ? this.currentSlide = this.innerElements.length - this.perPage : this.currentSlide = Math.max(this.currentSlide - e, 0), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
          }
        }, {
          key: "next",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
              t = arguments[1],
              i = this.currentSlide;
            this.currentSlide === this.innerElements.length - this.perPage && this.config.loop ? this.currentSlide = 0 : this.currentSlide = Math.min(this.currentSlide + e, this.innerElements.length - this.perPage), i !== this.currentSlide && (this.slideToCurrent(), this.config.onChange.call(this), t && t.call(this))
          }
        }, {
          key: "goTo",
          value: function(e, t) {
            this.currentSlide = Math.min(Math.max(e, 0), this.innerElements.length - 1), this.slideToCurrent(), t && t.call(this)
          }
        }, {
          key: "slideToCurrent",
          value: function() {
            this.sliderFrame.style[this.transformProperty] = "translate3d(-" + this.currentSlide * (this.selectorWidth / this.perPage) + "px, 0, 0)"
          }
        }, {
          key: "updateAfterDrag",
          value: function() {
            var e = this.drag.endX - this.drag.startX,
              t = Math.abs(e),
              i = Math.ceil(t / (this.selectorWidth / this.perPage));
            e > 0 && t > this.config.threshold && this.innerElements.length > this.perPage ? this.prev(i) : e < 0 && t > this.config.threshold && this.innerElements.length > this.perPage && this.next(i), this.slideToCurrent()
          }
        }, {
          key: "resizeHandler",
          value: function() {
            this.resolveSlidesNumber(), this.selectorWidth = this.selector.getBoundingClientRect().width, this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.slideToCurrent()
          }
        }, {
          key: "clearDrag",
          value: function() {
            this.drag = {
              startX: 0,
              endX: 0,
              startY: 0,
              letItGo: null
            }
          }
        }, {
          key: "touchstartHandler",
          value: function(e) {
            e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.touches[0].pageX, this.drag.startY = e.touches[0].pageY
          }
        }, {
          key: "touchendHandler",
          value: function(e) {
            e.stopPropagation(), this.pointerDown = !1, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag()
          }
        }, {
          key: "touchmoveHandler",
          value: function(e) {
            e.stopPropagation(), null === this.drag.letItGo && (this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX)), this.pointerDown && this.drag.letItGo && (this.drag.endX = e.touches[0].pageX, this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + -1 * (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) + "px, 0, 0)")
          }
        }, {
          key: "mousedownHandler",
          value: function(e) {
            e.preventDefault(), e.stopPropagation(), this.pointerDown = !0, this.drag.startX = e.pageX
          }
        }, {
          key: "mouseupHandler",
          value: function(e) {
            e.stopPropagation(), this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.drag.endX && this.updateAfterDrag(), this.clearDrag()
          }
        }, {
          key: "mousemoveHandler",
          value: function(e) {
            e.preventDefault(), this.pointerDown && (this.drag.endX = e.pageX, this.selector.style.cursor = "-webkit-grabbing", this.sliderFrame.style.webkitTransition = "all 0ms " + this.config.easing, this.sliderFrame.style.transition = "all 0ms " + this.config.easing, this.sliderFrame.style[this.transformProperty] = "translate3d(" + -1 * (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) + "px, 0, 0)")
          }
        }, {
          key: "mouseleaveHandler",
          value: function(e) {
            this.pointerDown && (this.pointerDown = !1, this.selector.style.cursor = "-webkit-grab", this.drag.endX = e.pageX, this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.updateAfterDrag(), this.clearDrag())
          }
        }, {
          key: "updateFrame",
          value: function() {
            this.sliderFrame = document.createElement("div"), this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + "px", this.sliderFrame.style.webkitTransition = "all " + this.config.duration + "ms " + this.config.easing, this.sliderFrame.style.transition = "all " + this.config.duration + "ms " + this.config.easing, this.config.draggable && (this.selector.style.cursor = "-webkit-grab");
            for (var e = document.createDocumentFragment(), t = 0; t < this.innerElements.length; t++) {
              var i = document.createElement("div");
              i.style.cssFloat = "left", i.style.float = "left", i.style.width = 100 / this.innerElements.length + "%", i.appendChild(this.innerElements[t]), e.appendChild(i)
            }
            this.sliderFrame.appendChild(e), this.selector.innerHTML = "", this.selector.appendChild(this.sliderFrame), this.slideToCurrent()
          }
        }, {
          key: "remove",
          value: function(e, t) {
            if (e < 0 || e > this.innerElements.length) throw new Error("Item to remove doesn't exist 😭");
            this.innerElements.splice(e, 1), this.currentSlide = e < this.currentSlide ? this.currentSlide - 1 : this.currentSlide, this.updateFrame(), t && t.call(this)
          }
        }, {
          key: "insert",
          value: function(e, t, i) {
            if (t < 0 || t > this.innerElements.length + 1) throw new Error("Unable to inset it at this index 😭");
            if (-1 !== this.innerElements.indexOf(e)) throw new Error("The same item in a carousel? Really? Nope 😭");
            this.innerElements.splice(t, 0, e), this.currentSlide = t <= this.currentSlide ? this.currentSlide + 1 : this.currentSlide, this.updateFrame(), i && i.call(this)
          }
        }, {
          key: "prepend",
          value: function(e, t) {
            this.insert(e, 0), t && t.call(this)
          }
        }, {
          key: "append",
          value: function(e, t) {
            this.insert(e, this.innerElements.length + 1), t && t.call(this)
          }
        }, {
          key: "destroy",
          value: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments[1];
            if (window.removeEventListener("resize", this.resizeHandler), this.selector.style.cursor = "auto", this.selector.removeEventListener("touchstart", this.touchstartHandler), this.selector.removeEventListener("touchend", this.touchendHandler), this.selector.removeEventListener("touchmove", this.touchmoveHandler), this.selector.removeEventListener("mousedown", this.mousedownHandler), this.selector.removeEventListener("mouseup", this.mouseupHandler), this.selector.removeEventListener("mouseleave", this.mouseleaveHandler), this.selector.removeEventListener("mousemove", this.mousemoveHandler), e) {
              for (var i = document.createDocumentFragment(), o = 0; o < this.innerElements.length; o++) i.appendChild(this.innerElements[o]);
              this.selector.innerHTML = "", this.selector.appendChild(i), this.selector.removeAttribute("style")
            }
            t && t.call(this)
          }
        }], [{
          key: "mergeSettings",
          value: function(e) {
            var t = {
                selector: ".siema",
                duration: 200,
                easing: "ease-out",
                perPage: 1,
                startIndex: 0,
                draggable: !0,
                threshold: 20,
                loop: !1,
                onInit: function() {},
                onChange: function() {}
              },
              i = e;
            for (var o in i) t[o] = i[o];
            return t
          }
        }, {
          key: "webkitOrNot",
          value: function() {
            return "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
          }
        }]), e
      }();
    t.default = a, e.exports = t.default
  }])
}), define("lib/siema.min", function() {});
//# sourceMappingURL=main.js.map