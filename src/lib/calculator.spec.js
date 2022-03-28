const { sum } = require("./calculator");
it("should  sum 2 and 2 and the result must be 4", () => {
  expect(sum(2.5, 2.5)).toBe(5);
});

it("should sum 2 and 2 even if one of then is string and the result must be 4", () => {
  expect(sum("2.5", "2.5")).toBe(5);
});

it("should throw an error if what is provded to the merhod can not be sum", () => {
  expect(() => {
    sum("", "2");
  }).toThrowError();

  expect(() => {
    sum([2, 2]);
  }).toThrowError();

  expect(() => {
    sum({});
  }).toThrowError();

  expect(() => {
    sum();
  }).toThrowError();
});
