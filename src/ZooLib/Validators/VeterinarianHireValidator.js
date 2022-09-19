export default class VeterinarianHireValidator {
  static ValidateEmployee = (zooKeeper, zoo) => {
    for (let i = 0; i < zoo.enclosures.length; i++) {
      for (let j = 0; j < zoo.enclosures[i].animals.length; j++) {
        if (
          zooKeeper.hasAnimalExperience(
            zoo.enclosures[i].animals[j].constructor
          )
        ) {
          return [];
        }
      }
    }

    return ["No animal experience"];
  };
}
