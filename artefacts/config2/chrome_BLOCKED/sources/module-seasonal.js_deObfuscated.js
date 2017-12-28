define("seasonal-skins", ["component"], function(a) {
  "use strict";
  var b = a.extend({
    name: "seasonal-skins",
    init: function() {
      switch (this.options = this.options || {}, this.options.skinName) {
        case "snow":
          this.handleSnowSkin()
      }
    },
    handleSnowSkin: function() {
      var a, b;
      if (b = this.name, a = document.getElementById(b), !a) {
        var c, d, e = this.options.snowCount || 60;
        a = document.createElementNS("http://www.w3.org/2000/svg", "svg"), a.setAttribute("id", b), a.classList.add("snow-container"), a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        for (var f = e; f > 0; f--) {
          var g = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          g.classList.add("snow-element"), a.appendChild(g)
        }
        c = document.querySelector(".gh-container"), d = c.parentNode, d.insertBefore(a, c), this.executeSkin = this.executeSnowSkin.bind(this)
      }
    },
    getRandom: function(a, b) {
      return Math.random() * (b - a) + a
    },
    executeSnowSkin: function() {
      for (var a = document.querySelectorAll(".snow-element"), b = 0; b < a.length; b++) {
        var c = a[b];
        c.setAttribute("cx", this.getRandom(1, 100) + "%"), c.setAttribute("cy", "-" + this.getRandom(1, 100)), c.setAttribute("r", this.getRandom(1, 3))
      }
    },
    render: function() {
      var a = this.executeSkin;
      a && "function" == typeof a && a()
    }
  });
  return b
});