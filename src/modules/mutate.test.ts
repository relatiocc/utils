import { describe, it, expect } from "vitest";
import { deleteProps } from "./mutate";

describe("deleteProps", () => {
  const object = {
    id: 1,
    name: "Marino",
  };

  it("should remove 'id' from the object", () => {
    const noId = deleteProps(object, ["id"]);
    expect(noId).not.toHaveProperty("id");
  });

  it("should be an empty object", () => {
    const emptyObject = deleteProps(object, ["id", "name"]);
    expect(emptyObject).toEqual({});
  });
});
