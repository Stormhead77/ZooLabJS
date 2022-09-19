import { describe, expect, it } from "@jest/globals";
import Veterinarian from "../../Employees/Veterinarian";
import VeterinarianHireValidator from "../VeterinarianHireValidator";
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

    const veterinarianA = new Veterinarian();
    veterinarianA.addAnimalExperience(Lion);

    const errors = VeterinarianHireValidator.ValidateEmployee(
      veterinarianA,
      zoo
    );

    expect(errors).toHaveLength(0);
  });

  it("should return 'No animal experience'", () => {
    let zoo = new Zoo("Canada");
    const enclosureA = new Enclosure("a", 2000);
    enclosureA.addAnimal(new Lion());
    const enclosureB = new Enclosure("b", 1500);
    enclosureB.addAnimal(new Bison());
    zoo.enclosures = [enclosureA, enclosureB];

    const veterinarianA = new Veterinarian();
    veterinarianA.addAnimalExperience(Elephant);

    const errors = VeterinarianHireValidator.ValidateEmployee(
      veterinarianA,
      zoo
    );

    expect(errors).toEqual(["No animal experience"]);
  });
});
