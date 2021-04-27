export class Circle {
  radius;
  type = "Circle";
  constructor(radius) {
    if (radius <= 0) throw new Error("Radius must be greater than 0")
    this.radius = radius;
  }
  
}