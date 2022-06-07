self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; },
/* harmony export */   "presentYear": function() { return /* binding */ presentYear; },
/* harmony export */   "reformatString": function() { return /* binding */ reformatString; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var TimeLineData = [{
  year: 2019,
  text: 'I became interested in programming'
}, {
  year: 2021,
  text: 'I did my first paid project.'
}, {
  year: 2021,
  text: 'Acabé el primer año del grado.'
}, {
  year: 2022,
  text: 'Mi estancia en la empresa acabó.'
}, {
  year: 'AHORA',
  text: 'El grado finalizó, se abre una nueva y fascinante etapa.'
}];
var presentYear = new Date().getFullYear();
var reformatString = function reformatString(string) {
  return string.replace(/-/g, ' ').replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwicHJlc2VudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJyZWZvcm1hdFN0cmluZyIsInN0cmluZyIsInJlcGxhY2UiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHLENBQ3hCO0FBQUNDLE1BQUksRUFBRSxJQUFQO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUR3QixFQUV4QjtBQUFDRCxNQUFJLEVBQUUsSUFBUDtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FGd0IsRUFHeEI7QUFBQ0QsTUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBSHdCLEVBSXhCO0FBQUNELE1BQUksRUFBRSxJQUFQO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUp3QixFQUt4QjtBQUFDRCxNQUFJLEVBQUUsT0FBUDtBQUFnQkMsTUFBSSxFQUFFO0FBQXRCLENBTHdCLENBQXJCO0FBUUEsSUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFwQjtBQUVBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRDtBQUFBLFNBQzFCQSxNQUFNLENBQUNDLE9BQVAsQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLEVBQTBCQSxPQUExQixDQUFrQyxRQUFsQyxFQUE0QyxVQUFDQyxHQUFEO0FBQUEsV0FBU0EsR0FBRyxDQUFDQyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEtBQThCRixHQUFHLENBQUNHLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsRUFBdkM7QUFBQSxHQUE1QyxDQUQwQjtBQUFBLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ3YjUxZDAxZDBmYTVkODI3MWJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICAgIHt5ZWFyOiAyMDE5LCB0ZXh0OiAnSSBiZWNhbWUgaW50ZXJlc3RlZCBpbiBwcm9ncmFtbWluZycsfSxcbiAgICB7eWVhcjogMjAyMSwgdGV4dDogJ0kgZGlkIG15IGZpcnN0IHBhaWQgcHJvamVjdC4nLH0sXG4gICAge3llYXI6IDIwMjEsIHRleHQ6ICdBY2Fiw6kgZWwgcHJpbWVyIGHDsW8gZGVsIGdyYWRvLicsfSxcbiAgICB7eWVhcjogMjAyMiwgdGV4dDogJ01pIGVzdGFuY2lhIGVuIGxhIGVtcHJlc2EgYWNhYsOzLicsfSxcbiAgICB7eWVhcjogJ0FIT1JBJywgdGV4dDogJ0VsIGdyYWRvIGZpbmFsaXrDsywgc2UgYWJyZSB1bmEgbnVldmEgeSBmYXNjaW5hbnRlIGV0YXBhLicsfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwcmVzZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblxuZXhwb3J0IGNvbnN0IHJlZm9ybWF0U3RyaW5nID0gKHN0cmluZykgPT4gKFxuICAgIHN0cmluZy5yZXBsYWNlKC8tL2csICcgJykucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpXG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==