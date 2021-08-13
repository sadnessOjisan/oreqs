import { parse } from "./parse";

describe("qs", () => {
  describe("parse", () => {
    test("simple", () => {
      const actual = parse("a=c");
      expect(actual).toEqual({ a: "c" });
    });
    test("URL", () => {
      const actual = parse("q=qs&g=3");
      expect(actual).toEqual({ q: "qs", g: "3" });
    });
    test("array", () => {
      const actual = parse("aaa[]=1&aaa[]=2");
      expect(actual).toEqual({ aaa: ["1", "2"] });
    });
  });
});
