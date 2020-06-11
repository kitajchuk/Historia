/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Historia.js":
/*!*********************!*\
  !*** ./Historia.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Historia; });\n/* harmony import */ var properjs_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! properjs-controller */ \"./node_modules/properjs-controller/Controller.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar pushable = \"history\" in window && \"pushState\" in window.history;\nvar hashable = (\"onhashchange\" in window);\n\nvar Historia = /*#__PURE__*/function (_Controller) {\n  _inherits(Historia, _Controller);\n\n  var _super = _createSuper(Historia);\n\n  function Historia(options) {\n    var _this;\n\n    _classCallCheck(this, Historia);\n\n    _this = _super.call(this);\n    _this._initUrl = window.location.href.replace(window.location.hash, \"\");\n    _this._options = options || {};\n    _this._enabled = false;\n    _this._ishashpushed = false;\n    _this._states = {};\n    _this._callbacks = {};\n    _this._states[_this._initUrl] = {\n      uid: _this.uid() // Controller method\n\n    };\n\n    _this._stateEnable();\n\n    return _this;\n  }\n\n  _createClass(Historia, [{\n    key: \"push\",\n    value: function push(url) {\n      if (url === window.location.href) {\n        return;\n      }\n\n      this._push(url);\n\n      this._states[url] = {\n        uid: this.uid()\n      };\n    }\n  }, {\n    key: \"goBack\",\n    value: function goBack() {\n      window.history.back();\n      this.fire(\"backstate\");\n    }\n  }, {\n    key: \"goForward\",\n    value: function goForward() {\n      window.history.forward();\n      this.fire(\"forwardstate\");\n    }\n  }, {\n    key: \"_push\",\n    value: function _push(url) {\n      if (pushable && !this._options.forceHash) {\n        window.history.pushState(this._states[url], \"\", url);\n      } else {\n        // This replace ensures we get the following:\n        // \"/\":         root\n        // \"/foo/bar/\": uri path\n        var hashUri = url.replace(window.location.origin, \"\"); // Fix for root hash uri.\n        // Ensure we dont get the following:\n        // \"/foo/bar/#/foo/bar/\"\n        // Rather we would get the following:\n        // \"/foo/bar/#/\"\n\n        if (hashUri === window.location.pathname) {\n          hashUri = \"/\";\n        }\n\n        this._ishashpushed = true;\n        window.location.hash = hashUri;\n      }\n    }\n  }, {\n    key: \"_stateEnable\",\n    value: function _stateEnable() {\n      var _this2 = this;\n\n      if (this._enabled) {\n        return this;\n      }\n\n      this._enabled = true;\n\n      var handler = function handler() {\n        var url = window.location.href;\n        var roots = [\"#/\", \"#\", \"\"]; // Ensure we clean out the hash for Router\n        // Example:\n        // Start:  http://localhost/foo/#/bar/\n        // Result: http://localhost/foo/bar/\n\n        if (_this2._options.forceHash) {\n          // Shave the hash from the end of the URL\n          url = url.replace(window.location.hash, \"\"); // Shave the hash root from the end of the URL\n\n          url = url.replace(window.location.pathname, \"\"); // Empty hash means we have gone back to root\n\n          if (roots.indexOf(window.location.hash) !== -1) {\n            // Append the hash root to the URL\n            url = url + window.location.pathname;\n          } else {\n            // Append the applied hash pathname to the URL\n            url = url + window.location.hash.replace(\"#\", \"\");\n          }\n        }\n\n        _this2.fire(\"popstate\", url, _this2._states[url]);\n      };\n\n      if (pushable && !this._options.forceHash) {\n        window.addEventListener(\"popstate\", function () {\n          handler();\n        }, false);\n      } else if (hashable) {\n        // For hashstate we should apply initial hash on page load\n        this._push(this._initUrl);\n\n        window.addEventListener(\"hashchange\", function () {\n          if (!_this2._ishashpushed) {\n            handler();\n          } else {\n            _this2._ishashpushed = false;\n          }\n        }, false);\n      }\n    }\n  }]);\n\n  return Historia;\n}(properjs_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./Historia.js?");

/***/ }),

/***/ "./node_modules/properjs-controller/Controller.js":
/*!********************************************************!*\
  !*** ./node_modules/properjs-controller/Controller.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar raf = window.requestAnimationFrame;\nvar caf = window.cancelAnimationFrame;\n\nvar Controller = /*#__PURE__*/function () {\n  function Controller() {\n    _classCallCheck(this, Controller);\n\n    // Unique event IDs\n    this._uid = 0;\n    this._uprop = \"properjsUID\"; // Store for event handlers\n\n    this._handlers = {}; // RAF manager props\n\n    this._started = false;\n    this._paused = false;\n    this._cycle = null;\n  }\n\n  _createClass(Controller, [{\n    key: \"uid\",\n    value: function uid() {\n      this._uid = this._uid + 1;\n      return this._uid;\n    }\n  }, {\n    key: \"go\",\n    value: function go(callback) {\n      var _this = this;\n\n      if (this._started) {\n        return this;\n      }\n\n      this._started = true;\n\n      this._anim = function (elapsed) {\n        _this._cycle = raf(_this._anim);\n\n        if (typeof callback === \"function\") {\n          callback(elapsed);\n        }\n      };\n\n      this._cycle = raf(this._anim);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this._paused = true;\n      return this;\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      this._paused = false;\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      caf(this._cycle);\n      this._paused = false;\n      this._started = false;\n      this._cycle = null;\n      return this;\n    }\n  }, {\n    key: \"on\",\n    value: function on(event, handler) {\n      var events = event.split(\" \");\n      handler[this._uprop] = this.uid();\n\n      for (var i = events.length; i--;) {\n        if (typeof handler === \"function\") {\n          if (!this._handlers[events[i]]) {\n            this._handlers[events[i]] = [];\n          }\n\n          this._handlers[events[i]].push(handler);\n        }\n      }\n\n      return this;\n    }\n  }, {\n    key: \"off\",\n    value: function off(event, handler) {\n      if (!this._handlers[event]) {\n        return this;\n      }\n\n      if (handler) {\n        this._offOne(event, handler);\n      } else {\n        this._offAll(event);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"fire\",\n    value: function fire(event) {\n      if (!this._handlers[event]) {\n        return this;\n      }\n\n      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        args[_key - 1] = arguments[_key];\n      }\n\n      for (var i = this._handlers[event].length; i--;) {\n        this._handlers[event][i].apply(this, args);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"_offOne\",\n    value: function _offOne(event, handler) {\n      for (var i = 0, len = this._handlers[event].length; i < len; i++) {\n        if (handler[this._uprop] === this._handlers[event][i][this._uprop]) {\n          this._handlers[event].splice(i, 1);\n\n          break;\n        }\n      }\n    }\n  }, {\n    key: \"_offAll\",\n    value: function _offAll(event) {\n      for (var i = this._handlers[event].length; i--;) {\n        this._handlers[event][i] = null;\n      }\n\n      delete this._handlers[event];\n    }\n  }]);\n\n  return Controller;\n}();\n\n\n\n//# sourceURL=webpack:///./node_modules/properjs-controller/Controller.js?");

/***/ }),

/***/ "./test/test.js":
/*!**********************!*\
  !*** ./test/test.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Historia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Historia */ \"./Historia.js\");\n\nvar historia = new _Historia__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  // Force Hash state instead...\n  forceHash: false // Default\n\n});\nhistoria.on(\"popstate\", function (url, state) {\n  console.log(url, state);\n}); // Push state to address bar\n\nhistoria.push(\"http://localhost:9999/some/url\"); // Go back in history\n\nsetTimeout(function () {\n  historia.goBack();\n}, 2000); // Go forward in history\n\nsetTimeout(function () {\n  historia.goForward();\n}, 4000);\n\n//# sourceURL=webpack:///./test/test.js?");

/***/ })

/******/ });