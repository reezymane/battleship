import { ship } from "./factories.js";

test("Ship factory function returns an object", () => {
  const testShip = ship(null, null, null);
  expect(typeof testShip).toBe("object");
});
