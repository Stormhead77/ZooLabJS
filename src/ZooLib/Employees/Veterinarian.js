import Employee from "./Employee";

export default class Veterinarian extends Employee {
  constructor() {
    super();
    this.animalExperiences = [];
  }

  hasAnimalExperience = (animal) => {
    return this.animalExperiences.includes(animal);
  };

  addAnimalExperience = (animal) => {
    if (!this.animalExperiences.includes(animal)) {
      this.animalExperiences.push(animal);
    }
  };

  healAnimal = (animal) => {
    if (!this.hasAnimalExperience(animal.constructor)) {
      throw "No needed experience";
    }

    animal.heal();
    return true;
  };
}
