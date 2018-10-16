webpackHotUpdate(5,{

/***/ "./components/CurrentServices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
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
          lineNumber: 17
        },
        className: "jsx-1081293250" + " " + "CurrentServices"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-1081293250" + " " + "currServ-title title"
      }, "These are the services we are providing you at the moment:"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-1081293250" + " " + "currentServices-sub"
      }, this.state.categories.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CurrentService__["a" /* default */], {
          productId: item.sys.id,
          key: i,
          productName: item.fields.productName,
          productCode: item.fields.productCode,
          productHighlight: item.fields.productHighlight,
          price: item.fields.price,
          longDescription: item.fields.longDescription,
          productShortDescription: item.fields.productShortDescription,
          image: item.fields.imageLink,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1081293250",
        css: ".CurrentServices.jsx-1081293250{margin-left:auto;margin-right:auto;}.currentServices-sub.jsx-1081293250{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VycmVudFNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDcUIsQUFHOEMsQUFJSixhQUM0QyxJQUp2QyxrQkFDdEIsbUNBSUEiLCJmaWxlIjoiY29tcG9uZW50cy9DdXJyZW50U2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXJyZW50U2VydmljZSBmcm9tICcuL0N1cnJlbnRTZXJ2aWNlJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICB9XG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGF3YWl0IFV0aWwuZmV0Y2hDb21tZXJjZUNhdGVnb3JpZXMoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXRlZ29yaWVzOiByZXN1bHQgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY2F0ZWdvcmllcylcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ3VycmVudFNlcnZpY2VzXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImN1cnJTZXJ2LXRpdGxlIHRpdGxlXCI+VGhlc2UgYXJlIHRoZSBzZXJ2aWNlcyB3ZSBhcmUgcHJvdmlkaW5nIHlvdSBhdCB0aGUgbW9tZW50OjwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJyZW50U2VydmljZXMtc3ViXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNhdGVnb3JpZXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3VycmVudFNlcnZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SWQ9e2l0ZW0uc3lzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5maWVsZHMucHJvZHVjdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGU9e2l0ZW0uZmllbGRzLnByb2R1Y3RDb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RIaWdobGlnaHQ9e2l0ZW0uZmllbGRzLnByb2R1Y3RIaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U9e2l0ZW0uZmllbGRzLnByaWNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvbmdEZXNjcmlwdGlvbj17aXRlbS5maWVsZHMubG9uZ0Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RTaG9ydERlc2NyaXB0aW9uPXtpdGVtLmZpZWxkcy5wcm9kdWN0U2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5maWVsZHMuaW1hZ2VMaW5rfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ3VycmVudFNlcnZpY2U+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICAuQ3VycmVudFNlcnZpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY3VycmVudFNlcnZpY2VzLXN1YiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMzQwcHgsMWZyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/CurrentServices.js */"
      }));
    }
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);



/***/ })

})
//# sourceMappingURL=5.934c02728365e9fb6b2c.hot-update.js.map