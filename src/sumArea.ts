import {Shape} from "./shapes";

export function SumArea( shapes: Shape[]): number {
  let area = 0;
  for (const shape of shapes) {
    area += shape.area();
  }
  return area;
}