import { describe, expect, it } from "@jest/globals";
import AntiDepression from "../AntiDepression";
import Medicine from "../Medicine";

describe("AntiDepression", () => {
  it("should be able to create", () => {
    let antiDepression = new AntiDepression();

    expect(antiDepression).toBeInstanceOf(Medicine);
  });
});
