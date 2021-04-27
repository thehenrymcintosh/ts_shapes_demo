import { expect } from "chai";
import { Square } from "./Square.mjs";

describe("Square", () => {
  it("can be created with a positive integer side length", () => {
    const s = new Square(1);
    expect(s).is.instanceOf(Square);
  })

  it("cannot be created if side length is 0 or less", () => {
    expect( () => {  new Square(0) }).throws();
    expect( () => {  new Square(-1) }).throws();
  })

  describe("Area", () => {
    it("unit square has area of 1", () => {
      const s = new Square(1);
      expect(s.area()).to.eql(1);
    })

    it("side length of 17 has area of 289", () => {
      const s = new Square(17);
      expect(s.area()).to.eql(289);
    })

    it("side length of 0.5 has area of 0.25", () => {
      const s = new Square(0.5);
      expect(s.area()).to.eql(0.25);
    })
  })
})