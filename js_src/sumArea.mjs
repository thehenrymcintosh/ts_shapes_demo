
export function sumArea(shapes) {
  let area = 0;
  for (const shape of shapes) {
    area += getArea(shape);
  }
  return area;
}

function getArea(shape) {
  if (shape.type === "Circle" && shape.radius) {
    return Math.PI * (shape.radius ** 2);
  } else if ( shape.type === "Square" && shape.side_length) {
    return shape.side_length ** 2;
  } else if (shape.type === "Triangle" && shape.height && shape.width) {
    return shape.height * shape.width * 0.5;
  } else {
    throw new Error(`can't get area of ${shape}`);
  }
}