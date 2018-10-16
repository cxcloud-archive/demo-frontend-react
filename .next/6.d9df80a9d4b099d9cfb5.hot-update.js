webpackHotUpdate(6,{

/***/ "./common/Util.js":
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: SyntaxError: /Users/damarlin/cx-cloud-eshop/common/Util.js: Unexpected token, expected \";\" (62:20)\n\n  60 | }\n  61 | \n> 62 | componentDidMount() {\n     |                     ^\n  63 |       this.fetchData()\n  64 | \n  65 |     }\n    at _class.raise (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:778:15)\n    at _class.unexpected (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2063:16)\n    at _class.semicolon (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:2047:40)\n    at _class.parseExpressionStatement (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:4439:10)\n    at _class.parseStatementContent (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:4045:19)\n    at _class.parseStatement (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:3926:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:4470:23)\n    at _class.parseBlockBody (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:4457:10)\n    at _class.parseTopLevel (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:3902:10)\n    at _class.parse (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:5250:17)\n    at parse (/Users/damarlin/cx-cloud-eshop/node_modules/babylon/lib/index.js:9972:38)\n    at parser (/Users/damarlin/cx-cloud-eshop/node_modules/@babel/core/lib/transformation/normalize-file.js:106:33)\n    at normalizeFile (/Users/damarlin/cx-cloud-eshop/node_modules/@babel/core/lib/transformation/normalize-file.js:53:11)\n    at runSync (/Users/damarlin/cx-cloud-eshop/node_modules/@babel/core/lib/transformation/index.js:34:41)\n    at runAsync (/Users/damarlin/cx-cloud-eshop/node_modules/@babel/core/lib/transformation/index.js:25:14)\n    at /Users/damarlin/cx-cloud-eshop/node_modules/@babel/core/lib/transform.js:32:34");

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Util__ = __webpack_require__("./common/Util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__common_Util__);

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
                return __WEBPACK_IMPORTED_MODULE_4__common_Util__["default"].fetchUsers(productId);

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

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
false,

/***/ "./node_modules/whatwg-fetch/fetch.js":
false,

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__common_Util__);
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
        console.log('hey ' + parsedJSON[0].slug);
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
        css: "*{font-family:Verdana;}.CoverAllPages{margin-bottom:50px;}.showCalendar-btn{text-align:center;margin-bottom:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL1Byb2R1Y3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0dxQixBQUdpRCxBQUdELEFBR0Qsa0JBQ0MsQ0FIdkIsQ0FIQSxpQkFPQSIsImZpbGUiOiJwYWdlcy9Qcm9kdWN0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kYW1hcmxpbi9jeC1jbG91ZC1lc2hvcCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQ292ZXJBbGxQYWdlcyBmcm9tICcuLi9jb21tb24vQ292ZXJBbGxQYWdlcydcbmltcG9ydCBTZXJ2aWNlSW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZXJ2aWNlSW5mb3JtYXRpb24nXG5pbXBvcnQgRmluZFBsYW4gZnJvbSAnLi4vY29tcG9uZW50cy9GaW5kUGxhbidcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJ1xuaW1wb3J0IEN1cnJlbnRTZXJ2aWNlIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VycmVudFNlcnZpY2UnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJzJ1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsZW5kYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvd246IGZhbHNlXG4gICAgfVxuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLmZldGNoRGF0YSgpXG5cbiAgICB9XG4gICAgZmV0Y2hEYXRhKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiB0cnVlfSlcbiAgICAgIGZldGNoKGBodHRwczovL2Rldi5jeGNsb3VkLmNvbS9hcGkvdjEvY2F0ZWdvcmllc2ApXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihwYXJzZWRKU09OID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoZXkgJyArIHBhcnNlZEpTT05bMF0uc2x1ZylcbiAgICAgIH0pfVxuXG5cblxuXG5cblxuXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5LCByZXEgfSkge1xuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPWF3YWl0IFV0aWwuZmV0Y2hQcm9kdWN0QnlJZChwcm9kdWN0SWQpO1xuXG4gICAgICAgIGNvbnN0IHJlY29tbWVuZGVkUHJvZHVjdHNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgcmVjb21tZW5kZWRQcm9kdWN0cyA9IGF3YWl0IFV0aWwuZmV0Y2hSZWNvbW1lbmRlZFByb2R1Y3RzKHJlY29tbWVuZGVkUHJvZHVjdHNJZCk7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tZXJUZXN0aW1vbmlhbHNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgY3VzdG9tZXJUZXN0aW1vbmlhbHMgPSBhd2FpdCBVdGlsLmZldGNoQ3VzdG9tZXJUZXN0aW1vbmlhbHMoY3VzdG9tZXJUZXN0aW1vbmlhbHNJZCk7XG5cbiAgICAgICAgY29uc3QgdHdpdHRlckZlZWRzSWQgPSBfLmdldChxdWVyeSwgJ2lkJyk7XG4gICAgICAgIGNvbnN0IHR3aXR0ZXJGZWVkcyA9IGF3YWl0IFV0aWwuZmV0Y2hUd2l0dGVyRmVlZHModHdpdHRlckZlZWRzSWQpO1xuXG4gICAgICAgIGNvbnN0IHRlY2huaWNhbFNwZWNJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgdGVjaG5pY2FsU3BlY3MgPSBhd2FpdCBVdGlsLmZldGNoVGVjaG5pY2FsU3BlY2lmaWNhdGlvbnModGVjaG5pY2FsU3BlY0lkKTtcblxuICAgICAgICBjb25zdCBjYWxjT2ZTYXZpbmdJZCA9IF8uZ2V0KHF1ZXJ5LCAnaWQnKTtcbiAgICAgICAgY29uc3QgY2FsY09mU2F2aW5ncyA9IGF3YWl0IFV0aWwuZmV0Y2hDYWxjdWxhdGlvbnNPZlNhdmluZ3MoY2FsY09mU2F2aW5nSWQpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICAgICAgcmVjb21tZW5kZWRQcm9kdWN0cyxcbiAgICAgICAgICAgIGN1c3RvbWVyVGVzdGltb25pYWxzLFxuICAgICAgICAgICAgdHdpdHRlckZlZWRzLFxuICAgICAgICAgICAgdGVjaG5pY2FsU3BlY3MsXG4gICAgICAgICAgICBjYWxjT2ZTYXZpbmdzXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3duOiAhdGhpcy5zdGF0ZS5zaG93biB9KVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgIC8vY29uc29sZS5sb2coJ2hlbGxvJylcblxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5wcm9kdWN0Lml0ZW1zWzBdLmZpZWxkcyB8fCB0aGlzLnByb3BzLnJlY29tbWVuZGVkUHJvZHVjdHMuaXRlbXNbMF0uZmllbGRzXG4gICAgICAgIGNvbnN0IGN1c3RvbWVyVGVzdGltID0gdGhpcy5wcm9wcy5jdXN0b21lclRlc3RpbW9uaWFscy5pdGVtcztcbiAgICAgICAgY29uc3QgdHdpdHRlckZlZWRzID0gdGhpcy5wcm9wcy50d2l0dGVyRmVlZHMuaXRlbXM7XG4gICAgICAgIGNvbnN0IHRlY2huaWNhbFNwZWNzID0gdGhpcy5wcm9wcy50ZWNobmljYWxTcGVjcy5pdGVtcztcbiAgICAgICAgY29uc3QgY2FsY09mU2F2aW5ncyA9IHRoaXMucHJvcHMuY2FsY09mU2F2aW5ncy5pdGVtcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJBYm91dFwiPlxuICAgICAgICAgICAgICAgIDxDb3ZlckFsbFBhZ2VzXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkNvdmVyQWxsUGFnZXNcIlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZT17aXRlbS5wcm9kdWN0TmFtZX0gLz5cbiAgICAgICAgICAgICAgICA8U2VydmljZUluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlNlcnZpY2VJbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLnByb2R1Y3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZT17aXRlbS5wcm9kdWN0Q29kZX1cbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEhpZ2hsaWdodD17aXRlbS5wcm9kdWN0SGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uPXtpdGVtLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1hZ2VMaW5rfVxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2hvcnREZXNjcmlwdGlvbj17aXRlbS5wcm9kdWN0U2hvcnREZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmlsaXR5PXtpdGVtLmF2YWlsYWJpbGl0eX0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3dDYWxlbmRhci1idG5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJyZWFkTW9yZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfT4gPiBNb3JlIG9wdGlvbnMgaW4gdGhlIGZ1bGwgY2FsZW5kYXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd24gPyA8Q2FsZW5kYXIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyVGVzdGltb25pYWxzPXtjdXN0b21lclRlc3RpbX1cbiAgICAgICAgICAgICAgICAgICAgdHdpdHRlckZlZWRzPXt0d2l0dGVyRmVlZHN9XG4gICAgICAgICAgICAgICAgICAgIHRlY2huaWNhbFNwZWNzPXt0ZWNobmljYWxTcGVjc31cbiAgICAgICAgICAgICAgICAgICAgY2FsY09mU2F2aW5ncz17Y2FsY09mU2F2aW5nc30gLz5cbiAgICAgICAgICAgICAgICA8RmluZFBsYW4gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLkNvdmVyQWxsUGFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuc2hvd0NhbGVuZGFyLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/Product.js */"
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
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["default"].fetchProductById(productId);

              case 4:
                product = _context.sent;
                recommendedProductsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["default"].fetchRecommendedProducts(recommendedProductsId);

              case 8:
                recommendedProducts = _context.sent;
                customerTestimonialsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 12;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["default"].fetchCustomerTestimonials(customerTestimonialsId);

              case 12:
                customerTestimonials = _context.sent;
                twitterFeedsId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 16;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["default"].fetchTwitterFeeds(twitterFeedsId);

              case 16:
                twitterFeeds = _context.sent;
                technicalSpecId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 20;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["default"].fetchTechnicalSpecifications(technicalSpecId);

              case 20:
                technicalSpecs = _context.sent;
                calcOfSavingId = __WEBPACK_IMPORTED_MODULE_9_lodash___default.a.get(query, 'id');
                _context.next = 24;
                return __WEBPACK_IMPORTED_MODULE_7__common_Util__["default"].fetchCalculationsOfSavings(calcOfSavingId);

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
//# sourceMappingURL=6.d9df80a9d4b099d9cfb5.hot-update.js.map