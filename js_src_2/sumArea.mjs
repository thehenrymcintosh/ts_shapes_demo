export function sumArea( shapes ) {
  let area = 0;
  for (const shape of shapes) {
    area += shape.area();
  }
  return area;
}