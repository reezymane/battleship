"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["gameModule"],{

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clickAttack": () => (/* binding */ clickAttack),
/* harmony export */   "colorCoordinate": () => (/* binding */ colorCoordinate),
/* harmony export */   "createTable": () => (/* binding */ createTable),
/* harmony export */   "dragListener": () => (/* binding */ dragListener),
/* harmony export */   "dragOverListener": () => (/* binding */ dragOverListener),
/* harmony export */   "drop": () => (/* binding */ drop)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/gameModule.js");
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */



// Allows ships to be dragged
const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
};

// Stores ***INFO*** when drag starts
const dragListener = (shipID) => {
  const ship = document.querySelector(shipID);
  ship.addEventListener("dragstart", drag);
};

// Prevents the browser default handling of the data
const dragOver = (ev) => {
  ev.preventDefault();
};

// ***DOES ACTIONs*** when item is dropped
const drop = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  return data;
};

// Cells listen for items to be dragged over
const dragOverListener = () => {
  const gridCells = document.querySelectorAll(".p1Grid .cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
  });
};

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

// Changes cell color when attacked
const colorOnAttack = (cell, hitStatus) => {
  if (hitStatus === "miss") {
    cell.style.backgroundColor = "tan";
    cell.textContent = "•";
  }

  if (hitStatus === "hit") {
    cell.style.backgroundColor = "pink";
    cell.style.border = "1px solid red";
    cell.style.color = "red";
    cell.textContent = "X";
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

          if (!(0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.wasCoordinateClicked)(playerAttacking, [x, y])) {
            // Adds coordinate to array of clicked coordinates
            playerAttacking.markedSpots.push([x, y]);

            const hitStatus = receivingAttack.playerBoard.receiveAttack([x, y]);

            colorOnAttack(cell, hitStatus);

            (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.whoseTurn)(hitStatus, playerAttacking, receivingAttack);

            (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.playerWin)(playerAttacking, receivingAttack, controller);

            (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.computerClick)(playerAttacking, receivingAttack, [x, y], hitStatus);
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
/* harmony export */   "gameboard": () => (/* binding */ gameboard),
/* harmony export */   "hitOrMiss": () => (/* binding */ hitOrMiss),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* eslint-disable no-plusplus */
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
  },
  // Checks if there are enough spaces right/left/down/up for a ship
  enoughSpaces(xCoord, yCoord, shipLength, direction) {
    // If coordinate is off the board, return false
    if (xCoord < 10 && xCoord > -1 && yCoord < 10 && yCoord > -1) {
      const inCoordinate = this.board[xCoord][yCoord];

      // If a ship is already in coordinate, return false
      if (typeof inCoordinate === "object") {
        return false;
      }

      // If full length of ship is reached, return true
      if (shipLength === 1) {
        return true;
      }

      // Check next coordinate in given direction
      if (direction === "right") {
        return this.enoughSpaces(xCoord, yCoord + 1, shipLength - 1, direction);
      }

      if (direction === "left") {
        return this.enoughSpaces(xCoord, yCoord - 1, shipLength - 1, direction);
      }

      if (direction === "down") {
        return this.enoughSpaces(xCoord + 1, yCoord, shipLength - 1, direction);
      }

      if (direction === "up") {
        return this.enoughSpaces(xCoord - 1, yCoord, shipLength - 1, direction);
      }
    }

    return false;
  },
  // Returns true if coordinate is undefined or empty
  spaceEmpty(xCoord, yCoord) {
    if (xCoord < 10 && xCoord > -1 && yCoord < 10 && yCoord > -1) {
      if (this.board[xCoord][yCoord] === 0) {
        return true;
      }

      return false;
    }

    return true;
  },
  // Checks if there's enough space between ships set and ships being dropped
  spaceBetween(xCoord, yCoord, shipLength, direction) {
    // Checks if surrounding coordinates are empty/undefined
    const top = this.spaceEmpty(xCoord - 1, yCoord);
    const topRight = this.spaceEmpty(xCoord - 1, yCoord + 1);
    const right = this.spaceEmpty(xCoord, yCoord + 1);
    const bottomRight = this.spaceEmpty(xCoord + 1, yCoord + 1);
    const bottom = this.spaceEmpty(xCoord + 1, yCoord);
    const bottomLeft = this.spaceEmpty(xCoord + 1, yCoord - 1);
    const left = this.spaceEmpty(xCoord, yCoord - 1);
    const topLeft = this.spaceEmpty(xCoord - 1, yCoord - 1);

    // If any surrounding coordinates aren't empty, return false
    if (
      !(
        top &&
        topRight &&
        right &&
        bottomRight &&
        bottom &&
        bottomLeft &&
        left &&
        topLeft
      )
    ) {
      return false;
    }

    if (shipLength === 0) {
      return true;
    }

    // Check next coordinate in given direction
    if (direction === "right") {
      return this.spaceBetween(xCoord, yCoord + 1, shipLength - 1, direction);
    }

    if (direction === "left") {
      return this.spaceBetween(xCoord, yCoord - 1, shipLength - 1, direction);
    }

    if (direction === "down") {
      return this.spaceBetween(xCoord + 1, yCoord, shipLength - 1, direction);
    }

    if (direction === "up") {
      return this.spaceBetween(xCoord - 1, yCoord, shipLength - 1, direction);
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




/***/ }),

/***/ "./src/gameModule.js":
/*!***************************!*\
  !*** ./src/gameModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computerClick": () => (/* binding */ computerClick),
/* harmony export */   "playerWin": () => (/* binding */ playerWin),
/* harmony export */   "shipLength": () => (/* binding */ shipLength),
/* harmony export */   "wasCoordinateClicked": () => (/* binding */ wasCoordinateClicked),
/* harmony export */   "whoseTurn": () => (/* binding */ whoseTurn)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */


// Returns ship length
const shipLength = (shipName) => {
  const battleship = /^[battleship]/;
  const destroyer = /^[destroyer]/;
  const submarine = /^[submarine]/;
  const patrolBoat = /^[patrolBoat]/;

  if (shipName.match(battleship)) {
    return 4;
  }

  if (shipName.match(destroyer)) {
    return 3;
  }

  if (shipName.match(submarine)) {
    return 2;
  }

  if (shipName.match(patrolBoat)) {
    return 1;
  }
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

// Selects correct cell to click
const correctCell = (x, y) => {
  const coordinate = document.querySelectorAll(".p1Grid .cell");
  coordinate.forEach((cell) => {
    if (Number(cell.dataset.x) === x && Number(cell.dataset.y) === y) {
      setTimeout(() => {
        cell.click();
      }, "2000");
    }
  });
};

// Sets new (randomX, randomY) if computer clicked coordinate already
const newRandomCoordinate = (
  playerAttacking,
  receivingAttack,
  randomX,
  randomY
) => {
  let x = randomX;
  let y = randomY;

  while (
    wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y
    ])
  ) {
    x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    y = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  }

  correctCell(x, y);
};

// Attacks an adjacent cell if computer previously hit
const adjacentAttack = (
  playerAttacking,
  receivingAttack,
  [x, y],
  randomX,
  randomY
) => {
  // If adjacent cell is within gameboard and hasn't been clicked
  if (
    y + 1 >= 0 &&
    y + 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y + 1
    ])
  ) {
    correctCell(x, y + 1);
  } else if (
    x - 1 >= 0 &&
    x - 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x - 1,
      y
    ])
  ) {
    correctCell(x - 1, y);
  } else if (
    y - 1 >= 0 &&
    y - 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y - 1
    ])
  ) {
    correctCell(x, y - 1);
  } else if (
    x + 1 >= 0 &&
    x + 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x + 1,
      y
    ])
  ) {
    correctCell(x + 1, y);
  } else {
    newRandomCoordinate(playerAttacking, receivingAttack, randomX, randomY);
  }
};

// Chooses a coordinate for Computer's turn
const computerClick = (playerAttacking, receivingAttack, [x, y], hitStatus) => {
  if (_factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName === "Computer") {
    const randomX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const randomY = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    if (hitStatus === "hit") {
      adjacentAttack(
        playerAttacking,
        receivingAttack,
        [x, y],
        randomX,
        randomY
      );
    } else {
      newRandomCoordinate(playerAttacking, receivingAttack, randomX, randomY);
    }
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameModule.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZU1vZHVsZS5tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQzBDO0FBTXBCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsV0FBVztBQUNyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7O0FBRXJELHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwwQkFBMEIsY0FBYztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEVBQUUsMkJBQTJCLEVBQUU7QUFDN0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsWUFBWTs7QUFFL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhEQUFzQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUEsZUFBZSxpRUFBb0I7QUFDbkM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZQUFZLHNEQUFTOztBQUVyQixZQUFZLHNEQUFTOztBQUVyQixZQUFZLDBEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsUUFBUTtBQUNSO0FBQ0EsR0FBRztBQUNIOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZLRjtBQUNBO0FBQ0E7QUFDd0M7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxxREFBZTs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk4zRDtBQUNBO0FBQ0E7QUFDMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdDQUF3QztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQXNCO0FBQzFCLElBQUk7QUFDSixJQUFJLDhEQUFzQjtBQUMxQixJQUFJO0FBQ0osSUFBSSw4REFBc0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDhEQUFzQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQVFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjdXJyZW50VHVybiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHtcbiAgd2FzQ29vcmRpbmF0ZUNsaWNrZWQsXG4gIHdob3NlVHVybixcbiAgcGxheWVyV2luLFxuICBjb21wdXRlckNsaWNrXG59IGZyb20gXCIuL2dhbWVNb2R1bGVcIjtcblxuLy8gQWxsb3dzIHNoaXBzIHRvIGJlIGRyYWdnZWRcbmNvbnN0IGRyYWcgPSAoZXYpID0+IHtcbiAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG59O1xuXG4vLyBTdG9yZXMgKioqSU5GTyoqKiB3aGVuIGRyYWcgc3RhcnRzXG5jb25zdCBkcmFnTGlzdGVuZXIgPSAoc2hpcElEKSA9PiB7XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNoaXBJRCk7XG4gIHNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdzdGFydFwiLCBkcmFnKTtcbn07XG5cbi8vIFByZXZlbnRzIHRoZSBicm93c2VyIGRlZmF1bHQgaGFuZGxpbmcgb2YgdGhlIGRhdGFcbmNvbnN0IGRyYWdPdmVyID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vLyAqKipET0VTIEFDVElPTnMqKiogd2hlbiBpdGVtIGlzIGRyb3BwZWRcbmNvbnN0IGRyb3AgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG4vLyBDZWxscyBsaXN0ZW4gZm9yIGl0ZW1zIHRvIGJlIGRyYWdnZWQgb3ZlclxuY29uc3QgZHJhZ092ZXJMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG4gIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgZHJhZ092ZXIpO1xuICB9KTtcbn07XG5cbi8vIENyZWF0ZXMgdGhlIGZpcnN0IHJvdyBvZiB0aGUgdGFibGUgYW5kIG5hbWVzIGNvbHVtbnNcbmNvbnN0IGNyZWF0ZUNvbHVtbkhlYWRpbmdzID0gKHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3N9YCk7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgZW1wdHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgcm93LmFwcGVuZENoaWxkKGVtcHR5SGVhZGluZyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgbmV3SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICBuZXdIZWFkaW5nLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChuZXdIZWFkaW5nKTtcbiAgfVxufTtcblxuLy8gQWRkcyBuZXh0IHJvdyB3aXRoIGhlYWRpbmcgYW5kIGVtcHR5IGNlbGxzXG5jb25zdCBjcmVhdGVSb3dzID0gKHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3N9YCk7XG5cbiAgZm9yIChsZXQgYmlnSSA9IDA7IGJpZ0kgPCAxMDsgYmlnSSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYmlnSSArIDE7XG5cbiAgICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgcm93LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgZm9yIChsZXQgbGl0dGxlSSA9IDA7IGxpdHRsZUkgPCAxMDsgbGl0dGxlSSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYmlnSSk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBsaXR0bGVJKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gQWRkcyB0YWJsZSB0byBwMUJvYXJkIGRpdlxuY29uc3QgY3JlYXRlVGFibGUgPSAoYm9hcmRDbGFzcywgdGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm9hcmRDbGFzcyk7XG4gIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xuXG4gIHRhYmxlLmNsYXNzTGlzdC5hZGQodGFibGVDbGFzcyk7XG4gIGJvYXJkLmFwcGVuZENoaWxkKHRhYmxlKTtcblxuICBjcmVhdGVDb2x1bW5IZWFkaW5ncyh0YWJsZUNsYXNzKTtcbiAgY3JlYXRlUm93cyh0YWJsZUNsYXNzKTtcbn07XG5cbi8vIENvbG9ycyB0aGUgZ3JpZCBzcGFjZSBvZiBnaXZlbiBjb29yZGluYXRlXG5jb25zdCBjb2xvckNvb3JkaW5hdGUgPSAoW2EsIGJdKSA9PiB7XG4gIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDFHcmlkIC5jZWxsXCIpO1xuXG4gIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKGNlbGwuZGF0YXNldC54ID09PSBgJHthfWAgJiYgY2VsbC5kYXRhc2V0LnkgPT09IGAke2J9YCkge1xuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBDaGFuZ2VzIGNlbGwgY29sb3Igd2hlbiBhdHRhY2tlZFxuY29uc3QgY29sb3JPbkF0dGFjayA9IChjZWxsLCBoaXRTdGF0dXMpID0+IHtcbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidGFuXCI7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IFwi4oCiXCI7XG4gIH1cblxuICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIjtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuICAgIGNlbGwuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgfVxufTtcblxuLy8gQXR0YWNrcyBnYW1lYm9hcmQgYW5kIGNoZWNrcyBzaGlwcyB3aGVuIGNvb3JkaW5hdGUgY2xpY2tlZFxuY29uc3QgY2xpY2tBdHRhY2sgPSAoXG4gIHBsYXllckF0dGFja2luZyxcbiAgcmVjZWl2aW5nQXR0YWNrLFxuICB0YWJsZUNsYXNzLFxuICBjb250cm9sbGVyXG4pID0+IHtcbiAgY29uc3QgZ3JpZFNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAke3RhYmxlQ2xhc3N9IC5jZWxsYCk7XG5cbiAgZ3JpZFNxdWFyZXMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IHBsYXllckF0dGFja2luZy5uYW1lKSB7XG4gICAgICAgICAgLy8gU2V0cyBjb29yZGluYXRlIHZhbHVlcyBiYXNlZCBvbiBjZWxsIGRhdGFcbiAgICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGNlbGwuZGF0YXNldC54KTtcbiAgICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZGF0YXNldC55KTtcblxuICAgICAgICAgIGlmICghd2FzQ29vcmRpbmF0ZUNsaWNrZWQocGxheWVyQXR0YWNraW5nLCBbeCwgeV0pKSB7XG4gICAgICAgICAgICAvLyBBZGRzIGNvb3JkaW5hdGUgdG8gYXJyYXkgb2YgY2xpY2tlZCBjb29yZGluYXRlc1xuICAgICAgICAgICAgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLnB1c2goW3gsIHldKTtcblxuICAgICAgICAgICAgY29uc3QgaGl0U3RhdHVzID0gcmVjZWl2aW5nQXR0YWNrLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcblxuICAgICAgICAgICAgY29sb3JPbkF0dGFjayhjZWxsLCBoaXRTdGF0dXMpO1xuXG4gICAgICAgICAgICB3aG9zZVR1cm4oaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayk7XG5cbiAgICAgICAgICAgIHBsYXllcldpbihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgY29udHJvbGxlcik7XG5cbiAgICAgICAgICAgIGNvbXB1dGVyQ2xpY2socGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIFt4LCB5XSwgaGl0U3RhdHVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IHNpZ25hbDogY29udHJvbGxlci5zaWduYWwgfVxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVGFibGUsXG4gIGNvbG9yQ29vcmRpbmF0ZSxcbiAgY2xpY2tBdHRhY2ssXG4gIGRyYWdMaXN0ZW5lcixcbiAgZHJvcCxcbiAgZHJhZ092ZXJMaXN0ZW5lclxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5pbXBvcnQgeyBjb2xvckNvb3JkaW5hdGUgfSBmcm9tIFwiLi9kb21cIjtcblxuLy8gRGV0ZXJtaW5lcyBpZiBhbiBhdHRhY2sgaGl0cyBvciBtaXNzZXNcbmNvbnN0IGhpdE9yTWlzcyA9IChpbkNvb3JkaW5hdGUpID0+IHtcbiAgaWYgKGluQ29vcmRpbmF0ZSA9PT0gMCkgcmV0dXJuIFwibWlzc1wiO1xuXG4gIGlmIChpbkNvb3JkaW5hdGUgPT09IDEpIHJldHVybiBcImFscmVhZHlIaXRcIjtcblxuICByZXR1cm4gXCJoaXRcIjtcbn07XG5cbi8vIENyZWF0ZXMgc2hpcHMgdG8gcGxhY2Ugb24gZ2FtZWJvYXJkXG5jb25zdCBzaGlwID0gKGxlbmd0aCkgPT4gKHtcbiAgbGVuZ3RoLFxuICBoaXRBbW91bnQ6IDAsXG4gIHN1bms6IGZhbHNlLFxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRBbW91bnQgKz0gMTtcbiAgfSxcbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdEFtb3VudCA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICB9XG59KTtcblxuLy8gQ3JlYXRlcyBhIGdhbWVib2FyZFxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4gKHtcbiAgYm9hcmQ6IFtcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF1cbiAgXSxcbiAgLy8gTWFya3MgYXR0YWNrcyBvbiBnYW1lYm9hcmRcbiAgcmVjZWl2ZUF0dGFjayhbYSwgYl0pIHtcbiAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuICAgIGNvbnN0IGhpdFN0YXR1cyA9IGhpdE9yTWlzcyhpbkNvb3JkaW5hdGUpO1xuXG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgaW5Db29yZGluYXRlLmhpdCgpO1xuICAgICAgaW5Db29yZGluYXRlLmlzU3VuaygpO1xuICAgIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSBcIm1pc3NcIikge1xuICAgICAgdGhpcy5ib2FyZFthXVtiXSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpdFN0YXR1cztcbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIGFsbCBzaGlwcyBhcmUgc3Vua1xuICBhbGxTdW5rKFthLCBiXSkge1xuICAgIGlmIChhID4gOSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGIgPCAxMCkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcblxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGluQ29vcmRpbmF0ZS5zdW5rID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EsIGIgKyAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGIgPiA5KSB7XG4gICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthICsgMSwgMF0pO1xuICAgIH1cbiAgfSxcbiAgLy8gUnVucyBhIGZ1bmN0aW9uIHRvIGNvbG9yIGdyaWQgc3BhY2UgaWZcbiAgLy8gaXQgY29udGFpbnMgYSBzaGlwXG4gIGNvbG9yR2FtZWJvYXJkU2hpcHMoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGIgPCAxMCkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcblxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYiArIDFdKTtcbiAgICAgIH1cblxuICAgICAgY29sb3JDb29yZGluYXRlKFthLCBiXSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EsIGIgKyAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGIgPiA5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthICsgMSwgMF0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIHRoZXJlIGFyZSBlbm91Z2ggc3BhY2VzIHJpZ2h0L2xlZnQvZG93bi91cCBmb3IgYSBzaGlwXG4gIGVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgLy8gSWYgY29vcmRpbmF0ZSBpcyBvZmYgdGhlIGJvYXJkLCByZXR1cm4gZmFsc2VcbiAgICBpZiAoeENvb3JkIDwgMTAgJiYgeENvb3JkID4gLTEgJiYgeUNvb3JkIDwgMTAgJiYgeUNvb3JkID4gLTEpIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbeENvb3JkXVt5Q29vcmRdO1xuXG4gICAgICAvLyBJZiBhIHNoaXAgaXMgYWxyZWFkeSBpbiBjb29yZGluYXRlLCByZXR1cm4gZmFsc2VcbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgZnVsbCBsZW5ndGggb2Ygc2hpcCBpcyByZWFjaGVkLCByZXR1cm4gdHJ1ZVxuICAgICAgaWYgKHNoaXBMZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIG5leHQgY29vcmRpbmF0ZSBpbiBnaXZlbiBkaXJlY3Rpb25cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQgKyAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkIC0gMSwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQgKyAxLCB5Q29vcmQsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCAtIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICAvLyBSZXR1cm5zIHRydWUgaWYgY29vcmRpbmF0ZSBpcyB1bmRlZmluZWQgb3IgZW1wdHlcbiAgc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCkge1xuICAgIGlmICh4Q29vcmQgPCAxMCAmJiB4Q29vcmQgPiAtMSAmJiB5Q29vcmQgPCAxMCAmJiB5Q29vcmQgPiAtMSkge1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeENvb3JkXVt5Q29vcmRdID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gIC8vIENoZWNrcyBpZiB0aGVyZSdzIGVub3VnaCBzcGFjZSBiZXR3ZWVuIHNoaXBzIHNldCBhbmQgc2hpcHMgYmVpbmcgZHJvcHBlZFxuICBzcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIC8vIENoZWNrcyBpZiBzdXJyb3VuZGluZyBjb29yZGluYXRlcyBhcmUgZW1wdHkvdW5kZWZpbmVkXG4gICAgY29uc3QgdG9wID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCAtIDEsIHlDb29yZCk7XG4gICAgY29uc3QgdG9wUmlnaHQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkICsgMSk7XG4gICAgY29uc3QgcmlnaHQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkLCB5Q29vcmQgKyAxKTtcbiAgICBjb25zdCBib3R0b21SaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQgKyAxKTtcbiAgICBjb25zdCBib3R0b20gPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkKTtcbiAgICBjb25zdCBib3R0b21MZWZ0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCAtIDEpO1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkLCB5Q29vcmQgLSAxKTtcbiAgICBjb25zdCB0b3BMZWZ0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCAtIDEsIHlDb29yZCAtIDEpO1xuXG4gICAgLy8gSWYgYW55IHN1cnJvdW5kaW5nIGNvb3JkaW5hdGVzIGFyZW4ndCBlbXB0eSwgcmV0dXJuIGZhbHNlXG4gICAgaWYgKFxuICAgICAgIShcbiAgICAgICAgdG9wICYmXG4gICAgICAgIHRvcFJpZ2h0ICYmXG4gICAgICAgIHJpZ2h0ICYmXG4gICAgICAgIGJvdHRvbVJpZ2h0ICYmXG4gICAgICAgIGJvdHRvbSAmJlxuICAgICAgICBib3R0b21MZWZ0ICYmXG4gICAgICAgIGxlZnQgJiZcbiAgICAgICAgdG9wTGVmdFxuICAgICAgKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzaGlwTGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBuZXh0IGNvb3JkaW5hdGUgaW4gZ2l2ZW4gZGlyZWN0aW9uXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQgKyAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkIC0gMSwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQgKyAxLCB5Q29vcmQsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCAtIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9XG59KTtcblxuLy8gQ3JlYXRlcyBhIHBsYXllciBhbmQgYSBnYW1lYm9hcmQgZm9yIHRoZW1cbmNvbnN0IHBsYXllciA9IChuYW1lKSA9PiAoe1xuICBuYW1lLFxuICBwbGF5ZXJCb2FyZDogZ2FtZWJvYXJkKCksXG4gIG1hcmtlZFNwb3RzOiBbXVxufSk7XG5cbi8vIER5bmFtaWMgb2JqZWN0IHRvIHRyYWNrIHBsYXllciB0dXJuc1xuY29uc3QgY3VycmVudFR1cm4gPSB7XG4gIHBsYXllck5hbWU6IG51bGxcbn07XG5cbmV4cG9ydCB7IHNoaXAsIHBsYXllciwgY3VycmVudFR1cm4sIGdhbWVib2FyZCwgaGl0T3JNaXNzIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4gfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcblxuLy8gUmV0dXJucyBzaGlwIGxlbmd0aFxuY29uc3Qgc2hpcExlbmd0aCA9IChzaGlwTmFtZSkgPT4ge1xuICBjb25zdCBiYXR0bGVzaGlwID0gL15bYmF0dGxlc2hpcF0vO1xuICBjb25zdCBkZXN0cm95ZXIgPSAvXltkZXN0cm95ZXJdLztcbiAgY29uc3Qgc3VibWFyaW5lID0gL15bc3VibWFyaW5lXS87XG4gIGNvbnN0IHBhdHJvbEJvYXQgPSAvXltwYXRyb2xCb2F0XS87XG5cbiAgaWYgKHNoaXBOYW1lLm1hdGNoKGJhdHRsZXNoaXApKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBpZiAoc2hpcE5hbWUubWF0Y2goZGVzdHJveWVyKSkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgaWYgKHNoaXBOYW1lLm1hdGNoKHN1Ym1hcmluZSkpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmIChzaGlwTmFtZS5tYXRjaChwYXRyb2xCb2F0KSkge1xuICAgIHJldHVybiAxO1xuICB9XG59O1xuXG4vLyBDaGVja3MgaWYgY29vcmRpbmF0ZSBoYXMgYmVlbiBjbGlja2VkIGFscmVhZHlcbmNvbnN0IHdhc0Nvb3JkaW5hdGVDbGlja2VkID0gKHBsYXllckF0dGFja2luZywgW3gsIHldKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BvdCA9IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90c1tpXTtcblxuICAgIGlmIChzcG90WzBdID09PSB4ICYmIHNwb3RbMV0gPT09IHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIERldGVybWluZXMgd2hpY2ggcGxheWVyIGdvZXMgbmV4dFxuY29uc3Qgd2hvc2VUdXJuID0gKGhpdFN0YXR1cywgcGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwiYWxyZWFkeUhpdFwiKSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHBsYXllckF0dGFja2luZy5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSByZWNlaXZpbmdBdHRhY2submFtZTtcbiAgfVxufTtcblxuLy8gUmV0dXJucyB3aGljaCBwbGF5ZXIgaXMgJ0NvbXB1dGVyJ1xuY29uc3Qgd2hvSXNDb21wdXRlciA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaykgPT4ge1xuICBpZiAocGxheWVyQXR0YWNraW5nLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIHJldHVybiBwbGF5ZXJBdHRhY2tpbmc7XG4gIH1cblxuICBpZiAocmVjZWl2aW5nQXR0YWNrLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIHJldHVybiByZWNlaXZpbmdBdHRhY2s7XG4gIH1cbn07XG5cbi8vIFNlbGVjdHMgY29ycmVjdCBjZWxsIHRvIGNsaWNrXG5jb25zdCBjb3JyZWN0Q2VsbCA9ICh4LCB5KSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgY29vcmRpbmF0ZS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKE51bWJlcihjZWxsLmRhdGFzZXQueCkgPT09IHggJiYgTnVtYmVyKGNlbGwuZGF0YXNldC55KSA9PT0geSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNlbGwuY2xpY2soKTtcbiAgICAgIH0sIFwiMjAwMFwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU2V0cyBuZXcgKHJhbmRvbVgsIHJhbmRvbVkpIGlmIGNvbXB1dGVyIGNsaWNrZWQgY29vcmRpbmF0ZSBhbHJlYWR5XG5jb25zdCBuZXdSYW5kb21Db29yZGluYXRlID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIGxldCB4ID0gcmFuZG9tWDtcbiAgbGV0IHkgPSByYW5kb21ZO1xuXG4gIHdoaWxlIChcbiAgICB3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgfVxuXG4gIGNvcnJlY3RDZWxsKHgsIHkpO1xufTtcblxuLy8gQXR0YWNrcyBhbiBhZGphY2VudCBjZWxsIGlmIGNvbXB1dGVyIHByZXZpb3VzbHkgaGl0XG5jb25zdCBhZGphY2VudEF0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIFt4LCB5XSxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIC8vIElmIGFkamFjZW50IGNlbGwgaXMgd2l0aGluIGdhbWVib2FyZCBhbmQgaGFzbid0IGJlZW4gY2xpY2tlZFxuICBpZiAoXG4gICAgeSArIDEgPj0gMCAmJlxuICAgIHkgKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5ICsgMVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHgsIHkgKyAxKTtcbiAgfSBlbHNlIGlmIChcbiAgICB4IC0gMSA+PSAwICYmXG4gICAgeCAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCAtIDEsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCAtIDEsIHkpO1xuICB9IGVsc2UgaWYgKFxuICAgIHkgLSAxID49IDAgJiZcbiAgICB5IC0gMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSAtIDFcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4LCB5IC0gMSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgeCArIDEgPj0gMCAmJlxuICAgIHggKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggKyAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHggKyAxLCB5KTtcbiAgfSBlbHNlIHtcbiAgICBuZXdSYW5kb21Db29yZGluYXRlKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCByYW5kb21YLCByYW5kb21ZKTtcbiAgfVxufTtcblxuLy8gQ2hvb3NlcyBhIGNvb3JkaW5hdGUgZm9yIENvbXB1dGVyJ3MgdHVyblxuY29uc3QgY29tcHV0ZXJDbGljayA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpID0+IHtcbiAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuXG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgYWRqYWNlbnRBdHRhY2soXG4gICAgICAgIHBsYXllckF0dGFja2luZyxcbiAgICAgICAgcmVjZWl2aW5nQXR0YWNrLFxuICAgICAgICBbeCwgeV0sXG4gICAgICAgIHJhbmRvbVgsXG4gICAgICAgIHJhbmRvbVlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1JhbmRvbUNvb3JkaW5hdGUocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRGlzcGxheXMgd2lubmVyIG9mIHRoZSBnYW1lXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllckF0dGFja2luZykgPT4ge1xuICBjb25zb2xlLmxvZyhwbGF5ZXJBdHRhY2tpbmcubmFtZSk7XG59O1xuXG4vLyBFbmRzIGdhbWUgYW5kIGRpc3BsYXlzIHdpbm5lclxuY29uc3QgcGxheWVyV2luID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBjb250cm9sbGVyKSA9PiB7XG4gIGlmIChyZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQuYWxsU3VuayhbMCwgMF0pKSB7XG4gICAgY29udHJvbGxlci5hYm9ydCgpO1xuXG4gICAgZGlzcGxheVdpbm5lcihwbGF5ZXJBdHRhY2tpbmcpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICB3YXNDb29yZGluYXRlQ2xpY2tlZCxcbiAgd2hvc2VUdXJuLFxuICBwbGF5ZXJXaW4sXG4gIGNvbXB1dGVyQ2xpY2ssXG4gIHNoaXBMZW5ndGhcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=