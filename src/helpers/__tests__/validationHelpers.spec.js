import { describe, expect, it } from "vitest";
import { hasOneDigit, isLongEnough, isUserOlderThan } from "@/helpers/validationHelpers";

describe("hasOneDigit", () => {
  it("returns true when a given string includes at least one digit", () => {
    expect(hasOneDigit("Monte5")).toEqual(true);
  });
  it("returns false when a given string doesn't include any digit", () => {
    expect(hasOneDigit("MonteMonte!")).toEqual(false)
  })
})

describe("isLongEnough", () => {
  it("returns true when a given string has more than a given number of characters", () => {
    expect(isLongEnough("Monterail", 8)).toEqual(true)
  });
  it("returns true when a given string has a given number of characters", () => {
    expect(isLongEnough("Monteeee", 8)).toEqual(true)
  });
  it("returns false when a given string doesn't have at a given minimum number of characters", () => {
    expect(isLongEnough("Monte", 8)).toEqual(false)
  });
})

describe("isUserOlderThan", () => {
  it("returns true if user born on a given day is older than a given age", () => {
    const today = new Date();
    const birthDate = new Date(today.setFullYear(today.getFullYear() - 20));
    expect(isUserOlderThan(birthDate, 18)).toEqual(true);
  });
  it("returns true if user born on a given day is of the exact age", () => {
    const today = new Date();
    const birthDate = new Date(today.setFullYear(today.getFullYear() - 18));
    expect(isUserOlderThan(birthDate, 18)).toEqual(true)
  });
  it("returns false if user born on a given day is younger than a given age", () => {
    const today = new Date();
    const birthDate = new Date(today.setFullYear(today.getFullYear() - 10));
    expect(isUserOlderThan(birthDate, 18)).toEqual(false)
  });
})
