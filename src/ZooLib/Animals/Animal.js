export default class Animal {
  constructor() {
    this.id = 0;
    this.requiredSpaceSqFt = 0;
    this.favoriteFood = [];
    this.feedTimes = [];
    this.feedSchedule = [];
    this.isSick = false;
  }

  addFeedSchedule = (schedule) => {
    this.feedSchedule = schedule;
  };

  heal = () => {
    this.isSick = false;
  };

  friendlyAnimals = () => [];

  isFriendlyWith = (animal) => {
    return this.friendlyAnimals().some(
      (friendly) => animal instanceof friendly
    );
  };
}
