import { describe, expect, it } from "vitest";
import { findPetByTagId, normalizeTagId } from "./demo-pets";

describe("collar ID lookup", () => {
  it("finds a pet regardless of case, spaces or missing hyphen", () => {
    expect(findPetByTagId("pl 20481")?.name).toBe("Bruno");
    expect(findPetByTagId("PL20481")?.name).toBe("Bruno");
    expect(normalizeTagId("  pl-31877 ")).toBe("PL-31877");
  });

  it("returns nothing for unknown or empty IDs", () => {
    expect(findPetByTagId("PL-00000")).toBeNull();
    expect(findPetByTagId("   ")).toBeNull();
  });
});
