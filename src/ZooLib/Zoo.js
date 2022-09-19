import Enclosure from "./Enclosure";
import ZooKeeper from "./Employees/ZooKeeper";
import Veterinarian from "./Employees/Veterinarian";
import HireValidatorProvider from "./Validators/HireValidatorProvider";

export default class Zoo {
  constructor(location) {
    this.location = location;
    this.employees = [];
    this.enclosures = [];
  }

  addEnclosure = (name, squareFeet) => {
    this.enclosures.push(new Enclosure(name, squareFeet));
  };

  findAvailableEnclosure = (newAnimal) => {
    for (let i = 0; i < this.enclosures.length; i++) {
      let notFriendlyAnimal = this.enclosures[i].animals.some(
        (animal) =>
          !newAnimal.isFriendlyWith(animal) || !animal.isFriendlyWith(newAnimal)
      );

      if (!notFriendlyAnimal) {
        const sqFtLeft =
          this.enclosures[i].squareFeet -
          this.enclosures[i].animals.reduce(
            (sumSqFt, animal) => (sumSqFt += animal.requiredSpaceSqFt),
            0
          );

        if (newAnimal.requiredSpaceSqFt <= sqFtLeft) {
          return this.enclosures[i];
        }
      }
    }

    throw "No available enclosure";
  };

  feedAllAnimals = () => {
    let zooKeepers = this.employees.filter(
      (employee) => employee instanceof ZooKeeper
    );

    this.enclosures.forEach((enclosure) => {
      enclosure.animals.forEach((animal) => {
        zooKeepers
          .find((emp) => {
            return emp.hasAnimalExperience(animal.constructor);
          })
          .feedAnimal(animal);
      });
    });
  };

  healAllAnimals = () => {
    let vterinarians = this.employees.filter(
      (employee) => employee instanceof Veterinarian
    );

    this.enclosures.forEach((enclosure) => {
      enclosure.animals.forEach((animal) => {
        vterinarians
          .find((emp) => {
            return emp.hasAnimalExperience(animal.constructor);
          })
          .healAnimal(animal);
      });
    });
  };

  hireEmployee = (employee) => {
    if (HireValidatorProvider.ProvideEmployee(employee, this)) {
      this.employees.push(employee);
    }
  };
}
