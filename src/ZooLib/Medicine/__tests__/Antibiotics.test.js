import { describe, expect, it } from "@jest/globals";
import Antibiotics from "../Antibiotics";
import Medicine from "../Medicine";

describe("Antibiotics", () => {
  it("should be able to create", () => {
    let antibiotics = new Antibiotics();

    expect(antibiotics).toBeInstanceOf(Medicine);
  });
});
