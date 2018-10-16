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
      }, this.props.categories.map(function (item, i) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          className: "jsx-1081293250"
        }, item) // <CurrentService
        //     productId={item.sys.id}
        //     key={i}
        //     productName={item.fields.productName}
        //     productCode={item.fields.productCode}
        //     productHighlight={item.fields.productHighlight}
        //     price={item.fields.price}
        //     longDescription={item.fields.longDescription}
        //     productShortDescription={item.fields.productShortDescription}
        //     image={item.fields.imageLink}>
        // </CurrentService>
        ;
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "1081293250",
        css: ".CurrentServices.jsx-1081293250{margin-left:auto;margin-right:auto;}.currentServices-sub.jsx-1081293250{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VycmVudFNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DcUIsQUFHOEMsQUFJSixhQUM0QyxJQUp2QyxrQkFDdEIsbUNBSUEiLCJmaWxlIjoiY29tcG9uZW50cy9DdXJyZW50U2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXJyZW50U2VydmljZSBmcm9tICcuL0N1cnJlbnRTZXJ2aWNlJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVxIH0pIHtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeUlkID0gXy5nZXQocXVlcnkpO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgVXRpbC5mZXRjaENvbW1lcmNlQ2F0ZWdvcmllcyhjYXRlZ29yeUlkKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNhdGVnb3JpZXNcbiAgICAgICAgfTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkN1cnJlbnRTZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjdXJyU2Vydi10aXRsZSB0aXRsZVwiPlRoZXNlIGFyZSB0aGUgc2VydmljZXMgd2UgYXJlIHByb3ZpZGluZyB5b3UgYXQgdGhlIG1vbWVudDo8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudFNlcnZpY2VzLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYXRlZ29yaWVzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDxDdXJyZW50U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2R1Y3RJZD17aXRlbS5zeXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHByb2R1Y3ROYW1lPXtpdGVtLmZpZWxkcy5wcm9kdWN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcm9kdWN0Q29kZT17aXRlbS5maWVsZHMucHJvZHVjdENvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvZHVjdEhpZ2hsaWdodD17aXRlbS5maWVsZHMucHJvZHVjdEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwcmljZT17aXRlbS5maWVsZHMucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9uZ0Rlc2NyaXB0aW9uPXtpdGVtLmZpZWxkcy5sb25nRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb249e2l0ZW0uZmllbGRzLnByb2R1Y3RTaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGltYWdlPXtpdGVtLmZpZWxkcy5pbWFnZUxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC9DdXJyZW50U2VydmljZT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DdXJyZW50U2VydmljZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50U2VydmljZXMtc3ViIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgzNDBweCwxZnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=components/CurrentServices.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, req, categoryId, categories;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, req = _ref.req;
                categoryId = _.get(query);
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__common_Util__["a" /* default */].fetchCommerceCategories(categoryId);

              case 4:
                categories = _context.sent;
                return _context.abrupt("return", {
                  categories: categories
                });

              case 6:
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



/***/ })

})
//# sourceMappingURL=5.e2a77fddd49606ec7e40.hot-update.js.map