export class Triangle {
  width;
  height;
  type="Triangle";
  angle = 0;
  constructor(width, height) {
    if (width <= 0) throw new Error("Triangle width must be a positive number");
    if (height <= 0) throw new Error("Triangle height must be a positive number");
    this.width = width;
    this.height = height;
  }
}