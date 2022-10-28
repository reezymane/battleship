import { ship, gameboard, hitOrMiss } from "./factories.js";

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
