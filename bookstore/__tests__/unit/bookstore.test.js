import { describe, test, expect } from "vitest";
import { findBook, reserveStock, confirmPurchase } from "../../bookstore.js";

describe("findBook", () => {
  test("returns title and price for a valid book", () => {
    const book = findBook("dune");
    expect(book.title).toBe("dune");
    expect(book.price).toBe(89);
  });

  test("returns undefined price for a book not in the catalogue", () => {
    const book = findBook("hyperion");
    expect(book.title).toBe("hyperion");
    expect(book.price).toBe(undefined);
  });
});

describe("reserveStock", () => {
  test("returns a number between 1000 and 9999", () => {
    const book = { title: "dune", price: 89 };
    const code = reserveStock(book);
    expect(typeof code).toBe("number");
    expect(code).toBeGreaterThanOrEqual(1000);
    expect(code).toBeLessThanOrEqual(9999);
  });
});

describe("confirmPurchase", () => {
  test("throws when reservation code is falsy", () => {
    expect(() => confirmPurchase(0, 89)).toThrow("Invalid reservation");
  });
});
