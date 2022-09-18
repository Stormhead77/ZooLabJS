import { describe, expect, it, test } from "@jest/globals";
import Meat from "../../../Food/Meat";
import Mammal from "../Mammal";
import Parrot from "../../Birds/Parrot";
import Penguin from "../../Birds/Penguin";
import Bison from "../Bison";
import Elephant from "../Elephant";
import Lion from "../Lion";
import Turtle from "../../Reptiles/Turtle";
import Snake from "../../Reptiles/Snake";

describe("Lion", () => {
  it("should extends Mammal", () => {
    let lion = new Lion();

    expect(lion).toBeInstanceOf(Mammal);
  });

  it("should be able to create Lion", () => {
    let lion = new Lion();

    expect(lion).not.toBeNull();
    expect(lion.requiredSpaceSqFt).toBe(1000);
    expect(lion.favoriteFood).toEqual(expect.arrayContaining([Meat]));
  });

  test.each([new Lion()])("should friendly with", (animal) => {
    let lion = new Lion();

    let friendly = lion.isFriendlyWith(animal);

    expect(friendly).toEqual(true);
  });

  test.each([
    new Parrot(),
    new Penguin(),
    new Bison(),
    new Elephant(),
    new Turtle(),
    new Snake(),
  ])("should not friendly with", (animal) => {
    let lion = new Lion();

    let friendly = lion.isFriendlyWith(animal);

    expect(friendly).toEqual(false);
  });

  //   it("should be able to feed", () => {
  //     let lion = new Lion();
  //   });
});
