webpackHotUpdate(6,{

/***/ "./components/ServiceInformation.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/damarlin/cx-cloud-eshop/components/ServiceInformation.js: Unexpected token (26:37)\n\n  24 |               <p>EAN Code</p>\n  25 |               <p>Stars Rating icon</p>\n> 26 |               <p><aWrite first review</p>\n     |                                      ^\n  27 |               <p>{productShortDescription}</p>\n  28 |               <p>\n  29 |                 <span>$ {price} / mo</span>\n    at _class.raise (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2063:16)\n    at _class.jsxParseIdentifier (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7874:14)\n    at _class.jsxParseNamespacedName (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7884:23)\n    at _class.jsxParseAttribute (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7967:24)\n    at _class.jsxParseOpeningElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:7984:35)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8008:33)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElementAt (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8024:34)\n    at _class.jsxParseElement (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8077:19)\n    at _class.parseExprAtom (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:8084:21)\n    at _class.parseExprSubscripts (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2725:21)\n    at _class.parseMaybeUnary (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2704:21)");

/***/ }),

/***/ "./pages/Product.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_CoverAllPages__ = __webpack_require__("./common/CoverAllPages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ServiceInformation__ = __webpack_require__("./components/ServiceInformation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ServiceInformation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_ServiceInformation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_FindPlan__ = __webpack_require__("./components/FindPlan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_CurrentService__ = __webpack_require__("./components/CurrentService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
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
        shown: false
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
      var item = this.props.product.items[0].fields || this.props.recommendedProducts.items[0].fields;
      var customerTestim = this.props.customerTestimonials.items;
      var twitterFeeds = this.props.twitterFeeds.items;
      var technicalSpecs = this.props.technicalSpecs.items;
      var calcOfSavings = this.props.calcOfSavings.items;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Layout__["a" /* default */], {
        className: "About",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_CoverAllPages__["a" /* default */], {
        className: "CoverAllPages",
        productName: item.productName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ServiceInformation__["default"], {
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
          lineNumber: 59
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-1362842210" + " " + "showCalendar-btn"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        className: "jsx-1362842210" + " " + "readMore"
      }, " > More options in the full calendar"), this.state.shown ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Calendar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }) : null), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Tabs__["a" /* default */], {
        customerTestimonials: customerTestim,
        twitterFeeds: twitterFeeds,
        technicalSpecs: technicalSpecs,
        calcOfSavings: calcOfSavings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_FindPlan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1362842210",
        css: "*{font-family:Verdana;}.CoverAllPages{margin-bottom:50px;}.showCalendar-btn{text-align:center;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0VxQixBQUdpRCxBQUdELEFBR0Qsa0JBQ0MsQ0FIdkIsQ0FIQSxpQkFPQSIsImZpbGUiOiJwYWdlcy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ292ZXJBbGxQYWdlcyBmcm9tICcuLi9jb21tb24vQ292ZXJBbGxQYWdlcydcbmltcG9ydCBTZXJ2aWNlSW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlSW5mb3JtYXRpb24nXG5pbXBvcnQgRmluZFBsYW4gZnJvbSAnLi4vY29tcG9uZW50cy9GaW5kUGxhbidcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJ1xuaW1wb3J0IEN1cnJlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VycmVudFNlcnZpY2UnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsZW5kYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd246IGZhbHNlXG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVxIH0pIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0ID1hd2FpdCBVdGlsLmZldGNoUHJvZHVjdEJ5SWQocHJvZHVjdElkKTtcblxuICAgICAgICBjb25zdCByZWNvbW1lbmRlZFByb2R1Y3RzSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHMgPSBhd2FpdCBVdGlsLmZldGNoUmVjb21tZW5kZWRQcm9kdWN0cyhyZWNvbW1lbmRlZFByb2R1Y3RzSWQpO1xuXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyVGVzdGltb25pYWxzSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IGN1c3RvbWVyVGVzdGltb25pYWxzID0gYXdhaXQgVXRpbC5mZXRjaEN1c3RvbWVyVGVzdGltb25pYWxzKGN1c3RvbWVyVGVzdGltb25pYWxzSWQpO1xuXG4gICAgICAgIGNvbnN0IHR3aXR0ZXJGZWVkc0lkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCB0d2l0dGVyRmVlZHMgPSBhd2FpdCBVdGlsLmZldGNoVHdpdHRlckZlZWRzKHR3aXR0ZXJGZWVkc0lkKTtcblxuICAgICAgICBjb25zdCB0ZWNobmljYWxTcGVjSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHRlY2huaWNhbFNwZWNzID0gYXdhaXQgVXRpbC5mZXRjaFRlY2huaWNhbFNwZWNpZmljYXRpb25zKHRlY2huaWNhbFNwZWNJZCk7XG5cbiAgICAgICAgY29uc3QgY2FsY09mU2F2aW5nSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IGNhbGNPZlNhdmluZ3MgPSBhd2FpdCBVdGlsLmZldGNoQ2FsY3VsYXRpb25zT2ZTYXZpbmdzKGNhbGNPZlNhdmluZ0lkKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZHVjdCwgXG4gICAgICAgICAgICByZWNvbW1lbmRlZFByb2R1Y3RzLCBcbiAgICAgICAgICAgIGN1c3RvbWVyVGVzdGltb25pYWxzLCBcbiAgICAgICAgICAgIHR3aXR0ZXJGZWVkcywgXG4gICAgICAgICAgICB0ZWNobmljYWxTcGVjcywgXG4gICAgICAgICAgICBjYWxjT2ZTYXZpbmdzXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3duOiAhdGhpcy5zdGF0ZS5zaG93biB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnByb3BzLnByb2R1Y3QuaXRlbXNbMF0uZmllbGRzIHx8IHRoaXMucHJvcHMucmVjb21tZW5kZWRQcm9kdWN0cy5pdGVtc1swXS5maWVsZHNcbiAgICAgICAgY29uc3QgY3VzdG9tZXJUZXN0aW0gPSB0aGlzLnByb3BzLmN1c3RvbWVyVGVzdGltb25pYWxzLml0ZW1zO1xuICAgICAgICBjb25zdCB0d2l0dGVyRmVlZHMgPSB0aGlzLnByb3BzLnR3aXR0ZXJGZWVkcy5pdGVtcztcbiAgICAgICAgY29uc3QgdGVjaG5pY2FsU3BlY3MgPSB0aGlzLnByb3BzLnRlY2huaWNhbFNwZWNzLml0ZW1zO1xuICAgICAgICBjb25zdCBjYWxjT2ZTYXZpbmdzID0gdGhpcy5wcm9wcy5jYWxjT2ZTYXZpbmdzLml0ZW1zO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cIkFib3V0XCI+XG4gICAgICAgICAgICAgICAgPENvdmVyQWxsUGFnZXMgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNvdmVyQWxsUGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5wcm9kdWN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8U2VydmljZUluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNlcnZpY2VJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZT17aXRlbS5wcm9kdWN0Q29kZX1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEhpZ2hsaWdodD17aXRlbS5wcm9kdWN0SGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uPXtpdGVtLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VMaW5rfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2hvcnREZXNjcmlwdGlvbj17aXRlbS5wcm9kdWN0U2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5PXtpdGVtLmF2YWlsYWJpbGl0eX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dDYWxlbmRhci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkTW9yZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT4gPiBNb3JlIG9wdGlvbnMgaW4gdGhlIGZ1bGwgY2FsZW5kYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd24gPyA8Q2FsZW5kYXIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUYWJzIFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlc3RpbW9uaWFscz17Y3VzdG9tZXJUZXN0aW19XG4gICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJGZWVkcz17dHdpdHRlckZlZWRzfVxuICAgICAgICAgICAgICAgICAgICB0ZWNobmljYWxTcGVjcz17dGVjaG5pY2FsU3BlY3N9IFxuICAgICAgICAgICAgICAgICAgICBjYWxjT2ZTYXZpbmdzPXtjYWxjT2ZTYXZpbmdzfSAvPlxuICAgICAgICAgICAgICAgIDxGaW5kUGxhbiAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuQ292ZXJBbGxQYWdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93Q2FsZW5kYXItYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufSJdfQ== */\n/*@ sourceURL=pages/Product.js */"
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Product")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.3a62a4790581e7b1b1d9.hot-update.js.map