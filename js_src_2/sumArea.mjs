export function sumArea( shapes ) {
  let area = 0;
  for (const shape of shapes) {
    if (typeof shape.area !== "function" ) throw new Error(`${shape} is not a shape!`);
    area += shape.area();
  }
  return area;
}