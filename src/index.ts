// create some shapes
// rotate them 90 degrees
// scale them by -0.5
// rotate 45 degrees
// get the total area of all shapes
// get the minimum angle to rotate the shape
// draw them out

import { newFeature } from "./new_feature";
import { Circle, Triangle, Square, Shape} from "./shapes";
import { sumArea } from "./sumArea";
log(`TS`);

const shapes : Shape[]  = [
  new Square(19),
  new Circle(5),
  new Triangle(7, 4),
];

log(`initial total area is ${sumArea(shapes)}`);
const transformed_shapes = newFeature(shapes);

log(`transformed total area is ${sumArea(transformed_shapes)}`);
transformed_shapes.forEach(log);
function log(text) {
  // green log colour
  console.log('\x1b[32m%s\x1b[0m', text);
}