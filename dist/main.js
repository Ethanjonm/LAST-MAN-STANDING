/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_laser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/laser */ \"./src/scripts/laser.js\");\n// import Example from './scripts/example';\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello World\");\n\n//     const main = document.getElementById('main');\n//     new Example(main)\n\n// })\n// //npm run watch\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = innerWidth;\n  canvas.height = innerHeight;\n  canvas.style.background = \"#00BFFF\";\n  const x = canvas.width / 2;\n  const y = canvas.height / 2;\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, 30, \"Red\", ctx);\n  const laser = new _scripts_laser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](player.x, player.y, 5, \"Black\", [1, 1], ctx);\n  const lasers = [];\n  function animate() {\n    requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    player.draw();\n    lasers.forEach(laser => {\n      laser.update();\n    });\n  }\n  addEventListener(\"click\", event => {\n    const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);\n    const velocity = [Math.cos(angle), Math.sin(angle)];\n    lasers.push(new _scripts_laser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](player.x, player.y, 5, \"Black\", velocity, ctx));\n  });\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBR3FDO0FBQ0Y7QUFFbkNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUVoRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFFBQVEsQ0FBQztFQUNoRCxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBVSxDQUFDLElBQUksQ0FBQztFQUVuQ0gsTUFBTSxDQUFDSSxLQUFLLEdBQUdDLFVBQVU7RUFDekJMLE1BQU0sQ0FBQ00sTUFBTSxHQUFHQyxXQUFXO0VBRTNCUCxNQUFNLENBQUNRLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLFNBQVM7RUFFbkMsTUFBTUMsQ0FBQyxHQUFHVixNQUFNLENBQUNJLEtBQUssR0FBRyxDQUFDO0VBQzFCLE1BQU1PLENBQUMsR0FBR1gsTUFBTSxDQUFDTSxNQUFNLEdBQUcsQ0FBQztFQUUzQixNQUFNTSxNQUFNLEdBQUcsSUFBSWhCLHVEQUFNLENBQUNjLENBQUMsRUFBRUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUVULEdBQUcsQ0FBQztFQUcvQyxNQUFNVyxLQUFLLEdBQUcsSUFBSWhCLHNEQUFLLENBQ25CZSxNQUFNLENBQUNGLENBQUMsRUFDUkUsTUFBTSxDQUFDRCxDQUFDLEVBQ1IsQ0FBQyxFQUNELE9BQU8sRUFDUCxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFDTFQsR0FBRyxDQUFDO0VBRVIsTUFBTVksTUFBTSxHQUFHLEVBQUU7RUFHakIsU0FBU0MsT0FBT0EsQ0FBQSxFQUFHO0lBQ2ZDLHFCQUFxQixDQUFDRCxPQUFPLENBQUM7SUFDOUJiLEdBQUcsQ0FBQ2UsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUVqQixNQUFNLENBQUNJLEtBQUssRUFBRUosTUFBTSxDQUFDTSxNQUFNLENBQUM7SUFDL0NNLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDYkosTUFBTSxDQUFDSyxPQUFPLENBQUNOLEtBQUssSUFBSTtNQUNwQkEsS0FBSyxDQUFDTyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUM7RUFDTjtFQUVBckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFHc0IsS0FBSyxJQUFLO0lBQ2pDLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNILEtBQUssQ0FBQ0ksT0FBTyxHQUFHYixNQUFNLENBQUNELENBQUMsRUFBRVUsS0FBSyxDQUFDSyxPQUFPLEdBQUdkLE1BQU0sQ0FBQ0YsQ0FBQyxDQUFDO0lBQzVFLE1BQU1pQixRQUFRLEdBQUcsQ0FBQ0osSUFBSSxDQUFDSyxHQUFHLENBQUNOLEtBQUssQ0FBQyxFQUFFQyxJQUFJLENBQUNNLEdBQUcsQ0FBQ1AsS0FBSyxDQUFDLENBQUM7SUFFbkRSLE1BQU0sQ0FBQ2dCLElBQUksQ0FBQyxJQUFJakMsc0RBQUssQ0FBQ2UsTUFBTSxDQUFDRixDQUFDLEVBQUNFLE1BQU0sQ0FBQ0QsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUVnQixRQUFRLEVBQUN6QixHQUFHLENBQUMsQ0FBQztFQUN2RSxDQUFDLENBQUM7RUFFRmEsT0FBTyxDQUFDLENBQUM7QUFFYixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuXG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbilcblxuLy8gfSlcbi8vIC8vbnBtIHJ1biB3YXRjaFxuXG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXJcIlxuaW1wb3J0IExhc2VyIGZyb20gXCIuL3NjcmlwdHMvbGFzZXJcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4gICAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG4gICAgICAgIFxuICAgIGNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDBCRkZGXCI7XG5cbiAgICBjb25zdCB4ID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICBjb25zdCB5ID0gY2FudmFzLmhlaWdodCAvIDI7XG5cbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKHgsIHksIDMwLCBcIlJlZFwiLCBjdHgpO1xuXG5cbiAgICBjb25zdCBsYXNlciA9IG5ldyBMYXNlcihcbiAgICAgICAgcGxheWVyLngsIFxuICAgICAgICBwbGF5ZXIueSwgXG4gICAgICAgIDUsIFxuICAgICAgICBcIkJsYWNrXCIsIFxuICAgICAgICBbMSwxXSwgXG4gICAgICAgIGN0eClcblxuICAgIGNvbnN0IGxhc2VycyA9IFtdO1xuXG4gICAgXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICBwbGF5ZXIuZHJhdygpO1xuICAgICAgICBsYXNlcnMuZm9yRWFjaChsYXNlciA9PiB7XG4gICAgICAgICAgICBsYXNlci51cGRhdGUoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKGV2ZW50LmNsaWVudFkgLSBwbGF5ZXIueSwgZXZlbnQuY2xpZW50WCAtIHBsYXllci54KTtcbiAgICAgICAgY29uc3QgdmVsb2NpdHkgPSBbTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSldO1xuXG4gICAgICAgIGxhc2Vycy5wdXNoKG5ldyBMYXNlcihwbGF5ZXIueCxwbGF5ZXIueSwgNSwgXCJCbGFja1wiLCB2ZWxvY2l0eSxjdHgpKTtcbiAgICB9KVxuXG4gICAgYW5pbWF0ZSgpO1xuXG59KSAgXG5cbiJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJMYXNlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwieCIsInkiLCJwbGF5ZXIiLCJsYXNlciIsImxhc2VycyIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJkcmF3IiwiZm9yRWFjaCIsInVwZGF0ZSIsImV2ZW50IiwiYW5nbGUiLCJNYXRoIiwiYXRhbjIiLCJjbGllbnRZIiwiY2xpZW50WCIsInZlbG9jaXR5IiwiY29zIiwic2luIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/laser.js":
/*!******************************!*\
  !*** ./src/scripts/laser.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Laser {\n  constructor(x, y, radius, color, speed, ctx) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n    this.speed = speed;\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n  }\n  update() {\n    this.draw();\n    this.x = this.x + this.speed[0];\n    this.y = this.y + this.speed[1];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Laser);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sYXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsS0FBSyxDQUFDO0VBQ1JDLFdBQVdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQUU7SUFDekMsSUFBSSxDQUFDTCxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHO0VBQ2xCO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxTQUFTLENBQUMsQ0FBQztJQUNwQixJQUFJLENBQUNGLEdBQUcsQ0FBQ0csR0FBRyxDQUFDLElBQUksQ0FBQ1IsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRU8sSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztJQUNoRSxJQUFJLENBQUNMLEdBQUcsQ0FBQ00sU0FBUyxHQUFHLElBQUksQ0FBQ1IsS0FBSztJQUMvQixJQUFJLENBQUNFLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDbkI7RUFFQUMsTUFBTUEsQ0FBQSxFQUFHO0lBQ0wsSUFBSSxDQUFDUCxJQUFJLENBQUMsQ0FBQztJQUNYLElBQUksQ0FBQ04sQ0FBQyxHQUFHLElBQUksQ0FBQ0EsQ0FBQyxHQUFHLElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJLENBQUNILENBQUMsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBRyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDbkM7QUFFSjtBQUVBLCtEQUFlTixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNwLy4vc3JjL3NjcmlwdHMvbGFzZXIuanM/MmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIExhc2VyIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMsIGNvbG9yLCBzcGVlZCwgY3R4KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuZHJhdygpXG4gICAgICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMuc3BlZWRbMF1cbiAgICAgICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy5zcGVlZFsxXVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXNlcjsiXSwibmFtZXMiOlsiTGFzZXIiLCJjb25zdHJ1Y3RvciIsIngiLCJ5IiwicmFkaXVzIiwiY29sb3IiLCJzcGVlZCIsImN0eCIsImRyYXciLCJiZWdpblBhdGgiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwidXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/laser.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(x, y, radius, color, ctx) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRTtJQUNsQyxJQUFJLENBQUNKLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdBLEdBQUc7RUFDbEI7RUFFQUMsSUFBSUEsQ0FBQSxFQUFHO0lBQ0gsSUFBSSxDQUFDRCxHQUFHLENBQUNFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BCLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxHQUFHLENBQUMsSUFBSSxDQUFDUCxDQUFDLEVBQUUsSUFBSSxDQUFDQyxDQUFDLEVBQUUsSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFTSxJQUFJLENBQUNDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO0lBQ2hFLElBQUksQ0FBQ0wsR0FBRyxDQUFDTSxTQUFTLEdBQUcsSUFBSSxDQUFDUCxLQUFLO0lBQy9CLElBQUksQ0FBQ0MsR0FBRyxDQUFDTyxJQUFJLENBQUMsQ0FBQztFQUNuQjtBQUdKO0FBRUEsK0RBQWViLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzLCBjb2xvciwgY3R4KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiXSwibmFtZXMiOlsiUGxheWVyIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInJhZGl1cyIsImNvbG9yIiwiY3R4IiwiZHJhdyIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;