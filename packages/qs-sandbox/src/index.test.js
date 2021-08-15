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
    test("encoded", () => {
      const actual = qs.parse(
        "first=this+is+a+field&second=was+it+clear+%28already%29%3F"
      );
      expect(actual).toEqual({
        first: "this is a field",
        second: "was it clear (already)?",
      });
    });
    test("encod and decoded", () => {
      const actual = qs.parse(
        `first=${encodeURIComponent(
          "this is a field"
        )}&second=${encodeURIComponent("was it clear (already)?")}`
      );
      expect(actual).toEqual({
        first: "this is a field",
        second: "was it clear (already)?",
      });
    });
  });
});
