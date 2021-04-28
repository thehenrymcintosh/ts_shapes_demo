import { Shape } from "./Shape";
import {Rectangle} from "./Rectangle";

export class Square implements Shape  {
  private readonly side_length: number;
  private readonly rotation_degrees: number;
  
  constructor(side_length: number, angle = 0) {
    if (side_length <= 0) throw new Error("Side length must be greater than 0");
    this.side_length = side_length;
    this.rotation_degrees = angle % 90;
  }

  area(): number {
    return this.side_length ** 2;
  }

  angle(): number {
    return this.rotation_degrees;
  }

  rotate(degrees): Shape {
    return new Square(this.side_length, this.angle() + degrees);
  }

  scale(factor): Shape {
    return this.scaleXY(factor, factor);
  }

  scaleXY(xfactor, yfactor): Shape {
    const width = Math.abs(this.side_length * xfactor);
    const height = Math.abs(this.side_length * yfactor);
    if (width === height) {
      return new Square(width, this.angle());
    } else {
      return new Rectangle(width, height, this.angle());
    }
  }

  toString() {
    return `Square angle: ${this.angle()}`;
  }
}