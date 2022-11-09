"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["factories"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickAttack": () => (/* binding */ clickAttack),
/* harmony export */   "colorCoordinate": () => (/* binding */ colorCoordinate),
/* harmony export */   "createTable": () => (/* binding */ createTable)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */


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

// Colors the grid space of given coordinate
const colorCoordinate = ([a, b]) => {
  const gridCells = document.querySelectorAll(".p1Grid .cell");

  gridCells.forEach((cell) => {
    if (cell.dataset.x === `${a}` && cell.dataset.y === `${b}`) {
      cell.style.backgroundColor = "yellow";
    }
  });
};

// Checks if coordinate has been clicked already
const wasCoordinateClicked = (playerAttacking, [x, y]) => {
  for (let i = 0; i < playerAttacking.markedSpots.length; i++) {
    const spot = playerAttacking.markedSpots[i];

    if (spot[0] === x && spot[1] === y) {
      return true;
    }
  }

  return false;
};

// Determines which player goes next
const whoseTurn = (hitStatus, playerAttacking, receivingAttack) => {
  if (hitStatus === "hit") {
    _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName = playerAttacking.name;
  } else if (hitStatus === "alreadyHit") {
    _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName = playerAttacking.name;
  } else {
    _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName = receivingAttack.name;
  }
};

// Returns which player is 'Computer'
const whoIsComputer = (playerAttacking, receivingAttack) => {
  if (playerAttacking.name === "Computer") {
    return playerAttacking;
  }

  if (receivingAttack.name === "Computer") {
    return receivingAttack;
  }
};

// Chooses a random coordinate for Computer's turn
const computerClick = (playerAttacking, receivingAttack) => {
  if (_factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName === "Computer") {
    let randomX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    let randomY = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    // Sets new (randomX, randomY) if computer clicked coordinate already
    while (
      wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
        randomX,
        randomY
      ])
    ) {
      randomX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      randomY = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    }

    const coordinate = document.querySelectorAll(".p1Grid .cell");
    coordinate.forEach((cell) => {
      if (
        Number(cell.dataset.x) === randomX &&
        Number(cell.dataset.y) === randomY
      ) {
        cell.click();
      }
    });
  }
};

// Displays winner of the game
const displayWinner = (playerAttacking) => {
  console.log(playerAttacking.name);
};

// Ends game and displays winner
const playerWin = (playerAttacking, receivingAttack, controller) => {
  if (receivingAttack.playerBoard.allSunk([0, 0])) {
    controller.abort();

    displayWinner(playerAttacking);
  }
};

// Attacks gameboard and checks ships when coordinate clicked
const clickAttack = (
  playerAttacking,
  receivingAttack,
  tableClass,
  controller
) => {
  const gridSquares = document.querySelectorAll(`${tableClass} .cell`);

  gridSquares.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        if (_factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName === playerAttacking.name) {
          // Sets coordinate values based on cell data
          const x = Number(cell.dataset.x);
          const y = Number(cell.dataset.y);

          if (!wasCoordinateClicked(playerAttacking, [x, y])) {
            // Adds coordinate to array of clicked coordinates
            playerAttacking.markedSpots.push([x, y]);

            const hitStatus = receivingAttack.playerBoard.receiveAttack([x, y]);

            whoseTurn(hitStatus, playerAttacking, receivingAttack);

            playerWin(playerAttacking, receivingAttack, controller);

            computerClick(playerAttacking, receivingAttack);
          }
        }
      },
      { signal: controller.signal }
    );
  });
};




/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentTurn": () => (/* binding */ currentTurn),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */


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
      inCoordinate.isSunk();
    } else if (hitStatus === "miss") {
      this.board[a][b] = 1;
    }

    return hitStatus;
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
  },
  // Runs a function to color grid space if
  // it contains a ship
  colorGameboardShips([a, b]) {
    if (a > 9) {
      return;
    }

    if (b < 10) {
      const inCoordinate = this.board[a][b];

      if (typeof inCoordinate !== "object") {
        return this.colorGameboardShips([a, b + 1]);
      }

      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.colorCoordinate)([a, b]);

      return this.colorGameboardShips([a, b + 1]);
    }

    if (b > 9) {
      return this.colorGameboardShips([a + 1, 0]);
    }
  }
});

// Creates a player and a gameboard for them
const player = (name) => ({
  name,
  playerBoard: gameboard(),
  markedSpots: []
});

// Dynamic object to track player turns
const currentTurn = {
  playerName: null
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/factories.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yaWVzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDOztBQUUxQztBQUNBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxXQUFXOztBQUVyRCxxQkFBcUIsV0FBVztBQUNoQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLGNBQWM7QUFDeEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixFQUFFLDJCQUEyQixFQUFFO0FBQzdEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQix3Q0FBd0M7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFzQjtBQUMxQixJQUFJO0FBQ0osSUFBSSw4REFBc0I7QUFDMUIsSUFBSTtBQUNKLElBQUksOERBQXNCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw4REFBc0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELFlBQVk7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBc0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsUUFBUTtBQUNSO0FBQ0EsR0FBRztBQUNIOztBQUVxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxyRDtBQUNBO0FBQ3dDOztBQUV4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0scURBQWU7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4gfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcblxuLy8gQ3JlYXRlcyB0aGUgZmlyc3Qgcm93IG9mIHRoZSB0YWJsZSBhbmQgbmFtZXMgY29sdW1uc1xuY29uc3QgY3JlYXRlQ29sdW1uSGVhZGluZ3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBjb25zdCBlbXB0eUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICByb3cuYXBwZW5kQ2hpbGQoZW1wdHlIZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBuZXdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIG5ld0hlYWRpbmcudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgcm93LmFwcGVuZENoaWxkKG5ld0hlYWRpbmcpO1xuICB9XG59O1xuXG4vLyBBZGRzIG5leHQgcm93IHdpdGggaGVhZGluZyBhbmQgZW1wdHkgY2VsbHNcbmNvbnN0IGNyZWF0ZVJvd3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcblxuICBmb3IgKGxldCBiaWdJID0gMDsgYmlnSSA8IDEwOyBiaWdJKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBiaWdJICsgMTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBmb3IgKGxldCBsaXR0bGVJID0gMDsgbGl0dGxlSSA8IDEwOyBsaXR0bGVJKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBiaWdJKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGxpdHRsZUkpO1xuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBBZGRzIHRhYmxlIHRvIHAxQm9hcmQgZGl2XG5jb25zdCBjcmVhdGVUYWJsZSA9IChib2FyZENsYXNzLCB0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZENsYXNzKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG5cbiAgdGFibGUuY2xhc3NMaXN0LmFkZCh0YWJsZUNsYXNzKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gIGNyZWF0ZUNvbHVtbkhlYWRpbmdzKHRhYmxlQ2xhc3MpO1xuICBjcmVhdGVSb3dzKHRhYmxlQ2xhc3MpO1xufTtcblxuLy8gQ29sb3JzIHRoZSBncmlkIHNwYWNlIG9mIGdpdmVuIGNvb3JkaW5hdGVcbmNvbnN0IGNvbG9yQ29vcmRpbmF0ZSA9IChbYSwgYl0pID0+IHtcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG5cbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoY2VsbC5kYXRhc2V0LnggPT09IGAke2F9YCAmJiBjZWxsLmRhdGFzZXQueSA9PT0gYCR7Yn1gKSB7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIENoZWNrcyBpZiBjb29yZGluYXRlIGhhcyBiZWVuIGNsaWNrZWQgYWxyZWFkeVxuY29uc3Qgd2FzQ29vcmRpbmF0ZUNsaWNrZWQgPSAocGxheWVyQXR0YWNraW5nLCBbeCwgeV0pID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcG90ID0gcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzW2ldO1xuXG4gICAgaWYgKHNwb3RbMF0gPT09IHggJiYgc3BvdFsxXSA9PT0geSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gRGV0ZXJtaW5lcyB3aGljaCBwbGF5ZXIgZ29lcyBuZXh0XG5jb25zdCB3aG9zZVR1cm4gPSAoaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaykgPT4ge1xuICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHBsYXllckF0dGFja2luZy5uYW1lO1xuICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gXCJhbHJlYWR5SGl0XCIpIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyQXR0YWNraW5nLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHJlY2VpdmluZ0F0dGFjay5uYW1lO1xuICB9XG59O1xuXG4vLyBSZXR1cm5zIHdoaWNoIHBsYXllciBpcyAnQ29tcHV0ZXInXG5jb25zdCB3aG9Jc0NvbXB1dGVyID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChwbGF5ZXJBdHRhY2tpbmcubmFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgcmV0dXJuIHBsYXllckF0dGFja2luZztcbiAgfVxuXG4gIGlmIChyZWNlaXZpbmdBdHRhY2submFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgcmV0dXJuIHJlY2VpdmluZ0F0dGFjaztcbiAgfVxufTtcblxuLy8gQ2hvb3NlcyBhIHJhbmRvbSBjb29yZGluYXRlIGZvciBDb21wdXRlcidzIHR1cm5cbmNvbnN0IGNvbXB1dGVyQ2xpY2sgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICBsZXQgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG5cbiAgICAvLyBTZXRzIG5ldyAocmFuZG9tWCwgcmFuZG9tWSkgaWYgY29tcHV0ZXIgY2xpY2tlZCBjb29yZGluYXRlIGFscmVhZHlcbiAgICB3aGlsZSAoXG4gICAgICB3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgICByYW5kb21YLFxuICAgICAgICByYW5kb21ZXG4gICAgICBdKVxuICAgICkge1xuICAgICAgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgICByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB9XG5cbiAgICBjb25zdCBjb29yZGluYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG4gICAgY29vcmRpbmF0ZS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIE51bWJlcihjZWxsLmRhdGFzZXQueCkgPT09IHJhbmRvbVggJiZcbiAgICAgICAgTnVtYmVyKGNlbGwuZGF0YXNldC55KSA9PT0gcmFuZG9tWVxuICAgICAgKSB7XG4gICAgICAgIGNlbGwuY2xpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLy8gRGlzcGxheXMgd2lubmVyIG9mIHRoZSBnYW1lXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllckF0dGFja2luZykgPT4ge1xuICBjb25zb2xlLmxvZyhwbGF5ZXJBdHRhY2tpbmcubmFtZSk7XG59O1xuXG4vLyBFbmRzIGdhbWUgYW5kIGRpc3BsYXlzIHdpbm5lclxuY29uc3QgcGxheWVyV2luID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBjb250cm9sbGVyKSA9PiB7XG4gIGlmIChyZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQuYWxsU3VuayhbMCwgMF0pKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuXG4gICAgZGlzcGxheVdpbm5lcihwbGF5ZXJBdHRhY2tpbmcpO1xuICB9XG59O1xuXG4vLyBBdHRhY2tzIGdhbWVib2FyZCBhbmQgY2hlY2tzIHNoaXBzIHdoZW4gY29vcmRpbmF0ZSBjbGlja2VkXG5jb25zdCBjbGlja0F0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIHRhYmxlQ2xhc3MsXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFibGVDbGFzc30gLmNlbGxgKTtcblxuICBncmlkU3F1YXJlcy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR1cm4ucGxheWVyTmFtZSA9PT0gcGxheWVyQXR0YWNraW5nLm5hbWUpIHtcbiAgICAgICAgICAvLyBTZXRzIGNvb3JkaW5hdGUgdmFsdWVzIGJhc2VkIG9uIGNlbGwgZGF0YVxuICAgICAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5kYXRhc2V0LngpO1xuICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpO1xuXG4gICAgICAgICAgaWYgKCF3YXNDb29yZGluYXRlQ2xpY2tlZChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkpIHtcbiAgICAgICAgICAgIC8vIEFkZHMgY29vcmRpbmF0ZSB0byBhcnJheSBvZiBjbGlja2VkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHMucHVzaChbeCwgeV0pO1xuXG4gICAgICAgICAgICBjb25zdCBoaXRTdGF0dXMgPSByZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xuXG4gICAgICAgICAgICB3aG9zZVR1cm4oaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayk7XG5cbiAgICAgICAgICAgIHBsYXllcldpbihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgY29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIGNvbXB1dGVyQ2xpY2socGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBjcmVhdGVUYWJsZSwgY29sb3JDb29yZGluYXRlLCBjbGlja0F0dGFjayB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IHsgY29sb3JDb29yZGluYXRlIH0gZnJvbSBcIi4vZG9tXCI7XG5cbi8vIERldGVybWluZXMgaWYgYW4gYXR0YWNrIGhpdHMgb3IgbWlzc2VzXG5jb25zdCBoaXRPck1pc3MgPSAoaW5Db29yZGluYXRlKSA9PiB7XG4gIGlmIChpbkNvb3JkaW5hdGUgPT09IDApIHJldHVybiBcIm1pc3NcIjtcblxuICBpZiAoaW5Db29yZGluYXRlID09PSAxKSByZXR1cm4gXCJhbHJlYWR5SGl0XCI7XG5cbiAgcmV0dXJuIFwiaGl0XCI7XG59O1xuXG4vLyBDcmVhdGVzIHNoaXBzIHRvIHBsYWNlIG9uIGdhbWVib2FyZFxuY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0QW1vdW50OiAwLFxuICBzdW5rOiBmYWxzZSxcbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0QW1vdW50ICs9IDE7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRBbW91bnQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIENyZWF0ZXMgYSBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+ICh7XG4gIGJvYXJkOiBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gIF0sXG4gIC8vIE1hcmtzIGF0dGFja3Mgb24gZ2FtZWJvYXJkXG4gIHJlY2VpdmVBdHRhY2soW2EsIGJdKSB7XG4gICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcbiAgICBjb25zdCBoaXRTdGF0dXMgPSBoaXRPck1pc3MoaW5Db29yZGluYXRlKTtcblxuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGluQ29vcmRpbmF0ZS5oaXQoKTtcbiAgICAgIGluQ29vcmRpbmF0ZS5pc1N1bmsoKTtcbiAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbYV1bYl0gPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBoaXRTdGF0dXM7XG4gIH0sXG4gIC8vIENoZWNrcyBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgYWxsU3VuayhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChiIDwgMTApIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG5cbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbkNvb3JkaW5hdGUuc3VuayA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSArIDEsIDBdKTtcbiAgICB9XG4gIH0sXG4gIC8vIFJ1bnMgYSBmdW5jdGlvbiB0byBjb2xvciBncmlkIHNwYWNlIGlmXG4gIC8vIGl0IGNvbnRhaW5zIGEgc2hpcFxuICBjb2xvckdhbWVib2FyZFNoaXBzKFthLCBiXSkge1xuICAgIGlmIChhID4gOSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChiIDwgMTApIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG5cbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yQ29vcmRpbmF0ZShbYSwgYl0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSArIDEsIDBdKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgcGxheWVyIGFuZCBhIGdhbWVib2FyZCBmb3IgdGhlbVxuY29uc3QgcGxheWVyID0gKG5hbWUpID0+ICh7XG4gIG5hbWUsXG4gIHBsYXllckJvYXJkOiBnYW1lYm9hcmQoKSxcbiAgbWFya2VkU3BvdHM6IFtdXG59KTtcblxuLy8gRHluYW1pYyBvYmplY3QgdG8gdHJhY2sgcGxheWVyIHR1cm5zXG5jb25zdCBjdXJyZW50VHVybiA9IHtcbiAgcGxheWVyTmFtZTogbnVsbFxufTtcblxuZXhwb3J0IHsgc2hpcCwgcGxheWVyLCBjdXJyZW50VHVybiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9