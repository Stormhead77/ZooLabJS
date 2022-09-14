import { describe, expect, it } from "@jest/globals";
import Grass from "../Grass";
import Food from "../Food";

describe("Grass", () => {
  it("should be able to create", () => {
    let grass = new Grass();

    expect(grass).toBeInstanceOf(Food);
  });
});
