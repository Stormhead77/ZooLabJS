import { describe, expect, it, test } from "@jest/globals";
import Meat from "../../../Food/Meat";
import Bird from "../Bird";
import Parrot from "../Parrot";
import Penguin from "../Penguin";
import Bison from "../../Mammals/Bison";
import Elephant from "../../Mammals/Elephant";
import Lion from "../../Mammals/Lion";
import Turtle from "../../Reptiles/Turtle";
import Snake from "../../Reptiles/Snake";

describe("Penguin", () => {
  it("should extends Bird", () => {
    let penguin = new Penguin();

    expect(penguin).toBeInstanceOf(Bird);
  });

  it("should be able to create Penguin", () => {
    let penguin = new Penguin();

    expect(penguin).not.toBeNull();
    expect(penguin.requiredSpaceSqFt).toBe(10);
    expect(penguin.favoriteFood).toEqual(expect.arrayContaining([Meat]));
  });

  test.each([new Penguin()])("should friendly with", (animal) => {
    let penguin = new Penguin();

    let friendly = penguin.isFriendlyWith(animal);

    expect(friendly).toEqual(true);
  });

  test.each([
    new Parrot(),
    new Lion(),
    new Bison(),
    new Elephant(),
    new Turtle(),
    new Snake(),
  ])("should not friendly with", (animal) => {
    let penguin = new Penguin();

    let friendly = penguin.isFriendlyWith(animal);

    expect(friendly).toEqual(false);
  });

  //   it("should be able to feed", () => {
  //     let penguin = new Penguin();
  //   });
});
