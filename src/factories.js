/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
/* eslint-disable consistent-return */
import { colorCoordinate } from "./dom";

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

      colorCoordinate([a, b]);

      return this.colorGameboardShips([a, b + 1]);
    }

    if (b > 9) {
      return this.colorGameboardShips([a + 1, 0]);
    }
  },
  // Checks if there are enough spaces right/left/down/up for a ship
  enoughSpaces(x, y, shipLength, direction) {
    const xCoord = Number(x);
    const yCoord = Number(y);

    // If coordinate is off the board, return false
    if (xCoord < 10 && xCoord > -1 && yCoord < 10 && yCoord > -1) {
      const inCoordinate = this.board[xCoord][yCoord];

      // If a ship is already in coordinate, return false
      if (typeof inCoordinate === "object") {
        return "false";
      }

      // If full length of ship is reached, return true
      if (shipLength === 1) {
        return "true";
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

    return "false";
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

export { ship, player, currentTurn, gameboard, hitOrMiss };
