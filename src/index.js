import "./style.css";
import { currentTurn, player1, player2 } from "./factories";
import { placeComputerShips, validPlacement } from "./gameModule";
import {
  createTable,
  clickAttack,
  drag,
  dragOver,
  shipIdentify,
  dropToGameboard,
  removeShip,
  dragEnd
} from "./dom";

(() => {
  // Places player2 ships on gameboard
  placeComputerShips();

  // Displays player gameboards
  createTable(".p1Board", "p1Grid");
  createTable(".p2Board", "p2Grid");

  // Makes ship divs draggable
  const ship = document.querySelectorAll(".shipOuter div");
  ship.forEach((div) => {
    div.addEventListener("dragstart", (event) => {
      drag(event, div);
    });

    div.addEventListener("dragend", () => {
      dragEnd(div);
    });
  });

  // Adds dropped ship to gameboard in player object and interface
  const gridCells = document.querySelectorAll(".p1Grid .cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);

    cell.addEventListener("drop", (event) => {
      const xCoord = Number(cell.dataset.x);
      const yCoord = Number(cell.dataset.y);
      const shipIdentifier = shipIdentify(event);
      const validDirection = validPlacement(
        player1,
        xCoord,
        yCoord,
        shipIdentifier.length
      );

      if (validDirection != null) {
        dropToGameboard(
          event,
          xCoord,
          yCoord,
          shipIdentifier.shipName,
          shipIdentifier.length,
          validDirection
        );

        removeShip(`#${shipIdentifier.shipName}`);
      }

      player1.playerBoard.colorGameboardShips([0, 0]);
    });
  });

  // Determines which player goes first
  currentTurn.playerName = player1.name;

  // Creates gameboard eventlisteners and abort signal
  const controller = new AbortController();

  clickAttack(player1, player2, ".p2Grid", controller);
  clickAttack(player2, player1, ".p1Grid", controller);
})();
