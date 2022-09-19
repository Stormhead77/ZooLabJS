import { describe, expect, it } from "@jest/globals";
import ZooKeeper from "../../Employees/ZooKeeper";
import Veterinarian from "../../Employees/Veterinarian";
import HireValidatorProvider from "../HireValidatorProvider";
import Zoo from "../../Zoo";
import Enclosure from "../../Enclosure";
import Lion from "../../Animals/Mammals/Lion";
import Bison from "../../Animals/Mammals/Bison";

describe("HireValidatorProvider", () => {
  it("should provide zooKeeper employee", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB];

    const zooKeeperA = new ZooKeeper();
    zooKeeperA.addAnimalExperience(Bison);

    let res = HireValidatorProvider.ProvideEmployee(zooKeeperA, zoo);

    expect(res).toEqual(true);
  });
  it("should provide veterinarian employee", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB];

    const veterinarianA = new Veterinarian();
    veterinarianA.addAnimalExperience(Lion);

    let res = HireValidatorProvider.ProvideEmployee(veterinarianA, zoo);

    expect(res).toEqual(true);
  });
});
