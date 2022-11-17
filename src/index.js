/* eslint-disable no-plusplus */
import "./style.css";
import { placeComputerShips, validPlacement } from "./gameModule";
import {
  currentTurn,
  player1,
  player1Ships,
  player2,
  player2Ships
} from "./factories";
import {
  createTable,
  clickAttack,
  drag,
  dragOver,
  shipIdentify,
  dropToGameboard,
  toggleShips,
  resetCell,
  shipsDeployed,
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

        toggleShips(`#${shipIdentifier.shipName}`, "none");
      }

      player1.playerBoard.colorGameboardShips([0, 0]);
    });
  });

  // Abort signal for gameboards
  const controller = new AbortController();

  // On/Off switch for start button
  let onOff = 0;

  // Clicking start activates gameboard listeners to start game
  const start = document.querySelector(".startButton");
  start.addEventListener("click", () => {
    if (shipsDeployed() && onOff === 0) {
      // Determines which player goes first
      currentTurn.playerName = player1.name;

      clickAttack(player1, player2, ".p2Grid", controller);
      clickAttack(player2, player1, ".p1Grid", controller);

      onOff++;
    }
  });

  // Clicking restart resets entire game
  const restart = document.querySelector(".restartButton");
  restart.addEventListener("click", () => {
    player1Ships.battleship1.resetShip();
    player1Ships.destroyer11.resetShip();
    player1Ships.destroyer12.resetShip();
    player1Ships.submarine11.resetShip();
    player1Ships.submarine12.resetShip();
    player1Ships.submarine13.resetShip();
    player1Ships.patrolBoat11.resetShip();
    player1Ships.patrolBoat12.resetShip();
    player1Ships.patrolBoat13.resetShip();
    player1Ships.patrolBoat14.resetShip();

    player2Ships.battleship2.resetShip();
    player2Ships.destroyer21.resetShip();
    player2Ships.destroyer22.resetShip();
    player2Ships.submarine21.resetShip();
    player2Ships.submarine22.resetShip();
    player2Ships.submarine23.resetShip();
    player2Ships.patrolBoat21.resetShip();
    player2Ships.patrolBoat22.resetShip();
    player2Ships.patrolBoat23.resetShip();
    player2Ships.patrolBoat24.resetShip();

    player1.playerBoard.clearBoard([0, 0]);
    player2.playerBoard.clearBoard([0, 0]);

    resetCell();

    ship.forEach((div) => {
      toggleShips(`#${div.id}`, "block");
    });

    placeComputerShips();

    controller.abort();

    if (onOff > 0) {
      onOff = 0;
    }
  });
})();
