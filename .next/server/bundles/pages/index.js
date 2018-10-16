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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Cover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Cover.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var user = _ref.user;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-975840590" + " " + "Cover container cover"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-975840590" + " " + "cover-container"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-975840590" + " " + "cover-text"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-975840590" + " " + "cover-h1"
  }, "Hello,"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-975840590" + " " + "cover-h1"
  }, user.firstName, " ", user.lastName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-975840590"
  }, "Wonderful to have you here"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "975840590",
    css: ".Cover.jsx-975840590{background-image:url('http://stowawaymag.com/files/2017/12/usa-1778524-1080x675.jpg');background-repeat:no-repeat;background-size:cover;height:24em;width:100%;display:inline-grid;border-top:10px solid #ff3764;}.cover.jsx-975840590{grid-area:cover;}.cover-container.jsx-975840590{position:relative;width:100%;height:70%;background-color:rgba(63,71,81,0.9);text-align:center;display:table;margin:0 auto;color:whitesmoke;}.cover-h1.jsx-975840590{font-weight:lighter;text-transform:uppercase;}.cover-text.jsx-975840590{display:table-cell;vertical-align:middle;}.cover-container.jsx-975840590 h1.jsx-975840590,.cover-container.jsx-975840590 h4.jsx-975840590{color:whitesmoke;}@media only screen and (max-width.jsx-975840590:480px) .cover-container{top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ292ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWlCLEFBRzJHLEFBVXRFLEFBR0UsQUFVRSxBQUlELEFBSUYsQUFLUCxNQUNWLFVBMUJKLENBcUJBLENBbEJlLENBY1csQ0FKRyxTQVRkLFdBQzRCLENBYTNDLElBSkEsK0JBUnNCLFVBaEJVLFFBaUJkLGNBQ0EsTUFoQlEsUUFpQkwsY0FoQkwsR0FpQkosU0FoQkcsV0FDUyxvQkFDVSw4QkFDbEMiLCJmaWxlIjoiY29tcG9uZW50cy9Db3Zlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtYXJsaW4vY3gtY2xvdWQtZXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuIFxuZXhwb3J0IGRlZmF1bHQgKHt1c2VyfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ292ZXIgY29udGFpbmVyIGNvdmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXItdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY292ZXItaDFcIj5IZWxsbyw8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY292ZXItaDFcIj57dXNlci5maXJzdE5hbWV9IHt1c2VyLmxhc3ROYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoND5Xb25kZXJmdWwgdG8gaGF2ZSB5b3UgaGVyZTwvaDQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuQ292ZXIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9zdG93YXdheW1hZy5jb20vZmlsZXMvMjAxNy8xMi91c2EtMTc3ODUyNC0xMDgweDY3NS5qcGcnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0yMTRweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNGVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2ZmMzc2NDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdmVyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA3MSwgODEsIDAuOSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdmVyLWgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb3Zlci10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvdmVyLWNvbnRhaW5lciBoMSwgLmNvdmVyLWNvbnRhaW5lciBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKiBtZWRpYSBxdWVyaWVzICovXG4gICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICAuY292ZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=components/Cover.js */"
  }));
});

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

/***/ "./components/CurrentServices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CurrentService__ = __webpack_require__("./components/CurrentService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Util__ = __webpack_require__("./common/Util.js");

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/CurrentServices.js";


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
        categories: []
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__common_Util__["a" /* default */].fetchCommerceCategories().then(function (result) {
                  _this2.setState({
                    categories: result
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.categories);
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-1363573771" + " " + "CurrentServices"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-1363573771" + " " + "currServ-title title"
      }, "These are the services we are providing you at the moment:"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-1363573771" + " " + "currentServices-sub"
      }, this.state.categories.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-1363573771"
        }, item.name.en);
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1363573771",
        css: ".CurrentServices.jsx-1363573771{margin-left:auto;margin-right:auto;}.currentServices-sub.jsx-1363573771{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VycmVudFNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDZSxBQUdvQyxBQUlKLGFBQzhDLElBSnpDLGtCQUNwQixtQ0FJQSIsImZpbGUiOiJjb21wb25lbnRzL0N1cnJlbnRTZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtYXJsaW4vY3gtY2xvdWQtZXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEN1cnJlbnRTZXJ2aWNlIGZyb20gJy4vQ3VycmVudFNlcnZpY2UnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vY29tbW9uL1V0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgIH1cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgYXdhaXQgVXRpbC5mZXRjaENvbW1lcmNlQ2F0ZWdvcmllcygpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhdGVnb3JpZXM6IHJlc3VsdCB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jYXRlZ29yaWVzKVxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDdXJyZW50U2VydmljZXNcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjdXJyU2Vydi10aXRsZSB0aXRsZVwiPlxuICAgICAgICAgICAgICBUaGVzZSBhcmUgdGhlIHNlcnZpY2VzIHdlIGFyZSBwcm92aWRpbmcgeW91IGF0IHRoZSBtb21lbnQ6XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50U2VydmljZXMtc3ViXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPHAga2V5PXtpfT57aXRlbS5uYW1lLmVufTwvcD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbnRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkPXtpdGVtLnN5cy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU9e2l0ZW0uZmllbGRzLnByb2R1Y3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlPXtpdGVtLmZpZWxkcy5wcm9kdWN0Q29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SGlnaGxpZ2h0PXtpdGVtLmZpZWxkcy5wcm9kdWN0SGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLmZpZWxkcy5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25nRGVzY3JpcHRpb249e2l0ZW0uZmllbGRzLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2hvcnREZXNjcmlwdGlvbj17aXRlbS5maWVsZHMucHJvZHVjdFNob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uZmllbGRzLmltYWdlTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0N1cnJlbnRTZXJ2aWNlPlxuICAgICAgICAgICAgICAgICAgICApKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLkN1cnJlbnRTZXJ2aWNlcyB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmN1cnJlbnRTZXJ2aWNlcy1zdWIge1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzQwcHgsIDFmcikpO1xuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj47XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=components/CurrentServices.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



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

/***/ "./components/RecommendedService.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/RecommendedService.js";


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var productId = _ref.productId,
      productName = _ref.productName,
      productCode = _ref.productCode,
      productHighlight = _ref.productHighlight,
      price = _ref.price,
      longDescription = _ref.longDescription,
      productShortDescription = _ref.productShortDescription,
      image = _ref.image;
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-3003916975" + " " + "RecommendedService"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    className: "jsx-3003916975"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-3003916975" + " " + "subContainer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-3003916975"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: image,
    alt: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-3003916975" + " " + "solarEnergy-icon"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    className: "jsx-3003916975" + " " + "details"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    className: "jsx-3003916975" + " " + "medium bold"
  }, productName), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    className: "jsx-3003916975" + " " + "medium bold"
  }, productCode))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    className: "jsx-3003916975"
  }, "10 sq. installed on your roof"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    className: "jsx-3003916975"
  }, "Top of the line sun panels"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    className: "jsx-3003916975"
  }, "Installation FREE"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    className: "jsx-3003916975" + " " + "bold"
  }, "$ ", price, "/mo maintenance fee"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    className: "jsx-3003916975"
  }, productHighlight)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    className: "jsx-3003916975" + " " + "container-readMore"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-3003916975" + " " + "readMore"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: '/Product?id=' + productId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    className: "jsx-3003916975"
  }, "Read more >"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "3003916975",
    css: ".RecommendedService.jsx-3003916975{padding:30px;max-width:20em;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.subContainer.jsx-3003916975{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.solarEnergy-icon.jsx-3003916975{height:64px;width:64px;}.details.jsx-3003916975{margin-left:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVjb21tZW5kZWRTZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DaUIsQUFHc0MsQUFRQSxBQUlELEFBSUssWUFITixDQVpJLElBZ0JuQixNQUhBLEtBWmtCLGNBQ0QsZ0NBTU0sMENBTEcsbURBTTFCLDJCQUxrQyxtSEFDbEMiLCJmaWxlIjoiY29tcG9uZW50cy9SZWNvbW1lbmRlZFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgICBwcm9kdWN0SWQsXG4gICAgcHJvZHVjdE5hbWUsXG4gICAgcHJvZHVjdENvZGUsXG4gICAgcHJvZHVjdEhpZ2hsaWdodCxcbiAgICBwcmljZSxcbiAgICBsb25nRGVzY3JpcHRpb24sXG4gICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb24sXG4gICAgaW1hZ2Vcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlY29tbWVuZGVkU2VydmljZVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YkNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzb2xhckVuZXJneS1pY29uXCIgc3JjPXtpbWFnZX0gYWx0PVwiYmxhbmtcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWVkaXVtIGJvbGRcIj57cHJvZHVjdE5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtZWRpdW0gYm9sZFwiPntwcm9kdWN0Q29kZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cD4xMCBzcS4gaW5zdGFsbGVkIG9uIHlvdXIgcm9vZjwvcD5cbiAgICAgICAgICAgICAgICA8cD5Ub3Agb2YgdGhlIGxpbmUgc3VuIHBhbmVsczwvcD5cbiAgICAgICAgICAgICAgICA8cD5JbnN0YWxsYXRpb24gRlJFRTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJib2xkXCI+JCB7cHJpY2V9L21vIG1haW50ZW5hbmNlIGZlZTwvcD5cbiAgICAgICAgICAgICAgICA8cD57cHJvZHVjdEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJlYWRNb3JlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkTW9yZVwiPjxhIGhyZWY9eycvUHJvZHVjdD9pZD0nICsgcHJvZHVjdElkfT5SZWFkIG1vcmUgPjwvYT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuUmVjb21tZW5kZWRTZXJ2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zdWJDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNvbGFyRW5lcmd5LWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iXX0= */\n/*@ sourceURL=components/RecommendedService.js */"
  }));
});

/***/ }),

/***/ "./components/RecommendedServices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RecommendedService__ = __webpack_require__("./components/RecommendedService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Util__ = __webpack_require__("./common/Util.js");

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/RecommendedServices.js";


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
        recommendedProducts: []
      }
    }), _temp));
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var _this2 = this;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__common_Util__["a" /* default */].fetchRecommendedProducts().then(function (result) {
                  _this2.setState({
                    recommendedProducts: result.items
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          productId = _state.productId,
          productName = _state.productName,
          productCode = _state.productCode,
          productHighlight = _state.productHighlight,
          price = _state.price,
          longDescription = _state.longDescription,
          productShortDescription = _state.productShortDescription,
          availability = _state.availability;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-3224783878" + " " + "RecommendedServices"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-3224783878" + " " + "recommServ-title title"
      }, "We recommend these services for you, John:"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-3224783878" + " " + "recommServices-sub"
      }, this.state.recommendedProducts.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__RecommendedService__["a" /* default */], {
          key: i,
          productId: item.sys.id,
          productName: item.fields.productName,
          productCode: item.fields.productCode,
          productHighlight: item.fields.productHighlight,
          price: item.fields.price,
          longDescription: item.fields.longDescription,
          productShortDescription: item.fields.productShortDescription,
          image: item.fields.imageLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3224783878",
        css: ".RecommendedServices.jsx-3224783878{margin-left:auto;margin-right:auto;}.recommServices-sub.jsx-3224783878{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVjb21tZW5kZWRTZXJ2aWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3FCLEFBRzhDLEFBSUosYUFDOEMsSUFKekMsa0JBQ3RCLG1DQUlBIiwiZmlsZSI6ImNvbXBvbmVudHMvUmVjb21tZW5kZWRTZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtYXJsaW4vY3gtY2xvdWQtZXNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlY29tbWVuZGVkU2VydmljZSBmcm9tICcuL1JlY29tbWVuZGVkU2VydmljZSc7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb21tb24vVXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgcmVjb21tZW5kZWRQcm9kdWN0czogW10sXG4gICAgfVxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBhd2FpdCBVdGlsLmZldGNoUmVjb21tZW5kZWRQcm9kdWN0cygpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY29tbWVuZGVkUHJvZHVjdHM6IHJlc3VsdC5pdGVtcyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICBwcm9kdWN0TmFtZSxcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgcHJvZHVjdEhpZ2hsaWdodCxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhdmFpbGFiaWxpdHlcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjb21tZW5kZWRTZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZWNvbW1TZXJ2LXRpdGxlIHRpdGxlXCI+V2UgcmVjb21tZW5kIHRoZXNlIHNlcnZpY2VzIGZvciB5b3UsIEpvaG46PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY29tbVNlcnZpY2VzLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWNvbW1lbmRlZFByb2R1Y3RzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlY29tbWVuZGVkU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ9e2l0ZW0uc3lzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLmZpZWxkcy5wcm9kdWN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZT17aXRlbS5maWVsZHMucHJvZHVjdENvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEhpZ2hsaWdodD17aXRlbS5maWVsZHMucHJvZHVjdEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5maWVsZHMucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uPXtpdGVtLmZpZWxkcy5sb25nRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb249e2l0ZW0uZmllbGRzLnByb2R1Y3RTaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmZpZWxkcy5pbWFnZUxpbmt9IC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAuUmVjb21tZW5kZWRTZXJ2aWNlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlY29tbVNlcnZpY2VzLXN1YiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=components/RecommendedServices.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Cover__ = __webpack_require__("./components/Cover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CurrentServices__ = __webpack_require__("./components/CurrentServices.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_RecommendedServices__ = __webpack_require__("./components/RecommendedServices.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FindPlan__ = __webpack_require__("./components/FindPlan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/pages/index.js";

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
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          product = _props.product,
          user = _props.user,
          recommendedProducts = _props.recommendedProducts,
          categories = _props.categories;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Layout__["a" /* default */], {
        className: "Homepage grid-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Cover__["a" /* default */], {
        user: user,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CurrentServices__["a" /* default */], {
        categories: categories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_FindPlan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, req, userId, users, user, productId, product, recommendedProductsId, recommendedProducts, categoryId, categories;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                // from contentful (old fake api)
                userId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_6__common_Util__["a" /* default */].fetchUsers(productId);

              case 4:
                users = _context.sent;
                user = users.items[0].fields;
                productId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 9;
                return __WEBPACK_IMPORTED_MODULE_6__common_Util__["a" /* default */].fetchProduct(productId);

              case 9:
                product = _context.sent;
                recommendedProductsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 13;
                return __WEBPACK_IMPORTED_MODULE_6__common_Util__["a" /* default */].fetchRecommendedProducts(recommendedProductsId);

              case 13:
                recommendedProducts = _context.sent;
                // from commercetools (demo-api)
                categoryId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query);
                _context.next = 17;
                return __WEBPACK_IMPORTED_MODULE_6__common_Util__["a" /* default */].fetchCommerceCategories(categoryId);

              case 17:
                categories = _context.sent;
                return _context.abrupt("return", {
                  user: user,
                  product: product,
                  recommendedProducts: recommendedProducts,
                  categories: categories
                });

              case 19:
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
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map