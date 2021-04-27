export interface Shape {
  area(): number,
  angle(): number,
  scale(factor: number): Shape,
  scaleXY(xfactor: number, yfactor: number): Shape,
  rotate(degrees: number): Shape,
  toString(): string,
}

/**
 * Benefits of typescript conceptually
 * Control flow (decision making) and data flow (actually processing something)
 *    Isolate control flow using polymorphism and strongly typed interfaces
 * Explain the example problem 
 * Show JS code & Ts code side by side
 * Explain why you could do this in JS but not feasible (interface inconsistency, errors at runtime)
 * Example extension with a new complex feature (scaleXY)
 */