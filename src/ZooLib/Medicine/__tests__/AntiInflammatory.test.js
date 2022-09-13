import { describe, expect, it } from "@jest/globals";
import AntiInflammatory from "../AntiInflammatory";
import Medicine from "../Medicine";

describe("AntiInflammatory", () => {
  it("should be able to create", () => {
    let antiInflammatory = new AntiInflammatory();

    expect(antiInflammatory).toBeInstanceOf(Medicine);
  });
});
