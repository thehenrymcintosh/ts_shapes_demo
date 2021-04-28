import { Shape } from "./Shape";

export class Triangle implements Shape {
  private readonly width: number;
  private readonly height: number;
  private readonly rotation_degrees: number;

  constructor(width: number, height: number, angle = 0) {
    if (width <= 0) throw new Error("Triangle width must be a positive number");
    if (height <= 0) throw new Error("Triangle height must be a positive number");
    this.width = width;
    this.height = height;
    this.rotation_degrees = angle % 360;
  }

  rotate(degrees): Shape {
    const angle = this.rotation_degrees + degrees;
    return new Triangle(this.width, this.height, angle);
  }

  angle() {
    return this.rotation_degrees;
  }
  
  area(): number {
    return 1/2 * this.width * this.height;
  }

  scale(factor): Shape {
    return this.scaleXY(factor, factor);
  }

  scaleXY(xfactor, yfactor): Shape {
    const height = Math.abs(this.height * xfactor);
    const width = Math.abs(this.width * yfactor);
    let angle = this.angle();
    if (yfactor < 0) {
      angle += 180;
    }
    return new Triangle(width, height, angle);
  }
  
  toString() {
    return `Triangle angle: ${this.angle()}`;
  }
}