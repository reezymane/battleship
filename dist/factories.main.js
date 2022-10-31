"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["factories"],{

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "hitOrMiss": () => (/* binding */ hitOrMiss),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
// Determines if an attack hits or misses
const hitOrMiss = (inCoordinate) => {
  if (inCoordinate === 0) return "miss";

  if (inCoordinate === 1) return "alreadyHit";

  return "hit";
};

// Creates ships to place on gameboard
const ship = (length) => ({
  length,
  hitAmount: 0,
  sunk: false,
  hit() {
    this.hitAmount += 1;
  },
  isSunk() {
    if (this.hitAmount === this.length) {
      this.sunk = true;
    }
  }
});

// Creates a gameboard
const gameboard = () => ({
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  // Marks attacks on gameboard
  receiveAttack([a, b]) {
    const inCoordinate = this.board[a][b];
    const hitStatus = hitOrMiss(inCoordinate);

    if (hitStatus === "hit") {
      inCoordinate.hit();
    } else if (hitStatus === "miss") {
      this.board[a][b] = 1;
    }
  },
  // Checks if all ships are sunk
  allSunk([a, b]) {
    if (a > 9) {
      return true;
    }

    if (b < 10) {
      const inCoordinate = this.board[a][b];

      if (typeof inCoordinate !== "object") {
        return this.allSunk([a, b + 1]);
      }

      if (inCoordinate.sunk === false) {
        return false;
      }

      return this.allSunk([a, b + 1]);
    }

    if (b > 9) {
      return this.allSunk([a + 1, 0]);
    }
  }
});

// Creates a player and a gameboard for them
const player = (name) => ({
  name,
  playerBoard: gameboard()
});




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/factories.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yaWVzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIERldGVybWluZXMgaWYgYW4gYXR0YWNrIGhpdHMgb3IgbWlzc2VzXG5jb25zdCBoaXRPck1pc3MgPSAoaW5Db29yZGluYXRlKSA9PiB7XG4gIGlmIChpbkNvb3JkaW5hdGUgPT09IDApIHJldHVybiBcIm1pc3NcIjtcblxuICBpZiAoaW5Db29yZGluYXRlID09PSAxKSByZXR1cm4gXCJhbHJlYWR5SGl0XCI7XG5cbiAgcmV0dXJuIFwiaGl0XCI7XG59O1xuXG4vLyBDcmVhdGVzIHNoaXBzIHRvIHBsYWNlIG9uIGdhbWVib2FyZFxuY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0QW1vdW50OiAwLFxuICBzdW5rOiBmYWxzZSxcbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0QW1vdW50ICs9IDE7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRBbW91bnQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIENyZWF0ZXMgYSBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+ICh7XG4gIGJvYXJkOiBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gIF0sXG4gIC8vIE1hcmtzIGF0dGFja3Mgb24gZ2FtZWJvYXJkXG4gIHJlY2VpdmVBdHRhY2soW2EsIGJdKSB7XG4gICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcbiAgICBjb25zdCBoaXRTdGF0dXMgPSBoaXRPck1pc3MoaW5Db29yZGluYXRlKTtcblxuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGluQ29vcmRpbmF0ZS5oaXQoKTtcbiAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbYV1bYl0gPSAxO1xuICAgIH1cbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIGFsbCBzaGlwcyBhcmUgc3Vua1xuICBhbGxTdW5rKFthLCBiXSkge1xuICAgIGlmIChhID4gOSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGIgPCAxMCkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcblxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluQ29vcmRpbmF0ZS5zdW5rID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EsIGIgKyAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGIgPiA5KSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthICsgMSwgMF0pO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIENyZWF0ZXMgYSBwbGF5ZXIgYW5kIGEgZ2FtZWJvYXJkIGZvciB0aGVtXG5jb25zdCBwbGF5ZXIgPSAobmFtZSkgPT4gKHtcbiAgbmFtZSxcbiAgcGxheWVyQm9hcmQ6IGdhbWVib2FyZCgpXG59KTtcblxuZXhwb3J0IHsgc2hpcCwgZ2FtZWJvYXJkLCBoaXRPck1pc3MsIHBsYXllciB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9