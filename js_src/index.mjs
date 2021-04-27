// create some shapes
// rotate them
// scale them 
// get the total area of all shapes
// draw them out

import { Circle, Triangle, Square } from "./shapes/index.mjs";
import { sumArea } from "./sumArea.mjs";

const shapes = [
  new Square(19),
  new Circle(5),
  new Triangle(7, 4),
];

const total_area = sumArea(shapes);

log(`JS procedural`);
log(`total area is ${total_area}`)

function log(text) {
  // red log colour
  console.log('\x1b[31m%s\x1b[0m', text);
}