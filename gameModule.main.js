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
/* harmony export */   "drag": () => (/* binding */ drag),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dropToGameboard": () => (/* binding */ dropToGameboard),
/* harmony export */   "resetCell": () => (/* binding */ resetCell),
/* harmony export */   "shipIdentify": () => (/* binding */ shipIdentify),
/* harmony export */   "shipsDeployed": () => (/* binding */ shipsDeployed),
/* harmony export */   "toggleShips": () => (/* binding */ toggleShips)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/gameModule.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */



// Stores div ID and makes div opaque
const drag = (ev, div) => {
  ev.dataTransfer.setData("text", ev.target.id);

  div.style.opacity = "0.4";
};

const dragOver = (ev) => {
  ev.preventDefault();
};

// Restores opacity when drag ends
const dragEnd = (div) => {
  div.style.opacity = "1";
};

// Returns length of the ship being dropped
const shipIdentify = (ev) => {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  let length;

  if (data.includes("battleship")) {
    length = 4;
  }

  if (data.includes("destroyer")) {
    length = 3;
  }

  if (data.includes("submarine")) {
    length = 2;
  }

  if (data.includes("patrolBoat")) {
    length = 1;
  }

  return { shipName: data, length };
};

// Adds dropped ships to player gameboard
const dropToGameboard = (ev, x, y, shipName, shipLength, direction) => {
  ev.preventDefault();

  // Iterates through object to place correct ship on gameboard, in correct direction
  if (direction === "right") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          y++;
        }
      }
    }
  }

  if (direction === "left") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          y--;
        }
      }
    }
  }

  if (direction === "down") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          x++;
        }
      }
    }
  }

  if (direction === "up") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player1Ships)) {
        if (key === shipName) {
          _factories__WEBPACK_IMPORTED_MODULE_0__.player1.playerBoard.board[x][y] = value;
          x--;
        }
      }
    }
  }
};

// Toggles draggable ship displays
const toggleShips = (shipID, display) => {
  const shipToHide = document.querySelector(shipID);

  shipToHide.style.display = display;
};

// Checks if all ships have been placed
const shipsDeployed = () => {
  const ships = document.querySelectorAll(".shipOuter div");
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].style.display !== "none") {
      return false;
    }
  }

  return true;
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
      const cellDiv = document.createElement("div");

      cell.classList.add("cell");
      cellDiv.classList.add("cellDiv");
      cell.setAttribute("data-x", bigI);
      cell.setAttribute("data-y", littleI);
      cellDiv.setAttribute("data-x", bigI);
      cellDiv.setAttribute("data-y", littleI);

      row.appendChild(cell);
      cell.appendChild(cellDiv);
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
  const para = document.createElement("p");
  para.classList.add("para");

  if (hitStatus === "miss") {
    cell.style.backgroundColor = "tan";
    para.textContent = "•";

    cell.firstChild.appendChild(para);
  }

  if (hitStatus === "hit") {
    cell.style.backgroundColor = "pink";
    cell.style.border = "1px solid red";
    cell.style.color = "red";
    para.textContent = "X";

    cell.firstChild.appendChild(para);
  }
};

// Removes cell color and text
const resetCell = () => {
  const gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
    cell.style.border = "1px solid white";
    cell.style.color = "initial";

    if (cell.firstChild.firstChild !== null) {
      cell.firstChild.removeChild(cell.firstChild.firstChild);
    }
  });
};

// Attacks gameboard and checks ships when coordinate clicked
const clickAttack = (playerAttacking, receivingAttack, tableClass) => {
  const gridSquares = document.querySelectorAll(`${tableClass} .cell`);

  gridSquares.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (
        _factories__WEBPACK_IMPORTED_MODULE_0__.currentTurn.playerName === playerAttacking.name &&
        _factories__WEBPACK_IMPORTED_MODULE_0__.onOff.status === "on"
      ) {
        // Sets coordinate values based on cell data
        const x = Number(cell.dataset.x);
        const y = Number(cell.dataset.y);

        if (!(0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.wasCoordinateClicked)(playerAttacking, [x, y])) {
          // Adds coordinate to array of clicked coordinates
          playerAttacking.markedSpots.push([x, y]);

          const hitStatus = receivingAttack.playerBoard.receiveAttack([x, y]);

          colorOnAttack(cell, hitStatus);

          (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.whoseTurn)(hitStatus, playerAttacking, receivingAttack);

          (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.playerWin)(playerAttacking, receivingAttack);

          (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.computerClick)(playerAttacking, receivingAttack, [x, y], hitStatus);
        }
      }
    });
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
/* harmony export */   "onOff": () => (/* binding */ onOff),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "player1": () => (/* binding */ player1),
/* harmony export */   "player1Ships": () => (/* binding */ player1Ships),
/* harmony export */   "player2": () => (/* binding */ player2),
/* harmony export */   "player2Ships": () => (/* binding */ player2Ships),
/* harmony export */   "ship": () => (/* binding */ ship)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _gameModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameModule */ "./src/gameModule.js");
/* eslint-disable no-restricted-syntax */
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
  },
  resetShip() {
    this.hitAmount = 0;
    this.sunk = false;
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

    if (shipLength === 1) {
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
  },
  // Clears ships and misses from gameboard
  clearBoard([a, b]) {
    if (a > 9) {
      return;
    }

    if (b < 10) {
      const inCoordinate = this.board[a][b];

      if (inCoordinate !== 0) {
        this.board[a][b] = 0;

        return this.clearBoard([a, b + 1]);
      }

      return this.clearBoard([a, b + 1]);
    }

    if (b > 9) {
      return this.clearBoard([a + 1, 0]);
    }
  },
  // Deletes single ship
  deleteShip(headCoordinate, orientation, length) {
    for (let i = 0; i < length; i++) {
      if (orientation === "right") {
        this.board[headCoordinate[0]][headCoordinate[1] + i] = 0;
      }

      if (orientation === "left") {
        this.board[headCoordinate[0]][headCoordinate[1] - i] = 0;
      }

      if (orientation === "down") {
        this.board[headCoordinate[0] + i][headCoordinate[1]] = 0;
      }

      if (orientation === "up") {
        this.board[headCoordinate[0] - i][headCoordinate[1]] = 0;
      }
    }
  },
  // Re-adds single ship to gameboard
  readdShip(shipToReadd, orientation, length) {
    for (let i = 0; i < length; i++) {
      if (orientation === "right") {
        this.board[shipToReadd.head[0]][shipToReadd.head[1] + i] = shipToReadd;
      }

      if (orientation === "left") {
        this.board[shipToReadd.head[0]][shipToReadd.head[1] - i] = shipToReadd;
      }

      if (orientation === "down") {
        this.board[shipToReadd.head[0] + i][shipToReadd.head[1]] = shipToReadd;
      }

      if (orientation === "up") {
        this.board[shipToReadd.head[0] - i][shipToReadd.head[1]] = shipToReadd;
      }
    }
  },
  // Changes orientation of a ship
  changeOrientation(playerClicking, xCoord, yCoord) {
    const inCoordinate = this.board[xCoord][yCoord];
    if (typeof inCoordinate === "object") {
      this.deleteShip(
        inCoordinate.head,
        inCoordinate.orientation,
        inCoordinate.length
      );

      if (
        inCoordinate.orientation === "right" ||
        inCoordinate.orientation === "left"
      ) {
        const newPlacement = (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.verticalPlacement)(
          playerClicking,
          xCoord,
          yCoord,
          inCoordinate.length
        );

        if (newPlacement !== null) {
          inCoordinate.orientation = newPlacement;

          this.readdShip(inCoordinate, newPlacement, inCoordinate.length);

          (0,_dom__WEBPACK_IMPORTED_MODULE_0__.resetCell)();

          this.colorGameboardShips([0, 0]);
        } else {
          this.readdShip(
            inCoordinate,
            inCoordinate.orientation,
            inCoordinate.length
          );
        }

        return;
      }

      if (
        inCoordinate.orientation === "down" ||
        inCoordinate.orientation === "up"
      ) {
        const newPlacement = (0,_gameModule__WEBPACK_IMPORTED_MODULE_1__.horizontalPlacement)(
          playerClicking,
          xCoord,
          yCoord,
          inCoordinate.length
        );

        if (newPlacement !== null) {
          inCoordinate.orientation = newPlacement;

          this.readdShip(inCoordinate, newPlacement, inCoordinate.length);

          (0,_dom__WEBPACK_IMPORTED_MODULE_0__.resetCell)();

          this.colorGameboardShips([0, 0]);
        } else {
          this.readdShip(
            inCoordinate,
            inCoordinate.orientation,
            inCoordinate.length
          );
        }
      }
    }
  }
});

// Creates a player and a gameboard for them
const player = (name) => ({
  name,
  playerBoard: gameboard(),
  markedSpots: [],
  clearMarkedSpots() {
    while (this.markedSpots.length > 0) {
      this.markedSpots.pop();
    }
  }
});

// Dynamic object to track player turns
const currentTurn = {
  playerName: null
};

// Creates players and boards
const player1 = player("player1");
const player2 = player("Computer");

// Creates player1 ships
const player1Ships = {
  battleship1: ship(4),
  destroyer11: ship(3),
  destroyer12: ship(3),
  submarine11: ship(2),
  submarine12: ship(2),
  submarine13: ship(2),
  patrolBoat11: ship(1),
  patrolBoat12: ship(1),
  patrolBoat13: ship(1),
  patrolBoat14: ship(1)
};

// Creates player2 ships
const player2Ships = {
  battleship2: ship(4),
  destroyer21: ship(3),
  destroyer22: ship(3),
  submarine21: ship(2),
  submarine22: ship(2),
  submarine23: ship(2),
  patrolBoat21: ship(1),
  patrolBoat22: ship(1),
  patrolBoat23: ship(1),
  patrolBoat24: ship(1)
};

// Dynamic on/off switch for board event listeners
const onOff = {
  status: null,
  rotate: "on"
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
/* harmony export */   "horizontalPlacement": () => (/* binding */ horizontalPlacement),
/* harmony export */   "placeComputerShips": () => (/* binding */ placeComputerShips),
/* harmony export */   "playerWin": () => (/* binding */ playerWin),
/* harmony export */   "trackHead": () => (/* binding */ trackHead),
/* harmony export */   "trackOrientation": () => (/* binding */ trackOrientation),
/* harmony export */   "validPlacement": () => (/* binding */ validPlacement),
/* harmony export */   "verticalPlacement": () => (/* binding */ verticalPlacement),
/* harmony export */   "wasCoordinateClicked": () => (/* binding */ wasCoordinateClicked),
/* harmony export */   "whoseTurn": () => (/* binding */ whoseTurn)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */


// Verifies valid veritical placement
const verticalPlacement = (player, xCoord, yCoord, length) => {
  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "down") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "down")
  ) {
    return "down";
  }

  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "up") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "up")
  ) {
    return "up";
  }

  return null;
};

// Verifies valid horizontal placement
const horizontalPlacement = (player, xCoord, yCoord, length) => {
  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "right") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "right")
  ) {
    return "right";
  }

  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "left") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "left")
  ) {
    return "left";
  }

  return null;
};

// Verifies valid ship placement
const validPlacement = (player, xCoord, yCoord, length) => {
  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "right") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "right")
  ) {
    return "right";
  }

  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "left") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "left")
  ) {
    return "left";
  }

  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "down") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "down")
  ) {
    return "down";
  }

  if (
    player.playerBoard.enoughSpaces(xCoord, yCoord, length, "up") &&
    player.playerBoard.spaceBetween(xCoord, yCoord, length, "up")
  ) {
    return "up";
  }

  return null;
};

// Chooses new coordinate if computer ship placement is invalid
const validComputerPlacement = (randomX, randomY, value) => {
  let x = randomX;
  let y = randomY;
  const validDirection = validPlacement(_factories__WEBPACK_IMPORTED_MODULE_0__.player2, x, y, value.length);

  if (validDirection === "right") {
    for (let i = 0; i < value.length; i++) {
      _factories__WEBPACK_IMPORTED_MODULE_0__.player2.playerBoard.board[x][y] = value;
      y++;
    }
  } else if (validDirection === "left") {
    for (let i = 0; i < value.length; i++) {
      _factories__WEBPACK_IMPORTED_MODULE_0__.player2.playerBoard.board[x][y] = value;
      y--;
    }
  } else if (validDirection === "down") {
    for (let i = 0; i < value.length; i++) {
      _factories__WEBPACK_IMPORTED_MODULE_0__.player2.playerBoard.board[x][y] = value;
      x++;
    }
  } else if (validDirection === "up") {
    for (let i = 0; i < value.length; i++) {
      _factories__WEBPACK_IMPORTED_MODULE_0__.player2.playerBoard.board[x][y] = value;
      x--;
    }
  } else {
    x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    y = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    validComputerPlacement(x, y, value);
  }
};

// Chooses random placement for Computer ships
const placeComputerShips = () => {
  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of Object.entries(_factories__WEBPACK_IMPORTED_MODULE_0__.player2Ships)) {
    const randomX = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
    const randomY = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    validComputerPlacement(randomX, randomY, value);
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

// Selects correct cell and clicks it
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
  const validAdjacent = [];

  // If adjacent cell is within gameboard and hasn't been clicked
  if (
    y + 1 >= 0 &&
    y + 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y + 1
    ])
  ) {
    validAdjacent.push([x, y + 1]);
  }

  if (
    x - 1 >= 0 &&
    x - 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x - 1,
      y
    ])
  ) {
    validAdjacent.push([x - 1, y]);
  }

  if (
    y - 1 >= 0 &&
    y - 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x,
      y - 1
    ])
  ) {
    validAdjacent.push([x, y - 1]);
  }

  if (
    x + 1 >= 0 &&
    x + 1 <= 9 &&
    !wasCoordinateClicked(whoIsComputer(playerAttacking, receivingAttack), [
      x + 1,
      y
    ])
  ) {
    validAdjacent.push([x + 1, y]);
  }

  if (validAdjacent.length > 0) {
    const randomDirection =
      Math.floor(Math.random() * (validAdjacent.length - 1 - 0 + 1)) + 0;

    correctCell(
      validAdjacent[randomDirection][0],
      validAdjacent[randomDirection][1]
    );
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
const playerWin = (playerAttacking, receivingAttack) => {
  if (receivingAttack.playerBoard.allSunk([0, 0])) {
    _factories__WEBPACK_IMPORTED_MODULE_0__.onOff.status = "off";

    displayWinner(playerAttacking);
  }
};

// Tracks the head of the ship
const trackHead = (shipObject, shipName, xCoord, yCoord) => {
  for (const [key, value] of Object.entries(shipObject)) {
    if (key === shipName) {
      value.head = [xCoord, yCoord];
    }
  }
};

// Tracks ship orientation when placed
const trackOrientation = (shipObject, shipName, validDirection) => {
  for (const [key, value] of Object.entries(shipObject)) {
    if (key === shipName) {
      if (validDirection === "right") {
        value.orientation = "right";
      }

      if (validDirection === "left") {
        value.orientation = "left";
      }

      if (validDirection === "down") {
        value.orientation = "down";
      }

      if (validDirection === "up") {
        value.orientation = "up";
      }
    }
  }
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameModule.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHFEQUFlOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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SDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSw4REFBc0I7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQVk7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lTW9kdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbmltcG9ydCB7IGN1cnJlbnRUdXJuLCBwbGF5ZXIxLCBwbGF5ZXIxU2hpcHMsIG9uT2ZmIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5pbXBvcnQge1xuICB3YXNDb29yZGluYXRlQ2xpY2tlZCxcbiAgd2hvc2VUdXJuLFxuICBwbGF5ZXJXaW4sXG4gIGNvbXB1dGVyQ2xpY2tcbn0gZnJvbSBcIi4vZ2FtZU1vZHVsZVwiO1xuXG4vLyBTdG9yZXMgZGl2IElEIGFuZCBtYWtlcyBkaXYgb3BhcXVlXG5jb25zdCBkcmFnID0gKGV2LCBkaXYpID0+IHtcbiAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0XCIsIGV2LnRhcmdldC5pZCk7XG5cbiAgZGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNFwiO1xufTtcblxuY29uc3QgZHJhZ092ZXIgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbn07XG5cbi8vIFJlc3RvcmVzIG9wYWNpdHkgd2hlbiBkcmFnIGVuZHNcbmNvbnN0IGRyYWdFbmQgPSAoZGl2KSA9PiB7XG4gIGRpdi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG59O1xuXG4vLyBSZXR1cm5zIGxlbmd0aCBvZiB0aGUgc2hpcCBiZWluZyBkcm9wcGVkXG5jb25zdCBzaGlwSWRlbnRpZnkgPSAoZXYpID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGF0YSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgbGV0IGxlbmd0aDtcblxuICBpZiAoZGF0YS5pbmNsdWRlcyhcImJhdHRsZXNoaXBcIikpIHtcbiAgICBsZW5ndGggPSA0O1xuICB9XG5cbiAgaWYgKGRhdGEuaW5jbHVkZXMoXCJkZXN0cm95ZXJcIikpIHtcbiAgICBsZW5ndGggPSAzO1xuICB9XG5cbiAgaWYgKGRhdGEuaW5jbHVkZXMoXCJzdWJtYXJpbmVcIikpIHtcbiAgICBsZW5ndGggPSAyO1xuICB9XG5cbiAgaWYgKGRhdGEuaW5jbHVkZXMoXCJwYXRyb2xCb2F0XCIpKSB7XG4gICAgbGVuZ3RoID0gMTtcbiAgfVxuXG4gIHJldHVybiB7IHNoaXBOYW1lOiBkYXRhLCBsZW5ndGggfTtcbn07XG5cbi8vIEFkZHMgZHJvcHBlZCBzaGlwcyB0byBwbGF5ZXIgZ2FtZWJvYXJkXG5jb25zdCBkcm9wVG9HYW1lYm9hcmQgPSAoZXYsIHgsIHksIHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pID0+IHtcbiAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBJdGVyYXRlcyB0aHJvdWdoIG9iamVjdCB0byBwbGFjZSBjb3JyZWN0IHNoaXAgb24gZ2FtZWJvYXJkLCBpbiBjb3JyZWN0IGRpcmVjdGlvblxuICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxheWVyMVNoaXBzKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgICAgICB5Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIxU2hpcHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgICAgIHktLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYXllcjFTaGlwcykpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICAgICAgeCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYXllcjFTaGlwcykpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICAgICAgeC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBUb2dnbGVzIGRyYWdnYWJsZSBzaGlwIGRpc3BsYXlzXG5jb25zdCB0b2dnbGVTaGlwcyA9IChzaGlwSUQsIGRpc3BsYXkpID0+IHtcbiAgY29uc3Qgc2hpcFRvSGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2hpcElEKTtcblxuICBzaGlwVG9IaWRlLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufTtcblxuLy8gQ2hlY2tzIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkXG5jb25zdCBzaGlwc0RlcGxveWVkID0gKCkgPT4ge1xuICBjb25zdCBzaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcE91dGVyIGRpdlwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzaGlwc1tpXS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLy8gQ3JlYXRlcyB0aGUgZmlyc3Qgcm93IG9mIHRoZSB0YWJsZSBhbmQgbmFtZXMgY29sdW1uc1xuY29uc3QgY3JlYXRlQ29sdW1uSGVhZGluZ3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBjb25zdCBlbXB0eUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICByb3cuYXBwZW5kQ2hpbGQoZW1wdHlIZWFkaW5nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zdCBuZXdIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICAgIG5ld0hlYWRpbmcudGV4dENvbnRlbnQgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1ICsgaSk7XG4gICAgcm93LmFwcGVuZENoaWxkKG5ld0hlYWRpbmcpO1xuICB9XG59O1xuXG4vLyBBZGRzIG5leHQgcm93IHdpdGggaGVhZGluZyBhbmQgZW1wdHkgY2VsbHNcbmNvbnN0IGNyZWF0ZVJvd3MgPSAodGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7dGFibGVDbGFzc31gKTtcblxuICBmb3IgKGxldCBiaWdJID0gMDsgYmlnSSA8IDEwOyBiaWdJKyspIHtcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBiaWdJICsgMTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBmb3IgKGxldCBsaXR0bGVJID0gMDsgbGl0dGxlSSA8IDEwOyBsaXR0bGVJKyspIHtcbiAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICBjb25zdCBjZWxsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGNlbGxEaXYuY2xhc3NMaXN0LmFkZChcImNlbGxEaXZcIik7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteFwiLCBiaWdJKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS15XCIsIGxpdHRsZUkpO1xuICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYmlnSSk7XG4gICAgICBjZWxsRGl2LnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBsaXR0bGVJKTtcblxuICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZChjZWxsRGl2KTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEFkZHMgdGFibGUgdG8gcDFCb2FyZCBkaXZcbmNvbnN0IGNyZWF0ZVRhYmxlID0gKGJvYXJkQ2xhc3MsIHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkQ2xhc3MpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuICB0YWJsZS5jbGFzc0xpc3QuYWRkKHRhYmxlQ2xhc3MpO1xuICBib2FyZC5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgY3JlYXRlQ29sdW1uSGVhZGluZ3ModGFibGVDbGFzcyk7XG4gIGNyZWF0ZVJvd3ModGFibGVDbGFzcyk7XG59O1xuXG4vLyBDb2xvcnMgdGhlIGdyaWQgc3BhY2Ugb2YgZ2l2ZW4gY29vcmRpbmF0ZVxuY29uc3QgY29sb3JDb29yZGluYXRlID0gKFthLCBiXSkgPT4ge1xuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcblxuICBncmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmIChjZWxsLmRhdGFzZXQueCA9PT0gYCR7YX1gICYmIGNlbGwuZGF0YXNldC55ID09PSBgJHtifWApIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gQ2hhbmdlcyBjZWxsIGNvbG9yIHdoZW4gYXR0YWNrZWRcbmNvbnN0IGNvbG9yT25BdHRhY2sgPSAoY2VsbCwgaGl0U3RhdHVzKSA9PiB7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYS5jbGFzc0xpc3QuYWRkKFwicGFyYVwiKTtcblxuICBpZiAoaGl0U3RhdHVzID09PSBcIm1pc3NcIikge1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0YW5cIjtcbiAgICBwYXJhLnRleHRDb250ZW50ID0gXCLigKJcIjtcblxuICAgIGNlbGwuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxuXG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicGlua1wiO1xuICAgIGNlbGwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG4gICAgY2VsbC5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiWFwiO1xuXG4gICAgY2VsbC5maXJzdENoaWxkLmFwcGVuZENoaWxkKHBhcmEpO1xuICB9XG59O1xuXG4vLyBSZW1vdmVzIGNlbGwgY29sb3IgYW5kIHRleHRcbmNvbnN0IHJlc2V0Q2VsbCA9ICgpID0+IHtcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jZWxsXCIpO1xuICBncmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgIGNlbGwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgd2hpdGVcIjtcbiAgICBjZWxsLnN0eWxlLmNvbG9yID0gXCJpbml0aWFsXCI7XG5cbiAgICBpZiAoY2VsbC5maXJzdENoaWxkLmZpcnN0Q2hpbGQgIT09IG51bGwpIHtcbiAgICAgIGNlbGwuZmlyc3RDaGlsZC5yZW1vdmVDaGlsZChjZWxsLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIEF0dGFja3MgZ2FtZWJvYXJkIGFuZCBjaGVja3Mgc2hpcHMgd2hlbiBjb29yZGluYXRlIGNsaWNrZWRcbmNvbnN0IGNsaWNrQXR0YWNrID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCB0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWRTcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgJHt0YWJsZUNsYXNzfSAuY2VsbGApO1xuXG4gIGdyaWRTcXVhcmVzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IHBsYXllckF0dGFja2luZy5uYW1lICYmXG4gICAgICAgIG9uT2ZmLnN0YXR1cyA9PT0gXCJvblwiXG4gICAgICApIHtcbiAgICAgICAgLy8gU2V0cyBjb29yZGluYXRlIHZhbHVlcyBiYXNlZCBvbiBjZWxsIGRhdGFcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihjZWxsLmRhdGFzZXQueCk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpO1xuXG4gICAgICAgIGlmICghd2FzQ29vcmRpbmF0ZUNsaWNrZWQocGxheWVyQXR0YWNraW5nLCBbeCwgeV0pKSB7XG4gICAgICAgICAgLy8gQWRkcyBjb29yZGluYXRlIHRvIGFycmF5IG9mIGNsaWNrZWQgY29vcmRpbmF0ZXNcbiAgICAgICAgICBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHMucHVzaChbeCwgeV0pO1xuXG4gICAgICAgICAgY29uc3QgaGl0U3RhdHVzID0gcmVjZWl2aW5nQXR0YWNrLnBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2soW3gsIHldKTtcblxuICAgICAgICAgIGNvbG9yT25BdHRhY2soY2VsbCwgaGl0U3RhdHVzKTtcblxuICAgICAgICAgIHdob3NlVHVybihoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKTtcblxuICAgICAgICAgIHBsYXllcldpbihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayk7XG5cbiAgICAgICAgICBjb21wdXRlckNsaWNrKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBbeCwgeV0sIGhpdFN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBjcmVhdGVUYWJsZSxcbiAgY29sb3JDb29yZGluYXRlLFxuICBjbGlja0F0dGFjayxcbiAgZHJhZyxcbiAgZHJhZ092ZXIsXG4gIHNoaXBJZGVudGlmeSxcbiAgZHJvcFRvR2FtZWJvYXJkLFxuICB0b2dnbGVTaGlwcyxcbiAgcmVzZXRDZWxsLFxuICBzaGlwc0RlcGxveWVkLFxuICBkcmFnRW5kXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5pbXBvcnQgeyBjb2xvckNvb3JkaW5hdGUsIHJlc2V0Q2VsbCB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgdmVydGljYWxQbGFjZW1lbnQsIGhvcml6b250YWxQbGFjZW1lbnQgfSBmcm9tIFwiLi9nYW1lTW9kdWxlXCI7XG5cbi8vIERldGVybWluZXMgaWYgYW4gYXR0YWNrIGhpdHMgb3IgbWlzc2VzXG5jb25zdCBoaXRPck1pc3MgPSAoaW5Db29yZGluYXRlKSA9PiB7XG4gIGlmIChpbkNvb3JkaW5hdGUgPT09IDApIHJldHVybiBcIm1pc3NcIjtcblxuICBpZiAoaW5Db29yZGluYXRlID09PSAxKSByZXR1cm4gXCJhbHJlYWR5SGl0XCI7XG5cbiAgcmV0dXJuIFwiaGl0XCI7XG59O1xuXG4vLyBDcmVhdGVzIHNoaXBzIHRvIHBsYWNlIG9uIGdhbWVib2FyZFxuY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0QW1vdW50OiAwLFxuICBzdW5rOiBmYWxzZSxcbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0QW1vdW50ICs9IDE7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRBbW91bnQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcmVzZXRTaGlwKCkge1xuICAgIHRoaXMuaGl0QW1vdW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxufSk7XG5cbi8vIENyZWF0ZXMgYSBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+ICh7XG4gIGJvYXJkOiBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gIF0sXG4gIC8vIE1hcmtzIGF0dGFja3Mgb24gZ2FtZWJvYXJkXG4gIHJlY2VpdmVBdHRhY2soW2EsIGJdKSB7XG4gICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcbiAgICBjb25zdCBoaXRTdGF0dXMgPSBoaXRPck1pc3MoaW5Db29yZGluYXRlKTtcblxuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGluQ29vcmRpbmF0ZS5oaXQoKTtcbiAgICAgIGluQ29vcmRpbmF0ZS5pc1N1bmsoKTtcbiAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbYV1bYl0gPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBoaXRTdGF0dXM7XG4gIH0sXG4gIC8vIENoZWNrcyBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgYWxsU3VuayhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChiIDwgMTApIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG5cbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbkNvb3JkaW5hdGUuc3VuayA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSArIDEsIDBdKTtcbiAgICB9XG4gIH0sXG4gIC8vIFJ1bnMgYSBmdW5jdGlvbiB0byBjb2xvciBncmlkIHNwYWNlIGlmXG4gIC8vIGl0IGNvbnRhaW5zIGEgc2hpcFxuICBjb2xvckdhbWVib2FyZFNoaXBzKFthLCBiXSkge1xuICAgIGlmIChhID4gOSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChiIDwgMTApIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG5cbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yQ29vcmRpbmF0ZShbYSwgYl0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSArIDEsIDBdKTtcbiAgICB9XG4gIH0sXG4gIC8vIENoZWNrcyBpZiB0aGVyZSBhcmUgZW5vdWdoIHNwYWNlcyByaWdodC9sZWZ0L2Rvd24vdXAgZm9yIGEgc2hpcFxuICBlbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIC8vIElmIGNvb3JkaW5hdGUgaXMgb2ZmIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlXG4gICAgaWYgKHhDb29yZCA8IDEwICYmIHhDb29yZCA+IC0xICYmIHlDb29yZCA8IDEwICYmIHlDb29yZCA+IC0xKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcblxuICAgICAgLy8gSWYgYSBzaGlwIGlzIGFscmVhZHkgaW4gY29vcmRpbmF0ZSwgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGZ1bGwgbGVuZ3RoIG9mIHNoaXAgaXMgcmVhY2hlZCwgcmV0dXJuIHRydWVcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBuZXh0IGNvb3JkaW5hdGUgaW4gZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkICsgMSwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCAtIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkICsgMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQgLSAxLCB5Q29vcmQsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgLy8gUmV0dXJucyB0cnVlIGlmIGNvb3JkaW5hdGUgaXMgdW5kZWZpbmVkIG9yIGVtcHR5XG4gIHNwYWNlRW1wdHkoeENvb3JkLCB5Q29vcmQpIHtcbiAgICBpZiAoeENvb3JkIDwgMTAgJiYgeENvb3JkID4gLTEgJiYgeUNvb3JkIDwgMTAgJiYgeUNvb3JkID4gLTEpIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAvLyBDaGVja3MgaWYgdGhlcmUncyBlbm91Z2ggc3BhY2UgYmV0d2VlbiBzaGlwcyBzZXQgYW5kIHNoaXBzIGJlaW5nIGRyb3BwZWRcbiAgc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBDaGVja3MgaWYgc3Vycm91bmRpbmcgY29vcmRpbmF0ZXMgYXJlIGVtcHR5L3VuZGVmaW5lZFxuICAgIGNvbnN0IHRvcCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQpO1xuICAgIGNvbnN0IHRvcFJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCAtIDEsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkICsgMSk7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkICsgMSk7XG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCk7XG4gICAgY29uc3QgYm90dG9tTGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQgLSAxKTtcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkIC0gMSk7XG4gICAgY29uc3QgdG9wTGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQgLSAxKTtcblxuICAgIC8vIElmIGFueSBzdXJyb3VuZGluZyBjb29yZGluYXRlcyBhcmVuJ3QgZW1wdHksIHJldHVybiBmYWxzZVxuICAgIGlmIChcbiAgICAgICEoXG4gICAgICAgIHRvcCAmJlxuICAgICAgICB0b3BSaWdodCAmJlxuICAgICAgICByaWdodCAmJlxuICAgICAgICBib3R0b21SaWdodCAmJlxuICAgICAgICBib3R0b20gJiZcbiAgICAgICAgYm90dG9tTGVmdCAmJlxuICAgICAgICBsZWZ0ICYmXG4gICAgICAgIHRvcExlZnRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2hpcExlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgbmV4dCBjb29yZGluYXRlIGluIGdpdmVuIGRpcmVjdGlvblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkICsgMSwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCAtIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkICsgMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQgLSAxLCB5Q29vcmQsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgfSxcbiAgLy8gQ2xlYXJzIHNoaXBzIGFuZCBtaXNzZXMgZnJvbSBnYW1lYm9hcmRcbiAgY2xlYXJCb2FyZChbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAoaW5Db29yZGluYXRlICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbYV1bYl0gPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyQm9hcmQoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNsZWFyQm9hcmQoW2EsIGIgKyAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGIgPiA5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbGVhckJvYXJkKFthICsgMSwgMF0pO1xuICAgIH1cbiAgfSxcbiAgLy8gRGVsZXRlcyBzaW5nbGUgc2hpcFxuICBkZWxldGVTaGlwKGhlYWRDb29yZGluYXRlLCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtoZWFkQ29vcmRpbmF0ZVswXV1baGVhZENvb3JkaW5hdGVbMV0gKyBpXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtoZWFkQ29vcmRpbmF0ZVswXV1baGVhZENvb3JkaW5hdGVbMV0gLSBpXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtoZWFkQ29vcmRpbmF0ZVswXSArIGldW2hlYWRDb29yZGluYXRlWzFdXSA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaGVhZENvb3JkaW5hdGVbMF0gLSBpXVtoZWFkQ29vcmRpbmF0ZVsxXV0gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gUmUtYWRkcyBzaW5nbGUgc2hpcCB0byBnYW1lYm9hcmRcbiAgcmVhZGRTaGlwKHNoaXBUb1JlYWRkLCBvcmllbnRhdGlvbiwgbGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtzaGlwVG9SZWFkZC5oZWFkWzBdXVtzaGlwVG9SZWFkZC5oZWFkWzFdICsgaV0gPSBzaGlwVG9SZWFkZDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICB0aGlzLmJvYXJkW3NoaXBUb1JlYWRkLmhlYWRbMF1dW3NoaXBUb1JlYWRkLmhlYWRbMV0gLSBpXSA9IHNoaXBUb1JlYWRkO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbc2hpcFRvUmVhZGQuaGVhZFswXSArIGldW3NoaXBUb1JlYWRkLmhlYWRbMV1dID0gc2hpcFRvUmVhZGQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbc2hpcFRvUmVhZGQuaGVhZFswXSAtIGldW3NoaXBUb1JlYWRkLmhlYWRbMV1dID0gc2hpcFRvUmVhZGQ7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvLyBDaGFuZ2VzIG9yaWVudGF0aW9uIG9mIGEgc2hpcFxuICBjaGFuZ2VPcmllbnRhdGlvbihwbGF5ZXJDbGlja2luZywgeENvb3JkLCB5Q29vcmQpIHtcbiAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcbiAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGhpcy5kZWxldGVTaGlwKFxuICAgICAgICBpbkNvb3JkaW5hdGUuaGVhZCxcbiAgICAgICAgaW5Db29yZGluYXRlLm9yaWVudGF0aW9uLFxuICAgICAgICBpbkNvb3JkaW5hdGUubGVuZ3RoXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbiA9PT0gXCJyaWdodFwiIHx8XG4gICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbiA9PT0gXCJsZWZ0XCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQbGFjZW1lbnQgPSB2ZXJ0aWNhbFBsYWNlbWVudChcbiAgICAgICAgICBwbGF5ZXJDbGlja2luZyxcbiAgICAgICAgICB4Q29vcmQsXG4gICAgICAgICAgeUNvb3JkLFxuICAgICAgICAgIGluQ29vcmRpbmF0ZS5sZW5ndGhcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobmV3UGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgaW5Db29yZGluYXRlLm9yaWVudGF0aW9uID0gbmV3UGxhY2VtZW50O1xuXG4gICAgICAgICAgdGhpcy5yZWFkZFNoaXAoaW5Db29yZGluYXRlLCBuZXdQbGFjZW1lbnQsIGluQ29vcmRpbmF0ZS5sZW5ndGgpO1xuXG4gICAgICAgICAgcmVzZXRDZWxsKCk7XG5cbiAgICAgICAgICB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoWzAsIDBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlYWRkU2hpcChcbiAgICAgICAgICAgIGluQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbixcbiAgICAgICAgICAgIGluQ29vcmRpbmF0ZS5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbiA9PT0gXCJkb3duXCIgfHxcbiAgICAgICAgaW5Db29yZGluYXRlLm9yaWVudGF0aW9uID09PSBcInVwXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBuZXdQbGFjZW1lbnQgPSBob3Jpem9udGFsUGxhY2VtZW50KFxuICAgICAgICAgIHBsYXllckNsaWNraW5nLFxuICAgICAgICAgIHhDb29yZCxcbiAgICAgICAgICB5Q29vcmQsXG4gICAgICAgICAgaW5Db29yZGluYXRlLmxlbmd0aFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChuZXdQbGFjZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBpbkNvb3JkaW5hdGUub3JpZW50YXRpb24gPSBuZXdQbGFjZW1lbnQ7XG5cbiAgICAgICAgICB0aGlzLnJlYWRkU2hpcChpbkNvb3JkaW5hdGUsIG5ld1BsYWNlbWVudCwgaW5Db29yZGluYXRlLmxlbmd0aCk7XG5cbiAgICAgICAgICByZXNldENlbGwoKTtcblxuICAgICAgICAgIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbMCwgMF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVhZGRTaGlwKFxuICAgICAgICAgICAgaW5Db29yZGluYXRlLFxuICAgICAgICAgICAgaW5Db29yZGluYXRlLm9yaWVudGF0aW9uLFxuICAgICAgICAgICAgaW5Db29yZGluYXRlLmxlbmd0aFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgcGxheWVyIGFuZCBhIGdhbWVib2FyZCBmb3IgdGhlbVxuY29uc3QgcGxheWVyID0gKG5hbWUpID0+ICh7XG4gIG5hbWUsXG4gIHBsYXllckJvYXJkOiBnYW1lYm9hcmQoKSxcbiAgbWFya2VkU3BvdHM6IFtdLFxuICBjbGVhck1hcmtlZFNwb3RzKCkge1xuICAgIHdoaWxlICh0aGlzLm1hcmtlZFNwb3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMubWFya2VkU3BvdHMucG9wKCk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gRHluYW1pYyBvYmplY3QgdG8gdHJhY2sgcGxheWVyIHR1cm5zXG5jb25zdCBjdXJyZW50VHVybiA9IHtcbiAgcGxheWVyTmFtZTogbnVsbFxufTtcblxuLy8gQ3JlYXRlcyBwbGF5ZXJzIGFuZCBib2FyZHNcbmNvbnN0IHBsYXllcjEgPSBwbGF5ZXIoXCJwbGF5ZXIxXCIpO1xuY29uc3QgcGxheWVyMiA9IHBsYXllcihcIkNvbXB1dGVyXCIpO1xuXG4vLyBDcmVhdGVzIHBsYXllcjEgc2hpcHNcbmNvbnN0IHBsYXllcjFTaGlwcyA9IHtcbiAgYmF0dGxlc2hpcDE6IHNoaXAoNCksXG4gIGRlc3Ryb3llcjExOiBzaGlwKDMpLFxuICBkZXN0cm95ZXIxMjogc2hpcCgzKSxcbiAgc3VibWFyaW5lMTE6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTEyOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUxMzogc2hpcCgyKSxcbiAgcGF0cm9sQm9hdDExOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MTI6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQxMzogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDE0OiBzaGlwKDEpXG59O1xuXG4vLyBDcmVhdGVzIHBsYXllcjIgc2hpcHNcbmNvbnN0IHBsYXllcjJTaGlwcyA9IHtcbiAgYmF0dGxlc2hpcDI6IHNoaXAoNCksXG4gIGRlc3Ryb3llcjIxOiBzaGlwKDMpLFxuICBkZXN0cm95ZXIyMjogc2hpcCgzKSxcbiAgc3VibWFyaW5lMjE6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTIyOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUyMzogc2hpcCgyKSxcbiAgcGF0cm9sQm9hdDIxOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MjI6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQyMzogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDI0OiBzaGlwKDEpXG59O1xuXG4vLyBEeW5hbWljIG9uL29mZiBzd2l0Y2ggZm9yIGJvYXJkIGV2ZW50IGxpc3RlbmVyc1xuY29uc3Qgb25PZmYgPSB7XG4gIHN0YXR1czogbnVsbCxcbiAgcm90YXRlOiBcIm9uXCJcbn07XG5cbmV4cG9ydCB7XG4gIHNoaXAsXG4gIHBsYXllcixcbiAgY3VycmVudFR1cm4sXG4gIGdhbWVib2FyZCxcbiAgaGl0T3JNaXNzLFxuICBwbGF5ZXIxLFxuICBwbGF5ZXIyLFxuICBwbGF5ZXIxU2hpcHMsXG4gIHBsYXllcjJTaGlwcyxcbiAgb25PZmZcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbmltcG9ydCB7IGN1cnJlbnRUdXJuLCBwbGF5ZXIyLCBwbGF5ZXIyU2hpcHMsIG9uT2ZmIH0gZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5cbi8vIFZlcmlmaWVzIHZhbGlkIHZlcml0aWNhbCBwbGFjZW1lbnRcbmNvbnN0IHZlcnRpY2FsUGxhY2VtZW50ID0gKHBsYXllciwgeENvb3JkLCB5Q29vcmQsIGxlbmd0aCkgPT4ge1xuICBpZiAoXG4gICAgcGxheWVyLnBsYXllckJvYXJkLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcImRvd25cIikgJiZcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwiZG93blwiKVxuICApIHtcbiAgICByZXR1cm4gXCJkb3duXCI7XG4gIH1cblxuICBpZiAoXG4gICAgcGxheWVyLnBsYXllckJvYXJkLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcInVwXCIpICYmXG4gICAgcGxheWVyLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcInVwXCIpXG4gICkge1xuICAgIHJldHVybiBcInVwXCI7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIFZlcmlmaWVzIHZhbGlkIGhvcml6b250YWwgcGxhY2VtZW50XG5jb25zdCBob3Jpem9udGFsUGxhY2VtZW50ID0gKHBsYXllciwgeENvb3JkLCB5Q29vcmQsIGxlbmd0aCkgPT4ge1xuICBpZiAoXG4gICAgcGxheWVyLnBsYXllckJvYXJkLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcInJpZ2h0XCIpICYmXG4gICAgcGxheWVyLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcInJpZ2h0XCIpXG4gICkge1xuICAgIHJldHVybiBcInJpZ2h0XCI7XG4gIH1cblxuICBpZiAoXG4gICAgcGxheWVyLnBsYXllckJvYXJkLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcImxlZnRcIikgJiZcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwibGVmdFwiKVxuICApIHtcbiAgICByZXR1cm4gXCJsZWZ0XCI7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8vIFZlcmlmaWVzIHZhbGlkIHNoaXAgcGxhY2VtZW50XG5jb25zdCB2YWxpZFBsYWNlbWVudCA9IChwbGF5ZXIsIHhDb29yZCwgeUNvb3JkLCBsZW5ndGgpID0+IHtcbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJyaWdodFwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJyaWdodFwiKVxuICApIHtcbiAgICByZXR1cm4gXCJyaWdodFwiO1xuICB9XG5cbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJsZWZ0XCIpICYmXG4gICAgcGxheWVyLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcImxlZnRcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwibGVmdFwiO1xuICB9XG5cbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJkb3duXCIpICYmXG4gICAgcGxheWVyLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcImRvd25cIilcbiAgKSB7XG4gICAgcmV0dXJuIFwiZG93blwiO1xuICB9XG5cbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJ1cFwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJ1cFwiKVxuICApIHtcbiAgICByZXR1cm4gXCJ1cFwiO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBDaG9vc2VzIG5ldyBjb29yZGluYXRlIGlmIGNvbXB1dGVyIHNoaXAgcGxhY2VtZW50IGlzIGludmFsaWRcbmNvbnN0IHZhbGlkQ29tcHV0ZXJQbGFjZW1lbnQgPSAocmFuZG9tWCwgcmFuZG9tWSwgdmFsdWUpID0+IHtcbiAgbGV0IHggPSByYW5kb21YO1xuICBsZXQgeSA9IHJhbmRvbVk7XG4gIGNvbnN0IHZhbGlkRGlyZWN0aW9uID0gdmFsaWRQbGFjZW1lbnQocGxheWVyMiwgeCwgeSwgdmFsdWUubGVuZ3RoKTtcblxuICBpZiAodmFsaWREaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgIHkrKztcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsaWREaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgeS0tO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWxpZERpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICB4Kys7XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICB4LS07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuXG4gICAgdmFsaWRDb21wdXRlclBsYWNlbWVudCh4LCB5LCB2YWx1ZSk7XG4gIH1cbn07XG5cbi8vIENob29zZXMgcmFuZG9tIHBsYWNlbWVudCBmb3IgQ29tcHV0ZXIgc2hpcHNcbmNvbnN0IHBsYWNlQ29tcHV0ZXJTaGlwcyA9ICgpID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYXllcjJTaGlwcykpIHtcbiAgICBjb25zdCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICBjb25zdCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcblxuICAgIHZhbGlkQ29tcHV0ZXJQbGFjZW1lbnQocmFuZG9tWCwgcmFuZG9tWSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyBDaGVja3MgaWYgY29vcmRpbmF0ZSBoYXMgYmVlbiBjbGlja2VkIGFscmVhZHlcbmNvbnN0IHdhc0Nvb3JkaW5hdGVDbGlja2VkID0gKHBsYXllckF0dGFja2luZywgW3gsIHldKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3BvdCA9IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90c1tpXTtcblxuICAgIGlmIChzcG90WzBdID09PSB4ICYmIHNwb3RbMV0gPT09IHkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8vIERldGVybWluZXMgd2hpY2ggcGxheWVyIGdvZXMgbmV4dFxuY29uc3Qgd2hvc2VUdXJuID0gKGhpdFN0YXR1cywgcGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwiYWxyZWFkeUhpdFwiKSB7XG4gICAgY3VycmVudFR1cm4ucGxheWVyTmFtZSA9IHBsYXllckF0dGFja2luZy5uYW1lO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSByZWNlaXZpbmdBdHRhY2submFtZTtcbiAgfVxufTtcblxuLy8gUmV0dXJucyB3aGljaCBwbGF5ZXIgaXMgJ0NvbXB1dGVyJ1xuY29uc3Qgd2hvSXNDb21wdXRlciA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaykgPT4ge1xuICBpZiAocGxheWVyQXR0YWNraW5nLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIHJldHVybiBwbGF5ZXJBdHRhY2tpbmc7XG4gIH1cblxuICBpZiAocmVjZWl2aW5nQXR0YWNrLm5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIHJldHVybiByZWNlaXZpbmdBdHRhY2s7XG4gIH1cbn07XG5cbi8vIFNlbGVjdHMgY29ycmVjdCBjZWxsIGFuZCBjbGlja3MgaXRcbmNvbnN0IGNvcnJlY3RDZWxsID0gKHgsIHkpID0+IHtcbiAgY29uc3QgY29vcmRpbmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucDFHcmlkIC5jZWxsXCIpO1xuICBjb29yZGluYXRlLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoTnVtYmVyKGNlbGwuZGF0YXNldC54KSA9PT0geCAmJiBOdW1iZXIoY2VsbC5kYXRhc2V0LnkpID09PSB5KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2VsbC5jbGljaygpO1xuICAgICAgfSwgXCIyMDAwXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBTZXRzIG5ldyAocmFuZG9tWCwgcmFuZG9tWSkgaWYgY29tcHV0ZXIgY2xpY2tlZCBjb29yZGluYXRlIGFscmVhZHlcbmNvbnN0IG5ld1JhbmRvbUNvb3JkaW5hdGUgPSAoXG4gIHBsYXllckF0dGFja2luZyxcbiAgcmVjZWl2aW5nQXR0YWNrLFxuICByYW5kb21YLFxuICByYW5kb21ZXG4pID0+IHtcbiAgbGV0IHggPSByYW5kb21YO1xuICBsZXQgeSA9IHJhbmRvbVk7XG5cbiAgd2hpbGUgKFxuICAgIHdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICB9XG5cbiAgY29ycmVjdENlbGwoeCwgeSk7XG59O1xuXG4vLyBBdHRhY2tzIGFuIGFkamFjZW50IGNlbGwgaWYgY29tcHV0ZXIgcHJldmlvdXNseSBoaXRcbmNvbnN0IGFkamFjZW50QXR0YWNrID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgW3gsIHldLFxuICByYW5kb21YLFxuICByYW5kb21ZXG4pID0+IHtcbiAgY29uc3QgdmFsaWRBZGphY2VudCA9IFtdO1xuXG4gIC8vIElmIGFkamFjZW50IGNlbGwgaXMgd2l0aGluIGdhbWVib2FyZCBhbmQgaGFzbid0IGJlZW4gY2xpY2tlZFxuICBpZiAoXG4gICAgeSArIDEgPj0gMCAmJlxuICAgIHkgKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5ICsgMVxuICAgIF0pXG4gICkge1xuICAgIHZhbGlkQWRqYWNlbnQucHVzaChbeCwgeSArIDFdKTtcbiAgfVxuXG4gIGlmIChcbiAgICB4IC0gMSA+PSAwICYmXG4gICAgeCAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCAtIDEsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgdmFsaWRBZGphY2VudC5wdXNoKFt4IC0gMSwgeV0pO1xuICB9XG5cbiAgaWYgKFxuICAgIHkgLSAxID49IDAgJiZcbiAgICB5IC0gMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSAtIDFcbiAgICBdKVxuICApIHtcbiAgICB2YWxpZEFkamFjZW50LnB1c2goW3gsIHkgLSAxXSk7XG4gIH1cblxuICBpZiAoXG4gICAgeCArIDEgPj0gMCAmJlxuICAgIHggKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggKyAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIHZhbGlkQWRqYWNlbnQucHVzaChbeCArIDEsIHldKTtcbiAgfVxuXG4gIGlmICh2YWxpZEFkamFjZW50Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCByYW5kb21EaXJlY3Rpb24gPVxuICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHZhbGlkQWRqYWNlbnQubGVuZ3RoIC0gMSAtIDAgKyAxKSkgKyAwO1xuXG4gICAgY29ycmVjdENlbGwoXG4gICAgICB2YWxpZEFkamFjZW50W3JhbmRvbURpcmVjdGlvbl1bMF0sXG4gICAgICB2YWxpZEFkamFjZW50W3JhbmRvbURpcmVjdGlvbl1bMV1cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIG5ld1JhbmRvbUNvb3JkaW5hdGUocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIHJhbmRvbVgsIHJhbmRvbVkpO1xuICB9XG59O1xuXG4vLyBDaG9vc2VzIGEgY29vcmRpbmF0ZSBmb3IgQ29tcHV0ZXIncyB0dXJuXG5jb25zdCBjb21wdXRlckNsaWNrID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCBbeCwgeV0sIGhpdFN0YXR1cykgPT4ge1xuICBpZiAoY3VycmVudFR1cm4ucGxheWVyTmFtZSA9PT0gXCJDb21wdXRlclwiKSB7XG4gICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBhZGphY2VudEF0dGFjayhcbiAgICAgICAgcGxheWVyQXR0YWNraW5nLFxuICAgICAgICByZWNlaXZpbmdBdHRhY2ssXG4gICAgICAgIFt4LCB5XSxcbiAgICAgICAgcmFuZG9tWCxcbiAgICAgICAgcmFuZG9tWVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3UmFuZG9tQ29vcmRpbmF0ZShwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgcmFuZG9tWCwgcmFuZG9tWSk7XG4gICAgfVxuICB9XG59O1xuXG4vLyBEaXNwbGF5cyB3aW5uZXIgb2YgdGhlIGdhbWVcbmNvbnN0IGRpc3BsYXlXaW5uZXIgPSAocGxheWVyQXR0YWNraW5nKSA9PiB7XG4gIGNvbnNvbGUubG9nKHBsYXllckF0dGFja2luZy5uYW1lKTtcbn07XG5cbi8vIEVuZHMgZ2FtZSBhbmQgZGlzcGxheXMgd2lubmVyXG5jb25zdCBwbGF5ZXJXaW4gPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKHJlY2VpdmluZ0F0dGFjay5wbGF5ZXJCb2FyZC5hbGxTdW5rKFswLCAwXSkpIHtcbiAgICBvbk9mZi5zdGF0dXMgPSBcIm9mZlwiO1xuXG4gICAgZGlzcGxheVdpbm5lcihwbGF5ZXJBdHRhY2tpbmcpO1xuICB9XG59O1xuXG4vLyBUcmFja3MgdGhlIGhlYWQgb2YgdGhlIHNoaXBcbmNvbnN0IHRyYWNrSGVhZCA9IChzaGlwT2JqZWN0LCBzaGlwTmFtZSwgeENvb3JkLCB5Q29vcmQpID0+IHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2hpcE9iamVjdCkpIHtcbiAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgdmFsdWUuaGVhZCA9IFt4Q29vcmQsIHlDb29yZF07XG4gICAgfVxuICB9XG59O1xuXG4vLyBUcmFja3Mgc2hpcCBvcmllbnRhdGlvbiB3aGVuIHBsYWNlZFxuY29uc3QgdHJhY2tPcmllbnRhdGlvbiA9IChzaGlwT2JqZWN0LCBzaGlwTmFtZSwgdmFsaWREaXJlY3Rpb24pID0+IHtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2hpcE9iamVjdCkpIHtcbiAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgdmFsdWUub3JpZW50YXRpb24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZERpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgdmFsdWUub3JpZW50YXRpb24gPSBcImxlZnRcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICB2YWx1ZS5vcmllbnRhdGlvbiA9IFwiZG93blwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWREaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICB2YWx1ZS5vcmllbnRhdGlvbiA9IFwidXBcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHZhbGlkUGxhY2VtZW50LFxuICBwbGFjZUNvbXB1dGVyU2hpcHMsXG4gIHdhc0Nvb3JkaW5hdGVDbGlja2VkLFxuICB3aG9zZVR1cm4sXG4gIHBsYXllcldpbixcbiAgY29tcHV0ZXJDbGljayxcbiAgdHJhY2tIZWFkLFxuICB0cmFja09yaWVudGF0aW9uLFxuICB2ZXJ0aWNhbFBsYWNlbWVudCxcbiAgaG9yaXpvbnRhbFBsYWNlbWVudFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==