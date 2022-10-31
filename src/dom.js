const createColumnHeadings = () => {
  const grid = document.querySelector(".p1Grid");
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

const createRows = () => {};

const createTable = () => {
  const board = document.querySelector(".p1Board");
  const table = document.createElement("table");

  table.classList.add("p1Grid");
  board.appendChild(table);

  createColumnHeadings();
  createRows();
};

export { createTable };
