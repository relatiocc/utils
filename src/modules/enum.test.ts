import { describe, expect, it } from "vitest";
import { isEnumValue } from "./enum";

describe("isEnumValue", () => {
  enum Role {
    ADMIN,
    OWNER,
    MEMBER,
  }
  const isEnum = isEnumValue(Role, "OWNER");
  const isNotEnum = isEnumValue(Role, "MODERATOR");

  it("should return true", () => {
    expect(isEnum).toBeTruthy();
  });

  it("should return false", () => {
    expect(isNotEnum).toBeFalsy();
  });
});
