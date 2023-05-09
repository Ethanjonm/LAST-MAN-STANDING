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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/player */ \"./src/scripts/player.js\");\n/* harmony import */ var _scripts_laser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/laser */ \"./src/scripts/laser.js\");\n/* harmony import */ var _scripts_zombie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/zombie */ \"./src/scripts/zombie.js\");\n// import Example from './scripts/example';\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"Hello World\");\n\n//     const main = document.getElementById('main');\n//     new Example(main)\n\n// })\n// //npm run watch\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  canvas.width = 800;\n  canvas.height = 800;\n  canvas.style.background = \"#00BFFF\";\n  const x = canvas.width / 2;\n  const y = canvas.height / 2;\n  const player = new _scripts_player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y, 15, [0, 0], \"Red\", ctx);\n  const laser = new _scripts_laser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](player.x, player.y, 5, \"Black\", [1, 1], ctx);\n  const lasers = [];\n  const zombies = [];\n  let animationId = 0;\n  function animate() {\n    animationId = requestAnimationFrame(animate);\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    // player.draw();\n    player.update();\n    lasers.forEach((laser, index) => {\n      laser.update();\n      // remove from edges of screen\n      if (laser.x + laser.radius < 0 || laser.x - laser.radius > canvas.width || laser.y + laser.radius < 0 || laser.y - laser.radius > canvas.height) {\n        setTimeout(() => {\n          lasers.splice(index, 1);\n        }, 0);\n      }\n    });\n    zombies.forEach((zombie, index) => {\n      zombie.update();\n      if (zombie.x + zombie.radius < 0 || zombie.x - zombie.radius > canvas.width || zombie.y + zombie.radius < 0 || zombie.y - zombie.radius > canvas.height) {\n        setTimeout(() => {\n          zombies.splice(index, 1);\n        }, 0);\n      }\n      const distP = Math.hypot(player.x - zombie.x, player.y - zombie.y);\n      if (distP - zombie.radius - player.radius < 1) {\n        cancelAnimationFrame(animationId); //end game\n      }\n\n      lasers.forEach((laser, laserIdx) => {\n        const distL = Math.hypot(laser.x - zombie.x, laser.y - zombie.y);\n        if (distL - zombie.radius - laser.radius < 1) {\n          setTimeout(() => {\n            zombies.splice(index, 1);\n            lasers.splice(laserIdx, 1);\n          }, 0);\n        }\n      });\n    });\n  }\n  addEventListener(\"click\", event => {\n    // console.log(lasers)\n    const angle = Math.atan2(event.clientY - player.y, event.clientX - player.x);\n    const velocity = [Math.cos(angle), Math.sin(angle)];\n    lasers.push(new _scripts_laser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](player.x, player.y, 5, \"Black\", velocity, ctx));\n  });\n  addEventListener(\"keydown\", _ref => {\n    let {\n      key\n    } = _ref;\n    switch (key) {\n      case 'w':\n        player.velocity[1] = -5;\n        break;\n      case 'a':\n        player.velocity[0] = -5;\n        break;\n      case 's':\n        player.velocity[1] = 5;\n        break;\n      case 'd':\n        player.velocity[0] = 5;\n        break;\n    }\n    // console.log(player.velocity)\n  });\n\n  addEventListener(\"keyup\", _ref2 => {\n    let {\n      key\n    } = _ref2;\n    switch (key) {\n      case 'w':\n        player.velocity[1] = 0;\n        break;\n      case 'a':\n        player.velocity[0] = 0;\n        break;\n      case 's':\n        player.velocity[1] = 0;\n        break;\n      case 'd':\n        player.velocity[0] = 0;\n        break;\n    }\n    // console.log(player.velocity)\n  });\n\n  function spawnZombie() {\n    setInterval(() => {\n      const radius = 25;\n      let x = 0;\n      let y = 0;\n      if (Math.random() < 0.5) {\n        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;\n        y = Math.random() * canvas.height;\n      } else {\n        x = Math.random() * canvas.width;\n        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;\n      }\n      // x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius\n      // y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius\n      const color = \"green\";\n      const angle = Math.atan2(player.y - y, player.x - x);\n      const velocity = [Math.cos(angle), Math.sin(angle)];\n      zombies.push(new _scripts_zombie__WEBPACK_IMPORTED_MODULE_2__[\"default\"](x, y, radius, color, velocity, ctx));\n      // console.log(zombies.length)\n    }, 1000);\n  }\n  animate();\n  spawnZombie();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JCLE1BQU1kLEtBQUssR0FBR04sSUFBSSxDQUFDTyxLQUFLLENBQUN2QixNQUFNLENBQUNELENBQUMsR0FBR0EsQ0FBQyxFQUFFQyxNQUFNLENBQUNGLENBQUMsR0FBR0EsQ0FBQyxDQUFDO01BQ3BELE1BQU00QixRQUFRLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDVyxHQUFHLENBQUNMLEtBQUssQ0FBQyxFQUFFTixJQUFJLENBQUNZLEdBQUcsQ0FBQ04sS0FBSyxDQUFDLENBQUM7TUFDbkRuQixPQUFPLENBQUMwQixJQUFJLENBQUMsSUFBSTFDLHVEQUFNLENBQUNXLENBQUMsRUFBRUMsQ0FBQyxFQUFFWSxNQUFNLEVBQUV5QixLQUFLLEVBQUVWLFFBQVEsRUFBRWxDLEdBQUcsQ0FBQyxDQUFDO01BQzVEO0lBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNaO0VBRUFhLE9BQU8sQ0FBQyxDQUFDO0VBQ1Q0QixXQUFXLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3AvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tICcuL3NjcmlwdHMvZXhhbXBsZSc7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkhlbGxvIFdvcmxkXCIpO1xuXG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4vLyAgICAgbmV3IEV4YW1wbGUobWFpbilcblxuLy8gfSlcbi8vIC8vbnBtIHJ1biB3YXRjaFxuXG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vc2NyaXB0cy9wbGF5ZXJcIlxuaW1wb3J0IExhc2VyIGZyb20gXCIuL3NjcmlwdHMvbGFzZXJcIlxuaW1wb3J0IFpvbWJpZSBmcm9tIFwiLi9zY3JpcHRzL3pvbWJpZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjYW52YXMud2lkdGggPSA4MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDgwMDtcbiAgICAgICAgXG4gICAgY2FudmFzLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwMEJGRkZcIjtcblxuICAgIGNvbnN0IHggPSBjYW52YXMud2lkdGggLyAyO1xuICAgIGNvbnN0IHkgPSBjYW52YXMuaGVpZ2h0IC8gMjtcblxuICAgIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoeCwgeSwgMTUsWzAsMF0sIFwiUmVkXCIsIGN0eCk7XG5cblxuICAgIGNvbnN0IGxhc2VyID0gbmV3IExhc2VyKFxuICAgICAgICBwbGF5ZXIueCwgXG4gICAgICAgIHBsYXllci55LCBcbiAgICAgICAgNSwgXG4gICAgICAgIFwiQmxhY2tcIiwgXG4gICAgICAgIFsxLDFdLCBcbiAgICAgICAgY3R4KVxuXG4gICAgY29uc3QgbGFzZXJzID0gW107XG4gICAgY29uc3Qgem9tYmllcyA9IFtdO1xuICAgIGxldCBhbmltYXRpb25JZCA9IDA7XG4gICAgXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgYW5pbWF0aW9uSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIC8vIHBsYXllci5kcmF3KCk7XG4gICAgICAgIHBsYXllci51cGRhdGUoKVxuICAgICAgICBsYXNlcnMuZm9yRWFjaCgobGFzZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsYXNlci51cGRhdGUoKVxuICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gZWRnZXMgb2Ygc2NyZWVuXG4gICAgICAgICAgICBpZiAobGFzZXIueCArIGxhc2VyLnJhZGl1cyA8IDAgfHwgXG4gICAgICAgICAgICAgICAgbGFzZXIueCAtIGxhc2VyLnJhZGl1cyA+IGNhbnZhcy53aWR0aCB8fFxuICAgICAgICAgICAgICAgIGxhc2VyLnkgKyBsYXNlci5yYWRpdXMgPCAwIHx8XG4gICAgICAgICAgICAgICAgbGFzZXIueSAtIGxhc2VyLnJhZGl1cyA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGFzZXJzLnNwbGljZShpbmRleCwgMSkgXG4gICAgICAgICAgICAgICAgICAgIH0sIDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHpvbWJpZXMuZm9yRWFjaCgoem9tYmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgem9tYmllLnVwZGF0ZSgpXG5cbiAgICAgICAgICAgIGlmICh6b21iaWUueCArIHpvbWJpZS5yYWRpdXMgPCAwIHx8IFxuICAgICAgICAgICAgICAgIHpvbWJpZS54IC0gem9tYmllLnJhZGl1cyA+IGNhbnZhcy53aWR0aCB8fFxuICAgICAgICAgICAgICAgIHpvbWJpZS55ICsgem9tYmllLnJhZGl1cyA8IDAgfHxcbiAgICAgICAgICAgICAgICB6b21iaWUueSAtIHpvbWJpZS5yYWRpdXMgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHpvbWJpZXMuc3BsaWNlKGluZGV4LCAxKSBcbiAgICAgICAgICAgICAgICAgICAgfSwgMClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGlzdFAgPSBNYXRoLmh5cG90KHBsYXllci54IC0gem9tYmllLngsIHBsYXllci55IC0gem9tYmllLnkpXG5cblxuICAgICAgICAgICAgaWYgKGRpc3RQIC0gem9tYmllLnJhZGl1cyAtIHBsYXllci5yYWRpdXMgPCAxKSB7XG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uSWQpIC8vZW5kIGdhbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGxhc2Vycy5mb3JFYWNoKChsYXNlciwgbGFzZXJJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0TCA9IE1hdGguaHlwb3QobGFzZXIueCAtIHpvbWJpZS54LCBsYXNlci55IC0gem9tYmllLnkpXG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzdEwgLSB6b21iaWUucmFkaXVzIC0gbGFzZXIucmFkaXVzIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgem9tYmllcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICAgICAgICAgIGxhc2Vycy5zcGxpY2UobGFzZXJJZHgsIDEpIFxuICAgICAgICAgICAgICAgICAgICB9LCAwKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cobGFzZXJzKVxuICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoZXZlbnQuY2xpZW50WSAtIHBsYXllci55LCBldmVudC5jbGllbnRYIC0gcGxheWVyLngpO1xuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IFtNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKV07XG5cbiAgICAgICAgbGFzZXJzLnB1c2gobmV3IExhc2VyKHBsYXllci54LHBsYXllci55LCA1LCBcIkJsYWNrXCIsIHZlbG9jaXR5LGN0eCkpO1xuICAgIH0pXG5cbiAgICBhZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoeyBrZXkgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5WzFdID0gLTVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnYSc6XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5WzBdID0gLTVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5WzFdID0gNVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHlbMF0gPSA1XG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIudmVsb2NpdHkpXG4gICAgfSlcblxuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoeyBrZXkgfSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAndyc6XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5WzFdID0gMFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlICdhJzpcbiAgICAgICAgICAgICAgICBwbGF5ZXIudmVsb2NpdHlbMF0gPSAwXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgIHBsYXllci52ZWxvY2l0eVsxXSA9IDBcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgcGxheWVyLnZlbG9jaXR5WzBdID0gMFxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2cocGxheWVyLnZlbG9jaXR5KVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzcGF3blpvbWJpZSgpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gMjVcbiAgICAgICAgICAgIGxldCB4ID0gMFxuICAgICAgICAgICAgbGV0IHkgPSAwXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuNSkge1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gMCAtIHJhZGl1cyA6IGNhbnZhcy53aWR0aCArIHJhZGl1cztcbiAgICAgICAgICAgICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xuICAgICAgICAgICAgICAgIHkgPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gMCAtIHJhZGl1cyA6IGNhbnZhcy5oZWlnaHQgKyByYWRpdXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHggPSBNYXRoLnJhbmRvbSgpIDwgMC41ID8gMCAtIHJhZGl1cyA6IGNhbnZhcy53aWR0aCArIHJhZGl1c1xuICAgICAgICAgICAgLy8geSA9IE1hdGgucmFuZG9tKCkgPCAwLjUgPyAwIC0gcmFkaXVzIDogY2FudmFzLmhlaWdodCArIHJhZGl1c1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMihwbGF5ZXIueSAtIHksIHBsYXllci54IC0geCk7XG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IFtNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKV07XG4gICAgICAgICAgICB6b21iaWVzLnB1c2gobmV3IFpvbWJpZSh4LCB5LCByYWRpdXMsIGNvbG9yLCB2ZWxvY2l0eSwgY3R4KSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHpvbWJpZXMubGVuZ3RoKVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cbiAgICBcbiAgICBhbmltYXRlKCk7XG4gICAgc3Bhd25ab21iaWUoKTtcbn0pICBcblxuIl0sIm5hbWVzIjpbIlBsYXllciIsIkxhc2VyIiwiWm9tYmllIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJ4IiwieSIsInBsYXllciIsImxhc2VyIiwibGFzZXJzIiwiem9tYmllcyIsImFuaW1hdGlvbklkIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsInVwZGF0ZSIsImZvckVhY2giLCJpbmRleCIsInJhZGl1cyIsInNldFRpbWVvdXQiLCJzcGxpY2UiLCJ6b21iaWUiLCJkaXN0UCIsIk1hdGgiLCJoeXBvdCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibGFzZXJJZHgiLCJkaXN0TCIsImV2ZW50IiwiYW5nbGUiLCJhdGFuMiIsImNsaWVudFkiLCJjbGllbnRYIiwidmVsb2NpdHkiLCJjb3MiLCJzaW4iLCJwdXNoIiwiX3JlZiIsImtleSIsIl9yZWYyIiwic3Bhd25ab21iaWUiLCJzZXRJbnRlcnZhbCIsInJhbmRvbSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nclass Player {\n  constructor(x, y, radius, velocity, color, ctx) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n    this.velocity = velocity;\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n  }\n  update() {\n    this.draw();\n    this.x += this.velocity[0];\n    this.y += this.velocity[1];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsTUFBTSxFQUFDQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFFO0lBQzNDLElBQUksQ0FBQ0wsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNFLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNELFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNFLEdBQUcsR0FBR0EsR0FBRztFQUNsQjtFQUVBQyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNSLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUVPLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDaEUsSUFBSSxDQUFDTCxHQUFHLENBQUNNLFNBQVMsR0FBRyxJQUFJLENBQUNQLEtBQUs7SUFDL0IsSUFBSSxDQUFDQyxHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ1AsSUFBSSxDQUFDLENBQUM7SUFDWCxJQUFJLENBQUNOLENBQUMsSUFBSSxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDRixDQUFDLElBQUksSUFBSSxDQUFDRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0VBQzlCO0FBR0o7QUFFQSwrREFBZUwsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcC8uL3NyYy9zY3JpcHRzL3BsYXllci5qcz82NDcxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCByYWRpdXMsdmVsb2NpdHksIGNvbG9yLCBjdHgpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICB0aGlzLnggKz0gdGhpcy52ZWxvY2l0eVswXVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eVsxXVxuICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7Il0sIm5hbWVzIjpbIlBsYXllciIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJyYWRpdXMiLCJ2ZWxvY2l0eSIsImNvbG9yIiwiY3R4IiwiZHJhdyIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/zombie.js":
/*!*******************************!*\
  !*** ./src/scripts/zombie.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Zombie {\n  constructor(x, y, radius, color, speed, ctx) {\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.color = color;\n    this.speed = speed;\n    this.ctx = ctx;\n  }\n  draw() {\n    this.ctx.beginPath();\n    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fill();\n  }\n  update() {\n    this.draw();\n    this.x = this.x + this.speed[0];\n    this.y = this.y + this.speed[1];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Zombie);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy96b21iaWUuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLE1BQU0sQ0FBQztFQUNUQyxXQUFXQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsR0FBRyxFQUFFO0lBQ3pDLElBQUksQ0FBQ0wsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLEdBQUcsR0FBR0EsR0FBRztFQUNsQjtFQUVBQyxJQUFJQSxDQUFBLEVBQUc7SUFDSCxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDRixHQUFHLENBQUNHLEdBQUcsQ0FBQyxJQUFJLENBQUNSLENBQUMsRUFBRSxJQUFJLENBQUNDLENBQUMsRUFBRSxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDLEVBQUVPLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUM7SUFDaEUsSUFBSSxDQUFDTCxHQUFHLENBQUNNLFNBQVMsR0FBRyxJQUFJLENBQUNSLEtBQUs7SUFDL0IsSUFBSSxDQUFDRSxHQUFHLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ25CO0VBRUFDLE1BQU1BLENBQUEsRUFBRztJQUNMLElBQUksQ0FBQ1AsSUFBSSxDQUFDLENBQUM7SUFDWCxJQUFJLENBQUNOLENBQUMsR0FBRyxJQUFJLENBQUNBLENBQUMsR0FBRyxJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0IsSUFBSSxDQUFDSCxDQUFDLEdBQUcsSUFBSSxDQUFDQSxDQUFDLEdBQUcsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ25DO0FBRUo7QUFHQSwrREFBZU4sTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcC8uL3NyYy9zY3JpcHRzL3pvbWJpZS5qcz9jZDdjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFpvbWJpZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSwgcmFkaXVzLCBjb2xvciwgc3BlZWQsIGN0eCkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmRyYXcoKVxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnNwZWVkWzBdXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMuc3BlZWRbMV1cbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBab21iaWU7Il0sIm5hbWVzIjpbIlpvbWJpZSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJyYWRpdXMiLCJjb2xvciIsInNwZWVkIiwiY3R4IiwiZHJhdyIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJ1cGRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/zombie.js\n");

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