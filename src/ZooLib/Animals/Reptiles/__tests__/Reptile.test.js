import { describe, expect, it, test } from "@jest/globals";
import Reptile from "../Reptile";
import Animal from "../../Animal";

describe("Reptile", () => {
  it("should extends Animal", () => {
    let reptile = new Reptile();

    expect(reptile).toBeInstanceOf(Animal);
  });
});
