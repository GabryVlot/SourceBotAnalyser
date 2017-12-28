'use strict';

define([], function() {
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Siema = function() {
    /**
     * Create a Siema.
     * @param {Object} options - Optional settings object.
     */
    function Siema(options) {
      var _this = this;

      _classCallCheck(this, Siema);

      // Merge defaults with user's settings
      this.config = Siema.mergeSettings(options);

      // Create global references
      this.selector = typeof this.config.selector === 'string' ? document.querySelector(this.config.selector) : this.config.selector;
      this.selectorWidth = this.selector.offsetWidth;
      this.innerElements = [].slice.call(this.selector.children);
      this.currentSlide = this.config.startIndex;
      this.transformProperty = Siema.webkitOrNot();

      // Bind all event handlers for referencability
      ['resizeHandler', 'touchstartHandler', 'touchendHandler', 'touchmoveHandler', 'mousedownHandler', 'mouseupHandler', 'mouseleaveHandler', 'mousemoveHandler'].forEach(function(method) {
        _this[method] = _this[method].bind(_this);
      });

      // Build markup and apply required styling to elements
      this.init();
    }

    /**
     * Overrides default settings with custom ones.
     * @param {Object} options - Optional settings object.
     * @returns {Object} - Custom Siema settings.
     */


    _createClass(Siema, [{
      key: 'init',
      value: function init() {
        // Resize element on window resize
        window.addEventListener('resize', this.resizeHandler);

        // If element is draggable / swipable, add event handlers
        if (this.config.draggable) {
          // Keep track pointer hold and dragging distance
          this.pointerDown = false;
          this.drag = {
            startX: 0,
            endX: 0,
            startY: 0,
            letItGo: null
          };

          // Touch events
          this.selector.addEventListener('touchstart', this.touchstartHandler);
          this.selector.addEventListener('touchend', this.touchendHandler);
          this.selector.addEventListener('touchmove', this.touchmoveHandler, {
            passive: true
          });

          // Mouse events
          this.selector.addEventListener('mousedown', this.mousedownHandler);
          this.selector.addEventListener('mouseup', this.mouseupHandler);
          this.selector.addEventListener('mouseleave', this.mouseleaveHandler);
          this.selector.addEventListener('mousemove', this.mousemoveHandler);
        }

        if (this.selector === null) {
          throw new Error('Something wrong with your selector 😭');
        }

        // update perPage number dependable of user value
        this.resolveSlidesNumber();

        // hide everything out of selector's boundaries
        this.selector.style.overflow = 'hidden';

        // Create frame and apply styling
        this.sliderFrame = document.createElement('div');
        this.sliderFrame.setAttribute('id', 'caro');
        this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + 'px';
        this.sliderFrame.style.webkitTransition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
        this.sliderFrame.style.transition = 'all ' + this.config.duration + 'ms ' + this.config.easing;

        if (this.config.draggable) {
          this.selector.style.cursor = '-webkit-grab';
        }

        // Create a document fragment to put slides into it
        var docFragment = document.createDocumentFragment();

        // Loop through the slides, add styling and add them to document fragment
        for (var i = 0; i < this.innerElements.length; i++) {
          var elementContainer = document.createElement('div');
          elementContainer.style.cssFloat = 'left';
          elementContainer.style.float = 'left';
          elementContainer.style.width = 100 / this.innerElements.length + '%';
          elementContainer.appendChild(this.innerElements[i]);
          docFragment.appendChild(elementContainer);
        }

        // Add fragment to the frame
        this.sliderFrame.appendChild(docFragment);

        // Clear selector (just in case something is there) and insert a frame
        this.selector.innerHTML = '';
        this.selector.appendChild(this.sliderFrame);

        // Go to currently active slide after initial build
        this.slideToCurrent();
        this.config.onInit.call(this);
      }
    }, {
      key: 'resolveSlidesNumber',
      value: function resolveSlidesNumber() {
        if (typeof this.config.perPage === 'number') {
          this.perPage = this.config.perPage;
        } else if (_typeof(this.config.perPage) === 'object') {
          this.perPage = 1;
          for (var viewport in this.config.perPage) {
            if (window.innerWidth >= viewport) {
              this.perPage = this.config.perPage[viewport];
            }
          }
        }
      }
    }, {
      key: 'prev',
      value: function prev() {
        var howManySlides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var callback = arguments[1];

        if (this.innerElements.length <= this.perPage) {
          return;
        }
        var beforeChange = this.currentSlide;
        if (this.currentSlide === 0 && this.config.loop) {
          this.currentSlide = this.innerElements.length - this.perPage;
        } else {
          this.currentSlide = Math.max(this.currentSlide - howManySlides, 0);
        }
        if (beforeChange !== this.currentSlide) {
          this.slideToCurrent();
          this.config.onChange.call(this);
          this.setSlideDirection("prev");
          if (callback) {
            callback.call(this);
          }
        }
      }
    }, {
      key: 'next',
      value: function next() {
        var howManySlides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var callback = arguments[1];

        if (this.innerElements.length <= this.perPage) {
          return;
        }
        var beforeChange = this.currentSlide;
        if (this.currentSlide === this.innerElements.length - this.perPage && this.config.loop) {
          this.currentSlide = 0;
        } else {
          this.currentSlide = this.currentSlide + howManySlides;
        }
        if (beforeChange !== this.currentSlide) {
          this.slideToCurrent();
          this.config.onChange.call(this);
          this.setSlideDirection("next");
          if (callback) {
            callback.call(this);
          }
        }
      }
    }, {
      key: 'setSlideDirection',
      value: function setSlideDirection(clickElement) {
        this.slideDirection = clickElement;
      }
    }, {
      key: 'getSlideDirection',
      value: function getSlideDirection() {
        return this.slideDirection;
      }
    }, {
      key: 'goTo',
      value: function goTo(index, callback) {
        if (this.innerElements.length <= this.perPage) {
          return;
        }
        this.currentSlide = Math.min(Math.max(index, 0), this.innerElements.length - this.perPage);
        this.slideToCurrent();
        if (callback) {
          callback.call(this);
        }
      }
    }, {
      key: 'slideToCurrent',
      value: function slideToCurrent() {
        this.sliderFrame.style[this.transformProperty] = 'translate3d(-' + this.currentSlide * (this.selectorWidth / this.perPage) + 'px, 0, 0)';
      }
    }, {
      key: 'updateAfterDrag',
      value: function updateAfterDrag() {
        var movement = this.drag.endX - this.drag.startX;
        var movementDistance = Math.abs(movement);
        var howManySliderToSlide = Math.ceil(movementDistance / (this.selectorWidth / this.perPage));

        if (movement > 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {
          this.prev(howManySliderToSlide);
        } else if (movement < 0 && movementDistance > this.config.threshold && this.innerElements.length > this.perPage) {
          this.next(howManySliderToSlide);
        }
        this.slideToCurrent();
      }
    }, {
      key: 'resizeHandler',
      value: function resizeHandler() {
        // update perPage number dependable of user value
        this.resolveSlidesNumber();

        this.selectorWidth = this.selector.offsetWidth;
        this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + 'px';

        this.slideToCurrent();
      }
    }, {
      key: 'clearDrag',
      value: function clearDrag() {
        this.drag = {
          startX: 0,
          endX: 0,
          startY: 0,
          letItGo: null
        };
      }
    }, {
      key: 'touchstartHandler',
      value: function touchstartHandler(e) {
        e.stopPropagation();
        this.pointerDown = true;
        this.drag.startX = e.touches[0].pageX;
        this.drag.startY = e.touches[0].pageY;
      }
    }, {
      key: 'touchendHandler',
      value: function touchendHandler(e) {
        e.stopPropagation();
        this.pointerDown = false;
        this.sliderFrame.style.webkitTransition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
        this.sliderFrame.style.transition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
        if (this.drag.endX) {
          this.updateAfterDrag();
        }
        this.clearDrag();
      }
    }, {
      key: 'touchmoveHandler',
      value: function touchmoveHandler(e) {
        e.stopPropagation();

        if (this.drag.letItGo === null) {
          this.drag.letItGo = Math.abs(this.drag.startY - e.touches[0].pageY) < Math.abs(this.drag.startX - e.touches[0].pageX);
        }

        if (this.pointerDown && this.drag.letItGo) {
          this.drag.endX = e.touches[0].pageX;
          this.sliderFrame.style.webkitTransition = 'all 0ms ' + this.config.easing;
          this.sliderFrame.style.transition = 'all 0ms ' + this.config.easing;
          this.sliderFrame.style[this.transformProperty] = 'translate3d(' + (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1 + 'px, 0, 0)';
        }
      }
    }, {
      key: 'mousedownHandler',
      value: function mousedownHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        this.pointerDown = true;
        this.drag.startX = e.pageX;
      }
    }, {
      key: 'mouseupHandler',
      value: function mouseupHandler(e) {
        e.stopPropagation();
        this.pointerDown = false;
        this.selector.style.cursor = '-webkit-grab';
        this.sliderFrame.style.webkitTransition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
        this.sliderFrame.style.transition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
        if (this.drag.endX) {
          this.updateAfterDrag();
        }
        this.clearDrag();
      }
    }, {
      key: 'mousemoveHandler',
      value: function mousemoveHandler(e) {
        e.preventDefault();
        if (this.pointerDown) {
          this.drag.endX = e.pageX;
          this.selector.style.cursor = '-webkit-grabbing';
          this.sliderFrame.style.webkitTransition = 'all 0ms ' + this.config.easing;
          this.sliderFrame.style.transition = 'all 0ms ' + this.config.easing;
          this.sliderFrame.style[this.transformProperty] = 'translate3d(' + (this.currentSlide * (this.selectorWidth / this.perPage) + (this.drag.startX - this.drag.endX)) * -1 + 'px, 0, 0)';
        }
      }
    }, {
      key: 'mouseleaveHandler',
      value: function mouseleaveHandler(e) {
        if (this.pointerDown) {
          this.pointerDown = false;
          this.selector.style.cursor = '-webkit-grab';
          this.drag.endX = e.pageX;
          this.sliderFrame.style.webkitTransition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
          this.sliderFrame.style.transition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
          this.updateAfterDrag();
          this.clearDrag();
        }
      }
    }, {
      key: 'updateFrame',
      value: function updateFrame() {
        // Create frame and apply styling
        this.sliderFrame = document.createElement('div');
        this.sliderFrame.style.width = this.selectorWidth / this.perPage * this.innerElements.length + 'px';
        this.sliderFrame.style.webkitTransition = 'all ' + this.config.duration + 'ms ' + this.config.easing;
        this.sliderFrame.style.transition = 'all ' + this.config.duration + 'ms ' + this.config.easing;

        if (this.config.draggable) {
          this.selector.style.cursor = '-webkit-grab';
        }

        // Create a document fragment to put slides into it
        var docFragment = document.createDocumentFragment();

        // Loop through the slides, add styling and add them to document fragment
        for (var i = 0; i < this.innerElements.length; i++) {
          var elementContainer = document.createElement('div');
          elementContainer.style.cssFloat = 'left';
          elementContainer.style.float = 'left';
          elementContainer.style.width = 100 / this.innerElements.length + '%';
          elementContainer.appendChild(this.innerElements[i]);
          docFragment.appendChild(elementContainer);
        }

        // Add fragment to the frame
        this.sliderFrame.appendChild(docFragment);

        // Clear selector (just in case something is there) and insert a frame
        this.selector.innerHTML = '';
        this.selector.appendChild(this.sliderFrame);

        // Go to currently active slide after initial build
        this.slideToCurrent();
      }
    }, {
      key: 'remove',
      value: function remove(index, callback) {
        if (index < 0 || index > this.innerElements.length) {
          throw new Error('Item to remove doesn\'t exist 😭');
        }
        this.innerElements.splice(index, 1);

        // Avoide shifting content
        this.currentSlide = index < this.currentSlide ? this.currentSlide - 1 : this.currentSlide;

        this.updateFrame();
        if (callback) {
          callback.call(this);
        }
      }
    }, {
      key: 'insert',
      value: function insert(item, index, callback) {
        if (index < 0 || index > this.innerElements.length + 1) {
          throw new Error('Unable to inset it at this index 😭');
        }
        if (this.innerElements.indexOf(item) !== -1) {
          throw new Error('The same item in a carousel? Really? Nope 😭');
        }
        this.innerElements.splice(index, 0, item);

        // Avoide shifting content
        this.currentSlide = index <= this.currentSlide ? this.currentSlide + 1 : this.currentSlide;

        this.updateFrame();
        if (callback) {
          callback.call(this);
        }
      }
    }, {
      key: 'prepend',
      value: function prepend(item, callback) {
        this.insert(item, 0);
        if (callback) {
          callback.call(this);
        }
      }
    }, {
      key: 'append',
      value: function append(item, callback) {
        this.insert(item, this.innerElements.length + 1);
        if (callback) {
          callback.call(this);
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var restoreMarkup = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var callback = arguments[1];

        window.removeEventListener('resize', this.resizeHandler);
        this.selector.style.cursor = 'auto';
        this.selector.removeEventListener('touchstart', this.touchstartHandler);
        this.selector.removeEventListener('touchend', this.touchendHandler);
        this.selector.removeEventListener('touchmove', this.touchmoveHandler);
        this.selector.removeEventListener('mousedown', this.mousedownHandler);
        this.selector.removeEventListener('mouseup', this.mouseupHandler);
        this.selector.removeEventListener('mouseleave', this.mouseleaveHandler);
        this.selector.removeEventListener('mousemove', this.mousemoveHandler);

        if (restoreMarkup) {
          var slides = document.createDocumentFragment();
          for (var i = 0; i < this.innerElements.length; i++) {
            slides.appendChild(this.innerElements[i]);
          }
          this.selector.innerHTML = '';
          this.selector.appendChild(slides);
          this.selector.removeAttribute('style');
        }

        if (callback) {
          callback.call(this);
        }
      }
    }], [{
      key: 'mergeSettings',
      value: function mergeSettings(options) {
        var settings = {
          selector: '.siema',
          duration: 200,
          easing: 'ease-out',
          perPage: 1,
          startIndex: 0,
          draggable: true,
          threshold: 20,
          loop: false,
          onInit: function onInit() {},
          onChange: function onChange() {}
        };
        var userSttings = options;
        for (var attrname in userSttings) {
          settings[attrname] = userSttings[attrname];
        }
        return settings;
      }
    }, {
      key: 'webkitOrNot',
      value: function webkitOrNot() {
        var style = document.documentElement.style;
        if (typeof style.transform == 'string') {
          return 'transform';
        }
        return 'WebkitTransform';
      }
    }]);

    return Siema;
  }();

  return Siema;
});
//# sourceMappingURL=siema.js.map