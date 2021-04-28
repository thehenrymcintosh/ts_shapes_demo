import { Square } from "./Square";
import { Shape } from "./Shape";

export class Rectangle implements Shape  {
  private readonly height: number;
  private readonly width: number;
  private readonly rotation_degrees: number;
  
  constructor(width: number, height: number, angle = 0) {
    if (width <= 0) throw new Error("Width must be greater than 0");
    if (height <= 0) throw new Error("Height must be greater than 0");
    this.width = width;
    this.height = height;
    this.rotation_degrees = angle % 180;
  }

  area(): number {
    return this.height * this.width;
  }

  angle(): number {
    return this.rotation_degrees;
  }

  rotate(degrees): Shape {
    return new Rectangle(this.width, this.height, this.angle() + degrees);
  }

  scale(factor): Shape {
    return this.scaleXY(factor, factor);
  }

  scaleXY(xfactor, yfactor): Shape {
    const width = Math.abs(this.width * xfactor);
    const height = Math.abs(this.height * yfactor);
    if (width === height) {
      return new Square(width, this.angle());
    } else {
      return new Rectangle(width, height, this.angle());
    }
  }
  
  toString() {
    return `Rectangle angle ${this.angle()}`;
  }
}