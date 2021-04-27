import { Shape } from "./shape";

export class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    if (radius <= 0) throw new Error("Radius must be greater than 0")
    this.radius = radius;
  }
  area(): number {
    return Math.PI * ( this.radius ** 2 );
  }
}