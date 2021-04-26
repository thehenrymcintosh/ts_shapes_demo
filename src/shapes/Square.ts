import { Shape } from "./Shape";

export class Square implements Shape {
  private side_length: number;

  constructor(side_length: number) {
    if (side_length <= 0) throw new Error("Side length must be greater than 0");
    this.side_length = side_length;
  }

  area(): number {
    return this.side_length ** 2;
  }
}