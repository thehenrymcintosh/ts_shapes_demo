// create some shapes
// rotate them 90 degrees
// scale them by -0.5
// rotate 45 degrees
// get the total area of all shapes
// get the minimum angle to rotate the shape
// draw them out

import { Circle, Triangle, Square } from "./shapes/index.mjs";
import { newFeature } from "./new_feature.mjs";
import { sumArea } from "./sumArea.mjs";
log(`JS procedural`);

const shapes = [
  new Square(19),
  new Circle(5),
  new Triangle(7, 4),
];

log(`initial total area is ${sumArea(shapes)}`);

const transformed_shapes = newFeature(shapes);

log(`transformed total area is ${sumArea(transformed_shapes)}`)
for(const shape of transformed_shapes) {
  log(`${shape.type} angle: ${shape.angle}`)
}
function log(text) {
  // red log colour
  console.log('\x1b[31m%s\x1b[0m', text);
}

