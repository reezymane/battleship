/* eslint-disable no-undef */
import { ship, gameboard, hitOrMiss, player } from "./factories";

test("Ship factory function returns an object", () => {
  const testShip = ship(null);

  expect(typeof testShip).toBe("object");
});

test("Gameboard factory function returns an object", () => {
  const testBoard = gameboard();

  expect(typeof testBoard).toBe("object");
});

test("hitOrMiss returns if the coordinate was a hit, miss or spot already hit", () => {
  expect(hitOrMiss(0)).toBe("miss");
});

test("hitOrMiss returns if the coordinate was a hit, miss or spot already hit", () => {
  expect(hitOrMiss(1)).toBe("alreadyHit");
});

test("hitOrMiss returns if the coordinate was a hit, miss or spot already hit", () => {
  expect(hitOrMiss("boat")).toBe("hit");
});

test("gameboard.receiveAttack() increases ship hitAmount when coordinate is hit", () => {
  const testShip = ship(2);
  const testBoard = gameboard();
  testBoard.board[1][3] = testShip;
  testBoard.receiveAttack([1, 3]);

  expect(testShip.hitAmount).toBe(1);
});

test("gameboard.receiveAttack() records miss on gameboard", () => {
  const testBoard = gameboard();
  testBoard.receiveAttack([1, 3]);

  expect(testBoard.board[1][3]).toBe(1);
});

test("ship.hitAmount increases in ship object when spanning coordinates", () => {
  const testShip = ship(2);
  const testBoard = gameboard();
  testBoard.board[1][3] = testShip;
  testBoard.board[1][4] = testShip;
  testBoard.receiveAttack([1, 3]);
  testBoard.receiveAttack([1, 4]);

  expect(testShip.hitAmount).toBe(2);
});

test("gameboard.allSunk() returns false if ship in gameboard.board[0] isn't sunk", () => {
  const testBoard = gameboard();
  testBoard.board[0][2] = ship(1);

  expect(testBoard.allSunk([0, 0])).toBe(false);
});

test("gameboard.allSunk() returns true if ship(1 space) in gameboard.board[0] is sunk", () => {
  const testBoard = gameboard();
  const testShip = ship(1);
  testBoard.board[0][2] = testShip;
  testBoard.receiveAttack([0, 2]);
  testShip.isSunk();

  expect(testBoard.allSunk([0, 0])).toBe(true);
});

test("gameboard.allSunk() returns false if ship(2 spaces) in gameboard.board[2] is only hit once", () => {
  const testBoard = gameboard();
  const testShip = ship(2);
  testBoard.board[2][2] = testShip;
  testBoard.board[2][3] = testShip;
  testBoard.receiveAttack([2, 2]);
  testShip.isSunk();

  expect(testBoard.allSunk([0, 0])).toBe(false);
});

test("gameboard.allSunk() returns true if ship(2 spaces) in gameboard.board[3] is sunk", () => {
  const testBoard = gameboard();
  const testShip = ship(2);
  testBoard.board[3][2] = testShip;
  testBoard.board[3][3] = testShip;
  testBoard.receiveAttack([3, 2]);
  testBoard.receiveAttack([3, 3]);
  testShip.isSunk();

  expect(testBoard.allSunk([0, 0])).toBe(true);
});

test("gameboard.allSunk() returns true if both ships are sunk", () => {
  const testBoard = gameboard();
  const testShip = ship(2);
  const testShip2 = ship(1);
  testBoard.board[3][2] = testShip;
  testBoard.board[3][3] = testShip;
  testBoard.board[9][2] = testShip2;
  testBoard.receiveAttack([3, 2]);
  testBoard.receiveAttack([3, 3]);
  testBoard.receiveAttack([9, 2]);
  testShip.isSunk();
  testShip2.isSunk();

  expect(testBoard.allSunk([0, 0])).toBe(true);
});

test("gameboard.allSunk() returns false if only 1 ship is sunk", () => {
  const testBoard = gameboard();
  const testShip = ship(2);
  const testShip2 = ship(1);
  testBoard.board[3][2] = testShip;
  testBoard.board[3][3] = testShip;
  testBoard.board[9][2] = testShip2;
  testBoard.receiveAttack([9, 2]);
  testShip.isSunk();
  testShip2.isSunk();

  expect(testBoard.allSunk([0, 0])).toBe(false);
});

test("player factory function returns an object", () => {
  const player1 = player("rell");

  expect(typeof player1).toBe("object");
});
