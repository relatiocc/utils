import { describe, expect, it } from "vitest";
import { generateString } from "./string";

describe("generateString", () => {
  const generatedString = generateString(6);

  it("should return a string with a length of 6", () => {
    expect(generatedString.length).toBe(6);
  });
});
