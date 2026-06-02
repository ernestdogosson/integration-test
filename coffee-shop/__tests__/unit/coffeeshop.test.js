import { describe, test, expect } from "vitest";
import { createDrink, prepareOrder } from "../../coffeeshop.js";

describe("createDrink", () => {
  test("returns type and price for a known drink", () => {
    const drink = createDrink("latte");
    expect(drink.type).toBe("latte");
    expect(drink.price).toBe(99);
  });

  test("returns undefined price for an unknown drink", () => {
    const drink = createDrink("mocha");
    expect(drink.type).toBe("mocha");
    expect(drink.price).toBe(undefined);
  });
});

describe("prepareOrder", () => {
  test("returns a number between 0 and 999", () => {
    const drink = { type: "latte", price: 45 };
    const ticket = prepareOrder(drink);
    expect(typeof ticket).toBe("number");
    expect(ticket).toBeGreaterThanOrEqual(0);
    expect(ticket).toBeLessThan(1000);
  });
});
