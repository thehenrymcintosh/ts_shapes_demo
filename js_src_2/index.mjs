// create some shapes
// rotate them 90 degrees
// scale them by -0.5
// rotate 45 degrees
// get the total area of all shapes
// draw them out

import { Circle, Triangle, Square } from "./shapes/index.mjs";
import { sumArea } from "./sumArea.mjs";
log(`JS polymorphic`);

const shapes = [
  new Square(19),
  new Circle(5),
  new Triangle(7, 4),
];


log(`initial total area is ${sumArea(shapes)}`);

function log(text) {
  // yellow log colour
  console.log('\x1b[33m%s\x1b[0m', text);
}