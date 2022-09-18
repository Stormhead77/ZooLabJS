import Grass from "../../Food/Grass";
import Mammal from "./Mammal";
import Parrot from "../Birds/Parrot";
import Bison from "../Mammals/Bison";
import Turtle from "../Reptiles/Turtle";

export default class Elephant extends Mammal {
  constructor() {
    super();
    this.requiredSpaceSqFt = 1000;
    this.favoriteFood = [Grass];
  }

  friendlyAnimals = () => [Bison, Elephant, Parrot, Turtle];
}
