import { describe, expect, it } from "@jest/globals";
import Bison from "../Animals/Mammals/Bison";
import Zoo from "../Zoo";
import Enclosure from "../Enclosure";
import Lion from "../Animals/Mammals/Lion";
import ZooKeeper from "../Employees/ZooKeeper";
import Veterinarian from "../Employees/Veterinarian";

describe("Zoo", () => {
  it("should be able to zoo", () => {
    let zoo = new Zoo("Canada");

    expect(zoo.location).toEqual("Canada");
    expect(zoo.employees).toEqual([]);
    expect(zoo.enclosures).toEqual([]);
  });

  it("should be able to add enclosure", () => {
    let zoo = new Zoo("Canada");

    zoo.addEnclosure("a", 2000);

    expect(zoo.enclosures).toHaveLength(1);
  });

  it("should be able to find available enclosure", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    const enclosureC = new Enclosure("c", 1000);
    zoo.enclosures = [enclosureA, enclosureB, enclosureC];

    const animal = new Bison();
    const enclosure = zoo.findAvailableEnclosure(animal);

    expect(enclosure).not.toBeNull();
    expect(zoo.enclosures).toContain(enclosure);
  });

  it("should not be able to find available enclosure", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB];

    const animal = new Bison();

    expect(() => zoo.findAvailableEnclosure(animal)).toThrowError(
      "No available enclosure"
    );
  });

  it("should be able to feed animals", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    const enclosureC = new Enclosure("c", 1000);
    enclosureC.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB, enclosureC];

    const zooKeeperA = new ZooKeeper();
    zooKeeperA.addAnimalExperience(Lion);
    const zooKeeperB = new ZooKeeper();
    zooKeeperB.addAnimalExperience(Bison);
    zoo.employees = [zooKeeperA, zooKeeperB];

    zoo.feedAllAnimals();

    for (let i = 0; i < zoo.enclosures.length; i++) {
      for (let j = 0; j < zoo.enclosures[i].animals.length; j++) {
        expect(zoo.enclosures[i].animals[j].feedTimes).toHaveLength(1);
      }
    }
  });

  it("should be able to heal animals", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    let lionA = new Lion();
    lionA.isSick = true;
    let lionB = new Lion();
    enclosureA.animals = [lionA, lionB];
    const enclosureB = new Enclosure("b", 1500);
    let bisonA = new Lion();
    bisonA.isSick = true;
    enclosureB.animals = [bisonA];
    zoo.enclosures = [enclosureA, enclosureB];

    const veterinarianA = new Veterinarian();
    veterinarianA.addAnimalExperience(Lion);
    const veterinariaB = new Veterinarian();
    veterinariaB.addAnimalExperience(Bison);
    zoo.employees = [veterinarianA, veterinariaB];

    zoo.healAllAnimals();

    for (let i = 0; i < zoo.enclosures.length; i++) {
      for (let j = 0; j < zoo.enclosures[i].animals.length; j++) {
        expect(zoo.enclosures[i].animals[j].isSick).toEqual(false);
      }
    }
  });
});
