import { describe, test, expect } from "vitest";
import { orderDrink } from "../../coffeeshop.js";

describe("orderDrink (integration)", () => {
  test("returns true for a successful order", () => {
    const result = orderDrink("latte");
    expect(result).toBe(true);
  });
});
