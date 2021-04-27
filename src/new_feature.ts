export function newFeature(shapes) {
  return shapes.map(transformShape);
}

function transformShape(shape) {
  return shape
    .rotate(90)
    .scale(-0.5)
    .rotate(45);
}