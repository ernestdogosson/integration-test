import { describe, test, expect } from "vitest";
import { buyBook } from "../../bookstore.js";

describe("buyBook (integration)", () => {
  test("returns an object with success true", () => {
    const result = buyBook("dune");
    expect(result.success).toBe(true);
  });
});
