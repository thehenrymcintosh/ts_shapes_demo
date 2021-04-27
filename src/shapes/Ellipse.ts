import { Shape } from "./shape";
import { Circle } from "./Circle";

export class Ellipse implements Shape {
  private readonly a: number;
  private readonly b: number;
  private readonly rotation_degrees: number;

  constructor(a: number, b:number, angle=0) {
    if (a <= 0) throw new Error("A must be greater than 0");
    if (b <= 0) throw new Error("b must be greater than 0");
    this.a = a;
    this.b = b;
    this.rotation_degrees = angle % 180;
  }
  area(): number {
    return Math.PI * this.a * this.b;
  }

  angle() {
    return this.rotation_degrees;
  }

  rotate(degrees: number): Shape {
    return new Ellipse(this.a, this.b, this.angle() + degrees);
  }

  scale(factor): Shape {
    return this.scaleXY(factor, factor);
  }

  scaleXY(xfactor, yfactor): Shape {
    const a = Math.abs(this.a * xfactor);
    const b = Math.abs(this.b * yfactor);
    if (a === b) {
      return new Circle(a);
    } else {
      return new Ellipse(a, b, this.angle());
    }
  }

  toString() {
    return `Ellipse angle: ${this.angle()}`;
  }
}