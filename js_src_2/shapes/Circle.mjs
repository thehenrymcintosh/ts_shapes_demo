export class Circle {
  radius;
  constructor(radius) {
    if (radius <= 0) throw new Error("Radius must be greater than 0")
    this.radius = radius;
  }
  area() {
    return Math.PI * ( this.radius ** 2 );
  }
}