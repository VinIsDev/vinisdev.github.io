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
  year: 2022,
  text: 'I have been helping in projects in the field of videogames.'
}, {
  year: 'NOW',
  text: 'I am trying to learn new frameworks.'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3V0aWxzLmpzIl0sIm5hbWVzIjpbIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0IiwicHJlc2VudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJyZWZvcm1hdFN0cmluZyIsInN0cmluZyIsInJlcGxhY2UiLCJ0eHQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHLENBQ3hCO0FBQUNDLE1BQUksRUFBRSxJQUFQO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQUR3QixFQUV4QjtBQUFDRCxNQUFJLEVBQUUsSUFBUDtBQUFhQyxNQUFJLEVBQUU7QUFBbkIsQ0FGd0IsRUFHeEI7QUFBQ0QsTUFBSSxFQUFFLElBQVA7QUFBYUMsTUFBSSxFQUFFO0FBQW5CLENBSHdCLEVBSXhCO0FBQUNELE1BQUksRUFBRSxLQUFQO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUp3QixDQUFyQjtBQU9BLElBQU1DLFdBQVcsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBcEI7QUFFQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQ7QUFBQSxTQUMxQkEsTUFBTSxDQUFDQyxPQUFQLENBQWUsSUFBZixFQUFxQixHQUFyQixFQUEwQkEsT0FBMUIsQ0FBa0MsUUFBbEMsRUFBNEMsVUFBQ0MsR0FBRDtBQUFBLFdBQVNBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxLQUE4QkYsR0FBRyxDQUFDRyxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEVBQXZDO0FBQUEsR0FBNUMsQ0FEMEI7QUFBQSxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MzFjYTI0ZjQzODJiMjE0MjE3NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgICB7eWVhcjogMjAxOSwgdGV4dDogJ0kgYmVjYW1lIGludGVyZXN0ZWQgaW4gcHJvZ3JhbW1pbmcnLH0sXG4gICAge3llYXI6IDIwMjEsIHRleHQ6ICdJIGRpZCBteSBmaXJzdCBwYWlkIHByb2plY3QuJyx9LFxuICAgIHt5ZWFyOiAyMDIyLCB0ZXh0OiAnSSBoYXZlIGJlZW4gaGVscGluZyBpbiBwcm9qZWN0cyBpbiB0aGUgZmllbGQgb2YgdmlkZW9nYW1lcy4nLH0sXG4gICAge3llYXI6ICdOT1cnLCB0ZXh0OiAnSSBhbSB0cnlpbmcgdG8gbGVhcm4gbmV3IGZyYW1ld29ya3MuJyx9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHByZXNlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuXG5leHBvcnQgY29uc3QgcmVmb3JtYXRTdHJpbmcgPSAoc3RyaW5nKSA9PiAoXG4gICAgc3RyaW5nLnJlcGxhY2UoLy0vZywgJyAnKS5yZXBsYWNlKC9cXHdcXFMqL2csICh0eHQpID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSlcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9