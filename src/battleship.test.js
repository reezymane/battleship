import { ship, gameboard } from "./factories.js";

test("Ship factory function returns an object", () => {
  const testShip = ship(null);
  expect(typeof testShip).toBe("object");
});

test("Gameboard factory function returns an object", () => {
  const testBoard = gameboard(null);
  expect(typeof testBoard).toBe("object");
});
