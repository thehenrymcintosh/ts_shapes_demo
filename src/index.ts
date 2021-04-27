// create some shapes
// rotate them
// scale them 
// get the total area of all shapes
// draw them out

import { Circle, Triangle, Square, Shape} from "./shapes";
import { sumArea } from "./sumArea";

const shapes : Shape[]  = [
  new Square(19),
  new Circle(5),
  new Triangle(7, 4),
];

const total_area = sumArea(shapes);

log(`TS`);
log(`total area is ${total_area}`);

function log(text) {
  // green log colour
  console.log('\x1b[32m%s\x1b[0m', text);
}