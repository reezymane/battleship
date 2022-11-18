"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["dom"],{

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

// Removes cell color and text
const resetCell = () => {
  const gridCells = document.querySelectorAll(".cell");
  gridCells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
    cell.style.border = "1px solid white";
    cell.style.color = "initial";
    cell.textContent = "";
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
  status: null
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
/* harmony export */   "placeComputerShips": () => (/* binding */ placeComputerShips),
/* harmony export */   "playerWin": () => (/* binding */ playerWin),
/* harmony export */   "trackHead": () => (/* binding */ trackHead),
/* harmony export */   "validPlacement": () => (/* binding */ validPlacement),
/* harmony export */   "wasCoordinateClicked": () => (/* binding */ wasCoordinateClicked),
/* harmony export */   "whoseTurn": () => (/* binding */ whoseTurn)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */


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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0scURBQWU7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQWFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlNGO0FBQ0E7QUFDQTtBQUNBO0FBQ3dFOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsK0NBQU87O0FBRS9DO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QyxNQUFNLGlFQUF5QjtBQUMvQjtBQUNBO0FBQ0EsSUFBSTtBQUNKLG9CQUFvQixrQkFBa0I7QUFDdEMsTUFBTSxpRUFBeUI7QUFDL0I7QUFDQTtBQUNBLElBQUk7QUFDSixvQkFBb0Isa0JBQWtCO0FBQ3RDLE1BQU0saUVBQXlCO0FBQy9CO0FBQ0E7QUFDQSxJQUFJO0FBQ0osb0JBQW9CLGtCQUFrQjtBQUN0QyxNQUFNLGlFQUF5QjtBQUMvQjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxvREFBWTtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdDQUF3QztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQXNCO0FBQzFCLElBQUk7QUFDSixJQUFJLDhEQUFzQjtBQUMxQixJQUFJO0FBQ0osSUFBSSw4REFBc0I7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLDhEQUFzQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBWTs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVNb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IHsgY3VycmVudFR1cm4sIHBsYXllcjEsIHBsYXllcjFTaGlwcywgb25PZmYgfSBmcm9tIFwiLi9mYWN0b3JpZXNcIjtcbmltcG9ydCB7XG4gIHdhc0Nvb3JkaW5hdGVDbGlja2VkLFxuICB3aG9zZVR1cm4sXG4gIHBsYXllcldpbixcbiAgY29tcHV0ZXJDbGlja1xufSBmcm9tIFwiLi9nYW1lTW9kdWxlXCI7XG5cbi8vIFN0b3JlcyBkaXYgSUQgYW5kIG1ha2VzIGRpdiBvcGFxdWVcbmNvbnN0IGRyYWcgPSAoZXYsIGRpdikgPT4ge1xuICBldi5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHRcIiwgZXYudGFyZ2V0LmlkKTtcblxuICBkaXYuc3R5bGUub3BhY2l0eSA9IFwiMC40XCI7XG59O1xuXG5jb25zdCBkcmFnT3ZlciA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLy8gUmVzdG9yZXMgb3BhY2l0eSB3aGVuIGRyYWcgZW5kc1xuY29uc3QgZHJhZ0VuZCA9IChkaXYpID0+IHtcbiAgZGl2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn07XG5cbi8vIFJldHVybnMgbGVuZ3RoIG9mIHRoZSBzaGlwIGJlaW5nIGRyb3BwZWRcbmNvbnN0IHNoaXBJZGVudGlmeSA9IChldikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBkYXRhID0gZXYuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0XCIpO1xuICBsZXQgbGVuZ3RoO1xuXG4gIGlmIChkYXRhLmluY2x1ZGVzKFwiYmF0dGxlc2hpcFwiKSkge1xuICAgIGxlbmd0aCA9IDQ7XG4gIH1cblxuICBpZiAoZGF0YS5pbmNsdWRlcyhcImRlc3Ryb3llclwiKSkge1xuICAgIGxlbmd0aCA9IDM7XG4gIH1cblxuICBpZiAoZGF0YS5pbmNsdWRlcyhcInN1Ym1hcmluZVwiKSkge1xuICAgIGxlbmd0aCA9IDI7XG4gIH1cblxuICBpZiAoZGF0YS5pbmNsdWRlcyhcInBhdHJvbEJvYXRcIikpIHtcbiAgICBsZW5ndGggPSAxO1xuICB9XG5cbiAgcmV0dXJuIHsgc2hpcE5hbWU6IGRhdGEsIGxlbmd0aCB9O1xufTtcblxuLy8gQWRkcyBkcm9wcGVkIHNoaXBzIHRvIHBsYXllciBnYW1lYm9hcmRcbmNvbnN0IGRyb3BUb0dhbWVib2FyZCA9IChldiwgeCwgeSwgc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikgPT4ge1xuICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIC8vIEl0ZXJhdGVzIHRocm91Z2ggb2JqZWN0IHRvIHBsYWNlIGNvcnJlY3Qgc2hpcCBvbiBnYW1lYm9hcmQsIGluIGNvcnJlY3QgZGlyZWN0aW9uXG4gIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIxU2hpcHMpKSB7XG4gICAgICAgIGlmIChrZXkgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgcGxheWVyMS5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgICAgIHkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBsYXllcjFTaGlwcykpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBwbGF5ZXIxLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICAgICAgeS0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGRpcmVjdGlvbiA9PT0gXCJkb3duXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxheWVyMVNoaXBzKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgICAgICB4Kys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGxheWVyMVNoaXBzKSkge1xuICAgICAgICBpZiAoa2V5ID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIHBsYXllcjEucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgICAgICB4LS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIFRvZ2dsZXMgZHJhZ2dhYmxlIHNoaXAgZGlzcGxheXNcbmNvbnN0IHRvZ2dsZVNoaXBzID0gKHNoaXBJRCwgZGlzcGxheSkgPT4ge1xuICBjb25zdCBzaGlwVG9IaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzaGlwSUQpO1xuXG4gIHNoaXBUb0hpZGUuc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59O1xuXG4vLyBDaGVja3MgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWRcbmNvbnN0IHNoaXBzRGVwbG95ZWQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwT3V0ZXIgZGl2XCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNoaXBzW2ldLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBDcmVhdGVzIHRoZSBmaXJzdCByb3cgb2YgdGhlIHRhYmxlIGFuZCBuYW1lcyBjb2x1bW5zXG5jb25zdCBjcmVhdGVDb2x1bW5IZWFkaW5ncyA9ICh0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzfWApO1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IGVtcHR5SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcblxuICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gIHJvdy5hcHBlbmRDaGlsZChlbXB0eUhlYWRpbmcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGNvbnN0IG5ld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgbmV3SGVhZGluZy50ZXh0Q29udGVudCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBpKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobmV3SGVhZGluZyk7XG4gIH1cbn07XG5cbi8vIEFkZHMgbmV4dCByb3cgd2l0aCBoZWFkaW5nIGFuZCBlbXB0eSBjZWxsc1xuY29uc3QgY3JlYXRlUm93cyA9ICh0YWJsZUNsYXNzKSA9PiB7XG4gIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHt0YWJsZUNsYXNzfWApO1xuXG4gIGZvciAobGV0IGJpZ0kgPSAwOyBiaWdJIDwgMTA7IGJpZ0krKykge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IGJpZ0kgKyAxO1xuXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGZvciAobGV0IGxpdHRsZUkgPSAwOyBsaXR0bGVJIDwgMTA7IGxpdHRsZUkrKykge1xuICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgIGNlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS14XCIsIGJpZ0kpO1xuICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIiwgbGl0dGxlSSk7XG5cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEFkZHMgdGFibGUgdG8gcDFCb2FyZCBkaXZcbmNvbnN0IGNyZWF0ZVRhYmxlID0gKGJvYXJkQ2xhc3MsIHRhYmxlQ2xhc3MpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJvYXJkQ2xhc3MpO1xuICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcblxuICB0YWJsZS5jbGFzc0xpc3QuYWRkKHRhYmxlQ2xhc3MpO1xuICBib2FyZC5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgY3JlYXRlQ29sdW1uSGVhZGluZ3ModGFibGVDbGFzcyk7XG4gIGNyZWF0ZVJvd3ModGFibGVDbGFzcyk7XG59O1xuXG4vLyBDb2xvcnMgdGhlIGdyaWQgc3BhY2Ugb2YgZ2l2ZW4gY29vcmRpbmF0ZVxuY29uc3QgY29sb3JDb29yZGluYXRlID0gKFthLCBiXSkgPT4ge1xuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcblxuICBncmlkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmIChjZWxsLmRhdGFzZXQueCA9PT0gYCR7YX1gICYmIGNlbGwuZGF0YXNldC55ID09PSBgJHtifWApIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ5ZWxsb3dcIjtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gQ2hhbmdlcyBjZWxsIGNvbG9yIHdoZW4gYXR0YWNrZWRcbmNvbnN0IGNvbG9yT25BdHRhY2sgPSAoY2VsbCwgaGl0U3RhdHVzKSA9PiB7XG4gIGlmIChoaXRTdGF0dXMgPT09IFwibWlzc1wiKSB7XG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRhblwiO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIuKAolwiO1xuICB9XG5cbiAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJwaW5rXCI7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgICBjZWxsLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIH1cbn07XG5cbi8vIFJlbW92ZXMgY2VsbCBjb2xvciBhbmQgdGV4dFxuY29uc3QgcmVzZXRDZWxsID0gKCkgPT4ge1xuICBjb25zdCBncmlkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNlbGxcIik7XG4gIGdyaWRDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgY2VsbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCB3aGl0ZVwiO1xuICAgIGNlbGwuc3R5bGUuY29sb3IgPSBcImluaXRpYWxcIjtcbiAgICBjZWxsLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSk7XG59O1xuXG4vLyBBdHRhY2tzIGdhbWVib2FyZCBhbmQgY2hlY2tzIHNoaXBzIHdoZW4gY29vcmRpbmF0ZSBjbGlja2VkXG5jb25zdCBjbGlja0F0dGFjayA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgdGFibGVDbGFzcykgPT4ge1xuICBjb25zdCBncmlkU3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCR7dGFibGVDbGFzc30gLmNlbGxgKTtcblxuICBncmlkU3F1YXJlcy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID09PSBwbGF5ZXJBdHRhY2tpbmcubmFtZSAmJlxuICAgICAgICBvbk9mZi5zdGF0dXMgPT09IFwib25cIlxuICAgICAgKSB7XG4gICAgICAgIC8vIFNldHMgY29vcmRpbmF0ZSB2YWx1ZXMgYmFzZWQgb24gY2VsbCBkYXRhXG4gICAgICAgIGNvbnN0IHggPSBOdW1iZXIoY2VsbC5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKGNlbGwuZGF0YXNldC55KTtcblxuICAgICAgICBpZiAoIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHBsYXllckF0dGFja2luZywgW3gsIHldKSkge1xuICAgICAgICAgIC8vIEFkZHMgY29vcmRpbmF0ZSB0byBhcnJheSBvZiBjbGlja2VkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgcGxheWVyQXR0YWNraW5nLm1hcmtlZFNwb3RzLnB1c2goW3gsIHldKTtcblxuICAgICAgICAgIGNvbnN0IGhpdFN0YXR1cyA9IHJlY2VpdmluZ0F0dGFjay5wbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG5cbiAgICAgICAgICBjb2xvck9uQXR0YWNrKGNlbGwsIGhpdFN0YXR1cyk7XG5cbiAgICAgICAgICB3aG9zZVR1cm4oaGl0U3RhdHVzLCBwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayk7XG5cbiAgICAgICAgICBwbGF5ZXJXaW4ocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spO1xuXG4gICAgICAgICAgY29tcHV0ZXJDbGljayhwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgY3JlYXRlVGFibGUsXG4gIGNvbG9yQ29vcmRpbmF0ZSxcbiAgY2xpY2tBdHRhY2ssXG4gIGRyYWcsXG4gIGRyYWdPdmVyLFxuICBzaGlwSWRlbnRpZnksXG4gIGRyb3BUb0dhbWVib2FyZCxcbiAgdG9nZ2xlU2hpcHMsXG4gIHJlc2V0Q2VsbCxcbiAgc2hpcHNEZXBsb3llZCxcbiAgZHJhZ0VuZFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wbHVzcGx1cyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWN5Y2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjb25zaXN0ZW50LXJldHVybiAqL1xuaW1wb3J0IHsgY29sb3JDb29yZGluYXRlIH0gZnJvbSBcIi4vZG9tXCI7XG5cbi8vIERldGVybWluZXMgaWYgYW4gYXR0YWNrIGhpdHMgb3IgbWlzc2VzXG5jb25zdCBoaXRPck1pc3MgPSAoaW5Db29yZGluYXRlKSA9PiB7XG4gIGlmIChpbkNvb3JkaW5hdGUgPT09IDApIHJldHVybiBcIm1pc3NcIjtcblxuICBpZiAoaW5Db29yZGluYXRlID09PSAxKSByZXR1cm4gXCJhbHJlYWR5SGl0XCI7XG5cbiAgcmV0dXJuIFwiaGl0XCI7XG59O1xuXG4vLyBDcmVhdGVzIHNoaXBzIHRvIHBsYWNlIG9uIGdhbWVib2FyZFxuY29uc3Qgc2hpcCA9IChsZW5ndGgpID0+ICh7XG4gIGxlbmd0aCxcbiAgaGl0QW1vdW50OiAwLFxuICBzdW5rOiBmYWxzZSxcbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0QW1vdW50ICs9IDE7XG4gIH0sXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRBbW91bnQgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgfSxcbiAgcmVzZXRTaGlwKCkge1xuICAgIHRoaXMuaGl0QW1vdW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxufSk7XG5cbi8vIENyZWF0ZXMgYSBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZCA9ICgpID0+ICh7XG4gIGJvYXJkOiBbXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdXG4gIF0sXG4gIC8vIE1hcmtzIGF0dGFja3Mgb24gZ2FtZWJvYXJkXG4gIHJlY2VpdmVBdHRhY2soW2EsIGJdKSB7XG4gICAgY29uc3QgaW5Db29yZGluYXRlID0gdGhpcy5ib2FyZFthXVtiXTtcbiAgICBjb25zdCBoaXRTdGF0dXMgPSBoaXRPck1pc3MoaW5Db29yZGluYXRlKTtcblxuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICAgIGluQ29vcmRpbmF0ZS5oaXQoKTtcbiAgICAgIGluQ29vcmRpbmF0ZS5pc1N1bmsoKTtcbiAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbYV1bYl0gPSAxO1xuICAgIH1cblxuICAgIHJldHVybiBoaXRTdGF0dXM7XG4gIH0sXG4gIC8vIENoZWNrcyBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgYWxsU3VuayhbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChiIDwgMTApIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG5cbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFsbFN1bmsoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbkNvb3JkaW5hdGUuc3VuayA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5hbGxTdW5rKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsU3VuayhbYSArIDEsIDBdKTtcbiAgICB9XG4gIH0sXG4gIC8vIFJ1bnMgYSBmdW5jdGlvbiB0byBjb2xvciBncmlkIHNwYWNlIGlmXG4gIC8vIGl0IGNvbnRhaW5zIGEgc2hpcFxuICBjb2xvckdhbWVib2FyZFNoaXBzKFthLCBiXSkge1xuICAgIGlmIChhID4gOSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChiIDwgMTApIHtcbiAgICAgIGNvbnN0IGluQ29vcmRpbmF0ZSA9IHRoaXMuYm9hcmRbYV1bYl07XG5cbiAgICAgIGlmICh0eXBlb2YgaW5Db29yZGluYXRlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbG9yR2FtZWJvYXJkU2hpcHMoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yQ29vcmRpbmF0ZShbYSwgYl0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5jb2xvckdhbWVib2FyZFNoaXBzKFthLCBiICsgMV0pO1xuICAgIH1cblxuICAgIGlmIChiID4gOSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29sb3JHYW1lYm9hcmRTaGlwcyhbYSArIDEsIDBdKTtcbiAgICB9XG4gIH0sXG4gIC8vIENoZWNrcyBpZiB0aGVyZSBhcmUgZW5vdWdoIHNwYWNlcyByaWdodC9sZWZ0L2Rvd24vdXAgZm9yIGEgc2hpcFxuICBlbm91Z2hTcGFjZXMoeENvb3JkLCB5Q29vcmQsIHNoaXBMZW5ndGgsIGRpcmVjdGlvbikge1xuICAgIC8vIElmIGNvb3JkaW5hdGUgaXMgb2ZmIHRoZSBib2FyZCwgcmV0dXJuIGZhbHNlXG4gICAgaWYgKHhDb29yZCA8IDEwICYmIHhDb29yZCA+IC0xICYmIHlDb29yZCA8IDEwICYmIHlDb29yZCA+IC0xKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW3hDb29yZF1beUNvb3JkXTtcblxuICAgICAgLy8gSWYgYSBzaGlwIGlzIGFscmVhZHkgaW4gY29vcmRpbmF0ZSwgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAodHlwZW9mIGluQ29vcmRpbmF0ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGZ1bGwgbGVuZ3RoIG9mIHNoaXAgaXMgcmVhY2hlZCwgcmV0dXJuIHRydWVcbiAgICAgIGlmIChzaGlwTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBuZXh0IGNvb3JkaW5hdGUgaW4gZ2l2ZW4gZGlyZWN0aW9uXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkICsgMSwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwibGVmdFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQsIHlDb29yZCAtIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSBcImRvd25cIikge1xuICAgICAgICByZXR1cm4gdGhpcy5lbm91Z2hTcGFjZXMoeENvb3JkICsgMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVub3VnaFNwYWNlcyh4Q29vcmQgLSAxLCB5Q29vcmQsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgLy8gUmV0dXJucyB0cnVlIGlmIGNvb3JkaW5hdGUgaXMgdW5kZWZpbmVkIG9yIGVtcHR5XG4gIHNwYWNlRW1wdHkoeENvb3JkLCB5Q29vcmQpIHtcbiAgICBpZiAoeENvb3JkIDwgMTAgJiYgeENvb3JkID4gLTEgJiYgeUNvb3JkIDwgMTAgJiYgeUNvb3JkID4gLTEpIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hDb29yZF1beUNvb3JkXSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAvLyBDaGVja3MgaWYgdGhlcmUncyBlbm91Z2ggc3BhY2UgYmV0d2VlbiBzaGlwcyBzZXQgYW5kIHNoaXBzIGJlaW5nIGRyb3BwZWRcbiAgc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBzaGlwTGVuZ3RoLCBkaXJlY3Rpb24pIHtcbiAgICAvLyBDaGVja3MgaWYgc3Vycm91bmRpbmcgY29vcmRpbmF0ZXMgYXJlIGVtcHR5L3VuZGVmaW5lZFxuICAgIGNvbnN0IHRvcCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQpO1xuICAgIGNvbnN0IHRvcFJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCAtIDEsIHlDb29yZCArIDEpO1xuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkICsgMSk7XG4gICAgY29uc3QgYm90dG9tUmlnaHQgPSB0aGlzLnNwYWNlRW1wdHkoeENvb3JkICsgMSwgeUNvb3JkICsgMSk7XG4gICAgY29uc3QgYm90dG9tID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCArIDEsIHlDb29yZCk7XG4gICAgY29uc3QgYm90dG9tTGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgKyAxLCB5Q29vcmQgLSAxKTtcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy5zcGFjZUVtcHR5KHhDb29yZCwgeUNvb3JkIC0gMSk7XG4gICAgY29uc3QgdG9wTGVmdCA9IHRoaXMuc3BhY2VFbXB0eSh4Q29vcmQgLSAxLCB5Q29vcmQgLSAxKTtcblxuICAgIC8vIElmIGFueSBzdXJyb3VuZGluZyBjb29yZGluYXRlcyBhcmVuJ3QgZW1wdHksIHJldHVybiBmYWxzZVxuICAgIGlmIChcbiAgICAgICEoXG4gICAgICAgIHRvcCAmJlxuICAgICAgICB0b3BSaWdodCAmJlxuICAgICAgICByaWdodCAmJlxuICAgICAgICBib3R0b21SaWdodCAmJlxuICAgICAgICBib3R0b20gJiZcbiAgICAgICAgYm90dG9tTGVmdCAmJlxuICAgICAgICBsZWZ0ICYmXG4gICAgICAgIHRvcExlZnRcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoc2hpcExlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgbmV4dCBjb29yZGluYXRlIGluIGdpdmVuIGRpcmVjdGlvblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwicmlnaHRcIikge1xuICAgICAgcmV0dXJuIHRoaXMuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkICsgMSwgc2hpcExlbmd0aCAtIDEsIGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQsIHlDb29yZCAtIDEsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5zcGFjZUJldHdlZW4oeENvb3JkICsgMSwgeUNvb3JkLCBzaGlwTGVuZ3RoIC0gMSwgZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLnNwYWNlQmV0d2Vlbih4Q29vcmQgLSAxLCB5Q29vcmQsIHNoaXBMZW5ndGggLSAxLCBkaXJlY3Rpb24pO1xuICAgIH1cbiAgfSxcbiAgLy8gQ2xlYXJzIHNoaXBzIGFuZCBtaXNzZXMgZnJvbSBnYW1lYm9hcmRcbiAgY2xlYXJCb2FyZChbYSwgYl0pIHtcbiAgICBpZiAoYSA+IDkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoYiA8IDEwKSB7XG4gICAgICBjb25zdCBpbkNvb3JkaW5hdGUgPSB0aGlzLmJvYXJkW2FdW2JdO1xuXG4gICAgICBpZiAoaW5Db29yZGluYXRlICE9PSAwKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbYV1bYl0gPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyQm9hcmQoW2EsIGIgKyAxXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNsZWFyQm9hcmQoW2EsIGIgKyAxXSk7XG4gICAgfVxuXG4gICAgaWYgKGIgPiA5KSB7XG4gICAgICByZXR1cm4gdGhpcy5jbGVhckJvYXJkKFthICsgMSwgMF0pO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIENyZWF0ZXMgYSBwbGF5ZXIgYW5kIGEgZ2FtZWJvYXJkIGZvciB0aGVtXG5jb25zdCBwbGF5ZXIgPSAobmFtZSkgPT4gKHtcbiAgbmFtZSxcbiAgcGxheWVyQm9hcmQ6IGdhbWVib2FyZCgpLFxuICBtYXJrZWRTcG90czogW10sXG4gIGNsZWFyTWFya2VkU3BvdHMoKSB7XG4gICAgd2hpbGUgKHRoaXMubWFya2VkU3BvdHMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5tYXJrZWRTcG90cy5wb3AoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vLyBEeW5hbWljIG9iamVjdCB0byB0cmFjayBwbGF5ZXIgdHVybnNcbmNvbnN0IGN1cnJlbnRUdXJuID0ge1xuICBwbGF5ZXJOYW1lOiBudWxsXG59O1xuXG4vLyBDcmVhdGVzIHBsYXllcnMgYW5kIGJvYXJkc1xuY29uc3QgcGxheWVyMSA9IHBsYXllcihcInBsYXllcjFcIik7XG5jb25zdCBwbGF5ZXIyID0gcGxheWVyKFwiQ29tcHV0ZXJcIik7XG5cbi8vIENyZWF0ZXMgcGxheWVyMSBzaGlwc1xuY29uc3QgcGxheWVyMVNoaXBzID0ge1xuICBiYXR0bGVzaGlwMTogc2hpcCg0KSxcbiAgZGVzdHJveWVyMTE6IHNoaXAoMyksXG4gIGRlc3Ryb3llcjEyOiBzaGlwKDMpLFxuICBzdWJtYXJpbmUxMTogc2hpcCgyKSxcbiAgc3VibWFyaW5lMTI6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTEzOiBzaGlwKDIpLFxuICBwYXRyb2xCb2F0MTE6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQxMjogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDEzOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MTQ6IHNoaXAoMSlcbn07XG5cbi8vIENyZWF0ZXMgcGxheWVyMiBzaGlwc1xuY29uc3QgcGxheWVyMlNoaXBzID0ge1xuICBiYXR0bGVzaGlwMjogc2hpcCg0KSxcbiAgZGVzdHJveWVyMjE6IHNoaXAoMyksXG4gIGRlc3Ryb3llcjIyOiBzaGlwKDMpLFxuICBzdWJtYXJpbmUyMTogc2hpcCgyKSxcbiAgc3VibWFyaW5lMjI6IHNoaXAoMiksXG4gIHN1Ym1hcmluZTIzOiBzaGlwKDIpLFxuICBwYXRyb2xCb2F0MjE6IHNoaXAoMSksXG4gIHBhdHJvbEJvYXQyMjogc2hpcCgxKSxcbiAgcGF0cm9sQm9hdDIzOiBzaGlwKDEpLFxuICBwYXRyb2xCb2F0MjQ6IHNoaXAoMSlcbn07XG5cbi8vIER5bmFtaWMgb24vb2ZmIHN3aXRjaCBmb3IgYm9hcmQgZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBvbk9mZiA9IHtcbiAgc3RhdHVzOiBudWxsXG59O1xuXG5leHBvcnQge1xuICBzaGlwLFxuICBwbGF5ZXIsXG4gIGN1cnJlbnRUdXJuLFxuICBnYW1lYm9hcmQsXG4gIGhpdE9yTWlzcyxcbiAgcGxheWVyMSxcbiAgcGxheWVyMixcbiAgcGxheWVyMVNoaXBzLFxuICBwbGF5ZXIyU2hpcHMsXG4gIG9uT2ZmXG59O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG5pbXBvcnQgeyBjdXJyZW50VHVybiwgcGxheWVyMiwgcGxheWVyMlNoaXBzLCBvbk9mZiB9IGZyb20gXCIuL2ZhY3Rvcmllc1wiO1xuXG4vLyBWZXJpZmllcyB2YWxpZCBzaGlwIHBsYWNlbWVudFxuY29uc3QgdmFsaWRQbGFjZW1lbnQgPSAocGxheWVyLCB4Q29vcmQsIHlDb29yZCwgbGVuZ3RoKSA9PiB7XG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwicmlnaHRcIikgJiZcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwicmlnaHRcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwicmlnaHRcIjtcbiAgfVxuXG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwibGVmdFwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJsZWZ0XCIpXG4gICkge1xuICAgIHJldHVybiBcImxlZnRcIjtcbiAgfVxuXG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwiZG93blwiKSAmJlxuICAgIHBsYXllci5wbGF5ZXJCb2FyZC5zcGFjZUJldHdlZW4oeENvb3JkLCB5Q29vcmQsIGxlbmd0aCwgXCJkb3duXCIpXG4gICkge1xuICAgIHJldHVybiBcImRvd25cIjtcbiAgfVxuXG4gIGlmIChcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuZW5vdWdoU3BhY2VzKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwidXBcIikgJiZcbiAgICBwbGF5ZXIucGxheWVyQm9hcmQuc3BhY2VCZXR3ZWVuKHhDb29yZCwgeUNvb3JkLCBsZW5ndGgsIFwidXBcIilcbiAgKSB7XG4gICAgcmV0dXJuIFwidXBcIjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuLy8gQ2hvb3NlcyBuZXcgY29vcmRpbmF0ZSBpZiBjb21wdXRlciBzaGlwIHBsYWNlbWVudCBpcyBpbnZhbGlkXG5jb25zdCB2YWxpZENvbXB1dGVyUGxhY2VtZW50ID0gKHJhbmRvbVgsIHJhbmRvbVksIHZhbHVlKSA9PiB7XG4gIGxldCB4ID0gcmFuZG9tWDtcbiAgbGV0IHkgPSByYW5kb21ZO1xuICBjb25zdCB2YWxpZERpcmVjdGlvbiA9IHZhbGlkUGxhY2VtZW50KHBsYXllcjIsIHgsIHksIHZhbHVlLmxlbmd0aCk7XG5cbiAgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwbGF5ZXIyLnBsYXllckJvYXJkLmJvYXJkW3hdW3ldID0gdmFsdWU7XG4gICAgICB5Kys7XG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbGlkRGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBsYXllcjIucGxheWVyQm9hcmQuYm9hcmRbeF1beV0gPSB2YWx1ZTtcbiAgICAgIHktLTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsaWREaXJlY3Rpb24gPT09IFwiZG93blwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgeCsrO1xuICAgIH1cbiAgfSBlbHNlIGlmICh2YWxpZERpcmVjdGlvbiA9PT0gXCJ1cFwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcGxheWVyMi5wbGF5ZXJCb2FyZC5ib2FyZFt4XVt5XSA9IHZhbHVlO1xuICAgICAgeC0tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcblxuICAgIHZhbGlkQ29tcHV0ZXJQbGFjZW1lbnQoeCwgeSwgdmFsdWUpO1xuICB9XG59O1xuXG4vLyBDaG9vc2VzIHJhbmRvbSBwbGFjZW1lbnQgZm9yIENvbXB1dGVyIHNoaXBzXG5jb25zdCBwbGFjZUNvbXB1dGVyU2hpcHMgPSAoKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwbGF5ZXIyU2hpcHMpKSB7XG4gICAgY29uc3QgcmFuZG9tWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG4gICAgY29uc3QgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5IC0gMCArIDEpKSArIDA7XG5cbiAgICB2YWxpZENvbXB1dGVyUGxhY2VtZW50KHJhbmRvbVgsIHJhbmRvbVksIHZhbHVlKTtcbiAgfVxufTtcblxuLy8gQ2hlY2tzIGlmIGNvb3JkaW5hdGUgaGFzIGJlZW4gY2xpY2tlZCBhbHJlYWR5XG5jb25zdCB3YXNDb29yZGluYXRlQ2xpY2tlZCA9IChwbGF5ZXJBdHRhY2tpbmcsIFt4LCB5XSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckF0dGFja2luZy5tYXJrZWRTcG90cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNwb3QgPSBwbGF5ZXJBdHRhY2tpbmcubWFya2VkU3BvdHNbaV07XG5cbiAgICBpZiAoc3BvdFswXSA9PT0geCAmJiBzcG90WzFdID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vLyBEZXRlcm1pbmVzIHdoaWNoIHBsYXllciBnb2VzIG5leHRcbmNvbnN0IHdob3NlVHVybiA9IChoaXRTdGF0dXMsIHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChoaXRTdGF0dXMgPT09IFwiaGl0XCIpIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcGxheWVyQXR0YWNraW5nLm5hbWU7XG4gIH0gZWxzZSBpZiAoaGl0U3RhdHVzID09PSBcImFscmVhZHlIaXRcIikge1xuICAgIGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPSBwbGF5ZXJBdHRhY2tpbmcubmFtZTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50VHVybi5wbGF5ZXJOYW1lID0gcmVjZWl2aW5nQXR0YWNrLm5hbWU7XG4gIH1cbn07XG5cbi8vIFJldHVybnMgd2hpY2ggcGxheWVyIGlzICdDb21wdXRlcidcbmNvbnN0IHdob0lzQ29tcHV0ZXIgPSAocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spID0+IHtcbiAgaWYgKHBsYXllckF0dGFja2luZy5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcGxheWVyQXR0YWNraW5nO1xuICB9XG5cbiAgaWYgKHJlY2VpdmluZ0F0dGFjay5uYW1lID09PSBcIkNvbXB1dGVyXCIpIHtcbiAgICByZXR1cm4gcmVjZWl2aW5nQXR0YWNrO1xuICB9XG59O1xuXG4vLyBTZWxlY3RzIGNvcnJlY3QgY2VsbCBhbmQgY2xpY2tzIGl0XG5jb25zdCBjb3JyZWN0Q2VsbCA9ICh4LCB5KSA9PiB7XG4gIGNvbnN0IGNvb3JkaW5hdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnAxR3JpZCAuY2VsbFwiKTtcbiAgY29vcmRpbmF0ZS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKE51bWJlcihjZWxsLmRhdGFzZXQueCkgPT09IHggJiYgTnVtYmVyKGNlbGwuZGF0YXNldC55KSA9PT0geSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNlbGwuY2xpY2soKTtcbiAgICAgIH0sIFwiMjAwMFwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gU2V0cyBuZXcgKHJhbmRvbVgsIHJhbmRvbVkpIGlmIGNvbXB1dGVyIGNsaWNrZWQgY29vcmRpbmF0ZSBhbHJlYWR5XG5jb25zdCBuZXdSYW5kb21Db29yZGluYXRlID0gKFxuICBwbGF5ZXJBdHRhY2tpbmcsXG4gIHJlY2VpdmluZ0F0dGFjayxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIGxldCB4ID0gcmFuZG9tWDtcbiAgbGV0IHkgPSByYW5kb21ZO1xuXG4gIHdoaWxlIChcbiAgICB3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCxcbiAgICAgIHlcbiAgICBdKVxuICApIHtcbiAgICB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgICB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDkgLSAwICsgMSkpICsgMDtcbiAgfVxuXG4gIGNvcnJlY3RDZWxsKHgsIHkpO1xufTtcblxuLy8gQXR0YWNrcyBhbiBhZGphY2VudCBjZWxsIGlmIGNvbXB1dGVyIHByZXZpb3VzbHkgaGl0XG5jb25zdCBhZGphY2VudEF0dGFjayA9IChcbiAgcGxheWVyQXR0YWNraW5nLFxuICByZWNlaXZpbmdBdHRhY2ssXG4gIFt4LCB5XSxcbiAgcmFuZG9tWCxcbiAgcmFuZG9tWVxuKSA9PiB7XG4gIC8vIElmIGFkamFjZW50IGNlbGwgaXMgd2l0aGluIGdhbWVib2FyZCBhbmQgaGFzbid0IGJlZW4gY2xpY2tlZFxuICBpZiAoXG4gICAgeSArIDEgPj0gMCAmJlxuICAgIHkgKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHgsXG4gICAgICB5ICsgMVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHgsIHkgKyAxKTtcbiAgfSBlbHNlIGlmIChcbiAgICB4IC0gMSA+PSAwICYmXG4gICAgeCAtIDEgPD0gOSAmJlxuICAgICF3YXNDb29yZGluYXRlQ2xpY2tlZCh3aG9Jc0NvbXB1dGVyKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSwgW1xuICAgICAgeCAtIDEsXG4gICAgICB5XG4gICAgXSlcbiAgKSB7XG4gICAgY29ycmVjdENlbGwoeCAtIDEsIHkpO1xuICB9IGVsc2UgaWYgKFxuICAgIHkgLSAxID49IDAgJiZcbiAgICB5IC0gMSA8PSA5ICYmXG4gICAgIXdhc0Nvb3JkaW5hdGVDbGlja2VkKHdob0lzQ29tcHV0ZXIocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2spLCBbXG4gICAgICB4LFxuICAgICAgeSAtIDFcbiAgICBdKVxuICApIHtcbiAgICBjb3JyZWN0Q2VsbCh4LCB5IC0gMSk7XG4gIH0gZWxzZSBpZiAoXG4gICAgeCArIDEgPj0gMCAmJlxuICAgIHggKyAxIDw9IDkgJiZcbiAgICAhd2FzQ29vcmRpbmF0ZUNsaWNrZWQod2hvSXNDb21wdXRlcihwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjayksIFtcbiAgICAgIHggKyAxLFxuICAgICAgeVxuICAgIF0pXG4gICkge1xuICAgIGNvcnJlY3RDZWxsKHggKyAxLCB5KTtcbiAgfSBlbHNlIHtcbiAgICBuZXdSYW5kb21Db29yZGluYXRlKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrLCByYW5kb21YLCByYW5kb21ZKTtcbiAgfVxufTtcblxuLy8gQ2hvb3NlcyBhIGNvb3JkaW5hdGUgZm9yIENvbXB1dGVyJ3MgdHVyblxuY29uc3QgY29tcHV0ZXJDbGljayA9IChwbGF5ZXJBdHRhY2tpbmcsIHJlY2VpdmluZ0F0dGFjaywgW3gsIHldLCBoaXRTdGF0dXMpID0+IHtcbiAgaWYgKGN1cnJlbnRUdXJuLnBsYXllck5hbWUgPT09IFwiQ29tcHV0ZXJcIikge1xuICAgIGNvbnN0IHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuICAgIGNvbnN0IHJhbmRvbVkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoOSAtIDAgKyAxKSkgKyAwO1xuXG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJoaXRcIikge1xuICAgICAgYWRqYWNlbnRBdHRhY2soXG4gICAgICAgIHBsYXllckF0dGFja2luZyxcbiAgICAgICAgcmVjZWl2aW5nQXR0YWNrLFxuICAgICAgICBbeCwgeV0sXG4gICAgICAgIHJhbmRvbVgsXG4gICAgICAgIHJhbmRvbVlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1JhbmRvbUNvb3JkaW5hdGUocGxheWVyQXR0YWNraW5nLCByZWNlaXZpbmdBdHRhY2ssIHJhbmRvbVgsIHJhbmRvbVkpO1xuICAgIH1cbiAgfVxufTtcblxuLy8gRGlzcGxheXMgd2lubmVyIG9mIHRoZSBnYW1lXG5jb25zdCBkaXNwbGF5V2lubmVyID0gKHBsYXllckF0dGFja2luZykgPT4ge1xuICBjb25zb2xlLmxvZyhwbGF5ZXJBdHRhY2tpbmcubmFtZSk7XG59O1xuXG4vLyBFbmRzIGdhbWUgYW5kIGRpc3BsYXlzIHdpbm5lclxuY29uc3QgcGxheWVyV2luID0gKHBsYXllckF0dGFja2luZywgcmVjZWl2aW5nQXR0YWNrKSA9PiB7XG4gIGlmIChyZWNlaXZpbmdBdHRhY2sucGxheWVyQm9hcmQuYWxsU3VuayhbMCwgMF0pKSB7XG4gICAgb25PZmYuc3RhdHVzID0gXCJvZmZcIjtcblxuICAgIGRpc3BsYXlXaW5uZXIocGxheWVyQXR0YWNraW5nKTtcbiAgfVxufTtcblxuLy8gVHJhY2tzIHRoZSBoZWFkIG9mIHRoZSBzaGlwXG5jb25zdCB0cmFja0hlYWQgPSAoc2hpcE9iamVjdCwgc2hpcE5hbWUsIHhDb29yZCwgeUNvb3JkKSA9PiB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHNoaXBPYmplY3QpKSB7XG4gICAgaWYgKGtleSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgIHZhbHVlLmhlYWQgPSBbeENvb3JkLCB5Q29vcmRdO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgdmFsaWRQbGFjZW1lbnQsXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcyxcbiAgd2FzQ29vcmRpbmF0ZUNsaWNrZWQsXG4gIHdob3NlVHVybixcbiAgcGxheWVyV2luLFxuICBjb21wdXRlckNsaWNrLFxuICB0cmFja0hlYWRcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=