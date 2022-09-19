import { describe, expect, it } from "@jest/globals";
import ZooKeeper from "../../Employees/ZooKeeper";
import ZooKeeperHireValidator from "../ZooKeeperHireValidator";
import Zoo from "../../Zoo";
import Enclosure from "../../Enclosure";
import Lion from "../../Animals/Mammals/Lion";
import Bison from "../../Animals/Mammals/Bison";
import Elephant from "../../Animals/Mammals/Elephant";

describe("ZooKeeperHireValidator", () => {
  it("should validate ZooKeeper", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB];

    const zooKeeperA = new ZooKeeper();
    zooKeeperA.addAnimalExperience(Lion);

    const errors = ZooKeeperHireValidator.ValidateEmployee(zooKeeperA, zoo);

    expect(errors).toHaveLength(0);
  });

  it("should return 'No animal experience'", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB];

    const zooKeeperA = new ZooKeeper();
    zooKeeperA.addAnimalExperience(Elephant);

    const errors = ZooKeeperHireValidator.ValidateEmployee(zooKeeperA, zoo);

    expect(errors).toEqual(["No animal experience"]);
  });
});
