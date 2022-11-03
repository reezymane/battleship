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

// Attacks gameboard and checks ships when coordinate clicked
const clickAttack = (
  tableClass,
  playerBeingAttacked,
  shipArray,
  clickedArray
) => {
  const gridSquares = document.querySelectorAll(`${tableClass} .cell`);
  const controller = new AbortController();

  gridSquares.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        if (
          !clickedArray.includes([
            Number(cell.dataset.x),
            Number(cell.dataset.y)
          ])
        ) {
          // Adds coordinate to array of clicked coordinates
          clickedArray.push([Number(cell.dataset.x), Number(cell.dataset.y)]);

          // Gameboard receives attack when coordinate clicked
          playerBeingAttacked.playerBoard.receiveAttack([
            Number(cell.dataset.x),
            Number(cell.dataset.y)
          ]);

          // Checks each ships' sunk status
          shipArray.forEach((item) => {
            item.isSunk();
          });

          // Disables click after player's turn
          controller.abort();
        }
      },
      { signal: controller.signal }
    );
  });
};

export { createTable, colorCoordinate, clickAttack };
