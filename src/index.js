import "./style.css";
import { currentTurn, player1, player2, player2Ships } from "./factories";
import {
  createTable,
  clickAttack,
  drag,
  shipIdentify,
  dropToGameboard,
  dragOver
} from "./dom";

(() => {
  // Places player2 ships on gameboard
  player2.playerBoard.board[0][2] = player2Ships.battleship2;
  player2.playerBoard.board[0][3] = player2Ships.battleship2;
  player2.playerBoard.board[0][4] = player2Ships.battleship2;
  player2.playerBoard.board[0][5] = player2Ships.battleship2;

  player2.playerBoard.board[0][0] = player2Ships.submarine21;
  player2.playerBoard.board[1][0] = player2Ships.submarine21;

  player2.playerBoard.board[2][3] = player2Ships.submarine22;
  player2.playerBoard.board[3][3] = player2Ships.submarine22;

  player2.playerBoard.board[7][8] = player2Ships.submarine23;
  player2.playerBoard.board[7][9] = player2Ships.submarine23;

  player2.playerBoard.board[5][3] = player2Ships.destroyer21;
  player2.playerBoard.board[5][4] = player2Ships.destroyer21;
  player2.playerBoard.board[5][5] = player2Ships.destroyer21;

  player2.playerBoard.board[9][2] = player2Ships.destroyer22;
  player2.playerBoard.board[9][3] = player2Ships.destroyer22;
  player2.playerBoard.board[9][4] = player2Ships.destroyer22;

  player2.playerBoard.board[1][8] = player2Ships.patrolBoat21;

  player2.playerBoard.board[2][5] = player2Ships.patrolBoat22;

  player2.playerBoard.board[3][9] = player2Ships.patrolBoat23;

  player2.playerBoard.board[7][5] = player2Ships.patrolBoat24;

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

      // Decides which direction is a valid move
      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "right"
        )
      ) {
        if (
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
        }
      }

      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "left"
        )
      ) {
        if (
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
        }
      }

      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "down"
        )
      ) {
        if (
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
        }
      }

      if (
        player1.playerBoard.enoughSpaces(
          xCoord,
          yCoord,
          shipIdentifier.length,
          "up"
        )
      ) {
        if (
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
        }
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
