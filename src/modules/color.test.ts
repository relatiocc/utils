import { it, describe, expect, expectTypeOf } from "vitest";
import { getColorFromUsername, extractColorFromBg } from "./color";

describe("getColorFromUsername", () => {
  const color = getColorFromUsername("sunkiqxed");

  it("should return a string", () => {
    expectTypeOf(color).toBeString();
  });

  it("should, by default, return a background string", () => {
    expect(color.startsWith("bg")).toBeTruthy();
  });
});

describe("extractColorFromBg", () => {
  const color = extractColorFromBg("bg-green-900");

  it("should not return null", () => {
    expect(color).not.toBeNull();
  });

  it("should return a string", () => {
    expectTypeOf(color!).toBeString();
  });

  it("should return the color", () => {
    expect(color).toBe("green");
  });
});
