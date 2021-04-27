
export function sumArea(shapes) {
  let area = 0;
  for (const shape of shapes) {
    area += getArea(shape);
  }
  return area;
}

function getArea(shape) {
  if (shape.type === "Circle") {
    return Math.PI * (shape.radius ** 2);
  } else if ( shape.type === "Square" ) {
    return shape.side_length ** 2;
  } else if (shape.type === "Triangle") {
    return shape.height * shape.width * 0.5;
  }
}