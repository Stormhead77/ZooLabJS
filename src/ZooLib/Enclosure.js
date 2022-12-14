export default class Enclosure {
  constructor(name, squareFeet) {
    // this.parentZoo = "";
    this.name = name;
    this.squareFeet = squareFeet;
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
      throw "No available space";
    }
  };
}
