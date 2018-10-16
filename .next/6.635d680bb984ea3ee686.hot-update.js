webpackHotUpdate(6,{

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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData('Helsinki');
      console.log('gere' + this.fetchData);
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      this.setState({
        isLoading: true
      });
      fetch("https://dev.cxcloud.com/api/v1/categories").then(function (response) {
        return response.json();
      });
      console.log('hey');
    }
  }, {
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
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__common_CoverAllPages__["a" /* default */], {
        className: "CoverAllPages",
        productName: item.productName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
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
          lineNumber: 80
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-1362842210" + " " + "showCalendar-btn"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("button", {
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-1362842210" + " " + "readMore"
      }, " > More options in the full calendar"), this.state.shown ? __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_Calendar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }) : null), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_Tabs__["a" /* default */], {
        customerTestimonials: customerTestim,
        twitterFeeds: twitterFeeds,
        technicalSpecs: technicalSpecs,
        calcOfSavings: calcOfSavings,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_FindPlan__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1362842210",
        css: "*{font-family:Verdana;}.CoverAllPages{margin-bottom:50px;}.showCalendar-btn{text-align:center;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0dxQixBQUdpRCxBQUdELEFBR0Qsa0JBQ0MsQ0FIdkIsQ0FIQSxpQkFPQSIsImZpbGUiOiJwYWdlcy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ292ZXJBbGxQYWdlcyBmcm9tICcuLi9jb21tb24vQ292ZXJBbGxQYWdlcydcbmltcG9ydCBTZXJ2aWNlSW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlSW5mb3JtYXRpb24nXG5pbXBvcnQgRmluZFBsYW4gZnJvbSAnLi4vY29tcG9uZW50cy9GaW5kUGxhbidcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJ1xuaW1wb3J0IEN1cnJlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VycmVudFNlcnZpY2UnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsZW5kYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd246IGZhbHNlXG4gICAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmZldGNoRGF0YSgnSGVsc2lua2knKTtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXJlJyArIHRoaXMuZmV0Y2hEYXRhKVxuICAgIH1cbiAgICBmZXRjaERhdGEoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IHRydWV9KVxuICAgICAgZmV0Y2goYGh0dHBzOi8vZGV2LmN4Y2xvdWQuY29tL2FwaS92MS9jYXRlZ29yaWVzYClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIGNvbnNvbGUubG9nKCdoZXknKVxuICAgIH1cblxuXG5cblxuXG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnksIHJlcSB9KSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9YXdhaXQgVXRpbC5mZXRjaFByb2R1Y3RCeUlkKHByb2R1Y3RJZCk7XG5cbiAgICAgICAgY29uc3QgcmVjb21tZW5kZWRQcm9kdWN0c0lkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCByZWNvbW1lbmRlZFByb2R1Y3RzID0gYXdhaXQgVXRpbC5mZXRjaFJlY29tbWVuZGVkUHJvZHVjdHMocmVjb21tZW5kZWRQcm9kdWN0c0lkKTtcblxuICAgICAgICBjb25zdCBjdXN0b21lclRlc3RpbW9uaWFsc0lkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCBjdXN0b21lclRlc3RpbW9uaWFscyA9IGF3YWl0IFV0aWwuZmV0Y2hDdXN0b21lclRlc3RpbW9uaWFscyhjdXN0b21lclRlc3RpbW9uaWFsc0lkKTtcblxuICAgICAgICBjb25zdCB0d2l0dGVyRmVlZHNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgdHdpdHRlckZlZWRzID0gYXdhaXQgVXRpbC5mZXRjaFR3aXR0ZXJGZWVkcyh0d2l0dGVyRmVlZHNJZCk7XG5cbiAgICAgICAgY29uc3QgdGVjaG5pY2FsU3BlY0lkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCB0ZWNobmljYWxTcGVjcyA9IGF3YWl0IFV0aWwuZmV0Y2hUZWNobmljYWxTcGVjaWZpY2F0aW9ucyh0ZWNobmljYWxTcGVjSWQpO1xuXG4gICAgICAgIGNvbnN0IGNhbGNPZlNhdmluZ0lkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCBjYWxjT2ZTYXZpbmdzID0gYXdhaXQgVXRpbC5mZXRjaENhbGN1bGF0aW9uc09mU2F2aW5ncyhjYWxjT2ZTYXZpbmdJZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICByZWNvbW1lbmRlZFByb2R1Y3RzLFxuICAgICAgICAgICAgY3VzdG9tZXJUZXN0aW1vbmlhbHMsXG4gICAgICAgICAgICB0d2l0dGVyRmVlZHMsXG4gICAgICAgICAgICB0ZWNobmljYWxTcGVjcyxcbiAgICAgICAgICAgIGNhbGNPZlNhdmluZ3NcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd246ICF0aGlzLnN0YXRlLnNob3duIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZygnaGVsbG8nKVxuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLnByb3BzLnByb2R1Y3QuaXRlbXNbMF0uZmllbGRzIHx8IHRoaXMucHJvcHMucmVjb21tZW5kZWRQcm9kdWN0cy5pdGVtc1swXS5maWVsZHNcbiAgICAgICAgY29uc3QgY3VzdG9tZXJUZXN0aW0gPSB0aGlzLnByb3BzLmN1c3RvbWVyVGVzdGltb25pYWxzLml0ZW1zO1xuICAgICAgICBjb25zdCB0d2l0dGVyRmVlZHMgPSB0aGlzLnByb3BzLnR3aXR0ZXJGZWVkcy5pdGVtcztcbiAgICAgICAgY29uc3QgdGVjaG5pY2FsU3BlY3MgPSB0aGlzLnByb3BzLnRlY2huaWNhbFNwZWNzLml0ZW1zO1xuICAgICAgICBjb25zdCBjYWxjT2ZTYXZpbmdzID0gdGhpcy5wcm9wcy5jYWxjT2ZTYXZpbmdzLml0ZW1zO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cIkFib3V0XCI+XG4gICAgICAgICAgICAgICAgPENvdmVyQWxsUGFnZXNcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiQ292ZXJBbGxQYWdlc1wiXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfSAvPlxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlSW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiU2VydmljZUluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU9e2l0ZW0ucHJvZHVjdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlPXtpdGVtLnByb2R1Y3RDb2RlfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SGlnaGxpZ2h0PXtpdGVtLnByb2R1Y3RIaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICBsb25nRGVzY3JpcHRpb249e2l0ZW0ubG9uZ0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWFnZUxpbmt9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTaG9ydERlc2NyaXB0aW9uPXtpdGVtLnByb2R1Y3RTaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHk9e2l0ZW0uYXZhaWxhYmlsaXR5fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd0NhbGVuZGFyLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlYWRNb3JlXCIgb25DbGljaz17dGhpcy50b2dnbGV9PiA+IE1vcmUgb3B0aW9ucyBpbiB0aGUgZnVsbCBjYWxlbmRhcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93biA/IDxDYWxlbmRhciAvPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFRhYnNcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJUZXN0aW1vbmlhbHM9e2N1c3RvbWVyVGVzdGltfVxuICAgICAgICAgICAgICAgICAgICB0d2l0dGVyRmVlZHM9e3R3aXR0ZXJGZWVkc31cbiAgICAgICAgICAgICAgICAgICAgdGVjaG5pY2FsU3BlY3M9e3RlY2huaWNhbFNwZWNzfVxuICAgICAgICAgICAgICAgICAgICBjYWxjT2ZTYXZpbmdzPXtjYWxjT2ZTYXZpbmdzfSAvPlxuICAgICAgICAgICAgICAgIDxGaW5kUGxhbiAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuQ292ZXJBbGxQYWdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93Q2FsZW5kYXItYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=pages/Product.js */"
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
//# sourceMappingURL=6.635d680bb984ea3ee686.hot-update.js.map