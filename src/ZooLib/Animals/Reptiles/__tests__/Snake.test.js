import { describe, expect, it, test } from "@jest/globals";
import Meat from "../../../Food/Meat";
import Parrot from "../../Birds/Parrot";
import Penguin from "../../Birds/Penguin";
import Bison from "../../Mammals/Bison";
import Elephant from "../../Mammals/Elephant";
import Lion from "../../Mammals/Lion";
import Reptile from "../Reptile";
import Turtle from "../Turtle";
import Snake from "../Snake";

describe("Snake", () => {
  it("should extends Reptile", () => {
    let snake = new Snake();

    expect(snake).toBeInstanceOf(Reptile);
  });

  it("should be able to create Snake", () => {
    let snake = new Snake();

    expect(snake).not.toBeNull();
    expect(snake.requiredSpaceSqFt).toBe(2);
    expect(snake.favoriteFood).toEqual(expect.arrayContaining([Meat]));
  });

  test.each([new Snake()])("should friendly with", (animal) => {
    let snake = new Snake();

    let friendly = snake.isFriendlyWith(animal);

    expect(friendly).toEqual(true);
  });

  test.each([
    new Parrot(),
    new Penguin(),
    new Bison(),
    new Elephant(),
    new Lion(),
    new Turtle(),
  ])("should not friendly with", (animal) => {
    let snake = new Snake();

    let friendly = snake.isFriendlyWith(animal);

    expect(friendly).toEqual(false);
  });

  //   it("should be able to feed", () => {
  //     let snake = new Snake();
  //   });
});
