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
      this.fetchData();
    }
  }, {
    key: "fetchData",
    value: function fetchData() {
      this.setState({
        isLoading: true
      });
      fetch("https://dev.cxcloud.com/api/v1/categories").then(function (response) {
        return response.json();
      }).then(function (parsedJSON) {
        console.log('hey ' + parsedJSON);
      });
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
        css: "*{font-family:Verdana;}.CoverAllPages{margin-bottom:50px;}.showCalendar-btn{text-align:center;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dxQixBQUdpRCxBQUdELEFBR0Qsa0JBQ0MsQ0FIdkIsQ0FIQSxpQkFPQSIsImZpbGUiOiJwYWdlcy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ292ZXJBbGxQYWdlcyBmcm9tICcuLi9jb21tb24vQ292ZXJBbGxQYWdlcydcbmltcG9ydCBTZXJ2aWNlSW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlSW5mb3JtYXRpb24nXG5pbXBvcnQgRmluZFBsYW4gZnJvbSAnLi4vY29tcG9uZW50cy9GaW5kUGxhbidcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJ1xuaW1wb3J0IEN1cnJlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VycmVudFNlcnZpY2UnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsZW5kYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd246IGZhbHNlXG4gICAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmZldGNoRGF0YSgpXG5cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSlcbiAgICAgIGZldGNoKGBodHRwczovL2Rldi5jeGNsb3VkLmNvbS9hcGkvdjEvY2F0ZWdvcmllc2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihwYXJzZWRKU09OID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXkgJyArIHBhcnNlZEpTT04pXG4gICAgICB9KX1cblxuXG5cblxuXG5cblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVxIH0pIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0ID1hd2FpdCBVdGlsLmZldGNoUHJvZHVjdEJ5SWQocHJvZHVjdElkKTtcblxuICAgICAgICBjb25zdCByZWNvbW1lbmRlZFByb2R1Y3RzSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHMgPSBhd2FpdCBVdGlsLmZldGNoUmVjb21tZW5kZWRQcm9kdWN0cyhyZWNvbW1lbmRlZFByb2R1Y3RzSWQpO1xuXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyVGVzdGltb25pYWxzSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IGN1c3RvbWVyVGVzdGltb25pYWxzID0gYXdhaXQgVXRpbC5mZXRjaEN1c3RvbWVyVGVzdGltb25pYWxzKGN1c3RvbWVyVGVzdGltb25pYWxzSWQpO1xuXG4gICAgICAgIGNvbnN0IHR3aXR0ZXJGZWVkc0lkID0gXy5nZXQocXVlcnksICdpZCcpO1xuICAgICAgICBjb25zdCB0d2l0dGVyRmVlZHMgPSBhd2FpdCBVdGlsLmZldGNoVHdpdHRlckZlZWRzKHR3aXR0ZXJGZWVkc0lkKTtcblxuICAgICAgICBjb25zdCB0ZWNobmljYWxTcGVjSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHRlY2huaWNhbFNwZWNzID0gYXdhaXQgVXRpbC5mZXRjaFRlY2huaWNhbFNwZWNpZmljYXRpb25zKHRlY2huaWNhbFNwZWNJZCk7XG5cbiAgICAgICAgY29uc3QgY2FsY09mU2F2aW5nSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IGNhbGNPZlNhdmluZ3MgPSBhd2FpdCBVdGlsLmZldGNoQ2FsY3VsYXRpb25zT2ZTYXZpbmdzKGNhbGNPZlNhdmluZ0lkKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgICAgIHJlY29tbWVuZGVkUHJvZHVjdHMsXG4gICAgICAgICAgICBjdXN0b21lclRlc3RpbW9uaWFscyxcbiAgICAgICAgICAgIHR3aXR0ZXJGZWVkcyxcbiAgICAgICAgICAgIHRlY2huaWNhbFNwZWNzLFxuICAgICAgICAgICAgY2FsY09mU2F2aW5nc1xuICAgICAgICB9O1xuICAgIH1cbiAgICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93bjogIXRoaXMuc3RhdGUuc2hvd24gfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAvL2NvbnNvbGUubG9nKCdoZWxsbycpXG5cbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMucHJvZHVjdC5pdGVtc1swXS5maWVsZHMgfHwgdGhpcy5wcm9wcy5yZWNvbW1lbmRlZFByb2R1Y3RzLml0ZW1zWzBdLmZpZWxkc1xuICAgICAgICBjb25zdCBjdXN0b21lclRlc3RpbSA9IHRoaXMucHJvcHMuY3VzdG9tZXJUZXN0aW1vbmlhbHMuaXRlbXM7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJGZWVkcyA9IHRoaXMucHJvcHMudHdpdHRlckZlZWRzLml0ZW1zO1xuICAgICAgICBjb25zdCB0ZWNobmljYWxTcGVjcyA9IHRoaXMucHJvcHMudGVjaG5pY2FsU3BlY3MuaXRlbXM7XG4gICAgICAgIGNvbnN0IGNhbGNPZlNhdmluZ3MgPSB0aGlzLnByb3BzLmNhbGNPZlNhdmluZ3MuaXRlbXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMYXlvdXQgY2xhc3NOYW1lPVwiQWJvdXRcIj5cbiAgICAgICAgICAgICAgICA8Q292ZXJBbGxQYWdlc1xuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJDb3ZlckFsbFBhZ2VzXCJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU9e2l0ZW0ucHJvZHVjdE5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPFNlcnZpY2VJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJTZXJ2aWNlSW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5wcm9kdWN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU9e2l0ZW0ucHJvZHVjdENvZGV9XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RIaWdobGlnaHQ9e2l0ZW0ucHJvZHVjdEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0ucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgIGxvbmdEZXNjcmlwdGlvbj17aXRlbS5sb25nRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltYWdlTGlua31cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb249e2l0ZW0ucHJvZHVjdFNob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJpbGl0eT17aXRlbS5hdmFpbGFiaWxpdHl9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG93Q2FsZW5kYXItYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicmVhZE1vcmVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0+ID4gTW9yZSBvcHRpb25zIGluIHRoZSBmdWxsIGNhbGVuZGFyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3duID8gPENhbGVuZGFyIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGFic1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21lclRlc3RpbW9uaWFscz17Y3VzdG9tZXJUZXN0aW19XG4gICAgICAgICAgICAgICAgICAgIHR3aXR0ZXJGZWVkcz17dHdpdHRlckZlZWRzfVxuICAgICAgICAgICAgICAgICAgICB0ZWNobmljYWxTcGVjcz17dGVjaG5pY2FsU3BlY3N9XG4gICAgICAgICAgICAgICAgICAgIGNhbGNPZlNhdmluZ3M9e2NhbGNPZlNhdmluZ3N9IC8+XG4gICAgICAgICAgICAgICAgPEZpbmRQbGFuIC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5Db3ZlckFsbFBhZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3dDYWxlbmRhci1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/Product.js */"
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
//# sourceMappingURL=6.0795bf615a08c1736fd2.hot-update.js.map