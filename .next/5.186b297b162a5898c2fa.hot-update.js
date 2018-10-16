webpackHotUpdate(5,{

/***/ "./common/Util.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
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



/***/ })

})
//# sourceMappingURL=5.186b297b162a5898c2fa.hot-update.js.map