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
  var productId = _ref.productId,
      productName = _ref.productName,
      productCode = _ref.productCode,
      productHighlight = _ref.productHighlight,
      price = _ref.price,
      longDescription = _ref.longDescription,
      productShortDescription = _ref.productShortDescription,
      availability = _ref.availability,
      image = _ref.image;
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    className: "jsx-1081293250" + " " + "CurrentServices"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    className: "jsx-1081293250" + " " + "currServ-title title"
  }, "These are the services we are providing you at the moment:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    className: "jsx-1081293250" + " " + "currentServices-sub"
  }, _this.state.products.map(function (item, i) {
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
        lineNumber: 20
      }
    });
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1081293250",
    css: ".CurrentServices.jsx-1081293250{margin-left:auto;margin-right:auto;}.currentServices-sub.jsx-1081293250{display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ3VycmVudFNlcnZpY2VzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDcUIsQUFHOEMsQUFJSixhQUM0QyxJQUp2QyxrQkFDdEIsbUNBSUEiLCJmaWxlIjoiY29tcG9uZW50cy9DdXJyZW50U2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RhbWFybGluL2N4LWNsb3VkLWVzaG9wIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXJyZW50U2VydmljZSBmcm9tICcuL0N1cnJlbnRTZXJ2aWNlJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL2NvbW1vbi9VdGlsJztcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgICBwcm9kdWN0SWQsXG4gICAgcHJvZHVjdE5hbWUsXG4gICAgcHJvZHVjdENvZGUsXG4gICAgcHJvZHVjdEhpZ2hsaWdodCxcbiAgICBwcmljZSxcbiAgICBsb25nRGVzY3JpcHRpb24sXG4gICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb24sXG4gICAgYXZhaWxhYmlsaXR5LFxuICAgIGltYWdlXG59KSA9PiB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkN1cnJlbnRTZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjdXJyU2Vydi10aXRsZSB0aXRsZVwiPlRoZXNlIGFyZSB0aGUgc2VydmljZXMgd2UgYXJlIHByb3ZpZGluZyB5b3UgYXQgdGhlIG1vbWVudDo8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VycmVudFNlcnZpY2VzLXN1YlwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wcm9kdWN0cy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDdXJyZW50U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZD17aXRlbS5zeXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3ROYW1lPXtpdGVtLmZpZWxkcy5wcm9kdWN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Q29kZT17aXRlbS5maWVsZHMucHJvZHVjdENvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdEhpZ2hsaWdodD17aXRlbS5maWVsZHMucHJvZHVjdEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZT17aXRlbS5maWVsZHMucHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9uZ0Rlc2NyaXB0aW9uPXtpdGVtLmZpZWxkcy5sb25nRGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFNob3J0RGVzY3JpcHRpb249e2l0ZW0uZmllbGRzLnByb2R1Y3RTaG9ydERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmZpZWxkcy5pbWFnZUxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DdXJyZW50U2VydmljZT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5DdXJyZW50U2VydmljZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jdXJyZW50U2VydmljZXMtc3ViIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgzNDBweCwxZnIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgIH1cblxuIl19 */\n/*@ sourceURL=components/CurrentServices.js */"
  }));
});

/***/ })

})
//# sourceMappingURL=5.65ad8dcca08e0167ebb7.hot-update.js.map