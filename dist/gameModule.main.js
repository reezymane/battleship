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
const player1 = player("Player1");
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
/* harmony export */   "hideWinner": () => (/* binding */ hideWinner),
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
  const winnerDiv = document.querySelector(".winnerDiv");
  const para = document.createElement("p");

  para.textContent = `${playerAttacking.name} wins!`;

  winnerDiv.appendChild(para);
  winnerDiv.style.display = "flex";
};

// Hides winner div
const hideWinner = () => {
  const winnerDiv = document.querySelector(".winnerDiv");
  winnerDiv.removeChild(winnerDiv.firstChild);

  winnerDiv.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLHFEQUFlOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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Q0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sOERBQXNCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCOztBQUU5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFZOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFjRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZU1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGx1c3BsdXMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGNvbnNpc3RlbnQtcmV0dXJuICovXG5pbXBvcnQgeyBjdXJyZW50VHVybiwgcGxheWVyMSwgcGxheWVyMVNoaXBzLCBvbk9mZiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuaW1wb3J0IHtcbiAgd2FzQ29vcmRpbmF0ZUNsaWNrZWQsXG4gIHdob3NlVHVybixcbiAgcGxheWVyV2luLFxuICBjb21wdXRlckNsaWNrXG59IGZyb20gXCIuL2dhbWVNb2R1bGVcIjtcblxuLy8gU3RvcmVzIGRpdiBJRCBhbmQgbWFrZXMgZGl2IG9wYXF1ZVxuY29uc3QgZHJhZyA9IChldiwgZGl2KSA9PiB7XG4gIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dFwiLCBldi50YXJnZXQuaWQpO1xuXG4gIGRpdi5zdHlsZS5vcGFjaXR5ID0gXCIwLjRcIjtcbn07XG5cbmNvbnN0IGRyYWdPdmVyID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG4vLyBSZXN0b3JlcyBvcGFjaXR5IHdoZW4gZHJhZyBlbmRzXG5jb25zdCBkcmFnRW5kID0gKGRpdikgPT4ge1xuICBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiO1xufTtcblxuLy8gUmV0dXJucyBsZW5ndGggb2YgdGhlIHNoaXAgYmVpbmcgZHJvcHBlZFxuY29uc3Qgc2hpcElkZW50aWZ5ID0gKGV2KSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGRhdGEgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gIGxldCBsZW5ndGg7XG5cbiAgaWYgKGRhdGEuaW5jbHVkZXMoXCJiYXR0bGVzaGlwXCIpKSB7XG4gICAgbGVuZ3RoID0gNDtcbiAgfVxuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwiZGVzdHJveWVyXCIpKSB7XG4gICAgbGVuZ3RoID0gMztcbiAgfVxuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwic3VibWFyaW5lXCIpKSB7XG4gICAgbGVuZ3RoID0gMjtcbiAgfVxuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwicGF0cm9sQm9hdFwiKSkge1xuICAgIGxlbmd0aCA9IDE7XG4gIH1cblxuICByZXR1cm4geyBzaGlwTmFtZTogZGF0YSwgbGVuZ3RoIH07XG59O1xuXG4vLyBBZGRzIGRyb3BwZWQgc2hpcHMgdG8gcGxheWVyIGdhbWVib2FyZFxuY29uc3QgZHJvcFRvR2FtZWJvYXJkID0gKGV2LCB4LCB5LCBzaGlwTmFtZSwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSA9PiB7XG4gIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gSXRlcmF0ZXMgdGhyb3VnaCBvYmplY3QgdG8gcGxhY2UgY29ycmVjdCBzaGlwIG9uIGdhbWVib2FyZCwgaW4gY29ycmVjdCBkaXJlY3Rpb25cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYXllcjFTaGlwcykpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICAgICAgeSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxheWVyMVNoaXBzKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgICAgICB5LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIxU2hpcHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgICAgIHgrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIxU2hpcHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgICAgIHgtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy8gVG9nZ2xlcyBkcmFnZ2FibGUgc2hpcCBkaXNwbGF5c1xuY29uc3QgdG9nZ2xlU2hpcHMgPSAoc2hpcElELCBkaXNwbGF5KSA9PiB7XG4gIGNvbnN0IHNoaXBUb0hpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNoaXBJRCk7XG5cbiAgc2hpcFRvSGlkZS5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbn07XG5cbi8vIENoZWNrcyBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuY29uc3Qgc2hpcHNEZXBsb3llZCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBPdXRlciBkaXZcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2hpcHNbaV0uc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIENyZWF0ZXMgdGhlIGZpcnN0IHJvdyBvZiB0aGUgdGFibGUgYW5kIG5hbWVzIGNvbHVtbnNcbmNvbnN0IGNyZWF0ZUNvbHVtbkhlYWRpbmdzID0gKHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3N9YCk7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgZW1wdHlIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgcm93LmFwcGVuZENoaWxkKGVtcHR5SGVhZGluZyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgY29uc3QgbmV3SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcbiAgICBuZXdIZWFkaW5nLnRleHRDb250ZW50ID0gU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIGkpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChuZXdIZWFkaW5nKTtcbiAgfVxufTtcblxuLy8gQWRkcyBuZXh0IHJvdyB3aXRoIGhlYWRpbmcgYW5kIGVtcHR5IGNlbGxzXG5jb25zdCBjcmVhdGVSb3dzID0gKHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3RhYmxlQ2xhc3N9YCk7XG5cbiAgZm9yIChsZXQgYmlnSSA9IDA7IGJpZ0kgPCAxMDsgYmlnSSsrKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gYmlnSSArIDE7XG5cbiAgICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgcm93LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgZm9yIChsZXQgbGl0dGxlSSA9IDA7IGxpdHRsZUkgPCAxMDsgbGl0dGxlSSsrKSB7XG4gICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgY29uc3QgY2VsbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICBjZWxsRGl2LmNsYXNzTGlzdC5hZGQoXCJjZWxsRGl2XCIpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIiwgYmlnSSk7XG4gICAgICBjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEteVwiLCBsaXR0bGVJKTtcbiAgICAgIGNlbGxEaXYuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGJpZ0kpO1xuICAgICAgY2VsbERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgbGl0dGxlSSk7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQoY2VsbERpdik7XG4gICAgfVxuICB9XG59O1xuXG4vLyBBZGRzIHRhYmxlIHRvIHAxQm9hcmQgZGl2XG5jb25zdCBjcmVhdGVUYWJsZSA9IChib2FyZENsYXNzLCB0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihib2FyZENsYXNzKTtcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG5cbiAgdGFibGUuY2xhc3NMaXN0LmFkZCh0YWJsZUNsYXNzKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gIGNyZWF0ZUNvbHVtbkhlYWRpbmdzKHRhYmxlQ2xhc3MpO1xuICBjcmVhdGVSb3dzKHRhYmxlQ2xhc3MpO1xufTtcblxuLy8gQ29sb3JzIHRoZSBncmlkIHNwYWNlIG9mIGdpdmVuIGNvb3JkaW5hdGVcbmNvbnN0IGNvbG9yQ29vcmRpbmF0ZSA9IChbYSwgYl0pID0+IHtcbiAgY29uc3QgZ3JpZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wMUdyaWQgLmNlbGxcIik7XG5cbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoY2VsbC5kYXRhc2V0LnggPT09IGAke2F9YCAmJiBjZWxsLmRhdGFzZXQueSA9PT0gYCR7Yn1gKSB7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwieWVsbG93XCI7XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIENoYW5nZXMgY2VsbCBjb2xvciB3aGVuIGF0dGFja2VkXG5jb25zdCBjb2xvck9uQXR0YWNrID0gKGNlbGwsIGhpdFN0YXR1cykgPT4ge1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEuY2xhc3NMaXN0LmFkZChcInBhcmFcIik7XG5cbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidGFuXCI7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwi4oCiXCI7XG5cbiAgICBjZWxsLmZpcnN0Q2hpbGQuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIH1cblxuICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInBpbmtcIjtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuICAgIGNlbGwuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgIGNlbGwuZmlyc3RDaGlsZC5hcHBlbmRDaGlsZChwYXJhKTtcbiAgfVxufTtcblxuLy8gUmVtb3ZlcyBjZWxsIGNvbG9yIGFuZCB0ZXh0XG5jb25zdCByZXNldENlbGwgPSAoKSA9PiB7XG4gIGNvbnN0IGdyaWRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2VsbFwiKTtcbiAgZ3JpZENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICBjZWxsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHdoaXRlXCI7XG4gICAgY2VsbC5zdHlsZS5jb2xvciA9IFwiaW5pdGlhbFwiO1xuXG4gICAgaWYgKGNlbGwuZmlyc3RDaGlsZC5maXJzdENoaWxkICE9PSBudWxsKSB7XG4gICAgICBjZWxsLmZpcnN0Q2hpbGQucmVtb3ZlQ2hpbGQoY2VsbC5maXJzdENoaWxkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBBdHRhY2tzIGdhbWVib2FyZCBhbmQgY2hlY2tzIHNoaXBzIHdoZW4gY29vcmRpbmF0ZSBjbGlja2VkXG5jb25zdCBjbGlja0F0dGFjayA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgdGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFibGVDbGFzc30gLmNlbGxgKTtcblxuICBncmlkU3F1YXJlcy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID09PSBwbGF5ZXJBdHRhY2tpbmcubmFtZSAmJlxuICAgICAgICBvbk9mZi5zdGF0dXMgPT09IFwib25cIlxuICAgICAgKSB7XG4gICAgICAgIC8vIFNldHMgY29vcmRpbmF0ZSB2YWx1ZXMgYmFzZWQgb24gY2VsbCBkYXRhXG4gICAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZGF0YXNldC55KTtcblxuICAgICAgICBpZiAoIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHBsYXllckF0dGFja2luZywgW3gsIHldKSkge1xuICAgICAgICAgIC8vIEFkZHMgY29vcmRpbmF0ZSB0byBhcnJheSBvZiBjbGlja2VkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLnB1c2goW3gsIHldKTtcblxuICAgICAgICAgIGNvbnN0IGhpdFN0YXR1cyA9IHJlY2VpdmluZ0F0dGFjay5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG5cbiAgICAgICAgICBjb2xvck9uQXR0YWNrKGNlbGwsIGhpdFN0YXR1cyk7XG5cbiAgICAgICAgICB3aG9zZVR1cm4oaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayk7XG5cbiAgICAgICAgICBwbGF5ZXJXaW4ocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spO1xuXG4gICAgICAgICAgY29tcHV0ZXJDbGljayhwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVGFibGUsXG4gIGNvbG9yQ29vcmRpbmF0ZSxcbiAgY2xpY2tBdHRhY2ssXG4gIGRyYWcsXG4gIGRyYWdPdmVyLFxuICBzaGlwSWRlbnRpZnksXG4gIGRyb3BUb0dhbWVib2FyZCxcbiAgdG9nZ2xlU2hpcHMsXG4gIHJlc2V0Q2VsbCxcbiAgc2hpcHNEZXBsb3llZCxcbiAgZHJhZ0VuZFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IHsgY29sb3JDb29yZGluYXRlLCByZXNldENlbGwgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7IHZlcnRpY2FsUGxhY2VtZW50LCBob3Jpem9udGFsUGxhY2VtZW50IH0gZnJvbSBcIi4vZ2FtZU1vZHVsZVwiO1xuXG4vLyBEZXRlcm1pbmVzIGlmIGFuIGF0dGFjayBoaXRzIG9yIG1pc3Nlc1xuY29uc3QgaGl0T3JNaXNzID0gKGluQ29vcmRpbmF0ZSkgPT4ge1xuICBpZiAoaW5Db29yZGluYXRlID09PSAwKSByZXR1cm4gXCJtaXNzXCI7XG5cbiAgaWYgKGluQ29vcmRpbmF0ZSA9PT0gMSkgcmV0dXJuIFwiYWxyZWFkeUhpdFwiO1xuXG4gIHJldHVybiBcImhpdFwiO1xufTtcblxuLy8gQ3JlYXRlcyBzaGlwcyB0byBwbGFjZSBvbiBnYW1lYm9hcmRcbmNvbnN0IHNoaXAgPSAobGVuZ3RoKSA9PiAoe1xuICBsZW5ndGgsXG4gIGhpdEFtb3VudDogMCxcbiAgc3VuazogZmFsc2UsXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdEFtb3VudCArPSAxO1xuICB9LFxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0QW1vdW50ID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gIH0sXG4gIHJlc2V0U2hpcCgpIHtcbiAgICB0aGlzLmhpdEFtb3VudCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cbn0pO1xuXG4vLyBDcmVhdGVzIGEgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmQgPSAoKSA9PiAoe1xuICBib2FyZDogW1xuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXVxuICBdLFxuICAvLyBNYXJrcyBhdHRhY2tzIG9uIGdhbWVib2FyZFxuICByZWNlaXZlQXR0YWNrKFthLCBiXSkge1xuICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG4gICAgY29uc3QgaGl0U3RhdHVzID0gaGl0T3JNaXNzKGluQ29vcmRpbmF0ZSk7XG5cbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImhpdFwiKSB7XG4gICAgICBpbkNvb3JkaW5hdGUuaGl0KCk7XG4gICAgICBpbkNvb3JkaW5hdGUuaXNTdW5rKCk7XG4gICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgICB0aGlzLmJvYXJkW2FdW2JdID0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGl0U3RhdHVzO1xuICB9LFxuICAvLyBDaGVja3MgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gIGFsbFN1bmsoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5Db29yZGluYXRlLnN1bmsgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBSdW5zIGEgZnVuY3Rpb24gdG8gY29sb3IgZ3JpZCBzcGFjZSBpZlxuICAvLyBpdCBjb250YWlucyBhIHNoaXBcbiAgY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICBjb2xvckNvb3JkaW5hdGUoW2EsIGJdKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSwgYiArIDFdKTtcbiAgICB9XG5cbiAgICBpZiAoYiA+IDkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EgKyAxLCAwXSk7XG4gICAgfVxuICB9LFxuICAvLyBDaGVja3MgaWYgdGhlcmUgYXJlIGVub3VnaCBzcGFjZXMgcmlnaHQvbGVmdC9kb3duL3VwIGZvciBhIHNoaXBcbiAgZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBJZiBjb29yZGluYXRlIGlzIG9mZiB0aGUgYm9hcmQsIHJldHVybiBmYWxzZVxuICAgIGlmICh4Q29vcmQgPCAxMCAmJiB4Q29vcmQgPiAtMSAmJiB5Q29vcmQgPCAxMCAmJiB5Q29vcmQgPiAtMSkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG5cbiAgICAgIC8vIElmIGEgc2hpcCBpcyBhbHJlYWR5IGluIGNvb3JkaW5hdGUsIHJldHVybiBmYWxzZVxuICAgICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBmdWxsIGxlbmd0aCBvZiBzaGlwIGlzIHJlYWNoZWQsIHJldHVybiB0cnVlXG4gICAgICBpZiAoc2hpcExlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgbmV4dCBjb29yZGluYXRlIGluIGdpdmVuIGRpcmVjdGlvblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwidXBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBjb29yZGluYXRlIGlzIHVuZGVmaW5lZCBvciBlbXB0eVxuICBzcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkKSB7XG4gICAgaWYgKHhDb29yZCA8IDEwICYmIHhDb29yZCA+IC0xICYmIHlDb29yZCA8IDEwICYmIHlDb29yZCA+IC0xKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF0gPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgLy8gQ2hlY2tzIGlmIHRoZXJlJ3MgZW5vdWdoIHNwYWNlIGJldHdlZW4gc2hpcHMgc2V0IGFuZCBzaGlwcyBiZWluZyBkcm9wcGVkXG4gIHNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgc2hpcExlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgLy8gQ2hlY2tzIGlmIHN1cnJvdW5kaW5nIGNvb3JkaW5hdGVzIGFyZSBlbXB0eS91bmRlZmluZWRcbiAgICBjb25zdCB0b3AgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkKTtcbiAgICBjb25zdCB0b3BSaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQgKyAxKTtcbiAgICBjb25zdCByaWdodCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbVJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQpO1xuICAgIGNvbnN0IGJvdHRvbUxlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkIC0gMSk7XG4gICAgY29uc3QgbGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQsIHlDb29yZCAtIDEpO1xuICAgIGNvbnN0IHRvcExlZnQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkIC0gMSwgeUNvb3JkIC0gMSk7XG5cbiAgICAvLyBJZiBhbnkgc3Vycm91bmRpbmcgY29vcmRpbmF0ZXMgYXJlbid0IGVtcHR5LCByZXR1cm4gZmFsc2VcbiAgICBpZiAoXG4gICAgICAhKFxuICAgICAgICB0b3AgJiZcbiAgICAgICAgdG9wUmlnaHQgJiZcbiAgICAgICAgcmlnaHQgJiZcbiAgICAgICAgYm90dG9tUmlnaHQgJiZcbiAgICAgICAgYm90dG9tICYmXG4gICAgICAgIGJvdHRvbUxlZnQgJiZcbiAgICAgICAgbGVmdCAmJlxuICAgICAgICB0b3BMZWZ0XG4gICAgICApXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNoaXBMZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG5leHQgY29vcmRpbmF0ZSBpbiBnaXZlbiBkaXJlY3Rpb25cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCArIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQgLSAxLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCArIDEsIHlDb29yZCwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkIC0gMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH0sXG4gIC8vIENsZWFycyBzaGlwcyBhbmQgbWlzc2VzIGZyb20gZ2FtZWJvYXJkXG4gIGNsZWFyQm9hcmQoW2EsIGJdKSB7XG4gICAgaWYgKGEgPiA5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGIgPCAxMCkge1xuICAgICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcblxuICAgICAgaWYgKGluQ29vcmRpbmF0ZSAhPT0gMCkge1xuICAgICAgICB0aGlzLmJvYXJkW2FdW2JdID0gMDtcblxuICAgICAgICByZXR1cm4gdGhpcy5jbGVhckJvYXJkKFthLCBiICsgMV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jbGVhckJvYXJkKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYXJCb2FyZChbYSArIDEsIDBdKTtcbiAgICB9XG4gIH0sXG4gIC8vIERlbGV0ZXMgc2luZ2xlIHNoaXBcbiAgZGVsZXRlU2hpcChoZWFkQ29vcmRpbmF0ZSwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaGVhZENvb3JkaW5hdGVbMF1dW2hlYWRDb29yZGluYXRlWzFdICsgaV0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaGVhZENvb3JkaW5hdGVbMF1dW2hlYWRDb29yZGluYXRlWzFdIC0gaV0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiZG93blwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaGVhZENvb3JkaW5hdGVbMF0gKyBpXVtoZWFkQ29vcmRpbmF0ZVsxXV0gPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidXBcIikge1xuICAgICAgICB0aGlzLmJvYXJkW2hlYWRDb29yZGluYXRlWzBdIC0gaV1baGVhZENvb3JkaW5hdGVbMV1dID0gMDtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIC8vIFJlLWFkZHMgc2luZ2xlIHNoaXAgdG8gZ2FtZWJvYXJkXG4gIHJlYWRkU2hpcChzaGlwVG9SZWFkZCwgb3JpZW50YXRpb24sIGxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbc2hpcFRvUmVhZGQuaGVhZFswXV1bc2hpcFRvUmVhZGQuaGVhZFsxXSArIGldID0gc2hpcFRvUmVhZGQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmllbnRhdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtzaGlwVG9SZWFkZC5oZWFkWzBdXVtzaGlwVG9SZWFkZC5oZWFkWzFdIC0gaV0gPSBzaGlwVG9SZWFkZDtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICB0aGlzLmJvYXJkW3NoaXBUb1JlYWRkLmhlYWRbMF0gKyBpXVtzaGlwVG9SZWFkZC5oZWFkWzFdXSA9IHNoaXBUb1JlYWRkO1xuICAgICAgfVxuXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwidXBcIikge1xuICAgICAgICB0aGlzLmJvYXJkW3NoaXBUb1JlYWRkLmhlYWRbMF0gLSBpXVtzaGlwVG9SZWFkZC5oZWFkWzFdXSA9IHNoaXBUb1JlYWRkO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLy8gQ2hhbmdlcyBvcmllbnRhdGlvbiBvZiBhIHNoaXBcbiAgY2hhbmdlT3JpZW50YXRpb24ocGxheWVyQ2xpY2tpbmcsIHhDb29yZCwgeUNvb3JkKSB7XG4gICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFt4Q29vcmRdW3lDb29yZF07XG4gICAgaWYgKHR5cGVvZiBpbkNvb3JkaW5hdGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRoaXMuZGVsZXRlU2hpcChcbiAgICAgICAgaW5Db29yZGluYXRlLmhlYWQsXG4gICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbixcbiAgICAgICAgaW5Db29yZGluYXRlLmxlbmd0aFxuICAgICAgKTtcblxuICAgICAgaWYgKFxuICAgICAgICBpbkNvb3JkaW5hdGUub3JpZW50YXRpb24gPT09IFwicmlnaHRcIiB8fFxuICAgICAgICBpbkNvb3JkaW5hdGUub3JpZW50YXRpb24gPT09IFwibGVmdFwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UGxhY2VtZW50ID0gdmVydGljYWxQbGFjZW1lbnQoXG4gICAgICAgICAgcGxheWVyQ2xpY2tpbmcsXG4gICAgICAgICAgeENvb3JkLFxuICAgICAgICAgIHlDb29yZCxcbiAgICAgICAgICBpbkNvb3JkaW5hdGUubGVuZ3RoXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG5ld1BsYWNlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbiA9IG5ld1BsYWNlbWVudDtcblxuICAgICAgICAgIHRoaXMucmVhZGRTaGlwKGluQ29vcmRpbmF0ZSwgbmV3UGxhY2VtZW50LCBpbkNvb3JkaW5hdGUubGVuZ3RoKTtcblxuICAgICAgICAgIHJlc2V0Q2VsbCgpO1xuXG4gICAgICAgICAgdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFswLCAwXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZWFkZFNoaXAoXG4gICAgICAgICAgICBpbkNvb3JkaW5hdGUsXG4gICAgICAgICAgICBpbkNvb3JkaW5hdGUub3JpZW50YXRpb24sXG4gICAgICAgICAgICBpbkNvb3JkaW5hdGUubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBpbkNvb3JkaW5hdGUub3JpZW50YXRpb24gPT09IFwiZG93blwiIHx8XG4gICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbiA9PT0gXCJ1cFwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UGxhY2VtZW50ID0gaG9yaXpvbnRhbFBsYWNlbWVudChcbiAgICAgICAgICBwbGF5ZXJDbGlja2luZyxcbiAgICAgICAgICB4Q29vcmQsXG4gICAgICAgICAgeUNvb3JkLFxuICAgICAgICAgIGluQ29vcmRpbmF0ZS5sZW5ndGhcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobmV3UGxhY2VtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgaW5Db29yZGluYXRlLm9yaWVudGF0aW9uID0gbmV3UGxhY2VtZW50O1xuXG4gICAgICAgICAgdGhpcy5yZWFkZFNoaXAoaW5Db29yZGluYXRlLCBuZXdQbGFjZW1lbnQsIGluQ29vcmRpbmF0ZS5sZW5ndGgpO1xuXG4gICAgICAgICAgcmVzZXRDZWxsKCk7XG5cbiAgICAgICAgICB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoWzAsIDBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlYWRkU2hpcChcbiAgICAgICAgICAgIGluQ29vcmRpbmF0ZSxcbiAgICAgICAgICAgIGluQ29vcmRpbmF0ZS5vcmllbnRhdGlvbixcbiAgICAgICAgICAgIGluQ29vcmRpbmF0ZS5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuLy8gQ3JlYXRlcyBhIHBsYXllciBhbmQgYSBnYW1lYm9hcmQgZm9yIHRoZW1cbmNvbnN0IHBsYXllciA9IChuYW1lKSA9PiAoe1xuICBuYW1lLFxuICBwbGF5ZXJCb2FyZDogZ2FtZWJvYXJkKCksXG4gIG1hcmtlZFNwb3RzOiBbXSxcbiAgY2xlYXJNYXJrZWRTcG90cygpIHtcbiAgICB3aGlsZSAodGhpcy5tYXJrZWRTcG90cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm1hcmtlZFNwb3RzLnBvcCgpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIER5bmFtaWMgb2JqZWN0IHRvIHRyYWNrIHBsYXllciB0dXJuc1xuY29uc3QgY3VycmVudFR1cm4gPSB7XG4gIHBsYXllck5hbWU6IG51bGxcbn07XG5cbi8vIENyZWF0ZXMgcGxheWVycyBhbmQgYm9hcmRzXG5jb25zdCBwbGF5ZXIxID0gcGxheWVyKFwiUGxheWVyMVwiKTtcbmNvbnN0IHBsYXllcjIgPSBwbGF5ZXIoXCJDb21wdXRlclwiKTtcblxuLy8gQ3JlYXRlcyBwbGF5ZXIxIHNoaXBzXG5jb25zdCBwbGF5ZXIxU2hpcHMgPSB7XG4gIGJhdHRsZXNoaXAxOiBzaGlwKDQpLFxuICBkZXN0cm95ZXIxMTogc2hpcCgzKSxcbiAgZGVzdHJveWVyMTI6IHNoaXAoMyksXG4gIHN1Ym1hcmluZTExOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUxMjogc2hpcCgyKSxcbiAgc3VibWFyaW5lMTM6IHNoaXAoMiksXG4gIHBhdHJvbEJvYXQxMTogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDEyOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MTM6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQxNDogc2hpcCgxKVxufTtcblxuLy8gQ3JlYXRlcyBwbGF5ZXIyIHNoaXBzXG5jb25zdCBwbGF5ZXIyU2hpcHMgPSB7XG4gIGJhdHRsZXNoaXAyOiBzaGlwKDQpLFxuICBkZXN0cm95ZXIyMTogc2hpcCgzKSxcbiAgZGVzdHJveWVyMjI6IHNoaXAoMyksXG4gIHN1Ym1hcmluZTIxOiBzaGlwKDIpLFxuICBzdWJtYXJpbmUyMjogc2hpcCgyKSxcbiAgc3VibWFyaW5lMjM6IHNoaXAoMiksXG4gIHBhdHJvbEJvYXQyMTogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDIyOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MjM6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQyNDogc2hpcCgxKVxufTtcblxuLy8gRHluYW1pYyBvbi9vZmYgc3dpdGNoIGZvciBib2FyZCBldmVudCBsaXN0ZW5lcnNcbmNvbnN0IG9uT2ZmID0ge1xuICBzdGF0dXM6IG51bGwsXG4gIHJvdGF0ZTogXCJvblwiXG59O1xuXG5leHBvcnQge1xuICBzaGlwLFxuICBwbGF5ZXIsXG4gIGN1cnJlbnRUdXJuLFxuICBnYW1lYm9hcmQsXG4gIGhpdE9yTWlzcyxcbiAgcGxheWVyMSxcbiAgcGxheWVyMixcbiAgcGxheWVyMVNoaXBzLFxuICBwbGF5ZXIyU2hpcHMsXG4gIG9uT2ZmXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjdXJyZW50VHVybiwgcGxheWVyMiwgcGxheWVyMlNoaXBzLCBvbk9mZiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG4vLyBWZXJpZmllcyB2YWxpZCB2ZXJpdGljYWwgcGxhY2VtZW50XG5jb25zdCB2ZXJ0aWNhbFBsYWNlbWVudCA9IChwbGF5ZXIsIHhDb29yZCwgeUNvb3JkLCBsZW5ndGgpID0+IHtcbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJkb3duXCIpICYmXG4gICAgcGxheWVyLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcImRvd25cIilcbiAgKSB7XG4gICAgcmV0dXJuIFwiZG93blwiO1xuICB9XG5cbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJ1cFwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJ1cFwiKVxuICApIHtcbiAgICByZXR1cm4gXCJ1cFwiO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBWZXJpZmllcyB2YWxpZCBob3Jpem9udGFsIHBsYWNlbWVudFxuY29uc3QgaG9yaXpvbnRhbFBsYWNlbWVudCA9IChwbGF5ZXIsIHhDb29yZCwgeUNvb3JkLCBsZW5ndGgpID0+IHtcbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJyaWdodFwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJyaWdodFwiKVxuICApIHtcbiAgICByZXR1cm4gXCJyaWdodFwiO1xuICB9XG5cbiAgaWYgKFxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5lbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJsZWZ0XCIpICYmXG4gICAgcGxheWVyLnBsYXllckJvYXJkLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCwgbGVuZ3RoLCBcImxlZnRcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwibGVmdFwiO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG4vLyBWZXJpZmllcyB2YWxpZCBzaGlwIHBsYWNlbWVudFxuY29uc3QgdmFsaWRQbGFjZW1lbnQgPSAocGxheWVyLCB4Q29vcmQsIHlDb29yZCwgbGVuZ3RoKSA9PiB7XG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwicmlnaHRcIikgJiZcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwicmlnaHRcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgfVxuXG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwibGVmdFwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJsZWZ0XCIpXG4gICkge1xuICAgIHJldHVybiBcImxlZnRcIjtcbiAgfVxuXG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwiZG93blwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJkb3duXCIpXG4gICkge1xuICAgIHJldHVybiBcImRvd25cIjtcbiAgfVxuXG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwidXBcIikgJiZcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwidXBcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwidXBcIjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLy8gQ2hvb3NlcyBuZXcgY29vcmRpbmF0ZSBpZiBjb21wdXRlciBzaGlwIHBsYWNlbWVudCBpcyBpbnZhbGlkXG5jb25zdCB2YWxpZENvbXB1dGVyUGxhY2VtZW50ID0gKHJhbmRvbVgsIHJhbmRvbVksIHZhbHVlKSA9PiB7XG4gIGxldCB4ID0gcmFuZG9tWDtcbiAgbGV0IHkgPSByYW5kb21ZO1xuICBjb25zdCB2YWxpZERpcmVjdGlvbiA9IHZhbGlkUGxhY2VtZW50KHBsYXllcjIsIHgsIHksIHZhbHVlLmxlbmd0aCk7XG5cbiAgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICB5Kys7XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgIHktLTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsaWREaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgeCsrO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWxpZERpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgeC0tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcblxuICAgIHZhbGlkQ29tcHV0ZXJQbGFjZW1lbnQoeCwgeSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyBDaG9vc2VzIHJhbmRvbSBwbGFjZW1lbnQgZm9yIENvbXB1dGVyIHNoaXBzXG5jb25zdCBwbGFjZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIyU2hpcHMpKSB7XG4gICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG5cbiAgICB2YWxpZENvbXB1dGVyUGxhY2VtZW50KHJhbmRvbVgsIHJhbmRvbVksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gQ2hlY2tzIGlmIGNvb3JkaW5hdGUgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG5jb25zdCB3YXNDb29yZGluYXRlQ2xpY2tlZCA9IChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwb3QgPSBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHNbaV07XG5cbiAgICBpZiAoc3BvdFswXSA9PT0geCAmJiBzcG90WzFdID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBEZXRlcm1pbmVzIHdoaWNoIHBsYXllciBnb2VzIG5leHRcbmNvbnN0IHdob3NlVHVybiA9IChoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyQXR0YWNraW5nLm5hbWU7XG4gIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSBcImFscmVhZHlIaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcmVjZWl2aW5nQXR0YWNrLm5hbWU7XG4gIH1cbn07XG5cbi8vIFJldHVybnMgd2hpY2ggcGxheWVyIGlzICdDb21wdXRlcidcbmNvbnN0IHdob0lzQ29tcHV0ZXIgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKHBsYXllckF0dGFja2luZy5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcGxheWVyQXR0YWNraW5nO1xuICB9XG5cbiAgaWYgKHJlY2VpdmluZ0F0dGFjay5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcmVjZWl2aW5nQXR0YWNrO1xuICB9XG59O1xuXG4vLyBTZWxlY3RzIGNvcnJlY3QgY2VsbCBhbmQgY2xpY2tzIGl0XG5jb25zdCBjb3JyZWN0Q2VsbCA9ICh4LCB5KSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgY29vcmRpbmF0ZS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKE51bWJlcihjZWxsLmRhdGFzZXQueCkgPT09IHggJiYgTnVtYmVyKGNlbGwuZGF0YXNldC55KSA9PT0geSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNlbGwuY2xpY2soKTtcbiAgICAgIH0sIFwiMjAwMFwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU2V0cyBuZXcgKHJhbmRvbVgsIHJhbmRvbVkpIGlmIGNvbXB1dGVyIGNsaWNrZWQgY29vcmRpbmF0ZSBhbHJlYWR5XG5jb25zdCBuZXdSYW5kb21Db29yZGluYXRlID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIGxldCB4ID0gcmFuZG9tWDtcbiAgbGV0IHkgPSByYW5kb21ZO1xuXG4gIHdoaWxlIChcbiAgICB3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgfVxuXG4gIGNvcnJlY3RDZWxsKHgsIHkpO1xufTtcblxuLy8gQXR0YWNrcyBhbiBhZGphY2VudCBjZWxsIGlmIGNvbXB1dGVyIHByZXZpb3VzbHkgaGl0XG5jb25zdCBhZGphY2VudEF0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIFt4LCB5XSxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIGNvbnN0IHZhbGlkQWRqYWNlbnQgPSBbXTtcblxuICAvLyBJZiBhZGphY2VudCBjZWxsIGlzIHdpdGhpbiBnYW1lYm9hcmQgYW5kIGhhc24ndCBiZWVuIGNsaWNrZWRcbiAgaWYgKFxuICAgIHkgKyAxID49IDAgJiZcbiAgICB5ICsgMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSArIDFcbiAgICBdKVxuICApIHtcbiAgICB2YWxpZEFkamFjZW50LnB1c2goW3gsIHkgKyAxXSk7XG4gIH1cblxuICBpZiAoXG4gICAgeCAtIDEgPj0gMCAmJlxuICAgIHggLSAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggLSAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIHZhbGlkQWRqYWNlbnQucHVzaChbeCAtIDEsIHldKTtcbiAgfVxuXG4gIGlmIChcbiAgICB5IC0gMSA+PSAwICYmXG4gICAgeSAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHkgLSAxXG4gICAgXSlcbiAgKSB7XG4gICAgdmFsaWRBZGphY2VudC5wdXNoKFt4LCB5IC0gMV0pO1xuICB9XG5cbiAgaWYgKFxuICAgIHggKyAxID49IDAgJiZcbiAgICB4ICsgMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4ICsgMSxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICB2YWxpZEFkamFjZW50LnB1c2goW3ggKyAxLCB5XSk7XG4gIH1cblxuICBpZiAodmFsaWRBZGphY2VudC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmFuZG9tRGlyZWN0aW9uID1cbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh2YWxpZEFkamFjZW50Lmxlbmd0aCAtIDEgLSAwICsgMSkpICsgMDtcblxuICAgIGNvcnJlY3RDZWxsKFxuICAgICAgdmFsaWRBZGphY2VudFtyYW5kb21EaXJlY3Rpb25dWzBdLFxuICAgICAgdmFsaWRBZGphY2VudFtyYW5kb21EaXJlY3Rpb25dWzFdXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdSYW5kb21Db29yZGluYXRlKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCByYW5kb21YLCByYW5kb21ZKTtcbiAgfVxufTtcblxuLy8gQ2hvb3NlcyBhIGNvb3JkaW5hdGUgZm9yIENvbXB1dGVyJ3MgdHVyblxuY29uc3QgY29tcHV0ZXJDbGljayA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpID0+IHtcbiAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuXG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgYWRqYWNlbnRBdHRhY2soXG4gICAgICAgIHBsYXllckF0dGFja2luZyxcbiAgICAgICAgcmVjZWl2aW5nQXR0YWNrLFxuICAgICAgICBbeCwgeV0sXG4gICAgICAgIHJhbmRvbVgsXG4gICAgICAgIHJhbmRvbVlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1JhbmRvbUNvb3JkaW5hdGUocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRGlzcGxheXMgd2lubmVyIG9mIHRoZSBnYW1lXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllckF0dGFja2luZykgPT4ge1xuICBjb25zdCB3aW5uZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lckRpdlwiKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIHBhcmEudGV4dENvbnRlbnQgPSBgJHtwbGF5ZXJBdHRhY2tpbmcubmFtZX0gd2lucyFgO1xuXG4gIHdpbm5lckRpdi5hcHBlbmRDaGlsZChwYXJhKTtcbiAgd2lubmVyRGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn07XG5cbi8vIEhpZGVzIHdpbm5lciBkaXZcbmNvbnN0IGhpZGVXaW5uZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHdpbm5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyRGl2XCIpO1xuICB3aW5uZXJEaXYucmVtb3ZlQ2hpbGQod2lubmVyRGl2LmZpcnN0Q2hpbGQpO1xuXG4gIHdpbm5lckRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59O1xuXG4vLyBFbmRzIGdhbWUgYW5kIGRpc3BsYXlzIHdpbm5lclxuY29uc3QgcGxheWVyV2luID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChyZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQuYWxsU3VuayhbMCwgMF0pKSB7XG4gICAgb25PZmYuc3RhdHVzID0gXCJvZmZcIjtcblxuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyQXR0YWNraW5nKTtcbiAgfVxufTtcblxuLy8gVHJhY2tzIHRoZSBoZWFkIG9mIHRoZSBzaGlwXG5jb25zdCB0cmFja0hlYWQgPSAoc2hpcE9iamVjdCwgc2hpcE5hbWUsIHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNoaXBPYmplY3QpKSB7XG4gICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgIHZhbHVlLmhlYWQgPSBbeENvb3JkLCB5Q29vcmRdO1xuICAgIH1cbiAgfVxufTtcblxuLy8gVHJhY2tzIHNoaXAgb3JpZW50YXRpb24gd2hlbiBwbGFjZWRcbmNvbnN0IHRyYWNrT3JpZW50YXRpb24gPSAoc2hpcE9iamVjdCwgc2hpcE5hbWUsIHZhbGlkRGlyZWN0aW9uKSA9PiB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNoaXBPYmplY3QpKSB7XG4gICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgIGlmICh2YWxpZERpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgIHZhbHVlLm9yaWVudGF0aW9uID0gXCJyaWdodFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWREaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHZhbHVlLm9yaWVudGF0aW9uID0gXCJsZWZ0XCI7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZERpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICAgICAgdmFsdWUub3JpZW50YXRpb24gPSBcImRvd25cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgICAgdmFsdWUub3JpZW50YXRpb24gPSBcInVwXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQge1xuICB2YWxpZFBsYWNlbWVudCxcbiAgcGxhY2VDb21wdXRlclNoaXBzLFxuICB3YXNDb29yZGluYXRlQ2xpY2tlZCxcbiAgd2hvc2VUdXJuLFxuICBwbGF5ZXJXaW4sXG4gIGNvbXB1dGVyQ2xpY2ssXG4gIHRyYWNrSGVhZCxcbiAgdHJhY2tPcmllbnRhdGlvbixcbiAgdmVydGljYWxQbGFjZW1lbnQsXG4gIGhvcml6b250YWxQbGFjZW1lbnQsXG4gIGhpZGVXaW5uZXJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=