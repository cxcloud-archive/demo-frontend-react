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


var Util =
/*#__PURE__*/
function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "fetchCategories",
    value: function () {
      var _fetchCategories = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("https://dev.cxcloud.com/api/v1/categories");

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

      return function fetchCategories() {
        return _fetchCategories.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchProductById",
    value: function () {
      var _fetchProductById = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(productId) {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("https://dev.cxcloud.com/api/v1/products/".concat(productId));

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

      return function fetchProductById(_x) {
        return _fetchProductById.apply(this, arguments);
      };
    }()
  }, {
    key: "fetchProducts",
    value: function () {
      var _fetchProducts = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(categoryId) {
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("https://dev.cxcloud.com/api/v1/products/byCategory/".concat(categoryId));

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

      return function fetchProducts(_x2) {
        return _fetchProducts.apply(this, arguments);
      };
    }()
  }]);

  return Util;
}();



/***/ }),

/***/ "./components/Card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Card.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var id = _ref.id,
      name = _ref.name,
      image = _ref.image,
      description = _ref.description,
      price = _ref.price,
      currency = _ref.currency,
      title = _ref.title;
  var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: "Card__Wrapper",
    componentId: "f01nyv-0"
  })(["display:flex;justify-content:left;margin:20px 0px 20px 0px;padding:30px 20px 10px 30px;max-width:16em;margin:20px;width:100%;box-shadow:5px 7px rgba(74,74,74,0.6);a{text-decoration:none;color:#4a4a4a;font-size:14px;font-weight:500;text-transform:capitalize;}a:hover{color:#3a4048;}a:visited{color:#4a4a4a;}:nth-child(odd){background-color:#f7f7f7;border-color:transparent;}:nth-child(even){background-color:#f4f2f2;border-color:transparent;}"]);
  var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h1.withConfig({
    displayName: "Card__Title",
    componentId: "f01nyv-1"
  })(["font-weight:bold;font-size:20px;"]);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/Product?id=".concat(id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: image,
    width: "80",
    height: "120",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, description), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, price, " ", currency))))));
});

/***/ }),

/***/ "./components/CategoriesList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Category__ = __webpack_require__("./components/Category.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Card__ = __webpack_require__("./components/Card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_components__);

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/CategoriesList.js";

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
        categories: [],
        productsList: [],
        selectedCategory: null,
        show: true
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClickCategory", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, categoryId) {
        e.preventDefault();
        __WEBPACK_IMPORTED_MODULE_3__common_Util__["a" /* default */].fetchProducts(categoryId).then(function (list) {
          _this.setState({
            productsList: list.results
          });
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "showProductsList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.setState({
          show: false
        });
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
                return __WEBPACK_IMPORTED_MODULE_3__common_Util__["a" /* default */].fetchCategories().then(function (result) {
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
      var _this3 = this;

      var _state = this.state,
          categories = _state.categories,
          productsList = _state.productsList;
      var Wrapper = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div.withConfig({
        displayName: "CategoriesList__Wrapper",
        componentId: "o6txje-0"
      })(["margin:30px auto 30px auto;padding:20px 40px 20px 40px;@media only screen and (max-width:400px){padding:0px 20px 0px 20px;}}"]);
      var ListOfCategories = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div.withConfig({
        displayName: "CategoriesList__ListOfCategories",
        componentId: "o6txje-1"
      })(["margin:0px auto 10em auto;display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;:nth-child(2n){flex-grow:1;}"]);
      var CategoryName = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div.withConfig({
        displayName: "CategoriesList__CategoryName",
        componentId: "o6txje-2"
      })(["width:10em;max-width:12em;text-align:center;margin:10px 10px 10px 10px;padding:35px 40px 35px 40px;box-shadow:5px 7px rgba(74,74,74,0.7);a{text-decoration:none;text-transform:uppercase;color:#4a4a4a;}a:hover{color:#4a4a4a;}a:visited{color:#4a4a4a;}&::selection{color:red;background:yellow;}&:nth-child(odd){background-color:#f7f7f7;}&:nth-child(even){background-color:#f4f2f2;}"]);
      var SelectedCategory = __WEBPACK_IMPORTED_MODULE_5_styled_components___default.a.div.withConfig({
        displayName: "CategoriesList__SelectedCategory",
        componentId: "o6txje-3"
      })(["display:flex;flex-wrap:wrap;max-width:100em;margin:0 auto;justify-content:center;"]);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ListOfCategories, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, categories.map(function (category, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(CategoryName, {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: "/Product?id=".concat(category.id),
          onClick: function onClick(e) {
            return _this3.onClickCategory(e, category.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          }
        }, category.name.en)));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(SelectedCategory, {
        className: "selected_category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, productsList.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Card__["a" /* default */], {
          key: i,
          id: item.id,
          name: item.name.en,
          image: item.masterVariant.images[0].url,
          description: item.slug.en,
          price: item.masterVariant.prices[0].value.centAmount,
          currency: item.masterVariant.prices[0].value.currencyCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          }
        });
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/Category.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);

var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Category.js";

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
        categories: [],
        productsList: []
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
                return __WEBPACK_IMPORTED_MODULE_3__common_Util__["a" /* default */].fetchCategories().then(function (result) {
                  _this2.setState({
                    categories: result
                  });
                });

              case 2:
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_3__common_Util__["a" /* default */].fetchProducts().then(function (result) {
                  _this2.setState({
                    productsList: result
                  });
                });

              case 4:
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
      var Wrapper = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.div.withConfig({
        displayName: "Category__Wrapper",
        componentId: "sc-1asykl6-0"
      })(["div{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));}"]);
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "selected_category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, this.state.categories.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          href: '/Subcategory?id=',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }, item.name.en));
      })));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ "./components/Cover.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Cover.js";


/* harmony default export */ __webpack_exports__["a"] = (function () {
  var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: "Cover__Wrapper",
    componentId: "sc-13p02vl-0"
  })(["background-image:url('http://stowawaymag.com/files/2017/12/usa-1778524-1080x675.jpg');background-repeat:no-repeat;background-size:cover;height:24em;width:100%;display:inline-grid;border-top:10px solid #ff3764;grid-area:cover;div{position:relative;width:100%;height:70%;background-color:rgba(63,71,81,0.9);}"]);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
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
      lineNumber: 4
    },
    className: "jsx-394580264" + " " + "FindPlan backgroundLightGrey"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    className: "jsx-394580264" + " " + "subcontainer"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-394580264" + " " + "findPlan-text"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-394580264" + " " + "normal bold"
  }, "Discover ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-394580264"
  }, "CX-CLOUD")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-394580264"
  }, "Welcome to CX Cloud. This site will help you through the journey of setting up and operating a CX Cloud project. CX Cloud is an idea for creating micro-services based architecture on AWS Cloud. This project is created and maintained by Tieto's CEM unit in Finland.")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-394580264"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: "../static/images/next.png",
    alt: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    className: "jsx-394580264" + " " + "arrow-icon"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "394580264",
    css: ".FindPlan.jsx-394580264{padding:30px;width:-webkit-fill-available;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#cecece;padding:20px 40px 20px 40px;}.FindPlan.jsx-394580264 h2.jsx-394580264{color:#ff3764;}.FindPlan.jsx-394580264 span.jsx-394580264{font-style:italic;color:#ff3764;}.subcontainer.jsx-394580264{max-width:75em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 auto;}.findPlan-text.jsx-394580264{grid-column:1;}.arrow-icon.jsx-394580264{grid-column:2;width:auto;height:70%;margin-left:50px;}@media only screen and (max-width:480px){.arrow-icon.jsx-394580264{margin-left:20px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRmluZFBsYW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JXLEFBRzRCLEFBV0MsQUFHSSxBQUlILEFBTUQsQUFHQSxBQU1LLGFBaENVLENBVy9CLEFBYUEsQUFHYSxDQVRTLEVBZXBCLENBbkJjLE9BY0gsT0FiYixJQWNtQixNQTVCRyxXQTZCdEIsZ0VBWHFCLDJCQWpCQSxrRUFrQkwsY0FDaEIsYUFsQjJCLHlCQUNHLDRCQUk5QiIsImZpbGUiOiJjb21wb25lbnRzL0ZpbmRQbGFuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJGaW5kUGxhbiBiYWNrZ3JvdW5kTGlnaHRHcmV5XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaW5kUGxhbi10ZXh0XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibm9ybWFsIGJvbGRcIj5cbiAgICAgICAgICAgICAgRGlzY292ZXIgPHNwYW4+Q1gtQ0xPVUQ8L3NwYW4+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFdlbGNvbWUgdG8gQ1ggQ2xvdWQuIFRoaXMgc2l0ZSB3aWxsIGhlbHAgeW91IHRocm91Z2ggdGhlXG4gICAgICAgICAgICAgIGpvdXJuZXkgb2Ygc2V0dGluZyB1cCBhbmQgb3BlcmF0aW5nIGEgQ1ggQ2xvdWQgcHJvamVjdC4gQ1hcbiAgICAgICAgICAgICAgQ2xvdWQgaXMgYW4gaWRlYSBmb3IgY3JlYXRpbmcgbWljcm8tc2VydmljZXMgYmFzZWRcbiAgICAgICAgICAgICAgYXJjaGl0ZWN0dXJlIG9uIEFXUyBDbG91ZC4gVGhpcyBwcm9qZWN0IGlzIGNyZWF0ZWQgYW5kXG4gICAgICAgICAgICAgIG1haW50YWluZWQgYnkgVGlldG8ncyBDRU0gdW5pdCBpbiBGaW5sYW5kLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFycm93LWljb25cIiBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL25leHQucG5nXCIgYWx0PVwiYmxhbmtcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5GaW5kUGxhbiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlY2VjZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCA0MHB4IDIwcHggNDBweDtcbiAgICAgICAgICAgICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAgICAgICAgICAgICAvLyAgIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuRmluZFBsYW4gaDIge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmMzc2NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5GaW5kUGxhbiBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmMzc2NDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJjb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDc1ZW07XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5maW5kUGxhbi10ZXh0IHtcbiAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYXJyb3ctaWNvbiB7XG4gICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xuICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkgey5hcnJvdy1pY29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgfX1gfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+O1xufVxuIl19 */\n/*@ sourceURL=components/FindPlan.js */"
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Header.js";

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
    key: "render",
    value: function render() {
      var Wrapper = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
        displayName: "Header__Wrapper",
        componentId: "an08yg-0"
      })(["background-color:#fff;display:flex;flex-direction:row;text-align:center;align-items:center;@media only screen and (max-width:480px){display:flex;flex-direction:column;}"]);
      var Logo = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
        displayName: "Header__Logo",
        componentId: "an08yg-1"
      })(["flex:auto 1 1;justify-content:flex-start;display:flex;margin:auto 10px auto 10px;img{height:auto;margin-left:30px;@media only screen and (max-width:480px){margin-left:0;}}"]);
      var Title = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
        displayName: "Header__Title",
        componentId: "an08yg-2"
      })(["p{color:#939393;font-weight:200;}span{color:#ff3764;}"]);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, {
        className: this.props.global,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Logo, {
        className: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        width: "170px",
        height: "auto",
        src: "/static/images/cxcloud_operator_logo.jpg",
        alt: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Title, {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "The best ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "imaginery"), " operator in the world.")));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);



/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Footer__ = __webpack_require__("./components/Footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
var _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  var global = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
    displayName: "Layout__global",
    componentId: "sc-1c610dc-0"
  })(["font-family:Verdana,Geneva,Tahoma,sans-serif;color:#4a4a4a;"]);
  var button = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.button.withConfig({
    displayName: "Layout__button",
    componentId: "sc-1c610dc-1"
  })(["background-color:#ff3764;padding:8px 30px 8px 30px;color:white;font-weight:400;font-size:18px;border-radius:8px;margin-top:20px;border-color:transparent;a{color:white;text-decoration:none;}"]);
  var title = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.h1.withConfig({
    displayName: "Layout__title",
    componentId: "sc-1c610dc-2"
  })(["font-size:24px;@media only screen and (max-width:400px){font-size:20px;color:#4a4a4a;}"]);
  var big = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.h1.withConfig({
    displayName: "Layout__big",
    componentId: "sc-1c610dc-3"
  })(["font-size:20px;"]);
  var medium = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.p.withConfig({
    displayName: "Layout__medium",
    componentId: "sc-1c610dc-4"
  })(["font-size:16px;"]);
  var small = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.p.withConfig({
    displayName: "Layout__small",
    componentId: "sc-1c610dc-5"
  })(["font-size:12px;"]);
  var light = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.p.withConfig({
    displayName: "Layout__light",
    componentId: "sc-1c610dc-6"
  })(["font-weight:200;"]);
  var bold = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.p.withConfig({
    displayName: "Layout__bold",
    componentId: "sc-1c610dc-7"
  })(["font-weight:600;"]);
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Header__["a" /* default */], {
    global: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "\n\n          .bold {\n              font-weight: 600;\n          }\n          .backgroundLightGrey {\n              background-color: lightgrey;\n          }\n          .backgroundGrey {\n              background-color: grey;\n          }\n          .backgroundDarkGrey {\n              background-color: darkgrey;\n          }\n          /* Media queries */\n          @media only screen and (max-width : 400px) {\n            .FindPlan {\n            padding: 0px 20px 0px 20px;\n            }\n            .title {\n\n            }\n          }\n        "));
});

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CategoriesList__ = __webpack_require__("./components/CategoriesList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FindPlan__ = __webpack_require__("./components/FindPlan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);

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
          commerceProducts = _props.commerceProducts,
          categories = _props.categories;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout__["a" /* default */], {
        className: "Homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Cover__["a" /* default */], {
        className: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CategoriesList__["a" /* default */], {
        categories: categories,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_FindPlan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, req, productId, commerceProducts, categoryId, categories;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                productId = __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.get(query, 'id');
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_5__common_Util__["a" /* default */].fetchProducts(productId);

              case 4:
                commerceProducts = _context.sent;
                categoryId = __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.get(query);
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_5__common_Util__["a" /* default */].fetchCategories(categoryId);

              case 8:
                categories = _context.sent;
                return _context.abrupt("return", {
                  commerceProducts: commerceProducts,
                  categories: categories
                });

              case 10:
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

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map