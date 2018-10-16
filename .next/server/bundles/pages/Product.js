module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/CoverAllPages.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/common/CoverAllPages.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var productName = _ref.productName;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-399881196" + " " + "CoverAllPages"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-399881196" + " " + "cover"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-399881196" + " " + "cover-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-399881196" + " " + "cover-text"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-399881196" + " " + "cover-h1"
  }, productName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-399881196"
  }, "The easiest way to save on your internet bill")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "399881196",
    css: ".cover.jsx-399881196{background-image:url('https://images.pexels.com/photos/421888/pexels-photo-421888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');background-repeat:no-repeat;background-size:cover;height:15em;border-top:10px solid #ff3764;}.cover-container.jsx-399881196{position:relative;top:-1px;width:100%;height:87%;background-color:rgba(63,71,81,0.9);text-align:center;display:table;margin:0 auto;color:whitesmoke;}.cover-h1.jsx-399881196{font-weight:lighter;text-transform:uppercase;}.cover-text.jsx-399881196{display:table-cell;vertical-align:middle;}.cover-container.jsx-399881196 h1.jsx-399881196,.cover-container.jsx-399881196 h4.jsx-399881196{color:whitesmoke;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9Db3ZlckFsbFBhZ2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQixBQUcySixBQU9wSCxBQVdFLEFBSUQsQUFJRixpQkFDckIsQ0FuQmEsQ0FlYSxDQUpHLE9BVmQsV0FDQSxHQWNmLElBSkEsSUFUMkMsb0NBQ3JCLGtCQUNKLGNBQ0EsY0FDRyxHQWRXLGNBZWhDLGNBZDBCLHNCQUNWLFlBQ2tCLDhCQUNsQyIsImZpbGUiOiJjb21tb24vQ292ZXJBbGxQYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtYXJsaW4vY3gtY2xvdWQtZXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwcm9kdWN0TmFtZSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb3ZlckFsbFBhZ2VzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY292ZXItaDFcIj57cHJvZHVjdE5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5UaGUgZWFzaWVzdCB3YXkgdG8gc2F2ZSBvbiB5b3VyIGludGVybmV0IGJpbGw8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YCBcbiAgICAgICAgICAgICAgICAuY292ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzQyMTg4OC9wZXhlbHMtcGhvdG8tNDIxODg4LmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZkcHI9MiZoPTc1MCZ3PTEyNjAnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNWVtO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNmZjM3NjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3Zlci1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODclO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA3MSwgODEsIDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdmVyLWgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3Zlci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdmVyLWNvbnRhaW5lciBoMSwgLmNvdmVyLWNvbnRhaW5lciBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0= */\n/*@ sourceURL=common/CoverAllPages.js */"
  }));
});

/***/ }),

/***/ "./common/Util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);


function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var accessToken = 'e6bdb60d3ec5313a17274fc3db04a4fe3d28b0fbe6b0b8305c2c84785a5ac700';
var spaceId = '52dq79v5sxg3';
 // https://cdn.contentful.com/spaces/52dq79v5sxg3/entries?access_token=e6bdb60d3ec5313a17274fc3db04a4fe3d28b0fbe6b0b8305c2c84785a5ac700&&content_type=customerTestimonials&fields.category=customerTestimonials`

var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "fetchProduct",
    value: function () {
      var _fetchProduct = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=2PqfXUJwE8qSYKuM0U6w8M&fields.category=products"));

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt("return", json);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchProduct() {
        return _fetchProduct.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchRecommendedProducts",
    value: function () {
      var _fetchRecommendedProducts = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=2PqfXUJwE8qSYKuM0U6w8M&fields.category=recommendedProducts"));

              case 2:
                res = _context2.sent;
                _context2.next = 5;
                return res.json();

              case 5:
                json = _context2.sent;
                return _context2.abrupt("return", json);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function fetchRecommendedProducts() {
        return _fetchRecommendedProducts.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchProductById",
    value: function () {
      var _fetchProductById = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(productId) {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&sys.id=").concat(productId));

              case 2:
                res = _context3.sent;
                _context3.next = 5;
                return res.json();

              case 5:
                json = _context3.sent;
                return _context3.abrupt("return", json);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function fetchProductById(_x) {
        return _fetchProductById.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchUsers",
    value: function () {
      var _fetchUsers = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=user&fields.category=users"));

              case 2:
                res = _context4.sent;
                _context4.next = 5;
                return res.json();

              case 5:
                json = _context4.sent;
                return _context4.abrupt("return", json);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function fetchUsers() {
        return _fetchUsers.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchCustomerTestimonials",
    value: function () {
      var _fetchCustomerTestimonials = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee5() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=customerTestimonials&fields.category=customerTestimonials"));

              case 2:
                res = _context5.sent;
                _context5.next = 5;
                return res.json();

              case 5:
                json = _context5.sent;
                return _context5.abrupt("return", json);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function fetchCustomerTestimonials() {
        return _fetchCustomerTestimonials.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchTwitterFeeds",
    value: function () {
      var _fetchTwitterFeeds = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee6() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=twitterFeeds&fields.category=twitterFeeds"));

              case 2:
                res = _context6.sent;
                _context6.next = 5;
                return res.json();

              case 5:
                json = _context6.sent;
                return _context6.abrupt("return", json);

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function fetchTwitterFeeds() {
        return _fetchTwitterFeeds.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchTechnicalSpecifications",
    value: function () {
      var _fetchTechnicalSpecifications = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee7() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=technicalSpecifications&fields.category=technicalSpecifications"));

              case 2:
                res = _context7.sent;
                _context7.next = 5;
                return res.json();

              case 5:
                json = _context7.sent;
                return _context7.abrupt("return", json);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function fetchTechnicalSpecifications() {
        return _fetchTechnicalSpecifications.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchCalculationsOfSavings",
    value: function () {
      var _fetchCalculationsOfSavings = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee8() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=calculationsOfSavings&fields.category=calculationOfSavings"));

              case 2:
                res = _context8.sent;
                _context8.next = 5;
                return res.json();

              case 5:
                json = _context8.sent;
                return _context8.abrupt("return", json);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function fetchCalculationsOfSavings() {
        return _fetchCalculationsOfSavings.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchCalendar",
    value: function () {
      var _fetchCalendar = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee9() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return fetch("https://cdn.contentful.com/spaces/".concat(spaceId, "/entries?access_token=").concat(accessToken, "&&content_type=twitterFeeds&fields.category=twitterFeeds"));

              case 2:
                res = _context9.sent;
                _context9.next = 5;
                return res.json();

              case 5:
                json = _context9.sent;
                return _context9.abrupt("return", json);

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function fetchCalendar() {
        return _fetchCalendar.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchCommerceCategories",
    value: function () {
      var _fetchCommerceCategories = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee10() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return fetch("https://dev.cxcloud.com/api/v1/categories");

              case 2:
                res = _context10.sent;
                _context10.next = 5;
                return res.json();

              case 5:
                json = _context10.sent;
                return _context10.abrupt("return", json);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function fetchCommerceCategories() {
        return _fetchCommerceCategories.apply(this, arguments);
      };
    }()
  }]);

  return Util;
}();



/***/ }),

/***/ "./components/Calendar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Util__ = __webpack_require__("./common/Util.js");
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Calendar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var widget = new TimekitBooking();
      widget.init({
        app_key: 'test_widget_key_a9NEulAS6f0FC104ngNFBoXj6zCRvPYA',
        project_id: 'cba0ed3e-ebf3-40d8-a091-087fa274945f'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-1579580561"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-1579580561"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-1579580561"
      }, "Book a meeting with CXCloud engineer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "bookingjs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-1579580561"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1579580561",
        css: "#bookingjs.jsx-1579580561{width:50%;}.Calendar.jsx-1579580561 h3.jsx-1579580561{text-align:center;}.riddle_target.jsx-1579580561{margin:0 auto, maxWidth:1200px, width:1200px;}.fc-slats.jsx-1579580561 table.jsx-1579580561 tbody.jsx-1579580561{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2FsZW5kYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUdtQyxBQUdRLEFBTXZCLEFBRXFCLFVBVnBCLE1BV0EsRUFSQSwyQkFLQSIsImZpbGUiOiJjb21wb25lbnRzL0NhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb21tb24vVXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB2YXIgd2lkZ2V0ID0gbmV3IFRpbWVraXRCb29raW5nKCk7XG4gICAgICAgIHdpZGdldC5pbml0KHtcbiAgICAgICAgICAgIGFwcF9rZXk6ICd0ZXN0X3dpZGdldF9rZXlfYTlORXVsQVM2ZjBGQzEwNG5nTkZCb1hqNnpDUnZQWUEnLFxuICAgICAgICAgICAgcHJvamVjdF9pZDogJ2NiYTBlZDNlLWViZjMtNDBkOC1hMDkxLTA4N2ZhMjc0OTQ1ZidcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkJvb2sgYSBtZWV0aW5nIHdpdGggQ1hDbG91ZCBlbmdpbmVlcjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJib29raW5nanNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICNib29raW5nanMge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuQ2FsZW5kYXIgaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yaWRkbGVfdGFyZ2V0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IDEyMDBweCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAwcHhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZmMtc2xhdHMgdGFibGUgdGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iXX0= */\n/*@ sourceURL=components/Calendar.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/CurrentService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Util__ = __webpack_require__("./common/Util.js");
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/CurrentService.js";


function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }




/* unused harmony default export */ var _unused_webpack_default_export = (function (_ref) {
  _objectDestructuringEmpty(_ref);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2736278173" + " " + "CurrentService"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-2736278173" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-2736278173" + " " + "subContainer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: image,
    alt: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-2736278173" + " " + "home-icon"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-2736278173" + " " + "details"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-2736278173"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-2736278173" + " " + "medium bold"
  }, productName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-2736278173"
  }, "100 Mbps"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-2736278173" + " " + "medium bold"
  }, "$", price, "/mo"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-2736278173"
  }, productShortDescription)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-2736278173"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-2736278173"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: '/Product?id=' + productId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    className: "jsx-2736278173"
  }, "Manage subscription"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2736278173",
    css: ".CurrentService.jsx-2736278173{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;background:#f7f7f7;padding:10px;}.CurrentService.jsx-2736278173:nth-child(odd){background-color:#f4f2f2;}.container.jsx-2736278173{-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.home-icon.jsx-2736278173{width:100px;height:100px;margin-bottom:16px;margin-left:30px;}.details.jsx-2736278173{margin-left:25px;}@media only screen and (max-width:880px){.CurrentService.jsx-2736278173{max-width:28em;max-height:28em;}}@media only screen and (max-width:480px){.container.jsx-2736278173{display:block;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VycmVudFNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEJpQixBQUdtQyxBQVFXLEFBR0osQUFJVCxBQU1LLEFBSUUsQUFNRCxZQWZMLEVBZkEsQUErQmIsQ0FOb0IsRUFKeEIsUUFiQSxBQVF1QixNQVVuQixhQVRpQixpQkFDckIsMkJBakIwQixhQVVGLGlFQVRVLHFDQVVsQyw4RUFUdUIsbUJBQ04sYUFDakIiLCJmaWxlIjoiY29tcG9uZW50cy9DdXJyZW50U2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtYXJsaW4vY3gtY2xvdWQtZXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb21tb24vVXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgKHtcblxufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ3VycmVudFNlcnZpY2VcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJob21lLWljb25cIiBzcmM9e2ltYWdlfSBhbHQ9XCJibGFua1wiPjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtZWRpdW0gYm9sZFwiPntwcm9kdWN0TmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD4xMDAgTWJwczwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWVkaXVtIGJvbGRcIj4ke3ByaWNlfS9tbzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3RTaG9ydERlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9eycvUHJvZHVjdD9pZD0nICsgcHJvZHVjdElkfT5NYW5hZ2Ugc3Vic2NyaXB0aW9uPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuQ3VycmVudFNlcnZpY2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuQ3VycmVudFNlcnZpY2U6bnRoLWNoaWxkKG9kZCkge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmMmYyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmhvbWUtaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgLkN1cnJlbnRTZXJ2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjhlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI4ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXX0= */\n/*@ sourceURL=components/CurrentService.js */"
  }));
});

/***/ }),

/***/ "./components/FindPlan.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/FindPlan.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-1567408770" + " " + "FindPlan backgroundLightGrey"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-1567408770" + " " + "subcontainer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-1567408770" + " " + "findPlan-text"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1567408770" + " " + "normal bold"
  }, "Find the right plan for you."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1567408770"
  }, "Explore Internet, TV, and phone bundlesavailable in your area. Get the 100% fiber-optic network offered to you by cxcloud that no one else can match.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-1567408770"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/images/next.png",
    alt: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-1567408770" + " " + "arrow-icon"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1567408770",
    css: ".FindPlan.jsx-1567408770{padding:30px;width:-webkit-fill-available;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#cecece;}.FindPlan.jsx-1567408770 h2.jsx-1567408770{color:#ff3764;}.subcontainer.jsx-1567408770{max-width:75em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}.findPlan-text.jsx-1567408770{grid-column:1;}.arrow-icon.jsx-1567408770{grid-column:2;width:auto;height:70%;margin-left:50px;}@media only screen and (max-width :480px){.arrow-icon.jsx-1567408770{margin-left:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmluZFBsYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWlCLEFBR2tDLEFBT0MsQUFHQyxBQU1ELEFBR0EsQUFPTyxhQXpCUSxDQU9qQyxBQVNBLEFBR2UsQ0FUUyxFQWdCcEIsUUFOVyxXQUNNLE1BcEJHLFdBcUJ4QixnRUFYdUIsMkJBVEEsa0VBVUwsY0FDbEIsYUFWNkIseUJBQzdCIiwiZmlsZSI6ImNvbXBvbmVudHMvRmluZFBsYW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbiBcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZpbmRQbGFuIGJhY2tncm91bmRMaWdodEdyZXlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5kUGxhbi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJub3JtYWwgYm9sZFwiPkZpbmQgdGhlIHJpZ2h0IHBsYW4gZm9yIHlvdS48L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD5FeHBsb3JlIEludGVybmV0LCBUViwgYW5kIHBob25lIGJ1bmRsZXNhdmFpbGFibGUgaW4geW91ciBhcmVhLiBHZXQgdGhlIDEwMCUgZmliZXItb3B0aWMgbmV0d29yayBvZmZlcmVkIHRvIHlvdVxuICAgICAgICAgICAgICAgICAgICBieSBjeGNsb3VkIHRoYXQgbm8gb25lIGVsc2UgY2FuIG1hdGNoLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpbWcgY2xhc3NOYW1lPVwiYXJyb3ctaWNvblwiIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbmV4dC5wbmdcIiBhbHQ9XCJibGFua1wiIC8+PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLkZpbmRQbGFuIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuRmluZFBsYW4gaDIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMzc2NDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1YmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzVlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZmluZFBsYW4tdGV4dCB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYXJyb3ctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICAuYXJyb3ctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdfQ== */\n/*@ sourceURL=components/FindPlan.js */"
  }));
});

/***/ }),

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Footer.js";



/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-910739594" + " " + "Footer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-910739594"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-910739594"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-910739594" + " " + "copyright"
  }, "\xA9 2018 Tieto")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    className: "jsx-910739594" + " " + "footer-menu"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/About',
      query: {
        name: 'about'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-910739594"
  }, "About")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Contact',
      query: {
        name: 'contact'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-910739594"
  }, "Contact us")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Sitemap',
      query: {
        name: 'sitemap'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-910739594"
  }, "Site Map")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Careers',
      query: {
        name: 'careers'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-910739594"
  }, "Careers")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Terms',
      query: {
        name: 'terms'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-910739594"
  }, "Terms and Conditions")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Privacy',
      query: {
        name: 'privacy'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-910739594"
  }, "Privacy Policy")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Ads',
      query: {
        name: 'ads'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-910739594"
  }, "About Our Ads")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: {
      pathname: '/Stores',
      query: {
        name: 'stores'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-910739594"
  }, "Store Locator")))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "910739594",
    css: ".Footer.jsx-910739594{background-color:#4a4a4a;color:whitesmoke;padding:30px;display:grid;}.footer-menu.jsx-910739594{width:100%;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));text-align:center;}.footer-menu.jsx-910739594>p.jsx-910739594{text-align:center;font-size:14px;font-weight:100;color:white;}.footer-menu.jsx-910739594 a.jsx-910739594{color:white;margin-bottom:10px;-webkit-text-decoration:none;text-decoration:none;}.copyright.jsx-910739594{font-size:18px;font-weight:200;color:#e7e7e7;margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDaUIsQUFHa0QsQUFNZCxBQU1PLEFBTU4sQUFLRyxXQWhCRixDQVlNLEdBS0gsR0FYRCxNQUw0QyxDQVAxQyxNQW1CSSxBQUtQLEVBWEUsU0FaSCxHQXdCSSxJQVhMLE1BWkMsTUFhakIsQ0FXQSxNQXZCQSxhQUtzQixBQVl0QixrQkFYQSIsImZpbGUiOiJjb21wb25lbnRzL0Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtYXJsaW4vY3gtY2xvdWQtZXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGb290ZXJcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+JmNvcHk7IDIwMTggVGlldG88L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL0Fib3V0JywgcXVlcnk6IHsgbmFtZTogJ2Fib3V0JyB9IH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9Db250YWN0JywgcXVlcnk6IHsgbmFtZTogJ2NvbnRhY3QnfX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+Q29udGFjdCB1czwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL1NpdGVtYXAnLCBxdWVyeTogeyBuYW1lOiAnc2l0ZW1hcCd9fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TaXRlIE1hcDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL0NhcmVlcnMnLCBxdWVyeTogeyBuYW1lOiAnY2FyZWVycyd9fX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5DYXJlZXJzPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvVGVybXMnLCBxdWVyeTogeyBuYW1lOiAndGVybXMnfX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+VGVybXMgYW5kIENvbmRpdGlvbnM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9Qcml2YWN5JywgcXVlcnk6IHsgbmFtZTogJ3ByaXZhY3knfX19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+UHJpdmFjeSBQb2xpY3k8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9BZHMnLCBxdWVyeTogeyBuYW1lOiAnYWRzJ319fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkFib3V0IE91ciBBZHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9TdG9yZXMnLCBxdWVyeTogeyBuYW1lOiAnc3RvcmVzJ319fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlN0b3JlIExvY2F0b3I8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuRm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mb290ZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyMHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZm9vdGVyLW1lbnUgPiBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmZvb3Rlci1tZW51IGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2U3ZTdlNzsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19 */\n/*@ sourceURL=components/Footer.js */"
  }));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Util__ = __webpack_require__("./common/Util.js");

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Header.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-2427780099" + " " + "Header header"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-2427780099" + " " + "logo grid-item"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-2427780099"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: "/static/images/cxcloud_operator_logo.jpg",
        alt: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-2427780099" + " " + "logo-icon"
      })))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-2427780099" + " " + "header-title grid-item"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-2427780099"
      }, "The best ", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-2427780099"
      }, "imaginery"), " operator in the world.")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-2427780099" + " " + "header-userName grid-item"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-2427780099" + " " + "sub-container"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-2427780099" + " " + "medium"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-2427780099" + " " + "medium logout-btn"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-2427780099"
      }, "Logout")))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2427780099",
        css: ".Header.jsx-2427780099{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.grid-item.jsx-2427780099{-webkit-flex:auto 1 1;-ms-flex:auto 1 1;flex:auto 1 1;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:auto 10px auto 10px;}.logo-icon.jsx-2427780099{height:auto;width:170px;height:auto;margin-left:30px;}.sub-container.jsx-2427780099{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;margin-right:10px;}.header-title.jsx-2427780099 p.jsx-2427780099{color:#939393;font-weight:200;}.header-title.jsx-2427780099 span.jsx-2427780099{color:#ff3764;}.header-userName.jsx-2427780099{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.logout-btn.jsx-2427780099{margin-left:30px;-webkit-text-decoration:underline;text-decoration:underline;}@media only screen and (max-width:480px){.Header.jsx-2427780099{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.sub-container.jsx-2427780099{margin-right:0;}.logo-icon.jsx-2427780099{margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDcUIsQUFHK0MsQUFPUixBQU1GLEFBTVEsQUFNTixBQUlBLEFBR00sQUFHSCxBQUtBLEFBSUUsQUFHRCxZQWpDTixFQVlJLEFBSXBCLEFBa0JJLENBSEEsRUFUMEIsS0FuQ2IsRUFjRCxNQVloQixNQVhxQixpQkFDckIsQ0FUK0Isb0JBaUNELEdBSjlCLG1CQW5DdUIsTUFrQk0sQUFhN0Isa0RBU0ksT0FqQ2EsTUFOSyxrQkFDQyxnQkFpQlIsV0FDTyxrQkFDdEIsS0FiK0IsMkJBQy9CLGdCQU5BIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb21tb24vVXRpbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVxIH0pIHtcbiAgICAgICAgY29uc3QgdXNlcklkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IFV0aWwuZmV0Y2hVc2Vycyhwcm9kdWN0SWQpO1xuICAgICAgICBjb25zdCB1c2VyID0gdXNlcnMuaXRlbXNbMF0uZmllbGRzXG5cbiAgICAgICAgcmV0dXJuIHVzZXJcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIZWFkZXIgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvIGdyaWQtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvLWljb25cIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9jeGNsb3VkX29wZXJhdG9yX2xvZ28uanBnXCIgYWx0PVwiYmxhbmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGUgZ3JpZC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlRoZSBiZXN0IDxzcGFuPmltYWdpbmVyeTwvc3Bhbj4gb3BlcmF0b3IgaW4gdGhlIHdvcmxkLjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci11c2VyTmFtZSBncmlkLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZWRpdW1cIj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtZWRpdW0gbG9nb3V0LWJ0blwiPjxhIGhyZWY9XCJcIj5Mb2dvdXQ8L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuSGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmdyaWQtaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBhdXRvIDEgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxvZ28taWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc3ViLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXRpdGxlIHAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MzkzOTM7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItdGl0bGUgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmMzc2NDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLXVzZXJOYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sb2dvdXQtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLkhlYWRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yi1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2dvLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/Header.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, req, userId, users, user;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                userId = _.get(query, 'id');
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__common_Util__["a" /* default */].fetchUsers(productId);

              case 4:
                users = _context.sent;
                user = users.items[0].fields;
                return _context.abrupt("return", user);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Layout.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "\n            * {\n                font-family: Verdana, Geneva, Tahoma, sans-serif;\n                color: #4a4a4a;\n            }\n            .CurrentServices, .RecommendedServices, .FindPlan, .ServiceInformation, .Calendar {\n                padding: 20px 40px 20px 40px;\n            }\n            .CurrentServices, .RecommendedServices, .ServiceInformation {\n                max-width: 75em;\n            }\n            .recommServ-title, .currServ-title {\n                padding: 0 30px 0 30px;\n            }\n            .title {\n                font-size: 24px;\n            }\n            .big {\n                font-size: 20px;\n            }\n            .medium {\n                font-size: 16px;\n            }\n            .small {\n                font-size: 12px;\n            }\n            .light {\n                font-weight: 200;\n            }\n            .bold {\n                font-weight: 600;\n            }\n            .backgroundLightGrey {\n                background-color: lightgrey;\n            }\n            .backgroundGrey {\n                background-color: grey;\n            }\n            .backgroundDarkGrey {\n                background-color: darkgrey;\n            }\n            .readMore {\n                background-color: #ff3764;\n                padding: 8px 30px 8px 30px;\n                color: white;\n                font-weight: 400;\n                font-size: 18px;\n                border-radius: 8px;\n                margin-top: 20px;\n                border-color: transparent;\n            }\n            .readMore a {\n                color: white;\n                text-decoration: none;\n            }\n            /* Media queries */\n            @media only screen and (max-width : 400px) {\n                .CurrentServices, .RecommendedServices, .FindPlan {\n                padding: 0px 20px 0px 20px;\n                }\n                .title {\n                font-size: 20px;\n                color: #4a4a4a;\n                }\n            }\n        "));
});

/***/ }),

/***/ "./components/ServiceInformation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/ServiceInformation.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var productId = _ref.productId,
      productName = _ref.productName,
      productCode = _ref.productCode,
      productHighlight = _ref.productHighlight,
      price = _ref.price,
      longDescription = _ref.longDescription,
      productShortDescription = _ref.productShortDescription,
      availability = _ref.availability,
      image = _ref.image;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-1889877441" + " " + "ServiceInformation grid-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-1889877441" + " " + "container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1889877441" + " " + "solarHouse-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: image,
    alt: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-1889877441" + " " + "solarHouse-icon"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-1889877441" + " " + "container-text"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-1889877441"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-1889877441"
  }, productName, " ", productCode), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    className: "jsx-1889877441"
  }, "EAN Code"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-1889877441"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-1889877441"
  }, "Stars Rating icon"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-1889877441"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-1889877441"
  }, "Write first review"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-1889877441"
  }, productShortDescription), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    className: "jsx-1889877441"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    className: "jsx-1889877441"
  }, "$ ", price, " / mo"), "maintenance fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    className: "jsx-1889877441"
  }, productHighlight), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    className: "jsx-1889877441" + " " + "mainContent"
  }, longDescription)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    className: "jsx-1889877441"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    className: "jsx-1889877441" + " " + "bold"
  }, "How to get started?"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    className: "jsx-1889877441"
  }, "Just book a time for our engineer to visit your home."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    className: "jsx-1889877441"
  }, "The next free slots in the area of Espoo are:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    className: "jsx-1889877441" + " " + "availability-list"
  }, availability ? availability.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("li", {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      className: "jsx-1889877441"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      className: "jsx-1889877441" + " " + "time-details"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      id: "clockIcon",
      src: "https://png.icons8.com/metro/1600/clock.png",
      alt: "clock",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      className: "jsx-1889877441"
    }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      className: "jsx-1889877441"
    }, item)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      className: "jsx-1889877441" + " " + "reserve-btn"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      href: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      className: "jsx-1889877441"
    }, "Reserve")));
  }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: "jsx-1889877441"
  }, "No time available"))))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1889877441",
    css: ".ServiceInformation{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container{margin:0 auto;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;}.container-text{max-width:50em;}.mainContent{line-height:30px;}.solarHouse-icon{height:auto;width:70%;}.solarHouse-container{max-width:16em;text-align:center;}.availability-list{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0;}.availability-list li{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-details{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.time-details p{margin-left:10px;}.reserve-btn{margin-left:10px;}#clockIcon{width:16px;height:16px;}@media only screen and (max-width:1100px){.container-text{padding:0 40px 0 40px;line-height:26px;}}@media only screen and (max-width:580px){.container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.availability-list li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.reserve-btn{margin-top:-10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VydmljZUluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVEVyxBQUc2QixBQUtBLEFBSUMsQUFHRSxBQUdMLEFBSUcsQUFJRixBQUtPLEFBSUEsQUFJSCxBQUdBLEFBR04sQUFJYSxBQUlULEFBSUEsQUFJSSxXQWZQLENBM0JGLEVBZkcsQUFLTyxDQUl0QixBQVVvQixFQVBwQixBQXdCQSxBQUdBLEFBbUJFLEtBMUNGLEFBOEJxQixDQUhyQixVQXZCQSxNQTJCRSxtQ0F4QnNCLEFBMkJFLEFBSUEsY0FyREQsY0EyQkosQUFJQSxjQTFCckIsb0NBa0JZLEFBMkJWLEFBSUEsVUE5QkYseUJBdkJBLFFBMkJBLEFBSUEiLCJmaWxlIjoiY29tcG9uZW50cy9TZXJ2aWNlSW5mb3JtYXRpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgICBwcm9kdWN0SWQsXG4gICAgcHJvZHVjdE5hbWUsXG4gICAgcHJvZHVjdENvZGUsXG4gICAgcHJvZHVjdEhpZ2hsaWdodCxcbiAgICBwcmljZSxcbiAgICBsb25nRGVzY3JpcHRpb24sXG4gICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb24sXG4gICAgYXZhaWxhYmlsaXR5LFxuICAgIGltYWdlXG59KSA9PiB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiU2VydmljZUluZm9ybWF0aW9uIGdyaWQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2xhckhvdXNlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2xhckhvdXNlLWljb25cIiBzcmM9e2ltYWdlfSBhbHQ9XCJibGFua1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdGV4dFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0TmFtZX0ge3Byb2R1Y3RDb2RlfVxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8cD5FQU4gQ29kZTwvcD5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5TdGFycyBSYXRpbmcgaWNvbjwvcD5cbiAgICAgICAgICAgICAgICA8YT48cD5Xcml0ZSBmaXJzdCByZXZpZXc8L3A+PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHA+e3Byb2R1Y3RTaG9ydERlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPHNwYW4+JCB7cHJpY2V9IC8gbW88L3NwYW4+XG4gICAgICAgICAgICAgICAgbWFpbnRlbmFuY2UgZmVlXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGgzPntwcm9kdWN0SGlnaGxpZ2h0fTwvaDM+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW5Db250ZW50XCI+e2xvbmdEZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJib2xkXCI+SG93IHRvIGdldCBzdGFydGVkPzwvaDI+XG4gICAgICAgICAgICAgIDxwPkp1c3QgYm9vayBhIHRpbWUgZm9yIG91ciBlbmdpbmVlciB0byB2aXNpdCB5b3VyIGhvbWUuPC9wPlxuICAgICAgICAgICAgICA8cD5UaGUgbmV4dCBmcmVlIHNsb3RzIGluIHRoZSBhcmVhIG9mIEVzcG9vIGFyZTo8L3A+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJhdmFpbGFiaWxpdHktbGlzdFwiPlxuICAgICAgICAgICAgICAgIHthdmFpbGFiaWxpdHkgPyBhdmFpbGFiaWxpdHkubWFwKChpdGVtLCBpKSA9PiA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWUtZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImNsb2NrSWNvblwiIHNyYz1cImh0dHBzOi8vcG5nLmljb25zOC5jb20vbWV0cm8vMTYwMC9jbG9jay5wbmdcIiBhbHQ9XCJjbG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVzZXJ2ZS1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5SZXNlcnZlPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT4pIDogPGRpdj5ObyB0aW1lIGF2YWlsYWJsZTwvZGl2Pn1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5TZXJ2aWNlSW5mb3JtYXRpb24ge1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhaW5lci10ZXh0IHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1haW5Db250ZW50IHtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc29sYXJIb3VzZS1pY29uIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNvbGFySG91c2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNmVtO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXZhaWxhYmlsaXR5LWxpc3Qge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmF2YWlsYWJpbGl0eS1saXN0IGxpIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGltZS1kZXRhaWxzIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGltZS1kZXRhaWxzIHAge1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXNlcnZlLWJ0biB7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI2Nsb2NrSWNvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkgey5jb250YWluZXItdGV4dCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4IDAgNDBweDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHsuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmF2YWlsYWJpbGl0eS1saXN0IGxpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnJlc2VydmUtYnRuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgfX1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+O1xufVxuIl19 */\n/*@ sourceURL=components/ServiceInformation.js */"
  }));
});

/***/ }),

/***/ "./components/Tabs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_tabs__ = __webpack_require__("react-tabs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_tabs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_tabs__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Tabs.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        tabIndex: 0
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          twitterFeeds = _props.twitterFeeds,
          customerTestimonials = _props.customerTestimonials,
          calcOfSavings = _props.calcOfSavings,
          technicalSpecs = _props.technicalSpecs;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["Tabs"], {
        className: "tabs",
        onSelect: function onSelect(tabIndex) {
          return _this2.setState({
            tabIndex: tabIndex
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "tabTitle-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["TabList"], {
        className: "tabList",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["Tab"], {
        selected: true,
        className: "tabTitle big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, "Customer testimonials"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["Tab"], {
        className: "tabTitle big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Calculations of savings"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["Tab"], {
        className: "tabTitle big",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Technical specifications"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["TabPanel"], {
        className: "tabPanel active customerTestimonials",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "twitter-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "Twitter love"), twitterFeeds.map(function (twitter, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: i,
          className: "twitter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, "@", twitter.fields.feed), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "twitterAuthor",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "twitterImg",
          src: twitter.fields.twitterPicture,
          alt: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, "@", twitter.fields.author))));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "testomonials-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, customerTestimonials.map(function (person, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: i,
          className: "testimonials",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, "\"", person.fields.title, "\""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "review",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
          className: "profileImg",
          src: person.fields.profilePicture,
          alt: "blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          className: "review-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          }
        }, person.fields.testimoniance), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, person.fields.firstName, " ", person.fields.lastName, ", ", person.fields.city))));
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["TabPanel"], {
        className: "tabPanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, calcOfSavings.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: i,
          className: "calcOfSavings",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        }, "\"", item.fields.title, "\""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          }
        }, item.fields.description));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_tabs__["TabPanel"], {
        className: "tabPanel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, technicalSpecs.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          key: i,
          className: "technicalSpecs",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        }, "\"", item.fields.title, "\""), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        }, item.fields.description));
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, "\n                    .tabs {\n                        margin: 0 auto;\n                        background-color: #EDECED;\n                        padding-bottom: 20px;\n                        margin-bottom: -20px;\n                    }\n                    .tabTitle-container {\n                        display: flex;\n                        justify-content_ center;\n                        background-color: white;\n                    }\n                    .tabList {\n                        display: inline-flex;\n                        margin: 0 auto;\n                        list-style: none;\n                        padding: 0;\n                    }\n                    .tabTitle {\n                        font-weight: bold;\n                        font-size: 24px;\n                        cursor: pointer;\n                        background-color: white;\n                        padding: 12px 30px 12px 30px;\n                    }\n                    .react-tabs__tab--selected {\n                        background-color: #EDECED;\n                    }\n                    .tabPanel {\n                        max-width: 60em;\n                        line-height: 24px;\n                        font-size: 18px;\n                        margin: 0 auto;\n                    }\n                    .tabPanel h3 {\n                        font-size: 24px;\n                    }\n                    .review {\n                        display: inline-flex;\n                        align-items: center;\n                    }\n                    .review-text {\n                        display: columns;\n                    }\n                    .profileImg {\n                        width: 12em;\n                        height: 8em;\n                        margin-right: 20px;\n                    }\n                    .customerTestimonials {\n                        display: flex;\n                        justify-content: center;\n                    }\n                    .twitter {\n                        max-width: 50em;\n                    }\n                    .twitterImg {\n                        width: 20px;\n                        height: 20px;\n                        margin-right: 10px;\n                    }\n                    .twitterAuthor {\n                        display: inline-flex;\n                        align-items: center;\n                        margin-top: -22px;\n                        color: blue;\n                        font-weight: bold;\n                    }\n                    .testomonials-container {\n                        margin-left: 50px;\n                    }\n                    .testimonials {\n                        display: columns;\n                    }\n                    .testimonials h3 {\n                        margin-bottom: -5px;\n                    }\n                    @media only screen and (max-width : 1200px) {\n                        \n                        .customerTestimonials {\n                            padding: 0 40px 0 40px;\n                            justify-content: center;\n                            display: flex;\n                            flex-direction: column-reverse;\n                        }\n                        .tabTitle {\n                            padding-left: 10px;\n                            padding-right: 10px;\n                        }\n                    }\n                    @media only screen and (max-width : 540px) {\n                        .tabList {  \n                            padding-left: 0;\n                            display: flex;\n                            flex-direction: column;\n                        }\n                    }\n                    @media only screen and (max-width : 780px) {\n                        .review {\n                            display: flex;\n                            flex-direction: column;\n                        }\n                        .testimonials h3 {\n                            margin-bottom: 15px;\n                        }\n                    }\n                "));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./pages/Product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_CoverAllPages__ = __webpack_require__("./common/CoverAllPages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ServiceInformation__ = __webpack_require__("./components/ServiceInformation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FindPlan__ = __webpack_require__("./components/FindPlan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CurrentService__ = __webpack_require__("./components/CurrentService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Tabs__ = __webpack_require__("./components/Tabs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_Calendar__ = __webpack_require__("./components/Calendar.js");

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/pages/Product.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        shown: false // componentDidMount() {
        //     this.fetchData()
        //   }
        //   fetchData() {
        //     this.setState({isLoading: true})
        //     fetch(`https://dev.cxcloud.com/api/v1/categories`)
        //     .then(response => response.json())
        //     .then(parsedJSON => {
        //           console.log('hey ' + parsedJSON[0].slug)
        //     })}

      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          shown: !_this.state.shown
        });
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      //console.log('hello')
      var item = this.props.product.items[0].fields || this.props.recommendedProducts.items[0].fields;
      var customerTestim = this.props.customerTestimonials.items;
      var twitterFeeds = this.props.twitterFeeds.items;
      var technicalSpecs = this.props.technicalSpecs.items;
      var calcOfSavings = this.props.calcOfSavings.items;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        className: "About",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_CoverAllPages__["a" /* default */], {
        className: "CoverAllPages",
        productName: item.productName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ServiceInformation__["a" /* default */], {
        className: "ServiceInformation",
        productName: item.productName,
        productCode: item.productCode,
        productHighlight: item.productHighlight,
        price: item.price,
        longDescription: item.longDescription,
        image: item.imageLink,
        productShortDescription: item.productShortDescription,
        availability: item.availability,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-1362842210" + " " + "showCalendar-btn"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-1362842210" + " " + "readMore"
      }, " > More options in the full calendar"), this.state.shown ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Calendar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }) : null), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Tabs__["a" /* default */], {
        customerTestimonials: customerTestim,
        twitterFeeds: twitterFeeds,
        technicalSpecs: technicalSpecs,
        calcOfSavings: calcOfSavings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_FindPlan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1362842210",
        css: "*{font-family:Verdana;}.CoverAllPages{margin-bottom:50px;}.showCalendar-btn{text-align:center;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dxQixBQUdpRCxBQUdELEFBR0Qsa0JBQ0MsQ0FIdkIsQ0FIQSxpQkFPQSIsImZpbGUiOiJwYWdlcy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ292ZXJBbGxQYWdlcyBmcm9tICcuLi9jb21tb24vQ292ZXJBbGxQYWdlcydcbmltcG9ydCBTZXJ2aWNlSW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlSW5mb3JtYXRpb24nXG5pbXBvcnQgRmluZFBsYW4gZnJvbSAnLi4vY29tcG9uZW50cy9GaW5kUGxhbidcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJ1xuaW1wb3J0IEN1cnJlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VycmVudFNlcnZpY2UnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsZW5kYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd246IGZhbHNlXG4gICAgfVxuXG5cbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gIC8vICAgICB0aGlzLmZldGNoRGF0YSgpXG5cbiAgLy8gICB9XG4gIC8vICAgZmV0Y2hEYXRhKCkge1xuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSlcbiAgLy8gICAgIGZldGNoKGBodHRwczovL2Rldi5jeGNsb3VkLmNvbS9hcGkvdjEvY2F0ZWdvcmllc2ApXG4gIC8vICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgICAudGhlbihwYXJzZWRKU09OID0+IHtcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXkgJyArIHBhcnNlZEpTT05bMF0uc2x1ZylcbiAgLy8gICAgIH0pfVxuXG5cblxuXG5cblxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5LCByZXEgfSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPWF3YWl0IFV0aWwuZmV0Y2hQcm9kdWN0QnlJZChwcm9kdWN0SWQpO1xuXG4gICAgICAgIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgcmVjb21tZW5kZWRQcm9kdWN0cyA9IGF3YWl0IFV0aWwuZmV0Y2hSZWNvbW1lbmRlZFByb2R1Y3RzKHJlY29tbWVuZGVkUHJvZHVjdHNJZCk7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tZXJUZXN0aW1vbmlhbHNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgY3VzdG9tZXJUZXN0aW1vbmlhbHMgPSBhd2FpdCBVdGlsLmZldGNoQ3VzdG9tZXJUZXN0aW1vbmlhbHMoY3VzdG9tZXJUZXN0aW1vbmlhbHNJZCk7XG5cbiAgICAgICAgY29uc3QgdHdpdHRlckZlZWRzSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJGZWVkcyA9IGF3YWl0IFV0aWwuZmV0Y2hUd2l0dGVyRmVlZHModHdpdHRlckZlZWRzSWQpO1xuXG4gICAgICAgIGNvbnN0IHRlY2huaWNhbFNwZWNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgdGVjaG5pY2FsU3BlY3MgPSBhd2FpdCBVdGlsLmZldGNoVGVjaG5pY2FsU3BlY2lmaWNhdGlvbnModGVjaG5pY2FsU3BlY0lkKTtcblxuICAgICAgICBjb25zdCBjYWxjT2ZTYXZpbmdJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgY2FsY09mU2F2aW5ncyA9IGF3YWl0IFV0aWwuZmV0Y2hDYWxjdWxhdGlvbnNPZlNhdmluZ3MoY2FsY09mU2F2aW5nSWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICAgICAgcmVjb21tZW5kZWRQcm9kdWN0cyxcbiAgICAgICAgICAgIGN1c3RvbWVyVGVzdGltb25pYWxzLFxuICAgICAgICAgICAgdHdpdHRlckZlZWRzLFxuICAgICAgICAgICAgdGVjaG5pY2FsU3BlY3MsXG4gICAgICAgICAgICBjYWxjT2ZTYXZpbmdzXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3duOiAhdGhpcy5zdGF0ZS5zaG93biB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgIC8vY29uc29sZS5sb2coJ2hlbGxvJylcblxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5wcm9kdWN0Lml0ZW1zWzBdLmZpZWxkcyB8fCB0aGlzLnByb3BzLnJlY29tbWVuZGVkUHJvZHVjdHMuaXRlbXNbMF0uZmllbGRzXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyVGVzdGltID0gdGhpcy5wcm9wcy5jdXN0b21lclRlc3RpbW9uaWFscy5pdGVtcztcbiAgICAgICAgY29uc3QgdHdpdHRlckZlZWRzID0gdGhpcy5wcm9wcy50d2l0dGVyRmVlZHMuaXRlbXM7XG4gICAgICAgIGNvbnN0IHRlY2huaWNhbFNwZWNzID0gdGhpcy5wcm9wcy50ZWNobmljYWxTcGVjcy5pdGVtcztcbiAgICAgICAgY29uc3QgY2FsY09mU2F2aW5ncyA9IHRoaXMucHJvcHMuY2FsY09mU2F2aW5ncy5pdGVtcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJBYm91dFwiPlxuICAgICAgICAgICAgICAgIDxDb3ZlckFsbFBhZ2VzXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNvdmVyQWxsUGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5wcm9kdWN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8U2VydmljZUluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNlcnZpY2VJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZT17aXRlbS5wcm9kdWN0Q29kZX1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEhpZ2hsaWdodD17aXRlbS5wcm9kdWN0SGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uPXtpdGVtLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VMaW5rfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2hvcnREZXNjcmlwdGlvbj17aXRlbS5wcm9kdWN0U2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5PXtpdGVtLmF2YWlsYWJpbGl0eX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dDYWxlbmRhci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkTW9yZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT4gPiBNb3JlIG9wdGlvbnMgaW4gdGhlIGZ1bGwgY2FsZW5kYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd24gPyA8Q2FsZW5kYXIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVzdGltb25pYWxzPXtjdXN0b21lclRlc3RpbX1cbiAgICAgICAgICAgICAgICAgICAgdHdpdHRlckZlZWRzPXt0d2l0dGVyRmVlZHN9XG4gICAgICAgICAgICAgICAgICAgIHRlY2huaWNhbFNwZWNzPXt0ZWNobmljYWxTcGVjc31cbiAgICAgICAgICAgICAgICAgICAgY2FsY09mU2F2aW5ncz17Y2FsY09mU2F2aW5nc30gLz5cbiAgICAgICAgICAgICAgICA8RmluZFBsYW4gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLkNvdmVyQWxsUGFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvd0NhbGVuZGFyLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/Product.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var query, req, productId, product, recommendedProductsId, recommendedProducts, customerTestimonialsId, customerTestimonials, twitterFeedsId, twitterFeeds, technicalSpecId, technicalSpecs, calcOfSavingId, calcOfSavings;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref2.query, req = _ref2.req;
                productId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["a" /* default */].fetchProductById(productId);

              case 4:
                product = _context.sent;
                recommendedProductsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["a" /* default */].fetchRecommendedProducts(recommendedProductsId);

              case 8:
                recommendedProducts = _context.sent;
                customerTestimonialsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 12;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["a" /* default */].fetchCustomerTestimonials(customerTestimonialsId);

              case 12:
                customerTestimonials = _context.sent;
                twitterFeedsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 16;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["a" /* default */].fetchTwitterFeeds(twitterFeedsId);

              case 16:
                twitterFeeds = _context.sent;
                technicalSpecId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 20;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["a" /* default */].fetchTechnicalSpecifications(technicalSpecId);

              case 20:
                technicalSpecs = _context.sent;
                calcOfSavingId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 24;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["a" /* default */].fetchCalculationsOfSavings(calcOfSavingId);

              case 24:
                calcOfSavings = _context.sent;
                return _context.abrupt("return", {
                  product: product,
                  recommendedProducts: recommendedProducts,
                  customerTestimonials: customerTestimonials,
                  twitterFeeds: twitterFeeds,
                  technicalSpecs: technicalSpecs,
                  calcOfSavings: calcOfSavings
                });

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/Product.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tabs":
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=Product.js.map