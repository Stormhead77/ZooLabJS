import Grass from "../../Food/Grass";
import Bison from "../Mammals/Bison";
import Elephant from "../Mammals/Elephant";
import Parrot from "../Birds/Parrot";
import Reptile from "./Reptile";

export default class Turtle extends Reptile {
  constructor() {
    super();
    this.requiredSpaceSqFt = 5;
    this.favoriteFood = [Grass];
  }

  friendlyAnimals = () => [Bison, Elephant, Parrot, Turtle];
}
