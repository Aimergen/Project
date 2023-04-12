import { cutTextToLength, slugify } from "../index";

const str = "The quick brown fox jumps over the lazy dog.";

describe("cutTextToLength", () => {
  it("should cut text to length", () => {
    expect(cutTextToLength(str, 20)).toBe("The quick brown fox ...");
  });

  it("should not cut text to length", () => {
    expect(cutTextToLength(str, 100)).toBe(str);
  });
});

const str2 = "Hello World!";
const str3 = "Өнөөдөр үнээгээ саана";
describe("sluggify", () => {
  it("should sluggify text", () => {
    expect(slugify(str2)).toBe("hello-world");
  });
  it("should sluggify extended crylic", () => {
    expect(slugify(str3)).toBe("өнөөдөр-үнээгээ-саана");
  });
});
