import { Shape } from "./Shape";

export class Triangle implements Shape {
  private width: number;
  private height: number;
  constructor(width: number, height: number) {
    if (width <= 0) throw new Error("Triangle width must be a positive number");
    if (height <= 0) throw new Error("Triangle height must be a positive number");
    this.width = width;
    this.height = height;
  }
  area(): number {
    return 1/2 * this.width * this.height;
  }
}