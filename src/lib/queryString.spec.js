import { queryString, parse } from "./queryString";

describe("Object to query string", () => {
  it("should create a valid query string when an object is passed", () => {
    const obj = {
      name: "Raul",
      profession: "developer",
    };

    // queryString(obj);
    expect(queryString(obj)).toBe("name=Raul&profession=developer");
  });
  it("should create a valid query string when an array is passed inside an object", () => {
    const obj = {
      name: "Raul",
      abilities: ["HTML", "CSS"],
    };
    expect(queryString(obj)).toBe("name=Raul&abilities=HTML,CSS");
  });

  it("should create a valid query string when an object is passed inside an object", () => {
    const obj = {
      name: "Raul",
      abilities: {
        first: "JS",
        second: "HTML",
      },
    };
    // console.log(queryString(obj));

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe("Query string to object", () => {
  it("should convert a query string to an object", () => {
    const qs = "name=Raul&profession=developer";

    expect(parse(qs)).toEqual({
      name: "Raul",
      profession: "developer",
    });
  });
  it("should convert a query string of a single key-value object", () => {
    const qs = "name=Raul";

    expect(parse(qs)).toEqual({
      name: "Raul",
    });
  });

  it("should convert a query string to an object taking care of somma separating", () => {
    const qs = "name=Raul&abilities=HTML,JS";
    expect(parse(qs)).toEqual({
      name: "Raul",
      abilities: ["HTML", "JS"],
    });
  });
});
