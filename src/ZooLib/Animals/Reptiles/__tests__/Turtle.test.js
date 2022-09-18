import { describe, expect, it, test } from "@jest/globals";
import Grass from "../../../Food/Grass";
import Parrot from "../../Birds/Parrot";
import Penguin from "../../Birds/Penguin";
import Bison from "../../Mammals/Bison";
import Elephant from "../../Mammals/Elephant";
import Lion from "../../Mammals/Lion";
import Reptile from "../Reptile";
import Turtle from "../Turtle";
import Snake from "../Snake";

describe("Turtle", () => {
  it("should extends Reptile", () => {
    let turtle = new Turtle();

    expect(turtle).toBeInstanceOf(Reptile);
  });

  it("should be able to create Turtle", () => {
    let turtle = new Turtle();

    expect(turtle).not.toBeNull();
    expect(turtle.requiredSpaceSqFt).toBe(5);
    expect(turtle.favoriteFood).toEqual(expect.arrayContaining([Grass]));
  });

  test.each([new Bison(), new Elephant(), new Parrot(), new Turtle()])(
    "should friendly with",
    (animal) => {
      let turtle = new Turtle();

      let friendly = turtle.isFriendlyWith(animal);

      expect(friendly).toEqual(true);
    }
  );

  test.each([new Penguin(), new Lion(), new Snake()])(
    "should not friendly with",
    (animal) => {
      let turtle = new Turtle();

      let friendly = turtle.isFriendlyWith(animal);

      expect(friendly).toEqual(false);
    }
  );

  //   it("should be able to feed", () => {
  //     let turtle = new Turtle();
  //   });
});
