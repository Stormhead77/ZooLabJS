import { describe, expect, it } from "@jest/globals";
import Vegetables from "../Vegetables";
import Food from "../Food";

describe("Vegetables", () => {
  it("should be able to create", () => {
    let vegetables = new Vegetables();

    expect(vegetables).toBeInstanceOf(Food);
  });
});
