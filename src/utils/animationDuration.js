/*
Control the order of element appearances. Each variable is assigned
millis() value at which the animation starts, multiplied by the speed variable
to determine the speed.
*/

export const speed = 2.0;                         // Speed (higher value means slower)
export const sq01T = 340 * speed;                 // Initial large black square
export const sq02T = 700 * speed;                 // Yellow square
export const sq03T = 1000 * speed;                // Black square

export const qu01T = 460 * speed;                 // Yellow polygon above
export const qu02T = 500 * speed;                 // Blue polygon
export const qu03T = 1800 * speed;                // Yellow polygon below
export const qu04T = 790 * speed;                 // Red polygon

export const tr01T = 900 * speed;                 // Yellow triangle below
export const tr02T = 1200 * speed;                // Yellow triangle above
export const tr03T = 800 * speed;                 // Red triangle
export const tr04T = 1400 * speed;                // Blue triangle
export const tr05T = 1500 * speed;                // Black triangle

export const rect01T = 1800 * speed;              // Horizontal blue rectangle
export const rect02T = 650 * speed;               // Vertical blue rectangle above
export const rect03T = 1000 * speed;              // Vertical yellow rectangle below
export const rect04T = 500 * speed;               // Red square
export const rect05T = 500 * speed;               // Vertical blue rectangle below
export const rect06T = 800 * speed;               // Blue square
export const rect07T = 800 * speed;               // Vertical yellow rectangle above
export const rect08T = 1200 * speed;              // Black rectangle