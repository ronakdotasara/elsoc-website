import { describe, expect, it } from "vitest";
import { formatINR, humanize, initials, slugify } from "@/lib/utils";

describe("utils", () => {
  it("formats INR without decimals", () => {
    expect(formatINR(10000)).toBe("₹10,000");
    expect(formatINR(0)).toBe("₹0");
  });

  it("derives initials from names", () => {
    expect(initials("Ronak Dotasara")).toBe("RD");
    expect(initials("Priya")).toBe("P");
    expect(initials("Dr. Katam Nishanth")).toBe("DK");
  });

  it("humanizes enum-ish labels", () => {
    expect(humanize("THIRD_YEAR")).toBe("Third Year");
    expect(humanize("HARDWARE AND SOFTWARE")).toBe("Hardware and Software");
    expect(humanize("FRIDAY")).toBe("Friday");
  });

  it("slugifies filenames", () => {
    expect(slugify("Sparkathon Banner (1).JPEG")).toBe("sparkathon-banner-1jpeg");
    expect(slugify("  IMG_2025 - MOHIT  ")).toBe("img-2025-mohit");
  });
});
