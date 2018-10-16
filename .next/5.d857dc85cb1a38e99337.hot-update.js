webpackHotUpdate(5,{

/***/ "./components/CurrentServices.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CurrentService__ = __webpack_require__("./components/CurrentService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Util__ = __webpack_require__("./common/Util.js");
var _this = this,
    _jsxFileName = "/Users/damarlin/cx-cloud-eshop/components/CurrentServices.js";





/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var categories = _ref.categories;
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-1081293250" + " " + "CurrentServices"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-1081293250" + " " + "currServ-title title"
  }, "These are the services we are providing you at the moment:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    className: "jsx-1081293250" + " " + "currentServices-sub"
  }, _this.state.categories.map(function (item, i) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CurrentService__["a" /* default */], {
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
        lineNumber: 12
      }
    });
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1081293250",
    css: ".CurrentServices.jsx-1081293250{margin-left:auto;margin-right:auto;}.currentServices-sub.jsx-1081293250{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VycmVudFNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCcUIsQUFHOEMsQUFJSixhQUM0QyxJQUp2QyxrQkFDdEIsbUNBSUEiLCJmaWxlIjoiY29tcG9uZW50cy9DdXJyZW50U2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXJyZW50U2VydmljZSBmcm9tICcuL0N1cnJlbnRTZXJ2aWNlJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgICBjYXRlZ29yaWVzXG59KSA9PiB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkN1cnJlbnRTZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjdXJyU2Vydi10aXRsZSB0aXRsZVwiPlRoZXNlIGFyZSB0aGUgc2VydmljZXMgd2UgYXJlIHByb3ZpZGluZyB5b3UgYXQgdGhlIG1vbWVudDo8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudFNlcnZpY2VzLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5jYXRlZ29yaWVzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEN1cnJlbnRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdElkPXtpdGVtLnN5cy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU9e2l0ZW0uZmllbGRzLnByb2R1Y3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlPXtpdGVtLmZpZWxkcy5wcm9kdWN0Q29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0SGlnaGxpZ2h0PXtpdGVtLmZpZWxkcy5wcm9kdWN0SGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlPXtpdGVtLmZpZWxkcy5wcmljZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb25nRGVzY3JpcHRpb249e2l0ZW0uZmllbGRzLmxvbmdEZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0U2hvcnREZXNjcmlwdGlvbj17aXRlbS5maWVsZHMucHJvZHVjdFNob3J0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uZmllbGRzLmltYWdlTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0N1cnJlbnRTZXJ2aWNlPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAgICAgLkN1cnJlbnRTZXJ2aWNlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmN1cnJlbnRTZXJ2aWNlcy1zdWIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDM0MHB4LDFmcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgIH1cblxuIl19 */\n/*@ sourceURL=components/CurrentServices.js */"
  }));
});

/***/ })

})
//# sourceMappingURL=5.d857dc85cb1a38e99337.hot-update.js.map