import { describe, expect, it } from "@jest/globals";
import Animal from "../Animal";

describe("Animal", () => {
  it("should contain fields", () => {
    let animal = new Animal();

    expect(animal.id).toBeDefined();
    expect(animal.requiredSpaceSqFt).toBeDefined();
    expect(animal.favoriteFood).toBeDefined();
    expect(animal.feedTimes).toBeDefined();
    expect(animal.feedSchedule).toBeDefined();
    expect(animal.isSick).toBeDefined();

    expect(animal.friendlyAnimals).toBeDefined();
  });

  it("should contain default values", () => {
    let animal = new Animal();

    expect(animal.feedTimes).toStrictEqual([]);
    expect(animal.feedSchedule).toStrictEqual([]);
    expect(animal.isSick).toBe(false);
  });

  it("should be able to set feed schedule", () => {
    let animal = new Animal();

    let schedule = [9, 18];
    animal.addFeedSchedule(schedule);

    expect(animal.feedSchedule).toEqual(schedule);
  });

  it("should be able to heal", () => {
    let animal = new Animal();

    animal.isSick = true;
    animal.heal();

    expect(animal.isSick).toEqual(false);
  });

  it("should have friendly animals", () => {
    let animal = new Animal();

    let friendly = animal.isFriendlyWith();

    expect(friendly).toEqual(false);
  });
});
