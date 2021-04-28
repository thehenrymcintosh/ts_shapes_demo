export function newFeature(shapes) {
  for(const shape of shapes) {
    if (shape.type === "Triangle") {
      if (typeof shape.angle !== "number") throw new Error("Triangle angle must be a number!");
      shape.angle += 90;
    }
  }
  
  scale(shapes, -0.5);
  
  for(const shape of shapes) {
    if (shape.type === "Triangle") {
      shape.angle += 45;
    } else if (shape.type === "Square") {
      if (typeof shape.angle !== "number") throw new Error("Square angle must be a number!");
      shape.angle += 45;
    }
  }
  return shapes;
}



function scale(shapes, scale_by) {
  if (!Array.isArray(shapes)) throw new Error("Shapes must be an array");
  for(const shape of shapes) {
    if (shape.type === "Triangle" && shape.width && shape.height && typeof shape.angle === "number") {
      shape.width = Math.abs(shape.width * scale_by);
      shape.height = Math.abs(shape.height * scale_by);
      if (scale_by < 0) {
        shape.angle += 180;
      }
    } else if (shape.type === "Square" && shape.side_length) {
      shape.side_length = Math.abs(shape.side_length * scale_by);
    } else if (shape.type === "Circle" && shape.radius) {
      shape.radius = Math.abs(shape.radius * scale_by);
    } else {
      throw new Error(`Cannot scale Shape: ${shape}`);
    }
  }
}