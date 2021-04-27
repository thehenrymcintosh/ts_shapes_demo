import { Triangle } from "./Triangle.mjs";
import { expect } from "chai";

describe("Triangle", () => {
  it("can be created with a positive integer side length", () => {
    const s = new Triangle(1, 1);
    expect(s).is.instanceOf(Triangle);
  })

  it("cannot be created if height is 0 or less", () => {
    expect( () => {  new Triangle(1, 0) }).throws();
    expect( () => {  new Triangle(1, -1) }).throws();
  })

  it("cannot be created if width is 0 or less", () => {
    expect( () => {  new Triangle(0, 1) }).throws();
    expect( () => {  new Triangle(-1, 1) }).throws();
  })

  describe("Area", () => {
    it("unit Triangle has area of 0.5", () => {
      const s = new Triangle(1, 1);
      expect(s.area()).to.eql(0.5);
    })

    it("height of 10 and width of 20 has area 100", () => {
      const s = new Triangle(10, 20);
      expect(s.area()).to.eql(100);
    })

    it("permuted height and width do not effect area", () => {
      const s1 = new Triangle(10, 20);
      const s2 = new Triangle(20, 10);
      expect(s1.area()).to.eql(s2.area());
    })

    it("height and width of 0.5 has area 0.125", () => {
      const s = new Triangle(0.5, 0.5);
      expect(s.area()).to.eql(0.125);
    })
  })
})