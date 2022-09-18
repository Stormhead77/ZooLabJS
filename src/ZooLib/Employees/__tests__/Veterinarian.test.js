import { describe, expect, it, jest } from "@jest/globals";
import Employee from "../Employee";
import Veterinarian from "../Veterinarian";
import Bison from "../../Animals/Mammals/Bison";
import Elephant from "../../Animals/Mammals/Elephant";

describe("Veterinarian", () => {
  it("should extends Employee", () => {
    const veterinarian = new Veterinarian();

    expect(veterinarian).toBeInstanceOf(Employee);
  });

  it("should be able to create", () => {
    const veterinarian = new Veterinarian();

    expect(veterinarian.animalExperiences).toStrictEqual([]);
  });

  it("should be able to check has animal experience", () => {
    const veterinarian = new Veterinarian();
    veterinarian.animalExperiences = [Bison];

    const experience = veterinarian.hasAnimalExperience(Bison);

    expect(experience).toEqual(true);
  });

  it("should not be able to check has animal experience", () => {
    const veterinarian = new Veterinarian();
    veterinarian.animalExperiences = [Bison];

    const experience = veterinarian.hasAnimalExperience(Elephant);

    expect(experience).toEqual(false);
  });

  it("should be able to add animal experience", () => {
    const veterinarian = new Veterinarian();

    veterinarian.addAnimalExperience(Bison);

    expect(veterinarian.animalExperiences).toContain(Bison);
  });

  it("should be able to heal animal", () => {
    const veterinarian = new Veterinarian();
    veterinarian.addAnimalExperience(Bison);
    const bison = new Bison();
    bison.isSick = true;

    const heal = jest.fn();
    bison.heal = heal;
    const res = veterinarian.healAnimal(bison);

    expect(res).toEqual(true);
    expect(bison.heal).toHaveBeenCalledTimes(1);
  });

  it("should throw 'No needed experience'", () => {
    const veterinarian = new Veterinarian();
    veterinarian.addAnimalExperience(Bison);
    const elephant = new Elephant();
    elephant.isSick = true;

    expect(() => veterinarian.healAnimal(elephant)).toThrowError(
      "No needed experience"
    );
  });
});
