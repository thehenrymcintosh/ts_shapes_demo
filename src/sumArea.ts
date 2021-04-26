import {Shape} from "./shapes";

export function SumArea( shapes: Shape[]): number {
  return shapes
    .reduce<number>((sum, shape) => sum + shape.area(), 0);
}