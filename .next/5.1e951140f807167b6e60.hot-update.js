webpackHotUpdate(5,{

/***/ "./components/CurrentService.js":
false,

/***/ "./components/CurrentServices.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/damarlin/cx-cloud-eshop/components/CurrentServices.js: Unexpected token (14:24)\n\n  12 |                         <CurrentService\n  13 |                             \n> 14 |                         </CurrentService>\n     |                         ^\n  15 |                     ))}\n  16 |                 </div>\n  17 |                 <style jsx>\n    at _class.raise (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2063:16)\n    at _class.jsxParseIdentifier (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7874:14)\n    at _class.jsxParseNamespacedName (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7884:23)\n    at _class.jsxParseAttribute (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7967:24)\n    at _class.jsxParseOpeningElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7984:35)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8008:33)\n    at _class.jsxParseElement (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8077:19)\n    at _class.parseExprAtom (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8084:21)\n    at _class.parseExprSubscripts (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2704:21)\n    at _class.parseExprOps (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2616:21)\n    at _class.parseMaybeConditional (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2588:21)\n    at _class.parseMaybeAssign (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2546:21)\n    at _class.parseParenAndDistinguishExpression (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:3271:28)\n    at _class.parseExprAtom (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:3081:21)");

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Cover__ = __webpack_require__("./components/Cover.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CurrentServices__ = __webpack_require__("./components/CurrentServices.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CurrentServices___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CurrentServices__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_RecommendedServices__ = __webpack_require__("./components/RecommendedServices.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_FindPlan__ = __webpack_require__("./components/FindPlan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
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
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CurrentServices__["default"], {
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


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.1e951140f807167b6e60.hot-update.js.map