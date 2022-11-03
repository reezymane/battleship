import "./style.css";
import { player, ship } from "./factories";
import { createTable } from "./dom";

(() => {
  // Creates players and boards
  const player1 = player("player1");
  const player2 = player("Computer");

  // Creates player1 ships
  const battleship1 = ship(4);
  const destroyer11 = ship(3);
  const destroyer12 = ship(3);
  const submarine11 = ship(2);
  const submarine12 = ship(2);
  const submarine13 = ship(2);
  const patrolBoat11 = ship(1);
  const patrolBoat12 = ship(1);
  const patrolBoat13 = ship(1);
  const patrolBoat14 = ship(1);

  const player1ships = [
    battleship1,
    destroyer11,
    destroyer12,
    submarine11,
    submarine12,
    submarine13,
    patrolBoat11,
    patrolBoat12,
    patrolBoat13,
    patrolBoat14
  ];

  // Creates player2 ships
  const battleship2 = ship(4);
  const destroyer21 = ship(3);
  const destroyer22 = ship(3);
  const submarine21 = ship(2);
  const submarine22 = ship(2);
  const submarine23 = ship(2);
  const patrolBoat21 = ship(1);
  const patrolBoat22 = ship(1);
  const patrolBoat23 = ship(1);
  const patrolBoat24 = ship(1);

  const player2ships = [
    battleship2,
    destroyer21,
    destroyer22,
    submarine21,
    submarine22,
    submarine23,
    patrolBoat21,
    patrolBoat22,
    patrolBoat23,
    patrolBoat24
  ];

  // Places player1 ships on gameboard
  player1.playerBoard.board[0][2] = battleship1;
  player1.playerBoard.board[0][3] = battleship1;
  player1.playerBoard.board[0][4] = battleship1;
  player1.playerBoard.board[0][5] = battleship1;

  player1.playerBoard.board[0][0] = submarine11;
  player1.playerBoard.board[1][0] = submarine11;

  player1.playerBoard.board[2][3] = submarine12;
  player1.playerBoard.board[3][3] = submarine12;

  player1.playerBoard.board[7][8] = submarine13;
  player1.playerBoard.board[7][9] = submarine13;

  player1.playerBoard.board[5][3] = destroyer11;
  player1.playerBoard.board[5][4] = destroyer11;
  player1.playerBoard.board[5][5] = destroyer11;

  player1.playerBoard.board[9][2] = destroyer12;
  player1.playerBoard.board[9][3] = destroyer12;
  player1.playerBoard.board[9][4] = destroyer12;

  player1.playerBoard.board[1][8] = patrolBoat11;

  player1.playerBoard.board[2][5] = patrolBoat12;

  player1.playerBoard.board[3][9] = patrolBoat13;

  player1.playerBoard.board[7][5] = patrolBoat14;

  // Places player1 ships on gameboard
  player2.playerBoard.board[0][2] = battleship2;
  player2.playerBoard.board[0][3] = battleship2;
  player2.playerBoard.board[0][4] = battleship2;
  player2.playerBoard.board[0][5] = battleship2;

  player2.playerBoard.board[0][0] = submarine21;
  player2.playerBoard.board[1][0] = submarine21;

  player2.playerBoard.board[2][3] = submarine22;
  player2.playerBoard.board[3][3] = submarine22;

  player2.playerBoard.board[7][8] = submarine23;
  player2.playerBoard.board[7][9] = submarine23;

  player2.playerBoard.board[5][3] = destroyer21;
  player2.playerBoard.board[5][4] = destroyer21;
  player2.playerBoard.board[5][5] = destroyer21;

  player2.playerBoard.board[9][2] = destroyer22;
  player2.playerBoard.board[9][3] = destroyer22;
  player2.playerBoard.board[9][4] = destroyer22;

  player2.playerBoard.board[1][8] = patrolBoat21;

  player2.playerBoard.board[2][5] = patrolBoat22;

  player2.playerBoard.board[3][9] = patrolBoat23;

  player2.playerBoard.board[7][5] = patrolBoat24;

  // Displays player gameboards
  createTable(".p1Board", "p1Grid");
  createTable(".p2Board", "p2Grid");

  // Colors player grid squares that contain ships
  player1.playerBoard.colorGameboardShips([0, 0]);

  const gridSquares = document.querySelectorAll(".p2Grid .cell");
  gridSquares.forEach((cell) => {
    cell.addEventListener("click", () => {
      // Gameboard receives attack when coordinate clicked
      player2.playerBoard.receiveAttack([
        Number(cell.dataset.x),
        Number(cell.dataset.y)
      ]);

      // Checks each ships' sunk status
      player2ships.forEach((item) => {
        item.isSunk();
      });

      // Checks if all ships are sunk
      if (player2.playerBoard.allSunk([0, 0])) {
        // FUNCTION TO DISPLAY WINNER
      }
    });
  });
})();
