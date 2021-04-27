import { expect } from "chai";
import { Square } from "./shapes/index.mjs";
import {sumArea} from "./sumArea.mjs";

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