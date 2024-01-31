# Challenge

Implement the `drawDragon` function in `main.js` to draw a dragon curve of degree `n`.

## Dragon curve

The [Dragon Curve](https://en.wikipedia.org/wiki/Dragon_curve#Heighway_dragon) is a fractal curve that comes from iterating a family of curves.

For degree `n=0`, the curve is a single line segment.

For degrees `n>0` the curve looks like this:
![dragon](https://upload.wikimedia.org/wikipedia/commons/9/97/Dragon_curve_iterations_%282%29.svg)

To go from degree `n` to degree `n + 1`, replace each segment in the previous curve with 2 segments at right angles as in the image. Notice to which side of the line the new segments are placed.

Fun fact: you can also get this curve by repeatedly folding a strip of paper in half `n` times and unfolding each fold to 90 degrees.

## See also

[Golden dragon](https://larryriddle.agnesscott.org/ifs/heighway/goldenDragon.htm)
