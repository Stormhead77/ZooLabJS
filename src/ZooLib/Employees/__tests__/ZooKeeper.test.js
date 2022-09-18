import { describe, expect, it, jest } from "@jest/globals";
import Employee from "../Employee";
import ZooKeeper from "../ZooKeeper";
import Bison from "../../Animals/Mammals/Bison";
import Elephant from "../../Animals/Mammals/Elephant";

describe("ZooKeeper", () => {
  it("should extends Employee", () => {
    const zooKeeper = new ZooKeeper();

    expect(zooKeeper).toBeInstanceOf(Employee);
  });

  it("should be able to create", () => {
    const zooKeeper = new ZooKeeper();

    expect(zooKeeper.animalExperiences).toStrictEqual([]);
  });

  it("should be able to check animal experience", () => {
    const zooKeeper = new ZooKeeper();
    zooKeeper.animalExperiences = [Bison];

    const experience = zooKeeper.hasAnimalExperience(Bison);

    expect(experience).toEqual(true);
  });

  it("should not be able to check animal experience", () => {
    const zooKeeper = new ZooKeeper();
    zooKeeper.animalExperiences = [Bison];

    const experience = zooKeeper.hasAnimalExperience(Elephant);

    expect(experience).toEqual(false);
  });

  it("should be able to add animal experience", () => {
    const zooKeeper = new ZooKeeper();

    zooKeeper.addAnimalExperience(Bison);

    expect(zooKeeper.animalExperiences).toContain(Bison);
  });

  it("should be able to feed animal", () => {
    const zooKeeper = new ZooKeeper();
    zooKeeper.addAnimalExperience(Bison);
    const bison = new Bison();

    const feed = jest.fn();
    bison.feed = feed;
    const res = zooKeeper.feedAnimal(bison);

    expect(res).toEqual(true);
    expect(bison.feed).toHaveBeenCalledTimes(1);
    expect(bison.feedTimes).toHaveLength(1);
  });

  it("should throw 'No needed experience'", () => {
    const zooKeeper = new ZooKeeper();
    zooKeeper.addAnimalExperience(Bison);
    const elephant = new Elephant();

    expect(() => zooKeeper.feedAnimal(elephant)).toThrowError(
      "No needed experience"
    );
  });

  it("should not be able to feed animal 3 times", () => {
    const zooKeeper = new ZooKeeper();
    zooKeeper.addAnimalExperience(Bison);
    const bison = new Bison();

    zooKeeper.feedAnimal(bison);
    zooKeeper.feedAnimal(bison);
    const feed = jest.fn();
    bison.feed = feed;
    const res = zooKeeper.feedAnimal(bison);

    expect(res).toEqual(false);
    expect(bison.feed).toHaveBeenCalledTimes(0);
  });
});
