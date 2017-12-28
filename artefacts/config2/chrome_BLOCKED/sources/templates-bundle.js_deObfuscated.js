(function() {
  dust.register("homepage-5.10.0/billboard", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"billboard\">").exists(ctx.get("isMobile"), ctx, {
      "block": body_1
    }, null).exists(ctx.get("isDesktop"), ctx, {
      "block": body_2
    }, null).write("</div>");
  }

  function body_1(chk, ctx) {
    return chk.write("<div class=\"billboard-image mobile\" style=\"background-image: url('").reference(ctx.get("mobileImageUrl"), ctx, "h").write("');\"></div>");
  }

  function body_2(chk, ctx) {
    return chk.write("<div class=\"billboard-image desktop\" style=\"background-image: url('").reference(ctx.get("desktopImageUrl"), ctx, "h").write("');\"></div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/bottomcontent", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div id=\"top-bottom-content\">").reference(ctx.get("topContent"), ctx, "h", ["s"]).write("</div><div id=\"extra-bottom-content\" class=\"hidden\">").reference(ctx.get("extraContent"), ctx, "h", ["s"]).write("</div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/childlinks", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div><div class=\"title\">").reference(ctx.get("title"), ctx, "h").write("</div><div class=\"links\">").section(ctx.get("categories"), ctx, {
      "block": body_1
    }, null).write("</div></div>");
  }

  function body_1(chk, ctx) {
    return chk.exists(ctx.get("url"), ctx, {
      "block": body_2
    }, null);
  }

  function body_2(chk, ctx) {
    return chk.write("<div><a href=\"").helper("toUrl", ctx, {
      "block": body_3
    }, {
      "href": ctx.get("relWebURI")
    }).write("\">").reference(ctx.get("name"), ctx, "h").write("</a></div>");
  }

  function body_3(chk, ctx) {
    return chk;
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/citytile", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div id=\"city-cover\"><div id=\"city-header\">Find your crowd</div><ul class=\"city-nav-item\"><li class=\"city-cards london-card\"><div class=\"city-image-container london\" id=\"london\"><a class=\"image-link\" title=\"london\" href=\"").reference(ctx.get("londonUrl"), ctx, "h").write("\"><div class=\"city-image-wrapper\"><div class=\"image london-image\"></div></div></a><p class=\"city-caption london-caption\"><a class=\"caption-link\" title=\"london\" href=\"").reference(ctx.get("londonUrl"), ctx, "h").write("\">London</a></p></div></li><li class=\"city-cards newyork-card\"><div class=\"city-image-container newyork\" id=\"newyork\"><a class=\"image-link\" title=\"newyork\" href=\"").reference(ctx.get("newyorkUrl"), ctx, "h").write("\"><div class=\"city-image-wrapper\"><div class=\"image newyork-image\"></div></div></a><p class=\"city-caption newyork-caption\"><a class=\"caption-link\" title=\"newyork\" href=\"").reference(ctx.get("newyorkUrl"), ctx, "h").write("\">New York</a></p></figure></li><li class=\"city-cards losangeles-card\"><div class=\"city-image-container losangeles\" id=\"losangeles\"><a class=\"image-link\" title=\"losangeles\" href=\"").reference(ctx.get("losangelesUrl"), ctx, "h").write("\"><div class=\"city-image-wrapper\"><div class=\"image losangeles-image\"></div></div></a><p class=\"city-caption losangeles-caption\"><a class=\"caption-link\" title=\"losangeles\" href=\"").reference(ctx.get("losangelesUrl"), ctx, "h").write("\">Los Angeles</a></p></div></li><li class=\"city-cards sanfrancisco-card\"><div class=\"city-image-container sanfrancisco\" id=\"sanfrancisco\"><a class=\"image-link\"  title=\"sanfrancisco\" href=\"").reference(ctx.get("sanfranciscoUrl"), ctx, "h").write("\"><div class=\"city-image-wrapper\"><div class=\"image sanfrancisco-image\"></div></div></a><p class=\"city-caption sanfrancisco-caption\"><a class=\"caption-link\"  title=\"sanfrancisco\" href=\"").reference(ctx.get("sanfranciscoUrl"), ctx, "h").write("\">San Francisco</a></p></div></li></ul></div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/column_layout_error_msg", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class='error-msg-contents'><div class='alert-icon-container'><span class='error-msg-icon'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"58\" viewBox=\"0 0 32 58\" version=\"1.1\"><g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g fill=\"#FFFFFF\" transform=\"translate(4.000000, 3.000000)\"><path d=\"M12 15.8C16.3 15.8 19.8 12.3 19.8 8 19.8 3.7 16.3 0.2 12 0.2 7.7 0.2 4.2 3.7 4.2 8 4.2 12.3 7.7 15.8 12 15.8L12 15.8ZM20 48L20 20 0 20 0 24 4 24 4 44 11 48 4 48 0 48 0 52 24 52 24 48 20 48Z\"/></g></g></svg></span></div><div class='error-msg-text-container'><div class='error-msg-text-head hide'>NO EVENTS</div><div class='error-msg-text one hide'>Uh-oh! Our application is misbehaving. Please come back a little later.</div><div class='error-msg-text two hide'>We couldn't find any events that match your selection, but give it another shot by expanding your search.</div><div class='error-msg-text three hide'>Sorry! We don’t have any events available right now. Please come back a little later.</div></div></div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/favorites_overlay", body_0);

  function body_0(chk, ctx) {
    return chk.exists(ctx.get("showFavoritesOverlay"), ctx, {
      "block": body_1
    }, null);
  }

  function body_1(chk, ctx) {
    return chk.write("<div id=\"favorites-overlay\"><div class=\"favorites-shadow\"></div><div id=\"favorites-content\"><div id=\"favorites-add-top\"><div id=\"favorites-add-star\"class=\"sh-iconset sh-iconset-star\"></div></div><div id=\"favorites-add-body\">").exists(ctx.getPath(false, ["uiEnable", "addPerformer"]), ctx, {
      "block": body_2
    }, null).exists(ctx.getPath(false, ["uiEnable", "addEventName"]), ctx, {
      "block": body_3
    }, null).write("<div id=\"favorites-add-body-text\"><div class=\"favorites-text\">The more we know about what you like, <span class=\"no-wrap\">the better our</span> recommendations get.</div><div class=\"favorites-text-unfavorite\">To unfavorite just click the star again.</div></div></div><div id=\"favorites-add-button\"><div id=\"favorites-close-text\">Close</div></div></div></div>");
  }

  function body_2(chk, ctx) {
    return chk.write("<div class=\"favorites-add-header-text\">Got it! You're a fan of<div>").reference(ctx.get("artist"), ctx, "h").write(".</div></div>");
  }

  function body_3(chk, ctx) {
    return chk.write("<div class=\"favorites-add-header-text\">Got it! You're a fan of <div>this event.</div></div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/hubpagetitle", body_0);

  function body_0(chk, ctx) {
    return chk.write("<h1 class=\"category-title\">").reference(ctx.get("title"), ctx, "h").write("</h1>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/loadmore", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"loadmore-elements\"><div class=\"loadmore-button ").notexists(ctx.get("showButton"), ctx, {
      "block": body_1
    }, null).write("\"><span>Load More</span></div><div class=\"spinner sh-iconset sh-iconset-loader sh-animate-spin ").notexists(ctx.get("showSpinner"), ctx, {
      "block": body_2
    }, null).write("\"></div></div>");
  }

  function body_1(chk, ctx) {
    return chk.write("hidden");
  }

  function body_2(chk, ctx) {
    return chk.write("hidden");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/newhomenav", body_0);

  function body_0(chk, ctx) {
    return chk.write("  <div id=\"carousel-container\"><div class=\"carousel siema\" id=\"carouselNav\"><div class=\"nav nav-item\" id=\"home-nav-item\"><div class=\"icon-caption-item item home\" id=\"home\"><a class=\"nav-links home\"  title=\"home\" href=\"").reference(ctx.get("homeUrl"), ctx, "h").write("\" id=\"home-nav-tab\"><button class=\"icon home-icon\"><svg width=\"23px\" height=\"25px\" viewBox=\"0 0 23 25\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"LAYOUT_Carousel_CategorySlider_5tiles_r01\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"home-icon-image\" transform=\"translate(-579.000000, -145.000000)\" fill=\"#2F343B\"><g id=\"1280-SPECS\" transform=\"translate(23.000000, 24.000000)\"><g id=\"carousel\" transform=\"translate(347.000000, 91.000000)\"><g id=\"category-tiles\" transform=\"translate(160.000000, 0.000000)\"><g id=\"home\"><polygon id=\"home-30px\" points=\"60.4795918 30 49 39.744898 49 55 57.6734694 55 57.6734694 46.8367347 63.2857143 46.8367347 63.2857143 46.8367347 65.3265306 46.8367347 65.3265306 46.8367347 65.3265306 44.7959184 63.2857143 44.7959184 57.6734694 44.7959184 55.6326531 44.7959184 55.6326531 46.8367347 55.6326531 52.9591837 51.0408163 52.9591837 51.0408163 40.6632653 60.4795918 32.6530612 69.9183673 40.6632653 69.9183673 52.9591837 67.877551 52.9591837 65.3265306 52.9591837 65.3265306 47.8571429 63.2857143 48.877551 63.2857143 55 71.9591837 55 71.9591837 52.9591837 71.9591837 39.744898\"></polygon></g></g></g></g></g></g></svg></button><p class=\"caption\" id=\"home-caption\">All events</p></a></div></div><div class=\"nav nav-item\" id=\"sports-nav-item\"><div class=\"icon-caption-item item sports\" id=\"sports\"><a class=\"nav-links\" title=\"sports\" href=\"").reference(ctx.get("sportsUrl"), ctx, "h").write("\" id=\"sports-nav-tab\"><button class=\"icon sports-icon\"><svg width=\"31px\" height=\"24px\" viewBox=\"0 0 31 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"LAYOUT_Carousel_CategorySlider_5tiles_r01\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"sports-icon-image\" transform=\"translate(-775.000000, -145.000000)\" fill=\"#2F343B\"><g id=\"1280-SPECS\" transform=\"translate(23.000000, 24.000000)\"><g id=\"carousel\" transform=\"translate(347.000000, 91.000000)\"><g id=\"category-tiles\" transform=\"translate(160.000000, 0.000000)\"><g id=\"sports\" transform=\"translate(200.000000, 0.000000)\"><path d=\"M58.9534884,46.2418605 C59.5674419,46.9116279 60.627907,46.9116279 61.2976744,46.2418605 C61.9674419,45.627907 61.9674419,44.5674419 61.2976744,43.8976744 C60.6837209,43.227907 59.6232558,43.227907 58.9534884,43.8976744 L57.055814,43.1162791 L57.055814,37.5348837 L58.172093,37.5348837 L63.1953488,37.5348837 L63.1953488,39.7674419 L59.2883721,39.7674419 L59.2883721,41.2186047 C60.572093,40.9395349 61.9116279,41.2744186 62.9162791,42.2790698 C64.4232558,43.7860465 64.4232558,46.2976744 62.9162791,47.8046512 C62.1348837,48.5302326 61.0744186,48.9209302 60.1255814,48.9209302 C59.1767442,48.9209302 58.172093,48.5860465 57.3906977,47.8046512 L58.9534884,46.2418605 Z M68.8883721,30 L75.1395349,36.1953488 L69,42.3348837 L69,49.5348837 L66.7674419,50.6511628 L66.7674419,36.6976744 L69,39.0418605 L71.8465116,36.1953488 L67.8837209,32.2325581 L64.4232558,32.2325581 C63.1953488,33.2930233 61.6325581,33.9069767 60.0139535,33.9069767 C58.3953488,33.9069767 56.8325581,33.2930233 55.6046512,32.2325581 L52.144186,32.2325581 L48.1813953,36.1953488 L51.027907,39.0418605 L53.372093,36.6976744 L53.372093,51.7674419 L64.5348837,51.7674419 L66.7674419,51.7674419 L69,51.7674419 L69,54 L51.1395349,54 L51.1395349,42.3348837 L45,36.1953488 L51.2511628,30 L56.5534884,30 L56.8883721,30.3348837 C57.7255814,31.172093 58.8418605,31.6744186 60.0697674,31.6744186 C61.2976744,31.6744186 62.4139535,31.172093 63.2511628,30.3348837 L63.5860465,30 L68.8883721,30 Z\" id=\"sports-30px\"></path></g></g></g></g></g></g></svg></button><p class=\"caption\" id=\"sports-caption\">Sports</p></a></div></div><div class=\"nav nav-item\" id=\"music-nav-item\"><div class=\"icon-caption-item item music\" id=\"music\"><a class=\"nav-links\" title=\"music\" href=\"").reference(ctx.get("concertsUrl"), ctx, "h").write("\" id=\"concerts-nav-tab\"><button class=\"icon music-icon\"><svg width=\"25px\" height=\"27px\" viewBox=\"0 0 25 27\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"LAYOUT_Carousel_CategorySlider_5tiles_r01\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"music-icon-image\" transform=\"translate(-978.000000, -145.000000)\" fill=\"#2F343B\"><g id=\"1280-SPECS\" transform=\"translate(23.000000, 24.000000)\"><g id=\"carousel\" transform=\"translate(347.000000, 91.000000)\"><g id=\"category-tiles\" transform=\"translate(160.000000, 0.000000)\"><g id=\"music\" transform=\"translate(400.000000, 0.000000)\"><path d=\"M69.6923077,32.3846154 C66.5128205,29.2051282 61.2820513,29.2051282 58.1025641,32.3846154 C57.3333333,33.1538462 56.7179487,34.025641 56.3076923,35.0512821 L55.0769231,38.0769231 L56,39 L48,48.3846154 L50.1025641,50.4871795 L49.6923077,50.8974359 C48.3076923,52.2820513 48.3076923,54.4871795 49.6923077,55.8205128 L50.8717949,57 L52.3076923,55.5641026 L51.1282051,54.3846154 C50.5641026,53.8205128 50.5641026,52.8974359 51.1282051,52.3333333 L51.5384615,51.9230769 L53.6410256,54.025641 L61.5897436,47.3589744 L60.8717949,45.2564103 L53.7948718,51.3076923 L50.7692308,48.2820513 L57.4358974,40.4358974 L64.0512821,47.0512821 L67.0769231,45.8205128 C68.1025641,45.4102564 68.974359,44.7948718 69.7435897,44.025641 C72.9230769,40.7948718 72.9230769,35.5641026 69.6923077,32.3846154 L69.6923077,32.3846154 Z M66.2564103,43.8717949 L64.5128205,44.5897436 L57.4871795,37.5641026 L58.2051282,35.8205128 C58.5128205,35.0512821 58.974359,34.3846154 59.5384615,33.8205128 C61.9487179,31.4102564 65.8461538,31.4102564 68.2564103,33.8205128 C70.6666667,36.2307692 70.6666667,40.1282051 68.2564103,42.5384615 C67.6923077,43.1025641 67.025641,43.5641026 66.2564103,43.8717949 L66.2564103,43.8717949 Z\" id=\"concerts-30px\"></path></g></g></g></g></g></g></svg></button><p class=\"caption\" id=\"music-caption\">Concerts</p></a></div></div><div class=\"nav nav-item\" id=\"comedy-nav-item\"><div class=\"icon-caption-item item comedy\" id=\"comedy\"><a class=\"nav-links\" title=\"comedy\" href=\"").reference(ctx.get("theaterUrl"), ctx, "h").write("\" id=\"theater-nav-tab\"><button class=\"icon comedy-icon\"><svg width=\"32px\" height=\"24px\" viewBox=\"0 0 32 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"LAYOUT_Carousel_CategorySlider_5tiles_r01\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"comedy-icon-image\" transform=\"translate(-1174.000000, -145.000000)\" fill=\"#2F343B\"><g id=\"1280-SPECS\" transform=\"translate(23.000000, 24.000000)\"><g id=\"carousel\" transform=\"translate(347.000000, 91.000000)\"><g id=\"category-tiles\" transform=\"translate(160.000000, 0.000000)\"><g id=\"theater-&amp;-comedy\" transform=\"translate(600.000000, 0.000000)\"><path d=\"M74.8268736,41.7633784 C72.8854865,38.4689034 69.238032,35.8215574 65.3552578,34.6449592 C65.4140877,35.4685779 65.4140877,36.2921967 65.3552578,37.1158154 C68.2379235,38.1159239 70.8852695,40.057311 72.4736771,42.4105075 L70.1204806,46.9992405 C68.2967534,50.5878651 64.2374895,52.3527625 60.3547154,51.352654 C59.7075863,50.8231848 59.1781171,50.2937156 58.7663078,49.6465866 C59.0604573,49.5877566 59.295777,49.5289267 59.5899265,49.4112669 L59.8252462,49.352437 L60.0017359,49.2347772 C60.3547154,48.9994575 60.6488649,48.705308 60.9430145,48.4111584 L63.5315306,49.7642464 C64.0609998,48.7641379 63.6491904,47.5287098 62.6490819,46.9992405 C62.5314221,46.9404106 62.4137623,46.8815807 62.2961024,46.8815807 C64.5316391,43.7047655 64.8846185,39.410182 63.0608913,35.8215574 L60.1193957,30.115056 L59.4722667,30.0562261 C55.1188532,29.6444167 50.1771407,31.5269739 46.8238357,34.6449592 C45.8237273,35.5862377 44.9412786,36.6451761 44.2941496,37.7629445 L44,38.2924137 L46.9414956,43.9989151 C48.7652228,47.5875397 52.4126773,49.7642464 56.2366216,49.8819062 C56.9425805,51.2349942 57.942689,52.4115924 59.1781171,53.352871 L59.3546069,53.4705308 L59.5899265,53.5293607 C60.590035,53.8235103 61.6489734,54 62.7079118,54 C66.7083458,54 70.4734601,51.7644634 72.3560173,48.1170089 L75.2975128,42.4105075 L74.8268736,41.7633784 L74.8268736,41.7633784 Z M48.9417126,42.8223168 L46.5885161,38.2335838 C49.0593724,34.5861293 54.1775747,31.9387832 58.589818,32.115273 L60.9430145,36.7040061 C62.7667417,40.2926307 61.8254631,44.6460441 58.7074778,47.1169004 C54.8247037,48.2346687 50.7654398,46.4109414 48.9417126,42.8223168 Z M68.7898069,46.2310984 C68.3343435,46.5435598 67.6075174,46.2755995 67.1663955,45.6325923 C66.7252735,44.9895851 66.7368996,44.2150248 67.192363,43.9025634 C67.6478264,43.5901021 68.3746525,43.8580624 68.8157744,44.5010695 C69.2568963,45.1440767 69.2452703,45.918637 68.7898069,46.2310984 Z M52.4325402,40.9881835 C52.4474967,40.4360598 51.827737,39.9713579 51.0482682,39.9502429 C50.2687994,39.9291278 49.6247905,40.3595954 49.609834,40.9117192 C49.5948775,41.4638429 50.2146372,41.9285447 50.994106,41.9496598 C51.7735748,41.9707748 52.4175837,41.5403072 52.4325402,40.9881835 Z M59.0057396,37.8990651 C59.4468616,37.2560579 59.4352355,36.4814976 58.9797721,36.1690363 C58.5243087,35.8565749 57.7974826,36.1245352 57.3563607,36.7675424 C56.9152387,37.4105495 56.9268648,38.1851098 57.3823282,38.4975712 C57.8377916,38.8100326 58.5646177,38.5420723 59.0057396,37.8990651 Z M54.589384,43.7047655 C55.1188532,44.704874 56.3542814,45.1166834 57.3543899,44.5872142 C58.3544984,44.057745 58.7663078,42.8223168 58.2368385,41.8222083 L54.589384,43.7047655 Z\" id=\"theater-30px\"></path></g></g></g></g></g></g></svg></button><p class=\"caption\" id=\"comedy-caption\">Theater &amp; Comedy</p></a></div></div><div class=\"nav nav-item\" id=\"global-nav-item\"><div class=\"icon-caption-item item global-events\" id=\"global-events\"><a class=\"nav-links\" title=\"global-events\" href=\"").reference(ctx.get("globalEventsUrl"), ctx, "h").write("\" id=\"global-events-nav-tab\"><button class=\"icon global-events-icon\"><svg width=\"29px\" height=\"26px\" viewBox=\"0 0 29 26\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><g id=\"LAYOUT_Carousel_CategorySlider_5tiles_r01\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"global-events-icon-image\" transform=\"translate(-1376.000000, -144.000000)\" fill-rule=\"nonzero\" fill=\"#2F343B\"><g id=\"1280-SPECS\" transform=\"translate(23.000000, 24.000000)\"><g id=\"carousel\" transform=\"translate(347.000000, 91.000000)\"><g id=\"category-tiles\" transform=\"translate(160.000000, 0.000000)\"><g id=\"global-events\" transform=\"translate(800.000000, 0.000000)\"><path d=\"M72.0608208,38.8317095 L67.0404488,40.1768527 C66.470623,41.0525539 65.8074993,41.8142899 65.1945675,42.4230883 L64.298199,52.7514024 L57.6964866,50.9970475 L60.2704458,41.3879539 L60.7363448,41.853853 C61.4160024,42.4744612 61.9480366,42.8588722 62.0070859,42.8883968 L62.4210216,43.1836433 L62.8349572,42.8883968 C62.8940065,42.8588722 63.6651904,42.2624742 64.4605846,41.4995571 C65.9970475,40.0516681 68.0360201,37.5397107 68.0360201,34.614408 C68.0360201,33.343667 67.6220844,32.1910245 66.9129023,31.2751698 C65.8783584,29.8863301 64.2533215,29 62.4210216,29 C59.3179805,29 56.8066135,31.5119575 56.8066135,34.6149985 C56.8066135,36.3451432 57.5246531,37.9306171 58.4198406,39.2338353 L53.9840567,40.8482433 L46,54.7035725 L56.6519043,52.571302 L65.0144671,55 L74.5881311,53.171243 L72.0608208,38.8317095 Z M62.4210216,32.1609094 C63.7803366,32.1609094 64.8739297,33.2545025 64.8739297,34.6138175 C64.8739297,35.9731326 63.7803366,37.0667257 62.4210216,37.0667257 C61.0617065,37.0667257 59.9681134,35.9731326 59.9681134,34.6138175 C59.9681134,33.2545025 61.0617065,32.1609094 62.4210216,32.1609094 Z M55.8157662,51.172424 L49.4301742,52.2984942 L55.1963389,42.2908178 L58.5190434,41.081488 L58.5208149,41.0808975 L55.8157662,51.172424 Z M67.0079717,42.019191 L70.6513138,41.043106 L72.5361677,51.7328019 L66.0549159,52.996457 L67.0079717,42.019191 Z\" id=\"Shape\"></path></g></g></g></g></g></g></svg></button><p class=\"caption\">Global events</p></a></div></div></div></div></div>");
  }
  return body_0;
})();
(function() {
  dust.register("homepage-5.10.0/spinner", body_0);

  function body_0(chk, ctx) {
    return chk;
  }
  return body_0;
})();