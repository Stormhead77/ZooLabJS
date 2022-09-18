import { describe, expect, it, test } from "@jest/globals";
import Vegetables from "../../../Food/Vegetables";
import Bird from "../Bird";
import Parrot from "../Parrot";
import Penguin from "../Penguin";
import Bison from "../../Mammals/Bison";
import Elephant from "../../Mammals/Elephant";
import Lion from "../../Mammals/Lion";
import Turtle from "../../Reptiles/Turtle";
import Snake from "../../Reptiles/Snake";

describe("Parrot", () => {
  it("should extends Bird", () => {
    let parrot = new Parrot();

    expect(parrot).toBeInstanceOf(Bird);
  });

  it("should be able to create Parrot", () => {
    let parrot = new Parrot();

    expect(parrot).not.toBeNull();
    expect(parrot.requiredSpaceSqFt).toBe(5);
    expect(parrot.favoriteFood).toEqual(expect.arrayContaining([Vegetables]));
  });

  test.each([new Bison(), new Elephant(), new Parrot(), new Turtle()])(
    "should friendly with",
    (animal) => {
      let parrot = new Parrot();

      let friendly = parrot.isFriendlyWith(animal);

      expect(friendly).toEqual(true);
    }
  );

  test.each([new Penguin(), new Snake(), new Lion()])(
    "should not friendly with",
    (animal) => {
      let parrot = new Parrot();

      let friendly = parrot.isFriendlyWith(animal);

      expect(friendly).toEqual(false);
    }
  );

  //   it("should be able to feed", () => {
  //     let parrot = new Parrot();
  //   });
});
