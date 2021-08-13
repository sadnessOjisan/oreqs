var qs = require("qs");

describe("qs", () => {
  describe("parse", () => {
    test("simple", () => {
      const actual = qs.parse("a=c");
      expect(actual).toEqual({ a: "c" });
    });
    test("URL", () => {
      const actual = qs.parse("q=qs&g=3");
      expect(actual).toEqual({ q: "qs", g: "3" });
    });
  });
});
