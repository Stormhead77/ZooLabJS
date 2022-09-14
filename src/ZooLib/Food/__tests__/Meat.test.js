import { describe, expect, it } from "@jest/globals";
import Meat from "../Meat";
import Food from "../Food";

describe("Meat", () => {
  it("should be able to create", () => {
    let meat = new Meat();

    expect(meat).toBeInstanceOf(Food);
  });
});
