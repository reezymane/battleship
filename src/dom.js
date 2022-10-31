const createColumnHeadings = () => {};

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
