import { createSquares, createTriangles, createPolygons, createRectangles } from ".";
import { setInitialTime } from "../utils";
export function initializeCreation(p) {
    const squares = createSquares(p);                   // Create squares
    const triangles = createTriangles(p);                 // Create triangles
    const polygons = createPolygons(p);                  // Create polygons
    const rectangles = createRectangles(p);                // Create rectangles
    randomAngle = p.random(-80, 60);     // Random figure to displace upper block of elements
    opacity = 0;                       // Transparency of texts is set to 0
    bgOpacity = 0;                     // Transparency of the final fade-out is set to 0
    rotation = 0;                      // Rotation of the small black square is set to 0
    setInitialTime(p.millis())            // Save the milliseconds information of the current moment

    return { squares, triangles, polygons, rectangles }
}