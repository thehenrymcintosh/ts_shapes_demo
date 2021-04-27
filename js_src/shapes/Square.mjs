export class Square  {
  side_length;
  type = "Square";
  angle = 0;
  constructor(side_length) {
    if (side_length <= 0) throw new Error("Side length must be greater than 0");
    this.side_length = side_length;
  }
}