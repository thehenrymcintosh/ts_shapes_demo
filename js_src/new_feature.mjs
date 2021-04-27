export function newFeature(shapes) {
  for(const shape of shapes) {
    if (shape.type === "Triangle") {
      shape.angle += 90;
    }
  }
  
  scale(shapes, -0.5);
  
  for(const shape of shapes) {
    if (shape.type === "Triangle") {
      shape.angle += 45;
    } else if (shape.type === "Square") {
      shape.angle += 45;
    }
  }
  return shapes;
}



function scale(shapes, scale_by) {
  for(const shape of shapes) {
    if (shape.type === "Triangle") {
      shape.width = shape.width * scale_by;
      shape.height = shape.height * scale_by;
      if (scale_by < 0) {
        shape.angle += 180;
      }
    } else if (shape.type === "Square") {
      shape.side_length = shape.side_length * scale_by;
    } else if (shape.type === "Circle") {
      shape.radius = shape.radius * scale_by;
    }
  }
}