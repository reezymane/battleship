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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/factories.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yaWVzLm1haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDMEM7QUFNcEI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsV0FBVzs7QUFFckQscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQixjQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsRUFBRSwyQkFBMkIsRUFBRTtBQUM3RDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxZQUFZOztBQUUvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQXNCO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGlFQUFvQjtBQUNuQztBQUNBOztBQUVBOztBQUVBOztBQUVBLFlBQVksc0RBQVM7O0FBRXJCLFlBQVksc0RBQVM7O0FBRXJCLFlBQVksMERBQWE7QUFDekI7QUFDQTtBQUNBLE9BQU87QUFDUCxRQUFRO0FBQ1I7QUFDQSxHQUFHO0FBQ0g7O0FBU0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktGO0FBQ0E7QUFDQTtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHFEQUFlOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUUyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2TjNEO0FBQ0E7QUFDQTtBQUMwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isd0NBQXdDO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBc0I7QUFDMUIsSUFBSTtBQUNKLElBQUksOERBQXNCO0FBQzFCLElBQUk7QUFDSixJQUFJLDhEQUFzQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sOERBQXNCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBUUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IGN1cnJlbnRUdXJuIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQge1xuICB3YXNDb29yZGluYXRlQ2xpY2tlZCxcbiAgd2hvc2VUdXJuLFxuICBwbGF5ZXJXaW4sXG4gIGNvbXB1dGVyQ2xpY2tcbn0gZnJvbSBcIi4vZ2FtZU1vZHVsZVwiO1xuXG4vLyBBbGxvd3Mgc2hpcHMgdG8gYmUgZHJhZ2dlZFxuY29uc3QgZHJhZyA9IChldikgPT4ge1xuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcbn07XG5cbi8vIFN0b3JlcyAqKipJTkZPKioqIHdoZW4gZHJhZyBzdGFydHNcbmNvbnN0IGRyYWdMaXN0ZW5lciA9IChzaGlwSUQpID0+IHtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hpcElEKTtcbiAgc2hpcC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWcpO1xufTtcblxuLy8gUHJldmVudHMgdGhlIGJyb3dzZXIgZGVmYXVsdCBoYW5kbGluZyBvZiB0aGUgZGF0YVxuY29uc3QgZHJhZ092ZXIgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8vICoqKkRPRVMgQUNUSU9OcyoqKiB3aGVuIGl0ZW0gaXMgZHJvcHBlZFxuY29uc3QgZHJvcCA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbi8vIENlbGxzIGxpc3RlbiBmb3IgaXRlbXMgdG8gYmUgZHJhZ2dlZCBvdmVyXG5jb25zdCBkcmFnT3Zlckxpc3RlbmVyID0gKCkgPT4ge1xuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcik7XG4gIH0pO1xufTtcblxuLy8gQ3JlYXRlcyB0aGUgZmlyc3Qgcm93IG9mIHRoZSB0YWJsZSBhbmQgbmFtZXMgY29sdW1uc1xuY29uc3QgY3JlYXRlQ29sdW1uSGVhZGluZ3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBjb25zdCBlbXB0eUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICByb3cuYXBwZW5kQ2hpbGQoZW1wdHlIZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBuZXdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIG5ld0hlYWRpbmcudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgcm93LmFwcGVuZENoaWxkKG5ld0hlYWRpbmcpO1xuICB9XG59O1xuXG4vLyBBZGRzIG5leHQgcm93IHdpdGggaGVhZGluZyBhbmQgZW1wdHkgY2VsbHNcbmNvbnN0IGNyZWF0ZVJvd3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcblxuICBmb3IgKGxldCBiaWdJID0gMDsgYmlnSSA8IDEwOyBiaWdJKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBiaWdJICsgMTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBmb3IgKGxldCBsaXR0bGVJID0gMDsgbGl0dGxlSSA8IDEwOyBsaXR0bGVJKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG5cbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBiaWdJKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGxpdHRsZUkpO1xuXG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBBZGRzIHRhYmxlIHRvIHAxQm9hcmQgZGl2XG5jb25zdCBjcmVhdGVUYWJsZSA9IChib2FyZENsYXNzLCB0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZENsYXNzKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG5cbiAgdGFibGUuY2xhc3NMaXN0LmFkZCh0YWJsZUNsYXNzKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gIGNyZWF0ZUNvbHVtbkhlYWRpbmdzKHRhYmxlQ2xhc3MpO1xuICBjcmVhdGVSb3dzKHRhYmxlQ2xhc3MpO1xufTtcblxuLy8gQ29sb3JzIHRoZSBncmlkIHNwYWNlIG9mIGdpdmVuIGNvb3JkaW5hdGVcbmNvbnN0IGNvbG9yQ29vcmRpbmF0ZSA9IChbYSwgYl0pID0+IHtcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG5cbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoY2VsbC5kYXRhc2V0LnggPT09IGAke2F9YCAmJiBjZWxsLmRhdGFzZXQueSA9PT0gYCR7Yn1gKSB7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIENoYW5nZXMgY2VsbCBjb2xvciB3aGVuIGF0dGFja2VkXG5jb25zdCBjb2xvck9uQXR0YWNrID0gKGNlbGwsIGhpdFN0YXR1cykgPT4ge1xuICBpZiAoaGl0U3RhdHVzID09PSBcIm1pc3NcIikge1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0YW5cIjtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCLigKJcIjtcbiAgfVxuXG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicGlua1wiO1xuICAgIGNlbGwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG4gICAgY2VsbC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgY2VsbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuICB9XG59O1xuXG4vLyBBdHRhY2tzIGdhbWVib2FyZCBhbmQgY2hlY2tzIHNoaXBzIHdoZW4gY29vcmRpbmF0ZSBjbGlja2VkXG5jb25zdCBjbGlja0F0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIHRhYmxlQ2xhc3MsXG4gIGNvbnRyb2xsZXJcbikgPT4ge1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFibGVDbGFzc30gLmNlbGxgKTtcblxuICBncmlkU3F1YXJlcy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjbGlja1wiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoY3VycmVudFR1cm4ucGxheWVyTmFtZSA9PT0gcGxheWVyQXR0YWNraW5nLm5hbWUpIHtcbiAgICAgICAgICAvLyBTZXRzIGNvb3JkaW5hdGUgdmFsdWVzIGJhc2VkIG9uIGNlbGwgZGF0YVxuICAgICAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5kYXRhc2V0LngpO1xuICAgICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpO1xuXG4gICAgICAgICAgaWYgKCF3YXNDb29yZGluYXRlQ2xpY2tlZChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkpIHtcbiAgICAgICAgICAgIC8vIEFkZHMgY29vcmRpbmF0ZSB0byBhcnJheSBvZiBjbGlja2VkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHMucHVzaChbeCwgeV0pO1xuXG4gICAgICAgICAgICBjb25zdCBoaXRTdGF0dXMgPSByZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhbeCwgeV0pO1xuXG4gICAgICAgICAgICBjb2xvck9uQXR0YWNrKGNlbGwsIGhpdFN0YXR1cyk7XG5cbiAgICAgICAgICAgIHdob3NlVHVybihoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKTtcblxuICAgICAgICAgICAgcGxheWVyV2luKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBjb250cm9sbGVyKTtcblxuICAgICAgICAgICAgY29tcHV0ZXJDbGljayhwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHsgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCB9XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUYWJsZSxcbiAgY29sb3JDb29yZGluYXRlLFxuICBjbGlja0F0dGFjayxcbiAgZHJhZ0xpc3RlbmVyLFxuICBkcm9wLFxuICBkcmFnT3Zlckxpc3RlbmVyXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGNvbG9yQ29vcmRpbmF0ZSB9IGZyb20gXCIuL2RvbVwiO1xuXG4vLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayBoaXRzIG9yIG1pc3Nlc1xuY29uc3QgaGl0T3JNaXNzID0gKGluQ29vcmRpbmF0ZSkgPT4ge1xuICBpZiAoaW5Db29yZGluYXRlID09PSAwKSByZXR1cm4gXCJtaXNzXCI7XG5cbiAgaWYgKGluQ29vcmRpbmF0ZSA9PT0gMSkgcmV0dXJuIFwiYWxyZWFkeUhpdFwiO1xuXG4gIHJldHVybiBcImhpdFwiO1xufTtcblxuLy8gQ3JlYXRlcyBzaGlwcyB0byBwbGFjZSBvbiBnYW1lYm9hcmRcbmNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiAoe1xuICBsZW5ndGgsXG4gIGhpdEFtb3VudDogMCxcbiAgc3VuazogZmFsc2UsXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdEFtb3VudCArPSAxO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0QW1vdW50ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoe1xuICBib2FyZDogW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxuICBdLFxuICAvLyBNYXJrcyBhdHRhY2tzIG9uIGdhbWVib2FyZFxuICByZWNlaXZlQXR0YWNrKFthLCBiXSkge1xuICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG4gICAgY29uc3QgaGl0U3RhdHVzID0gaGl0T3JNaXNzKGluQ29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBpbkNvb3JkaW5hdGUuaGl0KCk7XG4gICAgICBpbkNvb3JkaW5hdGUuaXNTdW5rKCk7XG4gICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICB0aGlzLmJvYXJkW2FdW2JdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0U3RhdHVzO1xuICB9LFxuICAvLyBDaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIGFsbFN1bmsoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5Db29yZGluYXRlLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBSdW5zIGEgZnVuY3Rpb24gdG8gY29sb3IgZ3JpZCBzcGFjZSBpZlxuICAvLyBpdCBjb250YWlucyBhIHNoaXBcbiAgY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBjb2xvckNvb3JkaW5hdGUoW2EsIGJdKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBDaGVja3MgaWYgdGhlcmUgYXJlIGVub3VnaCBzcGFjZXMgcmlnaHQvbGVmdC9kb3duL3VwIGZvciBhIHNoaXBcbiAgZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBJZiBjb29yZGluYXRlIGlzIG9mZiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZVxuICAgIGlmICh4Q29vcmQgPCAxMCAmJiB4Q29vcmQgPiAtMSAmJiB5Q29vcmQgPCAxMCAmJiB5Q29vcmQgPiAtMSkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG5cbiAgICAgIC8vIElmIGEgc2hpcCBpcyBhbHJlYWR5IGluIGNvb3JkaW5hdGUsIHJldHVybiBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBmdWxsIGxlbmd0aCBvZiBzaGlwIGlzIHJlYWNoZWQsIHJldHVybiB0cnVlXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgbmV4dCBjb29yZGluYXRlIGluIGdpdmVuIGRpcmVjdGlvblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBjb29yZGluYXRlIGlzIHVuZGVmaW5lZCBvciBlbXB0eVxuICBzcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkKSB7XG4gICAgaWYgKHhDb29yZCA8IDEwICYmIHhDb29yZCA+IC0xICYmIHlDb29yZCA8IDEwICYmIHlDb29yZCA+IC0xKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIGJldHdlZW4gc2hpcHMgc2V0IGFuZCBzaGlwcyBiZWluZyBkcm9wcGVkXG4gIHNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgLy8gQ2hlY2tzIGlmIHN1cnJvdW5kaW5nIGNvb3JkaW5hdGVzIGFyZSBlbXB0eS91bmRlZmluZWRcbiAgICBjb25zdCB0b3AgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkKTtcbiAgICBjb25zdCB0b3BSaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQgKyAxKTtcbiAgICBjb25zdCByaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQpO1xuICAgIGNvbnN0IGJvdHRvbUxlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkIC0gMSk7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCAtIDEpO1xuICAgIGNvbnN0IHRvcExlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkIC0gMSk7XG5cbiAgICAvLyBJZiBhbnkgc3Vycm91bmRpbmcgY29vcmRpbmF0ZXMgYXJlbid0IGVtcHR5LCByZXR1cm4gZmFsc2VcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB0b3AgJiZcbiAgICAgICAgdG9wUmlnaHQgJiZcbiAgICAgICAgcmlnaHQgJiZcbiAgICAgICAgYm90dG9tUmlnaHQgJiZcbiAgICAgICAgYm90dG9tICYmXG4gICAgICAgIGJvdHRvbUxlZnQgJiZcbiAgICAgICAgbGVmdCAmJlxuICAgICAgICB0b3BMZWZ0XG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG5leHQgY29vcmRpbmF0ZSBpbiBnaXZlbiBkaXJlY3Rpb25cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgcGxheWVyIGFuZCBhIGdhbWVib2FyZCBmb3IgdGhlbVxuY29uc3QgcGxheWVyID0gKG5hbWUpID0+ICh7XG4gIG5hbWUsXG4gIHBsYXllckJvYXJkOiBnYW1lYm9hcmQoKSxcbiAgbWFya2VkU3BvdHM6IFtdXG59KTtcblxuLy8gRHluYW1pYyBvYmplY3QgdG8gdHJhY2sgcGxheWVyIHR1cm5zXG5jb25zdCBjdXJyZW50VHVybiA9IHtcbiAgcGxheWVyTmFtZTogbnVsbFxufTtcblxuZXhwb3J0IHsgc2hpcCwgcGxheWVyLCBjdXJyZW50VHVybiwgZ2FtZWJvYXJkLCBoaXRPck1pc3MgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjdXJyZW50VHVybiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG4vLyBSZXR1cm5zIHNoaXAgbGVuZ3RoXG5jb25zdCBzaGlwTGVuZ3RoID0gKHNoaXBOYW1lKSA9PiB7XG4gIGNvbnN0IGJhdHRsZXNoaXAgPSAvXltiYXR0bGVzaGlwXS87XG4gIGNvbnN0IGRlc3Ryb3llciA9IC9eW2Rlc3Ryb3llcl0vO1xuICBjb25zdCBzdWJtYXJpbmUgPSAvXltzdWJtYXJpbmVdLztcbiAgY29uc3QgcGF0cm9sQm9hdCA9IC9eW3BhdHJvbEJvYXRdLztcblxuICBpZiAoc2hpcE5hbWUubWF0Y2goYmF0dGxlc2hpcCkpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIGlmIChzaGlwTmFtZS5tYXRjaChkZXN0cm95ZXIpKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBpZiAoc2hpcE5hbWUubWF0Y2goc3VibWFyaW5lKSkge1xuICAgIHJldHVybiAyO1xuICB9XG5cbiAgaWYgKHNoaXBOYW1lLm1hdGNoKHBhdHJvbEJvYXQpKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn07XG5cbi8vIENoZWNrcyBpZiBjb29yZGluYXRlIGhhcyBiZWVuIGNsaWNrZWQgYWxyZWFkeVxuY29uc3Qgd2FzQ29vcmRpbmF0ZUNsaWNrZWQgPSAocGxheWVyQXR0YWNraW5nLCBbeCwgeV0pID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzcG90ID0gcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzW2ldO1xuXG4gICAgaWYgKHNwb3RbMF0gPT09IHggJiYgc3BvdFsxXSA9PT0geSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLy8gRGV0ZXJtaW5lcyB3aGljaCBwbGF5ZXIgZ29lcyBuZXh0XG5jb25zdCB3aG9zZVR1cm4gPSAoaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaykgPT4ge1xuICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHBsYXllckF0dGFja2luZy5uYW1lO1xuICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gXCJhbHJlYWR5SGl0XCIpIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyQXR0YWNraW5nLm5hbWU7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHJlY2VpdmluZ0F0dGFjay5uYW1lO1xuICB9XG59O1xuXG4vLyBSZXR1cm5zIHdoaWNoIHBsYXllciBpcyAnQ29tcHV0ZXInXG5jb25zdCB3aG9Jc0NvbXB1dGVyID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChwbGF5ZXJBdHRhY2tpbmcubmFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgcmV0dXJuIHBsYXllckF0dGFja2luZztcbiAgfVxuXG4gIGlmIChyZWNlaXZpbmdBdHRhY2submFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgcmV0dXJuIHJlY2VpdmluZ0F0dGFjaztcbiAgfVxufTtcblxuLy8gU2VsZWN0cyBjb3JyZWN0IGNlbGwgdG8gY2xpY2tcbmNvbnN0IGNvcnJlY3RDZWxsID0gKHgsIHkpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDFHcmlkIC5jZWxsXCIpO1xuICBjb29yZGluYXRlLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoTnVtYmVyKGNlbGwuZGF0YXNldC54KSA9PT0geCAmJiBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpID09PSB5KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2VsbC5jbGljaygpO1xuICAgICAgfSwgXCIyMDAwXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBTZXRzIG5ldyAocmFuZG9tWCwgcmFuZG9tWSkgaWYgY29tcHV0ZXIgY2xpY2tlZCBjb29yZGluYXRlIGFscmVhZHlcbmNvbnN0IG5ld1JhbmRvbUNvb3JkaW5hdGUgPSAoXG4gIHBsYXllckF0dGFja2luZyxcbiAgcmVjZWl2aW5nQXR0YWNrLFxuICByYW5kb21YLFxuICByYW5kb21ZXG4pID0+IHtcbiAgbGV0IHggPSByYW5kb21YO1xuICBsZXQgeSA9IHJhbmRvbVk7XG5cbiAgd2hpbGUgKFxuICAgIHdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICB9XG5cbiAgY29ycmVjdENlbGwoeCwgeSk7XG59O1xuXG4vLyBBdHRhY2tzIGFuIGFkamFjZW50IGNlbGwgaWYgY29tcHV0ZXIgcHJldmlvdXNseSBoaXRcbmNvbnN0IGFkamFjZW50QXR0YWNrID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgW3gsIHldLFxuICByYW5kb21YLFxuICByYW5kb21ZXG4pID0+IHtcbiAgLy8gSWYgYWRqYWNlbnQgY2VsbCBpcyB3aXRoaW4gZ2FtZWJvYXJkIGFuZCBoYXNuJ3QgYmVlbiBjbGlja2VkXG4gIGlmIChcbiAgICB5ICsgMSA+PSAwICYmXG4gICAgeSArIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHkgKyAxXG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCwgeSArIDEpO1xuICB9IGVsc2UgaWYgKFxuICAgIHggLSAxID49IDAgJiZcbiAgICB4IC0gMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4IC0gMSxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4IC0gMSwgeSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgeSAtIDEgPj0gMCAmJlxuICAgIHkgLSAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5IC0gMVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHgsIHkgLSAxKTtcbiAgfSBlbHNlIGlmIChcbiAgICB4ICsgMSA+PSAwICYmXG4gICAgeCArIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCArIDEsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCArIDEsIHkpO1xuICB9IGVsc2Uge1xuICAgIG5ld1JhbmRvbUNvb3JkaW5hdGUocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIHJhbmRvbVgsIHJhbmRvbVkpO1xuICB9XG59O1xuXG4vLyBDaG9vc2VzIGEgY29vcmRpbmF0ZSBmb3IgQ29tcHV0ZXIncyB0dXJuXG5jb25zdCBjb21wdXRlckNsaWNrID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBbeCwgeV0sIGhpdFN0YXR1cykgPT4ge1xuICBpZiAoY3VycmVudFR1cm4ucGxheWVyTmFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBhZGphY2VudEF0dGFjayhcbiAgICAgICAgcGxheWVyQXR0YWNraW5nLFxuICAgICAgICByZWNlaXZpbmdBdHRhY2ssXG4gICAgICAgIFt4LCB5XSxcbiAgICAgICAgcmFuZG9tWCxcbiAgICAgICAgcmFuZG9tWVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3UmFuZG9tQ29vcmRpbmF0ZShwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgcmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBEaXNwbGF5cyB3aW5uZXIgb2YgdGhlIGdhbWVcbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSAocGxheWVyQXR0YWNraW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKHBsYXllckF0dGFja2luZy5uYW1lKTtcbn07XG5cbi8vIEVuZHMgZ2FtZSBhbmQgZGlzcGxheXMgd2lubmVyXG5jb25zdCBwbGF5ZXJXaW4gPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIGNvbnRyb2xsZXIpID0+IHtcbiAgaWYgKHJlY2VpdmluZ0F0dGFjay5wbGF5ZXJCb2FyZC5hbGxTdW5rKFswLCAwXSkpIHtcbiAgICBjb250cm9sbGVyLmFib3J0KCk7XG5cbiAgICBkaXNwbGF5V2lubmVyKHBsYXllckF0dGFja2luZyk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHdhc0Nvb3JkaW5hdGVDbGlja2VkLFxuICB3aG9zZVR1cm4sXG4gIHBsYXllcldpbixcbiAgY29tcHV0ZXJDbGljayxcbiAgc2hpcExlbmd0aFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==