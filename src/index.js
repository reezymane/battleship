import "./style.css";
import { currentTurn, player1, player2 } from "./factories";
import {
  createTable,
  clickAttack,
  drag,
  shipIdentify,
  dropToGameboard,
  removeShip,
  dragOver
} from "./dom";
import { placeComputerShips } from "./gameModule";

(() => {
  // Places player2 ships on gameboard
  placeComputerShips();

  // Displays player gameboards
  createTable(".p1Board", "p1Grid");
  createTable(".p2Board", "p2Grid");

  // Makes ship divs draggable
  const ship = document.querySelectorAll(".shipOuter div");
  ship.forEach((div) => {
    div.addEventListener("dragstart", drag);
  });

  // Adds dropped ship to gameboard in player object and interface
  const gridCells = document.querySelectorAll(".p1Grid .cell");
  gridCells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);

    cell.addEventListener("drop", (event) => {
      const xCoord = Number(cell.dataset.x);
      const yCoord = Number(cell.dataset.y);
      const shipIdentifier = shipIdentify(event);

      // Decides which direction is a valid placement
      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "right"
        ) &&
        player1.playerBoard.spaceBetween(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "right"
        )
      ) {
        dropToGameboard(
          event,
          xCoord,
          yCoord,
          shipIdentifier.shipName,
          shipIdentifier.length,
          "right"
        );

        removeShip(`#${shipIdentifier.shipName}`);
      }

      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "left"
        ) &&
        player1.playerBoard.spaceBetween(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "left"
        )
      ) {
        dropToGameboard(
          event,
          xCoord,
          yCoord,
          shipIdentifier.shipName,
          shipIdentifier.length,
          "left"
        );

        removeShip(`#${shipIdentifier.shipName}`);
      }

      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "down"
        ) &&
        player1.playerBoard.spaceBetween(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "down"
        )
      ) {
        dropToGameboard(
          event,
          xCoord,
          yCoord,
          shipIdentifier.shipName,
          shipIdentifier.length,
          "down"
        );

        removeShip(`#${shipIdentifier.shipName}`);
      }

      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "up"
        ) &&
        player1.playerBoard.spaceBetween(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "up"
        )
      ) {
        dropToGameboard(
          event,
          xCoord,
          yCoord,
          shipIdentifier.shipName,
          shipIdentifier.length,
          "up"
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
