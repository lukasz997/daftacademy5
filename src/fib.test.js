import fib from "./fib";
import { FileCoverage } from "istanbul-lib-coverage";

test("return good values", () => {
  expect(fib(4)).toBe(3);
  expect(fib(11)).toBe(89);
  expect(fib(19)).toBe(4181);
});

test("throw if argument < 0", () => {
  expect(() => fib(-4)).toThrow();
});

test("throw if argument is a string value", () => {
  expect(() => fib("string")).toThrow();
});

test("check if return typeof isn't a number", () => {
  expect(typeof fib(5)).toBe("number");
});
