import { describe, expect, it } from "@jest/globals";
import Employee from "../Employee";

describe("Employee", () => {
  it("should be able to create", () => {
    const employee = new Employee();

    expect(employee.firstName).toEqual("");
    expect(employee.lastName).toEqual("");
  });
});
