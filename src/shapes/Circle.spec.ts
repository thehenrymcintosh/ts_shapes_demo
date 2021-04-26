import { expect } from "chai";
import { Circle } from "./Circle";

const minPI = 3.141592653;
const maxPI = 3.141592654;

describe("Circle", () => {
  it("can be created from a positive radius", () => {
    let circle = new Circle(1);
    expect(circle).to.be.instanceOf(Circle);
  })

  it("cannot be created from a radius of 0 or less", () => {
    expect( () => {  new Circle(0) }).throws();
    expect( () => {  new Circle(-1) }).throws();
  })

  describe("Area", () => {
    it("Unit circle has area PI", () => {
      const circle = new Circle(1);
      const area = circle.area();
      expect(area > minPI).is.true;
      expect(area < maxPI).is.true;
    })

    it("Radius 7 has area 49PI", () => {
      const circle = new Circle(7);
      const area = circle.area();
      expect(area > 49 * minPI).is.true;
      expect(area < 49 * maxPI).is.true;
    })

    it("Radius 0.1 has area 0.01PI", () => {
      const circle = new Circle(0.1);
      const area = circle.area();
      expect(area > 0.01 * minPI).is.true;
      expect(area < 0.01 * maxPI).is.true;
    })
  })
})