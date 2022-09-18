import { describe, expect, it, test } from "@jest/globals";
import Grass from "../../../Food/Grass";
import Mammal from "../Mammal";
import Parrot from "../../Birds/Parrot";
import Penguin from "../../Birds/Penguin";
import Bison from "../Bison";
import Elephant from "../Elephant";
import Lion from "../Lion";
import Turtle from "../../Reptiles/Turtle";
import Snake from "../../Reptiles/Snake";

describe("Bison", () => {
  it("should extends Mammal", () => {
    let bison = new Bison();

    expect(bison).toBeInstanceOf(Mammal);
  });

  it("should be able to create Bison", () => {
    let bison = new Bison();

    expect(bison).not.toBeNull();
    expect(bison.requiredSpaceSqFt).toBe(1000);
    expect(bison.favoriteFood).toEqual(expect.arrayContaining([Grass]));
  });

  test.each([new Bison(), new Elephant()])("should friendly with", (animal) => {
    let bison = new Bison();

    let friendly = bison.isFriendlyWith(animal);

    expect(friendly).toEqual(true);
  });

  test.each([
    new Parrot(),
    new Penguin(),
    new Lion(),
    new Turtle(),
    new Snake(),
  ])("should not friendly with", (animal) => {
    let bison = new Bison();

    let friendly = bison.isFriendlyWith(animal);

    expect(friendly).toEqual(false);
  });

  //   it("should be able to feed", () => {
  //     let bison = new Bison();
  //   });
});
