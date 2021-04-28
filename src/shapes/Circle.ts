import { Shape } from "./shape";
import {Ellipse} from "./Ellipse";

export class Circle implements Shape {
  private readonly radius: number;
  constructor(radius: number) {
    if (radius <= 0) throw new Error("Radius must be greater than 0")
    this.radius = radius;
  }
  area(): number {
    return Math.PI * ( this.radius ** 2 );
  }

  angle() {
    return 0;
  }

  rotate(degrees: number): Shape {
    return this;
  }

  scale(factor): Shape {
    return this.scaleXY(factor, factor);
  }

  scaleXY(xfactor, yfactor): Shape {
    const a = Math.abs(this.radius * xfactor);
    const b = Math.abs(this.radius * yfactor);
    if (a === b) {
      return new Circle(a);
    } else {
      return new Ellipse(a, b); 
    }
  }

  toString() {
    return `Circle angle: ${this.angle()}`;
  }
}