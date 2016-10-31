function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.abs((x2-x1)^2 + (y2-y1)^2));
}

var args = [2, 3, 2, -1];
// convert this function call to spread syntax
var distance = calcDistance.apply(null, args);

console.log('distance between points:' + distance);
