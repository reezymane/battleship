"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["dom"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorShips": () => (/* binding */ colorShips),
/* harmony export */   "createTable": () => (/* binding */ createTable)
/* harmony export */ });
// Creates the first row of the table and names columns
const createColumnHeadings = (tableClass) => {
  const grid = document.querySelector(`.${tableClass}`);
  const row = document.createElement("tr");
  const emptyHeading = document.createElement("th");

  grid.appendChild(row);
  row.appendChild(emptyHeading);

  for (let i = 0; i < 10; i++) {
    const newHeading = document.createElement("th");
    newHeading.textContent = String.fromCharCode(65 + i);
    row.appendChild(newHeading);
  }
};

// Adds next row with heading and empty cells
const createRows = (tableClass) => {
  const grid = document.querySelector(`.${tableClass}`);

  for (let bigI = 0; bigI < 10; bigI++) {
    const row = document.createElement("tr");
    const heading = document.createElement("th");

    heading.textContent = bigI + 1;

    grid.appendChild(row);
    row.appendChild(heading);

    for (let littleI = 0; littleI < 10; littleI++) {
      const cell = document.createElement("td");

      cell.classList.add("cell");
      cell.setAttribute("data-x", bigI);
      cell.setAttribute("data-y", littleI);

      row.appendChild(cell);
    }
  }
};

// Adds table to p1Board div
const createTable = (boardClass, tableClass) => {
  const board = document.querySelector(boardClass);
  const table = document.createElement("table");

  table.classList.add(tableClass);
  board.appendChild(table);

  createColumnHeadings(tableClass);
  createRows(tableClass);
};

// Colors gameboard squares that hold ships
const colorShips = ([a, b], player) => {
  if (a > 9) {
    return;
  }

  if (b < 10) {
    const inCoordinate = player.playerBoard[a][b];

    if (typeof inCoordinate !== "object") {
      return colorShips([a, b + 1]);
    }

    const square = document.querySelectorAll(".p1Grid .cell");
    square.forEach((element) => {
      if (element.dataset.x === a && element.dataset.y === b) {
        element.style.backgroundColor = "red";
      }
    });

    return colorShips([a, b + 1]);
  }

  if (b > 9) {
    return colorShips([a + 1, 0]);
  }
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxXQUFXOztBQUVyRCxxQkFBcUIsV0FBVztBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLGNBQWM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVzIHRoZSBmaXJzdCByb3cgb2YgdGhlIHRhYmxlIGFuZCBuYW1lcyBjb2x1bW5zXG5jb25zdCBjcmVhdGVDb2x1bW5IZWFkaW5ncyA9ICh0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzfWApO1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IGVtcHR5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gIHJvdy5hcHBlbmRDaGlsZChlbXB0eUhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgbmV3SGVhZGluZy50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobmV3SGVhZGluZyk7XG4gIH1cbn07XG5cbi8vIEFkZHMgbmV4dCByb3cgd2l0aCBoZWFkaW5nIGFuZCBlbXB0eSBjZWxsc1xuY29uc3QgY3JlYXRlUm93cyA9ICh0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzfWApO1xuXG4gIGZvciAobGV0IGJpZ0kgPSAwOyBiaWdJIDwgMTA7IGJpZ0krKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGJpZ0kgKyAxO1xuXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGZvciAobGV0IGxpdHRsZUkgPSAwOyBsaXR0bGVJIDwgMTA7IGxpdHRsZUkrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGJpZ0kpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgbGl0dGxlSSk7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEFkZHMgdGFibGUgdG8gcDFCb2FyZCBkaXZcbmNvbnN0IGNyZWF0ZVRhYmxlID0gKGJvYXJkQ2xhc3MsIHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkQ2xhc3MpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuICB0YWJsZS5jbGFzc0xpc3QuYWRkKHRhYmxlQ2xhc3MpO1xuICBib2FyZC5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgY3JlYXRlQ29sdW1uSGVhZGluZ3ModGFibGVDbGFzcyk7XG4gIGNyZWF0ZVJvd3ModGFibGVDbGFzcyk7XG59O1xuXG4vLyBDb2xvcnMgZ2FtZWJvYXJkIHNxdWFyZXMgdGhhdCBob2xkIHNoaXBzXG5jb25zdCBjb2xvclNoaXBzID0gKFthLCBiXSwgcGxheWVyKSA9PiB7XG4gIGlmIChhID4gOSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChiIDwgMTApIHtcbiAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSBwbGF5ZXIucGxheWVyQm9hcmRbYV1bYl07XG5cbiAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIGNvbG9yU2hpcHMoW2EsIGIgKyAxXSk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG4gICAgc3F1YXJlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQueCA9PT0gYSAmJiBlbGVtZW50LmRhdGFzZXQueSA9PT0gYikge1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29sb3JTaGlwcyhbYSwgYiArIDFdKTtcbiAgfVxuXG4gIGlmIChiID4gOSkge1xuICAgIHJldHVybiBjb2xvclNoaXBzKFthICsgMSwgMF0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUYWJsZSwgY29sb3JTaGlwcyB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9