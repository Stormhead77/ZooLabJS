import FeedTime from "../Utility/FeedTime";
import Employee from "./Employee";

export default class ZooKeeper extends Employee {
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

  feedAnimal = (animal) => {
    if (!this.hasAnimalExperience(animal.constructor)) {
      throw "No needed experience";
    }

    const today = new Date().toLocaleDateString("en-US");

    if (
      animal.feedTimes.length >= 2 &&
      animal.feedTimes.at(-1).dateTime.toLocaleDateString("en-US") == today &&
      animal.feedTimes.at(-2).dateTime.toLocaleDateString("en-US") == today
    ) {
      return false;
    }

    animal.feed();
    animal.feedTimes.push(new FeedTime(new Date(), this));

    return true;
  };
}
