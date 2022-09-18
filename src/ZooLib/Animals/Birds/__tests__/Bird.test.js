import { describe, expect, it } from "@jest/globals";
import Bird from "../Bird";
import Animal from "../../Animal";

describe("Bird", () => {
  it("should extends Animal", () => {
    let bird = new Bird();

    expect(bird).toBeInstanceOf(Animal);
  });
});
