// Write a function to find the rectangular intersection of two given love rectangles.
// As with the example above, love rectangles are always "straight" and never "diagonal."
// More rigorously: each side is parallel with either the x-axis or the y-axis.
// They are defined as objects of Rectangle class:
//   public class Rectangle {
//     // coordinates of bottom left corner
//     Integer leftX;
//     Integer bottomY;
//     // dimensions
//     Integer width;
//     Integer height;
//
//     public Rectangle(Integer leftX, Integer bottomY, Integer width, Integer height) {
//         this.leftX = leftX;
//         this.bottomY = bottomY;
//         this.width  = width;
//         this.height = height;
//     }
//
//     public Rectangle() {}
//
//     public String toString() {
//         return String.format("(%d, %d, %d, %d)", leftX, bottomY, width, height);
//     }
// }

// Your output rectangle should be a Rectangle object as well.

// My approach of how to determine if the rectangular is overlapping -- calculate the area
