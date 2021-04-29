export interface Shape {
  area(): number,
  angle(): number,
  scale(factor: number): Shape,
  scaleXY(xfactor: number, yfactor: number): Shape,
  rotate(degrees: number): Shape,
  toString(): string,
}