/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import { currentTurn, player1, player1Ships } from "./factories";
import {
  wasCoordinateClicked,
  whoseTurn,
  playerWin,
  computerClick
} from "./gameModule";

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
      for (const [key, value] of Object.entries(player1Ships)) {
        if (key === shipName) {
          player1.playerBoard.board[x][y] = value;
          y++;
        }
      }
    }
  }

  if (direction === "left") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(player1Ships)) {
        if (key === shipName) {
          player1.playerBoard.board[x][y] = value;
          y--;
        }
      }
    }
  }

  if (direction === "down") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(player1Ships)) {
        if (key === shipName) {
          player1.playerBoard.board[x][y] = value;
          x++;
        }
      }
    }
  }

  if (direction === "up") {
    for (let i = 0; i < shipLength; i++) {
      for (const [key, value] of Object.entries(player1Ships)) {
        if (key === shipName) {
          player1.playerBoard.board[x][y] = value;
          x--;
        }
      }
    }
  }
};

// Hides draggable ship from display
const hideShip = (shipID) => {
  const shipToHide = document.querySelector(shipID);

  shipToHide.style.display = "none";
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
        if (currentTurn.playerName === playerAttacking.name) {
          // Sets coordinate values based on cell data
          const x = Number(cell.dataset.x);
          const y = Number(cell.dataset.y);

          if (!wasCoordinateClicked(playerAttacking, [x, y])) {
            // Adds coordinate to array of clicked coordinates
            playerAttacking.markedSpots.push([x, y]);

            const hitStatus = receivingAttack.playerBoard.receiveAttack([x, y]);

            colorOnAttack(cell, hitStatus);

            whoseTurn(hitStatus, playerAttacking, receivingAttack);

            playerWin(playerAttacking, receivingAttack, controller);

            computerClick(playerAttacking, receivingAttack, [x, y], hitStatus);
          }
        }
      },
      { signal: controller.signal }
    );
  });
};

export {
  createTable,
  colorCoordinate,
  clickAttack,
  drag,
  dragOver,
  shipIdentify,
  dropToGameboard,
  hideShip,
  resetCell,
  shipsDeployed,
  dragEnd
};
