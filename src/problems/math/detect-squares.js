// https://leetcode.com/problems/detect-squares/

/*

We can use the property of the squares that:
for any 2 points [x1, y1] and [x2, y2],
the points [x2, y1] and [x1, y2] must also exist,
and |x1 - x2| === |y1 - y2|
*/

class DetectSquares {
    points = {};

    add([x, y]) {
        if(this.points[x] === undefined) this.points[x] = {};
        this.points[x][y] = (this.points[x][y] ?? 0) + 1;
    }
    
    getSquareCount([x, y], [x1, y1]) {
        return (this.points[x1]?.[y1] ?? 0)
            * (this.points[x1]?.[y] ?? 0)
            * (this.points[x]?.[y1] ?? 0);
    }

    count([x, y]) {
        let squareCount = 0;
        for(let x1 in this.points) {
            const diff = Math.abs(x - x1);
            if(this.points[x] !== undefined && diff !== 0) {
                // get count for both top and below the point
                squareCount += this.getSquareCount([x, y], [x1, y + diff]);
                squareCount += this.getSquareCount([x, y], [x1, y - diff]);
            }
        }
        return squareCount;
    }
}