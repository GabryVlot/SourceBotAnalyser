/***************************************
 * @preserve
 * ForeSee Web SDK: Trigger
 * Built May 12, 17 14:02:42
 * Code version: 19.3.3-v.2
 * Template version: 19.3.3-v.2
 ***************************************/
_fsDefine(["require", "fs", _fsNormalizeUrl("$fs.utils.js"), "triggerconfig"], function(e, t, i, config) {
  "string" == typeof t.startTS && (t.startTS = i.now());
  var r = {
      loadedEmitter: new i.FSEvent,
      initializedEmitter: new i.FSEvent,
      inviteShownEmitter: new i.FSEvent,
      inviteAcceptedEmitter: new i.FSEvent,
      inviteDeclinedEmitter: new i.FSEvent,
      trackerShownEmitter: new i.FSEvent,
      customInvitationRequested: new i.FSEvent,
      CPPS: null,
      state: {
        didInvite: !1
      }
    },
    s = {
      INVITE_SHOWN: "fs_inviteShown",
      INVITE_ACCEPTED: "fs_inviteAccepted",
      INVITE_DECLINED: "fs_inviteDeclined",
      INVITE_ABANDONED: "fs_inviteAbandoned",
      LINKS_CANCEL: "fs_linksCancel",
      TRACKER_SHOWN: "fs_trackerShown",
      TRACKER_CLICKED: "fs_trackerClicked",
      QUALIFIER_ACCEPTED: "fs_qualifierAccepted",
      QUALIFIER_DECLINED: "fs_qualifierDeclined",
      QUALIFIER_SHOWN: "fs_qualifierShown",
      REMINDER_SHOWN: "fs_reminderShown",
      REMINDER_ACCEPTED: "fs_reminderAccepted",
      SURVEY_SHOWN: "fs_surveyShown"
    };
  if (config && config.surveydefs)
    for (var n = 0; n < config.surveydefs.length; n++) t.isString(config.surveydefs[n]) && (config.surveydefs[n] = i.compile(i.b64DecodeUnicode(config.surveydefs[n])));
  var o = window,
    a = new i.Cookie({
      path: "/",
      secure: !1,
      encode: !0
    });
  i.Compress;
  if (t.fsCmd("fstest")) return void e([t.makeURI("$fs.svadmin.js")], function(e) {});
  if (t.fsCmd("fsoptout")) return void e([t.makeURI("$fs.optout.js")], function(e) {});
  var c = function(e, i, r, s, n) {
      var a = {
          width: 700,
          height: 350,
          left: 50,
          top: 50,
          resizable: "no",
          scrollbar: "1",
          scrollbars: "1",
          toolbar: "no",
          menubar: "no",
          location: "1",
          directories: "no",
          status: "no"
        },
        c = t.ext(a, r),
        f = "";
      for (var u in c) f += u + "=" + c[u] + ",";
      var l = this._win = o.open(e, i, f);
      if (l && n)
        if (l.blur(), l.opener.window.focus(), window.self.window.focus(), o.focus(), "Firefox" == s.browser.name) {
          var d = o.open("about:blank");
          d.focus(), d.close()
        } else s.isIE && setTimeout(function() {
          l.blur(), l.opener.window.focus(), o.self.window.focus(), o.focus()
        }, 1e3);
      return l
    },
    f = function() {
      var e = this;
      this.isOver = !0, i.Bind(document, "trigger:mouseout", function(t) {
        t = t || o.event;
        var i = t.relatedTarget || t.toElement;
        i && "HTML" != i.nodeName || e.isOver && (e.isOver = !1)
      }, !1), i.Bind(document, "trigger:mouseover", function(t) {
        e.isOver || (e.isOver = !0)
      }, !1), i.Bind(document, "trigger:mousemove", function(t) {
        e.isOver || (e.isOver = !0)
      })
    },
    u = config.config.surveyAsyncCurl,
    l = {
      SERVICE_TYPES: {
        mobileOnExitInitialize: {
          host: u,
          path: "/e",
          url: "/initialize"
        },
        mobileOnExitHeartbeat: {
          host: u,
          path: "/e",
          url: "/recordHeartbeat"
        }
      }
    };
  l.log = function(e, t, config, r, s, n, o, a) {
    var c = new Date,
      f = new i.ImageTransport,
      u = config.config,
      l = s.get("rid"),
      d = s.get("q"),
      p = {
        ver: 1,
        cid: u.id,
        rid: l,
        q: d,
        type: s.get("dn") || "",
        site: u.site_id,
        msg: n,
        tms: c.getTime(),
        tmz: 6e4 * c.getTimezoneOffset()
      };
    if (r && (p.cat = r.name || "", p.sec = r.section || "", p.lang = r.language.locale || ""), "object" == typeof t) {
      p.param = "";
      for (var h in t) p.param += encodeURIComponent(h) + "=" + encodeURIComponent(t[h]) + "&"
    } else "string" == typeof t && (p.param = t);
    for (var g in p) void 0 !== p[g] && null !== p[g] || delete p[g];
    e && f.send({
      url: "https://" + e.host + e.path + (e.url || ""),
      success: o || function() {},
      failure: a || function() {},
      data: p
    })
  }, l.ping = function(e, t, r, s) {
    var n = new i.ImageTransport,
      o = "https://" + e.host + e.path + (e.url || "");
    n.send({
      url: o,
      success: r || function() {},
      failure: s || function() {},
      data: t
    })
  };
  var d = function(s, n, o, a, c, f, u) {
      if (this.trig = s, this.browser = n, this.stg = o, this.cpps = a, this.displayoverride = c, this.jrny = f, r.state.didInvite = !0, t.isDefined(this.trig.surveydef.inviteExclude) && t.isDefined(this.trig.crit) && this.trig.crit.runAllTests(this.trig.surveydef.inviteExclude, this.browser, !1, !0)) return !1;
      var l = this;
      i.Healthy(this.browser, ["survey"], t.proxy(function() {
        fsReady(function() {
          s.invite && s.invite.dispose(), e([t.makeURI("$fs.invite.js")], function(e) {
            var t = l.invite = s.invite = new e(config, s.surveydef, n, o.fstg, c, a, r);
            o.set("dn", t.display.displayname), a.set("dn", t.display.displayname), u && u.call(l)
          })
        })
      }, this), t.proxy(function() {}, this))
    },
    p = function(e, t, i) {
      var r = new D(i, config, e.surveydef, e.cpps, e.stg.get("rid"), e.locale);
      e.stg.get("mhbi") ? r.beginHeartbeat() : r.init(t, function() {
        r.beginHeartbeat()
      })
    };
  d.prototype.initialize = function() {
    var e = this.trig,
      n = this.browser,
      o = this.stg,
      a = this.cpps,
      c = (this.displayoverride, this.invite),
      f = this.jrny;
    i.Healthy(n, ["survey", "static"], t.proxy(function() {
      c.loadResources(function() {
        setTimeout(function() {
          c.present(), r.inviteShownEmitter.fire(e.surveydef, o, config, a), f.addEvent(s.INVITE_SHOWN)
        }, Math.max(0, config.config.inviteDelay - (i.now() - t.startTS)))
      }), c.declined.subscribe(function(i) {
        var n = t.isDefined(config.active_surveydef) && t.isDefined(config.active_surveydef.repeatDays) ? config.active_surveydef.repeatDays : config.config.repeatDays;
        o.setMaxKeyExpiration(24 * n.decline * 60 * 60 * 1e3), f.addEventObj({
          name: s.INVITE_DECLINED,
          properties: {
            action: [i]
          }
        }), r.inviteDeclinedEmitter.fire(e.surveydef, o, config, a), e.surveydef.cxRecord && r.rec && "y" != o.get("fbr") && (r.rec.cancelRecord(), e.recordController = r.rec = null), o.set("i", "d"), r.state.inviteSituation = "DECLINED"
      }), c.abandoned.subscribe(function() {
        f.addEventString(s.INVITE_ABANDONED), o.set("i", "a"), r.state.inviteSituation = "ABANDONED", o.set("rw", i.now() + config.config.reinviteDelayAfterInviteAbandon)
      }), c.accepted.subscribe(function(n, u) {
        var l = t.isDefined(config.active_surveydef) && t.isDefined(config.active_surveydef.repeatDays) ? config.active_surveydef.repeatDays : config.config.repeatDays;
        switch (o.setMaxKeyExpiration(24 * l.accept * 60 * 60 * 1e3), r.inviteAcceptedEmitter.fire(e.surveydef, o, config, a), e.surveydef.cxRecord && r.rec && r.rec.recorder && (r.rec.beginTransmitting(), a.set("replay_id", r.rec.recorder.logger.gsessionid), a.set("sessionid", r.rec.recorder.logger.sessionid)), f.addEventString(s.INVITE_ACCEPTED), o.set("i", "x"), r.state.inviteSituation = "ACCEPTED", o.set("ixw", i.now()), n) {
          case "TRACKER":
            e.popTracker(c);
            break;
          case "INSESSION":
            e.popSurvey();
            break;
          case "SMS":
          case "EMAIL":
          case "SMSEMAIL":
            p(e, u, n), e.stg.set("mhbi", {
              ui: u,
              it: n
            })
        }
      })
    }, this), t.proxy(function() {}, this))
  };
  var h = function(config, e, t) {
    this.cfg = config, this.cpps = e, this.def = t, this.locale = e.get("locale") || "en"
  };
  h.prototype.getUrl = function() {
    var e = t.enc,
      r = this.def,
      s = t.config.surveyUrl + "?",
      n = i.now() + "_" + Math.round(1e13 * Math.random()),
      o = r.name + "-" + (t.isDefined(r.site) ? r.site + "-" : "") + (t.isDefined(r.section) ? this.def.section + "-" : "") + this.locale,
      a = {
        sid: e(o),
        cid: e(this.cfg.config.id),
        pattern: e(this.cpps.get(r.pattern)),
        a: n,
        b: i.hash(n),
        c: 864e5,
        version: this.cfg.config.version
      };
    for (var c in a) s += t.enc(c) + "=" + t.enc(a[c]) + "&";
    return s += this.cpps.toQueryString()
  };
  var g = function(e, s, n, a, c, u, l) {
    r.tracker && (r.tracker.dispose(), r.tracker = null), r.tracker = this, t.ext(this, {
      template: e,
      def: s,
      cfg: n,
      disp: u,
      _fcBindings: []
    }), this.mtrk = new f, this.cpps = c, this.br = l, this.stg = a, e && r.trackerShownEmitter.fire(s, a, n, c);
    var d = t.proxy(function(e) {
      this.stg.set("page_hb", i.now(), n.config.trackerHeartbeatTimeout, !e, i.persistDataType.TRACKER)
    }, this);
    this._heartbeat = setInterval(d, Math.round(n.config.trackerHeartbeatTimeout / 2)), d(!0), i.Bind(o, "unload", t.proxy(function() {
      this.mtrk.isOver && this.stg.set("page_hb", i.now(), n.config.trackerHeartbeatLongTimeout, !0, i.persistDataType.TRACKER)
    }, this));
    var p = t.enc;
    this._url = t.makeURI("$fs.tracker.html?uid=" + p(a.uid || "") + "&sitekey=" + p(i.siteKey) + "&domain=" + p(i.getRootDomain()) + "&stg=" + p(this.stg.pers) + "&gw=" + p(t.makeURI("trigger/__gwtest__")) + "&brain_url=" + p(t.config.brainUrl) + "&fsrlocale=" + p(c.get("locale") || "en") + "&_svu_=" + p(t.config.surveyUrl) + "&_cv_=" + p(t.config.codeVer) + "&_issh_=" + p(t.isSelfHosted) + "&_vt_=" + p(t.tagVersion) + "&_au_=" + p(t.config.analyticsUrl) + "&_pa_=" + p(t.assetLocation)), a.fr && a.fr.isSSL && (this._url = this._url.replace(/http:/gi, "https:").replace(/:\d{3,4}/, ""), "//" == this._url.substr(0, 2) ? this._url = "https:" + this._url : "http" != this._url.substr(0, 4) && /^\//.test(this._url) && (this._url = "https://" + o.location.host + this._url), "localhost" === o.location.hostname && (this._url = this._url.replace(/:8080/gi, ":443"))), this.stg.pers == i.storageTypes.CK && this.cpps.onSet.subscribe(t.proxy(function(e, t) {
      var r = {};
      r[e] = t, this.stg.set("ckcpps", r, 2e5, !0, i.persistDataType.TRACKER)
    }, this)), this._sendDefinition()
  };
  g.prototype._sendDefinition = function() {
    var e = {
      method: "init",
      cfg: this.cfg,
      def: this.def
    };
    this.disp && (e.display = this.disp), this.template && (e.template = this.template), this.stg.set("page_hb", i.now(), this.cfg.config.trackerHeartbeatTimeout, !1, i.persistDataType.TRACKER), this.stg.set("hb_i", this.cfg.config.trackerHeartbeatTimeout, 6e4, !1, i.persistDataType.TRACKER), this.stg.set("trackerinfo", e, 6e4, !0, i.persistDataType.TRACKER), this.stg.pers == i.storageTypes.CK && this.stg.set("ckcpps", this.cpps.all(), 2e5, !0, i.persistDataType.TRACKER)
  }, g.prototype.show = function(e) {
    this.wref = c(this._url, "fsTracker", {
      width: 700,
      height: 450
    }, e, !0)
  }, g.prototype.applyExisting = function(e, t) {
    this.wref = t, t.location = this._url
  }, g.prototype.dispose = function() {
    for (var e = 0; e < this._fcBindings.length; e++) this._fcBindings[e].unsubscribe();
    this.fstg = null
  };
  var v = function(e, config) {
    this.stg = e, this.cfg = config
  };
  v.prototype.calcReplayPoolStatus = function(e) {
    var r, s, n, a = this.cfg.config,
      c = a.replay_pools,
      f = o.location.toString();
    if (c && 0 !== c.length && !0 !== this.pooloverride) {
      if (s = this.stg.get("pl"), !t.isDefined(s))
        for (r = 0; r < c.length; r++) i.testAgainstSearch(c[r].path, f) && (s = 100 * Math.random() < c[r].sp ? 1 : 0, this.stg.set("pl", s, 144e5));
      if (n = a.replay_repools, 0 === s && n && n.length > 0)
        for (r = 0; r < n.length; r++) i.testAgainstSearch(n[r].path, f) && (s = 100 * Math.random() < n[r].sp ? 1 : 0, this.stg.set("pl", s, 144e5));
      e(!!s)
    } else e(!0)
  }, v.prototype.optoutCheck = function(e, i) {
    this.stg.ready.subscribe(t.proxy(function() {
      !0 === this.stg.get("optout") ? i() : e()
    }, this), !0, !0)
  }, v.prototype.browserCheck = function(e, t) {
    return !(!e.isMobile && t.config.browser_cutoff[e.browser.name] && e.browser.actualVersion < t.config.browser_cutoff[e.browser.name])
  }, v.prototype.featureCheck = function(e, t) {
    return !(t.config.persistence == i.storageTypes.DS && !e.supportsLocalStorage)
  }, v.prototype.platformCheck = function(e, t) {
    return !(t.config.platform_cutoff[e.os.name] && e.os.version < t.config.platform_cutoff[e.os.name])
  }, v.prototype.checkDeviceBlacklist = function(e, i) {
    for (var r = 0; r < i.config.device_blacklist.length; r++)
      if (t.toLowerCase(e.agent).indexOf(t.toLowerCase(i.config.device_blacklist[r])) > -1) return !1;
    return !0
  }, v.prototype._match = function(e, t, i) {
    var r = e.include,
      s = e[i || "globalExclude"];
    if (e.criteria) {
      if (!e.criteria.supportsSmartPhones && !t.isTablet && t.isMobile) return !1;
      if (!e.criteria.supportsTablets && t.isTablet) return !1;
      if (!e.criteria.supportsDesktop && !t.isMobile) return !1
    }
    var n = o.location.href.toString(),
      a = document.referrer.toString();
    o.navigator.userAgent;
    if (s) {
      if (this.runAllTests(s, t, !1, !0)) return !1
    }
    return !r || this.runAllTests(r, t, !1, !0)
  }, v.prototype.runAllTests = function(e, r, s, n) {
    var a, c = new i.Cookie({}),
      f = o.location.href.toString(),
      u = document.referrer.toString(),
      l = {
        urls: f,
        referrers: u,
        userAgents: o.navigator.userAgent
      };
    for (var d in e) {
      var p = e[d];
      if (p.length > 0) {
        if (a = !1, l[d]) a = function(e, r) {
          t.isArray(r) || (r = [r]);
          for (var s = 0, n = r.length; s < n; s++)
            if ("string" == typeof r[s] && (r[s] = r[s].replace(/-_DS_-/gi, "$")), i.testAgainstSearch(r[s], e)) return !0;
          return !1
        }(l[d], p);
        else if ("browsers" == d)
          for (var h = r.browser.name, g = r.browser.actualVersion, v = 0; v < p.length; v++) t.toLowerCase(h).indexOf(t.toLowerCase(p[v].name)) > -1 && (p[v].comparison ? "lt" == p[v].comparison && g < p[v].version ? a = !0 : "eq" == p[v].comparison && g == p[v].version ? a = !0 : "gt" == p[v].comparison && g > p[v].version && (a = !0) : a = !0);
        else if ("cookies" == d)
          for (var y = 0; y < p.length; y++) {
            var m = p[y],
              b = c.get(m.name);
            t.isDefined(m.value) && b == m.value ? a = !0 : !t.isDefined(m.value) && b && (a = !0)
          } else if ("variables" == d)
            for (var w = 0; w < p.length; w++) {
              var E = p[w],
                S = new [].constructor.constructor("var v1 = '';try { v1 = " + E.name + ";}catch(err) {}return v1;"),
                _ = S.call(o) || "";
              t.isDefined(E.value) && i.testAgainstSearch(E.value, _) ? a = !0 : !t.isDefined(E.value) && _ && (a = !0)
            }
        if (!a && s) return !0;
        if (a && n) return !0
      }
    }
    return !1
  };
  var y = function(e) {
    this.cfg = e
  };
  y.prototype._bindToLink = function(e, r) {
    for (var s = document.querySelectorAll(e.selector), n = 0; n < s.length; n++) {
      var o, a = s[n],
        c = !0;
      if (e.attribute && (o = a.getAttribute(e.attribute), c = !1, o && (c = !0, e.patterns && e.patterns.length > 0))) {
        c = !1;
        for (var f = 0; f < e.patterns.length; f++)
          if (t.toLowerCase(o).indexOf(t.toLowerCase(e.patterns[f])) > -1) {
            c = !0;
            break
          }
      }
      c && i.Bind(a, "trigger:click", function(e, t, r) {
        return function(s) {
          t.preventDefault && i.preventDefault(s), r.call(e, t)
        }
      }(this, e, r))
    }
  }, y.prototype.performBindings = function(e) {
    if (e && this.cfg) {
      var t, i = this.cfg;
      if (i.cancel && i.cancel.length > 0) {
        var r = function() {
          e.cancelTracker(), e.jrny.addEventString(s.LINKS_CANCEL)
        };
        for (t = 0; t < i.cancel.length; t++) this._bindToLink(i.cancel[t], r)
      }
      if (i.survey && i.survey.length > 0) {
        var n = function() {
          e.popSurvey()
        };
        for (t = 0; t < i.survey.length; t++) this._bindToLink(i.survey[t], n)
      }
      if (!e.browser.isMobile && i.tracker && i.tracker.length > 0) {
        var o = function() {
          e.popTracker()
        };
        for (t = 0; t < i.tracker.length; t++) this._bindToLink(i.tracker[t], o)
      }
    }
  };
  var m, b = new i.FSEvent,
    w = !1;
  t.API.expose("CPPS", {
    set: function() {
      b.subscribe(function(e) {
        return function() {
          r.CPPS.set.apply(r.CPPS, e)
        }
      }(arguments), !0, !0)
    },
    get: function(e, t) {
      t = t || function() {}, b.subscribe(function(e) {
        return function() {
          t(r.CPPS.get.apply(r.CPPS, e[0]))
        }
      }([arguments]), !0, !0)
    },
    all: function(e) {
      e = e || function() {}, b.subscribe(function(t) {
        return function() {
          e(r.CPPS.all.apply(r.CPPS))
        }
      }(), !0, !0)
    }
  }), t.API.expose("clearState", function() {
    b.subscribe(function() {
      r.stg.reset(), r.rec && r.rec.recorder && r.rec.recorder.clearState()
    }, !0, !0)
  }), t.API.expose("getState", function(e) {
    b.subscribe(function() {
      e(r.state)
    }, !0, !0)
  }), t.API.expose("getConfig", function() {
    return config
  }), t.API.expose("getConfigFormatted", function() {
    if (console && console.info && (console.info("************************** Trigger Configuration **************************"), console.info("Config: ", config.config), config.surveydefs && config.surveydefs.length)) {
      console.info("************************** Surveydefs Configuration **************************");
      for (var e = 0; e < config.surveydefs.length; e++) console.info("************************** Surveydef " + (e + 1) + " **************************"), console.info("Config: ", config.surveydefs[e])
    }
  }), t.API.expose("optOut", function() {
    var e = o.location.toString();
    o.location = e.indexOf("#") ? e.substr(0, e.indexOf("#") - 1) + "#fscommand=fsoptout" : e + "#fscommand=fsoptout", o.location.reload()
  }), t.API.expose("test", function() {
    var e = o.location.toString();
    o.location = e.indexOf("#") ? e.substr(0, e.indexOf("#") - 1) + "#fscommand=fstest" : e + "#fscommand=fstest", o.location.reload()
  });
  var E = function() {
    m && (clearTimeout(m), m = null), b.subscribe(function() {
      m = setTimeout(function() {
        if (m = null, !w) {
          w = !0;
          var e = r.trig;
          e && (e.dispose(), r.trig = null), t.startTS = i.now(), t.nextTick(function() {
            w = !1, A()
          })
        }
      }, 250)
    }, !0, !0)
  };
  t.API.expose("run", E), t.API.expose("pageReset", E), t.API.expose("showInvite", function(e) {
    b.subscribe(function() {
      var t = r.trig || I(r.stg, config, r.browser, r.crit, r.CPPS);
      if (t.init() && t.surveydef) {
        new d(t, r.browser, r.stg, r.CPPS, e, r.jrny, function() {
          this.initialize()
        })
      }
    }, !0, !0)
  }), t.API.expose("onLoaded", r.loadedEmitter), t.API.expose("onInitialized", r.initializedEmitter), t.API.expose("onInviteShown", r.inviteShownEmitter), t.API.expose("onInviteAccepted", r.inviteAcceptedEmitter), t.API.expose("onInviteDeclined", r.inviteDeclinedEmitter), t.API.expose("onTrackerShown", r.trackerShownEmitter), t.API.expose("customInvitationRequested", r.customInvitationRequested), t.API.expose("Journey", {
    addEvent: function() {
      b.subscribe(function(e) {
        return function() {
          r.jrny.addEvent.apply(r.jrny, e)
        }
      }(arguments), !0, !0)
    },
    addEventObj: function() {
      b.subscribe(function(e) {
        return function() {
          r.jrny.addEventObj.apply(r.jrny, e)
        }
      }(arguments), !0, !0)
    },
    addEventString: function() {
      b.subscribe(function(e) {
        return function() {
          r.jrny.addEventString.apply(r.jrny, e)
        }
      }(arguments), !0, !0)
    }
  }), t.API.expose("Storage", {
    get: function(e, t) {
      t = t || function() {}, b.subscribe(function(e) {
        return function() {
          t(r.stg.get.apply(r.stg, e[0]))
        }
      }([arguments]), !0, !0)
    },
    all: function(e) {
      e = e || function() {}, b.subscribe(function(t) {
        return function() {
          e(r.stg.all.apply(r.stg))
        }
      }(), !0, !0)
    }
  });
  var S = function(e, i, s, n, o) {
      t.ext(r, {
        CPPS: s,
        crit: i,
        stg: e,
        jrny: n,
        browser: o
      }, !1), b.fire()
    },
    _ = function(i, s, n, a, c, f) {
      s && a && (t.isDefined(t.config.products.record) && !1 === t.config.products.record && t.productConfig.record || e([t.makeURI("$fs.record.js")], function(e) {
        n.set("rc", "true"), r.rec = e.getInstance(i, o, n), f && (f.recordController = rec)
      }))
    },
    I = function(e, config, t, i, r, s) {
      return new T(e, config, t, i, r, s)
    },
    T = function(e, r, s, n, o, a) {
      if (this.stg = e, this.cfg = r, this.browser = s, this.crit = n, this.cpps = o, this.jrny = a, !e.get("pv")) {
        o.set("terms", this.decodeReferrer() || ""), o.set("browser", s.browser.name + " " + s.browser.version), o.set("os", s.os.name), o.set("referrer", document.referrer.toString()), o.set("site", r.config.site_id), o.set("code", t.config.codeVer), o.set("fp", s.fp), i.INT.GA.has() && setTimeout(t.proxy(function() {
          i.INT.GA.uid(function(e) {
            e && o.set("GA_UID", e)
          })
        }, this), 2e3), i.INT.OM.has() && setTimeout(t.proxy(function() {
          i.INT.OM.uid(function(e) {
            e && o.set("OMTR_VID", e)
          })
        }, this), 2e3);
        var c = i.INT.OM.beacon();
        c && o.set("OMTR_BEACON", c)
      }
      this.heartbeatExpired = new i.FSEvent
    };
  T.prototype.doesPassCriteria = function() {
    var e = this.crit,
      t = this.cfg,
      i = r.state,
      s = "DIDNOTPASSCRITERIA";
    if (e.platformCheck(this.browser, t))
      if (e.browserCheck(this.browser, t))
        if (e.checkDeviceBlacklist(this.browser, t)) {
          if (e.featureCheck(this.browser, t)) return !0;
          i.inviteStatus = s, i.reason = "BROWSER"
        } else i.inviteStatus = s, i.reason = "DEVICE";
    else i.inviteStatus = s, i.reason = "BROWSER";
    else i.inviteStatus = s, i.reason = "PLATFORM";
    return !1
  }, T.prototype.popTracker = function(e) {
    var t = this;
    if (this.stg.set("i", "x"), r.state.inviteSituation = "ACCEPTED", this.didPopTrackerAlready = "y" == this.stg.get("dt"), r.state.didInvite = !0, !this.didPopTrackerAlready) {
      this.stg.set("dt", "y");
      if (e) ! function() {
        t.tracker = new g(e.template, t.surveydef, config, t.stg, t.cpps, e.display, t.browser), t.tracker.show(t.browser)
      }();
      else {
        var i = c("about:blank", "fsTracker", {
          width: 700,
          height: 400
        }, this.browser, !0);
        new d(this, t.browser, t.stg, t.cpps, !1, t.jrny, function() {
          t.tracker = new g(this.invite.template, t.surveydef, config, t.stg, t.cpps, this.invite.display, t.browser), t.tracker.applyExisting(t.browser, i), t.surveydef.cxRecord && r.rec && r.rec.recorder && (r.rec.beginTransmitting(), t.cpps.set("replay_id", r.rec.recorder.logger.gsessionid), t.cpps.set("sessionid", r.rec.recorder.logger.sessionid))
        })
      }
    }
  }, T.prototype.canDisplayInvitation = function() {
    return this.crit._match(this.cfg.config, this.browser, "inviteExclude")
  }, T.prototype.popSurvey = function() {
    if (this.stg.set("i", "x"), r.state.inviteSituation = "ACCEPTED", this.didPopTrackerAlready = "y" == this.stg.get("dt"), r.state.didInvite = !0, this.didPopTrackerAlready) this.stg && this.stg.set("trackercmd", {
      method: "survey"
    }, 6e4, !0, i.persistDataType.TRACKER);
    else {
      this.stg.set("dt", "y");
      var e = new h(config, this.cpps, this.surveydef),
        t = e.getUrl();
      c(t, "acsSurvey", {
        width: 700,
        height: 400
      }, this.browser, !0);
      this.jrny.addEventString(s.SURVEY_SHOWN)
    }
  }, T.prototype.init = function() {
    var e, i, r, s = this.cfg.surveydefs,
      n = this.stg.get("def");
    for (e = 0; e < s.length; e++) r = s[e], i && (r = t.ext(i, r), !s[e].site && i.site && delete r.site, !s[e].section && i.section && delete r.section, s[e] = r), i = t.ext({}, r);
    if (t.isDefined(n) && parseInt(n) > s.length - 1 && (n = void 0), t.isDefined(n) && "default" != s[parseInt(n)].selectMode && "pin" != s[parseInt(n)].selectMode) {
      if (t.isDefined(n) || "lock" == s[parseInt(n)].selectMode) return r = s[parseInt(n)], this.cfg.active_surveydef = r, this.surveydef = r, this._setupTrueConversionIfRequired(), this.locale = this._initLocale(), this.cpps.set("locale", this.locale), r
    } else
      for (e = 0; e < (t.isDefined(n) && "default" != s[parseInt(n)].selectMode ? parseInt(n) + 1 : s.length); e++)
        if (r = s[e], t.isDefined(n) && n == e && "default" != s[parseInt(n)].selectMode || this.crit._match(r, this.browser)) return "x" === this.stg.get("i") && this.stg.set("def", e), r.index = e, this.cfg.active_surveydef = r, this.surveydef = r, this._setupTrueConversionIfRequired(), this.locale = this._initLocale(), this.cpps.set("locale", this.locale), this.inviteIndex = e, r;
    return !1
  }, T.prototype._initLocale = function() {
    var e, r = this.surveydef,
      s = r.language;
    if (t.isDefined(s.src) && t.isDefined(s.locales)) {
      switch (s.src) {
        case "variable":
          t.isDefined(s.name) && (e = window[s.name]);
          break;
        case "cookie":
          if (t.isDefined(s.name)) {
            e = new i.Cookie({}).get(s.name)
          }
          break;
        case "url":
          var n = s.locales;
          if (t.isDefined(n))
            for (var o = 0, a = n.length; o < a; o++)
              if (t.isDefined(n[o].locale) && t.isDefined(n[o].match) && location.href.match(n[o].match)) return this.locale = n[o].locale, n[o].criteria && t.ext(this.surveydef.criteria, n[o].criteria), this.locale !== r.language.locale && (r.language.locale = this.locale), n[o].locale
      }
      if (e)
        for (var c = 0; c < s.locales.length; c++)
          if (s.locales[c].match == e) return s.locale = s.locales[c].locale, s.locales[c].criteria && t.ext(this.surveydef.criteria, s.locales[c].criteria), s.locale
    }
    return s.locale || "en"
  }, T.prototype.cancelTracker = function() {
    this.stg.set("trackercmd", {
      method: "close"
    }, 6e4, !0, i.persistDataType.TRACKER), this.stg.set("i", "a"), r.state.inviteSituation = "ABANDONED", t.isDefined(this.tracker) && clearInterval(this.tracker._heartbeat)
  }, T.prototype._setupTrueConversionIfRequired = function() {
    var i = (this.surveydef, this.cfg.config);
    i.trueconversion && i.trueconversion.enabled && e([t.makeURI("$fs.trueconversion.js")], t.proxy(function(e) {
      this.trueconversion = new e(this)
    }, this))
  }, T.prototype.logState = function() {
    this.pageViewCount = (this.stg.get("pv") || 0) + 1, this.stg.set("pv", this.pageViewCount, config.config.pageViewsResetTimeout || 864e5)
  }, T.prototype.logDefState = function() {
    this.surveydef && (this.defPageViewCount = (this.stg.get(this.surveydef.name + "pv") || 0) + 1, this.stg.set(this.surveydef.name + "pv", this.defPageViewCount, config.config.pageViewsResetTimeout || 864e5))
  }, T.prototype.evalLoyaltySampling = function() {
    var e = this.surveydef,
      i = this.stg.get("pl"),
      r = t.isDefined(i) && 1 != i ? e.criteria.sp.outreplaypool || 0 : e.criteria.sp.reg || 0,
      s = 100 * Math.random();
    return this.defPageViewCount >= e.criteria.lf && s <= r
  }, T.prototype.decodeReferrer = function() {
    var e, t, i = document.referrer || "",
      r = null,
      s = ["q", "p", "query"];
    for (t = 0; t < s.length && !(r = i.match(new RegExp("[?&]" + s[t] + "=([^&]*)"))); t++);
    return r ? (e = decodeURIComponent(r[1]), e && (e = e.replace(/\+/g, " ")), e) : e
  }, T.prototype.dispose = function() {
    this.disposed || (this.stg.save(!0), this.disposed = !0, this.trueconversion && this.trueconversion.dispose(), this.invite && this.invite.dispose(), r.rec && (r.rec.dispose(), r.rec = null), i.Unbind("trigger:*"))
  };
  var D = function(e, i, r, s, n, o) {
    this.itype = e, this.cfg = i, this.def = r, this.cpps = s, this.rid = n, this._measureName = this.def.name + "-" + (t.isDefined(this.def.site) ? this.def.site + "-" : "") + (t.isDefined(this.def.section) ? this.def.section + "-" : "") + (o || this.def.language.locale)
  };
  D.prototype.init = function(e, t) {
    t = t || function() {};
    var r = i.now() + "_" + Math.round(1e13 * Math.random());
    l.ping(l.SERVICE_TYPES.mobileOnExitInitialize, {
      a: r,
      notify: e,
      b: i.hash(r),
      c: 864e5,
      cid: this.cfg.config.id,
      sid: this._measureName,
      rid: this.rid,
      uid: i.now(),
      support: "SMSEMAIL" == this.itype ? "b" : "EMAIL" == this.itype ? "e" : "s",
      cpps: "version=" + encodeURIComponent(this.cfg.config.version) + "&" + this.cpps.toQueryString()
    }, t, t)
  }, D.prototype.beginHeartbeat = function() {
    this._timer && (clearTimeout(this._timer), this._timer = null);
    var e = t.proxy(function() {
      l.ping(l.SERVICE_TYPES.mobileOnExitHeartbeat, {
        cid: this.cfg.config.id,
        sid: this._measureName,
        rid: this.rid,
        uid: i.now()
      }, function() {}, function() {})
    }, this);
    this._timer = setInterval(e, config.config.onExitMobileHeartbeatInterval), e()
  }, i.registerProduct("foresee", config);
  var C = window != o.top;
  if (r.loadedEmitter.fire(), ("dontRunOtherIframes" !== config.config.workInIframes && config.config.workInIframes || !C) && !(o.__fsrtracker || o.location.toString().indexOf("survey.foreseeresults.com") > -1)) {
    var k = {
        hash: o.location.hash,
        href: o.location.href,
        pathname: o.location.pathname
      },
      A = function() {
        if (!(k.href.indexOf("fs.tracker.html") > -1)) {
          var e = new i.Browser;
          e.ready.subscribe(function() {
            var s, n = i.getGlobalStore(e),
              c = new v(n, config),
              f = new i.CPPS(n, config.config.cppsResetTimeout);
            f.addToBlacklist(config.config.disable_default_cpps || config.config.disable_cpps || []), n.ready.subscribe(t.proxy(function() {
              n.upgradeOldStorage(function() {
                var u = r._journey = new i.Journey(config.config.id, config.config.site_id, n.uid, e);
                S(n, c, f, u, e);
                var l = n.get("i");
                setTimeout(t.proxy(function() {
                  if (f.set("url", o.location.toString()), config.config.cpps) {
                    var h, v = config.config.cpps;
                    for (var m in v) {
                      var b = v[m];
                      if (t.isObject(b)) switch (b.source) {
                        case "param":
                          var w = t.getParam(b.val) || b.init || null;
                          if (t.isDefined(b.mode) && "append" == b.mode) {
                            var E = b.delimiter || ",",
                              S = f.get(m),
                              T = S ? S.split(E) : [];
                            w = w || "", T[T.length - 1] !== w && (T.push(w), T.join(E), f.set(m, T))
                          } else t.isDefined(w) && null !== w ? f.set(m, w) : f.get(m) || f.set(m, "");
                          break;
                        case "variable":
                          if (t.isDefined(b.name)) {
                            for (var D = o, k = b.name.split("."), A = 0; A < k.length && D;) D = D[k[A++]];
                            A == k.length && t.isDefined(D) ? f.set(m, D) : f.get(m) || f.set(m, b.init || "")
                          }
                          break;
                        case "cookie":
                          var x = a.get(b.val);
                          t.isDefined(x) && null !== x ? f.set(m, x) : f.get(m) || f.set(m, b.init || "");
                          break;
                        case "url":
                          for (var R = 0, P = b.patterns.length; R < P; R++) {
                            var O = b.patterns[R].regex || b.patterns[R].match;
                            h = b.patterns[R].value, t.isString(location.href) && i.testAgainstSearch(O, location.href) ? f.set(m, h) : f.get(m) || f.set(m, b.init || "")
                          }
                          break;
                        case "function":
                          if (t.isFunction(b.value)) try {
                            h = b.value.call(o), f.set(m, h)
                          } catch (e) {}
                      } else f.set(m, b)
                    }
                  }
                  var N;
                  if (n.get("ovr") && (N = JSON.parse(n.get("ovr"))), N) {
                    for (var L = 0; L < config.surveydefs.length; L++) {
                      var M = config.surveydefs[L].name;
                      N.sp[M] && (config.surveydefs[L].criteria.sp = N.sp[M]), N.lf[M] && (config.surveydefs[L].criteria.lf = N.lf[M])
                    }!0 === N.pooloverride && (c.pooloverride = !0)
                  }
                  if (r.state.didInvite = "xda".indexOf(l) > -1, r.state.inviteSituation = {
                      x: "ACCEPTED",
                      d: "DECLINED",
                      a: "ABANDONED"
                    }[l], "a" == l) {
                    parseInt(n.get("rw")) < i.now() && (n.erase("i"), n.erase("rw"), l = null)
                  }
                  if ("runRecordOnly" === config.config.workInIframes && C) {
                    for (var V = !1, j = 0; j < config.surveydefs.length; j++) {
                      if (config.surveydefs[j].cxRecord) {
                        V = !0;
                        break
                      }
                    }
                    return void _(e, V, n, !0)
                  }
                  if ("d" != l && "a" != l) c.calcReplayPoolStatus(function(o) {
                    c.optoutCheck(t.proxy(function() {
                      if (c._match(config.config, e, "globalExclude") && "y" != n.get("gx")) {
                        var t = r.trig = I(n, config, e, c, f, u);
                        if (t.logState(), f.set("pv", t.pageViewCount, config.config.pageViewsResetTimeout || 864e5), t.init() && (r.initializedEmitter.fire(), t.doesPassCriteria() && t.surveydef)) {
                          if (t.logDefState(), _(e, t.surveydef.cxRecord, n, o), "x" != l) {
                            if (t.evalLoyaltySampling() && t.canDisplayInvitation()) {
                              n.set("def", t.inviteIndex);
                              new d(t, e, n, f, !1, u, function() {
                                this.initialize()
                              })
                            }
                          } else {
                            var a = t.stg.get("mhbi");
                            a ? p(t, a.ui, a.it) : t.tracker = new g(null, t.surveydef, config, n, f, null, e), t.surveydef && n.set("defupdate", {
                              name: t.surveydef.name
                            }, 2e4, !0, i.persistDataType.TRACKER)
                          }
                          t.surveydef.links && (s = new y(t.surveydef.links), s.performBindings(t))
                        }
                      } else n.set("gx", "y")
                    }, this), function() {})
                  });
                  else if ("a" == l) {
                    var U = "true" == n.get("rc") || !0 === n.get("rc");
                    _(e, U, n, U)
                  }
                }, this), Math.max(0, config.config.triggerDelay - (i.now() - t.startTS)))
              })
            }, this), !0, !0)
          }, !0, !0)
        }
      };
    t.domReady(A);
    var x;
    i.pageNavEvent.subscribe(function() {
      var e = o,
        t = e.location,
        i = e[config.config.publicApiName || "FSR"],
        r = function(e) {
          var t = e.split("#");
          return t.length > 2 ? t[0] + t[1] : e.replace(/#/gi, "")
        },
        s = r(k.hash),
        n = r(t.hash);
      (i && s != n || k.pathname != t.pathname) && fsReady(function() {
        clearTimeout(x), x = setTimeout(function() {
          i.pageReset()
        }, 1500)
      })
    }, !1, !1)
  }
});