export default class Enclosure {
  constructor() {
    // this.parentZoo = "";
    this.name = "";
    this.squareFeet = 0;
    this.animals = [];
  }

  addAnimal = (animal) => {
    const sqFtLeft =
      this.squareFeet -
      this.animals.reduce(
        (sumSqFt, animal) => (sumSqFt += animal.requiredSpaceSqFt),
        0
      );

    const friendly = this.animals.every(
      (x) => x.isFriendlyWith(animal) && animal.isFriendlyWith(x)
    );

    if (!friendly) {
      throw "Enclosure contain not friendly animal";
    }

    if (sqFtLeft >= animal.requiredSpaceSqFt) {
      this.animals.push(animal);
    } else {
      throw "There is no available space";
    }
  };
}
