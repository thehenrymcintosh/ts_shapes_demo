import { expect } from "chai";
import { Square, Circle } from "./shapes";
import {sumArea} from "./sumArea";

describe("Sum area", () => {
  it("3 unit squares have area 3", () => {
    const shapes = [
      new Square(1),
      new Square(1),
      new Square(1),
    ];
    expect(sumArea(shapes)).to.equal(3);
  });
});