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

describe("Elephant", () => {
  it("should extends Mammal", () => {
    let elephant = new Elephant();

    expect(elephant).toBeInstanceOf(Mammal);
  });

  it("should be able to create Elephant", () => {
    let elephant = new Elephant();

    expect(elephant).not.toBeNull();
    expect(elephant.requiredSpaceSqFt).toBe(1000);
    expect(elephant.favoriteFood).toEqual(expect.arrayContaining([Grass]));
  });

  test.each([new Bison(), new Elephant(), new Parrot(), new Turtle()])(
    "should friendly with",
    (animal) => {
      let elephant = new Elephant();

      let friendly = elephant.isFriendlyWith(animal);

      expect(friendly).toEqual(true);
    }
  );

  test.each([new Penguin(), new Lion(), new Snake()])(
    "should not friendly with",
    (animal) => {
      let elephant = new Elephant();

      let friendly = elephant.isFriendlyWith(animal);

      expect(friendly).toEqual(false);
    }
  );

  //   it("should be able to feed", () => {
  //     let elephant = new Elephant();
  //   });
});
