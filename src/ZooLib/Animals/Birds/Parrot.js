import Vegetables from "../../Food/Vegetables";
import Bird from "./Bird";
import Bison from "../Mammals/Bison";
import Elephant from "../Mammals/Elephant";
import Turtle from "../Reptiles/Turtle";

export default class Parrot extends Bird {
  constructor() {
    super();
    this.requiredSpaceSqFt = 5;
    this.favoriteFood = [Vegetables];
  }

  friendlyAnimals = () => [Bison, Elephant, Parrot, Turtle];
}
