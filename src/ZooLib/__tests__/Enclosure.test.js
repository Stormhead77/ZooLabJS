import { describe, expect, it } from "@jest/globals";
import Enclosure from "../Enclosure";
import Bison from "../Animals/Mammals/Bison";
import Elephant from "../Animals/Mammals/Elephant";
import Lion from "../Animals/Mammals/Lion";

describe("Enclosure", () => {
  it("should be able to create", () => {
    const enclosure = new Enclosure("a", 2000);

    // expect(enclosure.parentZoo).toEqual("");
    expect(enclosure.name).toEqual("a");
    expect(enclosure.squareFeet).toEqual(2000);
    expect(enclosure.animals).toStrictEqual([]);
  });

  it("should be able to add animal", () => {
    const enclosure = new Enclosure();
    enclosure.squareFeet = 2000;

    enclosure.addAnimal(new Bison());
    enclosure.addAnimal(new Elephant());

    expect(enclosure.animals).toHaveLength(2);
  });

  it("should throw 'no available space'", () => {
    const enclosure = new Enclosure();
    enclosure.squareFeet = 1500;

    enclosure.addAnimal(new Bison());

    expect(() => enclosure.addAnimal(new Elephant())).toThrowError(
      "No available space"
    );
  });

  it("should throw 'not friendly animal'", () => {
    const enclosure = new Enclosure();
    enclosure.squareFeet = 1500;

    enclosure.addAnimal(new Bison());

    expect(() => enclosure.addAnimal(new Lion())).toThrowError(
      "Enclosure contain not friendly animal"
    );
  });
});
