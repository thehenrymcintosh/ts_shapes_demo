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

console.log(`total area is ${total_area}`)