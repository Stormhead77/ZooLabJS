import { describe, expect, it, test } from "@jest/globals";
import Mammal from "../Mammal";
import Animal from "../../Animal";

describe("Mammal", () => {
  it("should extends Animal", () => {
    let mammal = new Mammal();

    expect(mammal).toBeInstanceOf(Animal);
  });
});
