# Challenge

We will be drawing a fractal today! feel free to use the internet to any extent you like. 

## Part 1: cantor set

Draw a version of the [Cantor set](https://en.wikipedia.org/wiki/Cantor_set) which is a fractal that can be created by repeatedly splitting a line into smaller lines (`n` times).

## Part 2: a small modification

Modify implementation to alternate when splitting the lines. The first line should be split into 2 lines, then those should be split into 3 lines, then 2 etc

## Part 3: triangles come into play

Imagine each line makes up a triangle. Replace each line by the other 2 sides of the associated triangle.

## Part 4: go in the other direction

In previous part the triangle midpoint was either above or below the hypotenuse. Do it the other way now.

## Part 5: putting all together
The shape you have drawn has a pointy end. Draw 4 copies of the same shape, with the point end of each copy points to the origin.

## Part 6: in the other direction
Do the same as part 5 but with the modification done in part 4 (point ends of 4 copies will be pointing in the north/south/east/west directions)

## Part 7: nice
Put more copies of the total result in part 5 and part 6, with different rotations.


# Discussion
- How would you improve this implementation?
- Is this slow for large n? what is the complexity of this? how can it be improved?
- What did you think about the exercise?