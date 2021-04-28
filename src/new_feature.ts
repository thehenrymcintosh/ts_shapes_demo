import {Shape} from "./shapes";

export function newFeature(shapes: Shape[]): Shape[] {
  return shapes.map(transformShape);
}

function transformShape(shape: Shape) {
  return shape
    .rotate(90)
    .scale(-0.5)
    .rotate(45);
}