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
  it("returns true when a given string has at least a given number of characters", () => {
    expect(isLongEnough("Monterail", 8)).toEqual(true)
  });
  it("returns false when a given string doesn't have at a given minimum number of characters", () => {
    expect(isLongEnough("Monte", 8)).toEqual(false)
  });
})

describe("isUserOlderThan", () => {
  it("returns true if user born on a given day is of/older than a given age", () => {
    expect(isUserOlderThan("2000-01-01", 21)).toEqual(true);
  });
  it("returns false if user born on a given day is younger than a given age", () => {
    expect(isUserOlderThan("2010-01-01", 21)).toEqual(false)
  })
})
