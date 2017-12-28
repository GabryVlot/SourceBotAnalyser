define('homepage-card-i18n-props', [], function() {
  return {
    "homepage.card.card_subtitle": "Top events",
    "homepage.card.card.see_more": "View more events",
    "homepage.card.card.favorite": "Favorite",
    "homepage.card.card.recommended": "recommended",
    "homepage.card.event_details.venue": "- {venueName}",
    "homepage.card.event_details.singular_ticket": "ticket available",
    "homepage.card.event_details.plural_tickets": "tickets available",
    "homepage.card.event_details.tbd": "TBD"
  }
});
(function() {
  dust.register("homepage-ad_card", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div id=\"boxAdCard").reference(ctx.get("index"), ctx, "h").write("\" class=\"rectangleAdCard\" data-cardvalue=\"box-ad\" data-cardtype=\"Ad Card\" class=\"ad-card\"></div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-card", body_0);

  function body_0(chk, ctx) {
    return chk.exists(ctx.getPath(false, ["uiEnable", "hero_card"]), ctx, {
      "block": body_1
    }, null).exists(ctx.getPath(false, ["uiEnable", "list_card_2"]), ctx, {
      "block": body_20
    }, null).exists(ctx.getPath(false, ["uiEnable", "ad_card"]), ctx, {
      "block": body_39
    }, null);
  }

  function body_1(chk, ctx) {
    return chk.write("<div class=\"hero-card\"><div class=\"hero-image image-track\" data-cardvalue=\"hero\" data-cardtype=\"Hero Card\" data-click=\"Image\" data-url=\"").helper("toUrl", ctx, {
      "block": body_2
    }, {
      "href": ctx.get("performerUrl")
    }).write("\"><div class='layer'></div><div class=\"hero-image-attribution\">").reference(ctx.getPath(false, ["events", "0", "images", "0", "source"]), ctx, "h").write("</div>").exists(ctx.getPath(false, ["uiEnable", "showPersonalizedRecoExp"]), ctx, {
      "block": body_3
    }, null).write("<div class=\"title-container\" data-cardvalue=\"hero\" data-cardtype=\"Hero Card\" data-click=\"Title\" data-url=\"").helper("toUrl", ctx, {
      "block": body_12
    }, {
      "href": ctx.get("performerUrl")
    }).write("\"><div class=\"title").exists(ctx.getPath(false, ["uiEnable", "showPersonalizedRecoExp"]), ctx, {
      "block": body_13
    }, null).write("\">").reference(ctx.get("name"), ctx, "h").write("</div></div></div><div class=\"event-groupings-list\">").section(ctx.get("events"), ctx, {
      "block": body_14
    }, null).write("</div></div>");
  }

  function body_2(chk, ctx) {
    return chk;
  }

  function body_3(chk, ctx) {
    return chk.exists(ctx.getPath(false, ["uiEnable", "enableHeart"]), ctx, {
      "else": body_4,
      "block": body_7
    }, null).write("<div class='recommendation-banner-container'>").exists(ctx.getPath(false, ["uiEnable", "isSHFavorite"]), ctx, {
      "block": body_10
    }, null).exists(ctx.getPath(false, ["uiEnable", "isRelatedFavorite"]), ctx, {
      "block": body_11
    }, null).write("</div>");
  }

  function body_4(chk, ctx) {
    return chk.write("<div class='hero-card-star star-container'>").exists(ctx.get("isFollowed"), ctx, {
      "else": body_5,
      "block": body_6
    }, null).write("</div>");
  }

  function body_5(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-star favorite-not-select star\"></div>");
  }

  function body_6(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-star favorite-select star\"></div>");
  }

  function body_7(chk, ctx) {
    return chk.write("<div class='hero-card-star heart-container'>").exists(ctx.get("isFollowed"), ctx, {
      "else": body_8,
      "block": body_9
    }, null).write("</div>");
  }

  function body_8(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-star favorite-not-select-heart heart-bg heart\"></div>");
  }

  function body_9(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-star favorite-select-heart heart-bg heart\"></div>");
  }

  function body_10(chk, ctx) {
    return chk.write("<div class='recommendation-banner hide'>Favorite</div>");
  }

  function body_11(chk, ctx) {
    return chk.write("<div class='recommendation-banner hide'>recommended</div>");
  }

  function body_12(chk, ctx) {
    return chk;
  }

  function body_13(chk, ctx) {
    return chk.write(" favorite-enabled");
  }

  function body_14(chk, ctx) {
    return chk.helper("if", ctx, {
      "block": body_15
    }, {
      "test": body_19
    });
  }

  function body_15(chk, ctx) {
    return chk.helper("provide", ctx, {
      "cardValue": body_16,
      "cardType": body_17,
      "block": body_18
    }, null);
  }

  function body_16(chk, ctx) {
    return chk.write("\"hero\"");
  }

  function body_17(chk, ctx) {
    return chk.write("Hero Card");
  }

  function body_18(chk, ctx) {
    return chk.partial("homepage-event_details", ctx, {
      "cardValue": ctx.get("cardValue"),
      "cardType": ctx.get("cardType")
    });
  }

  function body_19(chk, ctx) {
    return chk.reference(ctx.get("$idx"), ctx, "h").write(" < 2");
  }

  function body_20(chk, ctx) {
    return chk.write("<div class=\"list-card\"><div class=\"title-container\" data-cardvalue=\"list\" data-cardtype=\"List Card\" data-title=\"true\" data-url=\"").helper("toUrl", ctx, {
      "block": body_21
    }, {
      "href": ctx.get("performerUrl")
    }).write("\">").exists(ctx.getPath(false, ["uiEnable", "showPersonalizedRecoExp"]), ctx, {
      "block": body_22
    }, null).notexists(ctx.getPath(false, ["uiEnable", "showPersonalizedRecoExp"]), ctx, {
      "block": body_30
    }, null).write("</div><div class=\"event-groupings-list\">").section(ctx.get("events"), ctx, {
      "block": body_31
    }, null).write("</div><div class=\"see-more-container\" data-cardvalue='list' data-cardtype=\"List Card\" data-seemore=\"true\" data-url=\"").helper("toUrl", ctx, {
      "block": body_37
    }, {
      "href": ctx.get("performerUrl")
    }).write("\"><div class=\"see-more-text-container\"><a href=\"").helper("toUrl", ctx, {
      "block": body_38
    }, {
      "href": ctx.get("performerUrl")
    }).write("\" class=\"see-more-text\">View more events</a></div></div></div>");
  }

  function body_21(chk, ctx) {
    return chk;
  }

  function body_22(chk, ctx) {
    return chk.exists(ctx.getPath(false, ["uiEnable", "isRelatedFavorite"]), ctx, {
      "block": body_23
    }, null).write("<div class='list-card-star star-container'>").exists(ctx.getPath(false, ["uiEnable", "enableHeart"]), ctx, {
      "else": body_24,
      "block": body_27
    }, null).write("</div><div class=\"title favorite-enabled\">").reference(ctx.get("name"), ctx, "h").write("</div>");
  }

  function body_23(chk, ctx) {
    return chk.write("<div class='recommendation-banner-container'><div class='recommendation-banner hide'>recommended</div></div>");
  }

  function body_24(chk, ctx) {
    return chk.exists(ctx.get("isFollowed"), ctx, {
      "block": body_25
    }, null).notexists(ctx.get("isFollowed"), ctx, {
      "block": body_26
    }, null);
  }

  function body_25(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-star\"></div>");
  }

  function body_26(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-inactivestar\"></div>");
  }

  function body_27(chk, ctx) {
    return chk.exists(ctx.get("isFollowed"), ctx, {
      "else": body_28,
      "block": body_29
    }, null);
  }

  function body_28(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-inactiveheart\"></div>");
  }

  function body_29(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-heart\"></div>");
  }

  function body_30(chk, ctx) {
    return chk.write("<div class=\"title\">").reference(ctx.get("name"), ctx, "h").write("</div>");
  }

  function body_31(chk, ctx) {
    return chk.helper("if", ctx, {
      "block": body_32
    }, {
      "test": body_36
    });
  }

  function body_32(chk, ctx) {
    return chk.helper("provide", ctx, {
      "cardValue": body_33,
      "cardType": body_34,
      "block": body_35
    }, null);
  }

  function body_33(chk, ctx) {
    return chk.write("\"list\"");
  }

  function body_34(chk, ctx) {
    return chk.write("List Card");
  }

  function body_35(chk, ctx) {
    return chk.partial("homepage-event_details", ctx, {
      "cardValue": ctx.get("cardValue"),
      "cardType": ctx.get("cardType")
    });
  }

  function body_36(chk, ctx) {
    return chk.reference(ctx.get("$idx"), ctx, "h").write(" < 3");
  }

  function body_37(chk, ctx) {
    return chk;
  }

  function body_38(chk, ctx) {
    return chk;
  }

  function body_39(chk, ctx) {
    return chk.partial("homepage-ad_card", ctx, null);
  }
  return body_0;
})();
(function() {
  dust.register("homepage-event_details", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"event\" data-cardvalue=\"").reference(ctx.get("cardValue"), ctx, "h").write("\" data-cardtype=\"").reference(ctx.get("cardType"), ctx, "h").write("\" data-url=\"").helper("toUrl", ctx, {
      "block": body_1
    }, {
      "href": ctx.get("relativeEventUrl")
    }).write("\" data-currency=\"").reference(ctx.getPath(false, ["ticketInfo", "currencyCode"]), ctx, "h").write("\" data-index=").helper("idx", ctx, {
      "block": body_2
    }, null).write(" data-click-token=\"").reference(ctx.get("clickToken"), ctx, "h").write("\"><div class=\"event-details\"><div class=\"event-date-container\"><div class=\"event-date-box\">").partial("date_stamp_template", ctx, {
      "dateType": "standard",
      "isTBD": ctx.getPath(false, ["displayAttributes", "hideEventDate"])
    }).write("</div></div><div class=\"event-details-container\"><div class=\"event-title-wrapper\"><a href=\"").helper("toUrl", ctx, {
      "block": body_4
    }, {
      "href": ctx.get("relativeEventUrl")
    }).write("\" data-currency=\"").reference(ctx.getPath(false, ["ticketInfo", "currencyCode"]), ctx, "h").write("\" class=\"event-title\" data-eventid=\"").reference(ctx.get("id"), ctx, "h").write("\" ").exists(ctx.get("isExternalLink"), ctx, {
      "block": body_5
    }, null).write(">").reference(ctx.get("name"), ctx, "h").write("</a></div><div class=\"venue\">").notexists(ctx.getPath(false, ["displayAttributes", "hideEventTime"]), ctx, {
      "else": body_6,
      "block": body_7
    }, null).write("&nbsp;- ").reference(ctx.get("venueName"), ctx, "h").write("</div><!--Product request to hide tixLeft when it is ticketBis events(sourceId=4001) -->").helper("ne", ctx, {
      "block": body_8
    }, {
      "key": ctx.get("sourceId"),
      "value": "4001"
    }).write("</div></div></div>");
  }

  function body_1(chk, ctx) {
    return chk;
  }

  function body_2(chk, ctx) {
    return chk.helper("math", ctx, {}, {
      "key": body_3,
      "method": "add",
      "operand": "1"
    });
  }

  function body_3(chk, ctx) {
    return chk.reference(ctx.get("$idx"), ctx, "h");
  }

  function body_4(chk, ctx) {
    return chk;
  }

  function body_5(chk, ctx) {
    return chk.write(" rel=\"nofollow\"");
  }

  function body_6(chk, ctx) {
    return chk.write("TBD");
  }

  function body_7(chk, ctx) {
    return chk.helper("datetime_format", ctx, {}, {
      "value": ctx.get("dateLocal"),
      "style": "time"
    });
  }

  function body_8(chk, ctx) {
    return chk.exists(ctx.get("tixLeft"), ctx, {
      "block": body_9
    }, null);
  }

  function body_9(chk, ctx) {
    return chk.helper("gt", ctx, {
      "else": body_10,
      "block": body_13
    }, {
      "key": ctx.getPath(false, ["uiEnable", "showTicketsLeftWhenLessThan"]),
      "value": 0
    });
  }

  function body_10(chk, ctx) {
    return chk.write("<div class=\"tixleft\">").reference(ctx.getPath(false, ["ticketInfo", "totalTickets"]), ctx, "h").helper("lte", ctx, {
      "else": body_11,
      "block": body_12
    }, {
      "key": ctx.getPath(false, ["ticketInfo", "totalTickets"]),
      "value": 1
    }).write("</div>");
  }

  function body_11(chk, ctx) {
    return chk.write("&nbsp;tickets available");
  }

  function body_12(chk, ctx) {
    return chk.write("&nbsp;ticket available");
  }

  function body_13(chk, ctx) {
    return chk.helper("lte", ctx, {
      "block": body_14
    }, {
      "key": ctx.getPath(false, ["ticketInfo", "totalTickets"]),
      "value": ctx.get("showTicketsLeftWhenLessThan")
    });
  }

  function body_14(chk, ctx) {
    return chk.write("<div class=\"tixleft\">").helper("lte", ctx, {
      "else": body_15,
      "block": body_16
    }, {
      "key": ctx.getPath(false, ["ticketInfo", "totalTickets"]),
      "value": 1
    }).write("</div>");
  }

  function body_15(chk, ctx) {
    return chk.write("<svg class=\"icon\" width=\"11\" height=\"12\" viewBox=\"0 0 11 12\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M5.468 10.512c-2.379 0-4.323-1.914-4.323-4.255 0-2.342 1.944-4.255 4.323-4.255 2.38 0 4.323 1.913 4.323 4.255 0 2.341-1.944 4.255-4.323 4.255m-.026-9.505c-2.941 0-5.32 2.342-5.32 5.237s2.404 5.262 5.346 5.262 5.347-2.367 5.347-5.262c0-2.895-2.405-5.237-5.373-5.237\"/><path d=\"M7.63 6.956H4.955V3.62H5.98v2.33h1.65z\"/></g></svg>&nbsp;Only ").helper("number_format", ctx, {}, {
      "val": ctx.getPath(false, ["ticketInfo", "totalTickets"])
    }).write(" tickets left!");
  }

  function body_16(chk, ctx) {
    return chk.write("<svg class=\"icon\" width=\"11\" height=\"12\" viewBox=\"0 0 11 12\" xmlns=\"http://www.w3.org/2000/svg\"><g fill-rule=\"evenodd\"><path d=\"M5.468 10.512c-2.379 0-4.323-1.914-4.323-4.255 0-2.342 1.944-4.255 4.323-4.255 2.38 0 4.323 1.913 4.323 4.255 0 2.341-1.944 4.255-4.323 4.255m-.026-9.505c-2.941 0-5.32 2.342-5.32 5.237s2.404 5.262 5.346 5.262 5.347-2.367 5.347-5.262c0-2.895-2.405-5.237-5.373-5.237\"/><path d=\"M7.63 6.956H4.955V3.62H5.98v2.33h1.65z\"/></g></svg>&nbsp;Only ").helper("number_format", ctx, {}, {
      "val": ctx.getPath(false, ["ticketInfo", "totalTickets"])
    }).write(" ticket left!");
  }
  return body_0;
})();
define('homepage-date-filter-i18n-props', [], function() {
  return {
    "homepage.date-filter.all-dates": "All dates",
    "homepage.date-filter.today": "Today",
    "homepage.date-filter.tomorrow": "Tomorrow",
    "homepage.date-filter.week": "This week",
    "homepage.date-filter.weekend": "This weekend",
    "homepage.date-filter.month": "This month",
    "homepage.date-filter.nextMonth": "Next month",
    "homepage.date-filter.custom_date_range": "{eventStartDate} - {eventEndDate}",
    "homepage.date-filter.datepicker.mainDateDisplayFormat": "MMM D, YYYY",
    "homepage.date-filter.default": "When",
    "homepage.date-filter.showing-events-for": "Showing events for"
  }
});
(function() {
  dust.register("date-filter", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"container-date-select-filter\"><a href=\"javascript:void(0)\" class=\"accessibility-container a-keydown-select-option\"><div class=\"select-display a-click-show-options\"><div class=\"sh-iconset sh-iconset-calendar option-icon\"></div><div class=\"selected-option\">").exists(ctx.get("dateSelected"), ctx, {
      "else": body_1,
      "block": body_4
    }, null).write("</div><span class=\"sh-iconset sh-iconset-chevron down-arrow\"></span>").exists(ctx.get("custom_date_range"), ctx, {
      "block": body_7
    }, null).write("</div><div class=\"select-options ").notexists(ctx.get("showDateFilterContent"), ctx, {
      "block": body_8
    }, null).write("\"><div class=\"select-options-close a-click-close-options\"><span class=\"sh-iconset sh-iconset-chevron up-arrow\"></span></div><div class=\"select-options-scrollable\"><div class=\"selected-option-container a-click-close-options\"><div class=\"selected-option\">").exists(ctx.get("dateSelected"), ctx, {
      "else": body_9,
      "block": body_12
    }, null).write("</div><span class=\"sh-iconset sh-iconset-close close-icon\"></span></div><ul class=\"select-options-list\">").section(ctx.get("filterPref"), ctx, {
      "block": body_15
    }, null).write("</ul></div></div></a></div>");
  }

  function body_1(chk, ctx) {
    return chk.exists(ctx.get("showDateRangeSelector"), ctx, {
      "else": body_2,
      "block": body_3
    }, null);
  }

  function body_2(chk, ctx) {
    return chk.write("All dates");
  }

  function body_3(chk, ctx) {
    return chk.write("When");
  }

  function body_4(chk, ctx) {
    return chk.helper("eq", ctx, {
      "else": body_5,
      "block": body_6
    }, {
      "key": ctx.get("prefDate"),
      "value": "custom_date_range"
    });
  }

  function body_5(chk, ctx) {
    return chk.reference(ctx.get("selectedDate"), ctx, "h");
  }

  function body_6(chk, ctx) {
    return chk.helper("datetime_format", ctx, {}, {
      "style": "datestamp_month_day",
      "value": ctx.get("eventStartDate")
    }).write(" - ").helper("datetime_format", ctx, {}, {
      "style": "datestamp_month_day",
      "value": ctx.get("eventEndDate")
    });
  }

  function body_7(chk, ctx) {
    return chk.write("<div class=\"datepicker-reset-button-container date-selected ").reference(ctx.get("showDatepicker"), ctx, "h").write("\"><div class=\"sh-iconset sh-iconset-close close-options\"></div></div>");
  }

  function body_8(chk, ctx) {
    return chk.write("hidden");
  }

  function body_9(chk, ctx) {
    return chk.exists(ctx.get("showDateRangeSelector"), ctx, {
      "else": body_10,
      "block": body_11
    }, null);
  }

  function body_10(chk, ctx) {
    return chk.write("All dates");
  }

  function body_11(chk, ctx) {
    return chk.write("When");
  }

  function body_12(chk, ctx) {
    return chk.helper("eq", ctx, {
      "else": body_13,
      "block": body_14
    }, {
      "key": ctx.get("prefDate"),
      "value": "custom_date_range"
    });
  }

  function body_13(chk, ctx) {
    return chk.reference(ctx.get("selectedDate"), ctx, "h");
  }

  function body_14(chk, ctx) {
    return chk.helper("datetime_format", ctx, {}, {
      "style": "datestamp_month_day",
      "value": ctx.get("eventStartDate")
    }).write(" - ").helper("datetime_format", ctx, {}, {
      "style": "datestamp_month_day",
      "value": ctx.get("eventEndDate")
    });
  }

  function body_15(chk, ctx) {
    return chk.helper("eq", ctx, {
      "else": body_16,
      "block": body_18
    }, {
      "key": ctx.get("selection"),
      "value": "custom_date_range"
    });
  }

  function body_16(chk, ctx) {
    return chk.write("<li class=\"a-click-option ").helper("if", ctx, {
      "block": body_17
    }, {
      "test": "prefDate==selection"
    }).write("\" id=\"datefilter-").reference(ctx.get("selection"), ctx, "h").write("\" data-date=").reference(ctx.get("selection"), ctx, "h").write(">").reference(ctx.get("i18nKey"), ctx, "h").write("</li>");
  }

  function body_17(chk, ctx) {
    return chk.write("selected");
  }

  function body_18(chk, ctx) {
    return chk.write("<div class=\"container-date-calendar ").helper("if", ctx, {
      "block": body_19
    }, {
      "test": "prefDate==selection"
    }).write("\"></div>");
  }

  function body_19(chk, ctx) {
    return chk.write(" selected");
  }
  return body_0;
})();
define('homepage-domain-selector-i18n-props', [], function() {
  return {
    "homepage.domain-selector.title": "Choose your country"
  }
});
(function() {
  dust.register("domain-selector", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class='dom-sel-rollup' id='dsr'><div class='flare'></div><span class='dom-sel-head'>Choose your country<span class=\"sh-iconset sh-iconset-close icon-close a-click-close\" id='dsc'></span></span><ul class='dom-list'>").section(ctx.get("domains"), ctx, {
      "block": body_1
    }, null).write("</ul></div>");
  }

  function body_1(chk, ctx) {
    return chk.write("<li class='sh-domain'><a href=").reference(ctx.get("href"), ctx, "h").write(" title='").reference(ctx.get("name"), ctx, "h", ["s"]).write("'><span class=\"flag flag-").reference(ctx.get("id"), ctx, "h").write("\"></span><div class=\"domain\">").reference(ctx.get("name"), ctx, "h", ["s"]).write("</div></a></li>");
  }
  return body_0;
})();
define('search-list-i18n-props', [], function() {
  return {
    "search.list.searchforText": "See all results for",
    "search.list.moreevents": "more events",
    "search.list.urgency.suggest.tickets.singular": "Only {urgencyMessage.ticketsAtMinPrice} ticket left at lowest price",
    "search.list.urgency.suggest.tickets.plural": "Only {urgencyMessage.ticketsAtMinPrice} tickets left at lowest price",
    "search.list.urgency.suggest.totalviews": "{urgencyMessage.totalViews} people are viewing this event",
    "search.list.urgency.suggest.performer.totalviews": "{urgencyMessage.totalViews} people are interested in this"
  }
});
(function() {
  dust.register("search-list-component", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"result-list\">").section(ctx._get(false, ["list"]), ctx, {
      "block": body_1
    }, null).section(ctx._get(false, ["searchTerm"]), ctx, {
      "block": body_21
    }, null).write("</div>");
  }

  function body_1(chk, ctx) {
    return chk.write("<ul class=\"result-list-group ").exists(ctx._get(false, ["style"]), ctx, {
      "block": body_2
    }, null).notexists(ctx._get(false, ["style"]), ctx, {
      "block": body_3
    }, null).write("\">").section(ctx._get(false, ["group"]), ctx, {
      "block": body_4
    }, null).write("</ul>");
  }

  function body_2(chk, ctx) {
    return chk.reference(ctx._get(false, ["style"]), ctx, "h");
  }

  function body_3(chk, ctx) {
    return chk.write("default");
  }

  function body_4(chk, ctx) {
    return chk.helper("if", ctx, {
      "else": body_5,
      "block": body_6
    }, {
      "test": "selectedIndex == index"
    }).helper("if", ctx, {
      "block": body_7
    }, {
      "test": "type == 'header'"
    }).helper("if", ctx, {
      "block": body_8
    }, {
      "test": "type == 'header tickets'"
    }).helper("if", ctx, {
      "block": body_11
    }, {
      "test": "suggestVariant == 7"
    }).helper("if", ctx, {
      "block": body_14
    }, {
      "test": "type == 'header team'"
    }).helper("if", ctx, {
      "block": body_15
    }, {
      "test": "type == 'header trending'"
    }).helper("if", ctx, {
      "block": body_16
    }, {
      "test": "type == 'item eventNameContainer'"
    }).helper("if", ctx, {
      "block": body_18
    }, {
      "test": "type == 'item'"
    }).exists(ctx._get(false, ["city"]), ctx, {
      "block": body_20
    }, null).write("</li>");
  }

  function body_5(chk, ctx) {
    return chk.write("<li class=\"result-list-").reference(ctx._get(false, ["type"]), ctx, "h").write("\" data-id=\"").reference(ctx._get(false, ["id"]), ctx, "h").write("\"  data-index=\"").reference(ctx._get(false, ["index"]), ctx, "h").write("\">");
  }

  function body_6(chk, ctx) {
    return chk.write("<li class=\"result-list-").reference(ctx._get(false, ["type"]), ctx, "h").write(" selected\" data-id=\"").reference(ctx._get(false, ["id"]), ctx, "h").write("\" data-index=\"").reference(ctx._get(false, ["index"]), ctx, "h").write("\">");
  }

  function body_7(chk, ctx) {
    return chk.reference(ctx._get(false, ["value"]), ctx, "h", ["s"]);
  }

  function body_8(chk, ctx) {
    return chk.helper("if", ctx, {
      "block": body_9
    }, {
      "test": "suggestVariant == 6"
    }).reference(ctx._get(false, ["value"]), ctx, "h", ["s"]);
  }

  function body_9(chk, ctx) {
    return chk.write("<span class=\"moreevents\" data-searchterm=\"").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("\"><a class=\"moreevents-href\" href=\"").helper("toUrl", ctx, {
      "block": body_10
    }, {
      "href": ctx._get(false, ["searchTermURL"])
    }).write("\">more events</a></span>");
  }

  function body_10(chk, ctx) {
    return chk;
  }

  function body_11(chk, ctx) {
    return chk.helper("if", ctx, {
      "block": body_12
    }, {
      "test": "type == 'header moreevents'"
    });
  }

  function body_12(chk, ctx) {
    return chk.write("<span class=\"othermoreevents\" data-searchterm=\"").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("\"><a class=\"moreevents-href\" href=\"").helper("toUrl", ctx, {
      "block": body_13
    }, {
      "href": ctx._get(false, ["searchTermURL"])
    }).write("\">more events</a></span>");
  }

  function body_13(chk, ctx) {
    return chk;
  }

  function body_14(chk, ctx) {
    return chk.reference(ctx._get(false, ["value"]), ctx, "h", ["s"]);
  }

  function body_15(chk, ctx) {
    return chk.reference(ctx._get(false, ["value"]), ctx, "h", ["s"]);
  }

  function body_16(chk, ctx) {
    return chk.write("<div class='itemInfo eventDescription'><div class=\"eventQueryLogSuggestion\"><a href=\"").helper("toUrl", ctx, {
      "block": body_17
    }, {
      "href": ctx._get(false, ["url"])
    }).write("\" class=\"item\" data-id=\"").reference(ctx._get(false, ["id"]), ctx, "h").write("\" data-index=\"").reference(ctx._get(false, ["index"]), ctx, "h").write("\">").reference(ctx._get(false, ["value"]), ctx, "h", ["s"]).write("</a></div><div class='venueName'>").reference(ctx._get(false, ["venueName"]), ctx, "h").write(", ").reference(ctx._get(false, ["city"]), ctx, "h").write("</div>").partial("urgency_suggest", ctx, {
      "urgencyEntity": "event"
    }).write("</div>");
  }

  function body_17(chk, ctx) {
    return chk;
  }

  function body_18(chk, ctx) {
    return chk.write("<div class='itemInfo'><a href=\"").helper("toUrl", ctx, {
      "block": body_19
    }, {
      "href": ctx._get(false, ["url"])
    }).write("\" class=\"item\" data-id=\"").reference(ctx._get(false, ["id"]), ctx, "h").write("\" data-index=\"").reference(ctx._get(false, ["index"]), ctx, "h").write("\">").reference(ctx._get(false, ["value"]), ctx, "h", ["s"]).write("</a>").partial("urgency_suggest", ctx, {
      "urgencyEntity": "performer"
    }).write("</div>");
  }

  function body_19(chk, ctx) {
    return chk;
  }

  function body_20(chk, ctx) {
    return chk.write("<div class='eventInfo'><div class='eventDate'>").helper("datetime_format", ctx, {}, {
      "value": ctx._get(false, ["eventDate"]),
      "style": "medium"
    }).write("</div><div class='eventTime'>").helper("datetime_format", ctx, {}, {
      "value": ctx._get(false, ["eventDate"]),
      "style": "time"
    }).write("</div></div>");
  }

  function body_21(chk, ctx) {
    return chk.write("<div class=\"result-list-final-item-hdr\"></div>").helper("if", ctx, {
      "else": body_22,
      "block": body_23
    }, {
      "test": "selectedIndex == totalItems"
    }).write("<a class=\"result-list-final-item-href\" href=\"").helper("toUrl", ctx, {
      "block": body_24
    }, {
      "href": ctx._get(false, ["searchTermURL"])
    }).write("\">See all results for&nbsp<span class=\"result-list-searchterm\">&quot;").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("&quot;</span></a></div>").helper("if", ctx, {
      "block": body_25
    }, {
      "test": "suggestVariant == 7"
    });
  }

  function body_22(chk, ctx) {
    return chk.write("<div class=\"result-list-final-item\" data-performerid=\"").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("\" data-submit=\"true\" data-searchterm=\"").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("\">");
  }

  function body_23(chk, ctx) {
    return chk.write("<div class=\"result-list-final-item selected\" data-performerid=\"").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("\" data-submit=\"true\" data-searchterm=\"").reference(ctx._get(false, ["searchTerm"]), ctx, "h").write("\">");
  }

  function body_24(chk, ctx) {
    return chk;
  }

  function body_25(chk, ctx) {
    return chk.write("<style>/* Todo - Remove During Refactor* TechDebt - DISC-77 - Safari CSS Fixes to Handle the Bug DISC-64* Fixed bug DISC-64*/@media only screen and (max-width: 639px) {.result-list-container .result-list .result-list-placeholder{visibility: hidden;height: 110px;display: none;}_::-webkit-full-page-media, _:future, :root .result-list-container .result-list .result-list-placeholder {display: block;}}</style><div class=\"result-list-placeholder\"></div>");
  }
  return body_0;
})();
(function() {
  dust.register("urgency_suggest", body_0);

  function body_0(chk, ctx) {
    return chk.exists(ctx._get(false, ["urgencyMessage"]), ctx, {
      "block": body_1
    }, null);
  }

  function body_1(chk, ctx) {
    return chk.exists(ctx._get(false, ["urgencyMessage", "ticketsAtMinPrice"]), ctx, {
      "block": body_2
    }, null).exists(ctx._get(false, ["urgencyMessage", "totalViews"]), ctx, {
      "block": body_6
    }, null);
  }

  function body_2(chk, ctx) {
    return chk.write("<div class=\"event-urgency-message-container").exists(ctx._get(false, ["urgencyEntity"]), ctx, {
      "block": body_3
    }, null).write("\"><span class=\"urgency-message-icon-container min-price\"></span><div class=\"urgency-message-text-container\"><span class=\"urgency-message-text\">").helper("eq", ctx, {
      "else": body_4,
      "block": body_5
    }, {
      "key": ctx._get(false, ["urgencyMessage", "ticketsAtMinPrice"]),
      "value": "1",
      "type": "number"
    }).write("</span></div></div>");
  }

  function body_3(chk, ctx) {
    return chk.write(" ").reference(ctx._get(false, ["urgencyEntity"]), ctx, "h");
  }

  function body_4(chk, ctx) {
    return chk.write("Only ").reference(ctx._get(false, ["urgencyMessage", "ticketsAtMinPrice"]), ctx, "h").write(" tickets left at lowest price");
  }

  function body_5(chk, ctx) {
    return chk.write("Only ").reference(ctx._get(false, ["urgencyMessage", "ticketsAtMinPrice"]), ctx, "h").write(" ticket left at lowest price");
  }

  function body_6(chk, ctx) {
    return chk.write("<div class=\"event-urgency-message-container").exists(ctx._get(false, ["urgencyEntity"]), ctx, {
      "block": body_7
    }, null).write("\"><span class=\"urgency-message-icon-container total-views\"></span><div class=\"urgency-message-text-container\"><span class=\"urgency-message-text\">").helper("select", ctx, {
      "block": body_8
    }, {
      "key": ctx._get(false, ["urgencyEntity"])
    }).write("</span></div></div>");
  }

  function body_7(chk, ctx) {
    return chk.write(" ").reference(ctx._get(false, ["urgencyEntity"]), ctx, "h");
  }

  function body_8(chk, ctx) {
    return chk.helper("eq", ctx, {
      "block": body_9
    }, {
      "value": "performer"
    }).helper("eq", ctx, {
      "block": body_10
    }, {
      "value": "event"
    });
  }

  function body_9(chk, ctx) {
    return chk.reference(ctx._get(false, ["urgencyMessage", "totalViews"]), ctx, "h").write(" people are interested in this");
  }

  function body_10(chk, ctx) {
    return chk.reference(ctx._get(false, ["urgencyMessage", "totalViews"]), ctx, "h").write(" people are viewing this event");
  }
  return body_0;
})();
define('search-search-i18n-props', [], function() {
  return {
    "search.search.inputbox.placeholder": "Search for events, artists, teams or venues",
    "search.search.events": "EVENTS",
    "search.search.teams": "TEAMS",
    "search.search.team": "TEAM",
    "search.search.artists": "ARTISTS",
    "search.search.artist": "ARTIST",
    "search.search.popularsearches": "POPULAR SEARCHES",
    "search.search.moreevents": "more events",
    "search.search.seeallresultsfor": "See all results for"
  }
});
(function() {
  dust.register("search-component", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"search-view\"></div>");
  }
  return body_0;
})();
(function() {
  dust.register("search-view-body-Default", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"search-list-component-container\"><form action=\"#\"><div class=\"search-form-container\"><input class=\"inputbox\" type=\"search\" maxlength=\"2048\" name=\"inputbox\" autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" placeholder=\"Search for events, artists, teams or venues\" /><div class=\"search-buttons-container\"><span class=\"search-spinner sh-iconset sh-iconset-loader sh-animate-spin hidden\"></span><span alt=\"Clear\" class=\"sh-iconset sh-iconset-close clear-search-button hidden\"></span><span alt=\"Search\" class=\"sh-iconset sh-iconset-search search-action-button\"></span></div><div class=\"search-mobile-click-action search-mobile-show-action\"></div></div></form><div class=\"result-list-container\"></div></div>");
  }
  return body_0;
})();
(function() {
  dust.register("search-view-body-FullScreen", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"search-list-component-container\"><span alt=\"Back\" class=\"sh-iconset sh-iconset-headerback search-mobile-header-back-button search-mobile-back-action\"></span><form action=\"#\"><div class=\"search-form-container\"><input class=\"inputbox\" type=\"search\" maxlength=\"2048\" name=\"inputbox\" autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" placeholder=\"Search for events, artists, teams or venues\"").exists(ctx._get(false, ["autoFocusSearchBox"]), ctx, {
      "block": body_1
    }, null).write("/><div class=\"search-buttons-container\"><span class=\"search-spinner sh-iconset sh-iconset-loader sh-animate-spin hidden\"></span><span alt=\"Clear\" class=\"sh-iconset sh-iconset-close clear-search-button hidden\"></span><span alt=\"Search\" class=\"sh-iconset sh-iconset-search search-action-button\"></span></div><div class=\"search-mobile-button-container\"><div class=\"search-spinner hidden\"><span class=\"search-spinner sh-iconset sh-iconset-loader sh-animate-spin hidden\"></span></div><div class=\"clear-search-button hidden\"><span alt=\"Clear\" class=\"sh-iconset sh-iconset-close clear-search-button hidden\"></span></div></div></div></form><div class=\"result-list-container\"></div></div><div class=\"search-mobile-proxy-container\"><div class=\"mobile-search-proxy-form-container search-mobile-show-action\"><input class=\"inputboxProxy\" type=\"search\" maxlength=\"2048\" name=\"inputbox\" autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" placeholder=\"Search for events, artists, teams or venues\" /><span alt=\"Search\" class=\"sh-iconset sh-iconset-search search-action-button-proxy\"></span></div></div>");
  }

  function body_1(chk, ctx) {
    return chk.write(" autofocus");
  }
  return body_0;
})();
(function() {
  dust.register("search-view-globalHeader-Borderless", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"search-mobile-view-close-button-container search-mobile-back-action\"><span alt=\"Back\" class=\"sh-iconset sh-iconset-headerback search-mobile-header-back-button\"></span></div><div class=\"search-list-component-container\"><form action=\"#\"><div class=\"search-form-container\"><input class=\"inputbox\" type=\"text\" maxlength=\"2048\" name=\"inputbox\" autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" placeholder=\"Search for events, artists, teams or venues\" /><div class=\"search-buttons-container\"><span class=\"search-spinner sh-iconset sh-iconset-loader sh-animate-spin hidden\"></span><span alt=\"Clear\" class=\"sh-iconset sh-iconset-close clear-search-button hidden\"></span><span alt=\"Search\" class=\"sh-iconset sh-iconset-search search-action-button\"></span></div></div></form><div class=\"result-list-container\"></div></div><div class=\"search-mobile-header-button-container\"><div class=\"search-spinner hidden\"><span class=\"search-spinner sh-iconset sh-iconset-loader sh-animate-spin hidden\"></span></div><div class=\"clear-search-button hidden\"><span alt=\"Clear\" class=\"sh-iconset sh-iconset-close clear-search-button hidden\"></span></div><div class=\"close-search-button\"><span alt=\"Close\" class=\"sh-iconset sh-iconset-close close-search-button\"></span></div></div>");
  }
  return body_0;
})();
(function() {
  dust.register("search-view-globalHeader-Overlay", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"search-mobile-view-close-button-container search-mobile-back-action\"><span alt=\"Back\" class=\"sh-iconset sh-iconset-headerback search-mobile-header-back-button\"></span></div><div class=\"search-list-component-container\"><form action=\"#\"><div class=\"search-form-container\"><input class=\"inputbox\" type=\"search\" maxlength=\"2048\" name=\"inputbox\" autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" placeholder=\"Search for events, artists, teams or venues\" /><div class=\"search-buttons-container\"><span class=\"search-spinner sh-iconset sh-iconset-loader sh-animate-spin hidden\"></span><span alt=\"Clear\" class=\"sh-iconset sh-iconset-close clear-search-button hidden\"></span><span alt=\"Search\" class=\"sh-iconset sh-iconset-search search-action-button\"></span></div></div></form><div class=\"result-list-container\"></div></div><div class=\"search-mobile-header-button-container\"><span alt=\"Search\" class=\"sh-iconset sh-iconset-search search-mobile-header-button search-mobile-show-action\"></span></div>");
  }
  return body_0;
})();
define('homepage-global_footer-i18n-props', [], function() {
  return {
    "homepage.global_footer.overview.title": "About us",
    "homepage.global_footer.advertising.title": "Advertising choices",
    "homepage.global_footer.careers.title": "Careers",
    "homepage.global_footer.legal.title": "Terms, Privacy & Cookies",
    "homepage.global_footer.copyright.title": "&copy; eBay 2000-2017. All Rights Reserved. Use of this website signifies your agreement to our User Agreement, Privacy Notice and Cookie Notice. You are buying tickets from a third party; StubHub is not the ticket seller. Prices are set by sellers and may be above face value.",
    "homepage.global_footer.copyright.text": "&copy; 2000-2017. All Rights Reserved. Use of this website signifies your agreement to our <a href=\"{legalUrl}\" id=\"copyright-policies\" title=\"User Agreement, Privacy Notice and Cookie Notice\">User Agreement, Privacy Notice and Cookie Notice</a>. You are buying tickets from a third party; StubHub is not the ticket seller. Prices are set by sellers and may be above face value.",
    "homepage.global_footer.t&c.confidence.text": "Buy and sell with confidence",
    "homepage.global_footer.t&c.service.text": "Customer service all the way to your seat",
    "homepage.global_footer.t&c.guarantee.text": "Every order is 100% guaranteed",
    "homepage.global_footer.col1.title": "About StubHub",
    "homepage.global_footer.col2.title": "Fan Hub",
    "homepage.global_footer.contactus.text": "Help",
    "homepage.global_footer.affiliates.text": "Affiliates",
    "homepage.global_footer.giftcards.title": "Gift cards",
    "homepage.global_footer.partners.title": "Partners",
    "homepage.global_footer.promise.title": "The StubHub Promise",
    "homepage.global_footer.lmsservices.title": "Last Minute Services",
    "homepage.global_footer.notifications.title": "Notifications",
    "homepage.global_footer.blog.title": "Our Blog",
    "homepage.global_footer.domain.title": "COUNTRY",
    "homepage.global_footer.pressbox.text": "Press Box",
    "homepage.global_footer.events-by-venue.text": "Events by venue",
    "homepage.global_footer.backstage.title": "Backstage",
    "homepage.global_footer.social.connect-with-us": "Connect with us",
    "homepage.global_footer.social.facebook": "https://www.facebook.com/Stubhub/",
    "homepage.global_footer.social.social-facebook": "Facebook",
    "homepage.global_footer.social.twitter": "https://twitter.com/StubHub/",
    "homepage.global_footer.social.social-twitter": "Twitter",
    "homepage.global_footer.social.instagram": "https://www.instagram.com/stubhub/",
    "homepage.global_footer.social.social-instagram": "Instagram",
    "homepage.global_footer.appdownload.get-the-stubhub-app": "Get the StubHub app",
    "homepage.global_footer.appdownload.download-on-the-app-store": "Download on the App Store",
    "homepage.global_footer.appdownload.get-it-on-google-play": "GET IT ON Google Play",
    "homepage.global_footer.appdownload.ios-app-url": "https://z1k-f.tlnk.io/serve?action=click&publisher_id=163120&site_id=101844&my_campaign=FooterBadge",
    "homepage.global_footer.appdownload.android-app-url": "https://ydn-k.tlnk.io/serve?action=click&publisher_id=163120&site_id=101848&my_campaign=FooterBadge",
    "homepage.global_footer.domain.US": "United States",
    "homepage.global_footer.domain.DE": "Deutschland",
    "homepage.global_footer.domain.GB": "United Kingdom",
    "homepage.global_footer.domain.FR": "France",
    "homepage.global_footer.domain.MX": "M&#233;xico",
    "homepage.global_footer.domain.PT": "Portugal",
    "homepage.global_footer.domain.ES": "Spain",
    "homepage.global_footer.domain.IT": "Italy",
    "homepage.global_footer.domain.NL": "Netherlands",
    "homepage.global_footer.domain.CZ": "Czech Republic",
    "homepage.global_footer.domain.AT": "Austria",
    "homepage.global_footer.domain.BE": "Belgium",
    "homepage.global_footer.domain.IE": "Ireland",
    "homepage.global_footer.domain.FI": "Finland",
    "homepage.global_footer.domain.LU": "Luxembourg",
    "homepage.global_footer.domain.GR": "Greece",
    "homepage.global_footer.domain.PL": "Poland",
    "homepage.global_footer.domain.SE": "Sweden",
    "homepage.global_footer.domain.DK": "Denmark"
  }
});
(function() {
  dust.register("global_footer", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class='footer-wrapper'><div id='dom-sel-container'></div><div class=\"footer-main\"><div class=\"footer-top\"><div class=\"footer-social-app\"><div class=\"footer-app-download\"><div class='dom-sel-launcher dsl'><button class=\"flag flag-").reference(ctx.get("currentDomain"), ctx, "h").write("\"></button><button class=\"domain footer-heading\">").reference(ctx.get("currentDomainName"), ctx, "h", ["s"]).write("</button></div>").notexists(ctx.get("hideAppDownloadLink"), ctx, {
      "block": body_1
    }, null).write("</div><div class=\"footer-social\"><h4 class=\"footer-heading\">Connect with us</h4><a class=\"footer-social-link footer-facebook\" title=\"Facebook\" data-href=https://www.facebook.com/Stubhub/ data-title=\"Facebook\">Facebook</a><a class=\"footer-social-link footer-instagram\" title=\"Instagram\"  data-href=https://www.instagram.com/stubhub/ data-title=\"Instagram\">Instagram</a><a class=\"footer-social-link footer-twitter\" title=\"Twitter\"  data-href=https://twitter.com/StubHub/ data-title=\"Twitter\">Twitter</a><div class=\"fb-send-to-messenger\"messenger_app_id=\"").reference(ctx.get("fbAppId"), ctx, "h").write("\"page_id=\"").reference(ctx.get("fbPageId"), ctx, "h").write("\"data-ref=\"GEN_OPT_IN\"color=\"blue\"size=\"standard\"></div></div></div><div class=\"footer-info-pages\"><div class=\"about-stubhub\"><h4 class=\"footer-heading\">About StubHub</h4><div class=\"col1\"></div></div><div class=\"fan-hub\"><h4 class=\"footer-heading\">Fan Hub</h4><div class=\"col2\"></div></div></div></div><div class=\"footer-bottom\"><div class=\"fan-protect\"><div class=\"fan-protect-img\"></div><div id = \"trust-lang\"><span id=\"trust-safety-confidence\">Buy and sell with confidence</span><br/><span id=\"trust-safety-service\">Customer service all the way to your seat</span><br/><span id=\"trust-safety-guarantee\">Every order is 100% guaranteed</span></div></div>").exists(ctx.get("copyright"), ctx, {
      "block": body_2
    }, null).write("</div></div></div>");
  }

  function body_1(chk, ctx) {
    return chk.write("<div class=\"ios-android-app-download\"><h4 class=\"footer-heading\">Get the StubHub app</h4><a class=\"iosapp iosapp-").reference(ctx.get("currentLocale"), ctx, "h").write("\" title=\"ios-app download\" data-href=https://z1k-f.tlnk.io/serve?action=click&publisher_id=163120&site_id=101844&my_campaign=FooterBadge>Download on the App Store</a><a class=\"androidapp androidapp-").reference(ctx.get("currentLocale"), ctx, "h").write("\"  title=\"android-app download\" data-href=https://ydn-k.tlnk.io/serve?action=click&publisher_id=163120&site_id=101848&my_campaign=FooterBadge>GET IT ON Google Play</a></div>");
  }

  function body_2(chk, ctx) {
    return chk.write("<div class=\"copyright-container\"><p class=\"copyright copyright-content\" title='").reference(ctx.getPath(false, ["copyright", "titleText"]), ctx, "h", ["s"]).write("'>").reference(ctx.getPath(false, ["copyright", "contentText"]), ctx, "h", ["s"]).write("</p></div>");
  }
  return body_0;
})();
(function() {
  dust.register("footer-list", body_0);

  function body_0(chk, ctx) {
    return chk.write("<ul>").exists(ctx.get("titleText"), ctx, {
      "block": body_1
    }, null).section(ctx.get("links"), ctx, {
      "block": body_2
    }, null).write("</ul>");
  }

  function body_1(chk, ctx) {
    return chk.write("<div class=\"footer-heading\" title=\"").reference(ctx.get("titleText"), ctx, "h").write("\">").reference(ctx.get("contentText"), ctx, "h").write("</div>");
  }

  function body_2(chk, ctx) {
    return chk.write("<li><a title=\"").reference(ctx.get("titleText"), ctx, "h").write("\" href=\"").reference(ctx.get("href"), ctx, "h").write("\" class='footer-link' id=\"").reference(ctx.get("id"), ctx, "h").write("\">").reference(ctx.get("contentText"), ctx, "h").write("</a></li>");
  }
  return body_0;
})();
define('search-datepicker-i18n-props', [], function() {
  return {
    "search.datepicker.monthNames": "January,February,March,April,May,June,July,August,September,October,November,December",
    "search.datepicker.monthNamesShort": "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
    "search.datepicker.dayNames": "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
    "search.datepicker.dayNamesShort": "Sun,Mon,Tue,Wed,Thu,Fri,Sat",
    "search.datepicker.dayNamesMin": "Su,Mo,Tu,We,Th,Fr,Sa",
    "search.datepicker.max.selection.range": "+24m",
    "search.datepicker.plugin.dateFormat": "yy-m-d",
    "search.datepicker.firstDay": "0",
    "search.datepicker.selectDateRange": "Select date range",
    "search.datepicker.subComponentHeading": "Choose dates",
    "search.datepicker.locale.default.date.display": "MMM D, YYYY",
    "search.datepicker.tabDateDisplayFormat": "MMM D, YYYY",
    "search.datepicker.mainDateDisplayFormat": "MMM D",
    "search.datepicker.trackingDateFormat": "M/D/YYYY",
    "search.datepicker.tabDateStyling": "short-date",
    "search.datepicker.from": "From",
    "search.datepicker.to": "To",
    "search.datepicker.clearbutton.label": "Clear dates"
  }
});
(function() {
  dust.register("datepicker-calendar", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div id=\"calendar_container\"></div>");
  }
  return body_0;
})();
(function() {
  dust.register("search-datepicker-component", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div id=\"datepicker-component-container\" class=").reference(ctx._get(false, ["showDatepicker"]), ctx, "h").write("><a href=\"javascript:void(0)\" class=\"accessibility-container ").notexists(ctx._get(false, ["isSubComponent"]), ctx, {
      "block": body_1
    }, null).write("\"><div class=\"datepicker-select-range").exists(ctx._get(false, ["isSubComponent"]), ctx, {
      "block": body_2
    }, null).write("\" id=\"a-click-show-calendar\">").notexists(ctx._get(false, ["isSubComponent"]), ctx, {
      "else": body_3,
      "block": body_4
    }, null).write("</div></a><div class=\"datepicker-select ").reference(ctx._get(false, ["showDatepicker"]), ctx, "h").write(" ").reference(ctx._get(false, ["showAnimation"]), ctx, "h").write(" ").exists(ctx._get(false, ["isSubComponent"]), ctx, {
      "block": body_9
    }, null).write("\"><div class=\"datepicker-outer-container\"><div class=\"horizontal-border\"></div><div class=\"datepicker-sh-container\"><div class=\"datepicker-heading-container\"><div class=\"sh-iconset sh-iconset-chevron up-arrow\"></div><div class=\"sh-iconset sh-iconset-close close-options\"></div><div class=\"datepicker-heading\">").reference(ctx._get(false, ["heading"]), ctx, "h").write("</div></div><div class=\"datepicker-tabs\"><div id=\"datepicker-tab-from\" class=\"tab selected\"><div class=\"tab-text\">From</div><div id='tab-show-FromDate' class=\"tab-date\">").helper("datetime_format", ctx, {}, {
      "style": "short-date",
      "value": ctx._get(false, ["tabEventStartDate"])
    }).write("</div></div><div id=\"datepicker-tab-to\" class=\"tab\"><div class=\"tab-text\">To</div><div id='tab-show-ToDate' class=\"tab-date\">").helper("datetime_format", ctx, {}, {
      "style": "short-date",
      "value": ctx._get(false, ["tabEventEndDate"])
    }).write("</div></div></div></div></div><div id=\"datepicker-calendar-container\"></div></div>").notexists(ctx._get(false, ["isSubComponent"]), ctx, {
      "block": body_10
    }, null).write("</div>");
  }

  function body_1(chk, ctx) {
    return chk.write(" a-keydown-select-option");
  }

  function body_2(chk, ctx) {
    return chk.write("  sub-component");
  }

  function body_3(chk, ctx) {
    return chk.write("<div class=\"selected-option\">Choose dates</div>");
  }

  function body_4(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-calendar calendar-icon\"></div><div class=\"selected-option\">").exists(ctx._get(false, ["isDateSelected"]), ctx, {
      "else": body_5,
      "block": body_6
    }, null).write("</div><span class=\"sh-iconset sh-iconset-chevron down-arrow date-").exists(ctx._get(false, ["isDateSelected"]), ctx, {
      "else": body_7,
      "block": body_8
    }, null).write("\"></span>");
  }

  function body_5(chk, ctx) {
    return chk.reference(ctx._get(false, ["heading"]), ctx, "h");
  }

  function body_6(chk, ctx) {
    return chk.helper("datetime_format", ctx, {}, {
      "style": "datestamp_month_day",
      "value": ctx._get(false, ["tabEventStartDate"])
    }).write(" - ").helper("datetime_format", ctx, {}, {
      "style": "datestamp_month_day",
      "value": ctx._get(false, ["tabEventEndDate"])
    });
  }

  function body_7(chk, ctx) {
    return chk.write("not-selected");
  }

  function body_8(chk, ctx) {
    return chk.write("selected");
  }

  function body_9(chk, ctx) {
    return chk.write(" sub-component");
  }

  function body_10(chk, ctx) {
    return chk.write("<div class=\"datepicker-reset-button-container date-").exists(ctx._get(false, ["isDateSelected"]), ctx, {
      "else": body_11,
      "block": body_12
    }, null).write(" ").reference(ctx._get(false, ["showDatepicker"]), ctx, "h").write("\"><div class=\"sh-iconset sh-iconset-close close-options\"></div></div>");
  }

  function body_11(chk, ctx) {
    return chk.write("not-selected");
  }

  function body_12(chk, ctx) {
    return chk.write("selected");
  }
  return body_0;
})();
define('search-geolocation-filter-i18n-props', [], function() {
  return {
    "search.geolocation-filter.defaultLink.text": "All locations",
    "search.geolocation-filter.top-in.text": "Top events in",
    "search.geolocation-filter.top-near.text": "Top events near",
    "search.geolocation-filter.error.timeout.title": "Timeout",
    "search.geolocation-filter.error.timeout.message": "Something went wrong. Let's try that again.",
    "search.geolocation-filter.error.tracking.title": "You might want to...",
    "search.geolocation-filter.error.tracking.message": "Allow us to track location in your browser settings to enable current location.",
    "search.geolocation-filter.currentlocation.text": "Current location",
    "search.geolocation-filter.placeholder.text": "Search by city"
  }
});
(function() {
  dust.register("geolocation-filter", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div ").exists(ctx._get(false, ["showPopup"]), ctx, {
      "block": body_1
    }, null).write(" id=\"geo-content\"><a href=\"javascript:void(0)\" class=\"geo-display\">").exists(ctx._get(false, ["showLocationIcon"]), ctx, {
      "block": body_2
    }, null).helper("if", ctx, {
      "else": body_3,
      "block": body_4
    }, {
      "test": "citySelected"
    }).write("<span class=\"sh-iconset sh-iconset-chevron down-arrow\"></span></a><div class=\"geo-input ").notexists(ctx._get(false, ["showPopup"]), ctx, {
      "block": body_5
    }, null).write("\"><div class=\"geo-input-close-tab geo-close-action hide\"><span class=\"sh-iconset sh-iconset-chevron up-arrow\"></span></div><div class=\"geo-inputbox-container\"><input class=\"geo-inputbox\" type=\"search\" maxlength=\"50\" name=\"inputbox\" autocapitalize=\"off\" autocomplete=\"off\" autocorrect=\"off\" spellcheck=\"false\" placeholder=\"Search by city\"><span class=\"sh-iconset sh-iconset-close geo-close-icon geo-close-action\"></span><span class=\"sh-iconset sh-iconset-close geo-close-icon mobile geo-clear-action\"></span></div><div class=\"geo-input-scrollable\"><div class=\"geo-current-location ").notexists(ctx._get(false, ["showCurrentLocationAction"]), ctx, {
      "block": body_6
    }, null).write("\" data-position=\"0\"><span>").reference(ctx._get(false, ["currentLocationText"]), ctx, "h").write("</span><span class=\"spinner sh-iconset sh-iconset-loader sh-animate-spin hide\"></span></div><div class=\"geo-city-list\"></div><div class=\"geo-error-container hide\"><div class=\"geo-error-icon\"></div><div class=\"geo-error-message\"><span class=\"title\"></span><span class=\"message\"></span></div></div></div></div></div>");
  }

  function body_1(chk, ctx) {
    return chk.write("class=\"geo-show\"");
  }

  function body_2(chk, ctx) {
    return chk.write("<div class=\"sh-iconset sh-iconset-location geo-location-icon\"></div>");
  }

  function body_3(chk, ctx) {
    return chk.write("<div class=\"geo-location-text\">").reference(ctx._get(false, ["defaultLinkText"]), ctx, "h").write("</div>");
  }

  function body_4(chk, ctx) {
    return chk.write("<div class=\"geo-location-text\">").reference(ctx._get(false, ["citySelected"]), ctx, "h").write("</div>");
  }

  function body_5(chk, ctx) {
    return chk.write("hide");
  }

  function body_6(chk, ctx) {
    return chk.write("hide");
  }
  return body_0;
})();
(function() {
  dust.register("geolocation-filter_results", body_0);

  function body_0(chk, ctx) {
    return chk.write("<ul>").section(ctx._get(false, ["locations"]), ctx, {
      "block": body_1
    }, null).write("</ul>");
  }

  function body_1(chk, ctx) {
    return chk.write("<li class=\"city\" data-latitude=\"").reference(ctx._get(false, ["latitude"]), ctx, "h").write("\" data-longitude=\"").reference(ctx._get(false, ["longitude"]), ctx, "h").write("\" data-city=\"").reference(ctx._get(false, ["city"]), ctx, "h").write("\" data-statecode=\"").reference(ctx._get(false, ["stateCode"]), ctx, "h").write("\" data-country=\"").reference(ctx._get(false, ["country"]), ctx, "h").write("\" data-countryCode=\"").reference(ctx._get(false, ["countryCode"]), ctx, "h").write("\" data-position=\"").reference(ctx._get(false, ["position"]), ctx, "h").write("\">").reference(ctx._get(false, ["city"]), ctx, "h").notexists(ctx._get(false, ["hideState"]), ctx, {
      "block": body_2
    }, null).exists(ctx._get(false, ["showCountry"]), ctx, {
      "block": body_3
    }, null).write("</li>");
  }

  function body_2(chk, ctx) {
    return chk.write(", ").reference(ctx._get(false, ["stateCode"]), ctx, "h");
  }

  function body_3(chk, ctx) {
    return chk.write(", ").reference(ctx._get(false, ["country"]), ctx, "h");
  }
  return body_0;
})();
define('search-ticketbis-dialog-i18n-props', [], function() {
  return {
    "search.ticketbis-dialog.logo.alt": "Buy and sell your tickets | Ticketbis by StubHub",
    "search.ticketbis-dialog.header": "You're one step away from your tickets",
    "search.ticketbis-dialog.note": "Due to the location of the event, we need to redirect to another platform within StubHub. <strong>You'll need to register again so you can buy your tickets.</strong> Please note that the language and the currency on our new platform may be different.",
    "search.ticketbis-dialog.continue.buttonText": "Continue"
  }
});
(function() {
  dust.register("ticketbis-dialog-modal-view", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"ticketbis-dialog-container\"><div class=\"content\"><img src=\"").reference(ctx._get(false, ["logoImageURL"]), ctx, "h").write("\" alt=\"").reference(ctx._get(false, ["logoAlt"]), ctx, "h").write("\" class=\"logo\"><h1>").reference(ctx._get(false, ["headerText"]), ctx, "h").write("</h1><p>").reference(ctx._get(false, ["noteText"]), ctx, "h", ["s"]).write("</p><a href=\"javascript:;\" class=\"button especialButton\">").reference(ctx._get(false, ["buttonText"]), ctx, "h").write("</a></div><div class=\"progress-bar stubhub\"><span class=\"progress-bar-fill\"></span></div></div><span class=\"sh-iconset sh-iconset-close cancel-button-action\"></span>");
  }
  return body_0;
})();
define('common-chat-i18n-props', [], function() {
  return {
    "common.chat.needhelp.text": "Need help?",
    "common.chat.letschat.text": "Let's chat."
  }
});
(function() {
  dust.register("chat", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"common-chat-sh-invitation\" id=\"common-chat-sh-invitation\"><div id=\"common-chat-sh-icon-container\" class=\"common-chat-sh-icon-container\"><div id=\"common-chat-sh-icon\" class=\"common-chat-sh-icon\"></div></div><div id=\"common-chat-sh-content\" class=\"common-chat-sh-content\"><span id=\"common-chat-sh-need-help\" class=\"common-chat-sh-need-help\">Need help?</span><span id=\"common-chat-sh-lets-chat\" class=\"common-chat-sh-lets-chat\">&nbsp;Let's chat.</span></div><div id=\"common-chat-sh-close-container\" class=\"common-chat-sh-close-container\"><div class=\"sh-iconset sh-iconset-close common-chat-sh-close\" id=\"common-chat-sh-close\"></div></div></div>");
  }
  return body_0;
})();
define('homepage-recentlyviewed-i18n-props', [], function() {
  return {
    "homepage.recentlyviewed.event_details.venue": "- {venueName} - {venueCity}, {venueState}",
    "homepage.recentlyviewed.event_details.singular_ticket": "ticket available",
    "homepage.recentlyviewed.event_details.plural_tickets": "tickets available",
    "homepage.recentlyviewed.event_details.tbd": "TBD",
    "homepage.recentlyviewed.rvtitle": "Recently viewed",
    "homepage.recentlyviewed.today": "Today",
    "homepage.recentlyviewed.tomorrow": "Tomorrow",
    "homepage.recentlyviewed.twoday": "2 days away",
    "homepage.recentlyviewed.threeday": "3 days away",
    "homepage.recentlyviewed.fourday": "4 days away",
    "homepage.recentlyviewed.fiveday": "5 days away",
    "homepage.recentlyviewed.sixday": "6 days away",
    "homepage.recentlyviewed.week": "1 week away",
    "homepage.recentlyviewed.emptyState.today": "Something great's happening tonight. Be there.",
    "homepage.recentlyviewed.emptyState.tomottow": "Today's and tomorrow's events. Get inspired.",
    "homepage.recentlyviewed.emptyState.thisweek": "All this week's events, just for you.",
    "homepage.recentlyviewed.emptyState.view": "View."
  }
});
(function() {
  dust.register("recentlyviewed", body_0);

  function body_0(chk, ctx) {
    return chk.exists(ctx.get("showmodule"), ctx, {
      "block": body_1
    }, null);
  }

  function body_1(chk, ctx) {
    return chk.write("<p id=\"heading\">Recently viewed</p><div class=\"prevWrapper\"><button class=\"prev\"><svg width=\"28px\" height=\"28px\" viewBox=\"0 0 28 28\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch --><title>arrow_left</title><desc>Created with Sketch.</desc><defs></defs><g id=\"LAYOUT_RecentlyViewed_Mocks&amp;Specs_r01\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"SPECS_950_640_RecentlyViewed\" transform=\"translate(-720.000000, -229.000000)\"><g id=\"arrow_left\" transform=\"translate(734.000000, 243.000000) rotate(90.000000) translate(-734.000000, -243.000000) translate(720.000000, 229.000000)\"><path d=\"M14,28 C21.7317333,28 28,21.7322 28,14 C28,6.26826667 21.7317333,0 14,0 C6.2678,0 0,6.26826667 0,14 C0,21.7322 6.2678,28 14,28\" id=\"circle\" fill=\"#FFFFFF\"></path><polyline id=\"arrow\" fill=\"#5C6570\" points=\"19.3844 10.5 21 12.1156 14 19.1156 7 12.1156 8.61513333 10.5 14 15.8848667 19.3844 10.5\"></polyline></g></g></g></svg></button></div><div class=\"carouselRV siemaRV\" id=\"carouselRV\">").section(ctx.get("events"), ctx, {
      "block": body_2
    }, null).exists(ctx.get("showEmptyState"), ctx, {
      "block": body_9
    }, null).write("</div><div class=\"nextWrapper\"><button class=\"next\"><svg width=\"28px\" height=\"28px\" viewBox=\"0 0 28 28\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch --><title>arrow_right</title><desc>Created with Sketch.</desc><defs></defs><g id=\"LAYOUT_RecentlyViewed_Mocks&amp;Specs_r01\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"SPECS_950_640_RecentlyViewed\" transform=\"translate(-785.000000, -229.000000)\"><g id=\"arrow_right\" transform=\"translate(799.000000, 243.000000) rotate(-90.000000) translate(-799.000000, -243.000000) translate(785.000000, 229.000000)\"><path d=\"M14,28 C21.7317333,28 28,21.7322 28,14 C28,6.26826667 21.7317333,0 14,0 C6.2678,0 0,6.26826667 0,14 C0,21.7322 6.2678,28 14,28\" id=\"Fill-1\" fill=\"#FFFFFF\"></path><polyline id=\"Fill-3\" fill=\"#5C6570\" points=\"19.3844 10.5 21 12.1156 14 19.1156 7 12.1156 8.61513333 10.5 14 15.8848667 19.3844 10.5\"></polyline></g></g></g></svg></button>");
  }

  function body_2(chk, ctx) {
    return chk.write("<div class=\"card-item\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\">").exists(ctx.get("dateLabel"), ctx, {
      "block": body_3
    }, null).write("<section class=\"date-stamp-alt\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\">").partial("date_stamp_template", ctx, {
      "dateType": "standard",
      "isTBD": ctx.getPath(false, ["displayAttributes", "hideEventDate"])
    }).write("</section><div class=\"line\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\"></div><div class=\"event-name\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\">").reference(ctx.get("name"), ctx, "h").write("</div><div class=\"time-venue\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\">").notexists(ctx.getPath(false, ["displayAttributes", "hideEventTime"]), ctx, {
      "else": body_4,
      "block": body_5
    }, null).write("&nbsp;- ").reference(ctx.get("venueName"), ctx, "h").write(" - ").reference(ctx.get("venueCity"), ctx, "h").write(", ").reference(ctx.get("venueState"), ctx, "h").write("</div><div class=\"tickets-left\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\">").helper("lte", ctx, {
      "block": body_6
    }, {
      "key": ctx.getPath(false, ["ticketInfo", "totalTickets"]),
      "value": 500
    }).write("</div></div>");
  }

  function body_3(chk, ctx) {
    return chk.write("<div class=\"date-label\" data-index=\"").reference(ctx.get("$idx"), ctx, "h").write("\"><p id=\"text\">").reference(ctx.get("dateLabel"), ctx, "h").write("</p></div>");
  }

  function body_4(chk, ctx) {
    return chk.write("TBD");
  }

  function body_5(chk, ctx) {
    return chk.helper("datetime_format", ctx, {}, {
      "value": ctx.get("dateLocal"),
      "style": "time"
    });
  }

  function body_6(chk, ctx) {
    return chk.helper("lte", ctx, {
      "else": body_7,
      "block": body_8
    }, {
      "key": ctx.getPath(false, ["ticketInfo", "totalTickets"]),
      "value": 1
    });
  }

  function body_7(chk, ctx) {
    return chk.write("<svg class=\"ticketicon\" width=\"12px\" height=\"15px\" viewBox=\"0 0 12 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>ticketalert-filled-15px</title><desc>Created with Sketch.</desc><defs></defs><g id LAYOUT_shareFlow_Mocks&amp;Specs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Artboard\" transform=\"translate(-815.000000, -853.000000)\" fill=\"#C23A77\"><g id=\"Recently-Viewed\" transform=\"translate(798.000000, 685.000000)\"><g id=\"header_recently-viewed\"><g id=\"recently-viewed\" transform=\"translate(2.000000, 43.000000)\"><g id=\"event-card-feed-320\"><g id=\"borders/cell\"><g id=\"tickets-left\" transform=\"translate(15.000000, 125.000000)\"><path d=\"M12,0 L8.25,0 L8.07,0.3 C7.65,1.05 6.84,1.5 6,1.5 C5.16,1.5 4.35,1.05 3.93,0.3 L3.75,0 L0,0 L0,15 L12,15 L12,5.61 L9.6,4.41 L12,4.41 L12,0 L12,0 Z M8.04,10.56 L6.03,9.51 L4.05,10.59 L4.41,8.37 L2.79,6.81 L5.04,6.48 L6.03,4.44 L7.05,6.45 L9.3,6.75 L7.68,8.34 L8.04,10.56 L8.04,10.56 Z\" id=\"ticketalert-filled-15px\"></path></g></g></g></g></g></g></g></g></svg>&nbsp;<p class=\"ticket-text\">Only ").helper("number_format", ctx, {}, {
      "val": ctx.getPath(false, ["ticketInfo", "totalTickets"])
    }).write(" tickets left!</p>");
  }

  function body_8(chk, ctx) {
    return chk.write("<svg class=\"ticketicon\" width=\"12px\" height=\"15px\" viewBox=\"0 0 12 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><title>ticketalert-filled-15px</title><desc>Created with Sketch.</desc><defs></defs><g id LAYOUT_shareFlow_Mocks&amp;Specs\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"Artboard\" transform=\"translate(-815.000000, -853.000000)\" fill=\"#C23A77\"><g id=\"Recently-Viewed\" transform=\"translate(798.000000, 685.000000)\"><g id=\"header_recently-viewed\"><g id=\"recently-viewed\" transform=\"translate(2.000000, 43.000000)\"><g id=\"event-card-feed-320\"><g id=\"borders/cell\"><g id=\"tickets-left\" transform=\"translate(15.000000, 125.000000)\"><path d=\"M12,0 L8.25,0 L8.07,0.3 C7.65,1.05 6.84,1.5 6,1.5 C5.16,1.5 4.35,1.05 3.93,0.3 L3.75,0 L0,0 L0,15 L12,15 L12,5.61 L9.6,4.41 L12,4.41 L12,0 L12,0 Z M8.04,10.56 L6.03,9.51 L4.05,10.59 L4.41,8.37 L2.79,6.81 L5.04,6.48 L6.03,4.44 L7.05,6.45 L9.3,6.75 L7.68,8.34 L8.04,10.56 L8.04,10.56 Z\" id=\"ticketalert-filled-15px\"></path></g></g></g></g></g></g></g></g></svg>&nbsp;<p class=\"ticket-text\">Only ").helper("number_format", ctx, {}, {
      "val": ctx.getPath(false, ["ticketInfo", "totalTickets"])
    }).write(" ticket left!</p>");
  }

  function body_9(chk, ctx) {
    return chk.exists(ctx.get("mediumOneEmptyState"), ctx, {
      "block": body_10
    }, null).exists(ctx.get("largeOneEmptyState"), ctx, {
      "block": body_11
    }, null).exists(ctx.get("largeTwoEmptyState"), ctx, {
      "block": body_12
    }, null).exists(ctx.get("xlargeThreeEmptyState"), ctx, {
      "block": body_13
    }, null).exists(ctx.get("xlargeTwoEmptyState"), ctx, {
      "block": body_14
    }, null).exists(ctx.get("xlargeOneEmptyState"), ctx, {
      "block": body_15
    }, null);
  }

  function body_10(chk, ctx) {
    return chk.write("<div class=\"medium-one\"><div class=\"wrapper\"><div class=\"containerwhite\"><div class=\"headtext\">All this week's events, just for you.</div><button class=\"button\">View</button></div></div><div class=\"wrapperImage\"><div class=\"containerImage\"></div></div></div>");
  }

  function body_11(chk, ctx) {
    return chk.write("<div class=\"large-one\"><div class=\"wrapper\"><div class=\"containerwhite\"><div class=\"headtext\">All this week's events, just for you.</div><button class=\"button\">View</button></div></div><div class=\"wrapperImage\"><div class=\"containerImage\"></div></div></div>");
  }

  function body_12(chk, ctx) {
    return chk.write("<div class=\"large-two\"><div class=\"wrapper\"><div class=\"containerwhite\"><div class=\"headtext\">All this week's events, just for you.</div><button class=\"button\">View</button></div></div><div class=\"wrapperImage\"><div class=\"containerImage\"></div></div></div>");
  }

  function body_13(chk, ctx) {
    return chk.write("<div class=\"xlarge-three\"><div class=\"wrapper\"><div class=\"containerwhite\"><div class=\"headtext\">All this week's events, just for you.</div><button class=\"button\">View</button></div></div><div class=\"wrapperImage\"><div class=\"containerImage\"></div></div></div>");
  }

  function body_14(chk, ctx) {
    return chk.write("<div class=\"xlarge-two\"><div class=\"wrapper\"><div class=\"containerwhite\"><div class=\"headtext\">All this week's events, just for you.</div><button class=\"button\">View</button></div></div><div class=\"wrapperImage\"><div class=\"containerImage\"></div></div></div>");
  }

  function body_15(chk, ctx) {
    return chk.write("<div class=\"xlarge-one\"><div class=\"wrapper\"><div class=\"containerwhite\"><div class=\"headtext\">All this week's events, just for you.</div><button class=\"button\">View</button></div></div><div class=\"wrapperImage\"><div class=\"containerImage\"></div></div></div>");
  }
  return body_0;
})();.com / "),"
en - gb ":a.formatUrl("
https: //stubhub-uk.custhelp.com/"),"de-de":a.formatUrl("/contact-us/"),"fr-fr":a.formatUrl("/contact-us/"),"fr-ca":a.formatUrl("/contact-us/"),"es-mx":a.formatUrl("/contact-us/"),"pt-pt":a.formatUrl("/contact-us/"),"es-es":a.formatUrl("/contact-us/"),"it-it":a.formatUrl("/contact-us/"),"nl-nl":a.formatUrl("/contact-us/"),"de-at":a.formatUrl("/contact-us/"),"nl-be":a.formatUrl("/contact-us/"),"fr-be":a.formatUrl("/contact-us/"),"en-ie":a.formatUrl("/contact-us/"),"fi-fi":a.formatUrl("/contact-us/"),"fr-lu":a.formatUrl("/contact-us/"),"de-lu":a.formatUrl("/contact-us/"),"el-gr":a.formatUrl("/contact-us/"),"pl-pl":a.formatUrl("/contact-us/"),"sv-se":a.formatUrl("/contact-us/"),"da-dk":a.formatUrl("/contact-us/"),"cs-cz":a.formatUrl("/contact-us/")},excludeLocale:"",contentText:{key:"homepage.global_footer.contactus.text"}},{id:"header-affiliates",href:a.formatUrl("/affiliates/"),excludeLocale:"en-us,de-de,es-mx",contentText:{key:"homepage.global_footer.affiliates.text"}},{id:"header-careers",href:a.formatUrl("https://www.stubhubcareers.com/"),excludeLocale:"de-de",contentText:{key:"homepage.global_footer.careers.title"}},{id:"header-legal",href:a.formatUrl("/legal/"),excludeLocale:"en-gb",contentText:{key:"homepage.global_footer.legal.title"}},{id:"header-partners",href:a.formatUrl("/partners/"),excludeLocale:"en-gb,de-de,es-mx,fr-fr",contentText:{key:"homepage.global_footer.partners.title"}}]},{id:"col2",links:[{id:"header-gift-card",href:a.formatUrl("/gift-cards/"),excludeLocale:"de-de, pt-pt, es-es, it-it, nl-nl, de-at, nl-be, fr-be, en-ie, fi-fi, fr-lu, de-lu, el-gr, pl-pl, sv-se, da-dk, cs-cz",contentText:{key:"homepage.global_footer.giftcards.title"}},{id:"header-advantage",href:{"en-us":a.formatUrl("/promise/"),"en-gb":a.formatUrl("/promise/"),"de-de":a.formatUrl("/promise/"),"fr-fr":a.formatUrl("/promise/"),"fr-ca":a.formatUrl("/promise/"),"es-mx":a.formatUrl("/the-stubhub-advantage/"),"pt-pt":a.formatUrl("/promise/"),"es-es":a.formatUrl("/promise/"),
  "it-it": a.formatUrl("/promise/"), "nl-nl": a.formatUrl("/promise/"), "de-at": a.formatUrl("/promise/"), "nl-be": a.formatUrl("/promise/"), "fr-be": a.formatUrl("/promise/"), "en-ie": a.formatUrl("/promise/"), "fi-fi": a.formatUrl("/promise/"), "fr-lu": a.formatUrl("/promise/"), "de-lu": a.formatUrl("/promise/"), "el-gr": a.formatUrl("/promise/"), "pl-pl": a.formatUrl("/promise/"), "sv-se": a.formatUrl("/promise/"), "da-dk": a.formatUrl("/promise/"), "cs-cz": a.formatUrl("/promise/")
}, excludeLocale: "", contentText: {
  key: "homepage.global_footer.promise.title"
}
}, {
  id: "header-backstage",
  href: a.formatUrl("/backstage/"),
  excludeLocale: "en-us,es-mx,fr-fr,pt-pt, es-es, it-it, nl-nl, de-at, nl-be, fr-be, en-ie, fi-fi, fr-lu, de-lu, el-gr, pl-pl, sv-se, da-dk, cs-cz",
  contentText: {
    key: "homepage.global_footer.backstage.title"
  }
}, {
  id: "header-lms-services",
  href: a.formatUrl("/pick-up-locations/"),
  excludeLocale: "de-de,fr-fr,pt-pt,es-es, it-it, nl-nl, de-at, nl-be, fr-be, en-ie, fi-fi, fr-lu, de-lu, el-gr, pl-pl, sv-se, da-dk, cs-cz",
  contentText: {
    key: "homepage.global_footer.lmsservices.title"
  }
}, {
  id: "header-notifications",
  href: a.formatUrl("/notifications/"),
  excludeLocale: "",
  contentText: {
    key: "homepage.global_footer.notifications.title"
  }
}, {
  id: "header-blog",
  href: a.formatUrl("/magazine/"),
  excludeLocale: "en-us, de-de, es-mx, fr-fr, fr-ca, pt-pt, es-es, it-it, nl-nl, de-at, nl-be, fr-be, en-ie, fi-fi, fr-lu, de-lu, el-gr, pl-pl, sv-se, da-dk, cs-cz",
  contentText: {
    key: "homepage.global_footer.blog.title"
  }
}, {
  id: "header-events-by-venue",
  href: a.formatUrl("/united-states-tickets/geography/196976/"),
  excludeLocale: "en-gb,de-de,fr-fr,fr-ca,es-mx,pt-pt,es-es, it-it, nl-nl, de-at, nl-be, fr-be, en-ie, fi-fi, fr-lu, de-lu, el-gr, pl-pl, sv-se, da-dk, cs-cz",
  contentText: {
    key: "homepage.global_footer.events-by-venue.text"
  }
}]
}, {
  id: "copyright",
  titleText: {
    key: "homepage.global_footer.copyright.title"
  },
  contentText: {
    key: "homepage.global_footer.copyright.text"
  },
  contentTextData: {
    legalUrl: a.formatUrl("/legal/")
  },
  excludeLocale: ""
}];
return {
  columns: b
}
}), define("common-globalfooter-model", ["foobunny", "common-globalfooter-sampleminimal-data", "common-globalfooter-data", "i18n", "sh_global_registry"], function(a, b, c, d, e) {
  "use strict";
  var f = a.BaseModel.extend({
    defaults: function() {},
    initialize: function() {
      this.domainNameKeyPrefix = "homepage.global_footer.domain.", this.setFacebookId()
    },
    parseMenuData: function(a) {
      a && a.minimal ? this.parseMinimalFooter(b.minimal) : this.parseRegularFooter()
    },
    parseMinimalFooter: function(a) {
      var b = c,
        d = _.pluck(a, "id");
      d && b && b.columns && (b.columns = _.reject(b.columns, function(a) {
        return d.indexOf(a.id) === -1
      }), _.each(b.columns, function(b) {
        var c = _.findWhere(a, {
            id: b.id
          }),
          d = c.linkIds;
        d && b && b.links && (b.links = _.reject(b.links, function(a) {
          return d.indexOf(a.id) === -1
        }))
      })), this.parseRegularFooter(b)
    },
    parseRegularFooter: function(a) {
      var b = this,
        f = a || c,
        g = e.getDefaultLocale(),
        h = e.getLocale(),
        i = e.getCountryCode();
      if (_.each(f.columns, function(a, c) {
          return a.excludeLocale && a.excludeLocale.indexOf(g) > -1 ? void delete f.columns[c] : (b.seti18nProps(a), a.links = _.filter(a.links, function(a) {
            return !(a.excludeLocale && a.excludeLocale.indexOf(g) > -1 || (b.seti18nProps(a), "object" == typeof a.href && (a.href = a.href[g]), 0))
          }), void(a.links = _.sortBy(a.links, "contentText")))
        }), 0 === f.columns[0].links.length && (f.hideSocial = !0), f) {
        var j = _.findWhere(f.columns, {
          id: "copyright"
        });
        j && (f.copyright = j), f.currentLocale = h, f.currentDomain = i.toUpperCase(), f.currentDomainName = d.get(this.domainNameKeyPrefix + f.currentDomain)
      }
      this.set(f)
    },
    seti18nProps: function(a) {
      var b = {};
      a && (b = a.contentTextData || b, a.contentText = a.contentText && a.contentText.key && d.get(a.contentText.key, b), a.titleText = a.titleText && a.titleText.key ? d.get(a.titleText.key) : a.contentText)
    },
    setFacebookId: function() {
      document.location.hostname.indexOf("localhost") >= -1 || document.location.hostname.indexOf("slcq") >= -1 ? (this.set("fbAppId", "109259765770403"), this.set("fbPageId", "680718755460615")) : (this.set("fbAppId", "983148971714807"), this.set("fbPageId", "1373818812680492"))
    }
  });
  return f
}), define("common-globalfooter-sampleminimal-data", function() {
  var a = [{
    id: "col1",
    linkIds: ["header-about-us", "header-contact-us"]
  }, {
    id: "col2",
    linkIds: ["header-gift-card", "header-lms-services"]
  }];
  return {
    minimal: a
  }
}), define("common-globalfooter-view", ["foobunny", "application_helper", "common-globalfooter-model", "footer-list", "domain-selector", "url-parser", "urlUtil", "sh_global_registry"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = a.BaseView.extend({
    template: "global_footer",
    events: {
      "click .footer-bottom a": "setFooterTracking",
      "click .footer-info-pages li a": "setFooterTracking",
      "click .footer-social a": "setSocialAppTracking",
      "click .footer-app-download a": "setSocialAppTracking",
      "click .dsl": "rollupSelector",
      "click #header-contact-us": "redirectContactUs"
    },
    initialize: function(a) {
      this.model = new c, this.model.parseMenuData(a), this.siteId = h.getSiteId(), this.featureName = "gs.features." + this.siteId + ".common.hideSIM", this.hideSIM = h.getFeatureValue(this.featureName, "boolean"), this.hideAppDownloadLink = h.getStoreFeatureByName("homepage.bottom.hideAppDownloadLink").featureValue, this.hideSIM || this.initializeSIM()
    },
    beforeRender: function() {
      var a = $("#global-content .hamburger .header-more"),
        b = $("#global-content .footer-items");
      a.length > 0 && a.css("display", "none"), b.length > 0 && b.css("display", "none")
    },
    afterRender: function() {
      var a = this.model.get("columns"),
        b = _.findWhere(a, {
          id: "col1"
        }),
        c = _.findWhere(a, {
          id: "col2"
        }),
        e = new d({
          element: ".col1",
          modelData: b
        }),
        f = new d({
          element: ".col2",
          modelData: c
        });
      e.render(), f.render(), !this.hideSIM && window.FB && FB.XFBML && FB.XFBML.parse && _.isFunction(FB.XFBML.parse) && FB.XFBML.parse()
    },
    sendRedirect: function(a) {
      setTimeout(function() {
        f.redirect(a)
      }, 500)
    },
    rollupSelector: function() {
      new e({
        element: "#dom-sel-container"
      }).render()
    },
    setFooterTracking: function(a) {
      a.preventDefault(), a.stopPropagation();
      var b = $(a.currentTarget),
        c = b.attr("href");
      this.applyTracking(b), this.sendRedirect(c)
    },
    redirectContactUs: function(a) {
      a.preventDefault(), a.stopPropagation(), "fr-ca" === SH.locale && g.redirect(g.formatUrl("/contact-us/"), 0, !1)
    },
    setSocialAppTracking: function(a) {
      var b = $(a.currentTarget),
        c = b.attr("data-href");
      this.applyTracking(b), window.open(c)
    },
    applyTracking: function(a) {
      var c, d, e;
      d = "fb" !== a ? a.attr("title") || a.attr("data-title") : "Messenger", e = "UE: Navigation Footer", c = {
        pageType: SH.OMN.pageType,
        appInteraction: e + ": " + d,
        appInteractionType: e,
        appInteractionPage: SH.OMN.pageType,
        siteSections: SH.OMN.siteSections
      }, b.track(c, null, !1)
    },
    context: function() {
      return {
        hideAppDownloadLink: this.hideAppDownloadLink
      }
    },
    initializeSIM: function() {
      var a, b, c, d, e, f = this.model.get("fbAppId"),
        g = this;
      window.fbAsyncInit = function() {
          FB.init({
            appId: f,
            xfbml: !0,
            version: "v2.6"
          }), FB.Event.subscribe("send_to_messenger", function(a) {
            a && a.event && "clicked" === a.event && this.applyTracking("fb")
          }.bind(g))
        }, a = SH.locale, b = a.substr(0, 2), c = a.substr(3, 5), d = b.concat("_", c.toUpperCase()), e = "//connect.facebook.net/en_US/sdk.js", "es-mx" === a && (d = "es_LA"), "de-at" !== a && "de-lu" !== a || (d = "de_DE"), "fr-be" !== a && "fr-lu" !== a || (d = "fr_FR"), "en-ie" === a && (d = "en_US"), "nl-be" === a && (d = "nl_NL"), a && (e = e.replace("en_US", d)),
        function(a, b, c) {
          var d, f = a.getElementsByTagName(b)[0];
          a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = e, f.parentNode.insertBefore(d, f))
        }(document, "script", "facebook-jssdk")
    }
  });
  return i
}), define("footer-list", ["component", "footer-list-view"], function(a, b) {
  "use strict";
  var c = a.extend({
    name: "footer-list",
    init: function() {
      var a = this;
      a.view = new b({
        el: a.options.element,
        modelData: a.options.modelData
      })
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose()
    }
  });
  return c
}), define("footer-list-model", ["foobunny"], function(a) {
  "use strict";
  var b = a.BaseModel.extend({
    defaults: function() {},
    initialize: function() {}
  });
  return b
}), define("footer-list-view", ["foobunny"], function(a) {
  "use strict";
  var b = a.BaseView.extend({
    template: "footer-list",
    initialize: function(a) {
      this.el = a.el, this.model = a.modelData
    },
    context: function() {},
    afterRender: function() {}
  });
  return b
}), define("search-datepicker-component", ["component", "i18n", "search-datepicker-view", "search-datepicker-i18n-props"], function(a, b, c, d) {
  "use strict";
  var e = a.extend({
    name: "Datepicker",
    init: function() {
      var a = this,
        e = "pageName",
        f = a.options;
      b.merge(d), f.pageName ? e = f.pageName : SH.OMN && SH.OMN.pageName && (e = SH.OMN.pageName), a.view = new c({
        el: f.element ? f.element : "#date-filter-container",
        pageName: e,
        headingText: f.headingText,
        calendarOptions: f.calendarOptions,
        defaultValues: f.defaultValues || {},
        updateBrowseCache: f.updateBrowseCache || !1,
        isSubComponent: f.isSubComponent || !1,
        disableSessionCache: f.disableSessionCache || f.isSubComponent || !1,
        disableDateUpdatePublish: f.disableDateUpdatePublish || f.isSubComponent || !1
      })
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose()
    }
  });
  return e
}), define("calendar-helper", ["foobunny", "moment", "i18n"], function(a, b, c) {
  var d = function() {
    function d(a) {
      var b;
      return a && (b = a.indexOf("T"), b > 0 && (a = a.slice(0, b) + "T00:00:00")), a
    }

    function e(a) {
      var b;
      return a && (b = a.indexOf("T"), b > 0 && (a = a.slice(0, b) + "T00:00")), a
    }

    function f(a, e) {
      return a && (e || (e = c.get("search.datepicker.locale.default.date.display")), a = d(a), a = b(a).format(e)), a
    }

    function g(c) {
      var d;
      return c && (d = a.utilsDate.getDate(b(c, "YYYY-MM-DD").toISOString()), d.setHours(0), d.setMinutes(0, 0, 0)), d
    }

    function h(a) {
      var b;
      return a && (a.eventStartDate && (b = a.eventStartDate.lastIndexOf("Z"), b > 0 && (a.eventStartDate = a.eventStartDate.slice(0, b - 3))), a.eventEndDate && (b = a.eventEndDate.lastIndexOf("Z"), b > 0 && (a.eventEndDate = a.eventEndDate.slice(0, b - 3))), "string" == typeof a && (b = a.lastIndexOf("Z"), b > 0 && (a = a.slice(0, b - 3)))), a
    }
    return {
      resetHoursOnDate: d,
      formatISODateToLocaleDatePattern: f,
      parseDateStringToObject: g,
      cleanDateString: h,
      resetHoursOnDateWithoutSecond: e
    }
  }();
  return d
}), define("jquery-ui-custom", [], function() {
  function a(a, c) {
    var d, e, f, g = a.nodeName.toLowerCase();
    return "area" === g ? (d = a.parentNode, e = d.name, !(!a.href || !e || "map" !== d.nodeName.toLowerCase()) && (f = $("img[usemap='#" + e + "']")[0], !!f && b(f))) : (/^(input|select|textarea|button|object)$/.test(g) ? !a.disabled : "a" === g ? a.href || c : c) && b(a)
  }

  function b(a) {
    return $.expr.filters.visible(a) && !$(a).parents().addBack().filter(function() {
      return "hidden" === $.css(this, "visibility")
    }).length
  }

  function c(a) {
    for (var b, c; a.length && a[0] !== document;) {
      if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
      a = a.parent()
    }
    return 0
  }

  function d() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, $.extend(this._defaults, this.regional[""]), this.regional.en = $.extend(!0, {}, this.regional[""]), this.regional["en-US"] = $.extend(!0, {}, this.regional.en), this.dpDiv = e($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function e(a) {
    var b = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return a.delegate(b, "mouseout", function() {
      $(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && $(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && $(this).removeClass("ui-datepicker-next-hover")
    }).delegate(b, "mouseover", f)
  }

  function f() {
    $.datepicker._isDisabledDatepicker(k.inline ? k.dpDiv.parent()[0] : k.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && $(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && $(this).addClass("ui-datepicker-next-hover"))
  }

  function g(a, b) {
    $.extend(a, b);
    for (var c in b) null == b[c] && (a[c] = b[c]);
    return a
  }
  $.ui = $.ui || {}, $.extend($.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), $.fn.extend({
    scrollParent: function(a) {
      var b = this.css("position"),
        c = "absolute" === b,
        d = a ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        e = this.parents().filter(function() {
          var a = $(this);
          return (!c || "static" !== a.css("position")) && d.test(a.css("overflow") + a.css("overflow-y") + a.css("overflow-x"))
        }).eq(0);
      return "fixed" !== b && e.length ? e : $(this[0].ownerDocument || document)
    },
    uniqueId: function() {
      var a = 0;
      return function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++a)
        })
      }
    }(),
    removeUniqueId: function() {
      return this.each(function() {
        /^ui-id-\d+$/.test(this.id) && $(this).removeAttr("id")
      })
    }
  }), $.extend($.expr[":"], {
    data: $.expr.createPseudo ? $.expr.createPseudo(function(a) {
      return function(b) {
        return !!$.data(b, a)
      }
    }) : function(a, b, c) {
      return !!$.data(a, c[3])
    },
    focusable: function(b) {
      return a(b, !isNaN($.attr(b, "tabindex")))
    },
    tabbable: function(b) {
      var c = $.attr(b, "tabindex"),
        d = isNaN(c);
      return (d || c >= 0) && a(b, !d)
    }
  }), $("<a>").outerWidth(1).jquery || $.each(["Width", "Height"], function(a, b) {
    function c(a, b, c, e) {
      return $.each(d, function() {
        b -= parseFloat($.css(a, "padding" + this)) || 0, c && (b -= parseFloat($.css(a, "border" + this + "Width")) || 0), e && (b -= parseFloat($.css(a, "margin" + this)) || 0)
      }), b
    }
    var d = "Width" === b ? ["Left", "Right"] : ["Top", "Bottom"],
      e = b.toLowerCase(),
      f = {
        innerWidth: $.fn.innerWidth,
        innerHeight: $.fn.innerHeight,
        outerWidth: $.fn.outerWidth,
        outerHeight: $.fn.outerHeight
      };
    $.fn["inner" + b] = function(a) {
      return void 0 === a ? f["inner" + b].call(this) : this.each(function() {
        $(this).css(e, c(this, a) + "px")
      })
    }, $.fn["outer" + b] = function(a, d) {
      return "number" != typeof a ? f["outer" + b].call(this, a) : this.each(function() {
        $(this).css(e, c(this, a, !0, d) + "px")
      })
    }
  }), $.fn.addBack || ($.fn.addBack = function(a) {
    return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
  }), $("<a>").data("a-b", "a").removeData("a-b").data("a-b") && ($.fn.removeData = function(a) {
    return function(b) {
      return arguments.length ? a.call(this, $.camelCase(b)) : a.call(this)
    }
  }($.fn.removeData)), $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), $.fn.extend({
    focus: function(a) {
      return function(b, c) {
        return "number" == typeof b ? this.each(function() {
          var a = this;
          setTimeout(function() {
            $(a).focus(), c && c.call(a)
          }, b)
        }) : a.apply(this, arguments)
      }
    }($.fn.focus),
    disableSelection: function() {
      var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function() {
        return this.bind(a + ".ui-disableSelection", function(a) {
          a.preventDefault()
        })
      }
    }(),
    enableSelection: function() {
      return this.unbind(".ui-disableSelection")
    },
    zIndex: function(a) {
      if (void 0 !== a) return this.css("zIndex", a);
      if (this.length)
        for (var b, c, d = $(this[0]); d.length && d[0] !== document;) {
          if (b = d.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(d.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
          d = d.parent()
        }
      return 0
    }
  }), $.ui.plugin = {
    add: function(a, b, c) {
      var d, e = $.ui[a].prototype;
      for (d in c) e.plugins[d] = e.plugins[d] || [], e.plugins[d].push([b, c[d]])
    },
    call: function(a, b, c, d) {
      var e, f = a.plugins[b];
      if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
        for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
    }
  };
  var h = 0,
    i = Array.prototype.slice;
  $.cleanData = function(a) {
    return function(b) {
      var c, d, e;
      for (e = 0; null != (d = b[e]); e++) try {
        c = $._data(d, "events"), c && c.remove && $(d).triggerHandler("remove")
      } catch (f) {}
      a(b)
    }
  }($.cleanData), $.widget = function(a, b, c) {
    var d, e, f, g, h = {},
      i = a.split(".")[0];
    return a = a.split(".")[1], d = i + "-" + a, c || (c = b, b = $.Widget), $.expr[":"][d.toLowerCase()] = function(a) {
      return !!$.data(a, d)
    }, $[i] = $[i] || {}, e = $[i][a], f = $[i][a] = function(a, b) {
      return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new f(a, b)
    }, $.extend(f, e, {
      version: c.version,
      _proto: $.extend({}, c),
      _childConstructors: []
    }), g = new b, g.options = $.widget.extend({}, g.options), $.each(c, function(a, c) {
      return $.isFunction(c) ? void(h[a] = function() {
        var d = function() {
            return b.prototype[a].apply(this, arguments)
          },
          e = function(c) {
            return b.prototype[a].apply(this, c)
          };
        return function() {
          var a, b = this._super,
            f = this._superApply;
          return this._super = d, this._superApply = e, a = c.apply(this, arguments), this._super = b, this._superApply = f, a
        }
      }()) : void(h[a] = c)
    }), f.prototype = $.widget.extend(g, {
      widgetEventPrefix: e ? g.widgetEventPrefix || a : a
    }, h, {
      constructor: f,
      namespace: i,
      widgetName: a,
      widgetFullName: d
    }), e ? ($.each(e._childConstructors, function(a, b) {
      var c = b.prototype;
      $.widget(c.namespace + "." + c.widgetName, f, b._proto)
    }), delete e._childConstructors) : b._childConstructors.push(f), $.widget.bridge(a, f), f
  }, $.widget.extend = function(a) {
    for (var b, c, d = i.call(arguments, 1), e = 0, f = d.length; e < f; e++)
      for (b in d[e]) c = d[e][b], d[e].hasOwnProperty(b) && void 0 !== c && ($.isPlainObject(c) ? a[b] = $.isPlainObject(a[b]) ? $.widget.extend({}, a[b], c) : $.widget.extend({}, c) : a[b] = c);
    return a
  }, $.widget.bridge = function(a, b) {
    var c = b.prototype.widgetFullName || a;
    $.fn[a] = function(d) {
      var e = "string" == typeof d,
        f = i.call(arguments, 1),
        g = this;
      return e ? this.each(function() {
        var b, e = $.data(this, c);
        return "instance" === d ? (g = e, !1) : e ? $.isFunction(e[d]) && "_" !== d.charAt(0) ? (b = e[d].apply(e, f), b !== e && void 0 !== b ? (g = b && b.jquery ? g.pushStack(b.get()) : b, !1) : void 0) : $.error("no such method '" + d + "' for " + a + " widget instance") : $.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + d + "'")
      }) : (f.length && (d = $.widget.extend.apply(null, [d].concat(f))), this.each(function() {
        var a = $.data(this, c);
        a ? (a.option(d || {}), a._init && a._init()) : $.data(this, c, new b(d, this))
      })), g
    }
  }, $.Widget = function() {}, $.Widget._childConstructors = [], $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function(a, b) {
      b = $(b || this.defaultElement || this)[0], this.element = $(b), this.uuid = h++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = $(), this.hoverable = $(), this.focusable = $(), b !== this && ($.data(b, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function(a) {
          a.target === b && this.destroy()
        }
      }), this.document = $(b.style ? b.ownerDocument : b.document || b), this.window = $(this.document[0].defaultView || this.document[0].parentWindow)), this.options = $.widget.extend({}, this.options, this._getCreateOptions(), a), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: $.noop,
    _getCreateEventData: $.noop,
    _create: $.noop,
    _init: $.noop,
    destroy: function() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData($.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: $.noop,
    widget: function() {
      return this.element
    },
    option: function(a, b) {
      var c, d, e, f = a;
      if (0 === arguments.length) return $.widget.extend({}, this.options);
      if ("string" == typeof a)
        if (f = {}, c = a.split("."), a = c.shift(), c.length) {
          for (d = f[a] = $.widget.extend({}, this.options[a]), e = 0; e < c.length - 1; e++) d[c[e]] = d[c[e]] || {}, d = d[c[e]];
          if (a = c.pop(), 1 === arguments.length) return void 0 === d[a] ? null : d[a];
          d[a] = b
        } else {
          if (1 === arguments.length) return void 0 === this.options[a] ? null : this.options[a];
          f[a] = b
        }
      return this._setOptions(f), this
    },
    _setOptions: function(a) {
      var b;
      for (b in a) this._setOption(b, a[b]);
      return this
    },
    _setOption: function(a, b) {
      return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
    },
    enable: function() {
      return this._setOptions({
        disabled: !1
      })
    },
    disable: function() {
      return this._setOptions({
        disabled: !0
      })
    },
    _on: function(a, b, c) {
      var d, e = this;
      "boolean" != typeof a && (c = b, b = a, a = !1), c ? (b = d = $(b), this.bindings = this.bindings.add(b)) : (c = b, b = this.element, d = this.widget()), $.each(c, function(c, f) {
        function g() {
          if (a || e.options.disabled !== !0 && !$(this).hasClass("ui-state-disabled")) return ("string" == typeof f ? e[f] : f).apply(e, arguments)
        }
        "string" != typeof f && (g.guid = f.guid = f.guid || g.guid || $.guid++);
        var h = c.match(/^([\w:-]*)\s*(.*)$/),
          i = h[1] + e.eventNamespace,
          j = h[2];
        j ? d.delegate(j, i, g) : b.bind(i, g)
      })
    },
    _off: function(a, b) {
      b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b), this.bindings = $(this.bindings.not(a).get()), this.focusable = $(this.focusable.not(a).get()), this.hoverable = $(this.hoverable.not(a).get())
    },
    _delay: function(a, b) {
      function c() {
        return ("string" == typeof a ? d[a] : a).apply(d, arguments)
      }
      var d = this;
      return setTimeout(c, b || 0)
    },
    _hoverable: function(a) {
      this.hoverable = this.hoverable.add(a), this._on(a, {
        mouseenter: function(a) {
          $(a.currentTarget).addClass("ui-state-hover")
        },
        mouseleave: function(a) {
          $(a.currentTarget).removeClass("ui-state-hover")
        }
      })
    },
    _focusable: function(a) {
      this.focusable = this.focusable.add(a), this._on(a, {
        focusin: function(a) {
          $(a.currentTarget).addClass("ui-state-focus")
        },
        focusout: function(a) {
          $(a.currentTarget).removeClass("ui-state-focus")
        }
      })
    },
    _trigger: function(a, b, c) {
      var d, e, f = this.options[a];
      if (c = c || {}, b = $.Event(b), b.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(), b.target = this.element[0], e = b.originalEvent)
        for (d in e) d in b || (b[d] = e[d]);
      return this.element.trigger(b, c), !($.isFunction(f) && f.apply(this.element[0], [b].concat(c)) === !1 || b.isDefaultPrevented())
    }
  }, $.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function(a, b) {
    $.Widget.prototype["_" + a] = function(c, d, e) {
      "string" == typeof d && (d = {
        effect: d
      });
      var f, g = d ? d === !0 || "number" == typeof d ? b : d.effect || b : a;
      d = d || {}, "number" == typeof d && (d = {
        duration: d
      }), f = !$.isEmptyObject(d), d.complete = e, d.delay && c.delay(d.delay), f && $.effects && $.effects.effect[g] ? c[a](d) : g !== a && c[g] ? c[g](d.duration, d.easing, e) : c.queue(function(b) {
        $(this)[a](), e && e.call(c[0]), b()
      })
    }
  });
  var j = ($.widget, !1);
  $(document).mouseup(function() {
    j = !1
  });
  $.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function() {
      var a = this;
      this.element.bind("mousedown." + this.widgetName, function(b) {
        return a._mouseDown(b)
      }).bind("click." + this.widgetName, function(b) {
        if (!0 === $.data(b.target, a.widgetName + ".preventClickEvent")) return $.removeData(b.target, a.widgetName + ".preventClickEvent"), b.stopImmediatePropagation(), !1
      }), this.started = !1
    },
    _mouseDestroy: function() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(a) {
      if (!j) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(a), this._mouseDownEvent = a;
        var b = this,
          c = 1 === a.which,
          d = !("string" != typeof this.options.cancel || !a.target.nodeName) && $(a.target).closest(this.options.cancel).length;
        return !(c && !d && this._mouseCapture(a)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
          b.mouseDelayMet = !0
        }, this.options.delay)), this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(a) !== !1, !this._mouseStarted) ? (a.preventDefault(), !0) : (!0 === $.data(a.target, this.widgetName + ".preventClickEvent") && $.removeData(a.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
          return b._mouseMove(a)
        }, this._mouseUpDelegate = function(a) {
          return b._mouseUp(a)
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), a.preventDefault(), j = !0, !0))
      }
    },
    _mouseMove: function(a) {
      if (this._mouseMoved) {
        if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !a.button) return this._mouseUp(a);
        if (!a.which) return this._mouseUp(a)
      }
      return (a.which || a.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(a), a.preventDefault()) : (this._mouseDistanceMet(a) && this._mouseDelayMet(a) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== !1, this._mouseStarted ? this._mouseDrag(a) : this._mouseUp(a)), !this._mouseStarted)
    },
    _mouseUp: function(a) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, a.target === this._mouseDownEvent.target && $.data(a.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(a)), j = !1, !1
    },
    _mouseDistanceMet: function(a) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
      return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
      return !0
    }
  });
  ! function() {
    function a(a, b, c) {
      return [parseFloat(a[0]) * (m.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (m.test(a[1]) ? c / 100 : 1)]
    }

    function b(a, b) {
      return parseInt($.css(a, b), 10) || 0
    }

    function c(a) {
      var b = a[0];
      return 9 === b.nodeType ? {
        width: a.width(),
        height: a.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : $.isWindow(b) ? {
        width: a.width(),
        height: a.height(),
        offset: {
          top: a.scrollTop(),
          left: a.scrollLeft()
        }
      } : b.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: b.pageY,
          left: b.pageX
        }
      } : {
        width: a.outerWidth(),
        height: a.outerHeight(),
        offset: a.offset()
      }
    }
    $.ui = $.ui || {};
    var d, e, f = Math.max,
      g = Math.abs,
      h = Math.round,
      i = /left|center|right/,
      j = /top|center|bottom/,
      k = /[\+\-]\d+(\.[\d]+)?%?/,
      l = /^\w+/,
      m = /%$/,
      n = $.fn.position;
    $.position = {
        scrollbarWidth: function() {
          if (void 0 !== d) return d;
          var a, b, c = $("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            e = c.children()[0];
          return $("body").append(c), a = e.offsetWidth, c.css("overflow", "scroll"), b = e.offsetWidth, a === b && (b = c[0].clientWidth), c.remove(), d = a - b
        },
        getScrollInfo: function(a) {
          var b = a.isWindow || a.isDocument ? "" : a.element.css("overflow-x"),
            c = a.isWindow || a.isDocument ? "" : a.element.css("overflow-y"),
            d = "scroll" === b || "auto" === b && a.width < a.element[0].scrollWidth,
            e = "scroll" === c || "auto" === c && a.height < a.element[0].scrollHeight;
          return {
            width: e ? $.position.scrollbarWidth() : 0,
            height: d ? $.position.scrollbarWidth() : 0
          }
        },
        getWithinInfo: function(a) {
          var b = $(a || window),
            c = $.isWindow(b[0]),
            d = !!b[0] && 9 === b[0].nodeType;
          return {
            element: b,
            isWindow: c,
            isDocument: d,
            offset: b.offset() || {
              left: 0,
              top: 0
            },
            scrollLeft: b.scrollLeft(),
            scrollTop: b.scrollTop(),
            width: c || d ? b.width() : b.outerWidth(),
            height: c || d ? b.height() : b.outerHeight()
          }
        }
      }, $.fn.position = function(d) {
        if (!d || !d.of) return n.apply(this, arguments);
        d = $.extend({}, d);
        var m, o, p, q, r, s, t = $(d.of),
          u = $.position.getWithinInfo(d.within),
          v = $.position.getScrollInfo(u),
          w = (d.collision || "flip").split(" "),
          x = {};
        return s = c(t), t[0].preventDefault && (d.at = "left top"), o = s.width, p = s.height, q = s.offset, r = $.extend({}, q), $.each(["my", "at"], function() {
          var a, b, c = (d[this] || "").split(" ");
          1 === c.length && (c = i.test(c[0]) ? c.concat(["center"]) : j.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = i.test(c[0]) ? c[0] : "center", c[1] = j.test(c[1]) ? c[1] : "center", a = k.exec(c[0]), b = k.exec(c[1]), x[this] = [a ? a[0] : 0, b ? b[0] : 0], d[this] = [l.exec(c[0])[0], l.exec(c[1])[0]]
        }), 1 === w.length && (w[1] = w[0]), "right" === d.at[0] ? r.left += o : "center" === d.at[0] && (r.left += o / 2), "bottom" === d.at[1] ? r.top += p : "center" === d.at[1] && (r.top += p / 2), m = a(x.at, o, p), r.left += m[0], r.top += m[1], this.each(function() {
          var c, i, j = $(this),
            k = j.outerWidth(),
            l = j.outerHeight(),
            n = b(this, "marginLeft"),
            s = b(this, "marginTop"),
            y = k + n + b(this, "marginRight") + v.width,
            z = l + s + b(this, "marginBottom") + v.height,
            A = $.extend({}, r),
            B = a(x.my, j.outerWidth(), j.outerHeight());
          "right" === d.my[0] ? A.left -= k : "center" === d.my[0] && (A.left -= k / 2), "bottom" === d.my[1] ? A.top -= l : "center" === d.my[1] && (A.top -= l / 2), A.left += B[0], A.top += B[1], e || (A.left = h(A.left), A.top = h(A.top)), c = {
            marginLeft: n,
            marginTop: s
          }, $.each(["left", "top"], function(a, b) {
            $.ui.position[w[a]] && $.ui.position[w[a]][b](A, {
              targetWidth: o,
              targetHeight: p,
              elemWidth: k,
              elemHeight: l,
              collisionPosition: c,
              collisionWidth: y,
              collisionHeight: z,
              offset: [m[0] + B[0], m[1] + B[1]],
              my: d.my,
              at: d.at,
              within: u,
              elem: j
            })
          }), d.using && (i = function(a) {
            var b = q.left - A.left,
              c = b + o - k,
              e = q.top - A.top,
              h = e + p - l,
              i = {
                target: {
                  element: t,
                  left: q.left,
                  top: q.top,
                  width: o,
                  height: p
                },
                element: {
                  element: j,
                  left: A.left,
                  top: A.top,
                  width: k,
                  height: l
                },
                horizontal: c < 0 ? "left" : b > 0 ? "right" : "center",
                vertical: h < 0 ? "top" : e > 0 ? "bottom" : "middle"
              };
            o < k && g(b + c) < o && (i.horizontal = "center"), p < l && g(e + h) < p && (i.vertical = "middle"), f(g(b), g(c)) > f(g(e), g(h)) ? i.important = "horizontal" : i.important = "vertical", d.using.call(this, a, i)
          }), j.offset($.extend(A, {
            using: i
          }))
        })
      }, $.ui.position = {
        fit: {
          left: function(a, b) {
            var c, d = b.within,
              e = d.isWindow ? d.scrollLeft : d.offset.left,
              g = d.width,
              h = a.left - b.collisionPosition.marginLeft,
              i = e - h,
              j = h + b.collisionWidth - g - e;
            b.collisionWidth > g ? i > 0 && j <= 0 ? (c = a.left + i + b.collisionWidth - g - e, a.left += i - c) : j > 0 && i <= 0 ? a.left = e : i > j ? a.left = e + g - b.collisionWidth : a.left = e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = f(a.left - h, a.left)
          },
          top: function(a, b) {
            var c, d = b.within,
              e = d.isWindow ? d.scrollTop : d.offset.top,
              g = b.within.height,
              h = a.top - b.collisionPosition.marginTop,
              i = e - h,
              j = h + b.collisionHeight - g - e;
            b.collisionHeight > g ? i > 0 && j <= 0 ? (c = a.top + i + b.collisionHeight - g - e, a.top += i - c) : j > 0 && i <= 0 ? a.top = e : i > j ? a.top = e + g - b.collisionHeight : a.top = e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = f(a.top - h, a.top)
          }
        },
        flip: {
          left: function(a, b) {
            var c, d, e = b.within,
              f = e.offset.left + e.scrollLeft,
              h = e.width,
              i = e.isWindow ? e.scrollLeft : e.offset.left,
              j = a.left - b.collisionPosition.marginLeft,
              k = j - i,
              l = j + b.collisionWidth - h - i,
              m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
              n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
              o = -2 * b.offset[0];
            k < 0 ? (c = a.left + m + n + o + b.collisionWidth - h - f, (c < 0 || c < g(k)) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || g(d) < l) && (a.left += m + n + o))
          },
          top: function(a, b) {
            var c, d, e = b.within,
              f = e.offset.top + e.scrollTop,
              h = e.height,
              i = e.isWindow ? e.scrollTop : e.offset.top,
              j = a.top - b.collisionPosition.marginTop,
              k = j - i,
              l = j + b.collisionHeight - h - i,
              m = "top" === b.my[1],
              n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
              o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
              p = -2 * b.offset[1];
            k < 0 ? (d = a.top + n + o + p + b.collisionHeight - h - f, (d < 0 || d < g(k)) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, (c > 0 || g(c) < l) && (a.top += n + o + p))
          }
        },
        flipfit: {
          left: function() {
            $.ui.position.flip.left.apply(this, arguments), $.ui.position.fit.left.apply(this, arguments)
          },
          top: function() {
            $.ui.position.flip.top.apply(this, arguments), $.ui.position.fit.top.apply(this, arguments)
          }
        }
      },
      function() {
        var a, b, c, d, f, g = document.getElementsByTagName("body")[0],
          h = document.createElement("div");
        a = document.createElement(g ? "div" : "body"), c = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none"
        }, g && $.extend(c, {
          position: "absolute",
          left: "-1000px",
          top: "-1000px"
        });
        for (f in c) a.style[f] = c[f];
        a.appendChild(h), b = g || document.documentElement, b.insertBefore(a, b.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;",
          d = $(h).offset().left, e = d > 10 && d < 11, a.innerHTML = "", b.removeChild(a)
      }()
  }();
  $.ui.position;
  $.widget("ui.draggable", $.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function(a, b) {
      this._super(a, b), "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
    },
    _mouseCapture: function(a) {
      var b = this.options;
      return this._blurActiveElement(a), !(this.helper || b.disabled || $(a.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(a), !!this.handle && (this._blockFrames(b.iframeFix === !0 ? "iframe" : b.iframeFix), !0))
    },
    _blockFrames: function(a) {
      this.iframeBlocks = this.document.find(a).map(function() {
        var a = $(this);
        return $("<div>").css("position", "absolute").appendTo(a.parent()).outerWidth(a.outerWidth()).outerHeight(a.outerHeight()).offset(a.offset())[0]
      })
    },
    _unblockFrames: function() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _blurActiveElement: function(a) {
      var b = this.document[0];
      if (this.handleElement.is(a.target)) try {
        b.activeElement && "body" !== b.activeElement.nodeName.toLowerCase() && $(b.activeElement).blur()
      } catch (c) {}
    },
    _mouseStart: function(a) {
      var b = this.options;
      return this.helper = this._createHelper(a), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), $.ui.ddmanager && ($.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
        return "fixed" === $(this).css("position")
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(a), this.originalPosition = this.position = this._generatePosition(a, !1), this.originalPageX = a.pageX, this.originalPageY = a.pageY, b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt), this._setContainment(), this._trigger("start", a) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), $.ui.ddmanager && !b.dropBehaviour && $.ui.ddmanager.prepareOffsets(this, a), this._normalizeRightBottom(), this._mouseDrag(a, !0), $.ui.ddmanager && $.ui.ddmanager.dragStart(this, a), !0)
    },
    _refreshOffsets: function(a) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: a.pageX - this.offset.left,
        top: a.pageY - this.offset.top
      }
    },
    _mouseDrag: function(a, b) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(a, !0), this.positionAbs = this._convertPositionTo("absolute"), !b) {
        var c = this._uiHash();
        if (this._trigger("drag", a, c) === !1) return this._mouseUp({}), !1;
        this.position = c.position
      }
      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", $.ui.ddmanager && $.ui.ddmanager.drag(this, a), !1
    },
    _mouseStop: function(a) {
      var b = this,
        c = !1;
      return $.ui.ddmanager && !this.options.dropBehaviour && (c = $.ui.ddmanager.drop(this, a)), this.dropped && (c = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !c || "valid" === this.options.revert && c || this.options.revert === !0 || $.isFunction(this.options.revert) && this.options.revert.call(this.element, c) ? $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
        b._trigger("stop", a) !== !1 && b._clear()
      }) : this._trigger("stop", a) !== !1 && this._clear(), !1
    },
    _mouseUp: function(a) {
      return this._unblockFrames(), $.ui.ddmanager && $.ui.ddmanager.dragStop(this, a), this.handleElement.is(a.target) && this.element.focus(), $.ui.mouse.prototype._mouseUp.call(this, a)
    },
    cancel: function() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },
    _getHandle: function(a) {
      return !this.options.handle || !!$(a.target).closest(this.element.find(this.options.handle)).length
    },
    _setHandleClassName: function() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
    },
    _removeHandleClassName: function() {
      this.handleElement.removeClass("ui-draggable-handle")
    },
    _createHelper: function(a) {
      var b = this.options,
        c = $.isFunction(b.helper),
        d = c ? $(b.helper.apply(this.element[0], [a])) : "clone" === b.helper ? this.element.clone().removeAttr("id") : this.element;
      return d.parents("body").length || d.appendTo("parent" === b.appendTo ? this.element[0].parentNode : b.appendTo), c && d[0] === this.element[0] && this._setPositionRelative(), d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
    },
    _setPositionRelative: function() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },
    _adjustOffsetFromHelper: function(a) {
      "string" == typeof a && (a = a.split(" ")), $.isArray(a) && (a = {
        left: +a[0],
        top: +a[1] || 0
      }), "left" in a && (this.offset.click.left = a.left + this.margins.left), "right" in a && (this.offset.click.left = this.helperProportions.width - a.right + this.margins.left), "top" in a && (this.offset.click.top = a.top + this.margins.top), "bottom" in a && (this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top)
    },
    _isRootNode: function(a) {
      return /(html|body)/i.test(a.tagName) || a === this.document[0]
    },
    _getParentOffset: function() {
      var a = this.offsetParent.offset(),
        b = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== b && $.contains(this.scrollParent[0], this.offsetParent[0]) && (a.left += this.scrollParent.scrollLeft(), a.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (a = {
        top: 0,
        left: 0
      }), {
        top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      }
    },
    _getRelativeOffset: function() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };
      var a = this.element.position(),
        b = this._isRootNode(this.scrollParent[0]);
      return {
        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (b ? 0 : this.scrollParent.scrollTop()),
        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (b ? 0 : this.scrollParent.scrollLeft())
      }
    },
    _cacheMargins: function() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      }
    },
    _cacheHelperProportions: function() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      }
    },
    _setContainment: function() {
      var a, b, c, d = this.options,
        e = this.document[0];
      return this.relativeContainer = null, d.containment ? "window" === d.containment ? void(this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || e.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === d.containment ? void(this.containment = [0, 0, $(e).width() - this.helperProportions.width - this.margins.left, ($(e).height() || e.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : d.containment.constructor === Array ? void(this.containment = d.containment) : ("parent" === d.containment && (d.containment = this.helper[0].parentNode), b = $(d.containment), c = b[0], void(c && (a = /(scroll|auto)/.test(b.css("overflow")), this.containment = [(parseInt(b.css("borderLeftWidth"), 10) || 0) + (parseInt(b.css("paddingLeft"), 10) || 0), (parseInt(b.css("borderTopWidth"), 10) || 0) + (parseInt(b.css("paddingTop"), 10) || 0), (a ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b.css("borderRightWidth"), 10) || 0) - (parseInt(b.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (a ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b.css("borderBottomWidth"), 10) || 0) - (parseInt(b.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = b))) : void(this.containment = null)
    },
    _convertPositionTo: function(a, b) {
      b || (b = this.position);
      var c = "absolute" === a ? 1 : -1,
        d = this._isRootNode(this.scrollParent[0]);
      return {
        top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.offset.scroll.top : d ? 0 : this.offset.scroll.top) * c,
        left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.offset.scroll.left : d ? 0 : this.offset.scroll.left) * c
      }
    },
    _generatePosition: function(a, b) {
      var c, d, e, f, g = this.options,
        h = this._isRootNode(this.scrollParent[0]),
        i = a.pageX,
        j = a.pageY;
      return h && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), b && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
        top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
        left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
      }
    },
    _clear: function() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _normalizeRightBottom: function() {
      "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
    },
    _trigger: function(a, b, c) {
      return c = c || this._uiHash(), $.ui.plugin.call(this, a, [b, c, this], !0), /^(drag|start|stop)/.test(a) && (this.positionAbs = this._convertPositionTo("absolute"), c.offset = this.positionAbs), $.Widget.prototype._trigger.call(this, a, b, c)
    },
    plugins: {},
    _uiHash: function() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      }
    }
  }), $.ui.plugin.add("draggable", "connectToSortable", {
    start: function(a, b, c) {
      var d = $.extend({}, b, {
        item: c.element
      });
      c.sortables = [], $(c.options.connectToSortable).each(function() {
        var b = $(this).sortable("instance");
        b && !b.options.disabled && (c.sortables.push(b), b.refreshPositions(), b._trigger("activate", a, d))
      })
    },
    stop: function(a, b, c) {
      var d = $.extend({}, b, {
        item: c.element
      });
      c.cancelHelperRemoval = !1, $.each(c.sortables, function() {
        var b = this;
        b.isOver ? (b.isOver = 0, c.cancelHelperRemoval = !0, b.cancelHelperRemoval = !1, b._storedCSS = {
          position: b.placeholder.css("position"),
          top: b.placeholder.css("top"),
          left: b.placeholder.css("left")
        }, b._mouseStop(a), b.options.helper = b.options._helper) : (b.cancelHelperRemoval = !0, b._trigger("deactivate", a, d))
      })
    },
    drag: function(a, b, c) {
      $.each(c.sortables, function() {
        var d = !1,
          e = this;
        e.positionAbs = c.positionAbs, e.helperProportions = c.helperProportions, e.offset.click = c.offset.click, e._intersectsWith(e.containerCache) && (d = !0, $.each(c.sortables, function() {
          return this.positionAbs = c.positionAbs, this.helperProportions = c.helperProportions, this.offset.click = c.offset.click, this !== e && this._intersectsWith(this.containerCache) && $.contains(e.element[0], this.element[0]) && (d = !1), d
        })), d ? (e.isOver || (e.isOver = 1, c._parent = b.helper.parent(), e.currentItem = b.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function() {
          return b.helper[0]
        }, a.target = e.currentItem[0], e._mouseCapture(a, !0), e._mouseStart(a, !0, !0), e.offset.click.top = c.offset.click.top, e.offset.click.left = c.offset.click.left, e.offset.parent.left -= c.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= c.offset.parent.top - e.offset.parent.top, c._trigger("toSortable", a), c.dropped = e.element, $.each(c.sortables, function() {
          this.refreshPositions()
        }), c.currentItem = c.element, e.fromOutside = c), e.currentItem && (e._mouseDrag(a), b.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", a, e._uiHash(e)), e._mouseStop(a, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), b.helper.appendTo(c._parent), c._refreshOffsets(a), b.position = c._generatePosition(a, !0), c._trigger("fromSortable", a), c.dropped = !1, $.each(c.sortables, function() {
          this.refreshPositions()
        }))
      })
    }
  }), $.ui.plugin.add("draggable", "cursor", {
    start: function(a, b, c) {
      var d = $("body"),
        e = c.options;
      d.css("cursor") && (e._cursor = d.css("cursor")), d.css("cursor", e.cursor)
    },
    stop: function(a, b, c) {
      var d = c.options;
      d._cursor && $("body").css("cursor", d._cursor)
    }
  }), $.ui.plugin.add("draggable", "opacity", {
    start: function(a, b, c) {
      var d = $(b.helper),
        e = c.options;
      d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
    },
    stop: function(a, b, c) {
      var d = c.options;
      d._opacity && $(b.helper).css("opacity", d._opacity)
    }
  }), $.ui.plugin.add("draggable", "scroll", {
    start: function(a, b, c) {
      c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)), c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
    },
    drag: function(a, b, c) {
      var d = c.options,
        e = !1,
        f = c.scrollParentNotHidden[0],
        g = c.document[0];
      f !== g && "HTML" !== f.tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + f.offsetHeight - a.pageY < d.scrollSensitivity ? f.scrollTop = e = f.scrollTop + d.scrollSpeed : a.pageY - c.overflowOffset.top < d.scrollSensitivity && (f.scrollTop = e = f.scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + f.offsetWidth - a.pageX < d.scrollSensitivity ? f.scrollLeft = e = f.scrollLeft + d.scrollSpeed : a.pageX - c.overflowOffset.left < d.scrollSensitivity && (f.scrollLeft = e = f.scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (a.pageY - $(g).scrollTop() < d.scrollSensitivity ? e = $(g).scrollTop($(g).scrollTop() - d.scrollSpeed) : $(window).height() - (a.pageY - $(g).scrollTop()) < d.scrollSensitivity && (e = $(g).scrollTop($(g).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (a.pageX - $(g).scrollLeft() < d.scrollSensitivity ? e = $(g).scrollLeft($(g).scrollLeft() - d.scrollSpeed) : $(window).width() - (a.pageX - $(g).scrollLeft()) < d.scrollSensitivity && (e = $(g).scrollLeft($(g).scrollLeft() + d.scrollSpeed)))), e !== !1 && $.ui.ddmanager && !d.dropBehaviour && $.ui.ddmanager.prepareOffsets(c, a)
    }
  }), $.ui.plugin.add("draggable", "snap", {
    start: function(a, b, c) {
      var d = c.options;
      c.snapElements = [], $(d.snap.constructor !== String ? d.snap.items || ":data(ui-draggable)" : d.snap).each(function() {
        var a = $(this),
          b = a.offset();
        this !== c.element[0] && c.snapElements.push({
          item: this,
          width: a.outerWidth(),
          height: a.outerHeight(),
          top: b.top,
          left: b.left
        })
      })
    },
    drag: function(a, b, c) {
      var d, e, f, g, h, i, j, k, l, m, n = c.options,
        o = n.snapTolerance,
        p = b.offset.left,
        q = p + c.helperProportions.width,
        r = b.offset.top,
        s = r + c.helperProportions.height;
      for (l = c.snapElements.length - 1; l >= 0; l--) h = c.snapElements[l].left - c.margins.left, i = h + c.snapElements[l].width, j = c.snapElements[l].top - c.margins.top, k = j + c.snapElements[l].height, q < h - o || p > i + o || s < j - o || r > k + o || !$.contains(c.snapElements[l].item.ownerDocument, c.snapElements[l].item) ? (c.snapElements[l].snapping && c.options.snap.release && c.options.snap.release.call(c.element, a, $.extend(c._uiHash(), {
        snapItem: c.snapElements[l].item
      })), c.snapElements[l].snapping = !1) : ("inner" !== n.snapMode && (d = Math.abs(j - s) <= o, e = Math.abs(k - r) <= o, f = Math.abs(h - q) <= o, g = Math.abs(i - p) <= o, d && (b.position.top = c._convertPositionTo("relative", {
        top: j - c.helperProportions.height,
        left: 0
      }).top), e && (b.position.top = c._convertPositionTo("relative", {
        top: k,
        left: 0
      }).top), f && (b.position.left = c._convertPositionTo("relative", {
        top: 0,
        left: h - c.helperProportions.width
      }).left), g && (b.position.left = c._convertPositionTo("relative", {
        top: 0,
        left: i
      }).left)), m = d || e || f || g, "outer" !== n.snapMode && (d = Math.abs(j - r) <= o, e = Math.abs(k - s) <= o, f = Math.abs(h - p) <= o, g = Math.abs(i - q) <= o, d && (b.position.top = c._convertPositionTo("relative", {
        top: j,
        left: 0
      }).top), e && (b.position.top = c._convertPositionTo("relative", {
        top: k - c.helperProportions.height,
        left: 0
      }).top), f && (b.position.left = c._convertPositionTo("relative", {
        top: 0,
        left: h
      }).left), g && (b.position.left = c._convertPositionTo("relative", {
        top: 0,
        left: i - c.helperProportions.width
      }).left)), !c.snapElements[l].snapping && (d || e || f || g || m) && c.options.snap.snap && c.options.snap.snap.call(c.element, a, $.extend(c._uiHash(), {
        snapItem: c.snapElements[l].item
      })), c.snapElements[l].snapping = d || e || f || g || m)
    }
  }), $.ui.plugin.add("draggable", "stack", {
    start: function(a, b, c) {
      var d, e = c.options,
        f = $.makeArray($(e.stack)).sort(function(a, b) {
          return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0)
        });
      f.length && (d = parseInt($(f[0]).css("zIndex"), 10) || 0, $(f).each(function(a) {
        $(this).css("zIndex", d + a)
      }), this.css("zIndex", d + f.length))
    }
  }), $.ui.plugin.add("draggable", "zIndex", {
    start: function(a, b, c) {
      var d = $(b.helper),
        e = c.options;
      d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
    },
    stop: function(a, b, c) {
      var d = c.options;
      d._zIndex && $(b.helper).css("zIndex", d._zIndex)
    }
  });
  $.ui.draggable;
  $.widget("ui.droppable", {
    version: "1.11.4",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function() {
      var a, b = this.options,
        c = b.accept;
      this.isover = !1, this.isout = !0, this.accept = $.isFunction(c) ? c : function(a) {
        return a.is(c)
      }, this.proportions = function() {
        return arguments.length ? void(a = arguments[0]) : a ? a : a = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        }
      }, this._addToManager(b.scope), b.addClasses && this.element.addClass("ui-droppable")
    },
    _addToManager: function(a) {
      $.ui.ddmanager.droppables[a] = $.ui.ddmanager.droppables[a] || [], $.ui.ddmanager.droppables[a].push(this)
    },
    _splice: function(a) {
      for (var b = 0; b < a.length; b++) a[b] === this && a.splice(b, 1)
    },
    _destroy: function() {
      var a = $.ui.ddmanager.droppables[this.options.scope];
      this._splice(a), this.element.removeClass("ui-droppable ui-droppable-disabled")
    },
    _setOption: function(a, b) {
      if ("accept" === a) this.accept = $.isFunction(b) ? b : function(a) {
        return a.is(b)
      };
      else if ("scope" === a) {
        var c = $.ui.ddmanager.droppables[this.options.scope];
        this._splice(c), this._addToManager(b)
      }
      this._super(a, b)
    },
    _activate: function(a) {
      var b = $.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), b && this._trigger("activate", a, this.ui(b))
    },
    _deactivate: function(a) {
      var b = $.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), b && this._trigger("deactivate", a, this.ui(b))
    },
    _over: function(a) {
      var b = $.ui.ddmanager.current;
      b && (b.currentItem || b.element)[0] !== this.element[0] && this.accept.call(this.element[0], b.currentItem || b.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", a, this.ui(b)))
    },
    _out: function(a) {
      var b = $.ui.ddmanager.current;
      b && (b.currentItem || b.element)[0] !== this.element[0] && this.accept.call(this.element[0], b.currentItem || b.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", a, this.ui(b)))
    },
    _drop: function(a, b) {
      var c = b || $.ui.ddmanager.current,
        d = !1;
      return !(!c || (c.currentItem || c.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
        var b = $(this).droppable("instance");
        if (b.options.greedy && !b.options.disabled && b.options.scope === c.options.scope && b.accept.call(b.element[0], c.currentItem || c.element) && $.ui.intersect(c, $.extend(b, {
            offset: b.element.offset()
          }), b.options.tolerance, a)) return d = !0, !1
      }), !d && (!!this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", a, this.ui(c)), this.element)))
    },
    ui: function(a) {
      return {
        draggable: a.currentItem || a.element,
        helper: a.helper,
        position: a.position,
        offset: a.positionAbs
      }
    }
  }), $.ui.intersect = function() {
    function a(a, b, c) {
      return a >= b && a < b + c
    }
    return function(b, c, d, e) {
      if (!c.offset) return !1;
      var f = (b.positionAbs || b.position.absolute).left + b.margins.left,
        g = (b.positionAbs || b.position.absolute).top + b.margins.top,
        h = f + b.helperProportions.width,
        i = g + b.helperProportions.height,
        j = c.offset.left,
        k = c.offset.top,
        l = j + c.proportions().width,
        m = k + c.proportions().height;
      switch (d) {
        case "fit":
          return j <= f && h <= l && k <= g && i <= m;
        case "intersect":
          return j < f + b.helperProportions.width / 2 && h - b.helperProportions.width / 2 < l && k < g + b.helperProportions.height / 2 && i - b.helperProportions.height / 2 < m;
        case "pointer":
          return a(e.pageY, k, c.proportions().height) && a(e.pageX, j, c.proportions().width);
        case "touch":
          return (g >= k && g <= m || i >= k && i <= m || g < k && i > m) && (f >= j && f <= l || h >= j && h <= l || f < j && h > l);
        default:
          return !1
      }
    }
  }(), $.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function(a, b) {
      var c, d, e = $.ui.ddmanager.droppables[a.options.scope] || [],
        f = b ? b.type : null,
        g = (a.currentItem || a.element).find(":data(ui-droppable)").addBack();
      a: for (c = 0; c < e.length; c++)
        if (!(e[c].options.disabled || a && !e[c].accept.call(e[c].element[0], a.currentItem || a.element))) {
          for (d = 0; d < g.length; d++)
            if (g[d] === e[c].element[0]) {
              e[c].proportions().height = 0;
              continue a
            }
          e[c].visible = "none" !== e[c].element.css("display"), e[c].visible && ("mousedown" === f && e[c]._activate.call(e[c], b), e[c].offset = e[c].element.offset(), e[c].proportions({
            width: e[c].element[0].offsetWidth,
            height: e[c].element[0].offsetHeight
          }))
        }
    },
    drop: function(a, b) {
      var c = !1;
      return $.each(($.ui.ddmanager.droppables[a.options.scope] || []).slice(), function() {
        this.options && (!this.options.disabled && this.visible && $.ui.intersect(a, this, this.options.tolerance, b) && (c = this._drop.call(this, b) || c), !this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, b)))
      }), c
    },
    dragStart: function(a, b) {
      a.element.parentsUntil("body").bind("scroll.droppable", function() {
        a.options.refreshPositions || $.ui.ddmanager.prepareOffsets(a, b)
      })
    },
    drag: function(a, b) {
      a.options.refreshPositions && $.ui.ddmanager.prepareOffsets(a, b), $.each($.ui.ddmanager.droppables[a.options.scope] || [], function() {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var c, d, e, f = $.ui.intersect(a, this, this.options.tolerance, b),
            g = !f && this.isover ? "isout" : f && !this.isover ? "isover" : null;
          g && (this.options.greedy && (d = this.options.scope, e = this.element.parents(":data(ui-droppable)").filter(function() {
            return $(this).droppable("instance").options.scope === d
          }), e.length && (c = $(e[0]).droppable("instance"), c.greedyChild = "isover" === g)), c && "isover" === g && (c.isover = !1, c.isout = !0, c._out.call(c, b)), this[g] = !0, this["isout" === g ? "isover" : "isout"] = !1, this["isover" === g ? "_over" : "_out"].call(this, b), c && "isout" === g && (c.isout = !1, c.isover = !0, c._over.call(c, b)))
        }
      })
    },
    dragStop: function(a, b) {
      a.element.parentsUntil("body").unbind("scroll.droppable"), a.options.refreshPositions || $.ui.ddmanager.prepareOffsets(a, b)
    }
  };
  $.ui.droppable;
  $.widget("ui.resizable", $.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function(a) {
      return parseInt(a, 10) || 0
    },
    _isNumber: function(a) {
      return !isNaN(parseInt(a, 10))
    },
    _hasScroll: function(a, b) {
      if ("hidden" === $(a).css("overflow")) return !1;
      var c = b && "left" === b ? "scrollLeft" : "scrollTop",
        d = !1;
      return a[c] > 0 || (a[c] = 1, d = a[c] > 0, a[c] = 0, d)
    },
    _create: function() {
      var a, b, c, d, e, f = this,
        g = this.options;
      if (this.element.addClass("ui-resizable"), $.extend(this, {
          _aspectRatio: !!g.aspectRatio,
          aspectRatio: g.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: g.helper || g.ghost || g.animate ? g.helper || "ui-resizable-helper" : null
        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
          position: this.element.css("position"),
          width: this.element.outerWidth(),
          height: this.element.outerHeight(),
          top: this.element.css("top"),
          left: this.element.css("left")
        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
          marginLeft: this.originalElement.css("marginLeft"),
          marginTop: this.originalElement.css("marginTop"),
          marginRight: this.originalElement.css("marginRight"),
          marginBottom: this.originalElement.css("marginBottom")
        }), this.originalElement.css({
          marginLeft: 0,
          marginTop: 0,
          marginRight: 0,
          marginBottom: 0
        }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
          position: "static",
          zoom: 1,
          display: "block"
        })), this.originalElement.css({
          margin: this.originalElement.css("margin")
        }), this._proportionallyResize()), this.handles = g.handles || ($(".ui-resizable-handle", this.element).length ? {
          n: ".ui-resizable-n",
          e: ".ui-resizable-e",
          s: ".ui-resizable-s",
          w: ".ui-resizable-w",
          se: ".ui-resizable-se",
          sw: ".ui-resizable-sw",
          ne: ".ui-resizable-ne",
          nw: ".ui-resizable-nw"
        } : "e,s,se"), this._handles = $(), this.handles.constructor === String)
        for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), a = this.handles.split(","), this.handles = {}, b = 0; b < a.length; b++) c = $.trim(a[b]), e = "ui-resizable-" + c, d = $("<div class='ui-resizable-handle " + e + "'></div>"), d.css({
          zIndex: g.zIndex
        }), "se" === c && d.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[c] = ".ui-resizable-" + c, this.element.append(d);
      this._renderAxis = function(a) {
        var b, c, d, e;
        a = a || this.element;
        for (b in this.handles) this.handles[b].constructor === String ? this.handles[b] = this.element.children(this.handles[b]).first().show() : (this.handles[b].jquery || this.handles[b].nodeType) && (this.handles[b] = $(this.handles[b]), this._on(this.handles[b], {
          mousedown: f._mouseDown
        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (c = $(this.handles[b], this.element), e = /sw|ne|nw|se|n|s/.test(b) ? c.outerHeight() : c.outerWidth(), d = ["padding", /ne|nw|n/.test(b) ? "Top" : /se|sw|s/.test(b) ? "Bottom" : /^e$/.test(b) ? "Right" : "Left"].join(""), a.css(d, e), this._proportionallyResize()), this._handles = this._handles.add(this.handles[b])
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function() {
        f.resizing || (this.className && (d = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), f.axis = d && d[1] ? d[1] : "se")
      }), g.autoHide && (this._handles.hide(), $(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
        g.disabled || ($(this).removeClass("ui-resizable-autohide"), f._handles.show())
      }).mouseleave(function() {
        g.disabled || f.resizing || ($(this).addClass("ui-resizable-autohide"), f._handles.hide())
      })), this._mouseInit()
    },
    _destroy: function() {
      this._mouseDestroy();
      var a, b = function(a) {
        $(a).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
      };
      return this.elementIsWrapper && (b(this.element), a = this.element, this.originalElement.css({
        position: a.css("position"),
        width: a.outerWidth(),
        height: a.outerHeight(),
        top: a.css("top"),
        left: a.css("left")
      }).insertAfter(a), a.remove()), this.originalElement.css("resize", this.originalResizeStyle), b(this.originalElement), this
    },
    _mouseCapture: function(a) {
      var b, c, d = !1;
      for (b in this.handles) c = $(this.handles[b])[0], (c === a.target || $.contains(c, a.target)) && (d = !0);
      return !this.options.disabled && d
    },
    _mouseStart: function(a) {
      var b, c, d, e = this.options,
        f = this.element;
      return this.resizing = !0, this._renderProxy(), b = this._num(this.helper.css("left")), c = this._num(this.helper.css("top")), e.containment && (b += $(e.containment).scrollLeft() || 0, c += $(e.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: b,
        top: c
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: f.width(),
        height: f.height()
      }, this.originalSize = this._helper ? {
        width: f.outerWidth(),
        height: f.outerHeight()
      } : {
        width: f.width(),
        height: f.height()
      }, this.sizeDiff = {
        width: f.outerWidth() - f.width(),
        height: f.outerHeight() - f.height()
      }, this.originalPosition = {
        left: b,
        top: c
      }, this.originalMousePosition = {
        left: a.pageX,
        top: a.pageY
      }, this.aspectRatio = "number" == typeof e.aspectRatio ? e.aspectRatio : this.originalSize.width / this.originalSize.height || 1, d = $(".ui-resizable-" + this.axis).css("cursor"), $("body").css("cursor", "auto" === d ? this.axis + "-resize" : d), f.addClass("ui-resizable-resizing"), this._propagate("start", a), !0
    },
    _mouseDrag: function(a) {
      var b, c, d = this.originalMousePosition,
        e = this.axis,
        f = a.pageX - d.left || 0,
        g = a.pageY - d.top || 0,
        h = this._change[e];
      return this._updatePrevProperties(), !!h && (b = h.apply(this, [a, f, g]), this._updateVirtualBoundaries(a.shiftKey), (this._aspectRatio || a.shiftKey) && (b = this._updateRatio(b, a)), b = this._respectSize(b, a), this._updateCache(b), this._propagate("resize", a), c = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), $.isEmptyObject(c) || (this._updatePrevProperties(), this._trigger("resize", a, this.ui()), this._applyChanges()), !1)
    },
    _mouseStop: function(a) {
      this.resizing = !1;
      var b, c, d, e, f, g, h, i = this.options,
        j = this;
      return this._helper && (b = this._proportionallyResizeElements, c = b.length && /textarea/i.test(b[0].nodeName), d = c && this._hasScroll(b[0], "left") ? 0 : j.sizeDiff.height, e = c ? 0 : j.sizeDiff.width, f = {
        width: j.helper.width() - e,
        height: j.helper.height() - d
      }, g = parseInt(j.element.css("left"), 10) + (j.position.left - j.originalPosition.left) || null, h = parseInt(j.element.css("top"), 10) + (j.position.top - j.originalPosition.top) || null, i.animate || this.element.css($.extend(f, {
        top: h,
        left: g
      })), j.helper.height(j.size.height), j.helper.width(j.size.width), this._helper && !i.animate && this._proportionallyResize()), $("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", a), this._helper && this.helper.remove(), !1
    },
    _updatePrevProperties: function() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      }
    },
    _applyChanges: function() {
      var a = {};
      return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"),
        this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
    },
    _updateVirtualBoundaries: function(a) {
      var b, c, d, e, f, g = this.options;
      f = {
        minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
        maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
        minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
        maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
      }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), c < f.maxWidth && (f.maxWidth = c), e < f.maxHeight && (f.maxHeight = e)), this._vBoundaries = f
    },
    _updateCache: function(a) {
      this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
    },
    _updateRatio: function(a) {
      var b = this.position,
        c = this.size,
        d = this.axis;
      return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
    },
    _respectSize: function(a) {
      var b = this._vBoundaries,
        c = this.axis,
        d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
        e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
        f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
        g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
        h = this.originalPosition.left + this.originalSize.width,
        i = this.position.top + this.size.height,
        j = /sw|nw|w/.test(c),
        k = /nw|ne|n/.test(c);
      return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
    },
    _getPaddingPlusBorderDimensions: function(a) {
      for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; b < 4; b++) c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
      return {
        height: c[0] + c[2],
        width: c[1] + c[3]
      }
    },
    _proportionallyResize: function() {
      if (this._proportionallyResizeElements.length)
        for (var a, b = 0, c = this.helper || this.element; b < this._proportionallyResizeElements.length; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
          height: c.height() - this.outerDimensions.height || 0,
          width: c.width() - this.outerDimensions.width || 0
        })
    },
    _renderProxy: function() {
      var a = this.element,
        b = this.options;
      this.elementOffset = a.offset(), this._helper ? (this.helper = this.helper || $("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++b.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
      e: function(a, b) {
        return {
          width: this.originalSize.width + b
        }
      },
      w: function(a, b) {
        var c = this.originalSize,
          d = this.originalPosition;
        return {
          left: d.left + b,
          width: c.width - b
        }
      },
      n: function(a, b, c) {
        var d = this.originalSize,
          e = this.originalPosition;
        return {
          top: e.top + c,
          height: d.height - c
        }
      },
      s: function(a, b, c) {
        return {
          height: this.originalSize.height + c
        }
      },
      se: function(a, b, c) {
        return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [a, b, c]))
      },
      sw: function(a, b, c) {
        return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [a, b, c]))
      },
      ne: function(a, b, c) {
        return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [a, b, c]))
      },
      nw: function(a, b, c) {
        return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [a, b, c]))
      }
    },
    _propagate: function(a, b) {
      $.ui.plugin.call(this, a, [b, this.ui()]), "resize" !== a && this._trigger(a, b, this.ui())
    },
    plugins: {},
    ui: function() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      }
    }
  }), $.ui.plugin.add("resizable", "animate", {
    stop: function(a) {
      var b = $(this).resizable("instance"),
        c = b.options,
        d = b._proportionallyResizeElements,
        e = d.length && /textarea/i.test(d[0].nodeName),
        f = e && b._hasScroll(d[0], "left") ? 0 : b.sizeDiff.height,
        g = e ? 0 : b.sizeDiff.width,
        h = {
          width: b.size.width - g,
          height: b.size.height - f
        },
        i = parseInt(b.element.css("left"), 10) + (b.position.left - b.originalPosition.left) || null,
        j = parseInt(b.element.css("top"), 10) + (b.position.top - b.originalPosition.top) || null;
      b.element.animate($.extend(h, j && i ? {
        top: j,
        left: i
      } : {}), {
        duration: c.animateDuration,
        easing: c.animateEasing,
        step: function() {
          var c = {
            width: parseInt(b.element.css("width"), 10),
            height: parseInt(b.element.css("height"), 10),
            top: parseInt(b.element.css("top"), 10),
            left: parseInt(b.element.css("left"), 10)
          };
          d && d.length && $(d[0]).css({
            width: c.width,
            height: c.height
          }), b._updateCache(c), b._propagate("resize", a)
        }
      })
    }
  }), $.ui.plugin.add("resizable", "containment", {
    start: function() {
      var a, b, c, d, e, f, g, h = $(this).resizable("instance"),
        i = h.options,
        j = h.element,
        k = i.containment,
        l = k instanceof $ ? k.get(0) : /parent/.test(k) ? j.parent().get(0) : k;
      l && (h.containerElement = $(l), /document/.test(k) || k === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: $(document),
        left: 0,
        top: 0,
        width: $(document).width(),
        height: $(document).height() || document.body.parentNode.scrollHeight
      }) : (a = $(l), b = [], $(["Top", "Right", "Left", "Bottom"]).each(function(c, d) {
        b[c] = h._num(a.css("padding" + d))
      }), h.containerOffset = a.offset(), h.containerPosition = a.position(), h.containerSize = {
        height: a.innerHeight() - b[3],
        width: a.innerWidth() - b[1]
      }, c = h.containerOffset, d = h.containerSize.height, e = h.containerSize.width, f = h._hasScroll(l, "left") ? l.scrollWidth : e, g = h._hasScroll(l) ? l.scrollHeight : d, h.parentData = {
        element: l,
        left: c.left,
        top: c.top,
        width: f,
        height: g
      }))
    },
    resize: function(a) {
      var b, c, d, e, f = $(this).resizable("instance"),
        g = f.options,
        h = f.containerOffset,
        i = f.position,
        j = f._aspectRatio || a.shiftKey,
        k = {
          top: 0,
          left: 0
        },
        l = f.containerElement,
        m = !0;
      l[0] !== document && /static/.test(l.css("position")) && (k = h), i.left < (f._helper ? h.left : 0) && (f.size.width = f.size.width + (f._helper ? f.position.left - h.left : f.position.left - k.left), j && (f.size.height = f.size.width / f.aspectRatio, m = !1), f.position.left = g.helper ? h.left : 0), i.top < (f._helper ? h.top : 0) && (f.size.height = f.size.height + (f._helper ? f.position.top - h.top : f.position.top), j && (f.size.width = f.size.height * f.aspectRatio, m = !1), f.position.top = f._helper ? h.top : 0), d = f.containerElement.get(0) === f.element.parent().get(0), e = /relative|absolute/.test(f.containerElement.css("position")), d && e ? (f.offset.left = f.parentData.left + f.position.left, f.offset.top = f.parentData.top + f.position.top) : (f.offset.left = f.element.offset().left, f.offset.top = f.element.offset().top), b = Math.abs(f.sizeDiff.width + (f._helper ? f.offset.left - k.left : f.offset.left - h.left)), c = Math.abs(f.sizeDiff.height + (f._helper ? f.offset.top - k.top : f.offset.top - h.top)), b + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - b, j && (f.size.height = f.size.width / f.aspectRatio, m = !1)), c + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - c, j && (f.size.width = f.size.height * f.aspectRatio, m = !1)), m || (f.position.left = f.prevPosition.left, f.position.top = f.prevPosition.top, f.size.width = f.prevSize.width, f.size.height = f.prevSize.height)
    },
    stop: function() {
      var a = $(this).resizable("instance"),
        b = a.options,
        c = a.containerOffset,
        d = a.containerPosition,
        e = a.containerElement,
        f = $(a.helper),
        g = f.offset(),
        h = f.outerWidth() - a.sizeDiff.width,
        i = f.outerHeight() - a.sizeDiff.height;
      a._helper && !b.animate && /relative/.test(e.css("position")) && $(this).css({
        left: g.left - d.left - c.left,
        width: h,
        height: i
      }), a._helper && !b.animate && /static/.test(e.css("position")) && $(this).css({
        left: g.left - d.left - c.left,
        width: h,
        height: i
      })
    }
  }), $.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
      var a = $(this).resizable("instance"),
        b = a.options;
      $(b.alsoResize).each(function() {
        var a = $(this);
        a.data("ui-resizable-alsoresize", {
          width: parseInt(a.width(), 10),
          height: parseInt(a.height(), 10),
          left: parseInt(a.css("left"), 10),
          top: parseInt(a.css("top"), 10)
        })
      })
    },
    resize: function(a, b) {
      var c = $(this).resizable("instance"),
        d = c.options,
        e = c.originalSize,
        f = c.originalPosition,
        g = {
          height: c.size.height - e.height || 0,
          width: c.size.width - e.width || 0,
          top: c.position.top - f.top || 0,
          left: c.position.left - f.left || 0
        };
      $(d.alsoResize).each(function() {
        var a = $(this),
          c = $(this).data("ui-resizable-alsoresize"),
          d = {},
          e = a.parents(b.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        $.each(e, function(a, b) {
          var e = (c[b] || 0) + (g[b] || 0);
          e && e >= 0 && (d[b] = e || null)
        }), a.css(d)
      })
    },
    stop: function() {
      $(this).removeData("resizable-alsoresize")
    }
  }), $.ui.plugin.add("resizable", "ghost", {
    start: function() {
      var a = $(this).resizable("instance"),
        b = a.options,
        c = a.size;
      a.ghost = a.originalElement.clone(), a.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: c.height,
        width: c.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass("string" == typeof b.ghost ? b.ghost : ""), a.ghost.appendTo(a.helper)
    },
    resize: function() {
      var a = $(this).resizable("instance");
      a.ghost && a.ghost.css({
        position: "relative",
        height: a.size.height,
        width: a.size.width
      })
    },
    stop: function() {
      var a = $(this).resizable("instance");
      a.ghost && a.helper && a.helper.get(0).removeChild(a.ghost.get(0))
    }
  }), $.ui.plugin.add("resizable", "grid", {
    resize: function() {
      var a, b = $(this).resizable("instance"),
        c = b.options,
        d = b.size,
        e = b.originalSize,
        f = b.originalPosition,
        g = b.axis,
        h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid,
        i = h[0] || 1,
        j = h[1] || 1,
        k = Math.round((d.width - e.width) / i) * i,
        l = Math.round((d.height - e.height) / j) * j,
        m = e.width + k,
        n = e.height + l,
        o = c.maxWidth && c.maxWidth < m,
        p = c.maxHeight && c.maxHeight < n,
        q = c.minWidth && c.minWidth > m,
        r = c.minHeight && c.minHeight > n;
      c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : ((n - j <= 0 || m - i <= 0) && (a = b._getPaddingPlusBorderDimensions(this)), n - j > 0 ? (b.size.height = n, b.position.top = f.top - l) : (n = j - a.height, b.size.height = n, b.position.top = f.top + e.height - n), m - i > 0 ? (b.size.width = m, b.position.left = f.left - k) : (m = i - a.width, b.size.width = m, b.position.left = f.left + e.width - m))
    }
  });
  $.ui.resizable, $.widget("ui.selectable", $.ui.mouse, {
    version: "1.11.4",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function() {
      var a, b = this;
      this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
        a = $(b.options.filter, b.element[0]), a.addClass("ui-selectee"), a.each(function() {
          var a = $(this),
            b = a.offset();
          $.data(this, "selectable-item", {
            element: this,
            $element: a,
            left: b.left,
            top: b.top,
            right: b.left + a.outerWidth(),
            bottom: b.top + a.outerHeight(),
            startselected: !1,
            selected: a.hasClass("ui-selected"),
            selecting: a.hasClass("ui-selecting"),
            unselecting: a.hasClass("ui-unselecting")
          })
        })
      }, this.refresh(), this.selectees = a.addClass("ui-selectee"), this._mouseInit(), this.helper = $("<div class='ui-selectable-helper'></div>")
    },
    _destroy: function() {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    },
    _mouseStart: function(a) {
      var b = this,
        c = this.options;
      this.opos = [a.pageX, a.pageY], this.options.disabled || (this.selectees = $(c.filter, this.element[0]), this._trigger("start", a), $(c.appendTo).append(this.helper), this.helper.css({
        left: a.pageX,
        top: a.pageY,
        width: 0,
        height: 0
      }), c.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
        var c = $.data(this, "selectable-item");
        c.startselected = !0, a.metaKey || a.ctrlKey || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, b._trigger("unselecting", a, {
          unselecting: c.element
        }))
      }), $(a.target).parents().addBack().each(function() {
        var c, d = $.data(this, "selectable-item");
        if (d) return c = !a.metaKey && !a.ctrlKey || !d.$element.hasClass("ui-selected"), d.$element.removeClass(c ? "ui-unselecting" : "ui-selected").addClass(c ? "ui-selecting" : "ui-unselecting"), d.unselecting = !c, d.selecting = c, d.selected = c, c ? b._trigger("selecting", a, {
          selecting: d.element
        }) : b._trigger("unselecting", a, {
          unselecting: d.element
        }), !1
      }))
    },
    _mouseDrag: function(a) {
      if (this.dragged = !0, !this.options.disabled) {
        var b, c = this,
          d = this.options,
          e = this.opos[0],
          f = this.opos[1],
          g = a.pageX,
          h = a.pageY;
        return e > g && (b = g, g = e, e = b), f > h && (b = h, h = f, f = b), this.helper.css({
          left: e,
          top: f,
          width: g - e,
          height: h - f
        }), this.selectees.each(function() {
          var b = $.data(this, "selectable-item"),
            i = !1;
          b && b.element !== c.element[0] && ("touch" === d.tolerance ? i = !(b.left > g || b.right < e || b.top > h || b.bottom < f) : "fit" === d.tolerance && (i = b.left > e && b.right < g && b.top > f && b.bottom < h), i ? (b.selected && (b.$element.removeClass("ui-selected"), b.selected = !1), b.unselecting && (b.$element.removeClass("ui-unselecting"), b.unselecting = !1), b.selecting || (b.$element.addClass("ui-selecting"), b.selecting = !0, c._trigger("selecting", a, {
            selecting: b.element
          }))) : (b.selecting && ((a.metaKey || a.ctrlKey) && b.startselected ? (b.$element.removeClass("ui-selecting"), b.selecting = !1, b.$element.addClass("ui-selected"), b.selected = !0) : (b.$element.removeClass("ui-selecting"), b.selecting = !1, b.startselected && (b.$element.addClass("ui-unselecting"), b.unselecting = !0), c._trigger("unselecting", a, {
            unselecting: b.element
          }))), b.selected && (a.metaKey || a.ctrlKey || b.startselected || (b.$element.removeClass("ui-selected"), b.selected = !1, b.$element.addClass("ui-unselecting"), b.unselecting = !0, c._trigger("unselecting", a, {
            unselecting: b.element
          })))))
        }), !1
      }
    },
    _mouseStop: function(a) {
      var b = this;
      return this.dragged = !1, $(".ui-unselecting", this.element[0]).each(function() {
        var c = $.data(this, "selectable-item");
        c.$element.removeClass("ui-unselecting"), c.unselecting = !1, c.startselected = !1, b._trigger("unselected", a, {
          unselected: c.element
        })
      }), $(".ui-selecting", this.element[0]).each(function() {
        var c = $.data(this, "selectable-item");
        c.$element.removeClass("ui-selecting").addClass("ui-selected"), c.selecting = !1, c.selected = !0, c.startselected = !0, b._trigger("selected", a, {
          selected: c.element
        })
      }), this._trigger("stop", a), this.helper.remove(), !1
    }
  });
  $.extend($.ui, {
    datepicker: {
      version: "1.11.4"
    }
  });
  var k;
  $.extend(d.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
      return this.dpDiv
    },
    setDefaults: function(a) {
      return g(this._defaults, a || {}), this
    },
    _attachDatepicker: function(a, b) {
      var c, d, e;
      c = a.nodeName.toLowerCase(), d = "div" === c || "span" === c, a.id || (this.uuid += 1, a.id = "dp" + this.uuid), e = this._newInst($(a), d), e.settings = $.extend({}, b || {}), "input" === c ? this._connectDatepicker(a, e) : d && this._inlineDatepicker(a, e)
    },
    _newInst: function(a, b) {
      var c = a[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: c,
        input: a,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: b,
        dpDiv: b ? e($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function(a, b) {
      var c = $(a);
      b.append = $([]), b.trigger = $([]), c.hasClass(this.markerClassName) || (this._attachments(c, b), c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(b), $.data(a, "datepicker", b), b.settings.disabled && this._disableDatepicker(a))
    },
    _attachments: function(a, b) {
      var c, d, e, f = this._get(b, "appendText"),
        g = this._get(b, "isRTL");
      b.append && b.append.remove(), f && (b.append = $("<span class='" + this._appendClass + "'>" + f + "</span>"), a[g ? "before" : "after"](b.append)), a.unbind("focus", this._showDatepicker), b.trigger && b.trigger.remove(), c = this._get(b, "showOn"), "focus" !== c && "both" !== c || a.focus(this._showDatepicker), "button" !== c && "both" !== c || (d = this._get(b, "buttonText"), e = this._get(b, "buttonImage"), b.trigger = $(this._get(b, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
        src: e,
        alt: d,
        title: d
      }) : $("<button type='button'></button>").addClass(this._triggerClass).html(e ? $("<img/>").attr({
        src: e,
        alt: d,
        title: d
      }) : d)), a[g ? "before" : "after"](b.trigger), b.trigger.click(function() {
        return $.datepicker._datepickerShowing && $.datepicker._lastInput === a[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput !== a[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(a[0])) : $.datepicker._showDatepicker(a[0]), !1
      }))
    },
    _autoSize: function(a) {
      if (this._get(a, "autoSize") && !a.inline) {
        var b, c, d, e, f = new Date(2009, 11, 20),
          g = this._get(a, "dateFormat");
        g.match(/[DM]/) && (b = function(a) {
          for (c = 0, d = 0, e = 0; e < a.length; e++) a[e].length > c && (c = a[e].length, d = e);
          return d
        }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
      }
    },
    _inlineDatepicker: function(a, b) {
      var c = $(a);
      c.hasClass(this.markerClassName) || (c.addClass(this.markerClassName).append(b.dpDiv), $.data(a, "datepicker", b), this._setDate(b, this._getDefaultDate(b), !0), this._updateDatepicker(b), this._updateAlternate(b), b.settings.disabled && this._disableDatepicker(a), b.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(a, b, c, d, e) {
      var f, h, i, j, k, l = this._dialogInst;
      return l || (this.uuid += 1, f = "dp" + this.uuid, this._dialogInput = $("<input type='text' id='" + f + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), l = this._dialogInst = this._newInst(this._dialogInput, !1), l.settings = {}, $.data(this._dialogInput[0], "datepicker", l)), g(l.settings, d || {}), b = b && b.constructor === Date ? this._formatDate(l, b) : b, this._dialogInput.val(b), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, i = document.documentElement.clientHeight, j = document.documentElement.scrollLeft || document.body.scrollLeft, k = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + j, i / 2 - 150 + k]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), l.settings.onSelect = c, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], "datepicker", l), this
    },
    _destroyDatepicker: function(a) {
      var b, c = $(a),
        d = $.data(a, "datepicker");
      c.hasClass(this.markerClassName) && (b = a.nodeName.toLowerCase(), $.removeData(a, "datepicker"), "input" === b ? (d.append.remove(), d.trigger.remove(), c.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : "div" !== b && "span" !== b || c.removeClass(this.markerClassName).empty(), k === d && (k = null))
    },
    _enableDatepicker: function(a) {
      var b, c, d = $(a),
        e = $.data(a, "datepicker");
      d.hasClass(this.markerClassName) && (b = a.nodeName.toLowerCase(), "input" === b ? (a.disabled = !1, e.trigger.filter("button").each(function() {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : "div" !== b && "span" !== b || (c = d.children("." + this._inlineClass), c.children().removeClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = $.map(this._disabledInputs, function(b) {
        return b === a ? null : b
      }))
    },
    _disableDatepicker: function(a) {
      var b, c, d = $(a),
        e = $.data(a, "datepicker");
      d.hasClass(this.markerClassName) && (b = a.nodeName.toLowerCase(), "input" === b ? (a.disabled = !0, e.trigger.filter("button").each(function() {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : "div" !== b && "span" !== b || (c = d.children("." + this._inlineClass), c.children().addClass("ui-state-disabled"), c.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = $.map(this._disabledInputs, function(b) {
        return b === a ? null : b
      }), this._disabledInputs[this._disabledInputs.length] = a)
    },
    _isDisabledDatepicker: function(a) {
      if (!a) return !1;
      for (var b = 0; b < this._disabledInputs.length; b++)
        if (this._disabledInputs[b] === a) return !0;
      return !1
    },
    _getInst: function(a) {
      try {
        return $.data(a, "datepicker")
      } catch (b) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function(a, b, c) {
      var d, e, f, h, i = this._getInst(a);
      return 2 === arguments.length && "string" == typeof b ? "defaults" === b ? $.extend({}, $.datepicker._defaults) : i ? "all" === b ? $.extend({}, i.settings) : this._get(i, b) : null : (d = b || {}, "string" == typeof b && (d = {}, d[b] = c), void(i && (this._curInst === i && this._hideDatepicker(), e = this._getDateDatepicker(a, !0), f = this._getMinMaxDate(i, "min"), h = this._getMinMaxDate(i, "max"), g(i.settings, d), null !== f && void 0 !== d.dateFormat && void 0 === d.minDate && (i.settings.minDate = this._formatDate(i, f)), null !== h && void 0 !== d.dateFormat && void 0 === d.maxDate && (i.settings.maxDate = this._formatDate(i, h)), "disabled" in d && (d.disabled ? this._disableDatepicker(a) : this._enableDatepicker(a)), this._attachments($(a), i), this._autoSize(i), this._setDate(i, e), this._updateAlternate(i), this._updateDatepicker(i))))
    },
    _changeDatepicker: function(a, b, c) {
      this._optionDatepicker(a, b, c)
    },
    _refreshDatepicker: function(a) {
      var b = this._getInst(a);
      b && this._updateDatepicker(b)
    },
    _setDateDatepicker: function(a, b) {
      var c = this._getInst(a);
      c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
    },
    _getDateDatepicker: function(a, b) {
      var c = this._getInst(a);
      return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
    },
    _doKeyDown: function(a) {
      var b, c, d, e = $.datepicker._getInst(a.target),
        f = !0,
        g = e.dpDiv.is(".ui-datepicker-rtl");
      if (e._keyEvent = !0, $.datepicker._datepickerShowing) switch (a.keyCode) {
        case 9:
          $.datepicker._hideDatepicker(), f = !1;
          break;
        case 13:
          return d = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", e.dpDiv), d[0] && $.datepicker._selectDay(a.target, e.selectedMonth, e.selectedYear, d[0]), b = $.datepicker._get(e, "onSelect"), b ? (c = $.datepicker._formatDate(e), b.apply(e.input ? e.input[0] : null, [c, e])) : $.datepicker._hideDatepicker(), !1;
        case 27:
          $.datepicker._hideDatepicker();
          break;
        case 33:
          $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
          break;
        case 34:
          $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
          break;
        case 35:
          (a.ctrlKey || a.metaKey) && $.datepicker._clearDate(a.target), f = a.ctrlKey || a.metaKey;
          break;
        case 36:
          (a.ctrlKey || a.metaKey) && $.datepicker._gotoToday(a.target), f = a.ctrlKey || a.metaKey;
          break;
        case 37:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, g ? 1 : -1, "D"), f = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? -$.datepicker._get(e, "stepBigMonths") : -$.datepicker._get(e, "stepMonths"), "M");
          break;
        case 38:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, -7, "D"), f = a.ctrlKey || a.metaKey;
          break;
        case 39:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, g ? -1 : 1, "D"), f = a.ctrlKey || a.metaKey, a.originalEvent.altKey && $.datepicker._adjustDate(a.target, a.ctrlKey ? +$.datepicker._get(e, "stepBigMonths") : +$.datepicker._get(e, "stepMonths"), "M");
          break;
        case 40:
          (a.ctrlKey || a.metaKey) && $.datepicker._adjustDate(a.target, 7, "D"), f = a.ctrlKey || a.metaKey;
          break;
        default:
          f = !1
      } else 36 === a.keyCode && a.ctrlKey ? $.datepicker._showDatepicker(this) : f = !1;
      f && (a.preventDefault(), a.stopPropagation())
    },
    _doKeyPress: function(a) {
      var b, c, d = $.datepicker._getInst(a.target);
      if ($.datepicker._get(d, "constrainInput")) return b = $.datepicker._possibleChars($.datepicker._get(d, "dateFormat")), c = String.fromCharCode(null == a.charCode ? a.keyCode : a.charCode), a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1
    },
    _doKeyUp: function(a) {
      var b, c = $.datepicker._getInst(a.target);
      if (c.input.val() !== c.lastVal) try {
        b = $.datepicker.parseDate($.datepicker._get(c, "dateFormat"), c.input ? c.input.val() : null, $.datepicker._getFormatConfig(c)), b && ($.datepicker._setDateFromField(c), $.datepicker._updateAlternate(c), $.datepicker._updateDatepicker(c))
      } catch (d) {}
      return !0
    },
    _showDatepicker: function(a) {
      if (a = a.target || a, "input" !== a.nodeName.toLowerCase() && (a = $("input", a.parentNode)[0]), !$.datepicker._isDisabledDatepicker(a) && $.datepicker._lastInput !== a) {
        var b, d, e, f, h, i, j;
        b = $.datepicker._getInst(a), $.datepicker._curInst && $.datepicker._curInst !== b && ($.datepicker._curInst.dpDiv.stop(!0, !0), b && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0])), d = $.datepicker._get(b, "beforeShow"), e = d ? d.apply(a, [a, b]) : {}, e !== !1 && (g(b.settings, e), b.lastVal = null, $.datepicker._lastInput = a, $.datepicker._setDateFromField(b), $.datepicker._inDialog && (a.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(a), $.datepicker._pos[1] += a.offsetHeight), f = !1, $(a).parents().each(function() {
          return f |= "fixed" === $(this).css("position"), !f
        }), h = {
          left: $.datepicker._pos[0],
          top: $.datepicker._pos[1]
        }, $.datepicker._pos = null, b.dpDiv.empty(), b.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), $.datepicker._updateDatepicker(b), h = $.datepicker._checkOffset(b, h, f), b.dpDiv.css({
          position: $.datepicker._inDialog && $.blockUI ? "static" : f ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), b.inline || (i = $.datepicker._get(b, "showAnim"), j = $.datepicker._get(b, "duration"), b.dpDiv.css("z-index", c($(a)) + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects.effect[i] ? b.dpDiv.show(i, $.datepicker._get(b, "showOptions"), j) : b.dpDiv[i || "show"](i ? j : null), $.datepicker._shouldFocusInput(b) && b.input.focus(), $.datepicker._curInst = b))
      }
    },
    _updateDatepicker: function(a) {
      this.maxRows = 4, k = a, a.dpDiv.empty().append(this._generateHTML(a)), this._attachHandlers(a);
      var b, c = this._getNumberOfMonths(a),
        d = c[1],
        e = 17,
        g = a.dpDiv.find("." + this._dayOverClass + " a");
      g.length > 0 && f.apply(g.get(0)), a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), d > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + d).css("width", e * d + "em"), a.dpDiv[(1 !== c[0] || 1 !== c[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), a === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(a) && a.input.focus(), a.yearshtml && (b = a.yearshtml, setTimeout(function() {
        b === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml), b = a.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function(a) {
      return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
    },
    _checkOffset: function(a, b, c) {
      var d = a.dpDiv.outerWidth(),
        e = a.dpDiv.outerHeight(),
        f = a.input ? a.input.outerWidth() : 0,
        g = a.input ? a.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (c ? 0 : $(document).scrollLeft()),
        i = document.documentElement.clientHeight + (c ? 0 : $(document).scrollTop());
      return b.left -= this._get(a, "isRTL") ? d - f : 0, b.left -= c && b.left === a.input.offset().left ? $(document).scrollLeft() : 0, b.top -= c && b.top === a.input.offset().top + g ? $(document).scrollTop() : 0, b.left -= Math.min(b.left, b.left + d > h && h > d ? Math.abs(b.left + d - h) : 0), b.top -= Math.min(b.top, b.top + e > i && i > e ? Math.abs(e + g) : 0), b
    },
    _findPos: function(a) {
      for (var b, c = this._getInst(a), d = this._get(c, "isRTL"); a && ("hidden" === a.type || 1 !== a.nodeType || $.expr.filters.hidden(a));) a = a[d ? "previousSibling" : "nextSibling"];
      return b = $(a).offset(), [b.left, b.top]
    },
    _hideDatepicker: function(a) {
      var b, c, d, e, f = this._curInst;
      !f || a && f !== $.data(a, "datepicker") || this._datepickerShowing && (b = this._get(f, "showAnim"), c = this._get(f, "duration"), d = function() {
        $.datepicker._tidyDialog(f)
      }, $.effects && ($.effects.effect[b] || $.effects[b]) ? f.dpDiv.hide(b, $.datepicker._get(f, "showOptions"), c, d) : f.dpDiv["slideDown" === b ? "slideUp" : "fadeIn" === b ? "fadeOut" : "hide"](b ? c : null, d), b || d(), this._datepickerShowing = !1, e = this._get(f, "onClose"), e && e.apply(f.input ? f.input[0] : null, [f.input ? f.input.val() : "", f]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function(a) {
      a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
    },
    _checkExternalClick: function(a) {
      if ($.datepicker._curInst) {
        var b = $(a.target),
          c = $.datepicker._getInst(b[0]);
        (b[0].id === $.datepicker._mainDivId || 0 !== b.parents("#" + $.datepicker._mainDivId).length || b.hasClass($.datepicker.markerClassName) || b.closest("." + $.datepicker._triggerClass).length || !$.datepicker._datepickerShowing || $.datepicker._inDialog && $.blockUI) && (!b.hasClass($.datepicker.markerClassName) || $.datepicker._curInst === c) || $.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function(a, b, c) {
      var d = $(a),
        e = this._getInst(d[0]);
      this._isDisabledDatepicker(d[0]) || (this._adjustInstDate(e, b + ("M" === c ? this._get(e, "showCurrentAtPos") : 0), c), this._updateDatepicker(e))
    },
    _gotoToday: function(a) {
      var b, c = $(a),
        d = this._getInst(c[0]);
      this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear = d.currentYear) : (b = new Date, d.selectedDay = b.getDate(), d.drawMonth = d.selectedMonth = b.getMonth(), d.drawYear = d.selectedYear = b.getFullYear()), this._notifyChange(d), this._adjustDate(c)
    },
    _selectMonthYear: function(a, b, c) {
      var d = $(a),
        e = this._getInst(d[0]);
      e["selected" + ("M" === c ? "Month" : "Year")] = e["draw" + ("M" === c ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10), this._notifyChange(e), this._adjustDate(d)
    },
    _selectDay: function(a, b, c, d) {
      var e, f = $(a);
      $(d).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]) || (e = this._getInst(f[0]), e.selectedDay = e.currentDay = $("a", d).html(), e.selectedMonth = e.currentMonth = b, e.selectedYear = e.currentYear = c, this._selectDate(a, this._formatDate(e, e.currentDay, e.currentMonth, e.currentYear)))
    },
    _clearDate: function(a) {
      var b = $(a);
      this._selectDate(b, "")
    },
    _selectDate: function(a, b) {
      var c, d = $(a),
        e = this._getInst(d[0]);
      b = null != b ? b : this._formatDate(e), e.input && e.input.val(b), this._updateAlternate(e), c = this._get(e, "onSelect"), c ? c.apply(e.input ? e.input[0] : null, [b, e]) : e.input && e.input.trigger("change"), e.inline ? this._updateDatepicker(e) : (this._hideDatepicker(), this._lastInput = e.input[0], "object" != typeof e.input[0] && e.input.focus(), this._lastInput = null)
    },
    _updateAlternate: function(a) {
      var b, c, d, e = this._get(a, "altField");
      e && (b = this._get(a, "altFormat") || this._get(a, "dateFormat"), c = this._getDate(a), d = this.formatDate(b, c, this._getFormatConfig(a)), $(e).each(function() {
        $(this).val(d)
      }))
    },
    noWeekends: function(a) {
      var b = a.getDay();
      return [b > 0 && b < 6, ""]
    },
    iso8601Week: function(a) {
      var b, c = new Date(a.getTime());
      return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
    },
    parseDate: function(a, b, c) {
      if (null == a || null == b) throw "Invalid arguments";
      if (b = "object" == typeof b ? b.toString() : b + "", "" === b) return null;
      var d, e, f, g, h = 0,
        i = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        j = "string" != typeof i ? i : (new Date).getFullYear() % 100 + parseInt(i, 10),
        k = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
        l = (c ? c.dayNames : null) || this._defaults.dayNames,
        m = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
        n = (c ? c.monthNames : null) || this._defaults.monthNames,
        o = -1,
        p = -1,
        q = -1,
        r = -1,
        s = !1,
        t = function(b) {
          var c = d + 1 < a.length && a.charAt(d + 1) === b;
          return c && d++, c
        },
        u = function(a) {
          var c = t(a),
            d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && c ? 4 : "o" === a ? 3 : 2,
            e = "y" === a ? d : 1,
            f = new RegExp("^\\d{" + e + "," + d + "}"),
            g = b.substring(h).match(f);
          if (!g) throw "Missing number at position " + h;
          return h += g[0].length, parseInt(g[0], 10)
        },
        v = function(a, c, d) {
          var e = -1,
            f = $.map(t(a) ? d : c, function(a, b) {
              return [
                [b, a]
              ]
            }).sort(function(a, b) {
              return -(a[1].length - b[1].length)
            });
          if ($.each(f, function(a, c) {
              var d = c[1];
              if (b.substr(h, d.length).toLowerCase() === d.toLowerCase()) return e = c[0], h += d.length, !1
            }), e !== -1) return e + 1;
          throw "Unknown name at position " + h
        },
        w = function() {
          if (b.charAt(h) !== a.charAt(d)) throw "Unexpected literal at position " + h;
          h++
        };
      for (d = 0; d < a.length; d++)
        if (s) "'" !== a.charAt(d) || t("'") ? w() : s = !1;
        else switch (a.charAt(d)) {
          case "d":
            q = u("d");
            break;
          case "D":
            v("D", k, l);
            break;
          case "o":
            r = u("o");
            break;
          case "m":
            p = u("m");
            break;
          case "M":
            p = v("M", m, n);
            break;
          case "y":
            o = u("y");
            break;
          case "@":
            g = new Date(u("@")), o = g.getFullYear(), p = g.getMonth() + 1, q = g.getDate();
            break;
          case "!":
            g = new Date((u("!") - this._ticksTo1970) / 1e4), o = g.getFullYear(), p = g.getMonth() + 1, q = g.getDate();
            break;
          case "'":
            t("'") ? w() : s = !0;
            break;
          default:
            w()
        }
      if (h < b.length && (f = b.substr(h), !/^\s+/.test(f))) throw "Extra/unparsed characters found in date: " + f;
      if (o === -1 ? o = (new Date).getFullYear() : o < 100 && (o += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (o <= j ? 0 : -100)), r > -1)
        for (p = 1, q = r;;) {
          if (e = this._getDaysInMonth(o, p - 1), q <= e) break;
          p++, q -= e
        }
      if (g = this._daylightSavingAdjust(new Date(o, p - 1, q)), g.getFullYear() !== o || g.getMonth() + 1 !== p || g.getDate() !== q) throw "Invalid date";
      return g
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
    formatDate: function(a, b, c) {
      if (!b) return "";
      var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
        f = (c ? c.dayNames : null) || this._defaults.dayNames,
        g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
        h = (c ? c.monthNames : null) || this._defaults.monthNames,
        i = function(b) {
          var c = d + 1 < a.length && a.charAt(d + 1) === b;
          return c && d++, c
        },
        j = function(a, b, c) {
          var d = "" + b;
          if (i(a))
            for (; d.length < c;) d = "0" + d;
          return d
        },
        k = function(a, b, c, d) {
          return i(a) ? d[b] : c[b]
        },
        l = "",
        m = !1;
      if (b)
        for (d = 0; d < a.length; d++)
          if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
          else switch (a.charAt(d)) {
            case "d":
              l += j("d", b.getDate(), 2);
              break;
            case "D":
              l += k("D", b.getDay(), e, f);
              break;
            case "o":
              l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              l += j("m", b.getMonth() + 1, 2);
              break;
            case "M":
              l += k("M", b.getMonth(), g, h);
              break;
            case "y":
              l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
              break;
            case "@":
              l += b.getTime();
              break;
            case "!":
              l += 1e4 * b.getTime() + this._ticksTo1970;
              break;
            case "'":
              i("'") ? l += "'" : m = !0;
              break;
            default:
              l += a.charAt(d)
          }
      return l
    },
    _possibleChars: function(a) {
      var b, c = "",
        d = !1,
        e = function(c) {
          var d = b + 1 < a.length && a.charAt(b + 1) === c;
          return d && b++, d
        };
      for (b = 0; b < a.length; b++)
        if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
        else switch (a.charAt(b)) {
          case "d":
          case "m":
          case "y":
          case "@":
            c += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            e("'") ? c += "'" : d = !0;
            break;
          default:
            c += a.charAt(b)
        }
      return c
    },
    _get: function(a, b) {
      return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
    },
    _setDateFromField: function(a, b) {
      if (a.input.val() !== a.lastVal) {
        var c = this._get(a, "dateFormat"),
          d = a.lastVal = a.input ? a.input.val() : null,
          e = this._getDefaultDate(a),
          f = e,
          g = this._getFormatConfig(a);
        try {
          f = this.parseDate(c, d, g) || e
        } catch (h) {
          d = b ? "" : d
        }
        a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
      }
    },
    _getDefaultDate: function(a) {
      return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
    },
    _determineDate: function(a, b, c) {
      var d = function(a) {
          var b = new Date;
          return b.setDate(b.getDate() + a), b
        },
        e = function(b) {
          try {
            return $.datepicker.parseDate($.datepicker._get(a, "dateFormat"), b, $.datepicker._getFormatConfig(a))
          } catch (c) {}
          for (var d = (b.toLowerCase().match(/^c/) ? $.datepicker._getDate(a) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(b); i;) {
            switch (i[2] || "d") {
              case "d":
              case "D":
                g += parseInt(i[1], 10);
                break;
              case "w":
              case "W":
                g += 7 * parseInt(i[1], 10);
                break;
              case "m":
              case "M":
                f += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f));
                break;
              case "y":
              case "Y":
                e += parseInt(i[1], 10), g = Math.min(g, $.datepicker._getDaysInMonth(e, f))
            }
            i = h.exec(b)
          }
          return new Date(e, f, g)
        },
        f = null == b || "" === b ? c : "string" == typeof b ? e(b) : "number" == typeof b ? isNaN(b) ? c : d(b) : new Date(b.getTime());
      return f = f && "Invalid Date" === f.toString() ? c : f, f && (f.setHours(0), f.setMinutes(0), f.setSeconds(0), f.setMilliseconds(0)), this._daylightSavingAdjust(f)
    },
    _daylightSavingAdjust: function(a) {
      return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
    },
    _setDate: function(a, b, c) {
      var d = !b,
        e = a.selectedMonth,
        f = a.selectedYear,
        g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
      a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
    },
    _getDate: function(a) {
      var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
      return b
    },
    _attachHandlers: function(a) {
      var b = this._get(a, "stepMonths"),
        c = "#" + a.id.replace(/\\\\/g, "\\");
      a.dpDiv.find("[data-handler]").map(function() {
        var a = {
          prev: function() {
            $.datepicker._adjustDate(c, -b, "M")
          },
          next: function() {
            $.datepicker._adjustDate(c, +b, "M")
          },
          hide: function() {
            $.datepicker._hideDatepicker()
          },
          today: function() {
            $.datepicker._gotoToday(c)
          },
          selectDay: function() {
            return $.datepicker._selectDay(c, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function() {
            return $.datepicker._selectMonthYear(c, this, "M"), !1
          },
          selectYear: function() {
            return $.datepicker._selectMonthYear(c, this, "Y"), !1
          }
        };
        $(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function(a) {
      var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
        P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
        Q = this._get(a, "isRTL"),
        R = this._get(a, "showButtonPanel"),
        S = this._get(a, "hideIfNoPrevNext"),
        T = this._get(a, "navigationAsDateFormat"),
        U = this._getNumberOfMonths(a),
        V = this._get(a, "showCurrentAtPos"),
        W = this._get(a, "stepMonths"),
        X = 1 !== U[0] || 1 !== U[1],
        Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
        Z = this._getMinMaxDate(a, "min"),
        $ = this._getMinMaxDate(a, "max"),
        _ = a.drawMonth - V,
        aa = a.drawYear;
      if (_ < 0 && (_ += 12, aa--), $)
        for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && b < Z ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, _ < 0 && (_ = 11, aa--);
      for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='sh-iconset sh-iconset-chevron left-arrow'></span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='sh-iconset sh-iconset-chevron left-arrow'></span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='sh-iconset sh-iconset-chevron right-arrow'></span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='sh-iconset sh-iconset-chevron right-arrow'></span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; w < U[0]; w++) {
        for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
          if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
            if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
              case 0:
                B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                break;
              case U[1] - 1:
                B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                break;
              default:
                B += " ui-datepicker-group-middle", A = ""
            }
            B += "'>"
          }
          for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; v < 7; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
          for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; J < H; J++) {
            for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; v < 7; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && I < Z || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
            B += K + "</tr>"
          }
          _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
        }
        u += x
      }
      return u += j, a._keyEvent = !1, u
    },
    _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
      var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
        r = this._get(a, "changeYear"),
        s = this._get(a, "showMonthAfterYear"),
        t = "<div class='ui-datepicker-title'>",
        u = "";
      if (f || !q) u += "<span class='ui-datepicker-month'>" + h[b] + "</span>";
      else {
        for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; k < 12; k++)(!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
        u += "</select>"
      }
      if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
        if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
        else {
          for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
              var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
              return isNaN(b) ? m : b
            }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; o <= p; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
          a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
        }
      return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
    },
    _adjustInstDate: function(a, b, c) {
      var d = a.drawYear + ("Y" === c ? b : 0),
        e = a.drawMonth + ("M" === c ? b : 0),
        f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
        g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
      a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), "M" !== c && "Y" !== c || this._notifyChange(a)
    },
    _restrictMinMax: function(a, b) {
      var c = this._getMinMaxDate(a, "min"),
        d = this._getMinMaxDate(a, "max"),
        e = c && b < c ? c : b;
      return d && e > d ? d : e
    },
    _notifyChange: function(a) {
      var b = this._get(a, "onChangeMonthYear");
      b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
    },
    _getNumberOfMonths: function(a) {
      var b = this._get(a, "numberOfMonths");
      return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
    },
    _getMinMaxDate: function(a, b) {
      return this._determineDate(a, this._get(a, b + "Date"), null)
    },
    _getDaysInMonth: function(a, b) {
      return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
    },
    _getFirstDayOfMonth: function(a, b) {
      return new Date(a, b, 1).getDay()
    },
    _canAdjustMonth: function(a, b, c, d) {
      var e = this._getNumberOfMonths(a),
        f = this._daylightSavingAdjust(new Date(c, d + (b < 0 ? b : e[0] * e[1]), 1));
      return b < 0 && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
    },
    _isInRange: function(a, b) {
      var c, d, e = this._getMinMaxDate(a, "min"),
        f = this._getMinMaxDate(a, "max"),
        g = null,
        h = null,
        i = this._get(a, "yearRange");
      return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
    },
    _getFormatConfig: function(a) {
      var b = this._get(a, "shortYearCutoff");
      return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
        shortYearCutoff: b,
        dayNamesShort: this._get(a, "dayNamesShort"),
        dayNames: this._get(a, "dayNames"),
        monthNamesShort: this._get(a, "monthNamesShort"),
        monthNames: this._get(a, "monthNames")
      }
    },
    _formatDate: function(a, b, c, d) {
      b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
      var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
      return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
    }
  }), $.fn.datepicker = function(a) {
    if (!this.length) return this;
    $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick), $.datepicker.initialized = !0), 0 === $("#" + $.datepicker._mainDivId).length && $("body").append($.datepicker.dpDiv);
    var b = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof a || "isDisabled" !== a && "getDate" !== a && "widget" !== a ? "option" === a && 2 === arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b)) : this.each(function() {
      "string" == typeof a ? $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this].concat(b)) : $.datepicker._attachDatepicker(this, a)
    }) : $.datepicker["_" + a + "Datepicker"].apply($.datepicker, [this[0]].concat(b))
  }, $.fn.datepicker.goToSelectedDate = function(a, b) {
    var c = $(a),
      d = $.datepicker._getInst(c[0]);
    b && (b = new Date(b), d.selectedDay = b.getDate(), d.drawMonth = d.selectedMonth = b.getMonth(), d.drawYear = d.selectedYear = b.getFullYear()), $.datepicker._notifyChange(d), $.datepicker._adjustDate(c)
  }, $.datepicker = new d, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.11.4";
  var l = ($.datepicker, "ui-effects-"),
    m = $;
  $.effects = {
      effect: {}
    },
    function(a, b) {
      function c(a, b, c) {
        var d = l[b.type] || {};
        return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
      }

      function d(b) {
        var c = j(),
          d = c._rgba = [];
        return b = b.toLowerCase(), o(i, function(a, e) {
          var f, g = e.re.exec(b),
            h = g && e.parse(g),
            i = e.space || "rgba";
          if (h) return f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1
        }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
      }

      function e(a, b, c) {
        return c = (c + 1) % 1, 6 * c < 1 ? a + (b - a) * c * 6 : 2 * c < 1 ? b : 3 * c < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
      }
      var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        h = /^([\-+])=\s*(\d+\.?\d*)/,
        i = [{
          re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(a) {
            return [a[1], a[2], a[3], a[4]]
          }
        }, {
          re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          parse: function(a) {
            return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
          }
        }, {
          re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
          parse: function(a) {
            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
          }
        }, {
          re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
          parse: function(a) {
            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
          }
        }, {
          re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
          space: "hsla",
          parse: function(a) {
            return [a[1], a[2] / 100, a[3] / 100, a[4]]
          }
        }],
        j = a.Color = function(b, c, d, e) {
          return new a.Color.fn.parse(b, c, d, e)
        },
        k = {
          rgba: {
            props: {
              red: {
                idx: 0,
                type: "byte"
              },
              green: {
                idx: 1,
                type: "byte"
              },
              blue: {
                idx: 2,
                type: "byte"
              }
            }
          },
          hsla: {
            props: {
              hue: {
                idx: 0,
                type: "degrees"
              },
              saturation: {
                idx: 1,
                type: "percent"
              },
              lightness: {
                idx: 2,
                type: "percent"
              }
            }
          }
        },
        l = {
          "byte": {
            floor: !0,
            max: 255
          },
          percent: {
            max: 1
          },
          degrees: {
            mod: 360,
            floor: !0
          }
        },
        m = j.support = {},
        n = a("<p>")[0],
        o = a.each;
      n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
        b.cache = "_" + a, b.props.alpha = {
          idx: 3,
          type: "percent",
          def: 1
        }
      }), j.fn = a.extend(j.prototype, {
        parse: function(e, g, h, i) {
          if (e === b) return this._rgba = [null, null, null, null], this;
          (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
          var l = this,
            m = a.type(e),
            n = this._rgba = [];
          return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
            n[b.idx] = c(e[b.idx], b)
          }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
            e[b.cache] && (l[b.cache] = e[b.cache].slice())
          }) : o(k, function(b, d) {
            var f = d.cache;
            o(d.props, function(a, b) {
              if (!l[f] && d.to) {
                if ("alpha" === a || null == e[a]) return;
                l[f] = d.to(l._rgba)
              }
              l[f][b.idx] = c(e[a], b, !0)
            }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
          }), this) : void 0
        },
        is: function(a) {
          var b = j(a),
            c = !0,
            d = this;
          return o(k, function(a, e) {
            var f, g = b[e.cache];
            return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
              if (null != g[b.idx]) return c = g[b.idx] === f[b.idx]
            })), c
          }), c
        },
        _space: function() {
          var a = [],
            b = this;
          return o(k, function(c, d) {
            b[d.cache] && a.push(c)
          }), a.pop()
        },
        transition: function(a, b) {
          var d = j(a),
            e = d._space(),
            f = k[e],
            g = 0 === this.alpha() ? j("transparent") : this,
            h = g[f.cache] || f.to(g._rgba),
            i = h.slice();
          return d = d[f.cache], o(f.props, function(a, e) {
            var f = e.idx,
              g = h[f],
              j = d[f],
              k = l[e.type] || {};
            null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
          }), this[e](i)
        },
        blend: function(b) {
          if (1 === this._rgba[3]) return this;
          var c = this._rgba.slice(),
            d = c.pop(),
            e = j(b)._rgba;
          return j(a.map(c, function(a, b) {
            return (1 - d) * e[b] + d * a
          }))
        },
        toRgbaString: function() {
          var b = "rgba(",
            c = a.map(this._rgba, function(a, b) {
              return null == a ? b > 2 ? 1 : 0 : a
            });
          return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
        },
        toHslaString: function() {
          var b = "hsla(",
            c = a.map(this.hsla(), function(a, b) {
              return null == a && (a = b > 2 ? 1 : 0), b && b < 3 && (a = Math.round(100 * a) + "%"), a
            });
          return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
        },
        toHexString: function(b) {
          var c = this._rgba.slice(),
            d = c.pop();
          return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
            return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
          }).join("")
        },
        toString: function() {
          return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
      }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
        var b, c, d = a[0] / 255,
          e = a[1] / 255,
          f = a[2] / 255,
          g = a[3],
          h = Math.max(d, e, f),
          i = Math.min(d, e, f),
          j = h - i,
          k = h + i,
          l = .5 * k;
        return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : l <= .5 ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
      }, k.hsla.from = function(a) {
        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
        var b = a[0] / 360,
          c = a[1],
          d = a[2],
          f = a[3],
          g = d <= .5 ? d * (1 + c) : d + c - d * c,
          h = 2 * d - g;
        return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
      }, o(k, function(d, e) {
        var f = e.props,
          g = e.cache,
          i = e.to,
          k = e.from;
        j.fn[d] = function(d) {
          if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
          var e, h = a.type(d),
            l = "array" === h || "object" === h ? d : arguments,
            m = this[g].slice();
          return o(f, function(a, b) {
            var d = l["object" === h ? a : b.idx];
            null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
          }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
        }, o(f, function(b, c) {
          j.fn[b] || (j.fn[b] = function(e) {
            var f, g = a.type(e),
              i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
              j = this[i](),
              k = j[c.idx];
            return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
          })
        })
      }), j.hook = function(b) {
        var c = b.split(" ");
        o(c, function(b, c) {
          a.cssHooks[c] = {
            set: function(b, e) {
              var f, g, h = "";
              if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                  for (g = "backgroundColor" === c ? b.parentNode : b;
                    ("" === h || "transparent" === h) && g && g.style;) try {
                    h = a.css(g, "backgroundColor"), g = g.parentNode
                  } catch (i) {}
                  e = e.blend(h && "transparent" !== h ? h : "_default")
                }
                e = e.toRgbaString()
              }
              try {
                b.style[c] = e
              } catch (i) {}
            }
          }, a.fx.step[c] = function(b) {
            b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
          }
        })
      }, j.hook(g), a.cssHooks.borderColor = {
        expand: function(a) {
          var b = {};
          return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
            b["border" + d + "Color"] = a
          }), b
        }
      }, f = a.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
      }
    }(m),
    function() {
      function a(a) {
        var b, c, d = a.ownerDocument.defaultView ? a.ownerDocument.defaultView.getComputedStyle(a, null) : a.currentStyle,
          e = {};
        if (d && d.length && d[0] && d[d[0]])
          for (c = d.length; c--;) b = d[c], "string" == typeof d[b] && (e[$.camelCase(b)] = d[b]);
        else
          for (b in d) "string" == typeof d[b] && (e[b] = d[b]);
        return e
      }

      function b(a, b) {
        var c, e, f = {};
        for (c in b) e = b[c], a[c] !== e && (d[c] || !$.fx.step[c] && isNaN(parseFloat(e)) || (f[c] = e));
        return f
      }
      var c = ["add", "remove", "toggle"],
        d = {
          border: 1,
          borderBottom: 1,
          borderColor: 1,
          borderLeft: 1,
          borderRight: 1,
          borderTop: 1,
          borderWidth: 1,
          margin: 1,
          padding: 1
        };
      $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(a, b) {
        $.fx.step[b] = function(a) {
          ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (m.style(a.elem, b, a.end), a.setAttr = !0)
        }
      }), $.fn.addBack || ($.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }), $.effects.animateClass = function(d, e, f, g) {
        var h = $.speed(e, f, g);
        return this.queue(function() {
          var e, f = $(this),
            g = f.attr("class") || "",
            i = h.children ? f.find("*").addBack() : f;
          i = i.map(function() {
            var b = $(this);
            return {
              el: b,
              start: a(this)
            }
          }), e = function() {
            $.each(c, function(a, b) {
              d[b] && f[b + "Class"](d[b])
            })
          }, e(), i = i.map(function() {
            return this.end = a(this.el[0]), this.diff = b(this.start, this.end), this
          }), f.attr("class", g), i = i.map(function() {
            var a = this,
              b = $.Deferred(),
              c = $.extend({}, h, {
                queue: !1,
                complete: function() {
                  b.resolve(a)
                }
              });
            return this.el.animate(this.diff, c), b.promise()
          }), $.when.apply($, i.get()).done(function() {
            e(), $.each(arguments, function() {
              var a = this.el;
              $.each(this.diff, function(b) {
                a.css(b, "")
              })
            }), h.complete.call(f[0])
          })
        })
      }, $.fn.extend({
        addClass: function(a) {
          return function(b, c, d, e) {
            return c ? $.effects.animateClass.call(this, {
              add: b
            }, c, d, e) : a.apply(this, arguments)
          }
        }($.fn.addClass),
        removeClass: function(a) {
          return function(b, c, d, e) {
            return arguments.length > 1 ? $.effects.animateClass.call(this, {
              remove: b
            }, c, d, e) : a.apply(this, arguments)
          }
        }($.fn.removeClass),
        toggleClass: function(a) {
          return function(b, c, d, e, f) {
            return "boolean" == typeof c || void 0 === c ? d ? $.effects.animateClass.call(this, c ? {
              add: b
            } : {
              remove: b
            }, d, e, f) : a.apply(this, arguments) : $.effects.animateClass.call(this, {
              toggle: b
            }, c, d, e)
          }
        }($.fn.toggleClass),
        switchClass: function(a, b, c, d, e) {
          return $.effects.animateClass.call(this, {
            add: b,
            remove: a
          }, c, d, e)
        }
      })
    }(),
    function() {
      function a(a, b, c, d) {
        return $.isPlainObject(a) && (b = a, a = a.effect), a = {
          effect: a
        }, null == b && (b = {}), $.isFunction(b) && (d = b, c = null, b = {}), ("number" == typeof b || $.fx.speeds[b]) && (d = c, c = b, b = {}), $.isFunction(c) && (d = c, c = null), b && $.extend(a, b), c = c || b.duration, a.duration = $.fx.off ? 0 : "number" == typeof c ? c : c in $.fx.speeds ? $.fx.speeds[c] : $.fx.speeds._default, a.complete = d || b.complete, a
      }

      function b(a) {
        return !(a && "number" != typeof a && !$.fx.speeds[a]) || ("string" == typeof a && !$.effects.effect[a] || (!!$.isFunction(a) || "object" == typeof a && !a.effect))
      }
      $.extend($.effects, {
        version: "1.11.4",
        save: function(a, b) {
          for (var c = 0; c < b.length; c++) null !== b[c] && a.data(l + b[c], a[0].style[b[c]])
        },
        restore: function(a, b) {
          var c, d;
          for (d = 0; d < b.length; d++) null !== b[d] && (c = a.data(l + b[d]), void 0 === c && (c = ""), a.css(b[d], c))
        },
        setMode: function(a, b) {
          return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
        },
        getBaseline: function(a, b) {
          var c, d;
          switch (a[0]) {
            case "top":
              c = 0;
              break;
            case "middle":
              c = .5;
              break;
            case "bottom":
              c = 1;
              break;
            default:
              c = a[0] / b.height
          }
          switch (a[1]) {
            case "left":
              d = 0;
              break;
            case "center":
              d = .5;
              break;
            case "right":
              d = 1;
              break;
            default:
              d = a[1] / b.width
          }
          return {
            x: d,
            y: c
          }
        },
        createWrapper: function(a) {
          if (a.parent().is(".ui-effects-wrapper")) return a.parent();
          var b = {
              width: a.outerWidth(!0),
              height: a.outerHeight(!0),
              "float": a.css("float")
            },
            c = $("<div></div>").addClass("ui-effects-wrapper").css({
              fontSize: "100%",
              background: "transparent",
              border: "none",
              margin: 0,
              padding: 0
            }),
            d = {
              width: a.width(),
              height: a.height()
            },
            e = document.activeElement;
          try {
            e.id
          } catch (f) {
            e = document.body
          }
          return a.wrap(c), (a[0] === e || $.contains(a[0], e)) && $(e).focus(), c = a.parent(), "static" === a.css("position") ? (c.css({
            position: "relative"
          }), a.css({
            position: "relative"
          })) : ($.extend(b, {
            position: a.css("position"),
            zIndex: a.css("z-index")
          }), $.each(["top", "left", "bottom", "right"], function(c, d) {
            b[d] = a.css(d), isNaN(parseInt(b[d], 10)) && (b[d] = "auto")
          }), a.css({
            position: "relative",
            top: 0,
            left: 0,
            right: "auto",
            bottom: "auto"
          })), a.css(d), c.css(b).show()
        },
        removeWrapper: function(a) {
          var b = document.activeElement;
          return a.parent().is(".ui-effects-wrapper") && (a.parent().replaceWith(a), (a[0] === b || $.contains(a[0], b)) && $(b).focus()), a
        },
        setTransition: function(a, b, c, d) {
          return d = d || {}, $.each(b, function(b, e) {
            var f = a.cssUnit(e);
            f[0] > 0 && (d[e] = f[0] * c + f[1])
          }), d
        }
      }), $.fn.extend({
        effect: function() {
          function b(a) {
            function b() {
              $.isFunction(e) && e.call(d[0]), $.isFunction(a) && a()
            }
            var d = $(this),
              e = c.complete,
              g = c.mode;
            (d.is(":hidden") ? "hide" === g : "show" === g) ? (d[g](), b()) : f.call(d[0], c, b)
          }
          var c = a.apply(this, arguments),
            d = c.mode,
            e = c.queue,
            f = $.effects.effect[c.effect];
          return $.fx.off || !f ? d ? this[d](c.duration, c.complete) : this.each(function() {
            c.complete && c.complete.call(this)
          }) : e === !1 ? this.each(b) : this.queue(e || "fx", b)
        },
        show: function(c) {
          return function(d) {
            if (b(d)) return c.apply(this, arguments);
            var e = a.apply(this, arguments);
            return e.mode = "show", this.effect.call(this, e)
          }
        }($.fn.show),
        hide: function(c) {
          return function(d) {
            if (b(d)) return c.apply(this, arguments);
            var e = a.apply(this, arguments);
            return e.mode = "hide", this.effect.call(this, e)
          }
        }($.fn.hide),
        toggle: function(c) {
          return function(d) {
            if (b(d) || "boolean" == typeof d) return c.apply(this, arguments);
            var e = a.apply(this, arguments);
            return e.mode = "toggle", this.effect.call(this, e)
          }
        }($.fn.toggle),
        cssUnit: function(a) {
          var b = this.css(a),
            c = [];
          return $.each(["em", "px", "%", "pt"], function(a, d) {
            b.indexOf(d) > 0 && (c = [parseFloat(b), d])
          }), c
        }
      })
    }(),
    function() {
      var a = {};
      $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(b, c) {
        a[c] = function(a) {
          return Math.pow(a, b + 2)
        }
      }), $.extend(a, {
        Sine: function(a) {
          return 1 - Math.cos(a * Math.PI / 2)
        },
        Circ: function(a) {
          return 1 - Math.sqrt(1 - a * a)
        },
        Elastic: function(a) {
          return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(a) {
          return a * a * (3 * a - 2)
        },
        Bounce: function(a) {
          for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
          return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
        }
      }), $.each(a, function(a, b) {
        $.easing["easeIn" + a] = b, $.easing["easeOut" + a] = function(a) {
          return 1 - b(1 - a)
        }, $.easing["easeInOut" + a] = function(a) {
          return a < .5 ? b(2 * a) / 2 : 1 - b(a * -2 + 2) / 2
        }
      })
    }();
  $.effects, $.effects.effect.blind = function(a, b) {
    var c, d, e, f = $(this),
      g = /up|down|vertical/,
      h = /up|left|vertical|horizontal/,
      i = ["position", "top", "bottom", "left", "right", "height", "width"],
      j = $.effects.setMode(f, a.mode || "hide"),
      k = a.direction || "up",
      l = g.test(k),
      m = l ? "height" : "width",
      n = l ? "top" : "left",
      o = h.test(k),
      p = {},
      q = "show" === j;
    f.parent().is(".ui-effects-wrapper") ? $.effects.save(f.parent(), i) : $.effects.save(f, i), f.show(), c = $.effects.createWrapper(f).css({
      overflow: "hidden"
    }), d = c[m](), e = parseFloat(c.css(n)) || 0, p[m] = q ? d : 0, o || (f.css(l ? "bottom" : "right", 0).css(l ? "top" : "left", "auto").css({
      position: "absolute"
    }), p[n] = q ? e : d + e), q && (c.css(m, 0), o || c.css(n, e + d)), c.animate(p, {
      duration: a.duration,
      easing: a.easing,
      queue: !1,
      complete: function() {
        "hide" === j && f.hide(), $.effects.restore(f, i), $.effects.removeWrapper(f), b()
      }
    })
  }, $.effects.effect.fade = function(a, b) {
    var c = $(this),
      d = $.effects.setMode(c, a.mode || "toggle");
    c.animate({
      opacity: d
    }, {
      queue: !1,
      duration: a.duration,
      easing: a.easing,
      complete: b
    })
  }, $.effects.effect.fold = function(a, b) {
    var c, d, e = $(this),
      f = ["position", "top", "bottom", "left", "right", "height", "width"],
      g = $.effects.setMode(e, a.mode || "hide"),
      h = "show" === g,
      i = "hide" === g,
      j = a.size || 15,
      k = /([0-9]+)%/.exec(j),
      l = !!a.horizFirst,
      m = h !== l,
      n = m ? ["width", "height"] : ["height", "width"],
      o = a.duration / 2,
      p = {},
      q = {};
    $.effects.save(e, f), e.show(), c = $.effects.createWrapper(e).css({
      overflow: "hidden"
    }), d = m ? [c.width(), c.height()] : [c.height(), c.width()], k && (j = parseInt(k[1], 10) / 100 * d[i ? 0 : 1]), h && c.css(l ? {
      height: 0,
      width: j
    } : {
      height: j,
      width: 0
    }), p[n[0]] = h ? d[0] : j, q[n[1]] = h ? d[1] : 0, c.animate(p, o, a.easing).animate(q, o, a.easing, function() {
      i && e.hide(), $.effects.restore(e, f), $.effects.removeWrapper(e), b()
    })
  }, $.effects.effect.highlight = function(a, b) {
    var c = $(this),
      d = ["backgroundImage", "backgroundColor", "opacity"],
      e = $.effects.setMode(c, a.mode || "show"),
      f = {
        backgroundColor: c.css("backgroundColor")
      };
    "hide" === e && (f.opacity = 0), $.effects.save(c, d), c.show().css({
      backgroundImage: "none",
      backgroundColor: a.color || "#ffff99"
    }).animate(f, {
      queue: !1,
      duration: a.duration,
      easing: a.easing,
      complete: function() {
        "hide" === e && c.hide(), $.effects.restore(c, d), b()
      }
    })
  }, $.effects.effect.size = function(a, b) {
    var c, d, e, f = $(this),
      g = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
      h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
      i = ["width", "height", "overflow"],
      j = ["fontSize"],
      k = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
      l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
      m = $.effects.setMode(f, a.mode || "effect"),
      n = a.restore || "effect" !== m,
      o = a.scale || "both",
      p = a.origin || ["middle", "center"],
      q = f.css("position"),
      r = n ? g : h,
      s = {
        height: 0,
        width: 0,
        outerHeight: 0,
        outerWidth: 0
      };
    "show" === m && f.show(), c = {
        height: f.height(),
        width: f.width(),
        outerHeight: f.outerHeight(),
        outerWidth: f.outerWidth()
      }, "toggle" === a.mode && "show" === m ? (f.from = a.to || s, f.to = a.from || c) : (f.from = a.from || ("show" === m ? s : c), f.to = a.to || ("hide" === m ? s : c)), e = {
        from: {
          y: f.from.height / c.height,
          x: f.from.width / c.width
        },
        to: {
          y: f.to.height / c.height,
          x: f.to.width / c.width
        }
      }, "box" !== o && "both" !== o || (e.from.y !== e.to.y && (r = r.concat(k), f.from = $.effects.setTransition(f, k, e.from.y, f.from), f.to = $.effects.setTransition(f, k, e.to.y, f.to)), e.from.x !== e.to.x && (r = r.concat(l), f.from = $.effects.setTransition(f, l, e.from.x, f.from), f.to = $.effects.setTransition(f, l, e.to.x, f.to))), "content" !== o && "both" !== o || e.from.y !== e.to.y && (r = r.concat(j).concat(i), f.from = $.effects.setTransition(f, j, e.from.y, f.from), f.to = $.effects.setTransition(f, j, e.to.y, f.to)),
      $.effects.save(f, r), f.show(), $.effects.createWrapper(f), f.css("overflow", "hidden").css(f.from), p && (d = $.effects.getBaseline(p, c), f.from.top = (c.outerHeight - f.outerHeight()) * d.y, f.from.left = (c.outerWidth - f.outerWidth()) * d.x, f.to.top = (c.outerHeight - f.to.outerHeight) * d.y, f.to.left = (c.outerWidth - f.to.outerWidth) * d.x), f.css(f.from), "content" !== o && "both" !== o || (k = k.concat(["marginTop", "marginBottom"]).concat(j), l = l.concat(["marginLeft", "marginRight"]), i = g.concat(k).concat(l), f.find("*[width]").each(function() {
        var b = $(this),
          c = {
            height: b.height(),
            width: b.width(),
            outerHeight: b.outerHeight(),
            outerWidth: b.outerWidth()
          };
        n && $.effects.save(b, i), b.from = {
          height: c.height * e.from.y,
          width: c.width * e.from.x,
          outerHeight: c.outerHeight * e.from.y,
          outerWidth: c.outerWidth * e.from.x
        }, b.to = {
          height: c.height * e.to.y,
          width: c.width * e.to.x,
          outerHeight: c.height * e.to.y,
          outerWidth: c.width * e.to.x
        }, e.from.y !== e.to.y && (b.from = $.effects.setTransition(b, k, e.from.y, b.from), b.to = $.effects.setTransition(b, k, e.to.y, b.to)), e.from.x !== e.to.x && (b.from = $.effects.setTransition(b, l, e.from.x, b.from), b.to = $.effects.setTransition(b, l, e.to.x, b.to)), b.css(b.from), b.animate(b.to, a.duration, a.easing, function() {
          n && $.effects.restore(b, i)
        })
      })), f.animate(f.to, {
        queue: !1,
        duration: a.duration,
        easing: a.easing,
        complete: function() {
          0 === f.to.opacity && f.css("opacity", f.from.opacity), "hide" === m && f.hide(), $.effects.restore(f, r), n || ("static" === q ? f.css({
            position: "relative",
            top: f.to.top,
            left: f.to.left
          }) : $.each(["top", "left"], function(a, b) {
            f.css(b, function(b, c) {
              var d = parseInt(c, 10),
                e = a ? f.to.left : f.to.top;
              return "auto" === c ? e + "px" : d + e + "px"
            })
          })), $.effects.removeWrapper(f), b()
        }
      })
  }, $.effects.effect.scale = function(a, b) {
    var c = $(this),
      d = $.extend(!0, {}, a),
      e = $.effects.setMode(c, a.mode || "effect"),
      f = parseInt(a.percent, 10) || (0 === parseInt(a.percent, 10) ? 0 : "hide" === e ? 0 : 100),
      g = a.direction || "both",
      h = a.origin,
      i = {
        height: c.height(),
        width: c.width(),
        outerHeight: c.outerHeight(),
        outerWidth: c.outerWidth()
      },
      j = {
        y: "horizontal" !== g ? f / 100 : 1,
        x: "vertical" !== g ? f / 100 : 1
      };
    d.effect = "size", d.queue = !1, d.complete = b, "effect" !== e && (d.origin = h || ["middle", "center"], d.restore = !0), d.from = a.from || ("show" === e ? {
      height: 0,
      width: 0,
      outerHeight: 0,
      outerWidth: 0
    } : i), d.to = {
      height: i.height * j.y,
      width: i.width * j.x,
      outerHeight: i.outerHeight * j.y,
      outerWidth: i.outerWidth * j.x
    }, d.fade && ("show" === e && (d.from.opacity = 0, d.to.opacity = 1), "hide" === e && (d.from.opacity = 1, d.to.opacity = 0)), c.effect(d)
  }, $.effects.effect.slide = function(a, b) {
    var c, d = $(this),
      e = ["position", "top", "bottom", "left", "right", "width", "height"],
      f = $.effects.setMode(d, a.mode || "show"),
      g = "show" === f,
      h = a.direction || "left",
      i = "up" === h || "down" === h ? "top" : "left",
      j = "up" === h || "left" === h,
      k = {};
    $.effects.save(d, e), d.show(), c = a.distance || d["top" === i ? "outerHeight" : "outerWidth"](!0), $.effects.createWrapper(d).css({
      overflow: "hidden"
    }), g && d.css(i, j ? isNaN(c) ? "-" + c : -c : c), k[i] = (g ? j ? "+=" : "-=" : j ? "-=" : "+=") + c, d.animate(k, {
      queue: !1,
      duration: a.duration,
      easing: a.easing,
      complete: function() {
        "hide" === f && d.hide(), $.effects.restore(d, e), $.effects.removeWrapper(d), b()
      }
    })
  }, $.effects.effect.transfer = function(a, b) {
    var c = $(this),
      d = $(a.to),
      e = "fixed" === d.css("position"),
      f = $("body"),
      g = e ? f.scrollTop() : 0,
      h = e ? f.scrollLeft() : 0,
      i = d.offset(),
      j = {
        top: i.top - g,
        left: i.left - h,
        height: d.innerHeight(),
        width: d.innerWidth()
      },
      k = c.offset(),
      l = $("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(a.className).css({
        top: k.top - g,
        left: k.left - h,
        height: c.innerHeight(),
        width: c.innerWidth(),
        position: e ? "fixed" : "absolute"
      }).animate(j, a.duration, a.easing, function() {
        l.remove(), b()
      })
  }
}), define("search-calendar-model", ["foobunny", "i18n"], function(a, b) {
  "use strict";
  var c = a.BaseModel.extend({
    defaults: function() {
      var a = b.get("search.datepicker.dayNamesShort"),
        c = b.get("search.datepicker.monthNamesShort"),
        d = b.get("search.datepicker.max.selection.range"),
        e = b.get("search.datepicker.plugin.dateFormat"),
        f = b.get("search.datepicker.firstDay");
      return {
        minDate: new Date,
        maxDate: d,
        showOtherMonths: !0,
        selectOtherMonths: !0,
        showWeek: !1,
        duration: "fast",
        dateFormat: e,
        dayNamesMin: a.split(","),
        monthNamesShort: c.split(","),
        firstDay: f
      }
    }
  });
  return c
}), define("search-datepicker-model", ["foobunny", "i18n"], function(a, b) {
  "use strict";
  var c = a.BaseModel.extend({
    defaults: function() {
      var a = b.get("search.datepicker.selectDateRange");
      return {
        heading: a,
        isDateSelected: !1,
        eventStartDate: "",
        eventEndDate: "",
        showDatepicker: "hide"
      }
    },
    reset: function() {
      this.set(this.defaults())
    },
    silentReset: function() {
      this.setSilent(this.defaults())
    }
  });
  return c
}), define("search-calendar-view", ["foobunny", "search-calendar-model", "moment", "calendar-helper", "i18n", "jquery-ui-custom"], function(a, b, c, d) {
  "use strict";
  var e = a.BaseView.extend({
    el: "#datepicker-calendar-container",
    template: "datepicker-calendar",
    datepickerOptions: {},
    initialize: function(a) {
      this.model = new b, a && this.model.set(_.extend(this.model.toJSON(), a)), this.subscribeEvent("calendarView:resetMinDate", this.resetMinDate), this.subscribeEvent("calendarView:showSelectDate", this.showSelectDate)
    },
    afterRender: function() {
      this.$dpContainer = $("#calendar_container"), "display" === this.parentView.model.get("showDatepicker") && this.showCalendar()
    },
    showCalendar: function() {
      var b = d.resetHoursOnDate(this.parentView.model.get("eventStartDate")),
        c = d.resetHoursOnDate(this.parentView.model.get("eventEndDate"));
      b = b ? a.utilsDate.getDate(b) : "", c = c ? a.utilsDate.getDate(c) : "", this.datepickerOptions = {
        onSelect: function(e) {
          var f, g;
          e && (g = {}, f = d.parseDateStringToObject(e), this.parentView.$dpDateRangeFromTab.hasClass("selected") ? (c && c.getTime() < f.getTime() && (g.eventEndDate = "", c = ""), b = f, g.eventStartDate = a.utilsDate.yyyymmddhhmmss(f)) : (f.setHours(23, 59, 59), g.eventEndDate = a.utilsDate.yyyymmddhhmmss(f), c = f), g = d.cleanDateString(g), b && c && (g.isDateSelected = !0, g.showDatepicker = "hide", this.disposeCalendarView(), this.parentView.publishDisplayStatus("hide")), this.parentView.model.set(g))
        }.bind(this),
        beforeShowDay: function(a) {
          var d = b ? b.getTime() : "",
            e = c ? c.getTime() : "";
          if (!d && !e) return [!0, "", ""];
          switch (a = a ? a.getTime() : a, !0) {
            case !(!d || !e || d === e):
              switch (!0) {
                case a === d:
                  return [!0, "eventStartDate", ""];
                case a && a > d && a < e:
                  return [!0, "dateInSelectedRange", ""];
                case a === e:
                  return [!0, "eventEndDate", ""];
                default:
                  return [!0, "", ""]
              }
            case !(!d || !e || d !== e):
            case !!(d && !e || !d && e):
              return a === d || a === e ? [!0, "startDateSelected", ""] : [!0, "", ""];
            default:
              return [!0, "", ""]
          }
        }.bind(this)
      }, b && (this.parentView.$dpDateRangeFromTab.hasClass("selected") ? this.datepickerOptions.defaultDate = b : this.datepickerOptions.minDate = b), this.datepickerOptions = this.mergeDatePickerOptions(this.datepickerOptions), this.renderCalendarWithOption(this.datepickerOptions)
    },
    mergeDatePickerOptions: function(a) {
      return _.extend(this.model.toJSON(), a)
    },
    resetMinDate: function() {
      var b;
      this.$dpContainer && (this.parentView.$dpDateRangeFromTab.hasClass("selected") ? this.$dpContainer.datepicker("option", "minDate", d.parseDateStringToObject(a.utilsDate.today())) : (b = this.parentView.model.get("eventStartDate"), b = b ? d.parseDateStringToObject(b) : d.parseDateStringToObject(a.utilsDate.today()), this.$dpContainer.datepicker("option", "minDate", b)))
    },
    showSelectDate: function(a) {
      a = d.parseDateStringToObject(a), this.$dpContainer.datepicker.goToSelectedDate(this.$dpContainer, a)
    },
    renderCalendarWithOption: function(a) {
      a = a || {}, this.$dpContainer && this.$dpContainer.datepicker(a)
    },
    disposeCalendarView: function() {
      this.$dpContainer && this.$dpContainer.hasClass("hasDatepicker") && this.$dpContainer.datepicker("destroy")
    }
  });
  return e
}), define("search-datepicker-view", ["foobunny", "search-datepicker-model", "search-calendar-model", "search-calendar-view", "moment", "i18n", "calendar-helper", "application_helper", "jquery-ui-custom"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = a.BaseView.extend({
    template: "search-datepicker-component",
    events: {
      "click #a-click-show-calendar": "showCalendarView",
      "click .close-options": "closeCalendarView",
      "click .datepicker-heading-container .up-arrow": "closeCalendarView",
      "click #datepicker-tab-from": "selectDateRangeFromTab",
      "click #datepicker-tab-to": "selectDateRangeToTab",
      "click .datepicker-reset-button-container": "reset",
      "click #datepicker-clear-button": "clearDateRangeSelection"
    },
    modelEvents: {
      change: "onDatePickerModelChange"
    },
    initialize: function(c) {
      var e, f;
      f = $("body"), this.model = new b(c.defaultValues), c.updateBrowseCache && (this.browseDateFilterCache = new a.Cache({
        type: "session",
        namespace: "app"
      })), c.disableSessionCache || (this.dateFilterCache = new a.Cache({
        type: "session",
        namespace: "date-filter"
      }), e = this.dateFilterCache.get("dateFilterCacheSettings")), e ? ($.extend(e, c.defaultValues), e = this.cacheCrossCompatibilityCheck(e), this.setDateFilterFromCache(e)) : this.publishDateRangeUpdateEvent(), c.headingText && this.model.set("heading", c.headingText), this.subViews = {
        calendarView: new d(c.calendarOptions)
      }, this.subscribeEvent("datepickerComponent:clear", this.reset), this.options.isSubComponent && this.subscribeEvent("datepickerComponent:show", this.showCalendarView), f.on("click", function(a) {
        var b, c = this.model.get("showDatepicker");
        "display" === c && (b = $(a.target).closest("#datepicker-component-container").length || $(a.target).closest(".ui-datepicker-header").length, b || this.closeCalendarView())
      }.bind(this)), f.on("keydown", this.dateFilterKeyDown.bind(this))
    },
    context: function() {
      var a, b, c, d, e, h, i;
      return a = this.model.get("eventStartDate"), b = this.model.get("eventEndDate"), i = this.options.isSubComponent, a && (c = g.formatISODateToLocaleDatePattern(a, f.get("search.datepicker.mainDateDisplayFormat")), e = g.formatISODateToLocaleDatePattern(a, f.get("search.datepicker.tabDateDisplayFormat"))), b && (d = g.formatISODateToLocaleDatePattern(b, f.get("search.datepicker.mainDateDisplayFormat")), h = g.formatISODateToLocaleDatePattern(b, f.get("search.datepicker.tabDateDisplayFormat"))), {
        mainEventStartDate: c,
        mainEventEndDate: d,
        tabEventStartDate: e,
        tabEventEndDate: h,
        isSubComponent: i
      }
    },
    afterRender: function() {
      var a = this.model.get("eventStartDate"),
        b = this.model.get("eventEndDate");
      this.$body = $("body"), this.$dpDateRangeFromTab = $("#datepicker-tab-from"), this.$dpDateRangeToTab = $("#datepicker-tab-to"), this.$tabPointer = $(".tab-pointer-container"), !a || a && b ? this.selectDateRangeFromTab() : this.selectDateRangeToTab()
    },
    onDatePickerModelChange: function(a) {
      var b, c, d, e;
      a && a.changed && (this.showAnimation && !a.changed.hasOwnProperty("showDatepicker") && (this.model.setSilent("showAnimation", ""), this.showAnimation = !1), (a.changed.hasOwnProperty("eventStartDate") || a.changed.hasOwnProperty("eventEndDate")) && this.options.pageName && (e = {
        appInteractionType: "Calendar Picker",
        appInteractionPage: this.options.pageName
      }, a.changed.eventStartDate ? e.appInteraction = "calendarPicker: from:" + g.formatISODateToLocaleDatePattern(a.changed.eventStartDate, f.get("search.datepicker.trackingDateFormat")) : a.changed.eventEndDate ? e.appInteraction = "calendarPicker: to:" + g.formatISODateToLocaleDatePattern(a.changed.eventEndDate, f.get("search.datepicker.trackingDateFormat")) : e.appInteraction = "calendarPicker: All dates", h.track(e, null, !1)), (a.changed.hasOwnProperty("showDatepicker") || a.changed.hasOwnProperty("eventStartDate") && a.changed.hasOwnProperty("eventEndDate")) && (a.changed.hasOwnProperty("eventStartDate") || a.changed.hasOwnProperty("eventEndDate")) && (b = this.model.get("eventStartDate"), c = this.model.get("eventEndDate"), d = this.model.get("showDatepicker"), (b && c || !b && !c) && ("hide" === d && this.enableBodyScroll(), this.publishDateRangeUpdateEvent()))), this.render()
    },
    setDateFilterFromCache: function(a) {
      this.model.set(a), this.publishDateRangeUpdateEvent({
        skipUpdateDatePickerCache: !0
      })
    },
    showCalendarView: function() {
      this.options.isSubComponent && this.publishDisplayStatus("display"), this.disableBodyScroll(), this.showAnimation = !0, this.model.set({
        showDatepicker: "display",
        showAnimation: "show"
      })
    },
    closeCalendarView: function() {
      var b, c = this.model.get("eventStartDate"),
        d = this.model.get("eventEndDate"),
        f = {},
        h = this.model.get("showDatepicker");
      c && !d ? (c = g.parseDateStringToObject(c), c = e(c).format("DD-MM-YYYY"), b = e(c, "DD-MM-YYYY").add("days", 30), b = g.parseDateStringToObject(b.toISOString()), b.setHours(23, 59, 59), d = a.utilsDate.yyyymmddhhmmss(b), d = g.cleanDateString(d), f.eventEndDate = d, f.isDateSelected = !0) : d && !c && (c = a.utilsDate.yyyymmddhhmmss(new Date), c = g.resetHoursOnDateWithoutSecond(c), c = g.cleanDateString(c), f.eventStartDate = c, f.isDateSelected = !0), this.enableBodyScroll(), f.showDatepicker = "hide", this.options.isSubComponent && "hide" !== h && this.publishDisplayStatus("hide"), this.model.set(f)
    },
    disableBodyScroll: function() {
      this.$body.addClass("date-filter-no-scroll")
    },
    enableBodyScroll: function() {
      this.$body.removeClass("date-filter-no-scroll")
    },
    publishDateRangeUpdateEvent: function(a) {
      var b;
      a = a || {}, a.skipUpdateDatePickerCache || this.updateDatePickerCache(), this.options.disableDateUpdatePublish || (b = {
        allDates: !this.model.get("isDateSelected"),
        eventStartDate: this.model.get("eventStartDate"),
        eventEndDate: this.model.get("eventEndDate")
      }, this.publishEvent("date-filter:updateDateRange", b)), this.options.isSubComponent && (b = {
        allDates: !this.model.get("isDateSelected"),
        eventStartDate: this.model.get("eventStartDate"),
        eventEndDate: this.model.get("eventEndDate"),
        selection: "custom_date_range"
      }, this.publishEvent("date-calendar:updateDateRange", b))
    },
    publishDisplayStatus: function(a) {
      this.options.isSubComponent && a && this.publishEvent("date-calendar:displayStatus", {
        displayStatus: a
      })
    },
    cacheCrossCompatibilityCheck: function(a) {
      return !a || a.allDates !== !0 && "undefined" != typeof a.isDateSelected || !a.eventStartDate && !a.eventEndDate || (delete a.eventStartDate, delete a.eventEndDate), a
    },
    updateDatePickerCache: function() {
      var a, b, c = this.model.get("eventStartDate"),
        d = this.model.get("eventEndDate");
      this.dateFilterCache && (a = this.model.get("isDateSelected"), b = {
        allDates: !a,
        isDateSelected: a,
        eventStartDate: c,
        eventEndDate: d,
        prefDate: a ? "custom_date_range" : "all-dates"
      }, this.dateFilterCache.set("dateFilterCacheSettings", b)), this.browseDateFilterCache && (c && d ? (this.browseDateFilterCache.set("startDate", c), this.browseDateFilterCache.set("endDate", d)) : (this.browseDateFilterCache.remove("startDate"), this.browseDateFilterCache.remove("endDate")))
    },
    selectDateRangeFromTab: function(a) {
      this.$dpDateRangeFromTab.hasClass("selected") || (this.$dpDateRangeFromTab.addClass("selected"), this.$dpDateRangeToTab.removeClass("selected"), this.$tabPointer.toggleClass("to", 300), a && this.publishEvent("calendarView:resetMinDate"))
    },
    selectDateRangeToTab: function(a) {
      this.$dpDateRangeToTab.hasClass("selected") || (this.$dpDateRangeFromTab.removeClass("selected"), this.$dpDateRangeToTab.addClass("selected"), this.$tabPointer.toggleClass("to", 300), a && this.publishEvent("calendarView:resetMinDate")), this.model.get("eventEndDate") && this.publishEvent("calendarView:showSelectDate", this.model.get("eventEndDate"))
    },
    dateFilterKeyDown: function(a) {
      switch (a.keyCode) {
        case 27:
          this.closeCalendarView()
      }
    },
    reset: function(a) {
      a && a.silent ? (this.model.silentReset(), this.render()) : this.model.reset()
    },
    clearDateRangeSelection: function() {
      this.model.set({
        isDateSelected: !1,
        eventStartDate: "",
        eventEndDate: ""
      })
    }
  });
  return i
}), define("search-geolocation-filter", ["component", "search-geolocation-filter-view", "i18n", "search-geolocation-filter-i18n-props", "underscore"], function(a, b, c, d, e) {
  "use strict";
  var f = a.extend({
    name: "geolocation-filter",
    init: function() {
      var a = this;
      c.merge(d);
      var f = {
        coordinates: !1,
        showLocationIcon: !0,
        labelNear: c.get("search.geolocation-filter.top-near.text"),
        labelIn: c.get("search.geolocation-filter.top-in.text"),
        defaultLinkText: c.get("search.geolocation-filter.defaultLink.text"),
        currentLocationText: c.get("search.geolocation-filter.currentlocation.text")
      };
      "undefined" == typeof a.options.attributes && (a.options.attributes = {}), a.view = new b({
        el: a.options.element,
        attributes: e.defaults(a.options.attributes, f)
      })
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose()
    }
  });
  return f
}), define("search-geolocation-filter-model", ["jquery", "foobunny", "global_context", "sh_global_registry"], function(a, b, c, d) {
  "use strict";
  var e = b.BaseModel.extend({
    supportedCountries: "US |CA |GB |IE |FR |AU |ES |NL |BE |DE |CH |IT |SE |MX",
    initialize: function(a) {
      a.attributes && this.set({
        defaultLinkText: a.attributes.defaultLinkText,
        showLocationIcon: a.attributes.showLocationIcon,
        currentLocationText: a.attributes.currentLocationText
      })
    },
    url: function() {
      var b, c = "/shape/search/locations/v3/?",
        e = this.get("urlParams"),
        f = this.get("searchTerm");
      return "undefined" != typeof f && (e.q = f), "undefined" == typeof e.ipDetect && (b = "gs.features." + d.getSiteId() + ".common.geo.supported.countries", e.country = d.getFeatureValue(b, "string") || this.supportedCountries), "undefined" != typeof e.point ? (e.sort = "distance asc", e.radius = "3000") : "undefined" == typeof e.ipDetect && (e.sort = "population desc"), e.unit = "mi", c + decodeURIComponent(a.param(e))
    }
  });
  return e
}), define("search-geolocation-filter-results-view", ["foobunny", "sh_global_registry", "global_context", "underscore"], function(a, b, c, d) {
  "use strict";
  var e = a.BaseView.extend({
    template: "geolocation-filter_results",
    context: function() {
      var a, c, e, f, g, h, i = b.getSiteId();
      return a = this.parentView.model.toJSON(), a && (c = "gs.features." + i + ".common.geo.showState.countries", e = b.getFeatureValue(c, "string"), e ? (f = e.split(","), d.each(a.locations, function(a, b, c) {
        d.contains(f, a.countryCode) ? (c[b].hideState = !1, c[b].showCountry = !1) : (c[b].hideState = !0, c[b].showCountry = !0)
      })) : (h = "gs.features." + i + ".common.geo.showCountry", g = "gs.features." + i + ".common.geo.hideState", a.hideState = b.getFeatureValue(g, "boolean"), a.showCountry = b.getFeatureValue(h, "boolean"))), a
    }
  });
  return e
}), define("search-geolocation-filter-view", ["foobunny", "underscore", "search-geolocation-filter-model", "search-geolocation-filter-results-view", "application_helper", "loggerUtil", "i18n", "sh_global_registry"], function(a, b, c, d, e, f, g, h) {
  "use strict";
  var i = a.BaseView.extend({
    template: "geolocation-filter",
    events: {
      "keydown .geo-inputbox": "onInputBoxKeyDown",
      "keyup .geo-inputbox": "onInputBoxKeyUp",
      "click .geo-display": "onLocationTextClick",
      "click .down-arrow": "onLocationTextClick",
      "click .geo-close-action": "closeGeoPopup",
      "click .geo-clear-action": "clearGeoInput",
      "click .geo-current-location": "onCurrentLocationClick",
      "click li": "onCityClick",
      "mouseenter li, .geo-current-location": "highlightOption",
      "mouseleave li, .geo-current-location": "unhighlightOptions"
    },
    modelEvents: {
      "change:searchTerm": "triggerSearchBasedOnSearchTerm",
      "change:citySelected": "citySelectedChanged"
    },
    initialize: function(e) {
      this.GEO_DETECT_BY_IP = 2, this.GEO_DETECT_BY_CACHE = 1, this.GEO_DETECT_BY_COORD = 0, this.selectedIndex = -1, this.subscribeEvent({
        "geolocation-filter:getCurrentLocation": this.getCurrentLocation,
        "geolocation-filter:updateGeoLabel": b.bind(function(a) {
          this.updateGeoLabel(a), this.render()
        }, this)
      }), this.options = e.attributes, this.subViews = {
        geolocationFilterResultsView: new d({
          el: ".geo-city-list"
        })
      }, this.model = new c({
        fetchOnInitialize: !1,
        attributes: e.attributes
      }), "undefined" != typeof navigator.geolocation && "https:" !== window.location.protocol ? this.model.set("showCurrentLocationAction", !1) : this.model.set("showCurrentLocationAction", !0), this.geolocationFilterCache = new a.Cache({
        type: "local",
        namespace: "app",
        expires: 15552e6
      }), this.model.set("label", this.options.labelNear), this.options.coordinates && "undefined" != typeof this.options.coordinates ? this.updateGeoByCoord() : this.getfromGeoCache("coordinates") && this.getfromGeoCache("city") && this.getfromGeoCache("stateCode") && this.getfromGeoCache("country") ? this.updateGeoFromCache() : this.updateGeoByIp(), $(document).click(function(a) {
        $(a.target).closest("#geo-content").length || this.closeGeoPopup()
      }.bind(this))
    },
    citySelectedChanged: function() {
      this.updateGeoLabel(this.options.labelNear)
    },
    updateGeoLabel: function(a) {
      "undefined" != typeof a && this.model.set("label", a)
    },
    updateGeoByCoord: function() {
      this.model.set({
        urlParams: {
          point: this.options.coordinates,
          row: 1
        }
      });
      var a = this.model.fetch();
      this.geolocationFilterCallback(a, this.GEO_DETECT_BY_COORD)
    },
    updateGeoByIp: function() {
      this.model.set("label", this.options.labelIn), this.model.set("urlParams", {
        ipDetect: !0
      });
      var a = this.model.fetch();
      this.geolocationFilterCallback(a, this.GEO_DETECT_BY_IP)
    },
    updateGeoFromCache: function() {
      this.model.set({
        citySelected: this.getCityString(this.getfromGeoCache("city"), this.getfromGeoCache("stateCode"), this.getfromGeoCache("country"), this.getfromGeoCache("countryCode")),
        point: this.getfromGeoCache("coordinates")
      })
    },
    geolocationFilterCallback: function(a, b) {
      a.done(function(a) {
        if (a && a.locations && a.locations[0]) {
          var c = {
            latitude: a.locations[0].latitude,
            longitude: a.locations[0].longitude
          };
          this.storeInGeoCache("city", a.locations[0].city), this.storeInGeoCache("stateCode", a.locations[0].stateCode), this.storeInGeoCache("country", a.locations[0].country), this.storeInGeoCache("countryCode", a.locations[0].countryCode), this.storeInGeoCache("coordinates", c.latitude.toString() + "," + c.longitude.toString()), this.model.set({
            citySelected: this.getCityString(a.locations[0].city, a.locations[0].stateCode, a.locations[0].country, a.locations[0].countryCode),
            point: c.latitude.toString() + "," + c.longitude.toString()
          }), this.publishEvent("geolocation-filter:updatedCurrentLocation", {
            point: c,
            city: a.locations[0].city,
            stateCode: a.locations[0].stateCode,
            country: a.locations[0].country
          })
        } else b === this.GEO_DETECT_BY_COORD ? this.getfromGeoCache("coordinates") && this.getfromGeoCache("city") && this.getfromGeoCache("stateCode") && this.getfromGeoCache("country") ? this.updateGeoFromCache() : this.updateGeoByIp() : b === this.GEO_DETECT_BY_IP && this.model.set("label", this.options.labelIn);
        this.render()
      }.bind(this)), a.fail(function(a) {
        f.error("geolocation-filter:LocationApiError", a, {
          _message: "Error while trying to get user location",
          geoDetectionMethod: b
        }), window.Bugsnag.metaData = {
          error: a
        }, window.Bugsnag.notify("geolocation-filter:LocationApi", "Error while trying to get user location"), window.Bugsnag.metaData = {}, b === this.GEO_DETECT_BY_COORD ? this.getfromGeoCache("coordinates") && this.getfromGeoCache("city") && this.getfromGeoCache("stateCode") && this.getfromGeoCache("country") ? this.updateGeoFromCache() : this.updateGeoByIp() : this.model.set("label", this.options.labelIn)
      }.bind(this))
    },
    getfromGeoCache: function(a) {
      return this.geolocationFilterCache.get(a)
    },
    storeInGeoCache: function(a, b) {
      this.geolocationFilterCache.set(a, b)
    },
    getCityString: function(a, c, d, e) {
      var f, g, i, j, k, l, m, n = a,
        o = h.getSiteId();
      return f = "gs.features." + o + ".common.geo.showState.countries", g = h.getFeatureValue(f, "string"), g ? (i = g.split(","), i && b.contains(i, e) ? (l = !1, m = !1) : (l = !0, m = !0)) : (k = "gs.features." + o + ".common.geo.showCountry", j = "gs.features." + o + ".common.geo.hideState", l = h.getFeatureValue(j, "boolean"), m = h.getFeatureValue(k, "boolean")), !l && c && (n = n + ", " + c.toUpperCase()), m && d && (n = n + ", " + d), n
    },
    getLocationFromHTML5Api: function() {
      var b = a.utils.deferred(),
        c = function(a) {
          var c = {
            latitude: a.coords.latitude,
            longitude: a.coords.longitude
          };
          b.resolve(c)
        },
        d = function(a) {
          b.reject(a)
        };
      return !!navigator.geolocation && (navigator.geolocation.getCurrentPosition(c, d, {
        enableHighAccuracy: !1,
        timeout: 5e3,
        maximumAge: 216e5
      }), b.promise())
    },
    closeGeoPopup: function() {
      this.enableBodyScroll(), this.model.set("showPopup", !1), this.render(), this.selectedIndex = -1
    },
    clearGeoInput: function() {
      this.model.set({
        searchTerm: void 0,
        locations: []
      }), this.render()
    },
    getCurrentLocation: function() {
      var a = this.getLocationFromHTML5Api();
      return a !== !1 && (a.done(function(a) {
        this.storeInGeoCache("coordinates", a.latitude + "," + a.longitude);
        var b = {
          point: a.latitude + "," + a.longitude
        };
        this.model.set({
          urlParams: b,
          searchTerm: void 0
        });
        var c = this.model.fetch();
        c.done(function() {
          var b = SH.OMN.pageName,
            c = SH.OMN.pageName,
            d = this.model.get("locations");
          d.length > 0 && d[0] && (this.storeInGeoCache("city", d[0].city), this.storeInGeoCache("stateCode", d[0].stateCode), this.storeInGeoCache("country", d[0].country), this.storeInGeoCache("countryCode", d[0].countryCode), this.model.set("citySelected", this.getCityString(d[0].city, d[0].stateCode, d[0].country, d[0].countryCode)), this.closeGeoPopup(), this.render(), this.publishEvent("geolocation-filter:updatedCurrentLocation", {
            point: a,
            city: d[0].city,
            stateCode: d[0].stateCode,
            country: d[0].country
          }), e.track({
            pageName: c,
            city: this.getCityString(d[0].city, d[0].stateCode, d[0].country, d[0].countryCode),
            appInteraction: "UE: Location Suggestions: Current location",
            appInteractionType: "UE: Location Suggestions",
            appInteractionPage: b
          }, null, !1))
        }.bind(this)), c.fail(function(b) {
          f.error("LocationApiError", b, {
            _message: "Location API Error while trying to get user current location from point"
          }), window.Bugsnag.metaData = {
            error: b,
            point: a
          }, window.Bugsnag.notify("LocationApi", "Error while trying to get user current location from point"), window.Bugsnag.metaData = {}
        })
      }.bind(this)), void a.fail(function(a) {
        this.$el.find(".spinner").addClass("hide"), this.$el.find(".geo-current-location a").addClass("disabled");
        var b, c;
        a && 1 === a.code ? (b = g.get("search.geolocation-filter.error.tracking.title"), c = g.get("search.geolocation-filter.error.tracking.message")) : (b = g.get("search.geolocation-filter.error.timeout.title"), c = g.get("search.geolocation-filter.error.timeout.message")), this.$el.find(".geo-error-message .title").html(b), this.$el.find(".geo-error-message .message").html(c), this.$el.find(".geo-error-container").removeClass("hide"), f.error("LocationApiError", a, {
          _message: "Error while trying to get user current location"
        }), window.Bugsnag.metaData = {
          error: a,
          apiReturnErrorCode: a.code
        }, $(".geo-inputbox").val(""), $(".geo-current-location").removeClass("selected"), window.Bugsnag.notify("GeolocationFilterComponent", "Error while trying to get user current location"), window.Bugsnag.metaData = {}
      }.bind(this)))
    },
    onCurrentLocationClick: function(a) {
      a.preventDefault(), a.stopPropagation(), a.target.attributes["class"] && "disabled" === a.target.attributes["class"].value || (this.$el.find(".spinner").removeClass("hide"), this.getCurrentLocation())
    },
    onInputBoxKeyUp: function(a) {
      var b = this.$el.find("li").length;
      if (40 === a.keyCode ? this.selectedIndex === -1 ? this.selectedIndex += 1 : this.selectedIndex < b && (this.selectedIndex += 1) : 38 === a.keyCode && this.selectedIndex > 0 && (this.selectedIndex -= 1), 40 === a.keyCode || 38 === a.keyCode) {
        this.$el.find(".selected").removeClass("selected"), $(".geo-current-location").removeClass("selected"), 0 === this.selectedIndex ? $(".geo-current-location").addClass("selected") : this.$el.find("li.city").filter(function(a, b) {
          return $(b).data("position") === this.selectedIndex
        }.bind(this)).addClass("selected");
        var c = this.$el.find(".selected").text();
        $(".geo-inputbox").val(c)
      }
    },
    onInputBoxKeyDown: b.debounce(function(a) {
      if (40 !== a.keyCode && 38 !== a.keyCode)
        if (27 === a.keyCode || 9 === a.keyCode) this.closeGeoPopup();
        else if (13 === a.keyCode) {
        if (0 === this.selectedIndex) return this.onCurrentLocationClick(a);
        this.$el.find("li").filter(function(a, b) {
          return $(b).data("position") === this.selectedIndex
        }.bind(this)).click()
      } else {
        if (37 === a.keyCode || 39 === a.keyCode) return;
        this.model.set({
          urlParams: {
            rows: 5,
            sort: "population desc"
          },
          searchTerm: this.$el.find(".geo-inputbox").val().trim()
        })
      }
    }, 200),
    onCityClick: function(a) {
      var b = SH.OMN.pageName,
        c = SH.OMN.pageName;
      a.preventDefault(), a.stopPropagation();
      var d = a.target,
        f = this.getCityString(d.getAttribute("data-city"), d.getAttribute("data-statecode"), d.getAttribute("data-country"), d.getAttribute("data-countryCode")),
        g = {
          latitude: d.getAttribute("data-latitude"),
          longitude: d.getAttribute("data-longitude")
        };
      this.model.set({
        citySelected: f,
        point: g.latitude + "," + g.longitude
      }), this.publishEvent("geolocation-filter:updatedCurrentLocation", {
        point: g,
        city: d.getAttribute("data-city"),
        stateCode: d.getAttribute("data-statecode"),
        country: d.getAttribute("data-country")
      }), this.closeGeoPopup(), this.render(), this.storeInGeoCache("coordinates", g.latitude + "," + g.longitude), this.storeInGeoCache("city", d.getAttribute("data-city")), this.storeInGeoCache("stateCode", d.getAttribute("data-statecode")), this.storeInGeoCache("country", d.getAttribute("data-country")), this.storeInGeoCache("countryCode", d.getAttribute("data-countryCode")), e.track({
        pageName: c,
        city: f,
        appInteraction: "UE: Location Suggestions: " + d.getAttribute("data-position"),
        appInteractionType: "UE: Location Suggestions",
        appInteractionPage: b
      }, null, !1)
    },
    onLocationTextClick: function(a) {
      a.preventDefault(), this.model.set({
        locations: [],
        showPopup: !0
      }), this.render(), window.innerWidth <= 640 && this.disableBodyScroll(), this.$el.find(".geo-inputbox").focus()
    },
    triggerSearchBasedOnSearchTerm: function() {
      var a = this.model.get("searchTerm");
      if (a && a.length > 0) {
        var b = this.model.fetch();
        b.done(function() {
          for (var a = this.model.get("locations"), b = a.length, c = 0; c < b; c++) a[c].position = c + 1;
          this.model.set("locations", a), this.subViews.geolocationFilterResultsView.render(), b > 0 ? ($(".geo-current-location").removeClass("selected"), this.selectedIndex = 1, this.$el.find("li.city").filter(function(a, b) {
            return $(b).data("position") === this.selectedIndex
          }.bind(this)).addClass("selected")) : (this.selectedIndex = 0, $(".geo-current-location").addClass("selected"))
        }.bind(this)), b.fail(function(b) {
          this.model.set("locations", []), this.subViews.geolocationFilterResultsView.render(), f.error("LocationApiError", b, {
            _message: "Error while trying to get user current location from searchTerm"
          }), window.Bugsnag.metaData = {
            error: b,
            searchTerm: a
          }, window.Bugsnag.notify("LocationApi", "Error while trying to get user current location from searchTerm"), window.Bugsnag.metaData = {}
        }.bind(this))
      } else "undefined" != typeof a && 0 === a.length && (this.model.set("locations", []), this.subViews.geolocationFilterResultsView.render())
    },
    highlightOption: function(a) {
      var b = $(a.currentTarget);
      this.unhighlightOptions(), this.selectedIndex = b.data("position"), b.addClass("selected")
    },
    unhighlightOptions: function() {
      this.$el.find(".selected").removeClass("selected")
    },
    disableBodyScroll: function() {
      $("body").addClass("geo-no-scroll")
    },
    enableBodyScroll: function() {
      $("body").removeClass("geo-no-scroll")
    }
  });
  return i
}), define("search-ticketbis-modal-layout", ["foobunny"], function(a) {
  "use strict";
  var b = a.Layout.extend({});
  return b
}), define("search-ticketbis-dialog-model", ["foobunny", "i18n"], function(a, b) {
  "use strict";
  var c = a.BaseModel.extend({
    defaults: {
      logoAlt: "",
      headerText: "",
      noteText: "",
      buttonText: "",
      logoImageURL: ""
    },
    initialize: function(a) {
      var c, d = {
        logoAlt: b.get("search.ticketbis-dialog.logo.alt"),
        headerText: b.get("search.ticketbis-dialog.header"),
        noteText: b.get("search.ticketbis-dialog.note"),
        buttonText: b.get("search.ticketbis-dialog.continue.buttonText"),
        logoImageURL: SH.appCommon.staticHost + "/resources/shape/images/common-" + SH.appCommonVersion + "/stubhub-logo-ticket-out-white.svg"
      };
      c = _.extend({}, d, a), this.set(c)
    }
  });
  return c
}), define("search-ticketbis-dialog", ["component", "i18n", "search-ticketbis-dialog-modal-view", "search-ticketbis-dialog-i18n-props"], function(a, b, c, d) {
  "use strict";
  var e = a.extend({
    name: "ticketbis-dialog",
    el: "#search-ticketbis-popup-container",
    init: function() {
      this.options = this.options || {}, b.merge(d), this.$container = $(this.el), this.$container.length || (this.$body = $("body"), this.$body.append('<div id="search-ticketbis-popup-container"></div>'), this.$container = $(this.el)), this.options.parent = this, this.view = new c(this.options)
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose(), this.$container && this.$container.length > 0 && this.$container.remove()
    }
  });
  return e
}), define("search-ticketbis-dialog-modal-view", ["foobunny", "i18n", "search-ticketbis-dialog-model"], function(a, b, c) {
  "use strict";
  var d = document.querySelectorAll("html,body"),
    e = a.BaseView.extend({
      fetchOnInitialize: !1,
      events: {
        "click .cancel-button-action": "triggerCancelAction",
        "click .especialButton": "triggerContinueAction"
      },
      template: "ticketbis-dialog-modal-view",
      el: "#search-ticketbis-popup-container",
      initialize: function(a) {
        this.parent = a.parent, this.confirmDeferred = $.Deferred(), this.confirmPromise = this.confirmDeferred.promise(), this.parent.confirmPromise = this.confirmPromise, this.model = new c(a.popupConfig)
      },
      afterRender: function() {
        _.isFunction(this.options.onRender) && this.options.onRender(), Array.prototype.forEach.call(d, function(a) {
          a.classList.add("hide-scrollbar")
        }), this.el.classList.add("show"), setTimeout(function() {
          var a = this.el.querySelector(".progress-bar-fill");
          a.classList.add("full-width"), ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"].forEach(function(b) {
            a.addEventListener(b, function() {
              this.confirmDeferred.resolve()
            }.bind(this))
          }, this)
        }.bind(this), 1e3)
      },
      triggerCancelAction: function(a) {
        a.stopPropagation(), _.isFunction(this.options.beforeCancel) && this.options.beforeCancel(), this.onCancel()
      },
      onCancel: function() {
        _.isFunction(this.options.onCancel) && this.options.onCancel(), this.confirmDeferred.reject(), this.el.classList.remove("show"), window.setTimeout(function() {
          this.disposeTicketbisDialogComponent()
        }.bind(this), 300)
      },
      triggerContinueAction: function(a) {
        a.stopPropagation(), _.isFunction(this.options.beforeConfirm) && this.options.beforeConfirm(), this.onConfirm()
      },
      onConfirm: function() {
        _.isFunction(this.options.onConfirm) && this.options.onConfirm(), this.confirmDeferred.resolve(), window.setTimeout(function() {
          this.disposeTicketbisDialogComponent()
        }.bind(this), 300)
      },
      disposeTicketbisDialogComponent: function() {
        Array.prototype.forEach.call(d, function(a) {
          a.classList.remove("hide-scrollbar")
        }), this.parent.dispose()
      }
    });
  return e
}), define("common-chat", ["component", "common-chat-view", "global_context", "application_helper"], function(a, b, c, d) {
  "use strict";
  var e = a.extend({
    init: function() {
      this.view = new b({
        el: this.options.element,
        attributes: this.options.attributes
      })
    },
    render: function() {
      this.view.render(), this.chatTrack()
    },
    dispose: function() {
      this.view.dispose()
    },
    chatTrack: function() {
      var a, b;
      void 0 === window.s && d.initOmniture(), b = "UE: Chat Component", a = {
        appInteraction: b + ": View",
        appInteractionType: b,
        appInteractionPage: SH.OMN.pageType,
        pageName: SH.OMN.pageName,
        siteSections: SH.OMN.siteSections,
        proactiveChat: "chatOffered",
        userGUID: window.s.eVar66
      }, d.track(a, null, !1)
    }
  });
  return e
}), define("common-chat-view", ["foobunny", "application_helper"], function(a, b) {
  "use strict";
  var c = a.BaseView.extend({
    template: "chat",
    events: {
      "click #common-chat-sh-icon": "startChat",
      "click #common-chat-sh-need-help": "startChat",
      "click #common-chat-sh-lets-chat": "startChat",
      "click #common-chat-sh-close": "hideChat"
    },
    initialize: function() {},
    startChat: function(a) {
      a.preventDefault(), a.stopPropagation(), $("#rn_DialogButton_rn_Dialog_0_0-button").click(), this.$el.hide(), this.chatTracking("chatAccepted"), this.dispose()
    },
    hideChat: function(a) {
      a.preventDefault(), a.stopPropagation(), $("#rn_DialogButton_rn_Dialog_0_1-button").click(), this.$el.hide(), this.chatTracking("chatRejected"), this.dispose()
    },
    chatTracking: function(a) {
      var c, d;
      void 0 === window.s && b.initOmniture(), d = "UE: Chat Component", c = {
        appInteraction: d + ": Click",
        appInteractionType: d,
        appInteractionPage: SH.OMN.pageType,
        pageName: SH.OMN.pageName,
        siteSections: SH.OMN.siteSections,
        proactiveChat: a,
        userGUID: window.s.eVar66
      }, b.track(c, null, !1)
    }
  });
  return c
}), ! function() {
  "use strict";
  var a = window.SH || {},
    b = a.locale;
  requirejs.config({
    paths: {
      scriptsProps: a.configBaseUrl + "/resources/shape/scripts/" + a.appFolder + "/" + b + "/i18nPropsForScripts",
      "templates-bundle": a.configBaseUrl + "/resources/shape/templates/" + a.appName + "-" + a.appVersion + "/" + b + "/templates-bundle",
      main: a.configBaseUrl + "/resources/shape/scripts/" + a.appName + "-" + a.appVersion + "/optimized/main",
      "module-delay": a.configBaseUrl + "/resources/shape/scripts/" + a.appName + "-" + a.appVersion + "/module-delay",
      "performer-card": a.icmsServer + "/content-content/common/scripts/stubhub-ui-performer-min",
      siema: a.configBaseUrl + "/resources/shape/scripts/" + a.appName + "-" + a.appVersion + "/lib/siema",
      "module-seasonal": a.configBaseUrl + "/resources/shape/scripts/" + a.appName + "-" + a.appVersion + "/module-seasonal"
    },
    useStrict: !0,
    shim: {
      dust: {
        exports: "dust"
      },
      underscore: {
        exports: "_"
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      },
      backbone_associations: {
        deps: ["backbone"],
        exports: "Backbone.AssociatedModel"
      },
      dust_helpers: {
        deps: ["dust"],
        exports: "dust.helpers"
      }
    }
  })
}(), define("mbox-helper", ["component", "sh_global_registry"], function(a, b) {
  "use strict";
  var c = a.extend({
    name: "mbox-helper",
    init: function() {
      var a;
      this.atPromise = $.Deferred(), this.options.featureToggleSwitch && this.options.featureToggleSwitch.name ? this.enableABTestFlag = this._getFeatureToggleSwitchValue(this.options.featureToggleSwitch) : this.enableABTestFlag = !0, this.context = this.options.context || this, this.preSuccessCallback = this.options.preSuccessCallback || this._defaultCallbackHandler, this.successCallback = this.options.successCallback || this._defaultCallbackHandler, this.errorCallback = this.options.errorCallback || this._defaultCallbackHandler, this.prefixEnvToMboxName = !(a = this.options.prefixEnvToMboxName) && a !== !1 || a, this.mboxName = this._getMboxName(this.options.mboxName), this.targetElementSelector = this.options.targetElementSelector || "#target-" + this.mboxName + "-mbox", this.shParamName = this.options.shParamName, this.featureForceEnableSwitch = this.options.featureForceEnableSwitch || {}, this.enableABTestFlag && (this._createTargetElement(), this.params = this._getMboxParams(this.options.params), this.timeout = this.options.timeout || 1e3)
    },
    start: function() {
      var a;
      this.enableABTestFlag && adobe && adobe.target ? this._callMbox() : (this.featureForceEnableSwitch && this.shParamName && (a = this._getFeatureToggleSwitchValue(this.featureForceEnableSwitch), (a || 0 === a || a === !1) && (SH.mbox[this.shParamName] = a)), this._successCallback())
    },
    _callMbox: function() {
      adobe.target.getOffer({
        mbox: this.mboxName,
        params: this.params,
        success: this._successCallback.bind(this),
        error: this._errorCallback.bind(this),
        timeout: this.timeout
      })
    },
    _getMboxName: function(a) {
      var b;
      return this.prefixEnvToMboxName && (b = "stubhub" === window.SH.targetHost, a = b ? "PROD_" + a : "DEV_" + a), a
    },
    _getMboxParams: function(a) {
      return a = a || {}, a.clientTime = (new Date).getTime(), a
    },
    _getFeatureToggleSwitchKey: function(a) {
      var c = b.getSiteId();
      return "gs.features." + c + "." + a
    },
    _getFeatureToggleSwitchValue: function(a) {
      var c, d;
      return c = this._getFeatureToggleSwitchKey(a.name), "JSON" === a.type ? (d = b.getFeatureValue(c, "string"), d && (d = JSON.parse(d))) : d = b.getFeatureValue(c, a.type), d
    },
    _createTargetElement: function() {
      var a;
      return a = this.targetElementSelector.split("#").join(""), this.targetElement = document.getElementById(a), this.targetElement || (this.targetElement = document.createElement("div"), this.targetElement.id = a, document.body.appendChild(this.targetElement)), this.targetElement
    },
    _successCallback: function(a) {
      a && adobe.target.applyOffer({
        mbox: this.mboxName,
        selector: this.targetElementSelector,
        offer: a
      }), this.preSuccessCallback.call(this.context, a), this.atPromise.resolve(), this.successCallback.call(this.context, a)
    },
    _errorCallback: function() {
      this.atPromise.resolve(), this.errorCallback.call(this.context)
    },
    _defaultCallbackHandler: function() {}
  });
  return c
}), define("homepage-recentlyviewed-model", ["foobunny", "i18n"], function(a, b) {
  var c = a.BaseModel.extend({
    initialize: function(a) {
      this.urlParams = {}, a.userGuid && (this.urlParams.userGuid = a.userGuid), a.visitorId && (this.urlParams.visitorId = a.visitorId)
    },
    url: function() {
      return "/shape/recommendations/core/v2/events?handleName=recently_viewed&limit=18"
    },
    medium: function(a, b) {
      return a.events && (1 === a.events.length ? (a.eventcount = a.events.length, b.showEmptyState = !0, b.mediumOneEmptyState = !0) : a.events.length >= 2 && (a.eventcount = a.events.length, b.showEmptyState = !1)), a
    },
    large: function(a, b) {
      return a.events && (1 === a.events.length ? (a.eventcount = a.events.length, b.showEmptyState = !0, b.largeTwoEmptyState = !0) : 2 === a.events.length ? (a.eventcount = a.events.length, b.showEmptyState = !0, b.largeOneEmptyState = !0) : a.events.length >= 3 && (a.eventcount = a.events.length, b.showEmptyState = !1)), a
    },
    xlarge: function(a, b) {
      return a.events && (1 === a.events.length ? (a.eventcount = a.events.length, b.showEmptyState = !0, b.xlargeThreeEmptyState = !0) : 2 === a.events.length ? (a.eventcount = a.events.length, b.showEmptyState = !0, b.xlargeTwoEmptyState = !0) : 3 === a.events.length ? (a.eventcount = a.events.length, b.showEmptyState = !0, b.xlargeOneEmptyState = !0) : a.events.length >= 4 && (a.eventcount = a.events.length, b.showEmptyState = !1)), a
    },
    populateEvents: function(a, b) {
      for (var c = 0; c <= a.eventcount - 1; c++) b.events[c] = a.events[c]
    },
    parse: function(a) {
      var c = window.innerWidth <= 639,
        d = window.innerWidth >= 640 && window.innerWidth <= 959,
        e = window.innerWidth >= 960 && window.innerWidth <= 1280,
        f = window.innerWidth > 1280,
        g = {
          events: []
        };
      if (a.isSmall = c, a.isMedium = d, a.isLarge = e, a.isxLarge = f, g.showmodule = !!(a.events && a.events.length >= 1), a.events) {
        a.isSmall && a.events.length >= 1 ? a.eventcount = a.events.length : a.isMedium ? this.medium(a, g) : a.isLarge ? this.large(a, g) : a.isxLarge && this.xlarge(a, g), this.populateEvents(a, g);
        for (var h = 0; h < g.events.length; h++) {
          g.events[h].dateLocal = g.events[h].eventDateLocal, g.events[h].venueName = g.events[h].venue.name, g.events[h].venueCity = g.events[h].venue.city, g.events[h].venueState = g.events[h].venue.state, g.events[h].eventpagelink = g.events[h].webURI || "/event/" + g.events[h].id + "/";
          var i, j, k, l, m, n, o, p, q, r;
          r = g.events[h].dateLocal.substring(0, 10), q = new Date(r.replace(/-/g, "/")), i = j = k = l = m = n = o = p = new Date, i = new Date(i.setDate(j.getDate())), j = new Date(j.setDate(j.getDate() + 1)), k = new Date(k.setDate(k.getDate() + 1)), l = new Date(l.setDate(l.getDate() + 1)), m = new Date(m.setDate(m.getDate() + 1)), n = new Date(n.setDate(n.getDate() + 1)), o = new Date(o.setDate(o.getDate() + 1)), p = new Date(p.setDate(p.getDate() + 1)), !g.events[h].displayAttributes.hideEventDate && q.getFullYear() > i.getFullYear() && (g.events[h].year = q.getFullYear()), q.getDate() === i.getDate() && q.getMonth() === i.getMonth() && q.getFullYear() === i.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.today") : q.getDate() === j.getDate() && q.getMonth() === j.getMonth() && q.getFullYear() === j.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.tomorrow") : q.getDate() === k.getDate() && q.getMonth() === k.getMonth() && q.getFullYear() === k.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.twoday") : q.getDate() === l.getDate() && q.getMonth() === l.getMonth() && q.getFullYear() === l.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.threeday") : q.getDate() === m.getDate() && q.getMonth() === m.getMonth() && q.getFullYear() === m.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.fourday") : q.getDate() === n.getDate() && q.getMonth() === n.getMonth() && q.getFullYear() === n.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.fiveday") : q.getDate() === o.getDate() && q.getMonth() === o.getMonth() && q.getFullYear() === o.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.sixday") : q.getDate() === p.getDate() && q.getMonth() === p.getMonth() && q.getFullYear() === p.getFullYear() ? g.events[h].dateLabel = b.get("homepage.recentlyviewed.week") : g.events[h].dateLabel = ""
        }
        return g
      }
    }
  });
  return c
}), define("homepage-recentlyviewed-component", ["component", "homepage-recentlyviewed-model", "homepage-recentlyviewed-view", "i18n", "homepage-recentlyviewed-i18n-props", "dotdotdot"], function(a, b, c, d, e) {
  var f = a.extend({
    name: "recentlyviewed",
    init: function() {
      d.merge(e);
      var a = this,
        b = navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
        f = navigator.userAgent.indexOf("Edge") > -1 || navigator.userAgent.indexOf("Trident/7.0") > -1 || navigator.userAgent.indexOf("MSIE") > -1;
      a.view = new c({
        el: a.options.element
      }), (b || f) && this.view.subscribeEvent("layoutRender:completed", function() {
        var a = this.view.$el.find(".event-name"),
          b = this.view.$el.find(".time-venue");
        a.dotdotdot({
          watch: !0
        }), b.dotdotdot({
          watch: !0
        })
      }.bind(this))
    },
    render: function() {
      this.view.render()
    },
    dispose: function() {
      this.view.dispose()
    }
  });
  return f
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
  return typeof a
} : function(a) {
  return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
};
define("homepage-recentlyviewed-view", ["foobunny", "urlUtil", "sh_global_registry", "homepage-recentlyviewed-model", "application_helper", "shcookie", "siema"], function(a, b, c, d, e, f, g) {
  var h = !1,
    i = 0,
    j = 0,
    k = a.BaseView.extend({
      events: {
        "click .card-item": "setRedirectionToEventPage",
        "click .button": "setRedirectionToEventPageWithFilter",
        "click .nextWrapper": "handleNext",
        "click .prevWrapper": "handlePrev"
      },
      template: "recentlyviewed",
      initialize: function() {
        var a, b;
        this.isLarge = window.innerWidth >= 960 && window.innerWidth <= 1280, this.isxLarge = window.innerWidth > 1280, b = f.getCookie("track_session_userGUID"), a = f.getCookie("SH_VI"), this.model = new d({
          userGuid: SH.globalProperties.userGuid || b,
          visitorId: a
        }), this.model.fetch()
      },
      showInitPrevNext: function() {
        var a = this;
        (a.isLarge || a.isxLarge) && (document.querySelector(".prevWrapper").style.display = "none", document.querySelector(".nextWrapper").style.display = "block")
      },
      onChangePrevNext: function() {
        h || this.mySiema && _typeof("undefined" !== this.mySiema.currentSlide) && (this.currentSlide = this.mySiema.currentSlide, "next" === this.mySiema.getSlideDirection() ? this.next() : this.prev()), h = !1
      },
      next: function() {
        i += 1, this.self.isxLarge && (this.self.model.attributes.events.length > 4 && i < 1 || this.self.model.attributes.events.length > 8 && i < 2 || this.self.model.attributes.events.length > 12 && i < 3 || this.self.model.attributes.events.length > 16 && i < 4) || this.self.isLarge && (this.self.model.attributes.events.length > 3 && i < 1 || this.self.model.attributes.events.length > 6 && i < 2 || this.self.model.attributes.events.length > 9 && i < 3 || this.self.model.attributes.events.length > 12 && i < 4 || this.self.model.attributes.events.length > 15 && i < 5) ? (document.querySelector(".prevWrapper").style.display = "block", document.querySelector(".nextWrapper").style.display = "block") : (document.querySelector(".prevWrapper").style.display = "block", document.querySelector(".nextWrapper").style.display = "none")
      },
      handleNext: function(a) {
        h = !0, this.mySiema.self = this, this.isxLarge ? this.mySiema && this.mySiema.next(4, this.next.bind(this.mySiema)) : this.isLarge && this.mySiema && this.mySiema.next(3, this.next.bind(this.mySiema))
      },
      prev: function() {
        j += 1, i -= 1, i < 1 ? (document.querySelector(".prevWrapper").style.display = "none", document.querySelector(".nextWrapper").style.display = "block ") : (document.querySelector(".prevWrapper").style.display = "block", document.querySelector(".nextWrapper").style.display = "block")
      },
      handlePrev: function(a) {
        h = !0, this.isxLarge ? this.mySiema && this.mySiema.prev(4, this.prev) : this.isLarge && this.mySiema && this.mySiema.prev(3, this.prev)
      },
      afterRender: function() {
        var a = window.innerWidth <= 639,
          b = window.innerWidth >= 640 && window.innerWidth <= 959,
          c = window.innerWidth >= 960 && window.innerWidth <= 1280,
          d = window.innerWidth > 1280;
        this.model.attributes.events && (a && this.model.attributes.events.length > 1 || b && this.model.attributes.events.length > 2 || c && this.model.attributes.events.length > 3 || d && this.model.attributes.events.length > 4) ? this.carousel() : null !== document.getElementById("carouselRV") && (document.getElementById("carouselRV").style.display = "flex")
      },
      carousel: function() {
        var a = this;
        try {
          this.mySiema = new g({
            selector: ".siemaRV",
            duration: 1e3,
            easing: "ease-in-out",
            perPage: {
              320: 1.2,
              640: 2.1,
              960: 3,
              1280: 4
            },
            startIndex: 0,
            draggable: !0,
            threshold: 20,
            loop: !1,
            onInit: function() {
              a.showInitPrevNext()
            },
            onChange: function() {
              setTimeout(a.onChangePrevNext.bind(a), 200)
            }
          })
        } catch (b) {}
      },
      setRedirectionToEventPage: function(a) {
        var c = a.target.dataset.index;
        b.redirect(b.formatUrl(this.model.get("events")[c].eventpagelink), 0, !1), this.setTracking(a)
      },
      setRedirectionToEventPageWithFilter: function(a) {
        var c, d, e;
        c = d = new Date, e = c.getFullYear() + "-" + ("0" + (c.getMonth() + 1)).slice(-2) + "-" + ("0" + c.getDate()).slice(-2) + "T00:00";
        var f = 7;
        7 !== d.getDay() && d.setDate(d.getDate() + (f + 7 - d.getDay()) % 7), d = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + "T23:59", b.redirect(b.formatUrl("/?eventStartDate=" + e + "&eventEndDate=" + d), 0, !1), this.setEmptyStateTracking(a)
      },
      setEmptyStateTracking: function(a) {
        if (a.preventDefault(), a.stopPropagation(), 1 !== a.button) {
          var b;
          void 0 === window.s && e.initOmniture(), b = {
            appInteraction: "UE: Recently Viewed: Empty State",
            appInteractionType: "UE: Recently Viewed",
            appInteractionPage: SH.OMN.pageName,
            pageType: SH.OMN.pageName
          }, e.track(b, null, !1)
        }
      },
      setTracking: function(a) {
        if (a.preventDefault(), a.stopPropagation(), 1 !== a.button) {
          var b, c = a.target.dataset.index,
            d = this.getEventIndex(a),
            f = this.model.get("events"),
            g = f ? f[c].id : "",
            h = f && f[c].ticketInfo.totalTickets && f[c].ticketInfo.totalTickets <= 500 ? "t" : "";
          void 0 === window.s && e.initOmniture();
          var i = "UE: Recently Viewed: Event link: " + d;
          b = {
            appInteraction: i,
            appInteractionType: "UE: Recently Viewed",
            appInteractionPage: SH.OMN.pageName,
            pageType: SH.OMN.pageName,
            products: ";" + g,
            userExperienceSnapshot: "t" === h ? "rve=t" : ""
          }, e.track(b, null, !1)
        }
      },
      getEventIndex: function(a) {
        var b = parseInt(a.currentTarget.dataset.index) + 1;
        return b
      }
    });
  return k
}), define("sh-hreflang", ["sh_global_registry"], function(a) {
  "use strict";

  function b(a) {
    var b, c, d, e;
    return b = a.indexOf("//"), d = a.substr(b + 2), c = d.indexOf("/"), e = c > 0 ? a.substring(0, b + c + 2) : a
  }

  function c(a, c) {
    var d, e, f;
    return d = b(a), e = d.lastIndexOf(c), f = e > 0 ? d.substring(0, e) : d
  }

  function d(a) {
    var b, c, d, e = "";
    return b = a.indexOf("//"), a = a.substr(b + 2), c = a.indexOf("/"), d = a.indexOf("?"), c > 0 && (e = d > 0 ? a.substring(c, d) : a.substr(c)), "" === e ? "/" : e
  }

  function e(a, b) {
    var c = d(a),
      e = c.indexOf("/" + b + "/");
    return e >= 0 ? c.substring(0, e) + c.substr(e + 3) : (e = c.lastIndexOf("/" + b), e >= 0 && c.length === e + 3 ? c.substring(0, e + 1) : c)
  }

  function f(a) {
    var b, c, d;
    for (c = 0, d = j.length; c < d; c++)
      if (b = a.indexOf(j[c]), b !== -1) return a.substring(b);
    return ""
  }

  function g(g, h, i) {
    function j(a, b) {
      var c = r[a];
      if (c) {
        b = b.toLowerCase();
        var d = c.find(function(a) {
          var c = a.split("-")[0];
          return c.toLowerCase() === b
        });
        return !!d
      }
      return !1
    }

    function k() {
      var a, b, c, d, e;
      for (e = document.querySelectorAll("link[rel=canonical]"), a = 0, b = e.length; a < b; a++) c = e[a], d = c.parentNode, d.removeChild(c);
      for (e = document.querySelectorAll("link[hreflang]"), a = 0, b = e.length; a < b; a++) c = e[a], d = c.parentNode, d.removeChild(c);
      for (e = document.querySelectorAll("meta[name=robots]"), a = 0, b = e.length; a < b; a++) c = e[a], d = c.parentNode, d.removeChild(c)
    }

    function l() {
      var a = A.find(function(a) {
        return a === h
      });
      return !!a
    }

    function m(a) {
      var b, c, d;
      for (b in g)
        if (g.hasOwnProperty(b) && (d = b.substring(0, b.indexOf("-")), d === a)) {
          c = g[b];
          break
        }
      return c
    }

    function n() {
      var a, b, c, d, e;
      if (j(v, x)) a = t + u;
      else if (D) {
        if (c = r[v], !c) throw new Error("HrefLang:renderCanonical: Missing " + v + " from seoIndexedLocales");
        if (d = c[0].toLowerCase(), b = g[d], !b && (e = d.split("-")[0], b = m(e), !b)) throw new Error("HrefLang:renderCanonical: Missing primary language '" + e + "' from entitySEOURIs");
        a = t + "/" + b + D
      } else a = t + z;
      var f = document.createElement("link");
      f.setAttribute("rel", "canonical"), f.setAttribute("href", a), document.head.insertBefore(f, s), C.push(f.outerHTML)
    }

    function o() {
      var a = document.createElement("meta");
      a.setAttribute("name", "robots"), a.setAttribute("content", "noindex, nofollow"), document.head.insertBefore(a, s), C.push(a.outerHTML)
    }

    function p() {
      var a, b, c, d, e, f, h, i, j, k, l, n, o, p, r, t, u, v;
      for (r = 0, t = q.length; r < t; r++)
        for (p = q[r], f = p.domain, h = p.locales, k = h[0], l = k.substring(0, w.indexOf("-")), u = 0, v = h.length; u < v; u++) i = h[u], e = "", o = "", c = "", n = !1, j = i.substring(0, i.indexOf("-")), l !== j && (o = "/" + j), g && (e = g[i], e || (e = m(j)), e ? e = "/" + e : (e = "", n = !0)), n || (c = D ? y + f + e + o + D : y + f + o + z, a = document.createElement("link"), a.setAttribute("rel", "alternate"), a.setAttribute("hreflang", i), a.setAttribute("href", c), B.push(a));
      for (b = document.createDocumentFragment(), r = 0, t = B.length; r < t; r++) d = B[r], b.appendChild(d), C.push(d.outerHTML);
      document.head.insertBefore(b, s)
    }
    var q = a.getSEOIndexedLocales(),
      r = q.reduce(function(a, b) {
        return a[b.domain] = b.locales, a
      }, {});
    i = i ? i : document.location.href;
    var s, t = b(i),
      u = d(i),
      v = "." + a.getTld(),
      w = a.getLocale(),
      x = a.getLanguage(),
      y = c(i, v),
      z = e(i, x),
      A = a.getSupportedCountries().map(function(a) {
        return a.toLowerCase()
      }),
      B = [],
      C = [],
      D = "";
    if (g) {
      if (g = g.reduce(function(a, b) {
          return a[b.locale.replace("_", "-").toLowerCase()] = b.urlKey, a
        }, {}), D = f(i), !D) throw new URIError("HrefLang: Invalid Entity URL: " + i);
      h && (h = h.toLowerCase())
    }
    this.render = function() {
      return k(), s = document.head.firstChild, B = [], C = [], Array.isArray(q) ? (n(), j(v, x) ? (p(), h && !l() && o()) : o(), C) : C
    }
  }
  var h = ["/event/", "/venue/", "/geography/"],
    i = ["/category/", "/grouping/", "/performer/"],
    j = h.concat(i);
  return g
}), define("homepage-performer-card-helper", ["application_helper", "models/user_favorites_model", "url-parser", "common-login", "foobunny"], function(a, b, c, d, e) {
  var f = {},
    g = e.mediator,
    h = function(a) {
      var c = new b(a, {
        guid: SH.globalProperties.userGuid
      });
      c.set("action", "FOLLOW"), c.save({}, {
        dataType: "text"
      }).then(function() {}.bind(this), function() {}.bind(this))
    },
    i = function(a) {
      var c = new b(a, {
        guid: SH.globalProperties.userGuid
      });
      c.set("action", "UNFOLLOW"), c.save({}, {
        dataType: "text"
      }).then(function() {}.bind(this), function() {}.bind(this))
    },
    j = function(a) {
      a && a.action === !0 ? h(a) : a && a.action === !1 && i(a)
    },
    k = function(a, b) {
      a.preventDefault(), a.stopPropagation(), this.loginInstance = d.getInstance(), this.loginModule = this.loginInstance.model, this.loginModule.validateSession(), g.subscribeEvent("login:invalidUserSession", function() {
        window.scrollTo(0, 0), this.loginInstance.render(), this.loginInstance.setVisibility(!0)
      }.bind(this)), g.subscribeEvent("login:closeClick", function() {
        l(SH.globalProperties.completeUrl)
      }.bind(this)), g.subscribeEvent("login:signInSuccess", function() {
        g.unsubscribeEvent("login:signInSuccess"), SH.globalProperties.userGuid = this.loginInstance.session.getGUID(), m(a, b), l(SH.globalProperties.completeUrl)
      }.bind(this))
    },
    l = function(a) {
      setTimeout(function() {
        c.redirect(a)
      }, 300)
    },
    m = function(a, b) {
      var c = {};
      c.action = b.open, c.entityId = b.performerId, c.entityType = "PERFORMER", j(c)
    };
  return f.handleFavorites = function(b, c) {
    SH.globalProperties && "undefined" != typeof SH.globalProperties.userGuid && "_null" !== SH.globalProperties.userGuid && null !== SH.globalProperties.userGuid ? m(b, c) : k(b, c);
    var d, e = c.open ? "Toggle : Set" : "Toggle : UnSet";
    d = {
      pageType: SH.OMN.pageType,
      appInteraction: e,
      appInteractionType: "UE: Performer Card: Favorite",
      appInteractionPage: SH.OMN.pageName,
      pageName: SH.OMN.pageName,
      genreId: c.performerId,
      products: c.eventId || null
    }, a.track(d, null, !1)
  }, f.trackCardAction = function(b, c) {
    if (c.open === !0) var d = c.performerCardRank,
      e = {
        siteSections: SH.OMN.siteSections,
        pageType: SH.OMN.pageName,
        appInteraction: "UE: Performer Card: Performer",
        appInteractionType: "UE: Performer Card",
        appInteractionPage: SH.OMN.pageName,
        filterType: "Rank Within Page: [" + d + ",1]"
      };
    else e = {
      siteSections: SH.OMN.siteSections,
      pageType: SH.OMN.pageName,
      appInteraction: "UE: Performer Card: Close event view",
      appInteractionType: "UE: Performer Card",
      appInteractionPage: SH.OMN.pageName
    };
    a.track(e, null, !1)
  }, f.trackEventClick = function(b, c) {
    var d = {
      pageType: SH.OMN.pageName,
      appInteraction: "UE: Performer Card: Event link " + c.eventRank,
      appInteractionType: "Type UE: Performer Card",
      appInteractionPage: SH.OMN.pageName,
      pageName: SH.OMN.pageName
    };
    a.track(d, null, !1)
  }, f
}), define("homeapp-helper", ["foobunny", "shcookie"], function(a, b) {
  "use strict";
  var c = function() {
    function c() {
      return !(!SH.globalProperties || "undefined" == typeof SH.globalProperties.userGuid || "_null" === SH.globalProperties.userGuid || null === SH.globalProperties.userGuid)
    }

    function d() {
      return b.getCookie("SH_VI")
    }

    function e() {
      return b.getCookie("track_session_userGUID")
    }

    function f() {
      var b, c = new a.Cache({
        type: "session",
        namespace: "date-filter"
      });
      return c.unlockNamespace(), b = c.get("dateFilterCacheSettings")
    }
    return {
      isAuthenticated: c,
      getVisitorId: d,
      getUserGuid: e,
      getDateFilterFromCache: f
    }
  }();
  return c
}), define("geolocation-helper", ["foobunny"], function(a) {
  "use strict";
  var b = function() {
    function b() {
      return new a.Cache({
        type: "local",
        namespace: "app",
        expires: 15552e6
      })
    }

    function c() {
      var a, c, d, e, f = b();
      return f && (a = f.get("coordinates"), a && (e = a, c = a.split(",")[0], d = a.split(",")[1], a = {
        latitude: c,
        longitude: d,
        point: e
      })), a
    }

    function d() {
      var a, c = b();
      return c && (a = c.get("country")), a
    }

    function e() {
      var a, c = b();
      return c && (a = c.get("countryCode")), a
    }

    function f() {
      var a, c = b();
      return c && (a = c.get("city")), a
    }

    function g() {
      var a, c = b();
      return c && (a = c.get("stateCode")), a
    }
    return {
      getGeolocationCoordinatesFromCache: c,
      getGeolocationCountryFromCache: d,
      getGeolocationCountryCodeFromCache: e,
      getGeolocationCityFromCache: f,
      getGeolocationStateCodeFromCache: g
    }
  }();
  return b
});